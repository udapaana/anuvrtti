#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.2.123-3.2.137 (Batch 7)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "32123": {
        "en": {
            "simple": "The affix @deva[लट्] (Present tense) comes after a verb when denoting a present action. @deva[वर्तमान] means an action that has begun but has not yet ended—still continuing. Examples: @deva[पचति] 'he is cooking', @deva[पठति] 'he is reading'. The Present tense also expresses what is constant or regular: @deva[तिष्ठन्ति पर्वताः] 'the mountains stand', @deva[स्रवन्ति नद्यः] 'the rivers flow'.",
            "standard": "@deva[लट्] (Present tense) follows a @deva[धातु] with @deva[वर्तमानार्थ] (present action). @deva[वर्तमान] = action begun but not yet ended. Examples: @deva[पचति], @deva[पठति]. Also expresses @deva[नित्य] (constant/regular): @deva[तिष्ठन्ति पर्वताः], @deva[स्रवन्ति नद्यः].",
            "advanced": "@deva[लट्] follows @deva[धातु] with @deva[वर्तमानार्थ]. @deva[वर्तमान] = @deva[प्रवृत्तानवृत्त] (begun, not ended). Examples: @deva[पचति], @deva[पठति]. Also @deva[नित्यवृत्ति]: @deva[तिष्ठन्ति पर्वताः], @deva[स्रवन्ति नद्यः]."
        }
    },
    "32124": {
        "en": {
            "simple": "The affixes @deva[शतृ] and @deva[शानच्] substitute for @deva[लट्] (Present tense) when the participle agrees with a word not in the nominative case. Examples: @deva[पचमानं देवदत्तं पश्य] 'behold Devadatta who is cooking' (accusative); @deva[पचता कृतम्] or @deva[पचमानेन कृतम्] 'done by one who is cooking' (instrumental). Derivation: @deva[पच्] + @deva[शानच्] → @deva[पच्] + @deva[शप्] + @deva[शानच्] (@ref[3.4.113], @ref[3.1.68]) → @deva[पचमान] (@ref[7.2.82]). When the word is nominative: @deva[देवदत्तः पचति] 'Devadatta cooks' (uses @deva[लट्], not participle). The repetition of @deva[लट्] extends the rule: @deva[सन् ब्राह्मणः] = @deva[अस्ति ब्राह्मणः]. Vārttika: with @deva[माङ्] expressing curse—@deva[मा पचन्], @deva[मा पचमानः] 'may he not cook'.",
            "standard": "@deva[शतृ] and @deva[शानच्] substitute for @deva[लट्] when agreeing with a non-@deva[प्रथमान्त] (non-nominative) word. Examples: @deva[पचमानं देवदत्तं पश्य] (acc.); @deva[पचता कृतम्] / @deva[पचमानेन कृतम्] (inst.). Derivation: @deva[पच्] + @deva[शानच्] → @deva[पच्] + @deva[शप्] + @deva[शानच्] (@ref[3.4.113], @ref[3.1.68]) → @deva[पच्] + @deva[अ] + @deva[मुक्] + @deva[आन] (@ref[7.2.82]) → @deva[पचमान]. Similarly @deva[पच्] + @deva[शप्] + @deva[शतृ] → @deva[पचत्]. With @deva[प्रथमा]: @deva[देवदत्तः पचति] (no participle). The @deva[लट्] repetition extends the rule to some nominatives: @deva[सन् ब्राह्मणः] = @deva[अस्ति ब्राह्मणः]; @deva[विद्यमानो ब्राह्मणः]; @deva[जुहुत्]/जुहोति; @deva[अधीयानः]/अधीते. @deva[वार्त्तिक]: with @deva[माङ्] + @deva[निन्दा]—@deva[मा पचन्], @deva[मा पचमानः]. The @deva[विभाषा] from @ref[3.2.121] is @deva[व्यवस्थितविभाषा] (limited option).",
            "advanced": "@deva[शतृ]/@deva[शानच्] replace @deva[लट्] when agreeing with non-@deva[प्रथमान्त]. Examples: @deva[पचमानं देवदत्तं पश्य]; @deva[पचता कृतम्]. Derivation: @deva[पच्] + @deva[शानच्] → @deva[पचमान] (@ref[3.4.113], @ref[3.1.68], @ref[7.2.82]). @deva[लट्] repetition extends to some @deva[प्रथमा]: @deva[सन् ब्राह्मणः], @deva[विद्यमानो ब्राह्मणः], @deva[जुहुत्], @deva[अधीयानः]. @deva[वार्त्तिक]: @deva[माङ्] + @deva[निन्दा] → @deva[मा पचन्]. @deva[विभाषा] from @ref[3.2.121] is @deva[व्यवस्थितविभाषा]."
        }
    },
    "32125": {
        "en": {
            "simple": "@deva[शतृ] and @deva[शानच्] substitute for @deva[लट्] (Present tense) even when agreeing with a nominative word, provided it is in the vocative case. Examples: @deva[हे पचन्] or @deva[हे पचमान] 'O thou who art cooking'.",
            "standard": "@deva[शतृ] and @deva[शानच्] substitute for @deva[लट्] even with @deva[प्रथमान्त] when @deva[सम्बोधन] (vocative). Examples: @deva[हे पचन्], @deva[हे पचमान] 'O thou who art cooking'.",
            "advanced": "@deva[शतृ]/@deva[शानच्] replace @deva[लट्] with @deva[प्रथमान्त] when @deva[सम्बोधन]. Examples: @deva[हे पचन्], @deva[हे पचमान]."
        }
    },
    "32126": {
        "en": {
            "simple": "@deva[शतृ] and @deva[शानच्] substitute for @deva[लट्] (Present tense) when expressing an attendant characteristic (@deva[लक्षण]) or the cause (@deva[हेतु]) of an action. For @deva[लक्षण]: @deva[शयानाः भुञ्जते यवनाः] 'the Yavanas eat lying down'; @deva[तिष्ठन्तोऽनुशासति गणकाः] 'the accountants teach standing'. For @deva[हेतु]: @deva[हरिं पश्यन् मुच्यते] 'by seeing Hari, he gets liberation'; @deva[अधीयानो वसति] 'he dwells here for the sake of study'. Not when participle characterizes a substance or quality: @deva[यः कम्पते सोऽश्वत्थः] 'that which shakes is the Aśvattha tree'.",
            "standard": "@deva[शतृ]/@deva[शानच्] replace @deva[लट्] when expressing @deva[क्रियालक्षण] (action's characteristic) or @deva[क्रियाहेतु] (action's cause). @deva[लक्षण] examples: @deva[शयानाः भुञ्जते यवनाः] 'Yavanas eat lying down'; @deva[तिष्ठन्तोऽनुशासति गणकाः]. @deva[हेतु] examples: @deva[हरिं पश्यन् मुच्यते] 'seeing Hari, he is liberated'; @deva[अधीयानो वसति] 'he dwells for study'. Not @deva[द्रव्य]/@deva[गुण] characteristic: @deva[यः कम्पते सोऽश्वत्थः]; @deva[यदुत्प्लवते तल्लघु]; @deva[यन्निषीदति तद्गुरु]. @deva[वार्त्तिक]s: defines @deva[कर्तृ]—@deva[योऽधीयान आस्ते स देवदत्तः]; states @deva[नित्य]—@deva[शयाना वर्धते दूर्वा], @deva[आसीनं वर्धते बिसम्]. The compound @deva[लक्षणहेत्वोः] contradicts @ref[2.2.14] (fewer syllables first)—showing that rule is not universal.",
            "advanced": "@deva[शतृ]/@deva[शानच्] replace @deva[लट्] when @deva[क्रियालक्षण] or @deva[क्रियाहेतु]. @deva[लक्षण]: @deva[शयानाः भुञ्जते यवनाः]. @deva[हेतु]: @deva[हरिं पश्यन् मुच्यते]. Not @deva[द्रव्य]/@deva[गुणलक्षण]: @deva[यः कम्पते सोऽश्वत्थः]. @deva[वार्त्तिक]s: @deva[कर्तृनिर्धारण]—@deva[योऽधीयान आस्ते स देवदत्तः]; @deva[नित्यत्व]—@deva[शयाना वर्धते दूर्वा]. @deva[लक्षणहेत्वोः] compound contradicts @ref[2.2.14]—@deva[अनित्यता]."
        }
    },
    "32127": {
        "en": {
            "simple": "The affixes @deva[शतृ] and @deva[शानच्] are collectively called @deva[सत्]. This name frees them from the previous conditions—they can replace not only Present tense affixes but also Future (@ref[3.3.14]) and other tenses. Examples: @deva[ब्राह्मणस्य कुर्वन्], @deva[करिष्यन्], @deva[कुर्वाणः], @deva[करिष्यमाणः]. The term @deva[सत्] appears in @ref[2.2.11] etc.",
            "standard": "@deva[शतृ] and @deva[शानच्] are collectively termed @deva[सत्]. This @deva[संज्ञा] removes the restrictions—they replace not only @deva[लट्] but also @deva[लृट्] (@ref[3.3.14]) and other @deva[लकार]s. Examples: @deva[ब्राह्मणस्य कुर्वन्], @deva[करिष्यन्], @deva[कुर्वाणः], @deva[करिष्यमाणः]. The term @deva[सत्] occurs in @ref[2.2.11] etc.",
            "advanced": "@deva[शतृ]/@deva[शानच्] are termed @deva[सत्]—removing restrictions. They replace @deva[लट्], @deva[लृट्] (@ref[3.3.14]), etc. Examples: @deva[कुर्वन्], @deva[करिष्यन्], @deva[कुर्वाणः], @deva[करिष्यमाणः]. @deva[सत्] in @ref[2.2.11] etc."
        }
    },
    "32128": {
        "en": {
            "simple": "The affix @deva[शानन्] comes after the verbs @deva[पू] 'to purify' and @deva[यज्] 'to sacrifice'. Examples: @deva[पवमानः] 'purifier' (fire or air), @deva[यजमानः] 'sacrificer'. Question: Is @deva[शानन्] an independent affix or a @deva[ल]-substitute like @deva[शतृ]/@deva[शानच्]? If independent, @ref[2.3.65] would require genitive; if @deva[ल]-substitute, @ref[2.3.69] would block genitive. Answer: They are not @deva[ल]-substitutes (not so taught), yet @ref[2.3.69] applies because @deva[तृन्] in that sūtra is a @deva[प्रत्याहार] from @deva[शतृ] to @deva[तृन्] (@ref[3.2.135]), including @deva[शानन्] etc.",
            "standard": "@deva[शानन्] follows @deva[पू] 'to purify' and @deva[यज्] 'to sacrifice'. Examples: @deva[पवमानः] 'purifier'; @deva[यजमानः] 'sacrificer'. Question: Is @deva[शानन्] @deva[प्रत्यय] or @deva[लादेश]? If @deva[प्रत्यय], @ref[2.3.65] requires @deva[षष्ठी]; if @deva[लादेश], @ref[2.3.69] blocks @deva[षष्ठी]. Answer: Not @deva[लादेश] (not so taught). Yet @deva[सोमं पवमानः], @deva[नडमाघ्नानः] show @deva[द्वितीया]. Explanation: @deva[तृन्] in @ref[2.3.69] is @deva[प्रत्याहार] from @deva[शतृ] (@ref[3.2.124]) to @deva[तृन्] (@ref[3.2.135])—including @deva[शानन्] etc. @deva[वार्त्तिक]: @ref[2.3.69] is @deva[विभाषा] with @deva[द्विष्] + @deva[शतृ]: @deva[चोरस्य] or @deva[चोरं द्विषन्].",
            "advanced": "@deva[शानन्] follows @deva[पू], @deva[यज्]. Examples: @deva[पवमानः], @deva[यजमानः]. Not @deva[लादेश] (not taught so). @ref[2.3.69] applies because @deva[तृन्] there is @deva[प्रत्याहार] @deva[शतृ]-to-@deva[तृन्] (@ref[3.2.124]-@ref[3.2.135]), including @deva[शानन्]. @deva[वार्त्तिक]: @ref[2.3.69] @deva[विभाषा] with @deva[द्विष्] + @deva[शतृ]: @deva[चोरस्य]/चोरं @deva[द्विषन्]."
        }
    },
    "32129": {
        "en": {
            "simple": "The affix @deva[चानश्] comes after a verb when expressing habit (@deva[ताच्छील्य]), standard of age (@deva[वयस्]), or inability/capacity (@deva[शक्ति]). Habit: @deva[भोजं भुञ्जानः] 'habituated to enjoy'. Age: @deva[कवचं बिभ्राणः] 'wearing armor' (at the age for armor). Capacity: @deva[शत्रुं निघ्नानः] 'able to destroy his foe'. Also: @deva[मुण्डयमानाः], @deva[भूषयमानाः], @deva[कवचं पर्यस्यमानाः], @deva[शिखण्डं वहमानाः], @deva[पचमानाः].",
            "standard": "@deva[चानश्] follows a verb when expressing @deva[ताच्छील्य] (habit/disposition), @deva[वयस्] (age condition), or @deva[शक्ति] (capacity). @deva[ताच्छील्य]: @deva[भोजं भुञ्जानः] 'habitually enjoying'. @deva[वयस्]: @deva[कवचं बिभ्राणः] 'wearing armor at appropriate age'. @deva[शक्ति]: @deva[शत्रुं निघ्नानः] 'capable of destroying foe'. Also: @deva[मुण्डयमानाः], @deva[भूषयमानाः], @deva[कवचं पर्यस्यमानाः], @deva[शिखण्डं वहमानाः], @deva[पचमानाः].",
            "advanced": "@deva[चानश्] follows @deva[धातु] with @deva[ताच्छील्य], @deva[वयस्], or @deva[शक्ति]. @deva[ताच्छील्य]: @deva[भोजं भुञ्जानः]. @deva[वयस्]: @deva[कवचं बिभ्राणः]. @deva[शक्ति]: @deva[शत्रुं निघ्नानः]. Also: @deva[मुण्डयमानाः], @deva[भूषयमानाः], @deva[पचमानाः]."
        }
    },
    "32130": {
        "en": {
            "simple": "The affix @deva[शतृ] comes after @deva[इङ्] 'to go' (in the sense of studying) and @deva[धारि] (causative of @deva[धृ]) 'to master' when the agent does the action without difficulty. @deva[अकृच्छ्र] = accomplished with ease. Examples: @deva[अधीयन् पारायणम्] 'the facile reading of the Purāṇa', @deva[धारयन्नुपनिषदम्] 'easily mastering the Upaniṣad'. Without ease: @deva[कृच्छ्रेणाधीते] 'he reads with difficulty', @deva[कृच्छ्रेण धारयति] 'he remembers with difficulty'.",
            "standard": "@deva[शतृ] follows @deva[इङ्] 'to study' and @deva[धारि] 'to master' (causative of @deva[धृ]) when @deva[अकृच्छ्र] (ease, facility) is indicated. Examples: @deva[अधीयन् पारायणम्] 'facile reading of Purāṇa'; @deva[धारयन्नुपनिषदम्] 'easily mastering Upaniṣad'. Without @deva[अकृच्छ्रार्थ]: @deva[कृच्छ्रेणाधीते]; @deva[कृच्छ्रेण धारयति].",
            "advanced": "@deva[शतृ] follows @deva[इङ्] and @deva[धारि] (@deva[धृ]-@deva[णिच्]) with @deva[अकृच्छ्रार्थ]. Examples: @deva[अधीयन् पारायणम्]; @deva[धारयन्नुपनिषदम्]. Without @deva[अकृच्छ्र]: @deva[कृच्छ्रेणाधीते], @deva[कृच्छ्रेण धारयति]."
        }
    },
    "32131": {
        "en": {
            "simple": "The affix @deva[शतृ] comes after @deva[द्विष्] 'to hate' when the agent means 'enemy'. @deva[अमित्र] = enemy. Examples: @deva[द्विषन्] 'enemy', @deva[द्विषन्तौ] 'two enemies', @deva[द्विषन्तः] 'enemies'. Without 'enemy' meaning: @deva[द्वेष्टि भार्या पतिम्] 'the wife hates her husband' (uses finite verb, not participle).",
            "standard": "@deva[शतृ] follows @deva[द्विष्] when @deva[अमित्र] (enemy) is denoted. Examples: @deva[द्विषन्], @deva[द्विषन्तौ], @deva[द्विषन्तः] 'enemy/enemies'. Without @deva[अमित्रार्थ]: @deva[द्वेष्टि भार्या पतिम्] 'the wife hates her husband'.",
            "advanced": "@deva[शतृ] follows @deva[द्विष्] with @deva[अमित्रार्थ]. Examples: @deva[द्विषन्], @deva[द्विषन्तौ], @deva[द्विषन्तः]. Without @deva[अमित्रार्थ]: @deva[द्वेष्टि भार्या पतिम्]."
        }
    },
    "32132": {
        "en": {
            "simple": "The affix @deva[शतृ] comes after @deva[सु] 'to press out juice' when the meaning involves association with sacrifice. @deva[यज्ञसंयोग] = connection with sacrifice. Derivation: @deva[सु] + @deva[नु] + @deva[शतृ] (@ref[3.1.76], @ref[3.4.113]) → @deva[सुनु] + @deva[अत्] (@ref[1.2.4]) → @deva[सुन्वत्] (@ref[6.1.77]), nominative singular @deva[सुन्वन्], plural @deva[सुन्वन्तः] 'the sacrificers', as in @deva[सर्वे सुन्वन्तः] 'all share in the sacrifice'. @deva[संयोग] indicates the principal sacrificer (@deva[यजमान]), not subordinate priests (@deva[याजकाः]). Without sacrifice connection: @deva[सुनोति सुराम्] 'he distills liquor'.",
            "standard": "@deva[शतृ] follows @deva[सु] 'to extract juice' when @deva[यज्ञसंयोग] (sacrifice connection) is expressed. @deva[यज्ञसंयोग] is @deva[तृतीयातत्पुरुष]. Derivation: @deva[सु] + @deva[नु] + @deva[शतृ] (@ref[3.1.76], @ref[3.4.113]) → @deva[सुनु] + @deva[अत्] (@ref[1.2.4] @deva[ङित्]) → @deva[सुन्वत्] (@ref[6.1.77]); nominative @deva[सुन्वन्], plural @deva[सुन्वन्तः] 'sacrificers'. @deva[संयोग] = @deva[यजमान] (principal sacrificer), not @deva[याजक] (priest). Without @deva[यज्ञसंयोग]: @deva[सुनोति सुराम्] 'he distills liquor'.",
            "advanced": "@deva[शतृ] follows @deva[सु] with @deva[यज्ञसंयोग]. Derivation: @deva[सु] + @deva[नु] + @deva[शतृ] → @deva[सुन्वत्] (@ref[3.1.76], @ref[3.4.113], @ref[1.2.4], @ref[6.1.77]); nominative @deva[सुन्वन्]. @deva[संयोग] = @deva[यजमान], not @deva[याजक]. Without @deva[यज्ञसंयोग]: @deva[सुनोति सुराम्]."
        }
    },
    "32133": {
        "en": {
            "simple": "The affix @deva[शतृ] comes after @deva[अर्ह्] 'to deserve' when expressing praise. Examples: @deva[अर्हन्निह भवान्विद्याम्] 'thou art worthy of this knowledge here', @deva[अर्हन्निह भवान्पूजाम्] 'thou art worthy of honor'. When not praising: @deva[अर्हति चौरो वधम्] 'the thief deserves death' (uses finite verb).",
            "standard": "@deva[शतृ] follows @deva[अर्ह्] when @deva[स्तुति] (praise) is expressed. Examples: @deva[अर्हन्निह भवान्विद्याम्] 'thou art worthy of knowledge'; @deva[अर्हन्निह भवान्पूजाम्]. Without @deva[स्तुत्यर्थ]: @deva[अर्हति चौरो वधम्] 'the thief deserves death'.",
            "advanced": "@deva[शतृ] follows @deva[अर्ह्] with @deva[स्तुत्यर्थ]. Examples: @deva[अर्हन्निह भवान्विद्याम्], @deva[अर्हन्निह भवान्पूजाम्]. Without @deva[स्तुति]: @deva[अर्हति चौरो वधम्]."
        }
    },
    "32134": {
        "en": {
            "simple": "From this sūtra up to and including @deva[क्विप्] in @ref[3.2.177], the affixes should be understood in the sense of agents having such a habit (@deva[तच्छील]), such a nature (@deva[तद्धर्म]), or having skill in such action (@deva[तत्साधुकारि]). @deva[तच्छील] = natural inclination toward an action not prompted by considering its result. @deva[तद्धर्म] = entering upon an action thinking it is one's duty (not from habit). @deva[तत्साधुकारि] = doing the action excellently.",
            "standard": "From this sūtra through @deva[क्विप्] in @ref[3.2.177] (@deva[आ] = inclusive limit), affixes express @deva[तच्छीलतद्धर्मतत्साधुकारि] (agent having such habit, nature, or skill). @deva[तच्छील] = natural inclination toward action without @deva[फलचिन्तन]. @deva[तद्धर्म] = performing action as @deva[कर्तव्य] (duty), not from habit. @deva[तत्साधुकारि] = excellent performer of the action. Illustrations follow in subsequent sūtras.",
            "advanced": "@deva[अधिकार] from here through @deva[क्विप्] (@ref[3.2.177])—@deva[आ] is @deva[समुच्चयार्थ]. Affixes express @deva[तच्छीलतद्धर्मतत्साधुकारि]. @deva[तच्छील] = @deva[फलानपेक्षप्रवृत्ति]. @deva[तद्धर्म] = @deva[कर्तव्यबुद्धिप्रवृत्ति]. @deva[तत्साधुकारि] = @deva[उत्कर्षेण क्रियाकरण]."
        }
    },
    "32135": {
        "en": {
            "simple": "The affix @deva[तृन्] comes after all verbs in the sense of 'agent having such habit etc.' The @deva[न्] is indicatory and regulates accent (@ref[6.1.197]). Examples: @deva[कृ] + @deva[तृन्] = @deva[कर्तृ], nominative @deva[कर्ता]. For habit: @deva[कर्ता कटान्] 'accustomed to making mats'. For nature: @deva[मुण्डयितारः श्राविष्ठायना भवति वधूमूढाम्] 'the Śrāviṣṭhāyanas shave widows' heads'; @deva[अन्नमपहर्तार आह्वरका भवन्ति श्राद्धे सिद्धे] 'the Āhvarakas steal food after śrāddha'. For skill: @deva[कर्ता कटम्] 'skillful mat-maker'. Vārttikas: (1) Simple verbs without @deva[उपसर्ग] take @deva[तृन्] for priest names: @deva[होता], @deva[पोता]; with @deva[उपसर्ग]: @deva[उद्गाता], @deva[प्रतिहर्ता] use @deva[तृच्] (same form, different accent). (2) @deva[षुक्] augment with @deva[नी]: @deva[नेष्टा]. (3) @deva[त्विष्] → @deva[त्वष्टा] 'Tvaṣṭṛ' (deity, irregular).",
            "standard": "@deva[तृन्] follows all @deva[धातु]s with @deva[तच्छीलादि] sense. The @deva[न्] is @deva[इत्] for accent (@ref[6.1.197]). Examples: @deva[कर्तृ] → @deva[कर्ता]. @deva[तच्छील]: @deva[कर्ता कटान्]. @deva[तद्धर्म]: @deva[मुण्डयितारः श्राविष्ठायना]; @deva[अन्नमपहर्तार आह्वरका]; @deva[उन्नेतारस्तौल्वलायना]. @deva[तत्साधुकारि]: @deva[कर्ता कटम्]; @deva[गन्ताऽऽखेटम्]. @deva[वार्त्तिक]s: (1) @deva[अनुपसर्ग] verbs + @deva[तृन्] for @deva[ऋत्विज्] names: @deva[होता], @deva[पोता]. With @deva[उपसर्ग]: @deva[उद्गाता], @deva[प्रतिहर्ता] use @deva[तृच्]—same form, different accent (@ref[6.1.197] vs @ref[6.1.163]). (2) @deva[षुक्] with @deva[नी]: @deva[नेष्टा]. (3) @deva[त्विष्] + @deva[तृन्] → @deva[त्वष्टा] (deity)—@deva[अ] for @deva[इ], no @deva[इट्]. (4) @deva[क्षद्] + @deva[तृन्] → @deva[क्षता] 'door-keeper'. (5) In @deva[छन्दस्]: @deva[क्षद्] + @deva[तृच्] → @deva[क्षता] (different accent).",
            "advanced": "@deva[तृन्] follows all @deva[धातु]s with @deva[तच्छीलादि]. @deva[न्] is @deva[उदात्तनिमित्त] (@ref[6.1.197]). @deva[तच्छील]: @deva[कर्ता कटान्]. @deva[तद्धर्म]: @deva[मुण्डयितारः श्राविष्ठायना]. @deva[तत्साधुकारि]: @deva[कर्ता कटम्]. @deva[वार्त्तिक]s: (1) @deva[अनुपसर्ग] + @deva[ऋत्विज्]: @deva[होता], @deva[पोता]; with @deva[उपसर्ग]: @deva[तृच्]—@deva[उद्गाता], @deva[प्रतिहर्ता]. (2) @deva[षुगागम] with @deva[नी]: @deva[नेष्टा]. (3) @deva[त्विष्] → @deva[त्वष्टा] (@deva[देवतायाम्])—@deva[अत्वम्], @deva[निषेधाभाव]. (4) @deva[क्षद्] → @deva[क्षता] (@deva[अध्यक्षार्थ]). (5) @deva[छन्दस्]: @deva[क्षद्] + @deva[तृच्]."
        }
    },
    "32136": {
        "en": {
            "simple": "The affix @deva[इष्णुच्] comes after the following verbs in the sense of 'agent having such habit etc.': @deva[अलंकृ] 'to adorn', @deva[निराकृ] 'to expel', @deva[प्रजन्] 'to be born', @deva[उत्पच्] 'to ripen', @deva[उत्पत्] 'to fly', @deva[उन्मद्] 'to be mad', @deva[रुच्] 'to shine', @deva[अपत्रप्] 'to be ashamed', @deva[वृत्] 'to move', @deva[वृध्] 'to grow', @deva[सह्] 'to bear', @deva[चर्] 'to walk'. Examples: @deva[अलङ्करिष्णुः] 'decorating', @deva[निराकरिष्णुः] 'repudiating', @deva[प्रजनिष्णुः] 'procreative', @deva[उत्पचिष्णुः] 'apt to ripen', @deva[उत्पतिष्णुः] 'flying', @deva[उन्मदिष्णुः] 'mad', @deva[रोचिष्णुः] 'bright', @deva[अपत्रपिष्णुः] 'bashful', @deva[वर्तिष्णुः] 'revolving', @deva[वर्धिष्णुः] 'growing', @deva[सहिष्णुः] 'patient', @deva[चरिष्णुः] 'moveable'.",
            "standard": "@deva[इष्णुच्] follows these verbs with @deva[तच्छीलादि]: @deva[अलंकृ], @deva[निराकृ], @deva[प्रजन्], @deva[उत्पच्], @deva[उत्पत्], @deva[उन्मद्], @deva[रुच्], @deva[अपत्रप्], @deva[वृत्], @deva[वृध्], @deva[सह्], @deva[चर्]. Examples: @deva[अलङ्करिष्णुः], @deva[निराकरिष्णुः], @deva[प्रजनिष्णुः], @deva[उत्पचिष्णुः], @deva[उत्पतिष्णुः], @deva[उन्मदिष्णुः], @deva[रोचिष्णुः], @deva[अपत्रपिष्णुः], @deva[वर्तिष्णुः], @deva[वर्धिष्णुः], @deva[सहिष्णुः], @deva[चरिष्णुः]. @deva[वार्त्तिक]: @deva[इष्णुच्] anticipatorily blocks @deva[युच्] (@ref[3.2.151]) after @deva[अलंकृ] with decorating sense.",
            "advanced": "@deva[इष्णुच्] follows @deva[अलंकृ], @deva[निराकृ], @deva[प्रजन्], @deva[उत्पच्], @deva[उत्पत्], @deva[उन्मद्], @deva[रुच्], @deva[अपत्रप्], @deva[वृत्], @deva[वृध्], @deva[सह्], @deva[चर्] with @deva[तच्छीलादि]. Examples: @deva[अलङ्करिष्णुः], @deva[सहिष्णुः], etc. @deva[वार्त्तिक]: @deva[इष्णुच्] @deva[पूर्वविप्रतिषेध] to @deva[युच्] (@ref[3.2.151]) after @deva[अलंकृ]."
        }
    },
    "32137": {
        "en": {
            "simple": "In Vedic literature, the affix @deva[इष्णुच्] in the sense of 'agent having such habit etc.' comes after verbs ending in the causative @deva[णि]. Examples: @deva[दृषदं धारयिष्णवः] 'who hold the stones', @deva[वीरुधः पारयिष्णवः] 'who complete the herbs'.",
            "standard": "In @deva[छन्दस्], @deva[इष्णुच्] with @deva[तच्छीलादि] follows @deva[णिच्]-ending (@deva[ण्यन्त]) verbs. Examples: @deva[दृषदं धारयिष्णवः] 'who hold the stones'; @deva[वीरुधः पारयिष्णवः].",
            "advanced": "In @deva[छन्दस्], @deva[इष्णुच्] with @deva[तच्छीलादि] follows @deva[ण्यन्त] @deva[धातु]s. Examples: @deva[धारयिष्णवः], @deva[पारयिष्णवः]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.2.123-3.2.137")
