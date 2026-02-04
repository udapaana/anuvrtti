# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32073": {
        "en": {
            "simple": "In the Vedas, the affix @deva[विच्] comes after the verb @deva[यज्] 'to sacrifice' when @deva[उप] precedes it. Example: @deva[उपयज्] 'the name of eleven formulas at a sacrifice'. The word @deva[छन्दस्] is repeated here (though @deva[मन्त्र] was already in anuvrtti) to include the Brāhmaṇa literature as well. This is a restrictive rule—the form @deva[उपयज्] is found only in Vedic literature, not in ordinary language.",
            "standard": "In @deva[छन्दस्], the affix @deva[विच्] follows @deva[यज्] 'to sacrifice' when preceded by @deva[उप]. Example: @deva[उपयङ्भिरूर्ध्वं वहन्ति] 'they carry it up with the upayaj formulas'. @deva[उपयज्] names eleven formulas at a sacrifice. The @deva[च्] is @deva[इत्], useful in including @deva[विच्] in the larger @deva[वि] group (containing @deva[क्विन्], @deva[क्विप्], @deva[ण्वि], @deva[विट्]) as in @ref[6.1.67]. The repetition of @deva[छन्दसि] (though @deva[मन्त्र] was in @deva[अनुवृत्ति]) includes the Brāhmaṇa literature.",
            "advanced": "In @deva[छन्दस्], @deva[विच्] follows @deva[यज्] with @deva[उप]. Example: @deva[उपयज्] 'eleven formulas at a sacrifice'. The @deva[च्] is @deva[इत्], including @deva[विच्] in the @deva[वि]-group (@deva[क्विन्], @deva[क्विप्], @deva[ण्वि], @deva[विट्]) for @deva[येरपृक्तस्य] @ref[6.1.67]. The @deva[पृथक्सूत्र] from @ref[3.2.75] indicates @deva[नियम]—@deva[उपयज्] occurs only in @deva[छन्दस्], not @deva[भाषा]. The @deva[छन्दसि] repetition (despite @deva[मन्त्र] in @deva[अनुवृत्ति]) extends scope to @deva[ब्राह्मण] literature."
        }
    },
    "32074": {
        "en": {
            "simple": "In the Vedas, the affixes @deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], and @deva[विच्] come after verbs ending in long @deva[आ] when a case-inflected word or upasarga is in composition. Examples: @deva[सुदामा] 'one who gives liberally', @deva[अश्वत्थामा] (proper name), @deva[सुधीवा] 'having good understanding', @deva[भूरिदावा] 'liberal giver', @deva[घृतपावा] 'ghee-drinker', @deva[कीलालपाः] 'nectar-drinker'.",
            "standard": "In @deva[छन्दस्], the affixes @deva[मनिन्] (@deva[मन्]), @deva[क्वनिप्] (@deva[वन्] by @ref[6.4.66]), @deva[वनिप्] (@deva[वन्]), and @deva[विच्] follow verbs ending in @deva[दीर्घ] @deva[आ] with a @deva[सुबन्त] or @deva[उपसर्ग] in composition. Examples: @deva[सुदामन्], nom. @deva[सुदामा] (Ṛg Veda VI.20.7) 'liberal giver'; @deva[अश्वत्थामन्], nom. @deva[अश्वत्थामा]; @deva[सुधीवन्], nom. @deva[सुधीवा] 'wise'; @deva[भूरिदावन्], nom. @deva[भूरिदावा] (Ṛg Veda II.27.17); @deva[कीलालपाः] (Ṛg Veda X.91.14) 'nectar-drinker'; @deva[शुभंवाः] (Ṛg Veda IV.3.6).",
            "advanced": "In @deva[छन्दस्], @deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], and @deva[विच्] follow @deva[आकारान्त] @deva[धातु]s with @deva[सुबन्त]/उपसर्ग in @deva[समास]. The @deva[च] includes @deva[विच्]. Examples: @deva[सुदामन्] (Ṛg Veda VI.20.7), @deva[अश्वत्थामन्]; @deva[सुधीवन्] (via @ref[6.4.66]); @deva[भूरिदावन्] (Ṛg Veda II.27.17); @deva[घृतपावन्] (Yajur Veda VI.19). With @deva[विच्]: @deva[कीलालपाः] (Ṛg Veda X.91.14), @deva[शुभंवाः] (Ṛg Veda IV.3.6, @ref[7.3.46]), @deva[रामस्योपदाः] (@ref[3.3.106], Yajur Veda XXX.9)."
        }
    },
    "32075": {
        "en": {
            "simple": "The affixes @deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], and @deva[विच्] are also seen after other verbs (not just those ending in long @deva[आ]). This applies in ordinary language too, not just Vedic. Examples: @deva[सुशर्मा] 'one who destroys sin well', @deva[प्रातरित्वा] 'who goes early', @deva[विजावा] 'who brings forth'. The word 'also' removes all prior conditions—these affixes come even without an upapada.",
            "standard": "The affixes @deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], and @deva[विच्] are seen after other verbs besides @deva[आकारान्त] ones. The @deva[अनुवृत्ति] of @deva[छन्दसि] does **not** apply. Examples: @deva[सुशर्मन्], nom. @deva[सुशर्मा] 'destroyer of sin'; @deva[प्रातरित्वन्] (via @ref[6.1.71]), nom. @deva[प्रातरित्वा] 'early-goer'; @deva[विजावन्] (via @ref[6.4.41]), nom. @deva[विजावा] 'one who brings forth'; @deva[रेड्] 'one who injures' (from @deva[रिप्] + @deva[विच्] via @ref[7.3.86]). The word @deva[अपि] indicates these come even without @deva[उपपद]: @deva[पीवा], @deva[धीवा].",
            "advanced": "The affixes @deva[मनिन्], @deva[क्वनिप्], @deva[वनिप्], @deva[विच्] are @deva[दृश्यन्ते] after non-@deva[आकारान्त] @deva[धातु]s. No @deva[अनुवृत्ति] of @deva[छन्दसि]. Examples: @deva[सुशर्मन्] (from @deva[शृ] 'to injure'); @deva[प्रातरित्वन्] (@ref[6.1.71]); @deva[विजावन्] (@ref[6.4.41]); @deva[रेड्] (from @deva[रिप्] + @deva[विच्], @ref[7.3.86], Yajur Veda VI.18). The @deva[अपि] removes all @deva[उपाधि]—these affixes occur even @deva[निरुपपद]. @deva[दृश्यन्ते] indicates these are not universally applicable; forms are inferred only when attested."
        }
    },
    "32076": {
        "en": {
            "simple": "The affix @deva[क्विप्] is also seen after all verbs, whether they have an upapada or not, in both Vedic and modern Sanskrit. Examples: @deva[उखास्रत्] 'falling from the pot' (via @ref[6.4.24]), @deva[पर्णध्वत्] 'falling from the leaves', @deva[वाहाभ्रट्] 'falling from a car' (with lengthening by @ref[6.3.137]).",
            "standard": "The affix @deva[क्विप्] is seen after all verbs, with or without @deva[उपपद], in both @deva[छन्दस्] and @deva[भाषा]. Examples: @deva[उखायाः स्रंसते] = @deva[उखास्रत्] (via @ref[6.4.24]) 'falling from the pot'; @deva[पर्णध्वत्] 'falling from leaves'; @deva[वाहाद् भ्रश्यति] = @deva[वाहाभ्रश्], nom. @deva[वाहाभ्रट्] 'falling from a car'. The @deva[आ] is @deva[दीर्घ] by @ref[6.3.137]. See Ṛg Veda I.3.8.",
            "advanced": "The affix @deva[क्विप्] is @deva[दृश्यन्ते] after all @deva[धातु]s, @deva[सोपपद] or @deva[निरुपपद], in both @deva[छन्दस्] and @deva[भाषा]. Examples: @deva[उखास्रत्] (via @ref[6.4.24] @deva[संप्रसारण]); @deva[पर्णध्वत्]; @deva[वाहाभ्रश्], nom. @deva[वाहाभ्रट्]. The @deva[उपपद]-final @deva[आ] undergoes @deva[दीर्घ] by @ref[6.3.137]. Reference: Ṛg Veda I.3.8."
        }
    },
    "32077": {
        "en": {
            "simple": "The affixes @deva[क] and @deva[क्विप्] come after the verb @deva[स्था] 'to stand' when a case-inflected word or upasarga is in composition. Examples: @deva[शंस्थः] and @deva[शंस्थाः]. This rule removes the prohibition of @ref[3.2.14] which would otherwise require @deva[अच्] with certain upapadas like @deva[शम्].",
            "standard": "The affixes @deva[क] and @deva[क्विप्] follow @deva[स्था] 'to stand' with a @deva[सुबन्त] or @deva[उपसर्ग] in composition. This sūtra is necessary because @ref[3.2.4] would give @deva[क] and @ref[3.2.75] would give @deva[क्विप्], but @ref[3.2.14] prohibits @ref[3.2.4]. This sūtra removes that prohibition. Thus @deva[शंस्थः] and @deva[शंस्थाः] are valid. Without this rule, @deva[स्था] with @deva[शम्] would take @deva[अच्] by @ref[3.2.14].",
            "advanced": "The affixes @deva[क] and @deva[क्विप्] follow @deva[स्था] with @deva[सुबन्त]/उपसर्ग. This @deva[पुनर्वचन] is @deva[प्रतिषेधप्रतिषेधार्थ]: @ref[3.2.14] blocks @ref[3.2.4], and this sūtra removes that block. Result: @deva[शंस्थः] (with @deva[क]) and @deva[शंस्थाः] (with @deva[क्विप्]) are valid. Without this sūtra, @deva[स्था] with @deva[शम्] as @deva[उपपद] would require @deva[अच्] by @ref[3.2.14]."
        }
    },
    "32078": {
        "en": {
            "simple": "When habit is expressed, the affix @deva[णिनि] comes after a verb in composition with a case-inflected word, provided that word does **not** denote a genus. Examples: @deva[उष्णभोजी] 'one who habitually eats hot food', @deva[शीतभोजी] 'one who habitually eats cold food'. But not @deva[ब्राह्मणानामन्त्रयी] (since @deva[ब्राह्मण] denotes a genus)—we say @deva[ब्राह्मणानामन्त्रयिता] instead.",
            "standard": "When @deva[शील] (habit) is expressed, @deva[णिनि] follows a verb with a @deva[सुबन्त] in composition, provided the @deva[उपपद] does **not** denote @deva[जाति] (genus). Examples: @deva[उष्णभोजिन्], nom. @deva[उष्णभोजी] 'habitual hot-food eater'; @deva[शीतभोजी]. But with @deva[जातिवाचक] @deva[उपपद]: @deva[ब्राह्मणानामन्त्रयिता] 'inviter of Brāhmaṇas' (not @deva[ब्राह्मणानामन्त्रयी]). Without @deva[शील]: @deva[उष्णं भुङ्क्ते कदाचित्] 'he sometimes eats hot'. Vārttikas add: @deva[उदासारिन्], @deva[प्रत्यासारिन्]; skill-sense: @deva[साधुकारी], @deva[साधुदायी]; also @deva[ब्रह्मवादिन्].",
            "advanced": "@deva[शील] (habit) triggers @deva[णिनि] after a verb with @deva[सुबन्त] when the @deva[उपपद] is non-@deva[जातिवाचक]. Examples: @deva[उष्णभोजिन्], @deva[शीतभोजिन्]. @deva[जातिवाचक] blocks: @deva[ब्राह्मणानामन्त्रयिता] (not *@deva[ब्राह्मणानामन्त्रयी]). The @deva[सुपि] repetition (though in @deva[अनुवृत्ति]) excludes @deva[उपसर्ग]—contested by Siddhānta Kaumudī which allows @deva[अनुनायिन्], @deva[उपजीविन्]. @deva[वार्त्तिक]s: @deva[आसृ] with @deva[उद्]/प्रति (@deva[उदासारिन्]); @deva[कौशल]-sense (@deva[साधुकारी]); @deva[ब्रह्मवादिन्] after @deva[वद्] with @deva[ब्रह्म]."
        }
    },
    "32079": {
        "en": {
            "simple": "The affix @deva[णिनि] comes after a verb when the upapada denotes a standard of comparison for the agent. The meaning is 'doing something like that'. Examples: @deva[उष्ट्रक्रोशी] 'one who makes a noise like a camel', @deva[ध्वाङ्क्षराविन्] 'one who makes a noise like a crow'. This applies even when habit is not indicated or when genus is expressed.",
            "standard": "The affix @deva[णिनि] follows a verb when the @deva[सुबन्त] @deva[उपपद] is @deva[उपमान] (standard of comparison) for the @deva[कर्तृ]. Meaning: 'one who acts like X'. Examples: @deva[उष्ट्र इव क्रोशति] = @deva[उष्ट्रक्रोशिन्] 'camel-like noise-maker'; @deva[ध्वाङ्क्षराविन्] 'crow-like noise-maker'. This sūtra applies even without @deva[शील] or when @deva[जाति] is expressed. If the @deva[उपमान] is @deva[कर्म] (not @deva[कर्तृ]), no composition: @deva[अपूपानिव भक्षयति माषान्] 'he eats māṣa like apūpa'.",
            "advanced": "@deva[णिनि] follows a verb when the @deva[सुबन्त] @deva[उपपद] is @deva[उपमान] (comparison standard) of the @deva[कर्तृ]—the @deva[प्रत्ययार्थ] is 'acting like the @deva[उपमान]'. Examples: @deva[उष्ट्रक्रोशिन्], @deva[ध्वाङ्क्षराविन्]. This is @deva[अपवाद] to @ref[3.2.78] when @deva[शील] is absent or @deva[जाति] is expressed. Condition: @deva[उपमान] must be @deva[कर्तृ]; if @deva[कर्म], no @deva[समास]. For accent, see @ref[6.2.80]."
        }
    },
    "32080": {
        "en": {
            "simple": "The affix @deva[णिनि] comes after a verb in composition with a case-inflected word when a religious vow is expressed. Examples: @deva[स्थण्डिलशायिन्] 'one who has vowed to sleep on bare ground', @deva[अश्राद्धभोजिन्] 'one who has vowed not to eat during a śrāddha ceremony'. Without the vow sense, no composition: @deva[स्थण्डिले शेते देवदत्तः] 'Devadatta sleeps on bare ground'.",
            "standard": "The affix @deva[णिनि] follows a verb with a @deva[सुबन्त] in composition when @deva[व्रत] (religious vow) is expressed. The @deva[व्रत]-condition applies to the complete word (root + @deva[उपपद] + affix). Examples: @deva[स्थण्डिलशायिन्] 'vowed to sleep on bare ground'; @deva[अश्राद्धभोजिन्] 'vowed not to eat at śrāddha'. Without @deva[व्रत]-meaning, no composition: @deva[स्थण्डिले शेते देवदत्तः]. This is an exception to @ref[3.2.78], applying when @deva[शील] is absent or @deva[जाति] is expressed.",
            "advanced": "@deva[णिनि] follows a verb with @deva[सुबन्त] when @deva[व्रत] (scriptural vow) is expressed. The @deva[व्रत]-@deva[उपाधि] qualifies the @deva[समुदितार्थ] (complete derived word), not individual components. Examples: @deva[स्थण्डिलशायिन्], @deva[अश्राद्धभोजिन्]. Without @deva[व्रतार्थ], no @deva[समास]: @deva[स्थण्डिले शेते देवदत्तः]. This is @deva[अपवाद] to @ref[3.2.78] when @deva[शील] is absent or @deva[जाति] is expressed."
        }
    },
    "32081": {
        "en": {
            "simple": "The affix @deva[णिनि] comes optionally after a verb when continued repetition of an action (not mere habit) is expressed. Examples: @deva[कषायपायिणो गान्धाराः] 'the Gāndhāras are kaṣāya-drinkers' (via @ref[7.3.33]), @deva[क्षीरपायिण उशीनाराः] 'the Uśīnaras are milk-drinkers', @deva[सौवीरपायिणो बाह्लीकाः] 'the Bāhlīkas are sauvīra-drinkers'. The word 'diversely' means this affix doesn't apply everywhere—e.g., @deva[कुल्माषखादः] 'grain-eater' (not @deva[कुल्माषखादी]).",
            "standard": "The affix @deva[णिनि] comes @deva[विभाषया] (optionally) after a verb when @deva[आभीक्ष्ण्य] (zealous, assiduous practice—not mere habit) is expressed. Examples: @deva[कषायपायिन्] (via @ref[7.3.33] @deva[युक्]), nom. pl. @deva[कषायपायिणो गान्धाराः] 'the Gāndhāras are kaṣāya-drinkers'; @deva[क्षीरपायिण उशीनाराः]; @deva[सौवीरपायिणो बाह्लीकाः]. The @deva[विभाषा] indicates non-application elsewhere: @deva[कुल्माषखादः] (not *@deva[कुल्माषखादी]).",
            "advanced": "@deva[णिनि] comes @deva[विभाषया] when @deva[आभीक्ष्ण्य] (assiduous practice, distinct from @deva[शील]) is expressed. Examples: @deva[कषायपायिन्] (@ref[7.3.33] @deva[युगागम]), @deva[क्षीरपायिन्], @deva[सौवीरपायिन्]. The @deva[विभाषा] restricts application: @deva[कुल्माषखादः] uses @deva[अण्] (not @deva[णिनि]). @deva[आभीक्ष्ण्य] denotes zealous repetition, not habitual action."
        }
    },
    "32082": {
        "en": {
            "simple": "The affix @deva[णिनि] comes after the verb @deva[मन्] 'to think' when a case-inflected word is in composition. Examples: @deva[दर्शनीयमानी] 'one who thinks himself handsome', @deva[शोभनम्मानी] 'one who thinks himself beautiful'. The @deva[मन्] here is from the 4th conjugation, not the 8th, because @deva[विभाषा] continues from the previous rule.",
            "standard": "The affix @deva[णिनि] follows @deva[मन्] 'to think' (4th conjugation) with a @deva[सुबन्त] in composition. Examples: @deva[दर्शनीयमानिन्], nom. @deva[दर्शनीयमानी] 'one who thinks himself handsome'; @deva[शोभनम्मानी] 'one who thinks himself beautiful'. The @deva[दिवादि] @deva[मन्] is intended (not @deva[तनादि]) because @deva[विभाषा] continues in @deva[अनुवृत्ति]. Both forms give @deva[मानिन्] here, but they differ in the next sūtra where @deva[खश्] is added.",
            "advanced": "@deva[णिनि] follows @deva[मन्] 'to think' (@deva[दिवादि], not @deva[तनादि]) with @deva[सुबन्त]. Examples: @deva[दर्शनीयमानिन्], @deva[शोभनम्मानिन्]. The @deva[दिवादि] specification matters because @deva[विभाषा] continues in @deva[अनुवृत्ति]. While both @deva[गण]s yield @deva[मानिन्] here, the distinction becomes relevant in the next sūtra with @deva[खश्], where @deva[श्यन्] @deva[विकरण] would apply to @deva[दिवादि] but not @deva[तनादि]."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.73-3.2.82")
