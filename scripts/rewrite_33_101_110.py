# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33101": {
        "en": {
            "simple": "The form @deva[इच्छा] 'desire' is irregular. From @deva[इष्] + @deva[श] = @deva[इच्छा], without the @deva[यक्] that @ref[3.1.67] would require. @deva[वार्तिकs] add: @deva[परिसर्या] 'perambulation'; @deva[परिचर्या] 'service'; @deva[मृगया] 'hunting'.",
            "standard": "The word @deva[इच्छा] 'desire' is irregularly formed: @deva[इष्] + @deva[श] → @deva[इच्छ्] + @deva[अ] → @deva[इच्छा]. The irregularity: @deva[यक्] (required by @ref[3.1.67]) is not added. @deva[वार्तिकs] add other irregular forms: @deva[परिसर्या] 'perambulation'; @deva[परिचर्या] 'attendance, service'; @deva[मृगया] 'hunting'; @deva[अटाट्या] 'habit of wandering as mendicant'. From @deva[जागृ]: either @deva[जागरा] (with @deva[अ]) or @deva[जागर्या] (with @deva[श] bringing @deva[यक्]) 'waking'.",
            "advanced": "The @deva[निपातन] of @deva[इच्छा] blocks expected @deva[यक्]-insertion before @deva[श]. The @deva[वार्तिक] forms (@deva[परिसर्या], @deva[परिचर्या], @deva[मृगया], @deva[अटाट्या]) are similarly irregular feminine nominals. The @deva[जागृ] doublet (@deva[जागरा]/जागर्या) shows the expected @deva[यक्] in one form but not the other."
        }
    },
    "33102": {
        "en": {
            "simple": "After derivative verbs (desideratives, causatives, intensives, denominatives), the affix @deva[अ] is used to form feminine words. Examples: @deva[चिकीर्षा] 'desire to do'; @deva[जिहीर्षा] 'desire to take'; @deva[पुत्रकाम्या] 'desire for a son'.",
            "standard": "After @deva[प्रत्ययान्त] (affix-ending) verbs—derivative roots like desideratives, causatives, intensives, denominatives—the affix @deva[अ] forms feminine nouns. Though taking affixes, these are called @deva[धातु] by @ref[3.1.32]. Examples: @deva[कृ] + @deva[सन्] = @deva[चिकीर्ष्] → @deva[चिकीर्ष्] + @deva[अ] (@ref[6.4.48]) + @deva[टाप्] (@ref[4.1.4]) = @deva[चिकीर्षा] 'desire to do'; @deva[जिहीर्षा] 'desire to take'; @deva[पुत्रकाम्या] 'desire for a son'; @deva[कण्डूया] 'itch'.",
            "advanced": "The @deva[प्रत्ययान्त] condition identifies secondary/derived roots formed by @deva[सन्] (desiderative), @deva[णिच्] (causative), @deva[यङ्] (intensive), or denominative affixes. These take @deva[अ] + @deva[टाप्] for feminine abstract nouns expressing desire, causing, intensity, etc. The rule appears also as @deva[अः प्रत्ययात्]."
        }
    },
    "33103": {
        "en": {
            "simple": "The affix @deva[अ] comes after verbs with a heavy (long/conjunct) vowel that end in a consonant, to form feminine words. This blocks @deva[क्तिन्]. Examples: @deva[कुण्डा] 'adulteress'; @deva[ईहा] 'effort'; @deva[ऊहा] 'supplying an ellipsis'.",
            "standard": "After verbs with @deva[गुरु] (prosodically heavy) vowel ending in a consonant, @deva[अ] applies for feminine words, blocking @deva[क्तिन्]. Examples: @deva[कुण्डा] 'adulteress'; @deva[हुण्डा] 'tigress'; @deva[ईहा] 'effort'; @deva[ऊहा] 'inference, supplying ellipsis'. Without heavy vowel: @deva[भक्तिः] 'devotion'. Without consonant ending: @deva[नीतिः] 'policy'.",
            "advanced": "The @deva[गुरु] condition requires a prosodically heavy vowel—long vowel or vowel followed by conjunct consonant. The @deva[हलन्त] condition requires consonant-final roots. Both conditions must be met for @deva[अ] to apply. Counter-examples show @deva[क्तिन्] applies when either condition fails: @deva[भक्ति] (short vowel), @deva[नीति] (vowel-final)."
        }
    },
    "33104": {
        "en": {
            "simple": "The affix @deva[अङ्] comes after @deva[षित्] (indicatory @deva[ष्]) verbs and the @deva[भिदादि] class to form feminine words. Examples: @deva[जरा] 'old age'; @deva[त्रपा] 'shame'; @deva[भिदा] 'breaking'; @deva[छिदा] 'cutting'; @deva[धारा] 'stream'.",
            "standard": "Verbs with indicatory @deva[षि] (like @deva[जॄष्], whose real root is @deva[जॄ]) and the @deva[भिदादि] class take @deva[अङ्] for feminine. Examples: @deva[जॄष्] → @deva[जरा] 'old age' (@ref[7.4.16]); @deva[त्रपुष्] → @deva[त्रपा] 'bashfulness'. @deva[भिदादि]: @deva[भिदा] 'breaking' (alternative: @deva[भित्तिः]); @deva[छिदा] 'cutting'; @deva[आरा] 'knife'; @deva[धारा] 'stream'.",
            "advanced": "The @deva[भिदादि] class is collected from various @deva[गणs]: @deva[भिदा], @deva[छिदा], @deva[विदा], @deva[क्षिपा], @deva[गुहा], @deva[श्रद्धा], @deva[मेधा], @deva[गोधा], @deva[आरा], @deva[हारा], @deva[कारा], @deva[क्षिपा], @deva[भारा], @deva[धारा], @deva[लेखा], @deva[रेखा], @deva[चूडा], @deva[पीडा], @deva[वपा], @deva[वसा], @deva[मृजा], @deva[सृजा], @deva[कृपा] (with @deva[संप्रसारण])."
        }
    },
    "33105": {
        "en": {
            "simple": "Both @deva[अङ्] and @deva[युच्] come after @deva[चिन्त्] 'to think', @deva[पूज्] 'to worship', @deva[कथ्] 'to narrate', @deva[कुम्ब्] 'to cover', @deva[चर्च्] 'to learn' for feminine words. Examples: @deva[चिन्ता]/चिन्तना 'thought'; @deva[पूजा]/पूजना 'worship'; @deva[कथा]/कथना 'narration'.",
            "standard": "After @deva[चिन्त्], @deva[पूज्], @deva[कथ्], @deva[कुम्ब्], @deva[चर्च्] (all @deva[चुरादि]/10th class verbs), both @deva[अङ्] and @deva[युच्] apply for feminine. The @deva[च] draws @deva[युच्] from @ref[3.3.107]. Examples with @deva[अङ्]: @deva[चिन्ता] 'thought'; @deva[पूजा] 'worship'; @deva[कथा] 'narration'; @deva[कुम्बा] 'covering, thick petticoat'; @deva[चर्चा] 'recitation'. With @deva[युच्]: @deva[चिन्तना], @deva[पूजना] etc. (@ref[7.1.1]).",
            "advanced": "These @deva[चुरादि] verbs would exclusively take @deva[युच्] by @ref[3.3.107] (being @deva[णिजन्त]). This @deva[सूत्र] provides @deva[अङ्] as an alternative, creating doublets. The @deva[अङ्] forms (@deva[चिन्ता], @deva[पूजा]) are more common than the @deva[युच्] forms (@deva[चिन्तना], @deva[पूजना])."
        }
    },
    "33106": {
        "en": {
            "simple": "The affix @deva[अङ्] comes after @deva[आ]-final verbs when an @deva[उपसर्ग] is in composition, to form feminine words. This supersedes @deva[क्तिन्]. Examples: @deva[प्रदा]; @deva[प्रधा]; @deva[उपदा]; @deva[उपधा]. Also: @deva[श्रद्धा] 'faith'; @deva[अन्तर्धा] 'disappearance'.",
            "standard": "After verbs ending in long @deva[आ] with an @deva[उपसर्ग], @deva[अङ्] applies for feminine, superseding @deva[क्तिन्]. Examples: @deva[प्रदा] 'giving'; @deva[प्रधा] 'placing forth'; @deva[उपदा]; @deva[उपधा]. A @deva[वार्तिक] treats @deva[श्रत्] and @deva[अन्तर्] as @deva[उपसर्गs] for this rule: hence @deva[श्रद्धा] 'faith' (@ref[1.4.59]); @deva[अन्तर्धा] 'disappearance'.",
            "advanced": "The @deva[आकारान्त-उपसर्गयुक्त] condition specifies @deva[आ]-final roots with prefixes. The @deva[वार्तिक] extension to @deva[श्रत्] and @deva[अन्तर्] (normally not @deva[उपसर्गs]) allows @deva[श्रद्धा] and @deva[अन्तर्धा] under this rule. This @deva[अपवाद] blocks @deva[क्तिन्] for these compound feminine forms."
        }
    },
    "33107": {
        "en": {
            "simple": "The affix @deva[युच्] comes after @deva[णि]-ending verbs (causatives), @deva[आस्] 'to sit', and @deva[श्रन्थ्] 'to loosen', to form feminine words. Examples: @deva[कारणा] 'causing to do'; @deva[हारणा] 'causing to take'; @deva[आसना] 'sitting'; @deva[श्रन्थना] 'loosening'.",
            "standard": "After @deva[णि]-ending (causative) verbs, @deva[आस्] 'to sit', and @deva[श्रन्थ्] 'to loosen', @deva[युच्] applies for feminine, excluding @deva[अ] (@ref[3.3.102]). Examples: @deva[कारि] (@deva[कृ] + @deva[णिच्]) + @deva[युच्] → @deva[कारणा] 'causing' (@deva[इ] elided by @ref[6.4.51]); @deva[हारणा]; @deva[आसना]; @deva[श्रन्थना]. @deva[वार्तिकs] add @deva[घट्ट] → @deva[घट्टना]; @deva[वन्द] → @deva[वन्दना]; @deva[विद्] → @deva[वेदना]; @deva[इष्] (non-desiderative) → @deva[अध्येषणा], @deva[अन्वेषणा].",
            "advanced": "Feminine affixes inter se supersede each other totally, but not general @deva[कृत्] affixes. Thus @deva[युच्] blocks @deva[अ] (@ref[3.3.102]) but not @deva[ण्यत्]—hence @deva[आस्या] (feminine of @deva[आस्य] from @deva[ण्यत्]) coexists with @deva[आसना]. The @deva[श्रन्थि] here is @deva[क्र्यादि] class 'to loosen', not @deva[चुरादि] (which would be @deva[णिजन्त] automatically). @deva[वार्तिक]: @deva[परि] + @deva[इष्] optionally: @deva[पर्येषणा] or @deva[परीष्टिः]."
        }
    },
    "33108": {
        "en": {
            "simple": "The affix @deva[ण्वुल्] comes after verbs when the feminine word formed is a disease name. This blocks @deva[क्तिन्] etc. Examples: @deva[प्रच्छर्दिका] 'vomiting'; @deva[प्रवाहिका] 'diarrhea'; @deva[विवर्चिका] 'itch'. Sometimes not: @deva[शिरोर्तिः] 'headache'.",
            "standard": "When forming feminine @deva[आख्या] (appellative) for disease names, @deva[ण्वुल्] applies after roots, blocking @deva[क्तिन्] etc. The @deva[बहुलम्] 'diversely' indicates usual grammatical license. Examples: @deva[प्रच्छर्दिका] 'vomiting' (@ref[7.1.1]); @deva[प्रवाहिका] 'diarrhea'; @deva[विवर्चिका] 'itch/scab'. Exceptions: @deva[शिरोर्तिः] 'headache' (not @deva[ण्वुल्]).",
            "advanced": "@deva[वार्तिकs]: (1) @deva[ण्वुल्] for simply pointing out root meaning: @deva[आशिका], @deva[शायिका]. (2) @deva[इक्] and @deva[श्तिप्] for root-indication: @deva[भिदिः], @deva[पचतिः] (used in @deva[सूत्रs] to display roots). (3) @deva[कार] for letters: @deva[ककारः] 'letter क', @deva[अकारः]. (4) @deva[इफ] for @deva[र]: @deva[रेफ]. (5) @deva[इञ्] after @deva[अज्] etc.: @deva[आजिः], @deva[आतिः], @deva[आदिः]. (6) @deva[इक्] after @deva[कृष्] etc.: @deva[कृषिः], @deva[किरिः]."
        }
    },
    "33109": {
        "en": {
            "simple": "The affix @deva[ण्वुल्] comes after verbs when the feminine word is an appellative (name). Examples: @deva[उद्दालकपुष्पभञ्जिका] 'a game of crushing uddālaka flowers'; @deva[शालभञ्जिका] 'a game'; @deva[तालभञ्जिका].",
            "standard": "When forming feminine @deva[संज्ञा] (appellatives/names), @deva[ण्वुल्] applies after roots. Examples: @deva[उद्दालकपुष्पभञ्जिका] 'a game played in eastern districts crushing uddālaka flowers'; @deva[वरणपुष्पप्रवाहिका] 'a game'; @deva[आभ्यूषखादिका]; @deva[आचोषखादिका]; @deva[शालभञ्जिका]; @deva[तालभञ्जिका].",
            "advanced": "The @deva[संज्ञायाम्] condition specifies appellative/naming function. These compound feminine nouns denote specific games, activities, or items. The @deva[ण्वुल्] → @deva[अक] (@ref[7.1.1]) with @deva[टाप्] feminine creates @deva[इका]-ending words."
        }
    },
    "33110": {
        "en": {
            "simple": "The affix @deva[इञ्] comes optionally after roots when expressing question and answer, along with @deva[ण्वुल्] and other affixes. Example Q: @deva[कां कारिम् अकार्षीः] 'what work did you do?' A: @deva[सर्वां कारिम् अकार्षम्] 'I did all work'. Alternatives: @deva[कारिकाम्], @deva[कृत्याम्], @deva[कृतिम्], @deva[क्रियाम्].",
            "standard": "In @deva[आख्यानपरिप्रश्न] (question-and-answer) contexts, @deva[इञ्] applies optionally alongside @deva[ण्वुल्] (from previous rule) and other applicable affixes. The @deva[च] draws @deva[ण्वुल्]; @deva[वा] 'optionally' allows subsequent-rule affixes. Q: @deva[कां त्वं कारिम् अकार्षीः] 'what work did you do?' A: @deva[सर्वां कारिम् अकार्षम्]. Alternatives: @deva[कारिकाम्], @deva[कृत्याम्], @deva[कृतिम्], @deva[क्रियाम्].",
            "advanced": "The compound @deva[आख्यानपरिप्रश्न] ('answer-question', logically reversed) follows @ref[2.2.34] (fewer syllables first). The @deva[वा] creates optionality with all applicable affixes: @deva[इञ्] → @deva[कारि]; @deva[ण्वुल्] → @deva[कारिका]; @deva[क्यप्] → @deva[कृत्या]; @deva[क्तिन्] → @deva[कृति]; @deva[श] → @deva[क्रिया]. Without Q&A context: only @deva[कृतिः], @deva[हृतिः] etc."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.101-3.3.110")
