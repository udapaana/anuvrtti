#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.3.61-4.3.75 (Batch 5 of 4.3)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "43061": {
        "en": {
            "simple": "After an @deva[अव्ययीभाव] compound (indeclinable compound) with @deva[परि] or @deva[अनु] preceding @deva[ग्राम] (village), the affix @deva[ठञ्] is used in the sense of 'who stays there'.\n\nThis replaces @deva[अण्].\n\nExamples: @deva[पारिग्रामिकः] (one who dwells around the village), @deva[आनुग्रामिकः] (one who dwells from village to village).",
            "standard": "The affix @deva[ठञ्] applies after @deva[परि]/अनु] + @deva[ग्राम] @deva[अव्ययीभाव] compounds in @deva[भव] sense, debarring @deva[अण्].\n\nExamples: @deva[पारिग्रामिकः], @deva[आनुग्रामिकः].",
            "advanced": "@deva[ठञ्] applies after @deva[परि]/अनु]-@deva[ग्राम] @deva[अव्ययीभाव] in @deva[भव] sense, superseding @deva[अण्].\n\nExamples: @deva[पारिग्रामिकः], @deva[आनुग्रामिकः]."
        }
    },
    "43062": {
        "en": {
            "simple": "The affix @deva[छ] comes after @deva[जिह्वामूल] (root of the tongue) and @deva[अङ्गुलि] (finger) in the sense of 'who stays there'.\n\nThis replaces @deva[यत्] from 4.3.55.\n\nExamples: @deva[जिह्वामूलीयम्] (related to the tongue root), @deva[अङ्गुलीयम्] (related to the finger, i.e., a ring).",
            "standard": "The affix @deva[छ] applies after @deva[जिह्वामूल] and @deva[अङ्गुलि] in @deva[भव] sense, debarring @deva[यत्] (@ref[4.3.55]).\n\nExamples: @deva[जिह्वामूलीयम्], @deva[अङ्गुलीयम्].",
            "advanced": "@deva[छ] applies after @deva[जिह्वामूल]/अङ्गुलि] in @deva[भव] sense, superseding @deva[यत्] (@ref[4.3.55]).\n\nExamples: @deva[जिह्वामूलीयम्], @deva[अङ्गुलीयम्]."
        }
    },
    "43063": {
        "en": {
            "simple": "The affix @deva[छ] comes after a word ending in @deva[वर्ग] (class, group) in the sense of 'who occurs there'.\n\nThis replaces @deva[अण्].\n\nExamples: @deva[कवर्गीयम्] (belonging to the @deva[क]-class of consonants), @deva[चवर्गीयम्] (belonging to the @deva[च]-class).",
            "standard": "The affix @deva[छ] applies after @deva[वर्गान्त] words in @deva[भव] sense, debarring @deva[अण्].\n\nExamples: @deva[कवर्गीयम्], @deva[चवर्गीयम्].",
            "advanced": "@deva[छ] applies after @deva[वर्गान्त] in @deva[भव] sense, superseding @deva[अण्].\n\nExamples: @deva[कवर्गीयम्], @deva[चवर्गीयम्]."
        }
    },
    "43064": {
        "en": {
            "simple": "After a word ending in @deva[वर्ग] (class), when it does not mean a letter or word (@deva[शब्द]), the affixes @deva[यत्] and @deva[ख] optionally apply in the sense of 'who stays there'.\n\nExamples: @deva[वासुदेववर्ग्यः] (with @deva[यत्]), @deva[वासुदेववर्गीणः] (with @deva[ख]), @deva[वासुदेववर्गीयः] (with @deva[छ]). Similarly @deva[युधिष्ठिरवर्ग्यः], @deva[वर्गीणः], or @deva[वर्गीयः].\n\nWhen @deva[वर्ग] means a class of letters (@deva[शब्द]), only @deva[छ] applies: @deva[कवर्गीय वर्णः] (a letter of the @deva[क]-class).",
            "standard": "The affixes @deva[यत्] and @deva[ख] optionally apply after @deva[वर्गान्त] (non-@deva[शब्द]-sense) in @deva[भव] sense.\n\nExamples: @deva[वासुदेववर्ग्यः] (with @deva[यत्]), @deva[वासुदेववर्गीणः] (with @deva[ख]), @deva[वासुदेववर्गीयः] (with @deva[छ]).\n\nWhen @deva[शब्द]-sense: @deva[छ] only; e.g., @deva[कवर्गीय वर्णः].",
            "advanced": "@deva[यत्]/ख] optionally apply after @deva[वर्गान्त] (@deva[अशब्दे]) in @deva[भव] sense.\n\nExamples: @deva[वासुदेववर्ग्यः], @deva[वासुदेववर्गीणः], @deva[वासुदेववर्गीयः]. @deva[शब्दे]: @deva[छ] alone; @deva[कवर्गीय वर्णः]."
        }
    },
    "43065": {
        "en": {
            "simple": "The affix @deva[कन्] comes after @deva[कर्ण] (ear) and @deva[ललाट] (forehead) in the sense of 'what occurs there', when the word denotes an ornament.\n\nThis replaces @deva[यत्] from 4.3.55.\n\nExamples: @deva[कर्णिका] (an ear-ring), @deva[ललाटिका] (a forehead ornament).\n\nWhen not meaning an ornament: @deva[कर्ण्यम्] (relating to the ear), @deva[ललाट्यम्] (relating to the forehead).",
            "standard": "The affix @deva[कन्] applies after @deva[कर्ण]/ललाट] in @deva[भव] sense when denoting @deva[आभरण] (ornament), debarring @deva[यत्] (@ref[4.3.55]).\n\nExamples: @deva[कर्णिका] (ear-ring), @deva[ललाटिका] (forehead ornament).\n\nNon-ornament: @deva[कर्ण्यम्], @deva[ललाट्यम्].",
            "advanced": "@deva[कन्] applies after @deva[कर्ण]/ललाट] in @deva[भव] sense when @deva[आभरण]-denoting, superseding @deva[यत्] (@ref[4.3.55]).\n\nExamples: @deva[कर्णिका], @deva[ललाटिका]. Non-@deva[आभरण]: @deva[कर्ण्यम्], @deva[ललाट्यम्]."
        }
    },
    "43066": {
        "en": {
            "simple": "After the name of a subject requiring commentary (@deva[व्याख्यातव्यनामन्]), an affix comes in the sense of 'its commentary' (@deva[व्याख्यान]) as well as 'what occurs there' (@deva[तत्र भव]).\n\nThe name of the topic to be explained must be a book or treatise, not a city or place.\n\nExamples:\n• @deva[सुपां व्याख्यानः] = @deva[सौपो ग्रन्थः] (a book explaining case-affixes)\n• @deva[तैङम्] (a commentary on verbal affixes)\n• @deva[कार्तः] (a commentary on @deva[कृत्] affixes)\n\n@deva[सौप] can also mean @deva[सुप्सु भवम्] (occurring in case-affixes).\n\nThe @deva[अनुवृत्ति] of both @deva[भव] and @deva[व्याख्यान] runs through the subsequent @deva[अपवाद] rules.",
            "standard": "After @deva[व्याख्यातव्यनामन्] (name of an explainable work), an affix applies in @deva[व्याख्यान] (commentary) and @deva[तत्र भव] senses. The @deva[च] draws in @deva[भव].\n\nExamples: @deva[सौपो ग्रन्थः] (commentary on @deva[सुप्]); @deva[तैङम्] (on @deva[तिङ्]); @deva[कार्तः] (on @deva[कृत्]). These also mean 'occurring therein'.\n\nCondition: @deva[व्याख्यातव्य] must be a textual work, not a physical object like a city.\n\n@deva[अनुवृत्ति] of @deva[भव]/व्याख्यान] extends to subsequent @deva[अपवाद] rules.",
            "advanced": "After @deva[व्याख्यातव्यनामन्], affixes apply in @deva[व्याख्यान] and @deva[तत्र भव] senses (@deva[च] includes @deva[भव]).\n\nExamples: @deva[सौपः], @deva[तैङम्], @deva[कार्तः]—both commentary and occurrence senses.\n\nCondition: @deva[व्याख्यातव्य] = textual work. @deva[भव]/व्याख्यान]-@deva[अनुवृत्ति] extends through @deva[अपवाद] sūtras."
        }
    },
    "43067": {
        "en": {
            "simple": "The affix @deva[ठञ्] comes in the senses of 'staying therein' and 'a commentary thereon' after a polysyllabic word (@deva[बह्वच्]) with @deva[उदात्त] (acute accent) on the final.\n\nThis replaces @deva[अण्].\n\nExamples: @deva[षात्वणत्विकम्] (a commentary on @deva[ष]-@deva[ण] substitution rules), @deva[नातानतिकम्] (a commentary on @deva[उदात्त] and @deva[अनुदात्त] accents). These compounds have final accent by 6.1.169.\n\nWhy @deva[बह्वच्] (polysyllabic)? Observe @deva[सौपम्], @deva[तैङम्]—two syllables take @deva[ठक्] (4.3.72).\n\nWhy @deva[अन्तोदात्त] (final accent)? Observe @deva[सांहितम्] from @deva[संहिता]—initial accent by 6.2.49.",
            "standard": "The affix @deva[ठञ्] applies after @deva[बह्वच्] (polysyllabic) @deva[अन्तोदात्त] words in @deva[व्याख्यातव्य] context, debarring @deva[अण्].\n\nExamples: @deva[षात्वणत्विकम्], @deva[नातानतिकम्]—final accent by @ref[6.1.169].\n\nConditions: @deva[बह्वच्]—counter: @deva[सौपम्] (2 syllables → @deva[ठक्] @ref[4.3.72]). @deva[अन्तोदात्त]—counter: @deva[सांहितम्] (initial accent by @ref[6.2.49]).",
            "advanced": "@deva[ठञ्] applies after @deva[बह्वच्]-@deva[अन्तोदात्त] @deva[व्याख्यातव्यनामन्], superseding @deva[अण्].\n\nExamples: @deva[षात्वणत्विकम्], @deva[नातानतिकम्] (final accent per @ref[6.1.169]).\n\nConditions: @deva[बह्वच्] (cf. @deva[सौपम्] → @deva[ठक्] @ref[4.3.72]); @deva[अन्तोदात्त] (cf. @deva[सांहितम्] → @ref[6.2.49])."
        }
    },
    "43068": {
        "en": {
            "simple": "The affix @deva[ठञ्] comes in the senses of 'occurring therein' and 'a commentary thereon' after the name of an explainable work relating to a @deva[क्रतु] (Soma sacrifice) or @deva[यज्ञ] (sacrifice in general).\n\nThis replaces @deva[अण्].\n\nExamples for @deva[क्रतु]: @deva[अग्निष्टोमिकः], @deva[वाजपेयिकः], @deva[राजसूयिकः].\nExamples for @deva[यज्ञ]: @deva[पाकयज्ञिकः], @deva[नावयज्ञिकः], @deva[पाञ्चौदनिकः], @deva[दाशौदनिकः].\n\nThis rule applies to words that are not @deva[अन्तोदात्त] (e.g., @deva[वाजपेय], @deva[राजसूय] have middle accent). The separate mention of @deva[यज्ञ] implies non-Soma sacrifices are included, since @deva[क्रतु] technically means only Soma sacrifices.\n\nThe plural prevents @deva[स्वरूपविधि] (1.1.68) from applying to the word-forms @deva[क्रतु] and @deva[यज्ञ] themselves.",
            "standard": "The affix @deva[ठञ्] applies after @deva[क्रतु]/यज्ञ]-related @deva[व्याख्यातव्यनामन्] in @deva[भव]/व्याख्यान] senses, debarring @deva[अण्].\n\n@deva[क्रतु] (Soma): @deva[अग्निष्टोमिकः], @deva[वाजपेयिकः], @deva[राजसूयिकः]. @deva[यज्ञ] (non-Soma): @deva[पाकयज्ञिकः], @deva[नावयज्ञिकः], @deva[पाञ्चौदनिकः].\n\nScope: non-@deva[अन्तोदात्त] words (@deva[वाजपेय]/राजसूय] = middle accent). @deva[यज्ञ] separate mention includes non-Soma @deva[यज्ञ]s. Plural prevents @deva[स्वरूपविधि] (@ref[1.1.68]).",
            "advanced": "@deva[ठञ्] applies after @deva[क्रतु]/यज्ञ]-@deva[व्याख्यातव्यनामन्] in @deva[भव]/व्याख्यान] senses, superseding @deva[अण्].\n\nExamples: @deva[अग्निष्टोमिकः], @deva[वाजपेयिकः], @deva[राजसूयिकः]; @deva[पाकयज्ञिकः], @deva[पाञ्चौदनिकः].\n\nScope: non-@deva[अन्तोदात्त]; @deva[यज्ञ]-mention includes non-Soma. Plural blocks @deva[स्वरूपविधि] (@ref[1.1.68])."
        }
    },
    "43069": {
        "en": {
            "simple": "The affix @deva[ठञ्] comes after the name of an explainable work named after a @deva[ऋषि] (sage), in the senses of 'occurring therein' or 'commentary thereon', when it refers to an @deva[अध्याय] (chapter) only.\n\n@deva[ऋषि] here means a sage from the @deva[प्रवर] list. The word formed always denotes a chapter of the work.\n\nExamples: @deva[वसिष्ठस्य व्याख्यान] = @deva[वासिष्ठिको ऽध्यायः] (a chapter of commentary on Vasiṣṭha), @deva[वैश्वामित्रिकः] (a chapter on Viśvāmitra).\n\nWhy @deva[अध्याय] (chapter)? Observe @deva[वासिष्ठिकी ऋक्] (a verse related to Vasiṣṭha)—the rule doesn't apply to verses.",
            "standard": "The affix @deva[ठञ्] applies after @deva[ऋषि]-named @deva[व्याख्यातव्य] works in @deva[भव]/व्याख्यान] senses, restricted to @deva[अध्याय] (chapter).\n\n@deva[ऋषि] = @deva[प्रवर]-listed sages. @deva[व्याख्यातव्यनाम्नः] understood.\n\nExamples: @deva[वासिष्ठिको ऽध्यायः], @deva[वैश्वामित्रिकः].\n\nCondition @deva[अध्याये]: counter—@deva[वासिष्ठिकी ऋक्].",
            "advanced": "@deva[ठञ्] applies after @deva[ऋषि]-named @deva[व्याख्यातव्य] in @deva[भव]/व्याख्यान] senses, @deva[अध्याय]-restricted.\n\n@deva[ऋषि] = @deva[प्रवर]. Examples: @deva[वासिष्ठिको ऽध्यायः], @deva[वैश्वामित्रिकः]. Counter: @deva[वासिष्ठिकी ऋक्]."
        }
    },
    "43070": {
        "en": {
            "simple": "The affix @deva[ष्ठन्] comes in the senses of 'occurring therein' and 'commentary thereon' after @deva[पौरोडाश] (verses about the sacred cake) and @deva[पुरोडाश] (the sacred cake itself).\n\nExamples: @deva[पौरोडाशिकः] (commentary on @deva[पौरोडाश] mantras), @deva[पुरोडाशिकः] (commentary on @deva[पुरोडाश]).\n\nThe feminine forms are @deva[पौरोडाशिकी] and @deva[पुरोडाशिकी] by 4.1.41. The @deva[ष्] in the affix indicates the feminine is formed with @deva[ङीष्].\n\nThe commentary here refers to the mantras/verses relating to @deva[पुरोडाश], not to the sacrifice itself.",
            "standard": "The affix @deva[ष्ठन्] applies after @deva[पौरोडाश]/पुरोडाश] in @deva[भव]/व्याख्यान] senses.\n\nExamples: @deva[पौरोडाशिकः], @deva[पुरोडाशिकः]. Feminine: @deva[पौरोडाशिकी], @deva[पुरोडाशिकी] (@ref[4.1.41]). @deva[ष्] indicates @deva[ङीष्]-feminine.\n\nContext: @deva[व्याख्यान] refers to mantras, not the sacrifice.",
            "advanced": "@deva[ष्ठन्] applies after @deva[पौरोडाश]/पुरोडाश] in @deva[भव]/व्याख्यान] senses.\n\nForms: @deva[पौरोडाशिकः]/पुरोडाशिकः]; feminine @deva[ङीष्] by @deva[ष्]-indication (@ref[4.1.41]). Commentary = @deva[मन्त्र]-related."
        }
    },
    "43071": {
        "en": {
            "simple": "The affixes @deva[यत्] and @deva[अण्] come in the senses of 'occurring therein' or 'commentary thereon' after @deva[छन्दस्] (Vedic literature).\n\nThis replaces @deva[ठक्] from the next rule (4.3.72).\n\nExamples: @deva[छन्दस्यः] (with @deva[यत्]) or @deva[छान्दसः] (with @deva[अण्]).",
            "standard": "The affixes @deva[यत्] and @deva[अण्] apply after @deva[छन्दस्] in @deva[भव]/व्याख्यान] senses, debarring @deva[ठक्] (@ref[4.3.72]).\n\nExamples: @deva[छन्दस्यः] / @deva[छान्दसः].",
            "advanced": "@deva[यत्]/अण्] apply after @deva[छन्दस्] in @deva[भव]/व्याख्यान] senses, superseding @deva[ठक्] (@ref[4.3.72]).\n\nForms: @deva[छन्दस्यः], @deva[छान्दसः]."
        }
    },
    "43072": {
        "en": {
            "simple": "The affix @deva[ठक्] comes in the senses of 'occurring therein' or 'commentary thereon' after:\n• A word of two syllables (@deva[द्व्यच्])\n• A word ending in short @deva[ऋ]\n• The words @deva[ब्राह्मण], @deva[ऋक्], @deva[प्रथम], @deva[पुरश्चरण], @deva[नाम], @deva[आख्यात], @deva[नामाख्यात]\n\nThese must be names of explainable works.\n\nThis replaces @deva[अण्] and @deva[ठञ्].\n\nExamples:\n• Two syllables: @deva[ऐष्टिकः], @deva[पाशुकः]\n• Ending in @deva[ऋ]: @deva[चातुर्होतृकः], @deva[पाञ्चहोतृकः]\n• Named words: @deva[ब्राह्मणिकः], @deva[आर्चिकः], @deva[प्राथमिकः], @deva[आध्वरिकः], @deva[पौरश्चरणिकः], @deva[नामिकः], @deva[आख्यातिकः], @deva[नामाख्यातिकः]",
            "standard": "The affix @deva[ठक्] applies after @deva[द्व्यच्] (disyllabic), @deva[ऋदन्त] (short @deva[ऋ]-ending), and @deva[ब्राह्मण]/ऋक्]/प्रथम]/पुरश्चरण]/नाम]/आख्यात]/नामाख्यात] in @deva[भव]/व्याख्यान] senses, debarring @deva[अण्]/ठञ्].\n\nExamples: @deva[ऐष्टिकः], @deva[पाशुकः] (disyllabic); @deva[चातुर्होतृकः], @deva[पाञ्चहोतृकः] (@deva[ऋदन्त]); @deva[ब्राह्मणिकः], @deva[आर्चिकः], @deva[प्राथमिकः], @deva[आध्वरिकः], @deva[पौरश्चरणिकः], @deva[नामिकः], @deva[आख्यातिकः], @deva[नामाख्यातिकः].",
            "advanced": "@deva[ठक्] applies after @deva[द्व्यच्], @deva[ऋदन्त], and @deva[ब्राह्मणादि] in @deva[भव]/व्याख्यान] senses, superseding @deva[अण्]/ठञ्].\n\nExamples: @deva[ऐष्टिकः], @deva[पाशुकः]; @deva[चातुर्होतृकः], @deva[पाञ्चहोतृकः]; @deva[ब्राह्मणिकः], @deva[आर्चिकः], @deva[प्राथमिकः], @deva[पौरश्चरणिकः], @deva[नामिकः], @deva[आख्यातिकः], @deva[नामाख्यातिकः]."
        }
    },
    "43073": {
        "en": {
            "simple": "The affix @deva[अण्] comes in the senses of 'occurring therein' and 'commentary thereon' after the words @deva[ऋगयन], @deva[पदव्याख्यान], and others in the @deva[ऋगयनादि] list.\n\nThis replaces @deva[ठञ्], @deva[ठक्], and @deva[छ].\n\nExamples: @deva[आर्गयनः], @deva[पादव्याख्यानः], @deva[वास्तुविद्यः].\n\nThe repetition of @deva[अण्] (though its @deva[अनुवृत्ति] was already present) prevents subsequent @deva[अपवाद] rules from applying to words in this list.\n\nThe @deva[ऋगयनादि] list: @deva[ऋगयन], @deva[पदव्याख्यान], @deva[छन्दोमान], @deva[छन्दोभाषा], @deva[छन्दोविचिति], @deva[न्याय], @deva[पुनरुक्त], @deva[निरुक्त], @deva[व्याकरण], @deva[निगम], @deva[वास्तुविद्या], @deva[क्षत्रविद्या], @deva[अङ्गविद्या], @deva[विद्या], @deva[उत्पात], @deva[उत्पाद], @deva[उद्याव], @deva[संवत्सर], @deva[मुहूर्त], @deva[उपनिषद्], @deva[निमित्त], @deva[शिक्षा], @deva[भिक्षा], @deva[छन्दोविछिति], @deva[व्याय].",
            "standard": "The affix @deva[अण्] applies after @deva[ऋगयनादि] in @deva[भव]/व्याख्यान] senses, debarring @deva[ठञ्]/ठक्]/छ].\n\nExamples: @deva[आर्गयनः], @deva[पादव्याख्यानः], @deva[वास्तुविद्यः].\n\n@deva[अण्]-repetition blocks subsequent @deva[अपवाद] (@deva[बाधकबाधनार्थम्]).\n\n@deva[ऋगयनादि]: @deva[ऋगयन], @deva[पदव्याख्यान], @deva[छन्दोमान], @deva[छन्दोभाषा], @deva[छन्दोविचिति], @deva[न्याय], @deva[पुनरुक्त], @deva[निरुक्त], @deva[व्याकरण], @deva[निगम], @deva[वास्तुविद्या], @deva[क्षत्रविद्या], @deva[अङ्गविद्या], @deva[विद्या], @deva[उत्पात], @deva[उत्पाद], @deva[उद्याव], @deva[संवत्सर], @deva[मुहूर्त], @deva[उपनिषद्], @deva[निमित्त], @deva[शिक्षा], @deva[भिक्षा], @deva[छन्दोविछिति], @deva[व्याय].",
            "advanced": "@deva[अण्] applies after @deva[ऋगयनादि] in @deva[भव]/व्याख्यान] senses, superseding @deva[ठञ्]/ठक्]/छ]. @deva[पुनर्वचन] blocks subsequent @deva[अपवाद] (@deva[बाधकबाधनार्थम्]).\n\nExamples: @deva[आर्गयनः], @deva[पादव्याख्यानः], @deva[वास्तुविद्यः]. @deva[ऋगयनादि] lists 25 items."
        }
    },
    "43074": {
        "en": {
            "simple": "An affix from @deva[प्राग्दीव्यतः] (4.1.83 onward) comes after a word in the ablative case in the sense of 'what has come thence' (@deva[तत आगतम्]).\n\nExamples: @deva[स्रुघ्नादागतः] = @deva[स्रौघ्नः] (what has come from Srughna), @deva[माथुरः], @deva[राष्ट्रियः].",
            "standard": "Affixes from @deva[प्राग्दीव्यतः] (@ref[4.1.83]) apply after @deva[पञ्चम्यन्त] in @deva[ततआगत] sense.\n\nExamples: @deva[स्रुघ्नादागतः] → @deva[स्रौघ्नः]; @deva[माथुरः], @deva[राष्ट्रियः].",
            "advanced": "@deva[प्राग्दीव्यतः]-affixes apply after @deva[पञ्चम्यन्त] in @deva[ततआगत] sense.\n\nExamples: @deva[स्रौघ्नः], @deva[माथुरः], @deva[राष्ट्रियः]."
        }
    },
    "43075": {
        "en": {
            "simple": "The affix @deva[ठक्] comes in the sense of 'come thence' after a word denoting a source of revenue (@deva[आयस्थान]).\n\n@deva[आय] means the share appropriated by the lord; @deva[आयस्थान] is the source of such revenue.\n\nThis replaces @deva[अण्] and @deva[छ].\n\nExamples: @deva[शौल्कशालिकम्] (revenue from a customs house), @deva[आकरिकम्] (revenue from mines).\n\nThe plural in the sūtra prevents @deva[स्वरूपविधि] (1.1.68).",
            "standard": "The affix @deva[ठक्] applies after @deva[आयस्थान]-denoting words in @deva[ततआगत] sense, debarring @deva[अण्]/छ].\n\n@deva[आय] = lord's share; @deva[आयस्थान] = revenue source.\n\nExamples: @deva[शौल्कशालिकम्], @deva[आकरिकम्]. Plural blocks @deva[स्वरूपविधि] (@ref[1.1.68]).",
            "advanced": "@deva[ठक्] applies after @deva[आयस्थान] in @deva[ततआगत] sense, superseding @deva[अण्]/छ].\n\nExamples: @deva[शौल्कशालिकम्], @deva[आकरिकम्]. Plural blocks @deva[स्वरूपविधि] (@ref[1.1.68])."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.3.61-4.3.75 (Batch 5 of 4.3)")
