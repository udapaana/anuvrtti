#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.2.1-15."""
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
        "52001": {
            "en": {
                "simple": "The affix @deva[खञ्] (@deva[ईन]) comes after grain-names to mean 'a field where it grows'. @deva[धान्य] 'grain' → @deva[धान्यम् भवति यत्र क्षेत्रम्] → @deva[धानीनम्] 'a grain-field'.",
                "standard": "After names of grain (@deva[धान्यशब्द]) in the genitive, the affix @deva[खञ्] (realized as @deva[ईन]) denotes 'a field where it grows' (@deva[भवनं क्षेत्रम्]). The word @deva[धान्यानाम्] in the @[sūtra] indicates that the base must be a grain-type. Examples: @deva[धान्यानां भवनं क्षेत्रम्] → @deva[धानीनम्] 'a field for growing grain'.",
                "advanced": "The @deva[खञ्]-affix applies to @deva[धान्यवाचिन्] bases with the specialized meaning @deva[भवनं क्षेत्रम्] (a field as place of growth). The genitive relation in the @[sūtra] (@deva[धान्यानाम्]) establishes the semantic frame 'field of X (grain)'. This begins a section on @deva[तद्धित] affixes denoting fields, containers, and related spatial-functional concepts."
            }
        },
        "52002": {
            "en": {
                "simple": "The affix @deva[ढक्] comes after @deva[व्रीहि] 'rice' and @deva[शालि] 'a variety of rice' to mean 'a field where it grows'. @deva[व्रीहि] → @deva[व्रैहेयम्]; @deva[शालि] → @deva[शालेयम्] 'a rice-field'.",
                "standard": "After @deva[व्रीहि] and @deva[शालि] (both rice varieties), the affix @deva[ढक्] (realized as @deva[एय]) denotes 'a field fit for growing'. This supersedes the general @deva[खञ्] of @ref[5.2.1]. Examples: @deva[व्रीहीणां भवने क्षेत्रे] → @deva[व्रैहेयम्] 'a field for growing @deva[व्रीहि]-rice'; @deva[शालीनां भवने क्षेत्रे] → @deva[शालेयम्].",
                "advanced": "The @deva[ढक्]-affix (= @deva[एय] after @deva[इत्संज्ञालोप]) is prescribed specifically for @deva[व्रीहि] and @deva[शालि], functioning as @deva[अपवाद] to the @deva[खञ्] of @ref[5.2.1]. The @deva[वृद्धि] yields @deva[व्रैहेय], @deva[शालेय]. Both terms refer to varieties of cultivated rice (@deva[ओरिज़ा सतिवा])."
            }
        },
        "52003": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[यव] 'barley', @deva[यवक], and @deva[षष्टिक] 'sixty-day rice' to mean 'a field where it grows'. @deva[यव] → @deva[यव्यम्] 'a barley-field'.",
                "standard": "After @deva[यव], @deva[यवक], and @deva[षष्टिक] (a quick-maturing rice variety), the affix @deva[यत्] (= @deva[य]) denotes 'a field for growing'. This blocks @deva[खञ्]. Examples: @deva[यवानां भवनं क्षेत्रम्] → @deva[यव्यम्]; @deva[यवकस्य] → @deva[यवक्यम्]; @deva[षष्टिकस्य] → @deva[षष्टिक्यम्]. See @ref[6.1.213] for accent rules.",
                "advanced": "The @deva[यत्]-affix (@deva[अपवाद] to @deva[खञ्]) applies to three grain-terms: @deva[यव] (barley), @deva[यवक] (a barley variety), @deva[षष्टिक] (rice maturing in 60 days). The accent pattern (@deva[यव्यम्]) follows @ref[6.1.213]. The @deva[षष्टिक] etymology reflects the sixty-day (@deva[षष्टि]-@deva[दिन]) growing period."
            }
        },
        "52004": {
            "en": {
                "simple": "The affix @deva[यत्] optionally comes after @deva[तिल] 'sesame', @deva[माष] 'bean', @deva[उमा] 'linseed', @deva[भङ्गा] 'hemp', and @deva[अणु]. Otherwise @deva[खञ्] applies. @deva[तिल] → @deva[तिल्यम्] or @deva[तैलीनम्].",
                "standard": "After @deva[तिल], @deva[माष], @deva[उमा], @deva[भङ्गा], and @deva[अणु], the affix @deva[यत्] is optional; when not applied, @deva[खञ्] takes effect. Examples: @deva[तिलानां भवनं क्षेत्रम्] → @deva[तिल्यम्] (by @deva[यत्]) or @deva[तैलीनम्] (by @deva[खञ्]); @deva[माष] → @deva[माष्यम्] or @deva[माषीणम्]; @deva[उमा] → @deva[उम्यम्] or @deva[औमीनम्]; @deva[भङ्गा] → @deva[भङ्ग्यम्] or @deva[भाङ्गीनम्].",
                "advanced": "The @deva[विकल्प] between @deva[यत्] and @deva[खञ्] creates derivational doublets for five seed/grain crops: @deva[तिल] (sesame), @deva[माष] (black gram/bean), @deva[उमा] (linseed/flax), @deva[भङ्गा] (hemp/cannabis), @deva[अणु] (a millet variety). The @deva[यत्]-forms show no @deva[वृद्धि] while @deva[खञ्]-forms show initial @deva[वृद्धि]."
            }
        },
        "52005": {
            "en": {
                "simple": "The affixes @deva[ख] and @deva[खञ्] come after @deva[सर्वचर्मन्] to mean 'wholly made of leather'. @deva[सर्वचर्मणा कृतः] → @deva[सर्वचर्मीणः] or @deva[सार्वचर्मीणः] 'made entirely of leather'.",
                "standard": "After @deva[सर्वचर्मन्] 'whole leather', both @deva[ख] and @deva[खञ्] (both realized as @deva[ईन]) denote 'wholly made thereof' (@deva[सर्वेण कृतः]). The word @deva[सर्व] joins semantically with @deva[कृतः] 'made', not with @deva[चर्मन्] 'leather'. The compounding is affix-induced. Examples: @deva[सर्वचर्मणा कृतः] → @deva[सर्वचर्मीणः] (by @deva[ख]) or @deva[सार्वचर्मीणः] (by @deva[खञ्] with @deva[वृद्धि]).",
                "advanced": "The dual-affix prescription (@deva[ख]//@deva[खञ्]) for @deva[सर्वचर्मन्] yields forms with and without @deva[वृद्धि]. The @deva[सर्व] component contributes to the affix-meaning (@deva[प्रत्ययार्थ]) as 'wholly/entirely', semantically binding with @deva[कृत] rather than forming a standard compound with @deva[चर्मन्]. This illustrates @deva[प्रत्ययकृतसमास] where the affix itself induces compounding."
            }
        },
        "52006": {
            "en": {
                "simple": "The affixes @deva[ख] and @deva[खञ्] come after @deva[यथामुख] and @deva[संमुख] to mean 'a mirror' (something that shows). @deva[यथामुखं दर्शनम्] → @deva[यथामुखीनः] 'mirror'.",
                "standard": "After @deva[यथामुख] 'like the face' and @deva[संमुख] 'facing', both @deva[ख] and @deva[खञ्] denote @deva[दर्शन] 'a mirror/reflecting surface'. The word @deva[दर्शन] means 'that in which something is seen' (a reflective surface). @deva[यथामुख] is an @deva[अव्ययीभाव] compound where @deva[यथा] means 'likeness' (per @ref[2.1.6]). Example: @deva[यथामुखं दर्शनम्] → @deva[यथामुखीनः] 'showing the likeness of the face' = mirror.",
                "advanced": "The @deva[ख]//@deva[खञ्] affixes apply to @deva[यथामुख] and @deva[संमुख] with the specialized @deva[दर्शन]-meaning (reflective instrument). The @deva[यथामुख] base is an @deva[अव्ययीभाव] (@deva[यथा] + @deva[मुख]) per @ref[2.1.6], where @deva[यथा] conveys @deva[सादृश्य] (likeness). The derived form @deva[यथामुखीन] denotes an object that displays the face-likeness, hence 'mirror'."
            }
        },
        "52007": {
            "en": {
                "simple": "The affix @deva[ख] comes after @deva[सर्वपथि], @deva[सर्वाङ्ग], @deva[सर्वकर्मन्], @deva[सर्वपत्र], or @deva[सर्वपात्र] (accusative) to mean 'pervading/filling the whole'. @deva[सर्वपथं व्याप्नोति] → @deva[सर्वपथीनः] 'pervading all roads'.",
                "standard": "When @deva[पथि], @deva[अङ्ग], @deva[कर्मन्], @deva[पत्र], or @deva[पात्र] is preceded by @deva[सर्व] in the accusative, the affix @deva[ख] (= @deva[ईन]) denotes 'what pervades or fills the whole'. Examples: @deva[सर्वपथं व्याप्नोति] → @deva[सर्वपथीनो रथः] 'a chariot that travels all roads'; @deva[सर्वाङ्गीणस्तापः] 'heat pervading all limbs'; @deva[सर्वकर्मीणः पुरुषः] 'a man engaged in all work'; @deva[सर्वपत्रीणः सारथिः]; @deva[सर्वपात्रीण ओदनः].",
                "advanced": "The @deva[ख]-affix with @deva[व्याप्ति]-meaning (pervading/filling) requires @deva[सर्व] as @deva[पूर्वपद] with specific @deva[उत्तरपद] bases (@deva[पथि], @deva[अङ्ग], @deva[कर्मन्], @deva[पत्र], @deva[पात्र]) in @deva[द्वितीया] (accusative) relation. The semantic frame is @deva[सर्वं X व्याप्नोति] → @deva[सर्व-X-ईन]. This creates adjectives describing comprehensive coverage or engagement."
            }
        },
        "52008": {
            "en": {
                "simple": "The affix @deva[ख] comes after @deva[आप्रपद] to mean 'reaching thereto'. @deva[आप्रपदं प्राप्नोति] → @deva[आप्रपदीनः पटः] 'cloth reaching to the top of the feet'.",
                "standard": "After @deva[आप्रपद] 'up to the top of the foot', the affix @deva[ख] (= @deva[ईन]) denotes 'reaching thereto'. The word @deva[प्रपद] means 'top of the foot' and @deva[आ] means 'up to'. @deva[आप्रपद] is an @deva[अव्ययीभाव] compound. Example: @deva[आप्रपदं प्राप्नोति] → @deva[आप्रपदीनः पटः] 'cloth reaching to the end of the feet', describing the width/length of cloth measured against the body.",
                "advanced": "The @deva[ख]-affix applies to @deva[आप्रपद] (@deva[अव्ययीभाव]: @deva[आ] + @deva[प्रपद]) with @deva[प्राप्ति]-meaning (reaching to). The @deva[प्रपद] denotes the front/top portion of the foot (@deva[पादाग्र]). The derived @deva[आप्रपदीन] describes garments or objects measured by body-extension, a common textile-measurement convention."
            }
        },
        "52009": {
            "en": {
                "simple": "The affix @deva[ख] comes after @deva[अनुपद] (meaning 'bound'), @deva[सर्वान्न] (meaning 'eating'), and @deva[आयन] (meaning 'carrying'). @deva[अनुपदं बद्धा] → @deva[अनुपदीना] 'a kind of shoe'.",
                "standard": "The affix @deva[ख] (= @deva[ईन]) applies in three contexts: (1) after @deva[अनुपद] with meaning 'so bound' → @deva[अनुपदीना] 'a shoe' (always feminine, meaning 'bound to the measure of a foot'); (2) after @deva[सर्वान्न] with meaning 'eating all food' → @deva[सर्वान्नीनो भिक्षुः] 'a mendicant who eats all food'; (3) after @deva[आयन] with meaning 'to carry thereto'.",
                "advanced": "Three distinct base-meaning pairs share @deva[ख]-affixation: @deva[अनुपद] + @deva[बद्ध] (bound), @deva[सर्वान्न] + @deva[भक्षयति] (eats), @deva[आयन] + carrying-sense. The @deva[अनुपद] form is @deva[नित्यस्त्री] (invariably feminine), denoting footwear 'bound to foot-measure'. The @deva[अनु] here conveys 'likeness' or 'measure' (@deva[प्रमाण]) rather than 'following'."
            }
        },
        "52010": {
            "en": {
                "simple": "The affix @deva[ख] comes after @deva[परोवर], @deva[परम्पर], and @deva[पुत्रपौत्र] (accusative) to mean 'one who witnesses/experiences that'. @deva[परांश्च अवरांश्च अनुभवति] → @deva[परोवरीणः] 'one who lives to see high and low'.",
                "standard": "After @deva[परोवर] 'high and low', @deva[परम्पर] 'successive', and @deva[पुत्रपौत्र] 'sons and grandsons' (accusative), the affix @deva[ख] denotes 'one who witnesses/experiences'. @deva[परोवर] is compounded from @deva[पर] + @deva[अवर] with irregular @deva[ओ] (affix-induced). Examples: @deva[परांश्च अवरांश्च अनुभवति] → @deva[परोवरीणः] 'one who lives to see high and low (generations)'; @deva[पुत्रान् पौत्रांश्च अनुभवति] → @deva[पुत्रपौत्रीणः] 'one who lives to see sons and grandsons'.",
                "advanced": "The @deva[ख]-affix with @deva[अनुभव]-meaning (experiencing/witnessing) applies to @deva[द्वन्द्व]-type bases: @deva[परोवर] (@deva[पर] + @deva[अवर], irregular @deva[ओ] by @deva[प्रत्ययकृत] compounding), @deva[परम्पर] (@deva[पर] + @deva[पर] with @deva[मुक्-आगम]), @deva[पुत्रपौत्र]. These derivatives describe longevity or comprehensiveness of experience across generations or extremes."
            }
        },
        "52011": {
            "en": {
                "simple": "The affix @deva[ख] comes after @deva[अवारपार], @deva[अत्यन्त], and @deva[अनुकाम] (accusative) to mean 'one who purposes to go'. @deva[अवारपारं गामी] → @deva[अवारपारीणः] 'intending to go to the far shore'.",
                "standard": "After @deva[अवारपार] 'near and far shore', @deva[अत्यन्त] 'to the end', and @deva[अनुकाम] 'according to desire' (accusative), the affix @deva[ख] denotes 'one who purposes/intends to go' (@deva[गामी] = @deva[गमिष्यति], per @ref[3.3.3]). The genitive is blocked by @ref[2.3.70] since @deva[गामी] governs accusative. Example: @deva[अवारपारं गामी] → @deva[अवारपारीणः]. A @deva[वार्त्तिक] notes: reversed order also works (@deva[पारावारीणः]).",
                "advanced": "The @deva[ख]-affix with @deva[गमनेच्छा] (intention-to-go) meaning applies to @deva[अवारपार] (this-shore-and-far-shore), @deva[अत्यन्त] (extreme end), @deva[अनुकाम] (following desire). The @deva[द्वितीया] is mandated as @deva[गामी] (= @deva[गमिष्यन्], per @ref[3.3.3]) takes accusative, not genitive (blocked by @ref[2.3.70]). The @deva[वार्त्तिक] permits @deva[व्यत्यय] (reversal): @deva[पारावारीणः]."
            }
        },
        "52012": {
            "en": {
                "simple": "The affix @deva[ख] comes after @deva[समांसमाम्] to mean 'one who bears in the womb (year after year)'. @deva[समांसमां विजायते] → @deva[समांसमीना गौः] 'a cow that calves every year'.",
                "standard": "After @deva[समांसमाम्] 'year after year', the affix @deva[ख] denotes 'one who bears in the womb' (@deva[विजायते] = @deva[गर्भे धारयति]). The verb @deva[विजायते] governs the accusative of time @deva[समांसमाम्] by @ref[2.1.29]. Example: @deva[समांसमां विजायते] → @deva[समांसमीना गौः] 'a cow that gives birth year after year'; @deva[समांसमीना वडवा] 'a mare that foals annually'. A @deva[वार्त्तिक] alternatively interprets @deva[विजायते] as 'to give birth/get young'.",
                "advanced": "The @deva[ख]-affix applies to the @deva[अव्यय] @deva[समांसमाम्] (year-after-year, an iterative temporal expression) with @deva[विजायते]-meaning (bearing offspring). The @deva[कालाधिकरण] accusative follows @ref[2.1.29]. The derived @deva[समांसमीन] describes regular annual breeding/calving, applicable to @deva[गो] (cow) or @deva[वडवा] (mare). The @deva[वार्त्तिक] offers semantic expansion beyond gestation to include parturition."
            }
        },
        "52013": {
            "en": {
                "simple": "The word @deva[अद्यश्वीन] is irregular, meaning 'a female near delivery'. @deva[अद्य वा श्वो वा विजायते] → @deva[अद्यश्वीना गौः] 'a cow about to give birth today or tomorrow'.",
                "standard": "The word @deva[अद्यश्वीन] is formed irregularly (@deva[निपातन]) meaning 'a female animal near delivery' (@deva[अवष्टब्धप्रसव] 'imminent parturition'). The understood verb is @deva[विजायते]. @deva[अवष्टब्ध] 'imminent/near' is from @deva[अव] + @deva[स्तम्भ्] + @deva[क्त], with @deva[स्] → @deva[ष्] by @ref[8.3.68]. Example: @deva[अद्य वा श्वो वा विजायते] → @deva[अद्यश्वीना गौः] 'a cow likely to calve today or tomorrow'; similarly @deva[अद्यश्वीना वडवा].",
                "advanced": "The @deva[निपातन] @deva[अद्यश्वीन] derives from @deva[अद्य] 'today' + @deva[श्वस्] 'tomorrow' with irregular @deva[ख]-affixation and phonological fusion. The semantic gloss @deva[अवष्टब्धप्रसव] (imminent delivery) involves @deva[अवष्टब्ध] (< @deva[अव-स्तम्भ्-क्त], 'approached/imminent') with @deva[षत्व] by @ref[8.3.68]. Some commentators omit @deva[विजायते] from the @deva[अधिकार], treating the form as purely lexical."
            }
        },
        "52014": {
            "en": {
                "simple": "The word @deva[आगवीन] is irregularly formed, meaning 'a day-labourer'. It comes from @deva[आ] + @deva[गो] + @deva[ख] → @deva[आगवीनः] 'one engaged until the cows return'.",
                "standard": "The word @deva[आगवीन] is an irregular formation (@deva[निपातन]). It is derived by adding @deva[ख] to @deva[गो] 'cow' preceded by the preposition @deva[आ]: @deva[आगो] + @deva[ख] → @deva[आगवीनः]. The meaning is 'a servant/day-labourer' — a person engaged in work until the return of the cows, i.e., one who works from dawn to dusk.",
                "advanced": "The @deva[निपातन] @deva[आगवीन] shows irregular derivation: @deva[आ] (preposition 'until') + @deva[गो] (cow) + @deva[ख] → @deva[आगवीन]. The semantic interpretation @deva[गवां प्रत्यागमनपर्यन्तं कर्मणि नियुक्तः] (engaged in work until cows' return) reflects ancient pastoral time-reckoning where cattle-return marked day's end. The form is @deva[निपातित] because standard derivation would not yield this meaning."
            }
        },
        "52015": {
            "en": {
                "simple": "The affix @deva[ख] comes after @deva[अनुगु] to mean 'one fit to follow (the cows)'. @deva[अनुगु पर्याप्तं गच्छति] → @deva[अनुगवीनः] 'a cowherd'.",
                "standard": "After @deva[अनुगु] 'after the cow' (= @deva[गोः पश्चात्]), the affix @deva[ख] denotes 'one who is fit/able to follow'. Example: @deva[अनुगु पर्याप्तं गच्छति] → @deva[अनुगवीनः] 'one suited or able to follow after the cows', i.e., a cowherd. The word @deva[अनुगु] is formed from @deva[अनु] 'after' + @deva[गु] (= @deva[गो]).",
                "advanced": "The @deva[ख]-affix with @deva[पर्याप्ति/अनुसरणयोग्यता] meaning applies to @deva[अनुगु] (@deva[अव्ययीभाव]: @deva[अनु] + @deva[गु], where @deva[गु] is a @deva[गो]-variant). The derived @deva[अनुगवीन] denotes 'one capable of following cattle', a technical term for cowherds. The @deva[पर्याप्त] element in the gloss indicates suitability/capability for the herding task."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.2.1-15)")

if __name__ == "__main__":
    main()
