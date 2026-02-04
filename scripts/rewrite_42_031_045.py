#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.2.31-4.2.45 (Batch 3 of 4.2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "42031": {
        "en": {
            "simple": "After @deva[वायु], @deva[ऋतु], @deva[पितृ], @deva[उषस्] (deity names), @deva[यत्] is used. Examples: @deva[वायव्यम्], @deva[ऋतव्यम्], @deva[पित्र्यम्], @deva[उषस्यम्].",
            "standard": "After the deity names @deva[वायु] (Wind), @deva[ऋतु] (Season), @deva[पितृ] (Ancestors), @deva[उषस्] (Dawn), the affix @deva[यत्] comes (debarring @deva[अण्]): @deva[वायव्यम्] (belonging to Wind), @deva[ऋतव्यम्] (to Season), @deva[पित्र्यम्] (to Ancestors), @deva[उषस्यम्] (to Dawn). Derivation of @deva[पित्र्यम्]: @deva[पितृ] + @deva[यत्] = @deva[पित्] + @deva[रीङ्] + @deva[य] (@ref[7.4.27]) = @deva[पित्र्यम्] (@ref[6.4.148]). The form has @deva[आद्युदात्त] by @ref[6.1.213].",
            "advanced": "This sūtra provides @deva[यत्] (debarring @deva[अण्]) for @deva[वायु]/ऋतु/पितृ/उषस्]: @deva[वायव्यम्], @deva[ऋतव्यम्], @deva[पित्र्यम्], @deva[उषस्यम्]. @deva[पितृ] + @deva[य]: @ref[7.4.27] @deva[रीङ्], @ref[6.4.148]; @ref[6.1.213] @deva[आद्युदात्त]."
        }
    },
    "42032": {
        "en": {
            "simple": "After @deva[द्यावापृथिवी], @deva[शुनासीर], @deva[मरुत्वत्], @deva[अग्निषोम], @deva[वास्तोष्पति], @deva[गृहमेधा], @deva[छ] is used. Examples: @deva[द्यावापृथिवीयम्], @deva[शुनासीरीयम्], @deva[अग्निषोमीयम्].",
            "standard": "After the deity names @deva[द्यावापृथिवी] (Heaven-Earth), @deva[शुनासीर] (Śuna and Sīra), @deva[मरुत्वत्] (Indra with Maruts), @deva[अग्निषोम] (Agni-Soma), @deva[वास्तोष्पति] (Lord of Dwelling), @deva[गृहमेधा] (Household), the affix @deva[छ] (@deva[ईय]) comes: @deva[द्यावापृथिवीयम्] or @deva[द्यावापृथिव्यम्] (belonging to Heaven-Earth); @deva[शुनासीरीयम्] or @deva[शुनासीर्यम्]; @deva[मरुत्त्वतीयम्] or @deva[मरुत्त्वत्यम्]; @deva[अग्निषोमीयम्] or @deva[आग्निषोमम्] (@deva[अण्]).",
            "advanced": "This sūtra provides @deva[छ] (debarring @deva[अण्]) for @deva[द्यावापृथिवी]/शुनासीर/मरुत्वत्/अग्निषोम/वास्तोष्पति/गृहमेधा: @deva[द्यावापृथिवीयम्], @deva[शुनासीरीयम्], @deva[मरुत्त्वतीयम्], @deva[अग्निषोमीयम्], @deva[वास्तोष्पतीयम्], @deva[गृहमेधीयम्]."
        }
    },
    "42033": {
        "en": {
            "simple": "After @deva[अग्नि] (fire-deity), @deva[ढक्] is used. Example: @deva[आग्नेयोऽष्टकपालः] (eight-dish oblation to Agni).",
            "standard": "After the deity name @deva[अग्नि] (Fire), the affix @deva[ढक्] comes in the sense of 'that its deity': @deva[अग्निर्देवतास्य] = @deva[आग्नेयोऽष्टकपालः] (an eight-dish oblation belonging to Agni). Vārtika: @deva[ढक्] always comes after @deva[अग्नि] and @deva[कलि] in the various senses of @deva[प्राग्दीव्यतीय] affixes (see @ref[4.2.8]).",
            "advanced": "This sūtra provides @deva[ढक्] for @deva[अग्नि]: @deva[आग्नेयम्]. Vārtika: @deva[ढक्] always for @deva[अग्नि]/कलि in all @deva[प्राग्दीव्यतीय] senses (@ref[4.2.8])."
        }
    },
    "42034": {
        "en": {
            "simple": "After time-words, the affixes from @ref[4.3.11] to @ref[4.3.53] (meaning 'who stays there') also apply in deity-sense. Example: @deva[मासिकम्] (belonging to a month-deity).",
            "standard": "After words expressing time (@deva[काल]), the affixes taught in @ref[4.3.11]-@ref[4.3.53] (meaning 'who stays there') also apply in the sense of 'that its deity': @deva[मासे भवम्] = @deva[मासिकम्] (@deva[मास] + @deva[ठञ्]) can mean both 'occurring in a month' and 'belonging to a month-deity'. Similarly @deva[सांवत्सरिकम्] (yearly / belonging to Year-deity).",
            "advanced": "This sūtra extends @ref[4.3.11]-@ref[4.3.53] affixes (@deva[तत्र भवः]) to @deva[देवता]-sense for @deva[काल]-words: @deva[मासिकम्], @deva[सांवत्सरिकम्] (both @deva[तत्र भव] and @deva[तद्देवता] senses)."
        }
    },
    "42035": {
        "en": {
            "simple": "After @deva[महाराज] and @deva[प्रोष्ठपद], @deva[ठञ्] is used for deity-sense. Examples: @deva[महाराजिकम्], @deva[प्रौष्ठपदिकम्].",
            "standard": "After @deva[महाराज] and @deva[प्रोष्ठपद] (asterism), the affix @deva[ठञ्] comes in the sense of 'that its deity': @deva[महाराजो देवतास्य] = @deva[महाराजिकम्]; @deva[प्रौष्ठपदिकम्] (belonging to Proṣṭhapada constellation). Vārtika: After @deva[नवयज्ञ] etc., @deva[ठञ्] comes in sense of 'that exists in it': @deva[नावयज्ञिकः कालः], @deva[पाकयज्ञिकः]. Vārtika: After @deva[पूर्णमास], @deva[अण्] comes: @deva[पौर्णमासम्].",
            "advanced": "This sūtra provides @deva[ठञ्] for @deva[महाराज]/प्रोष्ठपद in @deva[देवता]-sense: @deva[महाराजिकम्], @deva[प्रौष्ठपदिकम्]. Vārtikas: @deva[नवयज्ञादि] + @deva[ठञ्] (@deva[तस्मिन् वर्तते]); @deva[पूर्णमास] + @deva[अण्]."
        }
    },
    "42036": {
        "en": {
            "simple": "The words @deva[पितृव्य] (father's brother), @deva[मातुल] (mother's brother), @deva[मातामह] (maternal grandfather), @deva[पितामह] (paternal grandfather) are irregular formations.",
            "standard": "The relationship words @deva[पितृव्य] (father's brother), @deva[मातुल] (mother's brother), @deva[मातामह] (mother's father), @deva[पितामह] (father's father) are @deva[निपातन] (irregular formations). From these forms we infer the rules: @deva[पितृमातृभ्यां भ्रातरि व्यड् डुलचौ] (affixes @deva[व्यत्] and @deva[डुलच्] after @deva[पितृ]/मातृ when meaning 'brother thereof'); @deva[पितृमातृभ्यां महति] (affix after @deva[पितृ]/मातृ when meaning 'father thereof').",
            "advanced": "This sūtra is @deva[निपातन] for @deva[पितृव्य]/मातुल/मातामह/पितामह. Inferred rules: @deva[पितृ]/मातृ + @deva[व्यत्]/डुलच् = brother; @deva[पितृ]/मातृ + affix = grandfather. Irregular derivations for family relationship terms."
        }
    },
    "42037": {
        "en": {
            "simple": "An affix (@deva[अण्]) is added to a word meaning 'a collection thereof'. Example: @deva[मार्जारम्] (collection of cats).",
            "standard": "The affix @deva[अण्] (from @ref[4.1.83]) is added to a word in the genitive case meaning 'a collection thereof' (@deva[समूह]). This applies to words denoting conscious beings, not in special lists. Example: @deva[मार्जाराणां समूहः] = @deva[मार्जारम्] (collection of cats). Note: @deva[अण्] applies only where the special rules (@ref[4.2.38] onwards) do not apply.",
            "advanced": "This sūtra extends @deva[अण्] (@ref[4.1.83]) to @deva[समूह]-sense (genitive): applies to @deva[चेतन]-words not covered by special rules. @deva[अण्] is default when @ref[4.2.38] ff. don't apply."
        }
    },
    "42038": {
        "en": {
            "simple": "After @deva[भिक्षा] etc., @deva[अण्] is used for 'collection'. Examples: @deva[भैक्षम्] (alms collected), @deva[गार्भिणम्] (group of pregnant women).",
            "standard": "After words like @deva[भिक्षा] (alms), the affix @deva[अण्] comes in the sense of 'collection': @deva[भिक्षाणां समूहः] = @deva[भैक्षम्] (what is collected as alms). Also @deva[गर्भिणी] + @deva[अण्] = @deva[गार्भिणम्] (the masculine @deva[भ]-form is substituted when @deva[तद्धित] follows, per @ref[4.1.88]). The word @deva[अण्] is repeated in this sūtra (though @deva[अनुवृत्ति] applies) to block any obstructing rules.",
            "advanced": "This sūtra provides @deva[अण्] for @deva[भिक्षादि] in @deva[समूह]-sense: @deva[भैक्षम्], @deva[गार्भिणम्] (m. @deva[भ]-form per @ref[4.1.88]). @deva[अण्] repeated to block other affixes."
        }
    },
    "42039": {
        "en": {
            "simple": "After @deva[गोत्र]-words (patronymics) and @deva[उक्ष], @deva[उष्ट्र], @deva[उरभ्र], @deva[राजन्], @deva[राजन्य], @deva[राजपुत्र], @deva[वत्स], @deva[मनुष्य], @deva[अज], @deva[वुञ्] is used for 'collection'. Examples: @deva[औपगवकम्], @deva[औक्षकम्], @deva[राजकम्].",
            "standard": "After @deva[गोत्र]-words (patronymics in popular sense—any descendant) and after @deva[उक्ष] (bull), @deva[उष्ट्र] (camel), @deva[उरभ्र] (ram), @deva[राजन्] (king), @deva[राजन्य] (Kṣatriya), @deva[राजपुत्र] (prince), @deva[वत्स] (calf), @deva[मनुष्य] (human), @deva[अज] (goat), the affix @deva[वुञ्] (@deva[अक]) comes for 'collection': @deva[औपगवकम्] (@ref[6.4.144]), @deva[औक्षकम्], @deva[औष्ट्रकम्], @deva[औरभ्रकम्], @deva[राजकम्] (@ref[6.4.144]).",
            "advanced": "This sūtra provides @deva[वुञ्] for @deva[गोत्र] (popular sense) and @deva[उक्षादि] (9 words) in @deva[समूह]-sense: @deva[औपगवकम्], @deva[औक्षकम्], @deva[राजकम्] (@ref[6.4.144] for certain forms)."
        }
    },
    "42040": {
        "en": {
            "simple": "After @deva[केदार] (field), @deva[यञ्] and @deva[वुञ्] are used for 'collection'. Examples: @deva[कैदार्यम्], @deva[कैदारकम्].",
            "standard": "After @deva[केदार] (cultivated field), the affixes @deva[यञ्] and @deva[वुञ्] come in the sense of 'collection' (debarring @deva[ठक्] of @ref[4.2.47]): @deva[केदाराणां समूहः] = @deva[कैदार्यम्] (@deva[यञ्]) or @deva[कैदारकम्] (@deva[वुञ्]). Vārtika: @deva[यञ्] also comes after @deva[गणिका]: @deva[गाणिक्यम्] (group of courtesans).",
            "advanced": "This sūtra provides @deva[यञ्]/वुञ् (debarring @deva[ठक्] @ref[4.2.47]) for @deva[केदार]: @deva[कैदार्यम्], @deva[कैदारकम्]. Vārtika: @deva[गणिका] + @deva[यञ्] = @deva[गाणिक्यम्]."
        }
    },
    "42041": {
        "en": {
            "simple": "After @deva[केदार] and @deva[कवचिन्] (armored), @deva[ठञ्] is used for 'collection'. Examples: @deva[कैदारिकम्], @deva[कावचिकम्].",
            "standard": "After @deva[केदार] and @deva[कवचिन्] (one wearing armor), the affix @deva[ठञ्] comes in the sense of 'collection': @deva[कावचिकम्] (@ref[6.4.144]) (group of armored warriors); @deva[कैदारिकम्] (group of fields). The @deva[अनुवृत्ति] of @deva[केदार] is read here by virtue of @deva[च].",
            "advanced": "This sūtra provides @deva[ठञ्] for @deva[कवचिन्] and @deva[केदार] (by @deva[च]) in @deva[समूह]-sense: @deva[कावचिकम्] (@ref[6.4.144]), @deva[कैदारिकम्]."
        }
    },
    "42042": {
        "en": {
            "simple": "After @deva[ब्राह्मण], @deva[माणव], @deva[वाडव], @deva[यन्] is used for 'collection'. Examples: @deva[ब्राह्मण्यम्], @deva[माणव्यम्], @deva[वाडव्यम्].",
            "standard": "After @deva[ब्राह्मण] (Brahmin), @deva[माणव] (young Brahmin), @deva[वाडव] (relating to horses), the affix @deva[यन्] comes for 'collection': @deva[ब्राह्मण्यम्] (Brahmin community), @deva[माणव्यम्], @deva[वाडव्यम्]. The indicatory @deva[न्] makes the word @deva[आद्युदात्त] (@ref[6.1.197]). Vārtika: Also after @deva[पृष्ठ]: @deva[पृष्ठ्यः] (collection of backs/ridges). Vārtika: @deva[ख] added to @deva[अहन्] in sacrifice sense: @deva[अहीनः] (collection of sacrifice days).",
            "advanced": "This sūtra provides @deva[यन्] for @deva[ब्राह्मण]/माणव/वाडव: @deva[ब्राह्मण्यम्], @deva[माणव्यम्], @deva[वाडव्यम्]. @deva[न्] → @deva[आद्युदात्त] (@ref[6.1.197]). Vārtikas: @deva[पृष्ठ] + @deva[यन्]; @deva[अहन्] + @deva[ख] = @deva[अहीनः]."
        }
    },
    "42043": {
        "en": {
            "simple": "After @deva[ग्राम], @deva[जन], @deva[बन्धु], @deva[सहाय], @deva[तल्] is used for 'collection'. Examples: @deva[ग्रामता], @deva[जनता], @deva[बन्धुता], @deva[सहायता].",
            "standard": "After @deva[ग्राम] (village), @deva[जन] (person), @deva[बन्धु] (relative), @deva[सहाय] (ally), the affix @deva[तल्] comes for 'collection': @deva[ग्रामता] (collection of villages), @deva[जनता] (populace), @deva[बन्धुता] (relatives collectively), @deva[सहायता] (allies collectively). Words ending in @deva[तल्] are all feminine. Vārtika: Also after @deva[गज] (elephant): @deva[गजता] (herd of elephants).",
            "advanced": "This sūtra provides @deva[तल्] for @deva[ग्राम]/जन/बन्धु/सहाय: @deva[ग्रामता], @deva[जनता], @deva[बन्धुता], @deva[सहायता] (all f.). Vārtika: @deva[गज] + @deva[तल्] = @deva[गजता]."
        }
    },
    "42044": {
        "en": {
            "simple": "After words with @deva[अनुदात्त] on the first syllable, @deva[अञ्] is used for 'collection'. Examples: @deva[कापोतम्] (flock of pigeons), @deva[मायूरम्], @deva[तैत्तिरम्].",
            "standard": "After words having @deva[अनुदात्त] (grave accent) on the first syllable, the affix @deva[अञ्] comes for 'collection': @deva[कपोतानां समूहः] = @deva[कापोतम्] (flock of pigeons); similarly @deva[मायूरम्] (flock of peacocks), @deva[तैत्तिरम्] (flock of partridges). The accent condition identifies which words take @deva[अञ्].",
            "advanced": "This sūtra provides @deva[अञ्] for @deva[आद्यनुदात्त] words in @deva[समूह]-sense: @deva[कापोतम्], @deva[मायूरम्], @deva[तैत्तिरम्]. @deva[अनुदात्तादि] = first syllable @deva[अनुदात्त]."
        }
    },
    "42045": {
        "en": {
            "simple": "After @deva[खण्डिक] etc., @deva[अञ्] is used for 'collection'. Examples: @deva[खाण्डिकम्], @deva[क्षौद्रकम्], @deva[मालवम्].",
            "standard": "After words like @deva[खण्डिक], the affix @deva[अञ्] comes for 'collection'. This applies to words with @deva[अनुदात्त] on the first syllable. Kārikā: @deva[अञसिद्धिरनुदात्तादेः कोऽर्थः क्षुद्रकमालवात्। गोत्राद्वुञ् न च तद्गोत्रं तदन्तान्न च सर्वतः॥] The @deva[खण्डिकादि] list ensures @deva[अञ्] even when other rules might apply.",
            "advanced": "This sūtra provides @deva[अञ्] for @deva[खण्डिकादि] in @deva[समूह]-sense. Kārikā discusses: @deva[अञ्] for @deva[अनुदात्तादि] purpose; @deva[क्षुद्रक]/मालव examples; @deva[गोत्र] → @deva[वुञ्] not applying here; @deva[तदन्तविधि] issues."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.2.31-4.2.45 (Batch 3 of 4.2)")
