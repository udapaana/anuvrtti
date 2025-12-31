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
  title: 'Common तद्धित Pratyayas',
  titleSanskrit: 'तद्धितप्रत्ययाः',
  headers: [
    s('प्रत्यय'),
    t('Meaning'),
    t('Base → Derivative'),
  ],
  rows: [
    [s('मतुप्'), t('"possessing X"'), s('बल → बलवान्')],
    [s('इन्'), t('"having X"'), s('धन → धनिन्')],
    [s('त्व'), t('Abstract (neuter)'), s('पण्डित → पण्डित्वम्')],
    [s('ता'), t('Abstract (feminine)'), s('पण्डित → पण्डिता')],
    [s('अण्'), t('Patronymic/derivative'), s('दशरथ → दाशरथिः')],
    [s('इञ्'), t('Patronymic'), s('दक्ष → दाक्षिः')],
    [s('ठक्'), t('"relating to"'), s('विद्या → वैद्यः')],
    [s('य'), t('Abstract/relation'), s('विद्वस् → वैदुष्यम्')],
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
    t('Condition'),
    t('Example'),
    t('Meaning'),
  ],
  rows: [
    [s('मतुप्'), t('General'), s('बलवान्, धनवान्'), t('"having strength/wealth"')],
    [s('वतुप्'), t('After अ-ending'), s('मेधावी'), t('"having intelligence"')],
    [s('इन्'), t('General'), s('बलिन्, धनिन्'), t('"strong, wealthy"')],
    [s('विन्'), t('After specific stems'), s('तपस्विन्'), t('"having austerity"')],
  ],
  notes: ['मतुप् becomes -वत् after अ and -मत् elsewhere.'],
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
    t('Gender'),
    t('Example'),
    t('Meaning'),
  ],
  rows: [
    [s('त्व'), t('Neuter'), s('देवत्वम्, मनुष्यत्वम्'), t('"divinity, humanity"')],
    [s('ता'), t('Feminine'), s('देवता, मनुष्यता'), t('"divinity, humanity"')],
    [s('इमन्'), t('Masculine'), s('लघिमन्'), t('"lightness"')],
    [s('य'), t('Neuter'), s('सौन्दर्यम्'), t('"beauty"')],
  ],
  notes: ['त्व and ता have identical meaning; choice is often stylistic.'],
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
    t('Base'),
    t('Derivative'),
    t('Meaning'),
  ],
  rows: [
    [s('अण्'), s('दशरथ'), s('दाशरथिः'), t('"son of Dasharatha"')],
    [s('इञ्'), s('दक्ष'), s('दाक्षिः'), t('"descendant of Daksha"')],
    [s('ढक्'), s('उपगु'), s('औपगवः'), t('"descendant of Upagu"')],
    [s('यञ्'), s('गर्ग'), s('गार्ग्यः'), t('"descendant of Garga"')],
  ],
  notes: ['Vrddhi of first vowel is characteristic of patronymic derivation.'],
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
    t('Base'),
    t('Derivative'),
    t('Meaning'),
  ],
  rows: [
    [s('ठक् (इक)'), s('व्याकरण'), s('वैयाकरणः'), t('"grammarian"')],
    [s('अञ्'), s('विद्या'), s('वैद्यः'), t('"physician"')],
    [s('ठञ् (इक)'), s('इतिहास'), s('ऐतिहासिकम्'), t('"historical"')],
    [s('मयट्'), s('सुवर्ण'), s('सौवर्णः'), t('"golden, made of gold"')],
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
    description: '"Having X" — मतुप्, इन्, etc.',
    tables: [possessiveSuffixes],
  },
  {
    id: 'abstract',
    title: 'Abstract Nouns',
    titleSanskrit: 'भाववाचक',
    description: '"The state of X" — त्व, ता, etc.',
    tables: [abstractSuffixes],
  },
  {
    id: 'patronymic',
    title: 'Patronymic',
    titleSanskrit: 'अपत्यार्थक',
    description: '"Descendant of X" — अण्, इञ्, etc.',
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
