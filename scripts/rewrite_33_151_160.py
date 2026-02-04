# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33151": {
        "en": {
            "simple": "When wonder is expressed by words other than @deva[यच्च] and @deva[यत्र], the first future (@deva[लृट्]) is used—except when @deva[यदि] is used. Example: @deva[आश्चर्यम् अन्धो नाम पर्वतमारोक्ष्यति] 'wonder! a blind man will climb the mountain'.",
            "standard": "For @deva[चित्रीकरण] (wonder) expressed without @deva[यच्च/यत्र] (which take @deva[लिङ्] by @ref[3.3.150]), and without @deva[यदि], the first future @deva[लृट्] is used instead of the potential. Examples: @deva[आश्चर्यम्], @deva[चित्रम्], @deva[अद्भुतम्] + @deva[अन्धो नाम पर्वतमारोक्ष्यति] 'it's astonishing that a blind man will climb the mountain'.",
            "advanced": "This complements @ref[3.3.150]: @deva[यच्च/यत्र] + @deva[चित्रीकरण] → @deva[लिङ्]; other @deva[चित्रीकरण]-expressions (excluding @deva[यदि]) → @deva[लृट्]. The @deva[यदि]-exclusion (@deva[यद्यवर्जम्]) means @deva[यदि]-clauses expressing wonder don't take @deva[लृट्] mandatorily. @deva[लृट्] supersedes @deva[लिङ्] in non-@deva[यच्च/यत्र] wonder contexts."
        }
    },
    "33152": {
        "en": {
            "simple": "When @deva[उत] and @deva[अपि] are used with the same meaning (namely 'surely, certainly'), the potential (@deva[लिङ्]) is used for all tenses. Examples: @deva[उत कुर्यात्] 'surely he does', @deva[अपि कुर्यात्] 'certainly he does'.",
            "standard": "@deva[लिङ्] is mandated for all times when @deva[उत] and @deva[अपि] share the meaning @deva[बाढम्] (surely, certainly, assuredly). This excludes all other tense-affixes. Examples: @deva[उत कुर्यात्] / @deva[अपि कुर्यात्] 'certainly he does'; @deva[उताधीयीत] / @deva[अप्यधीयीत] 'certainly he studies (will study, studied)'.",
            "advanced": "The condition @deva[समर्थयोः] means both @deva[उत] and @deva[अपि] must convey @deva[बाढम्]-artha (affirmation). With this @deva[समानार्थ]-condition, @deva[लिङ्] applies @deva[सर्वकालिकम्], excluding all other lakāras. This concludes the @deva[अधिकार] begun at @ref[3.3.141]."
        }
    },
    "33153": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) is used when expressing one's wish, except when @deva[कच्चित्] is in composition. Example: @deva[कामो मे भुञ्जीत भवान्] 'it is my wish that you eat'. But with @deva[कच्चित्]: @deva[कच्चिज्जीवति ते माता] 'I hope your mother lives' (not @deva[लिङ्]).",
            "standard": "For @deva[कामप्रवेदन] (expression of one's wish), @deva[लिङ्] is used, debarring other tenses. @deva[कामो मे भुञ्जीत भवान्] = @deva[अभिलाषो मे भुञ्जीत भवान्] 'my wish is that you eat'. The @deva[कच्चित्]-exception allows other tenses: @deva[कच्चिज्जीवति ते माता] 'I hope your mother lives'.",
            "advanced": "@deva[कामप्रवेदना] is the verbal expression of wish/desire. @deva[लिङ्] mandatorily applies except with @deva[कच्चित्]-upapada. The @deva[कच्चित्]-exclusion (@deva[कच्चिद्वर्जम्]) permits contextually-appropriate lakāras: @deva[कच्चिज्जीवति] uses @deva[लट्] for present. This distinguishes hopeful inquiry from direct wish-expression."
        }
    },
    "33154": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) is used when expressing expectation or belief in someone's ability to do something, as conveyed by @deva[अलम्] 'capable'—but not when expressing alarm. Example: @deva[अलं देवदत्तो ग्रामं गच्छेत्] 'Devadatta is capable of going to the village'.",
            "standard": "@deva[संभावन] means expectation or supposition of ability. When @deva[अलम्] (capable, enough) expresses this (not alarm @deva[त्रास]), @deva[लिङ्] is used. Example: @deva[अलं देवदत्तो ग्रामं गच्छेत्] 'Devadatta is quite capable of going to the village'. The @deva[अलम्]-qualifier distinguishes ability-expectation from fear-based expectation.",
            "advanced": "@deva[संभावन] qualified by @deva[अलम्]-artha (capability, sufficiency) triggers @deva[लिङ्]. The @deva[त्रास]-exclusion (@deva[त्रासवर्जम्]) means alarm/fear contexts don't take mandatory @deva[लिङ्]. @deva[अलम्] here denotes @deva[शक्ति/पर्याप्ति]: 'X has the capacity for Y'. This captures confident expectation, not anxious apprehension."
        }
    },
    "33155": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) is optionally used when a verb expressing expectation accompanies another verb, but not when @deva[यत्] is used. Example: @deva[संभावयामि देवदत्तो ग्रामं गच्छेत्] 'I suppose Devadatta may go to the village'.",
            "standard": "When a verb expressing @deva[संभावन] (expectation, supposition)—like @deva[संभावय], @deva[अपि], @deva[अपिनाम]—governs another verb, @deva[लिङ्] is optionally used for the governed verb. The @deva[यत्]-exception means @deva[यत्]-constructions don't follow this. The @deva[अलम्]-qualification from @ref[3.3.154] continues.",
            "advanced": "The @deva[संभाव्य]-verb (expressing supposition) is called @deva[उपश्लेष]-dhātu. @deva[लिङ्] is @deva[विकल्पेन] for the subordinate verb under @deva[संभावन]-artha governed by @deva[अलम्]-conditions. @deva[यत्]-exclusion: @deva[यत्]-headed constructions follow different rules. Optionality allows time-appropriate alternatives."
        }
    },
    "33156": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) is optionally used for verbs expressing both the condition (cause) and its consequence (effect) in conditional sentences. Example: @deva[यदि वर्षेत् यवा रोहेयुः] 'if it rains, the barley may grow'.",
            "standard": "@deva[हेतु] (cause/condition) and @deva[हेतुमत्] (consequence/effect) both optionally take @deva[लिङ्]. In conditional sentences, the potential may be used in both the protasis and apodosis. This supersedes other tenses. Example: @deva[यदि वर्षेत् यवा रोहेयुः] 'if it should rain, the barley might grow'.",
            "advanced": "For @deva[हेतुहेतुमद्भाव] (causal relationship), @deva[लिङ्] is @deva[विकल्पेन] available for both @deva[हेतु] (protasis/condition) and @deva[हेतुमत्] (apodosis/consequence). This creates optionality in conditional sentences: @deva[लिङ्] in one or both clauses, or time-appropriate lakāras. This is the @deva[हेतु]-condition referenced in @ref[3.3.139]."
        }
    },
    "33157": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) or imperative (@deva[लोट्]) is used when another verb expressing wishing is in construction. Example: @deva[इच्छामि भुञ्जीत भवान्] or @deva[इच्छामि भुङ्क्तां भवान्] 'I wish that you may eat'.",
            "standard": "When verbs meaning 'wish' (@deva[इष्], @deva[कम्], @deva[प्रार्थ्], etc.) govern another verb, @deva[लिङ्] or @deva[लोट्] is used for the governed verb. Both supersede other tenses. Examples: @deva[इच्छामि/कामये/प्रार्थये भुञ्जीत भवान्] or @deva[भुङ्क्तां भवान्] 'I wish/desire/pray that you eat'.",
            "advanced": "When @deva[इच्छादि]-dhātus (desiderative verbs) govern a subordinate verb, that verb takes @deva[लिङ्] or @deva[लोट्], both superseding contextual lakāras. The choice between @deva[लिङ्] and @deva[लोट्] depends on politeness/directness: @deva[लिङ्] for optative wish, @deva[लोट्] for more direct request-form."
        }
    },
    "33158": {
        "en": {
            "simple": "The infinitive affix @deva[तुमुन्] is used when a verb meaning 'to wish' is in construction, provided the agent of both verbs is the same. Example: @deva[इच्छति भोक्तुम्] 'he wishes to eat'.",
            "standard": "When the same agent controls both the 'wish'-verb and the dependent verb, @deva[तुमुन्] (infinitive) is used. Examples: @deva[इच्छति/वष्टि/वाञ्छति भोक्तुम्] 'he wishes to eat'; @deva[पिनाकपाणिं पतिमाप्तुमिच्छति] 'she wishes to obtain the Pināka-handed (Śiva) as husband'. Different agents preclude @deva[तुमुन्].",
            "advanced": "@deva[समानकर्तृक]-condition: when @deva[इच्छादि]-verb and dependent verb share @deva[कर्तृ], @deva[तुमुन्] applies. This is @deva[कृत्]-formation, not @deva[तिङ्]. Different @deva[कर्तृ] triggers @deva[लिङ्]/etc. per @ref[3.3.157]. Example: @deva[इच्छामि भुञ्जीत भवान्] (different agents) vs. @deva[इच्छामि भोक्तुम्] (same agent)."
        }
    },
    "33159": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) is also used when wish-verbs are in construction and the agent is the same. Example: @deva[भुञ्जीय इति इच्छति] 'he wishes that he may eat' (same person wishing and eating).",
            "standard": "With same-agent wish-constructions, @deva[लिङ्] can also be used (alongside @deva[तुमुन्] from @ref[3.3.158]). Examples: @deva[भुञ्जीयेतीच्छति] 'he wishes he may eat'; @deva[अधीयीयेतीच्छति] 'he wishes he will read'. When non-completion is implied, the conditional applies per @ref[3.3.139].",
            "advanced": "This extends @ref[3.3.158]: @deva[समानकर्तृक] + @deva[इच्छादि] permits both @deva[तुमुन्] and @deva[लिङ्]. @deva[लिङ्] carries @deva[इति]-quotative structure: @deva[भुञ्जीय इति इच्छति]. For @deva[क्रियातिपत्ति], @deva[लृङ्] applies per @ref[3.3.139] @deva[अधिकार]. This creates three options: @deva[तुमुन्], @deva[लिङ्], or @deva[लृङ्] (with non-completion)."
        }
    },
    "33160": {
        "en": {
            "simple": "For roots meaning 'to wish' themselves, the potential (@deva[लिङ्]) may optionally be used for present tense. Examples: @deva[इच्छति] or @deva[इच्छेत्] 'he wishes'; @deva[कामयते] or @deva[कामयेत] 'he desires'.",
            "standard": "For @deva[इच्छादि]-dhātus (wish-roots), @deva[लिङ्] is optionally used where @deva[लट्] (present) would otherwise apply. Examples: @deva[इच्छति/इच्छेत्] 'he wishes'; @deva[वष्टि/उश्यात्] 'he desires'; @deva[कामयते/कामयेत] 'he wishes'. This ordains @deva[लिङ्] as a present-tense alternative.",
            "advanced": "This ordains @deva[लिङ्] for @deva[वर्तमान]-artha specifically with @deva[इच्छादि]-dhātus themselves. @deva[विकल्पेन] between @deva[लट्] and @deva[लिङ्]: @deva[इच्छति] (@deva[लट्]) ~ @deva[इच्छेत्] (@deva[लिङ्]); @deva[वष्टि] ~ @deva[उश्यात्]; @deva[कामयते] ~ @deva[कामयेत]. The potential conveys wish-nature even in stating present desire."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.151-3.3.160")
