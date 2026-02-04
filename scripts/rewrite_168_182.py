#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.2.168-3.2.182 (Batch 10)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "32168": {
        "en": {
            "simple": "The affix @deva[उ] comes after desiderative (@deva[सन्]) roots, and after @deva[आशंस्] (to wish) and @deva[भिक्ष्] (to beg), to denote habitual tendency. The @deva[सन्] here refers to the desiderative affix, not the verb @deva[सन्]. Examples: @deva[चिकीर्षुः] (desirous of doing), @deva[जिहीर्षुः] (desirous of taking), @deva[आशंसुः] (desirous), @deva[भिक्षुः] (beggar, mendicant). Note: @deva[आशंस्] is @deva[आ] + @deva[शसि] (to desire), not @deva[शंसि] (to praise).",
            "standard": "The affix @deva[उ] applies after @deva[सनन्त] (desiderative) stems, and after @deva[आशंस्] and @deva[भिक्ष्], in @deva[तच्छीलादि] sense. The @deva[सन्] refers to the desiderative affix (not the verb @deva[सन्], which never takes this affix). Examples: @deva[चिकीर्षुः] (wishing to do), @deva[जिहीर्षुः] (wishing to take), @deva[आशंसुः] (hopeful), @deva[भिक्षुः] (mendicant). The verb @deva[आशंस्] = @deva[आ] + @deva[शसि] 'to desire', distinct from @deva[शंसि] 'to praise'.",
            "advanced": "@deva[उ] after @deva[सनन्त] stems, @deva[आशंस्], and @deva[भिक्ष्] in @deva[तच्छीलादि] sense. The term @deva[सन्] denotes the desiderative affix, not the homonymous verb (which never combines with this @deva[उ]). Formations: @deva[चिकीर्षुः] (desirous of doing - from @deva[कृ] + @deva[सन्] + @deva[उ]), @deva[जिहीर्षुः] (desirous of taking - from @deva[हृ] + @deva[सन्] + @deva[उ]), @deva[आशंसुः] (hopeful), @deva[भिक्षुः] (monk, beggar). Note: @deva[आशंस्] = @deva[आ] + @deva[शसि] (to desire), not @deva[शंसि] (to praise)."
        }
    },
    "32169": {
        "en": {
            "simple": "The words @deva[विन्दु] and @deva[इच्छु] are formed irregularly with the affix @deva[उ]. For @deva[विन्दु]: @deva[विद्] (to know) + augment @deva[नुम्] + @deva[उ] = @deva[विन्दुः] (intelligent). For @deva[इच्छु]: @deva[इष्] (to wish) with @deva[ष] replaced by @deva[छ] = @deva[इच्छुः] (desirous).",
            "standard": "This sūtra lists @deva[निपातन] (irregular formations) with @deva[उ]. @deva[विन्दु]: @deva[विद्] + @deva[नुम्] augment + @deva[उ] = @deva[विन्दुः] (knowledgeable, @deva[वेदनशीलः]) by @ref[1.1.47]. @deva[इच्छु]: @deva[इष्] with @deva[ष] → @deva[छ] substitution = @deva[इच्छुः] (desirous, @deva[एषणशीलः]).",
            "advanced": "@deva[निपातन] for @deva[विन्दु] and @deva[इच्छु] with @deva[उ] in @deva[तच्छीलादि] sense. @deva[विन्दु]: @deva[विद्] + @deva[नुम्] (by @ref[1.1.47]) + @deva[उ] = @deva[विन्दुः] (= @deva[वेदनशीलः], habitually knowing). @deva[इच्छु]: @deva[इष्] with @deva[ष] → @deva[छ] substitution + @deva[उ] = @deva[इच्छुः] (= @deva[एषणशीलः], habitually desiring). Both are listed exceptions to regular formation rules."
        }
    },
    "32170": {
        "en": {
            "simple": "In the Vedas (@deva[छन्दस्]), the affix @deva[उ] comes after denominative (@deva[क्यन्त]) roots to denote habitual action. The term @deva[क्य] covers three affixes: @deva[क्यच्], @deva[क्यङ्], and @deva[क्यष्]. Examples: @deva[मित्रयुः], @deva[संस्वेदयुः], @deva[सुम्नयुः] (Ṛg Veda I.3.4). In classical Sanskrit, @deva[तृन्] is used instead, yielding @deva[मित्रीयिता].",
            "standard": "In @deva[छन्दस्] (Vedic literature), @deva[उ] applies after @deva[क्यन्त] (denominative) stems in @deva[तच्छीलादि] sense. The term @deva[क्य] encompasses @deva[क्यच्], @deva[क्यङ्], and @deva[क्यष्] (see @ref[3.1.8] etc.). Vedic examples: @deva[मित्रयुः], @deva[संस्वेदयुः], @deva[सुम्नयुः] (RV I.3.4). In @deva[लौकिक] Sanskrit, @deva[तृन्] applies instead (e.g., @deva[मित्रीयिता]). Note: @ref[7.4.33] prescribes long @deva[ई] for final @deva[अ] before @deva[क्यच्], but @ref[7.4.35] suspends this in Vedic.",
            "advanced": "In @deva[छन्दस्], @deva[उ] after @deva[क्यन्त] (denominative) stems in @deva[तच्छीलादि] sense. @deva[क्य] = @deva[क्यच्], @deva[क्यङ्], @deva[क्यष्] (see @ref[3.1.8], @ref[3.1.11], etc.). Vedic examples: @deva[मित्रयुः], @deva[संस्वेदयुः], @deva[सुम्नयुः] (RV I.3.4). In classical Sanskrit, @deva[तृन्] is used: @deva[मित्रीयिता]. Why no long @deva[ई] in @deva[मित्रयुः]? Rule @ref[7.4.33] (long @deva[ई] for @deva[अ] before @deva[क्यच्]) is suspended in @deva[छन्दस्] by @ref[7.4.35]."
        }
    },
    "32171": {
        "en": {
            "simple": "In the Vedas, the affixes @deva[कि] and @deva[किन्] come after verbs ending in long @deva[आ] or @deva[ऋ/ॠ], and after @deva[गम्] (to go), @deva[हन्] (to kill), @deva[जन्] (to be born). These affixes operate like @deva[लिट्] (perfect tense), causing reduplication. Examples: @deva[पपिः] (drinking), @deva[जग्मिः] (going, wind), @deva[जघ्निः] (killing). The @deva[क्] is @deva[इत्] to prevent @deva[गुण] of @deva[ॠ].",
            "standard": "In @deva[छन्दस्], @deva[कि] and @deva[किन्] apply after verbs ending in @deva[आ] or @deva[ऋ/ॠ], plus @deva[गम्], @deva[हन्], @deva[जन्], in @deva[तच्छीलादि] sense. They cause @deva[लिट्]-like reduplication. Examples: @deva[पा] + @deva[कि] = @deva[पपिः] (drinking soma); @deva[गम्] + @deva[किन्] = @deva[जग्मिः] (wind - always moving); @deva[हन्] + @deva[किन्] = @deva[जघ्निः] (slayer). The @deva[क्] is @deva[इत्] to prevent @deva[गुण] of @deva[ॠ] that @ref[7.4.11] would otherwise cause.\n\nVārtika: @deva[कि]/\u200b@deva[किन्] are universal in Vedas (not limited to listed roots). In secular Sanskrit, they apply after @deva[धाञ्], @deva[कृञ्], @deva[सृ], @deva[जनि], @deva[गमि], @deva[नमि]: @deva[दधिः], @deva[चक्रिः], @deva[जग्मिः], @deva[नेमिः].",
            "advanced": "In @deva[छन्दस्], @deva[कि] and @deva[किन्] after @deva[आकारान्त] and @deva[ऋकारान्त] roots, plus @deva[गम्], @deva[हन्], @deva[जन्], in @deva[तच्छीलादि] sense. They behave like @deva[लिट्], triggering reduplication. The @deva[द्] in @deva[आद्ऋतः] (not @deva[त्]) ensures both short and long @deva[ऋ] are included (cf. @ref[1.1.70] @deva[तपर]).\n\nExamples: @deva[पपिः सोमम्] (RV); @deva[ददिर्गाः] (RV VI.23.4); @deva[जग्मिः] (wind); @deva[जघ्निवृत्रम्] (RV IX.61.2). The @deva[क्] is @deva[इत्] to block @deva[गुण] by @ref[7.4.11] (otherwise @deva[ॠ] → @deva[अर्] before @deva[लिट्]-like affixes).\n\n@note[type=vārtika]: @deva[कि]/\u200b@deva[किन्] universal in @deva[छन्दस्]: @deva[सेदिः] (YV XII.105), @deva[नेमिः] (RV II.5.3). In @deva[लौकिक]: after @deva[धाञ्], @deva[कृञ्], @deva[सृ], @deva[जनि], @deva[गमि], @deva[नमि]. Also after @deva[यङन्त] of @deva[सह्], @deva[वह्], @deva[चल्], @deva[यत्]: @deva[सासहिः], @deva[वावहिः], @deva[चाचलिः], @deva[यायतिः] (cf. @ref[7.4.83])."
        }
    },
    "32172": {
        "en": {
            "simple": "The affix @deva[नजिङ्] comes after @deva[स्वप्] (to sleep) and @deva[तृष्] (to be thirsty) to denote habitual action. Examples: @deva[स्वप्नज्] (nominative @deva[स्वप्नक्]) meaning 'sleepy, drowsy'; @deva[तृष्णज्] (nominative @deva[तृष्णक्]) meaning 'thirsty, covetous'.\n\nVārtika: @deva[नजिङ्] also comes after @deva[धृष्] (to be bold) → @deva[धृष्णज्] (nominative @deva[धृष्णक्]) meaning 'bold, impudent'.",
            "standard": "The affix @deva[नजिङ्] applies after @deva[स्वप्] and @deva[तृष्] in @deva[तच्छीलादि] sense. Formations: @deva[स्वप्] + @deva[नजिङ्] = @deva[स्वप्नज्], nom. sg. @deva[स्वप्नक्] (habitually sleepy); @deva[तृष्] + @deva[नजिङ्] = @deva[तृष्णज्], nom. sg. @deva[तृष्णक्] (habitually thirsty, greedy).\n\nVārtika: Also after @deva[धृष्] (to be bold) → @deva[धृष्णज्], nom. sg. @deva[धृष्णक्] (bold, audacious).",
            "advanced": "@deva[नजिङ्] after @deva[स्वप्] and @deva[तृष्] in @deva[तच्छीलादि] sense. The @deva[ङ्] is @deva[इत्], making this @deva[ङित्]. Derivations: @deva[स्वप्] + @deva[नजिङ्] = @deva[स्वप्नज्] (stem), nom. sg. @deva[स्वप्नक्] (drowsy); @deva[तृष्] + @deva[नजिङ्] = @deva[तृष्णज्], nom. sg. @deva[तृष्णक्] (thirsty, avaricious).\n\n@note[type=vārtika]: Also after @deva[धृष्]: @deva[धृष्णज्], nom. sg. @deva[धृष्णक्] (impudent, daring)."
        }
    },
    "32173": {
        "en": {
            "simple": "The affix @deva[आरु] comes after @deva[शॄ] (to injure) and @deva[वन्द्] (to praise, salute) to denote habitual action. Examples: @deva[शरारुः] (noxious, a mischievous animal), @deva[वन्दारुः] (praising, a bard).",
            "standard": "The affix @deva[आरु] applies after @deva[शॄ] (to harm) and @deva[वन्द्] (to praise, bow) in @deva[तच्छीलादि] sense. Formations: @deva[शरारुः] (harmful creature, mischief-maker); @deva[वन्दारुः] (one who habitually praises - a bard, panegyrist).",
            "advanced": "@deva[आरु] after @deva[शॄ] and @deva[वन्द्] in @deva[तच्छीलादि] sense. Derivations: @deva[शॄ] + @deva[आरु] = @deva[शरारुः] (injurious - epithet for harmful animals); @deva[वन्द्] + @deva[आरु] = @deva[वन्दारुः] (eulogist, bard - one habitually engaged in praise)."
        }
    },
    "32174": {
        "en": {
            "simple": "The affixes @deva[क्रु] and @deva[क्लुकन्] come after @deva[भी] (to fear) to denote habitual tendency. Examples: @deva[भीरुः] (fearful, timid), @deva[भीलुकः] (timorous - also denotes bear, tiger, jackal).\n\nVārtika: The affix @deva[क्रुकन्] is also stated → @deva[भीरुकः] (timid).",
            "standard": "The affixes @deva[क्रु] and @deva[क्लुकन्] apply after @deva[भी] (to fear) in @deva[तच्छीलादि] sense. The @deva[क्] is @deva[इत्]. Formations: @deva[भी] + @deva[क्रु] = @deva[भीरुः] (cowardly); @deva[भी] + @deva[क्लुकन्] = @deva[भीलुकः] (fearful - also names for bear, tiger, jackal).\n\nVārtika: @deva[क्रुकन्] also applies → @deva[भीरुकः] (timorous).",
            "advanced": "@deva[क्रु] and @deva[क्लुकन्] after @deva[भी] in @deva[तच्छीलादि] sense. The @deva[क्] in both is @deva[इत्]. Derivations: @deva[भी] + @deva[क्रु] = @deva[भीरुः] (timid, coward); @deva[भी] + @deva[क्लुकन्] = @deva[भीलुकः] (fearful - also used for animals: bear, tiger, jackal).\n\n@note[type=vārtika]: @deva[क्रुकन्] also listed: @deva[भी] + @deva[क्रुकन्] = @deva[भीरुकः] (timorous)."
        }
    },
    "32175": {
        "en": {
            "simple": "The affix @deva[वरच्] comes after five verbs to denote habitual action: @deva[स्था] (to stand), @deva[ईश्] (to rule), @deva[भास्] (to shine), @deva[पिस्] (to go), @deva[कस्] (to go). Examples: @deva[स्थावरः] (immovable), @deva[ईश्वरः] (ruler, God), @deva[पेस्वरः] (going, destructive), @deva[विकस्वरः] (opening, expanding).",
            "standard": "The affix @deva[वरच्] applies after @deva[स्था], @deva[ईश्], @deva[भास्], @deva[पिस्], @deva[कस्] in @deva[तच्छीलादि] sense. Formations: @deva[स्थावरः] (stationary, immobile); @deva[ईश्वरः] (lord, sovereign); @deva[भास्वरः] (radiant - though not in examples); @deva[पेस्वरः] (moving, destructive); @deva[विकस्वरः] (blooming, expanding).",
            "advanced": "@deva[वरच्] after @deva[स्था], @deva[ईश्], @deva[भास्], @deva[पिस्], @deva[कस्] in @deva[तच्छीलादि] sense. Derivations: @deva[स्था] + @deva[वरच्] = @deva[स्थावरः] (stationary - opposite of @deva[जङ्गम]); @deva[ईश्] + @deva[वरच्] = @deva[ईश्वरः] (lord, God); @deva[पिस्] + @deva[वरच्] = @deva[पेस्वरः] (going); @deva[कस्] + @deva[वरच्] = @deva[विकस्वरः] (blossoming). Note: @deva[भास्वर] (luminous) also derives from this."
        }
    },
    "32176": {
        "en": {
            "simple": "The affix @deva[वरच्] comes after the verb @deva[या] (to go) when it has the intensive affix @deva[यङ्]. This forms @deva[यायावरः] (a vagrant, wandering ascetic). See @ref[1.1.58] for intensives.",
            "standard": "The affix @deva[वरच्] applies after @deva[या] when combined with @deva[यङ्] (intensive affix) in @deva[तच्छीलादि] sense. Formation: @deva[या] + @deva[यङ्] = @deva[यायाय्], then + @deva[वरच्] = @deva[यायावरः] (wanderer, itinerant ascetic). See @ref[1.1.58] for intensive formation.",
            "advanced": "@deva[वरच्] after @deva[यङन्त] form of @deva[या] in @deva[तच्छीलादि] sense. Derivation: @deva[या] + @deva[यङ्] = @deva[यायाय्] (intensive stem) + @deva[वरच्] = @deva[यायावरः] (nomadic ascetic, vagrant). The intensive conveys habitual/repeated action - one who habitually wanders. Cf. @ref[1.1.58] for @deva[यङ्] formation."
        }
    },
    "32177": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after eight verbs to denote habitual action: @deva[भ्राज्] (to shine), @deva[भास्] (to shine), @deva[धुर्व्] (to injure), @deva[द्युत्] (to shine), @deva[ऊर्ज्] (to be strong), @deva[पॄ] (to fill), @deva[जु] (to move rapidly), and @deva[स्तु] (to praise) when preceded by @deva[ग्रावन्] (stone). Examples: @deva[विभ्राट्] (splendid), @deva[भाः] (light), @deva[धूः] (injurer), @deva[विद्युत्] (lightning), @deva[पूः] (filler), @deva[जूः] (swift), @deva[ग्रावस्तुत्] (stone-worshipper).",
            "standard": "The affix @deva[क्विप्] applies after @deva[भ्राज्], @deva[भास्], @deva[धुर्व्], @deva[द्युत्], @deva[ऊर्ज्], @deva[पॄ], @deva[जु], and @deva[ग्रावस्तु] in @deva[तच्छीलादि] sense. Formations: @deva[विभ्राज्] → @deva[विभ्राट्] (resplendent); @deva[भास्] → @deva[भाः] (light); @deva[धुर्व्] + @deva[क्विप्] = @deva[धुर्] (by @ref[6.4.21]) → @deva[धूः] (injurer); @deva[द्युत्] → @deva[विद्युत्] (lightning); @deva[पॄ] → @deva[पूः] (filler); @deva[जु] → @deva[जूः] (swift - with vowel lengthening); @deva[ग्रावन्] + @deva[स्तु] + @deva[क्विप्] = @deva[ग्रावस्तुत्] (stone-worshipper, by @ref[6.1.71]).\n\nThough @ref[3.2.76] generally allows @deva[क्विप्], this repetition shows @deva[वासरूपविधि] doesn't apply in @deva[तच्छीलादि] affixes.",
            "advanced": "@deva[क्विप्] after @deva[भ्राज्], @deva[भास्], @deva[धुर्व्], @deva[द्युत्], @deva[ऊर्ज्], @deva[पॄ], @deva[जु], @deva[ग्रावस्तु] in @deva[तच्छीलादि] sense. Derivations: @deva[भ्राज्] + @deva[क्विप्] = @deva[विभ्राज्], nom. @deva[विभ्राट्]; @deva[भास्] → @deva[भाः]; @deva[धुर्व्] → @deva[धुर्] (by @ref[6.4.21]) → @deva[धूः]; @deva[द्युत्] → @deva[विद्युत्]; @deva[ऊर्ज्] → @deva[ऊर्क्]; @deva[पॄ] → @deva[पूः]; @deva[जु] → @deva[जूः] (vowel lengthening); @deva[ग्रावन्] + @deva[स्तु] → @deva[ग्रावस्तुत्] (by @ref[6.1.71] for @deva[तुक्]). This repetition despite @ref[3.2.76] demonstrates that @deva[वासरूपविधि] is inapplicable in @deva[तच्छीलादि] domain."
        }
    },
    "32178": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after verbs beyond those listed above, as seen in actual usage. Examples: @deva[युक्] (joining), @deva[छित्] (piercing), @deva[भित्] (dividing). The phrase 'as seen' implies concurrent rules apply - sometimes vowel lengthening, sometimes reduplication, sometimes @deva[सम्प्रसारण] of semivowels.",
            "standard": "The affix @deva[क्विप्] applies after other verbs as attested in usage (@deva[दृष्ट]). Examples: @deva[युज्] → @deva[युक्] (joining); @deva[छिद्] → @deva[छित्]; @deva[भिद्] → @deva[भित्]. The word @deva[दृष्ट] (seen) implies other rules apply concurrently: vowel lengthening, reduplication, or @deva[सम्प्रसारण] depending on the root.\n\nVārtikas: (1) Vowel lengthening for @deva[वच्], @deva[प्रच्छ्], @deva[आयतस्तु], @deva[कटप्रु], @deva[जु], @deva[श्री] (no @deva[सम्प्रसारण] by @ref[6.1.16]): @deva[वाक्], @deva[प्राट्], @deva[जूः], @deva[श्रीः]. (2) Reduplication for @deva[द्युत्], @deva[गम्], @deva[हु]: @deva[विद्युत्], @deva[जगत्], @deva[जुहूः]. (3) @deva[ध्या] has @deva[सम्प्रसारण]: @deva[धीः].",
            "advanced": "@deva[क्विप्] after other roots @deva[दृष्टेः] (as attested). Examples: @deva[युक्], @deva[छित्], @deva[भित्]. The term @deva[दृष्ट] indicates concurrent application of other rules.\n\n@note[type=vārtika]: Vowel lengthening for @deva[वच्], @deva[प्रच्छ्], @deva[आयतस्तु], @deva[कटप्रु], @deva[जु], @deva[श्री], with no @deva[सम्प्रसारण] (blocking @ref[6.1.16]): @deva[वाक्]; @deva[प्रच्छ्] → @deva[प्रश्] (@ref[6.1.10]) → @deva[प्रष्] (@ref[8.2.36]) → @deva[प्राट्] (@ref[8.4.56]); @deva[जूः]; @deva[श्रीः] (Lakṣmī).\n\n@note[type=vārtika]: Reduplication for @deva[द्युत्], @deva[गम्], @deva[हु]: @deva[विद्युत्], @deva[जगत्] (world), @deva[जुहूः] (with lengthening - the sacrificial ladle).\n\n@note[type=vārtika]: @deva[तॄ] shortens: @deva[दतृत्]. @deva[ध्या] has @deva[सम्प्रसारण]: @deva[धीः] (thought, intellect)."
        }
    },
    "32179": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after @deva[भू] (to be) when the resulting word denotes a name or a surety. Examples: @deva[विभूः] (a person named Vibhu), @deva[प्रतिभूः] (a surety - one who stands between debtor and creditor).",
            "standard": "The affix @deva[क्विप्] applies after @deva[भू] when denoting a proper name or surety. Examples: @deva[विभूः] (the name 'Vibhu'); @deva[प्रतिभूः] (guarantor - one who stands as intermediary between debtor and creditor). This is distinct from the @deva[डु] affix rule in @ref[3.2.180].",
            "advanced": "@deva[क्विप्] after @deva[भू] when the word denotes @deva[संज्ञा] (proper name) or @deva[प्रतिभू] (surety). Formations: @deva[वि] + @deva[भू] + @deva[क्विप्] = @deva[विभूः] (personal name); @deva[प्रति] + @deva[भू] + @deva[क्विप्] = @deva[प्रतिभूः] (guarantor - literally 'one who exists in place of'). Contrast with @ref[3.2.180] where @deva[डु] applies when NOT a proper name."
        }
    },
    "32180": {
        "en": {
            "simple": "The affix @deva[डु] comes after @deva[भू] (to be) when preceded by @deva[वि], @deva[प्र], or @deva[सम्], provided the word is not a proper name. Examples: @deva[विभुः] (all-pervading), @deva[प्रभुः] (lord, master), @deva[सम्भुः] (creator). Compare @deva[विभूः] (a person's name) which takes @deva[क्विप्].\n\nVārtika: Words like @deva[मितद्रु] (sea) and @deva[शम्भुः] (causing happiness) also take this affix.",
            "standard": "The affix @deva[डु] applies after @deva[भू] with @deva[वि], @deva[प्र], @deva[सम्] when NOT a proper name. Examples: @deva[विभुः] (omnipresent), @deva[प्रभुः] (lord), @deva[सम्भुः] (beneficent, Brahma). When it IS a name: @deva[विभूः] (takes @deva[क्विप्] by @ref[3.2.179]).\n\nWhy @deva[डु] not @deva[क्विप्]? Two reasons: (1) to prevent @deva[धातु] rules from applying; (2) to prevent @deva[तुक्] augment (@ref[6.1.71]). Thus @deva[मितद्रु]: dual @deva[मितद्रू], pl. @deva[मितद्रवः] - no @deva[उकङ्] (@ref[6.4.77]) since @deva[द्रु] loses @deva[धातु] status.\n\nVārtika: @deva[मितद्रु] (ocean), @deva[शम्भुः] (bliss-giver) also included.",
            "advanced": "@deva[डु] after @deva[भू] with @deva[वि]/\u200b@deva[प्र]/\u200b@deva[सम्] when @deva[असंज्ञायाम्] (not a proper name). Forms: @deva[विभुः], @deva[प्रभुः], @deva[सम्भुः]. When @deva[संज्ञा], @deva[क्विप्] applies (@ref[3.2.179]): @deva[विभूः].\n\nWhy @deva[डु] over @deva[क्विप्]? (1) Blocks @deva[धात्वधिकार] - so @ref[6.4.77] (@deva[उकङ्] substitution) doesn't apply: @deva[मितद्रु] → dual @deva[मितद्रू], pl. @deva[मितद्रवः]. (2) Blocks @deva[तुक्] (@ref[6.1.71]). (3) Accent rule @ref[6.1.175] doesn't apply to inst. @deva[मितद्र्वा].\n\n@note[type=vārtika]: @deva[मितद्रु] (ocean - 'measured flow'), @deva[शम्भुः] (happiness-causer). Etymology: @deva[मितं द्रवति] = @deva[मितद्रुः]."
        }
    },
    "32181": {
        "en": {
            "simple": "The affix @deva[ष्ट्रन्] comes after the verb @deva[धा] (to feed/suckle) to denote the object (what is fed). The @deva[ष्] indicates feminine forms take @deva[ङीप्] (@deva[ई]). Examples: @deva[धात्री] (a wet-nurse - whom children suckle), also the āmalakī fruit (which holds medicinal properties).",
            "standard": "The affix @deva[ष्ट्रन्] applies after @deva[धा] (= @deva[धे] 'to suck/nurse') in @deva[कर्म] (object) sense. The @deva[ष्] is @deva[इत्], indicating @deva[ङीप्] (@deva[ई]) in feminine by @ref[4.1.41]. Formation: @deva[धात्री] (wet-nurse - one whom babies suck; also āmalakī fruit - which 'holds' all medicines).",
            "advanced": "@deva[ष्ट्रन्] after @deva[धा] (= @deva[धेट्] 'to suck') in @deva[कर्मणि] sense. The @deva[ष्] is @deva[इत्], triggering @deva[ङीप्] feminine. Formation: @deva[धात्री] (nurse - object of suckling by children; also @deva[आमलकी] - 'that which holds/contains all medicinal properties'). Note the semantic shift: the nurse is technically the object being suckled, hence @deva[कर्म]."
        }
    },
    "32182": {
        "en": {
            "simple": "The affix @deva[ष्ट्रन्] comes after thirteen verbs to denote the instrument: @deva[दाप्] (to cut), @deva[नी] (to lead), @deva[शस्] (to hurt), @deva[यु] (to join), @deva[युज्] (to join), @deva[स्तु] (to praise), @deva[तुद्] (to strike), @deva[सि] (to bind), @deva[सिच्] (to sprinkle), @deva[मिह्] (to urinate), @deva[पत्] (to fall), @deva[दश्] (to bite), @deva[नह्] (to bind). Examples: @deva[दात्रम्] (sickle), @deva[नेत्रम्] (eye), @deva[शस्त्रम्] (weapon), @deva[स्तोत्रम्] (hymn), @deva[तोत्रम्] (goad), @deva[पत्रम्] (vehicle/leaf), @deva[दंष्ट्रा] (fang).",
            "standard": "The affix @deva[ष्ट्रन्] applies in @deva[करण] (instrument) sense after @deva[दाप्], @deva[नी], @deva[शस्], @deva[यु], @deva[युज्], @deva[स्तु], @deva[तुद्], @deva[सि], @deva[सिच्], @deva[मिह्], @deva[पत्], @deva[दश्], @deva[नह्]. Examples: @deva[दात्रम्] (sickle); @deva[नेत्रम्] (eye - instrument of leading); @deva[शस्त्रम्] (weapon, by @ref[7.2.9]); @deva[योत्रम्] (yoke-tie); @deva[योक्त्रम्] (yoke-strap); @deva[स्तोत्रम्] (panegyric); @deva[तोत्रम्] (elephant goad); @deva[सेत्रम्] (ligament); @deva[सेक्त्रम्] (sprinkler); @deva[मेढ्रम्] (penis); @deva[पत्रम्] (wing/leaf/vehicle); @deva[दंष्ट्रा] (fang - @deva[अजादि] class, so @deva[टाप्] not @deva[ई] by @ref[4.1.4]); @deva[नह्] → @deva[नद्ध्री] (thong, by @ref[8.2.34]).\n\nNote: @deva[दश्] is written without nasal, implying nasal-loss before some affixes (e.g., @deva[ल्युट्] → @deva[दशनम्] 'tooth').",
            "advanced": "@deva[ष्ट्रन्] after @deva[दाप्], @deva[नी], @deva[शस्], @deva[यु], @deva[युज्], @deva[स्तु], @deva[तुद्], @deva[सि], @deva[सिच्], @deva[मिह्], @deva[पत्], @deva[दश्], @deva[नह्] in @deva[करणे] sense. Derivations: @deva[दात्रम्] (sickle); @deva[नेत्रम्] (eye); @deva[शस्त्रम्] (by @ref[7.2.9]); @deva[योत्रम्], @deva[योक्त्रम्] (yoke-ties); @deva[स्तोत्रम्] (hymn); @deva[तोत्रम्] (goad); @deva[सेत्रम्] (bond); @deva[सेक्त्रम्] (sprinkler); @deva[मेढ्रम्] (phallus); @deva[पत्रम्] (leaf/wing/letter); @deva[दंष्ट्रा] (@deva[अजादि] → @deva[टाप्] by @ref[4.1.4], not @deva[ई]); @deva[नह्] + @deva[ष्ट्रन्] → @deva[नद्ध्र], fem. @deva[नद्ध्री] (by @ref[8.2.34], @ref[8.2.40]).\n\nThe root @deva[दश्] (without nasal @deva[दंश्]) indicates nasal-deletion before certain affixes: @deva[ल्युट्] → @deva[दशनम्] (tooth)."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.2.168-3.2.182 (Batch 10)")
