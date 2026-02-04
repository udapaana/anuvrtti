#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.2.91-105."""
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
        "52091": {
            "en": {
                "simple": "The affix @deva[इनि] comes after @deva[साक्षात्] 'directly' to mean 'a spectator/witness', when forming a name. @deva[साक्षात् द्रष्टा] → @deva[साक्षी] 'eye-witness'.",
                "standard": "After the indeclinable @deva[साक्षात्] 'directly/in person', the affix @deva[इनि] (= @deva[इन्]) denotes @deva[द्रष्टृ] 'one who sees', when forming a name (@deva[संज्ञायाम्]). Example: @deva[साक्षात् द्रष्टा] → @deva[साक्षी] (dual @deva[साक्षिणौ], plural @deva[साक्षिणः]) 'eye-witness'. In transactions like loans, three persons directly see: the giver, taker, and observer — all may be called @deva[द्रष्टृ], but @deva[साक्षिन्] specifically names the witness.",
                "advanced": "The @deva[इनि]-affix with @deva[द्रष्टृ]-meaning applies to the @deva[अव्यय] @deva[साक्षात्] in @deva[संज्ञा] (naming) context. The word @deva[संज्ञा] restricts the derivation to proper designation (legal/formal witness), not casual seeing. The @deva[साक्षात्] + @deva[इनि] → @deva[साक्षिन्] formation is lexicalized for 'witness' in legal/testimonial contexts."
            }
        },
        "52092": {
            "en": {
                "simple": "The word @deva[क्षेत्रिय] is irregularly formed, meaning 'curable in another body' = 'incurable in this life'. @deva[क्षेत्रियो व्याधिः] 'an incurable disease'.",
                "standard": "The word @deva[क्षेत्रिय] (with acute accent on last syllable) is an irregular formation (@deva[निपातन]) meaning @deva[परक्षेत्रे चिकित्स्य] 'curable in another body' = incurable in this life. It may be formed by adding @deva[घच्] to @deva[परक्षेत्र] 'another body' (with @deva[पर]-elision). Example: @deva[क्षेत्रियो व्याधिः] 'incurable disease' — one that cannot be cured in this body/lifetime.",
                "advanced": "The @deva[निपातन] @deva[क्षेत्रिय] has disputed derivation: either (1) whole-word listing with meaning @deva[परक्षेत्रे चिकित्स्य], or (2) @deva[परक्षेत्र] + @deva[घच्] (= @deva[य]) with @deva[पर-लोप]. The @deva[अन्तोदात्त] accent distinguishes it. The medical-philosophical meaning: disease whose karmic cure requires another birth/body."
            }
        },
        "52093": {
            "en": {
                "simple": "The word @deva[इन्द्रिय] (with final acute accent) is irregularly formed, meaning 'organ of sense'. Multiple etymologies exist involving @deva[इन्द्र]: inferred from, seen by, created by, wished by, or given by @deva[इन्द्र].",
                "standard": "The word @deva[इन्द्रिय] (with @deva[उदात्त] on final syllable) is an irregular formation (@deva[निपातन]) meaning 'organ of sense' (eyes, ears, etc.). Its derivation is obscure, with multiple proposed etymologies: (1) @deva[इन्द्रलिङ्ग] — characteristic from which @deva[इन्द्र]'s existence is inferred; (2) @deva[इन्द्रदृष्ट] — seen by @deva[इन्द्र]; (3) @deva[इन्द्रसृष्ट] — created by @deva[इन्द्र]; (4) @deva[इन्द्रइष्ट] — wished by @deva[इन्द्र]; (5) @deva[इन्द्रदत्त] — given by @deva[इन्द्र].",
                "advanced": "The @deva[निपातन] @deva[इन्द्रिय] with @deva[अन्तोदात्त] accent is a primitive term for sense-organs. Five etymological interpretations are offered: @deva[लिङ्ग] (inferential mark of @deva[इन्द्र]/soul), @deva[दृष्ट/सृष्ट/इष्ट/दत्त] (seen/created/wished/given by @deva[इन्द्र]). None is derivationally transparent; the word functions as @deva[रूढि] (conventional designation) in philosophical and medical contexts."
            }
        },
        "52094": {
            "en": {
                "simple": "The affix @deva[मतुप्] comes after nominative words to mean 'whose it is' or 'in whom it is'. @deva[गावः अस्य सन्ति] → @deva[गोमान्] 'having cows'; @deva[वृक्षाः अस्मिन् सन्ति] → @deva[वृक्षवान्] 'having trees'.",
                "standard": "After a word in the nominative, the affix @deva[मतुप्] denotes @deva[तदस्यास्ति] 'whose this is' or @deva[तदस्मिन्नस्ति] 'in whom this is'. Examples: @deva[गावः अस्य सन्ति] → @deva[गोमत्] (nom. @deva[गोमान्]) 'having cows'; @deva[वृक्षाः अस्मिन् सन्ति] → @deva[वृक्षवत्] (nom. @deva[वृक्षवान्], with @deva[म्] → @deva[व्] by @ref[8.2.9]) 'having trees' (describing a mountain). Similarly: @deva[यवमान्], @deva[प्लक्षमान्]. The @deva[इति] indicates these two senses specifically.",
                "advanced": "The @deva[मतुप्]-affix (@deva[तद्धित]) applies to @deva[प्रथमान्त] bases with possessive meaning: @deva[तदस्यास्ति] (ownership: 'his cows') or @deva[तदस्मिन्नस्ति] (location: 'trees in it'). The @deva[म्] → @deva[व्] change after non-@deva[अ] stems follows @ref[8.2.9]. The @deva[इति] in @deva[तदस्यास्त्यस्मिन्निति] delimits the semantic range to these two relational meanings."
            }
        },
        "52095": {
            "en": {
                "simple": "The affix @deva[मतुप्] comes after @deva[रस] 'taste/essence' and similar words with possessive meaning. @deva[रसवान्] 'having taste', @deva[रूपवान्] 'having form', @deva[गन्धवान्] 'having smell'.",
                "standard": "After @deva[रस] and similar words (@deva[रसादि]), the affix @deva[मतुप्] comes with possessive meaning. Examples: @deva[रसवान्] 'having taste/flavor', @deva[रूपवान्] 'having form/beauty', @deva[गन्धवान्] 'having smell/fragrance'. Why this special @[sūtra] when @deva[मतुप्] applies generally? To prevent other @deva[मतुप्]-sense affixes from applying to these words. However, @deva[रूपिणी कन्या], @deva[रूपिकः दारकः] do occur — these are rare/exceptional forms.",
                "advanced": "The @deva[रसादि] @deva[गण] receives @deva[मतुप्] by this specific rule to create @deva[नियम] (restriction): other @deva[मतुप्]-@deva[अर्थक] affixes (@deva[इनि], @deva[ठन्], etc.) are blocked. The attested @deva[रूपिन्], @deva[रूपिक] forms are explained as @deva[अप्रसिद्ध] (rare) or @deva[अन्यार्थ] (different meaning). The @deva[गण] includes sensory-quality terms: @deva[रस], @deva[रूप], @deva[गन्ध], etc."
            }
        },
        "52096": {
            "en": {
                "simple": "The affix @deva[लच्] optionally comes after long @deva[आ]-ending stems (denoting something found in living beings) with @deva[मतुप्]-sense. @deva[चूडा] → @deva[चूडालः] or @deva[चूडावान्] 'having a crest'.",
                "standard": "After stems ending in long @deva[आ], when the word denotes something found only in living beings (@deva[प्राणिनि]), the affix @deva[लच्] (= @deva[ल]) optionally comes with @deva[मतुप्]-sense. Examples: @deva[चूडा] 'crest' → @deva[चूडालः] or @deva[चूडावान्] 'having a crest'; @deva[कर्णिका] → @deva[कर्णिकालः] or @deva[कर्णिकावान्]. Why 'in living beings'? @deva[शिखावान् प्रदीपः] 'crested lamp-flame' — no @deva[लच्]. Why '@deva[आ]-ending'? @deva[हस्तवान्], @deva[पादवान्] — only @deva[मतुप्].",
                "advanced": "The @deva[लच्]-@deva[विकल्प] for @deva[आकारान्त] stems is conditioned by @deva[प्राणिधर्म] (attribute of animate beings): @deva[चूडा], @deva[कर्णिका] qualify; @deva[शिखा] (flame-crest, inanimate) does not. The @deva[आकारान्त] restriction excludes @deva[हस्त], @deva[पाद] (consonant-final). A @deva[वार्त्तिक] may extend the rule."
            }
        },
        "52097": {
            "en": {
                "simple": "The affix @deva[लच्] comes after @deva[सिध्म]-class words with @deva[मतुप्]-sense; @deva[मतुप्] is also optional. @deva[सिध्मलः] or @deva[सिध्मवान्] 'having white leprosy'; @deva[गडुलः] or @deva[गडुवान्] 'having goiter'.",
                "standard": "After @deva[सिध्म] and similar words (@deva[सिध्मादि]), the affix @deva[लच्] (= @deva[ल]) comes with @deva[मतुप्]-sense; @deva[मतुप्] itself is also available alternatively. The @deva[अन्यतरस्याम्] understood in this @[sūtra] causes @deva[मतुप्] as the alternative (not making @deva[लच्] itself optional). Examples: @deva[सिध्मलः] or @deva[सिध्मवान्] 'having white leprosy'; @deva[गडुलः] or @deva[गडुवान्] 'having goiter'. If @deva[लच्] were simply optional, @deva[इनि] and @deva[ठन्] would apply by @ref[5.2.115].",
                "advanced": "The @deva[लच्]//@deva[मतुप्] alternation for @deva[सिध्मादि] is structured: @deva[लच्] is prescribed, @deva[मतुप्] is the @deva[विकल्प] (not @deva[लच्] being optional). This prevents @deva[इनि]//@deva[ठन्] (from @ref[5.2.115]) from applying when @deva[लच्] is 'declined'. The @deva[गण] includes disease/defect terms: @deva[सिध्म] (leucoderma), @deva[गडु] (goiter), etc."
            }
        },
        "52098": {
            "en": {
                "simple": "The affix @deva[लच्] comes after @deva[वत्स] 'calf' meaning 'love' and after @deva[अंस] 'shoulder' meaning 'strength'. @deva[वत्सलः] 'loving/tender'; @deva[अंसलः] 'strong/lusty'.",
                "standard": "After @deva[वत्स] 'calf' and @deva[अंस] 'shoulder', the affix @deva[लच्] comes with meanings 'love' and 'strength' respectively. @deva[वत्सलः] 'loving the calf' → 'loving, tender' (applied to father, master: @deva[वत्सलः स्वामी], @deva[वत्सलः पिता]); @deva[अंसलः] 'having strong shoulders' → 'strong, lusty'. In these cases, @deva[लच्] has no @deva[मतुप्]-meaning but specialized senses.",
                "advanced": "The @deva[लच्]-affix after @deva[वत्स] and @deva[अंस] shows semantic specialization: @deva[वत्स] (calf) + @deva[ल] → @deva[वत्सल] 'affectionate' (extended beyond calf-love to general tenderness); @deva[अंस] (shoulder) + @deva[ल] → @deva[अंसल] 'strong' (metonymically from shoulder-strength). These are @deva[निपातनप्राय] (semi-irregular) with lexicalized meanings beyond literal @deva[मतुप्]-sense."
            }
        },
        "52099": {
            "en": {
                "simple": "The affixes @deva[इलच्] and @deva[लच्] come after @deva[फेन] 'foam' with @deva[मतुप्]-sense; @deva[मतुप्] is also optional. @deva[फेनिलः], @deva[फेनलः], or @deva[फेनवान्] 'foamy'.",
                "standard": "After @deva[फेन] 'foam/froth', both affixes @deva[इलच्] (= @deva[इल]) and @deva[लच्] (= @deva[ल]) come with @deva[मतुप्]-sense. The @deva[च्] draws in @deva[लच्], and @deva[अन्यतरस्याम्] understood adds @deva[मतुप्] as alternative. Examples: @deva[फेनिलः] (by @deva[इलच्]), @deva[फेनलः] (by @deva[लच्]), @deva[फेनवान्] (by @deva[मतुप्]) — all meaning 'foamy, frothy'.",
                "advanced": "The triple-option (@deva[इलच्], @deva[लच्], @deva[मतुप्]) for @deva[फेन] creates synonymous @deva[मत्वर्थीय] derivatives: @deva[फेनिल], @deva[फेनल], @deva[फेनवत्]. The @deva[च्]-@deva[अनुकर्षण] includes @deva[लच्]; the understood @deva[अन्यतरस्याम्] provides @deva[मतुप्]-alternative. All three mean 'having foam, foamy'."
            }
        },
        "52100": {
            "en": {
                "simple": "The affixes @deva[श], @deva[न], and @deva[इलच्] come after @deva[लोमादि], @deva[पामादि], and @deva[पिच्छादि] classes respectively with @deva[मतुप्]-sense; @deva[मतुप्] is also optional. @deva[लोमशः] 'hairy'; @deva[पामनः] 'scabby'; @deva[पिच्छिलः] 'slimy'.",
                "standard": "Three affixes with @deva[मतुप्]-sense apply to three word-classes respectively, with @deva[मतुप्] as alternative: (1) @deva[श] after @deva[लोमादि] → @deva[लोमशः] or @deva[लोमवान्] 'hairy'; (2) @deva[न] after @deva[पामादि] → @deva[पामनः] or @deva[पामवान्] 'scabby'; (3) @deva[इलच्] (= @deva[इल]) after @deva[पिच्छादि] → @deva[पिच्छिलः] or @deva[पिच्छवान्] 'slimy/feathery'.",
                "advanced": "The @deva[यथासंख्य] (sequential correspondence) principle applies: @deva[श] ↔ @deva[लोमादि], @deva[न] ↔ @deva[पामादि], @deva[इलच्] ↔ @deva[पिच्छादि]. Each @deva[गण] also permits @deva[मतुप्]-alternative. @deva[लोमादि] includes hair/fur terms; @deva[पामादि] includes skin-disease terms; @deva[पिच्छादि] includes texture/secretion terms."
            }
        },
        "52101": {
            "en": {
                "simple": "The affix @deva[ण्] comes after @deva[प्रज्ञा] 'wisdom', @deva[श्रद्धा] 'faith', and @deva[अर्चा] 'worship' with @deva[मतुप्]-sense; @deva[मतुप्] is also optional. @deva[प्राज्ञः] or @deva[प्रज्ञावान्] 'wise'.",
                "standard": "After @deva[प्रज्ञा] 'wisdom', @deva[श्रद्धा] 'faith', and @deva[अर्चा] 'worship', the affix @deva[ण्] (= @deva[अ] with @deva[वृद्धि]) comes with @deva[मतुप्]-sense, along with @deva[मतुप्] as alternative. Examples: @deva[प्राज्ञः] or @deva[प्रज्ञावान्] 'wise'; @deva[श्राद्धः] or @deva[श्रद्धावान्] 'faithful'; @deva[आर्चः] or @deva[अर्चावान्] 'worshipful'. Kāśikā includes @deva[वृत्ति] from the @deva[वार्त्तिक] @deva[वृत्तेश्च]: @deva[वार्त्तः] or @deva[वृत्तिमान्].",
                "advanced": "The @deva[ण्]-affix (with @deva[वृद्धि]: @deva[प्रज्ञा] → @deva[प्राज्ञ]) applies to the three-item domain plus @deva[वृत्ति] (per @deva[वार्त्तिक]). The @deva[मतुप्]-@deva[विकल्प] provides non-@deva[वृद्धि] alternatives. The @deva[ण्] vs @deva[मतुप्] choice affects morphophonology (@deva[प्राज्ञ] vs @deva[प्रज्ञावत्]) but not meaning."
            }
        },
        "52102": {
            "en": {
                "simple": "The affixes @deva[विनि] and @deva[इनि] come after @deva[तपस्] 'austerity' and @deva[सहस्र] 'thousand' respectively with @deva[मतुप्]-sense. @deva[तपस्विन्] 'ascetic'; @deva[सहस्रिन्] 'possessing a thousand'.",
                "standard": "After @deva[तपस्] and @deva[सहस्र], the affixes @deva[विनि] (= @deva[विन्]) and @deva[इनि] (= @deva[इन्]) come respectively with @deva[मतुप्]-sense. @deva[तपस्] (ending in @deva[अस्]) would take @deva[विनि] by @ref[5.2.121]; @deva[सहस्र] (ending in @deva[अ]) would take @deva[इनि] by @ref[5.2.115]. Why this @[sūtra]? Because the next @[sūtra] also prescribes @deva[अण्] for these words, and without this rule, they might take only @deva[अण्]. Examples: @deva[तपस्विन्] 'ascetic'; @deva[सहस्रिन्] 'having a thousand'.",
                "advanced": "The @deva[विनि]//@deva[इनि] prescription for @deva[तपस्]//@deva[सहस्र] is @deva[पर्युदास]-preventive: though these words would take these affixes by general rules (@ref[5.2.121], @ref[5.2.115]), stating them explicitly here preserves these options when @deva[अण्] is also introduced in @ref[5.2.103]. This creates genuine @deva[विकल्प] rather than @deva[अण्]-exclusivity."
            }
        },
        "52103": {
            "en": {
                "simple": "The affix @deva[अण्] also comes after @deva[तपस्] and @deva[सहस्र] with @deva[मतुप्]-sense. @deva[तापसः] 'ascetic'; @deva[साहस्रः] 'relating to a thousand'.",
                "standard": "After @deva[तपस्] and @deva[सहस्र], the affix @deva[अण्] (with @deva[वृद्धि]) also comes with @deva[मतुप्]-sense. Examples: @deva[तापसः] 'ascetic' (alongside @deva[तपस्विन्]); @deva[साहस्रः] 'possessing a thousand' (alongside @deva[सहस्रिन्]). This @[sūtra] is separated from the previous for two reasons: (1) @deva[अण्] continues into subsequent @[sūtra]s; (2) @deva[यथासंख्य] (@ref[1.3.10]) would have incorrectly applied if @deva[अण्] were in the previous @[sūtra]. @deva[वार्त्तिक]: @deva[ज्योत्स्ना] etc. also take @deva[अण्].",
                "advanced": "The separate statement of @deva[अण्] enables its @deva[अनुवृत्ति] into subsequent rules and avoids @deva[यथासंख्य]-misapplication (which would pair @deva[विनि] with @deva[तपस्] only, @deva[इनि] with @deva[सहस्र] only, @deva[अण्] with nothing). The @deva[वार्त्तिक] extends @deva[अण्] to @deva[ज्योत्स्नादि] words."
            }
        },
        "52104": {
            "en": {
                "simple": "The affix @deva[अण्] comes after @deva[सिकता] 'sand' and @deva[शर्करा] 'gravel' with @deva[मतुप्]-sense. @deva[सैकटो घटः] 'sandy pot'; @deva[शार्करं मधु] 'gravelly honey'.",
                "standard": "After @deva[सिकता] 'sand' and @deva[शर्करा] 'gravel/pebbles', the affix @deva[अण्] (with @deva[वृद्धि]) comes with @deva[मतुप्]-sense. Examples: @deva[सैकटो घटः] 'a pot (made of/containing) sand'; @deva[शार्करं मधु] 'honey (containing) gravel/crystals'. These examples are when the words do not denote a place. When denoting locality, they take @deva[इल्] with @deva[लुप्] (next @[sūtra]).",
                "advanced": "The @deva[अण्]-affix for @deva[सिकता]//@deva[शर्करा] with @deva[मतुप्]-sense applies in non-@deva[देशवाचक] (non-locality) contexts. The @deva[वृद्धि] yields @deva[सैकत], @deva[शार्कर]. The @deva[देश]-meaning triggers different affixal options per @ref[5.2.105]. @deva[शार्करं मधु] = crystallized/granulated honey."
            }
        },
        "52105": {
            "en": {
                "simple": "When meaning 'locality', the @deva[मतुप्]-affixes may undergo @deva[लुप्] (elision), or @deva[इलच्], @deva[अण्], and @deva[मतुप्] may apply, after @deva[सिकता] and @deva[शर्करा]. @deva[सिकताः अस्मिन्] → @deva[सिकता] (with @deva[लुप्]) or @deva[सिकतिलः] or @deva[सैकतः] or @deva[सिकतावान्].",
                "standard": "When denoting @deva[देश] 'locality/place', after @deva[सिकता] and @deva[शर्करा], either: (1) @deva[लुप्] (complete elision) of @deva[मतुप्]-sense affixes occurs (preserving gender/number), or (2) the affixes @deva[इलच्], @deva[अण्], and @deva[मतुप्] apply. The @deva[च्] introduces @deva[अण्] and @deva[मतुप्]. @deva[लुप्] refers to @deva[मतुप्] and all affixes generally. Example: @deva[सिकताः अस्मिन् विद्यन्ते] (sand is in this place) → @deva[सिकता] (@deva[लुप्]), @deva[सिकतिलः], @deva[सैकतः], or @deva[सिकतावान्] देशः].",
                "advanced": "The @deva[देशार्थ] (locality-meaning) context triggers @deva[बहुविकल्प] for @deva[सिकता]//@deva[शर्करा]: @deva[लुप्] (zero-derivation with @deva[लिङ्गसंख्यास्थिति]), @deva[इलच्], @deva[अण्], @deva[मतुप्]. The @deva[लुप्] option creates @deva[सिकता] as locational substantive ('sandy place'). The @deva[च्] enables @deva[अनुकर्षण] of @deva[अण्] and @deva[मतुप्] alongside @deva[इलच्]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.2.91-105)")

if __name__ == "__main__":
    main()
