#!/usr/bin/env bun
/**
 * check-texts.ts — the `text` profile of "born complete", and the snapshot's
 * freshness. HARD, in `bun run check`.
 *
 * Freshness. data/text-analyses/<id>.json is vidyut's output, committed
 * because CI cannot run the native engine (docs/ARCHITECTURE.md, "Whole
 * texts"). It is stale when anything it was computed from has moved — the
 * text, VIDYUT_REV, the generator, the cheda patch, the MW pin — or when an
 * override names a lemma or splits out a pada the snapshot never looked up.
 * The fix is always the same: `bun scripts/snapshot-text.ts <id>` and commit.
 *
 * The gate, per text: every word segmented and every pada analysed (by vidyut
 * or by an override), every lemma with a gloss — MW's, or the author's where MW
 * has none or has the wrong sense; every override names a real word. No notes
 * are required.
 *
 * Deep check, where the engine exists: `bun scripts/snapshot-text.ts --check`
 * regenerates and diffs. Not run here — CI has no engine to run it with.
 */
import { slp } from './analyze-text';
import { textIds, readSnapshot, readOverrides, inputsOf } from './lib/texts';
import { resolveText, report } from './build-texts';

const problems: string[] = [];
let n = 0, words = 0;
for (const id of textIds()) {
  n++;
  const snap = readSnapshot(id);
  if (!snap) { problems.push(`${id}: no snapshot — bun scripts/snapshot-text.ts ${id}`); continue; }
  const now = inputsOf(id);
  for (const [k, v] of Object.entries(now))
    if ((snap.inputs as any)[k] !== v)
      problems.push(`${id}: snapshot stale — its ${k} is ${(snap.inputs as any)[k]}, now ${v}; rerun bun scripts/snapshot-text.ts ${id}`);
  for (const sec of Object.values(readOverrides(id)))
    for (const w of Object.values(sec ?? {}))
      for (const p of [...(w.split ?? []), ...Object.values(w.fix ?? {})]) {
        if (p.lemma && !(slp(p.lemma) in snap.lexicon))
          problems.push(`${id}: override lemma ${p.lemma} not looked up in MW — rerun bun scripts/snapshot-text.ts ${id}`);
        if (w.split?.includes(p) && p.form && !p.member && !(slp(p.form).replace(/H$/, 's') in (snap.kosha ?? {})))
          problems.push(`${id}: split pada ${p.form} not looked up in the kosha — rerun bun scripts/snapshot-text.ts ${id}`);
      }
  const r = resolveText(id);
  words += r.words;
  problems.push(...r.problems.map((p) => `${id}: ${p}`));
  for (const s of r.sections)
    for (const w of s.words) {
      if (!w.padas.length) problems.push(`${id}: ${s.id}/${w.surface} — not segmented`);
      for (const p of w.padas) {
        if (!p.lemma || (!p.a && !p.member)) problems.push(`${id}: ${s.id}/${w.surface} — ${p.form} has no analysis`);
        if (!p.gloss && !p.mw) problems.push(`${id}: ${s.id}/${w.surface} — ${p.form} (${p.lemma}) has neither a gloss nor an MW entry`);
      }
    }
  console.error(report(r));
}
const uniq = [...new Set(problems)];
if (uniq.length) {
  console.log(`texts: ${uniq.length} problem(s) in ${n} text(s)`);
  for (const p of uniq) console.log('    ' + p);
  process.exit(1);
}
console.log(`texts: ${n} text(s), ${words} words — every word segmented, analysed and glossed; snapshots fresh`);
