/**
 * Sanskrit grammatical terminology (samjna) definitions
 * Used for the jargon lookup sidebar in learning paths
 */

export interface Term {
  term: string;           // Devanagari
  termRoman: string;      // IAST transliteration
  meaning: string;        // English meaning
  sutraRef?: string;      // Defining sutra if applicable
  category: TermCategory;
  related?: string[];     // Related terms (by termRoman)
}

export type TermCategory =
  | 'samjna'      // Technical names
  | 'pratyahara'  // Sound groups
  | 'karaka'      // Semantic roles
  | 'vibhakti'    // Case/inflection
  | 'pratyaya'    // Suffixes
  | 'sandhi'      // Sound combination
  | 'general';    // General terms

export const terms: Term[] = [
  // Samjna - Technical names
  {
    term: 'संज्ञा',
    termRoman: 'saṃjñā',
    meaning: 'Technical term or name. Panini defines many samjnas to create a precise metalanguage.',
    category: 'samjna',
  },
  {
    term: 'वृद्धि',
    termRoman: 'vṛddhi',
    meaning: 'The "strengthened" vowel grade: ā, ai, au. Defined in 1.1.1.',
    sutraRef: '1.1.1',
    category: 'samjna',
    related: ['guṇa'],
  },
  {
    term: 'गुण',
    termRoman: 'guṇa',
    meaning: 'The "medium" vowel grade: a, e, o. Defined in 1.1.2.',
    sutraRef: '1.1.2',
    category: 'samjna',
    related: ['vṛddhi'],
  },
  {
    term: 'स्वर',
    termRoman: 'svara',
    meaning: 'Vowel. Defined as the pratyahara "ac" in 1.1.9.',
    sutraRef: '1.1.9',
    category: 'samjna',
    related: ['vyañjana', 'ac'],
  },
  {
    term: 'व्यञ्जन',
    termRoman: 'vyañjana',
    meaning: 'Consonant. Defined as the pratyahara "hal" in 1.1.10.',
    sutraRef: '1.1.10',
    category: 'samjna',
    related: ['svara', 'hal'],
  },
  {
    term: 'सवर्ण',
    termRoman: 'savarṇa',
    meaning: 'Homogeneous sounds - same place and effort of articulation.',
    sutraRef: '1.1.9',
    category: 'samjna',
  },
  {
    term: 'इत्',
    termRoman: 'it',
    meaning: 'Marker letter (anubandha) that indicates grammatical properties but is deleted.',
    sutraRef: '1.3.2',
    category: 'samjna',
    related: ['anubandha'],
  },
  {
    term: 'अनुबन्ध',
    termRoman: 'anubandha',
    meaning: 'Same as "it" - a marker letter attached to grammatical elements.',
    category: 'samjna',
    related: ['it'],
  },
  {
    term: 'लोप',
    termRoman: 'lopa',
    meaning: 'Deletion or elision. Markers undergo lopa (1.3.9).',
    sutraRef: '1.3.9',
    category: 'samjna',
  },
  {
    term: 'आदेश',
    termRoman: 'ādeśa',
    meaning: 'Substitution or replacement. One element replacing another.',
    category: 'samjna',
    related: ['sthānin'],
  },
  {
    term: 'स्थानिन्',
    termRoman: 'sthānin',
    meaning: 'The original element that gets replaced (by an ādeśa).',
    category: 'samjna',
    related: ['ādeśa'],
  },
  {
    term: 'प्रकृति',
    termRoman: 'prakṛti',
    meaning: 'Base or stem to which affixes are added.',
    category: 'samjna',
    related: ['pratyaya'],
  },
  {
    term: 'धातु',
    termRoman: 'dhātu',
    meaning: 'Verbal root. The base form of verbs listed in the Dhatupatha.',
    category: 'samjna',
    related: ['prakṛti', 'prātipadika'],
  },
  {
    term: 'प्रातिपदिक',
    termRoman: 'prātipadika',
    meaning: 'Nominal stem - a meaningful base that takes case endings.',
    category: 'samjna',
    related: ['dhātu'],
  },
  {
    term: 'पद',
    termRoman: 'pada',
    meaning: 'Word - a complete inflected form ending in sup or tiṅ.',
    category: 'samjna',
  },
  {
    term: 'संहिता',
    termRoman: 'saṃhitā',
    meaning: 'Close proximity of sounds - the domain where sandhi applies.',
    sutraRef: '1.4.109',
    category: 'samjna',
  },
  {
    term: 'अधिकार',
    termRoman: 'adhikāra',
    meaning: 'Governing rule whose scope extends over subsequent sutras.',
    category: 'samjna',
  },
  {
    term: 'अनुवृत्ति',
    termRoman: 'anuvṛtti',
    meaning: 'Continuation - when a term from a prior sutra carries forward.',
    category: 'samjna',
  },
  {
    term: 'परिभाषा',
    termRoman: 'paribhāṣā',
    meaning: 'Interpretive rule that governs how other rules are applied.',
    category: 'samjna',
  },
  {
    term: 'विधि',
    termRoman: 'vidhi',
    meaning: 'Operational rule that prescribes a grammatical operation.',
    category: 'samjna',
  },

  // Pratyahara
  {
    term: 'प्रत्याहार',
    termRoman: 'pratyāhāra',
    meaning: 'A shorthand notation for sound groups using the Shiva Sutras.',
    category: 'pratyahara',
  },
  {
    term: 'अच्',
    termRoman: 'ac',
    meaning: 'All vowels: a, i, u, ṛ, ḷ, e, o, ai, au.',
    category: 'pratyahara',
  },
  {
    term: 'हल्',
    termRoman: 'hal',
    meaning: 'All consonants.',
    category: 'pratyahara',
  },
  {
    term: 'अण्',
    termRoman: 'aṇ',
    meaning: 'Simple vowels: a, i, u.',
    category: 'pratyahara',
  },
  {
    term: 'इक्',
    termRoman: 'ik',
    meaning: 'The vowels i, u, ṛ, ḷ - those that become semivowels.',
    category: 'pratyahara',
    related: ['yaṇ'],
  },
  {
    term: 'यण्',
    termRoman: 'yaṇ',
    meaning: 'Semivowels: y, v, r, l.',
    category: 'pratyahara',
    related: ['ik'],
  },
  {
    term: 'एच्',
    termRoman: 'ec',
    meaning: 'Diphthongs: e, o, ai, au.',
    category: 'pratyahara',
  },

  // Karaka
  {
    term: 'कारक',
    termRoman: 'kāraka',
    meaning: 'Semantic role - the relation between a noun and the verbal action.',
    category: 'karaka',
  },
  {
    term: 'कर्तृ',
    termRoman: 'kartṛ',
    meaning: 'Agent - the independent doer of the action.',
    sutraRef: '1.4.54',
    category: 'karaka',
  },
  {
    term: 'कर्मन्',
    termRoman: 'karman',
    meaning: 'Object - what the agent most desires to attain through the action.',
    sutraRef: '1.4.49',
    category: 'karaka',
  },
  {
    term: 'करण',
    termRoman: 'karaṇa',
    meaning: 'Instrument - the most effective means of accomplishing the action.',
    sutraRef: '1.4.42',
    category: 'karaka',
  },
  {
    term: 'सम्प्रदान',
    termRoman: 'sampradāna',
    meaning: 'Recipient - the one for whom the action is intended.',
    sutraRef: '1.4.32',
    category: 'karaka',
  },
  {
    term: 'अपादान',
    termRoman: 'apādāna',
    meaning: 'Source - the fixed point from which movement occurs.',
    sutraRef: '1.4.24',
    category: 'karaka',
  },
  {
    term: 'अधिकरण',
    termRoman: 'adhikaraṇa',
    meaning: 'Locus - the location or support of the action.',
    sutraRef: '1.4.45',
    category: 'karaka',
  },

  // Vibhakti
  {
    term: 'विभक्ति',
    termRoman: 'vibhakti',
    meaning: 'Inflectional ending - case endings (sup) or verb endings (tiṅ).',
    sutraRef: '1.4.104',
    category: 'vibhakti',
  },
  {
    term: 'प्रथमा',
    termRoman: 'prathamā',
    meaning: 'First case (nominative) - used for the subject or naming.',
    category: 'vibhakti',
  },
  {
    term: 'द्वितीया',
    termRoman: 'dvitīyā',
    meaning: 'Second case (accusative) - used for the direct object.',
    category: 'vibhakti',
  },
  {
    term: 'तृतीया',
    termRoman: 'tṛtīyā',
    meaning: 'Third case (instrumental) - used for the instrument or agent in passive.',
    category: 'vibhakti',
  },
  {
    term: 'चतुर्थी',
    termRoman: 'caturthī',
    meaning: 'Fourth case (dative) - used for the recipient or purpose.',
    category: 'vibhakti',
  },
  {
    term: 'पञ्चमी',
    termRoman: 'pañcamī',
    meaning: 'Fifth case (ablative) - used for source or comparison.',
    category: 'vibhakti',
  },
  {
    term: 'षष्ठी',
    termRoman: 'ṣaṣṭhī',
    meaning: 'Sixth case (genitive) - used for possession or relation.',
    category: 'vibhakti',
  },
  {
    term: 'सप्तमी',
    termRoman: 'saptamī',
    meaning: 'Seventh case (locative) - used for location in space or time.',
    category: 'vibhakti',
  },

  // Pratyaya
  {
    term: 'प्रत्यय',
    termRoman: 'pratyaya',
    meaning: 'Suffix or affix added after a base.',
    sutraRef: '3.1.1',
    category: 'pratyaya',
  },
  {
    term: 'सुप्',
    termRoman: 'sup',
    meaning: 'Nominal case endings (21 total: 7 cases × 3 numbers).',
    category: 'pratyaya',
  },
  {
    term: 'तिङ्',
    termRoman: 'tiṅ',
    meaning: 'Verbal personal endings (18 total: 3 persons × 3 numbers × 2 padas).',
    category: 'pratyaya',
  },
  {
    term: 'कृत्',
    termRoman: 'kṛt',
    meaning: 'Primary suffix added directly to a verbal root.',
    category: 'pratyaya',
  },
  {
    term: 'तद्धित',
    termRoman: 'taddhita',
    meaning: 'Secondary suffix added to a nominal stem.',
    category: 'pratyaya',
  },

  // Sandhi
  {
    term: 'सन्धि',
    termRoman: 'sandhi',
    meaning: 'Junction - sound changes when morphemes or words combine.',
    category: 'sandhi',
  },
  {
    term: 'दीर्घ',
    termRoman: 'dīrgha',
    meaning: 'Long (vowel) - the lengthened version of a vowel.',
    category: 'sandhi',
  },
  {
    term: 'ह्रस्व',
    termRoman: 'hrasva',
    meaning: 'Short (vowel) - the basic short vowel.',
    category: 'sandhi',
  },
  {
    term: 'प्लुत',
    termRoman: 'pluta',
    meaning: 'Prolated (vowel) - extra-long, used in calling.',
    category: 'sandhi',
  },

  // General
  {
    term: 'उच्चारण',
    termRoman: 'uccāraṇa',
    meaning: 'Pronunciation or articulation.',
    category: 'general',
  },
  {
    term: 'वर्ण',
    termRoman: 'varṇa',
    meaning: 'Sound or phoneme - the basic unit of speech.',
    category: 'general',
  },
  {
    term: 'अक्षर',
    termRoman: 'akṣara',
    meaning: 'Syllable - a vowel with optional consonants.',
    category: 'general',
  },
];

// Build search index
const termIndex = new Map<string, Term>();
for (const t of terms) {
  termIndex.set(t.term, t);
  termIndex.set(t.termRoman.toLowerCase(), t);
  // Also index without diacritics for easier searching
  termIndex.set(t.termRoman.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''), t);
}

/**
 * Look up a term by Devanagari or Roman (with or without diacritics)
 */
export function lookupTerm(query: string): Term | undefined {
  const normalized = query.toLowerCase().trim();
  return termIndex.get(normalized) || termIndex.get(query.trim());
}

/**
 * Search terms by partial match
 */
export function searchTerms(query: string): Term[] {
  if (!query.trim()) return [];
  const normalized = query.toLowerCase().trim();
  const noDiacritics = normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return terms.filter(t =>
    t.term.includes(query) ||
    t.termRoman.toLowerCase().includes(normalized) ||
    t.termRoman.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(noDiacritics) ||
    t.meaning.toLowerCase().includes(normalized)
  );
}

/**
 * Get terms by category
 */
export function getTermsByCategory(category: TermCategory): Term[] {
  return terms.filter(t => t.category === category);
}

/**
 * Get all categories with counts
 */
export function getCategories(): { category: TermCategory; count: number; label: string }[] {
  const categoryLabels: Record<TermCategory, string> = {
    samjna: 'Technical Terms',
    pratyahara: 'Sound Groups',
    karaka: 'Semantic Roles',
    vibhakti: 'Case System',
    pratyaya: 'Suffixes',
    sandhi: 'Sound Changes',
    general: 'General',
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
