#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.31-4.1.45 (Batch 3 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41031": {
        "en": {
            "simple": "In Vedic texts and for names, @deva[ङीप्] is used after the word @deva[रात्रि] (night), except when the nominative plural ending @deva[जस्] follows. Example: @deva[या रात्री सृष्टा], @deva[रात्रीभिः], but nominative plural: @deva[रात्रयः].",
            "standard": "In @deva[छन्दस्] and @deva[संज्ञा] contexts, @deva[रात्रि] takes @deva[ङीप्]—except before @deva[जस्] (nominative plural). Thus: @deva[या रात्री सृष्टा] (Ṛgveda X.127), @deva[रात्रीभिः] (instrumental plural). But nominative plural: @deva[यास्ता रात्रयः] (not @deva[रात्र्यः]). Vārtika (Kātyāyana): The exception extends to all @deva[जस्]-initial endings (accusative @deva[रात्रिं] etc.). Note: @deva[रात्र्यः] (with @deva[ङीप्]) exists—this is @deva[ङीप्]-formed @deva[रात्री] in nominative plural, accent distinguishing from @deva[ङीष्]-formed @deva[रात्री].",
            "advanced": "For @deva[संज्ञाछन्दसोः], @deva[रात्रि] takes @deva[ङीप्] except before @deva[जस्]. Vedic: @deva[या रात्री सृष्टा] (Ṛg. X.127.1), @deva[रात्रीभिः] (Ṛg. I.35.1). Exception: @deva[जस्]-triggered nominative plural → @deva[रात्रयः]. Kātyāyana's vārtika: @deva[जसादिषु च]—exception covers all @deva[जस्]-onwards endings, thus accusative @deva[रात्रिं सहोषित्वा]. The form @deva[रात्र्यः] (in @deva[तिमिरपटलैरवगुण्ठिताश्च रात्र्यः]) uses @deva[ङीप्], not @deva[ङीष्]—accent differs (@deva[ङीष्] = final @deva[उदात्त]; @deva[ङीप्] = initial @deva[उदात्त]). @deva[रात्रि] is formed by @deva[त्रिप्] (Uṇ. IV.67), thus belongs to @deva[बह्वादि] class (@ref[4.1.45]), taking @deva[ङीष्] ordinarily."
        }
    },
    "41032": {
        "en": {
            "simple": "The augment @deva[नुक्] is added to @deva[अन्तर्वत्] (pregnant) and @deva[पतिवत्] (having a husband) before @deva[ङीप्]. Example: @deva[अन्तर्वत्नी] (pregnant woman), @deva[पतिवत्नी] (woman whose husband is living).",
            "standard": "The stems @deva[अन्तर्वत्] and @deva[पतिवत्] receive the augment @deva[नुक्] (= @deva[न्]) before @deva[ङीप्], yielding @deva[अन्तर्वत्नी] and @deva[पतिवत्नी]. The augment is added finally (@ref[1.1.46]). This special formation applies only when meaning 'pregnant' and 'having husband living' respectively. Other uses: @deva[प्रथते त्वया पतिमती पृथिवी] (earth has a lord—regular @deva[पतिमती]). The @deva[म्] → @deva[व्] change in @deva[अन्तर्वत्] is by @ref[8.2.9]; in @deva[पतिवत्] it's irregular. Vedic optionality: @deva[सान्तर्वत्नी] or @deva[सान्तर्वती].",
            "advanced": "This sūtra teaches @deva[नुक्]-augment for @deva[अन्तर्वत्]/पतिवत् before @deva[ङीप्]. Process: @deva[अन्तर्वत्] + @deva[नुक्] + @deva[ङीप्] → @deva[अन्तर्वत्नी]. The @deva[नुक्] augment (= @deva[न्]) is final-positioned by @ref[1.1.46]. Semantic restriction: only for 'pregnant' and 'husband-living' senses. @deva[मतुप्] in @deva[अन्तर्वत्] is irregular—@deva[अन्तर्] (locative sense) doesn't normally take @deva[मतुप्] (@ref[5.2.94] requires @deva[अस्ति] apposition). The @deva[म्] → @deva[व्] is regular for @deva[अन्तर्वत्] (@ref[8.2.9]), but irregular for @deva[पतिवत्]. Vedic: optional @deva[नुक्]—@deva[सान्तर्वत्नी]/सान्तर्वती देवानुपैत्]."
        }
    },
    "41033": {
        "en": {
            "simple": "The substitute @deva[न्] replaces the final @deva[इ] of @deva[पति] before @deva[ङीप्] when the resulting word means 'wife' (one who participates in her husband's rituals). Example: @deva[पति] → @deva[पत्नी] (wife).",
            "standard": "When @deva[पति] denotes a wife in the sense of @deva[यज्ञसंयोग] (one entitled to participate in her husband's sacrifices), the final @deva[इ] is replaced by @deva[न्] before @deva[ङीप्], yielding @deva[पत्नी]. This technical term (@deva[पत्नी]) refers to the legitimate wife who shares sacrificial fruits. But when meaning simply 'master/mistress': @deva[ग्रामस्य पतिरियं ब्राह्मणी] (this Brāhmaṇī is mistress of the village—no @deva[न्]-substitution). The term @deva[पत्नी] extends to Śūdra wives by analogy, as their marriages also involve fire-witness.",
            "advanced": "This sūtra substitutes @deva[न्] for final @deva[इ] of @deva[पति] before @deva[ङीप्] when @deva[यज्ञसंयोग] (ritual participation eligibility) is meant. The term @deva[यज्ञसंयोग] (instrumental tatpuruṣa) = 'connected through sacrifice'—the wife who shares sacrificial merit and participates in rituals. Thus @deva[पत्नि वाचं यच्छ]. Non-@deva[यज्ञसंयोग] sense: @deva[ग्रामस्य पतिरियं ब्राह्मणी]—@deva[पति] unchanged. Extension to Śūdra: though Śūdras cannot perform sacrifice (@deva[अधिकार]-less), @deva[पत्नी] applies by analogy since their marriage includes @deva[अग्निसाक्षिक] ceremony."
        }
    },
    "41034": {
        "en": {
            "simple": "When @deva[पति] is preceded by another word (in a compound), the @deva[न्]-substitution is optional. Example: @deva[वृद्धपतिः] or @deva[वृद्धपत्नी] (woman with an old husband).",
            "standard": "When @deva[पति] follows another word in a compound (and is not @deva[उपसर्जन]), the @deva[इ] → @deva[न्] substitution of @ref[4.1.33] becomes optional. Forms: @deva[वृद्धपतिः] or @deva[वृद्धपत्नी], @deva[स्थूलपतिः] or @deva[स्थूलपत्नी]. This is @deva[अप्राप्तविभाषा]—free from the @deva[यज्ञसंयोग] restriction of @ref[4.1.33]. Condition: @deva[पति] must be preceded by a word (@deva[सपूर्व]). Standalone @deva[पति]: @deva[पतिरियं ब्राह्मणी ग्रामस्य] (she is mistress—no @deva[न्]).",
            "advanced": "This sūtra establishes @deva[विभाषा] for @deva[न्]-substitution when @deva[पति] is compound-final (@deva[सपूर्व]) and not @deva[उपसर्जन]. Forms: @deva[वृद्धपतिः]/वृद्धपत्नी, @deva[स्थूलपतिः]/स्थूलपत्नी. This is @deva[अप्राप्तविभाषा]—optionality without the @deva[यज्ञसंयोग] semantic restriction of @ref[4.1.33]. The @deva[सपूर्वस्य] condition: @deva[पति] must have a preceding element; standalone @deva[पति] → @deva[पतिरियं ब्राह्मणी ग्रामस्य] (no substitution)."
        }
    },
    "41035": {
        "en": {
            "simple": "In certain compounds like @deva[सपत्नि], @deva[एकपत्नि], etc., the @deva[न्]-substitution is always (not optionally) made. Example: @deva[सपत्नी] (co-wife), @deva[एकपत्नी] (devoted to one husband).",
            "standard": "For specific compounds, @deva[न्]-substitution is obligatory (@deva[नित्य]), not optional: @deva[सपत्नी] (co-wife), @deva[एकपत्नी] (woman devoted to one husband). The words compounding with @deva[पत्नी] are: @deva[समान] (equal), @deva[एक] (one), @deva[वीर] (hero), @deva[पिण्ड] (offering-cake), @deva[भ्रातृ] (brother), @deva[पुत्र] (son), @deva[दास] (slave—Vedic only).",
            "advanced": "This sūtra makes @deva[न्]-substitution @deva[नित्य] for the listed compound-initials with @deva[पति]: (1) @deva[समान] → @deva[सपत्नी]; (2) @deva[एक] → @deva[एकपत्नी]; (3) @deva[वीर] → @deva[वीरपत्नी]; (4) @deva[पिण्ड] → @deva[पिण्डपत्नी]; (5) @deva[भ्रातृ] → @deva[भ्रातृपत्नी]; (6) @deva[पुत्र] → @deva[पुत्रपत्नी]; (7) @deva[दास] → @deva[दासपत्नी] (Vedic only). The @deva[नित्य] specification overrides @ref[4.1.34]'s optionality for these specific forms."
        }
    },
    "41036": {
        "en": {
            "simple": "The word @deva[पूतक्रतु] substitutes @deva[ऐ] for its final before @deva[ङीप्]. Example: @deva[पूतक्रतायी] (wife of Pūtakratu).",
            "standard": "Before @deva[ङीप्], the final vowel of @deva[पूतक्रतु] is replaced by @deva[ऐ], yielding @deva[पूतक्रतायी] (wife of Pūtakratu). This and the following two sūtras relate to @ref[4.1.48]—the 'wife of' sense. When not meaning 'wife': @deva[पूतक्रतुः] remains common gender ('one by whom sacrifices are purified').",
            "advanced": "This sūtra provides @deva[ऐ]-substitution for the final of @deva[पूतक्रतु] before @deva[ङीप्]: @deva[पूतक्रतायी]. This connects with @ref[4.1.48] (@deva[पुंयोगादाख्यायाम्])—the 'wife' sense. Semantic restriction: only for @deva[पुंयोग] meaning; otherwise @deva[पूतक्रतुः] (common gender) = 'one by whom क्रतवः (sacrifices) are पूताः (purified)'."
        }
    },
    "41037": {
        "en": {
            "simple": "The words @deva[वृषाकपि], @deva[अग्नि], @deva[कुसति], and @deva[कुसीद] substitute @deva[ऐ] (with @deva[उदात्त] accent) for their final before @deva[ङीप्]. Example: @deva[वृषाकपायी] (wife of Vṛṣākapi), @deva[अग्नायी] (wife of Agni).",
            "standard": "The finals of @deva[वृषाकपि], @deva[अग्नि], @deva[कुसति], @deva[कुसीद] are replaced by @deva[उदात्त]-accented @deva[ऐ] before @deva[ङीप्]. Thus: @deva[वृषाकपायी] (Ṛgveda X.86.13), @deva[अग्नायी] (Ṛgveda I.22.12), @deva[कुसितायी], @deva[कुसीदायी]. @deva[वृषाकपि]/कुसीद have middle-@deva[उदात्त] (Phit. II.19); the feminine shifts to final @deva[उदात्त]. @deva[अग्नि] etc. already have final @deva[उदात्त] (Phit. I.1). This applies only for 'wife' meaning; otherwise: @deva[वृषाकपिः स्त्री].",
            "advanced": "This sūtra provides @deva[उदात्त]-marked @deva[ऐ]-substitution for @deva[वृषाकपि], @deva[अग्नि], @deva[कुसति], @deva[कुसीद] finals. @deva[वृषाकपि]/कुसीद: middle-@deva[उदात्त] by Phit. II.19; feminine @deva[ऐ] becomes final-@deva[उदात्त]. @deva[अग्नि] etc.: already final-@deva[उदात्त] (Phit. I.1); @deva[स्थानिवद्भाव] would preserve this anyway, but explicit @deva[उदात्त] specification confirms. Vedic citations: @deva[वृषाकपायी] (Ṛg. X.86.13), @deva[अग्नायी] (Ṛg. I.22.12). @deva[पुंयोग]-semantic restriction: non-'wife' → @deva[वृषाकपिः स्त्री]. @deva[वृष]-accent: see @ref[6.1.203]."
        }
    },
    "41038": {
        "en": {
            "simple": "The word @deva[मनु] optionally substitutes @deva[औ] for its final (in addition to @deva[ऐ]) before @deva[ङीप्]. Example: @deva[मनायी] or @deva[मनावी] or @deva[मनुः] (wife of Manu).",
            "standard": "The final of @deva[मनु] is optionally replaced by @deva[औ] (in addition to @deva[ऐ]) before @deva[ङीप्], both with @deva[उदात्त] accent. Three forms for 'wife of Manu': @deva[मनायी], @deva[मनावी], or @deva[मनुः] (no feminine affix). @deva[मनु] has initial @deva[उदात्त] (formed by @deva[उ], Uṇ. I.10, which is @deva[नित्]—Uṇ. I.9 treats it as @deva[मित्], and @deva[नित्] affixes give initial accent by @ref[6.1.197]).",
            "advanced": "This sūtra adds optional @deva[औ] (alongside @deva[ऐ]) as substitute for @deva[मनु]-final, both @deva[उदात्त]. The @deva[वा] triggers three options: (1) @deva[ऐ] → @deva[मनायी]; (2) @deva[औ] → @deva[मनावी]; (3) no substitution → @deva[मनुः]. @deva[मनु] accent: formed by @deva[उ] (Uṇ. I.10) from @deva[मन्]; by Uṇ. I.9 this @deva[उ] is @deva[मित्] (treated as @deva[नित्]); @deva[नित्] affixes → initial @deva[उदात्त] by @ref[6.1.197]."
        }
    },
    "41039": {
        "en": {
            "simple": "After color words that end in a @deva[अनुदात्त]-accented vowel and have @deva[त्] as the penultimate letter, @deva[ङीप्] is optionally used with @deva[न्] replacing @deva[त्]. Example: @deva[एत] (variegated) → @deva[एता] or @deva[एनी]; @deva[हरित] (green) → @deva[हरिता] or @deva[हरिणी].",
            "standard": "Color-denoting stems ending in @deva[अनुदात्त]-vowel with penultimate @deva[त्] optionally take @deva[ङीप्] with @deva[त्] → @deva[न्]. Forms: @deva[एता]/एनी (variegated), @deva[श्येता]/श्येनी (black), @deva[हरिता]/हरिणी (green). These words have initial @deva[उदात्त] by @ref[6.1.197] (formed by Uṇādi @deva[तन्]/इतन्) or Phit. II.10. Conditions: (1) @deva[वर्णवचन] (color-denoting)—not @deva[प्रहृता], @deva[प्ररुता]; (2) @deva[अनुदात्तान्त]—not @deva[श्वेता] (final @deva[उदात्त] by Phit. I.21); (3) @deva[तोपधा]—not @deva[ङीष्]-eligible. Vārtikas: @deva[पिशङ्ग] also takes @deva[ङीप्]: @deva[पिशङ्गी]. Prohibition for @deva[असित]/पलित: @deva[असिता], @deva[पलिता]. Vedic @deva[क्नम्]-substitute: @deva[आसिक्नी] (Ṛg. IX.73.29), @deva[पलिक्नी] (Ṛg. V.2.4).",
            "advanced": "This sūtra provides optional @deva[ङीप्] with @deva[त्] → @deva[न्] for @deva[वर्णवचन] (color) stems that are @deva[अनुदात्तान्त] and @deva[तोपध]. Accent: initial @deva[उदात्त] by @ref[6.1.197] (@deva[ञ्/न्]-इत् Uṇādi @deva[तन्]/इतन्) or Phit. II.10 (@deva[वर्णानां तण-/ति-/नि-/त-अन्तानाम्]). Exclusions: (1) non-@deva[वर्ण]: @deva[प्रहृता], @deva[प्ररुता] (initial @deva[उदात्त] by @ref[6.2.49] but not color); (2) non-@deva[अनुदात्तान्त]: @deva[श्वेता] (Phit. I.21 @deva[घृतादीनां च]—final @deva[उदात्त]); (3) non-@deva[अकारान्त]: @deva[शितिर्ब्राह्मणी] (@deva[शिति] formed by @deva[क्तिन्], @deva[अनुदात्तान्त] by @ref[6.1.197], @deva[तोपध]—but ends in @deva[इ]). Vārtikas: @deva[पिशङ्गी]; prohibition for @deva[असित]/पलित; Vedic @deva[क्नम्]: @deva[आसिक्नी], @deva[पलिक्नी]."
        }
    },
    "41040": {
        "en": {
            "simple": "Other color words ending in @deva[अनुदात्त]-accented vowels (those not covered by the previous rule) take @deva[ङीष्]. Example: @deva[सारङ्गी] (spotted), @deva[कल्माषी], @deva[शबली].",
            "standard": "Color-denoting stems ending in @deva[अनुदात्त]-vowel that don't have penultimate @deva[त्] (thus not governed by @ref[4.1.39]) take @deva[ङीष्]. The difference from @deva[ङीप्] is accent: @deva[ङीप्] is @deva[अनुदात्त] (@ref[3.1.4]); @deva[ङीष्] is @deva[उदात्त]. Forms: @deva[सारङ्गी], @deva[कल्माषी], @deva[शबली]. Non-color words: @deva[खट्वा] (bedstead—not color). Non-@deva[अनुदात्तान्त]: @deva[कृष्णा], @deva[कपिला] (take @deva[टाप्]).",
            "advanced": "This sūtra provides @deva[ङीष्] for @deva[वर्णवचन] @deva[अनुदात्तान्त] stems not governed by @ref[4.1.39] (i.e., non-@deva[तोपध]). The @deva[वा] of @ref[4.1.38] doesn't extend here—this is obligatory. @deva[ङीष्] vs. @deva[ङीप्]: accent difference (@deva[ङीप्] = @deva[अनुदात्त] by @ref[3.1.4]; @deva[ङीष्] = @deva[उदात्त]). Examples: @deva[सारङ्गी], @deva[कल्माषी], @deva[शबली]. Exclusions: non-@deva[वर्ण] (@deva[खट्वा]); non-@deva[अनुदात्तान्त] (@deva[कृष्णा], @deva[कपिला])."
        }
    },
    "41041": {
        "en": {
            "simple": "After stems formed by affixes with indicatory @deva[ष्], and after @deva[गौर] class words, @deva[ङीष्] is used. Example: @deva[नर्तकी] (actress, from @deva[ष्वुन्]); @deva[गौरी], @deva[मत्सी], @deva[ब्राह्मणी].",
            "standard": "Two categories take @deva[ङीष्]: (1) stems ending in @deva[षित्] affixes (with indicatory @deva[ष्])—e.g., @deva[नर्तकी] (from @deva[ष्वुन्] @ref[3.1.145]); (2) @deva[गौरादि] class words (161 items). Examples: @deva[गौरी], @deva[मत्सी], @deva[मनुष्यी], @deva[ब्राह्मणी]. The @deva[गौरादि] list includes: @deva[गौर] (though color, made final-@deva[उदात्त] by this rule), @deva[जाति]-words like @deva[मत्स्य]/हय/गवय (with penultimate @deva[य्], which @ref[4.1.63] would exclude), @deva[श्वन्]/तक्षन् (would take @deva[डाप्] by @ref[4.1.13]), and many others with specific reasons for inclusion.",
            "advanced": "This sūtra provides @deva[ङीष्] for: (1) @deva[षित्]-affix-formed stems (e.g., @deva[ष्वुन्] @ref[3.1.145] → @deva[नर्तकी], @deva[खनकी], @deva[रजकी]); (2) @deva[गौरादि] gaṇa (161 words). Notable @deva[गौरादि] members: @deva[गौर] (color-word, now final-@deva[उदात्त]); @deva[मत्स्य]/हय/गवय/मनुष्य] (@deva[जाति] with penultimate @deva[य्]—would be excluded by @ref[4.1.63] without this); @deva[श्वन्]/तक्षन् (would take @deva[डाप्] by @ref[4.1.13]); @deva[एषण] (formed by @deva[ल्युट्]—would take @deva[ङीप्] by @ref[4.1.15]); @deva[गौतम] (also in @ref[4.1.73]); @deva[मातामह]/पितामह (by vārtika @deva[मातरि षिच्च] under @ref[4.2.36], @deva[आमह] is @deva[षित्])—inclusion indicates @deva[षित्]-based @deva[ङीष्] isn't universal (@deva[अनित्यः षिल्लक्षणो ङीष्]), allowing @deva[दंष्ट्रा] etc."
        }
    },
    "41042": {
        "en": {
            "simple": "Certain words take @deva[ङीष्] only in specific meanings. Example: @deva[जानपदी] (profession), @deva[कुण्डी] (bowl), @deva[गोणी] (grain sack), @deva[नीली] (indigo plant or blue animal), etc.",
            "standard": "Eleven words take @deva[ङीष्] in specific senses: (1) @deva[जानपद] → @deva[जानपदी] (profession); otherwise @deva[जानपदी] by @deva[अञ्] + @deva[ङीप्] with different accent; (2) @deva[कुण्ड] → @deva[कुण्डी] (bowl); otherwise @deva[कुण्डा] (name of Durgā); (3) @deva[गोण] → @deva[गोणी] (grain sack); (4) @deva[स्थल] → @deva[स्थली] (natural ground); (5) @deva[भाज] → @deva[भाजी] (cooked rice-gruel); (6) @deva[नाग] → @deva[नागी] (stout woman; but @deva[नागी] for @deva[जाति]); (7) @deva[काल] → @deva[काली] (black); (8) @deva[नील] → @deva[नीली] (indigo plant or blue animal); (9) @deva[कुश] → @deva[कुशी] (plough-share); (10) @deva[कामुक] → @deva[कामुकी] (lustful woman); (11) @deva[कबर] → @deva[कबरी] (hair-braid).",
            "advanced": "This sūtra specifies @deva[ङीष्] for 11 words in particular meanings: @deva[जानपद] (@deva[वृत्ति] 'livelihood'); @deva[कुण्ड] (@deva[भाजन] 'vessel'); @deva[गोण] (@deva[शूर्प] 'grain-sack'); @deva[स्थल] (@deva[स्वभाव] 'natural spot'); @deva[भाज] (@deva[पक्व]/ओदन 'cooked'); @deva[नाग] (@deva[स्थूल] 'stout'—@deva[गुणवचन] sense, not @deva[जाति]); @deva[काल] (@deva[कृष्णवर्ण]); @deva[नील] (@deva[अनाच्छादन]—plant/animal, not cloth); @deva[कुश] (@deva[फाल] 'plough-share'); @deva[कामुक] (@deva[कामिनी] 'lustful'); @deva[कबर] (@deva[वेणी] 'hair-braid'). Outside these senses, standard @deva[टाप्] applies."
        }
    },
    "41043": {
        "en": {
            "simple": "According to Eastern grammarians, the word @deva[शोण] (red/bay) takes @deva[ङीष्] optionally. Example: @deva[शोणी] or @deva[शोणा] @deva[वडवा] (red mare).",
            "standard": "Per Eastern grammarians (@deva[प्राचाम्]), @deva[शोण] (red/bay color) optionally takes @deva[ङीष्]. Thus: @deva[शोणी वडवा] or @deva[शोणा वडवा]. By Phit. II.10, @deva[शोण] has initial @deva[उदात्त]; by @ref[4.1.40] it would always take @deva[ङीष्]. This sūtra restricts (@deva[नियम]) that to Eastern grammarians' view—others allow optionality.",
            "advanced": "This sūtra is a @deva[नियम] (restriction) of @ref[4.1.40] for @deva[शोण]. By Phit. II.10 (@deva[वर्णानां...]), @deva[शोण] has initial @deva[उदात्त], thus qualifying for @deva[ङीष्] by @ref[4.1.40]. This sūtra restricts: @deva[ङीष्] is @deva[प्राचाम्] (Eastern view); others permit @deva[शोणी]/शोणा alternation."
        }
    },
    "41044": {
        "en": {
            "simple": "After quality-denoting stems ending in short @deva[उ], @deva[ङीष्] is optionally used. Example: @deva[पटु] (clever) → @deva[पट्वी] or @deva[पटुः]; @deva[मृदु] (soft) → @deva[मृद्वी] or @deva[मृदुः].",
            "standard": "Stems ending in short @deva[उ] that denote quality (@deva[गुणवचन]) optionally take @deva[ङीष्]. Forms: @deva[पट्वी]/पटुः, @deva[मृद्वी]/मृदुः. Conditions: (1) @deva[उकारान्त]—not @deva[शुचिः] (ends in @deva[इ]); (2) @deva[गुणवचन]—not @deva[आखुः] (mouse—@deva[जाति]). @deva[गुण] definition: quality expressible as adjective (like @deva[शुक्ल]), not merely quality-denoting nouns (like @deva[रूप]). Vārtikas: @deva[वसु] takes @deva[ङीप्] (not @deva[ङीष्]) for initial accent: @deva[वस्वी]. Prohibition for @deva[खरु] and conjunct-penultimate words: @deva[खरुरियं ब्राह्मणी], @deva[पाण्डुरियं ब्राह्मणी].",
            "advanced": "This sūtra provides optional @deva[ङीष्] for @deva[उकारान्त] @deva[गुणवचन] stems. @deva[गुण] definition: @deva[सत्वे निविशते पैति पृथग् जातिषु दृश्यते। आधेयश्चाक्रियाजश्च सोऽसत्त्वप्रकृतिर्गुणः॥]—quality inhering in substance, seen across categories, not substance-natured, non-action-produced. Exclusions: @deva[इकारान्त] (@deva[शुचिः]); non-@deva[गुण] (@deva[आखुः]). Vārtikas: @deva[वसु] takes @deva[ङीप्] for initial @deva[उदात्त]: @deva[वस्वी] (@deva[वसु] formed by @deva[उ], Uṇ. I.10, @deva[नित्] → @deva[आद्युदात्त]). Prohibition: @deva[खरु]; conjunct-penultimate (@deva[पाण्डु]—@deva[ण्ड्] is conjunct)."
        }
    },
    "41045": {
        "en": {
            "simple": "After @deva[बहु] class words (including words ending in @deva[इ] that are body-part names or formed by kṛt affixes other than @deva[क्तिन्]), @deva[ङीष्] is optionally used. Example: @deva[बहुः] or @deva[बह्वी]; @deva[रात्रिः] or @deva[रात्री].",
            "standard": "The @deva[बह्वादि] class includes @deva[बहु] (already @deva[गुणवचन], but specified for subsequent @ref[4.1.46]) and many words ending in @deva[इ]. Two sub-rules: (1) @deva[इकारान्त] body-part names optionally take @deva[ङीष्]: @deva[धमनिः]/धमनी; (2) @deva[इकारान्त] kṛt-affix-formed words (except @deva[क्तिन्]) optionally take @deva[ङीष्]: @deva[रात्रिः]/रात्री. Some say any @deva[इकारान्त] without @deva[क्तिन्]-sense qualifies. This is an @deva[आकृतिगण] (open class). Additional members: @deva[चण्ड], @deva[अराल], @deva[कृपण], etc.",
            "advanced": "The @deva[बह्वादि] gaṇa provides optional @deva[ङीष्] for listed words. Sub-rules from gaṇapāṭha: (1) @deva[इतः प्राप्यङ्गात्]—@deva[इकारान्त] @deva[स्वाङ्ग]-names: @deva[धमनिः]/धमनी; (2) @deva[कृदिकारादक्तिनः]—@deva[इकारान्त] kṛt (not @deva[क्तिन्]): @deva[रात्रि] (from @deva[त्रिप्]) → @deva[रात्रिः]/रात्री; (3) @deva[सर्वतोऽक्तिन्नर्थादित्येके]—some extend to all non-@deva[क्तिन्]-sense @deva[इकारान्त]. @deva[बहु] is @deva[गुणवचन] (would qualify by @ref[4.1.44]), but specified for @ref[4.1.46]'s Vedic @deva[नित्य]. This is @deva[आकृतिगण]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.31-4.1.45 (Batch 3)")
