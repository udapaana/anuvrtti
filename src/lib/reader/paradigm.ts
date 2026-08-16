/**
 * paradigm.ts — recognising and shaping the tables inside `sentence`.
 *
 * Paradigm readings are tables stored as a string: daṇḍa-delimited groups are
 * rows, whitespace-delimited words inside them are cells. Three separate places
 * used to decide what that meant — the shape in the string, an optional `kind`
 * field, and row labels hardcoded inline in the reader page — and nothing kept
 * them in agreement. ex094 (देव) and ex172 (फल) are the SAME table at adjacent
 * positions in the same chapter and tier; ex172 carried `kind: paradigm` and
 * rendered as a grid, ex094 did not and rendered as prose.
 *
 * So: SHAPE is the single source of truth. A reading is a paradigm when it
 * parses as a rectangle, whatever its `kind` says. `kind` remains a useful
 * authoring hint and is still honoured for the label lookup, but it can no
 * longer be the thing that decides whether a table looks like a table.
 *
 * Kept separate from the page component so the ledger, the build check, and any
 * future view read the same definition rather than reimplementing it.
 */

export interface ParadigmRow {
  label: string;
  cells: string[];
}
export interface Paradigm {
  cols: number;
  colHeads: string[];
  rows: ParadigmRow[];
}

/** Row labels by (rows × cols). The corpus has no per-row annotation and the
 *  order is fixed by the paradigm itself, so the axis names live here. */
const AXES: Record<string, { rows: string[]; cols: string[] }> = {
  // सुप् — eight विभक्तis against three वचन
  '8x3': {
    rows: ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी', 'सम्बोधन'],
    cols: ['एकवचन', 'द्विवचन', 'बहुवचन']
  },
  // सुप् without the vocative
  '7x3': {
    rows: ['प्रथमा', 'द्वितीया', 'तृतीया', 'चतुर्थी', 'पञ्चमी', 'षष्ठी', 'सप्तमी'],
    cols: ['एकवचन', 'द्विवचन', 'बहुवचन']
  },
  // तिङ् — three पुरुष against three वचन
  '3x3': {
    rows: ['उत्तमपुरुष', 'मध्यमपुरुष', 'प्रथमपुरुष'],
    cols: ['एकवचन', 'द्विवचन', 'बहुवचन']
  }
};

/**
 * Bind a vocative particle to the word it calls.
 *
 * The vocative row is written "हे फल हे फले हे फलानि": हे is a separate token
 * per cell, so the row parses twice as wide as the others and the rectangle
 * check fails. This is a fact about how the corpus writes vocatives, so it
 * belongs with the parser rather than at a call site.
 */
function bindVocative(cells: string[]): string[] {
  const out: string[] = [];
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] === 'हे' && cells[i + 1]) out.push('हे ' + cells[++i]);
    else out.push(cells[i]);
  }
  return out;
}

/** Split a paradigm sentence into its cell grid. Exported so the build check
 *  and the renderer agree on what the cells are. */
export function parseGrid(sentence: string): string[][] {
  return String(sentence ?? '')
    .split(/[।॥]/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => s.split(/\s+/).filter(Boolean))
    .map(bindVocative);
}

/** True when the parsed grid is a usable table. A single line of forms
 *  (ex164 lists कर्तृ's cases inline) is not a table and must stay prose. */
export function isRectangular(grid: string[][]): boolean {
  return grid.length >= 3 && grid.every((r) => r.length === grid[0].length) && grid[0].length >= 2;
}

/**
 * Shape a reading into a paradigm, or return null to render it as prose.
 * Recognition is by shape alone — see the header note on ex094 vs ex172.
 */
export function toParadigm(sentence: string): Paradigm | null {
  const grid = parseGrid(sentence);
  if (!isRectangular(grid)) return null;
  const axes = AXES[`${grid.length}x${grid[0].length}`];
  return {
    cols: grid[0].length,
    colHeads: axes?.cols.slice(0, grid[0].length) ?? [],
    rows: grid.map((cells, i) => ({ label: axes?.rows[i] ?? '', cells }))
  };
}
