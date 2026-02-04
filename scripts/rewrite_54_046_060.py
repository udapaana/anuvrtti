#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.4.46-60."""

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
        "54046": {
            "en": {
                "simple": "The affix @deva[तसि] (-तः) is optionally added to an instrumental case (3rd) that is not an agent, when used with verbs meaning 'to excel,' 'not to yield,' or 'to blame.' Examples: @deva[वृत्ततः अतिगृह्यते] = @deva[वृत्तेन अतिगृह्यते] (excels through conduct), @deva[वृत्ततः क्षिप्तः] (blamed for conduct).",
                "standard": "This sūtra prescribes optional @deva[तसि] after a non-agentive instrumental when the governing verbs express excelling (@deva[अतिगृह्य]), not yielding (@deva[न व्यथ्]), or blaming (@deva[क्षिप]). Thus @deva[वृत्तेन अतिगृह्यते] = @deva[वृत्ततः अतिगृह्यते] (surpasses through conduct). Similarly @deva[वृत्ततः न व्यथते] (doesn't waver due to conduct) and @deva[वृत्ततः क्षिप्तः] (blamed for conduct). The condition @deva[अकर्तरि] excludes agentive instrumentals: @deva[देवदत्तेन क्षिप्तः] (blamed by Devadatta) does not take the affix.",
                "advanced": "The three semantic conditions—@deva[अतिशय] (excelling), @deva[अदान] (not giving way/yielding), and @deva[निन्दा] (blame)—define when the non-agentive instrumental can take @deva[तसि]. The restriction @deva[अकर्तरि] is crucial: the instrumental must express cause or means, not the agent performing the action. In @deva[देवदत्तेन क्षिप्तः], Devadatta is the agent of blaming, so @deva[तसि] is blocked."
            }
        },
        "54047": {
            "en": {
                "simple": "The affix @deva[तसि] is optionally added to a non-agentive instrumental when used with the verb @deva[हीय] (passive of @deva[हा]) or the word @deva[पाप] (sinful). Examples: @deva[वृत्ततः हीयते] = @deva[वृत्तेन हीयते] (falls short in conduct), @deva[वृत्ततः पापः] = @deva[वृत्तेन पापः] (sinful regarding conduct).",
                "standard": "This sūtra extends @deva[तसि] to non-agentive instrumentals when connected with @deva[हीय] (passive of @deva[हा], to abandon/fall short) or the adjective @deva[पाप] (sinful). Thus @deva[वृत्तेन हीयते] = @deva[वृत्ततः हीयते] (falls short in conduct), and @deva[वृत्तेन पापः] = @deva[वृत्ततः पापः] (sinful regarding conduct). This applies where no censure is implied—merely stating a fact. Where censure is intended, @ref[5.4.46] applies. The @deva[अकर्तरि] condition continues: @deva[देवदत्तेन हीयते] (abandoned by Devadatta) doesn't take the affix.",
                "advanced": "The distinction from @ref[5.4.46] is semantic: this sūtra applies to neutral statements of fact (@deva[वार्ता]), while the previous sūtra applies when @deva[निन्दा] (censure) is expressed. Both require @deva[अकर्तरि] (non-agentive) and @deva[तृतीया] (instrumental). The word @deva[पाप] as a qualifier takes the instrumental in the same pattern as the verbal constructions."
            }
        },
        "54048": {
            "en": {
                "simple": "The affix @deva[तसि] is optionally added to a genitive case (6th) when expressing party affiliation or taking sides. Example: @deva[देवा अर्जुनतः अभवन्] = @deva[देवा अर्जुनस्य पक्षे अभवन्] (the Devas became Arjunites).",
                "standard": "This sūtra prescribes optional @deva[तसि] after a genitive expressing @deva[व्याश्रय] (party affiliation or taking sides with a faction). Thus @deva[देवा अर्जुनस्य पक्षे अभवन्] = @deva[देवा अर्जुनतः अभवन्] (the Devas became partisans of Arjuna). Similarly @deva[आदित्याः कर्णतः अभवन्] (the Ādityas became Karṇa's supporters). The affix does not apply to ordinary genitives: @deva[वृक्षस्य शाखा] (the branch of the tree) retains the genitive.",
                "advanced": "The term @deva[व्याश्रय] technically means 'taking refuge with' or 'siding with' a faction. The semantic condition requires a context of political or factional allegiance. The genitive here expresses the leader or faction-head whose side is taken. Ordinary possessive or relational genitives like @deva[वृक्षस्य शाखा] do not qualify for this transformation."
            }
        },
        "54049": {
            "en": {
                "simple": "The affix @deva[तसि] is optionally added to a genitive case (6th) denoting a disease when the meaning is 'curing that disease.' Example: @deva[प्रवाहिकातः प्रतीकारं कुरु] = @deva[प्रवाहिकायाः प्रतीकारं कुरु] (make a remedy for dysentery).",
                "standard": "This sūtra prescribes optional @deva[तसि] after a genitive denoting a @deva[रोग] (disease) when @deva[अपनयन] (healing, curing) is meant. Thus @deva[प्रवाहिकायाः प्रतीकारं कुरु] = @deva[प्रवाहिकातः कुरु] (make a remedy for dysentery). Similarly @deva[छर्दिकातः कुरु] (cure the vomiting). The condition requires the sense of healing: @deva[प्रवाहिकायाः प्रकोपनं कुरु] (aggravate the dysentery) does not qualify.",
                "advanced": "The dual conditions—@deva[रोग] (disease) and @deva[अपनयन] (removal/healing)—must both be present. The genitive expresses the disease being treated. When the action is @deva[प्रकोपन] (aggravation) rather than @deva[अपनयन] (curing), the transformation is blocked. This reflects the positive therapeutic context required for the affix."
            }
        },
        "54050": {
            "en": {
                "simple": "The affix @deva[च्वि] is added when something becomes what it was not before, used with verbs @deva[कृ] (make), @deva[भू] (become), or @deva[अस्] (be). Example: @deva[शुक्ली करोति] = makes white (something that was not white becomes white).",
                "standard": "This sūtra teaches @deva[च्वि] when expressing @deva[अभूततद्भाव]—becoming what the thing previously was not. The affix applies when the @deva[सम्पाद्य कर्ता] (the agent that attains the new state) is involved, with verbs @deva[कृ], @deva[भू], or @deva[अस्]. Thus @deva[अशुक्लः शुक्लः सम्पद्यते] → @deva[शुक्ली करोति] (he whitens—makes something that was not white become white). Formation: @deva[शुक्ल] + @deva[च्वि] → @deva[शुक्ली] (by @ref[7.4.32], @deva[अ] → @deva[ई]; by @ref[6.1.67], affix elision). Similarly @deva[घटी करोति मृदम्] (makes clay into a pot).",
                "advanced": "The term @deva[अभूततद्भाव] (attaining a state that was not before) is from the vārttikakāra, incorporated by Kāśikā. The @deva[सम्पाद्य कर्ता] condition specifies that the transformation must apply to the agent of attainment, not other kārakas. Thus @deva[अदेवगृहे देवगृहे भवति] (a tree becoming in a temple where it wasn't) doesn't take @deva[च्वि] because the locative, not the agent, undergoes the 'becoming.' Without expressed object: @deva[शुक्लं करोति] (he makes white) doesn't apply because the transformed entity isn't specified."
            }
        },
        "54051": {
            "en": {
                "simple": "The affix @deva[च्वि] is added to @deva[अरुस्], @deva[मनस्], @deva[चक्षुस्], @deva[चेतस्], @deva[रहस्], and @deva[रजस्], with elision of their final consonant. Examples: @deva[अरू करोति] (makes into a wound), @deva[उन्मनी करोति] (makes distracted), @deva[विरजी भवति] (becomes dustless).",
                "standard": "This sūtra specifically lists six words that take @deva[च्वि] with elision of the final consonant before the affix. The words are: @deva[अरुस्] (wound), @deva[मनस्] (mind), @deva[चक्षुस्] (eye), @deva[चेतस्] (consciousness), @deva[रहस्] (solitude), @deva[रजस्] (dust/passion). Thus @deva[अरू करोति/भवति/स्यात्], @deva[उन्मनी करोति], @deva[उच्चक्षू करोति], @deva[विचेती करोति], @deva[विरही करोति], @deva[विरजी करोति]. The short @deva[उ] of @deva[अरु] and @deva[चक्षु] is lengthened by @ref[7.4.26]; the @deva[अ] of others becomes @deva[ई] by @ref[7.4.32].",
                "advanced": "Though @deva[च्वि] would apply by the general rule @ref[5.4.50], this sūtra is needed to teach consonant elision (@deva[हलन्तलोप]). The final @deva[स्] of these words is dropped before @deva[च्वि]. The phonological rules then apply: @ref[7.4.26] lengthens short @deva[उ] in @deva[अरु], @deva[चक्षु]; @ref[7.4.32] changes @deva[अ] to @deva[ई] in @deva[मनस्], @deva[चेतस्], @deva[रहस्], @deva[रजस्]."
            }
        },
        "54052": {
            "en": {
                "simple": "The affix @deva[साति] may optionally replace @deva[च्वि] when something is completely transformed into something else. Examples: @deva[अग्निसात् भवति शस्त्रम्] (the weapon becomes entirely fire), @deva[उदकसात् भवति लवणम्] (the salt becomes entirely water).",
                "standard": "This sūtra provides the optional affix @deva[साति] in place of @deva[च्वि] when the transformation is @deva[कृत्स्न] (complete, total). The condition @deva[अभूततद्भाव] with verbs @deva[कृ], @deva[भू], @deva[अस्] continues. Thus @deva[अग्निसात् भवति शस्त्रम्] or @deva[अग्नी भवति शस्त्रम्] (the weapon becomes entirely fire). Similarly @deva[उदकसात् भवति लवणम्] or @deva[उदकी भवति लवणम्] (salt dissolves completely into water). The optionality follows the @deva[महाविभाषा] of @ref[4.1.82].",
                "advanced": "The term @deva[कृत्स्न] specifies that one individual thing is transformed in all its parts. Compare with @deva[अभिविधि] in the next sūtra, which covers many things partially transformed. @deva[साति] and @deva[च्वि] are interchangeable here; both express complete transformation of a single object. The optional alternation is governed by the @deva[महाविभाषा] principle from @ref[4.1.82] (referenced via @ref[5.3.1])."
            }
        },
        "54053": {
            "en": {
                "simple": "The affix @deva[साति] is used with the verb @deva[सम्पद्] (and also @deva[कृ], @deva[भू], @deva[अस्]) when all things of a kind are transformed, even partially. Example: @deva[सर्वं शस्त्रम् अग्निसात् सम्पद्यते] (all weapons become fire).",
                "standard": "This sūtra prescribes @deva[साति] when the meaning is @deva[अभिविधि] (pervasion)—all things of a similar kind undergoing transformation, even if only partially. The verb @deva[सम्पद्] is specifically mentioned, but @deva[कृ], @deva[भू], @deva[अस्] also apply via @deva[च]. Thus @deva[अस्यां सेनायाम् उत्पातेन सर्वं शस्त्रम् अग्निसात् सम्पद्यते] (all weapons in this army become fire due to the portent). By @deva[विभाषा], @deva[च्वि] can also be used with @deva[कृ/भू/अस्], but not with @deva[सम्पद्].",
                "advanced": "The distinction between @deva[कार्त्स्न्य] (@ref[5.4.52]) and @deva[अभिविधि] (this sūtra): @deva[कार्त्स्न्य] = one object transformed completely in all parts; @deva[अभिविधि] = all objects of a class (@deva[प्रकारकार्त्स्न्य]) transformed, even partially. Example: all weapons (@deva[सर्वं शस्त्रम्])—swords, lances, etc.—catching fire represents @deva[अभिविधि]. @deva[च्वि] may substitute for @deva[साति] via @deva[विभाषा], but only with @deva[कृ/भू/अस्], not @deva[सम्पद्]."
            }
        },
        "54054": {
            "en": {
                "simple": "The affix @deva[साति] is added to words meaning 'master' or 'lord' to express 'bringing under that person's control,' with verbs @deva[कृ], @deva[भू], @deva[अस्], or @deva[सम्पद्]. Example: @deva[राजसात् करोति] = @deva[राजाधीनं करोति] (brings under the king's control).",
                "standard": "This sūtra prescribes @deva[साति] after words denoting a master or proprietor to express @deva[तदधीन] (dependence on that person, coming under their control). The verbs @deva[कृ], @deva[भू], @deva[अस्], @deva[सम्पद्] apply. Thus @deva[राजाधीनं करोति] = @deva[राजसात् करोति] (a king brings a kingdom under his dominion). Similarly @deva[राजसात् भवति/स्यात्/सम्पद्यते]. Also @deva[ब्राह्मणसात् भवति/करोति/स्यात्/सम्पद्यते] (comes under Brahmin control).",
                "advanced": "The @deva[अभूततद्भाव] condition ceases here—a new semantic domain (@deva[तदधीन]) is introduced. The word @deva[तदधीन] means 'under the supremacy, control, or proprietorship of that.' Both the proprietor generally and the object of rulership are indicated. The four verbs continue from previous sūtras. This differs from transformation—it's about subjugation or bringing under authority."
            }
        },
        "54055": {
            "en": {
                "simple": "The affix @deva[त्रा] (as well as @deva[साति]) is added when the meaning is 'giving to that person,' with verbs @deva[कृ], @deva[भू], @deva[अस्], or @deva[सम्पद्]. Example: @deva[ब्राह्मणत्रा करोति] = gives to Brahmins (an item that ought to be given to them).",
                "standard": "This sūtra adds the affix @deva[त्रा] alongside @deva[साति] when the meaning includes @deva[देय] (to be given)—placing something under another's control by offering it as a gift. Thus @deva[ब्राह्मणाधीनं देयं करोति] = @deva[ब्राह्मणत्रा करोति] or @deva[ब्राह्मणसात् करोति] (he gives it to the Brahmins as a proper offering). Similarly @deva[ब्राह्मणत्रा भवति] (it becomes given to the Brahmins). Without the @deva[देय] sense: @deva[राजसात् भवति राष्ट्रम्] (the kingdom comes under the king's control)—here @deva[त्रा] doesn't apply.",
                "advanced": "The condition @deva[देय] (to be given) qualifies @deva[तदधीन] from the previous sūtra. When a thing known as a proper gift (@deva[देय]) for recipients (like Brahmins) is placed under their control through offering, @deva[त्रा] applies. The distinction: @deva[राजसात्] (under royal control) involves dominion, not gifting; @deva[ब्राह्मणत्रा] involves ritual giving of appropriate items. Both @deva[त्रा] and @deva[साति] are available for the @deva[देय] sense."
            }
        },
        "54056": {
            "en": {
                "simple": "The affix @deva[त्रा] is added to @deva[देव], @deva[मनुष्य], @deva[पुरुष], @deva[पुरु], and @deva[मर्त्य] to replace accusative or locative case. Examples: @deva[देवत्रा गच्छति] = @deva[देवान् गच्छति] (goes to the gods), @deva[देवत्रा वसति] = @deva[देवेषु वसति] (dwells among the gods).",
                "standard": "This sūtra prescribes @deva[त्रा] after five words—@deva[देव], @deva[मनुष्य], @deva[पुरुष], @deva[पुरु], @deva[मर्त्य]—to express either accusative (2nd) or locative (7th) case meanings. Thus @deva[देवान् गच्छति] = @deva[देवत्रा गच्छति] (goes to the gods); @deva[देवेषु वसति] = @deva[देवत्रा वसति] (dwells among the gods). Similarly @deva[मनुष्यत्रा], @deva[पुरुषत्रा], @deva[पुरुत्रा], @deva[मर्त्यत्रा]. The word @deva[विभाषा] (diversely) indicates extension to other words: @deva[बहुत्रा जीवतो मनः] (the mind lives in many places).",
                "advanced": "The @deva[साति] anuvṛtti ceases; @deva[त्रा] alone applies. The verbs @deva[कृ/भू/अस्] have no scope here—this is a general case-replacement rule. The term @deva[विभाषा] here means 'diversely' or 'variously,' allowing extension beyond the listed five words. The dual case function (accusative or locative) makes @deva[त्रा] versatile for directional and locational expressions with these animate-denoting nouns."
            }
        },
        "54057": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to imitative sounds (onomatopoeia) whose reduplicated half has at least two syllables, when not followed by @deva[इति], with verbs @deva[कृ], @deva[भू], or @deva[अस्]. Example: @deva[पटपटा करोति] (makes a pattering sound).",
                "standard": "This sūtra prescribes @deva[डाच्] (real affix @deva[आ]) after @deva[अव्यक्तानुकरण] (imitation of inarticulate sounds) when the word's reduplicated half has at least two syllables (@deva[द्व्यजवरार्ध]), and @deva[इति] does not follow. The word is first reduplicated, then @deva[डाच्] is added. Thus @deva[पटत्] → @deva[पटपटत्] → @deva[पटपटा करोति] (makes a pattering sound). Before @deva[डाच्], final @deva[अत्] is elided by @ref[6.4.143]. Examples: @deva[दमदमा करोति], @deva[खरटखरटा करोति], @deva[त्रपटत्रपटा करोति].",
                "advanced": "The condition @deva[द्व्यजवरार्ध] means: when reduplicated, the half must have at least (@deva[अवर]) two syllables (@deva[द्व्यच्]). Thus four-syllable or larger reduplicated forms qualify. Counter-examples: @deva[दृषत् करोति] (makes stone)—not an imitative sound; @deva[श्रत् करोति]—half has only one syllable. When @deva[इति] follows: @deva[पटिति करोति] (@ref[6.1.98]). The indicatory @deva[च्] prevents svarita accent: @deva[पटपटासि] retains udātta on @deva[आ], not becoming svarita per @ref[8.2.6]."
            }
        },
        "54058": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to @deva[द्वितीय], @deva[तृतीय], @deva[शम्ब], and @deva[बीज] with verb @deva[कृ] when meaning 'to plough in that manner.' Examples: @deva[द्वितीया करोति] (does second ploughing), @deva[बीजा करोति] (ploughs with seed).",
                "standard": "This sūtra prescribes @deva[डाच्] after @deva[द्वितीय], @deva[तृतीय], @deva[शम्ब], and @deva[बीज] specifically with verb @deva[कृ] (not @deva[भू] or @deva[अस्]) when the meaning is ploughing (@deva[कृष]). Thus @deva[द्वितीया करोति] = @deva[द्वितीयं कर्षणं करोति] (does the second ploughing). @deva[तृतीया करोति] (third ploughing). @deva[शम्बा करोति] = ploughs contrariwise (@deva[अनुलोमं कृष्टं क्षेत्रं प्रतिलोमं कृषति]). @deva[बीजा करोति] = @deva[सहबीजेन विलेखनं करोति] (ploughs with seed).",
                "advanced": "The repetition of @deva[कृ] in this sūtra indicates that @deva[भू] and @deva[अस्] do not apply—this is restricted to agricultural contexts with 'making/doing.' The semantic condition @deva[कृषे] (in the sense of ploughing) is essential. @deva[द्वितीयं करोति पदम्] (makes a second step) doesn't qualify because it's not about ploughing. @deva[शम्ब] denotes cross-ploughing; @deva[बीज] denotes ploughing with simultaneous seeding."
            }
        },
        "54059": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to numerals followed by @deva[गुण] when meaning 'to plough that many times.' Examples: @deva[द्विगुणा करोति क्षेत्रम्] (ploughs the field twice), @deva[त्रिगुणा करोति] (ploughs thrice).",
                "standard": "This sūtra prescribes @deva[डाच्] after numerals compounded with @deva[गुण] when the meaning is @deva[कृष] (ploughing). The verb @deva[कृ] is understood. Thus @deva[द्विगुणा करोति क्षेत्रम्] = @deva[द्विगुणं विलेखनं करोति क्षेत्रस्य] (ploughs the field twice). Similarly @deva[त्रिगुणा करोति] (ploughs thrice). The ploughing sense is essential: @deva[द्विगुणां करोति रज्जुम्] (doubles the rope) doesn't qualify.",
                "advanced": "The @deva[कृष] condition continues from the previous sūtra. The numeral + @deva[गुण] compound indicates multiplicative ploughing—how many times the field is worked. Without the agricultural context, the same compound has its ordinary meaning (doubling, tripling) and @deva[डाच्] doesn't apply. The verb @deva[कृ] is carried forward by anuvṛtti."
            }
        },
        "54060": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to @deva[समय] (time) with verb @deva[कृ] when meaning 'to pass time' or 'to procrastinate.' Example: @deva[समया करोति] = @deva[कालक्षेपं करोति] (wastes time, procrastinates).",
                "standard": "This sūtra prescribes @deva[डाच्] after @deva[समय] with verb @deva[कृ] when the meaning is @deva[यापन] (passing time, neglecting, procrastinating). The @deva[कृष] (ploughing) sense ceases. Thus @deva[समया करोति] = @deva[कालक्षेपं करोति]—one who says 'today I'm busy, tomorrow or day after is the time' and thus lets many days pass is said to @deva[समया करोति] (procrastinate). Without this sense: @deva[समयं करोति] (makes an appointment/time) doesn't take the affix.",
                "advanced": "The term @deva[यापन] (from @deva[यप्] or related to @deva[या]) means 'causing to pass,' hence 'neglecting' or 'wasting' time. The @deva[समय] here refers to leisure or opportunity (@deva[अवकाश]) for duties. @deva[समया करोति] describes procrastination—letting proper time pass without action. The contrast @deva[समयं करोति] (makes an agreement/appointment) shows the basic meaning where @deva[डाच्] is inapplicable."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.4.46-60)")

if __name__ == "__main__":
    main()
