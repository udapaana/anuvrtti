#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.2.106-4.2.120 (Batch 8 of 4.2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "42106": {
        "en": {
            "simple": "After words ending in @deva[तीर], @deva[अञ्] is used; after words ending in @deva[रूप्य], @deva[ञ] is used. Examples: @deva[काकतीरम्], @deva[पाल्वलतीरम्], @deva[वार्करूप्यम्], @deva[शैवरूप्यम्].",
            "standard": "After words ending in @deva[तीर] (bank), the affix @deva[अञ्] comes; after words ending in @deva[रूप्य] (silver), the affix @deva[ञ] comes, in remaining senses (debarring @deva[अण्]): @deva[काकतीरम्], @deva[पाल्वलतीरम्] (from @deva[तीर]-ending); @deva[वार्करूप्यम्], @deva[शैवरूप्यम्] (from @deva[रूप्य]-ending). Feminine: @deva[अञ्]-forms take @deva[ङीप्] (@ref[4.1.15]); @deva[ञ]-forms take @deva[टाप्] (@ref[4.1.4]). Note: Sūtra is NOT @deva[तीररूप्यान्तात्] to prevent applying to @deva[तदन्त] words.",
            "advanced": "This sūtra provides @deva[अञ्] for @deva[तीरान्त] and @deva[ञ] for @deva[रूप्यान्त]: @deva[काकतीरम्], @deva[वार्करूप्यम्]. @deva[अञ्] → @deva[ङीप्] (@ref[4.1.15]); @deva[ञ] → @deva[टाप्] (@ref[4.1.4]). Not @deva[तीररूप्यान्तात्] to avoid @deva[तदन्तविधि]."
        }
    },
    "42107": {
        "en": {
            "simple": "After compounds with a direction-word as first member (when not a name), @deva[ञ] is used. Examples: @deva[पौर्वशालः] (in eastern hall), @deva[दाक्षिणशालः].",
            "standard": "After a compound whose first member denotes direction (@deva[दिक्पूर्वपद]) and which is NOT a name (@deva[असंज्ञायाम्]), the affix @deva[ञ] comes in remaining senses (debarring @deva[अण्]); feminine in @deva[आ]: @deva[पूर्वशाला] + @deva[ञ] = @deva[पौर्वशालः] (@ref[6.4.148], @ref[7.2.117]) 'one who is in the eastern hall'; similarly @deva[दाक्षिणशालः]. @deva[असंज्ञायाम्] qualifies the base.",
            "advanced": "This sūtra provides @deva[ञ] for @deva[दिक्पूर्वपद असंज्ञा]-compounds: @deva[पौर्वशालः], @deva[दाक्षिणशालः]. @ref[6.4.148], @ref[7.2.117] apply. @deva[असंज्ञायाम्] = non-name condition."
        }
    },
    "42108": {
        "en": {
            "simple": "After @deva[मद्र] preceded by a direction-word, @deva[अञ्] is used. Examples: @deva[पौर्वमद्रः] (f. @deva[द्री]), @deva[आपरमद्रः] (f. @deva[द्री]).",
            "standard": "After @deva[मद्र] (a people/region) preceded by a direction-word, the affix @deva[अञ्] comes in remaining senses: @deva[पौर्वमद्रः] (Eastern Madra), f. @deva[पौर्वमद्री]; @deva[आपरमद्रः] (Western Madra), f. @deva[आपरमद्री]. Note: Contrary to the previous sūtra, the initial vowel IS @deva[वृद्धि]ed by @ref[7.3.13] which makes a special exception for @deva[मद्र].",
            "advanced": "This sūtra provides @deva[अञ्] for @deva[दिक्पूर्वपद] + @deva[मद्र]: @deva[पौर्वमद्रः], @deva[आपरमद्रः]. @ref[7.3.13] special @deva[वृद्धि] for @deva[मद्र]."
        }
    },
    "42109": {
        "en": {
            "simple": "After polysyllabic @deva[अन्तोदात्त] village-names of Northerners, @deva[अञ्] is used. Examples: @deva[शैवपुरम्], @deva[भाण्डपुरम्].",
            "standard": "After village-names of the Northern people (@deva[उदीच्य]) which have more than two syllables (@deva[बह्वच्]) and @deva[उदात्त] accent on the final, the affix @deva[अञ्] comes in remaining senses (debarring @deva[अण्]): @deva[शैव॑पुरम्], @deva[भा॑ण्डपुरम्]. The governing force of @deva[दिक्] ceases here. Why 'village of north-folk'? For others: @deva[माथुर॑म्] (by @deva[अण्], different accent). Why 'more than two syllables'? For dissyllables, different rules apply.",
            "advanced": "This sūtra provides @deva[अञ्] for @deva[उदीच्य-ग्राम], @deva[बह्वच्], @deva[अन्तोदात्त]: @deva[शैवपुरम्], @deva[भाण्डपुरम्]. @deva[दिक्]-अनुवृत्ति ends. Non-उदीच्य: @deva[माथुरम्] (@deva[अण्])."
        }
    },
    "42110": {
        "en": {
            "simple": "After words ending in @deva[प्रस्थ], after @deva[पलदी]-etc., and after words with penultimate @deva[क्], @deva[अण्] is used. Examples: @deva[माद्रीप्रस्थः], @deva[पालदः], @deva[नैलिनकः].",
            "standard": "After words ending in @deva[प्रस्थ], after @deva[पलद्यादि] words, and after words with penultimate @deva[क्] (@deva[उपधाक्])—whether or not they are villages of Northern folk—the affix @deva[अण्] comes in remaining senses (debarring @deva[अञ्] of @ref[4.2.109]): @deva[माद्रीप्रस्थः], @deva[माहकीप्रस्थः] (from @deva[प्रस्थान्त]); @deva[पालदः], @deva[पारिषदः] (from @deva[पलद्यादि]); @deva[नैलिनकः], @deva[चैवातकः] (from @deva[उपधाक्]). @deva[पलद्यादि] words denoting @deva[वाहीक] villages don't take @deva[ठञ्] or other affixes.",
            "advanced": "This sūtra provides @deva[अण्] (debarring @deva[अञ्] @ref[4.2.109]) for @deva[प्रस्थान्त]/पलद्यादि/उपधाक्: @deva[माद्रीप्रस्थः], @deva[पालदः], @deva[नैलिनकः]. @deva[वाहीक-ग्राम] in @deva[पलद्यादि] don't take @deva[ठञ्]."
        }
    },
    "42111": {
        "en": {
            "simple": "After patronymics formed from @deva[कण्व] etc., @deva[अण्] is used. Example: @deva[काण्वाः] (pupils of Kāṇva), @deva[गौकक्षाः].",
            "standard": "After words ending in the @deva[गोत्र] (patronymic) affix ordained for @deva[कण्वादि] words, the affix @deva[अण्] comes in remaining senses (debarring @deva[छ] @ref[4.2.114]): @deva[काण्वाः] (the pupils of Kāṇva); @deva[गौकक्षाः]. The word @deva[गोत्रे] doesn't qualify the sense of the base or affix—it simply means 'after a word ending with the affix ordained for @deva[गोत्र] from Kaṇvādi words'.",
            "advanced": "This sūtra provides @deva[अण्] (debarring @deva[छ] @ref[4.2.114]) for @deva[कण्वादि-गोत्रान्त]: @deva[काण्वाः], @deva[गौकक्षाः]. @deva[गोत्रे] = after गोत्र-affix from Kaṇvādi."
        }
    },
    "42112": {
        "en": {
            "simple": "After family-names formed by @deva[इञ्], @deva[अण्] is used. Examples: @deva[दाक्षाः] (pupils of Dākṣi), @deva[प्लाक्षाः], @deva[माहकाः].",
            "standard": "After a @deva[गोत्र] (family-name) formed by @deva[इञ्], the affix @deva[अण्] comes in remaining senses: @deva[दक्ष] → @deva[दाक्षि] (patronymic) → @deva[दाक्षाः] (pupils of Dākṣi); @deva[प्लाक्षाः], @deva[माहकाः]. The final @deva[इ] is elided before @deva[अण्] by @ref[6.4.148]. Why 'denoting a family-name'? For non-@deva[गोत्र] words formed by @deva[इञ्] (like @ref[4.2.80]): @deva[सौतङ्गमिः] (four-fold sense, not family), @deva[छ] applies.",
            "advanced": "This sūtra provides @deva[अण्] for @deva[इञन्त-गोत्र]: @deva[दाक्षाः], @deva[प्लाक्षाः]. @ref[6.4.148] @deva[इ]-elision. Non-गोत्र @deva[इञन्त]: @deva[सौतङ्गमिः] → @deva[छ]."
        }
    },
    "42113": {
        "en": {
            "simple": "Dissyllabic @deva[इञ्]-patronymics of Eastern or @deva[भरत] people don't take @deva[अण्]; they take @deva[छ]. Examples: @deva[पौष्कीयाः], @deva[काशीयाः].",
            "standard": "This sūtra blocks @deva[अण्] (@ref[4.2.112]) for @deva[इञ्]-ending patronymics that are dissyllabic (@deva[द्व्यच्]) and denote family-names of Eastern People (@deva[प्राच्य]) or @deva[भरत]. They take @deva[छ] (@ref[4.2.114]) instead: @deva[पौष्कीयाः], @deva[काशीयाः] (from @deva[पौष्कि], @deva[काशि]).",
            "advanced": "This sūtra blocks @deva[अण्] (@ref[4.2.112]) for @deva[द्व्यच् इञन्त-गोत्र] of @deva[प्राच्य]/भरत → @deva[छ] (@ref[4.2.114]): @deva[पौष्कीयाः], @deva[काशीयाः]."
        }
    },
    "42114": {
        "en": {
            "simple": "After @deva[वृद्ध] words (having @deva[वृद्धि] in first syllable), @deva[छ] is used. Examples: @deva[गार्गीयः], @deva[वात्सीयः], @deva[शालीयः], @deva[मालीयः].",
            "standard": "After @deva[वृद्ध] words (defined in @ref[1.1.73] ff.—having @deva[वृद्धि] in first syllable), the affix @deva[छ] (@deva[ईय]) comes in remaining senses (debarring @deva[अण्]): from @deva[गार्ग्य] → @deva[गार्गीयः] (@ref[6.4.148], @ref[6.4.152]); @deva[वात्सीयः], @deva[शालीयः], @deva[मालीयः]. The word @deva[गोत्र] doesn't govern this sūtra—it's a general rule. This subsequent rule debars preceding rules in case of conflict (@ref[1.4.2]).",
            "advanced": "This sūtra provides @deva[छ] (debarring @deva[अण्]) for @deva[वृद्ध] (@ref[1.1.73] ff.): @deva[गार्गीयः], @deva[वात्सीयः], @deva[शालीयः], @deva[मालीयः]. @ref[6.4.148], @ref[6.4.152]. General rule; @deva[गोत्र] doesn't govern."
        }
    },
    "42115": {
        "en": {
            "simple": "After @deva[भवत्] (a @deva[वृद्ध] word), @deva[ठक्] and @deva[छस्] are used. Examples: @deva[भावत्कः], @deva[भावतीयः].",
            "standard": "After @deva[भवत्] (a @deva[वृद्ध] word belonging to @deva[त्यदादि] class @ref[1.1.74]), the affixes @deva[ठक्] and @deva[छस्] come in remaining senses (debarring @deva[छ] @ref[4.2.114]). The @deva[स्] in @deva[छस्] is indicatory, showing @deva[भवत्] gets @deva[पद]-designation (@ref[1.4.16]). Thus: @deva[भवत्] + @deva[ठक्] = @deva[भावत्कः]; @deva[भवत्] + @deva[छस्] = @deva[भावतीयः].",
            "advanced": "This sūtra provides @deva[ठक्]/छस् (debarring @deva[छ] @ref[4.2.114]) for @deva[भवत्] (@deva[त्यदादि] @ref[1.1.74] = @deva[वृद्ध]): @deva[भावत्कः], @deva[भावतीयः]. @deva[स्] in @deva[छस्] → @deva[पद]-संज्ञा (@ref[1.4.16])."
        }
    },
    "42116": {
        "en": {
            "simple": "After @deva[काशि] etc., @deva[ठञ्] and @deva[ञिठ्] are used. Examples: @deva[काशिका]/काशिकी, @deva[बैदिका]/बैदिकी.",
            "standard": "After @deva[काश्यादि] words, the affixes @deva[ठञ्] and @deva[ञिठ्] come in remaining senses. In both, @deva[ठ्] → @deva[इक]; other letters are @deva[अनुबन्ध]. The forms are same, but feminine differs: @deva[ठञ्]-forms take @deva[ङीप्] (@ref[4.1.15]); @deva[ञिठ्]-forms take @deva[टाप्] (@ref[4.1.47]). Thus: @deva[काशिका] (f. @deva[आ]) or @deva[काशिकी] (f. @deva[ई]); @deva[बैदिका] or @deva[बैदिकी].",
            "advanced": "This sūtra provides @deva[ठञ्]/ञिठ् for @deva[काश्यादि]: @deva[काशिका]/काशिकी, @deva[बैदिका]/बैदिकी. @deva[ठ्] → @deva[इक]. @deva[ठञ्] → @deva[ङीप्] (@ref[4.1.15]); @deva[ञिठ्] → @deva[टाप्] (@ref[4.1.47])."
        }
    },
    "42117": {
        "en": {
            "simple": "After @deva[वृद्ध] village-names of @deva[वाहीक] (Panjab region), @deva[ठञ्] and @deva[ञिठ्] are used. Examples: @deva[शाकलिकी]/शाकलिका, @deva[मान्थविकी]/मान्थविका.",
            "standard": "After @deva[वृद्ध] words denoting villages of @deva[वाहीक] (the Panjab region), the affixes @deva[ठञ्] and @deva[ञिठ्] come in remaining senses (debarring @deva[छ] @ref[4.2.114]). @deva[वृद्धात्] is read into this sūtra. Examples: @deva[शाकलिकी] or @deva[शाकलिका]; @deva[मान्थविकी] or @deva[मान्थविका].",
            "advanced": "This sūtra provides @deva[ठञ्]/ञिठ् (debarring @deva[छ] @ref[4.2.114]) for @deva[वृद्ध वाहीक-ग्राम]: @deva[शाकलिकी]/शाकलिका, @deva[मान्थविकी]/मान्थविका."
        }
    },
    "42118": {
        "en": {
            "simple": "After @deva[वृद्ध] @deva[वाहीक] village-names in @deva[उशीनर] region, @deva[ठञ्]/ञिठ् are optional (alongside @deva[छ]). Examples: @deva[आह्वजालिकी]/लिका/लीया, @deva[सौदर्शनिकी]/निका/नीया.",
            "standard": "After @deva[वृद्ध] words denoting @deva[वाहीक] villages situated in @deva[उशीनर], the affixes @deva[ठञ्] and @deva[ञिठ्] come optionally (with @deva[छ] also valid): @deva[आह्वजालिकी], @deva[आह्वजालिका], and @deva[आह्वजालीया]; @deva[सौदर्शनिकी], @deva[सौदर्शनिका], and @deva[सौदर्शनीया].",
            "advanced": "This sūtra provides optional @deva[ठञ्]/ञिठ् for @deva[वृद्ध वाहीक-ग्राम] in @deva[उशीनर]: @deva[आह्वजालिकी]/लिका/लीया (@deva[छ] also)."
        }
    },
    "42119": {
        "en": {
            "simple": "After @deva[उ]-ending stems denoting a locality, @deva[ठञ्] is used. Examples: @deva[तैषादकर्षुकः], @deva[शाबरजम्बुकः].",
            "standard": "After @deva[प्रातिपदिक] (nominal stems) ending in @deva[उ] and denoting a locality (@deva[देश]), the affix @deva[ठञ्] comes in remaining senses: @deva[तैषादकर्षुकः], @deva[शाबरजम्बुकः]. The phrase @deva[वृद्धात्] does NOT govern this sūtra (if it did, the next sūtra wouldn't need to repeat it). Why 'denoting a locality'? For non-locality @deva[उ]-ending words: @deva[पाटवाः] (pupils of @deva[पटु]) formed by @deva[अण्].",
            "advanced": "This sūtra provides @deva[ठञ्] for @deva[उकारान्त देश]-words: @deva[तैषादकर्षुकः], @deva[शाबरजम्बुकः]. @deva[वृद्धात्] doesn't continue. Non-देश: @deva[पाटवाः] (@deva[अण्])."
        }
    },
    "42120": {
        "en": {
            "simple": "After @deva[वृद्ध उ]-ending locality-names of Easterners, @deva[ठञ्] is used. Examples: @deva[आढकजम्बुकः], @deva[शाकजम्बुकः], @deva[नापितवास्तुकः].",
            "standard": "After @deva[वृद्ध] words ending in @deva[उ] and denoting localities of Eastern people (@deva[प्राच्य]), the affix @deva[ठञ्] comes in remaining senses: @deva[आढकजम्बुकः], @deva[शाकजम्बुकः], @deva[नापितवास्तुकः]. @deva[ओर्देशी] from @ref[4.2.119] is understood. This sūtra makes a @deva[नियम] (restriction): for Eastern places, only @deva[वृद्ध] words take @deva[ठञ्].",
            "advanced": "This sūtra provides @deva[ठञ्] for @deva[वृद्ध उकारान्त प्राच्य-देश]: @deva[आढकजम्बुकः], @deva[शाकजम्बुकः]. @deva[नियम]: for प्राच्य, only वृद्ध words."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.2.106-4.2.120 (Batch 8 of 4.2)")
