#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.2.46-60."""
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
        "52046": {
            "en": {
                "simple": "The affix @deva[ड] comes after numerals ending in @deva[शत्] and after @deva[विंशति] (with elision of @deva[अत्] and @deva[अति]) to mean 'surplus'. @deva[त्रिंशत् अधिका अस्मिन् शते] → @deva[त्रिंशं शतम्] '130'.",
                "standard": "After numerals ending in @deva[शत्] and after @deva[विंशति], the affix @deva[ड] (= @deva[अ]) denotes @deva[अधिक] 'surplus', with elision of @deva[अत्] (for @deva[शत्]-ending) and @deva[अति] (for @deva[विंशति]) per @ref[6.4.142]. Examples: @deva[त्रिंशत् अधिका अस्मिन् शते] → @deva[त्रिंशं शतम्] '130'; @deva[एकत्रिंशं शतम्] '131'; @deva[एकचत्वारिंशं शतम्] '141'. This applies to abstract numerals only; hence not *@deva[गोत्रिंशम्] for '30 cows added to 100 cows'.",
                "advanced": "The @deva[ड]-affix for @deva[अधिक]-meaning applies to @deva[शदन्त] numerals and @deva[विंशति], with @deva[टिलोप] by @ref[6.4.142]. The rule is restricted to @deva[संख्यामात्र] (abstract numbers); when counting concrete objects (@deva[गोशत] 'hundred cows'), the affix doesn't apply, preserving full forms like @deva[गोत्रिंशदधिका अस्मिन् गोशते]."
            }
        },
        "52047": {
            "en": {
                "simple": "The affix @deva[मयट्] (feminine @deva[ङीप्]) comes after numerals to mean 'containing so many times more' (in exchange). @deva[पञ्च गुणः अस्य विनिमयः] → @deva[पञ्चमयः] 'fivefold (in value)'.",
                "standard": "After a numeral in the nominative with genitive sense (@deva[तदस्य]), the affix @deva[मयट्] (= @deva[मय], feminine by @deva[ङीप्]) denotes @deva[विनिमय] 'exchange ratio' — 'containing so many times more' or 'the price-portion ratio'. The meaning is: 'a portion of this equals so many equal portions of that'. The @deva[तदस्य] from @ref[5.2.36] is understood.",
                "advanced": "The @deva[मयट्]-affix with @deva[विनिमयार्थ] (exchange-meaning) applies to @deva[संख्यावाचक] in @deva[प्रथमा] with implicit @deva[षष्ठी] relation. The semantic frame involves trade ratios: @deva[X-मय] means 'X times the value/portion'. The feminine @deva[ङीप्] applies per standard @deva[तद्धित] rules. This creates commercial/exchange-rate terminology."
            }
        },
        "52048": {
            "en": {
                "simple": "The affix @deva[डट्] comes after numerals (genitive) to mean 'making full this number' (ordinal). @deva[एकादशानां पूरणः] → @deva[एकादशः] 'eleventh'.",
                "standard": "After a numeral in the genitive, the affix @deva[डट्] (= @deva[अ] with elision of final vowel + following consonant) denotes @deva[पूरण] 'completing/making full the number' — forming ordinals. That which completes a count is @deva[पूरण]. Examples: @deva[एकादशानां पूरणः] → @deva[एकादशः] 'the eleventh' (the one completing eleven); @deva[त्रयोदशानां पूरणः] → @deva[त्रयोदशः] 'thirteenth'. The rule doesn't apply to cardinal meanings.",
                "advanced": "The @deva[डट्]-affix (@deva[टिलोप]-causing per @ref[6.4.142]) creates @deva[पूरणसंख्या] (ordinal numerals) from @deva[षष्ठ्यन्त] cardinals. The @deva[पूरण] concept: the ordinal designates the element that 'completes' the count to reach the given number. This semantic analysis distinguishes ordinals from cardinals: @deva[एकादश] (cardinal 'eleven') vs. @deva[एकादश] (ordinal 'eleventh')."
            }
        },
        "52049": {
            "en": {
                "simple": "The augment @deva[मट्] comes before @deva[डट्] after numerals ending in @deva[न्] when no other numeral precedes. @deva[पञ्चानां पूरणः] → @deva[पञ्चमः] 'fifth'.",
                "standard": "Before @deva[डट्] (ordinal affix), the augment @deva[मट्] (= @deva[म]) is added after numerals ending in @deva[न्] (@deva[नकारान्त]) when not preceded by another numeral. Examples: @deva[पञ्चानां पूरणः] → @deva[पञ्चमः] 'fifth'; @deva[सप्तानां पूरणः] → @deva[सप्तमः] 'seventh'. Why @deva[नकारान्त]? @deva[विंशतेः पूरणः] → @deva[विंशः] 'twentieth' (no @deva[म्]). Why 'not preceded by numeral'? @deva[एकादशानां पूरणः] → @deva[एकादशः] (no @deva[म्]).",
                "advanced": "The @deva[मट्]-@deva[आगम] applies to @deva[नकारान्त संख्या] (@deva[पञ्चन्], @deva[सप्तन्], @deva[नवन्], @deva[दशन्]) before @deva[डट्], conditioned by @deva[असंख्यापूर्वक] (not preceded by another numeral). This yields @deva[पञ्चम], @deva[सप्तम], @deva[नवम], @deva[दशम]. Compound numerals like @deva[एकादशन्] take @deva[डट्] directly without @deva[मट्]."
            }
        },
        "52050": {
            "en": {
                "simple": "In the Vedas, @deva[थट्] is optionally the augment (alongside @deva[मट्]) before @deva[डट्] after @deva[न्]-ending numerals not preceded by another numeral. @deva[पञ्चथः] or @deva[पञ्चमः] 'fifth'.",
                "standard": "In Vedic (@deva[छन्दस्]), the augment @deva[थट्] (= @deva[थ]) optionally comes before @deva[डट्] after @deva[न्]-ending numerals not preceded by another numeral, alongside @deva[मट्]. Examples: @deva[पञ्चथः] or @deva[पञ्चमः] 'fifth'; @deva[सप्तथः] or @deva[सप्तमः] 'seventh'. Vedic usage: @deva[पर्णमयानि पञ्चथानि भवन्ति]; @deva[पञ्चमम् इन्द्रियम् अस्य आपाञ्च्यमन्].",
                "advanced": "The @deva[थट्]-@deva[आगम] is a @deva[छान्दस] (Vedic) @deva[विकल्प] to @deva[मट्] for @deva[नकारान्त असंख्यापूर्वक संख्या] before @deva[डट्]. This creates Vedic doublets: @deva[पञ्चथ]//@deva[पञ्चम], @deva[सप्तथ]//@deva[सप्तम]. The @deva[थ]-forms are archaic, preserved in Vedic texts but replaced by @deva[म]-forms in classical Sanskrit."
            }
        },
        "52051": {
            "en": {
                "simple": "The augment @deva[थुक्] comes before @deva[डट्] after @deva[षट्], @deva[कति], @deva[कतिपय], and @deva[चतुर्]. @deva[षण्णां पूरणः] → @deva[षष्ठः] 'sixth'; @deva[चतुर्णां पूरणः] → @deva[चतुर्थः] 'fourth'.",
                "standard": "Before @deva[डट्], the augment @deva[थुक्] (= @deva[थ्]) is added after @deva[षट्] 'six', @deva[कति] 'how many', @deva[कतिपय] 'several', and @deva[चतुर्] 'four'. @deva[डट्] must be read into this @[sūtra] in the locative (@deva[डटि] 'when @deva[डट्] follows'). @deva[कतिपय] is not a numeral but takes @deva[डट्] by this rule. Examples: @deva[षण्णां पूरणः] → @deva[षष्ठः] 'sixth'; @deva[कतिथः] 'which in order?'; @deva[कतिपयथः] 'the one after several'; @deva[चतुर्थः] 'fourth'.",
                "advanced": "The @deva[थुक्]-@deva[आगम] applies to a closed set: @deva[षट्], @deva[कति], @deva[कतिपय], @deva[चतुर्]. The @deva[उकार] of @deva[थुक्] is @deva[इत्] (elided). @deva[कतिपय] (not technically a @deva[संख्या]) receives @deva[डट्] by implication of this @[sūtra]. The @deva[षट्] + @deva[थ] + @deva[अ] derivation shows @deva[ष्टुत्व] (@deva[ट] → @deva[ठ] after @deva[ष्]): @deva[षष्ठ]."
            }
        },
        "52052": {
            "en": {
                "simple": "The augment @deva[तिथुक्] comes before @deva[डट्] after @deva[बहु], @deva[पूग], @deva[गण], and @deva[संघ]. @deva[बहूनां पूरणः] → @deva[बहुतिथः] 'the manieth'.",
                "standard": "Before @deva[डट्], the augment @deva[तिथुक्] (= @deva[तिथ्]) is added after @deva[बहु] 'many', @deva[पूग] 'group', @deva[गण] 'class', and @deva[संघ] 'assembly'. @deva[डटि] (locative) is understood. @deva[पूग] and @deva[संघ] are not numerals but take @deva[डट्] by this rule. Examples: @deva[बहूनां पूरणः] → @deva[बहुतिथः] 'the manieth' (completing many); @deva[पूगतिथः]; @deva[गणतिथः]; @deva[संघतिथः].",
                "advanced": "The @deva[तिथुक्]-@deva[आगम] (@deva[उकार इत्]) applies to @deva[बहु] (numeral-like), @deva[पूग], @deva[गण], @deva[संघ] (collective nouns). The latter three receive @deva[डट्]-applicability via this @[sūtra]'s implication. The resulting forms (@deva[बहुतिथ], @deva[पूगतिथ], etc.) denote ordinal positions within pluralities or groups."
            }
        },
        "52053": {
            "en": {
                "simple": "The augment @deva[तिथुक्] comes before @deva[डट्] after stems ending in @deva[वतु]. @deva[यावतां पूरणः] → @deva[यावतिथः] 'the as-manieth'.",
                "standard": "Before @deva[डट्], the augment @deva[तिथुक्] (= @deva[तिथ्]) is added after stems ending in @deva[वतु] (from @deva[वतुप्] affix). Words ending in @deva[वतु] are numerals per @ref[1.1.23] and take @deva[डट्] by @ref[5.2.48]; this @[sūtra] specifies the augment. @deva[डटि] is understood. Examples: @deva[यावतां पूरणः] → @deva[यावतिथः] 'the as-manieth'; @deva[तावतिथः] 'the so-manieth'; @deva[एतावतिथः] 'the this-manieth'.",
                "advanced": "The @deva[तिथुक्]-@deva[आगम] for @deva[वत्वन्त] stems applies to @deva[यावत्], @deva[तावत्], @deva[एतावत्], @deva[कियत्], @deva[इयत्] (all @deva[वतुप्]-derivatives per @ref[5.2.39-40]). These are @deva[संख्या] by @ref[1.1.23], hence @deva[डट्]-eligible. The resulting @deva[°वतिथ] forms are ordinals of indefinite/correlative quantifiers."
            }
        },
        "52054": {
            "en": {
                "simple": "The affix @deva[तीय] comes after @deva[द्वि] 'two' to mean 'completer thereof'. @deva[द्वयोः पूरणः] → @deva[द्वितीयः] 'second'.",
                "standard": "After @deva[द्वि] 'two', the affix @deva[तीय] denotes @deva[पूरण] 'completer' (ordinal sense). This blocks @deva[डट्]. Example: @deva[द्वयोः पूरणः] → @deva[द्वितीयः] 'the second' — that which completes the two.",
                "advanced": "The @deva[तीय]-affix is an @deva[अपवाद] (exception) to @deva[डट्] for @deva[द्वि]. The direct suffixation @deva[द्वि] + @deva[तीय] → @deva[द्वितीय] creates the ordinal 'second'. Unlike the @deva[डट्]-derived ordinals, @deva[तीय] is a full affix rather than requiring augments."
            }
        },
        "52055": {
            "en": {
                "simple": "The affix @deva[तीय] comes after @deva[त्रि] 'three' with @deva[संप्रसारण] (semivowel → vowel). @deva[त्रि] + @deva[तीय] → @deva[तृतीयः] 'third'.",
                "standard": "After @deva[त्रि] 'three', the affix @deva[तीय] applies with @deva[संप्रसारण] (vowel substitution for semivowel, per @ref[1.1.45]). Derivation: @deva[त्रि] + @deva[तीय] → @deva[तृ] + @deva[इ] + @deva[तीय] (@deva[र्] → @deva[ऋ]) → @deva[तृतीयः] (by @ref[6.1.108], @deva[इ] merges with prior @deva[ऋ]). In @deva[तृतीय], the @deva[ऋ] is not lengthened by @ref[6.4.2] (which applies only in certain environments).",
                "advanced": "The @deva[तीय]-affix for @deva[त्रि] triggers @deva[संप्रसारण]: @deva[र्] → @deva[ऋ] per @ref[1.1.45]. The subsequent @ref[6.1.108] (@deva[सवर्णदीर्घ]) would merge @deva[ऋ] + @deva[इ], but the actual process yields @deva[तृतीय] without lengthening. The @ref[6.4.2] non-application is due to the affix being @deva[तीय] (not @deva[ति]-initial @deva[कित्/ङित्])."
            }
        },
        "52056": {
            "en": {
                "simple": "After @deva[विंशति] 'twenty' and similar words, @deva[तमट्] is optionally added to @deva[डट्]. @deva[विंशतेः पूरणः] → @deva[विंशतितमः] or @deva[विंशः] 'twentieth'.",
                "standard": "After @deva[विंशति] and similar words (@deva[विंशत्यादि]), the augment @deva[तमट्] (= @deva[तम], feminine by @deva[ङीप्]) is optionally added to @deva[डट्] in @deva[पूरण] sense. Examples: @deva[विंशतेः पूरणः] → @deva[विंशतितमः] (with @deva[तमट्]) or @deva[विंशः] (without) 'twentieth'; @deva[एकविंशतितमः] or @deva[एकविंशः] '21st'; @deva[त्रिंशत्तमः] or @deva[त्रिंशः] '30th'.",
                "advanced": "The @deva[तमट्]-@deva[विकल्प] (optional augment) for @deva[विंशत्यादि] before @deva[डट्] creates doublet ordinals: @deva[विंशतितम]//@deva[विंश], @deva[त्रिंशत्तम]//@deva[त्रिंश]. The @deva[तमट्] adds explicit ordinal marking; without it, @deva[डट्] alone (with @deva[टिलोप]) yields the shorter form. Both are grammatically valid in @deva[पूरण]-meaning."
            }
        },
        "52057": {
            "en": {
                "simple": "After @deva[शत] 'hundred', etc., and after @deva[मास] 'month', @deva[अर्धमास] 'fortnight', @deva[संवत्सर] 'year', @deva[तमट्] is always added to @deva[डट्]. @deva[शतस्य पूरणः] → @deva[शततमः] 'hundredth'.",
                "standard": "After @deva[शत] and higher numerals, and after time-words @deva[मास] 'month', @deva[अर्धमास] 'fortnight', and @deva[संवत्सर] 'year', the augment @deva[तमट्] is obligatory (not optional) with @deva[डट्]. @deva[मास] etc. are not numerals but take @deva[डट्] by implication. Examples: @deva[शतस्य पूरणः] → @deva[शततमः] 'hundredth'; @deva[सहस्रतमः] 'thousandth'; @deva[लक्षतमः] 'hundred-thousandth'; @deva[मासस्य पूरणः] → @deva[मासतमो दिवसः] 'the month-completing day'.",
                "advanced": "The @deva[नित्य]-@deva[तमट्] (obligatory augment) applies to @deva[शतादि] (high numerals: @deva[शत], @deva[सहस्र], @deva[लक्ष], etc.) and time-units (@deva[मास], @deva[अर्धमास], @deva[संवत्सर]). The latter receive @deva[डट्]-applicability via this @[sūtra]'s @deva[ज्ञापन]. This creates ordinals for calendrical positions: @deva[मासतम] 'the last day of a month'."
            }
        },
        "52058": {
            "en": {
                "simple": "After @deva[षष्टि] 'sixty' and similar words (when not preceded by another numeral), @deva[तमट्] is always added to @deva[डट्]. @deva[षष्टेः पूरणः] → @deva[षष्टितमः] 'sixtieth'.",
                "standard": "After @deva[षष्टि] and similar (@deva[षष्ट्यादि]) when not preceded by another numeral, the augment @deva[तमट्] is obligatory (not optional as in @ref[5.2.56]). Examples: @deva[षष्टितमः] 'sixtieth'; @deva[सप्ततितमः] 'seventieth'. Why 'not preceded by numeral'? @deva[एकषष्टः] or @deva[एकषष्टितमः] '61st' — here @ref[5.2.56] applies (optional), since @deva[एक] precedes.",
                "advanced": "The @deva[नित्य]-@deva[तमट्] for @deva[षष्ट्यादि] (@deva[षष्टि], @deva[सप्तति], @deva[अशीति], @deva[नवति]) overrides the @deva[विकल्प] of @ref[5.2.56] when @deva[असंख्यापूर्वक]. With preceding numeral (@deva[एकषष्टि], etc.), @ref[5.2.56]'s optional @deva[तमट्] applies: @deva[एकषष्ट]//@deva[एकषष्टितम]."
            }
        },
        "52059": {
            "en": {
                "simple": "When expressing @deva[सूक्त] (Vedic hymn) or @deva[साम] (Sāmaveda chant), the affix @deva[छ] (@deva[ईय]) comes after a nominal stem with @deva[मतुप्]-sense ('having this'). @deva[अच्छावाकीयं सूक्तम्] 'hymn having @deva[अच्छावाक्]'.",
                "standard": "When denoting a @deva[सूक्त] (Vedic hymn-collection) or @deva[साम] (Sāman chant), the affix @deva[छ] (= @deva[ईय]) comes after a nominal stem with the sense of @deva[मतुप्] — 'that which has this' or 'that in which this is found' (per @ref[5.2.94]: @deva[तदस्यास्त्यस्मिन्निति मतुप्]). Examples: @deva[अच्छावाक् शब्दः अस्मिन्] → @deva[अच्छावाकीयं सूक्तम्] 'hymn containing @deva[अच्छावाक्] word'; @deva[मित्रावरुणीयम्]; @deva[यज्ञायज्ञीयं साम].",
                "advanced": "The @deva[छ]-affix with @deva[मतुप्]-@deva[अर्थ] (@deva[तदस्यास्ति]//@deva[तदस्मिन्नस्ति]) applies in @deva[सूक्त]//@deva[साम] designation contexts. This creates technical names for Vedic textual units based on their characteristic content: @deva[अच्छावाकीय] names a @deva[सूक्त] containing the word @deva[अच्छावाक्]. The @deva[मतुप्]-sense distinguishes this from other @deva[छ] applications."
            }
        },
        "52060": {
            "en": {
                "simple": "When expressing @deva[अध्याय] (chapter) or @deva[अनुवाक] (section), the @deva[छ] affix (with @deva[मतुप्]-sense) undergoes @deva[लुक्] (total elision). @deva[गर्दभाण्डो अध्यायः] 'chapter having @deva[गर्दभाण्ड]'.",
                "standard": "When denoting an @deva[अध्याय] (chapter/lesson) or @deva[अनुवाक] (Vedic section), the affix @deva[छ] (= @deva[ईय]) with @deva[मतुप्]-sense undergoes @deva[लुक्] (complete elision). This @[sūtra] implies (@deva[ज्ञापक]) that @deva[छ] does come after a nominal stem for @deva[अध्याय]//@deva[अनुवाक] designation. According to Patañjali, the elision is optional. Example: @deva[गर्दभाण्ड शब्दः अस्मिन् अस्ति] → @deva[गर्दभाण्डो अध्यायः] (with @deva[लुक्]) or @deva[गर्दभाण्डीयो अध्यायः] (without @deva[लुक्]).",
                "advanced": "The @deva[छ-लुक्] (elision of @deva[छ]) for @deva[अध्याय]//@deva[अनुवाक] contexts is @deva[ज्ञापक] (indicator) that @deva[छ] is indeed prescribed for these textual divisions. The @deva[लुक्]-operation per @ref[1.1.61] leaves no trace. Patañjali's @deva[विकल्प] interpretation allows both @deva[गर्दभाण्ड] (zero-derived) and @deva[गर्दभाण्डीय] (with @deva[छ]) as @deva[अध्याय]-names."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.2.46-60)")

if __name__ == "__main__":
    main()
