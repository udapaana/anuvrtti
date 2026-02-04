#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 4.4.16-30."""

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
        "44016": {
            "en": {
                "simple": "The affix @deva[ष्ठन्] (instead of @deva[ठक्]) comes after the words in the @deva[भस्त्रादि] list when in the instrumental case, in the sense of 'one who conveys thereby'.\n\nExamples:\n- @deva[भस्त्रया हरति] → @deva[भस्त्रिकः] 'one who carries using a leather bag', f. @deva[भस्त्रिकी]\n- @deva[भरटेन हरति] → @deva[भरटिकः], f. @deva[भरटिकी]\n\nThe word @deva[भस्त्र] means a leather bellows (for heating iron) or a leather bag for carrying grain.\n\nThe @deva[भस्त्रादि] list includes: @deva[भस्त्रा], @deva[भरट], @deva[भरण], @deva[शीर्षभार], @deva[शीर्षेभार], @deva[असंभार], @deva[अंसेभार].",
                "standard": "After @deva[भस्त्रादि] (in @deva[तृतीया]), @deva[ष्ठन्] (not @deva[ठक्]) applies in sense @deva[हरति] (conveys).\n\nExamples:\n- @deva[भस्त्रया हरति] → @deva[भस्त्रिकः] 'carrier', f. @deva[भस्त्रिकी] (by @ref[4.1.41])\n- @deva[भरटिकः], f. @deva[भरटिकी]\n\n@deva[भस्त्र] = leather bellows or carrying bag.\n\n@deva[भस्त्रादि] gaṇa (7): @deva[भस्त्रा], @deva[भरट], @deva[भरण] (@deva[भारण]), @deva[शीर्षभार], @deva[शीर्षेभार], @deva[असंभार], @deva[अंसेभार].",
                "advanced": "After @deva[भस्त्रादि] (in @deva[तृतीया]), @deva[ष्ठन्] in sense @deva[हरति].\n\nExamples: @deva[भस्त्रिकः] f. @deva[भस्त्रिकी], @deva[भरटिकः] f. @deva[भरटिकी].\n\n@deva[ष्ठन्]: @deva[ष्] is @deva[इत्] for @deva[ङीष्] (@ref[4.1.41]); @deva[न्] is @deva[इत्] for accent (@ref[6.1.197]).\n\n@deva[भस्त्रादि] gaṇa (7): @deva[भस्त्रा], @deva[भरट], @deva[भरण] (@deva[भारण]), @deva[शीर्षभार], @deva[शीर्षेभार], @deva[असंभार], @deva[अंसेभार]."
            }
        },
        "44017": {
            "en": {
                "simple": "The affix @deva[ष्ठन्] optionally comes after the words @deva[विवध] and @deva[वीवध] in the sense of 'one who conveys thereby'. When @deva[ष्ठन्] is not used, the regular @deva[ठक्] applies.\n\nBoth words mean 'a carrying-pole' — a piece of wood carried on the shoulders to transport loads.\n\nWith @deva[ष्ठन्]:\n- @deva[विवधेन हरति] → @deva[विवधिकः] 'a porter', f. @deva[विवधिकी]\n- @deva[वीवधेन हरति] → @deva[वीवधिकः], f. @deva[वीवधिकी]\n\nWith @deva[ठक्]:\n- @deva[वैवधिकः] (same for both bases), f. @deva[वैवधिका]",
                "standard": "After @deva[विवध] and @deva[वीवध], @deva[ष्ठन्] optionally applies in sense @deva[हरति]. Otherwise @deva[ठक्] applies.\n\n@deva[विवध]/[@deva[वीवध] = carrying-pole for loads.\n\nWith @deva[ष्ठन्]: @deva[विवधिकः] f. @deva[विवधिकी]; @deva[वीवधिकः] f. @deva[वीवधिकी]\nWith @deva[ठक्]: @deva[वैवधिकः] f. @deva[वैवधिका]\n\nThe sūtra text is @deva[विभाषा विवधात्]; @deva[वीवध] is added from a @deva[वार्त्तिक].",
                "advanced": "@deva[विवध] and @deva[वीवध] optionally take @deva[ष्ठन्] (otherwise @deva[ठक्]) in sense @deva[हरति].\n\nWith @deva[ष्ठन्]: @deva[विवधिकः] f. @deva[विवधिकी], @deva[वीवधिकः] f. @deva[वीवधिकी]\nWith @deva[ठक्]: @deva[वैवधिकः] f. @deva[वैवधिका]\n\nThe sūtra is @deva[विभाषा विवधात्]. @deva[वीवध] is from a @deva[वार्त्तिक] cited by @deva[काशिका]."
            }
        },
        "44018": {
            "en": {
                "simple": "The affix @deva[अण्] (instead of @deva[ठक्]) comes after the word @deva[कुटिलिका] in the sense of 'one who conveys thereby'.\n\nThe word @deva[कुटिलिका] means 'crooked motion' or 'an iron forge'.\n\nExamples:\n- @deva[कुटिलिकया हरति मृगो व्याधम्] → @deva[कौटिलिको मृगः] 'a deer that lures a hunter into crooked paths'\n- @deva[कुटिलिकया हरति अङ्गारान्] → @deva[कौटिलिकः कर्मारः] 'a blacksmith who carries burning coals on a forge'",
                "standard": "After @deva[कुटिलिका], @deva[अण्] (not @deva[ठक्]) applies in sense @deva[हरति].\n\n@deva[कुटिलिका] = crooked motion; also, an iron forge.\n\nExamples:\n- @deva[कुटिलिकया हरति मृगो व्याधम्] → @deva[कौटिलिको मृगः] 'a deer that entices the hunter by crooked paths'\n- @deva[कुटिलिकया हरति अङ्गारान्] → @deva[कौटिलिकः कर्मारः] 'a blacksmith (who carries coals on a forge)'",
                "advanced": "@deva[कुटिलिका] takes @deva[अण्] (not @deva[ठक्]) in sense @deva[हरति].\n\n@deva[कुटिलिका] = crooked movement; also, blacksmith's forge.\n\nExamples: @deva[कौटिलिको मृगः] (deer that leads hunter astray); @deva[कौटिलिकः कर्मारः] (blacksmith who carries coals on forge)."
            }
        },
        "44019": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the words in the @deva[अक्षद्यूतादि] list when in the instrumental case, in the sense of 'completed thereby'.\n\nExamples:\n- @deva[अक्षद्यूतेन निर्वृत्तम्] 'completed by gambling' → @deva[आक्षद्यूतिकं वैरम्] 'enmity that was brought to a head through gambling'\n- @deva[जानुप्रहृतेन निर्वृत्तम्] → @deva[जानुप्रहृतिकम्]\n\nThe @deva[अक्षद्यूतादि] list includes: @deva[अक्षद्यूत], @deva[जानुप्रहृत], @deva[जङ्घाप्रहृत], @deva[जङ्घाप्रहत], @deva[पादस्वेदन], @deva[कण्टकमर्दन], @deva[गतानुगत], @deva[गतागत], @deva[यातोपयात], @deva[अनुगत].",
                "standard": "After @deva[अक्षद्यूतादि] (in @deva[तृतीया]), @deva[ठक्] applies in sense @deva[निर्वृत्तम्] (completed thereby).\n\nExamples:\n- @deva[अक्षद्यूतेन निर्वृत्तम्] → @deva[आक्षद्यूतिकं वैरम्] 'enmity brought to completion through gambling'\n- @deva[जानुप्रहृतिकम्]\n\n@deva[अक्षद्यूतादि] gaṇa (10): @deva[अक्षद्यूत], @deva[जानुप्रहृत], @deva[जङ्घाप्रहृत], @deva[जङ्घाप्रहत], @deva[पादस्वेदन], @deva[कण्टकमर्दन], @deva[गतानुगत], @deva[गतागत], @deva[यातोपयात], @deva[अनुगत].",
                "advanced": "After @deva[अक्षद्यूतादि] (in @deva[तृतीया]), @deva[ठक्] in sense @deva[निर्वृत्तम्] (completed).\n\nExamples: @deva[आक्षद्यूतिकं वैरम्], @deva[जानुप्रहृतिकम्].\n\n@deva[अक्षद्यूतादि] gaṇa (10): @deva[अक्षद्यूत], @deva[जानुप्रहृत] (@deva[प्रहूत]), @deva[जङ्घाप्रहृत] (@deva[प्रहूत]), @deva[जङ्घाप्रहत], @deva[पादस्वेदन], @deva[कण्टकमर्दन], @deva[गतानुगत], @deva[गतागत], @deva[यातोपयात], @deva[अनुगत]."
            }
        },
        "44020": {
            "en": {
                "simple": "The affix @deva[मप्] always comes after words ending in the affix @deva[क्त्रि] (@ref[3.3.88]), in the sense of 'completed thereby'.\n\nThe affix @deva[क्त्रि] is incomplete by itself—it must always take @deva[मप्] to form a complete word. So @deva[मप्] is like an obligatory addition to @deva[क्त्रि].\n\nExamples:\n- @deva[पच्] + @deva[क्त्रि] + @deva[मप्] → @deva[पक्त्रिमम्] 'completed by cooking'\n- @deva[वप्] + @deva[क्त्रि] + @deva[मप्] → @deva[उप्त्रिमम्] 'completed by sowing' (by @ref[6.1.15])\n- @deva[कृ] + @deva[क्त्रि] + @deva[मप्] → @deva[कृत्रिमम्] 'artificial, man-made'\n\nA @deva[वार्त्तिक] adds: after words ending in @deva[भाव]-affixes, @deva[इमप्] is added. Thus @deva[पाकेन निर्वृत्तम्] → @deva[पाकिमम्] (from @deva[पच्] + @deva[घञ्] + @deva[इमप्]). Similarly @deva[त्यागिमम्], @deva[सेकिमम्], @deva[कुट्टिमम्].",
                "standard": "After @deva[क्त्रि]-ending words (@ref[3.3.88]), @deva[मप्] is obligatory (@deva[नित्य]) in sense @deva[निर्वृत्तम्].\n\n@deva[क्त्रि] never occurs alone—@deva[मप्] is an invariable augment.\n\nExamples:\n- @deva[पच्] + @deva[क्त्रि] + @deva[मप्] → @deva[पक्त्रिमम्]\n- @deva[वप्] + @deva[क्त्रि] + @deva[मप्] → @deva[उप्त्रिमम्] (@ref[6.1.15])\n- @deva[कृ] + @deva[क्त्रि] + @deva[मप्] → @deva[कृत्रिमम्] 'artificial'\n\n@note[type=vārtika]: @deva[भावप्रत्ययान्तादिमप्] — After @deva[भाव]-pratyaya-ending words, @deva[इमप्] is added: @deva[पाकिमम्] (@deva[पच्] + @deva[घञ्] @ref[3.3.18] + @deva[इमप्]), @deva[त्यागिमम्], @deva[सेकिमम्], @deva[कुट्टिमम्].",
                "advanced": "After @deva[क्त्र्यन्त] (@ref[3.3.88]), @deva[मप्] is @deva[नित्य] in sense @deva[निर्वृत्तम्].\n\nExamples: @deva[पक्त्रिमम्], @deva[उप्त्रिमम्] (@ref[6.1.15]), @deva[कृत्रिमम्].\n\n@deva[मप्] is effectively an @deva[आगम] to @deva[क्त्रि]—@deva[क्त्रि] never appears without it.\n\n@note[type=vārtika]: @deva[भावप्रत्ययान्तादिमप्] — After @deva[भावप्रत्ययान्त], @deva[इमप्] is added: @deva[पाकिमम्] (@deva[पच्] + @deva[घञ्] @ref[3.3.18] + @deva[इमप्]), @deva[त्यागिमम्], @deva[सेकिमम्], @deva[कुट्टिमम्]."
            }
        },
        "44021": {
            "en": {
                "simple": "The affixes @deva[कक्] and @deva[कन्] come after the words @deva[अपमित्य] and @deva[याचित] respectively, in the sense of completion.\n\nExamples:\n- @deva[अपमित्य] + @deva[कक्] → @deva[आपमित्यकम्] 'debt'\n- @deva[याचित] + @deva[कन्] → @deva[याचितकम्] 'a thing borrowed'\n\nThe word @deva[अपमित्य] is formed from @deva[अप] + @deva[मा] with @deva[क्त्वा] (@ref[3.4.19]), changed to @deva[ल्यप्], with @deva[आ] → @deva[इ] by @ref[6.4.70]. Since @deva[अपमित्य] is an @deva[अव्यय] (indeclinable), the @deva[तेन] (instrumental) sense does not apply here.",
                "standard": "After @deva[अपमित्य], @deva[कक्] applies; after @deva[याचित], @deva[कन्] applies—both in sense of completion.\n\nExamples:\n- @deva[आपमित्यकम्] 'debt'\n- @deva[याचितकम्] 'a borrowed item'\n\n@deva[अपमित्य]: @deva[अप] + √@deva[मा] + @deva[क्त्वा] (@ref[3.4.19]) → @deva[ल्यप्], with @deva[आ] → @deva[इ] by @ref[6.4.70]. Being @deva[अव्यय], @deva[तेन] does not apply here.",
                "advanced": "@deva[अपमित्य] takes @deva[कक्]; @deva[याचित] takes @deva[कन्]—in sense @deva[निर्वृत्तम्].\n\nExamples: @deva[आपमित्यकम्] 'debt', @deva[याचितकम्] 'borrowed thing'.\n\n@deva[अपमित्य]: @deva[अप] + √@deva[मा] + @deva[क्त्वा] (@ref[3.4.19]) → @deva[ल्यप्] with @deva[आ] → @deva[इ] (@ref[6.4.70]). Being @deva[अव्यय], the @deva[अनुवृत्ति] of @deva[तेन] does not run here."
            }
        },
        "44022": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the instrumental case in the sense of 'mixed therewith'.\n\nThe word @deva[संसृष्ट] means 'mixed' or 'combined'.\n\nExamples:\n- @deva[दध्ना संसृष्टम्] 'mixed with curd' → @deva[दाधिकम्] 'smeared with curd'\n- @deva[मरीचेन संसृष्टम्] → @deva[मारीचिकम्] 'mixed with pepper'\n- @deva[शृङ्गवेरेण संसृष्टम्] → @deva[शार्ङ्गवेरिकम्] 'mixed with ginger'\n- @deva[पिप्पल्या संसृष्टम्] → @deva[पैप्पलिकम्] 'mixed with long pepper'\n\nNote: @deva[संस्कृत] (@ref[4.4.3]) implies enhancement; @deva[संसृष्ट] simply means mixing without the idea of improvement.",
                "standard": "After a @deva[तृतीया]-ending word, @deva[ठक्] applies in sense @deva[संसृष्टम्] (mixed therewith).\n\nExamples: @deva[दाधिकम्] 'smeared with curd', @deva[मारीचिकम्], @deva[शार्ङ्गवेरिकम्], @deva[पैप्पलिकम्].\n\nDistinction: @deva[संस्कृत] (@ref[4.4.3]) implies enhancement/refinement; @deva[संसृष्ट] is mere mixing without improvement.",
                "advanced": "After @deva[तृतीयान्त], @deva[ठक्] in sense @deva[संसृष्टम्] (mixed).\n\nExamples: @deva[दाधिकम्], @deva[मारीचिकम्], @deva[शार्ङ्गवेरिकम्], @deva[पैप्पलिकम्].\n\n@deva[संस्कृत] vs @deva[संसृष्ट]: @deva[संस्कृत] (@ref[4.4.3]) = refinement/enhancement; @deva[संसृष्ट] = mere combination without qualitative improvement."
            }
        },
        "44023": {
            "en": {
                "simple": "The affix @deva[इनि] (instead of @deva[ठक्]) comes after the word @deva[चूर्ण] (powder) in the sense of 'mixed therewith'.\n\nExamples:\n- @deva[चूर्णैः संसृष्टाः] → @deva[चूर्णिनः अपूपाः] 'cakes sprinkled with powder'\n- @deva[चूर्णिन्यः धानाः] 'parched grains mixed with powder'",
                "standard": "After @deva[चूर्ण], @deva[इनि] (not @deva[ठक्]) applies in sense @deva[संसृष्टम्].\n\nExamples: @deva[चूर्णिनः अपूपाः] 'cakes with powder', @deva[चूर्णिन्यः धानाः] 'powdered grains'.",
                "advanced": "@deva[चूर्ण] takes @deva[इनि] (not @deva[ठक्]) in sense @deva[संसृष्टम्].\n\nExamples: @deva[चूर्णिनः अपूपाः], @deva[चूर्णिन्यः धानाः].\n\n@deva[इनि] = @deva[इन्] by @ref[1.3.2] (@deva[उपदेशेऽजनुनासिक इत्])."
            }
        },
        "44024": {
            "en": {
                "simple": "The affix @deva[ठक्] undergoes @deva[लुक्] (elision) after the word @deva[लवण] (salt) in the sense of 'mixed therewith'.\n\nThis means the affix is dropped entirely, and the base word alone expresses the derivative meaning.\n\nExamples:\n- @deva[लवणेन संसृष्टः] 'mixed with salt' → @deva[लवणः] (the derivative has the same form as the base)\n- @deva[लवणः सूपः] 'soup mixed with salt'\n- @deva[लवणं शाकम्] 'vegetables with salt'\n- @deva[लवणा यवगूः] 'barley gruel with salt' (by @ref[1.1.51])\n\nThe @deva[लुक्] applies when @deva[लवण] is used as an adjective, not as a noun.",
                "standard": "After @deva[लवण], @deva[ठक्] undergoes @deva[लुक्]-elision in sense @deva[संसृष्टम्].\n\nExamples:\n- @deva[लवणेन संसृष्टः] → @deva[लवणः] (not @deva[*लावणिकः])\n- @deva[लवणः सूपः] 'salted soup', @deva[लवणं शाकम्], @deva[लवणा यवगूः] (@ref[1.1.51])\n\n@deva[लुक्] applies when @deva[लवण] functions as an adjective.",
                "advanced": "@deva[लवण] takes @deva[ठक्] with @deva[लुक्] in sense @deva[संसृष्टम्].\n\nExamples: @deva[लवणः सूपः], @deva[लवणं शाकम्], @deva[लवणा यवगूः] (@ref[1.1.51]).\n\n@deva[लुक्]-elision occurs when @deva[लवण] is @deva[विशेषण] (adjective), not @deva[विशेष्य] (substantive)."
            }
        },
        "44025": {
            "en": {
                "simple": "The affix @deva[अण्] (instead of @deva[ठक्]) comes after the word @deva[मुद्ग] (a type of pulse/lentil) in the sense of 'mixed therewith'.\n\nExamples:\n- @deva[मुद्गेन संसृष्टः] → @deva[मौद्गः ओदनः] 'rice mixed with mung beans'\n- @deva[मौद्गा यवागूः] 'barley gruel mixed with mung beans'",
                "standard": "After @deva[मुद्ग], @deva[अण्] (not @deva[ठक्]) applies in sense @deva[संसृष्टम्].\n\nExamples: @deva[मौद्गः ओदनः] 'rice with @deva[मुद्ग]-pulse', @deva[मौद्गा यवागूः].",
                "advanced": "@deva[मुद्ग] takes @deva[अण्] (not @deva[ठक्]) in sense @deva[संसृष्टम्].\n\nExamples: @deva[मौद्गः ओदनः], @deva[मौद्गा यवागूः]."
            }
        },
        "44026": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word denoting a condiment (@deva[उपसेचन], something used to moisten food) in the instrumental case, in the sense of 'sprinkled therewith'.\n\nExamples:\n- @deva[दध्ना उपसिक्तम्] 'sprinkled with curd' → @deva[दाधिकम्]\n- @deva[सूपेन उपसिक्तम्] → @deva[सौपिकम्] 'sprinkled with broth'\n- @deva[खारेण उपसिक्तम्] → @deva[खारिकम्] 'sprinkled with alkaline water'\n\nThe word must denote a condiment. Counter-example: @deva[उदकेन उपसिक्तः ओदनः] 'rice sprinkled with water' does not take @deva[ठक्] because water is not a condiment.",
                "standard": "After an @deva[उपसेचन]-denoting word (condiment) in @deva[तृतीया], @deva[ठक्] applies in sense @deva[उपसिक्तम्] (sprinkled therewith).\n\nExamples: @deva[दाधिकम्], @deva[सौपिकम्], @deva[खारिकम्].\n\nRestriction: Only condiments qualify. @deva[उदकेन उपसिक्तः ओदनः] takes no affix—water is not @deva[उपसेचन].",
                "advanced": "After @deva[उपसेचनवाचिन्] (condiment) in @deva[तृतीया], @deva[ठक्] in sense @deva[उपसिक्तम्].\n\nExamples: @deva[दाधिकम्], @deva[सौपिकम्], @deva[खारिकम्].\n\nCondition: Base must denote @deva[उपसेचन]. @deva[उदकेन उपसिक्तः ओदनः] → no affix (water is not @deva[उपसेचन])."
            }
        },
        "44027": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the words @deva[ओजस्] (energy), @deva[सहस्] (strength), and @deva[अम्भस्] (water) when in the instrumental case, in the sense of 'one who exists by means of that'.\n\nExamples:\n- @deva[ओजसा वर्तते] 'lives by energy' → @deva[औजसिकः शूरः] 'a hero (one possessed of energy)'\n- @deva[सहसा वर्तते] → @deva[साहसिकः] 'a thief (one who acts by force)'\n- @deva[अम्भसा वर्तते] → @deva[आम्भसिकः] 'a fish (one who lives in water)'",
                "standard": "After @deva[ओजस्], @deva[सहस्], and @deva[अम्भस्] (in @deva[तृतीया]), @deva[ठक्] applies in sense @deva[वर्तते] (exists thereby).\n\nExamples:\n- @deva[ओजसा वर्तते] → @deva[औजसिकः शूरः] 'a hero'\n- @deva[सहसा वर्तते] → @deva[साहसिकः] 'a thief'\n- @deva[अम्भसा वर्तते] → @deva[आम्भसिकः] 'a fish'",
                "advanced": "After @deva[ओजस्], @deva[सहस्], @deva[अम्भस्] (in @deva[तृतीया]), @deva[ठक्] in sense @deva[वर्तते].\n\nExamples: @deva[औजसिकः शूरः], @deva[साहसिकः] (thief), @deva[आम्भसिकः] (fish)."
            }
        },
        "44028": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the words @deva[ईप], @deva[लोम], and @deva[कूल] when preceded by @deva[अनु] or @deva[प्रति], in the sense of 'one who exists in relation to that'. The word is in the accusative case (second case, @deva[द्वितीया]).\n\nThough @deva[वर्तते] is intransitive, the accusative here functions adverbially, qualifying the manner of existence.\n\nExamples:\n- @deva[प्रतीपं वर्तते] 'exists adversely' → @deva[प्रातीपिकः] 'unfavorable' (@deva[प्रति] + @deva[आप] with @deva[आ] → @deva[ई] by @ref[5.4.74], @ref[6.3.97])\n- @deva[अन्वीपं वर्तते] → @deva[आन्वीपिकः] 'favorable'\n- @deva[प्रतिलोमं वर्तते] → @deva[प्रातिलोमिकः] 'inverse, against the grain'\n- @deva[अनुलोमं वर्तते] → @deva[आनुलोमिकः] 'direct, with the grain'\n- @deva[प्रतिकूलं वर्तते] → @deva[प्रातिकूलिकः] 'adverse'\n- @deva[अनुकूलं वर्तते] → @deva[आनुकूलिकः] 'favorable'",
                "standard": "After @deva[ईप], @deva[लोम], @deva[कूल] (preceded by @deva[अनु]/@deva[प्रति]) in @deva[द्वितीया], @deva[ठक्] applies in sense @deva[वर्तते].\n\nThe accusative functions adverbially (not as object of intransitive @deva[वर्तते]).\n\nExamples:\n- @deva[प्रतीपं वर्तते] → @deva[प्रातीपिकः] 'unfavorable' (@deva[प्रति] + @deva[आप], @deva[आ] → @deva[ई] by @ref[5.4.74], @ref[6.3.97])\n- @deva[अन्वीपं वर्तते] → @deva[आन्वीपिकः] 'favorable'\n- @deva[प्रातिलोमिकः] 'inverse', @deva[आनुलोमिकः] 'direct'\n- @deva[प्रातिकूलिकः] 'adverse', @deva[आनुकूलिकः] 'favorable'",
                "advanced": "After @deva[अनु]/[@deva[प्रति] + @deva[ईप]/[@deva[लोम]/[@deva[कूल] (in @deva[द्वितीया]), @deva[ठक्] in sense @deva[वर्तते].\n\nThe @deva[द्वितीया] is @deva[क्रियाविशेषण] (adverbial), not @deva[कर्म] of intransitive @deva[वर्तते].\n\nExamples: @deva[प्रातीपिकः] (@deva[प्रतिगता आपोऽस्मिन्], @deva[आ] → @deva[ई] by @ref[5.4.74], @ref[6.3.97]), @deva[आन्वीपिकः], @deva[प्रातिलोमिकः], @deva[आनुलोमिकः], @deva[प्रातिकूलिकः], @deva[आनुकूलिकः]."
            }
        },
        "44029": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the word @deva[परिमुख] (and similar words) in the accusative case, in the sense of 'one who exists in relation to that'.\n\nExample: @deva[परिमुखं वर्तते] → @deva[पारिमुखिकः] 'one who is before the face, present, nearby'\n\nThe @deva[च] in the sūtra indicates that other similar words also take this affix, such as @deva[परिपार्श्व] → @deva[पारिपार्श्विकः] 'one who is at the side'.\n\n@deva[परिमुख] is an @deva[अव्ययीभाव] compound (@ref[2.1.12]). If @deva[परि] means 'exclusion' (@ref[1.4.88]), then @deva[पारिमुखिकः] means 'a servant who avoids the master's face'. If @deva[परि] means 'around', it means 'a servant always in the master's presence'.",
                "standard": "After @deva[परिमुख] etc. (in @deva[द्वितीया]), @deva[ठक्] applies in sense @deva[वर्तते].\n\nExample: @deva[परिमुखं वर्तते] → @deva[पारिमुखिकः] 'present before the face'.\n\nThe @deva[च] extends to similar words: @deva[पारिपार्श्विकः] (from @deva[परिपार्श्व]).\n\n@deva[परिमुख] is @deva[अव्ययीभाव] (@ref[2.1.12]). Two senses based on @deva[परि]: if @deva[वर्जन] (@ref[1.4.88]), 'servant who avoids master's face'; if @deva[सर्वतोभाव], 'servant always in master's presence'.",
                "advanced": "@deva[परिमुख] etc. (in @deva[द्वितीया]) take @deva[ठक्] in sense @deva[वर्तते].\n\nExample: @deva[पारिमुखिकः]; also @deva[पारिपार्श्विकः] (by @deva[च]).\n\n@deva[परिमुख]: @deva[अव्ययीभाव] by @ref[2.1.12]. Two meanings: (1) @deva[परि] = @deva[वर्जन] (@ref[1.4.88]): @deva[स्वामिनो मुखं वर्जयित्वा सेवको वर्त्तते]; (2) @deva[परि] = @deva[सर्वतस्]: @deva[यतः स्वामिनो मुखं ततस्ततो वर्त्तते]."
            }
        },
        "44030": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the accusative case in the sense of 'one who gives with a blameworthy motive'.\n\nThis applies when someone lends money expecting excessive returns—usury.\n\nExamples:\n- @deva[द्विगुणं प्रयच्छति] 'gives for double' → @deva[द्वैगुणिकः] 'a usurer who charges 100% interest'\n- @deva[त्रिगुणं प्रयच्छति] → @deva[त्रैगुणिकः] 'one who charges 200% interest'\n\nA @deva[वार्त्तिक] states that @deva[वृद्धि] changes to @deva[वृधुषि] before this affix: @deva[वृद्धिं प्रयच्छति] → @deva[वार्धुषिकः] 'a usurer'.\n\nThe condition @deva[गर्ह्यम्] (blameworthy) is essential. When a debtor repays double (@deva[द्विगुणं प्रयच्छति अधर्मणः]), no affix applies—the motive is not blameworthy.",
                "standard": "After a @deva[द्वितीया]-ending word, @deva[ठक्] applies in sense @deva[गर्ह्यं प्रयच्छति] (gives with blameworthy motive).\n\nExamples:\n- @deva[द्विगुणं प्रयच्छति] → @deva[द्वैगुणिकः] 'usurer (100% interest)'\n- @deva[त्रैगुणिकः] '200% interest'\n\n@note[type=vārtika]: @deva[वृद्धेर्वृधुषिरादेशः] — @deva[वृद्धि] → @deva[वृधुषि]: @deva[वृद्धिं प्रयच्छति] → @deva[वार्धुषिकः] 'usurer'.\n\nCondition @deva[गर्ह्यम्]: When debtor repays double (@deva[द्विगुणं प्रयच्छति अधर्मणः]), no affix—not blameworthy.",
                "advanced": "After @deva[द्वितीयान्त], @deva[ठक्] in sense @deva[गर्ह्यं प्रयच्छति] (gives blameworthily).\n\nExamples: @deva[द्वैगुणिकः], @deva[त्रैगुणिकः].\n\n@note[type=vārtika]: @deva[वृद्धेर्वृधुषिरादेशः] — @deva[वृद्धि] → @deva[वृधुषि] before this affix: @deva[वार्धुषिकः] 'usurer'. Alternatively, @deva[वृधुषि] is a separate @deva[प्रातिपदिक] synonymous with @deva[वृद्धि].\n\nCondition: @deva[गर्ह्यम्] (blameworthy). @deva[द्विगुणं प्रयच्छति अधर्मणः] (debtor repays double) → no affix."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.4.16-30)")

if __name__ == "__main__":
    main()
