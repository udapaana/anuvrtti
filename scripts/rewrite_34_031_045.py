#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.4.31-3.4.45 (Batch 3)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "34031": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[पॄ] (to fill) when @deva[चर्मन्] (skin) or @deva[उदर] (belly) is in composition. Examples: @deva[उदरपूरं भुङ्क्ते] 'he eats to fill his belly'; @deva[चर्मपूरं स्तृणाति] 'he spreads [something] to cover the skin'.",
            "standard": "@deva[णमुल्] after @deva[पॄ] with @deva[चर्मन्] or @deva[उदर] in composition. Examples: @deva[उदरपूरं भुङ्क्ते] 'eats filling the belly'; @deva[चर्मपूरं स्तृणाति] 'spreads so as to cover the hide'. The @deva[उपपद] indicates the extent or goal of the filling action.",
            "advanced": "@deva[णमुल्] after @deva[पॄ] with @deva[चर्मन्]/\u200b@deva[उदर] @deva[उपपद]. @deva[उदरपूरं भुङ्क्ते] = @deva[उदरं पूरयन् भुङ्क्ते]; @deva[चर्मपूरं स्तृणाति] = @deva[चर्म पूरयन् स्तृणाति]. The @deva[णमुल्]-formed compound specifies the extent/goal of the action."
        }
    },
    "34032": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[पॄ] (to fill) when expressing rainfall measure, with optional shortening of @deva[ऊ] to @deva[अ]. Examples: @deva[गोष्पदपूरं वृष्टो देवः] or @deva[गोष्पदप्रं वृष्टो देवः] 'it rained enough to fill cow-hoofprints'; @deva[सीतापूरम्] or @deva[सीताप्रम्] 'filling furrows'. The shortening applies only to @deva[पॄ], not to any long vowel in the @deva[उपपद] (e.g., @deva[मूषिकाबिलपूरम्]/\u200b@deva[मूषिकाबिलप्रम्] - @deva[मू] remains long).",
            "standard": "@deva[णमुल्] after @deva[पॄ] for @deva[वृष्टिमाण] (rainfall measure), with @deva[विकल्प] shortening of the root's @deva[ऊ]. @deva[गोष्पदपूरं] or @deva[गोष्पदप्रं वृष्टो देवः] 'rained filling cow-hoofprints'; @deva[सीतापूरम्]/\u200b@deva[सीताप्रम्] 'filling furrows'. The @deva[अस्य] in the sūtra specifies: only @deva[पॄ]'s @deva[ऊ] shortens, not @deva[उपपद] vowels. Thus @deva[मूषिकाबिलपूरम्]/\u200b@deva[मूषिकाबिलप्रम्] - the @deva[ऊ] in @deva[मूषिका] remains.",
            "advanced": "@deva[णमुल्] after @deva[पॄ] in @deva[वृष्टिमाण] (rain-measure) sense with @deva[विकल्प] @deva[ह्रस्व] of @deva[ऊ]. @deva[गोष्पदपूरम्]/\u200b@deva[गोष्पदप्रम्] (filling hoofprints); @deva[सीतापूरम्]/\u200b@deva[सीताप्रम्] (filling furrows). The @deva[अस्य] (@deva[पूर्]'s) restricts shortening to the root vowel only: @deva[मूषिकाबिलपूरम्]/\u200b@deva[मूषिकाबिलप्रम्] - @deva[मू] in @deva[उपपद] unchanged."
        }
    },
    "34033": {
        "en": {
            "simple": "@deva[णमुल्] is added to the causative @deva[क्नोपि] (from @deva[क्नूय्] 'to wet') when a word meaning 'clothing' is in composition and the sense is rainfall measure. Examples: @deva[चेलक्नोपं वृष्टो देवः] 'it rained enough to wet clothes'; similarly @deva[वस्त्रक्नोपम्], @deva[वसनक्नोपम्].",
            "standard": "@deva[णमुल्] after @deva[क्नोपि] (causative of @deva[क्नूय्] 'to wet') with @deva[वस्त्रवाचिन्] (clothing-denoting) @deva[द्वितीया उपपद] in @deva[वृष्टिमाण] sense. @deva[क्नूय्] + @deva[णिच्] = @deva[क्नोपि] (causative stem). Examples: @deva[चेलक्नोपं वृष्टो देवः] 'rained wetting clothes'; @deva[वस्त्रक्नोपम्], @deva[वसनक्नोपम्] similarly.",
            "advanced": "@deva[णमुल्] after @deva[क्नोपि] (@deva[क्नूय्] + @deva[णिच्]) with @deva[वस्त्रवाचिन्] @deva[द्वितीयान्त उपपद] in @deva[वृष्टिमाण] context. @deva[चेलक्नोपं वृष्टो देवः] 'it rained [enough] to wet garments'. The causative @deva[क्नोपि] (from @deva[क्नूय्] 'to moisten') takes @deva[णमुल्] to express the extent of rainfall via clothing-dampening."
        }
    },
    "34034": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[कष्] (to scrape) when @deva[निमूल] or @deva[समूल] (with roots) is in accusative composition. Examples: @deva[निमूलकाषं कषति] 'he scrapes down to the roots'; @deva[समूलकाषं कषति] 'he scrapes up the roots'. The gerund and main verb are from the same root. Note: from this sūtra to @ref[3.4.46], the main verb must be from the same root as the gerund.",
            "standard": "@deva[णमुल्] after @deva[कष्] with @deva[निमूल]/\u200b@deva[समूल] in @deva[द्वितीया] composition. @deva[निमूलकाषं कषति] = @deva[निमूलं कषति] 'scrapes to the roots'; @deva[समूलकाषं कषति] 'scrapes including roots'. The gerund and governing verb share the same root. This establishes a pattern: from @ref[3.4.34] to @ref[3.4.46], @deva[अनुप्रयोग] (following verb) must derive from the same @deva[धातु] as the @deva[णमुल्]-formed gerund.",
            "advanced": "@deva[णमुल्] after @deva[कष्] with @deva[निमूल]/\u200b@deva[समूल] @deva[द्वितीयान्त उपपद]. @deva[निमूलकाषं कषति] (= @deva[निमूलं कषति]); @deva[समूलकाषं कषति]. The @deva[णमुल्]-compound and main verb express the same action - redundancy for emphasis. This begins a series (through @ref[3.4.46]) requiring @deva[सधातुक अनुप्रयोग] (cognate subsequent verb). See @ref[3.4.46] for the @deva[नियम]."
        }
    },
    "34035": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[पिष्] (to grind) when @deva[शुष्क] (dry), @deva[चूर्ण] (powder), or @deva[रूक्ष] (rough/dry) is in accusative composition. Examples: @deva[शुष्कपेषं पिनष्टि] = @deva[शुष्कं पिनष्टि] 'grinds it dry'; @deva[चूर्णपेषं पिनष्टि] 'grinds to powder'; @deva[रूक्षपेषं पिनष्टि] 'grinds it rough/dry'. Same-root verb required.",
            "standard": "@deva[णमुल्] after @deva[पिष्] with @deva[शुष्क]/\u200b@deva[चूर्ण]/\u200b@deva[रूक्ष] in @deva[द्वितीया] composition. @deva[शुष्कपेषं पिनष्टि] = @deva[शुष्कं पिनष्टि] 'grinds dry'; @deva[चूर्णपेषं पिनष्टि] 'grinds to powder'; @deva[रूक्षपेषं पिनष्टि] 'grinds rough'. Per @ref[3.4.46], the governing verb must be from @deva[पिष्].",
            "advanced": "@deva[णमुल्] after @deva[पिष्] with @deva[शुष्क]/\u200b@deva[चूर्ण]/\u200b@deva[रूक्ष] @deva[द्वितीयान्त उपपद]. @deva[शुष्कपेषं पिनष्टि], @deva[चूर्णपेषं पिनष्टि], @deva[रूक्षपेषं पिनष्टि]. The @deva[उपपद] specifies the resultant state (dry) or form (powder) of grinding. @deva[सधातुक अनुप्रयोग] applies (@ref[3.4.46])."
        }
    },
    "34036": {
        "en": {
            "simple": "@deva[णमुल्] is added to three root-@deva[उपपद] pairs: (1) @deva[समूल] + @deva[हन्] → @deva[समूलघातं हन्ति] 'destroys utterly, uprooting'; (2) @deva[अकृत] + @deva[कृ] → @deva[अकृतकारं करोति] 'does what was not done before'; (3) @deva[जीव] + @deva[ग्रह्] → @deva[जीवग्राहं गृह्णाति] 'captures alive'. Same-root verbs required.",
            "standard": "@deva[णमुल्] after specific root-@deva[उपपद] combinations: (1) @deva[समूल] + @deva[हन्]: @deva[समूलघातं हन्ति] (@ref[8.3.32], @ref[8.3.54]) 'destroys root and all'; (2) @deva[अकृत] + @deva[कृ]: @deva[अकृतकारं करोति] 'does the unprecedented'; (3) @deva[जीव] + @deva[ग्रह्]: @deva[जीवग्राहं गृह्णाति] 'captures alive'. Each requires cognate @deva[अनुप्रयोग].",
            "advanced": "@deva[णमुल्] with three @deva[उपपद]-@deva[धातु] pairs: @deva[समूल] + @deva[हन्] → @deva[समूलघातं हन्ति] (total annihilation; @ref[8.3.32], @ref[8.3.54] for @deva[घात्]); @deva[अकृत] + @deva[कृ] → @deva[अकृतकारं करोति] (doing the undone); @deva[जीव] + @deva[ग्रह्] → @deva[जीवग्राहं गृह्णाति] (capturing alive, preserving life). @deva[सधातुक अनुप्रयोग] per @ref[3.4.46]."
        }
    },
    "34037": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[हन्] (to strike) when an instrumental word is in composition. Examples: @deva[पाणिघातं वेदिं हन्ति] = @deva[पाणिना वेदिं हन्ति] 'strikes the altar with the hand'; @deva[पादघातं भूमिं हन्ति] 'strikes the ground with the foot'. Here @deva[हन्] means 'to strike', not 'to kill'. Same-root verb required. Per Patañjali, this also applies when @deva[हन्] means 'to injure': @deva[असिघातं हन्ति] 'kills with sword'.",
            "standard": "@deva[णमुल्] after @deva[हन्] with @deva[तृतीयान्त] (instrumental) @deva[उपपद]. @deva[पाणिघातं वेदिं हन्ति] (@ref[7.3.32], @ref[7.3.54]) = @deva[पाणिना वेदिं हन्ति] 'strikes altar with hand'; @deva[पादघातं भूमिं हन्ति] 'stamps ground with foot'. Here @deva[हन्] = 'strike' (contrast @ref[3.4.48] where @deva[हन्] = 'injure'). Per Patañjali, this sūtra anticipates @ref[3.4.48] and applies even with @deva[हिंसार्थ]: @deva[असिघातं हन्ति], @deva[शरघातं हन्ति]. @deva[सधातुक अनुप्रयोग] applies.",
            "advanced": "@deva[णमुल्] after @deva[हन्] with @deva[तृतीयान्त उपपद]. @deva[पाणिघातं वेदिं हन्ति] = @deva[पाणिना वेदिं हन्ति]; @deva[पादघातं भूमिं हन्ति]. Here @deva[हन्] = @deva[आघात] (strike), distinct from @ref[3.4.48] (@deva[हिंसार्थ]). Per Patañjali, this sūtra by @deva[पूर्वविप्रतिषेध] overrides @ref[3.4.48] even for @deva[हिंसार्थ हन्]: @deva[असिघातं हन्ति], @deva[शरघातं हन्ति]. The @deva[उपपदसमास] like @deva[पादघातम्] is formed here. @deva[सधातुक अनुप्रयोग] per @ref[3.4.46]."
        }
    },
    "34038": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[पिष्] (to grind) when a word meaning 'liquid' in the instrumental is in composition. Examples: @deva[उदपेषं पिनष्टि] (@ref[6.3.58]) = @deva[उदकेन पिनष्टि] 'grinds with water'; @deva[तैलपेषं पिनष्टि] 'grinds with oil'. Same-root verb required.",
            "standard": "@deva[णमुल्] after @deva[पिष्] with @deva[द्रववाचिन्] (liquid-denoting) @deva[तृतीयान्त उपपद]. @deva[उदपेषं पिनष्टि] (by @ref[6.3.58]) = @deva[उदकेन पिनष्टि] 'grinds with water'; @deva[तैलपेषं पिनष्टि] 'grinds with oil'. @deva[सधातुक अनुप्रयोग] per @ref[3.4.46].",
            "advanced": "@deva[णमुल्] after @deva[पिष्] with @deva[द्रववाचिन्] @deva[तृतीयान्त उपपद]. @deva[उदपेषम्] (@deva[उदक] + @deva[पेषम्] by @ref[6.3.58]); @deva[तैलपेषम्]. The liquid serves as the medium for grinding. @deva[सधातुक अनुप्रयोग] applies (@ref[3.4.46])."
        }
    },
    "34039": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[वर्ति] (causative of @deva[वृत्]) and @deva[ग्रह्] when a word meaning 'hand' in the instrumental is in composition. Examples: @deva[हस्तवर्तं वर्तयति] = @deva[हस्तेन वर्तयति] 'revolves by hand'; @deva[हस्तग्राहं गृह्णाति] 'takes by the hand'; similarly @deva[पाणिवर्तम्], @deva[करग्राहम्]. Same-root verbs required.",
            "standard": "@deva[णमुल्] after @deva[वर्ति] (causative of @deva[वृत्]) and @deva[ग्रह्] with @deva[हस्तवाचिन्] (hand-denoting) @deva[तृतीयान्त उपपद]. @deva[हस्तवर्तं वर्तयति], @deva[करवर्तं वर्तयति], @deva[पाणिवर्तं वर्तयति] = @deva[हस्तेन वर्तयति] 'spins by hand'. @deva[हस्तग्राहं गृह्णाति], @deva[पाणिग्राहम्], @deva[करग्राहम्] 'takes by the hand'. @deva[सधातुक अनुप्रयोग] applies.",
            "advanced": "@deva[णमुल्] after @deva[वर्ति] (@deva[वृत्] + @deva[णिच्]) and @deva[ग्रह्] with @deva[हस्तवाचिन्] @deva[तृतीयान्त उपपद]. @deva[हस्तवर्तं]/\u200b@deva[करवर्तं]/\u200b@deva[पाणिवर्तं वर्तयति] 'revolves manually'. @deva[हस्तग्राहं]/\u200b@deva[पाणिग्राहं]/\u200b@deva[करग्राहं गृह्णाति] 'grasps by hand'. @deva[सधातुक अनुप्रयोग] per @ref[3.4.46]."
        }
    },
    "34040": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[पुष्] (to nourish) when a word with @deva[स्व]-sense ('self', 'kinsmen', or 'property') in the instrumental is in composition. Examples: @deva[स्वपोषं पुष्णाति] 'nourishes oneself'; @deva[आत्मपोषम्], @deva[गोपोषम्] (property), @deva[पितृपोषम्], @deva[मातृपोषम्] (kinsmen), @deva[धनपोषम्]. See @ref[1.1.68]. Same-root verb required.",
            "standard": "@deva[णमुल्] after @deva[पुष्] with @deva[स्वार्थ] (self/kinsmen/property) @deva[तृतीयान्त उपपद]. @deva[स्व] encompasses @deva[आत्मन्] (self), @deva[ज्ञाति] (kinsmen), @deva[धन] (wealth) per @ref[1.1.68]. Examples: @deva[स्वपोषं पुष्णाति] 'nourishes oneself'; @deva[आत्मपोषम्], @deva[गोपोषम्], @deva[पितृपोषम्], @deva[मातृपोषम्], @deva[धनपोषम्], @deva[रैपोषम्]. @deva[सधातुक अनुप्रयोग] applies.",
            "advanced": "@deva[णमुल्] after @deva[पुष्] with @deva[स्वार्थ] @deva[तृतीयान्त उपपद]. @deva[स्व] per @ref[1.1.68] covers @deva[आत्मन्], @deva[स्वजन], @deva[स्वीय] (property). @deva[स्वपोषं पुष्णाति]; @deva[आत्मपोषं], @deva[गोपोषं], @deva[पितृपोषं], @deva[मातृपोषं], @deva[धनपोषं], @deva[रैपोषं पुष्णाति]. @deva[सधातुक अनुप्रयोग] per @ref[3.4.46]."
        }
    },
    "34041": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[बन्ध्] (to bind) when a word expressing location is in composition. Examples: @deva[चक्रबन्धं बध्नाति] 'binds to the wheel'; @deva[कूटबन्धं बध्नाति] 'binds in a snare'; @deva[मुष्टिबन्धं बध्नाति] 'binds in the fist'; @deva[चोरकबन्धं बध्नाति] = @deva[चोरके बध्नाति] 'binds in a chorak'. Same-root verb required.",
            "standard": "@deva[णमुल्] after @deva[बन्ध्] with @deva[आधारवाचिन्] (location-denoting) @deva[उपपद]. @deva[चक्रबन्धं बध्नाति] 'binds to wheel'; @deva[कूटबन्धं बध्नाति] 'binds in trap'; @deva[मुष्टिबन्धं बध्नाति] 'binds in fist'; @deva[चोरकबन्धं बध्नाति] = @deva[चोरके बध्नाति]. @deva[सधातुक अनुप्रयोग] per @ref[3.4.46].",
            "advanced": "@deva[णमुल्] after @deva[बन्ध्] with @deva[आधारवाचिन्] @deva[उपपद]. @deva[चक्रबन्धम्] (wheel), @deva[कूटबन्धम्] (snare), @deva[मुष्टिबन्धम्] (fist), @deva[चोरकबन्धम्] (chorak) - each denotes the locus of binding. @deva[सधातुक अनुप्रयोग] applies (@ref[3.4.46])."
        }
    },
    "34042": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[बन्ध्] (to bind) when the resulting word is an appellative (name for a type of knot/binding). Examples: @deva[क्रौञ्चबन्धं बध्नाति] 'ties a heron-knot'; @deva[मयूरिकाबन्धं बध्नाति] 'ties a peacock-knot'; @deva[अट्टालिकाबन्धं बद्धः] 'bound with an attalika-knot'. These are names of specific binding styles. Same-root verb required.",
            "standard": "@deva[णमुल्] after @deva[बन्ध्] when @deva[संज्ञायाम्] (appellative - naming a type of knot). @deva[क्रौञ्चबन्धं बध्नाति] 'ties krauñca-bandha (heron-knot)'; @deva[मयूरिकाबन्धं बध्नाति]/\u200b@deva[बद्धः] 'ties/is tied with peacock-knot'; @deva[अट्टालिकाबन्धं बद्धः]. These are technical names for binding methods. @deva[सधातुक अनुप्रयोग] per @ref[3.4.46].",
            "advanced": "@deva[णमुल्] after @deva[बन्ध्] in @deva[संज्ञायाम्] - the compound names a specific binding type (@deva[बन्धविशेष]). @deva[क्रौञ्चबन्धम्], @deva[मयूरिकाबन्धम्], @deva[अट्टालिकाबन्धम्] are technical terms for knot varieties. @deva[सधातुक अनुप्रयोग] applies (@ref[3.4.46])."
        }
    },
    "34043": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[नश्] (to perish) with @deva[जीव] (life) as agent, and to @deva[वह्] (to carry) with @deva[पुरुष] (person) as agent. Examples: @deva[जीवनाशं नश्यति] = @deva[जीवो नश्यति] 'perishes so that his life perishes (= dies)'; @deva[पुरुषवाहं वहति] = @deva[पुरुषः प्रेष्यो भूत्वा वहति] 'carries as a servant'. Note: when not expressing agent sense - @deva[जीवेन नष्टः] 'destroyed by life' - this doesn't apply.",
            "standard": "@deva[णमुल्] after @deva[नश्] and @deva[वह्] with @deva[कर्तृवाचिन्] (agent-denoting) @deva[उपपद]: @deva[जीव] + @deva[नश्], @deva[पुरुष] + @deva[वह्]. @deva[जीवनाशं नश्यति] = @deva[जीवो नश्यति] 'dies (life perishes)'; @deva[पुरुषवाहं वहति] = @deva[पुरुषः प्रेष्यो भूत्वा वहति] 'a man carries [another] as servant'. When @deva[उपपद] is not @deva[कर्तृ]: @deva[जीवेन नष्टः] 'destroyed by [taking] life', @deva[पुरुषेण ऊढः] 'carried by a man' - this rule doesn't apply.",
            "advanced": "@deva[णमुल्] after @deva[नश्] with @deva[जीव]-@deva[कर्तृ], @deva[वह्] with @deva[पुरुष]-@deva[कर्तृ]. @deva[जीवनाशं नश्यति] (life as agent of perishing = death); @deva[पुरुषवाहं वहति] (man as agent of carrying = servant bearing loads). The @deva[कर्तृत्व] condition is crucial: with @deva[करण] (@deva[जीवेन नष्टः]) or @deva[कर्तृ] in instrumental (@deva[पुरुषेण ऊढः]), this sūtra doesn't govern."
        }
    },
    "34044": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[शुष्] (to dry) and @deva[पॄ] (to fill) when @deva[ऊर्ध्व] (upward/standing) as agent is in composition. Examples: @deva[ऊर्ध्वशोषं शुष्यति वृक्षः] = @deva[ऊर्ध्वे शुष्यति] 'the tree dries standing upright'; @deva[ऊर्ध्वपूरं पूर्यते] 'is filled to the brim'. Same-root verbs required.",
            "standard": "@deva[णमुल्] after @deva[शुष्] and @deva[पॄ] with @deva[ऊर्ध्व] as @deva[कर्तृवाचिन्] @deva[उपपद]. @deva[ऊर्ध्वशोषं शुष्यति वृक्षः] = @deva[ऊर्ध्वः शुष्यति] 'the tree dries standing' (cf. @deva[यद्वोर्ध्वशोषतृणवद्विशुष्कः] Bhaṭṭi III.14); @deva[ऊर्ध्वपूरं पूर्यते] 'is filled to the top/brim'. @deva[सधातुक अनुप्रयोग] per @ref[3.4.46].",
            "advanced": "@deva[णमुल्] after @deva[शुष्] and @deva[पॄ] with @deva[ऊर्ध्व]-@deva[कर्तृ उपपद]. @deva[ऊर्ध्वशोषं शुष्यति वृक्षः] - tree dries while upright (= @deva[ऊर्ध्वः सन् शुष्यति]); @deva[ऊर्ध्वपूरं पूर्यते] - filled to capacity/brimming. Literary attestation: @deva[यद्वोर्ध्वशोषतृणवद्विशुष्कः] (Bhaṭṭi III.14). @deva[सधातुक अनुप्रयोग] applies."
        }
    },
    "34045": {
        "en": {
            "simple": "@deva[णमुल्] is added after a root when an object or agent of comparison (@deva[उपमान]) is in composition. Example with object: @deva[घृतनिधायं निहितं जलम्] 'water was kept as ghee would be kept' = @deva[घृतम् इव निहितम्]. Example with agent: @deva[अजनाशं नष्टः] 'he perished like a goat' (@deva[अज] as agent); similarly @deva[चूडकनाशम्], @deva[दन्तनाशम्].",
            "standard": "@deva[णमुल्] with @deva[उपमानवाचिन्] (comparison-denoting) @deva[कर्मन्] or @deva[कर्तृ] (via @deva[च]). @deva[उपमान] = standard of comparison (= @deva[इव]). With @deva[कर्म]: @deva[घृतनिधायं निहितं जलम्] = @deva[घृतम् इव निहितम्] 'water kept like ghee'; @deva[सुवर्णनिधायं निहितः] 'kept like gold'. With @deva[कर्तृ]: @deva[अजनाशं नष्टः] 'perished like a goat'; @deva[चूडकनाशम्], @deva[दन्तनाशम्].",
            "advanced": "@deva[णमुल्] with @deva[उपमानवाचिन्] @deva[कर्मन्] or @deva[कर्तृ] (latter by @deva[च]). @deva[उपमान] = object of comparison, conveying @deva[इव]-sense. @deva[कर्म] example: @deva[घृतनिधायं निहितं जलम्] = @deva[घृतम् इव निहितम्]; @deva[सुवर्णनिधायम्]. @deva[कर्तृ] example: @deva[अजनाशं नष्टः] 'perished goat-like'; @deva[चूडकनाशम्], @deva[दन्तनाशम्]. The @deva[णमुल्]-compound expresses manner via comparison."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.4.31-3.4.45 (Batch 3)")
