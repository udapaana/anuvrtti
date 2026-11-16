/**
 * texts.ts — shared by the three scripts of the whole-texts track:
 *
 *   scripts/snapshot-text.ts   run vidyut over a text → data/text-analyses/<id>/<part>.json
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

export type Section = {
  id: string; kind?: 'verse' | 'prose'; text?: string; lines?: string[]; iast?: string;
  /** set by readText, never authored: word index → the source's own reading of a corrected word */
  printed?: Record<number, { word: string; note?: string }>;
};
export type PartSpec = { id: string; title?: string; first: string; last: string };
export type TextSource = {
  id: string; title: string; title_en: string; work: string; place?: string;
  /** optional: the text's parts, by first and last section id; see partsOf */
  parts?: PartSpec[];
  /** optional: what a part is called, where the parts are drawn by id prefix (vallī, sarga) */
  part_label?: string;
  source: Record<string, string>;
  sections: Section[];
};

/** Every text directory that holds a text.yaml (a text.draft.yaml, awaiting its snapshot, is not one). */
export function textIds(): string[] {
  if (!fs.existsSync(TEXTS_DIR)) return [];
  return fs.readdirSync(TEXTS_DIR).filter((d) => fs.existsSync(path.join(TEXTS_DIR, d, 'text.yaml'))).sort();
}
/** text.yaml as the source prints it, slips and all. */
export function readSourceText(id: string): TextSource {
  const t = parse(fs.readFileSync(path.join(TEXTS_DIR, id, 'text.yaml'), 'utf-8')) as TextSource;
  if (t.id !== id) throw new Error(`content/texts/${id}/text.yaml: id is ${t.id}, not ${id}`);
  return t;
}
/**
 * The text as it is read: text.yaml with corrections.yaml applied. Everything
 * downstream — the snapshot, the override keys, the build, the reader — sees
 * the corrected word; the source's own reading rides on the section as
 * `printed` (by word index), for the reader to show. A text with no
 * corrections.yaml is text.yaml exactly.
 */
export function readText(id: string): TextSource {
  return correctText(readSourceText(id), readCorrections(id)).text;
}

// ── corrections ─────────────────────────────────────────────────────────────
/**
 * content/texts/<id>/corrections.yaml: a slip of the source's typing, put
 * right in the printed line. Keyed by section id, then the word exactly as
 * text.yaml prints it ("#n" for a repeat, as overrides key words). One word
 * becomes one word: a correction never splits or joins words, so the snapshot's
 * word numbering stands. See content/texts/OVERRIDES.md.
 */
export type Correction = { to: string; note?: string };
export type Corrections = Record<string, Record<string, Correction>>;
export function readCorrections(id: string): Corrections {
  const f = path.join(TEXTS_DIR, id, 'corrections.yaml');
  return fs.existsSync(f) ? ((parse(fs.readFileSync(f, 'utf-8')) ?? {}) as Corrections) : {};
}
/** Apply corrections to a text; what cannot be applied is a problem, not a throw. */
export function correctText(t: TextSource, c: Corrections): { text: TextSource; problems: string[] } {
  const problems: string[] = [];
  if (!Object.keys(c).length) return { text: t, problems };
  const byId = new Map(t.sections.map((s) => [s.id, s]));
  for (const sid of Object.keys(c)) if (!byId.has(sid)) problems.push(`${sid}: corrections.yaml names a section the text does not have`);
  const sections = t.sections.map((s) => {
    const sc = c[s.id];
    if (!sc || !Object.keys(sc).length) return s;
    const keys = wordKeys(s);
    const at = new Map<number, Correction>();
    for (const [k, v] of Object.entries(sc)) {
      const i = keys.indexOf(k);
      const to = typeof v?.to === 'string' ? v.to.trim() : '';
      if (i < 0) problems.push(`${s.id}/${k}: corrections.yaml names no word of the text`);
      else if (!to || /\s/.test(to)) problems.push(`${s.id}/${k}: corrections.yaml — \`to\` must be one word`);
      else if (to === k.replace(/#\d+$/, '')) problems.push(`${s.id}/${k}: corrections.yaml — \`to\` is the printed word`);
      else at.set(i, { to, ...(v.note ? { note: v.note } : {}) });
    }
    if (!at.size) return s;
    const printed: NonNullable<Section['printed']> = {};
    let n = 0;
    const fix = (l: string) => l.replace(/\S+/g, (w) => {
      const i = n++;
      const k = at.get(i);
      if (!k) return w;
      printed[i] = { word: w, ...(k.note ? { note: k.note } : {}) };
      return k.to;
    });
    // linesOf trims and wordsOf splits on whitespace, so \S+ counts the same words
    const out: Section = s.lines ? { ...s, lines: s.lines.map(fix) } : { ...s, text: fix(s.text ?? '') };
    out.printed = printed;
    return out;
  });
  return { text: { ...t, sections }, problems };
}
/** A text's corrections that name no word, or are malformed. */
export const correctionProblems = (id: string) => correctText(readSourceText(id), readCorrections(id)).problems;
/**
 * A text's parts: the unit a reader loads, saves offline and downloads, and the
 * unit its snapshot is stored in. A part never splits a section.
 *   - `parts:` in text.yaml, each from its first to its last section id;
 *   - else, section ids with a prefix (1.2, 1.1.3): one part per prefix — a
 *     vallī, a sarga, an adhyāya — when there is more than one prefix;
 *   - else the whole text is one part, "all".
 */
export type Part = { id: string; title?: string; sections: Section[] };
export function partsOf(t: TextSource): Part[] {
  if (t.parts?.length) {
    const ids = t.sections.map((s) => s.id);
    const out = t.parts.map((p) => {
      const a = ids.indexOf(p.first), b = ids.indexOf(p.last);
      if (a < 0 || b < a) throw new Error(`${t.id}: part ${p.id} runs ${p.first}–${p.last}, not a run of its sections`);
      return { id: p.id, ...(p.title ? { title: p.title } : {}), sections: t.sections.slice(a, b + 1) };
    });
    const dup = out.map((p) => p.id).find((x, i, a) => a.indexOf(x) !== i);
    // two parts with one id would write one snapshot file and lose a part
    if (dup) throw new Error(`${t.id}: part id ${dup} is used twice`);
    const covered = out.reduce((n, p) => n + p.sections.length, 0);
    if (covered !== t.sections.length) throw new Error(`${t.id}: its parts cover ${covered} of ${t.sections.length} sections`);
    return out;
  }
  const prefix = (id: string) => (id.includes('.') ? id.slice(0, id.lastIndexOf('.')) : null);
  const prefixes = t.sections.map((s) => prefix(s.id));
  if (prefixes.every(Boolean) && new Set(prefixes).size > 1) {
    const out: Part[] = [];
    t.sections.forEach((s, i) => {
      const p = prefixes[i]!;
      if (out.at(-1)?.id === p) out.at(-1)!.sections.push(s);
      else out.push({ id: p, ...(t.part_label ? { title: `${t.part_label} ${p}` } : {}), sections: [s] });
    });
    if (new Set(out.map((p) => p.id)).size !== out.length) throw new Error(`${t.id}: a part's sections are not contiguous`);
    return out;
  }
  return [{ id: 'all', sections: t.sections }];
}
/** A part id as a file name. */
export const partFile = (id: string) => id.replace(/[^A-Za-z0-9._-]/g, '_') + '.json';

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

/**
 * overrides.yaml, plus overrides/*.yaml for a long text (one file per stretch
 * of sections, so a passage can be authored without touching the rest). A
 * section named in two files is an error, not a silent merge.
 */
export function readOverrides(id: string): Overrides {
  const dir = path.join(TEXTS_DIR, id);
  const files = [path.join(dir, 'overrides.yaml')];
  const sub = path.join(dir, 'overrides');
  if (fs.existsSync(sub)) files.push(...fs.readdirSync(sub).filter((f) => f.endsWith('.yaml')).sort().map((f) => path.join(sub, f)));
  const out: Overrides = {};
  const from: Record<string, string> = {};
  for (const f of files) {
    if (!fs.existsSync(f)) continue;
    const o = (parse(fs.readFileSync(f, 'utf-8')) ?? {}) as Overrides;
    for (const [sid, sec] of Object.entries(o)) {
      if (from[sid]) throw new Error(`${id}: section ${sid} has overrides in both ${from[sid]} and ${path.relative(dir, f)}`);
      from[sid] = path.relative(dir, f);
      out[sid] = sec;
    }
  }
  return out;
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

/** The गण and the सनादि suffixes an author may name in an analysis (not shown in its one-line form). */
export const GANAS = ['भ्वादि', 'अदादि', 'जुहोत्यादि', 'दिवादि', 'स्वादि', 'तुदादि', 'रुधादि', 'तनादि', 'क्र्यादि', 'चुरादि'] as const;
export const SANADI = ['णिच्', 'सन्', 'यङ्', 'यङ्लुक्', 'क्यच्', 'काम्यच्', 'क्यङ्', 'क्यष्', 'णिङ्', 'आय', 'ईयङ्'] as const;

/** "सप्तमी एकवचन पुंलिङ्ग" → the fields it names. Unknown words are कृत् names
 *  (क्त, क्त्वा, तुमुन्, शतृ …), the only open set an author writes here. */
export function parseA(a: string | undefined, lemma: string, member = false): Analysis {
  const out: Analysis = { type: member ? 'member' : 'subanta', lemma };
  for (const w of (a ?? '').split(/\s+/).filter(Boolean)) {
    let hit = false;
    for (const [k, vs] of Object.entries(T))
      if ((vs as readonly string[]).includes(w)) { (out as any)[k] = w; hit = true; }
    if (hit) continue;
    if ((GANAS as readonly string[]).includes(w)) out.गण = w;
    else if ((SANADI as readonly string[]).includes(w)) (out.सनादि ??= []).push(w);
    else if (w === 'अव्यय') out.type = 'avyaya';
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
  if (want.गण && want.गण !== x.गण) return false;
  if (want.सनादि?.some((k) => !x.सनादि?.includes(k))) return false;
  return FIELDS.every((f) => !(want as any)[f] || (want as any)[f] === (x as any)[f]);
}
/** The analysis as one line of the reader's terms — the inverse of parseA. */
export function fmtA(a: Analysis | null): string {
  if (!a) return '';
  if (a.type === 'member') return 'समास';
  if (a.type === 'avyaya') return ['अव्यय', a.कृत्].filter(Boolean).join(' ');
  if (a.type === 'tinanta')
    return [a.लकार, a.पुरुष, a.वचन, a.पद, a.प्रयोग && a.प्रयोग !== 'कर्तरि' ? a.प्रयोग : '', ...(a.सनादि ?? [])].filter(Boolean).join(' ');
  return [a.विभक्ति, a.वचन, a.लिङ्ग, a.कृत्, ...(a.सनादि ?? [])].filter(Boolean).join(' ');
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
/** A text's snapshot is stored one file per part: data/text-analyses/<id>/<part>.json. */
export const snapDir = (id: string) => path.join(SNAP_DIR, id);
export const snapPath = (id: string, part: string) => path.join(snapDir(id), partFile(part));
/**
 * The whole snapshot, reassembled from its parts. Null if any part is missing,
 * or if the parts were not written by one run (their inputs differ) — both are
 * a stale snapshot, and check-texts says so.
 */
export function readSnapshot(id: string): Snapshot | null {
  const parts = partsOf(readText(id));
  const files = parts.map((p) => snapPath(id, p.id));
  if (!files.every((f) => fs.existsSync(f))) return null;
  const snaps = files.map((f) => JSON.parse(fs.readFileSync(f, 'utf-8')) as Snapshot);
  if (new Set(snaps.map((x) => JSON.stringify(x.inputs))).size > 1) return null;
  return {
    id, engine: snaps[0].engine, inputs: snaps[0].inputs,
    sections: snaps.flatMap((x) => x.sections),
    kosha: Object.assign({}, ...snaps.map((x) => x.kosha)),
    lexicon: Object.assign({}, ...snaps.map((x) => x.lexicon))
  };
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
