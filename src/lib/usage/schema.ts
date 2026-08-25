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

/**
 * A RELATION — the thing a coordinate schema cannot hold.
 *
 * A dimension is a property of ONE word (its case, its number). But some
 * grammatical facts are edges BETWEEN words: an adjective agrees with a noun, a
 * कर्मप्रवचनीय governs a case on another word, a compound has an internal parse.
 * These are directed, typed links, not coordinates, so they live in a `rel[]`
 * array on the word rather than as a `term` tag.
 *
 *   - form: महापुरुषः
 *     rel:
 *       - kind: विशेषण      # I qualify …
 *         to: 3            # … the word at index 3 in this reading's words[]
 *
 * `to` is the 0-based index into the SAME reading's `words[]`. A relation whose
 * `to` is out of range, or whose `agree` axes disagree between the two words,
 * is a lint error — the edge is checkable exactly as a value is.
 */
export interface RelationKind {
  /** The tag as it appears in `rel[].kind`. */
  name: string;
  dev: string;
  en: string;
  /** Which word-type(s) may be the SOURCE of this edge. Empty = any. */
  from: string[];
  /**
   * Dimensions that must AGREE between source and target (समानाधिकरण). An
   * adjective shares लिङ्ग·विभक्ति·वचन with its noun; a compound member need not.
   */
  agree: string[];
  note?: string;
}

export const RELATIONS: RelationKind[] = [
  {
    name: 'विशेषण', dev: 'विशेषण', en: 'qualifies (agrees with)',
    from: ['subanta', 'sarvadi', 'sankhya', 'kridanta', 'taddhita'],
    agree: ['लिङ्ग', 'विभक्ति', 'वचन'],
    note: 'an adjective/participle agreeing with the noun it modifies (समानाधिकरण)'
  },
  {
    name: 'विशेष्य', dev: 'विशेष्य', en: 'is qualified by',
    from: ['subanta', 'sarvanama'], agree: ['लिङ्ग', 'विभक्ति', 'वचन'],
    note: 'the reverse edge — the noun, pointing back to its adjective (optional)'
  },
  {
    name: 'गोवत्', dev: 'शासित', en: 'governs the case of',
    from: ['avyaya'], agree: [],
    note: 'a कर्मप्रवचनीय (अनु, प्रति) forcing a विभक्ति on another word — जपम् अनु'
  },
  {
    name: 'अवयव', dev: 'अवयव', en: 'is a member of the compound',
    from: [], agree: [],
    note: 'a compound-internal member pointing at the समास it belongs to; carries its विग्रह-case'
  },
  {
    // Kāle's Syntax §782: the verb agrees with its subject in पुरुष and वचन. The
    // edge runs verb → कर्तृ (subject); पुरुष/वचन must match. This is concord, the
    // core of his Syntax chapter, and the subject↔verb counterpart to विशेषण.
    name: 'कर्तृसमानाधिकरण', dev: 'कर्तृ-अन्वय', en: 'agrees with its subject',
    from: ['tinanta'], agree: ['पुरुष', 'वचन'],
    note: 'a finite verb pointing at its कर्तृ; they share पुरुष and वचन (§782)'
  }
];

export const RELATION_KINDS = RELATIONS.map((r) => r.name);

// ── closed value sets ───────────────────────────────────────────────────
export const VIBHAKTI = [
  'प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'
];
export const VACANA = ['एकवचन', 'द्विवचन', 'बहुवचन'];
export const LINGA = ['पुंलिङ्ग', 'स्त्रीलिङ्ग', 'नपुंसकलिङ्ग'];
export const LAKARA = [
  'लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लोट्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लृङ्',
  // लेट् — the Vedic subjunctive (3.4.7 लिङर्थे लेट्), the eleventh लकार. It
  // exists ONLY in the Veda, so it is absent from the classical ten but required
  // to type Ṛgvedic forms like गमत्, अश्नवत्, दधाते. Without it the corpus's own
  // "subjunctive (लेट्)" prose has no tag to attach to.
  'लेट्'
];
export const PURUSHA = ['प्रथमपुरुष', 'मध्यमपुरुष', 'उत्तमपुरुष'];
export const PADA = ['परस्मैपद', 'आत्मनेपद'];
export const PRAYOGA = ['कर्तरि', 'कर्मणि', 'भावे'];
export const KARAKA = [
  'कर्तृ', 'कर्मन्', 'करण', 'सम्प्रदान', 'अपादान', 'अधिकरण', 'सम्बन्ध'
];

/**
 * Sense-government roles: a विभक्ति assigned by a rule about MEANING rather than
 * by a कारक. निर्धारण picks one out of a group (सप्तमी/षष्ठी), हेतु is the cause
 * (तृतीया), सहार्थ the accompaniment (तृतीया with सह). Distinct from कारक because
 * they answer "why this case?" with a semantic rule, not a role name.
 */
export const SENSE_ROLE = ['हेतु', 'सहार्थ', 'निर्धारण', 'अर्थ', 'इत्थंभूतलक्षण', 'सति सप्तमी', 'तत्र भवः'];

/**
 * समास types AND their sub-types. The six top classes plus the case-named
 * तत्पुरुषs (a तत्पुरुष is sub-typed by the विभक्ति its विग्रह would use) and the
 * कर्मधारय / बहुव्रीहि / द्वन्द्व sub-types. All are the same dimension — "which
 * compound?" — so they share one value set; the top class is recoverable from
 * the sub-type (षष्ठी-तत्पुरुष is a तत्पुरुष).
 */
export const SAMASA = [
  // top classes
  'तत्पुरुष', 'कर्मधारय', 'द्विगु', 'बहुव्रीहि', 'द्वन्द्व', 'अव्ययीभाव',
  // तत्पुरुष by the विग्रह's case, plus the non-case तत्पुरुषs
  'प्रथमा-तत्पुरुष', 'द्वितीया-तत्पुरुष', 'तृतीया-तत्पुरुष', 'चतुर्थी-तत्पुरुष',
  'पञ्चमी-तत्पुरुष', 'षष्ठी-तत्पुरुष', 'सप्तमी-तत्पुरुष',
  'नञ्-तत्पुरुष', 'प्रादि-तत्पुरुष', 'उपपद-तत्पुरुष', 'गति-तत्पुरुष',
  // कर्मधारय sub-types
  'विशेषण-पूर्वपद', 'उपमान', 'अवधारण',
  // बहुव्रीहि sub-types
  'समानाधिकरण-बहुव्रीहि', 'व्यधिकरण-बहुव्रीहि', 'नञ्-बहुव्रीहि',
  // द्वन्द्व sub-types
  'इतरेतर', 'समाहार'
];

/**
 * सन्धि — the type of change at a boundary. Not a word-type but an OVERLAY: any
 * पद may carry a सन्धि note. The three प्रकारs and their common processes are one
 * closed set; the split (वाक् + अत्र) and the cite are authored alongside, in
 * free text, because nothing derives the pre-सन्धि form. See docs/WORD-TYPES.md §4.
 */
export const SANDHI = [
  'सन्धि', // the bare overlay flag
  // स्वरसन्धि — vowel meets vowel
  'गुण', 'वृद्धि', 'यण्', 'अयादि', 'सवर्णदीर्घ', 'पूर्वरूप', 'पररूप',
  // व्यञ्जनसन्धि — consonant assimilation
  'जश्त्व', 'श्चुत्व', 'ष्टुत्व', 'अनुस्वार', 'परसवर्ण', 'चर्त्व', 'णत्व',
  // विसर्गसन्धि
  'विसर्जनीय', 'उत्व', 'लोप', 'षत्व'
];

/**
 * स्वर — Vedic accent. Display-only: authored where the source marks it, never
 * derived (vidyut emits no accents), never a grid axis. An overlay like सन्धि.
 * See docs/WORD-TYPES.md §5.
 */
export const SVARA = ['स्वर', 'उदात्त', 'अनुदात्त', 'स्वरित', 'एकश्रुति', 'प्रचय'];

/** विकरण — the present-stem-forming affix that distinguishes the ten गणs.
 *  Derivable from the गण, but authored today; the axis on which भवति and तुदति
 *  differ. See docs/WORD-TYPES.md §2b. */
export const VIKARANA = ['शप्', 'यक्', 'श्यन्', 'श्नु', 'श्ना', 'श्नम्', 'श्लु', 'उ', 'श', 'णिच्'];

/** गण — the ten root classes (दशगणी), a closed set. Every धातु belongs to
 *  exactly one; कण्ड्वादि is the quasi-eleventh, taking यक् (कण्डूयति). The
 *  विकरण is derivable from the गण, so the two cross-check. */
export const GANA = [
  'भ्वादि', 'अदादि', 'जुहोत्यादि', 'दिवादि', 'स्वादि',
  'तुदादि', 'रुधादि', 'तनादि', 'क्र्यादि', 'चुरादि', 'कण्ड्वादि'
];

/** सनादि — the affixes that build a new धातु (3.1.32 सनाद्यन्ता धातवः). Each
 *  makes a different verb which then takes the full तिङन्त dimension set. */
export const SANADI = ['णिच्', 'सन्', 'यङ्', 'यङ्लुक्', 'क्यच्', 'क्यङ्', 'क्यष्', 'णिङ्', 'काम्यच्', 'यक्'];

/** उपसर्ग — the 22 preverbs, a closed set (they change meaning and select
 *  ल्यप् over क्त्वा). */
export const UPASARGA = [
  'प्र', 'परा', 'अप', 'सम्', 'अनु', 'अव', 'निस्', 'निर्', 'दुस्', 'दुर्', 'वि',
  'आङ्', 'नि', 'अधि', 'अपि', 'अति', 'सु', 'उद्', 'अभि', 'प्रति', 'परि', 'उप'
];

/** कृत् suffixes whose product declines — a सुबन्त, so it owes विभक्ति and वचन. */
export const KRT_DECLINING = [
  'क्त', 'क्तवतु', 'शतृ', 'शानच्', 'क्वसु', 'कानच्',
  'तव्य', 'अनीयर्', 'ण्यत्', 'यत्', 'क्यप्',
  'तृच्', 'तृन्', 'ण्वुल्', 'णिनि',
  'घञ्', 'ल्युट्', 'क्तिन्', 'अच्', 'अङ्',
  'निष्ठा', 'कृत्य',
  // zero-affix कृत् — very common nouns are क्विबन्त (वाच्, दिश्, राज्)
  'क्विप्', 'विच्'
];
/** कृत् suffixes whose product is अव्यय by 1.1.40 — no further dimensions.
 *  णमुल् is the repeated absolutive (भोजं भोजम्, 3.4.22). */
export const KRT_INDECLINABLE = ['क्त्वा', 'ल्यप्', 'तुमुन्', 'णमुल्'];

/**
 * तद्धित suffixes — the secondary derivational affixes. The product is always a
 * सुबन्त, so it takes all of §1's dimensions; these name WHICH suffix, and the
 * suffix carries the अर्थ (the sense) that is the point of the class.
 */
export const TADDHITA_SUFFIX = [
  // अपत्य patronymic
  'अण्', 'इञ्', 'ढक्', 'यञ्',
  // तस्येदम् / तत्र भवः belonging & origin
  'छ', 'यत्', 'ठक्',
  // मतुप् possession
  'मतुप्', 'विनि', 'इन्', 'वत्',
  // भाव abstract
  'त्व', 'तल्', 'ष्यञ्', 'इमनिच्',
  // अतिशायन comparison
  'तरप्', 'तमप्', 'इष्ठन्', 'ईयसुन्',
  // संख्या-derived & adverbial
  'डति', 'तसिल्', 'धा', 'कृत्वसुच्', 'वति', 'त्रल्', 'दा', 'था'
];

/**
 * स्त्रीप्रत्यय — the feminine-forming affixes (4.1). A feminine BASE is derived
 * from a masculine/neuter stem by one of these: देव → देवी (ङीप्), अज → अजा
 * (टाप्). Kāle gives them a whole chapter; the schema records WHICH affix formed
 * a feminine stem, so नदी/सेना carry that they are derived feminines, not just
 * स्त्रीलिङ्ग सुबन्त. An optional dimension — most feminine words in a reader are
 * used, not derived on the page.
 */
export const STRI_PRATYAYA = ['टाप्', 'चाप्', 'ङीप्', 'ङीष्', 'ङीन्', 'ऊङ्'];

/**
 * The अर्थ (sense) a तद्धित carries — the closed set of derivational meanings.
 * These are MEANINGS, kept distinct from the suffixes that express them: the
 * possessive sense is मतुबर्थ (मतुप्/विनि/इन्/वत् all express it), never "मतुप्"
 * — conflating the form and the meaning was a bug the audit caught.
 */
export const TADDHITA_ARTHA = [
  'अपत्य',        // patronymic — descendant of
  'तस्येदम्',      // belonging to / made of
  'विकार',        // material — made of (distinct from तस्येदम्, 4.3.134)
  'मतुबर्थ',       // possession — "having ___" (मतुप्/विनि/इन्/वत्)
  'भाव',          // abstract — the state/quality of being
  'स्वार्थ',       // self-sense — the derivative means what the base does (कन्, इमनिच्)
  'अतिशायन',      // comparison — more / most
  'तत्र-भवः',      // origin — situated in / born in
  'समूह',         // collective — a group of
  'चातुरर्थिक',    // "the four senses" — निवास / अदूरभव / etc. (4.2.67–70)
  'संख्या',        // numeral-derived — -fold, -times
  'अव्ययीकरण'      // adverbialising — तसिल्, धा (indeclinable result)
];

/**
 * Suffixes that may IDENTIFY a word as तद्धित. A subset of TADDHITA_SUFFIX: the
 * bare-syllable suffixes धा · दा · था · छ · अण् collide with common धातु names
 * and single sounds (दा "give", धा "put", अण् the प्रत्याहार), so a word carrying
 * only one of those is not thereby a तद्धित — it needs the explicit तद्धित tag.
 * All suffixes remain legal VALUES; these are only the safe type-markers.
 */
export const TADDHITA_MARKER = TADDHITA_SUFFIX.filter(
  (s) => !['धा', 'दा', 'था', 'छ', 'अण्', 'यत्', 'वत्', 'इन्'].includes(s)
);

/** सर्वनाम — the closed pronominal CORE: the deictic and personal pronouns. */
export const SARVANAMA = ['तद्', 'एतद्', 'इदम्', 'अदस्', 'यद्', 'किम्', 'अस्मद्', 'युष्मद्', 'भवत्'];
export const SARVANAMA_SUBTYPE = [
  'पुरुषवाचक', 'निर्देशवाचक', 'प्रश्नवाचक', 'सम्बन्धवाचक', 'आदरवाचक'
];

/**
 * सर्वादि — the pronominal ADJECTIVES (1.1.27 सर्वादीनि सर्वनामानि beyond the
 * pronoun core). They take सर्वनाम endings (सर्वस्मै, सर्वे for जस्) but are
 * adjectives: each carries its OWN लिङ्ग agreeing with a noun, unlike a true
 * सर्वनाम. Filing सर्व/अन्य under सर्वनाम put an adjective with its own gender in
 * a list keyed by the pronoun core — the audit's #2 finding. ~35 stems; the
 * corpus's are here, add as they appear.
 */
export const SARVADI = [
  'सर्व', 'विश्व', 'उभय', 'अन्य', 'अन्यतर', 'इतर', 'त्व', 'नेम', 'सम', 'सिम',
  'पूर्व', 'पर', 'अवर', 'दक्षिण', 'उत्तर', 'अपर', 'अधर', 'स्व', 'अन्तर',
  'कतर', 'कतम', 'एकतर'
];

/** संख्या — numeral sub-types, told apart by how they decline (see §1d). */
export const SANKHYA_SUBTYPE = ['संख्येय', 'संख्यान', 'पूरण'];

export const AVYAYA_SUBTYPES = [
  'निपात', 'उपसर्ग', 'कर्मप्रवचनीय', 'क्रियाविशेषण', 'कृदव्यय', 'अव्ययीभाव', 'negation'
];

/**
 * Overlays — dimensions that any पद may carry, on top of its type's own. They
 * annotate a PROCESS or a display fact ON the word (a boundary change, an
 * accent), not a coordinate of its paradigm, so they are shared across every
 * type rather than owned by one. Both are `optional`: present only where the
 * word's surface shows the change / the source marks the accent.
 */
export const OVERLAY_DIMENSIONS: Dimension[] = [
  { name: 'सन्धि', values: SANDHI, source: 'optional',
    note: 'a boundary process; the split and cite are authored alongside in free text' },
  { name: 'स्वर', values: SVARA, source: 'optional',
    note: 'display-only — vidyut emits no accents; write it where the source has it' }
];

// ── the types ───────────────────────────────────────────────────────────
export const WORD_TYPES: WordType[] = [
  {
    id: 'tinanta',
    dev: 'तिङन्त',
    en: 'finite verb',
    // A लकार marks it, and so does a पद value (परस्मैपद/आत्मनेपद) — only a finite
    // verb carries pada, so a word tagged आत्मनेपद is a तिङन्त even before its लकार
    // is written. पुरुष is NOT a marker: a pronoun (अहम्, उत्तमपुरुष) carries person
    // too, and would wrongly type as a verb. So person alone does not make a verb.
    markers: [...LAKARA, ...PADA],
    dimensions: [
      { name: 'lemma', values: [], source: 'authored',
        note: 'the धातु — a word with no root belongs to no paradigm' },
      { name: 'लकार', values: LAKARA, source: 'authored',
        note: 'not recoverable from the form' },
      { name: 'पुरुष', values: PURUSHA, source: 'derived' },
      { name: 'वचन', values: VACANA, source: 'derived' },
      { name: 'पद', values: PADA, source: 'derived' },
      { name: 'गण', values: GANA, source: 'derived',
        note: 'the root class; derivable, and it fixes the विकरण' },
      { name: 'विकरण', values: VIKARANA, source: 'optional',
        note: 'derived from गण, but अदादि (लुक्) and जुहोत्यादि (श्लु) have no शप्-like विकरण, so it is not required' },
      { name: 'प्रयोग', values: PRAYOGA, source: 'optional',
        note: 'कर्तरि is the default; tag only कर्मणि and भावे, which the form rarely shows' },
      { name: 'उपसर्ग', values: UPASARGA, source: 'optional',
        note: 'आगच्छति is not गच्छति — the preverb makes a different verb' },
      { name: 'सनादि', values: SANADI, source: 'optional', note: 'गमयति is not गच्छति' },
      ...OVERLAY_DIMENSIONS
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
      { name: 'वचन', values: VACANA, source: 'derived' },
      { name: 'लिङ्ग', values: LINGA, source: 'derived', note: 'only when the suffix declines' },
      { name: 'कारक', values: KARAKA, source: 'optional',
        note: 'a declining कृदन्त plays a कारक role like any noun — गमनम् can be the कर्मन्' },
      { name: 'प्रयोग', values: PRAYOGA, source: 'optional',
        note: 'a participle has voice: क्त is usually कर्मणि (कृतः "done"), शतृ/क्तवतु कर्तरि, तव्य/ण्यत् कर्मणि' },
      { name: 'उपसर्ग', values: UPASARGA, source: 'optional',
        note: 'the कृदन्त is built on the whole verb — प्रस्थाय is प्र + स्था + ल्यप्' },
      { name: 'सनादि', values: SANADI, source: 'optional',
        note: 'a causative participle (गमयित्वा, बोधयन्) carries णिच्' },
      { name: 'विकरण', values: VIKARANA, source: 'optional',
        note: 'a passive participle (पठ्यमान) carries यक्, the passive विकरण' },
      { name: 'समास', values: SAMASA, source: 'optional',
        note: 'a कृदन्त can be a compound member (सर्वस्वामिगुणोपेत)' },
      { name: 'अव्यय-भेद', values: AVYAYA_SUBTYPES, source: 'optional',
        note: 'an indeclinable कृदन्त (श्रुत्वा) is a कृदव्यय' },
      ...OVERLAY_DIMENSIONS
    ]
  },
  {
    id: 'taddhita',
    dev: 'तद्धित',
    en: 'secondary derivative',
    // Before सुबन्त: a तद्धित declines like any noun and carries विभक्ति, but
    // reading it as a plain noun loses the प्रकृति + suffix + अर्थ that is the
    // whole point — गुरुत्वम् is not a lexical noun, it is गुरु + त्व.
    markers: ['तद्धित', ...TADDHITA_MARKER],
    dimensions: [
      { name: 'lemma', values: [], source: 'authored', note: 'the प्रकृति — the base stem (उपगु for औपगव)' },
      { name: 'तद्धित', values: TADDHITA_SUFFIX, source: 'authored',
        note: 'name the suffix — मतुप्, त्व, तरप्; the generic तद्धित tag is not enough' },
      { name: 'अर्थ', values: TADDHITA_ARTHA, source: 'authored', note: 'the sense the suffix carries — the point of the class' },
      { name: 'विभक्ति', values: VIBHAKTI, source: 'authored',
        note: 'when it declines; an adverbial तद्धित (ग्रामतः) is अव्यय and takes none' },
      { name: 'वचन', values: VACANA, source: 'derived' },
      { name: 'लिङ्ग', values: LINGA, source: 'derived' },
      { name: 'कारक', values: KARAKA, source: 'optional',
        note: 'a declining तद्धित plays a कारक role — श्रेष्ठाय is the सम्प्रदान' },
      { name: 'अव्यय-भेद', values: AVYAYA_SUBTYPES, source: 'optional',
        note: 'some तद्धितs (तसिल्, धा) are indeclinable — ग्रामतः, द्विधा' },
      ...OVERLAY_DIMENSIONS
    ]
  },
  {
    id: 'sarvanama',
    dev: 'सर्वनाम',
    en: 'pronoun',
    // Its own section, not a class inside सुबन्त: it takes सुप् but the endings
    // differ (तस्मै not *तदाय), and one lemma carries three genders. Checked
    // before सुबन्त so a pronoun is not filed as an ordinary noun. NOTE: only the
    // deictic/personal CORE — the सर्वादि adjectives (सर्व, अन्य) are their own
    // type below, because they carry their own gender like any adjective.
    markers: ['सर्वनाम', ...SARVANAMA],
    dimensions: [
      { name: 'lemma', values: SARVANAMA, source: 'authored', note: 'the pronominal stem' },
      { name: 'सर्वनाम-भेद', values: SARVANAMA_SUBTYPE, source: 'optional' },
      { name: 'विभक्ति', values: VIBHAKTI, source: 'authored' },
      { name: 'वचन', values: VACANA, source: 'derived' },
      { name: 'लिङ्ग', values: LINGA, source: 'optional',
        note: 'the gender of the REFERENT, not of the word — authored only when it disambiguates; अस्मद्/युष्मद् have none at all' },
      { name: 'पुरुष', values: PURUSHA, source: 'optional',
        note: 'अस्मद्/युष्मद् carry a person — अहम् is उत्तम, त्वम् मध्यम' },
      { name: 'कारक', values: KARAKA, source: 'optional',
        note: 'a pronoun plays a कारक role like any nominal' },
      { name: 'सम्बन्धार्थ', values: SENSE_ROLE, source: 'optional',
        note: 'a pronoun can bear a sense-role too — तेन हेतु "for that reason"' },
      ...OVERLAY_DIMENSIONS
    ]
  },
  {
    id: 'sarvadi',
    dev: 'सर्वादि',
    en: 'pronominal adjective',
    // सर्व, अन्य, पूर्व… — 1.1.27. Take pronominal endings (सर्वस्मै, सर्वे) but
    // are adjectives: own लिङ्ग, agree with a noun. Checked before सुबन्त so the
    // pronominal declension is recorded, but kept apart from true सर्वनाम.
    markers: ['सर्वादि', ...SARVADI],
    dimensions: [
      { name: 'lemma', values: SARVADI, source: 'authored', note: 'the सर्वादि stem' },
      { name: 'विभक्ति', values: VIBHAKTI, source: 'authored' },
      { name: 'वचन', values: VACANA, source: 'derived' },
      { name: 'लिङ्ग', values: LINGA, source: 'derived',
        note: 'its OWN gender, agreeing with the noun — unlike a pronoun' },
      { name: 'कारक', values: KARAKA, source: 'optional' },
      ...OVERLAY_DIMENSIONS
    ]
  },
  {
    id: 'sankhya',
    dev: 'संख्या',
    en: 'numeral',
    markers: ['संख्या', ...SANKHYA_SUBTYPE],
    dimensions: [
      { name: 'lemma', values: [], source: 'authored' },
      { name: 'संख्या-भेद', values: SANKHYA_SUBTYPE, source: 'optional',
        note: 'द्वि is dual-only, पञ्चन्+ genderless — the sub-type governs which forms exist' },
      { name: 'कारक', values: KARAKA, source: 'optional' },
      { name: 'विभक्ति', values: VIBHAKTI, source: 'authored' },
      { name: 'वचन', values: VACANA, source: 'derived' },
      { name: 'लिङ्ग', values: LINGA, source: 'derived', note: 'त्रि/चतुर् only; पञ्चन्+ have none' },
      ...OVERLAY_DIMENSIONS
    ]
  },
  {
    id: 'subanta',
    dev: 'सुबन्त',
    en: 'inflected nominal',
    // A विभक्ति marks it, but so does a कारक or a विशेषण tag: a word bearing a
    // role (कर्मन्, अधिकरण) or qualifying a noun (an adjective) is by definition a
    // सुप्-taking nominal, even before its विभक्ति is written. Checked LAST, so
    // कृदन्त/तद्धित/सर्वनाम/सर्वादि/संख्या — which also carry कारक/विशेषण — claim
    // their words first; only a plain noun or adjective falls to here.
    markers: [...VIBHAKTI, ...KARAKA, 'विशेषण'],
    dimensions: [
      { name: 'lemma', values: [], source: 'authored', note: 'the प्रातिपदिक' },
      { name: 'विभक्ति', values: VIBHAKTI, source: 'authored',
        note: 'the sentence decides; देवे could be five cells' },
      { name: 'वचन', values: VACANA, source: 'derived' },
      { name: 'लिङ्ग', values: LINGA, source: 'derived' },
      { name: 'कारक', values: KARAKA, source: 'optional',
        note: 'supplies the विभक्ति where it is absent, and answers "what is it doing here?"' },
      { name: 'सम्बन्धार्थ', values: SENSE_ROLE, source: 'optional',
        note: 'a case assigned by a meaning-rule (हेतु, निर्धारण) rather than a कारक' },
      { name: 'समास', values: SAMASA, source: 'optional',
        note: 'with a विग्रह — an analysis, never a computation' },
      { name: 'विशेषण', values: [], source: 'optional',
        note: 'an adjective agrees with its विशेष्य in लिङ्ग/विभक्ति/वचन; that link is the fact worth recording' },
      { name: 'स्त्रीप्रत्यय', values: STRI_PRATYAYA, source: 'optional',
        note: 'the feminine-forming affix, when the stem is a derived feminine — नदी (ङीप्), सेना (टाप्)' },
      ...OVERLAY_DIMENSIONS
    ]
  },
  {
    id: 'avyaya',
    dev: 'अव्यय',
    en: 'indeclinable',
    // The bare-subtype tags also mark it: a word tagged निपात/उपसर्ग/कर्मप्रवचनीय/
    // क्रियाविशेषण/कृदव्यय with nothing else is an अव्यय. Checked LAST, so a verb
    // carrying उपसर्ग as its prefix (लट् present) still types as तिङन्त — only a
    // STANDALONE preverb (Vedic tmesis: आ, उप on their own) falls to here.
    markers: ['अव्यय', 'निपात', 'उपसर्ग', 'कर्मप्रवचनीय', 'क्रियाविशेषण', 'कृदव्यय', 'negation'],
    dimensions: [
      { name: 'lemma', values: [], source: 'authored' },
      { name: 'अव्यय-भेद', values: AVYAYA_SUBTYPES, source: 'optional',
        note: 'nothing inflects; the subtype is for browsing, not for placing' },
      ...OVERLAY_DIMENSIONS
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
  'विशेषण',       // adjective — agrees with a विशेष्य, has no dimensions of its own
  'विशेष्य',      // the noun an adjective agrees with
  'समास',         // the bare "this is a compound" flag (the type names which)
  'उपपद',         // the verb-governed member of an उपपद-तत्पुरुष
  'नञ्',          // the negative particle in a नञ्-compound
  'तिङन्त', 'सुबन्त',  // type names used inside a note as metalanguage
  'धातु',         // marks the citation form itself
  'निपात',        // particle (also an अव्यय-भेद)
  'उपसर्ग',       // preverb (also an अव्यय-भेद)
  'सर्वनामस्थान', // the strong-case saṃjñā (1.1.43)
  'नपुंसक', 'पुंलिङ्ग', 'स्त्रीलिङ्ग', // a gender named where it is the point being taught
  'भाव', 'कर्मणि', 'कर्तरि',   // prayoga, named on the word rather than the verb
  // meta / reference tags — name a grammatical FACT, not a word's coordinate.
  // Legal in a note (they teach the metalanguage) but never a dimension value.
  'संज्ञा',        // "this is a technical name" (a saṃjñā-sūtra being taught)
  'परिभाषा',      // an interpretive meta-rule
  'प्रत्याहार',    // a शिव-सूत्र abbreviation (अच्, हल्…)
  'अधिकार',       // a governing heading
  'इत्',          // an इत्-marker being pointed out
  'आगम', 'आदेश',  // an augment / a substitution, named in a derivation
  'लुक्', 'श्लु', 'लुप्',  // elision types, named in a derivation
  'सुप्', 'तिङ्'   // the two ending-classes, named as such
];

/** Every tag the schema recognises: dimension values, markers, class tags. */
export const KNOWN_VALUES = new Set<string>([
  ...WORD_TYPES.flatMap((t) => t.dimensions.flatMap((d) => d.values)),
  ...WORD_TYPES.flatMap((t) => t.markers),
  ...CLASS_TAGS
]);

/*
  What a MISSING tag means.

  Some dimensions are annotated only when they are marked. प्रयोग is declared
  `optional` with the note "कर्तरि is the default; tag only कर्मणि and भावे,
  which the form rarely shows" — so on a finite verb the absence of a प्रयोग
  tag is not an absence of information. It says कर्तरि. Seven of the corpus's
  456 finite verbs carry the tag; the other 449 are active by this convention,
  not unanalysed.

  A reader that only shows what is written down therefore under-reports: the
  तिङन्त card left its प्रयोग row blank on every ordinary verb. This returns
  the values a word carries by convention rather than by annotation, so a
  surface can show them — and, because they are inferred rather than authored,
  mark them as the defaults they are.
*/
export function impliedTerms(terms: readonly string[]): string[] {
  const has = (pool: readonly string[]) => terms.some((t) => pool.includes(t));
  const out: string[] = [];
  // a finite verb is in some प्रयोग; unmarked means कर्तरि
  if (has(LAKARA) && !has(PRAYOGA)) out.push('कर्तरि');
  return out;
}
