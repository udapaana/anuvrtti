#!/usr/bin/env python3
"""Rewrite commentary for sūtras 3.2.93-3.2.107 (Batch 5)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "32093": {
        "en": {
            "simple": "The affix @deva[इनि] comes after the compound verb @deva[विकृ] 'to sell' with past-time meaning when an accusative word is in composition. This applies only when the object carries censure on the agent. Examples: @deva[सोमविक्रयिन्] 'seller of soma plant', @deva[रसविक्रयिन्] 'seller of liquors'—these professions carry disapproval. But @deva[धान्यविक्रायः] 'seller of paddy' (without censure) uses a different affix.",
            "standard": "@deva[इनि] follows the compound verb @deva[विक्रि] 'to sell' with @deva[भूतार्थ] when the @deva[द्वितीयान्त] @deva[उपपद] carries @deva[निन्दा] (censure) on the agent. Examples: @deva[सोमविक्रयिन्] 'soma-seller', @deva[रसविक्रयिन्] 'liquor-seller'—these professions are disapproved. The repetition of @deva[कर्मणि] (though available via @deva[अनुवृत्ति]) indicates the censure condition. Without @deva[निन्दा]: @deva[धान्यविक्रायः] 'paddy-seller' (uses @deva[अण्]).",
            "advanced": "@deva[इनि] follows @deva[विक्रि] with @deva[भूतार्थ] when @deva[द्वितीयान्त] @deva[उपपद] implies @deva[निन्दा] on the @deva[कर्तृ]. Examples: @deva[सोमविक्रयिन्], @deva[रसविक्रयिन्]. The @deva[कर्मणि] repetition (despite @deva[अनुवृत्ति]) signals the @deva[निन्दार्थ] condition. Counter-example: @deva[धान्यविक्रायः] (no @deva[निन्दा], uses @deva[अण्])."
        }
    },
    "32094": {
        "en": {
            "simple": "The affix @deva[क्वनिप्] comes after the verb @deva[दृश्] 'to see' with past-time meaning when an accusative word is in composition. Examples: @deva[मेरुदृश्वा] 'one who has seen Mount Meru', @deva[परलोकदृश्वा] 'one who has seen the hereafter'. Though @deva[क्वनिप्] was already available by @ref[3.2.75], its repetition here shows that no other affix applies in this sense after @deva[दृश्].",
            "standard": "@deva[क्वनिप्] follows @deva[दृश्] 'to see' with @deva[भूतार्थ] when a @deva[द्वितीयान्त] @deva[उपपद] is in composition. Examples: @deva[मेरुदृश्वन्], nominative @deva[मेरुदृश्वा] 'one who has seen Meru'; @deva[परलोकदृश्वा] 'one who has seen the hereafter'. Though @deva[क्वनिप्] was available via @ref[3.2.75], its repetition establishes a @deva[नियम]: only @deva[क्वनिप्] (no other affix) applies to @deva[दृश्] with this meaning.",
            "advanced": "@deva[क्वनिप्] follows @deva[दृश्] with @deva[भूतार्थ] and @deva[द्वितीयान्त] @deva[उपपद]. Examples: @deva[मेरुदृश्वन्] → @deva[मेरुदृश्वा], @deva[परलोकदृश्वा]. Despite @deva[क्वनिप्] being available via @ref[3.2.75], this repetition establishes a @deva[नियम]: only @deva[क्वनिप्] applies to @deva[दृश्] in @deva[भूतार्थ]."
        }
    },
    "32095": {
        "en": {
            "simple": "The affix @deva[क्वनिप्] comes after the verbs @deva[युध्] 'to fight' and @deva[कृ] 'to make' with past-time meaning when @deva[राजन्] 'king' in the accusative is in composition. Examples: @deva[राजयुध्वा] 'one who has caused the king to fight', @deva[राजकृत्वा] 'one who has made a king'. How can intransitive @deva[युध्] govern an object? It is treated as transitive (causative with latent @deva[णिच्]).",
            "standard": "@deva[क्वनिप्] follows @deva[युध्] 'to fight' and @deva[कृ] 'to make' with @deva[भूतार्थ] when @deva[राजन्] in @deva[द्वितीया] is in composition. Examples: @deva[राजयुध्वन्], nominative @deva[राजयुध्वा] (@ref[8.2.7]) 'one who has caused the king to fight'; @deva[राजकृत्वन्], nominative @deva[राजकृत्वा] (@ref[6.1.71]) 'king-maker'. Objection: How does intransitive @deva[युध्] govern an object? Answer: It is treated as transitive with latent @deva[णिच्] (causative).",
            "advanced": "@deva[क्वनिप्] follows @deva[युध्] and @deva[कृ] with @deva[भूतार्थ] when @deva[द्वितीयान्त] @deva[राजन्] is @deva[उपपद]. Examples: @deva[राजयुध्वन्] → @deva[राजयुध्वा] (@ref[8.2.7]); @deva[राजकृत्वन्] → @deva[राजकृत्वा] (@ref[6.1.71] @deva[तुगागम]). @deva[युध्] takes @deva[कर्म] by treating it as @deva[ण्यन्त] (causative with latent @deva[णिच्])."
        }
    },
    "32096": {
        "en": {
            "simple": "The affix @deva[क्वनिप्] comes after the verbs @deva[युध्] 'to fight' and @deva[कृ] 'to make' with past-time meaning when the particle @deva[सह] 'with' is in composition. Examples: @deva[सहयुध्वन्] 'one who has made someone fight alongside', @deva[सहकृत्वन्] 'one who has done something along with another'. Since @deva[सह] is a particle (not a noun), it cannot take any case ending.",
            "standard": "@deva[क्वनिप्] follows @deva[युध्] and @deva[कृ] with @deva[भूतार्थ] when the particle @deva[सह] is in composition. Examples: @deva[सहयुध्वन्] 'one who has fought alongside'; @deva[सहकृत्वन्] 'one who has acted together with another'. @deva[सह] being @deva[निपात] (particle), not @deva[द्रव्यवाचक], cannot take @deva[विभक्ति].",
            "advanced": "@deva[क्वनिप्] follows @deva[युध्] and @deva[कृ] with @deva[भूतार्थ] when @deva[निपात] @deva[सह] is @deva[उपपद]. Examples: @deva[सहयुध्वन्], @deva[सहकृत्वन्]. @deva[सह] being @deva[अद्रव्यवाचक निपात] takes no @deva[विभक्ति]."
        }
    },
    "32097": {
        "en": {
            "simple": "The affix @deva[ड] comes after the verb @deva[जन्] 'to be born' with past-time meaning when the upapada is in the locative case. Examples: @deva[उपसरजः] 'born of the first conception' (from @deva[उपसरे जातः]), @deva[मन्दुरजः] 'born in the stable'. Derivation: @deva[जन्] + @deva[ड] → @deva[ज] (@ref[6.4.143] elides the @deva[न्]).",
            "standard": "@deva[ड] follows @deva[जन्] 'to be born' with @deva[भूतार्थ] when the @deva[उपपद] is @deva[सप्तम्यन्त] (locative). Examples: @deva[उपसरे जातः] = @deva[उपसरजः] 'born of the first conception'; @deva[मन्दुरजः] 'born in the stable'. Derivation: @deva[जन्] + @deva[ड] → @deva[ज्] + @deva[अ] (@ref[6.4.143] @deva[नलोप]) → @deva[ज].",
            "advanced": "@deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when @deva[उपपद] is @deva[सप्तम्यन्त]. Examples: @deva[उपसरजः], @deva[मन्दुरजः]. Derivation: @deva[जन्] + @deva[ड] → @deva[ज्] + @deva[अ] (@ref[6.4.143]) → @deva[ज]."
        }
    },
    "32098": {
        "en": {
            "simple": "The affix @deva[ड] comes after the verb @deva[जन्] 'to be born' with past-time meaning when the upapada is in the ablative case and does not denote a genus. Examples: @deva[बुद्धिजः] 'born through understanding', @deva[संस्कारजः] 'born of habit', @deva[दुःखजः] 'born through pain'. When genus is denoted, no compound: @deva[हस्तिनो जातः] 'born of elephant', @deva[अश्वाज्जातः] 'born of horse'.",
            "standard": "@deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when the @deva[उपपद] is @deva[पञ्चम्यन्त] (ablative) and non-@deva[जातिवाचक]. Examples: @deva[बुद्धिजः] 'born through understanding'; @deva[संस्कारजः] 'born of habit'; @deva[दुःखजः] 'born through pain'. With @deva[जातिवाचक] @deva[उपपद], no compound: @deva[हस्तिनो जातः] 'born of elephant'; @deva[अश्वाज्जातः] 'born of horse'.",
            "advanced": "@deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when @deva[उपपद] is @deva[पञ्चम्यन्त] and non-@deva[जातिवाचक]. Examples: @deva[बुद्धिजः], @deva[संस्कारजः], @deva[दुःखजः]. @deva[जातिवाचक] blocks: @deva[हस्तिनो जातः], @deva[अश्वाज्जातः] (no @deva[समास])."
        }
    },
    "32099": {
        "en": {
            "simple": "The affix @deva[ड] comes after the verb @deva[जन्] 'to be born' with past-time meaning when an @deva[उपसर्ग] (prefix) is in composition and the resulting word is simply appellative (its meaning cannot be derived from its parts). Example: @deva[प्रजाः] 'people' or 'offspring' (as in @deva[अथेमा मानवी प्रजाः])—the meaning depends on usage, not etymology.",
            "standard": "@deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when an @deva[उपसर्ग] is in composition and the sense is @deva[आख्या] (simply appellative, not etymologically derivable). Example: @deva[प्रजाः] 'people' or 'offspring' (as in @deva[अथेमा मानवी प्रजाः]). The @deva[आख्या] condition means the word is @deva[रूढि]—its sense depends on convention, not component analysis.",
            "advanced": "@deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when @deva[उपसर्ग] is @deva[उपपद] and sense is @deva[आख्यामात्र] (purely appellative). Example: @deva[प्रजाः] 'people/offspring'. The @deva[आख्या] indicates @deva[रूढ्यर्थ]—meaning determined by usage, not etymology."
        }
    },
    "32100": {
        "en": {
            "simple": "The affix @deva[ड] comes after the verb @deva[जन्] 'to be born' with past-time meaning when the prefix @deva[अनु] is used and an accusative word is in composition. Examples: @deva[पुमनुजा] 'a girl born after a male child' (i.e., a girl with an elder brother), @deva[स्त्र्यनुजः] 'a boy born after a female child' (i.e., a boy with an elder sister).",
            "standard": "@deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when @deva[अनु] is the @deva[उपसर्ग] and a @deva[द्वितीयान्त] word is in composition. Examples: @deva[पुमनुजा] 'a girl born after a male' (girl with elder brother); @deva[स्त्र्यनुजः] 'a boy born after a female' (boy with elder sister).",
            "advanced": "@deva[ड] follows @deva[अनुजन्] with @deva[भूतार्थ] when @deva[द्वितीयान्त] @deva[उपपद] is in composition. Examples: @deva[पुमनुजा] 'girl born after male'; @deva[स्त्र्यनुजः] 'boy born after female'."
        }
    },
    "32101": {
        "en": {
            "simple": "The affix @deva[ड] is also seen after @deva[जन्] 'to be born' with past-time meaning even when the upapada has cases other than those mentioned in previous sūtras. Examples: @deva[अजः] 'unborn' (from @deva[न जायते]), @deva[द्विजः] 'twice-born' (from @deva[द्विर्जातः]). The word @deva[अपि] 'though' frees this rule from restrictions—the affix applies after other verbs and cases too, as in @deva[परिखा] 'moat' (from @deva[परितः खाता] 'dug all around').",
            "standard": "@deva[ड] is seen after @deva[जन्] with @deva[भूतार्थ] even with @deva[उपपद]s in cases other than those specified in @ref[3.2.97]-@ref[3.2.100]. Examples: @deva[अजः] 'unborn' (= @deva[न जायते]); @deva[द्विजः] 'twice-born' (= @deva[द्विर्जातः]). The @deva[अपि] frees this from restrictions: it applies even when @deva[जाति] is expressed (@deva[ब्राह्मणजो धर्मः]), when sense is not purely appellative (@deva[अभिजाः] 'hair'), when no @deva[कर्म] is present (@deva[अनुजः] 'younger brother'). It extends to other verbs: @deva[परिखा] 'moat' (= @deva[परितः खाता]).",
            "advanced": "@deva[ड] is @deva[दृश्यते] (observed) after @deva[जन्] with @deva[भूतार्थ] beyond the restrictions of @ref[3.2.97]-@ref[3.2.100]. Examples: @deva[अजः], @deva[द्विजः]. The @deva[अपि] indicates @deva[निर्बन्धमुक्ति]: applies when @deva[जाति] is expressed (@deva[ब्राह्मणजो धर्मः]); when not purely @deva[आख्या] (@deva[अभिजाः]); without @deva[कर्म] (@deva[अनुजः]). Extends to other @deva[धातु]s: @deva[परिखा] (= @deva[परितः खाता]), @deva[आखा]."
        }
    },
    "32102": {
        "en": {
            "simple": "The affixes called @deva[निष्ठा] (@deva[क्त] and @deva[क्तवतु], see @ref[1.1.26]) come after a verb with past-time meaning. Examples: @deva[कृतम्] 'made' (@deva[कृ] + @deva[क्त]), @deva[कृतवान्] 'one who made' (@deva[कृ] + @deva[क्तवतु]); @deva[भुक्तम्] 'eaten', @deva[भुक्तवान्] 'one who ate'. A vārttika adds: @deva[निष्ठा] applies when @deva[आदिकर्म] (action commenced but possibly incomplete) is meant, as in @deva[प्रकृतः कटं देवदत्तः] 'Devadatta has begun making a mat'.",
            "standard": "The @deva[निष्ठा] affixes (@deva[क्त] and @deva[क्तवतु], defined at @ref[1.1.26]) follow a @deva[धातु] with @deva[भूतार्थ]. Examples: @deva[कृ] + @deva[क्त] = @deva[कृतम्] 'made'; @deva[कृ] + @deva[क्तवतु] = @deva[कृतवत्], nominative @deva[कृतवान्] 'one who made'; @deva[भुक्तम्], @deva[भुक्तवान्] 'eaten'. @deva[वार्त्तिक]: @deva[निष्ठा] applies when @deva[आदिकर्म] (commenced action) is meant. For @deva[आदिकर्म], see @ref[3.4.71]. Example: @deva[प्रकृतः कटं देवदत्तः], @deva[प्रकृतवान् कटं देवदत्तः].",
            "advanced": "@deva[निष्ठा] (@deva[क्त], @deva[क्तवतु]; @ref[1.1.26]) follows @deva[धातु] with @deva[भूतार्थ]. Examples: @deva[कृतम्], @deva[कृतवान्]; @deva[भुक्तम्], @deva[भुक्तवान्]. @deva[वार्त्तिक]: @deva[निष्ठा] applies with @deva[आदिकर्मार्थ]. See @ref[3.4.71] for @deva[आदिकर्म]. Examples: @deva[प्रकृतः कटं देवदत्तः], @deva[प्रकृतवान् कटं देवदत्तः]."
        }
    },
    "32103": {
        "en": {
            "simple": "The affix @deva[ङ्वनिप्] comes after the verbs @deva[सु] 'to press out juice' and @deva[यज्] 'to sacrifice' with past-time meaning. Examples: @deva[सुत्वा] 'one who has pressed out juice' (via @deva[सु] + @deva[ङ्वनिप्] = @deva[सुत्वन्] with @deva[त्] by @ref[6.1.71]), @deva[यज्वा] 'one who has sacrificed' (from @deva[यज्वन्]).",
            "standard": "@deva[ङ्वनिप्] follows @deva[सु] 'to extract juice' and @deva[यज्] 'to sacrifice' with @deva[भूतार्थ]. Examples: @deva[सु] + @deva[ङ्वनिप्] = @deva[सुत्] + @deva[वन्] (@ref[6.1.71] @deva[तुगागम]) = @deva[सुत्वन्], nominative @deva[सुत्वा] 'juice-presser'; @deva[यज्वन्], nominative @deva[यज्वा] 'sacrificer'. See Ṛg Veda @ref[1.3.1].",
            "advanced": "@deva[ङ्वनिप्] follows @deva[सु] and @deva[यज्] with @deva[भूतार्थ]. Examples: @deva[सुत्वन्] (@ref[6.1.71] @deva[तुगागम]) → @deva[सुत्वा]; @deva[यज्वन्] → @deva[यज्वा]. Cf. Ṛg Veda @ref[1.3.1]."
        }
    },
    "32104": {
        "en": {
            "simple": "The affix @deva[अतृन्] comes after the verb @deva[जृ] 'to grow old' with past-time meaning. Example: @deva[जरत्] → nominative singular @deva[जरन्], dual @deva[जरन्तौ], plural @deva[जरन्तः] 'grown old'. Derivation: @deva[जृ] + @deva[अतृन्] → @deva[जर्] + @deva[अत्] (@ref[7.3.84] guṇa) → @deva[जरत्] (@ref[6.1.7]). By @deva[वासरूप] (@ref[3.1.94]), @deva[निष्ठा] affixes also apply: @deva[जीर्णः], @deva[जीर्णवान्].",
            "standard": "@deva[अतृन्] follows @deva[जृ] 'to grow old' with @deva[भूतार्थ]. Example: @deva[जृ] + @deva[अतृन्] → @deva[जर्] + @deva[अत्] (@ref[7.3.84] @deva[गुण]) → @deva[जरत्] (@ref[6.1.7]); nominative singular @deva[जरन्], dual @deva[जरन्तौ], plural @deva[जरन्तः] 'grown old'. By @deva[वासरूप] (@ref[3.1.94]), @deva[निष्ठा] also applies: @deva[जृ] + @deva[क्त] → @deva[जिर्] + @deva[त] (@ref[7.1.100], @ref[1.1.51]) → @deva[जिर्] + @deva[न] (@ref[8.2.42]) → @deva[जीर्ण] (@ref[8.2.77], @ref[8.4.1]).",
            "advanced": "@deva[अतृन्] follows @deva[जृ] with @deva[भूतार्थ]. Derivation: @deva[जृ] + @deva[अतृन्] → @deva[जर्] + @deva[अत्] (@ref[7.3.84]) → @deva[जरत्] (@ref[6.1.7]); nominative @deva[जरन्]. By @deva[वासरूप] (@ref[3.1.94]), @deva[निष्ठा] also valid: @deva[जृ] + @deva[क्त] → @deva[जिर्त] (@ref[7.1.100], @ref[1.1.51]) → @deva[जिर्न] (@ref[8.2.42]) → @deva[जीर्ण] (@ref[8.2.77], @ref[8.4.1])."
        }
    },
    "32105": {
        "en": {
            "simple": "In Vedic literature, the affix @deva[लिट्] (Perfect tense) comes after a verb with past-time meaning. Examples: @deva[अहं सूर्यमुभयतो ददर्श] 'I saw the sun from both sides', @deva[अहं द्यावापृथिवी आततान] 'I stretched heaven and earth'. Here @deva[ददर्श] and @deva[आततान] have the force of @deva[निष्ठा] (past participles). This differs from @ref[3.4.61] which requires syntactic relation between verbs.",
            "standard": "In @deva[छन्दस्] (Vedic), @deva[लिट्] (Perfect) follows a @deva[धातु] with @deva[भूतार्थ]. Examples: @deva[अहं सूर्यमुभयतो ददर्श] 'I saw the sun from both sides'; @deva[अहं द्यावापृथिवी आततान] 'I stretched heaven and earth' (Yajur Veda VIII.9). Here @deva[ददर्श] and @deva[आततान] function like @deva[निष्ठा]. This differs from @ref[3.4.61] (where @deva[लुङ्], @deva[लङ्], @deva[लिट्] apply in @deva[छन्दस्] with @deva[धातुसम्बन्ध])—the present rule is general, without such limitation.",
            "advanced": "In @deva[छन्दस्], @deva[लिट्] follows @deva[धातु] with @deva[भूतार्थ]. Examples: @deva[ददर्श], @deva[आततान] (Yaj. Ved. VIII.9)—functioning as @deva[निष्ठा]. This differs from @ref[3.4.61] (requires @deva[धातुसम्बन्ध] per @ref[3.4.1]); the present rule is @deva[सामान्य] without such @deva[नियम]."
        }
    },
    "32106": {
        "en": {
            "simple": "In Vedic literature, the affix @deva[लिट्] (Perfect) may optionally be replaced by @deva[कानच्]. Examples: @deva[अग्निं चिक्यानः] 'he consecrated the fire', @deva[सोमं सुषुवाणः] 'he pressed the soma juice'. Being optional, @deva[लिट्] forms also occur (as in the previous sūtra). The substitute @deva[कानच्] replaces not only the special @deva[लिट्] of @ref[3.2.105] but also the general Perfect @deva[लिट्], forming verbal adjectives as well as Perfect tense forms. This affix applies only to Ātmanepada verbs.",
            "standard": "In @deva[छन्दस्], @deva[लिट्] is optionally replaced by @deva[कानच्]. Examples: @deva[अग्निं चिक्यानः] 'he consecrated the fire'; @deva[सोमं सुषुवाणः] 'he pressed soma'. Being @deva[विभाषा], @deva[लिट्] forms also occur. The @deva[लिट्] repetition indicates @deva[कानच्] replaces both the special @deva[लिट्] of @ref[3.2.105] and the general Perfect @deva[लिट्]—forming @deva[कृदन्त] (verbal adjectives) as well as @deva[लकार] (tense forms). Applies only to @deva[आत्मनेपद] verbs (@ref[1.4.100]). Cf. @deva[तूतुजान] (Ṛg Veda @ref[1.3.6]).",
            "advanced": "In @deva[छन्दस्], @deva[लिट्] is @deva[विभाषया] replaced by @deva[कानच्]. Examples: @deva[चिक्यानः], @deva[सुषुवाणः]. The @deva[लिट्] repetition (not just @deva[अनुवृत्ति]) indicates @deva[कानच्] replaces both @ref[3.2.105]'s special @deva[लिट्] and general Perfect @deva[लिट्]—forming @deva[कृदन्त] and @deva[लकारार्थ]. Restricted to @deva[आत्मनेपदिन्] (@ref[1.4.100]). Cf. @deva[तूतुजान] (Ṛ.V. @ref[1.3.6])."
        }
    },
    "32107": {
        "en": {
            "simple": "In Vedic literature, the affix @deva[क्वसु] optionally replaces @deva[लिट्] (Perfect). Examples: @deva[जक्षिवान्] 'eaten' (Yajur Veda VIII.19), @deva[पपिवान्] 'drunk'. Being optional, @deva[लिट्] forms also occur, as in @deva[अहं सूर्यमुभयतो ददर्श] (@ref[3.2.105]). This sūtra is separated from the previous one so that @deva[क्वसु] alone (not @deva[कानच्]) continues into subsequent sūtras.",
            "standard": "In @deva[छन्दस्], @deva[क्वसु] optionally replaces @deva[लिट्]. Examples: @deva[जक्षिवस्], nominative @deva[जक्षिवान्] 'eaten' (Yaj. Ved. VIII.19); @deva[पपिवस्], nominative @deva[पपिवान्] 'drunk'. Being @deva[विभाषा], @deva[लिट्] also occurs (@deva[ददर्श] in @ref[3.2.105]). The separation from @ref[3.2.106] is @deva[योगविभागार्थ]: only @deva[क्वसु] (not @deva[कानच्]) continues in @deva[अनुवृत्ति] into subsequent sūtras.",
            "advanced": "In @deva[छन्दस्], @deva[क्वसु] @deva[विभाषया] replaces @deva[लिट्]. Examples: @deva[जक्षिवान्] (Yaj. VIII.19), @deva[पपिवान्]. @deva[विभाषा] permits @deva[लिट्] (@deva[ददर्श]). The @deva[योगविभाग] from @ref[3.2.106] ensures only @deva[क्वसु] (not @deva[कानच्]) continues in @deva[अनुवृत्ति]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sūtras 3.2.93-3.2.107")
