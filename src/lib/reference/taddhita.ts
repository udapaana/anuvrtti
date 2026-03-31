/**
 * Taddhita (Secondary Derivation) Reference Data
 */

import type { ReferenceTable, ReferenceSection } from './types';

const s = (text: string, tooltip?: string) => ({ text, sanskrit: true, tooltip });
const t = (text: string, tooltip?: string) => ({ text, sanskrit: false, tooltip });

/**
 * Common taddhita overview
 */
export const taddhitaOverview: ReferenceTable = {
  id: 'taddhita-overview',
  title: 'Common taddhita Pratyayas',
  titleSanskrit: 'तद्धितप्रत्ययाः',
  headers: [
    s('प्रत्यय'),
    s('अर्थः'),
    s('प्रकृति → व्युत्पन्नम्'),
  ],
  rows: [
    [s('मतुप्'), s('मत्वर्थः — यस्य अस्ति'), s('बल → बलवान्')],
    [s('इन्'), s('मत्वर्थः — यस्य अस्ति'), s('धन → धनिन्')],
    [s('त्व'), s('भाववाचकः — नपुं॰'), s('पण्डित → पण्डित्वम्')],
    [s('ता'), s('भाववाचकः — स्त्री॰'), s('पण्डित → पण्डिता')],
    [s('अण्'), s('अपत्यार्थः'), s('दशरथ → दाशरथिः')],
    [s('इञ्'), s('अपत्यार्थः'), s('दक्ष → दाक्षिः')],
    [s('ठक्'), s('सम्बन्धार्थः'), s('विद्या → वैद्यः')],
    [s('य'), s('भाव/सम्बन्धः'), s('विद्वस् → वैदुष्यम्')],
  ],
};

/**
 * Possessive suffixes
 */
export const possessiveSuffixes: ReferenceTable = {
  id: 'possessive-suffixes',
  title: 'Possessive Suffixes',
  titleSanskrit: 'मत्वर्थीयाः',
  description: '"Having X, possessing X"',
  headers: [
    s('प्रत्यय'),
    s('नियमः'),
    s('उदाहरणम्'),
    s('अर्थः'),
  ],
  rows: [
    [s('मतुप्'), s('सामान्यः'), s('बलवान्, धनवान्'), s('बलं विद्यते यस्य')],
    [s('वतुप्'), s('अकारान्तात्'), s('मेधावी'), s('मेधा विद्यते यस्य')],
    [s('इन्'), s('सामान्यः'), s('बलिन्, धनिन्'), s('बलं/धनं यस्य')],
    [s('विन्'), s('विशिष्टप्रकृतेः'), s('तपस्विन्'), s('तपो यस्य')],
  ],
  notes: ['matup becomes -vat after a and -mat elsewhere.'],
};

/**
 * Abstract noun suffixes
 */
export const abstractSuffixes: ReferenceTable = {
  id: 'abstract-suffixes',
  title: 'Abstract Noun Suffixes',
  titleSanskrit: 'भाववाचकाः',
  description: '"The quality/state of being X"',
  headers: [
    s('प्रत्यय'),
    s('लिङ्गम्'),
    s('उदाहरणम्'),
    s('अर्थः'),
  ],
  rows: [
    [s('त्व'), s('नपुंसकलिङ्गः'), s('देवत्वम्, मनुष्यत्वम्'), s('देवस्य भावः')],
    [s('ता'), s('स्त्रीलिङ्गः'), s('देवता, मनुष्यता'), s('देवस्य भावः')],
    [s('इमन्'), s('पुंलिङ्गः'), s('लघिमन्'), s('लघोः भावः')],
    [s('य'), s('नपुंसकलिङ्गः'), s('सौन्दर्यम्'), s('सुन्दरस्य भावः')],
  ],
  notes: ['tva and tā have identical meaning; choice is often stylistic.'],
};

/**
 * Patronymic/derivative suffixes
 */
export const patronymicSuffixes: ReferenceTable = {
  id: 'patronymic-suffixes',
  title: 'Patronymic Suffixes',
  titleSanskrit: 'अपत्यार्थकाः',
  description: '"Descendant of X"',
  headers: [
    s('प्रत्यय'),
    s('प्रकृतिः'),
    s('व्युत्पन्नम्'),
    s('अर्थः'),
  ],
  rows: [
    [s('अण्'), s('दशरथ'), s('दाशरथिः'), s('दशरथस्य पुत्रः')],
    [s('इञ्'), s('दक्ष'), s('दाक्षिः'), s('दक्षस्य अपत्यम्')],
    [s('ढक्'), s('उपगु'), s('औपगवः'), s('उपगोः अपत्यम्')],
    [s('यञ्'), s('गर्ग'), s('गार्ग्यः'), s('गर्गस्य अपत्यम्')],
  ],
  notes: ['Vṛddhi of first vowel is characteristic of patronymic derivation.'],
};

/**
 * Relational suffixes
 */
export const relationalSuffixes: ReferenceTable = {
  id: 'relational-suffixes',
  title: 'Relational Suffixes',
  titleSanskrit: 'तद्धितान्तराणि',
  description: '"Relating to X, connected with X"',
  headers: [
    s('प्रत्यय'),
    s('प्रकृतिः'),
    s('व्युत्पन्नम्'),
    s('अर्थः'),
  ],
  rows: [
    [s('ठक् (इक)'), s('व्याकरण'), s('वैयाकरणः'), s('व्याकरणे निपुणः')],
    [s('अञ्'), s('विद्या'), s('वैद्यः'), s('विद्यया वृत्तिः')],
    [s('ठञ् (इक)'), s('इतिहास'), s('ऐतिहासिकम्'), s('इतिहासे भवम्')],
    [s('मयट्'), s('सुवर्ण'), s('सौवर्णः'), s('सुवर्णेन निर्मितम्')],
  ],
};

/**
 * Taddhita reference sections
 */
export const taddhitaSections: ReferenceSection[] = [
  {
    id: 'overview',
    title: 'Overview',
    titleSanskrit: 'परिचयः',
    tables: [taddhitaOverview],
  },
  {
    id: 'possessive',
    title: 'Possessive',
    titleSanskrit: 'मत्वर्थीय',
    description: '"Having X" — matup, in, etc.',
    tables: [possessiveSuffixes],
  },
  {
    id: 'abstract',
    title: 'Abstract Nouns',
    titleSanskrit: 'भाववाचक',
    description: '"The state of X" — tva, tā, etc.',
    tables: [abstractSuffixes],
  },
  {
    id: 'patronymic',
    title: 'Patronymic',
    titleSanskrit: 'अपत्यार्थक',
    description: '"Descendant of X" — aṇ, iñ, etc.',
    tables: [patronymicSuffixes],
  },
  {
    id: 'relational',
    title: 'Relational',
    titleSanskrit: 'सम्बन्धार्थक',
    description: '"Connected with X"',
    tables: [relationalSuffixes],
  },
];
