#!/usr/bin/env bun
/**
 * cite-exhibited.ts — cite a load-bearing rule where the corpus already shows it.
 *
 * The ledger's "already shown" list is rules a reader meets in dozens of
 * readings and is told about in one or two. The remedy is not a new reading but
 * a citation on a word that exhibits the rule, at the tiers where it should
 * recur — this does that, from build-exhibits' per-word record.
 *
 * Choice, per rule, of the readings still owed (target − encounters):
 *   - only readings that exhibit the rule and do not already count for it;
 *   - graded readings only — attested texts carry a reveal-density ceiling,
 *     and a citation there is apparatus on someone else's sentence;
 *   - spread evenly across the difficulty order, so the encounters recur
 *     through the path instead of bunching at its start;
 *   - one word per reading, the first that exhibits the rule.
 * The derivation that exhibits the rule is the one that reproduced the word's
 * attested form, so each citation is checkable by verify:cites.
 *
 *   bun scripts/cite-exhibited.ts            # the plan
 *   bun scripts/cite-exhibited.ts --write    # write the citations
 *
 * Needs `bun run exhibits` first.
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';

const ROOT = process.cwd();
const READINGS = path.join(ROOT, 'content/readings');
const rules = parseYaml(fs.readFileSync(path.join(READINGS, '_rules.yaml'), 'utf-8')) as any;
const corpus = JSON.parse(fs.readFileSync(path.join(ROOT, 'static/data/readings.json'), 'utf-8')).sequence as any[];
const WORDS_FILE = path.join(ROOT, 'static/data/rule-exhibit-words.json');
if (!fs.existsSync(WORDS_FILE)) {
  console.error('run bun run exhibits first');
  process.exit(1);
}
const exhibitWords = JSON.parse(fs.readFileSync(WORDS_FILE, 'utf-8')) as Record<string, [string, number, string][]>;
const WRITE = process.argv.includes('--write');

const target = rules.defaults?.encounters_target ?? 5;
const termImplies: Record<string, string> = rules.term_implies ?? {};

// Which readings already count for each rule — the ledger's own definition.
const counted = new Map<string, Set<string>>();
for (const r of corpus)
  for (const w of r.words ?? [])
    for (const n of w.notes ?? []) {
      const c = n.cite ?? (n.term ? termImplies[n.term] : undefined);
      if (c) (counted.get(c) ?? counted.set(c, new Set()).get(c)!).add(r.id);
    }

const byId = new Map(corpus.map((r: any, i: number) => [r.id, { r, pos: i }]));
const fileOf = new Map<string, string>();
for (const ch of fs.readdirSync(READINGS)) {
  const d = path.join(READINGS, ch);
  if (!fs.statSync(d).isDirectory()) continue;
  for (const f of fs.readdirSync(d)) if (f.endsWith('.yaml') && !f.startsWith('_')) fileOf.set(f.replace(/\.yaml$/, ''), path.join(d, f));
}

/*
  Rules a trace shows but a citation would misstate.
    8.2.39  — the जश् voicing is an intermediate step that 8.4.56 reverses:
              कुर्यात् ends in त् on the page, so citing the voicing alone
              tells the reader something the form contradicts.
    3.1.26  — हेतुमति च is the causative. A चुरादि verb (कथयति, पूजयति) also
              carries a णिच्, but by 3.1.25, and the trace cannot tell the two
              apart once the word is tagged णिच्. Cited by hand.
*/
const SKIP = new Set(['8.2.39', '3.1.26']);

type Plan = { cite: string; gloss: string; id: string; wi: number; form: string };
const plan: Plan[] = [];
for (const rule of rules.load_bearing ?? []) {
  const c = String(rule.cite);
  if (SKIP.has(c)) continue;
  const goal = rule.encounters_target ?? target;
  const have = counted.get(c) ?? new Set();
  const owed = goal - have.size;
  if (owed <= 0) continue;
  const firstWord = new Map<string, [number, string]>();
  for (const [id, wi, form] of exhibitWords[c] ?? []) {
    if (have.has(id) || firstWord.has(id)) continue;
    const e = byId.get(id);
    if (!e || e.r.kind === 'attested' || !fileOf.has(id)) continue;
    firstWord.set(id, [wi, form]);
  }
  /*
    A सङ्ग्रह passage consolidates and may introduce nothing (the gate enforces
    it), so it is eligible only at or after the rule's first introduction in an
    ordinary reading — counting the ordinary readings this run is about to cite.
  */
  const seg = (id: string) => Number(byId.get(id)?.r.segment ?? 9999);
  const ordinary = (id: string) => byId.get(id)?.r.kind !== 'sangraha';
  const intro = Math.min(
    ...[...have].filter(ordinary).map(seg),
    ...[...firstWord.keys()].filter(ordinary).map(seg)
  );
  for (const id of [...firstWord.keys()]) if (!ordinary(id) && seg(id) < intro) firstWord.delete(id);
  // Annotate-only: a rule the corpus does not show often enough needs writing.
  if (firstWord.size + have.size < goal) continue;
  const cands = [...firstWord.keys()].sort((a, b) => byId.get(a)!.pos - byId.get(b)!.pos);
  const picks = new Set<string>();
  for (let k = 0; k < owed; k++) picks.add(cands[Math.floor(((k + 0.5) * cands.length) / owed)]);
  // The gate's own test, applied to what was actually picked: a सङ्ग्रह pick
  // needs some OTHER reading at or below its tier citing the rule.
  for (const id of [...picks]) {
    if (ordinary(id)) continue;
    const ok = [...have, ...picks].some((o) => o !== id && seg(o) <= seg(id));
    if (!ok) picks.delete(id);
  }
  for (const id of picks) {
    const [wi, form] = firstWord.get(id)!;
    plan.push({ cite: c, gloss: String(rule.gloss ?? c), id, wi, form });
  }
}

/** Insert a cite note on the wi-th word of a reading's YAML, keeping its layout. */
function insert(file: string, wi: number, cite: string, role: string): boolean {
  const lines = fs.readFileSync(file, 'utf-8').split('\n');
  const starts: number[] = [];
  lines.forEach((l, i) => { if (/^  - form:/.test(l)) starts.push(i); });
  const s = starts[wi];
  if (s === undefined) return false;
  let e = s + 1;
  while (e < lines.length && (lines[e].trim() === '' || /^ {4,}/.test(lines[e]))) e++;
  const block = lines.slice(s, e);
  if (block.some((l) => new RegExp(`cite: ['"]?${cite.replace(/\./g, '\\.')}['"]?\\s*$`).test(l))) return false;
  const q = (x: string) => '"' + x.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
  const note = [`    - cite: ${q(cite)}`, `      role: ${q(role)}`];
  const ni = block.findIndex((l) => /^    notes:\s*$/.test(l));
  if (ni < 0) {
    let at = e;
    while (at > s + 1 && lines[at - 1].trim() === '') at--;
    lines.splice(at, 0, '    notes:', ...note);
  } else {
    let at = s + ni + 1;
    while (at < e && (/^    - /.test(lines[at]) || /^ {6,}/.test(lines[at]))) at++;
    lines.splice(at, 0, ...note);
  }
  fs.writeFileSync(file, lines.join('\n'));
  return true;
}

const byRule = new Map<string, Plan[]>();
for (const p of plan) (byRule.get(p.cite) ?? byRule.set(p.cite, []).get(p.cite)!).push(p);
let written = 0;
for (const [c, ps] of byRule) {
  console.log(`${c.padEnd(9)} +${ps.length}  ${ps.map((p) => `${p.id}:${p.form}`).join('  ')}`);
  if (!WRITE) continue;
  for (const p of ps) if (insert(fileOf.get(p.id)!, p.wi, p.cite, `${p.gloss} → ${p.form}`)) written++;
}
console.log(WRITE ? `\nwrote ${written} citation(s)` : `\n${plan.length} citation(s) planned — rerun with --write`);
