#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.2.138-3.2.152 (Batch 8)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "32138": {
        "en": {
            "simple": "In Vedic literature, the affix @deva[इष्णुच्] in the sense of 'agent having such habit etc.' also comes after @deva[भू] 'to be' and similar verbs. Example: @deva[भविष्णुः] 'becoming'. The separation of this sūtra from the previous one (@deva[योगविभाग]) is for the sake of subsequent sūtras. The word 'also' indicates other verbs not in the previous two sūtras also take this affix, as in @deva[भ्राजिष्णुना लोहितचन्दनेन].",
            "standard": "In @deva[छन्दस्], @deva[इष्णुच्] with @deva[तच्छीलादि] also follows @deva[भू] etc. Example: @deva[भविष्णुः] 'becoming'. The @deva[योगविभाग] from @ref[3.2.137] serves subsequent sūtras. The @deva[अपि] indicates other verbs beyond @ref[3.2.136]-@ref[3.2.137] also take this affix: @deva[भ्राजिष्णुना लोहितचन्दनेन].",
            "advanced": "In @deva[छन्दस्], @deva[इष्णुच्] with @deva[तच्छीलादि] follows @deva[भ्वादि]. Example: @deva[भविष्णुः]. @deva[योगविभाग] for subsequent sūtras. @deva[अपि] extends to other @deva[धातु]s: @deva[भ्राजिष्णुना लोहितचन्दनेन]."
        }
    },
    "32139": {
        "en": {
            "simple": "The affix @deva[क्स्नु] comes after @deva[ग्ला] 'to be weary', @deva[जि] 'to conquer', @deva[स्था] 'to stand', and @deva[भू] 'to be' in the sense of 'agent having such habit etc.' Examples: @deva[ग्लास्नुः] 'languid', @deva[जिष्णुः] 'victorious', @deva[स्थास्नुः] 'immovable', @deva[भूष्णुः] 'being'. The @deva[छन्दस्] condition does not continue here. The indicatory letter is actually @deva[ग] (not @deva[क])—therefore no long @deva[ई] substitute for @deva[आ] of @deva[स्था] (@ref[6.4.66]). In @ref[1.1.5] and @ref[7.2.11], @deva[क] includes @deva[ग], so this affix doesn't cause @deva[गुण] and @deva[भूष्णु] has no @deva[इट्]. Vārttika: In @deva[छन्दस्], after @deva[दंश्] 'to bite'—@deva[दङ्क्ष्णवः पशवः] 'biting beasts'.",
            "standard": "@deva[क्स्नु] follows @deva[ग्ला], @deva[जि], @deva[स्था], @deva[भू] with @deva[तच्छीलादि]. Examples: @deva[ग्लास्नुः], @deva[जिष्णुः], @deva[स्थास्नुः], @deva[भूष्णुः]. @deva[छन्दसि] @deva[अनुवृत्ति] stops. The @deva[इत्] is @deva[ग] (not @deva[क])—no @deva[ईत्व] for @deva[स्था] (@ref[6.4.66]). In @ref[1.1.5] (@deva[क्ङिति च]) and @ref[7.2.11] (@deva[श्रयुकः किति]), @deva[क] includes @deva[ग]—so no @deva[गुण] and no @deva[इट्] in @deva[भूष्णु]. @deva[वार्त्तिक]: In @deva[छन्दस्], after @deva[दंश्]: @deva[दङ्क्ष्णवः पशवः].",
            "advanced": "@deva[क्स्नु] follows @deva[ग्ला], @deva[जि], @deva[स्था], @deva[भू] with @deva[तच्छीलादि]. Examples: @deva[ग्लास्नुः], @deva[जिष्णुः], @deva[स्थास्नुः], @deva[भूष्णुः]. @deva[छन्दसि] @deva[अनुवृत्ति] absent. @deva[इत्] = @deva[ग] (not @deva[क])—no @deva[ईत्व] (@ref[6.4.66]). @ref[1.1.5]/@ref[7.2.11] include @deva[ग] in @deva[क]—no @deva[गुण], no @deva[इट्]. @deva[वार्त्तिक]: @deva[छन्दस्] @deva[दंश्]: @deva[दङ्क्ष्णवः पशवः]."
        }
    },
    "32140": {
        "en": {
            "simple": "The affix @deva[क्नु] comes after @deva[त्रस्] 'to tremble', @deva[गृध्] 'to be greedy', @deva[धृष्] 'to be bold', and @deva[क्षिप्] 'to throw' in the sense of 'agent having such habit etc.' Examples: @deva[त्रस्नुः] 'trembling', @deva[गृध्नुः] 'greedy', @deva[धृष्णुः] 'bold', @deva[क्षिप्णुः] 'throwing'.",
            "standard": "@deva[क्नु] follows @deva[त्रस्], @deva[गृध्], @deva[धृष्], @deva[क्षिप्] with @deva[तच्छीलादि]. Examples: @deva[त्रस्नुः], @deva[गृध्नुः], @deva[धृष्णुः], @deva[क्षिप्णुः].",
            "advanced": "@deva[क्नु] follows @deva[त्रस्], @deva[गृध्], @deva[धृष्], @deva[क्षिप्] with @deva[तच्छीलादि]. Examples: @deva[त्रस्नुः], @deva[गृध्नुः], @deva[धृष्णुः], @deva[क्षिप्णुः]."
        }
    },
    "32141": {
        "en": {
            "simple": "The affix @deva[घिनुण्] comes after the eight verbs beginning with @deva[शम्] 'to be calm' in the sense of 'agent having such habit etc.' These eight verbs (ending with @deva[मद्]) are: @deva[शम्], @deva[तम्], @deva[दम्], @deva[श्रम्], @deva[भ्रम्], @deva[क्लम्], @deva[क्षम्], @deva[मद्]. The real affix is @deva[इन्]; @deva[घ] causes guttural substitution for final palatals; @deva[उ] is euphonic; @deva[ण्] causes @deva[वृद्धि] (@ref[7.2.116])—but @ref[7.3.34] blocks @deva[वृद्धि] for @deva[म्]-ending roots, so only @deva[मद्] takes it. Examples: @deva[शमी] 'calm', @deva[तमी] 'desiring', @deva[दमी] 'taming', @deva[श्रमी] 'laborious', @deva[भ्रमी] 'whirling', @deva[क्लमी] 'fatiguing', @deva[क्षमी] 'forbearing', @deva[प्रमादी]/@deva[उन्मादी] 'mad'. @deva[उन्मद्] takes @deva[इष्णुच्] by @ref[3.2.136] but also @deva[घिनुण्] by @deva[वासरूप] (@ref[3.1.94]). All are @deva[दिवादि]. For other verbs: @deva[असिता].",
            "standard": "@deva[घिनुण्] follows the 8 verbs @deva[शमादि] (from @deva[शम्] to @deva[मद्]) with @deva[तच्छीलादि]. @deva[इति] = 'beginning'. The real affix is @deva[इन्]; @deva[घ] = guttural substitution; @deva[उ] = euphony/@ref[6.3.45]; @deva[ण्] = @deva[वृद्धि] (@ref[7.2.116])—blocked for @deva[मकारान्त] by @ref[7.3.34], so only @deva[मद्] gets @deva[वृद्धि]. Examples: @deva[शमी], @deva[तमी], @deva[दमी], @deva[श्रमी], @deva[भ्रमी], @deva[क्लमी], @deva[क्षमी], @deva[प्रमादी]/उन्मादी. @deva[उन्मद्] takes both @deva[इष्णुच्] (@ref[3.2.136]) and @deva[घिनुण्] by @deva[वासरूप] (@ref[3.1.94]). All @deva[दिवादि]. Other verbs: @deva[असिता].",
            "advanced": "@deva[घिनुण्] follows @deva[शमादि] (8 verbs @deva[शम्]-to-@deva[मद्]) with @deva[तच्छीलादि]. @deva[इन्] is @deva[प्रत्यय]; @deva[घ] = @deva[कुत्वविधान]; @deva[उ] = @deva[स्वरार्थ]/@ref[6.3.45]; @deva[ण्] = @deva[वृद्धि] (@ref[7.2.116])—@ref[7.3.34] blocks for @deva[मकारान्त]. Examples: @deva[शमी], @deva[प्रमादी]. @deva[उन्मद्]: both @deva[इष्णुच्] (@ref[3.2.136]) and @deva[घिनुण्] (@ref[3.1.94] @deva[वासरूप]). All @deva[दिवादि]."
        }
    },
    "32142": {
        "en": {
            "simple": "The affix @deva[घिनुण्] comes after these 27 verbs in the sense of 'agent having such habit etc.': @deva[संपृच्], @deva[अनुरुध्], @deva[आयम्], @deva[आयस्], @deva[परिसृ], @deva[संसृज्], @deva[परिदेव्], @deva[संज्वर्], @deva[परिक्षिप्], @deva[परिरट्], @deva[परिवद्], @deva[परिदह्], @deva[परिमुह्], @deva[दुष्], @deva[द्विष्], @deva[द्रुह्], @deva[दुह्], @deva[युज्], @deva[आक्रीड्], @deva[विविच्], @deva[त्यज्], @deva[रज्], @deva[भज्], @deva[अतिचर्], @deva[अपचर्], @deva[आमुष्], @deva[अभ्याहन्]. Examples: @deva[सम्पर्की] 'mixing', @deva[अनुरोधी] 'compliant', @deva[आयामी] 'restraining', @deva[योगी] 'concentrating/joining', @deva[त्यागी] 'renouncing', @deva[रागी] 'yearning', @deva[भागी] 'sharing'. The @deva[घ] changes final palatals to gutturals. Notes: @deva[सम्पृच्] is @deva[रुधादि]; @deva[परिदेव्] is @deva[भ्वादि] (@deva[देवृ]); @deva[क्षिप्] from both @deva[तुदादि] and @deva[दिवादि]; @deva[युज्] both 'concentrate' (@deva[दिवादि]) and 'join' (@deva[रुधादि]); @deva[रञ्ज्] loses nasal irregularly.",
            "standard": "@deva[घिनुण्] follows 27 verbs with @deva[तच्छीलादि]: @deva[संपृच्], @deva[अनुरुध्], @deva[आयम्], @deva[आयस्], @deva[परिसृ], @deva[संसृज्], @deva[परिदेव्], @deva[संज्वर्], @deva[परिक्षिप्], @deva[परिरट्], @deva[परिवद्], @deva[परिदह्], @deva[परिमुह्], @deva[दुष्], @deva[द्विष्], @deva[द्रुह्], @deva[दुह्], @deva[युज्], @deva[आक्रीड्], @deva[विविच्], @deva[त्यज्], @deva[रज्], @deva[भज्], @deva[अतिचर्], @deva[अपचर्], @deva[आमुष्], @deva[अभ्याहन्]. Derivation: @deva[सम्पृच्] + @deva[घिनुण्] = @deva[सम्पर्क] + @deva[इन्] (@ref[7.2.52]) = @deva[सम्पर्की]. Examples: @deva[अनुरोधी], @deva[आयामी], @deva[आयासी], @deva[परिसारी], @deva[संसर्गी], @deva[परिदेवी], @deva[योगी], @deva[विवेकी], @deva[त्यागी], @deva[रागी], @deva[भागी], @deva[अतिचारी], @deva[आमोषी], @deva[अभ्याघाती]. @deva[घ] = palatal → guttural (@ref[7.3.52], @ref[7.3.54]). Notes: @deva[सम्पृच्] (@deva[रुधादि]); @deva[परिदेव्] (@deva[भ्वादि] @deva[देवृ]); @deva[क्षिप्] (@deva[तुदादि]/दिवादि); @deva[युज्] (@deva[दिवादि] 'concentrate' / @deva[रुधादि] 'join'); @deva[रञ्ज्] loses @deva[नकार] irregularly.",
            "advanced": "@deva[घिनुण्] follows 27 verbs with @deva[तच्छीलादि]. Derivation: @deva[सम्पृच्] + @deva[घिनुण्] = @deva[सम्पर्की] (@ref[7.2.52]). @deva[घ] = @deva[कुत्व] (@ref[7.3.52], @ref[7.3.54]). @deva[सम्पृच्] = @deva[रुधादि]; @deva[परिदेव्] = @deva[भ्वादि]; @deva[क्षिप्] = @deva[तुदादि]/दिवादि; @deva[युज्] = @deva[दिवादि]/रुधादि; @deva[रञ्ज्] has irregular @deva[नलोप]."
        }
    },
    "32143": {
        "en": {
            "simple": "The affix @deva[घिनुण्] comes after @deva[कष्] 'to injure', @deva[लस्] 'to sport', @deva[कत्थ्] 'to praise', and @deva[स्रम्भ्] 'to believe' when compounded with @deva[वि]. Examples: @deva[विकाषी] 'injuring', @deva[विलासी] 'sportive, sensualist', @deva[विकत्थी] 'vaunting', @deva[विस्रम्भी] 'confiding'.",
            "standard": "@deva[घिनुण्] follows @deva[कष्], @deva[लस्], @deva[कत्थ्], @deva[स्रम्भ्] with @deva[तच्छीलादि] when @deva[वि] is @deva[उपसर्ग]. Examples: @deva[विकाषी], @deva[विलासी], @deva[विकत्थी], @deva[विस्रम्भी].",
            "advanced": "@deva[घिनुण्] follows @deva[विकष्], @deva[विलस्], @deva[विकत्थ्], @deva[विस्रम्भ्] with @deva[तच्छीलादि]. Examples: @deva[विकाषी], @deva[विलासी], @deva[विकत्थी], @deva[विस्रम्भी]."
        }
    },
    "32144": {
        "en": {
            "simple": "The affix @deva[घिनुण्] comes after @deva[लष्] 'to wish' when compounded with @deva[अप] and @deva[वि]. Examples: @deva[अपलाषी] 'thirsty', @deva[विलाषी]. The @deva[वि] is understood by the force of 'and' (@deva[च]).",
            "standard": "@deva[घिनुण्] follows @deva[लष्] with @deva[तच्छीलादि] when @deva[अप] or @deva[वि] is @deva[उपसर्ग]. Examples: @deva[अपलाषी] 'thirsty', @deva[विलाषी]. @deva[वि] is supplied by @deva[च].",
            "advanced": "@deva[घिनुण्] follows @deva[अपलष्]/विलष् with @deva[तच्छीलादि]. Examples: @deva[अपलाषी], @deva[विलाषी]."
        }
    },
    "32145": {
        "en": {
            "simple": "The affix @deva[घिनुण्] comes after @deva[लप्] 'to speak', @deva[सृ] 'to flow', @deva[द्रु] 'to run', @deva[मथ्] 'to churn', @deva[वद्] 'to speak', @deva[वस्] 'to dwell' when compounded with @deva[प्र]. Examples: @deva[प्रलापी] 'prattling', @deva[प्रसारी] 'extending', @deva[प्रद्रावी] 'fugitive', @deva[प्रमाथी] 'tormenting', @deva[प्रवादी] 'reporting', @deva[प्रवासी] 'traveler'. Note: @deva[वस्] here is @deva[भ्वादि] 'to dwell', not @deva[अदादि] 'to cover' (which elides @deva[विकरण]).",
            "standard": "@deva[घिनुण्] follows @deva[लप्], @deva[सृ], @deva[द्रु], @deva[मथ्], @deva[वद्], @deva[वस्] with @deva[तच्छीलादि] when @deva[प्र] is @deva[उपसर्ग]. Examples: @deva[प्रलापी], @deva[प्रसारी], @deva[प्रद्रावी], @deva[प्रमाथी], @deva[प्रवादी], @deva[प्रवासी]. @deva[वस्] = @deva[भ्वादि] 'to dwell', not @deva[अदादि] 'to cover' (which has @deva[विकरणलोप]).",
            "advanced": "@deva[घिनुण्] follows @deva[प्रलप्], @deva[प्रसृ], @deva[प्रद्रु], @deva[प्रमथ्], @deva[प्रवद्], @deva[प्रवस्] with @deva[तच्छीलादि]. @deva[वस्] = @deva[भ्वादि], not @deva[अदादि]. Examples: @deva[प्रलापी], @deva[प्रसारी], @deva[प्रवासी]."
        }
    },
    "32146": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes after @deva[निन्द्] 'to blame', @deva[हिंस्] 'to injure', @deva[क्लिश्] 'to torment', @deva[खाद्] 'to eat', @deva[विनश्] 'to destroy', @deva[परिक्षिप्], @deva[परिरट्], @deva[परिवद्], @deva[व्याभाष्], and @deva[असूय्] in the sense of 'agent having such habit etc.' Examples: @deva[निन्दकः] 'blaming' (@ref[7.1.1]), @deva[हिंसकः] 'injuring', @deva[क्लेशकः] 'tormenting', @deva[खादकः] 'eating', @deva[विनाशकः] 'destroying', @deva[असूयकः] 'detracting'. Note: The same forms could come from @deva[ण्वुल्] (@ref[3.1.133]); the separate statement here establishes a @deva[परिभाषा]: the @deva[वासरूप] rule (@ref[3.1.94]) does not apply to @deva[तच्छील] affixes (@ref[3.2.134]-@ref[3.2.177])—so @deva[तृच्] etc. are not added in @deva[तच्छील] sense.",
            "standard": "@deva[वुञ्] follows @deva[निन्द्], @deva[हिंस्], @deva[क्लिश्], @deva[खाद्], @deva[विनश्], @deva[परिक्षिप्], @deva[परिरट्], @deva[परिवद्], @deva[व्याभाष्], @deva[असूय्] with @deva[तच्छीलादि]. Examples: @deva[निन्दकः] (@ref[7.1.1]), @deva[हिंसकः], @deva[क्लेशकः], @deva[खादकः], @deva[विनाशकः], @deva[परिक्षेपकः], @deva[परिराटकः], @deva[परिवादकः], @deva[व्याभाषकः], @deva[असूयकः]. The same forms arise from @deva[ण्वुल्] (@ref[3.1.133]); the separate statement establishes @deva[परिभाषा]: @ref[3.1.94] (@deva[वासरूप] rule) doesn't apply to @deva[तच्छीलादि] affixes (@ref[3.2.134]-@ref[3.2.177])—so @deva[तृच्] etc. don't come with @deva[तच्छीलार्थ].",
            "advanced": "@deva[वुञ्] follows @deva[निन्द्], @deva[हिंस्], @deva[क्लिश्], @deva[खाद्], @deva[विनश्], @deva[परिक्षिप्], @deva[परिरट्], @deva[परिवद्], @deva[व्याभाष्], @deva[असूय्] with @deva[तच्छीलादि]. Same as @deva[ण्वुल्] (@ref[3.1.133]); separate statement yields @deva[परिभाषा]: @ref[3.1.94] doesn't apply to @ref[3.2.134]-@ref[3.2.177] affixes."
        }
    },
    "32147": {
        "en": {
            "simple": "The affix @deva[वुञ्] comes after @deva[देव्] 'to lament' and @deva[क्रुश्] 'to cry' when an @deva[उपसर्ग] is in composition. Examples: @deva[आदेवकः] 'one who laments', @deva[आक्रोशकः] 'reviler', @deva[परिदेवकः], @deva[परिक्रोशकः]. Without @deva[उपसर्ग]: @deva[देवयिता] and @deva[क्रोष्टा] (using @deva[तृन्] from @ref[3.2.135]).",
            "standard": "@deva[वुञ्] follows @deva[देव्] and @deva[क्रुश्] with @deva[तच्छीलादि] when @deva[उपसर्गयोग]. Examples: @deva[आदेवकः], @deva[आक्रोशकः], @deva[परिदेवकः], @deva[परिक्रोशकः]. Without @deva[उपसर्ग]: @deva[देवयिता], @deva[क्रोष्टा] (@deva[तृन्] by @ref[3.2.135]).",
            "advanced": "@deva[वुञ्] follows @deva[देव्], @deva[क्रुश्] with @deva[तच्छीलादि] when @deva[उपसर्गयोग]. Examples: @deva[आदेवकः], @deva[आक्रोशकः]. Without @deva[उपसर्ग]: @deva[देवयिता], @deva[क्रोष्टा] (@deva[तृन्])."
        }
    },
    "32148": {
        "en": {
            "simple": "The affix @deva[युच्] comes after intransitive verbs denoting motion or sound, in the sense of 'agent having such habit etc.' Examples: @deva[चलनः] 'moving' (@ref[7.1.1]), @deva[चोपनः] 'creeping', @deva[शब्दनः] 'sounding', @deva[रवणः] 'roaring'. Why 'intransitive'? With transitive verbs: @deva[पठिता विद्याम्] (uses @deva[तृन्], not @deva[युच्]).",
            "standard": "@deva[युच्] follows @deva[अकर्मक] (intransitive) verbs with @deva[गत्यर्थ] (motion) or @deva[शब्दार्थ] (sound) meaning, in @deva[तच्छीलादि] sense. Examples: @deva[चल्] + @deva[युच्] = @deva[चलनः] (@ref[7.1.1]); @deva[चोपनः], @deva[शब्दनः], @deva[रवणः]. @deva[अकर्मक] restriction: @deva[पठिता विद्याम्] (transitive → @deva[तृन्]).",
            "advanced": "@deva[युच्] follows @deva[अकर्मक] @deva[गत्यर्थ]/शब्दार्थ verbs with @deva[तच्छीलादि]. Examples: @deva[चलनः], @deva[शब्दनः]. @deva[अकर्मक] only: @deva[पठिता विद्याम्]."
        }
    },
    "32149": {
        "en": {
            "simple": "The affix @deva[युच्] comes after intransitive verbs that are @deva[आत्मनेपदी], begin with a consonant, and have an @deva[अनुदात्त] indicatory vowel, in the sense of 'agent having such habit etc.' Examples: @deva[वर्तनः] 'being', @deva[वर्धनः] 'growing'. Why @deva[अनुदात्तेत्]? @deva[भविता] (not @deva[अनुदात्त]). Why consonant-initial? @deva[एधिता] (vowel-initial, uses @deva[तृन्]). Why @deva[आदि] in the sūtra? For @deva[जुगुप्सनः], @deva[मीमांसनः]—without it, the rule would mean 'consonant-final', wrongly including @deva[एध्] and excluding vowel-final @deva[जुगुप्स्]. This rule doesn't apply if transitive: @deva[वसिता वस्त्रम्].",
            "standard": "@deva[युच्] follows @deva[अकर्मक] @deva[आत्मनेपदिन्] verbs that are @deva[हलादि] (consonant-initial) and @deva[अनुदात्तेत्], with @deva[तच्छीलादि]. Examples: @deva[वर्तनः], @deva[वर्धनः]. Counter-examples: @deva[भविता] (not @deva[अनुदात्तेत्]); @deva[एधिता] (@deva[अजादि], uses @deva[तृन्]). The term @deva[आदि] is crucial: without it, @deva[अनुदात्तेतश्च हलः] would mean 'consonant-final' (@ref[1.1.72]), wrongly including @deva[एध्] and excluding @deva[जुगुप्स्] (vowel-final). With @deva[आदि]: @deva[जुगुप्सनः], @deva[मीमांसनः]. Transitive blocks: @deva[वसिता वस्त्रम्].",
            "advanced": "@deva[युच्] follows @deva[अकर्मक] @deva[आत्मनेपदिन्] @deva[हलादि] @deva[अनुदात्तेत्] verbs with @deva[तच्छीलादि]. Examples: @deva[वर्तनः], @deva[वर्धनः]. @deva[भविता] (non-@deva[अनुदात्तेत्]); @deva[एधिता] (@deva[अजादि]). @deva[आदि] prevents @ref[1.1.72] reading: @deva[जुगुप्सनः], @deva[मीमांसनः]. Transitive: @deva[वसिता वस्त्रम्]."
        }
    },
    "32150": {
        "en": {
            "simple": "The affix @deva[युच्] comes after @deva[जु] 'to go quickly', @deva[चङ्क्रम्य] 'to move about', @deva[दन्द्रम्य] 'to wander', @deva[सृ] 'to flow', @deva[गृध्] 'to be greedy', @deva[ज्वल्] 'to burn', @deva[शुच्] 'to grieve', @deva[लष्] 'to desire', @deva[पत्] 'to fall', @deva[पद्] 'to move' in the sense of 'agent having such habit etc.' @deva[जु] is a @deva[सौत्र धातु] (taught only in sūtras, not in Dhātupāṭha). Examples: @deva[जवनः] 'swift horse' (@ref[7.1.1], @ref[7.3.84], @ref[6.1.78]), @deva[चङ्क्रमणः] 'moving about' (@ref[2.4.74] @deva[यलोप]), @deva[दन्द्रमणः] 'wandering', @deva[सरणः] 'flowing', @deva[गर्धनः] 'greedy', @deva[ज्वलनः] 'burning', @deva[शोचनः] 'grieving', @deva[लषणः] 'desiring', @deva[पतनः] 'falling', @deva[पदनः] 'moving'. The inclusion of @deva[पद्] (a @deva[चलनार्थ] verb covered by @ref[3.2.148]) indicates either: (1) this sūtra applies to transitive verbs too, or (2) establishes the @deva[परिभाषा] that @ref[3.1.94] doesn't apply to @deva[तच्छील] affixes.",
            "standard": "@deva[युच्] follows @deva[जु], @deva[चङ्क्रम्य], @deva[दन्द्रम्य], @deva[सृ], @deva[गृध्], @deva[ज्वल्], @deva[शुच्], @deva[लष्], @deva[पत्], @deva[पद्] with @deva[तच्छीलादि]. @deva[जु] is @deva[सौत्र धातु] (not in Dhātupāṭha). Examples: @deva[जु] + @deva[युच्] = @deva[जो] + @deva[अन] (@ref[7.1.1], @ref[7.3.84]) = @deva[जवनः] (@ref[6.1.78]) 'swift horse'; @deva[चङ्क्रम्य] + @deva[युच्] = @deva[चङ्क्रमणः] (@ref[2.4.74] @deva[यलोप]); @deva[दन्द्रमणः], @deva[सरणः], @deva[गर्धनः], @deva[ज्वलनः], @deva[शोचनः], @deva[लषणः], @deva[पतनः], @deva[पदनः]. @deva[पद्] inclusion (@deva[चलनार्थ], covered by @ref[3.2.148]) indicates: (1) transitive verbs included, or (2) @deva[ज्ञापक] for @deva[परिभाषा] that @ref[3.1.94] doesn't apply to @deva[तच्छीलादि]. The @deva[ज्ञापक] is @deva[अनित्य]: @deva[गन्ता खेटं विकत्थनः] (both affixes).",
            "advanced": "@deva[युच्] follows @deva[जु], @deva[चङ्क्रम्य], @deva[दन्द्रम्य], @deva[सृ], @deva[गृध्], @deva[ज्वल्], @deva[शुच्], @deva[लष्], @deva[पत्], @deva[पद्] with @deva[तच्छीलादि]. @deva[जु] = @deva[सौत्र]. @deva[जवनः], @deva[चङ्क्रमणः] (@ref[2.4.74]), etc. @deva[पद्] = @deva[ज्ञापक] for @deva[परिभाषा] (@ref[3.1.94] non-application to @deva[तच्छीलादि]). @deva[अनित्य]: @deva[गन्ता खेटं विकत्थनः]."
        }
    },
    "32151": {
        "en": {
            "simple": "The affix @deva[युच्] comes after verbs meaning 'to be angry' (@deva[क्रुधर्थ]) and 'to adorn' (@deva[मण्डार्थ]) in the sense of 'agent having such habit etc.' Examples: @deva[क्रोधनः] 'wrathful', @deva[रोषणः] 'irascible', @deva[मण्डनः] 'adorning', @deva[भूषणः] 'ornament'. But not @deva[अलंकृ], which takes @deva[इष्णुच्] by @ref[3.2.136].",
            "standard": "@deva[युच्] follows @deva[क्रुधर्थ] and @deva[मण्डार्थ] verbs with @deva[तच्छीलादि]. Examples: @deva[क्रोधनः], @deva[रोषणः]; @deva[मण्डनः], @deva[भूषणः]. Not @deva[अलंकृ]—@ref[3.2.136] (@deva[इष्णुच्]) applies.",
            "advanced": "@deva[युच्] follows @deva[क्रुधर्थ] and @deva[मण्डार्थ] verbs with @deva[तच्छीलादि]. Examples: @deva[क्रोधनः], @deva[मण्डनः]. @deva[अलंकृ]: @ref[3.2.136] (@deva[इष्णुच्])."
        }
    },
    "32152": {
        "en": {
            "simple": "The affix @deva[युच्] is not used after verbs ending in @deva[य]. This overrides @ref[3.2.149]. Instead, @deva[तृन्] (@ref[3.2.135]) is used. Examples: @deva[क्नूयिता] 'making creaking sound', @deva[क्षमायिता] 'trembling' (not *@deva[क्नूयनः], *@deva[क्षमायनः]).",
            "standard": "@deva[युच्] is blocked after @deva[यकारान्त] verbs—this overrides @ref[3.2.149]. @deva[तृन्] (@ref[3.2.135]) applies instead. Examples: @deva[क्नूयिता], @deva[क्षमायिता].",
            "advanced": "@deva[युच्] blocked after @deva[यकारान्त]—@deva[अपवाद] to @ref[3.2.149]. @deva[तृन्] applies. Examples: @deva[क्नूयिता], @deva[क्षमायिता]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.2.138-3.2.152")
