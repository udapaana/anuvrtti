# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33041": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[चि] 'to collect' with @deva[च] → @deva[क] substitution, in four senses: dwelling, funeral fire, body, collection. Examples: @deva[निकायः] 'dwelling'; @deva[आकाय] 'funeral fire'; @deva[कायः] 'body'.",
            "standard": "After @deva[चि] 'to collect', @deva[घञ्] applies with initial @deva[च] → @deva[क] substitution when the meaning is: (1) @deva[निवास] 'dwelling', (2) @deva[चिताग्नि] 'funeral pyre fire', (3) @deva[शरीर] 'body', (4) @deva[उपसमाधान] 'heap/collection'. Examples: @deva[काशीनिकायः] 'Kāśī-dwelling'; @deva[आकायम् अग्निं चिन्वीत] 'let him arrange the funeral fire'; @deva[कायः] 'body'; @deva[गोमयनिकायः] 'heap of cow-dung'.",
            "advanced": "The substitution @deva[च] → @deva[क] is irregular (@deva[आदेश]). The four semantic conditions (@deva[निवास], @deva[चिताग्नि], @deva[शरीर], @deva[उपसमाधान]) restrict @deva[घञ्] with this substitution. Without these meanings: @deva[चयः] 'gathering'. Note: @deva[काष्ठनिचयः] 'heap of wood' doesn't use @deva[घञ्] because it expresses multiplicity (@deva[बाहुल्य]), not aggregation (@deva[उपसमाधान])."
        }
    },
    "33042": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[चि] with @deva[च] → @deva[क] when meaning 'assembly' (of qualified beings), not a mere crowd. Examples: @deva[भिक्षुकनिकायः] 'assembly of monks'; @deva[ब्राह्मणनिकायः] 'assembly of Brāhmaṇas'. For mere herds: @deva[सूकरनिचयः] 'herd of hogs'.",
            "standard": "After @deva[चि] with @deva[च] → @deva[क], @deva[घञ्] applies when meaning @deva[सङ्घ] 'organized assembly' of living beings sharing common qualifications—not a mere confused crowd (@deva[अश्रेणीगण]). Examples: @deva[भिक्षुकनिकायः] 'assembly of mendicants'; @deva[ब्राह्मणनिकायः] 'assembly of Brāhmaṇas'; @deva[वैयाकरणनिकायः] 'assembly of grammarians'. Counter-examples: @deva[सूकरनिचयः] 'herd of hogs' (mere collection); @deva[प्रमाणसमुच्चयः] 'collection of proofs' (not living beings).",
            "advanced": "The term @deva[सङ्घ] has two senses: organized assembly with common qualifications, and mere confused gathering. This @deva[सूत्र] uses @deva[पर्युदास] (exclusion) to specify the former. The restriction to @deva[प्राणिन्] (living beings) excludes inanimate collections. The @deva[श्रेणीगण] refers to guilds or organized groups with shared characteristics."
        }
    },
    "33043": {
        "en": {
            "simple": "The affix @deva[णच्] comes after a root to express reciprocal action, and the resulting word is feminine. Example: @deva[व्यावक्रोशी] 'mutual abuse' (formed via @deva[णच्] + @deva[अञ्] + @deva[ङीष्]).",
            "standard": "The affix @deva[णच्] expresses @deva[व्यतिहार] (reciprocity/interchange of action) and the word is feminine. Derivation: @deva[वि] + @deva[अव] + @deva[क्रुश्] + @deva[णच्] + @deva[अञ्] (@ref[5.4.14]) + @deva[ङीष्] → @deva[व्यावक्रोशी] 'mutual abuse'. Similarly @deva[व्यावहासी] 'mutual laughter', @deva[व्यावलेखी] 'mutual writing'. The @deva[च्] in @deva[णच्] is distinguishing (@deva[अनुबन्ध]).",
            "advanced": "This @deva[सूत्र] is placed separately from the @deva[क्तिन्]-class (@ref[3.3.94]) to avoid being blocked by affixes that block @deva[क्तिन्]. Thus @deva[व्यावचोरी], @deva[व्यावचर्ची] are valid even though @deva[चुर्] (a @deva[ण्यन्त] root) would take @deva[युच्] (@ref[3.3.107]) and @deva[चर्च्] would take @deva[अङ्] (@ref[3.3.104]). However, @deva[ईक्ष्] and @deva[ईह्] still take @deva[अ] (@ref[3.3.102-103]): hence @deva[व्यतीक्षा], @deva[व्यतीहा] (not *@deva[व्यतीक्षी]). These variations exemplify @deva[बहुलम्] (@ref[3.3.113])."
        }
    },
    "33044": {
        "en": {
            "simple": "The affix @deva[इनुण्] comes after a root denoting condition when expressing 'co-extensiveness' (complete relation between action and quality). Examples: @deva[सांराविणम्] 'general uproar'; @deva[सांकुटिनम्] 'general confusion'.",
            "standard": "For @deva[भाव] (condition/state) with @deva[अभिविधि] (co-extensiveness, complete comprehension), @deva[इनुण्] is used. The stem takes @deva[अण्] (@ref[5.4.15-16]). Examples: @deva[सम्] + @deva[रु] + @deva[इनुण्] + @deva[अण्] → @deva[सांराविणम्] 'tumultuous uproar'; @deva[सांकुटिनम्] 'general confusion'; @deva[सांस्राविणम्] 'general flow'. Without co-extensiveness: @deva[सङ्कोटः], @deva[संरावः], @deva[सन्द्रावः].",
            "advanced": "The word @deva[भाव] is repeated (though continuing from @ref[3.3.18]) to block @deva[वाऽसरूप] (@ref[3.1.94])—ensuring @deva[घञ्] never applies here. Patañjali notes the repetition also prohibits @deva[क्त] etc. in neuter @deva[भाव] sense with co-extensiveness. The @deva[इनुण्] stem is incomplete until @deva[अण्] is added. The affix @deva[ल्युट्] is not blocked: hence @deva[सङ्कुटनम्] is valid (@ref[3.3.113])."
        }
    },
    "33045": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[ग्रह्] 'to seize' with @deva[अव] or @deva[नि] when expressing malediction/curse. Examples: @deva[अवग्राहो हन्त ते] 'cursed be thou!'; @deva[निग्राहस्ते भूयात्] 'may you be cursed!'.",
            "standard": "With @deva[अव] + @deva[ग्रह्] or @deva[नि] + @deva[ग्रह्] meaning @deva[आक्रोश] (cursing/malediction), @deva[घञ्] applies. Examples: @deva[अवग्राहो हन्त ते वृषलभूयात्] 'accursed be thou, O sinner!'; @deva[निग्राहस्ते भूयात्] 'may curse befall you!'. Without curse meaning: @deva[अवग्रहः पदस्य] 'separation of a word'; @deva[निग्रहश्चोरस्य] 'restraint of a thief'.",
            "advanced": "The @deva[अनुवृत्ति] of @deva[घञ्] comes from @ref[3.3.16], not from the immediately preceding @deva[इनुण्] rule, because @deva[घञ्] can logically apply here. The semantic condition @deva[आक्रोशे] 'when meaning curse' distinguishes these forms from the regular @deva[अवग्रह] 'pause/separation' and @deva[निग्रह] 'restraint/control'."
        }
    },
    "33046": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[ग्रह्] 'to seize' with @deva[प्र] when expressing desire to acquire. Example: @deva[पात्रप्रग्राहेण चरति भिक्षुः] 'the beggar walks carrying a vessel (to receive alms)'.",
            "standard": "With @deva[प्र] + @deva[ग्रह्] meaning @deva[लिप्सा] (desire to acquire/receive), @deva[घञ्] applies. Examples: @deva[पात्रप्रग्राहेण चरति भिक्षुः पिण्डार्थी] 'the mendicant walks with vessel in hand, seeking alms'; @deva[स्रुवप्रग्राहेण चरति द्विजो दक्षिणार्थी] 'the Brāhmaṇa walks with ladle, seeking his fee'. Without acquisition sense: @deva[प्रग्रहो देवदत्तस्य] 'Devadatta's grip'.",
            "advanced": "The condition @deva[लिप्सायाम्] 'when expressing desire to obtain' restricts @deva[घञ्] to contexts of begging or seeking donations. The @deva[प्रग्राह] form with @deva[घञ्] specifically denotes holding a receptacle for receiving something desired. Without this semantic condition, the regular @deva[प्रग्रह] applies."
        }
    },
    "33047": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[ग्रह्] 'to seize' with @deva[परि] when relating to sacrifice. Examples: @deva[उत्तरपरिग्राहः] 'northern fencing of altar'; @deva[अधरपरिग्राहः] 'southern fencing'. For non-sacrifice: @deva[परिग्रहः].",
            "standard": "With @deva[परि] + @deva[ग्रह्] in sacrificial contexts (@deva[अध्वरे]), @deva[घञ्] applies. Examples: @deva[उत्तरपरिग्राहः] 'northern enclosure of the sacrificial altar'; @deva[अधरपरिग्राहः] 'southern enclosure of the altar'. Without sacrificial reference: @deva[परिग्रहो देवदत्तस्य] 'Devadatta's enclosure/possession'.",
            "advanced": "The semantic restriction @deva[अध्वरे] 'in sacrifice' confines @deva[घञ्] to ritual terminology. The @deva[परिग्राह] specifically denotes the fencing or boundary of the sacrificial space (@deva[वेदी]). Outside ritual contexts, the regular formation @deva[परिग्रह] 'possession, enclosure, household' applies."
        }
    },
    "33048": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[वृ] 'to choose/cover' with @deva[नि] when meaning grain. Example: @deva[नीवाराः] 'wild rice' (rice growing without cultivation). For other meanings: @deva[निवरा कन्या] 'virgin girl'.",
            "standard": "With @deva[नि] + @deva[वृ] (including both @deva[वृङ्] and @deva[वृञ्]) meaning @deva[धान्य] (grain), @deva[घञ्] applies, blocking @deva[अप्]. Thus @deva[नीवाराः] 'wild rice, grain growing without cultivation'. Without grain meaning: @deva[निवरा कन्या] 'a virgin girl' (one who chooses/is chosen).",
            "advanced": "The root @deva[वृ] encompasses both @deva[वृङ्] 'to choose' and @deva[वृञ्] 'to cover'. The @deva[घञ्] blocks the otherwise applicable @deva[अप्] (@ref[3.3.57]). The derivation involves vowel lengthening: @deva[नि] + @deva[वृ] + @deva[घञ्] → @deva[नीवार] (with @deva[वृद्धि] @deva[इ] → @deva[ई] before @deva[वार]). The semantic restriction to grain creates the distinction from other @deva[निवर] formations."
        }
    },
    "33049": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[श्रि] 'to resort', @deva[यु] 'to join', @deva[पू] 'to purify', @deva[द्रु] 'to run' with @deva[उत्]. Examples: @deva[उच्छ्रायः] 'rising (of planet)'; @deva[उद्यावः] 'mixing'; @deva[उत्पावः] 'purifying ghee'; @deva[उद्द्रावः] 'flight'.",
            "standard": "With @deva[उत्], the roots @deva[श्रि], @deva[यु], @deva[पू], @deva[द्रु] take @deva[घञ्], blocking @deva[अच्] (@ref[3.3.56]). Examples: @deva[उच्छ्रायः] 'rising of a planet'; @deva[उद्यावः] 'mixing'; @deva[उत्पावः] 'purifying ghee'; @deva[उद्द्रावः] 'flight'. The form @deva[समुच्छ्रयः] in @deva[पतनान्ताः समुच्छ्रयाः] 'elevations end in fall' uses the option from the next @deva[सूत्र] applied retrospectively.",
            "advanced": "The existence of @deva[समुच्छ्रयः] alongside @deva[उच्छ्रायः] demonstrates @deva[सिंहावलोकनन्याय] 'the maxim of the lion's backward glance'—the @deva[विभाषा] 'option' of @ref[3.3.50] extends retrospectively to this @deva[सूत्र]. This allows optional @deva[घञ्] even with additional prefixes beyond @deva[उत्]."
        }
    },
    "33050": {
        "en": {
            "simple": "The affix @deva[घञ्] is optionally used after @deva[रू] 'to roar' and @deva[प्लु] 'to float' with @deva[आ]. Examples: @deva[आरावः] or @deva[आरवः] 'noise'; @deva[आप्लावः] or @deva[आप्लवः] 'bathing'.",
            "standard": "With @deva[आ] + @deva[रू] 'to roar' and @deva[आ] + @deva[प्लु] 'to float', @deva[घञ्] is optional (@deva[विभाषा]). Thus: @deva[आरावः] (with @deva[घञ्]) or @deva[आरवः] (without) 'noise'; @deva[आप्लावः] or @deva[आप्लवः] 'bathing, flooding'. Both forms are valid.",
            "advanced": "The @deva[विभाषा] creates optional application of @deva[घञ्]. As noted in @ref[3.3.49], this option can apply retrospectively (@deva[सिंहावलोकनन्याय]) to the previous @deva[सूत्र]'s roots as well. The paired forms (@deva[आराव]/आरव, @deva[आप्लाव]/आप्लव) demonstrate free variation in these contexts."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.41-3.3.50")
