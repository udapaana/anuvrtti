# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32083": {
        "en": {
            "simple": "The affix @deva[खश्] also comes after @deva[मन्] 'to think' when the upapada is a case-inflected word and the meaning is 'thinking oneself to be such'. Examples: @deva[दर्शनीयम्मन्यः] or @deva[दर्शनीयमानी] 'one who thinks himself handsome', @deva[पण्डितम्मन्यः] or @deva[पण्डितमानी] 'one who thinks himself learned'. The @deva[ख्] of @deva[खश्] causes @deva[मुम्] augment by @ref[6.3.66], and @deva[श्] makes it a sārvadhātuka affix.",
            "standard": "The affix @deva[खश्] also follows @deva[मन्] with a @deva[सुबन्त] when @deva[आत्ममान] (self-conception) is expressed—'one who thinks himself to be X'. The @deva[च] includes @deva[णिनि] as an alternative. Examples: @deva[दर्शनीयम्मन्यः] or @deva[दर्शनीयमानी] 'thinks himself handsome'; @deva[पण्डितम्मन्यः] or @deva[पण्डितमानी]. If self-reference is absent: @deva[दर्शनीयमानी देवदत्तस्य यज्ञदत्तः] 'Yajñadatta thinks Devadatta handsome'. The @deva[ख्] triggers @deva[मुम्] (@ref[6.3.66]); @deva[श्] makes it @deva[सार्वधातुक], bringing proper @deva[विकरण]s.",
            "advanced": "The affix @deva[खश्] also follows @deva[मन्] with @deva[सुबन्त] when @deva[आत्ममान] is expressed. The @deva[च] allows @deva[णिनि] optionally. Examples: @deva[दर्शनीयम्मन्यः]/दर्शनीयमानी, @deva[पण्डितम्मन्यः]/पण्डितमानी. Without @deva[आत्ममान]: @deva[दर्शनीयमानी देवदत्तस्य यज्ञदत्तः]. The @deva[ख्] is @deva[इत्] causing @deva[मुमागम] (@ref[6.3.66]); @deva[श्] makes @deva[खश्] @deva[सार्वधातुक], triggering appropriate @deva[विकरण]s. Affixes treated so far apply in all tenses; subsequent affixes denote specific times."
        }
    },
    "32084": {
        "en": {
            "simple": "From this point forward, all affixes should be understood as having past-time meaning. This is a governing rule (@deva[अधिकार]) extending up to @ref[3.2.123]. Example: In the next sūtra, @deva[णिनि] after @deva[यज्] with an instrumental upapada means 'one who **has** sacrificed'. Without past meaning, no such affix applies: @deva[अग्निष्टोमेन यजति] 'he sacrifices' (present).",
            "standard": "The phrase @deva[भूते] (past time sense) is an @deva[अधिकार] extending to @ref[3.2.123]. The @deva[धातु] from @ref[3.1.91] also continues. Example from the next sūtra: @deva[अग्निष्टोमयाजिन्] 'one who **has** sacrificed with Agniṣṭoma' = @deva[अग्निष्टोमेन इष्टवान्]. The @deva[भूते] condition must be met; without past meaning: @deva[अग्निष्टोमेन यजति] 'he sacrifices' (no affix).",
            "advanced": "The phrase @deva[भूते] establishes an @deva[अधिकार] governing sūtras through @ref[3.2.123]. The @deva[धातोः] @deva[अनुवृत्ति] from @ref[3.1.91] also applies. These affixes express @deva[भूतकाल]. Example: @deva[अग्निष्टोमयाजिन्] = @deva[अग्निष्टोमेन इष्टवान्] 'one who has sacrificed with Agniṣṭoma'. Without @deva[भूतार्थ], no affix: @deva[अग्निष्टोमेन यजति] (present tense)."
        }
    },
    "32085": {
        "en": {
            "simple": "The affix @deva[णिनि] comes after @deva[यज्] 'to sacrifice' with past-time meaning when the upapada is in the instrumental case (third). Example: @deva[अग्निष्टोमयाजिन्] 'one who has sacrificed with Agniṣṭoma'. Here Agniṣṭoma is the instrument for attaining the desired fruit. The @deva[अनुवृत्ति] is of @deva[णिनि], not @deva[खश्].",
            "standard": "The affix @deva[णिनि] (not @deva[खश्]) follows @deva[यज्] 'to sacrifice' with @deva[भूतार्थ] when the @deva[उपपद] is in the @deva[तृतीया विभक्ति] (instrumental). Example: @deva[अग्निष्टोमयाजिन्] 'one who has sacrificed with Agniṣṭoma'. The Agniṣṭoma is the @deva[करण] (instrument) for attaining the @deva[फल] (result).",
            "advanced": "The affix @deva[णिनि] (the @deva[अनुवृत्ति] excludes @deva[खश्]) follows @deva[यज्] with @deva[भूतार्थ] when the @deva[उपपद] is @deva[तृतीया]-inflected (@deva[करण]). Example: @deva[अग्निष्टोमयाजिन्] 'one who has sacrificed with Agniṣṭoma'. The @deva[उपपद] denotes the @deva[करण] for @deva[फलसिद्धि]."
        }
    },
    "32086": {
        "en": {
            "simple": "The affix @deva[णिनि] comes after @deva[हन्] 'to kill' with past-time meaning when the upapada is in the accusative (second case). Examples: @deva[पितृव्यघातिन्] 'one who has killed his paternal uncle', @deva[मातुलघातिन्] 'one who has killed his maternal uncle'. Derivation: @deva[हन्] + @deva[णिनि] → @deva[घन्] (@ref[7.3.54]) → @deva[घत्] (@ref[7.3.32]) → @deva[घातिन्] (@ref[7.2.116]). This affix applies only when censure is implied—not in @deva[चोरं हतवान्] 'he has killed a thief'.",
            "standard": "The affix @deva[णिनि] follows @deva[हन्] 'to kill' with @deva[भूतार्थ] when the @deva[उपपद] is @deva[द्वितीया] (accusative). Examples: @deva[पितृव्यघातिन्] 'paternal-uncle-killer', @deva[मातुलघातिन्] 'maternal-uncle-killer'. Derivation: @deva[हन्] + @deva[णिनि] → @deva[घन्] (@ref[7.3.54]) → @deva[घत्] (@ref[7.3.32]) → @deva[घातिन्] (@ref[7.2.116]). This applies only with @deva[निन्दा] (censure); not @deva[चोरं हतवान्] 'killed a thief'. The @deva[कर्मणि] @deva[अनुवृत्ति] extends to @ref[3.2.96].",
            "advanced": "@deva[णिनि] follows @deva[हन्] with @deva[भूतार्थ] when the @deva[उपपद] is @deva[कर्म] (@deva[द्वितीया]). Examples: @deva[पितृव्यघातिन्], @deva[मातुलघातिन्]. @deva[प्रक्रिया]: @deva[हन्] + @deva[णिनि] → @deva[घन्] (@ref[7.3.54] @deva[कुर्वन्त्यादेश]) → @deva[घत्] (@ref[7.3.32]) → @deva[घातिन्] (@ref[7.2.116] @deva[वृद्धि]). This applies only with @deva[निन्दार्थ]; inapplicable: @deva[चोरं हतवान्]. The @deva[कर्मणि] continues through @ref[3.2.96]."
        }
    },
    "32087": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after @deva[हन्] 'to kill' with past-time meaning when @deva[ब्रह्मन्] 'Brāhmaṇa', @deva[भ्रूण] 'fetus', or @deva[वृत्र] is in composition (accusative). Examples: @deva[ब्रह्महा] 'Brāhmaṇa-killer', @deva[भ्रूणहा] 'fetus-killer', @deva[वृत्रहा] 'killer of Vṛtra (epithet of Indra)'. This is a restrictive rule: @deva[क्विप्] comes **only** with these upapadas, **only** after @deva[हन्], **only** in past sense, and is the **only** affix allowed here.",
            "standard": "The affix @deva[क्विप्] follows @deva[हन्] with @deva[भूतार्थ] when @deva[ब्रह्मन्], @deva[भ्रूण], or @deva[वृत्र] is the @deva[कर्म]-@deva[उपपद]. Examples: @deva[ब्रह्महन्], nom. @deva[ब्रह्महा]; @deva[भ्रूणहा]; @deva[वृत्रहा] (Indra). Though @ref[3.2.76] allows @deva[क्विप्] after all verbs, this sūtra is @deva[नियम]: (1) @deva[हन्] takes @deva[क्विप्] **only** with @deva[ब्रह्मन्] etc. (not @deva[पुरुषं हतवान्]); (2) only with @deva[हन्] (not @deva[ब्रह्माधीतवान्]); (3) @deva[क्विप्] is the **only** past-affix; (4) only in past (not @deva[ब्राह्मणं हन्ति]).",
            "advanced": "@deva[क्विप्] follows @deva[हन्] with @deva[भूतार्थ] and @deva[ब्रह्मन्]/भ्रूण/वृत्र as @deva[कर्म]-@deva[उपपद]. Examples: @deva[ब्रह्महा], @deva[भ्रूणहा], @deva[वृत्रहा]. Though @ref[3.2.76] gives @deva[क्विप्] universally, this @deva[नियम] imposes four restrictions: (1) @deva[उपपद]-नियम: only @deva[ब्रह्मन्] etc.; (2) @deva[धातु]-नियम: only @deva[हन्]; (3) @deva[प्रत्यय]-नियम: @deva[क्विप्] alone; (4) @deva[काल]-नियम: @deva[भूतकाल] only. This anticipates the @deva[बहुल] usage in the next sūtra."
        }
    },
    "32088": {
        "en": {
            "simple": "In the Vedas, the affix @deva[क्विप्] comes optionally after @deva[हन्] 'to kill' with past-time meaning even when the upapada is **other** than those in the previous sūtra. Examples: @deva[मातृहा] 'matricide' (in @deva[मातृहा सप्तमं नरकं प्रविशेत्] 'may the matricide enter the seventh hell'), @deva[पितृहा] 'patricide'. Optionally we also find @deva[मातृघातः] and @deva[पितृघातः].",
            "standard": "In @deva[छन्दस्], @deva[क्विप्] comes @deva[विभाषया] (optionally) after @deva[हन्] with @deva[भूतार्थ] even when the @deva[उपपद] is other than @deva[ब्रह्मन्] etc. from the previous sūtra. Examples: @deva[मातृहा] 'matricide' (@deva[मातृहा सप्तमं नरकं प्रविशेत्]); @deva[पितृहा] 'patricide'. Alternatively: @deva[मातृघातः], @deva[पितृघातः] (with @deva[णिनि]).",
            "advanced": "In @deva[छन्दस्], @deva[क्विप्] comes @deva[बहुलम्] after @deva[हन्] with @deva[भूतार्थ] even with @deva[उपपद]s outside the @ref[3.2.87] @deva[नियम]. Examples: @deva[मातृहा], @deva[पितृहा]. The @deva[बहुल] allows alternatives: @deva[मातृघातः], @deva[पितृघातः]. This sūtra applies where the previous restrictive rule does not govern."
        }
    },
    "32089": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after @deva[कृ] 'to do' with past-time meaning when @deva[सु] 'well', @deva[कर्म] 'action', @deva[पाप] 'sin', @deva[मन्त्र] 'hymn', or @deva[पुण्य] 'virtue' is in composition (accusative except @deva[सु]). Examples: @deva[सुकृत्] 'well-doer' (@ref[6.1.71]), @deva[कर्मकृत्] 'doer of all works', @deva[पापकृत्] 'sinner', @deva[मन्त्रकृत्] 'mantra-maker', @deva[पुण्यकृत्] 'doer of virtuous acts'. This is restrictive for time, upapada, and affix, but not verb—hence @deva[शास्त्रकृत्], @deva[भाष्यकृत्].",
            "standard": "The affix @deva[क्विप्] follows @deva[कृ] with @deva[भूतार्थ] when @deva[सु], @deva[कर्मन्], @deva[पाप], @deva[मन्त्र], or @deva[पुण्य] is the @deva[उपपद] (@deva[द्वितीया] for all except @deva[सु] which is @deva[निपात]). Examples: @deva[सुकृत्] (@ref[6.1.71]), @deva[कर्मकृत्], @deva[पापकृत्], @deva[मन्त्रकृत्], @deva[पुण्यकृत्]. This @deva[नियम] restricts time, @deva[उपपद], and affix—but not @deva[धातु]. Hence @deva[क्विप्] extends to other @deva[उपपद]s: @deva[शास्त्रकृत्], @deva[भाष्यकृत्].",
            "advanced": "@deva[क्विप्] follows @deva[कृ] with @deva[भूतार्थ] when @deva[सु]/कर्मन्/पाप/मन्त्र/पुण्य is @deva[उपपद]. @deva[कर्मणि] applies to all except @deva[सु] (@deva[निपात]). Examples: @deva[सुकृत्] (@ref[6.1.71] @deva[इट्]-augment), @deva[कर्मकृत्], @deva[पापकृत्], @deva[मन्त्रकृत्], @deva[पुण्यकृत्]. This @deva[नियम] is threefold (काल/उपपद/प्रत्यय) but not @deva[धातु]-restrictive. Hence @deva[क्विप्] extends: @deva[शास्त्रकृत्], @deva[भाष्यकृत्]."
        }
    },
    "32090": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after @deva[सु] 'to press out juice' with past-time meaning when @deva[सोम] (accusative) is in composition. Example: @deva[सोमसुत्] 'one who has pressed soma juice', dual @deva[सोमसुतौ], plural @deva[सोमसुतः]. This is a fourfold restrictive rule regarding verb, tense, upapada, and affix.",
            "standard": "The affix @deva[क्विप्] follows @deva[षु] (5th class, @deva[सु]) 'to press' with @deva[भूतार्थ] when @deva[सोम] (@deva[द्वितीया]) is the @deva[उपपद]. Example: @deva[सोमसुत्] 'soma-presser', dual @deva[सोमसुतौ], plural @deva[सोमसुतः]. This is a @deva[चतुर्विध नियम]: @deva[धातु], @deva[काल], @deva[उपपद], and @deva[प्रत्यय] are all restricted.",
            "advanced": "@deva[क्विप्] follows @deva[षु] 'to press' with @deva[भूतार्थ] when @deva[सोम] (@deva[कर्म]) is @deva[उपपद]. Example: @deva[सोमसुत्], dual @deva[सोमसुतौ], plural @deva[सोमसुतः]. This establishes @deva[चतुर्विध नियम]: (1) @deva[धातु]-नियम: only @deva[षु]; (2) @deva[काल]-नियम: @deva[भूत] only; (3) @deva[उपपद]-नियम: only @deva[सोम]; (4) @deva[प्रत्यय]-नियम: @deva[क्विप्] alone."
        }
    },
    "32091": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after @deva[चि] 'to collect' with past-time meaning when @deva[अग्नि] (accusative) is in composition. Example: @deva[अग्निचित्] 'one who has kept the sacred fire', dual @deva[अग्निचितौ], plural @deva[अग्निचितः]. This is a fourfold restrictive rule.",
            "standard": "The affix @deva[क्विप्] follows @deva[चि] 'to collect/arrange' with @deva[भूतार्थ] when @deva[अग्नि] (@deva[द्वितीया]) is the @deva[उपपद]. Example: @deva[अग्निचित्] 'one who has kept/arranged the sacred fire', dual @deva[अग्निचितौ], plural @deva[अग्निचितः]. As in the previous sūtra, @deva[चतुर्विध नियम] applies.",
            "advanced": "@deva[क्विप्] follows @deva[चि] with @deva[भूतार्थ] when @deva[अग्नि] (@deva[कर्म]) is @deva[उपपद]. Example: @deva[अग्निचित्], dual @deva[अग्निचितौ], plural @deva[अग्निचितः]. @deva[चतुर्विध नियम] applies as in @ref[3.2.90]."
        }
    },
    "32092": {
        "en": {
            "simple": "The affix @deva[क्विप्] comes after @deva[चि] 'to collect' with past-time meaning when the upapada is in the accusative and the resulting word is **the name of a fire arrangement**. Examples: @deva[श्येनचित्] 'fire arranged in hawk shape', @deva[कङ्कचित्] 'fire arranged like a heron'. These are conventional names (@deva[रूढि]) for sacrificial brick arrangements.",
            "standard": "The affix @deva[क्विप्] follows @deva[चि] with @deva[भूतार्थ] when the @deva[उपपद] is @deva[द्वितीया] and the resulting word is @deva[अग्नि]-@deva[आख्या] (a name for fire). @deva[चेः] and @deva[कर्मणि] are understood. Examples: @deva[श्येनचित्] 'hawk-shaped fire arrangement', @deva[कङ्कचित्] 'heron-shaped arrangement'. The term @deva[आख्या] indicates these are @deva[रूढि] words—their meaning depends on usage, naming brick arrangements for sacrificial fire.",
            "advanced": "@deva[क्विप्] follows @deva[चि] with @deva[भूतार्थ] when @deva[कर्म]-@deva[उपपद] and the @deva[समुदितार्थ] is @deva[अग्न्याख्या] (fire-name). @deva[चेः] and @deva[कर्मणि] continue. Examples: @deva[श्येनचित्], @deva[कङ्कचित्]. The @deva[आख्या] indicates @deva[रूढि]—these are conventional names for sacrificial @deva[इष्टका]-arrangements (brick formations), not transparent compounds."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.83-3.2.92")
