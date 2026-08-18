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
  { id: 'hal',     dev: 'हलन्त',              en: 'consonant stems',   ending: 'hal',                     exemplar: 'राजन्' }
];

/**
 * सर्वनाम is its own section, not a class inside सुबन्त.
 *
 * It takes सुप् endings, but that is where the resemblance stops. The endings
 * themselves differ — तस्मै where a noun has देवाय, तस्मिन् where a noun has देवे —
 * under a body of rules (7.1.14-7.1.17, 7.3.114) that apply to सर्वनाम alone.
 * And it has no gender of its own, so one lemma carries three paradigms where
 * a noun carries one.
 *
 * Filing it under सुबन्त put a word with three genders in a list keyed by
 * gender, and set तद् beside देव as though they inflected alike. The tradition
 * keeps सर्वनामानि apart; so does /ref/tables, in its own section.
 */
export const SARVANAMA_GROUPS: StemGroup[] = [
  { id: 'purusha', dev: 'पुरुषवाचक', en: 'personal',      ending: '*', exemplar: 'अस्मद्' },
  { id: 'darshi',  dev: 'निर्देशवाचक', en: 'demonstrative', ending: '*', exemplar: 'तद्' },
  { id: 'prashna', dev: 'प्रश्नवाचक',  en: 'interrogative', ending: '*', exemplar: 'किम्' },
  { id: 'sambandha', dev: 'सम्बन्धवाचक', en: 'relative',    ending: '*', exemplar: 'यद्' }
];

/**
 * The pronouns proper. A closed list, and deliberately so.
 *
 * The corpus tags सर्व, एक and अन्य as सर्वनाम, and by 1.1.27 सर्वादीनि सर्वनामानि
 * it is right to: they take the pronominal endings (सर्वस्मै, not *सर्वाय). But
 * they are ordinary adjectives — they have a gender of their own, they qualify
 * a noun, and they decline like देव everywhere the सर्वादि rules do not reach.
 * Filing them with तद् and अस्मद् put adjectives in a list of pronouns.
 *
 * So the tag is not the test. A word is a pronoun here only if it is one of
 * these; everything else the corpus marks सर्वनाम stays a सुबन्त and is noted as
 * सर्वादि instead.
 */
const SARVANAMA_CLASS: Record<string, string> = {
  'अस्मद्': 'purusha', 'युष्मद्': 'purusha',
  'तद्': 'darshi', 'एतद्': 'darshi', 'इदम्': 'darshi', 'अदस्': 'darshi',
  'किम्': 'prashna',
  'यद्': 'sambandha'
};

/** True for the pronouns proper — not for the सर्वादि adjectives. */
export function isSarvanama(stem: string): boolean {
  return stem in SARVANAMA_CLASS;
}

export function sarvanamaGroupFor(stem: string): StemGroup {
  const id = SARVANAMA_CLASS[stem];
  return SARVANAMA_GROUPS.find((g) => g.id === id) ?? SARVANAMA_GROUPS[1];
}

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
 * Which सुबन्त class a stem belongs to. Pronouns do not pass through here —
 * they are their own section; see `sarvanamaGroupFor`.
 */
export function groupFor(stem: string, linga: string | null): StemGroup {
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
