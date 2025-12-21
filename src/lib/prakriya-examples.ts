/**
 * Mapping of sutras to example derivations that demonstrate them.
 * Used in learning paths to show contextual prakriya examples.
 */

import type {
  Gana,
  Lakara,
  Prayoga,
  Purusha,
  Vacana,
  Linga,
  Vibhakti,
} from "./prakriya";

export interface TinantaExample {
  type: "tinanta";
  dhatu: string; // aupadeshika in SLP1
  gana: Gana;
  lakara: Lakara;
  prayoga?: Prayoga;
  purusha?: Purusha;
  vacana?: Vacana;
  /** Label parts in SLP1 for proper transliteration: [input, lakara, output] */
  labelParts: [string, string, string];
  /** Optional note (in English) */
  note?: string;
}

export interface SubantaExample {
  type: "subanta";
  pratipadika: string; // in SLP1
  linga: Linga;
  vibhakti: Vibhakti;
  vacana: Vacana;
  /** Label parts in SLP1 for proper transliteration: [input, output] */
  labelParts: [string, string];
  /** Optional note (in English) */
  note?: string;
}

export type PrakriyaExample = TinantaExample | SubantaExample;

/**
 * Maps sutra IDs to example derivations that showcase that sutra.
 * The highlightSutra will be the sutra ID itself.
 */
export const SUTRA_EXAMPLES: Record<string, PrakriyaExample> = {
  // === Samjna (technical terms) ===

  // 1.1.1 vRddhir Ad aic - vrddhi vowels
  "1.1.1": {
    type: "subanta",
    pratipadika: "upagu",
    linga: "Pum",
    vibhakti: "Prathama",
    vacana: "Eka",
    labelParts: ["upagu", "OpagavaH"],
    note: "vṛddhi in taddhita",
  },

  // 1.1.2 ad eN guNaH - guna vowels
  "1.1.2": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["BU", "law", "Bavati"],
    note: "guṇa of ū",
  },

  // 1.1.3 iko guNavRddhI - guna/vrddhi replace ik
  "1.1.3": {
    type: "tinanta",
    dhatu: "RI\\Y",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["nI", "law", "nayati"],
    note: "guṇa of ī",
  },

  // === Lakara (tenses/moods) ===

  // 3.2.123 vartamAne laT - present tense
  "3.2.123": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["BU", "law", "Bavati"],
  },

  // 3.2.111 aNadyatane laN - imperfect
  "3.2.111": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lan",
    labelParts: ["BU", "laN", "aBavat"],
  },

  // 3.2.115 parokSe liT - perfect
  "3.2.115": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lit",
    labelParts: ["BU", "liw", "baBUva"],
  },

  // 3.3.13 lRTaH sad vA - simple future
  "3.3.13": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lrt",
    labelParts: ["BU", "lfw", "Bavizyati"],
  },

  // 3.3.161 vidhinimantraNa... liN - optative
  "3.3.161": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "VidhiLin",
    labelParts: ["BU", "liN", "Bavet"],
  },

  // 3.3.162 loT ca - imperative
  "3.3.162": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lot",
    labelParts: ["BU", "low", "Bavatu"],
  },

  // === Vikarana (class affixes) ===

  // 3.1.68 kartari Sap - shap for bhvAdi
  "3.1.68": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["BU", "Sap", "Bavati"],
  },

  // 3.1.77 tudAdibhyaH SaH - sha for tudAdi
  "3.1.77": {
    type: "tinanta",
    dhatu: "tu\\da~^",
    gana: "Tudadi",
    lakara: "Lat",
    labelParts: ["tud", "Sa", "tudati"],
  },

  // 3.1.79 tanAdikRJbhya uH - u for tanAdi
  "3.1.79": {
    type: "tinanta",
    dhatu: "tanu~^",
    gana: "Tanadi",
    lakara: "Lat",
    labelParts: ["tan", "u", "tanoti"],
  },

  // 3.1.81 kryAdibyaH SnA - shnA for kryAdi
  "3.1.81": {
    type: "tinanta",
    dhatu: "qukrI\\Y",
    gana: "Kryadi",
    lakara: "Lat",
    labelParts: ["krI", "SnA", "krIRAti"],
  },

  // === Guna/Vrddhi ===

  // 7.3.84 sArvadhAtukArdhadhAtukayoH - guna before sArvadhAtuka/ArdhadhAtuka
  "7.3.84": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["BU", "law", "Bavati"],
    note: "guṇa before ti",
  },

  // === Sandhi ===

  // 6.1.78 eco'yavAyAvaH - e/o → ay/av before vowel
  "6.1.78": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["Bo", "a", "Bavati"],
    note: "o → av before vowel",
  },

  // 6.1.77 iko yaN aci - i/u/R/L → y/v/r/l before vowel
  "6.1.77": {
    type: "tinanta",
    dhatu: "RI\\Y",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["ne", "a", "nayati"],
    note: "e → ay before vowel",
  },

  // === Personal endings ===

  // 3.4.78 tiptasjhi... - parasmaipada endings
  "3.4.78": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["BU", "tip", "Bavati"],
    note: "3rd sg. parasmai",
  },

  // === It-samjna (markers) ===

  // 1.3.2 upadeśe'j anunAsika it - nasal vowels are it
  "1.3.2": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["BU", "law", "Bavati"],
    note: "anunāsika dropped",
  },

  // 1.3.3 hal antyam - final consonants are it
  "1.3.3": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["BU", "tip", "Bavati"],
    note: "p is it",
  },

  // 1.3.9 tasya lopaH - it letters are elided
  "1.3.9": {
    type: "tinanta",
    dhatu: "BU",
    gana: "Bhvadi",
    lakara: "Lat",
    labelParts: ["BU", "law", "Bavati"],
    note: "it-letters elided",
  },
};

/**
 * Get example derivation config for a sutra
 */
export function getExampleForSutra(sutraId: string): PrakriyaExample | null {
  return SUTRA_EXAMPLES[sutraId] || null;
}

/**
 * Check if a sutra has an example derivation
 */
export function hasExample(sutraId: string): boolean {
  return sutraId in SUTRA_EXAMPLES;
}
