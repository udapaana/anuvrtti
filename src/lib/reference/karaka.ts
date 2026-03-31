/**
 * Karaka (Semantic Roles) Reference Data
 * Quick-lookup for case usage and karaka relations
 */

import type { ReferenceTable, ReferenceSection } from './types';

const s = (text: string, tooltip?: string) => ({ text, sanskrit: true, tooltip });
const t = (text: string, tooltip?: string) => ({ text, sanskrit: false, tooltip });

/**
 * Six Karakas
 */
export const sixKarakas: ReferenceTable = {
  id: 'six-karakas',
  title: 'The Six Karakas',
  titleSanskrit: 'षट्कारकाणि',
  description: 'Semantic roles in Sanskrit grammar',
  headers: [
    s('कारक'),
    s('अर्थः'),
    s('विभक्ति'),
    s('लक्षणम्'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('कर्ता'), s('स्वतन्त्रः क्रियाकारकः'), s('प्रथमा'), s('स्वतन्त्रः कर्ता'), s('रामः गच्छति')],
    [s('कर्म'), s('ईप्सिततमः'), s('द्वितीया'), s('कर्तुः ईप्सिततमम्'), s('रामः फलं खादति')],
    [s('करण'), s('साधकतमः'), s('तृतीया'), s('साधनम्'), s('रामः दण्डेन हन्ति')],
    [s('सम्प्रदान'), s('दानलक्ष्यम्'), s('चतुर्थी'), s('दानस्य लक्ष्यम्'), s('रामः विप्राय ददाति')],
    [s('अपादान'), s('ध्रुवबिन्दुः'), s('पञ्चमी'), s('वियोगस्थानम्'), s('वृक्षात् पत्रं पतति')],
    [s('अधिकरण'), s('आधारः'), s('सप्तमी'), s('क्रियाधारः'), s('कटे आस्ते')],
  ],
  notes: ['ṣaṣṭhī expresses sambandha (relation), not a kāraka.'],
};

/**
 * Karaka definitions (sutras)
 */
export const karakaDefinitions: ReferenceTable = {
  id: 'karaka-definitions',
  title: 'Karaka Definitions',
  titleSanskrit: 'कारकसूत्राणि',
  headers: [
    s('कारक'),
    s('सूत्र'),
    s('अर्थः'),
  ],
  rows: [
    [s('कर्ता'), s('स्वतन्त्रः कर्ता'), s('स्वतन्त्रः = कर्ता')],
    [s('कर्म'), s('कर्तुरीप्सिततमं कर्म'), s('कर्तुः ईप्सिततमम् = कर्म')],
    [s('करण'), s('साधकतमं करणम्'), s('साधकतमम् = करणम्')],
    [s('सम्प्रदान'), s('कर्मणा यमभिप्रैति स सम्प्रदानम्'), s('यं कर्मणा अभिप्रैति = सम्प्रदानम्')],
    [s('अपादान'), s('ध्रुवमपायेऽपादानम्'), s('अपाये ध्रुवम् = अपादानम्')],
    [s('अधिकरण'), s('आधारोऽधिकरणम्'), s('आधारः = अधिकरणम्')],
  ],
};

/**
 * Special uses of प्रथमा
 */
export const prathamaSpecial: ReferenceTable = {
  id: 'prathama-special',
  title: 'Special Uses of prathamā',
  titleSanskrit: 'प्रथमाविशेषाः',
  headers: [
    s('प्रयोगः'),
    s('अर्थः'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('कर्ता'), s('क्रियायाः स्वतन्त्रः'), s('रामः गच्छति', 'Rama goes')],
    [s('सम्बोधनम्'), s('आमन्त्रणम्'), s('हे राम!', 'O Rama!')],
    [s('नाम-प्रयोगः'), s('परिचयः'), s('अयं रामः', 'this is Rama')],
    [s('कर्मणि-कर्ता'), s('कर्मणि-प्रयोगे कर्ता'), s('रामेण फलं खाद्यते', 'fruit is eaten by Rama')],
  ],
};

/**
 * Special uses of द्वितीया
 */
export const dvitiyaSpecial: ReferenceTable = {
  id: 'dvitiya-special',
  title: 'Special Uses of dvitīyā',
  titleSanskrit: 'द्वितीयाविशेषाः',
  headers: [
    s('प्रयोगः'),
    s('सूत्र'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('कालावधिः'), s('कालाध्वनोरत्यन्तसंयोगे'), s('मासं वसति', 'lives for a month')],
    [s('मार्गावधिः'), s('कालाध्वनोरत्यन्तसंयोगे'), s('क्रोशं गच्छति', 'goes a krosha')],
    [s('अभि/प्रति-योगः'), s('अभिनिविशश्च'), s('ग्रामं प्रति', 'towards the village')],
    [s('द्विकर्मकः'), s('द्विकर्मकाः'), s('गां दोग्धि पयः', 'milks milk from cow')],
  ],
};

/**
 * Special uses of तृतीया
 */
export const tritiyaSpecial: ReferenceTable = {
  id: 'tritiya-special',
  title: 'Special Uses of tṛtīyā',
  titleSanskrit: 'तृतीयाविशेषाः',
  headers: [
    s('प्रयोगः'),
    s('अर्थः'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('कर्मणि-कर्ता'), s('येन क्रियते'), s('रामेण हतः', 'killed by Rama')],
    [s('सहार्थः'), s('सहयोगः'), s('पुत्रेण सह', 'with son')],
    [s('विशेषणम्'), s('युक्तः/सहितः'), s('विद्यया युक्तः', 'endowed with knowledge')],
    [s('हेतुः'), s('कारणम्'), s('दुःखेन रोदिति', 'cries from sorrow')],
    [s('मूल्यम्'), s('परिवर्तने'), s('शतेन क्रीतम्', 'bought for 100')],
  ],
};

/**
 * Special uses of चतुर्थी
 */
export const chaturthiSpecial: ReferenceTable = {
  id: 'chaturthi-special',
  title: 'Special Uses of caturthī',
  titleSanskrit: 'चतुर्थीविशेषाः',
  headers: [
    s('प्रयोगः'),
    s('अर्थः'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('प्रयोजनम्'), s('अर्थाय'), s('यज्ञाय', 'for sacrifice')],
    [s('नमः-योगः'), s('नमस्कारः'), s('विष्णवे नमः', 'obeisance to Vishnu')],
    [s('स्वस्ति-योगः'), s('मङ्गलम्'), s('गोभ्यः स्वस्ति', 'welfare to cows')],
    [s('रुच्यादि-योगः'), s('मनोभावः'), s('मह्यं रोचते', 'pleases me')],
  ],
};

/**
 * Special uses of पञ्चमी
 */
export const panchamiSpecial: ReferenceTable = {
  id: 'panchami-special',
  title: 'Special Uses of pañcamī',
  titleSanskrit: 'पञ्चमीविशेषाः',
  headers: [
    s('प्रयोगः'),
    s('अर्थः'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('वियोगः'), s('यतः'), s('ग्रामात् आगच्छति', 'comes from village')],
    [s('हेतुः'), s('कारणम्'), s('भयात् पलायते', 'flees from fear')],
    [s('तुलना'), s('उपमा'), s('रामात् बलवान्', 'stronger than Rama')],
    [s('भयम्'), s('भयस्थानम्'), s('व्याघ्रात् बिभेति', 'fears tiger')],
  ],
};

/**
 * Special uses of षष्ठी
 */
export const shashthiSpecial: ReferenceTable = {
  id: 'shashthi-special',
  title: 'Uses of ṣaṣṭhī',
  titleSanskrit: 'षष्ठीविशेषाः',
  description: 'ṣaṣṭhī expresses relation (sambandha), not a kāraka',
  headers: [
    s('प्रयोगः'),
    s('अर्थः'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('स्वत्वम्'), s('सम्बन्धः'), s('राज्ञः पुत्रः', "king's son")],
    [s('अवयवः'), s('अंशिनः अंशः'), s('वृक्षस्य शाखा', 'branch of tree')],
    [s('कृत्-योगः'), s('भाव-कर्ता'), s('तस्य गमनम्', 'his going')],
    [s('तद्धित-योगः'), s('प्रकृतिः'), s('राज्ञः पुत्रः', 'son of king')],
  ],
};

/**
 * Special uses of सप्तमी
 */
export const saptamiSpecial: ReferenceTable = {
  id: 'saptami-special',
  title: 'Special Uses of saptamī',
  titleSanskrit: 'सप्तमीविशेषाः',
  headers: [
    s('प्रयोगः'),
    s('अर्थः'),
    s('उदाहरणम्'),
  ],
  rows: [
    [s('देशाधिकरणम्'), s('यत्र'), s('गृहे तिष्ठति', 'stands in house')],
    [s('कालाधिकरणम्'), s('यदा'), s('प्रातः', 'in the morning')],
    [s('विषये'), s('अधिकृत्य'), s('व्याकरणे निपुणः', 'skilled in grammar')],
    [s('सति-सप्तमी'), s('पूर्वकालिकः'), s('सूर्ये उदिते', 'when sun has risen')],
  ],
};

/**
 * Karaka reference sections
 */
export const karakaSections: ReferenceSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    titleSanskrit: 'परिचयः',
    tables: [sixKarakas, karakaDefinitions],
  },
  {
    id: 'prathama',
    title: 'prathamā',
    titleSanskrit: 'प्रथमा',
    tables: [prathamaSpecial],
  },
  {
    id: 'dvitiya',
    title: 'dvitīyā',
    titleSanskrit: 'द्वितीया',
    tables: [dvitiyaSpecial],
  },
  {
    id: 'tritiya',
    title: 'tṛtīyā',
    titleSanskrit: 'तृतीया',
    tables: [tritiyaSpecial],
  },
  {
    id: 'chaturthi',
    title: 'caturthī',
    titleSanskrit: 'चतुर्थी',
    tables: [chaturthiSpecial],
  },
  {
    id: 'panchami',
    title: 'pañcamī',
    titleSanskrit: 'पञ्चमी',
    tables: [panchamiSpecial],
  },
  {
    id: 'shashthi',
    title: 'ṣaṣṭhī',
    titleSanskrit: 'षष्ठी',
    tables: [shashthiSpecial],
  },
  {
    id: 'saptami',
    title: 'saptamī',
    titleSanskrit: 'सप्तमी',
    tables: [saptamiSpecial],
  },
];
