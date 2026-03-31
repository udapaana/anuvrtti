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
  title: 'Common kṛt Pratyayas',
  titleSanskrit: 'कृत्प्रत्ययाः',
  headers: [
    s('प्रत्यय'),
    s('संज्ञा'),
    s('अर्थः'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('क्त'), s('भूतकर्मकृदन्त'), s('भूतकालः, कर्मणि'), s('कृतः', 'done')],
    [s('क्तवतु'), s('भूतकर्तृकृदन्त'), s('भूतकालः, कर्तरि'), s('कृतवान्', 'one who did')],
    [s('शतृ'), s('वर्तमानकृदन्त'), s('वर्तमानकालः, परस्मैपद'), s('गच्छन्', 'going')],
    [s('शानच्'), s('वर्तमानात्मनेपद'), s('वर्तमानकालः, आत्मनेपद'), s('पचमानः', 'cooking')],
    [s('तव्य/अनीय'), s('कृत्य'), s('विध्यर्थः, करणीयम्'), s('कर्तव्यम्', 'to be done')],
    [s('तुमुन्'), s('तुमुन्'), s('प्रयोजनम्'), s('कर्तुम्', 'to do')],
    [s('क्त्वा'), s('क्त्वान्त'), s('पूर्वकालिकः'), s('कृत्वा', 'having done')],
    [s('ल्यप्'), s('ल्यबन्त'), s('उपसर्गसहित-पूर्वकालिकः'), s('प्रकृत्य', 'having done')],
  ],
};

/**
 * क्त/क्तवतु paradigms
 */
export const ktaKtavatu: ReferenceTable = {
  id: 'kta-ktavatu',
  title: 'Past Participles',
  titleSanskrit: 'क्त/क्तवतु',
  description: 'From √kṛ (to do)',
  headers: [
    s('प्रत्ययः'),
    s('पुं॰'),
    s('स्त्री॰'),
    s('नपुं॰'),
    s('अर्थः'),
  ],
  rows: [
    [s('क्त'), s('कृतः'), s('कृता'), s('कृतम्'), s('कर्मणि-भूतकालः')],
    [s('क्तवतु'), s('कृतवान्'), s('कृतवती'), s('कृतवत्'), s('कर्तरि-भूतकालः')],
  ],
  notes: [
    'kta usually has passive sense but some roots have active sense (gataḥ = gone)',
    'ktavatu always has active sense and declines like bhagavat',
  ],
};

/**
 * शतृ/शानच् present participles
 */
export const shatrShanac: ReferenceTable = {
  id: 'shatr-shanac',
  title: 'Present Participles',
  titleSanskrit: 'शतृ/शानच्',
  description: 'From √gam (to go) and √pac (to cook)',
  headers: [
    s('प्रत्ययः'),
    s('पुं॰'),
    s('स्त्री॰'),
    s('नपुं॰'),
    s('पदम्'),
  ],
  rows: [
    [s('शतृ'), s('गच्छन्'), s('गच्छन्ती'), s('गच्छत्'), s('परस्मैपद')],
    [s('शानच्'), s('पचमानः'), s('पचमाना'), s('पचमानम्'), s('आत्मनेपद')],
  ],
  notes: [
    'śatṛ declines like rājan (strong/weak stems)',
    'śānac declines like regular a-stems',
  ],
};

/**
 * Future Passive Participles (gerundives)
 */
export const gerundives: ReferenceTable = {
  id: 'gerundives',
  title: 'Future Passive Participles',
  titleSanskrit: 'तव्य/अनीय/य',
  description: '"To be done" — expressing obligation or necessity',
  headers: [
    s('प्रत्यय'),
    s('√कृ'),
    s('√गम्'),
    s('√पठ्'),
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
    s('प्रयोजनम्'),
    s('उदाहरणम्'),
    s('अर्थः'),
  ],
  rows: [
    [s('तुमुन्'), s('तुमुन् — विधार्थः'), s('पठितुं गच्छति'), s('पठनार्थं गच्छति')],
    [s('क्त्वा'), s('क्त्वा — पूर्वकालिकः'), s('भुक्त्वा गच्छति'), s('भुक्त्वा ततो गच्छति')],
    [s('ल्यप्'), s('ल्यप् — उपसर्गसहितः'), s('प्रविश्य तिष्ठति'), s('प्रविश्य ततो तिष्ठति')],
  ],
  notes: [
    'ktvā is used without upasarga; lyap is used with upasarga',
    'The gerund subject must be the same as the main verb subject',
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
    s('अर्थः'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('तृच्'), s('कर्तृवाचकः'), s('कर्ता, दाता, गन्ता')],
    [s('अक'), s('कर्तृवाचकः'), s('नायकः, पाठकः, लेखकः')],
    [s('इन्'), s('गुणवाचकः'), s('बलिन्, धनिन्, मेधाविन्')],
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
    description: 'kta and ktavatu',
    tables: [ktaKtavatu],
  },
  {
    id: 'present',
    title: 'Present Participles',
    titleSanskrit: 'वर्तमानकृदन्त',
    description: 'śatṛ and śānac',
    tables: [shatrShanac],
  },
  {
    id: 'future',
    title: 'Future Passive',
    titleSanskrit: 'कृत्य',
    description: 'tavya, anīya, ya',
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
