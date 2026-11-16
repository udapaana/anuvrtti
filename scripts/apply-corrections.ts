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
 * A dropped word (`to: ""`, the stray half of a broken word) takes its override
 * with it into the word that took its place: its split padas are added to that
 * word's split, on the side it lay; one with no padas is just removed.
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
const { text, problems, maps } = correctText(src, readCorrections(id));
if (problems.length) {
  for (const p of problems) console.error(`  ! ${p}`);
  process.exit(1);
}
const ov = readOverrides(id);

/** section id → printed key → corrected key, for the keys that move */
const moves: Record<string, Map<string, string>> = {};
/** section id → printed key of a dropped word → the printed key of the word that took it, and on which side */
const drops: Record<string, Map<string, { into: string; before: boolean }>> = {};
src.sections.forEach((s, i) => {
  const c = text.sections[i];
  if (c === s) return;
  const before = wordKeys(s), after = wordKeys(c);
  const { to, into } = maps[s.id];
  const have = Object.keys(ov[s.id] ?? {});
  if (!have.length) return;
  const m = new Map<string, string>();
  const dm = new Map<string, { into: string; before: boolean }>();
  before.forEach((k, j) => {
    if (to[j] === null) dm.set(k, { into: before[into[j]], before: j < into[j] });
    else if (k !== after[to[j]!]) m.set(k, after[to[j]!]);
  });
  if (!m.size && !dm.size) return;
  const asPrinted = have.every((k) => before.includes(k));
  const asCorrected = have.every((k) => after.includes(k));
  if (asCorrected && !asPrinted) return; // already applied
  if (!asPrinted) {
    console.error(`  ! ${s.id}: overrides ${have.filter((k) => !before.includes(k)).join(', ')} name no printed word — fix by hand`);
    return;
  }
  if (asCorrected && have.some((k) => m.has(k) || dm.has(k))) {
    console.error(`  ! ${s.id}: overrides read as both the printed and the corrected text — re-key by hand`);
    return;
  }
  const used = new Map([...m].filter(([k]) => have.includes(k)));
  if (used.size) moves[s.id] = used;
  const gone = new Map([...dm].filter(([k]) => have.includes(k)));
  if (gone.size) drops[s.id] = gone;
});

// the files the overrides live in
const dir = path.join(TEXTS_DIR, id);
const files = [path.join(dir, 'overrides.yaml')];
if (fs.existsSync(path.join(dir, 'overrides'))) files.push(...fs.readdirSync(path.join(dir, 'overrides')).filter((f) => f.endsWith('.yaml')).sort().map((f) => path.join(dir, 'overrides', f)));

const unq = (k: string) => k.replace(/^(["'])(.*)\1$/, '$2');
// a section: `'1.1.4':`, or with an anchor (`&x`) a repeated verse aliases (`*x`)
const TOP = /^('[^']*'|"[^"]*"|[^\s#'"][^:]*):\s*(?:([&*])(\S+))?\s*$/;
// a word key: two spaces in, as every override file writes them
const KEY = /^ {2}(?:(["'])(.+?)\1|([^\s"'#]\S*?)):(\s.*|)$/;
const keyOf = (m: RegExpMatchArray) => ({ q: m[1] ?? '', key: m[2] ?? m[3], rest: m[4] });
// a repeated verse's section can alias another's overrides (`'x#2': *x`): its
// keys are moved where they are written, under the anchor
const anchorOf = new Map<string, string>(), aliasOf = new Map<string, string>();
let n = 0, nd = 0, bad = 0;
for (const f of files) {
  if (!fs.existsSync(f)) continue;
  let lines = fs.readFileSync(f, 'utf-8').split('\n');
  let changed = false;
  const rel = path.relative(process.cwd(), f);

  /*
    A dropped word's override goes into the word that took its place: its
    split padas join that word's split, before or after them as the pieces
    lay. A dropped piece with no padas (split: [], a note) simply goes.
  */
  const blocks = () => {
    const out: { sec: string; key: string; from: number; end: number }[] = [];
    let sec: string | null = null;
    for (let i = 0; i < lines.length; i++) {
      const top = lines[i].match(TOP);
      if (top) { sec = unq(top[1].trim()); continue; }
      const m = lines[i].match(KEY);
      if (!sec || !m) continue;
      let end = i + 1;
      while (end < lines.length && (lines[end].trim() === '' ? false : /^ {3,}/.test(lines[end]))) end++;
      out.push({ sec, key: keyOf(m).key, from: i, end });
    }
    return out;
  };
  for (const [sid, dm] of Object.entries(drops)) {
    for (const [k, { into, before }] of dm) {
      const bs = blocks();
      const d = bs.find((b) => b.sec === sid && b.key === k);
      if (!d) continue;
      const r = bs.find((b) => b.sec === sid && b.key === into);
      const body = lines.slice(d.from + 1, d.end);
      const items = body.filter((l) => /^ {6}- /.test(l));
      const other = body.filter((l) => !/^ {4}(split:|note:)/.test(l) && !/^ {6}- /.test(l) && !/^ {6}\S/.test(l));
      const hasFix = body.some((l) => /^ {4}fix:/.test(l));
      const rSplit = r ? lines.slice(r.from + 1, r.end).map((l, j) => ({ l, j: r.from + 1 + j })).filter((x) => /^ {6}- /.test(x.l)) : [];
      if ((items.length || hasFix) && (!r || !rSplit.length || hasFix)) {
        console.error(`  ! ${sid}/${k}: dropped, and its padas cannot go into ${into} by themselves — merge by hand (${rel})`);
        bad++;
        continue;
      }
      void other;
      const notes = body.filter((l) => /^ {4}note:/.test(l)).map((l) => l.trim());
      if (notes.length) console.log(`  (${sid}/${k}: its note goes with it — ${notes[0].slice(0, 90)})`);
      // remove the dropped block first, then insert (indices after it shift)
      lines.splice(d.from, d.end - d.from);
      if (items.length) {
        const r2 = blocks().find((b) => b.sec === sid && b.key === into)!;
        const its = lines.slice(r2.from + 1, r2.end).map((l, j) => ({ l, j: r2.from + 1 + j })).filter((x) => /^ {6}- /.test(x.l));
        const at = before ? its[0].j : its[its.length - 1].j + 1;
        lines.splice(at, 0, ...items);
      }
      console.log(`${sid}: ${k} dropped${items.length ? `, its ${items.length} pada(s) into ${into}` : ''}  (${rel})`);
      changed = true;
      nd++;
    }
  }

  let sec: string | null = null;
  for (let i = 0; i < lines.length; i++) {
    const top = lines[i].match(TOP);
    if (top) {
      sec = unq(top[1].trim());
      if (top[2] === '&') anchorOf.set(top[3], sec);
      if (top[2] === '*') aliasOf.set(sec, top[3]);
      continue;
    }
    if (!sec || !moves[sec]) continue;
    const m = lines[i].match(KEY);
    if (!m) continue;
    const { q, key, rest } = keyOf(m);
    const to = moves[sec].get(key);
    if (to === undefined) continue;
    console.log(`${sec}: ${key} → ${to}  (${rel})`);
    lines[i] = `  ${q}${to}${q}:${rest}`;
    changed = true;
    n++;
  }
  if (changed && !dry) fs.writeFileSync(f, lines.join('\n'));
}
const same = (a?: Map<string, string>, b?: Map<string, string>) => !!a && !!b && JSON.stringify([...a]) === JSON.stringify([...b]);
const want = Object.entries(moves)
  .filter(([sid, m]) => !(aliasOf.has(sid) && same(m, moves[anchorOf.get(aliasOf.get(sid)!) ?? ''])))
  .reduce((a, [, m]) => a + m.size, 0);
const wantD = Object.values(drops).reduce((a, m) => a + m.size, 0);
console.log(`${id}: ${n} override key(s) ${dry ? 'would move' : 'moved'}, ${nd} dropped word(s) merged${n !== want || nd + bad !== wantD || bad ? ` — expected ${want} and ${wantD}; check by hand` : ''}`);
if (n !== want || bad) process.exit(1);
