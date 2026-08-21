import { transliterate, type Script } from '$lib/transliteration';

/*
  Matching text nobody agrees how to spell.

  The display script is a rendering preference, not a keyboard: someone reading
  Telugu still types roman, and among the romanisations `pitr`, `pitṛ`, `pitR`
  and `pitRi` are one word spelt four ways — while the indexes themselves hold
  Devanagari (sūtras, readings) or Telugu (the deck).

  So: fold both sides. A romanised string reduces to a comparison key — IAST
  with the diacritics stripped and lowercased — and a query is additionally
  rendered into each Indic script the indexes actually use, so a Devanagari
  field can be matched directly. Two or three transliterations per query beats
  transliterating every index entry.

  This was proven on /usage first; it lives here so ⌘K uses the same rules.
*/

/** Which script a string is written in, by Unicode block. */
const SCRIPT_RANGES: Array<[RegExp, Script]> = [
  [/[ऀ-ॿ]/, 'devanagari'],
  [/[ঀ-৿]/, 'bengali'],
  [/[਀-੿]/, 'gurmukhi'],
  [/[઀-૿]/, 'gujarati'],
  [/[଀-୿]/, 'odia'],
  [/[஀-௿]/, 'tamil'],
  [/[ఀ-౿]/, 'telugu'],
  [/[ಀ-೿]/, 'kannada'],
  [/[ഀ-ൿ]/, 'malayalam'],
  [/[඀-෿]/, 'sinhala'],
];

/** The script a string is in, or null for roman of some flavour. */
export function detectScript(t: string): Script | null {
  for (const [re, sc] of SCRIPT_RANGES) if (re.test(t)) return sc;
  return null;
}

/** IAST → bare ASCII: strip combining marks, then the stragglers. */
export function fold(t: string): string {
  return t
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ṃ|ṁ/g, "m")
    .replace(/ḥ/g, "h")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

/** One query, in every form the indexes might hold it. */
export interface Folded {
  /** The raw query, trimmed. */
  raw: string;
  /** Diacritic-free lowercase roman — compare against folded roman fields. */
  key: string;
  /** The query in Devanagari — compare against Devanagari fields directly. */
  devanagari: string;
  /** The query in Telugu — the word deck is stored in Telugu script. */
  telugu: string;
}

/**
 * Fold a query for matching. Never throws: an unrecognised string simply
 * matches less, rather than breaking the search.
 */
export async function foldQuery(query: string): Promise<Folded> {
  const raw = query.trim();
  const from = detectScript(raw);
  const out: Folded = { raw, key: fold(raw), devanagari: raw, telugu: raw };
  if (!raw) return out;

  try {
    const iast = from ? await transliterate(raw, from, "iast") : raw;
    out.key = fold(iast);
    // From IAST everything else is one hop. A roman query that is not valid
    // IAST transliterates to something harmless rather than throwing.
    const src: Script = "iast";
    const [deva, telugu] = await Promise.all([
      from === "devanagari" ? Promise.resolve(raw) : transliterate(iast, src, "devanagari"),
      from === "telugu" ? Promise.resolve(raw) : transliterate(iast, src, "telugu"),
    ]);
    out.devanagari = deva;
    out.telugu = telugu;
  } catch {
    /* keep the raw fallbacks */
  }
  return out;
}

/**
 * Does `text` match the folded query? `text` is matched both as roman (folded)
 * and as Indic (compared against the query's Devanagari and Telugu forms).
 */
export function matches(text: string | null | undefined, q: Folded): boolean {
  if (!text || !q.raw) return false;
  if (q.key && fold(text).includes(q.key)) return true;
  if (q.devanagari && text.includes(q.devanagari)) return true;
  if (q.telugu && text.includes(q.telugu)) return true;
  return text.includes(q.raw);
}
