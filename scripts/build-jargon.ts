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

if (problems.length) {
  console.error(`  jargon: ${problems.length} problem(s):`);
  for (const p of problems.slice(0, 30)) console.error(`    ${p}`);
  process.exit(1);
}
if (warnings.length) {
  console.warn(`  jargon: ${warnings.length} warning(s): ${warnings.slice(0, 6).join('; ')}${warnings.length > 6 ? ' …' : ''}`);
}

fs.writeFileSync(OUT, JSON.stringify({ terms }, null, 2) + '\n', 'utf-8');
const headwords = Object.keys(root).length;
console.log(`  jargon: ${terms.length} terms across ${headwords} headwords → ${path.relative(process.cwd(), OUT)}`);
