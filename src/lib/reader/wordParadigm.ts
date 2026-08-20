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
  title: string; // e.g. "देव · declension"
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
export function resolve(
  data: ParadigmData,
  lemma: string,
  form: string,
  terms: string[]
): ResolvedParadigm | null {
  const isVerb = terms.some((t) => LAKARA.includes(t));

  if (isVerb) {
    const root = deaccent(lemma);
    const para = data.verbParadigms[root];
    if (!para) return null;
    const p = PURUSHA.findIndex((x) => terms.includes(x));
    const v = VACANA.findIndex((x) => terms.includes(x));
    const { grid, row, col } = toGrid(para, PURUSHA, VACANA, p, v);
    return { title: `${lemma} · लट् (present)`, grid, row, col };
  }

  // noun: key by the deaccented lemma; the paradigm map has the full declension
  const stem = deaccent(lemma);
  const para = data.nounParadigms[stem];
  if (!para) return null;
  const vib = VIBHAKTI.findIndex((x) => terms.includes(x));
  // वचन defaults to एकवचन (the unmarked number) when not authored.
  const vacIdx = VACANA.findIndex((x) => terms.includes(x));
  const col = vacIdx >= 0 ? vacIdx : 0;
  const { grid, row, col: c } = toGrid(para, VIBHAKTI, VACANA, vib, col);
  return { title: `${lemma} · declension`, grid, row, col: c };
}
