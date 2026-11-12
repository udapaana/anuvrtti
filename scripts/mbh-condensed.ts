#!/usr/bin/env bun
/**
 * mbh-condensed.ts — recover the verse selection of "The Mahabharata Condensed
 * in the Poet's Own Words" (A. M. Srinivasachariar; G. A. Natesan, Madras) as
 * an ordered list of verse ids in the Kumbhakonam edition (SARIT TEI).
 *
 * The book quotes original ślokas in the order of the epic, between English
 * summaries. All we have is archive.org's OCR, which read the English as junk
 * Devanagari and the Sanskrit with damage (श्रुत्वा → शत्वा, lost conjuncts).
 *
 *   1. fetch the OCR into data/texts/ (git-ignored), pinned by sha256 in
 *      data/mbh-condensed.json; the Kumbhakonam TEI must already be there.
 *   2. keep the OCR lines that look like Sanskrit verse: Devanagari ratio, and
 *      what fraction of their consonant trigrams occur anywhere in the epic.
 *   3. compare lines on a consonant skeleton (vowel signs, anusvāra, virama,
 *      punctuation dropped; a nasal before a consonant treated as anusvāra), so
 *      the OCR's commonest damage costs nothing. Candidates from an inverted
 *      trigram index; scored by normalised Levenshtein.
 *   4. ORDER: the book walks the epic in sequence, so the chosen positions must
 *      increase. A maximum-weight increasing chain (Fenwick tree over edition
 *      line positions) picks one candidate per line, or none. Lines left out
 *      are then rescued by an exhaustive search of the edition strictly between
 *      their placed neighbours — a damaged verse is placed by its context.
 *   5. consecutive OCR lines landing in one <lg> become one entry.
 *
 * Writes content/texts/mahabharata-condensed/selection.json.
 *
 *   bun scripts/mbh-condensed.ts            # fetch if missing, match, write
 *   bun scripts/mbh-condensed.ts --sample 20  # also print N entries to check by eye
 */
import * as fs from 'fs';
import * as path from 'path';
import { createHash } from 'crypto';

const ROOT = process.cwd();
const manifest = JSON.parse(fs.readFileSync(path.join(ROOT, 'data/mbh-condensed.json'), 'utf-8'));
const CACHE = path.join(ROOT, 'data/texts');
const OUT_DIR = path.join(ROOT, 'content/texts/mahabharata-condensed');
const JOIN = process.argv.includes('--join');
const sampleN = Number(process.argv[process.argv.indexOf('--sample') + 1]) || 0;

// ── 1. sources ──────────────────────────────────────────────────────────────
async function source(s: { file: string; url?: string; sha256: string }): Promise<string> {
  const file = path.join(CACHE, s.file);
  if (!fs.existsSync(file)) {
    if (!s.url) { console.error(`missing ${file} — ${manifest.edition.note}`); process.exit(1); }
    fs.mkdirSync(CACHE, { recursive: true });
    const res = await fetch(s.url);
    if (!res.ok) { console.error(`HTTP ${res.status} for ${s.url}`); process.exit(1); }
    fs.writeFileSync(file, Buffer.from(await res.arrayBuffer()));
  }
  const buf = fs.readFileSync(file);
  const sha = createHash('sha256').update(buf).digest('hex');
  if (sha !== s.sha256) console.warn(`  ! ${s.file}: sha256 differs from the pin — results may not reproduce`);
  return buf.toString('utf-8');
}
const ocrText = await source(manifest.ocr);
const xml = await source(manifest.edition);

// ── normalisation ───────────────────────────────────────────────────────────
const IND: Record<string, string> = { 'आ': 'अ', 'ई': 'इ', 'ऊ': 'उ', 'ऐ': 'ए', 'औ': 'ओ', 'ॠ': 'ऋ' };
function skel(s: string): string {
  return s
    .replace(/\([^)]*\)|\[[^\]]*\]/g, '')
    .replace(/[ङञणनम]्(?=[क-ह])/g, '')       // nasal before consonant ≈ anusvāra
    .replace(/[^क-हअ-औॠ]/g, '')               // keep consonants and vowels only
    .replace(/[आईऊऐऔॠ]/g, (c) => IND[c]);
}
const tri = (s: string) => { const a = new Set<string>(); for (let i = 0; i + 3 <= s.length; i++) a.add(s.slice(i, i + 3)); return a; };
function lev(a: string, b: string): number {
  const m = a.length, n = b.length; if (!m || !n) return Math.max(m, n);
  let prev = new Array(n + 1), cur = new Array(n + 1);
  for (let j = 0; j <= n; j++) prev[j] = j;
  for (let i = 1; i <= m; i++) {
    cur[0] = i;
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    [prev, cur] = [cur, prev];
  }
  return prev[n];
}
// a inside b: edit distance of a against the best-fitting stretch of b
function fit(a: string, b: string): number {
  const m = a.length, n = b.length;
  let prev = new Array(n + 1).fill(0), cur = new Array(n + 1);
  for (let i = 1; i <= m; i++) {
    cur[0] = i;
    for (let j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    [prev, cur] = [cur, prev];
  }
  return Math.min(...prev);
}
// whole-line similarity, or — when the book quotes one pāda pair of a long
// line, or the OCR ran two of the edition's lines together — the shorter
// inside the longer, slightly discounted
function sim(a: string, b: string): number {
  const g = 1 - lev(a, b) / Math.max(a.length, b.length);
  const [s, l] = a.length <= b.length ? [a, b] : [b, a];
  if (s.length < 8 || l.length < s.length * 1.3) return g;
  return Math.max(g, 0.92 * (1 - fit(s, l) / s.length));
}

// ── the edition, as lines in order ──────────────────────────────────────────
type Line = { id: string; k: string; text: string };
const L: Line[] = [];
const verseLines = new Map<string, number>();
for (const m of xml.matchAll(/<lg xml:id="([^"]+)"[^>]*>([\s\S]*?)<\/lg>/g)) {
  const id = m[1];
  if (/-0$/.test(id)) continue;                                  // invocations
  for (const l of m[2].matchAll(/<l\b[^>]*>([\s\S]*?)<\/l>/g)) {
    const text = l[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    const k = skel(text);
    if (k.length < 6) continue;
    L.push({ id, k, text });
    verseLines.set(id, (verseLines.get(id) ?? 0) + 1);
  }
}
const byId = new Map<string, string[]>();
for (const x of L) { let a = byId.get(x.id); if (!a) byId.set(x.id, (a = [])); a.push(x.text); }
const PARVAN = ['', 'adi', 'sabha', 'vana', 'virata', 'udyoga', 'bhisma', 'drona', 'karna', 'shalya', 'sauptika', 'stri', 'shanti', 'anushasana', 'ashvamedhika', 'ashramavasika', 'mausala', 'mahaprasthanika', 'svargarohana'];
// by the parvan number, not the id's prefix: SARIT also has karnaB-8-…, and one stray a6-64-61 inside śalya
const NAME: Record<string, string> = { mausala: 'mausala', AzramavAsika: 'ashramavasika', a6: 'shalya' };
const parvan = (id: string) => { const [p, n] = id.split('-'); return NAME[p] ?? PARVAN[+n] ?? p; };
const inv = new Map<string, number[]>();
L.forEach((x, i) => { for (const g of tri(x.k)) { let a = inv.get(g); if (!a) inv.set(g, (a = [])); a.push(i); } });

// ── 2. OCR verse lines ──────────────────────────────────────────────────────
type O = { n: number; raw: string; k: string; cands: { i: number; s: number }[]; pick?: { i: number; s: number; how: string } };
const rawLines = ocrText.split('\n');
const O: O[] = [];
rawLines.forEach((raw, n) => {
  const t = raw.trim().replace(/^[\^‹ˆ`'"“‘\s]+/, '');
  const chars = t.replace(/\s/g, '');
  const dev = (chars.match(/[ऀ-ॣ॰-ॿ]/g) ?? []).length; // Devanagari, not its digits
  if (dev < 12 || dev / chars.length < 0.85) return;
  const k = skel(t);
  if (k.length < 8) return;
  const g = tri(k);
  let known = 0; for (const x of g) if (inv.has(x)) known++;
  if (known / g.size < 0.75) return;                               // English read as Devanagari
  // a line the OCR broke at the pāda (no daṇḍa, short) joins the next one
  const prev = O[O.length - 1];
  if (JOIN && prev && n + 1 - prev.n <= 4 && !/[।॥|]/.test(prev.raw) && prev.k.length < 24 && prev.k.length + k.length < 60) {
    prev.raw += ' / ' + t; prev.k += k; return;
  }
  O.push({ n: n + 1, raw: t, k, cands: [] });
});

// candidates: top by shared trigrams, then scored by edit distance
for (const o of O) {
  const cnt = new Map<number, number>();
  for (const g of tri(o.k)) { const a = inv.get(g); if (!a || a.length > 4000) continue; for (const i of a) cnt.set(i, (cnt.get(i) ?? 0) + 1); }
  const top = [...cnt].sort((a, b) => b[1] - a[1]).slice(0, 40);
  o.cands = top.map(([i]) => ({ i, s: sim(o.k, L[i].k) })).filter((c) => c.s >= 0.45).sort((a, b) => b.s - a.s).slice(0, 10);
}

// ── 4. order: max-weight increasing chain ───────────────────────────────────
const N = L.length;
const fw = new Float64Array(N + 1).fill(0), fwArg = new Int32Array(N + 1).fill(-1);
const upd = (p: number, v: number, a: number) => { for (p++; p <= N; p += p & -p) if (v > fw[p]) { fw[p] = v; fwArg[p] = a; } };
const qry = (p: number) => { let v = 0, a = -1; for (p++; p > 0; p -= p & -p) if (fw[p] > v) { v = fw[p]; a = fwArg[p]; } return [v, a] as const; };
const nodes: { o: number; c: number; prev: number; v: number }[] = [];
let bestV = 0, bestNode = -1;
for (let oi = 0; oi < O.length; oi++) {
  const made = O[oi].cands.map((c, ci) => {
    const [v, a] = qry(c.i);              // ≤: a line the OCR split at the pāda maps twice
    const w = (c.s - 0.6) * 2 + (c.s >= 0.8 ? 0.5 : 0);        // < .6 only rides along with neighbours
    return { o: oi, c: ci, prev: a, v: v + w };
  });
  for (const m of made) {
    if (m.v <= 0) continue;
    nodes.push(m); const id = nodes.length - 1;
    upd(O[m.o].cands[m.c].i, m.v, id);
    if (m.v > bestV) { bestV = m.v; bestNode = id; }
  }
}
for (let x = bestNode; x >= 0; x = nodes[x].prev) { const n = nodes[x]; O[n.o].pick = { ...O[n.o].cands[n.c], how: 'chain' }; }

// rescue: search the edition strictly between placed neighbours
{
  let lo = -1;
  for (let oi = 0; oi < O.length; oi++) {
    const o = O[oi];
    if (o.pick) { lo = o.pick.i; continue; }
    let hi = N; for (let j = oi + 1; j < O.length; j++) if (O[j].pick) { hi = O[j].pick!.i; break; }
    if (hi - lo > 4000) continue;
    let best = -1, bs = 0;
    for (let i = Math.max(0, lo); i <= Math.min(hi, N - 1); i++) { if (Math.abs(L[i].k.length - o.k.length) > o.k.length) continue; const s = sim(o.k, L[i].k); if (s > bs) { bs = s; best = i; } }
    if (best >= 0 && bs >= 0.5) { o.pick = { i: best, s: bs, how: 'context' }; lo = best; }
  }
}

// ── 5. entries ──────────────────────────────────────────────────────────────
type Entry = { seq: number; sarit_id: string | null; parvan: string | null; confidence: number; band: string; lines: string; ocr_line: number; ocr: string; edition?: string };
const entries: Entry[] = [];
const band = (s: number, how: string[]) => s >= 0.75 ? 'high' : s >= 0.55 && !how.every((h) => h === 'context') ? 'medium' : 'low';
let pending: O[] = [];
const flushUnmatched = () => {
  // group unmatched lines into verse-ish units ending at ॥, keep only ones with a daṇḍa
  let unit: O[] = [];
  const out = () => { if (unit.length && unit.some((u) => /[।॥|]/.test(u.raw)) && !unit.some((u) => /इति.*समाप्त/.test(u.raw))) entries.push({ seq: 0, sarit_id: null, parvan: null, confidence: 0, band: 'unmatched', lines: `0/${unit.length}`, ocr_line: unit[0].n, ocr: unit.map((u) => u.raw).join(' / ') }); unit = []; };
  for (const u of pending) { if (unit.length && u.n - unit[unit.length - 1].n > 3) out(); unit.push(u); if (/॥/.test(u.raw)) out(); }
  out(); pending = [];
};
for (let oi = 0; oi < O.length; oi++) {
  const o = O[oi];
  if (!o.pick) { pending.push(o); continue; }
  flushUnmatched();
  const id = L[o.pick.i].id;
  const last = entries[entries.length - 1] as Entry & { _s?: number[]; _h?: string[]; _i?: number[] };
  if (last && last.sarit_id === id) {
    last._s!.push(o.pick.s); last._h!.push(o.pick.how); last._i!.push(o.pick.i); last.ocr += ' / ' + o.raw;
  } else {
    entries.push(Object.assign({ seq: 0, sarit_id: id, parvan: parvan(id), confidence: 0, band: '', lines: '', ocr_line: o.n, ocr: o.raw }, { _s: [o.pick.s], _h: [o.pick.how], _i: [o.pick.i] }) as Entry);
  }
}
flushUnmatched();
for (const e of entries as (Entry & { _s?: number[]; _h?: string[]; _i?: number[] })[]) {
  if (e._s) {
    const s = e._s.reduce((a, b) => a + b, 0) / e._s.length;
    e.confidence = Math.round(s * 100) / 100;
    e.band = band(s, e._h!);
    e.lines = `${new Set(e._i).size}/${verseLines.get(e.sarit_id!)}`;
    e.edition = byId.get(e.sarit_id!)!.join(' / ');
    if (e._h!.includes('context')) (e as any).placed_by = 'context';
    delete e._s; delete e._h; delete e._i;
  }
}
entries.forEach((e, i) => (e.seq = i + 1));

const order = [...new Set(L.map((x) => parvan(x.id)))];
const per: Record<string, Record<string, number>> = {};
for (const e of entries) if (e.parvan) { const p = (per[e.parvan] ??= { high: 0, medium: 0, low: 0 }); p[e.band]++; }
const count = (b: string) => entries.filter((e) => e.band === b).length;
const summary = {
  ocr_verse_lines: O.length,
  entries: entries.length,
  matched: entries.length - count('unmatched'),
  high: count('high'), medium: count('medium'), low: count('low'), unmatched: count('unmatched'),
  by_parvan: Object.fromEntries(order.filter((p) => per[p]).map((p) => [p, { verses: per[p].high + per[p].medium + per[p].low, ...per[p] }])),
};
fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(path.join(OUT_DIR, 'selection.json'), JSON.stringify({
  note: 'Generated by scripts/mbh-condensed.ts — see README.md. Verse ids are xml:id values of the SARIT Kumbhakonam TEI. band: high ≥ .75 skeleton similarity; medium ≥ .55; low = weaker, or placed only by its neighbours (placed_by: context); unmatched = OCR verse text with no place found.',
  summary,
}, null, 1).replace(/\n}$/, ',\n "entries": [\n') +
  // one entry per line: small diffs when a human corrects one; the edition text stays out (it is a lookup)
  entries.map((e) => '  ' + JSON.stringify({ ...e, edition: undefined })).join(',\n') + '\n ]\n}\n');

// ── report ──────────────────────────────────────────────────────────────────
console.log(`OCR verse lines ${O.length} → ${entries.length} entries: ${summary.matched} matched (high ${summary.high}, medium ${summary.medium}, low ${summary.low}), ${summary.unmatched} unmatched`);
for (const [p, v] of Object.entries(summary.by_parvan)) console.log(`  ${p.padEnd(9)} ${String(v.verses).padStart(4)}  (h ${v.high} m ${v.medium} l ${v.low})`);
console.log('\nunmatched, for manual review:');
for (const e of entries) if (!e.sarit_id) console.log(`  #${e.seq} ocr:${e.ocr_line}  ${e.ocr.slice(0, 110)}`);
if (sampleN) {
  const m = entries.filter((e) => e.sarit_id); const step = Math.max(1, Math.floor(m.length / sampleN));
  console.log('\nsample:');
  for (let i = 0; i < m.length && i / step < sampleN; i += step) { const e = m[i]; console.log(`#${e.seq} ${e.sarit_id} [${e.band} ${e.confidence}]\n  OCR: ${e.ocr}\n  ED:  ${e.edition}`); }
}
