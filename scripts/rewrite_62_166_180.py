#!/usr/bin/env python3
"""Rewrite commentary for 6.2.166-180 (bahuvrihi accent, nan/su compounds, body parts)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62166": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound ending in @deva[अन्तर] 'interval', the compound gets final-syllable accent when the first word means 'that which lies between'. Examples: @deva[वस्त्रान्तरम्] 'through an intervening cloth', @deva[पटान्तरम्] 'through an intervening curtain'. Without intervening meaning: @deva[आत्मान्तरम्] 'having a different nature'.",
            "standard": "When @deva[अन्तर] means 'intervening/separating' in बहुव्रीहि, अन्त्योदात्त applies: @deva[वस्त्रान्तरम्] (@deva[वस्त्रम्] @deva[अन्तरं] @deva[व्यवधायकं] @deva[यस्य]), @deva[पटान्तरम्], @deva[कम्बलान्तरम्]. The पूर्वपद denotes what lies between. Counterexample: @deva[आत्मान्तरम्] 'having a different self/nature' (where @deva[अन्तर] = 'other') doesn't qualify.",
            "advanced": "The व्यवधान (interposition) condition restricts अन्त्योदात्त to compounds where @deva[अन्तर] means 'intervening space' filled by the पूर्वपद. The counterexample @deva[आत्मान्तर] (@deva[आत्मा] @deva[स्वभावः] @deva[अन्तरः] @deva[अन्यः] @deva[यस्य]) shows @deva[अन्तर] = 'other' yields different accent. The semantic distinction is crucial."
        }
    },
    "62167": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, the word @deva[मुख] 'mouth/face' gets final-syllable accent when it means the actual body part, not metaphorically. Examples: @deva[गौरमुखः] 'fair-faced', @deva[भद्रमुखः] 'auspicious-faced'. Metaphorical: @deva[दीर्घमुखा] @deva[शाला] 'hall with long entrance' (where मुख = door).",
            "standard": "When @deva[मुख] denotes स्वाङ्ग (actual body part) in बहुव्रीहि, अन्त्योदात्त applies: @deva[गौरमुखः], @deva[भद्रमुखः]. The स्वाङ्ग condition (@ref[3.4.54]) means 'non-liquid substance actually found in living beings'. Counterexample: @deva[दीर्घमुखा] @deva[शाला] where @deva[मुख] means 'entrance/door' metaphorically.",
            "advanced": "The स्वाङ्ग condition (defined at @ref[3.4.54]) distinguishes literal body-part usage from metaphorical extensions. The @deva[मुख] 'entrance' meaning (अङ्गभूत but not स्वाङ्ग) doesn't trigger this अन्त्योदात्त. This semantic restriction parallels other body-part accent rules in compound formation."
        }
    },
    "62168": {
        "en": {
            "simple": "The final-syllable accent on @deva[मुख] 'mouth' (from @ref[6.2.167]) doesn't apply after: indeclinables, direction words, or the words @deva[गो], @deva[महत्], @deva[स्थूल], @deva[मुष्टि], @deva[पृथु], @deva[वत्स]. Examples: @deva[उच्चैर्मुखः] (with indeclinable @deva[उच्चैः]), @deva[प्राङ्मुखः] (with direction @deva[प्राच्]), @deva[गोमुखः], @deva[महामुखः].",
            "standard": "This sūtra blocks @ref[6.2.167]'s अन्त्योदात्त. After अव्यय: @deva[उच्चैर्मुखः], @deva[नीचैर्मुखः] (retain अव्यय's final accent). After दिश्: @deva[प्राङ्मुखः], @deva[प्रत्यङ्मुखः] (@deva[प्राङ्] has आद्युदात्त by @ref[6.2.52]). After the six listed words: @deva[गोमुखः], @deva[महामुखः], @deva[स्थूलमुखः], @deva[मुष्टिमुखः], @deva[पृथुमुखः], @deva[वत्समुखः].",
            "advanced": "Three exception categories: (1) अव्यय-पूर्वपद retaining its accent; (2) दिक्-शब्द with their inherent accent patterns; (3) the six enumerated words. The direction words follow @ref[6.2.52] etc. for their accent. The गवादि list (@deva[गो], @deva[महत्], @deva[स्थूल], @deva[मुष्टि], @deva[पृथु], @deva[वत्स]) blocks @deva[मुख]-अन्त्योदात्त specifically."
        }
    },
    "62169": {
        "en": {
            "simple": "The word @deva[मुख] 'mouth' (as body part) optionally gets final-syllable accent when preceded by a @deva[क्त]-participle or a comparison word. Example: @deva[प्रक्षालितमुखः] 'washed-face' can have three accents: on @deva[ख], on @deva[त], or on @deva[प्र].",
            "standard": "Optional अन्त्योदात्त on स्वाङ्ग @deva[मुख] after निष्ठा or उपमान. Three options for @deva[प्रक्षालितमुखः]: (1) अन्त्योदात्त by this rule; (2) पूर्वपदान्त्योदात्त by @ref[6.2.110]; (3) गति-accent on @deva[प्र] by @ref[6.2.49]/@ref[6.2.1]. The alternation reflects acceptable variant pronunciations.",
            "advanced": "The विभाषा creates three-way alternation: (1) @deva[प्रक्षालितमुखः] (उत्तरपदान्त्योदात्त by this rule); (2) @deva[प्रक्षालितमुखः] (पूर्वपदान्त्योदात्त by @ref[6.2.110]); (3) @deva[प्रक्षालितमुखः] (गति-accent by @ref[6.2.49] + @ref[6.2.1]). The उपमान condition handles comparison compounds parallel to निष्ठा-पूर्वपद."
        }
    },
    "62170": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि], @deva[क्त]-participles get final-syllable accent after species words (except garment words), time words, or @deva[सुख] etc.—but not @deva[कृत], @deva[मित], @deva[प्रतिपन्न]. Examples: @deva[सारङ्गजग्धः] 'eaten by deer', @deva[मासजातः] 'born in a month', @deva[सुखजातः] 'born in pleasure'.",
            "standard": "Three पूर्वपद categories trigger अन्त्योदात्त on निष्ठा: (1) जाति 'species' (not वस्त्र 'garment'): @deva[सारङ्गजग्धः], @deva[पलाण्डुभक्षितः], @deva[सुरापीतः]; (2) काल 'time': @deva[मासजातः], @deva[संवत्सरजातः], @deva[द्व्यहजातः]; (3) सुखादि: @deva[सुखजातः], @deva[दुःखजातः], @deva[तृप्तजातः]. Exceptions: @deva[कृत], @deva[मित], @deva[प्रतिपन्न] don't take this accent.",
            "advanced": "The triple condition—जाति (excluding वस्त्र), काल, सुखादि—defines contexts for निष्ठा-अन्त्योदात्त. The वस्त्र exception may relate to metaphorical usage. The कृत/मित/प्रतिपन्न exceptions suggest specific semantic or morphological considerations blocking the general rule. The सुखादि forms a lexical class."
        }
    },
    "62171": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि], the word @deva[जात] 'born' optionally gets final-syllable accent after species words (except garments), time words, or @deva[सुख] etc. Examples: @deva[दन्तजातः] or @deva[दन्तजातः] 'having teeth born', @deva[मासजातः] or @deva[मासजातः], @deva[सुखजातः] or @deva[सुखजातः].",
            "standard": "Optional अन्त्योदात्त for @deva[जात] after जाति/काल/सुखादि. Alternations: @deva[दन्तजातः] or @deva[दन्तजातः] (Phiṭ II.6 आद्युदात्त); @deva[स्तनजातः] or @deva[स्तनजातः]; @deva[मासजातः] or @deva[मासजातः] (@deva[मास] first-acute by Uṇādi); @deva[संवत्सरजातः] or @deva[संवत्सरजातः]; @deva[सुखजातः] or @deva[सुखजातः]; @deva[दुःखजातः] or @deva[दुःखजातः].",
            "advanced": "This विभाषा specifically for @deva[जात] (not other निष्ठा forms) creates option with the general बहुव्रीहि accent. Words like @deva[दन्त], @deva[स्तन] (Phiṭ II.6), @deva[मास] (Uṇādi-formed) have inherent आद्युदात्त, which the alternative option preserves. The optionality may reflect dialectal or stylistic variation."
        }
    },
    "62172": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound formed with @deva[नञ्] 'not' or @deva[सु] 'good', the final syllable of the entire compound gets acute accent. Examples: @deva[अयवः] 'barley-less (land)', @deva[अव्रीहिः] 'rice-less', @deva[सुयवः] 'good-barleyed', @deva[सुव्रीहिः] 'good-riced'.",
            "standard": "In नञ्/सु बहुव्रीहि, अन्त्योदात्त falls on the final syllable of the complete compound (including समासान्त affixes). Examples: @deva[अयवो] @deva[देशः], @deva[अव्रीहिः], @deva[अमाषः], @deva[सुयवः], @deva[सुव्रीहिः], @deva[सुमाषः]. With समासान्त @deva[अ] (@ref[5.4.74]): @deva[अनृचः]. The accent applies to the fully formed compound.",
            "advanced": "The phrase समासस्य indicates accent on the complete compound including समासान्त affixes. Thus @deva[अनृच] (with @deva[अ] by @ref[5.4.74]) takes accent on final @deva[च], not on the underlying stem. Though both @deva[समास] and @deva[उत्तरपद] are in अनुवृत्ति, this rule specifies compound-final accent, distinct from उत्तरपद-final accent."
        }
    },
    "62173": {
        "en": {
            "simple": "In a @deva[नञ्]/सु] @deva[बहुव्रीहि] ending in @deva[कप्] affix (by @ref[5.4.153]), the accent falls on the syllable before @deva[कप्], not on @deva[कप्] itself. Examples: @deva[अकुमारीकः] 'having no maiden', @deva[अवृषलीकः], @deva[सुकुमारीकः], @deva[सुवृषलीकः].",
            "standard": "When समासान्त @deva[कप्] (@ref[5.4.153] @deva[नद्यृतश्च]) is added to नञ्/सु बहुव्रीहि, accent shifts to the syllable before @deva[कप्] (overriding @ref[6.2.172]). Examples: @deva[अकुमारीको] @deva[देशः], @deva[अवृषलीकः], @deva[अब्रह्मबन्धूकः], @deva[सुकुमारीकः], @deva[सुवृषलीकः], @deva[सुब्रह्मबन्धूकः].",
            "advanced": "The @deva[कप्]-प्राक् condition creates an exception to @ref[6.2.172]. Instead of compound-final accent on @deva[क], accent falls on the vowel immediately before @deva[कप्]. This reflects the affix's secondary nature—it's added for compound formation (@ref[5.4.153]) and doesn't bear primary accent."
        }
    },
    "62174": {
        "en": {
            "simple": "When a @deva[नञ्]/सु] @deva[बहुव्रीहि] with @deva[कप्] affix ends in a light vowel, the accent falls on the syllable before that light syllable. Examples: @deva[अयवकः] 'barley-less', @deva[अव्रीहिकः] 'rice-less', @deva[सुयवकः], @deva[सुव्रीहिकः].",
            "standard": "When the उत्तरपद ends in लघ्वच् (light vowel) and @deva[कप्] is added, accent falls on the second-to-last syllable (before the light vowel). Examples: @deva[अयवको] @deva[देशः], @deva[अव्रीहिकः], @deva[अमाषकः], @deva[सुयवकः], @deva[सुव्रीहिकः], @deva[सुमाषकः]. The repeated @deva[पूर्व] indicates: in @ref[6.2.173], 'before @deva[कप्]'; here, 'before the light vowel before @deva[कप्]'.",
            "advanced": "The repetition of @deva[पूर्व] clarifies the accent shift. In @ref[6.2.173], @deva[पूर्व] meant 'before @deva[कप्]' (on गुरु syllables). Here, लघ्वच् condition pushes accent one syllable further back. Thus @deva[अयवक] has accent on @deva[य] (before the light @deva[व]), while @deva[अकुमारीक] (@ref[6.2.173]) has accent on @deva[री] (before @deva[क])."
        }
    },
    "62175": {
        "en": {
            "simple": "A @deva[बहुव्रीहि] with @deva[बहु] 'many' follows the same accent rules as @deva[नञ्] compounds when it means abundance of what the second member denotes. Examples: @deva[बहुयवा] @deva[देशः] 'land with much barley' (like @deva[अयवः]), @deva[बहुव्रीहिः] 'much rice', @deva[बहुयवकः] (like @deva[अयवकः]).",
            "standard": "When @deva[बहु]-पूर्व बहुव्रीहि denotes प्राचुर्य (abundance) of the उत्तरपद, it follows नञ्-compound accent rules (@ref[6.2.172] etc.). Thus @deva[बहुयवा] @deva[देशः], @deva[बहुव्रीहिः], @deva[बहुतिलः] (like @ref[6.2.172]); @deva[बहुयवकः], @deva[बहुव्रीहिकः], @deva[बहुमाषकः] (like @ref[6.2.174]).",
            "advanced": "The प्राचुर्य condition equates @deva[बहु] semantically with नञ् for accent purposes—both quantify the उत्तरपद referent. Thus @deva[बहुयव] 'having much barley' parallels @deva[अयव] 'having no barley' in accent treatment. All rules applicable to नञ्/सु compounds (@ref[6.2.172]-@ref[6.2.174] etc.) apply to @deva[बहु] under this condition."
        }
    },
    "62176": {
        "en": {
            "simple": "In a @deva[बहु]-initial @deva[बहुव्रीहि], words like @deva[गुण] 'strand', @deva[अक्षर] 'syllable', @deva[अध्याय] 'chapter' don't get final accent when they denote parts/ingredients. Examples: @deva[बहुगुणाः] @deva[रज्जुः] 'rope of many strands', @deva[बह्वक्षरं] @deva[पदम्] 'word of many syllables'. But @deva[बहुगुणः] @deva[ब्राह्मणः] 'brahmin of many qualities' takes final accent.",
            "standard": "The गुणादि gaṇa doesn't take अन्त्योदात्त after @deva[बहु] when denoting अवयव (component parts). Examples: @deva[बहुगुणाः] @deva[रज्जुः] (strands as rope parts), @deva[बह्वक्षरं] @deva[पदम्] (syllables as word parts), @deva[बहुच्छन्दोमानम्], @deva[बह्वध्यायः]. This is an आकृतिगण. Counterexample: @deva[बहुगुणो] @deva[ब्राह्मणः] (qualities, not parts) takes final accent.",
            "advanced": "The अवयव condition distinguishes parts from qualities. गुण as 'strand' (rope component) differs from गुण as 'quality' (brahmin attribute). The आकृतिगण includes @deva[गुण], @deva[अक्षर], @deva[अध्याय], @deva[सूक्त], @deva[छन्दोमान]—all denoting compositional units. When these denote ingredients/parts, they follow @ref[6.2.1] instead of @ref[6.2.175]."
        }
    },
    "62177": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि], constant body parts (except @deva[पर्शु] 'rib') get final-syllable accent after a preposition. Examples: @deva[प्रपृष्ठः] 'one whose back extends forward', @deva[प्रोदरः] 'protruding belly', @deva[प्रललाटः] 'prominent forehead'. Non-constant: @deva[उद्बाहुः] 'raised arm' doesn't qualify.",
            "standard": "After उपसर्ग, ध्रुव स्वाङ्ग (constant body parts) receive अन्त्योदात्त, except @deva[पर्शु]. Examples: @deva[प्रपृष्ठः] (@deva[सततं] @deva[यस्य] @deva[प्रगतं] @deva[पृष्ठं]), @deva[प्रोदरः], @deva[प्रललाटः]. Counterexamples: @deva[दर्शनीयललाटः] (no उपसर्ग); @deva[प्रशाखो] @deva[वृक्षः] (not body part); @deva[उद्बाहुः] @deva[क्रोशति] (arm not constant—raised only sometimes).",
            "advanced": "The ध्रुव condition distinguishes permanent body parts from temporarily positioned ones. Arms can be raised/lowered (अध्रुव), but back, belly, forehead are constant (ध्रुव). The @deva[पर्शु]-exception and the उपसर्ग condition limit the rule's scope. Non-body parts (@deva[शाखा] 'branch') and non-prefixed compounds don't qualify."
        }
    },
    "62178": {
        "en": {
            "simple": "After a preposition, the word @deva[वन] 'forest' gets final-syllable accent in all compound types. Examples: @deva[प्रवणे] @deva[यष्टव्यम्] 'sacrifice is to be performed in the forest', @deva[निर्वणे] 'outside the forest'. The @deva[न] becomes @deva[ण] by @ref[8.4.5].",
            "standard": "The word @deva[वन] receives अन्त्योदात्त after उपसर्ग in all समास types (not just बहुव्रीहि). Examples: @deva[प्रवणे] @deva[यष्टव्यम्], @deva[निर्वणे] @deva[प्रणिधीयते]. The @deva[न] → @deva[ण] change follows @ref[8.4.5]. The word @deva[समास] in the sūtra indicates all compound types, overriding the बहुव्रीहि अधिकार.",
            "advanced": "The explicit @deva[समासे] extends this rule beyond बहुव्रीहि (the current अधिकार context) to all compound types—अव्ययीभाव, तत्पुरुष, etc. The रेफ of @deva[प्र]/निर्] triggers णत्व by @ref[8.4.5]. This generalization across compound types is unusual and explicitly marked."
        }
    },
    "62179": {
        "en": {
            "simple": "After @deva[अन्तर्] 'within', the word @deva[वन] 'forest' gets final-syllable accent. Example: @deva[अन्तर्वणः] @deva[देशः] 'land within the forest'. This extends @ref[6.2.178] to the non-prefix word @deva[अन्तर्].",
            "standard": "This sūtra extends अन्त्योदात्त on @deva[वन] to @deva[अन्तर्]-पूर्वपद: @deva[अन्तर्वणो] @deva[देशः]. Since @deva[अन्तर्] is not an उपसर्ग (preposition), @ref[6.2.178] wouldn't apply. This rule ensures @deva[वन] takes final accent even when the पूर्वपद is the non-prefix @deva[अन्तर्].",
            "advanced": "The sūtra is necessary because @deva[अन्तर्] is not technically an उपसर्ग (verbal prefix) but an अव्यय. Thus @ref[6.2.178]'s उपसर्गात् condition wouldn't cover @deva[अन्तर्वण]. This explicit extension shows the desired pattern extends beyond strict prefixes to semantically similar indeclinables."
        }
    },
    "62180": {
        "en": {
            "simple": "The word @deva[अन्तर्] 'within/between' gets final-syllable accent when preceded by a preposition. Examples: @deva[प्रान्तः] 'edge/border', @deva[पर्यन्तः] 'surrounding'. These can be @deva[बहुव्रीहि] or @deva[प्रादि] compounds.",
            "standard": "When @deva[अन्तर्] follows an उपसर्ग, it receives अन्त्योदात्त: @deva[प्रान्तः], @deva[पर्यन्तः]. These formations may be बहुव्रीहि ('having its end near') or प्रादिसमास (prefix compound). The accent falls on the final syllable of @deva[अन्तर्].",
            "advanced": "The उपसर्ग + @deva[अन्तर्] pattern yields अन्त्योदात्त. The compound interpretation varies: बहुव्रीहि @deva[प्रान्त] = 'having end near/prominent'; प्रादिसमास treats the whole as a unit. Both yield the same accent by this rule. This complements @ref[6.2.179]'s treatment of @deva[अन्तर्] as पूर्वपद."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.166-6.2.180)")
