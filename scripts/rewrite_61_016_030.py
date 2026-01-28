#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 6.1.16-6.1.30 (Batch 2 of 6.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61016": {
        "en": {
            "simple": "The roots @deva[ग्रह्], @deva[ज्या], @deva[वय्], @deva[व्यध्], @deva[वश्], @deva[व्यच्], @deva[व्रश्च्], @deva[प्रच्छ्], and @deva[भ्रस्ज्] undergo @deva[संप्रसारण] before @deva[कित्] or @deva[ङित्] affixes. Examples: @deva[गृहीतः], @deva[जीर्णः], @deva[उतः], @deva[विद्धः], @deva[उशितः], @deva[पृष्टः], @deva[भृष्टः].",
            "standard": "These nine roots (@deva[ग्रहादि]) undergo @deva[संप्रसारण] before @deva[कित्]/ङित् affixes (the @deva[च] in sūtra brings @deva[किति] from @ref[6.1.15]). Examples: @deva[ग्रह्] → @deva[गृहीतः], @deva[गृह्णाति] (@ref[1.2.4]); @deva[ज्या] → @deva[जीर्णः] (@deva[न]-substitution by @ref[8.2.45]); @deva[वय्] → @deva[उतः]; @deva[व्यध्] → @deva[विद्धः]; @deva[वश्] → @deva[उशितः]; @deva[व्यच्] → @deva[विचितः]; @deva[व्रश्च्] → @deva[वृक्णः]; @deva[प्रच्छ्] → @deva[पृष्टः]; @deva[भ्रस्ज्] → @deva[भृष्टः].",
            "advanced": "The @deva[ग्रहादि] class (9 roots) takes @deva[संप्रसारण] before @deva[कित्]/ङित्. The @deva[च] draws @deva[किति] from @ref[6.1.15]. Derivations: @deva[ग्रह्] → @deva[गृह्] → @deva[गृहीतः] (@deva[इट्] by @ref[7.2.37]); @deva[ज्या] → @deva[जि] → @deva[जीर्णः] (@deva[दीर्घ] @ref[6.4.2], @deva[त] → @deva[न] @ref[8.2.45]); @deva[वय्] → @deva[उय्] → @deva[उतः]; @deva[व्यध्] → @deva[विध्] → @deva[विद्धः]; @deva[वश्] → @deva[उश्] → @deva[उशितः]; @deva[व्यच्] → @deva[विच्] → @deva[विचितः]; @deva[व्रश्च्] → @deva[वृश्च्] → @deva[वृक्णः] (@deva[श्च्] → @deva[क्] by @ref[8.2.36]); @deva[प्रच्छ्] → @deva[पृच्छ्] → @deva[पृष्टः]; @deva[भ्रस्ज्] → @deva[भृस्ज्] → @deva[भृष्टः]. Also @deva[ङित्]: @deva[गृह्णाति] (@ref[1.2.4])."
        }
    },
    "61017": {
        "en": {
            "simple": "The @deva[अभ्यास] (reduplicate) of @deva[वाच्यादि] (@ref[6.1.15]) and @deva[ग्रहादि] (@ref[6.1.16]) roots also undergoes @deva[संप्रसारण] before @deva[लिट्] affixes. Examples: @deva[वच्] → @deva[उवाच]; @deva[स्वप्] → @deva[सुष्वाप]; @deva[यज्] → @deva[इयाज]; @deva[ग्रह्] → @deva[जग्राह].",
            "standard": "In the Perfect, the @deva[अभ्यास] of @deva[वाच्यादि] and @deva[ग्रहादि] roots undergoes @deva[संप्रसारण]. Examples: @deva[वच्] → @deva[उवाच], @deva[उवचिथ]; @deva[स्वप्] → @deva[सुष्वाप], @deva[सुष्वपिथ]; @deva[यज्] → @deva[इयाज], @deva[इयजिथ]; @deva[वप्] → @deva[उवाप], @deva[उवपिथ]. For @deva[ग्रहादि]: @deva[ग्रह्] → @deva[जग्राह], @deva[जग्रहिथ]; @deva[ज्या] → @deva[जिज्यौ], @deva[जिज्यिथ]; @deva[व्यध्] → @deva[विव्याध], @deva[विविधिथ]; @deva[प्रच्छ्] → @deva[पप्रच्छ], @deva[पपृच्छिथ].",
            "advanced": "This sūtra extends @deva[संप्रसारण] to the @deva[अभ्यास] of @deva[वाच्यादि]/@deva[ग्रहादि] before @deva[लिट्]. For @deva[वाच्यादि]: @deva[वच्] reduplicates to @deva[ववच्], then @deva[अभ्यास]-@deva[संप्रसारण] → @deva[उवच्] → @deva[उवाच] (@deva[गुण]). Similarly @deva[सुष्वाप], @deva[इयाज], @deva[उवाप]. For @deva[ग्रहादि]: @deva[ग्रह्] → @deva[जग्रह्] (@deva[ग्] → @deva[ज्] by @ref[7.4.62]) → @deva[जग्राह]; @deva[ज्या] → @deva[जिज्या] → @deva[जिज्यौ]; @deva[व्यध्] → @deva[विव्यध्] → @deva[विव्याध]; @deva[भ्रस्ज्] → @deva[बभ्रस्ज्] → @deva[बभ्रज्ज] → @deva[बभर्ज] (@ref[8.2.36], @ref[8.4.53])."
        }
    },
    "61018": {
        "en": {
            "simple": "The causative @deva[स्वपि] (from @deva[स्वप्] 'to sleep') undergoes @deva[संप्रसारण] before @deva[चङ्] (Aorist). Example: @deva[असूषुपत्] (he caused to sleep).",
            "standard": "The causative @deva[स्वापि] undergoes @deva[संप्रसारण] before @deva[चङ्]. The order: (1) @deva[संप्रसारण]: @deva[स्वापि] → @deva[सुपि]; (2) @deva[णि]-elision (@ref[6.4.51]): → @deva[सुप्]; (3) @deva[गुण] of penultimate: → @deva[सोप्]; (4) shortening (@ref[7.4.1]): → @deva[सुप्]; (5) reduplication: → @deva[सुसुप्]; (6) @deva[अभ्यास]-lengthening (@ref[7.4.94]): → @deva[सूसुप्]; (7) → @deva[असूषुपत्], @deva[असूषुपताम्], @deva[असूषुपन्].",
            "advanced": "This sūtra provides @deva[संप्रसारण] for @deva[णिजन्त स्वप्] before @deva[चङ्]. The derivation sequence is critical: @deva[स्वापि] + @deva[चङ्] → @deva[सुपि] + @deva[चङ्] (@deva[संप्रसारण]) → @deva[सुप्] + @deva[चङ्] (@ref[6.4.51] @deva[णि]-@deva[लोप]) → @deva[सोप्] (@deva[गुण]) → @deva[सुप्] (@ref[7.4.1] shortening) → @deva[सुसुप्] (reduplication) → @deva[सूसुप्] (@ref[7.4.94] @deva[अभ्यास]-@deva[दीर्घ]) → @deva[असूषुपत्] (@deva[ष्] by @ref[8.3.59]). Forms: @deva[असूषुपत्], @deva[असूषुपताम्], @deva[असूषुपन्]."
        }
    },
    "61019": {
        "en": {
            "simple": "The roots @deva[स्वप्], @deva[स्यम्], and @deva[व्ये] undergo @deva[संप्रसारण] before @deva[यङ्] (Intensive). Examples: @deva[सोषुप्यते] (sleeps intensely); @deva[सेसिम्यते]; @deva[वेवीयते].",
            "standard": "These three roots take @deva[संप्रसारण] specifically before @deva[यङ्]: @deva[स्वप्] → @deva[सुप्] → @deva[सोषुप्यते]; @deva[स्यम्] → @deva[सिम्] → @deva[सेसिम्यते]; @deva[व्ये] → @deva[वि] → @deva[वेवीयते] (@deva[इ] lengthened by @ref[7.4.25]). Not before other affixes: @deva[स्वप्नक्] (formed by @deva[नजिङ्] @ref[3.2.172])—no @deva[संप्रसारण].",
            "advanced": "This sūtra provides @deva[यङि संप्रसारण] for @deva[स्वप्]/स्यम्/व्ये. Derivations: @deva[स्वप्] → @deva[सुप्] → @deva[सुप् सुप्] → @deva[सोषुप्] (@deva[गुण], @deva[ष्] by @ref[8.3.59]) + @deva[य] → @deva[सोषुप्यते]; @deva[स्यम्] → @deva[सिम्] → @deva[सेसिम्यते]; @deva[व्ये] → @deva[वि] → @deva[वेवि] → @deva[वेवीयते] (@ref[7.4.25] lengthens @deva[इ]). The restriction @deva[यङि] excludes @deva[स्वप्नक्] etc."
        }
    },
    "61020": {
        "en": {
            "simple": "The root @deva[वश्] does NOT undergo @deva[संप्रसारण] before @deva[यङ्]. Example: @deva[वावश्यते] (shines intensely), not @deva[*वोशुय्यते].",
            "standard": "This is an exception to @ref[6.1.16] for the Intensive. Before @deva[यङ्], @deva[वश्] retains its semivowel: @deva[वावश्यते], @deva[वावश्येते], @deva[वावश्यन्ते]. Before @deva[कित्] affixes, @deva[संप्रसारण] still applies: @deva[उष्टः], @deva[उशन्ति].",
            "advanced": "This sūtra blocks @ref[6.1.16] @deva[संप्रसारण] for @deva[वश्] specifically before @deva[यङ्]. The Intensive forms: @deva[वावश्यते], @deva[वावश्येते], @deva[वावश्यन्ते]. The @deva[कित्]-triggered @deva[संप्रसारण] remains: @deva[उष्टः] (@deva[क्त]), @deva[उशन्ति] (@deva[शतृ] is @deva[ङित्]). This preserves the distinct Intensive formation for this root."
        }
    },
    "61021": {
        "en": {
            "simple": "@deva[की] substitutes for the root @deva[चाय्] (to observe/worship) before @deva[यङ्]. Example: @deva[चेकीयते] (observes intensely). The long @deva[ई] is retained even when @deva[यङ्] is elided: @deva[चेकीतः].",
            "standard": "The substitute @deva[की] (with long @deva[ई]) replaces @deva[चाय्] before @deva[यङ्]: @deva[चेकीयते], @deva[चेकीयेते], @deva[चेकीयन्ते]. The long vowel in @deva[की] signals retention even in @deva[यङ्लुक्] forms: @deva[चेकीतः] (participle). If short @deva[कि] were taught, forms like @deva[चेकीयते] would still be valid, but @deva[चेकितः] would result in @deva[यङ्लुक्].",
            "advanced": "This @deva[आदेश] teaches @deva[की] (not @deva[कि]) for @deva[चायृ चयने] before @deva[यङ्]. Derivation: @deva[चाय्] → @deva[की] → @deva[चि की] (reduplication) → @deva[चेकी] (@deva[गुण]) + @deva[य] → @deva[चेकीयते]. The @deva[दीर्घ ई] is @deva[ज्ञापक] that length persists in @deva[यङ्लुक्]: @deva[चेकीतः]. Had @deva[कि] been taught, @deva[चेकीयते] would still form (by @ref[7.4.25]), but @deva[यङ्लुक्] would give @deva[चेकितः]. The explicit @deva[ई] ensures @deva[चेकीतः]."
        }
    },
    "61022": {
        "en": {
            "simple": "@deva[स्फी] substitutes for @deva[स्फाय्] (to swell) before @deva[निष्ठा] affixes (@deva[क्त], @deva[क्तवतु]). Examples: @deva[स्फीतः] (swollen), @deva[स्फीतवान्]. Not before other affixes: @deva[स्फातिः] (@deva[क्तिन्]).",
            "standard": "The substitute @deva[स्फी] replaces @deva[स्फाय्] specifically before @deva[निष्ठा] (@deva[क्त], @deva[क्तवतु]): @deva[स्फीतः], @deva[स्फीतवान्]. Before @deva[क्तिन्]: @deva[स्फातिः] (no substitution). The term @deva[निष्ठायाम्] governs subsequent sūtras through @ref[6.1.29]. The feminine @deva[स्फाती भवति] uses @deva[स्फाति] + @deva[ङीप्].",
            "advanced": "This sūtra introduces the @deva[निष्ठायाम्] @deva[अधिकार] extending through @ref[6.1.29]. The @deva[आदेश] @deva[स्फी] applies only before @deva[निष्ठा] (= @deva[क्त]/क्तवतु): @deva[स्फीतः], @deva[स्फीतवान्]. Other @deva[कृत्] affixes get the base form: @deva[स्फातिः] (@deva[क्तिन्]), @deva[स्फायितुम्] (@deva[तुमुन्]). The @deva[आ] in @deva[स्फाय्] blocks @deva[संप्रसारण]; this @deva[आदेश] provides the @deva[ई]-form directly."
        }
    },
    "61023": {
        "en": {
            "simple": "The root @deva[स्त्याय्] (or @deva[ष्ट्याय्]) undergoes @deva[संप्रसारण] before @deva[निष्ठा] when preceded by @deva[प्र]. Example: @deva[प्रस्तीतः] (spread out).",
            "standard": "Both @deva[स्त्यै] and @deva[ष्ट्यै] (which become @deva[स्त्या]) take @deva[संप्रसारण] before @deva[निष्ठा] after @deva[प्र]. Derivation: @deva[प्र] + @deva[स्त्या] + @deva[क्त] → @deva[प्र] + @deva[स्ति] + @deva[त] (@deva[संप्रसारण]) → @deva[प्रस्तीतः] (@deva[दीर्घ] by @ref[6.4.2]). Forms: @deva[प्रस्तीतः], @deva[प्रस्तीतवान्]. The @deva[त] of @deva[निष्ठा] remains (not @deva[न]-substitute).",
            "advanced": "This continues the @deva[निष्ठायाम्] @deva[अधिकार]. The @deva[स्फी] @deva[अनुवृत्ति] does not continue. Both @deva[स्त्यै शब्दसंघातयोः] and @deva[ष्ट्यै शब्दसंघातयोः] are included as @deva[स्त्या]. Derivation: @deva[प्र] + @deva[स्त्या] + @deva[त] → @deva[प्र] + @deva[स्ति] + @deva[त] (@deva[य] → @deva[इ]) → @deva[प्रस्ति] + @deva[त] → @deva[प्रस्तीत] (@ref[6.1.108] @deva[इत्], @ref[6.4.2] @deva[दीर्घ]) → @deva[प्रस्तीतः]. The @deva[पूर्व] specification indicates @deva[उपसर्ग] must directly precede."
        }
    },
    "61024": {
        "en": {
            "simple": "The root @deva[श्याय्] (to coagulate) undergoes @deva[संप्रसारण] before @deva[निष्ठा] when meaning 'coagulation' or 'cold'. Examples: @deva[शीनं घृतम्] (coagulated ghee); @deva[शीतं वर्तते] (it is cold).",
            "standard": "The root @deva[श्यै गतौ] takes @deva[संप्रसारण] before @deva[निष्ठा] specifically in these meanings. For 'coagulation' (@deva[द्रवमूर्त्ति]): @deva[शीनं घृतम्], @deva[शीना वसा], @deva[शीनं मेदः]—the @deva[त] becomes @deva[न] by @ref[8.2.47]. For 'cold' (@deva[शिशिरस्पर्श]): @deva[शीतं वर्तते], @deva[शीतो वायुः], @deva[शीतमुदकम्]—@deva[त] is retained.",
            "advanced": "This sūtra restricts @deva[संप्रसारण] of @deva[श्यै] to @deva[निष्ठा] with meanings @deva[द्रवमूर्त्ति] (solidification of liquid) or @deva[शिशिरस्पर्श] (cold touch). Derivation: @deva[श्या] + @deva[त] → @deva[शि] + @deva[त] → @deva[शीत] (@ref[6.4.2]). For coagulation: @deva[त] → @deva[न] by @ref[8.2.47]: @deva[शीनम्]. For cold: @deva[शीतम्]. The word @deva[शीत] 'cold' is derived here. Other meanings of @deva[श्यै] don't trigger @deva[संप्रसारण] before @deva[निष्ठा]."
        }
    },
    "61025": {
        "en": {
            "simple": "@deva[श्याय्] undergoes @deva[संप्रसारण] before @deva[निष्ठा] when preceded by @deva[प्रति], regardless of meaning. Example: @deva[प्रतिशीनः], @deva[प्रतिशीनवान्].",
            "standard": "Unlike @ref[6.1.24] which requires specific meanings, when @deva[प्रति] precedes @deva[श्याय्], @deva[संप्रसारण] occurs before @deva[निष्ठा] unconditionally: @deva[प्रतिशीनः], @deva[प्रतिशीनवान्]. The meaning restriction of the previous sūtra doesn't apply here.",
            "advanced": "This sūtra removes the semantic restriction of @ref[6.1.24] when @deva[प्रति] is the @deva[उपसर्ग]. Derivation: @deva[प्रति] + @deva[श्या] + @deva[त] → @deva[प्रति] + @deva[शि] + @deva[त] → @deva[प्रतिशीत] (@ref[6.4.2]) → @deva[प्रतिशीन] (@ref[8.2.47]). The @deva[त] → @deva[न] substitution applies. Forms: @deva[प्रतिशीनः], @deva[प्रतिशीनवान्]. Any meaning of @deva[प्रतिश्याय्] qualifies."
        }
    },
    "61026": {
        "en": {
            "simple": "@deva[श्याय्] optionally undergoes @deva[संप्रसारण] before @deva[निष्ठा] when preceded by @deva[अभि] or @deva[अव]. Examples: @deva[अभिशीनम्] or @deva[अभिश्यानम्]; @deva[अवशीनम्] or @deva[अवश्यानम्].",
            "standard": "With @deva[अभि] or @deva[अव] preceding, @deva[संप्रसारण] is optional: @deva[अभिशीनं घृतम्] or @deva[अभिश्यानं घृतम्]; @deva[अवशीनं वृश्चिकः] or @deva[अवश्यानं वृश्चिकः]. This option applies even when the meaning is 'coagulation' or 'cold': @deva[अवशीतो वायुः] or @deva[अवश्यानो वायुः]. The @deva[पूर्व] from @ref[6.1.23] applies: @deva[अभिसंशीनम्] or @deva[अभिसंश्यानम्].",
            "advanced": "This @deva[विभाषा] allows optional @deva[संप्रसारण] for @deva[श्याय्] with @deva[अभि]/अव. Both forms valid: @deva[अभिशीनम्]/अभिश्यानम्, @deva[अवशीनम्]/अवश्यानम्. The option extends to coagulation/cold meanings: @deva[अवशीनं घृतम्]/अवश्यानम्, @deva[अवशीतो वायुः]/अवश्यानः. The @deva[पूर्व] condition from @ref[6.1.23] means intervening @deva[उपसर्ग] is allowed: @deva[अभिसंशीनम्]/अभिसंश्यानम्."
        }
    },
    "61027": {
        "en": {
            "simple": "@deva[शृ] optionally substitutes for @deva[श्राय्] (to cook) before @deva[निष्ठा] @deva[क्त]. Example: @deva[शृतं क्षीरम्] (cooked milk) or @deva[श्रातम्]. The substitution is invariable in certain contexts.",
            "standard": "The roots @deva[श्रै पाके] (@deva[भ्वादि]), @deva[श्रा पाके] (@deva[अदादि]), and @deva[श्रा पाके] (@deva[घटादि]) all substitute @deva[शृ] before @deva[निष्ठा क्त]. This is @deva[व्यवस्थितविभाषा] (regulated option): @deva[शृतं क्षीरम्], @deva[शृतं हविः]. Applies to both causative and non-causative. When the option doesn't apply: @deva[श्रातः].",
            "advanced": "This @deva[व्यवस्थितविभाषा] teaches @deva[शृ] for @deva[श्रा] before @deva[निष्ठा]. Three @deva[श्रा]-roots are covered: @deva[श्रै पाके] (भ्वादि), @deva[श्रा पाके] (अदादि 3), @deva[श्रा पाके] (घटादि). The @deva[शृ] applies to @deva[णिजन्त] too. Derivation: @deva[श्रा] → @deva[शृ] + @deva[त] → @deva[शृतम्]. The 'regulated' nature: @deva[शृ] is standard in most contexts; @deva[श्रात] appears in specific usages. Examples: @deva[शृतं क्षीरम्], @deva[शृतं हविः]."
        }
    },
    "61028": {
        "en": {
            "simple": "@deva[पी] optionally substitutes for @deva[प्याय्] (to swell) before @deva[निष्ठा]. Examples: @deva[पीनं मुखम्] (swollen face), @deva[पीनौ बाहू] (swollen arms). The @deva[त] becomes @deva[न] by @ref[8.2.45].",
            "standard": "The root @deva[ओप्यायी वृद्धौ] (@deva[भ्वादि]) takes @deva[पी] before @deva[निष्ठा]. The indicatory @deva[आ] of @deva[प्यायी] triggers @deva[त] → @deva[न] by @ref[8.2.45]: @deva[पीनम्], @deva[पीनवान्]. This is @deva[व्यवस्थितविभाषा]: without @deva[उपसर्ग], substitution is invariable; with @deva[उपसर्ग], it doesn't occur: @deva[प्रप्यानः], @deva[आप्यानः].",
            "advanced": "This @deva[व्यवस्थितविभाषा] provides @deva[पी] for @deva[प्याय्] before @deva[निष्ठा]. The root @deva[ओप्यायी वृद्धौ] has @deva[आ] as @deva[इत्], triggering @ref[8.2.45] @deva[त] → @deva[न]: @deva[पीनम्]. The regulation: (1) without @deva[उपसर्ग]: @deva[पीनम्] invariably; (2) with @deva[उपसर्ग]: @deva[प्रप्यानः], @deva[आप्यानः]—no substitution. Examples: @deva[पीनं मुखम्], @deva[पीनौ बाहू], @deva[पीनसुरः] (constellation name)."
        }
    },
    "61029": {
        "en": {
            "simple": "@deva[पी] substitutes for @deva[प्याय्] before @deva[लिट्] (Perfect) and @deva[यङ्] (Intensive). Examples: @deva[आपिप्ये] (has swollen); @deva[पेपीयते] (swells intensely).",
            "standard": "The @deva[विभाषा] (option) of @ref[6.1.28] does not continue here—@deva[पी] is obligatory before @deva[लिट्] and @deva[यङ्]. Perfect forms: @deva[आपिप्ये], @deva[आपिप्याते], @deva[आपिप्यिरे]. The substitution occurs before reduplication by @deva[पुनःप्रसङ्ग] maxim. Intensive: @deva[पेपीयते].",
            "advanced": "The @deva[च] draws @deva[प्यायः पी] from @ref[6.1.28]; @deva[विभाषा] does not continue. @deva[लिट्] forms: @deva[प्याय्] → @deva[पी] → @deva[पिपी] (reduplication) → @deva[आपिप्ये] (with @deva[आङ्]), @deva[आपिप्याते], @deva[आपिप्यिरे]. Though @deva[पी] is @deva[परनिमित्त], reduplication still applies by @deva[पुनःप्रसङ्गविज्ञान]. @deva[यङ्] forms: @deva[पेपीयते]. The substitution is invariable here regardless of @deva[उपसर्ग]."
        }
    },
    "61030": {
        "en": {
            "simple": "The root @deva[श्वि] (to swell) optionally undergoes @deva[संप्रसारण] before @deva[लिट्] and @deva[यङ्]. Examples: Perfect @deva[शुशाव] or @deva[शिश्वाय]; Intensive @deva[शोश्वीयते] or @deva[शाश्वीयते].",
            "standard": "Before @deva[लिट्], @deva[श्वि] can take @deva[संप्रसारण] (@deva[व्] → @deva[उ]) or not: @deva[शुशाव]/शिश्वाय (strong), @deva[शुशुवतुः]/शिश्वियतुः (weak). Before @deva[यङ्]: @deva[शोश्वीयते]/शाश्वीयते. By @ref[6.1.15], @deva[श्वि] would take @deva[संप्रसारण] before @deva[लिट्] (@deva[कित्]) invariably; this sūtra makes it optional. Before @deva[यङ्], no previous rule applied, so this teaches optional @deva[संप्रसारण].",
            "advanced": "This sūtra provides @deva[वैकल्पिक संप्रसारण] for @deva[श्वि] before @deva[लिट्]/यङ्. For @deva[लिट्]: @ref[6.1.15] would give invariable @deva[संप्रसारण] (since @deva[लिट्] is @deva[कित्]); this makes it optional. With @deva[संप्रसारण]: @deva[श्वि] → @deva[शु] → @deva[शुशु] → @deva[शुशाव] (strong), @deva[शुशुवतुः] (weak). Without: @deva[शिश्वि] → @deva[शिश्वाय], @deva[शिश्वियतुः]. For @deva[यङ्]: no previous rule applied; this teaches optional @deva[संप्रसारण]: @deva[शोश्वीयते] (with) or @deva[शाश्वीयते] (without)."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.16-6.1.30)")
