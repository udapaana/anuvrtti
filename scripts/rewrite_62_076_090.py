#!/usr/bin/env python3
"""Rewrite commentary for 6.2.76-90 (ādi-udātta rules continued)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62076": {
        "en": {
            "simple": "A compound with @deva[अण्]-affix ending that denotes a professional person gets first-syllable accent—but not when the second term is @deva[कार] (from @deva[कृ] 'to make'). So @deva[ध꣡न्वकारः] doesn't follow this, but other professional compounds do.",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[अण्]-ending compounds denoting @deva[शिल्पिन्] (professional), with @deva[कार] excepted. Professional-name compounds take first-syllable accent, but @deva[कार]-endings (like @deva[धन्वकारः] 'bow-maker') are excluded from this rule.",
            "advanced": "The @deva[शिल्पिन्यण्यकारे] condition: @deva[अण्]-@deva[कृत्] compound denoting @deva[शिल्पिन्] takes @deva[आद्युदात्त], except when @deva[उत्तरपद] is @deva[कार] (from @deva[कृञ्]). The @deva[अकारे] exception preserves @deva[कार]-compounds' different accent. This refines @ref[6.2.75]'s official-compound rule."
        }
    },
    "62077": {
        "en": {
            "simple": "An @deva[उपपद] compound with @deva[अण्]-affix ending that forms a name gets first-syllable accent—but not when the second term is @deva[कार]. So name-compounds like @deva[त꣡क्षशिलः] have first-syllable accent.",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[अण्]-ending @deva[उपपद समास] when forming a @deva[संज्ञा] (name), with @deva[कार] excepted. Example: @deva[त꣡क्षशिलः] (proper name) has first-syllable accent. @deva[कार]-compounds are excluded.",
            "advanced": "The @deva[संज्ञायाम् अण्युपपदे अकारे] condition: @deva[अण्]-ending @deva[उपपद समास] forming @deva[संज्ञा] (proper name) takes @deva[आद्युदात्त], except @deva[कार]. @deva[त꣡क्षशिल] (place name 'Taxila'), @deva[क꣡म्बलबालिन्] (personal name). The @deva[अकारे] exception consistently removes @deva[कार]-compounds."
        }
    },
    "62078": {
        "en": {
            "simple": "The words @deva[गो] ('cow'), @deva[तन्ति] ('cord'), and @deva[यव] ('barley') get first-syllable accent before @deva[पाल] ('protector'). So @deva[गो꣡पालः] ('cowherd'), @deva[त꣡न्तिपालः] ('cord-keeper'), @deva[य꣡वपालः] ('barley-guard').",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[गो/तन्ति/यव] before @deva[पाल]. Examples: @deva[गो꣡पालः] ('cow-protector'), @deva[त꣡न्तिपालः] ('rope-keeper'), @deva[य꣡वपालः] ('barley-protector'). These specific first members take first-syllable accent with @deva[पाल].",
            "advanced": "The @deva[गोतन्तियवानां पाले] lists three words receiving @deva[आद्युदात्त] before @deva[पाल]. @deva[गो꣡पाल] ('cowherd' = Kṛṣṇa epithet), @deva[त꣡न्तिपाल] ('cord-keeper'), @deva[य꣡वपाल] ('barley-guard'). These specific combinations are lexically specified for first-syllable accent."
        }
    },
    "62079": {
        "en": {
            "simple": "A compound ending in the @deva[कृत्] affix @deva[णिनि] (producing @deva[इन्]) gets first-syllable accent on its first member. So @deva[पु꣡ष्पहारी] ('flower-stealer'), @deva[फ꣡लहारी] ('fruit-stealer').",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[णिनि]-ending (@deva[इन्]-affix) compounds. Examples: @deva[पु꣡ष्पहारिन्] ('flower-bearer'), @deva[फ꣡लहारिन्] ('fruit-carrier'). The @deva[णिनि] agent-noun compounds take first-syllable accent.",
            "advanced": "The @deva[कृत्णिनौ] condition: @deva[कृत्]-affix @deva[णिनि] (@ref[3.2.78] etc.) compounds trigger @deva[आद्युदात्त] on @deva[पूर्वपद]. @deva[पु꣡ष्पहारिन्], @deva[फ꣡लहारिन्], @deva[ज꣡लधारिन्]. The @deva[इन्]-suffix agent nouns consistently take first-syllable accent in their @deva[उपपद] compounds."
        }
    },
    "62080": {
        "en": {
            "simple": "When the first member expresses something to which resemblance is shown, it gets first-syllable accent before a @deva[णिनि]-ending word. So @deva[अ꣡ग्निदायी] ('fire-like giver') or @deva[सू꣡र्यदायी] ('sun-like giver').",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[उपमान] (comparison-standard) before @deva[णिनि]-ending words. The first member expressing what something resembles gets first-syllable accent. Example: @deva[अ꣡ग्निदायिन्] ('one who gives like fire').",
            "advanced": "The @deva[उपमाने णिनौ] condition: @deva[उपमान] (standard of comparison) + @deva[णिनि]-derivative takes @deva[आद्युदात्त] on the @deva[उपमान]. @deva[अ꣡ग्निदायिन्] ('giver [generous] like fire'), @deva[सू꣡र्यदायिन्] ('giver like the sun'). The comparison-word gets first-syllable accent."
        }
    },
    "62081": {
        "en": {
            "simple": "The compounds @deva[युक्तारोहिन्] ('trained climber') and similar listed words have first-syllable accent. These are specific compound names that take @deva[आद्युदात्त].",
            "standard": "This sūtra lists @deva[युक्तारोह्यादि] compounds with @deva[आद्युदात्त]: @deva[यु꣡क्तारोही], @deva[आ꣡गतरोही], @deva[आ꣡गतयोधी], @deva[आ꣡गतवञ्ची], etc. These are @deva[णिनि]-compounds with specific first members that take first-syllable accent.",
            "advanced": "The @deva[युक्तारोह्यादयश्च] introduces a @deva[गण] of @deva[णिनि]-compounds with @deva[आद्युदात्त]. The list includes: @deva[यु꣡क्तारोहिन्], @deva[आ꣡गतरोहिन्], @deva[आ꣡गतयोधिन्], @deva[आ꣡गतवञ्चिन्], @deva[आ꣡गतनर्दिन्], @deva[आ꣡गतग्राहिन्], @deva[यु꣡क्तग्राहिन्]. These @deva[निपातन] forms require memorization."
        }
    },
    "62082": {
        "en": {
            "simple": "When the first member ends in a long vowel, or is @deva[काश] ('grass'), @deva[तुष] ('husk'), @deva[भ्राष्ट्र] ('frying pan'), or @deva[वट] ('banyan'), and is followed by @deva[ज] ('born'), it gets first-syllable accent. So @deva[प꣡द्मजः] ('lotus-born').",
            "standard": "This sūtra assigns @deva[आद्युदात्त] before @deva[ज] ('born') when @deva[पूर्वपद] ends in @deva[दीर्घ] (long vowel) or is @deva[काश/तुष/भ्राष्ट्र/वट]. Examples: @deva[प꣡द्मजः] ('lotus-born'), @deva[का꣡शजः] ('grass-born'), @deva[व꣡टजः] ('banyan-born').",
            "advanced": "The @deva[दीर्घान्तात् काशतुषभ्राष्ट्रवटाच्च जे] condition: @deva[दीर्घान्त] (long-vowel-final) or the four listed words + @deva[ज] trigger @deva[आद्युदात्त]. @deva[प꣡द्मज] ('lotus-born'), @deva[अ꣡ब्जज] ('water-born'), @deva[का꣡शज], @deva[तु꣡षज], @deva[भ्रा꣡ष्ट्रज], @deva[व꣡टज]. The 'born from X' compounds accent the origin-word."
        }
    },
    "62083": {
        "en": {
            "simple": "In a word of more than two syllables followed by @deva[ज] ('born'), the accent falls on the syllable before the last (penultimate). So @deva[उपस꣡रजः] ('lower-born') has accent on @deva[स].",
            "standard": "This sūtra assigns @deva[उपोत्तमोदात्त] (penultimate accent) to @deva[त्र्यादि] (3+ syllable) words before @deva[ज]. Examples: @deva[उपस꣡रजः] ('born below'), @deva[मन्दु꣡रजः] ('stable-born'). The penultimate syllable gets accent.",
            "advanced": "The @deva[त्र्यादेरुपोत्तमं जे] condition: @deva[त्र्यादि] (three or more syllables) + @deva[ज] takes @deva[उपोत्तम] (penultimate) accent. @deva[उपस꣡रज], @deva[मन्दु꣡रज]. This contrasts with @ref[6.2.82]'s @deva[आद्युदात्त] for shorter stems. Polysyllabic @deva[ज]-compounds accent differently."
        }
    },
    "62084": {
        "en": {
            "simple": "Before @deva[ग्राम] ('village'), the first member gets first-syllable accent when the compound doesn't mean 'inhabitants'. So @deva[म꣡ल्लग्रामः] ('wrestlers' village'), @deva[व꣡णिग्ग्रामः] ('merchants' village')—but not when meaning 'the villagers'.",
            "standard": "This sūtra assigns @deva[आद्युदात्त] before @deva[ग्राम] when NOT denoting @deva[निवासिन्] (inhabitants). Examples: @deva[म꣡ल्लग्रामः] ('village of wrestlers'), @deva[व꣡णिग्ग्रामः] ('merchant village'). When meaning 'the residents themselves', different accent applies.",
            "advanced": "The @deva[ग्रामे अनिवासिनि] condition: @deva[ग्राम]-compounds take @deva[आद्युदात्त] when NOT meaning @deva[निवासिन्] (inhabitants). @deva[म꣡ल्लग्राम] ('wrestlers' settlement'), @deva[व꣡णिग्ग्राम] ('traders' village'). When @deva[ग्राम] means 'the villagers' (metonymy), different accent prevails."
        }
    },
    "62085": {
        "en": {
            "simple": "The first member gets first-syllable accent before @deva[घोष] ('sound/camp') and similar words in this list. So @deva[दा꣡क्षिघोषः], @deva[दा꣡क्षिकटः], @deva[दा꣡क्षिपल्वलः].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] before @deva[घोषादि] words. Examples: @deva[दा꣡क्षिघोषः] ('southern camp'), @deva[दा꣡क्षिकटः], @deva[दा꣡क्षिपल्वलः]. The @deva[आदि] indicates a @deva[गण] of place-denoting second members.",
            "advanced": "The @deva[घोषादिषु] introduces a @deva[गण] including @deva[घोष] ('cowherds' camp'), @deva[कट], @deva[पल्वल], and similar words. Compounds with these @deva[उत्तरपद] take @deva[आद्युदात्त]: @deva[दा꣡क्षिघोष], @deva[दा꣡क्षिकट], @deva[दा꣡क्षिपल्वल]. These denote locations/settlements."
        }
    },
    "62086": {
        "en": {
            "simple": "The words @deva[छात्रि] ('student') and similar get first-syllable accent before @deva[शाला] ('hall'). So @deva[छा꣡त्रिशाला] ('students' hall'), @deva[ऐ꣡लिशाला], @deva[भा꣡ण्डिशाला].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[छात्र्यादि] before @deva[शाला] ('hall/building'). Examples: @deva[छा꣡त्रिशाला] ('student hall'), @deva[ऐ꣡लिशाला], @deva[भा꣡ण्डिशाला] ('warehouse'). Listed first members take first-syllable accent with @deva[शाला].",
            "advanced": "The @deva[छात्र्यादीनां शालायाम्] introduces words taking @deva[आद्युदात्त] before @deva[शाला]. @deva[छा꣡त्रिशाला] ('students' quarters'), @deva[ऐ꣡लिशाला], @deva[भा꣡ण्डिशाला] ('storage hall'). The @deva[आदि] indicates a @deva[गण] of specific compounds with @deva[शाला]."
        }
    },
    "62087": {
        "en": {
            "simple": "A first member without @deva[वृद्धि] in its first syllable (and not in the @deva[कर्की] list) gets first-syllable accent before @deva[प्रस्थ] ('plateau/measure'). So @deva[इ꣡न्द्रप्रस्थः] ('Indra's plateau').",
            "standard": "This sūtra assigns @deva[आद्युदात्त] before @deva[प्रस्थ] when @deva[पूर्वपद] lacks @deva[वृद्धि] in first syllable and isn't @deva[कर्क्यादि]. Example: @deva[इ꣡न्द्रप्रस्थः] ('Indraprastha'). @deva[वृद्धि]-initial words and @deva[कर्की]-group follow different rules.",
            "advanced": "The @deva[अवृद्धादकर्क्यादेः प्रस्थे] condition: @deva[अवृद्ध] (no @deva[वृद्धि] = @deva[आ ऐ औ] in first syllable) and not @deva[कर्क्यादि] + @deva[प्रस्थ] triggers @deva[आद्युदात्त]. @deva[इ꣡न्द्रप्रस्थ] (no @deva[वृद्धि]), but @deva[*औदुम्बरप्रस्थ] (has @deva[वृद्धि]) differs. The @deva[कर्की]-list contains exceptions."
        }
    },
    "62088": {
        "en": {
            "simple": "The words @deva[माला] ('garland') and similar get first-syllable accent before @deva[प्रस्थ], even if they have @deva[वृद्धि]. So @deva[मा꣡लाप्रस्थः], @deva[शा꣡लाप्रस्थः] despite @deva[आ] in first syllable.",
            "standard": "This sūtra allows @deva[आद्युदात्त] for @deva[मालादि] before @deva[प्रस्थ], overriding @ref[6.2.87]'s @deva[वृद्धि] restriction. Examples: @deva[मा꣡लाप्रस्थः] ('Garland-plateau'), @deva[शा꣡लाप्रस्थः] ('Hall-plateau'). These @deva[वृद्धि]-having words still take first-syllable accent.",
            "advanced": "The @deva[मालादीनां प्रस्थे] exception: @deva[माला] etc. take @deva[आद्युदात्त] before @deva[प्रस्थ] despite having @deva[वृद्धि] (@deva[आ]). @deva[मा꣡लाप्रस्थ], @deva[शा꣡लाप्रस्थ] override @ref[6.2.87]. This @deva[गण] lists words exempted from the @deva[अवृद्ध] condition."
        }
    },
    "62089": {
        "en": {
            "simple": "The first member gets first-syllable accent before @deva[नगर] ('city'), but not when the first member is @deva[महत्] or @deva[नव], nor when referring to Eastern cities (@deva[प्राच्य]). So @deva[ह꣡स्तिनगरम्] ('Hastināpura'), but not @deva[महानगरम्].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] before @deva[नगर] with exceptions: @deva[महत्/नव] as first member, and @deva[प्राच्यदेश] (Eastern land) cities are excluded. Example: @deva[ह꣡स्तिनगरम्] ('elephant-city'), but @deva[महानगर꣡म्] and Eastern city-names follow default accent.",
            "advanced": "The @deva[नगरे अमहान्नवयोरप्राच्यदेशे] condition: @deva[नगर]-compounds take @deva[आद्युदात्त] except when @deva[पूर्वपद] is @deva[महत्/नव], or when denoting @deva[प्राच्यदेश] (Eastern region) cities. @deva[ह꣡स्तिनगर], @deva[कु꣡ञ्जनगर] but @deva[महानगर꣡], @deva[नवनगर꣡], and Eastern cities differ."
        }
    },
    "62090": {
        "en": {
            "simple": "A 2-3 syllable word ending in @deva[अ] or @deva[आ] (except @deva[महा] and @deva[नव]) gets first-syllable accent before @deva[अर्म] ('ruin/disease'). So @deva[कु꣡क्षर्मः] ('belly-disease'), @deva[पा꣡दर्मः] ('foot-disease').",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[द्व्यच्/त्र्यच्] (2-3 syllable) @deva[अकार/आकार]-final words before @deva[अर्म], excluding @deva[महा/नव]. Examples: @deva[कु꣡क्षर्मः], @deva[पा꣡दर्मः]. The disease-compound accents the affected part.",
            "advanced": "The @deva[द्व्यच्स्त्र्यचोऽकारान्ताद्वा अर्मे अमहान्नवयोः] condition: 2-3 syllable @deva[अ/आ]-final words (not @deva[महा/नव]) + @deva[अर्म] ('disease/decay') take @deva[आद्युदात्त]. @deva[कु꣡क्षर्म] ('abdominal ailment'), @deva[पा꣡दर्म] ('foot disease'). The body-part/location gets first-syllable accent."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.76-6.2.90)")
