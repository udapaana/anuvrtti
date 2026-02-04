# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32173": {
        "en": {
            "simple": "The affix @deva[आरु] attaches to @deva[शॄ] 'to injure' and @deva[वन्द्] 'to praise' to denote habitual agents. Examples: @deva[शरारुः] 'a harmful creature'; @deva[वन्दारुः] 'one who praises, a bard'.",
            "standard": "After @deva[शॄ] 'to injure' and @deva[वन्द्] 'to praise', the affix @deva[आरु] is added in the @deva[तच्छीलादि] sense (habitual action). The resulting forms are @deva[शरारुः] 'a mischievous or noxious creature' and @deva[वन्दारुः] 'one given to praising, a bard or panegyrist'.",
            "advanced": "This @deva[सूत्र] specifies @deva[आरु] as the @deva[तच्छीलादि] affix after two roots: @deva[शॄ] (ninth conjugation, 'to injure') and @deva[वन्द्] (first conjugation, 'to praise, salute'). The derivations: @deva[शॄ] + @deva[आरु] → @deva[शरारुः] (with @deva[गुण] of the root vowel); @deva[वन्द्] + @deva[आरु] → @deva[वन्दारुः]. These forms denote agents characterized by habitual performance of the action."
        }
    },
    "32174": {
        "en": {
            "simple": "After @deva[भी] 'to fear', the affixes @deva[क्रु] and @deva[क्लुकन्] are added. Examples: @deva[भीरुः] 'timid'; @deva[भीलुकः] 'fearful (also: bear, tiger, jackal)'. A @deva[वार्तिक] adds @deva[क्रुकन्], giving @deva[भीरुकः].",
            "standard": "The root @deva[भी] 'to fear' takes the @deva[तच्छीलादि] affixes @deva[क्रु] and @deva[क्लुकन्]. Thus: @deva[भी] + @deva[क्रु] → @deva[भीरुः] 'timid, fearful'; @deva[भी] + @deva[क्लुकन्] → @deva[भीलुकः] 'timorous' (also used for bear, tiger, jackal—animals associated with fear). A @deva[वार्तिक] supplements the rule with @deva[क्रुकन्], yielding @deva[भीरुकः].",
            "advanced": "This @deva[सूत्र] prescribes two @deva[तच्छीलादि] affixes after @deva[भी] (third conjugation, 'to fear'): @deva[क्रु] (giving @deva[भीरुः]) and @deva[क्लुकन्] (giving @deva[भीलुकः]). The @deva[क्] in both is @deva[इत्], leaving @deva[रु] and @deva[लुक] respectively. A @deva[वार्तिक] adds @deva[क्रुकन्] to account for @deva[भीरुकः]. The semantic application of @deva[भीलुकः] to animals (bear, tiger, jackal) reflects traditional associations with fearfulness."
        }
    },
    "32175": {
        "en": {
            "simple": "The affix @deva[वरच्] attaches to @deva[स्था] 'to stand', @deva[ईश्] 'to rule', @deva[भास्] 'to shine', @deva[पिस्] 'to go', and @deva[कस्] 'to go'. Examples: @deva[स्थावरः] 'immovable'; @deva[ईश्वरः] 'lord, God'; @deva[विकस्वरः] 'expanding'.",
            "standard": "After the roots @deva[स्था], @deva[ईश्], @deva[भास्], @deva[पिस्], and @deva[कस्], the affix @deva[वरच्] is prescribed in the @deva[तच्छीलादि] sense. Derivations: @deva[स्थावरः] 'stationary, immovable'; @deva[ईश्वरः] 'ruler, God'; @deva[पेस्वरः] 'going, destructive'; @deva[विकस्वरः] 'opening, expanding'. The @deva[च्] is @deva[इत्], leaving @deva[वर] as the actual affix.",
            "advanced": "The @deva[सूत्र] lists five roots taking @deva[वरच्] as a @deva[तच्छीलादि] affix: @deva[स्था] (first conjugation), @deva[ईश्] (second conjugation), @deva[भास्] (first conjugation), @deva[पिस्] (first conjugation), and @deva[कस्] (first conjugation). After @deva[इत्]-deletion, @deva[वर] remains. Note @deva[स्था] + @deva[वर] → @deva[स्थावर] with @deva[आ]-substitution for the root vowel (@ref[6.4.64]). The form @deva[ईश्वरः] 'lord, God' is among Sanskrit's most significant theological terms."
        }
    },
    "32176": {
        "en": {
            "simple": "The affix @deva[वरच्] also comes after @deva[या] 'to go' when it has the intensive affix @deva[यङ्]. Example: @deva[यायावरः] 'a wanderer, vagrant ascetic'. See @ref[1.1.58].",
            "standard": "When the root @deva[या] 'to go' is combined with the intensive affix @deva[यङ्] (which expresses repeated or intensified action), the affix @deva[वरच्] is added in the @deva[तच्छीलादि] sense. The result is @deva[यायावरः] 'one who wanders habitually, a vagrant or wandering ascetic'. The @deva[यङ्] affix causes reduplication of the root.",
            "advanced": "This @deva[सूत्र] extends @deva[वरच्] to @deva[या] when accompanied by @deva[यङ्], the intensive (@deva[यङन्त]) affix. The derivation: @deva[या] + @deva[यङ्] → @deva[यायाय्] (by @deva[यङ्]-reduplication rules), then + @deva[वरच्] → @deva[यायावर]. The cross-reference to @ref[1.1.58] concerns the scope of @deva[यङ्]-formation. The semantic outcome @deva[यायावरः] denotes habitual wandering, applied especially to mendicant ascetics."
        }
    },
    "32177": {
        "en": {
            "simple": "The affix @deva[क्विप्] attaches to @deva[भ्राज्] 'to shine', @deva[भास्] 'to shine', @deva[धुर्व्] 'to injure', @deva[द्युत्] 'to shine', @deva[ऊर्ज्] 'to be strong', @deva[पॄ] 'to fill', @deva[जु] 'to move rapidly', and @deva[स्तु] 'to praise' (the last only when preceded by @deva[ग्रावन्] 'stone'). Examples: @deva[विभ्राट्] 'splendid'; @deva[भाः] 'light'; @deva[विद्युत्] 'lightning'.",
            "standard": "After the roots @deva[भ्राज्], @deva[भास्], @deva[धुर्व्], @deva[द्युत्], @deva[ऊर्ज्], @deva[पॄ], @deva[जु], and @deva[स्तु] (the last with @deva[ग्रावन्] 'stone' as @deva[उपपद]), the zero-affix @deva[क्विप्] is prescribed. Examples: @deva[विभ्राट्] 'splendid'; @deva[भाः] 'light'; @deva[धूः] 'injurer' (@ref[6.4.21]); @deva[विद्युत्] 'lightning'; @deva[ऊर्क्] 'strength'; @deva[पूः] 'filler'; @deva[जूः] 'swift'; @deva[ग्रावस्तुत्] 'stone-worshipper' (@ref[6.1.71]).",
            "advanced": "Though @deva[क्विप्] would apply to these roots under the general rule @ref[3.2.76], this @deva[सूत्र] restates it to indicate that @deva[वाऽसरूपविधि] (the principle of optionally treating similar forms as equivalent) does not apply in @deva[तच्छीलादि] formations. The @deva[क्विप्] affix is a zero-affix (@deva[क्] and @deva[प्] being @deva[इत्]). Special treatments: @deva[धुर्व्] → @deva[धूः] by @ref[6.4.21]; @deva[स्तु] with @deva[ग्रावन्] → @deva[ग्रावस्तुत्] by @ref[6.1.71]."
        }
    },
    "32178": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after other verbs too. Examples: @deva[युक्] 'joining'; @deva[छित्] 'piercing'; @deva[भित्] 'dividing'. Various roots undergo vowel lengthening, reduplication, or @deva[सम्प्रसारण] when @deva[क्विप्] follows.",
            "standard": "This extends @deva[क्विप्] to roots beyond those listed previously. The phrase 'is seen' (@deva[दृश्यते]) indicates that other phonological rules also apply: some roots show vowel lengthening, some reduplication, some @deva[सम्प्रसारण]. A @deva[वार्तिक] specifies lengthening for @deva[वच्], @deva[प्रच्छ्], @deva[आयतस्तु], @deva[कटप्रु], @deva[जु], and @deva[श्री]: thus @deva[वाक्] 'voice', @deva[प्राट्] 'asker', @deva[जूः] 'swift', @deva[श्रीः] 'Lakṣmī'.",
            "advanced": "The word @deva[दृश्यते] 'is seen' signals that conventional derivational patterns apply alongside @deva[क्विप्]. Multiple @deva[वार्तिकs] supplement this rule: (1) Vowel lengthening for @deva[वच्] → @deva[वाक्], @deva[प्रच्छ्] → @deva[प्राट्] (via @ref[6.1.10], @ref[8.2.36], @ref[8.4.56]), @deva[जु] → @deva[जूः], @deva[श्री] → @deva[श्रीः]; (2) Reduplication for @deva[द्युत्] → @deva[विद्युत्], @deva[गम्] → @deva[जगत्], @deva[हु] → @deva[जुहूः] (with optional lengthening); (3) Shortening for @deva[तॄ] → @deva[दतृत्]; (4) @deva[सम्प्रसारण] for @deva[ध्या] → @deva[धीः]. The @deva[जु] mentioned here is redundant with @ref[3.2.177]."
        }
    },
    "32179": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after @deva[भू] 'to be' when the word denotes a proper name or a surety. Examples: @deva[विभूः] 'a person named Vibhū'; @deva[प्रतिभूः] 'a guarantor'.",
            "standard": "After @deva[भू] 'to be', @deva[क्विप्] is prescribed when the resulting word serves as a proper name or means 'surety'. Thus @deva[वि] + @deva[भू] + @deva[क्विप्] → @deva[विभूः] as a personal name; @deva[प्रति] + @deva[भू] + @deva[क्विप्] → @deva[प्रतिभूः] 'one who stands as surety between debtor and creditor'.",
            "advanced": "This @deva[सूत्र] restricts @deva[क्विप्] after @deva[भू] to two semantic domains: proper names (@deva[संज्ञा]) and suretyship (@deva[प्रातिभाव्य]). The derivation @deva[प्रतिभूः] 'surety, guarantor' illustrates the legal sense—one who 'stands for' (@deva[प्रति] + @deva[भू]) another's obligation. This contrasts with the following @deva[सूत्र] @ref[3.2.180], which uses @deva[डु] for non-appellative meanings."
        }
    },
    "32180": {
        "en": {
            "simple": "The affix @deva[डु] comes after @deva[भू] 'to be' with prefixes @deva[वि], @deva[प्र], or @deva[सम्], when NOT forming a proper name. Examples: @deva[विभुः] 'all-pervading'; @deva[प्रभुः] 'lord'; @deva[सम्भुः] 'creator'.",
            "standard": "When @deva[भू] is preceded by @deva[वि], @deva[प्र], or @deva[सम्] and does NOT form a proper name, the affix @deva[डु] applies. Results: @deva[विभुः] 'omnipresent'; @deva[प्रभुः] 'master, lord'; @deva[सम्भुः] 'creator'. Compare @deva[विभूः] (proper name, by @ref[3.2.179]) versus @deva[विभुः] (adjective meaning 'all-pervading').",
            "advanced": "The choice of @deva[डु] over @deva[क्विप्] here serves two purposes: (1) to block @deva[धातु]-specific rules from applying, and (2) to prevent @deva[तुक्]-augment (@ref[6.1.71]). A @deva[वार्तिक] extends @deva[डु] to @deva[मितद्रु]-class words: @deva[मितद्रुः] 'the sea' (from @deva[मितम् द्रवति] 'runs measuredly'). The @deva[ड्] is @deva[इत्], leaving @deva[उ]. Paradigm evidence: @deva[मितद्रू] (dual), @deva[मितद्रवः] (plural) show no @deva[उकङ्] substitution (@ref[6.4.77]) because @deva[द्रु] loses its @deva[धातु] status."
        }
    },
    "32181": {
        "en": {
            "simple": "The affix @deva[ष्ट्रन्] comes after @deva[धा] (in the sense 'to suck, feed') to denote the object. The @deva[ष्] indicates feminine @deva[ई]. Example: @deva[धात्री] 'a nurse (whom children suck)' or 'āmalakī fruit (which holds medicinal properties)'.",
            "standard": "After @deva[धा] meaning 'to suck, feed', the affix @deva[ष्ट्रन्] is added in the @deva[कर्म] (object) sense. The indicatory @deva[ष्] signals that the feminine is formed with @deva[ङीप्] (@deva[ई]). Thus @deva[धात्री] can mean 'nurse' (one whom children suck/feed from) or 'āmalakī fruit' (which holds—@deva[दधाति]—all medicinal properties).",
            "advanced": "This @deva[सूत्र] introduces @deva[ष्ट्रन्] as a @deva[कर्मन्]-denoting affix after @deva[धा] (in the sense @deva[धयति] 'sucks' or @deva[दधाति] 'holds'). The @deva[ष्] is @deva[इत्] indicating @deva[ङीप्] for feminine (@ref[4.1.41]); @deva[न्] is also @deva[इत्], leaving @deva[त्र] as the actual suffix. The semantic versatility allows @deva[धात्री] to denote both an animate nurse (the object of suckling) and the āmalakī fruit (which 'holds' medicinal virtues)."
        }
    },
    "32182": {
        "en": {
            "simple": "The affix @deva[ष्ट्रन्] in the instrumental sense comes after @deva[दा] 'to cut', @deva[नी] 'to lead', @deva[शस्] 'to hurt', @deva[यु] 'to join', @deva[युज्] 'to join', @deva[स्तु] 'to praise', @deva[तुद्] 'to goad', @deva[सि] 'to bind', @deva[सिच्] 'to sprinkle', @deva[मिह्] 'to urinate', @deva[पत्] 'to fall', @deva[दश्] 'to bite', and @deva[नह्] 'to bind'. Examples: @deva[दात्रम्] 'sickle'; @deva[नेत्रम्] 'eye'; @deva[शस्त्रम्] 'weapon'; @deva[दंष्ट्रा] 'fang'.",
            "standard": "In the @deva[करण] (instrument) sense, @deva[ष्ट्रन्] follows the listed roots. Derivations: @deva[दात्रम्] 'sickle' (what one cuts with); @deva[नेत्रम्] 'eye' (instrument of leading/guiding); @deva[शस्त्रम्] 'weapon' (@ref[7.2.9]); @deva[योत्रम्] 'yoke-tie'; @deva[स्तोत्रम्] 'hymn of praise'; @deva[तोत्रम्] 'goad'; @deva[मेढ्रम्] 'penis'; @deva[पत्रम्] 'vehicle' (means of flying/falling); @deva[दंष्ट्रा] 'fang' (@deva[आ] feminine by @ref[4.1.4] as @deva[आजादि]); @deva[नद्ध्री] 'thong' (@ref[8.2.34], @ref[8.2.40]).",
            "advanced": "This @deva[सूत्र] prescribes @deva[ष्ट्रन्] in @deva[करण] sense after thirteen roots. Notable phonological points: @deva[शस्] → @deva[शस्त्रम्] with @deva[इट्]-augment by @ref[7.2.9]; @deva[दश्] (listed without nasal) → @deva[दंष्ट्रा], but the nasal-less citation implies @deva[दशनम्] 'tooth' with @deva[ल्युट्]; @deva[मिह्] → @deva[मेढ्रम्] with cerebralization; @deva[नह्] → @deva[नद्ध्र]/नद्ध्री by @ref[8.2.34] and @ref[8.2.40]. The word @deva[दंष्ट्रा] belongs to @deva[अजादि] class, hence feminine in @deva[टाप्] (@deva[आ]) rather than @deva[ई] (@ref[4.1.4])."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.173-3.2.182")
