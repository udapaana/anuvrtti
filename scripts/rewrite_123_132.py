# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32123": {
        "en": {
            "simple": "@deva[लट्] (Present Tense) comes after a verb to denote a present action—one that has begun but not yet ended. Examples: @deva[पचति] 'he is cooking'; @deva[पठति] 'he is reading'. Also for constant/regular actions: @deva[तिष्ठन्ति पर्वताः] 'the mountains stand'; @deva[स्रवन्ति नद्यः] 'the rivers flow'.",
            "standard": "@deva[लट्] (Present) follows a @deva[धातु] for @deva[वर्तमान] (present action)—that which has begun and not yet ended. Examples: @deva[पचति] 'cooks'; @deva[पठति] 'reads'. Also for @deva[नित्य]/सातत्य (constant/uniform): @deva[तिष्ठन्ति पर्वताः] 'mountains stand'; @deva[स्रवन्ति नद्यः] 'rivers flow'.",
            "advanced": "@deva[लट्] follows @deva[धातु] for @deva[वर्तमान]—action @deva[आरब्ध] but not @deva[समाप्त]. Examples: @deva[पचति], @deva[पठति]. Also for @deva[नित्यवृत्ति] (constant state): @deva[तिष्ठन्ति पर्वताः]; @deva[स्रवन्ति नद्यः]."
        }
    },
    "32124": {
        "en": {
            "simple": "@deva[शतृ] and @deva[शानच्] are substitutes for @deva[लट्] (Present) when agreeing with a word **not** in the nominative case. Examples: @deva[पचमानं देवदत्तं पश्य] 'behold Devadatta who is cooking' (accusative); @deva[पचता कृतम्] 'done by one cooking' (instrumental). In nominative: @deva[देवदत्तः पचति]. Double citation of @deva[लट्] extends scope: sometimes in nominative too (@deva[सन् ब्राह्मणः], @deva[विद्यमानो ब्राह्मणः]). Vārttika: With @deva[माङ्] and censure: @deva[मा पचन्], @deva[मा जीवन्].",
            "standard": "@deva[शतृ] and @deva[शानच्] replace @deva[लट्] when agreeing with a non-@deva[प्रथमान्त] (non-nominative). Examples: @deva[पचमानं देवदत्तं पश्य] (accusative); @deva[पचता कृतम्]/पचमानेन कृतम् (instrumental). Derivation: @deva[पच्] + @deva[शानच्] = @deva[पच्] + @deva[शप्] + @deva[शानच्] (@ref[3.4.113], @ref[3.1.68]) = @deva[पच्] + @deva[अ] + @deva[मुक्] + @deva[आन] (@ref[7.2.82]) = @deva[पचमान]. With nominative: @deva[देवदत्तः पचति]. The @deva[लट्] repetition extends scope: sometimes with nominative (@deva[सन् ब्राह्मणः], @deva[विद्यमानो ब्राह्मणः], @deva[जुहुत्]/जुहोति). @deva[वार्त्तिक]: With @deva[माङ्] and @deva[आक्षेप]/शाप: @deva[मा पचन्], @deva[मा जीवन्].",
            "advanced": "@deva[शतृ]/शानच् replace @deva[लट्] when @deva[अप्रथमासमानाधिकरण]. Examples: @deva[पचमानं देवदत्तं पश्य]; @deva[पचता]/पचमानेन कृतम्. @deva[प्रक्रिया]: @deva[पच्] + @deva[शानच्] → @deva[पच्] + @deva[शप्] + @deva[शानच्] (@ref[3.4.113], @ref[3.1.68]) → @deva[पचमान] (@ref[7.2.82] @deva[मुक्]). The @deva[लट्] @deva[द्विर्वचन] extends application—sometimes @deva[प्रथमा]-agreeing (@deva[सन्], @deva[विद्यमान], @deva[जुहुत्], @deva[अधीयान]). @deva[वार्त्तिक]: With @deva[माङ्] + @deva[आक्षेप]/शाप: @deva[मा पचन्], @deva[मा जीवन्]. The @deva[विभाषा] from @ref[3.2.121] is @deva[व्यवस्थितविभाषा], not universal."
        }
    },
    "32125": {
        "en": {
            "simple": "@deva[शतृ] and @deva[शानच्] replace @deva[लट्] even when agreeing with a nominative, provided it's in the **vocative** (@deva[सम्बोधन]). Examples: @deva[हे पचन्] or @deva[हे पचमान] 'O thou who art cooking!'",
            "standard": "@deva[शतृ] and @deva[शानच्] replace @deva[लट्] even with @deva[प्रथमान्त] if it's @deva[सम्बोधन] (vocative). Examples: @deva[हे पचन्], @deva[हे पचमान] 'O cooking one!'",
            "advanced": "@deva[शतृ]/शानच् replace @deva[लट्] even with @deva[प्रथमा] when @deva[सम्बोधन]. Examples: @deva[हे पचन्], @deva[हे पचमान]."
        }
    },
    "32126": {
        "en": {
            "simple": "@deva[शतृ] and @deva[शानच्] replace @deva[लट्] when expressing a **characteristic** (@deva[लक्षण]) or **cause** (@deva[हेतु]) of an action. Characteristic examples: @deva[शयानाः भुञ्जते यवनाः] 'the Yavanas eat lying down'; @deva[तिष्ठन्तोऽनुशासति गणकाः]. Cause examples: @deva[हरिं पश्यन् मुच्यते] 'by seeing Hari, one is liberated'; @deva[अधीयानो वसति] 'he dwells for the purpose of studying'. Not when it characterizes a substance/quality: @deva[यः कम्पते सोऽश्वत्थः].",
            "standard": "@deva[शतृ]/शानच् replace @deva[लट्] when expressing @deva[क्रियालक्षण] (action's characteristic) or @deva[क्रियाहेतु] (action's cause). @deva[लक्षण]: @deva[शयानाः भुञ्जते यवनाः] 'Yavanas eat reclining'; @deva[तिष्ठन्तोऽनुशासति गणकाः]. @deva[हेतु]: @deva[हरिं पश्यन् मुच्यते] 'seeing Hari, one is freed'; @deva[अधीयानो वसति] 'dwells for studying'. If @deva[लक्षण]/हेतु of @deva[द्रव्य]/गुण, rule doesn't apply: @deva[यः कम्पते सोऽश्वत्थः]; @deva[यदुत्प्लवते तल्लघु]. @deva[वार्त्तिक]: Also defines @deva[कर्तृ] (@deva[योऽधीयान आस्ते स देवदत्तः]) and states general truths (@deva[शयाना वर्धते दूर्वा]).",
            "advanced": "@deva[शतृ]/शानच् replace @deva[लट्] for @deva[क्रियालक्षण]/क्रियाहेतु. @deva[लक्षण] (characteristic): @deva[शयानाः भुञ्जते यवनाः]; @deva[तिष्ठन्तोऽनुशासति]. @deva[हेतु] (cause): @deva[हरिं पश्यन् मुच्यते]; @deva[अधीयानो वसति]. If @deva[द्रव्य]/गुण-@deva[लक्षण], not applicable: @deva[यः कम्पते सोऽश्वत्थः]; @deva[यदुत्प्लवते तल्लघु]; @deva[यन्निषीदति तद्गुरु]. @deva[वार्त्तिक]s: @deva[कर्तृनिर्धारण] (@deva[योऽधीयान आस्ते स देवदत्तः]); @deva[सामान्यवचन] (@deva[शयाना वर्धते दूर्वा]; @deva[आसीनं वर्धते बिसम्]). The @deva[लक्षणहेत्वोः] compound violates @ref[2.2.34] (@deva[अल्पाच्तर]), showing that rule is not universal."
        }
    },
    "32127": {
        "en": {
            "simple": "These two affixes—@deva[शतृ] and @deva[शानच्]—are collectively called @deva[सत्]. As such, they're not limited to Present tense; they sometimes replace Future and other tenses too. Examples: @deva[ब्राह्मणस्य कुर्वन्], @deva[करिष्यन्], @deva[कुर्वाणः], @deva[करिष्यमाणः]. The term @deva[सत्] appears in @ref[2.2.11] etc.",
            "standard": "@deva[शतृ] and @deva[शानच्] are collectively called @deva[सत्]. This @deva[संज्ञा] frees them from the above conditions—they replace not only @deva[लट्] but sometimes @deva[लृट्] (Future, @ref[3.3.14]) and other tenses. Examples: @deva[ब्राह्मणस्य कुर्वन्] (Present), @deva[करिष्यन्] (Future), @deva[कुर्वाणः], @deva[करिष्यमाणः]. The term @deva[सत्] occurs in @ref[2.2.11] etc.",
            "advanced": "@deva[शतृ]/शानच् receive the @deva[संज्ञा] @deva[सत्]. This designation removes @deva[उपाधि] restrictions—they replace @deva[लट्], @deva[लृट्] (@ref[3.3.14]), and other @deva[लकार]s. Examples: @deva[कुर्वन्], @deva[करिष्यन्], @deva[कुर्वाणः], @deva[करिष्यमाणः]. @deva[सत्] used in @ref[2.2.11] etc."
        }
    },
    "32128": {
        "en": {
            "simple": "The affix @deva[शानन्] comes after @deva[पू] 'to purify' and @deva[यज्] 'to sacrifice'. Examples: @deva[पवमानः] 'purifier (fire or wind)', @deva[यजमानः] 'sacrificer'. Though not a substitute of @deva[ल], it can govern accusative by @ref[2.3.69] because @deva[तृन्] in that rule is a pratyāhāra including @deva[शतृ] through @deva[तृन्] (@ref[3.2.135])—thus covering @deva[शानन्] etc. Vārttika: With @deva[द्विष्] + @deva[शतृ], genitive or accusative optional: @deva[चोरस्य/चोरं द्विषन्].",
            "standard": "The affix @deva[शानन्] follows @deva[पू] 'to purify' and @deva[यज्] 'to sacrifice'. Examples: @deva[पवमानः] 'purifier'; @deva[यजमानः] 'sacrificer'. These affixes are not @deva[ल]-@deva[आदेश], yet govern accusative: the @deva[तृन्] in @ref[2.3.69] is a @deva[प्रत्याहार] (@deva[तृ] of @deva[शतृ] @ref[3.2.124] to @deva[न्] of @deva[तृन्] @ref[3.2.135]), including @deva[शानन्]/चानश् etc. Hence @deva[सोमं पवमानः], @deva[नडमाघ्नानः]. @deva[वार्त्तिक]: @deva[द्विष्] + @deva[शतृ] optionally governs genitive or accusative: @deva[चोरस्य]/चोरं द्विषन्.",
            "advanced": "@deva[शानन्] follows @deva[पू]/यज्. Examples: @deva[पवमानः], @deva[यजमानः]. These are not @deva[लादेश], but @ref[2.3.69] applies: @deva[तृन्] there is @deva[प्रत्याहार] from @deva[शतृ] (@ref[3.2.124]) to @deva[तृन्] (@ref[3.2.135]), including @deva[शानन्]/चानश्. Hence accusative: @deva[सोमं पवमानः]; @deva[नडमाघ्नानः]. @deva[वार्त्तिक]: @deva[द्विष्] + @deva[शतृ] → @ref[2.3.69] @deva[विकल्पेन]: @deva[चोरस्य]/चोरं द्विषन्."
        }
    },
    "32129": {
        "en": {
            "simple": "The affix @deva[चानश्] comes after a verb when expressing **habit** (@deva[ताच्छील्य]), **age-stage** (@deva[वयः]), or **ability** (@deva[शक्ति]). Habit: @deva[भोगं भुञ्जानः] 'habitually enjoying'. Age: @deva[कवचं बिभ्राणः] 'wearing armor (of the proper age)'. Ability: @deva[शत्रुं निघ्नानः] 'able to destroy enemies'. Also: @deva[मुण्डयमानाः], @deva[भूषयमानाः], @deva[कवचं पर्यस्यमानाः], @deva[शिखण्डं वहमानाः], @deva[पचमानाः].",
            "standard": "The affix @deva[चानश्] follows a verb for @deva[ताच्छील्य] (habit/disposition), @deva[वयः] (age-condition like youth), or @deva[शक्ति] (capacity). @deva[ताच्छील्य]: @deva[भोगं भुञ्जानः] 'habitually enjoying'. @deva[वयः]: @deva[कवचं बिभ्राणः] 'of armor-wearing age'. @deva[शक्ति]: @deva[शत्रुं निघ्नानः] 'capable of destroying foes'. Also: @deva[मुण्डयमानाः], @deva[भूषयमानाः], @deva[कवचं पर्यस्यमानाः], @deva[शिखण्डं वहमानाः], @deva[पचमानाः].",
            "advanced": "@deva[चानश्] follows @deva[धातु] for @deva[ताच्छील्य]/वयः/शक्ति. @deva[ताच्छील्य] (disposition): @deva[भोगं भुञ्जानः]. @deva[वयः] (age-stage): @deva[कवचं बिभ्राणः]. @deva[शक्ति] (ability): @deva[शत्रुं निघ्नानः]. Additional examples: @deva[मुण्डयमानाः], @deva[भूषयमानाः], @deva[कवचं पर्यस्यमानाः], @deva[शिखण्डं वहमानाः], @deva[पचमानाः]."
        }
    },
    "32130": {
        "en": {
            "simple": "The affix @deva[शतृ] comes after @deva[इङ्] 'to go/read' and @deva[धारि] (causative of @deva[धृ]) 'to hold/master' when the agent accomplishes the action **without difficulty** (@deva[अकृच्छ्र]). Examples: @deva[अधीयन् पारायणम्] 'facile reading of the Purāṇa'; @deva[धारयन्नुपनिषदम्] 'easily mastering the Upaniṣad'. With difficulty: @deva[कृच्छ्रेणाधीते] 'reads with difficulty'.",
            "standard": "The affix @deva[शतृ] follows @deva[इङ्] 'to read' and @deva[धारि] (@deva[णिच्] of @deva[धृ]) 'to master' when @deva[अकृच्छ्र] (facility/ease) is expressed. Examples: @deva[अधीयन् पारायणम्] 'easy reading of the Purāṇa'; @deva[धारयन्नुपनिषदम्] 'effortlessly mastering the Upaniṣad'. Without @deva[अकृच्छ्र]: @deva[कृच्छ्रेणाधीते] 'reads with difficulty'; @deva[कृच्छ्रेण धारयति] 'remembers with difficulty'.",
            "advanced": "@deva[शतृ] follows @deva[इङ्]/धारि (causative) when @deva[अकृच्छ्र] (effortless accomplishment) is expressed. Examples: @deva[अधीयन् पारायणम्]; @deva[धारयन्नुपनिषदम्]. Without @deva[अकृच्छ्र]: @deva[कृच्छ्रेणाधीते]; @deva[कृच्छ्रेण धारयति]."
        }
    },
    "32131": {
        "en": {
            "simple": "The affix @deva[शतृ] comes after @deva[द्विष्] 'to hate' when the agent denotes an **enemy** (@deva[अमित्र]). Examples: @deva[द्विषन्] 'enemy', dual @deva[द्विषन्तौ], plural @deva[द्विषन्तः]. Without enemy-meaning: @deva[द्वेष्टि भार्या पतिम्] 'the wife hates her husband'.",
            "standard": "The affix @deva[शतृ] follows @deva[द्विष्] 'to hate' when the @deva[कर्तृ] denotes @deva[अमित्र] (enemy). Examples: @deva[द्विषन्] 'enemy', dual @deva[द्विषन्तौ], plural @deva[द्विषन्तः]. Without @deva[अमित्रार्थ]: @deva[द्वेष्टि भार्या पतिम्] 'wife hates husband' (not forming @deva[द्विषन्]).",
            "advanced": "@deva[शतृ] follows @deva[द्विष्] when @deva[कर्तृ] = @deva[अमित्र]. Examples: @deva[द्विषन्], @deva[द्विषन्तौ], @deva[द्विषन्तः]. Without @deva[अमित्रार्थ]: @deva[द्वेष्टि भार्या पतिम्]."
        }
    },
    "32132": {
        "en": {
            "simple": "The affix @deva[शतृ] comes after @deva[षु] 'to press juice' when connected with **sacrifice** (@deva[यज्ञसंयोग]). Example: @deva[सुन्वन्] 'the sacrificers' (as in @deva[सर्वे सुन्वन्तः] 'all share in the sacrifice'). @deva[संयोग] indicates the principal sacrificer (@deva[यजमान]), not subordinate priests (@deva[याजक]). Without sacrifice-meaning: @deva[सुनोति सुराम्] 'he distils liquor'.",
            "standard": "The affix @deva[शतृ] follows @deva[षु] 'to press' when @deva[यज्ञसंयोग] (connection with sacrifice) is expressed. Derivation: @deva[सु] + @deva[नु] + @deva[शतृ] (@ref[3.1.76], @ref[3.4.113]) = @deva[सुनु] + @deva[अत्] (@ref[1.2.4]) = @deva[सुन्वत्] (@ref[6.1.77]), nom. @deva[सुन्वन्], pl. @deva[सुन्वन्तः] 'sacrificers'. The @deva[संयोग] refers to the @deva[यजमान] (principal sacrificer), not @deva[याजक] (subordinate priests). Without @deva[यज्ञसंयोग]: @deva[सुनोति सुराम्] 'distils liquor'.",
            "advanced": "@deva[शतृ] follows @deva[षु] when @deva[यज्ञसंयोग] is expressed. @deva[प्रक्रिया]: @deva[सु] + @deva[नु] + @deva[शतृ] (@ref[3.1.76], @ref[3.4.113]) → @deva[सुनु] + @deva[अत्] (@ref[1.2.4] @deva[अदुपदेश]) → @deva[सुन्वत्] (@ref[6.1.77]), nom. @deva[सुन्वन्]. @deva[संयोग] designates @deva[यजमान], excluding @deva[याजक]. Without @deva[यज्ञसंयोग]: @deva[सुनोति सुराम्]."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.123-3.2.132")
