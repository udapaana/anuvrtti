# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32113": {
        "en": {
            "simple": "@deva[लृट्] (Second Future) is **not** used for past meaning when the word denoting recollection is connected with the particle @deva[यत्]. Example: @deva[अभिजानासि देवदत्त यत् कश्मीरेष्ववसाम] 'Do you remember, Devadatta, how we dwelt in Kashmir?' Here the mere fact of dwelling is recollected, with no dependent idea, so @deva[लृट्] is blocked.",
            "standard": "@deva[लृट्] is prohibited for @deva[भूतार्थ] when @deva[अभिज्ञा] is connected with @deva[यत्]. This blocks @deva[लृट्] from @ref[3.2.112]. Example: @deva[अभिजानासि देवदत्त यत् कश्मीरेष्ववसाम] 'Rememberest thou, Devadatta, how we dwelt in Kashmir?' Here only the fact of dwelling is recollected with no dependent action, so @ref[3.2.114] has no scope.",
            "advanced": "@deva[लृट्] is @deva[निषिद्ध] when @deva[अभिज्ञावचन] is @deva[यद्युक्त]. This blocks @ref[3.2.112]. Example: @deva[अभिजानासि देवदत्त यत् कश्मीरेष्ववसाम]. Here simple @deva[स्मरण] occurs without @deva[साकाङ्क्षता]—no dependent action completing the speaker's intent. The next sūtra (@ref[3.2.114]) requires @deva[साकाङ्क्षा] between related verbs."
        }
    },
    "32114": {
        "en": {
            "simple": "@deva[लृट्] (Second Future) **optionally** applies for past meaning when recollection is expressed (with or without @deva[यत्]) and two verbs in the sentence are interdependent—one needed to complete the sense of the other. Example: @deva[अभिजानासि देवदत्त कश्मीरान् गमिष्यामः, तत्र सक्तून् पास्यामः] 'Do you remember, Devadatta? We went to Kashmir (lit. will go), there we drank saktus (lit. will drink)'. The 'going' is sign; 'drinking' is the intended meaning.",
            "standard": "@deva[लृट्] optionally applies for @deva[भूतार्थ] when @deva[अभिज्ञा] is present (with or without @deva[यत्]) and there is @deva[साकाङ्क्षा]—the two verbs are interdependent, one being the sign and the other the signified. Examples: @deva[अभिजानासि देवदत्त कश्मीरान् गमिष्यामः, तत्र सक्तून् पास्यामः] or @deva[...गच्छामः, तत्र सक्तून् पिबामः] 'Do you remember going to Kashmir and drinking saktu there?' With @deva[यत्]: @deva[यत् कश्मीरान् गमिष्यामः, यत् तत्रौदनं भोक्ष्यामहे] or @deva[यत् कश्मीरान् गच्छाम, यत् तत्रौदनमभुञ्ज्महि].",
            "advanced": "@deva[लृट्] is @deva[विकल्पेन] for @deva[भूतार्थ] when @deva[अभिज्ञावचन] (with/without @deva[यत्]) and @deva[साकाङ्क्षा] exist. @deva[साकाङ्क्षा] = relation where one verb is @deva[लक्ष्य] (sign) and the other @deva[लक्षण] (signified)—speaker's thought depends on both for completion. Examples: @deva[गमिष्यामः...पास्यामः] (both @deva[लृट्]) or @deva[गच्छामः...पिबामः] (both @deva[लट्]). 'Going' is introductory; 'eating/drinking' is the main intent. The second proposition complements the first."
        }
    },
    "32115": {
        "en": {
            "simple": "@deva[लिट्] (Perfect Tense) comes after a verb for past time before the current day when the action was **unperceived** by the narrator. Examples: @deva[चकार] 'he did', @deva[जहार] 'he took'. Perfect is generally not used in first person (the agent would have perceived), but if the agent was unconscious: @deva[सुप्तोऽहं किल विललाप] 'indeed I prated while asleep'. Vārttika: Perfect for total denial regardless of time/perception: @deva[नाहं कलिङ्गं जगाम] 'I didn't even go to Kalinga'.",
            "standard": "@deva[लिट्] (Perfect) follows a @deva[धातु] for @deva[भूत], @deva[अनद्यतन], @deva[परोक्ष] (past, not today, unperceived). @deva[परोक्ष] qualifies both @deva[भूत] and @deva[अनद्यतन]. Examples: @deva[चकार] 'did'; @deva[जहार] 'took'. Perfect normally excludes first person (speaker witnessed), but applies if speaker was unconscious: @deva[सुप्तोऽहं किल विललाप]. @deva[वार्त्तिक]: For @deva[अत्यन्तनिवृत्ति] (total denial), Perfect applies regardless of time/perception: @deva[कलिङ्गेषु स्थितोऽसि? नाहं कलिङ्गं जगाम] 'Did you stay in Kalinga? I didn't even go there'.",
            "advanced": "@deva[लिट्] follows @deva[धातु] for @deva[भूत], @deva[अनद्यतन], @deva[परोक्ष]. @deva[परोक्ष] qualifies the clause—action unwitnessed by speaker. 'Perception' here is @deva[लौकिक] attribution to @deva[कर्तृ]. Examples: @deva[चकार], @deva[जहार]. First-person @deva[लिट्] requires @deva[प्रमाद]/अचेतनता: @deva[सुप्तोऽहं किल विललाप]. @deva[वार्त्तिक]: @deva[अत्यन्तनिवृत्त्यर्थ] overrides all conditions: @deva[नाहं कलिङ्गं जगाम], @deva[नाहं दक्षिणापथं प्रविवेश]."
        }
    },
    "32116": {
        "en": {
            "simple": "@deva[लङ्] (Imperfect) **also** comes (alongside @deva[लिट्]) when the particles @deva[ह] or @deva[शश्वत्] are connected, with past time unperceived and before today. Examples: @deva[इति हाकरोत्] or @deva[इति ह चकार] 'Alas! he did it'; @deva[शश्वदकरोत्] or @deva[शश्वच्चकार] 'again and again he did it'. The @deva[च] indicates @deva[लिट्] also applies.",
            "standard": "@deva[लङ्] (Imperfect) also applies (alongside @deva[लिट्], indicated by @deva[च]) when @deva[ह] or @deva[शश्वत्] is present, with @deva[भूत], @deva[अनद्यतन], @deva[परोक्ष]. Examples: @deva[इति हाकरोत्] (Imperfect) or @deva[इति ह चकार] (Perfect) 'Alas! he did'; @deva[शश्वदकरोत्] or @deva[शश्वच्चकार] 'repeatedly he did'.",
            "advanced": "@deva[लङ्] also applies (with @deva[लिट्] via @deva[च]) when @deva[ह]/शश्वत् is @deva[योगे], with @deva[भूत], @deva[अनद्यतन], @deva[परोक्ष]. Examples: @deva[इति हाकरोत्]/इति ह चकार; @deva[शश्वदकरोत्]/शश्वच्चकार. The @deva[चकार] includes @deva[लिट्] as option."
        }
    },
    "32117": {
        "en": {
            "simple": "@deva[लङ्] (Imperfect) and @deva[लिट्] (Perfect) both apply for past time (before today, unperceived) when the past is **recent** and the sentence is a **question**. Examples: @deva[अगच्छत् देवदत्तः] or @deva[जगाम देवदत्तः] 'Did Devadatta go (just now)?'; @deva[अयजद् देवदत्तः] or @deva[इयाज देवदत्तः] 'Did Devadatta sacrifice?'. Without interrogation, only @deva[लिट्]: @deva[जगाम देवदत्तः]. Without recent time: @deva[जघान कंसं किल वासुदेवः] 'Did Krishna kill Kaṃsa in days of yore?'",
            "standard": "@deva[लङ्] and @deva[लिट्] both apply for @deva[भूत], @deva[अनद्यतन], @deva[परोक्ष] when @deva[आसन्नकाल] (recent past) and @deva[प्रश्न] (interrogation). Examples: @deva[अगच्छत् देवदत्तः]/जगाम देवदत्तः 'Did Devadatta go?'; @deva[अयजद् देवदत्तः]/इयाज देवदत्तः. Without @deva[प्रश्न]: only @deva[लिट्] (@deva[जगाम देवदत्तः]). Without @deva[आसन्नकाल]: @deva[जघान कंसं किल वासुदेवः] (remote past).",
            "advanced": "@deva[लङ्]/लिट् both apply for @deva[भूत], @deva[अनद्यतन], @deva[परोक्ष] when @deva[आसन्नकाल] and @deva[प्रश्न]. @deva[प्रश्न] = interrogative context. @deva[आसन्नकाल] = imminent recent past. Examples: @deva[अगच्छत्]/जगाम देवदत्तः; @deva[अयजत्]/इयाज देवदत्तः. Without @deva[प्रश्न]: @deva[लिट्] alone. Without @deva[आसन्नकाल]: @deva[भवन्तं पृच्छामि, जघान कंसं किल वासुदेवः]."
        }
    },
    "32118": {
        "en": {
            "simple": "@deva[लट्] (Present Tense) comes after a verb for past time (before today, unperceived) when @deva[स्म] is connected. This blocks @deva[लिट्]. Examples: @deva[यजति स्म युधिष्ठिरः] 'Yudhiṣṭhira sacrificed'; @deva[नलेन स्म पुराधीयते]; @deva[उर्णया स्म पराधीयते].",
            "standard": "@deva[लट्] (Present) follows a @deva[धातु] for @deva[भूत], @deva[अनद्यतन], @deva[परोक्ष] when @deva[स्म] is @deva[योगे]. This blocks @deva[लिट्]. Examples: @deva[यजति स्म युधिष्ठिरः] 'Yudhiṣṭhira sacrificed'; @deva[नलेन स्म पुराधीयते]; @deva[उर्णया स्म पराधीयते].",
            "advanced": "@deva[लट्] applies for @deva[भूत], @deva[अनद्यतन], @deva[परोक्ष] when @deva[स्म] is @deva[योगे], displacing @deva[लिट्]. Examples: @deva[यजति स्म युधिष्ठिरः]; @deva[नलेन स्म पुराधीयते]; @deva[उर्णया स्म पराधीयते]."
        }
    },
    "32119": {
        "en": {
            "simple": "@deva[लट्] (Present Tense) comes after a verb for past time (before today) when @deva[स्म] is connected and the action was **perceived** by the agent. Examples: @deva[एवं स्म पिता ब्रवीति] 'Thus said the father'; @deva[इति स्मोपाध्यायः कथयति] 'Thus said the preceptor'.",
            "standard": "@deva[लट्] (Present) follows a @deva[धातु] for @deva[भूत], @deva[अनद्यतन] when @deva[स्म] is @deva[योगे] and the action is @deva[प्रत्यक्ष] (perceived by the agent). This contrasts with @ref[3.2.118] (@deva[परोक्ष]). Examples: @deva[एवं स्म पिता ब्रवीति] 'Thus said the father'; @deva[इति स्मोपाध्यायः कथयति] 'Thus said the preceptor'.",
            "advanced": "@deva[लट्] applies for @deva[भूत], @deva[अनद्यतन], @deva[प्रत्यक्ष] (agent-perceived) when @deva[स्म] is @deva[योगे]. This differs from @ref[3.2.118] which requires @deva[परोक्ष]. Examples: @deva[एवं स्म पिता ब्रवीति]; @deva[इति स्मोपाध्यायः कथयति]."
        }
    },
    "32120": {
        "en": {
            "simple": "@deva[लट्] (Present Tense) comes after a verb for past meaning when @deva[ननु] is connected and an answer is given to a question. This blocks @deva[लुङ्]. Example: Question: @deva[अकार्षीः कटं देवदत्त?] 'Devadatta, did you make the mat?' Answer: @deva[ननु करोमि भोः] 'O yes, I did make it'. Without reply: @deva[नन्वकार्षीन् माणवकः] 'Certainly Māṇavaka did it'.",
            "standard": "@deva[लट्] (Present) applies for @deva[भूतार्थ] (general past, no @deva[अनद्यतन]/परोक्ष restriction) when @deva[ननु] is @deva[योगे] and an answer (@deva[प्रतिवचन]) is given. This blocks @deva[लुङ्]. Example: @deva[अकार्षीः कटं देवदत्त?—ननु करोमि भोः] 'Did you make the mat?—Oh yes, I made it'; @deva[अवोचस्तत्र किञ्चिद् देवदत्त?—ननु ब्रवीमि भोः]. Without @deva[प्रतिवचन]: @deva[नन्वकार्षीन् माणवकः] (uses @deva[लुङ्]).",
            "advanced": "@deva[लट्] applies for @deva[भूतार्थ] (general, @deva[अनद्यतन]/परोक्ष @deva[अनुवृत्ति] stopped at @ref[3.2.120]) when @deva[ननु] is @deva[योगे] and @deva[प्रतिवचन] exists. Blocks @deva[लुङ्]. Examples: @deva[अकार्षीः कटं देवदत्त?—ननु करोमि भोः]; @deva[अवोचस्तत्र किञ्चित्?—ननु ब्रवीमि]. Without @deva[प्रतिवचन]: @deva[नन्वकार्षीन् माणवकः] (@deva[लुङ्])."
        }
    },
    "32121": {
        "en": {
            "simple": "@deva[लट्] (Present Tense) **optionally** comes after a verb for past meaning in reply to a question when @deva[न] 'not' or @deva[नु] 'what of that' is connected. Example: Question: @deva[अकार्षीः कटं देवदत्त?] Answer: @deva[न करोमि भोः] or @deva[नाकार्षम्] 'No, I didn't'; @deva[अहं नु करोमि] or @deva[अहं न्वकार्षम्] 'What of it, I did'.",
            "standard": "@deva[लट्] (Present) optionally applies for @deva[भूतार्थ] in @deva[प्रतिवचन] when @deva[न] 'not' or @deva[नु] 'what of that' is @deva[योगे]. Examples: @deva[अकार्षीः कटं देवदत्त?—न करोमि भोः] or @deva[नाकार्षम्] 'No, I didn't'; @deva[अहं नु करोमि] or @deva[अहं न्वकार्षम्] 'What of it, I did'.",
            "advanced": "@deva[लट्] is @deva[विकल्पेन] for @deva[भूतार्थ] in @deva[प्रतिवचन] when @deva[न]/नु is @deva[योगे]. Examples: @deva[न करोमि]/नाकार्षम्; @deva[अहं नु करोमि]/अहं न्वकार्षम्."
        }
    },
    "32122": {
        "en": {
            "simple": "@deva[लुङ्] (Aorist) and @deva[लट्] (Present) **optionally** apply for past time (before today) when @deva[पुरा] 'formerly' is used and @deva[स्म] is **not** present. Examples: @deva[वसन्तीह पुरा छात्राः] (Present) or @deva[अवात्सुः पुरा छात्राः] (Aorist) 'The students lived here formerly'. Imperfect and Perfect also apply: @deva[अवसन्निह पुरा छात्राः]; @deva[ऊषुरिह पुरा छात्राः]. With @deva[स्म]: @ref[3.2.118] applies: @deva[यजति स्म पुरा युधिष्ठिरः].",
            "standard": "@deva[लुङ्] and @deva[लट्] optionally apply for @deva[अनद्यतन] @deva[भूतार्थ] when @deva[पुरा] is used and @deva[स्म] is absent. The @deva[अनद्यतन] @deva[अनुवृत्ति] resumes here by @deva[मण्डूकप्लुति] (frog-leap) over @ref[3.2.120]-@ref[3.2.121]. Examples: @deva[वसन्तीह पुरा छात्राः] (@deva[लट्]); @deva[अवात्सुः पुरा छात्राः] (@deva[लुङ्]); alternatively @deva[अवसन्निह पुरा छात्राः] (@deva[लङ्]); @deva[ऊषुरिह पुरा छात्राः] (@deva[लिट्]). With @deva[स्म]: @ref[3.2.118] applies (@deva[यजति स्म पुरा युधिष्ठिरः]).",
            "advanced": "@deva[लुङ्]/लट् are @deva[विकल्पेन] for @deva[अनद्यतन] @deva[भूतार्थ] with @deva[पुरा], @deva[स्मशून्य]. The @deva[अनद्यतन] @deva[अनुवृत्ति] (stopped at @ref[3.2.120]) resumes via @deva[मण्डूकप्लुति] (skipping intermediate sūtras). Examples: @deva[वसन्तीह पुरा छात्राः] (@deva[लट्]); @deva[अवात्सुः] (@deva[लुङ्]); @deva[अवसन्] (@deva[लङ्]); @deva[ऊषुः] (@deva[लिट्]). With @deva[स्म], @ref[3.2.118] governs: @deva[यजति स्म पुरा युधिष्ठिरः]."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.113-3.2.122")
