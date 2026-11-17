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
  grammar that treat it. The map is authored (content/grammar-refs/kale.yaml),
  hand-checked against the book; here it is only joined to each section's
  title, so the note can name it. Keyed by the TAG, not the glossary entry:
  a tag with no glossary note yet (a root, an ending) still has its sections.
  A section the book does not have is a fatal problem, not a dead link.
*/
type Cite = { s: number; why?: string; title?: string };
const KALE_REFS = path.join(process.cwd(), 'content/grammar-refs/kale.yaml');
const kaleRefs: Record<string, Cite[]> = fs.existsSync(KALE_REFS) ? parseYaml(fs.readFileSync(KALE_REFS, 'utf-8')) ?? {} : {};
const kaleBook = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'static/data/dukrnkarane.json'), 'utf-8'));
const kaleTitle = new Map<number, string>(kaleBook.rules.map((r: any) => [r.n, r.title]));

const cites: Record<string, { kale: Cite[] }> = {};
for (const [term, list] of Object.entries(kaleRefs)) {
  const out: Cite[] = [];
  for (const c of list ?? []) {
    const s = Number(c.s);
    if (!kaleTitle.has(s)) { problems.push(`kale: ${term} cites § ${s}, which the book does not have`); continue; }
    out.push({ s, title: kaleTitle.get(s), ...(c.why ? { why: c.why } : {}) });
  }
  if (out.length) cites[term] = { kale: out };
}

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
console.log(`  jargon: ${terms.length} terms across ${headwords} headwords (${Object.keys(cites).length} tags cite Kāle) → ${path.relative(process.cwd(), OUT)}`);
