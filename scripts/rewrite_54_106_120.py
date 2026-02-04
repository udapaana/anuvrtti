#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.4.106-120."""

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
        "54106": {
            "en": {
                "simple": "The affix @deva[टच्] is added to a Samāhāra Dvandva (collective copulative compound) when it ends in a palatal, @deva[द्], @deva[ष्], or @deva[ह्]. Examples: @deva[वाक्त्वचम्] (speech and skin), @deva[समिद्दृषदम्] (fuel and millstone), @deva[छत्रोपानहम्] (umbrella and shoes).",
                "standard": "This sūtra prescribes @deva[टच्] after Samāhāra Dvandva (collective Dvandva, always neuter singular) compounds ending in palatals (@deva[च]-class) or @deva[द्], @deva[ष्], @deva[ह्]. The Tatpuruṣa anuvṛtti from @ref[5.4.86] ceases. Examples: @deva[वाक् च त्वक् च] = @deva[वाक्त्वचम्], @deva[स्रक्त्वचम्], @deva[श्रीस्रजम्], @deva[इडूर्जम्], @deva[वागूर्जम्], @deva[समिद्दृषदम्], @deva[संपद्विपदम्], @deva[वाग्विप्रुषम्], @deva[छत्रोपानहम्], @deva[धेनुगोदुहम्]. Non-Dvandva Tatpuruṣa doesn't qualify: @deva[पञ्च वाचः समाहृताः] = @deva[पञ्चवाक्]. Wrong ending: @deva[वाक्समित्]. Non-Samāhāra (Itaretara) Dvandva: @deva[प्रावृट्शरदौ] (dual, not neuter singular).",
                "advanced": "The consonant classes specified are: (1) palatals (@deva[च]-class: @deva[च्, छ्, ज्, झ्, ञ्]), (2) @deva[द्], (3) @deva[ष्], (4) @deva[ह्]. The restriction to @deva[समाहारद्वन्द्व] (collective, neuter singular) excludes @deva[इतरेतरद्वन्द्व] (mutual, preserving number). The @deva[झय्] pratyāhāra (all mutes) appears in @ref[5.4.111] for Avyayībhāva, but here specific consonants are enumerated."
            }
        },
        "54107": {
            "en": {
                "simple": "The affix @deva[टच्] is added to words of the @deva[शरद्] class when forming an Avyayībhāva compound. Examples: @deva[उपशरदम्] (near autumn), @deva[प्रतिशरदम्], @deva[उपविपाशम्], @deva[प्रतिविपाशम्]. But: @deva[परमशरत्] (Tatpuruṣa).",
                "standard": "This sūtra prescribes @deva[टच्] after @deva[शरदादि] words in Avyayībhāva compounds. Thus @deva[शरदः समीपम्] = @deva[उपशरदम्], @deva[प्रतिशरदम्]; @deva[उपविपाशम्], @deva[प्रतिविपाशम्]. Non-Avyayībhāva: @deva[परमशरत्] (supreme autumn). Words ending in @deva[झय्] consonants take @deva[टच्] obligatorily (@deva[नित्य]) despite @ref[5.4.111]'s option. The @deva[अव्ययीभाव] anuvṛtti extends to @ref[5.4.113].",
                "advanced": "The @deva[शरदादि] gaṇa includes 23 items: @deva[शरद्], @deva[विपाश्], @deva[अनस्], @deva[मनस्], @deva[उपानह्], @deva[अनडुह्], @deva[दिव्], @deva[हिमवत्], @deva[हिरुक्], @deva[विद्], @deva[सद्], @deva[दिश्], @deva[दृश्], @deva[विश्], @deva[चतुर्], @deva[त्यद्], @deva[तद्], @deva[यद्], @deva[कियत्], @deva[जरा/जरस्] (as @deva[उपजरसम्]), @deva[अक्ष्न्] after @deva[प्रति/पर/सम्/अनु] (yielding @deva[प्रत्यक्षम्], @deva[परोक्षः], @deva[समक्षम्], @deva[अन्वक्षम्]), @deva[पथिन्], @deva[सदृश्]."
            }
        },
        "54108": {
            "en": {
                "simple": "The affix @deva[टच्] is added to an Avyayībhāva compound ending in a word with final @deva[अन्]. Examples: @deva[उपराजम्] (near the king), @deva[अध्यात्मम्] (relating to the self), @deva[प्रत्यात्मम्].",
                "standard": "This sūtra prescribes @deva[टच्] after Avyayībhāva compounds whose final member ends in @deva[अन्]. Thus @deva[उपराजम्], @deva[अध्यात्मम्], @deva[प्रत्यात्मम्]. The final @deva[अन्] is elided by @ref[6.4.144]. This rule is obligatory, setting up the optional modification in the following sūtra.",
                "advanced": "The @deva[अन्]-final words include stems like @deva[राजन्], @deva[आत्मन्], etc. The @ref[6.4.144] @deva[अन्]-elision operates before the @deva[टच्] affix. This sūtra establishes the basic rule; @ref[5.4.109] provides optionality for neuter @deva[अन्]-stems specifically."
            }
        },
        "54109": {
            "en": {
                "simple": "The affix @deva[टच्] is optionally added to an Avyayībhāva compound ending in a neuter word with final syllable @deva[अन्]. Examples: @deva[प्रतिचर्मम्] or @deva[प्रतिचर्म], @deva[उपचर्मम्] or @deva[उपचर्म].",
                "standard": "This sūtra provides optionality where @ref[5.4.108] was obligatory. When the Avyayībhāva ends in a neuter word with @deva[अन्] as its final syllable (@deva[टि]), @deva[टच्] is optional. Thus @deva[प्रतिचर्मम्] or @deva[प्रतिचर्म], @deva[उपचर्मम्] or @deva[उपचर्म]. The neuter gender of the final member triggers the option.",
                "advanced": "The condition @deva[नपुंसके] (in neuter) qualifies the final compound member. Words like @deva[चर्मन्] (neuter, 'skin/hide') allow either @deva[टच्]-form (@deva[उपचर्मम्]) or non-@deva[टच्]-form (@deva[उपचर्म]). The obligatory-vs-optional distinction between masculine @deva[राजन्] (always @deva[उपराजम्]) and neuter @deva[चर्मन्] (either form) is grammatically significant."
            }
        },
        "54110": {
            "en": {
                "simple": "The affix @deva[टच्] is optionally added to an Avyayībhāva compound ending in @deva[नदी], @deva[पौर्णमासी], or @deva[आग्रहायणी]. Examples: @deva[उपनदम्] or @deva[उपनदि], @deva[उपपौर्णमासम्] or @deva[उपपौर्णमासि].",
                "standard": "This sūtra prescribes optional @deva[टच्] after @deva[नदी] (river), @deva[पौर्णमासी] (full-moon day), and @deva[आग्रहायणी] (a specific day/month) in Avyayībhāva compounds. Thus @deva[नद्याः समीपम्] = @deva[उपनदम्] or @deva[उपनदि]; @deva[उपपौर्णमासम्] or @deva[उपपौर्णमासि]; @deva[उपाग्रहायणम्] or @deva[उपाग्रहायणि]. The forms without @deva[टच्] retain the @deva[ई]-ending.",
                "advanced": "These three feminine words specifically get optional treatment. The @deva[टच्] forms show @deva[ई] → @deva[अ] change (@deva[नदी] → @deva[उपनदम्]), while non-@deva[टच्] forms retain @deva[इ] (@deva[उपनदि]). This parallels the neuter optionality in @ref[5.4.109] but for specific feminines."
            }
        },
        "54111": {
            "en": {
                "simple": "The affix @deva[टच्] is optionally added to an Avyayībhāva compound ending in a @deva[झय्] (mute consonant). Examples: @deva[उपसमिधम्] or @deva[उपसमित्], @deva[उपदृषदम्] or @deva[उपदृषत्].",
                "standard": "This sūtra prescribes optional @deva[टच्] after Avyayībhāva compounds ending in a @deva[झय्]-class consonant (all mute consonants). Thus @deva[उपसमिधम्] or @deva[उपसमित्], @deva[उपदृषदम्] or @deva[उपदृषत्]. Without @deva[टच्], the word retains its original consonant ending.",
                "advanced": "The @deva[झय्] pratyāhāra includes all 25 stops (mutes): @deva[क्]-class through @deva[प्]-class. This creates a broad optional rule for consonant-final Avyayībhāvas. Note that @ref[5.4.107] (@deva[शरदादि]) makes @deva[टच्] obligatory for its gaṇa members even though they end in @deva[झय्], overriding this optionality."
            }
        },
        "54112": {
            "en": {
                "simple": "According to grammarian Senaka, the affix @deva[टच्] is optionally added to an Avyayībhāva compound ending in @deva[गिरि] (mountain). Examples: @deva[अन्तर्गिरम्] or @deva[अन्तर्गिरि], @deva[उपगिरम्] or @deva[उपगिरि].",
                "standard": "This sūtra attributes to grammarian Senaka the optional @deva[टच्] after @deva[गिरि] (mountain) in Avyayībhāva compounds. Thus @deva[अन्तर्गिरम्] or @deva[अन्तर्गिरि], @deva[उपगिरम्] or @deva[उपगिरि]. Senaka's name is mentioned for respect (@deva[पूजार्थ]), since @deva[अन्यतरस्याम्] (optionality) was already understood from context.",
                "advanced": "The citation of Senaka reflects the tradition of acknowledging individual grammarians' contributions. The optionality (@deva[विभाषा]) was already flowing from previous sūtras, making Senaka's explicit mention honorific rather than technically necessary. @deva[गिरि] is an @deva[इ]-stem, so the @deva[टच्] form shows @deva[इ] → @deva[अ]."
            }
        },
        "54113": {
            "en": {
                "simple": "The affix @deva[षच्] is added to @deva[सक्थि] (thigh) and @deva[अक्षि] (eye) at the end of a Bahuvrīhi compound when denoting a body part. Examples: @deva[दीर्घसक्थः] (long-thighed), @deva[लोहिताक्षः] (red-eyed), @deva[विशालाक्षः] (wide-eyed).",
                "standard": "This sūtra prescribes @deva[षच्] (not @deva[टच्]) after @deva[सक्थि] and @deva[अक्षि] in Bahuvrīhi compounds denoting body parts. Thus @deva[दीर्घे सक्थि यस्य] = @deva[दीर्घसक्थः], @deva[कल्याणाक्षः], @deva[लोहिताक्षः], @deva[विशालाक्षः]. Non-Bahuvrīhi: @deva[परमसक्थिः], @deva[परमाक्षिः]. Non-body-part: @deva[दीर्घसक्थि शकटम्] (cart with long shafts), @deva[स्थूलाक्षि इक्षुः] (thick-eyed sugarcane). The @deva[ष्]-indicatory in @deva[षच्] triggers @deva[ङीष्] for feminine (@ref[4.1.41]): @deva[दीर्घसक्थी स्त्री].",
                "advanced": "The choice of @deva[षच्] over @deva[टच्] is for accent purposes. Per @ref[6.2.198], the final of a Bahuvrīhi optionally has udātta. With @deva[टच्], feminine would use @deva[ङीप्] (@ref[4.1.15]), which is anudātta (@ref[3.1.4])—creating accent inconsistency. With @deva[षच्], feminine uses @deva[ङीष्] (@ref[4.1.41]), which is always udātta, ensuring consistent accentuation. The Bahuvrīhi anuvṛtti extends to chapter's end."
            }
        },
        "54114": {
            "en": {
                "simple": "The affix @deva[षच्] is added to @deva[अङ्गुलि] (finger) at the end of a Bahuvrīhi compound when the compound means 'a piece of wood' (finger-shaped implement). Examples: @deva[द्व्यङ्गुलम् दारु], @deva[त्र्यङ्गुलम् दारु], @deva[पञ्चाङ्गुलम्].",
                "standard": "This sūtra prescribes @deva[षच्] after @deva[अङ्गुलि] in Bahuvrīhi when the compound refers to @deva[दारु] (wood)—specifically a wooden implement shaped like fingers. Thus @deva[द्व्यङ्गुलं दारु], @deva[त्र्यङ्गुलं दारु], @deva[पञ्चाङ्गुलम्] (a five-fingered wooden spoon/fork for scattering grain). Non-Bahuvrīhi: @deva[द्व्यङ्गुलयष्टिः] = @deva[द्वे अङ्गुली प्रमाणमस्याः] (a stick two fingers in size—Tatpuruṣa by @ref[5.4.86] with @deva[अच्]). Not meaning wood: @deva[पञ्चाङ्गुलिर्हस्तः] (five-fingered hand).",
                "advanced": "The semantic condition @deva[दारुणि] restricts this to wooden implements. The @deva[अङ्गुलि] here refers to finger-like prongs or shape, not measurement. The distinction from @ref[5.4.86] (which gives @deva[अच्] for measurement-sense @deva[अङ्गुलि] in Tatpuruṣa) is important: shape-in-wood = @deva[षच्]; size-measurement = @deva[अच्]."
            }
        },
        "54115": {
            "en": {
                "simple": "The affix @deva[ष] is added to @deva[मूर्धन्] (head) at the end of a Bahuvrīhi compound when preceded by @deva[द्वि] or @deva[त्रि]. Examples: @deva[द्विमूर्धः] (two-headed), @deva[त्रिमूर्धः] (three-headed). But: @deva[उच्चैर्मूर्धा] (high-headed).",
                "standard": "This sūtra prescribes @deva[ष] (just the consonant, yielding @deva[अ]) after @deva[मूर्धन्] in Bahuvrīhi when preceded by @deva[द्वि] or @deva[त्रि]. Thus @deva[द्विमूर्धः] (two-headed), @deva[त्रिमूर्धः] (three-headed). Feminine formed by @deva[ङीष्]. Accent regulated by @ref[6.2.197]. When not preceded by @deva[द्वि/त्रि]: @deva[उच्चैर्मूर्धा] (with high head)—no samāsānta affix.",
                "advanced": "The restriction to @deva[द्वि] and @deva[त्रि] suggests these specific numeral + @deva[मूर्धन्] compounds were common enough to warrant explicit treatment. The @deva[ष्]-indicatory ensures @deva[ङीष्] feminine. The @deva[अन्]-elision from @deva[मूर्धन्] and affix-addition yield @deva[मूर्ध]."
            }
        },
        "54116": {
            "en": {
                "simple": "The affix @deva[अप्] is added at the end of a Bahuvrīhi compound ending in a feminine ordinal numeral or @deva[प्रमाणी] (authority/witness). Examples: @deva[कल्याणीपञ्चमा रात्रयः] (nights whose fifth is auspicious), @deva[स्त्रीप्रमाणाः कुटुम्बिनः] (householders having a woman as authority).",
                "standard": "This sūtra prescribes @deva[अप्] after Bahuvrīhi compounds ending in feminine ordinal numerals (@deva[पूरणी], from @ref[5.2.48] ff.) or @deva[प्रमाणी] (witness/authority). Thus @deva[कल्याणा पञ्चमी आसां रात्रीणाम्] = @deva[कल्याणीपञ्चमा रात्रयः] (nights whose fifth is auspicious). @deva[स्त्री प्रमाणी एषाम्] = @deva[स्त्रीप्रमाणाः कुटुम्बिनः] (householders having a woman as authority, @deva[आर्याप्रधानाः]). Vārttikas add: (1) @deva[अप्] applies when ordinal is @deva[प्रधान]; (2) @deva[अप्] after @deva[नेतृ] with asterism names (@deva[मृगनेत्रा रात्रयः]); (3) @deva[अप्] after @deva[नेतृ] in Vedas (@deva[बृहस्पतिनेत्रा देवाः]); (4) @deva[टच्] after @deva[मास] with wage-ordinal (@deva[पञ्चकमासिकः]).",
                "advanced": "The @deva[पूरणी]-condition requires the ordinal to be in feminine form and function as principal (@deva[प्रधान]) in the Bahuvrīhi. The vārttika clarifying @deva[प्रधान]-status notes that @deva[पुंवद्भाव] (@ref[6.3.24]) prohibition also applies. The @deva[नेतृ] extensions (asterism-leader and Vedic contexts) and the @deva[मास] + wage-ordinal rule show the scope of similar patterns."
            }
        },
        "54117": {
            "en": {
                "simple": "The affix @deva[अप्] is added to @deva[लोमन्] (hair/fur) at the end of a Bahuvrīhi compound when preceded by @deva[अन्तर्] or @deva[बहिस्]. Examples: @deva[अन्तर्लोमः प्रावारः] (a cloak with fur inside), @deva[बहिर्लोमः पटः] (cloth with hair outside).",
                "standard": "This sūtra prescribes @deva[अप्] after @deva[लोमन्] in Bahuvrīhi when preceded by @deva[अन्तर्] (inside) or @deva[बहिस्] (outside). Thus @deva[अन्तर्गतानि लोमानि अस्य] = @deva[अन्तर्लोमः प्रावारः] (a cloak/blanket with the hairy surface facing inward). Similarly @deva[बहिर्लोमः पटः] (cloth with hair on the outside). These describe textile orientation.",
                "advanced": "The @deva[अन्तर्/बहिस्] prefixes indicate the position of the hairy surface. The Bahuvrīhi structure describes possessive attribution: 'that which has its hair inside/outside.' The @deva[अप्] affix (yielding @deva[अ]) replaces the @deva[अन्]-ending of @deva[लोमन्]."
            }
        },
        "54118": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[नासिका] (nose) in a Bahuvrīhi compound when it's a name, with @deva[नस्] substituted for @deva[नासिका]—but not after @deva[स्थूल]. Examples: @deva[द्रुणसः] (tree-nosed), @deva[गोनसः] (cow-nosed). But: @deva[स्थूलनासिकः वराहः] (thick-nosed boar).",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[नासिका] in Bahuvrīhi when it's a @deva[संज्ञा] (name), with @deva[नस्] substituted for @deva[नासिका]. Thus @deva[द्रुः इव नासिका अस्य] = @deva[द्रुणसः] (tree-nosed, a name), @deva[वाद्ध्रीणसः], @deva[गोणसः] (cow-nosed, a type of snake). @deva[न] → @deva[ण] by @ref[8.4.3]. Not a name: @deva[तुङ्गनासिकः] (high-nosed person). After @deva[स्थूल]: @deva[स्थूलनासिको वराहः] (thick-nosed boar)—no substitution. Vārttika: after @deva[खुर/खर], @deva[नासिका] → @deva[नस्] without affix (@deva[खुरणाः], @deva[खरणाः]) or optionally with @deva[अच्] (@deva[खुरणसः], @deva[खरणसः]).",
                "advanced": "The @deva[संज्ञायाम्] condition restricts this to proper names or technical terms. The @deva[स्थूल]-exception blocks the substitution, preserving @deva[नासिका]. The vārttika's @deva[खुर/खर] treatment shows variant patterns. Vedic forms @deva[शितिनाः], @deva[अर्चनाः], @deva[अहिनाः] are noted as authoritative (@deva[इष्टि])."
            }
        },
        "54119": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[नासिका] (nose) in a Bahuvrīhi compound when an upasarga (prefix) precedes it, with @deva[नस्] substituted—even when not a name. Examples: @deva[उन्नसः] (upturned-nosed), @deva[प्रणसः] (prominent-nosed).",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[नासिका] in Bahuvrīhi when preceded by an @deva[उपसर्ग] (verbal prefix), with @deva[नस्] substituted. This applies where the compound is NOT a name (unlike @ref[5.4.118]). Thus @deva[उन्नता नासिका अस्य] = @deva[उन्नसः] (upturned nose), @deva[प्रणसः] (prominent nose). @deva[न] → @deva[ण] by @ref[8.4.28]. Vārttika: @deva[ग्र] is substituted for @deva[नासिका] after @deva[वि]: @deva[विगता नासिका अस्य] = @deva[विग्रः]; also @deva[विख्यः] in the same sense.",
                "advanced": "The @deva[उपसर्ग] condition (@deva[उद्], @deva[प्र], etc.) triggers the substitution even for non-names. This extends the @deva[नस्]-substitution beyond the name-context of @ref[5.4.118]. The vārttika's @deva[विग्र/विख्य] forms show alternative substitutions (@deva[ग्र] for @deva[नासिका] after @deva[वि])."
            }
        },
        "54120": {
            "en": {
                "simple": "These Bahuvrīhi compounds are irregularly formed with @deva[अच्]: @deva[सुप्रातः] (having a good morning), @deva[सुश्वः] (having a good tomorrow), @deva[सुदिवः] (having a good day), @deva[शारिकुक्षः] (bird-bellied), @deva[चतुरश्रः] (four-cornered), @deva[एणीपदः] (doe-footed), @deva[अजपदः] (goat-footed), @deva[प्रोष्ठपदः] (bull-footed).",
                "standard": "This sūtra lists 8 irregular Bahuvrīhi formations with @deva[अच्], some involving @deva[टि]-elision. (1-3) @deva[शोभनं प्रातः अस्य] = @deva[सुप्रातः]; @deva[शोभनं श्वः अस्य] = @deva[सुश्वः]; @deva[शोभनं दिवा अस्य] = @deva[सुदिवः]. (4) @deva[शारेः इव कुक्षिः अस्य] = @deva[शारिकुक्षः] (myna-bellied). (5) @deva[चतस्रः अश्रयः अस्य] = @deva[चतुरश्रः] (four-cornered). (6-7) @deva[एण्याः इव पादौ अस्य] = @deva[एणीपदः]; @deva[अजपदः] (goat-footed). (8) @deva[प्रोष्ठः गौः, तस्य इव पादौ अस्य] = @deva[प्रोष्ठपदः] (bull-footed).",
                "advanced": "The @deva[टि]-elision affects stems like @deva[प्रातर्] → @deva[प्रात], @deva[श्वस्] → @deva[श्व]. The @deva[सु]-prefix compounds with time-words (@deva[प्रातर्], @deva[श्वस्], @deva[दिवा]) express auspiciousness. @deva[चतुरश्र] shows @deva[अश्रि] (corner) becoming @deva[अश्र]. The animal-foot compounds (@deva[एणीपद], @deva[अजपद], @deva[प्रोष्ठपद]) are comparison-Bahuvrīhis with @deva[पाद] → @deva[पद]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.4.106-120)")

if __name__ == "__main__":
    main()
