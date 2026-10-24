#!/usr/bin/env bun
/**
 * check-paradigms.ts — the paradigm-cell ratchet.
 *
 * The coverage ratchet guards how FULLY words are annotated; it cannot see
 * WHICH forms the corpus shows. A rewrite that turns the only गवोः in the
 * corpus into गवि leaves every percentage where it was and quietly deletes a
 * cell of the paradigm. This guards the cells themselves: every (stem class ×
 * विभक्ति × वचन), every (लकार × पुरुष × वचन), every pronoun's (विभक्ति × वचन)
 * that some reading exhibits, fully annotated.
 *
 * Rewriting for cohesion is safe under it: a cell may move to another reading,
 * but it may not disappear.
 *
 *   bun scripts/check-paradigms.ts            # fail on a lost cell
 *   bun scripts/check-paradigms.ts --update   # record the current cells
 */
import * as fs from 'fs';
import * as path from 'path';
import { typeOf, VIBHAKTI, VACANA, LINGA, PURUSHA, LAKARA } from '../src/lib/usage/schema';
import { typingTermsOf } from '../src/lib/usage/complete';
import { finalSound } from '../src/lib/usage/taxonomy';
import { deaccent } from '../src/lib/usage/normalize';

const ROOT = process.cwd();
const FLOORS = path.join(ROOT, 'content/paradigm-floors.json');
/*
  Cells the corpus once showed only through a contrived example, removed on
  purpose. The goal is a complete reference by example, so a removed cell is not
  forgotten: it is owed, and reported until a natural example carries it again.
    bun scripts/check-paradigms.ts --want   # move every lost cell here
*/
const WANTED = path.join(ROOT, 'content/paradigm-wanted.json');
const corpus = JSON.parse(fs.readFileSync(path.join(ROOT, 'static/data/readings.json'), 'utf-8')).sequence as any[];

// Consonant stems split by what decides their declension, not just "हल्".
const HAL: [RegExp, string][] = [
  [/[क-ह]न्$/, 'अन्'], [/िन्$/, 'इन्'], [/[वम]त्$/, 'वत्/मत्'], [/[क-ह]त्$/, 'अत्'],
  [/[क-ह]स्$/, 'अस्'], [/[िु]स्$/, 'इस्/उस्'], [/[तद]्$/, 'त्/द्'], [/[चज]्$/, 'च्/ज्'],
  [/[शष]्$/, 'श्/ष्'], [/ह्$/, 'ह्'],
];
const pick = (t: Set<string>, pool: readonly string[]) => [...t].find((x) => pool.includes(x));

/** cell → the readings that show it */
const cells = new Map<string, Set<string>>();
const add = (c: string, id: string) => (cells.get(c) ?? cells.set(c, new Set()).get(c)!).add(id);

for (const r of corpus) {
  if (/rigveda/.test(r.chapter ?? '')) continue;  // Vedic forms are a paradigm of their own
  for (const w of r.words ?? []) {
    if (!w.lemma) continue;
    const t = typingTermsOf(w);
    const ty = typeOf(t);
    const lem = deaccent(w.lemma);
    const vb = pick(t, VIBHAKTI), vc = pick(t, VACANA);
    if (ty?.id === 'subanta') {
      const lg = pick(t, LINGA);
      if (!lg || !vb || !vc) continue;
      const f = finalSound(lem);
      const cls = f === 'hal' ? HAL.find(([re]) => re.test(lem))?.[1] : f;
      if (cls) add(`सुबन्त ${cls}·${lg}: ${vb} ${vc}`, r.id);
    } else if (ty?.id === 'sarvanama') {
      if (vb && vc) add(`सर्वनाम ${lem}: ${vb} ${vc}`, r.id);
    } else if (ty?.id === 'tinanta') {
      const l = pick(t, LAKARA), p = pick(t, PURUSHA);
      if (l && p && vc) add(`तिङन्त ${l}: ${p} ${vc}`, r.id);
    }
  }
}

const floor: string[] = fs.existsSync(FLOORS) ? JSON.parse(fs.readFileSync(FLOORS, 'utf-8')) : [];
const wanted: string[] = fs.existsSync(WANTED) ? JSON.parse(fs.readFileSync(WANTED, 'utf-8')) : [];

if (process.argv.includes('--update')) {
  fs.writeFileSync(FLOORS, JSON.stringify([...cells.keys()].sort(), null, 1) + '\n');
  if (fs.existsSync(WANTED)) fs.writeFileSync(WANTED, JSON.stringify(wanted.filter((c) => !cells.has(c)), null, 1) + '\n');
  console.log(`paradigms: recorded ${cells.size} cells → content/paradigm-floors.json`);
  process.exit(0);
}

const lost = floor.filter((c) => !cells.has(c));
if (process.argv.includes('--want')) {
  const next = [...new Set([...wanted, ...lost])].filter((c) => !cells.has(c)).sort();
  fs.writeFileSync(WANTED, JSON.stringify(next, null, 1) + '\n');
  fs.writeFileSync(FLOORS, JSON.stringify([...cells.keys()].sort(), null, 1) + '\n');
  console.log(`paradigms: ${lost.length} cell(s) moved to the wanted list (${next.length} owed)`);
  process.exit(0);
}
const owed = wanted.filter((c) => !cells.has(c));
const gained = [...cells.keys()].filter((c) => !floor.includes(c));
if (lost.length) {
  console.log(`paradigms: ${lost.length} cell(s) lost of ${floor.length}`);
  for (const c of lost) console.log(`    ${c}`);
  console.log('\n  A rewrite may move a form to another reading, not drop it. If the only\n  example was contrived, record it as owed: bun scripts/check-paradigms.ts --want');
  process.exit(1);
}
console.log(`paradigms: ${floor.length} cells held` + (gained.length ? `, ${gained.length} new (run --update to lock in)` : '') + (owed.length ? `, ${owed.length} wanted (content/paradigm-wanted.json)` : ''));
