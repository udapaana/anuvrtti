#!/usr/bin/env bun
/**
 * audit-worklist.ts — the second reader's worklist for a run of a whole text
 * (tier 2 of docs/AUDITING.md): every pada nobody changed, which the author
 * read and let stand, and every mechanical flag.
 *
 *   bun scripts/audit-worklist.ts <id> <first> <last> [--mech flags.json] > out.md
 *
 * flags.json is audit-mechanical.ts --json's output. Each verse is printed
 * whole, then its unchanged padas as form | lemma | analysis | gloss, then its
 * flags. The reader sees the author's own decisions with text-worklist.ts.
 */
import * as fs from 'fs';
import { resolveText } from './build-texts';
import { readText } from './lib/texts';

const args = process.argv.slice(2);
const opt = (k: string) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
const [id, first, last] = args.filter((a, i) => !a.startsWith('--') && !(args[i - 1] ?? '').startsWith('--'));
if (!id || !first || !last) { console.error('usage: bun scripts/audit-worklist.ts <id> <first> <last> [--mech flags.json]'); process.exit(1); }

const t = readText(id);
const ids = t.sections.map((s) => s.id);
const a = ids.indexOf(first), b = ids.indexOf(last);
if (a < 0 || b < a) { console.error(`${first}–${last} is not a run of ${id}'s sections`); process.exit(1); }
const want = new Set(ids.slice(a, b + 1));
const mech: { section: string; word: string; pada: number; detail: string; check: string }[] =
  opt('--mech') ? JSON.parse(fs.readFileSync(opt('--mech')!, 'utf-8')) : [];

const out: string[] = [];
for (const s of resolveText(id).sections) {
  if (!want.has(s.id)) continue;
  const src: any = t.sections.find((x) => x.id === s.id);
  const rows: string[] = [];
  for (const w of s.words)
    w.padas.forEach((p: any, i: number) => {
      if (p.source === 'vidyut') rows.push(`  - \`${w.surface}\` pada ${i + 1}: ${p.form} | ${p.lemma} | ${p.a} | ${p.gloss ?? '—'}`);
    });
  for (const f of mech.filter((x) => x.section === s.id))
    rows.push(`  - MECHANICAL FLAG \`${f.word}\` pada ${f.pada} (${f.check}): ${f.detail}`);
  if (rows.length) out.push(`## ${s.id}: ${(src.lines ?? [src.text]).join(' / ')}`, ...rows);
}
console.log(out.join('\n'));
