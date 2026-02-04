# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33141": {
        "en": {
            "simple": "This sūtra introduces a section (up to @ref[3.3.152]) where optionally the conditional (@deva[लृङ्]) may be used instead of other tenses when expressing past time and non-completion of action.",
            "standard": "This is an @deva[अधिकार]-sūtra governing rules up to @ref[3.3.152]. The conditions from @ref[3.3.139]-@ref[3.3.140] continue: where @deva[लिङ्]-reasons exist and non-completion (@deva[क्रियातिपत्ति]) is implied, @deva[लृङ्] (conditional) may optionally replace other tenses for past-time expressions.",
            "advanced": "This establishes @deva[अधिकार] extending to @ref[3.3.152]. The governing conditions are: @deva[लिङ्]-nimitta presence, @deva[क्रियातिपत्ति], and @deva[भूतार्थ]. Within this domain, @deva[लृङ्] is @deva[विकल्पेन] available alongside tenses that would otherwise apply. The optionality (@deva[वा]) is carried forward from preceding sūtras."
        }
    },
    "33142": {
        "en": {
            "simple": "The present tense (@deva[लट्]) is used after a verb when @deva[अपि] or @deva[जातु] is in composition with it and the sentence expresses censure. This applies regardless of when the action actually occurred.",
            "standard": "@deva[लट्] (present tense) is used when @deva[अपि] or @deva[जातु] accompanies the verb in expressions of @deva[गर्हा] (censure, blame). Though @deva[लट्] normally denotes present time, here it applies regardless of actual time—the present is used rhetorically to express strong disapproval.",
            "advanced": "When @deva[अपि] or @deva[जातु] are @deva[उपपद]-s and @deva[गर्हा] (censure) is the intent, @deva[लट्] applies irrespective of @deva[काल]. This is @deva[सर्वकालिक]-usage: present tense conveys vivid reproach regardless of whether the censured action is past, present, or future. The @deva[लट्] here functions as @deva[गर्हार्थक], not @deva[वर्तमानार्थक]."
        }
    },
    "33143": {
        "en": {
            "simple": "When @deva[कथम्] (how?) is in composition with a verb and censure is implied, both the potential (@deva[लिङ्]) and present (@deva[लट्]) may be used optionally. Other tenses appropriate to the time may also be used.",
            "standard": "With @deva[कथम्]-upapada expressing @deva[गर्हा], both @deva[लिङ्] (potential) and @deva[लट्] (present, drawn from @ref[3.3.142]) are optionally available. The word @deva[वा] indicates that time-appropriate tenses are not excluded. Example: @deva[कथं भवान् वृषलं याजयेत्] or @deva[कथं भवान् याजयति] 'how could/can you sacrifice for a śūdra?'",
            "advanced": "The @deva[च] draws @deva[लट्] from @ref[3.3.142]; @deva[वा] permits time-appropriate alternatives. With @deva[कथम्] + @deva[गर्हा], we get @deva[त्रैकाल्य]-optionality: @deva[लिङ्], @deva[लट्], or the contextually-appropriate lakāra. This distinguishes from @ref[3.3.142] where @deva[लट्] alone was mandated."
        }
    },
    "33144": {
        "en": {
            "simple": "When interrogative words like @deva[किम्] are in composition with a verb and censure is implied, the potential (@deva[लिङ्]) and first future (@deva[लृट्]) are used. These exclude other tenses.",
            "standard": "With @deva[किम्]-ādi interrogatives and @deva[गर्हा]-intent, @deva[लिङ्] (potential) and @deva[लृट्] (first future) are used exclusively, superseding time-appropriate tenses. The repetition of @deva[लिङ्] excludes @deva[लट्] (unlike @ref[3.3.143]). No optionality—these two affixes are mandatory.",
            "advanced": "The @deva[लिङ्]-repetition is @deva[लट्]-निवृत्त्यर्थ (to exclude @deva[लट्] from @ref[3.3.142]-@ref[3.3.143]). @deva[गर्हा] continues in anuv̥tti; @deva[वा] does not. With @deva[किमादि] + @deva[गर्हा], only @deva[लिङ्] and @deva[लृट्] apply—@deva[नित्यम्], not @deva[विकल्पेन]. This creates a stricter tense-selection than the preceding @deva[कथम्]-rule."
        }
    },
    "33145": {
        "en": {
            "simple": "When expressing that something is not likely to happen (@deva[अनवक्लृप्ति]) or is intolerable (@deva[अमर्ष]), the potential (@deva[लिङ्]) and first future (@deva[लृट्]) are used, even without an interrogative word.",
            "standard": "The @deva[गर्हा]-anuv̥tti ceases. For @deva[अनवक्लृप्ति] (impossibility, disbelief) or @deva[अमर्ष] (intolerance), @deva[लिङ्] and @deva[लृट्] are mandated, excluding all other tenses. No interrogative upapada is required. These affixes express strong incredulity or indignation about an action.",
            "advanced": "@deva[गर्हा]-anuv̥tti ends; new conditions @deva[अनवक्लृप्ति] (disbelief in occurrence) and @deva[अमर्ष] (non-toleration) govern. @deva[लिङ्] and @deva[लृट्] are @deva[नित्य], superseding contextual tenses. @deva[किमादि]-upapada is not required—the semantic content (@deva[अनवक्लृप्ति/अमर्ष]) alone triggers this tense-selection."
        }
    },
    "33146": {
        "en": {
            "simple": "The first future (@deva[लृट्]) is used after a verb when @deva[किंकिल] (an expression of anger) or words meaning @deva[अस्ति] 'is' are in composition, when expressing disbelief or intolerance.",
            "standard": "@deva[लृट्] alone is used when @deva[किंकिल] (expressing anger, taken as one upapada) or @deva[अस्ति]-synonyms (@deva[अस्ति], @deva[भवति], @deva[विद्यते]) accompany the verb, within contexts of @deva[अनवक्लृप्ति] or @deva[अमर्ष]. This excludes @deva[लिङ्] which was available in @ref[3.3.145].",
            "advanced": "@deva[किंकिल] is a single @deva[निपात]-upapada conveying @deva[क्रोध] (anger); @deva[अस्त्यर्थ] words include @deva[अस्ति], @deva[भवति], @deva[विद्यते] etc. With these upapadas under @deva[अनवक्लृप्ति/अमर्ष], only @deva[लृट्] applies—@deva[लिङ्] is excluded. This narrows tense-selection to first future alone."
        }
    },
    "33147": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) is used when @deva[जातु] and @deva[यत्] are in composition with the verb, expressing disbelief or intolerance. This excludes the first future. A Vārttika adds @deva[यदा] and @deva[यदि] to this rule.",
            "standard": "With @deva[जातु] and @deva[यत्] as upapadas expressing @deva[अनवक्लृप्ति/अमर्ष], only @deva[लिङ्] is used, excluding @deva[लृट्]. Example: @deva[जातु तन्न भवान् वृषलं याजयेत्] 'surely you wouldn't sacrifice for a śūdra'. A Vārttika extends this to @deva[यदा] and @deva[यदि].",
            "advanced": "This is @deva[लृट्]-प्रतिषेध: with @deva[जातु] + @deva[यत्] under @deva[अनवक्लृप्ति/अमर्ष], @deva[लिङ्] alone applies. Vārttika: @deva[यदायद्योश्च]—@deva[यदा] and @deva[यदि] are added to the upapada-list. Examples: @deva[यन्नाम तत्र भवान् वृषलं याजयेत् न श्रद्दधे न मर्षयामि]."
        }
    },
    "33148": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) is used in all tenses when @deva[यच्च] and @deva[यत्र] are in composition with the verb and censure is implied. This supersedes the first future.",
            "standard": "With @deva[यच्च] or @deva[यत्र] as upapadas expressing @deva[गर्हा] (censure returns here), @deva[लिङ्] is used for all times (@deva[सर्वकाल]), superseding @deva[लृट्]. This sūtra is separated from the previous for subsequent rule-making. Example: @deva[यच्च/यत्र त्वमेवं कुर्याः न श्रद्दधे न मर्षयामि].",
            "advanced": "@deva[गर्हा] returns as the semantic condition (not @deva[अनवक्लृप्ति/अमर्ष]). With @deva[यच्च/यत्र] + @deva[गर्हा], @deva[लिङ्] applies @deva[सर्वकालिकम्], excluding @deva[लृट्]. The rule @ref[1.3.10] (@deva[यथासंख्यमनुदेशः]) doesn't apply—both @deva[यच्च] and @deva[यत्र] independently trigger @deva[लिङ्]. Separation from @ref[3.3.147] enables distinct following rules."
        }
    },
    "33149": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) is used in all tenses when @deva[यच्च] and @deva[यत्र] are in composition and censure is implied. Example: 'we censure you who, being a wealthy Brahmin, would sacrifice for a śūdra'.",
            "standard": "The @deva[अनवक्लृप्ति/अमर्ष] conditions cease; @deva[गर्हा] continues. @deva[लिङ्] is mandated for all tenses with @deva[यच्च/यत्र] + @deva[गर्हा], debarring other tense-affixes. Example: @deva[यच्च तत्र भवान् वृषलं याजयेत् ॠद्धौ वृद्धः सन् ब्राह्मणः गर्हामहे] 'we censure you, a prosperous elderly Brahmin, that you should sacrifice for a śūdra'.",
            "advanced": "@deva[अनवक्लृप्ति/अमर्ष]-anuv̥tti ends; @deva[गर्हा] governs. With @deva[यच्च/यत्र] + @deva[गर्हा], @deva[लिङ्] is @deva[नित्य] for @deva[सर्वकाल], excluding all other lakāras. The example shows @deva[गर्हा] explicitly: @deva[गर्हामहे] 'we censure'. This completes the @deva[यच्च/यत्र] rules for censure contexts."
        }
    },
    "33150": {
        "en": {
            "simple": "The potential (@deva[लिङ्]) is used in all tenses when @deva[यच्च] and @deva[यत्र] are used and the sense is wonder or astonishment. Example: 'it is astonishing that you should sacrifice for a śūdra'.",
            "standard": "@deva[लिङ्] is used with @deva[यच्च/यत्र] for all times when @deva[चित्रीकरण] (wonder, astonishment) is expressed. This debars other tenses. Example: @deva[यच्च तत्र भवान् वृषलं याजयेत् आश्चर्यमेतत्] 'this is wondrous that you should sacrifice for a śūdra'. When non-completion is implied, the conditional may also be used.",
            "advanced": "@deva[चित्रीकरण] (wonder, strangeness) joins @deva[गर्हा] as a semantic trigger. With @deva[यच्च/यत्र] + @deva[चित्रीकरण], @deva[लिङ्] applies @deva[सर्वकालिकम्]. When @deva[क्रियातिपत्ति] (non-realization) is additionally implied, @deva[लृङ्] (conditional) becomes available per the @deva[अधिकार] of @ref[3.3.139]-@ref[3.3.141]."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.141-3.3.150")
