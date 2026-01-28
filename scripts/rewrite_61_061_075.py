#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 6.1.61-6.1.75 (Batch 5 of 6.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61061": {
        "en": {
            "simple": "@deva[शीर्षन्] substitutes for @deva[शिरस्] when a @deva[तद्धित] affix beginning with @deva[य] follows. Examples: @deva[शीर्षण्यः स्वरः] (head-related tone); @deva[शीर्षण्यो हि मुख्यो भवति].",
            "standard": "Before @deva[यादि तद्धित], @deva[शिरस्] → @deva[शीर्षन्]: the affix @deva[यत्] (@ref[4.3.55]) follows. The @deva[शीर्षन्] retains its form before @deva[यत्]—the final @deva[अन्] is not elided. Examples: @deva[शीर्षण्यः], @deva[शीर्षण्यम्].",
            "advanced": "This @deva[आदेश] is inferred from context (the @deva[स्थानिन्] @deva[शिरस्] is not stated). Before @deva[यादि तद्धित] (e.g., @deva[यत्] by @ref[4.3.55]): @deva[शिरस्] → @deva[शीर्षन्]. The @deva[अन्] final is retained: @deva[शीर्षण्यः], not @deva[*शीर्ष्यः]. This differs from @ref[6.1.62] which gives @deva[शीर्ष] (not @deva[शीर्षन्]) before @deva[अजादि]."
        }
    },
    "61062": {
        "en": {
            "simple": "@deva[शीर्ष] (not @deva[शीर्षन्]) substitutes for @deva[शिरस्] when a @deva[तद्धित] affix beginning with a vowel follows. Examples: @deva[हस्तिशिरसोऽपत्यम्] → @deva[हास्तिशीर्षिः]; @deva[स्थूलशिरस इदम्] → @deva[स्थौलशीर्षम्].",
            "standard": "Before @deva[अजादि तद्धित], @deva[शिरस्] → @deva[शीर्ष] (not @deva[शीर्षन्]): @deva[हास्तिशीर्षिः] (patronymic with @deva[इञ्] @ref[4.1.96]); @deva[स्थौलशीर्षम्]. If @deva[शीर्षन्] were used, @ref[6.4.168] would retain @deva[न्], giving wrong forms. For feminine @deva[हास्तिशीर्षिः] + @deva[ष्यङ्]: proper forms result.",
            "advanced": "The choice of @deva[शीर्ष] (not @deva[शीर्षन्]) avoids @ref[6.4.168] issues. With @deva[शीर्षन्], @deva[न्] would persist before @deva[अजादि], blocking correct derivations. Examples: @deva[हस्तिशिरस्] + @deva[इञ्] → @deva[हास्तिशीर्षिः] (वृद्धि of both); @deva[स्थूलशिरस्] + @deva[अण्] → @deva[स्थौलशीर्षम्]. Feminine @deva[हास्तिशीर्षिः] + @deva[ष्यङ्] requires @deva[शीर्ष]-base."
        }
    },
    "61063": {
        "en": {
            "simple": "In weak cases (from accusative plural onward), these stems substitute: @deva[पद्] for @deva[पाद्], @deva[दत्] for @deva[दन्त], @deva[नस्] for @deva[नासिका], @deva[मास्] for @deva[मास], @deva[हृद्] for @deva[हृदय], @deva[निश्] for @deva[निशा], @deva[असन्] for @deva[असृज्], @deva[यूषन्] for @deva[यूष], @deva[दोषन्] for @deva[दोस्], @deva[यकन्] for @deva[यकृत्], @deva[शकन्] for @deva[शकृत्], @deva[उदन्] for @deva[उदक], @deva[आसन्] for @deva[आस्य].",
            "standard": "Before @deva[भसंज्ञक] (weak) case endings, these substitutes apply: @deva[पाद्] → @deva[पद्], @deva[दन्त] → @deva[दत्], @deva[नासिका] → @deva[नस्], @deva[मास] → @deva[मास्], @deva[हृदय] → @deva[हृद्], @deva[निशा] → @deva[निश्], @deva[असृज्] → @deva[असन्], @deva[यूष] → @deva[यूषन्], @deva[दोस्] → @deva[दोषन्], @deva[यकृत्] → @deva[यकन्], @deva[शकृत्] → @deva[शकन्], @deva[उदक] → @deva[उदन्], @deva[आस्य] → @deva[आसन्]. Examples: @deva[पद्भ्याम्], @deva[दद्भिः], @deva[हृद्भिः].",
            "advanced": "These @deva[भसंज्ञक आदेश] apply before weak endings (accusative plural onward): @deva[पाद्] → @deva[पद्]; @deva[दन्त] → @deva[दत्]; @deva[नासिका] → @deva[नस्]; @deva[मास] → @deva[मास्]; @deva[हृदय] → @deva[हृद्]; @deva[निशा] → @deva[निश्]; @deva[असृज्] → @deva[असन्]; @deva[यूष] → @deva[यूषन्]; @deva[दोस्] → @deva[दोषन्]; @deva[यकृत्] → @deva[यकन्]; @deva[शकृत्] → @deva[शकन्]; @deva[उदक] → @deva[उदन्]; @deva[आस्य]/आसन → @deva[आसन्] (Kāśikā vs. Siddhānta Kaumudī differ on original)."
        }
    },
    "61064": {
        "en": {
            "simple": "A root listed with initial @deva[ष्] in the @deva[धातुपाठ] substitutes @deva[स्] for that @deva[ष्]. Examples: @deva[षह्] → @deva[सहते]; @deva[षिच्] → @deva[सिञ्चति].",
            "standard": "Roots with @deva[उपदेश]-initial @deva[ष्] change it to @deva[स्]: @deva[षह्] → @deva[सहते]; @deva[षिच्] → @deva[सिञ्चति]. Not for non-roots: @deva[षोडश], @deva[षडिकः], @deva[षण्डः]. Not for non-initial @deva[ष्]: @deva[कर्षति], @deva[कृषति]. Roots are listed with @deva[ष्] so @ref[8.3.59] can convert @deva[स्] back to @deva[ष्] after certain sounds.",
            "advanced": "The @deva[धात्वादेः] condition restricts to root-initial. Process: @deva[षह्] (@deva[उपदेश]) → @deva[सह्] (@deva[ष्] → @deva[स्]) → @deva[सहते]. Purpose of listing with @deva[ष्]: enables @ref[8.3.59] @deva[षत्व] after @deva[इक्]: @deva[अभिषह्], @deva[प्रषह्]. Non-initial @deva[ष्] unaffected: @deva[कृष्] remains. Non-@deva[धातु]: @deva[षोडश] (numeral) unaffected."
        }
    },
    "61065": {
        "en": {
            "simple": "A root listed with initial @deva[ण्] in the @deva[धातुपाठ] substitutes @deva[न्] for that @deva[ण्]. Examples: @deva[णीञ्] → @deva[नयति]; @deva[णम्] → @deva[नमति]; @deva[णह्] → @deva[नह्यति].",
            "standard": "Roots with @deva[उपदेश]-initial @deva[ण्] change it to @deva[न्]: @deva[णी] → @deva[नयति]; @deva[णम्] → @deva[नमति]; @deva[णह्] → @deva[नह्यति]. Not for non-initial: @deva[अण्] → @deva[अणति]. Not for denominatives: @deva[णकारमिच्छति] → @deva[णकारीयति]. By @ref[8.4.14], these roots revert to @deva[ण्] after certain prefixes.",
            "advanced": "Similar to @ref[6.1.64], roots are listed with @deva[ण्] for @ref[8.4.14] @deva[णत्व] after @deva[रषाभ्याम्]: @deva[प्रणमति], @deva[प्रणयति]. @deva[धात्वादेः] understood: only initial @deva[ण्]. @deva[नामधातु] excluded: @deva[णकारीयति]. All @deva[णादि] roots: @deva[णी], @deva[णम्], @deva[णह्], etc."
        }
    },
    "61066": {
        "en": {
            "simple": "Final @deva[व्] or @deva[य्] of a stem is elided when followed by any consonant except @deva[य्]. Examples: @deva[दिव्] → @deva[दिदिवान्] (Perfect participle); @deva[ऊय्] + @deva[त] → @deva[ऊतम्] (woven).",
            "standard": "Before @deva[वल्] consonants (all consonants except @deva[य्]), final @deva[व्]/य् of any stem is elided: @deva[दिव्] + @deva[क्वसु] → @deva[दिव्दिव्वस्] → @deva[दिदिवस्] → @deva[दिदिवान्]; @deva[ऊय्] + @deva[त] → @deva[ऊतम्]; @deva[क्नूय्] + @deva[त] → @deva[क्नूतम्]. Affix @deva[ढ] also triggers: @deva[विद्युत्] + @deva[ढ] → @deva[वैद्युतः].",
            "advanced": "This @deva[लोप] applies to @deva[व्य्]-final stems (root or otherwise) before @deva[वल्] (= @deva[हल्] minus @deva[य्]). Examples: @deva[दिव्] + @deva[क्वसु] → reduplication → @deva[दिव्दिव्वस्] → @deva[दिदि] + @deva[व्] + @deva[वस्] → @deva[दिदिवस्] (@deva[व्]-@deva[लोप] before @deva[व्]); @deva[ऊय्] + @deva[क्त] → @deva[ऊतम्]; Taddhita @deva[ढ]: @deva[विद्युत्] + @deva[ढ] → @deva[वैद्युतः]."
        }
    },
    "61067": {
        "en": {
            "simple": "The affix @deva[वि] (as in @deva[क्विप्], @deva[क्विन्], @deva[ण्वि]) when reduced to single @deva[व्] is elided. Examples: @deva[ब्रह्महा] (Brahmin-killer); @deva[घृतस्पृक्] (touching ghee); @deva[अर्धभाक्] (sharing half).",
            "standard": "Affixes containing @deva[वि] (@deva[क्विप्], @deva[क्विन्], @deva[ण्वि]) reduce to single @deva[व्], which being @deva[अपृक्त] (@ref[1.2.41]) is elided: @deva[ब्रह्महा], @deva[भ्रूणहा] (@deva[क्विप्] @ref[3.2.87]); @deva[घृतस्पृक्], @deva[तैलस्पृक्] (@deva[क्विन्] @ref[3.2.58]); @deva[अर्धभाक्], @deva[पादभाक्] (@deva[ण्वि] @ref[3.2.62]).",
            "advanced": "The @deva[अपृक्त] (single-consonant) @deva[व्] of @deva[वि]-affixes is elided by this rule. @deva[क्विप्] forms: @deva[हन्] + @deva[क्विप्] → @deva[हन्] + @deva[व्] → @deva[हा] (@deva[व्]-@deva[लोप]) → @deva[ब्रह्महा]. @deva[क्विन्] forms: @deva[स्पृश्] + @deva[क्विन्] → @deva[स्पृक्] (@deva[श् → क्], @deva[व्]-@deva[लोप]) → @deva[घृतस्पृक्]. @deva[ण्वि] forms: @deva[भज्] + @deva[ण्वि] → @deva[भाक्] → @deva[अर्धभाक्]."
        }
    },
    "61068": {
        "en": {
            "simple": "After a consonant, the @deva[अपृक्त] (single-consonant) nominative @deva[स्], and @deva[ति]/सि (reduced to @deva[त्]/स्) are elided. Also, nominative @deva[स्] is elided after @deva[ङी] or long @deva[आप्]. Examples: @deva[प्राङ्], @deva[विद्युत्]; @deva[कुमारी], @deva[खट्वा].",
            "standard": "After @deva[हल्] (consonant), @deva[ङी], or @deva[दीर्घ आप्]: (1) nominative @deva[सु] when @deva[अपृक्त] (→ @deva[स्]) is elided; (2) @deva[ति]/सि when reduced to @deva[त्]/स् is elided. Examples: @deva[प्राञ्च्] + @deva[स्] → @deva[प्राङ्]; @deva[विद्युत्] + @deva[स्] → @deva[विद्युत्]; @deva[कुमारी] + @deva[स्] → @deva[कुमारी]; @deva[खट्वा] + @deva[स्] → @deva[खट्वा].",
            "advanced": "This @deva[लोप] has two conditions: (1) after @deva[हल्], @deva[ङी], or @deva[दीर्घाप्]: @deva[सु] (→ @deva[स्]) elided; (2) after @deva[हल्]: @deva[तिप्]/सिप् (→ @deva[त्]/स्) when @deva[अपृक्त] elided. @deva[हलन्त]: @deva[प्राञ्च्] + @deva[सु] → @deva[प्राङ्] (@deva[स्]-@deva[लोप], then @deva[च् → ङ्]). @deva[ङ्यन्त]: @deva[कुमारी] + @deva[सु] → @deva[कुमारी]. @deva[आबन्त]: @deva[खट्वा] + @deva[सु] → @deva[खट्वा]."
        }
    },
    "61069": {
        "en": {
            "simple": "In vocative singular, the consonant of @deva[सु] (or its @deva[अम्]-substitute) is elided after stems ending in @deva[ए], @deva[ओ], or a short vowel. Examples: @deva[हे अग्ने], @deva[हे वायो], @deva[हे देव].",
            "standard": "The vocative uses nominative endings. After @deva[ए]/@deva[ओ]/@deva[ह्रस्व]-final stems, the @deva[हल्] portion of @deva[सु] (or @deva[अम्] substitute) is elided: @deva[अग्नि] → @deva[अग्ने] (@deva[गुण] by @ref[7.3.108]) + @deva[स्] → @deva[अग्ने] (@deva[स्]-@deva[लोप]); @deva[वायु] → @deva[वायो] + @deva[स्] → @deva[वायो]; @deva[देव] + @deva[स्] → @deva[देव].",
            "advanced": "The @deva[अपृक्त] condition from @ref[6.1.68] doesn't continue here (its repetition there indicates). @deva[लोप] applies to @deva[हल्] of @deva[सु]/अम् after @deva[एजन्त]/ह्रस्वान्त. Process: @deva[गुण] by @ref[7.3.108] → @deva[ए]/ओ ending → @deva[स्]-@deva[लोप]. Examples: @deva[हे अग्ने] (@deva[इ] → @deva[ए], @deva[स्]-@deva[लोप]); @deva[हे वायो] (@deva[उ] → @deva[ओ], @deva[स्]-@deva[लोप]); @deva[हे देव] (@deva[अ]-final, @deva[स्]-@deva[लोप])."
        }
    },
    "61070": {
        "en": {
            "simple": "In Vedic, the neuter nominative/accusative plural ending @deva[इ] (@deva[शि]) is optionally elided. Examples: @deva[या क्षेत्रा] or @deva[यानि क्षेत्राणि]; @deva[या वना] or @deva[यानि वनानि].",
            "standard": "In @deva[छन्दस्], the @deva[शि] ending (neuter nom./acc. plural) optionally undergoes @deva[लोप]: @deva[या क्षेत्रा] (with @deva[लोप]) or @deva[यानि क्षेत्राणि] (without); @deva[या वना] or @deva[यानि वनानि].",
            "advanced": "This @deva[छान्दस विभाषा] allows @deva[शि]-@deva[लोप] for neuter plural. Without @deva[लोप]: @deva[यानि क्षेत्राणि] (standard). With @deva[लोप]: @deva[या क्षेत्रा] (Vedic). The demonstrative @deva[यद्] shows corresponding optional forms: @deva[या]/यानि."
        }
    },
    "61071": {
        "en": {
            "simple": "A root ending in a short vowel takes @deva[तुक्]-augment (@deva[त्]) when followed by a @deva[कृत्] affix marked with @deva[प्]. Examples: @deva[अग्निचित्] (fire-heaper); @deva[सोमसुत्] (soma-presser); @deva[प्रकृत्य], @deva[प्रहृत्य].",
            "standard": "Before @deva[पित् कृत्] affixes, @deva[ह्रस्वान्त धातु] takes @deva[तुक्]: @deva[चि] + @deva[क्विप्] → @deva[चित्] → @deva[अग्निचित्]; @deva[सु] + @deva[क्विप्] → @deva[सुत्] → @deva[सोमसुत्]. With @deva[ल्यप्]: @deva[प्रकृत्य], @deva[प्रहृत्य], @deva[उपस्तुत्य]. Not for @deva[दीर्घान्त]: @deva[आलूय], @deva[ग्रामणीः]. Not for non-@deva[पित्]: @deva[कूतम्], @deva[हृतम्]. Not for @deva[तद्धित]: @deva[पटुतरः].",
            "advanced": "The @deva[तुक्] augment applies to @deva[ह्रस्व]-final roots before @deva[पित् कृत्]. Condition check: (1) @deva[ह्रस्वान्त धातु]: @deva[चि], @deva[सु], @deva[कृ], @deva[हृ], @deva[स्तु]; (2) @deva[पित् कृत्]: @deva[क्विप्], @deva[ल्यप्]. Counter-examples: @deva[दीर्घान्त] (@deva[लू] → @deva[आलूय], no @deva[तुक्]); non-@deva[पित्] (@deva[क्त] → @deva[कूतम्], @deva[हृतम्]); @deva[तद्धित] (@deva[पटुतरः], @deva[पटुतमः])."
        }
    },
    "61072": {
        "en": {
            "simple": "The term @deva[संहितायाम्] (in continuous speech) governs sūtras from here through @ref[6.1.157]. Sandhi rules apply when words are pronounced together without pause.",
            "standard": "This @deva[अधिकार] extends through @ref[6.1.157]. Rules in this section apply when words are in @deva[संहिता] (unbroken utterance). Examples: @deva[दधि] + @deva[अत्र] → @deva[दध्यत्र] (@deva[इ] → @deva[य्]); @deva[मधु] + @deva[अत्र] → @deva[मध्वत्र] (@deva[उ] → @deva[व्]). With pause: @deva[दधि अत्र] (no sandhi).",
            "advanced": "This @deva[अधिकार सूत्र] governs @ref[6.1.72]-@ref[6.1.157]. @deva[संहिता] = @deva[परः सन्निकर्षः संहिता] (@ref[1.4.109]): closest proximity of sounds. When words are pronounced without hiatus, sandhi applies: @deva[इ/उ] → @deva[य्/व्] before vowels. Without @deva[संहिता]: @deva[दधि। अत्र] (pause preserves forms)."
        }
    },
    "61073": {
        "en": {
            "simple": "A preceding short vowel takes @deva[तुक्]-augment (@deva[त्]) when @deva[छ] follows in continuous speech. Examples: @deva[इच्छति], @deva[गच्छति]. The @deva[त्] becomes @deva[च्] by @ref[8.4.40].",
            "standard": "Before @deva[छ] in @deva[संहिता], a short vowel takes @deva[तुक्]: @deva[इष्] + @deva[छ] → @deva[इ] + @deva[त्] + @deva[छ] → @deva[इच्छति] (@deva[त्] → @deva[च्] by @ref[8.4.40]); @deva[गम्] + @deva[छ] → @deva[गच्छति]. The @deva[त्] augments the vowel itself, not the syllable—so in @deva[चिच्छिदतुः], @deva[चिच्छिदुः], the @deva[त्] is part of @deva[इ], not the @deva[अभ्यास] @deva[चि], avoiding @ref[7.4.60] elision.",
            "advanced": "The @deva[तुक्] is @deva[स्वरस्य आगम], not @deva[प्रातिपदिकस्य]. This matters for @deva[अभ्यस्त] forms: in @deva[चिच्छिद्], the @deva[त्] belongs to @deva[इ]-vowel, not to @deva[अभ्यास चि]. Thus @ref[7.4.60] (@deva[हलादिः शेषः]) doesn't elide it. Process: @deva[छिद्] → @deva[चिछिद्] (reduplication) → @deva[चित्छिद्] (@deva[तुक्]) → @deva[चिच्छिद्] (@ref[8.4.40])."
        }
    },
    "61074": {
        "en": {
            "simple": "The particles @deva[आ] and @deva[मा] take @deva[तुक्]-augment when @deva[छ] follows in continuous speech. Examples: @deva[आच्छाया] (partial shade); @deva[आच्छादयति]; @deva[माच्छिनत्ति] (don't cut).",
            "standard": "The particle @deva[आ] (with meanings: slightly, verbal prefix, inceptive limit, exclusive limit) and prohibitive @deva[मा] obligatorily take @deva[तुक्] before @deva[छ]. This makes obligatory what @ref[6.1.76] would make optional: @deva[आ] + @deva[छाया] → @deva[आच्छाया]; @deva[आ] + @deva[छादयति] → @deva[आच्छादयति]; @deva[मा] + @deva[छिनत्ति] → @deva[माच्छिनत्ति].",
            "advanced": "This @deva[नित्य] rule overrides @ref[6.1.76] @deva[विभाषा]. @deva[आ] has four senses: (1) @deva[ईषत्] (slightly): @deva[आच्छाया] 'partial shade'; (2) @deva[क्रियायोग] (prefix): @deva[आच्छादयति]; (3) @deva[अभिविधि] (inceptive): @deva[आच्छायायाः]; (4) @deva[मर्यादा] (limit): @deva[आच्छायम्]. @deva[मा] = prohibitive: @deva[माच्छिनत्ति]."
        }
    },
    "61075": {
        "en": {
            "simple": "A long vowel takes @deva[तुक्]-augment when @deva[छ] follows in continuous speech. Examples: @deva[ह्रीच्छति], @deva[म्लेच्छति], @deva[विचाच्छायते].",
            "standard": "Before @deva[छ] in @deva[संहिता], @deva[दीर्घ] vowels take @deva[तुक्]: @deva[ह्री] + @deva[छ] → @deva[ह्रीच्छति]; @deva[म्लेच्छ] + @deva[ति] → @deva[म्लेच्छति]; @deva[विचा] + @deva[छाय] → @deva[विचाच्छायते]. The augment belongs to the long vowel itself, not the whole syllable.",
            "advanced": "This extends @deva[तुक्] to @deva[दीर्घ] before @deva[छ]. The @deva[स्वरस्य आगम] principle continues: @deva[त्] augments the vowel, not the @deva[पद]. Examples: @deva[ह्री भये] → @deva[ह्रीच्छति]; @deva[म्लेच्छ्] → @deva[म्लेच्छति]; @deva[अपचाच्छायते], @deva[विचाच्छायते] (causative-intensive)."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.61-6.1.75)")
