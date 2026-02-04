#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.2.183-3.2.188 (Batch 11 - final)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "32183": {
        "en": {
            "simple": "The affix @deva[ष्ट्रन्] comes after @deva[पू] (to purify) in the instrumental sense when the word denotes a part of a plough or of a hog. The verb @deva[पू] includes both @deva[पूङ्] and @deva[पूञ्]. Examples: @deva[पोत्रम्] (ploughshare), @deva[पोत्रम्] (snout of a hog).",
            "standard": "The affix @deva[ष्ट्रन्] applies after @deva[पू] (to purify) in @deva[करण] (instrument) sense when denoting a body part of a plough or hog. Both @deva[पूङ्] and @deva[पूञ्] are included. Formations: @deva[पोत्रम्] (ploughshare - the 'purifying' part that turns earth); @deva[पोत्रम्] (hog's snout - used for rooting).",
            "advanced": "@deva[ष्ट्रन्] after @deva[पू] in @deva[करणे] sense when denoting @deva[सीरावयव] (plough-part) or @deva[वराहावयव] (hog-part). Both @deva[पूङ्] (Bhvādi) and @deva[पूञ्] (Svādi) are covered. Formation: @deva[पू] + @deva[ष्ट्रन्] = @deva[पोत्रम्] (ploughshare; hog's snout). The semantic restriction (@deva[नियम]) limits this to agricultural implements and animal anatomy."
        }
    },
    "32184": {
        "en": {
            "simple": "The affix @deva[इत्र] comes after seven verbs to denote the instrument: @deva[ऋ] (to go), @deva[लू] (to cut), @deva[धू] (to shake), @deva[सू] (to bring forth), @deva[खन्] (to dig), @deva[सह्] (to bear), @deva[चर्] (to go). Examples: @deva[अरित्रम्] (rudder, oar), @deva[लवित्रम्] (sickle), @deva[धवित्रम्] (fan), @deva[सवित्रम्] (cause of production), @deva[खनित्रम्] (spade), @deva[सहित्रम्] (patience), @deva[चरित्रम्] (conduct, narrative).",
            "standard": "The affix @deva[इत्र] applies in @deva[करण] sense after @deva[ऋ], @deva[लू], @deva[धू], @deva[सू], @deva[खन्], @deva[सह्], @deva[चर्]. Formations: @deva[अरित्रम्] (oar/rudder - instrument of going across); @deva[लवित्रम्] (sickle - cutting instrument); @deva[धवित्रम्] (fan - shaking instrument); @deva[सवित्रम्] (generative cause); @deva[खनित्रम्] (spade - digging tool); @deva[सहित्रम्] (forbearance - instrument of enduring); @deva[चरित्रम्] (conduct/story - means of proceeding).",
            "advanced": "@deva[इत्र] after @deva[ऋ], @deva[लू], @deva[धू], @deva[सू], @deva[खन्], @deva[सह्], @deva[चर्] in @deva[करणे] sense. Derivations: @deva[ऋ] + @deva[इत्र] = @deva[अरित्रम्] (oar - 'that by which one goes across'); @deva[लू] + @deva[इत्र] = @deva[लवित्रम्] (sickle); @deva[धू] + @deva[इत्र] = @deva[धवित्रम्] (winnowing fan); @deva[सू] + @deva[इत्र] = @deva[सवित्रम्] (productive agent); @deva[खन्] + @deva[इत्र] = @deva[खनित्रम्] (excavating tool); @deva[सह्] + @deva[इत्र] = @deva[सहित्रम्] (patience - abstract instrument); @deva[चर्] + @deva[इत्र] = @deva[चरित्रम्] (conduct, biography)."
        }
    },
    "32185": {
        "en": {
            "simple": "The affix @deva[इत्र] comes after @deva[पू] (to purify) in the instrumental sense when the meaning is simply a name (appellative), not descriptive. Both @deva[पूङ्] and @deva[पूञ्] are included. This forms @deva[पवित्रम्] - a purifying instrument like a sieve or strainer, also the two blades of kusha grass used in sacrifices, the sacred thread, or clarified butter.",
            "standard": "The affix @deva[इत्र] applies after @deva[पू] in @deva[करण] sense when @deva[संज्ञायाम्] (simply appellative, not descriptive). Both @deva[पूङ्] and @deva[पूञ्] are covered. Formation: @deva[पवित्रम्] (purifying instrument). Meanings: (1) strainer/sieve, (2) two kusha-grass blades for sacrificial purification and sprinkling ghee, (3) sacred thread, (4) clarified butter, etc.",
            "advanced": "@deva[इत्र] after @deva[पू] in @deva[करणे] sense when @deva[संज्ञायाम्] (appellative, not @deva[गुणवचन]). Both @deva[पूङ्] (Bhvādi) and @deva[पूञ्] (Svādi) included. Formation: @deva[पू] + @deva[इत्र] = @deva[पवित्रम्]. Semantic range: strainer/filter; ritual purifier (dual kusha blades for lustrating ghee at sacrifices); @deva[यज्ञोपवीत] (sacred thread); clarified butter - all items that effect purification. Contrast with @ref[3.2.186] where agent sense applies."
        }
    },
    "32186": {
        "en": {
            "simple": "The affix @deva[इत्र] comes after @deva[पू] (to purify) with agent or instrumental sense depending on whether it refers to a deity or a sage. When applied to a sage (@deva[ऋषि]), the meaning is instrumental (through whom one is purified). When applied to a deity (@deva[देवता]), the meaning is agentive (one who purifies). Examples: @deva[पवित्रोऽयमृषिः] (this sage is sanctifying - instrumental); @deva[अग्निः पवित्रम्] (Agni is the purifier - agent).",
            "standard": "The affix @deva[इत्र] applies after @deva[पू] with @deva[करण] or @deva[कर्तृ] sense depending on referent. For @deva[ऋषि] (sage): @deva[करण] sense - @deva[पवित्रोऽयम् ऋषिः] 'this sage is sacred' (through whose agency one is sanctified). For @deva[देवता] (deity): @deva[कर्तृ] sense - @deva[अग्निः पवित्रं स मा पुनातु] 'Agni is the purifier; may he purify me.' Similarly: @deva[वायुः], @deva[सोमः], @deva[सूर्यः], @deva[इन्द्रः पवित्रं ते मा पुनन्तु].",
            "advanced": "@deva[इत्र] after @deva[पू] with semantic variation: @deva[ऋष्यर्थे करणम्] (instrumental for sages) vs. @deva[देवतार्थे कर्ता] (agentive for deities). For @deva[ऋषि]: @deva[पवित्रोऽयम् ऋषिः] - 'this sage is a means of purification' (one is purified through his instrumentality). For @deva[देवता]: @deva[अग्निः पवित्रं स मा पुनातु] - 'Agni is the purifier; may he purify me' (Agni as active agent). Also: @deva[वायुः सोमः सूर्य इन्द्रः पवित्रं ते मा पुनन्तु] (may Vāyu, Soma, Sūrya, Indra - all purifiers - purify me)."
        }
    },
    "32187": {
        "en": {
            "simple": "Verbs marked with the indicatory @deva[ञि] in the Dhātupāṭha take the affix @deva[क्त] with present-tense meaning. Normally @deva[क्त] is a past participle (by @ref[3.2.102]), but these @deva[ञित्] verbs are exceptions. Examples: @deva[ञिमिदा] (to feel affection) → @deva[मिन्नः] (feeling affection - present); @deva[ञिक्ष्विदा] → @deva[क्ष्विण्णः] (sounding inarticulately - present); @deva[ञिधृषा] → @deva[धृष्टः] (bold - present).",
            "standard": "Roots marked with @deva[ञि] in the Dhātupāṭha take @deva[क्त] in present-tense sense (continuing @deva[वर्तमाने] from @ref[3.2.123]). Usually @deva[क्त] denotes past (by @ref[3.2.102]), but @deva[ञित्] roots are exceptions. Examples: @deva[ञिमिदा] → @deva[मिद्] + @deva[क्त] = @deva[मिन्नः] (by @ref[8.2.42]) 'affectionate' (present); @deva[ञिक्ष्विदा] → @deva[क्ष्विण्णः] 'making inarticulate sound'; @deva[ञिधृषा] → @deva[धृष्टः] 'bold, daring'.",
            "advanced": "@deva[ञित्] roots take @deva[क्त] in @deva[वर्तमाने] (present tense), overriding the default past sense of @deva[निष्ठा] (@ref[3.2.102]). The @deva[वर्तमाने] carries over from @ref[3.2.123]. Derivations: @deva[ञिमिदा] 'to feel affection' → @deva[मिद्] + @deva[क्त] = @deva[मिङ्] + @deva[त] = @deva[मिन्] + @deva[न] (by @ref[8.2.42]) = @deva[मिन्नः] (currently affectionate). @deva[ञिक्ष्विदा] → @deva[क्ष्विण्णः] (presently making inarticulate sounds). @deva[ञिधृषा] → @deva[धृष्टः] (presently bold). The @deva[ञि] marker in the Dhātupāṭha specifically signals this present-tense usage of @deva[क्त]."
        }
    },
    "32188": {
        "en": {
            "simple": "The affix @deva[क्त] is also used with present-tense meaning after verbs denoting inclination (@deva[मति]), understanding (@deva[बुद्धि]), or respect (@deva[पूजा]). Examples: @deva[राज्ञां मतः/इष्टः] (desired by kings - present), @deva[बुद्धः/ज्ञातः] (known - present), @deva[पूजितः] (honored - present). The word @deva[च] (and) indicates other verbs are also included where @deva[क्त] doesn't mean only past time.",
            "standard": "The affix @deva[क्त] applies with present-tense force after verbs expressing @deva[मति] (wish), @deva[बुद्धि] (cognition), or @deva[पूजा] (respect). Examples: @deva[राज्ञां मतः], @deva[इष्टः] (wished by kings), @deva[बुद्धः], @deva[ज्ञातः] (known), @deva[पूजितः] (honored). The @deva[च] (and) extends this to other cases where @deva[क्त] transcends past time: @deva[शीलितः] (practiced), @deva[रक्षितः] (protected), @deva[क्षान्तः] (forbearing), @deva[जुष्टः] (pleased), @deva[रुष्टः] (angry), @deva[तृष्टः]/\u200b@deva[तुष्टः] (satisfied), @deva[कान्तः] (beloved), @deva[संयतः] (restrained), @deva[उद्यतः] (ready), @deva[कष्टम्] (misery - future sense), @deva[अमृत] (immortal), @deva[सुप्तः] (sleeping), @deva[शयितः] (lying), @deva[तृप्तः] (content).",
            "advanced": "@deva[क्त] in @deva[वर्तमाने] after @deva[मत्यर्थ] (wishing), @deva[बुद्ध्यर्थ] (knowing), @deva[पूजार्थ] (honoring) verbs. Examples: @deva[राज्ञां मतः/इष्टः/बुद्धः/ज्ञातः/पूजितः] - all with present (not exclusively past) sense.\n\nThe @deva[च] extends coverage beyond these three semantic domains. Additional @deva[क्त] forms with present/general (not purely past) sense: @deva[शीलितः] (habitually practiced), @deva[रक्षितः] (under protection), @deva[क्षान्तः] (patient), @deva[आक्रुष्टः] (being censured), @deva[जुष्टः] (pleased), @deva[रुष्टः]/\u200b@deva[रुषितः] (angry), @deva[अभिव्याहृतः] (being uttered), @deva[तृष्टः]/\u200b@deva[तुष्टः] (content), @deva[कान्तः] (beloved), @deva[संयतः] (controlled), @deva[उद्यतः] (prepared), @deva[कष्टम्] (misery - with future implication), @deva[अमृत] (immortal). Also present-sense participles: @deva[सुप्तः] (sleeping), @deva[शयितः] (reclining), @deva[आशितः] (having eaten/eating), @deva[लिप्तः] (smeared), @deva[तृप्तः] (satisfied)."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.2.183-3.2.188 (Batch 11 - final)")
print("PĀDA 3.2 COMPLETE!")
