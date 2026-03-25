---
id: dhatu-ganas
order: 5
title: दशगणाः — The Ten Verb Classes
titleSanskrit: दशगणाः
label: गणाः
track: grammar
category: tinganta
description: Learn how the 10 @term[dhātu] classes (@term[gaṇa]) affect verb conjugation. Each @term[gaṇa] has its own @term[vikaraṇa].
difficulty: intermediate
estimatedTime: 3-4 hours
prerequisites:
  - tinganta-lat
---

## concept - Why Ten Classes?

In the @deva[लट्] path, you learned that the @term[pratyaya] @deva[शप्] (= @deva[अ]) goes between @term[dhātu] and ending: @deva[भू] + @deva[अ] + @deva[ति] = @deva[भवति]. This works for Class 1 @term[dhātu]. But Sanskrit has **ten classes**, and each class uses a different @term[pratyaya] in that slot.

This intermediate @term[pratyaya] is called the @term[vikaraṇa] (class marker). It's the single feature that distinguishes the conjugation classes. @deva[भू] takes @deva[शप्] (= @deva[अ]), but @deva[तुद्] takes @deva[श] (= @deva[अ] with accent difference), @deva[तन्] takes @deva[उ], and @deva[क्री] takes @deva[श्ना] (= @deva[ना]).

Pāṇini groups all ~2000 roots in the @deva[धातुपाठ] (root catalog) into ten lists. The first root of each list names the class: @deva[भू] starts Class 1 → @deva[भ्वादि], @deva[अद्] starts Class 2 → @deva[अदादि], etc.

---

## concept - The Ten Classes at a Glance

| Class | @deva[गण]         | @deva[विकरण]         | Realized as          | Example       | Result          |
| ----- | ----------------- | -------------------- | -------------------- | ------------- | --------------- |
| 1     | @deva[भ्वादि]     | @deva[शप्]           | @deva[अ]             | @deva[भू] →   | @deva[भवति]     |
| 2     | @deva[अदादि]      | (none — @deva[लुक्]) | —                    | @deva[अद्] →  | @deva[अत्ति]    |
| 3     | @deva[जुहोत्यादि] | (none — @deva[श्लु]) | reduplication        | @deva[हु] →   | @deva[जुहोति]   |
| 4     | @deva[दिवादि]     | @deva[श्यन्]         | @deva[य]             | @deva[दिव्] → | @deva[दीव्यति]  |
| 5     | @deva[स्वादि]     | @deva[श्नु]          | @deva[नु]//@deva[नो] | @deva[सु] →   | @deva[सुनोति]   |
| 6     | @deva[तुदादि]     | @deva[श]             | @deva[अ]             | @deva[तुद्] → | @deva[तुदति]    |
| 7     | @deva[रुधादि]     | @deva[श्नम्]         | @deva[न] (infix)     | @deva[रुध्] → | @deva[रुणद्धि]  |
| 8     | @deva[तनादि]      | @deva[उ]             | @deva[ओ]//@deva[उ]   | @deva[तन्] →  | @deva[तनोति]    |
| 9     | @deva[क्र्यादि]   | @deva[श्ना]          | @deva[ना]//@deva[नी] | @deva[क्री] → | @deva[क्रीणाति] |
| 10    | @deva[चुरादि]     | @deva[णिच्]          | @deva[अय]            | @deva[चुर्] → | @deva[चोरयति]   |

Two important patterns:

- Classes 1, 4, 6, 10 add a **vowel** (@deva[अ] or @deva[य]) — these are the "thematic" classes
- Classes 2, 3, 5, 7, 8, 9 either add nothing, add a consonant cluster, or infix — these are the "athematic" classes

---

## @ref[1.3.1] - भूवादयो धातवः

**Key Terms:** @deva[भू], @deva[धातु], @deva[गण]

@deva[भूवादयो धातवः] — Words beginning with @deva[भू] that denote action are called @deva[धातु] (verbal roots).

@sutra[1.3.1]

This rule establishes the category. The @deva[धातुपाठ] — Pāṇini's root catalog — lists approximately 2000 roots organized into ten groups. Each root's class membership is fixed: you look up a root in the @deva[धातुपाठ], find which @deva[गण] it belongs to, and that tells you which @deva[विकरण] to use.

---

## @ref[3.1.68] - कर्तरि शप् — Class 1 (भ्वादि)

**Key Terms:** @deva[शप्], @deva[विकरण], @deva[भ्वादि]

@deva[कर्तरि शप्] — The affix @deva[शप्] comes after a root when a @deva[सार्वधातुक] affix follows and the agent is expressed.

@sutra[3.1.68]

@deva[शप्] is the **default** @deva[विकरण]. It applies to all roots unless overridden by a more specific rule. After removing markers (@deva[श्] and @deva[प्] are @deva[इत्]), the affix is just @deva[अ].

This @deva[अ] triggers @deva[गुण] of the root vowel (@ref[7.3.84]):

- @deva[भू] + @deva[अ] + @deva[ति] → @deva[भो] + @deva[अ] + @deva[ति] → @deva[भवति] "he becomes"
- @deva[नी] + @deva[अ] + @deva[ति] → @deva[ने] + @deva[अ] + @deva[ति] → @deva[नयति] "he leads"
- @deva[पच्] + @deva[अ] + @deva[ति] → @deva[पचति] "he cooks" (no vowel change — @deva[अ] is already guṇa)

@prakriya[bhU + laT + tip]

---

## @ref[2.4.72] - अदिप्रभृतिभ्यः शपः — Class 2 (अदादि)

**Key Terms:** @deva[अदादि], @deva[शप्], @deva[लुक्]

@deva[अदिप्रभृतिभ्यः शपः] — After @deva[अद्] "to eat" and the remaining Class 2 roots, @deva[शप्] undergoes @deva[लुक्] (deletion).

@sutra[2.4.72]

No @deva[विकरण] at all — the root connects directly to the ending. This makes Class 2 forms look very different because the root consonant meets the ending consonant directly:

- @deva[अद्] + @deva[ति] → @deva[अत्ति] "he eats" (the @deva[द्] + @deva[ति] undergoes consonant sandhi)
- @deva[हन्] + @deva[ति] → @deva[हन्ति] "he kills"
- @deva[द्विष्] + @deva[ति] → @deva[द्वेष्टि] "he hates"
- @deva[अस्] + @deva[ति] → @deva[अस्ति] "he is"

Class 2 includes some of the most common verbs in Sanskrit: @deva[अस्] "to be," @deva[हन्] "to kill," @deva[शीङ्] "to lie down."

---

## @ref[2.4.75] - जुहोत्यादिभ्यः श्लुः — Class 3 (जुहोत्यादि)

**Key Terms:** @deva[श्लु], @deva[जुहोत्यादि]

@deva[जुहोत्यादिभ्यः श्लुः] — After @deva[हु] "to sacrifice" and the remaining Class 3 roots, @deva[शप्] undergoes @deva[श्लु] (a special type of deletion).

@sutra[2.4.75]

Like Class 2, @deva[शप्] is deleted. But @deva[श्लु] (unlike @deva[लुक्]) triggers **reduplication** of the root — the root syllable is doubled:

- @deva[हु] → @deva[जुहु] + @deva[ति] → @deva[जुहोति] "he sacrifices"
- @deva[भी] → @deva[बिभी] + @deva[ति] → @deva[बिभेति] "he fears"
- @deva[दा] → @deva[ददा] + @deva[ति] → @deva[ददाति] "he gives"

The reduplication follows specific rules about which consonant and vowel to copy. This is the same mechanism used in the perfect tense (@deva[लिट्]).

---

## @ref[3.1.69] - दिवादिभ्यः श्यन् — Class 4 (दिवादि)

**Key Terms:** @deva[श्यन्], @deva[दिवादि]

@deva[दिवादिभ्यः श्यन्] — The affix @deva[श्यन्] comes after Class 4 roots.

@sutra[3.1.69]

After removing markers (@deva[श्] and @deva[न्] are @deva[इत्]), the affix is @deva[य]. This @deva[य] goes between root and ending:

- @deva[दिव्] + @deva[य] + @deva[ति] → @deva[दीव्यति] "he plays, gambles"
- @deva[नृत्] + @deva[य] + @deva[ति] → @deva[नृत्यति] "he dances"
- @deva[मद्] + @deva[य] + @deva[ति] → @deva[मद्यति] "he is intoxicated"
- @deva[पुष्] + @deva[य] + @deva[ति] → @deva[पुष्यति] "he flourishes"

Class 4 is the "ya-class" — you can recognize its forms by the @deva[य] before the ending.

---

## @ref[3.1.73] - स्वादिभ्यः श्नुः — Class 5 (स्वादि)

**Key Terms:** @deva[श्नु], @deva[स्वादि]

@deva[स्वादिभ्यः श्नुः] — The affix @deva[श्नु] comes after Class 5 roots.

@sutra[3.1.73]

The affix is @deva[नु] (after removing @deva[श्]). Before strong endings, @deva[नु] → @deva[नो] by guṇa:

- @deva[सु] + @deva[नु] + @deva[ति] → @deva[सु] + @deva[नो] + @deva[ति] → @deva[सुनोति] "he presses out (soma)"
- @deva[शक्] + @deva[नु] + @deva[ति] → @deva[शक्नोति] "he is able"
- @deva[आप्] + @deva[नु] + @deva[ति] → @deva[आप्नोति] "he obtains"

The alternation @deva[नो]//@deva[नु] (strong//weak) is characteristic of athematic classes.

---

## @ref[3.1.77] - तुदादिभ्यः शः — Class 6 (तुदादि)

**Key Terms:** @deva[श], @deva[तुदादि]

@deva[तुदादिभ्यः शः] — The affix @deva[श] comes after Class 6 roots.

@sutra[3.1.77]

The affix is @deva[अ] (same sound as Class 1's @deva[शप्]!), but with an accent difference that blocks guṇa. So Class 6 roots keep their original vowel:

- @deva[तुद्] + @deva[अ] + @deva[ति] → @deva[तुदति] "he strikes" (no guṇa — contrast with Class 1)
- @deva[लिख्] + @deva[अ] + @deva[ति] → @deva[लिखति] "he writes"
- @deva[विश्] + @deva[अ] + @deva[ति] → @deva[विशति] "he enters"
- @deva[मुच्] + @deva[अ] + @deva[ति] → @deva[मुञ्चति] "he releases"

@prakriya[pac + laT + tip]{collapsed}

---

## @ref[3.1.78] - रुधादिभ्यः श्नम् — Class 7 (रुधादि)

**Key Terms:** @deva[श्नम्], @deva[रुधादि]

@deva[रुधादिभ्यः श्नम्] — The affix @deva[श्नम्] comes after Class 7 roots.

@sutra[3.1.78]

This is the most unusual class. The @deva[म्] marker in @deva[श्नम्] indicates that the affix is inserted **inside** the root — after the last vowel, not after the whole root:

- @deva[रुध्] → @deva[रु] + @deva[न] + @deva[ध्] + @deva[ति] → @deva[रुणद्धि] "he obstructs"
- @deva[भिद्] → @deva[भि] + @deva[न] + @deva[द्] + @deva[ति] → @deva[भिनत्ति] "he splits"
- @deva[छिद्] → @deva[छि] + @deva[न] + @deva[द्] + @deva[ति] → @deva[छिनत्ति] "he cuts"
- @deva[युज्] → @deva[यु] + @deva[न] + @deva[ज्] + @deva[ति] → @deva[युनक्ति] "he joins"

The nasal @deva[न] splits the root in two. This infix pattern is found in many other Indo-European languages (Latin _ru-m-po_ "I break" from _rup-_).

---

## @ref[3.1.79] - तनादिकृञ्भ्य उः — Class 8 (तनादि)

**Key Terms:** @deva[उ], @deva[तनादि]

@deva[तनादिकृञ्भ्य उः] — The affix @deva[उ] comes after Class 8 roots and the root @deva[कृ] "to make."

@sutra[3.1.79]

The affix @deva[उ] → @deva[ओ] by guṇa before strong endings:

- @deva[तन्] + @deva[उ] + @deva[ति] → @deva[तन्] + @deva[ओ] + @deva[ति] → @deva[तनोति] "he stretches"
- @deva[कृ] + @deva[उ] + @deva[ति] → @deva[करोति] "he makes, does"

@deva[कृ] "to do/make" is technically Class 8 (not Class 1). This is why @deva[करोति] has the @deva[ओ] pattern rather than the @deva[अ] pattern.

@prakriya[kR + laT + tip]{collapsed}

---

## @ref[3.1.81] - क्र्यादिभ्यः श्ना — Class 9 (क्र्यादि)

**Key Terms:** @deva[श्ना], @deva[क्र्यादि]

@deva[क्र्यादिभ्यः श्ना] — The affix @deva[श्ना] comes after Class 9 roots.

@sutra[3.1.81]

The affix is @deva[ना] (strong) // @deva[नी] (weak). It appears between root and ending:

- @deva[क्री] + @deva[ना] + @deva[ति] → @deva[क्रीणाति] "he buys"
- @deva[ज्ञा] + @deva[ना] + @deva[ति] → @deva[जानाति] "he knows"
- @deva[ग्रह्] + @deva[ना] + @deva[ति] → @deva[गृह्णाति] "he seizes"
- @deva[प्री] + @deva[ना] + @deva[ति] → @deva[प्रीणाति] "he pleases"

Class 9 includes several high-frequency verbs: @deva[ज्ञा] "to know" and @deva[ग्रह्] "to seize."

---

## @ref[3.1.25] - चुरादिभ्यो णिच् — Class 10 (चुरादि)

**Key Terms:** @deva[णिच्], @deva[चुरादि]

@deva[चुरादिभ्यो णिच्] — The affix @deva[णिच्] comes after Class 10 roots.

@sutra[3.1.25]

Class 10 is unique — its @deva[विकरण] is @deva[णिच्], the same affix used for **causatives**. The @deva[ण] marker triggers @deva[वृद्धि] of the root vowel. After removing markers, the affix is @deva[इ], and this @deva[इ] then takes @deva[शप्] (= @deva[अ]) on top of it:

- @deva[चुर्] + @deva[णिच्] + @deva[शप्] + @deva[ति] → @deva[चोरयति] "he steals"
- @deva[कथ्] + @deva[णिच्] + @deva[शप्] + @deva[ति] → @deva[कथयति] "he tells"
- @deva[गण्] + @deva[णिच्] + @deva[शप्] + @deva[ति] → @deva[गणयति] "he counts"

Because the structure is identical to causatives, there's ongoing debate in traditional grammar about whether Class 10 is a true @deva[गण] or just a subcase of the causative.

---

## concept - Recognizing Classes in the Wild

When you encounter an unknown verb form, the @deva[विकरण] is your biggest clue:

| If you see...                             | It's likely...    | Class |
| ----------------------------------------- | ----------------- | ----- |
| Root + @deva[अ] + ending (with guṇa)      | @deva[भ्वादि]     | 1     |
| Root directly + ending (no vowel between) | @deva[अदादि]      | 2     |
| Doubled root + ending                     | @deva[जुहोत्यादि] | 3     |
| Root + @deva[य] + ending                  | @deva[दिवादि]     | 4     |
| Root + @deva[नो/नु] + ending              | @deva[स्वादि]     | 5     |
| Root + @deva[अ] + ending (no guṇa)        | @deva[तुदादि]     | 6     |
| Nasal inside the root                     | @deva[रुधादि]     | 7     |
| Root + @deva[ओ/उ] + ending                | @deva[तनादि]      | 8     |
| Root + @deva[ना/नी] + ending              | @deva[क्र्यादि]   | 9     |
| Root + @deva[अय] + ending (with vṛddhi)   | @deva[चुरादि]     | 10    |

---

## concept - Common Roots by Class

Here are frequently encountered roots organized by class:

**Class 1** (@deva[भ्वादि]) — largest class:
@deva[भू] "be," @deva[गम्] "go," @deva[पच्] "cook," @deva[नी] "lead," @deva[पठ्] "read," @deva[वद्] "speak," @deva[नम्] "bow," @deva[हस्] "laugh"

**Class 2** (@deva[अदादि]):
@deva[अस्] "be," @deva[हन्] "kill," @deva[द्विष्] "hate," @deva[शीङ्] "lie down," @deva[ब्रू] "say"

**Class 3** (@deva[जुहोत्यादि]):
@deva[हु] "sacrifice," @deva[दा] "give," @deva[धा] "place," @deva[भी] "fear," @deva[मा] "measure"

**Class 4** (@deva[दिवादि]):
@deva[दिव्] "play," @deva[नृत्] "dance," @deva[मद्] "rejoice," @deva[पुष्] "nourish," @deva[तुष्] "be satisfied"

**Class 5** (@deva[स्वादि]):
@deva[सु] "press soma," @deva[शक्] "be able," @deva[आप्] "obtain," @deva[श्रु] "hear"

**Class 6** (@deva[तुदादि]):
@deva[तुद्] "strike," @deva[विश्] "enter," @deva[लिख्] "write," @deva[मुच्] "release," @deva[कृष्] "drag"

**Class 7** (@deva[रुधादि]):
@deva[रुध्] "obstruct," @deva[भिद्] "split," @deva[छिद्] "cut," @deva[युज्] "join," @deva[भुज्] "enjoy"

**Class 8** (@deva[तनादि]):
@deva[तन्] "stretch," @deva[कृ] "do/make," @deva[सन्] "gain"

**Class 9** (@deva[क्र्यादि]):
@deva[क्री] "buy," @deva[ज्ञा] "know," @deva[ग्रह्] "seize," @deva[प्री] "please," @deva[पू] "purify"

**Class 10** (@deva[चुरादि]):
@deva[चुर्] "steal," @deva[कथ्] "tell," @deva[गण्] "count," @deva[चिन्त्] "think"

---

## concept - What's Next

You now understand the @deva[विकरण] system — the ten different affixes that go between root and ending. This is essential for:

- **Reading**: When you see @deva[जुहोति], you know it's Class 3 (reduplication, no @deva[शप्])
- **Derivation**: The @deva[गण] determines which @deva[विकरण] rule fires in the prakriyā
- **Vocabulary**: Knowing a root's class lets you conjugate it in any tense

Next paths to explore:

- **Prakriyā paths**: See how different @deva[विकरण] choices play out in full derivations
- **Other लकाराः**: The @deva[विकरण] system applies to all @deva[सार्वधातुक] tenses (present, imperative, imperfect, optative)
- **Non-सार्वधातुक tenses**: Future, perfect, and aorist use different mechanisms entirely
