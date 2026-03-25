---
id: prakriya-ramasya
order: 51
title: "Prakriyā: Derive रामस्य"
titleSanskrit: रामस्यप्रक्रिया
label: प्र:रामस्य
track: grammar
category: subanta
description: Trace the derivation of रामस्य (of Rāma) from stem to finished word. See how nominal forms are built.
difficulty: intermediate
estimatedTime: 30 minutes
prerequisites:
  - subanta-pratipadika
---

## concept - Deriving a Noun Form

In the previous prakriyā paths, we traced verb derivations. Noun forms follow a parallel but distinct process. Instead of roots + tense markers + personal endings, nouns use stems + case endings.

In this path, we'll derive @deva[रामस्य] "of Rāma" — the genitive singular. This is one of the most common noun forms in Sanskrit, appearing constantly in compounds and possessive constructions.

Here's the complete derivation:

@prakriya[rAma + Nas + pum]

Let's trace each rule.

---

## concept - Step 1: The Starting Point

Our inputs:

1. **Stem** (@deva[प्रातिपदिक]): @deva[राम] — a masculine a-stem
2. **Meaning**: genitive (possession, "of")
3. **Number**: singular (@deva[एकवचन])
4. **Gender**: masculine (@deva[पुंलिङ्ग])

The Aṣṭādhyāyī classifies @deva[राम] as a @deva[प्रातिपदिक] by @ref[1.2.45] — it's a meaningful unit that isn't a root and doesn't have a case ending yet.

---

## 2.3.50 - When the Genitive Applies

**Key Terms:** SaSThI, Seza

@deva[षष्ठी शेषे] — The sixth case (@deva[षष्ठी], genitive) is used for the remaining relationships not covered by other cases.

When you want to express "of X" — possession, relation, or any connection not already handled by instrumental, dative, etc. — this rule tells you to use the genitive. This triggers the selection of a @deva[षष्ठी] ending.

---

## 4.1.2 - Add सुप् Endings to Stems

**Key Terms:** svOH, sup

@deva[स्वौजसमौट्...] — The 21 @deva[सुप्] endings are added after a @deva[प्रातिपदिक].

This is the nominal parallel to @ref[3.4.78] (which lists verbal endings). The 21 endings organize as 7 cases × 3 numbers:

| Case | Singular | Dual | Plural |
|------|----------|------|--------|
| 1st | @deva[सु] | @deva[औ] | @deva[जस्] |
| 2nd | @deva[अम्] | @deva[औट्] | @deva[शस्] |
| 3rd | @deva[टा] | @deva[भ्याम्] | @deva[भिस्] |
| 4th | @deva[ङे] | @deva[भ्याम्] | @deva[भ्यस्] |
| 5th | @deva[ङसि] | @deva[भ्याम्] | @deva[भ्यस्] |
| 6th | @deva[ङस्] | @deva[ओस्] | @deva[आम्] |
| 7th | @deva[ङि] | @deva[ओस्] | @deva[सुप्] |

For genitive singular, the ending is @deva[ङस्]:

> @deva[राम] + @deva[ङस्]

---

## 1.3.8 - Initial ङ Is a Marker

**Key Terms:** Na, it, lasya

@deva[लशक्वतद्धिते] — In affixes that are not @deva[तद्धित], initial @deva[ल], @deva[श], @deva[क], and the nasals are @deva[इत्] markers.

And by @ref[1.3.3] + @ref[1.3.9], the initial @deva[ङ] of @deva[ङस्] is an @deva[इत्] marker and gets deleted. The pronounced ending is just @deva[अस्]:

> @deva[राम] + @deva[अस्]

But why have the @deva[ङ] at all? It encodes grammatical information. The @deva[ङित्] marking tells the system that this ending is "Nit" — which blocks certain operations like @deva[गुण] that would otherwise apply.

---

## 7.1.12 - Replace With स्य for A-stems

**Key Terms:** Tasya, syaH

@deva[टाङसिङसामिनात्स्याः] — For stems ending in @deva[अ], the endings @deva[टा], @deva[ङसि], @deva[ङस्] are replaced by @deva[इन], @deva[आत्], @deva[स्य] respectively.

This is a special replacement rule for a-stems. Instead of the generic @deva[अस्] (from @deva[ङस्]), a-stems get @deva[स्य]:

> @deva[राम] + @deva[अस्] → @deva[राम] + @deva[स्य]

This explains why a-stem genitives look different from other declensions. Compare:
- @deva[रामस्य] (a-stem, with @deva[स्य])
- @deva[अग्नेः] (i-stem, with @deva[अस्] → visarga)

---

## 6.1.78 - Vowel Sandhi

**Key Terms:** ecaH, ayavAyAvaH

When the final @deva[अ] of the stem meets the @deva[स्] of the new ending, no special sandhi is needed — @deva[अ] + @deva[स्य] simply concatenates:

> @deva[रामस्य]

In this particular derivation, the sandhi is straightforward. The @deva[अ] of the stem and the @deva[स्य] ending combine without any vowel conflict, since @deva[स्] is a consonant.

---

## concept - The Final Result

After all rules have applied:

> **@deva[रामस्य]** — "of Rāma"

| # | Rule | What it does |
|---|------|-------------|
| 1 | @ref[2.3.50] | Assigns genitive case (the meaning requires @deva[षष्ठी]) |
| 2 | @ref[4.1.2] | Adds @deva[ङस्] (6th case, singular ending) |
| 3 | @ref[1.3.8] + @ref[1.3.9] | Deletes @deva[ङ] marker → ending is @deva[अस्] |
| 4 | @ref[7.1.12] | Replaces @deva[अस्] with @deva[स्य] for a-stems |
| 5 | Concatenation | @deva[राम] + @deva[स्य] → @deva[रामस्य] |

Notice how this derivation is much shorter than @deva[भवति]. Nominal forms don't need a class affix (@deva[विकरण]), and a-stem sandhi is simple. But the same machinery is at work: rules fire when their conditions are met, transforming the input step by step.

---

## concept - Compare Other Cases

See how different case endings produce different forms from the same stem:

@prakriya[rAma + su + pum]{collapsed}

@prakriya[rAma + am + pum]{collapsed}

@prakriya[rAma + wA + pum]{collapsed}

Notice how each case ending triggers different replacement rules and sandhi operations. The @deva[सु] of nominative triggers @ref[6.1.68] (visarga), while @deva[टा] of instrumental gets replaced by @deva[इन] (= @deva[एन]) by @ref[7.1.12].

---

## concept - What's Next

You've now seen both verb and noun derivations in action. Key differences:

| Feature | Tinanta (verbs) | Subanta (nouns) |
|---------|----------------|-----------------|
| Starting unit | @deva[धातु] (root) | @deva[प्रातिपदिक] (stem) |
| Endings | 18 @deva[तिङ्] | 21 @deva[सुप्] |
| Class affix | @deva[विकरण] (शप्, etc.) | None |
| Vowel change | @deva[गुण]/वृद्धि common | Depends on stem type |
| Replacement rules | Limited | Extensive (@ref[7.1.12], etc.) |

Try tracing other noun forms to see how different stem types (i-stems, u-stems, consonant stems) interact with the same case endings through different rules.
