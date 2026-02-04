#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.3.31-4.3.45 (Batch 3 of 4.3)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "43031": {
        "en": {
            "simple": "The affix @deva[अ] is also added to @deva[अमावास्या] (new moon day) in the sense of 'born therein'.\n\nThis adds a third affix alongside @deva[वुञ्] and @deva[अण्] from the previous rules.\n\nThree forms exist: @deva[अमावास्यः] (with @deva[अ]), @deva[अमावास्यकः] (with @deva[वुञ्]), @deva[आमावास्यः] (with @deva[अण्]).\n\nThe variant @deva[अमावस्य] also takes these: @deva[अमावस्यः], @deva[अमावस्यकः], @deva[आमावस्यः].",
            "standard": "The affix @deva[अ] also applies after @deva[अमावास्या] in @deva[जात]-sense, adding to @deva[वुञ्] (@ref[4.3.30]) and @deva[अण्].\n\nThree forms: @deva[अमावास्यः] (with @deva[अ]), @deva[अमावास्यकः] (with @deva[वुञ्]), @deva[आमावास्यः] (with @deva[अण्]).\n\n@deva[अमावस्य] variant: @deva[अमावस्यः], @deva[अमावस्यकः], @deva[आमावस्यः].",
            "advanced": "@deva[अ] is additionally ordained after @deva[अमावास्या] in @deva[जात]-sense, supplementing @deva[वुञ्] (@ref[4.3.30]) and @deva[अण्].\n\nForms: @deva[अमावास्यः], @deva[अमावास्यकः], @deva[आमावास्यः]; @deva[अमावस्य]: @deva[अमावस्यः], @deva[अमावस्यकः], @deva[आमावस्यः]."
        }
    },
    "43032": {
        "en": {
            "simple": "The affix @deva[कन्] comes after @deva[सिन्धु] (the Indus river) and @deva[अपकर] (a place name) in the sense of 'born therein'.\n\n@deva[सिन्धु] is in the @deva[कच्छादि] class and would take @deva[अण्] and @deva[वुञ्] by 4.2.133. @deva[अपकर] would take general @deva[अण्]. This rule replaces both.\n\nExamples: @deva[सिन्धुकः] (born in Sindhu), @deva[अपकरकः] (born in Apakara).",
            "standard": "The affix @deva[कन्] applies after @deva[सिन्धु] and @deva[अपकर] in @deva[जात]-sense, debarring @deva[अण्]/वुञ्] (@ref[4.2.133]) for @deva[सिन्धु] and general @deva[अण्] for @deva[अपकर].\n\nExamples: @deva[सिन्धुकः], @deva[अपकरकः].",
            "advanced": "@deva[कन्] is ordained after @deva[सिन्धु] (@deva[कच्छादि], @ref[4.2.133]) and @deva[अपकर] in @deva[जात]-sense, superseding @deva[अण्]/वुञ्] and general @deva[अण्] respectively.\n\nExamples: @deva[सिन्धुकः], @deva[अपकरकः]."
        }
    },
    "43033": {
        "en": {
            "simple": "The affixes @deva[अण्] and @deva[अञ्] come after @deva[सिन्धु] and @deva[अपकर] respectively (in addition to @deva[कन्] from the previous rule).\n\nExamples: @deva[सैन्धवः] (from Sindhu, with @deva[अण्]), @deva[आपकरः] (from Apakara, with @deva[अञ्]).",
            "standard": "The affixes @deva[अण्] and @deva[अञ्] apply after @deva[सिन्धु] and @deva[अपकर] respectively, in addition to @deva[कन्] (@ref[4.3.32]).\n\nExamples: @deva[सैन्धवः], @deva[आपकरः].",
            "advanced": "@deva[अण्] after @deva[सिन्धु], @deva[अञ्] after @deva[अपकर]—supplementing @deva[कन्] (@ref[4.3.32]).\n\nExamples: @deva[सैन्धवः], @deva[आपकरः]."
        }
    },
    "43034": {
        "en": {
            "simple": "The affix denoting 'born therein' is elided by @deva[लुक्] after the asterism names: @deva[श्रविष्ठा], @deva[फाल्गुनी], @deva[अनुराधा], @deva[स्वाति], @deva[तिष्य], @deva[पुनर्वसु], @deva[हस्त], @deva[विशाखा], @deva[आषाढा], and @deva[बहुला].\n\nThe feminine affixes are also elided by 1.2.49.\n\nExamples: @deva[श्रविष्ठासु जातः] = @deva[श्रविष्ठः] (born under Śraviṣṭhā). Similarly: @deva[फल्गुनः], @deva[अनुराधः], @deva[स्वातिः], @deva[तिष्यः], @deva[पुनर्वसुः], @deva[हस्तः], @deva[विशाखः], @deva[आषाढः], @deva[बहुलः]. @deva[बहुला] is another name for @deva[कृत्तिका].\n\nSupplementary rules:\n• After @deva[चित्रा], @deva[रेवती], @deva[रोहिणी], the affix is elided when forming feminine derivatives: @deva[चित्रायां जाता] = @deva[चित्रा].\n• @deva[ट] and @deva[अन्] come after @deva[फल्गुनी] and @deva[आषाढा] for feminine: @deva[फल्गुनी], @deva[आषाढा].\n• @deva[छण्] also comes after @deva[श्रविष्ठा] and @deva[आषाढा]: @deva[श्राविष्ठीयः], @deva[आषाढीयः].",
            "standard": "The @deva[जात]-affix undergoes @deva[लुक्] after asterisms @deva[श्रविष्ठा], @deva[फाल्गुनी], @deva[अनुराधा], @deva[स्वाति], @deva[तिष्य], @deva[पुनर्वसु], @deva[हस्त], @deva[विशाखा], @deva[आषाढा], @deva[बहुला]. Feminine affixes also elide by @ref[1.2.49].\n\nExamples: @deva[श्रविष्ठः], @deva[फल्गुनः], @deva[अनुराधः], @deva[स्वातिः], @deva[तिष्यः], @deva[पुनर्वसुः], @deva[हस्तः], @deva[विशाखः], @deva[आषाढः], @deva[बहुलः]. @deva[बहुला] = @deva[कृत्तिका].\n\n@note[type=vārtika]: @deva[लुक्] after @deva[चित्रा], @deva[रेवती], @deva[रोहिणी] in feminine: @deva[चित्रा], @deva[रेवती], @deva[रोहिणी]. The @deva[स्त्री]-प्रत्यय for @deva[रेवती]/रोहिणी] (@deva[गौरादि]) is reordained by @ref[4.1.41].\n@note[type=vārtika]: @deva[ट]/अन्] after @deva[फल्गुनी]/आषाढा] (feminine): @deva[फल्गुनी] (@ref[4.1.15]), @deva[आषाढा].\n@note[type=vārtika]: @deva[छण्] after @deva[श्रविष्ठा]/आषाढा]: @deva[श्राविष्ठीयः], @deva[आषाढीयः].",
            "advanced": "@deva[लुक्] applies to @deva[जात]-प्रत्यय after @deva[श्रविष्ठादि] asterisms; @deva[स्त्री]-प्रत्यय also elides (@ref[1.2.49]).\n\nForms: @deva[श्रविष्ठः], @deva[फल्गुनः], @deva[अनुराधः], @deva[स्वातिः], @deva[तिष्यः], @deva[पुनर्वसुः], @deva[हस्तः], @deva[विशाखः], @deva[आषाढः], @deva[बहुलः].\n\n@note[type=vārtika]: @deva[चित्रारेवतीरोहिणीभ्यश्च स्त्रियाम्]—@deva[चित्रा], @deva[रेवती], @deva[रोहिणी]. @ref[4.1.41] restores @deva[स्त्री]-प्रत्यय for @deva[गौरादि].\n@note[type=vārtika]: @deva[फल्गुन्याषाढाभ्यां टनौ स्त्रियाम्]—@deva[फल्गुनी], @deva[आषाढा].\n@note[type=vārtika]: @deva[श्रविष्ठाषाढाभ्यां छण्]—@deva[श्राविष्ठीयः], @deva[आषाढीयः]."
        }
    },
    "43035": {
        "en": {
            "simple": "The affix denoting 'born therein' is elided by @deva[लुक्] after words ending in @deva[स्थान] (place), and after @deva[गोशाला] (cow-shed) and @deva[खरशाला] (donkey-shed).\n\nExamples: @deva[गोस्थाने जातः] = @deva[गोस्थानः] (born in the cow-place), @deva[अश्वस्थानः] (born in the horse-place), @deva[गोशालः] (born in the cow-shed), @deva[खरशालः] (born in the donkey-shed).",
            "standard": "The @deva[जात]-affix undergoes @deva[लुक्] after @deva[स्थानान्त] words and after @deva[गोशाला], @deva[खरशाला].\n\nExamples: @deva[गोस्थानः], @deva[अश्वस्थानः], @deva[गोशालः], @deva[खरशालः].",
            "advanced": "@deva[लुक्] applies to @deva[जात]-प्रत्यय after @deva[स्थानान्त] and @deva[गोशाला]/खरशाला].\n\nExamples: @deva[गोस्थानः], @deva[अश्वस्थानः], @deva[गोशालः], @deva[खरशालः]."
        }
    },
    "43036": {
        "en": {
            "simple": "The affix denoting 'born therein' is optionally elided by @deva[लुक्] after @deva[वत्सशाला] (calf-shed), @deva[अभिजित्] (an asterism), @deva[अश्वयुज्] (an asterism), and @deva[शतभिषज्] (an asterism).\n\nExamples:\n• @deva[वत्सशालायां जातः] = @deva[वत्सशालः] or @deva[वात्सशालः]\n• @deva[अभिजित्] or @deva[आभिजितः]\n• @deva[अश्वयुक्] or @deva[आश्वयुजः]\n• @deva[शतभिक्] or @deva[शातभिषजः]\n\nBoth @deva[वत्सशाल] and @deva[वत्सशाला] are valid forms. This exemplifies the @deva[बहुल] (diverse) application mentioned in the next rule.",
            "standard": "The @deva[जात]-affix optionally undergoes @deva[लुक्] after @deva[वत्सशाला], @deva[अभिजित्], @deva[अश्वयुज्], @deva[शतभिषज्].\n\nExamples: @deva[वत्सशालः] / @deva[वात्सशालः], @deva[अभिजित्] / @deva[आभिजितः], @deva[अश्वयुक्] / @deva[आश्वयुजः], @deva[शतभिक्] / @deva[शातभिषजः].\n\nBoth @deva[वत्सशाल]/वत्सशाला] are valid. These exemplify @deva[बहुल] from @ref[4.3.37].",
            "advanced": "@deva[लुक्] optionally applies after @deva[वत्सशाला], @deva[अभिजित्], @deva[अश्वयुज्], @deva[शतभिषज्] in @deva[जात]-sense.\n\nForms: @deva[वत्सशालः]/वात्सशालः], @deva[अभिजित्]/आभिजितः], @deva[अश्वयुक्]/आश्वयुजः], @deva[शतभिक्]/शातभिषजः]. Both @deva[वत्सशाल]/वत्सशाला] valid. These instantiate @deva[बहुल] (@ref[4.3.37])."
        }
    },
    "43037": {
        "en": {
            "simple": "The affix denoting 'born therein' is diversely (@deva[बहुलम्]) elided by @deva[लुक्] after asterism names.\n\nThis means the elision is optional and varies.\n\nExamples: @deva[रोहिणः] (with @deva[लुक्]) or @deva[रौहिणः] (with @deva[अण्] from 4.3.16), @deva[मृगशिरा] (with @deva[लुक्]) or @deva[मार्गशीर्षः] (with @deva[अण्]).",
            "standard": "@deva[लुक्] applies @deva[बहुलम्] (diversely) to the @deva[जात]-affix after @deva[नक्षत्र] names.\n\nExamples: @deva[रोहिणः] / @deva[रौहिणः] (@ref[4.3.16]), @deva[मृगशिरा] / @deva[मार्गशीर्षः] (@ref[4.3.16]).",
            "advanced": "@deva[लुक्] applies @deva[बहुलम्] after @deva[नक्षत्र] in @deva[जात]-sense.\n\nExamples: @deva[रोहिणः]/रौहिणः], @deva[मृगशिरा]/मार्गशीर्षः] (@ref[4.3.16])."
        }
    },
    "43038": {
        "en": {
            "simple": "An affix comes after a word in the locative case in the sense of 'done there' (@deva[कृत]), 'obtained there' (@deva[लब्ध]), 'bought there' (@deva[क्रीत]), or 'dexterous therein' (@deva[कुशल]).\n\nThese are four additional @deva[तद्धित] senses.\n\nExamples: @deva[स्रौघ्नः] may mean 'done in Srughna', 'obtained in Srughna', 'bought in Srughna', or 'skillful in Srughna'. Similarly @deva[माथुरः], @deva[राष्ट्रियः].",
            "standard": "An affix applies after @deva[सप्तम्यन्त] in the senses @deva[कृत] (done there), @deva[लब्ध] (obtained there), @deva[क्रीत] (bought there), @deva[कुशल] (skilled therein).\n\nExamples: @deva[स्रौघ्नः] (done/obtained/bought in, or skilled in Srughna); @deva[माथुरः], @deva[राष्ट्रियः].",
            "advanced": "Affixes apply after @deva[सप्तम्यन्त] in @deva[कृत]/लब्ध]/क्रीत]/कुशल] senses.\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः], @deva[राष्ट्रियः]."
        }
    },
    "43039": {
        "en": {
            "simple": "An affix comes after a word in the locative case in the sense of 'generally found therein' (@deva[प्रायभव]).\n\n@deva[प्राय] means 'abundant' or 'mostly'. This refers to something frequently but not always present.\n\nExample: @deva[स्रौघ्नः] (what is mostly found in Srughna) = @deva[स्रुघ्ने प्रायेण बाहुल्येन भवति]. Similarly @deva[माथुरः], @deva[राष्ट्रियः].\n\nThis rule might seem superfluous since @deva[तत्र भवः] (4.3.53) is more comprehensive. But if @deva[प्रायभव] means @deva[अनित्यभव] (sometimes present, sometimes not), there is a subtle distinction.",
            "standard": "An affix applies after @deva[सप्तम्यन्त] in @deva[प्रायभव] sense (mostly found therein). @deva[प्राय] = abundant, less than all.\n\nExamples: @deva[स्रौघ्नः] = @deva[स्रुघ्ने प्रायेण भवति]; @deva[माथुरः], @deva[राष्ट्रियः].\n\nThis may seem covered by @ref[4.3.53] (@deva[तत्र भवः]). If @deva[प्रायभव] = @deva[अनित्यभव], a distinction exists.",
            "advanced": "Affixes apply after @deva[सप्तम्यन्त] in @deva[प्रायभव] sense.\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः], @deva[राष्ट्रियः].\n\nApparent redundancy with @ref[4.3.53] (@deva[तत्र भवः]); justified if @deva[प्रायभव] ≠ @deva[नित्यभव] but = @deva[अनित्यभव]."
        }
    },
    "43040": {
        "en": {
            "simple": "The affix @deva[ठक्] comes in the sense of 'mostly found there' after @deva[उपजानु] (near the knee), @deva[उपकर्ण] (near the ear), and @deva[उपनीवि] (near the waist-band), in the locative case.\n\nThis replaces @deva[अण्] etc.\n\nExamples: @deva[औपजानुकः], @deva[औपकर्णिकः], @deva[औपनीविकः].",
            "standard": "The affix @deva[ठक्] applies after @deva[उपजानु], @deva[उपकर्ण], @deva[उपनीवि] (@deva[सप्तम्यन्त]) in @deva[प्रायभव] sense, debarring @deva[अण्] etc.\n\nExamples: @deva[औपजानुकः], @deva[औपकर्णिकः], @deva[औपनीविकः].",
            "advanced": "@deva[ठक्] applies after @deva[उपजानु], @deva[उपकर्ण], @deva[उपनीवि] in @deva[प्रायभव] sense, superseding @deva[अण्].\n\nExamples: @deva[औपजानुकः], @deva[औपकर्णिकः], @deva[औपनीविकः]."
        }
    },
    "43041": {
        "en": {
            "simple": "After a @deva[प्रातिपदिक] (nominal stem) or a word ending in feminine affixes @deva[ङीप्] or @deva[आप्], in the locative case, an affix comes in the sense of 'adapted therein' (@deva[संभूत]).\n\n@deva[संभूत] here does not mean 'birth' or 'existence' (those are covered by @deva[जात] and @deva[भव]). It means 'suitableness' or 'adequacy' (@deva[अवक्लृप्ति], @deva[प्रमाणातिरेक]).\n\nExample: @deva[स्रुघ्ने संभवति] = @deva[स्रौघ्नः] (what is suited to Srughna). Similarly @deva[माथुरः], @deva[राष्ट्रियः].",
            "standard": "After @deva[प्रातिपदिक] or @deva[ङीबन्त]/आबन्त] (@deva[सप्तम्यन्त]), an affix applies in @deva[संभूत] sense (adapted to, suited for). @deva[संभूत] ≠ origin/existence; rather = @deva[अवक्लृप्ति], @deva[प्रमाणातिरेक].\n\nExample: @deva[स्रुघ्ने संभवति] → @deva[स्रौघ्नः] (suited to Srughna); @deva[माथुरः], @deva[राष्ट्रियः].",
            "advanced": "After @deva[प्रातिपदिक]/ङीबन्त]/आबन्त] (@deva[सप्तम्यन्त]), affixes apply in @deva[संभूत] sense. @deva[संभूत] = @deva[अवक्लृप्ति]/प्रमाणातिरेक], not @deva[जात]/भव].\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः], @deva[राष्ट्रियः]."
        }
    },
    "43042": {
        "en": {
            "simple": "The affix @deva[ढञ्] comes after @deva[कोश] (cocoon, sheath) and similar words in the sense of 'adapted to that'.\n\nThis replaces @deva[अण्].\n\nExample: @deva[कोशे संभूतम्] = @deva[कौशेयं वस्त्रम्] (silken clothes). @deva[कोश] means 'cocoon', so @deva[कौशेय] literally means 'suited to the cocoon', but conventionally it means 'silken'.\n\nNote: This rule might fit better under @deva[विकार] (4.3.134) rather than @deva[संभूत], or after 4.3.159 (@deva[एण्याढञ्]) with @deva[कोशाच्च] added.",
            "standard": "The affix @deva[ढञ्] applies after @deva[कोशादि] in @deva[संभूत] sense, debarring @deva[अण्].\n\nExample: @deva[कोशे संभूतम्] → @deva[कौशेयं वस्त्रम्] (silken). @deva[कोश] = cocoon; @deva[कौशेय] is @deva[रूढि] (conventional) for 'silken', not 'suited to the sheath'.\n\nPlacement note: This rule would fit better under @deva[विकार] (@ref[4.3.134]) or after @ref[4.3.159] with @deva[कोशाच्च].",
            "advanced": "@deva[ढञ्] applies after @deva[कोशादि] in @deva[संभूत] sense, superseding @deva[अण्].\n\nExample: @deva[कौशेयं वस्त्रम्]. @deva[कौशेय] = @deva[रूढि] for 'silken'. Placement should arguably follow @ref[4.3.134] (@deva[विकार]) or @ref[4.3.159] with @deva[कोशाच्च]."
        }
    },
    "43043": {
        "en": {
            "simple": "An affix comes after a word denoting time in the locative case, in the sense of 'being good therein' (@deva[साधु]), 'flowering therein' (@deva[पुष्प्यति]), or 'ripening therein' (@deva[पच्यते]).\n\nExamples:\n• @deva[हेमन्ते साधुः] = @deva[हैमन्तः] (good in winter), as in @deva[हैमन्तः प्राकारः] (a wall suited for winter).\n• @deva[वसन्ते पुष्प्यन्ति] = @deva[वासन्त्यः] (vernal creepers that flower in spring), @deva[ग्रैष्म्यः पाटलाः] (summer-flowering pāṭala).\n• @deva[शरदि पच्यन्ते] = @deva[शारदाः शालयः] (rice ripening in autumn), @deva[ग्रैष्मा यवाः] (barley ripening in summer).\n\nThis rule teaches the meaning; the specific affix (@deva[अण्] etc.) comes from earlier rules.",
            "standard": "An affix applies after @deva[कालवाचिन्] (@deva[सप्तम्यन्त]) in senses @deva[साधु] (good therein), @deva[पुष्प्यति] (flowering), @deva[पच्यते] (ripening).\n\nExamples: @deva[हैमन्तः प्राकारः] (winter-suited wall); @deva[वासन्त्यः] (spring-flowering creepers); @deva[शारदाः शालयः] (autumn-ripening rice); @deva[ग्रैष्मा यवाः] (summer-ripening barley).\n\nThis is an @deva[अर्थसूत्र] (meaning-rule); the affix (@deva[अण्] etc.) is supplied from prior rules.",
            "advanced": "Affixes apply after @deva[कालवाचिन्] (@deva[सप्तम्यन्त]) in @deva[साधु]/पुष्प्यति]/पच्यते] senses.\n\nExamples: @deva[हैमन्तः], @deva[वासन्त्यः], @deva[शारदाः शालयः], @deva[ग्रैष्मा यवाः].\n\nThis @deva[अर्थसूत्र] specifies @deva[प्रातिपदिक] and @deva[प्रत्ययार्थ]; @deva[अण्]-आदि affixes are supplied."
        }
    },
    "43044": {
        "en": {
            "simple": "An affix comes after a word denoting time in the locative case, in the sense of 'sown therein' (@deva[उप्त]).\n\nExamples: @deva[हेमन्ते उप्यन्ते] = @deva[हैमन्ता यवाः] (barley sown in winter), @deva[ग्रैष्मा व्रीहयः] (rice sown in summer).\n\nThis rule is separated from 4.3.43 so that the @deva[अनुवृत्ति] of @deva[उप्त] alone continues to the next rule.",
            "standard": "An affix applies after @deva[कालवाचिन्] (@deva[सप्तम्यन्त]) in @deva[उप्त] (sown therein) sense.\n\nExamples: @deva[हैमन्ता यवाः] (winter-sown barley), @deva[ग्रैष्मा व्रीहयः] (summer-sown rice).\n\nSeparation from @ref[4.3.43] enables @deva[अनुवृत्ति] of @deva[उप्त] alone into @ref[4.3.45].",
            "advanced": "Affixes apply after @deva[कालवाचिन्] in @deva[उप्त] sense.\n\nExamples: @deva[हैमन्ता यवाः], @deva[ग्रैष्मा व्रीहयः].\n\n@deva[योगविभाग] from @ref[4.3.43]: only @deva[उप्त] continues to @ref[4.3.45]."
        }
    },
    "43045": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes after @deva[आश्वयुजी] (the full-moon day in the asterism Aśvinī) in the sense of 'sown therein'.\n\nThis replaces @deva[ठञ्].\n\nExample: @deva[आश्वयुज्यां उप्ताः] = @deva[आश्वयुजका माषाः] (pulse sown in Āśvayujī).\n\n@deva[आश्वयुजी] is the name of the full-moon in the asterism Aśvinī. @deva[अश्वयुज्] and @deva[अश्विनी] are the same; some texts read @deva[अश्वनी] instead.",
            "standard": "The affix @deva[वुञ्] applies after @deva[आश्वयुजी] in @deva[उप्त] sense, debarring @deva[ठञ्].\n\nExample: @deva[आश्वयुज्यां उप्ताः] → @deva[आश्वयुजका माषाः] (pulse sown in Āśvayujī).\n\n@deva[आश्वयुजी] = full-moon in Aśvinī asterism. @deva[अश्वयुज्] = @deva[अश्विनी]; variant @deva[अश्वनी].",
            "advanced": "@deva[वुञ्] applies after @deva[आश्वयुजी] in @deva[उप्त] sense, superseding @deva[ठञ्].\n\nExample: @deva[आश्वयुजका माषाः]. @deva[आश्वयुजी] = @deva[अश्विनी]-पूर्णिमा. Variant: @deva[अश्वनी]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.3.31-4.3.45 (Batch 3 of 4.3)")
