#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.1.31-45."""

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
        "51031": {
            "en": {
                "simple": "The affix is optionally deleted after @deva[द्विगु] compounds of @deva[बिस्त] preceded by @deva[द्वि], @deva[त्रि], or @deva[बहु]. @deva[द्विबिस्तम्] or @deva[द्विबैस्तिकम्].",
                "standard": "The @deva[आर्हीय] affix (@ref[5.1.37]-63) is optionally deleted by @deva[लुक्] after @deva[द्विगु] compounds of @deva[बिस्त] when preceded by @deva[द्वि] or @deva[त्रि] (the word @deva[च] draws in @deva[द्वित्रिपूर्वात्] from the previous sūtra). Examples: @deva[द्विबिस्तम्] or @deva[द्विबैस्तिकम्]; @deva[त्रिबिस्तम्] or @deva[त्रिबैस्तिकम्]; @deva[बहुबिस्तम्] or @deva[बहुबैस्तिकम्]. This sūtra is separated from the previous one for the sake of the subsequent sūtra.",
                "advanced": "This sūtra teaches optional @deva[लुक्] for @deva[बिस्त] in @deva[द्विगु] compounds with @deva[द्वि], @deva[त्रि], or @deva[बहु]. The @deva[च] draws @deva[द्वित्रिपूर्वात्] from @ref[5.1.30]. Examples: @deva[द्विबिस्तम्] ~ @deva[द्विबैस्तिकम्], @deva[त्रिबिस्तम्] ~ @deva[त्रिबैस्तिकम्], @deva[बहुबिस्तम्] ~ @deva[बहुबैस्तिकम्]. The separation of this sūtra from @ref[5.1.30] enables the subsequent sūtra to introduce a different affix."
            }
        },
        "51032": {
            "en": {
                "simple": "The affix @deva[ख] comes after @deva[विंशतिक] when preceded by @deva[अध्यर्ध] or a numeral in a @deva[द्विगु] compound. @deva[अध्यर्धविंशतिकीनम्], @deva[द्विविंशतिकीनम्].",
                "standard": "The affix @deva[ख] (adding @deva[ईन]) comes in the @deva[आर्हीय] senses (@ref[5.1.37]-63) after @deva[विंशतिक] when preceded by @deva[अध्यर्ध] or a numeral that occasions a @deva[द्विगु] compound. Examples: @deva[अध्यर्धविंशतिकीनम्], @deva[द्विविंशतिकीनम्], @deva[त्रिविंशतिकीनम्]. Being specifically ordained, this @deva[ख] is not deleted by @ref[5.1.28].",
                "advanced": "This sūtra teaches @deva[ख] after @deva[विंशतिक] in @deva[द्विगु] compounds with @deva[अध्यर्ध] or numerals. The @deva[ख] adds @deva[ईन]: @deva[अध्यर्धविंशतिकीनम्], @deva[द्विविंशतिकीनम्], @deva[त्रिविंशतिकीनम्]. Since @deva[ख] is specifically taught here, it is not subject to the @deva[लुक्] of @ref[5.1.28]—special rules (@deva[अपवाद]) override general ones. Note that @deva[विंशतिक] is itself derived from @deva[विंशति] + @deva[कन्]."
            }
        },
        "51033": {
            "en": {
                "simple": "The affix @deva[ईकन्] comes after @deva[खारी] when preceded by @deva[अध्यर्ध] or a numeral in a @deva[द्विगु] compound. @deva[अध्यर्धखारीकम्], @deva[द्विखारीकम्].",
                "standard": "The affix @deva[ईकन्] (adding @deva[ईक]) comes in the @deva[आर्हीय] senses (@ref[5.1.37]-63) after @deva[खारी] 'a measure of grain' when preceded by @deva[अध्यर्ध] or a numeral that occasions a @deva[द्विगु] compound. Examples: @deva[अध्यर्धखारीकम्], @deva[द्विखारीकम्]. @deva[वार्त्तिक]s: @deva[ईकन्] also comes after @deva[खारी] alone (@deva[खारीकम्]) and after @deva[काकिणी] (@deva[अध्यर्धकाकिणीकम्], @deva[द्विकाकिणीकम्], @deva[काकिणीकम्]).",
                "advanced": "This sūtra teaches @deva[ईकन्] after @deva[खारी] in @deva[द्विगु] compounds with @deva[अध्यर्ध] or numerals. Examples: @deva[अध्यर्धखारीकम्], @deva[द्विखारीकम्]. Two @deva[वार्त्तिक]s extend the rule: (1) @deva[ईकन्] also comes after @deva[खारी] alone: @deva[खारीकम्]; (2) @deva[ईकन्] comes after @deva[काकिणी] in compounds (@deva[अध्यर्धकाकिणीकम्], @deva[द्विकाकिणीकम्], @deva[त्रिकाकिणीकम्]) and alone (@deva[काकिणीकम्])."
            }
        },
        "51034": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[पण], @deva[पाद], @deva[माष], and @deva[शत] when preceded by @deva[अध्यर्ध] or a numeral in a @deva[द्विगु] compound. @deva[द्विपण्यम्], @deva[द्विपाद्यम्], @deva[द्विमाष्यम्].",
                "standard": "The affix @deva[यत्] (adding @deva[य]) comes in the @deva[आर्हीय] senses (@ref[5.1.37]-63) after @deva[पण], @deva[पाद], @deva[माष], and @deva[शत] when preceded by @deva[अध्यर्ध] or a numeral that occasions a @deva[द्विगु] compound. Examples: @deva[अध्यर्धपण्यम्], @deva[द्विपण्यम्], @deva[त्रिपण्यम्]; @deva[अध्यर्धपाद्यम्], @deva[द्विपाद्यम्], @deva[त्रिपाद्यम्]; @deva[अध्यर्धमाष्यम्], @deva[द्विमाष्यम्], @deva[त्रिमाष्यम्]; @deva[अध्यर्धशत्यम्], @deva[द्विशत्यम्], @deva[त्रिशत्यम्]. Note: @deva[पाद] here means a measure of capacity, not 'foot' of a living being, so @ref[6.3.53] (@deva[पाद] → @deva[पद]) does not apply.",
                "advanced": "This sūtra teaches @deva[यत्] after @deva[पण], @deva[पाद], @deva[माष], @deva[शत] in @deva[द्विगु] compounds with @deva[अध्यर्ध] or numerals. The forms: @deva[अध्यर्धपण्यम्], @deva[द्विपण्यम्], @deva[त्रिपण्यम्]; @deva[अध्यर्धपाद्यम्], @deva[द्विपाद्यम्], @deva[त्रिपाद्यम्]; @deva[अध्यर्धमाष्यम्], @deva[द्विमाष्यम्], @deva[त्रिमाष्यम्]; @deva[अध्यर्धशत्यम्], @deva[द्विशत्यम्], @deva[त्रिशत्यम्]. The substitution @deva[पाद] → @deva[पद] of @ref[6.3.53] applies only when @deva[पाद] means 'foot of a living being'; here @deva[पाद] denotes a measure (@deva[परिमाण]), so no substitution occurs."
            }
        },
        "51035": {
            "en": {
                "simple": "The affix @deva[यत्] optionally comes after @deva[शाण] when preceded by @deva[अध्यर्ध] or a numeral in a @deva[द्विगु] compound. @deva[अध्यर्धशाण्यम्] or @deva[अध्यर्धशाणम्].",
                "standard": "The affix @deva[यत्] comes optionally in the @deva[आर्हीय] senses (@ref[5.1.63]) after @deva[शाण] when preceded by @deva[अध्यर्ध] or a numeral that occasions a @deva[द्विगु] compound. This @deva[यत्] supersedes @deva[ठञ्], which in the alternative is deleted by @ref[5.1.28]. Examples: @deva[अध्यर्धशाण्यम्] or @deva[अध्यर्धशाणम्]; @deva[द्विशाण्यम्] or @deva[द्विशाणम्]; @deva[त्रिशाण्यम्] or @deva[त्रिशाणम्]. @deva[वार्त्तिक]: @deva[यत्] is also optional after @deva[शत]: @deva[अध्यर्धशत्यम्] or @deva[अध्यर्धशतम्], etc.",
                "advanced": "This sūtra teaches optional @deva[यत्] after @deva[शाण] in @deva[द्विगु] compounds with @deva[अध्यर्ध] or numerals. The @deva[यत्] supersedes @deva[ठञ्]; when @deva[ठञ्] applies instead, it is deleted by @ref[5.1.28]. Results: @deva[अध्यर्धशाण्यम्] (with @deva[यत्]) ~ @deva[अध्यर्धशाणम्] (with @deva[लुक्] of @deva[ठञ्]); similarly @deva[द्विशाण्यम्] ~ @deva[द्विशाणम्], @deva[त्रिशाण्यम्] ~ @deva[त्रिशाणम्]. A @deva[वार्त्तिक] extends the option to @deva[शत]: @deva[अध्यर्धशत्यम्] ~ @deva[अध्यर्धशतम्], @deva[द्विशत्यम्] ~ @deva[द्विशतम्], @deva[त्रिशत्यम्] ~ @deva[त्रिशतम्]."
            }
        },
        "51036": {
            "en": {
                "simple": "The affix @deva[अण्] also optionally comes after @deva[शाण] when preceded by @deva[द्वि] or @deva[त्रि], in addition to @deva[यत्]. @deva[द्विशाण्यम्], @deva[द्वैशाणम्], or @deva[द्विशाणम्].",
                "standard": "The affix @deva[अण्] (adding @deva[अ]) as well as @deva[यत्] comes optionally in the @deva[आर्हीय] senses (@ref[5.1.37]-63) after @deva[शाण] when preceded by @deva[द्वि] or @deva[त्रि]. The @deva[यत्] is drawn in from the previous sūtra by @deva[च]. Thus three forms are possible: @deva[द्विशाण्यम्] (with @deva[यत्]), @deva[द्वैशाणम्] (with @deva[अण्]), and @deva[द्विशाणम्] (with @deva[लुक्]); similarly @deva[त्रिशाण्यम्], @deva[त्रैशाणम्], @deva[त्रिशाणम्]. Note: The irregular @deva[वृद्धि] of the second term taught in @ref[7.3.15]-@ref[7.3.17] does not apply to @deva[शाण] (see @ref[7.3.17]); the @deva[वृद्धि] here is regular per @ref[7.2.117].",
                "advanced": "This sūtra teaches optional @deva[अण्] (in addition to @deva[यत्] from @ref[5.1.35]) after @deva[शाण] in compounds with @deva[द्वि] or @deva[त्रि]. Three forms result: (1) @deva[द्विशाण्यम्] with @deva[यत्]; (2) @deva[द्वैशाणम्] with @deva[अण्] (regular @deva[वृद्धि] per @ref[7.2.117]); (3) @deva[द्विशाणम्] with @deva[लुक्] of @deva[ठञ्]. The word @deva[शाण] is specifically excluded from the irregular @deva[वृद्धि] of numeral compounds taught in @ref[7.3.15]-@ref[7.3.17]."
            }
        },
        "51037": {
            "en": {
                "simple": "The affixes taught from @ref[5.1.18] onward have the sense 'purchased with that price' when the base is in the instrumental case. @deva[सप्तत्या क्रीतम्] → @deva[साप्ततिकम्] 'purchased for seventy'.",
                "standard": "This sūtra specifies the primary sense of the thirteen affixes taught from @ref[5.1.18] to @ref[5.1.36]: @deva[तेन क्रीतम्] 'purchased with that'. The word @deva[तेन] indicates the instrumental (@deva[तृतीया]) case in construction, and @deva[क्रीतम्] gives the sense 'purchased'. Examples: @deva[सप्तत्या क्रीतम्] = @deva[साप्ततिकम्]; @deva[नैष्किकम्], @deva[पाणिकम्], @deva[पादिकम्], @deva[माषिकम्], @deva[शत्यम्], @deva[शतिकम्], @deva[द्विकम्], @deva[त्रिकम्]. The instrumental must express 'price' (@deva[करण] sense per @ref[2.3.18]), not 'agent'—so no affix in @deva[देवदत्तेन क्रीतम्] or @deva[पाणिना क्रीतम्]. The affix doesn't come after duals or plurals like @deva[प्रस्थाभ्यां क्रीतम्] (not idiomatic), but @deva[द्वि], @deva[त्रि] (inherently dual/plural) and @deva[मुद्ग], @deva[माष] (always used in plural, as one grain can't buy anything) do take the affix.",
                "advanced": "This sūtra defines the @deva[तेन क्रीतम्] sense for the thirteen affixes of @ref[5.1.18]-@ref[5.1.36]: @deva[ठञ्], @deva[ठक्], @deva[ठन्], @deva[यत्] (twice), @deva[कन्], @deva[ड्वुन्], @deva[टिठन्], @deva[अञ्], @deva[अण्] (twice), @deva[ख], @deva[ईकन्]. The @deva[तृतीया] must have @deva[करण] force (@ref[2.3.18]), not @deva[कर्तृ] force—hence no affix for @deva[देवदत्तेन क्रीतम्]. The affix doesn't apply after dual/plural bases that idiomatically don't function as price units (@deva[प्रस्थाभ्यां क्रीतम्], @deva[प्रस्थैः क्रीतम्]). Exceptions: @deva[द्वि], @deva[त्रि] are inherently dual/plural numerals and take affixes (@deva[द्वाभ्यां क्रीतम्] = @deva[द्विकम्]); @deva[मुद्ग], @deva[माष] are always plural in commercial contexts (@deva[मुद्गैः क्रीतम्] = @deva[मौद्गिकम्])."
            }
        },
        "51038": {
            "en": {
                "simple": "The affixes also mean 'for its sake' when indicating a relationship or a portent. @deva[शतस्य निमित्तं संयोगः] → @deva[शत्यः] 'a relationship for the sake of a hundred'.",
                "standard": "The above affixes also have the sense 'for its sake' (@deva[तस्य निमित्तम्]) when the meaning is a relationship (@deva[संयोग]) or a portent (@deva[उत्पात]). The word @deva[तस्य] shows the genitive case in construction. Examples: @deva[शतस्य निमित्तं धनपतिना संयोगः] = @deva[शत्यः] 'a relationship with a rich man for the sake of getting a hundred'; @deva[शतिकः], @deva[साहस्रः]. Also @deva[शतस्य निमित्तम् उत्पातो दक्षिणाक्षिस्पन्दनम्] = @deva[शत्यम्], @deva[शतिकम्], @deva[साहस्रम्] 'the twitching of the right eye as a portent of acquiring or losing a hundred/thousand'. @deva[वार्त्तिक]s: The affixes also come after @deva[वात], @deva[पित्त], @deva[श्लेष्मन्] (the three humors) in senses of allaying or vitiating: @deva[वातिकम्], @deva[पैत्तिकम्], @deva[श्लैष्मिकम्]; also after @deva[सन्निपात]: @deva[सान्निपातिकम्].",
                "advanced": "This sūtra extends the affix senses to @deva[तस्य निमित्तम्] (genitive construction) when denoting @deva[संयोग] 'relationship' or @deva[उत्पात] 'portent'. Examples: @deva[शतस्य निमित्तं धनपतिना संयोगः] = @deva[शत्यः] 'relationship for acquiring a hundred'; @deva[शतस्य निमित्तम् उत्पातो दक्षिणाक्षिस्पन्दनम्] = @deva[शत्यम्] 'portent regarding a hundred'. Two @deva[वार्त्तिक]s: (1) affixes come after the @deva[त्रिदोष] terms @deva[वात], @deva[पित्त], @deva[श्लेष्मन्] for diseases of allaying (@deva[शमन]) or aggravation (@deva[प्रकोप]): @deva[वातिकम्] 'relating to wind-humor', @deva[पैत्तिकम्] 'bilious', @deva[श्लैष्मिकम्] 'phlegmatic'; (2) after @deva[सन्निपात] 'combination of all three humors': @deva[सान्निपातिकम्]."
            }
        },
        "51039": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[गो] and after disyllabic words (except numerals, measures, and @deva[अश्वादि] words) in the sense of 'relationship or portent for its sake'. @deva[गव्यः], @deva[धन्यम्], @deva[स्वर्ग्यम्].",
                "standard": "The affix @deva[यत्] (adding @deva[य]) is used in the sense of 'relationship or portent for its sake' after @deva[गो] and after disyllabic words, excluding numerals, measures of capacity, and @deva[अश्वादि] words. This supersedes @deva[ठञ्]. Examples: @deva[गो निमित्तं संयोग उत्पातो वा] = @deva[गव्यः] 'connection or portent for a cow'; @deva[धन्यम्], @deva[स्वर्ग्यम्], @deva[यशस्यम्], @deva[आयुष्यम्]. When the base is a numeral, measure, or @deva[अश्वादि]: @deva[पञ्चानां निमित्तम्] = @deva[पञ्चकम्] (by @ref[5.1.22]); @deva[प्रास्थिकम्], @deva[खारीकम्] (by @ref[5.1.18]-19); @deva[आश्विकः]. @deva[वार्त्तिक]: @deva[ब्रह्मवर्चस] should be included: @deva[ब्रह्मवर्चस्यम्] 'relationship with a teacher for acquiring spiritual lustre'. The @deva[अश्वादि] class contains 8 words.",
                "advanced": "This sūtra teaches @deva[यत्] after @deva[गो] and disyllabic words in the @ref[5.1.38] senses (@deva[संयोग]/उत्पात निमित्त]). Exclusions: @deva[संख्या] (numerals), @deva[परिमाण] (measures), @deva[अश्वादि] (8-word class: @deva[अश्व], @deva[अश्मन्], @deva[गण], @deva[ऊर्णा], @deva[उमा], @deva[गङ्गा], @deva[वर्षा], @deva[वसु]). Examples: @deva[गव्यः], @deva[धन्यम्], @deva[स्वर्ग्यम्], @deva[यशस्यम्], @deva[आयुष्यम्]. Excluded words take their respective affixes: @deva[पञ्चकम्] (by @ref[5.1.22]), @deva[प्रास्थिकम्] (by @ref[5.1.19]), @deva[आश्विकः] (by @ref[5.1.18]). A @deva[वार्त्तिक] adds @deva[ब्रह्मवर्चस]: @deva[ब्रह्मवर्चसस्य निमित्तं गुरुणा संयोगः] = @deva[ब्रह्मवर्चस्यम्] 'connection with a teacher for acquiring @deva[ब्रह्मवर्चस्]'."
            }
        },
        "51040": {
            "en": {
                "simple": "The affix @deva[छ] also comes after @deva[पुत्र] 'son', in addition to @deva[यत्], in the sense of 'relationship or portent for its sake'. @deva[पुत्रीयम्] or @deva[पुत्र्यम्].",
                "standard": "The affix @deva[छ] (adding @deva[ईय]) also comes, as well as @deva[यत्] (adding @deva[य]), after @deva[पुत्र] 'son' in the sense of 'relationship or portent for its sake'. Since @deva[पुत्र] is disyllabic, it would take @deva[यत्] by @ref[5.1.39]; this sūtra ordains @deva[छ] as an additional option. Example: @deva[पुत्रस्य निमित्तं संयोग उत्पातो वा] = @deva[पुत्रीयम्] (with @deva[छ]) or @deva[पुत्र्यम्] (with @deva[यत्]).",
                "advanced": "This sūtra adds optional @deva[छ] to the @deva[यत्] already applicable to @deva[पुत्र] (a disyllabic word per @ref[5.1.39]). Both affixes express the @ref[5.1.38] sense (@deva[संयोग]/उत्पात निमित्त]). Results: @deva[पुत्रस्य निमित्तं संयोग उत्पातो वा] = @deva[पुत्रीयम्] (with @deva[छ]) ~ @deva[पुत्र्यम्] (with @deva[यत्])."
            }
        },
        "51041": {
            "en": {
                "simple": "The affixes @deva[अण्] and @deva[अञ्] come after @deva[सर्वभूमि] and @deva[पृथ्वी] respectively in the sense of 'relationship or portent for its sake'. @deva[सार्वभौमः], @deva[पार्थिवः].",
                "standard": "The affix @deva[अण्] (adding @deva[अ]) comes after @deva[सर्वभूमि] 'the whole earth', and @deva[अञ्] (adding @deva[अ]) comes after @deva[पृथ्वी] 'earth', in the sense of 'relationship or portent for its sake'. These supersede @deva[ठक्]. Examples: @deva[सर्वभूमेर्निमित्तं संयोग उत्पातो वा] = @deva[सार्वभौमः]; @deva[पार्थिवः]. In @deva[सार्वभौमः], @deva[वृद्धि] of both compound members occurs per @ref[7.3.20].",
                "advanced": "This sūtra teaches @deva[अण्] after @deva[सर्वभूमि] and @deva[अञ्] after @deva[पृथ्वी] in the @ref[5.1.38] senses. The affixes supersede @deva[ठक्]. Derivations: @deva[सर्वभूमि] + @deva[अण्] → @deva[सार्वभौमः] (with @deva[वृद्धि] of both members per @ref[7.3.20]); @deva[पृथ्वी] + @deva[अञ्] → @deva[पार्थिवः]. The double @deva[वृद्धि] in @deva[सार्वभौमः] (@deva[सर्व] → @deva[सार्व], @deva[भूमि] → @deva[भौम]) is a special feature of compounds with @deva[अण्]."
            }
        },
        "51042": {
            "en": {
                "simple": "The same affixes @deva[अण्] and @deva[अञ्] come after @deva[सर्वभूमि] and @deva[पृथ्वी] in the sense of 'lord thereof'. @deva[सर्वभूमेरीश्वरः] → @deva[सार्वभौमः] 'lord of the whole earth'.",
                "standard": "The same affixes @deva[अण्] and @deva[अञ्] come after @deva[सर्वभूमि] and @deva[पृथ्वी] respectively in the sense of 'lord thereof' (@deva[तस्य ईश्वरः]). Examples: @deva[सर्वभूमेरीश्वरः] = @deva[सार्वभौमः] 'the lord of the whole earth'; @deva[पार्थिवः] 'the lord of the earth'. The word @deva[तस्य] (showing genitive construction) is repeated in this sūtra, though its @deva[अनुवृत्ति] was running from @ref[5.1.38], to indicate that the senses of @ref[5.1.38] (@deva[संयोग], @deva[उत्पात]) do not extend further. Had @deva[तस्य] not been repeated, @deva[ईश्वरः] would have been an attribute of @deva[निमित्तः] like @deva[संयोग] and @deva[उत्पात].",
                "advanced": "This sūtra reuses @deva[अण्] (after @deva[सर्वभूमि]) and @deva[अञ्] (after @deva[पृथ्वी]) with a new sense: @deva[तस्य ईश्वरः] 'lord thereof'. The repetition of @deva[तस्य] (genitive marker) is significant: it signals that the @deva[अनुवृत्ति] of @deva[निमित्त], @deva[संयोग], @deva[उत्पात] from @ref[5.1.38] does not carry forward. Without this repetition, @deva[ईश्वरः] would have been parsed as an attribute of @deva[निमित्त], not as a separate sense. Examples: @deva[सर्वभूमेरीश्वरः] = @deva[सार्वभौमः]; @deva[पृथ्व्या ईश्वरः] = @deva[पार्थिवः]."
            }
        },
        "51043": {
            "en": {
                "simple": "The same affixes @deva[अण्] and @deva[अञ्] come after @deva[सर्वभूमि] and @deva[पृथ्वी] (in the locative) in the sense of 'known therein'. @deva[सर्वभूमौ विदितः] → @deva[सार्वभौमः] 'known in the whole world'.",
                "standard": "The same affixes @deva[अण्] and @deva[अञ्] come after @deva[सर्वभूमि] and @deva[पृथ्वी] respectively, when in the locative (@deva[सप्तमी]) case in construction, with the sense of 'known therein' (@deva[तत्र विदितः]). The word @deva[विदित] means 'known, published'. Examples: @deva[सर्वभूमौ विदितः] = @deva[सार्वभौमः] 'known in the whole world'; @deva[पार्थिवः] 'known on earth'.",
                "advanced": "This sūtra teaches another sense for @deva[अण्] (after @deva[सर्वभूमि]) and @deva[अञ्] (after @deva[पृथ्वी]): @deva[तस्मिन् विदितः] 'known therein' with @deva[सप्तमी] (locative) construction. The word @deva[विदित] means 'known, published, famous'. Examples: @deva[सर्वभूमौ विदितः] = @deva[सार्वभौमः] 'one who is known throughout the whole earth'; @deva[पृथिव्यां विदितः] = @deva[पार्थिवः] 'known on earth'."
            }
        },
        "51044": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after @deva[लोक] and @deva[सर्वलोक] (in the locative) in the sense of 'known therein'. @deva[लोके विदितः] → @deva[लौकिकः] 'known in the world'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes in the sense of 'known therein' after the words @deva[लोक] 'world' and @deva[सर्वलोक] 'the whole world', when in the locative (@deva[सप्तमी]) case in construction. Examples: @deva[लोके विदितः] = @deva[लौकिकः] 'known in the world, worldly'; @deva[सार्वलौकिकः] 'known throughout all worlds'. Irregular @deva[वृद्धि] of both compound members occurs per @ref[7.3.20].",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[लोक] and @deva[सर्वलोक] in @deva[सप्तमी] construction with the @deva[विदित] sense. Examples: @deva[लोके विदितः] = @deva[लौकिकः] 'worldly, common'; @deva[सर्वलोके विदितः] = @deva[सार्वलौकिकः] 'universally known'. For @deva[सार्वलौकिकः], irregular @deva[वृद्धि] of both compound members occurs per @ref[7.3.20] (@deva[सर्व] → @deva[सार्व], @deva[लोक] → @deva[लौक])."
            }
        },
        "51045": {
            "en": {
                "simple": "The affixes (@ref[5.1.18] etc.) come after a word in the genitive case in the sense of 'sown with that much'. @deva[प्रस्थस्य वापः क्षेत्रम्] → @deva[प्रास्थिकम्] 'a field sown with a @deva[प्रस्थ] of grain'.",
                "standard": "The affixes mentioned from @ref[5.1.18] onward come after a word in the genitive (@deva[षष्ठी]) case in construction, in the sense of 'sown with that quantity' (@deva[तस्य वापः]). The word @deva[वाप] means 'sown therein', referring to a field. Examples: @deva[प्रस्थस्य वापः क्षेत्रम्] = @deva[प्रास्थिकम्] 'a field sown with a @deva[प्रस्थ] of grain'; @deva[द्रौणिकम्] 'sown with a @deva[द्रोण]'; @deva[खारीकम्] 'sown with a @deva[खारी]'.",
                "advanced": "This sūtra teaches the @deva[वाप] sense for the @ref[5.1.18] affixes: @deva[तस्य वापः] 'sown with that measure'. The @deva[षष्ठी] (genitive) construction indicates the quantity of seed. The word @deva[वाप] (from √@deva[वप्] 'to sow') denotes 'field as characterized by sowing'. Examples: @deva[प्रस्थस्य वापः क्षेत्रम्] = @deva[प्रास्थिकम्] 'field sown with a @deva[प्रस्थ]-measure of grain'; @deva[द्रोणस्य वापः] = @deva[द्रौणिकम्]; @deva[खार्याः वापः] = @deva[खारीकम्]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.1.31-45)")

if __name__ == "__main__":
    main()
