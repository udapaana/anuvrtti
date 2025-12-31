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
    t('Role'),
    s('विभक्ति'),
    t('Definition'),
    t('Example'),
  ],
  rows: [
    [s('कर्ता'), t('Agent'), s('प्रथमा'), t('Independent doer'), s('रामः गच्छति')],
    [s('कर्म'), t('Object'), s('द्वितीया'), t('Most desired by agent'), s('रामः फलं खादति')],
    [s('करण'), t('Instrument'), s('तृतीया'), t('Most effective means'), s('रामः दण्डेन हन्ति')],
    [s('सम्प्रदान'), t('Recipient'), s('चतुर्थी'), t('To whom given'), s('रामः विप्राय ददाति')],
    [s('अपादान'), t('Source'), s('पञ्चमी'), t('Fixed point of departure'), s('वृक्षात् पत्रं पतति')],
    [s('अधिकरण'), t('Locus'), s('सप्तमी'), t('Location of action'), s('कटे आस्ते')],
  ],
  notes: ['षष्ठी expresses सम्बन्ध (relation), not a कारक.'],
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
    t('Translation'),
  ],
  rows: [
    [s('कर्ता'), s('स्वतन्त्रः कर्ता'), t('"The independent one is kartā"')],
    [s('कर्म'), s('कर्तुरीप्सिततमं कर्म'), t('"What the agent most desires is karma"')],
    [s('करण'), s('साधकतमं करणम्'), t('"The most effective means is karaṇa"')],
    [s('सम्प्रदान'), s('कर्मणा यमभिप्रैति स सम्प्रदानम्'), t('"To whom one gives is sampradāna"')],
    [s('अपादान'), s('ध्रुवमपायेऽपादानम्'), t('"The fixed point in separation is apādāna"')],
    [s('अधिकरण'), s('आधारोऽधिकरणम्'), t('"The support/locus is adhikaraṇa"')],
  ],
};

/**
 * Special uses of द्वितीया
 */
export const dvitiyaSpecial: ReferenceTable = {
  id: 'dvitiya-special',
  title: 'Special Uses of द्वितीया',
  titleSanskrit: 'द्वितीयाविशेषाः',
  headers: [
    t('Context'),
    s('सूत्र'),
    t('Example'),
  ],
  rows: [
    [t('Duration'), s('कालाध्वनोरत्यन्तसंयोगे'), s('मासं वसति = lives for a month')],
    [t('Distance'), s('कालाध्वनोरत्यन्तसंयोगे'), s('क्रोशं गच्छति = goes a krosha')],
    [t('With अभि/प्रति'), s('अभिनिविशश्च'), s('ग्रामं प्रति = towards the village')],
    [t('Double accusative'), s('द्विकर्मकाः'), s('गां दोग्धि पयः = milks milk from cow')],
  ],
};

/**
 * Special uses of तृतीया
 */
export const tritiyaSpecial: ReferenceTable = {
  id: 'tritiya-special',
  title: 'Special Uses of तृतीया',
  titleSanskrit: 'तृतीयाविशेषाः',
  headers: [
    t('Context'),
    t('Meaning'),
    t('Example'),
  ],
  rows: [
    [t('Agent in passive'), t('By whom'), s('रामेण हतः = killed by Rama')],
    [t('Accompaniment'), t('Together with'), s('पुत्रेण सह = with son')],
    [t('Characteristic'), t('Having, endowed with'), s('विद्यया युक्तः = endowed with knowledge')],
    [t('Cause'), t('Because of'), s('दुःखेन रोदिति = cries from sorrow')],
    [t('Price'), t('For (exchange)'), s('शतेन क्रीतम् = bought for 100')],
  ],
};

/**
 * Special uses of चतुर्थी
 */
export const chaturthiSpecial: ReferenceTable = {
  id: 'chaturthi-special',
  title: 'Special Uses of चतुर्थी',
  titleSanskrit: 'चतुर्थीविशेषाः',
  headers: [
    t('Context'),
    t('Meaning'),
    t('Example'),
  ],
  rows: [
    [t('Purpose'), t('For the sake of'), s('यज्ञाय = for sacrifice')],
    [t('With नमः'), t('Salutation'), s('विष्णवे नमः = obeisance to Vishnu')],
    [t('With स्वस्ति'), t('Welfare'), s('गोभ्यः स्वस्ति = welfare to cows')],
    [t('Liking/Disliking'), t('Object of emotion'), s('मह्यं रोचते = pleases me')],
  ],
};

/**
 * Special uses of पञ्चमी
 */
export const panchamiSpecial: ReferenceTable = {
  id: 'panchami-special',
  title: 'Special Uses of पञ्चमी',
  titleSanskrit: 'पञ्चमीविशेषाः',
  headers: [
    t('Context'),
    t('Meaning'),
    t('Example'),
  ],
  rows: [
    [t('Separation'), t('From'), s('ग्रामात् आगच्छति = comes from village')],
    [t('Cause'), t('Out of, because of'), s('भयात् पलायते = flees from fear')],
    [t('Comparison'), t('Than'), s('रामात् बलवान् = stronger than Rama')],
    [t('Protection'), t('From (danger)'), s('व्याघ्रात् बिभेति = fears from tiger')],
  ],
};

/**
 * Special uses of षष्ठी
 */
export const shashthiSpecial: ReferenceTable = {
  id: 'shashthi-special',
  title: 'Uses of षष्ठी',
  titleSanskrit: 'षष्ठीविशेषाः',
  description: 'षष्ठी expresses relation (सम्बन्ध), not a कारक',
  headers: [
    t('Relation Type'),
    t('Meaning'),
    t('Example'),
  ],
  rows: [
    [t('Possession'), t('Of, belonging to'), s('राज्ञः पुत्रः = king\'s son')],
    [t('Part-whole'), t('Of (partitive)'), s('वृक्षस्य शाखा = branch of tree')],
    [t('With कृत्'), t('Agent of verbal noun'), s('तस्य गमनम् = his going')],
    [t('With तद्धित'), t('Derivation base'), s('राज्ञः पुत्रः = son of king')],
  ],
};

/**
 * Special uses of सप्तमी
 */
export const saptamiSpecial: ReferenceTable = {
  id: 'saptami-special',
  title: 'Special Uses of सप्तमी',
  titleSanskrit: 'सप्तमीविशेषाः',
  headers: [
    t('Context'),
    t('Meaning'),
    t('Example'),
  ],
  rows: [
    [t('Location (place)'), t('In, on, at'), s('गृहे तिष्ठति = stands in house')],
    [t('Location (time)'), t('At, during'), s('प्रातः = in the morning')],
    [t('Topic/Regarding'), t('In the matter of'), s('व्याकरणे निपुणः = skilled in grammar')],
    [t('Locative absolute'), t('When, while'), s('सूर्ये उदिते = when sun has risen')],
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
    id: 'dvitiya',
    title: 'द्वितीया Uses',
    titleSanskrit: 'द्वितीया',
    tables: [dvitiyaSpecial],
  },
  {
    id: 'tritiya',
    title: 'तृतीया Uses',
    titleSanskrit: 'तृतीया',
    tables: [tritiyaSpecial],
  },
  {
    id: 'chaturthi',
    title: 'चतुर्थी Uses',
    titleSanskrit: 'चतुर्थी',
    tables: [chaturthiSpecial],
  },
  {
    id: 'panchami',
    title: 'पञ्चमी Uses',
    titleSanskrit: 'पञ्चमी',
    tables: [panchamiSpecial],
  },
  {
    id: 'shashthi',
    title: 'षष्ठी Uses',
    titleSanskrit: 'षष्ठी',
    tables: [shashthiSpecial],
  },
  {
    id: 'saptami',
    title: 'सप्तमी Uses',
    titleSanskrit: 'सप्तमी',
    tables: [saptamiSpecial],
  },
];
