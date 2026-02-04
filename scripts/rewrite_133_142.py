# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32133": {
        "en": {
            "simple": "The affix @deva[शतृ] comes after @deva[अर्ह्] 'to deserve' when expressing **praise**. Examples: @deva[अर्हन्निह भवान्विद्याम्] 'you are worthy of this knowledge here'; @deva[अर्हन्निह भवान्पूजाम्] 'you are worthy of honor here'. Without praise: @deva[अर्हति चौरो वधम्] 'the thief deserves death'.",
            "standard": "The affix @deva[शतृ] follows @deva[अर्ह्] 'to be worthy' when @deva[स्तुति] (praise) is expressed. Examples: @deva[अर्हन्निह भवान्विद्याम्] 'you are worthy of knowledge'; @deva[अर्हन्निह भवान्पूजाम्] 'worthy of honor'. Without @deva[स्तुत्यर्थ]: @deva[अर्हति चौरो वधम्] 'thief deserves death'.",
            "advanced": "@deva[शतृ] follows @deva[अर्ह्] when @deva[स्तुति] is expressed. Examples: @deva[अर्हन्निह भवान्विद्याम्]; @deva[अर्हन्निह भवान्पूजाम्]. Without @deva[स्तुत्यर्थ]: @deva[अर्हति चौरो वधम्]."
        }
    },
    "32134": {
        "en": {
            "simple": "From this sūtra up to @deva[क्विप्] in @ref[3.2.177], the affixes should be understood as expressing agents having **habit** (@deva[तच्छील]), **duty/nature** (@deva[तद्धर्म]), or **skill** (@deva[तत्साधुकारि]). @deva[तच्छील] = natural inclination without considering results. @deva[तद्धर्म] = doing as duty, not habit. @deva[तत्साधुकारि] = doing excellently.",
            "standard": "This is an @deva[अधिकार] extending through @ref[3.2.177] (inclusive per @deva[आ]). The affixes express: @deva[तच्छील] (habitual inclination without fruit-consideration), @deva[तद्धर्म] (action done as duty, not habit), @deva[तत्साधुकारि] (excellent performance). Illustrations follow in subsequent sūtras.",
            "advanced": "This @deva[अधिकार] extends to @ref[3.2.177] (@deva[आ] = limit-inclusive). Three @deva[अर्थ]s: @deva[तच्छील] (natural action @deva[अफलेच्छया]), @deva[तद्धर्म] (action as @deva[कर्तव्य], not @deva[अभ्यास]), @deva[तत्साधुकारि] (excellent/skillful performance). These meanings apply to all subsequent affixes through @deva[क्विप्]."
        }
    },
    "32135": {
        "en": {
            "simple": "The affix @deva[तृन्] comes after all verbs for 'agent with habit etc.' The @deva[न्] is indicatory, affecting accent (@ref[6.1.197]). Examples: @deva[कर्ता] 'maker'. Habit: @deva[कर्ता कटान्] 'accustomed mat-maker'. Nature: @deva[मुण्डयितारः श्राविष्ठायनाः] 'Śrāviṣṭhāyanas shave widows' heads'. Skill: @deva[कर्ता कटम्] 'skillful mat-maker'. Vārttikas: Simple verbs without upasargas for priest-names (@deva[होता], @deva[पोता]); with upasargas use @deva[तृच्] (@deva[उद्गाता], @deva[प्रतिहर्ता])—same form but different accent. @deva[नी] + @deva[षुक्] + @deva[तृन्] = @deva[नेष्टा]. @deva[त्विष्] → @deva[त्वष्टा] (deity name).",
            "standard": "The affix @deva[तृन्] follows all verbs for @deva[तच्छीलादि]. The @deva[न्] is @deva[इत्] governing accent (@ref[6.1.197]). @deva[कृ] + @deva[तृन्] = @deva[कर्तृ], nom. @deva[कर्ता]. @deva[शील]: @deva[कर्ता कटान्] 'habitual mat-maker'. @deva[धर्म]: @deva[मुण्डयितारः श्राविष्ठायनाः] 'Śrāviṣṭhāyanas (naturally) shave widows'; @deva[उन्नेतारस्तौल्वलायनाः पुत्रे जाते] 'Taulvalāyanas rejoice at son's birth'. @deva[साधुकारि]: @deva[कर्ता कटम्] 'skilled mat-maker'. @deva[वार्त्तिक]s: @deva[निरुपसर्ग] verbs for @deva[ऋत्विज्] names: @deva[होता], @deva[पोता]; @deva[सोपसर्ग] uses @deva[तृच्]: @deva[उद्गाता], @deva[प्रतिहर्ता] (same form, different accent). @deva[नी] + @deva[षुक्] = @deva[नेष्टा]. @deva[त्विष्] → @deva[त्वष्टा] (deity; @deva[अ] replaces @deva[इ], no @deva[इट्]). @deva[क्षद्] → @deva[क्षत्तृ] 'door-keeper'; in Veda @deva[तृच्] applies.",
            "advanced": "@deva[तृन्] follows all @deva[धातु]s for @deva[तच्छीलादि]. @deva[न्] is @deva[इत्] for @ref[6.1.197] (@deva[आद्युदात्त]). @deva[शील]: @deva[कर्ता कटान्]. @deva[धर्म]: @deva[मुण्डयितारः श्राविष्ठायनाः]; @deva[अन्नमपहर्तार आह्वरकाः श्राद्धे सिद्धे]. @deva[साधुकारि]: @deva[कर्ता कटम्]; @deva[गन्ता आखेटम्]. @deva[वार्त्तिक]s: @deva[निरुपसर्ग धातु] + @deva[तृन्] for @deva[ऋत्विज्]-@deva[संज्ञा]: @deva[होतृ], @deva[पोतृ]; @deva[सोपसर्ग] = @deva[तृच्] (@deva[उद्गातृ], @deva[प्रतिहर्तृ])—form identical but @deva[स्वर] differs (@deva[तृन्] = @deva[आद्युदात्त] @ref[6.1.197]; @deva[तृच्] = @deva[अन्तोदात्त] @ref[6.1.163]). @deva[नी] + @deva[षुगागम] = @deva[नेष्टृ]. @deva[त्विष्] (@deva[देवतार्थ]) → @deva[त्वष्टृ] (@deva[इ] → @deva[अ], @deva[इडभाव]). @deva[क्षद्] → @deva[क्षत्तृ] (@deva[परिचारक]); @deva[छन्दसि] @deva[तृच्]."
        }
    },
    "32136": {
        "en": {
            "simple": "The affix @deva[इष्णुच्] comes after these verbs for 'agent with habit etc.': @deva[अलंकृ] 'adorn', @deva[निराकृ] 'expel', @deva[प्रजन्] 'be born', @deva[उत्पच्] 'ripen', @deva[उत्पत्] 'fly', @deva[उन्मद्] 'be mad', @deva[रुच्] 'shine', @deva[अपत्रप्] 'be ashamed', @deva[वृत्] 'move', @deva[वृध्] 'grow', @deva[सह्] 'bear', @deva[चर्] 'walk'. Examples: @deva[अलङ्करिष्णुः] 'decorating', @deva[सहिष्णुः] 'patient', @deva[चरिष्णुः] 'moveable'.",
            "standard": "The affix @deva[इष्णुच्] follows @deva[अलंकृ], @deva[निराकृ], @deva[प्रजन्], @deva[उत्पच्], @deva[उत्पत्], @deva[उन्मद्], @deva[रुच्], @deva[अपत्रप्], @deva[वृत्], @deva[वृध्], @deva[सह्], @deva[चर्] for @deva[तच्छीलादि]. Examples: @deva[अलङ्करिष्णुः] 'decorating'; @deva[निराकरिष्णुः] 'repudiating'; @deva[प्रजनिष्णुः] 'procreative'; @deva[उत्पचिष्णुः] 'apt to ripen'; @deva[उत्पतिष्णुः] 'flying'; @deva[उन्मदिष्णुः] 'mad'; @deva[रोचिष्णुः] 'bright'; @deva[अपत्रपिष्णुः] 'bashful'; @deva[वर्तिष्णुः] 'revolving'; @deva[वर्धिष्णुः] 'growing'; @deva[सहिष्णुः] 'patient'; @deva[चरिष्णुः] 'moveable'. @deva[वार्त्तिक]: @deva[इष्णुच्] preempts @deva[युच्] (@ref[3.2.151]) after @deva[अलंकृ].",
            "advanced": "@deva[इष्णुच्] follows @deva[अलंकृ]/निराकृ/प्रजन्/उत्पच्/उत्पत्/उन्मद्/रुच्/अपत्रप्/वृत्/वृध्/सह्/चर् for @deva[तच्छीलादि]. Examples: @deva[अलङ्करिष्णुः], @deva[निराकरिष्णुः], @deva[प्रजनिष्णुः], @deva[उत्पचिष्णुः], @deva[उत्पतिष्णुः], @deva[उन्मदिष्णुः], @deva[रोचिष्णुः], @deva[अपत्रपिष्णुः], @deva[वर्तिष्णुः], @deva[वर्धिष्णुः], @deva[सहिष्णुः], @deva[चरिष्णुः]. @deva[वार्त्तिक]: @deva[इष्णुच्] is @deva[उत्सर्ग] blocking @deva[युच्] (@ref[3.2.151]) after @deva[अलंकृ] (though @deva[अलङ्कार]-sense)."
        }
    },
    "32137": {
        "en": {
            "simple": "In the Vedas, @deva[इष्णुच्] comes after verbs ending in causative @deva[णि] for 'agent with habit etc.' Examples: @deva[दृषदं धारयिष्णवः] 'those who hold the stones'; @deva[वीरुधः पारयिष्णवः].",
            "standard": "In @deva[छन्दस्], @deva[इष्णुच्] follows @deva[णिजन्त] (causative) verbs for @deva[तच्छीलादि]. Examples: @deva[दृषदं धारयिष्णवः] 'holding stones'; @deva[वीरुधः पारयिष्णवः].",
            "advanced": "In @deva[छन्दस्], @deva[इष्णुच्] follows @deva[णिजन्त] @deva[धातु]s for @deva[तच्छीलादि]. Examples: @deva[धारयिष्णवः] (from @deva[धारि]); @deva[पारयिष्णवः]."
        }
    },
    "32138": {
        "en": {
            "simple": "In the Vedas, @deva[इष्णुच्] also comes after @deva[भू] 'to be' etc. for 'agent with habit etc.' Example: @deva[भविष्णुः] 'becoming'. This sūtra is separated from the previous for subsequent rules. The @deva[अपि] indicates other verbs too: @deva[भ्राजिष्णुना लोहितचन्दनेन].",
            "standard": "In @deva[छन्दस्], @deva[इष्णुच्] also follows @deva[भू] etc. for @deva[तच्छीलादि]. Example: @deva[भविष्णुः] 'becoming'. The @deva[योगविभाग] (separation) from the previous sūtra is for subsequent rules. @deva[अपि] indicates other verbs: @deva[भ्राजिष्णुना लोहितचन्दनेन].",
            "advanced": "In @deva[छन्दस्], @deva[इष्णुच्] follows @deva[भू] @deva[आदि] for @deva[तच्छीलादि]. Example: @deva[भविष्णुः]. @deva[योगविभाग] from previous is for @deva[उत्तरसूत्रार्थ]. @deva[अपि] indicates unlisted verbs: @deva[भ्राजिष्णुः] (@deva[भ्राजिष्णुना लोहितचन्दनेन])."
        }
    },
    "32139": {
        "en": {
            "simple": "The affix @deva[क्स्नु] comes after @deva[ग्ला] 'be weary', @deva[जि] 'conquer', @deva[स्था] 'stand', and @deva[भू] 'be' for 'agent with habit etc.' Examples: @deva[ग्लास्नुः] 'languid', @deva[जिष्णुः] 'victorious', @deva[स्थास्नुः] 'steadfast', @deva[भूष्णुः] 'being'. The @deva[अनुवृत्ति] of @deva[छन्दसि] does **not** apply here. The indicatory letter is actually @deva[ग] (not @deva[क]), so @deva[आ] of @deva[स्था] doesn't become @deva[ई] by @ref[6.4.66]. Vārttika: In Vedas, @deva[दंश्] takes this: @deva[दङ्क्ष्णवः पशवः] 'biting beasts'.",
            "standard": "The affix @deva[क्स्नु] follows @deva[ग्ला], @deva[जि], @deva[स्था], @deva[भू] for @deva[तच्छीलादि]. No @deva[अनुवृत्ति] of @deva[छन्दसि]. Examples: @deva[ग्लास्नुः] 'languid'; @deva[जिष्णुः] 'victorious'; @deva[स्थास्नुः] 'steadfast'; @deva[भूष्णुः] 'being'. The @deva[इत्] is really @deva[ग] (appears as @deva[क] via @deva[सन्धि]); hence no @deva[दीर्घ] of @deva[स्था]'s @deva[आ] by @ref[6.4.66]. Being @deva[गित्], it's included in @deva[क्ङिति] (@ref[1.1.5]), so no @deva[गुण]. In @ref[7.2.11], @deva[क] includes @deva[ग], so @deva[भूष्णुः] has no @deva[इट्]. @deva[वार्त्तिक]: In @deva[छन्दस्], @deva[दंश्] takes this: @deva[दङ्क्ष्णवः पशवः] 'biting beasts'.",
            "advanced": "@deva[क्स्नु] follows @deva[ग्ला]/जि/स्था/भू for @deva[तच्छीलादि]. @deva[छन्दसि] @deva[अनुवृत्ति] absent. Examples: @deva[ग्लास्नुः], @deva[जिष्णुः], @deva[स्थास्नुः], @deva[भूष्णुः]. The @deva[इत्] is @deva[ग] (→ @deva[क] by @deva[सन्धि]); hence no @ref[6.4.66] @deva[दीर्घ]. Being @deva[गित्], included in @deva[क्ङिति] (@ref[1.1.5])—no @deva[गुण]. In @ref[7.2.11] @deva[श्रयुकः किति], @deva[क] includes @deva[ग]—@deva[भूष्णुः] has no @deva[इट्]. @deva[वार्त्तिक]: @deva[छन्दसि], @deva[दंश्] + @deva[क्स्नु]: @deva[दङ्क्ष्णवः पशवः]."
        }
    },
    "32140": {
        "en": {
            "simple": "The affix @deva[क्नु] comes after @deva[त्रस्] 'tremble', @deva[गृध्] 'be greedy', @deva[धृष्] 'be bold', @deva[क्षिप्] 'throw' for 'agent with habit etc.' Examples: @deva[त्रस्नुः] 'trembling', @deva[गृध्नुः] 'greedy', @deva[धृष्णुः] 'bold', @deva[क्षिप्नुः] 'throwing'.",
            "standard": "The affix @deva[क्नु] follows @deva[त्रस्], @deva[गृध्], @deva[धृष्], @deva[क्षिप्] for @deva[तच्छीलादि]. Examples: @deva[त्रस्नुः] 'trembling'; @deva[गृध्नुः] 'greedy'; @deva[धृष्णुः] 'bold'; @deva[क्षिप्नुः] 'throwing'.",
            "advanced": "@deva[क्नु] follows @deva[त्रस्]/गृध्/धृष्/क्षिप् for @deva[तच्छीलादि]. Examples: @deva[त्रस्नुः], @deva[गृध्नुः], @deva[धृष्णुः], @deva[क्षिप्नुः]."
        }
    },
    "32141": {
        "en": {
            "simple": "The affix @deva[घिनुण्] comes after the 8 verbs starting with @deva[शम्] 'be calm' for 'agent with habit etc.' The real affix is @deva[इन्]; @deva[घ] causes guttural substitution for final palatals; @deva[ण्] causes vṛddhi by @ref[7.2.116] (blocked for @deva[म्]-final verbs by @ref[7.3.34], except @deva[मद्]). Examples: @deva[शमी] 'calm', @deva[तमी] 'desiring', @deva[दमी] 'taming', @deva[श्रमी] 'laborious', @deva[भ्रमी] 'whirling', @deva[क्लमी] 'fatiguing', @deva[क्षमी] 'forbearing', @deva[प्रमादी/उन्मादी] 'mad'.",
            "standard": "The affix @deva[घिनुण्] follows the 8 verbs @deva[शम्] through @deva[मद्] (@deva[इति] indicates beginning) for @deva[तच्छीलादि]. The real affix is @deva[इन्]; @deva[घ] triggers guttural substitution; @deva[उ] for @ref[6.3.45]; @deva[ण्] causes @deva[वृद्धि] (@ref[7.2.116]), blocked for @deva[मकारान्त] by @ref[7.3.34] except @deva[मद्]. Examples: @deva[शमी] 'calm'; @deva[तमी] 'desiring'; @deva[दमी] 'taming'; @deva[श्रमी] 'laborious'; @deva[भ्रमी] 'whirling'; @deva[क्लमी] 'fatiguing'; @deva[क्षमी] 'forbearing'; @deva[प्रमादी]/उन्मादी 'mad'. All are @deva[दिवादि]. Though @deva[उन्मद्] takes @deva[इष्णुच्] by @ref[3.2.136], @deva[घिनुण्] also applies by @deva[वासरूप] (@ref[3.1.94]). After other verbs: @deva[असिता].",
            "advanced": "@deva[घिनुण्] follows 8 @deva[धातु]s @deva[शम्]–@deva[मद्] for @deva[तच्छीलादि]. The @deva[प्रत्यय] is @deva[इन्]; @deva[घ] = @deva[कुत्वार्थ]; @deva[उ] for @ref[6.3.45]; @deva[ण्] = @deva[वृद्धि] (@ref[7.2.116]), blocked for @deva[मकारान्त] by @ref[7.3.34] (@deva[मद्] alone takes @deva[वृद्धि]). Examples: @deva[शमी], @deva[तमी], @deva[दमी], @deva[श्रमी], @deva[भ्रमी], @deva[क्लमी], @deva[क्षमी], @deva[प्रमादी]/उन्मादी. All @deva[दिवादि]. @deva[उन्मद्] takes @deva[इष्णुच्] (@ref[3.2.136]) and @deva[घिनुण्] by @deva[वासरूप]. Other verbs: @deva[असिता]."
        }
    },
    "32142": {
        "en": {
            "simple": "The affix @deva[घिनुण्] comes after these 27 verbs for 'agent with habit etc.': @deva[सम्पृच्], @deva[अनुरुध्], @deva[आयम्], @deva[आयस्], @deva[परिसृ], @deva[संसृज्], @deva[परिदेवि], @deva[संज्वर्], @deva[परिक्षिप्], @deva[परिरट्], @deva[परिवद्], @deva[परिदह्], @deva[परिमुह्], @deva[दुष्], @deva[द्विष्], @deva[द्रुह्], @deva[दुह्], @deva[युज्], @deva[आक्रीड्], @deva[विविच्], @deva[त्यज्], @deva[रज्], @deva[भज्], @deva[अतिचर्], @deva[अपचर्], @deva[आमुष्], @deva[अभ्याहन्]. Examples: @deva[सम्पर्की] 'mixing', @deva[योगी] 'uniting', @deva[त्यागी] 'renouncing', @deva[द्वेषी] 'hating'. The @deva[घ] causes guttural substitution for final palatals.",
            "standard": "The affix @deva[घिनुण्] follows 27 verbs for @deva[तच्छीलादि]. @deva[सम्पृच्] is @deva[रुधादि] (not @deva[अदादि]). @deva[परिदेव] is @deva[भ्वादि] (from @deva[देवृ]). @deva[क्षिप्] is both @deva[तुदादि] and @deva[दिवादि]. @deva[युज्] includes @deva[दिवादि] 'concentrate' and @deva[रुधादि] 'join'. @deva[रञ्ज्] loses nasal irregularly. Examples: @deva[सम्पर्की] (@ref[7.2.52]); @deva[अनुरोधी]; @deva[आयामी]; @deva[आयासी]; @deva[परिसारी]; @deva[संसर्गी]; @deva[परिदेवी]; @deva[संज्वारी]; @deva[परिक्षेपी]; @deva[परिराटी]; @deva[परिवादी]; @deva[परिदाही]; @deva[परिमोही]; @deva[दोषी]; @deva[द्वेषी]; @deva[द्रोही]; @deva[दोही]; @deva[योगी]; @deva[आक्रीडी]; @deva[विवेकी]; @deva[त्यागी]; @deva[रागी]; @deva[भागी]; @deva[अतिचारी]; @deva[अपचारी]; @deva[आमोषी]; @deva[अभ्याघाती] (@ref[7.3.52], @ref[7.3.54]). @deva[घ] triggers @deva[कुत्व] of final palatals.",
            "advanced": "@deva[घिनुण्] follows 27 @deva[धातु]s for @deva[तच्छीलादि]. @deva[सम्पृच्] = @deva[रुधादि] (not @deva[अदादि] with @deva[विकरणलोप]). @deva[परिदेव] = @deva[भ्वादि] (@deva[देवृ]). @deva[क्षिप्] = @deva[तुदादि]/दिवादि both. @deva[युज्] = @deva[दिवादि] 'समाधि' + @deva[रुधादि] 'योग'. @deva[रञ्ज्] → @deva[रज्] (@deva[अनुनासिकलोप] irregular). @deva[प्रक्रिया]: @deva[सम्पृच्] + @deva[घिनुण्] = @deva[सम्पर्क] + @deva[इन्] (@ref[7.2.52]) = @deva[सम्पर्किन्]. Examples: @deva[सम्पर्की], @deva[अनुरोधी], @deva[आयामी], @deva[आयासी], @deva[परिसारी], @deva[संसर्गी], @deva[परिदेवी], @deva[संज्वारी], @deva[परिक्षेपी], @deva[परिराटी], @deva[परिवादी], @deva[परिदाही], @deva[परिमोही], @deva[दोषी], @deva[द्वेषी], @deva[द्रोही], @deva[दोही], @deva[योगी], @deva[आक्रीडी], @deva[विवेकी], @deva[त्यागी], @deva[रागी], @deva[भागी], @deva[अतिचारी], @deva[अपचारी], @deva[आमोषी], @deva[अभ्याघाती]. @deva[घ] = @deva[कुत्वार्थ] (@ref[7.3.52], @ref[7.3.54])."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.133-3.2.142")
