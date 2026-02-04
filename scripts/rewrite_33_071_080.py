# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33071": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[सृ] 'to move/flow' when meaning 'impregnation' (covering of cows etc.). Example: @deva[गवाम् उपसरः] 'impregnation of cows'; @deva[पशूनाम् उपसरः] 'impregnation of cattle'.",
            "standard": "After @deva[सृ] 'to flow/move' in the sense of @deva[प्रजन] (impregnation, the first covering of a cow by a bull), @deva[अप्] applies, blocking @deva[घञ्]. Examples: @deva[गवाम् उपसरः] 'the impregnation of cows'; @deva[पशूनाम् उपसरः] 'the impregnation of cattle'.",
            "advanced": "The semantic condition @deva[प्रजने] 'in the sense of impregnation' restricts @deva[अप्] to reproductive contexts. The term @deva[प्रजन] specifically refers to the first mating/covering. The @deva[उप] prefix with @deva[सृ] yields @deva[उपसर] 'approaching for mating'."
        }
    },
    "33072": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[ह्वे] 'to call' with @deva[नि], @deva[अभि], @deva[उप], @deva[वि], and the semivowel becomes its corresponding vowel. Examples: @deva[निहवः] 'invocation'; @deva[अभिहवः] 'invocation'; @deva[उपहवः] 'invitation'; @deva[विहवः] 'calling'. With @deva[प्र]: @deva[प्रह्वायः].",
            "standard": "With @deva[नि], @deva[अभि], @deva[उप], or @deva[वि], @deva[ह्वे] 'to call' takes @deva[अप्] with @deva[सम्प्रसारण] (semivowel → vowel). Derivation: @deva[नि] + @deva[ह्वे] + @deva[अप्] → @deva[नि] + @deva[हु] (@ref[6.1.108]) → @deva[नि] + @deva[हो] (@ref[7.3.84]) → @deva[निहव] (@ref[6.1.78]). Similarly: @deva[अभिहवः], @deva[उपहवः], @deva[विहवः]. With other prefixes like @deva[प्र]: @deva[प्रह्वायः] (using @deva[घञ्]).",
            "advanced": "The four specified prefixes trigger both @deva[अप्] and @deva[सम्प्रसारण] (@deva[व्] → @deva[उ]). The phonological chain: @deva[ह्वे] → @deva[हु] (by @ref[6.1.108]), then @deva[गुण] @deva[उ] → @deva[ओ] before @deva[अ] (@ref[7.3.84]), then coalescence @deva[ओ] + @deva[अ] → @deva[अव] (@ref[6.1.78]). With other prefixes, @deva[घञ्] applies without @deva[सम्प्रसारण]: @deva[प्रह्वाय]."
        }
    },
    "33073": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[ह्वे] 'to call' with @deva[आ] (and semivowel change) when meaning 'battle'. Example: @deva[आहवः] 'battle' (where they challenge each other). Otherwise: @deva[आह्वायः] 'calling'.",
            "standard": "With @deva[आ] + @deva[ह्वे] meaning @deva[युद्ध] (battle), @deva[अप्] applies with @deva[सम्प्रसारण]. Thus @deva[आहवः] 'battle'—where combatants call/challenge each other. Without the battle meaning: @deva[आह्वायः] 'a calling, summons' (using @deva[घञ्] without @deva[सम्प्रसारण]).",
            "advanced": "The semantic condition @deva[युद्धे] restricts the @deva[सम्प्रसारण]-with-@deva[अप्] combination to battle contexts. The word @deva[आहव] etymologically suggests mutual calling/challenging—a poetic designation for combat. The phonological process mirrors @ref[3.3.72]."
        }
    },
    "33074": {
        "en": {
            "simple": "The word @deva[आहाव] is irregularly formed (with @deva[वृद्धि] of the vowel) when meaning 'a water trough'. Example: @deva[आहावः] 'a trough near a well for watering cattle'. Otherwise: @deva[आह्वायः] 'calling'.",
            "standard": "The word @deva[आहावः] is formed irregularly from @deva[आ] + @deva[ह्वे] when meaning @deva[उदपान] 'a water trough'. Derivation: @deva[आ] + @deva[ह्वे] + @deva[अप्] → @deva[आहु] + @deva[अ] (by @deva[सम्प्रसारण]) → @deva[आहौ] + @deva[अ] (by @deva[वृद्धि]) → @deva[आहावः] 'a trough near a well where cattle are invited to drink'. Without this meaning: @deva[आह्वायः] 'calling'.",
            "advanced": "The irregular @deva[वृद्धि] (@deva[उ] → @deva[औ]) distinguishes this formation. The semantic connection: it's the place where cattle are 'called' or 'invited' to drink. This @deva[निपातन] (irregular formation) shows @deva[सम्प्रसारण] + @deva[वृद्धि], contrasting with @ref[3.3.73]'s @deva[सम्प्रसारण] + @deva[गुण]."
        }
    },
    "33075": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[ह्वे] 'to call' (with semivowel change) when NO @deva[उपसर्ग] is present and mere action is denoted. Example: @deva[हवः] 'calling'. Vedic: @deva[हवे हवे सुहवं शूरमिन्द्रम्].",
            "standard": "Without @deva[उपसर्ग], @deva[ह्वे] 'to call' takes @deva[अप्] with @deva[सम्प्रसारण] in @deva[भाव] (action) sense. Thus @deva[हवः] 'calling, invocation'. Vedic usage: @deva[हवे हवे सुहवं शूरमिन्द्रम्] 'in every call, [we invoke] the well-invoked hero Indra'. With @deva[उपसर्ग]: @deva[आह्वायः] (using @deva[घञ्]).",
            "advanced": "The repetition of @deva[भावे] here (though continuing from @ref[3.3.18]) excludes the @deva[अनुवृत्ति] of @ref[3.3.19]'s @deva[अकर्तरि कारके] condition. This allows @deva[हव] to apply even in @deva[कर्तृ] (agent) sense. The @deva[सम्प्रसारण] is obligatory for prefix-less @deva[ह्वे] in @deva[भाव] sense."
        }
    },
    "33076": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[हन्] 'to kill' when NO @deva[उपसर्ग] is present in @deva[भाव] sense, and @deva[वध] substitutes for @deva[हन्]. Example: @deva[वधश्चोराणाम्] 'killing of thieves'. With prefix or non-@deva[भाव]: @deva[घातः], @deva[प्रघातः].",
            "standard": "Without @deva[उपसर्ग] in @deva[भाव] (action) sense, @deva[हन्] 'to kill' takes @deva[अप्] with the substitute @deva[वध]. Examples: @deva[वधश्चोराणाम्] 'the slaying of thieves'; @deva[वधो दस्यूनाम्] 'the killing of robbers'. The @deva[वध] has @deva[उदात्त] on its final. When not @deva[भाव] sense: @deva[घातः] 'a blow'. With @deva[उपसर्ग]: @deva[प्रघातः].",
            "advanced": "The @deva[च] in the @deva[सूत्र] doesn't coordinate @deva[हन्] with @deva[वध] (no coordination possible); it refers to the affixes, indicating @deva[घञ्] also applies: hence @deva[घातः] exists. The @deva[वध]-substitution with @deva[अप्] (which is normally @deva[अनुदात्त] by @ref[3.1.4]) results in final @deva[उदात्त] accent."
        }
    },
    "33077": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[हन्] 'to kill' when meaning 'solidity/mass', and @deva[घन्] is the substitute. Examples: @deva[अभ्रघनः] 'mass of clouds'; @deva[दधिघनः] 'solid curd'; @deva[घनं दधि] 'thick curd'.",
            "standard": "When @deva[हन्] + @deva[अप्] means @deva[मूर्ति] (solidity, hardness, mass), @deva[घन्] substitutes for @deva[हन्]. Examples: @deva[अभ्रघनः] 'a dense mass of clouds'; @deva[दधिघनः] 'solidified curd'. In @deva[घनं दधि] 'thick curd', the quality (@deva[घन] 'solid') stands for the thing qualified.",
            "advanced": "The substitution @deva[हन्] → @deva[घन्] before @deva[अप्] in @deva[मूर्ति] sense creates @deva[घन] 'solid mass, dense'. The semantic extension from 'striking' to 'solid/compact' reflects the idea of something firmly packed or struck together. The derivative @deva[घन] then functions as an adjective meaning 'dense, solid'."
        }
    },
    "33078": {
        "en": {
            "simple": "The word @deva[अन्तर्घन] is formed from @deva[अन्तर्] + @deva[हन्] + @deva[अप्] (with @deva[घन्] substitute) when meaning 'a country'. Example: @deva[अन्तर्घनः] 'name of a Bāhīka country' (also: an open court before a house). Some write @deva[अन्तर्घणः].",
            "standard": "With @deva[अन्तर्] 'within/between', @deva[हन्] takes @deva[अप्] with @deva[घन्] substitute when meaning @deva[देश] (country). Thus @deva[अन्तर्घनः] 'name of a Bāhīka country'; also 'a porch or open court between entrance and house'. The spelling @deva[अन्तर्घणः] (with @deva[ण]) is also valid. Without country meaning: @deva[अन्तर्घातः] 'striking in the middle'.",
            "advanced": "The @deva[देश] semantic condition restricts @deva[घन्]-substitution to place-name usage. The form @deva[अन्तर्घन] denotes both a geographical region (Bāhīka territory) and an architectural feature (courtyard between door and house). The variant @deva[अन्तर्घण] with cerebral @deva[ण] is accepted as valid alternative."
        }
    },
    "33079": {
        "en": {
            "simple": "The words @deva[प्रघण] and @deva[प्रघाण] are irregularly formed when meaning 'a portion of a house'. Example: @deva[प्रघणः] or @deva[प्रघाणः] 'a porch, portico before a door'. Otherwise: @deva[प्रघातः].",
            "standard": "The words @deva[प्रघणः] and @deva[प्रघाणः] are formed irregularly (@deva[निपातन]) from @deva[प्र] + @deva[हन्] when meaning @deva[गृहावयव] (a part of a dwelling). Both forms mean 'a porch before the door, a portico'. Without this house-part meaning: @deva[प्रघातः] 'striking forth'.",
            "advanced": "This @deva[निपातन] provides two variant forms for the same meaning. The @deva[घण/घाण] alternation (with cerebral @deva[ण]) represents dialectal or stylistic variation. The architectural sense 'portico, verandah' specializes from the general @deva[प्र] + @deva[हन्] combination."
        }
    },
    "33080": {
        "en": {
            "simple": "The word @deva[उद्घन] is irregularly formed when meaning 'bench'. Example: @deva[उद्घनः] 'a carpenter's bench' (the wood on which other planks are placed for carving). Otherwise: @deva[उद्घातः] 'uneven'.",
            "standard": "The word @deva[उद्घनः] is formed irregularly (@deva[निपातन]) from @deva[उत्] + @deva[हन्] when meaning @deva[आसन्दी] (bench). Thus @deva[उद्घनः] 'a carpenter's bench'—the wooden surface on which planks are placed for carving work. Without the bench meaning: @deva[उद्घातः] 'striking up, uneven surface'.",
            "advanced": "The @deva[निपातन] restricts @deva[उद्घन] to the specialized 'bench' meaning. The semantic connection: the bench is where wood is 'struck' or worked. This contrasts with @deva[उद्घात] 'striking upward, unevenness', which uses regular @deva[घञ्] derivation without the @deva[घन्] substitute."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.71-3.3.80")
