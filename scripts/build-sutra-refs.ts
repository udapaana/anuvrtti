#!/usr/bin/env bun
/**
 * build-sutra-refs.ts — what a single sūtra page needs, split per sūtra.
 *
 * /ref/1.1.1 renders one record. To do it, getCommentary() downloaded six
 * whole corpora — kashika.json (3.79 MB), vasu_english.json (5.32 MB),
 * vasu_rewritten.json (2.10 MB), kashika_english.json (0.75 MB), plus vārttikas
 * and the short glosses — and then read six strings out of them. The page also
 * fetched readings.json (4.07 MB) to answer "which readings cite this sūtra?",
 * a question whose whole answer is 187 sūtras long. 21 MB transferred, for one
 * page about one line of Sanskrit.
 *
 * The per-sūtra pattern already exists next door: static/data/commentary/ holds
 * the authored layered commentary as 3983 separate TOMLs, fetched one at a
 * time. This does the same for the imported corpora, which are data rather than
 * authored prose and so are generated rather than hand-kept:
 *
 *   → static/data/sutra-refs/{a}/{p}/{n}.json   one sūtra's six fields
 *   → static/data/readings-by-sutra.json        cite → the readings using it
 *
 * The six source JSONs stay where they are. They are the source, they are what
 * gets re-imported when upstream changes, and other tools read them — this only
 * stops the BROWSER from being the thing that splits them.
 *
 * `--check` verifies the output is current instead of writing.
 */
import * as fs from 'fs';
import * as path from 'path';

const DATA = path.join(process.cwd(), 'static/data');
const REFS = path.join(DATA, 'sutra-refs');
const BY_SUTRA = path.join(DATA, 'readings-by-sutra.json');
const CHECK = process.argv.includes('--check');

const read = (f: string): Record<string, string> => {
  const p = path.join(DATA, f);
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf-8')) : {};
};

const kashika = read('kashika.json');
const kashikaEnglish = read('kashika_english.json');
const vartika = read('vartika.json');
const englishShort = read('sutrartha_english.json');
const englishFull = read('vasu_english.json');
const englishRewritten = read('vasu_rewritten.json');

/** Strip @deva[...] markers, keeping the content — the same rule the app applied. */
const strip = (t: string | undefined) => (t ? t.replace(/@deva\[([^\]]*)\]/g, '$1') : undefined);

/** Drop undefined keys so an absent field costs nothing in the payload. */
function compact<T extends Record<string, unknown>>(o: T): Partial<T> {
  return Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) as Partial<T>;
}

// Every numericId mentioned by any corpus — the union, so a sūtra with only a
// vārttika still gets a file and the fetch does not 404 into a Function.
const ids = new Set<string>([
  ...Object.keys(kashika),
  ...Object.keys(kashikaEnglish),
  ...Object.keys(vartika),
  ...Object.keys(englishShort),
  ...Object.keys(englishFull),
  ...Object.keys(englishRewritten)
]);

const files: [string, string][] = [];
for (const id of [...ids].sort()) {
  if (!/^\d{5}$/.test(id)) continue;
  const entry = compact({
    kashika: kashika[id],
    kashikaEnglish: kashikaEnglish[id],
    vartika: vartika[id] ? vartika[id].split('\n\n') : undefined,
    englishShort: strip(englishShort[id]),
    // the rewrite wins where it exists, as it did in getCommentary()
    englishFull: strip(englishRewritten[id] || englishFull[id])
  });
  files.push([path.join(REFS, id[0], id[1], `${parseInt(id.slice(2))}.json`), JSON.stringify(entry)]);
}

// readings → sūtra, reversed. The whole index is small because the corpus cites
// 187 distinct sūtras; the page was downloading 4 MB to discover that.
const readings = fs.existsSync(path.join(DATA, 'readings.json'))
  ? JSON.parse(fs.readFileSync(path.join(DATA, 'readings.json'), 'utf-8'))
  : { sequence: [] };
const bySutra: Record<string, { id: string; sentence: string }[]> = {};
for (const r of readings.sequence ?? []) {
  const cited = new Set<string>();
  for (const w of r.words ?? []) for (const n of w.notes ?? []) if (n.cite) cited.add(n.cite);
  for (const c of cited) (bySutra[c] ??= []).push({ id: r.id, sentence: r.sentence ?? '' });
}
const bySutraJson = JSON.stringify(bySutra);

if (CHECK) {
  const stale: string[] = [];
  if (!fs.existsSync(BY_SUTRA) || fs.readFileSync(BY_SUTRA, 'utf-8') !== bySutraJson)
    stale.push('readings-by-sutra.json');
  for (const [p, body] of files) {
    if (!fs.existsSync(p) || fs.readFileSync(p, 'utf-8') !== body) {
      stale.push(path.relative(DATA, p));
      if (stale.length > 3) break;
    }
  }
  if (stale.length) {
    console.error(
      `sūtra refs are stale (${stale.slice(0, 4).join(', ')}${stale.length > 3 ? ', …' : ''}).\n` +
        `Run bun scripts/build-sutra-refs.ts (npm run build does it for you).`
    );
    process.exit(1);
  }
  console.log(`sūtra refs: ${files.length} per-sūtra files, ${Object.keys(bySutra).length} cited sūtras`);
} else {
  for (const [p, body] of files) {
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, body);
  }
  fs.writeFileSync(BY_SUTRA, bySutraJson);
  const total = files.reduce((a, [, b]) => a + Buffer.byteLength(b), 0);
  console.log(
    `Wrote ${files.length} per-sūtra ref files (${(total / 1e6).toFixed(2)} MB total, ` +
      `${Math.round(total / files.length)} bytes median-ish each) + ` +
      `readings-by-sutra.json (${Object.keys(bySutra).length} sūtras, ${(Buffer.byteLength(bySutraJson) / 1e3).toFixed(1)} KB)`
  );
}
