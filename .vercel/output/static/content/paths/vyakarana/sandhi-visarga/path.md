---
id: sandhi-visarga
order: 28
title: विसर्गसन्धि — Visarga Sandhi
titleSanskrit: विसर्गसन्धिः
label: विसर्गसन्धिः
track: grammar
category: sandhi
description: Learn @term[visarga] @term[sandhi] rules. How final @deva[-स्] and @deva[-र्] transform at @term[pada] junctions.
difficulty: intermediate
estimatedTime: 2-3 hours
prerequisites:
  - sandhi-vowel
---

## concept - What Is Visarga?

The visarga @deva[ः] is the breath-sound you see at the end of countless Sanskrit words: @deva[रामः], @deva[नरः], @deva[तपः], @deva[मनः]. It is not an original sound — it is the **echo** of a final @deva[स्] or @deva[र्] that has lost its full consonantal quality at pause or before certain consonants.

Consider the nominative singular of @deva[राम]: the raw form is @deva[रामस्] (stem + @deva[सु]). When this word stands alone or before a voiceless stop, that final @deva[स्] appears as @deva[ः]. But when the next word begins with a voiced sound, the visarga transforms again — sometimes into @deva[ओ], sometimes into @deva[र्], sometimes it vanishes altogether.

Visarga sandhi is the set of rules that governs these transformations. Mastering them is essential because nearly every sentence in Sanskrit contains at least one visarga junction.

**What you will learn:**

- How final @deva[स्] first becomes @deva[रु] (the intermediate stage)
- When @deva[रु] surfaces as visarga @deva[ः]
- When it becomes @deva[ओ] (the most common spoken change)
- When it assimilates to a following sibilant
- How final @deva[म्] becomes @deva[anusvāra] and then a homorganic nasal

---

## concept - The Two-Step Process

Visarga sandhi in Panini is not a single rule — it is a **chain** of substitutions:

**Step 1:** Final @deva[स्] becomes @deva[रु] (@ref[8.2.66])

**Step 2:** The @deva[रु] then becomes one of several sounds depending on what follows:

| What Follows                    | Result               | Example             |
| ------------------------------- | -------------------- | ------------------- |
| Voiceless stop or pause         | @deva[ः] (visarga)   | @deva[रामः तिष्ठति] |
| Voiced sound after @deva[अ/आ]   | @deva[ओ]             | @deva[रामो गच्छति]  |
| Voiced sound after other vowels | @deva[र्]            | @deva[मुनिरागच्छति] |
| @deva[श/ष/स]                    | assimilated sibilant | @deva[नरश्चरति]     |

Understanding this two-step process is the key. The rules below trace each step in order.

---

## 8.2.66 - Final स् Becomes रु

**Key Terms:** @deva[सस्], @deva[रु], @deva[ससजुष्], @deva[पदान्त]

The foundational rule of visarga sandhi. At word-end, final @deva[स्] is replaced by @deva[रु]. The same applies to the @deva[ष्] of the irregular form @deva[ससजुष्].

The @deva[रु] is a technical substitute — you never actually hear "ru" in speech. It is an **intermediate stage** that immediately feeds into further rules. Think of it as Panini's way of routing final @deva[स्] through a junction box: the @deva[रु] enters, and what comes out depends on the next sound.

Why @deva[रु] and not simply @deva[र्]? The @deva[उ] in @deva[रु] is an @deva[इत्] (marker). It triggers @ref[1.1.52] (@deva[अलोऽन्त्यस्य]), ensuring that only the final @deva[स्] is replaced, not the entire word. Once the substitution is done, the @deva[उ] drops away, leaving @deva[र्] as the operative sound.

| Underlying Form | After @ref[8.2.66]            | Next Step           |
| --------------- | ----------------------------- | ------------------- |
| @deva[रामस्]    | @deva[रामर्] (from @deva[रु]) | further rules apply |
| @deva[अग्निस्]  | @deva[अग्निर्]                | further rules apply |
| @deva[वायुस्]   | @deva[वायुर्]                 | further rules apply |
| @deva[तपस्]     | @deva[तपर्]                   | further rules apply |

In the Mahabhasya, Patanjali explains that the @deva[रु]-substitution captures the historical connection between @deva[स्] and @deva[र्] — both are coronal continuants, and their alternation is one of the oldest features of Indo-Aryan phonology.

---

## 8.3.15 - Visarga Before Voiceless Sounds and Pause

**Key Terms:** @deva[खर्], @deva[अवसान], @deva[विसर्जनीय]

@deva[खरवसानयोर्विसर्जनीयः] — For the @deva[र्] that arose from @deva[रु], visarga (@deva[ः]) substitutes when what follows is a voiceless consonant (@deva[खर्]) or a pause (@deva[अवसान]).

This is the rule that produces the visarga you see in most written Sanskrit. When a word ending in original @deva[स्] stands before @deva[क], @deva[ख], @deva[च], @deva[छ], @deva[ट], @deva[ठ], @deva[त], @deva[थ], @deva[प], @deva[फ], or at the end of a sentence, the intermediate @deva[र्] surfaces as @deva[ः].

Note the pratyahara @deva[खर्] — it covers all voiceless consonants including the voiceless sibilants @deva[श], @deva[ष], @deva[स]. However, before sibilants, later rules (@ref[8.3.34], @ref[8.3.36]) may override this with sibilant-assimilation.

| Input                          | Following Sound      | Result               |
| ------------------------------ | -------------------- | -------------------- |
| @deva[रामस्] + @deva[तिष्ठति]  | @deva[त] (voiceless) | @deva[रामः तिष्ठति]  |
| @deva[नरस्] + @deva[करोति]     | @deva[क] (voiceless) | @deva[नरः करोति]     |
| @deva[वायुस्] + @deva[प्रवहति] | @deva[प] (voiceless) | @deva[वायुः प्रवहति] |
| @deva[रामस्] + (pause)         | sentence-end         | @deva[रामः]          |

From the Ramayana: @deva[रामः कमलपत्राक्षः] — "Rama, whose eyes are like lotus petals." The visarga in @deva[रामः] stays because @deva[क] follows.

---

## 8.3.17 - ओ-Replacement Before Voiced Sounds

**Key Terms:** @deva[भो], @deva[अपूर्व], @deva[य्], @deva[अश्]

@deva[भोभगोअघोअपूर्वस्य योऽशि] — When the @deva[र्] from @deva[रु] is preceded by @deva[अ] or @deva[आ], @deva[य्] substitutes before a voiced sound (@deva[अश्]). The same applies after the special forms @deva[भो], @deva[भगो], and @deva[अघो].

This is the **most frequently encountered** visarga sandhi rule in Sanskrit. Here is how it works:

1. @deva[रामस्] becomes @deva[रामर्] by @ref[8.2.66]
2. Before a voiced sound (say @deva[ग]), @deva[य्] replaces @deva[र्]: @deva[रामय्]
3. @deva[अ] + @deva[य्] coalesces to @deva[ओ] by @ref[6.1.78] (@deva[एचोऽयवायावः] in reverse — the @deva[अय्] is the ayadi-substitute that shows @deva[ओ]): @deva[रामो]
4. Result: @deva[रामो गच्छति]

When @deva[अ] follows (i.e., @deva[अः] + @deva[अ]), the @deva[ओ] absorbs the following @deva[अ], and an avagraha @deva[ऽ] marks the absorbed vowel: @deva[रामोऽस्ति].

| Input                        | Following Sound   | Result             |
| ---------------------------- | ----------------- | ------------------ |
| @deva[रामस्] + @deva[गच्छति] | @deva[ग] (voiced) | @deva[रामो गच्छति] |
| @deva[नरस्] + @deva[वदति]    | @deva[व] (voiced) | @deva[नरो वदति]    |
| @deva[देवस्] + @deva[अस्ति]  | @deva[अ] (voiced) | @deva[देवोऽस्ति]   |
| @deva[बालस्] + @deva[हसति]   | @deva[ह] (voiced) | @deva[बालो हसति]   |
| @deva[कालस्] + @deva[हि]     | @deva[ह] (voiced) | @deva[कालो हि]     |

This rule does **not** apply when the preceding vowel is @deva[इ], @deva[उ], @deva[ऋ], etc. In those cases, the @deva[र्] remains as @deva[र्] before voiced sounds: @deva[मुनिर् गच्छति] = @deva[मुनिर्गच्छति].

From the Bhagavad Gita (2.47): @deva[कर्मण्येवाधिकारस्ते मा फलेषु कदाचन] — here @deva[अधिकारस्ते] comes from @deva[अधिकारः] + @deva[ते], where @deva[अः] before @deva[त] (voiceless) keeps the visarga by @ref[8.3.15], not this rule.

---

## 8.3.19 - Optional Elision (Shakalya)

**Key Terms:** @deva[लोप], @deva[शाकल्य]

@deva[लोपः शाकल्यस्य] — According to the grammarian Shakalya, the @deva[य्] that replaces @deva[रु] after @deva[अ] may be optionally deleted before a voiced sound.

When @ref[8.3.17] produces @deva[य्] after @deva[अ], Shakalya allows an alternative: simply drop the @deva[य्], leaving @deva[अ] in contact with the following vowel. This produces a hiatus (two vowels side by side without combination).

For example, from @deva[सः] + @deva[आस्ते]:

- By @ref[8.3.17]: @deva[सोऽऽस्ते] (the standard form)
- By @ref[8.3.19]: @deva[स आस्ते] (with elision — the @deva[य्] drops, leaving @deva[अ] + @deva[आ] without sandhi)

This option is mainly found in Vedic recitation. In classical Sanskrit, the @ref[8.3.17] result (@deva[ओ]) is overwhelmingly standard. But Shakalya's option explains why some Vedic passages show forms like @deva[स एव] instead of @deva[सोऽव] or @deva[सैव].

| Standard (@ref[8.3.17])          | Shakalya Option (@ref[8.3.19]) |
| -------------------------------- | ------------------------------ |
| @deva[सो अस्ति] → @deva[सोऽस्ति] | @deva[स अस्ति]                 |
| @deva[को अत्र]                   | @deva[क अत्र]                  |
| @deva[एषो अग्निः]                | @deva[एष अग्निः]               |

---

## concept - Visarga Before Sibilants

When visarga meets a sibilant (@deva[श], @deva[ष], @deva[स]), special assimilation rules apply. The visarga does not simply remain @deva[ः] — it transforms to match the place of articulation of the following sibilant. Two rules govern this: @ref[8.3.34] provides the mandatory sibilant substitution, and @ref[8.3.36] offers an optional alternative where visarga may remain unchanged.

These rules produce the very common patterns:

- @deva[नरः] + @deva[च] = @deva[नरश्च] (via sibilant assimilation)
- @deva[नरः] + @deva[तत्र] = @deva[नरस्तत्र] (via sibilant assimilation)
- @deva[नमः] + @deva[ते] = @deva[नमस्ते] (a form everyone knows)

---

## 8.3.34 - Sibilant for Visarga

**Key Terms:** @deva[विसर्जनीय], @deva[स], @deva[खर्]

@deva[विसर्जनीयस्य सः] — A sibilant homorganic with the following voiceless consonant substitutes for visarga.

When visarga stands before a voiceless consonant that is itself followed by (or grouped with) a particular place of articulation, the visarga assimilates to the sibilant of that place:

- Before palatals (@deva[च], @deva[छ]): visarga becomes @deva[श्]
- Before retroflexes (@deva[ट], @deva[ठ]): visarga becomes @deva[ष्]
- Before dentals (@deva[त], @deva[थ]): visarga becomes @deva[स्]

The logic is simple: the breath-sound reshapes itself to match the tongue position required for the next consonant.

| Input                        | Following            | Sibilant  | Result              |
| ---------------------------- | -------------------- | --------- | ------------------- |
| @deva[नरः] + @deva[चरति]     | @deva[च] (palatal)   | @deva[श्] | @deva[नरश्चरति]     |
| @deva[नरः] + @deva[छायायाम्] | @deva[छ] (palatal)   | @deva[श्] | @deva[नरश्छायायाम्] |
| @deva[नरः] + @deva[टीकते]    | @deva[ट] (retroflex) | @deva[ष्] | @deva[नरष्टीकते]    |
| @deva[नरः] + @deva[तिष्ठति]  | @deva[त] (dental)    | @deva[स्] | @deva[नरस्तिष्ठति]  |
| @deva[नमः] + @deva[ते]       | @deva[त] (dental)    | @deva[स्] | @deva[नमस्ते]       |

The famous greeting @deva[नमस्ते] is nothing but @deva[नमः] + @deva[ते] with this rule applied: visarga becomes @deva[स्] before the dental @deva[त].

Before @deva[क], @deva[ख], @deva[प], @deva[फ] (gutturals and labials), there is no homorganic sibilant in standard Sanskrit, so visarga simply remains @deva[ः] by @ref[8.3.15]: @deva[नरः करोति], @deva[नरः पश्यति].

---

## 8.3.36 - Optional Retention Before श, ष, स

**Key Terms:** @deva[वा], @deva[शर्], @deva[विसर्ग]

@deva[वा शरि] — Before the sibilants @deva[श], @deva[ष], @deva[स] themselves (the @deva[शर्] pratyahara), visarga may **optionally** remain unchanged, or it may assimilate to the following sibilant.

This rule provides a choice when visarga directly precedes @deva[श], @deva[ष], or @deva[स] (not when it precedes a stop that happens to be palatal/retroflex/dental — that case is handled by @ref[8.3.34]).

| Input                      | Option 1 (visarga stays) | Option 2 (assimilation) |
| -------------------------- | ------------------------ | ----------------------- |
| @deva[नरः] + @deva[शेते]   | @deva[नरः शेते]          | @deva[नरश्शेते]         |
| @deva[नरः] + @deva[षण्डे]  | @deva[नरः षण्डे]         | @deva[नरष्षण्डे]        |
| @deva[नरः] + @deva[स्मरति] | @deva[नरः स्मरति]        | @deva[नरस्स्मरति]       |

In classical printed texts, Option 1 (keeping visarga) is far more common. Assimilation with doubling of the sibilant is seen primarily in certain South Indian manuscripts and in careful Vedic recitation traditions.

---

## 8.3.23 - Anusvara for Final म्

**Key Terms:** @deva[म], @deva[अनुस्वार], @deva[पद]

@deva[मोऽनुस्वारः] — At word-end, @deva[म्] becomes anusvara @deva[ं] before any consonant.

Though not strictly a "visarga" rule, this rule belongs to the same section of the Ashtadhyayi and governs another extremely common word-boundary change. Whenever a word ending in @deva[म्] is followed by a consonant, the @deva[म्] is replaced by the nasal dot (anusvara).

The @deva[म्] must be @deva[पदान्त] (word-final). Inside a word, @deva[म्] before a consonant may or may not become anusvara depending on convention, but at word boundaries, this rule is obligatory.

| Input                        | Result             |
| ---------------------------- | ------------------ |
| @deva[फलम्] + @deva[करोति]   | @deva[फलं करोति]   |
| @deva[वनम्] + @deva[गच्छति]  | @deva[वनं गच्छति]  |
| @deva[कुण्डम्] + @deva[हसति] | @deva[कुण्डं हसति] |
| @deva[सत्यम्] + @deva[वद]    | @deva[सत्यं वद]    |
| @deva[धर्मम्] + @deva[चर]    | @deva[धर्मं चर]    |

From the Taittiriya Upanishad: @deva[सत्यं वद। धर्मं चर।] — "Speak truth. Practice dharma." Both show @ref[8.3.23] in action.

Before vowels, @deva[म्] remains @deva[म्]: @deva[फलम् अस्ति] = @deva[फलमस्ति] (with vowel sandhi, not anusvara).

---

## 8.4.58 - Anusvara to Homorganic Nasal

**Key Terms:** @deva[अनुस्वार], @deva[यय्], @deva[परसवर्ण]

@deva[अनुस्वारस्य ययि परसवर्णः] — When anusvara is followed by a stop (@deva[यय्] — the stops from each varga), it optionally becomes a nasal homorganic with the following stop (@deva[परसवर्ण]).

This rule converts the "generic nasal" (anusvara) into the specific nasal of the same place of articulation as the consonant that follows. The five vargas produce five nasals:

| Anusvara +     | Varga     | Homorganic Nasal | Example                                      |
| -------------- | --------- | ---------------- | -------------------------------------------- |
| @deva[क/ख/ग/घ] | guttural  | @deva[ङ्]        | @deva[सं] + @deva[गच्छति] = @deva[सङ्गच्छति] |
| @deva[च/छ/ज/झ] | palatal   | @deva[ञ्]        | @deva[सं] + @deva[चित] = @deva[सञ्चित]       |
| @deva[ट/ठ/ड/ढ] | retroflex | @deva[ण्]        | @deva[सं] + @deva[डमरु] = @deva[सण्डमरु]     |
| @deva[त/थ/द/ध] | dental    | @deva[न्]        | @deva[सं] + @deva[तोष] = @deva[सन्तोष]       |
| @deva[प/फ/ब/भ] | labial    | @deva[म्]        | @deva[सं] + @deva[भवति] = @deva[सम्भवति]     |

This rule is @deva[वा] (optional) — both @deva[संगच्छति] and @deva[सङ्गच्छति] are correct. In practice, printed texts vary: Devanagari texts often prefer anusvara (@deva[ं]) for simplicity, while careful grammatical works and South Indian scripts tend to write the explicit nasal.

Note that before @deva[य], @deva[र], @deva[ल], @deva[व], @deva[श], @deva[ष], @deva[स], @deva[ह] (non-stops), anusvara remains anusvara — this rule only applies before the 25 sparsha consonants (stops).

---

## concept - Putting It Together

Let us trace visarga sandhi through a real verse. Consider this famous line from the Bhagavad Gita (2.20):

@deva[न जायते म्रियते वा कदाचिन्नायं भूत्वा भविता वा न भूयः]

The second half contains: @deva[कदाचित्] + @deva[न] + @deva[अयम्]. Let us see the sandhi:

1. @deva[कदाचित्] + @deva[न]: the @deva[त्] before @deva[न] — by @ref[8.4.45] a nasal may optionally substitute, giving @deva[कदाचिन्न]. (Consonant sandhi, not visarga, but part of the same junction.)

Now consider another line — Ramayana (1.1.2):

@deva[को न्वस्मिन् साम्प्रतं लोके गुणवान् कश्च वीर्यवान्]

Here the word @deva[गुणवान्] + @deva[कः] shows @deva[न्] before @deva[क], and @deva[कः] + @deva[च] shows @ref[8.3.34]: @deva[कः] + @deva[च] = @deva[कश्च].

Let us trace @deva[कः] + @deva[च] step by step:

1. Underlying: @deva[कस्] + @deva[च]
2. @ref[8.2.66]: @deva[स्] → @deva[रु], giving @deva[कर्] (intermediate)
3. @ref[8.3.15]: before @deva[च] (voiceless), @deva[र्] → @deva[ः], giving @deva[कः]
4. @ref[8.3.34]: before palatal @deva[च], @deva[ः] → @deva[श्], giving @deva[कश्च]

And @deva[रामः] + @deva[हि] (from a typical sentence @deva[रामो हि धार्मिकः]):

1. Underlying: @deva[रामस्] + @deva[हि]
2. @ref[8.2.66]: @deva[स्] → @deva[रु], giving @deva[रामर्]
3. @ref[8.3.17]: @deva[अ] + @deva[र्] before voiced @deva[ह] → @deva[य्], then @deva[अय्] → @deva[ओ], giving @deva[रामो हि]

---

## concept - Summary Table

Here is a complete reference for visarga sandhi outcomes:

| Context                                | Rule              | Result                            | Example                           |
| -------------------------------------- | ----------------- | --------------------------------- | --------------------------------- |
| @deva[स्] at word-end                  | @ref[8.2.66]      | → @deva[रु] (intermediate)        | @deva[रामस्] → @deva[रामर्]       |
| @deva[र्] before voiceless / pause     | @ref[8.3.15]      | → @deva[ः]                        | @deva[रामः तिष्ठति]               |
| @deva[अ/आ] + @deva[र्] before voiced   | @ref[8.3.17]      | → @deva[ओ]                        | @deva[रामो गच्छति]                |
| @deva[इ/उ/ऋ] + @deva[र्] before voiced | (no special rule) | → @deva[र्] remains               | @deva[मुनिर्गच्छति]               |
| @deva[ः] before @deva[च/छ]             | @ref[8.3.34]      | → @deva[श्]                       | @deva[नरश्चरति]                   |
| @deva[ः] before @deva[ट/ठ]             | @ref[8.3.34]      | → @deva[ष्]                       | @deva[नरष्टीकते]                  |
| @deva[ः] before @deva[त/थ]             | @ref[8.3.34]      | → @deva[स्]                       | @deva[नमस्ते]                     |
| @deva[ः] before @deva[श/ष/स]           | @ref[8.3.36]      | → optionally stays or assimilates | @deva[नरः शेते] / @deva[नरश्शेते] |
| @deva[म्] before consonant             | @ref[8.3.23]      | → @deva[ं]                        | @deva[वनं गच्छति]                 |
| @deva[ं] before stop                   | @ref[8.4.58]      | → homorganic nasal (optional)     | @deva[सन्तोषः] / @deva[संतोषः]    |

---

## concept - What's Next?

You now understand the complete chain of visarga sandhi:

- Final @deva[स्] → @deva[रु] → @deva[ः], @deva[ओ], @deva[र्], or sibilant, depending on context
- Final @deva[म्] → anusvara → optionally homorganic nasal before stops
- The @deva[ओ]-change (@ref[8.3.17]) is the single most common sandhi you will see in texts
- Sibilant assimilation (@ref[8.3.34]) produces patterns like @deva[नमस्ते] and @deva[कश्चित्]

Next paths to explore:

- **Consonant Sandhi** (@deva[हल्सन्धिः]) — how stops voice, devoice, and assimilate at word junctions
- **Vowel Sandhi** (@deva[अच्सन्धिः]) — if you have not yet covered how vowels combine across boundaries
- **Browse the Ashtadhyayi** — see these rules in their original sūtra context with full commentary
