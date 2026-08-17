/**
 * normalize.ts — the shared vocabulary of the प्रयोग index.
 *
 * Two scripts and one route need to agree on three things: what counts as the
 * same surface form, what the axes of a सुप् paradigm are, and in what order
 * they run. Keeping them here rather than in each consumer is what stops the
 * grid, the quiz cache and the reader from disagreeing about देवेषु.
 */

/**
 * Vedic accent marks, stripped before a form is used as a key.
 *
 * The corpus records the Ṛgveda readings with their accents — दे॒वेषु॑, दे॒वम् —
 * and those are the forms the reader must see. But they are the SAME word as
 * देवेषु for every purpose that involves looking a form up: vidyut derives
 * unaccented forms, and `toSlp1` in the build scripts returns null on an accent
 * mark, so an accented form silently fell out of the cache entirely. All 196
 * accented (lemma, form) pairs in the corpus were missing from
 * quiz-cells.json for exactly this reason.
 *
 * So: accents are display data, never key data. Store `formRaw` for showing and
 * `deaccent(form)` for matching.
 */
export const ACCENTS = /[॑-॔᳐-᳿꣠-ꣿ]/g;

export function deaccent(s: string): string {
  return String(s ?? '').replace(ACCENTS, '');
}

/** The eight विभक्ति, in Pāṇini's order — the grid's row axis. */
export const VIBHAKTIS = [
  'प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी',
  'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'
] as const;

/** The three वचन — the grid's column axis. */
export const VACANAS = ['एकवचन', 'द्विवचन', 'बहुवचन'] as const;

export const LINGAS = ['पुंलिङ्ग', 'स्त्रीलिङ्ग', 'नपुंसकलिङ्ग'] as const;

export type Vibhakti = (typeof VIBHAKTIS)[number];
export type Vacana = (typeof VACANAS)[number];

/** A grid cell's key. One string so it can index a plain object in JSON. */
export function cellKey(vibhakti: string, vacana: string): string {
  return vibhakti + '|' + vacana;
}

export function parseCellKey(key: string): [string, string] {
  const i = key.indexOf('|');
  return i < 0 ? [key, ''] : [key.slice(0, i), key.slice(i + 1)];
}

/**
 * The words either side of a form in its sentence.
 *
 * Lifted from build-readings.ts, where it supplies the phrase the quiz shows
 * when a form cannot settle its own case. The प्रयोग cell wants exactly the
 * same window for exactly the same reason: the form alone is often ambiguous,
 * and the phrase is what makes the cell readable as evidence.
 */
export function phraseAround(sentence: string, form: string): string | null {
  const toks = String(sentence ?? '')
    .replace(/[।॥]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
  const clean = (t: string) => deaccent(t.replace(/[,;—"“”?!]/g, ''));
  const target = deaccent(form);

  let i = toks.findIndex((t) => clean(t) === target);
  // The Vedic readings write sandhi across the word boundary — स इद्दे॒वेषु॑ holds
  // देवेषु inside a larger token — so an exact token match finds nothing there.
  // Falling back to containment keeps the phrase for those cells instead of
  // leaving the corpus's oldest text with no evidence line.
  if (i === -1) i = toks.findIndex((t) => clean(t).includes(target));
  if (i === -1) return null;
  return toks.slice(Math.max(0, i - 1), Math.min(toks.length, i + 3)).join(' ');
}
