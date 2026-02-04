#!/usr/bin/env python3
"""Rewrite commentary for 6.1.151-165 (suṭ conclusion, accent rules beginning)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61151": {
        "en": {
            "simple": "In Vedic mantras, the word @deva[चन्द्र] ('moon, shining') receives the @deva[सुट्] augment when it's the second member of a compound and is preceded by a short vowel. So @deva[सु + चन्द्र] becomes @deva[सुश्चन्द्र] ('beautifully shining').",
            "standard": "This sūtra adds @deva[सुट्] to @deva[चन्द्र] as @deva[उत्तरपद] (second compound member) in @deva[मन्त्र] contexts, when preceded by a @deva[ह्रस्व] (short) vowel. Thus @deva[सु + चन्द्र] → @deva[सुश्चन्द्रः] (Vedic). The short-vowel condition is essential; after long vowels, no @deva[सुट्] applies.",
            "advanced": "The @deva[मन्त्रे] domain restricts this to Vedic usage. The @deva[ह्रस्वात्] condition means the first member must end in a short vowel (@deva[अ इ उ ऋ ऌ]). The @deva[सुट्] before @deva[च्] produces @deva[श्च] (with @deva[श्चुत्व]). This is one of the final @deva[सुट्] rules before the @deva[अधिकार] concludes at @ref[6.1.157]. Example: @deva[सुश्चन्द्रो युष्मान्] in Vedic texts."
        }
    },
    "61152": {
        "en": {
            "simple": "The root @deva[कश्] ('to go, to punish') gets the @deva[सुट्] augment when preceded by @deva[प्रति]. So @deva[प्रति + कश्] becomes @deva[प्रतिष्कश्], yielding forms like @deva[प्रतिष्कशः] ('one who punishes in return').",
            "standard": "This sūtra provides @deva[सुट्] for @deva[प्रति + कश्]. The root @deva[कश्] means 'to go' or 'to punish'. With @deva[सुट्]: @deva[प्रति + स् + कश्] → @deva[प्रतिष्कश्] (with @deva[ष्] by @deva[षत्व]). The derived noun @deva[प्रतिष्कशः] appears in the verse: @deva[ग्राममद्य प्रवेक्ष्यामि प्रतिष्कशो मम प्रहर्ता].",
            "advanced": "The @deva[प्रति + कश्] combination with @deva[सुट्] is lexically specified. The @deva[ष्] results from @deva[सुट्] + @deva[क्] after @deva[इ], yielding @deva[ष्क] by @deva[षत्व] (@ref[8.3.59]). This is near the end of the @deva[स्कोः] @deva[अधिकार]. The meaning 'retaliatory punisher' fits @deva[प्रति] ('against/in return') + @deva[कश्] ('punish')."
        }
    },
    "61153": {
        "en": {
            "simple": "The words @deva[प्रस्कण्व] and @deva[हरिश्चन्द्र] are names of Vedic sages (@deva[ऋषि]), formed with the @deva[सुट्] augment. These are proper names that take @deva[सुट्] irregularly.",
            "standard": "This sūtra lists @deva[प्रस्कण्व] and @deva[हरिश्चन्द्र] as @deva[ऋषि] names formed with @deva[सुट्]. Thus: @deva[प्र + स् + कण्व] → @deva[प्रस्कण्व]; @deva[हरि + स् + चन्द्र] → @deva[हरिश्चन्द्र]. The @deva[सुट्] in @deva[हरिश्चन्द्र] follows the short-vowel condition from @ref[6.1.151].",
            "advanced": "These are @deva[निपातन] (listed formations) for specific @deva[ऋषि] names. @deva[प्रस्कण्व] shows @deva[सुट्] after @deva[प्र] (ending in @deva[अ]). @deva[हरिश्चन्द्र] has @deva[सुट्] after @deva[हरि] (ending in short @deva[इ]), fulfilling @ref[6.1.151]'s condition. The @deva[ऋषि] designation restricts these to the famous seers of that name; other @deva[हरिश्चन्द्र] compounds without @deva[सुट्] exist for different referents."
        }
    },
    "61154": {
        "en": {
            "simple": "The word @deva[मस्कर] means 'bamboo', and @deva[मस्करिन्] means 'a wandering monk' (who carries a bamboo staff). These are formed with @deva[सुट्]. Without @deva[सुट्], the form would be @deva[मकर] (a sea creature).",
            "standard": "This sūtra provides @deva[सुट्] for @deva[मस्कर] ('bamboo') and @deva[मस्करिन्] ('mendicant monk'). The @deva[सुट्] distinguishes these from @deva[मकर] ('sea-monster/crocodile'). The @deva[मस्करिन्] is a wandering ascetic who carries a bamboo staff (@deva[मस्कर]). These are underived nominal stems with listed @deva[सुट्].",
            "advanced": "The semantic distinction is crucial: @deva[मस्कर] (with @deva[सुट्]) = bamboo; @deva[मकर] (without) = aquatic creature. The @deva[मस्करिन्] ('one possessing a @deva[मस्कर]') denotes Buddhist or Jain wandering monks who carried bamboo staffs. The @deva[निपातन] status means these are listed forms, not productively derived. The @deva[सुट्] serves lexical differentiation here."
        }
    },
    "61155": {
        "en": {
            "simple": "The words @deva[कास्तर] and @deva[अजस्तुन्द] are names of cities, formed with @deva[सुट्]. When not referring to cities, the forms without @deva[सुट्] are @deva[कातीर] ('bank/shore') and @deva[अजतुन्द] ('goat-belly').",
            "standard": "This sūtra provides @deva[सुट्] for city names @deva[कास्तर] and @deva[अजस्तुन्द]. Without the city-name meaning: @deva[कातीरम्] means 'having a slight bank' (@deva[ईषत् तीरम्]); @deva[अजतुन्दम्] means 'having a belly like a goat's' (@deva[अजस्येव तुन्दम्]). The @deva[सुट्] marks the proper noun status.",
            "advanced": "The @deva[सुट्] creates semantic distinction: with @deva[सुट्], these are toponyms (place names); without, they are descriptive compounds. @deva[कास्तर] (city) vs. @deva[कातीर] (shore-related); @deva[अजस्तुन्द] (city) vs. @deva[अजतुन्द] (goat-bellied). This exemplifies how @deva[सुट्] can function as a proper-noun marker in certain lexical items."
        }
    },
    "61156": {
        "en": {
            "simple": "The word @deva[कारस्कर] means 'a tree' (a type of timber tree). It is formed with @deva[सुट्]. When not meaning the tree, the form without @deva[सुट्] is @deva[कारकर] ('doer/maker').",
            "standard": "This sūtra provides @deva[सुट्] for @deva[कारस्कर] meaning 'a tree' (used for timber). The derivation: @deva[कार] + @deva[कृ] + @deva[ट] (@ref[3.2.21]) with @deva[सुट्] → @deva[कारस्करः]. Without the tree meaning, @deva[कारकरः] ('maker of makers/skilled artisan') lacks @deva[सुट्]. Some grammarians don't recognize this as a @deva[सुट्] formation.",
            "advanced": "The @deva[वृक्षे] restriction makes @deva[सुट्] obligatory only for the botanical meaning. The derivation with @deva[ट] affix (@ref[3.2.21]) produces an agent noun; @deva[सुट्] then distinguishes the tree name. The @deva[केचित्] ('some') reference indicates variant analyses—some treat @deva[कारस्कर] as having different morphological structure. The tree is identified as @deva[वञ्जुल] or similar timber species."
        }
    },
    "61157": {
        "en": {
            "simple": "The words @deva[पारस्कर] and similar names are formed with @deva[सुट्]. These are proper names (of places, trees, etc.) that take @deva[सुट्] irregularly. This sūtra concludes the @deva[स्कोः] section that began at @ref[6.1.135].",
            "standard": "This sūtra lists @deva[पारस्कर] etc. as @deva[संज्ञा] (proper names) formed with @deva[सुट्]. Examples: @deva[पारस्करः] (a country), @deva[कारस्करः] (a tree), @deva[रथस्याः] (a place name). These are @deva[निपातन] formations. This is the final sūtra of the @deva[स्कोः पूर्वस्य] @deva[अधिकार] that began at @ref[6.1.135].",
            "advanced": "The @deva[आदि] ('etc.') indicates a @deva[गण] (list) of proper names taking @deva[सुट्]. This sūtra concludes the @deva[स्कोः] @deva[अधिकार]—all rules from @ref[6.1.135] through @ref[6.1.157] concerned @deva[सुट्] augmentation before @deva[क्]. The @deva[संज्ञायाम्] restriction limits these to proper nouns. The list includes geographical and botanical terms requiring memorization."
        }
    },
    "61158": {
        "en": {
            "simple": "In a word, all syllables except one are unaccented (@deva[अनुदात्त]). The one accented syllable carries the @deva[उदात्त] (acute) accent, while all others are low-toned. This is how Sanskrit accent works.",
            "standard": "This sūtra establishes that a @deva[पद] (word) has only one @deva[उदात्त] (acute-accented) syllable; all others are @deva[अनुदात्त] (unaccented/grave). The @deva[कारिका] explains: augments, substitutes, base, and affixes each potentially carry accent, but @deva[एकवर्जं पदस्वरः]—only one syllable in the final word retains accent.",
            "advanced": "This @deva[परिभाषा] (interpretive rule) establishes that despite multiple potential accent-bearing elements (augments, bases, affixes), only one @deva[उदात्त] surfaces per @deva[पद]. The @deva[कारिका] (@deva[आगमस्य विकारस्य प्रकृतेः प्रत्ययस्य च। पृथक्स्वरनिवृत्त्यर्थमेकवर्जं पदस्वरः]) clarifies that accent rules prevent cumulative accents. This initiates the @deva[स्वर] (accent) section of pāda 6.1."
        }
    },
    "61159": {
        "en": {
            "simple": "A stem formed with the @deva[कृत्] affix @deva[घञ्] has @deva[उदात्त] (acute accent) on its final syllable if it comes from the root @deva[कृष्] ('to drag/plow') or contains a long @deva[आ]. So @deva[कर्षः] ('plowing') and @deva[दावः] ('fire') have final accent.",
            "standard": "This sūtra specifies final-syllable @deva[उदात्त] for @deva[घञ्]-derived stems in two cases: (1) from root @deva[कृष्] 'to plow/drag', (2) when containing long @deva[आ]. Examples: @deva[कर्षः꣡] (from @deva[कृष्]), @deva[दावः꣡] (from @deva[दु] with @deva[आ]). Otherwise, @deva[घञ्] stems typically have initial accent.",
            "advanced": "The @deva[घञ्] affix normally produces stems with accent on the first syllable (@deva[आद्युदात्त]). This sūtra provides exceptions: @deva[कृष्] derivatives and @deva[आकारवत्] (आ-containing) forms take @deva[अन्तोदात्त] (final accent). The @deva[कृष्] specification includes @deva[कर्षः] ('plowing'), while @deva[दीर्घात्] covers forms like @deva[दावः], @deva[भावः] where @deva[आ] appears."
        }
    },
    "61160": {
        "en": {
            "simple": "The words @deva[उञ्छ] ('gleaning'), @deva[म्लेच्छ] ('barbarian'), @deva[जञ्ज] (a type of fighting), and @deva[जल्प] ('chatter') have acute accent on the final syllable, even though @deva[घञ्]-formations usually don't.",
            "standard": "This sūtra lists @deva[उञ्छादि] words with final @deva[उदात्त] despite being @deva[घञ्] formations. The list: @deva[उञ्छः꣡] ('gleaning grain'), @deva[म्लेच्छः꣡] ('foreigner/barbarian'), @deva[जञ्जः꣡] ('mutual fighting'), @deva[जल्पः꣡] ('idle talk'). These would normally take initial accent by @deva[घञ्] but are listed exceptions.",
            "advanced": "The @deva[आदि] indicates a @deva[गण] of @deva[घञ्] derivatives with @deva[अन्तोदात्त] that don't fit @ref[6.1.159]'s conditions (no @deva[कृष्] or @deva[आ]). These are @deva[निपातन] (listed forms) whose accent must be memorized. The @deva[घञ्] affix typically yields @deva[आद्युदात्त]; these exceptions show lexical accent variation requiring enumeration."
        }
    },
    "61161": {
        "en": {
            "simple": "An unaccented vowel gets acute accent when the accented vowel that preceded it is deleted. So when @deva[कुमार꣡] + @deva[ई॒] combine and the @deva[अ] is deleted, the @deva[ई] receives the accent: @deva[कुमा॒री꣡].",
            "standard": "This sūtra provides that an @deva[अनुदात्त] vowel acquires @deva[उदात्त] when the preceding @deva[उदात्त] vowel undergoes @deva[लोप] (deletion). Example: @deva[कुमार꣡] (accent on @deva[रा]) + @deva[ई॒] → @deva[कुमारी꣡] (accent shifts to @deva[ई] after @deva[अ]-deletion). The accent 'transfers' to the surviving vowel.",
            "advanced": "The @deva[उदात्तात्] @deva[लोपे] condition specifies: when an @deva[उदात्त] vowel is deleted, its accent transfers to the following @deva[अनुदात्त]. This is @deva[स्वरसन्धि]—accent behavior in vowel coalescence. In @deva[कुमार + ई], the final @deva[अ] of @deva[कुमार꣡] (which would bear accent after the stem) is elided, and the @deva[ई] inherits the @deva[उदात्त]. This preserves one accent per word (@ref[6.1.158])."
        }
    },
    "61162": {
        "en": {
            "simple": "A verb root has acute accent (@deva[उदात्त]) on its final syllable. So @deva[पच्] ('to cook') is accented @deva[प꣡च्], and in forms like @deva[प꣡चति], the root syllable carries the high tone.",
            "standard": "This sūtra establishes that @deva[धातु] (verb roots) are @deva[अन्तोदात्त] (final-syllable accented). Examples: @deva[प꣡चति], @deva[प꣡ठति], @deva[ऊर्णो꣡ति], @deva[गोपाय꣡ति], @deva[या꣡ति]. The @deva[अन्त] from context means the root's final vowel/syllable bears @deva[उदात्त].",
            "advanced": "This fundamental rule assigns @deva[अन्तोदात्त] to all @deva[धातु]. The examples show monosyllabic (@deva[पच्], @deva[पठ्], @deva[या]) and polysyllabic (@deva[ऊर्णु], @deva[गोपाय]) roots—all with final accent. This accent may surface or be overridden depending on affixes. The @deva[धातुस्वर] serves as the base accent for verbal derivation; @deva[कृत्/तद्धित] affixes may impose their own accent patterns."
        }
    },
    "61163": {
        "en": {
            "simple": "A stem formed with an affix, augment, or substitute that has indicatory @deva[च्] gets acute accent on the final syllable. So @deva[भङ्गुर꣡म्] ('fragile'), @deva[भासुर꣡म्] ('shining'), @deva[मेदुर꣡म्] ('fat') have final accent because their @deva[उरच्] affix has @deva[च्] as @deva[इत्].",
            "standard": "This sūtra assigns @deva[अन्तोदात्त] to stems formed by affixes (or augments/substitutes) with @deva[चित्] (indicatory @deva[च्]). The @deva[उरच्] affix in @deva[भङ्गुर꣡], @deva[भासुर꣡], @deva[मेदुर꣡] has @deva[च्] as @deva[इत्], triggering final accent. The @deva[च्] is a marker for this accent pattern.",
            "advanced": "The @deva[चित्] marker indicates @deva[अन्तोदात्त] across various formations. The @deva[प्रत्यय/आगम/आदेश] with @deva[चित्] impose final accent on the derived stem. @deva[उरच्] examples: @deva[भङ्गुर] (from @deva[भञ्ज्]), @deva[भासुर] (from @deva[भास्]), @deva[मेदुर] (from @deva[मिद्]). The @deva[च्] is purely diacritic—it marks accent behavior, not phonological content. Compare with @deva[कित्]/ङित्] markers for other purposes."
        }
    },
    "61164": {
        "en": {
            "simple": "A stem formed with a @deva[तद्धित] affix that has indicatory @deva[च्] gets acute accent on the final syllable. So @deva[काञ्जायनाः꣡], formed with @deva[च्फञ्] (@ref[4.1.98]), has final accent.",
            "standard": "This sūtra specifies @deva[अन्तोदात्त] for @deva[तद्धित] formations with @deva[चित्] (indicatory @deva[च्]). Example: @deva[काञ्जायन꣡] formed by @deva[च्फञ्] (@ref[4.1.98])—the @deva[च्] triggers final accent. Similarly @deva[कुञ्ज + च्फञ्] → @deva[कौञ्जायन꣡] with final @deva[उदात्त].",
            "advanced": "The @deva[तद्धित]-specific @deva[चित्] rule complements @ref[6.1.163]. Affixes like @deva[च्फञ्] (@ref[4.1.98]) carry @deva[च्] as accent marker. The @deva[तद्धिते] specification distinguishes these from @deva[कृत्]-affix @deva[चित्] forms. Patronymic formations like @deva[काञ्जायन], @deva[कौञ्जायन] show the @deva[अन्तोदात्त] pattern. The @deva[च्] is elided by @deva[इत्संज्ञा] (@ref[1.3.3]) after marking accent."
        }
    },
    "61165": {
        "en": {
            "simple": "A stem formed with a @deva[तद्धित] affix that has indicatory @deva[क्] gets acute accent on the final syllable. So @deva[नाडायनः꣡], formed with @deva[फक्] (@ref[4.1.99]), has final accent.",
            "standard": "This sūtra assigns @deva[अन्तोदात्त] to @deva[तद्धित] formations with @deva[कित्] (indicatory @deva[क्]). Example: @deva[नाडायन꣡] formed by @deva[फक्] (@ref[4.1.99])—the @deva[क्] triggers final accent. Similarly @deva[चारायण꣡] shows the pattern.",
            "advanced": "The @deva[कित्] marker in @deva[तद्धित] signals @deva[अन्तोदात्त], parallel to @deva[चित्] in @ref[6.1.164]. Affixes like @deva[फक्] (@ref[4.1.99]) use @deva[क्] for accent marking. The @deva[तद्धिते] domain restriction maintains the pattern for nominal derivatives. Forms like @deva[नाडायन], @deva[चारायण] (both patronymics) display final accent. The @deva[क्] serves as @deva[इत्] (@ref[1.3.3]), dropping after its diacritic function."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.151-6.1.165)")
