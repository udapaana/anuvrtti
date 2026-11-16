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
