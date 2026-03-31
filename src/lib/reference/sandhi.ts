/**
 * Sandhi Reference Data
 * Data sourced from Cambridge Sanskrit reference materials; presentation our own.
 */

import type { ReferenceTable, ReferenceSection } from './types';

const s = (text: string, tooltip?: string) => ({ text, sanskrit: true, tooltip });
const t = (text: string, tooltip?: string) => ({ text, sanskrit: false, tooltip });

/**
 * Vowel sandhi — savarna dirgha (same-class vowels merge to long)
 */
export const savarnadirgha: ReferenceTable = {
  id: 'savarna-dirgha',
  title: 'Savarna Dirgha',
  titleSanskrit: 'सवर्णदीर्घसन्धिः',
  description: 'Same-class vowels merge to long — a/ā + a/ā → ā etc.',
  headers: [s('अन्तस्वर'), t('+'), s('आदिस्वर'), t('→'), s('फलम्'), s('उदाहरणम्')],
  rows: [
    [s('अ / आ'), t('+'), s('अ / आ'), t('→'), s('आ'), s('राम + अत्र = रामात्र')],
    [s('इ / ई'), t('+'), s('इ / ई'), t('→'), s('ई'), s('कवि + इह = कवीह')],
    [s('उ / ऊ'), t('+'), s('उ / ऊ'), t('→'), s('ऊ'), s('गुरु + उक्तम् = गुरूक्तम्')],
    [s('ऋ / ॠ'), t('+'), s('ऋ / ॠ'), t('→'), s('ॠ'), s('पितृ + ऋणम् = पितॄणम्')],
  ],
};

/**
 * Vowel sandhi — guna (अ/आ + इक् → गुण)
 */
export const gunasandhi: ReferenceTable = {
  id: 'guna-sandhi',
  title: 'Guṇa Sandhi',
  titleSanskrit: 'गुणसन्धिः',
  description: 'a/ā + ik vowel → guṇa — a+i→e, a+u→o, a+ṛ→ar',
  headers: [s('अन्तस्वर'), t('+'), s('आदिस्वर'), t('→'), s('फलम्'), s('उदाहरणम्')],
  rows: [
    [s('अ / आ'), t('+'), s('इ / ई'), t('→'), s('ए'), s('देव + इन्द्र = देवेन्द्र')],
    [s('अ / आ'), t('+'), s('उ / ऊ'), t('→'), s('ओ'), s('सूर्य + उदय = सूर्योदय')],
    [s('अ / आ'), t('+'), s('ऋ / ॠ'), t('→'), s('अर्'), s('महा + ऋषि = महर्षि')],
    [s('अ / आ'), t('+'), s('ऌ'),     t('→'), s('अल्'), t('(विरल)')],
  ],
};

/**
 * Vowel sandhi — vrddhi (अ/आ + ए/ओ/ऐ/औ → वृद्धि)
 */
export const vrddhisandhi: ReferenceTable = {
  id: 'vrddhi-sandhi',
  title: 'Vṛddhi Sandhi',
  titleSanskrit: 'वृद्धिसन्धिः',
  description: 'a/ā + e/ai → ai; a/ā + o/au → au',
  headers: [s('अन्तस्वर'), t('+'), s('आदिस्वर'), t('→'), s('फलम्'), s('उदाहरणम्')],
  rows: [
    [s('अ / आ'), t('+'), s('ए / ऐ'), t('→'), s('ऐ'), s('एक + एक = एकैक')],
    [s('अ / आ'), t('+'), s('ओ / औ'), t('→'), s('औ'), s('वन + औषधि = वनौषधि')],
  ],
};

/**
 * Vowel sandhi — yan (इक् + different अच् → यण्)
 */
export const yansandhi: ReferenceTable = {
  id: 'yan-sandhi',
  title: 'Yaṇ Sandhi',
  titleSanskrit: 'यण्सन्धिः',
  description: 'ik vowel before a different vowel → semivowel (y/v/r/l)',
  headers: [s('अन्तस्वर'), t('+'), s('आदिस्वर'), t('→'), s('फलम्'), s('उदाहरणम्')],
  rows: [
    [s('इ / ई'), t('+'), s('अन्य अच्'), t('→'), s('य्'), s('इति + अत्र = इत्यत्र')],
    [s('उ / ऊ'), t('+'), s('अन्य अच्'), t('→'), s('व्'), s('मधु + अरि = मध्वरि')],
    [s('ऋ / ॠ'), t('+'), s('अन्य अच्'), t('→'), s('र्'), s('पितृ + आज्ञा = पित्राज्ञा')],
    [s('ऌ'),    t('+'), s('अन्य अच्'), t('→'), s('ल्'), t('(विरल)')],
  ],
};

/**
 * Vowel sandhi full matrix (from Cambridge PDF)
 * Rows = initial vowel, Columns = final vowel
 */
export const vowelMatrix: ReferenceTable = {
  id: 'vowel-matrix',
  title: 'Vowel Sandhi Matrix',
  titleSanskrit: 'अच्सन्धि-सारणी',
  description: 'Full matrix — final vowel (columns) × initial vowel (rows). a/ā behave identically here.',
  headers: [
    t('आदि ↓ / अन्त →'),
    s('अ/आ'), s('इ/ई'), s('उ/ऊ'), s('ऋ'), s('ए'), s('ऐ'), s('ओ'), s('औ'),
  ],
  rows: [
    [s('अ/आ →'),  s('आ'),   s('या'),   s('वा'),   s('रा'),  s('ए ऽ'), s('आ'),   s('ओ ऽ'), s('आवा')],
    [s('इ/ई →'),  s('या'),  s('ई'),    s('वी'),   s('री'),  s('ए ऽ'), s('आई'),  s('ओ ऽ'), s('आवी')],
    [s('उ/ऊ →'),  s('यू'),  s('वु'),   s('ऊ'),    s('रू'),  s('ए ऽ'), s('आऊ'),  s('ओ ऽ'), s('आवू')],
    [s('ऋ →'),    s('यृ'),  s('वृ'),   s('रृ'),   s('ॠ'),   s('ए ऽ'), s('आृ'),  s('ओ ऽ'), s('आवृ')],
    [s('ए →'),    s('ए'),   s('यु'),   s('ओ'),    s('ये'),  s('ए'),   s('ऐ'),   s('ओ'),   s('औ')],
    [s('ऐ →'),    s('ऐ'),   s('यै'),   s('वै'),   s('रै'),  s('ऐ'),   s('ऐ'),   s('ऐ'),   s('ऐ')],
    [s('ओ →'),    s('ओ'),   s('यो'),   s('वो'),   s('रो'),  s('ओ'),   s('आओ'),  s('ओ'),   s('आवो')],
    [s('औ →'),    s('औ'),   s('यौ'),   s('वौ'),   s('रौ'),  s('औ'),   s('आऔ'),  s('औ'),   s('आवौ')],
  ],
  notes: [
    'e/o before initial a: the a is elided → avagraha ऽ. Ex: vane + asti = vane \'sti.',
    'Complex vowels (e, ai, o, au) drop their second element before a following vowel.',
  ],
};

/**
 * Visarga sandhi — summary table
 */
export const visargaSummary: ReferenceTable = {
  id: 'visarga-summary',
  title: 'Visarga Sandhi Summary',
  titleSanskrit: 'विसर्गसन्धिः',
  description: 'Final visarga varies by context of the following sound',
  headers: [s('अन्तम्'), s('a) घोषे'), s('b) अघोषे'), s('c) स्पर्शे (तालव्य/मूर्धन्य/दन्त्य)')],
  rows: [
    [s('ः'),   s('र्'),    s('ः'),    s('तालव्य → श् · मूर्धन्य → ष् · दन्त्य → स्')],
    [s('आः'),  s('आ'),     s('ः'),    s('आश् / आष् / आस्')],
    [s('अः'),  s('ओ / अ'), s('ः'),    s('अश् / अष् / अस्')],
  ],
  notes: [
    'Exception 1: aḥ + a → o\' (avagraha). Ex: naraḥ + asti = naro\'sti.',
    'Exception 2: iḥ/uḥ + r → ī/ū r. Ex: guruḥ + ramate = gurū ramate.',
    'Exception 3: Original final -r stays as -r before all initial voiced sounds except r-. Ex: punar atra.',
  ],
};

/**
 * Visarga before vowels
 */
export const visargaVowel: ReferenceTable = {
  id: 'visarga-vowel',
  title: 'Visarga + Vowel',
  titleSanskrit: 'विसर्गः + स्वरः',
  headers: [s('प्रसङ्गः'), s('नियमः'), s('उदाहरणम्')],
  rows: [
    [s('अः + अ'), s('→ ओऽ (अवग्रहः)'),       s('नरः + अस्ति = नरोऽस्ति')],
    [s('अः + अन्य स्वर'), s('→ ओ'),           s('रामः + इति = रामो इति')],
    [s('आः + स्वर'), s('ः लुप्यते'),          s('देवाः + इह = देवा इह')],
    [s('अन्यः + स्वर'), s('→ र्'),            s('गुरुः + अत्र = गुरुरत्र')],
  ],
};

/**
 * Visarga before consonants
 */
export const visargaConsonant: ReferenceTable = {
  id: 'visarga-consonant',
  title: 'Visarga + Consonant',
  titleSanskrit: 'विसर्गः + व्यञ्जनम्',
  headers: [s('आदिव्यञ्जन'), s('नियमः'), s('उदाहरणम्')],
  rows: [
    [s('क / ख / प / फ'), s('ः — अपरिवर्तितः'),  s('रामः करोति')],
    [s('च / छ'),         s('ः → श्'),            s('रामः + चरति = रामश्चरति')],
    [s('ट / ठ'),         s('ः → ष्'),            s('रामष्टीकते')],
    [s('त / थ'),         s('ः → स्'),            s('रामः + तत्र = रामस्तत्र')],
    [s('श'),             s('ः → श् (संनिवेशः)'), s('रामश्शेते')],
    [s('घोषव्यञ्जन'),   s('ः → र् / ओ'),        s('रामः + गच्छति = रामो गच्छति')],
  ],
};

/**
 * Consonant sandhi — final consonant assimilation grid
 * Rows = initial sound of following word, Columns = final consonant of preceding word
 */
export const consonantGrid: ReferenceTable = {
  id: 'consonant-grid',
  title: 'Consonant Sandhi Matrix',
  titleSanskrit: 'हल्सन्धिः',
  description: 'Final consonant (columns) × initial consonant (rows). Voiced initials produce voiced finals.',
  headers: [
    t('आदि ↓ / अन्त →'),
    s('क्'), s('ट्'), s('त्'), s('प्'), s('ङ्'), s('न्'), s('म्'),
  ],
  rows: [
    [s('विराम / शून्य'),   s('क्'), s('ट्'), s('त्'), s('प्'), s('ङ्'), s('न्'), s('म्')],
    [s('स्वर / घोषः'),    s('ग्'), s('ड्'), s('द्'), s('ब्'), s('ङ्'), s('न्'), s('म्')],
    [s('क् / ख्'),         s('क्'), s('ट्'), s('त्'), s('प्'), s('ङ्'), s('म्'), s('म्')],
    [s('ग् / घ्'),         s('ग्'), s('ड्'), s('द्'), s('ब्'), s('ङ्'), s('न्'), s('म्')],
    [s('च् / छ्'),         s('क्'), s('ट्'), s('च्'), s('प्'), s('ङ्'), s('ंश्'), s('म्')],
    [s('ज् / झ्'),         s('ग्'), s('ड्'), s('ज्'), s('ब्'), s('ङ्'), s('ञ्'), s('म्')],
    [s('ट् / ठ्'),         s('क्'), s('ट्'), s('ट्'), s('प्'), s('ङ्'), s('ंष्'), s('म्')],
    [s('ड् / ढ्'),         s('ग्'), s('ड्'), s('ड्'), s('ब्'), s('ङ्'), s('ण्'), s('म्')],
    [s('त् / थ्'),         s('क्'), s('ट्'), s('त्'), s('प्'), s('ङ्'), s('ंस्'), s('म्')],
    [s('द् / ध्'),         s('ग्'), s('ड्'), s('द्'), s('ब्'), s('ङ्'), s('न्'), s('म्')],
    [s('न् / म्'),         s('ङ्'), s('ण्'), s('न्'), s('म्'), s('ङ्'), s('न्'), s('म्')],
    [s('श्'),              s('क्'), s('ट्'), s('च् (छ्)'), s('प्'), s('ङ्'), s('ञ् (श्/छ्)'), s('म्')],
    [s('ष् / स्'),         s('क्'), s('ट्'), s('त्'), s('प्'), s('ङ्'), s('न्'), s('म्')],
    [s('ह्'),              s('ग् (घ्)'), s('ड् (ढ्)'), s('द् (ध्)'), s('ब् (भ्)'), s('ङ्'), s('न्'), s('म्')],
  ],
  notes: [
    'Forms in brackets show change to the initial sound of the following word (e.g. agacchat hi → agacchad dhi).',
    'Before ch/ṭh/th: n turns to anusvāra ṃ, and an s-sound is inserted (palatal श्, retroflex ष्, dental स्). Ex: kasmin cit → kasmiṃś cit.',
    'Before a nasal: if a short vowel precedes, that vowel is lengthened. Ex: buddhiḥ rakṣati → buddhī rakṣati.',
  ],
};

/**
 * Consonant voicing (jhalam jash)
 */
export const consonantVoicing: ReferenceTable = {
  id: 'consonant-voicing',
  title: 'Jhalaṃ Jaś Jhaśi',
  titleSanskrit: 'झलां जश् झशि',
  description: 'Final stop → voiced (jaś) before a voiced consonant',
  headers: [s('अन्तम्'), t('→'), s('घोषे घोषः')],
  rows: [
    [s('क्'), t('→'), s('ग्')],
    [s('च्'), t('→'), s('ज्')],
    [s('ट्'), t('→'), s('ड्')],
    [s('त्'), t('→'), s('द्')],
    [s('प्'), t('→'), s('ब्')],
  ],
  notes: ['Ex: vāk + īśa = vāgīśa · tat + eva = tadeva'],
};

/**
 * Consonant nasalization
 */
export const consonantNasal: ReferenceTable = {
  id: 'consonant-nasal',
  title: 'Nasal Assimilation',
  titleSanskrit: 'अनुनासिकसन्धिः',
  description: 'Final stop → class nasal before a nasal consonant',
  headers: [s('अन्तम्'), t('→'), s('नासिक्ये')],
  rows: [
    [s('क् / ग्'), t('→'), s('ङ्')],
    [s('च् / ज्'), t('→'), s('ञ्')],
    [s('ट् / ड्'), t('→'), s('ण्')],
    [s('त् / द्'), t('→'), s('न्')],
    [s('प् / ब्'), t('→'), s('म्')],
  ],
  notes: ['Ex: vāk + maya = vāṅmaya · tat + nāma = tannāma'],
};

/**
 * Internal sandhi — key rules
 */
export const internalSandhi: ReferenceTable = {
  id: 'internal-sandhi',
  title: 'Internal Sandhi',
  titleSanskrit: 'आभ्यन्तरसन्धिः',
  description: 'Key rules for sandhi within a word (stem + suffix)',
  headers: [s('नियमः'), s('उदाहरणम्')],
  rows: [
    [s('स् → ष् — रुकि (र्, उ, क्, इ-वर्ग) पश्चात्'),          s('अग्नि + सु = अग्निषु')],
    [s('न् → ण् — ऋ/र्/ष् पश्चात् (णत्वम्)'),                  s('नर + भिः = नरैः', 'ṇatva in compounds')],
    [s('अन्त -स्/-र् → -र् घोषात् पूर्वम्'),                    s('मनस् + ए = मनसे')],
    [s('त् + श् → च्छ्'),                                        s('तत् + शिव = तच्छिव')],
    [s('त् + ह् → द्ध्'),                                        s('तत् + हि = तद्धि')],
    [s('न् + तालव्य → ञ् / न् + मूर्धन्य → ण्'),                s('सन् + जय = संजय')],
  ],
};

/**
 * Sandhi reference sections
 */
export const sandhiSections: ReferenceSection[] = [
  {
    id: 'vowel',
    title: 'Vowel Sandhi',
    titleSanskrit: 'अच्सन्धिः',
    description: 'Vowel + vowel combinations',
    tables: [savarnadirgha, gunasandhi, vrddhisandhi, yansandhi, vowelMatrix],
  },
  {
    id: 'visarga',
    title: 'Visarga Sandhi',
    titleSanskrit: 'विसर्गसन्धिः',
    description: 'Visarga (ḥ) transformations before vowels and consonants',
    tables: [visargaSummary, visargaVowel, visargaConsonant],
  },
  {
    id: 'consonant',
    title: 'Consonant Sandhi',
    titleSanskrit: 'हल्सन्धिः',
    description: 'Consonant combinations — voicing, nasalization, assimilation',
    tables: [consonantGrid, consonantVoicing, consonantNasal],
  },
  {
    id: 'internal',
    title: 'Internal Sandhi',
    titleSanskrit: 'आभ्यन्तरसन्धिः',
    description: 'Sandhi within a word — RUKI, ṇatva, key changes',
    tables: [internalSandhi],
  },
];
