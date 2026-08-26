#!/usr/bin/env bun
/**
 * build-stats.ts — the four numbers on the home page's doors.
 *
 * Each door prints a count of what is behind it. Getting them used to cost
 * 5.9 MB: the page fetched readings.json (4.07 MB) to learn 280, usage.json
 * (1.04 MB) to learn 484, and balabodhini.json (0.79 MB) to learn 79 — three
 * whole corpora downloaded, parsed, and thrown away, on the first page anyone
 * sees. This reduces them here, at build time, to a file of about eighty bytes.
 *
 * The सूत्र door is not in here. Its count is a property of the Aṣṭādhyāyī
 * rather than of the corpus, so it stays the SUTRA_COUNT constant in
 * src/lib/data/parser.ts with check-sutra-count.ts behind it. The rule: fixed
 * facts about the text are constants, counts of what we have authored are
 * generated.
 *
 *   → static/data/stats.json
 *
 * `--check` recomputes and compares instead of writing, so a stale committed
 * stats.json is caught by `bun run check` rather than by a reader noticing a
 * wrong number. Run after build-readings and build-balabodhini; it reads their
 * output, not the sources.
 */
import * as fs from 'fs';
import * as path from 'path';

const OUT = path.join(process.cwd(), 'static/data/stats.json');
const CHECK = process.argv.includes('--check');

function read(file: string): any | null {
  const p = path.join(process.cwd(), 'static/data', file);
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf-8')) : null;
}

/** Readings the reader offers, in sequence order. */
function countReadings(): number {
  return (read('readings.json')?.sequence ?? []).length;
}

/** Bālabodhinī lessons across both parts. */
function countLessons(): number {
  return (read('balabodhini.json')?.parts ?? []).reduce(
    (a: number, p: any) => a + (p.lessons ?? []).length,
    0
  );
}

/**
 * Paradigm cells the corpus actually attests — `filled`, the same number the
 * /usage door itself renders. Not the size of the grids: an empty cell is a
 * form nobody has read yet, which is the point of the page.
 */
function countCells(): number {
  return (read('usage.json')?.sections ?? []).reduce(
    (a: number, s: any) =>
      a + (s.entries ?? []).reduce((b: number, e: any) => b + (e.filled ?? 0), 0),
    0
  );
}

const stats = {
  readings: countReadings(),
  lessons: countLessons(),
  cells: countCells()
};

const json = JSON.stringify(stats);

if (CHECK) {
  const on_disk = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf-8').trim() : '(missing)';
  if (on_disk !== json) {
    console.error(
      `static/data/stats.json is stale.\n` +
        `  on disk: ${on_disk}\n` +
        `  current: ${json}\n` +
        `Run bun scripts/build-stats.ts (npm run build does it for you).`
    );
    process.exit(1);
  }
  console.log(`door stats: ${stats.readings} readings, ${stats.lessons} lessons, ${stats.cells} cells`);
} else {
  fs.writeFileSync(OUT, json);
  console.log(
    `Wrote ${stats.readings} readings, ${stats.lessons} lessons, ${stats.cells} cells → ${path.relative(process.cwd(), OUT)}`
  );
}
