#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.1-4.1.15 (Batch 1 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41001": {
        "en": {
            "simple": "From this point until the end of Chapter 5, all the affixes taught are added after nominal stems (@deva[प्रातिपदिक]) or after words ending in the feminine affixes @deva[ङी] or @deva[आप्].",
            "standard": "This @deva[अधिकार] (governing rule) establishes the base for all subsequent affixes through @ref[5.4.151]. The term @deva[ङी] covers @deva[ङीप्], @deva[ङीष्], and @deva[ङीन्]; @deva[आप्] covers @deva[टाप्], @deva[डाप्], and @deva[चाप्]—the feminine affixes taught from @ref[4.1.4] to @ref[4.1.65]. The word @deva[प्रातिपदिक] refers to nominal stems as defined in @ref[1.2.45]-@ref[1.2.46]. This sūtra ensures terms like @deva[वृद्ध], @deva[अवृद्ध], @deva[अत्], @deva[अनुदात्तादि], @deva[द्व्यच्] in subsequent rules apply to @deva[प्रातिपदिक] forms, not inflected forms.",
            "advanced": "This @deva[अधिकार] sūtra governs through @ref[5.4.151], establishing @deva[ङ्याप्प्रातिपदिकात्] as the base for taddhita and strī-pratyaya application. The compound @deva[ङ्याप्प्रातिपदिकात्] is a @deva[समाहारद्वन्द्व]. Key implications: (1) When subsequent sūtras reference @deva[वृद्ध] words, they mean @deva[वृद्ध] in @deva[प्रातिपदिक] form, not in inflected form—thus @deva[ज्ञानाम्] (genitive plural of @deva[ज्ञ]) doesn't qualify as @deva[वृद्ध] for @ref[4.1.157] since @deva[ज्ञ] itself isn't @deva[वृद्ध]. (2) The @deva[ङ्याप्] portion enables taddhita application to feminine stems: @deva[कालितरा], @deva[हरिणितरा]. Without this, @deva[विप्रतिषेध] would block feminine + taddhita combinations."
        }
    },
    "41002": {
        "en": {
            "simple": "After nominal stems or feminine-marked words, the following case endings are used: @deva[सु], @deva[औ], @deva[जस्] for nominative; @deva[अम्], @deva[औट्], @deva[शस्] for accusative; @deva[टा], @deva[भ्याम्], @deva[भिस्] for instrumental; and so on for all seven cases in singular, dual, and plural.",
            "standard": "The 21 @deva[सुप्] (case) affixes are: Nominative @deva[सु], @deva[औ], @deva[जस्]; Accusative @deva[अम्], @deva[औट्], @deva[शस्]; Instrumental @deva[टा], @deva[भ्याम्], @deva[भिस्]; Dative @deva[ङे], @deva[भ्याम्], @deva[भ्यस्]; Ablative @deva[ङसि], @deva[भ्याम्], @deva[भ्यस्]; Genitive @deva[ङस्], @deva[ओस्], @deva[आम्]; Locative @deva[ङि], @deva[ओस्], @deva[सुप्]. Letters like @deva[प्] in @deva[सुप्] are @deva[इत्] markers for forming the @deva[प्रत्याहार] @deva[सुप्] (collective name for all 21). Examples: @deva[कुमारी], @deva[कुमार्यौ], @deva[कुमार्यः]; @deva[खट्वा], @deva[खट्वे], @deva[खट्वाः]; @deva[दृषद्], @deva[दृषदौ], @deva[दृषदः].",
            "advanced": "This sūtra enumerates the 21 @deva[सुप्] pratyayas applied after @deva[ङ्याप्प्रातिपदिक]. The @deva[इत्] letters (@deva[उ] in @deva[सु], @deva[प्] in @deva[सुप्], @deva[ट्] in @deva[औट्], etc.) serve pronunciation or marking purposes—@deva[प्] forms the pratyāhāra @deva[सुप्]. Full declension paradigms: @deva[कुमारी] (ङीप्-stem): @deva[कुमारी/कुमार्यौ/कुमार्यः], @deva[कुमारीम्/कुमार्यौ/कुमारीः], @deva[कुमार्या/कुमारीभ्याम्/कुमारीभिः], etc. @deva[खट्वा] (टाप्-stem): @deva[खट्वा/खट्वे/खट्वाः], etc. @deva[दृषद्] (consonant-stem): @deva[दृषद्/दृषदौ/दृषदः], with @deva[दृषत्सु] in locative plural showing @deva[द्] → @deva[त्] before @deva[स्]."
        }
    },
    "41003": {
        "en": {
            "simple": "When we want to show that something is feminine, we use the affixes taught in the following rules (up to sūtra 81).",
            "standard": "This @deva[अधिकार] sūtra introduces the domain of feminine affixes (@deva[स्त्रीप्रत्यय]), governing rules through @ref[4.1.81]. The anuvṛtti of @deva[प्रातिपदिकात्] from @ref[4.1.1] applies here, but not @deva[ङ्याप्]—since we are now teaching how to form @deva[ङी] and @deva[आप्] stems themselves.",
            "advanced": "This @deva[अधिकार] establishes @deva[स्त्रियाम्] (for denoting feminine) as the governing condition for @ref[4.1.4]-@ref[4.1.81]. The anuvṛtti of @deva[प्रातिपदिकात्] continues from @ref[4.1.1], but @deva[ङ्याप्] does not—we're defining how to create @deva[ङी]/@deva[आप्] forms. This domain covers: @deva[टाप्] (@ref[4.1.4]), @deva[ङीप्] (@ref[4.1.5]), @deva[ङीष्] (@ref[4.1.40]), @deva[ङीन्] (@ref[4.1.73]), @deva[डाप्] (@ref[4.1.13]), @deva[चाप्] (@ref[4.1.73])."
        }
    },
    "41004": {
        "en": {
            "simple": "The feminine affix @deva[टाप्] (which adds @deva[आ]) is used after words in the @deva[अज] class and after any stem ending in short @deva[अ]. Example: @deva[अज] (he-goat) → @deva[अजा] (she-goat); @deva[देवदत्त] → @deva[देवदत्ता].",
            "standard": "The affix @deva[टाप्] is added after (1) words listed in the @deva[अजादि] class and (2) stems ending in short @deva[अ]. Of @deva[टाप्], @deva[ट्] and @deva[प्] are @deva[इत्]—the actual affix is @deva[आ]. The @deva[प्] indicates @deva[अनुदात्त] accent (@ref[3.1.4]); @deva[ट्] distinguishes it from @deva[डाप्] and @deva[चाप्]. The @deva[अजादि] class includes @deva[अज], @deva[एडक], @deva[कोकिल], @deva[अश्व], @deva[शूद्र], etc.—words that would otherwise take different feminine affixes. The @deva[त्] in @deva[अत्] (@ref[1.1.70]) restricts to short @deva[अ] only, excluding long @deva[आ]-final stems like @deva[कीलालपा].",
            "advanced": "This sūtra provides @deva[टाप्] for @deva[अजादि]-class words and @deva[अकारान्त] stems. The @deva[इत्] analysis: @deva[ट्] distinguishes from @deva[चाप्]/@deva[डाप्]; @deva[प्] marks @deva[अनुदात्त] by @ref[3.1.4]. The @deva[अत्] specification (@deva[त्]-marked @deva[अ]) excludes @deva[दीर्घ] @deva[आ] by @ref[1.1.70]—hence @deva[शुभंया], @deva[कीलालपा] don't take @deva[टाप्]. The @deva[अजादि] class includes: (1-6) @deva[जाति] words: @deva[अज], @deva[एडक], @deva[कोकिल], @deva[चटक], @deva[अश्व], @deva[मूषिक]—would take @deva[ङीष्] by @ref[4.2.63]; (7-12) age words: @deva[बाल], @deva[होड], @deva[पाक], @deva[वत्स], @deva[मन्द], @deva[विलात]—would take @deva[ङीप्] by @ref[4.1.20]; (13-14) @deva[ल्युट्]-formed: @deva[पूर्वापहरण], @deva[अपरापहरण]—would take @deva[ङीप्] by @ref[4.1.15] as @deva[टित्]; (27) @deva[शूद्र] → @deva[शूद्रा], but @deva[शूद्री] for 'wife of śūdra' or in @deva[महाशूद्री]."
        }
    },
    "41005": {
        "en": {
            "simple": "The feminine affix @deva[ङीप्] (which adds @deva[ई]) is used after stems ending in @deva[ऋ] or @deva[न्]. Example: @deva[कर्तृ] → @deva[कर्त्री] (female doer); @deva[दण्डिन्] → @deva[दण्डिनी] (female staff-bearer).",
            "standard": "The affix @deva[ङीप्] applies after @deva[प्रातिपदिक] stems ending in @deva[ऋ] or @deva[न्]. Of @deva[ङीप्], @deva[ङ्] creates a common designation with @deva[ङीष्] and @deva[ङीन्], while @deva[प्] distinguishes it from them; the actual affix is @deva[ई]. Examples: @deva[कर्तृ] → @deva[कर्त्री], @deva[हर्तृ] → @deva[हर्त्री]; @deva[दण्डिन्] → @deva[दण्डिनी], @deva[छत्रिन्] → @deva[छत्रिनी].",
            "advanced": "This sūtra teaches @deva[ङीप्] after @deva[ऋकारान्त] and @deva[नकारान्त] stems. The @deva[ङ्] of @deva[ङीप्]/ङीष्/ङीन् forms a common designation for the @deva[ङी] class referenced in @ref[4.1.1]. The @deva[प्] marks @deva[अनुदात्त] accent (@ref[3.1.4]) and distinguishes from @deva[ष्]/न् of other @deva[ङी] affixes. For @deva[ऋ]-stems (agent nouns in @deva[तृच्]): @deva[कर्तृ] → @deva[कर्त्री], @deva[हर्तृ] → @deva[हर्त्री]. For @deva[न्]-stems (@deva[मतुप्]/इन्-formed): @deva[दण्डिन्] → @deva[दण्डिनी], @deva[छत्रिन्] → @deva[छत्रिनी]."
        }
    },
    "41006": {
        "en": {
            "simple": "The affix @deva[ङीप्] is also used after words formed by affixes that have @deva[उ], @deva[ऋ], or @deva[ऌ] as an indicatory letter (@deva[उगित्]). Example: @deva[भवत्] → @deva[भवती] (madam); @deva[पचत्] → @deva[पचन्ती] (female cooking).",
            "standard": "Stems formed by affixes with indicatory @deva[उक्] (@deva[उ], @deva[ऋ], @deva[ऌ]) take @deva[ङीप्] in the feminine. The pronoun @deva[भवत्] (formed with @deva[भवतु]) yields @deva[भवती]; by @deva[तदन्तविधि], compounds like @deva[अतिभवत्] → @deva[अतिभवती]. Words from @deva[शतृ] (which has @deva[ऋ]): @deva[पचत्] → @deva[पचन्ती] (with @deva[नुम्] by @ref[7.1.82]). Exception (vārtika): verbal roots with indicatory @deva[उक्] don't trigger this—@deva[उखास्रत्] stays uninflected for feminine.",
            "advanced": "This sūtra extends @deva[ङीप्] to @deva[उगित्] stems—those ending in affixes marked with @deva[उक्] (@deva[उ], @deva[ऋ], @deva[ऌ] pratyāhāra). Types: (1) @deva[प्रातिपदिक] itself @deva[उगित्]: @deva[भवत्] (sarvanāman @deva[भवतु]) → @deva[भवती]; (2) affix is @deva[उगित्]: @deva[क्तवतु], @deva[शतृ] → @deva[पचत्] → @deva[पचन्ती] (@deva[नुम्] by @ref[7.1.82]); (3) substitute letter @deva[उगित्]: @deva[तृ] for @deva[त्] in @ref[6.4.127] → @deva[अर्वत्] → @deva[अर्वती]. Vārtika: @deva[धातूगितो निषेधः]—roots like @deva[स्रंसु], @deva[ध्वंसु] don't cause @deva[ङीप्] for derived @deva[उखास्रत्], @deva[पर्णध्वत्]. Counter-vārtika: @deva[अञ्चु]-ending compounds do take @deva[ङीप्]: @deva[प्राची], @deva[प्रतीची], @deva[उदीची]."
        }
    },
    "41007": {
        "en": {
            "simple": "When a stem ends in @deva[वन्], the @deva[न्] changes to @deva[र्] and @deva[ङीप्] is added. Example: @deva[धीवन्] (artisan) → @deva[धीवरी] (female artisan); @deva[शर्वन्] → @deva[शर्वरी] (night).",
            "standard": "For stems ending in @deva[वन्] (from affixes like @deva[वनिप्], @deva[क्वनिप्], @deva[ङ्वनिप्]), @deva[ङीप्] is added with @deva[न्] replaced by @deva[र्]. Examples: @deva[धीवन्] → @deva[धीवरी], @deva[पीवन्] → @deva[पीवरी], @deva[शर्वन्] → @deva[शर्वरी]. Though @deva[वन्]-final stems already end in @deva[न्] and would take @deva[ङीप्] by @ref[4.1.5], this sūtra specifically teaches the @deva[न्] → @deva[र्] change. Vārtika: If @deva[वन्] follows a @deva[हश्] consonant (soft consonant), the rule doesn't apply—@deva[सहयुध्वन्] is both masculine and feminine.",
            "advanced": "This sūtra provides @deva[न्] → @deva[र्] replacement and @deva[ङीप्] for @deva[वनन्त] stems. Since @deva[वन्]-stems end in @deva[न्], @ref[4.1.5] would already provide @deva[ङीप्]—this sūtra's purpose is the @deva[रादेश]. Affixes producing @deva[वन्]-stems: @deva[वनिप्] (@ref[3.2.74]), @deva[क्वनिप्], @deva[ङ्वनिप्] (@ref[3.2.103]). Forms: @deva[धीवन्] (दो + वनिप्) → @deva[धीवरी], @deva[पीवन्] → @deva[पीवरी], @deva[शर्वन्] (शृ + वनिप्) → @deva[शर्वरी]. Vārtika: @deva[हशः यदि वन् विधीयते तदा न]—when @deva[वन्] is ordained after @deva[हश्] (soft consonant), neither @deva[ङीप्] nor @deva[र्]-substitution applies: @deva[सहयुध्वन्] is common gender. Note: @deva[शर्वन्] has @deva[र्] before @deva[वन्], but @deva[वन्] is ordained after @deva[शृ] (then @deva[गुण]), not after @deva[शर्]—vārtika doesn't apply."
        }
    },
    "41008": {
        "en": {
            "simple": "After a stem ending in @deva[पाद्] (meaning 'foot'), @deva[ङीप्] is optionally used. Example: @deva[द्विपात्] (two-footed) → @deva[द्विपदी] or @deva[द्विपात्] (the same form for feminine).",
            "standard": "Stems ending in @deva[पाद्] (formed by @ref[5.4.140] in bahuvrīhi compounds) optionally take @deva[ङीप्]. When @deva[ङीप्] is added, @deva[पाद्] becomes @deva[पद्] by @ref[6.4.130]. Thus: @deva[द्विपात्] or @deva[द्विपदी], @deva[त्रिपात्] or @deva[त्रिपदी], @deva[चतुष्पात्] or @deva[चतुष्पदी].",
            "advanced": "This sūtra makes @deva[ङीप्] optional for @deva[पादन्त] (specifically @deva[पाद्]-final) stems. The @deva[पाद्] form arises from @deva[पाद] by @ref[5.4.140] in certain bahuvrīhi compounds. When @deva[ङीप्] applies, @deva[पाद्] → @deva[पद्] by @ref[6.4.130] (read with @ref[1.4.18]). This is @deva[प्राप्तविभाषा]—without this sūtra, @deva[ङीप्] would be obligatory by @ref[4.1.5] (ends in consonant via @ref[5.4.140]). Forms: @deva[द्विपात्]/द्विपदी, @deva[त्रिपात्]/त्रिपदी, @deva[चतुष्पात्]/चतुष्पदी."
        }
    },
    "41009": {
        "en": {
            "simple": "When referring to a @deva[ऋच्] (Vedic verse), @deva[टाप्] (not @deva[ङीप्]) is used after @deva[पाद्]-ending stems. Example: @deva[द्विपदा] @deva[ऋक्] (a two-pāda verse), not @deva[द्विपदी].",
            "standard": "When a @deva[पाद्]-ending compound denotes a @deva[ऋच्] (Vedic verse), @deva[टाप्] applies instead of @deva[ङीप्]. Thus: @deva[द्विपदा] @deva[ऋक्] (two-quarter verse), @deva[त्रिपदा] @deva[ऋक्], @deva[चतुष्पदा] @deva[ऋक्]. This overrides the option in @ref[4.1.8]. But for a woman: @deva[द्विपदी] @deva[देवदत्ता] (Devadattā having two feet).",
            "advanced": "This sūtra mandates @deva[टाप्] (not @deva[ङीप्]) for @deva[पादन्त] stems when denoting @deva[ऋच्] (Ṛgvedic verses). This is a @deva[नियम] restricting @ref[4.1.8]'s option. Forms: @deva[द्विपदा ऋक्], @deva[त्रिपदा ऋक्], @deva[चतुष्पदा ऋक्]. The restriction: @deva[ऋचि] 'when denoting a Ṛk'—for other meanings (like 'having feet'), @ref[4.1.8]'s option applies: @deva[द्विपदी देवदत्ता]."
        }
    },
    "41010": {
        "en": {
            "simple": "No feminine affix is added after the numerals from 5 onwards (@deva[षट्] class) or after words like @deva[स्वसृ] (sister). These words remain the same in feminine. Example: @deva[पञ्च] @deva[ब्राह्मण्यः] (five Brahmin women).",
            "standard": "Feminine affixes are prohibited after: (1) @deva[षट्]-संज्ञा words (numerals from @deva[पञ्च] onwards, as defined in @ref[1.1.24]), and (2) @deva[स्वसृादि] words. These remain unchanged for feminine. @deva[षट्]: @deva[पञ्च], @deva[सप्त], @deva[नव], @deva[दश], etc. @deva[स्वसृादि]: @deva[स्वसृ] (sister), @deva[दुहितृ] (daughter), @deva[ननान्दृ] (husband's sister), @deva[यातृ] (brother's wife), @deva[मातृ] (mother), @deva[तिसृ] (three f.), @deva[चतसृ] (four f.).",
            "advanced": "This sūtra prohibits all @deva[स्त्रीप्रत्यय] after two categories: (1) @deva[षड्भ्यो लुक्] (@ref[1.1.24]): @deva[षट्]-designated numerals (@deva[पञ्च] and higher)—these are gender-invariant; (2) @deva[स्वसृादि]: @deva[स्वसृ], @deva[दुहितृ], @deva[ननान्दृ], @deva[यातृ], @deva[मातृ], @deva[तिसृ], @deva[चतसृ]—inherently feminine stems requiring no additional marking. This is universal prohibition (@deva[निषेध]), not optionality."
        }
    },
    "41011": {
        "en": {
            "simple": "Stems ending in @deva[मन्] don't take @deva[ङीप्]. They remain the same for feminine. Example: @deva[दामन्] (string) → @deva[दामा], @deva[दामानौ], @deva[दामानः] (same for masculine and feminine/neuter).",
            "standard": "Though stems ending in @deva[न्] would take @deva[ङीप्] by @ref[4.1.5], stems ending specifically in @deva[मन्] are exempted. Words like @deva[दामन्] (string), @deva[पामन्] (skin disease) are neuter/feminine without @deva[ई]: @deva[दामा], @deva[दामानौ], @deva[दामानः]. The term @deva[मन्] includes both affix-formed words (@deva[मनिन्] affix) and inherent @deva[मन्]-ending words like @deva[सीमन्], @deva[महिमन्], per the paribhāṣā about @deva[अन्/इन्/अस्/मन्] terms.",
            "advanced": "This sūtra prohibits @deva[ङीप्] after @deva[मनन्त] stems, overriding @ref[4.1.5]. The term @deva[मन्] by paribhāṣā @deva[अनिनसमनग्रहणान्यर्थवता चानर्थकेन च तदन्तविधिं प्रयोजयन्ति] includes: (1) @deva[मनिन्]-affix-formed: @deva[दामन्] (दो + मनिन्), @deva[पामन्]; (2) non-affix @deva[मन्]: @deva[सीमन्], @deva[महिमन्]. Forms: @deva[दामा/दामानौ/दामानः], @deva[पामा/पामानौ/पामानः], @deva[सीमा/सीमानौ/सीमानः]. These are neuter or common gender."
        }
    },
    "41012": {
        "en": {
            "simple": "@deva[ङीप्] is not used after @deva[बहुव्रीहि] compounds that end in @deva[अन्] (where the penultimate vowel isn't dropped). These compounds remain the same for feminine. Example: @deva[सुपर्वन्] (with good joints) → @deva[सुपर्वा], @deva[सुपर्वाणौ], @deva[सुपर्वाणः].",
            "standard": "Bahuvrīhi compounds ending in @deva[अन्] that retain their penultimate @deva[अ] don't take @deva[ङीप्]—they're common gender. Thus @deva[सुपर्वन्] (having beautiful joints), @deva[सुशर्मन्] (well-protected) decline as: @deva[सुपर्वा/सुपर्वाणौ/सुपर्वाणः]. When the penultimate is elided (@ref[6.4.134]), @deva[ङीप्] becomes optional by @ref[4.1.28]. This rule specifically targets bahuvrīhis—other compounds like @deva[अव्ययीभाव] @deva[अतिराजन्] still take @deva[ङीप्]: @deva[अतिराज्ञी].",
            "advanced": "This sūtra prohibits @deva[ङीप्] for @deva[बहुव्रीहि] compounds ending in @deva[अन्] when @deva[उपधा] (penultimate) is not elided. When @ref[6.4.134] (@deva[अल्लोपोऽनः]) doesn't apply due to @ref[6.4.137] (@deva[न संयोगाद्वमन्तात्]—no elision after @deva[व्/म्]-final conjuncts), forms stay common: @deva[सुपर्वा/सुपर्वाणौ/सुपर्वाणः], @deva[सुशर्मा/सुशर्माणौ/सुशर्माणः]. The restriction @deva[बहुव्रीहौ] matters: @deva[अव्ययीभाव] @deva[अतिराजन्] → @deva[अतिराज्ञी] (takes @deva[ङीप्])."
        }
    },
    "41013": {
        "en": {
            "simple": "After stems ending in @deva[अन्], and after @deva[बहुव्रीहि] compounds, the feminine affix @deva[डाप्] (adding @deva[आ] after dropping the final syllable) may optionally be used. Example: @deva[पामन्] → @deva[पामा] or @deva[पामानौ]; @deva[बहुराजन्] → @deva[बहुराजा] or @deva[बहुराजानौ].",
            "standard": "The affix @deva[डाप्] optionally applies to: (1) @deva[अनन्त] stems, and (2) @deva[बहुव्रीहि] compounds ending in @deva[अन्]. The @deva[ड्] of @deva[डाप्] indicates @deva[टि]-deletion (@ref[1.1.64])—the final @deva[अन्] portion is dropped before adding @deva[आ]. Thus @deva[पामन्] → @deva[पाम्] + @deva[आ] = @deva[पामा]; duals: @deva[पामे] or @deva[पामानौ]. For bahuvrīhis: @deva[बहुराजा/बहुराजे] or @deva[बहुराजानौ]. This optionality extends to @ref[4.1.7]: @deva[बहुधीवा] or @deva[बहुधीवरी].",
            "advanced": "This sūtra provides optional @deva[डाप्] for @deva[अनन्त] stems and @deva[अनन्त]-bahuvrīhis. The @deva[ड्]-इत् triggers @deva[टि]-लोप (@ref[1.1.64]): @deva[पामन्] → @deva[पाम्] + आ = @deva[पामा]. Forms: @deva[पामा/पामे]/पामानौ, @deva[पामाः/पामानः]; @deva[सीमा/सीमे/सीमानौ]. For bahuvrīhis in @deva[अन्]: @deva[बहुराजा/बहुराजे/बहुराजानौ], @deva[बहुतक्षा/बहुतक्षे/बहुतक्षाणौ]. The @deva[वा] extends to @ref[4.1.7] contexts: @deva[वनन्त]-bahuvrīhis get @deva[डाप्] option alongside @deva[ङीप्]+र्: @deva[बहुधीवा] or @deva[बहुधीवरी], @deva[बहुपीवा] or @deva[बहुपीवरी]."
        }
    },
    "41014": {
        "en": {
            "simple": "The following rules (up to @ref[4.1.77]) only apply when the stem is the main element of a compound, not when it's a subordinate part (@deva[उपसर्जन]).",
            "standard": "This @deva[अधिकार] governs through @ref[4.1.77], restricting feminine affixes to @deva[प्रधान] (principal) members of compounds, not @deva[उपसर्जन] (subordinate) members. In @deva[बहुव्रीहि] compounds where all members are @deva[उपसर्जन] (@ref[2.2.35]), rules like @ref[4.1.15] don't apply. Thus @deva[कुरुचरी] (feminine of @deva[कुरुचर] alone), but @deva[बहुकुरुचरा] @deva[मधुरा] (in bahuvrīhi, @deva[कुरुचर] is @deva[उपसर्जन]).",
            "advanced": "This @deva[अधिकार] establishes @deva[नोपसर्जनम्]—the subsequent rules (@ref[4.1.15]-@ref[4.1.77]) don't apply when the target stem is @deva[उपसर्जन]. This implies @deva[तदन्तविधि] (@ref[1.1.72]) does apply for feminine affixes when the stem is @deva[प्रधान]. In bahuvrīhi (all members @deva[उपसर्जन] by @ref[2.2.35]): @deva[बहुकुरुचरा], @deva[बहुकुक्कुटा], @deva[बहुशूकरा] (no @deva[ङीप्]). But @deva[तत्पुरुष] with @deva[प्रधान] final: @deva[कुम्भकारी], @deva[नगरकारी] (@deva[ङीप्] by @ref[4.1.15]). This jñāpaka establishes that @deva[तदन्तविधि] applies for strī-pratyaya when not @deva[उपसर्जन]."
        }
    },
    "41015": {
        "en": {
            "simple": "The feminine affix @deva[ङीप्] is used after stems ending in short @deva[अ] when the final affix has indicatory @deva[ट्], or is @deva[ढ], @deva[अण्], @deva[अञ्], @deva[द्वयसच्], @deva[दघ्नच्], @deva[मात्रच्], @deva[तयप्], @deva[ठक्], @deva[ठञ्], @deva[कञ्], or @deva[क्वरप्]. Example: @deva[कुरुचर] → @deva[कुरुचरी] (@deva[ट]-affix); @deva[कुम्भकार] → @deva[कुम्भकारी] (@deva[अण्]-affix).",
            "standard": "This sūtra lists affixes after which @deva[अकारान्त] stems take @deva[ङीप्] instead of @deva[टाप्]: (1) @deva[टित्] affixes (with indicatory @deva[ट्]): @deva[कुरुचर] (from @deva[ट] @ref[3.2.16]) → @deva[कुरुचरी]; (2) @deva[ढक्]: @deva[सौपर्णेय] → @deva[सौपर्णेयी]; (3) @deva[अण्] (kṛt or taddhita): @deva[कुम्भकार] → @deva[कुम्भकारी], @deva[औपगव] → @deva[औपगवी]; (4) @deva[अञ्]: @deva[औत्स] → @deva[औत्सी]; (5) @deva[द्वयसच्/दघ्नच्/मात्रच्]: @deva[ऊरुद्वयसी], @deva[ऊरुदघ्नी], @deva[ऊरुमात्री]; (6) @deva[तयप्]: @deva[पञ्चतयी]; (7) @deva[ठक्/ठञ्]: @deva[आक्षिकी], @deva[लावणिकी]; (8) @deva[कञ्]: @deva[यादृशी]; (9) @deva[क्वरप्]: @deva[इत्वरी].",
            "advanced": "This sūtra enumerates affixes triggering @deva[ङीप्] for @deva[अकारान्त] stems, overriding @deva[टाप्] (@ref[4.1.4]). Analysis: (1) @deva[टित्]: @deva[ट]-indicatory affixes like @deva[ट] (@ref[3.2.16])—but not @deva[लट्] (two इत्s: ल्, ट्) or āgama @deva[ट्] (@deva[तुट्] in @ref[4.3.23]). @deva[पचमान] (from @deva[शानच्], substitute of @deva[लट्]) → @deva[पचमाना] (not @deva[ङीप्]). (2) @deva[ढ] = @deva[ढक्] (no @deva[अनुबन्ध]-less @deva[ढ] exists for feminine). (3) @deva[अण्]: both kṛt (@ref[3.2.1]) and taddhita. Sometimes @deva[ण] acts like @deva[अण्]: @deva[चौरी], @deva[तापसी]; sometimes not: @deva[दाण्डा], @deva[मौष्टा]. (4) @deva[अञ्]: re-specified to block @deva[ङीष्] from @ref[4.1.63] even for @deva[जाति]. Vārtika: also @deva[नञ्/स्नञ्] (@ref[4.1.87]), @deva[ईकक्] (@ref[4.4.59]), @deva[ख्युन्] (@ref[3.2.56]), @deva[तरुण/तलुन]: @deva[स्त्रैणी], @deva[पौंस्नी], @deva[शाक्तीकी], @deva[आढ्यंकरणी], @deva[तरुणी/तलुनी]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.1-4.1.15 (Batch 1)")
