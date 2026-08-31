#!/usr/bin/env bun
/**
 * exemplars.ts — can this corpus be read as a grammar reference yet?
 *
 * The completeness report answers "how annotated is the corpus", which is a
 * fact about the average word. It is the wrong question for a reference. A
 * reference is used the other way round: someone arrives knowing they want
 * चतुर्थी बहुवचन, or ण्यत्, or जुहोत्यादि, and needs ONE example that is
 * completely labelled. A corpus that is 55% annotated everywhere can still have
 * nothing clean to show for any particular cell, and a corpus with a handful of
 * immaculate readings can cover more of the grammar than a large sloppy one.
 *
 * So this counts CELLS — every (word type × dimension × value) the schema
 * defines — and asks of each:
 *
 *   is it attested?                    does any word in the corpus carry it
 *   does it have a clean example?      is any of those words itself fully
 *                                      annotated, so it can be shown as one
 *
 * The second is the bar, because a half-labelled example teaches the reader to
 * expect half-labelled answers. It is also what makes the count honest: 38% of
 * cells are attested and 27% have an example worth printing.
 *
 * TWO QUEUES, AND THEY ARE DIFFERENT WORK.
 *
 *   --fix    cells that ARE attested but have no clean example. The sentence
 *            already exists; the annotation around it is short. Ranked by how
 *            many attestations there are, so the ones nearest to done come
 *            first — निष्ठा has 24 and not one of them is clean.
 *
 *   --write  cells with no attestation at all. These need a new reading, and
 *            no amount of tidying will produce one. Grouped by system so a
 *            session can take a whole area at once.
 *
 * Ranked rather than alphabetical on purpose: the point is to be a worklist,
 * not an inventory.
 */
import * as fs from 'fs';
import { typeOf, WORD_TYPES } from '../src/lib/usage/schema';
/*
  The SAME completeness test check-complete uses, not a second one.

  This script briefly had its own copy and it was wrong inside an hour: it
  demanded विभक्ति and वचन of क्त्वा and तुमुन्, which are अव्यय by 1.1.40, and
  cheerfully told an author to go and put a case on an indeclinable.
*/
import { missingFor, termsOf, typingTermsOf, carries, type AnnotatedWord } from '../src/lib/usage/complete';

type Word = AnnotatedWord;

const R = JSON.parse(fs.readFileSync('static/data/readings.json', 'utf-8'));

type Hit = { reading: string; form: string; missing: string[] };
const attested = new Map<string, Hit[]>();
const clean = new Set<string>();

for (const r of R.sequence ?? []) {
  for (const w of (r.words ?? []) as Word[]) {
    const terms = termsOf(w);
    const t = typeOf(typingTermsOf(w));
    if (!t) continue;
    const missing = missingFor(t, w, terms);
    for (const dim of t.dimensions) {
      if (!dim.values.length) continue;
      for (const v of dim.values) {
        // A value counts as carried whether the author wrote it or the build
        // derived it — the reader cannot tell, and neither should the reference.
        if (!carries(w, terms, dim.name, v)) continue;
        const key = `${t.dev} · ${dim.name} · ${v}`;
        (attested.get(key) ?? attested.set(key, []).get(key)!).push({
          reading: r.id, form: w.form, missing
        });
        if (!missing.length) clean.add(key);
      }
    }
  }
}

const allCells: string[] = [];
for (const t of WORD_TYPES) {
  for (const dim of t.dimensions) {
    if (!dim.values.length) continue;
    for (const v of dim.values) allCells.push(`${t.dev} · ${dim.name} · ${v}`);
  }
}

const withAttestation = allCells.filter((c) => attested.has(c));
const withClean = allCells.filter((c) => clean.has(c));
const toFix = withAttestation.filter((c) => !clean.has(c));
const toWrite = allCells.filter((c) => !attested.has(c));

const pct = (n: number) => Math.round((100 * n) / allCells.length);

if (process.argv.includes('--json')) {
  console.log(JSON.stringify({
    cells: allCells.length,
    attested: withAttestation.length,
    exemplary: withClean.length,
    toFix: toFix.length,
    toWrite: toWrite.length
  }));
  process.exit(0);
}

console.log('\n═══ the grammar, as examples ═══\n');
console.log(`  ${allCells.length} cells — every (type × dimension × value) the schema defines\n`);
console.log(`  attested somewhere          ${String(withAttestation.length).padStart(4)}  ${pct(withAttestation.length)}%`);
console.log(`  with a clean example        ${String(withClean.length).padStart(4)}  ${pct(withClean.length)}%   ← what a reference can show`);
console.log(`  attested but never clean    ${String(toFix.length).padStart(4)}        → bun run exemplars --fix`);
console.log(`  never attested              ${String(toWrite.length).padStart(4)}        → bun run exemplars --write`);

if (process.argv.includes('--fix')) {
  console.log(`\n── ${toFix.length} cells whose example only needs finishing ──\n`);
  const ranked = toFix
    .map((c) => ({ c, hits: attested.get(c)! }))
    .sort((a, b) => b.hits.length - a.hits.length);
  for (const { c, hits } of ranked) {
    // The nearest-to-done occurrence: fewest missing tags.
    const best = [...hits].sort((a, b) => a.missing.length - b.missing.length)[0];
    console.log(
      `  ${c.padEnd(34)} ${String(hits.length).padStart(3)} attested` +
        `   closest: ${best.reading} ${best.form} needs ${best.missing.join(', ')}`
    );
  }
}

if (process.argv.includes('--write')) {
  console.log(`\n── ${toWrite.length} cells with no example at all ──\n`);
  const bySystem = new Map<string, string[]>();
  for (const c of toWrite) {
    const [type, dim] = c.split(' · ');
    const k = `${type} · ${dim}`;
    (bySystem.get(k) ?? bySystem.set(k, []).get(k)!).push(c.split(' · ')[2]);
  }
  for (const [k, vals] of [...bySystem].sort((a, b) => b[1].length - a[1].length)) {
    console.log(`  ${k.padEnd(30)} ${String(vals.length).padStart(3)}  ${vals.slice(0, 12).join(' ')}${vals.length > 12 ? ' …' : ''}`);
  }
}

if (!process.argv.includes('--fix') && !process.argv.includes('--write')) {
  console.log('\n  --fix     cells whose example exists and needs finishing');
  console.log('  --write   cells that need a new reading, grouped by system');
}
console.log();
