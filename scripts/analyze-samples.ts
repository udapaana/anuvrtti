#!/usr/bin/env bun
/**
 * analyze-samples.ts — machine-annotate two whole tales from the pinned GRETIL
 * texts, as a test of scripts/analyze-text.ts on text nobody has hand-annotated:
 *
 *   panc-kilotpatin   Pañcatantra 1, kathā 1: the monkey and the wedge
 *                     (vānara-kīlotpāṭana), with its frame verse 1.21
 *   vetala-1          Vetālapañcaviṃśatikā, the first vetāla's tale (Vet_1)
 *
 *   bun run texts && bun scripts/analyze-samples.ts [--md N]
 *
 * Writes static/data/analyses/<name>.json (generated, git-ignored). With --md N
 * prints the first N sentences of each as a markdown table (word, padas, lemma,
 * analysis, gloss) — the samples in docs/AUTO-ANNOTATION-EVAL.md.
 */
import * as fs from 'fs';
import * as path from 'path';
import { Engine, analyzeSentence, iastToDeva, type Token, type Analysis } from './analyze-text';

const ROOT = process.cwd();
const TEXTS = path.join(ROOT, 'data/texts');
const OUT = path.join(ROOT, 'static/data/analyses');
const read = (slug: string) => {
  const f = path.join(TEXTS, slug + '.txt');
  if (!fs.existsSync(f)) throw new Error(`${f} missing — run bun run texts`);
  return fs.readFileSync(f, 'utf-8');
};

/** GRETIL plaintext (IAST) → sentences of Devanagari saṃhitā. */
function pancatantra(): string[] {
  const t = read('sa_viSNuzarman-paJcatantra');
  const verse = t.slice(t.indexOf('avyāpareṣu vyāpāraṃ'), t.indexOf('||panc_1.21||'));
  const a = t.indexOf('kasmiṃścin nagarābhyāśe');
  const tale = t.slice(a, t.indexOf("avyāpāreṣu iti |", a) + 'avyāpāreṣu iti'.length);
  return [verse, tale].join(' | ').split(/\|+/).map((s) => s.trim()).filter(Boolean);
}
function vetala1(): string[] {
  const t = read('sa_somadeva-kathAsaritsAgaravetAlapaJcaviMzatikA');
  // each verse: two lines, the second ending "// SoKs_… [= Vet_1]"; a verse is a sentence
  const out: string[] = [];
  let buf = '';
  for (const line of t.split('\n')) {
    if (!line.trim()) { buf = ''; continue; }
    buf += ' ' + line;
    if (/\[= Vet_1\]/.test(line)) out.push(buf.replace(/\/\/.*$/, '').trim());
    if (/\/\/ SoKs/.test(line)) buf = '';
  }
  return out;
}

const fmt = (a: Analysis | null) => {
  if (!a) return '—';
  if (a.type === 'avyaya') return 'अव्यय' + (a.कृत् ? ` (${a.कृत्})` : '');
  if (a.type === 'tinanta')
    return [a.लकार, a.पुरुष, a.वचन, a.पद, a.प्रयोग !== 'कर्तरि' ? a.प्रयोग : '', a.उपसर्ग?.join('+')].filter(Boolean).join(' ');
  return [a.विभक्ति, a.वचन, a.लिङ्ग, a.कृत्].filter(Boolean).join(' ');
};

const engine = new Engine();
const mdN = (() => { const i = process.argv.indexOf('--md'); return i >= 0 ? Number(process.argv[i + 1]) : 0; })();
for (const [name, sents] of [['panc-kilotpatin', pancatantra()], ['vetala-1', vetala1()]] as const) {
  const sentences: { iast: string; text: string; tokens: Token[] }[] = [];
  for (const iast of sents) {
    const text = iastToDeva(iast);
    sentences.push({ iast, text, tokens: await analyzeSentence(engine, text) });
  }
  fs.mkdirSync(OUT, { recursive: true });
  fs.writeFileSync(path.join(OUT, name + '.json'), JSON.stringify({ name, sentences }, null, 1));
  const nTok = sentences.reduce((n, s) => n + s.tokens.length, 0);
  const nNull = sentences.reduce((n, s) => n + s.tokens.filter((t) => !t.best).length, 0);
  console.error(`${name}: ${sentences.length} sentences, ${nTok} padas (${nNull} unanalysed) → static/data/analyses/${name}.json`);
  if (!mdN) continue;
  console.log(`\n#### ${name}\n`);
  sentences.slice(0, mdN).forEach((s, i) => {
    console.log(`\n**${i + 1}.** ${s.text}\n\n| # | word | padas | lemma | analysis | gloss (MW) |\n|---|---|---|---|---|---|`);
    const words = s.text.replace(/[।॥|/—–-]+/g, ' ').split(/\s+/).filter(Boolean);
    let last = -2;
    s.tokens.forEach((t, k) => {
      const w = t.word ?? -1;
      const word = w !== last ? (words[w] ?? '?') : '〃';
      last = w;
      const g = t.mw ? `${t.mw.senses[0].slice(0, 60)}` : '—';
      console.log(`| ${k + 1} | ${word} | ${t.form} | ${t.best?.lemma ?? '—'} | ${fmt(t.best)} | ${g.replace(/\|/g, '/')} |`);
    });
  });
}
engine.close();
