# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33001": {
        "en": {
            "simple": "The @deva[उणादि] affixes (beginning with @deva[उण्]) are applied in present-tense, appellative sense, but their application is diverse—they don't follow strict rules. Example: @deva[कृ] + @deva[उण्] → @deva[कारुः] 'artisan'; @deva[वायुः] 'wind'; @deva[साधुः] 'virtuous one'.",
            "standard": "This @deva[सूत्र] introduces the @deva[उणादि] affixes—a special set not enumerated by Pāṇini but collected separately. They apply with @deva[वर्तमान] (present) sense and @deva[संज्ञा] (appellative) meaning, but @deva[बहुलम्] 'diversely' signals irregular application. The affix @deva[उण्] comes after @deva[कृ], @deva[वा], @deva[पा], @deva[जि], @deva[मि], @deva[स्वद्], @deva[साध्], @deva[अश्]: thus @deva[कारुः] 'artisan', @deva[वायुः] 'wind', @deva[पायुः] 'anus', @deva[स्वादुः] 'sweet', @deva[साधुः] 'virtuous', @deva[आशुः] 'swift'.",
            "advanced": "The @deva[उणादि] affixes constitute a supplementary system outside the main @deva[अष्टाध्यायी]. The @deva[अनुवृत्ति] of @deva[वर्तमाने] (from @ref[3.2.123]) and @deva[संज्ञायाम्] (from @ref[3.2.185]) applies. The term @deva[बहुलम्] indicates: (1) affixes apply to roots beyond those explicitly listed; (2) some applications must be inferred from attested forms; (3) the operations are @deva[सशेष] (not exhaustively specified). The Śākaṭāyana school held all nouns are @deva[धातुज] (root-derived), so unanalyzable words require inferring appropriate @deva[प्रकृति] and @deva[प्रत्यय]."
        }
    },
    "33002": {
        "en": {
            "simple": "The @deva[उणादि] affixes can also have past-tense meaning in certain words. Examples: @deva[वर्त्मन्] 'road' (what was established); @deva[चर्मन्] 'skin' (what was lived in); @deva[भस्मन्] 'ashes' (what was burnt).",
            "standard": "While @ref[3.3.1] establishes present-tense meaning for @deva[उणादि] affixes, this @deva[सूत्र] notes that past-tense meaning is also 'seen' (@deva[दृश्यते]) in specific cases. The phrase @deva[दृश्यते] indicates no general rule—we infer past meaning from attested usage. Examples with @deva[मनिन्]: @deva[वृत्] → @deva[वर्त्मन्] 'road'; @deva[चर्] → @deva[चर्मन्] 'skin'; @deva[भस्मन्] 'ashes'.",
            "advanced": "The word @deva[दृश्यते] 'is seen' signals empirical observation rather than prescriptive rule. Past-tense @deva[उणादि] formations are attested but cannot be systematically predicted. The affix @deva[मनिन्] (leaving @deva[मन्] after @deva[इत्]-deletion) appears in the cited examples. The semantic logic: @deva[वर्त्मन्] 'that which has been established as a path'; @deva[चर्मन्] 'that in which life was lived' (the body's covering); @deva[भस्मन्] 'that which has been reduced to ash'."
        }
    },
    "33003": {
        "en": {
            "simple": "Words like @deva[गामि] have future-tense meaning. Examples: @deva[गामी ग्रामम्] 'intending to go to the village'; @deva[आगामी] 'that which will come'; @deva[भावी] 'what will be'.",
            "standard": "This @deva[सूत्र] extends @deva[उणादि] application to future sense for the @deva[गामि]-class words. Examples: @deva[गामी] 'one about to go', @deva[आगामी] 'forthcoming', @deva[प्रस्थायी] 'about to depart', @deva[प्रतिरोधी] 'one who will obstruct', @deva[भावी] 'what will happen'. A @deva[वार्तिक] specifies this must be @deva[अनद्यतन] future (not today)—corresponding to @deva[लुट्] (first future), not @deva[लृट्] (second future).",
            "advanced": "The @deva[गाम्यादि] class takes @deva[उणादि] affixes with @deva[भविष्यत्] (future) meaning. The @deva[वार्तिक] restriction to @deva[अनद्यतन] (non-today) future aligns these forms with @deva[लुट्] rather than @deva[लृट्]. Thus @deva[श्वो गामी ग्रामम्] 'he will go to the village tomorrow' is valid, but same-day future would require different forms. Listed examples: @deva[गामी], @deva[आगामी], @deva[प्रस्थायी], @deva[प्रतिरोधी], @deva[प्रतिबोधी], @deva[प्रतियोधी], @deva[प्रतियोगी], @deva[प्रतियायी], @deva[आयायी], @deva[भावी]."
        }
    },
    "33004": {
        "en": {
            "simple": "The present tense (@deva[लट्]) can express future meaning when used with @deva[यावत्] or @deva[पुरा]. Example: @deva[यावत् प्रेषयामि] 'I shall send' (lit. 'as long as I send').",
            "standard": "When the particles @deva[यावत्] 'as long as' or @deva[पुरा] 'before' are in construction with a verb, the present tense @deva[लट्] may express future meaning. Examples: @deva[आलोके ते निपतति पुरा] 'he will surely fall in your sight'; @deva[यावद् शत्रुघ्नं प्रेषयामि] 'I shall send Śatrughna'. These words must function as adverbs (@deva[निपात]), not as relative pronouns or nouns.",
            "advanced": "The @deva[अनुवृत्ति] of @deva[भविष्यत्] continues from @ref[3.3.3]. The restriction requires @deva[यावत्] and @deva[पुरा] to function as @deva[निपात] (particles), not as @deva[सर्वनाम] or other parts of speech. Counter-examples: @deva[यावद् दास्यति तावद् भोक्ष्यते] 'as long as he gives, so long he will eat' (here @deva[यावत्] is correlative); @deva[पुरा व्रजिष्यति] 'he goes along the city' (here @deva[पुरा] is instrumental of @deva[पुर्] 'city'). In such cases, @deva[लट्] cannot substitute for future."
        }
    },
    "33005": {
        "en": {
            "simple": "The present tense @deva[लट्] may optionally express future meaning with @deva[कदा] 'when?' or @deva[कर्हि] 'at what time?'. Example: @deva[कदा भुङ्क्ते] or @deva[कदा भोक्ष्यते] 'when will he eat?'",
            "standard": "When the interrogative adverbs @deva[कदा] 'when' or @deva[कर्हि] 'at what time' are used, @deva[लट्] may optionally replace future tenses. Thus @deva[कदा भुङ्क्ते] (present), @deva[कदा भोक्ष्यते] (@deva[लृट्]), or @deva[कदा भोक्ता] (@deva[लुट्]) are all valid for 'when will he eat?' The option (@deva[वा]) allows either present or future forms.",
            "advanced": "This @deva[सूत्र] extends the @deva[लट्]-for-future substitution to interrogative temporal contexts. Both @deva[कदा] and @deva[कर्हि] trigger optional application. The three alternatives shown—@deva[भुङ्क्ते] (present), @deva[भोक्ष्यते] (@deva[लृट्], second future), @deva[भोक्ता] (@deva[लुट्], first future)—demonstrate that the option is between @deva[लट्] and either future tense, not a three-way choice of equal status."
        }
    },
    "33006": {
        "en": {
            "simple": "When @deva[किम्] 'what/who' or its derivatives appear, and the speaker desires to gain something, the present tense may optionally express future meaning. Example: @deva[कं भवन्तो भोजयन्ति] 'whom will you feed?' (implying: 'please feed me too').",
            "standard": "When @deva[किम्] or its derivatives (@deva[कतर], @deva[कतम]) are in construction with a verb, and the speaker has @deva[लिप्सा] (desire to gain/acquire), @deva[लट्] may optionally express future. Example: @deva[कं भवन्तो भोजयन्ति] or @deva[भोजयितारः] 'whom will you feed?' implies a request. Without @deva[लिप्सा], future tense is required: @deva[कः पाटलीपुत्रं गमिष्यति] 'who will go to Pāṭaliputra?'",
            "advanced": "The term @deva[वृत्त] with @deva[किम्] extends the rule to derivatives formed with @deva[डतर] and @deva[डतम] (@deva[कतर] 'which of two', @deva[कतम] 'which of many'). The semantic condition @deva[लिप्सा] 'desire to obtain' distinguishes begging/requesting contexts from neutral interrogatives. The examples @deva[कतरो भिक्षां ददाति/दास्यति/दाता] 'which one gives/will give alms?' illustrate the optional nature when @deva[लिप्सा] is present."
        }
    },
    "33007": {
        "en": {
            "simple": "When the sentence indicates that success will come to another by fulfilling the speaker's desire, present tense may optionally express future meaning. Example: @deva[यो भक्तं ददाति स स्वर्गं गच्छति] 'he who gives food goes to heaven'.",
            "standard": "When @deva[लिप्स्यमानसिद्धि] (success accruing to another from fulfilling the speaker's desire) is indicated, @deva[लट्] may optionally express future. The term is an ablative @deva[तत्पुरुष]: @deva[लिप्स्यमानात् सिद्धि] 'success from what is desired'. Example: @deva[यो भक्तं ददाति स स्वर्गं गच्छति] 'who gives food goes to heaven'—the speaker desires food, and promises heaven as the giver's reward.",
            "advanced": "This differs from @ref[3.3.6] in not requiring @deva[किम्] in the sentence. The conditional structure 'if X, then Y' allows @deva[लट्] when Y represents @deva[सिद्धि] (success/reward) for the agent of X. The speaker's @deva[लिप्सा] (desire for food) motivates the statement; the @deva[सिद्धि] (heaven) accrues to the giver. Alternative: @deva[यो भक्तं दास्यति स स्वर्गं गमिष्यति] with explicit futures. This usage corresponds to conditional sentences promising compensation for granting a wish."
        }
    },
    "33008": {
        "en": {
            "simple": "The present tense @deva[लट्] may optionally express future meaning when one action serves as a condition for another action expressed in the imperative. Example: @deva[उपाध्यायश्चेदागच्छति अथ त्वं छन्दोऽधीष्व] 'if the teacher comes, then read prosody'.",
            "standard": "When a verb's action is the @deva[लक्षण] (condition/sign) for another action expressed in @deva[लोट्] (imperative), @deva[लट्] may optionally express future. The term @deva[लोडर्थ] means 'having imperative sense'. Example: @deva[उपाध्यायश्चेदागच्छति] (or @deva[आगमिष्यति/आगन्ता]) @deva[अथ त्वं छन्दोऽधीष्व] 'if the professor comes (will come), then you read prosody'. The teacher's coming is the @deva[लक्षण] for the command to read.",
            "advanced": "The technical structure: one verb (the condition) stands in @deva[लक्षण] relation to another verb in @deva[लोट्] (the @deva[लक्ष्य], thing signified/commanded). The @deva[लक्षण-लक्ष्य] relationship is that of sign to signified—the conditional action signals when the commanded action should occur. The @deva[वा] 'optionally' allows @deva[लट्], @deva[लृट्], or @deva[लुट्] in the conditional clause while the main clause remains in @deva[लोट्]."
        }
    },
    "33009": {
        "en": {
            "simple": "When the future time is more than a @deva[मुहूर्त] (48 minutes) away, either @deva[लट्] (present) or @deva[लिङ्] (potential) may be used under the same conditions as above. Example: @deva[उपाध्यायश्चेदागच्छेत्] 'if the teacher should come (after an hour)'.",
            "standard": "Under the conditions of @ref[3.3.8] (action as condition for an imperative), when the future is @deva[ऊर्ध्वमौहूर्तिक] (beyond one @deva[मुहूर्त], i.e., more than 48 minutes away), either @deva[लट्] or @deva[लिङ्] (potential/optative) may be used. The @deva[च] 'and' carries forward @deva[लट्] from the previous @deva[सूत्र]. Example: @deva[उपाध्यायश्चेदागच्छेत्] (@deva[लिङ्]) or @deva[आगच्छति] (@deva[लट्]) @deva[अथ त्वं छन्दोऽधीष्व].",
            "advanced": "The compound @deva[ऊर्ध्वमौहूर्तिक] derives irregularly from @deva[ऊर्ध्व-मुहूर्त], with @deva[वृद्धि] of @deva[उ] in @deva[मु] (not the initial @deva[ऊ] as expected). It means 'pertaining to time beyond one @deva[मुहूर्त]'. The addition of @deva[लिङ्] to @deva[लट्] provides a hypothetical/potential nuance appropriate for more distant future events. All conditions from @ref[3.3.8] apply: the @deva[लक्षण-लक्ष्य] relationship and @deva[लोट्] in the main clause."
        }
    },
    "33010": {
        "en": {
            "simple": "The affixes @deva[तुमुन्] and @deva[ण्वुल्] are added with future meaning when the main verb expresses an action done for the purpose of the infinitive action. Example: @deva[भोक्तुं व्रजति] 'he goes to eat'; @deva[भोजको व्रजति] 'he goes (as) an eater'.",
            "standard": "After a root, @deva[तुमुन्] and @deva[ण्वुल्] are used with future sense when the @deva[उपपद] (accompanying verb) denotes action performed @deva[क्रियार्थ] (for the sake of the future action). Examples: @deva[भोक्तुं व्रजति] 'he goes to eat'; @deva[भोजको व्रजति] 'he goes as one who will eat'. The @deva[उपपद] must be a verb denoting purposive action, not a noun.",
            "advanced": "Though @deva[ण्वुल्] was already taught in @ref[3.1.133], its repetition here serves to block @deva[वाऽसरूप] (@ref[3.1.94])—the principle allowing similar affixes to substitute. Thus @deva[तृच्] cannot replace @deva[ण्वुल्] here: @deva[*कर्ता व्रजति] is invalid; only @deva[कर्तुं व्रजति] or @deva[कारको व्रजति] work. Counter-examples: @deva[भिक्षिष्ये इति अस्य जटाः] 'his matted hair is for begging' (noun @deva[उपपद], rule doesn't apply); @deva[धावतस्ते पतिष्यति दण्डः] 'your stick will fall while running' (not purposive action)."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.1-3.3.10")
