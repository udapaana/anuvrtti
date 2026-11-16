/**
 * tei.ts — read a vendored TEI source (data/sources/*.xml) as a list of blocks.
 *
 * Ambuda's GRETIL fork and SARIT encode their texts unevenly: a verse is an
 * <lg> of <l>s, or loose <l>s, or an <lg> inside a <p>; its reference is an
 * xml:id (R_1.001.001, SoKs_12.8.21), or a marker closing its last line
 * (// KaU_1.1 //, || 1 ||, ||Panc_0.1||), or nothing. This reads all of them
 * into one shape, so a text builder or find-attested.ts works on blocks, not
 * markup:
 *
 *   { kind: 'verse' | 'prose' | 'head', div: ['1'], id?, ref?, lines: [...] }
 *
 * `div` is the n="" of each enclosing <div>, outermost first. `ref` is the
 * marker's inner text, with the marker removed from the line. Lines keep the
 * edition's daṇḍas; tags inside a line (<lb/>, <label>) are dropped and
 * entities decoded. <note> (Ambuda's hyphenated "analysis" copies, editorial
 * notes) is skipped. No XML library: the TEI here uses a handful of elements,
 * and a construct this does not know is left as text, where a check will see it.
 */
import * as fs from 'fs';
import * as path from 'path';

export type Block = { kind: 'verse' | 'prose' | 'head'; div: string[]; id?: string; ref?: string; lines: string[] };

const ROOT = process.cwd();
type Manifest = { texts: { slug: string; file: string; format?: string; archive?: { file: string } }[] };
let manifest: Manifest | null = null;
const readManifest = () => (manifest ??= JSON.parse(fs.readFileSync(path.join(ROOT, 'data/texts.json'), 'utf-8')));

/** The committed path of a source, by slug. */
export function sourceFile(slug: string): string {
  const t = readManifest().texts.find((x) => x.slug === slug);
  if (!t) throw new Error(`no source "${slug}" in data/texts.json`);
  return path.join(ROOT, t.file);
}
/** GRETIL's plain text of a source, kept as an archive copy (absent for SARIT). */
export function archiveFile(slug: string): string | null {
  const t = readManifest().texts.find((x) => x.slug === slug);
  return t?.archive ? path.join(ROOT, t.archive.file) : null;
}

const ENT: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };
const decode = (s: string) => s.replace(/&(amp|lt|gt|quot|apos);/g, (_, e) => ENT[e]).replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n));
const clean = (s: string) => decode(s.replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
const attr = (tag: string, name: string) => tag.match(new RegExp(`\\b${name}="([^"]*)"`))?.[1];

/** A marker closing a line: // X //, || X ||, ॥ X ॥ — X is not a bare daṇḍa run. */
const MARK = /\s*(?:\/\/|\|\||॥)\s*([^/|॥\s][^/|॥]*?)\s*(?:\/\/|\|\||॥)\s*$/;
function takeRef(lines: string[]): string | undefined {
  if (!lines.length) return undefined;
  const m = lines[lines.length - 1].match(MARK);
  if (!m) return undefined;
  lines[lines.length - 1] = lines[lines.length - 1].slice(0, m.index).trim();
  return m[1].trim();
}

export function readTei(slug: string): Block[] {
  const xml = fs.readFileSync(sourceFile(slug), 'utf-8');
  const start = xml.indexOf('<body');
  const end = xml.lastIndexOf('</body>');
  if (start < 0 || end < 0) throw new Error(`${slug}: no <body>`);
  // notes hold Ambuda's analysed copies and editors' remarks: not the text
  const body = xml.slice(xml.indexOf('>', start) + 1, end).replace(/<note\b[^>]*\/>/g, '').replace(/<note\b[\s\S]*?<\/note>/g, '');

  const blocks: Block[] = [];
  const div: string[] = [];
  let loose: string[] = []; // <l>s outside any <lg>
  const flushLoose = () => {
    if (!loose.length) return;
    const lines = loose;
    loose = [];
    const ref = takeRef(lines);
    blocks.push({ kind: 'verse', div: [...div], ref, lines });
  };
  const verse = (lgTag: string, inner: string) => {
    const lines = [...inner.matchAll(/<l\b[^>]*>([\s\S]*?)<\/l>/g)].map((m) => clean(m[1])).filter(Boolean);
    const id = attr(lgTag, 'xml:id');
    const ref = takeRef(lines);
    if (lines.length) blocks.push({ kind: 'verse', div: [...div], ...(id ? { id } : {}), ...(ref ? { ref } : {}), lines });
  };
  const prose = (text: string) => {
    let t = clean(text);
    if (!t) return;
    // a long paragraph may carry several numbered passages, each closed by its
    // own marker inside it (the Bhāgavata's gadya: … // BhP_05.01.007 // …):
    // each passage is a block with that number. Only an id-like marker
    // (letters, underscore, number) splits; a bare "|| 66 ||" closes the whole.
    const INLINE = /\s*(?:\/\/|\|\|)\s*([A-Za-z]+_[0-9][0-9.,]*\*?)\s*(?:\/\/|\|\|)\s*/g;
    let m: RegExpExecArray | null, from = 0;
    const pieces: { text: string; ref: string }[] = [];
    while ((m = INLINE.exec(t))) {
      if (m.index + m[0].length >= t.length) break; // a closing marker: takeRef's
      pieces.push({ text: t.slice(from, m.index).trim(), ref: m[1] });
      from = m.index + m[0].length;
    }
    for (const p of pieces) if (p.text) blocks.push({ kind: 'prose', div: [...div], ref: p.ref, lines: [p.text] });
    t = t.slice(from).trim();
    if (!t) return;
    const lines = [t];
    const ref = takeRef(lines);
    blocks.push({ kind: 'prose', div: [...div], ...(ref ? { ref } : {}), lines });
  };

  // one token at a time: the elements that carry structure
  const TOK = /<div\b[^>]*>|<\/div>|<head\b[^>]*>[\s\S]*?<\/head>|<lg\b[^>]*>[\s\S]*?<\/lg>|<p\b[^>]*>[\s\S]*?<\/p>|<l\b[^>]*>[\s\S]*?<\/l>/g;
  for (const m of body.matchAll(TOK)) {
    const tok = m[0];
    if (!tok.startsWith('<l>') && !tok.startsWith('<l ')) flushLoose();
    if (tok.startsWith('<div')) div.push(attr(tok, 'n') ?? String(div.length));
    else if (tok === '</div>') div.pop();
    else if (tok.startsWith('<head')) { const t = clean(tok); if (t) blocks.push({ kind: 'head', div: [...div], lines: [t] }); }
    else if (tok.startsWith('<lg')) verse(tok.slice(0, tok.indexOf('>') + 1), tok);
    else if (tok.startsWith('<p')) {
      // a <p> may hold verses (Bhāgavata: a speaker's line, then his verse)
      // — or loose <l>s with no <lg> (the Bhāgavata's stotras, its starred
      // verses): a run of them is a verse, closed by the line carrying a marker
      const inner = tok.slice(tok.indexOf('>') + 1, -4);
      let last = 0;
      for (const v of inner.matchAll(/<lg\b[^>]*>[\s\S]*?<\/lg>|(?:<l\b[^>]*>[\s\S]*?<\/l>\s*)+/g)) {
        prose(inner.slice(last, v.index));
        if (v[0].startsWith('<lg')) verse(v[0].slice(0, v[0].indexOf('>') + 1), v[0]);
        else {
          for (const l of v[0].matchAll(/<l\b[^>]*>([\s\S]*?)<\/l>/g)) { loose.push(clean(l[1])); if (takeRefNow(loose)) flushLoose(); }
          flushLoose();
        }
        last = v.index! + v[0].length;
      }
      prose(inner.slice(last));
    } else loose.push(clean(tok)), (takeRefNow(loose) && flushLoose());
  }
  flushLoose();
  return blocks;
}
/** Loose <l>s form one verse, closed by the line that carries its marker. */
const takeRefNow = (lines: string[]) => MARK.test(lines[lines.length - 1] ?? '');

/** A block's citation: its id, else its marker, else its division and position. */
export function cite(slug: string, b: Block, i: number): string {
  return b.id ?? b.ref ?? `${slug.replace(/^sa_/, '')} ${[...b.div, `#${i + 1}`].join('.')}`;
}
