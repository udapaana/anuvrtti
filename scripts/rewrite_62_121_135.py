#!/usr/bin/env python3
"""Rewrite commentary for 6.2.121-135 (avyayibhava, dvigu, tatpurusha accents)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62121": {
        "en": {
            "simple": "In an @deva[अव्ययीभाव] compound, seven words as second member get first-syllable accent: @deva[कूल] 'bank', @deva[तीर] 'shore', @deva[तूल] 'cotton', @deva[मूल] 'root', @deva[शाला] 'hall', @deva[अक्ष] 'eye/axle', and @deva[सम] 'even'. Examples: @deva[परिकूलम्] 'near the bank', @deva[उपतीरम्] 'at the shore', @deva[सुषमम्] 'very even'.",
            "standard": "Seven उत्तरपद receive आद्युदात्त in अव्ययीभाव compounds: @deva[कूल], @deva[तीर], @deva[तूल], @deva[मूल], @deva[शाला], @deva[अक्ष], @deva[सम]. Examples: @deva[परिकूलम्], @deva[उपकूलम्]; @deva[परितीरम्], @deva[उपतीरम्]; @deva[परितूलम्], @deva[उपतूलम्]; @deva[परिमूलम्], @deva[उपमूलम्]; @deva[परिशालम्], @deva[उपशालम्]; @deva[उपाक्षम्], @deva[पर्यक्षम्]; @deva[सुषमम्], @deva[विषमम्], @deva[निषमम्], @deva[दुःषमम्].",
            "advanced": "The enumeration covers locative अव्ययीभाव with prefixes like @deva[परि], @deva[उप], @deva[सु], @deva[वि], @deva[निस्], @deva[दुस्]. The उत्तरपद receives आद्युदात्त regardless of the prefix. Forms like @deva[सुषमम्] 'well-balanced' and @deva[विषमम्] 'uneven' show @deva[सम] with degree prefixes. This overrides the general अव्ययीभाव accent pattern."
        }
    },
    "62122": {
        "en": {
            "simple": "In a @deva[द्विगु] compound (numeral determinative), five words as second member get first-syllable accent: @deva[कंस] 'cup', @deva[मन्थ] 'churned drink', @deva[शूर्प] 'winnowing basket', @deva[पाय्य] 'milk', and @deva[काण्ड] 'section'. Examples: @deva[द्विकंसः] 'bought for two cups', @deva[त्रिमन्थः], @deva[द्विशूर्पः].",
            "standard": "In द्विगु compounds, five उत्तरपद receive आद्युदात्त: @deva[कंस], @deva[मन्थ], @deva[शूर्प], @deva[पाय्य], @deva[काण्ड]. The affix @deva[टिठन्] (@ref[5.1.25]) is elided by @ref[5.1.28] in @deva[द्विकंसः] (@deva[द्वाभ्यां] @deva[कंसाभ्यां] @deva[क्रीतः]). Similarly @deva[ठक्] (@ref[4.1.19]) is elided in @deva[द्विमन्थः]; @deva[अञ्] (@ref[5.1.26]) in @deva[द्विशूर्पः].",
            "advanced": "The द्विगु compounds here denote price or measure. Affix elision by @ref[5.1.28] removes तद्धित markers, leaving the bare compound. The numeral + measure-word pattern (@deva[द्विकंस] 'two-cups'-worth') shows the compositional semantics. Each उत्तरपद receives आद्युदात्त on its first syllable."
        }
    },
    "62123": {
        "en": {
            "simple": "The word @deva[शाला] 'hall' at the end of a @deva[तत्पुरुष] compound gets first-syllable accent when the compound is neuter. Examples: @deva[ब्राह्मणशालम्] 'brahmin hall', @deva[क्षत्रियशालम्] 'warrior hall'. The compound becomes neuter by @ref[2.4.25].",
            "standard": "In तत्पुरुष, neuter @deva[शाला] receives आद्युदात्त: @deva[ब्राह्मणशालम्], @deva[क्षत्रियशालम्]. The neuter transformation follows @ref[2.4.25]. Counterexamples: बहुव्रीहि @deva[दृढशाल] @deva[ब्राह्मणकुलम्] retains पूर्वपद accent by @ref[6.2.1]; non-@deva[शाला] words like @deva[ब्राह्मणसेनम्] don't qualify; feminine @deva[ब्राह्मणशाला] follows different accent.",
            "advanced": "Three conditions must hold: (1) तत्पुरुष समास; (2) @deva[शाला] as उत्तरपद; (3) neuter gender by @ref[2.4.25]. The बहुव्रीहि counterexample @deva[दृढशाल] shows that compound type matters—निष्ठा पूर्वपद would have अन्त्योदात्त by @ref[6.2.1]. The feminine @deva[ब्राह्मणशाला] presumably follows different accent rules."
        }
    },
    "62124": {
        "en": {
            "simple": "In a neuter @deva[तत्पुरुष] compound ending in @deva[कन्था] 'patched garment', the word @deva[कन्था] gets first-syllable accent. Examples: @deva[सौशमिकन्थम्], @deva[आह्वरकन्थम्], @deva[चप्यकन्थम्]. These are genitive compounds. Non-neuter: @deva[दाक्षिकन्था].",
            "standard": "Neuter तत्पुरुष in @deva[कन्था] receives आद्युदात्त. The word @deva[सौशमि] derives from @deva[सुशम] (one with @deva[शोभन] @deva[शम]); @deva[आह्वर] from prefix @deva[आ] + @deva[ष्ठ्वृ] + @deva[क] (@ref[3.1.136]). The neuter by @ref[3.4.20]. These are षष्ठी-तत्पुरुष (genitive compounds). When not neuter: @deva[दाक्षिकन्था].",
            "advanced": "The नपुंसक condition triggers आद्युदात्त on @deva[कन्था]. The patronymic @deva[सौशमि] (← @deva[सुशम] 'good tranquility') and verbal derivative @deva[आह्वर] (← @deva[आ] + √@deva[ह्वृ] by @ref[3.1.136]) show षष्ठी-समास semantics: 'the कन्था of X'. The neuter assignment by @ref[3.4.20] conditions the accent rule."
        }
    },
    "62125": {
        "en": {
            "simple": "In a neuter @deva[तत्पुरुष] ending in @deva[कन्था], the words @deva[चिहण] etc. (as first member) also get first-syllable accent on themselves. Examples: @deva[चिहणकन्थम्], @deva[मडरकन्थम्], @deva[मडुरकन्थम्]. Here both the first and second members have first-syllable accent.",
            "standard": "The repetition of @deva[आदि] (though already in अनुवृत्ति) indicates that the पूर्वपद @deva[चिहण] etc. also receive आद्युदात्त. The word @deva[चिहण] derives from @deva[चित्] (√@deva[चि] + @deva[क्विप्]) + @deva[हन] (@deva[अच्] by @ref[3.1.134]). Thus @deva[चिहणकन्थम्] has accent on both @deva[चि] and @deva[क].",
            "advanced": "The explicit @deva[आदि] indicates पूर्वपदाद्युदात्त in addition to उत्तरपदाद्युदात्त. The derivation @deva[चित्] + @deva[हन] (with @deva[त्] → @deva[ह्] by पूर्वसवर्ण) yields @deva[चिहण]. The compound @deva[चिहणकन्थम्] thus shows double आद्युदात्त—on पूर्वपद @deva[चि] and उत्तरपद @deva[क]—a unique pattern specified by the redundant @deva[आदि]."
        }
    },
    "62126": {
        "en": {
            "simple": "Four words at the end of a @deva[तत्पुरुष] compound get first-syllable accent when reproach is meant: @deva[चेल] 'cloth', @deva[खेट] 'grass', @deva[कटुक] 'bitter', @deva[काण्ड] 'shaft'. Examples: @deva[पुत्रचेलम्] 'son-like rag', @deva[उपानत्खेटम्] 'sandal-like grass' (weak sandals).",
            "standard": "In निन्दा (reproach) compounds, @deva[चेल], @deva[खेट], @deva[कटुक], @deva[काण्ड] receive आद्युदात्त. Examples: @deva[पुत्रचेलम्], @deva[भार्याचेलम्] (worthless like rags); @deva[उपानत्खेटम्], @deva[नगरखेटम्] (@deva[खेट] = grass, implying weakness); @deva[दधिकटुकम्] (@deva[कटुक] = unpalatable); @deva[भूतकाण्डम्], @deva[प्रजाकाण्डम्] (@deva[काण्ड] = arrow, implying harm).",
            "advanced": "The निन्दा condition creates pejorative comparisons. @deva[खेट] as 'grass' implies fragility (@deva[तृणवद्] @deva[दुर्बला] @deva[उपानत्] = sandals weak like grass). @deva[कटुक] implies unpalatability (@deva[अस्वादु]). @deva[काण्ड] as 'arrow' implies harm (@deva[शरनाम], @deva[सत्वपीडाकरम्]). These metaphorical extensions trigger the special accent."
        }
    },
    "62127": {
        "en": {
            "simple": "The word @deva[चीर] 'bark garment' at the end of a @deva[तत्पुरुष] gets first-syllable accent when comparison is meant. Examples: @deva[वस्त्रचीरम्] 'cloth like bark', @deva[पटचीरम्], @deva[कम्बलचीरम्]. Without comparison: @deva[परमचीरम्] 'excellent bark garment'.",
            "standard": "When @deva[चीर] (bark garment) is used comparatively in तत्पुरुष, it receives आद्युदात्त. The compound @deva[वस्त्रं] @deva[चीरमिव] = @deva[वस्त्रचीरम्] means 'cloth that is like चीर' (i.e., worn, tattered). Examples: @deva[पटचीरम्], @deva[कम्बलचीरम्]. The counterexample @deva[परमचीरम्] 'best bark garment' lacks the comparative sense.",
            "advanced": "The उपमान condition requires @deva[चीर] to function as the comparison standard. The उपमित तत्पुरुष @deva[वस्त्रचीरम्] (cloth resembling bark-cloth) differs from descriptive @deva[परमचीरम्] (excellent bark-cloth). The accent distinguishes comparative from attributive semantics in @deva[चीर]-final compounds."
        }
    },
    "62128": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound, the words @deva[पलल] 'meat sauce', @deva[सूप] 'soup', and @deva[शाक] 'vegetables' get first-syllable accent when the compound denotes mixing or seasoning. Examples: @deva[गुडपललम्] 'meat sauce with jaggery', @deva[घृतसूपः] 'ghee-soup', @deva[मुद्गशाकम्] 'vegetables with lentils'.",
            "standard": "When मिश्रण (mixing/seasoning) is denoted, @deva[पलल], @deva[सूप], @deva[शाक] receive आद्युदात्त. The compound @deva[गुडेन] @deva[मिश्रं] @deva[पललं] = @deva[गुडपललम्]. Compounding by @ref[2.1.35]. Examples: @deva[घृतपललम्], @deva[मूलकसूपः], @deva[घृतशाकम्]. Without mixing: @deva[परमपललम्] 'excellent meat sauce'.",
            "advanced": "The मिश्र condition specifies that the पूर्वपद denotes an ingredient mixed into the food. The compound @deva[गुडपलल] means 'पलल mixed with गुड', not 'पलल of गुड'. The compounding follows @ref[2.1.35] @deva[तृतीया] @deva[तत्कृतार्थेन] @deva[गुणवचनेन]. The counterexample @deva[परमपललम्] shows attributive (not ingredient) पूर्वपद doesn't trigger this accent."
        }
    },
    "62129": {
        "en": {
            "simple": "Four words get first-syllable accent when at the end of a @deva[तत्पुरुष] denoting a name: @deva[कूल] 'bank', @deva[सूद] 'well', @deva[स्थल] 'ground', @deva[कर्ष] 'plowing'. These are village names: @deva[दाक्षिकूलम्], @deva[देवसूदम्], @deva[दाण्डायनस्थली], @deva[दाक्षिकर्षः].",
            "standard": "In संज्ञा (name) तत्पुरुष, @deva[कूल], @deva[सूद], @deva[स्थल], @deva[कर्ष] receive आद्युदात्त. All are village names: @deva[दाक्षिकूलम्], @deva[आहकिकूलम्]; @deva[देवसूदम्], @deva[भाजीसूदम्]; @deva[दाण्डायनस्थली], @deva[माहकिस्थली] (feminine by @deva[ङीष्] @ref[4.1.42]); @deva[दाक्षिकर्षः]. Without name meaning: @deva[परमकूलम्].",
            "advanced": "The संज्ञा condition restricts this accent to proper place names (ग्रामनाम). The feminine @deva[स्थली] (← @deva[स्थल] + @deva[ङीष्] by @ref[4.1.42]) shows gender agreement in place names. The counterexample @deva[परमकूलम्] 'best bank' (descriptive, not a name) follows regular accent. The patronymic-like पूर्वपद (@deva[दाक्षि], @deva[आहकि]) suggests named locations belonging to lineages."
        }
    },
    "62130": {
        "en": {
            "simple": "The word @deva[राज्य] 'kingdom' gets first-syllable accent in a non-@deva[कर्मधारय] @deva[तत्पुरुष]. Examples: @deva[ब्राह्मणराज्यम्] 'brahmin kingdom', @deva[क्षत्रियराज्यम्] 'warrior kingdom'. In @deva[कर्मधारय]: @deva[परमराज्यम्] 'supreme kingdom'. Indeclinable-headed compounds like @deva[कुराज्यम्] 'bad kingdom' follow @ref[6.2.2].",
            "standard": "Non-कर्मधारय तत्पुरुष in @deva[राज्य] receives आद्युदात्त: @deva[ब्राह्मणराज्यम्], @deva[क्षत्रियराज्यम्]. The कर्मधारय exclusion: @deva[परमराज्यम्] takes regular accent. However, rules @ref[6.2.126]-@ref[6.2.130] are superseded by @ref[6.2.2] when अव्यय precedes: @deva[कुचेलम्], @deva[कुराज्यम्] take prefix accent.",
            "advanced": "The अकर्मधारय condition distinguishes षष्ठी-तत्पुरुष (@deva[ब्राह्मणानां] @deva[राज्यम्]) from कर्मधारय (@deva[परमं] @deva[राज्यम्]). The note about @ref[6.2.2] clarifies rule interaction: अव्यय पूर्वपद accent (@ref[6.2.2]) takes precedence over these उत्तरपद accent rules (@ref[6.2.126]-@ref[6.2.130]), yielding @deva[कुराज्यम्] with accent on @deva[कु]."
        }
    },
    "62131": {
        "en": {
            "simple": "The words @deva[वर्ग्य] etc. get first-syllable accent at the end of a non-@deva[कर्मधारय] @deva[तत्पुरुष]. Examples: @deva[वासुदेववर्ग्यः] 'of Vāsudeva's party', @deva[अर्जुनपक्ष्यः] 'of Arjuna's side'. In @deva[कर्मधारय]: @deva[परमवर्ग्यः].",
            "standard": "The वर्ग्यादि words receive आद्युदात्त in non-कर्मधारय तत्पुरुष: @deva[वासुदेववर्ग्यः], @deva[वासुदेवपक्ष्यः], @deva[अर्जुनवर्ग्यः], @deva[अर्जुनपक्ष्यः]. These derive from @deva[वर्ग], @deva[पूग], @deva[गण] etc. (दिगादि subdivision, @ref[4.3.54]) with @deva[यत्] affix. कर्मधारय counterexample: @deva[परमवर्ग्यः].",
            "advanced": "The वर्ग्यादि gaṇa includes @deva[यत्]-derived forms from group nouns: @deva[वर्ग] → @deva[वर्ग्य], @deva[पक्ष] → @deva[पक्ष्य], etc. The दिगादि reference (@ref[4.3.54]) identifies the source class. The अकर्मधारय condition parallels @ref[6.2.130], distinguishing partitive compounds (@deva[वासुदेवस्य] @deva[वर्गे]) from attributive ones."
        }
    },
    "62132": {
        "en": {
            "simple": "The word @deva[पुत्र] 'son' gets first-syllable accent when following a masculine noun in a @deva[तत्पुरुष]. Examples: @deva[कौनटिपुत्रः] 'son of Kaunaṭi', @deva[दामकपुत्रः], @deva[माहिषपुत्रः]. Not after feminine: @deva[गार्गीपुत्रः], @deva[वात्सीपुत्रः].",
            "standard": "When @deva[पुत्र] follows a पुंल्लिङ्ग (masculine) word in तत्पुरुष, it receives आद्युदात्त: @deva[कौनटिपुत्रः], @deva[दामकपुत्रः], @deva[माहिषपुत्रः]. The पुंल्लिङ्ग condition excludes feminine पूर्वपद: @deva[गार्गीपुत्रः], @deva[वात्सीपुत्रः] (sons named after mothers). Non-@deva[पुत्र] words don't qualify: @deva[कौनटिमातुलः].",
            "advanced": "The पुंल्लिङ्ग condition distinguishes patronymics (father-derived) from metronymics (mother-derived). The masculine पूर्वपद (@deva[कौनटि] from @deva[कुनट]) triggers @deva[पुत्र]-आद्युदात्त, while feminine (@deva[गार्गी], @deva[वात्सी]) yields different accent. This reflects the asymmetry in Sanskrit naming conventions."
        }
    },
    "62133": {
        "en": {
            "simple": "The word @deva[पुत्र] does not get first-syllable accent when preceded by words denoting: teachers (@deva[आचार्य]), kings (@deva[राजन्]), priests (@deva[ऋत्विज्]), wife's relatives (@deva[संयुक्त]), or blood relatives (@deva[ज्ञाति]). Also synonyms of these.",
            "standard": "Five categories block @deva[पुत्र]-आद्युदात्त: (1) @deva[आचार्य] 'teacher'; (2) @deva[राजन्] 'king'; (3) @deva[ऋत्विज्] 'priest'; (4) @deva[संयुक्त] 'wife's relatives' (like @deva[श्याल] 'brother-in-law'); (5) @deva[ज्ञाति] 'blood relatives' (through father or mother). The term @deva[आख्या] extends this to synonyms of these words.",
            "advanced": "The five exception categories reflect social relationships: गुरु (teacher), राजन् (king), याजक (priest), श्वशुराद् (affinal kin), and सगोत्र (agnates/cognates). The @deva[आख्या] provision extends the exception to synonyms (@deva[उपाध्याय] for @deva[आचार्य], etc.). This creates semantic rather than purely lexical exceptions to @ref[6.2.132]."
        }
    },
    "62134": {
        "en": {
            "simple": "The words @deva[चूर्ण] 'powder' etc. in a @deva[तत्पुरुष] get first-syllable accent when the first member is in genitive case and doesn't denote a living being. Examples: @deva[मुद्गचूर्णम्] 'lentil powder', @deva[ससूरचूर्णम्]. But @deva[मत्स्यचूर्णम्] (fish = living) and @deva[परमचूर्णम्] (not genitive) don't qualify.",
            "standard": "The चूर्णादि words receive आद्युदात्त when the पूर्वपद is षष्ठी (genitive) and अप्राणि (non-living). Examples: @deva[मुद्गचूर्णम्], @deva[ससूरचूर्णम्]. Exceptions: @deva[मत्स्यचूर्णम्] (fish is प्राणि); @deva[परमचूर्णम्] (कर्मधारय, not षष्ठी). An alternative reading: @deva[अप्राण्युपग्रहात्] where @deva[उपग्रह] is the old term for षष्ठी.",
            "advanced": "The dual condition—षष्ठी and अप्राणि—restricts this accent. The चूर्णादि gaṇa includes @deva[चूर्ण], @deva[करिव], @deva[करिप], etc. The alternative reading @deva[उपग्रह] for षष्ठी reflects older grammatical terminology. The प्राणि exception (@deva[मत्स्यचूर्ण]) shows that animate-source compounds follow different accent."
        }
    },
    "62135": {
        "en": {
            "simple": "Six words from earlier sūtras—@deva[काण्ड], @deva[चीर], @deva[पलल], @deva[सूप], @deva[शाक], @deva[कूल]—also get first-syllable accent when preceded by a non-living genitive. Examples: @deva[दर्भकाण्डम्] 'darbha grass section', @deva[दर्भचीरम्] 'darbha bark cloth', @deva[तिलपललम्] 'sesame sauce'.",
            "standard": "This extends @ref[6.2.126]-@ref[6.2.129] to अप्राणि षष्ठी contexts. The six words @deva[काण्ड], @deva[चीर], @deva[पलल], @deva[सूप], @deva[शाक], @deva[कूल] receive आद्युदात्त when preceded by non-living genitives. Examples: @deva[दर्भकाण्डम्], @deva[शरकाण्डम्]; @deva[दर्भचीरम्], @deva[कुशचीरम्]. Note: @deva[चीर] here is not comparative (@ref[6.2.127]), and @deva[पलल]/सूप/@deva[शाक] don't denote mixing (@ref[6.2.128]).",
            "advanced": "This sūtra creates a parallel triggering condition (अप्राणि षष्ठी) for words already covered under other conditions (निन्दा, उपमान, मिश्र, संज्ञा). The examples @deva[दर्भचीर] (darbha-bark cloth) and @deva[तिलपलल] (sesame-sauce) show षष्ठी semantics without the specialized meanings of @ref[6.2.126]-@ref[6.2.129]. This extends the आद्युदात्त pattern to straightforward genitive compounds."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.121-6.2.135)")
