# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33131": {
        "en": {
            "simple": "Affixes used for present tense may optionally also be used for past or future time that is not remote from the present. This allows present-tense forms to describe events in the near past or near future.",
            "standard": "The affixes denoting present time (@deva[लट्]) may optionally express past or future events when that time is close to the present (@deva[सामीप्य]). The term @deva[सामीप्य] derives from @deva[समीप] + @deva[ष्यञ्], indicating proximity. This reflects the principle that tense distinctions can be blurred for events temporally near.",
            "advanced": "Present-tense lakāras may optionally (@deva[वा]) denote @deva[भूत] or @deva[भविष्यत्] when @deva[सामीप्य] (temporal proximity) applies. The @deva[ष्यञ्]-derivation (@deva[समीप] → @deva[सामीप्य]) is noted as @deva[स्वरूपविधि] (self-descriptive). This optionality applies when past/future events are perceived as contiguous with the present moment."
        }
    },
    "33132": {
        "en": {
            "simple": "Affixes for past or present tense may optionally be used to express future time when hope or expectation is expressed. For example, past-tense forms can indicate a hoped-for future outcome.",
            "standard": "When @deva[आशंसा] (hope, expectation of obtaining something not yet possessed) is expressed, past or present tense affixes may optionally denote future time. The restriction of 'near the present' does not apply here. The word @deva[च] draws both past and present into the rule.",
            "advanced": "@deva[आशंसा] is the wish for an unattained object, inherently future-oriented. The @deva[च] indicates @deva[भूतवर्तमान]-lakāras apply to @deva[भविष्यत्] when hope is expressed. The @deva[सामीप्य]-condition from @ref[3.3.131] does not carry over. This allows @deva[लङ्], @deva[लट्] etc. to convey @deva[भविष्यत्]-artha under @deva[आशंसा]."
        }
    },
    "33133": {
        "en": {
            "simple": "When the word @deva[क्षिप्र] 'quickly' (or a synonym) accompanies the verb and hope is expressed conditionally, the second future (@deva[लृट्]) must be used. Example: @deva[उपाध्यायश्चेत्क्षिप्रमागमिष्यति] 'if the teacher comes quickly... we will study grammar'.",
            "standard": "This supersedes @ref[3.3.132] (which allows aorist). When @deva[क्षिप्र] or synonyms denoting quickness are in construction with conditional hope (@deva[आशंसा]), only @deva[लृट्] (second future) is used. Example: @deva[उपाध्यायश्चेत्क्षिप्रमागमिष्यति क्षिप्रं व्याकरणमध्येष्यामहे] 'if the teacher comes quickly, we will soon study grammar'.",
            "advanced": "This is an @deva[अपवाद] to @ref[3.3.132]. When @deva[क्षिप्र] or @deva[तत्पर्याय] (synonyms like @deva[आशु], @deva[तूर्णम्]) accompanies @deva[आशंसा] in a conditional (@deva[चेद्]-clause), @deva[लृट्] alone is mandated, excluding @deva[लुङ्] otherwise permitted. The @deva[क्षिप्र]-upapada triggers this specific future formation."
        }
    },
    "33134": {
        "en": {
            "simple": "When the upapada itself expresses hope, the potential mood (@deva[लिङ्]) is used to denote future action. Example: @deva[उपाध्यायश्चेदागच्छेत्] 'if the teacher should come...'.",
            "standard": "This is an exception to @ref[3.3.132], mandating potential (@deva[लिङ्]) when the upapada expresses hope. Example: @deva[उपाध्यायश्चेदागच्छेद् आशंसेयुक्तोऽधीयीय] 'if the teacher should come, I hope you will study diligently'. Being a subsequent rule, it applies even with 'quickness' words, superseding @ref[3.3.133].",
            "advanced": "As an @deva[अपवाद] to @ref[3.3.132], when @deva[आशंसा]-artha resides in the upapada itself (not the verb), @deva[लिङ्] denotes @deva[भविष्यत्]. Being @deva[परसूत्र], it overrides even @ref[3.3.133] with @deva[क्षिप्र]: @deva[क्षिप्रमागच्छेत्] is valid. The potential conveys optative-future sense in hopeful contexts."
        }
    },
    "33135": {
        "en": {
            "simple": "When continuous action or time very close to the present is meant, the aorist (@deva[लुङ्]) and first future (@deva[लुट्]) are used instead of imperfect (@deva[लङ्]) and second future (@deva[लृट्]) respectively.",
            "standard": "For @deva[सातत्य] (continuous action) or @deva[सामीप्य] (near past/future), @deva[लुङ्] replaces @deva[लङ्] (imperfect) and @deva[लुट्] replaces @deva[लृट्] (second future). This overrides @ref[3.2.111] (@deva[अनद्यतने लङ्]) and @ref[3.3.15] (@deva[अनद्यतने लुट्]). The phrase @deva[नानद्यतनवत्] means 'not as in the anadyatana rules'.",
            "advanced": "@deva[लङ्] and @deva[लुट्] prescribed for @deva[अनद्यतन] (non-current-day) time in @ref[3.2.111] and @ref[3.3.15] are replaced by @deva[लुङ्] and @deva[लुट्] respectively when @deva[सातत्य] (action continuity) or @deva[सामीप्य] (temporal immediacy) is conveyed. The rule @deva[नानद्यतनवत्] negates the standard @deva[अनद्यतन] distribution."
        }
    },
    "33136": {
        "en": {
            "simple": "When speaking of a spatial limit 'on this side' (@deva[अवर]) of another place, the first future (@deva[लुट्]) is used instead of the second future. Example: stating that food will be eaten before reaching Pāṭaliputra, at the nearer point of Kauśāmbī.",
            "standard": "When @deva[अवर] (this side, nearer) indicates a spatial limit, @deva[लुट्] is used instead of @deva[लृट्] for non-current-day future. The 'continuity' and 'immediacy' conditions of @ref[3.3.135] do not apply. Example: @deva[योऽयमध्वागन्तव्य आपाटलिपुत्रात्तस्य यदवरं कौशाम्ब्यास्तत्रोदनं भोक्तास्मि] 'on this road to Pāṭaliputra, at the nearer point from Kauśāmbī, I will eat rice'.",
            "advanced": "This extends @deva[नानद्यतनवत्] from @ref[3.3.135]. When @deva[अवर] denotes spatial limit (@deva[देशावधि])—'on the hither side'—@deva[लुट्] replaces @deva[लृट्] for @deva[अनद्यतन भविष्यत्]. The @deva[सातत्य/सामीप्य] conditions don't apply; the spatial @deva[अवधि] alone triggers the substitution."
        }
    },
    "33137": {
        "en": {
            "simple": "The second future (@deva[लृट्]) is used instead of the first future when @deva[अवर] (this side) refers to a time division, but not when that division means 'day' or 'night'.",
            "standard": "When @deva[अवर] indicates a time limit (@deva[कालावधि]) combined with a time-division word (excluding 'day' or 'night'), @deva[लृट्] is used for non-current-day future instead of @deva[लुट्]. This differs from @ref[3.3.136] which covers both space and time; this sūtra addresses only temporal limits with specific exclusions.",
            "advanced": "Unlike @ref[3.3.136] (covering @deva[देशकालावधि]), this addresses @deva[कालावधि] alone. When @deva[अवर] + @deva[कालभाग] (time-portion word, excluding @deva[अहन्] and @deva[रात्रि]) expresses the temporal limit, @deva[लृट्] (not @deva[लुट्]) applies. The @deva[अहोरात्र]-exclusion creates a specific domain for this second-future usage."
        }
    },
    "33138": {
        "en": {
            "simple": "When a statement involves the word @deva[पर] (that side, further) indicating a time limit, both the first and second futures may optionally be used.",
            "standard": "When @deva[पर] (the far side of a limit) is used for a time division (excluding day/night), both @deva[लुट्] and @deva[लृट्] are optionally permitted for non-current-day future. This extends the previous rule: @deva[पर] allows optionality where @deva[अवर] mandated @deva[लृट्].",
            "advanced": "The full @ref[3.3.137] context applies with @deva[पर] replacing @deva[अवर]. For @deva[पर] + @deva[कालभाग] (excluding @deva[अहोरात्र]), @deva[विकल्प] arises between @deva[लुट्] and @deva[लृट्] for @deva[अनद्यतन भविष्यत्]. The @deva[पर]-specification creates optionality versus the @deva[अवर]-mandated @deva[लृट्] of @ref[3.3.137]."
        }
    },
    "33139": {
        "en": {
            "simple": "When there is a reason for using the benedictive (@deva[लिङ्]) but the action is understood as not completed, the conditional (@deva[लृङ्]) is used for future tense. This expresses 'if X had happened, Y would happen'.",
            "standard": "When conditions for @deva[लिङ्] (as in @ref[3.3.156]-@ref[3.3.157] for cause-effect relations) exist but non-completion (@deva[अनिष्पत्ति]) of the action is implied, @deva[लृङ्] (conditional) is used for future sense. The conditional expresses hypothetical situations where the action did not or will not occur.",
            "advanced": "When @deva[लिङ्]-nimittas (per @ref[3.3.156]ff—@deva[हेतुहेतुमद्भाव] etc.) apply but @deva[क्रियातिपत्ति] (non-realization of action) is intended, @deva[लृङ्] (conditional mood) replaces @deva[लिङ्] in @deva[भविष्यत्]-artha. @deva[लृङ्] conveys counterfactual or unfulfilled conditions: 'if X were to happen (but won't/didn't)...'."
        }
    },
    "33140": {
        "en": {
            "simple": "The conditional (@deva[लृङ्]) is also used when the sense is past tense and the action was not completed. This expresses 'if X had happened (but didn't), Y would have happened'.",
            "standard": "Extending @ref[3.3.139], @deva[लृङ्] (conditional) is also used for past tense when non-completion of action is implied. The conditional has both past and future significations. Example: @deva[यद्यभविष्यत्] 'if it had happened (but it didn't)'—expressing unfulfilled past conditions.",
            "advanced": "The @ref[3.3.139] extends to @deva[भूतकाल]: @deva[लृङ्] applies for @deva[लिङ्]-nimittas with @deva[क्रियातिपत्ति] in past sense. @deva[लृङ्] thus covers both @deva[भविष्यत्] (@ref[3.3.139]) and @deva[भूत] (this sūtra) counterfactuals. The conditional expresses @deva[अनिष्पन्न]-kriyā: what would have been but wasn't, or would be but won't."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.131-3.3.140")
