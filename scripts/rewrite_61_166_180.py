#!/usr/bin/env python3
"""Rewrite commentary for 6.1.166-180 (accent rules for case endings and numerals)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61166": {
        "en": {
            "simple": "The nominative plural of @deva[तिस्] ('three', feminine) has acute accent on the final syllable. So @deva[तिस्रः] is accented @deva[ति॒स्र꣡ः]. This overrides the usual @deva[स्वरित] accent rule.",
            "standard": "This sūtra assigns @deva[अन्तोदात्त] to the nominative plural @deva[जस्] when added to @deva[तिसृ] (feminine 'three'). The form @deva[तिस्र꣡ः] has final accent. This overrides the @deva[स्वरित] that @ref[8.2.4] would otherwise assign. The @deva[तिस्] here refers to the feminine stem @deva[तिसृ].",
            "advanced": "The @deva[जसि] specification targets nominative plural specifically. @deva[तिसृ] (feminine of @deva[त्रि]) + @deva[जस्] → @deva[तिस्रः]. The @deva[अन्तोदात्त] blocks @deva[जात्यन्तरात्] @deva[स्वरितः] (@ref[8.2.4]). This is a @deva[व्यवस्था] (special provision) for the feminine numeral 'three' in nominative plural, ensuring @deva[तिस्र꣡ः] rather than @deva[*तिस्रः॑]."
        }
    },
    "61167": {
        "en": {
            "simple": "The word @deva[चतुर्] ('four') has acute accent on its final syllable when followed by the accusative plural ending. So @deva[चतुरः] (acc. pl.) is accented @deva[च॒तु꣡रः].",
            "standard": "This sūtra provides @deva[अन्तोदात्त] for @deva[चतुर्] in accusative plural. The form @deva[चतुर꣡ः] has accent on @deva[तु]. The feminine @deva[चतस्रः] follows a different pattern. The @deva[शसि] (accusative plural marker) triggers this accent shift.",
            "advanced": "The @deva[शसि] condition specifies accusative plural context. @deva[चतुर्] + @deva[शस्] → @deva[चतुरः] with @deva[अन्तोदात्त]. The feminine @deva[चतसृ] is mentioned to distinguish it—@deva[चतस्रः] may have different accent treatment. This numeral-specific accent rule shows the complexity of @deva[संख्या] (numeral) accent patterns in Vedic."
        }
    },
    "61168": {
        "en": {
            "simple": "When a stem is monosyllabic in the locative plural, the instrumental case ending and all case endings after it (instrumental, dative, ablative, genitive, locative) receive acute accent. So for @deva[राज्] ('king'), which is one syllable in @deva[राजसु], the case endings are accented.",
            "standard": "This sūtra assigns @deva[उदात्त] to case endings from instrumental onwards (@deva[तृतीयादि]) when the stem is monosyllabic in locative plural (@deva[सौ एकाच्]). The locative plural serves as the test form. For @deva[राज्]: @deva[राजसु] is monosyllabic stem + @deva[सु], so @deva[राज्ञा꣡], @deva[राज्ञे꣡], etc. have accented endings.",
            "advanced": "The @deva[सौ एकाच्] condition uses locative plural as the diagnostic: if the stem appears monosyllabic there, the @deva[तृतीयादि] (@deva[भिस् ङे आम् ङसि सुप्]) endings take @deva[उदात्त]. The @deva[सु] in @deva[सौ] is locative plural @deva[सुप्]. This affects consonant-final monosyllables like @deva[राज्], @deva[वाच्], @deva[त्वच्] where @deva[सम्प्रसारण] doesn't add syllables."
        }
    },
    "61169": {
        "en": {
            "simple": "The same case endings (instrumental and following) may optionally take acute accent when a monosyllabic word with final accent appears at the end of a compound, and the compound can be easily analyzed. So in @deva[सुराज्] ('good king'), the case endings may or may not be accented.",
            "standard": "This sūtra extends @ref[6.1.168]'s accent rule optionally to @deva[समासान्त] (compound-final) monosyllables that are @deva[अन्तोदात्त] and @deva[सुविभक्तिक] (easily analyzable). Thus @deva[सुराज्] + case ending → optional accent on the ending. The @deva[वा] indicates the accent is optional in these compound contexts.",
            "advanced": "The @deva[अन्तोदात्तस्य समासस्य सुविभक्तिकस्य] qualifies: the compound must have final accent, and be 'easily divisible' into components. The @deva[विभाषा] allows both accented and unaccented case-endings. @deva[सुविभक्तिक] likely means the compound analysis is transparent. This extends monosyllabic accent behavior to compound-final positions with optionality."
        }
    },
    "61170": {
        "en": {
            "simple": "In Vedic literature, case endings other than @deva[सर्वनामस्थान] (strong cases) receive acute accent when the stem ends in @deva[अञ्च्] ('going towards'). So @deva[प्राच्] ('eastern') in non-strong cases has accented endings.",
            "standard": "This sūtra assigns @deva[उदात्त] to @deva[असर्वनामस्थान] (weak/middle) case-endings after @deva[अञ्च्]-final stems in Vedic. Stems like @deva[प्राच्], @deva[प्रत्यच्], @deva[उदच्] take accented endings in instrumental, etc. The @deva[सर्वनामस्थान] (nominative, accusative, vocative) are excluded.",
            "advanced": "The @deva[छन्दसि] restricts this to Vedic usage. @deva[अञ्चि] (locative of @deva[अञ्च्]) indicates stems ending in @deva[अञ्च्] like directional words. The @deva[असर्वनामस्थान] specification targets @deva[भिस्/ङे/ङसि/आम्/सुप्] endings. This creates an accent pattern specific to @deva[अञ्च्]-stems in Vedic, distinguishing them from their Classical counterparts."
        }
    },
    "61171": {
        "en": {
            "simple": "The same non-strong case endings have acute accent after stems ending in @deva[वाह्] ('carrying'), after @deva[इदम्] ('this'), after @deva[पद्]-group stems, after @deva[अप्] ('water'), and after @deva[पुंस्] ('man').",
            "standard": "This sūtra extends @deva[उदात्त] on @deva[असर्वनामस्थान] endings to several stem types: @deva[वाह्]-final (@deva[देववाह्]), @deva[इदम्] (demonstrative), @deva[पदादि] (stems from @ref[6.1.63]'s group), @deva[अप्] ('water'), and @deva[पुंस्] ('man'). These stems take accented endings in weak cases.",
            "advanced": "The listing @deva[वाहि इदमि पदादीनां षष्ठ्यन्तादाकारात् अपो पुंसः] enumerates: (1) @deva[वाह्]-finals like @deva[देववाह्], (2) @deva[इदम्] (declines irregularly), (3) @deva[पदादि] group through @ref[6.1.63], (4) @deva[अप्] (water, plural only), (5) @deva[पुंस्] (man). Each has @deva[उदात्त] on @deva[असर्वनामस्थान] endings. These represent irregular accent patterns for specific stems."
        }
    },
    "61172": {
        "en": {
            "simple": "The non-strong case endings after @deva[अष्टन्] ('eight') have acute accent when it takes the form @deva[अष्टा]. So @deva[अष्टाभिः] has accent on the ending.",
            "standard": "This sūtra assigns @deva[उदात्त] to @deva[असर्वनामस्थान] endings after @deva[अष्टन्] when it appears as @deva[अष्टा]. The numeral 'eight' has alternate forms: @deva[अष्ट] and @deva[अष्टा] in accusative plural and weak cases. When @deva[अष्टा] appears, the endings are accented: @deva[अष्टाभि꣡ः].",
            "advanced": "The @deva[अष्टाभावे] condition specifies the @deva[अष्टा] allomorph. @deva[अष्टन्] shows stem alternation: @deva[अष्ट/अष्टा/अष्टौ]. When @deva[आ]-augmented form @deva[अष्टा] precedes weak endings, those endings take @deva[उदात्त]. This creates paradigm-internal accent variation: @deva[अष्टौ꣡] (nom/acc) vs. @deva[अष्टाभि꣡ः] (inst.). The @deva[अष्टा]-form triggers the accent shift."
        }
    },
    "61173": {
        "en": {
            "simple": "After a participle formed with @deva[अत्] that has acute accent on the final, the feminine suffix @deva[ई] and vowel-initial case endings (except strong cases) receive acute accent when preceded by a consonant. So @deva[पचत्] + @deva[ई] → @deva[पचन्ती꣡].",
            "standard": "This sūtra provides @deva[उदात्त] for @deva[ङीप्] (@deva[ई]) and vowel-initial @deva[असर्वनामस्थान] endings after @deva[अदन्त] (ending in @deva[अत्]) participles that are @deva[अन्तोदात्त], when a consonant precedes. Example: @deva[पचत्꣡] + @deva[ई] → @deva[पचन्ती꣡]; the @deva[ई] receives accent.",
            "advanced": "The conditions are: (1) @deva[अन्तोदात्त] @deva[अदन्त] stem (participle in @deva[शतृ/शानच्]), (2) consonant (@deva[हल्]) precedes the @deva[अत्], (3) @deva[ङीप्] or @deva[अजादि असर्वनामस्थान] follows. The @deva[ई] of @deva[ङीप्] and vowel-initial weak endings then take @deva[उदात्त]. @deva[पचन्ती꣡], @deva[कुर्वती꣡] show the pattern. The @deva[हल्] condition excludes vowel + @deva[अत्] sequences."
        }
    },
    "61174": {
        "en": {
            "simple": "The same endings have acute accent when a semivowel (@deva[यण्]) replaces the accented final vowel of the stem, and a consonant precedes that semivowel. So @deva[कर्तृ] + @deva[ई] → @deva[कर्त्री꣡] (accent on @deva[ई]).",
            "standard": "This sūtra extends accent to @deva[ङीप्] and @deva[अजादि असर्वनामस्थान] endings when: (1) the stem's final @deva[उदात्त] vowel becomes @deva[यण्] (semivowel), (2) a consonant precedes. Example: @deva[कर्तृ꣡] + @deva[ई] → @deva[कर्त्र्] + @deva[ई] → @deva[कर्त्री꣡]. The @deva[ऋ] → @deva[र्] change leaves the ending accented.",
            "advanced": "The @deva[यणादेश] (semivowel substitution by @ref[6.1.77]) of an @deva[उदात्त] vowel triggers this. When @deva[इ उ ऋ ऌ] (final, accented) becomes @deva[य् व् र् ल्] before a vowel, and a consonant precedes, the following ending inherits accent. @deva[कर्तृ꣡] → @deva[कर्त्री꣡]; @deva[भवतृ꣡] → @deva[भवत्री꣡]. The @deva[हल्] condition requires a preceding consonant cluster."
        }
    },
    "61175": {
        "en": {
            "simple": "The previous accent rule does not apply when the vowel is the feminine affix @deva[ऊ] (@ref[4.1.66]) or the final vowel of a verb root. So @deva[कारू] + @deva[आ] endings don't shift accent to the endings.",
            "standard": "This sūtra excepts @deva[ऊ] of @ref[4.1.66] (feminine @deva[ऊ]-affix) and @deva[धातु]-final vowels from @ref[6.1.174]. After @deva[यणादेश] of these @deva[उदात्त] vowels, the endings don't take accent. So @deva[कारू꣡] → @deva[कारू꣡स्] (not @deva[कारूस्꣡]); the @deva[ऊ]-origin blocks accent transfer.",
            "advanced": "The @deva[ऊ॒कालस्य धात्वन्तस्य च] exception protects: (1) @deva[ऊ] from @ref[4.1.66]—feminine stems like @deva[कारू], @deva[श्वश्रू]; (2) @deva[धातु]-final vowels in verbal stems. When these @deva[उदात्त] vowels undergo @deva[यण्], @ref[6.1.174] doesn't apply. The accent stays on the stem, not the ending. This preserves @deva[कारू꣡]-type accent patterns."
        }
    },
    "61176": {
        "en": {
            "simple": "The affix @deva[मत्/वत्] ('possessing'), which is normally unaccented, receives acute accent when added to a stem that is @deva[अन्तोदात्त] (final-accented) and ends in a light (@deva[लघु]) vowel, or when @deva[न्] augment (@ref[8.2.16]) precedes.",
            "standard": "This sūtra gives @deva[उदात्त] to @deva[मतुप्/वतुप्] (normally @deva[अनुदात्त]) in two conditions: (1) after @deva[अन्तोदात्त लघ्वन्त] stems (final short vowel with final accent), (2) when @deva[नुट्] augment (@ref[8.2.16]) intervenes. Example: @deva[अग्नि꣡] + @deva[मत्] → @deva[अग्निम꣡त्]; the @deva[मत्] becomes accented.",
            "advanced": "The @deva[अन्तोदात्तस्य लघ्वन्तस्य] condition: stem must end in a short (@deva[लघु]) vowel bearing @deva[उदात्त]. The @deva[नुडन्तस्य] alternative: when @deva[नुट्] (@ref[8.2.16]) is added between stem and @deva[मतुप्/वतुप्]. Either condition accents the normally @deva[अनुदात्त] @deva[मत्/वत्]. Forms: @deva[अग्निम꣡त्], @deva[वायुम꣡त्] (light final, accented) vs. @deva[धनवा꣡न्] (heavy final, unaccented @deva[वत्])."
        }
    },
    "61177": {
        "en": {
            "simple": "After a stem that ends in a light vowel with final accent, the genitive plural ending @deva[नाम्] optionally receives acute accent. So @deva[अग्नि] + @deva[नाम्] can be either @deva[अग्नीना꣡म्] or @deva[अग्नी꣡नाम्].",
            "standard": "This sūtra provides optional @deva[उदात्त] for @deva[आम्] (genitive plural) after @deva[अन्तोदात्त लघ्वन्त] stems. The @deva[विभाषा] allows both: @deva[अग्नीना꣡म्] (accented ending) or @deva[अग्नी꣡नाम्] (stem-accented). Similarly @deva[वायूना꣡म्/वायू꣡नाम्].",
            "advanced": "The @deva[नाम्] (genitive plural @deva[आम्] with @deva[नुट्]) shows optional accent after @deva[अन्तोदात्त लघ्वन्त]. The @deva[नुट्] augment (@ref[7.1.54]) yields @deva[नाम्]. Both accent placements are grammatical: @deva[अग्नीना꣡म्] (ending accented per this rule) or @deva[अग्नी꣡नाम्] (stem accent unchanged). This optionality reflects variant accent traditions."
        }
    },
    "61178": {
        "en": {
            "simple": "In Vedic literature, the genitive plural ending @deva[नाम्] shows varied accent after stems with feminine @deva[ई]. So @deva[अभिभञ्जतीनाम्] ('of those who break') shows @deva[अभिभञ्जतीना꣡म्] with accent on the ending.",
            "standard": "This sūtra provides Vedic accent variation for @deva[नाम्] after @deva[ङीप्]-final (feminine @deva[ई]) stems. The @deva[विभाषा] ('diversely') indicates multiple patterns exist in Vedic texts. Examples: @deva[अभिभञ्जतीना꣡म्], @deva[बह्वीना꣡म्] with accented endings.",
            "advanced": "The @deva[छन्दसि विभाषा] indicates Vedic variation for @deva[ङीबन्त] (feminine @deva[ई]-stem) + @deva[आम्]. The attested forms show accent fluctuation: some texts preserve stem accent, others show ending accent. @deva[देवसमानाम् अभिभञ्जतीना꣡म्] illustrates the accented-ending pattern. This documents Vedic recension differences rather than prescribing a single form."
        }
    },
    "61179": {
        "en": {
            "simple": "Case endings beginning with a consonant receive acute accent after the numerals called @deva[षट्] (six, seven, etc. per @ref[1.1.24]), as well as after @deva[त्रि] ('three') and @deva[चतुर्] ('four'). So @deva[षड्भिः] has accent on the ending.",
            "standard": "This sūtra assigns @deva[उदात्त] to consonant-initial case endings (@deva[हलादि]) after @deva[षट्]-group numerals (@ref[1.1.24]: @deva[षष्, सप्तन्, अष्टन्, नवन्, दशन्]) and @deva[त्रि/चतुर्]. Examples: @deva[षड्भि꣡ः], @deva[त्रिभि꣡ः], @deva[चतुर्भि꣡ः]. The @deva[अन्तोदात्त] context continues.",
            "advanced": "The @deva[षट्संज्ञात्] references @ref[1.1.24]'s @deva[षट्] designation for numerals 6-10. These plus @deva[त्रि/चतुर्] take @deva[उदात्त] on @deva[हलादि] endings (@deva[भिस्], @deva[भ्याम्], @deva[भ्यस्], @deva[सु]). This numeral-specific accent pattern affects only consonant-initial case markers, contrasting with @deva[अजादि] (vowel-initial) endings."
        }
    },
    "61180": {
        "en": {
            "simple": "The same numerals, when taking case endings beginning with @deva[भ्] or @deva[स्], receive acute accent on the penultimate syllable if the numeral has three or more syllables. So @deva[सप्तभिः] is accented @deva[सप्त꣡भिः] (not on @deva[भ्]).",
            "standard": "This sūtra modifies @ref[6.1.179]: when @deva[षट्]-numerals or @deva[त्रि/चतुर्] take @deva[भसि] (beginning with @deva[भ्]) or @deva[स्] endings, and the numeral form has @deva[त्र्यादि] (three+ syllables), the @deva[उपोत्तम] (penultimate) syllable is accented. Example: @deva[सप्꣡तभिः] with accent before the ending.",
            "advanced": "The @deva[त्र्यादौ भसि सकारे] condition: when the numeral + ending yields three+ syllables, and the ending begins with @deva[भ्/स्], the @deva[उपोत्तम] (second-to-last) syllable takes @deva[उदात्त]. This overrides @ref[6.1.179]'s ending accent for longer forms. @deva[सप्तभिः] → @deva[सप्त꣡भिः]; @deva[सप्तसु] → @deva[सप्त꣡सु]. The three-syllable threshold determines which accent rule applies."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.166-6.1.180)")
