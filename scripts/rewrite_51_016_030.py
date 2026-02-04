#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.1.16-30."""

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
        "51016": {
            "en": {
                "simple": "The affix also comes when the base in the nominative case is 'sufficient for that' or 'sufficient to be made therein'. @deva[प्राकार आसाम् इष्टकानां स्यात्] → @deva[प्राकारीया इष्टकाः] 'bricks sufficient to raise a wall'.",
                "standard": "The @deva[प्राक्क्रितीय] affixes come after a word in the nominative (@deva[प्रथमा]) with the force of genitive (@deva[अस्य]) or locative (@deva[अस्मिन्]) when combined with @deva[स्यात्] (potential of @deva[अस्] 'to be'), expressing 'sufficient for that' or 'sufficient therein'. The word @deva[स्यात्] (potential mood per @ref[3.3.154]) conveys @deva[सम्भावन] 'potentiality, sufficiency'. Examples: @deva[प्राकार आसाम् इष्टकानां स्यात्] = @deva[प्राकारीया इष्टकाः] 'bricks sufficient to raise a wall'; @deva[प्रासादीयं दारु] 'wood sufficient for a palace'; @deva[प्राकारो अस्मिन् देशे स्यात्] = @deva[प्राकारीयो देशः] 'land sufficient to make a wall therein'. Unlike @ref[5.1.12], there is no modification of primitive into product here—only adequacy or sufficiency is expressed.",
                "advanced": "This sūtra extends the @deva[प्राक्क्रितीय] affixes to expressions of sufficiency. The construction places the base in @deva[प्रथमा] (nominative) as subject of @deva[स्यात्] (potential of @deva[अस्]), with the affix sense being genitive (@deva[तद् अस्य स्यात्]) or locative (@deva[तद् अस्मिन् स्यात्]). The potential mood conveys @deva[सम्भावन] (potentiality) per @ref[3.3.154]. Examples: genitive sense—@deva[प्राकार आसाम् इष्टकानां स्यात्] = @deva[प्राकारीया इष्टकाः] 'bricks of which a wall could be made'; locative sense—@deva[प्रासादो अस्मिन् देशे स्यात्] = @deva[प्रासादीया भूमिः] 'land in which a palace could be built'. The double @deva[तद्] in the sūtra establishes the maxim: @deva[अनेकस्मिन् प्रत्ययार्थे प्रत्येकं समर्थविभक्तिः सम्बन्धनीया] 'when the affix has multiple senses, each requires its own case specification'. The @deva[इति] prevents extension to cases like @deva[प्रासादो देवदत्तस्य स्यात्] where secular usage doesn't support affixing."
            }
        },
        "51017": {
            "en": {
                "simple": "The affix @deva[ढञ्] comes after @deva[परिखा] 'moat' in the senses of 'sufficient for' and 'sufficient therein'. @deva[परिखा] + @deva[ढञ्] → @deva[पारिखेयी भूमिः] 'land sufficient to make a moat'.",
                "standard": "The affix @deva[ढञ्] (adding @deva[एय]) is used after @deva[परिखा] 'moat, ditch' in the senses of 'sufficient for that' and 'sufficient therein'. This supersedes @deva[छ]. Example: @deva[पारिखेयी भूमिः] 'land sufficient to construct a moat'. This sūtra marks the end of the governing force of @deva[छ] and @deva[यत्]; hereafter different affixes are taught.",
                "advanced": "This sūtra teaches @deva[ढञ्] after @deva[परिखा] in the @ref[5.1.16] senses (sufficiency). The @deva[ढञ्] supersedes @deva[छ]. Example: @deva[पारिखेयी भूमिः] 'land adequate for constructing a moat'. Importantly, this sūtra concludes the @deva[अधिकार] of @deva[छ] and @deva[यत्] that began at @ref[5.1.1]. From @ref[5.1.18] onward, @deva[ठञ्] becomes the governing affix."
            }
        },
        "51018": {
            "en": {
                "simple": "From this sūtra through @ref[5.1.115], the affix @deva[ठञ्] is the default. The senses are those taught in @ref[5.1.37] and following.",
                "standard": "This is a heading sūtra (@deva[अधिकार]) establishing that the affix @deva[ठञ्] (adding @deva[इक]) governs sūtras from here through @ref[5.1.115] (exclusive). The affix has the senses given in @ref[5.1.37] and subsequent sūtras. Strictly, @deva[ठञ्] as an affix governs only up to @ref[5.1.110]. Example: @deva[पारायणिकः], @deva[तौरायणिकः], @deva[चान्द्रायणिकः].",
                "advanced": "This @deva[अधिकार] sūtra establishes @deva[ठञ्] as the governing affix through @ref[5.1.115]. The senses are those of @ref[5.1.37] (@deva[तेन क्रीतम्] 'purchased with') and following. Technically, @deva[ठञ्] governs only up to @ref[5.1.110]; the extension to 115 pertains to the general section structure. Examples from @ref[5.1.72]: @deva[पारायणिकः], @deva[तौरायणिकः], @deva[चान्द्रायणिकः]. The affix @deva[ठञ्] adds @deva[इक] (or @deva[क]) to the stem."
            }
        },
        "51019": {
            "en": {
                "simple": "From here through @ref[5.1.63], the affix @deva[ठक्] applies after numerals and measures. @deva[निष्क] + @deva[ठक्] → @deva[नैष्किकम्] 'purchased for a @deva[निष्क]'.",
                "standard": "The affix @deva[ठक्] (adding @deva[इक]) applies through @ref[5.1.63] (inclusive, due to the prefix @deva[आ] in @deva[आर्हात्]). This @deva[ठक्] supersedes @deva[ठञ्]. The sense is 'purchased with' (@ref[5.1.37]) etc. Examples: @deva[निष्कया क्रीतम्] = @deva[नैष्किकम्]; @deva[पाणिकम्]. After words denoting numbers or measures, the accent differs: @deva[षाष्टिकम्], @deva[प्रास्थिकम्], @deva[कौडविकम्]. Technical note: @deva[परिमाण] here means measure of capacity/volume (cubic/square measure), distinct from @deva[प्रमाण] (lineal measure), @deva[उन्मान] (weight measure), and @deva[संख्या] (number).",
                "advanced": "This @deva[अधिकार] teaches @deva[ठक्] from here through @ref[5.1.63]. The term @deva[आर्हात्] (@deva[आ] + @deva[अर्हात्]) is inclusive, so @ref[5.1.63] (@deva[तदर्हति]) also takes @deva[ठक्]. The @deva[ठक्] supersedes @deva[ठञ्]; the difference is accentual. Examples: @deva[नैष्किकम्], @deva[पाणिकम्]. With number/measure words, accent falls on initial: @deva[षाष्टिकम्], @deva[प्रास्थिकम्]. A @deva[कारिका] clarifies the technical terms: @deva[ऊर्ध्वमानं किलोन्मानं परिमाणं तु सर्वतः । आयामस्तु प्रमाणं स्यात् संख्या बाह्या तु सर्वतः ॥] Thus @deva[उन्मान] = weight (e.g., @deva[पल]), @deva[परिमाण] = volume/capacity (e.g., @deva[प्रस्थ]), @deva[प्रमाण] = lineal measure (e.g., @deva[वितस्ति]), and @deva[संख्या] is beyond these three."
            }
        },
        "51020": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the @deva[निष्कादि] words when they are not part of a compound. @deva[निष्क] + @deva[ठक्] → @deva[नैष्किकम्]; @deva[पाणिकम्], @deva[पादिकम्], @deva[माषिकम्].",
                "standard": "The affix @deva[ठक्] is added after the @deva[निष्कादि] words (@deva[निष्क], @deva[पण], @deva[माष], @deva[वाहद्रोण], @deva[षष्टि]) when they are not part of a compound (@deva[असमासे]), with senses up to @ref[5.1.63]. This supersedes @deva[ठञ्]. Examples: @deva[नैष्किकम्], @deva[पाणिकम्], @deva[पादिकम्], @deva[माषिकम्]. When in a compound: @deva[परमनैष्किकम्], @deva[उत्तमनैष्किकम्] (with @deva[ठञ्] per @ref[5.1.18], and @deva[वृद्धि] of second member per @ref[7.3.17]). The explicit mention of @deva[असमासे] indicates (@deva[ज्ञापक]) that @deva[तदन्तविधि] (@ref[1.1.72]) applies in prior sūtras but not in subsequent ones (except for @deva[संख्या]-preceded compounds up to @ref[5.1.115]).",
                "advanced": "This sūtra teaches @deva[ठक्] after @deva[निष्कादि] words in non-compound contexts. The @deva[निष्कादि] class contains 5 words: @deva[निष्क], @deva[पण], @deva[माष], @deva[वाहद्रोण], @deva[षष्टि]. In compounds, @deva[ठञ्] applies instead: @deva[परमनैष्किकम्] (with @deva[वृद्धि] of second term per @ref[7.3.17]). The condition @deva[असमासे] serves as @deva[ज्ञापक]: despite the maxim @deva[ग्रहणवता प्रातिपदिकेन तदन्तविधिर्नास्ति], @deva[तदन्तविधि] (@ref[1.1.72]) does apply in earlier sūtras (e.g., @ref[5.1.2] @deva[गव्यम्], @deva[सुगव्यम्]; @ref[5.1.4] @deva[यवापूप्यम्]; @ref[5.1.6] @deva[राजदन्त्यम्]). In subsequent sūtras, @deva[तदन्तविधि] applies only to @deva[संख्या]-prefixed compounds and only up to @ref[5.1.115], and not when the affix is deleted by @deva[लुक्] (e.g., @deva[द्विशूर्पेण क्रीतम्] = @deva[द्विशौर्पिकम्], not @deva[द्विशौर्पम्]). The @deva[इष्टि]: @deva[प्राग्वतेः संख्यापूर्वपदानां तदन्तग्रहणमलुकि]."
            }
        },
        "51021": {
            "en": {
                "simple": "The affixes @deva[ठन्] and @deva[यत्] come after @deva[शत्] 'hundred' when it is not part of a compound and when it doesn't merely denote 'a hundred'. @deva[शत] + @deva[यत्] → @deva[शत्यम्] or @deva[शत] + @deva[ठन्] → @deva[शतिकम्] 'purchased for a hundred'.",
                "standard": "The affixes @deva[ठन्] (adding @deva[इक]) and @deva[यत्] (adding @deva[य]) come in the senses up to @ref[5.1.63] after @deva[शत्] when: (1) it is not part of a compound (@deva[असमासे] from previous sūtra via @deva[च]), and (2) it does not merely mean 'a hundred' (@deva[अशते]). These supersede @deva[कन्] of @ref[5.1.22]. Example: @deva[शतेन क्रीतम्] = @deva[शत्यम्] or @deva[शतिकम्] 'purchased for a hundred coins'. When @deva[शत] merely means 'a hundred' (as in @deva[शतं परिमाणमस्य] = @deva[शतकं निदानम्] 'a band whose measure is hundred'), @deva[कन्] applies instead. In compounds: @deva[द्विशतेन क्रीतम्] = @deva[द्विशतकम्] (with @deva[कन्] per @ref[5.1.22]).",
                "advanced": "This sūtra teaches @deva[ठन्] and @deva[यत्] after @deva[शत्] with two conditions: @deva[असमासे] (non-compound, via @deva[च] from @ref[5.1.20]) and @deva[अशते] (not meaning merely 'hundred'). The @deva[अशते] condition pertains to affix-sense, not base-sense (the base @deva[शत] always means 'hundred'). When the derivative essentially contains 'hundred' as its integral part (e.g., @deva[शतकः ग्रन्थः] 'a book of hundred chapters'), @deva[कन्] applies per @ref[5.1.58]; but @deva[शत्यं शाटकशतम्] 'a vehicle bought for hundred' doesn't essentially contain hundred. @deva[वार्त्तिक]: @deva[शतप्रतिषेधे अन्यशतत्वे अप्रतिषेधः]—the prohibition of @deva[शत] doesn't apply when a different 'hundred-sense' is involved. For compounds like @deva[द्विशतम्], @deva[त्रिशतम्]: @deva[द्विशतेन क्रीतम्] = @deva[द्विशतकम्] (with @deva[कन्]), applying @deva[तदन्तविधि] per the @deva[इष्टि] of @ref[5.1.20]."
            }
        },
        "51022": {
            "en": {
                "simple": "The affix @deva[कन्] comes after numerals that do not end in @deva[ति] or @deva[शत्], with senses up to @ref[5.1.63]. @deva[पञ्चभिः क्रीतः] → @deva[पञ्चकः] 'purchased for five'.",
                "standard": "The affix @deva[कन्] (adding @deva[क]) is used after @deva[संख्या] (numerals, per @ref[1.1.23]) that do not end in @deva[ति] or @deva[शत्], with the senses taught up to @ref[5.1.63]. This supersedes @deva[ठञ्]. Examples: @deva[पञ्चभिः क्रीतः] = @deva[पञ्चकः]; @deva[बहुकः], @deva[गणकः]. Words ending in @deva[ति] or @deva[शत्] take @deva[ठञ्] instead: @deva[साप्ततिकः], @deva[चात्वारिंशतकः]. Note: @deva[कतिकः] takes @deva[कन्] because @deva[कति] is formed with the affix @deva[डति]—the @deva[ति] here is @deva[सानुबन्धक] (has an indicatory letter), not the primitive @deva[ति]-ending meant by this rule.",
                "advanced": "This sūtra teaches @deva[कन्] after @deva[संख्या] (defined in @ref[1.1.23]) excluding @deva[ति]-finals (@deva[सप्ततिः], @deva[अशीतिः], @deva[विंशतिः]) and @deva[शत्]-finals. The @deva[कन्] supersedes @deva[ठञ्]. Examples: @deva[पञ्चकः], @deva[बहुकः], @deva[गणकः]. For @deva[ति]/शत्-finals: @deva[साप्ततिकः], @deva[चात्वारिंशतकः] (with @deva[ठञ्]). The word @deva[कति] takes @deva[कन्] → @deva[कतिकः] because its @deva[ति] comes from the affix @deva[डति], not from being a primitive @deva[ति]-ending numeral. Two maxims apply: @deva[अर्थवद्ग्रहणे नानर्थकस्य] 'a meaningful term denotes only that combination having that meaning' and @deva[निरनुबन्धकग्रहणे न सानुबन्धकस्य] 'a term without @deva[इत्] letters doesn't include forms with @deva[इत्] letters'. Thus @deva[ति] in this sūtra means primitive @deva[ति]-endings, not @deva[डति]."
            }
        },
        "51023": {
            "en": {
                "simple": "When @deva[कन्] comes after a numeral ending in @deva[वत्], it optionally takes the augment @deva[इट्]. @deva[तावत्] + @deva[कन्] → @deva[तावत्कः] or @deva[तावतिकः] 'that much'.",
                "standard": "The affix @deva[कन्] following a numeral ending in @deva[वत्] optionally takes the augment @deva[इट्] (adding @deva[इ]), with senses up to @ref[5.1.63]. Words ending in @deva[वत्] are @deva[संख्या] per @ref[1.1.23] and take @deva[कन्] by @ref[5.1.22]. Examples: @deva[तावत्कः] or @deva[तावतिकः] 'of that measure'; @deva[यावत्कः] or @deva[यावतिकः] 'of what measure'.",
                "advanced": "This sūtra teaches optional @deva[इट्]-augment for @deva[कन्] after @deva[वत्]-final numerals. Since @deva[वत्]-finals are @deva[संख्या] (per @ref[1.1.23]), they take @deva[कन्] by @ref[5.1.22]. This sūtra adds the option of @deva[इट्] before @deva[कन्], yielding @deva[तावतिकः] alongside @deva[तावत्कः], and @deva[यावतिकः] alongside @deva[यावत्कः]. The @deva[इट्] is inserted between the stem and affix."
            }
        },
        "51024": {
            "en": {
                "simple": "The affix @deva[ड्वुन्] comes after @deva[विंशति] 'twenty' and @deva[त्रिंशत्] 'thirty' when not denoting a name; the @deva[ति] and @deva[अत्] are dropped. @deva[विंशति] + @deva[ड्वुन्] → @deva[विंशकः]; @deva[त्रिंशत्] + @deva[ड्वुन्] → @deva[त्रिंशकः].",
                "standard": "The affix @deva[ड्वुन्] (adding @deva[अक]) comes in the senses up to @ref[5.1.63] after @deva[विंशति] and @deva[त्रिंशत्] when not denoting a name (@deva[असंज्ञायाम्]). Before @deva[ड्वुन्], the @deva[ति] of @deva[विंशति] is dropped (by @ref[6.4.142]) and the @deva[अत्] of @deva[त्रिंशत्] is dropped (by @ref[6.4.143]). Examples: @deva[विंशति] + @deva[ड्वुन्] → @deva[विंशकः]; @deva[त्रिंशत्] + @deva[ड्वुन्] → @deva[त्रिंशकः]. When denoting a name: @deva[विंशतिकः], @deva[त्रिंशत्कः] (with @deva[कन्] per @ref[5.1.22]).",
                "advanced": "This sūtra teaches @deva[ड्वुन्] after @deva[विंशति] and @deva[त्रिंशत्] in non-name contexts. The affix @deva[ड्वुन्] triggers deletion: @deva[ति] of @deva[विंशति] by @ref[6.4.142], @deva[अत्] of @deva[त्रिंशत्] by @ref[6.4.143]. Results: @deva[विंश] + @deva[अक] = @deva[विंशकः]; @deva[त्रिंश्] + @deva[अक] = @deva[त्रिंशकः]. In @deva[संज्ञा] (name) usage, @deva[कन्] applies: @deva[विंशतिकः], @deva[त्रिंशत्कः]. The sūtra can be parsed as two rules: (1) @deva[विंशतित्रिंशद्भ्याम्]—@deva[कन्] applies; (2) @deva[ड्वुनसंज्ञायाम्]—@deva[ड्वुन्] applies when not a name. This division explains why @deva[कन्] can apply despite @ref[5.1.22]'s @deva[अतिशदन्तायाः] restriction."
            }
        },
        "51025": {
            "en": {
                "simple": "The affix @deva[टिठन्] comes after @deva[कंस] 'cup/measure'. The feminine is formed with @deva[ङीप्]. @deva[कंस] + @deva[टिठन्] → @deva[कंसिकः], fem. @deva[कंसिकी].",
                "standard": "The affix @deva[टिठन्] (adding @deva[इक]) is used in the senses up to @ref[5.1.63] after @deva[कंस] 'cup, measure'. This supersedes @deva[ठञ्]. The @deva[टि] of @deva[टिठन्] indicates that the feminine is formed with @deva[ङीप्] per @ref[4.1.15]. Example: @deva[कंसिकः], fem. @deva[कंसिकी]. @deva[वार्त्तिक]s: @deva[टिठन्] also comes after @deva[अर्ध] (@deva[अर्धिकः], @deva[अर्धिकी]) and @deva[कार्षापण] (@deva[कार्षापणिकः], @deva[कार्षापणिकी]); @deva[प्रति] may substitute for @deva[कार्षापण] before this affix (@deva[प्रतिकः], @deva[प्रतिकी]).",
                "advanced": "This sūtra teaches @deva[टिठन्] after @deva[कंस]. The @deva[अनुबन्ध]s: @deva[टि] triggers @deva[ङीप्] for feminine (@ref[4.1.15]); @deva[इ] is for pronunciation; @deva[न्] governs accent (@ref[6.1.197]). Result: @deva[कंसिकः], fem. @deva[कंसिकी]. Three @deva[वार्त्तिक]s extend the rule: (1) after @deva[अर्ध] → @deva[अर्धिकः], @deva[अर्धिकी]; (2) after @deva[कार्षापण] → @deva[कार्षापणिकः], @deva[कार्षापणिकी]; (3) @deva[प्रति] optionally substitutes for @deva[कार्षापण] → @deva[प्रतिकः], @deva[प्रतिकी]."
            }
        },
        "51026": {
            "en": {
                "simple": "The affix @deva[अञ्] optionally comes after @deva[शूर्प] 'winnowing basket'. @deva[शूर्प] + @deva[अञ्] → @deva[शौर्पम्] or with @deva[ठञ्] → @deva[शौर्पिकम्] 'purchased for a @deva[शूर्प]'.",
                "standard": "The affix @deva[अञ्] (adding @deva[अ]) comes optionally in the senses up to @ref[5.1.63] after @deva[शूर्प] 'winnowing basket'. This optionally supersedes @deva[ठञ्]. Examples: @deva[शूर्पेण क्रीतम्] = @deva[शौर्पम्] (with @deva[अञ्]) or @deva[शौर्पिकम्] (with @deva[ठञ्]).",
                "advanced": "This sūtra teaches optional @deva[अञ्] after @deva[शूर्प] in the @deva[आर्हीय] senses. The option is with @deva[ठञ्]: @deva[शूर्पेण क्रीतम्] = @deva[शौर्पम्] (by @deva[अञ्]) ~ @deva[शौर्पिकम्] (by @deva[ठञ्]). Both forms take @deva[वृद्धि] of the initial vowel."
            }
        },
        "51027": {
            "en": {
                "simple": "The affix @deva[अण्] comes after @deva[शतमान], @deva[विंशतिक], @deva[सहस्र], and @deva[वसन]. @deva[शतमान] + @deva[अण्] → @deva[शातमानम्]; @deva[सहस्र] + @deva[अण्] → @deva[साहस्रम्].",
                "standard": "The affix @deva[अण्] (adding @deva[अ]) comes in the senses up to @ref[5.1.63] after the words @deva[शतमान] 'a weight of 100 @deva[पल]s', @deva[विंशतिक], @deva[सहस्र] 'thousand', and @deva[वसन] 'cloth'. This supersedes @deva[ठञ्], @deva[ठक्], and @deva[कन्]. Examples: @deva[शतमानेन क्रीतम्] = @deva[शातमानम्]; @deva[वैंशतिकम्]; @deva[साहस्रम्]; @deva[वासनम्].",
                "advanced": "This sūtra teaches @deva[अण्] after four specified words in the @deva[आर्हीय] senses. The @deva[अण्] supersedes @deva[ठञ्], @deva[ठक्], and @deva[कन्]. Derivations with @deva[वृद्धि]: @deva[शतमान] → @deva[शातमानम्]; @deva[विंशतिक] → @deva[वैंशतिकम्]; @deva[सहस्र] → @deva[साहस्रम्]; @deva[वसन] → @deva[वासनम्]. Note that @deva[विंशतिक] is itself a derivative (from @deva[विंशति] + @deva[कन्]), and @deva[अण्] is added to this secondary stem."
            }
        },
        "51028": {
            "en": {
                "simple": "The affix is deleted by @deva[लुक्] after stems beginning with @deva[अध्यर्ध] 'one and a half' and after @deva[द्विगु] compounds, when not in a name. @deva[द्वाभ्यां शूर्पाभ्यां क्रीतम्] → @deva[द्विशूर्पम्].",
                "standard": "The affix with senses up to @ref[5.1.63] is deleted by @deva[लुक्] after a stem beginning with @deva[अध्यर्ध] and after a @deva[द्विगु] compound, when not denoting a name (@deva[असंज्ञायाम्]). Examples: @deva[अध्यर्धकंसम्], @deva[द्विकंसम्], @deva[अध्यर्धशूर्पम्], @deva[द्विशूर्पम्], @deva[त्रिकंसम्], @deva[त्रिशूर्पम्]—here affixes @deva[टिठन्] and @deva[अञ्] are deleted. However, in tertiary derivatives (when @deva[द्विगु] compounding doesn't occur with the @deva[तद्धित]), the affix is not deleted: @deva[द्विशूर्पेण क्रीतम्] = @deva[द्विशौर्पिकम्]. The rule: @deva[द्विगोर्लुकि तन्निमित्तग्रहणम्] 'the @deva[लुक्] of @deva[द्विगु] applies only when that @deva[तद्धित] occasions the compounding'. When a name: @deva[पाञ्चलोहितिकम्], @deva[पाञ्चकलायिकम्].",
                "advanced": "This sūtra teaches @deva[लुक्] (deletion) of @deva[आर्हीय] affixes after @deva[अध्यर्ध]-initial stems and @deva[द्विगु] compounds, provided the context is not @deva[संज्ञा]. Examples: @deva[अध्यर्धकंसम्], @deva[द्विशूर्पम्], @deva[त्रिकंसम्]. The @deva[लुक्] occurs only when the @deva[तद्धित] affix occasions the @deva[द्विगु] compounding (per @ref[2.1.51]). For tertiary derivatives: @deva[द्विशूर्पेण क्रीतम्] = @deva[द्विशौर्पिकम्] (no @deva[लुक्], since no fresh @deva[द्विगु] formation). Maxim: @deva[द्विगोर्लुकि तन्निमित्तग्रहणम्]. In @deva[संज्ञा] contexts, no @deva[लुक्]: @deva[पाञ्चलोहितिकम्], @deva[पाञ्चकलायिकम्] (names of measures). The word @deva[अध्यर्ध] is mentioned separately (though it's a @deva[संख्या] and would form @deva[द्विगु]) as a @deva[ज्ञापक] that @deva[अध्यर्ध] is not always treated as @deva[संख्या]—specifically, it doesn't trigger @deva[कृत्वसुच्] (@ref[5.4.17])."
            }
        },
        "51029": {
            "en": {
                "simple": "The deletion of the affix after @deva[कार्षापण] and @deva[सहस्र] is optional. @deva[अध्यर्धकार्षापणम्] or @deva[अध्यर्धकार्षापणिकम्]; @deva[द्विसहस्रम्] or @deva[द्विसाहस्रम्].",
                "standard": "This sūtra makes the @deva[लुक्] deletion optional (whereas @ref[5.1.28] made it compulsory) for @deva[कार्षापण] and @deva[सहस्र]. Examples: @deva[अध्यर्धकार्षापणम्] or @deva[अध्यर्धकार्षापणिकम्]; @deva[द्विकार्षापणम्] or @deva[द्विकार्षापणिकम्]. When the affix is retained, @deva[प्रति] may substitute for @deva[कार्षापण] per @ref[5.1.25]: @deva[अध्यर्धप्रतिकम्], @deva[द्विप्रतिकम्]. For @deva[सहस्र]: @deva[अध्यर्धसहस्रम्] or @deva[अध्यर्धसाहस्रम्], @deva[द्विसहस्रम्] or @deva[द्विसाहस्रम्] (with irregular @deva[वृद्धि] of second term per @ref[7.3.15]). @deva[वार्त्तिक]: @deva[सुवर्ण] and @deva[शतमान] should also be included—@deva[अध्यर्धसुवर्णम्] or @deva[अध्यर्धसौवर्णिकम्], etc.",
                "advanced": "This sūtra introduces optionality for @deva[लुक्] with @deva[कार्षापण] and @deva[सहस्र] (modifying the obligatory @deva[लुक्] of @ref[5.1.28]). For @deva[कार्षापण]: @deva[अध्यर्धकार्षापणम्] ~ @deva[अध्यर्धकार्षापणिकम्] (or with @deva[प्रति]-substitution: @deva[अध्यर्धप्रतिकम्]). For @deva[सहस्र]: @deva[द्विसहस्रम्] ~ @deva[द्विसाहस्रम्] (when affix retained, @deva[वृद्धि] of second member occurs per @ref[7.3.15]). A @deva[वार्त्तिक] extends this to @deva[सुवर्ण] and @deva[शतमान]: @deva[अध्यर्धसुवर्णम्] ~ @deva[अध्यर्धसौवर्णिकम्], @deva[द्विशतमानम्] ~ @deva[द्विशातमानम्] (irregular @deva[वृद्धि] per @ref[7.3.17])."
            }
        },
        "51030": {
            "en": {
                "simple": "The affix is optionally deleted after @deva[द्विगु] compounds of @deva[निष्क] preceded by @deva[द्वि], @deva[त्रि], or @deva[बहु]. @deva[द्विनिष्कम्] or @deva[द्विनैष्किकम्]; @deva[त्रिनिष्कम्] or @deva[त्रिनैष्किकम्].",
                "standard": "The @deva[आर्हीय] affix (@ref[5.1.63]) is optionally deleted by @deva[लुक्] after @deva[द्विगु] compounds of @deva[निष्क] when preceded by @deva[द्वि] or @deva[त्रि]. The condition @deva[द्विगोः] from @ref[5.1.28] is understood. Examples: @deva[द्विनिष्कम्] or @deva[द्विनैष्किकम्]; @deva[त्रिनिष्कम्] or @deva[त्रिनैष्किकम्]. @deva[वार्त्तिक]: This also applies when @deva[निष्क] is preceded by @deva[बहु]: @deva[बहुनिष्कम्] or @deva[बहुनैष्किकम्]. When the affix is retained, irregular @deva[वृद्धि] of the second term occurs per @ref[7.3.17].",
                "advanced": "This sūtra teaches optional @deva[लुक्] for @deva[निष्क] in @deva[द्विगु] compounds with @deva[द्वि] or @deva[त्रि]. The @deva[द्विगोः] condition of @ref[5.1.28] is read into this sūtra. Derivations: @deva[द्वाभ्यां निष्काभ्यां क्रीतम्] → @deva[द्विनिष्कम्] (with @deva[लुक्]) or @deva[द्विनैष्किकम्] (without @deva[लुक्], @deva[वृद्धि] per @ref[7.3.17]); similarly @deva[त्रिनिष्कम्] ~ @deva[त्रिनैष्किकम्]. A @deva[वार्त्तिक] extends this to @deva[बहु]: @deva[बहुनिष्कम्] ~ @deva[बहुनैष्किकम्]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.1.16-30)")

if __name__ == "__main__":
    main()
