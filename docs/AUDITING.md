# Auditing a whole text

How a whole text (`content/texts/<id>/`) is checked after its author pass, and
why this way: the figures are in `content/texts/AUDIT-LOG.md`, "Calibrating the
screeners". Every audit is logged there — method, findings, every correction.

## The tiers, in order

1. **Mechanical** — `bun scripts/audit-mechanical.ts <id>`. Free, every word,
   every build: does vidyut-prakriya derive the printed form from the stated
   analysis; is a noun glossed with a verb's sense. Catches little (3 of 50
   analysis errors on the Nītiśataka) but costs nothing. Every flag is a question.

2. **Exhaustive review** — the tier that finds the errors. List every pada whose
   analysis is still vidyut's own (`source: vidyut` in `text-worklist.ts`), cut
   the list into runs of ~300 padas, and give each run to a strong-model reviewer
   who reads each pada in its verse and fixes what is wrong in the overrides,
   logging each fix as `verse | word | was | now | why`. On the Nītiśataka this
   pass corrected 69 of 1,236 padas.

3. **Screening** — Haiku, cheap, independent. One screener per ~25 verses
   reads `text-worklist.ts` output (which shows the authors' notes) and returns
   flags as JSON — it edits nothing. Alone it misses ~70%; after tier 2 it is a
   second pair of eyes, and it does find what strong readers missed.

4. **Judging** — a strong model decides every screener flag against the text
   and fixes or rejects it, with a reason.

5. **Blind sample** — a strong reviewer, not told what the others found, reads
   ~30 random verses word by word; its error rate is the text's measured
   residual rate, reported in the log.

## Rules that the calibration taught

- A screener must see the notes: an emendation without its note looks like an
  error.
- Ask for flags, not fixes, from a screener; ask for fixes, with reasons, from a
  reviewer or judge.
- Never let a reviewer see the answer it is checking (the blind sample, the
  double keying of scan text in `ramayana-condensed`).
- Record the measured rate, not an impression.
