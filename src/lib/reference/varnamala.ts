/**
 * Varnamala (Alphabet) Reference Data
 */

import type { ReferenceTable, ReferenceSection } from './types';

const s = (text: string, tooltip?: string) => ({ text, sanskrit: true, tooltip });
const t = (text: string, tooltip?: string) => ({ text, sanskrit: false, tooltip });

/**
 * Maheshvara Sutras
 */
export const maheshvaraSutras: ReferenceTable = {
  id: 'maheshvara-sutras',
  title: 'Maheshvara Sutras',
  titleSanskrit: 'माहेश्वरसूत्राणि',
  description: 'The 14 sutras containing all Sanskrit sounds',
  headers: [
    t('#'),
    s('सूत्र'),
    t('Sounds'),
    s('इत्'),
  ],
  rows: [
    [t('1'), s('अइउण्'), t('a i u'), s('ण्')],
    [t('2'), s('ऋऌक्'), t('ṛ ḷ'), s('क्')],
    [t('3'), s('एओङ्'), t('e o'), s('ङ्')],
    [t('4'), s('ऐऔच्'), t('ai au'), s('च्')],
    [t('5'), s('हयवरट्'), t('h y v r'), s('ट्')],
    [t('6'), s('लण्'), t('l'), s('ण्')],
    [t('7'), s('ञमङणनम्'), t('ñ m ṅ ṇ n'), s('म्')],
    [t('8'), s('झभञ्'), t('jh bh'), s('ञ्')],
    [t('9'), s('घढधष्'), t('gh ḍh dh'), s('ष्')],
    [t('10'), s('जबगडदश्'), t('j b g ḍ d'), s('श्')],
    [t('11'), s('खफछठथचटतव्'), t('kh ph ch ṭh th c ṭ t'), s('व्')],
    [t('12'), s('कपय्'), t('k p'), s('य्')],
    [t('13'), s('शषसर्'), t('ś ṣ s'), s('र्')],
    [t('14'), s('हल्'), t('h'), s('ल्')],
  ],
};

/**
 * Common Pratyaharas
 */
export const commonPratyaharas: ReferenceTable = {
  id: 'pratyaharas',
  title: 'Common Pratyaharas',
  titleSanskrit: 'प्रत्याहाराः',
  description: 'Abbreviations for sound groups',
  headers: [
    s('प्रत्याहार'),
    t('Sounds'),
    t('Description'),
  ],
  rows: [
    [s('अच्'), t('a i u ṛ ḷ e o ai au'), t('All vowels')],
    [s('हल्'), t('All consonants'), t('All consonants')],
    [s('अण्'), t('a i u'), t('Simple vowels (short)')],
    [s('इक्'), t('i u ṛ ḷ'), t('High vowels')],
    [s('एच्'), t('e o ai au'), t('Diphthongs')],
    [s('यण्'), t('y v r l'), t('Semivowels')],
    [s('झल्'), t('All stops + श ष स ह'), t('Obstruents')],
    [s('जश्'), t('j b g ḍ d'), t('Voiced unaspirated stops')],
    [s('खर्'), t('kh ph ch ṭh th c ṭ t k p ś ṣ s'), t('Voiceless sounds')],
    [s('शल्'), t('ś ṣ s h y v r l ñ m ṅ ṇ n jh bh'), t('Soft consonants')],
  ],
};

/**
 * Vowel grid
 */
export const vowelGrid: ReferenceTable = {
  id: 'vowel-grid',
  title: 'Vowels (स्वराः)',
  titleSanskrit: 'स्वरवर्गः',
  headers: [
    t('Short'),
    t('Long'),
    s('गुण'),
    s('वृद्धि'),
  ],
  rows: [
    [t('Guttural'), s('अ'), s('आ'), t('—'), s('आ')],
    [t('Palatal'), s('इ'), s('ई'), s('ए'), s('ऐ')],
    [t('Labial'), s('उ'), s('ऊ'), s('ओ'), s('औ')],
    [t('Retroflex'), s('ऋ'), s('ॠ'), s('अर्'), s('आर्')],
    [t('Dental'), s('ऌ'), s('ॡ'), s('अल्'), s('आल्')],
  ],
};

/**
 * Consonant grid (sparsha)
 */
export const consonantGrid: ReferenceTable = {
  id: 'consonant-grid',
  title: 'Stop Consonants (स्पर्शाः)',
  titleSanskrit: 'स्पर्शवर्गः',
  description: 'The 25 stop consonants in 5 vargas',
  headers: [
    t('Class'),
    t('1st'),
    t('2nd'),
    t('3rd'),
    t('4th'),
    t('5th'),
  ],
  rowHeaders: [
    s('कवर्ग'),
    s('चवर्ग'),
    s('टवर्ग'),
    s('तवर्ग'),
    s('पवर्ग'),
  ],
  rows: [
    [s('क'), s('ख'), s('ग'), s('घ'), s('ङ')],
    [s('च'), s('छ'), s('ज'), s('झ'), s('ञ')],
    [s('ट'), s('ठ'), s('ड'), s('ढ'), s('ण')],
    [s('त'), s('थ'), s('द'), s('ध'), s('न')],
    [s('प'), s('फ'), s('ब'), s('भ'), s('म')],
  ],
  notes: [
    '1st-2nd: voiceless (अघोष), 3rd-5th: voiced (घोष)',
    '2nd & 4th: aspirated (महाप्राण), others: unaspirated (अल्पप्राण)',
    '5th column: nasals (अनुनासिक)',
  ],
};

/**
 * Other consonants
 */
export const otherConsonants: ReferenceTable = {
  id: 'other-consonants',
  title: 'Other Consonants',
  titleSanskrit: 'अवर्गीयव्यञ्जनानि',
  headers: [
    t('Type'),
    s('वर्णाः'),
    t('Names'),
  ],
  rows: [
    [t('Semivowels (अन्तस्थ)'), s('य र ल व'), t('ya ra la va')],
    [t('Sibilants (ऊष्मन्)'), s('श ष स'), t('śa ṣa sa')],
    [t('Aspirate'), s('ह'), t('ha')],
    [t('Visarga'), s('ः'), t('voiceless glottal')],
    [t('Anusvara'), s('ं'), t('nasalization')],
  ],
};

/**
 * Articulation points
 */
export const articulationPoints: ReferenceTable = {
  id: 'articulation-points',
  title: 'Places of Articulation',
  titleSanskrit: 'उच्चारणस्थानानि',
  headers: [
    s('स्थान'),
    t('Place'),
    t('Sounds'),
  ],
  rows: [
    [s('कण्ठ'), t('Throat (guttural)'), s('अ आ क-वर्ग ह विसर्ग')],
    [s('तालु'), t('Palate (palatal)'), s('इ ई च-वर्ग य श')],
    [s('मूर्धन्'), t('Roof (retroflex)'), s('ऋ ॠ ट-वर्ग र ष')],
    [s('दन्त'), t('Teeth (dental)'), s('ऌ ॡ त-वर्ग ल स')],
    [s('ओष्ठ'), t('Lips (labial)'), s('उ ऊ प-वर्ग')],
    [s('नासिका'), t('Nose'), t('Anusvara, class nasals')],
  ],
};

/**
 * Varnamala reference sections
 */
export const varnamalaSections: ReferenceSection[] = [
  {
    id: 'maheshvara',
    title: 'Maheshvara Sutras',
    titleSanskrit: 'माहेश्वरसूत्राणि',
    tables: [maheshvaraSutras, commonPratyaharas],
  },
  {
    id: 'vowels',
    title: 'Vowels',
    titleSanskrit: 'स्वराः',
    tables: [vowelGrid],
  },
  {
    id: 'consonants',
    title: 'Consonants',
    titleSanskrit: 'व्यञ्जनानि',
    tables: [consonantGrid, otherConsonants],
  },
  {
    id: 'articulation',
    title: 'Articulation',
    titleSanskrit: 'उच्चारणम्',
    tables: [articulationPoints],
  },
];
