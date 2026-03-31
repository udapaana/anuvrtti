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
    s('समासः'),
    s('संज्ञा'),
    s('प्रधानम्'),
    s('विग्रहः'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('तत्पुरुष'), s('विशेषण-विशेष्य'), s('उत्तरपदम्'), s('X-कारणं Y'), s('राजपुत्रः = राज्ञः पुत्रः')],
    [s('कर्मधारय'), s('विशेषण-विशेष्य'), s('उत्तरपदम्'), s('X एव Y'), s('नीलोत्पलम् = नीलम् उत्पलम्')],
    [s('द्वन्द्व'), s('समुच्चय'), s('उभयम्'), s('X च Y च'), s('रामलक्ष्मणौ = रामश्च लक्ष्मणश्च')],
    [s('बहुव्रीहि'), s('स्वत्व'), s('बहिःपदम्'), s('यस्य X तत्'), s('चक्रपाणिः = चक्रं पाणौ यस्य')],
    [s('अव्ययीभाव'), s('अव्यय'), s('पूर्वपदम्'), s('X-सदृशम्'), s('उपकृष्णम् = कृष्णस्य समीपम्')],
  ],
  notes: ['karmadhāraya is often classified as a subtype of tatpuruṣa.'],
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
    s('भेदः'),
    s('विभक्ति'),
    s('सम्बन्धः'),
    s('उदाहरणम्'),
    s('अर्थः'),
  ],
  rows: [
    [s('द्वितीया-तत्पुरुषः'), s('द्वि॰'), s('कर्म'), s('ग्रामगतः'), s('ग्रामं गतः')],
    [s('तृतीया-तत्पुरुषः'), s('तृ॰'), s('करण'), s('शूलपाणिः'), s('शूलेन पाणौ यस्य')],
    [s('चतुर्थी-तत्पुरुषः'), s('च॰'), s('सम्प्रदान'), s('यूपदारु'), s('यूपाय दारु')],
    [s('पञ्चमी-तत्पुरुषः'), s('पं॰'), s('अपादान'), s('स्वर्गपतितः'), s('स्वर्गात् पतितः')],
    [s('षष्ठी-तत्पुरुषः'), s('ष॰'), s('सम्बन्ध'), s('राजपुत्रः'), s('राज्ञः पुत्रः')],
    [s('सप्तमी-तत्पुरुषः'), s('स॰'), s('अधिकरण'), s('कूपमण्डूकः'), s('कूपे मण्डूकः')],
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
    s('भेदः'),
    s('रचना'),
    s('उदाहरणम्'),
    s('अर्थः'),
  ],
  rows: [
    [s('विशेषण-विशेष्य'), s('विशेषण + विशेष्य'), s('नीलोत्पलम्'), s('नीलम् उत्पलम्')],
    [s('उपमान-उपमेय'), s('उपमा'), s('मुखचन्द्रः'), s('चन्द्र इव मुखम्')],
    [s('अवधारण'), s('अवधारण'), s('अयं घटः'), s('अयम् एव घटः')],
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
    s('भेदः'),
    s('लिङ्ग-वचन'),
    s('उदाहरणम्'),
    s('अर्थः'),
  ],
  rows: [
    [s('इतरेतर-द्वन्द्वः'), s('द्वि॰/बहु॰'), s('रामलक्ष्मणौ'), s('रामश्च लक्ष्मणश्च')],
    [s('समाहार-द्वन्द्वः'), s('नपुं॰ एक॰'), s('पाणिपादम्'), s('पाणयः पादाश्च (समाहारः)')],
    [s('एकशेषः'), s('द्वि॰'), s('पितरौ'), s('पिता च माता च')],
  ],
  notes: ['itaretara uses dual/plural of last member; samāhāra is always neuter singular.'],
};

/**
 * Bahuvrihi markers
 */
export const bahuvrihiMarkers: ReferenceTable = {
  id: 'bahuvrihi-markers',
  title: 'Recognizing Bahuvrihi',
  titleSanskrit: 'बहुव्रीहिलक्षणानि',
  headers: [
    s('लक्षणम्'),
    s('उदाहरणम्'),
    s('विग्रहः'),
  ],
  rows: [
    [s('लिङ्गवैषम्यम्'), s('महाबाहुः'), s('बाहुशब्दः पुं॰ किन्तु पुरुषं बोधयति')],
    [s('यस्य-विग्रहः'), s('पीताम्बरः'), s('पीतम् अम्बरं यस्य सः')],
    [s('बाह्यार्थः'), s('चतुर्भुजः'), s('चतुर्भुजः = विष्णुः, न बाहुमात्रम्')],
    [s('विशेषणप्रयोगः'), s('दीर्घबाहुः राजा'), s('राजशब्दं विशिनष्टि')],
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
