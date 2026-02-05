---
id: sandhi-vowel
order: 27
title: अच्सन्धि — Vowel Sandhi
titleSanskrit: अच्सन्धिः
label: स्वरसन्धिः
track: grammar
category: sandhi
description: Master @term[ac] (vowel) @term[sandhi] rules. When @term[svara] meet at @term[pada] boundaries, these rules apply.
difficulty: intermediate
estimatedTime: 3 hours
prerequisites:
  - introduction
---

## concept - What Is Sandhi?

Sanskrit doesn't tolerate vowel collisions. When two vowels come into close contact (@deva[संहिता])—at a word boundary or inside a compound—they merge, strengthen, or transform. This process is called @deva[सन्धि] ("joining").

Vowel sandhi (@deva[अच्सन्धि]) governs what happens when a vowel meets another vowel. It is the most common type of sandhi you'll encounter, and mastering it unlocks the ability to read continuous Sanskrit prose and verse.

**Why does this matter?**

Consider a verse from the Bhagavad Gita:

@deva[न हि ज्ञानेन सदृशं पवित्रम् इह विद्यते] (BG 4.38)

In continuous text, this is written:

@deva[न हि ज्ञानेन सदृशं पवित्रमिह विद्यते]

The @deva[म्] + @deva[इ] junction follows consonant sandhi, but within this same verse, the phrase @deva[न इह] would become @deva[नेह] by vowel sandhi if they were adjacent. Understanding these rules is essential for both reading joined text and splitting it back into individual words.

In this path, you'll learn the eight core vowel sandhi rules of the Ashtadhyayi, organized from the simplest to the most specialized.

---

## concept - The Vowel Landscape

Before diving into rules, let's map the vowels. Panini groups them using @deva[प्रत्याहार] abbreviations:

| Pratyahara      | Vowels                                    | Description                   |
| --------------- | ----------------------------------------- | ----------------------------- |
| @pratyahara[ac] | @deva[अ इ उ ऋ ऌ ए ओ ऐ औ] (and long forms) | All vowels                    |
| @pratyahara[ik] | @deva[इ उ ऋ ऌ] (and long forms)           | Simple vowels except @deva[अ] |
| @deva[अक्]      | @deva[अ इ उ ऋ ऌ] (and long forms)         | Simple (non-diphthong) vowels |
| @deva[एच्]      | @deva[ए ओ ऐ औ]                            | Diphthongs                    |
| @deva[एङ्]      | @deva[ए ओ]                                | Simple diphthongs             |

And the vowel grades you learned in the introduction path:

| Base (@pratyahara[ik]) | Guna       | Vrddhi     |
| ---------------------- | ---------- | ---------- |
| @deva[इ/ई]             | @deva[ए]   | @deva[ऐ]   |
| @deva[उ/ऊ]             | @deva[ओ]   | @deva[औ]   |
| @deva[ऋ/ॠ]             | @deva[अर्] | @deva[आर्] |
| @deva[ऌ]               | @deva[अल्] | @deva[आल्] |

Two vowels are @deva[सवर्ण] ("homogeneous") if they share the same point and manner of articulation, differing only in length. So @deva[अ] and @deva[आ] are savarna, @deva[इ] and @deva[ई] are savarna, but @deva[अ] and @deva[इ] are not.

With this map in hand, the rules follow a clean logic. Let's begin.

---

## 6.1.101 - Like + Like = Long (Savarna-Dirgha)

**Key Terms:** @deva[अक्], @deva[सवर्ण], @deva[दीर्घ]

@deva[अकः सवर्णे दीर्घः] — When a simple vowel (@deva[अक्]) is followed by a homogeneous (@deva[सवर्ण]) vowel, the long form of that vowel is the single substitute (@deva[एकादेश]) for both.

This is the simplest and most intuitive sandhi rule. When two vowels of the same type meet—whether both short, both long, or one of each—they collapse into a single long vowel.

The term @deva[एकादेश] means "single substitute for both." It replaces the two original vowels entirely. This concept, defined by @ref[1.1.50] (@deva[स्थानेऽन्तरतमः]), ensures that the substitute occupies the position of both the preceding and following elements.

| First vowel | Second vowel | Result   | Example                                          |
| ----------- | ------------ | -------- | ------------------------------------------------ |
| @deva[अ]    | @deva[अ]     | @deva[आ] | @deva[दण्ड] + @deva[अग्रम्] = @deva[दण्डाग्रम्]  |
| @deva[अ]    | @deva[आ]     | @deva[आ] | @deva[हिम] + @deva[आलयः] = @deva[हिमालयः]        |
| @deva[आ]    | @deva[अ]     | @deva[आ] | @deva[विद्या] + @deva[अर्थी] = @deva[विद्यार्थी] |
| @deva[इ]    | @deva[इ]     | @deva[ई] | @deva[कवि] + @deva[इन्द्रः] = @deva[कवीन्द्रः]   |
| @deva[इ]    | @deva[ई]     | @deva[ई] | @deva[गिरि] + @deva[ईशः] = @deva[गिरीशः]         |
| @deva[उ]    | @deva[उ]     | @deva[ऊ] | @deva[गुरु] + @deva[उपदेशः] = @deva[गुरूपदेशः]   |
| @deva[ऋ]    | @deva[ऋ]     | @deva[ॠ] | @deva[पितृ] + @deva[ऋणम्] = @deva[पितॄणम्]       |

**From the Bhagavad Gita (2.11):**

@deva[अशोच्यान् अन्वशोचः त्वम्] → @deva[अशोच्यानन्वशोचस्त्वम्]

Here @deva[अन्] + @deva[अ] merges to @deva[आ] by this rule: @deva[अशोच्यान्] + @deva[अन्वशोचः] → @deva[अशोच्यानन्वशोचः].

---

## 6.1.87 - Guna Substitution

**Key Terms:** @deva[आत्], @deva[गुण]

@deva[आद्गुणः] — When @deva[अ] or @deva[आ] is followed by a simple @pratyahara[ik] vowel (@deva[इ/ई], @deva[उ/ऊ], @deva[ऋ/ॠ], @deva[ऌ]), the guna vowel is the single substitute for both.

This is one of the most frequently applied rules in all of Sanskrit. When @deva[अ/आ] meets a dissimilar simple vowel, they merge into the guna grade of that vowel. Think of it as @deva[अ] "absorbing" the following vowel and producing the medium-strength result.

The guna vowels are @deva[ए], @deva[ओ], @deva[अर्], and @deva[अल्]—defined by @ref[1.1.2] (@deva[अदेङ्गुणः]).

| First      | Second     | Guna result | Example                                       |
| ---------- | ---------- | ----------- | --------------------------------------------- |
| @deva[अ/आ] | @deva[इ/ई] | @deva[ए]    | @deva[न] + @deva[ईशः] = @deva[नेशः]           |
| @deva[अ/आ] | @deva[उ/ऊ] | @deva[ओ]    | @deva[सूर्य] + @deva[उदयः] = @deva[सूर्योदयः] |
| @deva[अ/आ] | @deva[ऋ/ॠ] | @deva[अर्]  | @deva[महा] + @deva[ऋषिः] = @deva[महर्षिः]     |
| @deva[अ/आ] | @deva[ऌ]   | @deva[अल्]  | (rare in practice)                            |

**From the Ramayana:**

@deva[रामः तु इक्ष्वाकुवंशे] → @deva[रामस्तु] + @deva[इक्ष्वाकुवंशे] → @deva[रामस्तेक्ष्वाकुवंशे]

Actually, a cleaner example from everyday Sanskrit:

@deva[देव] + @deva[इन्द्रः] = @deva[देवेन्द्रः] "lord of the gods"

Here @deva[अ] + @deva[इ] = @deva[ए] (guna).

@deva[महा] + @deva[उत्सवः] = @deva[महोत्सवः] "great festival"

Here @deva[आ] + @deva[उ] = @deva[ओ] (guna).

---

## 6.1.88 - Vrddhi Substitution

**Key Terms:** @deva[वृद्धि], @deva[एच्]

@deva[वृद्धिरेचि] — When @deva[अ] or @deva[आ] is followed by a diphthong (@deva[एच्]: @deva[ए], @deva[ऐ], @deva[ओ], @deva[औ]), the vrddhi vowel is the single substitute for both.

This is the companion to @ref[6.1.87]. Where guna handles @deva[अ/आ] + simple vowel, vrddhi handles @deva[अ/आ] + diphthong. The result is the "strong grade" vowel.

The vrddhi vowels are @deva[आ], @deva[ऐ], and @deva[औ]—defined by @ref[1.1.1] (@deva[वृद्धिरादैच्]).

| First      | Second   | Vrddhi result | Example                                            |
| ---------- | -------- | ------------- | -------------------------------------------------- |
| @deva[अ/आ] | @deva[ए] | @deva[ऐ]      | @deva[तस्य] + @deva[एव] = @deva[तस्यैव]            |
| @deva[अ/आ] | @deva[ऐ] | @deva[ऐ]      | @deva[महा] + @deva[ऐश्वर्यम्] = @deva[महैश्वर्यम्] |
| @deva[अ/आ] | @deva[ओ] | @deva[औ]      | @deva[वन] + @deva[ओषधिः] = @deva[वनौषधिः]          |
| @deva[अ/आ] | @deva[औ] | @deva[औ]      | @deva[परम] + @deva[औदार्यम्] = @deva[परमौदार्यम्]  |

**From the Bhagavad Gita (6.32):**

@deva[आत्मा उपमेन] → @deva[आत्मौपम्येन]

Here @deva[आ] + @deva[औ] = @deva[औ] (vrddhi): @deva[आत्म] + @deva[औपम्येन] = @deva[आत्मौपम्येन] "by comparison with oneself."

**How to distinguish 6.1.87 from 6.1.88:**

The logic is simple. Check what follows @deva[अ/आ]:

- Simple vowel (@deva[इ उ ऋ ऌ] or their long forms) → guna (@ref[6.1.87])
- Diphthong (@deva[ए ओ ऐ औ]) → vrddhi (@ref[6.1.88])

---

## 6.1.77 - Semivowel Substitution (Ik to Yan)

**Key Terms:** @deva[इक्], @deva[यण्], @deva[अच्]

@deva[इको यणचि] — An @pratyahara[ik] vowel (@deva[इ/ई], @deva[उ/ऊ], @deva[ऋ/ॠ], @deva[ऌ]) becomes the corresponding @deva[यण्] semivowel when followed by a dissimilar vowel.

When @ref[6.1.101] does not apply (i.e., the following vowel is NOT savarna), and the first vowel is an @pratyahara[ik] vowel (not @deva[अ/आ]), the vowel "hardens" into its semivowel counterpart. Each vowel has a natural semivowel partner:

| Vowel      | Becomes semivowel | Why            |
| ---------- | ----------------- | -------------- |
| @deva[इ/ई] | @deva[य्]         | Both palatal   |
| @deva[उ/ऊ] | @deva[व्]         | Both labial    |
| @deva[ऋ/ॠ] | @deva[र्]         | Both retroflex |
| @deva[ऌ]   | @deva[ल्]         | Both dental    |

The semivowel shares the same articulatory position as its parent vowel — it is the consonantal form of that vowel.

| First    | Second   | Result    | Example                                           |
| -------- | -------- | --------- | ------------------------------------------------- |
| @deva[इ] | @deva[अ] | @deva[य]  | @deva[इति] + @deva[अपि] = @deva[इत्यपि]           |
| @deva[ई] | @deva[आ] | @deva[या] | @deva[नदी] + @deva[आगच्छति] = @deva[नद्यागच्छति]  |
| @deva[उ] | @deva[अ] | @deva[व]  | @deva[मधु] + @deva[अत्र] = @deva[मध्वत्र]         |
| @deva[उ] | @deva[ए] | @deva[वे] | @deva[अनु] + @deva[एषणम्] = @deva[अन्वेषणम्]      |
| @deva[ऋ] | @deva[अ] | @deva[र]  | @deva[पितृ] + @deva[अनुमतिः] = @deva[पित्रनुमतिः] |

**From the Bhagavad Gita (2.70):**

@deva[आपूर्यमाणम् अचलप्रतिष्ठम्] — within the compound @deva[अचलप्रतिष्ठम्], no vowel sandhi applies because the vowels don't collide. But consider:

@deva[दधि] + @deva[अत्र] = @deva[दध्यत्र] "yogurt here"

The @deva[इ] of @deva[दधि] becomes @deva[य्] before @deva[अ].

**Important:** This rule does NOT apply when the following vowel is savarna. @deva[दधि] + @deva[इदम्] follows @ref[6.1.101] instead (producing @deva[दधीदम्]).

---

## 6.1.78 - Diphthong Resolution

**Key Terms:** @deva[एच्], @deva[अय्], @deva[आय्], @deva[अव्], @deva[आव्]

@deva[एचोऽयवायावः] — When a diphthong (@deva[एच्]: @deva[ए], @deva[ऐ], @deva[ओ], @deva[औ]) is followed by any vowel, it resolves into two components.

Diphthongs are "compound vowels" — each contains @deva[अ/आ] fused with a semivowel. When a vowel follows, the diphthong splits apart, revealing its internal structure:

| Diphthong | Resolves to | Analysis             |
| --------- | ----------- | -------------------- |
| @deva[ए]  | @deva[अय्]  | @deva[अ] + @deva[य्] |
| @deva[ऐ]  | @deva[आय्]  | @deva[आ] + @deva[य्] |
| @deva[ओ]  | @deva[अव्]  | @deva[अ] + @deva[व्] |
| @deva[औ]  | @deva[आव्]  | @deva[आ] + @deva[व्] |

This rule is seen most commonly within word derivation rather than at external word boundaries (where @ref[6.1.109] often takes priority for @deva[ए/ओ] + @deva[अ]).

| Input                | Result     | Example                                                                                |
| -------------------- | ---------- | -------------------------------------------------------------------------------------- |
| @deva[ने] + @deva[अ] | @deva[नय]  | @deva[नी] → @deva[ने] (guna) → @deva[नय] (before @deva[अ] of @deva[शप्]) → @deva[नयति] |
| @deva[भो] + @deva[अ] | @deva[भव]  | @deva[भू] → @deva[भो] (guna) → @deva[भव] (before @deva[अ] of @deva[शप्]) → @deva[भवति] |
| @deva[नै] + @deva[अ] | @deva[नाय] | In the causative: @deva[नी] → @deva[नै] (vrddhi) → @deva[नाय] → @deva[नाययति]          |
| @deva[भौ] + @deva[अ] | @deva[भाव] | @deva[भू] → @deva[भौ] (vrddhi) → @deva[भाव] → @deva[भावः] "existence"                  |

**Derivation of @deva[भवति]:**

This rule is why @deva[भू] becomes @deva[भव] in the present tense:

1. @deva[भू] + @deva[शप्] (= @deva[अ]) + @deva[ति]
2. Guna by @ref[7.3.84]: @deva[ऊ] → @deva[ओ], giving @deva[भो] + @deva[अ] + @deva[ति]
3. @ref[6.1.78]: @deva[ओ] → @deva[अव्], giving @deva[भव्] + @deva[अ] + @deva[ति]
4. Result: @deva[भवति]

---

## 6.1.109 - Purva-Rupa: Word-Final e/o + a

**Key Terms:** @deva[एङ्], @deva[पदान्त], @deva[अत्]

@deva[एङः पदान्तादति] — When word-final @deva[ए] or @deva[ओ] (@deva[एङ्]) is followed by short @deva[अ], the first vowel remains unchanged and the @deva[अ] is elided.

This is called @deva[पूर्वरूप] ("prior form") — the first element wins and the second disappears. In written text, the elided @deva[अ] is marked with an @deva[अवग्रह] (ऽ).

This rule overrides @ref[6.1.87] (which would give guna). It is restricted to:

- The first vowel must be @deva[ए] or @deva[ओ] (not @deva[ऐ] or @deva[औ])
- The first vowel must be @deva[पदान्त] (word-final, i.e., at the end of a @deva[पद])
- The second vowel must be short @deva[अ] only (not @deva[आ])

| First word   | Second word | Result           | Note                   |
| ------------ | ----------- | ---------------- | ---------------------- |
| @deva[हरे]   | @deva[अव]   | @deva[हरेऽव]     | Vocative + @deva[अव]   |
| @deva[प्रभो] | @deva[अत्र] | @deva[प्रभोऽत्र] | Vocative + @deva[अत्र] |
| @deva[सो]    | @deva[अपि]  | @deva[सोऽपि]     | "he also"              |
| @deva[ते]    | @deva[अपि]  | @deva[तेऽपि]     | "they also"            |

**From the Bhagavad Gita (2.19):**

@deva[य एनं वेत्ति हन्तारम्] — here @deva[य] + @deva[एनम्] does NOT trigger this rule because @deva[य] ends in @deva[अ], not @deva[ए/ओ]. That junction follows @ref[6.1.87] instead.

But consider BG 11.37:

@deva[कस्मात् च ते न नमेरन् महात्मन्] — if we had @deva[ते] + @deva[अपि], it would yield @deva[तेऽपि].

**Why only short @deva[अ]?** If @deva[आ] follows, guna applies normally: @deva[ते] + @deva[आसन्] = @deva[तासन्] (? — actually guna: @deva[ए] + @deva[आ] would produce @deva[ऐ] by @ref[6.1.88]... but @deva[ते] is already a diphthong formed from @deva[अ+इ], and the point is this special rule only blocks guna/vrddhi for short @deva[अ]).

---

## 6.1.127 - Shakalya's Option

**Key Terms:** @deva[इक्], @deva[असवर्ण], @deva[ह्रस्व], @deva[शाकल्य]

@deva[इकोऽसवर्णे शाकल्यस्य हृस्वश्च] — According to the teacher Shakalya, an @pratyahara[ik] vowel before a dissimilar vowel may optionally remain as a short vowel (with hiatus), instead of becoming a semivowel by @ref[6.1.77].

This provides an alternative to the semivowel rule. Instead of merging, the vowels can remain separate with a pause between them. The @pratyahara[ik] vowel shortens if it was long.

| Standard (@ref[6.1.77])                   | Shakalya option | Meaning                            |
| ----------------------------------------- | --------------- | ---------------------------------- |
| @deva[दधि] + @deva[अत्र] = @deva[दध्यत्र] | @deva[दधि अत्र] | "yogurt here"                      |
| @deva[मधु] + @deva[अरिः] = @deva[मध्वरिः] | @deva[मधु अरिः] | "honey-enemy (bee)"                |
| @deva[नदी] + @deva[अत्र] = @deva[नद्यत्र] | @deva[नदि अत्र] | "river here" (@deva[ई] → @deva[इ]) |

This option is primarily found in Vedic recitation traditions. In classical Sanskrit prose and verse, the semivowel transformation (@ref[6.1.77]) is the standard.

**Note:** The word @deva[शाकल्य] refers to the grammarian Shakalya, known for his recension of the Rgveda. This is one of several places where Panini records variant opinions from other scholars.

---

## 1.1.11 - Pragrihya: Exceptions to Sandhi

**Key Terms:** @deva[प्रगृह्य], @deva[द्विवचन], @deva[ई], @deva[ऊ], @deva[ए]

@deva[ईदूदेद्द्विवचनं प्रगृह्यम्] — Dual endings @deva[ई], @deva[ऊ], and @deva[ए] are called @deva[प्रगृह्य] ("held apart").

A @deva[प्रगृह्य] vowel does NOT undergo sandhi with the following vowel. It remains unchanged, even when a vowel directly follows. This exception is critical — without it, dual forms would be unrecognizable after sandhi.

The rule @ref[6.1.125] (@deva[प्लुतप्रगृह्या अचि नित्यम्]) then states that @deva[प्रगृह्य] vowels are always exempt from vowel sandhi.

| Form            | Analysis                                           | Why pragrihya           |
| --------------- | -------------------------------------------------- | ----------------------- |
| @deva[हरी एतौ]  | @deva[हरी] (nom. du. of @deva[हरि]) + @deva[एतौ]   | @deva[ई] is dual ending |
| @deva[गुरू इमौ] | @deva[गुरू] (nom. du. of @deva[गुरु]) + @deva[इमौ] | @deva[ऊ] is dual ending |
| @deva[बाले इमे] | @deva[बाले] (nom. du. of @deva[बालः]) + @deva[इमे] | @deva[ए] is dual ending |

**Without pragrihya**, @ref[6.1.77] would apply:

- \*@deva[हरी] + @deva[एतौ] would wrongly become @deva[हर्येतौ]
- \*@deva[गुरू] + @deva[इमौ] would wrongly become @deva[गुर्विमौ]

The pragrihya designation prevents this and preserves the dual marker.

**Other pragrihya items** include the particles @deva[अमी] (that, nom. pl.), and certain Vedic forms. The interjection @deva[आ] when meaning "a little" is also pragrihya.

---

## concept - Putting It Together: Splitting Sandhi

Reading Sanskrit requires splitting joined text back into its component words — the reverse of sandhi. Let's practice with a famous verse.

**Bhagavad Gita 2.47:**

@deva[कर्मण्येवाधिकारस्ते मा फलेषु कदाचन]

Step by step, let's split the first half:

1. @deva[कर्मण्येवाधिकारस्ते]

2. Look for sandhi junctions. The @deva[ये] could be @deva[य] + @deva[ए]... but actually @deva[ण्य] is a consonant cluster. Let's look for vowel junctions:
   - @deva[कर्मणि] + @deva[एव] — here @deva[इ] + @deva[ए] triggers @ref[6.1.77] (@deva[इ] → @deva[य्]): @deva[कर्मण्येव]
   - @deva[एव] + @deva[अधिकारः] — here @deva[अ] + @deva[अ] triggers @ref[6.1.101]: @deva[एवाधिकारः]
   - @deva[अधिकारः] + @deva[ते] — the visarga @deva[ः] + @deva[त] is consonant sandhi (→ @deva[स्ते])

3. Splitting: @deva[कर्मणि] + @deva[एव] + @deva[अधिकारः] + @deva[ते]
   "In action alone is your right."

**Another example from BG 9.22:**

@deva[अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते]

Focus on @deva[अनन्याश्चिन्तयन्तो]:

- @deva[अनन्याः] + @deva[चिन्तयन्तः] — visarga sandhi (@deva[ः] + @deva[च] → @deva[श्च])
- @deva[चिन्तयन्तः] + next word — @deva[ः] + @deva[म] → @deva[ो] (visarga sandhi, not vowel sandhi)

And @deva[पर्युपासते]:

- @deva[परि] + @deva[उपासते] — @ref[6.1.77] applies: @deva[इ] + @deva[उ] → @deva[य्] + @deva[उ] = @deva[पर्युपासते]

---

## concept - Summary: The Decision Flowchart

When two vowels meet, apply the first matching rule:

| First vowel                         | Second vowel                     | Rule          | Result                 | Example                                         |
| ----------------------------------- | -------------------------------- | ------------- | ---------------------- | ----------------------------------------------- |
| @deva[प्रगृह्य] (dual @deva[ई/ऊ/ए]) | Any vowel                        | @ref[1.1.11]  | No change              | @deva[हरी एतौ]                                  |
| @deva[अक्] (simple)                 | Savarna                          | @ref[6.1.101] | Long vowel             | @deva[न] + @deva[अपि] = @deva[नापि]             |
| @deva[अ/आ]                          | @pratyahara[ik] (@deva[इ/उ/ऋ/ऌ]) | @ref[6.1.87]  | Guna                   | @deva[देव] + @deva[इन्द्रः] = @deva[देवेन्द्रः] |
| @deva[अ/आ]                          | @deva[एच्] (diphthong)           | @ref[6.1.88]  | Vrddhi                 | @deva[सद] + @deva[एव] = @deva[सदैव]             |
| Word-final @deva[ए/ओ]               | Short @deva[अ]                   | @ref[6.1.109] | Purva-rupa (ऽ)         | @deva[सो] + @deva[अपि] = @deva[सोऽपि]           |
| @pratyahara[ik] (@deva[इ/उ/ऋ/ऌ])    | Dissimilar vowel                 | @ref[6.1.77]  | Semivowel              | @deva[इति] + @deva[अपि] = @deva[इत्यपि]         |
| @deva[एच्] (diphthong)              | Any vowel                        | @ref[6.1.78]  | @deva[अय्/आय्/अव्/आव्] | @deva[ने] + @deva[अनम्] = @deva[नयनम्]          |

**Priority matters.** Always check @ref[6.1.109] before @ref[6.1.87] for word-final @deva[ए/ओ] + @deva[अ], because the special rule overrides the general one.

**Quick mnemonics:**

- **Same meets same** → long (@ref[6.1.101])
- **@deva[अ] meets simple** → guna (@ref[6.1.87])
- **@deva[अ] meets diphthong** → vrddhi (@ref[6.1.88])
- **@deva[इ/उ/ऋ/ऌ] meets different** → semivowel (@ref[6.1.77])
- **Diphthong meets vowel** → splits (@ref[6.1.78])
- **Word-final @deva[ए/ओ] meets @deva[अ]** → avagraha (@ref[6.1.109])

---

## concept - Practice Exercises

**Exercise 1: Apply sandhi.** Identify the rule and give the result.

| First        | Second         | Your answer |
| ------------ | -------------- | ----------- |
| @deva[राम]   | @deva[इन्द्रः] | ?           |
| @deva[गुरु]  | @deva[उपदेशः]  | ?           |
| @deva[नदी]   | @deva[अस्ति]   | ?           |
| @deva[महा]   | @deva[ईश्वरः]  | ?           |
| @deva[तथा]   | @deva[एव]      | ?           |
| @deva[प्रभो] | @deva[अत्र]    | ?           |

**Answers:**

1. @deva[रामेन्द्रः] — @ref[6.1.87] (guna: @deva[अ] + @deva[इ] = @deva[ए])
2. @deva[गुरूपदेशः] — @ref[6.1.101] (savarna-dirgha: @deva[उ] + @deva[उ] = @deva[ऊ])
3. @deva[नद्यस्ति] — @ref[6.1.77] (yan: @deva[ई] → @deva[य्] before @deva[अ])
4. @deva[महेश्वरः] — @ref[6.1.87] (guna: @deva[आ] + @deva[ई] = @deva[ए])
5. @deva[तथैव] — @ref[6.1.88] (vrddhi: @deva[आ] + @deva[ए] = @deva[ऐ])
6. @deva[प्रभोऽत्र] — @ref[6.1.109] (purva-rupa: word-final @deva[ओ] + short @deva[अ])

**Exercise 2: Split these compounds.** Identify the sandhi and recover the original words.

1. @deva[विद्यालयः] → ?
2. @deva[सूर्योदयः] → ?
3. @deva[देवर्षिः] → ?
4. @deva[इत्यादि] → ?
5. @deva[महैश्वर्यम्] → ?

**Answers:**

1. @deva[विद्या] + @deva[आलयः] — @ref[6.1.101] (@deva[आ] + @deva[आ] = @deva[आ])
2. @deva[सूर्य] + @deva[उदयः] — @ref[6.1.87] (@deva[अ] + @deva[उ] = @deva[ओ])
3. @deva[देव] + @deva[ऋषिः] — @ref[6.1.87] (@deva[अ] + @deva[ऋ] = @deva[अर्])
4. @deva[इति] + @deva[आदि] — @ref[6.1.77] (@deva[इ] → @deva[य्] before @deva[आ])
5. @deva[महा] + @deva[ऐश्वर्यम्] — @ref[6.1.88] (@deva[आ] + @deva[ऐ] = @deva[ऐ])

---

## concept - What's Next?

You now understand the core vowel sandhi rules of the Ashtadhyayi:

- @ref[6.1.101] — savarna-dirgha (like merges to long)
- @ref[6.1.87] — guna (@deva[अ/आ] + simple vowel)
- @ref[6.1.88] — vrddhi (@deva[अ/आ] + diphthong)
- @ref[6.1.77] — yan (vowel becomes semivowel)
- @ref[6.1.78] — diphthong resolution
- @ref[6.1.109] — purva-rupa (word-final @deva[ए/ओ] + @deva[अ])

These rules interact constantly with every other part of the grammar — verb derivation, noun declension, compound formation, and more.

Recommended next steps:

1. **Visarga Sandhi** — What happens when @deva[ः] meets consonants and vowels
2. **Consonant Sandhi** — How stops, nasals, and sibilants change at boundaries
3. **Noun Declensions** (@deva[सुबन्त]) — See sandhi in action within paradigms
