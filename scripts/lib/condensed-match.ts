/**
 * condensed-match.ts — recover a "condensed in the poet's own words" book's
 * verse selection as an ordered list of verse ids in a full edition.
 *
 * The G. A. Natesan volumes (Mahābhārata 1935, Rāmāyaṇa 1935, Bhāgavata 1937)
 * quote original ślokas in the order of the work, between English summaries.
 * All that exists digitally is archive.org's OCR, which read the English as
 * junk Devanagari and the Sanskrit with damage (श्रुत्वा → शत्वा, lost conjuncts).
 *
 *   1. keep the OCR lines that look like Sanskrit verse: Devanagari ratio, and
 *      what fraction of their consonant trigrams occur anywhere in the edition.
 *   2. compare lines on a consonant skeleton (vowel signs, anusvāra, virāma,
 *      punctuation dropped; a nasal before a consonant treated as anusvāra), so
 *      the OCR's commonest damage costs nothing. Candidates from an inverted
 *      trigram index; scored by normalised Levenshtein.
 *   3. ORDER: the book walks the work in sequence, so the chosen positions must
 *      increase. A maximum-weight increasing chain (Fenwick tree over edition
 *      line positions) picks one candidate per line, or none. Lines left out
 *      are then rescued by an exhaustive search of the edition strictly between
 *      their placed neighbours — a damaged verse is placed by its context.
 *   4. consecutive OCR lines landing in one verse become one entry.
 *   5. human review (review-*.json beside the output) is applied on top.
 *
 * The caller supplies the edition as Devanagari lines in order, each with its
 * verse id, and how to group an id (parvan, kāṇḍa, skandha). scripts/mbh-condensed.ts
 * and scripts/condensed.ts are the callers.
 */
import * as fs from 'fs';
import * as path from 'path';

export type MatchOptions = {
  ocrText: string;
  /** the edition, Devanagari, in order: one entry per line of a verse */
  lines: { id: string; text: string }[];
  group: (id: string) => string;
  /** field names in the output: the Mahābhārata's are sarit_id and parvan */
  idField: string;
  groupField: string;
  outDir: string;
  note: string;
  join?: boolean;
  sample?: number;
};

// ── normalisation ───────────────────────────────────────────────────────────
const IND: Record<string, string> = { 'आ': 'अ', 'ई': 'इ', 'ऊ': 'उ', 'ऐ': 'ए', 'औ': 'ओ', 'ॠ': 'ऋ' };
export function skel(s: string): string {
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

export function matchCondensed(opts: MatchOptions) {
  const { ocrText, idField: ID, groupField: GROUP, outDir: OUT_DIR } = opts;
  const JOIN = !!opts.join;
  const sampleN = opts.sample ?? 0;
  const group = opts.group;

  // ── the edition, as lines in order ────────────────────────────────────────
  type Line = { id: string; k: string; text: string };
  const L: Line[] = [];
  const verseLines = new Map<string, number>();
  for (const x of opts.lines) {
    const k = skel(x.text);
    if (k.length < 6) continue;
    L.push({ id: x.id, k, text: x.text });
    verseLines.set(x.id, (verseLines.get(x.id) ?? 0) + 1);
  }
  const byId = new Map<string, string[]>();
  for (const x of L) { let a = byId.get(x.id); if (!a) byId.set(x.id, (a = [])); a.push(x.text); }
  const inv = new Map<string, number[]>();
  L.forEach((x, i) => { for (const g of tri(x.k)) { let a = inv.get(g); if (!a) inv.set(g, (a = [])); a.push(i); } });

  // ── OCR verse lines ───────────────────────────────────────────────────────
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

  // ── order: max-weight increasing chain ────────────────────────────────────
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

  // ── entries ───────────────────────────────────────────────────────────────
  type Entry = Record<string, any>;
  const entries: Entry[] = [];
  const band = (s: number, how: string[]) => s >= 0.75 ? 'high' : s >= 0.55 && !how.every((h) => h === 'context') ? 'medium' : 'low';
  let pending: O[] = [];
  const flushUnmatched = () => {
    // group unmatched lines into verse-ish units ending at ॥, keep only ones with a daṇḍa
    let unit: O[] = [];
    const out = () => { if (unit.length && unit.some((u) => /[।॥|]/.test(u.raw)) && !unit.some((u) => /इति.*समाप्त/.test(u.raw))) entries.push({ seq: 0, [ID]: null, [GROUP]: null, confidence: 0, band: 'unmatched', lines: `0/${unit.length}`, ocr_line: unit[0].n, ocr: unit.map((u) => u.raw).join(' / ') }); unit = []; };
    for (const u of pending) { if (unit.length && u.n - unit[unit.length - 1].n > 3) out(); unit.push(u); if (/॥/.test(u.raw)) out(); }
    out(); pending = [];
  };
  for (let oi = 0; oi < O.length; oi++) {
    const o = O[oi];
    if (!o.pick) { pending.push(o); continue; }
    flushUnmatched();
    const id = L[o.pick.i].id;
    const last = entries[entries.length - 1];
    if (last && last[ID] === id) {
      last._s.push(o.pick.s); last._h.push(o.pick.how); last._i.push(o.pick.i); last.ocr += ' / ' + o.raw;
    } else {
      entries.push({ seq: 0, [ID]: id, [GROUP]: group(id), confidence: 0, band: '', lines: '', ocr_line: o.n, ocr: o.raw, _s: [o.pick.s], _h: [o.pick.how], _i: [o.pick.i] });
    }
  }
  flushUnmatched();
  for (const e of entries) {
    if (e._s) {
      const s = e._s.reduce((a: number, b: number) => a + b, 0) / e._s.length;
      e.confidence = Math.round(s * 100) / 100;
      e.band = band(s, e._h);
      e.lines = `${new Set(e._i).size}/${verseLines.get(e[ID])}`;
      e.edition = byId.get(e[ID])!.join(' / ');
      if (e._h.includes('context')) e.placed_by = 'context';
      delete e._s; delete e._h; delete e._i;
    }
  }
  /*
    Human review, applied on top of the matcher and kept across re-runs. Every
    review-*.json beside the output is a list of decisions keyed by the OCR line
    the entry starts on (stable while the OCR pin holds):
      { "ocr_line": 1234, "<idField>": "…", "reason": "…" }   place it
      { "ocr_line": 1234, "critical": "…", "reason": "…" }     only in another edition
      { "ocr_line": 1234, "skip": true, "reason": "…" }         not a verse (invocation, junk)
    A reviewed entry is band 'reviewed'; the matcher never overrides it.
  */
  const reviews = new Map<number, any>();
  for (const f of fs.existsSync(OUT_DIR) ? fs.readdirSync(OUT_DIR).filter((f) => /^review-.*\.json$/.test(f)) : [])
    for (const r of JSON.parse(fs.readFileSync(path.join(OUT_DIR, f), 'utf-8'))) reviews.set(r.ocr_line, { ...r, file: f });
  for (let i = entries.length - 1; i >= 0; i--) {
    const r = reviews.get(entries[i].ocr_line);
    if (!r) continue;
    const e = entries[i];
    if (r.skip) { entries.splice(i, 1); continue; }
    if (r[ID] && byId.has(r[ID])) {
      e[ID] = r[ID]; e[GROUP] = group(r[ID]); e.edition = byId.get(r[ID])!.join(' / ');
    } else if (r.critical) {
      e[ID] = null; e.critical = r.critical; e[GROUP] = r[GROUP] ?? e[GROUP];
    } else continue;
    e.band = 'reviewed'; e.confidence = 1; e.review = r.reason; delete e.placed_by;
  }
  entries.forEach((e, i) => (e.seq = i + 1));

  const order = [...new Set(L.map((x) => group(x.id)))];
  const per: Record<string, Record<string, number>> = {};
  for (const e of entries) if (e[GROUP]) { const p = (per[e[GROUP]] ??= { high: 0, medium: 0, low: 0, reviewed: 0 }); p[e.band]++; }
  const count = (b: string) => entries.filter((e) => e.band === b).length;
  const summary = {
    ocr_verse_lines: O.length,
    entries: entries.length,
    matched: entries.length - count('unmatched'),
    high: count('high'), medium: count('medium'), low: count('low'), reviewed: count('reviewed'), unmatched: count('unmatched'),
    [`by_${GROUP}`]: Object.fromEntries(order.filter((p) => per[p]).map((p) => [p, { verses: per[p].high + per[p].medium + per[p].low + per[p].reviewed, ...per[p] }])),
  };
  fs.mkdirSync(OUT_DIR, { recursive: true });
  fs.writeFileSync(path.join(OUT_DIR, 'selection.json'), JSON.stringify({
    note: opts.note,
    summary,
  }, null, 1).replace(/\n}$/, ',\n "entries": [\n') +
    // one entry per line: small diffs when a human corrects one; the edition text stays out (it is a lookup)
    entries.map((e) => '  ' + JSON.stringify({ ...e, edition: undefined })).join(',\n') + '\n ]\n}\n');

  // ── report ────────────────────────────────────────────────────────────────
  console.log(`OCR verse lines ${O.length} → ${entries.length} entries: ${summary.matched} matched (high ${summary.high}, medium ${summary.medium}, reviewed ${summary.reviewed}, low ${summary.low}), ${summary.unmatched} unmatched`);
  for (const [p, v] of Object.entries(summary[`by_${GROUP}`] as Record<string, any>)) console.log(`  ${p.padEnd(9)} ${String(v.verses).padStart(4)}  (h ${v.high} m ${v.medium} l ${v.low})`);
  console.log('\nunmatched, for manual review:');
  for (const e of entries) if (!e[ID]) console.log(`  #${e.seq} ocr:${e.ocr_line}  ${e.ocr.slice(0, 110)}`);
  if (sampleN) {
    const m = entries.filter((e) => e[ID]); const step = Math.max(1, Math.floor(m.length / sampleN));
    console.log('\nsample:');
    for (let i = 0; i < m.length && i / step < sampleN; i += step) { const e = m[i]; console.log(`#${e.seq} ${e[ID]} [${e.band} ${e.confidence}]\n  OCR: ${e.ocr}\n  ED:  ${e.edition}`); }
  }
  return { summary, entries };
}
