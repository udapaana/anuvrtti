# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33161": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) is used when the speaker commands, invites, permits, politely expresses a wish, asks questions, or prays. These six contexts all call for the potential mood.",
            "standard": "@deva[लिङ्] is mandated for six semantic functions: @deva[विधि] (command to subordinate), @deva[निमन्त्रण] (invitation), @deva[आमन्त्रण] (permission), @deva[अधीष्ट] (polite wish-expression), @deva[संप्रश्न] (question), and @deva[प्रार्थना] (prayer). This excludes other tense-affixes for these communicative acts.",
            "advanced": "This sūtra specifies six @deva[अर्थ]-conditions for @deva[लिङ्]: (1) @deva[विधि]—directing subordinates; (2) @deva[निमन्त्रण]—inviting; (3) @deva[आमन्त्रण]—granting leave; (4) @deva[अधीष्ट]—expressing wish politely; (5) @deva[संप्रश्न]—questioning; (6) @deva[प्रार्थना]—entreating. @deva[लिङ्] serves as the modal form for directive and optative speech acts."
        }
    },
    "33162": {
        "en": {
            "simple": "The imperative (@deva[लोट्]) is also used in the same contexts of commanding, inviting, permitting, etc. Example: @deva[कटं तावद् भवान् करोतु] 'please make the mat'.",
            "standard": "@deva[लोट्] (imperative) applies under the same six circumstances from @ref[3.3.161]. Separation from the previous sūtra allows @deva[लोट्]-anuv̥tti in subsequent rules where @deva[लिङ्] doesn't continue. Examples: @deva[कटं भवान् करोतु] 'make the mat'; @deva[ग्रामं भवान् आगच्छतु] 'come to the village'.",
            "advanced": "The separation (@deva[पृथक्करण]) enables @deva[लोट्]-only anuv̥tti in following sūtras. Both @deva[लिङ्] and @deva[लोट्] serve @deva[विध्यादि]-artha, but @deva[लोट्] is more direct/immediate. For @deva[निमन्त्रण/आमन्त्रण]: @deva[अमुत्र भवान् आस्ताम्] (invitation/permission). The imperative complements the optative for directive functions."
        }
    },
    "33163": {
        "en": {
            "simple": "The @deva[कृत्य] affixes (forming words like @deva[करणीय], @deva[कर्तव्य]) and the imperative (@deva[लोट्]) are used for direction, permission, and when the proper time for action has arrived. Example: @deva[भवता कटः करणीयः] 'the mat should be made by you'.",
            "standard": "@deva[कृत्य]-affixes and @deva[लोट्] apply for @deva[प्रैष] (direction), @deva[अतिसर्ग] (permission), and @deva[प्राप्तकाल] (arrival of appropriate time). Examples: @deva[भवता कटः करणीयः/कर्तव्यः/कार्यः] 'the mat is to be made by you'; @deva[ग्रामं गच्छतु] 'let him go to the village'.",
            "advanced": "@deva[प्रैष] = direction; @deva[अतिसर्ग] = permission/license; @deva[प्राप्तकाल] = opportune moment. @deva[च] draws @deva[लोट्] into the sūtra alongside @deva[कृत्य]. @deva[कृत्य]-affixes (@deva[तव्य], @deva[अनीय], @deva[य] etc.) form gerundives: @deva[करणीय], @deva[कर्तव्य], @deva[कार्य]. Both @deva[कृत्य] and @deva[लोट्] serve obligation/propriety meanings."
        }
    },
    "33164": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) along with @deva[कृत्य] and imperative is used when referring to future time by a @deva[मुहूर्त] (48 minutes), or to 'this very moment'. Example: actions to be done within the hour or right now.",
            "standard": "@deva[लिङ्] joins @deva[कृत्य] and @deva[लोट्] for @deva[प्रैष]/etc. when the time reference is @deva[ऊर्ध्वं मुहूर्तात्] (after a muhūrta, ~48 minutes) or @deva[इदानीम्] (right now). The @deva[च] draws @deva[कृत्य] and @deva[लोट्] from @ref[3.3.163]. All three express imminent obligation or permission.",
            "advanced": "For @deva[मुहूर्त]-future or @deva[इदानीम्]-present contexts with @deva[प्रैषादि]-artha, @deva[लिङ्], @deva[कृत्य], and @deva[लोट्] are all available. @deva[मुहूर्त] = 48-minute unit (1/30 of a day). This temporal specification adds @deva[लिङ्] to the options from @ref[3.3.163], creating three-way optionality for near-time obligations."
        }
    },
    "33165": {
        "en": {
            "simple": "When the particle @deva[स्म] is used and the reference is to time after a @deva[मुहूर्त], the imperative (@deva[लोट्]) is used exclusively, superseding the potential and @deva[कृत्य] forms. Example: @deva[ऊर्ध्वं मुहूर्ताद् भवान् कटं करोतु स्म] 'you must make the mat after an hour'.",
            "standard": "With @deva[स्म]-particle and @deva[मुहूर्त]-future reference, @deva[लोट्] alone is used, superseding @deva[लिङ्] and @deva[कृत्य]. Examples: @deva[ऊर्ध्वं मुहूर्ताद् भवान् कटं करोतु स्म] 'make the mat after a muhūrta'; @deva[ग्रामं गच्छतु स्म] 'let him go to the village'.",
            "advanced": "@deva[स्म]-upapada with @deva[मुहूर्त]-future triggers @deva[लोट्] exclusively—@deva[लिङ्]-@deva[कृत्य]-प्रतिषेध. The @deva[स्म] particle adds emphatic or assertive force. For @deva[प्रैषादि]-contexts with @deva[स्म] + @deva[ऊर्ध्वं मुहूर्तात्], only imperative applies, not optative or gerundive forms."
        }
    },
    "33166": {
        "en": {
            "simple": "When polite wish (@deva[अधीष्ट]) is expressed along with @deva[स्म], the imperative (@deva[लोट्]) is used, superseding the potential. Example: @deva[अङ्ग स्म राजन् माणवकमध्यापय] 'O King, I wish that you teach the boy'.",
            "standard": "@deva[स्म] continues from @ref[3.3.165]. For @deva[अधीष्ट] (polite wish, explained in @ref[3.3.161]) with @deva[स्म], @deva[लोट्] supersedes @deva[लिङ्]. Examples: @deva[अङ्ग स्म राजन् माणवकमध्यापय] 'O King, please teach the boy'; @deva[अङ्ग स्म राजन्नग्निहोत्रं जुहुधि] 'O King, please perform the Agnihotra'.",
            "advanced": "@deva[स्म] continues in anuv̥tti; @deva[अधीष्ट] (reverential request per @ref[3.3.161]) is specified. With @deva[अधीष्ट] + @deva[स्म], @deva[लोट्] replaces @deva[लिङ्]. The @deva[अङ्ग] particle adds affectionate/reverential address. This creates a formal imperative for polite wish-expression."
        }
    },
    "33167": {
        "en": {
            "simple": "The infinitive @deva[तुमुन्] is used when words meaning 'time'—@deva[काल], @deva[समय], @deva[वेला]—are in composition. Examples: @deva[कालो भोक्तुम्] 'time to eat'; @deva[समयः स्नातुम्] 'time to bathe'.",
            "standard": "With @deva[काल], @deva[समय], or @deva[वेला] (all meaning 'time') as upapadas, @deva[तुमुन्] (infinitive) is used. Examples: @deva[कालो भोक्तुम्] 'time to eat'; @deva[समयः खलु स्नानभोजने सेवितुम्] 'it is indeed time to bathe and eat'; @deva[अवसरोऽयमात्मानं प्रकाशयितुम्] 'this is the time to reveal oneself'.",
            "advanced": "Time-denoting upapadas (@deva[काल], @deva[समय], @deva[वेला], and synonyms like @deva[अवसर]) trigger @deva[तुमुन्]. This is @deva[कृत्]-formation for purpose/occasion expressions. Why these three specifically? They represent formal time-designations; colloquial synonyms may require different treatment per usage."
        }
    },
    "33168": {
        "en": {
            "simple": "When @deva[यत्] is in composition along with @deva[काल], @deva[समय], or @deva[वेला], the potential (@deva[लिङ्]) is used instead of the infinitive. Example: @deva[कालो यद् भवान् भुञ्जीत] 'it is time that you should eat'.",
            "standard": "With @deva[यत्] + @deva[काल/समय/वेला], @deva[लिङ्] is mandated, superseding @deva[तुमुन्] from @ref[3.3.167]. Examples: @deva[कालः/समयः/वेला यद् भवान् भुञ्जीत] 'it is time that your honor should take meals'. The @deva[यत्]-clause creates a subordinate structure requiring finite @deva[लिङ्].",
            "advanced": "@deva[यत्]-upapada with time-words triggers @deva[लिङ्], an @deva[अपवाद] to @ref[3.3.167]'s @deva[तुमुन्]. The @deva[यत्]-clause introduces subordination: @deva[कालो यद् भुञ्जीत] 'time that (one) should eat'. @deva[लिङ्] provides the finite verb form required in @deva[यत्]-headed complement clauses."
        }
    },
    "33169": {
        "en": {
            "simple": "The @deva[कृत्य] affixes and @deva[तृच्] (forming agent nouns like @deva[वोढृ]) are used when fitness or suitability regarding the agent is implied, along with the potential (@deva[लिङ्]). Example: @deva[भवान् खलु कन्यां वहेत्] 'you indeed should marry the girl'.",
            "standard": "For @deva[कर्तृ-साधुकार] (agent's fitness/propriety), @deva[कृत्य], @deva[तृच्], and @deva[लिङ्] (drawn by @deva[च]) are used. Examples: @deva[भवता कन्या वोढव्या/वाह्या/वहनीया] (kṛtya forms); @deva[भवान् कन्यया वोढा] (tṛc); @deva[भवान् कन्यां वहेत्] (liṅ) 'your honor should/is fit to marry the girl'.",
            "advanced": "@deva[कर्तृसाधुकार] = agent's suitability/propriety for action. @deva[कृत्य]-affixes form gerundives (@deva[वोढव्य], @deva[वाह्य], @deva[वहनीय]); @deva[तृच्] forms agent nouns (@deva[वोढृ] → @deva[वोढा]); @deva[लिङ्] provides optative (@deva[वहेत्]). All three express 'X is fit/proper to do Y'—obligation from agent's status."
        }
    },
    "33170": {
        "en": {
            "simple": "The affix @deva[णिनि] (forming words like @deva[कारिन्]) is used for agent nouns when there is necessity, obligation, or indebtedness connected with the action. Examples: @deva[अवश्यंकारी] 'one who must do', @deva[शतं दायी] 'one who ought to give a hundred'.",
            "standard": "@deva[णिनि] (producing @deva[इन्]-ending agent nouns) is used when the agent has @deva[अवश्य] (necessity), @deva[ऋण] (debt), or obligation regarding the action. Compounding occurs by @ref[2.1.72]. Examples: @deva[अवश्यंकारी] 'one bound to do'; @deva[शतं दायी] 'one obligated to give a hundred'; @deva[निष्कं दायी] 'obligated to give a niṣka'.",
            "advanced": "@deva[णिनि] produces @deva[इन्]-stem agent nouns. When @deva[अवश्यम्], debt (@deva[ऋण]), or obligation attaches to the @deva[कर्तृ], @deva[णिनि] applies. Compounding per @ref[2.1.72] (@deva[मयूरव्यंसकादि]). Examples: @deva[अवश्यम् + कृ + णिनि = अवश्यंकारिन्] → @deva[अवश्यंकारी]; @deva[शतं दायी] (obligation to give 100). The affix marks obligated agency."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.161-3.3.170")
