/**
 * The ten categories of the guided path through the Aṣṭādhyāyī, in the order
 * they are meant to be taken.
 *
 * This list used to live on the home page, where it printed as a forty-link
 * tree on the threshold. It belongs to Reference now: a path is a syllabus
 * over the sūtras, so it sits beside them as `/ref?mode=path`.
 */
export const pathCategories: {
  id: string;
  /** IAST, transliterated to the display script at render time. */
  sanskrit: string;
  english: string;
}[] = [
  { id: "foundation", sanskrit: "ādhāraḥ", english: "foundations" },
  { id: "tinganta", sanskrit: "tiṅanta", english: "verbs" },
  { id: "subanta", sanskrit: "subanta", english: "nouns" },
  { id: "karaka", sanskrit: "kāraka", english: "cases" },
  { id: "kridanta", sanskrit: "kṛdanta", english: "participles" },
  { id: "taddhita", sanskrit: "taddhita", english: "derivation" },
  { id: "sandhi", sanskrit: "sandhi", english: "sandhi" },
  { id: "samasa", sanskrit: "samāsa", english: "compounds" },
  { id: "prakarana", sanskrit: "prakaraṇa", english: "deep dives" },
  { id: "prakriya", sanskrit: "prakriyā", english: "derivations" },
];
