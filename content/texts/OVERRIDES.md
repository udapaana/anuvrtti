# Whole texts: the overrides format

Each whole text's author decisions live in `content/texts/<id>/overrides.yaml`,
or split by batch in `content/texts/<id>/overrides/*.yaml` (a section may appear
in only one file). This is their format; it opened the first such file, the
one-tale Pañcatantra (retired into `content/texts/pancatantra`), and moved here
when that text was merged.

```
The author's decisions on top of vidyut's analysis — and nothing else.

Everything not named here is what vidyut said (data/text-analyses/<id>.json,
its best-ranked analysis of each pada). Keyed by section id, then the surface
word exactly as text.yaml prints it ("#2" for its second occurrence in one
section), so regenerating the snapshot keeps every decision.

Per word:
  split: [pada, …]   vidyut's segmentation was wrong — these padas replace it
  fix: {n: pada}     pada n (1-based) of vidyut's segmentation, corrected
  note: …            a note on the whole word
Per pada (all optional):
  form    the pada (sandhi undone, pausal)        lemma   its stem or root
  a       its analysis in the reader's terms: "सप्तमी एकवचन पुंलिङ्ग",
          "लिट् प्रथमपुरुष एकवचन आत्मनेपद", "अव्यय", "प्रथमा एकवचन नपुंसकलिङ्ग क्त"
          — it may also name a सनादि suffix ("क्त णिच्") and a गण
          ("भ्वादि"), which the one-line form does not show
          — matched against vidyut's alternatives; one that matches is a pick,
          one that does not is the author's own analysis
  member  true: a compound member (a bare stem, no ending)
  gloss   the sense in context, where MW's first sense is not it
  note    what the form teaches

bun scripts/build-texts.ts reports how many words each kind of fix touched.
```

Examples: `content/texts/nitishataka/overrides/v1.yaml`,
`content/texts/pancatantra/overrides/kilotpatin.yaml`.

## Corrections: a slip of the source, put right in the line

`text.yaml` is the source verbatim, slips and all. Where the source mistyped a
word (the Bhāgavata's ईशयः for ऋषयः), `content/texts/<id>/corrections.yaml`
puts it right in the line the reader prints, and the source's reading stays
recoverable:

```
'1.1.4':                          # section id
  ईशयः:                            # the word exactly as text.yaml prints it ("#2" for a repeat)
    to: ऋषयः                      # the corrected word — one word, never two
    note: an encoding slip for ऋषयः
```

`readText` (`scripts/lib/texts.ts`) applies it, so the snapshot, the override
keys, the build and the reader all see the corrected word; `text.yaml` itself
and its IAST line are never edited. The built word carries the source's
reading as `printed` (and the note as `printedNote`), and the reader's rail
shows it as a quiet line, "printed: ईशयः". A key that names no word of the
section, or a `to` that is not one word (or ""), fails `bun run check`.

A word the edition broke in two is joined the same way: the first piece takes
the whole word and the stray piece is dropped with `to: ""`:

```
'1.311+3':
  प्रतिवस: { to: प्रतिवसति, note: The edition breaks प्रतिवसति in two }
  ति: { to: '', note: The edition breaks प्रतिवसति in two }
```

A dropped piece's printed reading goes with the word that took its place (the
corrected word before it, else the corrected word after it, else the word
before), so the rail shows "printed: प्रतिवस ति"; the dropped piece itself is
gone from the line and the snapshot. `to: ""` also drops a stray token (a
character of the source's encoding, a word printed twice). A correction never
splits one printed word into two.

A correction changes the override key: overrides key the word as the line now
reads it. After adding corrections, `bun scripts/apply-corrections.ts <id>`
re-keys the existing overrides (and any "#n" the correction renumbers), and
moves a dropped piece's split padas into the word that took its place (a
dropped piece with a `fix` must be turned into a `split` by hand first), then
`bun scripts/snapshot-text.ts <id>` re-snapshots the text.

A correction is for a true slip with one right form. An editorial choice, a
doubtful metrical emendation or a variant reading stays an override `note`.
