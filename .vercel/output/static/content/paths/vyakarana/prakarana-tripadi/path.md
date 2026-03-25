---
id: prakarana-tripadi
order: 65
title: "Prakaraṇa: The Tripādī"
titleSanskrit: त्रिपादीप्रकरणम्
label: त्रिपादी
track: grammar
category: advanced
description: Deep dive into the final three pādas of the Aṣṭādhyāyī — the special domain where rules operate "invisibly."
difficulty: advanced
estimatedTime: 2-3 hours
prerequisites:
  - introduction
  - prakarana-sandhi
  - prakarana-it-samjna
---

## concept - The Special Final Section

The Aṣṭādhyāyī has 8 chapters (@term[adhyāya]) with 4 sections (@term[pāda]) each — 32 @term[pāda]s total. But the last three sections (8.2, 8.3, 8.4) operate under special rules.

These 295 sūtras are called the @deva[त्रिपादी] — "the three pādas." They form a distinct domain where results are "invisible" to earlier rules. Understanding the tripādī is essential for advanced derivations.

---

## concept - Why the Tripādī Exists

Consider the derivation of @deva[रामस्] (nominative singular of @deva[राम]):

1. @deva[राम] + @deva[सु] → @deva[रामस्] (by @ref[6.1.68]: @deva[उकारोऽत्] drops the @deva[उ])

But wait — rule @ref[8.2.66] says word-final @deva[स्] becomes @deva[ः] (visarga). If that applied BEFORE @ref[6.1.68], we'd wrongly get *@deva[रामःउ] → *@deva[रामो].

The solution: tripādī rules apply AFTER everything else but are treated as "not yet done" when earlier rules check. This prevents circular interactions.

---

## 8.2.1 - @deva[पूर्वत्रासिद्धम्]

**Key Terms:** pūrvatra, asiddha

@deva[पूर्वत्रा असिद्धम्] — [What follows] is treated as not accomplished with respect to what precedes.

@sutra[8.2.1]

This is the governing rule of the tripādī. It declares that all rules from 8.2.1 onward are @term[asiddha] ("not accomplished") relative to rules 1.1.1–8.1.74.

**What this means:**
- Tripādī rules DO apply and produce changes
- But earlier rules behave AS IF those changes haven't happened yet
- When derivation order would create conflicts, the tripādī results are "invisible"

This is Pāṇini's solution to rule-ordering problems.

---

## concept - Rule Ordering in the Tripādī

Within the tripādī itself, the principle is:

@deva[पूर्वत्र असिद्धम्] — Each rule is @term[asiddha] to what PRECEDES it

So within 8.2–8.4:
- Rule 8.2.30 is visible to 8.2.31, but 8.2.31's result is invisible to 8.2.30
- This creates a strict left-to-right ordering within the tripādī

The result: derivations proceed through the tripādī sequentially, each rule seeing only the results of earlier tripādī rules.

---

## concept - Major Domains of the Tripādī

The tripādī covers several phonological areas:

| @term[pāda] | Primary Content | Rules |
|-------------|-----------------|-------|
| 8.2 | Final consonants, accent, @deva[न्]-deletion | 108 |
| 8.3 | Visarga, @deva[र्]//@deva[स्] changes, nasalization | 119 |
| 8.4 | @deva[ण]-replacement, consonant assimilation, @term[sandhi] | 68 |

---

## concept - Pāda 8.2: Word-Finals and Accent

8.2 handles what happens at word boundaries and to accents.

---

## 8.2.7 - @deva[नलोपः प्रातिपदिकान्तस्य]

**Key Terms:** nalopa, prātipadika

@deva[नलोपः प्रातिपदिकान्तस्य] — The @deva[न्] of a @term[prātipadika]-final [is deleted].

@sutra[8.2.7]

Stems ending in @deva[न्] lose it before consonants:

@deva[राजन्] + @deva[भ्याम्] → @deva[राजभ्याम्] (not *@deva[राज्न्भ्याम्])

The @deva[न्] deletes to avoid an impossible cluster.

---

## 8.2.23 - @deva[संयोगान्तस्य लोपः]

**Key Terms:** saṃyoga, anta, lopa

@deva[संयोगान्तस्य लोपः] — [Final consonant] deletion of a cluster-final [word].

@sutra[8.2.23]

When a word ends in a consonant cluster, the final consonant drops:

@deva[भवन्त्] → @deva[भवन्] (before pause)
@deva[विद्वान्स्] → @deva[विद्वान्]

This simplifies pronunciation at word boundaries.

---

## 8.2.30 - @deva[चोः कुः]

**Key Terms:** cu, ku

@deva[चोः कुः] — @pratyahara[cu] [becomes] @pratyahara[ku] [before stops/pause].

@sutra[8.2.30]

Palatals shift to gutturals at word end:

@deva[वाच्] → @deva[वाक्] (nominative: @deva[वाक्])
@deva[राज्] → @deva[राट्] (actually further to @deva[ट्] by another rule)

Palatal stops can't occur word-finally in Sanskrit.

---

## 8.2.31 - @deva[हो ढः]

**Key Terms:** ha, ḍha

@deva[हः ढः] — @deva[ह्] becomes @deva[ढ्] [in certain conditions].

@sutra[8.2.31]

@deva[लिह्] + @deva[ढ] → @deva[लीढ] (past participle "licked")

The @deva[ह्] assimilates to the following retroflex.

---

## concept - Pāda 8.3: Visarga and S-Changes

8.3 handles the famous @deva[विसर्ग] (ḥ) and @deva[र्]//@deva[स्] alternations.

---

## 8.3.4 - @deva[अनुनासिकात् परोऽनुस्वारः]

**Key Terms:** anunāsika, anusvāra

@deva[अनुनासिकात् परः अनुस्वारः] — @term[anusvāra] [appears] after a nasal [before consonants].

@sutra[8.3.4]

This inserts @deva[ं] after nasalized sounds:

@deva[संस्कृत] — the @deva[ं] appears as @term[anusvāra]

---

## 8.3.13 - @deva[ढो ढे लोपः]

**Key Terms:** ḍha, lopa

@deva[ढः ढे लोपः] — @deva[ढ्] is deleted before @deva[ढ].

@sutra[8.3.13]

When two @deva[ढ]'s meet, the first drops:

@deva[लीढ् + ध्वम्] → @deva[लीढ्ढ्वम्] → @deva[लीढ्वम्] (actually more complex)

---

## 8.3.15 - @deva[खरवसानयोर्विसर्जनीयः]

**Key Terms:** khar, avasāna, visarjanīya

@deva[खरवसानयोः विसर्जनीयः] — [Final @deva[स्]//@deva[र्] becomes] @term[visarga] before @pratyahara[khar] or at utterance-end.

@sutra[8.3.15]

This is the main visarga rule:

@deva[रामस्] + pause → @deva[रामः]
@deva[रामस्] + @deva[पश्यति] → @deva[रामः पश्यति]

The @deva[स्] becomes @deva[ः] before voiceless consonants or silence.

---

## 8.3.17 - @deva[भोभगोअघोअपूर्वस्य योऽशि]

**Key Terms:** bho, bhago, yo, aś

@deva[भोभगोअघोअपूर्वस्य यः अशि] — After @deva[भोः], @deva[भगोः], @deva[अघोः], or @deva[अ]-preceded [visarga], @deva[य्] [replaces visarga] before @pratyahara[aś].

@sutra[8.3.17]

@deva[भोः] + @deva[अत्र] → @deva[भोयत्र] (Vedic)

Visarga glides to @deva[य्] in certain environments.

---

## 8.3.34 - @deva[विसर्जनीयस्य सः]

**Key Terms:** visarjanīya, sa

@deva[विसर्जनीयस्य सः] — @term[visarga] becomes @deva[स्] [before @deva[त्]//@deva[थ्]].

@sutra[8.3.34]

@deva[रामः] + @deva[तत्र] → @deva[रामस्तत्र]

The visarga "returns" to @deva[स्] before dentals.

---

## concept - Pāda 8.4: Retroflex and Final Changes

8.4 handles the famous @deva[ण]-replacement (@term[ṇatva]) and final consonant changes.

---

## 8.4.1 - @deva[रषाभ्यां नो णः समानपदे]

**Key Terms:** ra, ṣa, na, ṇa, samānapada

@deva[रषाभ्यां नः णः समानपदे] — @deva[न्] becomes @deva[ण्] after @deva[र्] or @deva[ष्] in the same word.

@sutra[8.4.1]

This is the core @term[ṇatva] rule:

@deva[रामायण] — the @deva[ण] results from @deva[र्]...@deva[न्] in the same word
@deva[कृष्ण] — the @deva[ण] results from @deva[ष्]...@deva[न्]

Retroflexion spreads rightward from @deva[र्]//@deva[ष्] to @deva[न्].

---

## 8.4.2 - @deva[अट्कुप्वाङ्नुम्व्यवायेऽपि]

**Key Terms:** aṭ, ku, pu, vyavāya

@deva[अट्कुप्वाङ्नुम्व्यवायेऽपि] — Even with @pratyahara[aṭ], @pratyahara[ku], @pratyahara[pu], @deva[आङ्], or @deva[नुम्] intervening.

@sutra[8.4.2]

The retroflexion jumps over certain sounds:

@deva[ब्राह्मण] — @deva[र्]...(@deva[आ], @deva[ह्], @deva[म्])...@deva[न्] → @deva[ण्]

Vowels, gutturals, labials, and certain elements don't block @term[ṇatva].

---

## 8.4.40 - @deva[स्तोः श्चुना श्चुः]

**Key Terms:** stu, ścu

@deva[स्तोः श्चुना श्चुः] — @deva[स्]//@deva[त्]-class becomes @deva[श्]//@deva[च्]-class before @deva[श्]//@deva[च्]-class.

@sutra[8.4.40]

Dental→palatal assimilation:

@deva[सत्] + @deva[चित्] → @deva[सच्चित्]
@deva[तस्] + @deva[शेते] → @deva[तश्शेते]

Dentals assimilate to following palatals.

---

## 8.4.41 - @deva[ष्टुना ष्टुः]

**Key Terms:** ṣṭu

@deva[ष्टुना ष्टुः] — [@deva[स्]//@deva[त्]-class becomes] @deva[ष्]//@deva[ट्]-class before @deva[ष्]//@deva[ट्]-class.

@sutra[8.4.41]

Dental→retroflex assimilation:

@deva[तत्] + @deva[टीका] → @deva[तट्टीका]
@deva[रामस्] + @deva[षष्ठ्याम्] → @deva[रामष्षष्ठ्याम्]

Dentals assimilate to following retroflexes.

---

## 8.4.46 - @deva[अचो रहाभ्यां द्वे]

**Key Terms:** ac, ra, ha, dve

@deva[अचः रहाभ्यां द्वे] — After a vowel, @deva[र्] and @deva[ह्] [cause] doubling [of following stops].

@sutra[8.4.46]

@deva[अर्क] → @deva[अर्क्क] (optional gemination after @deva[र्])

This explains some consonant clusters in Sanskrit.

---

## 8.4.53 - @deva[झलां जशोऽन्ते]

**Key Terms:** jhal, jaś, anta

@deva[झलां जशः अन्ते] — @pratyahara[jhal] consonants become @pratyahara[jaś] at word-end.

@sutra[8.4.53]

Final devoicing REVERSAL — obstruents become voiced at word-end:

@deva[वाक्] → @deva[वाग्] (before voiced consonant)
@deva[सम्राट्] → @deva[सम्राड्] (before voiced)

But @ref[8.4.56] then devoices them again before voiceless consonants.

---

## 8.4.56 - @deva[वाऽवसाने]

**Key Terms:** avasāna

@deva[वा अवसाने] — Optionally at utterance-end.

@sutra[8.4.56]

Final stops may be voiced or voiceless at pause:

@deva[वाक्] or @deva[वाग्] (both acceptable before silence)

---

## concept - The Asiddha Principle in Action

Consider @deva[अग्निम्] + @deva[ईडे]:

1. @ref[6.1.77] (@deva[इको यणचि]) would make @deva[अग्न्य् + ईडे] → *@deva[अग्न्यीडे]
2. But @ref[8.2.7] would delete the @deva[न्]: @deva[अग्न्यीडे] → *@deva[अग्यीडे]

Problem: if @ref[8.2.7]'s deletion were visible to @ref[6.1.77], we'd get the wrong form.

Solution: By @ref[8.2.1], the @deva[न्]-deletion is @term[asiddha] to @ref[6.1.77]. The sandhi rule sees @deva[अग्निम्] + @deva[ईडे] and correctly produces @deva[अग्निमीडे] (म् + ई = मी).

---

## concept - Summary: The Tripādī Architecture

| Feature | Effect |
|---------|--------|
| @term[asiddha] status | Results invisible to earlier rules |
| Left-to-right application | Within tripādī, later rules see earlier results |
| Phonological focus | Final consonants, visarga, assimilation, @term[ṇatva] |
| 295 rules | 8.2 (108) + 8.3 (119) + 8.4 (68) |

The tripādī is Pāṇini's elegant solution to rule-ordering paradoxes. By declaring this section "not accomplished" relative to the rest, he avoids circular dependencies while ensuring correct surface forms.

---

## concept - See It in Action

Watch tripādī rules apply:

**@deva[रामः]** — Visarga formation:

@prakriya[rAma + su]{highlight=8.3.15}

**@deva[रामेण]** — @term[ṇatva] after @deva[र्]:

@prakriya[rAma + TA]{highlight=8.4.1}

**@deva[वाक्]** — Final consonant changes:

@prakriya[vAc + su]{highlight=8.2.30}

Every Sanskrit word passes through the tripādī's phonological gauntlet.
