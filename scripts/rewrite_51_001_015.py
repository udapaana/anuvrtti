#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.1.1-15."""

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
        "51001": {
            "en": {
                "simple": "From this sūtra through @ref[5.1.37], the affix @deva[छ] is the default. Example: @deva[वत्सेभ्यो हितः] → @deva[वत्सीयः] 'fit for calves'.",
                "standard": "This is a heading sūtra (@deva[अधिकार]) establishing that the affix @deva[छ] governs sūtras @ref[5.1.1] through @ref[5.1.37]. The various senses in this section include 'good for that' (@deva[तस्मै हितम्], @ref[5.1.5]), 'primitive for a product' (@ref[5.1.12]), and 'purchased with' (@ref[5.1.16]). Example: @deva[वत्सेभ्यो हितो गोधुक्] = @deva[वत्सीयः] 'a cow-milker fit for calves'. Note that the jurisdiction of @deva[छ] as an affix extends only to sūtra 17, after which @deva[ठञ्] becomes the ruling affix.",
                "advanced": "This @deva[अधिकार] sūtra establishes @deva[छ] as the governing affix for the @deva[प्राक्क्रितीय] section (@ref[5.1.1]-@ref[5.1.37]). The three primary senses are: @deva[तस्मै हितम्] 'beneficial for that' (@ref[5.1.5]), @deva[प्रकृतौ विकृतेः] 'primitive serviceable for a product' (@ref[5.1.12]), and @deva[तेन क्रीतम्] 'purchased with' (@ref[5.1.16]). Example derivations: @deva[वत्सेभ्यो हितः] = @deva[वत्सीयः], @deva[करभीयः उष्ट्रः]. The limitation to sūtra 37 pertains to the meaning (@deva[अर्थ]) of the affixes, not the affix @deva[छ] itself, which as an affix-form is superseded by @deva[ठञ्] after sūtra 17."
            }
        },
        "51002": {
            "en": {
                "simple": "The affix @deva[यत्] comes after stems ending in @deva[उ] (short or long) and after the @deva[गवादि] words, with the @deva[प्राक्क्रितीय] senses. Examples: @deva[शङ्कव्यं दारु] 'wood fit for a stake', @deva[गव्यम्] 'suitable for cows'.",
                "standard": "The affix @deva[यत्] is added after @deva[प्रातिपदिक]s ending in @deva[उ] (long or short) and after words in the @deva[गवादि] class, expressing the @deva[प्राक्क्रितीय] senses (@ref[5.1.5], @ref[5.1.12], @ref[5.1.16]). This @deva[यत्] supersedes @deva[छ]. Examples: @deva[शङ्कवे हितम्] = @deva[शङ्कव्यं दारु] 'wood fit for a stake' (by @ref[6.4.146], @ref[6.1.79]); @deva[गव्यम्] 'suitable for cows'; @deva[हविष्यम्] 'suitable for offering'. Special cases in @deva[गवादि]: @deva[नाभि] is replaced by @deva[नभ] before @deva[यत्], giving @deva[नभ्यः] 'axle'; @deva[श्वन्] undergoes @deva[संप्रसारण] to @deva[शुन्य] or @deva[शून्य] 'fit for a dog'; @deva[ऊधस्] takes @deva[अनङ्] replacement giving @deva[ऊधन्यः कूपः] 'a well'.",
                "advanced": "This sūtra teaches @deva[यत्] after @deva[उ]-final stems and @deva[गवादि] words with the three @deva[प्राक्क्रितीय] senses. The @deva[यत्] blocks @deva[छ]. Derivations: @deva[शङ्कु] + @deva[यत्] → @deva[शङ्कव्य] (by @ref[6.4.146] @deva[उ] → @deva[अव्], then @ref[6.1.79]); @deva[पिचु] + @deva[यत्] → @deva[पिचव्यः कार्पासः]. Despite @ref[5.1.15] (for leathers) and @ref[5.1.4] (for offerings), @deva[उ]-final words like @deva[सनङ्गु], @deva[चरु], @deva[सक्तु] take @deva[यत्] here—a case where a prior sūtra is not superseded by a subsequent one (@ref[1.4.2]). The @deva[गवादि] class includes 24 words with special operations: @deva[नाभि] → @deva[नभ] (only when meaning 'nave', not 'navel'); @deva[श्वन्] takes @deva[संप्रसारण] (@deva[व] → @deva[उ]), optional lengthening, and final @deva[उदात्त]; @deva[ऊधस्] takes @deva[अनङ्] substitution for the final."
            }
        },
        "51003": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[कम्बल] when a name (measure) is meant. @deva[कम्बल] + @deva[यत्] → @deva[कम्बल्यम्] 'a @deva[कम्बल्य] measure of wool (100 palas)'.",
                "standard": "The affix @deva[यत्] is added after @deva[कम्बल] in the @deva[प्राक्क्रितीय] senses when a proper name is denoted (@deva[संज्ञायाम्]). This supersedes @deva[छ]. Thus @deva[कम्बल] + @deva[यत्] = @deva[कम्बल्यम्], denoting a specific measure of wool equal to 100 @deva[पल]s, as in @deva[कम्बल्यमूर्णा पलशतम्]. When not a name, @deva[छ] applies: @deva[कम्बलीया ऊर्णा] 'wool fit for making a blanket'.",
                "advanced": "This sūtra restricts @deva[यत्] after @deva[कम्बल] to cases where the derivative is a @deva[संज्ञा] (proper name/technical term). The word @deva[कम्बल्यम्] functions as the name of a specific measure: @deva[कम्बल्यमूर्णा पलशतम्] 'a @deva[कम्बल्य] of wool equals 100 @deva[पल]s'. The condition @deva[संज्ञायाम्] blocks this @deva[यत्] when no name is intended, in which case @deva[छ] applies: @deva[कम्बलीया ऊर्णा] 'wool suitable for a blanket'. This illustrates how @deva[संज्ञा] conditions can restrict otherwise general affix rules."
            }
        },
        "51004": {
            "en": {
                "simple": "The affix @deva[यत्] optionally comes after words denoting offerings and @deva[अपूपादि] words. @deva[आमिक्षा] + @deva[यत्] → @deva[आमिक्ष्यम्] or with @deva[छ] → @deva[आमिक्षीयम्] 'fit for making curds'.",
                "standard": "The affix @deva[यत्] comes optionally after words denoting sacrificial offerings (@deva[हवि]-class meanings) and the @deva[अपूपादि] words, in the @deva[प्राक्क्रितीय] senses. Examples: @deva[आमिक्ष्यं दधि] or @deva[आमिक्षीयम्] 'curd fit for making @deva[आमिक्षा]'; @deva[पुरोडाश्याः] or @deva[पुरोडाशीयाः स्तण्डुलाः] 'rice fit for making @deva[पुरोडाश]'. Note: @deva[हवि] in @deva[गवादि] (@ref[5.1.2]) necessarily takes @deva[यत्] without option; here @deva[हवि] refers to offerings in general, not the word-form itself. The @deva[अपूपादि] class includes 25 words like @deva[अपूप], @deva[तण्डुल], @deva[ओदन], @deva[सूप], etc. A @deva[वार्त्तिक] adds that @deva[यत्] optionally comes after words denoting food modifications.",
                "advanced": "This sūtra teaches optional @deva[यत्] after @deva[हवि]-denoting words and the @deva[अपूपादि] class. The option is with @deva[छ]: @deva[आमिक्ष्यम्] ~ @deva[आमिक्षीयम्], @deva[अपूप्यम्] ~ @deva[अपूपीयम्]. The word @deva[हवि] occurring in @deva[गवादि] (@ref[5.1.2]) takes obligatory @deva[यत्]; here the reference is to the semantic class of offerings, not the specific word @deva[हवि]. The @deva[अपूपादि] gaṇa contains 25 items including @deva[अपूप], @deva[तण्डुल], @deva[अभ्यूष], @deva[पृथुक], @deva[ओदन], @deva[सूप], @deva[पूप], @deva[किण्व], @deva[मुसल], @deva[यूप], @deva[स्थूणा], @deva[अश्व], etc. The @deva[वार्त्तिक] extends optional @deva[यत्] to @deva[अन्नविकार] words; however, @deva[सक्तु] (per @ref[5.1.2]) takes obligatory @deva[यत्] without option."
            }
        },
        "51005": {
            "en": {
                "simple": "An affix comes after a word in the dative case with the meaning 'good for that'. @deva[वत्सेभ्यो हितः] → @deva[वत्सीयः] 'fit for calves'.",
                "standard": "This sūtra establishes the primary sense of the @deva[प्राक्क्रितीय] section: @deva[तस्मै हितम्] 'good/beneficial for that'. The base word appears in the dative (@deva[चतुर्थी]) in the underlying construction. Examples: @deva[वत्सेभ्यो हितो गोधुक्] = @deva[वत्सीयः] 'a cow-milker fit for calves'; @deva[पटव्यम्] 'fit for cloth'; @deva[गव्यम्] 'fit for cows'; @deva[हविष्यम्] 'fit for offering'; @deva[अपूप्यम्] or @deva[अपूपीयम्] 'fit for cakes'.",
                "advanced": "This sūtra defines the @deva[तस्मै हितम्] sense—the primary meaning of the @deva[प्राक्क्रितीय] affixes. The syntactic paraphrase places the base in @deva[चतुर्थी विभक्ति] (dative): @deva[वत्सेभ्यो हितः गोधुक्] = @deva[वत्सीयः] 'beneficial for calves'. This is the foundational sense from which @ref[5.1.6]-@ref[5.1.11] provide specific bases, and @ref[5.1.12] introduces the second major sense (@deva[प्रकृतौ विकृतेः]). The default affix is @deva[छ] per @ref[5.1.1], superseded by @deva[यत्] etc. as specified in particular sūtras."
            }
        },
        "51006": {
            "en": {
                "simple": "The affix @deva[यत्] comes after words denoting body parts with the meaning 'good for that'. @deva[दन्त] + @deva[यत्] → @deva[दन्त्यम्] 'good for the teeth' (dentifrice).",
                "standard": "The affix @deva[यत्] is added in the sense of 'good for that' after words denoting parts of the body (@deva[शरीरावयव]). This supersedes @deva[छ]. Examples: @deva[दन्त्यम्] 'good for the teeth' (dentifrice), @deva[कण्ठ्यम्] 'good for the throat', @deva[ओष्ठ्यम्] 'good for the lips', @deva[नाभ्यम्] 'good for the navel' (oil), @deva[नस्यम्] 'good for the nose' (snuff). The accent falls on the first syllable per @ref[6.1.213].",
                "advanced": "This sūtra teaches @deva[यत्] after @deva[शरीरावयव] (body-part) words with the @deva[तस्मै हितम्] sense. The term @deva[शरीर] denotes animal organisms. The @deva[यत्] supersedes @deva[छ]. Derivatives include: @deva[दन्त्यम्] (dentifrice), @deva[कण्ठ्यम्] (throat remedy), @deva[ओष्ठ्यम्] (lip salve), @deva[नाभ्यम्] (navel oil), @deva[नस्यम्] (nasal medicine). Per @ref[6.1.213], these forms bear @deva[आद्युदात्त] accent, indicated by the accent marks in the source. Note: @deva[नाभि] here means 'navel' (body part), distinct from @deva[नाभि] 'nave of wheel' which takes @deva[नभ]-substitution per @ref[5.1.2]."
            }
        },
        "51007": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[खल], @deva[यव], @deva[माष], @deva[तिल], @deva[वृष], and @deva[ब्रह्मन्] with the meaning 'good for that'. Examples: @deva[खल्यम्] 'suitable for threshing floor', @deva[ब्रह्मण्यम्] 'suitable for Brahmans'.",
                "standard": "The affix @deva[यत्] is added in the sense of 'good for that' after the words @deva[खल] 'threshing floor', @deva[यव] 'barley', @deva[माष] 'beans', @deva[तिल] 'sesame', @deva[वृष] 'bull', and @deva[ब्रह्मन्] 'brahman'. This supersedes @deva[छ]. Examples: @deva[खल्यम्], @deva[यव्यम्], @deva[माष्यम्], @deva[तिल्यम्], @deva[वृष्यम्], @deva[ब्रह्मण्यम्]. Note: @deva[वृष्णे हितम्] and @deva[ब्राह्मणेभ्यो हितम्] cannot form derivatives—the full phrases must be used, as these specific forms take neither @deva[छ] nor @deva[यत्]. The word @deva[च] indicates extension to other words, e.g., @deva[रथाय हिता] = @deva[रथ्या].",
                "advanced": "This sūtra specifies @deva[यत्] after six enumerated words: @deva[खल], @deva[यव], @deva[माष], @deva[तिल], @deva[वृष], @deva[ब्रह्मन्]. The derivatives are: @deva[खल्यम्], @deva[यव्यम्], @deva[माष्यम्], @deva[तिल्यम्], @deva[वृष्यम्], @deva[ब्रह्मण्यम्]. A significant restriction: despite @deva[वृष] being listed, @deva[वृष्णे हितम्] (using @deva[वृषन्]) cannot take an affix; similarly @deva[ब्राह्मणेभ्यो हितम्] (using @deva[ब्राह्मण]) cannot—full periphrasis is required. The @deva[च] in the sūtra signals that the rule extends beyond the enumerated list, as in @deva[रथाय हिता] = @deva[रथ्या] 'road' (lit. 'suitable for chariots')."
            }
        },
        "51008": {
            "en": {
                "simple": "The affix @deva[थ्यन्] comes after @deva[अज] 'goat' and @deva[अवि] 'sheep' with the meaning 'good for that'. @deva[अज] + @deva[थ्यन्] → @deva[अजथ्या] 'jasmine good for goats'.",
                "standard": "The affix @deva[थ्यन्] is added in the sense of 'good for that' after the words @deva[अज] 'goat' and @deva[अवि] 'sheep'. This supersedes @deva[छ]. Examples: @deva[अजथ्या यूथिः] 'the yellow jasmine called @deva[यूथि], good for goats'; @deva[अविथ्या यूथिः] 'jasmine good for sheep'.",
                "advanced": "This sūtra teaches the rare affix @deva[थ्यन्] after @deva[अज] and @deva[अवि] with the @deva[तस्मै हितम्] sense. The affix @deva[थ्यन्] supersedes @deva[छ]. The examples @deva[अजथ्या यूथिः] and @deva[अविथ्या यूथिः] refer to the yellow jasmine plant (@deva[यूथी]) considered beneficial for goats and sheep respectively. The affix @deva[थ्यन्] is uncommon; its @deva[न्] is @deva[इत्] (indicatory), leaving @deva[थ्य] as the actual addition."
            }
        },
        "51009": {
            "en": {
                "simple": "The affix @deva[ख] comes after @deva[आत्मन्], @deva[विश्वजन], and compounds ending in @deva[भोग] with the meaning 'good for that'. @deva[आत्मन्] + @deva[ख] → @deva[आत्मनीनम्] 'suitable for oneself'.",
                "standard": "The affix @deva[ख] is added in the sense of 'good for that' after @deva[आत्मन्], @deva[विश्वजन] (as a @deva[कर्मधारय]), and compounds with @deva[भोग] as the final member. This supersedes @deva[छ]. Examples: @deva[आत्मनीनम्] 'suitable for oneself' (the @deva[न्] retained by @ref[6.4.169]); @deva[विश्वजनीनम्] 'suitable for all men'. When @deva[विश्वजन] is @deva[तत्पुरुष] or @deva[बहुव्रीहि], it takes @deva[छ]: @deva[विश्वजनीयम्]. Compounds with @deva[भोग]: @deva[मातृभोगीनः], @deva[पितृभोगीनः]. @deva[वार्त्तिक]s add: @deva[पञ्चजनीनम्], @deva[सर्वजनीनम्] or @deva[सार्वजनिकम्] (with @deva[ठञ्]), and @deva[माहाजनिकम्] (always @deva[ठञ्] for @deva[महाजन]).",
                "advanced": "This sūtra teaches @deva[ख] after @deva[आत्मन्], @deva[विश्वजन], and @deva[भोगोत्तरपद] compounds. The irregular retention of @deva[न्] in @deva[आत्मन्] within the sūtra indicates that @deva[भोगोत्तरपद] does not apply to @deva[आत्मन्] and @deva[विश्वजन]—they are independent @deva[प्रकृति]s. For @deva[आत्मन्], the @deva[न्] (normally deleted by @ref[6.4.144]) is preserved by @ref[6.4.169], giving @deva[आत्मनीनम्]. The compound @deva[विश्वजन] must be @deva[कर्मधारय] ('all men') for @deva[ख]; as @deva[तत्पुरुष] or @deva[बहुव्रीहि], it takes @deva[छ]: @deva[विश्वजनीयम्]. @deva[वार्त्तिक]s: @deva[पञ्चजन] (@deva[कर्मधारय]) takes @deva[ख] → @deva[पञ्चजनीनम्]; @deva[सर्वजन] takes @deva[ठञ्] or @deva[ख] → @deva[सार्वजनिकम्] or @deva[सर्वजनीनम्]; @deva[महाजन] always takes @deva[ठञ्] → @deva[माहाजनिकम्] (except in @deva[बहुव्रीहि]). For @deva[भोग]-compounds: @deva[मातृभोगीनः], @deva[पितृभोगीनः]; @deva[राजभोगीनः] and @deva[आचार्यभोगीनः] always take @deva[ख] (with @deva[ण्] not changing to @deva[ण] in the latter per @ref[8.4.2])."
            }
        },
        "51010": {
            "en": {
                "simple": "The affixes @deva[ण] and @deva[ढञ्] come after @deva[सर्व] and @deva[पुरुष] with the meaning 'good for that'. @deva[सर्व] + @deva[ण] → @deva[सार्वम्] 'beneficial for all'; @deva[पुरुष] + @deva[ढञ्] → @deva[पौरुषेयम्] 'pertaining to man'.",
                "standard": "The affixes @deva[ण] and @deva[ढञ्] are added in the sense of 'good for that' after @deva[सर्व] and @deva[पुरुष] respectively. This supersedes @deva[छ]. Examples: @deva[सर्वस्मै हितम्] = @deva[सार्वम्] 'beneficial for all'; @deva[पौरुषेयम्] 'pertaining to/made by man'. @deva[वार्त्तिक]: @deva[ण] is optional after @deva[सर्व], allowing @deva[सर्वीयम्] ~ @deva[सार्वम्]. Another @deva[वार्त्तिक]: @deva[ढञ्] after @deva[पुरुष] extends to senses of slaughter, modification, crowd, or 'made by': @deva[पौरुषेयो वधः] 'man-slaughter', @deva[पौरुषेयो ग्रन्थः] 'book written by man' (vs. @deva[अपौरुषेया वेदाः] 'the Vedas are non-human').",
                "advanced": "This sūtra assigns @deva[ण] to @deva[सर्व] and @deva[ढञ्] to @deva[पुरुष] in the @deva[तस्मै हितम्] sense. Derivations: @deva[सर्व] + @deva[ण] → @deva[सार्वम्] (with @deva[वृद्धि]); @deva[पुरुष] + @deva[ढञ्] → @deva[पौरुषेयम्]. First @deva[वार्त्तिक]: @deva[ण] is optional after @deva[सर्व], so @deva[सर्वीयम्] (with @deva[छ]) alternates with @deva[सार्वम्]. Second @deva[वार्त्तिक]: @deva[ढञ्] after @deva[पुरुष] applies when the derivative denotes: (1) @deva[वध] 'slaughter' → @deva[पौरुषेयो वधः]; (2) @deva[विकृति] 'modification' → human activity; (3) @deva[समूह] 'crowd' → assembly of men; (4) @deva[तेन कृतम्] 'made by' → @deva[पौरुषेयो ग्रन्थः] 'a humanly-authored text', contrasting with @deva[अपौरुषेया वेदाः] 'the Vedas are not of human origin'."
            }
        },
        "51011": {
            "en": {
                "simple": "The affix @deva[खञ्] comes after @deva[माणव] and @deva[चरक] with the meaning 'good for that'. @deva[माणव] + @deva[खञ्] → @deva[माणवीनम्] 'suitable for a student'.",
                "standard": "The affix @deva[खञ्] is added in the sense of 'good for that' after the words @deva[माणव] 'student' and @deva[चरक] 'wandering ascetic'. This supersedes @deva[छ]. Examples: @deva[माणवाय हितम्] = @deva[माणवीनम्] 'suitable for a student'; @deva[चारकीणम्] 'suitable for a @deva[चरक]'.",
                "advanced": "This sūtra teaches @deva[खञ्] after @deva[माणव] and @deva[चरक] with the @deva[तस्मै हितम्] sense. The @deva[खञ्] supersedes @deva[छ]. Derivations: @deva[माणव] + @deva[खञ्] → @deva[माणवीनम्]; @deva[चरक] + @deva[खञ्] → @deva[चारकीणम्] (with @deva[वृद्धि] of the initial vowel). The affix @deva[खञ्] adds @deva[ईन] to the stem."
            }
        },
        "51012": {
            "en": {
                "simple": "An affix comes after a word denoting a product to express that the primitive (raw material) is serviceable for that product. @deva[अङ्गारेभ्यो हितानि काष्ठानि] → @deva[अङ्गारीयाणि काष्ठानि] 'wood fit for making charcoal'.",
                "standard": "This sūtra establishes the second major sense of @deva[प्राक्क्रितीय] affixes: @deva[प्रकृतौ विकृतेः तदर्थम्]—the primitive (material cause) being serviceable for a specific product. The word @deva[तदर्थ] indicates that the primitive must be specifically serviceable for that particular product. Examples: @deva[अङ्गारीयाणि काष्ठानि] 'wood suitable for charcoal'; @deva[प्राकारीया इष्टकाः] 'bricks suitable for a wall'; @deva[शङ्कव्यं दारु] 'wood suitable for a stake'. Restrictions: (1) @deva[तदर्थम्]—if the primitive serves multiple products, no affix (e.g., @deva[यवानां धानाः] but @deva[सक्तु] comes from many sources); (2) @deva[विकृतेः]—the base must denote a product (not @deva[उदकार्थः कूपः], as water is not a product of the well); (3) @deva[प्रकृतौ]—the derivative must denote a primitive (not @deva[असिर्था कोशी] 'sheath for a sword', as sheath is not the primitive of sword).",
                "advanced": "This sūtra defines the @deva[प्रकृति-विकृति] sense: the affix comes after a @deva[विकृति] (product) name to denote the @deva[प्रकृति] (primitive/material) that is @deva[तदर्थ] (exclusively serviceable for that product). The word @deva[तदर्थ] signals two requirements: (1) the primitive must be dedicated to that specific product, not general-purpose; (2) the base appears in @deva[चतुर्थी] (dative). The default affix is @deva[छ] (@ref[5.1.1]): @deva[अङ्गारीयाणि काष्ठानि], @deva[प्राकारीया इष्टकाः]. The @deva[यत्] of @ref[5.1.2] applies to @deva[उ]-finals: @deva[शङ्कव्यं दारु], @deva[पिचव्यः कार्पासः]. Three blocking conditions: (1) @deva[तदर्थम्]—no affix if the primitive has multiple products (@deva[धानानां सक्तवः] fails because @deva[सक्तु] also comes from @deva[लाजा] etc.); (2) @deva[विकृतेः]—the base must name a product, not a container (@deva[उदकार्थः कूपः] fails since water is not a @deva[विकार] of the well); (3) @deva[प्रकृतौ]—the derivative must denote a @deva[प्रकृति] (@deva[असिर्था कोशी] fails since sheath is not the material cause of sword). The terms @deva[प्रकृति] and @deva[विकृति] imply that the primitive undergoes transformation (@deva[विकार])."
            }
        },
        "51013": {
            "en": {
                "simple": "The affix @deva[ढञ्] comes after @deva[छदिस्], @deva[उपधि], and @deva[बालि] in the 'primitive for product' sense. @deva[छदिस्] + @deva[ढञ्] → @deva[छादिषेयाणि तृणानि] 'grass fit for thatching'.",
                "standard": "The affix @deva[ढञ्] (adding @deva[एय]) is used in the sense of 'primitive serviceable for a product' after the words @deva[छदिस्] 'thatch', @deva[उपधि] 'wheel-part', and @deva[बालि] 'tribute'. This supersedes @deva[छ]. Examples: @deva[छादिषेयाणि तृणानि] 'grass suitable for thatching'; @deva[औपधेयं दारु] 'wood suitable for the wheel-felloe'; @deva[बालेयाः तण्डुलाः] 'rice suitable for tribute'. The affix also comes after @deva[उपधि] without changing the sense: @deva[उपधि] 'that which is placed under' = @deva[रथाङ्ग] 'wheel-part', and @deva[औपधेय] has the same meaning.",
                "advanced": "This sūtra teaches @deva[ढञ्] after @deva[छदिस्], @deva[उपधि], and @deva[बालि] in the @deva[प्रकृति-विकृति] sense. The affix @deva[ढञ्] adds @deva[एय] (with @deva[वृद्धि]). Examples: @deva[छादिषेयाणि तृणानि] (grass for thatch), @deva[औपधेयं दारु] (wood for wheel-felloe), @deva[बालेयाः तण्डुलाः] (rice for tribute). A note explains that @deva[उपधि] (derived as @deva[उपधीयते इति]) means @deva[रथाङ्ग] 'the part of a wheel between the nave and circumference', and @deva[औपधेय] retains this meaning (the affix is @deva[अर्थाभाव]—meaningless). This is an @deva[अपवाद] to @deva[छ]."
            }
        },
        "51014": {
            "en": {
                "simple": "The affix @deva[ञ्य] comes after @deva[ऋषभ] 'bull' and @deva[उपानह्] 'sandal' in the 'primitive for product' sense. @deva[ऋषभ] + @deva[ञ्य] → @deva[आर्षभ्यः वत्सः] 'a calf fit for becoming a bull'.",
                "standard": "The affix @deva[ञ्य] (adding @deva[य]) is used in the sense of 'primitive serviceable for a product' after @deva[ऋषभ] 'bull' and @deva[उपानह्] 'sandal/shoe'. This supersedes @deva[छ]. Examples: @deva[आर्षभ्यो वत्सः] 'a calf suitable for becoming a bull'; @deva[औपानह्यो मुञ्जः] '@deva[मुञ्ज] grass suitable for sandals'. Notably, even when the primitive is leather (@deva[चर्म]), @deva[ञ्य] applies after @deva[उपानह्], irregularly superseding the @deva[अञ्] of @ref[5.1.15]: @deva[औपानह्यं चर्म] 'leather suitable for sandals'.",
                "advanced": "This sūtra teaches @deva[ञ्य] after @deva[ऋषभ] and @deva[उपानह्] in the @deva[प्रकृति-विकृति] sense. The @deva[ञ्य] adds @deva[य] with @deva[वृद्धि] of the initial: @deva[ऋषभ] → @deva[आर्षभ्य], @deva[उपानह्] → @deva[औपानह्य]. Examples: @deva[आर्षभ्यो वत्सः] 'a calf destined to become a bull'; @deva[औपानह्यो मुञ्जः] '@deva[मुञ्ज]-grass for making sandals'. The commentary notes an irregularity: even when @deva[चर्म] 'leather' is the primitive, @deva[ञ्य] applies after @deva[उपानह्] (@deva[औपानह्यं चर्म]), overriding the expected @deva[अञ्] of @ref[5.1.15]. This is an @deva[अपवाद] both to @deva[छ] and to @ref[5.1.15]."
            }
        },
        "51015": {
            "en": {
                "simple": "The affix @deva[अञ्] comes after words denoting leather products in the 'primitive for product' sense. @deva[वर्ध्र] + @deva[अञ्] → @deva[वार्ध्रं चर्म] 'leather fit for making a thong'.",
                "standard": "The affix @deva[अञ्] (adding @deva[अ]) is used in the sense of 'primitive serviceable for a product' after words expressing products made of leather (@deva[चर्मणः विकृति]). This supersedes @deva[छ]. The word @deva[चर्मणः] in the sūtra is in the genitive case. Examples: @deva[वार्ध्रं चर्म] 'leather suitable for making a @deva[वर्ध्र] (leather thong)'; @deva[वारत्रं चर्म] 'leather suitable for making a @deva[वरत्र] (leather strap)'.",
                "advanced": "This sūtra teaches @deva[अञ्] after @deva[चर्मविकृति] (leather-product) words in the @deva[प्रकृति-विकृति] sense. The genitive @deva[चर्मणः] specifies the domain: products of leather. The @deva[अञ्] adds @deva[अ] with @deva[वृद्धि]: @deva[वर्ध्र] → @deva[वार्ध्र], @deva[वरत्र] → @deva[वारत्र]. Examples: @deva[वार्ध्रं चर्म] 'leather fit for a @deva[वर्ध्र] (thong)', @deva[वारत्रं चर्म] 'leather fit for a @deva[वरत्र] (strap)'. This @deva[अञ्] is an @deva[अपवाद] to @deva[छ], but is itself overridden by @deva[ञ्य] of @ref[5.1.14] for @deva[उपानह्]-derivatives."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.1.1-15)")

if __name__ == "__main__":
    main()
