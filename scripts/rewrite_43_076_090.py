#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.3.76-4.3.90 (Batch 6 of 4.3)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "43076": {
        "en": {
            "simple": "The affix @deva[अण्] comes in the sense of 'thence come' after the words @deva[शुण्डिक] and others in the @deva[शुण्डिकादि] list.\n\nThis replaces @deva[ठक्].\n\nExamples: @deva[शौण्डिकम्] (excise revenue), @deva[कार्कणम्].\n\nThe repetition of @deva[अण्] (though @deva[अनुवृत्ति] was present) prevents subsequent @deva[अपवाद] rules from overriding these words. For example: @deva[औदपानम्].\n\nThe @deva[शुण्डिकादि] list: @deva[शुण्डिक], @deva[कृकण], @deva[स्थण्डिल], @deva[उदपान], @deva[उपल], @deva[तीर्थ], @deva[भूमि], @deva[तृण], @deva[पर्ण].",
            "standard": "The affix @deva[अण्] applies after @deva[शुण्डिकादि] in @deva[ततआगत] sense, debarring @deva[ठक्].\n\nExamples: @deva[शौण्डिकम्], @deva[कार्कणम्], @deva[औदपानम्].\n\n@deva[अण्]-repetition serves @deva[बाधकबाधनार्थम्] (blocks subsequent overrides).\n\n@deva[शुण्डिकादि]: @deva[शुण्डिक], @deva[कृकण], @deva[स्थण्डिल], @deva[उदपान], @deva[उपल], @deva[तीर्थ], @deva[भूमि], @deva[तृण], @deva[पर्ण].",
            "advanced": "@deva[अण्] applies after @deva[शुण्डिकादि] in @deva[ततआगत] sense, superseding @deva[ठक्]. @deva[पुनर्वचन] serves @deva[बाधकबाधनार्थम्].\n\nExamples: @deva[शौण्डिकम्], @deva[कार्कणम्], @deva[औदपानम्]. @deva[शुण्डिकादि] lists 9 items."
        }
    },
    "43077": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes in the sense of 'thence come' after a word denoting a person connected through learning (@deva[विद्या]) or family origin (@deva[योनि]).\n\n@deva[विद्यासम्बन्ध] = relationship through learning (teacher and pupil). @deva[योनिसम्बन्ध] = relationship through blood (father and son).\n\nThis replaces @deva[अण्] and @deva[छ].\n\nExamples for @deva[विद्या]: @deva[उपाध्यायादागतम्] = @deva[औपाध्यायकम्] (knowledge from a teacher), @deva[शैष्यकम्], @deva[आचार्यकम्].\n\nExamples for @deva[योनि]: @deva[मातामहकम्] (wealth from maternal grandfather), @deva[पितामहकम्], @deva[मातुलकम्].",
            "standard": "The affix @deva[वुञ्] applies after @deva[विद्यायोनिसम्बन्ध]-denoting words in @deva[ततआगत] sense, debarring @deva[अण्]/छ].\n\n@deva[विद्यासम्बन्ध]: @deva[औपाध्यायकम्], @deva[शैष्यकम्], @deva[आचार्यकम्]. @deva[योनिसम्बन्ध]: @deva[मातामहकम्], @deva[पितामहकम्], @deva[मातुलकम्].",
            "advanced": "@deva[वुञ्] applies after @deva[विद्यायोनिसम्बन्ध]-words in @deva[ततआगत] sense, superseding @deva[अण्]/छ].\n\nExamples: @deva[औपाध्यायकम्], @deva[शैष्यकम्]; @deva[मातामहकम्], @deva[पितामहकम्], @deva[मातुलकम्]."
        }
    },
    "43078": {
        "en": {
            "simple": "The affix @deva[ठञ्] comes in the sense of 'come thence' after a word ending in short @deva[ऋ] that denotes a person related through learning or blood.\n\nThis replaces @deva[वुञ्].\n\nExamples for @deva[विद्या]: @deva[होतुरागतम्] = @deva[हौतृकम्] (from the Hotṛ priest), @deva[पौतृकम्].\n\nExamples for @deva[योनि]: @deva[भ्रातृकम्] (from a brother), @deva[स्वसृकम्] (from a sister), @deva[मातृकम्] (from a mother).\n\nThe @deva[त्] in @deva[ऋत्] is for pronunciation ease—no word ends in long @deva[ॠ].\n\nWhen not denoting relationship: @deva[सावित्रम्] (from Savitṛ, with @deva[अण्]).",
            "standard": "The affix @deva[ठञ्] applies after @deva[ऋदन्त] @deva[विद्यायोनिसम्बन्ध] words in @deva[ततआगत] sense, debarring @deva[वुञ्].\n\n@deva[विद्या]: @deva[हौतृकम्], @deva[पौतृकम्]. @deva[योनि]: @deva[भ्रातृकम्], @deva[स्वसृकम्], @deva[मातृकम्].\n\n@deva[ऋत्] = short @deva[ऋ]; @deva[त्] for pronunciation. Non-relationship: @deva[सावित्रम्].",
            "advanced": "@deva[ठञ्] applies after @deva[ऋदन्त] @deva[विद्यायोनिसम्बन्ध] in @deva[ततआगत] sense, superseding @deva[वुञ्].\n\nExamples: @deva[हौतृकम्], @deva[पौतृकम्]; @deva[भ्रातृकम्], @deva[स्वसृकम्], @deva[मातृकम्]. Non-relationship: @deva[सावित्रम्]."
        }
    },
    "43079": {
        "en": {
            "simple": "The affixes @deva[यत्] and @deva[ठञ्] come in the sense of 'come thence' after @deva[पितृ] (father).\n\nExamples: @deva[पितुरागतम्] = @deva[पैतृकम्] (paternal, with @deva[ठञ्]) or @deva[पित्र्यम्] (with @deva[यत्], after 7.4.27 and 6.4.148).\n\nBoth mean 'inherited from the father' or 'paternal'.",
            "standard": "The affixes @deva[यत्] and @deva[ठञ्] apply after @deva[पितृ] in @deva[ततआगत] sense.\n\nExamples: @deva[पैतृकम्] (with @deva[ठञ्]), @deva[पित्र्यम्] (with @deva[यत्], @ref[7.4.27], @ref[6.4.148]).",
            "advanced": "@deva[यत्]/ठञ्] apply after @deva[पितृ] in @deva[ततआगत] sense.\n\nForms: @deva[पैतृकम्], @deva[पित्र्यम्] (@ref[7.4.27], @ref[6.4.148])."
        }
    },
    "43080": {
        "en": {
            "simple": "After a word ending with a patronymic affix (@deva[गोत्र]), the rule for the affix meaning 'come thence' is the same as the rule for the affix meaning 'his mark' (@deva[अङ्क]).\n\n@deva[गोत्र] here means any descendant-denoting affix, not just the technical @deva[गोत्र] of grammar. The affixes for @deva[अङ्क] are taught in 4.3.126-127.\n\nExamples: @deva[औपगवानाम् अङ्कः] = @deva[औपगवकः] (the mark of the Aupagavas). The same word also means 'come from the Aupagavas': @deva[औपगवेभ्य आगतम्] = @deva[औपगवकम्].\n\nSimilarly @deva[कापटवकम्], @deva[नाडायनकम्], @deva[चारायणकम्] (with @deva[वुञ्] from 4.3.126).\n\nWith @deva[अण्] from 4.3.127: @deva[बैदः], @deva[गार्गः], @deva[दाक्षः] mean both 'the mark of the Vaidas/Gārgyas/Dākṣis' and 'what comes from them'.\n\nThe word @deva[वत्] indicates complete similarity.",
            "standard": "After @deva[गोत्रान्त] (patronymic-ending) words, the @deva[ततआगत] affixes are identical to @deva[अङ्क] (mark) affixes (@ref[4.3.126]–@ref[4.3.127]).\n\n@deva[गोत्र] = any descendant-denoting affix. Examples: @deva[औपगवकः] (mark or origin); @deva[कापटवकम्], @deva[नाडायनकम्] (with @deva[वुञ्] @ref[4.3.126]); @deva[बैदः], @deva[गार्गः], @deva[दाक्षः] (with @deva[अण्] @ref[4.3.127]).\n\n@deva[वत्] indicates complete @deva[अतिदेश].",
            "advanced": "After @deva[गोत्रान्त], @deva[ततआगत]-affixes follow @deva[अङ्क]-affixes (@ref[4.3.126]–@ref[4.3.127]) by @deva[अतिदेश].\n\nExamples: @deva[औपगवकः], @deva[कापटवकम्] (@deva[वुञ्]); @deva[बैदः], @deva[गार्गः] (@deva[अण्]). @deva[वत्] = complete similarity."
        }
    },
    "43081": {
        "en": {
            "simple": "The affix @deva[रूप्य] denotes 'what originates from that' when added to a word denoting a cause (@deva[हेतु]) or a person viewed as a cause (@deva[मनुष्य]).\n\nExamples for @deva[हेतु]: @deva[समादागतम्] = @deva[समरूप्यम्] (proceeding from a similar cause) or @deva[समीयम्] (with @deva[छ] from 4.2.138). Similarly @deva[विषमरूप्यम्] or @deva[विषमीयम्].\n\nExamples for @deva[मनुष्य]: @deva[देवदत्तरूप्यम्] or @deva[दैवदत्तम्] (originating with Devadatta), @deva[यज्ञदत्तरूप्यम्] or @deva[यज्ञदत्तम्].\n\nThe plural prevents @deva[स्वरूपविधि] (1.1.68). The ablative case can also denote @deva[हेतु] (2.3.25).",
            "standard": "The affix @deva[रूप्य] applies after @deva[हेतु]/मनुष्य]-denoting words in @deva[ततआगत] sense.\n\n@deva[हेतु]: @deva[समरूप्यम्] / @deva[समीयम्] (@ref[4.2.138]). @deva[मनुष्य]: @deva[देवदत्तरूप्यम्] / @deva[दैवदत्तम्].\n\nPlural blocks @deva[स्वरूपविधि] (@ref[1.1.68]). Ablative for @deva[हेतु] per @ref[2.3.25].",
            "advanced": "@deva[रूप्य] applies after @deva[हेतुमनुष्य] in @deva[ततआगत] sense.\n\nExamples: @deva[समरूप्यम्], @deva[देवदत्तरूप्यम्]. Plural blocks @deva[स्वरूपविधि] (@ref[1.1.68]). Ablative-@deva[हेतु] per @ref[2.3.25]."
        }
    },
    "43082": {
        "en": {
            "simple": "The affix @deva[मयट्] comes in the sense of 'come thence' after a word denoting a cause or a person viewed as a cause.\n\nExamples: @deva[सममयम्], @deva[विषममयम्], @deva[देवदत्तमयम्], @deva[यज्ञदत्तमयम्].\n\nThe @deva[ट्] of @deva[मयट्] indicates the feminine is formed with @deva[ङीप्] (4.1.15): @deva[सममयी].\n\nThis rule is separated from the previous to prevent @deva[यथासंख्य] (1.3.10) from applying.",
            "standard": "The affix @deva[मयट्] applies after @deva[हेतुमनुष्य]-denoting words in @deva[ततआगत] sense.\n\nExamples: @deva[सममयम्], @deva[विषममयम्], @deva[देवदत्तमयम्], @deva[यज्ञदत्तमयम्].\n\n@deva[ट्]-indication: feminine @deva[ङीप्] (@ref[4.1.15]): @deva[सममयी]. Separated from @ref[4.3.81] to block @deva[यथासंख्य] (@ref[1.3.10]).",
            "advanced": "@deva[मयट्] applies after @deva[हेतुमनुष्य] in @deva[ततआगत] sense.\n\nExamples: @deva[सममयम्], @deva[देवदत्तमयम्]. @deva[ट्] → @deva[ङीप्] (@ref[4.1.15]). @deva[योगविभाग] blocks @deva[यथासंख्य] (@ref[1.3.10])."
        }
    },
    "43083": {
        "en": {
            "simple": "An affix from @deva[प्राग्दीव्यतः] (4.1.83) comes after a word in the ablative case in the sense of 'what appears for the first time there' (@deva[प्रभवति]).\n\n@deva[प्रभवति] means 'manifests for the first time' or 'appears'—not 'originates', since origin is covered by @deva[तत्र जातः] (4.3.25). It means @deva[प्रकाशते], @deva[प्रथमतः उपलभ्यते]—where the ultimate source is unknown.\n\nExamples: @deva[हिमवतः प्रभवति] = @deva[हैमवती] (the Ganges, appearing first in the Himalayas), @deva[दारदी] (the Indus, appearing first in Dardistan).",
            "standard": "Affixes from @deva[प्राग्दीव्यतः] (@ref[4.1.83]) apply after @deva[पञ्चम्यन्त] in @deva[प्रभव] sense (first appearance).\n\n@deva[प्रभवति] = @deva[प्रकाशते], @deva[प्रथमतः उपलभ्यते]; distinct from @deva[उत्पत्ति] (@ref[4.3.25] @deva[जात]).\n\nExamples: @deva[हैमवती] (Ganges), @deva[दारदी] (Indus).",
            "advanced": "@deva[प्राग्दीव्यतः]-affixes apply after @deva[पञ्चम्यन्त] in @deva[प्रभव] sense.\n\n@deva[प्रभवति] ≠ @deva[उत्पत्ति] (@ref[4.3.25]); = @deva[प्रकाशते]. Examples: @deva[हैमवती], @deva[दारदी]."
        }
    },
    "43084": {
        "en": {
            "simple": "The affix @deva[य] comes in the sense of 'what appears there' after @deva[विदूर].\n\nThis replaces @deva[अण्].\n\nExample: @deva[विदूरात् प्रभवति] = @deva[वैदूर्यः] (a gem, the cat's-eye/beryl).\n\nThe gem is actually found in a mountain called @deva[वालवाय], but @deva[विदूर] is the city where the raw stone is processed. The grammarians call @deva[वालवाय] by the name @deva[विदूर], similar to how merchants call Benares '@deva[जित्वरी]'.",
            "standard": "The affix @deva[य] applies after @deva[विदूर] in @deva[प्रभव] sense, debarring @deva[अण्].\n\nExample: @deva[वैदूर्यः] (gem). Actual source: @deva[वालवाय] mountain; @deva[विदूर] = processing city. Grammarians name @deva[वालवाय] as @deva[विदूर] (cf. merchants: Benares = @deva[जित्वरी]).",
            "advanced": "@deva[य] applies after @deva[विदूर] in @deva[प्रभव] sense, superseding @deva[अण्].\n\nExample: @deva[वैदूर्यः]. @deva[विदूर] = @deva[वालवाय] by @deva[व्यपदेश]. Cf. Benares = @deva[जित्वरी]."
        }
    },
    "43085": {
        "en": {
            "simple": "An affix from @deva[प्राग्दीव्यतः] (4.1.83) comes after a word in the accusative case in the sense of 'what goes thereto', provided that what goes is a road (@deva[पथ्]) or a messenger (@deva[दूत]).\n\nExamples: @deva[स्रुघ्नं गच्छति] = @deva[स्रौघ्नः] (a road or messenger that goes to Srughna), @deva[माथुरः].\n\nThe road may either lead to Srughna or, being in Srughna, be used for going.\n\nWhy @deva[पथिदूतयोः]? Observe @deva[स्रुघ्नं गच्छति सार्थः] (a caravan goes to Srughna for its own sake)—no affix here.",
            "standard": "Affixes from @deva[प्राग्दीव्यतः] (@ref[4.1.83]) apply after @deva[द्वितीयान्त] in @deva[तद्गच्छति] sense when @deva[पथ्]/दूत].\n\nExamples: @deva[स्रौघ्नः पन्थाः/दूतः] (road/messenger to Srughna), @deva[माथुरः].\n\nCondition: @deva[पथिदूतयोः]; counter: @deva[स्रुघ्नं गच्छति सार्थः].",
            "advanced": "@deva[प्राग्दीव्यतः]-affixes apply after @deva[द्वितीयान्त] in @deva[तद्गच्छति] sense, @deva[पथिदूत]-restricted.\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः]. Counter: @deva[सार्थः]."
        }
    },
    "43086": {
        "en": {
            "simple": "An affix from @deva[प्राग्दीव्यतः] (4.1.83) comes after a word in the accusative case in the sense of 'a door that looks towards that' (@deva[तद् अभिनिष्क्रामति द्वारम्]).\n\nExamples: @deva[स्रौघ्नम्] (a gate facing Srughna, e.g., a gate of Kanyakubja), @deva[माथुरम्], @deva[राष्ट्रियम्].\n\nObjection: The sūtra should say @deva[अभिनिष्क्रमणं द्वारम्] since @deva[अभिनिष्क्रामति] makes the gate seem sentient.\n\nAnswer: The gate is the instrument (@deva[करण]) of exiting, and an instrument can be used as an agent: @deva[साध्वसिश्छिनत्ति] (the sword cuts well).\n\nWhy @deva[द्वारम्]? Observe @deva[स्रुघ्नम् अभिनिष्क्रामति पुरुषः] (a person facing Srughna)—no affix.",
            "standard": "Affixes from @deva[प्राग्दीव्यतः] (@ref[4.1.83]) apply after @deva[द्वितीयान्त] in @deva[तद्अभिनिष्क्रामति द्वारम्] sense (gate facing that direction).\n\nExamples: @deva[स्रौघ्नम् द्वारम्], @deva[माथुरम्], @deva[राष्ट्रियम्].\n\nGate = @deva[करण] (instrument) used as agent (cf. @deva[साध्वसिश्छिनत्ति]).\n\nCondition: @deva[द्वारम्]; counter: @deva[पुरुषः].",
            "advanced": "@deva[प्राग्दीव्यतः]-affixes apply after @deva[द्वितीयान्त] in @deva[अभिनिष्क्रामति द्वारम्] sense.\n\nExamples: @deva[स्रौघ्नम्], @deva[माथुरम्]. @deva[द्वार] = @deva[करण] as agent. Condition: @deva[द्वारम्]."
        }
    },
    "43087": {
        "en": {
            "simple": "An affix comes after a word in the accusative case in the sense of 'a book made in relation to that subject' (@deva[अधिकृत्य कृते ग्रन्थे]).\n\n@deva[अधिकृत्य] means 'aiming at', 'relating to', 'about'.\n\nExamples: @deva[सुभद्राम् अधिकृत्य कृतो ग्रन्थः] = @deva[सौभद्रः] (a book about Subhadrā), @deva[गौरिमित्रः], @deva[यायातः], @deva[किरातार्जुनीयम्].\n\nWhy @deva[ग्रन्थे]? Observe @deva[सुभद्राम् अधिकृत्य कृतः प्रासादः] (a palace built in memory of Subhadrā)—no affix.\n\nSupplementary rule (@deva[वार्त्तिक]): The affix is diversely elided when the book is a story (@deva[आख्यायिका]): @deva[वासवदत्ता] (story about Vāsavadattā), @deva[सुमनोत्तरा], @deva[उर्वशी]. Sometimes not: @deva[भैमरथी].",
            "standard": "An affix applies after @deva[द्वितीयान्त] in @deva[अधिकृत्य कृते ग्रन्थे] sense (book about that subject).\n\nExamples: @deva[सौभद्रः], @deva[गौरिमित्रः], @deva[यायातः], @deva[किरातार्जुनीयम्].\n\nCondition: @deva[ग्रन्थे]; counter: @deva[प्रासादः].\n\n@note[type=vārtika]: @deva[लुक्] @deva[बहुलम्] when @deva[आख्यायिका]: @deva[वासवदत्ता], @deva[सुमनोत्तरा], @deva[उर्वशी]. Counter: @deva[भैमरथी].",
            "advanced": "Affixes apply after @deva[द्वितीयान्त] in @deva[अधिकृत्य कृते ग्रन्थे] sense.\n\nExamples: @deva[सौभद्रः], @deva[किरातार्जुनीयम्]. Condition: @deva[ग्रन्थे].\n\n@note[type=vārtika]: @deva[आख्यायिकायां बहुलम्]—@deva[वासवदत्ता], @deva[उर्वशी]; counter: @deva[भैमरथी]."
        }
    },
    "43088": {
        "en": {
            "simple": "The affix @deva[छ] comes in the sense of 'a book made about that subject' after @deva[शिशुक्रन्द], @deva[यमसभ], @deva[द्वन्द्व] compounds, and the words @deva[इन्द्रजननादि].\n\nThis replaces @deva[अण्].\n\nExamples:\n• @deva[शिशुक्रन्दीयः] (a book about infant-crying)\n• @deva[यमसभीयः] (a book about Yama's court)\n• @deva[द्वन्द्व] compounds: @deva[अग्निकाश्यपीयः], @deva[श्येनकपोतीयः], @deva[शब्दार्थसंबन्धीयं प्रकरणम्], @deva[वाक्यपदीयम्]\n• @deva[इन्द्रजननादि] (@deva[आकृतिगण]): @deva[इन्द्रजननीयम्], @deva[प्रद्युम्नागमनीयम्]\n\nSupplementary rule (@deva[वार्त्तिक]): @deva[द्वन्द्व] compounds like @deva[देवासुर] take @deva[अण्] instead: @deva[दैवासुरम्] (the book of Gods and Demons), @deva[राक्षोसुरम्], @deva[गौणमुख्यम्].",
            "standard": "The affix @deva[छ] applies after @deva[शिशुक्रन्द], @deva[यमसभ], @deva[द्वन्द्व], and @deva[इन्द्रजननादि] in @deva[अधिकृत्य ग्रन्थे] sense, debarring @deva[अण्].\n\nExamples: @deva[शिशुक्रन्दीयः], @deva[यमसभीयः]; @deva[अग्निकाश्यपीयः], @deva[वाक्यपदीयम्]; @deva[इन्द्रजननीयम्].\n\n@deva[इन्द्रजननादि] = @deva[आकृतिगण].\n\n@note[type=vārtika]: @deva[देवासुरादि]-@deva[द्वन्द्व] takes @deva[अण्]: @deva[दैवासुरम्], @deva[राक्षोसुरम्].",
            "advanced": "@deva[छ] applies after @deva[शिशुक्रन्द]/यमसभ]/द्वन्द्व]/इन्द्रजननादि] in @deva[अधिकृत्य ग्रन्थे] sense, superseding @deva[अण्].\n\nExamples: @deva[शिशुक्रन्दीयः], @deva[अग्निकाश्यपीयः], @deva[इन्द्रजननीयम्]. @deva[इन्द्रजननादि] = @deva[आकृतिगण].\n\n@note[type=vārtika]: @deva[देवासुरादेरण्]—@deva[दैवासुरम्], @deva[गौणमुख्यम्]."
        }
    },
    "43089": {
        "en": {
            "simple": "An affix comes after a word in the nominative case in the sense of 'this is his dwelling place' (@deva[स अस्य निवासः]).\n\n@deva[स] shows the nominative case of the first word. @deva[अस्य] shows the genitive meaning of the affix. @deva[निवास] means 'dwelling place'—where a person currently lives.\n\nExamples: @deva[स्रुघ्नो निवासो ऽस्य] = @deva[स्रौघ्नः] (a present dweller of Srughna), @deva[माथुरः], @deva[राष्ट्रियः].",
            "standard": "An affix applies after @deva[प्रथमान्त] in @deva[स अस्य निवासः] sense (his current dwelling place).\n\n@deva[स] = nominative; @deva[अस्य] = genitive meaning; @deva[निवास] = where one currently lives.\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः], @deva[राष्ट्रियः].",
            "advanced": "Affixes apply after @deva[प्रथमान्त] in @deva[स अस्य निवासः] sense.\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः], @deva[राष्ट्रियः]."
        }
    },
    "43090": {
        "en": {
            "simple": "An affix comes after a word in the nominative case in the sense of 'this is his mother-land/ancestral home' (@deva[स अस्य अभिजनः]).\n\nThe difference between @deva[निवास] and @deva[अभिजन]: @deva[निवास] is where a person currently lives; @deva[अभिजन] is where his ancestors lived—his native country or ancestral abode.\n\nExamples: @deva[स्रौघ्नः] (one whose ancestral home is Srughna), @deva[माथुरः], @deva[राष्ट्रियः].\n\nThis rule is separated from the previous so that only @deva[अभिजन] (not @deva[निवास]) continues to the next rule.",
            "standard": "An affix applies after @deva[प्रथमान्त] in @deva[स अस्य अभिजनः] sense (his ancestral homeland).\n\n@deva[निवास] = current residence; @deva[अभिजन] = where ancestors lived, native land.\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः], @deva[राष्ट्रियः].\n\nSeparated from @ref[4.3.89] for @deva[अभिजन]-only @deva[अनुवृत्ति] into @ref[4.3.91].",
            "advanced": "Affixes apply after @deva[प्रथमान्त] in @deva[स अस्य अभिजनः] sense.\n\n@deva[निवास] ≠ @deva[अभिजन] (current vs. ancestral). Examples: @deva[स्रौघ्नः], @deva[माथुरः].\n\n@deva[योगविभाग]: @deva[अभिजन] alone continues to @ref[4.3.91]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.3.76-4.3.90 (Batch 6 of 4.3)")
