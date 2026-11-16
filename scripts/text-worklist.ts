#!/usr/bin/env bun
/**
 * text-worklist.ts — a run of a whole text's sections, as the reader resolves
 * them now: for an author or an auditor working on that run.
 *
 *   bun scripts/text-worklist.ts <id> <first-section> <last-section>
 *   … --problems   only the check problems in the run
 *
 * For each section: its lines, then each word's padas as
 *   form | lemma | analysis | gloss  (source)
 * where source is vidyut (the engine's own pick, unreviewed), pick (an
 * author chose among vidyut's alternatives), author (an author supplied it),
 * or none. Then the run's problems, as bun run check reports them.
 * Reads the committed snapshot and overrides: rerun after a snapshot.
 */
import { resolveText } from './build-texts';
import { readText } from './lib/texts';

const [id, first, last] = process.argv.slice(2).filter((a) => !a.startsWith('--'));
if (!id || !first || !last) { console.error('usage: bun scripts/text-worklist.ts <id> <first> <last> [--problems]'); process.exit(1); }
const onlyProblems = process.argv.includes('--problems');

const t = readText(id);
const ids = t.sections.map((s) => s.id);
const a = ids.indexOf(first), b = ids.indexOf(last);
if (a < 0 || b < a) { console.error(`${first}–${last} is not a run of ${id}'s sections`); process.exit(1); }
const want = new Set(ids.slice(a, b + 1));
const r = resolveText(id);

if (!onlyProblems) {
  for (const s of r.sections) {
    if (!want.has(s.id)) continue;
    const src = t.sections.find((x) => x.id === s.id)!;
    console.log(`\n## ${s.id}${(src as any).scan ? '  (read from the book\'s scan)' : ''}`);
    for (const l of src.lines ?? [src.text ?? '']) console.log(`   ${l}`);
    for (const w of s.words) {
      const ps = w.padas.map((p: any) => `${p.form}${p.member ? '-' : ''} | ${p.lemma} | ${p.a} | ${p.gloss ?? '—'}  (${p.source})${p.note ? `  [note: ${p.note}]` : ''}`);
      console.log(`  ${w.surface}: ${ps.join('  ‖  ')}${(w as any).note ? `\n      [note on the word: ${(w as any).note}]` : ''}`);
    }
  }
}
const probs = r.problems.filter((p) => want.has(p.split('/')[0]));
console.log(`\n${probs.length} problem(s) in ${first}–${last}${probs.length ? ':' : ''}`);
for (const p of probs) console.log(`  ${p}`);
