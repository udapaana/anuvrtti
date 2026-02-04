#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.166-4.1.178 (Batch 12 - Final of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41166": {
        "en": {
            "simple": "A @deva[गोत्र]-descendant is optionally called @deva[युवन्] when respectful reference is intended. Examples: @deva[तत्र भवान् गार्ग्यायणः] or @deva[गार्ग्यः] (honored Gārgya).",
            "standard": "When respectful reference (@deva[आदर]) is intended, a @deva[गोत्र]-person (@deva[वृद्ध]) may optionally be called by the @deva[युवन्] form: @deva[तत्र भवान् गार्ग्यायणः] or @deva[गार्ग्यः] ('you honored Gārgya/Gārgyāyaṇa'). Similarly @deva[वात्स्यायणः] or @deva[वात्स्यः]; @deva[दाक्षायणः] or @deva[दाक्षिः]. Note: This is actually a Vārtika, not an original sūtra of Pāṇini. Without respect: only @deva[वात्स्यः], @deva[गार्ग्यः]. Other grammarians define @deva[वृद्ध] as @deva[अपत्यमन्तर्हितम्] (descendant of an intervening [ancestor]).",
            "advanced": "This sūtra (actually Vārtika) allows optional @deva[युवसंज्ञा] for @deva[गोत्र] (@deva[वृद्ध]) when @deva[आदर] is intended: @deva[गार्ग्यायणः]/गार्ग्यः, @deva[वात्स्यायणः]/वात्स्यः, @deva[दाक्षायणः]/दाक्षिः. Non-आदर: only गोत्र form. Other grammarians: @deva[अपत्यमन्तर्हितं वृद्धम्]."
        }
    },
    "41167": {
        "en": {
            "simple": "A @deva[युवन्]-descendant is optionally called @deva[गोत्र] when contemptuous reference is intended. Examples: @deva[गार्ग्यो जाल्मः] or @deva[गार्ग्यायणो जाल्मः] (contemptible Gārgya).",
            "standard": "When contempt (@deva[कुत्सा]) is intended, a @deva[युवन्]-person may optionally be called by the @deva[गोत्र] form: @deva[गार्ग्यो जाल्मः] (contemptible Gārgya) or @deva[गार्ग्यायणो जाल्मः]. Without contempt: only @deva[गार्ग्यायणः]. Note: This is also a Vārtika, not an original sūtra of Pāṇini.",
            "advanced": "This sūtra (actually Vārtika) allows optional @deva[गोत्रसंज्ञा] for @deva[युवन्] when @deva[कुत्सा] is intended: @deva[गार्ग्यो जाल्मः]/गार्ग्यायणो जाल्मः. Non-कुत्सा: only युवन् form."
        }
    },
    "41168": {
        "en": {
            "simple": "After words denoting both a country and a Kṣatriya tribe, @deva[अञ्] is used for descendant meaning. Examples: @deva[पाञ्चालः], @deva[वैदेहः] (son/king of Pañcāla/Videha).",
            "standard": "After words that denote both a @deva[जनपद] (country) and a @deva[क्षत्रिय] tribe, @deva[अञ्] is used: @deva[पाञ्चालः] (son of Pañcāla), @deva[ऐक्ष्वाकः], @deva[वैदेहः]. If the word denotes only Kṣatriya (not country), @deva[अण्] (not @deva[अञ्]) is used—the difference is in accent: @deva[द्रौह्यवः] (son of Druhya), @deva[पौरवः] (son of Puru). If a Brāhmaṇa: @deva[पाञ्चालिः], @deva[वैदेहिः] (@deva[इञ्] @ref[4.1.95]). Vārtika: same affix also denotes 'king thereof': @deva[पञ्चालानां राजा] = @deva[पाञ्चालः], @deva[वैदेहः]. Words like @deva[पञ्चाल] originally = Kṣatriya tribe names; secondarily = country (affix for 'country inhabited by' elided by @ref[4.2.81]). Country sense = plural (@deva[पञ्चालाः]); Kṣatriya sense = singular.",
            "advanced": "This sūtra provides @deva[अञ्] for @deva[जनपदशब्द क्षत्रियवाचिन्]: @deva[पाञ्चालः], @deva[ऐक्ष्वाकः], @deva[वैदेहः]. Non-जनपद Kṣatriya: @deva[अण्] (@deva[द्रौह्यवः], @deva[पौरवः])—accent differs. Brāhmaṇa: @deva[पाञ्चालिः] (@deva[इञ्] @ref[4.1.95]). Vārtika @deva[तस्य राजनि]: @deva[पाञ्चालः] = king also. @deva[पञ्चाल] etc.: primarily Kṣatriya tribe; secondarily country (@ref[4.2.81] affix-@deva[लुक्]). Country = plural; Kṣatriya = singular."
        }
    },
    "41169": {
        "en": {
            "simple": "After @deva[साल्वेय] and @deva[गान्धारि], @deva[अञ्] (not @deva[ञ्यङ्]) is used. Examples: @deva[साल्वेयः], @deva[गान्धारः] (son/king of Sālveya/Gāndhāri).",
            "standard": "After @deva[साल्वेय] and @deva[गान्धारि] (both country names and Kṣatriya names), @deva[अञ्] (not @deva[ञ्यङ्] from @ref[4.1.171]) is used, though they have @deva[वृद्धि] in first syllable: @deva[साल्वेयः] (son/king of Sālveya), @deva[गान्धारः] (son/king of Gāndhāri). The Vārtika @deva[तस्य राजनि] applies—affix also denotes 'king thereof'.",
            "advanced": "This sūtra provides @deva[अञ्] (debarring @deva[ञ्यङ्] @ref[4.1.171] despite @deva[वृद्धि]) for @deva[साल्वेय]/गान्धारि: @deva[साल्वेयः], @deva[गान्धारः]. Vārtika @deva[तस्य राजनि] applies."
        }
    },
    "41170": {
        "en": {
            "simple": "After dissyllabic country-Kṣatriya words and @deva[मगध], @deva[कलिङ्ग], @deva[सूरमस], @deva[अण्] (not @deva[अञ्]) is used. Examples: @deva[आङ्गः], @deva[वाङ्गः], @deva[मागधः], @deva[कालिङ्गः].",
            "standard": "After dissyllabic (@deva[द्व्यच्]) words and @deva[मगध], @deva[कलिङ्ग], @deva[सूरमस] (when denoting both country and Kṣatriya), @deva[अण्] (not @deva[अञ्]) is used: @deva[आङ्गः], @deva[वाङ्गः], @deva[मागधः], @deva[कालिङ्गः], @deva[सौरमसः] (son/king of Aṅga, Vaṅga, Magadha, Kaliṅga, Sūramasa). Similarly @deva[पौण्ड्रः], @deva[सौह्मः]. Vārtika @deva[तस्य राजनि] applies: @deva[आङ्गो राजा].",
            "advanced": "This sūtra provides @deva[अण्] (debarring @deva[अञ्]) for @deva[द्व्यच्] जनपद-क्षत्रिय words and @deva[मगध]/कलिङ्ग/सूरमस: @deva[आङ्गः], @deva[वाङ्गः], @deva[मागधः], @deva[कालिङ्गः], @deva[सौरमसः], @deva[पौण्ड्रः], @deva[सौह्मः]. Vārtika @deva[तस्य राजनि]."
        }
    },
    "41171": {
        "en": {
            "simple": "After @deva[वृद्ध] words, @deva[इकारान्त] words, and @deva[कोसल]/अजाद (when country-Kṣatriya), @deva[ञ्यङ्] is used. Examples: @deva[आम्बष्ठ्यः], @deva[सौवीर्यः], @deva[आवन्त्यः], @deva[कौसल्यः].",
            "standard": "After @deva[वृद्ध] (वृद्धि-initial) words, @deva[इकारान्त] (short-@deva[इ]-final) words, and @deva[कोसल]/अजाद (when denoting country-Kṣatriya), @deva[ञ्यङ्] (not @deva[अञ्]) is used: @deva[वृद्ध] examples: @deva[आम्बष्ठ्यः], @deva[सौवीर्यः] (sons/kings of Āmbaṣṭha, Sauvīra); @deva[इकारान्त] examples: @deva[आवन्त्यः], @deva[कौन्त्यः] (sons/kings of Avanti, Kunti); neither @deva[वृद्ध] nor @deva[इकारान्त]: @deva[कौसल्यः], @deva[आजाद्यः]. Vārtika: @deva[पाण्डु] (country-Kṣatriya) takes @deva[ढ्यण्]: @deva[पाण्ड्यः]; otherwise @deva[पाण्डवः] (@ref[4.1.74]).",
            "advanced": "This sūtra provides @deva[ञ्यङ्] (debarring @deva[अञ्]) for @deva[वृद्ध]/इकारान्त/कोसल/अजाद जनपद-क्षत्रिय: @deva[आम्बष्ठ्यः], @deva[सौवीर्यः]; @deva[आवन्त्यः], @deva[कौन्त्यः]; @deva[कौसल्यः], @deva[आजाद्यः]. Vārtika: @deva[पाण्डु] + @deva[ढ्यण्] = @deva[पाण्ड्यः] (जनपद-क्षत्रिय); else @deva[पाण्डवः] (@ref[4.1.74])."
        }
    },
    "41172": {
        "en": {
            "simple": "After @deva[कुरु] and @deva[न]-initial words (when country-Kṣatriya), @deva[ण्य] is used. Examples: @deva[कौरव्यः], @deva[नैषध्यः] (son/king of Kuru/Niṣadha).",
            "standard": "After @deva[कुरु] and words beginning with @deva[न] (when denoting country-Kṣatriya), @deva[ण्य] (not @deva[अञ्]/अण्) is used: @deva[कौरव्यः] (son/king of Kuru), @deva[नैषध्यः] (son/king of Niṣadha). The affix also denotes 'king thereof': @deva[कौरव्यो राजा]. Question: how to explain @deva[नैषधोऽर्हति चेदघम्]? Answer: archaic/Vedic form. @deva[सनैषधस्यार्थपतेः सुतायाम्]? Poetic license.",
            "advanced": "This sūtra provides @deva[ण्य] (debarring @deva[अञ्]/अण्) for @deva[कुरु] and @deva[नकारादि] जनपद-क्षत्रिय: @deva[कौरव्यः], @deva[नैषध्यः]. Also denotes राजन्. @deva[नैषधोऽर्हति चेदघम्] = archaic/Vedic; @deva[सनैषधस्यार्थपतेः सुतायाम्] = poetic license."
        }
    },
    "41173": {
        "en": {
            "simple": "After subdivisions of @deva[साल्व] country and after @deva[प्रत्यग्रथ], @deva[कलकूट], @deva[अश्मक], @deva[इञ्] is used. Examples: @deva[औदुम्बरिः], @deva[प्रात्यग्रथिः], @deva[आश्मकिः].",
            "standard": "After @deva[साल्वावयव] (subdivisions of Sālva country) and after @deva[प्रत्यग्रथ], @deva[कलकूट], @deva[अश्मक] (country-tribe names), @deva[इञ्] is used. Kārikā lists 6 @deva[साल्वावयव] subdivisions: @deva[उदुम्बर], @deva[तिलखल], @deva[मद्रकार], @deva[युगन्धर], @deva[भुलिङ्ग], @deva[शरदण्ड]. Patronymics: @deva[औदुम्बरिः], @deva[तैलखलिः], @deva[माद्रकारिः], @deva[यौगन्धरिः], @deva[भौलिङ्गिः], @deva[शारदण्डिः]. Also: @deva[प्रात्यग्रथिः], @deva[कालकूटिः], @deva[आश्मकिः]. Affix also denotes 'king thereof': @deva[औदुम्बरो राजा]. Note: @deva[साल्वा] (Kṣatriya woman) → @deva[साल्वेयः] (@deva[ढक्] @ref[4.1.121]) or @deva[साल्वः] (@deva[अण्]). Mahābhāṣya adds: @deva[बूस], @deva[अजमीढ], @deva[अजकन्द] also take @deva[इञ्]: @deva[बौसः], @deva[आजमीढिः], @deva[आजकन्दिः].",
            "advanced": "This sūtra provides @deva[इञ्] for @deva[साल्वावयव] (6 subdivisions per Kārikā: @deva[उदुम्बर], @deva[तिलखल], @deva[मद्रकार], @deva[युगन्धर], @deva[भुलिङ्ग], @deva[शरदण्ड]) and @deva[प्रत्यग्रथ]/कलकूट/अश्मक: @deva[औदुम्बरिः], @deva[प्रात्यग्रथिः], @deva[कालकूटिः], @deva[आश्मकिः]. Also = राजन्. @deva[साल्वा] (स्त्री) → @deva[साल्वेयः] (@deva[ढक्] @ref[4.1.121])/साल्वः (@deva[अण्]). Mahābhāṣya: @deva[बूस]/अजमीढ/अजकन्द + @deva[इञ्]."
        }
    },
    "41174": {
        "en": {
            "simple": "The affixes from @ref[4.1.168] to @ref[4.1.173] are called @deva[तद्राज] (king-denoting affixes).",
            "standard": "The affixes taught in @ref[4.1.168]-@ref[4.1.173] (6 sūtras) are called @deva[तद्राज] ('the king thereof' affixes). The pronoun @deva[ते] refers only to these six sūtras—not to earlier affixes (which have @deva[गोत्र]/युवन् designation per @ref[2.4.62]). Examples already given under each sūtra.",
            "advanced": "This sūtra defines @deva[तद्राजसंज्ञा] for affixes in @ref[4.1.168]-@ref[4.1.173]. @deva[ते] = these only (not earlier affixes with @deva[गोत्र]/युवन् संज्ञा per @ref[2.4.62])."
        }
    },
    "41175": {
        "en": {
            "simple": "After @deva[कम्बोज] (and similar words), the @deva[तद्राज] affix is elided. Examples: @deva[कम्बोजः], @deva[चोलः], @deva[केरलः], @deva[शकः], @deva[यवनः] (king of Kamboja, etc.).",
            "standard": "After @deva[कम्बोज], the @deva[तद्राज] affix @deva[अञ्] (which would apply by @ref[4.1.168]) is elided by @deva[लुक्]: @deva[कम्बोजः] (king of Kamboja). This should be understood as '@deva[कम्बोज] and similar words'—the affix is also elided after @deva[चोल], @deva[केरल], @deva[शक], @deva[यवन]: @deva[चोलः] (king of Cholas), @deva[केरलः], @deva[शकः], @deva[यवनः].",
            "advanced": "This sūtra elides @deva[तद्राज] affix (@deva[अञ्] @ref[4.1.168]) by @deva[लुक्] for @deva[कम्बोज]: @deva[कम्बोजः]. Extended (@deva[आदिशब्द]): @deva[चोलः], @deva[केरलः], @deva[शकः], @deva[यवनः]."
        }
    },
    "41176": {
        "en": {
            "simple": "In feminine, the @deva[तद्राज] affix is elided after @deva[अवन्ति], @deva[कुन्ति], and @deva[कुरु]. Examples: @deva[अवन्ती], @deva[कुन्ती], @deva[कुरू] (princess of Avanti/Kunti/Kuru).",
            "standard": "In feminine formation, the @deva[तद्राज] affix is elided after @deva[अवन्ति], @deva[कुन्ति], @deva[कुरु]: @deva[ञ्यङ्] (@ref[4.1.171]) elided after @deva[अवन्ति]/कुन्ति; @deva[ण्य] elided after @deva[कुरु]. Thus: @deva[अवन्ती] (princess of Avanti), @deva[कुन्ती] (princess of Kunti), @deva[कुरू] (princess of Kuru—takes @deva[ऊङ्] by @ref[4.1.66]). In masculine: @deva[आवन्त्यः], @deva[कौन्त्यः], @deva[कौरव्यः].",
            "advanced": "This sūtra elides @deva[तद्राज] in feminine for @deva[अवन्ति]/कुन्ति (@deva[ञ्यङ्] @ref[4.1.171])/कुरु (@deva[ण्य]): @deva[अवन्ती], @deva[कुन्ती], @deva[कुरू] (@deva[ऊङ्] @ref[4.1.66]). Masculine: @deva[आवन्त्यः], @deva[कौन्त्यः], @deva[कौरव्यः]."
        }
    },
    "41177": {
        "en": {
            "simple": "In feminine formation, when the masculine ends in @deva[तद्राज] @deva[अ], the affix is elided. Examples: m. @deva[शौरसेनः] → f. @deva[शूरसेनी]; m. @deva[माद्रः] → f. @deva[मद्री].",
            "standard": "In feminine formation, when the masculine word ends in @deva[तद्राज] affix @deva[अ], the affix is elided: m. @deva[शौरसेनः] → f. @deva[शूरसेनी]; m. @deva[माद्रः] → f. @deva[मद्री]. Note: @deva[अतः] should not be construed per @deva[तदन्तविधि] (@ref[1.1.72])—that would mean 'all affixes ending in @deva[अ]', which would make @ref[4.1.176] redundant. By @deva[ज्ञापक], @deva[तदन्तविधि] doesn't apply here. Thus @deva[ञ्यङ्]-formed words retain affix in feminine: @deva[आम्बष्ठ्यः] → f. @deva[आम्बष्ठ्या]; @deva[सौवीर्यः] → f. @deva[सौवीर्या].",
            "advanced": "This sūtra elides @deva[तद्राज] @deva[अ] in feminine: m. @deva[शौरसेनः] → f. @deva[शूरसेनी]; m. @deva[माद्रः] → f. @deva[मद्री]. @deva[अतः] ≠ @deva[तदन्तविधि] (@ref[1.1.72])—else @ref[4.1.176] redundant. @deva[ज्ञापक]: @deva[तदन्त] doesn't apply. Thus @deva[ञ्यङन्त]: @deva[आम्बष्ठ्या], @deva[सौवीर्या] (affix retained). Five @deva[तद्राज] affixes: @deva[अञ्] (@deva[अ]), @deva[अण्] (@deva[अ]), @deva[ञ्यङ्] (@deva[य]), @deva[ण्य] (@deva[य]), @deva[इञ्] (@deva[इ])—first four end in @deva[अ], but rule applies only when masculine word ends in @deva[अ]."
        }
    },
    "41178": {
        "en": {
            "simple": "The @deva[तद्राज] @deva[अ] is NOT elided in feminine for Eastern Kṣatriyas, @deva[भर्ग] class, and @deva[यौधेय] class. Examples: @deva[पाञ्चाली], @deva[वैदेही], @deva[भार्गी], @deva[यौधेयी].",
            "standard": "This sūtra blocks the @deva[तद्राज]-@deva[अ] elision (@ref[4.1.177]) for three groups: (1) Eastern Kṣatriyas (@deva[प्राची] = east of Sarasvatī): @deva[पाञ्चाली], @deva[वैदेही], @deva[आङ्गी], @deva[वाङ्गी], @deva[मागधी]; (2) @deva[भर्गादि] (8 words): @deva[भार्गी], @deva[कारूषी], @deva[कैकेयी]; (3) @deva[यौधेयादि] (9 words): @deva[यौधेयी], @deva[शौभ्रेयी], @deva[शौक्रेयी]. Note: Five @deva[तद्राज] affixes exist here, but others exist in @ref[5.3.112]-@ref[5.3.119]. @deva[यौधेय] is formed by @deva[अञ्] of @ref[5.3.117]. This implies @ref[4.1.177]'s elision rule applies to @ref[5.3.112]-@ref[5.3.119] @deva[तद्राज] affixes too: e.g., m. @deva[पार्शवः] (@deva[अण्] @ref[5.3.117]) → f. @deva[पर्शू]; m. @deva[आसुरः] → f. @deva[असुरी]. @deva[भर्गादि]: @deva[भर्ग], @deva[करूष], @deva[केकय], @deva[कश्मीर], @deva[साल्व], @deva[सुस्थाल], @deva[उरस्], @deva[कौरव्य]. @deva[यौधेयादि]: @deva[यौधेय], @deva[कौकेय], @deva[शौभ्रेय], @deva[ज्याबाणेय], @deva[धौर्तेय], @deva[त्रिगर्त], @deva[भरत], @deva[उशीनर], @deva[वार्तेय].",
            "advanced": "This sūtra blocks @deva[तद्राज]-@deva[अ]-@deva[लुक्] (@ref[4.1.177]) for: (1) @deva[प्राची क्षत्रिय] (east of Sarasvatī): @deva[पाञ्चाली], @deva[वैदेही], @deva[आङ्गी], @deva[वाङ्गी], @deva[मागधी]; (2) @deva[भर्गादि] (8): @deva[भार्गी], @deva[कारूषी], @deva[कैकेयी]; (3) @deva[यौधेयादि] (9): @deva[यौधेयी], @deva[शौभ्रेयी], @deva[शौक्रेयी]. @deva[ज्ञापक]: @ref[4.1.177] applies to @ref[5.3.112]-@ref[5.3.119] तद्राज too: @deva[पार्शवः] → @deva[पर्शू]; @deva[आसुरः] → @deva[असुरी]. @deva[भर्गादि]: @deva[भर्ग], @deva[करूष], @deva[केकय], @deva[कश्मीर], @deva[साल्व], @deva[सुस्थाल], @deva[उरस्], @deva[कौरव्य]. @deva[यौधेयादि]: @deva[यौधेय], @deva[कौकेय], @deva[शौभ्रेय], @deva[ज्याबाणेय], @deva[धौर्तेय], @deva[त्रिगर्त], @deva[भरत], @deva[उशीनर], @deva[वार्तेय]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.166-4.1.178 (Batch 12 - Final)")
