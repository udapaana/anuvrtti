# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33111": {
        "en": {
            "simple": "The affix @deva[ण्वुच्] comes optionally after a root when expressing succession, merit, debt, or production. This supersedes @deva[क्तिन्] etc. Examples: @deva[शयिका] 'turn of sleeping'; @deva[इक्षुभक्षिका] 'meal of sugarcane owed/deserved/produced'.",
            "standard": "The affix @deva[ण्वुच्] applies optionally after roots in four senses: (1) @deva[पर्याय] (turn/succession): @deva[भवतः शयिका] 'your turn of sleeping'; (2) @deva[अर्ह] (worthiness): @deva[अर्हति भवान् इक्षुभक्षिकाम्] 'you deserve a sugarcane meal'; (3) @deva[ऋण] (debt): @deva[इक्षुभक्षिकां मे धारयसि] 'you owe me a sugarcane meal'; (4) @deva[उत्पत्ति] (production): @deva[इक्षुभक्षिका मे उदपादि]. Option: @deva[चिकीर्षा उत्पद्यते].",
            "advanced": "The @deva[ण्वुच्] and @deva[ण्वुल्] yield identical forms; the difference is accent (@ref[6.1.193], @ref[6.1.163]). The four semantic conditions (@deva[पर्याय], @deva[अर्ह], @deva[ऋण], @deva[उत्पत्ति]) extend beyond the basic @deva[भाव]/कारक senses. The @deva[विभाषा] allows other affixes too."
        }
    },
    "33112": {
        "en": {
            "simple": "The affix @deva[अनि] comes after a verb when @deva[नञ्] (negative) is in composition and the meaning is 'curse'. Example: @deva[अकरणिस्ते वृषल भूयात्] 'may failure befall you, O sinner!' Without curse: @deva[अकृतिः] 'non-making'.",
            "standard": "When @deva[नञ्] is in composition and the sense is @deva[आक्रोश] (cursing), @deva[अनि] applies, superseding @deva[क्तिन्] etc. Examples: @deva[अकरणिस्ते वृषल भूयात्] 'may failure befall you, O sinner!'; @deva[तस्य अकरणिरेव अस्तु] 'may he be disappointed'. Without curse meaning: @deva[अकृतिस्तस्य कटस्य] 'the non-making of his mat'. Without @deva[नञ्]: @deva[सृतिस्ते भूयात्] 'may death befall you!'",
            "advanced": "The @deva[विभाषा] does not continue here—@deva[अनि] is mandatory in cursing contexts with @deva[नञ्]. Two conditions required: (1) @deva[नञ्]-composition, (2) @deva[आक्रोश] sense. Either condition absent triggers different treatment."
        }
    },
    "33113": {
        "en": {
            "simple": "The @deva[कृत्य] affixes and @deva[ल्युट्] apply diversely—in places and senses beyond their original prescriptions. The @deva[भाव]/अकर्तृ conditions from @ref[3.3.18-19] cease here. Examples: @deva[स्नानीयं चूर्णम्] 'bathing powder' (instrument); @deva[दानीयो ब्राह्मणः] 'Brāhmaṇa to be given to' (recipient).",
            "standard": "The @deva[कृत्य] affixes (@ref[3.1.95]) and @deva[ल्युट्] are @deva[बहुलम्] (diversely applicable)—they occur beyond their prescribed domains. The @deva[अनुवृत्ति] of @deva[भावे] and @deva[अकर्तरि कारके] from @ref[3.3.18-19] ends here. @deva[कृत्य] affixes (normally for action/object) apply to other @deva[कारकs]: @deva[स्नानीयं चूर्णम्] 'bathing powder' (instrument, 3rd case); @deva[दानीयो ब्राह्मणः] 'Brāhmaṇa to give to' (recipient, 4th case). @deva[ल्युट्] similarly extends.",
            "advanced": "The @deva[बहुलम्] principle allows @deva[कृत्य] and @deva[ल्युट्] in @deva[कारकs] beyond @deva[कर्म]. @deva[ल्युट्] examples: @deva[राजभोजनाः शालयः] 'halls for royal eating'; @deva[राजाच्छादनानि वासांसि] 'garments to cover the king'. Even general @deva[कृत्] affixes extend: @deva[पादहारकः] 'carried by feet'; @deva[गलेचोपकः] 'smeared on throat' (@ref[6.2.150] for accent)."
        }
    },
    "33114": {
        "en": {
            "simple": "The affix @deva[क्त] is added when action is expressed in neuter gender. Examples: @deva[हसितम्] 'laugh'; @deva[जल्पितम्] 'speech'; @deva[शायितम्] 'sleeping'; @deva[गतम्] 'going'.",
            "standard": "When @deva[भाव] (action) is expressed in neuter gender, @deva[क्त] applies. These form neuter abstract nouns. Examples: @deva[हसितम्] 'laugh, laughter'; @deva[जल्पितम्] 'speech'; @deva[शायितम्] 'sleeping'; @deva[गतम्] 'going'; @deva[सहितम्] 'association'.",
            "advanced": "The @deva[क्त] affix here functions as @deva[भाववाचक] (action-denoting), not @deva[भूतकालवाचक] (past-participle). The neuter gender condition distinguishes this from participial @deva[क्त]. These @deva[क्त]-derived neuter nouns denote the abstract action itself."
        }
    },
    "33115": {
        "en": {
            "simple": "The affix @deva[ल्युट्] is added when naming an action in neuter gender. Examples: @deva[हसनम्] 'laughter'; @deva[शोभनम्] 'beauty'; @deva[जल्पनम्] 'speech'; @deva[शयनम्] 'sleep'; @deva[आसनम्] 'seat'.",
            "standard": "When @deva[भाव] (action) is expressed as a name (@deva[नाम]) in neuter gender, @deva[ल्युट्] applies. Examples: @deva[हसनं छात्रस्य] 'the laughter of the student'; @deva[शोभनम्] 'beauty'; @deva[जल्पनम्] 'speech'; @deva[शयनम्] 'sleep'; @deva[आसनम्] 'seat'. This @deva[सूत्र] is separate from @ref[3.3.114] so @deva[ल्युट्] (not @deva[क्त]) continues into subsequent rules.",
            "advanced": "The separation from @ref[3.3.114] ensures @deva[ल्युट्]'s @deva[अनुवृत्ति] continues into @ref[3.3.116]-@ref[3.3.117], while @deva[क्त] does not. Both @deva[क्त] and @deva[ल्युट्] create neuter @deva[भाववाचक] nouns, but @deva[ल्युट्]'s scope extends to instrumental/locative senses."
        }
    },
    "33116": {
        "en": {
            "simple": "The affix @deva[ल्युट्] applies when the accusative @deva[उपपद] denotes something whose contact gives bodily pleasure to the agent. This creates a @deva[नित्य] (obligatory) compound. Examples: @deva[पयःपानं सुखम्] 'the pleasure of drinking milk'; @deva[ओदनभोजनं सुखम्] 'the pleasure of eating rice'.",
            "standard": "@deva[ल्युट्] applies with accusative @deva[उपपद] when contact with that object produces @deva[शारीरसुखस्पर्श] (bodily pleasant sensation) to the @deva[कर्तृ]. The compound is @deva[नित्य] (invariable, cannot be analyzed). Examples: @deva[पयःपानं सुखम्] 'milk-drinking pleasure'; @deva[ओदनभोजनं सुखम्] 'rice-eating pleasure'. Counter-examples disallowing compound: ablative @deva[उपपद] (@deva[तूलिकायाः उत्थानम्]); no contact (@deva[अग्निकुण्डस्य उपासनम्]); non-agent (@deva[गुरोः स्नापनम्]); mental-only pleasure (@deva[पुत्रस्य परिष्वञ्जनम्]); painful (@deva[कण्टकानां मर्दनम्]).",
            "advanced": "Five conditions required: (1) accusative @deva[उपपद], (2) contact involved, (3) agent experiences, (4) bodily (not merely mental) sensation, (5) pleasant (not painful). Failure of any blocks the @deva[नित्य-समास]. See @ref[2.2.19] for compound obligatoriness."
        }
    },
    "33117": {
        "en": {
            "simple": "The affix @deva[ल्युट्] is added when the word relates to the verb as instrument or location. Examples: @deva[इध्मप्रव्रश्चनः] 'wood-cutting axe'; @deva[गोदोहनी] 'milk-pail' (vessel into which milk is milked); @deva[सक्तुधानी] 'flour-container'.",
            "standard": "When the word formed relates as @deva[करण] (instrument) or @deva[अधिकरण] (location) to the verb, @deva[ल्युट्] applies. This expresses instrumental (3rd case) and locative (7th case) relations. Examples: @deva[इध्मप्रव्रश्चनः] 'an axe' (instrument for cutting firewood); @deva[गोदोहनी] 'milk-pail' (location/receptacle for milking); @deva[सक्तुधानी] 'flour-holder'.",
            "advanced": "The @deva[करणाधिकरणयोश्च] specification adds instrumental and locative senses to @deva[ल्युट्]'s domain. Combined with @ref[3.3.113]'s @deva[बहुलम्], @deva[ल्युट्] becomes highly productive for naming tools, containers, and places of action."
        }
    },
    "33118": {
        "en": {
            "simple": "The affix @deva[घ] generally comes for instrument or location sense after a root when forming masculine appellatives. Examples: @deva[दन्तच्छदः] 'lip' (tooth-coverer); @deva[उरच्छदः] 'breastplate'; @deva[आकरः] 'mine' (where they work); @deva[आलयः] 'house'.",
            "standard": "@deva[घ] applies @deva[प्रायेण] (generally, not universally) for @deva[करण]/अधिकरण sense when forming masculine @deva[संज्ञा] (appellatives). For instruments: @deva[दन्तच्छदः] 'lip' (tooth-coverer; @deva[छादि] + @deva[घ] → @deva[छद] by @ref[6.4.96]); @deva[उरच्छदः] 'breastplate'; @deva[घटः] 'pot'. For locations: @deva[आकरः] 'mine' (where men work); @deva[आलयः] 'house' (where they settle). Non-masculine: @deva[प्रसाधनम्] 'comb' (neuter, uses @deva[ल्युट्]). Non-appellative: @deva[प्रहरणो दण्डः] 'the beating stick'.",
            "advanced": "The @deva[घ्]-@deva[इत्] serves @ref[6.4.96]: causative @deva[छादि] with @deva[घ] shortens @deva[आ]. The @deva[प्रायेण] indicates exceptions exist. The @deva[पुंलिङ्ग] and @deva[संज्ञा] conditions distinguish this from @deva[ल्युट्] (which creates neuter nouns)."
        }
    },
    "33119": {
        "en": {
            "simple": "The words @deva[गोचर] 'pasture', @deva[संचर] 'passage', @deva[वह] 'vehicle', @deva[व्रज] 'cow-pen', @deva[व्यज] 'fan', @deva[आपण] 'market', @deva[निगम] 'Veda/market' are irregularly formed with @deva[घ].",
            "standard": "These words are irregular @deva[घ]-formations (exception to @ref[3.3.121] which prescribes @deva[घञ्] after consonant-final roots): @deva[गोचरः] 'pasturage' (where cows graze); @deva[संचरः] 'passage' (through which they move); @deva[वहः] 'vehicle' (by which carried); @deva[व्रजः] 'cow-pen' (where they go); @deva[व्यजः] 'fan' (irregularly not @deva[वीज] by @ref[2.4.56]); @deva[आपणः] 'market' (where they trade); @deva[निगमः] 'Veda, market' (into which they enter). The @deva[च] includes others: @deva[कषः], @deva[निकषः] 'touchstone'.",
            "advanced": "These @deva[निपातनs] block @deva[घञ्] expected by @ref[3.3.121]. The @deva[व्यज] irregularity: @deva[वि] + @deva[अज्] doesn't undergo @deva[अज्] → @deva[वी] substitution (@ref[2.4.56]). The @deva[च] extends the list beyond enumerated items."
        }
    },
    "33120": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[तॄ] 'to cross' and @deva[स्तॄ] 'to spread' with @deva[अव], when forming appellatives in instrument/location sense. This supersedes @deva[घ]. Examples: @deva[अवतारः] 'descent, incarnation'; @deva[अवस्तारः] 'screen around a tent'.",
            "standard": "After @deva[अव] + @deva[तॄ] or @deva[अव] + @deva[स्तॄ] meaning @deva[संज्ञा] in @deva[करण]/अधिकरण sense, @deva[घञ्] applies, superseding @deva[घ]. The @deva[ञ्] causes @deva[वृद्धि] of @deva[ॠ] (@ref[7.2.115]) and regulates accent (@ref[6.1.195], @ref[6.1.197]). Examples: @deva[अवतारः] 'descent, divine incarnation'; @deva[अवस्तारः] 'a screen/curtain around a tent'. Non-appellative use (@deva[अवतारो नद्याः] 'river's descent') is allowed since @deva[प्राय] continues from @ref[3.3.118].",
            "advanced": "The @deva[घ्]-@deva[इत्] portion triggers palatal → guttural changes in subsequent rules. The @deva[प्राय] @deva[अनुवृत्ति] from @ref[3.3.118] allows non-appellative uses of @deva[अवतार] etc., providing flexibility beyond the strict @deva[संज्ञा] condition."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.111-3.3.120")
