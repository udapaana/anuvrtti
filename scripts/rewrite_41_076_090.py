#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.76-4.1.90 (Batch 6 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41076": {
        "en": {
            "simple": "The @deva[तद्धित] affixes are taught from here onwards. Example: @deva[युवतिः] (young woman) formed by adding @deva[ति] to @deva[युवन्].",
            "standard": "This is an @deva[अधिकार] (governing) sūtra. All affixes taught from here to the end of the Fifth Book are called @deva[तद्धित]. Words formed with these become @deva[प्रातिपदिक] (nominal stems). The plural @deva[तद्धिताः] (not singular like @deva[प्रत्ययः] @ref[3.1.1]) indicates inclusion of affixes not explicitly taught here, such as: @deva[पृथिव्य ञाञौ] → @deva[पार्थिव]; @deva[अग्रादि पश्चाड् डिमच्] → @deva[अग्रिम], @deva[आदिम], @deva[पश्चिम]. The term @deva[तद्धित] is used in sūtras like @ref[1.2.46] @deva[कृत्तद्धितसमासाश्च].",
            "advanced": "This @deva[अधिकारसूत्र] establishes @deva[तद्धित]-designation for all affixes taught through Book 5. The plural form @deva[तद्धिताः] (unlike singular @deva[प्रत्ययः] in @ref[3.1.1]) signals inclusion of affixes taught elsewhere: @deva[पृथिव्य ञाञौ], @deva[अग्रादि पश्चाड् डिमच्] (yielding @deva[पार्थिव], @deva[अग्रिम], @deva[आदिम], @deva[पश्चिम]). See Vārtika IV.3.23. The @deva[तद्धित]-saṃjñā appears in @ref[1.2.46] @deva[कृत्तद्धितसमासाश्च]."
        }
    },
    "41077": {
        "en": {
            "simple": "The affix @deva[ति] is added to @deva[युवन्] to form the feminine @deva[युवतिः] (young woman). This @deva[ति] is a @deva[तद्धित] affix.",
            "standard": "The affix @deva[ति] comes after @deva[युवन्] and is designated @deva[तद्धित]. Result: @deva[युवतिः] (young maiden). This debars @deva[ङीप्] of @ref[4.1.5]. The word @deva[युवति] ends in @deva[इ] but doesn't take @deva[ङीष्] of @ref[4.1.65] because @deva[ति] itself is a feminine-marking affix (though a @deva[तद्धित]); alternatively, @deva[युवन्] may be considered non-@deva[जाति].",
            "advanced": "This sūtra provides @deva[ति] → @deva[तद्धित] after @deva[युवन्]: @deva[युवतिः]. This debars @deva[ङीप्] (@ref[4.1.5]). No @deva[ङीष्] (@ref[4.1.65]) because: (1) @deva[ति] itself is स्त्रीप्रत्यय though @deva[तद्धित], or (2) @deva[युवन्] is @deva[अजाति]."
        }
    },
    "41078": {
        "en": {
            "simple": "For @deva[गोत्र] words formed by @deva[अण्] or @deva[इञ्] (not @deva[ऋषि]-names, with heavy penultimate), @deva[ष्यङ्] replaces these affixes in the feminine (followed by @deva[चाप्]). Examples: @deva[कारीषगन्ध्या], @deva[वाराह्या], @deva[बालाक्या].",
            "standard": "In forming feminine @deva[गोत्र] words from stems formed by @deva[अण्] or @deva[इञ्], when: (1) the @deva[गोत्र] is non-@deva[ऋषि] (@deva[अनार्षे]), (2) the penultimate syllable is heavy (@deva[गुरूपोत्तम]), then @deva[ष्यङ्] replaces @deva[अण्]/इञ्, followed by @deva[चाप्] (@ref[4.1.74]). The @deva[उत्तम] (superlative) implies at least three syllables—doesn't apply to @deva[दाक्षि] etc. @deva[ष्यङ्] = @deva[य] (the @deva[ष्] and @deva[ङ्] are @deva[इत्]). Forms: @deva[करीषगन्धि] + @deva[अण्] → replace by @deva[ष्य] → @deva[कारीषगन्ध्या]. Similarly @deva[कौमुदगन्ध्या], @deva[वाराह्या], @deva[बालाक्या]. Exclusions: @deva[आर्तभागा] (takes @deva[अञ्], not @deva[अण्]/इञ्); @deva[वासिष्ठी], @deva[वैश्वामित्री] (@deva[ऋषि] names); @deva[औपगवी], @deva[कापटवी] (non-heavy penultimate); @deva[आहिच्छत्री], @deva[कान्यकुब्जी] (non-@deva[गोत्र]).",
            "advanced": "This sūtra provides @deva[ष्यङ्]-substitution for @deva[अण्]/इञ् in feminine @deva[गोत्र] formation when: (1) @deva[अनार्ष] (non-@deva[ऋषि]); (2) @deva[गुरूपोत्तम] (heavy penultimate); (3) @deva[गोत्रे] (patronymic sense). The @deva[उत्तम] (superlative suffix @deva[तमप्]) implies minimum three syllables. @deva[ष्यङ्]: @deva[ष्] differentiates from @deva[ञ्यङ्]; @deva[ङ्] provides common @deva[प्रत्याहार]. @deva[चाप्] follows by @ref[4.1.74]. Derivation: @deva[करीषगन्धि] + @deva[अण्] → @deva[ष्य] substitution → @deva[कारीषगन्ध्या]. Exclusions: @deva[आर्तभागा] (@deva[अञ्], not @deva[अण्]/इञ्); @deva[वासिष्ठी] (@deva[ऋषि]); @deva[औपगवी] (light penultimate); @deva[आहिच्छत्री] (non-@deva[गोत्र] = place-born)."
        }
    },
    "41079": {
        "en": {
            "simple": "For non-principal @deva[गोत्र] words (family names, not famous lineages), @deva[ष्यङ्] replaces @deva[अण्]/इञ् even without heavy penultimate. Examples: @deva[पौणिक्या], @deva[भौणिक्या], @deva[मौखर्या].",
            "standard": "For @deva[गोत्रावयव] (= @deva[अवयवगोत्र] or @deva[अप्रधानगोत्र]—minor lineages not in @deva[प्रवराध्याय], technically called @deva[कुल]), @deva[ष्यङ्] substitutes for @deva[अण्]/इञ् without requiring heavy penultimate. Forms: @deva[पौणिक्या], @deva[भौणिक्या], @deva[मौखर्या]. The word @deva[अवयव] has various senses: 'separate from', 'part of', 'individual members'. If 'immediate descendant' sense is taken: @deva[दैवदत्त्या], @deva[याज्ञदत्त्या] (also explainable via @deva[कौड्यादि] @ref[4.1.80]).",
            "advanced": "This sūtra extends @deva[ष्यङ्]-substitution to @deva[गोत्रावयव] (= @deva[अप्रधानगोत्र], @deva[कुलाख्या]—families like @deva[पुणिक], @deva[भुणिक], @deva[मुखर] not in @deva[प्रवर] lists). The @deva[गुरूपोत्तम] condition doesn't apply here. @deva[गोत्रावयव] = @deva[अवयवगोत्र] (karmadhāraya)—@deva[गोत्र]s not in @deva[प्रवराध्याय], technically @deva[कुल]. Forms: @deva[पौणिक्या], @deva[भौणिक्या], @deva[मौखर्या]. If @deva[अवयव] = 'immediate descendant': @deva[दैवदत्त्या], @deva[याज्ञदत्त्या]."
        }
    },
    "41080": {
        "en": {
            "simple": "The @deva[क्रौडि] class words take @deva[ष्यङ्] in the feminine (even without heavy penultimate or @deva[अण्]/इञ्]). Examples: @deva[क्रौड्या], @deva[लाड्या].",
            "standard": "After @deva[क्रौड्यादि] words, @deva[ष्यङ्] applies in the feminine even when conditions of @ref[4.1.78] aren't met (non-heavy penultimate, not @deva[अण्]/इञ्-formed). Here @deva[ष्यङ्] is an augment, not a substitute. Forms: @deva[क्रौड्या], @deva[लाड्या]. The list includes: @deva[इञ्]-formed (@deva[क्रौडि], @deva[लाडि], @deva[व्याडि], @deva[आपिशालि], @deva[आपक्षिति]); @deva[अण्]-formed (@deva[चौपयत], @deva[चैटयत], @deva[सैकयत], @deva[वैल्वयत]); @deva[सौधातकि] (by @deva[इञ्] with @deva[अकङ्]-substitute @ref[4.1.97]). Special cases: @deva[सूत] takes @deva[ष्यङ्] for grown-up maiden (@deva[सूत्या]), otherwise @deva[टाप्] or @deva[ङीष्]; @deva[भोज] takes @deva[ष्यङ्] for @deva[क्षत्रिय] sense (@deva[भोज्या]).",
            "advanced": "This sūtra provides @deva[ष्यङ्] (as augment, not substitute) for @deva[क्रौड्यादि] regardless of @ref[4.1.78] conditions. @deva[क्रौड्या], @deva[लाड्या]. List: @deva[इञन्त]—@deva[क्रौडि], @deva[लाडि], @deva[व्याडि], @deva[आपिशालि], @deva[आपक्षिति]; @deva[अण्न्त]—@deva[चौपयत], @deva[चैटयत], @deva[सैकयत], @deva[वैल्वयत]; @deva[सौधातकि] (@deva[इञ्] + @deva[अकङ्] @ref[4.1.97]). Conditions: @deva[सूत युवत्याम्]—@deva[सूत्या] for mature maiden; @deva[भोज क्षत्रिये]—@deva[भोज्या] for @deva[क्षत्रिय] woman. @deva[गौकाक्ष्य] (@deva[गर्गादि] @deva[यञन्त]) also included."
        }
    },
    "41081": {
        "en": {
            "simple": "The words @deva[दैवयज्ञि], @deva[शौचिवृक्षि], @deva[सात्यमुग्रि], and @deva[काण्ठेविद्धि] optionally take @deva[ष्यङ्]. Examples: @deva[दैवयज्ञ्या] or @deva[दैवयज्ञी].",
            "standard": "After @deva[दैवयज्ञि], @deva[शौचिवृक्षि], @deva[सात्यमुग्रि], @deva[काण्ठेविद्धि] (all @deva[इञन्त]), @deva[ष्यङ्] is optional. These words end in @deva[इञ्]; the @deva[गोत्र] condition isn't required here. For @deva[गोत्र] descendants, @deva[ष्यङ्] would be compulsory by @ref[4.1.78]; this sūtra makes it optional. If @deva[ष्यङ्] isn't added, @deva[ङीष्] comes by @ref[4.1.65]. Forms: @deva[दैवयज्ञ्या] or @deva[दैवयज्ञी], @deva[शौचिवृक्ष्या] or @deva[शौचिवृक्षी], @deva[सात्यमुग्र्या] or @deva[सात्यमुग्री], @deva[काण्ठेविद्ध्या] or @deva[काण्ठेविद्धी].",
            "advanced": "This sūtra makes @deva[ष्यङ्] optional for @deva[दैवयज्ञि], @deva[शौचिवृक्षि], @deva[सात्यमुग्रि], @deva[काण्ठेविद्धि] (all @deva[इञन्त]). The @deva[गोत्र] anuvṛtti doesn't apply. For @deva[गोत्र]-sense: @ref[4.1.78] would make @deva[ष्यङ्] obligatory; this provides @deva[विभाषा]. For @deva[आनन्तर्य] (immediate descendant): this is a new rule. Non-@deva[ष्यङ्] option: @deva[ङीष्] by @ref[4.1.65]. Forms: @deva[दैवयज्ञ्या]/दैवयज्ञी, @deva[शौचिवृक्ष्या]/शौचिवृक्षी, @deva[सात्यमुग्र्या]/सात्यमुग्री, @deva[काण्ठेविद्ध्या]/काण्ठेविद्धी."
        }
    },
    "41082": {
        "en": {
            "simple": "@deva[तद्धित] affixes are optionally added to the first word (in genitive case) of a phrase expressing the meaning. Example: @deva[उपगोरपत्यम्] = @deva[औपगवः] (descendant of Upagu).",
            "standard": "This @deva[अधिकारसूत्र] has three governing elements extending through @ref[5.3.1]: (1) @deva[समर्थानाम्] 'among words in construction'; (2) @deva[प्रथमात्] 'after the first'; (3) @deva[वा] 'optionally'. The @deva[तद्धित] affix comes after the word in the genitive case that represents the first element of the analytical sentence. Thus @deva[उपगोरपत्यम्] (Upagu's offspring) → @deva[उपगु] + @deva[अण्] → @deva[औपगवः]. The same meaning can be expressed by: (1) sentence (@deva[उपगोरपत्यम्]); (2) compound (@deva[उपग्वपत्यम्]); (3) @deva[तद्धित] (@deva[औपगवः]). The genitive @deva[समर्थानाम्] has @deva[निर्धारण] (specification) force.",
            "advanced": "This @deva[अधिकारसूत्र] governs through @ref[5.3.1] with three elements: @deva[समर्थानाम्] (@deva[निर्धारणषष्ठी]—specifying among connected words), @deva[प्रथमात्] (first word), @deva[वा] (optionality). The affix attaches to the genitive-case word representing @deva[तस्य] in analytical @deva[वाक्य]. @deva[उपगोरपत्यम्] → @deva[औपगवः]. Alternatives: @deva[वाक्य] (@deva[उपगोरपत्यम्]), @deva[समास] (@deva[उपग्वपत्यम्]), @deva[तद्धित] (@deva[औपगवः]). Examples: @deva[तेन रक्तं] @ref[4.2.1] → @deva[काषायम्] (affix on instrumental); @deva[तत्र भवः] @ref[4.3.53] → @deva[स्रौघ्नः] (affix on locative)."
        }
    },
    "41083": {
        "en": {
            "simple": "The affix @deva[अण्] is the default @deva[तद्धित] affix from here until @ref[4.4.2]. Examples: @deva[औपगवः] (descendant of Upagu), @deva[कापटवः] (descendant of Kapaṭu).",
            "standard": "This @deva[अधिकार] establishes @deva[अण्] as the default affix from @ref[4.1.83] to @ref[4.4.2], unless specifically superseded. This may be viewed as @deva[अधिकार], @deva[परिभाषा], or @deva[विधि] sūtra. Applications: @ref[4.1.92] @deva[तस्यापत्यम्] → @deva[औपगवः], @deva[कापटवः]. The affix @deva[अण्] carries various meanings: patronymic (@ref[4.1.92]), 'colored by' (@ref[4.2.1]), sidereal time (@ref[4.1.3]), revealed sāmaveda (@ref[4.1.7]), covered car (@ref[4.2.10]), etc.",
            "advanced": "This @deva[अधिकारसूत्र] establishes @deva[अण्] as default @deva[प्राग्दीव्यतः] affix (@ref[4.1.83]–@ref[4.4.2]). Its status: @deva[अधिकार], @deva[परिभाषा], or @deva[विधि]. The @deva[अण्] has polyvalent application: @deva[अपत्य] (@ref[4.1.92]), @deva[तेन रक्तम्] (@ref[4.2.1]), @deva[नक्षत्रेण युक्तः] (@ref[4.1.3]), @deva[तेन प्रोक्तम्] (@ref[4.1.7]), @deva[तदस्यास्त्यस्मिन्निति] (@ref[4.2.10])."
        }
    },
    "41084": {
        "en": {
            "simple": "The @deva[अश्वपति] class words take @deva[अण्] (instead of @deva[ण्य]) in @deva[प्राग्दीव्यतीय] senses. Example: @deva[आश्वपतम्] (descendant/belonging to Aśvapati).",
            "standard": "This sūtra excepts @deva[अश्वपत्यादि] words from @ref[4.1.85] (which would give @deva[ण्य] after @deva[पति]-ending words), providing @deva[अण्] instead. @deva[अश्वपति] + @deva[अण्] = @deva[आश्वपतम्] (by @ref[7.2.117] @deva[वृद्धि]; @deva[इ] of @deva[पति] elided by @ref[6.4.148]). List includes: @deva[अश्वपति], @deva[ज्ञानपति], @deva[शतपति], @deva[गणपति], @deva[स्थानपति], @deva[यज्ञपति], @deva[राष्ट्रपति], @deva[कुलपति], @deva[गृहपति], @deva[धान्यपति], @deva[धन्वपति], @deva[बन्धुपति], @deva[धर्मपति], @deva[सभापति], @deva[प्राणपति], @deva[क्षेत्रपति].",
            "advanced": "This sūtra provides @deva[अण्] for @deva[अश्वपत्यादि], excepting @ref[4.1.85] (@deva[ण्य] for @deva[पत्यन्त]). Derivation: @deva[अश्वपति] + @deva[अण्] → @deva[आश्वपतम्] (@ref[7.2.117] @deva[तद्धितेष्वचामादेः]; @ref[6.4.148] @deva[यस्येति च] elides @deva[इ]). List: @deva[अश्वपति], @deva[ज्ञानपति], @deva[शतपति], @deva[गणपति], @deva[स्थानपति], @deva[यज्ञपति], @deva[राष्ट्रपति], @deva[कुलपति], @deva[गृहपति], @deva[पशुपति], @deva[धान्यपति], @deva[धन्वपति], @deva[बन्धुपति], @deva[धर्मपति], @deva[सभापति], @deva[प्राणपति], @deva[क्षेत्रपति]."
        }
    },
    "41085": {
        "en": {
            "simple": "The affix @deva[ण्य] comes after @deva[दिति], @deva[अदिति], @deva[आदित्य], and @deva[पति]-ending words. Examples: @deva[दैत्यः] (son of Diti), @deva[आदित्यः], @deva[प्राजापत्यम्].",
            "standard": "In @deva[प्राग्दीव्यतीय] senses, @deva[ण्य] comes after: (1) @deva[दिति] → @deva[दैत्यः]; (2) @deva[अदिति] → @deva[आदित्यः]; (3) @deva[आदित्य] → @deva[आदित्यम्]; (4) @deva[पत्यन्त] words → @deva[प्राजापत्यम्], @deva[सैनापत्यम्]. Vārtikas: @deva[यम] → @deva[याम्यम्]; Vedic @deva[वाच्], @deva[मति], @deva[पितृमत्] → @deva[वाच्यम्], @deva[मात्यम्], @deva[पैतृमत्यम्]; @deva[पृथिवी] → @deva[ञ्] or @deva[अञ्] → @deva[पार्थिव] (feminine @deva[पार्थिवा] by @ref[4.1.4] or @deva[पार्थिवी] by @ref[4.1.15]); @deva[देव] → @deva[यञ्] or @deva[अञ्] → @deva[दैव्यम्] or @deva[दैवम्]; @deva[बहिस्] → @deva[टि]-elision + @deva[यञ्] → @deva[बाह्यः], or @deva[ईकक्] → @deva[बाहीकः]. These affixes debar other @deva[प्राग्दीव्यतीय] affixes by @deva[विप्रतिषेध].",
            "advanced": "This sūtra provides @deva[ण्य] for @deva[दित्यादि] and @deva[पत्यन्त] in @deva[प्राग्दीव्यतीय] senses. @deva[दैत्यः], @deva[आदित्यः], @deva[आदित्यम्], @deva[प्राजापत्यम्], @deva[सैनापत्यम्]. Vārtikas: @deva[यमाच्च] → @deva[याम्यम्]; @deva[छन्दसि वाङ्मतिपितृमद्भ्यः] → @deva[वाच्यम्], @deva[मात्यम्], @deva[पैतृमत्यम्]; @deva[पृथिव्य ञाञौ] → @deva[पार्थिव] (feminine by @ref[4.1.4] vs. @ref[4.1.15]); @deva[देवाद्यञञौ] → @deva[दैव्यम्]/दैवम्; @deva[बहिषस्टेर्लोपो यञ्च] → @deva[बाह्यः]; @deva[ईककश्च] → @deva[बाहीकः]; @deva[छन्दस्यीकञ्] → @deva[बाहीकः] (different accent by @ref[6.1.197]). These debar specialized @deva[प्राग्दीव्यतीय] affixes. Note: @deva[दैतेयः] is from @deva[दिती] (feminine of @deva[दिति] by @deva[ङीष्] @ref[4.1.45]) + @deva[ढक्]."
        }
    },
    "41086": {
        "en": {
            "simple": "The @deva[उत्स] class words take @deva[अञ्] (instead of @deva[अण्]). Examples: @deva[औत्सः], @deva[औदपानः].",
            "standard": "After @deva[उत्सादि] words, @deva[अञ्] comes in @deva[प्राग्दीव्यतीय] senses, debarring both @deva[अण्] (@ref[4.1.83]) and special affixes. @deva[उत्स] + @deva[अञ्] = @deva[औत्सः]; @deva[उदपान] → @deva[औदपानः]. List includes: @deva[उत्स], @deva[उदपान], @deva[विकर], @deva[विनद], @deva[महानद], @deva[महाप्राण], @deva[तरुण], @deva[पृथिवी], @deva[धेनु], @deva[पंक्ति], @deva[जगती], @deva[त्रिष्टुप्], @deva[अनुष्टुभ्], @deva[जनपद], @deva[भरत], @deva[उशीनर], @deva[ग्रीष्म], @deva[कुरु], @deva[पञ्चाल], etc. Special: @deva[ग्रीष्म] takes @deva[अञ्] only when not meaning a metre (@deva[ग्रैष्मः] 'summery', but @deva[ग्रैष्मी त्रिष्टुप्] for metre). @deva[तदन्तविधि] applies: @deva[आधेनवम्] (collection of @deva[अधेनु]s).",
            "advanced": "This sūtra provides @deva[अञ्] for @deva[उत्सादि] in @deva[प्राग्दीव्यतीय] senses, debarring @deva[अण्] and specialized affixes. @deva[औत्सः], @deva[औदपानः]. The @deva[परिभाषा] @deva[ग्रहणवता प्रातिपदिकेन तदन्त विधिप्रतिषेधः] doesn't apply—@deva[तदन्तविधि] operates: @deva[आधेनवम्]. Special conditions: @deva[ग्रीष्म अच्छन्दसि] (non-metre → @deva[ग्रैष्मः]); @deva[उदस्थान देशे] (place → @deva[औदस्थानो देशः], else @deva[औदस्थानिः]); @deva[पृषत् दंशे] (share → @deva[पार्षतोंऽशः], else @deva[अण्])."
        }
    },
    "41087": {
        "en": {
            "simple": "The affixes @deva[नञ्] and @deva[स्नञ्] come after @deva[स्त्री] and @deva[पुंस्] respectively, in @deva[प्राग्दीव्यतीय] senses. Examples: @deva[स्त्रैणम्] (feminine/of women), @deva[पौंस्नम्] (masculine/of men).",
            "standard": "In senses from @ref[4.1.87] to @ref[5.2.1], @deva[नञ्] comes after @deva[स्त्री] → @deva[स्त्रैणम्]; @deva[स्नञ्] after @deva[पुंस्] → @deva[पौंस्नम्]. These derivatives have multiple meanings: @deva[स्त्रीषु भवम्] @ref[4.3.53], @deva[स्त्रीणां समूहः] @ref[4.2.37], @deva[स्त्रीभ्य आगतम्] @ref[4.3.74], @deva[स्त्रीभ्यो हितम्] @ref[5.1.5], etc. Exception: not in @deva[वत्] sense (@ref[5.1.115])—Pāṇini's use of @deva[पुंवत्] (not @deva[पौंस]) in @ref[6.3.34] is @deva[ज्ञापक]. Forms @deva[स्त्रीत्वम्], @deva[स्त्रीता], @deva[पुंस्त्वम्], @deva[पुंस्ता] are exceptions (@ref[5.1.121]). The @deva[स्] of @deva[पुंस्] elides before @deva[स्नञ्] by @ref[8.2.23]—hence two separate affixes are taught.",
            "advanced": "This sūtra provides @deva[नञ्] after @deva[स्त्री] and @deva[स्नञ्] after @deva[पुंस्] for senses through @ref[5.2.1]. @deva[स्त्रैणम्], @deva[पौंस्नम्] have polyvalent meaning: @deva[भवार्थ] @ref[4.3.53], @deva[समूहार्थ] @ref[4.2.37], @deva[आगतार्थ] @ref[4.3.74], @deva[हितार्थ] @ref[5.1.5]. Exclusion: @deva[वत्]-sense (@ref[5.1.115])—@deva[ज्ञापक] from @deva[पुंवत्] in @ref[6.3.34]. @deva[स्त्रीत्वम्], @deva[पुंस्त्वम्] are @deva[निपातन] (@ref[5.1.121]). @deva[पुंस्] loses @deva[स्] before @deva[स्नञ्] by @ref[8.2.23]—motivating two-affix statement."
        }
    },
    "41088": {
        "en": {
            "simple": "When a @deva[द्विगु] compound is formed with @deva[तद्धित] sense, the @deva[तद्धित] affix is elided—except for @deva[गोत्र] (patronymic) sense. Examples: @deva[पञ्चकपालः] (prepared in five cups), @deva[द्विवेदः] (studying two Vedas).",
            "standard": "@deva[प्राग्दीव्यतीय] @deva[तद्धित] affixes are elided (@deva[लुक्]) when @deva[द्विगु] compound conveys the same meaning—except for @deva[गोत्र] sense. @deva[पञ्चसु कपालेषु संस्कृतः] = @deva[पञ्चकपालः] (@deva[संस्कृतं] @ref[4.2.16] affix elided). @deva[द्विवेदः], @deva[त्रिवेदः] (@deva[अधीते] @ref[4.2.59] affix elided). Exception—@deva[गोत्र]: @deva[द्वैदेवदत्तिः] (descendant of two Devadattas)—patronymic affix retained. Why @deva[प्राग्दीव्यतीय]? @deva[द्वैपारायणिकः] (non-@deva[प्राग्दीव्यतीय] not elided). The @deva[द्विगोः] genitive can be @deva[स्थानषष्ठी]: @deva[लुक्] substitutes for the @deva[द्विगु]-triggering affix. Forms like @deva[पाञ्चकपालम्] show @deva[द्विगु] becoming @deva[प्रातिपदिक] for further derivation.",
            "advanced": "@deva[प्राग्दीव्यतीय] affixes undergo @deva[लुक्] when @deva[द्विगु] compound expresses the meaning—@deva[गोत्र] excepted. @deva[पञ्चकपालः] (@deva[संस्कृतम्] @ref[4.2.16] elided), @deva[द्विवेदः] (@deva[अधीते] @ref[4.2.59] elided). @deva[गोत्र] exception: @deva[द्वैदेवदत्तिः], @deva[त्रैदेवदत्तिः]. @deva[प्राग्दीव्यत्] restriction: @deva[द्वैपारायणिकः] (non-@deva[प्राग्दीव्यतीय] retained). The @deva[द्विगोः] is @deva[स्थानषष्ठी]—@deva[लुक्] replaces affix causing @deva[द्विगु]. Post-@deva[द्विगु] derivation: @deva[पञ्चकपालस्येदम्] = @deva[पाञ्चकपालम्]. Anomaly @deva[पञ्चकपाल्यां संस्कृतः] = @deva[पञ्चकपालः]—no @deva[तद्धित] added; valid forms: @deva[वाक्य], @deva[समाहारद्विगु], or @deva[तद्धितार्थद्विगु]. Forms @deva[त्रैविद्यः], @deva[पाञ्चनदः], @deva[षाट्कुलः] analyzed: @deva[त्र्यवयवा विद्या] = @deva[त्रिविद्या] → @deva[त्रैविद्यः]."
        }
    },
    "41089": {
        "en": {
            "simple": "The @deva[लुक्]-elision of @deva[गोत्र] affixes in plural (by @ref[2.4.63] etc.) is blocked when a vowel-initial @deva[प्राग्दीव्यतीय] affix follows. Example: @deva[गार्गीयाः] (disciples of Gārgyāḥ), not @deva[गर्गीयाः].",
            "standard": "When @deva[गोत्र] affixes are @deva[लुक्]-elided in plural by @ref[2.4.63] ff., and a vowel-initial @deva[प्राग्दीव्यतीय] affix follows, the elision is treated as not having occurred for adding that affix. Thus @deva[गार्ग्याः] (plural, @deva[अण्] elided) + @deva[छ] (@ref[4.2.114] disciples) → base treated as @deva[गार्ग्य] → @deva[गार्गीयाः] (not @deva[गर्गीयाः]). Similarly @deva[वात्सीयाः], @deva[आत्रेयीयाः], @deva[खारपायणीयाः]. Conditions: (1) @deva[गोत्र]-affix @deva[लुक्] (not @deva[फल]-denoting @deva[लुक्] like @ref[4.3.163]—hence @deva[कौबलम्], @deva[बादरम्] retained); (2) vowel-initial affix (not @deva[गर्गरूप्यम्], @deva[गर्गमयम्]); (3) @deva[प्राग्दीव्यतीय] sense (not @deva[गर्गीयम्] 'fit for Gargas' @ref[5.1.5]).",
            "advanced": "This sūtra blocks @deva[गोत्र]-@deva[लुक्] (@ref[2.4.63] ff.) when vowel-initial @deva[प्राग्दीव्यतीय] affix follows. @deva[गार्ग्याः] (लुक्) + @deva[छ] → base = @deva[गार्ग्य] → @deva[गार्गीयाः]. Conditions: (1) @deva[गोत्रे]—not @deva[फलादि]-@deva[लुक्] (@ref[4.3.163]): @deva[बदर्याः फलम्] = @deva[बदरम्] → @deva[बादरम्]; (2) @deva[अजादेः]—@deva[गर्गरूप्यम्], @deva[गर्गमयम्] (consonant-initial @deva[रूप्य] @ref[4.3.81], @deva[मयट्] @ref[4.3.82]); (3) @deva[प्राग्दीव्यतीय]—not @deva[हितार्थ] @ref[5.1.5]: @deva[गर्गीयम्] (fit for Gargas). Singular/dual also: @deva[बिद] → @deva[बैदः] (by @deva[अञ्] @ref[4.1.104]); plural @deva[बिदाः] (लुक्); @deva[युवन् of बिदाः] → treat as @deva[बैद] → @deva[इञ्] → elided @ref[2.4.58] → @deva[बैदः], @deva[बैदौ]; plural @deva[बिदाः]."
        }
    },
    "41090": {
        "en": {
            "simple": "The @deva[युवन्] @deva[गोत्र] affix is mentally elided when a vowel-initial @deva[प्राग्दीव्यतीय] affix follows. Example: @deva[फाण्टाहृताः] (disciples of Phāṇṭāhṛtaḥ), not @deva[फाण्टाहृतीयाः].",
            "standard": "When adding a vowel-initial @deva[प्राग्दीव्यतीय] affix after a @deva[युवन्] word, mentally elide the @deva[युवन्] affix first, then determine the appropriate affix for the resulting @deva[गोत्र]-form. @deva[फाण्टाहृतः] (@deva[युवन्] by @deva[ण] @ref[4.1.150] from @deva[फाण्टाहृतिः]) → elide @deva[ण] → @deva[फाण्टाहृति] → add @deva[अण्] @ref[4.2.112] → @deva[फाण्टाहृताः] (disciples). Similarly: @deva[भागवित्तिकः] (@deva[युवन्] of @deva[भागवित्ति]) → disciples = @deva[भागवित्ताः]; @deva[तैकायनीयः] (@deva[युवन्] of @deva[तैकायनि]) → disciples = @deva[तैकायनीयाः]; @deva[कापिञ्जलाद्यः] (@deva[युवन्]) → @deva[कापिञ्जलादाः]. Restrictions: vowel-initial (@deva[फाण्टाहृतरूप्यम्], @deva[फाण्टाहृतमयम्] retain @deva[युवन्]); @deva[प्राग्दीव्यतीय] (@deva[भागवित्तिकाय हितम्] = @deva[भागवित्तीयम्]).",
            "advanced": "This sūtra provides mental @deva[लुक्] of @deva[युवन्] affix when vowel-initial @deva[प्राग्दीव्यतीय] follows. Process: @deva[फाण्टाहृतः] (युवन्) → elide @deva[ण] (@ref[4.1.150]) → @deva[फाण्टाहृति] (गोत्र) → @deva[अण्] (@ref[4.2.112]) → @deva[फाण्टाहृताः]. Derivation chains: @deva[भागवित्त] → @deva[भागवित्ति] (@ref[4.1.25]) → @deva[भागवित्तिकः] (युवन् @ref[4.1.148]) → disciples @deva[भागवित्ताः]; @deva[तिक] → @deva[तैकायनि] (फिञ् @ref[4.1.154]) → @deva[तैकायनीयः] (युवन् @deva[छ] @ref[4.1.149]) → disciples @deva[तैकायनीयाः]; @deva[कपिञ्जलाद] → @deva[कपिञ्जलादि] → @deva[कापिञ्जलाद्य] (युवन् @ref[4.1.151]) → disciples @deva[कापिञ्जलादाः]; @deva[ग्लुचुक] → @deva[ग्लुचुकायनि] (@ref[4.1.160]) → @deva[ग्लौचुकायनः] (युवन् @ref[4.1.83]) → disciples @deva[ग्लौचुकायनाः]. Restrictions: @deva[अजादि] (not @deva[फाण्टाहृतरूप्यम्]); @deva[प्राग्दीव्यतीय] (not @deva[भागवित्तीयम्] 'fit for')."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.76-4.1.90 (Batch 6)")
