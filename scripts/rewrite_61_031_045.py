#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 6.1.31-6.1.45 (Batch 3 of 6.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61031": {
        "en": {
            "simple": "The causative of @deva[श्वि] optionally undergoes @deva[संप्रसारण] before @deva[सन्] (Desiderative) and @deva[चङ्] (Aorist). Examples: @deva[शुशावयिषति] or @deva[शिश्वाययिषति]; @deva[अशूशवत्] or @deva[अशिश्वयत्].",
            "standard": "For the @deva[णिजन्त] (causative) of @deva[श्वि], @deva[संप्रसारण] is optional before @deva[सन्] and @deva[चङ्]. Desiderative: @deva[शुशावयिषति] (with @deva[संप्रसारण]) or @deva[शिश्वाययिषति] (without). Aorist: @deva[अशूशवत्] or @deva[अशिश्वयत्]. By the maxim @deva[संप्रसारणं संप्रसारणाश्रयं च बलीयो भवति], when @deva[संप्रसारण] applies, the @deva[अभ्यास] also gets it.",
            "advanced": "This extends @ref[6.1.30] @deva[विभाषा] to @deva[णिजन्त श्वि] before @deva[सन्]/चङ्. With @deva[संप्रसारण]: @deva[श्वि] → @deva[शु] (causative @deva[शावि]) → @deva[शुशावयिषति] (@deva[सनन्त]), @deva[अशूशवत्] (@deva[चङ्]). Without: @deva[शिश्वाययिषति], @deva[अशिश्वयत्]. The maxim @deva[संप्रसारणं संप्रसारणाश्रयं च बलीयः] ensures @deva[अभ्यास] also undergoes @deva[संप्रसारण] when the base does."
        }
    },
    "61032": {
        "en": {
            "simple": "The causative of @deva[ह्वे] (to call) undergoes @deva[संप्रसारण] before @deva[सन्] and @deva[चङ्]. Examples: @deva[जुहावयिषति] (desires to cause to call); @deva[अजूहवत्] (caused to call—Aorist).",
            "standard": "Unlike @ref[6.1.31] (optional), @deva[संप्रसारण] is obligatory for @deva[णिजन्त ह्वे] before @deva[सन्]/चङ्. Desiderative: @deva[जुहावयिषति], @deva[जुहावयिषतः], @deva[जुहावयिषन्ति]. Aorist: @deva[अजूहवत्], @deva[अजूहवताम्], @deva[अजूहवन्]. The root @deva[ह्वा] doesn't take @deva[य]-augment (@ref[7.3.37]) before @deva[णि] because @deva[संप्रसारण] is stronger.",
            "advanced": "The repetition of @deva[संप्रसारण] (though @deva[अनुवृत्ति] was present) indicates the maxim's force extends here. @deva[ह्वे] → @deva[हु] (@deva[संप्रसारण]) → causative @deva[हावि] → @deva[जुहावयिषति] (@deva[सन्]), @deva[अजूहवत्] (@deva[चङ्]). The @deva[य]-augment of @ref[7.3.37] is blocked because @deva[संप्रसारण] takes precedence. This and @ref[6.1.33] were originally one sūtra, divided by Vārtika authority."
        }
    },
    "61033": {
        "en": {
            "simple": "For @deva[ह्वा], @deva[संप्रसारण] occurs in both syllables of the @deva[अभ्यस्त] (reduplicated form). Examples: Perfect @deva[जुहाव]; Intensive @deva[जोहूयते]; Desiderative @deva[जुहूषति].",
            "standard": "The term @deva[अभ्यस्त] means both the @deva[अभ्यास] and the @deva[अभ्यस्यमान] (reduplicate and reduplicated). @deva[संप्रसारण] occurs before reduplication: @deva[ह्वा] → @deva[हु] → @deva[जुहु] → @deva[जुहाव] (Perfect), @deva[जोहूयते] (Intensive), @deva[जुहूषति] (Desiderative). This and @ref[6.1.32] were originally one sūtra.",
            "advanced": "The @deva[अभ्यस्त] here = @deva[अभ्यासः अभ्यस्यमानं च]. @deva[संप्रसारण] applies pre-reduplication: @deva[ह्वा] → @deva[हु] → reduplication → @deva[जुहु] (@deva[ह] → @deva[ज] by @ref[7.4.62]) → @deva[जुहाव] (@deva[गुण], Perfect). Intensive: @deva[जोहूयते]. Desiderative: @deva[जुहूषति]. The division from @ref[6.1.32] follows Vārtika: @deva[ह्वाविर्भावार्थमस्य वैयात्याख्यानम्]."
        }
    },
    "61034": {
        "en": {
            "simple": "In Vedic, @deva[ह्वे] shows diverse @deva[संप्रसारण] patterns. Examples: @deva[हुवे] (I invoke) or @deva[ह्वयामि]; @deva[हवः] (invocation).",
            "standard": "The @deva[छन्दस्] allows variation: @deva[इन्द्राग्नी हुवे] (with @deva[संप्रसारण]—Ātmanepada Present 1st singular, @deva[शप्] elided, @deva[उवङ्] substitution); @deva[ह्वयामि मरुतः शिवान्] (without). Also @deva[हवः] in @deva[श्रुधीहवम्] (RV 1.2.1).",
            "advanced": "Vedic @deva[विभाषा] for @deva[ह्वे]: @deva[हुवे] = @deva[ह्वे] → @deva[हु] (@deva[संप्रसारण]) + @deva[ए] (Ātm. 1s) → @deva[शप्]-@deva[लुक्] → @deva[उवङ्]-substitution → @deva[हुवे]. Without @deva[संप्रसारण]: @deva[ह्वयामि विश्वान् देवान्]. The noun @deva[हवः] (invocation) in @deva[श्रुधीहवम्] also shows @deva[संप्रसारण]. These variations are @deva[छान्दस]."
        }
    },
    "61035": {
        "en": {
            "simple": "In Vedic, @deva[की] diversely substitutes for @deva[चाय्]. Examples: @deva[निचिक्युः] (they observed); but also @deva[निचाय्यः] (to be observed) without substitution.",
            "standard": "The @deva[छन्दस्] shows variation in @deva[चाय्] → @deva[की] substitution. With substitution: @deva[विधुना निचिक्युः], @deva[नान्यं चिक्युर्न निचिक्युरन्यम्]—these are Perfect forms with @deva[उस्] ending. Without: @deva[अग्निर्ज्योतिर्निचाय्यः].",
            "advanced": "Vedic @deva[विकल्प] for @deva[चाय्] → @deva[की]: the Perfect @deva[उस्]-forms show substitution (@deva[निचिक्युः], @deva[चिक्युः]), while the @deva[ण्यत्]-form @deva[निचाय्यः] retains the base. This complements @ref[6.1.21] which taught obligatory @deva[की] before @deva[यङ्]; in @deva[छन्दस्], the substitution extends to other forms but optionally."
        }
    },
    "61036": {
        "en": {
            "simple": "In Vedic, these irregular forms occur: @deva[अपस्पृधेथाम्] (you two competed), @deva[आनृचुः], @deva[आनृशुः], @deva[चिच्युषे], @deva[तित्याज], @deva[श्रातः], @deva[श्रितम्], @deva[आशीः], @deva[आशीर्तः].",
            "standard": "Vedic irregular forms: @deva[अपस्पृधेथाम्] (from @deva[स्पर्ध्], Imperfect 2nd dual Ātm.—reduplication, @deva[र्]-vocalization, @deva[अ]-elision); @deva[आनृचुः] (from @deva[अर्च्]); @deva[आनृशुः] (from @deva[ऋश्]); @deva[चिच्युषे] (from @deva[च्यु]); @deva[तित्याज] (from @deva[त्यज्]—Perfect with irregular @deva[अभ्यास]); @deva[श्रातः] (from @deva[श्रा]); @deva[श्रितम्]; @deva[आशीः] (from @deva[आशास्]); @deva[आशीर्तः]. In @deva[लौकिक]: @deva[अस्पर्धेथाम्].",
            "advanced": "These are @deva[निपातन] forms for @deva[छन्दस्]: (1) @deva[अपस्पृधेथाम्] = @deva[अप] + @deva[स्पर्ध्] + @deva[एथाम्] (लङ् 2nd dual Ātm.), with @deva[द्वित्व], @deva[र्]-@deva[संप्रसारण], @deva[अ]-@deva[लोप]; (2) @deva[आनृचुः] = Perfect of @deva[अर्च्] with @deva[र्]-@deva[संप्रसारण]; (3) @deva[चिच्युषे] = @deva[च्यु] + @deva[क्वसु]; (4) @deva[तित्याज] = @deva[त्यज्] Perfect with @deva[इ]-@deva[अभ्यास]; (5) @deva[श्रातः] = @deva[श्रा] + @deva[क्त] without @ref[6.1.27] @deva[शृ]; (6) @deva[आशीः] = irregular @deva[आशास्]. @deva[लौकिक] forms differ."
        }
    },
    "61037": {
        "en": {
            "simple": "When a semivowel has undergone @deva[संप्रसारण], another semivowel preceding it in the same word does not undergo @deva[संप्रसारण]. Example: @deva[व्यध्] → @deva[विद्धः] (not @deva[*उइद्धः]).",
            "standard": "If @deva[य्] in @deva[व्यध्] is vocalized to @deva[इ], the preceding @deva[व्] is not vocalized to @deva[उ]: @deva[विद्धः]. Similarly: @deva[व्यच्] → @deva[विचितः]; @deva[व्येञ्] → @deva[संवीतः]. Though the @deva[संप्रसारण] rule doesn't specify which semivowel, the maxim applies: perform the operation on the letter nearest to the operator (@deva[प्रत्यय]).",
            "advanced": "This @deva[प्रतिषेध] prevents cascading @deva[संप्रसारण]. The principle: @deva[संप्रसारणाश्रये संप्रसारणं न भवति]—a semivowel dependent on (i.e., preceding) an already-vocalized semivowel doesn't vocalize. The selection principle: the semivowel nearest to the @deva[प्रत्यय] vocalizes first (@deva[अन्त्यस्य विधिः]). Examples: @deva[व्यध्] → @deva[विध्] (@deva[य्] → @deva[इ]) → @deva[विद्धः]; @deva[व्यच्] → @deva[विचितः]; @deva[व्ये] → @deva[संवीतः]."
        }
    },
    "61038": {
        "en": {
            "simple": "For the substitute root @deva[वय्] (from @deva[वे] by @ref[2.4.41]), the @deva[य्] is not vocalized in the Perfect. Examples: @deva[उवाय], @deva[ऊयतुः], @deva[ऊयुः].",
            "standard": "The root @deva[वे] becomes @deva[वय्] by @ref[2.4.41]. In the Perfect, no @deva[संप्रसारण] of @deva[य्]: @deva[उवाय] (3rd singular), @deva[ऊयतुः] (3rd dual), @deva[ऊयुः] (3rd plural). The word @deva[लिट्] is used for subsequent sūtras; this rule could function without it.",
            "advanced": "The @deva[आदेश] @deva[वय्] (from @deva[वे] by @ref[2.4.41]) doesn't take @deva[संप्रसारण] in @deva[लिट्]. Derivation: @deva[वय्] + @deva[णल्] → @deva[ववय्] (reduplication) → @deva[उवय्] (@deva[व्]-@deva[संप्रसारण] of @deva[अभ्यास]) → @deva[उवाय] (@deva[गुण]). Weak forms: @deva[ऊयतुः] (the @deva[व्] of @deva[अभ्यास] vocalizes and lengthens). The term @deva[लिटि] serves @deva[अनुवृत्ति] for @ref[6.1.39]-@ref[6.1.40]."
        }
    },
    "61039": {
        "en": {
            "simple": "Before @deva[कित्] affixes of @deva[लिट्], @deva[व्] may optionally substitute for @deva[य्] in @deva[वय्]. Examples: @deva[ऊयतुः] or @deva[ऊवतुः]; @deva[ऊयुः] or @deva[ऊवुः].",
            "standard": "For @deva[वय्] (substitute of @deva[वे]), before @deva[कित्] Perfect affixes, @deva[य्] → @deva[व्] is optional: @deva[ऊयतुः] or @deva[ऊवतुः], @deva[ऊयुः] or @deva[ऊवुः]. According to Patañjali, the sūtra could simply be @deva[अन्यतरस्यां किति वेञः]—with @deva[संप्रसारण] prohibited, we get @deva[ववतुः], @deva[ववुः]; without prohibition, we get the standard forms.",
            "advanced": "This @deva[विकल्प] allows @deva[य्] → @deva[व्] for @deva[वय्] before @deva[किल्लिट्]. The @deva[वश्चास्य] phrase may be redundant per Patañjali: @deva[अन्यतरस्यां किति वेञः] suffices. Without @deva[संप्रसारण]-prohibition (@ref[6.1.38]): @deva[वय्] → @deva[ववय्] → @deva[उवय्] → @deva[उवातुः]? No—@ref[6.1.38] blocks this. With @deva[व्]-substitution option: @deva[ऊवतुः]. Without: @deva[ऊयतुः]."
        }
    },
    "61040": {
        "en": {
            "simple": "The semivowel of @deva[वे] (to weave) is not vocalized in the Perfect. Examples: @deva[ववौ] (he wove), @deva[ववतुः], @deva[ववुः].",
            "standard": "The root @deva[वे] belongs to @deva[यजादि] and would normally vocalize before @deva[कित्] by @ref[6.1.15], and its @deva[अभ्यास] would vocalize before non-@deva[कित्] by @ref[6.1.17]. Both are prohibited here: @deva[ववौ], @deva[ववतुः], @deva[ववुः].",
            "advanced": "This @deva[प्रतिषेध] blocks two @deva[संप्रसारण] sources for @deva[वे उतौ] (weaving): (1) @ref[6.1.15] @deva[यजादि]-@deva[संप्रसारण] before @deva[कित्]; (2) @ref[6.1.17] @deva[अभ्यास]-@deva[संप्रसारण] before non-@deva[कित्] @deva[लिट्]. Result: @deva[वे] → @deva[ववे] → @deva[ववौ] (@deva[गुण]), @deva[ववतुः], @deva[ववुः]. No @deva[व्] → @deva[उ] anywhere."
        }
    },
    "61041": {
        "en": {
            "simple": "The semivowel of @deva[वे] (to weave) is not vocalized before @deva[ल्यप्]. Examples: @deva[प्रवाय] (having woven), @deva[उपवाय].",
            "standard": "Before @deva[ल्यप्] (absolutive with prefix), @deva[वे] doesn't undergo @deva[संप्रसारण]: @deva[प्रवाय], @deva[उपवाय]. This sūtra is separated from @ref[6.1.40] so that @deva[ल्यपि] can run as @deva[अनुवृत्ति] into subsequent sūtras.",
            "advanced": "This extends the @deva[संप्रसारण]-prohibition to @deva[ल्यप्] for @deva[वे उतौ]. Derivation: @deva[प्र] + @deva[वे] + @deva[ल्यप्] → @deva[प्रवाय] (@deva[ए] → @deva[आय्] by @ref[6.1.45], no @deva[संप्रसारण]). The separation serves @deva[अनुवृत्ति] purposes: @ref[6.1.42]-@ref[6.1.44] need @deva[ल्यपि] but not @deva[लिटि]."
        }
    },
    "61042": {
        "en": {
            "simple": "The semivowel of @deva[ज्या] (to grow old) is not vocalized before @deva[ल्यप्]. Examples: @deva[प्रज्याय], @deva[उपज्याय].",
            "standard": "Before @deva[ल्यप्], @deva[ज्या] (belonging to @deva[ग्रहादि] @ref[6.1.16]) doesn't undergo @deva[संप्रसारण]: @deva[प्रज्याय], @deva[उपज्याय]. Without this prohibition, @deva[*प्रजीय] would result.",
            "advanced": "@deva[ज्या जरणे] belongs to @deva[ग्रहादि] (@ref[6.1.16]), which would cause @deva[संप्रसारण] before @deva[कित्]/ङित्. @deva[ल्यप्] is @deva[कित्] (@ref[1.2.18]). This sūtra blocks: @deva[ज्या] + @deva[ल्यप्] → @deva[ज्याय] (@deva[आ] → @deva[आय्]) → @deva[प्रज्याय]. Without block: @deva[*प्रजीय]."
        }
    },
    "61043": {
        "en": {
            "simple": "The semivowel of @deva[व्ये] (to cover) is not vocalized before @deva[ल्यप्]. Examples: @deva[प्रव्याय], @deva[उपव्याय].",
            "standard": "Before @deva[ल्यप्], @deva[व्ये] (also a @deva[यजादि]) doesn't undergo @deva[संप्रसारण]: @deva[प्रव्याय], @deva[उपव्याय]. This sūtra is separated to allow @deva[व्ये] to run as @deva[अनुवृत्ति] into @ref[6.1.44].",
            "advanced": "@deva[व्ये ञ् संवरणे] is @deva[यजादि] (@ref[6.1.15]). @deva[ल्यप्] is @deva[कित्]. This blocks @deva[संप्रसारण]: @deva[व्ये] + @deva[ल्यप्] → @deva[व्याय] → @deva[प्रव्याय]. The separation from @ref[6.1.42] enables @deva[व्ये] @deva[अनुवृत्ति] for @ref[6.1.44]."
        }
    },
    "61044": {
        "en": {
            "simple": "When @deva[व्ये] is preceded by @deva[परि], @deva[संप्रसारण] before @deva[ल्यप्] is optional. Examples: @deva[परिवीय यूपम्] or @deva[परिव्याय].",
            "standard": "With @deva[परि], @deva[व्ये] optionally vocalizes before @deva[ल्यप्]: @deva[परिवीय यूपम्] (with @deva[संप्रसारण]) or @deva[परिव्याय] (without). The @deva[तुक्]-augment (@ref[6.1.71]) is blocked by @ref[6.4.2] which causes vowel lengthening instead.",
            "advanced": "This @deva[विभाषा] for @deva[परि] + @deva[व्ये] + @deva[ल्यप्]: with @deva[संप्रसारण]: @deva[व्ये] → @deva[वि] → @deva[वी] (@ref[6.4.2] lengthening) + @deva[य] → @deva[परिवीय]. Without: @deva[परिव्याय]. The @deva[तुक्]-augment (@ref[6.1.71]) is debarred by @ref[6.4.2] being @deva[परसूत्र] (subsequent sūtra takes precedence)."
        }
    },
    "61045": {
        "en": {
            "simple": "A root ending in a diphthong (@deva[ए], @deva[ऐ], @deva[ओ], @deva[औ]) in the @deva[धातुपाठ] substitutes @deva[आ] for that diphthong, unless a @deva[शित्] affix follows. Examples: @deva[ग्लै] → @deva[ग्लाता], @deva[ग्लातुम्]; @deva[शो] → @deva[निशाता].",
            "standard": "Roots listed with final @deva[एच्] (diphthong: @deva[ए], @deva[ऐ], @deva[ओ], @deva[औ]) substitute @deva[आ] when no @deva[शित्] affix follows. Examples: @deva[ग्लै] → @deva[ग्लाता], @deva[ग्लातुम्], @deva[ग्लातव्यम्]; @deva[शो] → @deva[निशाता], @deva[निशातुम्]. Not for non-diphthong endings: @deva[कृ] → @deva[कर्ता]; @deva[हृ] → @deva[हर्ता].",
            "advanced": "This @deva[आदेश] applies to @deva[उपदेशे एजन्त धातु]: @deva[एच्] (= @deva[ए], @deva[ऐ], @deva[ओ], @deva[औ]) → @deva[आ] when @deva[अशिति] (no @deva[शित्] affix). The @deva[धातोः] from @ref[6.1.8] is understood. Examples: @deva[ग्लै म्लाने] → @deva[ग्लाता], @deva[ग्लातुम्], @deva[ग्लातव्यम्]; @deva[शो तनूकरणे] → @deva[निशाता], @deva[निशातुम्], @deva[निशातव्यम्]. Counter-examples (non-@deva[एच्]): @deva[कृ] → @deva[कर्ता]; @deva[हृ] → @deva[हर्ता]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.31-6.1.45)")
