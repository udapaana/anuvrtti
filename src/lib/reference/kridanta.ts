/**
 * Kridanta (Participles/Verbal Derivatives) Reference Data
 */

import type { ReferenceTable, ReferenceSection } from './types';

const s = (text: string, tooltip?: string) => ({ text, sanskrit: true, tooltip });
const t = (text: string, tooltip?: string) => ({ text, sanskrit: false, tooltip });

/**
 * Common krit pratyayas overview
 */
export const kritOverview: ReferenceTable = {
  id: 'krit-overview',
  title: 'Common कृत् Pratyayas',
  titleSanskrit: 'कृत्प्रत्ययाः',
  headers: [
    s('प्रत्यय'),
    t('Name'),
    t('Meaning'),
    t('Example'),
  ],
  rows: [
    [s('क्त'), t('Past Passive Participle'), t('"___ed"'), s('कृतः = done')],
    [s('क्तवतु'), t('Past Active Participle'), t('"having ___ed"'), s('कृतवान् = one who did')],
    [s('शतृ'), t('Present Active Participle'), t('"___ing"'), s('गच्छन् = going')],
    [s('शानच्'), t('Present Middle Participle'), t('"___ing (for self)"'), s('पचमानः = cooking')],
    [s('तव्य/अनीय'), t('Future Passive Participle'), t('"to be ___ed"'), s('कर्तव्यम् = to be done')],
    [s('तुमुन्'), t('Infinitive'), t('"to ___"'), s('कर्तुम् = to do')],
    [s('क्त्वा'), t('Gerund (absolutive)'), t('"having ___ed"'), s('कृत्वा = having done')],
    [s('ल्यप्'), t('Gerund (with prefix)'), t('"having ___ed"'), s('प्रकृत्य = having done')],
  ],
};

/**
 * क्त/क्तवतु paradigms
 */
export const ktaKtavatu: ReferenceTable = {
  id: 'kta-ktavatu',
  title: 'Past Participles',
  titleSanskrit: 'क्त/क्तवतु',
  description: 'From √कृ (to do)',
  headers: [
    t('Type'),
    s('पुं॰'),
    s('स्त्री॰'),
    s('नपुं॰'),
    t('Usage'),
  ],
  rows: [
    [s('क्त'), s('कृतः'), s('कृता'), s('कृतम्'), t('Passive: "done"')],
    [s('क्तवतु'), s('कृतवान्'), s('कृतवती'), s('कृतवत्'), t('Active: "one who did"')],
  ],
  notes: [
    'क्त usually has passive sense but some roots have active sense (गतः = gone)',
    'क्तवतु always has active sense and declines like भगवत्',
  ],
};

/**
 * शतृ/शानच् present participles
 */
export const shatrShanac: ReferenceTable = {
  id: 'shatr-shanac',
  title: 'Present Participles',
  titleSanskrit: 'शतृ/शानच्',
  description: 'From √गम् (to go) and √पच् (to cook)',
  headers: [
    t('Type'),
    s('पुं॰'),
    s('स्त्री॰'),
    s('नपुं॰'),
    t('Voice'),
  ],
  rows: [
    [s('शतृ'), s('गच्छन्'), s('गच्छन्ती'), s('गच्छत्'), t('Parasmaipada')],
    [s('शानच्'), s('पचमानः'), s('पचमाना'), s('पचमानम्'), t('Atmanepada')],
  ],
  notes: [
    'शतृ declines like राजन् (strong/weak stems)',
    'शानच् declines like regular a-stems',
  ],
};

/**
 * Future Passive Participles (gerundives)
 */
export const gerundives: ReferenceTable = {
  id: 'gerundives',
  title: 'Future Passive Participles',
  titleSanskrit: 'तव्य/अनीय/य',
  description: '"To be done" - expressing obligation or necessity',
  headers: [
    s('प्रत्यय'),
    t('From √कृ'),
    t('From √गम्'),
    t('From √पठ्'),
  ],
  rows: [
    [s('तव्य'), s('कर्तव्यम्'), s('गन्तव्यम्'), s('पठितव्यम्')],
    [s('अनीय'), s('करणीयम्'), s('गमनीयम्'), s('पठनीयम्')],
    [s('य (ण्यत्/क्यप्)'), s('कार्यम्'), s('गम्यम्'), s('पाठ्यम्')],
  ],
  notes: ['All three have the same meaning; choice depends on the root.'],
};

/**
 * Infinitive and Gerunds
 */
export const infinitiveGerund: ReferenceTable = {
  id: 'infinitive-gerund',
  title: 'Infinitive & Gerund',
  titleSanskrit: 'तुमुन्/क्त्वा/ल्यप्',
  headers: [
    s('प्रत्यय'),
    t('Function'),
    t('Example'),
    t('Meaning'),
  ],
  rows: [
    [s('तुमुन्'), t('Infinitive (purpose)'), s('पठितुं गच्छति'), t('"goes to read"')],
    [s('क्त्वा'), t('Gerund (sequence)'), s('भुक्त्वा गच्छति'), t('"having eaten, goes"')],
    [s('ल्यप्'), t('Gerund (with upasarga)'), s('प्रविश्य तिष्ठति'), t('"having entered, stands"')],
  ],
  notes: [
    'क्त्वा is used without upasarga; ल्यप् is used with upasarga',
    'The gerund subject must be same as main verb subject',
  ],
};

/**
 * Agent nouns
 */
export const agentNouns: ReferenceTable = {
  id: 'agent-nouns',
  title: 'Agent Nouns',
  titleSanskrit: 'कर्तृवाचकाः',
  headers: [
    s('प्रत्यय'),
    t('Meaning'),
    t('Example'),
  ],
  rows: [
    [s('तृच्'), t('"one who does"'), s('कर्ता, दाता, गन्ता')],
    [s('अक'), t('"doer of"'), s('नायकः, पाठकः, लेखकः')],
    [s('इन्'), t('"characterized by"'), s('बलिन्, धनिन्, मेधाविन्')],
  ],
};

/**
 * Kridanta reference sections
 */
export const kridantaSections: ReferenceSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    titleSanskrit: 'परिचयः',
    tables: [kritOverview],
  },
  {
    id: 'past',
    title: 'Past Participles',
    titleSanskrit: 'भूतकृदन्त',
    description: 'क्त and क्तवतु',
    tables: [ktaKtavatu],
  },
  {
    id: 'present',
    title: 'Present Participles',
    titleSanskrit: 'वर्तमानकृदन्त',
    description: 'शतृ and शानच्',
    tables: [shatrShanac],
  },
  {
    id: 'future',
    title: 'Future Passive',
    titleSanskrit: 'कृत्य',
    description: 'तव्य, अनीय, य',
    tables: [gerundives],
  },
  {
    id: 'infinitive',
    title: 'Infinitive & Gerund',
    titleSanskrit: 'तुमुन्/क्त्वा',
    tables: [infinitiveGerund],
  },
  {
    id: 'agent',
    title: 'Agent Nouns',
    titleSanskrit: 'कर्तृवाचक',
    tables: [agentNouns],
  },
];
