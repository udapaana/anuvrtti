#!/usr/bin/env python3
"""Rewrite commentary for sūtras 3.2.63-3.2.77 following guidelines."""

import json

# Load the layered commentary
with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

# Rewritten commentary for 3.2.63-3.2.77
updates = {
    "32063": {
        "en": {
            "simple": """In the Vedas (@deva[छन्दस्]), the affix @deva[ण्वि] comes after @deva[सह्] 'to bear' when a case-ending word is in composition.

**Example:** @deva[तुर] + @deva[सह्] + @deva[ण्वि] = @deva[तुरासाह्], nom. @deva[तुराषाट्] 'name of Indra'

The final @deva[अ] of @deva[तुर] is lengthened. The @deva[स] becomes @deva[ष], and @deva[ह्] becomes @deva[ट].""",
            "standard": """In @deva[छन्दस्] (Vedas), the affix @deva[ण्वि] comes after @deva[सह्] 'to bear' with @deva[सुप्]-ending word (including @deva[उपसर्ग]).

**Derivation:** @deva[तुर] + @deva[सह्] + @deva[ण्वि] = @deva[तुरासाह्], nom. @deva[तुराषाट्] 'name of Indra'
- Final @deva[अ] lengthened by @ref[6.3.137]
- @deva[स] → @deva[ष] by @ref[8.3.56]
- @deva[ह्] → @deva[ट] by @ref[8.2.31]

See @deva[ऋग्वेद] I.175.2.""",
            "advanced": """In @deva[छन्दस्], the affix @deva[ण्वि] comes after @deva[सह्] 'to bear' with @deva[सुप्]-ending word (including @deva[उपसर्ग]).

**Derivation:** @deva[तुर] + @deva[सह्] + @deva[ण्वि] = @deva[तुरासाह्], nom. @deva[तुराषाट्] 'name of Indra'
- @ref[6.3.137]: final @deva[अ] → @deva[आ]
- @ref[8.3.56]: @deva[स] → @deva[ष]
- @ref[8.2.31]: @deva[ह्] → @deva[ट]

Reference: @deva[ऋग्वेद] I.175.2. See also @ref[3.4.5]."""
        }
    },
    "32064": {
        "en": {
            "simple": """In the Vedas (@deva[छन्दस्]), the affix @deva[ण्वि] comes after @deva[वह्] 'to carry' when a case-ending word is in composition.

**Examples:**
- @deva[प्रष्ठवाह्], nom. @deva[प्रष्ठवाट्] 'carrying a @deva[प्रस्थ] measure'
- @deva[दित्यवाट्]

This sūtra is separated from the previous one so that @deva[वह्] (not @deva[सह्]) carries into subsequent sūtras.""",
            "standard": """In @deva[छन्दस्], the affix @deva[ण्वि] comes after @deva[वह्] 'to carry' with @deva[सुप्]-ending word.

**Examples:**
- @deva[प्रष्ठवाह्], nom. @deva[प्रष्ठवाट्] 'carrying a @deva[प्रस्थ] measure'
- @deva[दित्यवाट्]

**Why separate from @ref[3.2.63]?** To carry @deva[वह्]'s @deva[अनुवृत्ति] (not @deva[सह्]) into subsequent sūtras.

References: @deva[यजुर्वेद] XIV.10, XVIII.26.""",
            "advanced": """In @deva[छन्दस्], the affix @deva[ण्वि] comes after @deva[वह्] 'to carry' with @deva[सुप्]-ending word.

**Examples:** @deva[प्रष्ठवाह्], nom. @deva[प्रष्ठवाट्] 'carrying a @deva[प्रस्थ] measure'; @deva[दित्यवाट्]

**Why separate?** Division from @ref[3.2.63] ensures @deva[वह्]'s @deva[अनुवृत्ति] (not @deva[सह्]) into subsequent sūtras.

References: @deva[यजुर्वेद] XIV.10, XVIII.26."""
        }
    },
    "32065": {
        "en": {
            "simple": """In the Vedas (@deva[छन्दस्]), the affix @deva[ञ्युट्] comes after @deva[वह्] 'to carry' when @deva[कव्य] 'oblation to ancestors', @deva[पुरीष] 'faeces', or @deva[पुरीष्य] 'water' is in composition.

**Examples:**
- @deva[कव्यवाहनः पितॄणाम्] 'fire that carries oblations to the ancestors'
- @deva[पुरीषवाहनः] 'carrier of water'

Feminine is formed with long @deva[ई].""",
            "standard": """In @deva[छन्दस्], the affix @deva[ञ्युट्] comes after @deva[वह्] 'to carry' with @deva[कव्य], @deva[पुरीष], or @deva[पुरीष्य].

**Examples:**
- @deva[कव्यवाहनः पितॄणाम्] 'fire carrying oblation to @deva[पितृ]s' (@deva[यजुर्वेद] II.29)
- @deva[पुरीषवाहनः] 'carrier of water'
- @deva[पुरीष्यवाहनः] (@deva[यजुर्वेद] XI.44)

**Feminine:** with long @deva[ई].""",
            "advanced": """In @deva[छन्दस्], the affix @deva[ञ्युट्] comes after @deva[वह्] with @deva[कव्य] 'oblation to deceased ancestors', @deva[पुरीष] 'faeces', or @deva[पुरीष्य] 'water'.

**Examples:**
- @deva[कव्यवाहनः पितॄणाम्] 'fire carrying oblation to @deva[पितृ]s' (@deva[यजुर्वेद] II.29)
- @deva[पुरीषवाहनः] 'carrier of water'
- @deva[पुरीष्यवाहनः] (@deva[यजुर्वेद] XI.44)

**Feminine:** formed by adding long @deva[ई]."""
        }
    },
    "32066": {
        "en": {
            "simple": """In the Vedas, the affix @deva[ञ्युट्] comes after @deva[वह्] 'to carry' with @deva[हव्य] 'oblation to gods'—but **only** when the word does not occur in the middle of a verse-quarter (@deva[पाद]).

**At end of @deva[पाद]:** @deva[अग्निश्च हव्यवाहनः] 'fire, carrier of oblation to gods' (@deva[ऋग्वेद] I.44.2)

**At beginning/middle:** @deva[हव्यवाट्] (uses @deva[ण्वि] from @ref[3.2.64] instead)""",
            "standard": """In @deva[छन्दस्], the affix @deva[ञ्युट्] comes after @deva[वह्] with @deva[हव्य] 'oblation to gods', provided the word is **not** in the middle of a @deva[पाद] (verse-quarter).

**At @deva[पाद]-end:** @deva[अग्निश्च हव्यवाहनः] 'fire, carrier of oblation' (@deva[ऋग्वेद] I.44.2)

**At @deva[पाद]-beginning/middle:** @deva[हव्यवाट्] (by @deva[ण्वि], @ref[3.2.64])
- @deva[हव्यवाडग्निरजरः पिता नः] (@deva[ऋग्वेद] III.2.2)""",
            "advanced": """In @deva[छन्दस्], the affix @deva[ञ्युट्] comes after @deva[वह्] with @deva[हव्य] 'oblation to gods', conditioned by position: **not** in middle of @deva[पाद].

**At @deva[पाद]-end:** @deva[अग्निश्च हव्यवाहनः] 'fire, carrier of oblation' (@deva[ऋग्वेद] I.44.2)

**At @deva[पाद]-beginning/middle:** @deva[हव्यवाट्] (by @deva[ण्वि], @ref[3.2.64])
- @deva[हव्यवाडग्निरजरः पिता नः] 'the undecaying fire that carries oblation is our father' (@deva[ऋग्वेद] III.2.2)"""
        }
    },
    "32067": {
        "en": {
            "simple": """In the Vedas, the affix @deva[विट्] (which is entirely deleted) comes after @deva[जन्] 'to be born', @deva[सन्] 'to bestow', @deva[खन्] 'to dig', @deva[क्रम्] 'to pace', @deva[गम्] 'to go'—and the final nasal becomes long @deva[आ].

**Examples:**
- @deva[अब्जाः] 'born in water' (from @deva[अप्] + @deva[जन्])
- @deva[गोषाः] 'acquiring cows' (from @deva[गो] + @deva[सन्])
- @deva[दधिक्राः] 'who gets milk' (from @deva[क्रम्])
- @deva[अग्रेगाः] 'leader' (from @deva[गम्])""",
            "standard": """In @deva[छन्दस्], the affix @deva[विट्] comes after @deva[जन्], @deva[सन्], @deva[खन्], @deva[क्रम्], @deva[गम्] with @deva[सुप्]/[उपसर्ग]. The final nasal → long @deva[आ], and the affix is entirely deleted.

**Affix structure:** @deva[ट्] is @deva[इत्], triggering @ref[6.4.41] (nasal → @deva[आ]). Affix deleted by @ref[6.1.67].

| Root | Example | Reference |
|------|---------|-----------|
| @deva[जन्] | @deva[अब्जाः] 'water-born' | @deva[ऋग्वेद] VII.34.16 |
| @deva[सन्] | @deva[गोषाः] 'cow-giver' | @deva[ऋग्वेद] IX.2.10 |
| @deva[खन्] | @deva[विसखाः] 'lotus-digger' | — |
| @deva[क्रम्] | @deva[दधिक्राः] 'milk-getter' | @deva[ऋग्वेद] IV.39.1 |
| @deva[गम्] | @deva[अग्रेगाः] 'leader' | — |

**Note:** @deva[जन्] includes 'to be born' and 'to happen'; @deva[सन्] includes 'to give' and 'to worship'.""",
            "advanced": """In @deva[छन्दस्], the affix @deva[विट्] comes after @deva[जन्], @deva[सन्], @deva[खन्], @deva[क्रम्], @deva[गम्] with @deva[सुप्]/[उपसर्ग]. Final nasal → long @deva[आ]; affix entirely deleted.

**Affix mechanism:** @deva[ट्] is @deva[इत्] and qualifies as in @ref[6.4.41], causing nasal → @deva[आ]. Whole affix deleted by @ref[6.1.67].

**Examples:**
- @deva[अप्] + @deva[जन्] + @deva[विट्] = @deva[अब्जाः] 'water-born' (@deva[ऋग्वेद] VII.34.16)
- @deva[गो] + @deva[सन्] + @deva[विट्] = @deva[गोषाः] 'cow-giver' (@ref[8.3.108], @deva[ऋग्वेद] IX.2.10)
- @deva[खन्]: @deva[विसखाः] 'lotus-digger', @deva[कपूखाः] 'well-digger'
- @deva[क्रम्]: @deva[दधिक्राः] 'milk-getter' (@deva[ऋग्वेद] IV.39.1, 40.5)
- @deva[गम्]: @deva[अग्रेगा उन्नेतॄणाम्] 'leader'

**Root scope:** @deva[जन्] = 'to be born' and 'to happen'; @deva[सन्] = 'to give' and 'to worship'."""
        }
    },
    "32068": {
        "en": {
            "simple": """The affix @deva[विट्] comes after @deva[अद्] 'to eat' when a case-ending word **other than** @deva[अन्न] 'food' is in composition.

**Examples:**
- @deva[आममत्ति] = @deva[आमात्] 'eating raw food'
- @deva[शस्यात्] 'granivorous'

**With @deva[अन्न]:** @deva[अन्नादः] 'food-eater' (uses general @deva[अण्] by @ref[3.2.1])

This rule applies in both Vedic and modern Sanskrit (not just @deva[छन्दस्]).""",
            "standard": """The affix @deva[विट्] comes after @deva[अद्] 'to eat' with @deva[सुप्]-ending word **except** @deva[अन्न] 'food'.

@deva[छन्दसि] does **not** extend here—applies in modern Sanskrit too.

**Examples:**
- @deva[आममत्ति] = @deva[आमात्] 'eating raw food'
- @deva[शस्यात्] 'granivorous'

**Exception:** @deva[अन्न] + @deva[अद्] = @deva[अन्नादः] 'food-eater' (general @deva[अण्] by @ref[3.2.1])""",
            "advanced": """The affix @deva[विट्] comes after @deva[अद्] 'to eat' with @deva[सुप्]-ending word except @deva[अन्न].

@deva[छन्दसि] does **not** extend here.

**Examples:** @deva[आमात्] 'raw-food-eater', @deva[शस्यात्] 'granivorous'

**Exception:** @deva[अन्नादः] 'food-eater' (by @deva[अण्], @ref[3.2.1])"""
        }
    },
    "32069": {
        "en": {
            "simple": """The affix @deva[विट्] comes after @deva[अद्] 'to eat' when @deva[क्रव्य] 'flesh' is in composition.

**Example:** @deva[क्रव्यमत्ति] = @deva[क्रव्यात्] 'carnivorous' (eating raw flesh—said of animals)

**Note:** @deva[क्रव्यादः] (with @deva[अण्]) means a person who eats cooked meat (a meat-eater as opposed to vegetarian).""",
            "standard": """The affix @deva[विट्] comes after @deva[अद्] with @deva[क्रव्य] 'flesh'.

**Example:** @deva[क्रव्यमत्ति] = @deva[क्रव्यात्] 'carnivorous'

**Why separate sūtra?** A vārtika explains: @deva[वासरूप] (@ref[3.1.94]) doesn't apply here, so @deva[अण्] is not an alternative.

**@deva[क्रव्यात्] vs @deva[क्रव्यादः]:**
- @deva[क्रव्यात्] = animal eating raw flesh
- @deva[क्रव्यादः] = person eating cooked meat (irregular, @deva[पृषोदरादि] by @ref[6.3.109])""",
            "advanced": """The affix @deva[विट्] comes after @deva[अद्] with @deva[क्रव्य] 'flesh'.

**Example:** @deva[क्रव्यात्] 'carnivorous'

**Why separate sūtra?** Vārtika: @deva[वासरूप] (@ref[3.1.94]) doesn't apply, blocking @deva[अण्] alternative.

**Semantic distinction:**
- @deva[क्रव्यात्] = animal eating raw flesh
- @deva[क्रव्यादः] = person eating cooked meat (irregular @deva[पृषोदरादि] form, @ref[6.3.109])"""
        }
    },
    "32070": {
        "en": {
            "simple": """The affix @deva[कप्] comes after @deva[दुह्] 'to milk' when a case-ending word is in composition, and the final @deva[ह्] is replaced by @deva[घ].

**Examples:**
- @deva[कामदुघा धेनुः] 'a milch cow giving abundance of milk'
- @deva[अर्थदुघा] 'yielding wealth'
- @deva[धर्मदुघा] 'yielding merit'""",
            "standard": """The affix @deva[कप्] comes after @deva[दुह्] 'to milk' with @deva[सुप्]-ending word, and final @deva[ह्] → @deva[घ].

**Derivation:** @deva[कामं दोग्धि] = @deva[कामदुघा धेनुः] 'milch cow giving abundance of milk'

**Examples:** @deva[कामदुघा], @deva[अर्थदुघा] 'wealth-yielding', @deva[धर्मदुघा] 'merit-yielding'""",
            "advanced": """The affix @deva[कप्] comes after @deva[दुह्] with @deva[सुप्]-ending word; final @deva[ह्] → @deva[घ].

**Examples:** @deva[कामदुघा धेनुः] 'milch cow', @deva[अर्थदुघा], @deva[धर्मदुघा]"""
        }
    },
    "32071": {
        "en": {
            "simple": """In @deva[मन्त्र] literature, the affix @deva[ण्विन्] comes after these words (which already contain verb + @deva[उपपद]):

1. @deva[श्वेतवाह्] → @deva[श्वेतवाः] 'name of Indra' (whom white horses carry)
2. @deva[उक्थशास्] → @deva[उक्थशाः] 'reciter of hymns' (nasal irregularly dropped)
3. @deva[पुरोडाश्] → @deva[पुरोडाः] 'an offering' (@deva[द] → @deva[ड])

A @deva[उस्] augment is added before @deva[पद] affixes.""",
            "standard": """In @deva[मन्त्र] literature, the affix @deva[ण्विन्] comes after @deva[श्वेतवह], @deva[उक्थशंस्], @deva[पुरोडाश्]. These contain both verb and @deva[उपपद], indicating irregularities.

| Word | Derivation | Irregularity |
|------|------------|--------------|
| @deva[श्वेतवाः] | @deva[श्वेता एनं वहन्ति] | agent-form denotes object |
| @deva[उक्थशाः] | @deva[उक्थानि शंसति] | nasal dropped |
| @deva[पुरोडाः] | @deva[पुरो दाशन्ति एनं] | @deva[द] → @deva[ड]; agent denotes object |

**Vārtika:** @deva[उस्] augment before @deva[पद] affixes. Thus @deva[श्वेतवाह्] → @deva[श्वेतवस्] before @deva[पद]:
- Inst. dual: @deva[श्वेतवोभ्याम्], pl: @deva[श्वेतवोभिः]
- But @deva[सर्वनामस्थान]/[भ]: @deva[श्वेतवाहौ], @deva[श्वेतवाहः]""",
            "advanced": """In @deva[मन्त्र] literature, @deva[ण्विन्] comes after @deva[श्वेतवह], @deva[उक्थशंस्], @deva[पुरोडाश्]. Words given with verb+@deva[उपपद] indicate irregularities.

**Irregularities:**
1. @deva[श्वेतवाह्], nom. @deva[श्वेतवाः] 'Indra' — @deva[कर्तृ]-form but @deva[कर्म]-sense (whom white horses carry)
2. @deva[उक्थशास्], nom. @deva[उक्थशाः] — nasal of @deva[शंस्] irregularly dropped (@deva[ऋग्वेद] II.39.1)
3. @deva[पुरोडाश्], nom. @deva[पुरोडाः] — @deva[द] → @deva[ड]; @deva[कर्तृ]-form but @deva[कर्म]-sense (@deva[ऋग्वेद] III.28.2)

**Vārtika:** @deva[उस्] augment before @deva[पद] affixes: @deva[श्वेतवाह्] → @deva[श्वेतवस्]. Thus Inst. dual @deva[श्वेतवोभ्याम्], pl. @deva[श्वेतवोभिः]. Not before @deva[सर्वनामस्थान]/[भ]: @deva[श्वेतवाहौ], @deva[श्वेतवाहः]."""
        }
    },
    "32072": {
        "en": {
            "simple": """In @deva[मन्त्र] literature, the affix @deva[ण्विन्] comes after @deva[यज्] 'to sacrifice' when @deva[अव] precedes.

**Example:** @deva[अवयाज्], nom. @deva[अवयाः] 'name of a Vedic priest'

This sūtra is separated so that @deva[यज्] (not the previous roots) carries into subsequent sūtras.""",
            "standard": """In @deva[मन्त्र] literature, @deva[ण्विन्] comes after @deva[यज्] 'to sacrifice' with @deva[अव].

**Example:** @deva[अवयाज्], nom. @deva[अवयाः] 'Vedic priest' (@deva[ऋग्वेद] I.173.12)
- @deva[त्वं यज्ञे वरुणस्यावया असि] 'Thou art the priest of Varuṇa in sacrifice'

**Why separate?** Carries @deva[यज्]'s @deva[अनुवृत्ति] (not previous roots) into subsequent sūtras.

**Declension:** 1st @deva[अवयाः], @deva[अवयाजौ], @deva[अवयाजः]; 3rd @deva[अवयाजा], @deva[अवयोभ्याम्], @deva[अवयोभिः]""",
            "advanced": """In @deva[मन्त्र] literature, @deva[ण्विन्] comes after @deva[यज्] with @deva[अव].

**Example:** @deva[अवयाज्], nom. @deva[अवयाः] 'Vedic priest' (@deva[ऋग्वेद] I.173.12)

**Why separate?** Division ensures @deva[यज्]'s @deva[अनुवृत्ति] (not previous roots) into subsequent sūtras.

**Declension:**
- 1st: @deva[अवयाः], @deva[अवयाजौ], @deva[अवयाजः]
- 2nd: @deva[अवयाजम्], @deva[अवयाजौ], @deva[अवयाजः]
- 3rd: @deva[अवयाजा], @deva[अवयोभ्याम्], @deva[अवयोभिः]"""
        }
    },
    "32073": {
        "en": {
            "simple": """In the Vedas, the affix @deva[विच्] comes after @deva[यज्] 'to sacrifice' when @deva[उप] precedes.

**Example:** @deva[उपयज्] 'name of eleven formulas at a sacrifice'
- @deva[उपयग्भिरूर्ध्वं वहन्ति] 'they carry it up with the @deva[उपयज्] formulas'

The @deva[च्] in @deva[विच्] groups this affix with others called @deva[वि].""",
            "standard": """In @deva[छन्दस्], the affix @deva[विच्] comes after @deva[यज्] with @deva[उप].

**Example:** @deva[उपयज्] 'eleven formulas at sacrifice'
- @deva[उपयग्भिरूर्ध्वं वहन्ति] 'they carry it up with the @deva[उपयज्] formulas'

**Why @deva[छन्दसि] repeated?** Though @deva[मन्त्र] @deva[अनुवृत्ति] was present, repetition includes @deva[ब्राह्मण] literature.

**Why @deva[च्] in @deva[विच्]?** Groups it with @deva[वि]-class (@deva[क्विन्], @deva[क्विप्], @deva[ण्वि], @deva[विट्]) for @ref[6.1.67].

**Why separate sūtra?** Though @ref[3.2.75] would suffice, this is a @deva[नियम]—@deva[उपयज्] occurs only in @deva[छन्दस्].""",
            "advanced": """In @deva[छन्दस्], @deva[विच्] comes after @deva[यज्] with @deva[उप].

**Example:** @deva[उपयज्] 'eleven formulas at sacrifice'

**Why repeat @deva[छन्दसि]?** Though @deva[मन्त्र] @deva[अनुवृत्ति] present, repetition includes @deva[ब्राह्मण] literature.

**Why @deva[च्]?** Groups @deva[विच्] with @deva[वि]-class (@deva[क्विन्], @deva[क्विप्], @deva[ण्वि], @deva[विट्]) for @ref[6.1.67] (@deva[येरपृक्तस्य]).

**Why separate sūtra (vs @ref[3.2.75])?** This is @deva[नियम]—@deva[उपयज्] restricted to @deva[छन्दस्] only."""
        }
    },
    "32074": {
        "en": {
            "simple": """In the Vedas, these affixes come after verbs ending in long @deva[आ] when a case-ending word or @deva[उपसर्ग] is in composition: @deva[मनिन्] (= @deva[मन्]), @deva[क्वनिप्] (= @deva[वन्]), @deva[वनिप्] (= @deva[वन्]), and @deva[विच्].

**Examples:**
- @deva[सुदामा] 'liberal giver' (from @deva[सु] + @deva[दा] + @deva[मनिन्])
- @deva[सुधीवा] 'having good understanding' (from @deva[सु] + @deva[धा] + @deva[क्वनिप्])
- @deva[भूरिदावा] 'liberal' (from @deva[भूरि] + @deva[दा] + @deva[वनिप्])
- @deva[कीलालपाः] 'nectar-drinker' (from @deva[कीलाल] + @deva[पा] + @deva[विच्])""",
            "standard": """In @deva[छन्दस्], the affixes @deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], and @deva[विच्] come after @deva[आकारान्त] (long-@deva[आ]-ending) verbs with @deva[सुप्]/[उपसर्ग].

| Affix | Real part | Example | Meaning |
|-------|-----------|---------|---------|
| @deva[मनिन्] | @deva[मन्] | @deva[सुदामा] | liberal giver |
| @deva[क्वनिप्] | @deva[वन्] | @deva[सुधीवा] (@ref[6.4.66]) | good understanding |
| @deva[वनिप्] | @deva[वन्] | @deva[भूरिदावा] | liberal |
| @deva[विच्] | @deva[वि] | @deva[कीलालपाः] | nectar-drinker |

**References:** @deva[सुदामा] (@deva[ऋग्वेद] VI.20.7), @deva[भूरिदावा] (@deva[ऋग्वेद] II.27.17), @deva[कीलालपाः] (@deva[ऋग्वेद] X.91.14)""",
            "advanced": """In @deva[छन्दस्], @deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], @deva[विच्] come after @deva[आकारान्त] verbs with @deva[सुप्]/[उपसर्ग].

**Examples:**
- @deva[सुदा] + @deva[मनिन्] = @deva[सुदामन्], nom. @deva[सुदामा] 'liberal' (@deva[ऋग्वेद] VI.20.7)
- @deva[अश्व] + @deva[स्था] + @deva[मनिन्] = @deva[अश्वत्थामन्], nom. @deva[अश्वत्थामा] 'Aśvatthāman'
- @deva[सुधा] + @deva[क्वनिप्] = @deva[सुधी] + @deva[वन्] (@ref[6.4.66]) = @deva[सुधीवन्], nom. @deva[सुधीवा]
- @deva[भूरि] + @deva[दा] + @deva[वनिप्] = @deva[भूरिदावन्], nom. @deva[भूरिदावा] (@deva[ऋग्वेद] II.27.17)
- @deva[कीलाल] + @deva[पा] + @deva[विच्] = @deva[कीलालपाः] (@deva[ऋग्वेद] X.91.14)
- @deva[शुभंवाः] (@deva[ऋग्वेद] IV.3.6, @ref[7.3.46])"""
        }
    },
    "32075": {
        "en": {
            "simple": """The affixes @deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], and @deva[विच्] are also seen after verbs **other than** those ending in long @deva[आ].

**Examples:**
- @deva[सुशर्मा] 'destroyer of sin' (from @deva[शृ] 'to injure')
- @deva[प्रातरित्वा] 'who goes early' (from @deva[इ] 'to go')
- @deva[विजावा] 'who brings forth' (from @deva[जन्])
- @deva[रेड्] 'who injures' (from @deva[रिप्] + @deva[विच्])

These affixes can also appear without @deva[उपपद]: @deva[पीवा], @deva[धीवा].""",
            "standard": """The affixes @deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], @deva[विच्] are seen after verbs other than @deva[आकारान्त].

@deva[छन्दसि] does **not** extend here.

| Affix | Example | Derivation |
|-------|---------|------------|
| @deva[मनिन्] | @deva[सुशर्मा] | @deva[सु] + @deva[शृ] 'destroy' |
| @deva[क्वनिप्] | @deva[प्रातरित्वा] | @deva[प्रातर्] + @deva[इ] (@ref[6.1.71]) |
| @deva[वनिप्] | @deva[विजावा] | @deva[वि] + @deva[जन्] (@ref[6.4.41]) |
| @deva[विच्] | @deva[रेड्] | @deva[रिप्] (@ref[7.3.86]) |

**'Also' (@deva[च]):** Removes conditions—affixes come even without @deva[उपपद]: @deva[पीवा], @deva[धीवा].

**'Are seen' (@deva[दृश्यते]):** Not all verbs take these affixes indiscriminately—only when attested.""",
            "advanced": """@deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], @deva[विच्] are seen after non-@deva[आकारान्त] verbs. @deva[छन्दसि] doesn't extend.

**Examples:**
- @deva[सु] + @deva[शृ] + @deva[मनिन्] = @deva[सुशर्मन्], nom. @deva[सुशर्मा] 'sin-destroyer'
- @deva[प्रातर्] + @deva[इ] + @deva[क्वनिप्] = @deva[प्रातरित्वन्] (@ref[6.1.71]), nom. @deva[प्रातरित्वा]
- @deva[वि] + @deva[जन्] + @deva[वनिप्] = @deva[विजावन्] (@ref[6.4.41]), nom. @deva[विजावा]
- @deva[रिप्] + @deva[विच्] = @deva[रेष्] (@ref[7.3.86]), nom. @deva[रेड्] (@deva[यजुर्वेद] VI.18)

**'@deva[च]' (also):** Removes all previous conditions—affixes come even without @deva[उपपद]: @deva[पीवा], @deva[धीवा].

**'@deva[दृश्यते]':** Not universal application—only when attested forms exist."""
        }
    },
    "32076": {
        "en": {
            "simple": """The affix @deva[क्विप्] is also seen after all verbs, with or without @deva[उपपद], in both Vedic and modern Sanskrit.

**Examples:**
- @deva[उखास्रत्] 'falling from the pot' (from @deva[स्रंस्] 'to fall')
- @deva[पर्णध्वत्] 'falling from leaves'
- @deva[वाहाभ्रट्] 'falling from a car' (from @deva[भ्रश्])""",
            "standard": """The affix @deva[क्विप्] is seen after all verbs, with or without @deva[उपपद], in @deva[छन्दस्] and modern Sanskrit.

**Examples:**
- @deva[उखायाः स्रंसते] = @deva[उखास्रत्] 'falling from pot' (@ref[6.4.24])
- @deva[पर्णध्वत्] 'falling from leaves'
- @deva[वाहाद् भ्रश्यति] = @deva[वाहाभ्रश्], nom. @deva[वाहाभ्रट्] 'falling from car'
  - @deva[हा] lengthened by @ref[6.3.137]

Reference: @deva[ऋग्वेद] I.3.8""",
            "advanced": """@deva[क्विप्] is seen after all verbs, with/without @deva[उपपद], in @deva[छन्दस्] and @deva[भाषा].

**Examples:**
- @deva[उखायाः स्रंसते] = @deva[उखास्रत्] 'pot-falling' (@ref[6.4.24])
- @deva[पर्णध्वत्] 'leaf-falling'
- @deva[वाहाद् भ्रश्यति] = @deva[वाहाभ्रश्], nom. @deva[वाहाभ्रट्] 'car-falling' (@deva[हा] lengthened by @ref[6.3.137])

Reference: @deva[ऋग्वेद] I.3.8"""
        }
    },
    "32077": {
        "en": {
            "simple": """The affixes @deva[क] and @deva[क्विप्] come after @deva[स्था] 'to stand' when a case-ending word or @deva[उपसर्ग] is in composition.

**Examples:** @deva[शंस्थः] and @deva[शंस्थाः]

**Why this sūtra?** @ref[3.2.14] blocked @ref[3.2.4] for @deva[स्था] with certain @deva[उपपद]s. This sūtra removes that block, allowing @deva[क] and @deva[क्विप्] again.""",
            "standard": """The affixes @deva[क] and @deva[क्विप्] come after @deva[स्था] with @deva[सुप्]/[उपसर्ग].

**Examples:** @deva[शंस्थः] (with @deva[क]) and @deva[शंस्थाः] (with @deva[क्विप्])

**Why needed?** @ref[3.2.4] gives @deva[क] generally. @ref[3.2.75] gives @deva[क्विप्]. But @ref[3.2.14] prohibited these for @deva[स्था] with certain @deva[उपपद]s (using @deva[अच्] instead).

**This sūtra:** Removes that prohibition—'prohibition of the prohibition' (@deva[निषेधस्य प्रतिषेधः]).""",
            "advanced": """@deva[क] and @deva[क्विप्] come after @deva[स्था] with @deva[सुप्]/[उपसर्ग].

**Examples:** @deva[शंस्थः] and @deva[शंस्थाः]

**Why needed?** @ref[3.2.4] provides @deva[क]; @ref[3.2.75] provides @deva[क्विप्]. But @ref[3.2.14] prohibited these, requiring @deva[अच्] with @deva[उपपद] @deva[शम्] etc.

**This sūtra:** @deva[निषेधस्य प्रतिषेधः]—removes the @ref[3.2.14] prohibition. Without this, @deva[शंस्थः]/[शंस्थाः] would be blocked in favor of the @deva[अच्] form."""
        }
    }
}

# Update the commentary
for sutra_id, content in updates.items():
    commentary[sutra_id] = content

# Write back
with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sūtras 3.2.63-3.2.77")
