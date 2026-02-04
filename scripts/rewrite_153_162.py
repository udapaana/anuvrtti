# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "32153": {
        "en": {
            "simple": "The affix @deva[युच्] does **not** come after @deva[सूद्] 'strike', @deva[दीप्] 'shine', and @deva[दीक्ष्] 'initiate'. These are @deva[अनुदात्तेत्] and would otherwise take @deva[युच्] by @ref[3.2.149]. Instead they take @deva[तृन्]. Examples: @deva[सूदिता] 'striker', @deva[दीपिता] 'shiner', @deva[दीक्षिता] 'initiator'. Note: @deva[मधुसूदन] and @deva[रिपुसूदन] exist because this rule is @deva[अनित्य], or those words take @deva[ल्यु] (@ref[3.1.134]) or @deva[ल्युट्] (@ref[3.3.113]).",
            "standard": "The affix @deva[युच्] is prohibited after @deva[सूद्], @deva[दीप्], @deva[दीक्ष्]. These @deva[अनुदात्तेत्] verbs would otherwise take @deva[युच्] by @ref[3.2.149]. Instead @deva[तृन्] applies. Examples: @deva[सूदितृ], nom. @deva[सूदिता] 'striker'; @deva[दीपितृ] 'shiner'; @deva[दीक्षितृ] 'initiator'. Though @deva[दीप्] takes @deva[र] by @ref[3.2.167], and the @deva[परिभाषा] (@ref[3.2.146]) should prevent @deva[युच्], that @deva[परिभाषा] isn't universal: @deva[कम्रा]/कम्पना युवतिः are both valid. Forms like @deva[मधुसूदन]/रिपुसूदन exist because: (1) rule is @deva[अनित्य] (inferred from @deva[योगविभाग]); (2) @deva[मन्दादि] class takes @deva[ल्यु] (@ref[3.1.134]); or (3) @deva[ल्युट्] applies (@ref[3.3.113]).",
            "advanced": "@deva[युच्] is @deva[निषिद्ध] after @deva[सूद्]/दीप्/दीक्ष्]. These @deva[अनुदात्तेत्] verbs take @deva[तृन्] instead. Examples: @deva[सूदिता], @deva[दीपिता], @deva[दीक्षिता]. Though @ref[3.2.167] gives @deva[दीप्] the affix @deva[र], and @ref[3.2.146]/@ref[3.2.150] @deva[परिभाषा] should block @deva[युच्], that @deva[परिभाषा] isn't universal: @deva[कम्रा]/कम्पना युवतिः; @deva[कम्प्रा]/कम्पना शाखा. @deva[मधुसूदन] etc. exist via: (1) @deva[अनित्यता] (@deva[योगविभाग]-@deva[ज्ञापक]); (2) @deva[मन्दादि] + @deva[ल्यु]; (3) @deva[ल्युट्] (@ref[3.3.113])."
        }
    },
    "32154": {
        "en": {
            "simple": "The affix @deva[उकञ्] comes after @deva[लष्], @deva[पत्], @deva[पद्], @deva[स्था], @deva[भू], @deva[वृष्], @deva[हन्], @deva[कम्], @deva[गम्], @deva[शॄ] for 'agent with habit etc.' Examples: @deva[अपलाषुकम्] 'thirsty disposition', @deva[प्रपातुका गर्भाः] 'miscarrying pregnancies', @deva[उपस्थायुका पशवः] 'animals that attend', @deva[प्रभावुकम् अन्नम्] 'nourishing food', @deva[प्रवर्षुकाः पर्जन्याः] 'rain-bearing clouds', @deva[कामुकम्] 'lustful'. @deva[स्था] takes @deva[य] by @ref[7.3.33]; @deva[हन्] becomes @deva[घात्] by @ref[7.3.32] and @ref[7.3.54].",
            "standard": "The affix @deva[उकञ्] follows @deva[लष्], @deva[पत्], @deva[पद्], @deva[स्था], @deva[भू], @deva[वृष्], @deva[हन्], @deva[कम्], @deva[गम्], @deva[शॄ] for @deva[तच्छीलादि]. Examples: @deva[अपलाषुकं वृषलसङ्गतम्]; @deva[प्रपातुका गर्भा भवन्ति]; @deva[उपपादुकं सत्वम्]; @deva[उपस्थायुका एनं पशवो भवन्ति]; @deva[प्रभावुकम् अन्नं भवति]; @deva[प्रवर्षुकाः पर्जन्याः]; @deva[आघातुकं कापालिकस्य शूलम्]; @deva[कामुकं एनं स्त्रियो भवन्ति]; @deva[आगामुकं वाराणसीं रक्ष आहुः]; @deva[किंशारुकं तीक्ष्णमाहुः]. @deva[स्था] → @deva[उपस्थायुक] via @ref[7.3.33] @deva[यकागम]; @deva[हन्] → @deva[घात्] via @ref[7.3.32] and @ref[7.3.54].",
            "advanced": "@deva[उकञ्] follows @deva[लष्]/पत्/पद्/स्था/भू/वृष्/हन्/कम्/गम्/शॄ for @deva[तच्छीलादि]. Examples: @deva[अपलाषुक], @deva[प्रपातुक], @deva[उपपादुक], @deva[उपस्थायुक] (@ref[7.3.33] @deva[यकागम]), @deva[प्रभावुक], @deva[प्रवर्षुक], @deva[आघातुक] (@ref[7.3.32], @ref[7.3.54] @deva[हन्] → @deva[घात्]), @deva[कामुक], @deva[आगामुक], @deva[किंशारुक]."
        }
    },
    "32155": {
        "en": {
            "simple": "The affix @deva[षाकन्] comes after @deva[जल्प्] 'talk', @deva[भिक्ष्] 'beg', @deva[कुट्ट्] 'cut', @deva[लुण्ट्] 'rob', @deva[वृङ्] 'choose' for 'agent with habit etc.' The @deva[ष्] indicates feminine takes @deva[ङीष्] (long @deva[ई]) by @ref[4.1.41]. Examples: @deva[जल्पाकः] 'talkative' (fem. @deva[जल्पाकी]), @deva[भिक्षाकः] 'beggar', @deva[कुट्टाकः] 'cutter', @deva[लुण्टाकः] 'thief/robber', @deva[वराकः] 'miserable'.",
            "standard": "The affix @deva[षाकन्] follows @deva[जल्प्], @deva[भिक्ष्], @deva[कुट्ट्], @deva[लुण्ट्], @deva[वृङ्] for @deva[तच्छीलादि]. The @deva[ष्] is @deva[इत्] indicating @deva[ङीष्] (@deva[दीर्घ] @deva[ई]) in feminine (@ref[4.1.41]). Examples: @deva[जल्पाकः] 'talkative', fem. @deva[जल्पाकी]; @deva[भिक्षाकः] 'beggar'; @deva[कुट्टाकः] 'cutter'; @deva[लुण्टाकः] 'robber'; @deva[वराकः] 'miserable'.",
            "advanced": "@deva[षाकन्] follows @deva[जल्प्]/भिक्ष्/कुट्ट्/लुण्ट्/वृङ् for @deva[तच्छीलादि]. @deva[ष्] is @deva[इत्] → @deva[ङीष्] in @deva[स्त्रीलिङ्ग] (@ref[4.1.41]). Examples: @deva[जल्पाकः] (f. @deva[जल्पाकी]), @deva[भिक्षाकः], @deva[कुट्टाकः], @deva[लुण्टाकः], @deva[वराकः]."
        }
    },
    "32156": {
        "en": {
            "simple": "The affix @deva[इनि] comes after @deva[प्रजु] 'hasten forward' for 'agent with habit etc.' Example: @deva[प्रजविन्], nom. sg. @deva[प्रजवी] 'express/courier', dual @deva[प्रजविनौ].",
            "standard": "The affix @deva[इनि] follows @deva[प्रजु] 'to hasten forward' for @deva[तच्छीलादि]. Example: @deva[प्रजविन्], nom. @deva[प्रजवी] 'express/courier', dual @deva[प्रजविनौ].",
            "advanced": "@deva[इनि] follows @deva[प्रजु] for @deva[तच्छीलादि]. Example: @deva[प्रजविन्], nom. @deva[प्रजवी], dual @deva[प्रजविनौ]."
        }
    },
    "32157": {
        "en": {
            "simple": "The affix @deva[इनि] comes after @deva[जि] 'conquer', @deva[दृ] 'respect', @deva[क्षि] 'waste/dwell', @deva[विश्रि] 'shelter', @deva[इ] 'go', @deva[वम्] 'vomit', @deva[अव्यथ्] 'not pain', @deva[अभ्यम्] 'injure', @deva[परिभू] 'humiliate', @deva[प्रसू] 'beget' for 'agent with habit etc.' Examples: @deva[जयी] 'conquering', @deva[दरी] 'respecting', @deva[क्षयी] 'wasting', @deva[विश्रयी] 'sheltering', @deva[अत्ययी] 'exceeding', @deva[वमी] 'vomiting', @deva[अव्यथी] 'painless', @deva[अभ्यमी] 'not injuring', @deva[परिभवी] 'humiliating', @deva[प्रसवी] 'procreating'.",
            "standard": "The affix @deva[इनि] follows @deva[जि], @deva[दृ], @deva[क्षि], @deva[विश्रि], @deva[इ], @deva[वम्], @deva[अव्यथ्], @deva[अभ्यम्], @deva[परिभू], @deva[प्रसू] for @deva[तच्छीलादि]. Examples: @deva[जयिन्], nom. @deva[जयी] 'conquering'; @deva[दरी] 'respecting'; @deva[क्षयी] 'wasting'; @deva[विश्रयी] 'sheltering'; @deva[अत्ययी] 'exceeding'; @deva[वमी] 'vomiting'; @deva[अव्यथी] 'painless'; @deva[अभ्यमी] 'not injuring'; @deva[परिभवी] 'humiliating'; @deva[प्रसवी] 'procreating'.",
            "advanced": "@deva[इनि] follows @deva[जि]/दृ/क्षि/विश्रि/इ/वम्/अव्यथ्/अभ्यम्/परिभू/प्रसू for @deva[तच्छीलादि]. Examples: @deva[जयी], @deva[दरी], @deva[क्षयी], @deva[विश्रयी], @deva[अत्ययी], @deva[वमी], @deva[अव्यथी], @deva[अभ्यमी], @deva[परिभवी], @deva[प्रसवी]."
        }
    },
    "32158": {
        "en": {
            "simple": "The affix @deva[आलुच्] comes after @deva[स्पृह्] 'desire', @deva[गृह्] 'seize', @deva[पत्] 'go', @deva[दय्] 'give/protect', @deva[निद्रा] 'sleep', @deva[तन्द्रा] 'be tired', @deva[श्रद्धा] 'venerate' for 'agent with habit etc.' The first three are @deva[चुरादि] and take @deva[णिच्]. Examples: @deva[स्पृहयालुः] 'desirous', @deva[गृहयालुः] 'seizing', @deva[पतयालुः] 'prone to fall', @deva[दयालुः] 'compassionate', @deva[निद्रालुः] 'sleepy', @deva[तन्द्रालुः] 'slothful', @deva[श्रद्धालुः] 'faithful'. @deva[अय] added by @ref[6.4.55]. Vārttika: @deva[शयालुः] 'disposed to lie down' (from @deva[शीङ्]).",
            "standard": "The affix @deva[आलुच्] follows @deva[स्पृह्], @deva[गृह्], @deva[पत्], @deva[दय्], @deva[निद्रा], @deva[तन्द्रा], @deva[श्रद्धा] for @deva[तच्छीलादि]. @deva[निद्रा] = @deva[नि] + @deva[द्रा]; @deva[तन्द्रा] = @deva[तद्] + @deva[द्रा] (with @deva[द्] → @deva[न्] irregularly); @deva[श्रद्धा] = @deva[श्रत्] + @deva[धा]. First three are @deva[चुरादि] with @deva[णिच्]. Examples: @deva[स्पृहयालुः] 'desirous'; @deva[गृहयालुः] 'seizing'; @deva[पतयालुः] 'prone to fall'; @deva[दयालुः] 'compassionate'; @deva[निद्रालुः] 'sleepy'; @deva[तन्द्रालुः] 'slothful'; @deva[श्रद्धालुः] 'faithful'. @deva[अय] via @ref[6.4.55]. @deva[वार्त्तिक]: @deva[शीङ्] → @deva[शयालुः].",
            "advanced": "@deva[आलुच्] follows @deva[स्पृह्]/गृह्/पत्/दय्/निद्रा/तन्द्रा/श्रद्धा for @deva[तच्छीलादि]. @deva[निद्रा] = @deva[नि] + @deva[द्रा]; @deva[तन्द्रा] = @deva[तद्] + @deva[द्रा] (@deva[द्] → @deva[न्] irregular); @deva[श्रद्धा] = @deva[श्रत्] + @deva[डुधाञ्]. First three @deva[चुरादि] with @deva[णिच्]. Examples: @deva[स्पृहयालुः], @deva[गृहयालुः], @deva[पतयालुः], @deva[दयालुः], @deva[निद्रालुः], @deva[तन्द्रालुः], @deva[श्रद्धालुः]. @deva[अयागम] via @ref[6.4.55]. @deva[वार्त्तिक]: @deva[शीङ्] → @deva[शयालुः]."
        }
    },
    "32159": {
        "en": {
            "simple": "The affix @deva[रु] comes after @deva[दा] 'give', @deva[धेट्] 'suck', @deva[सि] 'bind', @deva[शद्] 'fall', @deva[सद्] 'sit' for 'agent with habit etc.' Examples: @deva[दारुः] 'munificent', @deva[धारुर्वत्सो मातरम्] 'sucking child' (genitive blocked by @ref[2.3.69], @deva[रु] = @deva[उ]), @deva[सारुः] 'binding', @deva[शद्रुः] 'falling', @deva[सद्रुः] 'resting'.",
            "standard": "The affix @deva[रु] follows @deva[दा], @deva[धेट्], @deva[सि], @deva[शद्], @deva[सद्] for @deva[तच्छीलादि]. Examples: @deva[दारुः] 'munificent'; @deva[धारुर्वत्सो मातरम्] 'sucking child' (@deva[षष्ठी] blocked by @ref[2.3.69], @deva[रु] taken as @deva[उ]); @deva[सारुः] 'binding'; @deva[शद्रुः] 'falling'; @deva[सद्रुः] 'resting'.",
            "advanced": "@deva[रु] follows @deva[दा]/धेट्/सि/शद्/सद् for @deva[तच्छीलादि]. Examples: @deva[दारुः], @deva[धारुः] (@deva[षष्ठी] blocked by @ref[2.3.69], @deva[रु] ≈ @deva[उ]), @deva[सारुः], @deva[शद्रुः], @deva[सद्रुः]."
        }
    },
    "32160": {
        "en": {
            "simple": "The affix @deva[क्मरच्] comes after @deva[सृ] 'flow', @deva[घस्] 'eat', @deva[अद्] 'eat' for 'agent with habit etc.' Examples: @deva[सृमरः] 'going, a kind of deer', @deva[घस्मरः] 'gluttonous', @deva[अद्मरः] 'voracious'.",
            "standard": "The affix @deva[क्मरच्] follows @deva[सृ], @deva[घसि], @deva[अद्] for @deva[तच्छीलादि]. Examples: @deva[सृमरः] 'going, deer'; @deva[घस्मरः] 'gluttonous'; @deva[अद्मरः] 'voracious'.",
            "advanced": "@deva[क्मरच्] follows @deva[सृ]/घसि/अद् for @deva[तच्छीलादि]. Examples: @deva[सृमरः], @deva[घस्मरः], @deva[अद्मरः]."
        }
    },
    "32161": {
        "en": {
            "simple": "The affix @deva[घुरच्] comes after @deva[भञ्ज्] 'break', @deva[भास्] 'shine', @deva[मिद्] 'be fat' for 'agent with habit etc.' The @deva[घ] causes guttural substitution of final palatals. Examples: @deva[भङ्गुरः] 'brittle' (reflexive—breaks of itself) by @ref[7.3.52], @deva[भासुरं ज्योतिः] 'splendid light', @deva[मेदुरः पशुः] 'fat beast'.",
            "standard": "The affix @deva[घुरच्] follows @deva[भञ्ज्], @deva[भास्], @deva[मिद्] for @deva[तच्छीलादि]. The @deva[घ] triggers @deva[कुत्व] (guttural substitution). Examples: @deva[भञ्ज्] + @deva[घुरच्] = @deva[भङ्ग्] + @deva[उर] (@ref[7.3.52]) = @deva[भङ्गुरः] 'brittle' (reflexive—naturally breaks); @deva[भासुरं ज्योतिः] 'splendid light'; @deva[मेदुरः पशुः] 'fat beast'.",
            "advanced": "@deva[घुरच्] follows @deva[भञ्ज्]/भास्/मिद् for @deva[तच्छीलादि]. @deva[घ] = @deva[कुत्वार्थ]. Examples: @deva[भङ्गुरः] (@ref[7.3.52] @deva[च्] → @deva[ग्]; reflexive sense—naturally brittle); @deva[भासुरः]; @deva[मेदुरः]."
        }
    },
    "32162": {
        "en": {
            "simple": "The affix @deva[कुरच्] comes after @deva[विद्] 'know', @deva[भिद्] 'divide', @deva[छिद्] 'pierce' for 'agent with habit etc.' Examples: @deva[विदुरः पण्डितः] 'knowing scholar', @deva[भिदुरं काष्ठम्] 'splitting wood' (reflexive), @deva[छिदुरा रज्जुः] 'breaking rope' (reflexive). Vārttika: @deva[व्यध्] 'kill' takes @deva[कुरच्] with semivowel vocalization: @deva[विधुरः].",
            "standard": "The affix @deva[कुरच्] follows @deva[विद्], @deva[भिद्], @deva[छिद्] for @deva[तच्छीलादि]. Examples: @deva[विदुरः पण्डितः] 'knowing scholar'; @deva[भिदुरं काष्ठम्] 'splitting wood' (reflexive); @deva[छिदुरा रज्जुः] 'breaking rope' (reflexive). After @deva[भिद्]/छिद्], the affix has reflexive sense. @deva[वार्त्तिक]: @deva[व्यध्] takes @deva[कुरच्] with @deva[संप्रसारण]: @deva[विधुरः].",
            "advanced": "@deva[कुरच्] follows @deva[विद्]/भिद्/छिद् for @deva[तच्छीलादि]. Examples: @deva[विदुरः], @deva[भिदुरः] (reflexive), @deva[छिदुरः] (reflexive). @deva[वार्त्तिक]: @deva[व्यध्] + @deva[कुरच्] with @deva[संप्रसारण] → @deva[विधुरः]."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.2.153-3.2.162")
