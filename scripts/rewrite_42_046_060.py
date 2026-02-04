#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.2.46-4.2.60 (Batch 4 of 4.2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "42046": {
        "en": {
            "simple": "After Vedic school names, the affixes denoting 'rule of that school' (@ref[4.3.126] ff.) also apply in collection-sense. Example: @deva[कठानां धर्मः] = @deva[काठकम्].",
            "standard": "After names of Vedic schools (@deva[चरण]) like @deva[कठ], @deva[कलाप], the affixes taught in @ref[4.3.126] ff. (denoting 'rule/doctrine of that school') also apply in the sense of 'collection thereof': @deva[कठानां धर्मः] = @deva[काठकम्] (the doctrine belonging to the Kaṭha collection). The word @deva[धर्म] is supplied from the @deva[इष्टि]: @deva[चरणाद्धर्माम्नाययोः].",
            "advanced": "This sūtra extends @ref[4.3.126] ff. affixes (@deva[चरण-धर्म] sense) to @deva[समूह]-sense: @deva[काठकम्]. @deva[धर्म] from @deva[इष्टि]: @deva[चरणाद्धर्माम्नाययोः]."
        }
    },
    "42047": {
        "en": {
            "simple": "After unconscious things, and @deva[हस्ति] (elephant), @deva[धेनु] (milch cow), @deva[ठक्] is used for 'collection'. Examples: @deva[आपूपिकम्], @deva[हास्तिकम्], @deva[धेनुकम्].",
            "standard": "After names of unconscious things (@deva[अचेतन]) and after @deva[हस्ति] (elephant), @deva[धेनु] (milch cow), the affix @deva[ठक्] comes for 'collection' (debarring @deva[अण्]/अञ्]): @deva[अपूपानां समूहः] = @deva[आपूपिकम्] (collection of cakes); @deva[हास्तिकम्] (herd of elephants), @deva[धेनुकम्] (herd of milch cows), @deva[शाष्कुलिकम्]. @deva[ठक्] → @deva[इक्] (@ref[7.3.50]) or @deva[क] (@ref[7.3.51]). Vārtika: If @deva[धेनु] is preceded by @deva[नञ्], this doesn't apply: @deva[आधेनवम्] (non-milch-cow collection).",
            "advanced": "This sūtra provides @deva[ठक्] (debarring @deva[अण्]/अञ्]) for @deva[अचेतन] and @deva[हस्ति]/धेनु: @deva[आपूपिकम्], @deva[हास्तिकम्], @deva[धेनुकम्]. @ref[7.3.50] @deva[इक्]; @ref[7.3.51] @deva[क्]. Vārtika: @deva[नञ्] + @deva[धेनु] → @deva[अण्]: @deva[आधेनवम्]."
        }
    },
    "42048": {
        "en": {
            "simple": "After @deva[केश] (hair), @deva[यञ्] is optionally used; after @deva[अश्व] (horse), @deva[छ] is optionally used. Examples: @deva[कैश्यम्]/कैशिकम्, @deva[आश्वम्]/अश्वीयम्.",
            "standard": "After @deva[केश] (hair), @deva[यञ्] optionally comes (alongside @deva[ठक्]): @deva[केशानां समूहः] = @deva[कैश्यम्] (@deva[यञ्]) or @deva[कैशिकम्] (@deva[ठक्] @ref[4.2.47]). After @deva[अश्व] (horse), @deva[छ] optionally comes: @deva[अश्वानां समूहः] = @deva[आश्वम्] (@deva[अण्] @ref[4.1.63]) or @deva[अश्वीयम्] (@deva[छ]).",
            "advanced": "This sūtra provides optional @deva[यञ्] for @deva[केश] and @deva[छ] for @deva[अश्व]: @deva[कैश्यम्]/कैशिकम्; @deva[आश्वम्] (@ref[4.1.63])/अश्वीयम्."
        }
    },
    "42049": {
        "en": {
            "simple": "After @deva[पाश] etc., @deva[य] is used for 'collection'. Examples: @deva[पाश्या], @deva[तृण्या] (all feminine).",
            "standard": "After @deva[पाशादि] words, the affix @deva[य] comes for 'collection': @deva[पाश्या] (collection of snares), @deva[तृण्या] (grass collection). All are feminine. The @deva[पाशादि] list: @deva[पाश], @deva[तृण], @deva[धूम], @deva[वात], @deva[अङ्गार], @deva[पाढल], @deva[पोत], @deva[गल], @deva[पिटक], @deva[पिटाक], @deva[शकट], @deva[हल], @deva[मट], @deva[वन]; also @deva[बालक].",
            "advanced": "This sūtra provides @deva[य] for @deva[पाशादि] (15 words): @deva[पाश्या], @deva[तृण्या], @deva[धूम्या], @deva[वात्या], etc. All f. List includes @deva[पाश] through @deva[बालक]."
        }
    },
    "42050": {
        "en": {
            "simple": "After @deva[खल] (threshing floor), @deva[गो] (cow), @deva[रथ] (chariot), @deva[य] is used. Examples: @deva[खल्या], @deva[गव्या], @deva[रथ्या].",
            "standard": "After @deva[खल] (threshing floor), @deva[गो] (cow), @deva[रथ] (chariot), the affix @deva[य] comes for 'collection': @deva[खल्या] (threshing-floor area), @deva[गव्या] (cattle-pen/pasture), @deva[रथ्या] (chariot-road). These three are NOT included in @deva[पाशादि] so that @ref[4.2.51] can also apply to them.",
            "advanced": "This sūtra provides @deva[य] for @deva[खल]/गो/रथ: @deva[खल्या], @deva[गव्या], @deva[रथ्या]. Separate from @deva[पाशादि] for @ref[4.2.51] to apply."
        }
    },
    "42051": {
        "en": {
            "simple": "After @deva[खल], @deva[इनि] is used; after @deva[गो], @deva[त्र]; after @deva[रथ], @deva[कट्यष्यच्]. Examples: @deva[खलिनी], @deva[गोत्रा], @deva[रथकट्या].",
            "standard": "After @deva[खल], @deva[गो], @deva[रथ] respectively, the affixes @deva[इनि], @deva[त्र], @deva[कट्यष्यच्] come for 'collection': @deva[खलिनी] (threshing-floor collection), @deva[गोत्रा] (cattle-pen), @deva[रथकट्या] (chariot-road). Vārtika: @deva[इनि] also after @deva[खलादि]: @deva[डाकिनी], @deva[कुण्डलिनी], @deva[कुटुम्बिनी]. Vārtika: @deva[खण्डच्] after @deva[कमलादि]: @deva[कमलखण्डम्], @deva[अम्भोजखण्डम्].",
            "advanced": "This sūtra provides @deva[इनि]/त्र/कट्यष्यच् for @deva[खल]/गो/रथ: @deva[खलिनी], @deva[गोत्रा], @deva[रथकट्या]. Vārtikas: @deva[खलादि] + @deva[इनि]; @deva[कमलादि] + @deva[खण्डच्]."
        }
    },
    "42052": {
        "en": {
            "simple": "The affix @deva[अण्] is added after a word (in genitive) meaning 'whose territory/sphere', when a country is meant. Examples: @deva[वैदर्भः], @deva[माहिषिकः] (land of Vidarbha/Mahiṣa people).",
            "standard": "The affix @deva[अण्] (from @ref[4.1.83]) comes after a word in the genitive case meaning 'whose sphere/territory' (@deva[विषय]), when the result denotes a country (@deva[देश]): @deva[विदर्भाणां विषयः देशः] = @deva[वैदर्भः] (Vidarbha country); @deva[माहिषिकः] (Mahiṣa land). The @deva[अनुवृत्ति] of @deva[समूह] (@ref[4.2.37]) doesn't continue, but @deva[तस्य] does. @deva[विषय] = sphere, domain, topic.",
            "advanced": "This sūtra extends @deva[अण्] to genitive sense @deva[तस्य विषयो देशे]: @deva[वैदर्भः], @deva[माहिषिकः]. @deva[समूह] @deva[अनुवृत्ति] stops; @deva[तस्य] continues. @deva[विषय] = territory/sphere."
        }
    },
    "42053": {
        "en": {
            "simple": "After @deva[राजन्य] etc., @deva[वुञ्] is used for 'territory'. Example: @deva[राजन्यकः] (land of Kṣatriyas).",
            "standard": "After @deva[राजन्यादि] words, the affix @deva[वुञ्] comes in the sense of 'territory' (debarring @deva[अण्]): @deva[राजन्यानां विषयो देशः] = @deva[राजन्यकः], @deva[दैवायनकः]. This is an @deva[आकृतिगण] (open-ended list). List includes: @deva[राजन्य], @deva[आनृत], @deva[बाभ्रव्य], @deva[शालङ्कायन], @deva[हेवयात], @deva[अव्रीड], @deva[वरत्रा], @deva[जालंधरायण], @deva[राजायन], @deva[तेलु], @deva[आत्मकामेय], @deva[अम्बरीषपुत्र], @deva[वसाति], etc.",
            "advanced": "This sūtra provides @deva[वुञ्] (debarring @deva[अण्]) for @deva[राजन्यादि] (@deva[आकृतिगण]): @deva[राजन्यकः], @deva[दैवायनकः]. List: @deva[राजन्य] through @deva[वसाति] etc."
        }
    },
    "42054": {
        "en": {
            "simple": "After @deva[भौरिकि] etc., @deva[विधल्] is used; after @deva[ऐषुकारि] etc., @deva[भक्तल्] is used. Examples: @deva[भौरिकिविधः], @deva[ऐषुकारिभक्तः].",
            "standard": "After @deva[भौरिक्यादि] words, the affix @deva[विधल्] comes; after @deva[ऐषुकार्यादि] words, @deva[भक्तल्] comes, in the sense of 'sphere/territory' (debarring @deva[अण्]): @deva[भौरिकिविधः], @deva[वैपेयविधः]; @deva[ऐषुकारिभक्तः], @deva[सारस्यायनभक्तः]. @deva[भौरिक्यादि]: @deva[भौरिकि], @deva[भौलिकि], @deva[चौपयत], @deva[चैटयत], @deva[काणेय], @deva[वाणिजक], @deva[वालिकाज्य], @deva[सैकयत], @deva[वैकयत], etc.",
            "advanced": "This sūtra provides @deva[विधल्] for @deva[भौरिक्यादि] and @deva[भक्तल्] for @deva[ऐषुकार्यादि] (debarring @deva[अण्]): @deva[भौरिकिविधः], @deva[ऐषुकारिभक्तः]."
        }
    },
    "42055": {
        "en": {
            "simple": "After meter names, @deva[अण्] is used meaning 'a @deva[प्रगाथ] (hymn-pair) beginning with that meter'. Example: @deva[गायत्रः प्रगाथः] (Pragātha beginning with Gāyatrī).",
            "standard": "After names of meters (@deva[छन्दस्]), the affix @deva[अण्] comes meaning 'a @deva[प्रगाथ] (hymn-pair consisting of two complementary verses) beginning with that meter': @deva[गायत्र्या आदिः] = @deva[गायत्रः प्रगाथः] (a Pragātha whose first verse is in Gāyatrī meter). @deva[सः] = nominative word; @deva[अस्य] = genitive sense; @deva[आदिः] = 'beginning'; @deva[छन्दसः] = after meter names; @deva[प्रगाथेषु] = in Pragātha sense.",
            "advanced": "This sūtra provides @deva[अण्] for @deva[छन्दस्] (meter names) in @deva[प्रगाथ-आदि] sense: @deva[गायत्रः प्रगाथः]. @deva[प्रगाथ] = Vedic hymn-pair."
        }
    },
    "42056": {
        "en": {
            "simple": "The affix @deva[अण्] is used after a word meaning 'the object or warrior of a battle', to denote that battle. Examples: @deva[दाशराज्ञम्] (battle of ten kings), @deva[याज्ञवल्क्यम्] (battle of Yājñavalkya).",
            "standard": "The affix @deva[अण्] (from @ref[4.1.83]) comes after a word denoting either the object (@deva[प्रयोजन]) or the warrior (@deva[योद्धृ]) of a battle, to denote that battle fought for that object or led by that warrior: @deva[दाशराज्ञं युद्धम्] (the Battle of Ten Kings); @deva[याज्ञवल्क्यं युद्धम्] (battle of Yājñavalkya). @deva[सोऽस्य] indicates nominative case of base; whole word denotes @deva[युद्ध] (battle).",
            "advanced": "This sūtra provides @deva[अण्] for @deva[प्रयोजन]/योद्धृ in @deva[युद्ध]-sense: @deva[दाशराज्ञम्] (object: ten kings), @deva[याज्ञवल्क्यम्] (warrior: Yājñavalkya)."
        }
    },
    "42057": {
        "en": {
            "simple": "After weapon names, @deva[ण] is used meaning 'a game played with that weapon'. Examples: @deva[दाण्डा] (stick-game), @deva[मौष्टा] (fist-game).",
            "standard": "After names of weapons (@deva[प्रहरण]), the affix @deva[ण] comes meaning 'a game/play with that weapon' (@deva[क्रीडा]): @deva[दण्डः प्रहरणमस्यां क्रीडायाम्] = @deva[दाण्डा] (a game played with sticks); @deva[मौष्टा] (boxing—game with fists). Why 'weapon'? For non-weapons: @deva[अक्षक्रीडा] (dice-game) doesn't take the affix since dice are not weapons.",
            "advanced": "This sūtra provides @deva[ण] for @deva[प्रहरण] (weapon) in @deva[क्रीडा]-sense: @deva[दाण्डा], @deva[मौष्टा]. @deva[प्रहरण] condition required; non-weapons don't apply."
        }
    },
    "42058": {
        "en": {
            "simple": "After @deva[घञ्]-ending action nouns, @deva[ञ] is used meaning 'an action occurring in that'. Examples: @deva[भोज्या] (eating activity), @deva[पाय्या] (drinking activity).",
            "standard": "After words ending in the @deva[कृत्] affix @deva[घञ्] (action nouns), the affix @deva[ञ] comes meaning 'an action occurring in that': @deva[भोज] (@deva[घञ्]-ending) + @deva[ञ] = @deva[भोज्या] (the activity of eating); @deva[पाय्या] (drinking activity). These words are feminine (@deva[अस्यां] = f. locative in sūtra). The pattern: @deva[घञ्]-stem + @deva[ञ] → feminine word denoting the action.",
            "advanced": "This sūtra provides @deva[ञ] for @deva[घञन्त] in @deva[क्रिया]-sense: @deva[भोज्या], @deva[पाय्या]. @deva[अस्यां] (f.) indicates feminine result."
        }
    },
    "42059": {
        "en": {
            "simple": "After words meaning 'subject of study', @deva[अण्] is used meaning 'one who studies/understands that'. Examples: @deva[छान्दसः], @deva[वैयाकरणः], @deva[नैरुक्तः].",
            "standard": "The affix @deva[अण्] (from @ref[4.1.83]) comes after words denoting a subject of study, meaning 'one who has studied or understands that': @deva[छन्दोऽधीते] = @deva[छान्दसः] (one who studies prosody); @deva[वैयाकरणः] (@ref[7.3.3]) (grammarian); @deva[नैरुक्तः] (etymologist); @deva[नैमित्तः] (one who knows causes/omens). The word is in accusative sense (object of study).",
            "advanced": "This sūtra provides @deva[अण्] for study-subjects in @deva[अधीते/वेद] sense (accusative): @deva[छान्दसः], @deva[वैयाकरणः] (@ref[7.3.3]), @deva[नैरुक्तः], @deva[नैमित्तः]."
        }
    },
    "42060": {
        "en": {
            "simple": "After sacrifice names, @deva[उक्थ]-etc., and @deva[सूत्र]-ending words, @deva[ठञ्] is used for 'one who studies'. Examples: @deva[आग्निष्टोमिकः], @deva[औक्थिकः], @deva[वार्त्तिकसूत्रिकः].",
            "standard": "After names of sacrifices, after @deva[उक्थादि] words, and after stems ending in @deva[सूत्र], the affix @deva[ठञ्] comes meaning 'one who studies/understands' (debarring @deva[अण्]): @deva[आग्निष्टोमिकः] (one who studies Agniṣṭoma sacrifice); @deva[वाजपेयिकः]; @deva[औक्थिकः]; @deva[लौकायतिकः]; @deva[वार्त्तिकसूत्रिकः], @deva[सांग्रहसूत्रिकः]. @deva[इष्टि]: If @deva[सूत्र]-word begins with @deva[कल्प], @deva[अण्] is added instead: @deva[कल्पसूत्रम्] → @deva[कालपसौत्रः].",
            "advanced": "This sūtra provides @deva[ठञ्] (debarring @deva[अण्]) for @deva[यज्ञ]/उक्थादि/सूत्रान्त: @deva[आग्निष्टोमिकः], @deva[औक्थिकः], @deva[वार्त्तिकसूत्रिकः]. @deva[इष्टि]: @deva[कल्पसूत्र] + @deva[अण्] = @deva[कालपसौत्रः]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.2.46-4.2.60 (Batch 4 of 4.2)")
