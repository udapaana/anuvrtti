/**
 * Subanta (Noun Declension) Reference Data
 * Quick-lookup tables for noun declensions
 */

import type { ReferenceTable, ReferenceSection } from './types';

// Helper to create Sanskrit cells
const s = (text: string, tooltip?: string) => ({ text, sanskrit: true, tooltip });
const t = (text: string, tooltip?: string) => ({ text, sanskrit: false, tooltip });

/**
 * Vibhakti names
 */
export const vibhaktiNames: ReferenceTable = {
  id: 'vibhakti-names',
  title: 'The Seven Cases',
  titleSanskrit: 'सप्तविभक्तयः',
  headers: [
    s('विभक्ति'),
    t('Name'),
    s('कारक'),
    t('Meaning'),
  ],
  rows: [
    [s('प्रथमा'), t('Nominative'), s('कर्ता'), t('Subject, "the ___"')],
    [s('द्वितीया'), t('Accusative'), s('कर्म'), t('Object, "the ___"')],
    [s('तृतीया'), t('Instrumental'), s('करण'), t('By/with ___')],
    [s('चतुर्थी'), t('Dative'), s('सम्प्रदान'), t('To/for ___')],
    [s('पञ्चमी'), t('Ablative'), s('अपादान'), t('From ___')],
    [s('षष्ठी'), t('Genitive'), s('सम्बन्ध'), t('Of ___, ___\'s')],
    [s('सप्तमी'), t('Locative'), s('अधिकरण'), t('In/on/at ___')],
  ],
  notes: ['सम्बोधन (vocative) uses प्रथमा forms with special एकवचन.'],
};

/**
 * देव (masculine a-stem) paradigm
 */
export const devaParadigm: ReferenceTable = {
  id: 'deva-paradigm',
  title: 'Masculine a-stem',
  titleSanskrit: 'अकारान्त पुंलिङ्ग',
  description: 'देव (god) — the most common pattern',
  headers: [
    s('एक॰'),
    s('द्वि॰'),
    s('बहु॰'),
  ],
  rowHeaders: [
    s('प्र॰'),
    s('द्वि॰'),
    s('तृ॰'),
    s('च॰'),
    s('पं॰'),
    s('ष॰'),
    s('स॰'),
    s('सम्बो॰'),
  ],
  rows: [
    [s('देवः'), s('देवौ'), s('देवाः')],
    [s('देवम्'), s('देवौ'), s('देवान्')],
    [s('देवेन'), s('देवाभ्याम्'), s('देवैः')],
    [s('देवाय'), s('देवाभ्याम्'), s('देवेभ्यः')],
    [s('देवात्'), s('देवाभ्याम्'), s('देवेभ्यः')],
    [s('देवस्य'), s('देवयोः'), s('देवानाम्')],
    [s('देवे'), s('देवयोः'), s('देवेषु')],
    [s('हे देव'), s('हे देवौ'), s('हे देवाः')],
  ],
};

/**
 * फल (neuter a-stem) paradigm
 */
export const phalaParadigm: ReferenceTable = {
  id: 'phala-paradigm',
  title: 'Neuter a-stem',
  titleSanskrit: 'अकारान्त नपुंसकलिङ्ग',
  description: 'फल (fruit)',
  headers: [
    s('एक॰'),
    s('द्वि॰'),
    s('बहु॰'),
  ],
  rowHeaders: [
    s('प्र॰'),
    s('द्वि॰'),
    s('तृ॰'),
    s('च॰'),
    s('पं॰'),
    s('ष॰'),
    s('स॰'),
  ],
  rows: [
    [s('फलम्'), s('फले'), s('फलानि')],
    [s('फलम्'), s('फले'), s('फलानि')],
    [s('फलेन'), s('फलाभ्याम्'), s('फलैः')],
    [s('फलाय'), s('फलाभ्याम्'), s('फलेभ्यः')],
    [s('फलात्'), s('फलाभ्याम्'), s('फलेभ्यः')],
    [s('फलस्य'), s('फलयोः'), s('फलानाम्')],
    [s('फले'), s('फलयोः'), s('फलेषु')],
  ],
  notes: ['प्रथमा and द्वितीया are identical in neuter.'],
};

/**
 * सेना (feminine aa-stem) paradigm
 */
export const senaParadigm: ReferenceTable = {
  id: 'sena-paradigm',
  title: 'Feminine aa-stem',
  titleSanskrit: 'आकारान्त स्त्रीलिङ्ग',
  description: 'सेना (army)',
  headers: [
    s('एक॰'),
    s('द्वि॰'),
    s('बहु॰'),
  ],
  rowHeaders: [
    s('प्र॰'),
    s('द्वि॰'),
    s('तृ॰'),
    s('च॰'),
    s('पं॰'),
    s('ष॰'),
    s('स॰'),
  ],
  rows: [
    [s('सेना'), s('सेने'), s('सेनाः')],
    [s('सेनाम्'), s('सेने'), s('सेनाः')],
    [s('सेनया'), s('सेनाभ्याम्'), s('सेनाभिः')],
    [s('सेनायै'), s('सेनाभ्याम्'), s('सेनाभ्यः')],
    [s('सेनायाः'), s('सेनाभ्याम्'), s('सेनाभ्यः')],
    [s('सेनायाः'), s('सेनयोः'), s('सेनानाम्')],
    [s('सेनायाम्'), s('सेनयोः'), s('सेनासु')],
  ],
};

/**
 * अग्नि (masculine i-stem) paradigm
 */
export const agniParadigm: ReferenceTable = {
  id: 'agni-paradigm',
  title: 'Masculine i-stem',
  titleSanskrit: 'इकारान्त पुंलिङ्ग',
  description: 'अग्नि (fire)',
  headers: [
    s('एक॰'),
    s('द्वि॰'),
    s('बहु॰'),
  ],
  rowHeaders: [
    s('प्र॰'),
    s('द्वि॰'),
    s('तृ॰'),
    s('च॰'),
    s('पं॰'),
    s('ष॰'),
    s('स॰'),
  ],
  rows: [
    [s('अग्निः'), s('अग्नी'), s('अग्नयः')],
    [s('अग्निम्'), s('अग्नी'), s('अग्नीन्')],
    [s('अग्निना'), s('अग्निभ्याम्'), s('अग्निभिः')],
    [s('अग्नये'), s('अग्निभ्याम्'), s('अग्निभ्यः')],
    [s('अग्नेः'), s('अग्निभ्याम्'), s('अग्निभ्यः')],
    [s('अग्नेः'), s('अग्न्योः'), s('अग्नीनाम्')],
    [s('अग्नौ'), s('अग्न्योः'), s('अग्निषु')],
  ],
};

/**
 * गुरु (masculine u-stem) paradigm
 */
export const guruParadigm: ReferenceTable = {
  id: 'guru-paradigm',
  title: 'Masculine u-stem',
  titleSanskrit: 'उकारान्त पुंलिङ्ग',
  description: 'गुरु (teacher)',
  headers: [
    s('एक॰'),
    s('द्वि॰'),
    s('बहु॰'),
  ],
  rowHeaders: [
    s('प्र॰'),
    s('द्वि॰'),
    s('तृ॰'),
    s('च॰'),
    s('पं॰'),
    s('ष॰'),
    s('स॰'),
  ],
  rows: [
    [s('गुरुः'), s('गुरू'), s('गुरवः')],
    [s('गुरुम्'), s('गुरू'), s('गुरून्')],
    [s('गुरुणा'), s('गुरुभ्याम्'), s('गुरुभिः')],
    [s('गुरवे'), s('गुरुभ्याम्'), s('गुरुभ्यः')],
    [s('गुरोः'), s('गुरुभ्याम्'), s('गुरुभ्यः')],
    [s('गुरोः'), s('गुर्वोः'), s('गुरूणाम्')],
    [s('गुरौ'), s('गुर्वोः'), s('गुरुषु')],
  ],
};

/**
 * नदी (feminine ii-stem) paradigm
 */
export const nadiParadigm: ReferenceTable = {
  id: 'nadi-paradigm',
  title: 'Feminine ii-stem',
  titleSanskrit: 'ईकारान्त स्त्रीलिङ्ग',
  description: 'नदी (river)',
  headers: [
    s('एक॰'),
    s('द्वि॰'),
    s('बहु॰'),
  ],
  rowHeaders: [
    s('प्र॰'),
    s('द्वि॰'),
    s('तृ॰'),
    s('च॰'),
    s('पं॰'),
    s('ष॰'),
    s('स॰'),
  ],
  rows: [
    [s('नदी'), s('नद्यौ'), s('नद्यः')],
    [s('नदीम्'), s('नद्यौ'), s('नदीः')],
    [s('नद्या'), s('नदीभ्याम्'), s('नदीभिः')],
    [s('नद्यै'), s('नदीभ्याम्'), s('नदीभ्यः')],
    [s('नद्याः'), s('नदीभ्याम्'), s('नदीभ्यः')],
    [s('नद्याः'), s('नद्योः'), s('नदीनाम्')],
    [s('नद्याम्'), s('नद्योः'), s('नदीषु')],
  ],
};

/**
 * राजन् (masculine n-stem) paradigm
 */
export const rajanParadigm: ReferenceTable = {
  id: 'rajan-paradigm',
  title: 'Masculine an-stem',
  titleSanskrit: 'अन्-कारान्त पुंलिङ्ग',
  description: 'राजन् (king)',
  headers: [
    s('एक॰'),
    s('द्वि॰'),
    s('बहु॰'),
  ],
  rowHeaders: [
    s('प्र॰'),
    s('द्वि॰'),
    s('तृ॰'),
    s('च॰'),
    s('पं॰'),
    s('ष॰'),
    s('स॰'),
  ],
  rows: [
    [s('राजा'), s('राजानौ'), s('राजानः')],
    [s('राजानम्'), s('राजानौ'), s('राज्ञः')],
    [s('राज्ञा'), s('राजभ्याम्'), s('राजभिः')],
    [s('राज्ञे'), s('राजभ्याम्'), s('राजभ्यः')],
    [s('राज्ञः'), s('राजभ्याम्'), s('राजभ्यः')],
    [s('राज्ञः'), s('राज्ञोः'), s('राज्ञाम्')],
    [s('राज्ञि/राजनि'), s('राज्ञोः'), s('राजसु')],
  ],
};

/**
 * सुप् endings abstract
 */
export const supEndings: ReferenceTable = {
  id: 'sup-endings',
  title: 'Abstract सुप् Endings',
  titleSanskrit: 'सुप्प्रत्ययाः',
  description: 'The 21 case endings (before sandhi)',
  headers: [
    s('एक॰'),
    s('द्वि॰'),
    s('बहु॰'),
  ],
  rowHeaders: [
    s('प्र॰'),
    s('द्वि॰'),
    s('तृ॰'),
    s('च॰'),
    s('पं॰'),
    s('ष॰'),
    s('स॰'),
  ],
  rows: [
    [s('सु'), s('औ'), s('जस्')],
    [s('अम्'), s('औट्'), s('शस्')],
    [s('टा'), s('भ्याम्'), s('भिस्')],
    [s('ङे'), s('भ्याम्'), s('भ्यस्')],
    [s('ङसि'), s('भ्याम्'), s('भ्यस्')],
    [s('ङस्'), s('ओस्'), s('आम्')],
    [s('ङि'), s('ओस्'), s('सुप्')],
  ],
  notes: ['These are the raw pratyayas; they transform based on the stem.'],
};

/**
 * Subanta reference sections
 */
export const subantaSections: ReferenceSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    titleSanskrit: 'परिचयः',
    tables: [vibhaktiNames, supEndings],
  },
  {
    id: 'a-stems',
    title: 'A-stems',
    titleSanskrit: 'अकारान्त',
    description: 'Most common noun type',
    tables: [devaParadigm, phalaParadigm],
  },
  {
    id: 'aa-stems',
    title: 'Aa-stems',
    titleSanskrit: 'आकारान्त',
    description: 'Feminine nouns ending in long आ',
    tables: [senaParadigm],
  },
  {
    id: 'i-u-stems',
    title: 'I/U-stems',
    titleSanskrit: 'इ/उकारान्त',
    description: 'Stems ending in इ, ई, उ, ऊ',
    tables: [agniParadigm, guruParadigm, nadiParadigm],
  },
  {
    id: 'consonant-stems',
    title: 'Consonant Stems',
    titleSanskrit: 'हलन्त',
    description: 'Stems ending in consonants',
    tables: [rajanParadigm],
  },
];
