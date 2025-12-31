/** Raw sūtra data from ashtadhyayi.com */
export interface RawSutra {
  i: string; // id like "11001"
  a: string; // adhyāya
  p: string; // pāda
  n: string; // number within pāda
  s: string; // sūtra in Devanagari
  e: string; // sūtra in Roman (no diacritics)
  ss: string; // expanded form with anuvṛtti filled in
  an: string; // anuvṛtti references (e.g., "वृद्धिः$11001##गुणः$11002")
  ad: string; // adhikāra references
  type: string; // type like "S$वृद्धिसंज्ञा$"
  pc: string; // pada-ccheda (word breakdown)
}

/** Processed sūtra for display */
export interface Sutra {
  id: string; // "1.1.1"
  numericId: string; // "11001"
  adhyaya: number;
  pada: number;
  number: number;
  text: string; // Devanagari
  textRoman: string; // Roman transliteration
  expanded: string; // Full form with anuvṛtti
  type: SutraType;
  typeName: string; // Sanskrit name of type
  anuvrtti: AnuvrttiRef[];
  adhikara: string[];
  padaCcheda: PadaInfo[];
}

export type SutraType =
  | "samjna"
  | "paribhasha"
  | "vidhi"
  | "adhikara"
  | "atidesa"
  | "other";

export interface AnuvrttiRef {
  term: string; // The inherited term
  fromId: string; // Source sūtra id like "1.1.1"
  fromNumericId: string;
}

export interface PadaInfo {
  word: string;
  vibhakti?: string; // Case/number info
  sourceId?: string; // If from another sūtra
}

/** Commentary data */
export interface Commentary {
  kashika?: string;
  kashikaEnglish?: string; // Concise Zinsser-style translation
  vartika?: string[];
  englishShort?: string;
  englishFull?: string;
}

/** Commentary depth levels for learner-focused display */
export type CommentaryDepth = "simple" | "standard" | "advanced";

/** Layered commentary - each level builds on the previous */
export interface LayeredCommentary {
  /** One sentence, zero jargon - anyone can understand */
  simple: string;
  /** Full explanation with terms defined inline */
  standard: string;
  /** Technical details, cross-references, edge cases */
  advanced: string;
}

/** New commentary format supporting layered depth */
export interface LayeredSutraCommentary {
  /** Layered English commentary */
  en: LayeredCommentary;
  /** Original Kashika (Sanskrit) - optional */
  kashika?: string;
  /** Vartikas - optional */
  vartika?: string[];
}

/** Union type for commentary data (supports old and new formats) */
export type SutraCommentaryData = string | LayeredSutraCommentary;

/** Type guard to check if commentary is layered */
export function isLayeredCommentary(
  data: SutraCommentaryData,
): data is LayeredSutraCommentary {
  return typeof data === "object" && "en" in data;
}

/** Get commentary at specified depth, falling back as needed */
export function getCommentaryAtDepth(
  data: SutraCommentaryData,
  depth: CommentaryDepth,
): string {
  if (typeof data === "string") {
    // Old format - return as-is
    return data;
  }

  // Layered format - return requested depth
  return data.en[depth];
}

// ============================================================================
// Vocabulary and Reading Passage Types
// ============================================================================

/** Vocabulary frequency tier */
export type VocabularyFrequency = "high" | "medium" | "low";

/** Part of speech categories */
export type PartOfSpeech =
  | "m.noun"
  | "f.noun"
  | "n.noun"
  | "verb"
  | "adj"
  | "pronoun"
  | "particle"
  | "indecl";

/** A vocabulary entry in the master vocabulary list */
export interface VocabularyItem {
  id: string;
  stem: string; // Devanagari stem form
  stemRoman: string; // Roman transliteration
  meaning: string;
  partOfSpeech: PartOfSpeech;
  frequency: VocabularyFrequency;
  paradigm?: string; // Declension/conjugation pattern
  notes?: string;
}

/** Vocabulary with passage context (used in reading passages) */
export interface PassageVocabulary {
  wordId: string; // References VocabularyItem.id
  formInText: string; // The actual inflected form in the passage
  formRoman: string; // Roman transliteration of the form
  glossHint?: string; // Context-specific gloss if different from base meaning
}

/** Reading passage difficulty (1-5 scale) */
export type PassageDifficulty = 1 | 2 | 3 | 4 | 5;

/** A reading passage from classical Sanskrit literature */
export interface ReadingPassage {
  id: string;
  source: string; // "meghaduta", "ramayana", "pancatantra", etc.
  reference: string; // "1.1", "2.15-16", etc.
  title?: string; // Optional title for the passage
  sanskrit: string; // Devanagari text
  padaccheda?: string; // Word-by-word split
  transliteration?: string; // Roman transliteration
  translation: string; // English translation
  vocabulary: PassageVocabulary[]; // Vocabulary items in this passage
  grammarNotes?: string; // Notes on grammar features in the passage
  difficulty: PassageDifficulty;
  prerequisiteGrammar?: string[]; // Path IDs needed to understand this passage
  meterInfo?: string; // If verse, name of meter (e.g., "mandākrāntā")
}

/** User's vocabulary learning progress (stored in localStorage) */
export interface VocabularyProgress {
  wordId: string;
  timesEncountered: number;
  lastSeen: string; // ISO date string
  status: "new" | "learning" | "learned";
}

/** Source text metadata */
export interface TextSource {
  id: string;
  title: string; // "Meghadūta"
  titleSanskrit: string; // "मेघदूतम्"
  author?: string;
  authorSanskrit?: string;
  genre: "kavya" | "epic" | "fable" | "sutra" | "stotra" | "other";
  difficulty: PassageDifficulty; // Overall difficulty
  description: string;
}
