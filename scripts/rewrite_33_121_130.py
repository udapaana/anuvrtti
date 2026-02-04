# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33121": {
        "en": {
            "simple": "After a verb ending in a consonant, the affix @deva[घञ्] is used (instead of @deva[घ]) when forming masculine nouns that express instrument or location. Examples: @deva[लेखः] 'a writing' (that in which something is inscribed), @deva[वेदः] 'the Veda' (that by which all is known), @deva[वेषः] 'dress' (that which surrounds).",
            "standard": "This sūtra specifies that @deva[घञ्] (not @deva[घ]) follows consonant-ending roots when the derived masculine noun denotes instrument or location, continuing from @ref[3.3.118]. The palatal of the root changes to guttural. Thus @deva[लिख्] + @deva[घञ्] → @deva[लेखः] 'writing'; @deva[विद्] + @deva[घञ्] → @deva[वेदः] 'Veda'; @deva[विष्] + @deva[घञ्] → @deva[वेषः] 'dress'.",
            "advanced": "The phrase @deva[संज्ञायां भृतृस्थानयोरिति] from @ref[3.3.118] extends here. @deva[घञ्] is mandated over @deva[घ] specifically after @deva[हलन्त]-roots. The @deva[घ्] indicatory causes palatals to become gutturals (@deva[लिख्] → @deva[लेख्]). Examples: @deva[लेखः] (karmaṇi/adhikaraṇa), @deva[वेदः] (karaṇa—that by which knowledge occurs), @deva[वेषः] (karaṇa—that by which one is surrounded)."
        }
    },
    "33122": {
        "en": {
            "simple": "The words @deva[अध्याय] (chapter), @deva[न्याय] (logic/justice), @deva[उद्याव], @deva[संहार] (collection), @deva[आधार] (support), and @deva[आवय] are formed irregularly with @deva[घञ्] even though their roots end in vowels.",
            "standard": "These six words take @deva[घञ्] irregularly instead of @deva[घ] which would normally apply by @ref[3.3.118] since their roots end in vowels. @deva[अधि] + @deva[इ] + @deva[घञ्] = @deva[अध्यायः] 'chapter' (that in which they read); @deva[नि] + @deva[ई] + @deva[घञ्] = @deva[न्यायः] 'logic, justice' (that by which men are led).",
            "advanced": "Being @deva[अच्-अन्त]-roots, these should take @deva[घ] by @ref[3.3.118], but @deva[घञ्] is prescribed anomalously. Derivations: @deva[अधि + इण् + घञ् = अध्यायः] (adhikaraṇa—where reading occurs); @deva[नि + ईङ् + घञ् = न्यायः] (karaṇa—means of leading); @deva[उत् + यु + घञ् = उद्यावः]; @deva[सम् + हृ + घञ् = संहारः]; @deva[आ + धा + घञ् = आधारः]; @deva[आ + वी + घञ् = आवयः]."
        }
    },
    "33123": {
        "en": {
            "simple": "The word @deva[उदङ्क] (a vessel) is formed irregularly when the meaning refers to something other than water. Example: @deva[तैलोदङ्कः] 'a leather vessel for oil'.",
            "standard": "The word @deva[उदङ्क] is formed with @deva[घञ्] from @deva[उत्] + @deva[अञ्च्] meaning 'a vessel'. This separate rule prohibits the formation when the referent is water. Thus @deva[तैलोदङ्कः] 'a leather vessel for oil' is valid, but not when referring to a water container.",
            "advanced": "Though @deva[घञ्] would apply by @ref[3.3.121] (consonant-ending root), this @deva[निपातन] specifies the restriction @deva[अनुदकार्थस्य]—excluding water-related senses. Derivation: @deva[उत् + अञ्च् + घञ् = उदङ्कः]. The separate statement serves as @deva[प्रतिषेध] for @deva[उदक]-related meanings, permitting forms like @deva[तैलोदङ्कः] (oil vessel) while blocking *@deva[जलोदङ्कः]."
        }
    },
    "33124": {
        "en": {
            "simple": "The word @deva[आनाय] meaning 'a net' is formed irregularly. Examples: @deva[आनायो मत्स्यानाम्] 'a net for fish', @deva[आनायो मृगाणाम्] 'a net for deer'.",
            "standard": "The word @deva[आनायः] 'net' is formed irregularly in the instrumental sense (that by which creatures are caught). Derivation: @deva[आ] + @deva[नी] + @deva[घञ्] = @deva[आनायः]. It specifically applies when the meaning is 'net' for catching fish, deer, etc.",
            "advanced": "This @deva[निपातन] specifies @deva[आनायः] with the meaning @deva[जाल] (net). The karaṇa-saṃjñā applies: @deva[आ + नी + घञ् = आनायः]—'that by which (fish etc.) are led/caught'. The irregular formation is meaning-specific; other senses of @deva[आ + नी] follow regular derivation."
        }
    },
    "33125": {
        "en": {
            "simple": "Both @deva[घ] and @deva[घञ्] can be added after the verb @deva[खन्] 'to dig' when forming an appellative meaning instrument or location. Thus we get both @deva[आखानः] and @deva[आखनः] meaning 'a spade or hoe'. A Vārttika adds that @deva[ड] also applies, giving @deva[आखः].",
            "standard": "After @deva[खन्] 'to dig', both @deva[घ] and @deva[घञ्] are permitted for instrumental/locative appellatives. Thus @deva[आ + खन् + घ = आखनः] and @deva[आ + खन् + घञ् = आखानः], both meaning 'spade, hoe'. A Vārttika extends this to include @deva[ड], yielding @deva[आखः] (the @deva[ड्] indicating final portion deletion).",
            "advanced": "The word @deva[च] brings @deva[घञ्] into the sūtra alongside @deva[घ]. Both yield karaṇa/adhikaraṇa-saṃjñā forms: @deva[आखनः] (with @deva[घ]) and @deva[आखानः] (with @deva[घञ्]). Vārttika: @deva[डश्च]—@deva[आ + खन् + ड = आखः]. The @deva[ड्] as @deva[इत्] triggers @deva[अङ्गस्य अन्त्यलोपः]."
        }
    },
    "33126": {
        "en": {
            "simple": "The affix @deva[खल्] is added to verbs when @deva[ईषत्] (slightly), @deva[दुर्] (with difficulty), or @deva[सु] (easily) are prefixed, expressing that an action is hard or easy to perform. Example: @deva[ईषत्करः] 'easy to do', @deva[दुष्करः] 'difficult to do'.",
            "standard": "When @deva[ईषत्], @deva[दुर्], or @deva[सु] serve as upapadas conveying 'with difficulty' (@deva[कृच्छ्र]) or 'easily' (@deva[अकृच्छ्र]), the affix @deva[खल्] is added. The anuv̥tti of 'instrument or location' does not continue. Examples: @deva[ईषत्करः] 'slightly doable', @deva[दुष्करः] 'hard to do', @deva[सुकरः] 'easy to do'.",
            "advanced": "This sūtra introduces a new domain—@deva[कृच्छ्राकृच्छ्रार्थ] (ease/difficulty of action). @deva[दुर्] conveys @deva[कृच्छ्र]; @deva[ईषत्] and @deva[सु] convey @deva[अकृच्छ्र]. The @deva[भृतृस्थान]-anuv̥tti ceases. @deva[खल्] (= @deva[अ] with @deva[ख्] and @deva[ल्] as @deva[इत्]) produces: @deva[ईषत् + कृ + खल् = ईषत्करः]; @deva[दुर् + कृ + खल् = दुष्करः]; @deva[सु + कृ + खल् = सुकरः]."
        }
    },
    "33127": {
        "en": {
            "simple": "The affix @deva[खल्] comes after @deva[भू] 'to be' and @deva[कृ] 'to do' when the upapada is an agent (for @deva[भू]) or object (for @deva[कृ]), preceded by @deva[ईषत्], @deva[दुर्], or @deva[सु]. Example: @deva[दुराढ्यंभवम्] 'to be enriched with difficulty'.",
            "standard": "With @deva[भू], the upapada denotes agent; with @deva[कृ], it denotes object. Combined with @deva[ईषत्]/etc., @deva[खल्] is added. Thus @deva[ईषदाढ्यंभवम्] 'being enriched easily', @deva[दुराढ्यंभवम्] 'being enriched with difficulty', @deva[स्वाढ्यङ्करो देवदत्तो भवता] 'Devadatta can be made rich by you easily'.",
            "advanced": "The sūtra specifies @deva[कर्तृ]-upapada for @deva[भू] (intransitive—the agent undergoes the state) and @deva[कर्मन्]-upapada for @deva[कृ] (transitive—the object is affected). Derivation: @deva[ईषत् + आढ्य + भू + खल् = ईषदाढ्यंभवः]; @deva[सु + आढ्य + कृ + खल् = स्वाढ्यङ्करः]. Vārttika notes extension to other kāraka relations."
        }
    },
    "33128": {
        "en": {
            "simple": "The affix @deva[युच्] (which forms words ending in @deva[अन]) comes after roots ending in long @deva[आ] when @deva[ईषत्], @deva[दुर्], or @deva[सु] are prefixed. This supersedes @deva[खल्]. Example: @deva[ईषत्पानः सोमः] 'soma that can be lightly drunk', @deva[सुपानः] 'easy to drink'.",
            "standard": "After @deva[आकारान्त]-roots (roots ending in @deva[आ]), @deva[युच्] replaces @deva[खल्] when @deva[ईषत्]/etc. upapadas express ease or difficulty. The @deva[कर्तृकर्मणा] phrase does not continue. Thus @deva[पा] + @deva[युच्] → @deva[पानः]: @deva[ईषत्पानः] 'lightly drinkable', @deva[दुष्पानः] 'hard to drink', @deva[सुपानः] 'easy to drink'.",
            "advanced": "For @deva[आदन्त]-dhātus, @deva[युच्] (@deva[अन] with @deva[य्] and @deva[च्] as @deva[इत्]) supersedes @deva[खल्] from @ref[3.3.126]. Only @deva[ईषदादि] continues; @deva[कर्तृकर्मणा] does not. Derivation: @deva[ईषत् + पा + युच् = ईषत्पानः]; @deva[दुर् + पा + युच् = दुष्पानः]; @deva[सु + पा + युच् = सुपानः]. The @deva[युच्] affix is @deva[कृत्]."
        }
    },
    "33129": {
        "en": {
            "simple": "In Vedic usage, the affix @deva[युच्] comes after verbs meaning 'to go' when @deva[ईषत्], @deva[दुर्], or @deva[सु] (meaning easily or with difficulty) are prefixed. This supersedes @deva[खल्]. Example: @deva[सूपसदनोऽग्निः] 'fire that is easy to approach'.",
            "standard": "In the Vedas (@deva[छन्दस्]), @deva[युच्] replaces @deva[खल्] after roots meaning 'to go' when combined with @deva[ईषत्]/etc. upapadas. Examples from Taittirīya Saṃhitā: @deva[सूपसदनोऽग्निः] 'fire easy to approach', @deva[सूपसदनमन्तरिक्षम्] 'atmosphere easy to reach'.",
            "advanced": "This is a @deva[छान्दस] provision: @deva[युच्] applies after @deva[गत्यर्थ]-dhātus (verbs of motion) in Vedic, superseding @deva[खल्]. Examples: @deva[सु + उप + सद् + युच् = सूपसदनः] (T.S. 7.5.20). The @deva[छन्दस्]-restriction indicates this formation is not productive in @deva[भाषा] (classical Sanskrit)."
        }
    },
    "33130": {
        "en": {
            "simple": "In the Vedas, @deva[युच्] is also seen after verbs other than those meaning 'to go'. Examples: @deva[सुदोह] 'easy to milk', @deva[सुवेद] 'easy to know' (Ṛg Veda X.112.8). A Vārttika states that in modern Sanskrit, @deva[युच्] comes after @deva[आस्], @deva[युध्], @deva[दृश्], @deva[धृष्], and @deva[मृष्], as in @deva[दुःशासनः] and @deva[दुर्योधनः].",
            "standard": "Vedic usage extends @deva[युच्] beyond motion verbs: @deva[सुदोह] 'easy to milk', @deva[सुवेद] 'easy to know' (RV X.112.8). A Vārttika permits @deva[युच्] in classical Sanskrit after specific roots: @deva[आस्] (sit), @deva[युध्] (fight), @deva[दृश्] (see), @deva[धृष्] (dare), @deva[मृष्] (endure)—yielding @deva[दुःशासनः] 'Duḥśāsana', @deva[दुर्योधनः] 'Duryodhana'.",
            "advanced": "The Vedic @deva[युच्] extends to non-@deva[गत्यर्थ] roots: @deva[दुह्] → @deva[सुदोहः]; @deva[विद्] → @deva[सुवेदः]. Vārttika (@deva[भाषायाम्]): @deva[युच्] after @deva[आस्], @deva[युध्], @deva[दृश्], @deva[धृष्], @deva[मृष्]. Thus: @deva[दुर् + शास् + युच् = दुःशासनः]; @deva[दुर् + युध् + युच् = दुर्योधनः]; @deva[दुर् + दृश् + युच् = दुर्दर्शनः]. These are @deva[भाषा]-sanctioned formations."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.121-3.3.130")
