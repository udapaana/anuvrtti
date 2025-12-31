/**
 * Samasa (Compound) Reference Data
 * Quick-lookup tables for compound types
 */

import type { ReferenceTable, ReferenceSection } from './types';

const s = (text: string, tooltip?: string) => ({ text, sanskrit: true, tooltip });
const t = (text: string, tooltip?: string) => ({ text, sanskrit: false, tooltip });

/**
 * Four main compound types
 */
export const compoundTypes: ReferenceTable = {
  id: 'compound-types',
  title: 'The Four Compound Types',
  titleSanskrit: 'चत्वारः समासाः',
  headers: [
    s('समास'),
    t('Type'),
    t('Head'),
    t('Meaning Pattern'),
    t('Example'),
  ],
  rows: [
    [s('तत्पुरुष'), t('Determinative'), t('Last'), t('"X of/for/from Y"'), s('राजपुत्रः = राज्ञः पुत्रः')],
    [s('कर्मधारय'), t('Descriptive'), t('Last'), t('"X which is Y"'), s('नीलोत्पलम् = नीलम् उत्पलम्')],
    [s('द्वन्द्व'), t('Copulative'), t('Both'), t('"X and Y"'), s('रामलक्ष्मणौ = रामश्च लक्ष्मणश्च')],
    [s('बहुव्रीहि'), t('Possessive'), t('External'), t('"having X"'), s('चक्रपाणिः = चक्रं पाणौ यस्य')],
    [s('अव्ययीभाव'), t('Adverbial'), t('First'), t('"in manner of X"'), s('उपकृष्णम् = कृष्णस्य समीपम्')],
  ],
  notes: ['कर्मधारय is often classified as a subtype of तत्पुरुष.'],
};

/**
 * Tatpurusha subtypes by vibhakti
 */
export const tatpurushaSubtypes: ReferenceTable = {
  id: 'tatpurusha-subtypes',
  title: 'Tatpurusha by Case',
  titleSanskrit: 'तत्पुरुषभेदाः',
  description: 'The first member has an implicit case relation',
  headers: [
    t('Subtype'),
    s('विभक्ति'),
    t('Relation'),
    t('Example'),
    t('Meaning'),
  ],
  rows: [
    [t('द्वितीया-'), s('द्वि॰'), t('Object'), s('ग्रामगतः'), t('"gone to village"')],
    [t('तृतीया-'), s('तृ॰'), t('Instrument'), s('शूलपाणिः'), t('"trident-handed"')],
    [t('चतुर्थी-'), s('च॰'), t('Purpose'), s('यूपदारु'), t('"wood for post"')],
    [t('पञ्चमी-'), s('पं॰'), t('Source'), s('स्वर्गपतितः'), t('"fallen from heaven"')],
    [t('षष्ठी-'), s('ष॰'), t('Possession'), s('राजपुत्रः'), t('"king\'s son"')],
    [t('सप्तमी-'), s('स॰'), t('Location'), s('कूपमण्डूकः'), t('"well-frog"')],
  ],
};

/**
 * Karmadharaya types
 */
export const karmadharayaTypes: ReferenceTable = {
  id: 'karmadharaya-types',
  title: 'Karmadharaya Types',
  titleSanskrit: 'कर्मधारयभेदाः',
  description: 'Descriptive compounds with apposition',
  headers: [
    t('Type'),
    t('Pattern'),
    t('Example'),
    t('Meaning'),
  ],
  rows: [
    [t('विशेषण-विशेष्य'), t('Adj + Noun'), s('नीलोत्पलम्'), t('"blue lotus"')],
    [t('उपमान-उपमेय'), t('Comparison'), s('मुखचन्द्रः'), t('"moon-face"')],
    [t('अवधारण'), t('Emphasis'), s('अयं घटः'), t('"this very pot"')],
  ],
};

/**
 * Dvandva types
 */
export const dvandvaTypes: ReferenceTable = {
  id: 'dvandva-types',
  title: 'Dvandva Types',
  titleSanskrit: 'द्वन्द्वभेदाः',
  headers: [
    t('Type'),
    t('Gender'),
    t('Example'),
    t('Meaning'),
  ],
  rows: [
    [t('इतरेतर'), t('Dual/Plural'), s('रामलक्ष्मणौ'), t('"Rama and Lakshmana"')],
    [t('समाहार'), t('Neuter Sg.'), s('पाणिपादम्'), t('"hands and feet (as a group)"')],
    [t('एकशेष'), t('Dual'), s('पितरौ'), t('"father and mother"')],
  ],
  notes: ['इतरेतर uses dual/plural of last member; समाहार is always neuter singular.'],
};

/**
 * Bahuvrihi markers
 */
export const bahuvrihiMarkers: ReferenceTable = {
  id: 'bahuvrihi-markers',
  title: 'Recognizing Bahuvrihi',
  titleSanskrit: 'बहुव्रीहिलक्षणानि',
  headers: [
    t('Clue'),
    t('Example'),
    t('Analysis'),
  ],
  rows: [
    [t('Gender mismatch'), s('महाबाहुः (m.)'), t('बाहु is m., but refers to person')],
    [t('यस्य/यस्याः expansion'), s('पीताम्बरः'), s('पीतम् अम्बरं यस्य सः')],
    [t('External referent'), s('चतुर्भुजः'), t('Describes Vishnu, not arms')],
    [t('Adjectival use'), s('दीर्घबाहुः राजा'), t('Modifies another noun')],
  ],
};

/**
 * Samasa reference sections
 */
export const samasaSections: ReferenceSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    titleSanskrit: 'परिचयः',
    tables: [compoundTypes],
  },
  {
    id: 'tatpurusha',
    title: 'Tatpurusha',
    titleSanskrit: 'तत्पुरुषः',
    description: 'Determinative compounds — last member is head',
    tables: [tatpurushaSubtypes, karmadharayaTypes],
  },
  {
    id: 'dvandva',
    title: 'Dvandva',
    titleSanskrit: 'द्वन्द्वः',
    description: 'Copulative compounds — "X and Y"',
    tables: [dvandvaTypes],
  },
  {
    id: 'bahuvrihi',
    title: 'Bahuvrihi',
    titleSanskrit: 'बहुव्रीहिः',
    description: 'Possessive compounds — meaning external to components',
    tables: [bahuvrihiMarkers],
  },
];
