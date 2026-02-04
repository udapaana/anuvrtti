#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.2.136-4.2.145 (Batch 10 - Final of 4.2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "42136": {
        "en": {
            "simple": "After @deva[साल्व] etc., @deva[वुञ्] is used when meaning 'a cow' or 'barley gruel'. Examples: @deva[साल्वको गौः] (Sālva cow), @deva[साल्विका यवागूः] (Sālva barley gruel).",
            "standard": "After @deva[साल्वादि] words, the affix @deva[वुञ्] comes in 'born etc.' senses when the meaning is 'a cow' or 'barley gruel' (debarring @deva[अण्] @ref[4.2.133]): @deva[साल्वको गौः] (cows born in Sālva); @deva[साल्विका यवागूः] (barley gruel of Sālva). In other cases: @deva[साल्वम्] (by @deva[अण्]).",
            "advanced": "This sūtra provides @deva[वुञ्] (debarring @deva[अण्] @ref[4.2.133]) for @deva[साल्वादि] when गौ/यवागू: @deva[साल्वकः गौः], @deva[साल्विका यवागूः]. Otherwise @deva[साल्वम्]."
        }
    },
    "42137": {
        "en": {
            "simple": "After locality-names ending in @deva[गर्त] (as second member), @deva[छ] is used. Examples: @deva[वृकगर्तीयम्], @deva[शृगालगर्तीयम्], @deva[श्वाविद्गर्तीयम्] (born in wolf-hole, jackal-hole, porcupine-hole).",
            "standard": "After @deva[प्रातिपदिक] (nominal stems) denoting a place and having @deva[गर्त] (hole/pit) as the second member (@deva[उत्तरपद]), the affix @deva[छ] comes in remaining senses (debarring @deva[अण्]). @deva[देशे] is understood. This subsequent rule also debars @deva[ठञ्]/ञिठ् of @ref[4.2.117]. Examples: @deva[वृकगर्तीयम्], @deva[शृगालगर्तीयम्], @deva[श्वाविद्गर्तीयम्] (born in a porcupine's hole etc.). The word @deva[उत्तरपद] prevents applying to words that END in @deva[गर्त] but have an affix after it.",
            "advanced": "This sūtra provides @deva[छ] (debarring @deva[अण्], @deva[ठञ्]/ञिठ् @ref[4.2.117]) for @deva[देश गर्तोत्तरपद]: @deva[वृकगर्तीयम्], @deva[शृगालगर्तीयम्]. @deva[उत्तरपद] excludes गर्तान्त with following affix."
        }
    },
    "42138": {
        "en": {
            "simple": "After @deva[गह] etc., @deva[छ] is used. Examples: @deva[गहीयः] (belonging to a cave), @deva[अन्तःस्थीयः], @deva[मध्यमीयाः].",
            "standard": "After @deva[गहादि] words, the affix @deva[छ] comes in remaining senses (debarring @deva[अण्] etc.): @deva[गहीयः] (belonging to a cave), @deva[अन्तःस्थीयः]. Special rule in the list: '@deva[मध्यमध्यमं चाण् चरणे]'—@deva[मध्य] becomes @deva[मध्यम] when @deva[छ] is added: @deva[मध्यमीयाः]. But when the sense is a Vedic school (@deva[चरण]), @deva[अण्] is used: @deva[माध्यमाः]. @deva[मध्यम] here means 'middle of the body' specifically.",
            "advanced": "This sūtra provides @deva[छ] (debarring @deva[अण्]) for @deva[गहादि]: @deva[गहीयः], @deva[अन्तःस्थीयः]. Special: @deva[मध्य] → @deva[मध्यम] + @deva[छ] = @deva[मध्यमीयाः]; for चरण: @deva[अण्] = @deva[माध्यमाः]."
        }
    },
    "42139": {
        "en": {
            "simple": "After @deva[कद्]-initial words denoting Eastern places, @deva[छ] is used. Examples: @deva[कटनगरीयम्], @deva[कटघोषीयम्], @deva[कटपल्वलीयम्].",
            "standard": "After words beginning with @deva[कद्] (which become @deva[कट्]-initial) denoting places of the Eastern people (@deva[प्राच्य]), the affix @deva[छ] comes in remaining senses (debarring @deva[अण्]). @deva[देशे] is understood; @deva[प्राक्] qualifies @deva[देशे]. Examples: @deva[कटनगरीयम्], @deva[कटघोषीयम्], @deva[कटपल्वलीयम्].",
            "advanced": "This sūtra provides @deva[छ] (debarring @deva[अण्]) for @deva[कदादि प्राग्देश]: @deva[कटनगरीयम्], @deva[कटघोषीयम्], @deva[कटपल्वलीयम्]."
        }
    },
    "42140": {
        "en": {
            "simple": "Before @deva[छ], the final of @deva[राजन्] is replaced by @deva[क]. Example: @deva[राजकीयम्].",
            "standard": "When @deva[छ] is added to @deva[राजन्], the final is replaced by @deva[क]: @deva[राजन्] + @deva[छ] → @deva[राजकीयम्]. This sūtra only teaches substitution, as @deva[राजन्] would already take @deva[छ] by @ref[4.2.114]. The word @deva[देशे] doesn't govern this sūtra (not applicable here).",
            "advanced": "This sūtra provides @deva[क]-substitution for @deva[राजन्] + @deva[छ]: @deva[राजकीयम्]. @deva[छ] by @ref[4.2.114]; this sūtra adds substitution. @deva[देशे] doesn't apply."
        }
    },
    "42141": {
        "en": {
            "simple": "After @deva[वृद्ध] place-names ending in @deva[अक्]/इक्] or with penultimate @deva[ख्], @deva[छ] is used. Examples: @deva[आरोहणकीयम्], @deva[आश्वपथिकीयम्], @deva[कौटिशिखीयम्].",
            "standard": "After @deva[वृद्ध] words denoting a place and ending in @deva[अक्] or @deva[इक्], or having @deva[ख्] as penultimate (@deva[खोपध]), the affix @deva[छ] comes in remaining senses. @deva[देशे] must be read in. This debars @deva[अण्] of @ref[4.2.132] and the affixes of @ref[4.2.117] and @ref[4.2.123]. @deva[अकन्त] examples: @deva[आरोहणकीयम्], @deva[द्रौघणकीयम्]. @deva[इकन्त] examples: @deva[आश्वपथिकीयम्], @deva[शाल्मलिकीयम्]. @deva[खोपध] examples: @deva[कौटिशिखीयम्], @deva[आयोमुखीयम्]. Vārtika: @deva[सौसुकादि] words also take this rule though ending in @deva[उ].",
            "advanced": "This sūtra provides @deva[छ] (debarring @deva[अण्] @ref[4.2.132], @ref[4.2.117], @ref[4.2.123]) for @deva[वृद्ध देश अकन्त]/इकन्त/खोपध: @deva[आरोहणकीयम्], @deva[आश्वपथिकीयम्], @deva[कौटिशिखीयम्]. Vārtika: @deva[सौसुकादि] (उकारान्त) too."
        }
    },
    "42142": {
        "en": {
            "simple": "After @deva[वृद्ध] words with @deva[कन्था]/पलद/नगर/ग्राम/हृद as second member, @deva[छ] is used. Examples: @deva[दाक्षिकन्थीयम्], @deva[दाक्षिनगरीयम्], @deva[दाक्षिग्रामीयम्].",
            "standard": "After @deva[वृद्ध] words having @deva[कन्था], @deva[पलद], @deva[नगर], @deva[ग्राम], or @deva[हृद] as the second member (@deva[उत्तरपद]), the affix @deva[छ] comes in remaining senses (debarring @deva[ठञ्]/ञिठ् of @ref[4.2.117]). Examples: @deva[दाक्षिकन्थीयम्], @deva[माहिकिकन्थीयम्]; @deva[दाक्षिपलदीयम्], @deva[माहिकिपलदीयम्]; @deva[दाक्षिनगरीयम्], @deva[माहिकिनगरीयम्]; @deva[दाक्षिग्रामीयम्], @deva[माहिकिग्रामीयम्]; @deva[दाक्षिह्रदीयम्], @deva[माहिकिह्रदीयम्].",
            "advanced": "This sūtra provides @deva[छ] (debarring @deva[ठञ्]/ञिठ् @ref[4.2.117]) for @deva[वृद्ध] with @deva[उत्तरपद] = @deva[कन्था]/पलद/नगर/ग्राम/हृद: @deva[दाक्षिकन्थीयम्], @deva[दाक्षिनगरीयम्], @deva[दाक्षिग्रामीयम्], @deva[दाक्षिह्रदीयम्]."
        }
    },
    "42143": {
        "en": {
            "simple": "After @deva[पर्वत] (mountain), @deva[छ] is used. Examples: @deva[पर्वतीयो राजा] (hill-king), @deva[पर्वतीयः पुरुषः] (hill man).",
            "standard": "After @deva[पर्वत] (mountain), the affix @deva[छ] comes in remaining senses (debarring @deva[अण्]): @deva[पर्वतीयो राजा] (the hill-king); @deva[पर्वतीयः पुरुषः] (the hill man).",
            "advanced": "This sūtra provides @deva[छ] (debarring @deva[अण्]) for @deva[पर्वत]: @deva[पर्वतीयो राजा], @deva[पर्वतीयः पुरुषः]."
        }
    },
    "42144": {
        "en": {
            "simple": "After @deva[पर्वत], @deva[छ] is optional when NOT meaning 'a man'. Examples: @deva[पर्वतीयानि फलानि] or @deva[पार्वतानि फलानि] (hill fruits).",
            "standard": "After @deva[पर्वत], the affix @deva[छ] comes optionally in remaining senses when the meaning is NOT 'a man' (@deva[अमनुष्य]): @deva[पर्वतीयानि फलानि] (@deva[छ]) or @deva[पार्वतानि फलानि] (@deva[अण्]) (hill fruits); @deva[पर्वतीयमुदकम्] or @deva[पार्वतमुदकम्] (hill water). Why 'not human'? For humans, no option: @deva[पर्वतीयो मनुष्यः] (only @deva[छ]).",
            "advanced": "This sūtra provides optional @deva[छ] for @deva[पर्वत] when @deva[अमनुष्य]: @deva[पर्वतीयानि]/पार्वतानि फलानि. For मनुष्य: only @deva[छ] (@deva[पर्वतीयः])."
        }
    },
    "42145": {
        "en": {
            "simple": "After @deva[कृकण] and @deva[पर्ण] (when meaning @deva[भारद्वाज] country), @deva[छ] is used. Examples: @deva[कृकणीयम्], @deva[पर्णीयम्].",
            "standard": "After @deva[कृकण] and @deva[पर्ण], when denoting the country of @deva[भारद्वाज] (not the @deva[गोत्र]), the affix @deva[छ] comes in remaining senses: @deva[कृकणीयम्], @deva[पर्णीयम्]. @deva[देशे] is understood. @deva[भारद्वाज] here means country, not lineage. Why 'denoting Bhāradvāja country'? Otherwise: @deva[कार्कणम्], @deva[पार्णम्] (by @deva[अण्]).",
            "advanced": "This sūtra provides @deva[छ] for @deva[कृकण]/पर्ण when @deva[भारद्वाज-देश]: @deva[कृकणीयम्], @deva[पर्णीयम्]. @deva[भारद्वाज] = देश (not गोत्र). Otherwise: @deva[कार्कणम्], @deva[पार्णम्] (@deva[अण्])."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.2.136-4.2.145 (Batch 10 - Final of 4.2)")
