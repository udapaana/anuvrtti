/**
 * Learning Path Types
 *
 * Content is now loaded dynamically from static/content/paths/*.md
 * This file only exports type definitions.
 */

export type Track = "reading" | "grammar";

export type PathCategory =
  | "foundation"
  | "tinganta"
  | "subanta"
  | "taddhita"
  | "kridanta"
  | "sandhi"
  | "karaka"
  | "samasa";

export interface QuizOption {
  text: string;
  correct?: boolean;
}

export interface QuizData {
  question: string;
  options?: QuizOption[];
  answer?: string;
  explanation?: string;
}

export interface LearningStep {
  sutraId: string;
  title: string;
  commentary?: string;
  keyTerms?: string[];
  /** Optional kashika Sanskrit text */
  kashika?: string;
  /** Optional kashika English translation */
  kashikaTranslation?: string;
  /** Quiz data for quiz-type steps */
  quiz?: QuizData;
}

export interface LearningPath {
  id: string;
  title: string;
  titleSanskrit: string;
  /** Short label for tree node display (Sanskrit) */
  label: string;
  /** Track this path belongs to: reading (fluency) or grammar (systematic) */
  track: Track;
  /** Category for color-coding in tree view */
  category: PathCategory;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  prerequisites: string[];
  steps: LearningStep[];
}
