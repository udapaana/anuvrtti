# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33021": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[इङ्] 'to study'. Examples: @deva[अध्यायः] 'a lesson/chapter'; @deva[उपाध्यायः] 'a teacher' (one from whom one studies).",
            "standard": "After @deva[इङ्] 'to read/study', @deva[घञ्] is added, blocking @deva[अच्] (@ref[3.3.56]). Thus @deva[अधि] + @deva[इ] + @deva[घञ्] → @deva[अध्यायः] 'lesson, chapter'; @deva[उपाध्यायः] 'teacher' (one near whom one studies). A @deva[वार्तिक] notes: when related as ablative, feminine forms @deva[उपाध्याया] or @deva[उपाध्यायी] (with optional @deva[ङीष्]) are valid for 'female teacher'.",
            "advanced": "The derivation: @deva[अधि] + @deva[इ] + @deva[घञ्] → @deva[अधि] + @deva[ऐ] + @deva[अ] (by @deva[वृद्धि]) → @deva[अध्याय]. A @deva[वार्तिक] extends @deva[घञ्] to @deva[शॄ] when the meaning is 'wind', 'color', or 'cessation': @deva[शारः] 'wind', 'green color'. The Vedic citation @deva[गौरिवाकृतमीशारः प्रायेण शिशिरे कृशः] illustrates this usage."
        }
    },
    "33022": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[रू] 'to roar' when an @deva[उपसर्ग] (prefix) is in composition. Examples: @deva[संरावः] 'clamor'; @deva[उपरावः] 'secondary sound'. Without prefix: @deva[रवः] 'sound'.",
            "standard": "When @deva[रू] 'to roar/sound' is compounded with an @deva[उपसर्ग], @deva[घञ्] is applied, blocking @deva[अप्] (@ref[3.3.57]). Examples: @deva[सम्] + @deva[रू] + @deva[घञ्] → @deva[संरावः] 'clamor'; @deva[उप] + @deva[रू] + @deva[घञ्] → @deva[उपरावः]. Without @deva[उपसर्ग], @deva[अप्] applies: @deva[रवः] 'sound'.",
            "advanced": "The condition @deva[सोपसर्गात्] restricts @deva[घञ्] to prefixed forms of @deva[रू]. The @deva[अपवाद] relationship blocks @deva[अप्] (@ref[3.3.57]) when the prefix condition is met. This distinction creates minimal pairs: @deva[संरावः] (with @deva[घञ्]) vs. @deva[रवः] (with @deva[अप्])."
        }
    },
    "33023": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[यु] 'to join', @deva[द्रु] 'to run', and @deva[दु] 'to burn' when compounded with @deva[सम्]. Examples: @deva[संयावः]; @deva[सन्द्रावः]; @deva[सन्दावः]. But: @deva[प्रयवः] (with different prefix).",
            "standard": "After @deva[यु], @deva[द्रु], and @deva[दु] compounded specifically with @deva[सम्], @deva[घञ्] is prescribed. Thus: @deva[सम्] + @deva[यु] + @deva[घञ्] → @deva[संयावः]; @deva[सम्] + @deva[द्रु] → @deva[सन्द्रावः]; @deva[सम्] + @deva[दु] → @deva[सन्दावः]. With other prefixes, @deva[घञ्] doesn't apply: @deva[प्रयवः] (not *@deva[प्रयावः]).",
            "advanced": "The restriction to @deva[सम्] demonstrates the precise conditioning of affix application. The three roots @deva[यु] (second conjugation, 'to mix/join'), @deva[द्रु] (first conjugation, 'to run'), and @deva[दु] (first conjugation, 'to burn/distress') each show @deva[वृद्धि] of the root vowel before @deva[घञ्]: @deva[यु] → @deva[याव]; @deva[द्रु] → @deva[द्राव]; @deva[दु] → @deva[दाव]."
        }
    },
    "33024": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[श्रि] 'to resort to', @deva[नी] 'to lead', and @deva[भू] 'to be' when NOT compounded with an @deva[उपसर्ग]. Examples: @deva[श्रायः] 'shelter'; @deva[नायः] 'means'; @deva[भावः] 'condition'. With prefixes: @deva[प्रश्रयः], @deva[प्रणयः], @deva[प्रभवः].",
            "standard": "Without an @deva[उपसर्ग], @deva[घञ्] (blocking @deva[अच्] of @ref[3.3.56]) follows @deva[श्रि], @deva[नी], @deva[भू]: @deva[श्रायः] 'shelter'; @deva[नायः] 'means/method'; @deva[भावः] 'state/condition'. With prefixes, different affixes apply: @deva[प्रश्रयः] 'respect'; @deva[प्रणयः] 'love'; @deva[प्रभवः] 'source'. Note: @deva[प्रभाव] ('splendor') is a @deva[समास] compound (@deva[प्र] + @deva[भाव] 'excellent condition'), not @deva[प्रभू] + @deva[घञ्].",
            "advanced": "The condition @deva[अनुपसर्गात्] (without prefix) restricts these three roots. The form @deva[नय] in @deva[नयो राज्ञः] 'the king's policy' uses @deva[अच्] by @ref[3.3.113] (@deva[बहुलम्] provision). The distinction between @deva[प्रभाव] (compound) and *@deva[प्रभाव] (hypothetical prefixed form) shows how semantic analysis determines derivational path."
        }
    },
    "33025": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[क्षु] 'to sneeze' and @deva[स्रु] 'to flow' when compounded with @deva[वि]. Examples: @deva[विक्षावः] 'cough'; @deva[विश्रावः] 'flowing forth, celebrated'. Without @deva[वि]: @deva[क्षवः], @deva[स्रवः].",
            "standard": "When the prefix @deva[वि] is in composition, @deva[घञ्] (blocking @deva[अप्] of @ref[3.3.57]) follows @deva[क्षु] 'to sneeze' and @deva[स्रु] 'to flow/move'. Thus: @deva[वि] + @deva[क्षु] + @deva[घञ्] → @deva[विक्षावः] 'cough'; @deva[वि] + @deva[स्रु] → @deva[विश्रावः] 'flowing forth' or 'celebrated'. Without the prefix: @deva[क्षवः] 'sneeze'; @deva[स्रवः] 'flow'.",
            "advanced": "The @deva[वि] prefix condition creates an @deva[अपवाद] to @ref[3.3.57]. The root @deva[स्रु] (listed as @deva[श्रु] in some readings) means 'to move/flow' here. The form @deva[विश्रावः] with meaning 'celebrated' shows semantic extension from the literal 'flowing/spreading forth' (of fame)."
        }
    },
    "33026": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[नी] 'to lead' when compounded with @deva[अव] or @deva[उत्]. Examples: @deva[अवनायः] 'throwing down'; @deva[उन्नायः] 'elevation'.",
            "standard": "With prefixes @deva[अव] 'down' or @deva[उत्] 'up', @deva[नी] takes @deva[घञ्]. Thus: @deva[अव] + @deva[नी] + @deva[घञ्] → @deva[अवनायः] 'throwing down'; @deva[उत्] + @deva[नी] → @deva[उन्नायः] 'elevation'. The form @deva[उन्नयः] in @deva[उन्नयः पदार्थानाम्] 'elevation of objects' uses @deva[अच्] by @ref[3.3.113] instead.",
            "advanced": "This @deva[सूत्र] specifies two prefixes (@deva[अव], @deva[उत्]) for @deva[नी] to take @deva[घञ्]. The existence of @deva[उन्नयः] alongside @deva[उन्नायः] demonstrates the @deva[बहुलम्] (diverse/optional) nature of affix application mentioned in @ref[3.3.113]. Both forms are attested with the same prefix but different affixes."
        }
    },
    "33027": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[द्रु] 'to run', @deva[स्तु] 'to praise', and @deva[स्रु] 'to flow' when compounded with @deva[प्र]. Examples: @deva[प्रद्रावः]; @deva[प्रस्तावः]; @deva[प्रस्रावः]. Without @deva[प्र]: @deva[द्रवः], @deva[स्तवः], @deva[स्रवः].",
            "standard": "With the prefix @deva[प्र], the roots @deva[द्रु] 'to run', @deva[स्तु] 'to praise', and @deva[स्रु] 'to flow' take @deva[घञ्]. Examples: @deva[प्र] + @deva[द्रु] → @deva[प्रद्रावः] 'flight'; @deva[प्र] + @deva[स्तु] → @deva[प्रस्तावः] 'introduction, prelude'; @deva[प्र] + @deva[स्रु] → @deva[प्रस्रावः] 'urination'. Without @deva[प्र]: @deva[द्रवः] 'running', @deva[स्तवः] 'praise', @deva[स्रवः] 'flow'.",
            "advanced": "Each root shows @deva[वृद्धि] before @deva[घञ्]: @deva[द्रु] → @deva[द्राव]; @deva[स्तु] → @deva[स्ताव]; @deva[स्रु] → @deva[स्राव]. The term @deva[प्रस्तावः] has acquired the specialized meaning 'introduction' or 'prelude' (as in musical/literary contexts), demonstrating semantic development beyond the literal 'praising forth'."
        }
    },
    "33028": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[पू] 'to purify' with @deva[निर्], and after @deva[लू] 'to cut' with @deva[अभि]. Examples: @deva[निष्पावः] 'winnowing'; @deva[अभिलावः] 'moving'. Without these prefixes: @deva[पवः], @deva[लवः].",
            "standard": "By @ref[1.3.10] (which pairs items in sequence), @deva[निर्] goes with @deva[पू] and @deva[अभि] with @deva[लू]. Thus: @deva[निर्] + @deva[पू] + @deva[घञ्] → @deva[निष्पावः] 'winnowing' (the @deva[स्] of @deva[निस्] becomes @deva[ष्] before @deva[प]); @deva[अभि] + @deva[लू] → @deva[अभिलावः] 'moving'. @deva[पू] includes both @deva[पूङ्] and @deva[पूञ्]. Without the specified prefixes: @deva[पवः] 'wind', @deva[लवः] 'cutting'.",
            "advanced": "The @deva[यथासंख्य] (sequential correspondence) principle of @ref[1.3.10] pairs @deva[निर्]-@deva[पू] and @deva[अभि]-@deva[लू]. The sandhi @deva[निर्] + @deva[पू] → @deva[निष्पाव] involves @deva[विसर्ग] → @deva[ष्] before @deva[प]. Both variants of @deva[पू] (@deva[पूङ्] and @deva[पूञ्], ninth conjugation) are included."
        }
    },
    "33029": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[गॄ] 'to sound/swallow' when compounded with @deva[उत्] or @deva[नि]. Examples: @deva[उद्गारः] 'roaring' (of sea); @deva[निगारः] 'swallowing'. Without prefix: @deva[गरः].",
            "standard": "With prefixes @deva[उत्] or @deva[नि], @deva[गॄ] (covering both 'to sound' and 'to swallow') takes @deva[घञ्]. Thus: @deva[उत्] + @deva[गॄ] → @deva[उद्गारः] 'roaring, belching' (@deva[उद्गारः समुद्रस्य] 'the ocean's roar'); @deva[नि] + @deva[गॄ] → @deva[निगारः] 'swallowing'. Without these prefixes: @deva[गरः] 'poison'.",
            "advanced": "The root @deva[गॄ] has two meanings: 'to make sound' (@deva[शब्दे]) and 'to swallow' (@deva[निगरणे]). Both meanings are covered by this @deva[सूत्र]. The prefix @deva[उत्] typically yields the 'sounding/emitting' sense, while @deva[नि] yields 'swallowing'. The unprefixed @deva[गरः] 'poison' relates to the 'swallowing' sense (that which is swallowed with difficulty)."
        }
    },
    "33030": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[कॄ] 'to scatter' with @deva[उत्] or @deva[नि], when referring to grain. Examples: @deva[उत्कारो धान्यस्य] 'winnowing of grain'; @deva[निकारो धान्यस्य]. For non-grain: @deva[उत्करः] 'heap'.",
            "standard": "With @deva[उत्] or @deva[नि], @deva[कॄ] 'to scatter' takes @deva[घञ्] when the reference is to grain (@deva[धान्य]). Thus: @deva[उत्कारो धान्यस्य] 'winnowing of grain'; @deva[निकारो धान्यस्य] 'same'. When not referring to grain, @deva[घञ्] doesn't apply: @deva[भैक्षवोत्करः] 'heap of alms'; @deva[पुष्पनिकरः] 'heap of flowers'.",
            "advanced": "The semantic restriction @deva[धान्ये] 'when referring to grain' limits @deva[घञ्] application. The root @deva[कॄ] meaning 'to scatter' (not 'to injure') is intended—no words with the 'injure' sense are formed by this affix. The contrast between @deva[उत्कारः] (grain-winnowing, with @deva[घञ्]) and @deva[उत्करः] (heap, without @deva[घञ्]) shows the semantic conditioning."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.21-3.3.30")
