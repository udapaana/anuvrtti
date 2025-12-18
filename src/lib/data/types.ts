/** Raw sūtra data from ashtadhyayi.com */
export interface RawSutra {
  i: string;      // id like "11001"
  a: string;      // adhyāya
  p: string;      // pāda
  n: string;      // number within pāda
  s: string;      // sūtra in Devanagari
  e: string;      // sūtra in Roman (no diacritics)
  ss: string;     // expanded form with anuvṛtti filled in
  an: string;     // anuvṛtti references (e.g., "वृद्धिः$11001##गुणः$11002")
  ad: string;     // adhikāra references
  type: string;   // type like "S$वृद्धिसंज्ञा$"
  pc: string;     // pada-ccheda (word breakdown)
}

/** Processed sūtra for display */
export interface Sutra {
  id: string;           // "1.1.1"
  numericId: string;    // "11001"
  adhyaya: number;
  pada: number;
  number: number;
  text: string;         // Devanagari
  textRoman: string;    // Roman transliteration
  expanded: string;     // Full form with anuvṛtti
  type: SutraType;
  typeName: string;     // Sanskrit name of type
  anuvrtti: AnuvrttiRef[];
  adhikara: string[];
  padaCcheda: PadaInfo[];
}

export type SutraType = 'samjna' | 'paribhasha' | 'vidhi' | 'adhikara' | 'atidesa' | 'other';

export interface AnuvrttiRef {
  term: string;       // The inherited term
  fromId: string;     // Source sūtra id like "1.1.1"
  fromNumericId: string;
}

export interface PadaInfo {
  word: string;
  vibhakti?: string;  // Case/number info
  sourceId?: string;  // If from another sūtra
}

/** Commentary data */
export interface Commentary {
  kashika?: string;
  vartika?: string[];
  englishShort?: string;
  englishFull?: string;
}
