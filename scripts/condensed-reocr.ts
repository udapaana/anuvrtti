#!/usr/bin/env bun
/**
 * condensed-reocr.ts — the verses a condensed book quotes that our edition
 * lacks, cut from the book's own scan and read again.
 *
 *   bun scripts/condensed-reocr.ts ramayana
 *
 * The Rāmāyaṇa book follows the vulgate; 214 of its verses are not in the
 * critical edition we use (selection.json, `elsewhere`). Until a Kumbhakonam
 * text exists (content/texts/TODO.md) their only witness is the book. For each:
 *   1. find its lines in archive.org's OCR layout (data/sources/ocr/
 *      ramayana-condensed_djvu.xml — the OCR our matcher read, with each
 *      line's page and box);
 *   2. fetch that page of the scan (archive.org, one JPEG 2000 page from the
 *      item's zip) and crop the verse, with a margin;
 *   3. read it with Tesseract (san+hin, the image thresholded).
 * Writes the crops to data/sources/ocr/ramayana-condensed-crops/<ocr_line>.jpg
 * (committed: the evidence for every reading) and
 * content/texts/ramayana-condensed/reocr.json — for each verse its ocr_line,
 * page, crop, archive.org's reading (`djvu`), Tesseract's (`tesseract`), and the
 * section id it will take: the critical verse the book quotes just before it,
 * plus "+n" (1.17.10+1).
 *
 * Machine readings only. The text a reader sees is settled by two independent
 * transcriptions of each crop (transcribe-*.json) and the reconciliation of
 * their differences; see the README.
 */
import * as fs from 'fs';
import * as path from 'path';
import { execFileSync } from 'child_process';

const ROOT = process.cwd();
if (process.argv[2] !== 'ramayana') { console.error('usage: bun scripts/condensed-reocr.ts ramayana'); process.exit(1); }

const ITEM = 'valmiki-ramayana-condensed-in-the-poets-own-words-with-english-translation';
const FILE = "Valmiki Ramayana Condensed in the Poet's Own Words with English Translation - PPS Sastri 1935 (GA Natesan & Co)";
const enc = encodeURIComponent;
const pageUrl = (n: number) => {
  const p = String(n).padStart(4, '0');
  return `https://archive.org/download/${ITEM}/${enc(FILE)}_jp2.zip/${enc(FILE)}_jp2%2F${enc(FILE)}_${p}.jp2`;
};
const DIR = path.join(ROOT, 'content/texts/ramayana-condensed');
const CROPS = path.join(ROOT, 'data/sources/ocr/ramayana-condensed-crops');
const CACHE = path.join(ROOT, 'data/texts/scan-pages'); // git-ignored: whole pages, refetchable
fs.mkdirSync(CROPS, { recursive: true });
fs.mkdirSync(CACHE, { recursive: true });

// ── 1. the OCR layout: every line with its page and box, in reading order ───
type Ln = { page: number; x0: number; y0: number; x1: number; y1: number; text: string };
const xml = fs.readFileSync(path.join(ROOT, 'data/sources/ocr/ramayana-condensed_djvu.xml'), 'utf-8');
const layout: Ln[] = [];
const decode = (s: string) => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&apos;/g, "'");
for (const obj of xml.split('<OBJECT').slice(1)) {
  const page = Number(obj.match(/_(\d{4})\.djvu"/)?.[1] ?? -1);
  for (const ln of obj.matchAll(/<LINE>([\s\S]*?)<\/LINE>/g)) {
    const words = [...ln[1].matchAll(/<WORD coords="(\d+),(\d+),(\d+),(\d+)"[^>]*>([\s\S]*?)<\/WORD>/g)];
    if (!words.length) continue;
    const xs0 = words.map((w) => +w[1]), ys1 = words.map((w) => +w[2]), xs1 = words.map((w) => +w[3]), ys0 = words.map((w) => +w[4]);
    layout.push({ page, x0: Math.min(...xs0), y0: Math.min(...ys0), x1: Math.max(...xs1), y1: Math.max(...ys1), text: decode(words.map((w) => w[5]).join(' ')) });
  }
}
// the plain OCR (what the matcher read, line numbers and all) is the same lines
// with blank lines between paragraphs: walk both in step
const txt = fs.readFileSync(path.join(ROOT, 'data/sources/ocr/ramayana-condensed.txt'), 'utf-8').split('\n');
const norm = (s: string) => s.replace(/\s+/g, '');
const lineAt = new Map<number, Ln>(); // 1-based txt line → layout line
{
  let j = 0;
  txt.forEach((t, i) => {
    if (!t.trim()) return;
    // look a little ahead: the two are the same OCR, but a stray line may differ
    for (let k = j; k < Math.min(layout.length, j + 6); k++)
      if (norm(layout[k].text) === norm(t)) { lineAt.set(i + 1, layout[k]); j = k + 1; return; }
  });
  console.log(`layout: ${layout.length} lines; ${lineAt.size} of ${txt.filter((t) => t.trim()).length} text lines located`);
}

// ── 2–3. the verses: locate, crop, read ─────────────────────────────────────
const sel = JSON.parse(fs.readFileSync(path.join(DIR, 'selection.json'), 'utf-8'));
const strip = (s: string) => s.trim().replace(/^[\^‹ˆ`'"“‘\s]+/, '');
type Out = { ocr_line: number; section: string; page: number; crop: string; djvu: string; tesseract: string; lines: number[] };
const out: Out[] = [];
let lastId = '', plus = 0;
const sid = (eid: string) => { const m = eid.match(/^R_(\d)\.(\d+)\.(\d+)$/)!; return `${+m[1]}.${+m[2]}.${+m[3]}`; };
for (const e of sel.entries) {
  if (e.edition_id) { lastId = sid(e.edition_id); plus = 0; continue; }
  if (!e.elsewhere) continue;
  // the entry's OCR lines, from its first: each part of `ocr`, in order
  const parts: string[] = e.ocr.split(' / ');
  const nums: number[] = [];
  let n = e.ocr_line;
  for (const p of parts) {
    while (n <= txt.length && strip(txt[n - 1] ?? '') !== p) n++;
    if (n > txt.length) break;
    nums.push(n++);
  }
  const lns = nums.map((x) => lineAt.get(x)).filter((x): x is Ln => !!x);
  if (!lns.length) { console.log(`  ✗ ocr_line ${e.ocr_line}: not in the layout`); continue; }
  const page = lns[0].page;
  const same = lns.filter((l) => l.page === page); // a verse split across pages: its first page
  const pad = 40;
  const x0 = Math.max(0, Math.min(...same.map((l) => l.x0)) - pad * 4), x1 = Math.max(...same.map((l) => l.x1)) + pad * 4;
  const y0 = Math.max(0, Math.min(...same.map((l) => l.y0)) - pad), y1 = Math.max(...same.map((l) => l.y1)) + pad;

  const jp2 = path.join(CACHE, `${String(page).padStart(4, '0')}.jp2`);
  if (!fs.existsSync(jp2)) {
    const res = await fetch(pageUrl(page));
    if (!res.ok) { console.log(`  ✗ page ${page}: HTTP ${res.status}`); continue; }
    fs.writeFileSync(jp2, Buffer.from(await res.arrayBuffer()));
  }
  const crop = path.join(CROPS, `${e.ocr_line}.jpg`);
  // the crop a person (or a transcriber) reads keeps its greys: thresholding
  // breaks faint strokes a reader can still make out. Only Tesseract's copy is
  // thresholded.
  // Kept at half the scan's resolution (≈300 dpi), grey JPEG: legible, small.
  execFileSync('convert', [jp2, '-crop', `${x1 - x0}x${y1 - y0}+${x0}+${y0}`, '+repage', '-colorspace', 'Gray', '-resize', '50%', '-quality', '88', crop]);
  const big = path.join(CACHE, 'ocr-work.png');
  execFileSync('convert', [jp2, '-crop', `${x1 - x0}x${y1 - y0}+${x0}+${y0}`, '+repage', '-colorspace', 'Gray', '-resize', '150%', '-threshold', '60%', big]);
  const tess = execFileSync('tesseract', [big, '-', '-l', 'san+hin', '--psm', '6'], { stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim();
  fs.rmSync(big);
  plus++;
  out.push({ ocr_line: e.ocr_line, section: `${lastId}+${plus}`, page, crop: path.relative(ROOT, crop), djvu: e.ocr, tesseract: tess, lines: nums });
  if (out.length % 25 === 0) console.log(`  ${out.length} read`);
}
fs.writeFileSync(path.join(DIR, 'reocr.json'), '[\n' + out.map((o) => '  ' + JSON.stringify(o)).join(',\n') + '\n]\n');
console.log(`wrote reocr.json: ${out.length} verses, crops in ${path.relative(ROOT, CROPS)}/`);
