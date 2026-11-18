/**
 * The join between a प्रयोग entry and the whole texts' words.
 *
 * build-usage-texts.ts files every text word under the key of the /usage entry
 * it belongs to, and the page looks the entry up by the same key: kind, the
 * subject (the lemma), and what pins the grid — the लिङ्ग of a noun, the लकार
 * of a verb. One function, so the two cannot drift.
 */
export function entryKey(kind: string, subject: string, pin: string | null | undefined): string {
  return `${kind}:${subject}|${pin ?? ''}`;
}

/** One example of a cell in a whole text. */
export type TextExample = {
  /** text id, part id, section id — enough to link to the section */
  t: string;
  p: string;
  s: string;
  form: string;
  /** the words either side, as written */
  phrase: string;
};

/** A cell's whole-text attestations: how many, and up to three to show. */
export type TextCell = { n: number; ex: TextExample[] };

export type UsageTexts = {
  generated: string;
  /** text id → its Devanagari title, for the examples' links */
  titles: Record<string, string>;
  /** entryKey → cellKey → the cell's attestations */
  entries: Record<string, Record<string, TextCell>>;
};
