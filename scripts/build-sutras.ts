#!/usr/bin/env npx tsx
/**
 * Build anuvrtti's sutras.json FROM vidvat's data/sutras/*.yaml.
 *
 * vidvat is the cleaner sūtra source. anuvrtti's parser (src/lib/data/parser.ts)
 * expects a specific record shape ({i,a,p,n,s,e,type,an,ad,pc,ss,...} with
 * delimited strings). This converter emits EXACTLY that shape from vidvat's
 * structured yaml, so the app's parser is unchanged and only the data is new.
 *
 *   → static/data/sutras.json   { name: "sutraani", data: [ {i,a,p,n,s,e,...}, ... ] }
 *
 * Field mapping (vidvat → anuvrtti raw):
 *   id→i  a→a p→p n→n  s→s  iast→e  adhikara→ad
 *   type+typeName → "CODE$typeName$"          (parser reads code + display name)
 *   inherits[{word,from}] → "word$<numId>##…"  (an; from-ref → numeric id)
 *   pada[str]            → "word$$$$##…"        (pc; parser reads word at seg[0])
 *   (no vidvat field for `ss` expanded-sandhi → "")
 */
import * as fs from 'fs';
import * as path from 'path';
import { parse as parseYaml } from 'yaml';

const VIDVAT = process.env.VIDVAT_DIR ?? '/Users/skmnktl/vidvat';
const SRC = path.join(VIDVAT, 'data/sutras');
const OUTPUT = path.join(process.cwd(), 'static/data/sutras.json');

const numId = (ref: string) => {
  const [a, p, n] = ref.split('.');
  return `${a}${p}${n.padStart(3, '0')}`;
};

function main() {
  if (!fs.existsSync(SRC)) {
    console.error(`vidvat sūtra data not found at ${SRC} (set VIDVAT_DIR)`);
    process.exit(1);
  }
  const data: any[] = [];
  const files = fs.readdirSync(SRC).filter((f) => f.endsWith('.yaml')).sort();
  for (const f of files) {
    const doc = parseYaml(fs.readFileSync(path.join(SRC, f), 'utf-8')) as any;
    for (const s of doc?.sutras ?? []) {
      const an = (s.inherits ?? [])
        .map((e: any) => `${e.word}$${numId(e.from)}`)
        .join('##');
      const pc = (s.pada ?? []).map((w: string) => `${w}$$$$`).join('##');
      const typeStr = s.type ? `${s.type}$${s.typeName ?? ''}$` : '';
      data.push({
        i: s.id,
        a: String(s.a),
        p: String(s.p),
        n: String(s.n),
        s: s.s,
        e: s.iast ?? '',
        type: typeStr,
        an,
        ad: s.adhikara ?? '',
        pc,
        ss: '',
      });
    }
  }
  fs.writeFileSync(OUTPUT, JSON.stringify({ name: 'sutraani', data }, null, 0));
  console.log(`Wrote ${data.length} sūtras → ${path.relative(process.cwd(), OUTPUT)}`);
}

main();
