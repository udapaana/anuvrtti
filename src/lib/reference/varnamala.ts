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
    s('क्रमः'),
    s('सूत्र'),
    s('इत्'),
  ],
  rows: [
    [t('1'), s('अइउण्'), s('ण्')],
    [t('2'), s('ऋऌक्'), s('क्')],
    [t('3'), s('एओङ्'), s('ङ्')],
    [t('4'), s('ऐऔच्'), s('च्')],
    [t('5'), s('हयवरट्'), s('ट्')],
    [t('6'), s('लण्'), s('ण्')],
    [t('7'), s('ञमङणनम्'), s('म्')],
    [t('8'), s('झभञ्'), s('ञ्')],
    [t('9'), s('घढधष्'), s('ष्')],
    [t('10'), s('जबगडदश्'), s('श्')],
    [t('11'), s('खफछठथचटतव्'), s('व्')],
    [t('12'), s('कपय्'), s('य्')],
    [t('13'), s('शषसर्'), s('र्')],
    [t('14'), s('हल्'), s('ल्')],
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
    s('वर्णाः'),
    s('संज्ञा'),
  ],
  rows: [
    [s('अच्'), s('अ इ उ ऋ ऌ ए ओ ऐ औ'), s('सर्वे स्वराः')],
    [s('हल्'), s('सर्वे व्यञ्जनाः'),    s('सर्वे व्यञ्जनाः')],
    [s('अण्'), s('अ इ उ'),              s('ह्रस्वस्वराः')],
    [s('इक्'), s('इ उ ऋ ऌ'),           s('उच्चस्वराः')],
    [s('एच्'), s('ए ओ ऐ औ'),           s('सन्ध्यक्षराः')],
    [s('यण्'), s('य व र ल'),           s('अन्तस्थाः')],
    [s('झल्'), s('सर्वे स्पर्शाः + श ष स ह'), s('स्पर्श-ऊष्माणः')],
    [s('जश्'), s('ज ब ग ड द'),         s('घोषाल्पप्राणाः')],
    [s('खर्'), s('ख फ छ ठ थ च ट त क प श ष स'), s('अघोषाः')],
    [s('शल्'), s('श ष स ह य व र ल ञ म ङ ण न झ भ'), s('मृदवः')],
  ],
};

/**
 * Vowel grid
 */
export const vowelGrid: ReferenceTable = {
  id: 'vowel-grid',
  title: 'Vowels',
  titleSanskrit: 'स्वरवर्गः',
  headers: [
    s('ह्रस्व'),
    s('दीर्घ'),
    s('गुण'),
    s('वृद्धि'),
  ],
  rowHeaders: [
    s('कण्ठ्य'),
    s('तालव्य'),
    s('ओष्ठ्य'),
    s('मूर्धन्य'),
    s('दन्त्य'),
  ],
  rows: [
    [s('अ'), s('आ'), t('—'), s('आ')],
    [s('इ'), s('ई'), s('ए'), s('ऐ')],
    [s('उ'), s('ऊ'), s('ओ'), s('औ')],
    [s('ऋ'), s('ॠ'), s('अर्'), s('आर्')],
    [s('ऌ'), s('ॡ'), s('अल्'), s('आल्')],
  ],
};

/**
 * Consonant grid (sparsha)
 */
export const consonantGrid: ReferenceTable = {
  id: 'consonant-grid',
  title: 'Stop Consonants',
  titleSanskrit: 'स्पर्शवर्गः',
  description: 'The 25 stop consonants in 5 vargas',
  headers: [
    t('1', 'अघोषाल्पप्राण — voiceless unaspirated'),
    t('2', 'अघोषमहाप्राण — voiceless aspirated'),
    t('3', 'घोषाल्पप्राण — voiced unaspirated'),
    t('4', 'घोषमहाप्राण — voiced aspirated'),
    t('5', 'नासिक्य — nasal'),
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
    '1st-2nd: voiceless (aghoṣa), 3rd-5th: voiced (ghoṣa)',
    '2nd & 4th: aspirated (mahāprāṇa), others: unaspirated (alpaprāṇa)',
    '5th column: nasals (anunāsika)',
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
    s('भेदः'),
    s('वर्णाः'),
    s('नामानि'),
  ],
  rows: [
    [s('अन्तस्थ'), s('य र ल व'), s('या रा ला वा')],
    [s('ऊष्मन्'), s('श ष स'), s('शा षा सा')],
    [s('महाप्राण'), s('ह'), s('ह')],
    [s('विसर्ग'), s('ः'), s('अघोषः — कण्ठ्यः')],
    [s('अनुस्वार'), s('ं'), s('अनुनासिकम्')],
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
    s('स्थानम्'),
    s('संज्ञा'),
    s('वर्णाः'),
  ],
  rows: [
    [s('कण्ठ'), s('कण्ठ्य'), s('अ आ क-वर्ग ह विसर्ग')],
    [s('तालु'), s('तालव्य'), s('इ ई च-वर्ग य श')],
    [s('मूर्धन्'), s('मूर्धन्य'), s('ऋ ॠ ट-वर्ग र ष')],
    [s('दन्त'), s('दन्त्य'), s('ऌ ॡ त-वर्ग ल स')],
    [s('ओष्ठ'), s('ओष्ठ्य'), s('उ ऊ प-वर्ग')],
    [s('नासिका'), s('अनुनासिक'), s('अनुस्वार, वर्गनासिक्याः')],
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
    tables: [],
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
