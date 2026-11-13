# Machine annotation of whole texts: how good is it?

The owner's question: if whole texts are annotated by vidyut and a dictionary
instead of by hand, how good is the tagging and the meaning? This document
records the generator that was built, the measurement against the corpus's
~7,700 hand-annotated words, and two real tales run cold.

**In short.** At the pinned `VIDYUT_REV`, vidyut-cheda has a one-character bug
that disables its lemma model for every noun. With that bug patched and a small
dictionary-aware re-ranker added, running saṃhitā gives **87% of words
segmented exactly**, and on those words **90% of lemmas, 80% of विभक्ति, 81%
of लिङ्ग, 93% of वचन and 83–87% of the verb fields** are right as the top
choice. For 92–99% of words the right analysis is in vidyut's list of
alternatives. Counting the words that come out entirely right with no edit,
the figure is **63% on the corpus overall, 54% on attested readings, and about
45–50% of padas on Pañcatantra and Vetāla prose and verse that nobody has
annotated**. MW's first sense fits the context for 38 of 50 sampled words.

So an author correcting machine output instead of typing from scratch would
still touch about half of all words in a real text. Most of those fixes are a
choice from a list the tool already offers, but compounds and case or gender
in context still need a human. This also applies only to the dimensions vidyut
knows about: कारक, notes, sūtra citations and the reader's English are not
generated at all.

---

## 1. What was built

| piece | where | what |
|---|---|---|
| native engine | `scripts/build-vidyut-native.sh`, `scripts/vidyut-native/` | a ~150-line Rust CLI (`anuvrtti-cheda`) linking vidyut-cheda + vidyut-kosha + vidyut-prakriya + vidyut-lipi **at `VIDYUT_REV`** (read from `deploy.yml`, the same pin as `build-wasm.sh`). JSON lines on stdin/stdout. Build-time only, never shipped. |
| engine data | fetched by the build script into `data/vidyut/` (git-ignored) | vidyut's release data `data-0.4.0.zip` (32 MB zip, 78 MB unpacked: `kosha/padas.fst`, `kosha/registry.msgpack`, `cheda/model.msgpack`, `sandhi/rules.csv`) from `https://github.com/ambuda-org/vidyut/releases/download/py-0.4.0/data-0.4.0.zip`, sha256 `5269cda8…0059ecb`. It is the URL the Python bindings at `VIDYUT_REV` download themselves. vidyut-kosha and vidyut-cheda have no commits after that release (the last is "[py] Finalize 0.4.0"), so the on-disk formats match the pin. Building the data from scratch needs the DCS corpus and `vidyut-data`'s `make create_all_data`, which takes hours, and nothing here needs that. |
| MW glosses | `scripts/import-mw-gloss.ts` → `data/mw/gloss.tsv` (git-ignored) | csl-orig `v02/mw/mw.txt`, pinned to commit `1600d6ba…` and verified against sha256 `e4641dc4…0d0129` (50 MB, fetched from the sanskrit-lexicon GitHub mirror because Cologne's host is blocked here). The script projects each SLP1 headword to its gender label and the English of its first four sense records, giving 162,045 headwords in 8.8 MB. |
| generator | `scripts/analyze-text.ts` | takes a passage (Devanagari or SLP1 saṃhitā, or `--iast`) and returns sentences → padas, each with `best`, vidyut's own `vidyut` pick, every distinct alternative in `alts`, `word` (the surface word each pada was cut from), and `mw {key, lex, senses, url}`. Analyses use the reader's own terms (विभक्ति / वचन / लिङ्ग / लकार / पुरुष / पद / प्रयोग / कृत् / उपसर्ग / सनादि / गण), so they can join `systems.toml`. |
| evaluation | `scripts/eval-auto-annotation.ts` → `static/data/analyses/eval*.json` | the numbers below |
| real texts | `scripts/analyze-samples.ts` → `static/data/analyses/{panc-kilotpatin,vetala-1}.json` | §5 |
| Pañcatantra pin | `data/texts.json` | `sa_viSNuzarman-paJcatantra`, GRETIL plaintext, sha256 `8201d472…5718` (Jha ed., Chowkhamba 1991, the edition `14_pancatantra/_about.yaml` names) |

The Cologne link format is
`https://www.sanskrit-lexicon.uni-koeln.de/scans/MWScan/2020/web/webtc/indexcaller.php?key=<SLP1>&input=slp1&output=deva`.
Its host is blocked from this environment, so the URL form could not be checked
from here.

**Licences.** csl-orig, and therefore MW as digitised by CDSL, is **CC BY-SA
4.0**. Anything that ships these glosses must credit "Monier-Williams, *A
Sanskrit-English Dictionary* (1899), digitised by the Cologne Digital Sanskrit
Dictionaries" and stay share-alike. The reader's whole texts ship them now, credited on the text page and at `/about#credits` (§7). vidyut is MIT. The
GRETIL texts are CC BY-NC-SA 4.0 according to their own headers.

**Times** (this machine):

| step | time |
|---|---|
| `build-vidyut-native.sh`, cold: two release binaries and the data unzip | 57–67 s (cargo deps already cached in `~/.cargo`; budget a few minutes on a fresh machine) |
| incremental rebuild after editing `main.rs` | ~2 s |
| `import-mw-gloss.ts` (mw.txt already fetched) | 2.6 s |
| `eval-auto-annotation.ts`: 508 readings, padas run plus saṃhitā run | ~17 s |
| `analyze-samples.ts`: 148 sentences, ~2,100 padas | ~3 s |

To reproduce:

```bash
./scripts/build-vidyut-native.sh            # VIDYUT_SRC=… to reuse a checkout
bun scripts/import-mw-gloss.ts
bun run texts
bun scripts/eval-auto-annotation.ts          # patched engine (default)
ANUVRTTI_CHEDA=pinned bun scripts/eval-auto-annotation.ts   # the pin, untouched
bun scripts/analyze-samples.ts --md 15
bun scripts/analyze-text.ts "रामो वनं गच्छति ।"
```

### The bug in cheda at `VIDYUT_REV`

In `vidyut-cheda/src/scoring.rs`, `impl From<&Option<PadaEntry>> for State`
gets an `if` the wrong way round:

```rust
Some(PadaEntry::Subanta(s)) => {
    if s.pratipadika_entry().is_avyaya() {        // should be !is_avyaya()
        State::Subanta(s.linga(), s.vibhakti(), s.vacana())
    } else {
        State::Avyaya
    }
}
```

Every noun is therefore scored as an indeclinable, and every indeclinable as a
noun. The lemma model looks up `(lemma, Avyaya)` for वन, finds nothing, and
falls back to "unknown" for every noun. The segmenter then has no reason to
prefer वने over वन + इ, or ओदनम् over अ + उत् + अनम्, and it outputs exactly
those splits.

The build script produces two binaries:

- `anuvrtti-cheda-pinned`: `VIDYUT_REV` exactly.
- `anuvrtti-cheda`: the same source with
  `scripts/vidyut-native/patches/0001-cheda-state-avyaya-inverted.patch`
  applied. This is the one `analyze-text.ts` uses.

The patch is applied to the checkout only for the build and reverted
afterwards, so `build-wasm.sh` still sees a clean tree. **This is a fix that
belongs upstream.** Once `VIDYUT_REV` includes it, delete the patch. The
browser's vidyut-prakriya WASM does not use cheda and is unaffected.

---

## 2. Method

**Data.** `static/data/readings.json`: 508 readings and 7,726 words. Each word
has a hand form, lemma and gloss, tags in `notes[].term`, and build-derived
tags in `derived{}`. Each reading has a `sentence` (padas, no sandhi), and 430
readings also have a `samhita` built by vidyut-sandhi.

**Two runs per reading.**

- *padas*: cheda gets the reading's own pada-split sentence. This measures
  morphology with segmentation mostly given, except that compounds still have
  to be found.
- *saṃhitā*: cheda gets the saṃhitā (`samhita[]` joined), for readings at
  tier ≥ 80. This is the real task: running text in, analyses out. It covers
  7,109 words.

**Alignment.** Hand words and cheda's padas are both normalised (SLP1, pausal
ḥ → s, ṃ → m, letters only) and aligned by a character-level LCS, so a
restored pada (रामो → रामस्) lands on its word. Each hand word is then one of:

- **recovered**: exactly one pada spans it.
- **split**: several padas tile it exactly, i.e. a compound the hand treats as
  one word. Case, number and gender are then scored on the last member, and
  lemma and type are not scored.
- **missed**: anything else (a wrong boundary, or an unanalysed chunk).

**Scored fields.** Only values the hand annotation states are scored, read
from `derived{}` first and `notes[].term` second: lemma, word type (tiṅanta /
subanta / avyaya), विभक्ति, वचन, लिङ्ग, लकार, पुरुष, पद. Three numbers per
field:

- **vidyut pick**: cheda's own choice.
- **re-ranked**: `analyze-text.ts`'s `best`. It re-orders vidyut's
  alternatives by:
  - whether MW has the lemma;
  - a basic stem over a rare kṛt (kvip root-nouns);
  - the stem's own gender, from the kosha and `data/mw-linga.tsv`;
  - pronoun stems (सः → तद्, not "sa");
  - a तिङन्त over a locative-singular participle (भवति);
  - a लट्/लङ् prior.
- **in alternatives**: whether any of vidyut's alternatives carries the hand
  value. This is the ceiling for any re-ranker.

The field n differs slightly between the pinned and patched runs because the
set of recovered words differs.

**Usable as-is**: recovered as one pada, and every stated field correct in
`best`. This is the share of words an author would not touch, apart from the
gloss.

**Caveats.**

- The re-ranker's rules were written after looking at this corpus's errors, so
  its column is optimistic by a few points. vidyut's own pick is the unbiased
  number.
- Hand lemma conventions are not vidyut's in a few places (the reader writes
  kṛdantas under the root). These are normalised where systematic, and the rest
  are counted as errors.
- The ṚgVeda block (accented Vedic) is reported separately and left out of the
  conclusions: vidyut's kosha is classical.

---

## 3. Numbers

### Segmentation

| run | words | pinned: recovered / split / missed | patched: recovered / split / missed |
|---|---|---|---|
| saṃhitā, all | 7109 | 68 / 12 / 20 | **87 / 5 / 7** |
| saṃhitā, graded | 6141 | 68 / 12 / 20 | 89 / 4 / 7 |
| saṃhitā, attested | 968 | 67 / 13 / 20 | 80 / 10 / 9 |
| saṃhitā, Pañcatantra | 157 | 64 / 13 / 22 | 80 / 12 / 8 |
| saṃhitā, Hitopadeśa | 197 | 67 / 13 / 20 | 78 / 10 / 12 |
| padas, all | 7726 | 80 / 15 / 5 | 91 / 6 / 3 |
| padas, ṚgVeda | 278 | 11 / 34 / 55 | 14 / 31 / 55 |

"Split" is mostly compounds. In the attested readings these are real compounds
that the hand annotation keeps whole (परमदुर्मेधसः, नृपात्मजः): vidyut finds
the members but not the compound, so the compound and its समास tags are always
left to the author.

### Fields: saṃhitā in, patched engine (the pinned engine's own pick in brackets)

**All readings (saṃhitā)**

| field | n | vidyut pick | re-ranked | in alternatives |
|---|---|---|---|---|
| lemma | 6215 | 81 (67) | **90** | 96 |
| type | 6216 | 90 (79) | **93** | 97 |
| विभक्ति | 3963 | 77 (67) | **80** | 98 |
| वचन | 5413 | 92 (86) | **93** | 99 |
| लिङ्ग | 3623 | 79 (65) | **81** | 99 |
| लकार | 1365 | 76 (76) | **83** | 98 |
| पुरुष | 1343 | 81 (80) | **87** | 98 |
| पद | 1358 | 81 (80) | **87** | 98 |
| **all stated fields at once** | 6529 | 63 (43) | **71** | 92 |
| **usable as-is** (of all words) | 7109 | – (39) | **63** | – |

**Graded vs attested (saṃhitā)**

| field | graded: vidyut / re-ranked / any | attested: vidyut / re-ranked / any |
|---|---|---|
| lemma | 81 / 90 / 97 | 77 / 86 / 93 |
| type | 90 / 93 / 97 | 87 / 88 / 94 |
| विभक्ति | 77 / 80 / 98 | 79 / 79 / 96 |
| वचन | 92 / 94 / 99 | 89 / 89 / 97 |
| लिङ्ग | 81 / 83 / 100 | 71 / 74 / 96 |
| लकार | 77 / 83 / 98 | 69 / 77 / 92 |
| पुरुष | 81 / 87 / 98 | 76 / 85 / 94 |
| पद | 81 / 87 / 99 | 77 / 86 / 94 |
| all stated fields | 63 / 71 / 93 | 60 / 66 / 88 |
| usable as-is | 64 | 54 |

**Pañcatantra and Hitopadeśa (saṃhitā)**

| field | Pañcatantra: vidyut / re-ranked / any | Hitopadeśa: vidyut / re-ranked / any |
|---|---|---|
| lemma | 83 / 87 / 94 | 75 / 85 / 92 |
| type | 90 / 93 / 96 | 92 / 92 / 94 |
| विभक्ति | 78 / 77 / 96 | 86 / 83 / 99 |
| वचन | 91 / 91 / 97 | 97 / 98 / 100 |
| लिङ्ग | 79 / 76 / 97 | 68 / 72 / 98 |
| लकार (n = 20 / 19) | 65 / 80 / 95 | 74 / 74 / 95 |
| all stated fields | 69 / 74 / 89 | 61 / 66 / 88 |
| usable as-is | 62 | 52 |

Other attested texts (saṃhitā, usable as-is): Rāmāyaṇa 50%, Nītiśataka 53%,
Purāṇa 58%, Kaṭha 62%. ṚgVeda (padas): 8%, with लकार / पुरुष right 16–19% of
the time. Vedic forms are mostly absent from the kosha.

**What the patch is worth.** Applied to the pinned engine, the patch alone
takes "all stated fields" from 43% to 63% and segmentation from 68% to 87%.
The re-ranker adds a further 8 points on top. Without the patch, vidyut's
pick is wrong on more than half the words.

### Top error patterns (padas run, re-ranked; counts out of ~7,000)

1. **Verb read as a homographic noun (230 type errors).** Each of these forms
   is both a finite verb and a noun:

   | form | as a verb | as a noun |
   |---|---|---|
   | वसति | "dwells" | locative of the participle वसत्, or the noun वसती "a dwelling" |
   | अवदत् | "said" | अ-वदत् "not speaking" (27×) |
   | गच्छतः | 3rd-person dual | genitive of the participle |
   | अधीते | "studies" | locative of अधीति |

   cheda's context model has two states per word and cannot see the
   construction. The re-ranker fixes the participle-locative case; अ-privative
   compounds are still open.
2. **Neuter nominative vs accusative, and other syncretisms (277 द्वितीया →
   प्रथमा, 87 the reverse).** फलम्, वनम्, जलम् are both cases. So are
   -भ्यः (dative / ablative), -स्य / -े (genitive / locative) and the
   nominative / vocative pair (60). Choosing needs syntax, which vidyut does
   not model. The right value is in the alternatives 97% of the time, so the
   fix is one click, but it is a click on roughly one noun in five.
3. **Gender of pronouns and m/n syncretic stems (277 n → m, 148 f → m, 108
   m → f).**
   - तस्य, तेन, तस्मिन्, तेषाम् are identical in masculine and neuter, and
     vidyut lists the neuter first.
   - जनाः comes back as जना f., बालाः as बाला f. (the ā-stem feminine
     homograph of an a-stem plural).
   - गिरिम् comes back f.
   - मातृ comes back m. (MW lists "a measurer").
4. **Lemma conventions (≈300).**
   - The kosha lists some pronoun forms under the bare stem (सः → "sa", अहम् →
     "aha", त्वम् → "tva", द्वौ → "dva"). The re-ranker now prefers तद्,
     अस्मद्, युष्मद्.
   - Indeclinables are missing: किन्तु (23×), and प्रातः is read as प्रा.
   - Kṛdantas come back under the root (the reader does the same, so they
     count as right). Taddhitānta and other derived stems come back under
     whatever vidyut built.
5. **लङ् vs लुङ् (48).** आसीत्, अवसत्, अभ्रमत् are listed by the kosha as
   both. A frequency prior helps, but vidyut's pick still wins most ties.
6. **Unknown stems, so no analysis at all.** Proper names, rare words and
   whole compounds that are not in the kosha come back as one unanalysed chunk.
   This is most of the 7% "missed" in saṃhitā, and much more on real texts
   (§5).
7. **Compounds.** cheda only splits a compound when each member happens to be
   a valid inflected pada. The bare stem of an a-stem equals its vocative, so
   नगर-, शरीर-, दत्त- come back as **vocatives**; an i/u-stem member such as
   तरु- does not, and the whole compound is unanalysed. There is no समास type,
   and no notion of पूर्वपद (`SubantaEntry::is_purvapada` is a `TODO` upstream).

---

## 4. Meanings: MW against the hand glosses

The sample is 50 words drawn at random (fixed seed, in `eval.json` →
`glossSample`) from words the generator recovered exactly. Each word was
judged by eye against its hand gloss and its sentence, using the first sense
the generator shows, with the second and third shown as fallbacks:

| verdict | n | examples |
|---|---|---|
| **fits the sense in context** | **38** | अपृच्छत् "to ask, question"; वणिज् "a merchant, trader"; गण "a flock, troop"; कृषक "a ploughman, farmer"; आह्वयत् "to call near, summon"; समुद्र "the sea, ocean" |
| **right word, wrong sense first** | **7** | सेना "a missile, dart" (army is sense 3); मातृ "a measurer" (homonym); दा "heat, pain" before "to give"; सह "powerful, mighty" (not the indeclinable "with"); बाल "young, childish" (not "boy"); अपि (garbled grammatical note first); सरस्वती "a region abounding in pools" (the goddess or speech) |
| **wrong** (wrong lemma, so wrong word) | **3** | शुभाम् → शुभा "lustre"; प्रातः → प्रा "to fill"; जनाः → जना "birth" |
| **no gloss** | **2** | धर्मशास्त्र (a compound MW does not head); लोष्ट्रवत् (unanalysed) |

**Why the first sense goes wrong.**

- MW lists all homonyms under one key, in printed order, so a rare homonym
  can come first (मातृ "measurer", दा "heat").
- Its first record for a word is often the etymological or Vedic sense
  (सेना "missile", राम "dark").

A pass that picks the homonym and record matching the analysis would help: a
verb wants a "to …" record, and a noun wants its gender's `<lex>`. That is not
done yet.

Even when MW fits, a hand gloss is a contextual English rendering ("by the
two feet", "the merchants'"), which MW never is. **MW gives the author the
word, not the gloss.** Every gloss in a reading would still be written by
hand, starting from MW's sense.

---

## 5. Real texts, cold

Both texts are fed as GRETIL gives them, transliterated to Devanagari.
GRETIL's "analytic" spacing is rejoined where Devanagari would write the words
together: after a sandhi'd final consonant (कस्मिंश्चिन् नगर → कस्मिंश्चिन्नगर)
and before avagraha. Compound hyphens are dropped, so the input is a true
saṃhitā.

| text | sentences | padas | unanalysed chunks | judged right as-is |
|---|---|---|---|---|
| Pañcatantra 1, kathā 1 (वानर-कीलोत्पाटन) + verse 1.21 | 10 | 102 | 9 | **46 / 102 ≈ 45%** |
| Vetālapañcaviṃśati, tale 1 (SoKs 12.8.59 ff., 138 verses) | 138 | 1,988 | 105 | first 15 verses: **93 / 185 ≈ 50%** |

The judgement is strict. A pada counts as right only if it is a real pada of
the text and its lemma and every field are right in context. A wrong gender on
तस्य / तेन counts as wrong.

What goes wrong, in the order it costs:

1. **Long compounds** come back as nonsense splits or nothing:
   - कस्यचिच्छिल्पिनोऽर्धस्फाटितोऽञ्जनवृक्षदारुमयः → कसि + अचित् + … + अवृक्षत् + आरुम् + अयस्
   - तरुशिखरप्रसादशृङ्गदारुपर्यन्तेषु, प्रतापानलनिर्दग्धविपक्षकुलकाननः: unanalysed
2. **Indefinite pronouns with -चित्** are not in the kosha:
   - कदाचित् → कत् + आचित्
   - कस्मिंश्चित्: unanalysed
3. **Compound members as vocatives** (नगर, दत्त, स in सानुगे).
4. **तद् forms in the wrong gender** (तस्य, तेन, तस्मिन्).
5. **Case in context.** उत्पलवनं नवम् and संज्ञां come back prathamā, where
   the sentence needs dvitīyā.
6. **Text-encoding residue.** GRETIL's `saraḥ-varam` loses its sandhi when the
   hyphen is dropped (सरःवरम्), and the source itself has typos (अव्यापरेषु).

The heuristic that prefers the verb has a counterexample here: यूनि पश्यति
तस्मिन् is a locative absolute ("while that youth was looking"). The re-ranker
calls पश्यति a verb, so even "fixed" choices are only priors.

Well handled:

- the narrative perfect and aorist: जगाम, विवेश, ददृशे (passive, correctly
  कर्मणि), अहार्षीत्, अभूत्, व्यधात्
- gerunds and infinitives: उपविश्य, संगृह्य, गृहीत्वा, आदाय, कर्तुम्,
  क्रीडितुम्
- simple nominal phrases, and most indeclinables

The samples follow. Columns: **word** (surface, 〃 = same word), **padas**
(cheda's segment, with sandhi undone), **lemma**, **analysis**, and **gloss**
(MW, first sense, truncated). The full JSON is in
`static/data/analyses/panc-kilotpatin.json` and `vetala-1.json`.


### Pañcatantra: the monkey and the wedge (complete)


**1.** अव्यापरेषु व्यापारं यो नरः कर्तुमिच्छति

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | अव्यापरेषु | अव्य | अव्य | सम्बोधन एकवचन पुंलिङ्ग | coming from sheep |
| 2 | 〃 | अपरेषु | अपर | सप्तमी बहुवचन पुंलिङ्ग | having nothing beyond or after, having no rival or superior. |
| 3 | व्यापारं | व्यापारम् | व्यापार | द्वितीया एकवचन पुंलिङ्ग | occupation, employment, business, profession, function |
| 4 | यो | यस् | यद् | प्रथमा एकवचन पुंलिङ्ग | who, which, what, whichever, whatever, that |
| 5 | नरः | नरस् | नर | प्रथमा एकवचन पुंलिङ्ग | a man, a male, a person |
| 6 | कर्तुमिच्छति | कर्तुम् | कृ | अव्यय (तुमुन्) | to do, make, perform, accomplish, cause, effect, prepare, un |
| 7 | 〃 | इच्छति | इष् | लट् प्रथमपुरुष एकवचन परस्मैपद | to seek, search, : 4. and 9. Ā. to cause to move quickly, le |

**2.** स एव निधनं याति कीलोत्पाटीव वानरः

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | स | स | तद् | सम्बोधन एकवचन पुंलिङ्ग | he she it, that, this |
| 2 | एव | एव | एव | अव्यय | so, just so, exactly so |
| 3 | निधनं | निधनम् | निधन | द्वितीया एकवचन पुंलिङ्ग | having no property, poor |
| 4 | याति | याति | या | लट् प्रथमपुरुष एकवचन परस्मैपद | going; a car |
| 5 | कीलोत्पाटीव | कीला | कीला | प्रथमा एकवचन स्त्रीलिङ्ग | a stake, pin |
| 6 | 〃 | उत्पाटी | उत्पाटिन् | प्रथमा एकवचन पुंलिङ्ग | ifc. tearing out, pulling up |
| 7 | 〃 | इव | इव | अव्यय | like, in the same manner as |
| 8 | वानरः | वानरस् | वानर | प्रथमा एकवचन पुंलिङ्ग | ‘forest-animal’, a monkey, ape |

**3.** कस्मिंश्चिन्नगराभ्याशे केनापि वणिक्पुत्रेण तरुखण्डमध्ये देवतायतनं कर्तुमारब्धम्

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | कस्मिंश्चिन्नगराभ्याशे | कस्मिंश्चिन्नगराभ्याशे | — | — | — |
| 2 | केनापि | केन | किम् | तृतीया एकवचन पुंलिङ्ग | what? how? whence? wherefore? why? |
| 3 | 〃 | अपि | अपि | अव्यय | or sometimes, expresses placing near or over, uniting to, an |
| 4 | वणिक्पुत्रेण | वणिक् | वणिज् | प्रथमा एकवचन पुंलिङ्ग | a merchant, trader |
| 5 | 〃 | पुत्रेण | पुत्र | तृतीया एकवचन पुंलिङ्ग | a son, child |
| 6 | तरुखण्डमध्ये | तरुखण्डमध्ये | — | — | — |
| 7 | देवतायतनं | देवतायतनम् | देवतायतन | प्रथमा एकवचन नपुंसकलिङ्ग | — |
| 8 | कर्तुमारब्धम् | कर्तुम् | कृ | अव्यय (तुमुन्) | to do, make, perform, accomplish, cause, effect, prepare, un |
| 9 | 〃 | आरब्धम् | आरब्ध | द्वितीया एकवचन पुंलिङ्ग | begun, commenced, undertaken |

**4.** तत्र च ये कर्मकराः स्थापनादयः

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | तत्र | तत्र | तत्र | अव्यय | used for the loc. of |
| 2 | च | च | च | अव्यय | and, both, also, moreover, as well as |
| 3 | ये | ये | यद् | प्रथमा बहुवचन पुंलिङ्ग | who, which, what, whichever, whatever, that |
| 4 | कर्मकराः | कर्मकरास् | कर्मकर | प्रथमा बहुवचन पुंलिङ्ग | doing work, a workman, a hired labourer, servant of any kind |
| 5 | स्थापनादयः | स्थापनास् | स्थापना | प्रथमा बहुवचन स्त्रीलिङ्ग | the act of causing to stand firmly or fixing, supporting |
| 6 | 〃 | दयस् | दय् | प्रथमा एकवचन पुंलिङ्ग घ | to divide, impart, allot; to partake, possess; to divide asu |

**5.** ते मध्याह्नबेलायामाहारार्थं नगरमध्ये गच्छन्ति

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | ते | ते | तद् | प्रथमा द्विवचन नपुंसकलिङ्ग | he she it, that, this |
| 2 | मध्याह्नबेलायामाहारार्थं | मध्याह्नबेलायामाहारार्थम् | — | — | — |
| 3 | नगरमध्ये | नगरम् | नगर | प्रथमा एकवचन नपुंसकलिङ्ग | a town, city, N. of sev. cities |
| 4 | 〃 | अधि | अधि | अव्यय | anxiety |
| 5 | 〃 | ए | ए | अव्यय | the eleventh vowel of the alphabet. |
| 6 | गच्छन्ति | गच्छन्ति | गम् | लट् प्रथमपुरुष बहुवचन परस्मैपद | to go, move, go away, set out, come; to go to or towards, ap |

**6.** अथ कदाचित्तत्रानुषङ्गिकं वानरयूथमितश्चेतश्च परिभ्रमदागतम्

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | अथ | अथ | अथ | अव्यय | or, an auspicious and inceptive particle, now; then; moreove |
| 2 | कदाचित्तत्रानुषङ्गिकं | कत् | कत्थ् | प्रथमा एकवचन पुंलिङ्ग क्विप् | to boast; to mention with praise, praise, celebrate; to flat |
| 3 | 〃 | आचित् | आचित् | प्रथमा एकवचन स्त्रीलिङ्ग | to attend to, keep in mind; to comprehend, understand, know; |
| 4 | 〃 | तत्र | तत्र | अव्यय | used for the loc. of |
| 5 | 〃 | आनुषङ्गिकम् | आनुषङ्गिक | द्वितीया एकवचन पुंलिङ्ग | closely adherent, following, concomitant, inherent, implied |
| 6 | वानरयूथमितश्चेतश्च | वानरयूथमितश्चेतश्च | — | — | — |
| 7 | परिभ्रमदागतम् | परिभ्रमदागतम् | — | — | — |

**7.** तत्रैकस्य कस्यचिच्छिल्पिनोऽर्धस्फाटितोऽञ्जनवृक्षदारुमयः स्तम्भः खदिरकीलकेन मध्यनिहितेन तिष्ठति

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | तत्रैकस्य | तत्र | तत्र | अव्यय | used for the loc. of |
| 2 | 〃 | एकस्य | एक | षष्ठी एकवचन पुंलिङ्ग | one |
| 3 | कस्यचिच्छिल्पिनोऽर्धस्फाटितोऽञ्जनवृक्षदारुमयः | कसि | कस् | सप्तमी एकवचन नपुंसकलिङ्ग क्विप् | to go, move, approach; to beam, shine |
| 4 | 〃 | अचित् | अचित् | प्रथमा एकवचन पुंलिङ्ग | without understanding |
| 5 | 〃 | शिल्पिनस् | शिल्पिन् | प्रथमा बहुवचन पुंलिङ्ग | belonging to or skilled in art |
| 6 | 〃 | अर्धस् | अर्ध | प्रथमा एकवचन पुंलिङ्ग | side, part |
| 7 | 〃 | फा | फा | तृतीया एकवचन पुंलिङ्ग | heat |
| 8 | 〃 | अटितस् | अट् | प्रथमा एकवचन पुंलिङ्ग क्त | to roam, wander about :, to roam or wander about zealously o |
| 9 | 〃 | अञ्जन् | अञ्ज् | प्रथमा एकवचन पुंलिङ्ग शतृ | to apply an ointment or pigment, smear with, anoint; to deco |
| 10 | 〃 | अवृक्षत् | वृह् | लुङ् प्रथमपुरुष एकवचन परस्मैपद | — |
| 11 | 〃 | आरुम् | आरु | द्वितीया एकवचन पुंलिङ्ग | to shout or cry towards; to cry out; to praise, :, to roar t |
| 12 | 〃 | अयस् | अय | प्रथमा एकवचन पुंलिङ्ग | going |
| 13 | स्तम्भः | स्तम्भस् | स्तम्भ | प्रथमा एकवचन पुंलिङ्ग | a post, pillar, column, stem |
| 14 | खदिरकीलकेन | खदिरकीलकेन | — | — | — |
| 15 | मध्यनिहितेन | मध्यनिहितेन | मध्यनिहित | तृतीया एकवचन पुंलिङ्ग | placed in the middle, inserted, fixed into |
| 16 | तिष्ठति | तिष्ठति | स्था | लट् प्रथमपुरुष एकवचन परस्मैपद | to stand, stand firmly, station one's self, stand upon, get  |

**8.** एतस्मिन्नन्तरे ते वानरास्तरुशिखरप्रसादशृङ्गदारुपर्यन्तेषु यथेच्छया क्रीडितुमारब्धाः

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | एतस्मिन्नन्तरे | एतस्मिन् | एतद् | सप्तमी एकवचन पुंलिङ्ग | this, this here, here |
| 2 | 〃 | अन्तरे | अन्तर | सप्तमी एकवचन पुंलिङ्ग | being in the interior, interior |
| 3 | ते | ते | तद् | द्वितीया द्विवचन नपुंसकलिङ्ग | he she it, that, this |
| 4 | वानरास्तरुशिखरप्रसादशृङ्गदारुपर्यन्तेषु | वानरास्तरुशिखरप्रसादशृङ्गदारुपर्यन्तेषु | — | — | — |
| 5 | यथेच्छया | यथेच्छया | यथेच्छ | तृतीया एकवचन स्त्रीलिङ्ग | agreeable to wish or desire |
| 6 | क्रीडितुमारब्धाः | क्रीडितुम् | क्रीड् | अव्यय (तुमुन्) | to play, sport, amuse one's self, frolic, gambol, dally; to  |
| 7 | 〃 | आरब्धास् | आरब्ध | प्रथमा बहुवचन पुंलिङ्ग | begun, commenced, undertaken |

**9.** एकश्च तेषां प्रत्यासन्नमृत्युश्चापल्यात्तस्मिन्नर्धस्फोटितस्तम्भे उपविश्य पाणिभ्यां कीलकं संगृह्य यावदुत्पादयितुमारेभे तावत्तस्य स्तम्भमध्यगतवृषणस्य स्वस्थानाच्चलितकीलकेन यद्वृत्तं तत्प्रागेव निवेदितम्

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | एकश्च | एकस् | एक | प्रथमा एकवचन पुंलिङ्ग | one |
| 2 | 〃 | च | च | अव्यय | and, both, also, moreover, as well as |
| 3 | तेषां | तेषाम् | तद् | षष्ठी बहुवचन नपुंसकलिङ्ग | he she it, that, this |
| 4 | प्रत्यासन्नमृत्युश्चापल्यात्तस्मिन्नर्धस्फोटितस्तम्भे | प्रति | प्रति | अव्यय | towards, near to |
| 5 | 〃 | आसन् | अस् | लङ् प्रथमपुरुष बहुवचन परस्मैपद | to be, live, exist, be present; to take place, happen; to ab |
| 6 | 〃 | अमृत्युस् | अमृत्यु | प्रथमा एकवचन पुंलिङ्ग | non-death, immortality |
| 7 | 〃 | चापल्यात् | चापल्य | पञ्चमी एकवचन नपुंसकलिङ्ग | mobility |
| 8 | 〃 | तस्मिन् | तद् | सप्तमी एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 9 | 〃 | अर्धस् | अर्ध | प्रथमा एकवचन पुंलिङ्ग | side, part |
| 10 | 〃 | फा | फा | तृतीया एकवचन पुंलिङ्ग | heat |
| 11 | 〃 | उट् | उष् | प्रथमा एकवचन स्त्रीलिङ्ग | to burn, burn down; to punish, chastise, :; to burn |
| 12 | 〃 | इत् | इ | प्रथमा एकवचन पुंलिङ्ग क्विप् | the third vowel of the alphabet, corresponding to i short, a |
| 13 | 〃 | अस्तम्भे | अस्तम्भ | सप्तमी एकवचन पुंलिङ्ग | without pillars |
| 14 | उपविश्य | उपविश्य | विश् | अव्यय (क्त्वा) | to go or come near, approach; to sit down, take a seat, lie  |
| 15 | पाणिभ्यां | पाणिभ्याम् | पाणि | तृतीया द्विवचन पुंलिङ्ग | a place of sale, shop, market |
| 16 | कीलकं | कीलकम् | कीलक | द्वितीया एकवचन पुंलिङ्ग | a pin, bolt, wedge |
| 17 | संगृह्य | संगृह्य | संग्रह् | अव्यय (क्त्वा) | to seize or hold together, take or lay hold of, grab, grasp, |
| 18 | यावदुत्पादयितुमारेभे | यावत् | यावत् | अव्यय | as great, as large, as much, as many, as often, as frequent, |
| 19 | 〃 | उत्पा | उत्पा | प्रथमा एकवचन स्त्रीलिङ्ग घ | to drink out, sip out; to drink up, devour, and |
| 20 | 〃 | आदयितुम् | आदि | अव्यय (तुमुन्) | beginning, commencement |
| 21 | 〃 | आरेभे | रभ् | लिट् प्रथमपुरुष एकवचन आत्मनेपद आङ् | to lay or take hold of, keep fast, cling to; to gain a footi |
| 22 | तावत्तस्य | तावत् | तावत् | अव्यय | so great, so large, so much, so far, so long, so many |
| 23 | 〃 | तस्य | तद् | षष्ठी एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 24 | स्तम्भमध्यगतवृषणस्य | स्तम्भमध्यगतवृषणस्य | — | — | — |
| 25 | स्वस्थानाच्चलितकीलकेन | स्वस्थानाच्चलितकीलकेन | — | — | — |
| 26 | यद्वृत्तं | यद्वृत्तम् | यद्वृत्त | प्रथमा एकवचन नपुंसकलिङ्ग | anything that has occurred, event, adventure |
| 27 | तत्प्रागेव | तत् | तद् | प्रथमा एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 28 | 〃 | प्र | प्र | अव्यय | before |
| 29 | 〃 | आगा | आगा | प्रथमा एकवचन स्त्रीलिङ्ग | to come towards or into, approach; to attain; to overcome, v |
| 30 | 〃 | इव | इव | अव्यय | like, in the same manner as |
| 31 | निवेदितम् | निवेदितम् | वेदि | द्वितीया एकवचन पुंलिङ्ग क्त | a wise man, teacher, Paṇḍit |

**10.** अतोऽहं ब्रवीमि अव्यापारेषु इति

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | अतोऽहं | अतस् | अतस् | अव्यय | from this, than this |
| 2 | 〃 | अहम् | अस्मद् | प्रथमा एकवचन पुंलिङ्ग | base of the first person, as used in comp. |
| 3 | ब्रवीमि | ब्रवीमि | ब्रू | लट् उत्तमपुरुष एकवचन परस्मैपद | to speak, say, tell; to speak about any person or thing; to  |
| 4 | अव्यापारेषु | अव्यापारेषु | अव्यापार | सप्तमी बहुवचन पुंलिङ्ग | cessation from work |
| 5 | इति | इति | इति | अव्यय | in this manner, thus. In quotations of every kind means that |

### Vetālapañcaviṃśati, tale 1: first 15 verses


**1.** अस्ति वाराणसी नाम पुरारिवसतिः पुरी / स्थलीव कैलासगिरेर्या पुण्यजनसेविता

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | अस्ति | अस्ति | अस् | लट् प्रथमपुरुष एकवचन परस्मैपद | to be, live, exist, be present; to take place, happen; to ab |
| 2 | वाराणसी | वाराणसी | वाराणसी | प्रथमा एकवचन स्त्रीलिङ्ग | the city Benares |
| 3 | नाम | नाम | नाम | अव्यय | by name named, called |
| 4 | पुरारिवसतिः | पुरा | पुरा | अव्यय | before, formerly, of old |
| 5 | 〃 | अर् | ऋ | सम्बोधन एकवचन पुंलिङ्ग | the seventh vowel of the Sanskṛt alphabet and peculiar to it |
| 6 | 〃 | इवस् | इ | लट् उत्तमपुरुष द्विवचन परस्मैपद | the third vowel of the alphabet, corresponding to i short, a |
| 7 | 〃 | अत् | अत् | अव्यय | a prefix said to imply ‘surprise’, probably a contraction of |
| 8 | 〃 | इस् | इ | प्रथमा एकवचन पुंलिङ्ग | the third vowel of the alphabet, corresponding to i short, a |
| 9 | पुरी | पुरी | पुरी | प्रथमा एकवचन स्त्रीलिङ्ग | a fortress, castle, town |
| 10 | स्थलीव | स्थली | स्थली | प्रथमा एकवचन स्त्रीलिङ्ग | an eminence, tableland |
| 11 | 〃 | इव | इव | अव्यय | like, in the same manner as |
| 12 | कैलासगिरेर्या | कैलासगिरेर्या | — | — | — |
| 13 | पुण्यजनसेविता | पुण्यजनसेविता | — | — | — |

**2.** भूरिवारिभृता शश्वदुपकण्ठनिवेशिनी / हारयष्टिरिवाभाति यस्याः स्वर्गतरङ्गिणी

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | भूरिवारिभृता | भूरिवारिभृता | — | — | — |
| 2 | शश्वदुपकण्ठनिवेशिनी | शश्वदुपकण्ठनिवेशिनी | — | — | — |
| 3 | हारयष्टिरिवाभाति | हारयष्टिरिवाभाति | — | — | — |
| 4 | यस्याः | यस् | यद् | प्रथमा एकवचन पुंलिङ्ग | who, which, what, whichever, whatever, that |
| 5 | 〃 | यास् | यद् | प्रथमा बहुवचन स्त्रीलिङ्ग | who, which, what, whichever, whatever, that |
| 6 | स्वर्गतरङ्गिणी | स्वर्गतरङ्गिणी | स्वर्गतरंगिणी | प्रथमा एकवचन स्त्रीलिङ्ग | ‘river of h˚’, the Ganges |

**3.** प्रतापानलनिर्दग्धविपक्षकुलकाननः / तस्यां प्रतापमुकुटो नाम राजाभवत्पुरा

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | प्रतापानलनिर्दग्धविपक्षकुलकाननः | प्रतापानलनिर्दग्धविपक्षकुलकाननः | — | — | — |
| 2 | तस्यां | तस्य | तद् | षष्ठी एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 3 | 〃 | आम् | आम् | अव्यय | an interjection of assent or recollection |
| 4 | प्रतापमुकुटो | प्रतापमुकुटस् | प्रतापमुकुट | प्रथमा एकवचन पुंलिङ्ग | N. of a prince |
| 5 | नाम | नाम | नाम | अव्यय | by name named, called |
| 6 | राजाभवत्पुरा | राजा | राजन् | प्रथमा एकवचन पुंलिङ्ग | a king, sovereign, prince, chief |
| 7 | 〃 | अभवत् | भू | लङ् प्रथमपुरुष एकवचन परस्मैपद | to become, be, arise, come into being, exist, be found, live |
| 8 | 〃 | पुरा | पुरा | अव्यय | before, formerly, of old |

**4.** तस्याभूद्वज्रमुकुटस्तनयो रूपशौर्ययोः / कुर्वाणो दर्पदलनं स्मरस्यारिजनस्य च

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | तस्याभूद्वज्रमुकुटस्तनयो | तस्य | तद् | षष्ठी एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 2 | 〃 | अभूत् | भू | लुङ् प्रथमपुरुष एकवचन परस्मैपद | to become, be, arise, come into being, exist, be found, live |
| 3 | 〃 | वज्रम् | वज्र | द्वितीया एकवचन पुंलिङ्ग | ‘the hard or mighty one’, a thunderbolt |
| 4 | 〃 | उक् | वच् | प्रथमा एकवचन पुंलिङ्ग क्विप् | to speak, say, tell, utter, announce, declare, mention, proc |
| 5 | 〃 | उट् | उष् | प्रथमा एकवचन स्त्रीलिङ्ग | to burn, burn down; to punish, chastise, :; to burn |
| 6 | 〃 | अस् | अ | प्रथमा एकवचन पुंलिङ्ग | the first short vowel inherent in consonants. |
| 7 | 〃 | तनयस् | तनय | प्रथमा एकवचन पुंलिङ्ग | propagating a family, belonging to one's own family |
| 8 | रूपशौर्ययोः | रू | रु | प्रथमा द्विवचन पुंलिङ्ग | to roar, bellow, howl, yelp, cry aloud; to make any noise or |
| 9 | 〃 | उप् | वप् | प्रथमा एकवचन पुंलिङ्ग क्विप् | to shear, shave, cut off; to crop, mow, cut, graze, :; to ca |
| 10 | 〃 | अशा | अशन् | प्रथमा एकवचन पुंलिङ्ग | stone, rock |
| 11 | 〃 | औस् | औ | प्रथमा एकवचन पुंलिङ्ग | the fourteenth vowel of the alphabet. |
| 12 | 〃 | ययोस् | यद् | षष्ठी द्विवचन पुंलिङ्ग | who, which, what, whichever, whatever, that |
| 13 | कुर्वाणो | कुर्वाणस् | कृ | प्रथमा एकवचन पुंलिङ्ग चानश् | to do, make, perform, accomplish, cause, effect, prepare, un |
| 14 | दर्पदलनं | दर्पदलनम् | — | — | — |
| 15 | स्मरस्यारिजनस्य | स्मरस्यारिजनस्य | — | — | — |
| 16 | च | च | च | अव्यय | and, both, also, moreover, as well as |

**5.** राजपुत्रस्य तस्यात्र मन्त्रिपुत्रो महामतिः / आसीद्बुद्धिशरीराख्यः शरीराभ्यधिकः सखा

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | राजपुत्रस्य | राजपुत्रस्य | राजपुत्र | षष्ठी एकवचन पुंलिङ्ग | a k˚'s son, prince |
| 2 | तस्यात्र | तस्य | तद् | षष्ठी एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 3 | 〃 | अत्र | अत्र | अव्यय | in this matter, in this respect; in this place, here; at thi |
| 4 | मन्त्रिपुत्रो | मन्त्रिपुत्रस् | मन्त्रिपुत्र | प्रथमा एकवचन पुंलिङ्ग | the son of a m˚ |
| 5 | महामतिः | महामतिस् | महामति | प्रथमा एकवचन पुंलिङ्ग | great-minded, having a great understanding, clever |
| 6 | आसीद्बुद्धिशरीराख्यः | आसीद्बुद्धिशरीराख्यस् | — | — | — |
| 7 | शरीराभ्यधिकः | शरीर | शरीर | सम्बोधन एकवचन नपुंसकलिङ्ग | the body, bodily frame, solid parts of the body |
| 8 | 〃 | अभ्यधिकस् | अभ्यधिक | प्रथमा एकवचन पुंलिङ्ग | surpassing |
| 9 | सखा | सखा | सखि | प्रथमा एकवचन पुंलिङ्ग | a friend, assistant, companion |

**6.** तेन सख्या सह क्रीडन्स कदाचिन्नृपात्मजः / जगाम दूरमध्वानं मृगयाति प्रसङ्गतः

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | तेन | तेन | तद् | तृतीया एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 2 | सख्या | सख्या | सखि | तृतीया एकवचन पुंलिङ्ग | a friend, assistant, companion |
| 3 | सह | सह | सह | अव्यय | powerful, mighty |
| 4 | क्रीडन्स | क्रीडन् | क्रीड् | प्रथमा एकवचन पुंलिङ्ग शतृ | to play, sport, amuse one's self, frolic, gambol, dally; to  |
| 5 | 〃 | स | तद् | सम्बोधन एकवचन पुंलिङ्ग | he she it, that, this |
| 6 | कदाचिन्नृपात्मजः | कत् | कत्थ् | प्रथमा एकवचन पुंलिङ्ग क्विप् | to boast; to mention with praise, praise, celebrate; to flat |
| 7 | 〃 | आचित् | आचित् | प्रथमा एकवचन स्त्रीलिङ्ग | to attend to, keep in mind; to comprehend, understand, know; |
| 8 | 〃 | नृपात्मजस् | नृपात्मज | प्रथमा एकवचन पुंलिङ्ग | of royal birth |
| 9 | जगाम | जगाम | गम् | लिट् प्रथमपुरुष एकवचन परस्मैपद | to go, move, go away, set out, come; to go to or towards, ap |
| 10 | दूरमध्वानं | दूरम् | दूर | द्वितीया एकवचन पुंलिङ्ग | distant, far, remote, long |
| 11 | 〃 | अध्वानम् | अध्वन् | द्वितीया एकवचन पुंलिङ्ग | a road, way, orbit |
| 12 | मृगयाति | मृगया | मृगया | प्रथमा एकवचन स्त्रीलिङ्ग | hunting, the chase |
| 13 | 〃 | अति | अति | अव्यय | As a prefix to verbs and their derivatives, expresses beyond |
| 14 | प्रसङ्गतः | प्रस् | प्र | प्रथमा एकवचन पुंलिङ्ग | before |
| 15 | 〃 | अङ्गतस् | अङ्ग् | षष्ठी एकवचन पुंलिङ्ग शतृ | to go; 10., to mark |

**7.** शौर्यशृईचामरानीव सिंहानां मस्तकानि सः / छिन्दच्छरैः सटालानि विवेशैकं महावनम्

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | शौर्यशृईचामरानीव | शौर्यशृईचामरानीव | — | — | — |
| 2 | सिंहानां | सिंहानाम् | सिंह | षष्ठी बहुवचन पुंलिङ्ग | ‘the powerful one’, a lion |
| 3 | मस्तकानि | मस्तकास् | मस्तक | प्रथमा बहुवचन पुंलिङ्ग | the head, skull |
| 4 | 〃 | नि | नि | अव्यय | down, back, in, into, within |
| 5 | सः | सस् | तद् | प्रथमा एकवचन पुंलिङ्ग | he she it, that, this |
| 6 | छिन्दच्छरैः | छिन्दन् | छिद् | प्रथमा एकवचन पुंलिङ्ग शतृ | to cut off, amputate, cut through, hew, chop, split, pierce; |
| 7 | 〃 | शरैस् | शर | तृतीया बहुवचन पुंलिङ्ग | a sort of reed or grass, Saccharum Sara |
| 8 | सटालानि | सट् | सठ् | प्रथमा एकवचन पुंलिङ्ग | N. of a man |
| 9 | 〃 | आलानि | आल | प्रथमा बहुवचन नपुंसकलिङ्ग | spawn |
| 10 | विवेशैकं | विवेश | विश् | लिट् प्रथमपुरुष एकवचन परस्मैपद | to enter, enter in or settle down on, go into, pervade; to b |
| 11 | 〃 | एकम् | एक | द्वितीया एकवचन पुंलिङ्ग | one |
| 12 | महावनम् | मह | महन् | प्रथमा एकवचन नपुंसकलिङ्ग | greatness, might, power, abundance |
| 13 | 〃 | अवनम् | अवन | प्रथमा एकवचन नपुंसकलिङ्ग | favour, preservation, protection |

**8.** तत्रास्थाने स्मरस्येव पठत्कोकिलबन्दिनि / दत्तोपकारे तरुभिर्मञ्जरीचलचामरैः

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | तत्रास्थाने | तत्र | तत्र | अव्यय | used for the loc. of |
| 2 | 〃 | आस्थाने | आस्थान | सप्तमी एकवचन नपुंसकलिङ्ग | place, site, ground, base |
| 3 | स्मरस्येव | स्मरस्य | स्मर | षष्ठी एकवचन पुंलिङ्ग | remembering, recollecting |
| 4 | 〃 | इव | इव | अव्यय | like, in the same manner as |
| 5 | पठत्कोकिलबन्दिनि | पठत्कोकिलबन्दिनि | — | — | — |
| 6 | दत्तोपकारे | दत्त | दत्त | सम्बोधन एकवचन पुंलिङ्ग | protected |
| 7 | 〃 | उपकारे | उपकार | सप्तमी एकवचन पुंलिङ्ग | help, assistance, benefit, service, favour |
| 8 | तरुभिर्मञ्जरीचलचामरैः | तरुभिर्मञ्जरीचलचामरैः | — | — | — |

**9.** सोऽन्वितो मन्त्रिपुत्रेण तेनापश्यत्सरःवरम् / विचित्रकमलोत्पत्तिधामाम्बुधिमिवापरम्

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | सोऽन्वितो | सस् | तद् | प्रथमा एकवचन पुंलिङ्ग | he she it, that, this |
| 2 | 〃 | अन्वितस् | अन्वि | प्रथमा एकवचन पुंलिङ्ग क्त | to go after or alongside, to follow; to seek; to be guided b |
| 3 | मन्त्रिपुत्रेण | मन्त्रिपुत्रेण | मन्त्रिपुत्र | तृतीया एकवचन पुंलिङ्ग | the son of a m˚ |
| 4 | तेनापश्यत्सरःवरम् | तेन | तद् | तृतीया एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 5 | 〃 | अपश्यत् | दृश् | लङ् प्रथमपुरुष एकवचन परस्मैपद | to see, behold, look at, regard, consider; to see wait on, v |
| 6 | 〃 | सरस् | सरस् | प्रथमा एकवचन नपुंसकलिङ्ग | ‘anything flowing or fluid’, a lake, large sheet of water, p |
| 7 | 〃 | वरम् | वर | द्वितीया एकवचन पुंलिङ्ग | ‘environing’, ‘enclosing’, circumference, space, room |
| 8 | विचित्रकमलोत्पत्तिधामाम्बुधिमिवापरम् | विचित्रकमलोत्पत्तिधामाम्बुधिमिवापरम् | — | — | — |

**10.** तस्मिंस्तदैव सरसि स्नानार्थं काचिदागता / तेन दिव्याकृतिः कन्या ददृशे सपरिच्छदा

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | तस्मिंस्तदैव | तस्मिन् | तद् | सप्तमी एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 2 | 〃 | तदा | तदा | अव्यय | at that time, then, in that case |
| 3 | 〃 | एव | एव | अव्यय | so, just so, exactly so |
| 4 | सरसि | सरसि | सरस् | सप्तमी एकवचन नपुंसकलिङ्ग | ‘anything flowing or fluid’, a lake, large sheet of water, p |
| 5 | स्नानार्थं | स्नाना | स्ना | प्रथमा एकवचन स्त्रीलिङ्ग चानश् | to bathe, perform the ceremony of bathing or certain prescri |
| 6 | 〃 | अर्थम् | अर्थ | प्रथमा एकवचन नपुंसकलिङ्ग | aim, purpose |
| 7 | काचिदागता | काचिदागता | — | — | — |
| 8 | तेन | तेन | तद् | तृतीया एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 9 | दिव्याकृतिः | दिव्या | दिव्या | प्रथमा एकवचन स्त्रीलिङ्ग | N. of plants |
| 10 | 〃 | आकृतिस् | आकृति | प्रथमा एकवचन स्त्रीलिङ्ग | a constituent part |
| 11 | कन्या | कन्या | कन्या | प्रथमा एकवचन स्त्रीलिङ्ग | a girl, virgin, daughter |
| 12 | ददृशे | ददृशे | दृश् | लिट् प्रथमपुरुष एकवचन आत्मनेपद कर्मणि | to see, behold, look at, regard, consider; to see wait on, v |
| 13 | सपरिच्छदा | सस् | तद् | प्रथमा एकवचन पुंलिङ्ग | he she it, that, this |
| 14 | 〃 | परिच्छदा | च्छद् | प्रथमा एकवचन स्त्रीलिङ्ग अच् | to envelop, cover, conceal |

**11.** पूरयन्तीव लावण्यनिःझरेण सरःवरम् / दृष्टिपातैः सृजन्तीव तत्रोत्पलवनं नवम्

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | पूरयन्तीव | पूरयन्ती | पूर् | प्रथमा एकवचन स्त्रीलिङ्ग शतृ | in comp. for before cons. |
| 2 | 〃 | इव | इव | अव्यय | like, in the same manner as |
| 3 | लावण्यनिःझरेण | लौ | ॡ | प्रथमा द्विवचन पुंलिङ्ग | the tenth vowel of the alphabet. |
| 4 | 〃 | अणी | अणि | प्रथमा द्विवचन पुंलिङ्ग | or, the point of a needle or of a sharp stake, linchpin, the |
| 5 | 〃 | अनिस् | अनि | प्रथमा एकवचन पुंलिङ्ग | the pin of an axle tree |
| 6 | 〃 | झरेण | झर | तृतीया एकवचन पुंलिङ्ग | a water-fall |
| 7 | सरःवरम् | सरस् | सरस् | प्रथमा एकवचन नपुंसकलिङ्ग | ‘anything flowing or fluid’, a lake, large sheet of water, p |
| 8 | 〃 | वरम् | वर | द्वितीया एकवचन पुंलिङ्ग | ‘environing’, ‘enclosing’, circumference, space, room |
| 9 | दृष्टिपातैः | दृष्टिपातैस् | दृष्टिपात | तृतीया बहुवचन पुंलिङ्ग | — |
| 10 | सृजन्तीव | सृजन्ती | सृज् | प्रथमा एकवचन स्त्रीलिङ्ग शतृ | to let go or fly, discharge, throw, cast, hurl at; to cast o |
| 11 | 〃 | इव | इव | अव्यय | like, in the same manner as |
| 12 | तत्रोत्पलवनं | तत्र | तत्र | अव्यय | used for the loc. of |
| 13 | 〃 | उत्पलवनम् | उत्पलवन | प्रथमा एकवचन नपुंसकलिङ्ग | a group of lotuses |
| 14 | नवम् | नवम् | नव | द्वितीया एकवचन पुंलिङ्ग | new, fresh, recent, young, modern |

**12.** प्रत्यादिशन्तीव मुखेनाम्बुजानि जितेन्दुना / सा जहार मनस्तस्य राजपुत्रस्य तत्क्षणम्

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | प्रत्यादिशन्तीव | प्रत्यादिशन्ती | प्रत्यादिश् | प्रथमा एकवचन स्त्रीलिङ्ग शतृ | to enjoin, direct, advise; to report, relate; to summon; to  |
| 2 | 〃 | इव | इव | अव्यय | like, in the same manner as |
| 3 | मुखेनाम्बुजानि | मुखेन | मुख | तृतीया एकवचन नपुंसकलिङ्ग | the mouth, face, countenance |
| 4 | 〃 | अम्बुजानि | अम्बुज | द्वितीया बहुवचन नपुंसकलिङ्ग | produced in water, water born, aquatic |
| 5 | जितेन्दुना | जित | जि | सम्बोधन एकवचन पुंलिङ्ग क्त | to win or acquire, conquer, vanquish, defeat, excel, surpass |
| 6 | 〃 | इन्दुना | इन्दु | तृतीया एकवचन पुंलिङ्ग | a drop, Soma |
| 7 | सा | सा | तद् | प्रथमा एकवचन स्त्रीलिङ्ग | he she it, that, this |
| 8 | जहार | जहार | हृ | लिट् प्रथमपुरुष एकवचन परस्मैपद | to take, bear, carry in or on, carry, convey, fetch, bring;  |
| 9 | मनस्तस्य | मनस् | मन | प्रथमा एकवचन पुंलिङ्ग | Indian spikenard, Nardostachys Jatamansi |
| 10 | 〃 | तस्य | तद् | षष्ठी एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 11 | राजपुत्रस्य | राजपुत्रस्य | राजपुत्र | षष्ठी एकवचन पुंलिङ्ग | a k˚'s son, prince |
| 12 | तत्क्षणम् | तत् | तद् | प्रथमा एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 13 | 〃 | क्षणम् | क्षण | द्वितीया एकवचन पुंलिङ्ग | any instantaneous point of time, instant, twinkling of an ey |

**13.** सोऽप्यहार्षीत्तथा तस्या युवा दृष्ट्वा विलोचने / यथा नैक्षत सा कन्या लज्जां स्वामप्यलंकृतिम्

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | सोऽप्यहार्षीत्तथा | सस् | तद् | प्रथमा एकवचन पुंलिङ्ग | he she it, that, this |
| 2 | 〃 | अपि | अपि | अव्यय | or sometimes, expresses placing near or over, uniting to, an |
| 3 | 〃 | अहार्षीत् | हृ | लुङ् प्रथमपुरुष एकवचन परस्मैपद | to take, bear, carry in or on, carry, convey, fetch, bring;  |
| 4 | 〃 | तथा | तथा | अव्यय | in that manner, so, thus |
| 5 | तस्या | तस्य | तद् | षष्ठी एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 6 | 〃 | आ | आ | अव्यय | the second vowel of the alphabet corresponding to the a in f |
| 7 | युवा | युवा | युवा | प्रथमा एकवचन स्त्रीलिङ्ग | in comp. for. |
| 8 | दृष्ट्वा | दृष्ट्वा | दृश् | अव्यय (क्त्वा) | to see, behold, look at, regard, consider; to see wait on, v |
| 9 | विलोचने | विलोचने | विलोचन | सप्तमी एकवचन पुंलिङ्ग | distorting the eyes |
| 10 | यथा | यथा | यथा | अव्यय | in which manner or way, according as, as, like |
| 11 | नैक्षत | न | न | अव्यय | not, no, nor, neither |
| 12 | 〃 | ऐक्षत | ईक्ष् | लङ् प्रथमपुरुष एकवचन आत्मनेपद | to see, look, view, behold, look at, gaze at; to watch over; |
| 13 | सा | सा | तद् | प्रथमा एकवचन स्त्रीलिङ्ग | he she it, that, this |
| 14 | कन्या | कन्या | कन्या | प्रथमा एकवचन स्त्रीलिङ्ग | a girl, virgin, daughter |
| 15 | लज्जां | लज्जाम् | लज्जा | द्वितीया एकवचन स्त्रीलिङ्ग | shame, modesty, bashfulness, embarrassment |
| 16 | स्वामप्यलंकृतिम् | स्वाम् | स्वा | द्वितीया एकवचन स्त्रीलिङ्ग | a woman of one's own caste |
| 17 | 〃 | अपि | अपि | अव्यय | or sometimes, expresses placing near or over, uniting to, an |
| 18 | 〃 | अलम् | अलम् | अव्यय | enough, sufficient, adequate, equal to, competent, able. |
| 19 | 〃 | कृतिम् | कृति | द्वितीया एकवचन स्त्रीलिङ्ग | the act of doing, making, performing, manufacturing, composi |

**14.** यूनि पश्यति तस्मिन्सा केयं स्यादिति सानुगे / संज्ञां स्वदेशाद्याख्यातुं विलासछद्मनाकरोत्

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | यूनि | यूनि | युवन् | सप्तमी एकवचन पुंलिङ्ग | young, youthful, adult, strong, good, healthy |
| 2 | पश्यति | पश्यति | दृश् | लट् प्रथमपुरुष एकवचन परस्मैपद | to see, behold, look at, regard, consider; to see wait on, v |
| 3 | तस्मिन्सा | तस्मिन् | तद् | सप्तमी एकवचन नपुंसकलिङ्ग | he she it, that, this |
| 4 | 〃 | सा | तद् | प्रथमा एकवचन स्त्रीलिङ्ग | he she it, that, this |
| 5 | केयं | केयम् | कि | द्वितीया एकवचन पुंलिङ्ग यत् | a pronominal base, like and, in the words;. |
| 6 | स्यादिति | स्यात् | अस् | विधिलिङ् प्रथमपुरुष एकवचन परस्मैपद | to be, live, exist, be present; to take place, happen; to ab |
| 7 | 〃 | इति | इति | अव्यय | in this manner, thus. In quotations of every kind means that |
| 8 | सानुगे | स | तद् | सम्बोधन एकवचन पुंलिङ्ग | he she it, that, this |
| 9 | 〃 | अनुगे | अनुगा | प्रथमा द्विवचन स्त्रीलिङ्ग | N. of an Apsaras. |
| 10 | संज्ञां | संज्ञाम् | संज्ञा | प्रथमा एकवचन नपुंसकलिङ्ग खल् | to agree together, be of the same opinion, be in harmony wit |
| 11 | स्वदेशाद्याख्यातुं | स्वदा | स्वद् | प्रथमा एकवचन स्त्रीलिङ्ग अच् | to taste well, be sweet or pleasant to; to taste with pleasu |
| 12 | 〃 | ईशा | ईशा | प्रथमा एकवचन स्त्रीलिङ्ग | faculty, power, dominion |
| 13 | 〃 | आद्या | आद्या | प्रथमा एकवचन स्त्रीलिङ्ग | N. of Durgā |
| 14 | 〃 | आख्यातुम् | ख्या | अव्यय (तुमुन्) | to behold; to tell, communicate, inform, declare, announce;  |
| 15 | विलासछद्मनाकरोत् | विलासछद्मनाकरोत् | — | — | — |

**15.** करोति स्मौत्पलं कर्णे गृहीत्वा पुष्पशेखरात् / चिरं च दन्तरचनां चकारादाय च व्यधात्

| # | word | padas | lemma | analysis | gloss (MW) |
|---|---|---|---|---|---|
| 1 | करोति | करोति | कृ | लट् प्रथमपुरुष एकवचन परस्मैपद | to do, make, perform, accomplish, cause, effect, prepare, un |
| 2 | स्मौत्पलं | स्म | स्म | अव्यय | a particle perhaps originally equivalent to ‘ever’, ‘always’ |
| 3 | ? | आ | आ | अव्यय | the second vowel of the alphabet corresponding to the a in f |
| 4 | स्मौत्पलं | उत्पलम् | उत्पल | प्रथमा एकवचन नपुंसकलिङ्ग | the blossom of the blue lotus |
| 5 | कर्णे | कर्णे | कर्ण | सप्तमी एकवचन पुंलिङ्ग | the ear |
| 6 | गृहीत्वा | गृहीत्वा | ग्रह् | अव्यय (क्त्वा) | to seize, take, grasp, lay hold of; to arrest, stop; to catc |
| 7 | पुष्पशेखरात् | पुष्पशेखरात् | पुष्पशेखर | पञ्चमी एकवचन पुंलिङ्ग | a garland of f˚ |
| 8 | चिरं | चिरम् | चिरम् | अव्यय | acc. for a long time |
| 9 | च | च | च | अव्यय | and, both, also, moreover, as well as |
| 10 | दन्तरचनां | दन्तरचनाम् | दन्तरचना | द्वितीया एकवचन स्त्रीलिङ्ग | — |
| 11 | चकारादाय | चकार | कृ | लिट् प्रथमपुरुष एकवचन परस्मैपद | to do, make, perform, accomplish, cause, effect, prepare, un |
| 12 | 〃 | आदाय | दा | अव्यय (क्त्वा) | to give to one's self’, take, accept, receive from; to seize |
| 13 | च | च | च | अव्यय | and, both, also, moreover, as well as |
| 14 | व्यधात् | व्यधात् | धा | लुङ् प्रथमपुरुष एकवचन परस्मैपद वि | to distribute, apportion, grant, bestow; to furnish, supply, |

---

## 6. What an author would still fix, per 100 words

These figures are for attested-style saṃhitā, using the corpus numbers above.
On harder unannotated prose and verse, the real-text samples suggest about 5
fewer words right.

| | per 100 words |
|---|---|
| right as-is (segmentation and every vidyut-knowable field) | ~54 (graded: ~64) |
| segmentation to fix: a compound to rejoin, or a chunk vidyut could not analyse | ~20 (10 compounds split into members, 9 missed or unanalysed) |
| analysis wrong, but the right one is among vidyut's alternatives (a pick from a list) | ~17 |
| analysis wrong, and the right one is not offered (type it) | ~9 |
| gloss: MW's first sense is the wrong sense or the wrong word | ~20 (7 + 3 + 2 of 50 → ~24% of glosses) |
| gloss: rewritten into the reader's contextual English anyway | essentially all |

Not generated at all, and still entirely the author's job:

- कारक (the corpus's most-tagged dimension after विभक्ति)
- notes, with their sūtra citations
- समास type
- the English translation and the vyākhyā
- the `teaches` line

**Recommendation.**

1. Use the generator as a **first draft with a picker**: show `best`, and
   offer `alts` as one-click replacements. 92% of the right answers are
   already in the list.
2. Get compounds right before anything else. They account for most of the
   segmentation work and most of the nonsense output on real texts. A
   compound splitter that knows stem-form members, or using GRETIL's own
   hyphens as hints, would move the real-text figure the most.
3. The cheda patch is upstream as ambuda-org/vidyut PR #274; bump `VIDYUT_REV` and delete the patch once it lands.
4. Make the MW lookup pick the homonym and record that matches the analysis
   (a "to …" record for verbs, the matching `<lex>` gender for nouns) before
   showing a sense.

---

## 7. The first author pass: the monkey and the wedge, end to end

§5 judged the tale; this is the tale *fixed*, through the workflow the reader
now uses (`content/texts/pancatantra-kilotpatin/`, `docs/ARCHITECTURE.md`
"Whole texts"). Every token was read against vidyut's best pick and its
alternatives; every fix is a line in `overrides.yaml`, and
`bun scripts/build-texts.ts` counts them by kind, so the numbers below are
recomputed on every build rather than remembered.

Unit: the **surface word** as the edition prints it (59 in the verse and the
eight prose sentences; 121 padas once compounds are opened). §6 counts padas,
so the two tables are comparable in kind, not to the decimal.

| kind of fix | words | per 100 words |
|---|---|---|
| right as vidyut gave it (segmentation, lemma, every field) | 30 | **51** |
| — of which only the gloss was rewritten | 8 | 14 |
| compound members marked / rejoined | 15 | **25** |
| other segmentation (a run of words, a misprint, a false lexical compound) | 6 | 10 |
| analysis picked from vidyut's list (vidyut's segmentation kept) | 8 | **14** |
| analysis supplied: not in any list vidyut or the kosha offered | 4 | 7 |
| gloss written in context (MW's first sense wrong, or too bare) | 31 | 53 |
| a note (none required) | 19 | 32 |

A word can need more than one kind, so the rows overlap. What they say:

- **Half the words were right as generated**, which is §5's 45% with the
  strictness the same and the unit coarser. The fixes concentrate where §6
  predicted: segmentation is a third of all words (25 + 10), almost all of it
  compounds — all nine chunks vidyut could not analyse were compounds or runs
  of words, and every one is now split.
- **When the author splits correctly, the kosha usually knows the pieces.**
  The snapshot looks up every pada an author writes in a `split`; of the
  non-member padas written that way, 40 of 43 were found in the kosha with the
  analysis the author meant, and so inherit vidyut's root, गण and paradigm.
  The engine's weakness is cutting, not knowing.
- **Picks were genders and cases in context**, the §5 pattern exactly: तद्
  forms in the neuter where the sentence is masculine (ते, तेषाम्, तस्य, तस्मिन्),
  आरब्धम् and निधनम् in the wrong case or gender.
- **Supplied analyses were four**: स (the kosha has no सः-before-a-consonant
  form), बेलायाम् (the edition's spelling of वेला), कदाचित् and परिभ्रमत्
  (not in the kosha at all).
- **Glosses were the largest single cost** and the least mechanical: half the
  words got one. A third of those correct a wrong MW sense or homonym (निधन
  "having no property", पाणि "a place of sale", अपि as a grammatical note);
  the rest narrow MW to the sense the tale needs (इष् "to wish", याति "meets
  (death)").
- **The edition's three misprints** (अव्यापरेषु, प्रसाद for प्रासाद,
  उत्पादयितुम् for उत्पाटयितुम्) needed a human who knows the story; the
  text keeps them and the overrides read through them, with a note.

**Time.** The pass was made by an AI author working from a dump of vidyut's
best picks and alternatives: about 2 minutes to write `overrides.yaml` for all
59 words, then three corrections after the build's report (a कृत् label the
kosha does not use, a lemma written differently from the kosha's, one gloss) —
roughly 10 minutes wall-clock in all. That is not a human's cost and should not
be read as one. What it does fix is the *shape* of the work: per 100 words,
about 35 segmentation decisions, 20 analysis decisions (14 of them a choice from
a list) and 50 glosses. A human editor's time per 100 words is the number still
to measure, on the next tale, with a clock.
