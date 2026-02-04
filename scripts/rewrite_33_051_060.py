# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33051": {
        "en": {
            "simple": "The affix @deva[घञ्] is optionally used after @deva[ग्रह्] 'to seize' with @deva[अव] when meaning 'withholding of rain' (drought). Example: @deva[अवग्राहः] or @deva[अवग्रहः] 'drought'.",
            "standard": "With @deva[अव] + @deva[ग्रह्] meaning @deva[वर्षप्रतिबन्ध] (obstruction of rain, drought), @deva[घञ्] is optional. Thus @deva[अवग्राहो देवस्य] or @deva[अवग्रहो देवस्य] 'the drought (withholding of rain by the god)'. Without drought meaning: @deva[अवग्रहः पदस्य] 'separation/pause of a word'.",
            "advanced": "The semantic condition @deva[वर्षप्रतिबन्धे] specifies rain-withholding—when the season has arrived but rain is obstructed. The @deva[विभाषा] allows both @deva[अवग्राह] (with @deva[घञ्]) and @deva[अवग्रह] (without). The latter is the common grammatical term for 'pause' or 'separation' in compound analysis."
        }
    },
    "33052": {
        "en": {
            "simple": "The affix @deva[घञ्] is optionally used after @deva[ग्रह्] with @deva[प्र] when relating to commerce (specifically, the string of a balance). Example: @deva[तुलाप्रग्राहः] or @deva[तुलाप्रग्रहः] 'balance string'.",
            "standard": "With @deva[प्र] + @deva[ग्रह्] meaning @deva[वाणिज्य] (commerce), specifically the string by which a balance is held, @deva[घञ्] is optional. Thus @deva[तुलाप्रग्राहेण चरति] or @deva[तुलाप्रग्रहेण चरति] 'he walks with the balance string'—applicable to anyone, not just merchants. Without commerce meaning: @deva[प्रग्रहो देवदत्तस्य] 'Devadatta's whip/rein'.",
            "advanced": "The condition @deva[वाणिज्ये] 'in commerce' specifically refers to @deva[तुलारज्जु] (the cord/string of a balance), not commerce generally. The @deva[प्रग्राह/प्रग्रह] forms both refer to the gripping string of a weighing scale. This technical usage distinguishes it from @deva[प्रग्रह] meaning 'whip' or 'rein'."
        }
    },
    "33053": {
        "en": {
            "simple": "The affix @deva[घञ्] is optionally used after @deva[ग्रह्] with @deva[प्र] when meaning 'rein'. Example: @deva[प्रग्राहः] or @deva[प्रग्रहः] 'a rein (for controlling horses)'.",
            "standard": "With @deva[प्र] + @deva[ग्रह्] meaning @deva[रश्मि] (rein, bridle), @deva[घञ्] is optional. The @deva[रश्मि] is the strap by which horses etc. attached to a carriage are controlled. Thus @deva[प्रग्राहः] or @deva[प्रग्रहः] 'a rein'—both forms are valid.",
            "advanced": "This @deva[सूत्र] adds another semantic condition for optional @deva[घञ्] after @deva[प्र] + @deva[ग्रह्]. The @deva[रश्मि] 'rein' meaning joins @deva[लिप्सा] (@ref[3.3.46]) and @deva[वाणिज्य] (@ref[3.3.52]) as contexts where @deva[प्रग्राह/प्रग्रह] variation occurs. Each semantic domain has its own provision."
        }
    },
    "33054": {
        "en": {
            "simple": "The affix @deva[घञ्] is optionally used after @deva[वृ] 'to cover/choose' with @deva[प्र] when meaning 'a covering/cloak'. Example: @deva[प्रावारः] or @deva[प्रवरः] 'a cloak, veil'.",
            "standard": "With @deva[प्र] + @deva[वृ] meaning @deva[वेष्टन] (a covering, wrapper), @deva[घञ्] is optional. Thus @deva[प्रावारः] (with @deva[घञ्]) or @deva[प्रवरः] (without) 'a cloak, mantle, veil'. Without covering meaning: @deva[प्रवरौ] (dual) referring to the best/excellent ones.",
            "advanced": "The semantic restriction @deva[वेष्टने] 'when meaning covering' triggers the option. The word @deva[प्रावार] specifically denotes an outer garment or wrap. The form @deva[प्रवर] without @deva[घञ्] has the additional meaning 'excellent, best' (from @deva[वृ] 'to choose'), showing how affix choice affects semantic range."
        }
    },
    "33055": {
        "en": {
            "simple": "The affix @deva[घञ्] is optionally used after @deva[भू] 'to be' with @deva[परि] when meaning 'disregard/contempt'. Example: @deva[परिभावः] or @deva[परिभवः] 'insult, humiliation'.",
            "standard": "With @deva[परि] + @deva[भू] meaning @deva[अवज्ञान] (disregard, contempt, neglect), @deva[घञ्] is optional. Thus @deva[परिभावः] or @deva[परिभवः] 'insult, humiliation, disregard'. Without contempt meaning: @deva[परिभवः] could mean @deva[सर्वतोभवनम्] 'surrounding, being all around'.",
            "advanced": "The condition @deva[अवज्ञाने] restricts the option to the 'contempt/disregard' sense. The word @deva[परिभव] without @deva[घञ्] can have the compositional meaning 'existence all around' (@deva[परि] + @deva[भव]), while @deva[परिभाव] with @deva[घञ्] tends toward the specialized 'humiliation' sense, though the @deva[विभाषा] allows both in the contempt meaning."
        }
    },
    "33056": {
        "en": {
            "simple": "The affix @deva[अच्] comes after roots ending in @deva[इ] or @deva[ई]. Examples: @deva[चयः] 'collecting'; @deva[जयः] 'victory'; @deva[क्षयः] 'decay'. A @deva[वार्तिक] adds @deva[भयम्] 'fear', @deva[वर्षम्] 'rain'.",
            "standard": "After roots ending in @deva[इ] or @deva[ई], the affix @deva[अच्] applies (with @deva[भाव] and @deva[अकर्तरि कारक] senses from @ref[3.3.18-19] continuing through @ref[3.3.113]). This blocks @deva[घञ्]. Examples: @deva[चयः] 'collecting'; @deva[अयः] 'going'; @deva[जयः] 'victory'; @deva[क्षयः] 'wasting'. A @deva[वार्तिक] includes @deva[भय] etc.: @deva[भी] + @deva[अच्] → @deva[भयम्] 'fear'; @deva[वर्षम्] 'rain' (neuter, otherwise would take @deva[क्त]).",
            "advanced": "The @deva[च्] in @deva[अच्] is qualitative (@deva[संज्ञार्थ]) for rules like @ref[6.2.144]. The @deva[अनुवृत्ति] of @deva[भावे] and @deva[अकर्तरि कारके संज्ञायाम्] applies from @ref[3.3.18-19] through @ref[3.3.113]. A Vedic @deva[वार्तिक] notes @deva[जव] and @deva[सव] (from @deva[जु], @deva[सु]) use @deva[अच्] rather than @deva[अप्], with accent difference: @deva[ऊर्वोरस्तु मे जवः]; @deva[पञ्चोदनसवः]."
        }
    },
    "33057": {
        "en": {
            "simple": "The affix @deva[अप्] comes after roots ending in @deva[ॠ], @deva[उ], or @deva[ऊ]. Examples: @deva[करः] 'scattering'; @deva[गरः] 'poison'; @deva[यवः] 'barley'; @deva[लवः] 'cutting'; @deva[पवः] 'winnowing'.",
            "standard": "After roots ending in @deva[ॠ], short @deva[उ], or long @deva[ऊ], @deva[अप्] applies, blocking @deva[घञ्]. The @deva[प्] is @deva[इत्] for accent (@ref[3.1.3]). Examples: @deva[कृ] → @deva[करः] 'scattering'; @deva[गॄ] → @deva[गरः] 'beverage, poison'; @deva[शॄ] → @deva[शरः] 'arrow'; @deva[यु] → @deva[यवः] 'barley'; @deva[लू] → @deva[लवः] 'reaping'; @deva[पू] → @deva[पवः] 'winnowing'.",
            "advanced": "The @deva[द्] in @deva[ॠद्] is euphonic, not a @deva[तपर] marker—otherwise only short @deva[उ] (not long @deva[ऊ]) would be covered by @ref[1.1.70]. The @deva[गुण] substitute applies: @deva[ॠ] → @deva[अर्]; @deva[उ/ऊ] → @deva[अव्]. The @deva[अप्] affix (with @deva[प्] as @deva[इत्]) creates specific accent patterns distinguishing these from @deva[घञ्] formations."
        }
    },
    "33058": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[ग्रह्] 'to seize', @deva[वृ] 'to choose', @deva[दृ] 'to tear', @deva[निश्चि] 'to determine', @deva[गम्] 'to go'. Examples: @deva[ग्रहः] 'planet'; @deva[वरः] 'boon'; @deva[दरः] 'cave'; @deva[निश्चयः] 'certainty'; @deva[गमः] 'march'.",
            "standard": "The affix @deva[अप्] (blocking @deva[घञ्]) follows @deva[ग्रह्], @deva[वृ], @deva[दृ], @deva[निश्चि], @deva[गम्]. For @deva[निश्चि], @deva[अप्] blocks @deva[अच्]. Examples: @deva[ग्रहः] 'planet'; @deva[वरः] 'boon'; @deva[दरः] 'tearing, cave'; @deva[निश्चयः] 'certainty'; @deva[गमः] 'march'. A @deva[वार्तिक] adds @deva[वश्] → @deva[वशः] 'obedient' and @deva[रण्] → @deva[रणः] 'battle'.",
            "advanced": "For @deva[निश्चि], @deva[अप्] blocks the otherwise applicable @deva[अच्] (@ref[3.3.56]), creating accent difference. A @deva[वार्तिक] prescribes affix @deva[क] (with @deva[घञ्] sense) after @deva[स्था], @deva[स्ना], @deva[पा], @deva[व्यध्], @deva[हन्], @deva[युध्]: @deva[प्रस्थः] 'tableland'; @deva[प्रस्नः] 'bathing vessel'; @deva[प्रपाः] 'watering place'; @deva[आविधः] 'awl' (@ref[6.1.16]); @deva[विघ्नः] 'obstacle'; @deva[आयुधः] 'weapon'."
        }
    },
    "33059": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[अद्] 'to eat' when an @deva[उपसर्ग] is in composition. Examples: @deva[विघसः] 'half-eaten morsel'; @deva[प्रघसः] 'voracious'. Without prefix: @deva[घासः] 'grass'.",
            "standard": "With an @deva[उपसर्ग], @deva[अद्] 'to eat' takes @deva[अप्]. The derivation involves @deva[अद्] → @deva[घस्] (@ref[2.4.38]). Examples: @deva[विघसः] 'half-chewed morsel'; @deva[प्रघसः] 'voracious'. Without @deva[उपसर्ग]: @deva[अद्] + @deva[घञ्] → @deva[घस्] + @deva[अ] = @deva[घासः] 'grass, fodder'.",
            "advanced": "The substitution @deva[अद्] → @deva[घस्] by @ref[2.4.38] applies before the affix. With @deva[उपसर्ग], @deva[अप्] is used: @deva[वि] + @deva[घस्] + @deva[अ] = @deva[विघसः]. Without prefix, @deva[घञ्] applies: @deva[घस्] + @deva[अ] (from @deva[घञ्]) = @deva[घासः]. The @deva[उपसर्ग] condition distinguishes the two affix environments."
        }
    },
    "33060": {
        "en": {
            "simple": "Both @deva[ण] and @deva[अप्] come after @deva[अद्] 'to eat' with @deva[नि]. Examples: @deva[न्यादः] 'feeding' (with @deva[ण]); @deva[निघसः] 'eating, food' (with @deva[अप्]).",
            "standard": "With @deva[नि] + @deva[अद्], both @deva[ण] and @deva[अप्] apply. With @deva[ण]: @deva[नि] + @deva[अद्] + @deva[ण] → @deva[नि] + @deva[आद्] + @deva[अ] (@ref[7.2.116]) → @deva[न्यादः] 'feeding'. With @deva[अप्]: @deva[नि] + @deva[अद्] + @deva[अप्] → @deva[नि] + @deva[घस्] + @deva[अ] (@ref[2.4.38]) → @deva[निघसः] 'eating, food'.",
            "advanced": "This @deva[सूत्र] specifies that @deva[नि] triggers both @deva[ण] and @deva[अप्] after @deva[अद्]. The @deva[ण] affix causes @deva[वृद्धि] of the root vowel (@deva[अ] → @deva[आ]) by @ref[7.2.116], yielding @deva[न्यादः]. The @deva[अप्] pathway uses the @deva[घस्] substitution, yielding @deva[निघसः]. Both forms are valid with the @deva[नि] prefix."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.51-3.3.60")
