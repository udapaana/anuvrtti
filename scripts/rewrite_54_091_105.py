#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.4.91-105."""

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
        "54091": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[राजन्], @deva[अहन्], and @deva[सखि] at the end of a Tatpuruṣa compound. Examples: @deva[महाराजः] (great king), @deva[परमाहः] (supreme day), @deva[राजसखः] (king's friend).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[राजन्], @deva[अहन्], and @deva[सखि] in compound-final position within Tatpuruṣa. Thus @deva[महाराजः], @deva[मद्रराजः]; @deva[परमाहः], @deva[उत्तमाहः] (with @deva[अन्]-elision by @ref[6.4.145]); @deva[राज्ञः सखा] = @deva[राजसखः], @deva[ब्राह्मणसखः]. The feminine @deva[राज्ञी] does not take this affix: @deva[मद्राणां राज्ञी] = @deva[मद्रराज्ञी] (not @deva[मद्रराजी]). The word order in the sūtra (@deva[राजन्] before @deva[अहन्] despite being prosodically heavier) indicates only that form whose final lengthens to @deva[आ] in compounding (@deva[राजा]) is intended, not @deva[राज्ञी].",
                "advanced": "The paribhāṣā @deva[प्रातिपदिकग्रहणं लिङ्गविशिष्टस्यापि ग्रहणम्] would normally include the feminine @deva[राज्ञी]. However, the sūtra's word order—placing @deva[राजन्] before the lighter @deva[अहन्]—signals that only the masculine/strong stem (which lengthens to @deva[राजा] in compounds) is intended. This syntactic cue excludes the feminine @deva[राज्ञी] from taking @deva[टच्]."
            }
        },
        "54092": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[गो] (cow/ox) at the end of a Tatpuruṣa compound when no taddhita affix has been elided. Examples: @deva[परमगवः] (supreme cow), @deva[पञ्चगवम्] (five cows). But: @deva[पञ्चगुः] (bought for five cows—taddhita elided).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[गो] in Tatpuruṣa compounds when no taddhita affix has been elided (@deva[अतद्धितलुकि]). Thus @deva[परमगवः], @deva[उत्तमगवः], @deva[पञ्चगवम्], @deva[दशगवम्]. When taddhita @deva[ठक्] (@ref[5.1.37]) is elided by @ref[5.1.28]: @deva[पञ्चभिर्गोभिः क्रीतः] = @deva[पञ्चगुः], @deva[दशगुः]—no @deva[टच्]. The prohibition applies only to taddhita elision, not sup-elision: @deva[राजगवम् इच्छति] = @deva[राजगवीयति] (@ref[3.1.8], @ref[2.4.71]). Adding a taddhita (not eliding) still allows @deva[टच्]: @deva[पञ्चगवरुप्यम्], @deva[पञ्चगवमयम्].",
                "advanced": "The condition @deva[अतद्धितलुकि] distinguishes between: (1) taddhita elision blocking @deva[टच्] (@deva[पञ्चगुः] where @deva[ठक्] is elided), (2) sup-elision not blocking (@deva[राजगवीयति]), and (3) taddhita addition not blocking (@deva[पञ्चगवरुप्यम्] where @deva[रुप्य] is added but not elided). The @deva[टच्] affix transforms @deva[गो] to @deva[गव] in compound-final position."
            }
        },
        "54093": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[उरस्] (chest) at the end of a Tatpuruṣa compound when it means 'the most excellent of its kind.' Examples: @deva[अश्वोरसम्] (the finest horse), @deva[हस्त्युरसम्] (the finest elephant). But: @deva[देवदत्तोरः] (Devadatta's chest).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[उरस्] in Tatpuruṣa when the meaning is @deva[अग्र] (principal, most excellent). Since @deva[उरस्] (chest) is the principal member of an animal's body, it metonymically means 'the chief/best.' Thus @deva[अश्वानाम् उरः] = @deva[अश्वोरसम्] (the most excellent horse), @deva[हस्त्युरसम्] (the finest elephant). Without this meaning: @deva[देवदत्तस्य उरः] = @deva[देवदत्तोरः] (Devadatta's chest)—no affix.",
                "advanced": "The metonymic extension from @deva[उरस्] (chest as the principal body part) to 'the principal/best of a class' triggers @deva[टच्]. This is a semantic condition: when @deva[उरस्] denotes physical chest, no affix; when it denotes 'chief/foremost' (as in 'the cream of the crop'), @deva[टच्] applies. The genitive Tatpuruṣa @deva[अश्वानाम् उरः] = 'the chest of horses' → 'the best of horses.'"
            }
        },
        "54094": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[अनस्], @deva[अश्मन्], @deva[अयस्], and @deva[सरस्] at the end of a Tatpuruṣa compound when denoting a genus (jāti) or a name (saṃjñā). Examples: @deva[उपानसम्], @deva[अमृताश्मः], @deva[कालायसम्], @deva[मण्डूकसरसम्]. But: @deva[सदनः], @deva[सदश्मा], @deva[सत्सरः].",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[अनस्] (cart), @deva[अश्मन्] (stone), @deva[अयस्] (iron), and @deva[सरस्] (lake) in Tatpuruṣa when the compound denotes a @deva[जाति] (genus/species) or @deva[संज्ञा] (proper name). Jāti examples: @deva[उपानसम्] (a type of vehicle), @deva[अमृताश्मः] (a type of stone), @deva[कालायसम्] (a kind of iron), @deva[मण्डूकसरसम्] (a lake type). Saṃjñā examples: @deva[महानसम्], @deva[पिण्डाश्मः], @deva[लोहितायसम्], @deva[जलसरसम्]. Without jāti/saṃjñā meaning: @deva[सत् अनः] = @deva[सदनः], @deva[सत् अश्मा] = @deva[सदश्मा], @deva[सत् सरः] = @deva[सत्सरः].",
                "advanced": "The dual condition @deva[जातौ संज्ञायां च] covers technical terminology (species names) and proper nouns (names of specific places/objects). When the compound is merely descriptive (@deva[सत्] + noun = 'good X'), it's not a technical term or name, so @deva[टच्] doesn't apply. This distinguishes classificatory/naming compounds from ordinary attributive ones."
            }
        },
        "54095": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[तक्षन्] (carpenter) at the end of a Tatpuruṣa compound when preceded by @deva[ग्राम] or @deva[कौट]. Examples: @deva[ग्रामतक्षः] (village carpenter), @deva[कौटतक्षः] (independent craftsman).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[तक्षन्] (carpenter) in Tatpuruṣa when preceded by @deva[ग्राम] or @deva[कौट]. The jāti/saṃjñā condition from the previous sūtra doesn't continue here. @deva[ग्रामस्य तक्षा] = @deva[ग्रामतक्षः] (the public carpenter shared by all villagers). @deva[कुट्यां भवः] = @deva[कौटः]; @deva[कौटस्य तक्षा] = @deva[कौटतक्षः] (an independent artisan, not bound under engagement to any particular patron—@deva[स्वतन्त्रः कर्मजीवी]).",
                "advanced": "The @deva[ग्रामतक्ष] is a communal craftsman serving the village collectively (@deva[बहूनां साधारणः]). The @deva[कौटतक्ष] represents the opposite—an independent professional (@deva[न कस्यचित् प्रातिबद्धः]). The semantic distinction reflects social/economic categories of artisans in traditional society. The @deva[कौट] is derived from @deva[कुटी] (hut/workshop) + taddhita."
            }
        },
        "54096": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[श्वन्] (dog) at the end of a Tatpuruṣa compound when preceded by @deva[अति]. Examples: @deva[अतिश्वः वराहः] (a boar faster than a dog), @deva[अतिश्वः सेवकः] (a servant more devoted than a dog), @deva[अतिश्वी सेवा] (service lower than a dog's).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[श्वन्] in Tatpuruṣa when preceded by @deva[अति] (surpassing). Thus @deva[अतिक्रान्तः श्वानम्] = @deva[अतिश्वः वराहः] (a boar swifter than a dog, @deva[जववान्]). @deva[अतिश्वः सेवकः] (a servant more devoted to his master than a dog). @deva[अतिश्वी सेवा] (service more menial/degraded than a dog's, @deva[अतिनीचा सेवा]).",
                "advanced": "The @deva[अति]-prefix creates comparative compounds: exceeding or surpassing the standard of comparison (@deva[श्वन्]). The semantic range includes: (1) positive comparison (swifter/more devoted than a dog), (2) negative comparison (more degraded/menial than dog-service). The @deva[टच्] transforms @deva[श्वन्] to @deva[श्व] in compound-final position."
            }
        },
        "54097": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[श्वन्] (dog) at the end of a Tatpuruṣa compound when a non-living thing is compared to it. Examples: @deva[आकर्षश्वः] (a dog-like bow), @deva[फलकश्वः] (a dog-like blade). But: @deva[वानरश्वा] (a dog-like monkey—living thing).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[श्वन्] in Tatpuruṣa when a non-living object (@deva[अचेतन]) is compared to a dog. Compounding by @ref[2.1.56] (metaphorical Tatpuruṣa). Thus @deva[आकर्षः श्व इव] = @deva[आकर्षश्वः] (a dog-like bow), @deva[फलकश्वः] (a dog-like blade). When the thing compared is living: @deva[वानरः श्व इव] = @deva[वानरश्वा] (a dog-like monkey)—no affix. The Kāśikā's counter-example @deva[अश्वा लोष्टः] is problematic since @deva[नञ्]-Tatpuruṣa is already blocked by @ref[5.4.71]; better example: @deva[निःश्वा लोष्टः].",
                "advanced": "The condition @deva[अचेतन] (non-living) restricts the comparison: inanimate objects metaphorically called 'dogs' take @deva[टच्], but animate creatures (like monkeys) compared to dogs don't. The @ref[2.1.56] reference indicates these are @deva[उपमान]-Tatpuruṣas (metaphorical compounds). The distinction between @deva[अतिश्व] (@ref[5.4.96], surpassing) and @deva[उपमानश्व] (this sūtra, resembling) is significant."
            }
        },
        "54098": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[सक्थि] (thigh) at the end of a Tatpuruṣa compound when preceded by @deva[उत्तर], @deva[मृग], @deva[पूर्व], or when something is compared to it. Examples: @deva[उत्तरसक्थम्], @deva[मृगसक्थम्], @deva[पूर्वसक्थम्], @deva[फलकसक्थम्] (board-like thigh).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[सक्थि] (thigh) in Tatpuruṣa when preceded by @deva[उत्तर], @deva[मृग], or @deva[पूर्व], as well as in comparative compounds (@deva[उपमानात्] continues via @deva[च]). Thus @deva[उत्तरसक्थम्] (upper/northern thigh), @deva[मृगसक्थम्] (deer's thigh), @deva[पूर्वसक्थम्] (front/eastern thigh). In comparison: @deva[फलकम् इव सक्थि] = @deva[फलकसक्थम्] (a board-like thigh).",
                "advanced": "The @deva[च] in the sūtra draws in @deva[उपमानात्] from @ref[5.4.97], extending the comparison condition to @deva[सक्थि]. The anatomical/directional terms (@deva[उत्तर], @deva[पूर्व]) and @deva[मृग] (deer) are specifically listed, possibly reflecting common collocations in medical or descriptive texts. The @deva[टच्] changes @deva[सक्थि] to @deva[सक्थ] in compound-final position."
            }
        },
        "54099": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[नौ] (boat) at the end of a Dvigu compound. Examples: @deva[द्विनावम्] (a pair of boats), @deva[त्रिनावम्] (three boats), @deva[द्विनावधनम्] (wealth of two boats). But: @deva[राजनौः] (king's boat), @deva[पञ्चनौः] (bought for five boats—taddhita elided).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[नौ] in Dvigu (numeral) compounds. Thus @deva[द्वे नावौ समाहृते] = @deva[द्विनावम्], @deva[त्रिनावम्]. Also @deva[द्विनावधनम्], @deva[पञ्चनावप्रियः]; and with taddhita: @deva[द्विनावरूप्यम्], @deva[द्विनावमयम्] (@ref[4.3.31]). Non-Dvigu: @deva[राजनौः] (king's boat)—no affix. The @deva[अतद्धितलुकि] condition from @ref[5.4.92] applies: @deva[पञ्चभिर्नौभिः क्रीतः] = @deva[पञ्चनौः], @deva[दशनौः]—no @deva[टच्] because taddhita is elided.",
                "advanced": "The restriction to @deva[द्विगु] (numeral determinative) compounds means the first member must be a number. The @deva[अतद्धितलुकि] condition carries over: if the compound was formed by eliding a taddhita like @deva[ठक्] (@ref[5.1.37], denoting 'bought for'), @deva[टच्] is blocked. This maintains consistency with @ref[5.4.92]'s principle."
            }
        },
        "54100": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[नौ] (boat) at the end of a Tatpuruṣa compound when preceded by @deva[अर्ध] (half). Example: @deva[अर्धनावम्] (half a boat).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[नौ] in Tatpuruṣa when preceded by @deva[अर्ध] (half). Thus @deva[अर्धं नावः] = @deva[अर्धनावम्]. Compounding by @ref[2.2.2]. The compound is neuter gender, not following the feminine gender of @deva[नौ] as @ref[2.4.26] would normally require. This is because gender is determined by usage (@deva[लोकाश्रयत्वं लिङ्गस्य]) rather than strict grammatical rules.",
                "advanced": "The @deva[अर्ध]-compound represents fractional expressions. The neuter gender @deva[अर्धनावम्] (rather than feminine @deva[अर्धनौः] following @deva[नौ]) illustrates the principle that gender conventions override strict grammatical derivation. The @ref[2.2.2] reference indicates the compounding rule for fractional terms. This sūtra extends @deva[टच्] beyond Dvigu to include @deva[अर्ध]-Tatpuruṣa."
            }
        },
        "54101": {
            "en": {
                "simple": "According to Eastern grammarians, the affix @deva[टच्] is added to @deva[खारी] (a measure) at the end of a Dvigu compound or when preceded by @deva[अर्ध]. Examples: @deva[द्विखारम्] or @deva[द्विखारी], @deva[अर्धखारम्] or @deva[अर्धखारी].",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[खारी] (a grain measure) in Dvigu or @deva[अर्ध]-Tatpuruṣa compounds, according to the Eastern grammarians (@deva[प्राचाम्]). Both @deva[द्विगोः] and @deva[अर्धात्] are understood. Thus @deva[द्वे खार्यौ समाहृते] = @deva[द्विखारम्] or @deva[द्विखारी]. Similarly @deva[अर्धं खार्याः] = @deva[अर्धखारम्] or @deva[अर्धखारी]. According to Padamañjarī, this sūtra is dispensable since @deva[खार] (a variant of @deva[खारी]) is governed by the vārttika @deva[ठन्येभ्योऽपि दृश्यते] under @ref[5.1.57-58].",
                "advanced": "The designation @deva[प्राचाम्] (of the Eastern grammarians) indicates a regional grammatical tradition. The optional forms (@deva[द्विखारम्]/deva[द्विखारी]) suggest the affix itself may be optional. The Padamañjarī's comment that @deva[खार] = @deva[खारी] points to lexical variation that could render this rule redundant under broader vārttika coverage."
            }
        },
        "54102": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[अञ्जलि] (cupped hands) at the end of a Dvigu compound when preceded by @deva[द्वि] or @deva[त्रि]. Examples: @deva[द्व्यञ्जलम्] (two handfuls), @deva[त्र्यञ्जलम्] (three handfuls). But: @deva[द्व्यञ्जलिः] (relating to two handfuls—non-Dvigu).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[अञ्जलि] (cupped hands, handful) in Dvigu compounds when preceded by @deva[द्वि] or @deva[त्रि]. Thus @deva[द्वौ अञ्जली समाहृतौ] = @deva[द्व्यञ्जलम्], @deva[त्र्यञ्जलम्]. The @deva[द्विगोः] condition continues: non-Dvigu @deva[द्वयोः अञ्जलिः] = @deva[द्व्यञ्जलिः] (without @deva[टच्]). The @deva[अतद्धितलुकि] condition applies: @deva[द्वाभ्याम् अञ्जलिभ्यां क्रीतः] = @deva[द्व्यञ्जलिः], @deva[त्र्यञ्जलिः] (@ref[5.1.28]). The Eastern grammarians' option continues: alternatively @deva[द्व्यञ्जलिप्रियः].",
                "advanced": "The restriction to @deva[द्वि] and @deva[त्रि] specifically limits which numerals trigger @deva[टच्]. The Dvigu requirement distinguishes collective measurement (@deva[द्व्यञ्जलम्] = 'a double-handful as a unit') from relational expressions (@deva[द्व्यञ्जलिः] = 'pertaining to two handfuls'). The @deva[प्राचाम्] from @ref[5.4.101] continues, indicating these are optionally applicable forms."
            }
        },
        "54103": {
            "en": {
                "simple": "In Vedic usage, the affix @deva[टच्] is optionally added to a neuter Tatpuruṣa compound ending in @deva[अन्] or @deva[अस्]. Examples: @deva[हस्तिचर्मम्] (elephant hide), @deva[देवच्छन्दसम्] (divine meter). But: @deva[बिल्वदारु] (bilva wood).",
                "standard": "This sūtra prescribes @deva[टच्] in @deva[छन्दस्] (Vedic literature) after neuter Tatpuruṣa compounds ending in @deva[अन्] or @deva[अस्]. Examples with @deva[अन्]: @deva[हस्ति] + @deva[चर्मन्] = @deva[हस्तिचर्मम्] as in @deva[हस्तिचर्मे जुहोति], @deva[ऋषभचर्मे अभिषिञ्चति]. Examples with @deva[अस्]: @deva[देव] + @deva[छन्दस्] = @deva[देवच्छन्दसम्], @deva[मनुष्यच्छन्दसानि]. Not ending in @deva[अन्/अस्]: @deva[बिल्वदारु जुहोति]. Not neuter: @deva[सुत्रामाणं पृथिवीं द्याम् अनेहसम्]. A vārttika adds @deva[वा] (optionally): @deva[ब्रह्मसाम] or @deva[ब्रह्मसामम्], @deva[देवच्छन्दः] or @deva[देवच्छन्दसम्].",
                "advanced": "The Vedic restriction (@deva[छन्दसि]) limits this to sacred texts. The dual condition—neuter gender AND @deva[अन्/अस्] ending—is required. The vārttika's @deva[वा] creates optionality between forms with and without @deva[टच्]. This reflects the greater morphological flexibility in Vedic Sanskrit compared to classical usage."
            }
        },
        "54104": {
            "en": {
                "simple": "The affix @deva[टच्] is added to @deva[ब्रह्मन्] (Brahmin) at the end of a Tatpuruṣa compound when the first member denotes a country (making a person of that region). Examples: @deva[सुराष्ट्रब्रह्मः] (a Brahmin from Suraṣṭra), @deva[अवन्तिब्रह्मः] (a Brahmin from Avanti). But: @deva[देवब्रह्मा] (bard of the gods).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[ब्रह्मन्] in Tatpuruṣa when the compound denotes a @deva[जानपद] (person belonging to a region). The first member must be a country name. Thus @deva[सुराष्ट्रेषु ब्रह्मा] = @deva[सुराष्ट्रब्रह्मः] (a Brahmin of Suraṣṭra), @deva[अवन्तिब्रह्मः] (a Brahmin of Avanti). These are Locative Tatpuruṣas. Without the regional meaning: @deva[देवब्रह्मा नारदः] (Nārada the divine bard)—no affix.",
                "advanced": "The condition @deva[जानपदे] (denoting regional affiliation) restricts the rule to compounds where a Brahmin is characterized by their geographical origin. The Locative Tatpuruṣa structure (@deva[सुराष्ट्रेषु ब्रह्मा] = 'a Brahmin in/of Suraṣṭra') yields @deva[सुराष्ट्रब्रह्मः]. When @deva[ब्रह्मन्] has non-regional modifiers (like @deva[देव] = divine), the semantic condition fails."
            }
        },
        "54105": {
            "en": {
                "simple": "The affix @deva[टच्] is optionally added to @deva[ब्रह्मन्] (Brahmin) at the end of a Tatpuruṣa compound when preceded by @deva[कु] (bad) or @deva[महत्] (great). Examples: @deva[कुब्रह्मः] or @deva[कुब्रह्मा], @deva[महाब्रह्मः] or @deva[महाब्रह्मा].",
                "standard": "This sūtra prescribes optional @deva[टच्] after @deva[ब्रह्मन्] in Tatpuruṣa when preceded by @deva[कु] (bad, inferior) or @deva[महत्] (great). Thus @deva[कुब्रह्मः] or @deva[कुब्रह्मा] (a bad/inferior Brahmin), @deva[महाब्रह्मः] or @deva[महाब्रह्मा] (a great Brahmin). The word @deva[ब्रह्मन्] here is synonymous with @deva[ब्राह्मण] (a Brahmin, member of the priestly class).",
                "advanced": "The optionality (@deva[विभाषा]) allows both samāsānta and non-samāsānta forms. @deva[कु] is a pejorative prefix (cf. @deva[कुपुत्र], @deva[कुस्त्री]); @deva[महत्] is laudatory. The dual treatment—optional @deva[टच्]—contrasts with the obligatory application in @ref[5.4.104] where regional affiliation is involved. The note that @deva[ब्रह्मन्] = @deva[ब्राह्मण] clarifies the denotation."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.4.91-105)")

if __name__ == "__main__":
    main()
