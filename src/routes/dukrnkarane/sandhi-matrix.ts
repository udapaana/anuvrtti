/**
 * The vowel-sandhi table, as a grid of which rule fires for each pair.
 *
 * Kale sets §§ 19-24 as six separate prose rules. Read that way it is hard to
 * see where one rule stops and the next begins — the thing a reader most wants
 * to know and the thing prose hides. Laid out as first-vowel × second-vowel,
 * § 19 is the diagonal and everything off it belongs to a neighbouring rule.
 *
 * Hand-authored from Kale's own statements, not derived: the corpus records
 * which sūtra each rule cites but never which rule governs a given pair, so
 * there is nothing to parse. Each cell is checked against the rule it names.
 *
 *   § 19  savarṇa dīrgha — like + like → the long vowel          (6.1.101)
 *   § 20  guṇa           — a/ā + i/u/ṛ/ḷ → e/o/ar/al             (6.1.87)
 *   § 21  vṛddhi         — a/ā + e/ai → ai;  a/ā + o/au → au     (6.1.88)
 *   § 22  yaṇ            — i/u/ṛ/ḷ + dissimilar vowel → y/v/r/l  (6.1.77)
 *   § 24  ayavāyāv       — e/o/ai/au + vowel → ay/av/āy/āv       (6.1.78)
 */

export type Cell = {
  /** Result, in Devanagari. */
  out: string;
  /** Kale section that governs this pair. */
  rule: number;
  /** Sūtra id for /ref, when the section links to exactly one. */
  sutra?: string;
};

/** Row = first vowel, column = second vowel. Both indexed by these labels. */
export const VOWELS = ['अ/आ', 'इ/ई', 'उ/ऊ', 'ऋ/ॠ', 'ए/ऐ', 'ओ/औ'] as const;

export type Vowel = (typeof VOWELS)[number];

/**
 * matrix[first][second]. Only the pairs Kale's §§ 19-24 actually cover; the
 * gaps are pairs he does not state a rule for, and are left empty rather than
 * filled by analogy.
 */
export const MATRIX: Record<string, Record<string, Cell>> = {
  'अ/आ': {
    'अ/आ': { out: 'आ', rule: 19, sutra: '61101' },
    'इ/ई': { out: 'ए', rule: 20 },
    'उ/ऊ': { out: 'ओ', rule: 20 },
    'ऋ/ॠ': { out: 'अर्', rule: 20 },
    'ए/ऐ': { out: 'ऐ', rule: 21 },
    'ओ/औ': { out: 'औ', rule: 21 },
  },
  'इ/ई': {
    'अ/आ': { out: 'य्', rule: 22, sutra: '61077' },
    'इ/ई': { out: 'ई', rule: 19, sutra: '61101' },
    'उ/ऊ': { out: 'य्', rule: 22, sutra: '61077' },
    'ऋ/ॠ': { out: 'य्', rule: 22, sutra: '61077' },
    'ए/ऐ': { out: 'य्', rule: 22, sutra: '61077' },
    'ओ/औ': { out: 'य्', rule: 22, sutra: '61077' },
  },
  'उ/ऊ': {
    'अ/आ': { out: 'व्', rule: 22, sutra: '61077' },
    'इ/ई': { out: 'व्', rule: 22, sutra: '61077' },
    'उ/ऊ': { out: 'ऊ', rule: 19, sutra: '61101' },
    'ऋ/ॠ': { out: 'व्', rule: 22, sutra: '61077' },
    'ए/ऐ': { out: 'व्', rule: 22, sutra: '61077' },
    'ओ/औ': { out: 'व्', rule: 22, sutra: '61077' },
  },
  'ऋ/ॠ': {
    'अ/आ': { out: 'र्', rule: 22, sutra: '61077' },
    'इ/ई': { out: 'र्', rule: 22, sutra: '61077' },
    'उ/ऊ': { out: 'र्', rule: 22, sutra: '61077' },
    'ऋ/ॠ': { out: 'ॠ', rule: 19, sutra: '61101' },
    'ए/ऐ': { out: 'र्', rule: 22, sutra: '61077' },
    'ओ/औ': { out: 'र्', rule: 22, sutra: '61077' },
  },
  'ए/ऐ': {
    'अ/आ': { out: 'अय्/आय्', rule: 24 },
    'इ/ई': { out: 'अय्/आय्', rule: 24 },
    'उ/ऊ': { out: 'अय्/आय्', rule: 24 },
    'ऋ/ॠ': { out: 'अय्/आय्', rule: 24 },
    'ए/ऐ': { out: 'अय्/आय्', rule: 24 },
    'ओ/औ': { out: 'अय्/आय्', rule: 24 },
  },
  'ओ/औ': {
    'अ/आ': { out: 'अव्/आव्', rule: 24 },
    'इ/ई': { out: 'अव्/आव्', rule: 24 },
    'उ/ऊ': { out: 'अव्/आव्', rule: 24 },
    'ऋ/ॠ': { out: 'अव्/आव्', rule: 24 },
    'ए/ऐ': { out: 'अव्/आव्', rule: 24 },
    'ओ/औ': { out: 'अव्/आव्', rule: 24 },
  },
};

/** Sections the matrix covers, for deciding when to show it. */
export const MATRIX_RULES = [19, 20, 21, 22, 24];
