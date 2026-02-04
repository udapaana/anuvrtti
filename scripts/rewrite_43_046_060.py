#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.3.46-4.3.60 (Batch 4 of 4.3)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "43046": {
        "en": {
            "simple": "The affix @deva[वुञ्] optionally comes after @deva[ग्रीष्म] (summer) and @deva[वसन्त] (spring) in the sense of 'sown therein'.\n\nThis replaces @deva[अण्] from 4.3.16.\n\nExamples: @deva[ग्रैष्मं सस्यम्] or @deva[ग्रैष्मकं सस्यम्] (crop sown in summer), @deva[वासन्तम्] or @deva[वासन्तकम्] (sown in spring).",
            "standard": "The affix @deva[वुञ्] optionally applies after @deva[ग्रीष्म] and @deva[वसन्त] in @deva[उप्त] sense, debarring @deva[अण्] (@ref[4.3.16]).\n\nExamples: @deva[ग्रैष्मम्] / @deva[ग्रैष्मकं सस्यम्]; @deva[वासन्तम्] / @deva[वासन्तकम्].",
            "advanced": "@deva[वुञ्] optionally applies after @deva[ग्रीष्म]/वसन्त] in @deva[उप्त] sense, superseding @deva[अण्] (@ref[4.3.16]).\n\nExamples: @deva[ग्रैष्मम्]/ग्रैष्मकम्], @deva[वासन्तम्]/वासन्तकम्]."
        }
    },
    "43047": {
        "en": {
            "simple": "After a @deva[प्रातिपदिक] (nominal stem) denoting time in the locative case, an affix comes in the sense of 'being then due', provided that the thing due is a debt (@deva[ऋण]).\n\nExamples: @deva[मासे देयम् ऋणम्] = @deva[मासिकम्] (a debt due in a month), @deva[आर्धमासिकम्] (due in a fortnight), @deva[सांवत्सरिकम्] (annual debt).\n\nWhy @deva[ऋणे] (debt)? Observe @deva[मासे देया भिक्षा] (alms due in a month)—here no affix is added because it's not a debt.",
            "standard": "After @deva[कालवाचिन्] (@deva[सप्तम्यन्त]), an affix applies in @deva[देय] (due) sense when the object is @deva[ऋण] (debt).\n\nExamples: @deva[मासिकम्] (monthly debt), @deva[आर्धमासिकम्], @deva[सांवत्सरिकम्].\n\nCondition @deva[ऋणे]: @deva[मासे देया भिक्षा] takes no affix since it's not debt.",
            "advanced": "After @deva[कालवाचिन्] (@deva[सप्तम्यन्त]), affixes apply in @deva[देय]-sense when @deva[ऋण]-restricted.\n\nExamples: @deva[मासिकम्], @deva[आर्धमासिकम्], @deva[सांवत्सरिकम्]. Counter-example: @deva[मासे देया भिक्षा]—no affix since non-@deva[ऋण]."
        }
    },
    "43048": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes in the sense of 'debt then due' after @deva[कलापिन्], @deva[अश्वत्थ], and @deva[यवबुस्], which are words that indirectly denote time.\n\n@deva[कलापी] (peacock) = the mating/rainy season when peacocks display. @deva[अश्वत्थ] (sacred fig tree) = the time of its fruiting. @deva[यवबुस्] (barley chaff) = the time of threshing.\n\nExamples: @deva[कलापिनि काले देयम् ऋणम्] = @deva[कलापकम्] (debt due in peacock-mating season), @deva[अश्वत्थकम्], @deva[यवबुसकम्].",
            "standard": "The affix @deva[वुञ्] applies after @deva[कलापिन्], @deva[अश्वत्थ], @deva[यवबुस्] in @deva[ऋण]-@deva[देय] sense. These words denote time indirectly.\n\n@deva[कलापी] = peacock-mating season; @deva[अश्वत्थ] = fig-fruiting season; @deva[यवबुस्] = barley-threshing time.\n\nExamples: @deva[कलापकम्], @deva[अश्वत्थकम्], @deva[यवबुसकम्].",
            "advanced": "@deva[वुञ्] applies after @deva[कलापिन्]/अश्वत्थ]/यवबुस्] in @deva[ऋण]-@deva[देय] sense. These are @deva[अप्रत्यक्षकालवाचिन्].\n\nExamples: @deva[कलापकम्], @deva[अश्वत्थकम्], @deva[यवबुसकम्]."
        }
    },
    "43049": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes in the sense of 'debt due' after @deva[ग्रीष्म] (summer) and @deva[अवरसम] (the past year or next year).\n\nThis replaces @deva[अण्] and @deva[ठञ्].\n\nExamples: @deva[ग्रीष्मे देयम् ऋणम्] = @deva[ग्रैष्मकम्] (summer debt), @deva[आवरसमकम्] (debt due in the past/coming year).\n\nThis @deva[वुञ्] causes @deva[वृद्धि], whereas @deva[वुन्] would not—hence the separate rule. @deva[समा] = @deva[वर्ष] (year). @deva[आवरसमकम्] means 'due in the first year of the coming years' or 'due in the past year though unpaid'.",
            "standard": "The affix @deva[वुञ्] applies after @deva[ग्रीष्म] and @deva[अवरसम] in @deva[ऋण]-@deva[देय] sense, debarring @deva[अण्]/ठञ्].\n\nExamples: @deva[ग्रैष्मकम्], @deva[आवरसमकम्].\n\n@deva[वुञ्] (not @deva[वुन्]) causes @deva[वृद्धि]. @deva[समा] = @deva[वर्ष]. @deva[आवरसमकम्] = @deva[आगामिनां संवत्सराणाम् आद्यवत्सरे देयम्] or @deva[अतीते वत्सरे देयं यद्यपि न दत्तम्].",
            "advanced": "@deva[वुञ्] applies after @deva[ग्रीष्म]/अवरसम] in @deva[ऋण]-@deva[देय] sense, superseding @deva[अण्]/ठञ्]. @deva[वुञ्] ≠ @deva[वुन्] due to @deva[वृद्धि]-effect.\n\nExamples: @deva[ग्रैष्मकम्], @deva[आवरसमकम्]. @deva[समा] = @deva[वर्ष]."
        }
    },
    "43050": {
        "en": {
            "simple": "The affix @deva[ठञ्] (as well as @deva[वुञ्]) comes after @deva[संवत्सर] (year) and @deva[आग्रहायणी] (a month name) in the sense of 'debt due'.\n\nExamples: @deva[संवत्सरे देयम् ऋणम्] = @deva[सांवत्सरिकम्] (with @deva[ठञ्]) or @deva[सांवत्सरकम्] (with @deva[वुञ्]). Similarly @deva[आग्रहायणिकम्] or @deva[आग्रहायणकम्].\n\n@deva[संवत्सर] is in the @deva[संधिवेलादि] class (4.3.16) and takes @deva[अण्] for 'fruit' or 'festival'. This rule ordains @deva[ठञ्] for 'debt'.",
            "standard": "Both @deva[ठञ्] and @deva[वुञ्] apply after @deva[संवत्सर] and @deva[आग्रहायणी] in @deva[ऋण]-@deva[देय] sense.\n\nExamples: @deva[सांवत्सरिकम्] / @deva[सांवत्सरकम्]; @deva[आग्रहायणिकम्] / @deva[आग्रहायणकम्].\n\n@deva[संवत्सर] ∈ @deva[संधिवेलादि] (@ref[4.3.16]) takes @deva[अण्] for @deva[फल]/पर्व]; @deva[ठञ्] applies for @deva[ऋण].",
            "advanced": "@deva[ठञ्] (plus @deva[वुञ्] via @deva[च]) applies after @deva[संवत्सर]/आग्रहायणी] in @deva[ऋण]-@deva[देय] sense.\n\nExamples: @deva[सांवत्सरिकम्]/सांवत्सरकम्], @deva[आग्रहायणिकम्]/आग्रहायणकम्]. @deva[संधिवेलादि] (@ref[4.3.16]) assigns @deva[अण्] for @deva[फल]/पर्व]."
        }
    },
    "43051": {
        "en": {
            "simple": "An affix comes after a word denoting time in the locative case, in the sense of 'a wild animal that wanders then' (@deva[व्याहरति मृगः]).\n\nExamples: @deva[निशायां व्याहरति मृगः] = @deva[नैशः] (an animal that wanders at night), @deva[प्रादोषः] or @deva[प्रादोषिकः] (a beast that roams at dusk).\n\nWhy @deva[मृग] (wild beast)? Observe @deva[निशायां व्याहरति उलूकः] (the owl hoots at night)—no affix, since @deva[उलूक] is a bird, not a @deva[मृग].\n\n@deva[व्याहरति] also means 'to make noise', so the rule can mean: 'an affix for a wild beast that makes noise at that time'.",
            "standard": "An affix applies after @deva[कालवाचिन्] (@deva[सप्तम्यन्त]) in @deva[व्याहरति मृगः] sense (wild beast that wanders/makes noise then).\n\nExamples: @deva[नैशः मृगः]; @deva[प्रादोषः]/प्रादोषिकः] (@ref[4.3.14]).\n\nCondition @deva[मृगः]: @deva[निशायां व्याहरति उलूकः]—no affix since non-@deva[मृग]. @deva[व्याहरति] = wander or make noise.",
            "advanced": "Affixes apply after @deva[कालवाचिन्] in @deva[व्याहरति मृगः] sense.\n\nExamples: @deva[नैशः], @deva[प्रादोषः]/प्रादोषिकः]. Condition: @deva[मृग]; counter-example: @deva[उलूकः]. @deva[व्याहरति] = wander / make noise."
        }
    },
    "43052": {
        "en": {
            "simple": "An affix comes after a word denoting time in the nominative case (1st), in the sense of 'this is his habit or endurance' (@deva[तत् सोढम्]).\n\n@deva[सोढम्] = endured or habituated (@deva[जितम्], @deva[अभ्यस्तम्]).\n\nExample: @deva[निशा सहचरितम् अध्ययनम्] (studying practiced at night) + 'that is his endurance' = @deva[नैशः] or @deva[नैशिकः] छात्रः (a student habituated to night study). Similarly @deva[प्रादोषिकः] or @deva[प्रादोषः].",
            "standard": "An affix applies after @deva[कालवाचिन्] (@deva[प्रथमान्त]) in @deva[तत्सोढम्] sense (habituated to that time).\n\n@deva[सोढम्] = @deva[जितम्]/अभ्यस्तम्].\n\nExample: @deva[निशा सहचरितम् अध्ययनं तत्सोढम् अस्य] → @deva[नैशः]/नैशिकः] छात्रः. Similarly @deva[प्रादोषिकः]/प्रादोषः].",
            "advanced": "Affixes apply after @deva[कालवाचिन्] (@deva[प्रथमान्त]) in @deva[तत्सोढम्] sense.\n\n@deva[सोढम्] = @deva[अभ्यस्तम्]. Example: @deva[नैशः]/नैशिकः] छात्रः, @deva[प्रादोषिकः]/प्रादोषः]."
        }
    },
    "43053": {
        "en": {
            "simple": "An affix comes after a word in the locative case in the sense of 'who stays there' (@deva[तत्र भवः]).\n\nThe @deva[अनुवृत्ति] of @deva[काल] ceases here. @deva[भव] here means 'existence' or 'dwelling', not 'birth'—that sense was covered in @deva[तत्र जातः] (4.3.25).\n\nExamples: @deva[स्रुघ्ने भवः] = @deva[स्रौघ्नः] (one who dwells in Srughna), @deva[माथुरः], @deva[राष्ट्रियः].\n\nThe repetition of @deva[तत्र] (though its @deva[अनुवृत्ति] could continue) is to stop the continuation of @deva[तदस्य] from earlier rules.",
            "standard": "An affix applies after @deva[सप्तम्यन्त] in @deva[तत्र भवः] sense (dwelling there). @deva[कालात्]-@deva[अनुवृत्ति] ceases. @deva[भव] = existence/dwelling, not birth (@ref[4.3.25] = @deva[जात]).\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः], @deva[राष्ट्रियः].\n\nRepetition of @deva[तत्र] terminates @deva[तदस्य]-@deva[अनुवृत्ति].",
            "advanced": "Affixes apply after @deva[सप्तम्यन्त] in @deva[तत्र भवः] sense. @deva[कालात्]-@deva[अनुवृत्ति] terminates. @deva[भव] ≠ @deva[जात] (@ref[4.3.25]).\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः], @deva[राष्ट्रियः]. @deva[तत्र]-repetition blocks @deva[तदस्य]-@deva[अनुवृत्ति]."
        }
    },
    "43054": {
        "en": {
            "simple": "The affix @deva[यत्] comes after the words @deva[दिश्] (direction), @deva[वर्ग] (class), and others in the @deva[दिगादि] list, in the sense of 'who stays there'.\n\nThis replaces @deva[अण्] and @deva[छ].\n\nExamples: @deva[दिशि भवम्] = @deva[दिश्यम्] (lying in a direction), @deva[वर्ग्यम्].\n\n@deva[मुख] and @deva[जघन] here don't mean 'mouth' and 'hip' but 'van' and 'rear' of an army: @deva[सेनामुख्यम्] (at the front), @deva[सेनाजघन्यम्] (at the rear).\n\n@deva[उदक्] takes @deva[यत्] when forming a name: @deva[उदक्या] = @deva[रजस्वला] (a menstruating woman). Otherwise: @deva[औदको मत्स्यः] (aquatic fish).\n\nThe @deva[दिगादि] list: @deva[दिश्], @deva[वर्ग], @deva[पूग], @deva[गण], @deva[पक्ष], @deva[धाय्य], @deva[मित्र], @deva[मेधा], @deva[अन्तर], @deva[पथिन्], @deva[रहस्], @deva[अलीक], @deva[उखा], @deva[साक्षिन्], @deva[देश], @deva[आदि], @deva[अन्त], @deva[मुख], @deva[जघन], @deva[मेघ], @deva[यूथ], @deva[उदकात्संज्ञायाम्], @deva[न्याय], @deva[वंश], @deva[वेश], @deva[काल], @deva[आकाश], @deva[अनुवंश].",
            "standard": "The affix @deva[यत्] applies after @deva[दिगादि] words in @deva[भव] sense, debarring @deva[अण्]/छ].\n\nExamples: @deva[दिश्यम्], @deva[वर्ग्यम्]; @deva[सेनामुख्यम्] (van), @deva[सेनाजघन्यम्] (rear).\n\n@deva[उदक्] + @deva[यत्] (@deva[संज्ञायाम्]): @deva[उदक्या] = @deva[रजस्वला]; otherwise @deva[औदको मत्स्यः].\n\n@deva[दिगादि] gaṇa: @deva[दिश्], @deva[वर्ग], @deva[पूग], @deva[गण], @deva[पक्ष], @deva[धाय्य], @deva[मित्र], @deva[मेधा], @deva[अन्तर], @deva[पथिन्], @deva[रहस्], @deva[अलीक], @deva[उखा], @deva[साक्षिन्], @deva[देश], @deva[आदि], @deva[अन्त], @deva[मुख], @deva[जघन], @deva[मेघ], @deva[यूथ], @deva[उदकात्संज्ञायाम्], @deva[न्याय], @deva[वंश], @deva[वेश], @deva[काल], @deva[आकाश], @deva[अनुवंश].",
            "advanced": "@deva[यत्] applies after @deva[दिगादि] in @deva[भव] sense, superseding @deva[अण्]/छ].\n\nExamples: @deva[दिश्यम्], @deva[वर्ग्यम्], @deva[सेनामुख्यम्], @deva[सेनाजघन्यम्]. @deva[उदक्] + @deva[यत्] (@deva[संज्ञायाम्]): @deva[उदक्या]; else @deva[औदको मत्स्यः].\n\n@deva[दिगादि]: @deva[दिश्], @deva[वर्ग], @deva[पूग], @deva[गण], @deva[पक्ष], @deva[धाय्य], @deva[मित्र], @deva[मेधा], @deva[अन्तर], @deva[पथिन्], @deva[रहस्], @deva[अलीक], @deva[उखा], @deva[साक्षिन्], @deva[देश], @deva[आदि], @deva[अन्त], @deva[मुख], @deva[जघन], @deva[मेघ], @deva[यूथ], @deva[उदकात्संज्ञायाम्], @deva[न्याय], @deva[वंश], @deva[वेश], @deva[काल], @deva[आकाश], @deva[अनुवंश]."
        }
    },
    "43055": {
        "en": {
            "simple": "The affix @deva[यत्] comes in the sense of 'what stays there' after a word denoting a part of the body (@deva[अङ्गावयव]).\n\nThis replaces @deva[अण्].\n\nExamples:\n• @deva[दन्तेषु भवम्] = @deva[दन्त्यम्] (dental, what occurs at the teeth)\n• @deva[कर्ण्यम्] (aural), @deva[ओष्ठ्यम्] (labial)\n• @deva[पादे भवम्] = @deva[पद्यम्] (6.3.53)\n• @deva[नासिकायां भवम्] = @deva[नस्यम्] (nasal)",
            "standard": "The affix @deva[यत्] applies after @deva[अङ्गावयव]-denoting words in @deva[भव] sense, debarring @deva[अण्].\n\nExamples: @deva[दन्त्यम्], @deva[कर्ण्यम्], @deva[ओष्ठ्यम्]; @deva[पद्यम्] (@ref[6.3.53]), @deva[नस्यम्].",
            "advanced": "@deva[यत्] applies after @deva[अङ्गावयव] in @deva[भव] sense, superseding @deva[अण्].\n\nExamples: @deva[दन्त्यम्], @deva[कर्ण्यम्], @deva[ओष्ठ्यम्], @deva[पद्यम्] (@ref[6.3.53]), @deva[नस्यम्]."
        }
    },
    "43056": {
        "en": {
            "simple": "The affix @deva[ढञ्] comes in the sense of 'what stays there' after @deva[दृति] (leather bag), @deva[कुक्षि] (belly), @deva[कलशि] (pot), @deva[वस्ति] (bladder), @deva[अस्ति] (existence/substance), and @deva[अहि] (snake).\n\nExamples: @deva[दार्तेयम्] (what stays in a leather bag), @deva[कौक्षेयम्], @deva[कालशेयम्], @deva[वास्तेयम्], @deva[आस्तेयम्], @deva[आहेयम्] (snake-poison, a type of venom).\n\n@deva[अस्ति] here is a noun (as in @deva[अस्तिक्षीरा गौः] 'a cow with milk', @deva[अस्तिमान्] = @deva[धनवान्] 'wealthy'), not the verb.",
            "standard": "The affix @deva[ढञ्] applies after @deva[दृति], @deva[कुक्षि], @deva[कलशि], @deva[वस्ति], @deva[अस्ति], @deva[अहि] in @deva[भव] sense.\n\nExamples: @deva[दार्तेयम्], @deva[कौक्षेयम्], @deva[कालशेयम्], @deva[वास्तेयम्], @deva[आस्तेयम्], @deva[आहेयम्] (snake-poison).\n\n@deva[अस्ति] = noun (cf. @deva[अस्तिक्षीरा गौः], @deva[अस्तिमान्] = @deva[धनवान्]), not verb.",
            "advanced": "@deva[ढञ्] applies after @deva[दृति], @deva[कुक्षि], @deva[कलशि], @deva[वस्ति], @deva[अस्ति], @deva[अहि] in @deva[भव] sense.\n\nExamples: @deva[दार्तेयम्], @deva[कौक्षेयम्], @deva[कालशेयम्], @deva[वास्तेयम्], @deva[आस्तेयम्], @deva[आहेयम्]. @deva[अस्ति] = nominal (cf. @deva[अस्तिक्षीरा गौः])."
        }
    },
    "43057": {
        "en": {
            "simple": "The affix @deva[अण्] (as well as @deva[ढञ्]) comes after @deva[ग्रीवा] (neck/blood vessels) in the sense of 'what stays there'.\n\nThis replaces @deva[यत्] from 4.3.55.\n\nExamples: @deva[ग्रीवासु भवम्] = @deva[ग्रैवेयम्] (with @deva[ढञ्]) or @deva[ग्रैवम्] (with @deva[अण्]).\n\n@deva[ग्रीवा] means blood vessels (hence plural @deva[ग्रीवाभ्यः] in the sūtra).",
            "standard": "The affix @deva[अण्] also applies after @deva[ग्रीवा] (plural, blood vessels) in @deva[भव] sense, debarring @deva[यत्] (@ref[4.3.55]).\n\nExamples: @deva[ग्रैवेयम्] (with @deva[ढञ्]) / @deva[ग्रैवम्] (with @deva[अण्]).",
            "advanced": "@deva[अण्] (plus @deva[ढञ्] via @deva[च]) applies after @deva[ग्रीवा] (plural) in @deva[भव] sense, superseding @deva[यत्] (@ref[4.3.55]).\n\nExamples: @deva[ग्रैवेयम्]/ग्रैवम्]."
        }
    },
    "43058": {
        "en": {
            "simple": "The affix @deva[ञ्य] (= @deva[य]) comes in the sense of 'who stays there' after @deva[गम्भीर] (deep/profound).\n\nThis replaces @deva[अण्].\n\nExample: @deva[गम्भीरे भवम्] = @deva[गाम्भीर्यम्] (gravity, profundity).\n\nSupplementary rules (@deva[वार्त्तिक]):\n• After @deva[बहिस्], @deva[देव], @deva[पञ्चजन]: @deva[बाह्यम्], @deva[दैव्यम्], @deva[पाञ्चजन्यम्]. The final of @deva[बहिस्] is elided (cf. 4.1.85). @deva[दैव्य] can also form by another vārtika.\n• @deva[ञ्य] after @deva[चतुर्मास] when meaning sacrifice: @deva[चातुर्मास्यानि व्रतानि], @deva[चातुर्मास्यो यज्ञः]. Otherwise @deva[चातुर्मासः].",
            "standard": "The affix @deva[ञ्य] applies after @deva[गम्भीर] in @deva[भव] sense, debarring @deva[अण्].\n\nExample: @deva[गाम्भीर्यम्] (profundity).\n\n@note[type=vārtika]: After @deva[बहिस्], @deva[देव], @deva[पञ्चजन]: @deva[बाह्यम्], @deva[दैव्यम्], @deva[पाञ्चजन्यम्]. @deva[बहिस्]-अन्त्यलोप per @ref[4.1.85]-वार्त्तिक.\n@note[type=vārtika]: @deva[ञ्य] after @deva[चतुर्मास] in @deva[यज्ञ]-sense: @deva[चातुर्मास्यानि व्रतानि]; else @deva[चातुर्मासः].",
            "advanced": "@deva[ञ्य] applies after @deva[गम्भीर] in @deva[भव] sense, superseding @deva[अण्].\n\nExample: @deva[गाम्भीर्यम्].\n\n@note[type=vārtika]: @deva[बहिर्देवपञ्चजनेभ्यश्च]—@deva[बाह्यम्], @deva[दैव्यम्], @deva[पाञ्चजन्यम्].\n@note[type=vārtika]: @deva[चतुर्मासाद्यज्ञे]—@deva[चातुर्मास्यानि]; else @deva[चातुर्मासः]."
        }
    },
    "43059": {
        "en": {
            "simple": "After an @deva[अव्ययीभाव] compound, the affix @deva[ञ्य] is used in the sense of 'who stays there'.\n\nThis replaces @deva[अण्]. However, @deva[ञ्य] only applies to words in the @deva[परिमुखादि] list.\n\nExamples: @deva[परिमुखं भवम्] = @deva[पारिमुख्यम्], @deva[पारिहनव्यम्].\n\nNot so for @deva[औपकुलम्], since @deva[उपकुल] is not in @deva[परिमुखादि].\n\n@deva[परिमुखादि] list: @deva[परिमुख], @deva[परिहनु], @deva[पर्योष्ठ], @deva[पर्युलूख], @deva[औपमूल], @deva[खल], @deva[परिसीर], @deva[अनुसीर], @deva[उपसीर], @deva[उपस्थल], @deva[उपकलाप], @deva[अनुपथ], @deva[अनुखड्ग], @deva[अनुतिल], @deva[अनुशीत], @deva[अनुमाष], @deva[अनुयव], @deva[अनुयूप], @deva[अनुवंश], @deva[अनुगङ्गम्], @deva[प्रतिशाख], @deva[अनुसाय].",
            "standard": "The affix @deva[ञ्य] applies after @deva[अव्ययीभाव] compounds in @deva[भव] sense, limited to @deva[परिमुखादि], debarring @deva[अण्].\n\nExamples: @deva[पारिमुख्यम्], @deva[पारिहनव्यम्]. Not @deva[औपकुलम्] (non-@deva[परिमुखादि]).\n\n@deva[परिमुखादि]: @deva[परिमुख], @deva[परिहनु], @deva[पर्योष्ठ], @deva[पर्युलूख], @deva[औपमूल], @deva[खल], @deva[परिसीर], @deva[अनुसीर], @deva[उपसीर], @deva[उपस्थल], @deva[उपकलाप], @deva[अनुपथ], @deva[अनुखड्ग], @deva[अनुतिल], @deva[अनुशीत], @deva[अनुमाष], @deva[अनुयव], @deva[अनुयूप], @deva[अनुवंश], @deva[अनुगङ्गम्], @deva[प्रतिशाख], @deva[अनुसाय].",
            "advanced": "@deva[ञ्य] applies after @deva[अव्ययीभाव] (@deva[परिमुखादि]) in @deva[भव] sense, superseding @deva[अण्].\n\nExamples: @deva[पारिमुख्यम्], @deva[पारिहनव्यम्]. Non-@deva[परिमुखादि]: @deva[औपकुलम्].\n\n@deva[परिमुखादि] gaṇa lists 22 items."
        }
    },
    "43060": {
        "en": {
            "simple": "After an @deva[अव्ययीभाव] compound with @deva[अन्तर्] as the prior member, the affix @deva[ठञ्] is used in the sense of 'who stays there'.\n\nThis replaces @deva[अण्].\n\nExamples: @deva[आन्तर्वेश्मिकम्] (within the house), @deva[आन्तर्गेहिकम्] (within the home).\n\nSupplementary rules (@deva[वार्त्तिक]):\n• @deva[ठञ्] after @deva[समान] and compounds beginning with it: @deva[सामानिकम्], @deva[सामानग्रामिकम्], @deva[सामानदेशिकम्].\n• @deva[ठञ्] after @deva[अध्यात्मादि]: @deva[आध्यात्मिकम्], @deva[आधिदैविकम्], @deva[आधिभौतिकम्].\n• @deva[ठञ्] after @deva[ऊर्ध्वदम], @deva[ऊर्ध्वदेह]: @deva[और्ध्वदमिकः], @deva[और्ध्वदेहिकम्].\n• @deva[ठञ्] after compounds with @deva[लोक] as second member: @deva[ऐहलौकिकम्], @deva[पारलौकिकम्].\n• @deva[ईय] after @deva[मुखतस्], @deva[पार्श्वतस्]: @deva[मुखतीयम्], @deva[पार्श्वतीयम्].\n• @deva[ईय] with @deva[कुक्] augment after @deva[जन], @deva[पर]: @deva[जनकीयम्], @deva[परकीयम्].\n• @deva[ईय], @deva[मण्], @deva[मीय], @deva[दिनण्] after @deva[मध्य]: @deva[मध्यीयः], @deva[माध्यमम्], @deva[माध्यमीयम्], @deva[माध्यन्दिनम्].\n• @deva[लुक्] after @deva[स्थाम्न]: @deva[अश्वत्थामा].\n• @deva[लुक्] after words ending in @deva[अजिन]: @deva[वृकाजिनः], @deva[सिंहाजिनः].",
            "standard": "The affix @deva[ठञ्] applies after @deva[अन्तर्]-prefixed @deva[अव्ययीभाव] in @deva[भव] sense, debarring @deva[अण्].\n\nExamples: @deva[आन्तर्वेश्मिकम्], @deva[आन्तर्गेहिकम्].\n\n@note[type=vārtika]: @deva[ठञ्] after @deva[समान]/समानादि]: @deva[सामानिकम्], @deva[सामानग्रामिकम्].\n@note[type=vārtika]: @deva[अध्यात्मादि] (@deva[आकृतिगण]): @deva[आध्यात्मिकम्], @deva[आधिदैविकम्], @deva[आधिभौतिकम्].\n@note[type=vārtika]: @deva[ऊर्ध्वदम]/ऊर्ध्वदेह]: @deva[और्ध्वदमिकः], @deva[और्ध्वदेहिकम्].\n@note[type=vārtika]: @deva[लोकोत्तरपद]: @deva[ऐहलौकिकम्], @deva[पारलौकिकम्].\n@note[type=vārtika]: @deva[मुखपार्श्वतसोरीयः]: @deva[मुखतीयम्], @deva[पार्श्वतीयम्].\n@note[type=vārtika]: @deva[जनपरयोः कुक्]: @deva[जनकीयम्], @deva[परकीयम्].\n@note[type=vārtika]: @deva[मध्यस्य ईय/मण्/मीय/दिनण्]: @deva[मध्यीयः], @deva[माध्यमम्], @deva[माध्यमीयम्], @deva[माध्यन्दिनम्].\n@note[type=vārtika]: @deva[स्थाम्नो लुक्]: @deva[अश्वत्थामा].\n@note[type=vārtika]: @deva[अजिनान्ताल्लुक्]: @deva[वृकाजिनः], @deva[सिंहाजिनः].",
            "advanced": "@deva[ठञ्] applies after @deva[अन्तर्]-@deva[अव्ययीभाव] in @deva[भव] sense, superseding @deva[अण्].\n\nExamples: @deva[आन्तर्वेश्मिकम्], @deva[आन्तर्गेहिकम्].\n\n@note[type=vārtika]: @deva[समानाद्ठञ्], @deva[तदादेश्च]; @deva[अध्यात्मादिषु] (@deva[आकृतिगण]); @deva[ऊर्ध्वदमाच्च देहाच्च]; @deva[लोकोत्तरपदस्य च]; @deva[मुखपार्श्वतसोरीयः]; @deva[कुग्जनस्य परस्य च]; @deva[मध्यस्य ईय/मण्/मीय/दिनण्]; @deva[स्थाम्नो लुक्]; @deva[अजिनान्ताल्लुक्]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.3.46-4.3.60 (Batch 4 of 4.3)")
