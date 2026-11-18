#!/usr/bin/env bun
/**
 * build-kale-examples.ts — for each section of Kāle's grammar, the corpus's
 * examples of what it treats.
 *
 *   bun scripts/build-kale-examples.ts   (after build:quiz and build:texts)
 *   → static/data/kale-examples.json
 *
 * content/grammar-refs/kale.yaml maps each reader tag to the sections that
 * treat it (read and checked against the book). Turned round, it says which
 * tags a section is about, and the corpus has words carrying those tags. So a
 * section can show the language doing what it describes: §797, the accusative
 * of the object, shows a reading's ग्रामम् in ग्रामम् गच्छति.
 *
 * The graded readings come first and are most of it: every word in them was
 * annotated by hand, and only they carry the kāraka tags (कर्मन्, करण) that
 * the syntax sections are about. The whole texts add a few examples, only for
 * tags their analyses carry (case, number, gender, लकार, गण, the kṛt affixes),
 * and are labelled as the texts' on the page. A text word is used only when
 * its analysis is settled — chosen or written by the editor, or the only one
 * vidyut offers — so an ambiguous ब्रह्म is never shown as an accusative; and a
 * गण is shown only on a finite verb, the thing a गण section conjugates.
 * Easier, shorter readings are preferred, and the examples are spread over
 * the section's tags, readings and forms.
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';

const ROOT = process.cwd();
const KALE = path.join(ROOT, 'content/grammar-refs/kale.yaml');
const READINGS = path.join(ROOT, 'static/data/readings.json');
const TEXTS = path.join(ROOT, 'static/data/texts');
const OUT = path.join(ROOT, 'static/data/kale-examples.json');
const GRADED = 4;
const FROM_TEXTS = 3;

export type KaleExample = { tag: string; form: string; sentence: string; translation?: string; reading?: string; t?: string; p?: string; s?: string };
export type KaleExamples = { generated: string; titles: Record<string, string>; sections: Record<string, { graded: KaleExample[]; texts: KaleExample[] }> };

// ── the map, turned round: section → the tags it treats, in the map's order
const refs = parseYaml(fs.readFileSync(KALE, 'utf-8')) as Record<string, { s: number }[]>;
const tagsOf = new Map<number, string[]>();
for (const [tag, list] of Object.entries(refs)) for (const c of list ?? []) {
  const n = Number(c.s);
  tagsOf.set(n, [...(tagsOf.get(n) ?? []), tag]);
}
const wanted = new Set([...tagsOf.values()].flat());

// ── the graded readings: tag → readings with a word carrying it ───────────
type Hit = { tag: string; form: string; reading: any };
const gradedHits = new Map<string, Hit[]>();
const readings = JSON.parse(fs.readFileSync(READINGS, 'utf-8')).sequence as any[];
for (const r of readings) {
  for (const w of r.words ?? []) {
    const tags = new Set<string>([...(w.notes ?? []).map((n: any) => n.term), ...Object.values(w.derived ?? {}).map(String)]);
    for (const t of tags) if (wanted.has(t)) {
      const list = gradedHits.get(t) ?? [];
      // one word per reading per tag
      if (!list.some((h) => h.reading === r)) list.push({ tag: t, form: w.form, reading: r });
      gradedHits.set(t, list);
    }
  }
}
// easier first, then shorter
const ease = (r: any) => (Number(r.segment ?? 0) * 1000) + String(r.sentence ?? '').length;
for (const list of gradedHits.values()) list.sort((a, b) => ease(a.reading) - ease(b.reading));

// ── the whole texts: tag → a handful of words carrying it ────────────────
type TextHit = { tag: string; form: string; t: string; p: string; s: string; sentence: string };
const textHits = new Map<string, TextHit[]>();
const titles: Record<string, string> = {};
const GANAS = new Set(['भ्वादि', 'अदादि', 'जुहोत्यादि', 'दिवादि', 'स्वादि', 'तुदादि', 'रुधादि', 'तनादि', 'क्र्यादि', 'चुरादि']);
const LAKARAS = new Set(['लट्', 'लङ्', 'लिट्', 'लुट्', 'लृट्', 'लोट्', 'विधिलिङ्', 'आशीर्लिङ्', 'लुङ्', 'लृङ्']);
const settled = (pd: any) => pd.source === 'author' || pd.source === 'pick' || pd.alts === 1;
const index: { id: string; title: string }[] = JSON.parse(fs.readFileSync(path.join(TEXTS, 'index.json'), 'utf-8'));
for (const t of index) {
  titles[t.id] = t.title;
  const meta = JSON.parse(fs.readFileSync(path.join(TEXTS, t.id, 'index.json'), 'utf-8'));
  for (const part of meta.parts ?? []) {
    const data = JSON.parse(fs.readFileSync(path.join(TEXTS, t.id, part.file), 'utf-8'));
    for (const s of data.sections ?? []) {
      const words: any[] = s.words ?? [];
      words.forEach((w, wi) => {
        for (const pd of w.padas ?? []) for (const tag of pd.terms ?? []) {
          if (!wanted.has(tag) || !settled(pd)) continue;
          // finite: a लकार AND a पुरुष (a शतृ participle carries the लकार too)
          if (GANAS.has(tag) && !((pd.terms ?? []).some((x: string) => LAKARAS.has(x)) && (pd.terms ?? []).some((x: string) => x.endsWith('पुरुष')))) continue;
          const list = textHits.get(tag) ?? [];
          // a few per text is plenty, so every text gets its turn; one per section
          if (list.filter((h) => h.t === t.id).length >= 5 || list.some((h) => h.t === t.id && h.s === s.id)) continue;
          const sentence = words.slice(Math.max(0, wi - 3), wi + 4).map((x) => x.surface).join(' ');
          list.push({ tag, form: pd.form, t: t.id, p: part.id, s: s.id, sentence });
          textHits.set(tag, list);
        }
      });
    }
  }
}

/*
  A reading late in the sequence is a passage, not a sentence: a whole story
  with its whole translation is too much to show as an example. Past ten
  words it is cut to the four words either side of the form, and the
  translation goes, since it would no longer translate what is shown.
*/
const bare = (w: string) => w.replace(/[।॥,;:.!?—'"“”‘’()]/g, '');
function excerpt(r: any, form: string): { sentence: string; translation?: string } {
  const words = String(r.sentence ?? '').split(/\s+/).filter(Boolean);
  if (words.length <= 10) return { sentence: r.sentence, translation: r.translation };
  const at = Math.max(0, words.findIndex((w) => bare(w) === form));
  const a = Math.max(0, at - 4), b = Math.min(words.length, at + 5);
  return { sentence: `${a > 0 ? '… ' : ''}${words.slice(a, b).join(' ')}${b < words.length ? ' …' : ''}` };
}

// ── each section: spread over its tags, never the same reading twice ─────
const out: KaleExamples = { generated: new Date().toISOString(), titles, sections: {} };
for (const [n, tags] of tagsOf) {
  const graded: KaleExample[] = [];
  const usedReadings = new Set<string>();
  const usedForms = new Set<string>();
  for (let round = 0; graded.length < GRADED && round < GRADED; round++) {
    for (const tag of tags) {
      if (graded.length >= GRADED) break;
      const h = (gradedHits.get(tag) ?? []).filter((x) => !usedReadings.has(x.reading.id) && !usedForms.has(x.form))[0];
      if (!h) continue;
      usedReadings.add(h.reading.id);
      usedForms.add(h.form);
      graded.push({ tag, form: h.form, reading: h.reading.id, ...excerpt(h.reading, h.form) });
    }
  }
  const texts: KaleExample[] = [];
  const usedTexts = new Set<string>();
  for (const tag of tags) for (const h of textHits.get(tag) ?? []) {
    if (texts.length >= FROM_TEXTS) break;
    if (usedTexts.has(h.t)) continue; // one per text: show the range
    usedTexts.add(h.t);
    texts.push({ tag, form: h.form, sentence: h.sentence, t: h.t, p: h.p, s: h.s });
  }
  if (graded.length || texts.length) out.sections[n] = { graded, texts };
}

fs.writeFileSync(OUT, JSON.stringify(out));
const ns = Object.keys(out.sections).length;
const withGraded = Object.values(out.sections).filter((x) => x.graded.length).length;
console.log(`  kale-examples: ${ns} of ${tagsOf.size} cited sections have examples (${withGraded} from the graded readings) → ${path.relative(ROOT, OUT)} (${Math.round(fs.statSync(OUT).size / 1024)} KB)`);
