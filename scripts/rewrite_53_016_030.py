#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.3.16-30."""

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
        "53016": {
            "en": {
                "simple": "The affix @deva[र्हिल्] comes after @deva[इदम्] (this) when time is meant, in locative sense. Example: @deva[इदम्] + @deva[र्हिल्] → @deva[एतर्हि] (at this time, now). This blocks the affix @deva[ह].",
                "standard": "The affix @deva[र्हिल्] attaches to @deva[इदम्] in @deva[सप्तमी] (locative) sense denoting time. This blocks @deva[ह] from @ref[5.3.11]. The @deva[ल्] is @deva[इत्] for accent. By @ref[5.3.4], @deva[इदम्] → @deva[एत] before @deva[र]-initial affixes, giving @deva[एतर्हि] (at this time).",
                "advanced": "The affix @deva[र्हिल्] is @deva[अपवाद] to @deva[ह] (@ref[5.3.11]) after @deva[इदम्] in @deva[सप्तम्यर्थे काले]. The @deva[लकार] is @deva[उच्चारणार्थ] for accent (@deva[स्वर]). By @ref[5.3.4], @deva[रादि प्राग्दिशीय] triggers @deva[इदम्] → @deva[एत]. Derivation: @deva[इदम्] → @deva[एत] + @deva[र्हि] → @deva[एतर्हि] 'now, at this time'. The condition @deva[काले] distinguishes from @deva[इह] (place)."
            }
        },
        "53017": {
            "en": {
                "simple": "The word @deva[अधुना] (now) is an irregular form with the same meaning. Here @deva[इदम्] becomes @deva[अ], and the affix @deva[धुन] is added.",
                "standard": "The word @deva[अधुना] (at this time, now) is listed as @deva[निपातन] (irregular formation). The substitute @deva[अश्] replaces @deva[इदम्], and the irregular affix @deva[धुन] is added. Meaning: @deva[अस्मिन् काले] = @deva[अधुना] (at this time).",
                "advanced": "This is @deva[निपातन]—an irregularly formed word requiring special enumeration. The derivation involves @deva[इदम्] → @deva[अश्] (paralleling @ref[5.3.5] for @deva[एतद्]) + @deva[धुन] (an otherwise unattested affix). The form @deva[अधुना] replaces expected @deva[*एतर्हि] or @deva[*इदानीम्] in certain contexts. @deva[अस्मिन् काले] = @deva[अधुना]."
            }
        },
        "53018": {
            "en": {
                "simple": "The affix @deva[दानीम्] also comes after @deva[इदम्] in locative sense when time is meant. Example: @deva[इदम्] + @deva[दानीम्] → @deva[इदानीम्] (at this time, now).",
                "standard": "The affix @deva[दानीम्] attaches to @deva[इदम्] in @deva[सप्तमी] (locative) sense denoting time. By @ref[5.3.3], @deva[इदम्] → @deva[इ], giving @deva[इदानीम्] (at this time, now). This provides an alternative to @deva[एतर्हि].",
                "advanced": "The affix @deva[दानीम्] is an alternative to @deva[र्हिल्] (@ref[5.3.16]) after @deva[इदम्] in @deva[सप्तम्यर्थे काले]. By @ref[5.3.3], @deva[इदम्] → @deva[इश्] → @deva[इ]. Derivation: @deva[इदम्] → @deva[इ] + @deva[दानीम्] → @deva[इदानीम्] 'now'. Both @deva[इदानीम्] and @deva[एतर्हि] mean @deva[अस्मिन् काले]."
            }
        },
        "53019": {
            "en": {
                "simple": "After @deva[तद्] (that) in locative sense when time is meant, the affixes @deva[दा] and @deva[दानीम्] come. Examples: @deva[तदा] (at that time, then), @deva[तदानीम्] (at that time).",
                "standard": "The affixes @deva[दा] and @deva[दानीम्] attach to @deva[तद्] in @deva[सप्तमी] (locative) sense denoting time. Results: @deva[तस्मिन् काले] = @deva[तदा] or @deva[तदानीम्] (at that time). The @deva[दा] portion is actually redundant since @ref[5.3.15] already teaches @deva[दा] after @deva[तद्].",
                "advanced": "This sūtra teaches @deva[दा] and @deva[दानीम्] after @deva[तद्] in @deva[सप्तम्यर्थे काले]. The @deva[चकार] draws in @deva[दानीम्] from @ref[5.3.18]. The @deva[दा] portion is @deva[व्यर्थ] (redundant) per @ref[5.3.15], but serves to establish @deva[दानीम्] as an alternative. By @ref[7.2.102], @deva[तद्] → @deva[त]. Results: @deva[तदा], @deva[तदानीम्]."
            }
        },
        "53020": {
            "en": {
                "simple": "In Vedic usage, @deva[इदम्] takes @deva[दा], and @deva[तद्] takes @deva[र्हिल्], along with other affixes. Examples: @deva[इदा] (now), @deva[तर्हि] (then).",
                "standard": "In @deva[छन्दस्] (Vedic texts), @deva[दा] comes after @deva[इदम्], and @deva[र्हिल्] after @deva[तद्], in addition to other affixes. By @ref[5.3.3], @deva[इदम्] → @deva[इ] + @deva[दा] → @deva[इदा] (now). By @ref[7.2.102], @deva[तद्] → @deva[त] + @deva[र्हि] → @deva[तर्हि] (then).",
                "advanced": "This @deva[छन्दस्] rule reverses the standard distribution: @deva[इदम्] takes @deva[दा] (normally for @deva[तद्] etc.), and @deva[तद्] takes @deva[र्हिल्] (normally for @deva[इदम्]). Forms: @deva[इदा] (@deva[इ] + @deva[दा]); @deva[तर्हि] (@deva[त] + @deva[र्हि]). Vedic attestation: @deva[इदा हि यमुपस्तुतिभिदा वामस्य भक्तये] (Ṛg Veda VIII.27.11). Also @deva[इदानीम्], @deva[तदानीम्] apply."
            }
        },
        "53021": {
            "en": {
                "simple": "The affix @deva[र्हिल्] optionally comes after @deva[किम्], pronouns, and @deva[बहु] when denoting time that is not the current day. Examples: @deva[कर्हि] or @deva[कदा] (when), @deva[तर्हि] or @deva[तदा] (then).",
                "standard": "The affix @deva[र्हिल्] optionally attaches to @deva[किम्], @deva[सर्वनामन्], and @deva[बहु] when time not of the current day is denoted. This creates doublets with @deva[दा]: @deva[कर्हि] ~ @deva[कदा] (when), @deva[यर्हि] ~ @deva[यदा] (when), @deva[तर्हि] ~ @deva[तदा] (then).",
                "advanced": "This is a general rule (not @deva[छन्दस्]) for @deva[र्हिल्] with @deva[विकल्प] against @deva[दा]. The condition @deva[अनद्यतने] restricts to non-current-day time reference. Stem changes by @ref[7.2.102-104]: @deva[किम्] → @deva[क], @deva[तद्] → @deva[त], @deva[यद्] → @deva[य]. Forms: @deva[कर्हि]/deva[कदा], @deva[यर्हि]/deva[यदा], @deva[तर्हि]/deva[तदा]. The @deva[अनुवृत्ति] of @deva[छन्दसि] does not continue here."
            }
        },
        "53022": {
            "en": {
                "simple": "The following words are irregular formations for time: @deva[सद्यः] (same day), @deva[परुत्] (last year), @deva[परारि] (year before last), @deva[ऐषमः] (this year), @deva[परेद्यवि] (another day), @deva[अद्य] (today), and various @deva[-एद्युस्] compounds (on X day).",
                "standard": "These fourteen time-words are @deva[निपातन] (irregular): @deva[सद्यः] (@deva[समान] → @deva[स] + @deva[द्यस्], same day), @deva[परुत्] (@deva[पूर्व] → @deva[पर] + @deva[उत्], last year), @deva[परारि] (year before last), @deva[ऐषमः] (@deva[इदम्] → @deva[इश] + @deva[समस्], this year), @deva[परेद्यवि] (other day), @deva[अद्य] (@deva[अद्य]-substitute + @deva[द्यस्], today), and @deva[-एद्युस्] forms: @deva[पूर्वेद्युस्], @deva[अन्येद्युस्], @deva[अन्यतरेद्युस्], @deva[इतरेद्युस्], @deva[अपरेद्युस्], @deva[अधरेद्युस्], @deva[उभयेद्युस्], @deva[उत्तरेद्युस्].",
                "advanced": "This @deva[निपातन] lists fourteen irregular time-adverbs requiring special derivations: (1) @deva[सद्यः]: @deva[समान] → @deva[स] + @deva[द्यस्] (@deva[अहन्]-meaning); (2) @deva[परुत्]: @deva[पूर्व]/deva[पूर्वतर] → @deva[पर] + @deva[उत्] (@deva[संवत्सर]); (3) @deva[परारि]: @deva[पूर्वतर] → @deva[पर] + @deva[आरि]; (4) @deva[ऐषमः]: @deva[इदम्] → @deva[इश] + @deva[समस्]; (5) @deva[परेद्यवि]: @deva[पर] + @deva[एद्यवि]; (6) @deva[अद्य]: @deva[अद्य]-@deva[आदेश] + @deva[द्यस्]; (7-14) @deva[पूर्व/अन्य/अन्यतर/इतर/अपर/अधर/उभय/उत्तर] + @deva[एद्युस्] (@deva[अहन्]-meaning)."
            }
        },
        "53023": {
            "en": {
                "simple": "The affix @deva[थाल्] comes after @deva[किम्], pronouns, and @deva[बहु] to denote manner or kind. Examples: @deva[तथा] (in that manner, so), @deva[यथा] (as, in which manner), @deva[सर्वथा] (in every way).",
                "standard": "The affix @deva[थाल्] (@deva[था]) attaches to @deva[किम्], @deva[सर्वनामन्], and @deva[बहु] (excluding @deva[द्वि] etc.) to express @deva[प्रकार] (manner, kind). The @deva[ल्] is @deva[इत्]. Examples: @deva[तेन प्रकारेण] = @deva[तथा] (so); @deva[येन प्रकारेण] = @deva[यथा] (as); @deva[सर्वेण प्रकारेण] = @deva[सर्वथा] (in all ways).",
                "advanced": "The affix @deva[थाल्] applies per @ref[5.3.2] (@deva[किंसर्वनामबहुभ्यो ऽद्व्यादिभ्यः]) in @deva[प्रकारार्थ] (manner-meaning). The @deva[अनुवृत्ति] of @deva[सप्तम्याः काले] ceases. @deva[प्रकार] = differentiating quality of a species. Unlike @deva[जातीयर्] (@ref[5.3.69]) which applies to things possessing the quality, @deva[थाल्] denotes the mode itself. Hence both @deva[तथाजातीयः] and @deva[तथा] coexist."
            }
        },
        "53024": {
            "en": {
                "simple": "The affix @deva[थमु] comes after @deva[इदम्] to denote manner, blocking @deva[थाल्]. Example: @deva[इदम्] + @deva[थमु] → @deva[इत्थम्] (in this manner, thus).",
                "standard": "The affix @deva[थमु] (@deva[थम्]) replaces @deva[थाल्] after @deva[इदम्] in @deva[प्रकार] sense. The @deva[उ] protects @deva[म्] from becoming @deva[इत्] (see @ref[1.3.4]). By @ref[5.3.4], @deva[इदम्] → @deva[इत] before @deva[थ]-initial, giving @deva[इत्थम्] (in this manner).",
                "advanced": "The affix @deva[थमु] is @deva[अपवाद] to @deva[थाल्] after @deva[इदम्] in @deva[प्रकारार्थ]. The @deva[उकार] is @deva[इत्संज्ञाप्रतिषेधार्थ]—preventing @deva[म्] from being @deva[इत्] by @ref[1.3.4] @deva[न विभक्तौ तुस्माः]. By @ref[5.3.4], @deva[थादि प्राग्दिशीय] triggers @deva[इदम्] → @deva[इत]. Derivation: @deva[इदम्] → @deva[इत्] + @deva[थम्] → @deva[इत्थम्] 'thus'."
            }
        },
        "53025": {
            "en": {
                "simple": "The affix @deva[थमु] also comes after @deva[किम्] to denote manner. Example: @deva[किम्] + @deva[थमु] → @deva[कथम्] (how, in what manner).",
                "standard": "The affix @deva[थमु] (@deva[थम्]) also attaches to @deva[किम्] in @deva[प्रकार] sense, blocking @deva[थाल्]. By @ref[7.2.103], @deva[किम्] → @deva[क], giving @deva[कथम्] (how, in what manner).",
                "advanced": "This extends @deva[थमु] from @ref[5.3.24] to @deva[किम्] in @deva[प्रकारार्थ]. By @ref[7.2.103] @deva[किमः कः], @deva[किम्] → @deva[क] before @deva[थमु]. Derivation: @deva[किम्] → @deva[क] + @deva[थम्] → @deva[कथम्] 'how?' (@deva[केन प्रकारेण]). Both @deva[इत्थम्] and @deva[कथम्] take @deva[थमु] as @deva[अपवाद] to @deva[थाल्]."
            }
        },
        "53026": {
            "en": {
                "simple": "In Vedic usage, the affix @deva[था] comes after @deva[किम्] to denote cause or manner. Example: @deva[कथा] (why, wherefore; or how).",
                "standard": "In @deva[छन्दस्] (Vedic texts), the affix @deva[था] comes after @deva[किम्] to denote @deva[हेतु] (cause) or @deva[प्रकार] (manner). The @deva[चकार] includes @deva[प्रकार]. Examples: @deva[कथा ग्रामं न पृच्छसि] = 'why don't you ask about the village?'; @deva[कथा देवा आसन्] = 'how were the gods?'",
                "advanced": "This @deva[छन्दस्] rule teaches @deva[था] after @deva[किम्] in @deva[हेतु] (cause) and @deva[प्रकार] (manner) senses. The @deva[चकार] draws in @deva[प्रकारवचने] from context. @deva[कथा] = @deva[केन हेतुना] (for what reason) or @deva[केन प्रकारेण] (in what manner). This marks the end of @deva[विभक्तिसंज्ञक] affixes (@deva[इत्येते विभक्तिसंज्ञकाः])."
            }
        },
        "53027": {
            "en": {
                "simple": "The affix @deva[अस्ताति] (becoming @deva[अस्तात्]) comes after direction-words in locative, ablative, or nominative sense without changing meaning. Examples: @deva[पुरस्तात्] (in the east / from the east / previously).",
                "standard": "The affix @deva[अस्ताति] (@deva[अस्तात्]) attaches to @deva[दिक्शब्द] (direction-words) in @deva[सप्तमी] (locative), @deva[पञ्चमी] (ablative), or @deva[प्रथमा] (nominative) senses denoting direction, place, or time. This is @deva[स्वार्थिक] (same-meaning). Examples: @deva[पुरस्तात् वसति] (lives eastward); @deva[पुरस्तात् आगतः] (came from east); @deva[पुरस्तात् रमणीयम्] (it was pleasant before).",
                "advanced": "The affix @deva[अस्ताति] applies to primitive @deva[दिक्शब्द] (direction-words)—not derivatives like @deva[ऐन्द्री]—when expressing @deva[दिक्], @deva[देश], or @deva[काल] in @deva[सप्तमी/पञ्चमी/प्रथमा] senses. This is @deva[स्वार्थिक] like preceding affixes. @deva[यथासंख्य] (one-to-one correspondence) does not apply—any case with any meaning is valid. Non-application: @deva[पूर्वस्मिन् गुरौ] (metaphorical 'first guru')."
            }
        },
        "53028": {
            "en": {
                "simple": "The affix @deva[अतसुच्] (becoming @deva[अतस्]) comes after @deva[दक्षिण] (south) and @deva[उत्तर] (north) in the same senses, blocking @deva[अस्ताति]. Examples: @deva[दक्षिणतः] (to/from the south), @deva[उत्तरतः] (to/from the north).",
                "standard": "The affix @deva[अतसुच्] (@deva[अतस्]) replaces @deva[अस्ताति] after @deva[दक्षिण] and @deva[उत्तर] for direction/place/time meanings. @deva[दक्षिण] only takes direction and place senses (not time). Examples: @deva[दक्षिणतो वसति] (lives southward); @deva[दक्षिणत आगतः] (came from south); @deva[उत्तरतः] (northward/from north/later).",
                "advanced": "The affix @deva[अतसुच्] is @deva[अपवाद] to @deva[अस्ताति] after @deva[दक्षिण] and @deva[उत्तर]. The @deva[उच्] is @deva[इत्], leaving @deva[अतस्]. The initial @deva[अ] distinguishes from @deva[तस्] in rules like @ref[2.3.30]. @deva[दक्षिण] semantically excludes @deva[काल], so only @deva[दिक्/देश] apply. @deva[उत्तर] takes all three (@deva[उत्तरतः काले] = 'afterwards')."
            }
        },
        "53029": {
            "en": {
                "simple": "The affix @deva[अतसुच्] also optionally comes after @deva[पर] (far) and @deva[अवर] (near), alongside @deva[अस्ताति]. Examples: @deva[परतः] or @deva[परस्तात्] (beyond); @deva[अवरतः] or @deva[अवरस्तात्] (near).",
                "standard": "The affix @deva[अतसुच्] (@deva[अतस्]) optionally comes after @deva[पर] and @deva[अवर] in @deva[अस्ताति]-senses (direction/place/time). This creates doublets: @deva[परतः] ~ @deva[परस्तात्] (beyond, farther); @deva[अवरतः] ~ @deva[अवरस्तात्] (near, closer).",
                "advanced": "This rule extends @deva[अतसुच्] to @deva[पर] and @deva[अवर] with @deva[विकल्प] against @deva[अस्ताति]. Both affixes apply in @deva[दिक्/देश/काल] senses. Forms: @deva[परतः]/deva[परस्तात्] (@deva[दूरे] 'far'); @deva[अवरतः]/deva[अवरस्तात्] (@deva[समीपे] 'near'). Unlike @ref[5.3.28], here @deva[अतसुच्] doesn't block @deva[अस्ताति]."
            }
        },
        "53030": {
            "en": {
                "simple": "When direction-words end in @deva[अञ्च्] (like @deva[प्राच्], @deva[प्रत्यच्]), the affix @deva[अस्ताति] undergoes @deva[लुक्] (deletion). Example: @deva[प्राच्यां दिशि] → @deva[प्राक्] (eastward). The feminine affix is also deleted.",
                "standard": "After @deva[अञ्चति]-ending direction-words, @deva[अस्ताति] is deleted by @deva[लुक्]. Examples: @deva[प्राच्यां दिशि वसति] = @deva[प्राग् वसति] (lives eastward); @deva[प्रत्यक्] (westward). The feminine marker @deva[ङीप्] of @deva[प्राची] is also elided when the @deva[तद्धित] is @deva[लुक्]-deleted (see @ref[1.2.49]).",
                "advanced": "After @deva[दिक्शब्द] ending in @deva[अञ्च्]-pratyaya (@deva[प्राच्], @deva[प्रत्यच्], @deva[उदच्] etc.), @deva[अस्ताति] undergoes @deva[लुक्] (elision with @deva[स्थानिवद्भाव]). The @deva[स्त्रीप्रत्यय] @deva[ङीप्] is also deleted by @ref[1.2.49] @deva[लुकि स्त्रियाः च] when @deva[तद्धित] is @deva[लुक्]. Forms: @deva[प्राक्] (from @deva[प्राची] + @deva[अस्ताति] → @deva[लुक्]); @deva[प्रत्यक्]; @deva[उदक्] (northward)."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.3.16-30)")

if __name__ == "__main__":
    main()
