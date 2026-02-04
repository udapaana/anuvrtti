#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.121-4.1.135 (Batch 9 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41121": {
        "en": {
            "simple": "Dissyllabic words ending in feminine affixes take @deva[ढक्] for descendant meaning. Example: @deva[दात्तेयः] (son of Dattā), @deva[गौपेयः] (son of Gopī).",
            "standard": "After dissyllabic (@deva[द्व्यच्]) words ending in feminine affixes, @deva[ढक्] is used for descendant meaning, debarring @deva[अण्] of @ref[4.1.113]. @deva[दत्ता] + @deva[ढक्] = @deva[दात्तेयः], @deva[गोपी] + @deva[ढक्] = @deva[गौपेयः]. Condition: must be dissyllabic—trisyllabic @deva[यमुना] → @deva[यामुनः] (by @deva[अण्] @ref[4.1.113], not @deva[ढक्]).",
            "advanced": "This sūtra provides @deva[ढक्] for dissyllabic @deva[स्त्रीप्रत्ययान्त] words, debarring @deva[अण्] @ref[4.1.113]: @deva[दात्तेयः], @deva[गौपेयः]. Exclusion: @deva[त्र्यच्]—@deva[यमुना] (3 syllables) → @deva[यामुनः] (अण्)."
        }
    },
    "41122": {
        "en": {
            "simple": "Dissyllabic words ending in short @deva[इ] (but not @deva[इञ्] affix) take @deva[ढक्] for descendant meaning. Example: @deva[आत्रेयः] (son of Atri), @deva[नैधेयः] (son of Nidhi).",
            "standard": "After dissyllabic stems ending in short @deva[इ] (not the @deva[इञ्] patronymic affix), @deva[ढक्] is used. The @deva[च] draws @deva[द्व्यचः] from @ref[4.1.121]. @deva[अत्रि] + @deva[ढक्] = @deva[आत्रेयः], @deva[निधि] + @deva[ढक्] = @deva[नैधेयः]. Conditions: (1) ending in short @deva[इ]—@deva[दक्ष] (ends in @deva[अ]) → @deva[दाक्षिः] (by @deva[इञ्]); (2) @deva[इ] must not be @deva[इञ्] affix—@deva[दाक्षि] (formed by @deva[इञ्] @ref[4.1.95]) → @deva[दाक्षायणः] (by @deva[फक्]), not @deva[ढक्]; (3) must be dissyllabic—@deva[मरीचि] (3 syllables) → @deva[मारीचः] (by @deva[अण्]).",
            "advanced": "This sūtra provides @deva[ढक्] for dissyllabic @deva[इकारान्त] stems (excluding @deva[इञन्त]). @deva[स्त्री] anuवृत्ति excluded; @deva[द्व्यचः] drawn by @deva[च]. @deva[आत्रेयः], @deva[नैधेयः]. Exclusions: (1) @deva[अकारान्त]—@deva[दाक्षिः]; (2) @deva[इञन्त]—@deva[दाक्षायणः], @deva[प्लाक्षायणः] (@deva[इञ्] @ref[4.1.95]); (3) @deva[त्र्यच्]—@deva[मारीचः]."
        }
    },
    "41123": {
        "en": {
            "simple": "The @deva[शुभ्र] class words take @deva[ढक्] for descendant meaning. This is an @deva[आकृतिगण] (expandable class). Example: @deva[शौभ्रेयः], @deva[गाङ्गेयः], @deva[पाण्डवेयः].",
            "standard": "After @deva[शुभ्रादि] words, @deva[ढक्] is used, debarring @deva[इञ्] and other affixes. The @deva[च] indicates this is an @deva[आकृतिगण]—words like @deva[गङ्गा], @deva[पाण्डव] (not in the list) also take @deva[ढक्]: @deva[गाङ्गेयः], @deva[पाण्डवेयः]. @deva[शुभ्र] + @deva[ढक्] = @deva[शौभ्रेयः]. Special: @deva[लक्ष्मण], @deva[श्याम] take @deva[ढक्] only when meaning @deva[वासिष्ठ] descendants. The 93-word list includes @deva[शुभ्र], @deva[विष्टपुर], @deva[रोहिणी], @deva[रुक्मिणी], @deva[विधवा], @deva[शकुनि], @deva[उग्र], @deva[बन्धकी], @deva[अतिथि], @deva[गोधा], @deva[भरत], @deva[मृकण्डु], @deva[कद्रु], @deva[अम्बिका], @deva[श्वन्], @deva[अश्व], etc.",
            "advanced": "This sūtra provides @deva[ढक्] for @deva[शुभ्रादि], an @deva[आकृतिगण] (indicated by @deva[च]). Debars @deva[इञ्] etc. @deva[शौभ्रेयः]. Extended: @deva[गाङ्गेयः], @deva[पाण्डवेयः]. Condition: @deva[लक्ष्मणश्यामयोर्वासिष्ठे]—@deva[ढक्] only for Vāsiṣṭha context. 93 words: @deva[शुभ्र], @deva[विष्टपुर], @deva[ब्रह्मकृत], @deva[शतद्वार], @deva[रोहिणी], @deva[रुक्मिणी], @deva[धर्मिणी], @deva[दिश्], @deva[शालूक], @deva[अजवस्ति], @deva[शकंधि], @deva[विमातृ], @deva[विधवा], @deva[शुक], @deva[विश], @deva[देवतर], @deva[शकुनि], @deva[शुक्र], @deva[उग्र], @deva[बन्धकी], @deva[सृकण्डु], @deva[अतिथि], @deva[गोदन्त], @deva[कुशाम्ब], @deva[सुनामन्], @deva[गोधा], @deva[कृकलास], @deva[अणीब], @deva[प्रवाहण], @deva[भरत], @deva[मृकण्डु], @deva[कर्पूर], @deva[कद्रु], @deva[अम्बिका], @deva[परिधि], @deva[वायुदत्त], @deva[श्वन्], @deva[अश्मन्], @deva[अश्व], @deva[अजिर], @deva[अजिन], etc."
        }
    },
    "41124": {
        "en": {
            "simple": "The words @deva[विकर्ण] and @deva[कुषीतक] take @deva[ढक्] when meaning @deva[काश्यप] descendants. Examples: @deva[वैकर्णेयः] = @deva[काश्यपः], @deva[कौषीतकेयः] = @deva[काश्यपः].",
            "standard": "After @deva[विकर्ण] and @deva[कुषीतक], @deva[ढक्] applies only when meaning @deva[काश्यप] descendants: @deva[वैकर्णेयः] = @deva[काश्यपः], @deva[कौषीतकेयः] = @deva[काश्यपः]. Otherwise: @deva[वैकर्णिः] and @deva[कौषीतकिः] (by @deva[इञ्] @ref[4.1.95]).",
            "advanced": "This @deva[नियमसूत्र] restricts @deva[ढक्] for @deva[विकर्ण]/कुषीतक to @deva[काश्यप]-context: @deva[वैकर्णेयः], @deva[कौषीतकेयः] = @deva[काश्यपः]. Non-Kāśyapa: @deva[वैकर्णिः], @deva[कौषीतकिः] (@deva[इञ्] @ref[4.1.95])."
        }
    },
    "41125": {
        "en": {
            "simple": "After @deva[भ्रू], @deva[ढक्] is used with augment @deva[वुक्]. Example: @deva[भ्रौवेयः] (descendant of Bhrū).",
            "standard": "After @deva[भ्रू], @deva[ढक्] is used with augment @deva[वुक्] added before the affix: @deva[भ्रू] + @deva[वुक्] + @deva[ढक्] (@ref[1.1.46]) = @deva[भ्रूव्] + @deva[ढक्] = @deva[भ्रौवेयः] (@ref[7.1.2]).",
            "advanced": "This sūtra provides @deva[ढक्] with @deva[वुक्]-@deva[आगम] for @deva[भ्रू]: @deva[भ्रू] + @deva[वुक्] (@ref[1.1.46]) + @deva[ढक्] = @deva[भ्रूव्] + @deva[एय] (@ref[7.1.2]) = @deva[भ्रौवेयः]."
        }
    },
    "41126": {
        "en": {
            "simple": "The @deva[कल्याणी] class words take @deva[ढक्] with @deva[इनङ्] substituting for the final. Examples: @deva[कल्याणिनेयः], @deva[सौभागिनेयः], @deva[दौर्भागिनेयः].",
            "standard": "After @deva[कल्याणी] etc., @deva[ढक्] is used with @deva[इनङ्] replacing the final. For feminine-affix-ending words, this sūtra teaches @deva[इनङ्]-substitution (they already take @deva[ढक्] by @ref[4.1.120]); for others, both @deva[इनङ्] and @deva[ढक्] are taught. @deva[कल्याणी] → @deva[कल्याणिन्] + @deva[ढक्] = @deva[कल्याणिनेयः]. @deva[सुभगा] → @deva[सुभगिन्] + @deva[ढक्] = @deva[सौभागिनेयः]. @deva[दुर्भगा] → @deva[दौर्भागिनेयः] (double @deva[वृद्धि] of @deva[उ] and @deva[अ] by @ref[7.3.19]). List: @deva[कल्याणी], @deva[सुभगा], @deva[दुर्भगा], @deva[बन्धकी], @deva[अनुदृष्टि], @deva[अनुसृति], @deva[जरती], @deva[बलीवर्दी], @deva[ज्येष्ठा], @deva[कनिष्ठा], @deva[मध्यमा], @deva[परस्त्री].",
            "advanced": "This sūtra provides @deva[ढक्] with @deva[इनङ्]-@deva[आदेश] for @deva[कल्याणीयादि]. @deva[स्त्रीप्रत्ययान्त] words: @deva[इनङ्] only (already @deva[ढक्] by @ref[4.1.120]); others: both. @deva[कल्याणिनेयः], @deva[सौभागिनेयः], @deva[दौर्भागिनेयः] (double @deva[वृद्धि] @ref[7.3.19]). 12-word list: @deva[कल्याणी], @deva[सुभगा], @deva[दुर्भगा], @deva[बन्धकी], @deva[अनुदृष्टि], @deva[अनुसृति], @deva[जरती], @deva[बलीवर्दी], @deva[ज्येष्ठा], @deva[कनिष्ठा], @deva[मध्यमा], @deva[परस्त्री]."
        }
    },
    "41127": {
        "en": {
            "simple": "After @deva[कुलटा] (unchaste woman), @deva[ढक्] is used with optional @deva[इनङ्] substitution. Examples: @deva[कौलटिनेयः] or @deva[कौलटेयः].",
            "standard": "After @deva[कुलटा] (etymology: @deva[कुल] + @deva[अटति]—one who wanders from family to family, i.e., unchaste woman), @deva[ढक्] applies with optional @deva[इनङ्]: @deva[कुलटा] → @deva[कौलटिनेयः] (with @deva[इनङ्]) or @deva[कौलटेयः] (without). Since @deva[कुलटा] denotes contempt, it also takes @deva[ढ्रक्] by @ref[4.1.131]: @deva[कौलटेरः].",
            "advanced": "This sūtra makes @deva[इनङ्] optional before @deva[ढक्] for @deva[कुलटा] (already takes @deva[ढक्] by @ref[4.1.120]): @deva[कौलटिनेयः] (इनङ्) or @deva[कौलटेयः]. Being @deva[कुत्सित], @deva[कुलटा] also takes @deva[ढ्रक्] @ref[4.1.131]: @deva[कौलटेरः]."
        }
    },
    "41128": {
        "en": {
            "simple": "After @deva[चटका], the affix @deva[ऐरक्] is used for patronymic. Example: @deva[चाटकैरः].",
            "standard": "After @deva[चटका] (and masculine @deva[चटक] by Vārtika), the special affix @deva[ऐरक्] is used: @deva[चाटकैरः] (son of Caṭaka). Vārtika: feminine descendant has @deva[लुक्]-elision of affix, giving @deva[चटका] (with @deva[टाप्] by @deva[अजादि] @ref[4.1.4]).",
            "advanced": "This sūtra provides @deva[ऐरक्] for @deva[चटका]: @deva[चाटकैरः]. Vārtikas: (1) @deva[चटकाच्च]—masculine @deva[चटक] also takes @deva[ऐरक्]; (2) @deva[स्त्रियां लुक्]—feminine descendant: @deva[चटका] (@deva[टाप्] @ref[4.1.4], @deva[अजादि])."
        }
    },
    "41129": {
        "en": {
            "simple": "After @deva[गोधा], the affix @deva[ढ्रक्] is used for descendant meaning. Example: @deva[गौधेरः].",
            "standard": "After @deva[गोधा], @deva[ढ्रक्] is used: @deva[गोधा] + @deva[ढ्रक्] = @deva[गौधेरः]. The @deva[ढ्] → @deva[एय्] (@ref[7.1.2]), @deva[क्] causes @deva[वृद्धि] (@ref[7.2.118]) and @deva[उदात्त] accent on final (@ref[4.1.165]). The actual affix is @deva[एय्र], but @deva[य्] elides by @ref[6.1.66], giving @deva[एर]. Since @deva[गोधा] ∈ @deva[शुभ्रादि] (@ref[4.1.123]), it also takes @deva[ढक्]: @deva[गौधेयः].",
            "advanced": "This sūtra provides @deva[ढ्रक्] for @deva[गोधा]: @deva[गौधेरः]. Process: @deva[ढ्] → @deva[एय्] (@ref[7.1.2]); @deva[क्] → @deva[वृद्धि] (@ref[7.2.118]), @deva[अन्तोदात्त] (@ref[4.1.165]); @deva[य्]-@deva[लोप] (@ref[6.1.66]) → final affix @deva[एर]. @deva[गोधा] ∈ @deva[शुभ्रादि] (@ref[4.1.123]) also → @deva[गौधेयः] (@deva[ढक्])."
        }
    },
    "41130": {
        "en": {
            "simple": "According to Northern Grammarians, @deva[गोधा] takes @deva[आरक्] for descendant meaning. Example: @deva[गौधारः]. By implication, @deva[जड] and @deva[पण्ड] also take @deva[आरक्].",
            "standard": "According to @deva[उदीचाम्] (Northern Grammarians), @deva[गोधा] takes @deva[आरक्]: @deva[गौधारः]. The @deva[आ] in @deva[आरक्] might seem redundant (since @deva[गोधा] ends in @deva[आ]), but its inclusion by Pāṇini implies other words also take this affix, where @deva[रक्] alone wouldn't suffice. By implication: @deva[जड] → @deva[जाडारः], @deva[पण्ड] → @deva[पाण्डारः]. The mention of Northern Grammarians shows respect.",
            "advanced": "This sūtra provides @deva[आरक्] for @deva[गोधा] (@deva[उदीचाम्]): @deva[गौधारः]. @deva[ज्ञापक]: @deva[आ] in @deva[आरक्] indicates extension to @deva[अकारान्त] words where @deva[रक्] alone fails—@deva[जाडारः] (@deva[जड]), @deva[पाण्डारः] (@deva[पण्ड]). @deva[उदीचां ग्रहणम्] = @deva[आदरार्थम्]."
        }
    },
    "41131": {
        "en": {
            "simple": "Feminine words denoting low/defective persons optionally take @deva[ढ्रक्] for descendant meaning. Examples: @deva[काणेरः] or @deva[काणेयः], @deva[दासेरः] or @deva[दासेयः].",
            "standard": "After feminine words denoting @deva[क्षुद्र] (mean, defective—physically impaired or socially low), @deva[ढ्रक्] is optional, with @deva[ढक्] as the alternative. @deva[क्षुद्रा] (feminine) + @deva[ढ्रक्] = @deva[काणेरः] (son of one-eyed woman) or @deva[काणेयः] (@deva[ढक्]); @deva[दासेरः] (son of female slave) or @deva[दासेयः]. Note: @deva[ढ्रक्] @deva[anuवृत्ति] applies here, not @deva[आरक्] (despite its immediate precedence).",
            "advanced": "This sūtra makes @deva[ढ्रक्] optional for @deva[क्षुद्रा] (feminine @deva[क्षुद्रवाचिन्]—physical/social deficiency), with @deva[ढक्] as alternative: @deva[काणेरः]/काणेयः, @deva[दासेरः]/दासेयः. The @deva[anuवृत्ति] is @deva[ढ्रक्] (not @deva[आरक्] despite proximity)."
        }
    },
    "41132": {
        "en": {
            "simple": "After @deva[पितृष्वसृ] (father's sister), @deva[छण्] is used for descendant meaning, debarring @deva[अण्]. Example: @deva[पैतृष्वस्रीयः] (son of father's sister).",
            "standard": "After @deva[पितृष्वसृ] (paternal aunt), @deva[छण्] (not @deva[अण्]) is used: @deva[पितृष्वसृ] + @deva[छण्] = @deva[पैतृष्वस्रीयः]. The @deva[छ] → @deva[ईय].",
            "advanced": "This sūtra provides @deva[छण्] (debarring @deva[अण्]) for @deva[पितृष्वसृ]: @deva[पैतृष्वस्रीयः]. @deva[छ] → @deva[ईय]."
        }
    },
    "41133": {
        "en": {
            "simple": "The final vowel of @deva[पितृष्वसृ] is elided when @deva[ढक्] follows. Example: @deva[पैतृष्वसेयः].",
            "standard": "When @deva[ढक्] is added to @deva[पितृष्वसृ], the final @deva[ऋ] is elided: @deva[पितृष्वस्] + @deva[ढक्] = @deva[पैतृष्वसेयः]. This sūtra indicates by @deva[ज्ञापक] that @deva[पितृष्वसृ] also takes @deva[ढक्] (in addition to @deva[छण्] from @ref[4.1.132]).",
            "advanced": "This sūtra elides final @deva[ऋ] of @deva[पितृष्वसृ] before @deva[ढक्]: @deva[पैतृष्वसेयः]. @deva[ज्ञापक]: @deva[पितृष्वसृ] takes both @deva[छण्] (@ref[4.1.132]) and @deva[ढक्]."
        }
    },
    "41134": {
        "en": {
            "simple": "After @deva[मातृष्वसृ] (mother's sister), @deva[छण्] is added and the final is elided when @deva[ढक्] follows. Examples: @deva[मातृष्वस्रीयः], @deva[मातृष्वसेयः].",
            "standard": "The rules of @ref[4.1.132] and @ref[4.1.133] also apply to @deva[मातृष्वसृ] (maternal aunt): @deva[मातृष्वस्रीयः] (by @deva[छण्]) or @deva[मातृष्वसेयः] (by @deva[ढक्] with final elision)—son of mother's sister.",
            "advanced": "This sūtra extends @ref[4.1.132]-@ref[4.1.133] to @deva[मातृष्वसृ]: @deva[मातृष्वस्रीयः] (@deva[छण्]), @deva[मातृष्वसेयः] (@deva[ढक्] with @deva[ऋ]-@deva[लोप])."
        }
    },
    "41135": {
        "en": {
            "simple": "Names of quadrupeds take @deva[ढञ्] for descendant meaning. Examples: @deva[कामण्डलेयः], @deva[शौन्तिबाहेयः], @deva[जाम्बेयः].",
            "standard": "After bases denoting quadrupeds (@deva[चतुष्पाद्]), @deva[ढञ्] (not @deva[अण्]) is used for descendant meaning. @deva[कमण्डलु] + @deva[ढञ्] = @deva[कामण्डलेयः] (@deva[उ] elided before @deva[ढ]). Similarly @deva[शुन्तिबाहु] → @deva[शौन्तिबाहेयः], @deva[जम्बु] → @deva[जाम्बेयः].",
            "advanced": "This sūtra provides @deva[ढञ्] (debarring @deva[अण्]) for @deva[चतुष्पाद्]-denoting bases: @deva[कामण्डलेयः] (@deva[उ]-@deva[लोप] before @deva[ढ] by @ref[4.4.147]), @deva[शौन्तिबाहेयः], @deva[जाम्बेयः]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.121-4.1.135 (Batch 9)")
