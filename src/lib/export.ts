/**
 * export.ts — a chapter or a whole text as one self-contained HTML file.
 *
 * The reader's own offline copy (offline.ts) lives in the browser's cache and
 * needs this site to open. This is the other kind: a file the reader keeps,
 * opens in any browser without a connection, prints, or reads on another
 * device. It carries the text in Devanagari and IAST and, under each verse or
 * sentence, every word's form, stem, analysis and gloss — what the reader's
 * rail shows on a tap, set out in full. It does not carry the paradigm tables
 * or the derivation engine; those stay in the app.
 *
 * Built in the browser from the payload the page has already loaded, so no
 * build step and no second copy of the data. The credit line travels with it:
 * the glosses are Monier-Williams (CC BY-SA 4.0) and the texts are GRETIL's.
 */
import { transliterate } from '$lib/transliteration';

type Pada = { form: string; lemma?: string | null; a?: string; gloss?: unknown; member?: boolean };
type TextWord = { surface: string; padas: Pada[] };
type TextSection = { id: string; kind?: string; text: string[]; words: TextWord[] };
export type ExportText = {
  id: string; title: string; title_en: string; work: string; place?: string;
  source: Record<string, string>; credit: string; sections: TextSection[];
};

type ReadingWord = { form: string; lemma?: string | null; gloss?: string | boolean; notes?: { term?: string; text?: string }[]; derived?: Record<string, string> };
export type ExportReading = {
  id: string; sentence: string; samhita?: { text: string }[] | null; translation?: string;
  source?: { text?: string; ref?: string }; words: ReadingWord[];
};

const esc = (v: unknown) =>
  String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const iast = (s: string) => transliterate(s, 'devanagari', 'iast');

/** The terms of a reading word, in the order the rail shows them. */
function readingAnalysis(w: ReadingWord): string {
  const terms = (w.notes ?? []).map((n) => n.term).filter((t): t is string => !!t);
  for (const v of Object.values(w.derived ?? {})) if (!terms.includes(v)) terms.push(v);
  return terms.join(' ');
}

const STYLE = `
:root { --bg: #fbfaf7; --ink: #1d1b18; --muted: #6b665e; --faint: #9a948a; --rule: #e4e0d8; --accent: #8a3b12; }
@media (prefers-color-scheme: dark) {
  :root { --bg: #171614; --ink: #ece8e1; --muted: #a8a197; --faint: #7b756c; --rule: #2e2b27; --accent: #e09a6a; }
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--ink); font: 16px/1.55 Georgia, 'Times New Roman', serif; }
main { max-width: 760px; margin: 0 auto; padding: 32px 16px 64px; }
header { border-bottom: 1px solid var(--rule); padding-bottom: 14px; margin-bottom: 8px; }
.label { font: 11px/1.4 ui-monospace, Menlo, monospace; color: var(--faint); letter-spacing: .04em; }
h1 { font-family: 'Noto Sans Devanagari', 'Noto Serif Devanagari', 'Kohinoor Devanagari', sans-serif; font-size: 28px; margin: 6px 0 2px; }
.en { color: var(--muted); font-style: italic; }
section { border-bottom: 1px solid var(--rule); padding: 18px 0; break-inside: avoid; }
.num { font: 11px ui-monospace, Menlo, monospace; color: var(--accent); }
.deva { font-family: 'Noto Sans Devanagari', 'Noto Serif Devanagari', 'Kohinoor Devanagari', sans-serif; font-size: 21px; line-height: 1.7; }
.iast { color: var(--muted); font-style: italic; margin-top: 2px; }
.tr { margin-top: 8px; }
table { width: 100%; border-collapse: collapse; margin-top: 10px; font-size: 14px; }
td { padding: 3px 8px 3px 0; vertical-align: top; border-top: 1px dotted var(--rule); }
td.f { font-family: 'Noto Sans Devanagari', sans-serif; white-space: nowrap; }
td.l { font-family: 'Noto Sans Devanagari', sans-serif; color: var(--muted); white-space: nowrap; }
td.a { font-family: 'Noto Sans Devanagari', sans-serif; font-size: 12.5px; color: var(--muted); }
tr.member td.f::after { content: '-'; color: var(--faint); }
footer { margin-top: 28px; font-size: 12.5px; color: var(--muted); }
@media (max-width: 560px) { td.l { display: none; } }
@media print { body { background: #fff; color: #000; } section { border-color: #ccc; } }
`;

function page(title: string, head: string, body: string, credit: string): string {
  return `<!doctype html>
<html lang="sa"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<style>${STYLE}</style></head>
<body><main>
${head}
${body}
<footer>${esc(credit)}<br>Saved from anuvrtti.udapaana.in on ${new Date().toISOString().slice(0, 10)}.</footer>
</main></body></html>`;
}

function wordTable(rows: { form: string; lemma?: string | null; a?: string; gloss?: unknown; member?: boolean }[]): string {
  const tr = rows
    .map((r) => `<tr${r.member ? ' class="member"' : ''}><td class="f">${esc(r.form)}</td><td class="l">${esc(r.lemma ?? '')}</td><td class="a">${esc(r.a ?? '')}</td><td>${esc(r.gloss ?? '')}</td></tr>`)
    .join('');
  return `<table>${tr}</table>`;
}

/** A whole text, every section, every word. */
export async function textToHtml(t: ExportText): Promise<string> {
  const head = `<header><div class="label">${esc(t.work)}${t.place ? ' · ' + esc(t.place) : ''}</div>
<h1>${esc(t.title)}</h1><div class="en">${esc(t.title_en)}</div></header>`;
  const parts: string[] = [];
  for (const s of t.sections) {
    const deva = s.text.map(esc).join('<br>');
    const roman = (await Promise.all(s.text.map(iast))).map(esc).join('<br>');
    const rows = s.words.flatMap((w) => w.padas);
    parts.push(`<section><div class="num">${esc(s.id)}</div><div class="deva">${deva}</div><div class="iast">${roman}</div>${wordTable(rows)}</section>`);
  }
  const src = t.source?.edition ? `Edition: ${t.source.edition}. ` : '';
  return page(`${t.title} — ${t.title_en}`, head, parts.join('\n'), src + t.credit);
}

/** One chapter of the graded reader, reading by reading. */
export async function chapterToHtml(ch: { id: string; dev: string; en: string }, readings: ExportReading[]): Promise<string> {
  const head = `<header><div class="label">chapter</div><h1>${esc(ch.dev)}</h1><div class="en">${esc(ch.en)}</div></header>`;
  const parts: string[] = [];
  for (const r of readings) {
    // the saṃhitā vidyut-sandhi built, word groups in order; else the padas
    const line = r.samhita?.length ? r.samhita.map((g) => g.text).join(' ').replace(/ ([।॥])/g, '$1') : r.sentence;
    const ref = r.source?.ref ? `${r.source.text ? r.source.text + ' ' : ''}${r.source.ref}` : r.id;
    const rows = r.words.map((w) => ({ form: w.form, lemma: w.lemma, a: readingAnalysis(w), gloss: typeof w.gloss === 'string' ? w.gloss : '' }));
    parts.push(`<section><div class="num">${esc(ref)}</div><div class="deva">${esc(line)}</div><div class="iast">${esc(await iast(line))}</div>${r.translation ? `<div class="tr">${esc(r.translation)}</div>` : ''}${wordTable(rows)}</section>`);
  }
  return page(`${ch.dev} — ${ch.en}`, head, parts.join('\n'), 'Graded reader of anuvrtti. Attested passages: GRETIL texts, CC BY-NC-SA 4.0, as cited.');
}

/** Hand the reader a file. */
export function saveFile(name: string, html: string) {
  const url = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: name });
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
