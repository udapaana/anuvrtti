---
id: prakriya-nayati
order: 53
title: "Prakriyā: Derive नयति"
titleSanskrit: नयतिप्रक्रिया
label: प्र:नयति
track: grammar
category: tinganta
description: Trace the derivation of नयति "he leads" — showing guṇa and yaṇ-sandhi in action.
difficulty: intermediate
estimatedTime: 30 minutes
prerequisites:
  - prakriya-bhavati
  - prakarana-sandhi
---

## concept - Guṇa + Semivowel Sandhi

This path derives @deva[नयति] "he leads" from root @deva[नी]. Unlike @deva[भवति] (where @deva[ओ] + @deva[अ] → @deva[अव]), here we see a different sandhi pattern: @deva[ए] + @deva[अ] → @deva[अय].

Both involve the same principle — diphthongs breaking before vowels — but the results differ based on the vowel quality.

@prakriya[nI + laT + tip]

---

## concept - Step 1: The Input

We start with:

1. **Root**: @deva[नी] "to lead, carry" (Class 1, भ्वादिगण)
2. **Meaning**: present tense, active voice, 3rd singular
3. **Target**: @deva[नयति]

The root vowel @deva[ई] will undergo two changes: guṇa (strengthening) and sandhi (vowel resolution).

---

## 3.2.123 - Add the Present Marker

**Key Terms:** vartamāna, laṭ

@deva[वर्तमाने लट्] — The affix @deva[लट्] comes for present action.

> @deva[नी] + @deva[लट्]

---

## 3.4.78 - Select the Ending

**Key Terms:** tiṅ, tip

@deva[तिप्तस्झि...] — The @deva[ल्] is replaced by @deva[तिप्] (3sg parasmaipada).

> @deva[नी] + @deva[तिप्]

After @term[it]-deletion, @deva[तिप्] → @deva[ति].

---

## 3.1.68 - Insert the Class Affix

**Key Terms:** śap, kartari

@deva[कर्तरि शप्] — The affix @deva[शप्] comes between root and ending.

@deva[नी] is Class 1 (@deva[भ्वादि]), so it takes @deva[शप्]:

> @deva[नी] + @deva[शप्] + @deva[ति]

After @term[it]-deletion (@deva[श्] and @deva[प्] are markers), @deva[शप्] → @deva[अ]:

> @deva[नी] + @deva[अ] + @deva[ति]

---

## 7.3.84 - Apply Guṇa

**Key Terms:** guṇa, sārvadhātuka, ik

@deva[सार्वधातुकार्धधातुकयोः] — An @pratyahara[ik] vowel of the stem takes @term[guṇa] before @term[sārvadhātuka] or @term[ārdhadhātuka] affixes.

The root vowel @deva[ई] is @pratyahara[ik]. The following @deva[शप्] is @term[sārvadhātuka]. So guṇa applies:

> @deva[ई] → @deva[ए] (guṇa of @deva[ई])

Our form is now:

> @deva[ने] + @deva[अ] + @deva[ति]

Compare with @deva[भू]: there @deva[ऊ] → @deva[ओ]. Here @deva[ई] → @deva[ए]. Both are guṇa of @pratyahara[ik] vowels.

---

## 6.1.77 - Resolve the Vowel Meeting

**Key Terms:** ik, yaṇ, aci

@deva[इको यणचि] — An @pratyahara[ik] vowel becomes @pratyahara[yaṇ] when followed by a vowel.

Wait — we have @deva[ए] followed by @deva[अ]. But @deva[ए] is NOT @pratyahara[ik] — it's @pratyahara[ec] (the diphthongs @deva[ए ओ ऐ औ]).

So @ref[6.1.77] doesn't apply here. We need a different rule.

---

## 6.1.78 - Diphthong Resolution

**Key Terms:** ec, ayavāyāv

@deva[एचोऽयवायावः] — An @pratyahara[ec] vowel followed by a vowel becomes its ayavāyāv equivalent.

This is the key sandhi rule for diphthongs:

| @pratyahara[ec] | Before vowel |
|-----------------|--------------|
| @deva[ए] | @deva[अय्] |
| @deva[ओ] | @deva[अव्] |
| @deva[ऐ] | @deva[आय्] |
| @deva[औ] | @deva[आव्] |

So @deva[ए] → @deva[अय्]:

> @deva[ने] + @deva[अ] → @deva[नय्] + @deva[अ] → @deva[नय] + @deva[अ]

The @deva[य्] combines with the following @deva[अ]:

> @deva[नय] + @deva[ति] → @deva[नयति]

---

## concept - Comparing भवति and नयति

Both derivations follow the same pattern, but with different vowels:

| Step | @deva[भू] → @deva[भवति] | @deva[नी] → @deva[नयति] |
|------|-------------------------|-------------------------|
| Root vowel | @deva[ऊ] | @deva[ई] |
| Guṇa | @deva[ऊ] → @deva[ओ] | @deva[ई] → @deva[ए] |
| Before @deva[अ] | @deva[ओ] + @deva[अ] | @deva[ए] + @deva[अ] |
| Sandhi (6.1.78) | @deva[ओ] → @deva[अव्] | @deva[ए] → @deva[अय्] |
| Result | @deva[भव] + @deva[ति] | @deva[नय] + @deva[ति] |

The same rule (@ref[6.1.78]) handles both — it's the vowel quality that determines @deva[व्] vs @deva[य्].

---

## concept - The Complete Rule Chain

| # | Rule | Operation |
|---|------|-----------|
| 1 | @ref[3.2.123] | Add @deva[लट्] |
| 2 | @ref[3.4.78] | Select @deva[तिप्] → @deva[ति] |
| 3 | @ref[3.1.68] | Insert @deva[शप्] → @deva[अ] |
| 4 | @ref[7.3.84] | Guṇa: @deva[ई] → @deva[ए] |
| 5 | @ref[6.1.78] | Sandhi: @deva[ए] + @deva[अ] → @deva[अय] |
| 6 | @ref[1.3.9] | Delete @term[it] markers |

Final form: **@deva[नयति]** — "he leads"

---

## concept - The Guṇa-Sandhi Pattern

This pattern is extremely common in Class 1 verbs with @pratyahara[ik] root vowels:

| Root | Guṇa | + @deva[अ] | Result |
|------|------|-----------|--------|
| @deva[नी] "lead" | @deva[ने] | @deva[नय] | @deva[नयति] |
| @deva[जि] "conquer" | @deva[जे] | @deva[जय] | @deva[जयति] |
| @deva[श्रु] "hear" | @deva[श्रो] | @deva[श्रव] | @deva[श्रवति]* |
| @deva[भू] "be" | @deva[भो] | @deva[भव] | @deva[भवति] |
| @deva[स्तु] "praise" | @deva[स्तो] | @deva[स्तव] | @deva[स्तवति]* |

(*Some of these roots have other complexities)

The rule is consistent: guṇa produces a diphthong, then @ref[6.1.78] resolves it before the @deva[अ] of @deva[शप्].

---

## concept - Try Other Forms

@prakriya[nI + laT + sip]{collapsed}

@deva[नयसि] — "you lead" (same pattern, different ending)

@prakriya[ji + laT + tip]{collapsed}

@deva[जयति] — "he conquers" (parallel to @deva[नयति])

@prakriya[nI + laT + Jhi]{collapsed}

@deva[नयन्ति] — "they lead" (3pl uses same stem)

---

## concept - Why This Matters

Understanding the guṇa + sandhi pattern unlocks hundreds of verb forms:

1. **Guṇa** (@ref[7.3.84]) strengthens the root vowel before @term[sārvadhātuka] affixes
2. **Diphthong sandhi** (@ref[6.1.78]) resolves the guṇa vowel before the following @deva[अ]

This is why Class 1 verbs often show @deva[य] or @deva[व] in their stems — it's not part of the root, but a sandhi product of guṇa + class affix.

---

## concept - What's Next

Now you've seen both @deva[व]-sandhi (@deva[भवति]) and @deva[य]-sandhi (@deva[नयति]). Explore:

- **Class 10 verbs**: Use @deva[णिच्] instead of @deva[शप्], with different patterns
- **Passive**: @deva[नीयते] — how does the passive affix change things?
- **Causative**: @deva[नाययति] — adds another layer of derivation
