/**
 * Mapping from learning path IDs to key sūtras covered in each path.
 * Used to:
 * 1. Auto-suggest sūtra refs for passages based on prerequisiteGrammar
 * 2. Show "Learn more" links from sūtra pages to relevant paths
 * 3. Build the grammar foundation for reading track
 */

export interface PathSutraMapping {
  /** Key sūtras taught in this path */
  sutras: string[];
  /** Brief description of what aspect of the sūtra is covered */
  focus?: string;
}

/**
 * Maps learning path IDs to the key sūtras they cover.
 * Not exhaustive - just the most important/representative sūtras.
 */
export const pathKeySutras: Record<string, PathSutraMapping> = {
  // ==========================================================================
  // VERB PATHS (Tiṅanta)
  // ==========================================================================

  'tinganta-lat': {
    sutras: ['3.2.123', '3.4.77', '3.4.78'],
    focus: 'Present tense (laṭ lakāra)'
  },

  'tinganta-lot': {
    sutras: ['3.3.162', '3.4.85', '3.4.86'],
    focus: 'Imperative (loṭ lakāra)'
  },

  'tinganta-lang': {
    sutras: ['3.2.111', '3.4.111'],
    focus: 'Imperfect (laṅ lakāra)'
  },

  'tinganta-vidhiling': {
    sutras: ['3.3.161', '3.4.116'],
    focus: 'Optative (vidhi-liṅ)'
  },

  'tinganta-lrt': {
    sutras: ['3.3.13', '3.4.77'],
    focus: 'Simple future (lṛṭ lakāra)'
  },

  'tinganta-lut': {
    sutras: ['3.3.15', '3.1.33'],
    focus: 'Periphrastic future (luṭ lakāra)'
  },

  'tinganta-lit': {
    sutras: ['3.2.115', '3.4.82'],
    focus: 'Perfect (liṭ lakāra)'
  },

  'tinganta-lung': {
    sutras: ['3.2.110', '3.4.100'],
    focus: 'Aorist (luṅ lakāra)'
  },

  'tinganta-ashirling': {
    sutras: ['3.3.173', '3.4.116'],
    focus: 'Benedictive (āśīr-liṅ)'
  },

  'tinganta-conditional': {
    sutras: ['3.3.139'],
    focus: 'Conditional (lṛṅ lakāra)'
  },

  // ==========================================================================
  // PARTICIPLE PATHS (Kṛdanta)
  // ==========================================================================

  'krt-ktva': {
    sutras: ['3.4.21', '7.2.56'],
    focus: 'Absolutive/gerund (-त्वा)'
  },

  'krt-tumun': {
    sutras: ['3.3.10', '3.4.65'],
    focus: 'Infinitive (-तुम्)'
  },

  'krt-shatr-shanac': {
    sutras: ['3.2.124', '3.2.128'],
    focus: 'Present participles (शतृ, शानच्)'
  },

  'krt-kta-ktavatu': {
    sutras: ['3.4.72', '3.2.102'],
    focus: 'Past participles (क्त, क्तवतु)'
  },

  'krt-tavya-aniya': {
    sutras: ['3.1.96', '3.1.124'],
    focus: 'Gerundives (तव्य, अनीय)'
  },

  // ==========================================================================
  // TADDHITA PATHS
  // ==========================================================================

  'taddhita-matup': {
    sutras: ['5.2.94'],
    focus: 'Possessive suffix (मतुप्)'
  },

  'taddhita-tva-tal': {
    sutras: ['5.1.119'],
    focus: 'Abstract noun suffixes (त्व, तल्)'
  },

  'taddhita-an-ika': {
    sutras: ['4.3.120', '4.4.35'],
    focus: 'Derivative suffixes (अण्, इक)'
  },

  // ==========================================================================
  // NOUN PATHS (Subanta)
  // ==========================================================================

  'subanta-pratipadika': {
    sutras: ['1.2.45', '1.2.46'],
    focus: 'Nominal stem basics'
  },

  'subanta-a-stems': {
    sutras: ['7.1.9', '7.1.17'],
    focus: 'a-stem declension'
  },

  'subanta-aa-stems': {
    sutras: ['7.1.18', '7.3.105'],
    focus: 'ā-stem declension'
  },

  'subanta-i-u-stems': {
    sutras: ['7.3.111', '7.3.117'],
    focus: 'i/u-stem declension'
  },

  'subanta-consonant-stems': {
    sutras: ['7.1.83', '7.1.89'],
    focus: 'Consonant-stem declension'
  },

  // ==========================================================================
  // CASE USAGE (Vibhakti / Kāraka)
  // ==========================================================================

  'vibhakti-instrumental': {
    sutras: ['2.3.18', '2.3.19', '2.3.21'],
    focus: 'Instrumental case usage'
  },

  'vibhakti-dative': {
    sutras: ['2.3.13', '2.3.14'],
    focus: 'Dative case usage'
  },

  'vibhakti-ablative': {
    sutras: ['2.3.28', '2.3.29'],
    focus: 'Ablative case usage'
  },

  'vibhakti-genitive': {
    sutras: ['2.3.50', '2.3.51'],
    focus: 'Genitive case usage'
  },

  'vibhakti-locative': {
    sutras: ['2.3.36', '2.3.37'],
    focus: 'Locative case usage'
  },

  'karaka-intro': {
    sutras: ['1.4.23', '1.4.24', '1.4.32', '1.4.42', '1.4.49', '1.4.54'],
    focus: 'Kāraka (semantic roles)'
  },

  // ==========================================================================
  // COMPOUND PATHS (Samāsa)
  // ==========================================================================

  'samasa-intro': {
    sutras: ['2.1.3', '2.1.4'],
    focus: 'Compound basics'
  },

  'compounds-tatpurusha': {
    sutras: ['2.1.22', '2.1.23', '2.1.30'],
    focus: 'Tatpuruṣa compounds'
  },

  'compounds-bahuvrihi': {
    sutras: ['2.2.24', '2.2.35'],
    focus: 'Bahuvrīhi compounds'
  },

  'compounds-dvandva': {
    sutras: ['2.2.29'],
    focus: 'Dvandva compounds'
  },

  'compounds-avyayibhava': {
    sutras: ['2.1.5', '2.1.6'],
    focus: 'Avyayībhāva compounds'
  },

  // ==========================================================================
  // SANDHI PATHS
  // ==========================================================================

  'sandhi-vowel': {
    sutras: ['6.1.77', '6.1.87', '6.1.101', '6.1.109'],
    focus: 'Vowel sandhi'
  },

  'sandhi-visarga': {
    sutras: ['8.3.15', '8.3.17', '8.3.22', '8.3.34'],
    focus: 'Visarga sandhi'
  },

  'sandhi-consonant': {
    sutras: ['8.4.40', '8.4.53', '8.4.55'],
    focus: 'Consonant sandhi'
  },

  // ==========================================================================
  // READING TRACK PATHS
  // ==========================================================================

  'reading-01-alphabet': {
    sutras: ['1.1.9', '1.1.10'],
    focus: 'Sound system basics'
  },

  'reading-02-simple-sentences': {
    sutras: ['3.2.123', '2.3.1'],
    focus: 'Basic sentence structure'
  },

  'reading-10-past-tense': {
    sutras: ['3.2.111', '3.2.115'],
    focus: 'Past tense forms'
  },

  'reading-14-vowel-sandhi': {
    sutras: ['6.1.77', '6.1.87'],
    focus: 'Common vowel sandhi rules'
  },

  'reading-16-compounds': {
    sutras: ['2.1.22', '2.2.24'],
    focus: 'Reading compounds'
  },

  'reading-18-participles': {
    sutras: ['3.2.124', '3.4.72'],
    focus: 'Recognizing participles'
  },

  'reading-19-visarga-sandhi': {
    sutras: ['8.3.15', '8.3.34'],
    focus: 'Visarga sandhi rules'
  }
};

/**
 * Get all sūtra IDs for a list of prerequisite path IDs.
 */
export function getSutrasForPaths(pathIds: string[]): string[] {
  const sutras = new Set<string>();
  for (const pathId of pathIds) {
    const mapping = pathKeySutras[pathId];
    if (mapping) {
      for (const sutra of mapping.sutras) {
        sutras.add(sutra);
      }
    }
  }
  return Array.from(sutras);
}

/**
 * Get all paths that cover a specific sūtra.
 */
export function getPathsForSutra(sutraId: string): string[] {
  const paths: string[] = [];
  for (const [pathId, mapping] of Object.entries(pathKeySutras)) {
    if (mapping.sutras.includes(sutraId)) {
      paths.push(pathId);
    }
  }
  return paths;
}

/**
 * Get path info including focus description.
 */
export function getPathInfo(pathId: string): PathSutraMapping | undefined {
  return pathKeySutras[pathId];
}
