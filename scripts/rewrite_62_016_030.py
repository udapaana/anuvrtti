#!/usr/bin/env python3
"""Rewrite commentary for 6.2.16-30 (tatpuruṣa accent cont., karmadhāraya, dvigu)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62016": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[सुख] ('pleasure') or @deva[प्रिय] ('dear') as second member, the first member keeps its accent when the meaning is 'agreeable to one' or 'desired by one'. So @deva[ब्राह्मण꣡सुखम्] ('agreeable to brahmins').",
            "standard": "This sūtra continues @ref[6.2.15], providing @deva[पूर्वपद प्रकृतिस्वर] for @deva[सुख/प्रिय]-final @deva[तत्पुरुष] when meaning @deva[इष्टम्] ('desired') or @deva[हितम्] ('agreeable'). Example: @deva[ब्राह्मण꣡सुखम्] ('desired by/agreeable to brahmins'). The 'desired/agreeable' sense triggers first-member accent.",
            "advanced": "The @deva[इष्टे हिते च] condition supplements @ref[6.2.15]'s @deva[रमण साधु]. While @ref[6.2.15] covers 'feels pleasure' and 'is good', this covers 'is desired' (@deva[इष्ट]) and 'is beneficial' (@deva[हित]). The @deva[पूर्वपद] indicates the beneficiary: @deva[ब्राह्मण꣡सुख] ('comfort agreeable to brahmins'), @deva[गो꣡प्रिय] ('dear to cows')."
        }
    },
    "62017": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[स्वामिन्] ('owner/master') as second member, the first member keeps its accent when it denotes the thing possessed. So @deva[गो꣡स्वामी] ('cow-owner'), @deva[अ꣡श्वस्वामी] ('horse-owner').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[स्वामिन्]-final @deva[तत्पुरुष] when the first member denotes @deva[स्व] (possession). Examples: @deva[गो꣡स्वामी] ('owner of cows'), @deva[अ꣡श्वस्वामी] ('owner of horses'). The 'possessor-of-X' meaning triggers first-member accent.",
            "advanced": "The @deva[स्वामिनि स्वस्य] condition: @deva[स्वामिन्] ('owner/lord') as @deva[उत्तरपद] when @deva[पूर्वपद] indicates @deva[स्व] (what is owned). The possessive relationship (X's owner) preserves @deva[प्रकृतिस्वर]: @deva[गो꣡स्वामिन्], @deva[अश्व꣡स्वामिन्], @deva[क्षेत्र꣡स्वामिन्]. The semantic bond between possessor and possessed drives the accent pattern."
        }
    },
    "62018": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound ending in @deva[पति] ('master/lord'), the first member keeps its accent when @deva[पति] means 'lord' or 'master'. So @deva[गृह꣡पतिः] ('house-master'), @deva[सेना꣡पतिः] ('army-commander').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[पति]-final @deva[तत्पुरुष] when @deva[पति] means @deva[ईश्वर] ('lord/master'). Examples: @deva[गृह꣡पतिः] ('householder'), @deva[सेना꣡पतिः] ('general'), @deva[नर꣡पतिः] ('king'). The lordship meaning triggers first-member accent.",
            "advanced": "The @deva[पत्यन्ते ईश्वरे] condition: @deva[पति] as @deva[उत्तरपद] in the sense of @deva[ईश्वर] ('ruler/master'). The @deva[पूर्वपद] indicates domain of lordship: @deva[गृह꣡पति] ('house-lord'), @deva[सेना꣡पति] ('army-lord'). When @deva[पति] means 'husband' (as in @deva[जायापती]), different accent applies. The @deva[ईश्वर] sense preserves @deva[प्रकृतिस्वर]."
        }
    },
    "62019": {
        "en": {
            "simple": "The words @deva[भू] ('earth'), @deva[वाक्] ('speech'), @deva[चित्] ('thought'), and @deva[दिधिषू] ('desiring') do NOT keep their original accent before @deva[पति] meaning 'master'. So @deva[भूपतिः] and @deva[वाक्पतिः] have default compound accent.",
            "standard": "This sūtra excepts @deva[भू], @deva[वाक्], @deva[चित्], and @deva[दिधिषू] from @ref[6.2.18]. These words don't preserve @deva[प्रकृतिस्वर] before @deva[पति] meaning 'lord'. So @deva[भूपति꣡ः], @deva[वाक्पति꣡ः] take default @deva[अन्तोदात्त], not first-member accent.",
            "advanced": "The @deva[न भूवाक्चित्दिधिषूणाम्] creates exceptions to @ref[6.2.18]. Despite @deva[पति] meaning @deva[ईश्वर], these four words don't trigger @deva[पूर्वपद स्वर]: @deva[भूपति꣡] ('earth-lord'), @deva[वाक्पति꣡] ('speech-lord'), @deva[चित्पति꣡] ('mind-lord'), @deva[दिधिषूपति꣡] ('husband of a remarried woman'). These follow @ref[6.1.223]'s @deva[अन्तोदात्त]."
        }
    },
    "62020": {
        "en": {
            "simple": "The word @deva[भुवन] ('world') may optionally keep its accent before @deva[पति] meaning 'lord'. So @deva[भुवनपतिः] can be either @deva[भु꣡वनपतिः] or @deva[भुवनपति꣡ः].",
            "standard": "This sūtra makes @deva[भुवन] + @deva[पति] optionally follow @ref[6.2.18]. The compound @deva[भुवनपति] ('lord of the world') can have either @deva[प्रकृतिस्वर] (@deva[भु꣡वनपति]) or default @deva[अन्तोदात्त] (@deva[भुवनपति꣡]). The @deva[विभाषा] allows both.",
            "advanced": "The @deva[भुवनस्य वा] provides optionality for @deva[भुवन] (formed by @deva[क्युन्] Uṇādi affix). While @deva[भू] is excepted by @ref[6.2.19], its derivative @deva[भुवन] has optional status. Either @deva[भु꣡वनपति] (first-member accent) or @deva[भुवनपति꣡] (final accent) is valid. This shows how derivatives may differ from their base words."
        }
    },
    "62021": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[आशङ्का] ('apprehension'), @deva[आबाध] ('affliction'), or @deva[नेदीयस्] ('nearest') as second member, the first member keeps its accent when expressing supposition. So @deva[वृक꣡ आशङ्का] ('apprehension of wolf').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for compounds with @deva[आशङ्का/आबाध/नेदीयस्] as @deva[उत्तरपद] when expressing @deva[संभावना] ('supposition/possibility'). Example: @deva[वृक꣡ आशङ्का] ('suspecting a wolf'). The suppositional meaning triggers first-member accent.",
            "advanced": "The @deva[आशङ्काऽऽबाधनेदीयसां संभावनम्] condition: these three words as @deva[उत्तरपद] when expressing @deva[संभावना] (conjecture/supposition). @deva[वृक꣡ आशङ्का] ('fearing/suspecting a wolf'), @deva[शत्र्व꣡ाबाध] ('affliction possibly from enemy'). The conjectural/suppositional semantic context preserves @deva[प्रकृतिस्वर]."
        }
    },
    "62022": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[पूर्व] ('previous/former') as second member, the first member keeps its accent when the meaning is 'this had recently been X'. So @deva[चोर꣡पूर्वः] ('formerly a thief').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[पूर्व]-final @deva[तत्पुरुष] when meaning 'recently/formerly was X'. Example: @deva[चोर꣡पूर्वः] ('one who was recently a thief'). The 'recent former state' meaning triggers first-member accent.",
            "advanced": "The @deva[पूर्वे अद्यत्वे] condition: @deva[पूर्व] ('former') as @deva[उत्तरपद] when indicating @deva[अद्यत्व] ('recentness')—something that was X until recently. @deva[चोर꣡पूर्व] ('recently a thief'), @deva[भिक्षु꣡पूर्व] ('recently a mendicant'). The temporal meaning ('just previously') preserves @deva[प्रकृतिस्वर]."
        }
    },
    "62023": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound with @deva[सविध] ('neighborhood'), @deva[सनीड] ('nest'), @deva[समर्याद] ('boundary'), @deva[सवेश] ('entrance'), or @deva[सदेश] ('region') as second member, the first member keeps its accent. So @deva[ग्राम꣡सविधम्] ('village-vicinity').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for compounds with @deva[सविध/सनीड/समर्याद/सवेश/सदेश] as @deva[उत्तरपद]. Examples: @deva[ग्राम꣡सविधम्] ('near the village'), @deva[पक्षि꣡सनीडम्] ('bird's nesting place'). These locational terms preserve first-member accent.",
            "advanced": "The @deva[सविधसनीडसमर्यादसवेशसदेशेषु] lists five spatial terms. The @deva[स-] prefix indicates 'having/with': @deva[सविध] (with proximity), @deva[सनीड] (with nest), @deva[समर्याद] (with boundary), @deva[सवेश] (with entrance), @deva[सदेश] (with region). All preserve @deva[पूर्वपद प्रकृतिस्वर] in compounds."
        }
    },
    "62024": {
        "en": {
            "simple": "Words like @deva[विस्पष्ट] ('clearly'), @deva[विचित्र] ('variegated'), @deva[व्यक्त] ('manifest') keep their accent when followed by an adjective in a compound. So @deva[वि꣡स्पष्टकटुकम्] ('clearly pungent').",
            "standard": "This sūtra provides @deva[प्रकृतिस्वर] for @deva[विस्पष्टादि] words when compounded with an adjective (@deva[विशेषण]). Examples: @deva[वि꣡स्पष्टकटुकम्] ('manifestly pungent'), @deva[वि꣡चित्रकटुकम्] ('variously pungent'). These adverb-like first members retain their accent.",
            "advanced": "The @deva[विस्पष्टादीनि विशेषणे] rule: @deva[विस्पष्ट] etc. as @deva[पूर्वपद] before adjectives preserve @deva[प्रकृतिस्वर]. The @deva[आदि] indicates a @deva[गण] including @deva[विस्पष्ट], @deva[विचित्र], @deva[व्यक्त]. These function as intensifiers/qualifiers: @deva[वि꣡स्पष्टकटुक] ('clearly/distinctly sharp'). The adverbial-adjective compound retains first-member accent."
        }
    },
    "62025": {
        "en": {
            "simple": "In a @deva[कर्मधारय] compound where the first member is a verbal noun (@deva[भाव]) and the second is an adjective from @deva[श्र] (meaning 'best'), the first member keeps its accent. So @deva[दर्शन꣡श्रेष्ठम्] ('best in appearance').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] in @deva[कर्मधारय] when: (1) @deva[पूर्वपद] is a @deva[भाव] (action noun), (2) @deva[उत्तरपद] is from root @deva[श्र] meaning 'excellent'. Example: @deva[दर्शन꣡श्रेष्ठम्] ('best in seeing/appearance').",
            "advanced": "The @deva[कर्मधारये भावे श्र इति प्रशस्यस्य] condition: @deva[कर्मधारय] with @deva[भाव] (abstract noun) + @deva[श्र]-derivative (like @deva[श्रेष्ठ], @deva[श्रेयस्]) meaning 'excellent'. The @deva[भाव] indicates the domain of excellence: @deva[दर्शन꣡श्रेष्ठ] ('excellent in appearance'), @deva[श्रवण꣡श्रेष्ठ] ('excellent in hearing')."
        }
    },
    "62026": {
        "en": {
            "simple": "In a @deva[कर्मधारय] compound, the word @deva[कुमार] ('young/boy') as first member keeps its original accent. So @deva[कुमार꣡कुलटा] ('young wanton woman'), @deva[कुमार꣡श्रमणा] ('young female ascetic').",
            "standard": "This sūtra provides @deva[प्रकृतिस्वर] for @deva[कुमार] in @deva[कर्मधारय] compounds. Examples: @deva[कुमार꣡कुलटा] ('young loose woman'), @deva[कुमार꣡श्रमणा] ('young nun'), @deva[कुमार꣡तापसी] ('young female ascetic'). The adjective @deva[कुमार] retains its accent.",
            "advanced": "The @deva[कर्मधारये कुमारस्य] rule preserves @deva[कुमार]'s accent in @deva[कर्मधारय]. @deva[कुमार] ('young/childlike') + various nouns: @deva[कुमार꣡कुलटा], @deva[कुमार꣡श्रमणा], @deva[कुमार꣡तापसी]. The @deva[कर्मधारय] is an appositional compound where @deva[कुमार] qualifies the second member. This rule ensures the adjectival first member keeps its inherent accent."
        }
    },
    "62027": {
        "en": {
            "simple": "In a @deva[कर्मधारय] compound of @deva[कुमार] with @deva[प्रत्येनस्] ('guilty/sinful'), the acute accent falls on the first syllable of @deva[कुमार]. So @deva[कु꣡मारप्रत्येनस्] ('guilty as a child').",
            "standard": "This sūtra specifies @deva[आद्युदात्त] for @deva[कुमार] before @deva[प्रत्येनस्] ('guilty of sin'). The form is @deva[कु꣡मारप्रत्येनस्] with accent on @deva[कु]. The @deva[प्रत्येनस्] means 'guilty/sinful' (one who has committed @deva[एनस्] 'sin').",
            "advanced": "The @deva[प्रत्येनसि आदिः] rule: @deva[कुमार] + @deva[प्रत्येनस्] takes @deva[आद्युदात्त] (first-syllable accent) on @deva[कुमार]. This overrides @ref[6.2.26]'s general @deva[प्रकृतिस्वर] for this specific compound. @deva[कु꣡मारप्रत्येनस्] ('one who has been guilty since youth'). The @deva[प्रत्येनस्] = @deva[प्रति + एनस्] ('against + sin' = 'having sin')."
        }
    },
    "62028": {
        "en": {
            "simple": "The first syllable of @deva[कुमार] is optionally accented when the second member denotes a group or assembly (@deva[पूग]). So @deva[कुमारसभा] can be @deva[कु꣡मारसभा] or @deva[कुमार꣡सभा].",
            "standard": "This sūtra provides optional @deva[आद्युदात्त] for @deva[कुमार] before @deva[पूगनाम] (names of assemblies/groups). The @deva[विभाषा] allows: @deva[कु꣡मारसभा] (first-syllable accent) or @deva[कुमार꣡सभा] (@ref[6.2.26] accent). @deva[पूग] means 'multitude/guild/assembly'.",
            "advanced": "The @deva[पूगनाम्नि वा] provides optionality for @deva[कुमार] + group-names. Either @deva[आद्युदात्त] (@deva[कु꣡मारपूग]) or @deva[प्रकृतिस्वर] (@deva[कुमार꣡पूग]) is valid. The @deva[पूग] ('guild/assembly') as @deva[उत्तरपद] triggers this option. This shows how @deva[कुमार] has special accent treatment in compounds."
        }
    },
    "62029": {
        "en": {
            "simple": "In a @deva[द्विगु] compound (numeral compound), the first member (numeral) keeps its accent before a stem ending in @deva[इ], @deva[उ], @deva[ऋ], or @deva[ऌ] (but not @deva[अ]) when followed by the affix @deva[टच्]. So @deva[प꣡ञ्चगवम्] keeps the numeral's accent.",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] in @deva[द्विगु] when: (1) @deva[उत्तरपद] ends in @deva[इक्] (इ उ ऋ ऌ, not अ), (2) followed by @deva[टच्] affix. Example: @deva[प꣡ञ्चगवम्] ('collection of five cows')—@deva[पञ्चन्] retains accent before @deva[गो] (इक्-ending).",
            "advanced": "The @deva[द्विगोरिकि टचि] condition: @deva[द्विगु समास] with @deva[इक्]-final @deva[उत्तरपद] before @deva[टच्] (@ref[5.4.77]). The @deva[इक्] = @deva[इ उ ऋ ऌ] excludes @deva[अ]-final stems. @deva[प꣡ञ्चगव] (गो ends in इक्), @deva[द्वि꣡मातृ] (मातृ ends in इक्). The @deva[टच्] makes the compound neuter collective. Numeral preserves @deva[प्रकृतिस्वर]."
        }
    },
    "62030": {
        "en": {
            "simple": "In a @deva[द्विगु] compound, the word @deva[बहु] ('many') may optionally keep its accent before @deva[इक्]-ending stems, time words, or @deva[कपाल] ('skull/pot'). So @deva[बहुगवम्] can be @deva[ब꣡हुगवम्] or @deva[बहुगव꣡म्].",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for @deva[बहु] in @deva[द्विगु] before: (1) @deva[इक्]-final stems, (2) @deva[काल] (time) words, (3) @deva[कपाल]. Examples: @deva[ब꣡हुगवम्/बहुगव꣡म्] ('many cows'), @deva[ब꣡हुकालम्/बहुकाल꣡म्] ('long time').",
            "advanced": "The @deva[बह्वल्पयोरिकि कालकपालयोश्च वा] provides optionality for @deva[बहु] (and likely @deva[अल्प]) before specified second members. The @deva[विभाषा] allows @deva[प्रकृतिस्वर] or default accent. @deva[बहु] + @deva[इक्]-stem, @deva[काल], or @deva[कपाल]: both accents valid. This extends @ref[6.2.29]'s @deva[द्विगु] rule with optionality for @deva[बहु]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.16-6.2.30)")
