#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.3.76-90."""

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
        "53076": {
            "en": {
                "simple": "The affixes @deva[क] and @deva[अकच्] come when compassion or endearment is expressed. Examples: @deva[पुत्रकः] (poor little child), @deva[वत्सकः] (dear calf), @deva[स्वपितकि] (alas, he sleeps!).",
                "standard": "The affixes @deva[क] and @deva[अकच्] express @deva[अनुकम्पा] (compassion, pity, endearment). Examples: @deva[पुत्रकः] (poor child), @deva[वत्सकः], @deva[दुर्बलकः] (poor weak one), @deva[बुभुक्षितकः] (poor hungry one). After verbs: @deva[विश्वसितकि] (alas, he trusts!), @deva[स्वपितकि] (alas, he sleeps!).",
                "advanced": "The @deva[अनुकम्पा] (compassion/endearment) sense extends @deva[क]/deva[अकच्] beyond @deva[अज्ञात] and @deva[कुत्सित]. @deva[अनुकम्पा] includes pity, sympathy, and affectionate diminutives. @deva[क] applies to nominals: @deva[पुत्रकः], @deva[वत्सकः]. @deva[अकच्] applies to @deva[अव्यय/सर्वनामन्/तिङ्]: @deva[स्वपितकि] (from @deva[स्वपिति])."
            }
        },
        "53077": {
            "en": {
                "simple": "The affixes also come on things offered as courteous relief to someone deserving compassion. Examples: @deva[हन्त ते धानकाः] (alas, here are barley for you), @deva[एहकि] (O dear, come!), @deva[अद्धकि] (O dear, eat!).",
                "standard": "The affixes @deva[क]/deva[अकच्] attach to objects or actions offered as courteous relief (@deva[नीति]) to someone deserving compassion. The previous sūtra added affixes to the object of pity; here, to the means of relief. Examples: @deva[धानकाः] (barley offered to the hungry), @deva[तिलकाः] (sesame); imperatives: @deva[एहकि] (come!), @deva[अद्धकि] (eat!).",
                "advanced": "This complements @ref[5.3.76]: there, affixes attach to the @deva[अनुकम्प्य] (object of pity); here, to the @deva[अनुकम्पानीति] (means of showing compassion). @deva[नीति] = policy/expedient (like gifts of relief). @deva[तद्युक्त] = connected with that compassion. @deva[एहकि] is from @deva[एहि] (imperative of @deva[आ] + √@deva[इ]) + @deva[अकच्]. Context: entreating a starving person with gifts."
            }
        },
        "53078": {
            "en": {
                "simple": "The affix @deva[ठच्] (becoming @deva[इक]) optionally comes after polysyllabic human names to express compassion. Alternatively @deva[कन्] comes. Examples: @deva[देवदत्त] → @deva[देविकः] or @deva[देवदत्तकः].",
                "standard": "The affix @deva[ठच्] (@deva[इक]) optionally attaches to @deva[बह्वच्] (polysyllabic) @deva[मनुष्यनामन्] (human names) expressing compassion or courtesy. @deva[कन्] is the alternative. @deva[ठच्] triggers shortening by @ref[5.3.83]. Examples: @deva[देवदत्तः] → @deva[देविकः] (shortened) or @deva[देवदत्तकः] (with @deva[कन्]); @deva[यज्ञदत्तः] → @deva[यज्ञिकः] or @deva[यज्ञदत्तकः].",
                "advanced": "This introduces @deva[ठच्] for @deva[अनुकम्पा/नीति] after polysyllabic human names. @deva[ठच्] → @deva[इक] (or @deva[क] per @ref[7.3.50-51]). By @ref[5.3.83], portions after the second vowel are deleted: @deva[देवदत्त] → @deva[देव] + @deva[इक] → @deva[देविकः]. @deva[कन्] doesn't trigger shortening: @deva[देवदत्तकः]. Restrictions: @deva[बह्वच्] (not @deva[दत्तकः], @deva[गुप्तकः]); @deva[मनुष्यनामन्] (not epithets like @deva[मद्रबाहुक])."
            }
        },
        "53079": {
            "en": {
                "simple": "The affixes @deva[घन्] and @deva[इलच्] also come after polysyllabic human names for compassion/courtesy. Examples: @deva[देवदत्त] → @deva[देवियः] (@deva[घन्]), @deva[देविलः] (@deva[इलच्]).",
                "standard": "The affixes @deva[घन्] (@deva[य]) and @deva[इलच्] (@deva[इल]) also apply to polysyllabic human names for @deva[अनुकम्पा/नीति]. The @deva[चकार] includes @deva[कन्] and @deva[ठच्]. From @deva[देवदत्त]: @deva[देवियः] (@deva[घन्]), @deva[देविलः] (@deva[इलच्]), @deva[देविकः] (@deva[ठच्]), @deva[देवदत्तकः] (@deva[कन्]). From @deva[यज्ञदत्त]: @deva[यज्ञियः], @deva[यज्ञिलः], @deva[यज्ञिकः], @deva[यज्ञदत्तकः].",
                "advanced": "This adds @deva[घन्] and @deva[इलच्] to the affixes for polysyllabic @deva[मनुष्यनामन्]. @deva[घन्] → @deva[य] (the @deva[न्] is @deva[इत्]); @deva[इलच्] → @deva[इल]. Both trigger the shortening of @ref[5.3.83]. The @deva[चकार] indicates @deva[कन्] and @deva[ठच्] from @ref[5.3.78] also apply. Complete paradigm: @deva[देवियः], @deva[देविलः], @deva[देविकः], @deva[देवदत्तकः]."
            }
        },
        "53080": {
            "en": {
                "simple": "According to Eastern grammarians, @deva[अडच्] and @deva[वुच्] also come after human names beginning with @deva[उप]. Example: @deva[उपेन्द्रदत्त] → @deva[उपडः] (@deva[अडच्]), @deva[उपकः] (@deva[वुच्]).",
                "standard": "Per @deva[प्राचाम्] (Eastern grammarians), @deva[अडच्] (@deva[अड]) and @deva[वुच्] (@deva[अक]) also apply to human names beginning with @deva[उप]. The @deva[चकार] includes previous affixes. From @deva[उपेन्द्रदत्त]: @deva[उपेन्द्रदत्तकः] (@deva[कन्]), @deva[उपिकः] (@deva[ठच्]), @deva[उपिलः] (@deva[इलच्]), @deva[उपियः] (@deva[घन्]), @deva[उपकः] (@deva[वुच्]), @deva[उपडः] (@deva[अडच्]).",
                "advanced": "The @deva[प्राचाम्] marker indicates Eastern grammatical opinion. @deva[अडच्] → @deva[अड] and @deva[वुच्] → @deva[अक] are additional options for @deva[उपादि मनुष्यनामन्]. @deva[प्राचाम्] is @deva[पूजार्थ] (respectful citation), since @deva[वा] was already understood from @ref[5.3.78]. Shortening by @ref[5.3.83] applies. Full paradigm from @deva[उपेन्द्रदत्त]: six forms."
            }
        },
        "53081": {
            "en": {
                "simple": "The affix @deva[कन्] comes after human names that are actually species-names (like @deva[व्याघ्र], @deva[सिंह]) used metaphorically. Examples: @deva[व्याघ्रकः] (dear Tiger), @deva[सिंहकः] (dear Lion).",
                "standard": "The affix @deva[कन्] applies to @deva[जातिनामन्] (species-names like @deva[व्याघ्र], @deva[सिंह]) when used as human names metaphorically, expressing compassion. The @deva[बह्वच्] restriction doesn't apply here. Examples: @deva[व्याघ्रकः], @deva[सिंहकः], @deva[शरभकः]. With @deva[वा] understood, other affixes also: @deva[व्याघ्रिलः], @deva[सिंहिलः].",
                "advanced": "This is a general rule for @deva[जातिनामन्] (species-epithets) functioning as @deva[मनुष्यनामन्]. @deva[जाति] + @deva[नामन्] prevents application to the word @deva[जाति] itself by @ref[1.1.68]. The @deva[बह्वच्] condition doesn't continue (@deva[व्याघ्र] is trisyllabic, but disyllables also qualify). @deva[विकल्प] allows @deva[घन्]/deva[इलच्]: @deva[व्याघ्रिलः]."
            }
        },
        "53082": {
            "en": {
                "simple": "When a human name ends in @deva[अजिन] (skin), @deva[कन्] is added and @deva[अजिन] is deleted. Examples: @deva[व्याघ्राजिनः] → @deva[व्याघ्रकः]; @deva[सिंहाजिनः] → @deva[सिंहकः].",
                "standard": "After human names ending in @deva[अजिन] (animal skin), the affix @deva[कन्] is added with @deva[लोप] (deletion) of @deva[अजिन], expressing compassion. @deva[व्याघ्राजिन] and @deva[सिंहाजिन] are human names. Examples: @deva[व्याघ्राजिनः] → @deva[व्याघ्रकः]; @deva[सिंहाजिनः] → @deva[सिंहकः].",
                "advanced": "This @deva[लोप]-rule deletes @deva[अजिन] before @deva[कन्] in @deva[अनुकम्पार्थ]. @deva[कन्] and @deva[मनुष्यनाम्नः] are understood from context. @deva[व्याघ्राजिन] (tiger-skin, as a name) → @deva[व्याघ्र] + @deva[क] → @deva[व्याघ्रकः]. This produces the same surface form as @ref[5.3.81], but the underlying derivation differs."
            }
        },
        "53083": {
            "en": {
                "simple": "When @deva[ठ] or vowel-initial affixes follow, everything after the second vowel of a human name is deleted. Example: @deva[देवदत्त] + @deva[इक] → @deva[देव] + @deva[इक] → @deva[देविकः].",
                "standard": "When @deva[ठ] (@ref[5.3.78]) or vowel-initial affixes (@ref[5.3.79-80]) follow a human name, the portion after the second vowel (@deva[द्वितीयादूर्ध्वम्]) is deleted. Example: @deva[देवदत्त] → @deva[देव] (after second vowel @deva[अ]) + @deva[इक] → @deva[देविकः]. Vārttika: after fourth vowel for @deva[बृहस्पतिदत्त] → @deva[बृहस्पतिकः]. Optional with non-vowel-initial affixes: @deva[देवदत्तकः] or @deva[देवकः].",
                "advanced": "This @deva[लोपविधि] deletes @deva[द्वितीयादूर्ध्वम्] (everything after second vowel) before @deva[ठच्] or @deva[अजादि] affixes (@deva[घन्], @deva[इलच्], @deva[अडच्], @deva[वुच्]). @deva[ठ] is specified separately because its substitute @deva[क] (after @deva[उ/ऋ/त्/इस्/उस्]) wouldn't otherwise be @deva[अजादि]. Vārttikas: (1) after 4th vowel for certain names; (2) optional with @deva[कन्]; (3) first member deletion possible; (4) @deva[इल] → @deva[ल] after @deva[उ/ऋ]; (5) @deva[ओ/औ/ए/ऐ] as 2nd vowel is also deleted."
            }
        },
        "53084": {
            "en": {
                "simple": "For names beginning with @deva[शेवल], @deva[सुपरि], @deva[विशाल], @deva[वरुण], or @deva[आर्यमान्], deletion occurs after the THIRD vowel instead. Examples: @deva[शेवलदत्त] → @deva[शेवलिकः]; @deva[सुपरिदत्त] → @deva[सुपरिकः].",
                "standard": "For human names beginning with @deva[शेवल], @deva[सुपरि], @deva[विशाल], @deva[वरुण], or @deva[आर्यमन्], the portion after the THIRD vowel is deleted (overriding @ref[5.3.83]). Examples: @deva[शेवलदत्त] → @deva[शेवलिकः], @deva[शेवलियः], @deva[शेवलिलः]; @deva[सुपरिदत्त] → @deva[सुपरिकः], @deva[सुपरियः], @deva[सुपरिलः]. Similarly @deva[विशालिकः], @deva[वरुणिकः], @deva[अर्यमिकः].",
                "advanced": "This @deva[अपवाद] to @ref[5.3.83] specifies @deva[तृतीयादूर्ध्वम्] deletion for five @deva[आदि]-words. Vārttika: the 'third vowel' must be original, not resulting from @deva[सन्धि]. Thus @deva[शेवलेन्द्रदत्त] (from @deva[शेवल] + @deva[इन्द्र]) deletes after original third vowel (@deva[अ] of @deva[शेवल]), giving @deva[शेवलिकः], not *@deva[शेवलेयिकः]."
            }
        },
        "53085": {
            "en": {
                "simple": "The affixes @deva[क] etc. come to express smallness of quantity or number. Examples: @deva[तैलकम्] (a little oil), @deva[घृतकम्] (a little ghee), @deva[पचतकि] (cooks a little).",
                "standard": "The affixes @deva[क] (@ref[5.3.70]) and related affixes express @deva[अल्पता] (small quantity/number). Examples: @deva[अल्पं तैलं] = @deva[तैलकम्] (a little oil); @deva[सर्वकम्], @deva[घृतकम्]; @deva[उच्चकैः] (somewhat high), @deva[नीचकैः] (somewhat low); @deva[पचतकि] (cooks a little), @deva[जल्पतकि] (speaks somewhat).",
                "advanced": "This @deva[स्वार्थिक] use expresses @deva[अल्पीयस्त्व] (diminished quantity/degree). @deva[क] applies to nominals: @deva[तैलकम्], @deva[घृतकम्]. @deva[अकच्] applies to @deva[अव्यय/सर्वनामन्/तिङ्]: @deva[उच्चकैः], @deva[पचतकि]. The meaning shifts from 'some' to 'a little of'—a quantitative diminutive."
            }
        },
        "53086": {
            "en": {
                "simple": "The affixes @deva[क] etc. come to express shortness of length or small size. Examples: @deva[वृक्षकः] (a small tree), @deva[प्लक्षकः] (a small fig tree), @deva[स्तम्भकः] (a small pillar).",
                "standard": "The affixes @deva[क] etc. express @deva[ह्रस्व] (short length, small size)—opposed to @deva[दीर्घ] (long). Examples: @deva[ह्रस्वो वृक्षः] = @deva[वृक्षकः] (a small tree); @deva[प्लक्षकः] (small fig tree); @deva[स्तम्भकः] (small pillar).",
                "advanced": "The @deva[ह्रस्वार्थ] (diminutive size) sense complements @deva[अल्पार्थ] (@ref[5.3.85], quantity). @deva[ह्रस्व] here means physical smallness, not the phonetic term. @deva[क] forms size-diminutives: @deva[वृक्षकः] = small/short tree. This is a common productive use of the @deva[क]-affix in Sanskrit."
            }
        },
        "53087": {
            "en": {
                "simple": "When the small thing is referred to by name (as a proper noun), @deva[कन्] is used instead of @deva[क]. Examples: @deva[वंशकः] (the small bamboo), @deva[वेणुकः], @deva[दण्डकः].",
                "standard": "When the @deva[ह्रस्व] (small) thing functions as a @deva[संज्ञा] (proper name/designation), @deva[कन्] replaces @deva[क]. Examples: @deva[वंशकः] (name for a particular small bamboo), @deva[वेणुकः], @deva[दण्डकः]. This @deva[कन्] blocks the default @deva[क].",
                "advanced": "This @deva[अपवाद] provides @deva[कन्] when the diminutive becomes a @deva[संज्ञा] (proper designation/name). Distinction: @deva[क] for general description of small size; @deva[कन्] when the word becomes a standardized name. @deva[वंशकः] as a specific type/name of small bamboo, not just 'a small bamboo.'"
            }
        },
        "53088": {
            "en": {
                "simple": "The affix @deva[र] comes after @deva[कुटी] (hut), @deva[शमी] (acacia), and @deva[शुण्डा] (elephant's trunk) to express small size. Examples: @deva[कुटीरः] (small hut), @deva[शमीरः], @deva[शुण्डारः]. The results are masculine.",
                "standard": "The affix @deva[र] replaces @deva[क] after @deva[कुटी], @deva[शमी], and @deva[शुण्डा] in @deva[ह्रस्वार्थ] (smallness). The @deva[संज्ञा] condition doesn't apply here. Examples: @deva[ह्रस्वा कुटी] = @deva[कुटीरः] (small hut); @deva[शमीरः] (small acacia); @deva[शुण्डारः] (small trunk). The derivatives become masculine despite feminine primitives.",
                "advanced": "This @deva[अपवाद] teaches @deva[र] for three specific words in @deva[ह्रस्वार्थ]. The @deva[संज्ञायाम्] from @ref[5.3.87] doesn't continue—these are descriptive, not names. Gender shift: @deva[कुटी] (fem.) → @deva[कुटीरः] (masc.). This @deva[र]-affix is distinct from other @deva[र]-affixes in the grammar."
            }
        },
        "53089": {
            "en": {
                "simple": "The affix @deva[डुपच्] (becoming @deva[उप]) comes after @deva[कुतू] (jar) to express small size. Example: @deva[कुतुपः] or @deva[कुतुपम्] (a small leather oil-vessel).",
                "standard": "The affix @deva[डुपच्] (@deva[उप]) replaces @deva[क] after @deva[कुतू] (jar) in @deva[ह्रस्वार्थ]. The @deva[ड्] causes deletion of the final long @deva[ऊ]. Result: @deva[कुतुपः] (masc.) or @deva[कुतुपम्] (neut.)—a small leather vessel for oil.",
                "advanced": "The @deva[डुपच्] affix: @deva[ड्] is @deva[इत्] (triggers @deva[उपधालोप] of final @deva[ऊ] by @ref[6.4.143]); @deva[उप] remains. @deva[कुतू] + @deva[उप] → @deva[कुत्] + @deva[उप] → @deva[कुतुपः]. The derivative is used in both masculine and neuter: @deva[कुतुपः], @deva[कुतुपम्] (small oil-vessel)."
            }
        },
        "53090": {
            "en": {
                "simple": "The affix @deva[ष्टरच्] (becoming @deva[तर], feminine @deva[तरी]) comes after @deva[कासू] (lance) and @deva[गोणी] (sack) to express small size. Examples: @deva[कासूतरी] (small lance), @deva[गोणीतरी] (small sack).",
                "standard": "The affix @deva[ष्टरच्] (@deva[तर]) replaces @deva[क] after @deva[कासू] and @deva[गोणी] in @deva[ह्रस्वार्थ]. The feminine is formed with @deva[ङीष्] by @ref[4.1.40]. Examples: @deva[ह्रस्वा कासूः] = @deva[कासूतरी] (small lance); @deva[ह्रस्वा गोणी] = @deva[गोणीतरी] (small sack).",
                "advanced": "The affix @deva[ष्टरच्]: @deva[ष्] triggers @deva[वृद्धि] (inapplicable here); @deva[ट्] indicates @deva[ङीप्] feminine (but @ref[4.1.40] @deva[अन्यतो ङीष्] applies instead). @deva[तर] remains. Results: @deva[कासूतरी] (small lance—feminine); @deva[गोणीतरी] (small sack—feminine)."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.3.76-90)")

if __name__ == "__main__":
    main()
