/**
 * Sanskrit grammatical terminology (samjna) definitions
 * Used for the jargon lookup sidebar in learning paths
 *
 * DATA SOURCE: static/data/jargon.toml — edit there, not here.
 */

import { parse } from 'smol-toml';
import rawToml from '../../static/data/jargon.toml?raw';

export interface Term {
  term: string;       // Devanagari
  termRoman: string;  // IAST transliteration
  meaning: string;    // English (may contain @deva[...], @[...], @ref[...] markup)
  sutraRef?: string;  // Defining sūtra if applicable
  category: TermCategory;
  related?: string[]; // Related terms (by termRoman)
}

export type TermCategory =
  | "samjna"      // Technical names
  | "pratyahara"  // Sound groups
  | "karaka"      // Semantic roles
  | "vibhakti"    // Case/inflection
  | "pratyaya"    // Suffixes
  | "sandhi"      // Sound combination
  | "lakara"      // Tenses and moods
  | "gana"        // Verb classes
  | "samasa"      // Compounds
  | "general";    // General terms

const data = parse(rawToml) as unknown as { terms: Term[] };
export const terms: Term[] = data.terms;

// Build search index
const termIndex = new Map<string, Term>();
for (const t of terms) {
  termIndex.set(t.term, t);
  termIndex.set(t.termRoman.toLowerCase(), t);
  // Also index without diacritics for easier searching
  termIndex.set(
    t.termRoman
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""),
    t,
  );
}

/**
 * Common Sanskrit vibhakti endings to strip when looking up stems.
 * Ordered from longest to shortest to avoid partial matches.
 */
const VIBHAKTI_ENDINGS = [
  // Longer endings first (masculine/neuter a-stem, feminine ā-stem)
  // an-stem nouns (आत्मन्, ऊष्मन्, राजन्, etc.)
  "ाणः", // nominative plural an-stem with ṇatva (ऊष्माणः from ऊष्मन्)
  "ानः", // nominative plural an-stem (आत्मानः from आत्मन्)
  // Neuter plural (an-stem, i-stem, u-stem)
  "ानि", // neuter plural nominative/accusative (फलानि, वनानि)
  "ीनि", // neuter plural for ī-stems
  "ूनि", // neuter plural for ū-stems
  // Common masculine/feminine plural
  "ाः", // masculine nominative plural (देवाः, नराः) - note: includes preceding आ
  // Long compound endings
  "आभ्याम्",
  "एभ्यः",
  "आनाम्",
  "ीनाम्", // genitive plural for ī-stems (नदीनाम्)
  "आयाः",
  "आयाम्",
  "एषु",
  "ईषु", // locative plural for ī-stems
  "योः",
  "आयै",
  "आसु",
  "ईसु", // locative plural variant
  "अया",
  "ैः",
  "ीभिः", // instrumental plural for ī-stems
  "ान्",
  "ीन्", // accusative plural for ī-stems
  "ेन",
  "आत्",
  "स्य",
  "आः",
  "आय",
  "आम्",
  "ौ",
  "ः",
  "म्",
  "े",
  "ो",
  "ि",
  "ु",
  "ी",
  "ू",
  "ै",
  "ं",
];

/**
 * Try to find the stem by stripping vibhakti endings
 */
function tryStripEndings(word: string): string[] {
  const candidates: string[] = [];
  for (const ending of VIBHAKTI_ENDINGS) {
    if (word.endsWith(ending)) {
      const stem = word.slice(0, -ending.length);
      if (stem.length > 0) {
        candidates.push(stem);
        candidates.push(stem + "अ");
        candidates.push(stem + "आ");
        candidates.push(stem + "न्");
        if (stem.endsWith("म")) {
          candidates.push(stem + "न्");
        }
      }
    }
  }
  return candidates;
}

/**
 * Look up a term by Devanagari or Roman (with or without diacritics).
 * Also tries to find the stem by stripping common vibhakti endings.
 */
export function lookupTerm(query: string): Term | undefined {
  const normalized = query.toLowerCase().trim();
  const trimmed = query.trim();

  let result = termIndex.get(normalized) || termIndex.get(trimmed);
  if (result) return result;

  const candidates = tryStripEndings(trimmed);
  for (const candidate of candidates) {
    result = termIndex.get(candidate);
    if (result) return result;
  }

  return undefined;
}

/**
 * Search terms by partial match
 */
export function searchTerms(query: string): Term[] {
  if (!query.trim()) return [];
  const normalized = query.toLowerCase().trim();
  const noDiacritics = normalized
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  return terms.filter(
    (t) =>
      t.term.includes(query) ||
      t.termRoman.toLowerCase().includes(normalized) ||
      t.termRoman
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(noDiacritics) ||
      t.meaning.toLowerCase().includes(normalized),
  );
}

/**
 * Get terms by category
 */
export function getTermsByCategory(category: TermCategory): Term[] {
  return terms.filter((t) => t.category === category);
}

/**
 * Get all categories with counts
 */
export function getCategories(): {
  category: TermCategory;
  count: number;
  label: string;
}[] {
  const categoryLabels: Record<TermCategory, string> = {
    samjna: "Technical Terms",
    pratyahara: "Sound Groups",
    karaka: "Semantic Roles",
    vibhakti: "Case System",
    pratyaya: "Suffixes",
    sandhi: "Sound Changes",
    lakara: "Tenses & Moods",
    gana: "Verb Classes",
    samasa: "Compounds",
    general: "General",
  };

  const counts = new Map<TermCategory, number>();
  for (const t of terms) {
    counts.set(t.category, (counts.get(t.category) || 0) + 1);
  }

  return Object.entries(categoryLabels).map(([cat, label]) => ({
    category: cat as TermCategory,
    count: counts.get(cat as TermCategory) || 0,
    label,
  }));
}
