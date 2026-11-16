#!/usr/bin/env bun
/**
 * apply-corrections.ts — re-key a text's overrides after corrections.yaml
 * changes a printed word.
 *
 *   bun scripts/apply-corrections.ts <id>          rewrite the override files
 *   bun scripts/apply-corrections.ts <id> --dry    say what would move
 *
 * Overrides key a word as the line reads it (content/texts/OVERRIDES.md), and
 * the line now reads the corrected word: ईशयः's override must become ऋषयः's.
 * A correction can also renumber the words around it — a corrected word that
 * repeats one before it takes "#2", and a later repeat of the slip loses its
 * "#n" — so every key of a corrected section is mapped from its printed
 * numbering to its corrected one, and only the key lines are touched: the rest
 * of each YAML file is left byte for byte.
 *
 * Idempotent: a section whose override keys already read as the corrected
 * text, and not as the printed one, is left alone. Then re-snapshot:
 * bun scripts/snapshot-text.ts <id>.
 */
import * as fs from 'fs';
import * as path from 'path';
import { TEXTS_DIR, readSourceText, readCorrections, correctText, wordKeys, readOverrides } from './lib/texts';

const id = process.argv.slice(2).find((a) => !a.startsWith('--'));
const dry = process.argv.includes('--dry');
if (!id) { console.error('usage: bun scripts/apply-corrections.ts <id> [--dry]'); process.exit(1); }

const src = readSourceText(id);
const { text, problems } = correctText(src, readCorrections(id));
if (problems.length) {
  for (const p of problems) console.error(`  ! ${p}`);
  process.exit(1);
}
const ov = readOverrides(id);

/** section id → printed key → corrected key, for the keys that move */
const moves: Record<string, Map<string, string>> = {};
src.sections.forEach((s, i) => {
  const c = text.sections[i];
  if (c === s) return;
  const before = wordKeys(s), after = wordKeys(c);
  const have = Object.keys(ov[s.id] ?? {});
  if (!have.length) return;
  const m = new Map<string, string>();
  before.forEach((k, j) => { if (k !== after[j]) m.set(k, after[j]); });
  if (!m.size) return;
  const asPrinted = have.every((k) => before.includes(k));
  const asCorrected = have.every((k) => after.includes(k));
  if (asCorrected && !asPrinted) return; // already applied
  if (!asPrinted) {
    console.error(`  ! ${s.id}: overrides ${have.filter((k) => !before.includes(k)).join(', ')} name no printed word — fix by hand`);
    return;
  }
  if (asCorrected && have.some((k) => m.has(k))) {
    console.error(`  ! ${s.id}: overrides read as both the printed and the corrected text — re-key by hand`);
    return;
  }
  const used = new Map([...m].filter(([k]) => have.includes(k)));
  if (used.size) moves[s.id] = used;
});

// the files the overrides live in
const dir = path.join(TEXTS_DIR, id);
const files = [path.join(dir, 'overrides.yaml')];
if (fs.existsSync(path.join(dir, 'overrides'))) files.push(...fs.readdirSync(path.join(dir, 'overrides')).filter((f) => f.endsWith('.yaml')).sort().map((f) => path.join(dir, 'overrides', f)));

const unq = (k: string) => k.replace(/^(["'])(.*)\1$/, '$2');
// a repeated verse's section can alias another's overrides (`'x#2': *x`): its
// keys are moved where they are written, under the anchor
const anchorOf = new Map<string, string>(), aliasOf = new Map<string, string>();
let n = 0;
for (const f of files) {
  if (!fs.existsSync(f)) continue;
  const lines = fs.readFileSync(f, 'utf-8').split('\n');
  let sec: string | null = null;
  let changed = false;
  for (let i = 0; i < lines.length; i++) {
    // a section: `'1.1.4':`, or with an anchor (`&x`) a repeated verse aliases (`*x`)
    const top = lines[i].match(/^('[^']*'|"[^"]*"|[^\s#'"][^:]*):\s*(?:([&*])(\S+))?\s*$/);
    if (top) {
      sec = unq(top[1].trim());
      if (top[2] === '&') anchorOf.set(top[3], sec);
      if (top[2] === '*') aliasOf.set(sec, top[3]);
      continue;
    }
    if (!sec || !moves[sec]) continue;
    // a word key: two spaces in, as every override file writes them
    const m = lines[i].match(/^ {2}(["']?)([^\s"':][^"':]*?)\1:(\s.*|)$/);
    if (!m) continue;
    const to = moves[sec].get(m[2]);
    if (to === undefined) continue;
    console.log(`${sec}: ${m[2]} → ${to}  (${path.relative(process.cwd(), f)})`);
    lines[i] = `  ${m[1]}${to}${m[1]}:${m[3]}`;
    changed = true;
    n++;
  }
  if (changed && !dry) fs.writeFileSync(f, lines.join('\n'));
}
const same = (a?: Map<string, string>, b?: Map<string, string>) => !!a && !!b && JSON.stringify([...a]) === JSON.stringify([...b]);
const want = Object.entries(moves)
  .filter(([sid, m]) => !(aliasOf.has(sid) && same(m, moves[anchorOf.get(aliasOf.get(sid)!) ?? ''])))
  .reduce((a, [, m]) => a + m.size, 0);
console.log(`${id}: ${n} override key(s) ${dry ? 'would move' : 'moved'}${n !== want ? ` — expected ${want}; check by hand` : ''}`);
if (n !== want) process.exit(1);
