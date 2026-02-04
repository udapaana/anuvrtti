#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.2.153-3.2.167 (Batch 9)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "32153": {
        "en": {
            "simple": "The affix @deva[युच्] is blocked after three specific verbs: @deva[सूद्] (to strike), @deva[दीप्] (to shine), and @deva[दीक्ष्] (to initiate). These verbs are @deva[अनुदात्तेत्] (have an @deva[अनुदात्त] marker), which would normally allow @deva[युच्] by @ref[3.2.149]. Instead, they take @deva[तृन्]. Examples: @deva[सूदिता] (one who strikes), @deva[दीपिता] (one who shines), @deva[दीक्षिता] (one who initiates).",
            "standard": "This sūtra blocks @deva[युच्] after the @deva[अनुदात्तेत्] verbs @deva[सूद्], @deva[दीप्], and @deva[दीक्ष्], which would otherwise take @deva[युच्] by @ref[3.2.149]. Instead, @deva[तृन्] applies. Examples: @deva[सूदितृ] → @deva[सूदिता] (striker), @deva[दीपितृ] (illuminator), @deva[दीक्षितृ] (initiator). Note that @ref[3.2.167] separately prescribes @deva[र] after @deva[दीप्], but the @deva[वासरूपविधि] paribhāṣā does not universally prevent @deva[युच्] - forms like @deva[कम्रा] and @deva[कम्पना] both exist.",
            "advanced": "This blocks @deva[युच्] (from @ref[3.2.149]) after @deva[सूद्], @deva[दीप्], and @deva[दीक्ष्], forcing @deva[तृन्] instead. The sūtra addresses a potential objection: since @ref[3.2.167] prescribes @deva[र] after @deva[दीप्], that @deva[अपवाद] should already block @deva[युच्]. The answer is that the @deva[वासरूपविधि] paribhāṣā (from @ref[3.2.146], @ref[3.2.150]) is not universal - both @deva[कम्रा] and @deva[कम्पना] are valid, as are @deva[कम्प्रा] and @deva[कम्पना]. For @deva[मधुसूदन], @deva[रिपुसूदन]: (1) this is an @deva[अनित्य] rule (inferred from @deva[योगविभाग]), (2) these belong to @deva[मन्दादि] taking @deva[ल्यु] by @ref[3.1.134], or (3) they form by @deva[ल्युट्] via @ref[3.3.113]."
        }
    },
    "32154": {
        "en": {
            "simple": "The affix @deva[उकञ्] comes after ten verbs to denote an agent with a habitual tendency: @deva[लष्] (to desire), @deva[पत्] (to fall), @deva[पद्] (to go), @deva[स्था] (to stand), @deva[भू] (to be), @deva[वृष्] (to rain), @deva[हन्] (to strike), @deva[कम्] (to desire), @deva[गम्] (to go), @deva[शॄ] (to injure). Examples: @deva[प्रपातुक] (prone to miscarriage), @deva[प्रवर्षुक] (tending to rain), @deva[कामुक] (lustful), @deva[आगामुक] (about to come).",
            "standard": "The affix @deva[उकञ्] forms agent nouns with habitual sense from these ten roots: @deva[लष्], @deva[पत्], @deva[पद्], @deva[स्था], @deva[भू], @deva[वृष्], @deva[हन्], @deva[कम्], @deva[गम्], @deva[शॄ]. Examples: @deva[अपलाषुक] (without desire), @deva[प्रपातुका गर्भाः] (embryos prone to miscarriage), @deva[उपस्थायुक] (attendant), @deva[प्रभावुक] (effective), @deva[आघातुक] (striking). Note: @deva[स्था] gets @deva[य] by @ref[7.3.33] → @deva[उपस्थायुक]; @deva[हन्] becomes @deva[घात्] by @ref[7.3.32].",
            "advanced": "@deva[उकञ्] applies after @deva[लष्], @deva[पत्], @deva[पद्], @deva[स्था], @deva[भू], @deva[वृष्], @deva[हन्], @deva[कम्], @deva[गम्], @deva[शॄ] in @deva[तच्छीलादि] sense. Phonetic changes: @deva[स्था] + @deva[उकञ्] → @deva[स्थायुक] by @ref[7.3.33] (→ @deva[उपस्थायुक]); @deva[हन्] → @deva[घात्] by @ref[7.3.32] (→ @deva[आघातुक]). Examples: @deva[अपलाषुकं वृषलसङ्गतम्], @deva[प्रपातुका गर्भा भवन्ति], @deva[उपपादुकं सत्वम्], @deva[प्रभावुकम् अन्नं भवति], @deva[प्रवर्षुकाः पर्जन्याः], @deva[कामुकं एनं स्त्रियो भवन्ति], @deva[किंशारुकं तीक्ष्णम् आहुः]."
        }
    },
    "32155": {
        "en": {
            "simple": "The affix @deva[षाकन्] comes after five verbs to denote habitual action: @deva[जल्प्] (to chatter), @deva[भिक्ष्] (to beg), @deva[कुट्ट] (to cut), @deva[लुण्ट] (to steal), @deva[वृङ्] (to choose). The @deva[ष्] marker means feminine forms take @deva[ङीष्] (long @deva[ई]). Examples: @deva[जल्पाकः] (talkative person), @deva[भिक्षाकः] (beggar), @deva[कुट्टाकः] (cutter), @deva[लुण्टाकः] (thief), @deva[वराकः] (miserable). Feminine: @deva[जल्पाकी].",
            "standard": "The affix @deva[षाकन्] applies after @deva[जल्प्], @deva[भिक्ष्], @deva[कुट्ट], @deva[लुण्ट], @deva[वृङ्] in @deva[तच्छीलादि] sense. The @deva[ष्] is @deva[इत्], indicating by @ref[4.1.41] that feminines take @deva[ङीष्] (long @deva[ई]). Examples: @deva[जल्पाकः] (chatterbox), @deva[भिक्षाकः] (professional beggar), @deva[कुट्टाकः] (one who cuts), @deva[लुण्टाकः] (robber), @deva[वराकः] (lowly, wretched). Feminine forms: @deva[जल्पाकी], @deva[भिक्षाकी], etc.",
            "advanced": "@deva[षाकन्] after @deva[जल्प्], @deva[भिक्ष्], @deva[कुट्ट], @deva[लुण्ट], @deva[वृङ्] in @deva[तच्छीलादि] sense. The @deva[ष्] is @deva[इत्] by @ref[1.3.3], triggering @deva[ङीष्] in feminine by @ref[4.1.41]. Derivations: @deva[जल्पाकः] (talkative), @deva[भिक्षाकः] (mendicant), @deva[कुट्टाकः] (cutter), @deva[लुण्टाकः] (plunderer), @deva[वराकः] (from @deva[वृङ्] - pitiable, wretched). Feminine paradigm: @deva[जल्पाकी], @deva[भिक्षाकी], etc."
        }
    },
    "32156": {
        "en": {
            "simple": "The affix @deva[इनि] comes after @deva[प्रजु] (to hasten forward) to denote habitual action. This forms @deva[प्रजविन्] (a swift messenger, courier). The nominative singular is @deva[प्रजवी], dual @deva[प्रजविनौ].",
            "standard": "The affix @deva[इनि] applies after @deva[प्रजु] (to move swiftly forward) in @deva[तच्छीलादि] sense. Result: @deva[प्रजविन्] (express courier). Declension: nom. sg. @deva[प्रजवी], nom. du. @deva[प्रजविनौ]. The @deva[प्र] is the @deva[उपसर्ग] (preverb) attached to @deva[जु] (to move rapidly).",
            "advanced": "@deva[इनि] after @deva[प्रजु] (@deva[प्र] + @deva[जु] 'to hasten') in @deva[तच्छीलादि] sense. Formation: @deva[प्रजु] + @deva[इनि] → @deva[प्रजविन्]. Paradigm: nom. sg. @deva[प्रजवी], nom. du. @deva[प्रजविनौ], etc. The word denotes an express messenger or courier - one habitually swift."
        }
    },
    "32157": {
        "en": {
            "simple": "The affix @deva[इनि] comes after ten verbs to denote habitual action: @deva[जि] (to conquer), @deva[दृ] (to respect), @deva[क्षि] (to waste/dwell), @deva[विश्रि] (to shelter), @deva[इ] (to go), @deva[वम्] (to vomit), @deva[अव्यथ] (not to pain), @deva[अभ्यम्] (to injure), @deva[परिभू] (to humiliate), @deva[प्रसू] (to beget). Examples: @deva[जयी] (conquering), @deva[क्षयी] (wasting), @deva[अत्ययी] (exceeding), @deva[वमी] (vomiting), @deva[परिभवी] (humiliating), @deva[प्रसवी] (procreating).",
            "standard": "The affix @deva[इनि] applies after these ten roots in @deva[तच्छीलादि] sense: @deva[जि], @deva[दृ], @deva[क्षि], @deva[विश्रि], @deva[इ], @deva[वम्], @deva[अव्यथ], @deva[अभ्यम्], @deva[परिभू], @deva[प्रसू]. Nominative singular forms: @deva[जयी] (victorious), @deva[दरी] (respectful), @deva[क्षयी] (decaying), @deva[विश्रयी] (sheltering), @deva[अत्ययी] (transgressing), @deva[वमी] (one who vomits), @deva[अव्यथी] (free from pain), @deva[अभ्यमी] (injurious), @deva[परिभवी] (insulting), @deva[प्रसवी] (generative).",
            "advanced": "@deva[इनि] after @deva[जि], @deva[दृ], @deva[क्षि], @deva[विश्रि], @deva[इ], @deva[वम्], @deva[अव्यथ], @deva[अभ्यम्], @deva[परिभू], @deva[प्रसू] in @deva[तच्छीलादि] sense. Several have @deva[उपसर्ग]: @deva[विश्रि] = @deva[वि] + @deva[श्रि]; @deva[अव्यथ] = @deva[अ] (negative) + @deva[व्यथ्]; @deva[अभ्यम्] = @deva[अभि] + @deva[अम्]; @deva[परिभू] = @deva[परि] + @deva[भू]; @deva[प्रसू] = @deva[प्र] + @deva[सू]. Stems: @deva[जयिन्], @deva[दरिन्], @deva[क्षयिन्], @deva[विश्रयिन्], @deva[अत्ययिन्], @deva[वमिन्], @deva[अव्यथिन्], @deva[अभ्यमिन्], @deva[परिभविन्], @deva[प्रसविन्]."
        }
    },
    "32158": {
        "en": {
            "simple": "The affix @deva[आलुच्] comes after seven verbs to denote habitual tendency: @deva[स्पृह्] (to desire), @deva[गृह्] (to seize), @deva[पत्] (to go), @deva[दय्] (to give/protect), @deva[निद्रा] (to sleep), @deva[तन्द्रा] (to be tired), @deva[श्रद्धा] (to venerate). Examples: @deva[स्पृहयालुः] (desirous), @deva[गृहयालुः] (grasping), @deva[पतयालुः] (prone to fall), @deva[दयालुः] (compassionate), @deva[निद्रालुः] (sleepy), @deva[तन्द्रालुः] (slothful), @deva[श्रद्धालुः] (faithful).",
            "standard": "The affix @deva[आलुच्] applies after @deva[स्पृह्], @deva[गृह्], @deva[पत्], @deva[दय्], @deva[निद्रा], @deva[तन्द्रा], @deva[श्रद्धा] in @deva[तच्छीलादि] sense. The first three are @deva[चुरादि] (class 10) and take @deva[णिच्]. Etymology: @deva[निद्रा] = @deva[नि] + @deva[द्रा] (to go crookedly); @deva[तन्द्रा] = @deva[तद्] + @deva[द्रा] with @deva[द्] → @deva[न्]; @deva[श्रद्धा] = @deva[श्रत्] + @deva[धा]. The @deva[अय्] is added by @ref[6.4.55]. Examples: @deva[दयालुः] (merciful), @deva[श्रद्धालुः] (devout).\n\nVārtika: @deva[आलुच्] also comes after @deva[शीङ्] (to lie down) → @deva[शयालुः] (prone to lying down).",
            "advanced": "@deva[आलुच्] after @deva[स्पृह्], @deva[गृह्], @deva[पत्], @deva[दय्], @deva[निद्रा], @deva[तन्द्रा], @deva[श्रद्धा] in @deva[तच्छीलादि] sense. The @deva[चुरादि] roots (@deva[स्पृह्], @deva[गृह्], @deva[पत्]) take @deva[णिच्]. Etymology: @deva[निद्रा] = @deva[नि] + @deva[द्रा]; @deva[तन्द्रा] = @deva[तम्] + @deva[द्रा] with @deva[म्] → @deva[न्]; @deva[श्रद्धा] = @deva[श्रत्] + @deva[डुधाञ्]. The @deva[अय्] augment by @ref[6.4.55]. Formations: @deva[स्पृहयालुः], @deva[गृहयालुः], @deva[पतयालुः], @deva[दयालुः], @deva[निद्रालुः], @deva[तन्द्रालुः], @deva[श्रद्धालुः].\n\n@note[type=vārtika]: @deva[आलुच्] also after @deva[शीङ्] → @deva[शयालुः]."
        }
    },
    "32159": {
        "en": {
            "simple": "The affix @deva[रु] comes after five verbs: @deva[दा] (to give), @deva[धेट्] (to suck), @deva[सि] (to bind), @deva[शद्] (to fall), @deva[सद्] (to sit). Examples: @deva[दारुः] (generous person), @deva[धारुः] (suckling - as in @deva[धारुर्वत्सो मातरम्] 'a calf suckling its mother'), @deva[सरुः] (binding), @deva[शद्रुः] (falling), @deva[सद्रुः] (resting).",
            "standard": "The affix @deva[रु] applies after @deva[दा], @deva[धेट्], @deva[सि], @deva[शद्], @deva[सद्] in @deva[तच्छीलादि] sense. Examples: @deva[दारुः] (munificent), @deva[धारुर्वत्सो मातरम्] (a suckling calf), @deva[सरुः] (binder), @deva[शद्रुः] (one who falls), @deva[सद्रुः] (one who rests). Note: the genitive is blocked here by @ref[2.3.69], as @deva[रु] is treated like @deva[उ].",
            "advanced": "@deva[रु] after @deva[दा], @deva[धेट्], @deva[सि], @deva[शद्], @deva[सद्] in @deva[तच्छीलादि] sense. The genitive (@deva[षष्ठी]) is blocked by @ref[2.3.69] since @deva[रु] is equivalent to @deva[उ] for this purpose. Derivations: @deva[दा] + @deva[रु] → @deva[दारुः] (liberal giver); @deva[धेट्] + @deva[रु] → @deva[धारुः] (suckling); @deva[सि] + @deva[रु] → @deva[सरुः]; @deva[शद्] + @deva[रु] → @deva[शद्रुः]; @deva[सद्] + @deva[रु] → @deva[सद्रुः]. Example: @deva[धारुर्वत्सो मातरम्]."
        }
    },
    "32160": {
        "en": {
            "simple": "The affix @deva[क्मरच्] comes after three verbs to denote habitual action: @deva[सृ] (to flow), @deva[घसि] (to eat), @deva[अद्] (to eat). Examples: @deva[सृमरः] (going, a kind of deer), @deva[घस्मरः] (gluttonous), @deva[अद्मरः] (voracious).",
            "standard": "The affix @deva[क्मरच्] applies after @deva[सृ], @deva[घसि], @deva[अद्] in @deva[तच्छीलादि] sense. The @deva[क्] is @deva[इत्]. Formations: @deva[सृमरः] (moving, a type of deer), @deva[घस्मरः] (glutton), @deva[अद्मरः] (voracious eater).",
            "advanced": "@deva[क्मरच्] after @deva[सृ], @deva[घसि], @deva[अद्] in @deva[तच्छीलादि] sense. The @deva[क्] is @deva[इत्] by @ref[1.3.8]. Derivations: @deva[सृ] + @deva[क्मरच्] → @deva[सृमरः] (moving creature, a deer species); @deva[घसि] + @deva[क्मरच्] → @deva[घस्मरः] (gluttonous); @deva[अद्] + @deva[क्मरच्] → @deva[अद्मरः] (voracious)."
        }
    },
    "32161": {
        "en": {
            "simple": "The affix @deva[घुरच्] comes after three verbs to denote habitual action: @deva[भञ्ज्] (to break), @deva[भास्] (to shine), @deva[भिद्] (to be fat). The @deva[घ्] marker causes palatals to become gutturals. Examples: @deva[भङ्गुरः] (brittle, fragile), @deva[भासुरं ज्योतिः] (splendid light), @deva[मेदुरः पशुः] (a fat beast). After @deva[भञ्ज्], it gives reflexive meaning - that which naturally breaks of itself.",
            "standard": "The affix @deva[घुरच्] applies after @deva[भञ्ज्], @deva[भास्], @deva[भिद्] (= @deva[मिद्] 'to be fat') in @deva[तच्छीलादि] sense. The @deva[घ्] is @deva[इत्], causing @deva[कुत्व] (palatal → guttural) by @ref[7.3.52]. Derivation of @deva[भङ्गुर]: @deva[भञ्ज्] + @deva[घुरच्] → @deva[भङ्ग्] + @deva[उर] → @deva[भङ्गुरः] (brittle). Similarly: @deva[भासुरम्] (radiant), @deva[मेदुरः] (corpulent). After @deva[भञ्ज्], the affix gives reflexive sense - what breaks by itself.",
            "advanced": "@deva[घुरच्] after @deva[भञ्ज्], @deva[भास्], @deva[मिद्] (to be fat) in @deva[तच्छीलादि] sense. The @deva[घ्] is @deva[इत्], triggering @deva[कुत्व] by @ref[7.3.52]. Derivation: @deva[भञ्ज्] + @deva[घुरच्] = @deva[भङ्ग्] + @deva[उर] = @deva[भङ्गुरः] (fragile - reflexive sense: breaks of itself). @deva[भास्] + @deva[घुरच्] = @deva[भासुरम्] (resplendent). @deva[मिद्] + @deva[घुरच्] = @deva[मेदुरः] (fat). Examples: @deva[भासुरं ज्योतिः] (brilliant light), @deva[मेदुरः पशुः] (corpulent animal)."
        }
    },
    "32162": {
        "en": {
            "simple": "The affix @deva[कुरच्] comes after three verbs to denote habitual action: @deva[विद्] (to know), @deva[भिद्] (to divide), @deva[छिद्] (to pierce). Examples: @deva[विदुरः पण्डितः] (a knowing scholar), @deva[भिदुरं काष्ठम्] (splitting wood), @deva[छिदुरा रज्जुः] (a breaking rope). After @deva[भिद्] and @deva[छिद्], the affix gives reflexive sense - what splits or breaks by itself.\n\nVārtika: @deva[कुरच्] also comes after @deva[व्यध्] (to kill), with semivowel vocalization → @deva[विधुरः].",
            "standard": "The affix @deva[कुरच्] applies after @deva[विद्], @deva[भिद्], @deva[छिद्] in @deva[तच्छीलादि] sense. Examples: @deva[विदुरः पण्डितः] (learned scholar), @deva[भिदुरं काष्ठम्] (fragile wood - reflexive: wood that splits), @deva[छिदुरा रज्जुः] (a rope that breaks easily). The affix conveys reflexive meaning after @deva[भिद्] and @deva[छिद्].\n\nVārtika: @deva[कुरच्] also after @deva[व्यध्] (to pierce) with @deva[सम्प्रसारण] of the semivowel → @deva[विधुरः] (distressed, separated).",
            "advanced": "@deva[कुरच्] after @deva[विद्], @deva[भिद्], @deva[छिद्] in @deva[तच्छीलादि] sense. After @deva[भिद्] and @deva[छिद्], reflexive meaning obtains. Examples: @deva[विदुरः पण्डितः] (sage Vidura - the wise one), @deva[भिदुरं काष्ठम्] (self-splitting wood), @deva[छिदुरा रज्जुः] (self-breaking rope).\n\n@note[type=vārtika]: @deva[कुरच्] also after @deva[व्यध्] with @deva[सम्प्रसारण] (vocalization of @deva[य्] → @deva[इ]): @deva[व्यध्] → @deva[विध्] → @deva[विधुरः] (afflicted, bereft)."
        }
    },
    "32163": {
        "en": {
            "simple": "The affix @deva[क्वरप्] comes after four verbs to denote habitual action: @deva[इ] (to go), @deva[नश्] (to destroy), @deva[जि] (to conquer), @deva[सृ] (to flow). The @deva[प्] marker triggers the augment @deva[तुक्] between root and affix. Examples: @deva[इत्वरः] (traveler), @deva[नश्वरः] (transitory), @deva[जित्वरः] (victorious), @deva[सृत्वरः] (going, a river). Feminine: @deva[इत्वरी], @deva[नश्वरी], etc.",
            "standard": "The affix @deva[क्वरप्] applies after @deva[इ], @deva[नश्], @deva[जि], @deva[सृ] in @deva[तच्छीलादि] sense. The @deva[प्] is @deva[इत्], causing @deva[तुक्] augment by @ref[6.1.71]. Derivation: @deva[इ] + @deva[क्वरप्] = @deva[इ] + @deva[त्] + @deva[वर] = @deva[इत्वरः] (wayfarer). Similarly: @deva[नश्वरः] (perishable), @deva[जित्वरः] (conquering), @deva[सृत्वरः] (flowing - hence 'river'). Feminines in @deva[ई]: @deva[इत्वरी], @deva[नश्वरी], @deva[जित्वरी], @deva[सृत्वरी]. Note: though the affix begins with @deva[वल्] letters, @deva[इट्] is blocked by @ref[7.2.8].",
            "advanced": "@deva[क्वरप्] after @deva[इ], @deva[नश्], @deva[जि], @deva[सृ] in @deva[तच्छीलादि] sense. The @deva[प्] is @deva[इत्], triggering @deva[तुक्] by @ref[6.1.71]. Formation: @deva[इ] + @deva[त्] + @deva[वर] = @deva[इत्वरः]; @deva[नश्] + @deva[त्] + @deva[वर] = @deva[नश्वरः]; @deva[जि] + @deva[त्] + @deva[वर] = @deva[जित्वरः]; @deva[सृ] + @deva[त्] + @deva[वर] = @deva[सृत्वरः]. Though the affix begins with @deva[वल्] @deva[प्रत्याहार] letters (which would require @deva[इट्] by @ref[7.2.35]), this is blocked by @ref[7.2.8]. Feminine forms: @deva[इत्वरी], @deva[नश्वरी], @deva[जित्वरी], @deva[सृत्वरी]."
        }
    },
    "32164": {
        "en": {
            "simple": "The word @deva[गत्वर] is formed irregularly. The @deva[म्] of @deva[गम्] is deleted, and the affix @deva[क्वरप्] is added. Result: @deva[गत्वरः] (locomotive, transient). Feminine: @deva[गत्वरी].",
            "standard": "This sūtra states that @deva[गत्वर] is an irregular formation. The root @deva[गम्] loses its @deva[म्] before @deva[क्वरप्]: @deva[गम्] → @deva[ग] + @deva[त्वर] = @deva[गत्वरः] (moving, transient). Feminine: @deva[गत्वरी]. This is a @deva[निपातन] (listed exception).",
            "advanced": "@deva[निपातन] for @deva[गत्वर]. Irregular derivation: @deva[गम्] drops @deva[म्] before @deva[क्वरप्] → @deva[ग] + @deva[त्] + @deva[वर] = @deva[गत्वरः] (locomotive, transient). Regular derivation would yield @deva[*गंत्वर] or similar. Feminine: @deva[गत्वरी]."
        }
    },
    "32165": {
        "en": {
            "simple": "The affix @deva[ऊक] comes after @deva[जागृ] (to be awake) to denote habitual action. This forms @deva[जागरूकः] (wakeful, vigilant).",
            "standard": "The affix @deva[ऊक] applies after @deva[जागृ] (to wake) in @deva[तच्छीलादि] sense, forming @deva[जागरूकः] (habitually wakeful, vigilant). The root undergoes @deva[गुण] → @deva[जागर्] + @deva[ऊक] = @deva[जागरूकः].",
            "advanced": "@deva[ऊक] after @deva[जागृ] in @deva[तच्छीलादि] sense. Formation: @deva[जागृ] undergoes @deva[गुण] of @deva[ऋ] → @deva[अर्], yielding @deva[जागर्] + @deva[ऊक] = @deva[जागरूकः] (wakeful, alert). This is a commonly used word for someone habitually awake or vigilant."
        }
    },
    "32166": {
        "en": {
            "simple": "The affix @deva[ऊक] comes after intensive (@deva[यङन्त]) forms of three verbs: @deva[यज्] (to sacrifice), @deva[जप्] (to mutter), @deva[दश्] (to bite). The intensive expresses repeated action. Examples: @deva[यायजूकः] (one who performs frequent sacrifices), @deva[जञ्जपूकः] (one who constantly mutters prayers), @deva[दन्दशूकः] (what bites frequently - a snake).",
            "standard": "The affix @deva[ऊक] applies after @deva[यङन्त] (intensive) forms of @deva[यज्], @deva[जप्], @deva[दश्] in @deva[तच्छीलादि] sense. The intensive denotes repeated or intensified action. Formations: @deva[यायज्] + @deva[ऊक] = @deva[यायजूकः] (frequent sacrificer); @deva[जञ्जप्] + @deva[ऊक] = @deva[जञ्जपूकः] (constant mutterer of prayers); @deva[दन्दश्] + @deva[ऊक] = @deva[दन्दशूकः] (habitual biter - epithet for snakes).",
            "advanced": "@deva[ऊक] after @deva[यङन्त] (intensive) stems of @deva[यज्], @deva[जप्], @deva[दश्] in @deva[तच्छीलादि] sense. The @deva[य्] in the sūtra refers to verbs ending in the affix @deva[यङ्] (intensive marker). Intensives are formed with reduplication: @deva[यज्] → @deva[यायज्]; @deva[जप्] → @deva[जञ्जप्]; @deva[दश्] → @deva[दन्दश्]. Final forms: @deva[यायजूकः] (assiduous sacrificer), @deva[जञ्जपूकः] (habitual prayer-mutterer), @deva[दन्दशूकः] (snake - 'the constant biter')."
        }
    },
    "32167": {
        "en": {
            "simple": "The affix @deva[र] comes after seven verbs to denote habitual action: @deva[नम्] (to bow), @deva[कम्प्] (to shake), @deva[स्मि] (to smile), @deva[अजस्] (not to cease), @deva[कम्] (to desire), @deva[हिंस्] (to injure), @deva[दीप्] (to shine). Examples: @deva[नम्रं काष्ठम्] (soft/flexible wood), @deva[कम्प्रा शाखा] (shaking branch), @deva[स्मेरं मुखम्] (smiling face), @deva[अजस्रम्] (perpetually - an adverb), @deva[कम्रा युवतिः] (beautiful maiden), @deva[हिंस्रं रक्षः] (injuring demon), @deva[दीप्रं काष्ठम्] (brilliant wood).",
            "standard": "The affix @deva[र] applies after @deva[नम्], @deva[कम्प्], @deva[स्मि], @deva[अजस्], @deva[कम्], @deva[हिंस्], @deva[दीप्] in @deva[तच्छीलादि] sense. Examples: @deva[नम्रम्] (pliant), @deva[कम्प्रा] (trembling), @deva[स्मेरम्] (smiling), @deva[अजस्रम्] (perpetual - adverb), @deva[कम्रा] (lovely), @deva[हिंस्रम्] (violent), @deva[दीप्रम्] (radiant). The word @deva[अजस्रम्] is derived from @deva[अ] (negative) + @deva[जस्] (to release) + @deva[र] = 'unceasing.'",
            "advanced": "@deva[र] after @deva[नम्], @deva[कम्प्], @deva[स्मि], @deva[अजस्], @deva[कम्], @deva[हिंस्], @deva[दीप्] in @deva[तच्छीलादि] sense. Formations: @deva[नम्रम्] (flexible), @deva[कम्प्रा शाखा] (quivering branch), @deva[स्मेरं मुखम्] (smiling face), @deva[कम्रा युवतिः] (comely maiden), @deva[हिंस्रं रक्षः] (violent demon), @deva[दीप्रं काष्ठम्] (resplendent wood). Etymology of @deva[अजस्रम्]: @deva[अ] + @deva[जस्] (to release, set free) + @deva[र] = 'without cessation' (functions as adverb: @deva[अजस्रं जुहोति] 'he sacrifices perpetually')."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.2.153-3.2.167 (Batch 9)")
