# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33031": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[स्तु] 'to praise' with @deva[सम्] when the reference is to sacrifice. Example: @deva[संस्तावः] 'the place where chanters gather at a sacrifice'. For non-sacrificial use: @deva[संस्तवः] 'mutual praise'.",
            "standard": "After @deva[सम्] + @deva[स्तु] 'to praise together', @deva[घञ्] applies when the word refers to sacrificial matters (@deva[अध्वर]). Thus @deva[संस्तावश्छन्दोगानाम्] 'the saṃstāva of the Chandogas'—the place at a sacrifice where Brāhmaṇas reciting hymns gather. Without sacrificial reference: @deva[संस्तवश्छात्रयोः] 'the mutual praising of two students'.",
            "advanced": "The semantic restriction @deva[अध्वरे] 'in sacrifice' triggers @deva[घञ्] for @deva[सम्] + @deva[स्तु]. The word @deva[संस्ताव] specifically denotes @deva[समेत्य स्तुवन्ति यस्मिन् देशे छन्दोगाः स देशः] 'the place where Chandogas (Sāmaveda chanters) come together and praise'. Outside sacrificial contexts, the regular formation @deva[संस्तवः] applies."
        }
    },
    "33032": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[स्तॄ] 'to spread' with @deva[प्र], when NOT referring to sacrifice. Examples: @deva[शङ्खप्रस्तारः] 'a bed of conch shells'; @deva[मणिप्रस्तारः] 'strewing of gems'.",
            "standard": "With @deva[प्र] + @deva[स्तॄ] 'to spread/strew', @deva[घञ्] applies when the word does NOT refer to sacrifice (@deva[अनध्वरे]). Thus: @deva[शङ्खप्रस्तारः] 'a layer/bed of conch shells'; @deva[मणिप्रस्तारः] 'strewing of gems'. For sacrificial spreading, a different formation would apply.",
            "advanced": "This @deva[सूत्र] complements @ref[3.3.31] by specifying the non-sacrificial condition. The restriction @deva[अनध्वरे] ensures that @deva[प्रस्तार] forms with @deva[घञ्] apply only to secular contexts (beds of shells, gems, etc.), not to the ritual spreading of sacred materials in sacrifice."
        }
    },
    "33033": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[स्तॄ] 'to spread' with @deva[वि] when meaning 'extent/expansion' and NOT referring to words. Example: @deva[पटस्य विस्तारः] 'the extent of a cloth'. For word-prolixity: @deva[विस्तरो वचसाम्].",
            "standard": "With @deva[वि] + @deva[स्तॄ], @deva[घञ्] applies when the meaning is @deva[प्रथन] (extension, extent) and when NOT referring to words (@deva[अवचने]). Thus @deva[पटस्य विस्तारः] 'the extent/expansion of the garment'. Counter-examples: @deva[तृणविस्तरः] 'collection of grass' (not extent); @deva[विस्तरो वचसाम्] 'prolixity of words' (referring to words).",
            "advanced": "Two conditions apply: (1) @deva[प्रथने] 'when meaning extent/circuit/range' and (2) @deva[अवचने] 'not referring to words'. Both must be satisfied for @deva[घञ्]. The first condition excludes meanings like 'collection/heap'; the second excludes verbal/linguistic contexts where @deva[विस्तर] (without @deva[घञ्]) is used."
        }
    },
    "33034": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[स्तॄ] with @deva[वि] when the word forms part of a metre's name. Example: @deva[विष्टारः] as in the metre @deva[विष्टारपङ्क्ति].",
            "standard": "When @deva[वि] + @deva[स्तॄ] forms (part of) a metrical name (@deva[छन्दोनाम्नि]), @deva[घञ्] applies. Thus @deva[वि] + @deva[स्तृ] + @deva[घञ्] → @deva[विष्टारः] (with @deva[ष्] by @ref[8.3.94]), occurring in the metre name @deva[विष्टारपङ्क्ति]. The word @deva[छन्द] here means prosodic metres (Gāyatrī etc.), not the Vedas.",
            "advanced": "The locative @deva[छन्दोनाम्नि] means 'when occurring in (part of) a metre's name'—@deva[विष्टार] itself isn't a complete metre name but a component of @deva[विष्टारपङ्क्ति]. The sandhi @deva[वि] + @deva[स्तार] → @deva[विष्टार] involves @deva[स्] → @deva[ष्] after @deva[इ] by @ref[8.3.94]. The @deva[नाम्नि] specification excludes this from the previous @deva[सूत्र]'s conditions."
        }
    },
    "33035": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[ग्रह्] 'to seize' with @deva[उत्]. Example: @deva[उद्ग्राहः] 'lifting up'. A @deva[वार्तिक] notes Vedic @deva[निग्राभ] (with @deva[नि] and @deva[ह] → @deva[भ]).",
            "standard": "With @deva[उत्] + @deva[ग्रह्] 'to seize/lift', @deva[घञ्] applies, blocking @deva[अप्]. Thus @deva[उद्ग्राहः] 'lifting up'. A @deva[वार्तिक] notes that in Vedic, with @deva[नि] also, @deva[घञ्] applies and @deva[ह] changes to @deva[भ]: @deva[उद्ग्राभं च निग्राभं च ब्रह्मदेवा अवीवृधन्] 'the Brahmadevas increased the lifting up and putting down (of the sacrificial ladle)'.",
            "advanced": "The @deva[अपवाद] blocks @deva[अप्] (@ref[3.3.57]). The Vedic @deva[वार्तिक] extends @deva[घञ्] to @deva[नि] + @deva[ग्रह्] with the irregular change @deva[ह] → @deva[भ], yielding @deva[निग्राभ] alongside @deva[उद्ग्राभ]. These forms refer to the ritual raising and lowering of the sacrificial ladle (@deva[स्रुव])."
        }
    },
    "33036": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[ग्रह्] 'to seize' with @deva[सम्] when the meaning relates to fist/clenching. Example: @deva[मल्लस्य सङ्ग्राहः] 'the wrestler's clenching of fist'. For other meanings: @deva[सङ्ग्रहो धान्यस्य] 'collection of grain'.",
            "standard": "With @deva[सम्] + @deva[ग्रह्], @deva[घञ्] applies when the meaning relates to @deva[मुष्टि] 'fist/boxing'. Thus @deva[मल्लस्य सङ्ग्राहः] 'the wrestler's firm grip'; @deva[मुष्ठिकस्य सङ्ग्राहः] 'the boxer's clenching'. Without the fist-meaning: @deva[सङ्ग्रहो धान्यस्य] 'a collection of grain'.",
            "advanced": "The semantic condition @deva[मुष्टिविषये] restricts @deva[घञ्] to contexts involving fisting, clenching, or boxing. The word @deva[मुष्टि] denotes both the closed fist and the act of boxing. Outside this semantic domain, the regular formation @deva[सङ्ग्रह] applies."
        }
    },
    "33037": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[परि] + @deva[नी] meaning 'game/gambling' and @deva[नि] + @deva[इ] meaning 'propriety/law'. Examples: @deva[परिणायः] 'chess move'; @deva[न्यायः] 'justice, logic'. Other meanings: @deva[परिणयः] 'marriage'; @deva[न्ययम्] 'decay'.",
            "standard": "By @ref[1.3.10], @deva[परि] pairs with @deva[नी] and @deva[नि] with @deva[इ]. With meanings @deva[द्यूत] 'gambling/game' and @deva[अभ्रेष] 'propriety/law' respectively, @deva[घञ्] applies. Thus @deva[परिणायः] 'moving chess pieces from all sides, winning the game'; @deva[न्यायः] (@deva[नि] + @deva[इ] + @deva[घञ्] → @deva[नि] + @deva[आय]) 'justice, logic'. Without these senses: @deva[परिणयः] 'marriage'; @deva[न्ययम्] 'decay'.",
            "advanced": "The @deva[यथासंख्य] principle pairs items: @deva[परि]-@deva[नी] with @deva[द्यूत] sense; @deva[नि]-@deva[इ] with @deva[अभ्रेष] sense (@deva[पदार्थानाम् अनपचारो यथापापकरणम्] 'proper arrangement of matters, doing things correctly'). The derivation @deva[नि] + @deva[इ] + @deva[घञ्] → @deva[नि] + @deva[ऐ] (by @deva[वृद्धि]) + @deva[अ] → @deva[न्याय]."
        }
    },
    "33038": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[इ] 'to go' with @deva[परि] when meaning 'regular succession/turn'. Example: @deva[पर्यायः] 'turn' (@deva[तव पर्यायः] 'your turn'). For other meanings: @deva[कालस्य पर्ययः] 'lapse of time'.",
            "standard": "With @deva[परि] + @deva[इ] meaning @deva[अनुपात्यय] (regular succession, turn), @deva[घञ्] applies. Thus @deva[पर्यायः] 'turn, succession'—@deva[तव पर्यायः] 'your turn'; @deva[मम पर्यायः] 'my turn'. Without the 'succession' meaning: @deva[कालस्य पर्ययः] 'the passing of time'.",
            "advanced": "The condition @deva[अनुपात्यये] means @deva[क्रमप्राप्तस्य अनतिपातः] 'not breaking the order of what comes in sequence'—hence 'regular turn/succession'. The contrast between @deva[पर्यायः] (with @deva[घञ्], meaning 'turn') and @deva[पर्ययः] (without @deva[घञ्], meaning 'lapse/change') shows semantic conditioning."
        }
    },
    "33039": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[शी] 'to lie down' with @deva[वि] or @deva[उप] when meaning 'turn/succession' (of sleeping). Examples: @deva[विशायः] 'turn of rest'; @deva[उपशायः] 'turn of sleeping near'. Other meanings: @deva[विशयः] 'doubt'; @deva[उपशयः] 'lying in ambush'.",
            "standard": "With @deva[वि] + @deva[शी] or @deva[उप] + @deva[शी] meaning @deva[पर्याय] (turn/succession), @deva[घञ्] applies. Thus @deva[विशायः] 'turn of sleeping/rest' (as for sentinels on watch); @deva[राजोपशायः] 'turn of sleeping near the king'. Without succession meaning: @deva[विशयः] 'doubt'; @deva[उपशयः] 'lying by the side, ambush'.",
            "advanced": "The @deva[पर्याये] condition restricts @deva[घञ्] to rotation/succession contexts. The examples @deva[तव विशायः] and @deva[राजानम् उपशयितुं पर्यायः] illustrate the rotational sense—guards taking turns to rest. Without this semantic condition, @deva[विशय] and @deva[उपशय] have entirely different meanings."
        }
    },
    "33040": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[चि] 'to gather' when meaning 'taking by hand' and NOT stealing. Examples: @deva[पुष्पप्रचायः] 'gathering flowers by hand'; @deva[फलप्रचायः] 'gathering fruits by hand'. For theft: @deva[पुष्पप्रचयश्चौर्येण].",
            "standard": "After @deva[चि] 'to gather' meaning @deva[हस्तादान] (taking by hand, implying close proximity), @deva[घञ्] applies when NOT meaning theft (@deva[अचौर्ये]). Thus @deva[पुष्पप्रचायः] 'hand-gathering of flowers'; @deva[फलप्रचायः] 'hand-gathering of fruits'. Counter-examples: using a stick (@deva[यष्टया प्रचयम्]); stealing (@deva[पुष्पप्रचयश्चौर्येण])—neither takes @deva[घञ्].",
            "advanced": "Two conditions: (1) @deva[हस्तादाने] 'taking by hand'—indicating proximity of gatherer to gathered; (2) @deva[अचौर्ये] 'not theft'. A @deva[वार्तिक] notes @deva[उच्चय] 'gathering' is also prohibited from @deva[घञ्]: hence @deva[पुष्पोच्चयः] 'flower-gathering by hand' (not *@deva[पुष्पोच्चायः])."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.31-3.3.40")
