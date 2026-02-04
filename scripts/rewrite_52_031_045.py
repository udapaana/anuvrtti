#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.2.31-45."""
import json


def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def main():
    commentary_path = 'static/data/layered_commentary.json'
    data = load_json(commentary_path)

    updates = {
        "52031": {
            "en": {
                "simple": "The affixes @deva[टीटच्], @deva[नाटच्], and @deva[भ्रटच्] come after @deva[अव] to mean 'a hooked/bent nose' (when forming a name). @deva[नासिकाया नतम्] → @deva[अवटीटम्], @deva[अवनाटम्], or @deva[अवभ्रटम्].",
                "standard": "After @deva[अव] 'down', the affixes @deva[टीटच्] (= @deva[टीट]), @deva[नाटच्] (= @deva[नाट]), and @deva[भ्रटच्] (= @deva[भ्रट]) denote 'a hooked nose' (@deva[नासिकाया नतम्] 'bend of the nose') when forming a name (@deva[संज्ञायाम्]). Examples: @deva[अवटीटम्], @deva[अवनाटम्], @deva[अवभ्रटम्]. The word signifies both the nose and a person with such a nose: @deva[अवटीटा नासिका] 'a hooked nose', @deva[अवटीटः पुरुषः] 'a hook-nosed person'.",
                "advanced": "The triple-affix prescription (@deva[टीटच्], @deva[नाटच्], @deva[भ्रटच्]) for @deva[अव] creates @deva[संज्ञा] (proper names/epithets) denoting @deva[नासिकानति] (nasal curvature). The derived forms function both attributively (@deva[अवटीटा नासिका]) and substantively (@deva[अवटीटः पुरुषः]). These @deva[नामधेय] terms exemplify physical-characteristic naming."
            }
        },
        "52032": {
            "en": {
                "simple": "The affixes @deva[बिडच्] and @deva[बिरीसच्] come after @deva[नि] to mean 'a hooked nose' (when forming a name). @deva[नि] → @deva[निबिडम्], @deva[निबिरीसम्].",
                "standard": "After @deva[नि] 'down', the affixes @deva[बिडच्] (= @deva[बिड]) and @deva[बिरीसच्] (= @deva[बिरीस]) denote 'a hooked nose' when forming a name. Examples: @deva[निबिडम्], @deva[निबिरीसम्]. Question: How do we explain @deva[निबिडाः केशाः] 'thick hair' or @deva[निबिडं वस्त्रम्] 'dense cloth'? Answer: By analogical extension.",
                "advanced": "The @deva[बिडच्]//@deva[बिरीसच्] affixes apply to @deva[नि] with @deva[नासिकानति]-meaning in @deva[संज्ञा] context. The semantic extension to @deva[निबिड] 'thick/dense' (as in @deva[निबिडाः केशाः], @deva[निबिडं वस्त्रम्]) represents @deva[सादृश्य] (analogical) usage beyond the primary nasal-curvature sense."
            }
        },
        "52033": {
            "en": {
                "simple": "The affixes @deva[इनच्] and @deva[पिटच्] come after @deva[नि] to mean 'hooked nose', with @deva[नि] replaced by @deva[चिक्] and @deva[चि] respectively. @deva[नि] + @deva[इनच्] → @deva[चिकिनः]; @deva[नि] + @deva[पिटच्] → @deva[चिपिटः].",
                "standard": "After @deva[नि], the affixes @deva[इनच्] and @deva[पिटच्] denote 'hooked nose', with @deva[नि] being replaced: @deva[चिक्] replaces @deva[नि] before @deva[इनच्], and @deva[चि] replaces @deva[नि] before @deva[पिटच्]. Derivations: @deva[नि] + @deva[इनच्] → @deva[चिक्] + @deva[इनच्] → @deva[चिकिनः]; @deva[नि] + @deva[पिटच्] → @deva[चि] + @deva[पिटच्] → @deva[चिपिटः]. A @deva[वार्त्तिक] adds: @deva[क] also comes with @deva[चिक्] replacing @deva[नि] → @deva[चिक्] + @deva[क] → @deva[चिल्लः].",
                "advanced": "The @deva[इनच्]//@deva[पिटच्] affixes trigger @deva[आदेश] (substitution) of @deva[नि]: @deva[चिक्] before @deva[इनच्] (→ @deva[चिकिन]), @deva[चि] before @deva[पिटच्] (→ @deva[चिपिट]). A @deva[वार्त्तिक] supplements @deva[क]-affix with @deva[चिक्]-substitution yielding @deva[चिल्ल] (with @deva[ककारलोप] and @deva[द्वित्व]). These represent @deva[स्थानिवद्भाव]-exempt irregular formations."
            }
        },
        "52034": {
            "en": {
                "simple": "The affix @deva[त्यकन्] comes after @deva[उप] and @deva[अधि] to mean 'nearness' (when forming names). @deva[उप] → @deva[उपत्यका] 'lowland/foothill'; @deva[अधि] → @deva[अधित्यका] 'highland/tableland'.",
                "standard": "After @deva[उप] 'near/below' and @deva[अधि] 'above/on', the affix @deva[त्यकन्] (= @deva[त्यका]) denotes @deva[आसन्न] 'nearness' when forming names. Examples: @deva[उपत्यका] = @deva[पर्वतस्य आसन्नम्] 'lowland, land at the foot of a mountain'; @deva[अधित्यका] = @deva[पर्वतस्य आरूढम्] 'highland, tableland'. Rule @ref[7.3.44] does not apply, so we don't get *@deva[उपत्यिका] or *@deva[अधित्यिका].",
                "advanced": "The @deva[त्यकन्]-affix applies to @deva[उप] and @deva[अधि] with @deva[आसन्न/समीप]-meaning, creating geographical terms. @deva[उपत्यका] denotes @deva[पर्वतसमीपभूमि] (foothill/piedmont); @deva[अधित्यका] denotes @deva[पर्वतोपरिभूमि] (plateau/tableland). The non-application of @ref[7.3.44] (@deva[इयङ्]) preserves @deva[त्यका] without @deva[इकार]-insertion."
            }
        },
        "52035": {
            "en": {
                "simple": "The affix @deva[अठच्] comes after @deva[कर्मन्] 'work' (locative) to mean 'one who zealously engages in it'. @deva[कर्मणि घटते] → @deva[कर्मठः] 'a diligent/proficient person'.",
                "standard": "After @deva[कर्मन्] 'work/action' in the locative, the affix @deva[अठच्] (= @deva[अठ]) denotes @deva[घट] 'zealous engagement'. The word @deva[घटः] means 'zealous/strenuous work'. Example: @deva[कर्मणि घटते] (one who strives in work) → @deva[कर्मठः पुरुषः] 'a clever, proficient, industrious person'.",
                "advanced": "The @deva[अठच्]-affix applies to @deva[सप्तम्यन्त] @deva[कर्मन्] with @deva[घट]-meaning (zealous exertion). The derived @deva[कर्मठ] denotes @deva[कर्मनिष्ठ]//@deva[उद्योगशील] (industrious/diligent). The locative relation (@deva[कर्मणि]) specifies the domain of zealous application."
            }
        },
        "52036": {
            "en": {
                "simple": "The affix @deva[इतच्] comes after @deva[तारका]-class words (nominative) to mean 'that in which this is observed'. @deva[तारकाः संजाताः अस्य] → @deva[तारकितं नभः] 'a starry sky'.",
                "standard": "After @deva[तारका] and similar words (@deva[तारकादि] class) in the nominative, the affix @deva[इतच्] (= @deva[इत]) denotes 'that in which this is observed/has appeared'. Examples: @deva[तारकाः संजाता अस्य नभसः] → @deva[तारकितं नभः] 'a starry sky' (a night with visible stars); @deva[पुष्पाणि संजातानि अस्य] → @deva[पुष्पितो वृक्षः] 'a flowering tree'. The @deva[तारकादि] class is an @deva[आकृतिगण] (open class).",
                "advanced": "The @deva[इतच्]-affix applies to @deva[प्रथमान्त] @deva[तारकादि] bases with @deva[संजात/उत्पन्न]-meaning (that in which X has appeared). The @deva[तारकादि] @deva[गण] is @deva[आकृतिगण] (pattern-based, open class), including: @deva[तारका], @deva[पुष्प], @deva[कर्णक], @deva[मञ्जरी], @deva[ऋजीष], etc. The derived forms function as @deva[विशेषण] (adjectives) describing presence of the base-entity."
            }
        },
        "52037": {
            "en": {
                "simple": "The affixes @deva[द्वयसच्], @deva[दघ्नच्], and @deva[मात्रच्] come after words (nominative) to mean 'that whose lineal measure is this'. @deva[ऊरुः प्रमाणम् अस्य] → @deva[ऊरुद्वयसम्], @deva[ऊरुदघ्नम्], or @deva[ऊरुमात्रम्] 'thigh-high'.",
                "standard": "After a word in the nominative, the affixes @deva[द्वयसच्] (= @deva[द्वयस]), @deva[दघ्नच्] (= @deva[दघ्न]), and @deva[मात्रच्] (= @deva[मात्र]) denote 'that whose lineal measure is this' (@deva[तदस्य प्रमाणम्]). Examples: @deva[ऊरुः प्रमाणम् अस्य] → @deva[ऊरुद्वयसम्], @deva[ऊरुदघ्नम्], @deva[ऊरुमात्रम्] 'reaching up to the thigh'; similarly @deva[जानुमात्रम्], @deva[जानुद्वयसम्], @deva[जानुदघ्नम्] 'knee-high'. Usage: @deva[ऊरुद्वयसम् उदकम्] 'water reaching up to the thigh'.",
                "advanced": "The triple-affix prescription (@deva[द्वयसच्], @deva[दघ्नच्], @deva[मात्रच्]) for @deva[प्रथमान्त] bases creates synonymous @deva[प्रमाणवाचक] (measure-denoting) forms. All three express @deva[आयामप्रमाण] (lineal/vertical measure). Some authorities distinguish: @deva[द्वयस] and @deva[दघ्न] specifically denote vertical height (reaching up to X), while @deva[मात्र] is more general."
            }
        },
        "52038": {
            "en": {
                "simple": "The affixes @deva[अण्], @deva[द्वयसच्], @deva[दघ्नच्], and @deva[मात्रच्] come after @deva[पुरुष] 'man' and @deva[हस्ति] 'elephant' (nominative) to mean 'that whose measure is this'. @deva[पुरुषः प्रमाणम्] → @deva[पौरुषम्], @deva[पुरुषद्वयसम्], etc.",
                "standard": "After @deva[पुरुष] 'man' and @deva[हस्ति] 'elephant' in the nominative, four affixes (@deva[अण्], @deva[द्वयसच्], @deva[दघ्नच्], @deva[मात्रच्]) denote 'that whose measure is this' (@deva[तदस्य प्रमाणम्]). The @deva[च्] draws in the three affixes from the previous @[sūtra]. Examples: @deva[पुरुषः प्रमाणम् अस्य] → @deva[पौरुषम्] (by @deva[अण्]), @deva[पुरुषद्वयसम्], @deva[पुरुषदघ्नम्], @deva[पुरुषमात्रम्] 'man-height'; @deva[हस्तिद्वयसम्], @deva[हस्तिदघ्नम्], @deva[हस्तिमात्रम्] 'elephant-height'.",
                "advanced": "The quadruple-affix prescription (@deva[अण्] + the three from @ref[5.2.37]) for @deva[पुरुष] and @deva[हस्ति] creates @deva[प्रमाणवाचक] terms using canonical height-references. The @deva[अण्]-derivative @deva[पौरुष] (with @deva[वृद्धि]) is additional to the @deva[द्वयसच्]//@deva[दघ्नच्]//@deva[मात्रच्] forms. @deva[पुरुष] and @deva[हस्ति] serve as standard units of measurement in traditional metrics."
            }
        },
        "52039": {
            "en": {
                "simple": "The affix @deva[वतुप्] comes after @deva[यद्], @deva[तद्], and @deva[एतद्] (nominative) to mean 'that whose volume-measure is this'. @deva[यत् परिमाणम् अस्य] → @deva[यावान्] 'of which measure'.",
                "standard": "After @deva[यद्], @deva[तद्], and @deva[एतद्] (demonstratives) in the nominative, the affix @deva[वतुप्] (= @deva[वत्]) denotes @deva[परिमाण] 'measure of volume/quantity'. Examples: @deva[यत् परिमाणम् अस्य] → @deva[यावान्] 'of which measure/as much as'; @deva[तद् परिमाणम्] → @deva[तावान्] 'of that measure/so much'; @deva[एतद् परिमाणम्] → @deva[एतावान्] 'of this measure'. Derivation: @deva[यद्] + @deva[वतुप्] → @deva[यावत्], nom. @deva[यावान्].",
                "advanced": "The @deva[वतुप्]-affix applies to pronominal bases @deva[यद्]//@deva[तद्]//@deva[एतद्] with @deva[परिमाण]-meaning (volumetric/quantitative measure). A @deva[कारिका] notes: @deva[ड]-@deva[वतु] are distinguished by semantic specialization; @deva[मात्रादि] affixes are not blocked; the @deva[भाव] (abstract) sense is also established for @deva[ड]-@deva[वतु]. The derived forms are @deva[सर्वनामस्थान]-inflected."
            }
        },
        "52040": {
            "en": {
                "simple": "After @deva[किम्] and @deva[इदम्], @deva[घ] (= @deva[इय्]) replaces @deva[व्] of @deva[वतुप्]. @deva[किम्] + @deva[वतुप्] → @deva[कियत्] 'how much'; @deva[इदम्] + @deva[वतुप्] → @deva[इयत्] 'this much'.",
                "standard": "After @deva[किम्] 'what' and @deva[इदम्] 'this', the @deva[व्] of @deva[वतुप्] is replaced by @deva[घ] (= @deva[इय्]). Derivation: @deva[किम्] + @deva[वतुप्] → @deva[की] + @deva[वतुप्] (by @ref[6.3.90]) → @deva[क्] + @deva[घतुप्] (by @ref[6.4.148]) → @deva[कियत्], nom. @deva[कियान्] 'how much/how great'. Similarly: @deva[इदम्] + @deva[वतुप्] → @deva[इयत्], nom. @deva[इयान्] 'this much/this great'.",
                "advanced": "The @deva[व्]-to-@deva[घ] substitution (@deva[घ] = @deva[इय्]) applies to @deva[किम्] and @deva[इदम्] before @deva[वतुप्]. The derivational chain involves @ref[6.3.90] (@deva[किम्] → @deva[की]) and @ref[6.4.148] (@deva[व्] → @deva[घ]). The resulting @deva[कियत्]//@deva[इयत्] are interrogative and demonstrative @deva[परिमाणवाचक] forms respectively, inflecting as @deva[मत्वर्थीय] stems."
            }
        },
        "52041": {
            "en": {
                "simple": "The affixes @deva[डति] and @deva[वतुप्] come after @deva[किम्] (nominative) to mean 'numerical quantity'. @deva[का संख्या परिमाणम् एषाम्] → @deva[कति] 'how many' or @deva[कियान्] 'how much'.",
                "standard": "After @deva[किम्] in the nominative, both @deva[डति] (realized as @deva[अति] with @deva[इम्]-elision from the base) and @deva[वतुप्] (→ @deva[घतुप्] = @deva[इयत्]) denote @deva[संख्यापरिमाण] 'numerical quantity' (@deva[संख्यायाः परिमाणम्] = @deva[संख्यापरिच्छेदः] 'estimate by counting'). Example: @deva[का संख्या परिमाणम् एषां ब्राह्मणानाम्] → @deva[कति ब्राह्मणाः] 'how many brahmins?'",
                "advanced": "The @deva[डति]-affix (with @deva[इम्-लोप] of @deva[किम्]) yields @deva[कति] 'how many' (numerical interrogative), while @deva[वतुप्] → @deva[घतुप्] yields @deva[कियत्] 'how much' (quantitative interrogative). The @deva[संख्यापरिमाण] sense distinguishes discrete counting (@deva[कति]) from continuous measurement (@deva[कियत्]). The @deva[च्] includes @deva[वतुप्] via @deva[अनुकर्षण]."
            }
        },
        "52042": {
            "en": {
                "simple": "The affix @deva[तयप्] comes after numerals to mean 'that which has so many parts'. @deva[पञ्च अवयवाः अस्य] → @deva[पञ्चतयम्] 'a group of five'.",
                "standard": "After a numeral, the affix @deva[तयप्] (= @deva[तय]) denotes 'that whose parts are so many' (@deva[तदस्य अवयवाः]). Since parts connect with the whole, the affix denotes the whole. Examples: @deva[पञ्च अवयवा अस्य] → @deva[पञ्चतयम्] 'having five parts, a pentad'; @deva[दशतयम्] 'a group of ten, decade'; @deva[चतुष्टयम्] 'a tetrad' (see @ref[8.3.101] and @ref[4.5.15] for @deva[चतुष्टयी]).",
                "advanced": "The @deva[तयप्]-affix applies to @deva[संख्यावाचिन्] (numerals) with @deva[अवयव]-meaning (parts constituting a whole). The derived @deva[°तय] forms function as collective nouns: @deva[पञ्चतय] 'pentad', @deva[दशतय] 'decade'. The part-whole relation (@deva[अवयवावयविभाव]) allows the affix to denote the composite entity rather than its constituents."
            }
        },
        "52043": {
            "en": {
                "simple": "The affix @deva[अयच्] optionally replaces @deva[तयप्] after @deva[द्वि] 'two' and @deva[त्रि] 'three'. @deva[द्वौ अवयवौ अस्य] → @deva[द्वयम्] or @deva[द्वितयम्] 'a pair'.",
                "standard": "After @deva[द्वि] 'two' and @deva[त्रि] 'three', the affix @deva[अयच्] (= @deva[अय]) optionally substitutes for @deva[तयप्]. Examples: @deva[द्वौ अवयवौ अस्य] → @deva[द्वयम्] (by @deva[अयच्]) or @deva[द्वितयम्] (by @deva[तयप्]) 'a pair, couple'; @deva[त्रयः अवयवाः अस्य] → @deva[त्रयम्] or @deva[त्रितयम्] 'a triad' (see @ref[6.4.148]). The word @deva[तय] in the @[sūtra] indicates the @deva[स्थानिन्] (item to be replaced).",
                "advanced": "The @deva[विकल्प] between @deva[अयच्] and @deva[तयप्] for @deva[द्वि]//@deva[त्रि] creates doublets: @deva[द्वय]//@deva[द्वितय], @deva[त्रय]//@deva[त्रितय]. The explicit mention of @deva[तय] as @deva[स्थानिन्] clarifies the substitution relation; without it, @deva[अयच्] would simply be an additional affix. The @deva[अयच्]-forms (@deva[द्वय], @deva[त्रय]) are more common in classical usage."
            }
        },
        "52044": {
            "en": {
                "simple": "After @deva[उभ] 'both', @deva[अयच्] always replaces @deva[तयप्], with @deva[उदात्त] accent on the first syllable. @deva[उभ] → @deva[उभयम्] 'both kinds'.",
                "standard": "After @deva[उभ] 'both', the affix @deva[अयच्] invariably (not optionally) substitutes for @deva[तयप्], with the @deva[उदात्त] (acute) accent on its first syllable (@deva[अ]). By @ref[6.1.163], @deva[अयच्] (with indicatory @deva[च्]) would normally have accent on the final syllable (@deva[य]); the special mention of @deva[उदात्त] shifts it to the first syllable. Result: @deva[उभयम्] 'both (kinds)'.",
                "advanced": "The @deva[नित्य]-substitution of @deva[अयच्] for @deva[तयप्] after @deva[उभ] (unlike the @deva[विकल्प] of @ref[5.2.43]) is accompanied by irregular @deva[आद्युदात्त] accentuation. The @deva[चकार] of @deva[अयच्] normally triggers @ref[6.1.163] (@deva[अन्तोदात्त]), but the @[sūtra]'s explicit @deva[उदात्त]-specification overrides this, placing accent on @deva[अ]: @deva[उ॑भयम्]."
            }
        },
        "52045": {
            "en": {
                "simple": "The affix @deva[ड] comes after numerals ending in @deva[दशन्] (nominative) to mean 'this is surplus in it'. @deva[एकादश अधिका अस्मिन् शते] → @deva[एकादशं शतम्] 'a hundred plus eleven = 111'.",
                "standard": "After a numeral ending in @deva[दशन्] 'ten' in the nominative, the affix @deva[ड] (= @deva[अ] with elision of @deva[अन्] from the base) denotes @deva[अधिक] 'surplus/additional'. Example: @deva[एकादश अधिका अस्मिन् शते] → @deva[एकादशं शतम्] 'hundred + eleven = 111'. A @deva[कारिका] states: for @deva[अधिक]-meaning with @deva[शत] or @deva[सहस्र], when both belong to the same category, @deva[ड] should be applied to express the surplus numeral.",
                "advanced": "The @deva[ड]-affix (with @deva[अन्-लोप] of @deva[दशन्]-final numerals) expresses @deva[आधिक्य] (surplus/excess) in compound numerals. The @deva[कारिका] specifies: @deva[अधिके समानजाताविष्टं शतसहस्रयोः] — when the surplus is within the same class (e.g., both counting units), @deva[ड] applies to the @deva[संख्या] expressing the excess. This creates forms like @deva[एकादशं शतम्] (100+11=111)."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.2.31-45)")

if __name__ == "__main__":
    main()
