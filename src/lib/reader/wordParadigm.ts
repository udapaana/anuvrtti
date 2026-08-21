/**
 * wordParadigm.ts — the paradigm table for a clicked word: the WORD'S OWN table,
 * with its cell lit.
 *
 * Click देवाय and you see the देव table with चतुर्थी·एकवचन lit; click नरैः and you
 * see the नर table with तृतीया·बहुवचन lit — each word its own paradigm, not a
 * fixed exemplar. The full paradigms (all 24 noun cells, the 9-cell लट् verb grid)
 * are derived by vidyut at build time and shipped in usage.json as `nounParadigms`
 * (stem → cell → form) and `verbParadigms` (root → cell → form). This module lays
 * one out as a grid and marks the word's cell.
 *
 * A word whose stem vidyut cannot decline/conjugate (consonant stems it lacks,
 * an unmapped root) resolves to null and the rail shows no table — honest, rather
 * than a wrong exemplar.
 */

import type { Paradigm } from './paradigm';

export interface ResolvedParadigm {
  /*
    The heading is kept in PIECES rather than as one pre-joined string. It mixes
    scripts — "देव · declension", "गम् · लट् (present)" — and a single string can
    only be rendered one way: printed raw it left the stem in Devanagari while
    the rest of the app was in Telugu, and pushed whole through <Sanskrit> it
    would hand the English words to the transliterator too. Split, the caller
    sends `stem` and `lakara` through the toggle and prints `kind` as it is.
  */
  stem: string; // देव / गम् — Sanskrit, follows the script toggle
  lakara: string | null; // लट् — Sanskrit, verbs only
  kind: string; // "declension" / "present" — English, never transliterated
  grid: Paradigm;
  row: number; // index into grid.rows of the highlighted cell, or -1
  col: number; // index into a row's cells, or -1
}

/** The two paradigm tables shipped in usage.json, keyed by stem/root. */
export interface ParadigmData {
  nounParadigms: Record<string, Record<string, string>>;
  verbParadigms: Record<string, Record<string, string>>;
}

export function paradigmIndex(usage: any): ParadigmData {
  return {
    nounParadigms: usage?.nounParadigms ?? {},
    verbParadigms: usage?.verbParadigms ?? {}
  };
}

// The four table-readings are still filtered out of the main column (a table is
// not a reading); their ids stay here so the caller drops them.
export const PARADIGM_READING_IDS = ['ex094', 'ex172', 'ex173', 'ex154'];

const VIBHAKTI = ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'];
const VACANA = ['एकवचन', 'द्विवचन', 'बहुवचन'];
const PURUSHA = ['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष'];
const LAKARA = ['लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लृङ्', 'लोट्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लेट्'];

/** Deaccent a lemma to match the (deaccented) keys in the paradigm maps. */
function deaccent(s: string): string {
  return s.replace(/[॒॑᳚꣡ऽ]/g, '');
}

/** Lay a cell→form map out as a grid with the given row/col axes, marking one
 *  cell. Missing cells render blank. */
function toGrid(
  cellForm: Record<string, string>,
  rows: string[],
  cols: string[],
  hotRow: number,
  hotCol: number
): { grid: Paradigm; row: number; col: number } {
  return {
    grid: {
      cols: cols.length,
      colHeads: cols,
      rows: rows.map((r) => ({ label: r, cells: cols.map((c) => cellForm[`${r}|${c}`] ?? '—') }))
    },
    row: hotRow,
    col: hotCol
  };
}

/**
 * Map a clicked word onto its own paradigm and the cell it occupies. `terms` are
 * the word's tag strings; `lemma`/`form` identify the stem. Returns null when no
 * paradigm is available for the word's stem.
 */
/*
  Find the stem whose paradigm contains this exact form.

  143 of the corpus's 2,618 words carry no lemma, and keying the table off the
  lemma alone meant none of them could ever show a paradigm — नरः has no lemma,
  so it looked up nounParadigms[''] and got nothing, even though नर is right
  there in the table. The form itself is enough to find the table: build the
  reverse index once, on first use, and cache it on the data object.

  Ambiguity is real (देवौ is both द्वितीया and प्रथमा dual) but harmless here:
  it only picks the TABLE. Which cell lights up comes from the word's own terms.
*/
type Indexed = ParadigmData & { _byForm?: Map<string, string>; _byFormVerb?: Map<string, string> };

function formIndex(map: Record<string, Record<string, string>>): Map<string, string> {
  const out = new Map<string, string>();
  for (const [stem, cells] of Object.entries(map)) {
    for (const form of Object.values(cells)) {
      // First stem wins, so the commonest table is the one a bare form reaches.
      const key = deaccent(form);
      if (key && !out.has(key)) out.set(key, stem);
    }
  }
  return out;
}

function stemForForm(data: Indexed, form: string, verb: boolean): string | null {
  if (verb) {
    if (!data._byFormVerb) data._byFormVerb = formIndex(data.verbParadigms);
    return data._byFormVerb.get(deaccent(form)) ?? null;
  }
  if (!data._byForm) data._byForm = formIndex(data.nounParadigms);
  return data._byForm.get(deaccent(form)) ?? null;
}

export function resolve(
  data: ParadigmData,
  lemma: string,
  form: string,
  terms: string[]
): ResolvedParadigm | null {
  const isVerb = terms.some((t) => LAKARA.includes(t));
  // The corpus writes both ग्रामं and ग्रामम् for one word; the paradigm tables
  // use the full form, so normalise before looking either up.
  const bare = deaccent(form).replace(/ं$/, 'म्');

  if (isVerb) {
    const root = deaccent(lemma) || stemForForm(data as Indexed, bare, true) || '';
    const para = data.verbParadigms[root];
    if (!para) return null;
    const p = PURUSHA.findIndex((x) => terms.includes(x));
    const v = VACANA.findIndex((x) => terms.includes(x));
    const { grid, row, col } = toGrid(para, PURUSHA, VACANA, p, v);
    return { stem: root, lakara: 'लट्', kind: 'present', grid, row, col };
  }

  // noun: the lemma when the corpus records one, otherwise the stem whose
  // declension contains this form.
  const stem = deaccent(lemma) || stemForForm(data as Indexed, bare, false) || '';
  const para = data.nounParadigms[stem];
  if (!para) return null;
  const vib = VIBHAKTI.findIndex((x) => terms.includes(x));
  // वचन defaults to एकवचन (the unmarked number) when not authored.
  const vacIdx = VACANA.findIndex((x) => terms.includes(x));
  const col = vacIdx >= 0 ? vacIdx : 0;
  const { grid, row, col: c } = toGrid(para, VIBHAKTI, VACANA, vib, col);
  return { stem, lakara: null, kind: 'declension', grid, row, col: c };
}
