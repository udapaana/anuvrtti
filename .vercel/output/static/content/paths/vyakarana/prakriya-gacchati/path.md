---
id: prakriya-gacchati
order: 52
title: "Prakriyā: Derive गच्छति"
titleSanskrit: गच्छतिप्रक्रिया
label: प्र:गच्छति
track: grammar
category: tinganta
description: Trace the derivation of गच्छति (he goes) — a root that undergoes a special stem substitution before the class affix.
difficulty: intermediate
estimatedTime: 45 minutes
prerequisites:
  - prakriya-bhavati
---

## concept - A Derivation With a Twist

You've already traced @deva[भवति] — a straightforward Class 1 derivation where the root vowel undergoes @deva[गुण] and sandhi produces the final form. Now let's trace @deva[गच्छति] "he goes," which introduces something new: a **root substitution**.

The root @deva[गम्] "to go" doesn't simply add @deva[शप्] (= @deva[अ]) and apply sandhi. Instead, the entire root changes form before the affix. This demonstrates a different rule mechanism in the Aṣṭādhyāyī — one where the derivation engine replaces the root stem itself.

Here's the complete derivation:

@prakriya[gam + laT + tip]

Let's trace each rule.

---

## concept - Step 1: The Starting Point

Our inputs:

1. **Root** (@deva[धातु]): @deva[गम्] "to go" — listed in the Dhātupāṭha as @deva[गम्ऌ] (Class 1, Bhvādi)
2. **Meaning**: present tense, active voice, third person singular
3. **Class**: Bhvādi (Class 1) — takes @deva[शप्] as its @deva[विकरण]

The marker @deva[ऌ] in @deva[गम्ऌ] is an @deva[इत्] by @ref[1.3.2] (nasal vowels in the @deva[उपदेश] are markers). It indicates that @deva[गम्] can take the augment @deva[नुम्] in certain forms — but that won't matter for the present tense.

---

## 3.2.123 - Add the Tense Marker: लट्

**Key Terms:** vartamAna, laT

@deva[वर्तमाने लट्] — The affix @deva[लट्] comes after a root when the action is in the present.

Same as the @deva[भवति] derivation:

> @deva[गम्] + @deva[लट्]

---

## 3.4.78 - Select the Ending: तिप्

**Key Terms:** tiN, tip

@deva[तिप्तस्झि...] — The @deva[ल] is replaced by one of 18 @deva[तिङ्] endings.

For third person singular @deva[परस्मैपद]:

> @deva[गम्] + @deva[तिप्]

By @ref[1.3.78] (@deva[शेषात् कर्तरि परस्मैपदम्]), @deva[गम्] takes @deva[परस्मैपद] endings by default.

---

## 3.1.68 - Insert the Class Affix: शप्

**Key Terms:** Sap, vikaraNa, kartari

@deva[कर्तरि शप्] — The affix @deva[शप्] comes between a Class 1 root and a @deva[सार्वधातुक] ending.

> @deva[गम्] + @deva[शप्] (= @deva[अ]) + @deva[ति]

So far, everything is identical to @deva[भवति]. But here's where the paths diverge.

---

## 7.3.77 - The Root Substitution: गम् → गच्छ

**Key Terms:** gam, iSgamyamAm

@deva[इषुगमियमां छः] — For the roots @deva[इष्] "to desire," @deva[गम्] "to go," and @deva[यम्] "to restrain," the substitute @deva[छ] replaces the final consonant before @deva[शप्].

This is the critical rule that makes @deva[गच्छति] look nothing like @deva[गम्]. The @deva[म्] of @deva[गम्] is replaced by @deva[छ]:

> @deva[गम्] → @deva[गछ्]

But @deva[छ] triggers another rule — @ref[6.1.73] (@deva[छे च]) adds a @deva[तुक्] augment (= @deva[त्]) before @deva[छ]:

> @deva[गछ्] → @deva[गच्छ्]

So the stem becomes @deva[गच्छ], and with @deva[शप्] (= @deva[अ]):

> @deva[गच्छ] + @deva[अ] + @deva[ति]

---

## 6.1.73 - Augment Before छ: तुक्

**Key Terms:** tuk, Che

@deva[छे च] — The augment @deva[तुक्] (= @deva[त्]) is inserted before @deva[छ].

Whenever @deva[छ] appears after a vowel, @deva[त्] is inserted before it. Since @deva[गम्] has the vowel @deva[अ] before the replaced @deva[छ]:

> @deva[ग] + @deva[छ] → @deva[ग] + @deva[त्] + @deva[छ] = @deva[गच्छ]

This is why we hear a doubled consonant cluster in @deva[गच्छति].

---

## concept - No गुण Needed

In the @deva[भवति] derivation, @ref[7.3.84] applied @deva[गुण] to the root vowel @deva[ऊ] → @deva[ओ]. Does it apply here?

The root vowel of @deva[गम्] is @deva[अ]. The @deva[गुण] of @deva[अ] is... @deva[अ] itself (by @ref[1.1.2], @deva[अ] is already @deva[गुण]-grade). So @ref[7.3.84] technically applies but produces no visible change. The stem stays @deva[गच्छ].

---

## 1.3.3 - Delete Marker Letters

**Key Terms:** hal, antyam, it

@deva[हलन्त्यम्] — Final consonants in affixes are @deva[इत्] markers.

Combined with @ref[1.3.9], the @deva[प्] of @deva[तिप्] and all other marker letters are deleted. The pronounced ending is @deva[ति].

> @deva[गच्छ] + @deva[अ] + @deva[ति] = @deva[गच्छति]

---

## concept - The Complete Rule Chain

| # | Rule | What it does |
|---|------|-------------|
| 1 | @ref[3.2.123] | Adds @deva[लट्] (present tense) |
| 2 | @ref[3.4.78] | Replaces @deva[ल] with @deva[तिप्] (3sg parasmaipada) |
| 3 | @ref[3.1.68] | Inserts @deva[शप्] (= @deva[अ]) as class affix |
| 4 | @ref[7.3.77] | Replaces @deva[म्] with @deva[छ] for root @deva[गम्] |
| 5 | @ref[6.1.73] | Inserts @deva[त्] before @deva[छ] → @deva[गच्छ] |
| 6 | @ref[7.3.84] | Guṇa of @deva[अ] → @deva[अ] (no visible change) |
| 7 | @ref[1.3.3] + @ref[1.3.9] | Delete marker letters |

The result: **@deva[गच्छति]** — "he goes."

Compare this with @deva[भवति]:

| Feature | @deva[भवति] | @deva[गच्छति] |
|---------|------------|--------------|
| Root vowel | @deva[ऊ] → @deva[ओ] (guṇa changes it) | @deva[अ] → @deva[अ] (already guṇa) |
| Root stem | No change | @deva[गम्] → @deva[गच्छ] (substitution) |
| Key rule | @ref[7.3.84] (guṇa) | @ref[7.3.77] (छ-substitution) |
| Sandhi | @ref[6.1.78] (ओ → अव) | None needed |

The derivation engine uses the same framework — but different rules fire depending on the root.

---

## concept - The Same Pattern, Different Roots

The @deva[छ]-substitution applies to three roots. Try expanding these:

@prakriya[gam + laT + sip]{collapsed}

@prakriya[gam + laT + Jhi]{collapsed}

Notice that @deva[गच्छ] appears in every present-tense form of @deva[गम्]. The substitution happens once (at the stem level), and then all the regular ending rules apply.

---

## concept - What's Next

You've now seen three different derivation patterns:

1. **@deva[भवति]**: Guṇa + vowel sandhi (the "normal" case)
2. **@deva[रामस्य]**: Nominal ending replacement (a-stem special forms)
3. **@deva[गच्छति]**: Root substitution + augmentation (irregular stems)

These three mechanisms — vowel strengthening, ending replacement, and stem substitution — account for most of the surface irregularity in Sanskrit. The Aṣṭādhyāyī handles them all through the same rule-based framework.
