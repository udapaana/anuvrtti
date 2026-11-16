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
