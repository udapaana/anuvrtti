#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 6.1.46-6.1.60 (Batch 4 of 6.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61046": {
        "en": {
            "simple": "The diphthong of @deva[व्ये] (to cover) does not become @deva[आ] before Perfect affixes. Examples: @deva[संविव्याय], @deva[संविव्ययिथ].",
            "standard": "Before @deva[लिट्], @deva[व्ये] retains its diphthong (no @deva[आ]-substitution by @ref[6.1.45]): @deva[संविव्याय], @deva[संविव्ययिथ]. The @deva[अभ्यास] vocalizes by @ref[6.1.17]. The @deva[वृद्धि] in @deva[संविव्याय] occurs by @ref[7.2.115] before @deva[णित्] affix @deva[णल्].",
            "advanced": "This @deva[प्रतिषेध] blocks @ref[6.1.45] @deva[एच् → आ] for @deva[व्ये] before @deva[लिट्]. Derivation: @deva[सम्] + @deva[व्ये] → @deva[विव्ये] (reduplication, @deva[अभ्यास]-@deva[संप्रसारण] by @ref[6.1.17]) → @deva[संविव्याय] (@deva[वृद्धि] by @ref[7.2.115] before @deva[णित् णल्]). Weak: @deva[संविव्ययिथ]. The @deva[ए] doesn't become @deva[आ]."
        }
    },
    "61047": {
        "en": {
            "simple": "The roots @deva[स्फुर्] and @deva[स्फुल्] (to move/throb) substitute @deva[आ] for their diphthong before @deva[घञ्]. Examples: @deva[विस्फारः] (not @deva[विस्फोरः]); @deva[विस्फालः] (not @deva[विस्फोलः]).",
            "standard": "Before @deva[घञ्], @deva[स्फुर्] and @deva[स्फुल्] take @deva[आ] for the @deva[ओ] that arises from @deva[गुण]: @deva[विस्फारः], @deva[विस्फालः]. By @ref[8.3.76], @deva[स] optionally becomes @deva[ष] after @deva[वि]: @deva[विष्फारः], @deva[विष्फालः].",
            "advanced": "This sūtra forces @deva[ओ] → @deva[आ] for @deva[स्फुर्]/स्फुल् before @deva[घञ्]. Process: @deva[स्फुर्] → @deva[स्फोर्] (@deva[गुण]) → @deva[स्फार्] (@deva[ओ] → @deva[आ]) + @deva[अ] (@deva[घञ्]) → @deva[विस्फारः]. Optional @deva[षत्व] by @ref[8.3.76]: @deva[विष्फारः]. Similarly @deva[विस्फालः]/विष्फालः."
        }
    },
    "61048": {
        "en": {
            "simple": "The causatives of @deva[क्री] (to buy), @deva[इ] (to study), and @deva[जि] (to conquer) substitute @deva[आ] for their diphthong. Examples: @deva[क्रापयति], @deva[अध्यापयति], @deva[जापयति].",
            "standard": "In @deva[णिजन्त], these roots take @deva[आ] for their @deva[ए/ऐ] diphthong: @deva[क्री] → @deva[क्रापयति]; @deva[इ] (with @deva[अधि]) → @deva[अध्यापयति]; @deva[जि] → @deva[जापयति]. The @deva[प्]-augment comes by @ref[7.3.36] since these roots now end in long @deva[आ].",
            "advanced": "These @deva[णिजन्त] forms take @deva[ए/ऐ] → @deva[आ]: @deva[क्री] → @deva[क्रै] (@deva[वृद्धि]) → @deva[क्रा] + @deva[णि] → @deva[क्रापयति] (@deva[प्] by @ref[7.3.36]); @deva[इ] → @deva[ऐ] → @deva[आ] + @deva[णि] → @deva[आपयति] → @deva[अध्यापयति]; @deva[जि] → @deva[जै] → @deva[जा] + @deva[णि] → @deva[जापयति]. The @deva[आकारान्त] triggers @deva[पुक्]-augment."
        }
    },
    "61049": {
        "en": {
            "simple": "The causative of @deva[सिध्] (to accomplish) substitutes @deva[आ] for its diphthong when not referring to spiritual/otherworldly matters. Examples: @deva[अन्नं साधयति] (he prepares food); @deva[ग्रामं साधयति].",
            "standard": "For @deva[णिजन्त सिध्], @deva[ए] → @deva[आ] applies when the meaning doesn't concern @deva[परलोक] (next world). Thus @deva[साधयति] for worldly accomplishment: @deva[अन्नं साधयति], @deva[ग्रामं साधयति]. For spiritual perfection: @deva[तपः तापसं सेधयति] (not @deva[साधयति]).",
            "advanced": "The condition @deva[अपारलौकिके] (not pertaining to @deva[परलोक]) restricts this @deva[आदेश]. @deva[पारलौकिक] is derived by @deva[ठञ्] (@ref[5.1.109]) with double @deva[वृद्धि] (@ref[7.3.20]). When the @deva[सिध्]-meaning concerns @deva[अज्ञान] (non-sentient) objects: @deva[साधयति]. For spiritual siddhi: @deva[सेधयति] (standard causative without @deva[आ])."
        }
    },
    "61050": {
        "en": {
            "simple": "The roots @deva[मी] (to hurt), @deva[मि] (to scatter), and @deva[दी] (to decay) substitute @deva[आ] before @deva[ल्यप्] and before affixes that demand diphthong-@deva[आ] substitution. Examples: @deva[प्रमाय], @deva[निमाय], @deva[उपदाय], @deva[प्रमातुम्].",
            "standard": "These roots take @deva[आ] for their final: (1) before @deva[ल्यप्]: @deva[प्रमाय], @deva[निमाय], @deva[उपदाय]; (2) before @deva[अशित्] affixes demanding @deva[एच् → आ]: @deva[प्रमातुम्], @deva[प्रमातव्यम्], @deva[निमाता]. The @deva[च] indicates the substitution applies at @deva[उपदेश] stage—these roots are treated as @deva[आकारान्त].",
            "advanced": "The @deva[च] extends @deva[आ]-substitution beyond @deva[ल्यप्] to all @deva[अशित्] affixes triggering @ref[6.1.45]. The substitution is @deva[उपदेशावस्थायाम्]—these roots function as if listed with @deva[आ]: @deva[मा], @deva[मा], @deva[दा]. Thus all @deva[आकारान्त] rules apply: @deva[प्रमाय], @deva[प्रमातुम्], @deva[प्रमातव्यम्], @deva[निमाता], @deva[उपदाता]."
        }
    },
    "61051": {
        "en": {
            "simple": "The root @deva[ली] (to adhere) optionally substitutes @deva[आ] for its diphthong before @deva[ल्यप्] or affixes demanding such substitution. Examples: @deva[संलाय] or @deva[संलीय].",
            "standard": "For @deva[ली], the @deva[ए] (arising from @deva[गुण] of @deva[ई]) optionally becomes @deva[आ] before @deva[ल्यप्] and @deva[एजादेश]-demanding affixes: @deva[संलाय] or @deva[संलीय]. This applies to subsequent roots too: @deva[खिद्] → @deva[खेद्] → @deva[खाद्]; @deva[गुर्] → @deva[गोर्] → @deva[गार्].",
            "advanced": "This @deva[विभाषा] applies to @deva[ली श्लेषणे] and subsequent roots. Process: @deva[ली] + @deva[ल्यप्] → @deva[ले] (@deva[गुण]) + @deva[य] → optionally @deva[ला] + @deva[य] → @deva[संलाय] or @deva[संलीय] (with @deva[दीर्घ]). Similarly for roots taught subsequently: the incipient @deva[गुण] diphthong optionally → @deva[आ]."
        }
    },
    "61052": {
        "en": {
            "simple": "In Vedic, the root @deva[खिद्] (to suffer pain) optionally substitutes @deva[आ] for its diphthong. Examples: @deva[चिखाद] or @deva[चिखेद] (Perfect).",
            "standard": "In @deva[छन्दस्], @deva[खिद्] has optional @deva[ए] → @deva[आ]: @deva[चित्तं चिखाद] or @deva[चित्तं चिखेद] (Perfect). In @deva[लौकिक]: @deva[खेदयति] (causative)—the option is only Vedic.",
            "advanced": "This @deva[छान्दस विभाषा] for @deva[खिद् दैन्ये]: the @deva[गुण ए] optionally → @deva[आ] in Vedic. Perfect forms: @deva[चिखाद]/चिखेद. In secular Sanskrit, only standard forms: @deva[खेदयति] (@deva[णिजन्त]). The option doesn't extend to @deva[भाषा]."
        }
    },
    "61053": {
        "en": {
            "simple": "The root @deva[गुर्] (to exert) optionally substitutes @deva[आ] for its diphthong when preceded by @deva[अप] and taking @deva[णमुल्]. Examples: @deva[अपगारमपगारम्] or @deva[अपगोरमपगोरम्].",
            "standard": "With @deva[अप] prefix, @deva[गुर्] + @deva[णमुल्] (@ref[3.4.22], reduplicated absolutive) optionally takes @deva[ओ] → @deva[आ]: @deva[अपगारमपगारम्] or @deva[अपगोरमपगोरम्]. Also by @ref[3.4.53]: @deva[अस्यपगारं युध्यन्ते] or @deva[अस्यपगोरं युध्यन्ते] (fighting with raised swords).",
            "advanced": "This @deva[विभाषा] applies to @deva[अप] + @deva[गुर् उद्यमने] + @deva[णमुल्]. @deva[णमुल्] forms are repeated (@ref[3.4.22]). Process: @deva[गुर्] → @deva[गोर्] (@deva[गुण]) → optionally @deva[गार्] + @deva[अम्] → @deva[अपगारम्]. With @ref[3.4.53]: @deva[अस्यपगारं युध्यन्ते] 'they fight with raised swords'."
        }
    },
    "61054": {
        "en": {
            "simple": "The causatives of @deva[चि] (to gather) and @deva[स्फुर्] (to throb) optionally substitute @deva[आ] for their diphthong. Examples: @deva[चापयति] or @deva[चाययति]; @deva[स्फारयति] or @deva[स्फोरयति].",
            "standard": "In @deva[णिजन्त], @deva[चि] and @deva[स्फुर्] optionally take @deva[ए/ओ] → @deva[आ]: @deva[चि] → @deva[चापयति] or @deva[चाययति] (@deva[प्]-augment by @ref[7.3.36]); @deva[स्फुर्] → @deva[स्फारयति] or @deva[स्फोरयति].",
            "advanced": "This @deva[विभाषा] for @deva[णिजन्त]: @deva[चि चयने] → @deva[चै] (@deva[वृद्धि]) → optionally @deva[चा] + @deva[णि] → @deva[चापयति] (with @deva[पुक्]) or @deva[चाययति] (without, but @deva[य्] augment). @deva[स्फुर् सञ्चलने] → @deva[स्फोर्] (@deva[गुण]) → optionally @deva[स्फार्] + @deva[णि] → @deva[स्फारयति]/स्फोरयति."
        }
    },
    "61055": {
        "en": {
            "simple": "The causative of @deva[वी] (to go/conceive) optionally substitutes @deva[आ] for its diphthong when meaning 'to impregnate'. Example: @deva[प्रवापयति] or @deva[प्रवाययति] (he causes to conceive).",
            "standard": "The root @deva[वी] (@deva[अदादि] 39, meaning 'go/conceive/shine/eat/desire') takes optional @deva[ए] → @deva[आ] in causative when meaning 'to cause conception': @deva[प्र] + @deva[वी] + @deva[णि] → @deva[प्रवापयति] or @deva[प्रवाययति] = @deva[गर्भे ग्राहयति] (causes to receive embryo).",
            "advanced": "The semantic condition @deva[प्रजने] restricts this to conception meaning. @deva[वी गतौ, प्रजने, व्याप्तौ, खादने, कान्तौ] (@deva[अदादि] 39). Causative: @deva[वी] → @deva[वै] (@deva[वृद्धि]) → optionally @deva[वा] + @deva[णि] → @deva[प्रवापयति] (with @deva[पुक्]) or @deva[प्रवाययति]. @deva[प्रजन] = @deva[गर्भग्रहण] leading to birth."
        }
    },
    "61056": {
        "en": {
            "simple": "The causative of @deva[भी] (to fear) optionally substitutes @deva[आ] for its diphthong when the fear is caused directly by the causer (@deva[हेतु]). Example: @deva[मुण्डो भापयते] or @deva[भीषयते].",
            "standard": "When the @deva[हेतु] (causer, @ref[1.4.54]-@ref[1.4.55]) directly causes fear (@deva[हेतुभय]), @deva[भी] optionally takes @deva[ए] → @deva[आ] in causative: @deva[मुण्डो भापयते] (@ref[7.3.36] for @deva[प्]) or @deva[भीषयते]. If fear is indirect: only @deva[भीषयते].",
            "advanced": "The condition @deva[हेतुभये] means the @deva[स्वतन्त्र प्रयोजक] directly causes fear. @deva[भी भये] causative: @deva[भी] → @deva[भै] → optionally @deva[भा] + @deva[णि] → @deva[भापयते] (with @deva[पुक्]). Without @deva[आ]: @deva[भीषयते] (@deva[स्]-augment by @ref[7.3.36] option). Indirect fear (e.g., via lion): only @deva[भीषयते]."
        }
    },
    "61057": {
        "en": {
            "simple": "The causative of @deva[स्मि] (to smile/wonder) invariably substitutes @deva[आ] for its diphthong when astonishment is caused directly by the causer. Example: @deva[मुण्डो विस्मापयते] (the bald one amazes).",
            "standard": "Unlike @ref[6.1.56] (optional), @deva[स्मि] takes obligatory @deva[ए] → @deva[आ] when the @deva[हेतु] directly causes wonder: @deva[मुण्डो जटिलो वा विस्मापयते]. For indirect cause: @deva[कुञ्चिकयैनं विस्माययति]. The word @deva[भय] here means @deva[स्मय] (wonder), as in @ref[1.3.68].",
            "advanced": "This @deva[नित्य] rule (@deva[विभाषा] doesn't continue) applies to @deva[स्मि विस्मये] causative with @deva[हेतुभय] (= @deva[हेतुस्मय], wonder caused by हेतु). Direct cause: @deva[विस्मापयते] (invariable @deva[आ]). Indirect: @deva[विस्माययति]. The @deva[भय] → @deva[स्मय] semantic extension follows @ref[1.3.68]."
        }
    },
    "61058": {
        "en": {
            "simple": "The roots @deva[सृज्] (to create) and @deva[दृश्] (to see) take @deva[अम्]-augment after @deva[ऋ] before @deva[झल्] (mute/sibilant) affixes that are not @deva[कित्]. Examples: @deva[स्रष्टा], @deva[स्रष्टुम्], @deva[द्रष्टा], @deva[द्रष्टुम्].",
            "standard": "The @deva[अम्]-augment (@deva[अ]) is added after @deva[ऋ] of @deva[सृज्]/दृश् before @deva[झलादि अकित्] affixes: @deva[सृज्] + @deva[तृन्] → @deva[सृ] + @deva[अ] + @deva[ज्] + @deva[तृ] → @deva[स्रष्टृ] → @deva[स्रष्टा]. Similarly @deva[स्रष्टुम्], @deva[स्रष्टव्यम्], @deva[द्रष्टा], @deva[द्रष्टुम्], @deva[द्रष्टव्यम्]. This blocks @deva[गुण] (@ref[7.3.86]). Before @deva[कित्]: @deva[अस्राक्षीत्], @deva[अद्राक्षीत्].",
            "advanced": "This @deva[आगम] teaches @deva[अम्] for @deva[सृज्]/दृश् before @deva[झलादि अकित्]. Process: @deva[सृज्] + @deva[तृच्] → @deva[सृअज्] + @deva[तृ] (@deva[अम्]-augment) → @deva[स्रज्तृ] → @deva[स्रष्टृ] (@deva[ज् + त् → ष्ट्]). The @deva[अम्] prevents @deva[गुण] (@ref[7.3.86]). @deva[कित्] condition excludes @deva[लुङ्] (@deva[अस्राक्षीत्]) where @deva[सिच्] is @deva[कित्] by @ref[1.2.1]."
        }
    },
    "61059": {
        "en": {
            "simple": "Roots that are @deva[अनुदात्त] in @deva[धातुपाठ], end in a consonant, and have @deva[ऋ] as penultimate, optionally take @deva[अम्]-augment before @deva[झल्] non-@deva[कित्] affixes. Examples: @deva[तर्प्ता] or @deva[त्रप्ता]; @deva[दर्प्ता] or @deva[द्रप्ता].",
            "standard": "For @deva[अनुदात्तोपदेश ऋदन्त] roots (penultimate @deva[ऋ], final consonant), @deva[अम्]-augment is optional before @deva[झलादि अकित्]: @deva[तृप्] → @deva[त्रप्ता] or @deva[तर्पिता] or @deva[तर्प्ता]; @deva[दृप्] → @deva[द्रप्ता] or @deva[दर्पिता] or @deva[दर्प्ता]. @deva[तृप्] and @deva[दृप्] belong to @deva[दिवादि] class.",
            "advanced": "This @deva[विभाषा] for @deva[अनुदात्तोपदेश हलन्त ऋदुपधा] roots. @deva[तृप् तृप्तौ] (@deva[दिवादि]): with @deva[अम्]: @deva[त्रप्ता]; without, with @deva[इट्]: @deva[तर्पिता]; without @deva[अम्] or @deva[इट्]: @deva[तर्प्ता]. @deva[दृप् हर्षे मोदे च]: @deva[द्रप्ता]/दर्पिता/दर्प्ता. The three forms arise from different paths: @deva[अम्] blocks both @deva[गुण] and @deva[इट्]."
        }
    },
    "61060": {
        "en": {
            "simple": "The word @deva[शीर्षन्] (head) occurs in Vedic. Examples: @deva[शीर्ष्णा हि तत्र सोमं क्रीतं हरन्ति]; @deva[यत्ते शीर्ष्णो दौर्भाग्यम्].",
            "standard": "In @deva[छन्दस्], @deva[शीर्षन्] is used as another form of @deva[शिरस्] (head)—not a substitute but an alternative form, since both occur in Vedas. Vedic: @deva[शीर्ष्णा], @deva[शीर्ष्णः]. In @deva[भाषा]: only @deva[शिरः].",
            "advanced": "This @deva[निपातन] teaches @deva[शीर्षन्] as @deva[छान्दस] for @deva[शिरस्]. Both forms coexist in Veda: @deva[शीर्ष्णा हि तत्र सोमं क्रीतं हरन्ति]; @deva[यत्ते शीर्ष्णो दौर्भाग्यम्]. It's not an @deva[आदेश] since both appear. In @deva[लौकिक]: only @deva[शिरः] (neuter @deva[असन्त])."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.46-6.1.60)")
