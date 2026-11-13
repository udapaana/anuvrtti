#!/usr/bin/env bun
/**
 * import-mw-gloss.ts — the first senses of every Monier-Williams headword, for
 * scripts/analyze-text.ts (machine annotation of whole texts).
 *
 * import-mw.ts already reads MW for one field (gender, → data/mw-linga.tsv).
 * This reads it for the meaning: for each headword (SLP1 `<k1>`), its gender /
 * part-of-speech label and the English of its first few sense records, with
 * citations, Sanskrit illustrations and parentheticals stripped.
 *
 * SOURCE, PINNED. csl-orig v02/mw/mw.txt — the Cologne Digital Sanskrit
 * Lexicon's canonical text of MW (1899), the text Ambuda seeds from. Fetched
 * from the sanskrit-lexicon GitHub mirror at a fixed commit (Cologne's own host
 * is blocked from this environment) and checked by sha256:
 *
 *   https://raw.githubusercontent.com/sanskrit-lexicon/csl-orig/
 *     1600d6ba3a7613e5ca4abd0b3964b24e32a212d3/v02/mw/mw.txt
 *   sha256 e4641dc4384de459408368a9b34b2a13c90a19b0ecd4671f92c055b7578d0129
 *
 * LICENCE. csl-orig is CC BY-SA 4.0 (its LICENSE at that commit). The
 * projection written here is a derivative: anything that ships it must credit
 * "Monier-Williams, A Sanskrit-English Dictionary (1899), digitised by the
 * Cologne Digital Sanskrit Dictionaries" and stay CC BY-SA. Its senses ship in
 * the reader's whole texts (through data/text-analyses/), credited on each
 * text's page and at /about#credits.
 *
 * NOT COMMITTED. mw.txt is 50 MB and the projection ~14 MB; both live in the
 * git-ignored cache data/mw/, rebuilt by running this script (it fetches the
 * pinned file when absent). Like data/texts/, pinned rather than vendored.
 *
 *   bun scripts/import-mw-gloss.ts      → data/mw/gloss.tsv
 *
 * Row: slp1-key \t homonym-count \t lex \t senses (" | "-joined).
 */
import * as fs from 'fs';
import * as path from 'path';
import { createHash } from 'crypto';

const ROOT = process.cwd();
const DIR = path.join(ROOT, 'data/mw');
const SRC = path.join(DIR, 'mw.txt');
const OUT = path.join(DIR, 'gloss.tsv');
export const MW_URL =
  'https://raw.githubusercontent.com/sanskrit-lexicon/csl-orig/1600d6ba3a7613e5ca4abd0b3964b24e32a212d3/v02/mw/mw.txt';
export const MW_SHA256 = 'e4641dc4384de459408368a9b34b2a13c90a19b0ecd4671f92c055b7578d0129';

async function ensureSource() {
  fs.mkdirSync(DIR, { recursive: true });
  if (!fs.existsSync(SRC)) {
    console.log(`fetching ${MW_URL}`);
    const r = await fetch(MW_URL);
    if (!r.ok) throw new Error(`fetch failed: ${r.status}`);
    fs.writeFileSync(SRC, Buffer.from(await r.arrayBuffer()));
  }
  const sha = createHash('sha256').update(fs.readFileSync(SRC)).digest('hex');
  if (sha !== MW_SHA256) throw new Error(`mw.txt sha256 ${sha} ≠ pinned ${MW_SHA256}`);
}

/** Strip a parenthesised / bracketed span, innermost first. */
function stripNested(s: string, open: string, close: string): string {
  const re = new RegExp(`\\${open}[^\\${open}\\${close}]*\\${close}`, 'g');
  let prev;
  do { prev = s; s = s.replace(re, ''); } while (s !== prev);
  return s;
}

/** The English of one MW record body, best effort. */
export function cleanSense(body: string, isRoot: boolean): string {
  let s = body
    .replace(/\{\{[^}]*\}\}/g, '') // {{Lbody=N}}: "see the body of record N", a cross-reference
    .replace(/<info[^>]*\/>/g, '')
    .replace(/<listinfo[^>]*\/>/g, '')
    .replace(/<ls[^>]*>.*?<\/ls>/g, '')
    .replace(/<lex[^>]*>.*?<\/lex>/g, '')
    .replace(/<hom>.*?<\/hom>/g, '')
    .replace(/<s>.*?<\/s>/g, '')
    .replace(/<ab>(.*?)<\/ab>/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/¦/g, '');
  s = stripNested(s, '(', ')');
  s = stripNested(s, '[', ']');
  if (isRoot) {
    // A root's entry opens with its forms; the meaning starts at "to …".
    const m = s.match(/\bto [a-z][\s\S]*/);
    if (m) s = m[0];
  }
  s = s
    .replace(/&c\.?/g, '')
    .replace(/\b(?:cl|P|Ā|A|pf|aor|fut|Pass|Caus|Desid|Intens|ind|L|ib|cf|fr|prob|accord|e\.g|i\.e|Ved|Subj|Pot|Impv|impf|inf|sg|pl|du|p|col|See|q\.v)\.(?=\s|,|;|$)/g, '')
    .replace(/\s+([,;.])/g, '$1')
    .replace(/[,;]\s*[,;]+/g, ';')
    .replace(/\s+/g, ' ')
    .replace(/^[\s,;:.=\-–—]+|[\s,;:\-–—]+$/g, '')
    .trim();
  return s;
}

if (import.meta.main) {
  await ensureSource();
  const text = fs.readFileSync(SRC, 'utf-8');
  type Acc = { homs: number; lex: string; senses: string[] };
  const acc = new Map<string, Acc>();
  for (const block of text.split('<LEND>')) {
    const head = block.match(/<k1>([^<]*)<k2>[^<]*(?:<h>(\d+))?<e>(\w+)/);
    if (!head) continue;
    const [, key, , e] = head;
    // Only the headword's own records (e = 1, 1A, 1B …, also 2/2A at the
    // second level is a sub-headword: skip compounds/derivatives, e ≥ 2 with no
    // own <k1> match is never reached because <k1> is that compound).
    const b = block.replace(/^\s+/, "");
    const body = b.slice(b.indexOf("\n") + 1);
    const a = acc.get(key) ?? { homs: 0, lex: '', senses: [] };
    if (/^\d+$/.test(e)) a.homs++;
    const lexes = [...body.matchAll(/<lex>(.*?)<\/lex>/g)].map((m) => m[1].replace(/<[^>]*>/g, '').trim());
    if (!a.lex && lexes.length) a.lex = lexes[0];
    const isRoot = /<ab>cl\.<\/ab>\s*\d/.test(body) || /√/.test(body.slice(0, 40));
    if (a.senses.length < 4) {
      const s = cleanSense(body, isRoot);
      if (/[a-z]{3,}/.test(s) && !/^(?:id|see|=)\b/i.test(s) && !/letter of the alphabet|^the (?:dental|guttural|palatal|cerebral|labial) |^to some for\.?$|^gen\. abl/.test(s)) a.senses.push(s.length > 160 ? s.slice(0, 157).replace(/\s\S*$/, '') + '…' : s);
    }
    acc.set(key, a);
  }
  const rows = [...acc].filter(([, a]) => a.senses.length).map(([k, a]) => `${k}\t${a.homs}\t${a.lex}\t${a.senses.join(' | ')}`);
  fs.writeFileSync(OUT, rows.join('\n') + '\n');
  console.log(`Wrote ${rows.length} headwords → ${path.relative(ROOT, OUT)} (${(fs.statSync(OUT).size / 1e6).toFixed(1)} MB)`);
}
