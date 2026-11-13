/**
 * texts.ts — shared by the three scripts of the whole-texts track:
 *
 *   scripts/snapshot-text.ts   run vidyut over a text → data/text-analyses/<id>.json
 *                              (local only: needs the native engine and MW cache)
 *   scripts/build-texts.ts     snapshot + overrides → static/data/texts/  (CI)
 *   scripts/check-texts.ts     the snapshot is fresh, and the `text` gate  (CI)
 *
 * See docs/ARCHITECTURE.md, "Whole texts", for why the snapshot is committed.
 */
import * as fs from 'fs';
import * as path from 'path';
import { createHash } from 'crypto';
import { parse } from 'yaml';

export const ROOT = process.cwd();
export const TEXTS_DIR = path.join(ROOT, 'content/texts');
export const SNAP_DIR = path.join(ROOT, 'data/text-analyses');

export type Section = { id: string; kind?: 'verse' | 'prose'; text?: string; lines?: string[]; iast?: string };
export type TextSource = {
  id: string; title: string; title_en: string; work: string; place?: string;
  source: Record<string, string>;
  sections: Section[];
};

/** Every text directory that holds a text.yaml (mahabharata-condensed does not). */
export function textIds(): string[] {
  if (!fs.existsSync(TEXTS_DIR)) return [];
  return fs.readdirSync(TEXTS_DIR).filter((d) => fs.existsSync(path.join(TEXTS_DIR, d, 'text.yaml'))).sort();
}
export function readText(id: string): TextSource {
  const t = parse(fs.readFileSync(path.join(TEXTS_DIR, id, 'text.yaml'), 'utf-8')) as TextSource;
  if (t.id !== id) throw new Error(`content/texts/${id}/text.yaml: id is ${t.id}, not ${id}`);
  return t;
}
/** A section's lines (a prose section is one line). */
export const linesOf = (s: Section) => (s.lines ?? [s.text ?? '']).map((l) => l.trim());

/** A section's surface words, numbered across its lines: the unit an override keys. */
export function wordsOf(s: Section): { surface: string; line: number }[] {
  return linesOf(s).flatMap((l, li) => l.split(/\s+/).filter(Boolean).map((surface) => ({ surface, line: li })));
}

// ── overrides ───────────────────────────────────────────────────────────────
/** One pada as the author states it. `a` is the analysis as the reader's own
 *  terms, space-separated ("सप्तमी एकवचन पुंलिङ्ग", "लिट् प्रथमपुरुष एकवचन
 *  आत्मनेपद", "अव्यय क्त्वा"); `member` marks a compound member (a bare stem). */
export type PadaSpec = {
  form?: string; lemma?: string; a?: string; member?: boolean;
  gloss?: string; note?: string; root?: string;
};
export type WordOverride = {
  /** replaces vidyut's segmentation of the word outright */
  split?: PadaSpec[];
  /** fixes one pada (1-based) of vidyut's segmentation, keeping the rest */
  fix?: Record<string, PadaSpec>;
  note?: string;
};
/** section id → surface word (with "#2" for a repeat in one section) → override */
export type Overrides = Record<string, Record<string, WordOverride>>;

export function readOverrides(id: string): Overrides {
  const f = path.join(TEXTS_DIR, id, 'overrides.yaml');
  if (!fs.existsSync(f)) return {};
  return (parse(fs.readFileSync(f, 'utf-8')) ?? {}) as Overrides;
}
/** The override key of each surface word in a section: the word, "#n" on a repeat. */
export function wordKeys(s: Section): string[] {
  const seen = new Map<string, number>();
  return wordsOf(s).map(({ surface }) => {
    const n = (seen.get(surface) ?? 0) + 1;
    seen.set(surface, n);
    return n === 1 ? surface : `${surface}#${n}`;
  });
}

// ── the reader's terms ──────────────────────────────────────────────────────
export const T = {
  विभक्ति: ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'],
  वचन: ['एकवचन', 'द्विवचन', 'बहुवचन'],
  लिङ्ग: ['पुंलिङ्ग', 'स्त्रीलिङ्ग', 'नपुंसकलिङ्ग'],
  लकार: ['लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लृङ्', 'लोट्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लेट्'],
  पुरुष: ['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष'],
  पद: ['परस्मैपद', 'आत्मनेपद', 'उभयपद'],
  प्रयोग: ['कर्तरि', 'कर्मणि', 'भावे']
} as const;

export type Analysis = {
  type: 'subanta' | 'tinanta' | 'avyaya' | 'member';
  lemma: string; lemma_slp1?: string; lemma_full?: string;
  विभक्ति?: string; वचन?: string; लिङ्ग?: string; लकार?: string; पुरुष?: string;
  पद?: string; प्रयोग?: string; कृत्?: string; उपसर्ग?: string[]; सनादि?: string[]; गण?: string;
  aupadeshika?: string; stem?: string;
};

/** "सप्तमी एकवचन पुंलिङ्ग" → the fields it names. Unknown words are कृत् names
 *  (क्त, क्त्वा, तुमुन्, शतृ …), the only open set an author writes here. */
export function parseA(a: string | undefined, lemma: string, member = false): Analysis {
  const out: Analysis = { type: member ? 'member' : 'subanta', lemma };
  for (const w of (a ?? '').split(/\s+/).filter(Boolean)) {
    let hit = false;
    for (const [k, vs] of Object.entries(T))
      if ((vs as readonly string[]).includes(w)) { (out as any)[k] = w; hit = true; }
    if (hit) continue;
    if (w === 'अव्यय') out.type = 'avyaya';
    else if (w === 'समास') out.type = 'member';
    else out.कृत् = w;
  }
  if (out.लकार && out.पुरुष) out.type = 'tinanta';
  return out;
}
const FIELDS = ['विभक्ति', 'वचन', 'लिङ्ग', 'लकार', 'पुरुष', 'पद', 'प्रयोग', 'कृत्'] as const;
/** Does vidyut's analysis `x` say what the author's `want` says (on every field the author named)? */
export function agrees(x: Analysis, want: Analysis, lemma?: string): boolean {
  if (lemma && x.lemma !== lemma && x.lemma_full !== lemma) return false; // no lemma: the analysis alone decides
  if (want.type !== x.type) return false;
  return FIELDS.every((f) => !(want as any)[f] || (want as any)[f] === (x as any)[f]);
}
/** The analysis as one line of the reader's terms — the inverse of parseA. */
export function fmtA(a: Analysis | null): string {
  if (!a) return '';
  if (a.type === 'member') return 'समास';
  if (a.type === 'avyaya') return ['अव्यय', a.कृत्].filter(Boolean).join(' ');
  if (a.type === 'tinanta')
    return [a.लकार, a.पुरुष, a.वचन, a.पद, a.प्रयोग && a.प्रयोग !== 'कर्तरि' ? a.प्रयोग : ''].filter(Boolean).join(' ');
  return [a.विभक्ति, a.वचन, a.लिङ्ग, a.कृत्].filter(Boolean).join(' ');
}

// ── freshness ───────────────────────────────────────────────────────────────
const sha = (s: string | Buffer) => createHash('sha256').update(s).digest('hex').slice(0, 16);
export function vidyutRev(): string {
  const y = fs.readFileSync(path.join(ROOT, '.github/workflows/deploy.yml'), 'utf-8');
  return y.match(/VIDYUT_REV:\s*(\S+)/)?.[1] ?? '';
}
/**
 * What a snapshot was computed from. If any of these moves, the snapshot is
 * stale: the text, the engine pin, the generator, the cheda patch. MW is
 * covered by import-mw-gloss.ts's own commit + sha256 pin, named here so a
 * re-pin of MW also stales every snapshot.
 */
export function inputsOf(id: string) {
  const t = readText(id);
  const patches = path.join(ROOT, 'scripts/vidyut-native/patches');
  const patchText = fs.existsSync(patches) ? fs.readdirSync(patches).sort().map((f) => fs.readFileSync(path.join(patches, f), 'utf-8')).join('\n') : '';
  const mwPin = fs.readFileSync(path.join(ROOT, 'scripts/import-mw-gloss.ts'), 'utf-8').match(/sha256 ([0-9a-f]{64})/)?.[1] ?? '';
  return {
    text: sha(JSON.stringify(t.sections.map((s) => [s.id, linesOf(s)]))),
    vidyut_rev: vidyutRev(),
    generator: sha(fs.readFileSync(path.join(ROOT, 'scripts/analyze-text.ts'))),
    patches: sha(patchText),
    mw: mwPin.slice(0, 16)
  };
}

/** alts are encodeA lines, re-ranked best first; `vidyut` indexes vidyut's own pick (-1: none) */
export type SnapPada = { form: string; slp1: string; alts: string[]; vidyut: number };
export type SnapWord = { surface: string; line: number; padas: SnapPada[] };
export type MwEntry = { key: string; lex: string; senses: string[]; url: string } | null;
export type Snapshot = {
  id: string; engine: string;
  inputs: ReturnType<typeof inputsOf>;
  sections: { id: string; words: SnapWord[] }[];
  /** kosha form (SLP1) → its analyses: every pada an override's `split` writes */
  kosha: Record<string, string[]>;
  /** lemma (SLP1) → MW's entry, or null where MW has none: every lemma in any alt or override */
  lexicon: Record<string, MwEntry>;
};
export const snapPath = (id: string) => path.join(SNAP_DIR, `${id}.json`);
export function readSnapshot(id: string): Snapshot | null {
  const f = snapPath(id);
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf-8')) : null;
}

/**
 * An analysis as one line — the snapshot stores ~1,300 of them, and a line
 * apiece is what makes an engine move reviewable as a diff:
 *   "गम्: लट् प्रथमपुरुष एकवचन परस्मैपद कर्तरि उपसर्ग=आङ् गण=भ्वादि धातु=gamx~"
 */
export function encodeA(a: Analysis): string {
  const terms = [a.type === 'avyaya' ? 'अव्यय' : a.type === 'member' ? 'समास' : '', ...FIELDS.map((f) => (a as any)[f])].filter(Boolean);
  const ex: string[] = [];
  if (a.उपसर्ग?.length) ex.push('उपसर्ग=' + a.उपसर्ग.join(','));
  if (a.सनादि?.length) ex.push('सनादि=' + a.सनादि.join(','));
  if (a.गण) ex.push('गण=' + a.गण);
  if (a.aupadeshika) ex.push('धातु=' + a.aupadeshika);
  if (a.lemma_full) ex.push('पूर्ण=' + a.lemma_full);
  if (a.stem) ex.push('प्रकृति=' + a.stem);
  return `${a.lemma}: ${[...terms, ...ex].join(' ')}`;
}
export function decodeA(s: string): Analysis {
  const i = s.indexOf(': ');
  const lemma = s.slice(0, i);
  const toks = s.slice(i + 2).split(' ');
  const a = parseA(toks.filter((t) => !t.includes('=')).join(' '), lemma);
  if (a.प्रयोग && a.लकार && !a.विभक्ति) a.type = 'tinanta';
  for (const t of toks.filter((t) => t.includes('='))) {
    const [k, v] = t.split('=');
    if (k === 'उपसर्ग') a.उपसर्ग = v.split(',');
    else if (k === 'सनादि') a.सनादि = v.split(',');
    else if (k === 'गण') a.गण = v;
    else if (k === 'धातु') a.aupadeshika = v;
    else if (k === 'पूर्ण') a.lemma_full = v;
    else if (k === 'प्रकृति') a.stem = v;
  }
  return a;
}
