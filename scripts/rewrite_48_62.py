#!/usr/bin/env python3
"""Rewrite commentary for sūtras 3.2.48-3.2.62 following guidelines."""

import json

# Load the layered commentary
with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

# Rewritten commentary for 3.2.48-3.2.62
updates = {
    "32048": {
        "en": {
            "simple": """The affix @deva[ड] (whose real part is @deva[अ]) comes after @deva[गम्] 'to go' when these words are in composition: @deva[अन्त] 'end', @deva[अत्यन्त] 'extreme', @deva[अध्वन्] 'road', @deva[दूर] 'far', @deva[पार] 'across', @deva[सर्व] 'all', @deva[अनन्त] 'endless'.

The @deva[ड्] is indicatory (@deva[इत्]) and causes deletion of the @deva[टि] portion (@deva[अम्]) of @deva[गम्].

**Examples:**
- @deva[अन्तगः] 'thoroughly conversant' (gone to the end)
- @deva[अध्वगः] 'wayfarer' (road-goer)
- @deva[सर्वगः] 'omnipresent' (going everywhere)
- @deva[पारगः] 'completely familiar' (gone across)""",
            "standard": """The affix @deva[ड] comes after @deva[गम्] 'to go' with @deva[अन्त], @deva[अत्यन्त], @deva[अध्वन्], @deva[दूर], @deva[पार], @deva[सर्व], @deva[अनन्त]. The @deva[अनुवृत्ति] of @deva[संज्ञायाम्] does **not** extend here.

**Affix structure:** @deva[ड्] is @deva[इत्]; real affix is @deva[अ]. The @deva[ड्] triggers @deva[टि]-elision (@ref[6.4.143]): @deva[अन्त] + @deva[गम्] + @deva[ड] = @deva[अन्त] + @deva[ग] + @deva[अ] = @deva[अन्तगः]

| @deva[उपपद] | Form | Meaning |
|------|------|---------|
| @deva[अन्त] | @deva[अन्तगः] | thoroughly conversant |
| @deva[अध्वन्] | @deva[अध्वगः] | wayfarer |
| @deva[सर्व] | @deva[सर्वगः] | omnipresent |
| @deva[पार] | @deva[पारगः] | completely familiar |

**Vārtikas:** @deva[सर्वत्रगः] 'Supreme Spirit', @deva[पन्नगः] 'snake', @deva[उरगः] 'snake' (@deva[उरस्] + @deva[गम्], final elided), @deva[सुगः] 'easy of access', @deva[दुर्गः] 'fort', @deva[निर्गः] 'a country'.""",
            "advanced": """The affix @deva[ड] comes after @deva[गम्] 'to go' with @deva[अन्त], @deva[अत्यन्त], @deva[अध्वन्], @deva[दूर], @deva[पार], @deva[सर्व], @deva[अनन्त]. @deva[संज्ञायाम्] does **not** extend here.

**Affix structure:** @deva[ड्] is @deva[इत्]; real affix is @deva[अ]. @deva[ड्] triggers @deva[टि]-elision (@ref[6.4.143]).

**Derivation:** @deva[अन्त] + @deva[गम्] + @deva[ड] = @deva[अन्त] + @deva[ग्] + @deva[अ] → @deva[अन्तगः]

**Note on @ref[6.4.143]:** That rule requires a @deva[भ]-ending word, but @deva[गम्] is not @deva[भ]. The @deva[ड्] marker must have effect, so elision occurs anyway.

**Vārtikas:**
1. @deva[सर्वत्र] and @deva[पन्न]: @deva[सर्वत्रगः] 'Supreme Spirit', @deva[पन्नगः] 'snake'
2. @deva[उरस्] with final elision: @deva[उरगः] 'snake' (moving on breast)
3. @deva[सु]/[दुर्] with locative sense: @deva[सुगः] 'easy of access', @deva[दुर्गः] 'fort'
4. @deva[निर्] with country sense: @deva[निर्गः] 'a country'
5. Some say @deva[ड] applies with other @deva[उपपद]s too: @deva[ग्रामगः], @deva[गुरुतल्पगः]"""
        }
    },
    "32049": {
        "en": {
            "simple": """The affix @deva[ड] comes after @deva[हन्] 'to kill' when the object is in composition and **benediction** (@deva[आशीः]) is intended.

**Examples:**
- @deva[तिमिहः] 'may he kill the whale'
- @deva[शत्रुहः] 'may he kill the enemy'

**Without benediction:** @deva[शत्रुघातः] 'one who kills enemies' (uses @deva[अण्] instead).""",
            "standard": """The affix @deva[ड] comes after @deva[हन्] 'to kill' when the object is in composition and @deva[आशीः] (benediction) is intended.

**Examples:**
- @deva[तिमिं वध्यात्] = @deva[तिमिहः] 'may he kill the whale'
- @deva[शत्रुहः] 'may he kill the enemy'

**Without @deva[आशीः]:** @deva[शत्रुघातः] 'one who kills enemies' (general @deva[अण्])

**Vārtikas:**
1. @deva[आहन्] + @deva[दारु] + @deva[अण्] = @deva[दार्वाघाटः] 'woodpecker' (final → @deva[ट])
2. @deva[चारु] + @deva[आहन्]: @deva[चार्वाघाटः] or @deva[चार्वाघातः] (optional)
3. @deva[सम्] + @deva[हन्] + @deva[अण्] with final → @deva[ट]: @deva[वर्णसङ्घाटः]/[सङ्घातः] 'alphabet'""",
            "advanced": """The affix @deva[ड] comes after @deva[हन्] 'to kill' when object in composition and @deva[आशीः] (benediction) intended.

**Examples:** @deva[तिमिहः], @deva[शत्रुहः]

**Without @deva[आशीः]:** @deva[शत्रुघातः]

**Vārtikas:**
1. @deva[अण्] after @deva[आहन्] with @deva[दारु], final → @deva[ट], @deva[संज्ञा]: @deva[दार्वाघाटः] 'woodpecker'
2. Optional with @deva[चारु]: @deva[चार्वाघाटः] or @deva[चार्वाघातः]
3. @deva[सम्] + @deva[हन्] + @deva[अण्], final optionally → @deva[ट]: @deva[वर्णसङ्घाटः]/[वर्णसङ्घातः] 'alphabet', @deva[पदसङ्घाटः]/[पदसङ्घातः] 'annotator'"""
        }
    },
    "32050": {
        "en": {
            "simple": """The affix @deva[ड] comes after @deva[हन्] 'to kill' when compounded with prefix @deva[अप्] and the object is @deva[क्लेश] 'pain' or @deva[तमस्] 'darkness'.

**Examples:**
- @deva[क्लेशापहः पुत्रः] 'the son who allays pain'
- @deva[तमोऽपहः सूर्यः] 'the sun that destroys darkness'

This applies when **not** expressing benediction.""",
            "standard": """The affix @deva[ड] comes after @deva[हन्] 'to kill' with @deva[अप्] when @deva[क्लेश] 'pain' or @deva[तमस्] 'darkness' is in composition.

**Examples:**
- @deva[क्लेशापहः पुत्रः] 'pain-allayer, the son'
- @deva[तमोऽपहः सूर्यः] 'darkness-destroyer, the sun'

**Scope:** When @deva[आशीः] (benediction) is **not** intended (cf. @ref[3.2.49]).""",
            "advanced": """The affix @deva[ड] comes after @deva[हन्] with @deva[अप्] when @deva[क्लेश] or @deva[तमस्] is object.

**Examples:** @deva[क्लेशापहः पुत्रः], @deva[तमोऽपहः सूर्यः]

**Scope:** When @deva[आशीः] is **not** intended. This sūtra specifies the non-benedictive application of @deva[ड] after @deva[अपहन्] with these specific @deva[उपपद]s."""
        }
    },
    "32051": {
        "en": {
            "simple": """The affix @deva[णिनि] (whose real part is @deva[इन्]) comes after @deva[हन्] 'to kill' when @deva[कुमार] 'child' or @deva[शीर्ष] 'head' is in composition.

**Derivation:** @deva[कुमार] + @deva[हन्] + @deva[णिनि] = @deva[कुमारघातिन्] (nom. @deva[कुमारघाती]) 'child-killer'

**Examples:**
- @deva[कुमारघाती] 'child-killer'
- @deva[शीर्षघाती] 'head-striker'

**Note:** @deva[शीर्ष] is an irregular form of @deva[शिरस्] 'head'.""",
            "standard": """The affix @deva[णिनि] comes after @deva[हन्] 'to kill' when @deva[कुमार] 'child' or @deva[शीर्ष] 'head' is in composition.

**Derivation:** @deva[कुमार] + @deva[हन्] + @deva[णिनि] = @deva[कुमार] + @deva[घात] + @deva[इन्] (by @ref[7.3.54], @ref[7.3.32]) = @deva[कुमारघातिन्]

| @deva[उपपद] | Form | Nominative |
|------|------|------------|
| @deva[कुमार] | @deva[कुमारघातिन्] | @deva[कुमारघाती] 'child-killer' |
| @deva[शीर्ष] | @deva[शीर्षघातिन्] | @deva[शीर्षघाती] 'head-striker' |

**Note:** @deva[शीर्ष] is an irregular form of @deva[शिरस्].""",
            "advanced": """The affix @deva[णिनि] comes after @deva[हन्] when @deva[कुमार] or @deva[शीर्ष] is in composition.

**Derivation:** @deva[कुमार] + @deva[हन्] + @deva[णिनि] = @deva[कुमार] + @deva[घात] + @deva[इन्] (@ref[7.3.54], @ref[7.3.32]) = @deva[कुमारघातिन्], nom. @deva[कुमारघाती] 'child-killer'

Similarly: @deva[शीर्षघातिन्], nom. @deva[शीर्षघाती] 'head-striker'

**Note:** @deva[शीर्ष] is an irregular form of @deva[शिरस्]."""
        }
    },
    "32052": {
        "en": {
            "simple": """The affix @deva[टक्] (whose real part is @deva[अ]) comes after @deva[हन्] 'to kill' when @deva[जाया] 'wife' or @deva[पति] 'husband' is in composition, and the sense is **characteristic** (@deva[लक्षण]).

**Examples:**
- @deva[जायाघ्नः] 'wife-killer' or 'a mole (body mark indicating wife's death)'
- @deva[पतिघ्नी] 'husband-killer' (feminine with @deva[ई])

**Affix structure:**
- @deva[ट्] (indicatory): feminine takes @deva[ई]
- @deva[क्] (indicatory): causes deletion of @deva[अ] in @deva[हन्]""",
            "standard": """The affix @deva[टक्] comes after @deva[हन्] 'to kill' with @deva[जाया] 'wife' or @deva[पति] 'husband' as object, when @deva[लक्षण] (characteristic/mark) is intended.

**Derivation:** @deva[जाया] + @deva[हन्] + @deva[टक्] = @deva[जाया] + @deva[ह्न्] + @deva[अ] (@ref[6.4.98]) = @deva[जायाघ्नः] (@ref[7.3.54])

**@deva[लक्षण] interpretations:**
1. @deva[लक्षणे कर्तरि]: agent as mark — @deva[जायाघ्नः] 'a mole' (body mark indicating wife's death)
2. @deva[लक्षणवति कर्तरि]: agent with attribute — @deva[जायाघ्नः] 'wife-killer'

**Affix structure:** @deva[ट्] (→ feminine @deva[ई]); @deva[क्] (→ @deva[अ]-elision in @deva[हन्])""",
            "advanced": """The affix @deva[टक्] comes after @deva[हन्] with @deva[जाया] or @deva[पति] as object when @deva[लक्षण] is intended.

**Derivation:** @deva[जाया] + @deva[हन्] + @deva[टक्] = @deva[जाया] + @deva[ह्न्] + @deva[अ] (by @ref[6.4.98]) = @deva[जायाघ्नः] (by @ref[7.3.54])

**@deva[लक्षण] ambiguity:** The word @deva[लक्षणा] admits two interpretations:
1. @deva[लक्षणे कर्तरि] — agent is itself the mark: @deva[जायाघ्नः] 'a mole' (body mark indicating wife's death)
2. @deva[लक्षणवति कर्तरि] — agent possesses the attribute: @deva[जायाघ्नः] 'wife-killer', @deva[पतिघ्नी] 'husband-killer'

**Affix structure:** @deva[ट्] is @deva[इत्] (feminine @deva[ई]); @deva[क्] is @deva[इत्] (causes @deva[अ]-elision of @deva[हन्])"""
        }
    },
    "32053": {
        "en": {
            "simple": """The affix @deva[टक्] comes after @deva[हन्] 'to kill' when the agent is **not a human being** (@deva[अमनुष्यकर्तृ]).

**Examples:**
- @deva[जायाघ्नः तिलकालकः] 'the mole' (mark indicating wife's death)
- @deva[पतिघ्नी पाणिरेखा] 'the palm line' (indicating husband's death)
- @deva[श्लेष्मघ्नं मधु] 'honey' (destroys phlegm)
- @deva[पित्तघ्नं घृतम्] 'ghee' (destroys bile)

**When human agent:** @deva[आखुघातः शूद्रः] 'a Śūdra who kills mice' (uses @deva[अण्]).""",
            "standard": """The affix @deva[टक्] comes after @deva[हन्] when the object is in composition and the agent is **not a human being** (@deva[अमनुष्यकर्तृ]).

**Examples:**
- @deva[जायाघ्नस्तिलकालकः] 'the mole' (mark indicating wife's death)
- @deva[पतिघ्नी पाणिरेखा] 'palm line' (indicating husband's death)
- @deva[श्लेष्मघ्नं मधु] 'honey' (destroys phlegm)
- @deva[पित्तघ्नं घृतम्] 'ghee' (destroys bile)

**Why @deva[अमनुष्यकर्तृ]?** With human agent, @deva[अण्] applies: @deva[आखुघातः शूद्रः] 'a Śūdra who kills mice'

**Exception:** @deva[चौरघातो हस्ती] 'elephant that kills thieves' uses @deva[अण्] by analogy with @ref[3.3.113].""",
            "advanced": """The affix @deva[टक्] comes after @deva[हन्] with object in composition when agent is @deva[अमनुष्यकर्तृ] (non-human).

**Examples:** @deva[जायाघ्नस्तिलकालकः] 'mole', @deva[पतिघ्नी पाणिरेखा] 'palm line', @deva[श्लेष्मघ्नं मधु] 'honey', @deva[पित्तघ्नं घृतम्] 'ghee'

**Why condition?** With human agent: @deva[आखुघातः शूद्रः] (uses @deva[अण्])

**Counter-example:** @deva[चौरघातो हस्ती] 'thief-killing elephant' — uses @deva[अण्] by analogy with @ref[3.3.113] (diversity in @deva[कृत्य] affixes extended to @deva[कृत्])"""
        }
    },
    "32054": {
        "en": {
            "simple": """The affix @deva[टक्] comes after @deva[हन्] 'to kill' when @deva[हस्ति] 'elephant' or @deva[कपाट] 'gate' is in composition and the sense is **power** (@deva[शक्ति]).

**Examples:**
- @deva[हस्तिघ्नः मनुष्यः] 'a man capable of killing an elephant'
- @deva[कपाटघ्नः] 'a burglar' (capable of breaking gates)

**Without power sense:** @deva[हस्तिघातः] 'one who kills an elephant (with poison etc.)' uses @deva[अण्].""",
            "standard": """The affix @deva[टक्] comes after @deva[हन्] when @deva[हस्ति] 'elephant' or @deva[कपाट] 'gate' is in composition and @deva[शक्ति] (power/capability) is intended.

This applies when the agent is a **human being**.

**Examples:**
- @deva[हस्तिनं हन्तुं शक्तः] = @deva[हस्तिघ्नः मनुष्यः] 'man capable of killing an elephant'
- @deva[कपाटघ्नः] 'burglar' (capable of breaking gates)

**Why @deva[शक्ति]?** Without power sense: @deva[विषेण हस्तिनं हन्ति] = @deva[हस्तिघातः] 'who kills elephant (by poison)' — uses @deva[अण्]""",
            "advanced": """The affix @deva[टक्] comes after @deva[हन्] with @deva[हस्ति] or @deva[कपाट] as object when @deva[शक्ति] (power) is indicated. This applies to human agents.

**Derivation:** @deva[हस्तिनं हन्तुं शक्तः] = @deva[हस्तिघ्नः मनुष्यः] 'man capable of killing an elephant'

Similarly: @deva[कपाटघ्नः] 'burglar' (capable of breaking gates)

**Why @deva[शक्ति] condition?** When power is not indicated: @deva[विषेण हस्तिनं हन्ति] = @deva[हस्तिघातः] (uses @deva[अण्])"""
        }
    },
    "32055": {
        "en": {
            "simple": """The words @deva[पाणिघः] 'drummer' and @deva[ताडघः] 'smith' are **irregularly** formed (@deva[निपातन]) when denoting an artisan.

**Formation:** The affix @deva[क] is used after @deva[हन्], the @deva[टि] portion (@deva[अन्]) is deleted, and @deva[ह] irregularly becomes @deva[घ].

**Without artisan sense:**
- @deva[पाणिघातः] 'boxing'
- @deva[ताडघातः] 'hammering'

**Vārtika:** @deva[राजघः] 'regicide' is also enumerated here.""",
            "standard": """The words @deva[पाणिघः] and @deva[ताडघः] are @deva[निपातन] (irregular) when denoting an artisan.

**Irregular formation:** @deva[पाणि] + @deva[हन्] + @deva[क] → @deva[टि]-elision → @deva[ह] → @deva[घ] (irregular) = @deva[पाणिघः] 'drummer/craftsman'

| Word | Meaning (artisan) | Non-artisan form |
|------|-------------------|------------------|
| @deva[पाणिघः] | drummer, handicraftsman | @deva[पाणिघातः] 'boxing' |
| @deva[ताडघः] | smith | @deva[ताडघातः] 'hammering' |

**Vārtika:** @deva[राजघः] 'regicide' should also be enumerated.""",
            "advanced": """The words @deva[पाणिघः] and @deva[ताडघः] are @deva[निपातन] when denoting an artisan.

**Irregular derivation:** @deva[पाणि] + @deva[हन्] + @deva[क] = @deva[पाणि] + @deva[ह्] + @deva[अ] (@deva[टि]-elision) → @deva[पाणिघः] (irregular @deva[ह] → @deva[घ])

| Word | Artisan sense | Non-artisan form |
|------|---------------|------------------|
| @deva[पाणिघः] | drummer, craftsman | @deva[पाणिघातः] 'boxing' |
| @deva[ताडघः] | smith | @deva[ताडघातः] 'hammering' |

**Vārtika:** @deva[राजघः] 'regicide' should be enumerated here."""
        }
    },
    "32056": {
        "en": {
            "simple": """The affix @deva[ख्युन्] (whose real part is @deva[अन्]) comes after @deva[कृ] 'to make' when these words are in composition and the sense is **instrumental**: @deva[आढ्य] 'rich', @deva[सुभग] 'fortunate', @deva[स्थूल] 'big', @deva[पलित] 'grey', @deva[नग्न] 'naked', @deva[अन्ध] 'blind', @deva[प्रिय] 'pleasant'.

The condition is @deva[च्वि]-sense (attaining a new condition) but the @deva[उपपद] does **not** actually end in @deva[च्वि].

**Examples:**
- @deva[आढ्यङ्करणम्] 'means of enriching' (that by which one becomes rich)
- @deva[भयङ्करणम्] 'cause of fear'""",
            "standard": """The affix @deva[ख्युन्] comes after @deva[कृ] with @deva[आढ्य], @deva[सुभग], @deva[स्थूल], @deva[पलित], @deva[नग्न], @deva[अन्ध], @deva[प्रिय] when:
1. The sense is **instrumental** (@deva[करण])
2. The @deva[उपपद] has @deva[च्वि]-sense (attaining new condition)
3. The @deva[उपपद] does **not** actually end in @deva[च्वि]

**Derivation:** @deva[आढ्य] + @deva[कृ] + @deva[ख्युन्] = @deva[आढ्य] + @deva[कर्] + @deva[अन्] = @deva[आढ्यङ्करणम्] 'means of enriching'

**Examples:** @deva[सुभगङ्करणम्] 'making happy', @deva[अन्धङ्करणम्] 'making blind', @deva[प्रियङ्करणम्] 'showing kindness'

**Why @deva[च्वि]-sense but not @deva[च्वि]-ending?** With actual @deva[च्वि]: @deva[आढ्यी कुर्वन्ति अनेन] — @deva[ख्युन्] does not apply.""",
            "advanced": """The affix @deva[ख्युन्] comes after @deva[कृ] with @deva[आढ्य], @deva[सुभग], @deva[स्थूल], @deva[पलित], @deva[नग्न], @deva[अन्ध], @deva[प्रिय] when instrumental sense, @deva[च्वि]-sense but not @deva[च्वि]-ending.

**@deva[च्वि] (@ref[5.4.50]):** Added to nouns with @deva[भू], @deva[कृ], @deva[अस्] meaning 'attaining a condition not previously held'. Being optional, the @deva[च्वि]-sense exists with or without the affix.

**This sūtra:** Applies when @deva[च्वि]-sense present but @deva[उपपद] doesn't end in @deva[च्वि].

**Derivation:** @deva[आढ्यं करणम्] = @deva[आढ्यङ्करणम्] 'means of enriching'

**Counter-examples:**
- Without @deva[च्वि]-sense: @deva[आढ्यं तैलेन कुर्वन्ति] (anointing) — not applicable
- With @deva[च्वि]-ending: @deva[आढ्यी कुर्वन्ति अनेन] — @deva[ख्युन्] blocked; @deva[ल्युट्] also blocked by implication

**Note (Patañjali):** The @deva[च्वि]-prohibition seems superfluous since @deva[ल्युट्] and @deva[ख्युन्] have identical results. But the prohibition extends to @deva[ल्युट्] by implication and is needed for subsequent sūtras."""
        }
    },
    "32057": {
        "en": {
            "simple": """The affixes @deva[खिष्णुच्] and @deva[खुकञ्] come after @deva[भू] 'to become' when the sense is **agent** (@deva[कर्तृ]) and the @deva[उपपद] has @deva[च्वि]-sense but doesn't end in @deva[च्वि].

**Examples:**
- @deva[आढ्यम्भविष्णुः] or @deva[आढ्यम्भावुकः] 'one becoming rich'
- @deva[सुभगम्भविष्णुः] or @deva[सुभगम्भावुकः] 'one becoming fortunate'

These apply to the same @deva[उपपद]s as the previous sūtra.""",
            "standard": """The affixes @deva[खिष्णुच्] (= @deva[इष्णु]) and @deva[खुकञ्] (= @deva[उक]) come after @deva[भू] 'to become' with the same @deva[उपपद]s as @ref[3.2.56], when @deva[कर्तृ] (agent) is intended and @deva[च्वि]-sense but not @deva[च्वि]-ending.

| @deva[उपपद] | @deva[खिष्णुच्] | @deva[खुकञ्] |
|------|---------|---------|
| @deva[आढ्य] | @deva[आढ्यम्भविष्णुः] | @deva[आढ्यम्भावुकः] |
| @deva[सुभग] | @deva[सुभगम्भविष्णुः] | @deva[सुभगम्भावुकः] |
| @deva[नग्न] | @deva[नग्नम्भविष्णुः] | @deva[नग्नम्भावुकः] |

**Why @deva[कर्तृ]?** Not for instrumental sense.

**Not with @deva[च्वि]-ending:** @deva[आढ्यी भविता] 'he will be rich' — affixes don't apply.""",
            "advanced": """The affixes @deva[खिष्णुच्] and @deva[खुकञ्] come after @deva[भू] when @deva[कर्तृ] is intended with @deva[च्वि]-sense but not @deva[च्वि]-ending.

**Examples:** @deva[आढ्यम्भविष्णुः]/[आढ्यम्भावुकः] 'becoming rich', @deva[प्रियम्भविष्णुः]/[प्रियम्भावुकः] 'becoming an object of affection, amiable'

**Conditions:**
1. @deva[कर्तृ] sense (not instrumental)
2. @deva[च्वि]-sense present
3. @deva[उपपद] not ending in @deva[च्वि]

**Counter-example:** @deva[आढ्यी भविता] 'he will be rich' (actual @deva[च्वि]-ending) — affixes don't apply"""
        }
    },
    "32058": {
        "en": {
            "simple": """The affix @deva[क्विन्] comes after @deva[स्पृश्] 'to touch' when in composition with a case-ending word **other than** @deva[उदक] 'water'.

**Derivation:** @deva[घृतं स्पृशति] = @deva[घृतस्पृक्] 'one who touches ghee'

**Examples:**
- @deva[घृतस्पृक्] 'one who touches ghee'
- @deva[मन्त्रस्पृक्] 'one who touches with hymns'
- @deva[जलस्पृक्] 'one who touches with water'

**With @deva[उदक]:** @deva[उदकस्पर्शः] (uses general @deva[अण्]).""",
            "standard": """The affix @deva[क्विन्] comes after @deva[स्पृश्] 'to touch' when a @deva[सुप्]-ending word (other than @deva[उदक]) is in composition.

@deva[सुपि] from @ref[3.2.4] is understood here.

**Derivation:** @deva[घृतं स्पृशति] = @deva[घृतस्पृश्], nom. @deva[घृतस्पृक्]
- @deva[स्पृश्] + @deva[क्विन्] + @deva[सु] = @deva[स्पृश्] + @deva[वि] + @deva[०] (@ref[6.1.68]) = @deva[स्पृक्] (@ref[6.1.67], @ref[8.2.62])

**Examples:** @deva[घृतस्पृक्], @deva[मन्त्रस्पृक्], @deva[जलस्पृक्]

**Exception:** @deva[उदकेन स्पृशति] = @deva[उदकस्पर्शः] (uses @deva[अण्])

**Why @deva[न्] in @deva[क्विन्]?** To distinguish from @deva[क्विप्] in @ref[8.2.62].""",
            "advanced": """The affix @deva[क्विन्] comes after @deva[स्पृश्] when @deva[सुप्]-ending word (except @deva[उदक]) is in composition.

@deva[सुपि] from @ref[3.2.4] understood. Why not @deva[कर्म]? Because @deva[कर्तरि] from previous sūtra indicates all agent types (objects, instruments, etc.), requiring @deva[सुप्] in general.

**Derivation:** @deva[घृतं स्पृशति] = @deva[घृतस्पृश्], nom. @deva[घृतस्पृक्]
- @deva[स्पृश्] + @deva[क्विन्] + @deva[सु] = @deva[स्पृक्] (by @ref[6.1.68], @ref[6.1.67], @ref[8.2.62])

**Exception:** @deva[उदकेन स्पृशति] = @deva[उदकस्पर्शः] (general @deva[अण्])

**Why @deva[न्] in @deva[क्विन्]?** To distinguish from @deva[क्विप्]. Otherwise @ref[8.2.62] (@deva[क्वि प्रत्ययस्य कुः]) would be ambiguous. The @deva[न्] is not for accent—monosyllabic verbs get final accent anyway (@ref[6.1.117])."""
        }
    },
    "32059": {
        "en": {
            "simple": """These words are **irregularly** formed with @deva[क्विन्]:

1. @deva[ऋत्विक्] 'domestic priest' (from @deva[ऋतु] + @deva[यज्])
2. @deva[दधृक्] 'impudent' (from @deva[धृष्], with reduplication)
3. @deva[स्रक्] 'garland' (from @deva[सृज्], with augment)
4. @deva[दिक्] 'direction' (from @deva[दृश्])
5. @deva[उष्णिक्] 'quatrain' (from @deva[उत्] + @deva[स्निह्])

Also, @deva[क्विन्] comes after @deva[अञ्चु], @deva[युज्], @deva[क्रुञ्च] (with some irregularities).""",
            "standard": """These words are @deva[निपातन] with @deva[क्विन्]:

| Word | Derivation | Meaning | Irregularity |
|------|------------|---------|--------------|
| @deva[ऋत्विक्] | @deva[ऋतु] + @deva[यज्] + @deva[क्विन्] | domestic priest | @deva[रूढि] |
| @deva[दधृक्] | @deva[धृष्] + @deva[क्विन्] | impudent | reduplication |
| @deva[स्रक्] | @deva[सृज्] + @deva[क्विन्] | garland | @deva[अस्] augment |
| @deva[दिक्] | @deva[दृश्] + @deva[क्विन्] | direction | — |
| @deva[उष्णिक्] | @deva[उत्] + @deva[स्निह्] + @deva[क्विन्] | quatrain | — |

**Also @deva[क्विन्] after:**
- @deva[अञ्चु] (with @deva[सुप्]): @deva[प्राङ्] 'east', @deva[प्रत्यङ्] 'west', @deva[उदङ्] 'north'
- @deva[युज्] (without @deva[उपपद]): @deva[युङ्] 'who joins' (with @deva[उपपद], uses @deva[क्विप्]: @deva[अश्वयुक्])
- @deva[क्रुञ्च्] (without @deva[उपपद]): @deva[क्रुङ्] 'curlew' (irregular @deva[ञ] retention)""",
            "advanced": """These words are @deva[निपातन] with @deva[क्विन्]:

1. @deva[ऋत्विक्] — @deva[ऋतु] + @deva[यज्] + @deva[क्विन्]. @deva[रूढि] word; etymology secondary.
2. @deva[दधृक्] — @deva[धृष्] + @deva[क्विन्]. Irregular reduplication, final @deva[उदात्त].
3. @deva[स्रक्] — @deva[सृज्] + @deva[क्विन्]. Irregular @deva[अस्] augment.
4. @deva[दिक्] — @deva[दृश्] + @deva[क्विन्]
5. @deva[उष्णिक्] — @deva[उत्] + @deva[स्निह्] + @deva[क्विन्]

**Also @deva[क्विन्] after:**
- @deva[अञ्चु] with @deva[सुप्]: @deva[प्र] + @deva[अञ्चु] + @deva[क्विन्] = @deva[प्राञ्च्], nom. @deva[प्राङ्] (@ref[6.4.24], @ref[7.1.70], @ref[8.2.23], @ref[8.2.62])
- @deva[युजिर्] uncombined: @deva[युज्] + @deva[क्विन्] = @deva[युज्], nom. @deva[युङ्] (@ref[7.1.71], @ref[6.1.68], @ref[8.2.62]). With @deva[उपपद]: @deva[क्विप्] instead → @deva[अश्वयुक्]
- @deva[क्रुञ्च्] uncombined: nom. @deva[क्रुङ्] 'curlew'. Non-elision of @deva[ञ] (@ref[6.4.24]) is irregular, listed with other irregular forms."""
        }
    },
    "32060": {
        "en": {
            "simple": """Both @deva[कञ्] and @deva[क्विन्] come after @deva[दृश्] 'to see' when in composition with @deva[त्यद्]-class pronouns (like @deva[तद्], @deva[यद्], @deva[किम्]) and the sense is **not** perception.

**Examples:**
- @deva[तादृक्] or @deva[तादृशः] 'such-like'
- @deva[यादृक्] or @deva[यादृशः] 'what-like'
- @deva[कीदृक्] or @deva[कीदृशः] 'of what kind'

**When perception is meant:** @deva[तं पश्यति] = @deva[तद्दर्शः] 'who sees that' (different form).""",
            "standard": """Both @deva[कञ्] and @deva[क्विन्] come after @deva[दृश्] 'to see' with @deva[त्यदादि] pronouns (@ref[1.1.27]) when **not** signifying perception.

**Derivation:** @deva[तद्] + @deva[दृश्] + @deva[क्विन्] = @deva[तादृश्] (@ref[6.3.91]), nom. @deva[तादृक्] (@ref[6.1.68], @ref[8.2.36], @ref[8.2.62], @ref[8.4.56])

| Pronoun | @deva[क्विन्] | @deva[कञ्] |
|---------|---------|---------|
| @deva[तद्] | @deva[तादृक्] | @deva[तादृशः] |
| @deva[यद्] | @deva[यादृक्] | @deva[यादृशः] |
| @deva[किम्] | @deva[कीदृक्] | @deva[कीदृशः] |

**Why @deva[ञ्] in @deva[कञ्]?** For @deva[उदात्त] on first syllable (@ref[6.1.117]). Also distinguishes @deva[कञ्] from @deva[कन्] in @ref[4.1.15].

**Vārtikas:** Also with @deva[समान] (@deva[सदृक्]/[सदृशः] @ref[6.3.89]), @deva[अन्य] (@deva[अन्यादृक्]/[अन्यादृशः]). Also @deva[क्स] affix: @deva[तादृक्षः], @deva[यादृक्षः].""",
            "advanced": """Both @deva[कञ्] and @deva[क्विन्] come after @deva[दृश्] with @deva[त्यदादि] pronouns when not signifying perception.

**Derivation (with @deva[क्विन्]):** @deva[तद्] + @deva[दृश्] + @deva[क्विन्] = @deva[तादृश्] (by @ref[6.3.91]), nom. @deva[तादृक्] (by @ref[6.1.68], @ref[8.2.36], @ref[8.2.62], @ref[8.4.56])

**Why @deva[ञ्] in @deva[कञ्]?** @deva[उदात्त] on first syllable (@ref[6.1.117]). Also distinguishes from @deva[कन्] — otherwise @deva[कञ्करप्] in @ref[4.1.15] would read @deva[कन्क्वरप्], making @deva[यावकः] → @deva[यावकी] (wrong; should be @deva[यावका]).

**Why 'not perception'?** @deva[तादृक्] etc. are crude nouns; etymological sense of 'seeing' not visible. With perception: @deva[तं पश्यति] = @deva[तद्दर्शः]

**Vārtikas:**
1. With @deva[समान], @deva[अन्य]: @deva[सदृक्]/[सदृशः] (@ref[6.3.89]), @deva[अन्यादृक्]/[अन्यादृशः]
2. @deva[क्स] affix also: @deva[तद्] + @deva[दृश्] + @deva[क्स] = @deva[तादृक्षः] (by @ref[6.3.91], @ref[8.2.36], @ref[8.2.41], @ref[8.3.59])"""
        }
    },
    "32061": {
        "en": {
            "simple": """The affix @deva[क्विप्] comes after these twelve roots when in composition with a case-ending word (including @deva[उपसर्ग]s):

@deva[सद्] 'to sit', @deva[सू] 'to bring forth', @deva[द्विष्] 'to hate', @deva[द्रुह्] 'to bear malice', @deva[दुह्] 'to milk', @deva[युज्] 'to join', @deva[विद्] 'to know', @deva[भिद्] 'to divide', @deva[छिद्] 'to cut', @deva[जि] 'to conquer', @deva[नी] 'to lead', @deva[राज्] 'to shine'

**Examples:** @deva[शुचिषत्] 'dwelling in purity', @deva[गोधुक्] 'cow-milker', @deva[वेदवित्] 'knower of Veda', @deva[शत्रुजित्] 'enemy-conqueror', @deva[सेनानीः] 'army-leader', @deva[सम्राट्] 'emperor'""",
            "standard": """The affix @deva[क्विप्] comes after @deva[सद्], @deva[सू], @deva[द्विष्], @deva[द्रुह्], @deva[दुह्], @deva[युज्], @deva[विद्], @deva[भिद्], @deva[छिद्], @deva[जि], @deva[नी], @deva[राज्] when a @deva[सुप्]-ending word (including @deva[उपसर्ग]) is in composition.

@deva[सुपि] (not @deva[कर्म]) is understood. Special mention of @deva[उपसर्ग] here implies that @deva[सुप्] elsewhere doesn't include @deva[उपसर्ग] (@ref[2.1.10]).

| Root | Example | Meaning |
|------|---------|---------|
| @deva[सद्] | @deva[शुचिषत्], @deva[उपसत्] | dwelling in purity, serving |
| @deva[सू] | @deva[अण्डसूः], @deva[शतसूः] | oviparous, bearing hundred |
| @deva[द्विष्] | @deva[मित्रद्विट्] | treacherous |
| @deva[दुह्] | @deva[गोधुक्] | cow-milker |
| @deva[युज्] | @deva[अश्वयुक्] | carriage |
| @deva[विद्] | @deva[वेदवित्], @deva[ब्रह्मवित्] | knower of Veda/Brahma |
| @deva[जि] | @deva[शत्रुजित्] | enemy-conqueror |
| @deva[नी] | @deva[सेनानीः], @deva[ग्रामणीः] | army-leader, head-borough |
| @deva[राज्] | @deva[विराट्], @deva[सम्राट्] | splendour, emperor |

**Notes:** @deva[सू] = @deva[अदादि] class. @deva[विद्] = 'to know/consider' (not @deva[विद्लृ] 'to gain'). Cerebral @deva[ण] in @deva[सेनानीः] by @ref[5.2.78], @ref[8.4.3].""",
            "advanced": """The affix @deva[क्विप्] comes after @deva[सद्], @deva[सू], @deva[द्विष्], @deva[द्रुह्], @deva[दुह्], @deva[युज्], @deva[विद्], @deva[भिद्], @deva[छिद्], @deva[जि], @deva[नी], @deva[राज्] with @deva[सुप्]-ending word (including @deva[उपसर्ग]).

**@deva[सुपि] vs @deva[कर्मणि]:** @deva[सुपि] understood (same reasons as @ref[3.2.58]). @deva[उपसर्ग]s are @deva[सुबन्त] words. Their special mention here is @deva[ज्ञापक] that @deva[सुप्] elsewhere excludes @deva[उपसर्ग] (@ref[2.1.10]).

**Root specifications:**
- @deva[सू]: @deva[अदादि] class (not @deva[तुदादि])
- @deva[युज्]: both @deva[युजिर्] 'to join' and @deva[युज्] 'to concentrate'
- @deva[विद्]: @deva[विद्] 'to know/consider' (with indicatory @deva[अ]), not @deva[विद्लृ] 'to gain'

**Examples:** @deva[शुचिषत्] 'dwelling in purity', @deva[अण्डसूः] 'oviparous', @deva[मित्रद्विट्] 'treacherous', @deva[गोधुक्] 'cow-milker', @deva[अश्वयुक्] 'carriage', @deva[वेदवित्] 'Veda-knower', @deva[शत्रुजित्] 'enemy-conqueror', @deva[सेनानीः] 'army-leader' (cerebral @deva[ण] by @ref[5.2.78], @ref[8.4.3]), @deva[सम्राट्] 'emperor' (@deva[म] by @ref[8.3.25])

This sūtra continues and expands @ref[3.2.75-76]."""
        }
    },
    "32062": {
        "en": {
            "simple": """The affix @deva[ण्वि] comes after @deva[भज्] 'to share' when in composition with a case-ending word (including @deva[उपसर्ग]).

**Examples:**
- @deva[अर्धं भजते] = @deva[अर्धभाक्] 'sharing a half'
- @deva[प्रभाक्] 'division' (with @deva[उपसर्ग] @deva[प्र])""",
            "standard": """The affix @deva[ण्वि] comes after @deva[भज्] 'to share' with @deva[सुप्]-ending word (including @deva[उपसर्ग]).

@deva[उपसर्ग] and @deva[सुपि] understood from @ref[3.2.61].

**Derivation:** @deva[अर्धं भजते] = @deva[अर्धभाज्], nom. @deva[अर्धभाक्] 'sharing a half'

**With @deva[उपसर्ग]:** @deva[प्रभाक्] 'division'""",
            "advanced": """The affix @deva[ण्वि] comes after @deva[भज्] 'to share' with @deva[सुप्]-ending word (including @deva[उपसर्ग]).

@deva[उपसर्ग] and @deva[सुपि] understood from @ref[3.2.61].

**Derivation:** @deva[अर्धं भजते] = @deva[अर्धभाज्], nom. @deva[अर्धभाक्] 'sharing a half'

**With @deva[उपसर्ग]:** @deva[प्रभाक्] 'division'"""
        }
    }
}

# Update the commentary
for sutra_id, content in updates.items():
    commentary[sutra_id] = content

# Write back
with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sūtras 3.2.48-3.2.62")
