#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.2.61-4.2.75 (Batch 5 of 4.2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "42061": {
        "en": {
            "simple": "After @deva[क्रम] etc., @deva[वुन्] is used for 'one who studies/knows'. Examples: @deva[क्रमकः], @deva[पदकः], @deva[शिक्षकः].",
            "standard": "After @deva[क्रमादि] words, the affix @deva[वुन्] comes meaning 'one who studies or knows' (debarring @deva[अण्]): @deva[क्रमकः] (@ref[7.1.1]) (one who studies @deva[क्रम]/sequence), @deva[पदकः], @deva[शिक्षकः], @deva[मीमांसकः], @deva[सामकः]. The @deva[क्रमादि] list: @deva[क्रम], @deva[पद], @deva[शिक्षा], @deva[मीमांसा], @deva[सामन्].",
            "advanced": "This sūtra provides @deva[वुन्] (debarring @deva[अण्]) for @deva[क्रमादि] (5 words): @deva[क्रमकः] (@ref[7.1.1]), @deva[पदकः], @deva[शिक्षकः], @deva[मीमांसकः], @deva[सामकः]."
        }
    },
    "42062": {
        "en": {
            "simple": "After @deva[अनुब्राह्मण] (imitation Brāhmaṇa text), @deva[इनि] is used. Example: @deva[अनुब्राह्मणी] (one who studies an Anubrāhmaṇa).",
            "standard": "After @deva[अनुब्राह्मण] (a book imitating a Brāhmaṇa text), the affix @deva[इनि] comes meaning 'one who studies' (debarring @deva[अण्]): @deva[अनुब्राह्मणिन्] → @deva[अनुब्राह्मणी], @deva[अनुब्राह्मणिनौ], @deva[अनुब्राह्मणिनः]. Note: @deva[इनि] also has @deva[मतुप्] force, and by @ref[5.2.115] could denote 'possessing', but here it means 'student of'.",
            "advanced": "This sūtra provides @deva[इनि] (debarring @deva[अण्]) for @deva[अनुब्राह्मण]: @deva[अनुब्राह्मणिन्] (declension: @deva[अनुब्राह्मणी], @deva[अनुब्राह्मणिनौ], etc.). @deva[इनि] ≠ @deva[मतुप्] sense here; = @deva[अध्येतृ] sense."
        }
    },
    "42063": {
        "en": {
            "simple": "After @deva[वसन्त] etc. (season names), @deva[ठक्] is used. Examples: @deva[वासन्तिकः] (one who studies Spring-texts), @deva[वार्षिकः], @deva[शारदिकः].",
            "standard": "After @deva[वसन्तादि] words, the affix @deva[ठक्] comes meaning 'one who studies' (debarring @deva[अण्]): @deva[वासन्तिकः] (who studies the book relating to Spring), @deva[वार्षिकः] (Rainy season), @deva[शारदिकः] (Autumn), etc. The @deva[वसन्तादि] list: @deva[वसन्त], @deva[वर्षा], @deva[शरद्], @deva[हेमन्त], @deva[शिशिर], @deva[प्रथम], @deva[गुण], @deva[चरम], @deva[अनुगुण], @deva[अपर्वन्], @deva[अथर्वन्], @deva[ग्रीष्म].",
            "advanced": "This sūtra provides @deva[ठक्] (debarring @deva[अण्]) for @deva[वसन्तादि] (12 words): @deva[वासन्तिकः], @deva[वार्षिकः], @deva[शारदिकः], @deva[हैमन्तिकः], @deva[शैशिरिकः], etc."
        }
    },
    "42064": {
        "en": {
            "simple": "After titles of works named after their announcer (@deva[प्रोक्त]-affixes), the 'student' affix is elided by @deva[लुक्]. Examples: @deva[पाणिनीयः] (student of Pāṇini's grammar) = @deva[पाणिनीयः] (the work itself).",
            "standard": "After a work-title ending in an affix denoting the announcer (@deva[प्रोक्त], taught in @ref[4.3.101] ff.), the affixes meaning 'one who studies' are elided by @deva[लुक्]: @deva[पाणिनिना प्रोक्तम्] = @deva[पाणिनीयम्] (Pāṇini's grammar); one who studies it is also @deva[पाणिनीयः] (affix elided). Similarly @deva[कातन्त्रम्] → student = @deva[कातन्त्रः].",
            "advanced": "This sūtra provides @deva[लुक्] of @deva[अध्येतृ]-affix after @deva[प्रोक्तप्रत्ययान्त] (work-titles from @ref[4.3.101] ff.): @deva[पाणिनीयः] (work) = @deva[पाणिनीयः] (student)."
        }
    },
    "42065": {
        "en": {
            "simple": "After sūtra-work titles having @deva[क्] as penultimate, the 'student' affix is elided. Examples: @deva[अष्टकाः पाणिनीयाः] (students of Aṣṭaka = Aṣṭādhyāyī).",
            "standard": "After sūtra-work titles having @deva[क्] as the penultimate letter, the affix meaning 'one who studies' is elided by @deva[लुक्]: @deva[अष्टकम्] (Pāṇini's work) → students = @deva[अष्टकाः पाणिनीयाः] (those who study the Aṣṭaka); @deva[दशकाः वैयाघ्रपदीयाः]; @deva[त्रिकाः काशकृत्स्नाः]. Vārtika: Elision applies only when title is formed by a numeral (not just any @deva[क्]-penultimate word).",
            "advanced": "This sūtra provides @deva[लुक्] of @deva[अध्येतृ]-affix after @deva[उपधाक्] sūtra-titles: @deva[अष्टकाः पाणिनीयाः], @deva[दशकाः वैयाघ्रपदीयाः]. Vārtika: only @deva[सङ्ख्या]-formed titles."
        }
    },
    "42066": {
        "en": {
            "simple": "After @deva[छन्दस्] (Vedas) and @deva[ब्राह्मण]-titles, the @deva[प्रोक्त]-affixes also express 'student of that'. Example: @deva[वाजसनेयिनः] (followers of Vājasaneya = students of that Veda).",
            "standard": "When @deva[प्रोक्त]-affixes (@ref[4.3.101]) are added to @deva[छन्दस्] (Vedic texts) or @deva[ब्राह्मण]-titles, they also express 'one who studies/knows': @deva[वाजसनेयेन प्रोक्तम्] = @deva[वाजसनेयिनः] means both 'announced by Vājasaneya' AND 'students of that'. @deva[तद्विषयाणि] = 'this relation' (of @deva[अध्येतृ], the topic of this section).",
            "advanced": "This sūtra extends @deva[प्रोक्त]-affixes (@ref[4.3.101]) to @deva[अध्येतृ]-sense for @deva[छन्दस्]/ब्राह्मण: @deva[वाजसनेयिनः] = both announcer-relation and student-relation."
        }
    },
    "42067": {
        "en": {
            "simple": "An affix is added meaning 'that thing is in this place', giving the place a name. Examples: @deva[उदुम्बराः तत्र सन्ति] = @deva[औदुम्बरम्] (place where fig-trees are).",
            "standard": "An affix is added to a word in the nominative case meaning 'that thing exists here' (@deva[तदस्मिन्नस्ति]), the result being a place-name: @deva[उदुम्बराः तत्र सन्ति] = @deva[औदुम्बरम्] (a place where fig-trees grow); @deva[तिला अस्मिन् सन्ति] = @deva[तैलम्] (oil-region); @deva[बिल्वाः सन्ति] = @deva[बैल्वम्]. @deva[तद्] = nominative; @deva[अस्मिन्] = locative sense; @deva[अस्ति] = 'exists'; @deva[इति] for precision.",
            "advanced": "This sūtra provides affix for @deva[तदस्मिन्नस्ति] (nominative) → place-name: @deva[औदुम्बरम्], @deva[तैलम्], @deva[बैल्वम्]."
        }
    },
    "42068": {
        "en": {
            "simple": "After a word (in instrumental) meaning 'completed by him', an affix is added for country names. Example: @deva[कुशाम्बेन निर्वृत्ता] = @deva[कौशाम्बी] (city built by Kuśāmba).",
            "standard": "After a word in the instrumental case meaning 'completed/built by him' (@deva[तेन निर्वृत्त]), an affix is added when the result is a country/city name: @deva[कुशाम्बेन निर्वृत्ता] = @deva[कौशाम्बी नगरी] (the city of Kauśāmbī, built by Kuśāmba); similarly @deva[हास्तिनापुरम्] (city built by Hastin). The phrase @deva[देशे तन्नाम्नि] from @ref[4.2.67] governs this and subsequent sūtras.",
            "advanced": "This sūtra provides affix for @deva[तेन निर्वृत्त] (instrumental) → @deva[देशनाम]: @deva[कौशाम्बी], @deva[हास्तिनापुरम्]. @ref[4.2.67] @deva[अनुवृत्ति]: @deva[देशे तन्नाम्नि]."
        }
    },
    "42069": {
        "en": {
            "simple": "After a word (in genitive) meaning 'his dwelling-place', an affix is added for country names. Examples: @deva[शिबीनां निवासः] = @deva[शैवः] (land of Śibis).",
            "standard": "After a word in the genitive case meaning 'his dwelling-place' (@deva[तस्य निवासः]), an affix is added when the result is a country name: @deva[शिबीनां निवासः देशः] = @deva[शैवः] (the country of the Śibis); @deva[ऋजुनावां निवासः] = @deva[आर्जुनावः]. @deva[ऋजुनावाम्] = @deva[ऋज्वीनौर्येषाम्] (those whose knees are straight).",
            "advanced": "This sūtra provides affix for @deva[तस्य निवासः] (genitive) → @deva[देशनाम]: @deva[शैवः], @deva[आर्जुनावः]."
        }
    },
    "42070": {
        "en": {
            "simple": "A place is named after whatever is found near it. Example: @deva[विदिशाया अदूरे भवम्] = @deva[वैदिशम्] (city near Vidiśā river).",
            "standard": "An affix is added to a word in the genitive case meaning 'not far from' (@deva[अदूर]), the result being a place-name: @deva[विदिशाया अदूरे भवम्] = @deva[वैदिशम्] (the city near which the Vidiśā river flows). The word @deva[तस्य] (genitive) is supplied from @ref[4.2.69]. @deva[अदूर] = 'near, not far'.",
            "advanced": "This sūtra provides affix for @deva[तस्य अदूरे भवम्] (genitive) → place-name: @deva[वैदिशम्]. @deva[तस्य] from @ref[4.2.69] @deva[अनुवृत्ति]."
        }
    },
    "42071": {
        "en": {
            "simple": "After stems ending in @deva[उ] or @deva[ऊ], @deva[अञ्] (not @deva[अण्]) is used in the four senses. Examples: @deva[आरडवम्], @deva[काक्षतवम्], @deva[कार्कटेलवम्].",
            "standard": "After stems ending in @deva[उ] or @deva[ऊ], the affix @deva[अञ्] comes (debarring @deva[अण्]) in the four-fold senses (@ref[4.2.67]-@ref[4.2.70]): @deva[आरडवम्] (from @deva[अरडु], a Kṣatriya tribe); @deva[काक्षतवम्] (from @deva[कक्षतु]); @deva[कार्कटेलवम्] (from @deva[कर्कटेलू]). Exception: @deva[इक्षु] → @deva[इक्षुमती] (river named after sugarcanes nearby—takes @deva[मतुप्] per @ref[4.2.72]).",
            "advanced": "This sūtra provides @deva[अञ्] (debarring @deva[अण्]) for @deva[उकारान्त]/ऊकारान्त in four senses: @deva[आरडवम्], @deva[काक्षतवम्], @deva[कार्कटेलवम्]. Exception: @deva[इक्षुमती] (@deva[मतुप्])."
        }
    },
    "42072": {
        "en": {
            "simple": "After polysyllabic stems ending in @deva[मतुप्], @deva[अञ्] is used. Examples: @deva[ऐषुकावतम्], @deva[सैध्रकावतम्].",
            "standard": "After words ending in @deva[मतुप्] whose stem (excluding @deva[मतुप्]) is polysyllabic (@deva[बह्वच्], more than two syllables), the affix @deva[अञ्] comes (debarring @deva[अण्]) in the quadruple senses: @deva[ऐषुकावतम्] (from @deva[इषुकावत्]), @deva[सैध्रकावतम्] (from @deva[सिध्रकावत्]). Why 'polysyllabic'? For monosyllabic stems: @deva[धनुमती] → @deva[धानुष्मतम्] (@deva[अण्], not @deva[अञ्]).",
            "advanced": "This sūtra provides @deva[अञ्] (debarring @deva[अण्]) for @deva[बह्वजङ्ग] + @deva[मतुबन्त]: @deva[ऐषुकावतम्], @deva[सैध्रकावतम्]. Monosyllabic stem: @deva[धानुष्मतम्] (@deva[अण्])."
        }
    },
    "42073": {
        "en": {
            "simple": "After polysyllabic stems, @deva[अञ्] is used when 'a well' is meant. Examples: @deva[दैर्घवरत्रः] (well built by Dīrghavaratra), @deva[कापिलवरत्रः].",
            "standard": "After polysyllabic @deva[प्रातिपदिक] (nominal stems), the affix @deva[अञ्] comes (debarring @deva[अण्]) when 'a well' (@deva[कूप]) is to be designated: @deva[दीर्घवरत्रेण निर्वृत्तः कूपः] = @deva[दैर्घवरत्रः] (a well completed by Dīrghavaratra); similarly @deva[कापिलवरत्रः]. The 'quadruple senses' apply here to well-names.",
            "advanced": "This sūtra provides @deva[अञ्] (debarring @deva[अण्]) for @deva[बह्वच् प्रातिपदिक] when @deva[कूप] is denoted: @deva[दैर्घवरत्रः], @deva[कापिलवरत्रः]."
        }
    },
    "42074": {
        "en": {
            "simple": "After any stem (for wells on north bank of @deva[विपाश] river), @deva[अञ्] is used. Examples: @deva[दात्तः कूपः] (well of Datta), @deva[गौप्तः].",
            "standard": "After any @deva[प्रातिपदिक] (whether polysyllabic or not), the affix @deva[अञ्] comes (debarring @deva[अण्]) when denoting a well situated on the northern bank of the river @deva[विपाश] (Beas): @deva[दात्तः] (well completed by Datta), @deva[गौप्तः] (by Gupta). Why 'northern bank'? For wells on the southern bank, @deva[अण्] applies: @deva[दात्तः] → same form but different derivation.",
            "advanced": "This sūtra provides @deva[अञ्] (debarring @deva[अण्]) for any stem when @deva[कूप] on @deva[विपाशा-उत्तरतीर]: @deva[दात्तः], @deva[गौप्तः]. Southern bank: @deva[अण्]."
        }
    },
    "42075": {
        "en": {
            "simple": "After @deva[संकल] etc., @deva[अण्] is used in the four-fold senses. Examples: @deva[सांकलः], @deva[पौष्कलः].",
            "standard": "After @deva[संकलादि] words, the affix @deva[अण्] comes in the four-fold senses: @deva[सांकलः], @deva[पौष्कलः]. @deva[संकल] = @deva[संगतः कलः] (gathered parts). The @deva[संकलादि] list: @deva[संकल], @deva[पुष्कल], @deva[उत्तम], @deva[उडुप], @deva[उद्वेप], @deva[उत्पुट], @deva[कुम्भ], @deva[निधान], @deva[सुदक्ष], @deva[सुदत्त], @deva[सुभूत], @deva[सुपूत], @deva[सुनेत्र], @deva[सुमङ्गल], @deva[सुपिङ्गल], etc.",
            "advanced": "This sūtra provides @deva[अण्] for @deva[संकलादि] in four senses: @deva[सांकलः], @deva[पौष्कलः]. List: @deva[संकल] through @deva[सुपिङ्गल] etc."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.2.61-4.2.75 (Batch 5 of 4.2)")
