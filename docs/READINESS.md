# Readiness: when can a reader of this corpus read a whole text?

`bun run readiness` (`scripts/readiness.ts`) measures it, as
`docs/AUTHORING-PLAN.md` ("When a reader can handle one") proposes. This file
records the first run, over four candidate texts. Regenerate the tables with
`bun run readiness -- --md`.

## In short

| text | padas | uncertain | grammar 90% | grammar 95% | ceiling | vocabulary at 570 |
|---|---|---|---|---|---|---|
| Pañcatantra 1.1, monkey and wedge | 102 | 23.5% | 193 | 320 | 96.2% | 59% |
| Vetālapañcaviṃśatikā, tale 1 | 1,988 | 27.8% | 210 | 275 | 96.5% | 64% |
| Hitopadeśa 1, kathā 1 (tiger and bangle) | 461 | 23.2% | 210 | 372 | 96.6% | 65% |
| Mahābhārata condensed, first 150 verses | 2,109 | 22.0% | 186 | 269 | 96.9% | 58% |
| Kaṭhopaniṣad, vallī 1 | skipped (not pinned) | | | | | |

"Grammar 90%" is the tier by which (inclusive) 90% of the confident tokens
have every grammatical item already met in some reading. The corpus runs to
tier 570.

**What the numbers say.** All four texts look alike. Grammar readiness is
about 50–65% at tier 50, climbs steeply between 150 and 200 (that band
introduces the kṛdantas, the past tenses and most oblique cases), crosses 90%
at 186–210, and then levels off at about 96–97%. The last 3–4% are items the
corpus never tags (below). The 95% crossing (269–372) is decided by a handful
of tokens near that plateau, so it is less stable than the 90% crossing.
**Vocabulary never crosses 90% for any text.** At tier 570 the corpus's lemmas
cover only 58–65% of a text's tokens. Vocabulary readiness has to come from the
dictionary link (MW), not from the tiers.

**Recommendation: the Pañcatantra monkey-and-wedge tale first, then Vetāla 1
as the first long text.**
- The Pañcatantra tale crosses 90% at tier 193, earlier than the Hitopadeśa
  and Vetāla tales (210). Its 95% crossing at 320 hangs on a single token, a
  plural यद्, which the corpus first shows at tier 320. It is short, a complete
  tale, and already has a chapter (`14_pancatantra`).
- It is also where the generator is most accurate. In the eval, Pañcatantra
  saṃhitā gets 74% of stated fields right against 66% for the Hitopadeśa, and
  62% of its words are usable as-is against 52%. Fewer corrections for the
  first text through the pipeline.
- Vetāla 1 is the better first *long* text: 95% at tier 275 on about 2,000
  padas, the most stable measurement here.
- The Mahābhārata selection scores best (186 / 269), but its unmet vocabulary
  is mostly names (शान्तनु, भीष्म, विदुर…), it is verse, and the owner has not
  pinned it yet.
- The Hitopadeśa kathā crosses 95% last (372), held back by अदस् (×3, never
  met), -वत् neuter nominatives, and the verses embedded in it.
- The differences between the texts are small, smaller than the generator's
  error rate (next section). The measurement does not rank the texts so much
  as place all four at about tier 200 for 90% and about 270–370 for 95%. The
  choice between them can follow the generator's accuracy and the existing
  chapter, as it does here.

## How the generator's error rate enters

The text side is machine-analysed (`scripts/analyze-text.ts`, patched cheda
plus the re-ranker). `docs/AUTO-ANNOTATION-EVAL.md` measures its top choice on
attested saṃhitā at **lemma 86%, विभक्ति 79%, लिङ्ग 74%, लकार 77%**, with all
stated fields right on **66%** of words and 9% of words segmented wrongly.
Here is how that error enters each number:

- **Uncertain tokens are left out, not guessed.** A token is uncertain when
  vidyut gives no analysis (5% of padas) or when the re-ranker overrode
  vidyut's own pick on the items (17–22%). Their disagreement is the
  generator's own signal of low confidence. That is 22–28% of every text. The
  grammar column is computed over the confident remainder.
- **The remaining errors mostly cancel.** Most wrong top choices are
  syncretisms: nominative vs accusative neuter, m/n pronoun gender, dative vs
  ablative. A wrong pick in a common paradigm almost always names *another
  common cell* that the reader has also met by tier 200. So the grammar column
  is roughly right for the *tier* even when individual cells are wrong. The
  "any alternative" column is the upper bound: a token counts as met if *any*
  of vidyut's analyses is met. It runs 3–10 points higher and crosses 95% at
  190–210.
- **Errors inflate the never-met list.** Rare kṛt analyses (घ, क, खल्,
  क्तिच्), and many of the 40-odd क्विप् root-nouns per long text that are met
  only at tier 210, are typically mis-segmentations. vidyut reads a fragment as
  a root-noun. Treat the "kṛt X" items below as suspect until a human
  confirms them.
- **Vocabulary is a lower bound.** About 10% of lemmas are wrong (अ, वे, सा,
  ऐश + पायन for द्वैपायन), proper names are absent from the corpus by nature,
  and lemma conventions differ in places (the reader lists kṛdantas under the
  root, and so does vidyut, but taddhitāntas and lexicalised participles such as
  उक्त do not line up).
- **Compounds are undercounted.** cheda finds a compound only when a member
  comes back as an a-stem vocative. The script counts those padas as needing
  `समास`, which the corpus meets early. Real compound load is higher: GRETIL
  hyphenates far more words than the 14–119 padas flagged here.
- **उपसर्ग is undercounted on the reader's side.** Only 189 of 7,726 corpus
  words carry an उपसर्ग tag, and none carries सम्. "उपसर्ग सम्" appears as never
  met (×10–12) even though सम्-verbs occur in readings. This is an annotation
  gap, not a teaching gap.
- The Pañcatantra sample is small (78 confident tokens). One token is 1.3
  points.

## Method

**Reader side.** Every word in `static/data/readings.json` is typed with
`typingTermsOf` / `typeOf`, the classification `check-paradigms.ts` uses, and
resolved to items. Each item keeps the lowest `segment` (tier) at which it
appears:

- `सुबन्त <class>·<लिङ्ग>: <विभक्ति> <वचन>`. The stem class is taken from
  `finalSound` and the consonant-stem split from check-paradigms. For a
  kṛdanta, whose lemma is its root, the class comes from the affix (क्त → अ/आ,
  शतृ → अत्/ई …).
- `सर्वनाम <pronoun>: <विभक्ति> <वचन>`.
- `सर्वादि ·<लिङ्ग>: <विभक्ति> <वचन>`.
- `तिङन्त <लकार>: <पुरुष> <वचन>`.
- `तिङन्त प्रयोग·पद`.
- `कृत् X`, `तद्धित X`, `उपसर्ग X`, `सनादि X`, `समास`.

Lemmas are compared as bare SLP1 letters, keeping the first tier each appears.

**Text side.** Each sentence goes through `analyzeSentence`. Each pada's
re-ranked `best` maps into the same items. A token is grammar-ready after tier
N when all its items were met at a tier ≤ N. Indeclinables need no item. The
generator never proposes a तद्धित, so taddhita load is invisible on this side.

**Texts.**
- **Pañcatantra**: the sample `analyze-samples.ts` cuts, with frame verse 1.21.
- **Vetāla 1**: the verses tagged `[= Vet_1]`.
- **Hitopadeśa**: book 1, kathā 1, from "so 'bravīd aham ekadā" to "khāditaś
  ca", with its verses hit_1.6–1.21.
- **Mahābhārata**: the first 150 matched entries of
  `content/texts/mahabharata-condensed/selection.json`, with verse text from
  the SARIT `<lg>`, editorial parentheses dropped.
- **Kaṭhopaniṣad**: skipped. No Kaṭha text is pinned in `data/texts.json`, and
  the corpus holds only 1.1.1–3 as readings (`ku0101–3`). If it is pinned, add
  it to `TEXTS_ALL` with `exclude: /kathopanishad/`, so its own readings do not
  count as already met.

The generator needs `./scripts/build-vidyut-native.sh`,
`bun scripts/import-mw-gloss.ts` and `bun run texts`. Without `gloss.tsv`
the re-ranker loses its dictionary and the numbers shift.

## What the ramp must teach

Across all four texts, by token frequency:

1. **The kṛt layer below tier 200.** क्विप् root-nouns (first met at 210, ~40
   tokens per long text, some of them generator noise), अच् (210), शानच् (275),
   ण्यत् (295), क्तवतु (240), तृच् (215), घञ् (210), तव्य (219), णिनि (360).
   These are among the commonest forms in narrative prose, and each enters late.
2. **अदस्**: never met (Hitopadeśa ×3, Mahābhārata ×2, Vetāla ×2).
3. **Pronoun cells met late**: एतद् accusative singular (tier 396), यद्
   nominative plural (320), the pronominal सर्वादि forms (षष्ठी बहुवचन never;
   neuter nominative at 400).
4. **Consonant-stem obliques**: अस्-stem neuter locative/instrumental (258,
   397), अत्-stem dative/instrumental singular (never) and accusative (421),
   -वत् neuter nominative (never), ओ-stem genitive plural (गवाम्, never).
5. **लुङ् 3rd plural** (540).
6. **Tagging gaps, not teaching gaps**: उपसर्ग सम्, अति. Tag the उपसर्ग on
   existing readings and these items drop out.

## The runs

### Pañcatantra 1.1, the monkey and the wedge (with frame verse 1.21)

`panc-kilotpatin`: 102 padas — 78 confident, 9 unanalysed, 15 re-ranked away from vidyut (23.5% uncertain, left out of the grammar column). 2 padas carry समास.

| met by tier | grammar % (confident) | grammar % (any alternative) | vocabulary % |
|---|---|---|---|
| 50 | 55.1 | 65.6 | 20.4 |
| 100 | 60.3 | 67.7 | 28.0 |
| 150 | 74.4 | 79.6 | 35.5 |
| 200 | 92.3 | 93.5 | 47.3 |
| 250 | 94.9 | 96.8 | 48.4 |
| 300 | 94.9 | 96.8 | 49.5 |
| 350 | 96.2 | 96.8 | 51.6 |
| 400 | 96.2 | 96.8 | 55.9 |
| 450 | 96.2 | 96.8 | 55.9 |
| 500 | 96.2 | 96.8 | 55.9 |
| 570 | 96.2 | 96.8 | 59.1 |

Crossings — grammar 90%: **193**, 95%: **320** (any-alternative: 189 / 210); vocabulary 90%: never, 95%: never. Ceiling (all tiers): grammar 96.2%, vocabulary 59.1%.

Never met (confident tokens): सुबन्त क्विप्·नपुंसकलिङ्ग: सप्तमी एकवचन ×1 · सर्वादि ·पुंलिङ्ग: सप्तमी एकवचन ×1 · उपसर्ग सम् ×1

Met only after tier 200: कृत् क्विप् ×3 (tier 210) · सुबन्त क्विप्·पुंलिङ्ग: प्रथमा एकवचन ×2 (tier 210) · सर्वनाम यद्: प्रथमा बहुवचन ×1 (tier 320)

Commonest unmet lemmas: आरब्ध ×2 · फा ×2 · अव्य ×1 · कीला ×1 · उत्पाटिन् ×1 · देवतायतन ×1 · कर्मकर ×1 · स्थापना ×1 · दय् ×1 · अधि ×1 · ए ×1 · कत्थ् ×1 · आचित् ×1 · आनुषङ्गिक ×1 · अचित् ×1

### Vetālapañcaviṃśatikā (Somadeva), tale 1

`vetala-1`: 1988 padas — 1436 confident, 105 unanalysed, 447 re-ranked away from vidyut (27.8% uncertain, left out of the grammar column). 119 padas carry समास.

| met by tier | grammar % (confident) | grammar % (any alternative) | vocabulary % |
|---|---|---|---|
| 50 | 49.9 | 62.6 | 28.5 |
| 100 | 58.4 | 67.8 | 34.6 |
| 150 | 74.9 | 83.2 | 41.7 |
| 200 | 89.8 | 94.4 | 55.3 |
| 250 | 94.2 | 97.6 | 55.8 |
| 300 | 95.6 | 98.1 | 57.6 |
| 350 | 95.6 | 98.1 | 59.8 |
| 400 | 96.4 | 98.4 | 62.3 |
| 450 | 96.4 | 98.5 | 63.2 |
| 500 | 96.5 | 98.5 | 63.3 |
| 570 | 96.5 | 98.5 | 63.8 |

Crossings — grammar 90%: **210**, 95%: **275** (any-alternative: 170 / 210); vocabulary 90%: never, 95%: never. Ceiling (all tiers): grammar 96.5%, vocabulary 63.8%.

Never met (confident tokens): उपसर्ग सम् ×12 · कृत् अङ् ×6 · कृत् घ ×4 · सुबन्त क्विप्·नपुंसकलिङ्ग: प्रथमा एकवचन ×3 · कृत् क्तिच् ×3 · सुबन्त घ·स्त्रीलिङ्ग: तृतीया एकवचन ×3 · कृत् खल् ×2 · कृत् क ×2 · सुबन्त अत्·पुंलिङ्ग: चतुर्थी एकवचन ×2 · सुबन्त क्तिच्·पुंलिङ्ग: सप्तमी एकवचन ×2 · सर्वनाम यद्: सम्बोधन एकवचन ×2 · सर्वनाम अदस्: द्वितीया एकवचन ×2 · सुबन्त खल्·नपुंसकलिङ्ग: प्रथमा एकवचन ×1 · सुबन्त अत्·पुंलिङ्ग: तृतीया एकवचन ×1 · सुबन्त क्विप्·स्त्रीलिङ्ग: प्रथमा एकवचन ×1

Met only after tier 200: कृत् क्विप् ×43 (tier 210) · सुबन्त क्विप्·पुंलिङ्ग: प्रथमा एकवचन ×37 (tier 210) · कृत् ण्यत् ×10 (tier 295) · कृत् शानच् ×8 (tier 275) · कृत् क्तवतु ×8 (tier 240) · कृत् अच् ×7 (tier 210) · कृत् तृच् ×6 (tier 215) · सर्वनाम एतद्: द्वितीया एकवचन ×5 (tier 396) · सुबन्त अस्·नपुंसकलिङ्ग: सप्तमी एकवचन ×4 (tier 258) · कृत् णिनि ×4 (tier 360)

Commonest unmet lemmas: मन्त्रिपुत्र ×17 · वे ×16 · पद्मावती ×13 · सा ×11 · अ ×9 · सखि ×9 · राज ×9 · गद् ×8 · अन्तिक ×8 · ऋ ×7 · नि ×7 · संज्ञा ×7 · उक्त ×7 · कर्ण ×6 · उत् ×6

### Hitopadeśa 1, kathā 1: the old tiger and the gold bangle (with its verses 1.6–1.21)

`hitopadesa-1`: 461 padas — 354 confident, 20 unanalysed, 87 re-ranked away from vidyut (23.2% uncertain, left out of the grammar column). 14 padas carry समास.

| met by tier | grammar % (confident) | grammar % (any alternative) | vocabulary % |
|---|---|---|---|
| 50 | 64.1 | 75.1 | 20.6 |
| 100 | 68.1 | 76.2 | 24.7 |
| 150 | 78.0 | 85.5 | 32.4 |
| 200 | 88.4 | 95.5 | 53.7 |
| 250 | 92.9 | 98.4 | 54.6 |
| 300 | 93.8 | 98.4 | 56.7 |
| 350 | 94.1 | 98.9 | 58.7 |
| 400 | 96.6 | 99.1 | 63.5 |
| 450 | 96.6 | 99.1 | 64.4 |
| 500 | 96.6 | 99.1 | 64.6 |
| 570 | 96.6 | 99.1 | 65.3 |

Crossings — grammar 90%: **210**, 95%: **372** (any-alternative: 170 / 190); vocabulary 90%: never, 95%: never. Ceiling (all tiers): grammar 96.6%, vocabulary 65.3%.

Never met (confident tokens): सर्वनाम अदस्: प्रथमा एकवचन ×3 · कृत् घ ×2 · सुबन्त वत्/मत्·नपुंसकलिङ्ग: प्रथमा एकवचन ×2 · सुबन्त घ·पुंलिङ्ग: सप्तमी एकवचन ×1 · सुबन्त घ·पुंलिङ्ग: द्वितीया बहुवचन ×1 · उपसर्ग अति ×1 · सुबन्त ओ·पुंलिङ्ग: षष्ठी बहुवचन ×1 · सुबन्त क्तिच्·पुंलिङ्ग: प्रथमा एकवचन ×1 · कृत् क्तिच् ×1 · कृत् क्यप् ×1 · सुबन्त इस्/उस्·नपुंसकलिङ्ग: षष्ठी बहुवचन ×1

Met only after tier 200: सुबन्त क्विप्·पुंलिङ्ग: प्रथमा एकवचन ×6 (tier 210) · कृत् क्विप् ×6 (tier 210) · सर्वादि ·नपुंसकलिङ्ग: प्रथमा एकवचन ×5 (tier 400) · कृत् अच् ×4 (tier 210) · कृत् यत् ×3 (tier 250) · कृत् णिनि ×2 (tier 360) · कृत् घञ् ×2 (tier 210) · सुबन्त इन्·नपुंसकलिङ्ग: प्रथमा एकवचन ×1 (tier 285) · कृत् ण्यत् ×1 (tier 295) · कृत् तव्य ×1 (tier 219)

Commonest unmet lemmas: उक्त ×4 · पान्थ ×3 · अदस् ×3 · सुवर्णकङ्कण ×2 · लोभ ×2 · संशय ×2 · अञ्जि ×2 · तावत् ×2 · अवदत् ×2 · कथम् ×2 · आत्मक ×2 · मानुष ×2 · चतुर्वर्ग ×2 · दरिद्रा ×2 · भूता ×2

### Mahābhārata condensed, first 150 verses (Kumbhakonam text via SARIT)

`mbh-150`: 2109 padas — 1646 confident, 73 unanalysed, 390 re-ranked away from vidyut (22.0% uncertain, left out of the grammar column). 71 padas carry समास.

| met by tier | grammar % (confident) | grammar % (any alternative) | vocabulary % |
|---|---|---|---|
| 50 | 52.2 | 64.6 | 19.8 |
| 100 | 63.8 | 72.3 | 25.5 |
| 150 | 77.5 | 84.5 | 34.0 |
| 200 | 91.6 | 95.5 | 48.6 |
| 250 | 94.8 | 98.3 | 49.2 |
| 300 | 95.8 | 98.7 | 51.1 |
| 350 | 96.0 | 98.8 | 52.8 |
| 400 | 96.7 | 98.9 | 56.2 |
| 450 | 96.8 | 99.1 | 57.3 |
| 500 | 96.8 | 99.1 | 57.4 |
| 570 | 96.9 | 99.1 | 57.6 |

Crossings — grammar 90%: **186**, 95%: **269** (any-alternative: 170 / 191); vocabulary 90%: never, 95%: never. Ceiling (all tiers): grammar 96.9%, vocabulary 57.6%.

Never met (confident tokens): उपसर्ग सम् ×10 · सुबन्त क्विप्·स्त्रीलिङ्ग: प्रथमा एकवचन ×7 · सुबन्त क्विप्·नपुंसकलिङ्ग: प्रथमा एकवचन ×6 · कृत् घ ×4 · सर्वादि ·पुंलिङ्ग: षष्ठी बहुवचन ×3 · कृत् क्यप् ×2 · सर्वनाम अदस्: प्रथमा बहुवचन ×2 · कृत् क्तिच् ×2 · सुबन्त घ·पुंलिङ्ग: प्रथमा एकवचन ×2 · कृत् क ×2 · सर्वनाम तद्: सम्बोधन द्विवचन ×1 · सर्वनाम यद्: सम्बोधन एकवचन ×1 · सुबन्त इ·नपुंसकलिङ्ग: प्रथमा एकवचन ×1 · सुबन्त क्विप्·पुंलिङ्ग: द्वितीया एकवचन ×1 · सुबन्त घ·नपुंसकलिङ्ग: द्वितीया बहुवचन ×1

Met only after tier 200: कृत् क्विप् ×44 (tier 210) · सुबन्त क्विप्·पुंलिङ्ग: प्रथमा एकवचन ×28 (tier 210) · कृत् अच् ×12 (tier 210) · कृत् शानच् ×6 (tier 275) · कृत् ण्यत् ×5 (tier 295) · सुबन्त अस्·नपुंसकलिङ्ग: तृतीया एकवचन ×5 (tier 397) · कृत् घञ् ×4 (tier 210) · कृत् तव्य ×2 (tier 219) · तिङन्त लुङ्: प्रथमपुरुष बहुवचन ×2 (tier 540) · सुबन्त अत्·पुंलिङ्ग: द्वितीया एकवचन ×2 (tier 421)

Commonest unmet lemmas: शांतनु ×19 · अ ×18 · पाण्डु ×16 · भीष्म ×14 · ऐश ×10 · पायन ×10 · जात ×10 · विचित्रवीर्य ×9 · विदुर ×9 · धृतराष्ट्र ×8 · सम् ×6 · अञ्जि ×6 · महीपति ×6 · ई ×6 · समय ×5
