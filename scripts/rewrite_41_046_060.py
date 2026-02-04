#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.46-4.1.60 (Batch 4 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41046": {
        "en": {
            "simple": "In Vedic texts, @deva[बहु] class words always (not optionally) take @deva[ङीष्]. Example: @deva[बह्वीषु] @deva[हित्वा] @deva[प्रपिवन्] (@deva[बह्वी] is a herb name).",
            "standard": "In @deva[छन्दस्], the @deva[बह्वादि] words obligatorily (@deva[नित्यम्]) take @deva[ङीष्]—the optionality of @ref[4.1.45] doesn't apply. Example: @deva[बह्वीषु हित्वा प्रपिवन्] (where @deva[बह्वी] is a plant name). The word @deva[नित्य] anticipates the next sūtra more than this one, since without @deva[नित्य] this rule would already be obligatory (by @deva[आरम्भसामर्थ्य]).",
            "advanced": "In @deva[छन्दस्], @deva[बह्वादि]-class words take @deva[ङीष्] obligatorily (@deva[नित्यम्]). The @deva[नित्य] specification serves @ref[4.1.47] more than this sūtra—without it, this would already be @deva[नित्यविधि] by @deva[आरम्भसामर्थ्यादेव नित्योविधिः सिद्धः, योगारम्भश्चिन्त्य योजनः]. Vedic example: @deva[बह्वीषु हित्वा प्रपिवन्]—@deva[बह्वी] as herb name."
        }
    },
    "41047": {
        "en": {
            "simple": "In Vedic texts, stems ending in @deva[भु] (like @deva[विभु], @deva[प्रभु]) always take @deva[ङीष्]. Example: @deva[विभ्वी], @deva[प्रभ्वी], @deva[सुभ्वी], @deva[शम्भ्वी].",
            "standard": "In @deva[छन्दस्], stems ending in @deva[भु] (short @deva[उ]) obligatorily take @deva[ङीष्]. Examples: @deva[विभ्वी], @deva[प्रभ्वी], @deva[सुभ्वी], @deva[शम्भ्वी]. This doesn't apply to @deva[स्वयंभू] (ends in long @deva[ऊ]). The anuvṛtti of @deva[उतः] (short @deva[उ]-ending) from @ref[4.1.44] governs here. The @deva[भुवः] in the sūtra is an irregular ablative of @deva[भु] (formed with @deva[उवङ्]-substitution—sūtra-specific).",
            "advanced": "In @deva[छन्दस्], @deva[भ्वन्त] (short-@deva[उ]) stems take @deva[ङीष्] obligatorily. Forms: @deva[विभ्वी], @deva[प्रभ्वी], @deva[सुभ्वी], @deva[शम्भ्वी]. Exclusion: @deva[स्वयंभू] (long @deva[ऊ]). The anuvṛtti of @deva[उतः] from @ref[4.1.44] restricts to short @deva[उ]. The sūtra-form @deva[भुवः] shows irregular @deva[उवङ्]-substitution ablative—a sūtra-specific formation."
        }
    },
    "41048": {
        "en": {
            "simple": "The feminine affix @deva[ङीष्] is used when a word expresses the name of a wife in relation to her husband. Example: @deva[गणकी] (wife of an astrologer), @deva[महामात्री] (wife of a chief minister).",
            "standard": "When the feminine word denotes 'wife of' (@deva[पुंयोगादाख्यायाम्]—a designation arising from connection with a male), @deva[ङीष्] is used. Thus @deva[गणकी] (wife of @deva[गणक] 'astrologer'), @deva[महामात्री] (wife of chief minister), @deva[प्रष्ठी], @deva[प्रचरी]. But when the woman herself possesses the quality: @deva[गणका] (female astrologer—@deva[टाप्]). The word @deva[आख्या] (designation) is specified because @deva[पुंयोग] could also mean 'effect of union with a male' (like pregnancy)—@deva[परिसृष्टा], @deva[प्रजाता] take @deva[टाप्], not @deva[ङीष्]. Vārtika: @deva[गोपालिक] etc. are exceptions: @deva[गोपालिका] (wife of cowherd).",
            "advanced": "This sūtra provides @deva[ङीष्] for @deva[पुंयोग]-derived @deva[आख्या] (designation from husband-connection). @deva[आख्यायाम्] specifies: the word is a name/designation for the woman based on husband's status, not that she possesses the quality. Thus @deva[गणकी] (wife of astrologer) vs. @deva[गणका] (female astrologer). The @deva[आख्या] specification excludes @deva[पुंयोग] = 'effect of male union' (pregnancy): @deva[परिसृष्टा], @deva[प्रजाता] → @deva[टाप्]. Vārtika: @deva[गोपालिकादि]-prohibition—@deva[गोपालिका]. Another vārtika: @deva[सूर्य] when denoting celestial wife takes @deva[चाप्]: @deva[सूर्या] (divine, like Sūrya's celestial wife) vs. @deva[सूर्यी] (human wife like Kuntī). @deva[चाप्] makes final @deva[उदात्त]."
        }
    },
    "41049": {
        "en": {
            "simple": "The augment @deva[आनुक्] (@deva[आन्]) is added to certain words before @deva[ङीष्]: @deva[इन्द्र], @deva[वरुण], @deva[भव], @deva[शर्व], @deva[रुद्र], @deva[मृड], @deva[हिम], @deva[अरण्य], @deva[यव], @deva[यवन], @deva[मातुल], @deva[आचार्य]. Example: @deva[इन्द्राणी] (wife of Indra), @deva[हिमानी] (glacier).",
            "standard": "The augment @deva[आनुक्] (= @deva[आन्]) is added before @deva[ङीष्] for listed words. Proper nouns (deity names) @deva[इन्द्र] through @deva[मृड]: @deva[इन्द्राणी], @deva[वरुणानी], @deva[भवानी], @deva[शर्वाणी], @deva[रुद्राणी], @deva[मृडानी]—these would take @deva[ङीष्] by @ref[4.1.48] anyway; this sūtra adds @deva[आनुक्]. For @deva[हिम]/अरण्य: @deva[आनुक्] with meaning 'great quantity'—@deva[हिमानी] (glacier), @deva[अरण्यानी] (great forest); otherwise neuter. @deva[यव]: @deva[यवानी] (oat—inferior barley-imitator). @deva[यवन]: @deva[यवनानी] (Yavana script). @deva[मातुल]/उपाध्याय: optional—@deva[मातुलानी]/मातुली, @deva[उपाध्यायानी]/उपाध्यायी]. @deva[आचार्य]: @deva[आचार्यानी] (no @deva[ण्]-change). Vedic @deva[मुद्गल]: @deva[मुद्गलानी] (with @deva[ल्]-इत् → preceding vowel @deva[उदात्त]).",
            "advanced": "This sūtra teaches @deva[आनुक्]-augment + @deva[ङीष्] for listed stems. Two functions: (1) for @deva[इन्द्रादि] deity names through @deva[मृड], only @deva[आनुक्] is new (@deva[ङीष्] would come by @ref[4.1.48]): @deva[इन्द्राणी], @deva[वरुणानी], etc. (2) for @deva[हिमादि], both @deva[आनुक्] and @deva[ङीष्] are taught. Vārtikas: @deva[हिम]/अरण्य + @deva[आनुक्] for 'greatness' sense (@deva[हिमानी], @deva[अरण्यानी]); @deva[यव] + @deva[आनुक्] for 'fault' sense (inferior grain imitation); @deva[यवन] for 'script' (@deva[यवनानी] = Yavana writing); @deva[मातुल]/उपाध्याय optional for 'wife'; @deva[आचार्य]—no @deva[ण्]-change (@ref[8.4.2] blocked): @deva[आचार्यानी]; @deva[अर्य]/क्षत्रिय optional for non-wife sense (@deva[अर्याणी]/अर्या], but wife-sense: @deva[अर्यी], @deva[क्षत्रियी]); Vedic @deva[मुद्गल]: @deva[मुद्गलानी] with @deva[लित्]-treatment → @deva[उदात्त] on preceding vowel (@ref[6.1.193])."
        }
    },
    "41050": {
        "en": {
            "simple": "After compounds ending in @deva[क्रीत] (bought) where the first member denotes the means of purchase, @deva[ङीष्] is used. Example: @deva[वस्त्रक्रीती] (female bought for cloth), @deva[वसनक्रीती].",
            "standard": "When a compound ends in @deva[क्रीत] (bought) and the first member is the @deva[करण] (means of purchase), the feminine takes @deva[ङीष्]. Forms: @deva[वस्त्रक्रीती], @deva[वसनक्रीती]. Condition: first member must be @deva[करण]. Counter-examples: @deva[सुक्रीता], @deva[दुष्क्रीता] (well/ill-purchased—first member not @deva[करण]). Exception: @deva[धनक्रीता] in @deva[सा हितस्य धनक्रीता प्राणेभ्योपि गरीयसी]—here @deva[क्रीता] (feminine) was formed first, then compounded with @deva[धन]; the general rule @deva[गतिकारकोपपदानां कृद्भिः सहसमासवचनं प्राक् सुबुत्पत्तेः] (compound before case-ending) has exception by @ref[2.1.32] @deva[कर्तृकरणे कृता बहुलम्].",
            "advanced": "This sūtra provides @deva[ङीष्] for @deva[करणपूर्व]-@deva[क्रीतान्त] compounds. The @deva[करण] (instrument of purchase) must be the first member. @deva[वस्त्रक्रीती], @deva[वसनक्रीती]. Exclusion: @deva[सुक्रीता], @deva[दुष्क्रीता]—@deva[सु]/दुष् aren't @deva[करण]. Anomaly @deva[धनक्रीता]: here feminine @deva[क्रीता] was formed before compounding—exception to @deva[गतिकारकोपपदानां कृद्भिः सहसमासवचनं प्राक् सुबुत्पत्तेः], permitted by @ref[2.1.32] @deva[कर्तृकरणे कृता बहुलम्] diversity."
        }
    },
    "41051": {
        "en": {
            "simple": "When a compound has an instrumental-case first member and ends in a @deva[क्त]-formed word, and the meaning conveys 'a little', @deva[ङीष्] is used. Example: @deva[अभ्रविलिप्ती] @deva[द्यौः] (sky slightly covered with clouds).",
            "standard": "When a compound ends in a @deva[क्त]-participle, has an instrumental-sense first member (@deva[करणपूर्व]), and the whole expresses 'little quantity' (@deva[अल्पाख्या]), @deva[ङीष्] applies. Forms: @deva[अभ्रविलिप्ती द्यौः] (sky slightly cloud-covered), @deva[सूपविलिप्ती पात्री] (dish slightly soup-covered). The @deva[अल्पाख्यायाम्] qualifies the whole compound. Counter-example without 'little' sense: @deva[चन्दनानुलिप्ता ब्राह्मणी] (Brāhmaṇī covered with sandalwood—no @deva[ङीष्]).",
            "advanced": "This sūtra provides @deva[ङीष्] for @deva[करणपूर्व]-@deva[क्तान्त] compounds conveying @deva[अल्पार्थ]. The @deva[करणपूर्वात्] continues from @ref[4.1.50]. The @deva[क्त]-participle must have instrumental-case first member expressing 'slight amount'. @deva[अभ्रविलिप्ती द्यौः], @deva[सूपविलिप्ती पात्री]. The @deva[अल्पाख्यायाम्] condition: without diminutive sense → @deva[चन्दनानुलिप्ता ब्राह्मणी] (no @deva[ङीष्])."
        }
    },
    "41052": {
        "en": {
            "simple": "After @deva[बहुव्रीहि] compounds ending in a @deva[क्त]-formed word with final @deva[उदात्त] accent, @deva[ङीष्] is used (when the first member is a body-part word). Example: @deva[शंखभिन्नी] (having a cracked temple-bone), @deva[ऊरुभिन्नी], @deva[केशलूनी].",
            "standard": "Bahuvrīhi compounds ending in @deva[क्त]-participles with final @deva[उदात्त] accent take @deva[ङीष्] when the first member is a @deva[स्वाङ्ग] (body-part) word. Examples: @deva[शंखभिन्नी], @deva[ऊरुभिन्नी], @deva[गलकोत्कृन्नी], @deva[केशलूनी]. The @deva[निष्ठा] (@deva[क्त]) stands second by vārtika @deva[जातिकालसुखादिश्यः परवचनम्] under @ref[2.2.36]. Final @deva[उदात्त] comes from @ref[6.2.170]. Not for tatpuruṣa: @deva[पादपतिता] (ablative tatpuruṣa @ref[2.2.38], accent by @ref[6.2.144]). Vārtikas: prohibition for @deva[जात]: @deva[दन्तजाता], @deva[स्तनजाता]; @deva[पाणिगृहीती] only for @deva[अग्निसाक्षिक] marriage (otherwise @deva[पाणिगृहीता] = concubine); exceptions for @deva[बहु]/नञ्/सु/काल/सुख-initial: @deva[बहुकृता], @deva[अकृता], @deva[मासजाता], etc.",
            "advanced": "This sūtra provides @deva[ङीष्] for @deva[बहुव्रीहि] @deva[क्तान्त] compounds with @deva[अन्तोदात्त] accent when first member is @deva[स्वाङ्ग]. @deva[स्वाङ्ग]-initial examples: @deva[शंखभिन्नी], @deva[ऊरुभिन्नी] (शंख/ऊरु are @deva[जाति] words with final @deva[उदात्त] by @ref[6.2.170]). @deva[निष्ठा] position: second by vārtika under @ref[2.2.36]. Exclusion: tatpuruṣa @deva[पादपतिता] (@ref[2.2.38], @ref[2.1.32]; accent by @ref[6.2.144]). Vārtikas: (1) @deva[जात]-prohibition: @deva[दन्तजाता], @deva[स्तनजाता]; (2) @deva[पाणिगृहीत्यादि]-specific senses: @deva[पाणिगृहीती] for @deva[अग्निसाक्षिक] marriage, @deva[पाणिगृहीता] otherwise; (3) @deva[बहु]/नञ्/सु/काल/सुखादि-initial exceptions: @deva[बहुकृता], @deva[अकृता], @deva[सुकृता], @deva[मासजाता], @deva[संवत्सरजाता], @deva[सुखजाता]. Final @deva[उदात्त] per @ref[6.2.170] ff."
        }
    },
    "41053": {
        "en": {
            "simple": "When a @deva[बहुव्रीहि] compound ends in @deva[क्त] with final @deva[उदात्त] accent but the first member is NOT a body-part word, @deva[ङीष्] is optional. Example: @deva[शार्ङ्गजग्धी] or @deva[शार्ङ्गजग्धा] (eaten by a tiger).",
            "standard": "When the bahuvrīhi ends in @deva[अन्तोदात्त] @deva[क्त] but the first member is not @deva[स्वाङ्ग] (body-part), @deva[ङीष्] becomes optional. Forms: @deva[शार्ङ्गजग्धी]/शार्ङ्गजग्धा (@deva[शार्ङ्ग] is @deva[जाति], not @deva[स्वाङ्ग]), @deva[पलाण्डुभक्षिती]/पलाण्डुभक्षिता, @deva[सुरापीती]/सुरापीता. When first member IS @deva[स्वाङ्ग]: @deva[शंखभिन्नी], @deva[ऊरुभिन्नी] (only one form—@ref[4.1.52]). When not @deva[अन्तोदात्त]: @deva[वस्त्रछन्ना], @deva[वसनछन्ना] (not final @deva[उदात्त] per @ref[6.2.170]—@deva[आच्छादन]-words excepted). Vārtika: Vedic/names allow diversity: @deva[प्रवृद्धविलूनी]/प्रवृद्धविलूना.",
            "advanced": "This sūtra provides @deva[विभाषा] (optionality) for @deva[अन्तोदात्त] @deva[क्तान्त]-bahuvrīhis when first member is non-@deva[स्वाङ्ग]. @deva[शार्ङ्गजग्ध] (@deva[जाति]-initial, not @deva[स्वाङ्ग]) → @deva[शार्ङ्गजग्धी]/शार्ङ्गजग्धा. The option is triggered by non-@deva[स्वाङ्ग] status. @deva[स्वाङ्ग]-initial: obligatory @deva[ङीष्] per @ref[4.1.52]. Non-@deva[अन्तोदात्त]: @deva[वस्त्रछन्ना] (not @deva[अन्तोदात्त] by @ref[6.2.170]—@deva[आच्छादन]-word exception). Vārtika: @deva[छन्दसि संज्ञायां च विभाषा]—@deva[प्रवृद्धविलूनी]/प्रवृद्धविलूना."
        }
    },
    "41054": {
        "en": {
            "simple": "When a body-part word is subordinate in a compound and its penultimate letter is not a conjunct consonant, @deva[ङीष्] is optional. Example: @deva[चन्द्रमुखी] or @deva[चन्द्रमुखा] (moon-faced).",
            "standard": "When a @deva[स्वाङ्ग] (body-part) word is @deva[उपसर्जन] (subordinate) in a compound and lacks a conjunct-consonant penultimate, @deva[ङीष्] is optional. Examples: @deva[चन्द्रमुखी]/चन्द्रमुखा, @deva[अतिकेशी]/अतिकेशा]. The @deva[अतिकेश] is tatpuruṣa (@deva[अतिक्रान्ता केशान्]—@deva[केश] is @deva[उपसर्जन] by @ref[1.2.44]). Conditions: (1) @deva[स्वाङ्ग]-final; (2) @deva[उपसर्जन]; (3) non-conjunct penultimate. Counter-examples: @deva[बहुयवा] (not @deva[स्वाङ्ग]); @deva[अशिखा] (@deva[शिखा] not @deva[उपसर्जन]); @deva[सुगुल्फा], @deva[सुपार्श्वा] (conjunct penultimate). Vārtika: @deva[अङ्ग], @deva[गात्र], @deva[कण्ठ] take option despite conjunct penultimate: @deva[मृद्वङ्गी]/मृद्वङ्गा, @deva[सुगात्री]/सुगात्रा, @deva[स्निग्धकण्ठी]/स्निग्धकण्ठा.",
            "advanced": "This sūtra provides optional @deva[ङीष्] for @deva[स्वाङ्गान्त] compounds where the @deva[स्वाङ्ग] is @deva[उपसर्जन] and @deva[असंयोगोपधा] (non-conjunct penultimate). @deva[स्वाङ्ग] definition: @deva[अद्रवं मूर्तिमत्स्वाङ्गं प्राणिस्थमविकारजम्। अतत्स्थं तत्रदृष्टं चेत् तेन चेत् तत्तथायुतम्॥]—non-fluid, perceptible, existing in living beings, not change-produced; or if elsewhere, originally known in beings, or having similar relation. The @deva[अन्तोदात्तात् क्तान्तात्] anuvṛtti doesn't extend here, but @deva[वा] does. Vārtika: @deva[अङ्ग]/गात्र/कण्ठ take option despite @deva[संयोगोपध]: @deva[मृद्वङ्गी]/मृद्वङ्गा], etc."
        }
    },
    "41055": {
        "en": {
            "simple": "The words @deva[नासिका], @deva[उदर], @deva[ओष्ठ], @deva[जंघा], @deva[दन्त], @deva[कर्ण], and @deva[शृङ्ग] optionally take @deva[ङीष्] at compound-end (even if conjunct penultimate or polysyllabic). Example: @deva[तुङ्गनासिकी] or @deva[तुङ्गनासिका].",
            "standard": "Seven body-part words optionally take @deva[ङीष्] as compound-finals: @deva[नासिका], @deva[उदर], @deva[ओष्ठ], @deva[जंघा], @deva[दन्त], @deva[कर्ण], @deva[शृङ्ग]. This is an exception to @ref[4.1.54] (conjunct penultimate) and @ref[4.1.56] (polysyllabic), but governed by @ref[4.1.57]. Forms: @deva[तुङ्गनासिकी]/तुङ्गनासिका, @deva[तिलोदरी]/तिलोदरा, @deva[बिम्बोष्ठी]/बिम्बोष्ठा, @deva[दीर्घजंघी]/दीर्घजंघा, @deva[समदन्ती]/समदन्ता, @deva[चारुकर्णी]/चारुकर्णा, @deva[तीक्ष्णशृङ्गी]/तीक्ष्णशृङ्गा. Vārtikas: @deva[पुच्छ] also included: @deva[कल्याणपुच्छी]/कल्याणपुच्छा; but @deva[ङीष्] obligatory for @deva[पुच्छ] with @deva[कबर]/मणि/विष/शर: @deva[कबरपुच्छी] (peahen), @deva[विषपुच्छी] (scorpion); also obligatory for @deva[पक्ष]/पुच्छ in simile-sense: @deva[उलूकपक्षी सेना], @deva[उलूकपुच्छी शाला].",
            "advanced": "This sūtra lists seven @deva[स्वाङ्ग]-words taking optional @deva[ङीष्] despite @deva[संयोगोपधत्व] or @deva[बहुच्]-status. This excepts @ref[4.1.54] (conjunct) and @ref[4.1.56] (polysyllabic) but is qualified by @ref[4.1.57] (@deva[सह]/नञ्/विद्यमान-initial prohibition). Vārtikas: (1) @deva[पुच्छ] also: @deva[कल्याणपुच्छी]/कल्याणपुच्छा; (2) @deva[पुच्छ] with @deva[कबर]/मणि/विष/शर obligatory: @deva[कबरपुच्छी] (peahen), @deva[मणिपुच्छी], @deva[विषपुच्छी] (scorpion), @deva[शरपुच्छी]; (3) @deva[पक्ष]/पुच्छ in @deva[उपमान] (simile) obligatory: @deva[उलूकपक्षी सेना], @deva[उलूकपुच्छी शाला]."
        }
    },
    "41056": {
        "en": {
            "simple": "@deva[ङीष्] is NOT used after @deva[क्रोड] class body-part words or after polysyllabic body-part words. Example: @deva[कल्याणक्रोडा], @deva[सुभगा], @deva[सुजघना], @deva[महाललाटा].",
            "standard": "The @deva[क्रोडादि] class (body-part words established by usage) and polysyllabic (@deva[बह्वच्]) body-part words don't take @deva[ङीष्]. @deva[क्रोडादि] examples: @deva[कल्याणक्रोडा], @deva[कल्याणखुरा], @deva[कल्याणबाला], @deva[कल्याणशफा], @deva[कल्याणगुदा], @deva[कल्याणघाणा], @deva[सुभगा], @deva[सुगला]. Polysyllabic examples: @deva[सुजघना], @deva[पृथुजघना], @deva[महाललाटा]. The @deva[क्रोडादि] is an @deva[आकृतिगण] (usage-based open class). Note: @deva[क्रोड] (feminine) loses gender-marking by @deva[पुंवद्भाव] when @deva[उपसर्जन] in bahuvrīhi, and shortens by @ref[1.2.48].",
            "advanced": "This sūtra prohibits @deva[ङीष्] for: (1) @deva[क्रोडादि] gaṇa—@deva[आकृतिगण] (open, usage-established); (2) @deva[बह्वच्] (polysyllabic) @deva[स्वाङ्ग]. @deva[क्रोडादि]: @deva[कल्याणक्रोडा], @deva[कल्याणखुरा], @deva[कल्याणउखा], @deva[कल्याणबाला], etc. Polysyllabic: @deva[सुजघना], @deva[पृथुजघना], @deva[महाललाटा]. The @deva[क्रोड] (inherently feminine) undergoes @deva[पुंवद्भाव] when @deva[उपसर्जन] in bahuvrīhi, shortening by @ref[1.2.48]."
        }
    },
    "41057": {
        "en": {
            "simple": "@deva[ङीष्] is NOT used after body-part words when preceded by @deva[सह] (with), @deva[नञ्] (negation), or @deva[विद्यमान] (existing). Example: @deva[सकेशा], @deva[अकेशा], @deva[विद्यमानकेशा].",
            "standard": "Body-part words (@deva[स्वाङ्ग]) when @deva[उपसर्जन] and preceded by @deva[सह], @deva[नञ्], or @deva[विद्यमान] don't take @deva[ङीष्]. Forms: @deva[सकेशा], @deva[अकेशा], @deva[विद्यमानकेशा]; @deva[सनासिका], @deva[अनासिका], @deva[विद्यमाननासिका]. This governs both @ref[4.1.54] and @ref[4.1.55]—the latter's listed words (@deva[नासिका] etc.) are also affected.",
            "advanced": "This sūtra prohibits @deva[ङीष्] for @deva[उपसर्जन]-@deva[स्वाङ्गान्त] compounds when preceded by @deva[सह]/नञ्/विद्यमान]. This qualifies both @ref[4.1.54] (general @deva[स्वाङ्ग]) and @ref[4.1.55] (@deva[नासिकादि] list). Forms: @deva[सकेशा], @deva[अकेशा], @deva[विद्यमानकेशा]; @deva[सनासिका], @deva[अनासिका], @deva[विद्यमाननासिका]."
        }
    },
    "41058": {
        "en": {
            "simple": "@deva[ङीष्] is NOT used after @deva[नख] (nail) or @deva[मुख] (face) when the compound is a proper name. Example: @deva[शूर्पणखा] (Śūrpaṇakhā—Rāvaṇa's sister), @deva[गौरमुखा], @deva[कालमुखा].",
            "standard": "When @deva[नख] or @deva[मुख] forms the final element of a compound that is a proper name (@deva[संज्ञा]), @deva[ङीष्] is not used. Examples: @deva[शूर्पणखा] (the @deva[न] → @deva[ण] by @ref[8.4.3]), @deva[वज्रणखा], @deva[गौरमुखा], @deva[कालमुखा]. When not a name: @deva[ताम्रमुखी कन्या] (copper-faced girl), @deva[चन्द्रमुखी] (moon-faced)—these are attributive, not names.",
            "advanced": "This sūtra prohibits @deva[ङीष्] for @deva[नख]/मुख-final compounds when @deva[संज्ञा] (proper name). @deva[शूर्पणखा] (@deva[न] → @deva[ण] by @ref[8.4.3] @deva[पूर्वपदात् संज्ञायामगः]), @deva[वज्रणखा], @deva[गौरमुखा], @deva[कालमुखा]. Non-@deva[संज्ञा] (attributive): @deva[ताम्रमुखी कन्या], @deva[चन्द्रमुखी]—these take @deva[ङीष्]."
        }
    },
    "41059": {
        "en": {
            "simple": "The Vedic form @deva[दीर्घजिह्वी] (long-tongued) is irregular. Example: @deva[दीर्घजिह्वी वै देवानां हव्यमलेट्].",
            "standard": "The form @deva[दीर्घजिह्वी] is an irregular Vedic feminine. Since @deva[जिह्व] has conjunct penultimate, @ref[4.1.54] wouldn't apply. This sūtra exceptionally provides @deva[ङीष्]. Vedic usage: @deva[दीर्घजिह्वी वै देवानां हव्यमलेट्]. The @deva[च] draws @deva[संज्ञा] from @ref[4.1.58]—@deva[दीर्घजिह्वी] is always a name. Using the feminine form @deva[दीर्घजिह्वी] in the sūtra indicates @deva[ङीष्] is obligatory, not optional.",
            "advanced": "This sūtra provides irregular @deva[ङीष्] for Vedic @deva[दीर्घजिह्वी]. @deva[जिह्व] has @deva[संयोगोपध] (@deva[ह्व]), so @ref[4.1.54] wouldn't apply. The @deva[च] implies @deva[संज्ञा]-anuvṛtti from @ref[4.1.58]—@deva[दीर्घजिह्वी] is always a name. Using feminine form in sūtra signals @deva[नित्य] application. Citation: @deva[दीर्घजिह्वी वै देवानां हव्यमलेट्]."
        }
    },
    "41060": {
        "en": {
            "simple": "When a direction-word precedes a body-part compound, @deva[ङीप्] (not @deva[ङीष्]) is used. Example: @deva[प्राङ्मुखी] or @deva[प्राङ्मुखा] (east-facing).",
            "standard": "When the first member of a compound is a @deva[दिश्]-word (direction), @deva[ङीप्] replaces @deva[ङीष्] where the latter would have applied. Thus @deva[प्राङ्मुखी]/प्राङ्मुखा, @deva[प्राङ्नासिकी]/प्राङ्नासिका. The forms are identical except for accent (@deva[ङीप्] is @deva[अनुदात्त] by @ref[3.1.4]). This rule only operates where @deva[ङीष्] would have come—not for @deva[प्राग्गुल्फा], @deva[प्राक्क्रोडा], @deva[प्राग्जघना] (these don't take @deva[ङीष्] by @ref[4.1.56]). The sūtra has two readings: (1) @deva[ङीष्] applies to @deva[दिश्]-prefixed @deva[स्वाङ्ग]/नासिकादि compounds (non-conjunct penultimate); (2) @deva[ङीप्] substitutes for @deva[ङीष्] when @deva[दिश्]-prefixed. Hence @deva[ङीष्]-anuvṛtti continues to @ref[4.1.61].",
            "advanced": "This sūtra provides @deva[ङीप्] as substitute for @deva[ङीष्] when @deva[दिश्] (direction-word) is first member. @deva[प्राङ्मुखी]/प्राङ्मुखा, @deva[प्राङ्नासिकी]/प्राङ्नासिका. The difference is accent only (@deva[ङीप्] = @deva[अनुदात्त] by @ref[3.1.4]). Scope: only where @deva[ङीष्] would apply—@deva[प्राग्गुल्फा], @deva[प्राक्क्रोडा], @deva[प्राग्जघना] don't take @deva[ङीष्] by @ref[4.1.56], so no @deva[ङीप्] substitution. Two-rule reading: (1) @deva[ङीष्] for @deva[दिश्]-prefixed @deva[स्वाङ्ग]/नासिकादि (non-@deva[संयोगोपध]); (2) @deva[ङीप्] substitutes. This establishes @deva[ङीष्]-anuvṛtti for @ref[4.1.61], not @deva[ङीप्]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.46-4.1.60 (Batch 4)")
