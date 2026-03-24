+++
id = "prakriya-bhavati"
order = 50
title = "Prakriyā: Derive भवति"
titleSanskrit = "भवतिप्रक्रिया"
label = "प्र॰भवति"
track = "grammar"
category = "prakriya"
description = "Trace the complete rule-by-rule derivation of भवति from root भू. See the Ashtadhyayi work as a derivation engine."
difficulty = "intermediate"
estimatedTime = "45 minutes"
prerequisites = ["tinganta-lat"]
+++

## concept - How the Ashtadhyayi Derives a Word

This path is different from the grammar paths you've seen so far. Instead of teaching a grammatical category, we'll trace how Pāṇini's system actually derives a single word — @deva[भवति] "he is" — rule by rule.

Think of the Aṣṭādhyāyī as a derivation engine. You feed in a root, a meaning, and a context. Rules fire in sequence — each one checking whether its conditions are met, and if so, making a change. The output is a finished word.

Here's the complete derivation. Expand it to see every rule:

@prakriya[bhU + laT + tip]

In the steps below, we'll walk through each rule that fires, explaining *why* it applies and *what* it does. By the end, you'll understand not just @deva[भवति] but the general machinery of Pāṇinian derivation.

---

## concept - Step 1: Start With the Input

Every derivation begins with three things:

1. **A root** (@deva[धातु]): @deva[भू] "to be, to become"
2. **A meaning context**: present tense, active voice, third person singular
3. **The rule system**: the Aṣṭādhyāyī + the Dhātupāṭha

The Dhātupāṭha lists @deva[भू] as the very first root, in the first class (@deva[भ्वादिगण]). This class membership will matter when we add the class affix.

---

## 3.2.123 - Add the Tense Marker: लट्

**Key Terms:** vartamAna, laT

@deva[वर्तमाने लट्] — The affix @deva[लट्] comes after a root when the action is in the present.

The speaker wants to express a present-tense meaning (@deva[वर्तमान] = "ongoing"). This rule adds @deva[लट्] after the root:

> @deva[भू] + @deva[लट्]

@deva[लट्] is not pronounced — it's an abstract placeholder that will be replaced by actual endings. The @deva[ल] is the replaceable part; the @deva[ट्] is a marker (@deva[इत्]).

---

## 3.4.77 - Replace ल With Endings

**Key Terms:** lasya, tip, tas, Ji

@deva[लस्य] — The @deva[ल] of any @deva[लकार] is replaced by personal endings.

This heading rule (@deva[अधिकार]) governs everything that follows: whenever you see @deva[लट्], @deva[लिट्], etc., the @deva[ल] is a slot that gets filled by one of 18 personal endings.

---

## 3.4.78 - Select the Ending: तिप्

**Key Terms:** tiN, tip

@deva[तिप्तस्झि...] — The @deva[ल] is replaced by one of 18 @deva[तिङ्] endings.

For third person singular @deva[परस्मैपद], the ending is @deva[तिप्]:

> @deva[भू] + @deva[तिप्]

The @deva[प्] in @deva[तिप्] is a marker letter (by @ref[1.3.3] — final consonants of affixes are @deva[इत्]). It will be deleted by @ref[1.3.9]. The pronounced part is just @deva[ति].

---

## 1.3.78 - Confirm परस्मैपद

**Key Terms:** kartari, parasmEpadam

@deva[शेषात् कर्तरि परस्मैपदम्] — Roots not specially designated for @deva[आत्मनेपद] take @deva[परस्मैपद] when the agent is expressed.

@deva[भू] has no special @deva[आत्मनेपद] designation, so we use @deva[परस्मैपद] endings. This confirms @deva[तिप्] as the correct ending.

---

## 3.1.68 - Insert the Class Affix: शप्

**Key Terms:** Sap, vikaraNa, kartari

@deva[कर्तरि शप्] — The affix @deva[शप्] comes between a root and a @deva[सार्वधातुक] ending when the agent is expressed.

@deva[शप्] is the class affix (@deva[विकरण]) for Class 1 (@deva[भ्वादि]) roots. After removing the marker letters @deva[श्] and @deva[प्], the affix is just @deva[अ]:

> @deva[भू] + @deva[अ] + @deva[ति]

This @deva[अ] sits between the root and the ending. It triggers the next critical rule.

---

## 7.3.84 - Strengthen the Root Vowel: गुण

**Key Terms:** guRa, sArvaDAtukaH

@deva[सार्वधातुकार्धधातुकयोः] — The final @pratyahara[ik] vowel of an @deva[अङ्ग] (stem) undergoes @term[guṇa]{गुण} before a @deva[सार्वधातुक] or @deva[आर्धधातुक] affix.

The root vowel @deva[ऊ] is in the @pratyahara[ik] class. The @deva[शप्] affix following it is @deva[सार्वधातुक]. So @deva[गुण] applies:

> @deva[ऊ] → @deva[ओ] (guṇa)

Our form becomes:

> @deva[भो] + @deva[अ] + @deva[ति]

Watch this rule in action:

@prakriya[bhU + laT + tip]{highlight=7.3.84}

---

## 6.1.78 - Resolve the Vowel Meeting: ओ → अव्

**Key Terms:** ecaH, ayavAyAvaH

@deva[एचोऽयवायावः] — When an @pratyahara[ec] vowel (@deva[ए], @deva[ओ], @deva[ऐ], @deva[औ]) is followed by a vowel, it is replaced by its semivowel equivalent.

The @deva[ओ] at the end of @deva[भो] is an @pratyahara[ec] vowel, and the @deva[अ] of @deva[शप्] follows it. So:

> @deva[ओ] → @deva[अव्]

The @deva[ओ] resolves to @deva[अव्], giving us:

> @deva[भव्] + @deva[अ] + @deva[ति]

The @deva[व्] merges with the following @deva[अ] to give: @deva[भव] + @deva[ति].

---

## 1.3.3 - Delete Marker Letters

**Key Terms:** hal, antyam, it

@deva[हलन्त्यम्] — The final consonant of an affix is marked as @deva[इत्].

Combined with @ref[1.3.9] (@deva[तस्य लोपः] — @deva[इत्] letters are deleted), the @deva[प्] of @deva[तिप्] and the marker letters of @deva[शप्] and @deva[लट्] are all removed.

After all @deva[इत्] deletion, the pronounced form is:

> @deva[भवति]

---

## concept - The Complete Rule Chain

Here is every rule that fired, in order:

| # | Rule | What it does |
|---|------|-------------|
| 1 | @ref[3.2.123] | Adds @deva[लट्] (present tense marker) |
| 2 | @ref[3.4.78] | Replaces @deva[ल] with @deva[तिप्] (3sg parasmaipada) |
| 3 | @ref[1.3.78] | Confirms parasmaipada selection |
| 4 | @ref[3.1.68] | Inserts @deva[शप्] (= @deva[अ]) as class affix |
| 5 | @ref[7.3.84] | Guṇa: @deva[ऊ] → @deva[ओ] |
| 6 | @ref[6.1.78] | Sandhi: @deva[ओ] + @deva[अ] → @deva[अव] |
| 7 | @ref[1.3.3] + @ref[1.3.9] | Delete all marker letters |

The result: **@deva[भवति]** — "he is, he becomes."

Notice how the rules span four different adhyāyas (1, 3, 6, 7). A derivation doesn't follow the text linearly — it jumps across the system, pulling in rules from wherever they're needed. This is why prakriyā study is essential for understanding the Aṣṭādhyāyī as a working grammar.

---

## concept - Try Other Forms

The same machinery produces the entire present paradigm. Try expanding these:

@prakriya[bhU + laT + sip]{collapsed}

@prakriya[bhU + laT + mip]{collapsed}

@prakriya[bhU + laT + Jhi]{collapsed}

The core derivation is identical — only the ending differs. Compare how the ending affects the final sandhi in each case.

---

## concept - What's Next

Now that you've traced one complete derivation, try these paths to see different rule chains in action:

- **Different endings**: The same root + tense with different person/number
- **Different roots**: @deva[नी] "to lead" → @deva[नयति] uses @ref[6.1.77] instead of @ref[6.1.78]
- **Different tenses**: @deva[भू] + @deva[लिट्] → @deva[बभूव] requires reduplication (@ref[6.1.8])
- **Nouns**: @deva[राम] + @deva[ङस्] → @deva[रामस्य] uses entirely different rule sets
