/**
 * schema.ts — the shape of an annotated word, as data.
 *
 * docs/WORD-TYPES.md enumerates every kind of word and the dimensions each is
 * annotated along. That document was prose, so nothing could check it: the
 * corpus drifted to 5% वचन coverage and 291 untyped words without any single
 * edit looking wrong, because there was no statement a script could read.
 *
 * This is that statement. One definition, three consumers:
 *
 *   - `check-complete` reports what a word still owes
 *   - `build-readings` knows which dimensions it may fill in from derivation
 *   - the reader can label a tag as authored or derived
 *
 * The rule the whole file encodes: **a dimension is a coordinate, not a
 * description.** Closed set of values, the same question for every word of the
 * type, and two words with the same coordinates are the same cell. Which sūtra
 * applied is commentary and lives in `cite`, not here.
 */

/** Where a dimension's value comes from. */
export type Source =
  /** The sentence or the analysis decides it. Nothing can derive it. */
  | 'authored'
  /** vidyut settles it once the authored dimensions are known. */
  | 'derived'
  /** Authored, but only when the sentence assigns one — absence is not a defect. */
  | 'optional';

export interface Dimension {
  /** The tag as it appears in `notes[].term`. */
  name: string;
  /** Every value it may take. Empty means open (a lemma, a compound analysis). */
  values: string[];
  source: Source;
  /** Why it cannot be derived, for the ones that surprise people. */
  note?: string;
}

export interface WordType {
  id: string;
  dev: string;
  en: string;
  /**
   * Tags that identify a word as this type. The first match wins, so order
   * matters: a क्त participle carries विभक्ति too, and must be read as कृदन्त.
   */
  markers: string[];
  dimensions: Dimension[];
}

// ── closed value sets ───────────────────────────────────────────────────
export const VIBHAKTI = [
  'प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'
];
export const VACANA = ['एकवचन', 'द्विवचन', 'बहुवचन'];
export const LINGA = ['पुंलिङ्ग', 'स्त्रीलिङ्ग', 'नपुंसकलिङ्ग'];
export const LAKARA = [
  'लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लोट्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लृङ्'
];
export const PURUSHA = ['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष'];
export const PADA = ['परस्मैपद', 'आत्मनेपद'];
export const PRAYOGA = ['कर्तरि', 'कर्मणि', 'भावे'];
export const KARAKA = [
  'कर्तृ', 'कर्मन्', 'करण', 'सम्प्रदान', 'अपादान', 'अधिकरण', 'सम्बन्ध'
];
export const SAMASA = [
  'तत्पुरुष', 'कर्मधारय', 'द्विगु', 'बहुव्रीहि', 'द्वन्द्व', 'अव्ययीभाव'
];

/** कृत् suffixes whose product declines — a सुबन्त, so it owes विभक्ति and वचन. */
export const KRT_DECLINING = [
  'क्त', 'क्तवतु', 'शतृ', 'शानच्', 'क्वसु', 'कानच्',
  'तव्य', 'अनीयर्', 'ण्यत्', 'यत्', 'क्यप्',
  'तृच्', 'तृन्', 'ण्वुल्', 'णिनि',
  'घञ्', 'ल्युट्', 'क्तिन्', 'अच्', 'अङ्',
  'निष्ठा', 'कृत्य'
];
/** कृत् suffixes whose product is अव्यय by 1.1.40 — no further dimensions. */
export const KRT_INDECLINABLE = ['क्त्वा', 'ल्यप्', 'तुमुन्'];

export const AVYAYA_SUBTYPES = [
  'निपात', 'उपसर्ग', 'कर्मप्रवचनीय', 'क्रियाविशेषण', 'कृदव्यय', 'अव्ययीभाव'
];

// ── the types ───────────────────────────────────────────────────────────
export const WORD_TYPES: WordType[] = [
  {
    id: 'tinanta',
    dev: 'तिङन्त',
    en: 'finite verb',
    markers: LAKARA,
    dimensions: [
      { name: 'lemma', values: [], source: 'authored',
        note: 'the धातु — a word with no root belongs to no paradigm' },
      { name: 'लकार', values: LAKARA, source: 'authored',
        note: 'not recoverable from the form' },
      { name: 'पुरुष', values: PURUSHA, source: 'derived' },
      { name: 'वचन', values: VACANA, source: 'derived' },
      { name: 'पद', values: PADA, source: 'derived' },
      { name: 'प्रयोग', values: PRAYOGA, source: 'optional',
        note: 'कर्तरि is the default; tag only कर्मणि and भावे, which the form rarely shows' },
      { name: 'उपसर्ग', values: [], source: 'optional',
        note: 'आगच्छति is not गच्छति — the preverb makes a different verb' },
      { name: 'सनादि', values: ['णिच्', 'सन्', 'यङ्', 'यङ्लुक्', 'क्यच्', 'क्यङ्'],
        source: 'optional', note: 'गमयति is not गच्छति' }
    ]
  },
  {
    id: 'kridanta',
    dev: 'कृदन्त',
    en: 'primary derivative',
    // Checked before सुबन्त: a क्त participle carries विभक्ति as well, and
    // reading it as a plain noun loses the suffix that is the point of it.
    markers: [...KRT_DECLINING, ...KRT_INDECLINABLE, 'कृदन्त'],
    dimensions: [
      { name: 'lemma', values: [], source: 'authored', note: 'the धातु it is built from' },
      { name: 'कृत्', values: [...KRT_DECLINING, ...KRT_INDECLINABLE], source: 'authored',
        note: 'name the suffix, not the category — क्त says it declines, क्त्वा says it does not' },
      { name: 'विभक्ति', values: VIBHAKTI, source: 'authored',
        note: 'only when the suffix declines' },
      { name: 'वचन', values: VACANA, source: 'derived' }
    ]
  },
  {
    id: 'subanta',
    dev: 'सुबन्त',
    en: 'inflected nominal',
    markers: VIBHAKTI,
    dimensions: [
      { name: 'lemma', values: [], source: 'authored', note: 'the प्रातिपदिक' },
      { name: 'विभक्ति', values: VIBHAKTI, source: 'authored',
        note: 'the sentence decides; देवे could be five cells' },
      { name: 'वचन', values: VACANA, source: 'derived' },
      { name: 'लिङ्ग', values: LINGA, source: 'derived' },
      { name: 'कारक', values: KARAKA, source: 'optional',
        note: 'supplies the विभक्ति where it is absent, and answers "what is it doing here?"' },
      { name: 'समास', values: SAMASA, source: 'optional',
        note: 'with a विग्रह — an analysis, never a computation' }
    ]
  },
  {
    id: 'avyaya',
    dev: 'अव्यय',
    en: 'indeclinable',
    markers: ['अव्यय'],
    dimensions: [
      { name: 'lemma', values: [], source: 'authored' },
      { name: 'अव्यय-भेद', values: AVYAYA_SUBTYPES, source: 'optional',
        note: 'nothing inflects; the subtype is for browsing, not for placing' }
    ]
  }
];

/** Which type a word is, by its tags. Order matters — see `markers`. */
export function typeOf(terms: Set<string>): WordType | null {
  for (const t of WORD_TYPES) {
    if (t.markers.some((m) => terms.has(m))) return t;
  }
  return null;
}

/** True when this कृदन्त takes सुप् endings and so owes विभक्ति. */
export function krtDeclines(terms: Set<string>): boolean {
  if ([...terms].some((t) => KRT_INDECLINABLE.includes(t))) return false;
  return [...terms].some((t) => KRT_DECLINING.includes(t));
}

/**
 * Tags that are legal but are not dimension values.
 *
 * A type marker (अव्यय, कृदन्त) names what a word IS; a class tag (सर्वनाम,
 * विशेषण) names how it behaves without adding a coordinate. Both are correct
 * annotation, so `--unknown` must not flag them — that report is for finding
 * typos and genuine schema gaps, and it is useless if it lists the vocabulary
 * the corpus is supposed to use.
 */
export const CLASS_TAGS = [
  'सर्वनाम',      // pronoun, or a सर्वादि taking pronominal endings
  'विशेषण',       // adjective — agrees, has no dimensions of its own
  'विशेष्य',      // the noun an adjective agrees with
  'संख्या',       // numeral
  'तद्धित',       // secondary derivative; the suffix names which
  'धातु',         // marks the citation form itself
  'निपात',        // particle
  'उपसर्ग',       // preverb
  'सर्वनामस्थान', // the strong-case saṃjñā (1.1.43)
  'नपुंसक',       // a neuter, where the gender is the point being taught
  'भाव', 'कर्मणि', 'कर्तरि'   // prayoga, named on the word rather than the verb
];

/** Every tag the schema recognises: dimension values, markers, class tags. */
export const KNOWN_VALUES = new Set<string>([
  ...WORD_TYPES.flatMap((t) => t.dimensions.flatMap((d) => d.values)),
  ...WORD_TYPES.flatMap((t) => t.markers),
  ...CLASS_TAGS
]);
