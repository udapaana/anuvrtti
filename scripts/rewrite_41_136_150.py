#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.1.136-4.1.150 (Batch 10 of 4.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "41136": {
        "en": {
            "simple": "The @deva[गृष्टि] class words take @deva[ढञ्] for descendant meaning. Example: @deva[गार्ष्टेयः], @deva[हार्ष्टेयः].",
            "standard": "After @deva[गृष्टि] etc., @deva[ढञ्] (not @deva[अण्] or @deva[ढक्]) is used for descendant meaning. @deva[गृष्टि] + @deva[ढञ्] = @deva[गार्ष्टेयः], @deva[हृष्टि] → @deva[हार्ष्टेयः]. Note: @deva[गृष्टि] meaning 'cow' takes @deva[ढञ्] by @ref[4.1.135] (quadruped rule). This sūtra applies when @deva[गृष्टि] means 'a woman who has one child only' (not quadruped). 8-word list: @deva[गृष्टि], @deva[हृष्टि], @deva[बलि], @deva[हलि], @deva[विश्रि], @deva[कुद्रि], @deva[अजवस्ति], @deva[मित्रयु].",
            "advanced": "This sūtra provides @deva[ढञ्] for @deva[गृष्टयादि], debarring @deva[अण्]/ढक्: @deva[गार्ष्टेयः], @deva[हार्ष्टेयः]. @deva[गृष्टि] 'cow' → @deva[ढञ्] by @ref[4.1.135]; @deva[गृष्टि] 'woman with one child' → @deva[ढञ्] by this sūtra. 8 words: @deva[गृष्टि], @deva[हृष्टि], @deva[बलि], @deva[हलि], @deva[विश्रि], @deva[कुद्रि], @deva[अजवस्ति], @deva[मित्रयु]."
        }
    },
    "41137": {
        "en": {
            "simple": "After @deva[राजन्] and @deva[श्वशुर], @deva[यत्] is used for descendant meaning. @deva[राजन्यः] means 'Kṣatriya class' (not 'son of a king'). @deva[श्वशुर्यः] means 'son of father-in-law'.",
            "standard": "After @deva[राजन्] and @deva[श्वशुर], @deva[यत्] (not @deva[अण्]/अञ्) is used. @deva[राजन्यः] means 'a Kṣatriya' (class designation, not 'son of a king'—that would be @deva[राजनः]). @deva[श्वशुर] + @deva[यत्] = @deva[श्वशुर्यः] ('son of father-in-law'). The affix @deva[यत्] is specifically for class/relationship designation here.",
            "advanced": "This sūtra provides @deva[यत्] for @deva[राजन्]/श्वशुर, debarring @deva[अण्]/अञ्: @deva[राजन्यः] = @deva[क्षत्रियजाति] (not @deva[राजापत्य]—that = @deva[राजनः]); @deva[श्वशुर्यः]. @ref[4.4.168] also references @deva[राजन्य]."
        }
    },
    "41138": {
        "en": {
            "simple": "After @deva[क्षत्र], @deva[घ] is used for descendant meaning. @deva[क्षत्रियः] means 'a Kṣatriya' (class name). The son of @deva[क्षत्र] is @deva[क्षात्रिः].",
            "standard": "After @deva[क्षत्र], @deva[घ] (= @deva[इय]) is used: @deva[क्षत्र] + @deva[घ] = @deva[क्षत्रियः] ('a Kṣatriya'). This is a class/caste name, not a patronymic. The actual son of @deva[क्षत्र] would be @deva[क्षात्रिः] (by @deva[इञ्]). Note: this @deva[घ] should not be confused with the technical @deva[घ] meaning @deva[तरप्]/तमप् (@ref[1.1.22]).",
            "advanced": "This sūtra provides @deva[घ] (= @deva[इय]) for @deva[क्षत्र]: @deva[क्षत्रियः] = @deva[जातिसंज्ञा] (caste name). Actual @deva[अपत्य]: @deva[क्षात्रिः] (@deva[इञ्]). Caution: @deva[घ] here ≠ technical @deva[घ] (@deva[तरप्]/तमप्, @ref[1.1.22])."
        }
    },
    "41139": {
        "en": {
            "simple": "After @deva[कुल] and compounds ending in @deva[कुल], @deva[ख] (= @deva[ईन]) is used for descendant meaning. Examples: @deva[कुलीनः], @deva[आढ्यकुलीनः], @deva[श्रोत्रियकुलीनः].",
            "standard": "After @deva[कुल] and @deva[कुलान्त] compounds, @deva[ख] (= @deva[ईन]) is used: @deva[कुलीनः] (from good family), @deva[आढ्यकुलीनः] (from wealthy family), @deva[श्रोत्रियकुलीनः] (from learned family). The next sūtra (@ref[4.1.140]) teaches @deva[यत्]/ढकञ् for simple @deva[कुल]—this implies by @deva[ज्ञापक] that @deva[ख] applies to both simple @deva[कुल] and @deva[कुलान्त] compounds.",
            "advanced": "This sūtra provides @deva[ख] (= @deva[ईन]) for @deva[कुल] and @deva[कुलान्त] compounds: @deva[कुलीनः], @deva[आढ्यकुलीनः], @deva[श्रोत्रियकुलीनः]. @deva[ज्ञापक] from @ref[4.1.140]: @deva[यत्]/ढकञ् for @deva[अपूर्वपद कुल] implies @deva[ख] here covers both simple and compound @deva[कुल]."
        }
    },
    "41140": {
        "en": {
            "simple": "When @deva[कुल] is not preceded by a @deva[पद] (complete word), @deva[यत्] and @deva[ढकञ्] optionally apply. Examples: @deva[कुल्यः], @deva[कौलेयकः], @deva[कुलीनः].",
            "standard": "After @deva[कुल] when not the final member of a compound (@deva[अपूर्वपद]—not preceded by a @deva[पद] as defined in @ref[1.4.14]), @deva[यत्] and @deva[ढकञ्] are optional: @deva[कुल्यः] (by @deva[यत्], accent @deva[आद्युदात्त] @ref[6.1.213]), @deva[कौलेयकः] (by @deva[ढकञ्]). The word 'optionally' also permits @deva[ख]: @deva[कुलीनः]. Since @deva[बहु] is not a @deva[पद] (@deva[सुब्विभक्त्यन्त]), @deva[बहुकुल] takes these affixes: @deva[बहुकुल्यः], @deva[बाहुकुलेयकः], @deva[बहुकुलीनः].",
            "advanced": "This sūtra provides optional @deva[यत्]/ढकञ् for @deva[कुल] when @deva[अपूर्वपद] (not compound-final): @deva[कुल्यः] (@deva[यत्], @deva[आद्युदात्त] @ref[6.1.213]), @deva[कौलेयकः] (@deva[ढकञ्]). @deva[विभाषा] permits @deva[ख]: @deva[कुलीनः]. @deva[बहु] ≠ @deva[पद] (@ref[1.4.14]), so @deva[बहुकुल्यः], @deva[बाहुकुलेयकः], @deva[बहुकुलीनः]."
        }
    },
    "41141": {
        "en": {
            "simple": "After @deva[महाकुल], @deva[अञ्] and @deva[खञ्] optionally apply. Examples: @deva[माहाकुलः], @deva[माहाकुलीनः], @deva[महाकुलीनः].",
            "standard": "After @deva[महाकुल], @deva[अञ्] and @deva[खञ्] are optional: @deva[माहाकुलः] (by @deva[अञ्]), @deva[माहाकुलीनः] (by @deva[खञ्]). The @deva[ख] of @ref[4.1.139] also applies: @deva[महाकुलीनः] (no @deva[वृद्धि] with @deva[ख]).",
            "advanced": "This sūtra provides optional @deva[अञ्]/खञ् for @deva[महाकुल]: @deva[माहाकुलः] (@deva[अञ्]), @deva[माहाकुलीनः] (@deva[खञ्]). @deva[ख] (@ref[4.1.139]) also: @deva[महाकुलीनः]."
        }
    },
    "41142": {
        "en": {
            "simple": "After @deva[दुष्कुल], @deva[ढक्] optionally applies. Examples: @deva[दौष्कुलेयः], @deva[दुष्कुलीनः].",
            "standard": "After @deva[दुष्कुल] (bad family), @deva[ढक्] is optional: @deva[दौष्कुलेयः] (by @deva[ढक्]). The word 'optionally' permits @deva[ख] (@ref[4.1.139]): @deva[दुष्कुलीनः].",
            "advanced": "This sūtra makes @deva[ढक्] optional for @deva[दुष्कुल]: @deva[दौष्कुलेयः]. @deva[विभाषा] permits @deva[ख] (@ref[4.1.139]): @deva[दुष्कुलीनः]."
        }
    },
    "41143": {
        "en": {
            "simple": "After @deva[स्वसृ] (sister), @deva[छ] is used for descendant meaning, debarring @deva[अण्]. Example: @deva[स्वस्रीयः] (sister's son).",
            "standard": "After @deva[स्वसृ] (sister), @deva[छ] (not @deva[अण्]) is used: @deva[स्वसृ] + @deva[छ] = @deva[स्वस्रीयः] ('the sister's son', i.e., nephew through sister).",
            "advanced": "This sūtra provides @deva[छ] (debarring @deva[अण्]) for @deva[स्वसृ]: @deva[स्वस्रीयः] (sister's son)."
        }
    },
    "41144": {
        "en": {
            "simple": "After @deva[भ्रातृ] (brother), @deva[व्यत्] applies for descendant meaning. @deva[छ] also applies. Examples: @deva[भ्रातृव्यः], @deva[भ्रात्रीयः] (brother's son).",
            "standard": "After @deva[भ्रातृ] (brother), @deva[व्यत्] is used, debarring @deva[अण्]. The @deva[च] indicates @deva[छ] also applies. @deva[भ्रातृ] + @deva[व्यत्] = @deva[भ्रातृव्यः] ('brother's son'); @deva[भ्रातृ] + @deva[छ] = @deva[भ्रात्रीयः]. The @deva[त्] of @deva[व्यत्] regulates accent, making it @deva[स्वरित].",
            "advanced": "This sūtra provides @deva[व्यत्] (debarring @deva[अण्]) for @deva[भ्रातृ]; @deva[च] draws @deva[छ]: @deva[भ्रातृव्यः] or @deva[भ्रात्रीयः]. @deva[त्] in @deva[व्यत्] → @deva[स्वरितस्वर]."
        }
    },
    "41145": {
        "en": {
            "simple": "After @deva[भ्रातृ], @deva[व्यत्] applies when the meaning is 'enemy' (not descendant). Example: @deva[भ्रातृव्यः] (enemy).",
            "standard": "After @deva[भ्रातृ], @deva[व्यत्] applies when the meaning is @deva[सपत्न] (enemy), not descendant: @deva[भ्रातृव्यः कण्टकः] ('the enemy is a thorn'); @deva[पाप्मना भ्रातृव्येण] ('by the sinful enemy'). The difference between @deva[व्यन्] and @deva[व्यत्] is in accent (@ref[6.1.185], @ref[6.1.197]).",
            "advanced": "This sūtra provides @deva[व्यत्] for @deva[भ्रातृ] in @deva[सपत्नार्थ] (enemy), not @deva[अपत्यार्थ]: @deva[भ्रातृव्यः] = enemy. @deva[व्यन्] vs. @deva[व्यत्] differs in @deva[स्वर] (@ref[6.1.185], @ref[6.1.197])."
        }
    },
    "41146": {
        "en": {
            "simple": "The @deva[रेवती] class words take @deva[ठक्] for descendant meaning. Examples: @deva[रैवतिकः], @deva[आश्वपालिकः].",
            "standard": "After @deva[रेवतीयादि] words, @deva[ठक्] (debarring @deva[ढक्]) is used: @deva[रेवती] + @deva[ठक्] = @deva[रैवतिकः] ('son of Revatī'); @deva[अश्वपाली] + @deva[ठक्] = @deva[आश्वपालिकः] (@ref[7.3.50]). 12-word list: @deva[रेवती], @deva[अश्वपाली], @deva[मणिपाली], @deva[द्वारपाली], @deva[वृकवञ्चिन्], @deva[वृकबन्धु], @deva[वृकग्राह], @deva[कर्णग्राह], @deva[दण्डग्राह], @deva[कुक्कूटाक्ष], @deva[ककुदाक्ष], @deva[चामरग्राह].",
            "advanced": "This sūtra provides @deva[ठक्] for @deva[रेवतीयादि], debarring @deva[ढक्]: @deva[रैवतिकः], @deva[आश्वपालिकः] (@ref[7.3.50]). 12 words: @deva[रेवती], @deva[अश्वपाली], @deva[मणिपाली], @deva[द्वारपाली], @deva[वृकवञ्चिन्], @deva[वृकबन्धु], @deva[वृकग्राह], @deva[कर्णग्राह], @deva[दण्डग्राह], @deva[कुक्कूटाक्ष], @deva[ककुदाक्ष], @deva[चामरग्राह]."
        }
    },
    "41147": {
        "en": {
            "simple": "When contempt is intended, @deva[ण] (and @deva[ठक्]) comes after a feminine @deva[गोत्र] word for descendant meaning. Examples: @deva[गार्गः जाल्मः], @deva[गार्गिकः].",
            "standard": "When contempt (@deva[कुत्सा]) is expressed, @deva[ण] is used after feminine @deva[गोत्र]-words, debarring normal affixes. The @deva[च] also permits @deva[ठक्]. When a person is identified through their mother (father unknown), it implies illegitimacy. @deva[गार्गी] (female @deva[गोत्र]-descendant) → son = @deva[गार्गः जाल्मः] (contemptuous) or @deva[गार्गिकः]. @deva[ग्लुचुकायनी] → @deva[ग्लौचुकायनः] or @deva[ग्लौचुकायनिकः]. This @deva[ण] has @deva[युवन्] force (added to @deva[गोत्र]-word). Conditions: (1) @deva[गोत्र]-descendant—not @deva[कारिकेयः] (@deva[ढक्] @ref[4.1.120]); (2) feminine—not @deva[औपगविः]; (3) contemptuous—not @deva[गार्गेयः माणवकः] (neutral @deva[युवन्]).",
            "advanced": "This sūtra provides @deva[ण] for feminine @deva[गोत्रशब्द] in @deva[कुत्सार्थ]; @deva[च] adds @deva[ठक्]: @deva[गार्गः जाल्मः], @deva[गार्गिकः]; @deva[ग्लौचुकायनः], @deva[ग्लौचुकायनिकः]. @deva[ण] has @deva[युवन्] force (post-@deva[गोत्र]). Exclusions: non-गोत्र (@deva[कारिकेयः] @ref[4.1.120]); masculine (@deva[औपगविः]); non-contempt (@deva[गार्गेयो माणवकः]—मातामहोपलक्षणार्थ, not कुत्सा)."
        }
    },
    "41148": {
        "en": {
            "simple": "When contempt is intended, @deva[ठक्] is added (diversely) after @deva[वृद्ध] words denoting @deva[सौवीर] gotra. Examples: @deva[भागवित्तिकः], @deva[तार्णबिन्दविकः].",
            "standard": "When contempt is expressed, @deva[ठक्] applies (diversely/optionally) after @deva[वृद्ध]-words denoting @deva[सौवीर गोत्र]-s. Kārikā names three words: @deva[भागवित्ति], @deva[तार्णबिन्दव], @deva[आकशापेय]. @deva[भागवित्तिकः] (son of Bhāgavitti); @deva[तार्णबिन्दविकः] (@deva[तृणबिन्दु] + @deva[अण्] → @deva[तार्णबिन्दवः], then + @deva[ठक्]). Alternative: @deva[फक्] (@ref[4.1.101]) gives @deva[भागवित्तायनः], @deva[तार्णबिन्दविः]. @deva[आकशापेयः] (from @deva[अकशाप] ∈ @deva[शुभ्रादि] @ref[4.1.123]) → son = @deva[आकशापेयिकः] or @deva[आकशापेयिः]. Without contempt: only @deva[भागवित्तायनः]. The word @deva[वृद्ध] stops @deva[स्त्रियाः] @deva[anuवृत्ति] from @ref[4.1.147]. The @deva[बहुल] indicates anomalous application across @ref[4.1.147]-@ref[4.1.150].",
            "advanced": "This sūtra provides @deva[ठक्] (@deva[बहुलम्]) for @deva[वृद्ध सौवीरगोत्र] words in @deva[कुत्सार्थ]. Kārikā: @deva[भागवित्ति], @deva[तार्णबिन्दव], @deva[आकशापेय] (3 words). @deva[भागवित्तिकः]; @deva[तार्णबिन्दविकः]; @deva[आकशापेयिकः]/आकशापेयिः. Alternative @deva[फक्] @ref[4.1.101]: @deva[भागवित्तायनः]. @deva[वृद्ध] blocks @deva[स्त्रियाः] @deva[anuवृत्ति]. @deva[बहुल] = anomalous: @ref[4.1.147] (कुत्सा only), @ref[4.1.150] (सौवीर only), @ref[4.1.148]-@ref[4.1.149] (both)."
        }
    },
    "41149": {
        "en": {
            "simple": "When contempt is intended, @deva[छ] (and @deva[ठक्]) comes after @deva[फिञन्त] stems denoting @deva[सौवीर गोत्र]. Examples: @deva[यामुन्दायनीयः], @deva[यामुन्दायनिकः].",
            "standard": "When contempt is expressed, @deva[छ] and @deva[ठक्] apply after @deva[फिञन्त] stems denoting @deva[सौवीर गोत्र]-s. Kārikā: three @deva[तिकादि] words—@deva[यमुन्द], @deva[सुयामा], @deva[वार्ष्यायणि] (from @deva[वृष]). @deva[यामुन्दायनिः] (@deva[फिञ्] @ref[4.1.154]) → son with contempt = @deva[यामुन्दायनीयः] (@deva[छ]) or @deva[यामुन्दायनिकः] (@deva[ठक्]). Without contempt: @deva[यामुन्दायनि] + @deva[अण्] = @deva[यामुन्दायनिः] (affix elides by @ref[2.4.58]). Non-Sauvīra: @deva[तैकायनिः] (no @deva[छ]). Note: @deva[फेः] means @deva[फिञ्] (not @deva[फिन्])—@deva[फिन्]-formed words lack @deva[वृद्धि] and wouldn't be @deva[वृद्ध].",
            "advanced": "This sūtra provides @deva[छ]/ठक् for @deva[वृद्ध फिञन्त सौवीरगोत्र] in @deva[कुत्सार्थ]. Kārikā: @deva[यमुन्द], @deva[सुयामा], @deva[वार्ष्यायणि] (∈ @deva[तिकादि]). @deva[यामुन्दायनीयः] or @deva[यामुन्दायनिकः]. Non-contempt: @deva[यामुन्दायनिः] (@deva[अण्] + @ref[2.4.58] @deva[लुक्]). Non-Sauvīra: @deva[तैकायनिः]. @deva[फेः] = @deva[फिञ्] (not @deva[फिन्])—@deva[फिन्]-words lack @deva[वृद्धि]."
        }
    },
    "41150": {
        "en": {
            "simple": "After @deva[फाण्टाहृति] and @deva[मिमत], both @deva[ण] and @deva[फिञ्] apply for @deva[सौवीर] descendant meaning. Examples: @deva[फाण्टाहृतः]/फाण्टाहृतायनिः, @deva[मैमतः]/मैमतायनिः.",
            "standard": "After @deva[फाण्टाहृति] and @deva[मिमत], both @deva[ण] and @deva[फिञ्] apply for @deva[सौवीर]-descendants (debarring @deva[फक्]). The shorter word @deva[मिमत] isn't placed first (violating @ref[2.2.34])—this indicates @ref[1.3.10] doesn't apply, so both affixes apply to both words: @deva[फाण्टाहृतः] or @deva[फाण्टाहृतायनिः]; @deva[मैमतः] or @deva[मैमतायनिः]. Non-Sauvīra: @deva[फाण्टाहृतायनः] and @deva[मैमतायनः] (by @deva[फक्] @ref[4.1.101], @ref[4.1.99]). @deva[मिमत] ∈ @deva[नडादि] (@ref[4.1.99]).",
            "advanced": "This sūtra provides @deva[ण]/फिञ् for @deva[फाण्टाहृति]/मिमत in @deva[सौवीरार्थ], debarring @deva[फक्]. Word-order (@deva[मिमत] not first despite fewer syllables) indicates @ref[1.3.10] inapplicable—both affixes for both words: @deva[फाण्टाहृतः]/फाण्टाहृतायनिः, @deva[मैमतः]/मैमतायनिः. Non-Sauvīra: @deva[फाण्टाहृतायनः], @deva[मैमतायनः] (@deva[फक्] @ref[4.1.101], @ref[4.1.99]). @deva[मिमत] ∈ @deva[नडादि]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.1.136-4.1.150 (Batch 10)")
