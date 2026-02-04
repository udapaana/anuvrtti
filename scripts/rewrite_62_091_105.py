#!/usr/bin/env python3
"""Rewrite commentary for 6.2.91-105 (antodātta exceptions and adhikāra)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62091": {
        "en": {
            "simple": "Six words do not get first-syllable accent before @deva[अर्म]: @deva[भूत], @deva[अधिक], @deva[संजीव], @deva[मद्र], @deva[अश्मन्], and @deva[कञ्जल]. They keep final accent instead. Examples: @deva[भूतार्मम्], @deva[अधिकार्मम्], @deva[संजीवार्मम्], @deva[मद्रार्मम्], @deva[अश्मार्मम्], @deva[कञ्जलार्मम्]—all with acute on the final by @ref[6.1.223].",
            "standard": "This sūtra lists exceptions to @ref[6.2.90]. The six words @deva[भूत], @deva[अधिक], @deva[संजीव], @deva[मद्र], @deva[अश्मन्], @deva[कञ्जल] do not receive @deva[आद्युदात्त] before @deva[अर्म]. Instead, these compounds take @deva[अन्तोदात्त] by @ref[6.1.223]. A vārttika notes that in Vedic usage, words like @deva[दिवोदास] have acute on the first syllable.",
            "advanced": "The listing @deva[भूताधिकसंजीवमद्राश्मकञ्जलानाम्] provides exceptions to the @deva[आद्युदात्त] assigned by @ref[6.2.90]. The compound @deva[मद्राश्मार्मम्] demonstrates that @deva[मद्र] and @deva[अश्मन्] can compound together before @deva[अर्म]. The Vedic vārttika (@deva[दिवोदासादीनां] @deva[छन्दस्याद्युदात्तत्वम्]) indicates dialectal variation in accent patterns."
        }
    },
    "62092": {
        "en": {
            "simple": "This is a heading rule (@deva[अधिकार]). From here through @ref[6.2.110], the sūtras teach that the last syllable of the first member of a compound gets acute accent (@deva[उदात्त]). This is called @deva[अन्तोदात्त] because the final (@deva[अन्त]) of the first word becomes acute.",
            "standard": "The @deva[अधिकार] phrase @deva[प्रथमानिर्दिष्टं] @deva[समास] @deva[उपसर्जनम्] @deva[अन्त्यं] @deva[उदात्तम्] governs through @ref[6.2.110]. This marks a shift from the @deva[आद्युदात्त] section to rules assigning acute to the final syllable of the पूर्वपद. The nominative case marking (@deva[प्रथमानिर्दिष्ट]) indicates the subordinate member (@deva[उपसर्जन]) of the compound.",
            "advanced": "This @deva[अधिकार] establishes a new accent domain. The term @deva[प्रथमानिर्दिष्ट] identifies the उपसर्जन (subordinate compound member) through its nominative-case statement in the sūtra. Within this section (@ref[6.2.92]-@ref[6.2.110]), rules assign @deva[अन्त्योदात्त] to the पूर्वपद, contrasting with the preceding @deva[आद्युदात्त] section. The scope extends to @ref[6.2.110] @deva[निष्ठोपसर्गपूर्वमन्यतरस्याम्]."
        }
    },
    "62093": {
        "en": {
            "simple": "When @deva[सर्व] means 'completely' or 'through and through' and comes before an attributive word, its final syllable gets acute accent. Examples: @deva[सर्वश्वेतः] 'completely white', @deva[सर्वकृष्णः] 'completely black', @deva[सर्वमहान्] 'completely great'.",
            "standard": "The word @deva[सर्व] receives @deva[अन्त्योदात्त] when it precedes a विशेषण (attributive word) in the sense of 'pervading throughout'. In @deva[सर्वश्वेतः], the whiteness pervades the entire object. But @deva[परमश्वेतः] doesn't qualify—though @deva[परम] also means extreme whiteness, it's not @deva[सर्व]. And @deva[सर्वसौवर्णः] 'made of gold' fails because @deva[सौवर्ण] names the material, not an attribute.",
            "advanced": "The condition @deva[विशेषणे] restricts this accent to compounds where the उत्तरपद is genuinely attributive. The distinction between @deva[सर्वश्वेतः] (qualifying) and @deva[सर्वसौवर्णः] (material-denoting) shows that द्रव्यवाचिन् words in their primary sense don't count as विशेषण here. The counterexample @deva[परमश्वेतः] demonstrates that only @deva[सर्व] triggers this accent, not semantically similar words."
        }
    },
    "62094": {
        "en": {
            "simple": "Before @deva[गिरि] 'mountain' or @deva[निकाय] 'group', the first member gets final-syllable accent when the compound is a proper name. Examples: @deva[अञ्जनागिरिः], @deva[भञ्जनागिरिः] (mountain names); @deva[शापिण्डनिकायः], @deva[मौण्डिनिकायः] (group names). Non-names like @deva[परमगिरिः] 'excellent mountain' don't get this accent.",
            "standard": "This sūtra assigns @deva[अन्त्योदात्त] to the पूर्वपद before @deva[गिरि] or @deva[निकाय] when the compound is a संज्ञा (proper name). The finals of @deva[अञ्जन] and @deva[भञ्जन] lengthen by @ref[6.3.117] yielding @deva[अञ्जनागिरिः]. The condition @deva[संज्ञायाम्] excludes common compounds like @deva[परमगिरिः] or @deva[ब्राह्मणनिकायः].",
            "advanced": "The संज्ञा condition distinguishes proper names (where accent marks identity) from descriptive compounds. Mountain names like @deva[अञ्जनागिरि] and group designations like @deva[शापिण्डनिकाय] receive पूर्वपदान्त्योदात्त. The lengthening in @deva[अञ्जनागिरि] follows @ref[6.3.117] @deva[गिरिनद्यादिभ्योऽञ्जसंज्ञायाम्]. Without the name condition, regular compound accent applies."
        }
    },
    "62095": {
        "en": {
            "simple": "Before @deva[कुमारी] 'maiden', the first member gets final-syllable accent when the compound denotes age. Examples: @deva[वृद्धकुमारी] 'old maid' (formed by @ref[2.1.57]), @deva[जरत्कुमारी] 'aged maiden' (from @deva[जरती] by @ref[2.1.49]). These compounds become masculine by @ref[6.3.42].",
            "standard": "The condition @deva[वयसि] 'denoting age' is essential. Though @deva[कुमारी] by @deva[ङीप्] (@ref[4.1.20]) means 'young woman', when compounded with age-words like @deva[वृद्धा] or @deva[जरती], the combination denotes one who remains unmarried at advanced age. The apparent semantic contradiction is resolved by understanding @deva[कुमारी] as 'unmarried' rather than 'young'.",
            "advanced": "The वयसि condition creates a specialized compound meaning 'unmarried despite old age'. The masculine gender assignment by @ref[6.3.42] applies when the compound functions as a name. The @deva[कुमारी] originally formed by @deva[ङीप्] under @ref[4.1.20] for youthful women acquires an extended meaning 'unmarried woman' in these age-denoting compounds, resolving the apparent semantic paradox."
        }
    },
    "62096": {
        "en": {
            "simple": "Before @deva[उदक] 'water', the first member gets final-syllable accent when denoting a mixture. Examples: @deva[गुडोदकम्] 'jaggery-water', @deva[तिलोदकम्] 'sesame-water'. When it's not a mixture—like @deva[शीतोदकम्] 'cold water' (describing the water itself)—this accent doesn't apply.",
            "standard": "The condition @deva[अकेवले] means 'in the sense of mixture'. In @deva[गुडोदकम्], jaggery is mixed into water. After applying this rule's accent, @ref[8.2.6] may optionally produce स्वरित on the combined vowel. But @deva[शीतोदकम्] 'cold water' merely describes the water's quality, not a mixture, so regular accent applies.",
            "advanced": "The अकेवल condition distinguishes mixtures (where an ingredient joins water) from mere descriptions. After sandhi of @deva[गुड] + @deva[उदक], the acute on @deva[गुड]'s final combines with the following grave @deva[उ], potentially yielding स्वरित by @ref[8.2.6]. The semantic distinction: @deva[गुडोदकम्] = water with jaggery (mixture); @deva[शीतोदकम्] = water that is cold (attribute)."
        }
    },
    "62097": {
        "en": {
            "simple": "Before a @deva[द्विगु] compound (numeral compound), the first member gets final-syllable accent when the whole denotes a sacrifice. Examples: @deva[गर्गत्रिरात्रः] 'Garga's three-night sacrifice', @deva[कुसुरुविन्दसप्तरात्रः] 'Kusuruvinda's seven-night sacrifice'. Non-sacrifice compounds like @deva[अतिरात्रः] don't follow this rule.",
            "standard": "The conditions require: (1) the उत्तरपद is a द्विगु compound like @deva[त्रिरात्र]; (2) the whole denotes यज्ञ (sacrifice). Thus @deva[गर्गाणां] @deva[त्रिरात्रः] = @deva[गर्गत्रिरात्रः]. But @deva[अतिरात्रः] 'beyond-night ritual', formed as प्रादिसमास with समासान्त @deva[अच्] by @ref[5.4.87], takes final accent by @ref[6.1.163] instead.",
            "advanced": "The यज्ञ restriction limits this rule to sacrificial nomenclature. The द्विगु condition requires a numeral-headed उत्तरपद. The counterexample @deva[अतिरात्रः] shows that प्रादिसमास with समासान्त @deva[अच्] follows @ref[6.1.163] @deva[समासान्ते] for accent, not this rule. The genitive relationship (@deva[गर्गाणां] @deva[त्रिरात्रः]) identifies whose sacrifice is named."
        }
    },
    "62098": {
        "en": {
            "simple": "Before @deva[सभा] 'assembly', the first member gets final-syllable accent when the compound is neuter gender. Examples: @deva[गोपालसभम्] 'cowherds' assembly', @deva[पशुपालसभम्] 'shepherds' assembly', @deva[स्त्रीसभम्] 'women's assembly'. When @deva[सभा] stays feminine, like @deva[राजसभा], this accent doesn't apply.",
            "standard": "The neuter gender condition (@deva[नपुंसकं] @deva[यत्]) is key. The word @deva[सभा] becomes neuter by @ref[2.4.23]-@ref[2.4.24] in certain compounds. When neuter, the पूर्वपद receives अन्त्योदात्त: @deva[गोपालसभम्], @deva[दासीसभम्]. When @deva[सभा] remains feminine (@deva[राजसभा], @deva[ब्राह्मणसभा]), regular accent applies.",
            "advanced": "The नपुंसक condition ties accent to gender transformation. Rules @ref[2.4.23]-@ref[2.4.24] specify when @deva[सभा] becomes neuter in compounds. This accent rule applies only when that gender change occurs. The correlation between gender and accent reflects the compound's semantic specialization—neuter @deva[सभम्] compounds often denote specific institutional assemblies."
        }
    },
    "62099": {
        "en": {
            "simple": "Before @deva[पुर] 'city', the first member gets final-syllable accent when naming an Eastern city. Examples: @deva[ललाटपुरम्], @deva[काञ्चीपुरम्], @deva[शिवदत्तपुरम्], @deva[काणिपुरम्]. Non-Eastern cities like @deva[शिवपुरम्] don't get this accent.",
            "standard": "The condition @deva[प्राच्याम्] 'of the Eastern people' restricts this accent to Eastern city names. The East (@deva[प्राची] @deva[दिक्]) had distinctive naming conventions. Cities like @deva[ललाटपुर], @deva[काञ्चीपुर] follow this pattern. Western or other cities like @deva[शिवपुर] take regular compound accent.",
            "advanced": "The प्राच्याम् condition reflects regional linguistic variation in compound accent patterns. Eastern cities (प्राच्यदेशसंज्ञा) follow पूर्वपदान्त्योदात्त, while other regions follow general rules. This geographical conditioning of accent is paralleled in other rules distinguishing प्राची vs. उदीची usage patterns."
        }
    },
    "62100": {
        "en": {
            "simple": "The words @deva[अरिष्ट] and @deva[गौड] get final-syllable accent before @deva[पुर]. Examples: @deva[अरिष्टपुरम्], @deva[गौडपुरम्]. The word @deva[पूर्व] 'first' in the sūtra extends this to compounds like @deva[अरिष्टश्रितपुरम्], @deva[गौडभृत्यपुरम्].",
            "standard": "This sūtra specifically names @deva[अरिष्ट] and @deva[गौड] as receiving अन्त्योदात्त before @deva[पुर], regardless of Eastern location. The term @deva[पूर्वम्] allows extension: when @deva[अरिष्ट] or @deva[गौड] is itself preceded by another word (as in @deva[अरिष्टश्रितपुर]), the entire पूर्वपद receives this accent.",
            "advanced": "The explicit enumeration of @deva[अरिष्ट] and @deva[गौड] suggests these city names follow the Eastern pattern regardless of actual geography. The @deva[पूर्वम्] extension mechanism allows compounds where @deva[अरिष्ट]/@deva[गौड] is itself the उत्तरपद of the पूर्वपद: @deva[अरिष्टश्रित] + @deva[पुर] → @deva[अरिष्टश्रितपुरम्] with accent on @deva[श्रित]'s final."
        }
    },
    "62101": {
        "en": {
            "simple": "Three words are exceptions before @deva[पुर]: @deva[हास्तिन], @deva[फलक], and @deva[मार्देय] do not get final-syllable accent. Examples: @deva[हास्तिनपुरम्] (Hastinapur), @deva[फलकपुरम्], @deva[मार्देयपुरम्]. These keep regular compound accent.",
            "standard": "This sūtra provides exceptions to @ref[6.2.99]. The cities @deva[हास्तिनपुर], @deva[फलकपुर], @deva[मार्देयपुर] don't receive पूर्वपदान्त्योदात्त despite being Eastern names. The word @deva[मार्देय] is a patronymic from @deva[मृदु] formed by @deva[ढक्] (शुभ्रादि class), with @deva[उ] elided by @ref[6.4.147].",
            "advanced": "The exception @deva[न] blocks @ref[6.2.99] for these three specific city names. @deva[हास्तिनपुर] (the famous Mahābhārata capital) and the others maintain उत्तरपदान्त accent. The derivation @deva[मृदु] → @deva[मार्देय] shows वृद्धि by @deva[ढक्] followed by @deva[उ]-लोप by @ref[6.4.147] @deva[हलो] @deva[यमां] @deva[यमि] @deva[लोपः]."
        }
    },
    "62102": {
        "en": {
            "simple": "Four words get final-syllable accent before @deva[बिल] 'hole': @deva[कुसूल], @deva[कूप], @deva[कुम्भ], and @deva[शाला]. Examples: @deva[कुसूलबिलम्], @deva[कूपबिलम्], @deva[कुम्भबिलम्], @deva[शालाबिलम्]. Other words like @deva[सर्प] don't get this: @deva[सर्पबिलम्].",
            "standard": "This sūtra enumerates four words receiving अन्त्योदात्त before @deva[बिल] 'opening/hole': @deva[कुसूल] (granary), @deva[कूप] (well), @deva[कुम्भ] (pot), @deva[शाला] (hall). The counterexample @deva[सर्पबिलम्] 'snake-hole' takes regular accent. The condition @deva[बिले] is specific—@deva[कुसूलस्वामी] doesn't qualify.",
            "advanced": "The enumeration @deva[कुसूलकूपकुम्भशालाः] identifies पूर्वपद receiving अन्त्योदात्त before @deva[बिल]. These compounds denote specific types of openings associated with storage structures. The counterexample @deva[कुसूलस्वामी] shows that only @deva[बिल] as उत्तरपद triggers this accent, not other second members."
        }
    },
    "62103": {
        "en": {
            "simple": "Direction words like @deva[पूर्व] 'east' and @deva[अपर] 'west' get final-syllable accent before words denoting villages, countries, or narratives. Examples: @deva[पूर्वेषुकामशामी], @deva[पूर्वकृष्णमृत्तिका] (village), @deva[पूर्वपञ्चालाः] (country), @deva[पूर्वाधिरामम्] (story name).",
            "standard": "Direction words (@deva[दिक्शब्द]) receive अन्त्योदात्त before ग्राम (village), जनपद (country), or आख्यायिका (narrative) names. The compounding follows @ref[2.1.50] for villages, @ref[2.1.58] for countries. After this accent, @ref[8.2.6] may optionally produce स्वरित. The scope extends to @deva[चानराट].",
            "advanced": "The tripartite condition—ग्राम, जनपद, आख्यायिका—covers geographical and narrative nomenclature using directional prefixes. Compounds like @deva[पूर्वपञ्चालाः] are कर्मधारय by @ref[2.1.58]. The accent on @deva[पूर्व]/@deva[अपर] finals, followed by grave उत्तरपद, may yield optional स्वरित by @ref[8.2.6] @deva[उदात्तादनुदात्तस्य] @deva[स्वरितः]."
        }
    },
    "62104": {
        "en": {
            "simple": "Direction words get final-syllable accent before names of scholarly traditions derived from teachers' names. Examples: @deva[पूर्वपाणिनीयाः] 'earlier Pāṇinīyas', @deva[अपरपाणिनीयाः] 'later Pāṇinīyas', @deva[पूर्वकाशकृत्स्नाः], @deva[अपरकाशकृत्स्नाः]. Non-teacher-derived names like @deva[पूर्वशिष्याः] 'earlier students' don't qualify.",
            "standard": "The condition @deva[आचार्यप्रभृतीनाम्] 'derived from teachers' requires the उत्तरपद be formed from a teacher's name: @deva[पाणिनि] → @deva[पाणिनीय], @deva[काशकृत्स्न] → @deva[काशकृत्स्ना]. Compare @ref[6.2.36]. General words like @deva[शिष्य] 'student' or compositional uses like @deva[पूर्वपाणिनीयं] @deva[शास्त्रम्] 'ancient Pāṇinian text' don't trigger this accent.",
            "advanced": "This rule applies to शैक्षसंज्ञा (names of scholarly lineages). The तद्धित derivation @deva[पाणिनि] + @deva[छ] → @deva[पाणिनीय] creates collective nouns for followers. The contrast with @deva[पूर्वपाणिनीयं] @deva[शास्त्रम्] shows that bahuvṛīhi/tatpuruṣa interpretations ('ancient Pāṇinian work') don't receive this accent—only the शिष्यसंज्ञा (student-collective) meaning qualifies."
        }
    },
    "62105": {
        "en": {
            "simple": "Direction words and @deva[सर्व] get final-syllable accent before words that undergo वृद्धि in their first syllable by @ref[7.3.12]. That rule applies when तद्धित affixes with @deva[ञ्], @deva[ण्], or @deva[क्] follow compounds with @deva[सु], @deva[सर्व], or @deva[अर्ध] as first member.",
            "standard": "This sūtra connects accent assignment to the उत्तरपदवृद्धि process of @ref[7.3.10] and @ref[7.3.12]. When तद्धित affixes (@deva[ञ्], @deva[ण्], @deva[क्]) trigger वृद्धि in the उत्तरपद after @deva[सु]/@deva[सर्व]/@deva[अर्ध], the direction words and @deva[सर्व] as पूर्वपद receive अन्त्योदात्त.",
            "advanced": "The term @deva[उत्तरपदवृद्धिः] refers to @ref[7.3.10]-@ref[7.3.12], where तद्धित derivation triggers वृद्धि in the उत्तरपद's first vowel. The coordination of this accent rule with the वृद्धि operation creates a phonological-morphological interface: the same compounds that undergo उत्तरपदवृद्धि also receive पूर्वपदान्त्योदात्त."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.91-6.2.105)")
