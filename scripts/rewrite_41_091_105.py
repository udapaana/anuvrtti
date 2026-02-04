#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.91-4.1.105 (Batch 7 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41091": {
        "en": {
            "simple": "The @deva[युवन्] affixes @deva[फक्] and @deva[फिञ्] are optionally elided when a vowel-initial @deva[प्राग्दीव्यतीय] affix follows. Example: @deva[गार्गीयाः] or @deva[गार्ग्यायणीयाः] (disciples of Gārgya).",
            "standard": "By @ref[4.1.90], all @deva[युवन्] affixes are elided before vowel-initial @deva[प्राग्दीव्यतीय] affixes. This sūtra makes that elision optional for @deva[फक्] and @deva[फिञ्]. Thus @deva[गार्ग्य] (@deva[गोत्र] by @deva[यञ्] @ref[4.1.105]) → @deva[गार्ग्यायणः] (@deva[युवन्] by @deva[फक्] @ref[4.1.101]) → disciples: @deva[गार्गीयाः] (फक् elided) or @deva[गार्ग्यायणीयाः] (फक् retained). Similarly: @deva[वात्सीयाः] or @deva[वात्स्यायनीयाः]; @deva[यास्कीयाः] or @deva[यास्कायनीयाः] (from @deva[यास्कायनि] @deva[युवन्] by @deva[फिञ्] @ref[4.1.146]).",
            "advanced": "This sūtra makes @deva[युवन्]-@deva[लुक्] optional for @deva[फक्] and @deva[फिञ्] (obligatory for other @deva[युवन्] affixes by @ref[4.1.90]). @deva[गार्ग्यायणः] (युवन्) → disciples: @deva[गार्गीयाः] (elision) or @deva[गार्ग्यायणीयाः] (retention). @deva[फिञ्] example: @deva[यास्क] → @deva[यास्कः] (@ref[4.1.112]) → @deva[यास्कायनि] (युवन् @ref[4.1.146]) → disciples: @deva[यास्कीयाः] or @deva[यास्कायनीयाः]."
        }
    },
    "41092": {
        "en": {
            "simple": "The affix @deva[अण्] (and those following) denote 'the descendant of someone'. Example: @deva[औपगवः] (descendant of Upagu).",
            "standard": "This sūtra specifies the meaning of the affixes from @ref[4.1.83] onwards: they denote @deva[अपत्य] (descendant) when added to a genitive-case word in construction. @deva[उपगोरपत्यम्] (Upagu's offspring) → @deva[उपगु] + @deva[अण्] → @deva[औपगवः]. Examples: @deva[आश्वपतः] (@ref[4.1.84]), @deva[दैत्यः] (@ref[4.1.85]), @deva[औत्सः] (@ref[4.1.86]), @deva[स्त्रैणः], @deva[पौंस्नः] (@ref[4.1.87]). The universal @deva[तस्येदम्] (@ref[4.3.120]) could include @deva[अपत्य] meaning; this sūtra specifically debars affixes like @deva[छ] (@ref[4.3.114]) that would otherwise override @deva[अण्]. Thus @deva[भानोरपत्यम्] = @deva[भानवः] (not @deva[भानवीयः]).",
            "advanced": "This sūtra assigns @deva[अपत्यार्थ] to @deva[अण्]-etc. affixes for genitive-case words in construction (@deva[षष्ठीसमर्थ]). @deva[औपगवः], @deva[आश्वपतः], @deva[दैत्यः], @deva[औत्सः], @deva[स्त्रैणः], @deva[पौंस्नः]. The @deva[तस्येदम्] (@ref[4.3.120]) includes @deva[अपत्य]; this sūtra debars @deva[शैषिक] affixes like @deva[छ] that override @deva[अण्]. The @deva[उत्सर्ग] affixes are treated as @deva[शैषिक] for @deva[बाधन] purposes. Kārikā: @deva[तस्येदमित्यपत्येऽपि बाधनार्थं कृतं भवेत्। उत्सर्गः शेष एवासौ वृद्धान्यस्य प्रयोजनम्॥]"
        }
    },
    "41093": {
        "en": {
            "simple": "The same @deva[गोत्र] affix is used for all descendants from grandson onwards—no new affix for each generation. Example: All descendants of Garga are @deva[गार्ग्यः].",
            "standard": "This @deva[नियम] (restrictive) sūtra declares that one @deva[गोत्र] affix applies to all descendants from grandson onwards—the affix doesn't accumulate for each generation. @deva[गर्ग] → @deva[गार्गिः] (son, by @deva[इञ्] @ref[4.1.95]) → @deva[गार्ग्यः] (grandson, by @deva[यञ्] @ref[4.1.105]). The son of @deva[गार्ग्यः] is also @deva[गार्ग्यः]—no further affix. Alternatively: the base remains constant (@deva[गर्ग]), and @deva[यञ्] is added regardless of how many generations have passed.",
            "advanced": "This @deva[नियमसूत्र] restricts @deva[गोत्र]-affix application: one affix for all descendants from grandson onwards. Two interpretations: (1) @deva[प्रत्ययनियम]—the affix doesn't iterate per generation; (2) @deva[प्रकृतिनियम]—the base remains constant. @deva[गार्ग्यः] (grandson of @deva[गर्ग]) → son = @deva[गार्ग्यः] (not @deva[गार्ग्य] + new affix). The @deva[यञ्] is always added to @deva[गर्ग], not to @deva[गार्ग्य]."
        }
    },
    "41094": {
        "en": {
            "simple": "A @deva[युवन्] affix is added only after a @deva[गोत्र]-formed word. In the feminine, there is no @deva[युवन्] designation. Example: @deva[गार्ग्यायणः] (युवन् descendant of Gārgya).",
            "standard": "This @deva[नियम] declares: (1) @deva[युवन्] affixes attach only to @deva[गोत्र]-formed bases; (2) feminine forms don't receive @deva[युवन्] designation. Thus @deva[गार्ग्य] (@deva[गोत्र]) + @deva[फक्] (@ref[4.1.101]) = @deva[गार्ग्यायणः] (@deva[युवन्]). Similarly @deva[वात्स्यायणः], @deva[दाक्षायणः], @deva[प्लाक्षायणः], @deva[औपगविः], @deva[नाडायनिः]. Why @deva[अस्त्रियाम्]? Feminine @deva[दाक्षी] serves for both @deva[गोत्र] (@deva[दाक्षिः]) and @deva[युवन्] (@deva[दाक्षायणः]). The @deva[युवन्] designation is blocked in feminine—@deva[गोत्र] designation always applies.",
            "advanced": "This @deva[नियमसूत्र] has two elements: (1) @deva[गोत्राद्] @deva[युनि] @deva[प्रत्ययो] @deva[भवति]—@deva[युवन्] affixes attach to @deva[गोत्र]-bases; (2) @deva[ततोऽस्त्रियाम्]—@deva[युवन्]-designation doesn't apply in feminine. @deva[गार्ग्यायणः], @deva[वात्स्यायणः], @deva[औपगविः], @deva[नाडायनिः]. Feminine: @deva[दाक्षी] = both @deva[दाक्षिः] (गोत्र) and @deva[दाक्षायणः] (युवन्). The @deva[अस्त्रियाम्] prohibition: @deva[युवन्]-name is blocked, so feminine is always @deva[गोत्र]. Without this, @deva[गोत्रसंज्ञा] would be superseded by @deva[युवसंज्ञा]."
        }
    },
    "41095": {
        "en": {
            "simple": "The affix @deva[इञ्] comes after stems ending in short @deva[अ] to denote a descendant. Example: @deva[दाक्षिः] (descendant of Dakṣa).",
            "standard": "After stems ending in short @deva[अ] (indicated by @deva[अत्] with @deva[त्] per @ref[1.1.69]-@ref[1.1.70]), @deva[इञ्] (not @deva[अण्]) is used for descendant meaning. @deva[दक्षस्यापत्यम्] = @deva[दाक्षिः]. Exclusion: stems ending in long @deva[आ] like @deva[शुभंयाः], @deva[कीलालपाः]. Note: @deva[दशरथ] can form @deva[दाशरथिः] (by @deva[इञ्]) or @deva[दाशरथः] (by @deva[अण्])—the latter seen in @deva[प्रदीयतां दाशरथाय मैथिली].",
            "advanced": "This sūtra provides @deva[इञ्] for @deva[अदन्त] (@deva[ह्रस्व]-@deva[अ]-final) stems in @deva[अपत्यार्थ], debarring @deva[अण्]. @deva[दाक्षिः]. The @deva[त्] in @deva[अत्] indicates @deva[ह्रस्व] by @ref[1.1.69]-@ref[1.1.70]. Exclusion: @deva[दीर्घान्त] (@deva[शुभंयाः], @deva[कीलालपाः]). Alternative forms: @deva[दाशरथिः] (इञ्) vs. @deva[दाशरथः] (अण्)—@deva[प्रदीयतां दाशरथाय मैथिली]."
        }
    },
    "41096": {
        "en": {
            "simple": "The @deva[बहु] class words take @deva[इञ्] for descendant meaning. Example: @deva[बाहविः] (descendant of Bahu clan).",
            "standard": "After @deva[बह्वादि] words, @deva[इञ्] applies even when @ref[4.1.95] conditions aren't met (non-short-@deva[अ] ending) or another rule would prohibit @deva[इञ्]. This is an @deva[आकृतिगण] (form-recognizable class). Forms: @deva[बाहविः]. List includes: @deva[बाहु], @deva[उपबाहु], @deva[वृषली], @deva[चूडा], @deva[बलाका], @deva[देवशर्मन्], @deva[अग्निशर्मन्], @deva[पञ्चन्], @deva[सप्तन्], @deva[अष्टन्], @deva[शिरस्], @deva[माष], @deva[मरीची], @deva[कृष्ण], @deva[युधिष्ठिर], @deva[अर्जुन], etc. Vārtikas: (1) @deva[बह्वादि] words must be proper names (clan founders)—private @deva[बाहु]'s son = @deva[बाहवः]; (2) relation-words (@deva[श्वशुर]) when proper names take @deva[इञ्] (@deva[श्वाशुरिः]), otherwise @deva[श्वशुर्यः].",
            "advanced": "This sūtra provides @deva[इञ्] for @deva[बह्वादि], an @deva[आकृतिगण]. These words either don't end in short @deva[अ] (excluding @ref[4.1.95]) or would be prohibited by another rule. @deva[बाहविः]. Vārtikas: (1) @deva[संज्ञाश्रयम्]—@deva[बह्वादि] must be proper names: @deva[बाहु] (clan) → @deva[बाहविः]; private person @deva[बाहु] → @deva[बाहवः]; (2) @deva[बन्धुनाम्नि]—relation-words as names: @deva[श्वशुर] (father-in-law) → @deva[श्वशुर्यः]; @deva[श्वशुर] (proper name) → @deva[श्वाशुरिः]. The @deva[च] indicates extended membership: @deva[जाम्बिः], @deva[ऐन्दशर्मिः], @deva[आजधेनविः]."
        }
    },
    "41097": {
        "en": {
            "simple": "After @deva[सुधातृ], @deva[इञ्] is used with @deva[अकङ्] substituting for final @deva[ऋ]. Example: @deva[सौधातकिः] (descendant of Sudhātṛ).",
            "standard": "The word @deva[सुधातृ] takes @deva[इञ्] with @deva[अकङ्] replacing final @deva[ऋ]: @deva[सुधातृ] + @deva[इञ्] → @deva[सुधातक] + @deva[इञ्] → @deva[सौधातकिः]. Vārtika: @deva[अकङ्] also replaces finals of @deva[व्यास], @deva[वरुड], @deva[निषाद], @deva[चण्डाल], @deva[बिम्ब] before patronymic @deva[इञ्]: @deva[वैयासकिः], @deva[वारुडकिः], @deva[नैषादकिः], @deva[चाण्डालकिः], @deva[बैम्बकिः].",
            "advanced": "This sūtra provides @deva[इञ्] after @deva[सुधातृ] with @deva[अकङ्]-@deva[आदेश] for @deva[ऋ]: @deva[सौधातकिः]. Vārtika @deva[व्यासवरुडनिषादचण्डालबिम्बानामकङ् इञि]: @deva[वैयासकिः], @deva[वारुडकिः], @deva[नैषादकिः], @deva[चाण्डालकिः], @deva[बैम्बकिः]."
        }
    },
    "41098": {
        "en": {
            "simple": "The @deva[कुञ्ज] class words take @deva[च्फञ्] for @deva[गोत्र] (remote descendant) meaning. Example: @deva[कौञ्जायन्यः] (gotra descendant of Kuñja).",
            "standard": "After @deva[कुञ्जादि] words, @deva[च्फञ्] (not @deva[इञ्]) is used for @deva[गोत्र] (grandson+) descendants. The @deva[ञ्] distinguishes from @deva[फञ्] (for @ref[5.3.113]); causes @deva[वृद्धि] (@ref[7.2.117]); @deva[फ्] → @deva[आयन्] (@ref[7.1.2]). Then @deva[य] by @ref[5.3.113] completes the word. @deva[कुञ्ज] + @deva[च्फञ्] = @deva[कौञ्ज] + @deva[आयन्] + @deva[अ] = @deva[कौञ्जायन] + @deva[य] (@ref[5.3.113]) = @deva[कौञ्जायन्यः]. Plural: @deva[कौञ्जायनाः] (@deva[ञ्य] elided by @ref[2.5.62] as @deva[तद्राज] @ref[4.1.174]). Similarly @deva[ब्राध्रायन्यः], @deva[ब्राध्रायनाः]. Immediate son: @deva[कौञ्जिः] (@deva[इञ्] @ref[4.1.95]). Accent: singular/dual by @deva[ञ्य]'s @deva[ञ्] (@deva[आद्युदात्त] @ref[6.1.197]); plural by @deva[च्] of @deva[च्फञ्] (@deva[अन्तोदात्त] @ref[6.1.164]).",
            "advanced": "This sūtra provides @deva[च्फञ्] for @deva[कुञ्जादि] in @deva[गोत्रार्थ], debarring @deva[इञ्]. The @deva[ञ्] differentiates from @deva[फञ्]; triggers @deva[वृद्धि] (@ref[7.2.117]); @deva[फ्] → @deva[आयन्] (@ref[7.1.2]). Full word requires @deva[ञ्य] (@ref[5.3.113]): @deva[कौञ्जायन्यः], dual @deva[कौञ्जायन्यौ], plural @deva[कौञ्जायनाः] (@deva[ञ्य]-@deva[लुक्] by @ref[2.5.62] for @deva[तद्राज] @ref[4.1.174]). Accent: singular/dual @deva[आद्युदात्त] by @deva[ञ्य]'s @deva[ञ्] (@ref[6.1.197]); plural @deva[अन्तोदात्त] by @deva[च्] (@ref[6.1.164]). The @deva[गोत्रे] governs through @ref[4.1.112]. List: @deva[कुञ्ज], @deva[ब्रध्र], @deva[शंख], @deva[भस्मन्], @deva[गण], @deva[लोमन्], @deva[शत], @deva[शाक], @deva[शुण्डा], @deva[शुभ], @deva[विपाश्], @deva[स्कन्द], @deva[स्कम्भ], @deva[शकट], @deva[शुम्भा], @deva[शिव], @deva[शुभंयि]."
        }
    },
    "41099": {
        "en": {
            "simple": "The @deva[नड] class words take @deva[फक्] for @deva[गोत्र] meaning. Example: @deva[नाडायनः] (gotra descendant of Naḍa).",
            "standard": "After @deva[नडादि] words, @deva[फक्] is used for @deva[गोत्र] descendants. @deva[नड] + @deva[फक्] = @deva[नाड] + @deva[आयन] (@ref[7.2.118], @ref[7.1.2]) = @deva[नाडायनः]. Similarly @deva[चारायणः]. Son of @deva[नड]: @deva[नाडिः] (@ref[4.1.95]). Special cases: @deva[शलंकु] → @deva[शलंक] before affix → @deva[शालंकायनः]; @deva[अग्निशर्मन्] takes @deva[फक्] only for @deva[वृषगण] @deva[गोत्र] → @deva[आग्निशर्मायणः] = @deva[वार्ष्यगण्यः], otherwise @deva[आग्निशर्मः]; @deva[कृष्ण] takes @deva[फक्] for Brāhmaṇa → @deva[कार्ष्णायनः], otherwise @deva[कार्ष्णिः]; @deva[राण] takes @deva[फक्] for Vāsiṣṭha → @deva[राणायनः] = @deva[वासिष्ठः]; @deva[क्रोष्टु] → @deva[क्रोष्ट] → @deva[क्रौष्टायनः].",
            "advanced": "This sūtra provides @deva[फक्] for @deva[नडादि] in @deva[गोत्रार्थ]. @deva[नाडायनः], @deva[चारायणः]. Special formations: @deva[शलंकु] → @deva[शलंक] (@deva[शालंकायनः]); @deva[शालंकिः] in @deva[पैलादि] (@ref[2.4.59]) has @deva[युवन्]-@deva[लुक्], so @deva[शालंकिः] = father and son; @deva[अग्निशर्मन्] @deva[वृषगणे] → @deva[आग्निशर्मायणः], else @deva[आग्निशर्मः]; @deva[कृष्णरणौ ब्राह्मणवासिष्ठे] → @deva[कार्ष्णायनः]/राणायनः, else @deva[कार्ष्णिः]/राणिः; @deva[क्रोष्टु] → @deva[क्रोष्ट] (@deva[क्रौष्टायनः]). Extensive list: 84 words including @deva[नड], @deva[चर], @deva[बक], @deva[मुंज], @deva[इतिक], @deva[उपक], @deva[एक], @deva[शलंकु], @deva[तिक], @deva[अग्निशर्मन्], @deva[प्राण], @deva[नर], @deva[काश्यप], @deva[अज], @deva[कृष्ण], @deva[लिगु], @deva[चित्र], @deva[कुमार], @deva[क्रोष्टु], @deva[पञ्चाल], @deva[ब्रह्मदत्त], @deva[उदुम्बर], etc."
        }
    },
    "41100": {
        "en": {
            "simple": "The @deva[हरित] class words (a subdivision of @deva[बिदादि]) take @deva[फक्] when they already end in @deva[अञ्]. Example: @deva[हारितायनः] (son/great-grandson of Hārita).",
            "standard": "The @deva[हरितादि] words form a subdivision of @deva[बिदादि] (@ref[4.1.104]). They first take @deva[अञ्] for @deva[गोत्र], then @deva[फक्] for the next generation. @deva[हरित] + @deva[अञ्] = @deva[हारितः] (@deva[गोत्र]); @deva[हारित] + @deva[फक्] = @deva[हारितायनः] (son or great-grandson). This @deva[फक्] functions as a @deva[युवन्] affix, since by @ref[4.1.98] only one @deva[गोत्र] affix can be added, and @deva[हारित] already has @deva[अञ्].",
            "advanced": "This sūtra provides @deva[फक्] for @deva[हरितादि] (a @deva[बिदादि] subset) when already formed with @deva[अञ्] (@ref[4.1.104]). @deva[हरित] + @deva[अञ्] = @deva[हारितः] (गोत्र); @deva[हारित] + @deva[फक्] = @deva[हारितायनः]. This @deva[फक्] has @deva[युवन्] force (not @deva[गोत्र]), since @ref[4.1.98] allows only one @deva[गोत्र] affix, and @deva[हारित] already bears @deva[अञ्]."
        }
    },
    "41101": {
        "en": {
            "simple": "The affix @deva[फक्] comes after stems ending in @deva[यञ्] or @deva[इञ्] to denote a descendant (as @deva[युवन्]). Examples: @deva[गार्ग्यायणः], @deva[दाक्षायणः].",
            "standard": "After @deva[यञन्त] and @deva[इञन्त] stems, @deva[फक्] functions as a @deva[युवन्] affix (since added to @deva[गोत्र]-formed bases). @deva[गर्ग] + @deva[यञ्] (@ref[4.1.105]) = @deva[गार्ग्यः]; @deva[गार्ग्य] + @deva[फक्] = @deva[गार्ग्यायणः]. @deva[दक्ष] + @deva[इञ्] = @deva[दाक्षिः]; @deva[दाक्षि] + @deva[फक्] = @deva[दाक्षायणः]. Restriction: only @deva[गोत्र]-sense @deva[यञ्]/इञ्—not @deva[द्वीप] + @deva[यञ्] (@ref[4.3.10]) → @deva[द्वैप्यः] (proximity to sea, not @deva[गोत्र]); not @deva[सौतंगमि] by @deva[इञ्] (@ref[4.2.80], @deva[चातुरर्थिक]).",
            "advanced": "This sūtra provides @deva[फक्] (with @deva[युवन्] force) after @deva[यञन्त]/इञन्त @deva[गोत्र]-words. @deva[गार्ग्यायणः] (@deva[गर्ग] + @deva[यञ्] → @deva[गार्ग्य] + @deva[फक्]); @deva[दाक्षायणः] (@deva[दक्ष] + @deva[इञ्] → @deva[दाक्षि] + @deva[फक्]). The @deva[यञ्]/इञ् must be @deva[गोत्रार्थ]—exclusions: @deva[द्वैप्यः] (@deva[यञ्] for @deva[समीपार्थ] @ref[4.3.10]); @deva[सौतंगमिः] (@deva[इञ्] for @deva[चातुरर्थिक] @ref[4.2.80])."
        }
    },
    "41102": {
        "en": {
            "simple": "The words @deva[शरद्वत्], @deva[शुनक], @deva[दर्भ] take @deva[फक्] for @deva[गोत्र] meaning when they denote descendants of @deva[भृगु], @deva[वत्स], @deva[अग्रायण] respectively. Examples: @deva[शारद्वतायनः] = @deva[भार्गवः].",
            "standard": "Three words take @deva[फक्] for @deva[गोत्र] with specific clan restrictions: @deva[शरद्वत्] (when meaning @deva[भृगु] descendant) → @deva[शारद्वतायनः] = @deva[भार्गवः], otherwise @deva[शारद्वतः] (by @deva[अञ्]); @deva[शुनक] (when meaning @deva[वत्स] descendant) → @deva[शौनकायनः] = @deva[वात्स्यः], otherwise @deva[शौनकः]; @deva[दर्भ] (when meaning @deva[अग्रायण] descendant) → @deva[दार्भायणः] = @deva[आग्रायणः], otherwise @deva[दार्भिः] (by @deva[इञ्] @ref[4.1.95]). @deva[शरद्वत्] and @deva[शुनक] belong to @deva[बिदादि], so would take @deva[अञ्] by @ref[4.1.104]—this sūtra overrides in specified cases.",
            "advanced": "This sūtra provides @deva[फक्] for @deva[शरद्वत्]/शुनक/दर्भ with clan-specific @deva[गोत्र] restrictions: @deva[शारद्वतायनः] = @deva[भार्गवः] (else @deva[शारद्वतः] by @deva[अञ्]); @deva[शौनकायनः] = @deva[वात्स्यः] (else @deva[शौनकः]); @deva[दार्भायणः] = @deva[आग्रायणः] (else @deva[दार्भिः] by @deva[इञ्]). @deva[शरद्वत्]/शुनक ∈ @deva[बिदादि] would take @deva[अञ्] (@ref[4.1.104])—overridden here."
        }
    },
    "41103": {
        "en": {
            "simple": "The words @deva[द्रोण], @deva[पर्वत], @deva[जीवन्त] optionally take @deva[फक्] for @deva[गोत्र] meaning. Examples: @deva[द्रौणायनः] or @deva[द्रौणिः].",
            "standard": "After @deva[द्रोण], @deva[पर्वत], @deva[जीवन्त], @deva[फक्] is optional (otherwise @deva[इञ्] by @ref[4.1.95]). @deva[द्रौणायनः] or @deva[द्रौणिः], @deva[पार्वतायनः] or @deva[पार्वतिः], @deva[जैवन्तायनः] or @deva[जैवन्तिः]. Note: @deva[फक्] denotes remote (@deva[गोत्र]) offspring, not immediate son. Why then @deva[अश्वत्थामा द्रौणायनः]? The @deva[द्रोण] here refers to an ancient clan founder, not the Mahābhārata Droṇa—by similarity of names, Aśvatthāmā was called @deva[द्रौणायन].",
            "advanced": "This sūtra makes @deva[फक्] optional for @deva[द्रोण]/पर्वत/जीवन्त in @deva[गोत्रार्थ], debarring @deva[इञ्] (@ref[4.1.95]). @deva[द्रौणायनः]/द्रौणिः, @deva[पार्वतायनः]/पार्वतिः, @deva[जैवन्तायनः]/जैवन्तिः. @deva[फक्] = @deva[गोत्र] (remote), not immediate son. @deva[अश्वत्थामा द्रौणायनः]: @deva[द्रोण] = ancient clan-founder (not Mahābhārata Droṇa)—@deva[शब्दसाधर्म्यात्] later applied to Aśvatthāmā."
        }
    },
    "41104": {
        "en": {
            "simple": "The @deva[बिद] class words take @deva[अञ्] for @deva[गोत्र] meaning. But for non-@deva[ऋषि] words in this class, @deva[अञ्] denotes immediate descendant. Examples: @deva[बैदः] (gotra), @deva[पौत्रः] (grandson—immediate).",
            "standard": "After @deva[बिदादि], @deva[अञ्] is used for @deva[गोत्र]. Special provision: for @deva[अनृषि] (non-sage) words in this class, @deva[अञ्] has @deva[आनन्तर्य] (immediate descendant) force. Thus @deva[पुत्र] (son), @deva[दुहितृ] (daughter), @deva[ननान्दृ] (sister-in-law) are common nouns, not @deva[ऋषि] names: @deva[पुत्र] + @deva[अञ्] = @deva[पौत्रः] (grandson—immediate); @deva[दुहितृ] + @deva[अञ्] = @deva[दौहित्रः] (daughter's son). But for @deva[ऋषि] names: @deva[बिद] + @deva[अञ्] = @deva[बैदः] (grandson or lower). The phrase @deva[अनृष्यानन्तर्ये]: @deva[अनृषि] (ablative, case-elided) + @deva[आनन्तर्य] (= @deva[अनन्तर] with @deva[ष्यङ्]). Alternative reading for @deva[काश्यपानाम्] in @deva[इन्द्रभूः सप्तमः काश्यपानाम्]: @deva[काश्यप] from @deva[अण्] (@ref[4.1.114]).",
            "advanced": "This sūtra provides @deva[अञ्] for @deva[बिदादि] in @deva[गोत्रार्थ], with special @deva[आनन्तर्य] (immediate descendant) sense for @deva[अनृषि] members. @deva[ऋषि]-words: @deva[बैदः] (गोत्र); @deva[अनृषि]-words (@deva[पुत्र]/दुहितृ/ननान्दृ): @deva[पौत्रः], @deva[दौहित्रः] (immediate). Parse: @deva[अनृष्यानन्तर्ये] = @deva[अनृषेः] (ablative, @deva[सुब्लोप]) + @deva[आनन्तर्य] (@deva[अनन्तर] + @deva[ष्यङ्] @deva[स्वार्थे]). Alternative: @deva[काश्यप] takes @deva[अञ्] here, @deva[अण्] by @ref[4.1.114]—both valid. @deva[विश्वामित्र कौशिकः] shows @deva[अञ्] despite unbroken @deva[ऋषि]-succession. @deva[बिद] → @deva[बैदि] by @ref[4.1.96] (∈ @deva[बह्वादि] @deva[आकृतिगण]), not @deva[ऋष्यण्] (@ref[4.1.114]). List: @deva[बिद], @deva[उर्व], @deva[कश्यप], @deva[कुशिक], @deva[भरद्वाज], @deva[उपमन्यु], @deva[आपस्तम्ब], @deva[शरद्वत्], @deva[शुनक], @deva[धेनु], @deva[बिन्दु], @deva[विष्णु], @deva[बुद्ध], @deva[रथीतर], @deva[निषाद], @deva[पुत्र], @deva[दुहितृ], @deva[ननान्दृ], @deva[परस्त्री] (→ @deva[परशु]: @deva[पारशवः])."
        }
    },
    "41105": {
        "en": {
            "simple": "The @deva[गर्ग] class words take @deva[यञ्] for @deva[गोत्र] meaning. Example: @deva[गार्ग्यः] (gotra descendant of Garga).",
            "standard": "After @deva[गर्गादि] words, @deva[यञ्] is used for @deva[गोत्र] descendants. @deva[गार्ग्यः], @deva[वात्स्यः], etc. Special cases: @deva[रथकार] in this class = the caste @deva[रथकार] (takes @deva[यञ्] here); when meaning 'chariot-maker' artisan, takes @deva[ण्य] by @ref[4.1.152]. @deva[केशिनी] → @deva[कैशिन्यः] (no @deva[पुंवद्भाव]—@deva[केशिनी] read with feminine affix in list to prevent @deva[टि]-@deva[लोप] → *@deva[कैश्य]). @deva[वेन] takes @deva[यञ्] only in Vedic: @deva[वैन्य] (modern form incorrect). @deva[वामरथ] treated like @deva[कण्वादि] (@deva[गर्गादि] subclass) except for accent. @deva[मनु] ∈ @deva[लोहितादि] subclass: @deva[मानवी प्रजा] (descendant sense by @deva[अण्] @ref[4.1.83]). @deva[जमदग्न्य]/पाराशर्य: exceptions by @deva[गोत्ररूपाध्यारोप] (gotra-form superimposition); regular forms = @deva[जामदग्नः]/पाराशरः by @deva[ऋष्यण्] @ref[4.1.114].",
            "advanced": "This sūtra provides @deva[यञ्] for @deva[गर्गादि] in @deva[गोत्रार्थ]. @deva[गार्ग्यः], @deva[वात्स्यः]. Special: @deva[रथकार] (caste) → @deva[यञ्] here; artisan → @deva[ण्य] (@ref[4.1.152]). @deva[केशिनी] → @deva[कैशिन्यः]: no @deva[पुंवद्भाव] (@ref[6.3.34]) because @deva[केशिनी] listed with @deva[स्त्रीप्रत्यय]—avoids @deva[टि]-@deva[लोप] (@ref[6.4.144]) → *@deva[कैश्य]. @deva[वेनाच्छन्दसि]: @deva[वैन्य] Vedic only. @deva[वामरथ] = @deva[कण्वादिवत्] (disciples by @deva[अण्] @ref[4.2.111]; plural @ref[2.4.64]; feminine @ref[4.1.16]/17; युवन् @ref[4.1.101]; collection @ref[4.3.127]) @deva[स्वरवर्जम्] (accent differs—governed by @deva[ण्य]). Anomalies @deva[जामदग्न्य]/पाराशर्य: @deva[गोत्ररूपाध्यारोप] exceptions; regular = @deva[जामदग्नः]/पाराशरः (@deva[ऋष्यण्] @ref[4.1.114]). List: 116 words including @deva[गर्ग], @deva[वत्स], @deva[संस्कृति], @deva[अज], @deva[व्याघ्रपात्], @deva[अगस्ति], @deva[चमस], @deva[रेभ], @deva[अग्निवेश], @deva[शंख], @deva[धूम], @deva[अवट], @deva[मनस्], @deva[धनंजय], @deva[लोहित], @deva[शंसित], @deva[बभ्र], @deva[मण्डु], @deva[शंकु], @deva[मनु], @deva[तन्तु], @deva[कथक], @deva[ऋक्ष], @deva[तण्ड], @deva[भूत], @deva[कवि], @deva[पुरुकुत्स], @deva[शक्ति], @deva[कण्व], @deva[गोकक्ष], @deva[कुण्डिनी], @deva[यज्ञवल्क], @deva[जमदग्नि], @deva[पराशर], @deva[शर्कराक्ष], @deva[उलूक], @deva[भिषज्], @deva[दल्भ], @deva[देवहू], @deva[पिप्पल], @deva[उक्थ], @deva[संहित], @deva[विष्णुज], etc."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.91-4.1.105 (Batch 7)")
