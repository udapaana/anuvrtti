#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.61-4.1.75 (Batch 5 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41061": {
        "en": {
            "simple": "The feminine affix @deva[ङीष्] is used after stems ending in @deva[वाह्]. Example: @deva[दित्यौही] (she who sustains a demon), @deva[प्रष्ठौही] (young heifer training for the plough).",
            "standard": "After stems ending in @deva[वाह्] (formed from root @deva[वह्] with @deva[ण्वि] per @ref[3.2.64]), @deva[ङीष्] is used. The @deva[ङीष्]-anuvṛtti comes from @ref[4.1.60], not @deva[ङीप्]. @deva[वाह्] never occurs independently—only as compound-final (@deva[तदन्तविधि]). Derivation: @deva[दित्य] + @deva[वाह्] + @deva[ङीष्] → @deva[दित्य] + @deva[ऊठ्] + @deva[आह्] + @deva[ङीष्] (by @ref[6.4.132]: @deva[ऊठ्] is @deva[संप्रसारण] of @deva[वह्] when @deva[भ]) → @deva[दित्य] + @deva[ऊह्] + @deva[ई] (by @ref[6.1.108]) → @deva[दित्यौही] (by @ref[6.1.89]: @deva[वृद्धि] after @deva[ऊठ्]).",
            "advanced": "This sūtra provides @deva[ङीष्] for @deva[वाह्]-final stems. The @deva[ङीष्]-anuvṛtti continues from @ref[4.1.60] (not @deva[ङीप्], though nearer). @deva[वाह्] is @deva[ण्व्यन्त] (@ref[3.2.64]), never independent—@deva[तदन्तविधि] applies. Derivation: @deva[दित्यवाह्] + @deva[ङीष्] → by @ref[6.4.132] (@deva[वाह ऊठ्]—@deva[संप्रसारण] when @deva[भ]-term) → @deva[दित्य] + @deva[ऊह्] + @deva[ई] (by @ref[6.1.108] @deva[संप्रसारणाच्च]) → @deva[दित्यौही] (by @ref[6.1.89] @deva[एत्येधत्यूठ्सु]—@deva[वृद्धि] after @deva[ऊठ्]). Similarly @deva[प्रष्ठौही]."
        }
    },
    "41062": {
        "en": {
            "simple": "The forms @deva[सखी] (female friend) and @deva[अशिश्वी] (childless woman) are irregular @deva[ङीष्] formations in spoken Sanskrit. Example: @deva[सखीयं मे ब्राह्मणी] (this Brāhmaṇī is my friend).",
            "standard": "The words @deva[सखी] and @deva[अशिश्वी] are irregular @deva[ङीष्] forms in @deva[लौकिक] (secular/spoken) Sanskrit. @deva[सखी] = female friend; @deva[अशिश्वी] = @deva[नास्याः शिशुरस्ति] (she who has no child). In Vedic, different forms occur: @deva[सखा सप्तपदी भव] and @deva[अशिशुमिव माम्]. Sometimes Vedic also uses these forms: @deva[आधेनवो धुनयन्तामशिश्वी], @deva[सखी सप्तपदी भव].",
            "advanced": "This sūtra teaches irregular @deva[ङीष्] for @deva[सखी] and @deva[अशिश्वी] in @deva[लोक] (vernacular). @deva[सखी] = friend (@deva[सखीयं मे ब्राह्मणी]); @deva[अशिश्वी] = childless (@deva[नास्याः शिशुरस्तीति]). @deva[छन्दस्] has: @deva[सखा सप्तपदी भव], @deva[अशिशुमिव मामयं शिशुरभिमन्यते]. Rare Vedic occurrences with @deva[ङीष्]: @deva[आधेनवो धुनयन्तामशिश्वी], @deva[सखी सप्तपदी भव]."
        }
    },
    "41063": {
        "en": {
            "simple": "The feminine affix @deva[ङीष्] is used after words denoting species (@deva[जाति]) that are not inherently feminine and don't have @deva[य्] as penultimate. Examples: @deva[कुक्कुटी] (hen), @deva[ब्राह्मणी] (Brāhmaṇa woman), @deva[वृषली] (Śūdra woman).",
            "standard": "After @deva[जातिवाचक] (species-denoting) words that (1) are not inherently feminine and (2) don't have @deva[य्] as penultimate, @deva[ङीष्] applies. Examples: @deva[कुक्कुटी], @deva[सूकरी], @deva[ब्राह्मणी], @deva[वृषली], @deva[नाडायनी], @deva[कटी] (woman of @deva[कठ]-reading Brāhmaṇas), @deva[बह्वृची] (woman of Ṛgveda-reading Brāhmaṇas). Counter-examples: @deva[मुण्डा] (not @deva[जाति]—just 'shaven'); @deva[मक्षिका] (inherently feminine); @deva[क्षत्रिया] (@deva[य्]-penultimate). Vārtika: @deva[गवय], @deva[हय], @deva[मुकय], @deva[मत्स्य], @deva[मनुष्य] take @deva[ङीष्] despite @deva[य्]-penultimate: @deva[गवयी], @deva[हयी], @deva[मनुषी] (@deva[य्] elided by @ref[6.4.150]), @deva[मत्सी] (@deva[य्] elided by vārtika).",
            "advanced": "This sūtra provides @deva[ङीष्] for @deva[जाति]-denoting stems that are @deva[अस्त्रीलिङ्ग] and @deva[अयोपध]. @deva[जाति] definition: @deva[प्रादुर्भावविनाशाभ्यां सत्यस्य युगपद्गुणैः। असर्वलिङ्गां बह्वर्थो तां जातिं कवयो विदुः॥] Exclusions: @deva[मुण्डा] (quality, not @deva[जाति]); @deva[मक्षिका] (inherently feminine); @deva[क्षत्रिया] (@deva[य्]-penultimate). Vārtika: @deva[गवयादि] (@deva[गवय], @deva[हय], @deva[मुकय], @deva[मत्स्य], @deva[मनुष्य]) take @deva[ङीष्] despite @deva[य्]-penultimate—these are also @deva[गौरादि] (@ref[4.1.41]). @deva[य्]-elision by @ref[6.4.150] @deva[हलस्तद्धितस्य]; @deva[मत्स्य] by vārtika @deva[मत्स्यस्य ङ्याम्]."
        }
    },
    "41064": {
        "en": {
            "simple": "The affix @deva[ङीष्] is also used after @deva[जाति] words followed by @deva[पाक] (cooked), @deva[कर्ण] (ear), @deva[पुष्प] (flower), @deva[फल] (fruit), @deva[मूल] (root), or @deva[बाल] (youth). Examples: @deva[ओदनपाकी], @deva[शंखकर्णी], @deva[शंखपुष्पी], @deva[दासीफली], @deva[दर्भमूली], @deva[गोबाली].",
            "standard": "The affix @deva[ङीष्] comes after @deva[जाति]-denoting words (including inherently feminine ones) when followed by @deva[पाक], @deva[कर्ण], @deva[पर्ण], @deva[पुष्प], @deva[फल], @deva[मूल], or @deva[बाल]. This extends @ref[4.1.63] to inherently feminine @deva[जाति] words. Forms: @deva[ओदनपाकी], @deva[शंखकर्णी], @deva[शालपर्णी], @deva[शंखपुष्पी], @deva[दासीफली], @deva[दर्भमूली], @deva[गोबाली]. When @deva[ङीष्] is not intended: compounds ending in @deva[फल], @deva[पुष्प], @deva[मूल] fall under @deva[अजादि] (@ref[4.1.4])—@deva[सम्फला], @deva[भस्त्रफला], @deva[सत्पुष्पा], @deva[अमूला].",
            "advanced": "This sūtra extends @deva[ङीष्] to @deva[जाति]-words (even inherently feminine) when compounded with @deva[पाक]/कर्ण/पर्ण/पुष्प/फल/मूल/बाल. This overcomes the @deva[स्त्रीलिङ्गत्व] restriction of @ref[4.1.63]. Forms: @deva[ओदनपाकी], @deva[शंखकर्णी], @deva[शालपर्णी], @deva[शंखपुष्पी], @deva[दासीफली], @deva[दर्भमूली], @deva[गोबाली]. Alternative: when @deva[ङीष्] not intended, @deva[फल]/पुष्प/मूल-finals take @deva[टाप्] under @deva[अजादि] (@ref[4.1.4]): @deva[सम्फला], @deva[भस्त्रफला], @deva[सत्पुष्पा], @deva[अमूला]."
        }
    },
    "41065": {
        "en": {
            "simple": "The affix @deva[ङीष्] is used after short-@deva[इ]-ending words denoting races of men. Examples: @deva[अवन्ती] (woman of Avanti), @deva[कुन्ती] (woman of Kunti), @deva[दाक्षी], @deva[प्लाक्षी].",
            "standard": "After stems ending in short @deva[इ] that denote @deva[मनुष्यजाति] (human races/classes), @deva[ङीष्] applies. Thus @deva[अवन्ति] → @deva[अवन्ती], @deva[कुन्ति] → @deva[कुन्ती], @deva[दाक्षि] → @deva[दाक्षी], @deva[प्लाक्षि] → @deva[प्लाक्षी]. The feminine of @deva[ञ्यङ्]-formed words (@ref[4.1.171]) has affix elision by @ref[4.1.176]. Why short @deva[इ]? @deva[विट्] (Vaiśya), @deva[दरत्] don't qualify. Why @deva[मनुष्यजाति]? @deva[तित्तिरिः] (partridge) doesn't qualify. @deva[जाति]-repetition here indicates @deva[ङीष्] even with @deva[य्]-penultimate: @deva[औदमयी]. Vārtika: @deva[इञ्]-formed words (@ref[4.2.80]) take @deva[ङीष्] even without denoting @deva[जाति]: @deva[सौतंगमी], @deva[मौनचित्ती].",
            "advanced": "This sūtra provides @deva[ङीष्] for short-@deva[इ]-final @deva[मनुष्यजातिवाचक] stems. @deva[अवन्ती], @deva[कुन्ती], @deva[दाक्षी], @deva[प्लाक्षी]. Derivation: @deva[अवन्ति] + @deva[ञ्यङ्] (@ref[4.1.171]) → @deva[आवन्त्यः]; feminine by @ref[4.1.176] elision. Exclusions: @deva[विट्], @deva[दरत्] (not short-@deva[इ]); @deva[तित्तिरि] (not @deva[मनुष्यजाति]). The @deva[जाति]-repetition (despite possible anuvṛtti from @ref[4.1.63]) signals @deva[ङीष्] even for @deva[य्]-penultimate: @deva[औदमयी]. Vārtika: @deva[इञ्] (@ref[4.2.80])—the quadruply-significant affix—triggers @deva[ङीष्] even without @deva[जाति] sense: @deva[सौतंगमी], @deva[मौनचित्ती]."
        }
    },
    "41066": {
        "en": {
            "simple": "After short-@deva[उ]-ending words denoting races of men (without @deva[य्] penultimate), the feminine affix is @deva[ऊङ्]. Examples: @deva[कुरूः] (Kuru woman), @deva[ब्रह्मबन्धूः], @deva[जीवबन्धूः].",
            "standard": "After @deva[मनुष्यजाति]-denoting stems ending in short @deva[उ] without @deva[य्]-penultimate, the feminine affix is @deva[ऊङ्] (long @deva[ऊ]). Forms: @deva[कुरूः], @deva[ब्रह्मबन्धूः], @deva[जीवबन्धूः]. Derivation: @deva[कुरु] + @deva[ण्य] (@ref[4.1.172]) → @deva[कौरव्यः]; feminine by @ref[4.1.176] elision → @deva[कुरु] + @deva[ऊङ्] → @deva[कुरूः]. The @deva[ङ्] in @deva[ऊङ्] distinguishes it in sūtras like @ref[6.1.175] @deva[नोङ् धात्वोः]. Long @deva[ऊ] debars @deva[कप्] (@ref[5.4.154]) by @deva[विप्रतिषेध]. Why not @deva[य्]-penultimate? @deva[अध्वर्युर्ब्राह्मणी] (not @deva[ऊङ्]). Vārtika: @deva[ऊङ्] also for non-animate @deva[जाति] except @deva[रज्ज्वादि]: @deva[अलाबूः], @deva[कर्कन्धूः]; not @deva[कृकवाकुः] (animate); not @deva[रज्जुः], @deva[हनुः].",
            "advanced": "This sūtra provides @deva[ऊङ्] for @deva[मनुष्यजाति]-denoting short-@deva[उ]-final @deva[अयोपध] stems. @deva[कुरूः], @deva[ब्रह्मबन्धूः], @deva[जीवबन्धूः]. Derivation: @deva[कुरु] + @deva[ण्य] → elision by @ref[4.1.176]. The @deva[ङ्] in @deva[ऊङ्] enables reference in @ref[6.1.175] @deva[नोङ् धात्वोः]. Long @deva[ऊ] debars @deva[कप्] (@ref[5.4.154]) by @deva[विप्रतिषेध]. Exclusion: @deva[अध्वर्यु]-class (@deva[य्]-penultimate) → @deva[अध्वर्युर्ब्राह्मणी]. Vārtika: @deva[अजातौ] (non-animate @deva[जाति]) except @deva[रज्ज्वादि]: @deva[अलाबूः] (gourd), @deva[कर्कन्धूः] (jujube); excluded: @deva[कृकवाकुः] (animate—lizard), @deva[रज्जुः], @deva[हनुः]."
        }
    },
    "41067": {
        "en": {
            "simple": "The affix @deva[ऊङ्] is used for proper names ending in @deva[बाहु]. Examples: @deva[भद्रबाहूः] (Bhadrabāhu—a name), @deva[जालबाहूः].",
            "standard": "When a compound ending in @deva[बाहु] is a proper name (@deva[संज्ञा]), @deva[ऊङ्] is used in the feminine. Thus @deva[भद्रबाहूः], @deva[जालबाहूः]. The long @deva[ऊ] indicates this is a name. When not a name (mere attribute): @deva[वृत्तबाहुः] (woman with rounded arms)—takes regular treatment. In other words, @deva[बाहु]-final compounds take long @deva[ऊ] only when denoting names.",
            "advanced": "This sūtra provides @deva[ऊङ्] for @deva[बाह्वन्त] compounds when @deva[संज्ञा] (proper name). @deva[भद्रबाहूः], @deva[जालबाहूः]. The @deva[संज्ञायाम्] restriction: non-@deva[संज्ञा] (attributive) @deva[वृत्तबाहुः] doesn't take @deva[ऊङ्]. This distinguishes naming from description."
        }
    },
    "41068": {
        "en": {
            "simple": "The affix @deva[ऊङ्] is used after @deva[पङ्गु] (lame). Example: @deva[पङ्गूः] (lame woman).",
            "standard": "The word @deva[पङ्गु] takes @deva[ऊङ्] in the feminine: @deva[पङ्गूः]. Vārtika: @deva[श्वशुर] also takes @deva[ऊङ्] with elision of both @deva[उ] and final @deva[अ]: @deva[श्वशुर] → @deva[श्वश्रूः] (mother-in-law). This debars the @deva[पुंयोग]-@deva[ङीष्] of @ref[4.1.48].",
            "advanced": "This sūtra provides @deva[ऊङ्] for @deva[पङ्गु]: @deva[पङ्गूः]. Vārtika: @deva[श्वशुर] + @deva[ऊङ्] with @deva[उकारलोप] and @deva[अकारलोप] → @deva[श्वश्रूः] (mother-in-law). This debars @deva[पुंयोग]-@deva[ङीष्] (@ref[4.1.48])."
        }
    },
    "41069": {
        "en": {
            "simple": "The affix @deva[ऊङ्] is used after @deva[ऊरु] (thigh) compounds when expressing comparison. Examples: @deva[कदलीस्तम्भोरूः] (thighs like plantain stems), @deva[करभोरूः] (thighs like elephant's trunk).",
            "standard": "When a compound ending in @deva[ऊरु] expresses comparison (@deva[उपमान]), @deva[ऊङ्] applies. Forms: @deva[कदलास्तम्भोरूः] (thighs like plantain stem), @deva[नागनासोरूः] (thighs like elephant's nose), @deva[करभोरूः] (thighs like the tapering ulnar side of hand). When not expressing comparison: @deva[वृत्तोरूः स्त्री] (woman with round thighs)—no special treatment. Poetic irregularity: @deva[विचकरे च करेणुकरोरुभिः] (@deva[करेणुकरोरु]).",
            "advanced": "This sūtra provides @deva[ऊङ्] for @deva[ऊर्वन्त] compounds in @deva[उपमान] (simile) sense. @deva[कदलास्तम्भोरूः], @deva[नागनासोरूः], @deva[करभोरूः]. The @deva[उपमाने] restriction: non-simile @deva[वृत्तोरूः स्त्री] doesn't trigger this rule. Poetic license: @deva[विचकरे च करेणुकरोरुभिः] (elephant-trunk-thighed)."
        }
    },
    "41070": {
        "en": {
            "simple": "In Vedic texts, @deva[ऊङ्] is used after @deva[ऊरु] when preceded by @deva[संहित] (joined), @deva[शफ] (hoof), @deva[लक्षण] (mark), or @deva[वाम] (beautiful). Examples: @deva[संहितोरूः], @deva[शफोरूः], @deva[वामोरूः].",
            "standard": "In @deva[छन्दस्], @deva[ऊङ्] comes after @deva[ऊरु] when preceded by @deva[संहित], @deva[शफ], @deva[लक्षण], or @deva[वाम]—without comparison sense. Forms: @deva[संहितोरूः] (joined thighs—from obesity), @deva[शफोरूः] (thighs put together like cow's hoofs), @deva[लक्षणोरूः] (marked thighs), @deva[वामोरूः] (beautiful thighs). Vārtika: @deva[सहित] and @deva[सह] also: @deva[सहितोरूः], @deva[सहोरूः].",
            "advanced": "In @deva[छन्दस्], @deva[ऊङ्] applies to @deva[ऊर्वन्त] compounds with @deva[संहित]/शफ/लक्षण/वाम—not requiring @deva[उपमान] sense (unlike @ref[4.1.69]). @deva[संहितोरूः], @deva[शफोरूः], @deva[लक्षणोरूः], @deva[वामोरूः]. Vārtika: @deva[सहित] and @deva[सह] also: @deva[सहितोरूः], @deva[सहोरूः]."
        }
    },
    "41071": {
        "en": {
            "simple": "In Vedic texts, @deva[ऊङ्] is used after @deva[कद्रु] (tawny) and @deva[कमण्डलु] (water pot). Examples: @deva[कद्रूः], @deva[कमण्डलूः].",
            "standard": "In @deva[छन्दस्], @deva[कद्रु] and @deva[कमण्डलु] take @deva[ऊङ्]. Vedic citations: @deva[कद्रूश्च वै सुपर्णी च], @deva[मास्म कमण्डलूं शूद्राय दद्यात्]. Outside Vedic: @deva[कद्रुः], @deva[कमण्डलुः] (short @deva[उ]). Vārtika: Also @deva[गुग्गुलु], @deva[मधु], @deva[जतु], @deva[पतयालु] take @deva[ऊङ्]: @deva[गुग्गुलूः], @deva[मधूः], @deva[जतूः], @deva[पतयालूः].",
            "advanced": "In @deva[छन्दस्], @deva[कद्रु] and @deva[कमण्डलु] take @deva[ऊङ्]. Citations: @deva[कद्रूश्च वै सुपर्णी च], @deva[मास्म कमण्डलूं शूद्राय दद्यात्]. Non-Vedic: @deva[कद्रुः], @deva[कमण्डलुः]. Vārtika: @deva[गुग्गुलु]/मधु/जतु/पतयालु also: @deva[गुग्गुलूः], @deva[मधूः], @deva[जतूः], @deva[पतयालूः]."
        }
    },
    "41072": {
        "en": {
            "simple": "The affix @deva[ऊङ्] is used after @deva[कद्रु] and @deva[कमण्डलु] when they are proper names (in non-Vedic usage). Examples: @deva[कद्रूः] (Kadrū—wife of Kaśyapa), @deva[कमण्डलूः].",
            "standard": "In non-Vedic usage, @deva[कद्रु] and @deva[कमण्डलु] take @deva[ऊङ्] when denoting proper names (@deva[संज्ञा]). Thus @deva[कद्रूः] (the wife of Kaśyapa named Kadrū), @deva[कमण्डलूः] (a name). When not a name: @deva[कद्रूः] (tawny color), @deva[कमण्डलुः] (a water-gourd)—these are common nouns.",
            "advanced": "In @deva[लोक] (non-Vedic), @deva[कद्रु]/कमण्डलु take @deva[ऊङ्] only when @deva[संज्ञा]: @deva[कद्रूः] (Kaśyapa's wife), @deva[कमण्डलूः] (name). Non-@deva[संज्ञा]: @deva[कद्रूः] (color), @deva[कमण्डलुः] (pot)—common nouns without @deva[ऊङ्]."
        }
    },
    "41073": {
        "en": {
            "simple": "The feminine affix @deva[ङीन्] is used after @deva[शार्ङ्गरव] class words and words ending in @deva[अञ्]. Examples: @deva[शार्ङ्गरवी], @deva[कापटवी], @deva[बैदी], @deva[और्वी].",
            "standard": "After @deva[शार्ङ्गरवादि]-class words and @deva[अञ्]-ending words (denoting @deva[जाति]), @deva[ङीन्] applies instead of @deva[ङीष्]. Thus @deva[शार्ङ्गरवी], @deva[कापटवी], @deva[बैदी] (female descendant of @deva[बिद]), @deva[और्वी]. The difference between @deva[ङीष्] and @deva[ङीन्] is accent only—forms are identical. @deva[ङीन्]-formed words have @deva[आद्युदात्त] accent by @ref[6.1.197]; @deva[ङीष्]-formed words have accent on the affix. Thus @deva[बैदी] (descendant) vs. @deva[बैदी] (wife of @deva[बैद])—same form, different accent. This rule debars @deva[ङीष्] of @ref[4.1.63] for @deva[जाति]-words but not the @deva[पुंयोग]-@deva[ङीष्] of @ref[4.1.48].",
            "advanced": "This sūtra provides @deva[ङीन्] for @deva[शार्ङ्गरवादि] and @deva[अञन्त] @deva[जातिवाचक] words, debarring @deva[ङीष्]. @deva[शार्ङ्गरवी], @deva[कापटवी]; @deva[बैदी], @deva[और्वी]. Difference: accent only. @deva[ङीन्] → @deva[आद्युदात्त] (@ref[6.1.197] @deva[ञ्नित्यादिर्नित्यम्]); @deva[ङीष्] → affix-accent. Thus @deva[बैदी] (descendant) vs. @deva[बैदी] (wife)—homophonous, different @deva[स्वर]. This debars @deva[जाति]-@deva[ङीष्] (@ref[4.1.63]) but not @deva[पुंयोग]-@deva[ङीष्] (@ref[4.1.48]). @deva[शार्ङ्गरवादि] list includes: @deva[शार्ङ्गरव], @deva[कापटव], @deva[गौग्गुलव], @deva[ब्राह्मण], @deva[बैद], @deva[गौतम] (by @deva[अण्]); @deva[कामण्डलेय], @deva[ब्राह्मकृतेय] (by @deva[ढक्]/ढञ्); @deva[वात्स्यायन], @deva[मौञ्जायन] (by @deva[फक्]); @deva[नृ], @deva[नर] (take @deva[वृद्धि]: @deva[नारी])."
        }
    },
    "41074": {
        "en": {
            "simple": "The feminine affix @deva[चाप्] is used after words formed with @deva[ञ्यङ्] or @deva[ष्यङ्]. Examples: @deva[आम्बष्ठ्या], @deva[कौसल्या], @deva[कारीषगन्ध्या], @deva[बालाक्या].",
            "standard": "After stems formed by @deva[ञ्यङ्] (@ref[4.1.171]) or @deva[ष्यङ्] (@ref[4.1.78]), the feminine affix is @deva[चाप्] (final @deva[आ]). @deva[ञ्यङ्]-examples: @deva[आम्बष्ठ्या], @deva[सौवीर्या], @deva[कौसल्या]. @deva[ष्यङ्]-examples: @deva[कारीषगन्ध्या], @deva[वाराह्या], @deva[बालाक्या]. The @deva[प्] creates the common term @deva[आप्] with @deva[डाप्] and @deva[टाप्]; the @deva[च्] makes final @deva[उदात्त] (@ref[6.1.163]). Vārtika: @deva[चाप्] also after @deva[यञ्]-formed words when @deva[ष्] immediately precedes @deva[यञ्]: @deva[शार्कराक्ष्या], @deva[पौतिमाष्या], @deva[गौकाक्ष्या]. Note: no @deva[संप्रसारण] of @deva[य्] when @deva[पुत्र]/पति is added: @deva[गौकाक्ष्यापुत्रः] (not @deva[गौकाक्षीपुत्रः]).",
            "advanced": "This sūtra provides @deva[चाप्] for @deva[ञ्यङन्त] and @deva[ष्यङन्त] stems. @deva[यङ्] denotes both @deva[ञ्यङ्] (@ref[4.1.171]) and @deva[ष्यङ्] (@ref[4.1.78]) as common element. @deva[ञ्यङ्]-forms: @deva[आम्बष्ठ्या], @deva[सौवीर्या], @deva[कौसल्या]. @deva[ष्यङ्]-forms: @deva[कारीषगन्ध्या], @deva[वाराह्या], @deva[बालाक्या]. The @deva[प्] enables @deva[आप्]-@deva[प्रत्याहार]; @deva[च्] → @deva[अन्तोदात्त] (@ref[6.1.163]). Vārtika: @deva[षकारपूर्व]-@deva[यञ्] also takes @deva[चाप्]: @deva[शार्कराक्ष्या], @deva[पौतिमाष्या], @deva[गौकाक्ष्या] (these would otherwise take @deva[ङीप्] by @ref[4.1.16]). No @deva[संप्रसारण] by @ref[6.1.13]: @deva[गौकाक्ष्यापुत्रः]."
        }
    },
    "41075": {
        "en": {
            "simple": "The affix @deva[चाप्] is also used after @deva[आवट्य]. Example: @deva[आवट्या] (female descendant of Avaṭa).",
            "standard": "The word @deva[अवट] (belonging to @deva[गर्गादि] @ref[4.1.105]) takes @deva[यञ्] → @deva[आवट्य]. In the feminine, @deva[चाप्] applies: @deva[आवट्या]. This would otherwise have taken @deva[ङीप्] by @ref[4.1.16]. According to Eastern Grammarians (@deva[प्राच्य]), the form @deva[आवट्यायनी] is proper (with @deva[फक्] + @deva[ङीन्], per @ref[4.1.17]).",
            "advanced": "@deva[अवट] ∈ @deva[गर्गादि] (@ref[4.1.105]) → @deva[यञ्] → @deva[आवट्य]. This sūtra provides @deva[चाप्]: @deva[आवट्या], debarring @deva[ङीप्] (@ref[4.1.16]). @deva[प्राच्य] (Eastern) view: @deva[आवट्यायनी] proper (with @deva[फक्] + @deva[ङीन्] per @ref[4.1.17])."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.61-4.1.75 (Batch 5)")
