+++
id = "prakarana-it-samjna"
order = 60
title = "Prakaraṇa: The It-saṃjñā System"
titleSanskrit = "इत्संज्ञाप्रकरणम्"
label = "इत्संज्ञा"
track = "grammar"
category = "prakarana"
description = "Deep dive into how Pāṇini's marker letters (it) encode grammatical information. Eight rules that power the entire system."
difficulty = "beginner"
estimatedTime = "1-2 hours"
prerequisites = ["introduction"]
+++

## concept - The Hidden Layer of the Ashtadhyayi

Every affix, root, and technical term in the Aṣṭādhyāyī carries hidden information. The affix @deva[तिप्] is pronounced @deva[ति], but the @deva[प्] encodes something. The root @deva[भू] is listed as @deva[भू] in the Dhātupāṭha, but some roots like @deva[डुकृञ्] have extra letters that vanish in the final word.

These hidden letters are called @deva[इत्] — **indicatory markers**. They're a compression mechanism: Pāṇini packs grammatical metadata into the very spelling of his terms. Eight rules (@ref[1.3.2]–@ref[1.3.9]) define what counts as @deva[इत्] and what happens to it.

This prakaraṇa is the Aṣṭādhyāyī's encoding scheme. Without it, no derivation can proceed correctly.

---

## concept - Why Markers Matter

Consider the affix @deva[क्त]. You hear it as @deva[त] (as in @deva[कृतम्] "done"). The @deva[क्] is silent — it's a marker. But it's not arbitrary:

- The @deva[क्] tells us this affix is @deva[कित्] (has @deva[क्] as @deva[इत्])
- By @ref[1.1.5] (@deva[क्ङिति च]), @deva[कित्] affixes **block गुण and वृद्धि**
- That's why @deva[कृ] + @deva[क्त] = @deva[कृत] (no guṇa), but @deva[कृ] + @deva[तव्य] = @deva[कर्तव्य] (guṇa applies)

One silent letter controls vowel strengthening. This is the power of the @deva[इत्] system.

---

## 1.3.2 - Nasal Vowels Are इत्

**Key Terms:** upadeSa, anunAsika, ac, it

@deva[उपदेशेऽजनुनासिक इत्] — A nasalized vowel (@deva[अनुनासिक अच्]) in a grammatical teaching (@deva[उपदेश]) is @deva[इत्].

@sutra[1.3.2]

This is the first @deva[इत्] rule and covers a rare case: nasalized vowels as markers. These appear mainly in the Dhātupāṭha. For example, the root @deva[गम्] is listed as @deva[गम्ऌ] — the @deva[ऌ] (which is nasalized in the original) is @deva[इत्].

**What the nasal marker encodes:**
- Roots with nasal @deva[इत्] vowels can take the augment @deva[नुम्] in certain forms
- This is how Pāṇini marks "nasal-infixing" roots without stating a separate rule for each one

---

## 1.3.3 - Final Consonants Are इत्

**Key Terms:** hal, antyam

@deva[हलन्त्यम्] — The final consonant (@deva[हल् अन्त्यम्]) of an item in grammatical teaching is @deva[इत्].

@sutra[1.3.3]

This is the workhorse of the @deva[इत्] system. It's why:

| Term | Pronounced | Final @deva[इत्] | Information encoded |
|------|-----------|----------------|-------------------|
| @deva[तिप्] | @deva[ति] | @deva[प्] | Marks this as a @deva[पित्] affix |
| @deva[शप्] | @deva[अ] | @deva[प्] | Marks as @deva[पित्]; the @deva[श्] is initial @deva[इत्] |
| @deva[लट्] | — | @deva[ट्] | @deva[टित्] marking for the lakāra |
| @deva[क्त] | @deva[त] | — | Final @deva[त्] is NOT @deva[इत्] — it's the initial @deva[क्] that's the marker |

Wait — that last row seems wrong. If final consonants are @deva[इत्], why isn't the @deva[त्] of @deva[क्त] a marker?

Because @deva[क्त] has only two sounds: @deva[क्] and @deva[त]. The @deva[त] is the final *and only vowelless* portion. The @deva[क्] at the beginning is handled by a different rule (@ref[1.3.8]). In @deva[क्त], the "final consonant" rule marks @deva[क्] as the final consonant *of the initial cluster*, while the @deva[त] remains as the pronounced affix.

Actually, the correct analysis: @deva[क्त] — the @deva[क्] is initial @deva[इत्] by @ref[1.3.8], and the @deva[त्] is what remains. The @deva[त] is NOT final @deva[इत्] because after removing @deva[क्], there's no final consonant left to mark.

---

## 1.3.4 - Exception: Not in विभक्ति Endings

**Key Terms:** vibhakti, tu, sa, ma

@deva[न विभक्तौ तुस्माः] — In @deva[विभक्ति] (case/personal endings), the letters @deva[त्], @deva[थ्], @deva[द्], @deva[ध्], @deva[स्], @deva[म्] are NOT @deva[इत्].

@sutra[1.3.4]

Without this exception, endings like @deva[तस्] (3rd dual) would lose their final @deva[स्], and @deva[अम्] (accusative) would lose its @deva[म्]. The actual sounds of the endings would vanish.

This rule protects the real phonetic content of endings. The general rule (@ref[1.3.3]) is too aggressive — it would eat the endings themselves. So this exception carves out the letters that are genuinely pronounced in endings.

---

## 1.3.5 - Initial ञि, टु, डु Are इत्

**Key Terms:** Adi, Ji, Tu, Du

@deva[आदिर्ञिटुडवः] — The syllables @deva[ञि], @deva[टु], and @deva[डु] at the beginning of a term are @deva[इत्].

@sutra[1.3.5]

This covers initial markers on roots:

| Root as listed | Pronounced | Initial @deva[इत्] | Purpose |
|----------------|-----------|-------------------|---------|
| @deva[डुकृञ्] | @deva[कृ] | @deva[डु] | Marks feminine in @deva[ई] |
| @deva[ञिमषा] | @deva[मष्] | @deva[ञि] | Marks feminine in @deva[ई] |
| @deva[टुनदि] | @deva[नद्] | @deva[टु] | Marks feminine in @deva[ई] |

The @deva[डु]//@deva[ञि]//@deva[टु] prefixes tell the system how derived nouns from these roots form their feminine. Again — grammatical information packed into spelling.

---

## 1.3.6 - Initial ष् of Affixes Is इत्

**Key Terms:** Sa, pratyaya

@deva[षः प्रत्ययस्य] — The initial @deva[ष्] of an affix is @deva[इत्].

@sutra[1.3.6]

Example: @deva[ष्ट्रन्] — the @deva[ष्] is @deva[इत्], leaving @deva[ट्रन्] (then @deva[ट्] is also @deva[इत्] by @ref[1.3.7], leaving the affix @deva[अन]).

The @deva[षित्] marking has a specific function: by @ref[6.4.34], it triggers @deva[सम्प्रसारण] in certain roots.

---

## 1.3.7 - Initial Palatals and Retroflexes of Affixes Are इत्

**Key Terms:** cu, Tu, pratyaya

@deva[चुटू] — The initial palatals (@deva[च् छ् ज् झ् ञ्]) and retroflexes (@deva[ट् ठ् ड् ढ् ण्]) of affixes are @deva[इत्].

@sutra[1.3.7]

This is why the @deva[ट्] in @deva[ट्रन्] vanishes, and why affixes like @deva[ण्वुल्] (= @deva[अक]) lose their @deva[ण्]. The palatal/retroflex initial serves purely as a marker:

- @deva[णित्] (has @deva[ण्] as @deva[इत्]) → triggers @deva[वृद्धि] by @ref[7.2.115]
- @deva[ञित्] (has @deva[ञ्] as @deva[इत्]) → triggers @deva[वृद्धि] + feminine @deva[ई]

---

## 1.3.8 - Initial ल्, श्, and Gutturals of Non-taddhita Affixes

**Key Terms:** la, Sa, ku, ataddhita

@deva[लशक्वतद्धिते] — In non-@deva[तद्धित] affixes, initial @deva[ल्], @deva[श्], and gutturals (@deva[क् ख् ग् घ् ङ्]) are @deva[इत्].

@sutra[1.3.8]

This explains @deva[शप्]: the @deva[श्] is initial @deva[इत्] (by this rule), and the @deva[प्] is final @deva[इत्] (by @ref[1.3.3]). Only @deva[अ] remains — which is the actual class affix.

The restriction "non-@deva[तद्धित]" is important. In @deva[तद्धित] affixes (secondary derivation), initial gutturals are NOT markers — they're pronounced.

| Affix | Initial @deva[इत्] | Remaining | Type |
|-------|-------------------|-----------|------|
| @deva[शप्] | @deva[श्] | @deva[अ] | Non-taddhita ✓ |
| @deva[क्त] | @deva[क्] | @deva[त] | Non-taddhita ✓ |
| @deva[ण्वुल्] | @deva[ण्] | @deva[वुल्] → @deva[अक] | Non-taddhita ✓ |

---

## 1.3.9 - All इत् Letters Are Deleted

**Key Terms:** tasya, lopaH

@deva[तस्य लोपः] — That which has been designated @deva[इत्] undergoes @deva[लोप] (deletion).

@sutra[1.3.9]

This is the payoff. All seven preceding rules *identify* @deva[इत्]; this rule *removes* it. Every marker in every affix and root is deleted before the final word is produced.

@deva[लोप] is a technical term: it means "replacement by nothing" (@ref[1.1.63]: @deva[शून्यं लोपः]). The marker is treated as having existed (which triggered rules) but now disappears.

**Complete example — @deva[शप्]:**

1. @ref[1.3.8]: Initial @deva[श्] is @deva[इत्] (guttural/sibilant in non-taddhita)
2. @ref[1.3.3]: Final @deva[प्] is @deva[इत्] (final consonant)
3. @ref[1.3.9]: Both are deleted → @deva[अ] remains

**Complete example — @deva[तिप्]:**

1. @ref[1.3.3]: Final @deva[प्] is @deva[इत्]
2. @ref[1.3.9]: Deleted → @deva[ति] remains

---

## concept - The Complete System

Here's the full @deva[इत्] identification system at a glance:

| Rule | What's @deva[इत्] | Where | Exception |
|------|-------------------|-------|-----------|
| @ref[1.3.2] | Nasalized vowels | Anywhere in @deva[उपदेश] | — |
| @ref[1.3.3] | Final consonants | Anywhere in @deva[उपदेश] | @ref[1.3.4] |
| @ref[1.3.4] | — | @deva[विभक्ति] endings | @deva[त थ द ध स म] protected |
| @ref[1.3.5] | Initial @deva[ञि टु डु] | Roots | — |
| @ref[1.3.6] | Initial @deva[ष्] | Affixes | — |
| @ref[1.3.7] | Initial palatals/retroflexes | Affixes | — |
| @ref[1.3.8] | Initial @deva[ल श] + gutturals | Non-taddhita affixes | Taddhita excluded |
| @ref[1.3.9] | (deletion) | All @deva[इत्] | — |

And here's what the markers encode:

| Marker type | Triggers |
|-------------|----------|
| @deva[कित्] / @deva[ङित्] | Blocks guṇa/vṛddhi (@ref[1.1.5]) |
| @deva[णित्] | Triggers vṛddhi (@ref[7.2.115]) |
| @deva[पित्] | Various affix behaviors |
| @deva[ञित्] | Feminine in @deva[ई] |
| @deva[डु टु ञि] (on roots) | Feminine marking for derived nouns |
| Nasal @deva[इत्] (on roots) | Allows @deva[नुम्] augment |

This eight-rule system is one of the most elegant inventions in the Aṣṭādhyāyī. With just eight rules, Pāṇini created a metadata encoding system that eliminates hundreds of separate statements. Every affix carries its own behavior instructions in its spelling.

---

## concept - See It in Action

Watch @deva[इत्]-deletion happen in real derivations:

**@deva[भवति]** — @deva[शप्] loses @deva[श्] and @deva[प्], @deva[तिप्] loses @deva[प्]:

@prakriya[bhU + laT + tip]{highlight=1.3.9}

**@deva[गच्छति]** — Same pattern, different root:

@prakriya[gam + laT + tip]{highlight=1.3.3}

Every derivation in the Aṣṭādhyāyī passes through these eight rules. They are the invisible foundation of the entire system.
