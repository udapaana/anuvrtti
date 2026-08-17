/**
 * types.ts — the shape of the प्रयोग index.
 *
 * One rule governs everything here: a cell does not store an example, it stores
 * what the corpus turned out to contain. The index is generated from
 * readings.json, so a cell is empty exactly when no reading attests it — which
 * makes coverage computable and gives authoring a work queue.
 *
 * ── why the axes are data and not hardcoded ──────────────────────────────
 *
 * सुबन्त is विभक्ति × वचन, and it is the first thing built here — but it is not
 * the only tabular thing in the language. तिङन्त is पुरुष × वचन once लकार and पद
 * are pinned; सन्धि is final वर्ण × initial वर्ण; वर्णमाला is place × manner. The
 * same shape underlies all four: two closed axes whose every intersection is
 * meaningful.
 *
 * So a Paradigm names its own axes rather than assuming case and number, and a
 * feature with a value is an axis or a filter depending only on where it is put
 * — which is exactly what lets तिङन्त become a grid after two features are
 * fixed. Adding a category should add an index, not a component.
 */

/** One axis of a grid: the feature it varies, and its closed list of values. */
export interface Axis {
  /** The feature name, in Devanagari — विभक्ति, वचन, पुरुष, स्थान… */
  feature: string;
  /** Every value the axis takes, in the order the tradition gives them. */
  values: string[];
}

/** A feature pinned to one value, narrowing what the grid shows. लकार for तिङन्त. */
export type Pinned = Record<string, string>;

/** One occurrence of one form in one reading. The only place corpus text lives. */
export interface Attestation {
  /** Deaccented — the matching key. */
  form: string;
  /** As it stands in the reading, accents intact. This is what gets displayed. */
  formRaw: string;
  reading: string;
  position: number;
  chapter: string;
  /** The words either side, which is what makes an ambiguous form readable. */
  phrase: string | null;
  gloss: string;
  /** Authored sūtra citations. Often empty — only 29% of case-tagged words carry one. */
  cites: Array<{ cite: string; role: string }>;
  /** True when this form fills more than one cell of this paradigm. */
  ambiguous: boolean;
  /** Further occurrences of this cell not carried in the payload. Set on the first only. */
  more?: number;
}

/**
 * One thing that declines or conjugates, with its grid.
 *
 * Called `subject` rather than `stem` because what fills the row axis differs by
 * kind: a प्रातिपदिक for सुबन्त, a धातु for तिङन्त, a वर्ण for सन्धि.
 */
export interface ParadigmEntry {
  /** The lemma / root / varṇa as the corpus records it. */
  subject: string;
  /** What sort of thing this is — 'subanta' today; 'tinanta', 'sandhi' later. */
  kind: string;
  /**
   * The gender the attested forms point to, or null when they do not settle it.
   * Null has two quite different causes, which `isPronoun` separates.
   */
  linga: string | null;
  /**
   * A सर्वनाम takes the gender of its referent, so तद् genuinely appears as सः,
   * सा and तत् in one corpus. Its null liṅga is a property of the word, not a
   * gap in the evidence, and the page must not offer to fill it in.
   */
  isPronoun?: boolean;
  /** Features fixed for this grid — e.g. { लकार: 'लट्', पद: 'परस्मैपद' }. Empty for सुबन्त. */
  pinned: Pinned;
  /** Distinct deaccented forms attested. */
  forms: number;
  /** Distinct cells the corpus touches. */
  filled: number;
  /** rows × cols — 24 for सुबन्त, 9 for one लकार of तिङन्त. */
  total: number;
  /** Attestations by `cellKey(rowValue, colValue)`. */
  grid: Record<string, Attestation[]>;
  /**
   * What vidyut derives for each cell, attested or not — including the cells no
   * reading fills. Absent when `linga` could not be narrowed, because an
   * expected-form grid without a gender would be a guess.
   */
  paradigm?: Record<string, string[]>;
  /**
   * Attested, but matching no cell of the classical paradigm — the Vedic forms
   * (देवासः, देवेभिः) Pāṇini's core rules do not produce. Shown apart rather than
   * dropped, since the corpus's Ṛgveda block is a third of its attested text.
   */
  unplaced: Attestation[];
}

/** One browsable category: its axes, and every subject indexed under them. */
export interface UsageSection {
  /** 'subanta', 'tinanta', … — matches the सन्दर्भः browse taxonomy. */
  kind: string;
  dev: string;
  en: string;
  /** [rows, cols]. Named here once so the renderer never assumes case and number. */
  axes: [Axis, Axis];
  /** Ranked by cells filled, then forms attested. Multi-form subjects only. */
  entries: ParadigmEntry[];
  /**
   * Subjects the corpus attests exactly once. A single form cannot show a
   * paradigm, so these carry a name and a count rather than a grid — but they
   * are listed, because "300 nouns seen once" is itself a fact about coverage.
   */
  sparse: Array<{ subject: string; linga: string | null; forms: number; filled: number }>;
}

export interface UsageIndex {
  generated: string;
  sections: UsageSection[];
  /** Annotated words with no lemma, which cannot be indexed. Reported, not hidden. */
  unlemmatized: number;
}
