#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.4.76-3.4.90 (Batch 6 of 3.4)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "34076": {
        "en": {
            "simple": "The @deva[क्त] affix denotes location (@deva[अधिकरण]) in addition to its other meanings when it follows verbs meaning: (1) @deva[ध्रौव्य] (fixedness/staying in place), (2) motion (@deva[गत्यर्थ]), or (3) taking/eating (@deva[प्रत्यवसानार्थ]). For fixedness verbs: @deva[आसितो] @deva[देवदत्तः] 'D. sat' (agent); @deva[आसितं] @deva[तेन] 'sitting by him' (act); @deva[इदमेषामासितम्] 'this was their seat' (location). For motion verbs: @deva[यातो] @deva[देवदत्तः] @deva[ग्रामम्] (agent); @deva[यातः] @deva[ग्रामः] @deva[देवदत्तेन] (object); @deva[यातं] @deva[देवदत्तेन] (act); @deva[इदमेषां] @deva[यातम्] 'this is where they went' (location). For eating verbs: @deva[भुक्तः] @deva[ओदनः] @deva[देवदत्तेन] (object); @deva[देवदत्तेन] @deva[भुक्तम्] (act); @deva[इदमेषां] @deva[भुक्तम्] 'this is where they ate' (location).",
            "standard": "@deva[क्त] additionally denotes @deva[अधिकरण] (location) after @deva[ध्रौव्यार्थ] (fixedness), @deva[गत्यर्थ] (motion), and @deva[प्रत्यवसानार्थ] (eating/taking) verbs. @deva[ध्रौव्यार्थ] verbs are @deva[अकर्मक]—@deva[क्त] expresses @deva[कर्तृ], @deva[भाव], and @deva[अधिकरण]. @deva[गत्यर्थ] verbs: @deva[कर्तृ], @deva[कर्मन्], @deva[भाव], @deva[अधिकरण]. @deva[प्रत्यवसानार्थ] verbs: @deva[कर्मन्], @deva[भाव], @deva[अधिकरण]. Examples: @deva[इदमेषामासितम्] (@deva[अधिकरण]—'their seat'); @deva[इदमेषां] @deva[यातम्] ('their route'); @deva[इदमेषां] @deva[भुक्तम्] ('their eating place'). The @deva[आ] in @deva[भुक्ता] @deva[ब्राह्मणाः], @deva[पीता] @deva[गावः] has @deva[मतुप्]-force (@ref[4.2.85]): @deva[भुक्तमेषामस्ति].",
            "advanced": "@deva[क्त] takes @deva[अधिकरण] in addition to standard meanings after: @deva[ध्रौव्यार्थ] (agent/@deva[भाव]/location); @deva[गत्यर्थ] (agent/object/@deva[भाव]/location); @deva[प्रत्यवसानार्थ] (object/@deva[भाव]/location). Examples: @deva[आसितो] @deva[देवदत्तः] (@deva[कर्तृ]); @deva[आसितं] @deva[तेन] (@deva[भाव]); @deva[इदमेषामासितम्] (@deva[अधिकरण]). @deva[यातो] @deva[देवदत्तो] @deva[ग्रामम्]/@deva[यातः] @deva[ग्रामः] @deva[देवदत्तेन]/@deva[यातं] @deva[देवदत्तेन]/@deva[इदमेषां] @deva[यातम्]. @deva[भुक्तः] @deva[ओदनः] @deva[देवदत्तेन]/@deva[देवदत्तेन] @deva[भुक्तम्]/@deva[इदमेषां] @deva[भुक्तम्]. @deva[भुक्ता] @deva[ब्राह्मणाः], @deva[पीता] @deva[गावः]—@deva[आ] = @deva[मतुप्] (@ref[4.2.85])."
        }
    },
    "34077": {
        "en": {
            "simple": "This is an @deva[अधिकार] (governing) rule. It states that in the following sūtras, various affixes will be substituted for @deva[ल] (the abstract tense/mood marker). The ten @deva[ल]-affixes are: @deva[लट्] (present), @deva[लिट्] (perfect), @deva[लुट्] (first future), @deva[लृट्] (second future), @deva[लोट्] (imperative), @deva[लेट्] (Vedic subjunctive), @deva[लङ्] (imperfect), @deva[लिङ्] (potential/benedictive), @deva[लुङ्] (aorist), @deva[लृङ्] (conditional). Six have indicatory @deva[ट्] and four have indicatory @deva[ङ्].",
            "standard": "This @deva[अधिकार] sūtra governs subsequent rules. @deva[लस्य] (genitive of @deva[ल]) indicates that substitutes will replace @deva[ल]. The @deva[अ] in @deva[ल] is for pronunciation. @deva[ल] denotes the ten @deva[लकार]s: @deva[लट्] (present), @deva[लिट्] (perfect), @deva[लुट्] (periphrastic future), @deva[लृट्] (simple future), @deva[लोट्] (imperative), @deva[लेट्] (Vedic subjunctive), @deva[लङ्] (imperfect), @deva[लिङ्] (optative/benedictive), @deva[लुङ्] (aorist), @deva[लृङ्] (conditional). Six are @deva[टित्] (@deva[लट्], @deva[लिट्], @deva[लुट्], @deva[लृट्], @deva[लोट्], @deva[लेट्]); four are @deva[ङित्] (@deva[लङ्], @deva[लिङ्], @deva[लुङ्], @deva[लृङ्]).",
            "advanced": "@deva[अधिकारसूत्र] establishing @deva[लस्य] (genitive singular of @deva[ल्], with euphonic @deva[अ]). Per Böhtlingk: 'in the following sūtras, supply @deva[लस्य]—i.e., affixes substituting for personal endings known collectively as @deva[ल].' The ten @deva[लकार]s: @deva[लट्] (present), @deva[लिट्] (perfect), @deva[लुट्] (1st future), @deva[लृट्] (2nd future), @deva[लोट्] (imperative), @deva[लेट्] (Vedic subjunctive), @deva[लङ्] (imperfect), @deva[लिङ्] (optative/precative), @deva[लुङ्] (aorist), @deva[लृङ्] (conditional). @deva[टित्]: @deva[लट्]–@deva[लेट्]; @deva[ङित्]: @deva[लङ्]–@deva[लृङ्]."
        }
    },
    "34078": {
        "en": {
            "simple": "The 18 personal endings (@deva[तिङ्]) that replace @deva[ल] are: @deva[तिप्], @deva[तस्], @deva[झि], @deva[सिप्], @deva[थस्], @deva[थ], @deva[मिप्], @deva[वस्], @deva[मस्] (@deva[परस्मैपद]—9 endings); @deva[त], @deva[आताम्], @deva[झ], @deva[थास्], @deva[आथाम्], @deva[ध्वम्], @deva[इट्], @deva[वहि], @deva[महिङ्] (@deva[आत्मनेपद]—9 endings). The indicatory letters (@deva[प्] in @deva[तिप्]/etc., @deva[ट्] in @deva[इट्], @deva[ङ्] in @deva[महिङ्]) serve technical purposes: @deva[प्] for accent (@ref[3.1.4]), @deva[ट्] for distinguishing @deva[इट्] (@ref[3.4.106]), @deva[ङ्] for forming the @deva[प्रत्याहार] @deva[तिङ्]. These affixes undergo changes in different tenses.",
            "standard": "The 18 @deva[तिङ्]-pratyayas substituting for @deva[ल]: @deva[परस्मैपद]—@deva[तिप्], @deva[तस्], @deva[झि] (3rd); @deva[सिप्], @deva[थस्], @deva[थ] (2nd); @deva[मिप्], @deva[वस्], @deva[मस्] (1st). @deva[आत्मनेपद]—@deva[त], @deva[आताम्], @deva[झ] (3rd); @deva[थास्], @deva[आथाम्], @deva[ध्वम्] (2nd); @deva[इट्], @deva[वहि], @deva[महिङ्] (1st). @deva[इत्]-functions: @deva[प्] in @deva[तिप्]/@deva[सिप्]/@deva[मिप्] for accent (@ref[3.1.4]); @deva[ट्] in @deva[इट्] for @ref[3.4.106]; @deva[ङ्] in @deva[महिङ्] forms @deva[प्रत्याहार] @deva[तिङ्]. See @ref[1.4.8], @ref[3.1.33] for modifications. Only @deva[लट्] applies these directly without alteration in some cases.",
            "advanced": "The 18 conjugational affixes (@deva[तिङ्]) replace @deva[ल]: @deva[परस्मैपद] 3rd @deva[तिप्]/@deva[तस्]/@deva[झि], 2nd @deva[सिप्]/@deva[थस्]/@deva[थ], 1st @deva[मिप्]/@deva[वस्]/@deva[मस्]; @deva[आत्मनेपद] 3rd @deva[त]/@deva[आताम्]/@deva[झ], 2nd @deva[थास्]/@deva[आथाम्]/@deva[ध्वम्], 1st @deva[इट्]/@deva[वहि]/@deva[महिङ्]. @deva[अनुबन्ध] functions: @deva[प्] (@deva[तिप्]/@deva[सिप्]/@deva[मिप्]) for accent (@ref[3.1.4]); @deva[ट्] (@deva[इट्]) for distinguishing in @ref[3.4.106]; @deva[ङ्] (@deva[महिङ्]) forms @deva[प्रत्याहार] @deva[तिङ्]—the collective designation for all 18 personal endings. Stripped of @deva[इत्]s, the tables in Vasu show actual forms per tense."
        }
    },
    "34079": {
        "en": {
            "simple": "In the six @deva[टित्] tenses (@deva[लट्], @deva[लिट्], @deva[लुट्], @deva[लृट्], @deva[लोट्], @deva[लेट्]), the final @deva[टि] portion of @deva[आत्मनेपद] endings is replaced by @deva[ए]. So @deva[त] → @deva[ते], @deva[आताम्] → @deva[आते], @deva[झ] → @deva[अन्ते] (via @deva[झे]), etc. This rule applies only to @deva[तिङ्] affixes (the 18 personal endings), not to participial affixes like @deva[शानच्] and @deva[कानच्] (hence @deva[पचमानः], @deva[यजमानः] retain @deva[आन], not @deva[ए]).",
            "standard": "In @deva[टित्] @deva[ल]s (six tenses with indicatory @deva[ट्]: @deva[लट्], @deva[लिट्], @deva[लुट्], @deva[लृट्], @deva[लोट्], @deva[लेट्]), @deva[ए] replaces the @deva[टि] (final vowel + following consonant) of @deva[आत्मनेपद] substitutes. @deva[त] → @deva[ते]; @deva[आताम्] → @deva[आते]; @deva[झ] → @deva[झे] (→ @deva[अन्ते]). The term @deva[आत्मनेपदानाम्] refers contextually to @deva[तिङ्]-included @deva[आत्मनेपद] only—so @deva[शानच्]/@deva[कानच्] (also @deva[आत्मनेपद]) don't undergo this: @deva[पचमानः], @deva[यजमानः].",
            "advanced": "@deva[टित्] @deva[ल]s (@deva[लट्]/@deva[लिट्]/@deva[लुट्]/@deva[लृट्]/@deva[लोट्]/@deva[लेट्]) trigger @deva[ए]-substitution for @deva[टि] of @deva[आत्मनेपद] @deva[तिङ्]. @deva[त] → @deva[ते]; @deva[आताम्] → @deva[आते]; @deva[झ] → @deva[झे] (→ @deva[अन्ते] by @ref[7.1.3]ff.). @deva[आत्मनेपदानाम्] contextually = @deva[तिङ्]-pratyāhāra-included affixes. Hence @deva[शानच्]/@deva[कानच्] (participial @deva[आत्मनेपद]) unaffected: @deva[पचमानः], @deva[यजमानः]."
        }
    },
    "34080": {
        "en": {
            "simple": "In the six @deva[टित्] tenses, @deva[थास्] (2nd person singular @deva[आत्मनेपद]) is replaced by @deva[से]. Examples: @deva[पचसे] (@deva[लट्]), @deva[पेचिषे] (@deva[लिट्]), @deva[पक्तासे] (@deva[लुट्]), @deva[पक्ष्यसे] (@deva[लृट्]).",
            "standard": "@deva[थास्] → @deva[से] in @deva[टित्] @deva[ल]s (six tenses). @deva[लट्]: @deva[पचसे]; @deva[लिट्]: @deva[पेचिषे]; @deva[लुट्]: @deva[पक्तासे]; @deva[लृट्]: @deva[पक्ष्यसे].",
            "advanced": "@deva[थास्] → @deva[से] in @deva[टित्] @deva[लकार]s. Paradigm forms: @deva[पचसे] (@deva[लट्]), @deva[पेचिषे] (@deva[लिट्]), @deva[पक्तासे] (@deva[लुट्]), @deva[पक्ष्यसे] (@deva[लृट्]). See conjugation tables in preceding commentary."
        }
    },
    "34081": {
        "en": {
            "simple": "In @deva[लिट्] (perfect tense), @deva[एश्] replaces @deva[त] (3rd singular @deva[आत्मनेपद]) and @deva[इरेच्] replaces @deva[झ] (3rd plural @deva[आत्मनेपद]). The @deva[श्] in @deva[एश्] indicates whole-affix replacement (@ref[1.1.55]). The @deva[च्] in @deva[इरेच्] is for accent (@ref[6.1.165]). Examples: @deva[पेचे] (3sg), @deva[पेचाते] (3du), @deva[पेचिरे] (3pl).",
            "standard": "In @deva[लिट्], @deva[त] → @deva[ए] (via @deva[एश्]—@deva[श्] = @deva[सर्वादेश] by @ref[1.1.55]); @deva[झ] → @deva[इरे] (via @deva[इरेच्]—@deva[च्] for accent @ref[6.1.165]). @deva[आत्मनेपद] 3rd person @deva[लिट्]: @deva[पेचे] (sg), @deva[पेचाते] (du), @deva[पेचिरे] (pl).",
            "advanced": "@deva[लिट्] @deva[आत्मनेपद] 3rd person: @deva[त] → @deva[ए] (via @deva[एश्]—@deva[श्] marks @deva[सर्वादेश] @ref[1.1.55]); @deva[झ] → @deva[इरे] (via @deva[इरेच्]—@deva[च्] for accent @ref[6.1.165]). Forms: @deva[पेचे], @deva[पेचाते], @deva[पेचिरे]."
        }
    },
    "34082": {
        "en": {
            "simple": "In @deva[लिट्] (perfect tense), the @deva[परस्मैपद] affixes are replaced by special forms: 3rd person—@deva[णल्] (@deva[अ]), @deva[अतुस्] (@deva[अतुः]), @deva[उस्] (@deva[उः]); 2nd person—@deva[थल्] (@deva[थ]), @deva[अथुस्] (@deva[अथुः]), @deva[अ]; 1st person—@deva[णल्] (@deva[अ]), @deva[व], @deva[म]. The @deva[ल्] in @deva[णल्]/@deva[थल्] governs accent (@ref[6.1.193]). The @deva[ण्] causes @deva[वृद्धि] (@ref[7.2.25]). Examples from @deva[पच्]: @deva[पपाच], @deva[पेचतुः], @deva[पेचुः]; @deva[पेचिथ]/@deva[पपक्थ], @deva[पेचथुः], @deva[पेच]; @deva[पपाच]/@deva[पपच], @deva[पेचिव], @deva[पेचिम].",
            "standard": "@deva[लिट्] @deva[परस्मैपद] substitutes: 3rd @deva[णल्]/@deva[अतुस्]/@deva[उस्]; 2nd @deva[थल्]/@deva[अथुस्]/@deva[अ]; 1st @deva[णल्]/@deva[व]/@deva[म]. @deva[ल्] (@deva[णल्]/@deva[थल्]) for accent (@ref[6.1.193]); @deva[ण्] for @deva[वृद्धि] (@ref[7.2.25]). @deva[पच्] paradigm: @deva[पपाच]/@deva[पेचतुः]/@deva[पेचुः] (3rd); @deva[पेचिथ] or @deva[पपक्थ]/@deva[पेचथुः]/@deva[पेच] (2nd); @deva[पपाच] or @deva[पपच]/@deva[पेचिव]/@deva[पेचिम] (1st).",
            "advanced": "@deva[लिट्] @deva[परस्मैपद] replacements: 3rd @deva[णल्] (अ)/@deva[अतुस्] (अतुः)/@deva[उस्] (उः); 2nd @deva[थल्] (थ)/@deva[अथुस्] (अथुः)/@deva[अ]; 1st @deva[णल्] (अ)/@deva[व]/@deva[म]. @deva[इत्]-functions: @deva[ल्] for accent (@ref[6.1.193]); @deva[ण्] for @deva[वृद्धि] (@ref[7.2.25]). @deva[पच्]: @deva[पपाच]/@deva[पेचतुः]/@deva[पेचुः]; @deva[पेचिथ] or @deva[पपक्थ]/@deva[पेचथुः]/@deva[पेच]; @deva[पपाच] or @deva[पपच]/@deva[पेचिव]/@deva[पेचिम]."
        }
    },
    "34083": {
        "en": {
            "simple": "The nine @deva[लिट्] affixes (from @ref[3.4.82]) may optionally be used in @deva[लट्] (present tense) after @deva[विद्] 'to know'. So alongside regular present forms, we get @deva[लिट्]-style forms: 3rd—@deva[वेद]/@deva[वेत्ति], @deva[विदतुः]/@deva[वित्तः], @deva[विदुः]/@deva[विदन्ति]; 2nd—@deva[वेत्थ]/@deva[वेत्सि], @deva[विदथुः]/@deva[वित्थः], @deva[विद]/@deva[वित्थ]; 1st—@deva[वेद]/@deva[वेद्मि], @deva[विद्व]/@deva[विद्वः], @deva[विद्म]/@deva[विद्मः].",
            "standard": "The nine @deva[लिट्] @deva[परस्मैपद] substitutes (@ref[3.4.82]) optionally apply in @deva[लट्] after @deva[विद्] (2P, 'to know'). Dual paradigms: @deva[वेद] or @deva[वेत्ति]/@deva[विदतुः] or @deva[वित्तः]/@deva[विदुः] or @deva[विदन्ति] (3rd); @deva[वेत्थ] or @deva[वेत्सि]/@deva[विदथुः] or @deva[वित्थः]/@deva[विद] or @deva[वित्थ] (2nd); @deva[वेद] or @deva[वेद्मि]/@deva[विद्व] or @deva[विद्वः]/@deva[विद्म] or @deva[विद्मः] (1st).",
            "advanced": "@deva[लिट्] @deva[परस्मैपद] affixes (@ref[3.4.82]) are @deva[विकल्प] in @deva[लट्] after @deva[विद्] (2P, 'know'). Resulting optionality: 3rd @deva[वेद]/वेत्ति, @deva[विदतुः]/@deva[वित्तः], @deva[विदुः]/@deva[विदन्ति]; 2nd @deva[वेत्थ]/@deva[वेत्सि], @deva[विदथुः]/@deva[वित्थः], @deva[विद]/@deva[वित्थ]; 1st @deva[वेद]/@deva[वेद्मि], @deva[विद्व]/@deva[विद्वः], @deva[विद्म]/@deva[विद्मः]."
        }
    },
    "34084": {
        "en": {
            "simple": "After @deva[ब्रू] 'to speak', the first five @deva[लट्] (present) affixes may optionally take @deva[लिट्] forms, with @deva[आह] substituting for @deva[ब्रू]. So: 3rd—@deva[आह]/@deva[ब्रवीति], @deva[आहतुः]/@deva[ब्रूतः], @deva[आहुः]/@deva[ब्रुवन्ति]; 2nd—@deva[आत्थ]/@deva[ब्रवीषि], @deva[आहथुः]/@deva[ब्रूथः], @deva[ब्रूथ] (no @deva[लिट्] form). The word @deva[आदितः] 'first' restricts this to the first five positions only. The repetition of @deva[ब्रुवः] shows this applies only to @deva[परस्मैपद].",
            "standard": "After @deva[ब्रू] (2P, 'speak'), the first five @deva[लट्] affixes optionally take @deva[लिट्] forms with @deva[ब्रू] → @deva[आह]. @deva[आदितः] restricts to first five (3rd sg/du/pl, 2nd sg/du): @deva[आह]/@deva[ब्रवीति], @deva[आहतुः]/@deva[ब्रूतः], @deva[आहुः]/@deva[ब्रुवन्ति] (3rd); @deva[आत्थ]/@deva[ब्रवीषि], @deva[आहथुः]/@deva[ब्रूथः] (2nd sg/du). 2nd pl and 1st person retain regular forms: @deva[ब्रूथ], @deva[ब्रवीमि], @deva[ब्रूवः], @deva[ब्रूमः]. @deva[ब्रुवः] repetition indicates @deva[परस्मैपद] only.",
            "advanced": "@deva[ब्रू] (2P) optionally takes @deva[लिट्]-substitutes for first five @deva[लट्] affixes, with @deva[आह]-ādeśa. @deva[आदितः] = first five positions (3sg–2du). 3rd: @deva[आह]/@deva[ब्रवीति], @deva[आहतुः]/@deva[ब्रूतः], @deva[आहुः]/@deva[ब्रुवन्ति]; 2nd sg/du: @deva[आत्थ]/@deva[ब्रवीषि], @deva[आहथुः]/@deva[ब्रूथः]. Last four (2pl, 1st) = regular @deva[लट्]: @deva[ब्रूथ], @deva[ब्रवीमि], @deva[ब्रूवः], @deva[ब्रूमः]. Repetition of @deva[ब्रुवः] marks @deva[परस्मैपद]-restriction."
        }
    },
    "34085": {
        "en": {
            "simple": "The @deva[लोट्] (imperative) endings are like those of @deva[लङ्] (imperfect) for certain forms. Specifically, @deva[ताम्], @deva[तम्], @deva[त], @deva[व], @deva[म] appear in @deva[लोट्] as they do in @deva[लङ्]. Examples: @deva[पचताम्], @deva[पचतम्], @deva[पचत], @deva[पचाव], @deva[पचाम]. This is an @deva[अतिदेश] (analogy) rule. However, @deva[लोट्] doesn't take @deva[लङ्]-specific features like the @deva[अट्]/@deva[आट्] augment or @deva[जुस्]/@deva[झि] substitution (@ref[3.4.111])—the @deva[वा] from @ref[3.4.83] applies here too, making this a limited analogy.",
            "standard": "This @deva[अतिदेश] makes @deva[लोट्] endings parallel @deva[लङ्] for @deva[ताम्]/@deva[तम्]/@deva[त]/@deva[व]/@deva[म]. @deva[पचताम्], @deva[पचतम्], @deva[पचत], @deva[पचाव], @deva[पचाम]. Q: Why no @deva[अट्]/@deva[आट्] augment or @deva[जुस्] substitution (@ref[3.4.111]) in @deva[लोट्]? A: The @deva[वा] from @ref[3.4.83] applies here—the @deva[लोट्] ≈ @deva[लङ्] analogy is @deva[व्यवस्थितविभाषा] (limited optionality), not extending all @deva[लङ्]-rules to @deva[लोट्].",
            "advanced": "@deva[अतिदेशसूत्र]: @deva[लोट्] takes @deva[लङ्]-style @deva[ताम्]/@deva[तम्]/@deva[त]/@deva[व]/@deva[म]. @deva[पचताम्]/@deva[पचतम्]/@deva[पचत]/@deva[पचाव]/@deva[पचाम]. The analogy is limited (@deva[व्यवस्थितविभाषा] via @deva[वा] of @ref[3.4.83])—@deva[लङ्]-specific rules (@deva[अट्]/@deva[आट्] augment, @deva[जुस्] for @deva[झि] @ref[3.4.111]) don't extend to @deva[लोट्]."
        }
    },
    "34086": {
        "en": {
            "simple": "In @deva[लोट्] (imperative), @deva[इ] is replaced by @deva[उ]. So @deva[ति] → @deva[तु], @deva[अन्ति] → @deva[अन्तु]. This rule applies only to @deva[ति] and @deva[झि], not to @deva[हि] or @deva[नि] (which have special rules), and not to @deva[सि] (which becomes @deva[हि] by the next rule). Examples: @deva[पचतु], @deva[पचन्तु].",
            "standard": "In @deva[लोट्], @deva[इ] → @deva[उ]: @deva[ति] → @deva[तु], @deva[अन्ति] → @deva[अन्तु]. A @deva[वार्तिक] prohibits this for @deva[हि] and @deva[नि]—either because they're taught separately or because @deva[वा] (@ref[3.4.83]) makes this @deva[व्यवस्थितविभाषा]. This sūtra applies to @deva[ति]/@deva[झि] only; @deva[सि] takes @deva[हि] by @ref[3.4.87]. Examples: @deva[पचतु], @deva[पचन्तु].",
            "advanced": "@deva[लोट्]: @deva[इ] → @deva[उ] for @deva[ति]/@deva[झि] only. @deva[ति] → @deva[तु]; @deva[झि] (→ @deva[अन्ति]) → @deva[अन्तु]. @deva[वार्तिक]: @deva[हि]/@deva[नि] exempt—either explicitly taught or via @deva[व्यवस्थितविभाषा] (@deva[वा] of @ref[3.4.83]). @deva[सि] → @deva[हि] by @ref[3.4.87], not this rule. @deva[पचतु], @deva[पचन्तु]."
        }
    },
    "34087": {
        "en": {
            "simple": "In @deva[लोट्] (imperative), @deva[सि] (2nd singular @deva[परस्मैपद]) is replaced by @deva[हि], and this @deva[हि] is treated as @deva[अपित्] (without indicatory @deva[प्]). Since @deva[सिप्] has indicatory @deva[प्], the substitute would normally inherit this (@ref[1.1.56]), but this sūtra explicitly states @deva[हि] is @deva[अपित्]. Being @deva[अपित्], it becomes @deva[ङित्] (@ref[1.2.4]), preventing @deva[गुण]. Examples: @deva[लुनीहि], @deva[पुनीहि], @deva[राध्नुहि], @deva[तक्ष्णुहि].",
            "standard": "In @deva[लोट्], @deva[सि] → @deva[हि] with @deva[अपित्] status. By @ref[1.1.56], the substitute would inherit @deva[पित्] from @deva[सिप्], but the sūtra explicitly marks @deva[हि] as @deva[अपित्]. Being @deva[अपित्], @ref[1.2.4] makes it @deva[ङित्], blocking @deva[गुण]. @deva[लुनीहि], @deva[पुनीहि], @deva[राध्नुहि], @deva[तक्ष्णुहि].",
            "advanced": "@deva[लोट्] @deva[सि] → @deva[हि], explicitly @deva[अपित्] (overriding @deva[स्थानिवद्भाव] @ref[1.1.56] which would inherit @deva[पित्] from @deva[सिप्]). Being @deva[अपित्], @ref[1.2.4] assigns @deva[ङित्]-status, preventing @deva[गुण]. @deva[लुनीहि], @deva[पुनीहि], @deva[राध्नुहि], @deva[तक्ष्णुहि]."
        }
    },
    "34088": {
        "en": {
            "simple": "In the Vedas (@deva[छन्दस्]), the @deva[हि] substitute (for 2nd singular @deva[लोट्]) is optionally treated as @deva[अपित्]. This creates two forms: @deva[प्रीणाहि] (with @deva[गुण], as if @deva[पित्]) or @deva[प्रीणीहि] (without @deva[गुण], as @deva[अपित्]); @deva[युयोधि] (with @deva[गुण]) or @deva[युयुधि] (without). The @deva[धि] for @deva[हि] substitution occurs by @ref[6.4.103]. Vedic example: @deva[युयोध्यस्मज्जुहुराणमेनो] (Ṛg 1.189.1).",
            "standard": "In @deva[छन्दस्], @deva[हि]'s @deva[अपित्]-status is optional (@deva[वा]). With @deva[पित्]: @deva[गुण] occurs; with @deva[अपित्]: no @deva[गुण]. @deva[प्रीणाहि]/@deva[प्रीणीहि]; @deva[युयोधि]/@deva[युयुधि]. @deva[हि] → @deva[धि] by @ref[6.4.103]. Vedic citation: @deva[युयोध्यस्मज्जुहुराणमेनो] (Ṛg 1.189.1, Yajur 40.16).",
            "advanced": "@deva[छन्दस्]-@deva[विकल्प]: @deva[हि] optionally @deva[अपित्]. @deva[पित्] → @deva[गुण]; @deva[अपित्] → no @deva[गुण]. Forms: @deva[प्रीणाहि]/@deva[प्रीणीहि]; @deva[युयोधि]/@deva[युयुधि]. @deva[हि] → @deva[धि] by @ref[6.4.103]. Citation: @deva[अग्ने] @deva[नय] @deva[सुपथाराये]..@deva[युयोध्यस्मज्जुहुराणमेनो] (Ṛg 1.189.1)."
        }
    },
    "34089": {
        "en": {
            "simple": "In @deva[लोट्] (imperative), @deva[मि] (1st singular @deva[परस्मैपद]) is replaced by @deva[नि]. This overrides both the @deva[इ] → @deva[उ] change and any @deva[लोप] (deletion) rules. Examples: @deva[पचानि], @deva[पठानि].",
            "standard": "@deva[लोट्] @deva[मि] → @deva[नि], superseding @deva[इ] → @deva[उ] (@ref[3.4.86]) and @deva[लोप]-rules. @deva[पचानि], @deva[पठानि].",
            "advanced": "@deva[लोट्]: @deva[मि] → @deva[नि]. This @deva[आदेश] overrides @deva[इ] → @deva[उ] (@ref[3.4.86]) and @deva[लोप]. @deva[पचानि], @deva[पठानि]."
        }
    },
    "34090": {
        "en": {
            "simple": "In @deva[लोट्] (imperative), @deva[आम्] replaces what would otherwise become @deva[ए] (via @ref[3.4.79]) in the @deva[आत्मनेपद] 3rd person endings. So @deva[त], @deva[आताम्], @deva[झ] (which would become @deva[ते], @deva[आते], @deva[अन्ते]) instead become @deva[ताम्], @deva[आताम्], @deva[अन्ताम्]. Examples: @deva[पचताम्], @deva[पचेताम्], @deva[पचन्ताम्].",
            "standard": "In @deva[लोट्] @deva[आत्मनेपद], @deva[आम्] replaces what @ref[3.4.79] would make @deva[ए]. @deva[त] (→ @deva[ते]) → @deva[ताम्]; @deva[आताम्] (→ @deva[आते]) → @deva[आताम्]; @deva[झ] (→ @deva[अन्ते]) → @deva[अन्ताम्]. @deva[पचताम्], @deva[पचेताम्], @deva[पचन्ताम्].",
            "advanced": "@deva[लोट्] @deva[आत्मनेपद] 3rd: @deva[आम्] substitutes for @deva[ए] that @ref[3.4.79] would produce. @deva[त]/आताम्/@deva[झ] → @deva[ताम्]/@deva[आताम्]/@deva[अन्ताम्] (not @deva[ते]/@deva[आते]/@deva[अन्ते]). @deva[पचताम्], @deva[पचेताम्], @deva[पचन्ताम्]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.4.76-3.4.90 (Batch 6)")
