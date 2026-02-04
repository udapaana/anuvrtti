#!/usr/bin/env python3
"""Rewrite commentary for 6.2.1-15 (compound accent: bahuvrīhi and tatpuruṣa rules)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62001": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound (possessive compound), the first member keeps its original accent. So in @deva[बहुव्रीहि] like @deva[महाराजः] ('having a great king'), the first part @deva[महा] retains the accent it had as an independent word.",
            "standard": "This sūtra establishes that in @deva[बहुव्रीहि समास], the @deva[पूर्वपद] (first member) retains its original @deva[स्वर] (accent). The compound doesn't take the default @deva[अन्तोदात्त] (@ref[6.1.223]); instead, the first member's inherent accent (@deva[उदात्त] or @deva[स्वरित]) is preserved. Example: @deva[म꣡हाराजः] retains @deva[महा]'s accent.",
            "advanced": "The @deva[बहुव्रीहौ पूर्वपदं प्रकृतिस्वरम्] is a fundamental compound accent rule. The @deva[प्रकृतिस्वर] (original accent) of the @deva[पूर्वपद] surfaces in the compound, overriding @ref[6.1.223]'s @deva[अन्तोदात्त]. This applies to all @deva[बहुव्रीहि] types. The @deva[पूर्वपद] may itself be compound; its final accent position is preserved. This rule initiates pāda 6.2's detailed compound accent section."
        }
    },
    "62002": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound, the first member keeps its original accent when: (1) it shows resemblance, (2) it's in instrumental relation, (3) it's in locative relation, or (4) it has a comparison relationship. So @deva[देवमनुष्यः] ('god-like man') keeps the first word's accent.",
            "standard": "This sūtra provides four conditions for @deva[पूर्वपद प्रकृतिस्वर] in @deva[तत्पुरुष]: (1) @deva[उपमान] (resemblance), (2) @deva[तृतीया] (instrumental), (3) @deva[सप्तमी] (locative), (4) @deva[उपमित] (comparison target). In these semantic relationships, the first member retains its original accent. Example: @deva[दे꣡वमनुष्यः] ('man like a god').",
            "advanced": "The @deva[तत्पुरुषे उपमानमन्तरा तृतीयासप्तम्योरुपमितश्च] lists four @deva[तत्पुरुष] configurations preserving @deva[पूर्वपद स्वर]: @deva[उपमान] ('resemblance standard'), @deva[तृतीया]-related, @deva[सप्तमी]-related, and @deva[उपमित] ('compared entity'). These semantic conditions override @ref[6.1.223]'s default. The @deva[उपमान/उपमित] distinction: @deva[उपमान] = standard of comparison; @deva[उपमित] = that which is compared."
        }
    },
    "62003": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound where one color word is compounded with another, the first member keeps its accent—except when the first word is @deva[एत] ('variegated'). So @deva[नी꣡ललोहितः] ('blue-red') keeps first-member accent.",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] when a color term (@deva[वर्णवाचिन्]) compounds with another color term. Exception: @deva[एत] ('spotted/variegated') as first member doesn't follow this. Example: @deva[नी꣡ललोहितः] ('bluish-red'). But @deva[एतलोहितः] would have different accent.",
            "advanced": "The @deva[वर्णो वर्णेन अनेतेन] rule: color + color compounds preserve @deva[पूर्वपद स्वर], unless the first member is @deva[एत]. The @deva[अनेतेन] exception removes @deva[एत]-initial compounds from this rule. Color compounds like @deva[नी꣡ललोहित], @deva[पी꣡तलोहित] show first-member accent. The @deva[एत] exception reflects its special semantic status as 'variegated' rather than a simple color."
        }
    },
    "62004": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[गाध] ('depth') or @deva[लवण] ('salt') as second member, the first member keeps its accent when the compound expresses measure or quantity. So @deva[श꣡म्यागाधम्] ('as deep as a @deva[शम्या] stick').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[तत्पुरुष] with @deva[गाध/लवण] as @deva[उत्तरपद] when expressing @deva[परिमाण] (measure/mass). Examples: @deva[श꣡म्यागाधम्] ('depth measured by @deva[शम्या]'), @deva[आ꣡ढकलवणम्] ('salt measure of @deva[आढक]'). The measuring sense triggers first-member accent.",
            "advanced": "The @deva[गाधलवणयोः परिमाणे] condition restricts to measuring contexts. @deva[गाध] (depth) and @deva[लवण] (salt, used as measure) take @deva[पूर्वपद स्वर] when the first member specifies quantity. @deva[श꣡म्यागाध] = 'shaft-deep'; @deva[आ꣡ढकलवण] = 'āḍhaka-measure of salt'. Without the measuring sense, default @deva[अन्तोदात्त] would apply."
        }
    },
    "62005": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[दायाद्] ('heir') as second member, the first member keeps its accent when it denotes what is inherited. So @deva[विद्या꣡दायादः] ('heir to knowledge') and @deva[ध꣡नदायादः] ('heir to wealth').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[दायाद्]-final @deva[तत्पुरुष] when the first member denotes the @deva[दाय] (inheritance). Examples: @deva[विद्या꣡दायादः] ('inheritor of learning'), @deva[ध꣡नदायादः] ('inheritor of wealth'). The inheritance meaning triggers first-member accent.",
            "advanced": "The @deva[दायादे दायस्य] condition: @deva[दायाद्] ('heir/inheritor') as @deva[उत्तरपद] with the first member specifying what is inherited (@deva[दाय]). The semantic relationship (X-inheritor where X = inheritance) triggers @deva[प्रकृतिस्वर]. @deva[विद्या꣡दायाद], @deva[ध꣡नदायाद] preserve first-member accent. General 'heir' sense without specified inheritance may differ."
        }
    },
    "62006": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[चिर] ('long time') or @deva[कृच्छ्र] ('difficulty') as second member, the first member keeps its accent when it denotes something that experiences delay or difficulty. So @deva[दे꣡वचिरम्] ('long-awaited by gods').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[चिर/कृच्छ्र]-final @deva[तत्पुरुष] when the first member denotes what experiences the obstacle (@deva[उपघात]). Example: @deva[दे꣡वचिरम्] ('delayed for gods'), @deva[दे꣡वकृच्छ्रम्] ('difficult for gods'). The 'experiencer of delay/difficulty' meaning triggers first-member accent.",
            "advanced": "The @deva[चिरकृच्छ्रयोरुपघातस्य] condition: @deva[चिर] (long duration) and @deva[कृच्छ्र] (hardship) as @deva[उत्तरपद] when the @deva[पूर्वपद] indicates the entity experiencing @deva[उपघात] (obstruction/impediment). The semantic relationship (X experiences delay/difficulty) preserves @deva[प्रकृतिस्वर]: @deva[दे꣡वचिर], @deva[दे꣡वकृच्छ्र]."
        }
    },
    "62007": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[पद] ('word/pretext') as second member, the first member keeps its accent when @deva[पद] means 'pretext' or 'contrivance'. So @deva[गो꣡पदम्] ('using cows as pretext').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[पद]-final @deva[तत्पुरुष] when @deva[पद] means @deva[अपदेश] ('pretext/contrivance'). Example: @deva[गो꣡पदम्] ('cow as pretext'). When @deva[पद] means 'foot' or 'word' literally, this rule doesn't apply.",
            "advanced": "The @deva[पदे अपदेशस्य] condition restricts to @deva[पद] meaning 'pretext/contrivance'. The @deva[अपदेश] sense ('using X as excuse') differs from literal 'foot' or 'footprint' (@deva[गोष्पद] @ref[6.1.145]). When @deva[पूर्वपद] denotes what serves as pretext, its accent is preserved: @deva[गो꣡पद] (cow-pretext) vs. @deva[गोष्पद꣡] (cow-footprint)."
        }
    },
    "62008": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[निवात] ('windless place/shelter') as second member, the first member keeps its accent when @deva[निवात] means 'protection from wind'. So @deva[कुट्या꣡ निवातः] ('shelter of a hut').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[निवात]-final @deva[तत्पुरुष] when @deva[निवात] means @deva[वातपरीवार] ('wind-protection/shelter'). Example: @deva[कुट्या꣡निवातः] ('wind-shelter of/by a hut'). The protective-shelter meaning triggers first-member accent.",
            "advanced": "The @deva[निवाते वातपरिवारस्य] condition: @deva[निवात] ('windless spot/shelter') as @deva[उत्तरपद] in the sense of @deva[वातपरीवार] ('wind-protection'). The @deva[पूर्वपद] indicates what provides or possesses the shelter. @deva[कुट्या꣡निवात] shows the accent pattern. Other senses of @deva[निवात] (like 'calm/quiet') wouldn't trigger this."
        }
    },
    "62009": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[शारद] ('autumnal') as second member, the first member keeps its accent when @deva[शारद] has any meaning other than 'relating to autumn'. So when @deva[शारद] means 'year-old' or similar, first-member accent applies.",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[शारद]-final @deva[तत्पुरुष] when @deva[शारद] doesn't mean @deva[आर्तव] ('seasonal/autumnal'). When @deva[शारद] means 'year-old' or other non-autumnal senses, the first member retains accent. The @deva[आर्तव] (autumn-related) sense takes default accent.",
            "advanced": "The @deva[शारदे अनार्तवे] condition: @deva[शारद] as @deva[उत्तरपद] when NOT meaning @deva[आर्तव] ('pertaining to the autumn season'). The @deva[शारद] can mean 'year/year-old' (from @deva[शरद्] 'autumn' as time-unit). In this extended sense, @deva[पूर्वपद प्रकृतिस्वर] applies. The seasonal meaning follows default @deva[अन्तोदात्त]."
        }
    },
    "62010": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[अध्वर्यु] ('Yajurveda priest') or @deva[कषाय] ('astringent/red-brown') as second member, the first member keeps its accent when these words denote a class/genus. So @deva[प्रा꣡च्याध्वर्युः] ('eastern-style priest').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[अध्वर्यु/कषाय]-final @deva[तत्पुरुष] when these denote @deva[जाति] (genus/class). Example: @deva[प्रा꣡च्याध्वर्युः] ('priest of the eastern tradition'). The generic/class meaning triggers first-member accent.",
            "advanced": "The @deva[अध्वर्युकषाययोर्जातौ] condition: @deva[अध्वर्यु] (adhvaryu priest) and @deva[कषाय] (astringent/color type) as @deva[उत्तरपद] when denoting @deva[जाति] (class/kind). @deva[प्रा꣡च्याध्वर्यु] refers to a priestly tradition (class), not an individual. The @deva[जाति] sense (generic) vs. individual reference determines accent."
        }
    },
    "62011": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[सदृश] ('similar') or @deva[प्रतिरूप] ('resembling') as second member, the first member keeps its accent when expressing resemblance to something. So @deva[पितृ꣡सदृशः] ('resembling the father').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[सदृश/प्रतिरूप]-final @deva[तत्पुरुष] when expressing resemblance. Examples: @deva[पितृ꣡सदृशः] ('father-like'), @deva[मातृ꣡प्रतिरूपः] ('mother-resembling'). The comparison meaning triggers first-member accent.",
            "advanced": "The @deva[सदृशप्रतिरूपयोः सादृश्ये] condition: @deva[सदृश] and @deva[प्रतिरूप] ('resembling/similar') as @deva[उत्तरपद] in @deva[सादृश्य] (resemblance) contexts. The @deva[पूर्वपद] denotes the standard of comparison: @deva[पितृ꣡सदृश] ('like father'), @deva[मातृ꣡प्रतिरूप] ('like mother'). This relates to @ref[6.2.2]'s @deva[उपमान/उपमित] conditions."
        }
    },
    "62012": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound where the second member is a @deva[द्विगु] (numeral compound) denoting measure or quantity, the first member keeps its accent. So @deva[प꣡ञ्चगवम्] ('having five cows' worth') retains first-member accent.",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] when the @deva[उत्तरपद] is a @deva[द्विगु समास] expressing @deva[परिमाण] (measure/quantity). Example: a compound where @deva[पञ्चगव] ('five-cow [measure]') is the second member—the first member retains its accent. The measuring sense is key.",
            "advanced": "The @deva[द्विगोश्च परिमाणे] condition: @deva[द्विगु] (@deva[समाहार] numeral compound) as @deva[उत्तरपद] when expressing @deva[परिमाण]. The @deva[द्विगु] (like @deva[पञ्चगव] 'collection of five cows' used as measure) in second position triggers @deva[पूर्वपद प्रकृतिस्वर]. This creates nested compound accent patterns."
        }
    },
    "62013": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[वाणिज] ('trader') as second member, the first member keeps its accent when it specifies the destination or the merchandise. So @deva[काशि꣡वाणिजः] ('trader going to Kāśī') or @deva[लवण꣡वाणिजः] ('salt-trader').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[वाणिज]-final @deva[तत्पुरुष] when the first member indicates @deva[देश] (destination) or @deva[पण्य] (merchandise). Examples: @deva[काशि꣡वाणिजः] ('trader bound for Kāśī'), @deva[लवण꣡वाणिजः] ('trader in salt').",
            "advanced": "The @deva[वाणिजे देशे पण्ये च] condition: @deva[वाणिज] ('merchant/trader') as @deva[उत्तरपद] when @deva[पूर्वपद] specifies either @deva[देश] (place/destination) or @deva[पण्य] (trade goods). @deva[काशि꣡वाणिज] (destination-specified), @deva[लवण꣡वाणिज] (goods-specified) show @deva[प्रकृतिस्वर]. General 'trader' compounds may differ."
        }
    },
    "62014": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[मात्रा] ('measure'), @deva[उपज्ञा] ('invention'), @deva[उपक्रम] ('beginning'), or @deva[छाया] ('shadow') as second member, the first member keeps its accent when these appear as neuter forms. So @deva[यव꣡मात्रम्] ('grain-sized').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for compounds with @deva[मात्रा/उपज्ञा/उपक्रम/छाया] as @deva[उत्तरपद] when these take neuter gender (@deva[क्लीबे]). Examples: @deva[यव꣡मात्रम्] ('barley-measure'), @deva[पाणिनि꣡युपज्ञम्] ('Pāṇini's invention'). The neuter form triggers first-member accent.",
            "advanced": "The @deva[मात्रोपज्ञोपक्रमच्छायासु क्लीबे] condition lists four words requiring neuter gender for @deva[पूर्वपद प्रकृतिस्वर]. When @deva[मात्रा] → @deva[मात्र] (neut.), @deva[उपज्ञा] → @deva[उपज्ञ] (neut.), etc., the first member retains accent. @deva[यव꣡मात्र] ('grain-sized'), @deva[पाणिनि꣡युपज्ञ] ('Pāṇini-invented'). Feminine forms follow different accent."
        }
    },
    "62015": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[सुख] ('pleasure') or @deva[प्रिय] ('dear') as second member, the first member keeps its accent when the meaning is 'feels delight in' or 'is good for'. So @deva[ग꣡वां सुखम्] ('comfort of cows').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[सुख/प्रिय]-final @deva[तत्पुरुष] when meaning @deva[रमणं साधु च] ('feeling pleasure' or 'being good'). Examples: @deva[ग꣡वां सुखम्] ('cows' comfort'), @deva[ब्राह्मण꣡प्रियम्] ('dear to brahmins'). The experiencer-pleasure meaning triggers first-member accent.",
            "advanced": "The @deva[सुखप्रिययोः रमणं साधु च] condition: @deva[सुख/प्रिय] as @deva[उत्तरपद] when expressing @deva[रमण] ('pleasure/delight') or @deva[साधु] ('good/beneficial'). The @deva[पूर्वपद] indicates who experiences pleasure or for whom something is good. @deva[ग꣡वां सुख] ('cows feel comfort'), @deva[ब्राह्मण꣡प्रिय] ('pleasing to brahmins') show the pattern."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.1-6.2.15)")
