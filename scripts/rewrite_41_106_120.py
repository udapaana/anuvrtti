#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.106-4.1.120 (Batch 8 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41106": {
        "en": {
            "simple": "The words @deva[मधु] and @deva[बभ्रु] take @deva[यञ्] for @deva[गोत्र] meaning when they specifically denote @deva[ब्राह्मण] and @deva[कौशिक] respectively. Examples: @deva[माधव्यः] (Brāhmaṇa), @deva[बाभ्रव्यः] (Kauśika).",
            "standard": "This sūtra restricts when @deva[मधु] and @deva[बभ्रु] take @deva[यञ्]: @deva[मधु] + @deva[यञ्] = @deva[माधव्यः] only when meaning @deva[ब्राह्मण], otherwise @deva[माधवः] (by @deva[अण्]); @deva[बभ्रु] + @deva[यञ्] = @deva[बाभ्रव्यः] only when meaning @deva[कौशिक], otherwise @deva[बाभ्रवः]. The word @deva[बभ्रु] also appears in @deva[गर्गादि] (@ref[4.1.105]); this sūtra specifies when @deva[यञ्] applies. Its inclusion in @deva[लोहितादि] subclass allows @deva[ष्फ] for feminine: @deva[बाभ्रव्यायणी].",
            "advanced": "This @deva[नियमसूत्र] restricts @deva[यञ्] for @deva[मधु]/बभ्रु: @deva[माधव्यः] = @deva[ब्राह्मणः] (else @deva[माधवः]); @deva[बाभ्रव्यः] = @deva[कौशिकः] (else @deva[बाभ्रवः]). @deva[बभ्रु] ∈ @deva[गर्गादि] takes @deva[यञ्] by @ref[4.1.105] anyway; this sūtra specifies @deva[कौशिक]-condition. Being ∈ @deva[लोहितादि] enables @ref[4.1.18] for feminine @deva[ष्फ]: @deva[बाभ्रव्यायणी]. Better gaṇapāṭha reading: @deva[बभ्रु कौशिके]."
        }
    },
    "41107": {
        "en": {
            "simple": "The words @deva[कपि] and @deva[बोध] take @deva[यञ्] for @deva[गोत्र] meaning when they specifically denote descendants of the @deva[अङ्गिरस्] family. Examples: @deva[काप्यः], @deva[बौध्यः].",
            "standard": "After @deva[कपि] and @deva[बोध], @deva[यञ्] applies only for @deva[आङ्गिरस] (@deva[अङ्गिरस्] family) descendants: @deva[कपि] + @deva[यञ्] = @deva[काप्यः] (Āṅgirasa descendant). Otherwise: @deva[कापेयः] (by @deva[ढक्] @ref[4.1.122]); @deva[बौधिः] (by @deva[इञ्], since @deva[बोध] ∈ @deva[बह्वादि] @ref[4.1.96]). The word @deva[कपि] appears in @deva[गर्गादि] class; this sūtra restricts @deva[यञ्] to @deva[आङ्गिरस] context. Being ∈ @deva[गर्गादि] enables @ref[4.1.18]: @deva[काप्यायनी].",
            "advanced": "This @deva[नियमसूत्र] restricts @deva[यञ्] for @deva[कपि]/बोध to @deva[आङ्गिरस]-descendants: @deva[काप्यः], @deva[बौध्यः]. Non-Āṅgirasa: @deva[कापेयः] (@deva[ढक्] @ref[4.1.122]); @deva[बौधिः] (@deva[इञ्], @deva[बोध] ∈ @deva[बह्वादि] @ref[4.1.96] or as @deva[अनृषि]). @deva[कपि] ∈ @deva[गर्गादि] for @ref[4.1.18] application: @deva[काप्यायनी]."
        }
    },
    "41108": {
        "en": {
            "simple": "The word @deva[वतण्ड] takes @deva[यञ्] for @deva[गोत्र] meaning when it specifically denotes a descendant of @deva[अङ्गिरस्]. Example: @deva[वातण्ड्यः] (Āṅgirasa).",
            "standard": "After @deva[वतण्ड], @deva[यञ्] applies only for @deva[आङ्गिरस] descendants: @deva[वतण्ड] + @deva[यञ्] = @deva[वातण्ड्यः]. Otherwise @deva[वातण्डः] (by @deva[अण्] from @deva[शिवादि] @ref[4.1.112]). The word @deva[वतण्ड] appears in both @deva[गर्गादि] (@ref[4.1.105]) and @deva[शिवादि] (@ref[4.1.112])—this sūtra specifies that when meaning @deva[आङ्गिरस], @deva[यञ्] overrides @deva[अण्]. When not meaning @deva[आङ्गिरस], both @deva[वातंड्यः] and @deva[वातंडः] are possible.",
            "advanced": "This sūtra provides @deva[यञ्] for @deva[वतण्ड] specifically in @deva[आङ्गिरस] context: @deva[वातण्ड्यः]. @deva[वतण्ड] ∈ @deva[गर्गादि] (@ref[4.1.105]) and @deva[शिवादि] (@ref[4.1.112]), so would take @deva[अञ्] or @deva[अण्]. This sūtra: @deva[आङ्गिरस] → only @deva[यञ्]; non-Āṅgirasa → both @deva[वातंड्यः] (@deva[यञ्]) and @deva[वातंडः] (@deva[अण्])."
        }
    },
    "41109": {
        "en": {
            "simple": "In the feminine, @deva[यञ्] is elided after @deva[वतण्ड] when denoting a female descendant of @deva[अङ्गिरस्]. The feminine is @deva[वतण्डी].",
            "standard": "When forming the feminine of @deva[वातण्ड्य] (Āṅgirasa descendant), @deva[यञ्] is elided by @deva[लुक्], and @deva[ङीन्] (@ref[4.1.73]) is added: @deva[वातण्ड्य] → @deva[वतण्ड] + @deva[ङीन्] = @deva[वतण्डी]. When not meaning @deva[आङ्गिरस], the feminine is @deva[वातंड्यायनी] (by @deva[ष्फ] under @deva[लोहितादि] @ref[4.1.18]). When @deva[वतण्ड] takes @deva[अण्] from @deva[शिवादि], feminine = @deva[वातण्डी] (no @deva[ष्यङ्] substitution @ref[4.1.78] since @deva[वतण्ड] is a @deva[ऋषि] name).",
            "advanced": "This sūtra elides @deva[यञ्] by @deva[लुक्] in feminine for @deva[वातण्ड्य] (Āṅgirasa): @deva[वातण्ड्य] + @deva[ङीन्] (@ref[4.1.73]) = @deva[वतण्डी]. Non-Āṅgirasa: @deva[वातंड्यायनी] (@deva[ष्फ] @ref[4.1.18]). @deva[अण्]-formed @deva[वातण्ड]: feminine @deva[वातण्डी] (no @deva[ष्यङ्] @ref[4.1.78]—@deva[ऋषिशब्द])."
        }
    },
    "41110": {
        "en": {
            "simple": "The @deva[अश्व] class words take @deva[फञ्] for @deva[गोत्र] meaning. Example: @deva[आश्वायनः] (gotra descendant of Aśva).",
            "standard": "After @deva[अश्वादि] words, @deva[फञ्] is used for @deva[गोत्र] descendants. @deva[अश्व] + @deva[फञ्] = @deva[आश्वायनः] (@deva[फ्] → @deva[आयन्] by @ref[7.1.2], @deva[वृद्धि] by @ref[7.2.117]). Similarly @deva[आश्मायनः]. Some words in this list already bear a patronymic affix (@deva[आत्रेय], @deva[वैल्य], @deva[आनडुह्य])—for these, @deva[फञ्] functions as @deva[युवन्]. Special conditions: @deva[शय] → @deva[शायायनः] only when @deva[आत्रेय], else @deva[शायिः]/@deva[शायः]; @deva[जात] → @deva[जातायनः] for male's offspring, @deva[जातेयः] for female's (@deva[ढक्]); @deva[आत्रेय] → @deva[आत्रेयायनः] when @deva[भारद्वाज], else @deva[आत्रेयः] (@deva[इञ्] elided by @ref[2.4.58]).",
            "advanced": "This sūtra provides @deva[फञ्] for @deva[अश्वादि] in @deva[गोत्रार्थ]. @deva[आश्वायनः], @deva[आश्मायनः]. @deva[आत्रेय]/वैल्य/आनडुह्य already bear @deva[गोत्र]-affixes, so @deva[फञ्] = @deva[युवन्]. Conditions: @deva[शय आत्रेये] → @deva[शायायनः], else @deva[शायिः]/@deva[शायः]; @deva[जात पुंसि] → @deva[जातायनः], @deva[जाताया अपत्यम्] → @deva[जातेयः] (@deva[ढक्]); @deva[आत्रेय भरद्वाजे] → @deva[आत्रेयायनः], else @deva[आत्रेयः] (@deva[इञ्]-@deva[लुक्] @ref[2.4.58]); @deva[भरद्वाज आत्रेये] (adoption case) → @deva[भारद्वाजायनः], else @deva[भारद्वाजः] (@deva[अञ्] @ref[4.1.104]). 81-word list includes @deva[अश्व], @deva[अश्मन्], @deva[शंख], @deva[विद], @deva[रोहिण], @deva[बस्त], @deva[भडिल], @deva[काश], @deva[अर्क], @deva[चक्र], @deva[गोमिन्], @deva[श्याम], @deva[धूम], @deva[वाग्मिन्], @deva[विशंप], @deva[गिरि], @deva[दासक], @deva[वैल्य], @deva[अर्जुन], @deva[सुमनस्], @deva[नम], @deva[आत्रेय], @deva[भरद्वाज], @deva[उत्स], @deva[कितव], @deva[शिव], @deva[खदिर], @deva[नड], etc."
        }
    },
    "41111": {
        "en": {
            "simple": "The word @deva[भर्ग] takes @deva[फञ्] for @deva[गोत्र] meaning when it denotes a @deva[त्रैगर्त] descendant. Example: @deva[भर्गायणः] = @deva[त्रैगर्तः].",
            "standard": "After @deva[भर्ग], @deva[फञ्] applies only when denoting @deva[त्रैगर्त] (@deva[त्रिगर्त] family): @deva[भर्ग] + @deva[फञ्] = @deva[भर्गायणः] = @deva[त्रैगर्तः]. Otherwise @deva[भार्गिः] (by @deva[इञ्] @ref[4.1.95]). This restricts @deva[फञ्] to a specific clan context.",
            "advanced": "This @deva[नियमसूत्र] restricts @deva[फञ्] for @deva[भर्ग] to @deva[त्रैगर्त]-context: @deva[भर्गायणः] = @deva[त्रैगर्तः]. Non-Traigarta: @deva[भार्गिः] (@deva[इञ्] @ref[4.1.95])."
        }
    },
    "41112": {
        "en": {
            "simple": "The @deva[शिव] class words take @deva[अण्] for descendant meaning (not restricted to @deva[गोत्र]). Example: @deva[शैवः] (descendant of Śiva).",
            "standard": "After @deva[शिवादि] words, @deva[अण्] (not @deva[इञ्]) is used for general descendant meaning. The @deva[गोत्र] restriction from @ref[4.1.98] does not extend here. @deva[शिव] + @deva[अण्] = @deva[शैवः], @deva[प्रौष्ठः]. Special cases: @deva[तक्षन्] ('carpenter') ∈ @deva[शिवादि] prevents @deva[इञ्] (@ref[4.1.153]), but not @deva[ण्य] (@ref[4.1.152]): @deva[ताक्ष्णः] (by @deva[अण्]) or @deva[ताक्ष्ण्यः] (by @deva[ण्य]); @deva[गंगा] appears in @deva[शिवादि], @deva[शुभ्रादि] (@ref[4.1.123]), and @deva[तिकादि] (@ref[4.1.154]): @deva[गांगः], @deva[गांगायनिः], @deva[गांगेयः]; @deva[विपाशा] ∈ @deva[शिवादि] and @deva[कुञ्जादि] (@ref[4.1.98]): @deva[वैपाशः] or @deva[वैपाशायन्यः]. Vārtika: river names of two syllables take @deva[अण्]; @deva[त्रिवेणी] → @deva[त्रैवेणः]/त्रिवणः. This is an @deva[आकृतिगण] with 92 words.",
            "advanced": "This sūtra provides @deva[अण्] for @deva[शिवादि] (debarring @deva[इञ्]) without @deva[गोत्र] restriction (@ref[4.1.98] @deva[anuवृत्ति] excluded). @deva[शैवः], @deva[प्रौष्ठः]. @deva[तक्षन्]: @deva[ताक्ष्णः] (@deva[अण्]—@deva[अ]-@deva[लोप] @ref[6.4.134]) or @deva[ताक्ष्ण्यः] (@deva[ण्य] @ref[4.1.152]—not blocked). @deva[गंगा] ∈ three classes: @deva[गांगः] (here), @deva[गांगायनिः] (@ref[4.1.154]), @deva[गांगेयः] (@ref[4.1.123]). @deva[विपाशा] ∈ @deva[शिवादि] and @deva[कुञ्जादि]: @deva[वैपाशः]/वैपाशायन्यः. Vārtika: @deva[द्व्यचो नद्याः] rivers take @deva[अण्] (blocking @deva[ढक्] @ref[4.1.121]); @deva[त्रिवेणी त्रिवणं च]. @deva[आकृतिगण], 92 words: @deva[शिव], @deva[प्रोष्ठ], @deva[चण्ड], @deva[जम्भ], @deva[भूरि], @deva[दण्ड], @deva[कुठार], @deva[सुख], @deva[संधि], @deva[मुनि], @deva[ककुत्स्थ], @deva[कहोड], @deva[रोध], @deva[वतण्ड], @deva[हैहय], @deva[गंगा], @deva[विपाश], @deva[यस्क], @deva[द्रुह्य], @deva[भूमि], @deva[इला], @deva[सपत्नी], etc."
        }
    },
    "41113": {
        "en": {
            "simple": "When words are names of rivers or women and do not have @deva[वृद्धि] in the first syllable, they take @deva[अण्] for descendant meaning. Examples: @deva[यामुनः], @deva[शैक्षितः].",
            "standard": "After @deva[अवृद्ध] (non-@deva[वृद्धि]-initial) words that are proper names of rivers or women, @deva[अण्] is used for descendant meaning. River names: @deva[यमुना] → @deva[यामुनः], @deva[इरावती] → @deva[ऐरावतः], @deva[वितस्ता] → @deva[वैतस्तः], @deva[नर्मदा] → @deva[नार्मदः]. Women's names: @deva[शिक्षिता] → @deva[शैक्षितः], @deva[चिन्तिता] → @deva[चैन्तितः]. Conditions: (1) word must not have @deva[वृद्धि] in first syllable—@deva[चन्द्रभागा] (वृद्ध) → @deva[चान्द्रभागेयः] by @deva[ढक्] (@ref[4.1.120]); (2) must be proper name—@deva[शोभनाया अपत्यम्] (adj.) → @deva[शौभनेयः]. This debars @deva[ढक्] (@ref[4.1.120]).",
            "advanced": "This sūtra provides @deva[अण्] for @deva[अवृद्ध] (non-@deva[वृद्धि]-initial per @ref[1.1.73]) @deva[संज्ञाशब्द] (proper names) of @deva[नदी]/मानुषी. Rivers: @deva[यामुनः], @deva[ऐरावतः], @deva[वैतस्तः], @deva[नार्मदः]. Women: @deva[शैक्षितः], @deva[चैन्तितः]. Exclusions: @deva[वृद्ध]—@deva[चान्द्रभागेयः], @deva[वासवदत्तेयः] (@deva[ढक्] @ref[4.1.120]); non-@deva[नदी]/मानुषी—@deva[सौपर्णेयः], @deva[वैनतेयः]; non-@deva[संज्ञा] (adjective)—@deva[शौभनेयः]. This debars @deva[ढक्] @ref[4.1.120]."
        }
    },
    "41114": {
        "en": {
            "simple": "After @deva[ऋषि] names or names of persons from @deva[अन्धक], @deva[वृष्णि], or @deva[कुरु] families, @deva[अण्] is used for descendant meaning. Examples: @deva[वासिष्ठः], @deva[वैश्वामित्रः], @deva[वासुदेवः].",
            "standard": "After names of @deva[ऋषि]-s (sages like @deva[वसिष्ठ], @deva[विश्वामित्र]) or names of persons from @deva[अन्धक], @deva[वृष्णि], @deva[कुरु] clans, @deva[अण्] (not @deva[इञ्]) is used for descendant meaning. @deva[ऋषि]-s: @deva[वासिष्ठः], @deva[वैश्वामित्रः]. @deva[अन्धक] family: @deva[श्वाफल्कः], @deva[रान्धसः]. @deva[वृष्णि] family: @deva[वासुदेवः], @deva[आनुरुद्धः]. @deva[कुरु] family: @deva[नकुलः], @deva[साहदेवः]. Exception by @ref[1.4.2]: @deva[अत्रि] (ऋषि) → @deva[आत्रेयः] (by @deva[ढक्] @ref[4.1.122], not @deva[अण्]); @deva[उग्रसेन] (अन्धक) → @deva[औग्रसेन्यः] (by @deva[ण्य] @ref[4.1.152]); @deva[वैष्वकसेन] (वृष्णि) → @deva[वैष्वकसेन्यः]; @deva[भीमसेन] (कुरु) → @deva[भैमसेन्यः].",
            "advanced": "This sūtra provides @deva[अण्] (debarring @deva[इञ्]) for @deva[ऋषिशब्द] and @deva[अन्धक]/वृष्णि/कुरु family names. @deva[वासिष्ठः], @deva[वैश्वामित्रः]; @deva[श्वाफल्कः] (अन्धक); @deva[वासुदेवः] (वृष्णि); @deva[नकुलः] (कुरु). @ref[1.4.2] (@deva[विप्रतिषेधे परं कार्यम्]) exceptions: @deva[अत्रि] → @deva[आत्रेयः] (@deva[ढक्] @ref[4.1.122]); @deva[उग्रसेन]/वैष्वकसेन/भीमसेन → @deva[ण्य] @ref[4.1.152]. Note: words are eternal (@deva[नित्य]); family designations are conventional classifications, not causal conditions for rule application. Some hold families themselves are eternal; alternatively, @deva[शक]-designation analogy applies."
        }
    },
    "41115": {
        "en": {
            "simple": "After @deva[मातृ] preceded by a numeral or by @deva[सम्]/भद्र, @deva[अण्] is used and @deva[उ] replaces final @deva[ऋ]. Example: @deva[द्वैमातुरः] (son of two mothers).",
            "standard": "After @deva[मातृ] (mother) preceded by numerals (@deva[द्वि], @deva[षट्]) or by @deva[सम्]/भद्र, @deva[अण्] is used with @deva[उ] substituting for final @deva[ऋ]: @deva[द्विमातृ] + @deva[अण्] = @deva[द्वैमात्] + @deva[उ] + @deva[अ] (@deva[र्] by @ref[1.1.51]) = @deva[द्वैमातुरः] (son of two mothers—one birth mother, one adoptive). Similarly @deva[षाण्मातुरः], @deva[सांमातुरः], @deva[भाद्रमातुरः]. The sūtra uses feminine @deva[पूर्वायाः] to indicate the rule applies only when @deva[मातृ] means 'mother' (female). Counter-example: @deva[संमातृ] (one who measures together) → @deva[सांमात्रः] (no @deva[उ]-substitution); @deva[धान्यमातृ] (barley measurer) likewise unaffected.",
            "advanced": "This sūtra provides @deva[अण्] with @deva[उ]-@deva[आदेश] for @deva[ऋ] after @deva[सङ्ख्या]/सम्/भद्र-preceded @deva[मातृ]: @deva[द्वैमातुरः], @deva[षाण्मातुरः], @deva[सांमातुरः], @deva[भाद्रमातुरः]. The @deva[पूर्वायाः] (feminine ablative) indicates @deva[मातृ] must denote female—@deva[संमातृ] (measure-together) → @deva[सांमात्रः]; @deva[धान्यमातृ] → unaffected. @deva[वैमात्रेयः] is formed by @ref[4.1.123] (@deva[शुभ्रादि] membership)."
        }
    },
    "41116": {
        "en": {
            "simple": "After @deva[कन्या], @deva[अण्] is used for descendant meaning, with @deva[कनीन] substituting for @deva[कन्या]. Example: @deva[कानीनः] (son of a virgin—like Karṇa or Vyāsa).",
            "standard": "After @deva[कन्या] (virgin/unmarried girl), @deva[अण्] applies with the substitute @deva[कनीन]: @deva[कन्या] + @deva[अण्] → @deva[कनीन] + @deva[अण्] = @deva[कानीनः] (son of a virgin). This debars @deva[ढक्] (@ref[4.1.121]). A @deva[कानीन] is born through immaculate conception—examples: Karṇa (son of Kuntī), Vyāsa (son of Satyavatī). The term @deva[कन्या] refers to a woman who retains her virginity even after union, through divine grace.",
            "advanced": "This sūtra provides @deva[अण्] with @deva[कनीन]-@deva[आदेश] for @deva[कन्या], debarring @deva[ढक्] @ref[4.1.121]: @deva[कानीनः]. A @deva[कानीन] is conceived through @deva[मुनिदेवतामाहात्म्य]—@deva[पुंयोगेऽपि न कन्यात्वं जहाति]: Kuntī, Satyavatī. Alternative: @deva[कान्यायनेयः] by @deva[ढक्] for regular patronymic."
        }
    },
    "41117": {
        "en": {
            "simple": "The words @deva[विकर्ण], @deva[शुङ्ग], @deva[छगल] take @deva[अण्] when meaning @deva[वात्स], @deva[भारद्वाज], @deva[आत्रेय] respectively. Examples: @deva[वैकर्णः] = @deva[वात्सः], @deva[शौङ्गः] = @deva[भारद्वाजः].",
            "standard": "Three words take @deva[अण्] with specific clan meanings: @deva[विकर्ण] → @deva[वैकर्णः] = @deva[वात्सः] (Vatsa descendant), otherwise @deva[वैकर्णिः] (by @deva[इञ्]); @deva[शुङ्ग] → @deva[शौङ्गः] = @deva[भारद्वाजः], otherwise @deva[शौङ्गिः]; @deva[छगल] → @deva[छागलः] = @deva[आत्रेयः], otherwise @deva[छागलिः]. Variant reading: @deva[शुङ्गा] (feminine) → non-Bhāradvāja form @deva[शौङ्गेयः] (by @deva[ढक्] @ref[4.1.120]).",
            "advanced": "This sūtra provides @deva[अण्] for @deva[विकर्ण]/शुङ्ग/छगल with clan-specific meanings: @deva[वैकर्णः] = @deva[वात्सः] (else @deva[वैकर्णिः]); @deva[शौङ्गः] = @deva[भारद्वाजः] (else @deva[शौङ्गिः]); @deva[छागलः] = @deva[आत्रेयः] (else @deva[छागलिः]). Variant @deva[शुङ्गा] (feminine): non-Bhāradvāja → @deva[शौङ्गेयः] (@deva[ढक्] @ref[4.1.120])."
        }
    },
    "41118": {
        "en": {
            "simple": "After @deva[पीला], @deva[अण्] optionally applies for descendant meaning. Examples: @deva[पैलः] or @deva[पैलेयः].",
            "standard": "After @deva[पीला] (a woman's name), @deva[अण्] is optional. Since @deva[पीला] is a dissyllabic feminine word, it would take @deva[ढक्] by @ref[4.1.121], which would block @deva[अण्] from @ref[4.1.113]. This sūtra provides optional @deva[अण्]: @deva[पैलः] (by @deva[अण्]) or @deva[पैलेयः] (by @deva[ढक्]).",
            "advanced": "This sūtra makes @deva[अण्] optional for @deva[पीला], a dissyllabic feminine name. @deva[पीला] would normally take @deva[ढक्] @ref[4.1.121] (blocking @deva[अण्] @ref[4.1.113]). This sūtra reintroduces @deva[अण्] optionally: @deva[पैलः] (अण्) or @deva[पैलेयः] (ढक्)."
        }
    },
    "41119": {
        "en": {
            "simple": "After @deva[मण्डूक], both @deva[ढक्] and @deva[अण्] optionally apply for descendant meaning. Examples: @deva[मांडूकेयः], @deva[मांण्डूकः], @deva[मांडूकिः].",
            "standard": "After @deva[मण्डूक], @deva[ढक्] and @deva[अण्] are both optional, giving three forms: @deva[मण्डूक] + @deva[ढक्] = @deva[मांडूकेयः]; @deva[मण्डूक] + @deva[अण्] = @deva[मांण्डूकः]; @deva[मण्डूक] + @deva[इञ्] = @deva[मांडूकिः] (by @ref[4.1.95] default). The optionality applies to both @deva[ढक्] and @deva[अण्].",
            "advanced": "This sūtra makes both @deva[ढक्] and @deva[अण्] optional for @deva[मण्डूक]: @deva[मांडूकेयः] (ढक्), @deva[मांण्डूकः] (अण्), @deva[माण्डूकिः] (इञ् @ref[4.1.95] by default)."
        }
    },
    "41120": {
        "en": {
            "simple": "Words ending in feminine affixes (@deva[टाप्] etc.) take @deva[ढक्] for @deva[गोत्र] meaning. Example: @deva[वैनतेयः] (son of Vinatā).",
            "standard": "After words ending in feminine affixes (@deva[टाप्], @deva[डाप्], @deva[चाप्]—words in long @deva[आ] or @deva[ई]), @deva[ढक्] is used for patronymic formation. @deva[विनता] + @deva[ढक्] = @deva[वैनतेयः] (@ref[4.1.2]), @deva[सुपर्णी] + @deva[ढक्] = @deva[सौपर्णेयः]. But @deva[इडविडा] and @deva[दरद] (feminine without feminine affixes) take @deva[अण्]: @deva[ऐडविडः], @deva[दारदः]. Vārtikas: (1) @deva[वडवा] → @deva[वाडवेयः] = @deva[वृषः] (bull—not patronymic); patronymic = @deva[वाडवः]; (2) @deva[क्रुञ्चा], @deva[कोकिला] take @deva[अण्]: @deva[क्रौञ्चः], @deva[कौकिलः].",
            "advanced": "This sūtra provides @deva[ढक्] for @deva[स्त्रीप्रत्ययान्त] (feminine-affix-ending) words in @deva[गोत्रार्थ]: @deva[वैनतेयः] (@ref[4.1.2]), @deva[सौपर्णेयः]. Exclusion: @deva[इडविडा]/दरद (feminine without @deva[स्त्रीप्रत्यय]) → @deva[ऐडविडः], @deva[दारदः] (अण्). Vārtikas: @deva[वडवा वृषे] → @deva[वाडवेयः] = bull (non-patronymic); patronymic = @deva[वाडवः]; @deva[क्रुञ्चाकोकिलयोरण्] → @deva[क्रौञ्चः], @deva[कौकिलः]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.106-4.1.120 (Batch 8)")
