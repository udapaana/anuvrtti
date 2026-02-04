#!/usr/bin/env python3
"""Rewrite commentary for 6.1.196-210 (accent for perfect, affixes, vocative, names)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61196": {
        "en": {
            "simple": "Before the perfect ending @deva[थ] (2nd person singular) when it takes the @deva[इ] augment, the accent can fall on the first syllable, on the @deva[इ], or on the penultimate syllable. So @deva[चकर्थ] with @deva[इ] can be @deva[च꣡करिथ], @deva[चकरि꣡थ], or @deva[चक꣡रिथ].",
            "standard": "This sūtra provides three accent options for @deva[लिट्] (perfect) 2sg @deva[थ] with @deva[इट्] augment: (1) @deva[आद्युदात्त] (first syllable), (2) @deva[इट्]-accent, (3) @deva[उपोत्तम] (penultimate). Example: @deva[चकर्थ] + @deva[इ] → @deva[च꣡करिथ] or @deva[चकरि꣡थ] or @deva[चक꣡रिथ]. All three are valid.",
            "advanced": "The @deva[थस्येडादौ] condition: @deva[थ] of @deva[लिट्] 2sg when preceded by @deva[इट्] augment. The triple option (@deva[आदेरिट उपोत्तमस्य वा]) allows: (1) @deva[आदि]-accent (@deva[च꣡करिथ]), (2) @deva[इट्]-accent (@deva[चकरि꣡थ]), (3) @deva[उपोत्तम]-accent (@deva[चक꣡रिथ]). This extensive optionality reflects variant accent traditions for perfect 2sg forms with @deva[इट्]."
        }
    },
    "61197": {
        "en": {
            "simple": "Words formed with affixes having indicatory @deva[ञ्] or @deva[न्] always have acute accent on the first syllable. So @deva[गार्ग्य] (from @deva[यञ्]) is @deva[गा꣡र्ग्य], and @deva[राज्ञ] (from @deva[ल्युट्]) is @deva[रा꣡ज्ञ].",
            "standard": "This sūtra assigns mandatory @deva[आद्युदात्त] to @deva[ञित्] and @deva[नित्] formations. Examples: @deva[यञ्] (@ref[4.1.105]) → @deva[गा꣡र्ग्य]; @deva[ल्युट्] → @deva[रा꣡ज्ञ]; @deva[अण्] → @deva[औ꣡पगव]. The @deva[ञ्/न्] markers invariably produce first-syllable accent.",
            "advanced": "The @deva[ञ्णिति नित्यम्] makes @deva[आद्युदात्त] obligatory for @deva[ञित्/नित्] affixes. This overrides any other accent rules. Patronymics with @deva[यञ्] (@deva[गा꣡र्ग्य]), agent nouns with @deva[ल्युट्] (@deva[रा꣡ज्ञ] 'kingship'), and @deva[अण्]-derivatives (@deva[औ꣡पगव]) all show first-syllable accent. The @deva[नित्यम्] ('always') indicates no optionality."
        }
    },
    "61198": {
        "en": {
            "simple": "The vocative case (calling someone) has acute accent on the first syllable. So when calling @deva[देवदत्त], you say @deva[दे꣡वदत्त]! with accent on the first syllable.",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[सम्बुद्धि] (vocative). Examples: @deva[दे꣡वदत्त!], @deva[दे꣡वदत्तौ!], @deva[दे꣡वदत्ताः!]. This overrides @ref[6.2.148]'s final accent. The vocative distinctively marks addressed entities with initial accent.",
            "advanced": "The @deva[सम्बुद्धौ] condition targets the vocative function. The @deva[आद्युदात्त] applies regardless of the stem's inherent accent. @deva[देवदत्त꣡] (nom.) → @deva[दे꣡वदत्त] (voc.). This @deva[अपवाद] to @ref[6.2.148] creates the distinctive vocative intonation pattern. The accent shift signals the pragmatic 'calling' function in discourse."
        }
    },
    "61199": {
        "en": {
            "simple": "The words @deva[पथिन्] ('path') and @deva[मथिन्] ('churner') have acute accent on the first syllable when strong case endings (@deva[सर्वनामस्थान]) follow. So @deva[प꣡न्थाः] (nom. sg.) has initial accent.",
            "standard": "This sūtra provides @deva[आद्युदात्त] for @deva[पथिन्] and @deva[मथिन्] before @deva[सर्वनामस्थान] (strong) case endings. These stems (formed with @deva[इनि] Uṇādi affix) take first-syllable accent in nominative, accusative, and vocative. Example: @deva[प꣡न्थाः] (nom. sg.), @deva[प꣡थः] (acc. pl.).",
            "advanced": "The @deva[सर्वनामस्थाने] condition targets strong cases (nom/acc/voc). @deva[पथिन्] and @deva[मथिन्] show stem alternation (@deva[पन्थ-/पथि-/पथ-]); in strong cases, @deva[आद्युदात्त] applies: @deva[प꣡न्थाः], @deva[प꣡न्थानम्]. In weak cases, different accent may apply. These @deva[इनि]-derivatives (@deva[उणादि]) have this special accent pattern."
        }
    },
    "61200": {
        "en": {
            "simple": "The Vedic infinitive ending @deva[तवै] has acute accent on both the first and last syllables simultaneously. So @deva[कर्तवै] ('to do') is @deva[क꣡र्तवै꣡] with two accents.",
            "standard": "This sūtra assigns double accent (@deva[आद्युदात्त] and @deva[अन्तोदात्त]) to infinitives in @deva[तवै]. Forms like @deva[क꣡र्तवै꣡], @deva[ह꣡र्तवै꣡] have accent on both first and last syllables. This is exceptional—normally one word has one accent (@ref[6.1.158]).",
            "advanced": "The @deva[तवैकारयोः] (= @deva[तवै]) infinitive shows @deva[उभयतोदात्त] (double accent), an exception to @ref[6.1.158]'s one-accent rule. The @deva[तवै] is a Vedic infinitive marker (cf. @deva[तुमुन्] in Classical). Forms @deva[क꣡र्तवै꣡], @deva[ह꣡र्तवै꣡] preserve archaic dual accent. This likely reflects underlying compound structure or Vedic prosodic requirements."
        }
    },
    "61201": {
        "en": {
            "simple": "The word @deva[क्षय] ('dwelling, home') has acute accent on both the first and last syllables. So in @deva[क्षये जागृहि] ('be awake in the dwelling'), it's @deva[क्ष꣡य꣡].",
            "standard": "This sūtra provides double accent for @deva[क्षय] ('dwelling'): both @deva[क्ष꣡] and @deva[य꣡] bear @deva[उदात्त]. The word is formed with @deva[घ] affix (@ref[3.3.119]). Example: @deva[क्ष꣡ये꣡ जागृहि प्रपश्यन्] ('being awake, looking in the dwelling').",
            "advanced": "The @deva[क्षयस्य] rule assigns @deva[उभयतोदात्त] (first and last accent) to @deva[क्षय]. The @deva[घ] affix (@ref[3.3.119]) normally produces @deva[अन्तोदात्त]; this sūtra adds @deva[आद्युदात्त]. Like @ref[6.1.200], this creates exceptional double accent. The Vedic verse context suggests this is a metrically or pragmatically motivated accentuation."
        }
    },
    "61202": {
        "en": {
            "simple": "The word @deva[जय] ('victory') has acute accent on the first syllable when it means 'that by which one wins'. So @deva[ज꣡योऽश्वः] ('the victorious horse'). But @deva[जयो वर्तते] ('victory exists') has different accent.",
            "standard": "This sūtra provides @deva[आद्युदात्त] for @deva[जय] when meaning @deva[येन जयति] ('instrument of victory'). Example: @deva[ज꣡योऽश्वः] ('horse by which one wins'). When @deva[जय] means 'victory' abstractly, different accent applies: @deva[जयो꣡ वर्तते] ('victory prevails').",
            "advanced": "The @deva[येन जयति] semantic condition restricts @deva[आद्युदात्त] to instrumental sense ('that by which one conquers'). The @deva[जय] as @deva[करण] (instrument) takes @deva[ज꣡य]. As @deva[भाव] (abstract 'victory'), it follows regular accent. This semantic-accent correlation shows how meaning can determine prosodic form."
        }
    },
    "61203": {
        "en": {
            "simple": "The words @deva[वृष] ('bull'), @deva[जन] ('person'), @deva[ज्वर] ('fever'), and others in this list have acute accent on the first syllable. So @deva[व꣡ृषः], @deva[ज꣡नः], @deva[ज्व꣡रः].",
            "standard": "This sūtra lists @deva[वृषादि] words with @deva[आद्युदात्त]: @deva[व꣡ृषः] ('bull'), @deva[ज꣡नः] ('person'), @deva[ज्व꣡रः] ('fever'), @deva[ग्र꣡हः] ('planet/seizure'), @deva[ह꣡यः] ('horse'), etc. These @deva[घञ्]-formations exceptionally take first-syllable accent.",
            "advanced": "The @deva[वृषादि] @deva[गण] lists @deva[घञ्]-derivatives with @deva[आद्युदात्त] instead of the usual @deva[घञ्] accent pattern. The list includes: @deva[वृष], @deva[जन], @deva[ज्वर], @deva[ग्रह], @deva[हय], etc. These are @deva[निपातन] (listed forms) whose accent must be memorized. The @deva[आदि] ('etc.') indicates an open-ended @deva[गण]."
        }
    },
    "61204": {
        "en": {
            "simple": "A word used to indicate similarity (comparison) has acute accent on the first syllable when it's a name. So @deva[चञ्चा] (a woman named after resemblance to something) is @deva[च꣡ञ्चा].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[उपमान] (comparison-based) words when they function as @deva[संज्ञा] (names). Examples: @deva[च꣡ञ्चा], @deva[व꣡घ्रिका], @deva[ख꣡रकुटी] (names derived from resemblance). The naming function triggers first-syllable accent.",
            "advanced": "The @deva[उपमानं संज्ञायाम्] condition: when a comparative expression becomes a proper name, @deva[आद्युदात्त] applies. Names like @deva[च꣡ञ्चा] ('restless one'), @deva[व꣡घ्रिका] ('tiger-like'), @deva[ख꣡रकुटी] ('donkey-hipped') show this pattern. The @deva[उपमान] (standard of comparison) becoming @deva[संज्ञा] (proper noun) triggers the accent shift."
        }
    },
    "61205": {
        "en": {
            "simple": "A two-syllable past participle in @deva[त] (@deva[निष्ठा]) has acute accent on the first syllable when it's a name, unless the first syllable has @deva[आ]. So @deva[गु꣡प्तः] ('Gupta'), @deva[बु꣡द्धः] ('Buddha'), but not @deva[*आ꣡प्तः].",
            "standard": "This sūtra provides @deva[आद्युदात्त] for disyllabic @deva[निष्ठा] (@deva[त]-participle) names, excluding those with initial @deva[आ]. Examples: @deva[गु꣡प्तः], @deva[बु꣡द्धः], @deva[मु꣡क्तः] (as names). Forms with @deva[आ] like @deva[आप्त], @deva[दात] don't take this accent.",
            "advanced": "The @deva[द्व्यच्छो निष्ठायाम् अनाकारस्य] conditions: (1) @deva[द्व्यच्] (two syllables), (2) @deva[निष्ठा] (@deva[क्त/क्तवतु] participle), (3) @deva[संज्ञा] (name), (4) @deva[अनाकार] (no initial @deva[आ]). Forms meeting all conditions get @deva[आद्युदात्त]: @deva[गु꣡प्त], @deva[बु꣡द्ध], @deva[मु꣡क्त]. The @deva[आ]-exclusion prevents @deva[*आ꣡प्त]."
        }
    },
    "61206": {
        "en": {
            "simple": "The words @deva[शुष्क] ('dry') and @deva[धृष्ट] ('bold') have acute accent on the first syllable. These are not names—they're regular adjectives with exceptional accent.",
            "standard": "This sūtra provides @deva[आद्युदात्त] for @deva[शुष्क] and @deva[धृष्ट] as non-names (@deva[असंज्ञा]). Unlike @ref[6.1.205] which requires name status, these participles take first-syllable accent in their regular adjectival use: @deva[शु꣡ष्कः] ('dry'), @deva[धृ꣡ष्टः] ('bold').",
            "advanced": "The @deva[शुष्कधृष्टौ च] extends @deva[आद्युदात्त] beyond @ref[6.1.205]'s @deva[संज्ञा] restriction. @deva[शुष्क] (from @deva[शुष्] 'dry') and @deva[धृष्ट] (from @deva[धृष्] 'be bold') take @deva[शु꣡ष्क], @deva[धृ꣡ष्ट] in all uses, not just as names. These are @deva[निपातन] forms requiring separate memorization."
        }
    },
    "61207": {
        "en": {
            "simple": "The word @deva[आशित] ('having eaten') has acute accent on the first syllable. So @deva[आ꣡शितो देवदत्तः] means 'Devadatta, having eaten' with accent on @deva[आ].",
            "standard": "This sūtra provides @deva[आद्युदात्त] for @deva[आशित] meaning 'having eaten' (from @deva[अश्] 'to eat'). The @deva[आ] prefix + @deva[शित] takes first-syllable accent: @deva[आ꣡शितः]. The active (agent-oriented) participle sense is specified.",
            "advanced": "The @deva[आशितस्य भुक्तवतः] specifies the @deva[कर्तरि] (agent) sense of @deva[आशित] ('one who has eaten'). The @deva[आद्युदात्त] applies: @deva[आ꣡शितः]. This distinguishes from potential @deva[कर्मणि] (object) sense. The @deva[आ] of @deva[आशित] is the prefix @deva[आ] (unlike @ref[6.1.205]'s @deva[आ]-exclusion, which targets stem-initial @deva[आ])."
        }
    },
    "61208": {
        "en": {
            "simple": "The word @deva[रिक्त] ('empty') may optionally have acute accent on the first syllable. So @deva[रि꣡क्तः] or @deva[रिक्त꣡ः] are both valid.",
            "standard": "This sūtra provides optional @deva[आद्युदात्त] for @deva[रिक्त] ('empty', from @deva[रिच्] 'to empty'). Both @deva[रि꣡क्तः] (first-syllable accent) and @deva[रिक्त꣡ः] (default participle accent) are acceptable. This overrides @ref[6.1.204]-@ref[6.1.205].",
            "advanced": "The @deva[रिक्तस्य वा] provides @deva[विकल्प] for @deva[रिक्त]. The optionality means either @deva[आद्युदात्त] (@deva[रि꣡क्त]) or default @deva[निष्ठा] accent (@deva[रिक्त꣡]) applies. This @deva[अपवाद] to @ref[6.1.204]-@ref[6.1.205] shows lexical accent variation for this specific participle."
        }
    },
    "61209": {
        "en": {
            "simple": "In Vedic literature (@deva[छन्दस्]), the words @deva[जुष्ट] ('enjoyed/favored') and @deva[अर्पित] ('placed/offered') may optionally have acute accent on the first syllable. So @deva[जु꣡ष्टः] or @deva[जुष्ट꣡ः].",
            "standard": "This sūtra provides optional @deva[आद्युदात्त] for @deva[जुष्ट] and @deva[अर्पित] in Vedic (@deva[छन्दसि]). Both forms are attested: @deva[जु꣡ष्टः/जुष्ट꣡ः], @deva[अ꣡र्पितः/अर्पित꣡ः]. The @deva[विभाषा] indicates variant readings in Vedic texts.",
            "advanced": "The @deva[छन्दसि जुष्टार्पितयोः विभाषा] documents Vedic accent variation for these participles. @deva[जुष्ट] (from @deva[जुष्] 'enjoy') and @deva[अर्पित] (from @deva[ऋ] 'go' causative) show @deva[आद्युदात्त] optionally in Vedic. This reflects recension-specific differences in transmitted Vedic texts."
        }
    },
    "61210": {
        "en": {
            "simple": "In @deva[मन्त्र] (Vedic hymns), @deva[जुष्ट] and @deva[अर्पित] always have acute accent on the first syllable. So in mantras: @deva[जु꣡ष्ट देवानाम् अ꣡र्पितं पितॄणाम्] ('favored by gods, offered to ancestors').",
            "standard": "This sūtra makes @deva[आद्युदात्त] obligatory for @deva[जुष्ट] and @deva[अर्पित] in @deva[मन्त्र] context (more specific than @deva[छन्दस्]). Unlike @ref[6.1.209]'s optionality in general Vedic, in actual hymns these always take first-syllable accent: @deva[जु꣡ष्ट], @deva[अ꣡र्पित].",
            "advanced": "The @deva[मन्त्रे तु नित्यम्] overrides @ref[6.1.209]'s optionality for the narrower @deva[मन्त्र] domain. While @deva[छन्दस्] (general Vedic) allows @deva[विभाषा], actual @deva[मन्त्र] (hymn) usage requires @deva[आद्युदात्त]: @deva[जु꣡ष्ट देवानाम् अ꣡र्पितं पितॄणाम्]. Some authorities (@deva[केचित्]) include @deva[ब्राह्मण] texts in this @deva[नित्य] scope."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.196-6.1.210)")
