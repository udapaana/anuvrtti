---
id: prakarana-sandhi
order: 61
title: "Prakaraṇa: The Sandhi System"
titleSanskrit: सन्धिप्रकरणम्
label: सन्धिः
track: grammar
category: foundation
description: Deep dive into Pāṇini's sound-combination rules. How @term[ac] and @term[hal] interact at morpheme and word boundaries.
difficulty: intermediate
estimatedTime: 2-3 hours
prerequisites:
  - sandhi-vowel
  - sandhi-consonant
---

## concept - The Architecture of Sandhi

@term[sandhi] ("junction") is the systematic modification of sounds when they meet. Every Sanskrit word undergoes sandhi during formation, and words undergo sandhi when combined in sentences. Pāṇini dedicates the entire 6th @term[adhyāya] primarily to sandhi, with the core rules in @deva[पाद] 6.1 (sutras 72–223).

The sandhi system has a clear architecture:

| Domain | Heading Rule | Scope |
|--------|--------------|-------|
| @term[saṃhitā] | @ref[6.1.72] | Close proximity — where sandhi applies |
| @term[ac] + @term[ac] | @ref[6.1.77]–@ref[6.1.111] | Vowel meeting vowel |
| @term[hal] + @term[hal] | @ref[8.4.40]–@ref[8.4.68] | Consonant meeting consonant |
| @term[visarga] | @ref[8.3.15]–@ref[8.3.48] | Final @deva[-स्]/@deva[-र्] changes |

This @deva[प्रकरण] focuses on the vowel sandhi core in 6.1, the heart of the system.

---

## @ref[6.1.72] - संहितायाम्

**Key Terms:** @deva[संहिता]

@deva[संहितायाम्] — [The following rules apply] in @term[saṃhitā] (close proximity).

@sutra[6.1.72]

This is the @term[adhikāra] (governing rule) for all sandhi that follows. @term[saṃhitā] means "placed together" — sounds in immediate contact, with no pause between them. Defined in @ref[1.4.109] as @deva[परः सन्निकर्षः संहिता] — "the closest proximity is @term[saṃhitā]."

When you pause between words (as in slow, deliberate speech), sandhi doesn't apply. In normal connected speech and within word formation, sandhi is obligatory.

---

## concept - The Three Vowel Sandhi Strategies

When two @term[svara] (vowels) meet, one of three things happens:

1. **Coalescence** (@term[dīrgha]) — The two merge into one long vowel
2. **Semivowel substitution** (@term[yaṇ]) — The first becomes a semivowel
3. **Replacement by the second** (@term[pararūpa]) — The first vanishes

The default is coalescence. The other two apply in specific conditions.

---

## @ref[6.1.77] - इको यणचि

**Key Terms:** @deva[इक्], @deva[यण्], @deva[अच्]

@deva[इको यणचि] — An @pratyahara[ik] vowel becomes the corresponding @pratyahara[yaṇ] (semivowel) when an @pratyahara[ac] (vowel) follows.

@sutra[6.1.77]

This is the most important vowel sandhi rule. When @deva[इ], @deva[ई], @deva[उ], @deva[ऊ], @deva[ऋ], or @deva[ऌ] is followed by a different vowel, it becomes the corresponding semivowel:

| @pratyahara[ik] | → @pratyahara[yaṇ] | Example |
|-----------------|---------------------|---------|
| @deva[इ/ई] | @deva[य्] | @deva[इति अत्र] → @deva[इत्यत्र] |
| @deva[उ/ऊ] | @deva[व्] | @deva[मधु अत्र] → @deva[मध्वत्र] |
| @deva[ऋ/ॠ] | @deva[र्] | @deva[पितृ आज्ञा] → @deva[पित्राज्ञा] |
| @deva[ऌ] | @deva[ल्] | (rare) |

**Why does this happen?** The @pratyahara[ik] vowels and @pratyahara[yaṇ] semivowels share the same place of articulation. The vowel "closes" into its consonantal counterpart to make room for the following vowel.

---

## @ref[6.1.78] - एचोऽयवायावः

**Key Terms:** @deva[एच्], @deva[अय्], @deva[अव्], @deva[आय्], @deva[आव्]

@deva[एचोऽयवायावः] — The @pratyahara[ec] diphthongs become @deva[अय्], @deva[अव्], @deva[आय्], @deva[आव्] [before a vowel].

@sutra[6.1.78]

The diphthongs @deva[ए], @deva[ओ], @deva[ऐ], @deva[औ] can't simply become semivowels — they're already complex sounds. Instead they "split" into their component vowels:

| @pratyahara[ec] | → | Example |
|-----------------|---|---------|
| @deva[ए] | @deva[अय्] | @deva[ने + अति] → @deva[नयति] |
| @deva[ओ] | @deva[अव्] | @deva[भो + अति] → @deva[भवति] |
| @deva[ऐ] | @deva[आय्] | @deva[नै + अक] → @deva[नायक] |
| @deva[औ] | @deva[आव्] | @deva[पौ + अक] → @deva[पावक] |

This is actually @pratyahara[yaṇ] sandhi applied to the second element of each diphthong: @deva[ए] = @deva[अ+इ], so @deva[इ] → @deva[य्], giving @deva[अय्].

---

## @ref[6.1.87] - आद्गुणः

**Key Terms:** @deva[आत्], @deva[गुण]

@deva[आद्गुणः] — @term[guṇa] replaces @deva[अ]/@deva[आ] + a following @pratyahara[ik] vowel.

@sutra[6.1.87]

When @deva[अ] or @deva[आ] is followed by @deva[इ], @deva[उ], @deva[ऋ], or @deva[ऌ], the two coalesce into the @term[guṇa] grade:

| @deva[अ/आ] + | → @term[guṇa] | Example |
|--------------|---------------|---------|
| @deva[इ/ई] | @deva[ए] | @deva[च इति] → @deva[चेति] |
| @deva[उ/ऊ] | @deva[ओ] | @deva[च उक्तम्] → @deva[चोक्तम्] |
| @deva[ऋ/ॠ] | @deva[अर्] | @deva[महा ऋषि] → @deva[महर्षि] |
| @deva[ऌ] | @deva[अल्] | (rare) |

This is the "simpler vowel + complex vowel = medium vowel" rule. The @deva[अ] and the @pratyahara[ik] vowel merge into a single syllable.

---

## @ref[6.1.88] - वृद्धिरेचि

**Key Terms:** @deva[वृद्धि], @deva[एच्]

@deva[वृद्धिरेचि] — @term[vṛddhi] replaces @deva[अ]/@deva[आ] + a following @pratyahara[ec] diphthong.

@sutra[6.1.88]

When @deva[अ] or @deva[आ] meets a diphthong (@deva[ए], @deva[ओ], @deva[ऐ], @deva[औ]), they coalesce into @term[vṛddhi]:

| @deva[अ/आ] + | → @term[vṛddhi] | Example |
|--------------|-----------------|---------|
| @deva[ए] | @deva[ऐ] | @deva[तस्य एषः] → @deva[तस्यैषः] |
| @deva[ओ] | @deva[औ] | @deva[महा ओजस्] → @deva[महौजस्] |
| @deva[ऐ] | @deva[ऐ] | (rare) |
| @deva[औ] | @deva[औ] | (rare) |

The pattern: @deva[अ] + diphthong = strengthened diphthong.

---

## @ref[6.1.101] - अकः सवर्णे दीर्घः

**Key Terms:** @deva[अक्], @deva[सवर्ण], @deva[दीर्घ]

@deva[अकः सवर्णे दीर्घः] — When an @pratyahara[ak] vowel is followed by a @term[savarṇa] (homogeneous) vowel, @term[dīrgha] (lengthening) replaces both.

@sutra[6.1.101]

When two vowels of the same class meet, they merge into one long vowel:

| Sequence | → @term[dīrgha] | Example |
|----------|-----------------|---------|
| @deva[अ + अ] | @deva[आ] | @deva[च अपि] → @deva[चापि] |
| @deva[अ + आ] | @deva[आ] | @deva[तत्र आसीत्] → @deva[तत्रासीत्] |
| @deva[इ + इ] | @deva[ई] | @deva[गिरि इव] → @deva[गिरीव] |
| @deva[उ + उ] | @deva[ऊ] | @deva[साधु उक्तम्] → @deva[साधूक्तम्] |

@term[savarṇa] means "same class" — @deva[अ] and @deva[आ] are @term[savarṇa] to each other, as are @deva[इ] and @deva[ई], etc.

---

## @ref[6.1.109] - एङः पदान्तादति

**Key Terms:** @deva[एङ्], @deva[पदान्त], @deva[अति]

@deva[एङः पदान्तादति] — @deva[ए] or @deva[ओ] at @term[pada] end, when followed by @deva[अ], remains unchanged (the @deva[अ] is deleted).

@sutra[6.1.109]

This is the @term[pararūpa] exception for word-final @deva[ए]/@deva[ओ]:

| Sequence | Result | Example |
|----------|--------|---------|
| @deva[ए + अ] | @deva[ए] | @deva[हरे अत्र] → @deva[हरेऽत्र] |
| @deva[ओ + अ] | @deva[ओ] | @deva[प्रभो अत्र] → @deva[प्रभोऽत्र] |

The @deva[अ] is elided, marked by @deva[अवग्रह] (ऽ) in writing. Note this only applies when @deva[ए]/@deva[ओ] are at word end; within words, @ref[6.1.78] applies instead.

---

## concept - The Sandhi Hierarchy

When multiple rules could apply, which wins? The system has a clear precedence:

1. **@term[savarṇa] lengthening** (@ref[6.1.101]) — Same-class vowels merge to long
2. **@term[guṇa]/@term[vṛddhi]** (@ref[6.1.87]–@ref[6.1.88]) — @deva[अ/आ] + other vowel
3. **@pratyahara[yaṇ] substitution** (@ref[6.1.77]) — @pratyahara[ik] + vowel → semivowel
4. **Special exceptions** (@ref[6.1.109] etc.) — Word-boundary specials

The rule that matches the most specific environment applies. @term[savarṇa] is most specific (same vowel class), so it wins over @term[guṇa].

---

## concept - Internal vs. External Sandhi

Sandhi operates in two domains:

**Internal (@deva[अभ्यन्तर]):** Within a word during derivation
- @deva[भू] + @deva[अ] + @deva[ति] → @deva[भो] + @deva[अति] → @deva[भवति] (@ref[6.1.78])
- @deva[नी] + @deva[अ] + @deva[ति] → @deva[नय्] + @deva[अति] → @deva[नयति] (@ref[6.1.77])

**External (@deva[बाह्य]):** At word boundaries in connected speech
- @deva[राम] + @deva[इति] → @deva[रामेति] (@ref[6.1.87])
- @deva[गुरु] + @deva[आज्ञा] → @deva[गुर्वाज्ञा] (@ref[6.1.77])

The rules are largely the same, but some exceptions apply only externally (like @ref[6.1.109]).

---

## @ref[6.1.84] - एकः पूर्वपरयोः

**Key Terms:** @deva[पूर्व], @deva[पर]

@deva[एकः पूर्वपरयोः] — A single [substitute] replaces both the preceding and following [sounds].

@sutra[6.1.84]

This @term[paribhāṣā] (interpretive rule) clarifies that in vowel sandhi, the substitute (like @term[guṇa] @deva[ए]) replaces **both** original vowels, not just one. Without this rule, @deva[च + इति] → @deva[चे + इति] (गुण only replaces the @deva[अ]) would be ambiguous.

The result occupies one syllable where there were two.

---

## concept - Summary: The Core Pattern

The vowel sandhi system follows a clear logic:

| First Vowel | Second Vowel | Result | Rule |
|-------------|--------------|--------|------|
| @deva[अ/आ] | @pratyahara[ik] | @term[guṇa] | @ref[6.1.87] |
| @deva[अ/आ] | @pratyahara[ec] | @term[vṛddhi] | @ref[6.1.88] |
| @pratyahara[ik] | any vowel | @pratyahara[yaṇ] | @ref[6.1.77] |
| @pratyahara[ec] | any vowel | @deva[अय्/अव्/आय्/आव्] | @ref[6.1.78] |
| same class | same class | @term[dīrgha] | @ref[6.1.101] |

The entire vowel sandhi system flows from these five rules plus a handful of exceptions. Master these, and you can predict any vowel junction.

---

## concept - Practice: Apply the Rules

Predict the sandhi result, then check your answer:

1. @deva[वने + अत्र] → ? (Rule: @ref[6.1.87])
2. @deva[कवि + इव] → ? (Rule: @ref[6.1.101])
3. @deva[मधु + आसीत्] → ? (Rule: @ref[6.1.77])
4. @deva[तस्य + एव] → ? (Rule: @ref[6.1.88])
5. @deva[गुरो + अत्र] → ? (Rule: @ref[6.1.109])

**Answers:**
1. @deva[वनेऽत्र] — @deva[ए] + @deva[अ] → @deva[ए] (word-final @deva[ए], @deva[अ] elided)
2. @deva[कवीव] — @deva[इ] + @deva[इ] → @deva[ई] (@term[savarṇa] @term[dīrgha])
3. @deva[मध्वासीत्] — @deva[उ] + @deva[आ] → @deva[व्] + @deva[आ] (@pratyahara[yaṇ])
4. @deva[तस्यैव] — @deva[अ] + @deva[ए] → @deva[ऐ] (@term[vṛddhi])
5. @deva[गुरोऽत्र] — @deva[ओ] + @deva[अ] → @deva[ओ] (word-final @deva[ओ], @deva[अ] elided)
