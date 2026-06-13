/**
 * Derive the addressable NOTES of a graded reading, using the SAME id scheme
 * the body markers use (GradedReading.svelte). The notes pane renders these;
 * ids must match so selecting on one side highlights the other.
 */
export interface ReadingNote {
  id: string;
  kind: 'term' | 'cite' | 'vyakhya';
  label: string;
  en?: string;
  role?: string;
}

export function notesFor(reading: any): ReadingNote[] {
  const out: ReadingNote[] = [];
  (reading.words ?? []).forEach((w: any, wi: number) => {
    (w.notes ?? []).forEach((n: any, ni: number) => {
      const id = `${reading.id}-w${wi}n${ni}`;
      if (n.term) out.push({ id, kind: 'term', label: n.term, en: n.en ?? '' });
      else if (n.cite) out.push({ id, kind: 'cite', label: n.cite, role: n.role ?? '' });
    });
  });
  if (reading.vyakhya) {
    out.push({ id: `${reading.id}-vy`, kind: 'vyakhya', label: reading.sentence, en: reading.vyakhya_en ?? '' });
  }
  return out;
}
