+++
id = "prakarana-atmanepada"
order = 63
title = "Prakaraṇa: The Ātmanepada System"
titleSanskrit = "आत्मनेपदप्रकरणम्"
label = "आत्मनेपद"
track = "grammar"
category = "prakarana"
description = "Deep dive into Pāṇini's voice assignment — when verbs take ātmanepada vs. parasmaipada endings."
difficulty = "intermediate"
estimatedTime = "2-3 hours"
prerequisites = ["introduction", "tinganta-lat"]
+++

## concept - Two Sets of Endings

Sanskrit finite verbs have two complete sets of personal endings:

| | @term[parasmaipada] | @term[ātmanepada] |
|---|---------------------|-------------------|
| 3sg | @deva[ति] | @deva[ते] |
| 3du | @deva[तः] | @deva[आते] |
| 3pl | @deva[अन्ति] | @deva[अन्ते] |
| 2sg | @deva[सि] | @deva[से] |
| 1sg | @deva[मि] | @deva[ए] |

The same root @deva[भू] can appear as @deva[भवति] (parasmaipada) or @deva[भवते] (ātmanepada), but not arbitrarily. Rules 1.3.12–93 determine which endings a given verb takes.

This @term[prakaraṇa] is the voice assignment system — 82 rules that govern one of Sanskrit's most intricate patterns.

---

## concept - The Three Voice Classes

Roots fall into three categories:

1. **@term[parasmaipadin]** — roots that take only @term[parasmaipada] endings
2. **@term[ātmanepadin]** — roots that take only @term[ātmanepada] endings
3. **@term[ubhayapadin]** — roots that take either set depending on meaning

The default is @term[parasmaipada] (rule 1.3.78). The rules in this section specify when @term[ātmanepada] applies instead.

---

## concept - The Semantic Principle

The traditional explanation: @term[parasmaipada] ("word for another") is used when the action benefits someone else; @term[ātmanepada] ("word for oneself") when it benefits the agent.

@deva[पचति] "he cooks [for others]" vs. @deva[पचते] "he cooks [for himself]"

But this semantic distinction is just one factor. Many rules are lexical (specific roots) or syntactic (specific constructions).

---

## 1.3.12 - @deva[अनुदात्तङित आत्मनेपदम्]

**Key Terms:** anudātta, ṅit, ātmanepada

@deva[अनुदात्तङितः आत्मनेपदम्] — Roots marked @term[anudātta] or @term[ṅit] in the @term[Dhātupāṭha] take @term[ātmanepada].

@sutra[1.3.12]

This is the master rule. The @term[Dhātupāṭha] marks certain roots with:
- @term[anudātta] accent — inherently @term[ātmanepadin]
- @deva[ङ्] as @term[it] — also @term[ātmanepadin]

Examples:
- @deva[एधँ] (@term[ṅit]) → @deva[एधते] "grows" (only @term[ātmanepada])
- @deva[शीङ्] (@term[ṅit]) → @deva[शेते] "lies down" (only @term[ātmanepada])
- @deva[आस्] (@term[anudātta]) → @deva[आस्ते] "sits" (only @term[ātmanepada])

These roots NEVER take @term[parasmaipada] in active voice.

---

## 1.3.13 - @deva[भावकर्मणोः]

**Key Terms:** bhāva, karman

@deva[भावकर्मणोः] — [Ātmanepada applies] in @term[bhāva] (impersonal) and @term[karman] (passive) constructions.

@sutra[1.3.13]

Regardless of the root's inherent class, passives and impersonals take @term[ātmanepada]:

- @deva[ग्रामो गम्यते] "the village is gone to" (passive of @deva[गम्])
- @deva[अत्र स्थीयते] "there is standing here" (impersonal)

This rule overrides the root's default. Even @term[parasmaipadin] roots use @term[ātmanepada] in passive.

---

## 1.3.14 - @deva[कर्तरि कर्मव्यतिहारे]

**Key Terms:** kartṛ, karmavyatihāra

@deva[कर्तरि कर्मव्यतिहारे] — [Ātmanepada applies] when the agents mutually exchange actions.

@sutra[1.3.14]

@term[karmavyatihāra] is reciprocal action — "they X each other":

@deva[व्यतिलुनाते] "they cut each other"
@deva[व्यतिपश्येते] "they see each other"

Even normally @term[parasmaipadin] roots take @term[ātmanepada] in reciprocal constructions.

---

## 1.3.16 - @deva[इतरेतरान्योन्योपपदाच्च]

**Key Terms:** itaretara, anyonya, upapada

@deva[इतरेतरान्योन्योपपदात् च] — Also [ātmanepada] when @deva[इतरेतर] or @deva[अन्योन्य] is the @term[upapada].

@sutra[1.3.16]

When "each other" (@deva[इतरेतरम्] / @deva[अन्योन्यम्]) appears explicitly:

@deva[इतरेतरं पश्येते] / @deva[अन्योन्यं पश्येते] "they see each other"

The reciprocal word triggers @term[ātmanepada].

---

## concept - Compound-Specific Rules

Many rules specify @term[ātmanepada] for particular preverb+root combinations.

---

## 1.3.17 - @deva[नेर्विशः]

**Key Terms:** ni, viś

@deva[नेः विशः] — @deva[नि] + @deva[विश्] takes [ātmanepada].

@sutra[1.3.17]

@deva[निविशते] "enters, settles" — specifically with the preverb @deva[नि].

The same root @deva[विश्] without @deva[नि] follows its default (@term[parasmaipada]).

---

## 1.3.18 - @deva[परिव्यवेभ्यः क्रियः]

**Key Terms:** pari, vi, ava, krī

@deva[परिव्यवेभ्यः क्रियः] — @deva[परि/वि/अव] + @deva[क्री] takes [ātmanepada].

@sutra[1.3.18]

- @deva[परिक्रीणाते] "buys"
- @deva[विक्रीणाते] "sells"
- @deva[अवक्रीणाते] "redeems"

The preverb restricts the rule to specific compounds.

---

## 1.3.22 - @deva[समवप्रविभ्यः स्थः]

**Key Terms:** sam, ava, pra, vi, sthā

@deva[समवप्रविभ्यः स्थः] — @deva[सम्/अव/प्र/वि] + @deva[स्था] takes [ātmanepada].

@sutra[1.3.22]

- @deva[संतिष्ठते] "stands together, succeeds"
- @deva[अवतिष्ठते] "stands firm"
- @deva[प्रतिष्ठते] "is established"
- @deva[वितिष्ठते] "spreads out"

But @deva[तिष्ठति] (without these preverbs) is @term[parasmaipada].

---

## 1.3.29 - @deva[समो गम्यृच्छिप्रच्छिस्वरत्यर्तिश्रुविदिभ्यः]

**Key Terms:** sam, gam, ṛcch, pracch, svṛ, ṛ, śru, vid

@deva[समः गम् ऋच्छि प्रच्छि स्वृ अति श्रु विदिभ्यः] — @deva[सम्] + these roots takes [ātmanepada].

@sutra[1.3.29]

A cluster rule for @deva[सम्] compounds:
- @deva[संगच्छते] "meets, agrees" (@deva[सम्] + @deva[गम्])
- @deva[संऋच्छते] "attains" (@deva[सम्] + @deva[ऋच्छ्])
- @deva[संपृच्छते] "asks" (@deva[सम्] + @deva[प्रच्छ्])
- @deva[संश्रुणोते] "promises" (@deva[सम्] + @deva[श्रु])

---

## concept - Meaning-Dependent Rules

Some rules trigger @term[ātmanepada] only in specific meanings.

---

## 1.3.32 - @deva[गन्धनावक्षेपणसेवनसाहसिक्यप्रतियत्नप्रकथनोपयोगेषु कृञः]

**Key Terms:** kṛ, gandhana, sevana

@deva[गन्धनावक्षेपणसेवनसाहसिक्यप्रतियत्नप्रकथनोपयोगेषु कृञः] — @deva[कृ] takes [ātmanepada] in meanings of smearing, throwing away, serving, boldness, effort, narrating, and using.

@sutra[1.3.32]

The versatile root @deva[कृ] "do/make" takes @term[ātmanepada] in these specific senses:
- @deva[गन्धनम्] — anointing: @deva[गन्धं कुरुते] "applies perfume"
- @deva[सेवनम्] — serving: @deva[गुरुं कुरुते] "serves the teacher"
- @deva[उपयोगः] — using: @deva[उदकं कुरुते] "uses water"

But @deva[कुर्वति] "he does/makes" (general sense) is @term[parasmaipada].

---

## 1.3.38 - @deva[वृत्तिसर्गतायनेषु क्रमः]

**Key Terms:** kram, vṛtti, sarga, tāyana

@deva[वृत्तिसर्गतायनेषु क्रमः] — @deva[क्रम्] takes [ātmanepada] in meanings of occupation, emission, and going.

@sutra[1.3.38]

- @deva[वृत्तिः] — livelihood: @deva[वृत्तिं क्रमते] "pursues a livelihood"
- @deva[सर्गः] — discharge: @deva[मूत्रं क्रमते] "urinates"
- @deva[तायनम्] — going: @deva[पन्थानं क्रमते] "travels the path"

---

## 1.3.44 - @deva[अपह्नवे ज्ञः]

**Key Terms:** jñā, apahnava

@deva[अपह्नवे ज्ञः] — @deva[ज्ञा] takes [ātmanepada] in the sense of denial.

@sutra[1.3.44]

@deva[अपजानाते] "denies, disowns" — but @deva[जानाति] "knows" is @term[parasmaipada].

The meaning shifts the voice.

---

## 1.3.57 - @deva[ज्ञाश्रुस्मृदृशां सनः]

**Key Terms:** san, jñā, śru, smṛ, dṛś

@deva[ज्ञाश्रुस्मृदृशां सनः] — The desiderative (@deva[सन्]) of @deva[ज्ञा], @deva[श्रु], @deva[स्मृ], and @deva[दृश्] takes [ātmanepada].

@sutra[1.3.57]

- @deva[जिज्ञासते] "wishes to know" (desid. of @deva[ज्ञा])
- @deva[शुश्रूषते] "wishes to hear, serves" (desid. of @deva[श्रु])
- @deva[सुस्मूर्षते] "wishes to remember" (desid. of @deva[स्मृ])
- @deva[दिदृक्षते] "wishes to see" (desid. of @deva[दृश्])

These desideratives are exclusively @term[ātmanepadin].

---

## 1.3.72 - @deva[स्वरितञितः कर्त्रभिप्राये क्रियाफले]

**Key Terms:** svaritañit, kartṛ, kriyāphala

@deva[स्वरितञितः कर्त्रभिप्राये क्रियाफले] — Roots marked @deva[ञित्] or @term[svarita] take [ātmanepada] when the fruit of the action accrues to the agent.

@sutra[1.3.72]

This is the key rule for @term[ubhayapadin] roots. Many roots are marked @deva[ञ्] in the @term[Dhātupāṭha], indicating they can take EITHER voice:

- @deva[पचति] "cooks [for others]" — fruit goes to someone else
- @deva[पचते] "cooks [for oneself]" — fruit stays with the agent

The semantic criterion: who benefits from the action?

---

## 1.3.78 - @deva[शेषात् कर्तरि परस्मैपदम्]

**Key Terms:** śeṣa, kartṛ, parasmaipada

@deva[शेषात् कर्तरि परस्मैपदम्] — In the remaining [cases], in active voice, @term[parasmaipada] [applies].

@sutra[1.3.78]

This is the DEFAULT rule. After all the specific @term[ātmanepada] rules (1.3.12–77), everything else takes @term[parasmaipada].

It establishes @term[parasmaipada] as the unmarked voice — you only need to specify when @term[ātmanepada] applies.

---

## 1.3.86 - @deva[बुधयुधनशजनेङ्प्रुद्रुस्रुभ्यो णेः]

**Key Terms:** ṇi, budh, yudh, naś

@deva[बुधयुधनशजनेङ्प्रुद्रुस्रुभ्यो णेः] — The causative (@deva[णिच्]) of @deva[बुध्], @deva[युध्], @deva[नश्], @deva[जन्], @deva[इङ्], @deva[प्रु], @deva[द्रु], @deva[स्रु] takes [ātmanepada].

@sutra[1.3.86]

- @deva[बोधयते] "awakens" (caus. of @deva[बुध्])
- @deva[योधयते] "causes to fight" (caus. of @deva[युध्])
- @deva[जनयते] "begets, produces" (caus. of @deva[जन्])

These causatives are @term[ātmanepadin].

---

## 1.3.87 - @deva[निगरणचलनार्थेभ्यश्च]

**Key Terms:** ṇi, nigaraṇa, calana

@deva[निगरणचलनार्थेभ्यः च] — Also causatives of roots meaning "swallow" or "move" [take ātmanepada].

@sutra[1.3.87]

- @deva[ग्रासयते] "causes to swallow"
- @deva[चालयते] "moves, shakes"
- @deva[कम्पयते] "causes to tremble"

The semantic class (swallowing, moving) triggers @term[ātmanepada] for the causative.

---

## concept - The Complete Voice System

The 82 rules (1.3.12–93) form a hierarchical system:

| Priority | Rule Type | Example |
|----------|-----------|---------|
| 1 | Passive/Impersonal | 1.3.13: always @term[ātmanepada] |
| 2 | Root marking | 1.3.12: @term[anudātta]/@term[ṅit] roots |
| 3 | Preverb+Root | 1.3.17–42: specific compounds |
| 4 | Meaning-specific | 1.3.32, 1.3.44: same root, different voice by meaning |
| 5 | Derivative-specific | 1.3.57, 1.3.86: desiderative/causative |
| 6 | Semantic principle | 1.3.72: benefit to agent |
| 7 | Default | 1.3.78: @term[parasmaipada] |

Later rules are overridden by earlier, more specific ones.

---

## concept - The Three Root Classes

From this @term[prakaraṇa] emerge three classes:

**@term[parasmaipadin]** — Unmarked roots (the majority)
- Take @term[parasmaipada] by default (1.3.78)
- Example: @deva[गम्] → @deva[गच्छति]

**@term[ātmanepadin]** — Marked @term[anudātta] or @term[ṅit] (1.3.12)
- Take ONLY @term[ātmanepada] in active voice
- Example: @deva[शीङ्] → @deva[शेते] (never *@deva[शेति])

**@term[ubhayapadin]** — Marked @term[ñit] or @term[svarita] (1.3.72)
- Take EITHER voice depending on meaning
- Example: @deva[पच्] → @deva[पचति]//@deva[पचते]

---

## concept - See It in Action

Watch voice assignment in derivations:

**@deva[भवते]** — @term[ātmanepada] with benefit to agent:

@prakriya[bhU + laT + ta]{highlight=1.3.72}

**@deva[शेते]** — Inherently @term[ātmanepadin] root:

@prakriya[shING + laT + ta]{highlight=1.3.12}

**@deva[गम्यते]** — Passive always takes @term[ātmanepada]:

@prakriya[gam + laT + ta]{highlight=1.3.13}

The voice system interacts with every verbal derivation in Sanskrit.
