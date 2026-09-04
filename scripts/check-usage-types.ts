#!/usr/bin/env bun
/**
 * check-usage-types.ts — /usage shows every word type the schema knows.
 *
 * The प्रयोग page renders whatever sections build-quiz emits, and for a long
 * time that was three: सुबन्त, सर्वनाम, तिङन्त. The other five word types were
 * annotated in the corpus, declined by the very same machinery, and filed
 * under "nouns" or nowhere — which read as "the corpus has no तद्धित" when it
 * had ninety-four. Nothing said so, because nothing joined the page's
 * inventory back to the schema's.
 *
 * This is that join, the same discipline systems.toml lives under: the schema
 * is the sole inventory of word types, and every consumer either covers it or
 * fails. Concretely —
 *
 *   every WORD_TYPES entry the corpus attests must have a section in
 *   usage.json whose kind matches its id, holding at least one entry
 *   (or, for a paradigm-less type, a list).
 *
 * "The corpus attests" is the qualifier that keeps this honest in both
 * directions: a ninth word type added to the schema before any reading uses it
 * should not fail the build — there is nothing to show yet — but the moment
 * one reading annotates it, a page that cannot display it is a gap, and the
 * build says so instead of a reader wondering where their word went.
 */
import * as fs from 'fs';
import { WORD_TYPES, typeOf } from '../src/lib/usage/schema';
import { typingTermsOf, type AnnotatedWord } from '../src/lib/usage/complete';

const R = JSON.parse(fs.readFileSync('static/data/readings.json', 'utf-8'));
const U = JSON.parse(fs.readFileSync('static/data/usage.json', 'utf-8'));

// How many words of each type the corpus actually has.
const attested = new Map<string, number>();
for (const r of R.sequence ?? []) {
  for (const w of (r.words ?? []) as AnnotatedWord[]) {
    const t = typeOf(typingTermsOf(w));
    if (t) attested.set(t.id, (attested.get(t.id) ?? 0) + 1);
  }
}

const sections = new Map<string, any>((U.sections ?? []).map((s: any) => [s.kind, s]));

const bad: string[] = [];
const rows: string[] = [];
for (const t of WORD_TYPES) {
  const n = attested.get(t.id) ?? 0;
  const s = sections.get(t.id);
  const shown = s ? (s.entries?.length ?? 0) + (s.sparse?.length ?? 0) + (s.list?.length ?? 0) : 0;
  rows.push(`${t.id}:${n}→${shown}`);
  if (!n) continue; // nothing attested, nothing owed
  if (!s) { bad.push(`${t.dev} (${t.id}): ${n} words in the corpus, no section in usage.json`); continue; }
  if (!shown) bad.push(`${t.dev} (${t.id}): ${n} words in the corpus, section is empty`);
}

// The reverse direction: a section whose kind names no schema type is either a
// typo or a type that was removed without its surface — both worth hearing.
for (const kind of sections.keys()) {
  if (!WORD_TYPES.some((t) => t.id === kind)) {
    bad.push(`section '${kind}' matches no word type in the schema`);
  }
}

/*
  The periphery's join key. /words, /review and the workbook footprint join the
  word bank to the corpus through quiz-cells.json at render time — deliberately
  storing nothing — which means their entire grammar display rests on this
  file's shape. A build-quiz refactor that renames `vibhaktis` breaks no build
  and empties every chip; this is what would say so.
*/
{
  const qc = JSON.parse(fs.readFileSync('static/data/quiz-cells.json', 'utf-8'));
  const forms = Object.keys(qc);
  const sample = forms.slice(0, 50).map((f) => qc[f]);
  if (!forms.length) bad.push('quiz-cells.json is empty — the periphery join has nothing to join to');
  else if (!sample.every((e) => Array.isArray(e.vibhaktis) && 'linga' in e)) {
    bad.push('quiz-cells.json entries lost their {linga, vibhaktis} shape — /words, /review and the workbook footprint join on it');
  }
}

if (bad.length) {
  console.error(`${bad.length} usage/schema mismatch(es):`);
  for (const b of bad) console.error(`    ${b}`);
  process.exit(1);
}
console.log(`usage sections: all ${WORD_TYPES.length} word types covered (${rows.join(' ')})`);
