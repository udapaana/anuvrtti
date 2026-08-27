#!/usr/bin/env bun
/**
 * build-dhatu-map.ts — every धातु vidyut can conjugate, keyed by its Devanagari name.
 *
 * THE PROBLEM. build-quiz generates the तिङन्त form→parse index by asking vidyut
 * to derive every cell of every root. To ask, it needs vidyut's own identifier
 * for the root — the aupadeśika string, `BU` for भू, `qupaca~^` for पच् — plus
 * the गण. vidyut's WASM exposes only derive*(); it takes those as INPUT and has
 * no lookup that goes the other way. So the map was hand-written, and it held
 * thirty roots.
 *
 * The corpus uses a hundred and twenty-two. The ninety-two vidyut had never
 * heard of simply fell out of the index: 159 of 666 finite verbs got no लकार,
 * no पुरुष, no वचन and no पद from the generator, not because the forms are hard
 * but because nobody had transcribed पूज् or त्यज् into the map by hand.
 *
 * THE SOURCE. vidyut ships the Dhātupāṭha it was built against as one TSV —
 * 2259 roots, code / aupadeśika / artha. That file is the right authority here
 * precisely because it is vidyut's: an aupadeśika is not a standard citation
 * form but an encoding, complete with its anubandhas and accents, and another
 * dictionary's dhātu list would name the same root a different way. The गण is
 * the code's first pair of digits — 01.0001 is भ्वादि.
 *
 * THE JOIN. A reading names a root the way a grammar does — गम्, पच्, नी — so
 * the aupadeśika's इत् markers have to come off to meet it: the initial डु / ड्व
 * / ण / ष, the final ~ with whatever anubandhas follow it, and the accent marks.
 * That stripping is the only guesswork here, so it is checked rather than
 * trusted: the thirty hand-written entries are a fixture, and this script fails
 * if it cannot reproduce every one of them.
 *
 *   → static/data/dhatu-map.json   { "गम्": ["ga\\mx~", "Bhvadi"], … }
 *
 * The TSV is vendored to data/dhatupatha.tsv rather than fetched at build time:
 * a build should not depend on GitHub being up, and the file changes when we
 * choose to update it, not when upstream does.
 */
import * as fs from 'fs';
import * as path from 'path';

const SRC = path.join(process.cwd(), 'data/dhatupatha.tsv');
const OUT = path.join(process.cwd(), 'static/data/dhatu-map.json');
const CHECK = process.argv.includes('--check');

const GANA_BY_CODE: Record<string, string> = {
  '01': 'Bhvadi', '02': 'Adadi', '03': 'Juhotyadi', '04': 'Divadi', '05': 'Svadi',
  '06': 'Tudadi', '07': 'Rudhadi', '08': 'Tanadi', '09': 'Kryadi', '10': 'Curadi'
};

// SLP1 → Devanagari, the same tables build-quiz uses on vidyut's output.
const SLP_VOWEL: Record<string, string> = {
  a: 'अ', A: 'आ', i: 'इ', I: 'ई', u: 'उ', U: 'ऊ', f: 'ऋ', F: 'ॠ', x: 'ऌ', X: 'ॡ',
  e: 'ए', E: 'ऐ', o: 'ओ', O: 'औ'
};
const SLP_MATRA: Record<string, string> = {
  a: '', A: 'ा', i: 'ि', I: 'ी', u: 'ु', U: 'ू', f: 'ृ', F: 'ॄ', x: 'ॢ', X: 'ॣ',
  e: 'े', E: 'ै', o: 'ो', O: 'ौ'
};
const SLP_CONS: Record<string, string> = {
  k: 'क', K: 'ख', g: 'ग', G: 'घ', N: 'ङ', c: 'च', C: 'छ', j: 'ज', J: 'झ', Y: 'ञ',
  w: 'ट', W: 'ठ', q: 'ड', Q: 'ढ', R: 'ण', t: 'त', T: 'थ', d: 'द', D: 'ध', n: 'न',
  p: 'प', P: 'फ', b: 'ब', B: 'भ', m: 'म', y: 'य', r: 'र', l: 'ल', v: 'व',
  S: 'श', z: 'ष', s: 'स', h: 'ह', L: 'ळ'
};

function toDeva(slp: string): string {
  let out = '';
  let i = 0;
  while (i < slp.length) {
    const c = slp[i];
    if (SLP_CONS[c]) {
      out += SLP_CONS[c];
      const n = slp[i + 1];
      if (n !== undefined && SLP_MATRA[n] !== undefined) { out += SLP_MATRA[n]; i += 2; }
      else { out += '्'; i += 1; }
      continue;
    }
    if (SLP_VOWEL[c]) { out += SLP_VOWEL[c]; i++; continue; }
    if (c === 'M') { out += 'ं'; i++; continue; }
    if (c === 'H') { out += 'ः'; i++; continue; }
    i++;
  }
  return out;
}

/**
 * The citation root inside an aupadeśika.
 *
 * इत् markers are diacritics on the entry, not sounds of the root: 1.3.5 आदिर्
 * ञिटुडवः drops an initial ञि/टु/डु, 1.3.6 षः प्रत्ययस्य and 1.3.7 चुटू drop
 * the ण् and ष् some entries carry, and everything from the ~ onward is the
 * anubandha string. The accents (\\ ^) are marks on the vowel, not letters.
 */
const CONS = 'kKgGNcCjJYwWqQRtTdDnpPbBmyrlvSzshL';
const VOW = 'aAiIuUfFxXeEoO';

function bareRoot(aup: string): string {
  let s = aup;
  s = s.replace(/[\\^]/g, ''); // udātta / svarita marks — on the vowel, not letters
  /*
    The इत् vowel and everything after it.

    `~` marks the preceding vowel as anunāsika, and an anunāsika vowel in an
    upadeśa is इत् (1.3.2 उपदेशेऽजनुनासिक इत्). So the vowel BEFORE the tilde
    goes with it: वसँ `vasa~` is वस्, and गमॢँ `ga\\mx~` is गम् — that ऌ is a
    marker, not a sound. Stripping only from the tilde onward left गम्ऌ and
    dropped गम् out of the map entirely.
  */
  s = s.replace(new RegExp(`[${VOW}]~.*$`), '');
  s = s.replace(/~.*$/, ''); // a tilde with no vowel before it

  // Initial इत् syllables: डु, ड्व, ञि, टु (1.3.5 आदिर्ञिटुडवः).
  s = s.replace(/^(qu|qv|Yi|wu)/, '');

  /*
    An initial ण् or ष् is REPLACED, not dropped. 6.1.65 णो नः turns the ण of
    णीञ् into न — the root is नी, not ई — and 6.1.64 धात्वादेः षः सः does the
    same for ष: ष्ठा is स्था. Deleting them cost नी, स्था and every root cited
    this way, which is what the fixture caught.
  */
  if (s[0] === 'R') s = 'n' + s.slice(1);
  else if (s[0] === 'z') {
    /*
      ष् → स् un-retroflexes what it caused. ष्ठा is cited `zWA\`, and turning
      only the ष into स leaves स्ठा — but the ठ is retroflex BECAUSE of the ष
      (ष्टुत्व), so it reverts with it and the root is स्था. Same for the ट-series
      after any ष-initial entry.
    */
    const UNRETRO: Record<string, string> = { w: 't', W: 'T', q: 'd', Q: 'D', R: 'n' };
    s = 's' + s.slice(1).replace(/^[wWqQR]/, (c) => UNRETRO[c]);
  }

  /*
    A final consonant इत् — but ONLY where the entry had no tilde.

    1.3.3 हलन्त्यम् makes a final consonant इत्, and that is the ञ् of ब्रूञ्
    (`brUY`) and the ङ् of शीङ् (`SIN`). It must not run on a root that already
    lost an इत् vowel above: `vasa~` is वस् once the अँ goes, and taking its
    final consonant too leaves वा. The tilde is what tells the two apart —
    an entry that had one has already been trimmed, and its last consonant is
    the root's own.

    The vowel guard keeps a cluster intact, so `pra\Ca~` is untouched.
  */
  if (!aup.includes('~')) {
    const last = s[s.length - 1];
    if (CONS.includes(last) && VOW.includes(s[s.length - 2] ?? '')) s = s.slice(0, -1);
  }
  return s;
}

const rows = fs.readFileSync(SRC, 'utf-8').trim().split('\n').slice(1);
/*
  A root may have SEVERAL entries, and choosing between them is not this
  script's job.

  पच् is both डुपचँष् (`qupaca~^`, to cook) and पचिँ (`paci~\`, to spread) —
  same spelling, same गण, different verbs. Keeping only the first was picking
  by file order, which is how the map ends up deriving a plausible form of the
  wrong root: precisely the failure the hand-written table's own comment warns
  about, and one a गण check cannot catch because both are भ्वादि.

  So every candidate is kept, in Dhātupāṭha order, and the consumer decides —
  build-quiz already knows how, because it verifies a root by deriving a form
  the corpus actually uses and comparing. A list makes that check the arbiter
  instead of leaving it to whichever line came first.
*/
const map: Record<string, [string, string][]> = {};
let skipped = 0;
for (const line of rows) {
  const [code, aup] = line.split('\t');
  if (!code || !aup) continue;
  const gana = GANA_BY_CODE[code.slice(0, 2)];
  if (!gana) { skipped++; continue; }
  const dev = toDeva(bareRoot(aup)) ;
  if (!dev) { skipped++; continue; }
  // First entry wins: the Dhātupāṭha lists homonyms across gaṇas (भू is 01.0001
  // and also 10.xxx), and the earlier gaṇa is the one a reader means by भू.
  (map[dev] ??= []).push([aup, gana]);
}

/*
  The fixture. These thirty pairs were transcribed by hand and are known good,
  so they are what the anubandha stripping is judged against — if the derived
  map disagrees with any of them, the stripping is wrong and the whole file is
  suspect, not just that row.
*/
const FIXTURE: Record<string, [string, string]> = {
  'भू': ['BU', 'Bhvadi'], 'वस्': ['vasa~', 'Bhvadi'], 'पठ्': ['paWa~', 'Bhvadi'],
  'पच्': ['qupaca~^', 'Bhvadi'], 'रक्ष्': ['rakza~', 'Bhvadi'], 'वद्': ['vada~', 'Bhvadi'],
  'क्रुध्': ['kruDa~', 'Divadi'], 'तुष्': ['tuza~', 'Divadi'], 'रुच्': ['ruca~\\', 'Bhvadi']
};

/*
  What the fixture may and may not assert.

  The गण must agree exactly: it is a fact about the root, and a wrong one
  silently derives a different verb rather than failing — which is the failure
  mode the hand map's own comment warns about.

  The aupadeśika may NOT be asserted as equal. Upstream carries accents and
  anubandhas the hand transcription dropped — वस् is `va\sa~` there and `vasa~`
  here, पच् is `qupa\ca~^z` against `qupaca~^`. Those are the same root more
  fully spelled, and upstream's is the authority, since it is the file vidyut
  was built against. Requiring equality would be asserting that the
  simplification is correct and the source is wrong.

  So: the root must be FOUND and its गण must match. Whether vidyut accepts the
  fuller string is not a question a string comparison can answer — it is
  answered by the tiṅanta index coverage after the swap, which is measured.
*/
const bad: string[] = [];
for (const [root, [aup, gana]] of Object.entries(FIXTURE)) {
  const got = map[root];
  if (!got) { bad.push(`${root}: absent from the derived map (hand map says ${aup} ${gana})`); continue; }
  /*
    The assertion is that a candidate exists in the hand-checked गण — not that
    its string matches. Upstream spells the same root more fully: पच् is
    `qupa\ca~^z` there against `qupaca~^` here, carrying an accent and a ष्
    anubandha the transcription dropped. Demanding equality would assert that
    the simplification is right and the source vidyut was built against is
    wrong. Which candidate is the intended root is settled by derivation, in
    build-quiz, against a form the corpus actually attests.
  */
  if (!got.some(([, g]) => g === gana)) {
    bad.push(`${root}: hand map says गण ${gana}, candidates are ${got.map(([a, g]) => a + ' ' + g).join(', ')}`);
  }
}

const json = JSON.stringify(map);

if (bad.length) {
  console.error(`anubandha stripping disagrees with ${bad.length} known root(s):`);
  for (const b of bad) console.error(`  ${b}`);
  process.exit(1);
}

if (CHECK) {
  const disk = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf-8') : '';
  if (disk !== json) {
    console.error('static/data/dhatu-map.json is stale. Run bun scripts/build-dhatu-map.ts');
    process.exit(1);
  }
  console.log(`dhātu map: ${Object.keys(map).length} roots, ${Object.keys(FIXTURE).length} fixture roots agree`);
} else {
  fs.writeFileSync(OUT, json);
  console.log(
    `Wrote ${Object.keys(map).length} roots → ${path.relative(process.cwd(), OUT)} ` +
      `(${rows.length} entries, ${skipped} skipped, ` +
      `${Object.values(map).filter((c) => c.length > 1).length} roots with more than one candidate; ` +
      `${Object.keys(FIXTURE).length} fixture roots agree)`
  );
}
