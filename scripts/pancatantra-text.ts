#!/usr/bin/env bun
/**
 * pancatantra-text.ts — the whole Pañcatantra (Jha's edition, Chowkhamba 1991;
 * Ambuda's GRETIL text, data/sources/sa_viSNuzarman-paJcatantra.xml) as a
 * whole text: content/texts/pancatantra/text.yaml.
 *
 *   bun scripts/pancatantra-text.ts
 *
 * The TEI has no divisions; its structure is in its prose headings:
 *   "kathā-mukham", "mitra-bhedaḥ" …  the introduction and the five tantras
 *   "kathā 1 kīlotpāṭi-vānara-kathā"   a story, numbered within its tantra
 * A part is a story together with the frame that follows it, up to the next
 * story or tantra; the headings name the parts and are not sections.
 *
 * Sections, in order:
 *   a numbered verse (Panc_1.21)       id "1.21" — the edition's number
 *   an unnumbered verse, or prose      id "<the last numbered verse>+n", one
 *                                      section per sentence (split at the
 *                                      daṇḍa), as the one-tale text was
 * Before the first numbered verse the base is "0.0". `lines` is Devanagari
 * saṃhitā (iastToDeva, each line or sentence rejoined on its own); `iast` the
 * edition's text, compound hyphens kept.
 */
import * as fs from 'fs';
import * as path from 'path';
import { readTei } from './lib/tei';
import { iastToDeva } from './analyze-text';

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'content/texts/pancatantra/text.yaml');

const TANTRA: Record<string, string> = {
  'kathā-mukham': 'कथामुखम्', 'mitra-bhedaḥ': 'मित्रभेदः', 'mitra-saṃprāptiḥ': 'मित्रसम्प्राप्तिः',
  'mitra-samprāptiḥ': 'मित्रसम्प्राप्तिः', 'kākolūkīyam': 'काकोलूकीयम्', 'labdha-praṇāśam': 'लब्धप्रणाशम्',
  'aparīkṣita-kārakam': 'अपरीक्षितकारकम्'
};
// a tantra's heading, as the edition gives it: "mitra-bhedaḥ", "atha
// mitra-samprāptiḥ", "tṛtīyaṃ tantram atha kākolūkīyam", "atha labdha-praṇāśam"
const bareHead = (t: string) => t.replace(/^(?:[a-zāīūṛṣṭṇśṃ-]+\s+tantram\s+)?(?:atha\s+)?/, '').replace(/\s|\|/g, '');
const isTantra = (t: string) => Object.keys(TANTRA).some((k) => bareHead(t) === k.replace(/\s/g, ''));
const story = (t: string) => t.match(/^kathā\s+(\d+)\s+(.+?)\s*\|?$/);
const tidy = (s: string) => s.replace(/\s+/g, ' ').trim();
// the edition's own apparatus, left in the text by the TEI: a starred verse's
// number ("||Panc_1.[*100]", no closing marks) and "(alt.)" before a variant
const strip = (s: string) => s.replace(/\s*\|\|\s*Panc_\S*\s*$/, '').replace(/\(alt\.\)\s*/g, '');

type Sec = { id: string; kind: 'verse' | 'prose'; lines: string[]; iast: string };
type Part = { id: string; title: string; first?: string; last?: string };
const sections: Sec[] = [];
const parts: Part[] = [];
let base = '0.0', plus = 0, tantra = 0, storyNo = 0;
const nextId = () => `${base}+${++plus}`;
const seenBase = new Set<string>();
const open = (id: string, title: string) => parts.push({ id, title });

for (const b of readTei('sa_viSNuzarman-paJcatantra')) {
  if (b.kind === 'head') continue;
  const first = tidy(b.lines[0] ?? '');
  if (b.kind === 'prose' && b.lines.length === 1) {
    if (first === 'pañcatantram' || /^[a-zāīūṛṣṭṇśṃ-]+[ -]tantram$/.test(first)) continue;
    if (isTantra(first)) {
      const key = Object.keys(TANTRA).find((k) => bareHead(first) === k.replace(/\s/g, ''))!;
      if (key !== 'kathā-mukham') tantra++;
      storyNo = 0;
      open(`${tantra}`, TANTRA[key]);
      continue;
    }
    const st = story(first);
    if (st) { storyNo = Number(st[1]); open(`${tantra}.${storyNo}`, iastToDeva(st[2])); continue; }
  }
  if (!parts.length) open('0', TANTRA['kathā-mukham']);
  const before = sections.length;
  if (b.kind === 'verse') {
    const m = b.ref?.match(/^Panc_(\d+)\.(\d+)$/);
    let id: string;
    if (m) {
      // the edition repeats a number now and then (Panc_2.111 twice): the repeat is #2
      let b0 = `${+m[1]}.${+m[2]}`;
      for (let n = 2; seenBase.has(b0); n++) b0 = `${+m[1]}.${+m[2]}#${n}`;
      seenBase.add(b0);
      base = b0; plus = 0; id = base;
    } else id = nextId();
    const ls = b.lines.map((l) => tidy(strip(l).replace(/[|/।॥]+\s*$/g, ''))).filter(Boolean);
    sections.push({ id, kind: 'verse', lines: ls.map((l) => l.split(/\s*\|\s*/).map(iastToDeva).join(' ')), iast: ls.join(' | ') });
  } else {
    // prose: one section per sentence; a closing marker number, if any, is dropped
    for (const sent of strip(b.lines.join(' ')).split(/\s*\|\s*/).map(tidy).filter((x) => x && !/^[\d.]+$/.test(x)))
      sections.push({ id: nextId(), kind: 'prose', lines: [iastToDeva(sent)], iast: sent });
  }
  // only a block that added sections moves its part's range
  if (sections.length > before) {
    const p = parts.at(-1)!;
    p.first ??= sections[before].id;
    p.last = sections.at(-1)!.id;
  }
}

const used = parts.filter((p) => p.first);
const ids = new Set<string>();
for (const s of sections) { if (ids.has(s.id)) throw new Error(`duplicate section id ${s.id}`); ids.add(s.id); }
const words = sections.reduce((n, s) => n + s.lines.join(' ').split(/\s+/).filter(Boolean).length, 0);
const J = JSON.stringify;
const y = [
  '# The Pañcatantra, whole — the introduction and the five tantras, in order.',
  '#',
  '# AUTHORED SOURCE of a whole text: generated by scripts/pancatantra-text.ts from',
  '# Ambuda\'s GRETIL text (Jha\'s edition). Re-run the script to regenerate; the',
  '# author\'s decisions belong in overrides. See content/texts/pancatantra-kilotpatin',
  '# (retired into this text) for the format\'s origin.',
  '#',
  '# Section ids: a numbered verse keeps the edition\'s number (1.21); everything',
  '# after it — prose, one section per sentence, and unnumbered verses — is that',
  '# number plus +n (1.21+1). Never renumber one. A part is one story with the',
  '# frame that follows it; the edition\'s headings name the parts.',
  'id: pancatantra',
  'title: पञ्चतन्त्रम्',
  'title_en: The Pañcatantra',
  'work: पञ्चतन्त्रम्',
  `place: the whole work — the introduction and five tantras, ${used.length} parts`,
  'source:',
  '  edition: Pañcatantra, ed. Ramchandra Jha (Chowkhamba, 1991), via GRETIL and Ambuda',
  '  file: sa_viSNuzarman-paJcatantra # data/texts.json (sha256-pinned; Ambuda\'s GRETIL fork)',
  '  ref: by section id — the verse number (Panc_t.n), +n for what follows it',
  '  licence: GRETIL text, CC BY-NC-SA 4.0 (per its header)',
  'parts:',
  ...used.flatMap((p) => [`  - id: '${p.id}'`, `    title: ${J(p.title)}`, `    first: '${p.first}'`, `    last: '${p.last}'`]),
  'sections:'
];
for (const s of sections) {
  y.push(`  - id: '${s.id}'`, `    kind: ${s.kind}`);
  if (s.kind === 'verse') { y.push('    lines:'); for (const l of s.lines) y.push(`      - ${J(l)}`); }
  else y.push(`    text: ${J(s.lines[0])}`);
  y.push(`    iast: ${J(s.iast)}`);
}
fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, y.join('\n') + '\n');
console.log(`wrote content/texts/pancatantra/text.yaml: ${sections.length} sections (${sections.filter((s) => s.kind === 'verse').length} verses), ${words} words, ${used.length} parts`);
