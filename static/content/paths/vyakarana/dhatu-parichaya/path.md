+++
id = "dhatu-parichaya"
order = 1
title = "धातुपरिचयः — Meeting the Root"
titleSanskrit = "धातुपरिचयः"
label = "धातुः"
track = "grammar"
category = "foundation"
description = "What is a @term[dhātu]? How are roots listed and organized? A short bridge between abstract grammar concepts and your first verb derivation."
difficulty = "beginner"
estimatedTime = "1-2 hours"
prerequisites = ["introduction"]
+++

## concept - The Seed of Every Verb

Sanskrit verbs grow from seeds called @deva[धातु] (dhātu — root). Every verb you encounter in Sanskrit traces back to one of roughly 2000 roots listed in Pāṇini's @deva[धातुपाठ] (root catalog).

A @deva[धातु] is not a word you say out loud — it's an underlying form. When you want to express "he cooks," you take the root @deva[पच्] "to cook" and attach endings. When you want "he goes," you take @deva[गम्] "to go." The root carries the core meaning; the endings carry tense, person, and number.

This path shows you:
- What a dhātu looks like and how to read it
- How the ~2000 roots are organized into ten classes
- The shape of a derivation — before we go into the formal machinery

---

## @ref[1.3.1] - भूवादयो धातवः

**Key Terms:** dhAtu, bhvAdi

@deva[भूवादयो धातवः] — @deva[भू] and the roots that follow are called @deva[धातु].

This rule simply names the class. "Starting from @deva[भू]" means: the list in my @deva[धातुपाठ] (root catalog). Everything in that list is a @deva[धातु].

The root @deva[भू] "to be / to become" heads the list because it's the most fundamental verb in Sanskrit. Pāṇini starts his catalog with it.

---

## concept - Reading a Root

When grammarians write a root, they include marker letters (@deva[इत्]) that carry information. These are not pronounced — they're instructions.

Take @deva[भू]:
- Just @deva[भ्] + @deva[ऊ]. No markers.
- It's a simple long-vowel root.

Take @deva[डुपच॑ष्]:
- @deva[ड्] is a marker (tells us the root takes certain feminine affixes)
- @deva[प] + @deva[च्] is the actual root — @deva[पच्] "to cook"
- @deva[ष्] is a marker (tells us the root takes @deva[आत्मनेपद] forms in some contexts)
- The accent mark tells us something about tone

What you'll actually use in a derivation: @deva[पच्].

You don't need to memorize all the marker conventions now. The key insight is: **the root as listed in the dhātupāṭha carries more information than just the root itself.**

---

## concept - Ten Classes, One Principle

The ~2000 roots are organized into ten groups called @deva[गण] (gaṇa — class). Each class is named after its first root:

| Class | Named after    | Called        |
|-------|---------------|---------------|
| 1     | @deva[भू]     | @deva[भ्वादि] |
| 2     | @deva[अद्]    | @deva[अदादि]  |
| 3     | @deva[हु]     | @deva[जुहोत्यादि] |
| 4     | @deva[दिव्]   | @deva[दिवादि] |
| 5     | @deva[सु]     | @deva[स्वादि] |
| 6     | @deva[तुद्]   | @deva[तुदादि] |
| 7     | @deva[रुध्]   | @deva[रुधादि] |
| 8     | @deva[तन्]    | @deva[तनादि]  |
| 9     | @deva[क्री]   | @deva[क्र्यादि] |
| 10    | @deva[चुर्]   | @deva[चुरादि] |

Why does the class matter? Because each class inserts a different @deva[प्रत्यय] between root and ending. This intermediate element is called the @deva[विकरण] (class marker). It's what makes @deva[भवति] different in shape from @deva[तुदति] — both are 3rd person singular present, but @deva[भू] is Class 1 and @deva[तुद्] is Class 6, and they insert different elements.

For now, just know this: **which class a root belongs to determines its "shape" in conjugation.**

---

## concept - Five Roots to Know

Before any formal derivation, meet five roots you'll see constantly:

**@deva[भू]** — "to be, to become" (Class 1)
Result in present tense: @deva[भवति] "he is / he becomes"

**@deva[अस्]** — "to be" (Class 2, irregular)
Result: @deva[अस्ति] "he is" — the copula, like English "is"

**@deva[गम्]** — "to go" (Class 1)
Result: @deva[गच्छति] "he goes" — the @deva[म्] drops, a consonant shifts

**@deva[पच्]** — "to cook" (Class 1)
Result: @deva[पचति] "he cooks" — clean, no changes to the root itself

**@deva[नी]** — "to lead, to carry" (Class 1)
Result: @deva[नयति] "he leads" — the long @deva[ई] becomes @deva[ए] (guṇa), then @deva[अय्] before a vowel

These five cover the most common root shapes: simple consonant root, athematic root, root with final nasal, root with final vowel.

---

## concept - The Shape of a Derivation

Here's what actually happens when a root becomes a verb. Don't worry about the rule numbers yet — just follow the shape.

**Goal:** Derive @deva[भवति] "he becomes" from @deva[भू].

Step 1 — Attach a tense marker. For present tense, Pāṇini uses an abstract marker @deva[लट्]. So:
@deva[भू] + @deva[लट्]

Step 2 — @deva[लट्] gets replaced by actual endings. For 3rd person singular, that ending is @deva[ति] (after various transformations). So we need the slot:
@deva[भू] + @deva[अ] + @deva[ति]

Step 3 — Insert the class marker. @deva[भू] is Class 1, whose class marker is @deva[शप्] = @deva[अ]. It goes between root and ending:
@deva[भू] + @deva[अ] + @deva[ति]

Step 4 — The root vowel undergoes guṇa before the class marker (because the marker is @deva[सार्वधातुक]):
@deva[भू] → @deva[भो] (guṇa: @deva[ऊ] → @deva[ओ])
@deva[भो] + @deva[अ] + @deva[ति]

Step 5 — Two vowels meet (@deva[ओ] + @deva[अ]). They merge:
@deva[ओ] + @deva[अ] → @deva[अव] (before a vowel, @deva[ओ] becomes @deva[अव्])
@deva[भव] + @deva[ति] = @deva[भवति] ✓

Every verb derivation in Sanskrit follows this kind of sequence. The rules tell you which step fires when. Your job — for now — is to see the structure: **root → class marker → ending**.

Here it is in one view:

@prakriya[bhU + laT + tip]

---

## concept - Roots and Their Meanings

Most roots have a core meaning that stays stable across derivations. A few to recognize:

| Root | Meaning | Present |
|------|---------|---------|
| @deva[भू] | to be, become | @deva[भवति] |
| @deva[कृ] | to do, make | @deva[करोति] |
| @deva[दृश्] | to see | @deva[पश्यति] |
| @deva[वच्] | to speak | @deva[वदति] (variant) |
| @deva[श्रु] | to hear | @deva[शृणोति] |
| @deva[गम्] | to go | @deva[गच्छति] |
| @deva[स्था] | to stand | @deva[तिष्ठति] |
| @deva[पठ्] | to read, recite | @deva[पठति] |
| @deva[लिख्] | to write | @deva[लिखति] |
| @deva[ज्ञा] | to know | @deva[जानाति] |

Many of these roots are cognates with English — @deva[भू] / "be", @deva[दृश्] / "descry", @deva[श्रु] / "hear" (via Old English *hieran*), @deva[स्था] / "stand". Sanskrit and English share a common ancestor.

---

## concept - What Comes Next

You now have the conceptual frame:

- A @deva[धातु] is a root — the seed of every verb
- ~2000 roots are grouped into 10 classes (@deva[गण])
- Each class has a class marker (@deva[विकरण]) that shapes the verb
- Derivation: root + class marker + ending, with phonological adjustments

The next path, @term[tinganta-lat], walks through the formal rules that govern this process for present tense. You'll see each step of the @deva[भवति] derivation traced through exact sūtras.

One thing to keep in mind as you go: Pāṇini's rules don't explain meanings — they describe operations. The root @deva[भू] means "to be" because that's how speakers use it; the grammar's job is to describe what form @deva[भू] takes when you want to say "he becomes."
