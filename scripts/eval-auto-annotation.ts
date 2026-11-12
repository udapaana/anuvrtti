#!/usr/bin/env bun
/**
 * eval-auto-annotation.ts — how good is machine annotation (scripts/analyze-text.ts)
 * against the corpus's hand annotation? Writes the numbers behind
 * docs/AUTO-ANNOTATION-EVAL.md.
 *
 *   bun scripts/eval-auto-annotation.ts            → static/data/analyses/eval.json (+ tables on stdout)
 *
 * Two runs per reading:
 *   padas    the reading's `sentence` (hand-split padas, no sandhi) — isolates
 *            morphology from segmentation
 *   samhita  the build's saṃhitā (`samhita[]` joined), readings from tier 80 —
 *            the real task: running text in, padas + analyses out
 * Tokens are aligned to hand words by a character-level LCS over the two
 * normalised (SLP1, final ḥ→s, ṃ→m) strings, so a sandhi-restored pada lands on
 * its word. A word is RECOVERED when one token spans exactly its characters,
 * SPLIT when several tokens tile it exactly (a compound cut into members).
 *
 * Fields scored on recovered words where the hand annotation states a value
 * (notes[].term or derived{}): lemma, word type, विभक्ति, वचन, लिङ्ग, लकार,
 * पुरुष, पद. Three numbers each: vidyut's own pick, the re-ranked best, and
 * "any alternative" (the kosha lists the hand value at all).
 */
import * as fs from 'fs';
import * as path from 'path';
import { Engine, analyzeSentence, slp, lcsMap, type Token, type Analysis } from './analyze-text';

const ROOT = process.cwd();
const R = JSON.parse(fs.readFileSync(path.join(ROOT, 'static/data/readings.json'), 'utf-8'));
const OUT = path.join(ROOT, `static/data/analyses/eval${process.env.ANUVRTTI_CHEDA === 'pinned' ? '-pinned' : ''}.json`);

const SETS: Record<string, string[]> = {
  विभक्ति: ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'],
  वचन: ['एकवचन', 'द्विवचन', 'बहुवचन'],
  लिङ्ग: ['पुंलिङ्ग', 'स्त्रीलिङ्ग', 'नपुंसकलिङ्ग'],
  लकार: ['लट्', 'लिट्', 'लुट्', 'लृट्', 'लेट्', 'लोट्', 'लङ्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लृङ्'],
  पुरुष: ['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष'],
  पद: ['परस्मैपद', 'आत्मनेपद']
};
const FIELDS = ['lemma', 'type', ...Object.keys(SETS)] as const;
type Field = (typeof FIELDS)[number];

const norm = (s: string) =>
  s.replace(/H(?=$|\s)/g, 's').replace(/M/g, 'm').replace(/[^a-zA-Z]/g, '');
const normLemma = (deva: string) => slp(deva.replace(/[√\-+\s]/g, '').replace(/ः$/, '')).replace(/[^a-zA-Z]/g, '');

function hand(w: any) {
  const terms = new Set<string>((w.notes ?? []).map((n: any) => n.term).filter(Boolean));
  const d = w.derived ?? {};
  const v: Partial<Record<Field, Set<string>>> = {};
  for (const [f, set] of Object.entries(SETS)) {
    const s = new Set<string>();
    if (d[f]) s.add(d[f]);
    else for (const t of set) if (terms.has(t)) s.add(t);
    if (f === 'विभक्ति' && terms.has('संबोधन')) s.add('सम्बोधन');
    if (s.size) v[f as Field] = s;
  }
  const isPron = terms.has('सर्वनाम') || !!d['सर्वनाम-भेद'];
  const isTin = !isPron && !!(d['पद'] || d['प्रयोग'] && !d['कृत्'] || v.पुरुष || (v.लकार && !d['कृत्']));
  const isAvy = terms.has('अव्यय') || !!d['अव्यय-भेद'] || terms.has('निपात') || terms.has('उपसर्ग');
  v.type = new Set([isTin ? 'tinanta' : isAvy ? 'avyaya' : 'subanta']);
  if (v.type.has('tinanta')) { delete v.विभक्ति; delete v.लिङ्ग; }
  else { delete v.पुरुष; delete v.पद; if (!v.type.has('tinanta') && !d['कृत्']) delete v.लकार; }
  if (v.type.has('avyaya')) { delete v.विभक्ति; delete v.वचन; delete v.लिङ्ग; }
  if (w.lemma) v.lemma = new Set([normLemma(w.lemma)]);
  return v;
}

function val(a: Analysis | null, f: Field): string | undefined {
  if (!a) return undefined;
  if (f === 'lemma') return a.lemma_slp1.replace(/[^a-zA-Z]/g, '');
  if (f === 'type') return a.type;
  if (f === 'पद' && (a as any).पद === 'उभयपद') return 'उभयपद';
  return (a as any)[f];
}
function ok(a: Analysis | null, f: Field, want: Set<string>) {
  const x = val(a, f);
  if (x === undefined) return false;
  if (f === 'पद' && x === 'उभयपद') return true; // the form is the same in both padas
  return want.has(x);
}

type Stat = { n: number; vid: number; best: number; any: number };
type Bucket = {
  words: number; recovered: number; split: number; missed: number;
  /** recovered as one token AND every stated field right in the re-ranked best: usable as-is */
  asis: number;
  fields: Record<string, Stat>;
  full: Stat; // all stated fields right at once
};
const newBucket = (): Bucket => ({
  words: 0, recovered: 0, split: 0, missed: 0, asis: 0,
  fields: Object.fromEntries(FIELDS.map((f) => [f, { n: 0, vid: 0, best: 0, any: 0 }])),
  full: { n: 0, vid: 0, best: 0, any: 0 }
});
const buckets: Record<string, Bucket> = {};
const B = (k: string) => (buckets[k] ??= newBucket());

const errors: Record<string, any[]> = {};
const glossPool: any[] = [];
const segErrors: any[] = [];

function group(r: any): string {
  if (r.kind === 'attested' || ['pancatantra', 'hitopadesha', 'ramayana', 'nitishataka', 'purana', 'rigveda', 'kathopanishad'].includes(r.chapter))
    return `attested:${r.chapter}`;
  return `graded:${r.chapter}`;
}

async function run(engine: Engine, r: any, mode: 'padas' | 'samhita') {
  const words = r.words.filter((w: any) => /[ऀ-ॿ]/.test(w.form));
  const text = mode === 'padas' ? r.sentence : r.samhita.map((s: any) => s.text).join(' ');
  const chunks = text.split(/[।॥|—–]+/).map((s: string) => s.trim()).filter(Boolean);
  const tokens: Token[] = [];
  for (const c of chunks) tokens.push(...(await analyzeSentence(engine, c)));

  const wn = words.map((w: any) => norm(slp(w.form)));
  const A = wn.join('');
  const tn = tokens.map((t) => norm(t.slp1));
  const Bs = tn.join('');
  const map = lcsMap(A, Bs);
  // token boundaries mapped into A's offsets
  const tb: { s: number; e: number; t: Token }[] = [];
  let off = 0;
  for (let k = 0; k < tokens.length; k++) {
    const s0 = off, e0 = off + tn[k].length; off = e0;
    // first aligned char at/after s0, last aligned at/before e0-1
    let s = -1, e = -1;
    for (let j = s0; j < e0; j++) if (map[j] >= 0) { s = map[j]; break; }
    for (let j = e0 - 1; j >= s0; j--) if (map[j] >= 0) { e = map[j] + 1; break; }
    if (s >= 0) tb.push({ s, e, t: tokens[k] });
  }
  let pos = 0;
  const keys = [mode, `${mode}|${group(r)}`, `${mode}|${group(r).split(':')[0]}`];
  for (let wi = 0; wi < words.length; wi++) {
    const w = words[wi];
    const s = pos, e = pos + wn[wi].length; pos = e;
    for (const k of keys) B(k).words++;
    const exact = tb.find((x) => x.s === s && x.e === e);
    const inside = tb.filter((x) => x.s >= s && x.e <= e);
    let tok: Token | null = null;
    if (exact) { tok = exact.t; for (const k of keys) B(k).recovered++; }
    else if (inside.length > 1 && inside[0].s === s && inside[inside.length - 1].e === e) {
      for (const k of keys) B(k).split++;
      // a compound: case/number/gender live on the last member
      tok = inside[inside.length - 1].t;
    } else {
      for (const k of keys) B(k).missed++;
      if (segErrors.length < 4000) segErrors.push({ mode, id: r.id, group: group(r), form: w.form, got: tb.filter((x) => x.e > s && x.s < e).map((x) => x.t.form) });
      continue;
    }
    const want = hand(w);
    const isSplit = !exact;
    let fullN = false, fv = true, fb = true;
    for (const f of FIELDS) {
      const ws = want[f];
      if (!ws) continue;
      if (isSplit && (f === 'lemma' || f === 'type')) continue;
      fullN = true;
      // a participle's stem carries a लकार too (śatṛ ← लट्); it does not answer for a verb
      const okT = (x: Analysis | null) => ok(x, f, ws) && !(f === 'लकार' && want.type!.has('tinanta') && x!.type !== 'tinanta');
      const v = okT(tok.vidyut), b = okT(tok.best), a = tok.alts.some(okT);
      fv &&= v; fb &&= b;
      for (const k of keys) { const st = B(k).fields[f]; st.n++; st.vid += +v; st.best += +b; st.any += +a; }
      if (!b && mode === 'padas') (errors[f] ??= []).push({ id: r.id, group: group(r), form: w.form, lemma: w.lemma, hand: [...ws].join('/'), best: val(tok.best, f) ?? null, bestLemma: tok.best?.lemma ?? null, vid: val(tok.vidyut, f) ?? null, inAlts: a, nAlts: tok.alts.length });
    }
    // joint: some single alternative carries every stated field
    const fa = tok.alts.some((x) => FIELDS.every((f) => !want[f] || (isSplit && (f === 'lemma' || f === 'type')) || ok(x, f, want[f]!)));
    if (fullN) for (const k of keys) { const st = B(k).full; st.n++; st.vid += +fv; st.best += +fb; st.any += +fa; }
    if (exact && fb) for (const k of keys) B(k).asis++;
    if (mode === 'padas' && exact && w.gloss) glossPool.push({ id: r.id, group: group(r), form: w.form, lemma: w.lemma, gloss: w.gloss, translation: r.translation, best: tok.best?.lemma, mw: tok.mw, lemmaOk: ok(tok.best, 'lemma', want.lemma ?? new Set()) });
  }
}

const engine = new Engine();
const t0 = performance.now();
let n = 0;
for (const r of R.sequence) {
  await run(engine, r, 'padas');
  if (r.samhita && (r.segment ?? 0) >= 80) await run(engine, r, 'samhita');
  if (++n % 100 === 0) console.error(`  ${n}/${R.sequence.length} readings, ${((performance.now() - t0) / 1000).toFixed(0)}s`);
}
engine.close();

// deterministic 50-word sample for the gloss judgement
let seed = 12345;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const pool = [...glossPool];
const sample = [];
while (sample.length < 50 && pool.length) sample.push(pool.splice(Math.floor(rnd() * pool.length), 1)[0]);

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify({ seconds: (performance.now() - t0) / 1000, buckets, errors, segErrors, glossSample: sample }, null, 1));

const pct = (a: number, b: number) => (b ? ((100 * a) / b).toFixed(1) : '–');
console.log(`\n${((performance.now() - t0) / 1000).toFixed(0)}s; wrote ${path.relative(ROOT, OUT)}\n`);
for (const [k, b] of Object.entries(buckets).sort()) {
  console.log(`## ${k}: ${b.words} words · recovered ${pct(b.recovered, b.words)}% · split ${pct(b.split, b.words)}% · missed ${pct(b.missed, b.words)}% · usable as-is ${pct(b.asis, b.words)}%`);
  for (const f of [...FIELDS, 'FULL']) {
    const st = f === 'FULL' ? b.full : b.fields[f];
    if (st.n) console.log(`   ${f.padEnd(8)} n=${String(st.n).padStart(5)}  vidyut ${pct(st.vid, st.n).padStart(5)}  best ${pct(st.best, st.n).padStart(5)}  any ${pct(st.any, st.n).padStart(5)}`);
  }
}
