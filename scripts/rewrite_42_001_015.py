#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.2.1-4.2.15 (Batch 1 of 4.2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "42001": {
        "en": {
            "simple": "The affix @deva[अण्] (from @ref[4.1.83]) comes after a color name (in instrumental sense) meaning 'dyed with that color'. Example: @deva[कषायेण रक्तं वस्त्रम्] = @deva[काषायम्] (cloth dyed dull-red).",
            "standard": "The affix @deva[अण्] (continuing from @ref[4.1.83] @deva[प्राग्दीव्यतोऽण्]) comes after words denoting colors, when construed in the instrumental case, meaning 'dyed thereby'. The verb @deva[रञ्ज्] means 'to dye/color'. @deva[राग] = 'color/dye'. Examples: @deva[कषायेण रक्तं वस्त्रम्] = @deva[काषायम्] (cloth dyed dull-red); @deva[हरिद्रया रक्तम्] = @deva[हारिद्रम्] (turmeric-dyed); @deva[मञ्जिष्ठया रक्तम्] = @deva[माञ्जिष्ठम्] (madder-dyed).",
            "advanced": "This sūtra extends @deva[अण्] (@ref[4.1.83]) to @deva[रागशब्द] in instrumental sense (@deva[तेन रक्तम्]): @deva[काषायम्], @deva[हारिद्रम्], @deva[माञ्जिष्ठम्]. @deva[रञ्ज्] = change white to another color; @deva[राग] = that which colors."
        }
    },
    "42002": {
        "en": {
            "simple": "After @deva[लाक्षा], @deva[रोचना], @deva[शकल], @deva[कर्दम] (color names), @deva[ठक्] (not @deva[अण्]) is used. Examples: @deva[लाक्षिकम्], @deva[रौचनिकम्], @deva[शाकलिकम्], @deva[कार्दमिकम्] (dyed with lac, ochre, etc.).",
            "standard": "After the words @deva[लाक्षा] (lac), @deva[रोचना] (yellow ochre), @deva[शकल] (a type of dye), @deva[कर्दम] (mud-color), the affix @deva[ठक्] comes (not @deva[अण्]) in the sense of 'dyed thereby': @deva[लाक्षया रक्तम्] = @deva[लाक्षिकम्] (lac-dyed cloth); @deva[रौचनिकम्], @deva[शाकलिकम्], @deva[कार्दमिकम्]. Per Patañjali, @deva[अण्] also optionally comes after @deva[शकल] and @deva[कर्दम]: @deva[शकलम्], @deva[कार्दमम्].",
            "advanced": "This sūtra provides @deva[ठक्] (debarring @deva[अण्]) for @deva[लाक्षादि] (4 words): @deva[लाक्षिकम्], @deva[रौचनिकम्], @deva[शाकलिकम्], @deva[कार्दमिकम्]. Patañjali: @deva[अण्] optional for @deva[शकल]/कर्दम: @deva[शकलम्], @deva[कार्दमम्]."
        }
    },
    "42003": {
        "en": {
            "simple": "The affix @deva[अण्] comes after a lunar mansion name (in instrumental sense) meaning 'time connected with that asterism'. Examples: @deva[पौष्यम्], @deva[तैष्यम्], @deva[माघम्] (time when moon is in Puṣya, Tiṣya, Maghā).",
            "standard": "The affix @deva[अण्] (from @ref[4.1.83]) comes after words denoting lunar mansions (@deva[नक्षत्र]), when in instrumental case, meaning 'time connected with that asterism' (@deva[तेन युक्तः कालः]). A time is connected with an asterism when the moon is in conjunction with it. Examples: @deva[पुष्येण युक्तः कालः] = @deva[पौष्यम्] (time of Puṣya); similarly @deva[तैष्यम्], @deva[माघम्], @deva[फाल्गुनम्].",
            "advanced": "This sūtra extends @deva[अण्] (@ref[4.1.83]) to @deva[नक्षत्रशब्द] in instrumental (@deva[तेन युक्तः कालः]): @deva[पौष्यम्], @deva[तैष्यम्], @deva[माघम्]. @deva[युक्त] = moon in conjunction with asterism."
        }
    },
    "42004": {
        "en": {
            "simple": "The affix (@deva[अण्]) is elided by @deva[लुप्] when no specific time-portion (day/night) is meant. Example: @deva[अद्य पुष्यः] (today is Puṣya—without specifying day or night).",
            "standard": "The affix ordained by @ref[4.2.3] is elided by @deva[लुप्] when there is no specification of a particular portion of time (day, night, etc.). Thus @deva[अद्य पुष्यः] (today is Puṣya)—meaning the moon is in Puṣya today, without specifying whether daytime or nighttime. With specification: @deva[पौष्यी रात्रिः] (the Puṣya night), @deva[पौष्यमहः] (the Puṣya day).",
            "advanced": "This sūtra provides @deva[लुप्]-elision of @ref[4.2.3] affix when @deva[अनिर्दिष्ट] (no कालविशेष): @deva[अद्य पुष्यः]. With specification (@deva[निर्दिष्ट]): @deva[पौष्यी रात्रिः], @deva[पौष्यमहः]."
        }
    },
    "42005": {
        "en": {
            "simple": "After @deva[श्रवण] and @deva[अश्वत्थ], the affix is elided even when specific time is meant, if the whole word is an appellation. Examples: @deva[श्रवणा रात्रिः], @deva[अश्वत्थो मुहूर्तः].",
            "standard": "After @deva[श्रवण] and @deva[अश्वत्थ], the affix is elided by @deva[लुप्] even when there is specification of time, provided the whole expression is an appellation (@deva[संज्ञा]). Examples: @deva[श्रवणा रात्रिः] (the night called Śravaṇā), @deva[अश्वत्थो मुहूर्तः] (the muhūrta called Aśvattha). Query: Why doesn't @ref[1.2.51] apply (which would change @deva[श्रवणा] to @deva[श्रवण])? Answer: Because @deva[लुप्]-elided affixes are @deva[स्थानिवत्] (treated as present), gender agreement with @deva[रात्रिः] requires feminine @deva[श्रवणा].",
            "advanced": "This sūtra provides @deva[लुप्]-elision for @deva[श्रवण]/अश्वत्थ even with @deva[निर्दिष्टकाल], when @deva[संज्ञा]: @deva[श्रवणा रात्रिः], @deva[अश्वत्थो मुहूर्तः]. @ref[1.2.51] doesn't apply because @deva[लुप्] is @deva[स्थानिवत्]—feminine retained."
        }
    },
    "42006": {
        "en": {
            "simple": "After @deva[द्वन्द्व] compounds of asterism names, @deva[छ] is used (whether or not specific time is meant). Examples: @deva[राधानुराधीया रात्रिः], @deva[तिष्यपुनर्वसवीयम्] (Rādhā-Anurādhā night; Tiṣya-Punarvasu time).",
            "standard": "After @deva[द्वन्द्व] (copulative) compounds of lunar mansion names, the affix @deva[छ] (@deva[ईय]) comes, whether or not there is specification of time. Examples: @deva[राधानुराधीया रात्रिः] (the Rādhā-Anurādhā night), @deva[तिष्यपुनर्वसवीयमहः] (the Tiṣya-Punarvasu day). Without specification: @deva[अद्य राधानुराधीयम्], @deva[अद्य तिष्यपुनर्वसवीयम्]. Note: Here the affix is NOT elided even without specification (unlike @ref[4.2.4]).",
            "advanced": "This sūtra provides @deva[छ] for @deva[नक्षत्र-द्वन्द्व] compounds, @deva[निर्दिष्ट]/अनिर्दिष्ट both: @deva[राधानुराधीया रात्रिः], @deva[तिष्यपुनर्वसवीयमहः]; @deva[अद्य राधानुराधीयम्]. No @deva[लुप्] here (unlike @ref[4.2.4])."
        }
    },
    "42007": {
        "en": {
            "simple": "The affix @deva[अण्] comes after a word (in instrumental) meaning 'the @deva[साम] seen by that person'. Examples: @deva[क्रौञ्चं साम] (Sāma seen by Kruñca), @deva[वासिष्ठम्], @deva[वैश्वामित्रम्].",
            "standard": "The affix @deva[अण्] (from @ref[4.1.83]) comes after a word in the instrumental case meaning 'the @deva[साम] (Sāma Veda portion) seen/revealed to that person'. Examples: @deva[क्रुञ्चेन दृष्टं साम] = @deva[क्रौञ्चं साम] (the Sāma revealed to Kruñca); similarly @deva[वासिष्ठम्] (revealed to Vasiṣṭha), @deva[वैश्वामित्रम्] (revealed to Viśvāmitra).",
            "advanced": "This sūtra extends @deva[अण्] (@ref[4.1.83]) to instrumental sense @deva[तेन दृष्टं साम]: @deva[क्रौञ्चं साम], @deva[वासिष्ठम्], @deva[वैश्वामित्रम्]. @deva[दृष्ट] = 'revealed to' (Vedic seer)."
        }
    },
    "42008": {
        "en": {
            "simple": "After @deva[कलि], @deva[ढक्] (not @deva[अण्]) is used for 'Sāma seen by'. Example: @deva[कालेयं साम] (Sāma revealed to Kali).",
            "standard": "After the word @deva[कलि], the affix @deva[ढक्] (@deva[एय]) comes (debarring @deva[अण्]) in the sense of 'Sāma seen by': @deva[कलिना दृष्टं साम] = @deva[कालेयम्] (the Sāma revealed to Kali). Kārikā: @deva[दृष्टे सामनि जाते च द्विरण्डिद्वा विधीयते। तीयादीकक् न विद्याया गोत्रादङ्कवदिष्यते॥] Note: This sūtra is actually a Vārtika, not an original sūtra of Pāṇini.",
            "advanced": "This sūtra (Vārtika) provides @deva[ढक्] (debarring @deva[अण्]) for @deva[कलि] in @deva[साम-दृष्ट] sense: @deva[कालेयम्]. Kārikā notes @deva[अण्]/ढक् variation for @deva[दृष्ट-साम] and @deva[जात-विद्या]."
        }
    },
    "42009": {
        "en": {
            "simple": "After @deva[वामदेव], @deva[ड्यत्] or @deva[ड्य] is used for 'Sāma seen by'. Example: @deva[वामदेव्यं साम] (Sāma revealed to Vāmadeva).",
            "standard": "After @deva[वामदेव], the affixes @deva[ड्यत्] or @deva[ड्य] come (debarring @deva[अण्]) in the sense of 'Sāma seen by': @deva[वामदेवेन दृष्टं साम] = @deva[वामदेव्यम्] (the Sāma revealed to Vāmadeva). The indicatory @deva[ड्] causes @deva[वृद्धि] of first syllable. Two affixes give accent options: @deva[वामदेव्य॑म्] (udātta on affix, from @deva[ड्यत्]) or @deva[वामदे॑व्यम्] (from @deva[ड्य]). Kārikā asks why @deva[ड्] marking when @deva[इ]-elision (@deva[येति लोपेन]) would give same form—answer: to prevent @deva[नञ्]-accent rule from applying to @deva[वामदेव्य].",
            "advanced": "This sūtra provides @deva[ड्यत्]/ड्य (debarring @deva[अण्]) for @deva[वामदेव] in @deva[साम-दृष्ट] sense: @deva[वामदेव्यम्]. @deva[ड्] → @deva[वृद्धि]. @deva[त्] in @deva[ड्यत्] shows @deva[आद्युदात्त]. Kārikā: @deva[ड्] marking prevents @deva[नञ्स्वर] applying to @deva[वामदेव्य]."
        }
    },
    "42010": {
        "en": {
            "simple": "The affix @deva[अण्] comes after a word (in instrumental) meaning 'a chariot surrounded by that'. Examples: @deva[वास्त्रो रथः], @deva[काम्बलो रथः], @deva[चार्मणो रथः] (chariot covered with cloth/blanket/leather).",
            "standard": "The affix @deva[अण्] (from @ref[4.1.83]) comes after a word in the instrumental case meaning 'a chariot surrounded/covered by that': @deva[वस्त्रेण परिवृतो रथः] = @deva[वास्त्रः] (chariot covered with cloth); @deva[काम्बलः] (covered with blanket); @deva[चार्मणः] (covered with leather). @deva[परिवृत] = covered from all sides. Why 'chariot' specifically? For other things (like body covered with cloth), the affix doesn't apply: @deva[वस्त्रेण परिवृतः कायः] (no derivative).",
            "advanced": "This sūtra extends @deva[अण्] (@ref[4.1.83]) to instrumental sense @deva[तेन परिवृतो रथः]: @deva[वास्त्रः], @deva[काम्बलः], @deva[चार्मणः]. @deva[रथ] = chariot specifically; @deva[परिवृत] = covered all around. Other objects don't take this affix."
        }
    },
    "42011": {
        "en": {
            "simple": "After @deva[पाण्डुकम्बल] etc. (housing-words), @deva[इनि] is used for 'chariot covered by'. Example: @deva[पाण्डुकम्बली रथः] (chariot covered with white woolen blanket).",
            "standard": "After words like @deva[पाण्डुकम्बल] (white woolen blanket, royal elephant housing), the affix @deva[इनि] comes (debarring @deva[अण्]) in the sense of 'chariot surrounded by': @deva[पाण्डुकम्बलेन परिवृतो रथः] = @deva[पाण्डुकम्बली] (chariot covered with white housing). Note: The form @deva[पाण्डुकम्बलिन्] could also be derived by @deva[इनि] of @ref[5.2.115], but this sūtra is needed to establish the specific 'chariot-covering' meaning.",
            "advanced": "This sūtra provides @deva[इनि] (debarring @deva[अण्]) for @deva[पाण्डुकम्बलादि] in @deva[रथ-परिवृत] sense: @deva[पाण्डुकम्बली रथः]. Note: @ref[5.2.115] @deva[इनि] gives same form, but this sūtra establishes specific meaning."
        }
    },
    "42012": {
        "en": {
            "simple": "After @deva[द्वैप] and @deva[वैयाघ्र] (tiger-skin derivatives), @deva[अञ्] is used for 'chariot covered by'. Examples: @deva[दैपः], @deva[वैयाघ्रः] (chariot covered with leopard/tiger skin).",
            "standard": "After @deva[द्वैप] (derived from @deva[द्वीपिन्] 'leopard') and @deva[वैयाघ्र] (derived from @deva[व्याघ्र] 'tiger'), the affix @deva[अञ्] comes (debarring @deva[अण्]) in the sense of 'chariot surrounded by': @deva[द्वैपेन परिवृतो रथः] = @deva[दैपः] (chariot covered with leopard skin); @deva[वैयाघ्रेण परिवृतः] = @deva[वैयाघ्रः] (chariot covered with tiger skin). The difference between @deva[अञ्] and @deva[अण्] is accent only.",
            "advanced": "This sūtra provides @deva[अञ्] (debarring @deva[अण्]) for @deva[द्वैप]/वैयाघ्र in @deva[रथ-परिवृत] sense: @deva[दैपः], @deva[वैयाघ्रः]. @deva[द्वैप] < @deva[द्वीपिन्] (leopard); @deva[वैयाघ्र] < @deva[व्याघ्र] (tiger). @deva[अञ्]/अण् difference = accent."
        }
    },
    "42013": {
        "en": {
            "simple": "The word @deva[कौमार] is irregularly formed (with @deva[अण्]) meaning 'virginity' or 'first husband/wife'. Examples: @deva[कौमारो भर्ता] (first husband of a virgin), @deva[कौमारी भार्या] (wife who was a virgin at marriage).",
            "standard": "The word @deva[कौमार] is an irregular (@deva[निपातन]) formation with @deva[अण्] meaning 'relating to virginity/maidenhood'. @deva[कौमारो भर्ता] = @deva[अपूर्वपतिं कुमारीमुपपन्नः] (husband whose wife was given as a maiden—i.e., first husband); @deva[कौमारी भार्या] = @deva[कुमारी अपूर्वपतिं प्राप्ता] (wife who, as a maiden, obtained her first husband—i.e., not a widow remarriage). Kārikā: @deva[कौमारापूर्ववचने कुमार्या अण्विधीयते। अपूर्वत्वं यदा तस्याः कुमार्या भवतीतिवा॥]",
            "advanced": "This sūtra is @deva[निपातन] for @deva[कौमार] (@deva[अण्]) meaning @deva[अपूर्वपति]-related virginity: @deva[कौमारो भर्ता] = first husband of maiden; @deva[कौमारी भार्या] = wife who was maiden at marriage. Kārikā explains @deva[अपूर्वत्व] condition."
        }
    },
    "42014": {
        "en": {
            "simple": "The affix @deva[अञ्] comes after vessel names (in locative) meaning 'food placed thereon'. Examples: @deva[शारावः], @deva[मालवकः] (rice placed on a dish/bowl).",
            "standard": "The affix @deva[अञ्] (continuing from @ref[4.1.83]) comes after words denoting vessels (@deva[आमत्र]), when in the locative case, meaning 'food placed thereon': @deva[शरावेषूद्धृतः ओदनः] = @deva[शारावः] (boiled rice placed on dishes); @deva[मालवक] (rice on a bowl). @deva[तत्र] = 'thereon' (locative sense); @deva[आमत्र] = 'vessel'; @deva[उद्धृत] = 'placed' (lit. 'the remnants of dinner').",
            "advanced": "This sūtra extends @deva[अञ्] (@ref[4.1.83]) to @deva[आमत्र] (vessel words) in locative (@deva[तत्र उद्धृतम्]): @deva[शारावः ओदनः], @deva[मालवकः]. @deva[उद्धृत] = placed (food remnants sense)."
        }
    },
    "42015": {
        "en": {
            "simple": "After @deva[स्थण्डिल] (bare ground), @deva[अञ्] is used meaning 'one who has vowed to sleep thereon'. Example: @deva[स्थाण्डिलः] (ascetic who sleeps on bare ground).",
            "standard": "After @deva[स्थण्डिल] (bare ground), the affix @deva[अञ्] comes in the sense of 'one who has taken a vow to sleep thereon': @deva[स्थण्डिले शयितुं व्रतमस्य] = @deva[स्थाण्डिलः] (one who has vowed to sleep on bare ground—an ascetic or @deva[ब्रह्मचारिन्]). Why 'vow' (@deva[व्रत]) specifically? For ordinary sleeping (without vow): @deva[स्थण्डिले शेते] (he sleeps on ground) doesn't take the affix.",
            "advanced": "This sūtra extends @deva[अञ्] to @deva[स्थण्डिल] in @deva[व्रत]-@deva[शयन] sense: @deva[स्थाण्डिलः] = vow-bound ground-sleeper. Without @deva[व्रत]: no affix (@deva[स्थण्डिले शेते])."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.2.1-4.2.15 (Batch 1 of 4.2)")
