# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32163": {
        "en": {
            "simple": "The affix @deva[क्वरप्] comes after @deva[इ] 'go', @deva[नश्] 'destroy', @deva[जि] 'conquer', @deva[सृ] 'flow' for 'agent with habit etc.' The @deva[प्] is indicatory, causing @deva[तुक्] augment by @ref[6.1.71]. Examples: @deva[इत्वरः] (fem. @deva[इत्वरी]) 'traveler', @deva[नश्वरः] 'transitory', @deva[जित्वरः] 'victorious', @deva[सृत्वरः] 'river'. Though the affix begins with @deva[वल्], @deva[इट्] is prohibited by @ref[7.2.8].",
            "standard": "The affix @deva[क्वरप्] follows @deva[इ], @deva[नश्], @deva[जि], @deva[सृ] for @deva[तच्छीलादि]. The @deva[प्] is @deva[इत्] introducing @deva[तुगागम] (@ref[6.1.71]). Examples: @deva[इ] + @deva[क्वरप्] = @deva[इ] + @deva[त्] + @deva[वर] = @deva[इत्वरः], fem. @deva[इत्वरी] 'traveler'; @deva[नश्वरः] 'transitory'; @deva[जित्वरः] 'victorious'; @deva[सृत्वरः] 'river'. Though @deva[वलादि], @deva[इट्] is blocked by @ref[7.2.8].",
            "advanced": "@deva[क्वरप्] follows @deva[इ]/नश्/जि/सृ for @deva[तच्छीलादि]. @deva[प्] is @deva[इत्] → @deva[तुगागम] (@ref[6.1.71]). @deva[प्रक्रिया]: @deva[इ] + @deva[क्वरप्] → @deva[इत्वरः]. Despite @deva[वलादि], @deva[इट्] blocked by @ref[7.2.8]. Examples: @deva[इत्वरः], @deva[नश्वरः], @deva[जित्वरः], @deva[सृत्वरः]."
        }
    },
    "32164": {
        "en": {
            "simple": "The word @deva[गत्वर] is irregularly formed—@deva[गम्] loses its @deva[म्] before @deva[क्वरप्]. Example: @deva[गत्वरः] (fem. @deva[गत्वरी]) 'locomotive, transient'.",
            "standard": "The word @deva[गत्वर] is @deva[निपातन] (irregular)—@deva[गम्] loses @deva[म्] before @deva[क्वरप्]. Example: @deva[गत्वरः], fem. @deva[गत्वरी] 'locomotive, transient'.",
            "advanced": "@deva[गत्वर] is @deva[निपातन]: @deva[गम्] undergoes @deva[मकारलोप] before @deva[क्वरप्]. Result: @deva[गत्वरः] (fem. @deva[गत्वरी])."
        }
    },
    "32165": {
        "en": {
            "simple": "The affix @deva[ऊक] comes after @deva[जागृ] 'be awake' for 'agent with habit etc.' Example: @deva[जागरूकः] 'wakeful'.",
            "standard": "The affix @deva[ऊक] follows @deva[जागृ] 'to be awake' for @deva[तच्छीलादि]. Example: @deva[जागरूकः] 'wakeful'.",
            "advanced": "@deva[ऊक] follows @deva[जागृ] for @deva[तच्छीलादि]. Example: @deva[जागरूकः]."
        }
    },
    "32166": {
        "en": {
            "simple": "The affix @deva[ऊक] comes after @deva[यज्], @deva[जप्], @deva[दश्] when they end in the intensive affix @deva[य्] for 'agent with habit etc.' Examples: @deva[यायजूकः] 'frequent sacrificer', @deva[जञ्जपूकः] 'frequent prayer-mutterer', @deva[दन्दशूकः] 'snake (bites frequently)'.",
            "standard": "The affix @deva[ऊक] follows @deva[यज्], @deva[जप्], @deva[दश्] when they take intensive (@deva[यङन्त]) for @deva[तच्छीलादि]. Examples: @deva[यायजूकः] 'performer of frequent sacrifices'; @deva[जञ्जपूकः] 'repeated prayer-mutterer'; @deva[दन्दशूकः] 'snake (frequent biter)'.",
            "advanced": "@deva[ऊक] follows @deva[यज्]/जप्/दश् when @deva[यङन्त] (intensive) for @deva[तच्छीलादि]. Examples: @deva[यायजूकः], @deva[जञ्जपूकः], @deva[दन्दशूकः]."
        }
    },
    "32167": {
        "en": {
            "simple": "The affix @deva[र] comes after @deva[नम्] 'bow', @deva[कम्प्] 'shake', @deva[स्मि] 'smile', @deva[जस्] 'cease' (with @deva[अ]), @deva[कम्] 'desire', @deva[हिंस्] 'injure', @deva[दीप्] 'shine' for 'agent with habit etc.' Examples: @deva[नम्रं काष्ठम्] 'soft wood', @deva[कम्प्रा शाखा] 'shaking branch', @deva[स्मेरं मुखम्] 'smiling face', @deva[अजस्रम्] 'perpetually' (from @deva[अ] + @deva[जस्] + @deva[र]), @deva[कम्रा युवती] 'beautiful maiden', @deva[हिंस्रं रक्षः] 'injuring demon', @deva[दीप्रं काष्ठम्] 'brilliant wood'.",
            "standard": "The affix @deva[र] follows @deva[नम्], @deva[कम्प्], @deva[स्मि], @deva[अजस्] (= @deva[अ] + @deva[जस्]), @deva[कम्], @deva[हिंस्], @deva[दीप्] for @deva[तच्छीलादि]. Examples: @deva[नम्रं काष्ठम्] 'soft wood'; @deva[कम्प्रा शाखा] 'shaking branch'; @deva[स्मेरं मुखम्] 'smiling face'; @deva[अजस्रं जुहोति] 'sacrifices perpetually' (@deva[अजस्रम्] = @deva[अ] + @deva[जस्] + @deva[र], adverb); @deva[कम्रा युवती] 'beautiful maiden'; @deva[हिंस्रं रक्षः] 'injuring demon'; @deva[दीप्रं काष्ठम्] 'brilliant wood'.",
            "advanced": "@deva[र] follows @deva[नम्]/कम्प्/स्मि/अजस्/कम्/हिंस्/दीप् for @deva[तच्छीलादि]. @deva[अजस्र] = @deva[अ] + @deva[जस्] 'to release' + @deva[र] (adverb 'perpetually'). Examples: @deva[नम्र], @deva[कम्प्र], @deva[स्मेर], @deva[अजस्र], @deva[कम्र], @deva[हिंस्र], @deva[दीप्र]."
        }
    },
    "32168": {
        "en": {
            "simple": "The affix @deva[उ] comes after verbs taking the desiderative affix @deva[सन्], and after @deva[आशंस्] 'wish' and @deva[भिक्ष्] 'beg' for 'agent with habit etc.' Examples: @deva[चिकीर्षुः] 'desirous of doing', @deva[जिहीर्षुः] 'desirous of taking', @deva[आशंसुः] 'hopeful', @deva[भिक्षुः] 'beggar'. @deva[आशंस्] is @deva[आ] + @deva[शसि] 'desire', not @deva[शंसि] 'praise'.",
            "standard": "The affix @deva[उ] follows @deva[सनन्त] (desiderative) verbs, and @deva[आशंस्] 'to wish' and @deva[भिक्ष्] 'to beg' for @deva[तच्छीलादि]. The @deva[सन्] refers to the affix, not the verb @deva[सन्] (which never takes this). Examples: @deva[चिकीर्षुः] 'desirous of doing'; @deva[जिहीर्षुः] 'desirous of taking'; @deva[आशंसुः] 'hopeful'; @deva[भिक्षुः] 'beggar'. @deva[आशंस्] = @deva[आ] + @deva[शसि] 'to desire' (not @deva[शंसि] 'to praise').",
            "advanced": "@deva[उ] follows @deva[सनन्त], @deva[आशंस्], @deva[भिक्ष्] for @deva[तच्छीलादि]. @deva[सन्] means the @deva[प्रत्यय], not @deva[धातु] (never seen with this affix). Examples: @deva[चिकीर्षुः], @deva[जिहीर्षुः], @deva[आशंसुः], @deva[भिक्षुः]. @deva[आशंस्] = @deva[आ] + @deva[शसि] 'इच्छायाम्', not @deva[शंसि] 'स्तुतौ'."
        }
    },
    "32169": {
        "en": {
            "simple": "The words @deva[विन्दु] and @deva[इच्छु] are irregularly formed with affix @deva[उ] for 'agent with habit etc.' @deva[विन्दुः] comes from @deva[विद्] + @deva[नुम्] + @deva[उ] (@ref[1.1.47]) meaning 'intelligent'. @deva[इच्छुः] comes from @deva[इष्] with @deva[ष्] → @deva[छ], meaning 'desirous'.",
            "standard": "The words @deva[विन्दु] and @deva[इच्छु] are @deva[निपातन] (irregular), formed with @deva[उ] for @deva[तच्छीलादि]. @deva[विद्] + @deva[नुम्] (@deva[नुमागम]) + @deva[उ] = @deva[विन्दुः] (@ref[1.1.47]) 'intelligent' (= @deva[वेदनशील]). @deva[इष्] with @deva[ष्] → @deva[छ] = @deva[इच्छुः] 'desirous' (= @deva[एषणशील]).",
            "advanced": "@deva[विन्दु]/इच्छु are @deva[निपातन] with @deva[उ] for @deva[तच्छीलादि]. @deva[विद्] + @deva[नुमागम] + @deva[उ] = @deva[विन्दुः] (@ref[1.1.47]). @deva[इष्] with @deva[ष्] → @deva[छादेश] = @deva[इच्छुः]."
        }
    },
    "32170": {
        "en": {
            "simple": "In the Vedas, the affix @deva[उ] comes after verbs taking denominative affix @deva[क्य] for 'agent with habit etc.' @deva[क्य] includes @deva[क्यच्], @deva[क्यङ्], @deva[क्यष्] (@ref[3.1.8] etc.). Examples: @deva[मित्रयुः], @deva[संस्वेदयुः], @deva[सुम्नयुः] (Ṛg Veda I.3.4). In modern Sanskrit, @deva[तृन्] applies: @deva[मित्रीयिता]. The long @deva[ई] substitution (@ref[7.4.33]) is blocked in Vedic by @ref[7.4.35].",
            "standard": "In @deva[छन्दस्], @deva[उ] follows @deva[क्यन्त] (denominative) verbs for @deva[तच्छीलादि]. @deva[क्य] includes @deva[क्यच्]/क्यङ्/क्यष् (@ref[3.1.8] etc.). Examples: @deva[मित्रयुः], @deva[संस्वेदयुः], @deva[सुम्नयुः] (Ṛg Veda I.3.4). In @deva[भाषा], @deva[तृन्] applies: @deva[मित्रीयिता]. @ref[7.4.33] (@deva[दीर्घ] @deva[ई] for @deva[अ] before @deva[क्यच्]) is blocked in @deva[छन्दस्] by @ref[7.4.35].",
            "advanced": "In @deva[छन्दस्], @deva[उ] follows @deva[क्यन्त] (@deva[क्यच्]/क्यङ्/क्यष्) for @deva[तच्छीलादि]. Examples: @deva[मित्रयुः], @deva[संस्वेदयुः], @deva[सुम्नयुः] (Ṛg Veda I.3.4). @deva[भाषा]: @deva[तृन्] → @deva[मित्रीयिता]. @ref[7.4.33] @deva[दीर्घ] blocked by @ref[7.4.35] in @deva[छन्दस्]."
        }
    },
    "32171": {
        "en": {
            "simple": "In the Vedas, @deva[कि] and @deva[किन्] come after verbs ending in long @deva[आ] or @deva[ऋ/ॠ], and after @deva[गम्], @deva[हन्], @deva[जन्] for 'agent with habit etc.' They operate like @deva[लिट्] (Perfect), causing reduplication. Examples: @deva[पपिः] 'drinking', @deva[ददिः] 'giving', @deva[जग्मिः] 'wind', @deva[जघ्निः] 'killing'. The @deva[क्] prevents @deva[गुण] of @deva[ॠ] that @ref[7.4.11] would otherwise cause. Vārttikas: universal in Vedas (@deva[सेदिः], @deva[नेमिः]); in secular language after @deva[धा]/कृ/सृ/जनि/गमि/नमि; after intensives of @deva[सह्]/वह्/चल्/यत्].",
            "standard": "In @deva[छन्दस्], @deva[कि]/किन् follow verbs ending in @deva[दीर्घ] @deva[आ] or @deva[ऋ/ॠ], and @deva[गम्]/हन्/जन् for @deva[तच्छीलादि]. They operate @deva[लिड्वत्] (like Perfect), causing @deva[द्वित्व]. The @deva[द्] after @deva[आ] (in @deva[आद्ऋत्]) ensures @deva[दीर्घ] @deva[ॠ] inclusion (not just @deva[ह्रस्व] per @ref[1.1.70]). Examples: @deva[पा] + @deva[कि] = @deva[पपिः] 'drinking'; @deva[ददिः] 'giving' (Ṛg Veda VI.23.4); @deva[ततुरिः] (Ṛg Veda IV.39.2); @deva[जगुरिः] (Ṛg Veda X.108.1); @deva[जग्मिः] 'wind' (Ṛg Veda II.23.11); @deva[जघ्निः] 'weapon' (Ṛg Veda IX.61.2); @deva[जज्ञिः] (T.S. VII.5.20.1). The @deva[क्] is @deva[इत्] to prevent @deva[गुण] of @deva[ॠ] by @ref[7.4.11] (which would apply if @deva[कित्] came only from @ref[1.2.5]). @deva[वार्त्तिक]s: universal in @deva[छन्दस्] (@deva[सेदिः], @deva[नेमिः]); in @deva[लौकिक] after @deva[धाञ्]/कृञ्/सृ/जनि/गमि/नमि (@deva[दधिः], @deva[चक्रिः], @deva[सस्रिः], @deva[जज्ञिः], @deva[जग्मिः], @deva[नेमिः]); after @deva[यङन्त] of @deva[सह्]/वह्/चल्/यत्] (@deva[सासहिः], @deva[वावहिः], @deva[चाचलिः], @deva[यायतिः] @ref[7.4.83]).",
            "advanced": "In @deva[छन्दस्], @deva[कि]/किन् follow @deva[आद्ऋदन्त]/गम्/हन्/जन् for @deva[तच्छीलादि]. They are @deva[लिड्वत्] → @deva[द्वित्व]. @deva[द्] in @deva[आद्ऋत्] prevents @deva[तपर] (@ref[1.1.70]) excluding @deva[दीर्घ] @deva[ॠ]. Examples: @deva[पपिः], @deva[ददिः] (Ṛg Veda VI.23.4), @deva[ततुरिः], @deva[जगुरिः], @deva[जग्मिः], @deva[जघ्निः], @deva[जज्ञिः]. @deva[क्] is @deva[इत्] blocking @ref[7.4.11] @deva[गुण] of @deva[ॠ] (otherwise @deva[कित्] only via @ref[1.2.5] wouldn't block). @deva[वार्त्तिक]s: universal in @deva[छन्दस्]; @deva[लौकिक] after @deva[धाञ्]/कृञ्/सृ/जनि/गमि/नमि; @deva[यङन्त] of @deva[सह्]/वह्/चल्/यत्] (@ref[7.4.83])."
        }
    },
    "32172": {
        "en": {
            "simple": "The affix @deva[नजिङ्] comes after @deva[स्वप्] 'sleep' and @deva[तृष्] 'be thirsty' for 'agent with habit etc.' Examples: @deva[स्वप्नज्], nom. @deva[स्वप्नक्] 'sleepy/drowsy'; @deva[तृष्णज्], nom. @deva[तृष्णक्] 'covetous/thirsty'. Vārttika: Also @deva[धृष्] 'be bold' → @deva[धृष्णज्], nom. @deva[धृष्णक्] 'bold/impudent'.",
            "standard": "The affix @deva[नजिङ्] follows @deva[स्वप्] 'to sleep' and @deva[तृष्] 'to be thirsty' for @deva[तच्छीलादि]. Examples: @deva[स्वप्] + @deva[नजिङ्] = @deva[स्वप्नज्], nom. @deva[स्वप्नक्] 'sleepy'; @deva[तृष्णज्], nom. @deva[तृष्णक्] 'thirsty/covetous'. @deva[वार्त्तिक]: @deva[धृष्] 'to be bold' → @deva[धृष्णज्], nom. @deva[धृष्णक्] 'bold/impudent'.",
            "advanced": "@deva[नजिङ्] follows @deva[स्वप्]/तृष् for @deva[तच्छीलादि]. Examples: @deva[स्वप्नज्] (nom. @deva[स्वप्नक्]), @deva[तृष्णज्] (nom. @deva[तृष्णक्]). @deva[वार्त्तिक]: @deva[धृष्] → @deva[धृष्णज्] (nom. @deva[धृष्णक्])."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.163-3.2.172")
