#!/usr/bin/env python3
"""Rewrite commentary for 6.1.136-150 (suṭ augment rules for specific formations)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61136": {
        "en": {
            "simple": "The @deva[सुट्] augment (@deva[स्]) is added before @deva[क्] even when the @deva[अट्] augment or a reduplicated syllable comes between the preverb and the verb. So @deva[सम् + अकरोत्] gets @deva[सुट्]: @deva[समस्करोत्].",
            "standard": "This sūtra clarifies that @deva[सुट्]-augmentation applies even when @deva[अट्] (past tense augment, @ref[6.4.71]) or the @deva[अभ्यास] (reduplicate) intervenes between the @deva[उपसर्ग] and @deva[कृ]. Thus @deva[सम् + अ + करोत्] → @deva[सम् + अ + स् + करोत्] → @deva[समस्करोत्]. The @deva[सुट्] appears before @deva[क्] regardless of intervening elements.",
            "advanced": "The @deva[अटि अभ्यासे च] phrase addresses potential doubt: one might think @deva[सुट्] requires immediate contact between @deva[उपसर्ग] and @deva[क्]. This sūtra confirms @deva[सुट्] applies even with intervening @deva[अट्] (imperfect/aorist augment) or @deva[अभ्यास] (perfect/intensive reduplication). The @deva[व्यवधान] (intervention) does not block @deva[सुट्]. Examples: @deva[समस्करोत्] (imperfect), @deva[समस्कुर्वन्] (present participle with preverb)."
        }
    },
    "61137": {
        "en": {
            "simple": "The @deva[सुट्] augment is added when @deva[सम्], @deva[परि], or @deva[उप] precede the verb @deva[कृ] and the meaning is 'to adorn/ornament'. So 'to adorn' with @deva[सम् + कृ] = @deva[संस्कृ] (as in @deva[संस्कर्ता] 'one who adorns').",
            "standard": "This sūtra conditions @deva[सुट्] on semantic grounds: when @deva[सम्], @deva[परि], or @deva[उप] + @deva[कृ] means 'to ornament/adorn' (@deva[अलङ्कारार्थ]), @deva[सुट्] is added. Examples: @deva[संस्कर्ता] ('adorner'), @deva[संस्कृतम्] ('adorned/refined'), @deva[परिष्कारः] ('ornamentation'). Without the 'adornment' sense, @deva[सुट्] may not apply.",
            "advanced": "The semantic restriction (@deva[अलङ्कारे]) creates meaning-dependent morphology. The same verb-preverb combination may or may not take @deva[सुट्] based on intended meaning. @deva[संस्कृत] ('refined/perfected') and @deva[संस्कार] ('refinement/sacrament') both derive from this adorning sense. The @deva[सम्], @deva[परि], @deva[उप] preverbs each contribute nuances: @deva[सम्] (complete), @deva[परि] (around), @deva[उप] (near). This explains @deva[संस्कृत] as 'completely refined'."
        }
    },
    "61138": {
        "en": {
            "simple": "The @deva[सुट्] augment is also added when @deva[सम्], @deva[परि], or @deva[उप] + @deva[कृ] means 'to combine/bring together'. So @deva[सम् + कृ] = @deva[संस्कृ] meaning 'to combine' (as in @deva[समवाय] 'assemblage').",
            "standard": "This sūtra extends @deva[सुट्] to the 'combining' sense (@deva[समवाये]). When @deva[सम्/परि/उप] + @deva[कृ] means 'to assemble, collect, combine', @deva[सुट्] applies. The term @deva[समवाय] indicates bringing together disparate elements. Example: @deva[संस्कुर्वन्ति] 'they combine/gather together'.",
            "advanced": "The @deva[समवाय] sense (combination, assemblage) is semantically related to but distinct from @deva[अलङ्कार] (adornment). Both involve 'bringing together' but with different outcomes—aesthetic refinement vs. physical collection. The @deva[सुट्] augment in both contexts marks the preverb-verb combination as a lexicalized unit with specialized meaning, distinguishing it from compositional @deva[सम् + कृ] without @deva[सुट्]."
        }
    },
    "61139": {
        "en": {
            "simple": "The @deva[सुट्] augment is added when @deva[उप + कृ] means 'to take pains for', 'to prepare', or 'to supply what is missing in discourse'. So @deva[उपस्करः] means 'effort/preparation' or 'supplying ellipsis'.",
            "standard": "This sūtra specifies @deva[सुट्] for @deva[उप + कृ] in three senses: (1) @deva[परिश्रम] 'taking pains', (2) @deva[सम्भार] 'preparation/provision', (3) @deva[वाक्यसमाप्ति] 'completing a sentence by supplying ellipsis'. Examples: @deva[उपस्कारः] 'effort', @deva[उपस्कृतम्] 'prepared/furnished'.",
            "advanced": "The three meanings—@deva[परिश्रम] (exertion), @deva[सम्भार] (preparation), @deva[वाक्यसमाप्ति] (discourse completion)—represent specialized uses of @deva[उप + कृ]. The @deva[वाक्यसमाप्ति] sense is particularly interesting: it refers to the grammatical/rhetorical act of supplying understood elements in elliptical expressions. The @deva[सुट्] marks these as technical vocabulary items distinct from basic @deva[उपकृ] 'to benefit'."
        }
    },
    "61140": {
        "en": {
            "simple": "The @deva[सुट्] augment is added when @deva[उप + कृ] means 'to cut' or 'to split'. So @deva[उपस्कारम् लुनन्ति] means 'they cut the @deva[उपस्कार]' (a part of something being split).",
            "standard": "This sūtra provides @deva[सुट्] for @deva[उप + कृ] in the sense of 'cutting' or 'splitting' (@deva[पाटन]). The @deva[उपस्कार] here refers to something being cut off or separated. Example: @deva[उपस्कारं मद्रका लुनन्ति] 'the Madrakas cut the @deva[उपस्कार]'.",
            "advanced": "The 'cutting' sense represents a semantic extension where @deva[उप] (near/subsidiary) + @deva[कृ] (make) yields 'to make a separation' or 'cut off'. This is one of several specialized meanings for @deva[उप + कृ] that receive @deva[सुट्]. The @deva[मद्रक] reference (people of the Madra region) suggests this usage was associated with regional or technical vocabulary."
        }
    },
    "61141": {
        "en": {
            "simple": "The @deva[सुट्] augment is added when @deva[उप + कृ] or @deva[प्रति + कृ] means 'to cause suffering/affliction'. So @deva[उपस्कीर्णम्] or @deva[प्रतिस्कीर्णम्] means 'afflicted/tormented'.",
            "standard": "This sūtra extends @deva[सुट्] to @deva[उप/प्रति + कृ] when meaning 'to afflict' or 'cause suffering' (@deva[पीडा]). The forms @deva[उपस्कीर्णम्] and @deva[प्रतिस्कीर्णम्] are past participles meaning 'one who has been afflicted/tormented'. This adds @deva[प्रति] to the eligible preverbs for this semantic domain.",
            "advanced": "The @deva[पीडार्थ] (affliction sense) creates forms like @deva[उपस्कीर्ण/प्रतिस्कीर्ण]. The @deva[कीर्ण] portion shows the past passive participle of @deva[कॄ] 'to scatter' (distinct from @deva[कृ] 'to make'). However, the @deva[सुट्] context suggests @deva[कृ]-based derivation. The semantic shift to 'affliction' may involve the notion of 'being worked upon' or 'undone' by the action."
        }
    },
    "61142": {
        "en": {
            "simple": "The @deva[सुट्] augment is added when @deva[अप + कृ] means 'the scraping of earth by animals or birds'. So @deva[अपस्किरते] describes a horse or bird scratching the ground.",
            "standard": "This sūtra provides @deva[सुट्] for @deva[अप + कृ] specifically when referring to the scratching or scraping of earth by four-footed animals or birds (@deva[चतुष्पाद्] or @deva[पक्षिन्]). Example: @deva[अपस्किरते अश्वः] 'the horse scrapes (the ground)'; @deva[अपस्किरति पक्षी] 'the bird scratches'.",
            "advanced": "This highly specific semantic condition—earth-scraping by animals/birds—shows how @deva[सुट्] rules can target narrow lexical domains. The @deva[अप] preverb (away/off) + @deva[कृ] (make/do) yields 'to scrape away'. The restriction to @deva[भूलेखन] (earth-marking) by @deva[चतुष्पाद्/पक्षिन्] suggests this was a recognized technical term, perhaps in veterinary or zoological contexts."
        }
    },
    "61143": {
        "en": {
            "simple": "The word @deva[कुस्तुम्बुरु] (a type of herb, coriander) is irregularly formed with the @deva[सुट्] augment. This is a listed exception, not derived by regular rules.",
            "standard": "This sūtra lists @deva[कुस्तुम्बुरु] as a @deva[निपातन] (irregular formation) with @deva[सुट्]. The word refers to @deva[धान्यक] (coriander). The @deva[सुट्] in this word is exceptional—it doesn't follow the semantic conditions of previous sūtras. The form is simply listed as containing @deva[सुट्].",
            "advanced": "The @deva[निपातन] status indicates that @deva[कुस्तुम्बुरु] cannot be derived through productive rules; it must be memorized. The word likely entered Sanskrit from a regional or non-Indo-Aryan source, with the @deva[स्] interpreted as @deva[सुट्] by Pāṇinian analysis. The identification with @deva[धान्यक] (coriander, Coriandrum sativum) provides the botanical reference."
        }
    },
    "61144": {
        "en": {
            "simple": "The word @deva[अपस्पराः] (meaning 'uninterrupted action') is formed with the @deva[सुट्] augment. This describes continuous, unbroken activity.",
            "standard": "This sūtra provides @deva[सुट्] for the formation @deva[अपस्पराः] when meaning 'uninterrupted' or 'continuous' action (@deva[अवशम्]). The @deva[कारिका] (verse) quoted gives usage guidelines. The word describes activity that proceeds without cessation or break.",
            "advanced": "The @deva[अवशम्] gloss suggests 'without ceasing/pause'. The @deva[अप + स्पृ] base with @deva[सुट्] yields a form meaning 'that which touches/reaches continuously'. The @deva[कारिका] (@deva[लुम्पेदवश्यमः कृत्ये...]) provides metrical instruction on usage. This is another lexically specific @deva[सुट्] rule for a particular semantic domain."
        }
    },
    "61145": {
        "en": {
            "simple": "The word @deva[गोष्पद] ('cow's footprint' or 'small puddle') is formed with @deva[सुट्]. It means either a place where cows walk (or don't walk), or a measure of quantity.",
            "standard": "This sūtra provides @deva[सुट्] for @deva[गोष्पद] in two senses: (1) a locality visited or not visited by cows (@deva[गावः पद्यन्ते/न पद्यन्ते]), (2) a measure of quantity (a cow's footprint as a unit). Example: @deva[गोष्पदो देशः] 'a place where cows tread'; @deva[गोष्पदं जलम्] 'water (filling) a cow's footprint = tiny amount'.",
            "advanced": "The @deva[गो + पद] compound with @deva[सुट्] yields @deva[गोष्पद]. The dual meaning—spatial (cow-trodden area) and quantitative (small measure)—shows semantic extension from literal footprint to metonymic quantity. The form @deva[गोष्पद] is used idiomatically: @deva[गोष्पदे समुद्रः] 'an ocean in a cow's footprint' = something vast appearing tiny. The @deva[सुट्] here may be etymologically motivated rather than semantically conditioned."
        }
    },
    "61146": {
        "en": {
            "simple": "The word @deva[आस्पद] ('place, position, abode') is formed with @deva[सुट्]. It means a firm place, position, or rank.",
            "standard": "This sūtra provides @deva[सुट्] for @deva[आस्पद] meaning 'place' or 'position' (@deva[प्रतिष्ठा]). The word @deva[आ + पद] with @deva[सुट्] → @deva[आस्पद]. Examples: @deva[आस्पदम्] 'a place/abode'; @deva[यशस्वी आस्पदम्] 'position of glory'. The @deva[प्रतिष्ठा] gloss indicates 'established position, rank, dignity'.",
            "advanced": "The @deva[आस्पद] formation shows @deva[आ] (prefix meaning 'towards/up to') + @deva[सुट्] + @deva[पद] (foot/step). The resultant meaning 'place where one sets foot' → 'position, abode, basis' is compositionally transparent. The @deva[सुट्] is obligatory in this formation; @deva[*आपद] without @deva[सुट्] has different meaning ('misfortune'). This distinguishes @deva[आस्पद] (position) from @deva[आपद्] (calamity)."
        }
    },
    "61147": {
        "en": {
            "simple": "The word @deva[आश्चर्य] ('wonder, marvel') is formed with @deva[सुट्]. It means something unusual or extraordinary.",
            "standard": "This sūtra provides @deva[सुट्] for @deva[आश्चर्य] meaning 'unusual' or 'wonderful' (@deva[अद्भुत]). The derivation: @deva[आ + चर्] + @deva[यत्] with @deva[सुट्] → @deva[आश्चर्य]. The word describes something that causes wonder due to its extraordinary nature.",
            "advanced": "The @deva[आ + चर्] base means 'to move towards/approach'. With @deva[यत्] (kṛt affix) and @deva[सुट्], the derived @deva[आश्चर्य] means 'that which is approached with wonder' or 'that towards which one moves in amazement'. The @deva[सुट्] is integral to the standard form; @deva[*आचर्य] without @deva[सुट्] would mean 'to be approached/practiced' (different sense). The @deva[अद्भुत] gloss confirms the 'wonderful' meaning."
        }
    },
    "61148": {
        "en": {
            "simple": "The word @deva[अवस्कर] ('excrement, refuse') is formed with @deva[सुट्]. It refers to ejected matter or waste.",
            "standard": "This sūtra provides @deva[सुट्] for @deva[अवस्कर] meaning 'excrement' or 'refuse' (@deva[वचस्क] = @deva[कुत्सित] 'despised'). The derivation: @deva[अव + कृ] + @deva[अप्] with @deva[सुट्] → @deva[अवस्कर]. The word applies to ejected or waste matter.",
            "advanced": "The @deva[अव] prefix (down, away) + @deva[कृ] (make) + @deva[सुट्] + @deva[अप्] (kṛt affix, @ref[3.3.57]) yields @deva[अवस्कर]. The meaning 'that which is made/cast away' → 'excrement, refuse'. The @deva[वचस्क] gloss (having bad appearance/lustre) indicates the pejorative sense. This is specialized vocabulary where @deva[सुट्] distinguishes the taboo meaning from neutral @deva[अवकार] (scattering)."
        }
    },
    "61149": {
        "en": {
            "simple": "The word @deva[अपस्कर] ('part of a chariot') is formed with @deva[सुट्]. It refers to a component or accessory of a chariot.",
            "standard": "This sūtra provides @deva[सुट्] for @deva[अपस्कर] meaning 'a part of a chariot' (@deva[रथाङ्ग]). The derivation: @deva[अप + कृ] + @deva[अप्] with @deva[सुट्] → @deva[अपस्कर]. The word refers to chariot accessories, fittings, or components.",
            "advanced": "The @deva[अप + कृ] base with @deva[सुट्] and @deva[अप्] affix (@ref[3.3.57]) yields @deva[अपस्कर]. The meaning 'that which is made separately' → 'accessory part' fits chariot components that are attached to the main structure. Compare @deva[उपस्कर] (furniture, household articles). The @deva[रथाङ्ग] gloss specifies the chariot-part meaning, distinguishing this from other @deva[अप + कृ] derivatives."
        }
    },
    "61150": {
        "en": {
            "simple": "The word @deva[विष्किर] (a type of bird that scatters food while eating) is optionally formed with @deva[सुट्]. Without @deva[सुट्], the form is @deva[विकिर].",
            "standard": "This sūtra provides optional @deva[सुट्] for @deva[विष्किर/विकिर] denoting a type of bird. The @deva[विभाषा] indicates both forms are valid: @deva[विष्किर] (with @deva[सुट्]) and @deva[विकिर] (without). These birds are characterized by scattering their food while eating.",
            "advanced": "The @deva[वि + कॄ] (scatter) base describes birds that scatter food/grain while feeding. The @deva[विभाषा] allows @deva[विष्किर] (with @deva[सुट्]) alongside @deva[विकिर] (without). The verse (@deva[सर्वे शकुनयो भक्ष्या विष्किराः...]) indicates these birds are edible. This optionality in a technical term (ornithological vocabulary) shows lexical variation that Pāṇini accommodates rather than prescribes."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.136-6.1.150)")
