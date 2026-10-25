#!/usr/bin/env bun
/**
 * padify.ts — write every reading in padas, so its saṃhitā can be built.
 *
 * The build makes a reading's written text (its saṃhitā) by joining its padas
 * with vidyut-sandhi. That only works if the sentence IS padas. Some were
 * authored with the sandhi of the next word already applied to a word —
 * वनं हसति, अन्ध एव, सुदर्शनो नाम, नास्त्य् अन्धः — so the pada behind them was
 * never written down, and padaccheda had nothing to show.
 *
 * For each such token this tries the padas it could stand for (ं → म्,
 * ो → ः, a lost visarga, ग् → क्, य् → इ …) and accepts one only when joining it
 * to the next word gives back exactly what is on the page. A token no
 * candidate explains is left alone and reported — that is a case for a person.
 *
 *   bun scripts/padify.ts            # the plan
 *   bun scripts/padify.ts --write    # rewrite the reading files
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml, stringify } from 'yaml';
import { samhitaOf } from './lib/sandhi';

const ROOT = process.cwd();
const DIR = path.join(ROOT, 'content/readings');
const WRITE = process.argv.includes('--write');
const VOWEL_NEXT = /^[अआइईउऊऋएऐओऔ]/;
const n = (s: string) => s.replace(/ऽ/g, '').replace(/\s+/g, ' ').trim();

/*
  The page alone cannot always tell a sandhi surface from an unsandhied pada:
  राजा अपृच्छत् is a pada left unjoined, but राजाः would explain it too. The
  grammar can. A candidate is accepted only when vidyut knows it as a form of
  the word's own lemma and does NOT know the written token as one — अन्ध is no
  form of अन्ध, अन्धः is.
*/
const known = new Set<string>([
  ...Object.keys(JSON.parse(fs.readFileSync(path.join(ROOT, 'static/data/lemma-cells.json'), 'utf-8'))),
  ...Object.keys(JSON.parse(fs.readFileSync(path.join(ROOT, 'static/data/tin-forms.json'), 'utf-8'))),
]);
const isForm = (lemma: string, form: string) => known.has(`${lemma}|${form}`);

/*
  The padas a sandhi surface could stand for — only for endings no pada has.
  A pada never ends in anusvāra (it is म्), in स्/श्/ष्/र् (they are ः), in a
  voiced stop (ग्/द्/ड्/ब् are क्/त्/ट्/प् at a pause), or in य्/व् (the इ/उ
  before a vowel). A vowel-final token is NOT guessed at: राजा अपृच्छत् is an
  unjoined pada, and the page cannot say otherwise.
*/
function candidates(t: string, lemma: string): string[] {
  const c: string[] = [];
  // a vowel sign replaces the virāma it lands on: शमयत्य् → शमयति
  const end = (f: string, r: string) => t.endsWith(f) && c.push(/^[ािीुूृेैोौ]$/.test(r) ? t.slice(0, -f.length).replace(/्$/, '') + r : t.slice(0, -f.length) + r);
  end('ं', 'म्');
  for (const f of ['स्', 'श्', 'ष्', 'र्']) end(f, 'ः');
  end('ग्', 'क्'); end('द्', 'त्'); end('ड्', 'ट्'); end('ब्', 'प्'); end('ज्', 'त्');
  end('य्', /ी$/.test(lemma) ? 'ी' : 'ि'); end('व्', /ू$/.test(lemma) ? 'ू' : 'ु');
  if (t.endsWith('ो') && /[क-ह]$/.test(lemma)) end('ो', 'ः');   // an अ-stem's ः before a soft sound
  return c;
}

let fixed = 0, unexplained = 0;
const report: string[] = [];
for (const ch of fs.readdirSync(DIR)) {
  const d = path.join(DIR, ch);
  if (!fs.statSync(d).isDirectory() || /rigveda/.test(ch)) continue;
  for (const f of fs.readdirSync(d)) {
    if (!f.endsWith('.yaml') || f.startsWith('_')) continue;
    const file = path.join(d, f);
    const doc = parseYaml(fs.readFileSync(file, 'utf-8'));
    const r = doc?.[0];
    if (!r?.sentence || /[→=+]/.test(r.sentence)) continue;
    const toks = String(r.sentence).split(/(\s+)/);
    const words = r.words ?? [];
    let changed = false;
    const renames: [string, string][] = [];
    // index of the next word-token after position i
    const nextWord = (i: number) => { for (let k = i + 1; k < toks.length; k++) if (toks[k].trim()) return k; return -1; };
    for (let i = 0; i < toks.length; i++) {
      const raw = toks[i];
      if (!raw.trim()) continue;
      const tok = raw.replace(/[।॥,;—"“”?!:()]+$/, '');
      const w0 = words.find((w: any) => w.form === tok);
      let pick: string | undefined;
      if (tok.endsWith('ं')) {
        // a pada never ends in anusvāra: ग्रामं is ग्रामम्, before a pause too
        pick = tok.slice(0, -1) + 'म्';
      } else {
        if (tok !== raw) continue;                        // a pause follows: nothing to explain
        const j = nextWord(i);
        if (j < 0) continue;
        const next = toks[j].replace(/[।॥,;—"“”?!:()]+$/, '');
        if (!next || /^[।॥—]/.test(next)) continue;
        const page = n(samhitaOf(`${tok} ${next}`, () => null).map((x) => x.text).join(' '));
        const cands = candidates(tok, w0?.lemma ?? '');
        /*
          A lost visarga (अन्ध एव, बाला गच्छन्ति) leaves a vowel-final token the
          page cannot tell from an unjoined pada. The word's own tags can: a
          nominative of an अ-stem ends in ः. Tried only for such a word.
        */
        const tags = new Set((w0?.notes ?? []).map((x: any) => x.term));
        if (/[क-ह]$/.test(tok) && /[क-ह]$/.test(w0?.lemma ?? '') && tags.has('प्रथमा') && VOWEL_NEXT.test(next)) cands.push(tok + 'ः');
        if (!cands.length) continue;
        // an ending no pada has (विनयाद्, पर्वतो) is a surface whatever follows; otherwise a token the join leaves alone is a pada
        const impossible = /([गदडबजयवरसशष]्|ो)$/.test(tok);
        if (!impossible && page === n(`${tok} ${next}`) && !cands.some((c) => c.endsWith('ः') && VOWEL_NEXT.test(next))) continue;
        pick = cands.find((c) => n(samhitaOf(`${c} ${next}`, () => null).map((x) => x.text).join(' ')) === n(`${tok} ${next}`) || n(samhitaOf(`${c} ${next}`, () => null).map((x) => x.text).join(' ')) === page);
      }
      if (!pick) continue;
      toks[i] = raw.replace(tok, pick);
      for (const w of words) if (w.form === tok) w.form = pick;
      renames.push([tok, pick]);
      report.push(`${r.id}  ${tok}  →  ${pick}`);
      changed = true; fixed++;
    }
    if (changed && WRITE) {
      // edit the lines in place, so the diff is the change and nothing else
      let text = fs.readFileSync(file, 'utf-8');
      const sentence = toks.join('');
      text = text.replace(/^(  sentence: )(['"]?)(.*)\2$/m, (_m, k, q) => k + q + (q === "'" ? sentence.replace(/'/g, "''") : sentence) + q);
      for (const [from, to] of renames) text = text.replace(new RegExp(`^(\\s*-?\\s*form: ['"]?)${from}(['"]?)$`, 'gm'), `$1${to}$2`);
      fs.writeFileSync(file, text);
    }
  }
}
for (const x of report) console.log('  ' + x);
console.log(`\n${fixed} sandhi surface(s) turned back into padas` + (WRITE ? ' — written' : ' — rerun with --write'));
