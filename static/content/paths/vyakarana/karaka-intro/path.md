---
id: karaka-intro
order: 25
title: कारकम् — Semantic Roles
titleSanskrit: कारकप्रकरणम्
label: कारकम्
track: grammar
category: karaka
description: Understand the six @term[kāraka] — the semantic roles linking @term[subanta] to @term[kriyā]. Foundation of case syntax.
difficulty: intermediate
estimatedTime: 3-4 hours
prerequisites:
  - subanta-pratipadika
---

## concept - What Are Kārakas?

In English, word order tells you who does what: "The boy kicks the ball" vs. "The ball kicks the boy." Sanskrit doesn't rely on word order — it uses **case endings** instead. But case endings aren't assigned randomly. They're assigned based on **semantic roles** called @deva[कारक].

A @deva[कारक] is a participant in an action. Consider: @deva[देवदत्तः दात्रेण ग्रामे तृणं लुनाति] — "Devadatta cuts grass in the village with a sickle."

Every noun in that sentence plays a role:

| Noun            | Role                         | Case                  | Sanskrit      |
| --------------- | ---------------------------- | --------------------- | ------------- |
| @deva[देवदत्तः] | The one who acts (agent)     | 1st (@deva[प्रथमा])   | @deva[कर्ता]  |
| @deva[तृणम्]    | What is acted upon (object)  | 2nd (@deva[द्वितीया]) | @deva[कर्म]   |
| @deva[दात्रेण]  | The chief means (instrument) | 3rd (@deva[तृतीया])   | @deva[करण]    |
| @deva[ग्रामे]   | Where it happens (location)  | 7th (@deva[सप्तमी])   | @deva[अधिकरण] |

Pāṇini defines **six kārakas** — six ways a noun can relate to the verb's action. The kāraka determines which case ending the noun gets.

---

## concept - The Six Kārakas at a Glance

Here is the complete system. We'll explore each one in detail below.

| @deva[कारक]      | English    | Definition               | Typical Case            | Example               |
| ---------------- | ---------- | ------------------------ | ----------------------- | --------------------- |
| @deva[कर्ता]     | Agent      | Independent actor        | 1st (or 3rd in passive) | @deva[रामः पचति]      |
| @deva[कर्म]      | Object     | Most desired goal        | 2nd                     | @deva[ओदनं पचति]      |
| @deva[करण]       | Instrument | Chief means              | 3rd                     | @deva[दात्रेण लुनाति] |
| @deva[सम्प्रदान] | Recipient  | Intended receiver        | 4th                     | @deva[विप्राय ददाति]  |
| @deva[अपादान]    | Source     | Fixed point of departure | 5th                     | @deva[वृक्षात् पतति]  |
| @deva[अधिकरण]    | Locus      | Container of the action  | 7th                     | @deva[कटे आस्ते]      |

Notice: there are seven cases in Sanskrit but only six kārakas. The 6th case (@deva[षष्ठी], genitive) is **not** a kāraka — it expresses possession and other relations that don't directly participate in the action (@ref[2.3.50]).

---

## @ref[1.4.23] - कारके

**Key Terms:** @deva[कारक], @deva[क्रिया]

@deva[कारके] — This is an @deva[अधिकार] (heading rule) that governs all the kāraka definitions that follow.

@sutra[1.4.23]

The word @deva[कारक] literally means "that which brings about" (from @deva[कृ] "to do" + @deva[ण्वुल्]). Anything that participates in accomplishing an action is a @deva[कारक]. This heading rule tells us: the next set of rules defines specific types of participants.

---

## @ref[1.4.54] - स्वतन्त्रः कर्ता

**Key Terms:** @deva[स्वतन्त्र], @deva[कर्तृ]

@deva[स्वतन्त्रः कर्ता] — The independent one is the @deva[कर्ता] (agent).

@sutra[1.4.54]

The agent is whoever the speaker treats as the **independent, self-motivated source** of the action. This is a speaker's choice, not an objective fact:

- @deva[देवदत्तः पचति] "Devadatta cooks" — Devadatta is the agent
- @deva[स्थाली पचति] "The pot cooks" — the pot is treated as the agent
- @deva[देवदत्तेन ओदनः पच्यते] "Rice is cooked by Devadatta" — in passive, Devadatta is still the @deva[कर्ता], but now takes 3rd case (instrumental) instead of 1st

Key insight: @deva[कर्ता] is the semantic role — the case ending depends on whether the sentence is active or passive.

---

## @ref[1.4.49] - कर्तुरीप्सिततमं कर्म

**Key Terms:** @deva[कर्तृ], @deva[ईप्सिततम], @deva[कर्मन्]

@deva[कर्तुरीप्सिततमं कर्म] — That which the agent most desires to reach through the action is the @deva[कर्म] (object).

@sutra[1.4.49]

The object is what the action aims at — the thing most affected or most desired:

- @deva[ओदनं पचति] "he cooks rice" — rice is what he wants cooked
- @deva[ग्रामं गच्छति] "he goes to the village" — the village is the goal
- @deva[कटं करोति] "he makes a mat" — the mat is what comes into being

The word @deva[ईप्सिततम] ("most desired") is important. When multiple things are affected, the **most** desired one is the primary @deva[कर्म]:

- @deva[देवदत्तं शतं दण्डयति] "he fines Devadatta a hundred" — Devadatta is the primary object (most directly affected)

---

## @ref[1.4.42] - साधकतमं करणम्

**Key Terms:** @deva[साधकतम], @deva[करण]

@deva[साधकतमं करणम्] — That which is most instrumental in accomplishing the action is @deva[करण] (instrument).

@sutra[1.4.42]

The instrument is the chief tool or means — the thing without which the action couldn't happen:

- @deva[दात्रेण लुनाति] "he cuts with a sickle" — the sickle is the chief means
- @deva[परशुना छिनत्ति] "he chops with an axe" — the axe does the work
- @deva[चक्षुषा पश्यति] "he sees with his eyes" — eyes are the instrument of seeing

The superlative @deva[साधकतम] ("most instrumental") distinguishes the primary instrument from other helpers. If you cut grass with a sickle while wearing gloves, the sickle is @deva[करण] — the gloves are just accessories.

---

## @ref[1.4.32] - कर्मणा यमभिप्रैति स सम्प्रदानम्

**Key Terms:** @deva[कर्मन्], @deva[अभिप्रैति], @deva[सम्प्रदान]

@deva[कर्मणा यमभिप्रैति स सम्प्रदानम्] — The one whom the agent intends to reach with the object is @deva[सम्प्रदान] (recipient).

@sutra[1.4.32]

The recipient is the intended destination of a gift or transfer:

- @deva[उपाध्यायाय गां ददाति] "he gives a cow to the teacher" — the teacher receives
- @deva[विप्राय धनं यच्छति] "he offers wealth to the Brahmin" — the Brahmin is the intended recipient

The definition is precise: the recipient must be the person the agent _intends_ to connect with the object. If you throw a ball to your friend but a stranger catches it, your friend is still the @deva[सम्प्रदान] — it's about intention, not outcome.

---

## @ref[1.4.24] - ध्रुवमपायेऽपादानम्

**Key Terms:** @deva[ध्रुव], @deva[अपाय], @deva[अपादान]

@deva[ध्रुवमपायेऽपादानम्] — A fixed point from which departure takes place is @deva[अपादान] (source).

@sutra[1.4.24]

The source is the fixed reference point that something moves away from:

- @deva[ग्रामादागच्छति] "he comes from the village" — the village is fixed, he departs
- @deva[वृक्षात् पत्रं पतति] "a leaf falls from the tree" — the tree is fixed
- @deva[पर्वतादवरोहति] "he descends from the mountain" — the mountain stays

The word @deva[ध्रुव] ("fixed, immovable") is the key condition. The source must be treated as the stable reference point. This extends beyond physical movement to abstract cases:

- @deva[आचार्यात् अधीते] "he studies from the teacher" — knowledge departs from the teacher
- @deva[चोरात् बिभेति] "he fears the thief" — fear originates from the thief (@ref[1.4.25])

---

## @ref[1.4.45] - आधारोऽधिकरणम्

**Key Terms:** @deva[आधार], @deva[अधिकरण]

@deva[आधारोऽधिकरणम्] — The container or support of the action is @deva[अधिकरण] (locus).

@sutra[1.4.45]

The locus is where or when the action happens — the spatial, temporal, or abstract container:

- @deva[कटे आस्ते] "he sits on the mat" — spatial locus
- @deva[स्थाल्यां पचति] "he cooks in the pot" — spatial container
- @deva[मासे गच्छति] "he goes in a month" — temporal locus
- @deva[मोक्षे इच्छा] "desire for liberation" — abstract locus

Three sub-types of @deva[अधिकरण]:

1. @deva[औपश्लेषिक] — contact ("on the mat")
2. @deva[वैषयिक] — containing ("in the pot")
3. @deva[अभिव्यापक] — pervading ("in every direction")

---

## concept - From Kāraka to Case: The Bridge Rules

Knowing the six kārakas is only half the picture. You also need to know which **case ending** expresses each kāraka. This is where Adhyāya 2, Pāda 3 comes in.

The bridge is governed by a crucial heading rule:

---

## @ref[2.3.1] - अनभिहिते

**Key Terms:** @deva[अनभिहित], @deva[कारक]

@deva[अनभिहिते] — Case endings apply when the kāraka meaning is "not otherwise expressed."

@sutra[2.3.1]

This is an elegant constraint. If the verb form already expresses the agent (as in active voice @deva[पचति] "he cooks" — the @deva[ति] ending tells you it's third person), then you don't need a separate case ending for the agent. The case ending is only needed when the role is @deva[अनभिहित] — not yet expressed.

This is why the agent takes 1st case in active voice but 3rd case in passive:

- Active: @deva[रामः पचति] — @deva[ति] expresses the agent, so @deva[राम] gets default 1st case
- Passive: @deva[रामेण पच्यते] — @deva[ते] expresses the object, so the agent needs 3rd case to be expressed

---

## @ref[2.3.2] - कर्मणि द्वितीया

**Key Terms:** @deva[कर्मन्], @deva[द्वितीया]

@deva[कर्मणि द्वितीया] — The 2nd case (@deva[द्वितीया]) expresses the object (@deva[कर्म]).

@sutra[2.3.2]

- @deva[कटं करोति] "he makes a mat" — @deva[कटम्] is 2nd case (accusative)
- @deva[ग्रामं गच्छति] "he goes to the village" — @deva[ग्रामम्] is 2nd case
- @deva[रामं पश्यति] "he sees Rāma" — @deva[रामम्] is 2nd case

---

## @ref[2.3.18] - कर्तृकरणयोस्तृतीया

**Key Terms:** @deva[कर्तृ], @deva[करण], @deva[तृतीया]

@deva[कर्तृकरणयोस्तृतीया] — The 3rd case (@deva[तृतीया]) expresses agent and instrument.

@sutra[2.3.18]

The 3rd case has double duty — it expresses both @deva[करण] (instrument) and @deva[कर्ता] (agent in passive):

- @deva[दात्रेण लुनाति] "he cuts with a sickle" — instrument
- @deva[रामेण कृतम्] "done by Rāma" — agent in passive

How do you tell them apart? Context. If the sentence is passive (@deva[कर्मणि] voice), the 3rd-case noun is the agent. If active, it's the instrument.

---

## @ref[2.3.28] - अपादाने पञ्चमी

**Key Terms:** @deva[अपादान], @deva[पञ्चमी]

@deva[अपादाने पञ्चमी] — The 5th case (@deva[पञ्चमी]) expresses the source (@deva[अपादान]).

@sutra[2.3.28]

- @deva[ग्रामादागच्छति] "he comes from the village" — @deva[ग्रामात्] is 5th case
- @deva[वृक्षात् पतति] "he falls from the tree" — @deva[वृक्षात्] is 5th case
- @deva[गुरोः अधीते] "he studies from the teacher" — @deva[गुरोः] is 5th case

---

## @ref[2.3.36] - सप्तम्यधिकरणे च

**Key Terms:** @deva[सप्तमी], @deva[अधिकरण]

@deva[सप्तम्यधिकरणे च] — The 7th case (@deva[सप्तमी]) expresses the locus (@deva[अधिकरण]).

@sutra[2.3.36]

- @deva[कटे आस्ते] "he sits on the mat" — @deva[कटे] is 7th case
- @deva[स्थाल्यां पचति] "he cooks in the pot" — @deva[स्थाल्याम्] is 7th case
- @deva[ग्रामे वसति] "he lives in the village" — @deva[ग्रामे] is 7th case

---

## concept - Sentence Analysis Practice

Let's analyze a complete sentence using the kāraka framework:

**@deva[रामः वने परशुना वृक्षात् पर्णानि लुनाति]**
"Rāma cuts leaves from the tree with an axe in the forest."

| Word            | Case | Kāraka                                    | Rule                        |
| --------------- | ---- | ----------------------------------------- | --------------------------- |
| @deva[रामः]     | 1st  | @deva[कर्ता] — the independent actor      | @ref[1.4.54]                |
| @deva[पर्णानि]  | 2nd  | @deva[कर्म] — what he desires to cut      | @ref[1.4.49] → @ref[2.3.2]  |
| @deva[परशुना]   | 3rd  | @deva[करण] — the chief instrument         | @ref[1.4.42] → @ref[2.3.18] |
| @deva[वृक्षात्] | 5th  | @deva[अपादान] — fixed point of separation | @ref[1.4.24] → @ref[2.3.28] |
| @deva[वने]      | 7th  | @deva[अधिकरण] — the locus of action       | @ref[1.4.45] → @ref[2.3.36] |

Try analyzing these yourself:

1. @deva[बालकः गृहे पुस्तकं पठति] — "The boy reads a book at home."
2. @deva[माता पुत्राय भोजनं ददाति] — "The mother gives food to her son."
3. @deva[नद्याः जलं ग्रामं प्रति गच्छति] — "Water from the river goes toward the village."

---

## concept - The Complete Kāraka–Vibhakti Map

Here is the full mapping from semantic role to case ending:

| Kāraka           | Definition Rule | Case Rule    | Case | When                       |
| ---------------- | --------------- | ------------ | ---- | -------------------------- |
| @deva[कर्ता]     | @ref[1.4.54]    | —            | 1st  | Active voice               |
| @deva[कर्ता]     | @ref[1.4.54]    | @ref[2.3.18] | 3rd  | Passive voice              |
| @deva[कर्म]      | @ref[1.4.49]    | @ref[2.3.2]  | 2nd  | When not expressed by verb |
| @deva[करण]       | @ref[1.4.42]    | @ref[2.3.18] | 3rd  | Always                     |
| @deva[सम्प्रदान] | @ref[1.4.32]    | @ref[2.3.13] | 4th  | Always                     |
| @deva[अपादान]    | @ref[1.4.24]    | @ref[2.3.28] | 5th  | Always                     |
| @deva[अधिकरण]    | @ref[1.4.45]    | @ref[2.3.36] | 7th  | Always                     |
| — (relation)     | —               | @ref[2.3.50] | 6th  | Not a kāraka               |

The 1st case (@deva[प्रथमा]) has no specific kāraka assignment — it's the default when no other case applies (@ref[2.3.46]).

---

## concept - What's Next

The kāraka system is the bridge between meaning and form in Sanskrit. You now understand:

- The six semantic roles and how they're defined
- The @deva[अनभिहित] principle: case endings fill what the verb doesn't express
- How each kāraka maps to a specific @deva[विभक्ति]

Next paths to explore:

- **A-stem declension**: See how these case endings are actually realized on common noun stems
- **Passive voice**: How @deva[कर्मणि] constructions rearrange the kāraka-to-case mapping
- **Special case uses**: Many @deva[विभक्ति] rules go beyond the basic kāraka mappings
