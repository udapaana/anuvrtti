# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32143": {
        "en": {
            "simple": "The affix @deva[घिनुण्] comes after @deva[कष्] 'injure', @deva[लस्] 'embrace/sport', @deva[कत्थ्] 'praise', and @deva[स्रम्भ्] 'believe' when compounded with @deva[वि]. Examples: @deva[विकाषी] 'injuring', @deva[विलासी] 'sportive/sensualist', @deva[विकत्थी] 'vaunting', @deva[विस्रम्भी] 'confiding'.",
            "standard": "The affix @deva[घिनुण्] follows @deva[कष्], @deva[लस्], @deva[कत्थ्], @deva[स्रम्भ्] when compounded with @deva[वि] for @deva[तच्छीलादि]. Examples: @deva[विकाषी] 'injuring'; @deva[विलासी] 'sportive'; @deva[विकत्थी] 'vaunting'; @deva[विस्रम्भी] 'confiding'.",
            "advanced": "@deva[घिनुण्] follows @deva[कष्]/लस्/कत्थ्/स्रम्भ् + @deva[वि] for @deva[तच्छीलादि]. Examples: @deva[विकाषी], @deva[विलासी], @deva[विकत्थी], @deva[विस्रम्भी]."
        }
    },
    "32144": {
        "en": {
            "simple": "The affix @deva[घिनुण्] comes after @deva[लष्] 'to wish' when compounded with @deva[अप] or @deva[वि]. Examples: @deva[अपलाषी] 'thirsty', @deva[विलाषी]. The @deva[च] ('and') brings in @deva[वि] from the previous sūtra.",
            "standard": "The affix @deva[घिनुण्] follows @deva[लष्] 'to wish' when compounded with @deva[अप] or @deva[वि] for @deva[तच्छीलादि]. The @deva[च] brings @deva[वि] from the previous sūtra. Examples: @deva[अपलाषी] 'thirsty'; @deva[विलाषी].",
            "advanced": "@deva[घिनुण्] follows @deva[लष्] + @deva[अप]/वि for @deva[तच्छीलादि]. @deva[वि] is @deva[अनुवृत्त] via @deva[च]. Examples: @deva[अपलाषी], @deva[विलाषी]."
        }
    },
    "32145": {
        "en": {
            "simple": "The affix @deva[घिनुण्] comes after @deva[लप्] 'prattle', @deva[सृ] 'flow', @deva[द्रु] 'run', @deva[मथ्] 'churn', @deva[वद्] 'speak', @deva[वस्] 'dwell' when compounded with @deva[प्र]. Examples: @deva[प्रलापी] 'prattling', @deva[प्रसारी] 'extending', @deva[प्रद्रावी] 'fugitive', @deva[प्रमाथी] 'tormenting', @deva[प्रवादी] 'reporting', @deva[प्रवासी] 'traveler'. @deva[वस्] here is @deva[भ्वादि] 'to dwell', not @deva[अदादि] 'to cover'.",
            "standard": "The affix @deva[घिनुण्] follows @deva[लप्], @deva[सृ], @deva[द्रु], @deva[मथ्], @deva[वद्], @deva[वस्] when compounded with @deva[प्र] for @deva[तच्छीलादि]. Examples: @deva[प्रलापी] 'prattling'; @deva[प्रसारी] 'extending'; @deva[प्रद्रावी] 'fugitive'; @deva[प्रमाथी] 'tormenting'; @deva[प्रवादी] 'reporting'; @deva[प्रवासी] 'traveler'. @deva[वस्] is @deva[भ्वादि] 'to dwell' (not @deva[अदादि] 'to cover' with @deva[विकरणलोप]).",
            "advanced": "@deva[घिनुण्] follows @deva[लप्]/सृ/द्रु/मथ्/वद्/वस् + @deva[प्र] for @deva[तच्छीलादि]. Examples: @deva[प्रलापी], @deva[प्रसारी], @deva[प्रद्रावी], @deva[प्रमाथी], @deva[प्रवादी], @deva[प्रवासी]. @deva[वस्] = @deva[भ्वादि] 'निवासे' (not @deva[अदादि] 'आच्छादने' with @deva[विकरणलोप])."
        }
    },
    "32146": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes after @deva[निन्द्], @deva[हिंस्], @deva[क्लिश्], @deva[खाद्], @deva[विनश्], @deva[परिक्षिप्], @deva[परिरट्], @deva[व्याभाष्], and @deva[असूय्] for 'agent with habit etc.' Examples: @deva[निन्दकः] 'blaming', @deva[हिंसकः] 'injuring', @deva[क्लेशकः] 'troublesome', @deva[खादकः] 'eating', @deva[विनाशकः] 'destroying', @deva[परिक्षेपकः] 'surrounding', @deva[परिराटकः] 'crying aloud', @deva[व्याभाषकः] 'detracting', @deva[असूयकः] 'envying'. The separate mention (when @deva[ण्वुल्] from @ref[3.1.133] would give same form) indicates that @ref[3.1.94] doesn't apply to @deva[तच्छीलादि] affixes.",
            "standard": "The affix @deva[वुञ्] follows @deva[निन्द्], @deva[हिंस्], @deva[क्लिश्], @deva[खाद्], @deva[विनश्], @deva[परिक्षिप्], @deva[परिरट्], @deva[व्याभाष्], @deva[असूय्] for @deva[तच्छीलादि]. Examples: @deva[निन्दकः] (@ref[7.1.1]); @deva[हिंसकः]; @deva[क्लेशकः]; @deva[खादकः]; @deva[विनाशकः]; @deva[परिक्षेपकः]; @deva[परिराटकः]; @deva[व्याभाषकः]; @deva[असूयकः]. The @deva[पृथगुपदेश] (though @deva[ण्वुल्] @ref[3.1.133] gives same form) indicates the @deva[परिभाषा]: @ref[3.1.94] (@deva[वासरूप]) doesn't apply to @deva[तच्छीलादि] affixes (@ref[3.2.134]-@ref[3.2.177]). Hence @deva[तृच्] etc. are not added for @deva[तच्छील].",
            "advanced": "@deva[वुञ्] follows @deva[निन्द्]/हिंस्/क्लिश्/खाद्/विनश्/परिक्षिप्/परिरट्/व्याभाष्/असूय् for @deva[तच्छीलादि]. Examples: @deva[निन्दकः], @deva[हिंसकः], @deva[क्लेशकः], @deva[खादकः], @deva[विनाशकः], @deva[परिक्षेपकः], @deva[परिराटकः], @deva[व्याभाषकः], @deva[असूयकः]. The @deva[पृथगुपदेश] (despite @deva[ण्वुल्] @ref[3.1.133] yielding same form) is @deva[ज्ञापक] for @deva[परिभाषा]: @ref[3.1.94] (@deva[वासरूप] where @deva[अपवाद] differs from @deva[उत्सर्ग]) doesn't concern @deva[तच्छीलादि] affixes. Hence @deva[तृच्] etc. don't apply for @deva[तच्छील]."
        }
    },
    "32147": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes after @deva[देव्] 'lament' and @deva[क्रुश्] 'cry' when an upasarga is in composition. Examples: @deva[आदेवकः] 'one who laments', @deva[आक्रोशकः] 'reviler', @deva[परिदेवकः] 'lamenter', @deva[परिक्रोशकः] 'reviler'. Without upasarga: @deva[देवयिता], @deva[क्रोष्टा] (formed by @deva[तृन्] @ref[3.2.135]).",
            "standard": "The affix @deva[वुञ्] follows @deva[देवि] 'to lament' and @deva[क्रुश्] 'to cry' when an @deva[उपसर्ग] is in composition for @deva[तच्छीलादि]. Examples: @deva[आदेवकः]; @deva[आक्रोशकः] 'reviler'; @deva[परिदेवकः]; @deva[परिक्रोशकः]. Without @deva[उपसर्ग]: @deva[देवयिता], @deva[क्रोष्टा] (by @deva[तृन्] @ref[3.2.135]).",
            "advanced": "@deva[वुञ्] follows @deva[देवि]/क्रुश् + @deva[उपसर्ग] for @deva[तच्छीलादि]. Examples: @deva[आदेवकः], @deva[आक्रोशकः], @deva[परिदेवकः], @deva[परिक्रोशकः]. @deva[निरुपसर्ग]: @deva[देवयिता], @deva[क्रोष्टा] (@deva[तृन्])."
        }
    },
    "32148": {
        "en": {
            "simple": "The affix @deva[युच्] comes after **intransitive** verbs meaning 'motion' or 'sound' for 'agent with habit etc.' Examples: @deva[चलनः] 'moving' (@ref[7.1.1]), @deva[चोपनः] 'creeping', @deva[शब्दनः] 'sounding', @deva[रवणः] 'roaring'. Not for transitive: @deva[पठिता विद्याम्].",
            "standard": "The affix @deva[युच्] follows @deva[अकर्मक] (intransitive) verbs denoting @deva[गति] (motion) or @deva[शब्द] (sound) for @deva[तच्छीलादि]. Examples: @deva[चल्] + @deva[युच्] = @deva[चलनः] (@ref[7.1.1]) 'moving'; @deva[चोपनः] 'creeping'; @deva[शब्दनः] 'sounding'; @deva[रवणः] 'roaring'. Not for @deva[सकर्मक]: @deva[पठिता विद्याम्].",
            "advanced": "@deva[युच्] follows @deva[अकर्मक] @deva[गत्यर्थ]/शब्दार्थ @deva[धातु]s for @deva[तच्छीलादि]. Examples: @deva[चलनः] (@ref[7.1.1]), @deva[चोपनः], @deva[शब्दनः], @deva[रवणः]. @deva[सकर्मक] excluded: @deva[पठिता विद्याम्]."
        }
    },
    "32149": {
        "en": {
            "simple": "The affix @deva[युच्] comes after **intransitive**, **Ātmanepadi**, consonant-initial verbs that have @deva[अनुदात्त] (grave accent) as indicatory for 'agent with habit etc.' Examples: @deva[वर्तनः] 'existing', @deva[वर्धनः] 'growing'. Not @deva[अनुदात्तेत्]: @deva[भविता]. Not consonant-initial: @deva[एधिता] (takes @deva[तृन्]). The term @deva[आदि] ensures verbs like @deva[जुगुप्सनः], @deva[मीमांसनः] are included. Transitive excluded: @deva[वसिता वस्त्रम्].",
            "standard": "The affix @deva[युच्] follows @deva[अकर्मक], @deva[आत्मनेपदिन्], @deva[हलादि] (consonant-initial), @deva[अनुदात्तेत्] verbs for @deva[तच्छीलादि]. Examples: @deva[वर्तनः] 'existing'; @deva[वर्धनः] 'growing'. Not @deva[अनुदात्तेत्]: @deva[भविता]. Not @deva[हलादि]: @deva[एधिता] (takes @deva[तृन्]). The @deva[आदि] ensures words like @deva[जुगुप्सनः], @deva[मीमांसनः] (vowel-ending stems) are included—without @deva[आदि], @deva[हलः] would mean 'ending in consonant'. @deva[सकर्मक] excluded: @deva[वसिता वस्त्रम्].",
            "advanced": "@deva[युच्] follows @deva[अकर्मक], @deva[आत्मनेपदिन्], @deva[हलादि], @deva[अनुदात्तेत्] @deva[धातु]s for @deva[तच्छीलादि]. Examples: @deva[वर्तनः], @deva[वर्धनः]. Not @deva[अनुदात्तेत्]: @deva[भविता]. Not @deva[हलादि]: @deva[एधिता] (@deva[तृन्]). The @deva[आदि] prevents @deva[हलः] meaning @deva[हलन्त] (@ref[1.1.72])—thus @deva[जुगुप्सनः], @deva[मीमांसनः] (vowel-final @deva[धातु]s) included. @deva[सकर्मक] excluded: @deva[वसिता वस्त्रम्]."
        }
    },
    "32150": {
        "en": {
            "simple": "The affix @deva[युच्] comes after @deva[जु] 'go/be quick', @deva[चङ्क्रम्य] 'walk about', @deva[दन्द्रम्य] 'wander', @deva[सृ] 'flow', @deva[गृध्] 'be greedy', @deva[ज्वल्] 'burn', @deva[शुच्] 'grieve', @deva[लष्] 'desire', @deva[पत्] 'fall', @deva[पद्] 'move' for 'agent with habit etc.' Examples: @deva[जवनः] 'swift horse' (@ref[7.1.1], @ref[7.3.84], @ref[6.1.78]), @deva[चङ्क्रमणः] 'moving about' (@ref[2.4.74]), @deva[सरणः] 'flowing', @deva[गर्धनः] 'greedy', @deva[ज्वलनः] 'burning', @deva[शोचनः] 'grieving', @deva[लषणः] 'desiring', @deva[पतनः] 'falling', @deva[पदनः] 'moving'. @deva[जु] is a @deva[सौत्र धातु] (not in Dhātupāṭha).",
            "standard": "The affix @deva[युच्] follows @deva[जु], @deva[चङ्क्रम्य], @deva[दन्द्रम्य], @deva[सृ], @deva[गृध्], @deva[ज्वल्], @deva[शुच्], @deva[लष्], @deva[पत्], @deva[पद्] for @deva[तच्छीलादि]. @deva[जु] is @deva[सौत्र] (from sūtra, not Dhātupāṭha). Examples: @deva[जु] + @deva[युच्] = @deva[जो] + @deva[अन] (@ref[7.1.1], @ref[7.3.84]) = @deva[जवनः] (@ref[6.1.78]) 'swift'; @deva[चङ्क्रम्य] + @deva[युच्] = @deva[चङ्क्रमणः] (@ref[2.4.74]); @deva[दन्द्रमणः]; @deva[सरणः]; @deva[गर्धनः]; @deva[ज्वलनः]; @deva[शोचनः]; @deva[लषणः]; @deva[पतनः]; @deva[पदनः]. The inclusion of @deva[पद्] (a @deva[चलनार्थ] verb already covered by @ref[3.2.148]) indicates @deva[सकर्मक] verbs too, or serves as @deva[ज्ञापक] for the @deva[परिभाषा] (@ref[3.2.146]).",
            "advanced": "@deva[युच्] follows @deva[जु]/चङ्क्रम्य/दन्द्रम्य/सृ/गृध्/ज्वल्/शुच्/लष्/पत्/पद् for @deva[तच्छीलादि]. @deva[जु] = @deva[सौत्र धातु]. @deva[प्रक्रिया]: @deva[जु] + @deva[युच्] → @deva[जो] + @deva[अन] (@ref[7.1.1], @ref[7.3.84]) → @deva[जवनः] (@ref[6.1.78], @ref[2.3.46]); @deva[चङ्क्रम्य] + @deva[युच्] → @deva[चङ्क्रमणः] (@ref[2.4.74] @deva[यलोप]). @deva[पद्] inclusion (already @deva[चलनार्थ] per @ref[3.2.148]) indicates either @deva[सकर्मक] extension or @deva[ज्ञापक] for @ref[3.2.146] @deva[परिभाषा]. The @deva[ज्ञापक] is not universal: @deva[गन्ता खेटं विकत्थनः] shows concurrent affixes."
        }
    },
    "32151": {
        "en": {
            "simple": "The affix @deva[युच्] also comes after verbs meaning @deva[क्रुध्] 'be angry' and @deva[मण्ड्] 'adorn' for 'agent with habit etc.' Examples: @deva[क्रोधनः] 'wrathful', @deva[रोषणः] 'irascible', @deva[मण्डनः] 'adorning', @deva[भूषणः] 'ornament'. But not after @deva[अलंकृ], which takes @deva[इष्णुच्] by @ref[3.2.136].",
            "standard": "The affix @deva[युच्] also follows verbs with @deva[क्रुध्]-meaning 'to be angry' and @deva[मण्ड्]-meaning 'to adorn' for @deva[तच्छीलादि]. The @deva[च] indicates addition. Examples: @deva[क्रोधनः] 'wrathful'; @deva[रोषणः] 'irascible'; @deva[मण्डनः] 'adorning'; @deva[भूषणः] 'ornament'. Not after @deva[अलंकृ] which takes @deva[इष्णुच्] (@ref[3.2.136]).",
            "advanced": "@deva[युच्] also follows @deva[क्रोधार्थ]/मण्डार्थ @deva[धातु]s for @deva[तच्छीलादि]. Examples: @deva[क्रोधनः], @deva[रोषणः], @deva[मण्डनः], @deva[भूषणः]. @deva[अलंकृ] excluded—takes @deva[इष्णुच्] (@ref[3.2.136])."
        }
    },
    "32152": {
        "en": {
            "simple": "The affix @deva[युच्] is **not** used after verbs ending in @deva[य]. This blocks @ref[3.2.149]. Examples: @deva[क्नूयिता] 'making creaking sound', @deva[क्षमायिता] 'trembling'—these use @deva[तृन्] (@ref[3.2.135]) instead.",
            "standard": "The affix @deva[युच्] is prohibited after verbs ending in @deva[य], blocking @ref[3.2.149]. Examples: @deva[क्नूयिता] 'creaking'; @deva[क्षमायिता] 'trembling'. These take @deva[तृन्] (@ref[3.2.135]) instead.",
            "advanced": "@deva[युच्] is @deva[निषिद्ध] after @deva[यान्त] @deva[धातु]s, blocking @ref[3.2.149]. Examples: @deva[क्नूयिता], @deva[क्षमायिता]. These take @deva[तृन्] (@ref[3.2.135])."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.143-3.2.152")
