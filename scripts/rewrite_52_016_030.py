#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.2.16-30."""
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
        "52016": {
            "en": {
                "simple": "The affixes @deva[यत्] and @deva[ख] come after @deva[अध्वन्] 'road/journey' to mean 'one fit to travel'. @deva[अध्वानम् अलं गामी] → @deva[अध्वन्यः] or @deva[अध्वनीनः] 'able to undertake a journey'.",
                "standard": "After @deva[अध्वन्] 'road/journey', both @deva[यत्] and @deva[ख] denote 'one who is fit or able to follow/travel'. Examples: @deva[अध्वानम् अलं गामी] → @deva[अध्वन्यः] (by @deva[यत्]) or @deva[अध्वनीनः] (by @deva[ख]). By @ref[6.4.168-169], the word @deva[अध्वन्] retains its full form before @deva[य] and @deva[ख], not losing final @deva[अन्] as it would before other affixes (per @ref[6.4.144]).",
                "advanced": "The @deva[यत्]//@deva[ख] affixes apply to @deva[अध्वन्] with @deva[गमनयोग्यता]-meaning. The @deva[अनकारस्थिति] (retention of @deva[अन्]) is governed by @ref[6.4.168-169], creating an exception to the general @deva[अनुदात्तोपदेशवनतितनोत्यादीनाम्] @deva[अनलोप] of @ref[6.4.144]. This yields @deva[अध्वन्य] and @deva[अध्वनीन] rather than *@deva[अध्व्य], *@deva[अध्वीन]."
            }
        },
        "52017": {
            "en": {
                "simple": "The affixes @deva[छ], @deva[यत्], and @deva[ख] come after @deva[अभ्यमित्र] to mean 'one able to advance against enemies'. @deva[अभ्यमित्रम् अलं गामी] → @deva[अभ्यमित्रीयः], @deva[अभ्यमित्र्यः], or @deva[अभ्यमित्रीणः] 'a valiant warrior'.",
                "standard": "After @deva[अभ्यमित्र] 'towards the enemy' (= @deva[अमित्राभिमुखम्]), three affixes @deva[छ] (= @deva[ईय]), @deva[यत्] (= @deva[य]), and @deva[ख] (= @deva[ईन]) denote 'one able to go/advance'. The @deva[च्] in the @[sūtra] draws in @deva[यत्] and @deva[ख] from previous rules. Examples: @deva[अभ्यमित्रं सुष्ठु गच्छति अलं गामी] → @deva[अभ्यमित्रीयः], @deva[अभ्यमित्र्यः], @deva[अभ्यमित्रीणः] 'a warrior who valiantly encounters his enemy'.",
                "advanced": "The triple-affix prescription (@deva[छ], @deva[यत्], @deva[ख]) for @deva[अभ्यमित्र] (@deva[अव्ययीभाव]: @deva[अभि] + @deva[अमित्र]) creates three synonymous derivatives denoting martial valor. The @deva[च्]-particle functions as @deva[अनुकर्षण] (drawing in) for the preceding affixes. The semantic frame @deva[अमित्राभिमुखं सुष्ठु गच्छति] highlights bold advance against enemies."
            }
        },
        "52018": {
            "en": {
                "simple": "The affix @deva[खञ्] comes after @deva[गोष्ठ] 'cow-pen' to mean 'it formerly had been (a cow-pen)'. @deva[गोष्ठो भूतपूर्वः] → @deva[गौष्ठीनो देशः] 'a place that was formerly a cow-pen'.",
                "standard": "After @deva[गोष्ठ] 'cow-pen' (compound of @deva[गो] + @deva[स्था], the area around a cow-pen), the affix @deva[खञ्] denotes @deva[भूतपूर्व] 'it formerly had been'. Example: @deva[गोष्ठो भूतपूर्वः] → @deva[गौष्ठीनो देशः] 'a place which was formerly a @deva[गोष्ठ]'. When not meaning 'formerly', one simply says @deva[गोष्ठो वर्तते] 'it is a cow-pen'.",
                "advanced": "The @deva[खञ्]-affix with @deva[भूतपूर्व]-meaning (former state) applies specifically to @deva[गोष्ठ] (< @deva[गो] + @deva[स्था], 'cow-station'). The @deva[वृद्धि] yields @deva[गौष्ठीन]. This specialized temporal-semantic application distinguishes past-state description from present-state predication; the latter uses simple @deva[वर्तते] without derivation."
            }
        },
        "52019": {
            "en": {
                "simple": "The affix @deva[खञ्] comes after @deva[अश्व] 'horse' (genitive) to mean 'what can be traversed in one day by horse'. @deva[अश्वस्य एकाहगमः अध्वा] → @deva[आश्वीनः] 'a day's horse-journey'.",
                "standard": "After @deva[अश्व] 'horse' in the genitive, the affix @deva[खञ्] denotes @deva[एकाहगम] 'what is traversed in one day'. The genitive @deva[अश्वस्य] shows the required construction. @deva[एकाहगम] = @deva[एकाहेन गम्यते] 'gone over in one day'. Example: @deva[अश्वस्य एकाहगमो अध्वा] → @deva[आश्वीनः] 'a horse's one-day journey distance'. Usage: @deva[आश्वीनानि शतं पतित्वा] 'having flown a hundred horse-day units' = the number of @deva[योजन] traversable in one day.",
                "advanced": "The @deva[खञ्]-affix applies to @deva[षष्ठ्यन्त] @deva[अश्व] with the specialized @deva[एकाहगम]-meaning (single-day traversal). The derived @deva[आश्वीन] functions as a distance-measure (@deva[अध्वमान]) calibrated by equine travel capacity. The @deva[वृद्धि] produces @deva[आश्वीन], used substantively for 'one day's horse-journey' in distance calculations."
            }
        },
        "52020": {
            "en": {
                "simple": "The words @deva[शालीन] 'modest' and @deva[कौपीन] 'shameful act/loincloth' are irregularly formed from @deva[शाला] 'hall' and @deva[कूप] 'well'.",
                "standard": "The words @deva[शालीन] and @deva[कौपीन] are irregular formations (@deva[निपातन]). @deva[शालीन] (from @deva[शाला] 'hall') means @deva[अधृष्ट] 'not proud, modest' — perhaps 'one worthy of entering a hall' (@deva[शालाप्रवेशम् अर्हति]). @deva[कौपीन] (from @deva[कूप] 'well') means @deva[अकार्यम्] 'an unfit/shameful act' — or a loincloth. The semantic connections between base and meaning are not transparent.",
                "advanced": "Both @deva[शालीन] and @deva[कौपीन] are @deva[निपातित] (listed as irregular). The @deva[खञ्]-like derivation from @deva[शाला] and @deva[कूप] yields forms whose meanings (@deva[अधृष्ट] 'modest', @deva[अकार्य] 'shameful') lack clear etymological motivation. Proposed explanations (@deva[शालाप्रवेशार्ह], @deva[कूपावतारार्ह]) are post-hoc rationalizations. @deva[कौपीन] also denotes a loincloth in later usage."
            }
        },
        "52021": {
            "en": {
                "simple": "The affix @deva[खञ्] comes after @deva[व्रात] 'a mixed-caste group' (instrumental) to mean 'one who lives by this'. @deva[व्रातेन जीवति] → @deva[व्रातीनः] 'one who lives by manual labor'.",
                "standard": "After @deva[व्रात] 'a multitude of mixed castes' (instrumental), the affix @deva[खञ्] denotes 'one who leads this life/lives by this'. The word @deva[व्रात] refers to a group composed of various castes without fixed employment, living by violence or bodily labor. Example: @deva[व्रातेन जीवति] → @deva[व्रातीनः] 'a person who lives by bodily labor (not intellectual work)'.",
                "advanced": "The @deva[खञ्]-affix with @deva[तेन जीवति]-meaning applies to @deva[तृतीयान्त] @deva[व्रात]. The @deva[व्रात] denotes a social aggregate (@deva[वर्णसंकर]) without hereditary occupation, sustaining through physical labor or quasi-mercenary activity. The derived @deva[व्रातीन] characterizes livelihood-mode as distinguished from @deva[बुद्धिजीविन्] (intellectual workers)."
            }
        },
        "52022": {
            "en": {
                "simple": "The word @deva[साप्तपदीन] is irregular, meaning 'friendship'. It derives from @deva[सप्तपद] 'seven steps'. @deva[सप्तभिः पदैः अवाप्यते] → @deva[साप्तपदीनम्] 'formed by walking seven steps together'.",
                "standard": "The word @deva[साप्तपदीन] is an irregular formation (@deva[निपातन]) meaning 'friendship' (@deva[मैत्री]). It derives from @deva[सप्तपद] 'seven steps'. The explanation: @deva[सप्तभिः पदैः अवाप्यते] 'attained by (walking) seven steps' → @deva[साप्तपदीनम्]. This may relate to the marriage ritual where bride and groom circumambulate the sacred fire in seven steps (@deva[सप्तपदी]), making the marriage irrevocable and establishing permanent friendship.",
                "advanced": "The @deva[निपातन] @deva[साप्तपदीन] (from @deva[सप्तपद] with @deva[खञ्]-like derivation and @deva[वृद्धि]) denotes @deva[मैत्री] (friendship/alliance). The etymological gloss @deva[सप्तपदैः अवाप्यते] connects to the Vedic marriage rite @deva[सप्तपदी] (seven-step circumambulation around @deva[अग्नि]), which creates indissoluble bonds. The semantic extension from ritual to general friendship is culturally grounded."
            }
        },
        "52023": {
            "en": {
                "simple": "The word @deva[हैयंगवीन] is irregular, meaning 'fresh butter'. It derives from @deva[ह्यस्] 'yesterday' and @deva[गो] 'cow'. @deva[ह्यो गोदोहस्य विकारः] 'a product of yesterday's milking' → @deva[हैयंगवीनम्].",
                "standard": "The word @deva[हैयंगवीन] is an irregular formation (@deva[निपातन]) meaning 'fresh butter'. It comes from @deva[ह्यस्] 'yesterday' + @deva[गो] 'cow': @deva[ह्यो गोदोहस्य विकारः] 'prepared from yesterday's milk' → @deva[हैयंगवीनम्] 'fresh butter'. The affix does not apply to any general @deva[विकार] (derivative product). When meaning @deva[उदश्चित्] 'whey', there is no such derivation.",
                "advanced": "The @deva[निपातन] @deva[हैयंगवीन] shows complex irregular formation from @deva[ह्यस्] (yesterday) + @deva[गो] (cow) with @deva[वृद्धि] and @deva[ख]-like suffixation. The meaning 'fresh butter' (@deva[नवनीत]) specifies @deva[विकार] from previous day's milking. The scope restriction excludes @deva[उदश्चित्] (whey/buttermilk), which uses other expressions. The form exemplifies @deva[आख्यातनिबन्धन] derivation."
            }
        },
        "52024": {
            "en": {
                "simple": "The affix @deva[कुणप्] means 'ripening season' after @deva[पीलु]-class words. The affix @deva[जाहच्] means 'root' after @deva[कर्ण]-class words. @deva[पीलूनां पाकः] → @deva[पीलुकुणः]; @deva[कर्णस्य मूलम्] → @deva[कर्णजाहम्].",
                "standard": "Two affixes with distinct meanings: (1) @deva[कुणप्] (= @deva[कुण]) comes after @deva[पीलु]-class words in the genitive, meaning @deva[पाक] 'ripening/fruiting season'; (2) @deva[जाहच्] (= @deva[जाह]) comes after @deva[कर्ण]-class words, meaning @deva[मूल] 'root'. Examples: @deva[पीलूनां पाकः] → @deva[पीलुकुणः] 'ripening season of @deva[पीलु] fruit'; @deva[कर्कन्धूनां पाकः] → @deva[कर्कन्धुकुणः]; @deva[कर्णस्य मूलम्] → @deva[कर्णजाहम्] 'root/base of the ear'.",
                "advanced": "Two specialized affixes: @deva[कुणप्] (→ @deva[कुण]) applies to @deva[पीलवादि] with @deva[पाक]-meaning (fruit-ripening season); @deva[जाहच्] (→ @deva[जाह]) applies to @deva[कर्णादि] with @deva[मूल]-meaning (root/base). The @deva[तस्य] indicates @deva[षष्ठी]-relation. These represent highly specialized semantic-affix pairings for botanical/anatomical terminology."
            }
        },
        "52025": {
            "en": {
                "simple": "The affix @deva[ति] comes after @deva[पक्ष] 'wing' (genitive) to mean 'the root of it'. @deva[पक्षस्य मूलम्] → @deva[पक्षतिः] 'the wing-joint/root'.",
                "standard": "After @deva[पक्ष] 'wing' in the genitive, the affix @deva[ति] denotes @deva[मूल] 'root'. Only @deva[मूल] from the previous @[sūtra] continues here, not @deva[पाक]. Example: @deva[पक्षस्य मूलम्] → @deva[पक्षतिः] 'the root/base of the wing'. This illustrates the principle @deva[क्वचित् एकदेशोऽपि अनुवर्तते] 'sometimes only a part of a rule continues' — an exceptional case of @deva[अनुवृत्ति].",
                "advanced": "The @deva[ति]-affix applies to @deva[षष्ठ्यन्त] @deva[पक्ष] with @deva[मूल]-meaning only (@deva[पाक] does not carry over). This partial @deva[अनुवृत्ति] exemplifies the maxim @deva[क्वचित् एकदेशोऽप्यनुवर्तते]: in exceptional cases, only a portion of interconnected terms from a prior rule continues. The derived @deva[पक्षति] denotes the anatomical wing-joint or wing-root in avian contexts."
            }
        },
        "52026": {
            "en": {
                "simple": "The affixes @deva[चुञ्चुप्] and @deva[चणप्] come after words in the instrumental to mean 'celebrated/known through this'. @deva[विद्यया वित्तः] → @deva[विद्याचुञ्चुः] or @deva[विद्याचणः] 'famous for learning'.",
                "standard": "After a word in the instrumental, the affixes @deva[चुञ्चुप्] (= @deva[चुञ्चु]) and @deva[चणप्] (= @deva[चण]) denote @deva[वित्त] 'celebrated/known/illustrious'. Examples: @deva[विद्यया वित्तः] → @deva[विद्याचुञ्चुः] or @deva[विद्याचणः] 'celebrated for learning'; @deva[केशैः वित्तः] → @deva[केशचणः] 'known for (beautiful) hair'. The initial @deva[च्] in these affixes is not @deva[इत्] (per @ref[1.3.7]).",
                "advanced": "The @deva[चुञ्चुप्]//@deva[चणप्] affixes apply to @deva[तृतीयान्त] bases with @deva[वित्त/प्रसिद्ध] meaning (fame/renown through X). The @deva[चकार] is @deva[अनित्] (not @deva[इत्]) per @ref[1.3.7], hence retained. These rare affixes create distinctive epithets: @deva[विद्याचुञ्चु]//@deva[विद्याचण] 'famed for knowledge', @deva[केशचण] 'renowned for hair'."
            }
        },
        "52027": {
            "en": {
                "simple": "The affix @deva[ना] comes after @deva[वि] to form @deva[विना] 'without'. The affix @deva[नाञ्] comes after @deva[नञ्] to form @deva[नाना] 'variously/separately'.",
                "standard": "Two affixes meaning 'not being together' (@deva[असंहति]): (1) @deva[ना] comes after @deva[वि] → @deva[विना] 'without, apart from'; (2) @deva[नाञ्] comes after @deva[नञ्] (the negative particle) → @deva[नाना] 'variously, severally, in different ways'. Both express separation or non-togetherness.",
                "advanced": "The @deva[ना]//@deva[नाञ्] affixes with @deva[असंहति]-meaning (non-aggregation) create two fundamental @deva[अव्यय] (indeclinables): @deva[वि] + @deva[ना] → @deva[विना] (privative 'without'); @deva[नञ्] + @deva[नाञ्] → @deva[नाना] (distributive 'variously/separately'). Both encode concepts of separation, distinction, or non-unity in different semantic registers."
            }
        },
        "52028": {
            "en": {
                "simple": "The affixes @deva[शालच्] and @deva[शङ्कटच्] come after @deva[वि] without changing the sense. @deva[वि] + @deva[शालच्] → @deva[विशाल] 'large'; @deva[वि] + @deva[शङ्कटच्] → @deva[विशङ्कट].",
                "standard": "After the prefix @deva[वि], the affixes @deva[शालच्] (= @deva[शाल]) and @deva[शङ्कटच्] (= @deva[शंकट]) come without changing the meaning. Examples: @deva[विगते शृङ्गे] (hornless) → @deva[विशालः], @deva[विशंकटः]. These may describe a cow (without horns). According to some, these words are adjectives meaning 'great, large' etc. There is no clear semantic connection between base and affix here.",
                "advanced": "The @deva[शालच्]//@deva[शङ्कटच्] affixes attach to @deva[वि] with @deva[अविशेष्यलिङ्ग] (no meaning-change). The gloss @deva[विगते शृङ्गे] (hornless) may explain original use for cattle. Alternative interpretation treats @deva[विशाल]//@deva[विशंकट] as general adjectives ('large/great'). The lack of transparent @deva[प्रकृत्यर्थ]-@deva[प्रत्ययार्थ] connection suggests @deva[रूढि] (conventionalized usage)."
            }
        },
        "52029": {
            "en": {
                "simple": "The affix @deva[कटच्] comes after @deva[सम्], @deva[प्रत्], @deva[उद्], and @deva[वि]. @deva[सम्] → @deva[संकटम्] 'narrow/difficult'; @deva[उद्] → @deva[उत्कटम्] 'excessive'; @deva[वि] → @deva[विकटम्] 'dreadful'.",
                "standard": "The affix @deva[कटच्] (= @deva[कट]) comes after @deva[सम्], @deva[प्रत्], @deva[उद्], and @deva[वि] (the @deva[च] draws in @deva[वि]). Examples: @deva[संकटम्] 'narrow passage/difficulty', @deva[प्रकटम्] 'manifest', @deva[उत्कटम्] 'excessive/intense', @deva[विकटम्] 'dreadful/hideous'. A @deva[वार्त्तिक] adds: @deva[कटच्] comes after @deva[अलाबु], @deva[तिल], @deva[उमा], @deva[भङ्गा] meaning 'dust thereof' → @deva[अलाबूकटम्], @deva[तिलकटम्], @deva[उमाकटम्], @deva[भंगाकटम्].",
                "advanced": "The @deva[कटच्]-affix applies to four @deva[उपसर्ग] bases: @deva[सम्], @deva[प्रत्], @deva[उद्], @deva[वि]. The @deva[च्]-particle enables @deva[अनुकर्षण] of @deva[वि] from @ref[5.2.28]. A @deva[वार्त्तिक] extends @deva[कटच्] to crop-terms (@deva[अलाबु] 'gourd', @deva[तिल] 'sesame', @deva[उमा] 'flax', @deva[भङ्गा] 'hemp') with @deva[रजस्]-meaning (dust/powder thereof)."
            }
        },
        "52030": {
            "en": {
                "simple": "The affixes @deva[कुटारच्] and @deva[कटच्] come after @deva[अव] 'down'. @deva[अव] → @deva[अवकुटारम्] or @deva[अवकटम्] 'downwards, very deep'.",
                "standard": "After @deva[अव] 'down/downward', both affixes @deva[कुटारच्] (= @deva[कुटार]) and @deva[कटच्] (= @deva[कट]) apply. Examples: @deva[अव] + @deva[कुटारच्] → @deva[अवकुटारम्]; @deva[अव] + @deva[कटच्] → @deva[अवकटम्]. Both mean 'downwards' or 'very deep'.",
                "advanced": "The dual-affix prescription (@deva[कुटारच्]//@deva[कटच्]) for @deva[अव] creates synonymous @deva[अव्यय]-forms @deva[अवकुटार] and @deva[अवकट], both denoting downward direction or depth. These are @deva[क्रियाविशेषण] (adverbial) forms intensifying the directional sense of @deva[अव]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.2.16-30)")

if __name__ == "__main__":
    main()
