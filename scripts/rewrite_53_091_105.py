#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.3.91-105."""

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
        "53091": {
            "en": {
                "simple": "The affix @deva[ष्टरच्] comes after @deva[वत्स] (calf), @deva[उक्षन्] (bull), @deva[अश्व] (horse), and @deva[ऋषभ] (bull) to express slenderness. Examples: @deva[वत्सतरः] (weaned calf), @deva[अश्वतरः] (mule).",
                "standard": "The affix @deva[ष्टरच्] (@deva[तर]) expresses @deva[तनुत्व] (slenderness) after @deva[वत्स], @deva[उक्षन्], @deva[अश्व], and @deva[ऋषभ]. The @deva[ह्रस्व] (smallness) meaning ceases. Examples: @deva[वत्सतरः] (weaned calf becoming slender); @deva[उक्षतरः] (slender bull in third stage); @deva[अश्वतरः] (mule—slender due to mixed parentage); @deva[वृषभतरः] (slender bull).",
                "advanced": "The @deva[तनुत्वार्थ] (slenderness meaning) replaces @deva[ह्रस्वार्थ] for these four words. @deva[वत्सतरः] = calf transitioning to second life-stage (becoming slender when weaned). @deva[अश्वतरः] = mule, explained as @deva[तस्य तनुत्वमन्यपितृकता] (slenderness from different sire). @deva[ष्टरच्] → @deva[तर] with feminine @deva[तरी]."
            }
        },
        "53092": {
            "en": {
                "simple": "The affix @deva[डतरच्] (becoming @deva[अतर]) comes after @deva[किम्], @deva[यद्], and @deva[तद्] when determining one out of two. The final syllables @deva[इम्] and @deva[अद्] are deleted. Examples: @deva[कतरः] (which of two), @deva[यतरः], @deva[ततरः].",
                "standard": "The affix @deva[डतरच्] (@deva[अतर]) attaches to @deva[किम्], @deva[यद्], and @deva[तद्] for @deva[निर्धारण] (specification/determination) of one from two. Final syllables are deleted. Examples: @deva[कतरो भवतोः कठः] (which of you two is a Kaṭha?); @deva[यतरो भवतोः देवदत्तः, ततर आगच्छतु] (whichever of you two is Devadatta, let him come).",
                "advanced": "This @deva[स्वार्थिक] affix expresses @deva[द्वयोर्निर्धारण] (specification from two). @deva[निर्धारण] = differentiation by @deva[जाति/क्रिया/गुण/संज्ञा]. @deva[ड्] triggers deletion of final @deva[इम्]/deva[अद्] by @ref[6.4.143]. Forms: @deva[किम्] → @deva[क] + @deva[तर] → @deva[कतर]; similarly @deva[यतर], @deva[ततर]. By @deva[महाविभाषा] (@ref[4.1.82]), sentences like @deva[को भवतोः] are also valid."
            }
        },
        "53093": {
            "en": {
                "simple": "The affix @deva[डतमच्] (becoming @deva[अतम]) optionally comes after @deva[किम्], @deva[यद्], and @deva[तद्] when determining one out of many, especially regarding caste. Examples: @deva[कतमः] (which of many), @deva[यतमः], @deva[ततमः].",
                "standard": "The affix @deva[डतमच्] (@deva[अतम]) optionally attaches to @deva[किम्], @deva[यद्], and @deva[तद्] for @deva[निर्धारण] (specification) of one from many when @deva[जाति] (caste/class) is questioned. Examples: @deva[कतमो भवतां कठः] (which of you all is a Kaṭha?). @deva[वा] indicates @deva[अकच्] also applies: @deva[यको भवतां कठः]. @deva[जातिपरिप्रश्न] applies to @deva[किम्] specifically.",
                "advanced": "This teaches @deva[डतमच्] for @deva[बहूनां निर्धारण] (specification from many) with @deva[जातिपरिप्रश्न] (caste-inquiry). @deva[विकल्प] allows @deva[अकच्]: @deva[यकः], @deva[तकः]. The @deva[जाति] condition applies to questioning (@deva[परिप्रश्न]) with @deva[किम्]; @deva[यद्]/deva[तद्] aren't interrogative but still take @deva[जाति]-sense. Some hold @deva[डतरच्] also applies per @ref[4.1.63] @deva[कतरकतमौ जातिपरिप्रश्ने]."
            }
        },
        "53094": {
            "en": {
                "simple": "According to Eastern grammarians, @deva[डतरच्] and @deva[डतमच्] also come after @deva[एक] (one) for specification. Examples: @deva[एकतरः] (one of two), @deva[एकतमः] (one of many).",
                "standard": "Per @deva[प्राचाम्] (Eastern grammarians), @deva[डतरच्] and @deva[डतमच्] also apply to @deva[एक] for specification: @deva[डतरच्] for one from two, @deva[डतमच्] for one from many. The @deva[जातिपरिप्रश्न] restriction doesn't apply here. Examples: @deva[एकतरो भवतोर्देवदत्तः] (one of you two is Devadatta); @deva[एकतमो भवतां देवदत्तः] (one of you all is Devadatta).",
                "advanced": "This extends @deva[डतरच्]/deva[डतमच्] to @deva[एक] per Eastern opinion. @deva[प्राचाम्] is @deva[पूजार्थ] (respectful citation) since @deva[वा] was already understood. The @deva[जातिपरिप्रश्न] condition from @ref[5.3.93] doesn't continue—this is a general rule for @deva[एक]. @deva[चकार] draws in @deva[डतरच्] alongside @deva[डतमच्]."
            }
        },
        "53095": {
            "en": {
                "simple": "The affix @deva[कन्] comes after a stem to express scoffing or derision. Examples: @deva[व्याकरणकः] (mere grammar—mockingly), @deva[याज्ञिक्यकः] (mere ritualism).",
                "standard": "The affix @deva[कन्] expresses @deva[हास्य] (scoffing, derision) after a stem. Used when knowledge produces pride worthy of mockery. Examples: @deva[व्याकरणकेन नाम त्वं गर्वितः] (you're proud just because you've read grammar!); @deva[याज्ञिक्यकेन नाम त्वं गर्वितः]. This mocks the subject of pride, not the person—@ref[5.3.74] handles personal contempt.",
                "advanced": "This @deva[हास्यार्थ] (derision) use of @deva[कन्] targets the source of unwarranted pride, not the person. Distinction: @deva[व्याकरणकः] mocks grammar as cause of pride; @deva[देवदत्तकः] (@ref[5.3.74]) mocks Devadatta himself. This concludes the @deva[क]-@deva[अधिकार] from @ref[5.3.70]."
            }
        },
        "53096": {
            "en": {
                "simple": "The affix @deva[कन्] means 'like this' (@deva[इव]) when expressing an imitation or replica. Examples: @deva[अश्वकः] (imitation horse—in wood or clay), @deva[उष्ट्रकः] (toy camel).",
                "standard": "The affix @deva[कन्] expresses @deva[प्रतिकृति] (imitation, replica) with the sense 'like this' (@deva[इव]). Examples: @deva[अश्व इवायमश्व प्रतिकृतिः] = @deva[अश्वकः] (imitation horse in wood/clay); @deva[उष्ट्रकः] (toy camel); @deva[गर्दभकः] (toy donkey). Not for natural resemblance: @deva[गौरिव गवयः] (gayal resembles cow—no affix).",
                "advanced": "This @deva[इवार्थ] use of @deva[कन्] is restricted to @deva[प्रतिकृति] (artificial imitation/replica), not natural resemblance. @deva[अश्वकः] = toy/model horse; distinct from a real horse resembling another. The restriction @deva[प्रतिकृतौ] excludes natural likenesses like @deva[गवय] (gayal) resembling @deva[गो] (cow)."
            }
        },
        "53097": {
            "en": {
                "simple": "The affix @deva[कन्] also means 'like this' when the whole word is a name (not an imitation). Examples: @deva[अश्वकः] (something named for resembling a horse), @deva[उष्ट्रकः].",
                "standard": "When @deva[प्रतिकृति] (imitation) is not meant but the word serves as a @deva[संज्ञा] (name), @deva[कन्] expresses @deva[सादृश्य] (resemblance). Examples: @deva[अश्वसदृशस्य संज्ञा] = @deva[अश्वकः] (something named for horse-like quality); @deva[उष्ट्रकः]; @deva[गर्दभकः]. These are names given due to resemblance, not artificial replicas.",
                "advanced": "This distinguishes @deva[संज्ञायाम्] use from @deva[प्रतिकृतौ] (@ref[5.3.96]). Here @deva[कन्] applies when the derivative becomes a @deva[संज्ञा] (proper designation) based on resemblance—not an artificial model. @deva[अश्वकः] here = 'something named for resembling a horse' (vs. 'toy horse' in previous sūtra)."
            }
        },
        "53098": {
            "en": {
                "simple": "When a human figure/effigy is meant, the affix @deva[कन्] is deleted (@deva[लुप्]), but the word retains its number and gender. Examples: @deva[चञ्चा] (straw-man effigy), @deva[दासी] (female servant figure).",
                "standard": "When an imitation of a human (@deva[मनुष्य]) is denoted, @deva[कन्] undergoes @deva[लुप्] (deletion) while the word retains its original @deva[लिङ्ग] (gender) and @deva[वचन] (number). Examples: @deva[चञ्चा] (straw-man—@deva[चञ्चेव मनुष्यः]); @deva[दासी] (servant-figure); @deva[खरकुटी]. For accent, see @ref[6.1.204].",
                "advanced": "This @deva[लुप्] rule deletes @deva[कन्] when @deva[मनुष्यप्रतिकृति] is meant. @deva[लुप्] differs from @deva[लुक्] in @deva[स्थानिवद्भाव] effects. The original @deva[लिङ्ग/वचन] is preserved: @deva[चञ्चा] (fem., like @deva[चञ्चा] 'chaff'). This may be seen as extending @ref[5.3.100]."
            }
        },
        "53099": {
            "en": {
                "simple": "The affix @deva[कन्] is also deleted when religious images are used as livelihood (but not sold). Examples: @deva[वासुदेवः] (idol of Vāsudeva), @deva[शिवः] (image of Śiva).",
                "standard": "When an image (@deva[प्रतिकृति]) is a means of livelihood (@deva[जीविका]) but not merchandise (@deva[अपण्य])—like religious idols exhibited door-to-door—@deva[कन्] undergoes @deva[लुप्]. Examples: @deva[वासुदेवः] (Vāsudeva idol), @deva[शिवः], @deva[स्कन्दः], @deva[विष्णुः], @deva[आदित्यः]. But when sold: @deva[हस्तिकान् विक्रीणीते] (sells elephant-figurines—@deva[कन्] retained).",
                "advanced": "The conditions are: (1) @deva[जीविका] (livelihood use); (2) @deva[अपण्य] (not sold). This covers religious images exhibited by certain brāhmaṇas for alms. @deva[पण्य] = bought/sold; @deva[अपण्य] = not commercially traded. When sold as merchandise, @deva[कन्] applies: @deva[हस्तिकान्], @deva[अश्वकान्], @deva[रथकान्]. This extends @ref[5.3.100]."
            }
        },
        "53100": {
            "en": {
                "simple": "After @deva[देवपथ] and similar words, @deva[कन्] is deleted when expressing imitation or as a name. This is an @deva[आकृतिगण] (open class). Examples: @deva[देवपथः] (path-like-sky), @deva[हंसपथः].",
                "standard": "After @deva[देवपथादि] (an @deva[आकृतिगण]), @deva[कन्] undergoes @deva[लुप्] in @deva[इव] (resemblance) and @deva[संज्ञा] (name) senses. The class includes: @deva[देवपथ], @deva[हंसपथ], @deva[वारिपथ], @deva[रथपथ], @deva[राजपथ], @deva[शतपथ], etc. Kārikā: @deva[लुप्] also applies to worshipped images, paintings, and flag-emblems: @deva[शिवः], @deva[विष्णुः] (gods); @deva[अर्जुनः], @deva[दुर्योधनः] (paintings); @deva[कपिः], @deva[गरुडः] (flag-emblems).",
                "advanced": "The @deva[देवपथादि] is @deva[आकृतिगण] (open/extensible class). Kārikā specifies three additional contexts for @deva[कन्-लोप]: (1) @deva[पूजनार्था अर्चाः] (worshipped images); (2) @deva[चित्रकर्म] (paintings); (3) @deva[ध्वज] (flag-emblems). Examples: @deva[शिवः] (Śiva image); @deva[अर्जुनः] (Arjuna painting); @deva[कपिध्वजः] (monkey-flag of Arjuna)."
            }
        },
        "53101": {
            "en": {
                "simple": "The affix @deva[ढञ्] comes after @deva[वस्ति] (bladder/abdomen) in the sense of 'like this.' Example: @deva[वास्तेयः] (like a bladder), feminine @deva[वास्तेयी].",
                "standard": "The affix @deva[ढञ्] (@deva[एय]) attaches to @deva[वस्ति] (bladder/abdomen) expressing @deva[इव] (resemblance). From this sūtra forward, affixes apply generally (not limited to images). Example: @deva[वस्तिरिव] = @deva[वास्तेयः] (bladder-like); feminine @deva[वास्तेयी].",
                "advanced": "This begins a series of @deva[इवार्थ] affixes for general resemblance (not @deva[प्रतिकृति]-specific). @deva[ढञ्] triggers @deva[वृद्धि]: @deva[वस्ति] → @deva[वास्त] + @deva[एय] → @deva[वास्तेय]. The @deva[ञ्] indicates @deva[ङीप्] for feminine: @deva[वास्तेयी]."
            }
        },
        "53102": {
            "en": {
                "simple": "The affix @deva[ढ] comes after @deva[शिला] (stone) in the sense of 'like this.' Example: @deva[शिलेयं दधिः] (curd hard as stone). Some also allow @deva[ढञ्]: @deva[शैलेयम्].",
                "standard": "The affix @deva[ढ] (@deva[एय]) attaches to @deva[शिला] (stone) expressing @deva[इव] (resemblance). Example: @deva[शिलेव] = @deva[शिलेयं दधिः] (curd hard as stone). According to some, @deva[ढञ्] also applies, yielding @deva[शैलेयम्] (with @deva[वृद्धि]).",
                "advanced": "The affix @deva[ढ] → @deva[एय] (no @deva[वृद्धि] since @deva[ञ्] is absent): @deva[शिला] + @deva[एय] → @deva[शिलेय]. Some authorities permit @deva[ढञ्] → @deva[शैलेय] (with @deva[वृद्धि]: @deva[शि] → @deva[शै]). Both express 'stone-like hardness.'"
            }
        },
        "53103": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[शाखा] and similar words in the sense of 'like this.' Examples: @deva[शाख्यः] (branch-like), @deva[मुख्यः] (chief/primary), @deva[जघन्यः] (hindmost).",
                "standard": "The affix @deva[यत्] (@deva[य]) attaches to @deva[शाखादि] words expressing @deva[इव] (resemblance). Examples: @deva[शाखेव] = @deva[शाख्यः]; @deva[मुख्यः] (by @ref[6.1.213]); @deva[जघन्यः]. The class includes: @deva[शाखा], @deva[मुख], @deva[जघन], @deva[शृङ्ग], @deva[मेघ], @deva[अभ्र], @deva[चरण], @deva[स्कन्ध], @deva[उरस्], @deva[शिरस्], @deva[अग्र], @deva[शरण].",
                "advanced": "The @deva[शाखादि] class takes @deva[यत्] in @deva[इवार्थ]. @deva[यत्] → @deva[य] with @deva[अन्तोदात्त]. @deva[मुख्य] by @ref[6.1.213] shows @deva[य]-treatment. The class items: @deva[शाखा] (branch), @deva[मुख] (face/chief), @deva[जघन] (hip/rear), @deva[शृङ्ग] (horn/peak), @deva[मेघ] (cloud), @deva[अभ्र] (cloud), @deva[चरण] (foot), @deva[स्कन्ध] (shoulder), @deva[उरस्] (chest), @deva[शिरस्] (head), @deva[अग्र] (front), @deva[शरण] (shelter)."
            }
        },
        "53104": {
            "en": {
                "simple": "The word @deva[द्रव्य] is an irregular formation meaning 'beautiful' or 'excellent.' Example: @deva[द्रव्योऽयं राजपुत्रः] (how excellent this prince is!).",
                "standard": "The word @deva[द्रव्य] is @deva[निपातन] (irregular), formed from @deva[द्रु] + @deva[यत्], meaning @deva[भव्य] (beautiful, excellent, proper, fit). Examples: @deva[द्रव्योऽयं राजपुत्रः] (this prince is excellent!); @deva[द्रव्योऽयं माणवकः] (this young man is excellent!).",
                "advanced": "This @deva[निपातन] teaches @deva[द्रव्य] as irregular. Derivation: @deva[द्रु] + @deva[यत्] → @deva[द्रव्य]. Meaning: @deva[भव्य] = nice, excellent, proper, having all desired qualities. Not the common meaning 'substance/wealth' but an archaic adjectival sense expressing admiration."
            }
        },
        "53105": {
            "en": {
                "simple": "The affix @deva[छ] comes after @deva[कुशाग्र] (tip of kuśa grass) in the sense of 'like this.' Examples: @deva[कुशाग्रीया बुद्धिः] (intellect sharp as kuśa-tip), @deva[कुशाग्रीयं शस्त्रम्] (weapon sharp as kuśa-tip).",
                "standard": "The affix @deva[छ] (@deva[ईय]) attaches to @deva[कुशाग्र] (tip of kuśa grass) expressing @deva[इव] (resemblance). The comparison is to the sharpness/fineness of kuśa-tips. Examples: @deva[कुशाग्रमिव सूक्ष्मत्वात्] = @deva[कुशाग्रीया बुद्धिः] (razor-sharp intellect); @deva[कुशाग्रीयं शस्त्रम्] (extremely sharp weapon).",
                "advanced": "The affix @deva[छ] → @deva[ईय]. @deva[कुशाग्र] (tip of @deva[कुश] grass) is proverbially fine/sharp. @deva[कुशाग्रीय] describes things resembling kuśa-tip in @deva[सूक्ष्मत्व] (fineness/sharpness). Common usage: @deva[कुशाग्रीया बुद्धिः] = extremely sharp, penetrating intellect."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.3.91-105)")

if __name__ == "__main__":
    main()
