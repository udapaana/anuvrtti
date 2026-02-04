# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33171": {
        "en": {
            "simple": "The @deva[कृत्य] affixes are also used when expressing necessity or obligation. Examples: @deva[भवता अवश्यं कटः कर्तव्यः/करणीयः/कार्यः] 'you ought to make the mat'; @deva[भवता शतं दातव्यं/देयम्] 'you ought to pay a hundred'.",
            "standard": "@deva[कृत्य]-affixes apply for @deva[अवश्य] (necessity/obligation). Though @deva[कृत्य]-affixes are general and would seem to apply anyway, this explicit statement prevents @deva[णिनि] (from @ref[3.3.170]) from being the exclusive affix for obligation. Examples: @deva[कर्तव्य], @deva[करणीय], @deva[कार्य], @deva[कृत्य] for 'must/ought to do'.",
            "advanced": "Why this sūtra when @deva[कृत्य] is @deva[सामान्य] (general)? To prevent @deva[बाध] (supersession) by @deva[णिनि] from @ref[3.3.170] for @deva[अवश्यार्थ]. Without this, @deva[णिनि] as @deva[विशेष] might exclude @deva[कृत्य]. This @deva[पृथक्-विधान] establishes @deva[कृत्य] as @deva[विकल्प] with @deva[णिनि] for necessity/obligation expressions."
        }
    },
    "33172": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) as well as @deva[कृत्य] affixes are used when the sense is capability or ability. Example: @deva[भवता भारो वोढव्यः] or @deva[भवान् भारं वहेत्] 'you can carry the load'.",
            "standard": "@deva[लिङ्] and @deva[कृत्य] apply when @deva[शक्ति] (capability) is expressed—the root itself conveys ability. Examples: @deva[भवता भारो वोढव्यः/वहनीयः/वाह्यः] (kṛtya) or @deva[भवान् भारं वहेत्] (liṅ) 'you are capable of carrying the load'. This mention prevents @deva[णिनि] from excluding @deva[कृत्य].",
            "advanced": "@deva[शक्ति]-artha resides in the @deva[धातु] itself (inherent capability). @deva[कृत्य] is general, but explicit mention prevents @deva[णिनि]-बाध. The @deva[च] draws @deva[कृत्य] from @ref[3.3.171]. @deva[लिङ्] + @deva[कृत्य] both express potential/ability: gerundive (@deva[वोढव्य]) or optative (@deva[वहेत्])."
        }
    },
    "33173": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) and imperative (@deva[लोट्]) are used for benedictions (blessings). The @deva[लिङ्] here is specifically the benedictive (@deva[आशीर्लिङ्]). Example: @deva[चिरं जीव्याद् भवान्] or @deva[चिरं जीवतु भवान्] 'may you live long!'",
            "standard": "For @deva[आशीस्] (benediction, expression of good wishes), @deva[लिङ्] and @deva[लोट्] are used. The @deva[लिङ्] here is @deva[आशीर्लिङ्] (benedictive), conjugated differently from ordinary @deva[विधिलिङ्] (potential/optative). Examples: @deva[चिरं जीव्यात् भवान्] (āśīrliṅ) or @deva[चिरं जीवतु भवान्] (loṭ) 'may you live long!'",
            "advanced": "@deva[आशीस्] = wish for desired object, blessing. @deva[लिङ्] here is @deva[आशीर्लिङ्]—distinct conjugation from @deva[विधिलिङ्]. @deva[आशीर्लिङ्] uses @deva[यासुट्] augment: @deva[जीव् + लिङ् = जीव्यात्]. @deva[लोट्] alternative: @deva[जीवतु]. Both express optative blessing. Not @deva[आशीस्]? Then context-appropriate lakāra applies."
        }
    },
    "33174": {
        "en": {
            "simple": "The affixes @deva[क्तिच्] and @deva[क्त] are used after a root when benediction is intended and the resulting word is an appellative (proper name or designation). Examples: @deva[तन्तिः] 'weaver' (may he weave!), @deva[भूतिः] 'success' (may it be!), @deva[भूतः] 'a name'.",
            "standard": "@deva[क्तिच्] and @deva[क्त] form appellatives (@deva[संज्ञा]) with benedictive sense—the action is the object of someone's prayer/wish. Examples: @deva[तन्तिः] = @deva[तनुतात्] 'weaver' (may he weave); @deva[भूतिः] = @deva[भवतात्] 'success, prosperity'; @deva[सातिः] = @deva[सनुतात्] 'wealth, gift'. @deva[क्त]: @deva[भूतः] as a name.",
            "advanced": "@deva[क्तिच्] (→ @deva[ति]) and @deva[क्त] (→ @deva[त]) form @deva[आशीर्-अर्थक] appellatives. The derived word names something whose action is prayed for: @deva[तन्तिः] 'may he weave!' → 'weaver'; @deva[भूतिः] 'may it be!' → 'prosperity'. @deva[संज्ञा]-restriction means these forms are lexicalized names/designations, not productive benedictives."
        }
    },
    "33175": {
        "en": {
            "simple": "The aorist (@deva[लुङ्]) is used when the prohibitive particle @deva[माङ्] (with indicatory @deva[ङ्]) is used. This sets aside all other tenses. Examples: @deva[मा कार्षीत्] 'let him not do', @deva[मा हार्षीत्] 'let him not take'.",
            "standard": "@deva[माङ्] (the @deva[मा] with indicatory @deva[ङ्]) requires @deva[लुङ्] (aorist) exclusively, superseding other tenses. Examples: @deva[मा कार्षीत्] 'let him not do'; @deva[मा हार्षीत्] 'let him not take'. Sentences like @deva[मा भवतु] or @deva[मा भविष्यति] use a different @deva[मा] (without @deva[ङ्]) which permits other tenses.",
            "advanced": "@deva[माङ्] (prohibitive, marked with @deva[ङ्] as @deva[इत्]) triggers @deva[लुङ्] exclusively—@deva[सर्वलकार-प्रतिषेध]. Forms like @deva[मा भवतु] (loṭ), @deva[मा भविष्यति] (lṛṭ) use @deva[मा] without @deva[ङ्]-@deva[इत्], a different particle permitting other lakāras. @deva[माङ्] + @deva[लुङ्] = canonical prohibition construction."
        }
    },
    "33176": {
        "en": {
            "simple": "When @deva[मा] is followed by @deva[स्म], both the imperfect (@deva[लङ्]) and aorist (@deva[लुङ्]) may be used. Examples: @deva[मास्म करोत्] or @deva[मास्म कार्षीत्] 'let him not make'; @deva[मास्म हरत्] or @deva[मास्म हार्षीत्] 'let him not take'.",
            "standard": "With @deva[मा] + @deva[स्म] (= @deva[मास्म]), both @deva[लङ्] (imperfect) and @deva[लुङ्] (aorist, drawn by @deva[च]) are permitted. Examples: @deva[मास्म करोत्] (laṅ) or @deva[मास्म कार्षीत्] (luṅ) 'let him not make'. This creates optionality between the two past-tense forms for prohibition.",
            "advanced": "@deva[स्म] joins @deva[माङ्] to form @deva[मास्म]. The @deva[च] draws @deva[लुङ्] from @ref[3.3.175]. With @deva[मास्म], @deva[विकल्प] arises between @deva[लङ्] and @deva[लुङ्]: @deva[मास्म करोत्] (imperfect @deva[लङ्]) ~ @deva[मास्म कार्षीत्] (aorist @deva[लुङ्]). Both convey prohibitive sense with @deva[स्म]-emphasis. This concludes pāda 3.3."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.171-3.3.176 - Pāda 3.3 complete!")
