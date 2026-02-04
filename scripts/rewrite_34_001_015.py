#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.4.1-3.4.15 (Batch 1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "34001": {
        "en": {
            "simple": "Adhikara: When a word formed with an affix relates syntactically to a verb, the time of the affix is subordinate to the verb's time. Example: @deva[अग्निष्टोमयाज्यस्य पुत्रो जनिता] 'a son will be born to him who will perform Agnishtoma' - even though @deva[याजिन्] has past-sense affix (@ref[3.2.85]), it takes future meaning from the main verb. Taddhita affixes work the same way: @deva[गोमान् आसीत्] 'he had cows', @deva[गोमान् भविता] 'he will have cows'.",
            "standard": "This @deva[अधिकार] establishes that affixes denoting time are subordinate to the main verb when there's syntactical relation (@deva[धातुसम्बन्ध]) between them. The qualifier-qualified relationship governs time agreement. Example: @deva[अग्निष्टोमयाज्यस्य पुत्रो जनिता] - @deva[याजिन्] (formed by @ref[3.2.85] with past sense) combines with future @deva[जनिता]. Similarly @deva[तत्र वसन् ददर्श] 'living there, he saw' - present participle @deva[वसन्] (@ref[3.2.124]) with past verb. The repetition of @deva[प्रत्यय] includes taddhita: @deva[गोमान् आसीत्/भविता] - @deva[मतुप्] (present sense by @ref[5.2.94]) with past/future verbs.",
            "advanced": "This @deva[अधिकार] governs time-relation between affixes and verbs. The compound @deva[धातुसम्बन्ध] = @deva[धात्वर्थसम्बन्ध] (relation of verb-senses). When @deva[विशेषण-विशेष्य] relation exists, affix-time is subordinate to verb-time. Examples: @deva[अग्निष्टोमयाज्यस्य पुत्रो जनिता] - past-sense @deva[याजिन्] (@ref[3.2.85]) with future verb; @deva[तत्र वसन् ददर्श] - present @deva[शतृ] (@ref[3.2.124]) with past verb; @deva[कृतः कटः श्वो भविता] 'tomorrow he will be mat-maker'. The @deva[प्रत्यय] repetition extends this to non-@deva[धातु] affixes (taddhita): @deva[गोमान्] (@deva[मतुप्] by @ref[5.2.94], present sense) validly combines with @deva[आसीत्]/\u200b@deva[भविता]."
        }
    },
    "34002": {
        "en": {
            "simple": "When expressing repeated action (@deva[क्रियासमभिहार]), use the imperative (@deva[लोट्]) with the verb doubled. The 2nd person endings @deva[हि], @deva[स्व] (singular) or @deva[त], @deva[ध्वम्] (plural) are used, regardless of the main verb's person/number/tense. Example: @deva[लुनीहि लुनीहि इत्य् एवायं लुनाति] 'he cuts repeatedly' (as if someone keeps saying 'cut! cut!'). This works for any person: @deva[लुनीहि लुनीहि इत्य् एव त्वं लुनासि] 'you cut repeatedly'.",
            "standard": "For @deva[क्रियासमभिहार] (repeated/frequent action), @deva[लोट्] is used with verb reduplication. Only 2nd person @deva[परस्मैपद] (@deva[हि], @deva[त]) and @deva[आत्मनेपद] (@deva[स्व], @deva[ध्वम्]) substitute for @deva[लोट्], regardless of actual subject. Examples: @deva[लुनीहि लुनीहि इत्य् एवायं लुनाति] (3rd sg.), @deva[इमौ लुनीतः] (3rd du.), @deva[इमे लुनन्ति] (3rd pl.) - all mean 'cuts repeatedly'. Similarly: @deva[अधीष्व अधीष्व इत्य् एवायम् अधीते] 'he studies diligently'. Unlike @deva[यङ्] (intensive) which has inherent frequentative sense, here doubling expresses it. See @ref[8.1.4].",
            "advanced": "@deva[क्रियासमभिहार] (action-repetition) triggers @deva[लोट्] with verb doubling. The @deva[धातुसम्बन्ध] from @ref[3.4.1] continues. Only 2nd person terminations (@deva[हि]/\u200b@deva[स्व] sg., @deva[त]/\u200b@deva[ध्वम्] pl.) substitute, but apply across all persons/numbers/tenses of the main verb. Paradigm: @deva[लुनीहि लुनीहि इत्य् एव] + @deva[अयं लुनाति], @deva[इमौ लुनीतः], @deva[इमे लुनन्ति], @deva[त्वं लुनासि], @deva[युवां लुनीथः], @deva[यूयं लुनीथ]. For @deva[आत्मनेपद]: @deva[अधीष्व अधीष्व इत्य् एव] + any person. Contrast with @deva[यङन्त] verbs where frequentative meaning is lexically inherent (no doubling needed). This usage is grammatically valid but rare in literature (Böhtlingk)."
        }
    },
    "34003": {
        "en": {
            "simple": "The imperative (@deva[लोट्]) is optionally used when listing multiple topics or actions in sequence. Example: @deva[छन्दोऽधीष्व, व्याकरणम् अधीष्व, निरुक्तम् अधीष्व इत्य् एवायम् अधीते] 'he studies, studying prosody, studying grammar, studying Nirukta'. Unlike the previous rule, the imperative is not doubled here.",
            "standard": "When expressing @deva[समुच्चय] (enumeration of multiple items/actions), @deva[लोट्] is optionally used with 2nd person endings (@deva[हि], @deva[स्व], @deva[त], @deva[ध्वम्]). Unlike @ref[3.4.2], no doubling occurs. Example: @deva[छन्दोऽधीष्व, व्याकरणम् अधीष्व, निरुक्तम् अधीष्व इत्य् एवायम् अधीते] 'he studies prosody, grammar, and Nirukta'. Being optional (@deva[वा]), alternatives exist: @deva[व्याकरणम् अधीते, छन्दोऽधीते, निरुक्तम् अधीते इत्य् एवायम् अधीते].",
            "advanced": "@deva[समुच्चय] (aggregation of themes) optionally takes @deva[लोट्] with 2nd person endings. No verb doubling (contrast @ref[3.4.2]). Examples: @deva[भ्राष्ट्रम् अट, मठम् अट, खदूरम् अट, स्थाल्यपिधानम् अट इत्य् एवायम् अटति] or @deva[इमौ अटतः] or @deva[इमे अटन्ति]. Being @deva[विकल्प], one may alternatively use: @deva[छन्दोऽधीये, व्याकरणम् अधीये, निरुक्तम् अधीये इत्य् एवाहम् अधीये]. The option extends across all persons/numbers."
        }
    },
    "34004": {
        "en": {
            "simple": "For the repeated-action construction (@ref[3.4.2]), the main verb must be from the same root as the imperative. You cannot say @deva[लुनीहि लुनीहि इत्य् एवायं छिनत्ति] (mixing @deva[लू] 'cut' with @deva[छिद्] 'cut'). The main verb must also be @deva[लुनाति]. Similarly, @deva[अधीष्व अधीष्व] requires @deva[अधीते], not a synonym like @deva[पठति].",
            "standard": "For @deva[क्रियासमभिहार] (@ref[3.4.2]), the main clause verb must derive from the same root as the imperative. Invalid: @deva[लुनीहि लुनीहि इत्य् एवायं छिनत्ति] (imperative from @deva[लू], main verb from @deva[छिद्] - both mean 'cut' but are different roots). Valid: @deva[लुनीहि लुनीहि इत्य् एवायं लुनाति]. Similarly: @deva[अधीष्व अधीष्व] requires @deva[अधीते], not synonymous @deva[पठति].",
            "advanced": "This restricts @ref[3.4.2]: the @deva[उत्तरपद] (subsequent verb) must share the same @deva[धातु] as the @deva[लोट्] form. Invalid: @deva[लुनीहि लुनीहि इत्य् एवायं छिनत्ति] - though @deva[लू] and @deva[छिद्] are synonymous ('to cut'), they are distinct roots. Valid: any form of @deva[लू] (@deva[लुनाति], @deva[लुनीतः], etc.). The @deva[समभिहार] construction requires root-identity, not mere semantic equivalence."
        }
    },
    "34005": {
        "en": {
            "simple": "For the enumeration construction (@ref[3.4.3]), the main verb should express a meaning common to all the listed imperatives. Example: @deva[ओदनं भुङ्क्ष्व, सक्तून् पिब, धानाः खाद इत्य् एवायम् अभ्यवहरति] 'he takes food - eating rice, drinking saktu, chewing fried grain'. Here @deva[अभ्यवहरति] (to consume) encompasses eating, drinking, and chewing.",
            "standard": "For @deva[समुच्चय] (@ref[3.4.3]), the main verb should have a sense subsuming all the listed actions. Example: @deva[ओदनं भुङ्क्ष्व, सक्तून् पिब, धानाः खाद इत्य् एवायम् अभ्यवहरति] - the verb @deva[अभ्यवहरति] 'he consumes' is hypernymic to @deva[भुज्] (eat), @deva[पा] (drink), @deva[खाद्] (chew). This avoids repeating each verb separately. However, in colloquial usage, such brevity is often avoided.",
            "advanced": "For @deva[समुच्चय] (@ref[3.4.3]), the @deva[उत्तरपद] should express @deva[सामान्यार्थ] (generic sense) covering all listed @deva[लोट्] verbs. Example: @deva[ओदनं भुङ्क्ष्व, सक्तून् पिब, धानाः खाद इत्य् एवायम् अभ्यवहरति] - @deva[अभ्यवहृ] subsumes @deva[भुज्], @deva[पा], @deva[खाद्]. The purpose is to prevent @deva[पुनरुक्ति] (repetition) of multiple verbs. Böhtlingk notes this brevity (@deva[लाघव]) is often avoided in @deva[लौकिक] usage."
        }
    },
    "34006": {
        "en": {
            "simple": "In Vedic literature (@deva[छन्दस्]), the aorist (@deva[लुङ्]), imperfect (@deva[लङ्]), and perfect (@deva[लिट्]) can optionally be used for any tense. Examples: @deva[देवो देवेभिर् आगमत्] 'O Agni, come with the gods!' - aorist with imperative sense; @deva[इदं तेभ्योऽकरं नमः] 'I make salutation' - aorist with present sense; @deva[अद्य ममार] = @deva[अद्य म्रियते] 'he dies today' - perfect with present sense.",
            "standard": "In @deva[छन्दस्], @deva[लुङ्], @deva[लङ्], and @deva[लिट्] are optionally used for tenses other than their primary ones. The @deva[धातुसम्बन्ध] and @deva[विकल्प] continue from context. Examples: @deva[देवो देवेभिर् आगमत्] (RV I.1.5) - @deva[लुङ्] for imperative; @deva[इदं तेभ्योऽकरं नमः] (RV X.85.17) - @deva[लुङ्] for present; @deva[अग्निम् अद्य होतारम् अवृणीत अयं यजमानः] - @deva[लङ्] for @deva[लट्]; @deva[अद्य ममार] = @deva[अद्य म्रियते] - @deva[लिट्] for @deva[लट्].",
            "advanced": "In @deva[छन्दस्], @deva[लुङ्], @deva[लङ्], @deva[लिट्] are @deva[विकल्प] for all tenses via @deva[धातुसम्बन्ध]. By @deva[अन्यतरस्याम्], other @deva[लकार]s may similarly substitute. Vedic examples: @deva[देवो देवेभिर् आगमत्] (RV I.1.5) - @deva[लुङ्] = @deva[लोट्] (imperative); @deva[ये भूतस्य प्रचेतस इदं तेभ्योऽकरं नमः] (RV X.85.17) - @deva[अकरम्] (@deva[लुङ्]) = @deva[करोमि] (@deva[लट्]); @deva[अग्निम् अद्य होतारम् अवृणीत] - @deva[लङ्] = @deva[लट्]; @deva[अद्य ममार] - @deva[लिट्] = @deva[लट्]. This flexibility is Vedic-only."
        }
    },
    "34007": {
        "en": {
            "simple": "In Vedic, the subjunctive (@deva[लेट्]) may optionally replace the benedictive (@deva[लिङ्]) wherever @deva[लिङ्] can be used (commands, wishes, etc.). Examples: @deva[जोषिषत्] 'may he make beautiful' (RV II.35.1), @deva[तारिषत्] 'may he increase' (RV I.25.12), @deva[पताति विद्युत्] 'may the thunderbolt fall' (RV VII.25.1), @deva[भवाति] 'may he become' (RV V.37.5).",
            "standard": "In @deva[छन्दस्], @deva[लेट्] (Vedic subjunctive) optionally replaces @deva[लिङ्] (benedictive/potential) in senses like command, wish, blessing. @deva[लेट्] is exclusively Vedic. Examples: @deva[जोषिषत्] (RV II.35.1) 'may he beautify'; @deva[तारिषत्] (RV I.25.12) 'may he increase'; @deva[पताति विद्युत्] (RV VII.25.1) 'may lightning fall'; @deva[भवाति] (RV V.37.5) 'may he become'. Also: @deva[मन्दिषत्], @deva[नेता], @deva[नेषत्], @deva[तक्षिषत्], @deva[उदधिं च्यावयाति].",
            "advanced": "@deva[लेट्] (Vedic subjunctive) is @deva[विकल्प] for @deva[लिङ्] in @deva[छन्दस्]. It covers @deva[आशीः] (benediction), @deva[विधि] (command), etc. - wherever @deva[लिङ्] applies. Forms: @deva[जोषिषत्] (RV II.35.1), @deva[तारिषत्] (RV I.25.12), @deva[पताति विद्युत्] (RV VII.25.1), @deva[भवाति] (RV V.37.5), @deva[मन्दिषत्], @deva[नेता], @deva[नेषत्], @deva[तक्षिषत्], @deva[उदधिं च्यावयाति]. @deva[लेट्] is confined to Vedic; classical Sanskrit uses @deva[लिङ्] for these senses."
        }
    },
    "34008": {
        "en": {
            "simple": "In Vedic, the subjunctive (@deva[लेट्]) must be used (not optionally) when expressing a contingent promise (@deva[उपसंवाद]) or apprehension (@deva[आशङ्का]). @deva[उपसंवाद] is a reciprocal agreement: 'if you do X, I'll do Y'. @deva[आशङ्का] is fearing/inferring a consequence. Example: @deva[नेज् जिह्यायन्तो नरकं पताम] 'lest acting crookedly we fall into hell' - expressing fear of consequence.",
            "standard": "In @deva[छन्दस्], @deva[लेट्] is obligatory (not optional, contra @ref[3.4.7]) for @deva[उपसंवाद] (reciprocal promise: 'if you do X for me, I'll give Y to you') and @deva[आशङ्का] (apprehension of result from cause). Examples: @deva[अहम् एव पशूनाम् ईशै], @deva[मदग्रा एव वो ग्रहा गृह्यान्तै], @deva[मद्देवत्यान्य् एव वः पात्राण्य् उच्यान्तै], @deva[नेज् जिह्यायन्तो नरकं पताम] (= @deva[जिह्माचरणेन नरकपात आशङ्कयते]). Though semantically potential, @deva[लेट्] (not @deva[लिङ्]) is required.",
            "advanced": "@deva[लेट्] is @deva[नित्य] (obligatory) - not @deva[विकल्प] - for @deva[उपसंवाद] (reciprocal contract: @deva[यदि मे भवान् इदं कुर्याद् अहम् अपि भवत इदं दास्यामि]) and @deva[आशङ्का] (inference of result from cause). Nirukta examples: @deva[अहम् एव पशूनाम् ईशै], @deva[मदग्रा एव वो ग्रहा गृह्यान्तै], @deva[नेज् जिह्यायन्तो नरकं पताम] = @deva[जिह्माचरणेन नरकपातम् आशङ्कते]. The @deva[विकल्प] @deva[अनुवृत्ति] from @ref[3.4.7] is suspended here."
        }
    },
    "34009": {
        "en": {
            "simple": "In Vedic, fifteen special infinitive affixes replace @deva[तुमुन्]: @deva[से], @deva[सेन्], @deva[असे], @deva[असेन्], @deva[क्से], @deva[क्सेन्], @deva[अध्यै], @deva[अध्यैन्], @deva[कध्यै], @deva[कध्यैन्], @deva[शध्यै], @deva[शध्यैन्], @deva[तवै], @deva[तवेङ्], @deva[तवेन्]. Examples: @deva[जीवसे] 'to live' (RV III.36.10), @deva[पिबध्यै] 'to drink' (RV IV.27.5), @deva[सूतवे] 'to beget' (RV X.184.3).",
            "standard": "Fifteen Vedic infinitive affixes with @deva[तुमर्थ] (infinitive sense = @deva[भाव]): The @deva[इत्] letters are @deva[न्] (first-syllable @deva[उदात्त] by @ref[6.1.197]), @deva[क्] (blocks @deva[गुण]/\u200b@deva[वृद्धि]), @deva[श्] (makes @deva[सार्वधातुक], triggering @deva[विकरण]), @deva[ङ्] (accent). The five real affixes: (1) @deva[से] (@deva[से], @deva[सेन्], @deva[क्से]); (2) @deva[असे] (@deva[असे], @deva[असेन्], @deva[कसेन्]); (3) @deva[अध्यै] (@deva[अध्यै], @deva[अध्यैन्], @deva[कध्यै], @deva[कध्यैन्], @deva[शध्यै], @deva[शध्यैन्]); (4) @deva[तवै]; (5) @deva[तवे] (@deva[तवेङ्], @deva[तवेन्]). Examples: @deva[जीवसे] (RV III.36.10, X.57.4), @deva[आहुवध्यै] (RV VI.60.13), @deva[पिबध्यै] (RV IV.27.5), @deva[सूतवे] (RV X.184.3), @deva[गन्तवे] (RV I.46.7).",
            "advanced": "Fifteen Vedic @deva[तुमर्थ] affixes classified by @deva[इत्]: @deva[न्] triggers @ref[6.1.197] (@deva[आद्युदात्त]); @deva[क्] blocks @deva[गुण]/\u200b@deva[वृद्धि] (@ref[1.1.5]); @deva[श्] makes @deva[सार्वधातुक] (root takes class @deva[विकरण]); @deva[ङ्] regulates accent. Real affixes: @deva[से], @deva[असे], @deva[अध्यै], @deva[तवै], @deva[तवे]. @deva[से] = @deva[से], @deva[सेन्], @deva[क्से]. @deva[असे] = @deva[असे], @deva[असेन्], @deva[कसेन्]. @deva[अध्यै] = @deva[अध्यै], @deva[अध्यैन्], @deva[कध्यै], @deva[कध्यैन्], @deva[शध्यै], @deva[शध्यैन्]. @deva[तवै] has dual accent (@ref[6.1.200], @ref[6.2.51]). Examples: @deva[वक्षे रायः]; @deva[तवामेषे स्थानाम्] (RV V.66.3); @deva[जीवसे] (RV III.36.10); @deva[श्रियसे] (RV V.59.3); @deva[आहुवध्यै] (RV VI.60.13); @deva[पिबध्यै] (RV IV.27.5); @deva[पातवै]; @deva[सूतवे] (RV X.184.3); @deva[गन्तवे] (RV I.46.7)."
        }
    },
    "34010": {
        "en": {
            "simple": "Three irregularly-formed Vedic infinitives: (1) @deva[प्रयै] = @deva[प्रयातुम्] 'to go forth' (RV I.142.6), from @deva[प्र] + @deva[या] + @deva[कै]; (2) @deva[रोहिष्यै] = @deva[रोहणाय] 'for growing' (from @deva[रुह्] + @deva[इष्यै]); (3) @deva[अव्यथिष्यै] = @deva[अव्यथनाय] 'for not causing pain' (from @deva[अ] + @deva[व्यथ्] + @deva[इष्यै]).",
            "standard": "Three @deva[निपातन] (irregular) Vedic infinitives: (1) @deva[प्रयै] (RV I.142.6): @deva[प्र] + @deva[या] + @deva[कै] = @deva[प्रयातुम्]; (2) @deva[रोहिष्यै]: @deva[रुह्] + @deva[इष्यै] = @deva[रोहिष्यै] = @deva[रोहणाय] (in @deva[अपाम् ओषधीनां रोहिष्यै]); (3) @deva[अव्यथिष्यै]: @deva[अ] + @deva[व्यथ्] + @deva[इष्यै] = @deva[अव्यथनाय]. These are listed exceptions.",
            "advanced": "@deva[निपातन] for three Vedic infinitives: (1) @deva[प्रयै] (RV I.142.6) = @deva[प्र] + @deva[या] + @deva[कै] → @deva[प्रयातुम्] (@deva[प्रयै देवेभ्यो महीः]); (2) @deva[रोहिष्यै] = @deva[रुह्] + @deva[इष्यै] → @deva[रोहणाय] (@deva[अपाम् ओषधीनां रोहिष्यै]); (3) @deva[अव्यथिष्यै] = @deva[अ] + @deva[व्यथ्] + @deva[इष्यै] → @deva[अव्यथनाय]. These are individually enumerated as they don't follow regular patterns."
        }
    },
    "34011": {
        "en": {
            "simple": "Two more irregular Vedic infinitives: @deva[दृशे] = @deva[द्रष्टुम्] 'to see' (as in @deva[दृशे विश्वाय सूर्यम्] 'to see the sun for all', RV I.50.1); @deva[विख्ये] = @deva[विख्यातुम्] 'to proclaim' (as in @deva[विख्ये त्वा हरामि] 'I carry you to proclaim').",
            "standard": "@deva[निपातन] for two Vedic infinitives: (1) @deva[दृशे] (RV I.50.1): @deva[दृशे विश्वाय सूर्यम्] = @deva[द्रष्टुम्] 'to see the sun for all'; (2) @deva[विख्ये]: @deva[विख्ये त्वा हरामि] = @deva[विख्यातुम्] 'I carry you to proclaim'. Both are irregular formations.",
            "advanced": "@deva[निपातन]: (1) @deva[दृशे] (RV I.50.1) = @deva[द्रष्टुम्] (@deva[दृशे विश्वाय सूर्यम्]); (2) @deva[विख्ये] = @deva[विख्यातुम्] (@deva[विख्ये त्वा हरामि]). These irregular infinitives are individually listed as they cannot be derived by regular rules."
        }
    },
    "34012": {
        "en": {
            "simple": "In Vedic, when governed by @deva[शक्] 'to be able', infinitives are formed with @deva[णमुल्] or @deva[कमुल्]. In @deva[णमुल्], @deva[ण्] causes @deva[वृद्धि] (@ref[7.2.115]), @deva[ल्] regulates accent (@ref[6.1.193]). In @deva[कमुल्], @deva[क्] prevents @deva[गुण]/\u200b@deva[वृद्धि] (@ref[1.1.5]). Examples: @deva[अग्निं वै देवा विभाजं नाशक्नुवन्] 'the gods could not divide Agni' (@deva[विभाजम्] = @deva[विभक्तुम्]); @deva[अपलुपं नाशक्नुवन्] = @deva[अपलोप्तुम्].",
            "standard": "In @deva[छन्दस्] with @deva[शक्] (to be able), infinitives take @deva[णमुल्] or @deva[कमुल्] instead of @deva[तुमुन्]. @deva[णमुल्]: real affix is @deva[अम्]; @deva[ण्] triggers @deva[वृद्धि] (@ref[7.2.115]); @deva[ल्] sets accent (@ref[6.1.193]). @deva[कमुल्]: @deva[क्] blocks @deva[गुण]/\u200b@deva[वृद्धि] (@ref[1.1.5]). Examples: @deva[विभज्] + @deva[णमुल्] = @deva[विभाजम्] = @deva[विभक्तुम्] (@deva[अग्निं वै देवा विभाजं नाशक्नुवन्] 'gods couldn't divide Agni'); @deva[अपलुपम्] = @deva[अपलोप्तुम्] (@deva[अपलुपं नाशक्नुवन्]).",
            "advanced": "With @deva[शक्] in @deva[छन्दस्], @deva[तुमर्थ] is expressed by @deva[णमुल्] or @deva[कमुल्]. @deva[णमुल्]: affix @deva[अम्]; @deva[ण्] → @deva[वृद्धि] (@ref[7.2.115]); @deva[ल्] → accent (@ref[6.1.193]). @deva[कमुल्]: @deva[क्] → @deva[क्ङिति] blocks @deva[गुण]/\u200b@deva[वृद्धि]. Derivations: @deva[विभज्] + @deva[णमुल्] = @deva[विभाजम्] (= @deva[विभक्तुम्]): @deva[अग्निं वै देवा विभाजं नाशक्नुवन्]. @deva[अप] + @deva[लुप्] + @deva[कमुल्] = @deva[अपलुपम्] (= @deva[अपलोप्तुम्], no @deva[गुण] due to @deva[क्])."
        }
    },
    "34013": {
        "en": {
            "simple": "In Vedic, when @deva[ईश्वर] 'able, capable' is in composition, infinitives are formed with @deva[तोसुन्] or @deva[कसुन्]. Examples: @deva[ईश्वरोऽभिचरितोः] = @deva[अभिचरितुम्] 'able to practice sorcery'; @deva[ईश्वरो विलिखः] = @deva[विलिखितुम्] 'able to scratch'; @deva[ईश्वरो वितृदः] = @deva[वितर्दितुम्] 'able to pierce'.",
            "standard": "In @deva[छन्दस्] with @deva[ईश्वर] in composition, infinitives take @deva[तोसुन्] or @deva[कसुन्]. The @deva[क्] in @deva[कसुन्] blocks @deva[गुण]/\u200b@deva[वृद्धि]. Examples: @deva[ईश्वरोऽभिचरितोः] = @deva[अभिचरितुम्] (capable of sorcery); @deva[ईश्वरो विलिखः] = @deva[विलिखितुम्] (capable of scratching); @deva[ईश्वरो वितृदः] = @deva[वितर्दितुम्] (capable of piercing).",
            "advanced": "With @deva[ईश्वर] in @deva[समास], @deva[छन्दस्] uses @deva[तोसुन्] or @deva[कसुन्] for @deva[तुमर्थ]. @deva[कसुन्]: @deva[क्] is @deva[इत्], blocking @deva[गुण]/\u200b@deva[वृद्धि]. Formations: @deva[ईश्वरोऽभिचरितोः] = @deva[अभिचरितुम्]; @deva[ईश्वरो विलिखः] = @deva[विलिखितुम्]; @deva[ईश्वरो वितृदः] = @deva[वितर्दितुम्]. These express capability with infinitive sense."
        }
    },
    "34014": {
        "en": {
            "simple": "In Vedic, four affixes express @deva[कृत्य] (gerundive) sense: @deva[तवै], @deva[केन्], @deva[केन्य], @deva[त्वन्]. @deva[कृत्य] affixes denote action (@deva[भाव]) or object (@deva[कर्मन्]). Examples: @deva[अन्वेतवै] = @deva[अन्वेतव्यम्] 'to be followed'; @deva[दिदृक्षेण्यः] (RV I.146.5) = @deva[दिदृक्षितव्यम्] 'worth seeing'; @deva[कर्त्वम्] (RV I.10.2) = @deva[कर्तव्यम्] 'to be done'.",
            "standard": "Four Vedic affixes with @deva[कृत्यार्थ] (gerundive sense - @deva[भाव] and @deva[कर्मन्]): @deva[तवै], @deva[केन्], @deva[केन्य], @deva[त्वन्]. Note: @deva[तवै] also appeared in @ref[3.4.9] as infinitive; here it has passive participle sense. Examples: @deva[अन्वेतवै] = @deva[अन्वेतव्यम्]; @deva[परिधातवै] = @deva[परिधातव्यम्]; @deva[नावगाहे] = @deva[नावगाहितव्यम्]; @deva[दिदृक्षेण्यः] (RV I.146.5) = @deva[दिदृक्षितव्यम्]; @deva[शुश्रूषेण्यः] = @deva[शुश्रूषितव्यम्]; @deva[कर्त्वम्] (RV I.10.2) = @deva[कर्तव्यम्]. For @deva[तवै] accent, see @ref[6.1.200], @ref[6.2.51].",
            "advanced": "Four Vedic @deva[कृत्यार्थ] affixes (@deva[भाव]/\u200b@deva[कर्मन्] sense): @deva[तवै], @deva[केन्], @deva[केन्य], @deva[त्वन्]. @deva[तवै] here differs from @ref[3.4.9] (infinitive) - here it's @deva[कृत्य] (gerundive). Formations: @deva[अन्वेतवै] = @deva[अन्वेतव्यम्]; @deva[परिधातवै] = @deva[परिधातव्यम्]; @deva[नावगाहे] = @deva[नावगाहितव्यम्]; @deva[दिदृक्षेण्यः] (RV I.146.5) = @deva[दिदृक्षितव्यम्]; @deva[शुश्रूषेण्यः] = @deva[शुश्रूषितव्यम्]; @deva[कर्त्वम्] (RV I.10.2) = @deva[कर्तव्यम्]. Accent for @deva[तवै]: @ref[6.1.200], @ref[6.2.51]."
        }
    },
    "34015": {
        "en": {
            "simple": "The Vedic word @deva[अवचक्षे] is an irregular gerundive. In @deva[रिपुणा नावचक्षे] (RV IV.58.5) = @deva[नावख्यातव्यम्] 'not to be told to an enemy'. It's formed as @deva[अव] + @deva[चक्ष्] + @deva[एश्] = @deva[अवचक्षे]. Rule @ref[2.4.54] does not apply here.",
            "standard": "@deva[निपातन] for @deva[अवचक्षे] as Vedic @deva[कृत्य] (gerundive). @deva[रिपुणा नावचक्षे] (RV IV.58.5) = @deva[नावख्यातव्यम्] 'not to be declared to an enemy'. Derivation: @deva[अव] + @deva[चक्ष्] + @deva[एश्] = @deva[अवचक्षे]. The rule @ref[2.4.54] (which would apply to @deva[चक्ष्]) is suspended here.",
            "advanced": "@deva[निपातन]: @deva[अवचक्षे] as @deva[कृत्यार्थ] in @deva[छन्दस्]. @deva[रिपुणा नावचक्षे] (RV IV.58.5) = @deva[न] + @deva[आख्यातव्यम्] 'not to be revealed to an enemy'. Formation: @deva[अव] + @deva[चक्ष्] + @deva[एश्] = @deva[अवचक्षे]. The expected application of @ref[2.4.54] is blocked (@deva[अनित्य]) for this Vedic form."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.4.1-3.4.15 (Batch 1)")
