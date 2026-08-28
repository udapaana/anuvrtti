#!/usr/bin/env bun
/**
 * import-mw.ts — gender for a noun stem, from Monier-Williams.
 *
 * WHY A DICTIONARY AT ALL. Everything else the reader shows about a word can be
 * derived: vidyut generates forms, and matching the attested form against them
 * recovers लकार, पुरुष, वचन, पद, उपसर्ग. Gender cannot be recovered that way,
 * because it is an INPUT to derivation and not an output — you must already know
 * देव is masculine in order to decline it. build-quiz says so in its own header.
 * That is why 961 words are missing लिङ्ग and why no amount of generate-and-match
 * will close the gap. It is a lexical fact, and it needs a lexicon.
 *
 * WHICH DICTIONARY. Ambuda's. Its seeder (ambuda/seed/dictionaries/monier.py)
 * pulls Monier-Williams from the Cologne Digital Sanskrit Lexicon, so "Ambuda's
 * dictionary" is MW/CDSL, and this reads the same text. Cologne's own host is
 * blocked from this environment (403 at the agent proxy, an organisation policy
 * denial rather than an outage), so the file comes from the sanskrit-lexicon
 * GitHub mirror of the identical data: csl-orig v02/mw/mw.txt, 50 MB, 286,525
 * entries.
 *
 * WHAT IS COMMITTED. The projection, not the source. dhatupatha.tsv is vendored
 * whole because it is 55 KB; 50 MB of dictionary is not something to carry in a
 * repository to read one field out of. So this script is run deliberately —
 * like Ambuda's own seeders — and its output is the vendored artefact:
 *
 *   bun scripts/import-mw.ts path/to/mw.txt   →   data/mw-linga.tsv
 *
 * ADJECTIVES ARE NOT THREE-GENDERED NOUNS. `<lex>mfn.</lex>` is मfन — an
 * adjective, which takes the gender of whatever it modifies and so has no
 * gender of its own to record. देव has both: the adjective "heavenly" and the
 * noun "a god". Reading their union as "देव is masculine, feminine and neuter"
 * would be worse than recording nothing.
 *
 * WHICH FIELD SAYS SO. The body's own `<lex>` markup, NOT the `<info lex="…"/>`
 * summary — the summary flattens distinctions that this entirely depends on.
 * मुख is the case that proved it:
 *
 *   <lex>n.</lex> (<lex type="hwalt">m.</lex> …; ifc. <lex type="hwifc">f(A, or I).</lex>)
 *   <info lex="m:f#A:f#I:n"/>
 *
 * The headword is NEUTER. `m.` is an alternate headword and the feminines exist
 * only ifc. — as the last member of a compound — which is not a gender the stem
 * has. Flattened, all four collapse into `m:f#A:f#I:n`, which is indistinguishable
 * from the mfn adjective pattern, and मुख was imported as "an adjective, no
 * gender". Reading the bare `<lex>` elements and ignoring every `type="…"`
 * variant keeps the headword's own gender and discards the rest.
 *
 * WHAT IT STILL CANNOT DO. MW records homonyms under one key — गृह is listed
 * both m. and n., काल both m. and n. — and nothing in the entry says which one
 * a given text means. So the output is a CANDIDATE SET, never an answer;
 * build-quiz uses it to bound a choice that derivation makes. Where derivation
 * has nothing to go on either, the stem is left unset rather than guessed.
 */
import * as fs from 'fs';
import * as path from 'path';

const SRC = process.argv[2];
const OUT = path.join(process.cwd(), 'data/mw-linga.tsv');

if (!SRC || !fs.existsSync(SRC)) {
  console.error(
    'usage: bun scripts/import-mw.ts <mw.txt>\n\n' +
      '  Get it with:\n' +
      '    curl -sSL -o mw.txt \\\n' +
      '      https://raw.githubusercontent.com/sanskrit-lexicon/csl-orig/master/v02/mw/mw.txt\n\n' +
      '  This is the text Ambuda seeds MW from (via CDSL). It is 50 MB and is\n' +
      '  deliberately NOT committed; data/mw-linga.tsv is.'
  );
  process.exit(1);
}

// SLP1 → Devanagari, the same tables the build uses on vidyut's output.
const V: Record<string, string> = {
  a: 'अ', A: 'आ', i: 'इ', I: 'ई', u: 'उ', U: 'ऊ', f: 'ऋ', F: 'ॠ', x: 'ऌ', X: 'ॡ',
  e: 'ए', E: 'ऐ', o: 'ओ', O: 'औ'
};
const M: Record<string, string> = {
  a: '', A: 'ा', i: 'ि', I: 'ी', u: 'ु', U: 'ू', f: 'ृ', F: 'ॄ', x: 'ॢ', X: 'ॣ',
  e: 'े', E: 'ै', o: 'ो', O: 'ौ'
};
const C: Record<string, string> = {
  k: 'क', K: 'ख', g: 'ग', G: 'घ', N: 'ङ', c: 'च', C: 'छ', j: 'ज', J: 'झ', Y: 'ञ',
  w: 'ट', W: 'ठ', q: 'ड', Q: 'ढ', R: 'ण', t: 'त', T: 'थ', d: 'द', D: 'ध', n: 'न',
  p: 'प', P: 'फ', b: 'ब', B: 'भ', m: 'म', y: 'य', r: 'र', l: 'ल', v: 'व',
  S: 'श', z: 'ष', s: 'स', h: 'ह', L: 'ळ'
};
function toDeva(slp: string): string | null {
  let out = '';
  let i = 0;
  while (i < slp.length) {
    const c = slp[i];
    if (C[c]) {
      out += C[c];
      const n = slp[i + 1];
      if (n !== undefined && M[n] !== undefined) { out += M[n]; i += 2; }
      else { out += '्'; i += 1; }
      continue;
    }
    if (V[c]) { out += V[c]; i++; continue; }
    if (c === 'M') { out += 'ं'; i++; continue; }
    if (c === 'H') { out += 'ः'; i++; continue; }
    return null; // a key with anything else in it is not a plain stem
  }
  return out;
}

/** stem → what MW says it can be */
const acc = new Map<string, { g: Set<string>; adj: boolean; ind: boolean }>();
/** `<lex>` spellings this script does not understand, so the tail stays visible. */
const unrecognised = new Map<string, number>();

const text = fs.readFileSync(SRC, 'utf-8');
let entries = 0, keyed = 0, unconvertible = 0;

for (const block of text.split('<LEND>')) {
  const k = block.match(/<k1>([^<]*)/);
  if (!k) continue;
  entries++;
  /*
    Bare <lex> only. A `type="hwalt"` / `"hwifc"` / `"phw"` / `"nhw"` variant
    describes an alternate or compound-only headword, not this one's gender.

    The content is not always plain text: `<lex>mf(<s>ikA</s>)n.</lex>` names
    the feminine affix inline, and 9,343 elements do this — almost all of them
    adjectives. Matching `[^<]*` skipped every one, which is how पुस्तक lost its
    mf(ikA)n. "manuscript, book" sense — the only sense the corpus ever means —
    and kept only the m. of "a protuberant ornament". So take everything up to
    the closing tag and strip the inner markup.
  */
  const lexes = [...block.matchAll(/<lex>(.*?)<\/lex>/g)]
    .map((m) => m[1].replace(/<[^>]*>/g, ''));
  if (!lexes.length) continue;

  const dev = toDeva(k[1]);
  if (!dev) { unconvertible++; continue; }
  keyed++;
  const e = acc.get(dev) ?? { g: new Set<string>(), adj: false, ind: false };

  for (const raw of lexes) {
    /*
      The vocabulary is small and almost entirely regular: m. f. n. mfn. ind.,
      plus a long tail of a dozen or so two-gender spellings (nf. fn. m.f. nm.)
      and two entries carrying an editorial correction in {{…}} markup. Anything
      unrecognised is counted and skipped rather than guessed at, so the tally
      at the end says whether the tail has grown.
    */
    // `mf(A)n.`, `mf(A or I)n.`, `mf(ikA)n.` — the parenthesis names how the
    // feminine is formed and says nothing about which genders the word has.
    // `m. pl.`, `f. du.` — a gender plus the number the word is restricted to.
    // The number is a fact about the word's usage, not about its gender, and
    // dropping these lost 2,508 entries that state a gender perfectly clearly.
    const lex = raw.trim()
      .replace(/\([^)]*\)/g, '')
      .replace(/\s*\b(?:pl|du|sg)\.?\s*$/, '')
      .replace(/\.$/, '');
    if (lex === 'mfn') { e.adj = true; continue; }
    if (lex === 'ind') { e.ind = true; continue; }
    const letters = lex.replace(/\./g, '');
    if (/^[mfn]{1,3}$/.test(letters)) {
      for (const p of letters) e.g.add(p);
      continue;
    }
    unrecognised.set(raw, (unrecognised.get(raw) ?? 0) + 1);
  }
  acc.set(dev, e);
}

const rows: string[] = [];
for (const [stem, e] of [...acc].sort()) {
  if (!e.g.size && !e.adj && !e.ind) continue;
  const kind = e.g.size ? 'noun' : e.adj ? 'adj' : 'ind';
  rows.push(`${stem}\t${[...e.g].sort().join(',')}\t${kind}${e.adj && e.g.size ? ',adj' : ''}`);
}

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, `# stem\tgenders(m,f,n)\tkind — from Monier-Williams (CDSL), see scripts/import-mw.ts\n${rows.join('\n')}\n`);

const one = rows.filter((r) => r.split('\t')[1].split(',').filter(Boolean).length === 1).length;
console.log(
  `Read ${entries} entries, ${keyed} with a lex tag and a convertible key ` +
    `(${unconvertible} keys skipped: not a plain stem)\n` +
    `Wrote ${rows.length} stems → ${path.relative(process.cwd(), OUT)} ` +
    `(${(fs.statSync(OUT).size / 1e6).toFixed(2)} MB; ${one} with exactly one gender)` +
    (unrecognised.size
      ? `\n${[...unrecognised.values()].reduce((a, b) => a + b, 0)} unrecognised <lex> spelling(s), skipped: ` +
        [...unrecognised].sort((a, b) => b[1] - a[1]).slice(0, 8).map(([k, n]) => `${JSON.stringify(k)}×${n}`).join(' ')
      : '')
);
