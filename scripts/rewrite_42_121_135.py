#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.2.121-4.2.135 (Batch 9 of 4.2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "42121": {
        "en": {
            "simple": "After @deva[वृद्ध] locality-names with penultimate @deva[य] or denoting a desert, @deva[वुञ्] is used. Examples: @deva[सांकाश्यकः], @deva[काम्पिल्यकः], @deva[पारेधन्वकः], @deva[ऐरावतकः].",
            "standard": "After @deva[वृद्ध] words denoting a locality which have @deva[य] as penultimate (@deva[उपधाय]), or after @deva[वृद्ध] words denoting a desert/waste (@deva[धन्व]), the affix @deva[वुञ्] comes in remaining senses. @deva[वृद्धात्] and @deva[देशे] are understood. @deva[उपधाय] examples: @deva[सांकाश्यकः], @deva[काम्पिल्यकः]. @deva[धन्व] examples: @deva[पारेधन्वकः], @deva[ऐरावतकः].",
            "advanced": "This sūtra provides @deva[वुञ्] for @deva[वृद्ध देश उपधाय] or @deva[वृद्ध धन्व]: @deva[सांकाश्यकः], @deva[काम्पिल्यकः] (उपधाय); @deva[पारेधन्वकः], @deva[ऐरावतकः] (धन्व)."
        }
    },
    "42122": {
        "en": {
            "simple": "After @deva[वृद्ध] locality-names ending in @deva[प्रस्थ], @deva[पुर], or @deva[वह], @deva[वुञ्] is used. Examples: @deva[मालाप्रस्थकः], @deva[नान्दीपुरकः], @deva[पैलुवहकः].",
            "standard": "After @deva[वृद्ध] words denoting a locality and ending in @deva[प्रस्थ], @deva[पुर], or @deva[वह], the affix @deva[वुञ्] comes in remaining senses (debarring @deva[छ] @ref[4.2.114]): @deva[मालाप्रस्थकः], @deva[नान्दीपुरकः], @deva[कान्तिपुरकः], @deva[पैलुवहकः], @deva[फाल्गुनीवहकः]. Note: @deva[पुर]-ending words would also take @deva[वुञ्] by @ref[4.2.123], but that's restricted to Eastern places; this sūtra is general.",
            "advanced": "This sūtra provides @deva[वुञ्] (debarring @deva[छ] @ref[4.2.114]) for @deva[वृद्ध देश] ending in @deva[प्रस्थ]/पुर/वह: @deva[मालाप्रस्थकः], @deva[नान्दीपुरकः], @deva[पैलुवहकः]. General scope (unlike @ref[4.2.123] for प्राच्य)."
        }
    },
    "42123": {
        "en": {
            "simple": "After @deva[वृद्ध] Eastern locality-names with penultimate @deva[र] or ending in @deva[ई], @deva[वुञ्] is used. Examples: @deva[पाटलिपुत्रकाः], @deva[ऐकचक्रकाः], @deva[काकन्दकः], @deva[माकन्दकः].",
            "standard": "After @deva[वृद्ध] words denoting Eastern (@deva[प्राच्य]) localities which have penultimate @deva[र] (@deva[उपधार]) or end in @deva[ई] (@deva[ईत्]), the affix @deva[वुञ्] comes in remaining senses (debarring @deva[छ]): @deva[पाटलिपुत्रकाः], @deva[ऐकचक्रकाः] (penultimate @deva[र]); @deva[काकन्दकः], @deva[माकन्दकः] (@ref[6.4.148], from @deva[काकन्दी], @deva[माकन्दी]—@deva[ई]-ending). Why Eastern? For non-Eastern: @deva[दात्तामित्रीयः] (by @deva[छ]). The @deva[त्] in @deva[ईत्] indicates @deva[इत्]-marker.",
            "advanced": "This sūtra provides @deva[वुञ्] (debarring @deva[छ]) for @deva[वृद्ध प्राच्य-देश उपधार]/ईत्: @deva[पाटलिपुत्रकाः] (उपधार), @deva[काकन्दकः] (ईत्, @ref[6.4.148]). Non-प्राच्य: @deva[दात्तामित्रीयः] (@deva[छ])."
        }
    },
    "42124": {
        "en": {
            "simple": "After @deva[वृद्ध] words denoting an inhabited country (@deva[जनपद]) or its boundary, @deva[वुञ्] is used. Examples: @deva[आभिसारकः], @deva[आदर्शकः] (inhabited); @deva[औपुष्टकः], @deva[श्यामायनकः] (boundary).",
            "standard": "After @deva[वृद्ध] words denoting an inhabited kingdom (@deva[जनपद]) or the boundary of such a kingdom (@deva[जनपदावधि]), the affix @deva[वुञ्] comes in remaining senses (debarring @deva[छ]). @deva[वृद्धात्] and @deva[देशे] are understood. @deva[जनपद] examples: @deva[आभिसारकः], @deva[आदर्शकः]. @deva[जनपदावधि] examples: @deva[औपुष्टकः], @deva[श्यामायनकः] (from uninhabited border regions @deva[औपुष्ट], @deva[श्यामायन]).",
            "advanced": "This sūtra provides @deva[वुञ्] (debarring @deva[छ]) for @deva[वृद्ध जनपद]/जनपदावधि: @deva[आभिसारकः], @deva[आदर्शकः] (जनपद); @deva[औपुष्टकः], @deva[श्यामायनकः] (अवधि)."
        }
    },
    "42125": {
        "en": {
            "simple": "After always-plural country-words (whether @deva[वृद्ध] or not), @deva[वुञ्] is used. Examples: @deva[आङ्गकः], @deva[वाङ्गकः], @deva[कालिङ्गकः] (from @deva[अङ्गाः], @deva[वङ्गाः], @deva[कलिङ्गाः]).",
            "standard": "After words that are always plural (@deva[नित्यबहुवचन]) and denote an inhabited country (@deva[जनपद]) or its boundary—even if NOT @deva[वृद्ध]—the affix @deva[वुञ्] comes in remaining senses (debarring @deva[छ] and @deva[अण्]). @deva[जनपद] and @deva[तदवधि] are understood. Examples: @deva[आङ्गकः], @deva[वाङ्गकः], @deva[कालिङ्गकः] (from non-@deva[वृद्ध] always-plural words @deva[अङ्गाः], @deva[वङ्गाः], @deva[कलिङ्गाः]).",
            "advanced": "This sūtra provides @deva[वुञ्] (debarring @deva[छ]/अण्) for @deva[नित्यबहुवचन जनपद]/अवधि (even non-वृद्ध): @deva[आङ्गकः], @deva[वाङ्गकः], @deva[कालिङ्गकः]."
        }
    },
    "42126": {
        "en": {
            "simple": "After locality-names (whether @deva[वृद्ध] or not) ending in @deva[कच्छ], @deva[अग्नि], @deva[वक्त्र], @deva[गर्त], @deva[वुञ्] is used. Examples: @deva[दारुकच्छकः], @deva[काण्डाग्नकः], @deva[ऐन्द्रवक्त्रकः], @deva[बाहुगर्तकः].",
            "standard": "After words denoting a locality (whether @deva[वृद्ध] or not) whose second member (@deva[उत्तरपद]) is @deva[कच्छ], @deva[अग्नि], @deva[वक्त्र], or @deva[गर्त], the affix @deva[वुञ्] comes in remaining senses (debarring @deva[छ] and @deva[अण्]): @deva[दारुकच्छकः], @deva[पैप्पलीकच्छकः]; @deva[काण्डाग्नकः], @deva[वैभुजाग्नकः]; @deva[ऐन्द्रवक्त्रकः], @deva[सैन्धुवक्त्रकः]; @deva[बाहुगर्तकः], @deva[चाक्रगर्तकः]. @deva[उत्तरपद] applies to each word in the list.",
            "advanced": "This sūtra provides @deva[वुञ्] (debarring @deva[छ]/अण्) for @deva[देश उत्तरपद] = @deva[कच्छ]/अग्नि/वक्त्र/गर्त: @deva[दारुकच्छकः], @deva[काण्डाग्नकः], @deva[ऐन्द्रवक्त्रकः], @deva[बाहुगर्तकः]."
        }
    },
    "42127": {
        "en": {
            "simple": "After @deva[धूम] etc. (denoting country), @deva[वुञ्] is used. Examples: @deva[धौमकः], @deva[खाण्डकः].",
            "standard": "After @deva[धूमादि] words denoting country, the affix @deva[वुञ्] comes in remaining senses (debarring @deva[अण्] etc.): @deva[धौमकः], @deva[खाण्डकः]. Note: @deva[पाथेय] is in this list but would already take @deva[वुञ्] by @ref[4.2.121] (penultimate @deva[य]); its inclusion shows @deva[वुञ्] applies even when NOT denoting a locality. Similarly @deva[विदेह] and @deva[आनर्त] (being @deva[जनपद] names) would take @deva[वुञ्] by @ref[4.2.124].",
            "advanced": "This sūtra provides @deva[वुञ्] (debarring @deva[अण्]) for @deva[धूमादि देश]: @deva[धौमकः], @deva[खाण्डकः]. @deva[पाथेय] included shows non-देश also; @deva[विदेह]/आनर्त = जनपद per @ref[4.2.124]."
        }
    },
    "42128": {
        "en": {
            "simple": "After @deva[नगर] (city), @deva[वुञ्] is used when censure or skill is implied. Example: @deva[नागरकः] (knave/cunning person/skillful person).",
            "standard": "After @deva[नगर] (city), the affix @deva[वुञ्] comes in remaining senses when the meaning implies censure (@deva[कुत्सन]) or dexterity/skill (@deva[प्रावीण्य]): @deva[नागरकः] = 'a town-bred person' → 'knave, cunning person' (censure) or 'skillful, sophisticated person' (praise). The word literally means 'city-born' but idiomatically denotes either vices or virtues of city life.",
            "advanced": "This sūtra provides @deva[वुञ्] for @deva[नगर] in @deva[कुत्सन]/प्रावीण्य sense: @deva[नागरकः] = knave (कुत्सन) or skilled (प्रावीण्य)."
        }
    },
    "42129": {
        "en": {
            "simple": "After @deva[अरण्य] (forest), @deva[वुञ्] is used when meaning 'a man'. Example: @deva[आरण्यकः मनुष्यः] (forester).",
            "standard": "After @deva[अरण्य] (forest), the affix @deva[वुञ्] comes in remaining senses when the meaning is 'a man' (debarring @deva[अण्]): @deva[आरण्यकः मनुष्यः] (a forester). Vārtika: @deva[वुञ्] also applies in the sense of 'way', 'lesson/doctrine' (Upaniṣad), 'maxim', 'game', 'man', or 'elephant': @deva[आरण्यकः पन्थाः] (forest-path), @deva[आरण्यकः अध्यायः] (Āraṇyaka text), @deva[आरण्यकः न्यायः], @deva[आरण्यकः विहारः], @deva[आरण्यकः मनुष्यः/हस्ती].",
            "advanced": "This sūtra provides @deva[वुञ्] (debarring @deva[अण्]) for @deva[अरण्य] in मनुष्य-sense: @deva[आरण्यकः]. Vārtika: also पन्थाः/अध्यायः/न्यायः/विहारः/मनुष्यः/हस्ती."
        }
    },
    "42130": {
        "en": {
            "simple": "After @deva[कुरु] and @deva[युगन्धर], @deva[वुञ्] is optional. Examples: @deva[कौरवकः] or @deva[कौरवः], @deva[यौगन्धरकः] or @deva[यौगन्धरः].",
            "standard": "After @deva[कुरु] and @deva[युगन्धर], the affix @deva[वुञ्] comes optionally in remaining senses: @deva[कौरवकः] (@deva[वुञ्]) or @deva[कौरव॑ः] (other affix); @deva[यौगन्धरकः] or @deva[यौगन्धर॑ः]. These words denote @deva[जनपद] (inhabited countries), so @ref[4.2.125] would mandate @deva[वुञ्]; this sūtra makes it optional. Note: @deva[कुरु] also occurs in @deva[कच्छादि] class @ref[4.2.133].",
            "advanced": "This sūtra provides optional @deva[वुञ्] for @deva[कुरु]/युगन्धर: @deva[कौरवकः]/कौरवः, @deva[यौगन्धरकः]/यौगन्धरः. @ref[4.2.125] would mandate वुञ्; this makes optional. @deva[कुरु] in @deva[कच्छादि] @ref[4.2.133]."
        }
    },
    "42131": {
        "en": {
            "simple": "After @deva[मद्र] and @deva[वृजि], @deva[कन्] (not @deva[वुञ्]) is used. Examples: @deva[म॑द्रकः], @deva[वृ॑जिकः].",
            "standard": "After @deva[मद्र] and @deva[वृजि], the affix @deva[कन्] comes in remaining senses (debarring @deva[वुञ्], though these denote inhabited countries): @deva[म॑द्रकः] (born in Madra), @deva[वृ॑जिकः]. The accent mark shows @deva[आद्युदात्त].",
            "advanced": "This sūtra provides @deva[कन्] (debarring @deva[वुञ्]) for @deva[मद्र]/वृजि: @deva[मद्रकः], @deva[वृजिकः] (both @deva[आद्युदात्त])."
        }
    },
    "42132": {
        "en": {
            "simple": "After locality-names with penultimate @deva[क्], @deva[अण्] is used. Examples: @deva[आर्षिकः] (born in Ṛṣikā), @deva[माहिषिकः].",
            "standard": "After words denoting a place and having @deva[क्] as penultimate (@deva[उपधाक्]), the affix @deva[अण्] comes in remaining senses (debarring @deva[वुञ्] for @deva[जनपद] words): @deva[आर्षिकः] (born in @deva[ऋषिकाः]), @deva[माहिषिकः]. @deva[अण्] applies even when the word ends in @deva[उ] (which would otherwise take @deva[ठञ्]).",
            "advanced": "This sūtra provides @deva[अण्] (debarring @deva[वुञ्] for जनपद) for @deva[उपधाक् देश]: @deva[आर्षिकः], @deva[माहिषिकः]. Overrides उकारान्त ठञ्."
        }
    },
    "42133": {
        "en": {
            "simple": "After @deva[कच्छ] etc. (place-names), @deva[अण्] is used. Examples: @deva[काच्छः], @deva[सैन्धवः], @deva[वार्णवः].",
            "standard": "After @deva[कच्छादि] words denoting places, the affix @deva[अण्] comes in remaining senses (debarring @deva[वुञ्] etc.): @deva[काच्छः], @deva[सैन्धवः], @deva[वार्णवः]. @deva[देशे] is understood. @deva[कच्छादि] words are NOT invariable plurals (unlike @ref[4.2.125]), because @ref[4.2.134] shows they can signify humans and their habits. @deva[विजापक] in this list would also take @deva[अण्] by @ref[4.2.132] (penultimate @deva[क्]).",
            "advanced": "This sūtra provides @deva[अण्] (debarring @deva[वुञ्]) for @deva[कच्छादि देश]: @deva[काच्छः], @deva[सैन्धवः], @deva[वार्णवः]. Not नित्यबहुवचन (cf. @ref[4.2.134]). @deva[विजापक] also by @ref[4.2.132]."
        }
    },
    "42134": {
        "en": {
            "simple": "After @deva[कच्छ] etc., @deva[वुञ्] is used when meaning 'a man' or 'human attribute'. Examples: @deva[काच्छकः मनुष्यः], @deva[काच्छकं हसितम्] (Kutch-style laughter), @deva[काच्छिका चूडा].",
            "standard": "After @deva[कच्छादि] words, the affix @deva[वुञ्] comes in 'born etc.' senses when the meaning is 'a man' or 'what exists in a man' (debarring @deva[अण्]): @deva[काच्छकः] (a man from Kutch); @deva[काच्छकमस्य हसितं जल्पितम्] (his laughter/talk is Kutch-style); @deva[काच्छिका चूडा] (Kutch-style hair-tuft). Similarly @deva[सैन्धवको मनुष्यः], @deva[सैन्धवकं हसितम्], @deva[सैन्धविका चूडा].",
            "advanced": "This sūtra provides @deva[वुञ्] (debarring @deva[अण्]) for @deva[कच्छादि] when मनुष्य/मनुष्यवृत्ति: @deva[काच्छकः], @deva[काच्छकं हसितम्], @deva[काच्छिका चूडा]."
        }
    },
    "42135": {
        "en": {
            "simple": "After @deva[साल्व], @deva[वुञ्] is used for 'man/human attribute' EXCEPT when meaning 'foot-soldier'. Examples: @deva[साल्वको मनुष्यः], but @deva[साल्वः पत्तिः] (Sālva foot-soldier).",
            "standard": "After @deva[साल्व] (in @deva[कच्छादि] class), the affix @deva[वुञ्] comes in 'born etc.' senses when meaning 'a man' or 'human attribute', PROVIDED it doesn't mean a foot-soldier (@deva[पत्ति]): @deva[साल्वको मनुष्यः] (man from Sālva); @deva[साल्वकमस्य हसितं जल्पितम्] (Sālva-style talk). But for foot-soldier: @deva[साल्वः पत्तिः] (Sālva foot-soldier—by @deva[अण्], not @deva[वुञ्]). This restricts @ref[4.2.134].",
            "advanced": "This sūtra restricts @ref[4.2.134] for @deva[साल्व]: @deva[वुञ्] for मनुष्य/मनुष्यवृत्ति (@deva[साल्वकः]), but NOT for पत्ति (@deva[साल्वः पत्तिः] by अण्)."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.2.121-4.2.135 (Batch 9 of 4.2)")
