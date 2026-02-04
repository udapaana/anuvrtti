#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.16-4.1.30 (Batch 2 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41016": {
        "en": {
            "simple": "After stems ending in the affix @deva[यञ्] (from @ref[4.1.105]), the feminine affix @deva[ङीप्] is used. Example: @deva[गार्ग्य] → @deva[गार्गी] (female descendant of Garga); @deva[वात्स्य] → @deva[वात्सी].",
            "standard": "Stems formed by @deva[यञ्] (@ref[4.1.105], @deva[गर्गादि] class) take @deva[ङीप्] in the feminine. The process: @deva[गार्ग्य] + @deva[ङीप्] → @deva[गार्ग्य] + @deva[ई] (@ref[6.4.148]) → @deva[गार्ग्] + @deva[ई] (@ref[6.4.150]) = @deva[गार्गी]. Similarly @deva[वात्सी]. Vārtika: This applies only when @deva[यञ्] denotes descent (@deva[अपत्य])—not otherwise. Hence @deva[द्वैप्य] (from @deva[द्वीप] + @deva[यञ्] @ref[4.3.10], meaning 'relating to an island') → @deva[द्वैप्या] (not @deva[द्वैप्यी]). This sūtra is separated from @ref[4.1.15] to establish @deva[यञ्] anuvṛtti for subsequent rules.",
            "advanced": "This sūtra provides @deva[ङीप्] for @deva[यञन्त] stems (from @ref[4.1.105] @deva[गर्गादि] class). Derivation: @deva[गार्ग्य] + ङीप् → @deva[ई] replaces @deva[य] by @ref[6.4.148] → @deva[य्] + @deva[ई] by @ref[6.4.150] (य्-lopa) = @deva[गार्गी]. Vārtika: @deva[अपत्येऽयं विधिः]—applies only for @deva[अपत्यार्थ], not other @deva[यञ्] usages. Thus @deva[द्वैप्य] (@ref[4.3.10], 'island-related') → @deva[द्वैप्या]. The separation from @ref[4.1.15] establishes @deva[यञ्]-anuvṛtti for @ref[4.1.17]-@ref[4.1.19], excluding other @ref[4.1.15] affixes."
        }
    },
    "41017": {
        "en": {
            "simple": "According to Eastern grammarians, the affix @deva[ष्फ] (becoming @deva[आयन]) can optionally be added after @deva[यञ्]-ending words, followed by @deva[ङीष्]. Example: @deva[गार्ग्य] → @deva[गार्ग्यायनी] or @deva[गार्गी].",
            "standard": "Eastern grammarians (@deva[प्राचाम्]) allow optional @deva[ष्फ] after @deva[यञन्त] stems, treated as @deva[तद्धित]. The @deva[ष्] is indicatory (@ref[1.3.6]), indicating that @deva[ङीष्] follows (@ref[4.1.41]). The @deva[फ] becomes @deva[आयन] by @ref[7.1.2]. Thus: @deva[गार्ग्य] + @deva[ष्फ] + @deva[ङीष्] = @deva[गार्ग्यायनी]; @deva[वात्स्य] → @deva[वात्स्यायनी]. Alternatively: @deva[गार्गी], @deva[वात्सी]. The word @deva[सर्वत्र] from @ref[4.1.18] applies inversely here—@deva[ष्फ] can override even rules that would otherwise block it, like @ref[4.1.75] for @deva[आवट्य] → @deva[आवट्यायनी].",
            "advanced": "Per Eastern grammarians, @deva[ष्फ] optionally follows @deva[यञन्त] stems. Technical analysis: @deva[ष्]-इत् by @ref[1.3.6] triggers @deva[ङीष्] via @ref[4.1.41]; declaring it @deva[तद्धितसंज्ञक] ensures @deva[प्रातिपदिक]-status (@ref[1.2.46]). @deva[फ] → @deva[आयन्] by @ref[7.1.2]. Forms: @deva[गार्ग्यायनी], @deva[वात्स्यायनी]. The reverse-anuvṛtti of @deva[सर्वत्र] (@ref[4.1.18]) means @deva[ष्फ] can apply even where specific rules (like @ref[4.1.75] for @deva[आवट्य] → @deva[चाप्]) would otherwise govern—thus @deva[आवट्यायनी] per Eastern view."
        }
    },
    "41018": {
        "en": {
            "simple": "For words in the @deva[लोहित] sub-class (of @deva[गर्गादि]) up through @deva[कत], the affix @deva[ष्फ] is always (not optionally) used. Example: @deva[लोहित्यायनी], @deva[बाभ्रव्यायनी].",
            "standard": "The @deva[लोहितादि] words (a subdivision of @deva[गर्गादि] @ref[4.1.105]) through the word @deva[कत] obligatorily take @deva[ष्फ]—the option of @ref[4.1.17] doesn't apply. The @deva[कत] here is the independent @deva[प्रातिपदिक] after @deva[कपि] in the list, not @deva[कुरुकत]. Forms: @deva[लोहित्यायनी], @deva[शांशित्यायनी], @deva[बाभ्रव्यायणी]. Kārikā note: For @deva[ष्फ] and @deva[अण्] application, @deva[शकल] (listed after @deva[कण्व]) should be read as before @deva[कण्व] and after @deva[कत], yielding @deva[शाकल्यायनी].",
            "advanced": "This sūtra makes @deva[ष्फ] obligatory (@deva[नित्य]) for @deva[लोहितादि] through @deva[कत] (subdivision of @deva[गर्गादि]). The @deva[कत] reference is the standalone stem after @deva[कपि], not compounds like @deva[कुरुकत]. The kārikā @deva[कण्वात्तु शकलः पूर्वः कतादुत्तर इष्यते] reorders @deva[शकल] for @deva[ष्फ]/@deva[अण्] purposes: @deva[शाकल्यायनी] (with @deva[ष्फ]), @deva[शकलाः] = @deva[शाकल्यस्येमे छात्राः] (with @deva[अण्])."
        }
    },
    "41019": {
        "en": {
            "simple": "The affix @deva[ष्फ] is added after @deva[कौरव्य] and @deva[माण्डूक] to form feminines. Example: @deva[कौरव्यायणी], @deva[माण्डूकायनी].",
            "standard": "Two specific words take @deva[ष्फ] in the feminine: @deva[कौरव्य] (from @deva[कुरु] + @deva[ण्य] @ref[4.1.151])—which would otherwise take @deva[टाप्] (@ref[4.1.4])—and @deva[माण्डूक] (from @deva[मण्डूक] + @deva[अण्] @ref[4.1.119])—which would take @deva[ङीप्] (@ref[4.1.15]). Forms: @deva[कौरव्यायणी], @deva[माण्डूकायनी]. Note: @deva[कौरवी सेना] uses @deva[कौरव] (from @deva[कुरु] + @deva[अण्] @ref[4.3.120]), not @deva[कौरव्य]. Vārtika: @deva[आसुरि] should be included: @deva[आसुरायणी].",
            "advanced": "This sūtra specifies @deva[ष्फ] for @deva[कौरव्य] and @deva[माण्डूक]. Analysis: @deva[कौरव्य] (कुरु + ण्य, @ref[4.1.151]) ends in @deva[अ], would take @deva[टाप्] by @ref[4.1.4]; @deva[माण्डूक] (मण्डूक + अण्, @ref[4.1.119]) would take @deva[ङीप्] by @ref[4.1.15]. Both now take @deva[ष्फ]: @deva[कौरव्यायणी], @deva[माण्डूकायनी]. Distinction: @deva[कौरवी] (in @deva[कौरवी सेना]) derives from @deva[कौरव] (@ref[4.3.120]), not @deva[कौरव्य]. Vārtika: @deva[आसुरि] (असुर + इञ्) joins this list: @deva[आसुरायणी]. Per Patañjali, @deva[आसुरि]'s @deva[शैषिक] derivative uses @deva[छ] (@ref[4.2.114]): @deva[आसुरीयः कल्पः]."
        }
    },
    "41020": {
        "en": {
            "simple": "After stems ending in @deva[अ] that denote young age, the feminine affix @deva[ङीप्] is used. Example: @deva[कुमार] → @deva[कुमारी] (girl); @deva[किशोर] → @deva[किशोरी] (young girl).",
            "standard": "Stems ending in @deva[अ] expressing young age (@deva[अचरमे वयसि]) take @deva[ङीप्]. Examples: @deva[कुमारी], @deva[किशोरी], @deva[बर्करी] (she-kid). Why 'young age'? Words for old age take @deva[टाप्]: @deva[स्थविरा], @deva[वृद्धा]. Why 'ending in @deva[अ]'? @deva[शिशु] is common gender (no feminine affix). Vārtika: The rule should be @deva[आचरमे वयसि] (not old age)—including words for maturity: @deva[वधूटी], @deva[चिरण्टी]. Exception: @deva[कन्या] (girl) takes @deva[टाप्], acknowledged by Pāṇini's own usage in @ref[4.1.116].",
            "advanced": "This sūtra provides @deva[ङीप्] for @deva[अकारान्त] stems denoting @deva[वयस्] (age-stage), specifically youth. Condition: @deva[अचरमे वयसि]—early age, not final/old age. Forms: @deva[कुमारी], @deva[किशोरी], @deva[बर्करी]. Restrictions: (1) @deva[वयोवचन]—@deva[स्थविरा], @deva[वृद्धा] (old age) take @deva[टाप्]; (2) @deva[अकारान्त]—@deva[शिशु] stays common gender. Vārtika: @deva[आचरमे] (not just first stage, but non-final) includes matured youth: @deva[वधूटी], @deva[चिरण्टी]. Exception: @deva[कन्या] anomalously takes @deva[टाप्] (Pāṇini uses it in @ref[4.1.116]). Non-qualifying: metaphorical age-words like @deva[उत्तानशया], @deva[लोहितपादिका] don't trigger @deva[ङीप्]."
        }
    },
    "41021": {
        "en": {
            "simple": "After a @deva[द्विगु] compound (numeral compound) ending in @deva[अ], the feminine affix @deva[ङीप्] is used. Example: @deva[दशपूली], @deva[पञ्चपूली]. But @deva[त्रिफला] uses @deva[टाप्] because it's in the @deva[अजादि] class.",
            "standard": "@deva[द्विगु] (numeral determinative) compounds ending in @deva[अ] take @deva[ङीप्] in the feminine. Examples: @deva[दशपूली] (ten bundles), @deva[पञ्चपूली]. Exception: @deva[त्रिफला] (three myrobalans) takes @deva[टाप्] because it's listed in @deva[अजादि] (@ref[4.1.4]).",
            "advanced": "This sūtra assigns @deva[ङीप्] to @deva[अकारान्त] @deva[द्विगु] compounds. The @deva[द्विगु] is a @deva[तत्पुरुष] subtype with a numeral as first member (@ref[2.1.51]-@ref[2.1.52]). Examples: @deva[दशपूली], @deva[पञ्चपूली]. Exception by @ref[4.1.4]: @deva[त्रिफला] (in @deva[अजादि] list) takes @deva[टाप्]. Note: @deva[त्रिफला] as @deva[द्विगु] = @deva[टाप्]; as @deva[बहुव्रीहि] = @deva[ङीप्] (@deva[त्रिफली])."
        }
    },
    "41022": {
        "en": {
            "simple": "@deva[ङीप्] is NOT used when a @deva[तद्धित] affix is dropped after a @deva[द्विगु] compound that doesn't end in a measurement word, or ends in @deva[बिस्त], @deva[आचित], or @deva[कम्बल्य]. Example: @deva[पञ्चाश्वा] (purchased for five horses), not @deva[पञ्चाश्वी].",
            "standard": "When a @deva[तद्धित] affix is elided (@deva[लुक्]) after a @deva[द्विगु] compound, @deva[ङीप्] is blocked if: (1) the final word doesn't denote @deva[परिमाण] (measure), or (2) the final is @deva[बिस्त], @deva[आचित], or @deva[कम्बल्य] (which do denote measure). Thus @deva[पञ्चाश्वा] (purchased for five horses—@deva[ठञ्] @ref[5.1.37] elided by @ref[5.1.28]). Time/number words aren't @deva[परिमाण]: @deva[द्विवर्षा], @deva[त्रिशता]. @deva[बिस्त]-class: @deva[द्विबिस्ता], @deva[द्व्याचिता]. But @deva[परिमाण]-final words take @deva[ङीप्]: @deva[द्व्याढकी]. In @deva[समाहारद्विगु] (collective), @deva[ङीप्] applies: @deva[पञ्चाश्वी], @deva[दशाश्वी].",
            "advanced": "This sūtra prohibits @deva[ङीप्] for @deva[द्विगु] compounds with @deva[तद्धितलुक्] when: (1) final isn't @deva[परिमाणवाचक], or (2) final is @deva[बिस्त]/आचित/कम्बल्य (though these are @deva[परिमाण], they're exceptions). @deva[पञ्चाश्व] (ठञ् by @ref[5.1.37], लुक् by @ref[5.1.28]) → @deva[पञ्चाश्वा]. Distinction: @deva[संख्या] (number) and @deva[काल] (time) aren't @deva[परिमाण]: @deva[द्विवर्षा], @deva[त्रिशता]. @deva[बिस्त]-class treated specially: @deva[द्विबिस्ता], @deva[त्र्याचिता], @deva[द्विकम्बल्या]. Actual @deva[परिमाण]-finals take @deva[ङीप्]: @deva[द्व्याढकी] (@deva[आढक] = measure). @deva[समाहारद्विगु] (aggregate sense) still takes @deva[ङीप्]: @deva[पञ्चाश्वी], @deva[दशाश्वी]."
        }
    },
    "41023": {
        "en": {
            "simple": "@deva[ङीप्] is NOT used after a @deva[द्विगु] compound ending in @deva[काण्ड] when the @deva[तद्धित] is dropped AND it refers to field measurement. Example: @deva[द्विकाण्डा] @deva[क्षेत्रभक्तिः] (a field division of two kāṇḍas). But for a rope: @deva[द्विकाण्डी] @deva[रज्जुः].",
            "standard": "When @deva[द्विगु] compounds end in @deva[काण्ड] with @deva[तद्धितलुक्] (elided by vārtika @deva[प्रमाणे लुक् द्विगोर्नित्यम्] under @ref[5.2.37]) and refer to superficial land measure (@deva[क्षेत्र]), @deva[ङीप्] is blocked. Thus @deva[द्विकाण्डा क्षेत्रभक्तिः], @deva[त्रिकाण्डा क्षेत्रभक्तिः]. But for linear measure (rope): @deva[द्विकाण्डी रज्जुः], @deva[त्रिकाण्डी रज्जुः]. This sūtra regulates @ref[4.1.22]'s prohibition.",
            "advanced": "This @deva[नियम] sūtra restricts @ref[4.1.22]: the @deva[ङीप्]-prohibition for @deva[काण्डान्त]-द्विगु applies only when @deva[क्षेत्र] (field/land measure) is meant. @deva[काण्ड] is @deva[अपरिमाणवाचक], so @ref[4.1.22] would universally block @deva[ङीप्]; this sūtra limits that to land measure contexts. Field: @deva[द्विकाण्डा क्षेत्रभक्तिः]. Non-field (linear, like rope): @deva[द्विकाण्डी रज्जुः], @deva[त्रिकाण्डी रज्जुः] (@deva[ङीप्] applies)."
        }
    },
    "41024": {
        "en": {
            "simple": "@deva[ङीप्] is optionally used after @deva[द्विगु] compounds ending in @deva[पुरुष] when @deva[तद्धित] is dropped and measurement is meant. Example: @deva[द्विपुरुषा] or @deva[द्विपुरुषी] @deva[परिखा] (a moat two puruṣas wide).",
            "standard": "For @deva[द्विगु] compounds ending in @deva[पुरुष] with @deva[तद्धितलुक्], @deva[ङीप्] is optional when @deva[परिमाण] (measure) is intended. Thus @deva[द्विपुरुषा]/द्विपुरुषी @deva[परिखा], @deva[त्रिपुरुषा]/त्रिपुरुषी. This creates optionality where @ref[4.1.22] would have prohibited universally. But when not meaning measure: @deva[द्विपुरुषा] only (purchased for two males). In @deva[समाहारद्विगु]: @deva[द्विपुरुषी], @deva[त्रिपुरुषी] (only @deva[ङीप्]).",
            "advanced": "This sūtra establishes @deva[प्राप्तविभाषा] for @deva[पुरुषान्त]-द्विगु with @deva[तद्धितलुक्] in @deva[परिमाणार्थ]. Without this, @ref[4.1.22] would universally block @deva[ङीप्] (since @deva[पुरुष] isn't @deva[परिमाणवाचक]). Now optional: @deva[द्विपुरुषा]/द्विपुरुषी परिखा. Restriction @deva[परिमाणे]: non-measure sense (@deva[द्विपुरुषा] = purchased for two males) has no option. @deva[समाहारद्विगु]: @deva[द्विपुरुषी], @deva[त्रिपुरुषी] (no @deva[तद्धितलुक्], so @deva[ङीप्] by @ref[4.1.21])."
        }
    },
    "41025": {
        "en": {
            "simple": "After @deva[बहुव्रीहि] compounds ending in @deva[ऊधस्] (udder), the feminine affix @deva[ङीप्] is used. Example: @deva[कुण्डोध्नी] (woman with full bosom), @deva[घटोध्नी] (cow with jar-like udders).",
            "standard": "Bahuvrīhi compounds ending in @deva[ऊधस्] take @deva[ङीप्]. The final @deva[ऊधस्] is replaced by @deva[अनङ्] (@ref[5.4.131]): @deva[कुण्ड] + @deva[ऊधस्] → @deva[कुण्डोधन्]; then @deva[ङीप्] with @deva[अ]-elision (@ref[6.4.134]): @deva[कुण्डोध्नी]. This overrides rules @ref[4.1.12], @ref[4.1.13], and @ref[4.1.28]. The @deva[अन्]-substitution only occurs when feminine is expressed—masculine: @deva[महोधा पर्जन्यः] (big-bosomed cloud). Not for @deva[तत्पुरुष]: @deva[प्राप्तोधाः] (@ref[2.2.4]).",
            "advanced": "This sūtra provides @deva[ङीप्] for @deva[ऊधसन्त]-bahuvrīhis. Process: @deva[ऊधस्] → @deva[अनङ्] by @ref[5.4.131] (only for feminine); then @deva[अल्लोप] (@ref[6.4.134]) before @deva[ङीप्]: @deva[कुण्डोधन्] → @deva[कुण्डोध्नी], @deva[घटोध्नी]. This overrides @ref[4.1.12] (@deva[मनन्त]-prohibition), @ref[4.1.13] (@deva[डाप्]), and @ref[4.1.28] (optional @deva[ङीप्] for @deva[अल्लोप]-bahuvrīhis). Restriction: @deva[बहुव्रीहौ]—tatpuruṣa @deva[प्राप्तोधाः] (@ref[2.2.4]) excluded. The @deva[अनङ्]-substitution is feminine-specific; masculine: @deva[महोधा पर्जन्यः]."
        }
    },
    "41026": {
        "en": {
            "simple": "After @deva[बहुव्रीहि] compounds ending in @deva[ऊधस्] that begin with a numeral or indeclinable, @deva[ङीप्] (not @deva[ङीष्]) is used. Example: @deva[द्व्यूध्नी] (having two udders), @deva[अत्यूध्नी] (many-uddered).",
            "standard": "When @deva[ऊधसन्त]-bahuvrīhis begin with @deva[संख्या] (numeral) or @deva[अव्यय] (indeclinable), @deva[ङीप्] applies (overriding @deva[ङीष्] of @ref[4.1.25]). Examples: @deva[द्व्यूध्नी], @deva[त्र्यूध्नी] (numeral-initial); @deva[अत्यूध्नी], @deva[निरूध्नी] (indeclinable-initial). The phrase 'beginning with' extends to compounds where the first element itself begins with a numeral: @deva[द्विविधोध्नी], @deva[त्रिविधोध्नी].",
            "advanced": "This sūtra specifies @deva[ङीप्] (not @deva[ङीष्]) for @deva[ऊधसन्त]-bahuvrīhis with @deva[संख्या]/@deva[अव्यय] as first member. @deva[संख्यापूर्व]: @deva[द्व्यूध्नी], @deva[त्र्यूध्नी]. @deva[अव्ययपूर्व]: @deva[अत्यूध्नी], @deva[निरूध्नी]. The @deva[पूर्व] extends to compounds where the first element begins with @deva[संख्या]: @deva[द्विविधोध्नी], @deva[त्रिविधोध्नी] (@deva[द्विविध]/त्रिविध begin with numerals though aren't themselves @deva[संख्या])."
        }
    },
    "41027": {
        "en": {
            "simple": "After @deva[बहुव्रीहि] compounds beginning with a numeral and ending in @deva[दामन्] (rope) or @deva[हायन] (year), @deva[ङीप्] is used. Example: @deva[द्विदाम्नी] (bound by two ropes), @deva[द्विहायनी] (two years old).",
            "standard": "Bahuvrīhi compounds with @deva[संख्या]-initial and final @deva[दामन्] or @deva[हायन] take @deva[ङीप्]. @deva[दामन्] would be subject to @ref[4.1.13] (@deva[डाप्]), @ref[4.1.11] (prohibition), and @ref[4.1.28] (optional @deva[ङीप्])—this sūtra mandates @deva[ङीप्]: @deva[द्विदाम्नी], @deva[त्रिदाम्नी]. @deva[हायन] would take @deva[टाप्] (@ref[4.1.4])—here @deva[ङीप्]: @deva[द्विहायनी], @deva[त्रिहायणी]. Vārtika: @deva[हायन] must denote age for this rule; otherwise: @deva[द्विहायना शाला] (hall of two years' existence). Also, @deva[ण]-substitution for @deva[न] only occurs when @deva[हायन] denotes age.",
            "advanced": "This sūtra mandates @deva[ङीप्] for @deva[संख्यापूर्व]-bahuvrīhis ending in @deva[दामन्] or @deva[हायन]. For @deva[दामन्]: overrides @ref[4.1.13] (@deva[डाप्]), @ref[4.1.11] (@deva[मनन्त]-prohibition), @ref[4.1.28] (optional): @deva[द्विदाम्नी], @deva[त्रिदाम्नी]. For @deva[हायन]: overrides @deva[टाप्] (@ref[4.1.4]): @deva[द्विहायनी], @deva[त्रिहायणी], @deva[चतुर्हायणी]. Vārtika: @deva[वयसि हायनम्]—@deva[हायन] must denote age; non-age: @deva[द्विहायना शाला] (two-year-old hall). The @deva[न] → @deva[ण] change also requires age-sense."
        }
    },
    "41028": {
        "en": {
            "simple": "After @deva[बहुव्रीहि] compounds ending in @deva[अन्] that lose their penultimate vowel, @deva[ङीप्] may optionally be used. Example: @deva[बहुराजन्] → @deva[बहुराज्ञी] (having many kings) or @deva[बहुराजा]/@deva[बहुराजानौ].",
            "standard": "Bahuvrīhi compounds ending in @deva[अन्] that undergo @deva[अल्लोप] (penultimate @deva[अ]-elision by @ref[6.4.134]) optionally take @deva[ङीप्]. Thus @deva[बहुराजन्] → @deva[बहुराज्ञी]; alternatively, @deva[डाप्] by @ref[4.1.13]: @deva[बहुराजा/बहुराजे/बहुराजाः]; or prohibition by @ref[4.1.12]: @deva[बहुराजा/बहुराजानौ/बहुराजानः]. When @deva[अल्लोप] doesn't occur (@ref[6.4.137] blocks it for @deva[सुपर्वन्] etc.), only the latter two options exist: @deva[सुपर्वा/सुपर्वे/सुपर्वाः] or @deva[सुपर्वा/सुपर्वाणौ/सुपर्वाणः].",
            "advanced": "This sūtra provides optional @deva[ङीप्] for @deva[अनन्त]-bahuvrīhis undergoing @deva[अल्लोप] (@ref[6.4.134]). Three options when @deva[अल्लोप] occurs: (1) @deva[ङीप्]: @deva[बहुराज्ञी]; (2) @deva[डाप्] (@ref[4.1.13]): @deva[बहुराजा/बहुराजे/बहुराजाः]; (3) prohibition (@ref[4.1.12]): @deva[बहुराजा/बहुराजानौ/बहुराजानः]. When @deva[अल्लोप] is blocked by @ref[6.4.137] (@deva[न संयोगाद्वमन्तात्]—after @deva[व्/म्]-final conjuncts), @deva[ङीप्] unavailable: @deva[सुपर्वन्] → @deva[सुपर्वा/सुपर्वे/सुपर्वाः] or @deva[सुपर्वा/सुपर्वाणौ/सुपर्वाणः]."
        }
    },
    "41029": {
        "en": {
            "simple": "In Vedic texts and for names, @deva[ङीप्] is always (not optionally) used after @deva[बहुव्रीहि] compounds ending in @deva[अन्] that lose their penultimate vowel. Example: @deva[सुराज्ञी] (city name), @deva[एकदाम्नी] (Vedic).",
            "standard": "In @deva[छन्दस्] (Vedic) and @deva[संज्ञा] (proper names), the optionality of @ref[4.1.28] becomes obligatory—@deva[ङीप्] must be used. Names: @deva[सुराज्ञी], @deva[अतिराज्ञी] (cities). Vedic: @deva[गौः पञ्चदाम्नी], @deva[एकदाम्नी], @deva[द्विदाम्नी] (cows with various numbers of udders); @deva[एकमूर्ध्नी], @deva[समानमूर्ध्नी].",
            "advanced": "This sūtra converts @ref[4.1.28]'s option to @deva[नित्य] for @deva[संज्ञा] (names) and @deva[छन्दस्] (Vedas). Names: @deva[सुराज्ञी], @deva[अतिराज्ञी] (place names). Vedic usage: @deva[गौः पञ्चदाम्नी/एकदाम्नी/द्विदाम्नी], @deva[एकमूर्ध्नी], @deva[समानमूर्ध्नी]. The @deva[संज्ञाछन्दसोः] domain continues to @ref[4.1.30]."
        }
    },
    "41030": {
        "en": {
            "simple": "In Vedic texts and for names, @deva[ङीप्] is always used after the following stems: @deva[केवल], @deva[मामक], @deva[भागधेय], @deva[पाप], @deva[अपर], @deva[समान], @deva[प्रवण], @deva[आर्यकृत], @deva[सुमङ्गल], @deva[भेषज]. Example: @deva[केवली] (Vedic) vs. @deva[केवला] (ordinary).",
            "standard": "The @deva[संज्ञाछन्दसोः] domain from @ref[4.1.29] continues. The listed stems take @deva[ङीप्] obligatorily in Vedic/names but @deva[टाप्] ordinarily: @deva[केवली]/केवला, @deva[मामकी]/मामिका, @deva[भागधेयी]/भागधेया (as in @deva[मित्रावरुणयोर्भागधेयी]), @deva[पापी]/पापा, @deva[अपरी]/अपरा (Ṛgveda I.1.13: @deva[उताऽपरीभ्यो...]), @deva[समानी]/समाना, @deva[प्रवाणी]/प्रवाणा, @deva[आर्यकृती]/आर्यकृता, @deva[सुमङ्गली]/सुमङ्गला (Ṛgveda X.85.33), @deva[भेषजी]/भेषजा. Note: @deva[सुमङ्गल] also takes @deva[ङीष्] by @ref[4.1.41] as @deva[गौरादि] #86.",
            "advanced": "The @deva[संज्ञाछन्दसोः] condition from @ref[4.1.29] governs this sūtra. Listed stems: @deva[केवल], @deva[मामक], @deva[भागधेय], @deva[पाप], @deva[अपर], @deva[समान], @deva[प्रवण], @deva[आर्यकृत], @deva[सुमङ्गल], @deva[भेषज]—all take obligatory @deva[ङीप्] in Vedic/names, optional elsewhere. Vedic citations: @deva[उताऽपरीभ्योमघवा विजिग्ये] (Ṛgveda I.1.13); @deva[सुमङ्गली] (Ṛgveda X.85.33). @deva[सुमङ्गल] also qualifies under @ref[4.1.41] (@deva[गौरादि] #86) for @deva[ङीष्]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.16-4.1.30 (Batch 2)")
