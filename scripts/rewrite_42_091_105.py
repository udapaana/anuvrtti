#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.2.91-4.2.105 (Batch 7 of 4.2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "42091": {
        "en": {
            "simple": "After @deva[नड] etc., @deva[कुक्] augment is added before @deva[छ]. Examples: @deva[नडकीयम्], @deva[प्लक्षकीयम्], @deva[क्रुञ्चकीयम्], @deva[तक्षकीयम्].",
            "standard": "After @deva[नडादि] words, the augment @deva[कुक्] (@deva[क्]) is inserted when affix @deva[छ] follows in the four-fold senses: @deva[नड] + @deva[कुक्] + @deva[छ] = @deva[नडकीयम्]; @deva[प्लक्षकीयम्]. The words @deva[क्रुञ्चा] and @deva[तक्षन्] also belong to this class: @deva[क्रुञ्चा] shortens its vowel → @deva[क्रुञ्चकीयम्]; @deva[तक्षन्] drops @deva[न्] → @deva[तक्षकीयम्].",
            "advanced": "This sūtra provides @deva[कुक्]-augment for @deva[नडादि] + @deva[छ]: @deva[नडकीयम्], @deva[प्लक्षकीयम्]. @deva[क्रुञ्चा] → vowel-shortening; @deva[तक्षन्] → @deva[न्]-elision."
        }
    },
    "42092": {
        "en": {
            "simple": "The affixes taught hereafter have senses other than those above (@deva[शेष]-senses). Example: @deva[चाक्षुषम्] (visible, i.e., color perceived by eye).",
            "standard": "The affixes taught from here onwards have @deva[शेष] (remaining) senses—meanings other than 'progeny' (@ref[4.1.92]) and the quadruple senses. @deva[शेष] = remainder. In these remaining senses, @deva[अण्] etc. apply. Example: @deva[चाक्षुषम्] (visible—color apprehended by the eye). The @deva[शेष]-senses include @deva[तत्र जातः] (@ref[4.3.25]) etc.",
            "advanced": "This sūtra introduces @deva[शेष]-senses (other than @deva[अपत्य] @ref[4.1.92] and four-fold senses). @deva[अण्] etc. apply: @deva[चाक्षुषम्]. @deva[शेष] includes @deva[तत्र जातः] (@ref[4.3.25]) etc."
        }
    },
    "42093": {
        "en": {
            "simple": "After @deva[राष्ट्र], @deva[घ] is used; after @deva[अवारपार], @deva[ख] is used. Examples: @deva[राष्ट्रियः], @deva[अवारपारीणः].",
            "standard": "After @deva[राष्ट्र] (country), affix @deva[घ] comes; after @deva[अवारपार] (both banks), affix @deva[ख] comes. @deva[घ] → @deva[इय] (@ref[7.1.2]); @deva[ख] → @deva[ईन] (@ref[7.1.2]). Thus: @deva[राष्ट्रियः] (born/produced in a country); @deva[अवारपारीणः] (extending to both banks). Vārtika: @deva[ख] also comes when @deva[अवार] and @deva[पार] are separate or compounded inversely: @deva[अवारीणः], @deva[पारीणः], @deva[पारावारीणः].",
            "advanced": "This sūtra provides @deva[घ] for @deva[राष्ट्र] and @deva[ख] for @deva[अवारपार]: @deva[राष्ट्रियः], @deva[अवारपारीणः]. @ref[7.1.2] substitutions. Vārtika: @deva[अवारीणः], @deva[पारीणः], @deva[पारावारीणः]."
        }
    },
    "42094": {
        "en": {
            "simple": "After @deva[ग्राम] (village), @deva[य] and @deva[खञ्] are used. Examples: @deva[ग्राम्यः], @deva[ग्रामीणः] (rustic).",
            "standard": "After @deva[ग्राम] (village), the affixes @deva[य] and @deva[खञ्] (@deva[ईन]) come in remaining senses: @deva[ग्राम्यः] (@deva[य]) and @deva[ग्रामीणः] (@deva[खञ्])—both meaning 'rustic, village-dweller'.",
            "advanced": "This sūtra provides @deva[य]/खञ् for @deva[ग्राम]: @deva[ग्राम्यः], @deva[ग्रामीणः]."
        }
    },
    "42095": {
        "en": {
            "simple": "After @deva[कत्रि] etc., @deva[ढकञ्] (@deva[एयक]) is used. Examples: @deva[कात्रेयकः], @deva[औम्भेयकः].",
            "standard": "After @deva[कत्र्यादि] words, the affix @deva[ढकञ्] (@deva[एयक]) comes in remaining senses: @deva[कात्रेयकः], @deva[औम्भेयकः]. The @deva[कत्र्यादि] list: @deva[कत्रि], @deva[उम्भि], @deva[पुष्कर], @deva[पुष्कल], @deva[मोदन], @deva[कुम्भी], @deva[कुण्डिन], @deva[नगरी], @deva[माहिष्मती], @deva[वर्मती], @deva[उख्या], @deva[ग्राम], @deva[कुड्या] (with @deva[य]-elision), @deva[वञ्जी], @deva[भक्ति].",
            "advanced": "This sūtra provides @deva[ढकञ्] for @deva[कत्र्यादि] (15 words): @deva[कात्रेयकः], @deva[औम्भेयकः], etc."
        }
    },
    "42096": {
        "en": {
            "simple": "After @deva[कुल]/कुक्षि/ग्रीवा, @deva[ढकञ्] is used with specific meanings: dog, sword, necklace. Examples: @deva[कौलेयकः] (dog), @deva[कौक्षेयकः] (sword), @deva[ग्रैवेयकः] (necklace).",
            "standard": "After @deva[कुल] (family), @deva[कुक्षि] (belly/sheath), @deva[ग्रीवा] (neck), the affix @deva[ढकञ्] comes with specific meanings: @deva[कौलेयकः] = dog (lit. 'pertaining to family'); @deva[कौक्षेयकः] = sword (lit. 'remaining in sheath'); @deva[ग्रैवेयकः] = necklace. When NOT having these meanings, the usual remaining senses apply: @deva[कौलेयकम्] (family property), @deva[ग्रैवेयकम्] (neck ornament in general).",
            "advanced": "This sūtra provides @deva[ढकञ्] for @deva[कुल]/कुक्षि/ग्रीवा with specific meanings: @deva[कौलेयकः] = dog; @deva[कौक्षेयकः] = sword; @deva[ग्रैवेयकः] = necklace. Otherwise, general @deva[शेष]-sense."
        }
    },
    "42097": {
        "en": {
            "simple": "After @deva[नदी] etc., @deva[ढक्] is used in remaining senses. Examples: @deva[नादेयम्] (pertaining to river), @deva[माहेयम्] (earthen).",
            "standard": "After @deva[नद्यादि] words, the affix @deva[ढक्] (@deva[एय]) comes in remaining senses (@deva[तत्र जातः] @ref[4.3.25] etc.): @deva[नादेयम्] (pertaining to a river), @deva[माहेयम्] (earthen, from @deva[मही]). The @deva[नद्यादि] list: @deva[नदी], @deva[मही], @deva[वाराणसी], @deva[श्रावस्ती], @deva[कीशाम्बी], @deva[वनकौशाम्बी], @deva[काशपरी], @deva[काशफरी], @deva[खादिरी], @deva[पूर्वनगरी], @deva[पाठा], @deva[माया], @deva[शाल्वा], etc.",
            "advanced": "This sūtra provides @deva[ढक्] for @deva[नद्यादि] in @deva[शेष]-sense: @deva[नादेयम्], @deva[माहेयम्]. List: @deva[नदी] through @deva[शाल्वा] etc."
        }
    },
    "42098": {
        "en": {
            "simple": "After @deva[दक्षिणा], @deva[पश्चात्], @deva[पुरस्], @deva[त्यक्] is used. Examples: @deva[दाक्षिणात्यः] (southern), @deva[पाश्चात्यः] (western), @deva[पौरस्त्यः] (eastern).",
            "standard": "After @deva[दक्षिणा] (south), @deva[पश्चात्] (west), @deva[पुरस्] (east), the affix @deva[त्यक्] (@deva[त्य]) comes in remaining senses: @deva[दाक्षिणात्यः] (pertaining to/produced in the south); @deva[पाश्चात्यः] (occidental, western); @deva[पौरस्त्यः] (oriental, eastern). @deva[अपाच्] means south in some usages.",
            "advanced": "This sūtra provides @deva[त्यक्] for @deva[दक्षिणा]/पश्चात्/पुरस्: @deva[दाक्षिणात्यः], @deva[पाश्चात्यः], @deva[पौरस्त्यः]."
        }
    },
    "42099": {
        "en": {
            "simple": "After @deva[कापिशी], @deva[ष्फक्] is used; feminine takes @deva[ङीष्]. Examples: @deva[कापिशायनं मधु], @deva[कापिशायनी द्राक्षा] (liquor).",
            "standard": "After @deva[कापिशी], the affix @deva[ष्फक्] comes in remaining senses; the feminine is formed by @deva[ङीष्] (@ref[4.1.41]): @deva[कापिशायनं मधु] (Kāpiśa honey/wine), @deva[कापिशायनी द्राक्षा] (a type of grape-liquor). Vārtika: Also after @deva[बाह्लि], @deva[उर्दि], @deva[पर्दि]: @deva[बाह्लायनी], @deva[और्दायनी], @deva[पार्दायनी]. This debars @deva[वुञ्] of @ref[4.2.125].",
            "advanced": "This sūtra provides @deva[ष्फक्] for @deva[कापिशी]: @deva[कापिशायनम्], @deva[कापिशायनी] (f. by @deva[ङीष्] @ref[4.1.41]). Vārtika: @deva[बाह्लि]/उर्दि/पर्दि → @deva[बाह्लायनी] etc. Debars @deva[वुञ्] @ref[4.2.125]."
        }
    },
    "42100": {
        "en": {
            "simple": "After @deva[रंकु], @deva[ष्फक्] and @deva[अण्] are used for non-human beings. Examples: @deva[राङ्कवो गौः] or @deva[राङ्कवायणो गौः] (cow from Raṅku); @deva[राङ्कवको मनुष्यः] (human from Raṅku).",
            "standard": "After @deva[रंकु], the affixes @deva[ष्फक्] and @deva[अण्] come in remaining senses when the meaning is a non-human being: @deva[राङ्कवो गौः] (@deva[अण्]) or @deva[राङ्कवायणो गौः] (@deva[ष्फक्])—cow from Raṅku region. For humans: @deva[राङ्कवको मनुष्यः] (by @deva[वुञ्] per @ref[4.2.134], since @deva[रंकु] is in @deva[कच्छादि] class @ref[4.2.133]).",
            "advanced": "This sūtra provides @deva[ष्फक्]/अण् for @deva[रंकु] when non-human: @deva[राङ्कवः]/राङ्कवायणः (गौ). Human: @deva[राङ्कवकः] (@deva[वुञ्] @ref[4.2.134], @deva[कच्छादि] @ref[4.2.133])."
        }
    },
    "42101": {
        "en": {
            "simple": "After @deva[दिव्], @deva[प्राच्], @deva[अपाच्], @deva[उदच्], @deva[प्रत्यच्], @deva[यत्] is used. Examples: @deva[दिव्यम्], @deva[प्राच्यम्], @deva[अपाच्यम्], @deva[उदीच्यम्], @deva[प्रतीच्यम्].",
            "standard": "After @deva[दिव्] (heaven), @deva[प्राच्] (east), @deva[अपाच्] (south), @deva[उदच्] (north), @deva[प्रत्यच्] (west), the affix @deva[यत्] comes in remaining senses: @deva[दिव्य॑म्] (heavenly), @deva[प्रा॑च्यम्] (eastern), @deva[अपाच्य॑म्] (southern), @deva[उदीच्य॑म्] (@ref[4.4.130]), @deva[प्रतीच्य॑म्] (western). For accent, see @ref[6.1.213]. When these are indeclinables denoting time, they also take @deva[त्यु]/त्युल्: @deva[प्राक्तनम्] (@ref[4.3.25]).",
            "advanced": "This sūtra provides @deva[यत्] for @deva[दिव्]/प्राच्/अपाच्/उदच्/प्रत्यच्: @deva[दिव्यम्], @deva[प्राच्यम्], @deva[अपाच्यम्], @deva[उदीच्यम्] (@ref[4.4.130]), @deva[प्रतीच्यम्]. @ref[6.1.213] accent. @deva[त्यु]/त्युल् for time-indeclinables."
        }
    },
    "42102": {
        "en": {
            "simple": "After @deva[कन्था] (patched cloth), @deva[ठक्] is used. Example: @deva[कान्थिकः].",
            "standard": "After @deva[कन्था] (patched cloth/rag), the affix @deva[ठक्] comes in remaining senses: @deva[कान्थिकः] (relating to patched cloth).",
            "advanced": "This sūtra provides @deva[ठक्] for @deva[कन्था]: @deva[कान्थिकः]."
        }
    },
    "42103": {
        "en": {
            "simple": "After @deva[कन्था], @deva[वुक्] is used when referring to something in @deva[वर्णु] land. Example: @deva[कान्थकम्].",
            "standard": "After @deva[कन्था], the affix @deva[वुक्] (@deva[अक]) is added when the word treats about something found in the land of @deva[वर्णु] (a river and the country near it): @deva[कान्थकम्] (Kanthaka from Varṇu region). The affix denoting the country @deva[वर्णु] is elided by @ref[4.2.81].",
            "advanced": "This sūtra provides @deva[वुक्] for @deva[कन्था] in @deva[वर्णु]-context: @deva[कान्थकम्]. @deva[वर्णु]-country affix elided by @ref[4.2.81]."
        }
    },
    "42104": {
        "en": {
            "simple": "After indeclinables (@deva[अव्यय]), @deva[त्यप्] is used. Examples: @deva[अमात्यः] (minister), @deva[इहत्यः] (here-person).",
            "standard": "After indeclinables (@deva[अव्यय]), the affix @deva[त्यप्] comes in remaining senses. Kārikā: This is restricted to specific indeclinables—@deva[अमा] (together), @deva[इह] (here), @deva[क्व] (where), and those ending in @deva[तसि] (@ref[5.3.7]) or @deva[त्र] (@ref[5.3.10]). Examples: @deva[अमात्यः] (minister, lit. 'one together with'); @deva[इहत्यः] (local, of this place).",
            "advanced": "This sūtra provides @deva[त्यप्] for @deva[अव्यय]. Kārikā restricts to: @deva[अमा], @deva[इह], @deva[क्व], @deva[तसि]-ending (@ref[5.3.7]), @deva[त्र]-ending (@ref[5.3.10]). @deva[अमात्यः], @deva[इहत्यः]."
        }
    },
    "42105": {
        "en": {
            "simple": "After @deva[ऐषमस्], @deva[ह्यस्], @deva[श्वस्], @deva[त्यप्] is optionally used. Examples: @deva[ऐषमस्त्यम्]/ऐषमस्तनम्, @deva[ह्यस्त्यम्]/ह्यस्तनम्, @deva[श्वस्त्यम्]/श्वस्तनम्.",
            "standard": "After @deva[ऐषमस्] (of yesterday), @deva[ह्यस्] (yesterday), @deva[श्वस्] (tomorrow), the affix @deva[त्यप्] optionally comes in remaining senses: @deva[ऐषमस्त्यम्] (@deva[त्यप्]) or @deva[ऐषमस्तनम्] (@ref[4.3.23]); @deva[ह्यस्त्यम्] or @deva[ह्यस्तनम्]; @deva[श्वस्त्यम्] or @deva[श्वस्तनम्] (@ref[4.3.23]) or @deva[शौवस्तिकम्] (@ref[4.3.15]). @deva[श्वस्] also takes augment @deva[तुट्], hence three forms.",
            "advanced": "This sūtra provides optional @deva[त्यप्] for @deva[ऐषमस्]/ह्यस्/श्वस्: @deva[ऐषमस्त्यम्]/ऐषमस्तनम् (@ref[4.3.23]); @deva[ह्यस्त्यम्]/ह्यस्तनम्; @deva[श्वस्त्यम्]/श्वस्तनम्/शौवस्तिकम् (@ref[4.3.15]). @deva[श्वस्] + @deva[तुट्]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.2.91-4.2.105 (Batch 7 of 4.2)")
