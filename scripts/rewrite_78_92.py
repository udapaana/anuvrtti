#!/usr/bin/env python3
"""Rewrite commentary for sūtras 3.2.78-3.2.92 (Batch 4)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "32078": {
        "en": {
            "simple": "When habit is expressed, the affix @deva[णिनि] comes after a verb with a case-inflected word in composition, provided that word does not denote a genus (class of beings). Examples: @deva[उष्णभोजी] 'one who habitually eats hot food', @deva[शीतभोजी] 'one who habitually eats cold food'. When the upapada denotes a genus, this affix does not apply: we say @deva[ब्राह्मणानामन्त्रयिता] 'inviter of Brāhmaṇas', not *@deva[ब्राह्मणानामन्त्रयी]. Without the habitual sense, no compound forms: @deva[उष्णं भुङ्क्ते कदाचित्] 'he sometimes eats hot food'.",
            "standard": "When @deva[शील] (habitual action) is expressed, @deva[णिनि] follows a verb with a @deva[सुबन्त] (case-inflected word) in composition, provided the @deva[उपपद] does not denote @deva[जाति] (genus). Examples: @deva[उष्णभोजिन्], nominative @deva[उष्णभोजी] 'habitual hot-food eater'; @deva[शीतभोजी] 'habitual cold-food eater'. With a @deva[जातिवाचक] @deva[उपपद]: @deva[ब्राह्मणानामन्त्रयिता] (not *@deva[ब्राह्मणानामन्त्रयी]). Without @deva[शील]: @deva[उष्णं भुङ्क्ते कदाचित्] 'he sometimes eats hot'. The repetition of @deva[सुपि] (though available via @deva[अनुवृत्ति]) excludes @deva[उपसर्ग]s—though Siddhānta Kaumudī allows forms like @deva[अनुनायिन्], @deva[उपजीविन्]. Vārttikas add: @deva[आसृ] with @deva[उद्]/@deva[प्रति] (@deva[उदासारिन्], @deva[प्रत्यासारिन्]); skill-sense (@deva[साधुकारी], @deva[साधुदायी]); @deva[ब्रह्मवादिन्] after @deva[वद्] with @deva[ब्रह्म].",
            "advanced": "@deva[शील] (habitual action) triggers @deva[णिनि] after a verb with @deva[सुबन्त] when the @deva[उपपद] is non-@deva[जातिवाचक]. Examples: @deva[उष्णभोजिन्], @deva[शीतभोजिन्]. @deva[जातिवाचक] blocks the affix: @deva[ब्राह्मणानामन्त्रयिता] (not *@deva[ब्राह्मणानामन्त्रयी]). The @deva[सुपि] repetition (despite @deva[अनुवृत्ति]) excludes @deva[उपसर्ग]—contested by Siddhānta Kaumudī which permits @deva[अनुनायिन्], @deva[उपजीविन्]. @deva[वार्त्तिक]s: (1) @deva[आसृ] with @deva[उद्]/@deva[प्रति] (@deva[उदासारिन्], @deva[प्रत्यासारिणी]); (2) @deva[कौशल]-sense (@deva[साधुकारी] 'skilled worker', @deva[साधुदायी] 'generous giver'); (3) @deva[ब्रह्मवादिन्] after @deva[वद्] with @deva[ब्रह्म]."
        }
    },
    "32079": {
        "en": {
            "simple": "The affix @deva[णिनि] comes after a verb when the upapada denotes a standard of comparison for the agent. The meaning is 'one who acts like X'. Examples: @deva[उष्ट्रक्रोशी] 'one who makes noise like a camel' (from @deva[उष्ट्र इव क्रोशति]), @deva[ध्वाङ्क्षराविन्] 'one who caws like a crow'. This applies even when habit is not indicated or when genus is expressed. If the standard of comparison is the object rather than the agent, no compound forms: @deva[अपूपानिव भक्षयति माषान्] 'he eats māṣa like apūpa' (apūpa is object, not agent).",
            "standard": "@deva[णिनि] follows a verb when the @deva[सुबन्त] @deva[उपपद] is an @deva[उपमान] (standard of comparison) for the @deva[कर्तृ]. The meaning is 'one who acts like the @deva[उपमान]'. Examples: @deva[उष्ट्र इव क्रोशति] = @deva[उष्ट्रक्रोशिन्] 'camel-like noise-maker'; @deva[ध्वाङ्क्षराविन्] 'crow-like noise-maker'. This sūtra applies even without @deva[शील] or when @deva[जाति] is expressed—serving as an exception to @ref[3.2.78]. Condition: the @deva[उपमान] must be @deva[कर्तृ]; if @deva[कर्म], no @deva[समास]: @deva[अपूपानिव भक्षयति माषान्]. For accent, see @ref[6.2.80].",
            "advanced": "@deva[णिनि] follows a verb when the @deva[सुबन्त] @deva[उपपद] is @deva[उपमान] (comparison standard) for the @deva[कर्तृ]—the @deva[प्रत्ययार्थ] is 'acting like the @deva[उपमान]'. Examples: @deva[उष्ट्रक्रोशिन्], @deva[ध्वाङ्क्षराविन्]. This is @deva[अपवाद] to @ref[3.2.78] when @deva[शील] is absent or @deva[जाति] is expressed. Restriction: @deva[उपमान] must be @deva[कर्तृ]; if @deva[कर्म], no @deva[समास] (@deva[अपूपानिव भक्षयति माषान्]). For accent treatment, see @ref[6.2.80]."
        }
    },
    "32080": {
        "en": {
            "simple": "The affix @deva[णिनि] comes after a verb with a case-inflected word in composition when a religious vow is expressed. The 'vow' condition applies to the complete derived word. Examples: @deva[स्थण्डिलशायिन्] 'one who has vowed to sleep only on bare ground', @deva[अश्राद्धभोजिन्] 'one who has vowed not to eat during śrāddha ceremonies'. Without the vow sense, no compound forms: @deva[स्थण्डिले शेते देवदत्तः] 'Devadatta sleeps on bare ground' (mere fact, not a vow).",
            "standard": "@deva[णिनि] follows a verb with a @deva[सुबन्त] in composition when @deva[व्रत] (religious vow, scripturally ordained) is expressed. The @deva[व्रत]-condition qualifies the @deva[समुदितार्थ] (complete derived word including root, @deva[उपपद], and affix). Examples: @deva[स्थण्डिलशायिन्] 'vowed to sleep on bare ground'; @deva[अश्राद्धभोजिन्] 'vowed not to eat at śrāddha'. Without @deva[व्रतार्थ], no @deva[समास]: @deva[स्थण्डिले शेते देवदत्तः]. This is an exception to @ref[3.2.78], applying when @deva[शील] is absent or @deva[जाति] is expressed.",
            "advanced": "@deva[णिनि] follows a verb with @deva[सुबन्त] when @deva[व्रत] (scriptural vow) is expressed. The @deva[व्रत]-@deva[उपाधि] qualifies the @deva[समुदितार्थ] (complete derived word), not individual components. Examples: @deva[स्थण्डिलशायिन्], @deva[अश्राद्धभोजिन्]. Without @deva[व्रतार्थ], no @deva[समास]: @deva[स्थण्डिले शेते देवदत्तः]. This is @deva[अपवाद] to @ref[3.2.78] when @deva[शील] is absent or @deva[जाति] is expressed."
        }
    },
    "32081": {
        "en": {
            "simple": "The affix @deva[णिनि] optionally comes after a verb when continued repetition of an action (zealous practice, not mere habit) is expressed. Examples: @deva[कषायपायिणो गान्धाराः] 'the people of Gāndhāra are kaṣāya-drinkers', @deva[क्षीरपायिण उशीनाराः] 'the people of Uśīnara are milk-drinkers', @deva[सौवीरपायिणो बाह्लीकाः] 'the people of Bāhlīka are sauvīra-drinkers'. The word 'diversely' indicates this affix is not universally applied—e.g., @deva[कुल्माषखादः] 'grain-eater' uses a different affix.",
            "standard": "@deva[णिनि] comes @deva[विभाषया] (optionally) when @deva[आभीक्ष्ण्य] (assiduous practice—distinct from mere @deva[शील]) is expressed. Examples: @deva[कषायपायिन्] (with @deva[युक्] augment by @ref[7.3.33]), nominative plural @deva[कषायपायिणो गान्धाराः]; @deva[क्षीरपायिण उशीनाराः]; @deva[सौवीरपायिणो बाह्लीकाः]. The @deva[बहुलम्] indicates non-application elsewhere: @deva[कुल्माषखादः] (not *@deva[कुल्माषखादी]).",
            "advanced": "@deva[णिनि] comes @deva[विभाषया] when @deva[आभीक्ष्ण्य] (zealous repetition, distinct from @deva[शील]) is expressed. Examples: @deva[कषायपायिन्] (@ref[7.3.33] @deva[युगागम]), @deva[क्षीरपायिन्], @deva[सौवीरपायिन्]. The @deva[बहुलम्] restricts application: @deva[कुल्माषखादः] uses @deva[अच्] (not @deva[णिनि]). @deva[आभीक्ष्ण्य] denotes zealous, assiduous practice—not mere habitual action."
        }
    },
    "32082": {
        "en": {
            "simple": "The affix @deva[णिनि] comes after the verb @deva[मन्] 'to think' when a case-inflected word is in composition. Examples: @deva[दर्शनीयमानी] 'one who thinks himself handsome', @deva[शोभनम्मानी] 'one who thinks himself beautiful'. The verb here is from the 4th conjugation (@deva[दिवादि]), not the 8th (@deva[तनादि]).",
            "standard": "@deva[णिनि] follows @deva[मन्] 'to think' (4th conjugation, @deva[दिवादि]) with a @deva[सुबन्त] in composition. Examples: @deva[दर्शनीयमानिन्], nominative @deva[दर्शनीयमानी] 'one who thinks himself handsome'; @deva[शोभनम्मानी] 'one who thinks himself beautiful'. The @deva[दिवादि] @deva[मन्] is intended (not @deva[तनादि]) because @deva[विभाषा] continues in @deva[अनुवृत्ति]. While both yield @deva[मानिन्] here, the distinction matters in the next sūtra with @deva[खश्].",
            "advanced": "@deva[णिनि] follows @deva[मन्] (@deva[दिवादि], not @deva[तनादि]) with @deva[सुबन्त]. Examples: @deva[दर्शनीयमानिन्], @deva[शोभनम्मानिन्]. The @deva[दिवादि] specification is significant because @deva[विभाषा] continues in @deva[अनुवृत्ति]. While both @deva[गण]s yield @deva[मानिन्] here, the distinction becomes relevant in the next sūtra with @deva[खश्], where @deva[श्यन्] @deva[विकरण] applies to @deva[दिवादि] but not @deva[तनादि]."
        }
    },
    "32083": {
        "en": {
            "simple": "The affix @deva[खश्] also comes after @deva[मन्] 'to think' when the upapada is case-inflected and the meaning is 'thinking oneself to be such'. The @deva[च] ('and') indicates @deva[णिनि] is also permitted. Examples: @deva[दर्शनीयम्मन्यः] or @deva[दर्शनीयमानी] 'one who thinks himself handsome', @deva[पण्डितम्मन्यः] or @deva[पण्डितमानी] 'one who thinks himself learned'. When self-reference is absent, only @deva[णिनि]: @deva[दर्शनीयमानी देवदत्तस्य यज्ञदत्तः] 'Yajñadatta thinks Devadatta handsome'.",
            "standard": "@deva[खश्] also follows @deva[मन्] with a @deva[सुबन्त] when @deva[आत्ममान] (thinking of oneself as such) is expressed. The @deva[च] allows @deva[णिनि] as an alternative. Examples: @deva[दर्शनीयम्मन्यः] or @deva[दर्शनीयमानी]; @deva[पण्डितम्मन्यः] or @deva[पण्डितमानी]. Without @deva[आत्ममान]: @deva[दर्शनीयमानी देवदत्तस्य यज्ञदत्तः] 'Yajñadatta thinks Devadatta handsome' (only @deva[णिनि]). The @deva[ख्] triggers @deva[मुम्] augment (@ref[6.3.66]); @deva[श्] makes @deva[खश्] @deva[सार्वधातुक], triggering appropriate @deva[विकरण]s. Affixes treated so far apply in all tenses; subsequent affixes denote specific times.",
            "advanced": "@deva[खश्] also follows @deva[मन्] with @deva[सुबन्त] when @deva[आत्ममान] is expressed. The @deva[च] permits @deva[णिनि] optionally. Examples: @deva[दर्शनीयम्मन्यः]/@deva[दर्शनीयमानी], @deva[पण्डितम्मन्यः]/@deva[पण्डितमानी]. Without @deva[आत्ममान]: @deva[दर्शनीयमानी देवदत्तस्य यज्ञदत्तः]. The @deva[ख्] is @deva[इत्] causing @deva[मुमागम] (@ref[6.3.66]); @deva[श्] makes @deva[खश्] @deva[सार्वधातुक], triggering @deva[विकरण]s. Affixes up to this point apply across all tenses; subsequent affixes denote specific times (@deva[भूतकाल])."
        }
    },
    "32084": {
        "en": {
            "simple": "From this point forward, all affixes should be understood as having past-time meaning. This is a governing rule extending up to @ref[3.2.123]. Example: the next sūtra teaches @deva[णिनि] after @deva[यज्] with an instrumental upapada—meaning 'one who has sacrificed'. Without past meaning, the affix does not apply: @deva[अग्निष्टोमेन यजति] 'he sacrifices with Agniṣṭoma' (present tense, no compound).",
            "standard": "The phrase @deva[भूते] (past time sense) establishes an @deva[अधिकार] (governing rule) extending to @ref[3.2.123]. The @deva[धातोः] from @ref[3.1.91] also continues in @deva[अनुवृत्ति]. Example from the next sūtra: @deva[अग्निष्टोमयाजिन्] 'one who has sacrificed with Agniṣṭoma' = @deva[अग्निष्टोमेन इष्टवान्]. The @deva[भूते] condition must be satisfied; without past meaning: @deva[अग्निष्टोमेन यजति] 'he sacrifices' (present, no affix).",
            "advanced": "@deva[भूते] establishes an @deva[अधिकार] governing sūtras through @ref[3.2.123]. The @deva[धातोः] @deva[अनुवृत्ति] from @ref[3.1.91] also applies. These affixes express @deva[भूतकाल]. Example: @deva[अग्निष्टोमयाजिन्] = @deva[अग्निष्टोमेन इष्टवान्] 'one who has sacrificed with Agniṣṭoma'. Without @deva[भूतार्थ], the affix does not apply: @deva[अग्निष्टोमेन यजति] (present tense)."
        }
    },
    "32085": {
        "en": {
            "simple": "The affix @deva[णिनि] comes after the verb @deva[यज्] 'to sacrifice' with past-time meaning when the upapada is in the instrumental case. Example: @deva[अग्निष्टोमयाजिन्] 'one who has sacrificed with Agniṣṭoma'. Here Agniṣṭoma is the instrument for attaining the desired fruit. Note: @deva[णिनि] (not @deva[खश्]) is understood here.",
            "standard": "@deva[णिनि] (not @deva[खश्]) follows @deva[यज्] 'to sacrifice' with @deva[भूतार्थ] (past meaning) when the @deva[उपपद] is in the @deva[तृतीया] (instrumental case). Example: @deva[अग्निष्टोमयाजिन्] 'one who has sacrificed with Agniṣṭoma'. The Agniṣṭoma is the @deva[करण] (instrument) for attaining the desired @deva[फल]. The @deva[अनुवृत्ति] of @deva[णिनि] (not @deva[खश्]) is to be read into this sūtra.",
            "advanced": "@deva[णिनि] (via @deva[अनुवृत्ति], not @deva[खश्]) follows @deva[यज्] with @deva[भूतार्थ] when the @deva[उपपद] is @deva[तृतीयान्त]. Example: @deva[अग्निष्टोमयाजिन्] 'one who has sacrificed with Agniṣṭoma'. The @deva[उपपद] denotes the @deva[करण] for @deva[फलप्राप्ति]."
        }
    },
    "32086": {
        "en": {
            "simple": "The affix @deva[णिनि] comes after the verb @deva[हन्] 'to kill' with past-time meaning when the upapada is in the accusative case. Examples: @deva[पितृव्यघातिन्] 'one who has killed his paternal uncle', @deva[मातुलघातिन्] 'one who has killed his maternal uncle'. Derivation: @deva[हन्] + @deva[णिनि] → @deva[घन्] (@ref[7.3.54]) → @deva[घत्] (@ref[7.3.32]) → @deva[घातिन्] (@ref[7.2.116]). This affix applies only when censure is implied—not in @deva[चोरं हतवान्] 'he has killed the thief'.",
            "standard": "@deva[णिनि] follows @deva[हन्] 'to kill' with @deva[भूतार्थ] when the @deva[उपपद] is @deva[द्वितीयान्त] (accusative). Examples: @deva[पितृव्यघातिन्], @deva[मातुलघातिन्]. Derivation: @deva[हन्] + @deva[णिनि] → @deva[घन्] + @deva[णिनि] (@ref[7.3.54]) → @deva[घत्] + @deva[णिनि] (@ref[7.3.32]) → @deva[घातिन्] (@ref[7.2.116]). This affix applies only when @deva[निन्दा] (censure) is implied; not in @deva[चोरं हतवान्] 'he has killed the thief'. The @deva[कर्मणि] @deva[अनुवृत्ति] extends to @ref[3.2.96].",
            "advanced": "@deva[णिनि] follows @deva[हन्] with @deva[भूतार्थ] when @deva[उपपद] is @deva[द्वितीयान्त]. Examples: @deva[पितृव्यघातिन्], @deva[मातुलघातिन्]. Derivation: @deva[हन्] + @deva[णिनि] → @deva[घन्] (@ref[7.3.54] @deva[हन्तेर्घत्]) → @deva[घत्] (@ref[7.3.32]) → @deva[घातिन्] (@ref[7.2.116] @deva[अतो णिनि]). Condition: @deva[निन्दा] must be implied; not @deva[चोरं हतवान्]. The @deva[कर्मणि] @deva[अनुवृत्ति] governs through @ref[3.2.96]."
        }
    },
    "32087": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after the verb @deva[हन्] 'to kill' with past-time meaning when the accusative upapada is @deva[ब्रह्म], @deva[भ्रूण] 'fetus', or @deva[वृत्र]. Examples: @deva[ब्रह्महा] 'one who has killed a Brāhmaṇa', @deva[भ्रूणहा] 'one who has killed a fetus', @deva[वृत्रहा] 'slayer of Vṛtra' (epithet of Indra). This is a restrictive rule: @deva[हन्] takes @deva[क्विप्] only with these specific upapadas.",
            "standard": "@deva[क्विप्] follows @deva[हन्] with @deva[भूतार्थ] when the @deva[द्वितीयान्त] @deva[उपपद] is @deva[ब्रह्म], @deva[भ्रूण], or @deva[वृत्र]. Examples: @deva[ब्रह्महन्], nominative @deva[ब्रह्महा] 'Brāhmaṇa-slayer'; @deva[भ्रूणहा] 'fetus-slayer'; @deva[वृत्रहा] 'Vṛtra-slayer' (Indra's epithet). Though @deva[क्विप्] was already available via @ref[3.2.76], this sūtra makes a @deva[नियम]: four-fold restriction applies—(1) @deva[उपपद] must be @deva[ब्रह्म] etc., (2) verb must be @deva[हन्], (3) only @deva[क्विप्] for past sense, (4) past tense only. Counter-examples: @deva[पुरुषं हतवान्]; @deva[ब्राह्मणं हन्ति].",
            "advanced": "@deva[क्विप्] follows @deva[हन्] with @deva[भूतार्थ] when @deva[द्वितीयान्त] @deva[उपपद] is @deva[ब्रह्म], @deva[भ्रूण], or @deva[वृत्र]. Examples: @deva[ब्रह्महन्] → @deva[ब्रह्महा], @deva[भ्रूणहा], @deva[वृत्रहा]. Despite @deva[क्विप्] being available via @ref[3.2.76], this sūtra establishes a @deva[नियम] with four-fold restriction (@deva[चातुर्विध्य]): (1) @deva[उपपद] restricted to @deva[ब्रह्म] etc., (2) @deva[धातु] restricted to @deva[हन्], (3) only @deva[क्विप्] for @deva[भूतार्थ], (4) @deva[भूतकाल] only. This anticipates the @deva[बहुलम्] of the next sūtra."
        }
    },
    "32088": {
        "en": {
            "simple": "In Vedic literature, the affix @deva[क्विप्] optionally comes after @deva[हन्] with past-time meaning even when the accusative upapada is not one of those mentioned in the previous sūtra. Examples: @deva[मातृहा] 'matricide' (from @deva[मातृहा सप्तमं नरकं प्रविशेत्] 'may the matricide enter the seventh hell'), @deva[पितृहा] 'patricide'. In the alternative, @deva[णिनि] can also apply: @deva[मातृघातः], @deva[पितृघातः].",
            "standard": "In @deva[छन्दस्] (Vedic literature), @deva[क्विप्] comes @deva[विभाषया] (optionally) after @deva[हन्] with @deva[भूतार्थ] even when the @deva[द्वितीयान्त] @deva[उपपद] is other than @deva[ब्रह्म] etc. This extends beyond the @deva[नियम] of the previous sūtra. Examples: @deva[मातृहा] 'matricide' (as in @deva[मातृहा सप्तमं नरकं प्रविशेत्]); @deva[पितृहा] 'patricide'. The @deva[बहुलम्] allows alternatives: @deva[मातृघातः], @deva[पितृघातः] (with @deva[णिनि]).",
            "advanced": "In @deva[छन्दस्], @deva[क्विप्] comes @deva[बहुलम्] after @deva[हन्] with @deva[भूतार्थ] when @deva[द्वितीयान्त] @deva[उपपद] is other than @deva[ब्रह्म] etc.—extending beyond the @deva[नियम] of @ref[3.2.87]. Examples: @deva[मातृहा], @deva[पितृहा]. The @deva[बहुलम्] permits @deva[णिनि] alternatively: @deva[मातृघातः], @deva[पितृघातः]."
        }
    },
    "32089": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after the verb @deva[कृ] 'to make' with past-time meaning when the accusative upapada is @deva[सु] 'well', @deva[कर्म] 'action', @deva[पाप] 'sin', @deva[मन्त्र] 'hymn', or @deva[पुण्य] 'virtue'. Examples: @deva[सुकृत्] 'one who has done well', @deva[कर्मकृत्] 'one who has performed actions', @deva[पापकृत्] 'sinner', @deva[मन्त्रकृत्] 'hymn-composer', @deva[पुण्यकृत्] 'one who has done virtuous deeds'. The @deva[त्] is added by @ref[6.1.71]. Unlike @ref[3.2.87], there is no verb restriction—hence @deva[शास्त्रकृत्], @deva[भाष्यकृत्].",
            "standard": "@deva[क्विप्] follows @deva[कृ] with @deva[भूतार्थ] when the @deva[द्वितीयान्त] @deva[उपपद] is @deva[सु], @deva[कर्मन्], @deva[पाप], @deva[मन्त्र], or @deva[पुण्य]. @deva[सु] is @deva[अव्यय] (indeclinable), so 'accusative' applies to the others. Examples: @deva[सुकृत्] (@ref[6.1.71] adds @deva[त्]), @deva[कर्मकृत्], @deva[पापकृत्], @deva[मन्त्रकृत्], @deva[पुण्यकृत्]. This establishes a @deva[नियम] with three-fold restriction: @deva[काल] (past), @deva[उपपद] (listed words), @deva[प्रत्यय] (@deva[क्विप्] only)—but no @deva[धातु] restriction. Hence @deva[शास्त्रकृत्], @deva[भाष्यकृत्] with other upapadas.",
            "advanced": "@deva[क्विप्] follows @deva[कृ] with @deva[भूतार्थ] when @deva[द्वितीयान्त] @deva[उपपद] is @deva[सु], @deva[कर्मन्], @deva[पाप], @deva[मन्त्र], or @deva[पुण्य]. @deva[सु] being @deva[अव्यय] takes no @deva[विभक्ति]. Examples: @deva[सुकृत्] (@ref[6.1.71] @deva[तुगागम]), @deva[कर्मकृत्], @deva[पापकृत्], @deva[मन्त्रकृत्], @deva[पुण्यकृत्]. This @deva[नियम] has three-fold restriction (@deva[त्रैविध्य]): @deva[काल], @deva[उपपद], @deva[प्रत्यय]—but no @deva[धातुनियम]. Hence @deva[शास्त्रकृत्], @deva[भाष्यकृत्] with other @deva[उपपद]s."
        }
    },
    "32090": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after the verb @deva[सु] 'to press out juice' with past-time meaning when the accusative upapada is @deva[सोम]. Example: @deva[सोमसुत्] 'one who has pressed the soma juice'; dual @deva[सोमसुतौ], plural @deva[सोमसुतः]. This is a restrictive rule with four-fold restriction: verb (@deva[सु]), tense (past), upapada (@deva[सोम]), and affix (@deva[क्विप्]).",
            "standard": "@deva[क्विप्] follows @deva[सु] 'to press out juice' with @deva[भूतार्थ] when the @deva[द्वितीयान्त] @deva[उपपद] is @deva[सोम]. Example: @deva[सोमसुत्] 'soma-presser'; dual @deva[सोमसुतौ]; plural @deva[सोमसुतः]. This @deva[नियम] has four-fold restriction (@deva[चातुर्विध्य]): @deva[धातु] (@deva[सु]), @deva[काल] (past), @deva[उपपद] (@deva[सोम]), @deva[प्रत्यय] (@deva[क्विप्]).",
            "advanced": "@deva[क्विप्] follows @deva[सु] 'to extract' with @deva[भूतार्थ] when @deva[द्वितीयान्त] @deva[उपपद] is @deva[सोम]. Example: @deva[सोमसुत्]; dual @deva[सोमसुतौ]; plural @deva[सोमसुतः]. This establishes a @deva[नियम] with @deva[चातुर्विध्यनियम]: @deva[धातु], @deva[काल], @deva[उपपद], @deva[प्रत्यय]."
        }
    },
    "32091": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after the verb @deva[चि] 'to collect, arrange' with past-time meaning when the accusative upapada is @deva[अग्नि]. Example: @deva[अग्निचित्] 'one who has arranged the sacred fire'; dual @deva[अग्निचितौ], plural @deva[अग्निचितः]. Like the previous sūtra, this has four-fold restriction.",
            "standard": "@deva[क्विप्] follows @deva[चि] 'to collect, arrange' with @deva[भूतार्थ] when the @deva[द्वितीयान्त] @deva[उपपद] is @deva[अग्नि]. Example: @deva[अग्निचित्] 'one who has arranged the sacred fire'; dual @deva[अग्निचितौ]; plural @deva[अग्निचितः]. Like @ref[3.2.90], this @deva[नियम] has four-fold restriction (@deva[चातुर्विध्य]).",
            "advanced": "@deva[क्विप्] follows @deva[चि] with @deva[भूतार्थ] when @deva[द्वितीयान्त] @deva[उपपद] is @deva[अग्नि]. Example: @deva[अग्निचित्]; dual @deva[अग्निचितौ]; plural @deva[अग्निचितः]. This @deva[नियम] has @deva[चातुर्विध्यनियम] as in @ref[3.2.90]."
        }
    },
    "32092": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after the verb @deva[चि] with past-time meaning when the accusative upapada denotes an object, provided the complete word is a name of fire (arranged for sacrifice). Examples: @deva[श्येनचित्] 'fire arranged in the shape of a hawk', @deva[कङ्कचित्] 'fire arranged in the shape of a heron'. These are @deva[रूढि] (conventional) words—their meaning depends on usage, referring to specific brick arrangements in sacrificial contexts.",
            "standard": "@deva[क्विप्] follows @deva[चि] with @deva[भूतार्थ] when the @deva[द्वितीयान्त] @deva[उपपद] denotes @deva[कर्म] and the complete word is @deva[आख्या] (name) of a fire. Examples: @deva[श्येनचित्] 'fire arranged like a hawk'; @deva[कङ्कचित्] 'fire arranged like a heron'. The @deva[आख्या] indicates these are @deva[रूढि] words—their sense depends on convention (@deva[रूढ्यर्थ]) rather than etymology. These names refer to specific arrangements of bricks (@deva[इष्टका]) for sacrificial fires.",
            "advanced": "@deva[क्विप्] follows @deva[चि] with @deva[भूतार्थ] when @deva[द्वितीयान्त] @deva[उपपद] denotes @deva[कर्म] and the @deva[समुदितार्थ] is @deva[अग्न्याख्या]. Examples: @deva[श्येनचित्], @deva[कङ्कचित्]. The term @deva[आख्या] indicates @deva[रूढि]—meaning determined by usage rather than etymology. These denote specific @deva[इष्टकाचयन] (brick arrangements) for sacrificial fires."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sūtras 3.2.78-3.2.92")
