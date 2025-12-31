/**
 * Sandhi Reference Data
 * Quick-lookup tables for sound combination rules
 */

import type { ReferenceTable, ReferenceSection } from './types';

const s = (text: string, tooltip?: string) => ({ text, sanskrit: true, tooltip });
const t = (text: string, tooltip?: string) => ({ text, sanskrit: false, tooltip });

/**
 * Vowel Sandhi - Simple vowels combining
 */
export const vowelSandhiBasic: ReferenceTable = {
  id: 'vowel-sandhi-basic',
  title: 'Vowel Sandhi (सवर्णदीर्घ)',
  titleSanskrit: 'अच्सन्धिः',
  description: 'Same vowels combine to long',
  headers: [
    t('First'),
    t('+'),
    t('Second'),
    t('→'),
    t('Result'),
    t('Example'),
  ],
  rows: [
    [s('अ/आ'), t('+'), s('अ/आ'), t('→'), s('आ'), s('राम + अत्र = रामात्र')],
    [s('इ/ई'), t('+'), s('इ/ई'), t('→'), s('ई'), s('कवि + इह = कवीह')],
    [s('उ/ऊ'), t('+'), s('उ/ऊ'), t('→'), s('ऊ'), s('गुरु + उक्तम् = गुरूक्तम्')],
    [s('ऋ/ॠ'), t('+'), s('ऋ/ॠ'), t('→'), s('ॠ'), s('पितृ + ऋणम् = पितॄणम्')],
  ],
};

/**
 * Guna Sandhi
 */
export const gunaSandhi: ReferenceTable = {
  id: 'guna-sandhi',
  title: 'Guna Sandhi',
  titleSanskrit: 'गुणसन्धिः',
  description: 'अ/आ + इक् vowel → गुण',
  headers: [
    t('First'),
    t('+'),
    t('Second'),
    t('→'),
    t('Result'),
    t('Example'),
  ],
  rows: [
    [s('अ/आ'), t('+'), s('इ/ई'), t('→'), s('ए'), s('देव + इन्द्र = देवेन्द्र')],
    [s('अ/आ'), t('+'), s('उ/ऊ'), t('→'), s('ओ'), s('सूर्य + उदय = सूर्योदय')],
    [s('अ/आ'), t('+'), s('ऋ/ॠ'), t('→'), s('अर्'), s('महा + ऋषि = महर्षि')],
    [s('अ/आ'), t('+'), s('ऌ'), t('→'), s('अल्'), t('(rare)')],
  ],
};

/**
 * Vrddhi Sandhi
 */
export const vrdhiSandhi: ReferenceTable = {
  id: 'vrdhi-sandhi',
  title: 'Vrddhi Sandhi',
  titleSanskrit: 'वृद्धिसन्धिः',
  description: 'अ/आ + ए/ओ/ऐ/औ → वृद्धि',
  headers: [
    t('First'),
    t('+'),
    t('Second'),
    t('→'),
    t('Result'),
    t('Example'),
  ],
  rows: [
    [s('अ/आ'), t('+'), s('ए/ऐ'), t('→'), s('ऐ'), s('एक + एक = एकैक')],
    [s('अ/आ'), t('+'), s('ओ/औ'), t('→'), s('औ'), s('वन + औषधि = वनौषधि')],
  ],
};

/**
 * Yan Sandhi (इक् + अच् → यण्)
 */
export const yanSandhi: ReferenceTable = {
  id: 'yan-sandhi',
  title: 'Yan Sandhi',
  titleSanskrit: 'यण्सन्धिः',
  description: 'इक् vowel + dissimilar vowel → यण्',
  headers: [
    t('First'),
    t('+'),
    t('Second'),
    t('→'),
    t('Result'),
    t('Example'),
  ],
  rows: [
    [s('इ/ई'), t('+'), s('अच् (not इ/ई)'), t('→'), s('य्'), s('इति + अत्र = इत्यत्र')],
    [s('उ/ऊ'), t('+'), s('अच् (not उ/ऊ)'), t('→'), s('व्'), s('मधु + अरि = मध्वरि')],
    [s('ऋ/ॠ'), t('+'), s('अच् (not ऋ/ॠ)'), t('→'), s('र्'), s('पितृ + आज्ञा = पित्राज्ञा')],
    [s('ऌ'), t('+'), s('अच् (not ऌ)'), t('→'), s('ल्'), t('(rare)')],
  ],
};

/**
 * Visarga Sandhi before vowels
 */
export const visargaVowel: ReferenceTable = {
  id: 'visarga-vowel',
  title: 'Visarga + Vowel',
  titleSanskrit: 'विसर्गसन्धिः (स्वरे)',
  headers: [
    t('Context'),
    t('Rule'),
    t('Example'),
  ],
  rows: [
    [t('अः + अ'), s('ः → ओ, अ elided'), s('रामः + अत्र = रामोऽत्र')],
    [t('अः + other vowel'), s('ः → ओ'), s('रामः + इति = रामो इति')],
    [t('आः + vowel'), s('ः elided'), s('देवाः + इह = देवा इह')],
    [t('other + vowel'), s('ः → र्'), s('गुरुः + अत्र = गुरुरत्र')],
  ],
};

/**
 * Visarga Sandhi before consonants
 */
export const visargaConsonant: ReferenceTable = {
  id: 'visarga-consonant',
  title: 'Visarga + Consonant',
  titleSanskrit: 'विसर्गसन्धिः (व्यञ्जने)',
  headers: [
    t('Following'),
    t('Rule'),
    t('Example'),
  ],
  rows: [
    [s('क/ख'), s('ः unchanged'), s('रामः करोति')],
    [s('प/फ'), s('ः unchanged'), s('देवः पश्यति')],
    [s('च/छ'), s('ः → श्'), s('रामः चरति = रामश्चरति')],
    [s('ट/ठ'), s('ः → ष्'), s('रामः टीकते = रामष्टीकते')],
    [s('त/थ'), s('ः → स्'), s('रामः तत्र = रामस्तत्र')],
    [s('श'), s('ः → श्'), s('रामः शेते = रामश्शेते')],
    [s('voiced (ग/घ/etc)'), s('ः → र् or ओ'), s('रामः गच्छति = रामो गच्छति')],
  ],
};

/**
 * Consonant Sandhi - Voicing
 */
export const consonantVoicing: ReferenceTable = {
  id: 'consonant-voicing',
  title: 'Consonant Voicing',
  titleSanskrit: 'झलां जश्',
  description: 'Final stop → voiced before voiced sound',
  headers: [
    t('Final'),
    t('→'),
    t('Before voiced'),
  ],
  rows: [
    [s('क्'), t('→'), s('ग्')],
    [s('च्'), t('→'), s('ज्')],
    [s('ट्'), t('→'), s('ड्')],
    [s('त्'), t('→'), s('द्')],
    [s('प्'), t('→'), s('ब्')],
  ],
  notes: ['Example: वाक् + ईश = वागीश'],
};

/**
 * Consonant Sandhi - Nasalization
 */
export const consonantNasal: ReferenceTable = {
  id: 'consonant-nasal',
  title: 'Nasalization',
  titleSanskrit: 'अनुनासिकसन्धिः',
  description: 'Final stop → nasal before nasal',
  headers: [
    t('Final'),
    t('→'),
    t('Before nasal'),
  ],
  rows: [
    [s('क्/ग्'), t('→'), s('ङ्')],
    [s('च्/ज्'), t('→'), s('ञ्')],
    [s('ट्/ड्'), t('→'), s('ण्')],
    [s('त्/द्'), t('→'), s('न्')],
    [s('प्/ब्'), t('→'), s('म्')],
  ],
  notes: ['Example: वाक् + मय = वाङ्मय'],
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
    tables: [vowelSandhiBasic, gunaSandhi, vrdhiSandhi, yanSandhi],
  },
  {
    id: 'visarga',
    title: 'Visarga Sandhi',
    titleSanskrit: 'विसर्गसन्धिः',
    description: 'Visarga (ः) transformations',
    tables: [visargaVowel, visargaConsonant],
  },
  {
    id: 'consonant',
    title: 'Consonant Sandhi',
    titleSanskrit: 'हल्सन्धिः',
    description: 'Consonant combinations',
    tables: [consonantVoicing, consonantNasal],
  },
];
