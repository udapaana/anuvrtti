# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33061": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[व्यध्] 'to pierce' and @deva[जप्] 'to mutter' when NO @deva[उपसर्ग] is present. Examples: @deva[व्यधः] 'wound'; @deva[जपः] 'muttering'. With prefix: @deva[आव्याधः], @deva[उपजापः].",
            "standard": "Without an @deva[उपसर्ग], @deva[व्यध्] 'to pierce' and @deva[जप्] 'to mutter' take @deva[अप्], blocking @deva[घञ्]. Thus @deva[व्यधः] 'wound, piercing'; @deva[जपः] 'muttering, recitation'. With prefixes, different forms occur: @deva[आव्याधः] 'piercing through'; @deva[उपजापः] 'whispering, intrigue'.",
            "advanced": "The condition @deva[अनुपसर्गात्] restricts @deva[अप्] to unprefixed forms. With prefixes, @deva[घञ्] applies, yielding @deva[आव्याध] and @deva[उपजाप] with their characteristic @deva[वृद्धि]. The distinction allows different derivational paths depending on prefix presence."
        }
    },
    "33062": {
        "en": {
            "simple": "The affix @deva[अप्] comes optionally after @deva[स्वन्] 'to sound' and @deva[हस्] 'to laugh' when NO @deva[उपसर्ग] is present. Examples: @deva[स्वनः] or @deva[स्वानः] 'sound'; @deva[हसः] or @deva[हासः] 'laughter'. With prefix: only @deva[प्रस्वानः], @deva[प्रहासः].",
            "standard": "Without @deva[उपसर्ग], @deva[स्वन्] and @deva[हस्] take @deva[अप्] optionally. Thus @deva[स्वनः] (with @deva[अप्]) or @deva[स्वानः] (with @deva[घञ्]) 'sound'; @deva[हसः] or @deva[हासः] 'laughter'. With prefixes, only one form applies: @deva[प्रस्वानः] 'loud noise'; @deva[प्रहासः] 'loud laughter'.",
            "advanced": "The @deva[विभाषा] creates optional @deva[अप्]/घञ् selection only without prefix. The presence of an @deva[उपसर्ग] removes the option, leaving only @deva[घञ्] forms (@deva[प्रस्वान], @deva[प्रहास]). This demonstrates how prefix-presence can eliminate otherwise available options."
        }
    },
    "33063": {
        "en": {
            "simple": "The affix @deva[अप्] comes optionally after @deva[यम्] 'to restrain' with @deva[सम्], @deva[उप], @deva[नि], @deva[वि], or without any prefix. Examples: @deva[संयामः]/संयमः 'restraint'; @deva[नियामः]/नियमः 'rule'; @deva[यामः]/यमः.",
            "standard": "With prefixes @deva[सम्], @deva[उप], @deva[नि], @deva[वि], or without prefix, @deva[यम्] 'to restrain' takes @deva[अप्] optionally, blocking @deva[घञ्]. Examples: @deva[संयामः] or @deva[संयमः] 'restraint'; @deva[उपयामः] or @deva[उपयमः] 'marriage'; @deva[नियामः] or @deva[नियमः] 'restrictive rule'; @deva[वियामः] or @deva[वियमः] 'check, distress'; @deva[यामः] or @deva[यमः].",
            "advanced": "This @deva[सूत्र] lists specific prefixes (@deva[सम्], @deva[उप], @deva[नि], @deva[वि]) plus the prefix-less condition where @deva[अप्] is optional. The @deva[च] 'and' includes the @deva[अनुपसर्ग] condition. With other prefixes not listed, the option may not apply. The @deva[यम्] root yields @deva[याम] (with @deva[घञ्], showing @deva[वृद्धि]) or @deva[यम] (with @deva[अप्], showing @deva[गुण])."
        }
    },
    "33064": {
        "en": {
            "simple": "The affix @deva[अप्] comes optionally after @deva[गद्] 'to speak', @deva[नद्] 'to sound', @deva[पठ्] 'to read', @deva[स्वन्] 'to sound' with @deva[नि]. Examples: @deva[निगदः]/निगादः 'recitation'; @deva[निनदः]/निनादः 'noise'; @deva[निपठः]/निपाठः 'reading'.",
            "standard": "With @deva[नि], the roots @deva[गद्], @deva[नद्], @deva[पठ्], @deva[स्वन्] take @deva[अप्] optionally. Examples: @deva[निगदः] or @deva[निगादः] 'recitation'; @deva[निनदः] or @deva[निनादः] 'noise, sound'; @deva[निपठः] or @deva[निपाठः] 'reading'; @deva[निस्वनः] or @deva[निस्वानः] 'a noise'.",
            "advanced": "The prefix @deva[नि] triggers optional @deva[अप्] for these four roots. The @deva[अप्] forms show @deva[गुण] (@deva[निगद], @deva[निनद], @deva[निपठ], @deva[निस्वन]) while @deva[घञ्] forms show @deva[वृद्धि] (@deva[निगाद], @deva[निनाद], @deva[निपाठ], @deva[निस्वान]). Both are valid in this context."
        }
    },
    "33065": {
        "en": {
            "simple": "The affix @deva[अप्] comes optionally after @deva[क्वण्] 'to jingle' with @deva[नि], without prefix, or when meaning 'flute' (with any prefix). Examples: @deva[निक्वणः]/निक्वाणः 'musical tone'; @deva[क्वणः]/क्वाणः 'sound'; @deva[प्रक्वणा वीणा] 'flute'.",
            "standard": "The root @deva[क्वण्] 'to jingle' takes @deva[अप्] optionally under three conditions: (1) with @deva[नि], (2) without any @deva[उपसर्ग], (3) when referring to 'flute' (with any prefix). Examples: @deva[निक्वणः] or @deva[निक्वाणः] 'musical tone'; @deva[क्वणः] or @deva[क्वाणः] 'sound'; @deva[कल्याणप्रक्वणा वीणा] 'beautiful-sounding flute'.",
            "advanced": "Three distinct conditions trigger optional @deva[अप्]: @deva[नि]-prefixed, prefix-less, or flute-referring (with mandatory prefix). Counter-example: @deva[अतिक्वाणो वर्तते]—prefix @deva[अति] without flute-meaning allows no option; only @deva[घञ्] applies. The flute condition requires some prefix but not necessarily @deva[नि]."
        }
    },
    "33066": {
        "en": {
            "simple": "The affix @deva[अप्] comes invariably after @deva[पण्] 'to barter' when meaning 'measure'. Examples: @deva[मूलकपणः] 'handful of radishes'; @deva[शाकपणः] 'handful of vegetables'. For trade: @deva[पणः] (with option).",
            "standard": "When @deva[पण्] 'to barter' means @deva[परिमाण] 'measure' (specifically, a handful), @deva[अप्] applies invariably (@deva[नित्यम्])—blocking the option. Examples: @deva[मूलकपणः] 'a handful of radishes'; @deva[शाकपणः] 'a handful of vegetables'. These words secondarily denote 'a measure equal to a handful'. Without measure meaning: @deva[पणः] 'trade, stake' (with option).",
            "advanced": "The word @deva[नित्यम्] 'invariably' stops the @deva[अनुवृत्ति] of @deva[विभाषा] from previous @deva[सूत्रs]. The @deva[परिमाण] sense specifically refers to quantity measured by hand. Outside this semantic domain, the regular optional treatment resumes for @deva[पण्]."
        }
    },
    "33067": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[मद्] 'to be intoxicated/proud' when NO @deva[उपसर्ग] is present. Examples: @deva[विद्यामदः] 'pride of learning'; @deva[धनमदः] 'pride of wealth'. With prefix: @deva[उन्मादः] 'madness'; @deva[प्रमादः] 'carelessness'.",
            "standard": "Without @deva[उपसर्ग], @deva[मद्] 'to be intoxicated/proud' takes @deva[अप्], blocking @deva[घञ्]. Examples: @deva[विद्यामदः] 'pride of knowledge'; @deva[धनमदः] 'pride of wealth'; @deva[कुलमदः] 'pride of lineage'. With prefixes: @deva[उन्मादः] 'madness, frenzy'; @deva[प्रमादः] 'error, carelessness' (using @deva[घञ्]).",
            "advanced": "The @deva[अनुपसर्ग] condition restricts @deva[अप्] to prefix-less forms. With prefixes, @deva[घञ्] applies, yielding @deva[वृद्धि]: @deva[उन्माद], @deva[प्रमाद]. The compound forms like @deva[विद्यामद] use the @deva[अप्]-derived @deva[मद] as the final member."
        }
    },
    "33068": {
        "en": {
            "simple": "The words @deva[प्रमद] and @deva[सम्मद] are irregularly formed with meaning 'joy/delight'. Examples: @deva[कन्यानां प्रमदः] 'joy of girls'; @deva[कोकिलानां सम्मदः] 'rejoicing of cuckoos'. For other meanings: @deva[प्रमादः], @deva[सम्मादः].",
            "standard": "The words @deva[प्रमद] and @deva[सम्मद] are formed irregularly (@deva[निपातन]) when meaning @deva[हर्ष] 'joy, delight'. Examples: @deva[कन्यानां प्रमदः] 'the joy of maidens'; @deva[कोकिलानां सम्मदः] 'the rejoicing of cuckoos'. Without the 'delight' meaning: @deva[प्रमादः] 'carelessness'; @deva[सम्मादः] 'frenzy'.",
            "advanced": "Rather than stating '@deva[मद्] with @deva[प्र]/सम् takes @deva[अप्]', the full forms are given to indicate these are @deva[रूढि] (conventionalized) words—the root meaning isn't fully visible. The @deva[अप्] forms @deva[प्रमद]/सम्मद contrast with @deva[घञ्] forms @deva[प्रमाद]/सम्माद, which have different semantic ranges."
        }
    },
    "33069": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[अज्] 'to drive' with @deva[सम्] or @deva[उत्] when referring to cattle/beasts. Examples: @deva[समजः पशूनाम्] 'herd of cattle'; @deva[उदजः पशूनाम्] 'driving forth of cattle'. For people: @deva[समाजः], @deva[उदाजः].",
            "standard": "With @deva[सम्] or @deva[उत्], @deva[अज्] 'to go, drive' takes @deva[अप्] when referring to @deva[पशु] (cattle, beasts). Examples: @deva[समजः पशूनाम्] 'a herd/collection of cattle'; @deva[उदजः पशूनाम्] 'driving forth of cattle'. When not referring to cattle: @deva[समाजो ब्राह्मणानाम्] 'assembly of Brāhmaṇas'; @deva[उदाजः क्षत्रियाणाम्] 'expedition of Kṣatriyas'.",
            "advanced": "The semantic restriction @deva[पशौ] confines @deva[अप्] to animal contexts. With @deva[सम्], @deva[अज्] means 'collection/assembly'; with @deva[उत्], it means 'driving out'. The @deva[घञ्] forms (@deva[समाज], @deva[उदाज]) apply to human assemblies/expeditions, showing semantic specialization based on affix choice."
        }
    },
    "33070": {
        "en": {
            "simple": "The word @deva[ग्लह] is irregularly formed (from @deva[ग्रह्] with @deva[र] → @deva[ल]) when meaning 'gambling'. Example: @deva[अक्षस्य ग्लहः] 'cast of dice'. For other meanings: @deva[ग्रहः] 'grip, planet'.",
            "standard": "The word @deva[ग्लह] is derived irregularly from @deva[ग्रह्] 'to seize' when referring to @deva[द्यूत] (gambling). @deva[ग्रह्] + @deva[अप्] → @deva[ग्रह], then @deva[र] → @deva[ल] irregularly → @deva[ग्लह]. Example: @deva[अक्षस्य ग्लहः] 'a throw of dice'. Without gambling meaning: @deva[ग्रहः पादस्य] 'grip of the foot'.",
            "advanced": "Alternative analysis: some derive @deva[ग्लह] regularly from a separate root @deva[ग्लह्] 'to gamble' + @deva[अप्], blocking @deva[घञ्]. Their counter-example: @deva[ग्लाहः] 'receiving' (with @deva[घञ्]). The @deva[निपातन] (irregular formation) approach treats @deva[र] → @deva[ल] as an exceptional change; the alternative posits a distinct root."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.61-3.3.70")
