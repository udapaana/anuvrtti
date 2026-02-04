#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.2.76-4.2.90 (Batch 6 of 4.2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "42076": {
        "en": {
            "simple": "In @deva[सौवीर], @deva[साल्व], and Eastern countries, place-names are feminine. Examples: @deva[दात्तामित्री] (city founded by Dattamitra), @deva[वैधूमाग्नी], @deva[काकन्दी].",
            "standard": "When the place is in @deva[सौवीर], @deva[साल्व], or the Eastern countries (@deva[प्राच्य]), place-names are always feminine (@deva[स्त्रीषु]): @deva[दात्तामित्री] (city founded by Dattamitra in Sauvīra); @deva[वैधूमाग्नी] (in Sālva); @deva[काकन्दी], @deva[माकन्दी], @deva[माणिचरी], @deva[जारुषी] (in Eastern countries). These qualify @deva[देशे तन्नाम्नि] from @ref[4.2.67].",
            "advanced": "This sūtra makes place-names f. in @deva[सौवीर]/साल्व/प्राच्य: @deva[दात्तामित्री], @deva[वैधूमाग्नी], @deva[काकन्दी], @deva[माकन्दी], @deva[माणिचरी], @deva[जारुषी]. @deva[स्त्रीषु] qualifies @ref[4.2.67] @deva[देशे तन्नाम्नि]."
        }
    },
    "42077": {
        "en": {
            "simple": "After @deva[सुवास्तु] etc., @deva[अण्] is used in four-fold sense. Examples: @deva[सौवास्तवम्], @deva[वार्णवम्], @deva[सौवास्तवी नदी].",
            "standard": "After @deva[सुवास्त्वादि] words, the affix @deva[अण्] comes in the four-fold senses (debarring @deva[अञ्] that would come by @ref[4.2.71] and @ref[4.2.73]): @deva[सुवास्तोरदूरभवं नगरम्] = @deva[सौवास्तवम्]; similarly @deva[वार्णवम्]. The word @deva[अण्] is stated (though @deva[अनुवृत्ति] applies) to indicate this sūtra debars @ref[4.2.85]: thus @deva[सौवास्तवी नदी] (river). List: @deva[सुवास्तु], @deva[वर्णु]...",
            "advanced": "This sūtra provides @deva[अण्] (debarring @deva[अञ्] @ref[4.2.71], @ref[4.2.73]) for @deva[सुवास्त्वादि]: @deva[सौवास्तवम्], @deva[वार्णवम्]. @deva[अण्] stated to debar @ref[4.2.85]: @deva[सौवास्तवी नदी]."
        }
    },
    "42078": {
        "en": {
            "simple": "After @deva[रोणी], @deva[अण्] is used. Example: @deva[रोणम्].",
            "standard": "After @deva[रोणी], the affix @deva[अण्] comes in the four-fold senses (debarring @deva[अञ्] of @ref[4.2.74]). The word @deva[रोणी] is given in nominative (not ablative as usual) to indicate it takes @deva[अण्] under ALL circumstances—whether alone or in a compound. This exceptional nominative form signals the unconditional nature of the rule.",
            "advanced": "This sūtra provides @deva[अण्] (debarring @deva[अञ्] @ref[4.2.74]) for @deva[रोणी]: @deva[रोणम्]. Nominative (not ablative) indicates unconditional application—alone or in compound."
        }
    },
    "42079": {
        "en": {
            "simple": "After stems with @deva[क्] as penultimate, @deva[अण्] is used. Examples: @deva[कार्णच्छिद्रिकः कूपः], @deva[कार्णवाकवम्], @deva[त्रैशङ्कवम्].",
            "standard": "After stems having @deva[क्] as the penultimate letter (@deva[उपधाक्]), the affix @deva[अण्] comes in the four-fold senses (debarring @deva[अञ्] of @ref[4.2.71] and @ref[4.2.73]): @deva[कार्णच्छिद्रिकः कूपः] (well); @deva[कार्णवाकवम्], @deva[त्रैशङ्कवम्].",
            "advanced": "This sūtra provides @deva[अण्] (debarring @deva[अञ्] @ref[4.2.71], @ref[4.2.73]) for @deva[उपधाक्] stems: @deva[कार्णच्छिद्रिकः], @deva[कार्णवाकवम्], @deva[त्रैशङ्कवम्]."
        }
    },
    "42080": {
        "en": {
            "simple": "17 classes of words take 17 specific affixes (@deva[वुञ्], @deva[ठञ्], @deva[ठ], @deva[ठच्], etc.) in the four-fold senses. Examples: @deva[कौशाम्बकम्], @deva[वारणासिकम्], @deva[पाटलिपुत्रकम्].",
            "standard": "In the four-fold senses, 17 affixes (@deva[वुञ्], @deva[ठञ्], @deva[ठ], @deva[ठच्], @deva[इञ्], @deva[ष्कन्], @deva[ढ्यञ्], @deva[क], @deva[ऊक], @deva[ड्यञ्], @deva[ड्य], @deva[य], @deva[यक्], @deva[कण्], @deva[ढक्], @deva[कक्], @deva[ठक्]) are added to 17 corresponding word-classes. @deva[आदि] is added to each word. Examples: @deva[कौशाम्बक], @deva[पाटलिपुत्रक] (@deva[वुञ्]); @deva[वारणासिक] (@deva[ठञ्]). Assignment follows @ref[1.3.10].",
            "advanced": "This sūtra provides 17 affixes for 17 word-classes: @deva[वुञ्] for @deva[कौशाम्बादि], @deva[ठञ्] for @deva[वारणास्यादि], @deva[ठ] for @deva[नगर्यादि], @deva[ठच्] for @deva[कुमुदादि], etc. Assignment by @ref[1.3.10]."
        }
    },
    "42081": {
        "en": {
            "simple": "Kingdom names are formed by @deva[लुप्]-elision when the people's name (unchanged) also names the kingdom. Example: @deva[पञ्चालाः] (the Pañcāla people = Pañcāla kingdom).",
            "standard": "The name of a kingdom (@deva[जनपद]) is formed by @deva[लुप्]-elision of these affixes when the name of the people, without change of number or gender, also serves as the kingdom's name: @deva[पञ्चालाः] (Pañcāla people) = @deva[पञ्चालाः] (Pañcāla kingdom). Read with @ref[1.2.51]. The affix is elided, but the form remains the same as the people's name.",
            "advanced": "This sūtra provides @deva[लुप्]-elision for @deva[जनपद]-names when people-name = kingdom-name (no number/gender change): @deva[पञ्चालाः]. Read with @ref[1.2.51]."
        }
    },
    "42082": {
        "en": {
            "simple": "After @deva[वरण] etc., the affix is elided (for non-kingdom places). Example: @deva[वरणाः] (city near Varaṇa—not a kingdom).",
            "standard": "After @deva[वरणादि] words, the quadruple-sense affix is elided by @deva[लुप्], retaining number and gender. This applies to places that are NOT kingdoms: @deva[वरणानामदूरभवं नगरम्] = @deva[वरणाः] (city near the place Varaṇa—not a kingdom); similarly @deva[शृङ्गी], @deva[शाल्मलयः]. The word @deva[च] extends this rule beyond kingdoms.",
            "advanced": "This sūtra provides @deva[लुप्] for @deva[वरणादि] (non-@deva[जनपद] places): @deva[वरणाः], @deva[शृङ्गी], @deva[शाल्मलयः]. @deva[च] extends beyond @ref[4.2.81]'s kingdom scope."
        }
    },
    "42083": {
        "en": {
            "simple": "After @deva[शर्करा] (gravel/sand), the affix is optionally elided. Example: @deva[शर्करा] or @deva[शार्करम्].",
            "standard": "After @deva[शर्करा], the four-fold affix is optionally elided by @deva[लुप्]. Why 'optionally'? @deva[शर्करा] occurs in @deva[कुमुदादि] (class 2) and @deva[वराहादि] (class 14) per @ref[4.2.80], so it must take @deva[ठच्] and @deva[कक्] there. This rule teaches that ADDITIONALLY, elision is optional: @deva[शर्करा] (elided) or @deva[शार्करम्] (with affix).",
            "advanced": "This sūtra provides optional @deva[लुप्] for @deva[शर्करा]. @deva[शर्करा] in @deva[कुमुदादि]/वराहादि (@ref[4.2.80]) takes @deva[ठच्]/कक्; this rule adds optional elision: @deva[शर्करा]/शार्करम्."
        }
    },
    "42084": {
        "en": {
            "simple": "After @deva[शर्करा], @deva[ठक्] and @deva[छ] also come. Total 6 forms: @deva[शर्करा], @deva[शार्करम्], @deva[शर्करिकम्], @deva[शार्करकम्], @deva[शार्करिकम्], @deva[शार्करीयम्].",
            "standard": "After @deva[शर्करा], the affixes @deva[ठक्] and @deva[छ] also come in the four-fold sense. Thus @deva[शर्करा] has 6 total place-name forms: (1) @deva[शर्करा] (elision @ref[4.2.83]); (2) @deva[शार्कर॑म्] (@deva[अण्]); (3) @deva[शर्करिक॑म्] (@deva[ठच्] @ref[4.2.80]); (4) @deva[शार्करक॑म्] (@deva[कक्] @ref[4.2.80]); (5) @deva[शार्करिक॑म्] (@deva[ठक्]); (6) @deva[शार्करीयम्] (@deva[छ]).",
            "advanced": "This sūtra provides @deva[ठक्]/छ for @deva[शर्करा]. Total 6 forms: @deva[शर्करा] (@ref[4.2.83] लुप्), @deva[शार्करम्] (अण्), @deva[शर्करिकम्] (@ref[4.2.80] ठच्), @deva[शार्करकम्] (कक्), @deva[शार्करिकम्] (ठक्), @deva[शार्करीयम्] (छ)."
        }
    },
    "42085": {
        "en": {
            "simple": "The affix @deva[मतुप्] is used for river names. Examples: @deva[उदुम्बरावती], @deva[मशकावती], @deva[इक्षुमती] (rivers named after things nearby).",
            "standard": "When a river is to be named after something found near it, the affix @deva[मतुप्] (@deva[मत्]/वत्]) is added: @deva[उदुम्बरा॑वती] (river near fig trees), @deva[मशका॑वती] (near mosquitoes), @deva[वीरणा॑वती], @deva[पुष्करा॑वती], @deva[इक्षु॑मती] (sugarcane river), @deva[द्रु॑मती]. See @ref[6.3.119] for @deva[अ]-lengthening; @ref[6.1.219] for @deva[उदात्त] on that vowel; @ref[8.2.9].",
            "advanced": "This sūtra provides @deva[मतुप्] for river-names: @deva[उदुम्बरावती], @deva[मशकावती], @deva[इक्षुमती]. @ref[6.3.119] अ-lengthening; @ref[6.1.219] उदात्त; @ref[8.2.9]."
        }
    },
    "42086": {
        "en": {
            "simple": "After @deva[मधु] etc., @deva[मतुप्] is used in four-fold senses (for non-rivers). Examples: @deva[मधुमान्], @deva[बिसवान्].",
            "standard": "After @deva[मध्वादि] words, the affix @deva[मतुप्] comes in the four-fold senses for places that are NOT rivers: @deva[मधुमान्] (place with honey), @deva[बिसवान्] (with lotus stalks). The @deva[मध्वादि] list: @deva[मधु], @deva[बिस], @deva[स्थाणु], @deva[वेणु], @deva[कर्कन्धु], @deva[शमी], @deva[करीर], @deva[हिम], @deva[किशरा], @deva[शर्याण], @deva[मरुत्], @deva[वार्दाली], @deva[शर], @deva[इष्टका], @deva[आसुति], @deva[शक्ति], etc.",
            "advanced": "This sūtra provides @deva[मतुप्] for @deva[मध्वादि] (non-rivers): @deva[मधुमान्], @deva[बिसवान्]. List: @deva[मधु] through @deva[शक्ति] etc."
        }
    },
    "42087": {
        "en": {
            "simple": "After @deva[कुमुद], @deva[नड], @deva[वेतस], @deva[ड्मतुप्] is used with final-elision. Examples: @deva[कुमुद्वान्], @deva[नड्वान्], @deva[वेतस्वान्].",
            "standard": "After @deva[कुमुद] (lotus), @deva[नड] (reed), @deva[वेतस] (cane), the affix @deva[ड्मतुप्] comes in the four-fold senses, with elision of the final letter of the stem: @deva[कुमुद्वान्] (lotus-place), @deva[नड्वान्] (reed-place), @deva[वेतस्वान्]. Vārtika: Also after @deva[महिष] (buffalo): @deva[महिष्मान्].",
            "advanced": "This sūtra provides @deva[ड्मतुप्] (with final-elision) for @deva[कुमुद]/नड/वेतस: @deva[कुमुद्वान्], @deva[नड्वान्], @deva[वेतस्वान्]. Vārtika: @deva[महिष] → @deva[महिष्मान्]."
        }
    },
    "42088": {
        "en": {
            "simple": "After @deva[नड] and @deva[शाद], @deva[ड्वलच्] is used with final-elision. Examples: @deva[नड्वलम्], @deva[शाद्वलम्].",
            "standard": "After @deva[नड] (reed) and @deva[शाद] (grass), the affix @deva[ड्वलच्] comes in the four-fold senses, with elision of the final letter: @deva[नड्वलम्] (reed-place), @deva[शाद्वलम्] (grassy place/meadow).",
            "advanced": "This sūtra provides @deva[ड्वलच्] (with final-elision) for @deva[नड]/शाद: @deva[नड्वलम्], @deva[शाद्वलम्]."
        }
    },
    "42089": {
        "en": {
            "simple": "After @deva[शिखा] (crest/tuft), @deva[वलच्] is used. Example: @deva[शिखावलम्] (crested place).",
            "standard": "After @deva[शिखा] (crest), the affix @deva[वलच्] comes in the four-fold senses: @deva[शिखावलम्] (the city Śikhāvala, lit. 'crested as a peacock'). Note: @deva[शिखा] also takes @deva[वलच्] by @ref[5.2.111] with @deva[मतुप्]-force (@ref[5.2.94]: 'whose it is'), but THAT @deva[वलच्] is not for place-names; THIS @deva[वलच्] specifically makes locality names.",
            "advanced": "This sūtra provides @deva[वलच्] for @deva[शिखा] (place-names): @deva[शिखावलम्]. Distinguish from @ref[5.2.111] @deva[वलच्] (मतुप्-sense, not place-names)."
        }
    },
    "42090": {
        "en": {
            "simple": "After @deva[उत्कर] etc., @deva[छ] is used. Examples: @deva[उत्करीयम्], @deva[शफरीयम्].",
            "standard": "After @deva[उत्करादि] words, the affix @deva[छ] (@deva[ईय]) comes in the four-fold senses: @deva[उत्करीयम्] (heap-place), @deva[शफरीयम्] (fish-place). The @deva[उत्करादि] list: @deva[उत्कर], @deva[संफल], @deva[शफर], @deva[पिप्पल], @deva[पिप्पलीमूल], @deva[अश्मन्], @deva[सुवर्ण], @deva[स्थलाजिन], @deva[तिक], @deva[कितव], @deva[अणक], @deva[त्रैवण], @deva[पिचुक], @deva[अश्वत्थ], @deva[काश], @deva[क्षुद्र], @deva[भस्त्रा], @deva[शाल], @deva[जन्य], etc.",
            "advanced": "This sūtra provides @deva[छ] for @deva[उत्करादि]: @deva[उत्करीयम्], @deva[शफरीयम्]. List: @deva[उत्कर] through @deva[जन्य] etc."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.2.76-4.2.90 (Batch 6 of 4.2)")
