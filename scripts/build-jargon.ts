/*
 * Build the glossary payload from static/data/jargon.yaml.
 *
 * The YAML is the hand-edited source: a map keyed by the Devanagari headword,
 * so every term is an IDE "Go to Symbol" jump target. A headword that repeats
 * holds a list of entries under its one key. This flattens that back to the
 * terms[] array the app expects and writes static/data/jargon.json — which
 * src/lib/jargon.ts imports directly (no client-side parser).
 *
 *   bun run build:jargon
 */
import { parse as parseYaml } from 'yaml';
import * as fs from 'fs';
import * as path from 'path';

const SRC = path.join(process.cwd(), 'static/data/jargon.yaml');
const OUT = path.join(process.cwd(), 'static/data/jargon.json');

const CATEGORIES = new Set([
  'samjna', 'pratyahara', 'karaka', 'vibhakti', 'pratyaya',
  'sandhi', 'lakara', 'gana', 'samasa', 'phonetics', 'general',
]);

type Cite = { s: number; why?: string; title?: string; href?: string };
type Entry = { termRoman: string; category: string; meaning: string; sutraRef?: string; related?: string[] };
type Term = Entry & { term: string };

const root = parseYaml(fs.readFileSync(SRC, 'utf-8')) as Record<string, Entry | Entry[]>;

const terms: Term[] = [];
const problems: string[] = []; // fatal — a malformed entry
const warnings: string[] = []; // non-fatal — e.g. a category outside the known set

for (const [term, value] of Object.entries(root)) {
  const entries = Array.isArray(value) ? value : [value];
  for (const e of entries) {
    if (!e || typeof e !== 'object') { problems.push(`${term}: entry is not a mapping`); continue; }
    if (!e.termRoman) problems.push(`${term}: missing termRoman`);
    if (!e.meaning) problems.push(`${term}: missing meaning`);
    if (!CATEGORIES.has(e.category)) warnings.push(`${term}: category ${JSON.stringify(e.category)} is outside the known set`);
    const t: Term = { term, termRoman: e.termRoman, category: e.category, meaning: e.meaning };
    if (e.sutraRef != null) t.sutraRef = String(e.sutraRef);
    if (e.related && e.related.length) t.related = e.related;
    terms.push(t);
  }
}

/*
  Where else to read about a term, besides its sūtra: the sections of Kāle's
  grammar and of Apte's Student's Guide that treat it. Both maps are authored
  (content/grammar-refs/), hand-checked against the books; here they are only
  joined to the glossary, with each section's title, so the note can name it.
  A section that does not exist in the book is a fatal problem, not a dead link.
*/
const REFS = path.join(process.cwd(), 'content/grammar-refs');
const readRefs = (f: string): Record<string, Cite[]> =>
  fs.existsSync(path.join(REFS, f)) ? (parseYaml(fs.readFileSync(path.join(REFS, f), 'utf-8')) ?? {}) : {};

const kaleBook = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'static/data/dukrnkarane.json'), 'utf-8'));
const kaleTitle = new Map<number, string>(kaleBook.rules.map((r: any) => [r.n, r.title]));

const APTE = path.join(process.cwd(), 'content/apte');
const apteSource = fs.existsSync(path.join(APTE, 'source.yaml')) ? parseYaml(fs.readFileSync(path.join(APTE, 'source.yaml'), 'utf-8')) : null;
const apteSections: { n: number; title: string; leaf?: number }[] =
  fs.existsSync(path.join(APTE, 'sections.yaml')) ? parseYaml(fs.readFileSync(path.join(APTE, 'sections.yaml'), 'utf-8')) ?? [] : [];
const apteBy = new Map(apteSections.map((x) => [Number(x.n), x]));
const apteHref = (leaf?: number) =>
  apteSource?.identifier && leaf != null ? `https://archive.org/details/${apteSource.identifier}/page/n${leaf}/mode/1up` : undefined;

// keyed by the TAG, not the glossary entry: a tag with no glossary note yet
// (a root, an ending) still has its sections in the books
const cites: Record<string, { kale?: Cite[]; apte?: Cite[] }> = {};
const attach = (book: 'kale' | 'apte', refs: Record<string, Cite[]>) => {
  for (const [term, list] of Object.entries(refs)) {
    const out: Cite[] = [];
    for (const c of list ?? []) {
      const s = Number(c.s);
      if (book === 'kale') {
        if (!kaleTitle.has(s)) { problems.push(`kale: ${term} cites § ${s}, which the book does not have`); continue; }
        out.push({ s, title: kaleTitle.get(s), ...(c.why ? { why: c.why } : {}) });
      } else {
        const sec = apteBy.get(s);
        if (!sec) { problems.push(`apte: ${term} cites § ${s}, which content/apte/sections.yaml does not index`); continue; }
        const href = apteHref(sec.leaf);
        out.push({ s, title: sec.title, ...(c.why ? { why: c.why } : {}), ...(href ? { href } : {}) });
      }
    }
    if (out.length) (cites[term] ??= {})[book] = out;
  }
};
attach('kale', readRefs('kale.yaml'));
attach('apte', readRefs('apte.yaml'));

if (problems.length) {
  console.error(`  jargon: ${problems.length} problem(s):`);
  for (const p of problems.slice(0, 30)) console.error(`    ${p}`);
  process.exit(1);
}
if (warnings.length) {
  console.warn(`  jargon: ${warnings.length} warning(s): ${warnings.slice(0, 6).join('; ')}${warnings.length > 6 ? ' …' : ''}`);
}

fs.writeFileSync(OUT, JSON.stringify({ terms, cites }, null, 2) + '\n', 'utf-8');
const headwords = Object.keys(root).length;
const cited = (b: 'kale' | 'apte') => Object.values(cites).filter((c) => c[b]).length;
console.log(`  jargon: ${terms.length} terms across ${headwords} headwords (tags citing Kāle: ${cited('kale')}, Apte: ${cited('apte')}) → ${path.relative(process.cwd(), OUT)}`);
