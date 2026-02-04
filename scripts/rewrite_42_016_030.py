#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.2.16-4.2.30 (Batch 2 of 4.2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "42016": {
        "en": {
            "simple": "The affix @deva[अण्] comes after a word (in locative) meaning 'food prepared therein'. Examples: @deva[भ्राष्ट्राः] (cakes fried in a pan), @deva[कालशाः], @deva[कौम्भाः].",
            "standard": "The affix @deva[अण्] comes after a word in the locative case meaning 'granular food prepared therein': @deva[भ्राष्ट्रे संस्कृता भक्षाः] = @deva[भ्राष्ट्राः] (cakes fried in a pan); similarly @deva[कालशाः] (prepared in a pot), @deva[कौम्भाः] (prepared in a jar). Why 'food' specifically? For non-food items: @deva[पुष्पपुटे संस्कृतो मालागुणः] (garland prepared in flower-cup) doesn't take the affix.",
            "advanced": "This sūtra extends @deva[अण्] to locative sense @deva[तत्र संस्कृतं भक्ष्यम्]: @deva[भ्राष्ट्राः], @deva[कालशाः], @deva[कौम्भाः]. @deva[भक्ष्य] (food) condition required; non-food doesn't apply."
        }
    },
    "42017": {
        "en": {
            "simple": "After @deva[शूल] (spit) and @deva[उखा] (pot), @deva[यत्] (not @deva[अण्]) is used for 'food prepared therein'. Examples: @deva[शूल्यम्] (meat roasted on spit), @deva[उख्यम्] (flesh boiled in pot).",
            "standard": "After @deva[शूल] (spit) and @deva[उखा] (pot), the affix @deva[यत्] comes (debarring @deva[अण्]) in the sense of 'prepared food': @deva[शूले संस्कृतम्] = @deva[शू॑ल्यम्] (meat roasted on a spit); @deva[उखायां संस्कृतम्] = @deva[उ॑ख्यम्] (flesh boiled in a pot). The accent mark shows @deva[यत्] causes initial @deva[उदात्त].",
            "advanced": "This sūtra provides @deva[यत्] (debarring @deva[अण्]) for @deva[शूल]/उखा in @deva[संस्कृत-भक्ष्य] sense: @deva[शू॑ल्यम्], @deva[उ॑ख्यम्]. @deva[यत्] = @deva[आद्युदात्त]."
        }
    },
    "42018": {
        "en": {
            "simple": "After @deva[दधि] (curd), @deva[ठक्] is used for 'prepared therein'. Example: @deva[दाधिकम्] (curd seasoned with salt/pepper).",
            "standard": "After @deva[दधि] (curd/yogurt), the affix @deva[ठक्] comes in the sense of 'prepared therein': @deva[दधनि संस्कृतम्] = @deva[दाधिकम्] (curd itself seasoned with salt or pepper). Note: @ref[4.4.3] also gives @deva[दाधिकम्], but that means 'anything seasoned WITH curd' (@deva[दध्ना संस्कृतम्]); THIS sūtra means 'curd itself prepared/seasoned' (@deva[दधनि संस्कृतम्]).",
            "advanced": "This sūtra provides @deva[ठक्] for @deva[दधि] in locative @deva[संस्कृत] sense: @deva[दाधिकम्] = curd seasoned. Contrast @ref[4.4.3] @deva[दाधिकम्] = prepared WITH curd (instrumental)."
        }
    },
    "42019": {
        "en": {
            "simple": "After @deva[उदश्वित्] (water-swollen grain), @deva[ठक्] is optionally used. Examples: @deva[औदश्वित्कम्] or @deva[औदश्वितम्].",
            "standard": "After @deva[उदश्वित्] (grain swollen with water), the affix @deva[ठक्] comes optionally in the sense of 'prepared food': @deva[औदश्वित्कम्] (@deva[ठक्] with @deva[क्]-augment per @ref[7.3.51]) or @deva[औदश्वितम्] (@deva[अण्]). Both forms are valid.",
            "advanced": "This sūtra provides optional @deva[ठक्] for @deva[उदश्वित्]: @deva[औदश्वित्कम्] (@ref[7.3.51] @deva[क्]-augment) or @deva[औदश्वितम्] (@deva[अण्])."
        }
    },
    "42020": {
        "en": {
            "simple": "After @deva[क्षीर] (milk), @deva[ढञ्] is used for 'prepared therein'. Example: @deva[क्षैरेयी यवागूः] (milky gruel).",
            "standard": "After @deva[क्षीर] (milk), the affix @deva[ढञ्] (@deva[एय]) comes (debarring @deva[अण्]) in the sense of 'prepared therein': @deva[क्षीरे संस्कृताः] = @deva[क्षैरेयी यवागूः] (gruel prepared in milk, i.e., milky gruel). The feminine @deva[ई] comes from the base @deva[यवागू].",
            "advanced": "This sūtra provides @deva[ढञ्] (debarring @deva[अण्]) for @deva[क्षीर] in @deva[संस्कृत] sense: @deva[क्षैरेयी यवागूः]. @deva[ढञ्] = @deva[एय]."
        }
    },
    "42021": {
        "en": {
            "simple": "The affix @deva[अण्] comes after a full-moon night name meaning 'the time-division in which it falls'. Examples: @deva[पौष्यः मासः], @deva[माघः मासः] (the Pauṣya month, Māgha month).",
            "standard": "The affix @deva[अण्] comes after a word denoting a full-moon night (@deva[पौर्णमासी]) in the sense of 'the time-division in which it falls': @deva[पौष्यः मासः] (the month in which the full moon falls in Puṣya asterism), @deva[माघः मासः] (Māgha month). The word @deva[स] refers to 'that' (nominative = first case per @ref[4.1.82]); @deva[अस्मिन्] = locative sense ('in which').",
            "advanced": "This sūtra extends @deva[अण्] to @deva[पौर्णमासी]-names in nominative (@deva[स]) with locative sense (@deva[अस्मिन्]): @deva[पौष्यः मासः], @deva[माघः मासः]. @deva[इति] after @deva[पौर्णमासी] = limiting condition."
        }
    },
    "42022": {
        "en": {
            "simple": "After @deva[आग्रहायणी] and @deva[अश्वत्थ] (full-moon night names), @deva[ठक्] (not @deva[अण्]) is used. Examples: @deva[आग्रहायणिको मासः], @deva[आश्वत्थिकः].",
            "standard": "After @deva[आग्रहायणी] and @deva[अश्वत्थ] (full-moon night names in nominative), the affix @deva[ठक्] comes (debarring @deva[अण्]) in the sense of 'time-division in which it falls': @deva[आग्रहायणिको मासः] (the month called Āgrahāyaṇika—in which the moon is full in Āgrahāyaṇa asterism); similarly @deva[आश्वत्थिकः]. The words @deva[सास्मिन्पौर्णमासीति] from @ref[4.2.21] govern this sūtra too.",
            "advanced": "This sūtra provides @deva[ठक्] (debarring @deva[अण्]) for @deva[आग्रहायणी]/अश्वत्थ: @deva[आग्रहायणिकः], @deva[आश्वत्थिकः]. @ref[4.2.21] @deva[अनुवृत्ति] applies."
        }
    },
    "42023": {
        "en": {
            "simple": "After @deva[फाल्गुनी], @deva[कार्त्तिकी], @deva[चैत्री] (full-moon names), @deva[ढक्] is optionally used. Examples: @deva[फाल्गुनः] or @deva[फाल्गुनिकः], @deva[कार्तिकः] or @deva[कार्तिकिकः].",
            "standard": "After @deva[फाल्गुनी], @deva[कार्त्तिकी], @deva[चैत्री] (full-moon night names), the affix @deva[ढक्] optionally comes (alongside @deva[अण्]) when the result is a name denoting a time-division: @deva[फाल्गुनः] (@deva[अण्]) or @deva[फाल्गुनिकः] (@deva[ढक्]); @deva[श्रावणः] or @deva[श्रावणिकः]; @deva[कार्तिकः] or @deva[कार्तिकिकः]; @deva[चैत्रः] or @deva[चैत्रिकः].",
            "advanced": "This sūtra provides optional @deva[ढक्] for @deva[फाल्गुनी]/कार्त्तिकी/चैत्री: @deva[फाल्गुनः]/फाल्गुनिकः, @deva[कार्तिकः]/कार्तिकिकः, @deva[चैत्रः]/चैत्रिकः."
        }
    },
    "42024": {
        "en": {
            "simple": "The affix @deva[अण्] comes after a deity's name meaning 'belonging to that deity'. Examples: @deva[ऐन्द्रम्] (sacred to Indra), @deva[आदित्यम्], @deva[बार्हस्पत्यम्], @deva[प्राजापत्यम्].",
            "standard": "The affix @deva[अण्] (from @ref[4.1.83]) comes after a deity's name (in nominative) in the genitive sense ('belonging to'): @deva[इन्द्रो देवतास्य] = @deva[ऐन्द्रम्] (oblation sacred to Indra); similarly @deva[आदित्यम्] (belonging to Āditya), @deva[बार्हस्पत्यम्] (to Bṛhaspati), @deva[प्राजापत्यम्] (to Prajāpati). @deva[सा] = nominative word; @deva[अस्य] = genitive sense; @deva[देवता] = deity.",
            "advanced": "This sūtra extends @deva[अण्] to @deva[देवता]-names in nominative (@deva[सा]) with genitive sense (@deva[अस्य]): @deva[ऐन्द्रम्], @deva[आदित्यम्], @deva[बार्हस्पत्यम्], @deva[प्राजापत्यम्]."
        }
    },
    "42025": {
        "en": {
            "simple": "When @deva[अण्] is added to @deva[क] (Prajāpati's name), the final @deva[अ] becomes @deva[इ]. Example: @deva[कायम्] (oblation sacred to Ka).",
            "standard": "When @deva[अण्] is added to the deity name @deva[क] (a name of Prajāpati), short @deva[इ] substitutes for the final @deva[अ]: @deva[क] + @deva[अण्] = @deva[कि] + @deva[अण्] = @deva[कै] + @deva[अ] = @deva[कायम्] (oblation sacred to Ka). Examples: @deva[कायं हविः], @deva[कायमेककपालं निर्वपेत्] (one should offer a single-dish oblation to Ka).",
            "advanced": "This sūtra provides @deva[इ]-substitution for @deva[क] + @deva[अण्]: @deva[क] → @deva[कि] → @deva[कायम्]. @deva[क] = Prajāpati's name."
        }
    },
    "42026": {
        "en": {
            "simple": "After @deva[शुक्र] (deity name), @deva[घन्] (not @deva[अण्]) is used. Example: @deva[शुक्रियम्] (oblation belonging to Śukra).",
            "standard": "After the deity name @deva[शुक्र], the affix @deva[घन्] comes (debarring @deva[अण्]) in the sense of 'that its deity': @deva[शुक्र] + @deva[घन्] = @deva[शुक्रियम्] (@ref[7.1.2]) (oblation belonging to Śukra). Example: @deva[शुक्रियं हविः], @deva[शुक्रियोऽध्यायः] (the chapter sacred to Śukra).",
            "advanced": "This sūtra provides @deva[घन्] (debarring @deva[अण्]) for @deva[शुक्र]: @deva[शुक्रियम्] (@ref[7.1.2]). @deva[घन्] = @deva[इय]."
        }
    },
    "42027": {
        "en": {
            "simple": "After @deva[अपोनप्तृ] and @deva[अपांनप्तृ] (deity names), @deva[घ] is used. Examples: @deva[अपोनप्त्रियम्], @deva[अपांनप्त्रियम्] (oblation to Aponaptṛ/Apāṃnaptṛ).",
            "standard": "After the deity names @deva[अपोनप्तृ] and @deva[अपांनप्तृ], the affix @deva[घ] comes (debarring @deva[अण्]) in the sense of 'that its deity': @deva[अपोनप्त्रियं हविः] (oblation to Aponaptṛ), @deva[अपांनप्त्रियम्]. Note: The deities @deva[अपोनपात्] and @deva[अपांनपात्] irregularly take the form ending in @deva[नप्तृ] when the affix is added.",
            "advanced": "This sūtra provides @deva[घ] (debarring @deva[अण्]) for @deva[अपोनप्तृ]/अपांनप्तृ: @deva[अपोनप्त्रियम्], @deva[अपांनप्त्रियम्]. @deva[अपोनपात्]/अपांनपात् → irregular @deva[नप्तृ]-form before affix."
        }
    },
    "42028": {
        "en": {
            "simple": "Also @deva[छ] comes after @deva[अपोनप्तृ] and @deva[अपांनप्तृ]. Examples: @deva[अपोनपत्रीयम्], @deva[अपांनप्त्रीयम्].",
            "standard": "The affix @deva[छ] (@deva[ईय]) also comes after @deva[अपोनप्तृ] and @deva[अपांनप्तृ] in the sense of 'that its deity': @deva[अपोनपत्रीयम्], @deva[अपांनप्त्रीयम्] (oblation sacred to Aponapāt/Apāṃnapāt). This is made a separate sūtra (not combined with @ref[4.2.27]) to prevent @ref[1.3.10] from applying—if combined, @deva[छ] might be considered @deva[इत्] (indicatory).",
            "advanced": "This sūtra provides @deva[छ] for @deva[अपोनप्तृ]/अपांनप्तृ: @deva[अपोनपत्रीयम्], @deva[अपांनप्त्रीयम्]. Separate sūtra prevents @ref[1.3.10] (@deva[इत्]-reading of @deva[छ])."
        }
    },
    "42029": {
        "en": {
            "simple": "After @deva[महेन्द्र], @deva[घ], @deva[अण्], and @deva[छ] all come. Examples: @deva[महेन्द्रियम्], @deva[माहेन्द्रम्], @deva[महेन्द्रीयम्].",
            "standard": "After the deity name @deva[महेन्द्र] (Great Indra), the affixes @deva[घ], @deva[अण्], and @deva[छ] all come in the sense of 'that its deity': @deva[महेन्द्रियम्] (@deva[घ]), @deva[माहेन्द्रम्] (@deva[अण्]), @deva[महेन्द्रीयम्] (@deva[छ])—all meaning 'oblation sacred to Mahendra'.",
            "advanced": "This sūtra provides triple affixes for @deva[महेन्द्र]: @deva[घ] → @deva[महेन्द्रियम्]; @deva[अण्] → @deva[माहेन्द्रम्]; @deva[छ] → @deva[महेन्द्रीयम्]."
        }
    },
    "42030": {
        "en": {
            "simple": "After @deva[सोम] (moon-deity), @deva[ट्यण्] (not @deva[अण्]) is used. Examples: @deva[सौम्यं हविः], @deva[सौमी ऋक्].",
            "standard": "After the deity name @deva[सोम], the affix @deva[ट्यण्] comes (debarring @deva[अण्]) in the sense of 'that its deity': @deva[सौम्यं हविः] (oblation to Soma), @deva[सौम्यं सूक्तम्] (hymn to Soma). The @deva[ण्] causes @deva[वृद्धि]; the @deva[ट्] causes @deva[ङीप्] in feminine: @deva[सौम्य] + @deva[ङीप्] (@ref[4.1.15]) = @deva[सौम्] + @deva[ई] (@ref[6.4.150]) = @deva[सौमी ऋक्] (Ṛgvedic verse to Soma).",
            "advanced": "This sūtra provides @deva[ट्यण्] (debarring @deva[अण्]) for @deva[सोम]: @deva[सौम्यम्]. @deva[ण्] → @deva[वृद्धि]; @deva[ट्] → @deva[ङीप्] in f.: @deva[सौमी] (@ref[4.1.15], @ref[6.4.150])."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.2.16-4.2.30 (Batch 2 of 4.2)")
