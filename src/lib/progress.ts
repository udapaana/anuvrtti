/**
 * Reading progress, kept in this browser.
 *
 * Two records, both in localStorage, both best-effort (a private window or a
 * full quota simply forgets):
 *
 *   anuvrtti:reader-progress   the graded reader: the reading you were on, and
 *                              every reading you have scrolled past
 *   anuvrtti:text-read:<id>    a whole text: every section you have scrolled
 *                              past (where you stopped is text-progress:<id>,
 *                              kept by the reader since before this module)
 *
 * "Read" means what the reader's `seen` already meant: the card has gone off
 * the top of the screen. It is the quiz's deck too, so keeping it means the
 * deck survives a visit.
 */

const READER_KEY = 'anuvrtti:reader-progress';
const textReadKey = (id: string) => `anuvrtti:text-read:${id}`;

function read<T>(key: string): T | null {
  try {
    const v = localStorage.getItem(key);
    return v ? (JSON.parse(v) as T) : null;
  } catch {
    return null;
  }
}
function write(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* forgotten, not broken */
  }
}

export type ReaderProgress = { at: string | null; read: string[] };

export function loadReaderProgress(): ReaderProgress {
  const p = read<ReaderProgress>(READER_KEY);
  return { at: p?.at ?? null, read: Array.isArray(p?.read) ? p!.read : [] };
}
export function saveReaderProgress(at: string | null, readIds: Iterable<string>) {
  write(READER_KEY, { at, read: [...readIds] });
}

export function loadTextRead(id: string): Set<string> {
  const v = read<string[]>(textReadKey(id));
  return new Set(Array.isArray(v) ? v : []);
}
/** Add a part's read sections to the text's record (other parts' are kept). */
export function saveTextRead(id: string, sections: Iterable<string>) {
  const all = loadTextRead(id);
  let grew = false;
  for (const s of sections) if (!all.has(s)) { all.add(s); grew = true; }
  if (grew) write(textReadKey(id), [...all]);
}

/*
  Carrying it elsewhere. Without accounts the only way to another device is a
  file: every key this site keeps (they all begin "anuvrtti"), written out as
  JSON and read back in. Settings, the deck and the workbook travel with it.
*/
const OURS = /^anuvrtti/;
export type ProgressFile = { app: 'anuvrtti'; version: 1; saved: string; data: Record<string, string> };

export function exportProgress(): ProgressFile {
  const data: Record<string, string> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && OURS.test(k)) data[k] = localStorage.getItem(k) ?? '';
  }
  return { app: 'anuvrtti', version: 1, saved: new Date().toISOString(), data };
}

/** Restore a file from exportProgress. Returns how many entries were written. */
export function importProgress(file: unknown): number {
  const f = file as Partial<ProgressFile>;
  if (!f || f.app !== 'anuvrtti' || typeof f.data !== 'object' || !f.data) {
    throw new Error('not an anuvrtti progress file');
  }
  let n = 0;
  for (const [k, v] of Object.entries(f.data)) {
    if (!OURS.test(k) || typeof v !== 'string') continue;
    localStorage.setItem(k, v);
    n++;
  }
  return n;
}

/*
  A line rearranged into the reader's own order (Arrange.svelte): the pada
  tokens' indices, in the order placed. Kept like the rest of the progress,
  so an order built yesterday is there to finish today.
*/
const arrangeKey = (readingId: string) => `anuvrtti:arrange:${readingId}`;
export function loadArrangement(readingId: string): number[] {
  const v = read<number[]>(arrangeKey(readingId));
  return Array.isArray(v) ? v.filter((x) => Number.isInteger(x)) : [];
}
export function saveArrangement(readingId: string, order: number[]) {
  if (order.length) write(arrangeKey(readingId), order);
  else {
    try { localStorage.removeItem(arrangeKey(readingId)); } catch { /* none */ }
  }
}
