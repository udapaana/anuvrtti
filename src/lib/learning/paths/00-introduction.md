---
id: introduction
title: Introduction to Paninian Grammar
titleSanskrit: व्याकरणप्रवेशः
label: प्रवेशः
track: grammar
category: foundation
description: The essential concepts you need before any prakriya. We build understanding step by step.
difficulty: beginner
estimatedTime: 2-3 hours
prerequisites: []
---

## concept - Welcome to Paninian Grammar

Pāṇini's Aṣṭādhyāyī is a grammar of about 4,000 rules that generates all of Sanskrit. But it's not a textbook—it's more like source code. Each rule is compressed to the minimum, assuming you know the system.

We'll build that knowledge piece by piece. By the end of this path, you'll understand:

- How vowels "strengthen" (guṇa and vṛddhi)
- How Pāṇini abbreviates groups of sounds (pratyāhāra)
- How marker letters work (it-saṃjñā)
- What makes a complete word (pada)
- How affixes attach (pratyaya)

Let's begin with something concrete: vowel grades.

---

## concept - Vowel Grades: The Core Idea

Sanskrit vowels come in three "grades" or strengths. Think of it like gears—you shift up when forming derivatives:

| Base vowel         | Guṇa (medium) | Vṛddhi (strong) |
| ------------------ | ------------- | --------------- |
| @deva[अ]           | @deva[अ]      | @deva[आ]        |
| @deva[इ], @deva[ई] | @deva[ए]      | @deva[ऐ]        |
| @deva[उ], @deva[ऊ] | @deva[ओ]      | @deva[औ]        |
| @deva[ऋ], @deva[ॠ] | @deva[अर्]    | @deva[आर्]      |
| @deva[ऌ]           | @deva[अल्]    | @deva[आल्]      |

The vowel @deva[अ] is special—it's both a base vowel AND a guṇa vowel. It strengthens to @deva[आ] for vṛddhi.

**Why does this matter?**

When you derive words, vowels often shift grade:

- @deva[उपगु] (a sage's name) → @deva[औपगवः] "son of Upagu" — the @deva[उ] became @deva[औ] (vṛddhi)
- @deva[नी] "to lead" + @deva[अति] → @deva[नयति] "he leads" — the @deva[ई] became @deva[ए] (guṇa), then @deva[ए] → @deva[अय्] before a vowel

Pāṇini needs names for these vowel sets. That's what the first two sūtras do.

---

## 1.1.1 - Vṛddhi Defined

**Key Terms:** vRddi

@deva[वृद्धिरादैच्] — The vowels @deva[आ], @deva[ऐ], and @deva[औ] are called @deva[वृद्धि].

This defines a technical term. Whenever a later rule says "apply vṛddhi," it means: substitute one of these three vowels.

**Examples of vṛddhi in action:**

| Base         | Derivative     | Meaning                |
| ------------ | -------------- | ---------------------- |
| @deva[अङ्ग]  | @deva[आङ्गः]   | "bodily" (अ → आ)       |
| @deva[इच्छा] | @deva[ऐच्छिकः] | "optional" (इ → ऐ)     |
| @deva[उपगु]  | @deva[औपगवः]   | "son of Upagu" (उ → औ) |

---

## 1.1.2 - Guṇa Defined

**Key Terms:** guRa

@deva[अदेङ्गुणः] — The vowels @deva[अ], @deva[ए], and @deva[ओ] are called @deva[गुण].

The "medium" grade. When rules say "apply guṇa," substitute one of these.

**Examples of guṇa in action:**

| Root               | Form                   | What happened  |
| ------------------ | ---------------------- | -------------- |
| @deva[ऋ] "to go"   | @deva[अर्ति] "he goes" | ऋ → अर् (guṇa) |
| @deva[इ] "to go"   | @deva[एति] "he comes"  | इ → ए (guṇa)   |
| @deva[उख्] "to go" | @deva[ओखति] "he goes"  | उ → ओ (guṇa)   |

Notice: @deva[ऋ] becomes @deva[अर्], not just @deva[अ]. The @deva[र्] stays because @deva[ऋ] is essentially @deva[र्] + a vowel coloring.

---

## 1.1.3 - Guṇa and Vṛddhi Replace इक्

**Key Terms:** iK

@deva[इको गुणवृद्धी] — When @deva[गुण] or @deva[वृद्धि] is prescribed without specifying where, it replaces an @deva[इक्] vowel.

@deva[इक्] means @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ] (and their long forms). This is our first **pratyāhāra**—an abbreviation for a group of sounds. We'll learn how these work soon.

**The correspondence:**

| @deva[इक्] vowel | Its guṇa   | Its vṛddhi |
| ---------------- | ---------- | ---------- |
| @deva[इ/ई]       | @deva[ए]   | @deva[ऐ]   |
| @deva[उ/ऊ]       | @deva[ओ]   | @deva[औ]   |
| @deva[ऋ/ॠ]       | @deva[अर्] | @deva[आर्] |
| @deva[ऌ]         | @deva[अल्] | @deva[आल्] |

**Why this rule?**

Many rules just say "guṇa happens" without saying what gets replaced. This rule fills in the blank: it's always an @deva[इक्] vowel.

Example: @deva[नी] + @deva[अति] → @deva[ने] + @deva[अति] → @deva[नयति]

The @deva[ई] of @deva[नी] is an @deva[इक्] vowel, so it takes guṇa (becomes @deva[ए]).

---

## concept - How Pāṇini Abbreviates: Pratyāhāras

You just saw @deva[इक्] used to mean "इ, उ, ऋ, ऌ." How does that work?

Pāṇini created 14 seed-sūtras called the **Śivasūtras** (or Māheśvara Sūtras). They arrange all Sanskrit sounds in a special order:

1. @deva[अ इ उ ण्]
2. @deva[ऋ ऌ क्]
3. @deva[ए ओ ङ्]
4. @deva[ऐ औ च्]
5. @deva[ह य व र ट्]
6. @deva[ल ण्]
7. @deva[ञ म ङ ण न म्]
8. @deva[झ भ ञ्]
9. @deva[घ ढ ध ष्]
10. @deva[ज ब ग ड द श्]
11. @deva[ख फ छ ठ थ च ट त व्]
12. @deva[क प य्]
13. @deva[श ष स र्]
14. @deva[ह ल्]

The consonants at the end of each sūtra (@deva[ण्], @deva[क्], @deva[ङ्], etc.) are **markers**—they're not part of the sound inventory. They exist only to create abbreviations.

A **pratyāhāra** combines:

- A starting sound
- An ending marker

Everything between (inclusive of start, exclusive of marker) is included.

---

## 1.1.71 - How Pratyāhāras Work

**Key Terms:** pratyAhAra, Adir, antyena, it

@deva[आदिरन्त्येन सहेता] — A beginning sound, combined with a final @deva[इत्] (marker), denotes all sounds between them.

**Examples:**

| Pratyāhāra | Start    | End marker | Includes                           |
| ---------- | -------- | ---------- | ---------------------------------- |
| @deva[अच्] | @deva[अ] | @deva[च्]  | All vowels: अ इ उ ऋ ऌ ए ओ ऐ औ      |
| @deva[हल्] | @deva[ह] | @deva[ल्]  | All consonants                     |
| @deva[इक्] | @deva[इ] | @deva[क्]  | इ उ ऋ ऌ (the "replaceable" vowels) |
| @deva[यण्] | @deva[य] | @deva[ण्]  | The semivowels: य व र ल            |
| @deva[अण्] | @deva[अ] | @deva[ण्]  | अ इ उ (short simple vowels)        |

Now @deva[इक्] in sūtra 1.1.3 makes sense: it's the vowels from @deva[इ] (in sūtra 1) through the marker @deva[क्] (in sūtra 2) — that's @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ].

---

## concept - Marker Letters (इत्-संज्ञा)

Those ending consonants in the Śivasūtras are "markers" — they indicate something but aren't part of the actual content. Pāṇini uses markers throughout his grammar, not just in pratyāhāras.

How do you know what's a marker? The next few rules define this.

---

## 1.3.2 - Nasal Vowels are इत्

**Key Terms:** upadeSa, anunAsika, it

@deva[उपदेशेऽनुनासिक इत्] — In an @deva[उपदेश] (original statement), a nasal vowel is @deva[इत्] (a marker).

An @deva[उपदेश] is anything as originally taught—a root, an affix, or a sūtra. If a vowel is pronounced nasally (indicated by a dot: @deva[इँ]), it's a marker, not part of the real form.

**Example:** The affix @deva[क्विँन्]

The @deva[इँ] is nasal, so it's a marker. The actual affix is just @deva[क्वन्].

---

## 1.3.3 - Final Consonants are इत्

**Key Terms:** hal, antya, it

@deva[हलन्त्यम्] — The final consonant (@deva[हल्]) of an @deva[उपदेश] is @deva[इत्].

This is why the Śivasūtras end in consonants like @deva[ण्], @deva[क्], @deva[ङ्]—those finals are markers.

**Examples:**

| As stated     | Marker                           | Real form                                   |
| ------------- | -------------------------------- | ------------------------------------------- |
| @deva[अइउण्]  | @deva[ण्]                        | @deva[अ], @deva[इ], @deva[उ]                |
| @deva[क्त्वा] | @deva[आ]? No—@deva[आ] is a vowel | @deva[क्त्वा] (the @deva[क्] is the marker) |
| @deva[तिप्]   | @deva[प्]                        | @deva[ति]                                   |

Wait—@deva[क्त्वा] has @deva[क्] as a marker? Yes! It's the final consonant when you read the cluster. The affix is really @deva[त्वा].

---

## 1.3.9 - इत् Letters are Deleted

**Key Terms:** lopa

@deva[तस्य लोपः] — The @deva[इत्] (of that which has an इत्) undergoes @deva[लोप] (deletion).

Markers serve their grammatical purpose, then vanish. They're never pronounced in the final word.

**The process:**

@deva[भू] + @deva[क्त्वा] (affix with marker @deva[क्])
→ The @deva[क्] signals "don't apply guṇa" (that's what @deva[क्] means as a marker)
→ Then @deva[क्] is deleted
→ Result: @deva[भूत्वा] "having become"

---

## concept - What is a Word? (पद)

Sanskrit has stems (like @deva[राम]) and roots (like @deva[भू]). But these aren't complete words—you can't use @deva[राम] by itself in a sentence. You need endings.

A **पद** (pada) is a complete, usable word. What makes it complete?

---

## 1.4.14 - Pada Defined

**Key Terms:** sup, tiN, pada

@deva[सुप्तिङन्तं पदम्] — What ends in @deva[सुप्] (a case ending) or @deva[तिङ्] (a verb ending) is called @deva[पद].

**@deva[सुप्]** = the 21 case endings for nouns (nominative, accusative, etc.)
**@deva[तिङ्]** = the 18 verb endings (third person, second person, etc.)

**Examples:**

| Stem/Root       | + Ending                 | = Pada            | Type |
| --------------- | ------------------------ | ----------------- | ---- |
| @deva[राम]      | + @deva[सु] (nom. sg.)   | @deva[रामः]       | noun |
| @deva[ब्राह्मण] | + @deva[जस्] (nom. pl.)  | @deva[ब्राह्मणाः] | noun |
| @deva[पच्]      | + @deva[ति] (3rd sg.)    | @deva[पचति]       | verb |
| @deva[पच्]      | + @deva[अन्ति] (3rd pl.) | @deva[पचन्ति]     | verb |

Only padas can stand in a sentence. That's why Sanskrit words change form—they need these endings.

---

## concept - Affixes (प्रत्यय)

You've seen endings like @deva[ति] and @deva[सु]. These are **affixes** (प्रत्यय). Books 3-5 of the Aṣṭādhyāyī are dedicated to affixes—which ones exist, when they apply, and what they mean.

---

## 3.1.1 - The Pratyaya Realm

**Key Terms:** pratyaya

@deva[प्रत्ययः] — [From here to the end of Book 5, what follows is called] @deva[प्रत्यय].

This is a heading rule (अधिकार). It announces: "everything I'm about to teach you is an affix."

---

## 3.1.2 - Affixes Follow

**Key Terms:** dhAtu, para

@deva[परश्च] — And [the pratyaya comes] after [the base].

Affixes attach to the end of roots and stems. @deva[भू] + @deva[ति] = @deva[भवति], not @deva[तिभू].

(There are rare exceptions, but this is the default.)

---

## concept - Words in Close Contact (संहिता)

When sounds come together, they interact. @deva[दधि] + @deva[अत्र] doesn't stay as two separate words—the @deva[इ] and @deva[अ] merge into @deva[य], giving @deva[दध्यत्र].

This merging is called **संधि** (junction). But it only happens when sounds are in **संहिता** (close contact).

---

## 1.4.109 - Saṃhitā Defined

**Key Terms:** saMhitA

@deva[परः सन्निकर्षः संहिता] — The closest proximity [of sounds] is @deva[संहिता].

When sounds are within half a mātrā of each other (essentially: no pause between them), they're in saṃhitā, and sandhi rules apply.

**In saṃhitā:** @deva[दधि] + @deva[अत्र] → @deva[दध्यत्र]
**Not in saṃhitā:** @deva[दधि] । @deva[अत्र] (pause between = no change)

---

## concept - Svarūpa: Form, Not Meaning

One more crucial principle. In grammar, when we mention a word, we mean its **form**, not its meaning.

---

## 1.1.68 - Form Over Meaning

**Key Terms:** svarUpa

@deva[स्वं रूपं शब्दस्याशब्दसंज्ञा] — A word [in a rule] denotes its own form, not [things with the same] meaning—except for technical terms.

If a rule mentions @deva[अग्नि] "fire," it applies only to the word @deva[अग्नि]—not to synonyms like @deva[पावक] or @deva[वह्नि].

But technical terms like @deva[वृद्धि] or @deva[गुण] denote what they define, not their own letters.

---

## concept - Review: The Building Blocks

You now know the essential machinery:

| Concept        | What it means                                     |
| -------------- | ------------------------------------------------- |
| **Vṛddhi**     | Strong vowels: आ, ऐ, औ                            |
| **Guṇa**       | Medium vowels: अ, ए, ओ                            |
| **इक्**        | Replaceable vowels: इ, उ, ऋ, ऌ                    |
| **Pratyāhāra** | Sound-group abbreviation (start + end marker)     |
| **इत्**        | Marker letter (deleted after serving its purpose) |
| **Pada**       | Complete word (ends in सुप् or तिङ्)              |
| **Pratyaya**   | Affix (comes after the base)                      |
| **Saṃhitā**    | Close contact (triggers sandhi)                   |
| **Svarūpa**    | Words mean their form, not their sense            |

With these concepts, you can start reading the Aṣṭādhyāyī. The next paths will show you how actual words are derived—verbs, nouns, compounds, and more.

---

## concept - What's Next?

You're ready to see the system in action. Recommended next steps:

1. **Verb Basics** (@deva[तिङन्त]) — How @deva[भू] becomes @deva[भवति]
2. **Noun Basics** (@deva[सुबन्त]) — How @deva[राम] becomes @deva[रामः], @deva[रामम्], @deva[रामेण]...
3. **Sandhi** — How sounds change when words meet

Each path builds on what you've learned here. Take them in any order—or follow the Reading Fluency track for a structured sequence.
