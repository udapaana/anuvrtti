#!/usr/bin/env python3
"""Rewrite commentary for 6.2.61-75 (optional accent, ādi-udātta adhikāra begins)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62061": {
        "en": {
            "simple": "A word meaning 'always' optionally keeps its accent before a @deva[क्त]-participle. So @deva[नित्यप्रहसितः] ('always laughing') can be @deva[नि꣡त्यप्रहसितः] or @deva[नित्यप्रहसित꣡ः].",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for @deva[नित्यार्थ] ('always'-meaning) words before @deva[क्त]. Examples: @deva[नि꣡त्यप्रहसितः/नित्यप्रहसित꣡ः] ('constantly laughing'), @deva[सतत꣡प्रहसितः/सततप्रहसित꣡ः] ('perpetually laughing').",
            "advanced": "The @deva[नित्यार्थे क्ते वा] condition: words expressing @deva[नित्य] ('constant/always') + @deva[क्त] show @deva[विभाषा]. @deva[नित्य], @deva[सतत], @deva[सदा] etc. before participles: @deva[नि꣡त्यप्रहसित/नित्यप्रहसित꣡]. The temporal-adverbial qualifier shows optional accent retention."
        }
    },
    "62062": {
        "en": {
            "simple": "The word @deva[ग्राम] ('village') as first member optionally keeps its accent before a word denoting a professional or artisan. So @deva[ग्रामनापितः] ('village barber') can have either accent.",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for @deva[ग्राम] before @deva[शिल्पिन्] (artisan) terms. Examples: @deva[ग्राम꣡नापितः/ग्रामनापित꣡ः] ('village barber'), @deva[ग्राम꣡कुलालः/ग्रामकुलाल꣡ः] ('village potter').",
            "advanced": "The @deva[ग्रामस्य शिल्पिनि वा] condition: @deva[ग्राम] + @deva[शिल्पिन्] (craftsman/professional) shows @deva[विभाषा]. @deva[ग्राम꣡नापित/ग्रामनापित꣡] ('village barber'), @deva[ग्राम꣡कुलाल/ग्रामकुलाल꣡] ('village potter'). The village-professional compound has optional first-member accent."
        }
    },
    "62063": {
        "en": {
            "simple": "The word @deva[राजन्] ('king') optionally keeps its accent before a profession-word when praise is expressed. So @deva[राजनापितः] ('king's barber', praisingly) can be @deva[राज꣡नापितः] or @deva[राजनापित꣡ः].",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for @deva[राजन्] before profession-words in @deva[प्रशंसा] (praise) context. Examples: @deva[राज꣡नापितः/राजनापित꣡ः] ('royal barber'), @deva[राज꣡कुलालः/राजकुलाल꣡ः] ('royal potter')—when expressing honor.",
            "advanced": "The @deva[राज्ञः प्रशंसायाम्] condition: @deva[राजन्] + profession-word in @deva[प्रशंसा] (laudatory) sense shows @deva[विभाषा]. @deva[राज꣡नापित/राजनापित꣡] when praising the barber's connection to royalty. The praise-context triggers optional accent; neutral reference may follow default."
        }
    },
    "62064": {
        "en": {
            "simple": "From here through @ref[6.2.91], understand that 'the first syllable gets acute accent'. This is an @deva[अधिकार] (governing rule) that controls the following sūtras—they all assign first-syllable accent.",
            "standard": "This is an @deva[अधिकार] sūtra: from @ref[6.2.64] through @ref[6.2.91], the @deva[पूर्वपद] gets @deva[आद्युदात्त] (first-syllable accent). This shifts from the @deva[प्रकृतिस्वर] rules to @deva[आद्युदात्त] rules. The @deva[प्रथमा] (nominative) indicates the first member receives this accent.",
            "advanced": "The @deva[प्रथमायाः आदिः आ भूताधिकसंजीवमद्राश्मकज्जलम्] establishes @deva[अधिकार]: rules through @ref[6.2.91] assign @deva[आद्युदात्त] to @deva[पूर्वपद]. This contrasts with earlier @deva[प्रकृतिस्वर] rules. The @deva[प्रथमायाः] indicates the nominative-case first member; @deva[आदिः] specifies first-syllable accent. A new accent-assignment domain begins."
        }
    },
    "62065": {
        "en": {
            "simple": "A first member in locative case, or denoting a tax-receiver's name, gets first-syllable accent when the second member denotes 'portion'. So @deva[शु꣡ल्कभाग] ('tax portion') has accent on @deva[शु].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[सप्तमी]-sense or @deva[शुल्कग्राहिसंज्ञा] (tax-collector name) @deva[पूर्वपद] before @deva[भाग]-meaning words. Example: @deva[शु꣡ल्कभागः] ('toll-share')—first syllable accented.",
            "advanced": "The @deva[सप्तम्यां शुल्कग्राहिसंज्ञायां भागे] condition: @deva[सप्तमी] (locative) or @deva[शुल्कग्राहिसंज्ञा] (customs-collector title) + @deva[भाग] ('share/portion') triggers @deva[आद्युदात्त]. @deva[शु꣡ल्कभाग] ('duty-share'). The administrative/fiscal compound takes first-syllable accent."
        }
    },
    "62066": {
        "en": {
            "simple": "A first member gets first-syllable accent when the second member denotes someone who regulates or keeps the first in order. So @deva[ग꣡वाध्यक्ष] ('cow-superintendent') has accent on @deva[ग].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] when @deva[उत्तरपद] denotes @deva[युक्त] ('regulator/keeper') of what @deva[पूर्वपद] denotes. @deva[युक्त] means 'one who manages/controls'. Example: @deva[ग꣡वाध्यक्षः] ('cattle-overseer').",
            "advanced": "The @deva[युक्ते] condition: @deva[उत्तरपद] expressing @deva[युक्त] ('manager/controller/keeper') of @deva[पूर्वपद]. The first member (what is managed) takes @deva[आद्युदात्त]: @deva[ग꣡वाध्यक्ष] ('cattle superintendent'), @deva[अ꣡श्वाध्यक्ष] ('horse superintendent'). Administrative titles show this pattern."
        }
    },
    "62067": {
        "en": {
            "simple": "First-syllable accent is optional when @deva[अध्यक्ष] ('superintendent') follows. So @deva[गवाध्यक्षः] can be @deva[ग꣡वाध्यक्षः] or @deva[गवाध्यक्ष꣡ः].",
            "standard": "This sūtra makes @deva[आद्युदात्त] optional before @deva[अध्यक्ष]. Either @deva[ग꣡वाध्यक्षः] (first-syllable accent by @ref[6.2.66]) or @deva[गवाध्यक्ष꣡ः] (default @deva[अन्तोदात्त]) is valid. Similarly @deva[अ꣡श्वाध्यक्षः/अश्वाध्यक्ष꣡ः].",
            "advanced": "The @deva[अध्यक्षे वा] provides @deva[विभाषा] for @deva[अध्यक्ष] specifically. While @ref[6.2.66] assigns @deva[आद्युदात्त] to @deva[युक्त]-meaning compounds, @deva[अध्यक्ष] ('overseer') allows optionality: @deva[ग꣡वाध्यक्ष/गवाध्यक्ष꣡]. The specific word @deva[अध्यक्ष] relaxes the mandatory pattern."
        }
    },
    "62068": {
        "en": {
            "simple": "The word @deva[पाप] ('wicked/sinful') optionally gets first-syllable accent before profession-words. So @deva[पापनापितः] can be @deva[पा꣡पनापितः] or @deva[पापनापित꣡ः].",
            "standard": "This sūtra provides optional @deva[आद्युदात्त] for @deva[पाप] before @deva[शिल्पिन्] (professional) terms. Examples: @deva[पा꣡पनापितः/पापनापित꣡ः] ('wicked barber'), @deva[पा꣡पकुलालः/पापकुलाल꣡ः] ('sinful potter').",
            "advanced": "The @deva[पापस्य शिल्पिनि वा] provides @deva[विभाषा] for @deva[पाप] + @deva[शिल्पिन्]. @deva[पा꣡पनापित/पापनापित꣡] ('wicked barber'), @deva[पा꣡पकुलाल/पापकुलाल꣡] ('evil potter'). The pejorative @deva[पाप] + profession compound shows optional first-syllable accent."
        }
    },
    "62069": {
        "en": {
            "simple": "The first syllable gets acute accent before @deva[गोत्र] (patronymic) names, scholar-names, and before @deva[माणव/ब्राह्मण] when the compound denotes someone devoted to study. So @deva[गा꣡र्ग्यमाणवः] ('Gārgya pupil').",
            "standard": "This sūtra assigns @deva[आद्युदात्त] before @deva[गोत्र], @deva[अन्तेवासिसंज्ञा] (student-names), and @deva[माणव/ब्राह्मण] in @deva[अध्ययने] (study) context. Examples: @deva[गा꣡र्ग्यमाणवः] ('student of Gārgya lineage').",
            "advanced": "The @deva[गोत्रान्तेवासिसंज्ञयोर्माणवब्राह्मणयोरध्ययने] condition: (1) @deva[गोत्र] patronymics, (2) @deva[अन्तेवासिसंज्ञा] (pupil-names), (3) @deva[माणव/ब्राह्मण] in @deva[अध्ययन] (study) sense—all trigger @deva[आद्युदात्त]. @deva[गा꣡र्ग्यमाणव] ('student named after Gārgya'). The educational/lineage compound takes first-syllable accent."
        }
    },
    "62070": {
        "en": {
            "simple": "A word denoting an ingredient of @deva[मैरेय] (a type of wine) gets first-syllable accent before @deva[मैरेय]. So @deva[गु꣡डमैरेयः] ('jaggery-wine') has accent on @deva[गु].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to ingredient-words before @deva[मैरेय] (a fermented drink). Example: @deva[गु꣡डमैरेयः] ('@deva[मैरेय] made from jaggery')—the ingredient gets first-syllable accent.",
            "advanced": "The @deva[मैरेये तत्प्रकृतेः] condition: @deva[तत्प्रकृति] (ingredient/source) of @deva[मैरेय] takes @deva[आद्युदात्त]. @deva[गुड + मैरेय] = @deva[गु꣡डमैरेय] ('jaggery-based @deva[मैरेय]'). The compound specifying beverage-ingredient shows first-syllable accent on the ingredient."
        }
    },
    "62071": {
        "en": {
            "simple": "A word denoting food gets first-syllable accent before a word denoting a suitable container for it. So @deva[भि꣡क्षावासः] ('alms-bag') has accent on @deva[भि].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[अन्न] (food) words before @deva[आधार] (container) words. Examples: @deva[भि꣡क्षावासः] ('alms-receptacle'), @deva[भ꣡क्तवासः] ('food-container'). The food-item gets first-syllable accent.",
            "advanced": "The @deva[अन्नस्य योग्ये आधारे] condition: @deva[अन्न] ('food') + @deva[योग्य आधार] ('suitable container') triggers @deva[आद्युदात्त] on @deva[अन्न]. @deva[भि꣡क्षावास] ('alms-bag'), @deva[भ꣡क्तवास] ('rice-container'). The food-container compound accents the food-word's first syllable."
        }
    },
    "62072": {
        "en": {
            "simple": "A word denoting the object of comparison gets first-syllable accent before @deva[गो] ('cow'), @deva[बिडाल] ('cat'), @deva[सिंह] ('lion'), or @deva[सैन्धव] ('horse'). So @deva[धा꣡न्यगवः] ('grain-like cow') or @deva[व्या꣡घ्रसिंहः] ('tiger-like lion').",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[उपमान] (comparison-standard) before @deva[गो/बिडाल/सिंह/सैन्धव]. Examples: @deva[धा꣡न्यगवः] ('cow [numerous] like grain'), @deva[व्या꣡घ्रसिंहः] ('lion like a tiger'). The comparison-word gets first-syllable accent.",
            "advanced": "The @deva[उपमानस्य गोबिडालसिंहसैन्धवेषु] condition: @deva[उपमान] + these four animals triggers @deva[आद्युदात्त]. @deva[धा꣡न्यगव] ('cows [plentiful] like grain'), @deva[व्या꣡घ्रसिंह] ('lion [fierce] like tiger'). The comparison-based compound accents the standard-of-comparison's first syllable."
        }
    },
    "62073": {
        "en": {
            "simple": "A word denoting the object of comparison gets first-syllable accent when the second member ends in @deva[अक] affix and the compound is a term of address. So @deva[खर꣡मूषकः] ('donkey-mouse!') as vocative has first-syllable accent.",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[उपमान] before @deva[अक]-ending words when expressing @deva[आह्वान] (calling/address). Example: @deva[खर꣡मूषकः] ('O mouse like a donkey!')—the comparison-word gets first-syllable accent in vocative-like usage.",
            "advanced": "The @deva[उपमानस्य अके आह्वाने] condition: @deva[उपमान] + @deva[अक]-affix word in @deva[आह्वान] (address/calling) context takes @deva[आद्युदात्त]. @deva[खर꣡मूषक] ('mouse [stupid] like a donkey!' as insult/address). The comparison-vocative compound accents the comparison-standard."
        }
    },
    "62074": {
        "en": {
            "simple": "A compound with @deva[अक]-ending second member denoting an Eastern people's sport gets first-syllable accent. So @deva[उ꣡लूकपक्षिकाः] ('owl-bird game') has accent on @deva[उ].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to compounds with @deva[अक]-final @deva[उत्तरपद] denoting @deva[प्राच्यक्रीडा] ('Eastern sport/game'). Example: @deva[उ꣡लूकपक्षिकाः] ('owl-bird game')—a game of Eastern regions gets first-syllable accent.",
            "advanced": "The @deva[प्राच्यक्रीडायाम् अके] condition: @deva[अक]-ending compound denoting @deva[प्राच्य] (Eastern) @deva[क्रीडा] (sport/game) triggers @deva[आद्युदात्त]. @deva[उ꣡लूकपक्षिका] ('owl-bird [children's game]'). Regional game-names with @deva[अक]-affix show first-syllable accent."
        }
    },
    "62075": {
        "en": {
            "simple": "A compound with @deva[अण्]-affix second member denoting a functionary gets first-syllable accent. So @deva[छ꣡त्राध्यापकः] ('umbrella-teacher' = royal tutor) has accent on @deva[छ].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to compounds with @deva[कृत्]-affix @deva[अण्] final @deva[उत्तरपद] denoting @deva[अधिकारिन्] (official/functionary). Example: @deva[छ꣡त्राध्यापकः] ('umbrella-bearer' = royal attendant who teaches).",
            "advanced": "The @deva[अधिकारिणि कृत्यण्] condition: @deva[अण्]-@deva[कृत्] ending word denoting @deva[अधिकारिन्] (office-holder/functionary) triggers @deva[आद्युदात्त]. @deva[छ꣡त्राध्यापक] ('umbrella-teacher'), where the first member indicates the functional context. Official-title compounds take first-syllable accent."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.61-6.2.75)")
