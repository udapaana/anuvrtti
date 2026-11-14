#!/usr/bin/env bun
/**
 * check-paradigm-lit.ts — the cell a word lights must hold that word.
 *
 * The word panel shows a word's own paradigm with one cell lit. Nothing
 * checked that the lit cell IS the word: सन्तम् once lit a table of the root
 * अस् declined as a noun ("āḥ, asau, asam"). This runs the reader's own
 * resolver (src/lib/reader/wordParadigm.ts) over every word of every reading,
 * and reads the cell each whole-text pada carries (static/data/texts/), and
 * reports every word whose lit cell holds some other form.
 *
 *   bun scripts/check-paradigm-lit.ts            report; exit 1 over the floor
 *   bun scripts/check-paradigm-lit.ts --list     every mismatch
 *   bun scripts/check-paradigm-lit.ts --update   record today's count as the floor
 *
 * A ratchet like the coverage floors: content/paradigm-lit-floor.json holds the
 * number of mismatches tolerated today, and a rise fails `bun run check`.
 */
import * as fs from 'fs';
import * as path from 'path';
import { paradigmIndex, resolve } from '../src/lib/reader/wordParadigm';
import { deaccent } from '../src/lib/usage/normalize';

const ROOT = path.resolve(import.meta.dir, '..');
const FLOOR = path.join(ROOT, 'content/paradigm-lit-floor.json');
const args = process.argv.slice(2);

/** One spelling for comparison: no accents, final anusvāra as म्, final स् as visarga. */
const norm = (s: string) => deaccent(s).trim().replace(/^हे\s+/, '').replace(/ऽ/g, '').replace(/[ङञणनम]्(?=[क-ह])/g, 'ं').replace(/ं$/, 'म्').replace(/स्$/, 'ः').replace(/र्$/, 'ः')
  // सः/एषः before a consonant (6.1.132): the pada is स, the cell सः
  .replace(/^(स|एष)$/, '$1ः');
const holds = (cell: string, form: string) => cell.split('/').some((c) => norm(c) === norm(form));

type Miss = { where: string; form: string; table: string; cell: string };
const misses: Miss[] = [];
let checked = 0;
let vedic = 0;

// ── readings, through the reader's resolver ──────────────────────────────
const usage = JSON.parse(fs.readFileSync(path.join(ROOT, 'static/data/usage.json'), 'utf-8'));
const data = paradigmIndex(usage);
const readings = JSON.parse(fs.readFileSync(path.join(ROOT, 'static/data/readings.json'), 'utf-8'));
for (const ch of readings.chapters)
  for (const r of ch.readings)
    for (const w of r.words ?? []) {
      if (!w.form) continue;
      const terms = [...(w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term), ...Object.values(w.derived ?? {})] as string[];
      const p = resolve(data, w.lemma ?? '', w.form, terms);
      if (!p || p.row < 0 || p.col < 0) continue;
      // an accented Vedic form lights its classical equivalent, by design
      if (/[\u0951\u0952]/.test(w.form)) { vedic++; continue; }
      checked++;
      const cell = p.grid.rows[p.row].cells[p.col];
      if (!holds(cell, w.form)) misses.push({ where: r.id, form: w.form, table: `${p.stem}${p.lakara ? ' · ' + p.lakara : ''}`, cell });
    }

// ── whole texts, from the cell the build attached ────────────────────────
const tdir = path.join(ROOT, 'static/data/texts');
for (const f of fs.existsSync(tdir) ? fs.readdirSync(tdir) : []) {
  if (f === 'index.json' || !f.endsWith('.json')) continue;
  const t = JSON.parse(fs.readFileSync(path.join(tdir, f), 'utf-8'));
  for (const s of t.sections)
    for (const w of s.words)
      for (const p of w.padas) {
        if (!p.para || p.para.row < 0 || p.para.col < 0) continue;
        const tb = t.paradigms[p.para.key];
        if (!tb) continue;
        checked++;
        const cell = tb.rows[p.para.row]?.[p.para.col] ?? '';
        if (!holds(cell, p.form)) misses.push({ where: `${t.id} ${s.id}`, form: p.form, table: tb.stem, cell });
      }
}

const floor = fs.existsSync(FLOOR) ? JSON.parse(fs.readFileSync(FLOOR, 'utf-8')).mismatches : Infinity;
if (args.includes('--list')) for (const m of misses) console.log(`${m.where}\t${m.form}\t${m.table}\tlit: ${m.cell}`);
if (args.includes('--update')) {
  fs.writeFileSync(FLOOR, JSON.stringify({ mismatches: misses.length, note: 'words whose lit paradigm cell holds another form — scripts/check-paradigm-lit.ts' }, null, 2) + '\n');
  console.log(`recorded ${misses.length} as the floor`);
}
const msg = `${checked} lit cells, ${misses.length} hold another form than the word (${vedic} Vedic forms lit at their classical cell, not counted)`;
if (misses.length > floor) { console.log(`✗ paradigm-lit: ${msg} (floor ${floor}) — --list to see them`); process.exit(1); }
console.log(`✓ paradigm-lit: ${msg}${Number.isFinite(floor) ? ` (floor ${floor})` : ''}`);
