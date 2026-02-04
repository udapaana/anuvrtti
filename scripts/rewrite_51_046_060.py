#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.1.46-60."""

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
        "51046": {
            "en": {
                "simple": "The affix @deva[ष्ठन्] comes after @deva[पात्र] 'vessel/measure' in the sense of 'sown with that much'. @deva[पात्रस्य वापः] → @deva[पात्रिकं क्षेत्रम्] 'a field sown with a @deva[पात्र]-measure of grain'.",
                "standard": "The affix @deva[ष्ठन्] (adding @deva[इक]) comes in the sense of 'sown with that quantity' after @deva[पात्र] 'vessel, measure of capacity'. This supersedes @deva[ठञ्]. The @deva[न्] of @deva[ष्ठन्] governs accent per @ref[6.1.197]; the @deva[ष्] triggers @deva[ङीष्] for the feminine per @ref[4.1.41]. Example: @deva[पात्रस्य वापः] = @deva[पात्रिकं क्षेत्रम्] 'a field sown with a @deva[पात्र]-measure'; feminine @deva[पात्रिकी क्षेत्रभक्तिः] 'a plot sown with a @deva[पात्र]'.",
                "advanced": "This sūtra teaches @deva[ष्ठन्] after @deva[पात्र] in the @deva[वाप] sense. The affix supersedes @deva[ठञ्]. The @deva[अनुबन्ध]s: @deva[न्] governs accent (@ref[6.1.197]); @deva[ष्] triggers feminine @deva[ङीष्] (@ref[4.1.41]). Derivation: @deva[पात्रस्य वापः क्षेत्रम्] = @deva[पात्रिकं क्षेत्रम्]; feminine @deva[पात्रिकी क्षेत्रभक्तिः]."
            }
        },
        "51047": {
            "en": {
                "simple": "The affixes also mean 'interest, rent, profit, tax, or bribe given in/for that'. @deva[पञ्च अस्मिन् वृद्धिः दीयते] → @deva[पञ्चकः] 'that in which 5% is given as interest'.",
                "standard": "The above affixes also have the sense 'interest (@deva[वृद्धि]), rent (@deva[आय]), profit (@deva[लाभ]), tax (@deva[शुल्क]), or bribe (@deva[उपदा]) given in/for that'. The base is in the nominative (@deva[तद्]) and the affix expresses a locative sense (@deva[अस्मिन्]). @deva[वृद्धि] = interest paid to a creditor; @deva[आय] = landlord's share; @deva[लाभ] = profit from sales; @deva[शुल्क] = king's tax; @deva[उपदा] = bribe/present. Example: @deva[पञ्च अस्मिन् वृद्धिः आयः लाभः शुल्कः उपदा वा दीयते] = @deva[पञ्चकः] 'a transaction in which 5% is given as interest, rent, etc.' Similarly @deva[सप्तकः], @deva[शत्यः], @deva[शतिकः], @deva[साहस्रः]. @deva[वार्त्तिक]: The dative sense also applies—@deva[पञ्च अस्मै दीयते] = @deva[पञ्चको देवदत्तः] '@deva[देवदत्त] to whom 5% is given'.",
                "advanced": "This sūtra extends the affixes to five financial senses: @deva[वृद्धि] (interest on principal), @deva[आय] (rent/revenue share), @deva[लाभ] (trading profit), @deva[शुल्क] (royal tax), @deva[उपदा] (bribe/gift). The @deva[प्रथमा] (nominative) base takes an affix with @deva[सप्तमी] (locative) sense. Example: @deva[पञ्च अस्मिन् वृद्धिर्वा आयो वा लाभो वा शुल्को वा उपदा वा दीयते] = @deva[पञ्चकः]. A @deva[वार्त्तिक] adds @deva[चतुर्थी] (dative) sense: @deva[पञ्च अस्मै दीयते] = @deva[पञ्चको देवदत्तः]. This may be explained by the locative sometimes having dative force, as in @deva[समम् अब्राह्मणे दानम्]."
            }
        },
        "51048": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after ordinal numbers and @deva[अर्ध] 'half' in the sense of 'interest, rent, profit, tax, or bribe given therein'. @deva[द्वितीयिकः], @deva[तृतीयिकः], @deva[अर्धिकः].",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes in the same sense of 'interest, rent, profit, tax, or bribe given therein' after words denoting ordinals (@deva[पूरण]) and after @deva[अर्ध] 'half'. This supersedes @deva[ठक्] and @deva[टिठन्]. Examples: @deva[द्वितीयो वृद्ध्यादिः अस्मिन् दीयते] = @deva[द्वितीयिकः] 'that in which a second (portion) is given as interest etc.'; @deva[तृतीयिकः], @deva[पञ्चमिकः], @deva[सप्तमिकः], @deva[अर्धिकः]. The word @deva[अर्ध] here technically means @deva[रूपकार्ध] 'half a rupee'.",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[पूरण] (ordinal) words and @deva[अर्ध] in the @ref[5.1.47] senses. The @deva[ठञ्] supersedes @deva[ठक्] and @deva[टिठन्]. Examples: @deva[द्वितीयिकः], @deva[तृतीयिकः], @deva[पञ्चमिकः], @deva[सप्तमिकः], @deva[अर्धिकः]. The word @deva[अर्ध] is technically @deva[रूपकार्ध] 'half a @deva[रूपक] (monetary unit)'."
            }
        },
        "51049": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[भाग] 'share' in the sense of 'interest, rent, etc. given therein'. @deva[भाग्यं शतम्] or @deva[भागिकं शतम्] 'a hundred in which a share is given'.",
                "standard": "The affix @deva[यत्] (adding @deva[य]) comes after @deva[भाग] 'share, portion' in the sense of 'interest, rent, profit, tax, or bribe given therein'. The word @deva[च] in the sūtra also draws in @deva[ठन्]. These supersede @deva[ठञ्]. Examples: @deva[भागो वृद्ध्यादिः अस्मिन् दीयते] = @deva[भाग्यं शतम्] or @deva[भागिकं शतम्] 'a hundred in which a share-portion is given as interest etc.'; @deva[भाग्या विंशतिः] or @deva[भागिका विंशतिः]. The word @deva[भाग] also denotes @deva[रूपकार्ध] 'half a rupee'.",
                "advanced": "This sūtra teaches @deva[यत्] (and @deva[ठन्] via @deva[च]) after @deva[भाग] in the @ref[5.1.47] senses. These supersede @deva[ठञ्]. Examples: @deva[भाग्यं शतम्] (with @deva[यत्]) ~ @deva[भागिकं शतम्] (with @deva[ठन्]); @deva[भाग्या विंशतिः] ~ @deva[भागिका विंशतिः]. Like @deva[अर्ध], @deva[भाग] technically denotes @deva[रूपकार्ध]."
            }
        },
        "51050": {
            "en": {
                "simple": "The affixes come after @deva[भार] 'load' when preceded by @deva[वंशादि] words, in the sense of 'who carries, conveys, or brings that'. @deva[वंशभारं हरति] → @deva[वांशभारिकः] 'one who carries a load of bamboo'.",
                "standard": "The above affixes come after @deva[भार] 'load' when preceded by @deva[वंशादि] words, with the base in accusative case, meaning 'who carries away (@deva[हरति]), conveys (@deva[वहति]), or brings (@deva[आवहति]) that'. Examples: @deva[वंशभारं हरति वहति आवहति वा] = @deva[वांशभारिकः] 'one who carries a load of bamboo'; @deva[कौटजभारिकः] 'carrier of @deva[कुटज]-loads'; @deva[बाल्वजभारिकः]. Alternative interpretation: @deva[भाराद् वंशादिभ्यः] means @deva[भारभूतेभ्यो वंशादिभ्यः] 'after @deva[वंशादि] words when denoting a load'—thus @deva[भारभूतान् वंशान् हरति] = @deva[वांशिकः]. The @deva[वंशादि] class has 11 words: @deva[वंश], @deva[कुटज], @deva[बल्वज], @deva[मूल], @deva[स्थूणा], @deva[अक्ष], @deva[अश्मन्], @deva[अश्व], @deva[लक्षण], @deva[इक्षु], @deva[खट्वा].",
                "advanced": "This sūtra teaches the affixes after @deva[भार] preceded by @deva[वंशादि] words in accusative (@deva[द्वितीया]) construction, expressing 'carrying' (@deva[हरति] = carry away/steal, @deva[वहति] = carry on back/head, @deva[आवहति] = bring/produce). Examples: @deva[वांशभारिकः], @deva[कौटजभारिकः], @deva[बाल्वजभारिकः]. An alternative reading takes @deva[भारात्] as @deva[भारभूतेभ्यः] 'when @deva[वंशादि] words denote a load': @deva[भारभूतान् वंशान् हरति] = @deva[वांशिकः]. Both interpretations are traditional. The @deva[वंशादि] gaṇa contains 11 words. Restrictions: no affix for @deva[वंशं हरति] (not preceded by @deva[भार]) or @deva[भारभूतान् व्रीहीन् वहति] (not in @deva[वंशादि])."
            }
        },
        "51051": {
            "en": {
                "simple": "The affixes @deva[ठन्] and @deva[कन्] come after @deva[वसन] 'cloth' and @deva[द्रव्य] 'goods' respectively in the sense of 'who carries that'. @deva[वस्नं हरति] → @deva[वस्निकः]; @deva[द्रव्यकः].",
                "standard": "The affix @deva[ठन्] (adding @deva[इक]) comes after @deva[वसन] 'cloth', and @deva[कन्] (adding @deva[क]) comes after @deva[द्रव्य] 'goods, material', when in the accusative case, with the sense of 'who carries or conveys that'. Examples: @deva[वस्नं हरति वहति वा] = @deva[वस्निकः] 'cloth-carrier'; @deva[द्रव्यकः] 'goods-carrier'.",
                "advanced": "This sūtra specifies @deva[ठन्] for @deva[वसन] and @deva[कन्] for @deva[द्रव्य] in the @ref[5.1.50] sense (carrying). Derivations: @deva[वसन] + @deva[ठन्] → @deva[वस्निकः]; @deva[द्रव्य] + @deva[कन्] → @deva[द्रव्यकः]. The @deva[द्वितीया] (accusative) construction applies."
            }
        },
        "51052": {
            "en": {
                "simple": "The affixes also mean 'capable of holding that, takes away that, or cooks that'. @deva[प्रस्थं संभवति] → @deva[प्रास्थिकः] 'a vessel capable of holding a @deva[प्रस्थ]'.",
                "standard": "The above affixes also have the sense of 'what is capable of holding that (@deva[संभव]), takes away/contains that (@deva[अवहार]), or cooks that (@deva[पचति])'. The base is in the accusative (@deva[तद्]). @deva[संभव] = capacity to hold an exact quantity; @deva[अवहार] = taking away/containing. Examples: @deva[प्रस्थं संभवति] = @deva[प्रास्थिकः] 'a vessel holding a @deva[प्रस्थ]'; @deva[प्रस्थम् अवहरति] or @deva[पचति] = @deva[प्रास्थिकः] 'a vessel or person that takes/cooks a @deva[प्रस्थ]'; @deva[क्रौडविकः], @deva[खारीकः]. The word @deva[संभव] doesn't govern @deva[पचति]: @deva[प्रस्थं पचति ब्राह्मणी] = @deva[प्रास्थिकी] 'a Brāhmaṇa woman who cooks a @deva[प्रस्थ]'. @deva[वार्त्तिक]: @deva[अण्] also comes after @deva[द्रोण] in the cooking sense: @deva[द्रोणं पचति ब्राह्मणी] = @deva[द्रौणी] or @deva[द्रौणिकी].",
                "advanced": "This sūtra extends the affixes to three senses: @deva[संभव] (capacity), @deva[अवहार] (containing/removing), @deva[पाक] (cooking). The @deva[द्वितीया] (accusative) construction applies. Examples: @deva[प्रस्थं संभवति] = @deva[प्रास्थिकः] (vessel); @deva[प्रस्थम् अवहरति पचति वा] = @deva[प्रास्थिकः]; @deva[क्रौडविकः], @deva[खारीकः]. The @deva[संभव] sense doesn't extend to @deva[पचति]—so @deva[प्रस्थं पचति ब्राह्मणी] = @deva[प्रास्थिकी] 'Brāhmaṇa woman who cooks a @deva[प्रस्थ]'. A @deva[वार्त्तिक] adds @deva[अण्] after @deva[द्रोण] for cooking: @deva[द्रोणं पचति ब्राह्मणी] = @deva[द्रौणी] ~ @deva[द्रौणिकी]."
            }
        },
        "51053": {
            "en": {
                "simple": "The affix @deva[ख] optionally comes after @deva[आढक], @deva[आचित], and @deva[पात्र] in the sense of 'capable of holding etc.' @deva[आढकीना] or @deva[आढकिकी] 'holding an @deva[आढक]'.",
                "standard": "The affix @deva[ख] (adding @deva[ईन]) may optionally come in the sense of 'capable of holding, taking away, or cooking' after @deva[आढक] (a measure), @deva[आचित] (a measure), and @deva[पात्र] 'vessel'. This @deva[ख] supersedes @deva[ठञ्], which comes in the alternative. Examples: @deva[आढकं संभवति अवहरति पचति वा] = @deva[आढकीना] (with @deva[ख]) or @deva[आढकिकी] (with @deva[ठञ्]); @deva[आचितीना] or @deva[आचितिकी]; @deva[पात्रीणा] or @deva[पात्रिकी].",
                "advanced": "This sūtra teaches optional @deva[ख] after @deva[आढक], @deva[आचित], @deva[पात्र] in the @ref[5.1.52] senses. The option is with @deva[ठञ्]. Results: @deva[आढकीना] ~ @deva[आढकिकी]; @deva[आचितीना] ~ @deva[आचितिकी]; @deva[पात्रीणा] ~ @deva[पात्रिकी]. The @deva[ख] adds @deva[ईन]."
            }
        },
        "51054": {
            "en": {
                "simple": "The affixes @deva[ष्ठन्] and @deva[ख] optionally come after @deva[आढक], @deva[आचित], and @deva[पात्र] as final members of @deva[द्विगु] compounds in the sense of 'capable of holding etc.' @deva[द्व्याढकिकी], @deva[द्व्याढकीना], or @deva[द्व्याढकी].",
                "standard": "The affix @deva[ष्ठन्] (adding @deva[इक]) as well as @deva[ख] (adding @deva[ईन], via @deva[च]) may optionally come after @deva[आढक], @deva[आचित], and @deva[पात्र] when final in a @deva[द्विगु] compound, in the sense of 'capable of holding etc.' Being specifically ordained, these are not deleted by @ref[5.1.28]; but the general @deva[ठञ्] in the alternative is deleted. The @deva[न्] of @deva[ष्ठन्] governs accent (@ref[6.1.197]); @deva[ष्] triggers @deva[ङीष्]. Three forms result: @deva[द्व्याढकिकी] (with @deva[ष्ठन्]), @deva[द्व्याढकीना] (with @deva[ख]), @deva[द्व्याढकी] (with @deva[ठञ्] + @deva[लुक्]). Similarly @deva[द्व्याचितिकी], @deva[द्व्याचितीना], @deva[द्व्याचिता] (no @deva[ङीप्] per @ref[4.1.22]); @deva[द्विपात्रिकी], @deva[द्विपात्रीणा], @deva[द्विपात्री].",
                "advanced": "This sūtra teaches @deva[ष्ठन्] and @deva[ख] (via @deva[च]) after @deva[आढक], @deva[आचित], @deva[पात्र] in @deva[द्विगु] compounds with the @ref[5.1.52] senses. These specific affixes are not subject to @deva[लुक्] of @ref[5.1.28]; the general @deva[ठञ्] is deleted. Three forms result: (1) @deva[ष्ठन्]: @deva[द्व्याढकिकी], @deva[द्व्याचितिकी], @deva[द्विपात्रिकी]; (2) @deva[ख]: @deva[द्व्याढकीना], @deva[द्व्याचितीना], @deva[द्विपात्रीणा]; (3) @deva[ठञ्] + @deva[लुक्]: @deva[द्व्याढकी], @deva[द्व्याचिता], @deva[द्विपात्री]. For @deva[द्व्याचिता], @deva[ङीप्] is blocked by @ref[4.1.22]."
            }
        },
        "51055": {
            "en": {
                "simple": "After @deva[कुलिज] in a @deva[द्विगु] compound, the affix is optionally deleted or @deva[ख] is added in the sense of 'capable of holding etc.' Four forms: @deva[द्विकुलिजिकी], @deva[द्विकुलिजीना], @deva[द्विकुलिजा], @deva[द्वैकुलिजिकी].",
                "standard": "After @deva[कुलिज] as final in a @deva[द्विगु] compound, there is optional deletion of the affix or addition of @deva[ख] (adding @deva[ईन]) in the sense of 'capable of holding etc.' By @deva[च], @deva[ष्ठन्] also applies. The deletion being optional, @deva[ठञ्] (@ref[5.1.18]) may optionally remain (not deleted by @ref[5.1.28]). Four forms result: @deva[द्विकुलिजिकी] (with @deva[ष्ठन्]), @deva[द्विकुलिजीना] (with @deva[ख]), @deva[द्विकुलिजा] (with @deva[ठञ्] + @deva[लुक्]), @deva[द्वैकुलिजिकी] (with @deva[ठञ्] retained). In @deva[द्वैकुलिजिकी], the expected @deva[वृद्धि] of the second term per @ref[7.3.17] doesn't occur—@deva[कुलिज] should be included with @deva[संज्ञा] and @deva[शाण] in the exception of @ref[7.3.17].",
                "advanced": "This sūtra teaches optional @deva[लुक्] or @deva[ख] after @deva[कुलिज] in @deva[द्विगु] compounds with @ref[5.1.52] senses. By @deva[च], @deva[ष्ठन्] also applies. Four forms: (1) @deva[ष्ठन्]: @deva[द्विकुलिजिकी]; (2) @deva[ख]: @deva[द्विकुलिजीना]; (3) @deva[ठञ्] + @deva[लुक्]: @deva[द्विकुलिजा]; (4) @deva[ठञ्] without @deva[लुक्]: @deva[द्वैकुलिजिकी]. In the fourth form, @deva[वृद्धि] of the second term doesn't occur despite @ref[7.3.17]—explained by including @deva[कुलिज] in the @ref[7.3.17] exception along with @deva[संज्ञा] and @deva[शाण]."
            }
        },
        "51056": {
            "en": {
                "simple": "The affixes (@ref[5.1.18] etc.) also mean 'this is his share, price, or pay'. @deva[पञ्च अंशः अस्य] → @deva[पञ्चकः] 'one whose share/price/pay is five'.",
                "standard": "The affixes taught from @ref[5.1.18] onward also have the sense 'this is his share (@deva[अंश]), price (@deva[वस्न]), or wages (@deva[भृति])'. The word @deva[सः] indicates the nominative case in construction. @deva[अंश] = share/portion; @deva[वस्न] = price; @deva[भृति] = wages. Example: @deva[पञ्च अंशो वस्नो वा भृतिर्वास्य] = @deva[पञ्चकः] 'one whose share, price, or wages is five'. Similarly @deva[सप्तकः], @deva[साहस्रः].",
                "advanced": "This sūtra teaches the @deva[अंश]/वस्न/भृति] sense for the @ref[5.1.18] affixes: @deva[सः अंशो वस्नो भृतिर्वास्य] 'this is his share, price, or wages'. The @deva[प्रथमा] (nominative) @deva[सः] indicates the base's case. Examples: @deva[पञ्च अंशो वस्नो वा भृतिर्वास्य] = @deva[पञ्चकः]; @deva[सप्तकः], @deva[साहस्रः]."
            }
        },
        "51057": {
            "en": {
                "simple": "The affixes (@ref[5.1.18] etc.) also mean 'this is its measure'. @deva[प्रस्थः परिमाणमस्य] → @deva[प्रास्थिको राशिः] 'a heap whose measure is a @deva[प्रस्थ]'.",
                "standard": "The affixes taught from @ref[5.1.18] onward also have the sense 'this is its measure' (@deva[तदस्य परिमाणम्]). The word @deva[तद्] shows the nominative case. Examples: @deva[प्रस्थः परिमाणमस्य] = @deva[प्रास्थिको राशिः] 'a heap whose mass is a @deva[प्रस्थ]'; @deva[खारीकः], @deva[शत्यः], @deva[शतिकः], @deva[साहस्रः], @deva[द्रौणिकः], @deva[कौडविकः], @deva[वार्षशतिकः], @deva[वार्षसहस्रिकः]. Also @deva[षष्टिः जीवितपरिमाणमस्य] = @deva[षाष्ठिकः] 'one whose lifespan is sixty'; @deva[द्विसाप्ततिकः]. The repetition of @deva[तदस्य] (though @deva[अनुवृत्ति] from @ref[5.1.56] could supply it) indicates that affixes are newly ordained here, so the @deva[लुक्] of @ref[5.1.28] doesn't apply: @deva[द्वे षष्टी परिमाणमस्य] = @deva[द्विषाष्ठिकः] (not @deva[द्विषष्टिः]).",
                "advanced": "This sūtra teaches the @deva[परिमाण] sense: @deva[तदस्य परिमाणम्] 'this is its measure'. Examples: @deva[प्रास्थिको राशिः], @deva[खारीकः], @deva[द्रौणिकः], @deva[षाष्ठिकः], @deva[द्विसाप्ततिकः]. The repetition of @deva[तदस्य] (despite @deva[अनुवृत्ति] from @ref[5.1.56]) signals that the affixes are freshly ordained, blocking @deva[लुक्] of @ref[5.1.28]. Thus @deva[द्वे षष्टी परिमाणमस्य] = @deva[द्विषाष्ठिकः], not *@deva[द्विषष्टिः]."
            }
        },
        "51058": {
            "en": {
                "simple": "The affixes come after numerals in the sense of 'this is its measure' when the word means a name, multitude, book, or mode of study. @deva[पञ्चकाः शकुनयः] 'the Five birds'; @deva[अष्टकं पाणिनीयम्] 'Pāṇini's Eight (chapters)'.",
                "standard": "The affixes (@ref[5.1.18] etc.) come after numerals in the sense of 'this is its measure' when the derivative means a name (@deva[संज्ञा]), multitude (@deva[संघ]), book (@deva[सूत्र]), or fixed mode of study (@deva[अध्ययन]). @deva[संज्ञा]: @deva[पञ्चकाः शकुनयः] 'the Five birds' = @deva[पञ्च], @deva[त्रिकाः शालङ्कायनाः] 'the Three @deva[शालङ्कायन]s'. @deva[संघ] (multitude of living beings): @deva[पञ्चकः संघः] 'a group of five', @deva[अष्टकः]. @deva[सूत्र] (book): @deva[अष्टावध्यायाः परिमाणमस्य सूत्रस्य] = @deva[अष्टकं पाणिनीयम्] 'the @deva[अष्टक] of Pāṇini (eight chapters)', @deva[त्रिकं काशकृत्स्नम्]. @deva[अध्ययन] (mode of study): @deva[पञ्चकोऽधीतः] 'studied five times/in five ways'. @deva[वार्त्तिक]s: @deva[ड] after @deva[पञ्चदश] etc. when meaning a @deva[स्तोम]: @deva[पञ्चदशः स्तोमः], @deva[सप्तदशः स्तोमः] (the @deva[ड्] causes @deva[टि]-elision per @ref[6.4.143]; @deva[न्] elision per @ref[6.4.141]). In Vedic, @deva[डिनि] after @deva[शत्]/शन्]-finals: @deva[पञ्चदशिनोर्द्धमासाः], @deva[त्रिंशिनो मासाः]; also after @deva[विंशति]: @deva[विंशिनोऽङ्गिरसः].",
                "advanced": "This sūtra teaches the @deva[परिमाण] sense for numerals when the derivative denotes: (1) @deva[संज्ञा] (name)—affix doesn't change meaning: @deva[पञ्चकाः] = @deva[पञ्च]; (2) @deva[संघ] (multitude of beings): @deva[पञ्चकः संघः]; (3) @deva[सूत्र] (book): @deva[अष्टकं पाणिनीयम्] 'Pāṇini's work of eight @deva[अध्याय]s'; (4) @deva[अध्ययन] (study mode): @deva[पञ्चकोऽधीतः] 'studied five-fold'. Note: @deva[संघ] applies only to living beings, not to @deva[अध्याय] collections. Three @deva[वार्त्तिक]s: (1) @deva[ड] after @deva[पञ्चदशादि] for @deva[स्तोम] (@deva[पञ्चदशः स्तोमः]; @deva[ड्] triggers @ref[6.4.143] @deva[टि]-elision, @ref[6.4.141] @deva[न्]-elision); (2) Vedic @deva[डिनि] after @deva[शत्]/शन्]-finals (@deva[पञ्चदशिनोर्द्धमासाः]); (3) Vedic @deva[डिनि] after @deva[विंशति] (@deva[विंशिनोऽङ्गिरसः])."
            }
        },
        "51059": {
            "en": {
                "simple": "The following words are formed anomalously: @deva[पङ्क्ति] 'a verse of five syllables', @deva[विंशति] 'twenty', @deva[त्रिंशत्] 'thirty', @deva[चत्वारिंशत्] 'forty', @deva[पञ्चाशत्] 'fifty', @deva[षष्टि] 'sixty', @deva[सप्तति] 'seventy', @deva[अशीति] 'eighty', @deva[नवति] 'ninety', @deva[शतम्] 'hundred'.",
                "standard": "These ten words are formed anomalously in the sense of 'this is its measure' (@deva[तदस्य परिमाणम्]): (1) @deva[पङ्क्ति]: @deva[पञ्च] + @deva[ति] (final elided) = 'a verse whose measure is five syllables'; (2) @deva[विंशति]: @deva[विन्] (replacing @deva[द्वयो दशतः] 'two tens') + @deva[शतिच्] = @deva[द्वौ दशतौ परिमाणमस्य संघस्य]; (3) @deva[त्रिंशत्]: @deva[त्रिन्] + @deva[शत्] = 'three tens'; (4-5) @deva[चत्वारिंशत्], @deva[पञ्चाशत्]: @deva[चत्वारिम्]/पञ्च] + @deva[शत्]; (6-9) @deva[षष्टि], @deva[सप्तति], @deva[अशीति], @deva[नवति]: similarly formed; (10) @deva[शतम्] 'hundred'. The word @deva[पङ्क्ति] also means 'a row' (@deva[ब्राह्मणपङ्क्तिः] 'a row of Brāhmaṇas', @deva[पिपीलिकापङ्क्तिः] 'a row of ants')—this usage has no connection to its etymology.",
                "advanced": "This sūtra lists ten @deva[निपातन] (anomalous) formations with @deva[परिमाण] sense: (1) @deva[पङ्क्ति] from @deva[पञ्च] + @deva[ति] (with @deva[च]-elision) 'a half-quarter of 5 syllables'; (2) @deva[विंशति] from @deva[विन्] (substitute for @deva[द्वयो दशतः]) + @deva[शतिच्]; (3) @deva[त्रिंशत्] from @deva[त्रिन्] (for @deva[त्रयो दशतः]) + @deva[शत्]; (4) @deva[चत्वारिंशत्] from @deva[चत्वारिम्] + @deva[शत्]; (5) @deva[पञ्चाशत्] from @deva[पञ्च] + @deva[शत्]; (6-9) @deva[षष्टि], @deva[सप्तति], @deva[अशीति], @deva[नवति] similarly; (10) @deva[शतम्]. These are conjectural etymologies from @deva[पतञ्जलि] and @deva[काशिकाकार]. The word @deva[पङ्क्ति] also means 'row, line' independently of its etymology."
            }
        },
        "51060": {
            "en": {
                "simple": "The words @deva[पञ्चत्] and @deva[दशत्] may be anomalously formed in combination with @deva[वर्ग] in the sense of 'this is its measure'. @deva[पञ्चद्वर्गः] or @deva[पञ्चकोवर्गः] 'a group of five'.",
                "standard": "The words @deva[पञ्चत्] and @deva[दशत्] may be anomalously formed in combination with @deva[वर्ग] 'class, group' in the sense of 'this is its measure'. This ordains @deva[डति] instead of @deva[कन्] (@ref[5.1.22]), which also comes in the alternative. Examples: @deva[पञ्चद्वर्गः] or @deva[पञ्चकोवर्गः] 'a group whose measure is five'; @deva[दशद्वर्गः] or @deva[दशकोवर्गः] 'a group of ten'.",
                "advanced": "This sūtra teaches optional @deva[डति] for @deva[पञ्च] and @deva[दश] before @deva[वर्ग] in the @deva[परिमाण] sense, yielding @deva[पञ्चत्] and @deva[दशत्]. The alternative @deva[कन्] (@ref[5.1.22]) is also possible. Results: @deva[पञ्चद्वर्गः] (with @deva[डति]) ~ @deva[पञ्चकोवर्गः] (with @deva[कन्]); @deva[दशद्वर्गः] ~ @deva[दशकोवर्गः]. The @deva[त्] of @deva[पञ्चत्]/दशत्] is from @deva[डति]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.1.46-60)")

if __name__ == "__main__":
    main()
