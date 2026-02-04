#!/usr/bin/env python3
"""Rewrite commentary for 6.2.136-150 (prakritya-svara, dvandva, uttarapadantyodatta)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62136": {
        "en": {
            "simple": "The word @deva[कुण्ड] at the end of a @deva[तत्पुरुष] compound gets first-syllable accent when it means 'forest' or 'thicket'. Examples: @deva[दर्भकुण्डम्] 'darbha grass thicket', @deva[शरकुण्डम्] 'reed thicket'. Without forest meaning: @deva[मृतकुण्डम्] (कुण्ड = basin or caste name).",
            "standard": "The word @deva[कुण्ड] primarily means 'basin' or a caste name, but here denotes 'forest/thicket' metaphorically. When @deva[कुण्ड] has this वन meaning, it receives आद्युदात्त: @deva[दर्भकुण्डम्], @deva[शरकुण्डम्]. The force is समुदाय (collection): @deva[शरवणसमुदायः] = @deva[शरकुण्डम्]. The counterexample @deva[मृतकुण्डम्] lacks the forest meaning.",
            "advanced": "This sūtra concludes the @ref[6.2.111] अधिकार for उत्तरपदाद्युदात्त. The @deva[कुण्ड] = वन interpretation is लाक्षणिक (metaphorical), viewing grass/reed clusters as 'forests'. The समुदाय sense treats the collective growth as a unit. Some grammarians consider वन a primary meaning of @deva[कुण्ड], not metaphorical. The @deva[वनम्] in the sūtra may also refer to the semantic condition."
        }
    },
    "62137": {
        "en": {
            "simple": "The word @deva[भगाल] and its synonyms at the end of a @deva[तत्पुरुष] keep their original accent. Examples: @deva[कुम्भीभगालम्], @deva[कुम्भीकपालम्], @deva[कुम्भीनदालम्]. These words have acute on the middle syllable by Phiṭ II.9.",
            "standard": "The word @deva[भगाल] and synonyms (@deva[कपाल], @deva[नदाल]) retain प्रकृतिस्वर (original accent) in तत्पुरुष. Examples: @deva[कुम्भीभगालम्], @deva[कुम्भीकपालम्], @deva[कुम्भीनदालम्]. These words have मध्योदात्त (middle acute) by Phiṭ II.9. The term @deva[प्रकृत्य] governs through @ref[6.2.143].",
            "advanced": "This begins the प्रकृतिस्वर section (@ref[6.2.137]-@ref[6.2.143]) where उत्तरपद retains inherent accent. The @deva[भगाल] class (Phiṭ II.9 मध्योदात्त) includes synonyms by the paryāya extension. The @deva[प्रकृत्य] अनुवृत्ति indicates that both compound members may retain original accents in certain configurations."
        }
    },
    "62138": {
        "en": {
            "simple": "After @deva[शिति] 'white/grey' in a @deva[बहुव्रीहि], a disyllabic word keeps its original accent, except @deva[भसद्] 'buttocks'. Examples: @deva[शितिपादः] 'white-footed', @deva[शित्यसः] 'white-shouldered', @deva[शित्यौष्ठः] 'white-lipped'.",
            "standard": "After @deva[शिति] in बहुव्रीहि, नित्यद्व्यच् (always disyllabic) words retain प्रकृतिस्वर, except @deva[भसद्]. The word @deva[पाद] (वृषादि, @ref[6.1.203]) has आद्युदात्त; @deva[अंस] and @deva[ओष्ठ] (सन् and थम् affixes, Uṇādi V.21, II.4) have आद्युदात्त by @ref[6.1.197]. Contrast @deva[दर्शनीयपादः] where prefix affects accent.",
            "advanced": "The @deva[शिति]-पूर्व condition with नित्यद्व्यच् (etymologically disyllabic) and @deva[भसद्]-exception defines a narrow class. The @deva[पाद] class (वृषादि by @ref[6.1.203]) and Uṇādi-formed @deva[अंस]/ओष्ठ] all have आद्युदात्त. The counterexample @deva[दर्शनीयपादः] (कृदन्त पूर्वपद) shows that गति/कारक conditions (@ref[6.2.139]) would override प्रकृतिस्वर."
        }
    },
    "62139": {
        "en": {
            "simple": "In a @deva[तत्पुरुष], a word ending in a @deva[कृत्] affix keeps its original accent when preceded by a @deva[गति] (verbal prefix), a @deva[कारक] (case-related word), or an @deva[उपपद] (governing nominal). Examples: @deva[प्रकारकः], @deva[प्रकरणम्], @deva[इध्मव्रश्चनः].",
            "standard": "In गति/कारक/उपपद तत्पुरुष, कृदन्त words retain प्रकृतिस्वर. With गति: @deva[प्रकारकः], @deva[प्रहारकः], @deva[प्रकरणम्], @deva[प्रहरणम्] (compounded by @ref[2.2.18]). With कारक: @deva[इध्मव्रश्चनः] (wood-cutter). The गति is defined at @ref[1.4.60]; उपपद at @ref[3.1.92] (@deva[तत्रोपपदं] @deva[सप्तमीस्थम्]).",
            "advanced": "This foundational rule assigns प्रकृतिस्वर to कृदन्त उत्तरपद when the पूर्वपद is गति, कारक, or उपपद. The गति reference (@ref[1.4.60] @deva[गतिश्च]) includes प्रादि prefixes. The कारक condition covers instrumental, locative, etc. relationships. The उपपद condition (@ref[3.1.92]) handles governing nominals that trigger verbal noun formation."
        }
    },
    "62140": {
        "en": {
            "simple": "In compounds like @deva[वनस्पति] 'lord of forest', both members keep their original accents simultaneously. Examples: @deva[वनस्पतिः] (both @deva[वन] and @deva[पति] acute on first); @deva[बृहस्पतिः] (Bṛhaspati); @deva[शचीपतिः] (Indra).",
            "standard": "The वनस्पत्यादि class retains dual accent (both पूर्वपद and उत्तरपद keep प्रकृतिस्वर). In @deva[वनस्पतिः], both @deva[वन] and @deva[पति] are आद्युदात्त; the सुट् augment comes by @ref[6.1.157]. In @deva[बृहस्पतिः] (@deva[बृहतां] @deva[पतिः]), @deva[बृहत्] may be अन्त्योदात्त or आद्युदात्त. In @deva[शचीपतिः], @deva[शची] (ङीष्-formed) is typically आद्युदात्त.",
            "advanced": "The उभयोः phrase indicates simultaneous accent retention—a rare pattern. The @deva[वनस्पति] formation with सुट् by @ref[6.1.157] and the @deva[बृहस्पति]/शचीपति] divine names form an आकृतिगण. The variant @deva[बृहत्] accents (some: आद्युदात्त; others: अन्त्योदात्त) reflect grammatical debate about भ्-initial stems."
        }
    },
    "62141": {
        "en": {
            "simple": "In a @deva[द्वन्द्व] compound of divine names, both members keep their original accents. Examples: @deva[इन्द्रासोमौ] (Indra and Soma), @deva[इन्द्रावरुणौ] (Indra and Varuṇa), @deva[इन्द्राबृहस्पती] (Indra and Bṛhaspati—three accents!).",
            "standard": "In देवताद्वन्द्व, both members retain प्रकृतिस्वर. The word @deva[इन्द्र] has निपातन आद्युदात्त; @deva[सोम] (मन्, Uṇādi I.140) and @deva[वरुण] (उनन्, Uṇādi III.53) are आद्युदात्त by @ref[6.1.197]. Since @deva[बृहस्पति] itself has two accents (@ref[6.2.140]), @deva[इन्द्राबृहस्पती] has three accents total.",
            "advanced": "The देवता condition restricts this dual-accent pattern to divine names. The compound @deva[इन्द्राबृहस्पती] with three accents (one on @deva[इन्द्र], two on @deva[बृहस्पति] from @ref[6.2.140]) shows how प्रकृतिस्वर compounds. Non-divine द्वन्द्व like @deva[ब्राह्मणक्षत्रियौ] would follow different accent rules."
        }
    },
    "62142": {
        "en": {
            "simple": "In divine-name @deva[द्वन्द्व], the dual-accent rule doesn't apply when the second member's first syllable is @deva[अनुदात्त]—except for @deva[पृथिवी], @deva[रुद्र], @deva[पूषन्], and @deva[मन्थिन्]. Examples: @deva[इन्द्राग्नी], @deva[इन्द्रवायू] (where @deva[अग्नि] and @deva[वायु] have final acute).",
            "standard": "When the उत्तरपद is अनुदात्तादि (first syllable grave), dual accent is blocked—except for @deva[पृथिवी], @deva[रुद्र], @deva[पूषन्], @deva[मन्थिन्]. Thus @deva[इन्द्राग्नी] and @deva[इन्द्रवायू] (with अन्त्योदात्त @deva[अग्नि], @deva[वायु]) don't both retain accent. The repeated @deva[उत्तरपद] ensures the अनुदात्तादि qualification applies to it, not to द्वन्द्व.",
            "advanced": "The अनुदात्तादि condition identifies words whose first syllable is grave (अनुदात्त), blocking the उभयप्रकृतिस्वर of @ref[6.2.141]. The four exceptions (@deva[पृथिवी], @deva[रुद्र], @deva[पूषन्], @deva[मन्थिन्]) retain dual accent despite being अनुदात्तादि. The @deva[उत्तरपद] repetition is a technical device ensuring proper qualifier scope."
        }
    },
    "62143": {
        "en": {
            "simple": "This is a heading rule (@deva[अधिकार]). From here to the chapter's end, the sūtras teach that the last syllable of the second member (@deva[उत्तरपद]) gets acute accent. This is called @deva[उत्तरपदान्त्योदात्त].",
            "standard": "This अधिकार establishes @deva[उत्तरपदान्त्योदात्त] (acute on the final syllable of उत्तरपद) for the remaining sūtras of chapter 6.2. This contrasts with the earlier @ref[6.2.111] अधिकार which assigned उत्तरपदाद्युदात्त (accent on first syllable of उत्तरपद).",
            "advanced": "This अधिकार closes the प्रकृतिस्वर section (@ref[6.2.137]-@ref[6.2.142]) and opens the उत्तरपदान्त्योदात्त section extending to chapter end. The systematic progression—पूर्वपदाद्युदात्त (@ref[6.2.64]), पूर्वपदान्त्योदात्त (@ref[6.2.92]), उत्तरपदाद्युदात्त (@ref[6.2.111]), उत्तरपदान्त्योदात्त (@ref[6.2.143])—covers all possible compound accent locations."
        }
    },
    "62144": {
        "en": {
            "simple": "Verbal nouns ending in @deva[थ], @deva[अथ], @deva[घञ्], @deva[क्त], @deva[अच्], @deva[अप्], @deva[इत्र], or @deva[क] get final-syllable accent when preceded by @deva[गति], @deva[कारक], or @deva[उपपद]. Examples: @deva[सुनीथः], @deva[अवभृथः], @deva[आवसथः], @deva[प्रत्ययः].",
            "standard": "Eight कृत् affixes receive उत्तरपदान्त्योदात्त when preceded by गति/कारक/उपपद: @deva[थ] (@deva[सुनीथः], @deva[अवभृथः] by क्थन्, Uṇādi II.2-3); @deva[अथ] (@deva[आवसथः], @deva[उपवसथः]); @deva[घञ्] (@deva[प्रत्ययः], @deva[प्रकारः]); @deva[क्त]; @deva[अच्]; @deva[अप्]; @deva[इत्र]; @deva[क]. This overrides @ref[6.2.139]'s प्रकृतिस्वर.",
            "advanced": "This sūtra carves out exceptions to @ref[6.2.139]'s प्रकृतिस्वर for the eight enumerated affixes. The Uṇādi-formed @deva[सुनीथ]/अवभृथ] (क्थन्) would have आद्युदात्त by @ref[6.2.139], but this rule assigns अन्त्योदात्त. The गति/कारक/उपपद condition from @ref[6.2.139] is inherited (@deva[गतिकारकोपपदात्] @deva[कृत्])."
        }
    },
    "62145": {
        "en": {
            "simple": "The @deva[क्त] participle gets final-syllable accent when preceded by @deva[सु] 'well' or by a comparison word (@deva[उपमान]). Examples: @deva[सुकृतम्] 'well-done', @deva[सुभुक्तम्] 'well-eaten'; @deva[वृकावलुप्तम्] 'wolf-torn', @deva[सिंहविनर्दितम्] 'lion-roared'.",
            "standard": "Two conditions trigger अन्त्योदात्त on @deva[क्त]: (1) @deva[सु]-prefix: @deva[सुकृतम्], @deva[सुभुक्तम्], @deva[सुपीतम्]; (2) उपमान-पूर्वपद: @deva[वृकावलुप्तम्] 'torn as if by a wolf', @deva[शशलुप्तम्], @deva[सिंहविनर्दितम्]. This overrides @ref[6.2.49] and @ref[6.2.48]. When @deva[सु] is not गति: @deva[सुस्तुतम्] @deva[भवता] follows different accent.",
            "advanced": "The @deva[सु]-गति and उपमान conditions create अन्त्योदात्त exceptions to the प्रकृतिस्वर of @ref[6.2.139] (via @ref[6.2.49]) and the पूर्वपद accents of @ref[6.2.48]. The उपमान compounds compare the action to that of an animal: @deva[वृकावलुप्त] = 'torn in the manner of wolf-tearing'. The non-गति @deva[सु] condition excludes cases where @deva[सु] means 'well praised'."
        }
    },
    "62146": {
        "en": {
            "simple": "The @deva[क्त] participle gets final-syllable accent when preceded by @deva[गति], @deva[कारक], or @deva[उपपद], if the compound is a name. Exceptions: @deva[आचित] etc. Examples: @deva[संभूतः] (Rāmāyaṇa's name), @deva[उपहूतः] (Śākalya's name), @deva[धनुषखाता] @deva[नदी] 'river dug by bow'.",
            "standard": "In संज्ञा (name) compounds, गति/कारक/उपपद-preceded @deva[क्त] receives अन्त्योदात्त, overriding @ref[6.2.49]. Examples: @deva[संभूतो] @deva[रामायणः], @deva[उपहूतः] @deva[शाकल्यः], @deva[परिजग्धः] @deva[कौण्डिन्यः]. Also कारक-compounds: @deva[धनुषखाता] @deva[नदी], @deva[कुद्दालखातम्] @deva[नगरम्], @deva[हस्तिमृदिता] @deva[भूमिः]. Exception: @deva[आचित], @deva[पर्याचित], @deva[आस्थापित] etc.",
            "advanced": "The संज्ञा condition extends अन्त्योदात्त to proper names with @deva[क्त]-final उत्तरपद. This overrides both @ref[6.2.49] (prefix accent) and @ref[6.2.48] (कारक-preceding accent). The आचितादि gaṇa provides exceptions that retain प्रकृतिस्वर. The कारक examples show instrumental relationships: @deva[धनुषा] @deva[खाता] = 'dug by bow'."
        }
    },
    "62147": {
        "en": {
            "simple": "The words @deva[प्रवृद्ध] 'grown', @deva[प्रयुक्त] 'applied', @deva[अवहित] 'placed', @deva[खट्वारूढ] 'mounted on bed', @deva[कविशस्त] 'praised by poets' etc. have final-syllable accent. Examples: @deva[प्रवृद्धं] @deva[यानम्], @deva[प्रयुक्ताः] @deva[सक्तवः].",
            "standard": "The प्रवृद्धादि gaṇa receives अन्त्योदात्त: @deva[प्रवृद्धं] @deva[यानम्] 'mature vehicle', @deva[प्रवृद्धो] @deva[वृषलः] 'grown śūdra', @deva[प्रयुक्ताः] @deva[सक्तवः] 'applied barley gruel', @deva[आकर्षेऽवहितः] 'placed in mine', @deva[खट्वारूढः] 'bed-mounted', @deva[कविशस्तः] 'poet-praised'. This is an आकृतिगण; forms like @deva[पुनरुक्त] are included.",
            "advanced": "The प्रवृद्धादि is an आकृतिगण (open class), allowing analogical extension. The gaṇapāṭha lists these with their collocations (@deva[यान] etc.), but some hold the अन्त्योदात्त applies even without those words. The @deva[पुनरुक्त] extension shows the productive nature of this class. The क्त-ending connects to the @ref[6.2.143] अधिकार."
        }
    },
    "62148": {
        "en": {
            "simple": "Only @deva[दत्त] 'given' and @deva[श्रुत] 'heard' get final-syllable accent when preceded by a @deva[कारक] word, if the compound is a name expressing a blessing. Examples: @deva[देवदत्तः] 'god-given' (may gods give him!), @deva[विष्णुश्रुतः] 'Viṣṇu-heard' (may Viṣṇu hear him!).",
            "standard": "The restriction @deva[एव] limits @ref[6.2.146]'s scope to @deva[दत्त] and @deva[श्रुत] in कारक-preceded आशिस् (benediction) names. Thus @deva[देवदत्तः] (@deva[देवा] @deva[एनं] @deva[देयासुः]) and @deva[विष्णुश्रुतः] (@deva[विष्णुः] @deva[एवं] @deva[श्रूयात्]) receive अन्त्योदात्त. But @deva[देवपालितः], though a name, follows @ref[6.2.48] since @deva[पालित] ≠ @deva[दत्त]/श्रुत].",
            "advanced": "This नियम (restriction) narrows @ref[6.2.146] to two participles in आशिस् (optative blessing) संज्ञा. The @deva[दत्त]/श्रुत] limitation means other @deva[क्त]-names like @deva[देवपालित] revert to @ref[6.2.48]'s पूर्वपद accent. The आशिस् interpretation derives names from optative sentences: @deva[देवा] @deva[दद्युः] → @deva[देवदत्त]."
        }
    },
    "62149": {
        "en": {
            "simple": "The @deva[क्त] participle gets final-syllable accent when the compound means 'done by one in such a condition' (@deva[इत्थंभूत]). Examples: @deva[सुप्तप्रलपितम्] 'babbled while sleeping', @deva[उन्मत्तप्रलपितम्] 'babbled while mad', @deva[प्रमत्तगीतम्] 'sung while intoxicated'.",
            "standard": "The इत्थंभूत (being in such a state) condition triggers अन्त्योदात्त. The पूर्वपद denotes the agent's condition: @deva[सुप्तप्रलपितम्] 'babbling done while asleep', @deva[उन्मत्तप्रलपितम्] 'babbling done while mad', @deva[प्रमत्तगीतम्] 'singing done while intoxicated', @deva[विपन्नश्रुतम्] 'learning done while distressed'. These function as adjectives or abstract nouns.",
            "advanced": "The इत्थंभूतलक्षण compound type identifies the agent's state during the action. This अन्त्योदात्त rule is an exception to @ref[6.2.48]. When the same words (@deva[प्रलपित] etc.) function as भाववाचक (action nouns), they receive अन्त्योदात्त by @ref[6.2.144] anyway. The इत्थंभूत condition creates कर्तृविशेषण rather than क्रियाविशेषण semantics."
        }
    },
    "62150": {
        "en": {
            "simple": "When preceded by a @deva[कारक] word (as in @ref[6.2.148]), a word ending in @deva[अन] affix gets final-syllable accent if it denotes the action (abstract) or the object (passive). Examples: @deva[ओदनभोजनम्] @deva[सुखम्] 'eating rice is pleasant', @deva[राजभोजनाः] @deva[शालयः] 'rice fit for king's eating'.",
            "standard": "The @deva[अन]-ending words receive अन्त्योदात्त when कारक-preceded, in both भाव (abstract) and कर्मवचन (passive/objective) senses. Abstract examples: @deva[ओदनभोजनं] @deva[सुखम्], @deva[पयःपानं] @deva[सुखम्], @deva[चन्दनप्रियङ्गुकालेपनं] @deva[सुखम्]. Passive/objective: @deva[राजभोजनाः] @deva[शालयः] 'rice to be eaten by king', @deva[राजाच्छादनानि] @deva[वासांसि] 'clothes to be worn by king'.",
            "advanced": "The कारक condition (inherited from @ref[6.2.148]) combines with @deva[अन]-affix and भाव/कर्मवचन semantics. The भाव sense is abstract verbal noun (@deva[भोजनम्] = 'the act of eating'); the कर्मवचन sense is objective/passive adjective (@deva[राजभोजनाः] = 'to-be-eaten-by-king'). Both receive उत्तरपदान्त्योदात्त by this sūtra."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.136-6.2.150)")
