/**
 * taxonomy.ts — how the tradition groups what declines and what conjugates.
 *
 * `/ref/tables` already carries this arrangement, hand-curated: अकारान्त,
 * आकारान्त, हलन्त, सर्वनामानि, and for verbs one section per लकार. It is the
 * organisation every Sanskrit grammar uses, and it is better than anything
 * derived from spelling alone — it knows that तद् belongs with the pronouns
 * rather than with the द्-final consonant stems.
 *
 * So the groups are named here rather than inferred, and the derived index is
 * filed into them. The names, order and exemplars are lifted from
 * `src/lib/reference/subanta.ts` and `tinganta.ts` so the two views of the
 * corpus agree; when प्रयोग eventually absorbs those tables, this is the seam
 * they meet at.
 */

export interface StemGroup {
  id: string;
  /** The traditional name — अकारान्त पुंलिङ्ग. */
  dev: string;
  en: string;
  /** The stem every grammar teaches this class with, when the corpus has it. */
  exemplar?: string;
  /** Matches a stem's final sound. `hal` means consonant-final. */
  ending: string;
  /** Restrict to one gender; omitted when the class spans genders. */
  linga?: string;
}

/**
 * सुबन्त classes, in the order `/ref/tables` presents them: the commonest
 * first, pronouns last because they are irregular and span all three genders.
 */
export const SUBANTA_GROUPS: StemGroup[] = [
  { id: 'a-pum',   dev: 'अकारान्त पुंलिङ्ग',   en: 'a-stem masculine',  ending: 'अ', linga: 'पुंलिङ्ग',      exemplar: 'देव' },
  { id: 'a-napum', dev: 'अकारान्त नपुंसक',    en: 'a-stem neuter',     ending: 'अ', linga: 'नपुंसकलिङ्ग',   exemplar: 'फल' },
  { id: 'aa-stri', dev: 'आकारान्त स्त्रीलिङ्ग', en: 'ā-stem feminine',   ending: 'आ', linga: 'स्त्रीलिङ्ग',   exemplar: 'सेना' },
  { id: 'i-u',     dev: 'इ/उकारान्त',         en: 'i- and u-stems',    ending: 'इउईऊ',                    exemplar: 'अग्नि' },
  { id: 'r-stem',  dev: 'ऋकारान्त',           en: 'ṛ-stems',           ending: 'ऋ',                       exemplar: 'पितृ' },
  { id: 'hal',     dev: 'हलन्त',              en: 'consonant stems',   ending: 'hal',                     exemplar: 'राजन्' },
  { id: 'sarva',   dev: 'सर्वनामानि',          en: 'pronouns',          ending: '*',                       exemplar: 'तद्' }
];

const FINAL_VOWEL: Record<string, string> = {
  'ा': 'आ', 'ि': 'इ', 'ी': 'ई', 'ु': 'उ', 'ू': 'ऊ', 'ृ': 'ऋ', 'े': 'ए', 'ो': 'ओ'
};

/** The final sound of a stem: a vowel name, or `hal` for consonant-final. */
export function finalSound(stem: string): string {
  const chars = [...String(stem ?? '')];
  const last = chars[chars.length - 1];
  if (last === '्') return 'hal';
  return FINAL_VOWEL[last] ?? 'अ';
}

/**
 * Which group a stem belongs to.
 *
 * Pronouns are matched first and on the सर्वनाम tag alone, because their
 * spelling is misleading: तद् and यद् are द्-final and would otherwise file
 * under हलन्त beside राजन्, which is not how anyone learns them.
 */
export function groupFor(
  stem: string, linga: string | null, isPronoun: boolean
): StemGroup {
  if (isPronoun) return SUBANTA_GROUPS[SUBANTA_GROUPS.length - 1];
  const f = finalSound(stem);
  for (const g of SUBANTA_GROUPS) {
    if (g.ending === '*') continue;
    if (!g.ending.includes(f)) continue;
    if (g.linga && g.linga !== linga) continue;
    return g;
  }
  // An अ-stem whose gender never settled: real, and common enough to name.
  return {
    id: 'unsettled',
    dev: f === 'hal' ? 'हलन्त · लिङ्ग अनिश्चित' : `${f}कारान्त · लिङ्ग अनिश्चित`,
    en: 'gender not shown by the attested forms',
    ending: f
  };
}

/** gaṇa key → the tradition's name and number, for तिङन्त browsing. */
export const GANA_DEV: Record<string, string> = {
  Bhvadi: '१ भ्वादि', Adadi: '२ अदादि', Juhotyadi: '३ जुहोत्यादि',
  Divadi: '४ दिवादि', Svadi: '५ स्वादि', Tudadi: '६ तुदादि',
  Rudhadi: '७ रुधादि', Tanadi: '८ तनादि', Kryadi: '९ क्र्यादि',
  Curadi: '१० चुरादि'
};

/** लकार order, as `/ref/tables` presents them — present first, then the pasts. */
export const LAKARA_ORDER = [
  'लट्', 'लङ्', 'लोट्', 'विधिलिङ्', 'लृट्', 'लिट्', 'लुङ्', 'लुट्', 'आशीर्लिङ्', 'लृङ्'
];
