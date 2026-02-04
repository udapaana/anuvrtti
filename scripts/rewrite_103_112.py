# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32103": {
        "en": {
            "simple": "The affix @deva[ङ्वनिप्] comes after @deva[षु] 'to press juice' and @deva[यज्] 'to sacrifice' with past-time meaning. Examples: @deva[सुत्वा] 'one who has pressed juice' (from @deva[सुत्वन्] via @ref[6.1.71]), @deva[यज्वा] 'one who has sacrificed' (from @deva[यज्वन्]). The @deva[त्] augment is added by @ref[6.1.71].",
            "standard": "The affix @deva[ङ्वनिप्] follows @deva[षु] 'to press' and @deva[यज्] 'to sacrifice' with @deva[भूतार्थ]. Examples: @deva[सु] + @deva[ङ्वनिप्] = @deva[सुत्] + @deva[वन्] (@ref[6.1.71]) = @deva[सुत्वन्], nom. @deva[सुत्वा] 'juice-presser'; @deva[यज्वन्], nom. @deva[यज्वा] 'sacrificer'. The @deva[त्]-augment comes by @ref[6.1.71]. See Ṛg Veda I.3.1.",
            "advanced": "@deva[ङ्वनिप्] follows @deva[षु] and @deva[यज्] with @deva[भूतार्थ]. @deva[प्रक्रिया]: @deva[षु] + @deva[ङ्वनिप्] → @deva[सुत्वन्] (@ref[6.1.71] @deva[इट्]-augment), nom. @deva[सुत्वा]; @deva[यज्वन्], nom. @deva[यज्वा]. Reference: Ṛg Veda I.3.1."
        }
    },
    "32104": {
        "en": {
            "simple": "The affix @deva[अतृन्] comes after @deva[जृ] 'to grow old' with past-time meaning. Example: @deva[जरत्], nom. sg. @deva[जरन्], dual @deva[जरन्तौ], pl. @deva[जरन्तः] 'grown old'. Derivation: @deva[जृ] + @deva[अतृन्] → @deva[जर्] + @deva[अत्] by @ref[7.3.84]. By @ref[3.1.94] (vāsarūpa), @deva[निष्ठा] affixes also apply: @deva[जीर्णः], @deva[जीर्णवान्].",
            "standard": "The affix @deva[अतृन्] follows @deva[जृ] 'to grow old' with @deva[भूतार्थ]. Derivation: @deva[जृ] + @deva[अतृन्] = @deva[जर्] + @deva[अत्] (@ref[7.3.84]) = @deva[जरत्], nom. @deva[जरन्], dual @deva[जरन्तौ], pl. @deva[जरन्तः] (@ref[6.1.7]). By @deva[वासरूप] (@ref[3.1.94]), @deva[निष्ठा] also applies: @deva[जृ] + @deva[क्त] → @deva[जिर्] + @deva[त] (@ref[7.1.100], @ref[1.1.51]) → @deva[जिर्] + @deva[न] (@ref[8.2.42]) → @deva[जीर्ण] (@ref[8.2.77], @ref[8.4.1]).",
            "advanced": "@deva[अतृन्] follows @deva[जृ] with @deva[भूतार्थ]. @deva[प्रक्रिया]: @deva[जृ] + @deva[अतृन्] → @deva[जर्] + @deva[अत्] (@ref[7.3.84] @deva[गुण]) = @deva[जरत्], nom. @deva[जरन्] (@ref[6.1.7]). By @deva[वासरूप] (@ref[3.1.94]), @deva[निष्ठा] optional: @deva[जृ] + @deva[क्त] → @deva[जिर्त] (@ref[7.1.100]) → @deva[जिर्न] (@ref[8.2.42]) → @deva[जीर्ण] (@ref[8.2.77] @deva[दीर्घ], @ref[8.4.1] @deva[णत्व])."
        }
    },
    "32105": {
        "en": {
            "simple": "In the Vedas, the affix @deva[लिट्] (Perfect Tense) comes after a verb with past-time meaning. Examples: @deva[ददर्श] 'I saw' (in @deva[अहं सूर्यमुभयतो ददर्श] 'I saw the sun from both sides'), @deva[आततान] 'I stretched' (in @deva[अहं द्यावापृथिवी आततान]). Here @deva[लिट्] has the force of @deva[निष्ठा]. This general rule differs from @ref[3.4.61] which requires syntactic relation between verbs.",
            "standard": "In @deva[छन्दस्], @deva[लिट्] (Perfect) follows a @deva[धातु] with @deva[भूतार्थ]. Examples: @deva[अहं सूर्यमुभयतो ददर्श] 'I saw the sun from both sides'; @deva[अहं द्यावापृथिवी आततान] 'I stretched heaven and earth' (Yajur Veda VIII.9). Here @deva[ददर्श] and @deva[आततान] function like @deva[निष्ठा]. This general rule differs from @ref[3.4.61], which applies to @deva[धातुसम्बन्ध] (syntactic relation between verbs).",
            "advanced": "In @deva[छन्दस्], @deva[लिट्] follows @deva[धातु] with @deva[भूतार्थ]. Examples: @deva[ददर्श], @deva[आततान] (Yajur Veda VIII.9). These have @deva[निष्ठार्थ]. This differs from @ref[3.4.61] where @deva[लुङ्]/लङ्/लिट् apply in all tenses but require @deva[धातुसम्बन्ध] (@ref[3.4.1]). This sūtra is general, without such limitation. @deva[लिट्] is fully treated in @deva[धातुप्रकरण]."
        }
    },
    "32106": {
        "en": {
            "simple": "In the Vedas, @deva[लिट्] (Perfect) is optionally replaced by @deva[कानच्]. Examples: @deva[चिक्यानः] 'he consecrated the fire', @deva[सुषुवाणः] 'he pressed soma'. This being optional, @deva[लिट्] may also be used (as in @ref[3.2.105]). @deva[कानच्] applies only after verbs taking Ātmanepada endings. The repetition of @deva[लिट्] shows this replaces both the special @deva[लिट्] of @ref[3.2.105] and the general Perfect.",
            "standard": "In @deva[छन्दस्], @deva[कानच्] optionally replaces @deva[लिट्]. Examples: @deva[अग्निं चिक्यानः] 'having consecrated fire'; @deva[सोमं सुषुवाणः] 'having pressed soma'. Being optional, @deva[लिट्] may also apply (as in @ref[3.2.105]). The @deva[लिट्] repetition indicates @deva[कानच्] replaces both the specific @deva[लिट्] of @ref[3.2.105] and the general Perfect—forming both @deva[कृदन्त] adjectives and finite Perfect forms. This affix applies only to @deva[आत्मनेपद] verbs (@ref[1.4.100]). See @deva[तूतुजान] (Ṛg Veda I.3.6).",
            "advanced": "In @deva[छन्दस्], @deva[कानच्] is @deva[विकल्पेन] @deva[आदेश] for @deva[लिट्]. Examples: @deva[चिक्यानः], @deva[सुषुवाणः]. The @deva[लिट्] @deva[पुनर्वचन] indicates substitution of both the @deva[विशेष]-@deva[लिट्] (@ref[3.2.105]) and @deva[सामान्य]-@deva[लिट्] (general Perfect)—hence @deva[कानच्] forms both @deva[कृदन्त] and @deva[लिट्]-@deva[तिङन्त]. Restricted to @deva[आत्मनेपदिन्] (@ref[1.4.100]). Reference: @deva[तूतुजान] (Ṛg Veda I.3.6)."
        }
    },
    "32107": {
        "en": {
            "simple": "In the Vedas, @deva[क्वसु] optionally replaces @deva[लिट्] (Perfect). Examples: @deva[जक्षिवान्] 'eaten' (from @deva[जक्षिवस्]), @deva[पपिवान्] 'drunk' (from @deva[पपिवस्]). Sometimes it doesn't apply, as in @ref[3.2.105]'s @deva[ददर्श]. This sūtra is separated from the previous so that only @deva[क्वसु] continues in anuvrtti to later rules.",
            "standard": "In @deva[छन्दस्], @deva[क्वसु] optionally replaces @deva[लिट्]. Examples: @deva[जक्षिवस्], nom. @deva[जक्षिवान्] (Yajur Veda VIII.19) 'having eaten'; @deva[पपिवस्], nom. @deva[पपिवान्] 'having drunk'. Optional: @deva[लिट्] may also apply (@deva[अहं सूर्यमुभयतो ददर्श] from @ref[3.2.105]). This sūtra is separated from the previous so that only @deva[क्वसु] (not @deva[कानच्]) continues in @deva[अनुवृत्ति] to subsequent sūtras.",
            "advanced": "In @deva[छन्दस्], @deva[क्वसु] is @deva[विकल्पेन] @deva[आदेश] for @deva[लिट्]. Examples: @deva[जक्षिवान्] (Yajur Veda VIII.19), @deva[पपिवान्]. The @deva[पृथक्करण] from the previous sūtra ensures only @deva[क्वसु] (excluding @deva[कानच्]) continues in @deva[अनुवृत्ति] to subsequent sūtras."
        }
    },
    "32108": {
        "en": {
            "simple": "In modern Sanskrit, @deva[क्वसु] optionally replaces @deva[लिट्] (Perfect) after @deva[सद्] 'to sit', @deva[वस्] 'to dwell', and @deva[श्रु] 'to hear' with past meaning. Being a substitute, original @deva[लिट्] also applies. Examples: @deva[उपसेदिवान्] 'served' (alternatively @deva[उपासदत्], @deva[उपासीदत्], @deva[उपससाद]); @deva[अनूषिवान्] 'dwelt alongside'; @deva[उपशुश्रुवान्] 'listened'. @deva[क्वसु] also replaces @deva[लुङ्] and @deva[लङ्].",
            "standard": "In @deva[भाषा], @deva[क्वसु] optionally replaces @deva[लिट्] after @deva[सद्], @deva[वस्], and @deva[श्रु] with @deva[भूतार्थ]. Being @deva[आदेश], @deva[लिट्] also applies. Examples: @deva[उपसेदिवान् कौत्सः पाणिनिम्] 'Kautsa served Pāṇini' (alternatives: @deva[उपासदत्], @deva[उपासीदत्], @deva[उपससाद]); @deva[अनूषिवान्] (alternatives: @deva[अन्ववासीत्], @deva[अन्ववसत्], @deva[अनूवास]); @deva[उपशुश्रुवान्] (alternatives: @deva[उपाश्रौषीत्], @deva[उपाश्रुणोत्], @deva[उपशुश्राव]). @deva[क्वसु] applies with @deva[लुङ्] and @deva[लङ्] force as well.",
            "advanced": "@deva[क्वसु] is @deva[विकल्पेन] @deva[लिडादेश] after @deva[सद्]/वस्/श्रु in @deva[भाषा] with @deva[भूतार्थ]. Examples: @deva[उपसेदिवान्] (alternatives: @deva[उपासदत्] @deva[लुङ्], @deva[उपासीदत्] @deva[लङ्], @deva[उपससाद] @deva[लिट्]); @deva[अनूषिवान्]; @deva[उपशुश्रुवान्]. @deva[क्वसु] functions with @deva[लुङ्]/लङ् force as well as @deva[लिट्]."
        }
    },
    "32109": {
        "en": {
            "simple": "The forms @deva[उपेयिवान्], @deva[अनाश्वान्], and @deva[अनूचानः] are irregular. @deva[उपेयिवान्] (from @deva[उप] + @deva[इ] 'to go' + @deva[क्वसु]) irregularly takes @deva[इट्] augment against @ref[7.2.67]. @deva[अनाश्वान्] (from @deva[अन्] + @deva[अश्] 'to eat' + @deva[क्वसु]) does **not** take @deva[इट्]. @deva[अनूचानः] (from @deva[अनु] + @deva[वच्] + @deva[कानच्]) is irregular. Alternatives exist: @deva[उपागात्], @deva[नाशीत्], @deva[अन्ववोचत्] etc.",
            "standard": "The forms @deva[उपेयिवान्], @deva[अनाश्वान्], @deva[अनूचानः] are irregular (@deva[निपातन]). @deva[उपेयिवान्]: @deva[उप] + @deva[इ] + @deva[क्वसु] with reduplication (@deva[ई] by @ref[7.4.69]) and irregular @deva[इट्] (against @ref[7.2.67]); @deva[इ] → @deva[य] by @ref[6.4.81]. In @deva[भ]-forms, @deva[इट्] drops: @deva[उपेयुषः], @deva[उपेयुषा]. Not limited to @deva[उप]: @deva[समीयिवान्], @deva[ईयिवान्]. Alternatives: @deva[उपागात्], @deva[उपैत्], @deva[उपेयाव]. @deva[अनाश्वान्]: @deva[अन्] + @deva[अश्] + @deva[क्वसु] without @deva[इट्]. Alternatives: @deva[नाशीत्], @deva[नाश्नात्], @deva[नाश]. @deva[अनूचानः]: @deva[अनु] + @deva[वच्] + @deva[कानच्]. Alternatives: @deva[अन्ववोचत्], @deva[अन्वब्रवीत्], @deva[अनूवाच].",
            "advanced": "@deva[निपातन] forms: @deva[उपेयिवान्], @deva[अनाश्वान्], @deva[अनूचानः]. @deva[उपेयिवान्]: @deva[उप] + @deva[इ] + @deva[क्वसु]; @deva[द्वित्व] with @deva[दीर्घ] @deva[ई] (@ref[7.4.69]) not coalescing; irregular @deva[इडागम] (against @ref[7.2.67]); @deva[इयङ्] by @ref[6.4.81]. In @deva[भसंज्ञक] (@deva[वस्] → @deva[उष्]), @deva[इट्] drops (@deva[उपेयुषः], @deva[उपेयुषा])—@deva[इट्] was @deva[प्रतिषेधप्रतिषेध], limited scope. Extends beyond @deva[उप]: @deva[समीयिवान्], @deva[ईयिवान्]. Alternatives: @deva[उपागात्] @deva[लुङ्], @deva[उपैत्] @deva[लङ्], @deva[उपेयाव] @deva[लिट्]. @deva[अनाश्वान्]: @deva[अन्] + @deva[अश्] + @deva[क्वसु], @deva[इडभाव]. @deva[अनूचानः]: @deva[अनु] + @deva[वच्] + @deva[कानच्]."
        }
    },
    "32110": {
        "en": {
            "simple": "The affix @deva[लुङ्] (Aorist) comes after a verb with past-time meaning. The entire affix is replaced by personal terminations (see @ref[3.1.43]). Aorist expresses past action indefinitely or very recently (within the current day). Examples: @deva[अकार्षीत्] 'he did', @deva[अहार्षीत्] 'he took'. Vārttika: After @deva[वस्] 'to dwell', @deva[लुङ्] (not @deva[लङ्]) is used for 'end of the present night': @deva[अमुत्रावात्सम्] 'I dwelt there' (asked upon waking).",
            "standard": "The affix @deva[लुङ्] (Aorist) follows a @deva[धातु] with @deva[भूतार्थ]. The entire @deva[लुङ्] is replaced by personal terminations (@ref[3.1.43] ff.). Aorist expresses past action indefinitely or very recently (within the current day), not for narrating remote events. Examples: @deva[अकार्षीत्] 'did'; @deva[अहार्षीत्] 'took'. Vārttika: @deva[लुङ्] after @deva[वस्] when 'end of present night' is meant (upon proper waking): @deva[अमुत्रावात्सम्] (not @deva[अमुत्रावसम्]). If one slept only briefly, @deva[लङ्] applies: @deva[अमुत्रावसम्].",
            "advanced": "@deva[लुङ्] follows @deva[धातु] with @deva[भूतार्थ]. @deva[लुङ्] = Aorist; entirely replaced by @deva[तिप्] etc. (@ref[3.1.43] ff.). Aorist expresses indefinite or very recent past (within @deva[अद्यतन]), used in dialogue, not narration. Examples: @deva[अकार्षीत्], @deva[अहार्षीत्]. @deva[वार्त्तिक]: @deva[लुङ्] after @deva[वस्] for @deva[रात्र्यन्त] (end of night, proper waking): @deva[अमुत्रावात्सम्] (not @deva[लङ्] @deva[अमुत्रावसम्]). Brief sleep → @deva[लङ्]: @deva[अमुत्रावसम्]."
        }
    },
    "32111": {
        "en": {
            "simple": "The affix @deva[लङ्] (Imperfect) comes after a verb with past-time meaning for events **before** the current day. The term @deva[अनद्यतन] means 'not of today'. Examples: @deva[अकरोत्] 'he did', @deva[अहरत्] 'he took'. If there's doubt about the time (today or yesterday), use @deva[लुङ्] (Aorist), not @deva[लङ्]: @deva[अद्य ह्यो वा अभुञ्ज्महि] 'we ate today or yesterday'. Vārttika: @deva[लङ्] for unwitnessed but public events: @deva[अरुणद् यवनः साकेतम्] 'the Yavanas besieged Sāketa'.",
            "standard": "The affix @deva[लङ्] (Imperfect) follows a @deva[धातु] with @deva[भूतार्थ] for @deva[अनद्यतन] (events before today). Examples: @deva[अकरोत्] 'did'; @deva[अहरत्] 'took'. @deva[अनद्यतन] is @deva[बहुव्रीहि]: 'that which did not occur today'. If time is doubtful (today or yesterday), @deva[लुङ्] applies: @deva[अद्य ह्यो वा अभुञ्ज्महि]. Vārttika: @deva[लङ्] for @deva[अपरोक्ष] (unwitnessed) but @deva[प्रसिद्ध] (well-known public) events: @deva[अरुणद् यवनः साकेतम्]; @deva[अरुणद् यवनः माध्यमिकान्]. Witnessed event: @deva[उदगात् आदित्यः]. Non-public: @deva[चकार कटं देवदत्तः]. Not perceivable: @deva[जघान कंसं किल वासुदेवः].",
            "advanced": "@deva[लङ्] follows @deva[धातु] with @deva[भूतार्थ] for @deva[अनद्यतन]. @deva[अनद्यतन] is @deva[बहुव्रीहि] (not @deva[तत्पुरुष])—if time doubtful, @deva[लुङ्] applies: @deva[अद्य ह्यो वा अभुञ्ज्महि]. @deva[वार्त्तिक]: @deva[लङ्] for @deva[अपरोक्ष] (unwitnessed), @deva[प्रसिद्ध] (public), @deva[प्रत्यक्षविषय] (perceivable): @deva[अरुणद् यवनः साकेतम्/माध्यमिकान्]. Conditions: @deva[परोक्ष] (witnessed) → no: @deva[उदगात् आदित्यः]; non-@deva[प्रसिद्ध] → no: @deva[चकार कटं देवदत्तः]; non-@deva[प्रत्यक्षविषय] → no: @deva[जघान कंसं किल वासुदेवः]."
        }
    },
    "32112": {
        "en": {
            "simple": "When a word meaning 'recollection' is connected, a verb takes @deva[लृट्] (Second Future) with past-time meaning (for events before today). This overrides @deva[लङ्]. Example: @deva[अभिजानासि देवदत्त कश्मीरेषु वत्स्यामः] 'Do you remember, Devadatta? We were dwelling (lit. will dwell) in Kashmir'. The word @deva[वचन] indicates synonyms like @deva[स्मरसि] 'do you remember', @deva[बुध्यसे] 'do you know' also trigger this.",
            "standard": "When @deva[अभिज्ञा] (recollection) is contextually present, a verb takes @deva[लृट्] (Second Future) with @deva[भूतार्थ] for @deva[अनद्यतन] events. This sets aside @deva[लङ्]. Example: @deva[अभिजानासि देवदत्त कश्मीरेषु वत्स्यामः] 'Rememberest thou, Devadatta? We were dwelling in Kashmir'. The term @deva[वचन] ('signification') indicates synonyms of @deva[अभिज्ञा] also apply: @deva[स्मरसि], @deva[बुध्यसे], @deva[चेतयसे].",
            "advanced": "With @deva[अभिज्ञावचन] (expression of recollection), @deva[लृट्] applies for @deva[अनद्यतन] @deva[भूतार्थ], displacing @deva[लङ्]. Example: @deva[अभिजानासि देवदत्त कश्मीरेषु वत्स्यामः]. The @deva[वचन] extends the rule to @deva[अभिज्ञा]-synonyms: @deva[स्मरसि], @deva[बुध्यसे], @deva[चेतयसे]."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.103-3.2.112")
