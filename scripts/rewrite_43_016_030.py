#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.3.16-4.3.30 (Batch 2 of 4.3)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "43016": {
        "en": {
            "simple": "The affix @deva[अण्] comes after words in the @deva[संधिवेलादि] list (words like @deva[संधिवेला], @deva[संध्या], etc.) and after words denoting seasons (@deva[ऋतु]) or asterisms (@deva[नक्षत्र]).\n\nAll these words must express time. This rule replaces @deva[ठञ्] from 4.3.11. The repetition of @deva[अण्] also prevents @deva[छ] for @deva[वृद्ध] words.\n\nExamples:\n• @deva[संधिवेलादि]: @deva[सान्धिवेलम्] (relating to twilight-time), @deva[सान्ध्यम्] (relating to dusk).\n• Seasons: @deva[ग्रैष्मम्] (summery), @deva[शैशिरम्] (wintry).\n• Asterisms: @deva[तैषम्] (of Tiṣya), @deva[पौषम्] (of Puṣya).\n\n@deva[संवत्सर] takes @deva[अण्] when meaning 'fruit' or 'festival': @deva[सांवत्सरं फलम्] or @deva[पर्व].\n\nThe @deva[संधिवेलादि] list: @deva[संधिवेला], @deva[संध्या], @deva[अमावास्या], @deva[त्रयोदशी], @deva[चतुर्दशी], @deva[पञ्चदशी], @deva[पौर्णमासी], @deva[प्रतिपद्], and @deva[संवत्सर] (when denoting fruit/festival).",
            "standard": "The affix @deva[अण्] applies after @deva[संधिवेलादि] words, @deva[ऋतु]-denoting words, and @deva[नक्षत्र] names—all must express @deva[काल]. This supersedes @deva[ठञ्] (@ref[4.3.11]); repetition of @deva[अण्] also bars @deva[छ] for @deva[वृद्ध] words (@ref[4.2.114]).\n\nExamples: @deva[सान्धिवेलम्], @deva[सान्ध्यम्]; @deva[ग्रैष्मम्], @deva[शैशिरम्]; @deva[तैषम्], @deva[पौषम्].\n\n@deva[संवत्सर] + @deva[अण्] when denoting @deva[फल] or @deva[पर्व]: @deva[सांवत्सरं फलम्/पर्व].\n\n@deva[संधिवेलादि] gaṇa: @deva[संधिवेला], @deva[संध्या], @deva[अमावास्या], @deva[त्रयोदशी], @deva[चतुर्दशी], @deva[पञ्चदशी], @deva[पौर्णमासी], @deva[प्रतिपद्], @deva[संवत्सरात्फलपर्वणोः].",
            "advanced": "@deva[अण्] is ordained after @deva[संधिवेलादि], @deva[ऋतु]-वाचक, and @deva[नक्षत्र] words (all @deva[कालवाचिन्]), superseding @deva[ठञ्] (@ref[4.3.11]). The @deva[पुनर्वचन] of @deva[अण्] blocks @deva[छ] (@ref[4.2.114]) for @deva[वृद्ध] members.\n\nExamples: @deva[सान्धिवेलम्], @deva[सान्ध्यम्]; @deva[ग्रैष्मम्], @deva[शैशिरम्]; @deva[तैषम्], @deva[पौषम्]. @deva[संवत्सर] + @deva[अण्] (@deva[फल]/पर्व]-अर्थ): @deva[सांवत्सरं फलम्].\n\n@deva[संधिवेलादि]: @deva[संधिवेला], @deva[संध्या], @deva[अमावास्या], @deva[त्रयोदशी], @deva[चतुर्दशी], @deva[पञ्चदशी], @deva[पौर्णमासी], @deva[प्रतिपद्], @deva[संवत्सरात्फलपर्वणोः]."
        }
    },
    "43017": {
        "en": {
            "simple": "The affix @deva[एण्य] comes after @deva[प्रावृष्] (the rainy season) in the remaining senses.\n\nThis replaces @deva[अण्] from 4.3.16, even though @deva[प्रावृष्] is a season-denoting word.\n\nExample: @deva[प्रावृषेण्यो बलाहकः] (the cloud belonging to the rainy season).",
            "standard": "The affix @deva[एण्य] applies after @deva[प्रावृष्] in @deva[शेष] senses, debarring @deva[ऋतु]-governed @deva[अण्] (@ref[4.3.16]).\n\nExample: @deva[प्रावृषेण्यो बलाहकः] (the rainy-season cloud).",
            "advanced": "@deva[एण्य] is ordained after @deva[प्रावृष्] in @deva[शेष] senses, superseding @deva[ऋतु]-@deva[अण्] (@ref[4.3.16]).\n\nExample: @deva[प्रावृषेण्यो बलाहकः]."
        }
    },
    "43018": {
        "en": {
            "simple": "The affix @deva[ठक्] comes after @deva[वर्षा] (the rains) in the remaining senses.\n\nThis replaces @deva[अण्] from 4.3.16.\n\nExample: @deva[वार्षिकम् अनुलेपनम्] (the annual ointment/unguent).\n\nHere @deva[ठक्] carries the sense of @deva[साधु] (proper for) etc., as defined in 4.3.43.",
            "standard": "The affix @deva[ठक्] applies after @deva[वर्षा] in @deva[शेष] senses, debarring @deva[अण्] (@ref[4.3.16]).\n\nExample: @deva[वार्षिकम् अनुलेपनम्].\n\nThe @deva[ठक्] here has the force of @deva[साधु] etc. from @ref[4.3.43].",
            "advanced": "@deva[ठक्] is ordained after @deva[वर्षा] in @deva[शेष] senses, superseding @deva[अण्] (@ref[4.3.16]).\n\nExample: @deva[वार्षिकम् अनुलेपनम्]. The @deva[ठक्] conveys @deva[साधु]-आदि senses (@ref[4.3.43])."
        }
    },
    "43019": {
        "en": {
            "simple": "In Vedic literature (@deva[छन्दस्]), the word @deva[वर्षा] takes the affix @deva[ठञ्] in the remaining senses.\n\nThis replaces @deva[ठक्] from 4.3.18. The form looks the same, but the accent differs.\n\nExample: @deva[नभश्च नभस्यश्च वार्षिकावृतू] (Nabha and Nabhasya are the two rainy months).\n\nHere @deva[ऋतु] means 'month'—Nabha and Nabhasya are the two months of the rainy season.",
            "standard": "In @deva[छन्दस्], @deva[ठञ्] applies after @deva[वर्षा] in @deva[शेष] senses, debarring @deva[ठक्] (@ref[4.3.18]). The surface form is identical; the difference is in @deva[स्वर].\n\nExample: @deva[नभश्च नभस्यश्च वार्षिकावृतू]. Here @deva[ऋतु] = month (Nabha and Nabhasya are the two rainy months).",
            "advanced": "In @deva[छन्दस्], @deva[ठञ्] supersedes @deva[ठक्] (@ref[4.3.18]) after @deva[वर्षा]. The @deva[प्रकृति] and @deva[प्रत्यय] yield identical forms; distinction is @deva[स्वर]-based.\n\nExample: @deva[नभश्च नभस्यश्च वार्षिकावृतू]—@deva[ऋतु] here = @deva[मास] (Nabha, Nabhasya)."
        }
    },
    "43020": {
        "en": {
            "simple": "In Vedic literature (@deva[छन्दस्]), the affix @deva[ठञ्] comes after @deva[वसन्त] (spring) in the remaining senses.\n\nThis replaces @deva[अण्] from 4.3.16.\n\nExample: @deva[मधुश्च माधवश्च वासन्तिकावृतू] (Madhu and Mādhava are the two spring months).",
            "standard": "In @deva[छन्दस्], @deva[ठञ्] applies after @deva[वसन्त] in @deva[शेष] senses, debarring @deva[ऋतु]-@deva[अण्] (@ref[4.3.16]).\n\nExample: @deva[मधुश्च माधवश्च वासन्तिकावृतू].",
            "advanced": "In @deva[छन्दस्], @deva[ठञ्] supersedes @deva[ऋतु]-@deva[अण्] (@ref[4.3.16]) after @deva[वसन्त].\n\nExample: @deva[मधुश्च माधवश्च वासन्तिकावृतू]."
        }
    },
    "43021": {
        "en": {
            "simple": "In Vedic literature (@deva[छन्दस्]), the affix @deva[ठञ्] comes after @deva[हेमन्त] (winter) in the remaining senses.\n\nThis replaces @deva[अण्] from 4.3.16.\n\nExample: @deva[सहश्च सहस्यश्च हैमन्तिकावृतू] (Saha and Sahasya are the two winter months).\n\nRules 4.3.20 and 4.3.21 are kept separate so that the next rule (4.3.22) can continue only @deva[हेमन्त] by @deva[अनुवृत्ति].",
            "standard": "In @deva[छन्दस्], @deva[ठञ्] applies after @deva[हेमन्त] in @deva[शेष] senses, debarring @deva[ऋतु]-@deva[अण्] (@ref[4.3.16]).\n\nExample: @deva[सहश्च सहस्यश्च हैमन्तिकावृतू].\n\nThis sūtra is separated from @ref[4.3.20] so @deva[हेमन्त] alone continues to @ref[4.3.22] by @deva[अनुवृत्ति].",
            "advanced": "In @deva[छन्दस्], @deva[ठञ्] supersedes @deva[ऋतु]-@deva[अण्] (@ref[4.3.16]) after @deva[हेमन्त].\n\nExample: @deva[सहश्च सहस्यश्च हैमन्तिकावृतू].\n\n@deva[योगविभाग] from @ref[4.3.20]: only @deva[हेमन्त] carries to @ref[4.3.22]."
        }
    },
    "43022": {
        "en": {
            "simple": "The affix @deva[अण्] always comes after @deva[हेमन्त] (winter), and before this affix the letter @deva[त] of @deva[हेमन्त] is elided.\n\nExamples: @deva[हैमनं वासः] (wintry garment), @deva[हैमनम् उपलेपनम्] (winter ointment).\n\nThe word @deva[सर्वत्र] indicates this applies in both Vedic and secular literature.\n\n@deva[हेमन्त] can also take @deva[अण्] without @deva[त]-elision by 4.3.16: @deva[हैमन्ती पङ्क्तिः]. So there are three forms: @deva[हैमन्तः] (4.3.16), @deva[हैमन्तिकम्] (4.3.21), and @deva[हैमनम्] (this rule).",
            "standard": "The affix @deva[अण्] applies universally after @deva[हेमन्त] with @deva[त]-लोप.\n\nExamples: @deva[हैमनं वासः], @deva[हैमनम् उपलेपनम्].\n\n@deva[सर्वत्र] indicates applicability in @deva[छन्दस्] and @deva[भाषा] alike.\n\n@deva[हेमन्त] + @deva[अण्] (@ref[4.3.16]) without @deva[त]-लोप: @deva[हैमन्ती पङ्क्तिः]. Three forms exist: @deva[हैमन्तः] (@ref[4.3.16]), @deva[हैमन्तिकम्] (@ref[4.3.21]), @deva[हैमनम्] (this rule).",
            "advanced": "@deva[अण्] applies after @deva[हेमन्त] with obligatory @deva[त]-लोप, valid @deva[सर्वत्र] (both @deva[छन्दस्] and @deva[भाषा]).\n\nExamples: @deva[हैमनं वासः], @deva[हैमनम् उपलेपनम्].\n\nWithout @deva[त]-लोप: @deva[हैमन्ती पङ्क्तिः] (@ref[4.3.16]). Three derivatives: @deva[हैमन्तः] (@ref[4.3.16]), @deva[हैमन्तिकम्] (@ref[4.3.21]), @deva[हैमनम्]."
        }
    },
    "43023": {
        "en": {
            "simple": "After the words @deva[सायम्] (at evening), @deva[चिरम्] (for a long time), @deva[प्राह्णे] (in the forenoon), @deva[प्रगे] (at dawn), and after other indeclinables expressing time, the affixes @deva[ट्यु] and @deva[ट्युल्] apply, with the augment @deva[तुट्].\n\nExamples:\n• @deva[सायम्] + @deva[तुट्] + @deva[ट्यु] = @deva[सायंतनम्] (belonging to evening)\n• @deva[चिरंतनम्] (lasting, enduring)\n• @deva[प्राह्णेतनम्] (of the forenoon)\n• @deva[प्रगेतनम्] (of early dawn)\n\nFor other time-indeclinables: @deva[दोषातनम्] (of the night), @deva[दिवातनम्] (of the day).\n\nSupplementary rules (@deva[वार्त्तिक]):\n• @deva[त्न] comes after @deva[चिर], @deva[परुत्], @deva[परारि]: @deva[चिरत्नम्], @deva[परुत्नम्], @deva[परारित्नम्].\n• In Vedas, @deva[ग] of @deva[प्रग] is elided before @deva[त्न]: @deva[प्रत्नम्].\n• @deva[डिमच्] comes after @deva[अग्र], @deva[आदि], @deva[पश्चाद्]: @deva[अग्रिमम्], @deva[आदिमम्], @deva[पश्चिमम्]. Also after @deva[अन्त]: @deva[अन्तिमम्].\n\nThe difference between @deva[ट्यु] and @deva[ट्युल्] is accent.",
            "standard": "After @deva[सायम्], @deva[चिरम्], @deva[प्राह्णे], @deva[प्रगे], and @deva[कालवाचिन्] indeclinables, @deva[ट्यु] and @deva[ट्युल्] apply with @deva[तुट्]-आगम.\n\nExamples: @deva[सायंतनम्] (@ref[7.1.1]), @deva[चिरंतनम्], @deva[प्राह्णेतनम्], @deva[प्रगेतनम्]; @deva[दोषातनम्], @deva[दिवातनम्].\n\n@note[type=vārtika]: @deva[त्न] after @deva[चिर], @deva[परुत्], @deva[परारि]: @deva[चिरत्नम्], @deva[परुत्नम्], @deva[परारित्नम्].\n@note[type=vārtika]: In @deva[छन्दस्], @deva[ग]-लोप in @deva[प्रग] before @deva[त्न]: @deva[प्रत्नम्].\n@note[type=vārtika]: @deva[डिमच्] after @deva[अग्र], @deva[आदि], @deva[पश्चाद्], @deva[अन्त]: @deva[अग्रिमम्], @deva[आदिमम्], @deva[पश्चिमम्], @deva[अन्तिमम्].\n\n@deva[ट्यु]/ट्युल्] difference is @deva[स्वर]: @deva[सायन्तन] vs. @deva[सायन्तन].",
            "advanced": "@deva[ट्यु]/ट्युल्] with @deva[तुट्]-आगम apply after @deva[सायम्], @deva[चिरम्], @deva[प्राह्णे], @deva[प्रगे], and @deva[कालवाचिन्] @deva[अव्यय]s.\n\nExamples: @deva[सायंतनम्], @deva[चिरंतनम्], @deva[प्राह्णेतनम्], @deva[प्रगेतनम्], @deva[दोषातनम्], @deva[दिवातनम्].\n\n@note[type=vārtika]: @deva[चिरपरुत्परारिभ्यस्त्नः]—@deva[चिरत्नम्], @deva[परुत्नम्], @deva[परारित्नम्].\n@note[type=vārtika]: @deva[प्रगो गलोपश्छन्दसि त्नि]—@deva[प्रत्नम्].\n@note[type=vārtika]: @deva[अग्राद्यादिपश्चादन्तेभ्यो डिमच्]—@deva[अग्रिमम्], @deva[आदिमम्], @deva[पश्चिमम्], @deva[अन्तिमम्].\n\n@deva[ट्यु]/ट्युल्] are @deva[स्वरभेद]: @deva[सायन्तन]/सायन्तन]."
        }
    },
    "43024": {
        "en": {
            "simple": "After @deva[पूर्वाह्ण] (forenoon) and @deva[अपराह्ण] (afternoon), the affixes @deva[ट्यु] and @deva[ट्युल्] optionally apply with the augment @deva[तुट्].\n\nIn the alternative, @deva[ठञ्] from 4.3.11 also applies.\n\nExamples:\n• With @deva[ट्यु]/ट्युल्]: @deva[पूर्वाह्णेतनम्], @deva[अपराह्णेतनम्]\n• With @deva[ठञ्]: @deva[पौर्वाह्णिकम्], @deva[आपराह्णिकम्]\n\nThe locative sign is not elided by 6.3.17. When the word is treated as not having a case-affix: @deva[पूर्वाह्णतनम्] or @deva[पूर्वाह्णतनः].",
            "standard": "After @deva[पूर्वाह्ण] and @deva[अपराह्ण], @deva[ट्यु]/ट्युल्] with @deva[तुट्] apply optionally; alternatively @deva[ठञ्] (@ref[4.3.11]).\n\nExamples: @deva[पूर्वाह्णेतनम्], @deva[अपराह्णेतनम्] (with @deva[ट्यु]/ट्युल्]); @deva[पौर्वाह्णिकम्], @deva[आपराह्णिकम्] (with @deva[ठञ्]).\n\n@deva[सुब्लोप] (@ref[6.3.17]) does not apply. When analyzed as @deva[अविभक्तिक]: @deva[पूर्वाह्णतनम्], @deva[पूर्वाह्णतनः].",
            "advanced": "@deva[ट्यु]/ट्युल्] with @deva[तुट्] optionally apply after @deva[पूर्वाह्ण]/अपराह्ण]; @deva[ठञ्] (@ref[4.3.11]) is the alternative.\n\nExamples: @deva[पूर्वाह्णेतनम्], @deva[अपराह्णेतनम्]; @deva[पौर्वाह्णिकम्], @deva[आपराह्णिकम्].\n\n@ref[6.3.17] (@deva[सुब्लोप]) is inapplicable. @deva[अविभक्तिक]-analysis: @deva[पूर्वाह्णतनम्], @deva[पूर्वाह्णतनः]."
        }
    },
    "43025": {
        "en": {
            "simple": "The affixes taught previously and hereafter come after a word in the locative case (7th) in the sense of 'born there', 'grown there', or 'originated there/then'.\n\nThis defines one of the @deva[तद्धित] senses: @deva[तत्र जातः] (born therein).\n\nExamples:\n• @deva[स्रुघ्ने जातः] = @deva[स्रौघ्नः] (born in Srughna)\n• @deva[माथुरः] (born in Mathura)\n• @deva[औत्सः] (born in Utsa)\n• @deva[औदपानः] (born in Udapāna)\n• @deva[राष्ट्रियः] (4.2.93), @deva[अवारपारीणः] (4.2.93), @deva[शाकलिकः] (4.2.117), @deva[ग्राम्यः] (4.2.94), @deva[ग्रामीणः] (4.2.94), @deva[कात्रेयकः] (4.2.95), @deva[औम्भेयकः] (4.2.95).",
            "standard": "The previously and subsequently taught affixes apply after a @deva[सप्तम्यन्त] (locative) word in the sense @deva[तत्र जातः] (born/grown/originated therein).\n\nThis assigns the @deva[तद्धितार्थ] @deva[जात] to the affixes from @ref[4.2.92] onward.\n\nExamples: @deva[स्रुघ्ने जातः] → @deva[स्रौघ्नः]; @deva[माथुरः], @deva[औत्सः], @deva[औदपानः]; @deva[राष्ट्रियः] (@ref[4.2.93]), @deva[अवारपारीणः] (@ref[4.2.93]), @deva[शाकलिकः] (@ref[4.2.117]), @deva[ग्राम्यः] (@ref[4.2.94]), @deva[ग्रामीणः] (@ref[4.2.94]), @deva[कात्रेयकः] (@ref[4.2.95]), @deva[औम्भेयकः] (@ref[4.2.95]).",
            "advanced": "The affixes from @ref[4.2.92] onward apply after @deva[सप्तम्यन्त] in @deva[तत्र जातः] sense.\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः], @deva[औत्सः], @deva[औदपानः]; @deva[राष्ट्रियः] (@ref[4.2.93]), @deva[अवारपारीणः] (@ref[4.2.93]), @deva[शाकलिकः] (@ref[4.2.117]), @deva[ग्राम्यः]/ग्रामीणः] (@ref[4.2.94]), @deva[कात्रेयकः]/औम्भेयकः] (@ref[4.2.95]).\n\nThis @deva[अर्थसूत्र] governs the @deva[जात]-sense for @deva[तद्धित]s in this @deva[अधिकार]."
        }
    },
    "43026": {
        "en": {
            "simple": "After @deva[प्रावृट्] (rainy season) in the locative case, the affix @deva[ठप्] comes in the sense of 'produced therein'.\n\nThis replaces @deva[एण्य] from 4.3.17. The @deva[प्] in @deva[ठप्] is for accent purposes.\n\nExample: @deva[प्रावृषि जातः] = @deva[प्रावृषिकः] (produced in the rainy season).",
            "standard": "The affix @deva[ठप्] applies after @deva[प्रावृट्] (locative) in @deva[तत्र जातः] sense, debarring @deva[एण्य] (@ref[4.3.17]). The @deva[प्] is @deva[इत्] for @deva[स्वर].\n\nExample: @deva[प्रावृषि जातः] → @deva[प्रावृषिकः].",
            "advanced": "@deva[ठप्] supersedes @deva[एण्य] (@ref[4.3.17]) after @deva[प्रावृट्] (@deva[सप्तम्यन्त]) in @deva[जात]-sense. @deva[प्] = @deva[इत्] (@deva[स्वरार्थ]).\n\nExample: @deva[प्रावृषि जातः] → @deva[प्रावृषिकः]."
        }
    },
    "43027": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes after @deva[शरद्] (autumn) in the locative case, in the sense of 'born therein', when the resulting word is a proper name (@deva[संज्ञा]).\n\nThis replaces @deva[अण्].\n\nExamples: @deva[शारदका दर्भाः] (grass named Śāradaka), @deva[शारदका मुद्गाः] (pulse named Śāradaka).\n\nWhen not a name: @deva[शारदं सस्यम्] (autumnal crop, with @deva[अण्]).\n\nSome say @deva[संज्ञायाम्] governs all sūtras up to 4.3.38.",
            "standard": "The affix @deva[वुञ्] applies after @deva[शरद्] (locative) in @deva[जात]-sense when @deva[संज्ञा] (proper name), debarring @deva[अण्].\n\nExamples: @deva[शारदका दर्भाः], @deva[शारदका मुद्गाः].\n\nNon-@deva[संज्ञा]: @deva[शारदं सस्यम्].\n\nSome hold @deva[संज्ञायाम्] governs through @ref[4.3.38].",
            "advanced": "@deva[वुञ्] applies after @deva[शरद्] (@deva[सप्तम्यन्त]) in @deva[जात]-@deva[संज्ञा] sense, superseding @deva[अण्].\n\nExamples: @deva[शारदका दर्भाः], @deva[शारदका मुद्गाः]. Counter-example: @deva[शारदं सस्यम्].\n\n@deva[संज्ञायाम्] may extend as @deva[अधिकार] through @ref[4.3.38]."
        }
    },
    "43028": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes after the words @deva[पूर्वाह्ण] (forenoon), @deva[अपराह्ण] (afternoon), @deva[आर्द्रा] (the asterism Ārdrā), @deva[मूला] (the asterism Mūla), @deva[प्रदोष] (dusk), and @deva[अवस्कर] (rubbish heap), in the sense of 'born therein', when the result is a proper name.\n\nExamples:\n• @deva[पूर्वाह्णकः], @deva[अपराह्णकः] (replaces 4.3.24)\n• @deva[आर्द्रकः], @deva[मूलकः] (replaces @deva[अण्] from 4.3.16)\n• @deva[प्रदोषकः] (replaces @deva[ठञ्] from 4.3.14)\n• @deva[अवस्करकः] (replaces general @deva[अण्])\n\nWhen not a name, the other affixes apply.",
            "standard": "The affix @deva[वुञ्] applies after @deva[पूर्वाह्ण], @deva[अपराह्ण], @deva[आर्द्रा], @deva[मूला], @deva[प्रदोष], @deva[अवस्कर] in @deva[जात]-@deva[संज्ञा] sense.\n\nExamples: @deva[पूर्वाह्णकः], @deva[अपराह्णकः] (debarring @ref[4.3.24]); @deva[आर्द्रकः], @deva[मूलकः] (debarring @deva[अण्] @ref[4.3.16]); @deva[प्रदोषकः] (debarring @deva[ठञ्] @ref[4.3.14]); @deva[अवस्करकः] (debarring general @deva[अण्]).\n\nNon-@deva[संज्ञा] contexts take standard affixes.",
            "advanced": "@deva[वुञ्] applies after @deva[पूर्वाह्ण], @deva[अपराह्ण], @deva[आर्द्रा], @deva[मूला], @deva[प्रदोष], @deva[अवस्कर] in @deva[जात]-@deva[संज्ञा] sense.\n\nDebarments: @deva[पूर्वाह्णकः]/अपराह्णकः] (@ref[4.3.24]); @deva[आर्द्रकः]/मूलकः] (@ref[4.3.16]); @deva[प्रदोषकः] (@ref[4.3.14]); @deva[अवस्करकः] (general @deva[अण्]).\n\nNon-@deva[संज्ञा]: standard affixes apply."
        }
    },
    "43029": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes after @deva[पथ्] (path, way) in the sense of 'produced therein', and @deva[पथ्] is replaced by @deva[पन्थ].\n\nThis replaces @deva[अण्].\n\nExample: @deva[पथि जातः] = @deva[पन्थकः] (produced on the road).",
            "standard": "The affix @deva[वुञ्] applies after @deva[पथ्] in @deva[जात]-sense with the substitute @deva[पन्थ] for @deva[पथ्], debarring @deva[अण्].\n\nExample: @deva[पथि जातः] → @deva[पन्थकः].",
            "advanced": "@deva[वुञ्] applies after @deva[पथ्] in @deva[जात]-sense; @deva[पथादेशः पन्थ], superseding @deva[अण्].\n\nExample: @deva[पथि जातः] → @deva[पन्थकः]."
        }
    },
    "43030": {
        "en": {
            "simple": "The affix @deva[वुञ्] optionally comes after @deva[अमावास्या] (new moon day) in the sense of 'born therein'.\n\nThis replaces @deva[अण्] from 4.3.16.\n\nExamples: @deva[अमावास्यकः] (with @deva[वुञ्]) or @deva[आमावास्यः] (with @deva[अण्]).\n\nThe word @deva[अमावस्य] (variant form) also takes these affixes based on the principle that a word changed in one part remains essentially the same (@deva[एकदेशविकृतस्यानन्यत्वात्]). Thus: @deva[अमावस्यकः] or @deva[आमावस्यः].",
            "standard": "The affix @deva[वुञ्] optionally applies after @deva[अमावास्या] in @deva[जात]-sense, debarring @deva[अण्] (@ref[4.3.16]).\n\nExamples: @deva[अमावास्यकः] (with @deva[वुञ्]) or @deva[आमावास्यः] (with @deva[अण्]).\n\n@deva[अमावस्य] (variant) also takes these by @deva[एकदेशविकृतस्यानन्यत्वात्]: @deva[अमावस्यकः], @deva[आमावस्यः].",
            "advanced": "@deva[वुञ्] optionally applies after @deva[अमावास्या] in @deva[जात]-sense, superseding @deva[अण्] (@ref[4.3.16]).\n\nExamples: @deva[अमावास्यकः] / @deva[आमावास्यः].\n\n@deva[अमावस्य] is governed by @deva[एकदेशविकृतस्यानन्यत्वात्]-न्याय: @deva[अमावस्यकः], @deva[आमावस्यः]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.3.16-4.3.30 (Batch 2 of 4.3)")
