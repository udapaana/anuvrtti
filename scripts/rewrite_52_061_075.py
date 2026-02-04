#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.2.61-75."""
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
        "52061": {
            "en": {
                "simple": "The affix @deva[अण्] comes after @deva[विमुक्त]-class words with @deva[मतुप्]-sense when expressing @deva[अध्याय] or @deva[अनुवाक]. @deva[विमुक्तशब्दः अस्मिन् अस्ति] → @deva[वैमुक्तः अध्यायः] or @deva[अनुवाकः].",
                "standard": "After @deva[विमुक्त] and similar words (@deva[विमुक्तादि]), the affix @deva[अण्] (with @deva[वृद्धि]) comes with @deva[मतुप्]-sense ('having this word') when denoting an @deva[अध्याय] (chapter) or @deva[अनुवाक] (Vedic section). Examples: @deva[विमुक्त शब्दः अस्मिन् अस्ति] → @deva[वैमुक्तः अध्यायः/अनुवाकः]; @deva[देवासुर] → @deva[दैवासुरः]. The @deva[विमुक्तादि] includes: @deva[विमुक्त], @deva[देवासुर], @deva[रक्षोऽसुर], @deva[उपसद्], @deva[सुवर्ण], etc.",
                "advanced": "The @deva[अण्]-affix with @deva[मतुप्]-@deva[अर्थ] applies to the @deva[विमुक्तादि] @deva[गण] in @deva[अध्याय]//@deva[अनुवाक] contexts. This is an alternative to @deva[छ] (@ref[5.2.59]) for this specific word-class. The @deva[गण] includes textual markers: @deva[विमुक्त], @deva[देवासुर], @deva[रक्षोऽसुर], @deva[उपसद्], @deva[सुवर्ण]//@deva[सुपर्ण], @deva[परिसारक], @deva[सदसत्], @deva[वसु], @deva[मरुत्]//@deva[मरुत्वत्], @deva[पत्नीवत्], @deva[वसुमत्]."
            }
        },
        "52062": {
            "en": {
                "simple": "The affix @deva[वुन्] comes after @deva[गोषद्]-class words with @deva[मतुप्]-sense when expressing @deva[अध्याय] or @deva[अनुवाक]. @deva[गोषद् शब्दः अस्मिन् अस्ति] → @deva[गोषदकः अध्यायः].",
                "standard": "After @deva[गोषद्] and similar words (@deva[गोषदादि]), the affix @deva[वुन्] (= @deva[अक]) comes with @deva[मतुप्]-sense when denoting an @deva[अध्याय] or @deva[अनुवाक]. Examples: @deva[गोषद् शब्दः अस्मिन् अस्ति] → @deva[गोषदकः अध्यायः/अनुवाकः]; @deva[इषे त्वा] → @deva[इषेत्वकः]; @deva[मातरिश्वन्] → @deva[मातरिश्वकः]. The @deva[गोषदादि] includes: @deva[गोषद्], @deva[इषे त्वा], @deva[मातरिश्वन्], @deva[देवस्य त्वा], @deva[देवीरापः], @deva[कृष्णोऽस्या], etc.",
                "advanced": "The @deva[वुन्]-affix (= @deva[अक]) with @deva[मतुप्]-@deva[अर्थ] applies to @deva[गोषदादि] @deva[गण] for @deva[अध्याय]//@deva[अनुवाक] naming. An alternative reading has @deva[गोषद] (with @deva[अनुबन्ध] on final consonant). The @deva[गण] includes Vedic phrases used as section-markers: @deva[इषे त्वा], @deva[देवस्य त्वा], @deva[देवीरापः], etc."
            }
        },
        "52063": {
            "en": {
                "simple": "The affix @deva[वुन्] comes after @deva[पथिन्] 'road' (locative) to mean 'versed/skilled therein'. @deva[पथि कुशलः] → @deva[पथकः] 'one skilled in roads, a guide'.",
                "standard": "After @deva[पथिन्] 'road/path' in the locative, the affix @deva[वुन्] (= @deva[अक]) denotes @deva[कुशल] 'versed in, skilled in'. Derivation: @deva[पथि कुशलः] → @deva[पथिन्] + @deva[वुन्] → @deva[पथ्] + @deva[वुन्] (by @ref[6.4.144], @deva[न्]-deletion) → @deva[पथ्] + @deva[अक्] (by @ref[7.1.1]) → @deva[पथकः] 'one skilled in roads, a guide'.",
                "advanced": "The @deva[वुन्]-affix with @deva[कुशल]-meaning applies to @deva[सप्तम्यन्त] @deva[पथिन्]. The derivation shows @deva[अनलोप] by @ref[6.4.144] (@deva[पथिन्] → @deva[पथ्]) before the @deva[वुन्] → @deva[अक्] conversion per @ref[7.1.1]. The resulting @deva[पथक] denotes professional expertise in navigation/guidance."
            }
        },
        "52064": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[आकर्ष]-class words (locative) to mean 'skilled therein'. @deva[आकर्षे कुशलः] → @deva[आकर्षकः] 'one skilled in dragging/attraction'.",
                "standard": "After @deva[आकर्ष] and similar words (@deva[आकर्षादि]) in the locative, the affix @deva[कन्] (= @deva[क]) denotes @deva[कुशल] 'skilled in'. Examples: @deva[आकर्षे कुशलः] → @deva[आकर्षकः]; @deva[त्सरौ कुशलः] → @deva[त्सरुकः]. The @deva[आकर्षादि] includes: @deva[आकर्ष] (or @deva[आकष]), @deva[त्सरु], @deva[पिशाच], @deva[पिचण्ड], @deva[अशनि], @deva[अश्मन्], @deva[निचय], @deva[चय], @deva[विजय], @deva[जय], etc.",
                "advanced": "The @deva[कन्]-affix with @deva[कुशल]-meaning applies to @deva[सप्तम्यन्त] @deva[आकर्षादि] bases. An alternative reading has @deva[आकष] as the @deva[गण]-head. The @deva[गण] includes action-nouns and implements: @deva[आकर्ष] (dragging), @deva[त्सरु] (sword-hilt), @deva[पिशाच], @deva[अशनि] (thunderbolt), @deva[अश्मन्] (stone), @deva[चय/निचय/विचय] (accumulation/selection), @deva[जय/विजय] (conquest)."
            }
        },
        "52065": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[धन] 'wealth' and @deva[हिरण्य] 'gold' (locative) to mean 'desire for'. @deva[धने कामः] → @deva[धनकः] 'one desirous of wealth'.",
                "standard": "After @deva[धन] 'wealth' and @deva[हिरण्य] 'gold' in the locative, the affix @deva[कन्] (= @deva[क]) denotes @deva[काम] 'desire'. The word @deva[काम] means 'wish, craving'. Examples: @deva[धने कामः] → @deva[धनकः देवदत्तस्य] 'Devadatta's desire for wealth' (= one desirous of wealth); @deva[हिरण्ये कामः] → @deva[हिरण्यकः देवदत्तस्य].",
                "advanced": "The @deva[कन्]-affix with @deva[काम]-meaning (desire/craving) applies to @deva[सप्तम्यन्त] @deva[धन] and @deva[हिरण्य]. The derived @deva[धनक]//@deva[हिरण्यक] function as @deva[भाववाचक] or @deva[कर्तृवाचक] depending on context: @deva[धनकः देवदत्तस्य] = 'D.'s wealth-desire' or 'D. who desires wealth'."
            }
        },
        "52066": {
            "en": {
                "simple": "The affix @deva[कन्] comes after body-part words (locative) to mean 'one devoted to caring for it'. @deva[केशेषु प्रसितः] → @deva[केशकः] 'one devoted to hair-care'.",
                "standard": "After words denoting one's own body-parts (@deva[स्वाङ्ग]) in the locative, the affix @deva[कन्] (= @deva[क]) denotes @deva[प्रसित] 'devoted to, intent upon, taking care of'. @deva[तत्र] and @deva[कन्] are understood from prior context. Example: @deva[केशेषु प्रसितः] → @deva[केशकः] 'one devoted to hair-arrangement'. The plural @deva[स्वाङ्गेभ्यः] indicates the affix applies even to collective compounds of body-parts.",
                "advanced": "The @deva[कन्]-affix with @deva[प्रसित]-meaning (devoted care) applies to @deva[सप्तम्यन्त] @deva[स्वाङ्गवाचिन्] (body-part terms). The @deva[बहुवचन] (@deva[स्वाङ्गेभ्यः]) licenses application to @deva[समाहारद्वन्द्व] compounds of body-parts. The @deva[प्रसित] sense implies habitual attention to grooming/care of the specified body-part."
            }
        },
        "52067": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after @deva[उदर] 'belly' to mean 'voracious'. @deva[उदरे अविजिगीषुः] → @deva[औदरिकः] 'one who cannot control hunger, gluttonous'.",
                "standard": "After @deva[उदर] 'belly/stomach', the affix @deva[ठक्] (= @deva[इक]) applies. Per Böhtlingk, it simply means 'voracious'. Per Kāśikā, the @deva[अनुवृत्ति] of @deva[प्रसित] continues: @deva[ठक्] comes after @deva[उदर] in locative with @deva[प्रसित]-sense when meaning 'voracious'. A person excessively distressed by hunger: @deva[उदरे अविजिगीषुः] → @deva[औदरिकः] 'gluttonous/voracious'.",
                "advanced": "The @deva[ठक्]-affix (= @deva[इक] with @deva[वृद्धि] → @deva[औदरिक]) for @deva[उदर] has interpretive variation: Böhtlingk takes it as direct 'voracious' meaning; Kāśikā reads @deva[प्रसित]-@deva[अनुवृत्ति] with specialized gloss @deva[उदरे अविजिगीषु] (uncontrollable hunger-craving). Both yield the semantic outcome: one dominated by belly/appetite."
            }
        },
        "52068": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[सस्य] 'good quality' (instrumental) to mean 'abundantly supplied with it'. @deva[सस्येन परिजातः] → @deva[सस्यकः] 'full of good qualities'.",
                "standard": "After @deva[सस्य] 'good quality' (not 'corn' in this context) in the instrumental, the affix @deva[कन्] (not @deva[ठक्]) denotes @deva[परिजात] 'richly/fully supplied with'. The word @deva[परि] means 'all, everywhere'. Example: @deva[सस्येन परिजातः] → @deva[सस्यकः] 'fully endowed with good qualities, having no defect'. An alternative reading has @deva[शस्य].",
                "advanced": "The @deva[कन्]-affix (continuing from @deva[अनुवृत्ति], not @deva[ठक्]) with @deva[परिजात]-meaning (abundantly supplied) applies to @deva[तृतीयान्त] @deva[सस्य]. The semantic specification @deva[सस्य] = @deva[सुगुण] (good quality), not @deva[धान्य] (grain), is crucial. An alternative @deva[पाठ] has @deva[शस्य]. The @deva[परि]-element implies comprehensive presence without deficiency."
            }
        },
        "52069": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[अंश] 'share' (accusative) to mean 'one who must take that'. @deva[अंशं हारी] → @deva[अंशकः] 'one entitled to a share, shareholder'.",
                "standard": "After @deva[अंश] 'share/portion' in the accusative, the affix @deva[कन्] (= @deva[क]) denotes @deva[हारिन्] 'one who must take' (sense of necessity/entitlement). The accusative @deva[अंशम्] in the @[sūtra] shows required construction. @deva[हारिन्] (nom. @deva[हारी]) is from @deva[हृ] + @deva[णिनि] with necessity-sense (per @ref[3.3.170]). @deva[हारिन्] governs accusative, not genitive. Example: @deva[अंशं हारी] → @deva[अंशकः] 'shareholder, heir'.",
                "advanced": "The @deva[कन्]-affix with @deva[हारिन्]-meaning (necessitative 'must take') applies to @deva[द्वितीयान्त] @deva[अंश]. The @deva[हारिन्] is derived per @ref[3.3.170] (@deva[णिनि] with @deva[विध्यर्थ]). The accusative government (@deva[अंशं हारी], not *@deva[अंशस्य हारी]) is specified by the @[sūtra]'s own case-usage. @deva[अंशक] = legal heir/shareholder."
            }
        },
        "52070": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[तन्त्र] 'loom' (ablative) to mean 'recently taken off therefrom'. @deva[तन्त्रात् अचिरापहृतः] → @deva[तन्त्रकः] 'cloth just off the loom'.",
                "standard": "After @deva[तन्त्र] 'loom' in the ablative (as indicated by the @[sūtra]'s own case-usage), the affix @deva[कन्] denotes @deva[अचिरापहृत] 'taken off not long ago/recently removed'. @deva[अचिर] means 'short time'; @deva[अपहृत] means 'taken off'. Example: @deva[तन्त्रात् अचिरापहृतः] → @deva[तन्त्रकः पटः] 'a cloth just taken off the loom', i.e., an unbleached/fresh cloth.",
                "advanced": "The @deva[कन्]-affix with @deva[अचिरापहृत]-meaning applies to @deva[पञ्चम्यन्त] @deva[तन्त्र] (the @[sūtra]'s ablative usage is @deva[विभक्त्यर्थबोधक]). The derived @deva[तन्त्रक] specifically denotes newly-woven cloth before processing (bleaching, etc.). This is a technical textile term."
            }
        },
        "52071": {
            "en": {
                "simple": "The words @deva[ब्राह्मणक] and @deva[उष्णिक] are irregular formations used as names. @deva[ब्राह्मणको देशः] 'a region of warrior-Brahmins'; @deva[उष्णिका यवागूः] 'thin gruel'.",
                "standard": "The words @deva[ब्राह्मणक] and @deva[उष्णिक] are irregular (@deva[निपातन]) when used as proper names. @deva[ब्राह्मणक] (with @deva[कन्] added to @deva[ब्राह्मण]) means 'a place where Brahmins living by military profession dwell': @deva[ब्राह्मणको देशः]. @deva[उष्णिक] means @deva[अल्पान्न] 'having little food': @deva[उष्णिका यवागूः] 'thin gruel'.",
                "advanced": "Both @deva[ब्राह्मणक] and @deva[उष्णिक] are @deva[निपातित संज्ञा] (irregularly listed names). @deva[ब्राह्मणक] with @deva[कन्] denotes a geographical/social designation: region of @deva[शस्त्रजीविन् ब्राह्मण] (Brahmins living by arms). @deva[उष्णिक] glossed as @deva[अल्पान्न] describes sparse/thin food-preparations. The semantic connections are conventionalized rather than derivationally transparent."
            }
        },
        "52072": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[शीत] 'cold' and @deva[उष्ण] 'hot' to mean 'one who works thus'. @deva[शीतं करोति] → @deva[शीतकः] 'lazy'; @deva[उष्णं करोति] → @deva[उष्णकः] 'energetic'.",
                "standard": "After @deva[शीत] 'cold' and @deva[उष्ण] 'hot' (used adverbially in accusative), the affix @deva[कन्] denotes 'one who works thus' (@deva[तथा करोति]). Examples: @deva[शीतं करोति] 'who works coldly' → @deva[शीतकः] = @deva[अलसः], @deva[जडः] 'lazy, sluggish person'; @deva[उष्णं करोति] 'who works hotly' → @deva[उष्णकः] = @deva[शीघ्रकारी], @deva[दक्षः] 'quick worker, energetic person'.",
                "advanced": "The @deva[कन्]-affix applies to @deva[शीत]//@deva[उष्ण] in adverbial (@deva[क्रियाविशेषण]) accusative with @deva[करोति]-meaning (manner of working). The metaphorical extension: @deva[शीत] = sluggish/cold manner → @deva[अलस/जड] (lazy); @deva[उष्ण] = heated/intense manner → @deva[शीघ्रकारिन्/दक्ष] (energetic/skilled). This creates character-epithets from temperature-adverbs."
            }
        },
        "52073": {
            "en": {
                "simple": "The word @deva[अधिक] 'more/superior' is irregularly formed from @deva[अध्यारूढ] with elision of the second part before @deva[कन्].",
                "standard": "The word @deva[अधिक] meaning 'more, superior' is an irregular formation (@deva[निपातन]). It is derived by adding @deva[कन्] to @deva[अध्यारूढ] 'ascended upon/surpassing', with elision of the second term (@deva[आरूढ]) before the affix. Examples: @deva[अधिको द्रोणः खार्याम्] 'a @deva[द्रोण] is superior to a @deva[खारी]'; @deva[अधिका खारी द्रोणेन] 'a @deva[खारी] is inferior to a @deva[द्रोण]'. @deva[अध्यारूढ] governs either nominative or accusative.",
                "advanced": "The @deva[निपातन] @deva[अधिक] derives from @deva[अध्यारूढ] (= @deva[अधि] + @deva[आरूढ] 'surpassing') with irregular @deva[उत्तरपदलोप] before @deva[कन्]: @deva[अध्य्-आरूढ] → @deva[अधि] + @deva[क] → @deva[अधिक]. The comparative sense (@deva[अतिशय]) comes from the @deva[अध्यारूढ] semantics. The dual case-government (@deva[प्रथमा]//@deva[द्वितीया]) allows flexible syntactic constructions."
            }
        },
        "52074": {
            "en": {
                "simple": "The words @deva[अनुक], @deva[अभिक], and @deva[अभीक] are irregular formations meaning 'being at liberty/fond of'. @deva[अनुकामयते] → @deva[अनुकः] 'desirous'; @deva[अभिकामयते] → @deva[अभिकः]/अभीकः] 'lover'.",
                "standard": "The words @deva[अनुक], @deva[अभिक], and @deva[अभीक] are irregular (@deva[निपातन]) meaning @deva[स्वातन्त्र्य] 'being at liberty' or @deva[कामुकता] 'being fond of'. Examples: @deva[अनुकामयते] (desires freely) → @deva[अनुकः] 'desirous, libidinous'; @deva[अभिकामयते] (desires intensely) → @deva[अभिकः] or @deva[अभीकः] 'a lover, voluptuous person'.",
                "advanced": "The @deva[निपातन] forms @deva[अनुक], @deva[अभिक], @deva[अभीक] derive irregularly with @deva[कामयते]-related semantics. The @deva[अनु]//@deva[अभि] prefixes contribute directional nuance: @deva[अनु] = following/according to (free will); @deva[अभि] = towards (intense desire). The @deva[अभीक] variant shows @deva[दीर्घ] of @deva[इ]. All denote libidinal/volitional states."
            }
        },
        "52075": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[पार्श्व] 'side/crooked means' (instrumental) to mean 'one who strives to gain by that'. @deva[पार्श्वेन प्राप्नोति] → @deva[पार्श्वकः] 'a cheat, juggler'.",
                "standard": "After @deva[पार्श्व] 'side/flank' (= fraudulent/crooked expedient) in the instrumental, the affix @deva[कन्] denotes 'one who strives to gain something thereby'. @deva[पार्श्व] literally means 'rib, a crooked thing'; figuratively, 'a devious method'. Example: one who endeavors to obtain anything by fraud → @deva[पार्श्वकः] = @deva[मायाविन्] 'magician', @deva[कौसृतिकः] 'deceiver', @deva[जालिकः] 'juggler', or 'a partisan'.",
                "advanced": "The @deva[कन्]-affix with @deva[तेन प्राप्तुम् इच्छति]-meaning (striving to gain by X) applies to @deva[तृतीयान्त] @deva[पार्श्व]. The semantic extension: @deva[पार्श्व] 'side/flank' → 'oblique/devious means' → one using such means = @deva[पार्श्वक] (cheat/trickster/partisan). Glosses include @deva[मायाविन्], @deva[कौसृतिक], @deva[जालिक] — all denoting deceptive practitioners."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.2.61-75)")

if __name__ == "__main__":
    main()
