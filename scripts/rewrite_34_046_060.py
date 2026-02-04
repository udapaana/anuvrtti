#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.4.46-3.4.60 (Batch 4 of 3.4)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "34046": {
        "en": {
            "simple": "This rule restricts which verb can follow gerunds formed with @deva[णमुल्] from @deva[कष्] and similar roots (covered in @ref[3.4.34] through @ref[3.4.45]). The gerund must be followed by a verb derived from the same root. For example, @deva[निमूलकाषं] @deva[कषति] 'he scrapes down to the roots' uses @deva[कष्] for both the gerund and the main verb. This is a @deva[नियम] (restriction) rule—it limits what would otherwise be free choice.",
            "standard": "This @deva[नियम] (restrictive) rule governs sūtras @ref[3.4.34]–@ref[3.4.45]. In those rules, the @deva[णमुल्]-ending gerund must be followed by an @deva[अनुप्रयोग] (governing verb) derived from the same @deva[धातु]. Since this @deva[अध्याय] concerns @deva[धातुसम्बन्धे] @deva[प्रत्ययाः] (affixes expressing relations between verbs, see @ref[3.4.1]), a gerund in @deva[णमुल्] naturally requires some following verb. This sūtra restricts that verb to sharing the same root as the gerund.",
            "advanced": "This @deva[नियमसूत्र] applies to @ref[3.4.34]–@ref[3.4.45]. The @deva[णमुल्]-formed gerund requires an @deva[अनुप्रयोग] from the identical @deva[धातु]. The chapter heading @deva[धातुसम्बन्धे] @deva[प्रत्ययाः] (@ref[3.4.1]) establishes that these affixes express syntactic relations between verbs, so a gerund necessarily takes a governing verb—this sūtra restricts which verb qualifies. Examples under @ref[3.4.34]–@ref[3.4.45] illustrate: @deva[निमूलकाषं] @deva[कषति], @deva[शुष्कपेषं] @deva[पिनष्टि], etc."
        }
    },
    "34047": {
        "en": {
            "simple": "The affix @deva[णमुल्] comes after the root @deva[दंश्] 'to bite' when preceded by @deva[उप] and compounded with a word in the instrumental case (third case). This forms expressions like @deva[मूलकोपदंशम्] @deva[भुङ्क्ते] 'he eats while relishing radish (as a side dish)'. The compounding is optional by @ref[2.2.21], so you can also say @deva[मूलकेनोपदंशम्] @deva[भुङ्क्ते]. By @ref[3.1.94], @deva[क्त्वा] (becoming @deva[ल्यप्]) may optionally replace @deva[णमुल्]: @deva[मूलकेनोपदश्य] @deva[भुङ्क्ते].",
            "standard": "After @deva[उप] + @deva[दंश्] 'to bite/relish', @deva[णमुल्] is added when an instrumental-ending word is compounded. The @deva[उपपद] @deva[समास] is optional (@ref[2.2.21]): @deva[मूलकोपदंशम्] @deva[भुङ्क्ते] or @deva[मूलकेनोपदंशम्] @deva[भुङ्क्ते] 'he eats, relishing radish'. The @deva[उपपद] (@deva[मूलक] etc.) is the object of @deva[उपदंश्] and the instrument of @deva[भुज्]. By @deva[वाऽसरूप] (@ref[3.1.94]), @deva[क्त्वा]/@deva[ल्यप्] may substitute: @deva[मूलकेनोपदश्य] @deva[भुङ्क्ते].",
            "advanced": "With @deva[उप] + @deva[दंश्], @deva[णमुल्] is conditioned on an instrumental-ending @deva[उपपद]. @ref[2.2.21] makes compounding optional: @deva[मूलकोपदंशम्] or @deva[मूलकेनोपदंशम्] @deva[भुङ्क्ते], @deva[आर्द्रकोपदंशम्] or @deva[आर्द्रकेणोपदंशम्] 'relished with ginger'. The @deva[उपपद] serves dual @deva[कारक] roles: @deva[कर्मन्] of @deva[उपदंश्], @deva[करण] of @deva[भुज्]. @deva[वाऽसरूप] (@ref[3.1.94]) permits @deva[क्त्वा]/@deva[ल्यप्] as alternatives throughout this section."
        }
    },
    "34048": {
        "en": {
            "simple": "The affix @deva[णमुल्] comes after roots meaning @deva[हिंस्] 'to strike/injure' when (1) the object of the gerund is the same as the object of the main verb, and (2) an instrumental-case word is compounded. Example: @deva[दण्डोपघातम्] @deva[गाः] @deva[कालयति] 'he gathers cows, beating them with a club'. Compounding is optional (@ref[2.2.21]): @deva[दण्डेनोपघातम्]. If the objects differ, @deva[णमुल्] doesn't apply: @deva[चोरम्] @deva[दण्डेनोपहत्य], @deva[गोपालको] @deva[गाः] @deva[कालयति] 'having beaten the thief, the cowherd gathers the cows'.",
            "standard": "Roots with @deva[हिंस्]-meaning take @deva[णमुल्] when: (1) the gerund's @deva[कर्मन्] equals the main verb's @deva[कर्मन्], and (2) an instrumental-ending noun is compounded. @deva[दण्डोपघातम्] @deva[गाः] @deva[कालयति] 'he gathers cows by beating them with a stick'—both verbs share @deva[गाः] as object. Optional compounding (@ref[2.2.21]) yields @deva[दण्डेनोपघातम्]. Similarly @deva[दण्डताडम्] or @deva[दण्डेन] @deva[ताडम्]. When objects differ—@deva[चोरम्] @deva[दण्डेनोपहत्य], @deva[गाः] @deva[कालयति]—regular @deva[क्त्वा]/@deva[ल्यप्] applies instead.",
            "advanced": "@deva[हिंसार्थ] roots take @deva[णमुल्] under two conditions: @deva[कर्मसामान्य] (shared object between gerund and @deva[अनुप्रयोग]) and instrumental @deva[उपपद]. @deva[दण्डोपघातम्] @deva[गाः] @deva[कालयति]—@deva[गाः] is @deva[कर्मन्] of both @deva[उपघात्] (beating) and @deva[कालय्] (gathering). @ref[2.2.21] makes compounding optional. The @deva[कर्मसामान्य] condition excludes cases like @deva[चोरम्] @deva[दण्डेनोपहत्य], @deva[गोपालको] @deva[गाः] @deva[कालयति] where @deva[चोर] and @deva[गो] are distinct objects."
        }
    },
    "34049": {
        "en": {
            "simple": "The affix @deva[णमुल्] comes after @deva[पीड्] 'to press', @deva[रुध्] 'to obstruct', and @deva[कृष्] 'to draw' when preceded by @deva[उप] and compounded with a locative-case or instrumental-case word. Example: @deva[पार्श्वोपपीडं] @deva[शेते] 'he sleeps pressing on his sides'. Compounding is optional (@ref[2.2.21]): @deva[पार्श्वयोरुपपीडम्] or @deva[पार्श्वाभ्यामुपपीडम्]. Similarly: @deva[व्रजोपरोधम्] @deva[गाः] @deva[स्थापयति] 'he stations cows blocking the fold', @deva[पाण्युपकर्षं] @deva[धानाः] @deva[सङ्गृह्णाति] 'he gathers grains drawing with the hand'. The root @deva[कृष्] here is @deva[भ्वादि], not @deva[तुदादि].",
            "standard": "After @deva[उप] + @deva[पीड्]/@deva[रुध्]/@deva[कृष्], @deva[णमुल्] applies with locative or instrumental @deva[उपपद]. The word @deva[च] in the sūtra draws in the instrumental from the previous rule. @deva[पार्श्वोपपीडं] @deva[शेते] 'sleeps pressing sides'; optionally (@ref[2.2.21]) @deva[पार्श्वयोरुपपीडम्] (loc.) or @deva[पार्श्वाभ्यामुपपीडम्] (instr.). @deva[व्रजोपरोधम्] or @deva[व्रजे] @deva[उपरोधम्] or @deva[व्रजेनोपरोधम्] @deva[गाः] @deva[स्थापयति]. @deva[पाण्युपकर्षं] @deva[धानाः] @deva[सङ्गृह्णाति]. The @deva[कृष्] intended is @deva[भ्वादि] @deva[कृष्], not @deva[तुदादि].",
            "advanced": "@deva[उप] + @deva[पीड्]/@deva[रुध्]/@deva[कृष्] take @deva[णमुल्] with saptamī or tṛtīyā @deva[उपपद]. The @deva[च] draws @deva[तृतीया] from the previous sūtra. Examples: @deva[पार्श्वोपपीडं] @deva[शेते]; with optional non-compounding (@ref[2.2.21]): @deva[पार्श्वयोरुपपीडम्] (saptamī) or @deva[पार्श्वाभ्यामुपपीडम्] (tṛtīyā). @deva[व्रजोपरोधम्]/@deva[व्रजे] @deva[उपरोधम्]/@deva[व्रजेनोपरोधम्] @deva[गाः] @deva[स्थापयति]. @deva[पाण्युपकर्षं]/@deva[पाणावुपकर्षम्]/@deva[पाणिनोपकर्षम्] @deva[धानाः] @deva[सङ्गृह्णाति]. The @deva[कृष्] is @deva[भ्वादि] (not @deva[तुदादि])."
        }
    },
    "34050": {
        "en": {
            "simple": "The affix @deva[णमुल्] comes after a root when a locative or instrumental word is compounded and immediate physical contact is expressed (@deva[समासत्ति]). Example: @deva[केशग्राहम्] @deva[युध्यन्ते] 'they fight, having grabbed each other by the hair'. This can also appear uncompounded: @deva[केशेषु] @deva[ग्राहम्] (locative) or @deva[केशैर्ग्राहम्] (instrumental). Similarly: @deva[हस्तग्राहम्] 'seizing hands', @deva[यष्टिग्राहम्] 'grabbing a stick', @deva[लोष्ट्रग्राहम्] 'grabbing a clod'. Compounding is optional by @ref[2.2.21].",
            "standard": "@deva[णमुल्] applies when @deva[समासत्ति] (immediate contiguity/close contact) is meant, with saptamī or tṛtīyā @deva[उपपद]. @deva[केशग्राहम्] @deva[युध्यन्ते] 'they fight, closely grabbing hair'; alternatively @deva[केशेषु] @deva[ग्राहम्] or @deva[केशैर्ग्राहम्]. Similarly @deva[हस्तग्राहम्]/@deva[हस्तेषु] @deva[ग्राहम्]/@deva[हस्तैर्ग्राहम्]; @deva[यष्टिग्राहम्] 'seizing a stick'; @deva[लोष्ट्रग्राहम्] 'seizing a clod'. @ref[2.2.21] governs optional compounding.",
            "advanced": "@deva[समासत्ति] (immediate physical contact) conditions @deva[णमुल्] with saptamī or tṛtīyā @deva[उपपद]. @deva[केशग्राहम्] (compound) or @deva[केशेषु] @deva[ग्राहम्] (saptamī) or @deva[केशैर्ग्राहम्] (tṛtīyā) @deva[युध्यन्ते] 'they fight grabbing each other's hair'. Parallel forms: @deva[हस्तग्राहम्]/@deva[हस्तेषु] @deva[ग्राहम्]/@deva[हस्तैर्ग्राहम्]; @deva[यष्टिग्राहम्]; @deva[लोष्ट्रग्राहम्]. See @ref[2.2.21] for optional @deva[समास]."
        }
    },
    "34051": {
        "en": {
            "simple": "The affix @deva[णमुल्] comes after a root when an instrumental or locative word is compounded and a measure of length (@deva[प्रमाण]) is expressed. Example: @deva[द्व्यङ्गुलोत्कर्षं] @deva[खण्डिकां] @deva[छिनत्ति] 'he cuts pieces two fingers in length'. Without compounding (@ref[2.2.21]): @deva[द्व्यङ्गुले] @deva[उत्कर्षम्] (locative) or @deva[द्व्यङ्गुलेनोत्कर्षम्] (instrumental).",
            "standard": "@deva[णमुल्] applies when @deva[प्रमाण] (measure of length/extension) is intended, with tṛtīyā or saptamī @deva[उपपद]. @deva[द्व्यङ्गुलोत्कर्षं] @deva[खण्डिकां] @deva[छिनत्ति] 'he cuts pieces measuring two fingers'. Optional non-compounding (@ref[2.2.21]): @deva[द्व्यङ्गुले] @deva[उत्कर्षम्] or @deva[द्व्यङ्गुलेनोत्कर्षम्].",
            "advanced": "@deva[प्रमाण] (linear measure/extension) conditions @deva[णमुल्] with tṛtīyā or saptamī @deva[उपपद]. @deva[द्व्यङ्गुलोत्कर्षं] (compound) or @deva[द्व्यङ्गुले] @deva[उत्कर्षम्] (saptamī) or @deva[द्व्यङ्गुलेनोत्कर्षम्] (tṛtīyā) @deva[खण्डिकां] @deva[छिनत्ति] 'cuts pieces two-fingers long'. @ref[2.2.21] for optional @deva[समास]."
        }
    },
    "34052": {
        "en": {
            "simple": "The affix @deva[णमुल्] is added when an ablative-case (fifth case) word is compounded and haste (@deva[परीप्सा]) is expressed. Example: @deva[शय्योत्थायं] @deva[धावति] 'having risen from bed, he runs'—so hastily that he skips ablutions. Alternatively: @deva[शय्याया] @deva[उत्थायं] (uncompounded ablative). Similarly: @deva[रन्ध्रापकर्षम्] @deva[पयः] @deva[पिबति] 'he drinks milk from a hole'—too hurried to use the proper opening; @deva[भ्राष्ट्रापकर्षमपूपान्] @deva[भक्षयति] 'he eats cakes straight from the pan'. Without haste: @deva[आसनादुत्थाय] @deva[गच्छति] uses @deva[क्त्वा]/@deva[ल्यप्] instead.",
            "standard": "@deva[णमुल्] applies with pañcamī @deva[उपपद] when @deva[परीप्सा] (haste/hurry) is meant. @deva[शय्योत्थायं] @deva[धावति] 'he runs immediately upon rising from bed'—omitting even ablutions. Optionally uncompounded (@ref[2.2.21]): @deva[शय्याया] @deva[उत्थायम्]. @deva[रन्ध्रापकर्षम्] @deva[पयः] @deva[पिबति] 'drinks milk from a hole in the vessel' (too rushed for proper aperture). @deva[भ्राष्ट्रापकर्षमपूपान्] @deva[भक्षयति] 'eats cakes hot from the frying pan'. Without @deva[परीप्सा], regular @deva[क्त्वा]/@deva[ल्यप्] applies: @deva[आसनादुत्थाय] @deva[गच्छति].",
            "advanced": "Pañcamī @deva[उपपद] with @deva[परीप्सा] (haste) triggers @deva[णमुल्]. @deva[शय्योत्थायम्] (or @deva[शय्याया] @deva[उत्थायम्]) @deva[धावति] 'runs upon rising from bed'—such haste that ablutions are omitted. @deva[रन्ध्रापकर्षम्] @deva[पयः] @deva[पिबति] 'drinks milk from a hole' (bypassing proper opening). @deva[भ्राष्ट्रापकर्षमपूपान्] @deva[भक्षयति] 'eats cakes directly from pan'. Absent @deva[परीप्सा], use @deva[क्त्वा]/@deva[ल्यप्]: @deva[आसनादुत्थाय] @deva[गच्छति]. @ref[2.2.21] for optional @deva[समास]."
        }
    },
    "34053": {
        "en": {
            "simple": "The affix @deva[णमुल्] is added when an accusative-case (second case) word is compounded and haste (@deva[परीप्सा]) is expressed. Example: @deva[यष्टिग्राहम्] @deva[युध्यन्ते] 'they fight, having hastily grabbed sticks'—so rushed that they grab whatever is at hand (sticks, stones) rather than proper weapons. Alternatively: @deva[यष्टिं] @deva[ग्राहम्] (uncompounded). Similarly @deva[लोष्ट्रग्राहम्] or @deva[लोष्ट्रं] @deva[ग्राहम्] 'grabbing clods'.",
            "standard": "@deva[णमुल्] applies with dvitīyā @deva[उपपद] when @deva[परीप्सा] (haste) is intended. @deva[यष्टिग्राहम्] @deva[युध्यन्ते] 'they fight, hastily seizing sticks'—too rushed to take proper weapons, grabbing whatever is at hand. Optionally uncompounded: @deva[यष्टिं] @deva[ग्राहम्]. Similarly @deva[लोष्ट्रग्राहम्] or @deva[लोष्ट्रं] @deva[ग्राहम्] 'seizing clods in haste'.",
            "advanced": "Dvitīyā @deva[उपपद] with @deva[परीप्सा] triggers @deva[णमुल्]. @deva[यष्टिग्राहम्] (or @deva[यष्टिं] @deva[ग्राहम्]) @deva[युध्यन्ते] 'fight having hastily grabbed sticks'—no time for proper weapons. @deva[लोष्ट्रग्राहम्] or @deva[लोष्ट्रं] @deva[ग्राहम्] 'grabbing clods'. The @deva[परीप्सा] condition distinguishes this from @ref[3.4.50] (@deva[समासत्ति])."
        }
    },
    "34054": {
        "en": {
            "simple": "The affix @deva[णमुल्] comes after a verb when an accusative word denoting a non-vital limb (@deva[स्वाङ्ग] + @deva[अध्रुव]) is compounded. A @deva[स्वाङ्ग] is a body part; @deva[अध्रुव] means 'non-vital'—a limb whose loss doesn't destroy life. Example: @deva[भ्रूविक्षेपं] @deva[कथयति] 'he narrates, throwing his eyebrows about'. @deva[अक्षिनिकाणम्] @deva[जल्पति] 'he chatters with eyes closed'. But for vital organs like the head, @deva[णमुल्] doesn't apply: @deva[उत्क्षिप्य] @deva[शिरः] @deva[कथयति] 'he narrates, having tilted his head' uses @deva[क्त्वा]/@deva[ल्यप्].",
            "standard": "@deva[णमुल्] applies when a dvitīyā @deva[स्वाङ्ग] (body-part word) denoting an @deva[अध्रुव] (non-vital) limb is compounded. @deva[स्वाङ्ग]: a perceptible, non-liquid, non-gaseous part existing in a living being. @deva[अध्रुव]: a limb whose loss doesn't destroy life. @deva[भ्रूविक्षेपं] @deva[कथयति] 'narrates while raising eyebrows'; @deva[अक्षिनिकाणम्] @deva[जल्पति] 'chatters with eyes shut'. Vital organs exclude @deva[णमुल्]: @deva[उत्क्षिप्य] @deva[शिरः] @deva[कथयति] (head is @deva[ध्रुव]). See @ref[6.2.177].",
            "advanced": "Dvitīyā @deva[स्वाङ्ग] + @deva[अध्रुव] (non-vital body part) conditions @deva[णमुल्]. @deva[स्वाङ्ग] definition: perceptible, solid, naturally present in living beings, or known primarily as such. @deva[अध्रुव]: limb whose removal doesn't cause death. @deva[भ्रूविक्षेपं] @deva[कथयति]; @deva[अक्षिनिकाणम्] @deva[जल्पति]. @deva[ध्रुव] (vital) organs exclude this: @deva[उत्क्षिप्य] @deva[शिरः] @deva[कथयति]—@deva[शिरस्] is @deva[ध्रुव], so @deva[क्त्वा]/@deva[ल्यप्] applies. Cross-reference: @ref[6.2.177]."
        }
    },
    "34055": {
        "en": {
            "simple": "The affix @deva[णमुल्] comes after a root when an accusative word denoting a body part that is completely affected (@deva[परिक्लिश्यमान]) is compounded. Unlike the previous rule, this applies even to vital organs. Example: @deva[उरःपेषं] @deva[युध्यन्ते] 'they fight, crushing their whole chest'; alternatively @deva[उरः] @deva[प्रतिपेषम्]. Similarly @deva[शिरःपेषं] or @deva[शिरःप्रतिपेषम्] 'crushing the head'.",
            "standard": "@deva[णमुल्] applies when a dvitīyā @deva[स्वाङ्ग] that is @deva[परिक्लिश्यमान] (completely affected/afflicted) is compounded. Unlike @ref[3.4.54], this includes vital organs (@deva[ध्रुव]). @deva[उरःपेषं] or @deva[उरः] @deva[प्रतिपेषं] @deva[युध्यन्ते] = @deva[कृत्स्नमुरः] @deva[पीडयन्तः] 'they fight afflicting their whole chest'. Similarly @deva[शिरःपेषं] or @deva[शिरःप्रतिपेषम्] 'completely crushing the head'.",
            "advanced": "@deva[परिक्लिश्यमान] (complete affliction of the body part) conditions @deva[णमुल्] with dvitīyā @deva[स्वाङ्ग]. This differs from @ref[3.4.54] in applying to @deva[ध्रुव] (vital) organs like @deva[उरस्], @deva[शिरस्]. @deva[उरःपेषं] or @deva[उरः] @deva[प्रतिपेषं] @deva[युध्यन्ते] = @deva[कृत्स्नमुरः] @deva[पीडयन्तः] 'fight crushing entire chest'. @deva[शिरःपेषं]/@deva[शिरःप्रतिपेषम्] 'crushing the head completely'."
        }
    },
    "34056": {
        "en": {
            "simple": "The affix @deva[णमुल्] comes after @deva[विश्] 'to enter', @deva[पत्] 'to fall', @deva[पद्] 'to go', and @deva[स्कन्द्] 'to leap' when an accusative word is compounded and either @deva[व्याप्ति] (complete pervasion of all objects) or @deva[आसेवा] (repeated performance) is meant. Example: @deva[गेहानुप्रवेशमास्ते] 'he sits, having entered the house'. With @deva[व्याप्ति] (all objects): @deva[गेहं] @deva[गेहमनुप्रवेशमास्ते] 'having entered every house'. With @deva[आसेवा] (frequency): @deva[गेहमनुप्रवेशमनुप्रवेशमास्ते] 'having entered repeatedly'.",
            "standard": "@deva[णमुल्] applies after @deva[विश्]/@deva[पत्]/@deva[पद्]/@deva[स्कन्द्] with dvitīyā @deva[उपपद] when @deva[व्याप्ति] (complete pervasion of all objects) or @deva[आसेवा] (assiduous repetition) is intended. These correspond to @deva[नित्य] and @deva[वीप्सा] in @ref[8.1.4]. Without compounding (@ref[2.2.21]), repetition expresses the meaning: noun repetition for @deva[व्याप्ति], verb repetition for @deva[आसेवा]. @deva[गेहानुप्रवेशमास्ते]; @deva[गेहं] @deva[गेहमनुप्रवेशमास्ते] (every house); @deva[गेहमनुप्रवेशमनुप्रवेशमास्ते] (repeatedly). Same pattern for @deva[पत्], @deva[पद्], @deva[स्कन्द्].",
            "advanced": "@deva[विश्]/@deva[पत्]/@deva[पद्]/@deva[स्कन्द्] take @deva[णमुल्] with dvitīyā @deva[उपपद] when @deva[व्याप्ति] (pervasion—the action affects all such objects) or @deva[आसेवा] (frequency—the action is repeated) is meant. These parallel @deva[नित्य]/@deva[वीप्सा] (@ref[8.1.4]), requiring repetition when not compounded. With compounding (@ref[2.2.21]): @deva[गेहानुप्रवेशमास्ते]. Without: @deva[गेहं] @deva[गेहमनुप्रवेशमास्ते] (@deva[व्याप्ति]—every house) or @deva[गेहमनुप्रवेशमनुप्रवेशमास्ते] (@deva[आसेवा]—repeatedly). Same constructions for @deva[गेहानुप्रपातम्], @deva[गेहानुप्रपादम्], @deva[गेहावस्कन्दम्]. Without @deva[व्याप्ति]/@deva[आसेवा]: @deva[गेहमनुप्रविश्य] @deva[भुङ्क्ते] (ordinary gerund)."
        }
    },
    "34057": {
        "en": {
            "simple": "The affix @deva[णमुल्] comes after @deva[अस्] 'to throw' and @deva[तृष्] 'to be thirsty' when an accusative word denoting time is compounded and intermission of action (@deva[क्रियान्तर]) is expressed. Example: @deva[द्व्यहात्यासं] @deva[गाः] @deva[पाययति] 'he waters the cows every third day' (after a two-day interval). Or: @deva[द्व्यहतर्षं] @deva[गाः] @deva[पाययति] 'having kept the cows thirsty for two days, he waters them'. Without the time-interval sense, @deva[णमुल्] doesn't apply: @deva[द्व्यहमुपोष्य] @deva[भुङ्क्ते] uses @deva[क्त्वा]/@deva[ल्यप्].",
            "standard": "@deva[अस्]/@deva[तृष्] take @deva[णमुल्] when a dvitīyā time-word is compounded expressing @deva[क्रियान्तर] (interval between actions). @deva[द्व्यहात्यासं] or @deva[द्व्यहमत्यासम्] @deva[गाः] @deva[पाययति] 'waters cows after a two-day interval (every third day)'. @deva[द्व्यहतर्षं] or @deva[द्व्यहं] @deva[तर्षं] @deva[गाः] @deva[पाययति] 'waters cows after keeping them thirsty for two days'. The rule requires: (1) @deva[अस्]/@deva[तृष्], (2) time-denoting @deva[उपपद], (3) @deva[क्रियान्तर] sense. Without @deva[क्रियान्तर]: @deva[द्व्यहमुपोष्य] @deva[भुङ्क्ते] 'having fasted two days'. Space intervals also exclude: @deva[योजनमत्यस्य] @deva[गाः] @deva[पाययति] uses @deva[ल्यप्].",
            "advanced": "@deva[अस्] (4P, 'to throw') and @deva[तृष्] (4P, 'to thirst') take @deva[णमुल्] with dvitīyā @deva[कालवाचिन्] @deva[उपपद] when @deva[क्रियान्तर] (temporal interval between actions) is meant. @deva[द्व्यहात्यासम्]/@deva[द्व्यहमत्यासम्] @deva[गाः] @deva[पाययति] 'waters cows every third day'. @deva[द्व्यहतर्षम्]/@deva[द्व्यहं] @deva[तर्षम्] @deva[गाः] @deva[पाययति] 'waters after two-day thirst'. Conditions: (1) roots @deva[अस्]/@deva[तृष्] only; (2) time-denoting noun; (3) @deva[क्रियान्तर] sense. Counter-examples: @deva[द्व्यहमुपोष्य] @deva[भुङ्क्ते] (different root); @deva[योजनमत्यस्य] @deva[गाः] @deva[पाययति] (spatial, not temporal interval)."
        }
    },
    "34058": {
        "en": {
            "simple": "The affix @deva[णमुल्] comes after @deva[आदिश्] 'to point out' and @deva[ग्रह्] 'to seize' when the accusative word @deva[नामन्] 'name' is compounded. Examples: @deva[नामादेशमाचष्टे] 'he mentions, telling the name'; @deva[नामग्राहं] @deva[मामाह्वयति] 'he calls me by name'.",
            "standard": "@deva[आदिश्]/@deva[ग्रह्] take @deva[णमुल्] when @deva[नामन्] in the dvitīyā is compounded. @deva[नामादेशमाचष्टे] 'he mentions it, stating the name'. @deva[नामग्राहं] @deva[मामाह्वयति] 'he calls me by (taking my) name'.",
            "advanced": "@deva[आदिश्]/@deva[ग्रह्] with dvitīyā @deva[नामन्] take @deva[णमुल्]. @deva[नामादेशमाचष्टे] 'mentions stating name'. @deva[नामग्राहं] @deva[मामाह्वयति] 'calls me by name'. The @deva[उपपद] is specifically @deva[नामन्] (not other nouns)."
        }
    },
    "34059": {
        "en": {
            "simple": "Both @deva[क्त्वा] and @deva[णमुल्] come after @deva[कृ] 'to make' when an indeclinable word (@deva[अव्यय]) is compounded and the meaning involves communicating something inappropriately (@deva[अयथाभिप्रेताख्यान])—like announcing bad news loudly or good news softly. Examples: @deva[नीचैःकृत्य], @deva[नीचैःकृत्वा], or @deva[नीचैःकारम्] @deva[आचक्षे] 'he tells in a low voice (when he shouldn't)'. Similarly @deva[उच्चैःकृत्वा]/@deva[उच्चैःकृत्य]/@deva[उच्चैःकारम्] for loud announcement. Optional compounding by @ref[2.2.22].",
            "standard": "Both @deva[क्त्वा] and @deva[णमुल्] apply after @deva[कृ] with @deva[अव्यय] @deva[उपपद] when @deva[अयथाभिप्रेताख्यान] (communication in an inappropriate manner) is meant—announcing bad news loudly, good news softly, etc. @deva[नीचैःकृत्य]/@deva[नीचैःकृत्वा]/@deva[नीचैःकारम्] @deva[आचक्षे] 'he tells in low voice (inappropriately)'. Similarly @deva[उच्चैःकृत्वा]/@deva[उच्चैःकृत्य]/@deva[उच्चैःकारम्]. @ref[2.2.22] governs compounding. The repetition of @deva[क्त्वा] (available via @ref[3.1.94]) is for enabling @deva[समास]; @deva[णमुल्] repetition extends @deva[अनुवृत्ति] to subsequent sūtras.",
            "advanced": "@deva[क्त्वा] and @deva[णमुल्] both apply after @deva[कृ] with @deva[अव्यय] @deva[उपपद] under @deva[अयथाभिप्रेताख्यान] (inappropriate mode of communication). @deva[नीचैःकृत्य]/@deva[नीचैःकृत्वा]/@deva[नीचैःकारम्] @deva[आचक्षे]; @deva[उच्चैः]- forms parallel. @ref[2.2.22] for @deva[समास]. Q: Why repeat @deva[क्त्वा] when @ref[3.1.94] (@deva[वाऽसरूप]) supplies it? A: For enabling @deva[समास]. Q: Why repeat @deva[णमुल्]? A: To run @deva[अनुवृत्ति] of both @deva[क्त्वा] and @deva[णमुल्] into subsequent sūtras. Without @deva[अयथाभिप्रेताख्यान]: @deva[उच्चैःकृत्वाऽऽचक्षे] @deva[पुत्रस्ते] @deva[जातः] (only @deva[क्त्वा])."
        }
    },
    "34060": {
        "en": {
            "simple": "Both @deva[क्त्वा] and @deva[णमुल्] come after @deva[कृ] 'to make' when @deva[तिर्यक्] (an indeclinable meaning 'sideways/obliquely') is compounded and the sense is 'completing/finishing' (@deva[अपवर्ग]). Example: @deva[तिर्यक्] @deva[कृत्य], @deva[तिर्यक्] @deva[कृत्वा], or @deva[तिर्यक्कारं] @deva[गतः] = @deva[समाप्य] @deva[गतः] 'having finished, he went'. Without @deva[अपवर्ग] sense: @deva[तिर्यक्] @deva[कृत्वा] @deva[काष्ठं] @deva[गतः] 'having placed the wood obliquely, he went'—here @deva[णमुल्] doesn't apply.",
            "standard": "@deva[क्त्वा]/@deva[णमुल्] apply after @deva[कृ] with @deva[तिर्यक्] @deva[उपपद] when @deva[अपवर्ग] (completion/finishing) is meant. @deva[तिर्यक्] @deva[कृत्य]/@deva[तिर्यक्] @deva[कृत्वा]/@deva[तिर्यक्कारं] @deva[गतः] = @deva[समाप्य] @deva[गतः] 'having completed, went away'. Without @deva[अपवर्ग]: @deva[तिर्यक्] @deva[कृत्वा] @deva[काष्ठं] @deva[गतः] 'having placed wood obliquely, went' (only @deva[क्त्वा], not @deva[णमुल्]). @ref[2.2.22] governs compounding.",
            "advanced": "@deva[कृ] with @deva[तिर्यक्] takes @deva[क्त्वा]/@deva[णमुल्] when @deva[अपवर्ग] (completion) is intended. @deva[तिर्यक्] @deva[कृत्य]/@deva[कृत्वा]/@deva[तिर्यक्कारं] @deva[गतः] = @deva[समाप्य] @deva[गतः]. The @deva[तिर्यचि] in the sūtra is locative of the @deva[शब्दरूप] @deva[तिर्यच्], not the @deva[पद] @deva[तिर्यच्] (cf. @deva[एतदोश्] @ref[5.3.5], @deva[अदसो] @deva[मात्] @ref[1.1.12] for parallel word-form citations). Without @deva[अपवर्ग]: @deva[तिर्यक्] @deva[कृत्वा] @deva[काष्ठं] @deva[गतः] (literal 'obliquely'—only @deva[क्त्वा]). @ref[2.2.22] for @deva[समास]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.4.46-3.4.60 (Batch 4)")
