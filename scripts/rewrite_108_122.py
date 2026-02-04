#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.2.108-3.2.122 (Batch 6)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "32108": {
        "en": {
            "simple": "In modern Sanskrit, the affix @deva[क्वसु] optionally replaces @deva[लिट्] (Perfect) after the verbs @deva[सद्] 'to sit', @deva[वस्] 'to dwell', and @deva[श्रु] 'to hear' with past-time meaning. Being a substitute, the original @deva[लिट्] forms also apply. Examples: @deva[उपसेदिवान् कौत्सः पाणिनिम्] 'Kautsa served Pāṇini' (or Aorist @deva[उपासदत्], Imperfect @deva[उपासीदत्], Perfect @deva[उपससाद]); @deva[अनूषिवान्] (or @deva[अन्ववासीत्], @deva[अन्ववसत्], @deva[अनूवास]); @deva[उपशुश्रुवान्] (or @deva[उपाश्रौषीत्], @deva[उपाश्रुणोत्], @deva[उपशुश्राव]). The affix @deva[क्वसु] has the force of @deva[लुङ्] and @deva[लङ्] as well.",
            "standard": "In @deva[भाषा] (modern Sanskrit), @deva[क्वसु] optionally replaces @deva[लिट्] after @deva[सद्], @deva[वस्], @deva[श्रु] with @deva[भूतार्थ]. Being @deva[आदेश], original @deva[लिट्] is also valid. Examples: @deva[उपसेदिवान् कौत्सः पाणिनिम्] 'Kautsa served Pāṇini' (alternates: Aorist @deva[उपासदत्], Imperfect @deva[उपासीदत्], Perfect @deva[उपससाद]); @deva[अनूषिवान्] (alternates: @deva[अन्ववासीत्], @deva[अन्ववसत्], @deva[अनूवास]); @deva[उपशुश्रुवान्] (alternates: @deva[उपाश्रौषीत्], @deva[उपाश्रुणोत्], @deva[उपशुश्राव]). @deva[क्वसु] functions with @deva[लुङ्] and @deva[लङ्] force as well.",
            "advanced": "In @deva[भाषा], @deva[क्वसु] @deva[विभाषया] replaces @deva[लिट्] after @deva[सद्], @deva[वस्], @deva[श्रु] with @deva[भूतार्थ]. Being @deva[आदेश], @deva[लिट्] also valid. Examples: @deva[उपसेदिवान्] (alternates: @deva[उपासदत्], @deva[उपासीदत्], @deva[उपससाद]); @deva[अनूषिवान्]; @deva[उपशुश्रुवान्]. @deva[क्वसु] operates with @deva[लुङ्]/@deva[लङ्] force."
        }
    },
    "32109": {
        "en": {
            "simple": "The forms @deva[उपेयिवान्], @deva[अनाश्वान्], and @deva[अनूचानः] are irregular. For @deva[उपेयिवान्]: @deva[उप] + @deva[इ] + @deva[क्वसु] → reduplicate with long @deva[ई] (@ref[7.4.69]) → irregular @deva[इट्] augment (against @ref[7.2.67]) → @deva[इ] replaced by @deva[य] (@ref[6.4.81]) → @deva[उपेयिवान्]. This form occurs with other prefixes too: @deva[समीयिवान्], @deva[ईयिवान्]. For @deva[अनाश्वान्]: @deva[अन्] + @deva[अश्] + @deva[क्वसु] (no @deva[इट्]). For @deva[अनूचानः]: @deva[अनु] + @deva[वच्] + @deva[कानच्]. By @deva[विभाषा], alternative tense forms also apply.",
            "standard": "The forms @deva[उपेयिवान्], @deva[अनाश्वान्], @deva[अनूचानः] are @deva[निपातन] (irregular). @deva[उपेयिवान्]: @deva[उप] + @deva[इ] + @deva[क्वसु] → @deva[उप] + @deva[ई] + @deva[इ] + @deva[क्वसु] (reduplication with long @deva[ई] by @ref[7.4.69]) → irregular @deva[इट्] augment contrary to @ref[7.2.67] → @deva[इ] → @deva[य] (@ref[6.4.81]) → @deva[उपेयिवस्], nominative @deva[उपेयिवान्]. @deva[इट्] drops in @deva[भ]-forms where @deva[वस्] → @deva[उष्]: @deva[उपेयुषः] (acc. pl.), @deva[उपेयुषा] (inst.). Also @deva[समीयिवान्], @deva[ईयिवान्]. Alternates: Aorist @deva[उपागात्], Imperfect @deva[उपैत्], Perfect @deva[उपेयाय]. @deva[अनाश्वान्]: @deva[अन्] + @deva[अश्] + @deva[क्वसु] (no @deva[इट्]); alternates: @deva[नाशीत्], @deva[नाश्नात्], @deva[आनाश]. @deva[अनूचानः]: @deva[अनु] + @deva[वच्] + @deva[कानच्]; alternates: @deva[अन्ववोचत्], @deva[अन्वब्रवीत्], @deva[अनूवाच].",
            "advanced": "@deva[निपातन] forms: @deva[उपेयिवान्], @deva[अनाश्वान्], @deva[अनूचानः]. @deva[उपेयिवान्]: @deva[उपि] + @deva[क्वसु] → reduplication (@ref[7.4.69] @deva[दीर्घ]) → @deva[इट्] against @ref[7.2.67] → @deva[इयादेश] (@ref[6.4.81]) → @deva[उपेयिवान्]. @deva[इट्] drops in @deva[भसंज्ञक]: @deva[उपेयुषः], @deva[उपेयुषा]. Also @deva[समीयिवान्], @deva[ईयिवान्]. @deva[अनाश्वान्]: @deva[अनश्] + @deva[क्वसु] (no @deva[इट्]). @deva[अनूचानः]: @deva[अनुवच्] + @deva[कानच्]."
        }
    },
    "32110": {
        "en": {
            "simple": "The affix @deva[लुङ्] (Aorist) comes after a verb with past-time meaning. @deva[लुङ्] forms the Aorist tense—the entire affix is replaced by personal terminations (see @ref[3.1.43]ff.). The Aorist expresses past time indefinitely or very recently (within the current day). The Perfect and Imperfect narrate remote past events; the Aorist is used in dialogues referring to recent past. Examples: @deva[अकार्षीत्] 'he did', @deva[अहार्षीत्] 'he took'. Vārttika: @deva[लुङ्] after @deva[वस्] 'to dwell' when 'end of the present night' is indicated—@deva[अमुत्रावात्सम्] 'I passed the night there' (not @deva[अमुत्रावसम्]). This applies only after regular sleep.",
            "standard": "@deva[लुङ्] (Aorist) follows a @deva[धातु] with @deva[भूतार्थ]. @deva[लुङ्] is the name of the Aorist—entirely replaced by @deva[तिङ्] (see @ref[3.1.43]ff.). The Aorist expresses @deva[भूतकाल] indefinitely or very recently (@deva[अद्यतन]—within the current day). @deva[लिट्] and @deva[लङ्] narrate remote past; @deva[लुङ्] appears in dialogues about recent actions. Examples: @deva[अकार्षीत्] 'he did', @deva[अहार्षीत्] 'he took'. @deva[वार्त्तिक]: @deva[लुङ्] after @deva[वस्] when @deva[रात्र्यवसान] (night's end) is indicated: @deva[अमुत्रावात्सम्] 'I dwelt there' (not @deva[अमुत्रावसम्]). Applies only after @deva[सुप्तोत्थान] (waking from proper sleep).",
            "advanced": "@deva[लुङ्] follows @deva[धातु] with @deva[भूतार्थ]. It is @deva[आगमसंज्ञा] for Aorist—replaced by @deva[तिङ्] (@ref[3.1.43]ff.). Expresses @deva[भूतकाल] indefinitely or @deva[अद्यतन] (recent). @deva[लिट्]/@deva[लङ्] for narration; @deva[लुङ्] for dialogue. Examples: @deva[अकार्षीत्], @deva[अहार्षीत्]. @deva[वार्त्तिक]: @deva[लुङ्] after @deva[वस्] with @deva[रात्र्यवसान]: @deva[अमुत्रावात्सम्]. Requires @deva[सुप्तोत्थान]."
        }
    },
    "32111": {
        "en": {
            "simple": "The affix @deva[लङ्] (Imperfect) comes after a verb with past-time meaning when the action occurred before the current day (@deva[अनद्यतन]). The entire affix is replaced by conjugational terminations. Examples: @deva[अकरोत्] 'he did', @deva[अहरत्] 'he took'. @deva[अनद्यतन] is a Bahuvrīhi compound meaning 'not belonging to today'. When there is doubt about whether the action was today or yesterday, use @deva[लुङ्] (not @deva[लङ्]): @deva[अद्य ह्यो वा अभुञ्ज्महि] 'we ate today or yesterday'. Vārttika: @deva[लङ्] also applies for unwitnessed recent public events: @deva[अरुणद् यवनः साकेतम्] 'the Yavanas besieged Sāketa'.",
            "standard": "@deva[लङ्] (Imperfect) follows a @deva[धातु] with @deva[भूतार्थ] when @deva[अनद्यतन] (before the current day). @deva[अनद्यतन] is @deva[बहुव्रीहि]: 'that which has not occurred during @deva[अद्यतन]'. The entire @deva[लकार] is replaced by @deva[तिङ्]. Examples: @deva[अकरोत्], @deva[अहरत्]. When time is doubtful (today or yesterday), use @deva[लुङ्]: @deva[अद्य ह्यो वा अभुञ्ज्महि]. @deva[वार्त्तिक]: @deva[लङ्] applies for @deva[अप्रत्यक्ष] (unwitnessed) events that are @deva[प्रसिद्ध] (well-known public) and @deva[प्रत्यक्षविषय] (potentially perceivable by speaker): @deva[अरुणद् यवनः साकेतम्], @deva[अरुणद् यवनः माध्यमिकान्]. Counter-examples: @deva[उदगात् आदित्यः] (witnessed); @deva[चकार कटं देवदत्तः] (not public); @deva[जघान कंसं किल वासुदेवः] (not perceivable).",
            "advanced": "@deva[लङ्] follows @deva[धातु] with @deva[भूतार्थ] when @deva[अनद्यतन]. @deva[अनद्यतन] is @deva[बहुव्रीहि]: non-@deva[अद्यतन]. Replaced by @deva[तिङ्]. Examples: @deva[अकरोत्], @deva[अहरत्]. Doubt → @deva[लुङ्]: @deva[अद्य ह्यो वा अभुञ्ज्महि]. @deva[वार्त्तिक]: @deva[लङ्] for @deva[अप्रत्यक्ष] + @deva[प्रसिद्ध] + @deva[प्रत्यक्षविषय]: @deva[अरुणद् यवनः साकेतम्]. Counter: @deva[उदगात् आदित्यः] (@deva[प्रत्यक्ष]); @deva[चकार कटं देवदत्तः] (non-@deva[प्रसिद्ध]); @deva[जघान कंसं किल वासुदेवः] (non-@deva[प्रत्यक्षविषय])."
        }
    },
    "32112": {
        "en": {
            "simple": "When a word implying 'recollection' is in connection with a verb, the verb takes @deva[लृट्] (2nd Future) in the sense of past time before the current day. This overrides @deva[लङ्]. Example: @deva[अभिजानासि देवदत्त कश्मीरेषु वत्स्यामः] 'Do you remember, Devadatta, we were dwelling in Kashmir' (literally 'we will dwell'). The term @deva[वचन] 'signification' indicates the same applies to synonyms of @deva[अभिज्ञा]: @deva[स्मरसि] 'do you remember', @deva[बुध्यसे] 'do you know', @deva[चेतयसे] 'do you reflect'.",
            "standard": "When @deva[अभिज्ञावचन] (word implying recollection) is connected with a verb, @deva[लृट्] (2nd Future) applies with @deva[भूतार्थ] in @deva[अनद्यतन]. This @deva[अपवाद] to @deva[लङ्]. Example: @deva[अभिजानासि देवदत्त कश्मीरेषु वत्स्यामः] 'Do you remember, Devadatta, we dwelt in Kashmir' (lit. 'will dwell'). The term @deva[वचन] indicates synonyms of @deva[अभिज्ञा] also apply: @deva[स्मरसि], @deva[बुध्यसे], @deva[चेतयसे].",
            "advanced": "@deva[अभिज्ञावचन] triggers @deva[लृट्] with @deva[भूतार्थ] in @deva[अनद्यतन]—@deva[अपवाद] to @deva[लङ्]. Example: @deva[अभिजानासि देवदत्त कश्मीरेषु वत्स्यामः]. The @deva[वचन] extends to @deva[अभिज्ञा]-@deva[पर्याय]s: @deva[स्मरसि], @deva[बुध्यसे], @deva[चेतयसे]."
        }
    },
    "32113": {
        "en": {
            "simple": "@deva[लृट्] (2nd Future) is not applied in the past sense when the word denoting recollection is connected with the particle @deva[यत्]. This prohibits the @deva[लृट्] from @ref[3.2.112]. Example: @deva[अभिजानासि देवदत्त यत् कश्मीरेष्ववसाम] 'You remember, Devadatta, how we dwelt in Kashmir'. Here the mere fact of dwelling is recollected without any dependent idea.",
            "standard": "@deva[लृट्] is prohibited with @deva[भूतार्थ] when @deva[अभिज्ञावचन] is connected with particle @deva[यत्]—this blocks @ref[3.2.112]. Example: @deva[अभिजानासि देवदत्त यत् कश्मीरेष्ववसाम] 'You remember how we dwelt in Kashmir'. Here @deva[वास] alone is recollected without dependent action. The next sūtra applies when recollection includes another dependent idea necessary for completing the sense.",
            "advanced": "@deva[यत्] with @deva[अभिज्ञावचन] blocks @deva[लृट्] of @ref[3.2.112]. Example: @deva[अभिजानासि देवदत्त यत् कश्मीरेष्ववसाम]. Simple @deva[वास] recollected; @ref[3.2.114] applies when @deva[साकाङ्क्षक्रिया] is present."
        }
    },
    "32114": {
        "en": {
            "simple": "@deva[लृट्] (2nd Future) optionally applies in the past sense when a word implying recollection is used (with or without @deva[यत्]), provided two verbs in the same sentence are interdependent—one necessary to complete the meaning of the other. Example: @deva[अभिजानासि देवदत्त कश्मीरान् गमिष्यामः, तत्र सक्तून् पास्यामः] or @deva[...गच्छाम, तत्र सक्तून् पिबाम] 'Do you remember, Devadatta, we went to Kashmir and drank saktu there'. The first verb (going) is the sign; the second (drinking) is what is really signified.",
            "standard": "@deva[लृट्] comes @deva[विभाषया] with @deva[भूतार्थ] when @deva[अभिज्ञावचन] (with or without @deva[यत्]) is used and the two verbs are @deva[साकाङ्क्ष] (interdependent—each necessary for the other to complete the speaker's meaning). @deva[साकाङ्क्षा] = relation between @deva[लिङ्ग] (sign) and @deva[लिङ्गिन्] (signified). Examples: @deva[अभिजानासि देवदत्त कश्मीरान् गमिष्यामः, तत्र सक्तून् पास्यामः] or @deva[...गच्छाम, ...पिबाम]; with @deva[यत्]: @deva[अभिजानासि देवदत्त यत् कश्मीरान् गमिष्यामः यत् तत्रौदनं भोक्ष्यामहे] or @deva[यत्...गच्छाम, यत्...अभुञ्ज्महि]. The first verb (going) introduces; the second (eating/drinking) is the main thought.",
            "advanced": "@deva[लृट्] @deva[विभाषया] with @deva[भूतार्थ] when @deva[अभिज्ञावचन] (±@deva[यत्]) and @deva[साकाङ्क्षक्रिया]—two verbs in @deva[लिङ्गलिङ्गिभाव]. Examples: @deva[अभिजानासि देवदत्त कश्मीरान् गमिष्यामः तत्र सक्तून् पास्यामः] / @deva[गच्छाम...पिबाम]. First @deva[क्रिया] is @deva[लिङ्ग]; second is @deva[लिङ्गिन्]. @deva[विभाषा] permits @deva[लृट्] or other @deva[लकार]s."
        }
    },
    "32115": {
        "en": {
            "simple": "The affix @deva[लिट्] (Perfect) comes after a verb with past-time meaning when the action occurred before the current day and was not witnessed by the speaker. @deva[परोक्ष] 'unperceived' qualifies both @deva[भूत] and @deva[अनद्यतन]. Examples: @deva[चकार] 'he did', @deva[जहार] 'he took'. The Perfect should not normally be used in the first person (the speaker witnessed his own action), but if the speaker was unconscious or distracted, it may be used: @deva[सुप्तोऽहं किल विललाप] 'I prated while asleep'. Vārttika: Perfect is used for total denial regardless of time or perception: @deva[कलिङ्गेषु स्थितोऽसि? नाहं कलिङ्गं जगाम] 'Did you live in Kaliṅga? I didn't even go there'.",
            "standard": "@deva[लिट्] (Perfect) follows a @deva[धातु] with @deva[भूतार्थ] when @deva[अनद्यतन] and @deva[परोक्ष] (unwitnessed by speaker). @deva[परोक्ष] qualifies both @deva[भूत] and @deva[अनद्यतन]. Examples: @deva[चकार], @deva[जहार]. @deva[लिट्] should not be used in @deva[उत्तमपुरुष] (first person) since the agent witnesses his own action. Exception: when speaker was @deva[सुप्त]/unconscious: @deva[सुप्तोऽहं किल विललाप] 'I prated while asleep'. @deva[वार्त्तिक]: @deva[लिट्] for @deva[अत्यन्तनिषेध] (total denial) regardless of @deva[काल]/@deva[प्रत्यक्ष]: @deva[कलिङ्गेषु स्थितोऽसि? नाहं कलिङ्गं जगाम]; @deva[दक्षिणापथं प्रविष्टोऽसि? नाहं दक्षिणापथं प्रविवेश].",
            "advanced": "@deva[लिट्] follows @deva[धातु] with @deva[भूतार्थ] when @deva[अनद्यतन] and @deva[परोक्ष]. Examples: @deva[चकार], @deva[जहार]. @deva[लिट्] inappropriate in @deva[उत्तमपुरुष] (self-witnessed). Exception: @deva[सुप्त] etc.—@deva[सुप्तोऽहं किल विललाप]. @deva[वार्त्तिक]: @deva[अत्यन्तनिषेध] triggers @deva[लिट्] regardless of @deva[काल]/@deva[परोक्षत्व]: @deva[नाहं कलिङ्गं जगाम], @deva[नाहं दक्षिणापथं प्रविवेश]."
        }
    },
    "32116": {
        "en": {
            "simple": "@deva[लङ्] (Imperfect) also comes after a verb when the particles @deva[ह] (alas) or @deva[शश्वत्] (repeatedly) are in connection with it, denoting past action not witnessed by the speaker and before the current day. The @deva[च] 'and' indicates @deva[लिट्] (Perfect) may also be used. Examples: @deva[इति हाकरोत्] or @deva[इति ह चकार] 'Alas, he did it'; @deva[शश्वदकरोत्] or @deva[शश्वच्चकार] 'again and again he did it'.",
            "standard": "@deva[लङ्] (Imperfect) also follows a verb when particles @deva[ह] or @deva[शश्वत्] are used, with @deva[भूतार्थ], @deva[अनद्यतन], and @deva[परोक्ष]. The @deva[च] permits @deva[लिट्] as alternative. Examples: @deva[इति हाकरोत्] (Imperfect) or @deva[इति ह चकार] (Perfect) 'Alas, he did it'; @deva[शश्वदकरोत्] or @deva[शश्वच्चकार] 'he did it repeatedly'.",
            "advanced": "@deva[लङ्] also applies when @deva[ह] or @deva[शश्वत्] is @deva[योग] with @deva[भूतार्थ], @deva[अनद्यतन], @deva[परोक्ष]. @deva[च] permits @deva[लिट्]. Examples: @deva[इति हाकरोत्] / @deva[इति ह चकार]; @deva[शश्वदकरोत्] / @deva[शश्वच्चकार]."
        }
    },
    "32117": {
        "en": {
            "simple": "Both @deva[लङ्] (Imperfect) and @deva[लिट्] (Perfect) come after a verb expressing past time not belonging to the current day and unperceived by the speaker, when the past referred to is recent and the sentence is interrogative. Examples: @deva[अगच्छद् देवदत्तः] or @deva[जगाम देवदत्तः] 'Did Devadatta go / Has Devadatta gone (just now)?'; @deva[अयजद् देवदत्तः] or @deva[इयाज देवदत्तः] 'Did Devadatta sacrifice?'. Without the question, only Perfect: @deva[जगाम देवदत्तः]. Without recent time: @deva[जघान कंसं किल वासुदेवः] (remote past).",
            "standard": "Both @deva[लङ्] and @deva[लिट्] follow a verb with @deva[भूतार्थ], @deva[अनद्यतन], @deva[परोक्ष] when @deva[आसन्नकाल] (recent past) and @deva[प्रश्न] (interrogative). Examples: @deva[अगच्छद् देवदत्तः] or @deva[जगाम देवदत्तः] 'Did Devadatta go?'; @deva[अयजद् देवदत्तः] or @deva[इयाज देवदत्तः] 'Did Devadatta sacrifice?'. Without @deva[प्रश्न]: @deva[जगाम देवदत्तः] (only @deva[लिट्]). Without @deva[आसन्नकाल]: @deva[भवन्तं पृच्छामि जघान कंसं किल वासुदेवः] (remote past → @deva[लिट्] only).",
            "advanced": "@deva[लङ्] and @deva[लिट्] both apply with @deva[भूतार्थ], @deva[अनद्यतन], @deva[परोक्ष] when @deva[आसन्नकाल] and @deva[प्रश्न]. Examples: @deva[अगच्छद् देवदत्तः] / @deva[जगाम देवदत्तः]; @deva[अयजद् देवदत्तः] / @deva[इयाज देवदत्तः]. Without @deva[प्रश्न]: @deva[लिट्] only. Without @deva[आसन्नकाल]: @deva[लिट्] only."
        }
    },
    "32118": {
        "en": {
            "simple": "The affix @deva[लट्] (Present) comes after a verb when the particle @deva[स्म] is in connection with it, denoting past time not belonging to the current day and unperceived by the speaker. This overrides @deva[लिट्] (Perfect). Examples: @deva[यजति स्म युधिष्ठिरः] 'Yudhiṣṭhira sacrificed'; @deva[नलेन स्म पुराधीयते] 'It was formerly studied by Nala'.",
            "standard": "@deva[लट्] (Present) follows a verb when particle @deva[स्म] is @deva[योग], with @deva[भूतार्थ], @deva[अनद्यतन], @deva[परोक्ष]. This @deva[अपवाद] overrides @deva[लिट्]. Examples: @deva[यजति स्म युधिष्ठिरः] 'Yudhiṣṭhira sacrificed'; @deva[नलेन स्म पुराधीयते]; @deva[ऊर्णया स्म पराधीयते].",
            "advanced": "@deva[लट्] applies when @deva[स्म] is @deva[योग] with @deva[भूतार्थ], @deva[अनद्यतन], @deva[परोक्ष]—@deva[अपवाद] to @deva[लिट्]. Examples: @deva[यजति स्म युधिष्ठिरः]; @deva[नलेन स्म पुराधीयते]."
        }
    },
    "32119": {
        "en": {
            "simple": "The affix @deva[लट्] (Present) comes after a verb when the particle @deva[स्म] is in connection with it, denoting past action not belonging to the current day, when the action was perceived by the agent (the speaker witnessed his own action in the past). Examples: @deva[एवं स्म पिता ब्रवीति] 'Thus said the father'; @deva[इति स्मोपाध्यायः कथयति] 'Thus said the preceptor'.",
            "standard": "@deva[लट्] follows a verb when @deva[स्म] is @deva[योग], with @deva[भूतार्थ] and @deva[अनद्यतन], when the action was @deva[प्रत्यक्ष] (perceived by the agent). Examples: @deva[एवं स्म पिता ब्रवीति] 'Thus said the father'; @deva[इति स्मोपाध्यायः कथयति] 'Thus said the preceptor'.",
            "advanced": "@deva[लट्] with @deva[स्म] when @deva[भूतार्थ], @deva[अनद्यतन], @deva[कर्तृप्रत्यक्ष]. Examples: @deva[एवं स्म पिता ब्रवीति]; @deva[इति स्मोपाध्यायः कथयति]."
        }
    },
    "32120": {
        "en": {
            "simple": "The affix @deva[लट्] (Present) is used after a verb in denoting past action when the particle @deva[ननु] is used and an answer is given to a question. The @deva[अनद्यतन] and @deva[परोक्ष] conditions do not apply here—this is a general rule for past time. This overrides @deva[लुङ्] (Aorist). Examples: @deva[अकार्षीः कटं देवदत्त? — ननु करोमि भोः] 'Devadatta, did you make the mat? — Oh yes, I did'; @deva[अवोचस्तत्र किञ्चिद् देवदत्त? — ननु ब्रवीमि भोः] 'Did you speak anything there? — Oh yes, I did'. Without the reply: @deva[नन्वकार्षीन् माणवकः] 'Certainly the boy did it' (uses @deva[लुङ्]).",
            "standard": "@deva[लट्] follows a verb with @deva[भूतार्थ] when @deva[ननु] is used @deva[प्रत्युत्तरे] (in reply to a question). The @deva[अनद्यतन] and @deva[परोक्ष] @deva[अनुवृत्ति] do not extend here—general @deva[भूतकाल] rule. This @deva[अपवाद] overrides @deva[लुङ्]. Examples: @deva[अकार्षीः कटं देवदत्त? — ननु करोमि भोः] 'Did you make the mat? — Yes, I did'; @deva[अवोचस्तत्र किञ्चिद् देवदत्त? — ननु ब्रवीमि भोः]. Without @deva[प्रत्युत्तर]: @deva[नन्वकार्षीन् माणवकः] (uses @deva[लुङ्]).",
            "advanced": "@deva[लट्] with @deva[भूतार्थ] when @deva[ननु] in @deva[प्रत्युत्तर]. @deva[अनद्यतन]/@deva[परोक्ष] @deva[अनुवृत्ति] stops—general @deva[भूत] rule. @deva[अपवाद] to @deva[लुङ्]. Examples: @deva[अकार्षीः कटं देवदत्त? — ननु करोमि भोः]; @deva[अवोचस्तत्र किञ्चिद् देवदत्त? — ननु ब्रवीमि भोः]. Without @deva[प्रत्युत्तर]: @deva[नन्वकार्षीन् माणवकः]."
        }
    },
    "32121": {
        "en": {
            "simple": "The affix @deva[लट्] (Present) optionally comes after a verb in denoting past time, in reply to a question, when the particles @deva[न] 'not' or @deva[नु] 'what of that' are used. Examples: @deva[अकार्षीः कटं देवदत्त? — न करोमि भोः] or @deva[नाकार्षम्] 'Did you make the mat? — No, I did not'; @deva[अहं नु करोमि] or @deva[अहं न्वकार्षम्] 'What of that, I did'.",
            "standard": "@deva[लट्] comes @deva[विभाषया] with @deva[भूतार्थ] in @deva[प्रत्युत्तर] when @deva[न] or @deva[नु] is used. Examples: @deva[अकार्षीः कटं देवदत्त? — न करोमि भोः] or @deva[नाकार्षम्] 'Did you make the mat? — No, I did not'; @deva[अहं नु करोमि] or @deva[अहं न्वकार्षम्] 'What of that, I did'.",
            "advanced": "@deva[लट्] @deva[विभाषया] with @deva[भूतार्थ] in @deva[प्रत्युत्तर] when @deva[न] or @deva[नु]. Examples: @deva[न करोमि भोः] / @deva[नाकार्षम्]; @deva[अहं नु करोमि] / @deva[अहं न्वकार्षम्]."
        }
    },
    "32122": {
        "en": {
            "simple": "Optionally, @deva[लुङ्] (Aorist) and @deva[लट्] (Present) come after a verb in denoting past time not belonging to the current day when @deva[पुरा] 'formerly' is used, provided @deva[स्म] is not used. When @deva[लट्] and @deva[लुङ्] are not used, the proper tenses apply. Examples: @deva[वसन्तीह पुरा छात्राः] (Present) 'The pupils lived here formerly', or Aorist @deva[अवात्सुः पुरा छात्राः], Imperfect @deva[अवसन्निह पुरा छात्राः], Perfect @deva[ऊषुरिह पुरा छात्राः]. When @deva[स्म] is used, @ref[3.2.118] applies: @deva[यजति स्म पुरा युधिष्ठिरः].",
            "standard": "@deva[लुङ्] and @deva[लट्] come @deva[विभाषया] with @deva[भूतार्थ] in @deva[अनद्यतन] when @deva[पुरा] is used, @deva[अस्मप्रयोगे] (provided @deva[स्म] is not used). The @deva[अनद्यतन] @deva[अनुवृत्ति] resumes here via @deva[मण्डूकप्लुति] (frog's leap—skipping @ref[3.2.120]-@ref[3.2.121]). Examples: @deva[वसन्तीह पुरा छात्राः] (@deva[लट्]) 'The pupils lived here formerly'; @deva[अवात्सुः पुरा छात्राः] (@deva[लुङ्]); @deva[अवसन्निह पुरा छात्राः] (@deva[लङ्]); @deva[ऊषुरिह पुरा छात्राः] (@deva[लिट्]). With @deva[स्म]: @ref[3.2.118] applies—@deva[यजति स्म पुरा युधिष्ठिरः].",
            "advanced": "@deva[लुङ्] and @deva[लट्] @deva[विभाषया] with @deva[भूतार्थ], @deva[अनद्यतन] when @deva[पुरा] @deva[योग], @deva[अस्मप्रयोगे]. @deva[अनद्यतन] @deva[अनुवृत्ति] resumes via @deva[मण्डूकप्लुति]. Examples: @deva[वसन्तीह पुरा छात्राः] / @deva[अवात्सुः पुरा छात्राः] / @deva[अवसन्निह पुरा छात्राः] / @deva[ऊषुरिह पुरा छात्राः]. With @deva[स्म]: @ref[3.2.118]—@deva[यजति स्म पुरा युधिष्ठिरः]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sūtras 3.2.108-3.2.122")
