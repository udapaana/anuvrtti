#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.3.31-45."""

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
        "53031": {
            "en": {
                "simple": "The words @deva[उपरि] (above) and @deva[उपरिष्टात्] (from above) are irregular formations from @deva[ऊर्ध्व] (upward). Examples: @deva[उपरि वसति] (lives above), @deva[उपरिष्टात् आगतः] (came from above).",
                "standard": "The words @deva[उपरि] and @deva[उपरिष्टात्] are @deva[निपातन] with @deva[अस्ताति]-sense. @deva[ऊर्ध्व] is replaced by @deva[उप], then affixes @deva[रिल्] and @deva[रिष्टातिल्] are added respectively. Examples: @deva[ऊर्ध्वायां दिशि वसति] = @deva[उपरि वसति]; @deva[उपर्यागतः]; @deva[उपरिष्टाद्वसति].",
                "advanced": "These are @deva[निपातन] forms with @deva[अस्ताति]-force. The derivation involves: @deva[ऊर्ध्व] → @deva[उप] (irregular substitution) + @deva[रिल्] → @deva[उपरि]; or @deva[उप] + @deva[रिष्टातिल्] → @deva[उपरिष्टात्]. Both express @deva[सप्तमी/पञ्चमी/प्रथमा] senses: @deva[उपरि वसति] (locative), @deva[उपर्यागतः] (ablative), @deva[उपरि रमणीयम्] (nominative)."
            }
        },
        "53032": {
            "en": {
                "simple": "The word @deva[पश्चात्] (behind, after, westward) is irregular. @deva[अपर] becomes @deva[पश्च], and the affix @deva[आति] is added. Example: @deva[अपरस्यां दिशि] = @deva[पश्चात्] (in the west).",
                "standard": "The word @deva[पश्चात्] is @deva[निपातन]: @deva[अपर] → @deva[पश्च] + @deva[आति] → @deva[पश्चात्]. Examples: @deva[पश्चाद्वसति] (lives westward), @deva[पश्चादागतः] (came from west). Vārttika: When @deva[अपर] is preceded by direction-words, the same change occurs: @deva[दक्षिणपश्चात्], @deva[उत्तरपश्चात्]. Also @deva[पश्चार्धः] (latter half).",
                "advanced": "This @deva[निपातन] teaches @deva[अपर] → @deva[पश्च] + @deva[आति] → @deva[पश्चात्] in @deva[अस्ताति]-sense. Three vārttikas extend this: (1) @deva[दिक्पूर्व अपर] → @deva[पश्च] + @deva[आति]: @deva[दक्षिणपश्चात्], @deva[उत्तरपश्चात्]; (2) with @deva[अर्ध] following: @deva[दक्षिणपश्चार्धः]; (3) @deva[अपर] alone before @deva[अर्ध]: @deva[पश्चार्धः] (western half / latter portion)."
            }
        },
        "53033": {
            "en": {
                "simple": "In Vedic usage, @deva[पश्च] and @deva[पश्चा] are irregular forms alongside @deva[पश्चात्], all meaning 'behind/after/westward.'",
                "standard": "In @deva[छन्दस्] (Vedic texts), @deva[पश्च] and @deva[पश्चा] are @deva[निपातन] with @deva[अस्ताति]-force. The @deva[चकार] includes @deva[पश्चात्]. Example: @deva[पुरा व्याघ्रो जायते, पश्च/पश्चा/पश्चात् सिंहः] 'first a tiger is born, then a lion.' Vedic: @deva[पश्चात् पुरस्तादधरादुदक्तात्] (Ṛg Veda X.87.21).",
                "advanced": "This @deva[छन्दस्] rule adds @deva[पश्च] and @deva[पश्चा] as @deva[निपातन] with @deva[अस्ताति]-sense. The @deva[चकार] draws in @deva[पश्चात्] from @ref[5.3.32]. Vedic attestations: @deva[पश्चात् पुरस्तादधरादुदक्तात्] (Ṛg Veda X.87.21); @deva[पश्चेदमन्यदभवद्यज्जात्रम्] (Ṛg Veda X.149.3). All three variants (@deva[पश्च], @deva[पश्चा], @deva[पश्चात्]) appear in Vedic texts."
            }
        },
        "53034": {
            "en": {
                "simple": "The affix @deva[अति] comes after @deva[उत्तर] (north) and @deva[दक्षिण] (south) with @deva[अस्ताति]-meaning. Examples: @deva[उत्तरात्] (northward/from north), @deva[दक्षिणात्] (southward/from south).",
                "standard": "The affix @deva[अति] (@deva[आत्]) attaches to @deva[उत्तर] and @deva[दक्षिण] in @deva[अस्ताति]-senses. Examples: @deva[उत्तरस्यां दिशि वसति] = @deva[उत्तराद्वसति]; @deva[उत्तरादागतः]; @deva[उत्तराद्रमणीयम्]. Similarly @deva[दक्षिणात्] and @deva[अधरात्].",
                "advanced": "The affix @deva[अति] applies to @deva[उत्तर] and @deva[दक्षिण] with @deva[अस्ताति]-force (@deva[दिक्/देश/काल] in @deva[सप्तमी/पञ्चमी/प्रथमा]). The affix becomes @deva[आत्] after vowel-final stems. Forms: @deva[उत्तरात्], @deva[दक्षिणात्], @deva[अधरात्] (the last by extension). These coexist with @deva[अतस्]-forms from @ref[5.3.28]."
            }
        },
        "53035": {
            "en": {
                "simple": "The affix @deva[एनप्] (becoming @deva[एन]) optionally comes after @deva[उत्तर] and @deva[दक्षिण] in locative/nominative sense (not ablative) when the reference is nearby. Examples: @deva[उत्तरेण वसति] (lives nearby to the north).",
                "standard": "The affix @deva[एनप्] (@deva[एन]) optionally comes after @deva[उत्तर] and @deva[दक्षिण] with locative or nominative (not ablative) force, when the location is not distant (@deva[अदूर]). Examples: @deva[उत्तरेण वसति] or @deva[उत्तराद्वसति] (lives nearby northward); but @deva[उत्तरादागतः] (came from north—ablative, so no @deva[एनप्]).",
                "advanced": "The affix @deva[एनप्] applies optionally after @deva[उत्तर]/deva[दक्षिण] under two conditions: (1) @deva[अदूर]—referent is not distant; (2) @deva[अपञ्चमी]—not ablative sense. The @deva[पकार] is for accent by @ref[3.1.4]. Some hold this is a general rule for all @deva[दिक्शब्द], yielding @deva[पूर्वेण ग्रामम्], @deva[अपरेण ग्रामम्] per @ref[2.3.31]. @deva[अपञ्चम्याः] governs through @ref[5.3.39]."
            }
        },
        "53036": {
            "en": {
                "simple": "The affix @deva[आच्] (becoming @deva[आ]) comes after @deva[दक्षिण] with @deva[अस्ताति]-meaning but not in ablative sense. Example: @deva[दक्षिणा वसति] (lives southward), but @deva[दक्षिणत आगतः] (came from south).",
                "standard": "The affix @deva[आच्] (@deva[आ]) attaches to @deva[दक्षिण] in @deva[अस्ताति]-sense excluding ablative (@deva[अपञ्चमी]). The @deva[अदूर] condition from @ref[5.3.35] does not apply here. Examples: @deva[दक्षिणा वसति] or @deva[दक्षिणा रमणीयम्]; but @deva[दक्षिणत आगतः] (ablative uses @deva[अतस्]).",
                "advanced": "The affix @deva[आच्] is conditioned by @deva[अपञ्चमी] but not @deva[अदूर]. The @deva[चकार] is not for accent (since @deva[आ] is @deva[उदात्त] by @ref[3.1.3]) but distinguishes this @deva[आ] from that of @ref[2.3.29]. By @ref[6.1.163], the @deva[च्] prevents confusion. Ablative uses @deva[अतसुच्]: @deva[दक्षिणत आगतः]."
            }
        },
        "53037": {
            "en": {
                "simple": "The affix @deva[आहि] comes after @deva[दक्षिण] when the reference is distant, alongside @deva[आच्]. Examples: @deva[दक्षिणाहि वसति] or @deva[दक्षिणा वसति] (lives far away in the south).",
                "standard": "The affix @deva[आहि] and @deva[आच्] come after @deva[दक्षिण] when the location is distant (@deva[दूर]). Examples: @deva[दक्षिणाहि वसति] or @deva[दक्षिणा वसति] (lives far southward). When not distant, @deva[दक्षिणतो वसति] applies. The @deva[अपञ्चमी] condition continues: @deva[दक्षिणत आगतः].",
                "advanced": "This teaches @deva[आहि] alongside @deva[आच्] after @deva[दक्षिण] specifically in @deva[दूर] (distant) contexts. The doublet @deva[दक्षिणाहि]/deva[दक्षिणा] occurs in locative/nominative senses only (@deva[अपञ्चमी] continues). For nearby references, other affixes (@deva[एनप्], @deva[अतसुच्]) apply. Ablative remains @deva[दक्षिणतः]."
            }
        },
        "53038": {
            "en": {
                "simple": "The affixes @deva[आच्] and @deva[आहि] come after @deva[उत्तर] (north) when the reference is distant. Examples: @deva[उत्तरा वसति] or @deva[उत्तराहि वसति] (lives far northward).",
                "standard": "The affixes @deva[आच्] (@deva[आ]) and @deva[आहि] come after @deva[उत्तर] in @deva[अस्ताति]-sense when the location is distant (@deva[दूर]). Examples: @deva[उत्तरा वसति] or @deva[उत्तराहि वसति] (lives far northward). When not distant: @deva[उत्तरेण प्रयाति]. Ablative: @deva[उत्तरादागतः].",
                "advanced": "This extends @deva[आच्]/deva[आहि] to @deva[उत्तर] under @deva[दूर] condition. The @deva[अपञ्चमी] condition from @ref[5.3.35] continues—ablative uses @deva[अति] (@ref[5.3.34]) or @deva[अतसुच्] (@ref[5.3.28]). For non-distant locations, @deva[एनप्] (@deva[उत्तरेण]) applies. This completes the special affixes for @deva[उत्तर]/deva[दक्षिण]."
            }
        },
        "53039": {
            "en": {
                "simple": "The affix @deva[असि] (becoming @deva[अस्]) comes after @deva[पूर्व], @deva[अधर], and @deva[अवर], which become @deva[पुर्], @deva[अध्], and @deva[अव्] respectively. Examples: @deva[पुरः] (in front), @deva[अधः] (below), @deva[अवः] (down).",
                "standard": "The affix @deva[असि] (@deva[अस्]) attaches to @deva[पूर्व], @deva[अधर], @deva[अवर] with stem substitutions: @deva[पूर्व] → @deva[पुर्]; @deva[अधर] → @deva[अध्]; @deva[अवर] → @deva[अव्]. The @deva[अपञ्चमी] restriction does not apply here. Examples: @deva[पुरो वसति], @deva[पुर आगतः]; @deva[अधो वसति], @deva[अध आगतः]; @deva[अवो वसति], @deva[अव आगतः].",
                "advanced": "The affix @deva[असि] applies to three bases with @deva[सर्वादेश]: @deva[पूर्व] → @deva[पुर्], @deva[अधर] → @deva[अध्], @deva[अवर] → @deva[अव्]. The @deva[अपञ्चम्याः] condition ceases here—all three case-senses (@deva[सप्तमी/पञ्चमी/प्रथमा]) apply. @deva[विसर्ग] appears before consonants: @deva[पुरो वसति]; @deva[अस्] before vowels: @deva[पुर आगतः]. Forms: @deva[पुरस्], @deva[अधस्], @deva[अवस्]."
            }
        },
        "53040": {
            "en": {
                "simple": "The same stem substitutions (@deva[पुर्], @deva[अध्], @deva[अव्]) occur when the affix @deva[अस्ताति] follows. Examples: @deva[पुरस्तात्] (in front), @deva[अधस्तात्] (below), @deva[अवस्तात्] (down).",
                "standard": "When @deva[अस्ताति] follows, the same substitutions apply: @deva[पूर्व] → @deva[पुर्], @deva[अधर] → @deva[अध्], @deva[अवर] → @deva[अव्]. This implies @deva[अस्ताति] is not blocked by @deva[असि]. Examples: @deva[पुरस्तात् वसति], @deva[पुरस्तादागतः]; @deva[अधस्तात्], @deva[अवस्तात्].",
                "advanced": "This sūtra confirms @deva[अस्ताति] (@ref[5.3.27]) coexists with @deva[असि] after these bases—@deva[असि] is not an exclusive @deva[अपवाद]. The substitutions @deva[पुर्]/deva[अध्]/deva[अव्] apply uniformly. @deva[जञापक]: the need to state this implies both affixes are valid options. Forms: @deva[पुरस्तात्]/deva[पुरस्], @deva[अधस्तात्]/deva[अधस्], @deva[अवस्तात्]/deva[अवस्]."
            }
        },
        "53041": {
            "en": {
                "simple": "The substitution of @deva[अव्] for @deva[अवर] is optional when @deva[अस्ताति] follows. So both @deva[अवस्तात्] and @deva[अवरस्तात्] are correct.",
                "standard": "The @deva[अव्]-substitution for @deva[अवर] is optional (@deva[विकल्प]) before @deva[अस्ताति], creating doublets: @deva[अवस्तात्] ~ @deva[अवरस्तात्]. Examples: @deva[अवस्तात् वसति] or @deva[अवरस्तात् वसति]; similarly with @deva[आगतः], @deva[रमणीयम्].",
                "advanced": "This @deva[विकल्प] rule overrides the obligatory substitution implied by @ref[5.3.40]. For @deva[अवर] specifically, both @deva[अव्] and the unchanged @deva[अवर] are valid before @deva[अस्ताति]. Note @deva[पूर्व] → @deva[पुर्] and @deva[अधर] → @deva[अध्] remain obligatory. Doublet: @deva[अवस्तात्]/deva[अवरस्तात्]."
            }
        },
        "53042": {
            "en": {
                "simple": "The affix @deva[धा] comes after numeral stems to express manner or way of doing something. Examples: @deva[एकधा] (in one way), @deva[द्विधा] (in two ways), @deva[त्रिधा] (in three ways).",
                "standard": "The affix @deva[धा] attaches to @deva[संख्या] (numeral) stems to express @deva[विधा] (manner/mode of action). The resulting adverbs apply to any action. Examples: @deva[एकधा भुङ्क्ते] (eats once/in one way); @deva[द्विधा गच्छति] (goes in two ways); @deva[त्रिधा], @deva[चतुर्धा], @deva[पञ्चधा].",
                "advanced": "The affix @deva[धा] applies to @deva[संख्यावाचक प्रातिपदिक] (numeral stems) in @deva[विधार्थ] (manner-meaning). @deva[विधा] = @deva[प्रकार] (mode/way). These become @deva[क्रियाविशेषण] (adverbs) applicable to all verbs. Unlike @deva[थाल्] (@ref[5.3.23]) which applies to pronouns, @deva[धा] is specifically for numerals."
            }
        },
        "53043": {
            "en": {
                "simple": "The affix @deva[धा] also comes after numerals to express division or distribution of things. Example: @deva[पञ्चधा कुरु] (divide into five parts).",
                "standard": "The affix @deva[धा] attaches to numerals when expressing @deva[अधिकरणविचाल] (change in distribution/apportionment of substances). This means dividing one into many or combining many into one. Examples: @deva[एकं राशिं पञ्चधा कुरु] (divide one heap into five); @deva[अनेकमेकधा कुरु] (make many into one).",
                "advanced": "The affix @deva[धा] here applies in @deva[अधिकरणविचाल] sense—redistribution of @deva[द्रव्य] (substance/matter). @deva[विचाल] = change in number/arrangement. This is distinct from @deva[विधार्थ] (manner) of @ref[5.3.42]. Examples: @deva[पञ्चधा राशिं कुरु] (divide heap into five); @deva[अष्टधा कुरु] (into eight)."
            }
        },
        "53044": {
            "en": {
                "simple": "After @deva[एक] (one), the substitute @deva[ऐकध्य] optionally replaces @deva[धा]. So both @deva[एकधा] and @deva[ऐकध्यम्] mean 'in one way' or 'into one.'",
                "standard": "After @deva[एक], the form @deva[ऐकध्य] optionally replaces @deva[एकधा] in both @deva[विधार्थ] and @deva[अधिकरणविचाल] senses. The repetition of @deva[धा] in the sūtra indicates both meanings apply. Examples: @deva[एकधा भुङ्क्ते] or @deva[ऐकध्यं भुङ्क्ते]; @deva[एकधा कुरु] or @deva[ऐकध्यं कुरु].",
                "advanced": "The substitute @deva[ऐकध्य] involves @deva[वृद्धि] of @deva[एक] → @deva[ऐक] + modified @deva[धा] → @deva[ध्य]. The repetition @deva[धा धा] in the sūtra signals both @deva[विधार्थ] (@ref[5.3.42]) and @deva[अधिकरणविचाल] (@ref[5.3.43]) contexts accept this substitution. Without repetition, only @deva[अधिकरणविचाल] (immediately preceding) would apply."
            }
        },
        "53045": {
            "en": {
                "simple": "After @deva[द्वि] (two) and @deva[त्रि] (three), the substitute @deva[धमुञ्] optionally replaces @deva[धा]. Examples: @deva[द्विधा] or @deva[द्वैधम्]; @deva[त्रिधा] or @deva[त्रैधम्].",
                "standard": "The substitute @deva[धमुञ्] (@deva[धम्] with @deva[वृद्धि]) optionally replaces @deva[धा] after @deva[द्वि] and @deva[त्रि] in both @deva[विधार्थ] and @deva[अधिकरणविचाल] senses. The @deva[चकार] draws in @deva[विकल्प]. Forms: @deva[द्विधा] ~ @deva[द्वैधम्]; @deva[त्रिधा] ~ @deva[त्रैधम्]. Vārttika: @deva[ड]-affix (@deva[अ]) yields @deva[द्वैध], @deva[त्रैध] as adjectives.",
                "advanced": "The @deva[धमुञ्] substitute triggers @deva[वृद्धि]: @deva[द्वि] → @deva[द्वै] + @deva[धम्] → @deva[द्वैधम्]; @deva[त्रि] → @deva[त्रै] + @deva[धम्] → @deva[त्रैधम्]. Both @deva[विधार्थ] and @deva[अधिकरणविचाल] apply (like @ref[5.3.44]). Vārttika adds @deva[ड] (@deva[अ]) after @deva[धमुञ्]-ending words for @deva[स्वार्थ]: @deva[द्वैध], @deva[त्रैध] (as in @deva[पथि द्वैधानि संश्रयन्ते])."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.3.31-45)")

if __name__ == "__main__":
    main()
