# Whole-text audit log

What was checked in the whole texts (`content/texts/`), how, what was wrong,
and what was done about it. One entry per audit, newest last. It is a record,
not a backlog: open questions go in *Still open* at the foot of an entry and
move to `INGESTION-QUEUE.md` if they become work.

A fix to a word lives in that text's overrides, with a `note:` where the
reason is not obvious. This log says *why* a batch of fixes was made and where
to find them, so a later reader can tell an author's decision from vidyut's
guess, and a checked passage from an unchecked one.

---

## 2026-11-16 · Nītiśataka, first audit

**Scope.** The whole text as first authored (overrides v1–v4, written by four
parallel passes the same day), plus the build code that resolves overrides.

**Method.**
1. *Text against source.* A script compared every section's `iast` with
   GRETIL's verse (`bharst_1.N`), and transliterated each Devanagari line
   back to IAST to compare with it. Result: 109 of 109 verses match GRETIL.
   Two (93, 96) do not survive the round trip — see *Fixed*.
2. *Metadata.* Edition, licence, credit line, line range, the reader
   chapter's link (`text_id` in `content/readings/_syllabus.yaml`).
3. *Annotation.* An independent reviewer, not shown the authors' reasoning,
   read 25 verses word by word (2, 4, 6, 9, 15, 20, 23, 30, 36, 43, 49, 52,
   58, 60, 66, 72, 74, 77, 83, 84, 90, 97, 100, 106, 108 — 630 padas),
   checked every emendation note against the vulgate, and compared the 14
   verses the graded reader also carries (rd089–rd102).

**Found.**
- About 1.5% of sampled padas had a wrong case, gender or lemma; about 4%
  had some visible defect, counting glosses.
- *Gloss-only overrides hid bad morphology.* An author supplied a gloss and
  left vidyut's wrong analysis beneath it (जनः as neuter जनस्, पतता masculine).
- *Particles kept Monier-Williams's first sense*, which is often a homonymous
  root: वा "going", हि "to send forth", तु "to have authority"; अपि and यदि
  showed run-on grammatical remarks. About 55 places in this text.
- *A build fault.* An override naming lemma दिश् matched vidyut's
  प्रतिदिश् + क्विन्, whose short lemma is also दिश्, and the page showed
  प्रतिदिश्.
- *Metadata.* Correct, except the line range, which began on the heading;
  and the ingestion queue's counts, which were estimates and wrong.
- *Emendations.* 45 checked; all correct and needed. Verse 59's note kept a
  line that, lacking the vulgate's किम्, says the opposite of its meaning;
  verse 71 kept a reading that breaks the metre while 72, 74 and 109 were
  emended on metrical grounds.

**Fixed.**
- Analyses: 84 धीराः (धीर m.), 83 भूषणम् (nom. n., predicate of शीलम्),
  83 प्रभवितुः (gen.), 30 and 102 जनः (जन m.), 90 पतता (n., with महाफलेन),
  58 वा (form), 23 दिक्षु (दिश्), 72 करुणा- (emendation applied to the
  form, not only the lemma), 94 वशगाः (वशग), 43 तृतीया (तृतीय), 100 प्राप्य
  (प्राप्), 36 उद्गच्छत् (उद्गम्); 36 पितरि glossed as a locative absolute.
- 59: the note now gives the vulgate's सुखमास्यते किम् and its sense. An
  override cannot add a word, so the text still prints the edition's line.
- `content/texts/particles.yaml` (new): a gloss for each common indeclinable,
  used in every whole text where no author glossed the word.
- `scripts/build-texts.ts`: an author who names a lemma and an analysis
  without a कृत् no longer gets an alternative carrying one. Nine padas
  across the four texts lost a कृत् tag nobody had asked for (पतिना's णिनि,
  संज्ञा's खल्, …).
- `scripts/nitishataka-text.ts`: names in the text's header the verses whose
  GRETIL typo Devanagari cannot spell (93 avaokate, 96 naivaa), each also
  noted in the overrides; starts the line range after the heading; refuses a
  line that YAML would misread.

**Still open** (taken up in the next entry).
- 1,216 of 2,743 padas carried vidyut's analysis unchanged, and nothing
  recorded whether an author had looked at them.
- Verse 71.

---

## 2026-11-16 · Nītiśataka, second audit: every unreviewed pada

**Scope.** Every pada whose analysis was still vidyut's own, which no author
had confirmed or changed — 1,236 padas, nearly half the text.

**Method.** One worklist per override file (v1–v4), listing each such pada
with its verse. Four reviewers, each confined to its range and its file,
judged every pada in context — case, number, gender, person, tense, voice,
lemma, gloss — and corrected only what was wrong. Then the snapshot was
rebuilt and `bun run check` and `npm run build` passed.

**Found.** 69 corrections in 1,236 padas (5.6%): about 30 wrong analyses —
genders that did not agree (येन, तस्मै with कर्मणे; तेन with पयसा),
wrong stems (सूर्यः read as feminine सूरी, पुरम् as पुर्, महताम् as
feminine महता, मा as a form of अस्मद्), क्त्वा for ल्यप् after a preverb —
and about 40 glosses where Monier-Williams's first sense is not the sense
here (किल "play, trifling", रिपुः "deceitful", शीलम् "habit, custom").
After this pass every pada in the text has been read by a reviewer; the
1.5% morphology rate of the first sample now stands for the remainder.

**Also decided.**
- Verse 71: GRETIL's दूरावलम्बिनो breaks the वंशस्थ; emended to the vulgate's
  भूरिविलम्बिनः, as 72, 74 and 109 were on metrical grounds. The edition's
  text stays in text.yaml; the overrides carry the reading, with a note.
- Verse 38: गम्यताम् is भावे (impersonal; गम् takes no object), not कर्मणि.

**Fixed.** Each line: verse | word | was | now | why.

- 4 | प्रसह्य | अव्यय क्त्वा | अव्यय ल्यप् | preverb प्र selects ल्यप्
- 4 | कोपितं | lemma कुप् (चुरादि 'speak') क्त | lemma कोपि, द्वितीया एकवचन पुंलिङ्ग क्त | causative कुप्+णिच् 'made angry'
- 9 | विलोक्य | अव्यय क्त्वा | अव्यय ल्यप् | preverb वि selects ल्यप्
- 14 | सह | gloss "powerful, mighty" | gloss "with" | postposition with वनचरैः
- 15 | कवयस्त्वर्थं (1) | gloss "gifted with insight…" | gloss "poets" | noun, not adjective
- 16 | किमपि (1) | किम् अव्यय | द्वितीया एकवचन नपुंसकलिङ्ग | agrees with शं, object of पुष्णाति
- 19 | नालङ्कृता (2) | lemma अलंकृत, प्रथमा बहुवचन पुंलिङ्ग | lemma अलंकृ, … क्त | participle, as संस्कृता
- 21 | किमु (2) | gloss "the fifth letter…" | gloss "then (emphatic, with किम्)" | particle उ, not the letter
- 25 | सम्प्राप्यते | सम् / प्र / आप्यते (lemma आप्) | one pada, lemma सम्प्राप्, लट् … कर्मणि | preverbs split off; lemma keeps preverb
- 28 | महतां | महता, द्वितीया एकवचन स्त्रीलिङ्ग, "greatness" | महत्, षष्ठी बहुवचन पुंलिङ्ग, "of the great" | gen. pl. of महत्, not a fem. noun
- 32 | परिवर्तिनि | सम्बोधन एकवचन स्त्रीलिङ्ग | सप्तमी एकवचन पुंलिङ्ग | agrees with संसारे
- 32 | याति | gloss "going; a car" (mw) | "goes to, attains" | finite verb, MW noun gloss
- 33 | द्वयी | lemma द्वयी | lemma द्वय | fem. of द्वय; stem is the masc. base
- 35 | महतां | महता, द्वितीया एकवचन स्त्रीलिङ्ग | महत्, षष्ठी बहुवचन पुंलिङ्ग | gloss had been fixed, analysis not
- 39 | मृतस्य | मृत, षष्ठी एकवचन नपुंसकलिङ्ग | मृ, षष्ठी एकवचन पुंलिङ्ग क्त | the dead man; matches मृतः in 32
- 40 | भवतीति (1) | gloss "to become, be, arise…" (mw) | "becomes" | sense in context
- 46 | तेनाद्य (1) | तृतीया एकवचन पुंलिङ्ग | तृतीया एकवचन नपुंसकलिङ्ग | तेन "therefore" is neuter instr.
- 47 | परुषा | lemma परुषा | lemma परुष | fem. adj., masc. base as stem
- 47 | हिंस्रा | lemma हिंस्रा | lemma हिंस्र | fem. adj., masc. base as stem
- 48 | प्रवृत्ताः | प्रवृत्ता, प्रथमा बहुवचन स्त्रीलिङ्ग | प्रवृत्, प्रथमा बहुवचन पुंलिङ्ग क्त | agrees with षड्गुणाः
- 49 | पयोनिधावपि (2) | gloss "or" | "even" | अपि, "even in the ocean"
- 51 | मा | अस्मद्, द्वितीया एकवचन | मा, अव्यय | prohibitive particle with ब्रूहि
- 54 | स्थिरे | स्थिरा, प्रथमा द्विवचन स्त्रीलिङ्ग | स्थिर, सप्तमी एकवचन पुंलिङ्ग | "in the steady man", like शूरे, मुनौ
- 38 | गम्यताम् | कर्मणि | भावे | intransitive गम्: impersonal, not passive (checked against the schema's PRAYOGA)
- 55 | सत्यं | gloss "true, real…" | gloss "truth" | noun here: if there is truth
- 57 | जुह्वानं | द्वितीया एकवचन पुंलिङ्ग चानश् | द्वितीया एकवचन पुंलिङ्ग शानच्, gloss "offering (oblations)" | हु आत्मनेपद participle is शानच्, not चानश्
- 57 | स्पृष्टो | gloss "to touch…" | gloss "touched" | participle, not the root
- 60 | दिनस्य | षष्ठी एकवचन पुंलिङ्ग | षष्ठी एकवचन नपुंसकलिङ्ग | दिनम् n.; matches rd096
- 64 | केनोद्दिष्टं (1) | gloss "what? how?…" | gloss "by whom" | केन instrumental agent
- 68 | हितमिच्छति (2) | gloss "to seek, search, : 4. and 9…" | gloss "wishes, desires" | garbled MW gloss; sense here
- 71 | नवाम्बुभिर्दूरावलम्बिनो | दूर + अवलम्बिनः (edition kept) | भूरि + विलम्बिनः (lemma विलम्बिन्) | emended to vulgate; GRETIL breaks the वंशस्थ
- 75 | ते | gloss "he she it, that, this" | gloss "they" | context
- 75 | के | gloss "what? how? whence?…" | gloss "who" | masc. pl. interrogative
- 76 | तेन | तृतीया एकवचन पुंलिङ्ग | तृतीया एकवचन नपुंसकलिङ्ग, gloss "that" | agrees with पयसा (n.)
- 76 | तेन#2 | तृतीया एकवचन पुंलिङ्ग | तृतीया एकवचन नपुंसकलिङ्ग, gloss "that" | agrees with जलेन (n.)
- 76 | सतां | gloss "being, existing…" | gloss "of the good" | सत् as noun, the good
- 83 | प्रभवितुर्धर्मस्य (2) धर्मस्य | gloss "steadfast decree, statute" (mw) | gloss "of righteousness" | MW first sense wrong in context
- 83 | शीलं | gloss "habit, custom, usage" (mw) | gloss "good character" | sense in context
- 85 | कृत्वाखुर्विवरं (1) कृत्वा | gloss "to do, make, perform…" (mw) | "having made" | gloss for the absolutive
- 85 | कृत्वाखुर्विवरं (3) विवरम् | द्वितीया एकवचन पुंलिङ्ग | द्वितीया एकवचन नपुंसकलिङ्ग | विवर is neuter
- 86 | मनुष्याणां | gloss "human, manly" (mw) | "of men" | noun, not adjective
- 86 | महान्रिपुः (1) महान् | gloss long mw list | "great" | trim to sense
- 86 | महान्रिपुः (2) रिपुः | gloss "deceitful, treacherous" (mw) | "an enemy" | wrong sense
- 86 | बन्धुः | gloss "connection, relation" (mw) | "friend, kinsman" | wrong sense
- 87 | सन्तः | lemma सन्त, प्रथमा एकवचन पुंलिङ्ग | lemma सत्, प्रथमा बहुवचन पुंलिङ्ग | plural of सत्, agrees with सन्तप्यन्ते
- 87 | रोहति | gloss "to ascend, mount" (mw) | "grows again" | sense in context (tree)
- 87 | पुनश्चन्द्रः (2) चन्द्रः | gloss "glittering, shining" (mw) | "the moon" | noun sense
- 87 | दुःखेषु | gloss "uneasy, uncomfortable" (mw) | "in sorrows" | noun, not adjective
- 88 | यस्य | gloss "who, which, what…" (mw) | "whose" | genitive gloss
- 88 | किल | gloss "play, trifling" (mw) | "indeed, as is known" | particle, not noun
- 88 | तद्व्यक्तं (1) तत् | प्रथमा एकवचन नपुंसकलिङ्ग, gloss "he she it" | अव्यय, "so, therefore" | adverbial तत्
- 88 | तद्व्यक्तं (2) व्यक्तम् | द्वितीया एकवचन पुंलिङ्ग | प्रथमा एकवचन नपुंसकलिङ्ग | predicate "it is clear"
- 89 | सुविचार्यैव (1) सुविचार्य | lemma सुविचार्य, अव्यय | lemma विचर्, अव्यय ल्यप् | ल्यप् absolutive (वि + चर् णिच्)
- 90 | यान्त्यापदः (1) यान्ति | gloss "going; a car" (mw) | "go, come" | verb, not noun
- 91 | विलोक्य | अव्यय क्त्वा | अव्यय ल्यप् | prefixed root takes ल्यप्
- 93 | क्षमः | lemma क्षम्, प्रथमा बहुवचन स्त्रीलिङ्ग | lemma क्षम, प्रथमा एकवचन पुंलिङ्ग | agrees with कः
- 95 | येन | तृतीया एकवचन पुंलिङ्ग, gloss mw | तृतीया एकवचन नपुंसकलिङ्ग, "by which" | refers to कर्मन् (n.)
- 95 | विष्णुर्येन (2) येन | तृतीया एकवचन पुंलिङ्ग | तृतीया एकवचन नपुंसकलिङ्ग | refers to कर्मन् (n.)
- 95 | येन#2 | तृतीया एकवचन पुंलिङ्ग | तृतीया एकवचन नपुंसकलिङ्ग | refers to कर्मन् (n.)
- 95 | सूर्यो | lemma सूरी, प्रथमा बहुवचन स्त्रीलिङ्ग | lemma सूर्य, प्रथमा एकवचन पुंलिङ्ग | wrong stem
- 95 | तस्मै | चतुर्थी एकवचन पुंलिङ्ग | चतुर्थी एकवचन नपुंसकलिङ्ग | agrees with कर्मणे
- 96 | काले | lemma काला, प्रथमा द्विवचन स्त्रीलिङ्ग | lemma काल, सप्तमी एकवचन पुंलिङ्ग | "in time"
- 98 | मा | lemma अस्मद्, द्वितीया एकवचन | lemma मा, अव्यय | prohibitive particle with कृथाः
- 99 | गुणवदगुणवद्वा (1) गुणवत् | प्रथमा एकवचन नपुंसकलिङ्ग | द्वितीया एकवचन नपुंसकलिङ्ग | agrees with object कार्यजातम्
- 99 | गुणवदगुणवद्वा (2) अगुणवत् | प्रथमा एकवचन नपुंसकलिङ्ग | द्वितीया एकवचन नपुंसकलिङ्ग | agrees with object कार्यजातम्
- 102 | पुरं | lemma पुर्, द्वितीया एकवचन स्त्रीलिङ्ग | lemma पुर, प्रथमा एकवचन नपुंसकलिङ्ग | predicate nominative with भवति
- 102 | यस्यास्ति (2) अस्ति | gloss "to be, live, exist…" (mw) | "is, there is" | trim to sense
- 105 | कृतस्य | lemma कृत, षष्ठी एकवचन पुंलिङ्ग | lemma कृ, … क्त | participle of कृ
- 109 | स्वाम् | lemma स्वा | lemma स्व | stem is स्व

**Still open — conventions, not errors.** The reviewers met the same
question in several forms and left the words as they were:
- *Derived verbs.* A causative is filed now under its stem (विलोकि, संकोचि,
  कोपि), now under the root (वृ for वारयितुम्, अवधृ for अवधार्या).
- *Past participles.* Some under the participle (हुत, जात, उद्दिष्ट), some
  under the root with क्त (अलंकृ, कृ).
- *Prefixed lemmas.* The text keeps the preverb (प्राप्, सम्प्राप्); the graded
  reader uses the bare root (आप्). A learner moving between them sees both.
- *Two-gendered nouns* (दिन, पार्श्व) and readings where both are defensible
  (नमः as noun or अव्यय; तत् in तद्व्यक्तम् as pronoun or adverb).
One rule for each, written into `docs/AUTHORING.md`, and a pass applying it
across all whole texts, would close these.

---

## 2026-11-16 · Sources moved to Ambuda's GRETIL fork, and vendored

**Scope.** Every source text, and the four whole texts built from them.

**Done.** GRETIL is closing, so the sources are now committed under
`data/sources/` and pinned by sha256 in `data/texts.json`: Ambuda's fork of
GRETIL (`ambuda-org/gretil`, TEI, commit `96e9622`) for the fifteen GRETIL
texts, plus its Bhāgavata and Krishnacharya's Southern Ayodhyākāṇḍa;
SARIT's Kumbhakonam Mahābhārata, unchanged; GRETIL's own plain text, kept
beside each as `archive`; and the OCR of the three condensed books.
`scripts/lib/tei.ts` reads them all.

**Checked.** Each section of each whole text against Ambuda's TEI, ignoring
punctuation and spacing:
- Kaṭha (119 sections), Pañcatantra tale (9), Vetāla (176): every section
  found verbatim. Only their source references changed: GRETIL line numbers
  became TEI references (KaU_1.1–6.18, Panc_1.21 …, SoKs_12.8.21–196).
- Nītiśataka (109): rebuilt from the TEI by `scripts/nitishataka-text.ts`.
  One word differs from GRETIL: verse 4, where Ambuda corrects मूऋख to
  मूर्ख. Its override was re-keyed and its note now says so. Ambuda keeps
  GRETIL's other typos here (विशेषाअतः, सन्त्यजनति …), so their overrides stand.
- The Mahābhārata matcher (`bun run mbh`) reproduces `selection.json` byte
  for byte from the vendored copies.

**Found in Ambuda's TEI** (a mass conversion, as GRETIL's was): in the
Nītiśataka, the first pāda of verses 8, 14, 46 and 48 sits in a `<p>` before
its verse, and verse 66 is a `<p>` of its own. The TEI reader reports markup
as it is; the Nītiśataka builder mends these and says so in its header. The
Pañcatantra has a stray `>` inside a word (`praṇay>atirekād`), outside the
tale we carry.

---

## 2026-11-16 · Rāmāyaṇa sources: the "Southern" Ayodhyā is not

GRETIL's `sa_vAlmIki-rAmAyaNa-southern-2`, headed as T. R. Krishnacharya's
Southern recension (Kumbhakonam, 1905), was compared verse by verse with the
critical Ayodhyākāṇḍa: 2,624 of 3,160 verses identical, most of the rest a
typo or a numbering shifted one place, 86 absent. It is the critical text,
renumbered, not the Southern recension. It stays vendored, with this note,
and is not used. The condensed Rāmāyaṇa is matched into the critical text
throughout; its 15 placements in the file were mapped to the critical verse
of the same number (at most two letters apart). The 214 verses the 1935 book
quotes from the vulgate wait for a Kumbhakonam text.

---

## 2026-11-16 · Condensed Rāmāyaṇa: 214 verses read from the scan

**Scope.** The verses the 1935 book quotes from the vulgate, absent from the
critical edition, whose text could come only from the book's scan.

**Method.** Each verse cropped from the scan (archive.org layout →
page and box; crops committed). Two machine readings (archive.org's OCR,
Tesseract san+hin) as hints only. Two independent transcribers per crop;
agreement letter for letter settles a verse; every disagreement, and every
shared reading either flagged as uncertain, decided by a third reader from
the image. A blind re-reading of 20 random agreed verses measured the
agreed set.

**Found.** Keyers agreed on 174 of 214 (81.3%). Of the 40 adjudicated, 24
confirmed the shared reading, 4 went to A, 6 to B, 6 to neither. Blind check:
20 of 20 identical — no residual error found; at that sample size the agreed
set's error rate is very probably below 15%, and independent agreement makes
it likelier far lower. The machine readings were wrong in almost every
verse (ददो for ददौ, broken conjuncts): double keying, not OCR, is what makes
this text trustworthy.

**Kept as printed.** Misprints in the 1935 book (वर्पाणि, नगराचूर्णं,
वपुरार्स्थाय …) stay in the text, as GRETIL's do, to be corrected in the
overrides with a note.

**Still open.** Six readings the adjudicator called best-effort on damaged
print (1038, 4123, 9245, 1832, 7546, 17341/17400); and the whole set is to
be replaced by the Kumbhakonam text when it comes (TODO.md).

---

## 2026-11-16 · Calibrating the screeners, on the Nītiśataka

**Question.** Which cheap checks can stand in for a careful reader, and how
much do they miss?

**Answer key.** The Nītiśataka rebuilt as it stood after its author pass,
before either audit (overrides from commit e88e728, no particle table), set
against today's: 50 words whose analysis or segmentation the audits changed,
193 whose gloss alone they changed.

**Measured** (a "catch" is a flag on a word the audits corrected):

| tier | flags | analysis errors caught | gloss errors caught |
|---|---|---|---|
| mechanical (`audit-mechanical.ts`: derive the form the analysis claims) | 41 words | 3 / 50 | 7 / 193 |
| Haiku screener, one pass over the text | 93 | 15 / 50 (30%) | 43 / 193 (22%) |
| Sonnet screener, verses 1–27 only | 12 | 1 / 6 | 3 / 37 |
| Haiku screener, verses 1–27 (same range) | 9 | 1 / 6 | 3 / 37 |

**Read.** The mechanical check is free but sees little: most errors make a
real form (भूषणम् is accusative masculine and nominative neuter alike). One
screening pass catches a quarter to a third of errors, Haiku and Sonnet alike —
the method, not the model, is the limit. What caught the errors was the
exhaustive second review of every unreviewed pada (the second audit above).

Of the screeners' high-confidence flags on words the audits had left alone,
most were wrong: six were deliberate emendations whose notes the worklist did
not show (fixed: `text-worklist.ts` now prints notes), others misread a
bahuvrīhi or an ablative. Two were real misses of both strong audits, now
fixed: verse 69 हि glossed "and" (→ "for, indeed"), verse 98 कृथाः glossed
"place, put" (→ "do"). Independent cheap eyes find what careful ones missed;
they cannot replace them.

**So the audit of a text is** (`docs/AUDITING.md`): the mechanical check;
the exhaustive strong review of every pada an author did not touch; Haiku
screeners as an extra independent layer, each flag judged by a strong model;
and a blind strong sample to measure what remains.
