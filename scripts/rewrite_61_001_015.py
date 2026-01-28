#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 6.1.1-6.1.15 (Batch 1 of 6.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61001": {
        "en": {
            "simple": "This @deva[अधिकार] (governing rule) controls reduplication through @ref[6.1.12]. The first single-vowel portion (@deva[एकाच्]) of a verb is doubled. Example: @deva[पच्] → @deva[पपाच] (he cooked), @deva[जागृ] → @deva[जजागार] (he awoke).",
            "standard": "This @deva[अधिकार] extends through @ref[6.1.12], governing reduplication rules. The terms @deva[एकाचः], @deva[द्वे], and @deva[प्रथमस्य] carry forward. The 'first @deva[एकाच्]' means the first portion containing a single vowel. For polysyllabic roots like @deva[जागृ], @deva[जा] is the @deva[प्रथम एकाच्]. For monosyllabic roots like @deva[पच्], the maxim @deva[व्यपदेशिवद्भाव] applies. Reduplication occurs with @deva[लिट्] (Perfect), @deva[सन्] (Desiderative), @deva[यङ्] (Intensive), @deva[श्लु]-class, and @deva[चङ्] (Aorist).",
            "advanced": "This @deva[अधिकार] governs @ref[6.1.1]-@ref[6.1.12]. The @deva[द्वि] indicates actual repetition (@deva[पुनरुक्ति]), not substitution of two elements—compare @ref[8.1.1]. For monosyllabic roots, @deva[व्यपदेशिवद्भाव] (@ref[1.1.59]) applies: though no 'first' portion exists, the whole root reduplicates. Derivation: @deva[पच्] + @deva[णल्] → @deva[पच् पच्] + @deva[अ] → @deva[प पाच्] + @deva[अ] (@ref[7.4.59], @ref[7.4.60]) → @deva[पपाच]. The @deva[एकाच] is defined as that which consists of one @deva[अच्] (vowel)."
        }
    },
    "61002": {
        "en": {
            "simple": "For vowel-initial roots with multiple syllables, the second syllable is reduplicated, not the first. Example: @deva[अट्] + @deva[सन्] → @deva[अटिटिषति] (desires to roam); @deva[ॠ] + @deva[सन्] → @deva[अरिरिषति] (desires to go).",
            "standard": "This rule debars first-syllable reduplication for @deva[अजादि अनेकाच्] roots (vowel-initial, polysyllabic). The @deva[सनन्त] @deva[अटिष] (@deva[अट्] + @deva[इट्] + @deva[सन्] by @ref[7.2.35]) reduplicates @deva[टिष्]: @deva[अटिटिषति]. Similarly @deva[अशिशिषति], @deva[अरिरिषति]. For @deva[ॠ]: @deva[ॠ] + @deva[सन्] → @deva[अर] + @deva[इ] + @deva[स] (@ref[7.3.84], @ref[6.1.51]). Rule @ref[1.1.59] doesn't apply here since @deva[इट्] (the vowel affix) is itself undergoing an operation and cannot trigger @deva[स्थानिवद्भाव].",
            "advanced": "This sūtra provides @deva[द्वितीयस्य द्वित्व] for @deva[अजादि अनेकाच्] roots. The word @deva[अजादेः] is a @deva[बहुव्रीहि] (Genitive): 'of that whose beginning is a vowel'. Some take it as @deva[कर्मधारय] (Ablative): 'the syllable after the initial vowel'. The @deva[इट्]-augment doesn't trigger @ref[1.1.59] because @deva[कार्यमनुभवन्हि कार्यी निमित्ततया नाश्रीयते]—what undergoes an operation cannot simultaneously cause another. Example: @deva[शीङ्] → @deva[शयिता]—@deva[ङित्]-prohibition (@ref[1.1.5]) doesn't apply since the root is itself @deva[कार्यी]."
        }
    },
    "61003": {
        "en": {
            "simple": "When reduplicating the second syllable, the consonants @deva[न्], @deva[द्], and @deva[र्] at the start of a cluster are not copied. Example: @deva[उन्द्] + @deva[सन्] → @deva[उन्दिदिषति] (not @deva[उन्दिन्दिषति]).",
            "standard": "The consonants @deva[न्], @deva[द्], @deva[र्] as @deva[संयोगादि] (cluster-initial) in the second syllable are excluded from reduplication. Examples: @deva[उन्दिदिषति] (from @deva[उन्द्]), @deva[अड्डिडिषति] (from @deva[अड्ड्]), @deva[अर्चिचिषति] (from @deva[अर्च्]). Vārtika: @deva[ब्] is also excluded: @deva[उब्जिजिषति]. Vārtika: @deva[र्] before @deva[य्] is NOT excluded: @deva[अरार्यते] (Intensive of @deva[ॠ]).",
            "advanced": "This sūtra prohibits @deva[द्वित्व] of @deva[न्], @deva[द्], @deva[र्] when @deva[संयोगादि] in @deva[द्वितीयैकाच्]. @deva[अजादेः] continues from @ref[6.1.2]. Examples: @deva[उन्दिदिषति], @deva[अड्डिडिषति], @deva[अर्चिचिषति]. Vārtika @deva[बकारस्य च]: @deva[उब्जिजिषति]. This applies when @deva[ब्] is @deva[उपदेश]-original; if @deva[द्] → @deva[ब्] by substitution, no prohibition. Vārtika @deva[रेफस्य यकारे]: @deva[र्य] allows @deva[र्]-reduplication: @deva[अरार्यते] (@deva[ॠ] + @deva[यङ्]). Vārtika @deva[ईर्ष्य]-forms: @deva[ईर्ष्यिषिषति] or @deva[ईर्ष्यियिषति]. Vārtika: @deva[कण्डूयादि] reduplicate third syllable: @deva[कण्डूयियिषति]."
        }
    },
    "61004": {
        "en": {
            "simple": "Of the two copies created by reduplication, the first one is called @deva[अभ्यास] (the reduplicate). Example: in @deva[पपाच], the first @deva[प] is the @deva[अभ्यास].",
            "standard": "The @deva[द्वे] (two) from @ref[6.1.1] is understood here in genitive: @deva[द्वयोः पूर्वः] (the first of the two). This technical term @deva[अभ्यास] is used in @ref[3.1.6], @ref[6.1.7], etc. In @deva[पपाच], the initial @deva[प] is the @deva[अभ्यास]; in @deva[जुहोति], @deva[जु] is the @deva[अभ्यास].",
            "advanced": "This @deva[संज्ञासूत्र] defines @deva[अभ्यास] as @deva[द्वयोः पूर्वः]. The nominative @deva[द्वे] is reinterpreted as genitive for this rule. The term appears in @ref[3.1.6] (@deva[अभ्यासमतद्धितलुकि]), @ref[6.1.7] (@deva[तुजादीनां दीर्घोऽभ्यासस्य]), @ref[7.4.58]-@ref[7.4.97] (various @deva[अभ्यास]-modifications). The @deva[अभ्यास] undergoes specific changes: shortening (@ref[7.4.59]), consonant simplification (@ref[7.4.60]), etc."
        }
    },
    "61005": {
        "en": {
            "simple": "The two copies together—the @deva[अभ्यास] and the original—are collectively called @deva[अभ्यस्त] (the reduplicated form). Example: the whole @deva[पपाच] is @deva[अभ्यस्त].",
            "standard": "The word @deva[उभे] (both) indicates @deva[अभ्यस्त] applies to the pair collectively, not individually. This term appears in @ref[3.4.109], @ref[6.1.32]. By @ref[6.1.189], the first vowel of an @deva[अभ्यस्त] gets @deva[उदात्त] accent: @deva[द꣡दति]. By @ref[7.1.4], @deva[अत्] replaces @deva[झ] after @deva[अभ्यस्त]: @deva[दद] + @deva[झि] → @deva[ददति].",
            "advanced": "This @deva[संज्ञासूत्र] defines @deva[अभ्यस्त] as the collective designation of both portions. Used in: @ref[3.4.109] (@deva[सीयुट्]-prohibition), @ref[6.1.32] (@deva[लोपोऽभ्यस्तस्य]), @ref[6.1.189] (@deva[अभ्यस्तस्याद्युदात्तः]), @ref[7.1.4] (@deva[अद्भ्यस्तात्]). The accent rule means @deva[द꣡दति] has @deva[उदात्त] on first @deva[अ]. The @deva[झ] → @deva[अत्] substitution: @deva[दद] + @deva[झि] → @deva[दद] + @deva[अति] → @deva[ददति]. Also @ref[6.4.112]: @deva[ददत्]."
        }
    },
    "61006": {
        "en": {
            "simple": "The six roots starting with @deva[जक्ष्] are also called @deva[अभ्यस्त] even though they are not formed by reduplication: @deva[जक्ष्], @deva[जागृ], @deva[दरिद्रा], @deva[चकास्], @deva[शास्], @deva[दीधी] (and @deva[वेवी]).",
            "standard": "These seven roots (@deva[जक्षित्यादि]) receive @deva[अभ्यस्त] designation by convention: @deva[जक्ष्] (eat), @deva[जागृ] (wake), @deva[दरिद्रा] (be poor), @deva[चकास्] (shine), @deva[शास्] (rule), @deva[दीधी] (shine), @deva[वेवी] (go). Pāṇini mentions six; @deva[वेवी] is the seventh. This gives them @deva[उदात्त] on first syllable: @deva[जा꣡ग्रति], @deva[ज꣡क्षति], @deva[द꣡रिद्रति], @deva[चका꣡सति], @deva[शा꣡सति], @deva[दी꣡ध्यते], @deva[वे꣡व्यते].",
            "advanced": "This sūtra extends @deva[अभ्यस्तसंज्ञा] to @deva[जक्षित्यादि] (7 roots in @deva[धातुपाठ]). Effects: (1) @deva[उदात्त] on first syllable before @deva[अनिट् सार्वधातुक अजादि] (@ref[6.1.189]); (2) @deva[झ] → @deva[अत्] (@ref[7.1.4]); (3) no @deva[नुम्]-augment in @deva[शतृ] (@ref[7.1.78]). Present participles: @deva[दीध्यत्] (not @deva[दीध्यन्त्]). The roots: @deva[जक्ष् भक्षणे], @deva[जागृ निद्राक्षये], @deva[दरिद्रा दुर्गतौ], @deva[चकास् दीप्तौ], @deva[शास् अनुशिष्टौ], @deva[दीधीङ् दीप्तौ], @deva[वेवीङ् गतौ]."
        }
    },
    "61007": {
        "en": {
            "simple": "For roots like @deva[तुज्], the short vowel in the @deva[अभ्यास] becomes long (in Vedic). Example: @deva[तुज्] → @deva[तूतुजानः] (urging); @deva[मह्] → @deva[मामहानः]. This lengthening does not occur in ordinary Sanskrit: @deva[तुतोज].",
            "standard": "The @deva[तुजादि] class lengthens the @deva[अभ्यास] vowel, but only in Vedic before specific affixes. No formal list exists—@deva[आदि] means 'and similar'. Vedic examples: @deva[तूतुजानः] (@deva[तुज्] + @deva[कानच्] @ref[3.2.106]), @deva[मामहानः], @deva[दाधार], @deva[मीमाय]. In @deva[लौकिक] Sanskrit: @deva[तुतोज शबलान् हरीन्]—no lengthening.",
            "advanced": "No @deva[गण] list exists for @deva[तुजादि]; @deva[आदि] indicates analogical extension. Vedic forms with lengthened @deva[अभ्यास]: @deva[तूतुजानः] (RV 1.3.6), @deva[मामहानः], @deva[स तूताव]. This lengthening occurs only in @deva[छन्दस्] before specific @deva[प्रत्यय] (like @deva[कानच्]). @deva[लौकिक] forms retain short @deva[अभ्यास]: @deva[तुतोज], @deva[ममाह]. The principle: wherever a long @deva[अभ्यास] vowel appears in Veda, it's valid by this @deva[सूत्र]."
        }
    },
    "61008": {
        "en": {
            "simple": "When @deva[लिट्] (Perfect tense) affixes follow, a root that is not already reduplicated undergoes reduplication. Example: @deva[पच्] + @deva[णल्] → @deva[पपाच] (he cooked); @deva[पठ्] → @deva[पपाठ] (he recited).",
            "standard": "The @deva[लिट्] affixes trigger reduplication of @deva[अनभ्यस्त धातु]. Examples: @deva[पपाच], @deva[पपाठ], @deva[प्रोर्णुनाव] (@deva[ऊर्णु] treated as @deva[नु] per Vārtika). Already-reduplicated roots don't re-reduplicate: @deva[नोनूय] (Intensive of @deva[नु]) → @deva[नोनाव] (not @deva[*नुनोनाव]). Vārtika: In @deva[छन्दस्], reduplication is optional: @deva[याचिषामहे] or @deva[यियाचिषामहे]. Vārtika: @deva[जागृ] optionally reduplicates: @deva[जागार] or @deva[जजागार].",
            "advanced": "This sūtra provides @deva[द्वित्व] for @deva[अनभ्यस्त धातु] before @deva[लिट्]. The word @deva[धातोः] is necessary because by @ref[3.4.117], @deva[लिट्] can be @deva[सार्वधातुक], taking @deva[विकरण]: @deva[श्रु] + @deva[श्नु] → @deva[शृणु]; @deva[शृणु] isn't a @deva[धातु], so no reduplication: @deva[शृन्विरे] (not @deva[*शुशृन्विरे]). The phrase @deva[अनभ्यासस्य] excludes @deva[यङन्त] forms: @deva[नोनूयतेः] @deva[लिट्] = @deva[नोनाव]. Vārtika @deva[छन्दसि लिटो विकल्पः]: @deva[दाति]/ददाति, @deva[धातु]/दधातु. Vārtika @deva[जागृ वा]: @deva[यो जागार]/जजागार."
        }
    },
    "61009": {
        "en": {
            "simple": "When @deva[सन्] (Desiderative) or @deva[यङ्] (Intensive) affixes follow, a root that is not already reduplicated undergoes reduplication. Examples: @deva[पच्] + @deva[सन्] → @deva[पिपक्षति]; @deva[पच्] + @deva[यङ्] → @deva[पापच्यते].",
            "standard": "The genitive @deva[सन् यङोः] means 'of a root ending in @deva[सन्] or @deva[यङ्]'. @deva[सनन्त] examples: @deva[पिपक्षति] (@ref[7.4.79]), @deva[पिपतिषति], @deva[अरिरिषति], @deva[उन्दिदिषति]. @deva[यङन्त] examples: @deva[पापच्यते] (@ref[7.4.83]), @deva[अटाट्यते], @deva[यायज्यते], @deva[अरार्यते]. Already-reduplicated roots don't re-reduplicate: @deva[जुगुप्सते] (from @deva[जुगुप्स्], already @deva[सन्]-formed), @deva[लोलूयिषते] (from Intensive @deva[लोलूय]).",
            "advanced": "The @deva[सन् यङोः] is @deva[षष्ठी द्विवचन] (genitive dual), not @deva[सप्तमी]. Locative would mean 'when @deva[सन्]/यङ् follow', which would exclude @deva[इट्]-augment from reduplication: @deva[अटिटिषति], @deva[अशिशिषति]. With genitive: the entire @deva[सनन्त]/यङन्त @deva[अङ्ग] reduplicates. @deva[यङन्त] forms: @deva[पापच्यते], @deva[अटाट्यते], @deva[यायज्यते], @deva[अरार्यते], @deva[प्रोर्णोनूयते]. @deva[स्वार्थिक सन्] forms (@ref[3.1.5]) like @deva[जुगुप्स्] are already @deva[अभ्यस्त], so no re-reduplication: @deva[जुगुप्सते]."
        }
    },
    "61010": {
        "en": {
            "simple": "When @deva[श्लु] applies (deleting @deva[शप्] for third-class roots), a root that is not already reduplicated undergoes reduplication. Examples: @deva[हु] → @deva[जुहोति] (he offers); @deva[भी] → @deva[बिभेति] (he fears).",
            "standard": "@deva[श्लु] is the @deva[विकरण] marker for @deva[जुहोत्यादि] (third-class roots), causing @deva[शप्]-elision. Reduplication applies to the @deva[अनभ्यस्त] root: @deva[जुहोति] (from @deva[हु]), @deva[बिभेति] (from @deva[भी]), @deva[जिह्रेति] (from @deva[ह्री]). The reduplication follows @ref[6.1.1] or @ref[6.1.2] based on whether the root is consonant-initial or vowel-initial.",
            "advanced": "@deva[श्लु] (@ref[2.4.75]) causes @deva[शप्]-@deva[लुक्] for @deva[जुहोत्यादि गण]. This triggers @deva[द्वित्व] of @deva[अनभ्यस्त धातु]. Examples: @deva[हु] → @deva[जुहु] → @deva[जुहोति] (@deva[गुण]); @deva[भी] → @deva[बिभी] → @deva[बिभेति]; @deva[ह्री] → @deva[जिह्री] → @deva[जिह्रेति]. The @deva[अभ्यास]-modifications (@ref[7.4.59]-@ref[7.4.60]) apply: @deva[ह] → @deva[ज] by @ref[7.4.62], vowel shortening by @ref[7.4.59]."
        }
    },
    "61011": {
        "en": {
            "simple": "When @deva[चङ्] (Aorist of causatives) follows, a root that is not already reduplicated undergoes reduplication. Examples: @deva[पच्] (causative) → @deva[अपीपचत्]; @deva[पठ्] → @deva[अपीपठत्].",
            "standard": "@deva[चङ्] is the Aorist (@deva[लुङ्]) affix for @deva[णिजन्त] (causative) roots. Examples: @deva[अपीपचत्], @deva[अपीपठत्] (@ref[7.4.93], @ref[7.4.94]). Vowel-initial roots: @deva[आटिटत्] (from @deva[अट्]), @deva[आशिशत्] (from @deva[अश्]), @deva[आर्दिदत्] (from @deva[अर्द्]). The order of operations: (1) elide @deva[णि] (@ref[6.4.51]), (2) shorten penultimate (@ref[7.4.4]), (3) reduplicate.",
            "advanced": "This @deva[चङ्] reduplication requires specific operation sequence: (1) @deva[णि]-@deva[लोप] by @ref[6.4.51]; (2) @deva[उपधाह्रस्व] by @ref[7.4.4]; (3) @deva[द्वित्व]. If reduplicated first, the shortened vowel would be @deva[स्थानिवत्] by @ref[1.1.56], blocking @deva[सन्वद्भाव] (@ref[7.4.93]). But @ref[1.1.57] prevents this: @deva[स्थानिवद्भाव] applies only for operations on something @deva[अनादिष्ट] (before the substitute). The @deva[लघु] vowel is @deva[आदिष्ट], so @deva[सन्वद्भाव] proceeds: @deva[अपीपचत्] (like @deva[पिपक्षति])."
        }
    },
    "61012": {
        "en": {
            "simple": "The participles @deva[दाश्वान्], @deva[साह्वान्], and @deva[मीढ्वान्] are irregular—they don't undergo reduplication and don't take the @deva[इट्] augment. Examples: @deva[दाश्वांसो दाशुषः सुतम्] (RV); @deva[साह्वान् बलाहकः].",
            "standard": "Three irregular @deva[क्वसु]-participles (@ref[3.2.107]): @deva[दाश्वान्] (from @deva[दाशृ] 'give')—no @deva[द्वित्व], no @deva[इट्]; @deva[साह्वान्] (from @deva[सह्] 'endure')—penultimate lengthening, no @deva[द्वित्व], no @deva[इट्]; @deva[मीढ्वान्] (from @deva[मिह्] 'sprinkle')—penultimate lengthening, @deva[ह] → @deva[ढ], no @deva[द्वित्व], no @deva[इट्]. Vārtika: @deva[कृ]/क्लिद् + @deva[क] reduplicate: @deva[चक्रम्], @deva[चिक्लिदम्]. Vārtika: @deva[चर्]/चल्/पत्/वद् + @deva[अच्] with @deva[आक्] augment: @deva[चराचरः], @deva[पतापतः].",
            "advanced": "These three @deva[क्वसु]-forms are @deva[निपातन]: @deva[दाश्वान्] (no @deva[द्वित्व]/इट्), @deva[साह्वान्] (@deva[उपधादीर्घ], no @deva[द्वित्व]/इट्), @deva[मीढ्वान्] (@deva[उपधादीर्घ], @deva[ह] → @deva[ढ], no @deva[द्वित्व]/इट्). Plural @deva[दाश्वांसः] also lacks @deva[द्वित्व]. Vārtika @deva[कृञादीनां क]: @deva[चक्रम्], @deva[चिक्लिदम्] (@deva[घञ्]-sense). Vārtika @deva[चरादेः अच्] with @deva[आक्]-augment, non-elision of @deva[अभ्यास]-final consonant: @deva[चराचरः], @deva[चलाचलः], @deva[पतापतः], @deva[वदावदः]. Optionally: @deva[चरः पुरुषः]. Vārtika @deva[हन् + अच्]: @deva[घ]-substitute + @deva[आक्] = @deva[घनाघनः] (@ref[7.3.55])."
        }
    },
    "61013": {
        "en": {
            "simple": "The @deva[य्] of the affix @deva[ष्यङ्] undergoes @deva[संप्रसारण] (becomes @deva[इ]) when @deva[पुत्र] or @deva[पति] follows in a @deva[तत्पुरुष] compound. Example: @deva[कारीषगन्ध्या] + @deva[पुत्र] → @deva[कारीषगन्धीपुत्रः].",
            "standard": "The feminine affix @deva[ष्यङ्] (@ref[4.1.78]) has its @deva[य्] vocalized to @deva[इ] before @deva[पुत्र]/पति in @deva[तत्पुरुष]. The @deva[आ] merges into @deva[इ] (@ref[6.1.108]), then @deva[इ] lengthens (@ref[6.3.139]): @deva[कारीषगन्ध्या] → @deva[कारीषगन्धीपुत्रः], @deva[कारीषगन्धीपतिः]. Not for other feminines: @deva[इभ्यापुत्रः], @deva[क्षत्रियापुत्रः]. Not with other second members: @deva[कारीषगन्ध्याकुलम्]. Not in @deva[बहुव्रीहि]: @deva[कारीषगन्ध्यापतिरयं ग्रामः].",
            "advanced": "This @deva[संप्रसारण] applies to @deva[ष्यङ्] (= @deva[य] + @deva[चाप्] @deva[आ], see @ref[4.1.77]-@ref[4.1.78]) before @deva[पुत्र]/पति in @deva[तत्पुरुष]. The @deva[प्रत्ययग्रहण] maxim normally means 'word ending in that affix', but for @deva[स्त्रीप्रत्यय], the rule @deva[स्त्रीप्रत्यये चानुपसर्जने न] allows non-initial application: @deva[परमकारीषगन्धीपुत्रः]. When @deva[उपसर्जन]: @deva[अतिकारीषगन्ध्यापुत्रः] (no @deva[संप्रसारण]). Applies only with simple @deva[पुत्र]/पति, not compounds: @deva[कारीषगन्ध्यापुत्रकुलम्], @deva[कारीषगन्ध्यापरमपुत्रः]."
        }
    },
    "61014": {
        "en": {
            "simple": "The @deva[य्] of @deva[ष्यङ्] undergoes @deva[संप्रसारण] when @deva[बन्धु] follows in a @deva[बहुव्रीहि] compound. Example: @deva[कारीषगन्ध्याबन्धुरस्य] → @deva[कारीषगन्धीबन्धुः] (one whose relative has that fragrance).",
            "standard": "Unlike @ref[6.1.13] (which requires @deva[तत्पुरुष]), this rule specifically requires @deva[बहुव्रीहि] for @deva[बन्धु]. Example: @deva[कारीषगन्धीबन्धुः], @deva[कौमुदगन्धीबन्धुः]. In @deva[तत्पुरुष] (meaning 'the relative of X'), no @deva[संप्रसारण]: @deva[कारीषगन्ध्याबन्धुः]. Vārtika: Optionally before @deva[मातृ]: @deva[कारीषगन्धीमाता] or @deva[कारीषगन्ध्यामाता].",
            "advanced": "This extends @deva[संप्रसारण] to @deva[बहुव्रीहि] with @deva[बन्धु]. The @deva[तत्पुरुष]/बहुव्रीहि distinction matters: @deva[कारीषगन्ध्याया बन्धुः] (TP) = @deva[कारीषगन्ध्याबन्धुः]; @deva[कारीषगन्ध्या बन्धुर्यस्य] (BV) = @deva[कारीषगन्धीबन्धुः]. Like @ref[6.1.13]: @deva[परमकारीषगन्धीबन्धुः], but @deva[अतिकारीषगन्ध्याबन्धुः] (@deva[उपसर्जन]). Vārtika @deva[मातृ वा]: @deva[कारीषगन्धीमाता]/कारीषगन्ध्यामाता. Not compound-final: @deva[कारीषगन्ध्याबन्धुकुलम्]."
        }
    },
    "61015": {
        "en": {
            "simple": "The roots @deva[वच्], @deva[स्वप्], and the @deva[यजादि] group undergo @deva[संप्रसारण] (semivowel → vowel) before @deva[कित्] affixes. Examples: @deva[वच्] + @deva[क्त] → @deva[उक्त]; @deva[स्वप्] → @deva[सुप्त]; @deva[यज्] → @deva[इष्ट].",
            "standard": "The @deva[ष्यङ्] @deva[अनुवृत्ति] does not continue here. @deva[वच्] includes both @deva[वच् परिभाषणे] (II.54) and the @deva[वच्]-substitute of @deva[ब्रू] (@ref[2.4.53]). @deva[स्वप्] is @deva[ञिष्वप् शये] (II.59). @deva[यजादि] are the last nine roots of @deva[भ्वादि गण]: @deva[यज्], @deva[वप्], @deva[वह्], @deva[वस्], @deva[वे], @deva[व्ये], @deva[ह्वे], @deva[वद्], @deva[श्वि]. Examples: @deva[उक्त], @deva[सुप्त], @deva[इष्ट], @deva[उप्त], @deva[ऊढ], @deva[उषित], @deva[उत], @deva[ऊत], @deva[हूत], @deva[उदित], @deva[शून].",
            "advanced": "@deva[संप्रसारण] occurs for @deva[वच्]/स्वप्/यजादि before @deva[कित्] affixes. @deva[यजादि] (9 roots from @deva[भ्वादि] end): @deva[यज्], @deva[वप्], @deva[वह्], @deva[वस्], @deva[वे], @deva[व्ये], @deva[ह्वे], @deva[वद्], @deva[श्वि]. Derivations: @deva[वच्] → @deva[उच्] → @deva[उक्त] (@deva[च्] → @deva[क्] by @ref[8.2.30]); @deva[स्वप्] → @deva[सुप्] → @deva[सुप्त]; @deva[यज्] → @deva[इज्] → @deva[इष्ट] (@deva[ज्] → @deva[ष्] by @ref[8.2.36]); @deva[वप्] → @deva[उप्त]; @deva[वह्] → @deva[उह्] → @deva[ऊढ] (@deva[ह्] → @deva[ढ्], @deva[दीर्घ] by @ref[6.4.2]). The @deva[कित्] affixes include @deva[क्त], @deva[क्त्वा], @deva[क्तिन्], etc."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.1-6.1.15)")
