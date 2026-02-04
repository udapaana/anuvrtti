---
id: sandhi-consonant
order: 29
title: Consonant Sandhi
titleSanskrit: हल्सन्धिः
label: व्यञ्जनसन्धिः
track: grammar
category: sandhi
description: Master consonant junction rules. How stops, nasals, and other consonants interact at boundaries.
difficulty: intermediate
estimatedTime: 3 hours
prerequisites:
  - sandhi-vowel
---

## concept - How Consonants Interact at Boundaries

When consonants meet at word boundaries or morpheme junctions, Sanskrit demands harmony. Unlike vowel sandhi, where two sounds merge into one, consonant sandhi is about **assimilation** -- a consonant adjusts its voicing, aspiration, or place of articulation to match its neighbor.

The driving principle is simple: **the tongue can't jump between incompatible positions**. A voiceless sound followed by a voiced sound is awkward to pronounce. A dental followed by a retroflex is clumsy. Sanskrit resolves these clashes systematically.

There are three main dimensions of consonant change:

| Dimension | What changes | Example |
| --------- | ------------ | ------- |
| **Voicing** | Voiced vs. voiceless | @deva[वाच्] → @deva[वाग्] (voiceless → voiced at word-end) |
| **Place** | Dental vs. palatal vs. retroflex | @deva[तत्] + @deva[शिवः] = @deva[तच्छिवः] (dental → palatal) |
| **Manner** | Stop vs. nasal | @deva[वाक्] + @deva[नयति] = @deva[वाङ्नयति] (stop → nasal, optional) |

To follow these rules, you need to know Panini's sound-groups:

- @deva[झल्] = all non-nasal stops and @deva[श ष स ह] (the "obstruents")
- @deva[जश्] = the five voiced unaspirated stops: @deva[ज ब ग ड द]
- @deva[चर्] = the five voiceless unaspirated stops: @deva[च ट त क प]
- @deva[खर्] = all voiceless consonants (stops + sibilants)
- @deva[झश्] = all voiced non-nasal consonants

These pratyaharas appear constantly in the rules ahead. Let's begin with what happens to consonants at the end of a word.

---

## 8.2.39 - Word-Final Voicing

**Key Terms:** @deva[झल्], @deva[जश्], @deva[अन्त]

@deva[झलां जशोऽन्ते] -- For @deva[झल्] consonants at word-end, the corresponding @deva[जश्] letter substitutes.

This is the fundamental word-final rule. When a word ends in any obstruent (@deva[झल्]), that consonant becomes voiced and unaspirated. The five @deva[जश्] letters are the "resting position" for word-final stops -- they neutralize both voicelessness and aspiration.

The correspondence is by place of articulation. Each column of the stop-grid collapses to its voiced unaspirate:

| Original (any of these) | Becomes | Place |
| ----------------------- | ------- | ----- |
| @deva[क ख ग घ] | @deva[ग्] | velar |
| @deva[च छ ज झ] | @deva[ज्] | palatal |
| @deva[ट ठ ड ढ] | @deva[ड्] | retroflex |
| @deva[त थ द ध] | @deva[द्] | dental |
| @deva[प फ ब भ] | @deva[ब्] | labial |

**Examples:**

| Stem | Word-final form | Source |
| ---- | --------------- | ------ |
| @deva[वाच्] (speech) | @deva[वाग्] | @deva[च्] → @deva[ग्] |
| @deva[अग्निचित्] (fire-builder) | @deva[अग्निचिद्] | @deva[त्] → @deva[द्] |
| @deva[सम्राज्] (emperor) | @deva[सम्राट्] → @deva[सम्राड्] | @deva[ट्] → @deva[ड्] |
| @deva[ककुभ्] (direction) | @deva[ककुब्] | @deva[भ्] → @deva[ब्] |

In the Bhagavadgita, @deva[सत्] + pause = @deva[सद्] -- you hear the voiced form at the end of a verse-quarter: @deva[ॐ तत्सद्].

Note that this rule applies at absolute word-end (before pause). When another sound follows, rules @ref[8.4.53] and @ref[8.4.55] take over based on whether the following sound is voiced or voiceless.

---

## 8.2.30 - Palatals Revert to Velars

**Key Terms:** @deva[चु], @deva[कु], @deva[पद]

@deva[चोः कुः] -- A velar (@deva[कु]) substitutes for a palatal (@deva[चु]) before @deva[झल्] consonants or at word-end.

Palatal stops (@deva[च छ ज झ ञ]) are historically derived from velars. When a palatal finds itself at word-end or before another obstruent, it reverts to its velar origin. This rule applies before @ref[8.2.39], so the palatal first becomes velar, then that velar undergoes word-final voicing.

The mapping:

| Palatal | Becomes | Then at word-end |
| ------- | ------- | ---------------- |
| @deva[च्] | @deva[क्] | @deva[ग्] (by @ref[8.2.39]) |
| @deva[छ्] | @deva[ख्] | @deva[ग्] |
| @deva[ज्] | @deva[ग्] | @deva[ग्] |
| @deva[झ्] | @deva[घ्] | @deva[ग्] |
| @deva[ञ्] | @deva[ङ्] | @deva[ङ्] |

**Examples:**

| Underlying form | After this rule | Context |
| --------------- | --------------- | ------- |
| @deva[वाच्] | @deva[वाक्] → @deva[वाग्] | "speech" at word-end |
| @deva[त्यज्] | @deva[त्यक्] → @deva[त्यग्] | "abandoner" at word-end |
| @deva[पच्] + @deva[ता] | @deva[पक्ता] | "cook" + agent suffix |
| @deva[यज्] + @deva[ति] | @deva[यक्ति] → @deva[इष्टि] | (further changes apply) |

Consider the word @deva[वाच्] "speech." At word-end: @deva[वाच्] → @deva[वाक्] (by this rule) → @deva[वाग्] (by @ref[8.2.39]). Before a voiceless consonant: @deva[वाक्] + @deva[पतिः] = @deva[वाक्पतिः] "lord of speech." Before a voiced consonant: @deva[वाक्] + @deva[दानम्] = @deva[वाग्दानम्] (the @deva[क्] voices by @ref[8.4.53]).

---

## 8.4.53 - Voicing Before Voiced Sounds

**Key Terms:** @deva[झल्], @deva[जश्], @deva[झश्]

@deva[झलां जश् झशि] -- For @deva[झल्] letters, @deva[जश्] substitutes when a @deva[झश्] letter follows.

When an obstruent meets a voiced consonant (other than a nasal), the first consonant voices to match. The substitute is from the @deva[जश्] group -- voiced, unaspirated -- matching the place of the original.

This is voicing assimilation: the larynx "turns on" early, anticipating the voiced sound that follows. It applies both within compounds and across word boundaries in continuous speech.

**Examples:**

| Before | + After | = Result | Change |
| ------ | ------- | -------- | ------ |
| @deva[वाक्] | @deva[दानम्] | @deva[वाग्दानम्] | @deva[क्] → @deva[ग्] before @deva[द्] |
| @deva[तत्] | @deva[ददाति] | @deva[तद्ददाति] | @deva[त्] → @deva[द्] before @deva[द्] |
| @deva[चित्] | @deva[भानु] | @deva[चिद्भानु] | @deva[त्] → @deva[द्] before @deva[भ्] |
| @deva[सत्] | @deva[गुरुः] | @deva[सद्गुरुः] | @deva[त्] → @deva[द्] before @deva[ग्] |

The compound @deva[सद्गुरुः] "true teacher" from the Guru Stotram shows this clearly: @deva[सत्] + @deva[गुरुः] → @deva[सद्गुरुः]. The voiceless @deva[त्] becomes @deva[द्] before the voiced @deva[ग्].

This rule and the next (@ref[8.4.55]) are complementary: this one voices before voiced, that one devoices before voiceless. Together they enforce complete voicing harmony at consonant junctions.

---

## 8.4.55 - Devoicing Before Voiceless Sounds

**Key Terms:** @deva[झल्], @deva[चर्], @deva[खर्]

@deva[खरि च] -- For @deva[झल्] consonants, @deva[चर्] substitutes when @deva[खर्] follows.

The mirror of the previous rule. When an obstruent precedes a voiceless consonant, it becomes voiceless and unaspirated. The @deva[चर्] group (@deva[च ट त क प]) provides the voiceless unaspirate at each place.

This devoicing assimilation is essential for compound formation and verb derivation. Aspiration is also stripped -- a @deva[घ्] before @deva[त्] becomes @deva[क्], not @deva[ख्].

**Examples:**

| Before | + After | = Result | Change |
| ------ | ------- | -------- | ------ |
| @deva[लभ्] | @deva[ता] | @deva[लब्धा] → @deva[लप्ता]... | complex: see below |
| @deva[भेद्] | @deva[ता] | @deva[भेत्ता] | @deva[द्] stays @deva[त्] before @deva[त्] |
| @deva[युध्] | @deva[ति] | ... @deva[युत्] ... | @deva[ध्] → @deva[त्] before @deva[ति] |
| @deva[दुघ्] | @deva[ति] | @deva[दुक्ति] → @deva[दोग्धि] | (with further rules) |

A practical example: @deva[षड्] + @deva[पदम्] = @deva[षट्पदम्] "six-footed (bee)." The voiced @deva[ड्] of @deva[षष्] becomes @deva[ट्] before the voiceless @deva[प्], giving the familiar compound @deva[षट्पद].

**The voicing harmony pair:**

| Following sound | Rule | Substitute |
| --------------- | ---- | ---------- |
| Voiced (@deva[झश्]) | @ref[8.4.53] | Voice it (@deva[जश्]) |
| Voiceless (@deva[खर्]) | @ref[8.4.55] | Devoice it (@deva[चर्]) |

---

## 8.4.40 - Place Assimilation: Dental to Palatal

**Key Terms:** @deva[स्तु], @deva[श्चु]

@deva[स्तोः श्चुना श्चुः] -- When a dental (@deva[स्तु] = @deva[स त थ द ध न]) comes in contact with a palatal (@deva[श्चु] = @deva[श च छ ज झ ञ]), the dental becomes the corresponding palatal.

This is place assimilation. The tongue position shifts from dental (teeth) to palatal (hard palate) to match the neighboring sound. The mapping is systematic:

| Dental | Becomes (palatal) |
| ------ | ----------------- |
| @deva[स्] | @deva[श्] |
| @deva[त्] | @deva[च्] |
| @deva[थ्] | @deva[छ्] |
| @deva[द्] | @deva[ज्] |
| @deva[ध्] | @deva[झ्] |
| @deva[न्] | @deva[ञ्] |

The rule works in both directions -- a dental before a palatal changes, and a palatal before a dental also causes the dental to change. The palatal "wins."

**Examples:**

| Before | + After | = Result | What changed |
| ------ | ------- | -------- | ------------ |
| @deva[सत्] | @deva[चित्] | @deva[सच्चित्] | @deva[त्] → @deva[च्] before @deva[च्] |
| @deva[तत्] | @deva[जयम्] | @deva[तज्जयम्] | @deva[त्] → @deva[ज्] before @deva[ज्] |
| @deva[तत्] | @deva[शिवम्] | @deva[तच्छिवम्] | @deva[त्] → @deva[च्], @deva[श्] doubles |
| @deva[रामस्] | @deva[च] | @deva[रामश्च] | @deva[स्] → @deva[श्] before @deva[च्] |

The famous compound @deva[सच्चिदानन्दः] "being-consciousness-bliss" shows this beautifully: @deva[सत्] + @deva[चित्] + @deva[आनन्दः] → @deva[सच्चिदानन्दः]. The @deva[त्] of @deva[सत्] becomes @deva[च्] before the @deva[च्] of @deva[चित्].

Similarly, the common phrase @deva[रामश्च] "and Rama" comes from @deva[रामस्] + @deva[च] → the @deva[स्] becomes @deva[श्] before the palatal @deva[च्].

---

## 8.4.41 - Place Assimilation: Dental to Retroflex

**Key Terms:** @deva[ष्टु]

@deva[ष्टुना ष्टुः] -- When a dental (@deva[स्तु]) comes in contact with a retroflex (@deva[ष्टु] = @deva[ष ट ठ ड ढ ण]), the dental becomes the corresponding retroflex.

The same principle as the previous rule, but the target is retroflex instead of palatal. The tongue curls back from the dental position to the retroflex position:

| Dental | Becomes (retroflex) |
| ------ | ------------------- |
| @deva[स्] | @deva[ष्] |
| @deva[त्] | @deva[ट्] |
| @deva[थ्] | @deva[ठ्] |
| @deva[द्] | @deva[ड्] |
| @deva[ध्] | @deva[ढ्] |
| @deva[न्] | @deva[ण्] |

**Examples:**

| Before | + After | = Result | What changed |
| ------ | ------- | -------- | ------------ |
| @deva[तत्] | @deva[टीका] | @deva[तट्टीका] | @deva[त्] → @deva[ट्] before @deva[ट्] |
| @deva[रामस्] | @deva[षष्ठः] | @deva[रामष्षष्ठः] | @deva[स्] → @deva[ष्] before @deva[ष्] |
| @deva[उत्] | @deva[डयनम्] | @deva[उड्डयनम्] | @deva[त्] → @deva[ड्] before @deva[ड्] |

The word @deva[उड्डयनम्] "flying up" comes from the preverb @deva[उत्] + @deva[डयनम्] (from @deva[डी] "to fly"). The dental @deva[त्] assimilates to retroflex @deva[ड्] before the retroflex @deva[ड्] of the root.

**Place assimilation summary:**

| When dental meets... | It becomes... | Rule |
| -------------------- | ------------- | ---- |
| Palatal (@deva[श्चु]) | Palatal | @ref[8.4.40] |
| Retroflex (@deva[ष्टु]) | Retroflex | @ref[8.4.41] |

The dental always yields to its neighbor. Palatals and retroflexes are articulatorily "stronger" positions that pull the dental toward them.

---

## 8.4.45 - Optional Nasalization

**Key Terms:** @deva[यर्], @deva[अनुनासिक], @deva[वा]

@deva[यरोऽनुनासिकेऽनुनासिको वा] -- For a @deva[यर्] letter (stops and semivowels) at word-end, there is optionally a nasal substitute when a nasal follows.

When a word-final stop meets an initial nasal, the stop may optionally become the nasal of its own class. This is optional (@deva[वा]) -- both forms are correct.

The nasal substitute matches the place of the original stop:

| Stop class | Nasal substitute |
| ---------- | ---------------- |
| @deva[क्]-class (velar) | @deva[ङ्] |
| @deva[च्]-class (palatal) | @deva[ञ्] |
| @deva[ट्]-class (retroflex) | @deva[ण्] |
| @deva[त्]-class (dental) | @deva[न्] |
| @deva[प्]-class (labial) | @deva[म्] |

**Examples:**

| Before | + After | Without nasalization | With nasalization |
| ------ | ------- | -------------------- | ----------------- |
| @deva[वाक्] | @deva[नयति] | @deva[वाग्नयति] | @deva[वाङ्नयति] |
| @deva[तत्] | @deva[मित्रम्] | @deva[तद्मित्रम्] | @deva[तन्मित्रम्] |
| @deva[एतत्] | @deva[नाम] | @deva[एतद्नाम] | @deva[एतन्नाम] |
| @deva[षट्] | @deva[मासाः] | @deva[षड्मासाः] | @deva[षण्मासाः] |

In practice, the nasalized form is often preferred. The compound @deva[तन्मात्रम्] "that alone" (from @deva[तत्] + @deva[मात्रम्]) almost always appears with the nasal @deva[न्] rather than @deva[द्]. Similarly, @deva[षण्मासाः] "six months" (from @deva[षट्] + @deva[मासाः]) is more common than @deva[षड्मासाः].

In the Upanishads you find @deva[तन्मे मनः शिवसङ्कल्पमस्तु] "may that mind of mine be of auspicious resolve" -- where @deva[तत्] + @deva[मे] → @deva[तन्मे] by this rule.

---

## 8.4.2 - Retroflexion of न्

**Key Terms:** @deva[अट्], @deva[ण], @deva[न]

@deva[अट्कुप्वाङ्नुम्व्यवायेऽपि] -- @deva[ण्] substitutes for @deva[न्] when @deva[र्] or @deva[ष्] precedes, even with intervening @deva[अट्] (vowels, @deva[ह्], @deva[य्], @deva[व्]), gutturals (@deva[कु]), labials (@deva[पु]), @deva[आङ्], or @deva[नुम्].

This is the famous @deva[णत्व] rule. When @deva[र्] or @deva[ष्] appears earlier in a word, a following @deva[न्] retroflexes to @deva[ण्] -- even if certain "transparent" sounds intervene. The retroflex quality of @deva[र्] or @deva[ष्] reaches forward through vowels, semivowels, and certain consonants to "color" the @deva[न्].

Sounds that **block** retroflexion (i.e., sounds NOT in the transparent list): dentals (@deva[त्]-class), palatals (@deva[च्]-class), retroflexes (@deva[ट्]-class), and @deva[ल्]. If any of these intervene between @deva[र्]/ष्] and @deva[न्], retroflexion does not occur.

**Examples:**

| Word | Analysis | Why @deva[ण्] |
| ---- | -------- | ------------- |
| @deva[ब्राह्मणः] | @deva[र्] ... @deva[अ] ... @deva[म्] ... @deva[अ] ... @deva[न] → @deva[ण] | @deva[र्] triggers, vowels and @deva[म्] are transparent |
| @deva[करणम्] | @deva[र्] ... @deva[अ] ... @deva[न] → @deva[ण] | @deva[र्] triggers, vowel is transparent |
| @deva[नारायणः] | @deva[र्] ... @deva[आ] ... @deva[य्] ... @deva[अ] ... @deva[न] → @deva[ण] | @deva[य्] is transparent |
| @deva[रामानुजः] | No @deva[ण] | No @deva[न्] in the word |
| @deva[कर्तनम्] | No @deva[ण] | @deva[त्] intervenes (blocks retroflexion) |

This rule explains why so many Sanskrit words have @deva[ण] instead of @deva[न]: @deva[गुण], @deva[पूर्ण], @deva[कारण], @deva[भूषण], @deva[रामायण]. In every case, trace back and you will find an @deva[र्] or @deva[ष्] earlier in the word with only transparent sounds between.

---

## 8.3.23 - Anusvara for Final म्

**Key Terms:** @deva[म], @deva[अनुस्वार]

@deva[मोऽनुस्वारः] -- @deva[अनुस्वार] (@deva[ं]) substitutes for @deva[म्] at word-end when a consonant follows.

This is the simplest consonant sandhi rule and one of the most frequently applied. When @deva[म्] ends a word and the next word begins with any consonant, the @deva[म्] becomes @deva[ं] (anusvara).

Before a vowel, @deva[म्] remains @deva[म्] -- no change occurs. This rule is included here (it also appears in the Visarga Sandhi path) because it interacts with the other consonant sandhi rules and is essential for reading any Sanskrit text.

**Examples:**

| Before | + After | = Result |
| ------ | ------- | -------- |
| @deva[फलम्] | @deva[करोति] | @deva[फलं करोति] |
| @deva[वनम्] | @deva[गच्छति] | @deva[वनं गच्छति] |
| @deva[ज्ञानम्] | @deva[ददाति] | @deva[ज्ञानं ददाति] |
| @deva[रामम्] | @deva[पश्यति] | @deva[रामं पश्यति] |
| @deva[फलम्] | @deva[अस्ति] | @deva[फलमस्ति] (no change -- vowel follows) |

In the Bhagavadgita's opening, @deva[धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः] -- if the prior phrase ended in @deva[म्], it would become @deva[ं] before @deva[ध्].

The anusvara is often further assimilated to the class-nasal of the following stop by @ref[8.4.58]: @deva[सं] + @deva[गमः] → @deva[सङ्गमः]. But @deva[अनुस्वार] remains as @deva[ं] before sibilants and @deva[ह्]: @deva[संस्कृतम्], @deva[संहिता].

---

## concept - Putting It Together

Let's trace through a real compound that involves multiple consonant sandhi rules working in sequence.

**Example: @deva[सच्चिदानन्दः]** (being-consciousness-bliss)

This is @deva[सत्] + @deva[चित्] + @deva[आनन्दः].

Step 1: @deva[सत्] + @deva[चित्]
- The @deva[त्] of @deva[सत्] meets the @deva[च्] of @deva[चित्]
- By @ref[8.4.40], dental @deva[त्] → palatal @deva[च्] before palatal @deva[च्]
- Result: @deva[सच्चित्]

Step 2: @deva[सच्चित्] + @deva[आनन्दः]
- The @deva[त्] of @deva[चित्] meets the vowel @deva[आ]
- No consonant sandhi applies (vowel follows)
- Vowel sandhi: @deva[इ] + @deva[आ] = @deva[या] (by @ref[6.1.77])... but actually @deva[त्] stays and the vowels combine
- Result: @deva[सच्चिदानन्दः] (the @deva[त्] voices to @deva[द्] before vowel by @ref[8.2.39] and word-internal rules)

**Example: @deva[तच्छ्रुत्वा]** (having heard that)

This is @deva[तत्] + @deva[श्रुत्वा].

Step 1: @deva[तत्] + @deva[श्रुत्वा]
- The @deva[त्] meets @deva[श्]
- By @ref[8.4.40], dental @deva[त्] → palatal @deva[च्] before palatal @deva[श्]
- The @deva[श्] also becomes @deva[छ्] (palatalization doubles)
- Result: @deva[तच्छ्रुत्वा]

This form appears frequently in the epics: @deva[तच्छ्रुत्वा वचनं तस्य] "having heard that speech of his."

**Example: @deva[षण्मासाः]** (six months)

This is @deva[षष्] + @deva[मासाः].

Step 1: @deva[षष्] at word-end
- By @ref[8.2.39], @deva[ष्] → @deva[ट्] (retroflex class final)
- Result: @deva[षट्]

Step 2: @deva[षट्] + @deva[मासाः]
- @deva[ट्] before nasal @deva[म्]
- By @ref[8.4.45] (optional nasalization), @deva[ट्] → @deva[ण्]
- Result: @deva[षण्मासाः]

These examples show how multiple rules chain together. The key is to apply them in the order Panini intends -- generally, the tripadi rules (Book 8, Chapter 2 onward) apply in reverse order of statement, but the practical effect is a consistent system of assimilation.

---

## concept - Summary

Consonant sandhi in Sanskrit is governed by three types of assimilation:

| Type | Rule | What happens |
| ---- | ---- | ------------ |
| **Word-final neutralization** | @ref[8.2.39] | All obstruents become voiced unaspirate (@deva[जश्]) at word-end |
| **Palatal → velar** | @ref[8.2.30] | Palatals revert to velars before @deva[झल्] or at word-end |
| **Voicing assimilation** | @ref[8.4.53] | Voice before voiced |
| **Devoicing assimilation** | @ref[8.4.55] | Devoice before voiceless |
| **Place assimilation (palatal)** | @ref[8.4.40] | Dentals become palatals before palatals |
| **Place assimilation (retroflex)** | @ref[8.4.41] | Dentals become retroflexes before retroflexes |
| **Optional nasalization** | @ref[8.4.45] | Stop optionally becomes class-nasal before nasal |
| **@deva[ण]-retroflexion** | @ref[8.4.2] | @deva[न्] → @deva[ण्] after @deva[र्] or @deva[ष्] |
| **Anusvara** | @ref[8.3.23] | @deva[म्] → @deva[ं] before consonants |

The underlying principle is always the same: **make adjacent consonants compatible**. Voicing, place, and manner all harmonize at boundaries.

When reading Sanskrit, apply these rules mentally to "undo" sandhi and recover the original words. When composing, let the rules guide you to the natural pronunciation.

---

## concept - What's Next?

You've now covered all three domains of sandhi:

1. **Vowel Sandhi** (@deva[अच्सन्धिः]) -- how vowels merge
2. **Visarga Sandhi** (@deva[विसर्गसन्धिः]) -- how final @deva[स्] and @deva[र्] transform
3. **Consonant Sandhi** (@deva[हल्सन्धिः]) -- how stops, nasals, and sibilants assimilate

With these three paths complete, you can read and write Sanskrit with confidence at word boundaries. Recommended next steps:

- **Compound Formation** (@deva[समासः]) -- sandhi rules apply constantly within compounds; now you'll understand why @deva[सत्] + @deva[चित्] = @deva[सच्चित्] in a tatpurusa compound
- **Consonant-Stem Nouns** (@deva[हलन्तसुबन्तम्]) -- nouns ending in stops and nasals, where these sandhi rules apply before every case ending
- **Verb Forms** -- internal sandhi within verb derivations uses many of these same rules
