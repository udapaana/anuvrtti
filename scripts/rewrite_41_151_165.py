#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.151-4.1.165 (Batch 11 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41151": {
        "en": {
            "simple": "The @deva[कुरु] class words take @deva[ण्य] for descendant meaning. Example: @deva[कौरव्यः]. This is a 53-word class including names and castes.",
            "standard": "After @deva[कुर्वादि] words, @deva[ण्य] is used for descendant meaning. @deva[कुरु] + @deva[ण्य] = @deva[कौरव्यः]. Note: @deva[कुरु] also takes @deva[ण्य] by @ref[4.1.172] (country-Kṣatriya rule), but with a difference: the @deva[ण्य] of @ref[4.1.172] is @deva[तद्राज] and elides in plural; the @deva[ण्य] here is retained in plural. @deva[कौरव्य] ∈ @deva[तिकादि] (@ref[4.1.154]) takes @deva[फिञ्]: @deva[कौरव्यायणिः]. Special cases: @deva[रथकार] = caste (takes @deva[ण्य] here); artisan 'chariot-maker' takes @deva[ण्य] by @ref[4.1.152]. @deva[केशिनी] → @deva[कैशिन्यः] (no @deva[पुंवद्भाव]—@deva[केशिनी] read with feminine affix to avoid @deva[टि]-@deva[लोप] → *@deva[कैश्य]). @deva[वेन] takes @deva[ण्य] only in Vedic: @deva[वैन्य] (modern form incorrect). @deva[वामरथ] treated like @deva[कण्वादि] except accent (governed by @deva[ण्य]). 53-word list.",
            "advanced": "This sūtra provides @deva[ण्य] for @deva[कुर्वादि]: @deva[कौरव्यः]. @deva[कुरु] also by @ref[4.1.172] (तद्राज), but @ref[4.1.172]'s @deva[ण्य] has @deva[लुक्] in plural; here's doesn't. @deva[कौरव्य] ∈ @deva[तिकादि] → @deva[फिञ्]: @deva[कौरव्यायणिः]. @deva[रथकार]: caste → @deva[ण्य] here; artisan → @deva[ण्य] @ref[4.1.152]. @deva[केशिनी] → @deva[कैशिन्यः]: no @deva[पुंवद्भाव] @ref[6.3.34]; listed with @deva[स्त्रीप्रत्यय] to block @deva[टि]-@deva[लोप] (@ref[6.4.144]) → *@deva[कैश्य]. @deva[वेनाच्छन्दसि]: Vedic only. Vārtika: @deva[वामरथस्य कण्वादिवत्स्वरवर्जम्]. 53 words: @deva[कुरु], @deva[गर्ग], @deva[मङ्गुष], @deva[अजमार], @deva[रथकार], @deva[वावदूक], @deva[सम्राज् क्षत्रिये], @deva[कवि], @deva[विमति], @deva[वाक्], @deva[वामरथ], @deva[पितृमत्], @deva[इन्द्रजालि], @deva[एजि], @deva[वातकि], @deva[कुट], @deva[शलाका], @deva[सुर], @deva[पुर], @deva[शुभ्र], @deva[अभ्र], @deva[दर्भ], @deva[केशिनी], @deva[वेन], @deva[श्यावरथ], @deva[सत्यंकार], @deva[मूढ], @deva[शकन्धु], @deva[शालीन], @deva[कर्तृ], @deva[हर्तृ], @deva[काक], @deva[बुद्धिकार], etc."
        }
    },
    "41152": {
        "en": {
            "simple": "After stems ending in @deva[सेना], after @deva[लक्षण], and after artisan words, @deva[ण्य] is used for descendant meaning. Examples: @deva[हारिषेण्यः], @deva[लाक्षण्यः], @deva[तान्तुवाय्यः], @deva[कौम्भकार्यः].",
            "standard": "After @deva[सेनान्त] (stems ending in @deva[सेना]), after @deva[लक्षण], and after @deva[कारि]-words (artisan terms—weavers, barbers, potters), @deva[ण्य] is used. @deva[हरिषेण] → @deva[हारिषेण्यः]; @deva[लक्षण] → @deva[लाक्षण्यः]; @deva[तन्तुवाय] (weaver) → @deva[तान्तुवाय्यः]; @deva[कुम्भकार] (potter) → @deva[कौम्भकार्यः]; @deva[नापित] (barber) → @deva[नापित्यः].",
            "advanced": "This sūtra provides @deva[ण्य] for @deva[सेनान्त]/लक्षण/कारि (artisans): @deva[हारिषेण्यः], @deva[लाक्षण्यः], @deva[तान्तुवाय्यः], @deva[कौम्भकार्यः], @deva[नापित्यः]."
        }
    },
    "41153": {
        "en": {
            "simple": "According to Northern Grammarians, @deva[इञ्] applies after @deva[सेनान्त], @deva[लक्षण], and artisan words. Examples: @deva[हारिषेणिः], @deva[लाक्षणिः], @deva[तान्तुवायिः].",
            "standard": "According to @deva[उदीचाम्] (Northern Grammarians), @deva[इञ्] (not @deva[ण्य]) is used after @deva[सेनान्त], @deva[लक्षण], and artisan words: @deva[हारिषेणिः], @deva[लाक्षणिः], @deva[तान्तुवायिः], @deva[कौम्भकारिः]. Note: @deva[तक्षन्] (carpenter) ∈ @deva[शिवादि] (@ref[4.1.112]) → @deva[ताक्ष्णः] (@deva[अण्]) or @deva[ताक्ष्ण्यः] (@deva[ण्य]), but not @deva[इञ्]. @deva[नापित] (वृद्ध, non-गोत्र) → @deva[नापितायनिः] (@deva[फिञ्] @ref[4.1.157] per Northern Grammarians).",
            "advanced": "This sūtra provides @deva[इञ्] (@deva[उदीचाम्]) for @deva[सेनान्त]/लक्षण/कारि: @deva[हारिषेणिः], @deva[लाक्षणिः], @deva[तान्तुवायिः], @deva[कौम्भकारिः]. Exclusion: @deva[तक्षन्] (@ref[4.1.112]) → @deva[ताक्ष्णः]/ताक्ष्ण्यः, not @deva[इञ्]. @deva[नापित] (वृद्ध अगोत्र) → @deva[नापितायनिः] (@deva[फिञ्] @ref[4.1.157], उदीचाम्)."
        }
    },
    "41154": {
        "en": {
            "simple": "The @deva[तिक] class words take @deva[फिञ्] for descendant meaning. Example: @deva[तैकायनिः], @deva[कैतवायनिः]. This is a 48-word class.",
            "standard": "After @deva[तिकादि] words, @deva[फिञ्] is used: @deva[तैकायनिः], @deva[कैतवायनिः]. Special cases: @deva[वृष] adds intermediate @deva[य]: @deva[वार्ष्यायणिः]. @deva[कौरव्य] (∈ this list) = Kṣatriya (follows @deva[औरश] 'born of the chest' = Kṣatriya), so its son takes @deva[अञ्] (@ref[4.1.168]). But @deva[कौरव्य] formed by @deva[ण्य] of @ref[4.1.151] takes @deva[इञ्], not @deva[फिञ्] (@ref[2.4.58], @ref[2.4.68]). 48-word list includes @deva[तिक], @deva[कितव], @deva[संज्ञा], @deva[बाल], @deva[शिखा], @deva[उरस्], @deva[सैन्धव], @deva[यमुन्द], @deva[नील], @deva[गौकक्ष्य], @deva[देवरथ], @deva[कौरव्य], @deva[गङ्गा], @deva[वृष], @deva[यज्ञ], @deva[वसु], @deva[बन्धु], etc.",
            "advanced": "This sūtra provides @deva[फिञ्] for @deva[तिकादि]: @deva[तैकायनिः], @deva[कैतवायनिः]. @deva[वृष] + intermediate @deva[य] → @deva[वार्ष्यायणिः]. @deva[कौरव्य] (after @deva[औरश] = Kṣatriya) → son by @deva[अञ्] (@ref[4.1.168]). @deva[कौरव्य] by @deva[ण्य] @ref[4.1.151] → @deva[इञ्], not @deva[फिञ्] (@ref[2.4.58], @ref[2.4.68]). 48 words."
        }
    },
    "41155": {
        "en": {
            "simple": "After @deva[कौसल्य] and @deva[कार्मार्य], @deva[फिञ्] is used (debarring @deva[इञ्]). Examples: @deva[कौसल्यायनिः], @deva[कार्मार्यायणिः]. These mean 'son of Kosala/Karmāra' (not Kausalya/Kārmārya).",
            "standard": "After @deva[कौसल्य] and @deva[कार्मार्य], @deva[फिञ्] (not @deva[इञ्]) is used: @deva[कौसल्यायनिः], @deva[कार्मार्यायणिः]. Important: these mean 'son of @deva[कोसल]/कर्मार', not 'son of @deva[कौसल्य]/कार्मार्य'. Vārtika: @deva[दगु], @deva[कोसल], @deva[कर्मार], @deva[छाग], @deva[वृष] take augment @deva[युट्] before @deva[फिञ्]: @deva[दागव्यायनिः], @deva[कौसल्यायनिः], @deva[कार्मार्यायणिः], @deva[छाग्यायनिः], @deva[वार्ष्यायणिः].",
            "advanced": "This sūtra provides @deva[फिञ्] (debarring @deva[इञ्]) for @deva[कौसल्य]/कार्मार्य: @deva[कौसल्यायनिः], @deva[कार्मार्यायणिः]. Semantics: 'son of @deva[कोसल]/कर्मार' (not Kausalya/Kārmārya). Vārtika: @deva[युट्]-@deva[आगम] before @deva[फिञ्] for @deva[दगु], @deva[कोसल], @deva[कर्मार], @deva[छाग], @deva[वृष]: @deva[दागव्यायनिः], @deva[कौसल्यायनिः], @deva[कार्मार्यायणिः], @deva[छाग्यायनिः], @deva[वार्ष्यायणिः]."
        }
    },
    "41156": {
        "en": {
            "simple": "After dissyllabic words ending in @deva[अण्] affix, @deva[फिञ्] is used (debarring @deva[इञ्]). Examples: @deva[कार्त्रायणिः], @deva[हार्त्रायणिः].",
            "standard": "After dissyllabic stems ending in @deva[अण्] affix, @deva[फिञ्] (not @deva[इञ्]) is used: @deva[कार्त्रायणिः] (son of Kartra), @deva[हार्त्रायणिः] (son of Hartra). Conditions: (1) ends in @deva[अण्]—@deva[दाक्षायणः] (@deva[दाक्षि] ends in @deva[इञ्], not @deva[अण्]); (2) dissyllabic—@deva[औपगविः] (trisyllabic @deva[औपगव]). Vārtika: pronouns @deva[त्यदादि] optionally take @deva[फिञ्] or @deva[अण्]: @deva[त्यादायनिः] or @deva[त्यादः]; @deva[तादायनिः] or @deva[तादः].",
            "advanced": "This sūtra provides @deva[फिञ्] (debarring @deva[इञ्]) for @deva[द्व्यच् अणन्त] stems: @deva[कार्त्रायणिः], @deva[हार्त्रायणिः]. Exclusions: non-@deva[अण्]—@deva[दाक्षायणः] (@deva[इञन्त]); non-dissyllabic—@deva[औपगविः]. Vārtika: @deva[त्यदादि] + optional @deva[फिञ्]/अण्: @deva[त्यादायनिः]/त्यादः, @deva[तादायनिः]/तादः."
        }
    },
    "41157": {
        "en": {
            "simple": "According to Northern Grammarians, after @deva[वृद्ध] (वृद्धि-initial) non-@deva[गोत्र] words, @deva[फिञ्] is used. Examples: @deva[आम्रगुप्तायनिः], @deva[नापितायनिः].",
            "standard": "According to @deva[उदीचाम्] (Northern Grammarians), after @deva[वृद्ध] (वृद्धि in first syllable) words that are not @deva[गोत्र]-names, @deva[फिञ्] is used: @deva[आम्रगुप्तायनिः] (son of Āmragupta), @deva[ग्रामरक्षायणिः] (son of Grāmarakṣa), @deva[नापितायनिः] (son of barber—despite @ref[4.1.152], @ref[1.4.2] applies). Conditions: (1) Northern Grammarians—otherwise @deva[आम्रगुप्तिः]; (2) वृद्धि-initial—@deva[याज्ञदत्तिः] (@deva[यज्ञदत्त] lacks वृद्धि); (3) non-गोत्र—@deva[औपगविः] (@deva[गोत्र]-name).",
            "advanced": "This sūtra provides @deva[फिञ्] (@deva[उदीचाम्]) for @deva[वृद्ध अगोत्र] words: @deva[आम्रगुप्तायनिः], @deva[ग्रामरक्षायणिः], @deva[नापितायनिः] (@ref[1.4.2] overrides @ref[4.1.152]). Exclusions: non-उदीचाम् → @deva[आम्रगुप्तिः]; non-वृद्ध → @deva[याज्ञदत्तिः]; गोत्र → @deva[औपगविः]."
        }
    },
    "41158": {
        "en": {
            "simple": "The @deva[वाकिन] class words take augment @deva[कुक्] before @deva[फिञ्]. Examples: @deva[वाकिनकायनिः], @deva[गौरधकायनिः]. Optionally @deva[वाकिनिः], @deva[गौरधिः].",
            "standard": "After @deva[वाकिनादि] words, augment @deva[कुक्] (= @deva[क्]) is added before @deva[फिञ्] (debarring @deva[इञ्]): @deva[वाकिनकायनिः], @deva[गौरधकायनिः]. If @deva[उदीचाम्] anuवृत्ति applies, it's optional: @deva[वाकिनिः], @deva[गौरधिः] (without @deva[कुक्], by @deva[इञ्]). 6-word list: @deva[वाकिन], @deva[गौधेर], @deva[कार्कष], @deva[काक], @deva[लङ्का]. Vārtika: @deva[चर्मिन्]/वर्मिन् also have @deva[न]-@deva[लोप].",
            "advanced": "This sūtra provides @deva[कुक्]-@deva[आगम] for @deva[वाकिनादि] before @deva[फिञ्] (debarring @deva[इञ्]): @deva[वाकिनकायनिः], @deva[गौरधकायनिः]. @deva[उदीचाम्] anuवृत्ति → optional: @deva[वाकिनिः], @deva[गौरधिः] (@deva[इञ्]). 6 words: @deva[वाकिन], @deva[गौधेर], @deva[कार्कष], @deva[काक], @deva[लङ्का]. Vārtika: @deva[चर्मिवर्मिणोर्नलोपश्च]."
        }
    },
    "41159": {
        "en": {
            "simple": "After @deva[पुत्रान्त] (words ending in @deva[पुत्र]), @deva[कुक्] is optional before @deva[फिञ्]. Three forms: @deva[गार्गीपुत्रकायणिः], @deva[गार्गीपुत्रायणिः], @deva[गार्गीपुत्रिः].",
            "standard": "After stems ending in @deva[पुत्र], augment @deva[कुक्] is optional before @deva[फिञ्]. The @deva[उदीचाम्] + @deva[वृद्ध] + @deva[अगोत्र] conditions from @ref[4.1.157] apply (a @deva[पुत्रान्त] word can't be @deva[गोत्र], since @deva[गोत्र] = grandson+). Three forms: @deva[गार्गीपुत्रकायणिः] (with @deva[कुक्]); @deva[गार्गीपुत्रायणिः] (without @deva[कुक्], with @deva[फिञ्]); @deva[गार्गीपुत्रिः] (with @deva[इञ्]). Similarly @deva[वात्सीपुत्रकायणिः], @deva[वात्सीपुत्रायणिः], @deva[वात्सीपुत्रिः].",
            "advanced": "This sūtra makes @deva[कुक्] optional for @deva[पुत्रान्त] before @deva[फिञ्]. @deva[उदीचाम् वृद्धाद् अगोत्रात्] conditions from @ref[4.1.157] apply (@deva[पुत्रान्त] ≠ गोत्र by definition). Three forms: @deva[गार्गीपुत्रकायणिः] (कुक् + फिञ्), @deva[गार्गीपुत्रायणिः] (फिञ्), @deva[गार्गीपुत्रिः] (इञ्). Similarly @deva[वात्सीपुत्रकायणिः]/वात्सीपुत्रायणिः/वात्सीपुत्रिः."
        }
    },
    "41160": {
        "en": {
            "simple": "According to Eastern Grammarians, after non-@deva[वृद्ध] words, @deva[फिञ्] is used diversely. Examples: @deva[ग्लुचुकायनिः] or @deva[ग्लौचुकिः].",
            "standard": "According to @deva[प्राचाम्] (Eastern Grammarians), after @deva[अवृद्ध] (non-वृद्धि-initial) words, @deva[फिञ्] is used @deva[बहुलम्] (diversely/irregularly): @deva[ग्लुचुकायनिः] or @deva[ग्लौचुकिः] (son of Gluchuka); @deva[अहिचुम्बकायनिः] or @deva[आहिचुम्बिः]. Condition: non-वृद्ध—@deva[राजदन्तिः] (राजदन्त has वृद्धि). Both @deva[प्राचाम्] and @deva[बहुलम्] indicate optionality; @deva[प्राचाम्] shows respect, @deva[बहुलम्] indicates non-uniformity. In some cases @deva[फिञ्] doesn't apply: @deva[दाक्षिः], @deva[प्लाक्षिः].",
            "advanced": "This sūtra provides @deva[फिञ्] (@deva[प्राचाम्], @deva[बहुलम्]) for @deva[अवृद्ध] words: @deva[ग्लुचुकायनिः]/ग्लौचुकिः, @deva[अहिचुम्बकायनिः]/आहिचुम्बिः. Exclusion: वृद्ध → @deva[राजदन्तिः]. @deva[प्राचाम्] = respect; @deva[बहुलम्] = non-uniformity. Non-application: @deva[दाक्षिः], @deva[प्लाक्षिः]."
        }
    },
    "41161": {
        "en": {
            "simple": "After @deva[मनु], @deva[अञ्] and @deva[यत्] apply with augment @deva[षुक्], when the meaning is @deva[जाति] (class/mankind). Examples: @deva[मानुषः], @deva[मनुष्यः] (mankind). Descendant = @deva[मानवः].",
            "standard": "After @deva[मनु], @deva[अञ्] and @deva[यत्] apply with augment @deva[षुक्] when the result denotes @deva[जाति] (class/species): @deva[मनु] + @deva[षुक्] + @deva[अञ्] = @deva[मानुषः] (mankind); @deva[मनु] + @deva[षुक्] + @deva[यत्] = @deva[मनुष्यः]. These are not patronymics, so not elided in plural: @deva[मानुषाः] (men). For actual descendant, @deva[अण्] applies: @deva[मानवः] (son of Manu), as in @deva[मानवी प्रजा]. Kārikā: @deva[माणवः] (with @deva[न] → @deva[ण]) implies contempt or dullness.",
            "advanced": "This sūtra provides @deva[अञ्]/यत् with @deva[षुक्]-@deva[आगम] for @deva[मनु] in @deva[जात्यर्थ]: @deva[मानुषः], @deva[मनुष्यः]. Not patronymic → no plural @deva[लुक्]: @deva[मानुषाः]. Descendant = @deva[मानवः] (@deva[अण्] @ref[4.1.83]): @deva[मानवी प्रजा]. Kārikā: @deva[अपत्ये कुत्सिते मूढे मनोरौत्सर्गिकः स्मृतः। नकारस्य च मूर्धन्यस्तेन सिद्ध्यति माणवः॥]—@deva[माणवः] (न → ण) = contempt/dullness."
        }
    },
    "41162": {
        "en": {
            "simple": "A descendant who is a grandson or lower is called @deva[गोत्र]. Example: @deva[गार्ग्यः] (gotra-descendant of Garga, starting from grandson).",
            "standard": "A descendant (@deva[अपत्य]) who is @deva[पौत्रप्रभृति] (grandson or lower) with reference to a person is called @deva[गोत्र]. @deva[गर्ग] → son = @deva[गार्गिः] (not गोत्र); @deva[गार्गि] → son (grandson of गर्ग) = @deva[गार्ग्यः] (गोत्र). Similarly @deva[वात्स्यः]. Exclusion: immediate son is not @deva[गोत्र]—@deva[कौञ्जिः], @deva[गार्गिः] are sons (पुत्र), not गोत्र.",
            "advanced": "This sūtra defines @deva[गोत्रसंज्ञा]: @deva[पौत्रप्रभृत्यपत्यम्] (grandson+ descendant) = @deva[गोत्र]. @deva[गर्ग] → @deva[गार्गिः] (पुत्र) → @deva[गार्ग्यः] (गोत्र). Exclusion: @deva[पुत्र] ≠ गोत्र—@deva[कौञ्जिः], @deva[गार्गिः]."
        }
    },
    "41163": {
        "en": {
            "simple": "When an ancestor (@deva[वंश्य]) is alive, the descendant of a @deva[गोत्र] is called @deva[युवन्] only. Example: @deva[गार्ग्यायणः] (युवन् when Garga/Gārgi etc. is alive).",
            "standard": "When a @deva[वंश्य] (lineal ancestor—father, grandfather, etc.) is alive, the descendant of a @deva[गोत्र] (grandson+) is called @deva[युवन्] (not @deva[गोत्र]). The phrase @deva[पौत्रप्रभृतेर्यदपत्यम्] means 'descendant of a grandson+'. @deva[युवन्] applies to at least the 4th generation from the propositus. @deva[गर्गः] → @deva[गार्गिः] (son) → @deva[गार्ग्यः] (गोत्र) → @deva[गार्ग्यायणः] (युवन्, if Garga/Gārgi/Gārgya is alive). The @deva[तु] indicates: @deva[युवन्] only, not @deva[गोत्र] simultaneously.",
            "advanced": "This sūtra defines @deva[युवसंज्ञा]: when @deva[वंश्य] (lineal ancestor) is alive (@deva[जीवति]), @deva[पौत्रप्रभृतेरपत्यम्] = @deva[युवन्]. Parse: @deva[पौत्रप्रभृतेर् यद् अपत्यम्] (descendant of grandson+). @deva[युवन्] = 4th+ generation. @deva[गर्गः] → @deva[गार्गिः] (पुत्र) → @deva[गार्ग्यः] (गोत्र) → @deva[गार्ग्यायणः] (युवन् if ancestor alive). @deva[तु] = @deva[युवन् एव], not @deva[गोत्र]."
        }
    },
    "41164": {
        "en": {
            "simple": "When an elder brother is alive, the younger brother gets @deva[युवन्] designation. Example: younger brother @deva[गार्ग्यायणः] when elder brother @deva[गार्ग्यः] is alive.",
            "standard": "Even when @deva[वंश्य] (ancestors) are not alive, the younger brother gets @deva[युवन्] designation when the elder brother is alive. A brother is not @deva[वंश्य] (one doesn't arise from a brother). Example: @deva[गर्गः] (dead) → @deva[गार्गिः] (dead) → @deva[गार्ग्यः] (dead) → two sons: elder @deva[गार्ग्यः], younger @deva[गार्ग्यायणः]. The younger is called @deva[गार्ग्यायणः] with reference to elder @deva[गार्ग्यः]. Similarly @deva[वात्स्यायणः], @deva[दाक्षायणः], @deva[प्लाक्षायणः].",
            "advanced": "This sūtra extends @deva[युवसंज्ञा] to younger brothers when elder brother is alive, even without living @deva[वंश्य]. Brother ≠ @deva[वंश्य] (not source of origin). @deva[गर्गः] (dead) → @deva[गार्गिः] (dead) → @deva[गार्ग्यः] (dead) → elder @deva[गार्ग्यः], younger @deva[गार्ग्यायणः]. Similarly @deva[वात्स्यायणः], @deva[दाक्षायणः], @deva[प्लाक्षायणः]."
        }
    },
    "41165": {
        "en": {
            "simple": "When a more senior @deva[सपिण्ड] (other than brother) is alive, the living descendant of a @deva[गोत्र] is optionally called @deva[युवन्]. Examples: @deva[गार्ग्यायणः] or @deva[गार्ग्यः] (when uncle/great-uncle is alive).",
            "standard": "When a @deva[स्थविरतर सपिण्ड] (more senior relative within seven degrees, other than brother) is alive, the living @deva[पौत्रप्रभृत्यपत्य] (grandson+ descendant) is optionally called @deva[युवन्] (or @deva[गोत्र]). @deva[स्थविर] = senior; @deva[स्थविरतर] = more senior (by degree and age). The sūtra repeats @deva[जीवति]: one @deva[जीवति] qualifies the descendant, the anuवृत्ति @deva[जीवति] from @ref[4.1.163] qualifies the @deva[सपिण्ड]. Example: @deva[गर्गः] (dead) → @deva[गार्गिः] (alive—uncle/grandfather's brother) → @deva[गार्ग्यः] (dead) → descendant = @deva[गार्ग्यायणः] or @deva[गार्ग्यः] (optional).",
            "advanced": "This sūtra makes @deva[युवसंज्ञा] optional when @deva[स्थविरतर सपिण्ड] (more senior sapinda, non-brother) is alive and descendant is alive. @deva[सपिण्ड] extends 7 degrees. @deva[स्थविरतर] = senior by both descent and age. Two @deva[जीवति]: sūtra's qualifies descendant; anuवृत्ति from @ref[4.1.163] qualifies sapinda. @deva[गर्गः] (dead) → @deva[गार्गिः] (alive) → @deva[गार्ग्यः] (alive or dead) → descendant = @deva[गार्ग्यायणः] or @deva[गार्ग्यः] (optional)."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.151-4.1.165 (Batch 11)")
