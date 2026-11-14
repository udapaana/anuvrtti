#!/usr/bin/env bun
/**
 * analyze-text.ts — machine annotation of a passage: vidyut-cheda segments it,
 * vidyut-kosha lists every analysis of every pada, Monier-Williams glosses it.
 *
 * The aim is the "whole texts" track: a text annotated by the engine and a
 * dictionary, then corrected by an author, instead of typed word by word. How
 * far that gets an author is measured in docs/AUTO-ANNOTATION-EVAL.md
 * (scripts/eval-auto-annotation.ts) — read it before trusting the output.
 *
 * Prerequisites (both git-ignored caches, both pinned):
 *   ./scripts/build-vidyut-native.sh   → data/vidyut/  (cheda + kosha at VIDYUT_REV)
 *   bun scripts/import-mw-gloss.ts     → data/mw/gloss.tsv
 *
 * Usage:
 *   bun scripts/analyze-text.ts "रामो वनं गच्छति ।"           one passage → JSON on stdout
 *   bun scripts/analyze-text.ts --file passage.txt [--iast]  a file (Devanagari, or IAST)
 *   bun scripts/analyze-text.ts --padas "नरः ग्रामम् गच्छति"   input already split into padas
 *   … --out static/data/analyses/x.json                       write instead of print
 *
 * Output: { sentences: [{ text, tokens: [Token] }] }. A Token is one pada as
 * cheda found it:
 *   form / slp1     the pada (cheda gives the pre-sandhi pada: रामो → रामस्)
 *   best            the analysis chosen (vidyut's own pick, re-ranked — see rerank())
 *   vidyut          vidyut's own pick, unchanged (null when it had none)
 *   alts            every distinct analysis the kosha holds for this form
 *   mw              { key, lex, senses[], url } for best's lemma, or null
 * An Analysis: { type: subanta|tinanta|avyaya, lemma, विभक्ति, वचन, लिङ्ग,
 *   लकार, पुरुष, पद, प्रयोग, कृत्, उपसर्ग[], सनादि[], गण } in the reader's own
 *   Devanagari terms — the vocabulary of systems.toml, so the reader could
 *   light its cells from it. Only fields vidyut states are present.
 *
 * Build-time only; nothing here reaches the browser.
 */
import * as fs from 'fs';
import * as path from 'path';
import { createRequire } from 'module';

const ROOT = process.cwd();
/** ANUVRTTI_CHEDA=pinned runs VIDYUT_REV exactly, without scripts/vidyut-native/patches/. */
const BIN = path.join(ROOT, 'data/vidyut/bin', process.env.ANUVRTTI_CHEDA === 'pinned' ? 'anuvrtti-cheda-pinned' : 'anuvrtti-cheda');
const DATA = path.join(ROOT, 'data/vidyut/data');
const GLOSS = path.join(ROOT, 'data/mw/gloss.tsv');

const require = createRequire(import.meta.url);
const { initSync, transliterate } = require('shlesha');
initSync({ module: fs.readFileSync(require.resolve('shlesha/shlesha_bg.wasm')) });
export const tr = (s: string, a: string, b: string) => transliterate(s, a, b) as string;
export const slp = (deva: string) => tr(deva, 'devanagari', 'slp1');
export const deva = (s: string) => tr(s.replace(/[~\\^\/]/g, ''), 'slp1', 'devanagari');

// ── vidyut's vocabulary → the reader's ─────────────────────────────────────
const VIBHAKTI: Record<string, string> = {
  praTamA: 'प्रथमा', dvitIyA: 'द्वितीया', tftIyA: 'तृतीया', caturTI: 'चतुर्थी',
  paYcamI: 'पञ्चमी', zazWI: 'षष्ठी', saptamI: 'सप्तमी', samboDanam: 'सम्बोधन'
};
const VACANA: Record<string, string> = { eka: 'एकवचन', dvi: 'द्विवचन', bahu: 'बहुवचन' };
const LINGA: Record<string, string> = { puM: 'पुंलिङ्ग', strI: 'स्त्रीलिङ्ग', napuMsaka: 'नपुंसकलिङ्ग' };
const LAKARA: Record<string, string> = {
  'la~w': 'लट्', 'li~w': 'लिट्', 'lu~w': 'लुट्', 'lf~w': 'लृट्', 'le~w': 'लेट्', 'lo~w': 'लोट्',
  'la~N': 'लङ्', 'viDili~N': 'विधिलिङ्', 'ASIrli~N': 'आशीर्लिङ्', 'lu~N': 'लुङ्', 'lf~N': 'लृङ्'
};
const PURUSHA: Record<string, string> = { praTama: 'प्रथमपुरुष', maDyama: 'मध्यमपुरुष', uttama: 'उत्तमपुरुष' };
const PADA: Record<string, string> = { P: 'परस्मैपद', A: 'आत्मनेपद' };
const PRAYOGA: Record<string, string> = { kartari: 'कर्तरि', karmaRi: 'कर्मणि', Bave: 'भावे' };
const GANA: Record<string, string> = {
  BvAdi: 'भ्वादि', adAdi: 'अदादि', juhotyAdi: 'जुहोत्यादि', divAdi: 'दिवादि', svAdi: 'स्वादि',
  tudAdi: 'तुदादि', ruDAdi: 'रुधादि', tanAdi: 'तनादि', kryAdi: 'क्र्यादि', curAdi: 'चुरादि', kaRqvAdi: 'कण्ड्वादि'
};
/** Upasargas as vidyut spells them → as the reader tags them (आङ्, उद्). */
const UPASARGA: Record<string, string> = { 'AN': 'आङ्', ud: 'उद्', nis: 'निस्', dus: 'दुस्' };

export type Analysis = {
  type: 'subanta' | 'tinanta' | 'avyaya';
  lemma: string;
  lemma_slp1: string;
  /** with its upasargas, when lemma has had them stripped */
  lemma_full?: string;
  stem?: 'basic' | 'krdanta';
  विभक्ति?: string; वचन?: string; लिङ्ग?: string;
  लकार?: string; पुरुष?: string; पद?: string; प्रयोग?: string;
  कृत्?: string; उपसर्ग?: string[]; सनादि?: string[]; गण?: string;
  /** the root as the dhātupāṭha spells it (SLP1), for re-deriving its paradigm */
  aupadeshika?: string;
  /** the stem's own lingas, per the kosha (basic stems only) */
  lingas?: string[];
  /** raw krt name, for the reranker */
  _krt?: string;
};

function dhatuFields(d: any, a: Analysis) {
  if (!d) return;
  if (d.gana && GANA[d.gana]) a.गण = GANA[d.gana];
  // the dhātupāṭha spelling, which is what vidyut-prakriya needs to conjugate
  // the root again (scripts/build-texts.ts derives each verb's paradigm from it)
  if (d.aupadeshika) a.aupadeshika = d.aupadeshika;
  if (d.prefixes?.length) {
    a.उपसर्ग = d.prefixes.map((p: string) => UPASARGA[p] ?? deva(p));
    // The kosha's lemma for a prefixed root is the whole verb (Agam); the reader
    // keys the bare root (गम्) and lists the उपसर्ग apart. Strip when the
    // prefixes stand unchanged at the front; leave it whole when sandhi merged them.
    const pre = d.prefixes.map((p: string) => (p === 'AN' ? 'A' : p)).join('');
    if (a.lemma_slp1.startsWith(pre) && a.lemma_slp1.length > pre.length) {
      a.lemma_full = a.lemma;
      a.lemma_slp1 = a.lemma_slp1.slice(pre.length);
      a.lemma = deva(a.lemma_slp1);
    }
  }
  if (d.sanadi?.length) a.सनादि = d.sanadi.map((s: string) => deva(s));
}

/** One kosha entry (the CLI's JSON) → an Analysis in the reader's terms. */
export function toAnalysis(e: any): Analysis {
  const a: Analysis = { type: e.type, lemma: deva(e.lemma), lemma_slp1: e.lemma };
  const stem = e.stem;
  if (stem) {
    a.stem = stem.kind;
    if (stem.kind === 'krdanta') {
      a.कृत् = deva(stem.krt);
      a._krt = stem.krt;
      if (stem.lakara && LAKARA[stem.lakara]) a.लकार = LAKARA[stem.lakara];
      dhatuFields(stem.dhatu, a);
    } else if (stem.lingas?.length) {
      a.lingas = stem.lingas.map((l: string) => LINGA[l]).filter(Boolean);
    }
  }
  if (e.type === 'subanta') {
    a.विभक्ति = VIBHAKTI[e.vibhakti];
    a.वचन = VACANA[e.vacana];
    // अस्मद्/युष्मद् have no gender of their own: vidyut lists each form three
    // times, once per लिङ्ग, and the reader exempts them from लिङ्ग anyway.
    if (!['asmad', 'yuzmad'].includes(e.lemma)) a.लिङ्ग = LINGA[e.linga];
  } else if (e.type === 'tinanta') {
    a.लकार = LAKARA[e.lakara];
    a.पुरुष = PURUSHA[e.purusha];
    a.वचन = VACANA[e.vacana];
    a.प्रयोग = PRAYOGA[e.prayoga];
    if (e.pada?.length === 1) a.पद = PADA[e.pada[0]];
    else if (e.pada?.length === 2) a.पद = 'उभयपद';
    dhatuFields(e.dhatu, a);
  }
  return a;
}

const key = (a: Analysis) => JSON.stringify({ ...a, lingas: undefined, _krt: undefined });

// ── Monier-Williams ───────────────────────────────────────────────────────
let mwIndex: Map<string, { lex: string; senses: string[] }> | null = null;
export function mw(): Map<string, { lex: string; senses: string[] }> {
  if (mwIndex) return mwIndex;
  mwIndex = new Map();
  if (!fs.existsSync(GLOSS)) {
    console.error(`! ${path.relative(ROOT, GLOSS)} missing — run bun scripts/import-mw-gloss.ts; glosses omitted`);
    return mwIndex;
  }
  for (const line of fs.readFileSync(GLOSS, 'utf-8').split('\n')) {
    const [k, , lex, senses] = line.split('\t');
    if (k && senses) mwIndex.set(k, { lex, senses: senses.split(' | ') });
  }
  return mwIndex;
}
export const mwUrl = (k: string) =>
  `https://www.sanskrit-lexicon.uni-koeln.de/scans/MWScan/2020/web/webtc/indexcaller.php?key=${encodeURIComponent(k)}&input=slp1&output=deva`;

/** Clean root text → MW key: vidyut gives roots as the dhātupāṭha's clean form. */
function mwKeys(a: Analysis): string[] {
  const l = a.lemma_slp1;
  const ks = [l];
  // MW keys stems in their bare form; vidyut's pronoun lemmas match already.
  if (a.lemma_full) ks.unshift(slp(a.lemma_full)); // MW heads prefixed verbs (Agam) apart
  // The dhātupāṭha spells the doubled palatal (pracC, mUrcC); MW does not (praC).
  for (const k of [...ks]) if (k.includes('cC')) ks.push(k.replace(/cC/g, 'C'));
  return ks;
}
export function gloss(a: Analysis | null) {
  if (!a) return null;
  const m = mw();
  for (const k of mwKeys(a)) {
    const hit = m.get(k);
    if (hit) return { key: k, lex: hit.lex, senses: hit.senses.slice(0, 3), url: mwUrl(k) };
  }
  return null;
}

// ── reranking ─────────────────────────────────────────────────────────────
/**
 * vidyut-cheda's model chooses among segmentations well and among analyses of
 * one form poorly: रामः comes back as the kvip root-noun of रम्, not as राम,
 * because the kosha lists the root-noun first and the model has nothing to
 * prefer. A dictionary does. The score below prefers a lemma MW knows, a basic
 * stem over a rare krt, a stem's own gender, and otherwise keeps vidyut's
 * order. It is measured against vidyut's raw pick in the eval doc.
 */
const RARE_KRT = new Set(['kvi~p', 'vi~w', 'vi~c', 'kvi~n', 'kani~n', 'qa', 'wa', 'ka', 'Ra']);
/** The kosha also lists सः under "sa", अहम् under "aha", त्वम् under "tva"; the reader keys pronouns by the सर्वनाम. */
const SARVANAMA = new Set(['tad', 'yad', 'kim', 'etad', 'idam', 'adas', 'asmad', 'yuzmad', 'sarva', 'viSva', 'eka', 'dvi', 'tri', 'catur', 'anya', 'itara', 'svayam', 'he']);
/** Frequency prior among tenses: in narrative a लङ्/लुङ् homograph (अवसत्, आसीत्) is the लङ्. */
const LAKARA_PRIOR: Record<string, number> = { 'लट्': 0.6, 'लङ्': 0.5, 'लोट्': 0.3, 'लिट्': 0.3, 'विधिलिङ्': 0.2, 'लृट्': 0.2 };
/** MW's genders for a noun stem (data/mw-linga.tsv, scripts/import-mw.ts). */
let mwLinga: Map<string, Set<string>> | null = null;
function mwGenders(lemmaDeva: string): Set<string> | undefined {
  if (!mwLinga) {
    mwLinga = new Map();
    const f = path.join(ROOT, 'data/mw-linga.tsv');
    const G: Record<string, string> = { m: 'पुंलिङ्ग', f: 'स्त्रीलिङ्ग', n: 'नपुंसकलिङ्ग' };
    if (fs.existsSync(f))
      for (const line of fs.readFileSync(f, 'utf-8').split('\n')) {
        const [stem, g, kind] = line.split('\t');
        if (stem && g && !line.startsWith('#') && !/adj/.test(kind ?? '')) mwLinga.set(stem, new Set(g.split(',').map((x) => G[x])));
      }
  }
  return mwLinga.get(lemmaDeva);
}
/**
 * A pick no reader would make first: a rare root-noun, or a present participle
 * in the locative singular — भवति, गच्छति, वसति are verbs far more often than
 * "when (he) is being / going / dwelling", but cheda's two-state context model
 * cannot tell, and takes the participle about one time in five.
 */
const weak = (a: Analysis) =>
  !!(a._krt && (RARE_KRT.has(a._krt) || ((a._krt === 'Satf~' || a._krt === 'SAnac') && a.विभक्ति === 'सप्तमी' && a.वचन === 'एकवचन')));
export function rerank(alts: Analysis[], vidyutPick: Analysis | null): Analysis[] {
  const m = mw();
  const pk = vidyutPick ? key(vidyutPick) : '';
  const score = (a: Analysis) => {
    let s = 0;
    if (m.has(a.lemma_slp1)) s += 2;
    if (a._krt && RARE_KRT.has(a._krt)) s -= 4;
    if (a.stem === 'basic') s += 1;
    if (a.lingas?.length && a.लिङ्ग && a.lingas.includes(a.लिङ्ग)) s += 2;
    if (a.lingas?.length && a.लिङ्ग && !a.lingas.includes(a.लिङ्ग)) s -= 2;
    if (a.विभक्ति === 'सम्बोधन') s -= 1;
    if (SARVANAMA.has(a.lemma_slp1)) {
      s += 8;
      // Among a pronoun's homographs: the masculine is the narrative default
      // (तस्य, तेन), the dual the rare one (ते is they or to you, seldom those two).
      if (a.लिङ्ग === 'पुंलिङ्ग') s += 0.6;
      if (a.वचन === 'द्विवचन') s -= 1;
      if (a.विभक्ति === 'सम्बोधन') s -= 3;
    }
    if (a.type === 'tinanta' && a.लकार) s += LAKARA_PRIOR[a.लकार] ?? 0;
    const g = a.type === 'subanta' && a.stem === 'basic' && a.लिङ्ग && !SARVANAMA.has(a.lemma_slp1) ? mwGenders(a.lemma) : undefined;
    if (g) s += g.has(a.लिङ्ग!) ? 2 : -2;
    if (key(a) === pk) s += 1.5;
    // Keep vidyut's word type unless its pick is a rare root-noun: वसति is a verb
    // to cheda's context model, and वसती (a dwelling) only to the dictionary.
    if (vidyutPick && a.type === vidyutPick.type && !weak(vidyutPick)) s += a.type === 'tinanta' ? 6 : 3;
    if (weak(a)) s -= 3;
    if (vidyutPick && weak(vidyutPick) && a.type === 'tinanta') s += 4;
    return s;
  };
  return alts.map((a, i) => ({ a, s: score(a), i })).sort((x, y) => y.s - x.s || x.i - y.i).map((x) => x.a);
}

// ── the engine process ────────────────────────────────────────────────────
export class Engine {
  private proc: ReturnType<typeof Bun.spawn>;
  private buf = '';
  private reader: ReadableStreamDefaultReader<Uint8Array>;
  private dec = new TextDecoder();
  constructor() {
    if (!fs.existsSync(BIN)) throw new Error(`${BIN} missing — run ./scripts/build-vidyut-native.sh`);
    this.proc = Bun.spawn([BIN, DATA], { stdin: 'pipe', stdout: 'pipe', stderr: 'inherit' });
    this.reader = (this.proc.stdout as ReadableStream<Uint8Array>).getReader();
  }
  private async line(): Promise<string> {
    for (;;) {
      const i = this.buf.indexOf('\n');
      if (i >= 0) { const l = this.buf.slice(0, i); this.buf = this.buf.slice(i + 1); return l; }
      const { value, done } = await this.reader.read();
      if (done) throw new Error('anuvrtti-cheda exited');
      this.buf += this.dec.decode(value, { stream: true });
    }
  }
  async ask(req: object): Promise<any> {
    (this.proc.stdin as any).write(JSON.stringify(req) + '\n');
    (this.proc.stdin as any).flush?.();
    return JSON.parse(await this.line());
  }
  close() { (this.proc.stdin as any).end(); }
}

export type Token = {
  form: string; slp1: string;
  best: Analysis | null; vidyut: Analysis | null; alts: Analysis[];
  mw: ReturnType<typeof gloss>;
  /** index of the surface (space-separated) word this pada was cut from */
  word?: number;
};

function strip(a: Analysis | null) {
  if (!a) return a;
  const { _krt, lingas, ...rest } = a;
  return rest as Analysis;
}

function toToken(t: any): Token {
  const seen = new Set<string>();
  const alts: Analysis[] = [];
  for (const e of t.alts) {
    const a = toAnalysis(e);
    const k = key(a);
    if (!seen.has(k)) { seen.add(k); alts.push(a); }
  }
  // सः/एषः before a consonant lose their ending (6.1.132): cheda hands back
  // the bare sa/eza, which the kosha knows only as a vocative or a particle.
  if (t.text === 'sa' || t.text === 'eza') {
    const lemma = t.text === 'sa' ? 'tad' : 'etad';
    if (!alts.some((a) => a.lemma_slp1 === lemma && a.विभक्ति === 'प्रथमा'))
      alts.unshift({ type: 'subanta', lemma: deva(lemma), lemma_slp1: lemma, stem: 'basic', विभक्ति: 'प्रथमा', वचन: 'एकवचन', लिङ्ग: 'पुंलिङ्ग' } as Analysis);
  }
  const vidyut = t.pick ? toAnalysis(t.pick) : null;
  const ranked = rerank(alts, vidyut);
  const best = ranked[0] ?? null;
  return {
    form: deva(t.text), slp1: t.text,
    best: strip(best), vidyut: strip(vidyut), alts: ranked.map(strip) as Analysis[],
    mw: gloss(best)
  };
}

/** LCS alignment: for each index of b, the index of a it aligns to (or -1). */
export function lcsMap(a: string, b: string): Int32Array {
  const n = a.length, m = b.length;
  const dp = new Uint16Array((n + 1) * (m + 1));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      dp[i * (m + 1) + j] = a[i] === b[j] ? dp[(i + 1) * (m + 1) + j + 1] + 1 : Math.max(dp[(i + 1) * (m + 1) + j], dp[i * (m + 1) + j + 1]);
  const map = new Int32Array(m + 1).fill(-1);
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { map[j] = i; i++; j++; }
    else if (dp[(i + 1) * (m + 1) + j] >= dp[i * (m + 1) + j + 1]) i++;
    else j++;
  }
  map[m] = n;
  return map;
}
/** SLP1, pausal visarga as s, anusvāra as m, letters only — what cheda's padas and a text share. */
export const normSlp = (s: string) => s.replace(/H(?=$|\s)/g, 's').replace(/M/g, 'm').replace(/[^a-zA-Z]/g, '');

/**
 * Segment + analyse one sentence (saṃhitā or padas; Devanagari or SLP1).
 * Each token also gets `word`: the index of the space-separated surface word
 * it came from (कस्मिंश्चिन्नगरे → कस्मिन् + चित् + नगरे all carry one index).
 */
export async function analyzeSentence(engine: Engine, text: string): Promise<Token[]> {
  const clean = text.replace(/[।॥|/0-9०-९"“”‘’\[\]().,;:!?=—–-]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (!clean) return [];
  const r = await engine.ask({ text: clean });
  const toks: Token[] = (r.tokens ?? []).map(toToken);
  // group padas under the surface word they were cut from
  const surf = clean.split(' ').map((w) => normSlp(/^[\x00-\x7f]*$/.test(w) ? w : slp(w)));
  const starts: number[] = [];
  let off = 0;
  for (const w of surf) { starts.push(off); off += w.length; }
  const map = lcsMap(surf.join(''), toks.map((t) => normSlp(t.slp1)).join(''));
  let p = 0;
  for (const t of toks) {
    const len = normSlp(t.slp1).length;
    let a = -1;
    for (let j = p; j < p + len && a < 0; j++) if (map[j] >= 0) a = map[j];
    p += len;
    let w = 0;
    if (a >= 0) while (w + 1 < starts.length && starts[w + 1] <= a) w++;
    else w = -1;
    t.word = w;
  }
  return toks;
}

/** Kosha lookup of one pada (no segmenting). */
export async function analyzeWord(engine: Engine, form: string): Promise<Token> {
  const r = await engine.ask({ word: form });
  return toToken(r.tokens[0]);
}

/** Split running text into sentences at daṇḍas / verse ends. */
export function sentences(text: string): string[] {
  return text.split(/[।॥\n]+|\|\|?|\/\/?/).map((s) => s.trim()).filter((s) => /[ऀ-ॿ]/.test(s));
}

/** IAST (GRETIL's plaintext) → Devanagari, keeping avagraha and hyphens out. */
export function iastToDeva(s: string): string {
  // GRETIL's "analytic" spacing breaks a word after a sandhi'd final consonant
  // (kasmiṃścin nagare, itaś ceta) and before an avagraha (śilpino 'rdha); in
  // Devanagari both are written joined, and cheda needs them joined to undo
  // the sandhi. Hyphens mark compound members — dropped, so cheda must find them.
  const joined = s
    .replace(/([kgcjṭḍtdnpbmṅñṇyrlvśṣs]) +(?=[^\s|/])/g, '$1')
    .replace(/ +'/g, "'")
    .replace(/-/g, '');
  return tr(joined.replace(/'/g, 'ऽ'), 'iast', 'devanagari');
}

if (import.meta.main) {
  const args = process.argv.slice(2);
  const opt = (k: string) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : undefined; };
  const outPath = opt('--out');
  let text = opt('--file') ? fs.readFileSync(opt('--file')!, 'utf-8') : opt('--padas') ?? args.filter((a, i) => !a.startsWith('--') && !(args[i - 1] ?? '').startsWith('--'))[0];
  if (!text) { console.error('usage: bun scripts/analyze-text.ts "<passage>" | --file f [--iast] | --padas "…" [--out f]'); process.exit(1); }
  if (args.includes('--iast')) text = iastToDeva(text);
  const engine = new Engine();
  const out = { engine: 'vidyut-cheda+kosha @ VIDYUT_REV, data-0.4.0; MW (CDSL, CC BY-SA 4.0)', sentences: [] as { text: string; tokens: Token[] }[] };
  for (const s of sentences(text)) out.sentences.push({ text: s, tokens: await analyzeSentence(engine, s) });
  engine.close();
  const json = JSON.stringify(out, null, 1);
  if (outPath) { fs.mkdirSync(path.dirname(outPath), { recursive: true }); fs.writeFileSync(outPath, json); console.error(`wrote ${outPath}`); }
  else console.log(json);
}
