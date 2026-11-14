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
  verbParadigms: Record<string, Record<string, Record<string, string>>>; // root → लकार → cell → form
  nounVariants?: Record<string, Record<string, string[]>>; // stem → cell → every correct form
  verbByForm?: Record<string, string>; // root|form → the key of the word's own table in verbParadigms[root]
}

export function paradigmIndex(usage: any): ParadigmData {
  return {
    nounParadigms: usage?.nounParadigms ?? {},
    verbParadigms: usage?.verbParadigms ?? {},
    nounVariants: usage?.nounVariants ?? {},
    verbByForm: usage?.verbByForm ?? {}
  };
}

// The four table-readings are still filtered out of the main column (a table is
// not a reading); their ids stay here so the caller drops them.
export const PARADIGM_READING_IDS = ['ex094', 'ex172', 'ex173', 'ex154'];

const VIBHAKTI = ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'];
const VACANA = ['एकवचन', 'द्विवचन', 'बहुवचन'];
const PURUSHA = ['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष'];
const LAKARA = ['लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लृङ्', 'लोट्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लेट्'];

const LAKARA_EN: Record<string, string> = {
  'लट्': 'present', 'लङ्': 'imperfect', 'लिट्': 'perfect', 'लुट्': 'periphrastic future',
  'लृट्': 'future', 'लृङ्': 'conditional', 'लोट्': 'imperative', 'विधिलिङ्': 'optative',
  'आशीर्लिङ्': 'benedictive', 'लुङ्': 'aorist', 'लेट्': 'subjunctive'
};

/** A form spelled one way for comparison: a nasal before a stop as anusvāra
 *  (अलंकारः = अलङ्कारः), the way the corpus and vidyut differ. */
function sp(s: string): string {
  return deaccent(s).replace(/[ङञणनम]्(?=[क-ह])/g, 'ं');
}

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
    if (!data._byFormVerb)
      data._byFormVerb = formIndex(Object.fromEntries(Object.entries(data.verbParadigms).flatMap(
        ([root, byLak]) => Object.values(byLak).map((cells, i) => [root + '\u0000' + i, cells])
      )));
    const hit = data._byFormVerb?.get(deaccent(form));
    return hit ? hit.split('\u0000')[0] : null;
    return data._byFormVerb.get(deaccent(form)) ?? null;
  }
  if (!data._byForm) data._byForm = formIndex(data.nounParadigms);
  return data._byForm.get(deaccent(form)) ?? null;
}

/*
  The lit cell must be the word. A table whose cell is some other form is
  worse than none (सन्तम् once lit the root अस् declined as a noun), so the
  resolver below returns null rather than a table that contradicts the word —
  except for an accented Vedic form, whose classical table lit at the classical
  equivalent (देवेभिः → देवैः) is the point. scripts/check-paradigm-lit.ts holds
  the build to this.
*/
const VEDIC = /[\u0951\u0952\u1CD0-\u1CFF]/;
const sameForm = (cell: string, bare: string) =>
  // (सः/एषः before a consonant are written स/एष, 6.1.132)
  cell.split(' / ').some((c) => sp(c).replace(/ऽ/g, '') === bare || (/^(स|एष)$/.test(bare) && c === bare + 'ः'));

export function resolve(
  data: ParadigmData,
  lemma: string,
  form: string,
  terms: string[]
): ResolvedParadigm | null {
  const r0 = resolveAny(data, lemma, form, terms);
  // a lemma written with its preverb (परा-जि, आ-गम्) whose table is the root's
  const r = r0 || !lemma.includes('-') ? r0 : resolveAny(data, (lemma = lemma.split('-').at(-1)!), form, terms);
  if (!r || r.row < 0 || r.col < 0 || VEDIC.test(form)) return r;
  const bare = sp(form).replace(/ऽ/g, '').replace(/ं$/, 'म्');
  if (sameForm(r.grid.rows[r.row].cells[r.col], bare)) return r;
  // a kṛdanta the corpus did not tag as one: its root+affix table, if one holds it
  if (!terms.includes('कृदन्त') && r.kind === 'declension') {
    const k = resolveAny(data, lemma, form, [...terms, 'कृदन्त']);
    if (k && k.row >= 0 && k.col >= 0 && sameForm(k.grid.rows[k.row].cells[k.col], bare)) return k;
  }
  return null;
}

function resolveAny(
  data: ParadigmData,
  lemma: string,
  form: string,
  terms: string[]
): ResolvedParadigm | null {
  const isVerb = terms.some((t) => LAKARA.includes(t));
  // The corpus writes both ग्रामं and ग्रामम् for one word; the paradigm tables
  // use the full form, so normalise before looking either up.
  const bare = sp(form).replace(/ं$/, 'म्');           // for comparing with a cell
  const look = deaccent(form).replace(/ं$/, 'म्');      // for keyed lookups, spelled as the build keyed it

  if (isVerb) {
    const root = deaccent(lemma) || stemForForm(data as Indexed, look, true) || '';
    const byLak = data.verbParadigms[root];
    if (!byLak) return null;
    const p = PURUSHA.findIndex((x) => terms.includes(x));
    const v = VACANA.findIndex((x) => terms.includes(x));
    /*
      The word's own table first: आगच्छति is आङ् + गम्, गमयति गम् + णिच्, and
      the bare root's grid lit गच्छति for both (the build finds which dhātu,
      preverb and stem derive the form: verbByForm).
    */
    const ownKey = data.verbByForm?.[root + '|' + look];
    if (ownKey && byLak[ownKey]) {
      const [lk, , ...rest] = ownKey.split('·');
      const tag = (k: string) => rest.find((x) => x.startsWith(k + '='))?.slice(k.length + 1);
      const pre = tag('pre'), mode = tag('mode');
      const { grid, row, col } = toGrid(byLak[ownKey], PURUSHA, VACANA, p, v);
      return { stem: [pre, root, mode].filter(Boolean).join(' + '), lakara: lk, kind: LAKARA_EN[lk] ?? '', grid, row, col };
    }
    // the word's own लकार; लट् when it is untagged or not derived
    const lak = LAKARA.find((x) => terms.includes(x) && byLak[x]) ?? 'लट्';
    // the word's own पद: यजते lights the आत्मनेपद table, not यजति's
    const para = (terms.includes('आत्मनेपद') ? byLak[lak + '·आत्मनेपद'] : undefined) ?? byLak[lak];
    if (!para) return null;
    const { grid, row, col } = toGrid(para, PURUSHA, VACANA, p, v);
    return { stem: root, lakara: lak, kind: LAKARA_EN[lak] ?? '', grid, row, col };
  }

  // noun: the lemma when the corpus records one, otherwise the stem whose
  // declension contains this form.
  const stem = deaccent(lemma) || stemForForm(data as Indexed, look, false) || '';
  // a pronoun or ungendered stem is keyed by the gender this word is in
  const lg = ['पुंलिङ्ग', 'स्त्रीलिङ्ग', 'नपुंसकलिङ्ग'].find((x) => terms.includes(x));
  /*
    A participle's lemma is its root, so its table is the kṛdanta's own,
    keyed root + affix: सन्तम् → अस्+शतृ, declined सन्, सन्तौ, सन्तः … — not the
    root read as a noun stem.
  */
  // (a kṛdanta whose lemma is its own stem — दातृ, not दा — has no root+affix
  // table and declines as that stem, below)
  const isKrt = terms.includes('कृदन्त') && Object.keys(data.nounParadigms).some((k) => k.startsWith(stem + '+'));
  if (isKrt) {
    const keys = Object.keys(data.nounParadigms).filter((k) => k.startsWith(stem + '+'));
    const holds = (k: string) => Object.values(data.nounParadigms[k]).some((f) => sp(f) === bare);
    const key = keys.find((k) => (!lg || k.endsWith('·' + lg)) && holds(k))
      ?? keys.find(holds)
      ?? terms.map((t) => `${stem}+${t}·${lg}`).find((k) => data.nounParadigms[k]);
    if (key) {
    const vib = VIBHAKTI.findIndex((x) => terms.includes(x));
    const vacIdx = VACANA.findIndex((x) => terms.includes(x));
    const { grid, row, col } = toGrid(data.nounParadigms[key], VIBHAKTI, VACANA, vib, vacIdx >= 0 ? vacIdx : 0);
    const affix = key.slice(stem.length + 1).split('·')[0];
    return { stem: `${stem} + ${affix}`, lakara: null, kind: 'participle', grid, row, col };
    }
  }
  // …and where the form leaves the gender open (तस्य is masculine or neuter),
  // the first gendered table that holds the form — the cell is the same either way.
  // the word's gender's table first (an adjective's मधुरः is not its stem's
  // मधुरा), then the stem's own, then any gender that holds the form
  const keyOf = [
    ...(lg ? [stem + '·' + lg] : []), stem,
    ...['पुंलिङ्ग', 'नपुंसकलिङ्ग', 'स्त्रीलिङ्ग'].map((x) => stem + '·' + x)
  ];
  const holdsBare = (k: string) => Object.values(data.nounParadigms[k]).some((f) => sp(f) === bare)
    || Object.values(data.nounVariants?.[k] ?? {}).some((fs) => fs.some((f) => sp(f) === bare));
  const vib = VIBHAKTI.findIndex((x) => terms.includes(x));
  // वचन defaults to एकवचन (the unmarked number) when not authored.
  const vacIdx = VACANA.findIndex((x) => terms.includes(x));
  const col = vacIdx >= 0 ? vacIdx : 0;
  // Of the candidate tables, the one whose lit cell IS the word wins: ते
  // tagged प्रथमा·द्विवचन is the feminine or neuter (the masculine is तौ).
  const cellKey = vib >= 0 ? `${VIBHAKTI[vib]}|${VACANA[col]}` : '';
  const atCell = (k: string) => !!cellKey && (sp(data.nounParadigms[k][cellKey] ?? '') === bare
    || (data.nounVariants?.[k]?.[cellKey] ?? []).some((f) => sp(f) === bare));
  const have = keyOf.filter((k) => data.nounParadigms[k]);
  const pkey = have.find(atCell) ?? have.slice(0, 2).find((k) => keyOf.indexOf(k) < 2) ?? have.find(holdsBare);
  const para = pkey ? data.nounParadigms[pkey] : undefined;
  if (!para) return null;
  const { grid, row, col: c } = toGrid(para, VIBHAKTI, VACANA, vib, col);
  /*
    A cell can hold two correct forms — रात्र्याम् and रात्रौ are both the
    locative of रात्रि — and the table shows one. When the word is the other,
    the lit cell shows the word first, so the table never contradicts it.
  */
  const lit = row >= 0 && c >= 0 ? grid.rows[row].cells[c] : '';
  const alts = data.nounVariants?.[pkey!]?.[`${VIBHAKTI[row]}|${VACANA[c]}`] ?? [];
  if (lit && sp(lit) !== bare && alts.some((f) => sp(f) === bare))
    grid.rows[row].cells[c] = `${form} / ${lit}`;
  return { stem, lakara: null, kind: 'declension', grid, row, col: c };
}
