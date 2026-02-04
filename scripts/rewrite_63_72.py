# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32063": {
        "en": {
            "simple": "In the Vedas, the affix @deva[णिवि] comes after the verb @deva[सह्] 'to bear' when a case-inflected word is in composition. Example: @deva[तुर] + @deva[सह्] + @deva[ण्वि] = @deva[तुरासाह्], nominative singular @deva[तुराषाट्] 'a name of Indra'. The dental @deva[स] changes to cerebral @deva[ष] by @ref[8.3.56], and @deva[ह्] becomes @deva[ट्] by @ref[8.2.31]. The final @deva[अ] of @deva[तुर] is lengthened by @ref[6.3.137].",
            "standard": "In the @deva[छन्दस्], the affix @deva[णिवि] is added after @deva[सह्] 'to bear' when preceded by a @deva[सुबन्त] in composition. The words @deva[उपसर्ग] and @deva[सुपि] continue from previous rules. Example: @deva[तुर] + @deva[सह्] + @deva[ण्वि] = @deva[तुरासाह्], nominative @deva[तुराषाट्] 'name of Indra'. The @deva[स] becomes @deva[ष] by @ref[8.3.56], @deva[ह्] becomes @deva[ट्] by @ref[8.2.31], and the final vowel of @deva[तुर] lengthens by @ref[6.3.137].",
            "advanced": "In @deva[छन्दस्], the affix @deva[णिवि] follows @deva[सह्] 'to bear' when a @deva[सुबन्त] is in @deva[समास]. The @deva[अनुवृत्ति] of @deva[उपसर्गे] and @deva[सुपि] applies. Example: @deva[तुर] + @deva[सह्] + @deva[ण्वि] = @deva[तुरासाह्], nominative @deva[तुराषाट्] 'epithet of Indra'. The dental @deva[स] undergoes @deva[मूर्धन्यादेश] to @deva[ष] by @ref[8.3.56], @deva[ह्] converts to @deva[ट्] by @ref[8.2.31], and @deva[दीर्घ] of the final vowel of @deva[तुर] occurs by @ref[6.3.137]. Reference: Ṛg Veda I.175.2."
        }
    },
    "32064": {
        "en": {
            "simple": "In the Vedas, the affix @deva[णिवि] comes after the verb @deva[वह्] 'to carry' when a case-inflected word is in composition. Example: @deva[प्रष्ठवाह्], nominative singular @deva[प्रष्ठवाट्] 'carrying a prashtha measure'. Also @deva[दित्यवाट्]. This rule is separated from the previous one so that @deva[वह्] alone (not @deva[सह्]) continues into later rules.",
            "standard": "In @deva[छन्दस्], the affix @deva[णिवि] comes after @deva[वह्] 'to carry' when a @deva[सुबन्त] is in composition. Example: @deva[प्रष्ठवाह्], nominative @deva[प्रष्ठवाट्] 'carrying a prashtha measure'; similarly @deva[दित्यवाट्]. This sūtra is separated from the previous one so that only @deva[वह्] (not @deva[सह्]) carries forward in @deva[अनुवृत्ति] to subsequent rules.",
            "advanced": "In @deva[छन्दस्], @deva[णिवि] follows @deva[वह्] 'to carry' with a @deva[सुबन्त] in @deva[समास]. Example: @deva[प्रष्ठवाह्], nominative @deva[प्रष्ठवाट्] 'carrying a prashtha measure'; @deva[दित्यवाट्]. The @deva[पृथक्करण] (separation) from the previous sūtra ensures that only @deva[वह्] continues in @deva[अनुवृत्ति] to subsequent sūtras, excluding @deva[सह्]. References: Yajur Veda XIV.10, XVIII.26."
        }
    },
    "32065": {
        "en": {
            "simple": "In the Vedas, the affix @deva[ञ्युट्] comes after @deva[वह्] 'to carry' when compounded with @deva[कव्य] 'oblation to ancestors', @deva[पुरीष] 'feces', or @deva[पुरीष्य] 'water'. Examples: @deva[कव्यवाहनः] 'fire that carries oblations to the ancestors', @deva[पुरीषवाहनः] 'carrier of water', @deva[पुरीष्यवाहनः]. The feminine is formed with long @deva[ई].",
            "standard": "In @deva[छन्दस्], the affix @deva[ञ्युट्] follows @deva[वह्] 'to carry' when @deva[कव्य] 'oblation to ancestors', @deva[पुरीष] 'feces', or @deva[पुरीष्य] 'water' is in composition. Examples: @deva[कव्यवाहनः पितॄणाम्] 'fire that carries oblations to the pitṛs', @deva[पुरीषवाहनः] 'carrier of water', @deva[पुरीष्यवाहनः]. The feminine takes the @deva[ङीप्] affix to form long @deva[ई].",
            "advanced": "In @deva[छन्दस्], @deva[ञ्युट्] follows @deva[वह्] when @deva[कव्य] 'oblation to ancestors', @deva[पुरीष] 'feces', or @deva[पुरीष्य] 'water' is the @deva[उपपद]. Examples: @deva[कव्यवाहनः पितॄणाम्] (Yajur Veda II.29) 'fire carrying oblations to the @deva[पितृ]s', @deva[पुरीषवाहनः], @deva[पुरीष्यवाहनः] (Yajur Veda XI.44). The @deva[स्त्रीलिङ्ग] takes @deva[ङीप्] resulting in @deva[दीर्घ] @deva[ई]."
        }
    },
    "32066": {
        "en": {
            "simple": "In the Vedas, the affix @deva[ञ्युट्] comes after @deva[वह्] 'to carry' when compounded with @deva[हव्य] 'oblation to gods', but **only** when the word does not occur in the middle of a verse-quarter (@deva[पाद]). Example: @deva[अग्निश्च हव्यवाहनः] 'fire, carrier of oblations to the gods'. When this word occurs at the beginning or middle of a pāda, the form is @deva[हव्यवाट्] (using @deva[ण्वि] from @ref[3.2.64]).",
            "standard": "In @deva[छन्दस्], @deva[ञ्युट्] follows @deva[वह्] when @deva[हव्य] 'oblation to gods' is in composition, provided the resulting word does **not** occur in the middle of a @deva[पाद] (quarter-verse). Example: @deva[अग्निश्च हव्यवाहनः] 'fire, carrier of oblations to gods'. When this word appears at the beginning or middle of a @deva[पाद], the form @deva[हव्यवाट्] is used instead, formed with @deva[ण्वि] from @ref[3.2.64]. Example: @deva[हव्यवाडग्निरजरः पिता नः] 'the undecaying fire that carries oblations is our father'.",
            "advanced": "In @deva[छन्दस्], @deva[ञ्युट्] follows @deva[वह्] with @deva[हव्य] as @deva[उपपद], provided the word is not @deva[पादमध्य]. Example: @deva[अग्निश्च हव्यवाहनः] (Ṛg Veda I.44.2). When @deva[पादमध्य] or @deva[पादादि], the form @deva[हव्यवाट्] applies via @deva[ण्वि] (@ref[3.2.64]). Example: @deva[हव्यवाडग्निरजरः पिता नः] (Ṛg Veda III.2.2) 'the undecaying Agni, carrier of oblations, is our father'."
        }
    },
    "32067": {
        "en": {
            "simple": "In the Vedas, the affix @deva[विट्] comes after the verbs @deva[जन्] 'to be born', @deva[सन्] 'to bestow', @deva[खन्] 'to dig', @deva[क्रम्] 'to pace', and @deva[गम्] 'to go' when a case-inflected word is in composition. The entire affix is elided, and the final nasal changes to long @deva[आ]. Examples: @deva[अब्जाः] 'born in water', @deva[गोषाः] 'born in heaven' or 'bestower of cows', @deva[कपूखाः] 'digger of wells', @deva[दधिक्राः] 'one who gets milk', @deva[अग्रेगा] 'leader'.",
            "standard": "In @deva[छन्दस्], @deva[विट्] follows the verbs @deva[जन्] 'to be born', @deva[सन्] 'to bestow/worship', @deva[खन्] 'to dig', @deva[क्रम्] 'to pace', and @deva[गम्] 'to go' when a @deva[सुबन्त] is in composition. The @deva[ट्] is @deva[इत्], and by @ref[6.4.41] the final nasal is replaced by long @deva[आ]. The entire affix is then elided by @ref[6.1.67]. Examples: @deva[अब्जाः] 'water-born', @deva[गोषाः] 'heaven-born' or 'cow-bestower' (with @deva[ष्] by @ref[8.3.108]), @deva[विसखाः] 'lotus-stalk digger', @deva[दधिक्राः] 'milk-getter', @deva[अग्रेगा] 'leader'.",
            "advanced": "In @deva[छन्दस्], @deva[विट्] follows @deva[जन्] (two roots: 'to be born' and 'to happen'), @deva[सन्] ('to give' and 'to worship'), @deva[खन्] 'to dig', @deva[क्रम्] 'to pace', and @deva[गम्] 'to go' with a @deva[सुबन्त] in @deva[समास]. The @deva[ट्] is @deva[इत्] triggering @ref[6.4.41], which replaces the final @deva[अनुनासिक] with @deva[दीर्घ] @deva[आ]. The @deva[प्रत्यय] is then @deva[लुक्] by @ref[6.1.67]. Examples: @deva[अब्जाः] (Ṛg Veda VII.34.16), @deva[गोषाः] (Ṛg Veda IV.40.5, IX.2.10), @deva[कपूखाः], @deva[दधिक्राः] (Ṛg Veda IV.39.1, 40.5), @deva[अग्रेगा उन्नेतॄणाम्]."
        }
    },
    "32068": {
        "en": {
            "simple": "The affix @deva[विट्] comes after the verb @deva[अद्] 'to eat' when in composition with a case-inflected word **other than** @deva[अन्न] 'food'. Examples: @deva[आमात्] 'eating raw food', @deva[शस्यात्] 'granivorous'. But with @deva[अन्न], we get @deva[अन्नादः] 'eating food', formed by the general affix @deva[अण्] from @ref[3.2.1]. This rule applies in ordinary language, not just Vedic.",
            "standard": "The affix @deva[विट्] follows @deva[अद्] 'to eat' when a @deva[सुबन्त] other than @deva[अन्न] 'food' is in composition. The @deva[अनुवृत्ति] of @deva[छन्दसि] does **not** extend to this sūtra—this rule applies in @deva[भाषा] as well. Examples: @deva[आमात्] 'raw-food eater', @deva[शस्यात्] 'grain-eater'. With @deva[अन्न] as @deva[उपपद], the general affix @deva[अण्] (@ref[3.2.1]) applies instead: @deva[अन्नादः] 'food-eater'.",
            "advanced": "The affix @deva[विट्] follows @deva[अद्] 'to eat' with a @deva[सुबन्त] @deva[उपपद], excluding @deva[अन्न]. The @deva[अनुवृत्ति] of @deva[छन्दसि] does **not** apply here—this is a @deva[भाषा] rule. Examples: @deva[आममत्ति] = @deva[आमात्] 'raw-food eater', @deva[शस्यात्] 'granivorous'. With @deva[अन्न] as @deva[उपपद], @deva[अण्] (@ref[3.2.1]) applies: @deva[अन्नादः]. The @deva[अन्नादिभ्यो वा] exclusion prevents @deva[विट्] when the @deva[उपपद] is @deva[अन्न]."
        }
    },
    "32069": {
        "en": {
            "simple": "The affix @deva[विट्] comes after @deva[अद्] 'to eat' when @deva[क्रव्य] 'raw flesh' is in composition. Example: @deva[क्रव्यात्] 'carnivorous' (eating raw flesh). This is made a separate rule because the optional @deva[अण्] form does **not** apply here. The form @deva[क्रव्यादः] (with @deva[अण्]) means one who eats cooked meat, while @deva[क्रव्यात्] means an animal eating raw flesh.",
            "standard": "The affix @deva[विट्] follows @deva[अद्] 'to eat' when @deva[क्रव्य] 'raw flesh' is the @deva[उपपद]. Example: @deva[क्रव्यमत्ति] = @deva[क्रव्यात्] 'carnivorous'. This separate sūtra indicates that @deva[वासरूप] (@ref[3.1.94]) does **not** apply—@deva[अण्] is not an alternative. The form @deva[क्रव्यादः] (with @deva[अण्]) denotes one who eats cooked, prepared meat, while @deva[क्रव्यात्] denotes an animal eating raw flesh.",
            "advanced": "The affix @deva[विट्] follows @deva[अद्] with @deva[क्रव्य] 'raw flesh' as @deva[उपपद]. Example: @deva[क्रव्यमत्ति] = @deva[क्रव्यात्] 'raw-flesh eater'. The @deva[पृथक्करण] indicates that @deva[वासरूप] (@ref[3.1.94]) does **not** apply, so @deva[अण्] is not an optional alternative. The @deva[वार्त्तिक] explains: @deva[क्रव्यादः] (formed with @deva[अण्]) denotes one who eats cut, dressed, cooked meat (a meat-eater vs. vegetarian), while @deva[क्रव्यात्] denotes an animal eating raw flesh. The form @deva[क्रव्यादः] may be considered irregular, falling under @deva[पृषोदरादि] (@ref[6.3.109])."
        }
    },
    "32070": {
        "en": {
            "simple": "The affix @deva[कप्] comes after the verb @deva[दुह्] 'to milk' when a case-inflected word is in composition, and the final @deva[ह्] is replaced by @deva[घ]. Example: @deva[कामदुघा धेनुः] 'a cow giving abundance of milk'. Also @deva[अर्थदुघा] 'yielding wealth', @deva[धर्मदुघा] 'yielding dharma'.",
            "standard": "The affix @deva[कप्] follows @deva[दुह्] 'to milk' when a @deva[सुबन्त] is in composition, with @deva[घ] replacing the final consonant. Examples: @deva[कामदुघा धेनुः] 'a cow giving abundant milk', @deva[अर्थदुघा] 'wealth-yielding', @deva[धर्मदुघा] 'dharma-yielding'. The @deva[घकारादेश] is specified in the sūtra itself.",
            "advanced": "The affix @deva[कप्] follows @deva[दुह्] 'to milk' with a @deva[सुबन्त] in @deva[समास], with @deva[घकारादेश] replacing the final consonant. Examples: @deva[कामदुघा धेनुः] 'a cow fulfilling desires', @deva[अर्थदुघा], @deva[धर्मदुघा]. The sūtra itself specifies @deva[घ] as the @deva[आदेश] for the @deva[धातु]-final."
        }
    },
    "32071": {
        "en": {
            "simple": "In the Mantras, the affix @deva[ण्विन्] comes after the words @deva[श्वेतवह्], @deva[उक्थश], and @deva[पुरोडाश्]. These contain both the verb and the upapada, with some irregularity. Examples: @deva[श्वेतवाः] 'name of Indra' (whom white horses carry), @deva[उक्थशाः] 'reciter of hymns', @deva[पुरोडाः] 'an offering'. Before pada-endings, @deva[उस्] is added: instrumental dual @deva[श्वेतवोभ्याम्], plural @deva[श्वेतवोभिः].",
            "standard": "In the @deva[मन्त्र] literature, @deva[ण्विन्] comes after the compounds @deva[श्वेतवह्], @deva[उक्थश], and @deva[पुरोडाश्]. These are given with both verb and @deva[उपपद], indicating irregularity. @deva[श्वेतवाह्] (nom. @deva[श्वेतवाः]) 'Indra' denotes the object though formed as an agent. @deva[उक्थशाः] (from @deva[शंस्] with nasal dropped) means 'hymn-reciter'. @deva[पुरोडाश्] (from @deva[दाशृ], @deva[द] → @deva[ड]) means 'offering'. Vārttika: @deva[उस्] augment before @deva[पद]-affixes: @deva[श्वेतवोभ्याम्], @deva[श्वेतवोभिः]; not before @deva[सर्वनामस्थान] or @deva[भ]: @deva[श्वेतवाहौ], @deva[श्वेतवाहः].",
            "advanced": "In @deva[मन्त्र], @deva[ण्विन्] follows the @deva[सोपपद] forms @deva[श्वेतवह्], @deva[उक्थश], @deva[पुरोडाश्]—their listing with @deva[उपपद] indicates @deva[वैकल्पिकता]. @deva[श्वेतवाह्] (nom. @deva[श्वेतवाः]) is @deva[कर्त्रर्थ]-formed but @deva[कर्मार्थ]-meaning 'Indra, carried by white horses'. @deva[उक्थशाः] (Ṛg Veda II.39.1) from @deva[शंस्] with @deva[अनुनासिकलोप]. @deva[पुरोडाश्] (Ṛg Veda III.28.2) from @deva[दाशृ] with @deva[द] → @deva[ड], @deva[कर्मार्थ]. @deva[वार्त्तिक]: @deva[उसागम] before @deva[पदसंज्ञक] affixes: @deva[श्वेतवोभ्याम्], @deva[श्वेतवोभिः]. No @deva[उस्] before @deva[सर्वनामस्थान]/भ: @deva[श्वेतवाहौ], @deva[श्वेतवाहः]."
        }
    },
    "32072": {
        "en": {
            "simple": "In the Mantras, the affix @deva[ण्विन्] comes after the verb @deva[यज्] 'to sacrifice' when @deva[अव्] is in composition. Example: @deva[अवयाज्], nominative @deva[अवयाः] 'name of a Vedic priest'. Quote: @deva[त्वं यज्ञे वरुणस्यावया असि] 'Thou art the priest of Varuṇa in the sacrifice'. Declension: nom. @deva[अवयाः/अवयाजौ/अवयाजः], acc. @deva[अवयाजं/अवयाजौ/अवयाजः], inst. @deva[अवयाजा/अवयोभ्यां/अवयोभिः].",
            "standard": "In @deva[मन्त्र], @deva[ण्विन्] follows @deva[यज्] 'to sacrifice' when @deva[अव्] is the @deva[उपपद]. Example: @deva[अवयाज्], nominative @deva[अवयाः] 'a Vedic priest'. Ṛg Veda I.173.12: @deva[त्वं यज्ञे वरुणस्यावया असि] 'Thou art Varuṇa's priest in the sacrifice'. This sūtra is separated so that only @deva[यज्] continues in @deva[अनुवृत्ति] to subsequent sūtras. Declension: 1st @deva[अवयाः/अवयाजौ/अवयाजः], 2nd @deva[अवयाजं/अवयाजौ/अवयाजः], 3rd @deva[अवयाजा/अवयोभ्यां/अवयोभिः].",
            "advanced": "In @deva[मन्त्र], @deva[ण्विन्] follows @deva[यज्] with @deva[अव्] as @deva[उपपद]. Example: @deva[अवयाज्], nominative @deva[अवयाः] 'Vedic priest' (Ṛg Veda I.173.12: @deva[त्वं यज्ञे वरुणस्यावया असि]). The @deva[पृथक्करण] ensures only @deva[यज्] (not the previous compounds) continues in @deva[अनुवृत्ति] to subsequent sūtras. @deva[रूपसिद्धि]: 1st @deva[अवयाः/अवयाजौ/अवयाजः], 2nd @deva[अवयाजं/अवयाजौ/अवयाजः], 3rd @deva[अवयाजा/अवयोभ्यां/अवयोभिः]."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.63-3.2.72")
