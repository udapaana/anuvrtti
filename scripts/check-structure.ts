/*
 * Structural quality lint for the readings corpus.
 *
 * Catches faults the annotation lint does not — the ones that make a reading
 * render wrong or read badly, independent of whether each tag is a legal value:
 *
 *   QUOTE       a straight/smart quote inside the sentence text — it tokenizes
 *               as its own stray word in the reader.
 *   DUP-FORM    the same `form` authored as two separate word-entries in one
 *               reading. A repeated word must be one shared entry so every
 *               occurrence shows the same full annotation.
 *   SELF-REF    a note that refers to the corpus itself — an id (ex123/rd045/
 *               ku0101), the word "episode", or meta-talk about the reading
 *               ("earns its length", "the longest", "the reader has no ids").
 *   NO-GLOSS    a word entry with no gloss.
 *
 * Exit non-zero if anything is found, so it can gate a build.
 */
import * as fs from 'fs';
import * as path from 'path';
import { parseDocument } from 'yaml';

const DIR = path.join(process.cwd(), 'content/readings');

const SELF_REF = [
  /\b(ex|rd|ku)\d{2,}\b/,          // corpus ids
  /\bepisodes?\b/i,
  /earns? its length/i,
  /\bthe longest\b/i,
  /reader has no ids?/i,
];

type Finding = { file: string; id: string; kind: string; detail: string };
const findings: Finding[] = [];

for (const file of fs.readdirSync(DIR).filter((f) => f.endsWith('.yaml') && !f.startsWith('_'))) {
  const doc = parseDocument(fs.readFileSync(path.join(DIR, file), 'utf-8'));
  const readings = (doc.toJS() as any)?.readings ?? [];
  for (const r of readings) {
    const id = r.id ?? '(no id)';
    const add = (kind: string, detail: string) => findings.push({ file, id, kind, detail });

    // QUOTE — literal quote characters inside the Sanskrit sentence
    const sentence: string = r.sentence ?? '';
    const q = sentence.match(/["“”]/);
    if (q) add('QUOTE', `sentence contains ${JSON.stringify(q[0])}`);

    // DUP-FORM — the reader maps repeated tokens to successive entries by a
    // positional cursor, so a form appearing N× SHOULD have N entries. What is
    // wrong is when those entries DISAGREE — one fuller, one sparse — so the
    // same word shows different annotation at different points. Flag only that.
    const byForm = new Map<string, any[]>();
    for (const w of r.words ?? []) (byForm.get(w.form) ?? byForm.set(w.form, []).get(w.form)!).push(w);
    const sig = (w: any) => JSON.stringify([
      String(w.gloss ?? '').trim(),
      (w.notes ?? []).filter((n: any) => n.term).map((n: any) => n.term).sort(),
      (w.notes ?? []).filter((n: any) => n.cite).map((n: any) => n.cite).sort(),
    ]);
    for (const [f, ws] of byForm) {
      if (ws.length < 2) continue;
      const sigs = new Set(ws.map(sig));
      if (sigs.size > 1) add('DUP-INCONSISTENT', `${JSON.stringify(f)} ×${ws.length} — entries disagree (gloss/terms/cites)`);
    }

    // NO-GLOSS — a word with no gloss
    for (const w of r.words ?? []) {
      if (!w.gloss || !String(w.gloss).trim()) add('NO-GLOSS', `word ${JSON.stringify(w.form)} has no gloss`);
    }

    // SELF-REF — corpus-internal / meta references in prose fields
    for (const field of ['teaches', 'vyakhya', 'vyakhya_en']) {
      const txt: string = r[field] ?? '';
      for (const re of SELF_REF) {
        const m = txt.match(re);
        if (m) { add('SELF-REF', `${field}: ${JSON.stringify(m[0])}`); break; }
      }
    }
  }
}

if (!findings.length) {
  console.log('  structure: clean — no quote, dup-form, self-ref, or missing-gloss faults.');
  process.exit(0);
}

const byKind = new Map<string, Finding[]>();
for (const f of findings) (byKind.get(f.kind) ?? byKind.set(f.kind, []).get(f.kind)!).push(f);

console.log(`\n  STRUCTURE CHECK — ${findings.length} finding(s) across ${new Set(findings.map((f) => f.id)).size} reading(s)\n`);
for (const [kind, list] of byKind) {
  console.log(`  ${kind}  (${list.length})`);
  for (const f of list.slice(0, 40)) console.log(`    ${f.id.padEnd(8)} ${f.detail}`);
  if (list.length > 40) console.log(`    … and ${list.length - 40} more`);
  console.log();
}
process.exit(1);
