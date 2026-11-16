#!/usr/bin/env bun
/**
 * condensed-keyed.ts — settle the text of the verses read from the book's scan.
 *
 *   bun scripts/condensed-keyed.ts ramayana
 *
 * Two keyers transcribe every crop independently (transcribe-A-*.json,
 * transcribe-B-*.json, beside the selection). A verse whose two readings agree
 * letter for letter (after Unicode normalisation and collapsing spaces) is
 * settled. One where they differ, or where either keyer marked an akṣara
 * uncertain, goes to adjudication: a third reading of the image, recorded in
 * adjudicate-*.json as { "ocr_line", "text", "reason" }. Writes keyed.json —
 * the settled text of each verse with how it was settled — and lists what is
 * still open. The text builder (condensed-text.ts) takes only settled verses.
 */
import * as fs from 'fs';
import * as path from 'path';

const ROOT = process.cwd();
if (process.argv[2] !== 'ramayana') { console.error('usage: bun scripts/condensed-keyed.ts ramayana'); process.exit(1); }
const DIR = path.join(ROOT, 'content/texts/ramayana-condensed');

type Key = { ocr_line: number; text: string; uncertain?: string[] };
type Adj = { ocr_line: number; text: string; reason: string };
const read = <T>(re: RegExp): T[] => fs.readdirSync(DIR).filter((f) => re.test(f)).sort()
  .flatMap((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), 'utf-8')) as T[]);
const A = new Map(read<Key>(/^transcribe-A-.*\.json$/).map((k) => [k.ocr_line, k]));
const B = new Map(read<Key>(/^transcribe-B-.*\.json$/).map((k) => [k.ocr_line, k]));
const J = new Map(read<Adj>(/^adjudicate-.*\.json$/).map((k) => [k.ocr_line, k]));
const reocr: { ocr_line: number; section: string; crop: string; djvu: string; tesseract: string }[] =
  JSON.parse(fs.readFileSync(path.join(DIR, 'reocr.json'), 'utf-8'));

const norm = (s: string) => s.normalize('NFC').replace(/[।॥|]/g, '').replace(/\s*\/\s*/g, ' / ').replace(/\s+/g, ' ').trim();

type Settled = { ocr_line: number; section: string; text: string; by: 'agreed' | 'adjudicated'; crop: string; reason?: string };
const settled: Settled[] = [];
const open: { ocr_line: number; section: string; crop: string; A?: string; B?: string; uncertain: string[]; djvu: string; tesseract: string }[] = [];
let agreed = 0, adjudicated = 0, missing = 0;
for (const r of reocr) {
  const a = A.get(r.ocr_line), b = B.get(r.ocr_line), j = J.get(r.ocr_line);
  if (!a || !b) missing++;
  const unc = [...(a?.uncertain ?? []), ...(b?.uncertain ?? [])];
  const same = a && b && norm(a.text) === norm(b.text) && !unc.length && !/\[\?\]/.test(a.text);
  if (same) { settled.push({ ocr_line: r.ocr_line, section: r.section, text: norm(a!.text), by: 'agreed', crop: r.crop }); agreed++; continue; }
  if (j) { settled.push({ ocr_line: r.ocr_line, section: r.section, text: norm(j.text), by: 'adjudicated', crop: r.crop, reason: j.reason }); adjudicated++; continue; }
  open.push({ ocr_line: r.ocr_line, section: r.section, crop: r.crop, A: a?.text, B: b?.text, uncertain: unc, djvu: r.djvu, tesseract: r.tesseract });
}
fs.writeFileSync(path.join(DIR, 'keyed.json'), '[\n' + settled.map((s) => '  ' + JSON.stringify(s)).join(',\n') + '\n]\n');
fs.writeFileSync(path.join(DIR, 'keyed-open.json'), '[\n' + open.map((s) => '  ' + JSON.stringify(s)).join(',\n') + '\n]\n');
console.log(`${reocr.length} verses: ${agreed} agreed, ${adjudicated} adjudicated, ${open.length} open${missing ? `, ${missing} not yet keyed twice` : ''}`);
console.log(`agreement rate between keyers: ${(agreed / Math.max(1, reocr.length - missing) * 100).toFixed(1)}%`);
