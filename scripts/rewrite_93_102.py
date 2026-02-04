# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32093": {
        "en": {
            "simple": "The affix @deva[इनि] comes after the compound verb @deva[विकृ] 'to sell' with past-time meaning when the upapada is in the accusative (second case). This applies only when the object implies censure on the agent. Examples: @deva[सोमविक्रयिन्] 'seller of soma plant', @deva[रसविक्रयिन्] 'seller of liquors' (disapproving of mean professions). But not @deva[धान्यविक्रायः] 'seller of grain' (no censure).",
            "standard": "The affix @deva[इनि] follows @deva[विकृ] 'to sell' with @deva[भूतार्थ] when the @deva[उपपद] is @deva[द्वितीया]. The repetition of @deva[कर्मणि] (though available by @deva[अनुवृत्ति]) indicates this applies only when the @deva[कर्म] implies @deva[निन्दा] (censure). Examples: @deva[सोमविक्रयिन्] 'soma-seller', @deva[रसविक्रयिन्] 'liquor-seller' (censured professions). Not @deva[धान्यविक्रायः] 'grain-seller' (no censure implied).",
            "advanced": "@deva[इनि] follows @deva[विकृ] with @deva[भूतार्थ] when @deva[कर्म]-@deva[उपपद] implies @deva[निन्दा]. The @deva[कर्मणि] repetition (despite @deva[अनुवृत्ति]) restricts application to @deva[निन्द्यकर्म]. Examples: @deva[सोमविक्रयिन्], @deva[रसविक्रयिन्] (censured trades). Counter-example: @deva[धान्यविक्रायः] (no @deva[निन्दा], hence different affix)."
        }
    },
    "32094": {
        "en": {
            "simple": "The affix @deva[क्वनिप्] comes after @deva[दृश्] 'to see' with past-time meaning when the upapada is in the accusative. Examples: @deva[मेरुदृश्वा] 'one who has seen Meru', @deva[परलोकदृश्वा] 'one who has seen the hereafter'. Though @deva[क्वनिप्] was already available by @ref[3.2.75], its repetition shows no other affix applies in this sense.",
            "standard": "The affix @deva[क्वनिप्] follows @deva[दृश्] 'to see' with @deva[भूतार्थ] when the @deva[उपपद] is @deva[द्वितीया]. Examples: @deva[मेरुदृश्वन्], nom. @deva[मेरुदृश्वा] 'Meru-seer'; @deva[परलोकदृश्वा] 'one who has seen the hereafter'. Though @deva[क्वनिप्] was valid by @ref[3.2.75], its repetition is @deva[नियमार्थ]—no other affix applies after @deva[दृश्] in this sense.",
            "advanced": "@deva[क्वनिप्] follows @deva[दृश्] with @deva[भूतार्थ] and @deva[कर्म]-@deva[उपपद]. Examples: @deva[मेरुदृश्वा], @deva[परलोकदृश्वा]. The @deva[पुनर्वचन] from @ref[3.2.75] is @deva[नियमार्थ]: @deva[क्वनिप्] alone applies after @deva[दृश्] in @deva[भूतकाल], excluding other affixes."
        }
    },
    "32095": {
        "en": {
            "simple": "The affix @deva[क्वनिप्] comes after @deva[युध्] 'to fight' and @deva[कृ] 'to make' with past-time meaning when @deva[राजन्] 'king' is in composition (accusative). Examples: @deva[राजयुध्वा] 'one who has caused the king to fight' (via @ref[8.2.7]), @deva[राजकृत्वा] 'king-maker' (via @ref[6.1.71]). The intransitive @deva[युध्] governs an object by being understood as causative with latent @deva[णिच्].",
            "standard": "The affix @deva[क्वनिप्] follows @deva[युध्] 'to fight' and @deva[कृ] 'to make' with @deva[भूतार्थ] when @deva[राजन्] (@deva[द्वितीया]) is @deva[उपपद]. Examples: @deva[राजयुध्वन्], nom. @deva[राजयुध्वा] (@ref[8.2.7]) 'one who made the king fight'; @deva[राजकृत्वन्], nom. @deva[राजकृत्वा] (@ref[6.1.71]) 'king-maker'. The intransitive @deva[युध्] governs @deva[कर्म] because it is understood as @deva[णिजन्त] (causative) with latent @deva[णिच्].",
            "advanced": "@deva[क्वनिप्] follows @deva[युध्] and @deva[कृ] with @deva[भूतार्थ] when @deva[राजन्] (@deva[कर्म]) is @deva[उपपद]. Examples: @deva[राजयुध्वा] (@ref[8.2.7]), @deva[राजकृत्वा] (@ref[6.1.71]). The @deva[अकर्मक] @deva[युध्] takes @deva[कर्म] because it is @deva[सकर्मक] through implicit @deva[णिच्] (@deva[णिजर्थे])."
        }
    },
    "32096": {
        "en": {
            "simple": "The affix @deva[क्वनिप्] comes after @deva[युध्] 'to fight' and @deva[कृ] 'to make' with past-time meaning when @deva[सह] 'with' is in composition. Examples: @deva[सहयुध्वन्] 'one who has made (someone) fight together', @deva[सहकृत्वन्] 'one who has done something together with another'. The word @deva[सह] is a particle and cannot take case endings.",
            "standard": "The affix @deva[क्वनिप्] follows @deva[युध्] and @deva[कृ] with @deva[भूतार्थ] when @deva[सह] 'with' (@deva[निपात], cannot take case) is in composition. Examples: @deva[सहयुध्वन्] 'one who caused fighting together'; @deva[सहकृत्वन्] 'co-doer'.",
            "advanced": "@deva[क्वनिप्] follows @deva[युध्]/कृ with @deva[भूतार्थ] and @deva[सह] as @deva[उपपद]. The @deva[निपात] @deva[सह] is @deva[अव्यय], taking no @deva[विभक्ति]. Examples: @deva[सहयुध्वन्], @deva[सहकृत्वन्]."
        }
    },
    "32097": {
        "en": {
            "simple": "The affix @deva[ड] comes after @deva[जन्] 'to be born' with past-time meaning when the upapada is in the locative (seventh case). Examples: @deva[उपसरजः] 'born of the first conception' (from @deva[उपसरे जातः]), @deva[मन्दुरजः] 'born in the stable'. Derivation: @deva[जन्] + @deva[ड] → @deva[ज] by @ref[6.4.143].",
            "standard": "The affix @deva[ड] follows @deva[जन्] 'to be born' with @deva[भूतार्थ] when the @deva[उपपद] is @deva[सप्तमी] (locative). Examples: @deva[उपसरे जातः] = @deva[उपसरजः] 'born of first conception'; @deva[मन्दुरजः] 'stable-born'. Derivation: @deva[जन्] + @deva[ड] = @deva[ज्] + @deva[अ] (@ref[6.4.143]) = @deva[ज].",
            "advanced": "@deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when the @deva[उपपद] is @deva[अधिकरण] (@deva[सप्तमी]). Examples: @deva[उपसरजः], @deva[मन्दुरजः]. @deva[प्रक्रिया]: @deva[जन्] + @deva[ड] → @deva[ज्] + @deva[अ] (@ref[6.4.143] @deva[जनः संज्ञायां ड]) = @deva[ज]."
        }
    },
    "32098": {
        "en": {
            "simple": "The affix @deva[ड] comes after @deva[जन्] 'to be born' with past-time meaning when the upapada is in the ablative (fifth case) and does **not** denote a genus. Examples: @deva[बुद्धिजः] 'born of understanding', @deva[संस्कारजः] 'born of habit', @deva[दुःखजः] 'born of pain'. But not when genus is denoted: @deva[हस्तिनो जातः] 'born of elephant', @deva[अश्वाज्जातः] 'born of horse'.",
            "standard": "The affix @deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when the @deva[उपपद] is @deva[पञ्चमी] (ablative) and is non-@deva[जातिवाचक]. Examples: @deva[बुद्धिजः] 'intelligence-born', @deva[संस्कारजः] 'habit-born', @deva[दुःखजः] 'pain-born'. With @deva[जातिवाचक] @deva[उपपद], no composition: @deva[हस्तिनो जातः], @deva[अश्वाज्जातः].",
            "advanced": "@deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when @deva[उपपद] is @deva[अपादान] (@deva[पञ्चमी]) and non-@deva[जातिवाचक]. Examples: @deva[बुद्धिजः], @deva[संस्कारजः], @deva[दुःखजः]. @deva[जातिवाचक] blocks: @deva[हस्तिनो जातः], @deva[अश्वाज्जातः] (no @deva[समास])."
        }
    },
    "32099": {
        "en": {
            "simple": "The affix @deva[ड] comes after @deva[जन्] 'to be born' with past-time meaning when an upasarga is in composition and the sense is simply a name (not descriptive). Example: @deva[प्रजाः] 'people' or 'offspring' (as in @deva[अथेमा मानवी प्रजाः]). This is a conventional name, not explainable by analyzing components.",
            "standard": "The affix @deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when an @deva[उपसर्ग] is in composition and the sense is @deva[आख्या] (simply appellative, not descriptive). Example: @deva[प्रजाः] 'people/offspring'. This is @deva[रूढि]—the meaning cannot be derived from component analysis.",
            "advanced": "@deva[ड] follows @deva[जन्] with @deva[भूतार्थ] when @deva[उपसर्ग] is @deva[उपपद] and the @deva[समुदितार्थ] is @deva[आख्या] (simply nominative). Example: @deva[प्रजाः]. The @deva[आख्या] designation indicates @deva[रूढ्यर्थ]—meaning is conventional, not etymologically transparent."
        }
    },
    "32100": {
        "en": {
            "simple": "The affix @deva[ड] comes after @deva[जन्] 'to be born' with past-time meaning when @deva[अनु] is the prefix and a word in the accusative is in composition. Examples: @deva[पुमनुजा] 'a girl born after a male child' (i.e., having an elder brother), @deva[स्त्र्यनुजः] 'a boy born after a female child' (i.e., having an elder sister).",
            "standard": "The affix @deva[ड] follows @deva[अनुजन्] with @deva[भूतार्थ] when the @deva[उपपद] is @deva[द्वितीया] (accusative). Examples: @deva[पुमनुजा] 'girl born after a male' (having elder brother); @deva[स्त्र्यनुजः] 'boy born after a female' (having elder sister).",
            "advanced": "@deva[ड] follows @deva[अनु] + @deva[जन्] with @deva[भूतार्थ] when @deva[कर्म]-@deva[उपपद] (@deva[द्वितीया]) is present. Examples: @deva[पुमनुजा] (f. 'having elder brother'), @deva[स्त्र्यनुजः] (m. 'having elder sister')."
        }
    },
    "32101": {
        "en": {
            "simple": "The affix @deva[ड] is seen after @deva[जन्] 'to be born' with past-time meaning even with upapadas in cases **other** than those mentioned in previous sūtras. Examples: @deva[अजः] 'unborn' (from @deva[न जायते]), @deva[द्विजः] 'twice-born' (from @deva[द्विर्जातः]). The word @deva[अपि] removes all restrictions—this affix comes after other verbs and cases too, like @deva[परिखा] 'moat' (from @deva[परितः खाता]).",
            "standard": "The affix @deva[ड] is @deva[दृश्यते] (seen) after @deva[जन्] with @deva[भूतार्थ] even when the @deva[उपपद] has cases other than @ref[3.2.97]'s locative. Examples: @deva[अजः] 'unborn' (@deva[न जायते]); @deva[द्विजः] 'twice-born'. The @deva[अपि] removes all restrictions: applies with @deva[जातिवाचक] (@deva[ब्राह्मणजो धर्मः]); without pure @deva[आख्या] (@deva[अभिजाः]/परिजाः 'hair'); without @deva[कर्म] (@deva[अनुजः] 'younger brother'). Extends to other verbs: @deva[परिखा] 'moat' (@deva[परितः खाता]), @deva[आखा] 'pond'.",
            "advanced": "@deva[ड] is @deva[दृश्यते] after @deva[जन्] with @deva[भूतार्थ] even when @deva[उपपद]-@deva[विभक्ति] differs from @ref[3.2.97]. Examples: @deva[अजः], @deva[द्विजः]. The @deva[अपि] indicates @deva[सर्वोपाधिनिवृत्ति]: (1) @deva[जातिवाचक] allowed (@deva[ब्राह्मणजः], @deva[क्षत्रियजः]); (2) non-@deva[आख्या] allowed (@deva[अभिजाः], @deva[परिजाः] 'hair'); (3) @deva[निष्कर्मक] allowed (@deva[अनुजः]); (4) extends to other @deva[धातु]s and @deva[विभक्ति]s: @deva[परिखा] (@deva[परितः खाता]), @deva[आखा]."
        }
    },
    "32102": {
        "en": {
            "simple": "The @deva[निष्ठा] affixes come after a verb with past-time meaning. The @deva[निष्ठा] affixes are @deva[क्त] and @deva[क्तवतु] (defined in @ref[1.1.26]). Examples: @deva[कृतम्] 'made' (from @deva[कृ] + @deva[क्त]), @deva[कृतवान्] 'has made' (from @deva[कृ] + @deva[क्तवतु]); @deva[भुक्तम्] 'eaten', @deva[भुक्तवान्] 'has eaten'.",
            "standard": "The @deva[निष्ठा] affixes (@deva[क्त] and @deva[क्तवतु], per @ref[1.1.26]) follow a @deva[धातु] with @deva[भूतार्थ]. Examples: @deva[कृ] + @deva[क्त] = @deva[कृतम्] 'done'; @deva[कृ] + @deva[क्तवतु] = @deva[कृतवत्], nom. @deva[कृतवान्] 'has done'; @deva[भुक्तम्], @deva[भुक्तवान्]. Vārttika: @deva[निष्ठा] applies when @deva[आदिकर्म] is meant (see @ref[3.4.71]): @deva[प्रकृतः कटं देवदत्तः], @deva[प्रकृतवान् कटं देवदत्तः].",
            "advanced": "The @deva[निष्ठा] affixes (@deva[क्त]/क्तवतु, @ref[1.1.26]) follow @deva[धातु] with @deva[भूतार्थ]. Examples: @deva[कृतम्], @deva[कृतवान्]; @deva[भुक्तम्], @deva[भुक्तवान्]. @deva[वार्त्तिक]: @deva[निष्ठा] applies with @deva[आदिकर्म] (see @ref[3.4.71] for definition): @deva[प्रकृतः कटं देवदत्तः], @deva[प्रकृतवान् कटं देवदत्तः]."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.93-3.2.102")
