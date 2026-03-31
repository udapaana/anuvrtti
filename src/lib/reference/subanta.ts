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
    s('संज्ञा'),
    s('कारक'),
    s('अर्थः'),
  ],
  rows: [
    [s('प्रथमा'), s('प्रथमा'), s('कर्ता'), s('कर्तृवाचक')],
    [s('द्वितीया'), s('द्वितीया'), s('कर्म'), s('कर्मवाचक')],
    [s('तृतीया'), s('तृतीया'), s('करण'), s('साधनवाचक')],
    [s('चतुर्थी'), s('चतुर्थी'), s('सम्प्रदान'), s('सम्प्रदानवाचक')],
    [s('पञ्चमी'), s('पञ्चमी'), s('अपादान'), s('अपादानवाचक')],
    [s('षष्ठी'), s('षष्ठी'), s('सम्बन्ध'), s('सम्बन्धवाचक')],
    [s('सप्तमी'), s('सप्तमी'), s('अधिकरण'), s('अधिकरणवाचक')],
  ],
  notes: ['sambodhanam (vocative) uses prathamā forms with special ekavacana.'],
};

/**
 * देव (masculine a-stem) paradigm
 */
export const devaParadigm: ReferenceTable = {
  id: 'deva-paradigm',
  title: 'Masculine a-stem',
  titleSanskrit: 'अकारान्त पुंलिङ्ग',
  description: 'deva (god) — the most common pattern',
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
  description: 'phala (fruit)',
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
  notes: ['prathamā and dvitīyā are identical in neuter.'],
};

/**
 * सेना (feminine aa-stem) paradigm
 */
export const senaParadigm: ReferenceTable = {
  id: 'sena-paradigm',
  title: 'Feminine aa-stem',
  titleSanskrit: 'आकारान्त स्त्रीलिङ्ग',
  description: 'senā (army)',
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
  description: 'agni (fire)',
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
  description: 'guru (teacher)',
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
  description: 'nadī (river)',
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
  description: 'rājan (king)',
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
  title: 'Abstract Sup Endings',
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
 * पितृ (ṛ-stem) paradigm
 */
export const pitrParadigm: ReferenceTable = {
  id: 'pitr-paradigm',
  title: 'ṛ-stem',
  titleSanskrit: 'ऋकारान्त',
  description: 'pitṛ (father) — ṛ-stem masculine',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰'), s('सम्बो॰')],
  rows: [
    [s('पिता'), s('पितरौ'), s('पितरः')],
    [s('पितरम्'), s('पितरौ'), s('पितॄन्')],
    [s('पित्रा'), s('पितृभ्याम्'), s('पितृभिः')],
    [s('पित्रे'), s('पितृभ्याम्'), s('पितृभ्यः')],
    [s('पितुः'), s('पितृभ्याम्'), s('पितृभ्यः')],
    [s('पितुः'), s('पित्रोः'), s('पितॄणाम्')],
    [s('पितरि'), s('पित्रोः'), s('पितृषु')],
    [s('पितः'), s('पितरौ'), s('पितरः')],
  ],
};

/**
 * मरुत् (t-stem consonant) paradigm
 */
export const marutParadigm: ReferenceTable = {
  id: 'marut-paradigm',
  title: 'Consonant t-stem',
  titleSanskrit: 'त्-कारान्त हलन्त',
  description: 'marut (wind) — t-stem masculine',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰'), s('सम्बो॰')],
  rows: [
    [s('मरुत्'), s('मरुतौ'), s('मरुतः')],
    [s('मरुतम्'), s('मरुतौ'), s('मरुतः')],
    [s('मरुता'), s('मरुद्भ्याम्'), s('मरुद्भिः')],
    [s('मरुते'), s('मरुद्भ्याम्'), s('मरुद्भ्यः')],
    [s('मरुतः'), s('मरुद्भ्याम्'), s('मरुद्भ्यः')],
    [s('मरुतः'), s('मरुतोः'), s('मरुताम्')],
    [s('मरुति'), s('मरुतोः'), s('मरुत्सु')],
    [s('मरुत्'), s('मरुतौ'), s('मरुतः')],
  ],
  notes: ['Final -t voices to -d before voiced consonants (marudbhyām).'],
};

/**
 * मनस् (s-stem neuter) paradigm
 */
export const manasParadigm: ReferenceTable = {
  id: 'manas-paradigm',
  title: 'Neuter s-stem',
  titleSanskrit: 'स्-कारान्त नपुंसक',
  description: 'manas (mind) — s-stem neuter',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰')],
  rows: [
    [s('मनः'), s('मनसी'), s('मनांसि')],
    [s('मनः'), s('मनसी'), s('मनांसि')],
    [s('मनसा'), s('मनोभ्याम्'), s('मनोभिः')],
    [s('मनसे'), s('मनोभ्याम्'), s('मनोभ्यः')],
    [s('मनसः'), s('मनोभ्याम्'), s('मनोभ्यः')],
    [s('मनसः'), s('मनसोः'), s('मनसाम्')],
    [s('मनसि'), s('मनसोः'), s('मनःसु')],
  ],
  notes: ['prathamā and dvitīyā identical in neuter. Visarga in nom. sg. from -s + vowel sandhi.'],
};

/**
 * योगिन् (in-stem) paradigm
 */
export const yoginParadigm: ReferenceTable = {
  id: 'yogin-paradigm',
  title: 'in-stem',
  titleSanskrit: 'इन्-कारान्त',
  description: 'yogin (yogi) — in-stem masculine',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰'), s('सम्बो॰')],
  rows: [
    [s('योगी'), s('योगिनौ'), s('योगिनः')],
    [s('योगिनम्'), s('योगिनौ'), s('योगिनः')],
    [s('योगिना'), s('योगिभ्याम्'), s('योगिभिः')],
    [s('योगिने'), s('योगिभ्याम्'), s('योगिभ्यः')],
    [s('योगिनः'), s('योगिभ्याम्'), s('योगिभ्यः')],
    [s('योगिनः'), s('योगिनोः'), s('योगिनाम्')],
    [s('योगिनि'), s('योगिनोः'), s('योगिषु')],
    [s('योगिन्'), s('योगिनौ'), s('योगिनः')],
  ],
};

/**
 * अस्मद् (1st person pronoun)
 */
export const asmadParadigm: ReferenceTable = {
  id: 'asmad-paradigm',
  title: '1st person (asmad)',
  titleSanskrit: 'अस्मद् (उत्तमपुरुष)',
  description: 'aham / vayam — no sambodhanam',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰')],
  rows: [
    [s('अहम्'), s('आवाम्'), s('वयम्')],
    [s('माम्'), s('आवाम्'), s('अस्मान्')],
    [s('मया'), s('आवाभ्याम्'), s('अस्माभिः')],
    [s('मह्यम्'), s('आवाभ्याम्'), s('अस्मभ्यम्')],
    [s('मत्'), s('आवाभ्याम्'), s('अस्मत्')],
    [s('मम'), s('आवयोः'), s('अस्माकम्')],
    [s('मयि'), s('आवयोः'), s('अस्मासु')],
  ],
  notes: ['No sambodhanam. dvitīyā also: mā (enclitic), nau (dual enclitic), naḥ (plural enclitic).'],
};

/**
 * युष्मद् (2nd person pronoun)
 */
export const yusmadParadigm: ReferenceTable = {
  id: 'yusmad-paradigm',
  title: '2nd person (yuṣmad)',
  titleSanskrit: 'युष्मद् (मध्यमपुरुष)',
  description: 'tvam / yūyam — no sambodhanam',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰')],
  rows: [
    [s('त्वम्'), s('युवाम्'), s('यूयम्')],
    [s('त्वाम्'), s('युवाम्'), s('युष्मान्')],
    [s('त्वया'), s('युवाभ्याम्'), s('युष्माभिः')],
    [s('तुभ्यम्'), s('युवाभ्याम्'), s('युष्मभ्यम्')],
    [s('त्वत्'), s('युवाभ्याम्'), s('युष्मत्')],
    [s('तव'), s('युवयोः'), s('युष्माकम्')],
    [s('त्वयि'), s('युवयोः'), s('युष्मासु')],
  ],
  notes: ['No sambodhanam. dvitīyā also: tvā (enclitic), vām (dual enclitic), vaḥ (plural enclitic).'],
};

/**
 * तद् (3rd person demonstrative — masculine)
 */
export const tadMascParadigm: ReferenceTable = {
  id: 'tad-masc',
  title: 'tad — masculine',
  titleSanskrit: 'तद् पुंलिङ्ग',
  description: 'saḥ / tau / te — distal demonstrative, also 3rd person pronoun',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰')],
  rows: [
    [s('सः'), s('तौ'), s('ते')],
    [s('तम्'), s('तौ'), s('तान्')],
    [s('तेन'), s('ताभ्याम्'), s('तैः')],
    [s('तस्मै'), s('ताभ्याम्'), s('तेभ्यः')],
    [s('तस्मात्'), s('ताभ्याम्'), s('तेभ्यः')],
    [s('तस्य'), s('तयोः'), s('तेषाम्')],
    [s('तस्मिन्'), s('तयोः'), s('तेषु')],
  ],
};

/**
 * तद् (3rd person demonstrative — feminine)
 */
export const tadFemParadigm: ReferenceTable = {
  id: 'tad-fem',
  title: 'tad — feminine',
  titleSanskrit: 'तद् स्त्रीलिङ्ग',
  description: 'sā / te / tāḥ',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰')],
  rows: [
    [s('सा'), s('ते'), s('ताः')],
    [s('ताम्'), s('ते'), s('ताः')],
    [s('तया'), s('ताभ्याम्'), s('ताभिः')],
    [s('तस्यै'), s('ताभ्याम्'), s('ताभ्यः')],
    [s('तस्याः'), s('ताभ्याम्'), s('ताभ्यः')],
    [s('तस्याः'), s('तयोः'), s('तासाम्')],
    [s('तस्याम्'), s('तयोः'), s('तासु')],
  ],
};

/**
 * तद् (3rd person demonstrative — neuter)
 */
export const tadNeutParadigm: ReferenceTable = {
  id: 'tad-neut',
  title: 'tad — neuter',
  titleSanskrit: 'तद् नपुंसकलिङ्ग',
  description: 'tat / te / tāni — only nom. and acc. differ from masculine',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰')],
  rows: [
    [s('तत्'), s('ते'), s('तानि')],
    [s('तत्'), s('ते'), s('तानि')],
  ],
  notes: ['All other vibhaktis identical to masculine.'],
};

/**
 * इदम् (proximate demonstrative — masculine)
 */
export const idamMascParadigm: ReferenceTable = {
  id: 'idam-masc',
  title: 'idam — masculine',
  titleSanskrit: 'इदम् पुंलिङ्ग',
  description: 'ayam / imau / ime — proximate demonstrative',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰')],
  rows: [
    [s('अयम्'), s('इमौ'), s('इमे')],
    [s('इमम्'), s('इमौ'), s('इमान्')],
    [s('अनेन'), s('आभ्याम्'), s('एभिः')],
    [s('अस्मै'), s('आभ्याम्'), s('एभ्यः')],
    [s('अस्मात्'), s('आभ्याम्'), s('एभ्यः')],
    [s('अस्य'), s('अनयोः'), s('एषाम्')],
    [s('अस्मिन्'), s('अनयोः'), s('एषु')],
  ],
};

/**
 * किम् (interrogative pronoun — masculine)
 */
export const kimMascParadigm: ReferenceTable = {
  id: 'kim-masc',
  title: 'kim — masculine',
  titleSanskrit: 'किम् पुंलिङ्ग',
  description: 'kaḥ / kau / ke — who? which?',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰')],
  rows: [
    [s('कः'), s('कौ'), s('के')],
    [s('कम्'), s('कौ'), s('कान्')],
    [s('केन'), s('काभ्याम्'), s('कैः')],
    [s('कस्मै'), s('काभ्याम्'), s('केभ्यः')],
    [s('कस्मात्'), s('काभ्याम्'), s('केभ्यः')],
    [s('कस्य'), s('कयोः'), s('केषाम्')],
    [s('कस्मिन्'), s('कयोः'), s('केषु')],
  ],
};

/**
 * किम् (interrogative pronoun — neuter)
 */
export const kimNeutParadigm: ReferenceTable = {
  id: 'kim-neut',
  title: 'kim — neuter',
  titleSanskrit: 'किम् नपुंसकलिङ्ग',
  description: 'kim / ke / kāni',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰')],
  rows: [
    [s('किम्'), s('के'), s('कानि')],
    [s('किम्'), s('के'), s('कानि')],
  ],
  notes: ['Remaining vibhaktis identical to masculine.'],
};

/**
 * यद् (relative pronoun — masculine)
 */
export const yadMascParadigm: ReferenceTable = {
  id: 'yad-masc',
  title: 'yad — masculine',
  titleSanskrit: 'यद् पुंलिङ्ग',
  description: 'yaḥ / yau / ye — who/which (relative)',
  headers: [s('एक॰'), s('द्वि॰'), s('बहु॰')],
  rowHeaders: [s('प्र॰'), s('द्वि॰'), s('तृ॰'), s('च॰'), s('पं॰'), s('ष॰'), s('स॰')],
  rows: [
    [s('यः'), s('यौ'), s('ये')],
    [s('यम्'), s('यौ'), s('यान्')],
    [s('येन'), s('याभ्याम्'), s('यैः')],
    [s('यस्मै'), s('याभ्याम्'), s('येभ्यः')],
    [s('यस्मात्'), s('याभ्याम्'), s('येभ्यः')],
    [s('यस्य'), s('ययोः'), s('येषाम्')],
    [s('यस्मिन्'), s('ययोः'), s('येषु')],
  ],
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
    description: 'Feminine nouns ending in long ā',
    tables: [senaParadigm],
  },
  {
    id: 'i-u-stems',
    title: 'I/U-stems',
    titleSanskrit: 'इ/उकारान्त',
    description: 'Stems ending in i, ī, u, ū',
    tables: [agniParadigm, guruParadigm, nadiParadigm],
  },
  {
    id: 'consonant-stems',
    title: 'Halanta',
    titleSanskrit: 'हलन्त',
    description: 'Stems ending in consonants — rājan, marut, manas, yogin',
    tables: [rajanParadigm, marutParadigm, manasParadigm, yoginParadigm],
  },
  {
    id: 'r-stems',
    title: 'R-stems',
    titleSanskrit: 'ऋकारान्त',
    description: 'Stems ending in ṛ — pitṛ (father)',
    tables: [pitrParadigm],
  },
  {
    id: 'sarvanamani',
    title: 'Pronouns',
    titleSanskrit: 'सर्वनामानि',
    description: 'Personal, demonstrative, interrogative, relative pronouns',
    tables: [asmadParadigm, yusmadParadigm, tadMascParadigm, tadFemParadigm, tadNeutParadigm, idamMascParadigm, kimMascParadigm, kimNeutParadigm, yadMascParadigm],
  },
];
