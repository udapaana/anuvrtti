#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 4.4.106-120."""

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
        "44106": {
            "en": {
                "simple": "In the Vedas (@deva[छन्दस्]), the affix @deva[ढ] (instead of @deva[यत्]) comes after the word @deva[सभा] in the sense of 'excellent in that'.\n\nExample: @deva[सभेयः] 'fit for society' in the Vedic verse @deva[सभेयोऽस्य युवा यजमानस्य वीरो जायताम्] 'let a refined, youthful hero be born to this sacrificer'",
                "standard": "In @deva[छन्दस्], after @deva[सभा], @deva[ढ] (not @deva[यत्]) applies in sense @deva[साधुः].\n\nExample: @deva[सभेयः] in @deva[सभेयोऽस्य युवा यजमानस्य वीरो जायताम्].",
                "advanced": "@deva[सभा] takes @deva[ढ] (not @deva[यत्]) in @deva[छन्दस्], sense @deva[साधुः].\n\nExample: @deva[सभेयोऽस्य युवा यजमानस्य वीरो जायताम्]."
            }
        },
        "44107": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[समानतीर्थ] in the locative case, in the sense of 'one who resides there'.\n\nNote: The @deva[अनुवृत्ति] of @deva[साधुः] (excellent) now ceases.\n\nHere @deva[तीर्थ] means @deva[गुरु] (preceptor).\n\nExample: @deva[समाने तीर्थे वासी] 'one who dwells with the same preceptor' → @deva[सतीर्थ्यः] 'a fellow-student' (by @ref[6.3.87])",
                "standard": "After @deva[समानतीर्थ] (in @deva[सप्तमी]), @deva[यत्] applies in sense @deva[वासी] (resident). @deva[साधुः]-@deva[अनुवृत्ति] ceases.\n\n@deva[तीर्थ] = @deva[गुरु] (preceptor).\n\nExample: @deva[समाने तीर्थे वासी] → @deva[सतीर्थ्यः] 'fellow-student' (@ref[6.3.87]).",
                "advanced": "@deva[समानतीर्थ] (in @deva[सप्तमी]) takes @deva[यत्] in sense @deva[वासी]. @deva[साधु]-@deva[अनुवृत्ति] ceases.\n\n@deva[तीर्थ] = @deva[गुरु].\n\nExample: @deva[सतीर्थ्यः] (@ref[6.3.87])."
            }
        },
        "44108": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[समानोदर] (same womb) in the locative case, in the sense of 'one who sleeps there'. The @deva[उदात्त] accent falls on the @deva[ओ].\n\nThe word @deva[शयित] is equivalent to @deva[स्थितः] (remained).\n\nExample: @deva[समानोदरे शयितः] 'one who remained in the same womb' → @deva[समानोदर्यः] 'uterine brother' (see @ref[6.3.88])",
                "standard": "After @deva[समानोदर] (in @deva[सप्तमी]), @deva[यत्] applies in sense @deva[शयितः] (slept/remained). @deva[उदात्त] on @deva[ओ].\n\n@deva[शयित] = @deva[स्थितः].\n\nExample: @deva[समानोदरे शयितः] → @deva[समानोदर्यः] 'uterine brother' (@ref[6.3.88]).",
                "advanced": "@deva[समानोदर] (in @deva[सप्तमी]) takes @deva[यत्] in sense @deva[शयितः]. @deva[ओकारोदात्त].\n\nExample: @deva[समानोदर्यः] (@ref[6.3.88])."
            }
        },
        "44109": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[सोदर] (same womb) in the locative case, in the sense of 'one who sleeps there'.\n\nBy @ref[6.3.88], @deva[समान] is optionally changed to @deva[स] before @deva[उदर] when @deva[यत्] follows.\n\nExample: @deva[समानोदरे शयितः] → @deva[सोदर्यः] 'uterine brother'\n\nHere the @deva[उदात्त] falls on @deva[य], not on @deva[ओ] as in the previous sūtra.",
                "standard": "After @deva[सोदर] (in @deva[सप्तमी]), @deva[यत्] applies in sense @deva[शयितः].\n\n@ref[6.3.88]: @deva[समान] optionally → @deva[स] before @deva[उदर] when @deva[यत्] follows.\n\nExample: @deva[सोदर्यः] 'uterine brother' (@deva[य]-@deva[उदात्त], not @deva[ओ]-@deva[उदात्त] as in @ref[4.4.108]).",
                "advanced": "@deva[सोदर] (in @deva[सप्तमी]) takes @deva[यत्] in sense @deva[शयितः].\n\n@ref[6.3.88]: @deva[समान] → @deva[स] optionally.\n\nExample: @deva[सोदर्यः] (@deva[यकारोदात्त])."
            }
        },
        "44110": {
            "en": {
                "simple": "In the Vedas (@deva[छन्दस्]), the affix @deva[यत्] comes after a word in the locative case in the sense of 'what stays there'.\n\nThis supersedes @deva[अण्], @deva[घ], etc. from @ref[4.3.53], though those affixes may also be used optionally due to Vedic flexibility.\n\nExamples from @deva[यजुर्वेद] (16.5.38): @deva[नमो मेघ्याय च विदुत्याय च] 'Homage to that which dwells in clouds and lightning'\n\nAll sūtras from here to the end of the chapter are Vedic. The word @deva[भवः] (dwells) governs sūtras through @ref[4.4.118].",
                "standard": "In @deva[छन्दस्], after @deva[सप्तम्यन्त], @deva[यत्] applies in sense @deva[भवः] (dwells). This supersedes @deva[अण्]/[@deva[घ] (@ref[4.3.53]), though those may optionally apply in Vedas.\n\nExample (@deva[यजुर्वेद] 16.5.38): @deva[नमो मेघ्याय च विदुत्याय च].\n\nAll remaining sūtras in this chapter are @deva[छान्दस]. @deva[भवः] governs through @ref[4.4.118].",
                "advanced": "In @deva[छन्दस्], @deva[सप्तम्यन्त] takes @deva[यत्] in sense @deva[तत्र भवः]. Supersedes @deva[अण्]/[@deva[घ] (@ref[4.3.53]); alternative use possible.\n\nExample: @deva[मेघ्यः], @deva[विदुत्यः] (@deva[यजुर्वेद] 16.5.38).\n\nAll subsequent sūtras are @deva[छान्दस]. @deva[भवः] governs through @ref[4.4.118]."
            }
        },
        "44111": {
            "en": {
                "simple": "In the Vedas, the affix @deva[ड्यण्] comes after the words @deva[पाथस्] (firmament) and @deva[नदी] (river) in the sense of 'what stays there'. The @deva[ड्] causes elision of the final vowel plus following consonant.\n\nThis supersedes @deva[यत्].\n\nExamples:\n- @deva[पाथसि भवः] → @deva[पाथ्यः] (as in @deva[तमुत्वा पाथ्यो वृषा])\n- @deva[नद्यां भवः] → @deva[नाद्यः] (as in @deva[च नो दधीत नाद्यो गिरो मे])\n\n@deva[पाथस्] means 'firmament'.",
                "standard": "In @deva[छन्दस्], after @deva[पाथस्] and @deva[नदी], @deva[ड्यण्] applies in sense @deva[भवः]. @deva[ड्] causes elision of final vowel + consonant.\n\nExamples:\n- @deva[पाथ्यः] (@deva[तमुत्वा पाथ्यो वृषा])\n- @deva[नाद्यः] (@deva[च नो दधीत नाद्यो गिरो मे])\n\n@deva[पाथस्] = firmament.",
                "advanced": "@deva[पाथस्] and @deva[नदी] take @deva[ड्यण्] in @deva[छन्दस्], sense @deva[भवः]. @deva[ड्] → @deva[अन्त्यलोप].\n\nExamples: @deva[पाथ्यः], @deva[नाद्यः]."
            }
        },
        "44112": {
            "en": {
                "simple": "In the Vedas, the affix @deva[अण्] comes after the words @deva[वेशन्त] and @deva[हिमवत्] in the sense of 'what stays there'.\n\nThis supersedes @deva[यत्].\n\nExamples from Vedic mantras:\n- @deva[वैशन्तीभ्यः स्वाहा] 'Oblation to those dwelling in @deva[वेशन्त]'\n- @deva[हैमवतीभ्यः स्वाहा] 'Oblation to those dwelling in the Himalayas'",
                "standard": "In @deva[छन्दस्], after @deva[वेशन्त] and @deva[हिमवत्], @deva[अण्] applies in sense @deva[भवः].\n\nExamples: @deva[वैशन्तीभ्यः स्वाहा], @deva[हैमवतीभ्यः स्वाहा].",
                "advanced": "@deva[वेशन्त] and @deva[हिमवत्] take @deva[अण्] in @deva[छन्दस्], sense @deva[भवः].\n\nExamples: @deva[वैशन्तीभ्यः स्वाहा], @deva[हैमवतीभ्यः स्वाहा]."
            }
        },
        "44113": {
            "en": {
                "simple": "In the Vedas, the affixes @deva[ड्यत्] and @deva[ड्य] come after the word @deva[स्रोतस्] (stream) in the sense of 'what stays there'. Before these affixes, the final @deva[अस्] of @deva[स्रोतस्] is elided.\n\nThis supersedes @deva[यत्], which may also be used optionally.\n\nExamples:\n- With @deva[ड्यत्]: @deva[स्रोतसि भवः] → @deva[स्रोत्यः]\n- With @deva[ड्य]: @deva[स्रोत्यः] (different accent by @ref[3.1.3], @ref[6.1.185])\n- With @deva[यत्]: @deva[स्रोतस्यः]",
                "standard": "In @deva[छन्दस्], after @deva[स्रोतस्], @deva[ड्यत्] and @deva[ड्य] apply in sense @deva[भवः]. @deva[ड्] causes @deva[अस्]-elision. @deva[यत्] optional.\n\nExamples:\n- @deva[ड्यत्]: @deva[स्रोत्यः]\n- @deva[ड्य]: @deva[स्रोत्यः] (different accent: @ref[3.1.3], @ref[6.1.185])\n- @deva[यत्]: @deva[स्रोतस्यः]",
                "advanced": "@deva[स्रोतस्] takes @deva[ड्यत्]/[@deva[ड्य] in @deva[छन्दस्], sense @deva[भवः]. @deva[ड्] → @deva[अस्]-@deva[लोप]. @deva[यत्] optional.\n\nExamples: @deva[स्रोत्यः] (@deva[ड्यत्]/[@deva[ड्य]), @deva[स्रोतस्यः] (@deva[यत्]). Accent differs by @ref[3.1.3], @ref[6.1.185]."
            }
        },
        "44114": {
            "en": {
                "simple": "The affix @deva[यन्] comes after the words @deva[सगर्भ] (same womb), @deva[सयूथ] (same herd), and @deva[सनुत] (hidden) in the sense of 'what stays there'.\n\nThis supersedes @deva[यत्], with the difference being in accent (@ref[6.1.197]).\n\nExamples:\n- @deva[सगर्भ्यः] = @deva[अनुभ्राता] 'younger brother' (one from the same womb)\n- @deva[सयूथ्यः] = @deva[अनुसखा] 'younger friend' (one from the same group)\n- @deva[सनुत्यः] 'thief' (one who stays in a hidden place) as in @deva[ऋग्वेद] II.31.9: @deva[यो नः सनुत्यः उत वा जिघन्तु]\n\nNote: In Vedas, @deva[समान] is always changed to @deva[स] (@ref[6.3.84]).",
                "standard": "After @deva[सगर्भ], @deva[सयूथ], @deva[सनुत], @deva[यन्] applies in sense @deva[भवः]. Supersedes @deva[यत्] (accent difference by @ref[6.1.197]).\n\nExamples:\n- @deva[सगर्भ्यः] 'younger brother'\n- @deva[सयूथ्यः] 'younger friend'\n- @deva[सनुत्यः] 'thief' (@deva[ऋग्वेद] II.31.9: @deva[यो नः सनुत्यः उत वा जिघन्तु])\n\nIn @deva[छन्दस्], @deva[समान] → @deva[स] always (@ref[6.3.84]).",
                "advanced": "@deva[सगर्भ], @deva[सयूथ], @deva[सनुत] take @deva[यन्] in sense @deva[भवः]. Accent differs from @deva[यत्] (@ref[6.1.197]).\n\nExamples: @deva[सगर्भ्यः], @deva[सयूथ्यः], @deva[सनुत्यः] (@deva[ऋग्वेद] II.31.9).\n\n@deva[समान] → @deva[स] in @deva[छन्दस्] (@ref[6.3.84])."
            }
        },
        "44115": {
            "en": {
                "simple": "In the Vedas, the affix @deva[घन्] comes after the word @deva[तुग्र] in the sense of 'what stays there'.\n\nThis supersedes @deva[यत्].\n\nExample: @deva[तुग्रियः] as in @deva[त्वमग्रे वृषभः तुग्रियाणाम्]\n\nIt also appears as @deva[तुग्र्य] (with accent shift): @deva[आवः शमं वृषभं तुग्र्यासु] (@deva[ऋग्वेद] I.34.15)\n\n@deva[तुग्र्य] means 'sunk in waters'. The word @deva[तुग्र] has meanings: food, firmament, sacrifice, and @deva[वरिष्ठ].",
                "standard": "In @deva[छन्दस्], after @deva[तुग्र], @deva[घन्] applies in sense @deva[भवः].\n\nExamples: @deva[तुग्रियः] (@deva[त्वमग्रे वृषभः तुग्रियाणाम्]); @deva[तुग्र्य] (@deva[ऋग्वेद] I.34.15: @deva[आवः शमं वृषभं तुग्र्यासु]).\n\n@deva[तुग्र्य] = sunk in waters. @deva[तुग्र] = food, firmament, sacrifice, @deva[वरिष्ठ].",
                "advanced": "@deva[तुग्र] takes @deva[घन्] in @deva[छन्दस्], sense @deva[भवः].\n\nExamples: @deva[तुग्रियः], @deva[तुग्र्य] (@deva[ऋग्वेद] I.34.15).\n\n@deva[तुग्र] = @deva[अन्न], @deva[अन्तरिक्ष], @deva[यज्ञ], @deva[वरिष्ठ]."
            }
        },
        "44116": {
            "en": {
                "simple": "In the Vedas, the affix @deva[यत्] comes after the word @deva[अग्र] (foremost) in the sense of 'what stays there'.\n\nExample: @deva[अग्रे भवम्] → @deva[अग्र्यम्] 'foremost'\n\nWhy state this separately when @deva[यत्] would come by the general rule @ref[4.4.110]? The repetition indicates that @deva[यत्] is not superseded by @deva[घ] and @deva[छ] of the next sūtra—without this, those affixes would have blocked @deva[यत्].",
                "standard": "In @deva[छन्दस्], after @deva[अग्र], @deva[यत्] applies in sense @deva[भवः].\n\nExample: @deva[अग्र्यम्].\n\nWhy restate? @deva[यत्] comes by @ref[4.4.110]. Repetition shows @deva[यत्] is not blocked by @deva[घच्]/[@deva[छ] of @ref[4.4.117].",
                "advanced": "@deva[अग्र] takes @deva[यत्] in @deva[छन्दस्], sense @deva[भवः].\n\nExample: @deva[अग्र्यम्].\n\nRepetition from @ref[4.4.110] indicates @deva[यत्] not blocked by @deva[घच्]/[@deva[छ] (@ref[4.4.117])."
            }
        },
        "44117": {
            "en": {
                "simple": "In the Vedas, the affixes @deva[घच्] and @deva[छ] come after the word @deva[अग्र] in the sense of 'what stays there'.\n\nExamples:\n- With @deva[यत्]: @deva[अग्र्यम्]\n- With @deva[छ]: @deva[अग्रीयम्]\n- With @deva[घच्]: @deva[अग्रियम्]\n- With @deva[घन्] (from @ref[4.4.115]): @deva[अग्रियम्]\n\nSee @deva[ऋग्वेद] I.13.10: @deva[इह त्वष्टारम् अग्रियम्]",
                "standard": "In @deva[छन्दस्], after @deva[अग्र], @deva[घच्] and @deva[छ] apply in sense @deva[भवः].\n\nForms:\n- @deva[यत्]: @deva[अग्र्यम्]\n- @deva[छ]: @deva[अग्रीयम्]\n- @deva[घच्]: @deva[अग्रियम्]\n- @deva[घन्] (@ref[4.4.115]): @deva[अग्रियम्]\n\n@deva[ऋग्वेद] I.13.10: @deva[इह त्वष्टारम् अग्रियम्].",
                "advanced": "@deva[अग्र] takes @deva[घच्]/[@deva[छ] in @deva[छन्दस्], sense @deva[भवः].\n\nForms: @deva[अग्र्यम्] (@deva[यत्]), @deva[अग्रीयम्] (@deva[छ]), @deva[अग्रियम्] (@deva[घच्]/[@deva[घन्]).\n\n@deva[ऋग्वेद] I.13.10 (Sāyaṇa): @deva[इह त्वष्टारम् अग्रियम्]."
            }
        },
        "44118": {
            "en": {
                "simple": "In the Vedas, the affix @deva[घ] comes after the words @deva[समुद्र] (ocean) and @deva[अभ्र] (cloud) in the sense of 'what stays there'.\n\nThis supersedes @deva[यत्].\n\nExamples:\n- @deva[समुद्रियः] as in @deva[समुद्रिया अप्सरसो मनीषिणम्]\n- @deva[अभ्रियः] as in @deva[नानदतो अभ्रियस्येव घोषाः] 'like the thundering of one dwelling in clouds'\n\nNote: @deva[अभ्र], being shorter than @deva[समुद्र], should come first—its placement second is irregular.",
                "standard": "In @deva[छन्दस्], after @deva[समुद्र] and @deva[अभ्र], @deva[घ] applies in sense @deva[भवः].\n\nExamples:\n- @deva[समुद्रियः] (@deva[समुद्रिया अप्सरसो मनीषिणम्])\n- @deva[अभ्रियः] (@deva[नानदतो अभ्रियस्येव घोषाः])\n\nNote: @deva[अभ्र] (shorter) should precede @deva[समुद्र]; order is irregular.",
                "advanced": "@deva[समुद्र] and @deva[अभ्र] take @deva[घ] in @deva[छन्दस्], sense @deva[भवः].\n\nExamples: @deva[समुद्रियः], @deva[अभ्रियः].\n\n@deva[अभ्र] (अल्पाच्तर) listed second is @deva[अनित्यक्रम]."
            }
        },
        "44119": {
            "en": {
                "simple": "In the Vedas, the affix @deva[यत्] comes after the word @deva[बर्हिस्] (sacred grass) in the locative case, in the sense of 'given'.\n\nNote: The @deva[अनुवृत्ति] of @deva[तत्र भवः] (dwells there) now ceases.\n\nExample from @deva[ऋग्वेद] I.15.5: @deva[बर्हिष्येषु निधिषु प्रियेषु] 'among the offerings placed on the sacred grass'",
                "standard": "In @deva[छन्दस्], after @deva[बर्हिस्] (in @deva[सप्तमी]), @deva[यत्] applies in sense @deva[दत्तम्] (given). @deva[तत्र भवः]-@deva[अनुवृत्ति] ceases.\n\nExample (@deva[ऋग्वेद] I.15.5): @deva[बर्हिष्येषु निधिषु प्रियेषु].",
                "advanced": "@deva[बर्हिस्] (in @deva[सप्तमी]) takes @deva[यत्] in @deva[छन्दस्], sense @deva[दत्तम्]. @deva[तत्र भवः] ceases.\n\nExample: @deva[बर्हिष्येषु निधिषु प्रियेषु] (@deva[ऋग्वेद] I.15.5)."
            }
        },
        "44120": {
            "en": {
                "simple": "In the Vedas, the affix @deva[यत्] comes after the word @deva[दूत] (messenger) in the genitive case, in the sense of 'its share' or 'its duty'.\n\nExample: @deva[दूत्यम्] 'the work/share of a messenger' as in @deva[यत् ते अग्ने दूत्यम्] 'what is your duty as messenger, O Agni'\n\nNote on accent: By @ref[6.1.213], the accent should be @deva[दूत्यम्] (initial @deva[उदात्त]), but the accented Vedic text reads @deva[दूत्यम्] (final @deva[उदात्त]).",
                "standard": "In @deva[छन्दस्], after @deva[दूत] (in @deva[षष्ठी]), @deva[यत्] applies in sense @deva[भाग] (share) or @deva[कर्म] (duty).\n\nExample: @deva[दूत्यम्] (@deva[यत् ते अग्ने दूत्यम्]).\n\nAccent: @ref[6.1.213] predicts @deva[दूत्यम्] (initial @deva[उदात्त]); actual Vedic text has final @deva[उदात्त].",
                "advanced": "@deva[दूत] (in @deva[षष्ठी]) takes @deva[यत्] in @deva[छन्दस्], sense @deva[भाग]/[@deva[कर्म].\n\nExample: @deva[दूत्यम्].\n\nAccent: @ref[6.1.213] → @deva[दूत्यम्] (आद्युदात्त); actual @deva[पाठ] has अन्तोदात्त."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.4.106-120)")

if __name__ == "__main__":
    main()
