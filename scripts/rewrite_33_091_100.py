# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33091": {
        "en": {
            "simple": "The affix @deva[नन्] comes after @deva[स्वप्] 'to sleep'. The final @deva[न्] regulates accent. Example: @deva[स्वप्नः] 'a dream'.",
            "standard": "After @deva[स्वप्] 'to sleep', the affix @deva[नन्] is used in @deva[भाव] etc. senses. The final @deva[न्] is @deva[इत्], regulating accent by @ref[6.1.197]. Thus @deva[स्वप्नः] 'a dream, sleep'.",
            "advanced": "The @deva[नन्] affix (operational form @deva[न] after @deva[इत्]-deletion of the first @deva[न्]) creates the common noun @deva[स्वप्न] 'dream'. The @deva[इत्]-@deva[न्] at the end determines the word's accent pattern by @ref[6.1.197], distinguishing it from other @deva[न]-ending derivatives."
        }
    },
    "33092": {
        "en": {
            "simple": "The affix @deva[कि] comes after @deva[घु] verbs (@deva[दा], @deva[धा], @deva[दाप्]) when an @deva[उपसर्ग] is in composition. The @deva[क्] causes final @deva[आ] elision. Examples: @deva[प्रदिः] 'a gift'; @deva[प्रधिः] 'wheel rim'; @deva[उपाधिः] 'fraud'; @deva[अन्तर्धिः] 'disappearance'.",
            "standard": "The @deva[घु] verbs (@deva[दा], @deva[धा], @deva[दाप्] by @ref[1.1.20]) take @deva[कि] when compounded with an @deva[उपसर्ग]. The @deva[क्] is @deva[इत्], causing final @deva[आ]-elision by @ref[6.4.64]. Examples: @deva[प्र] + @deva[दा] + @deva[कि] → @deva[प्रदिः] 'a present/gift'; @deva[प्रधिः] 'wheel periphery'; @deva[उपाधिः] 'deception'; @deva[अन्तर्धिः] 'vanishing'.",
            "advanced": "The @deva[घु]-designation (@ref[1.1.20]) identifies @deva[दा] 'to give', @deva[धा] 'to place', and @deva[दाप्] 'to purify' as taking @deva[कि] with prefixes. The @deva[क्]-@deva[इत्] triggers @deva[आ]-elision (@ref[6.4.64]), yielding @deva[द्] + @deva[इ] → @deva[दि]. These forms are productive with various prefixes."
        }
    },
    "33093": {
        "en": {
            "simple": "The affix @deva[कि] comes after @deva[घु] verbs when a word in accusative is in composition and the meaning is 'location'. Examples: @deva[जलधिः] 'ocean' (where water is held); @deva[शरधिः] 'quiver' (where arrows are placed).",
            "standard": "When a @deva[द्वितीया]-ending word is in composition with @deva[घु] verbs, and the relationship is @deva[आधार] (location), @deva[कि] applies. Examples: @deva[जलधिः] 'ocean' (in which water is held); @deva[शरधिः] 'quiver' (that in which arrows are put). The @deva[च] draws @deva[कि] from the previous @deva[सूत्र].",
            "advanced": "The @deva[आधारे] condition specifies locational relationship—the container/receptacle sense. The words formed should have no other significance. The @deva[घु]-verbs here function in their 'holding/placing' sense. Compare @deva[जलधि] 'ocean' (water-holder) with non-locational usages of the same roots."
        }
    },
    "33094": {
        "en": {
            "simple": "The affix @deva[क्तिन्] is added to express action in feminine gender. This supersedes @deva[घञ्], @deva[अच्], @deva[अप्]. Examples: @deva[कृतिः] 'action'; @deva[चितिः] 'gathering'; @deva[मतिः] 'understanding'.",
            "standard": "To express @deva[भाव] etc. in feminine, @deva[क्तिन्] is added, superseding @deva[घञ्], @deva[अच्], @deva[अप्]. Examples: @deva[कृतिः] 'action'; @deva[चितिः] 'gathering'; @deva[मतिः] 'understanding'. @deva[वार्तिकs] add: after @deva[आप्] etc. (@deva[आप्तिः] 'attainment', @deva[लब्धिः] 'gain'); after @deva[श्रु], @deva[यज्], @deva[स्तु] in instrumental sense (@deva[श्रुतिः] 'ear', @deva[इष्टिः] 'sacrifice', @deva[स्तुतिः] 'praise').",
            "advanced": "Multiple @deva[वार्तिकs] supplement this rule: (1) After @deva[ग्लै], @deva[म्लै], @deva[ज्या], @deva[हा], affix @deva[नि] applies: @deva[ग्लानिः], @deva[म्लानिः], @deva[ज्यानिः], @deva[हानिः]. (2) After @deva[ॠ]-ending and @deva[लू]-class roots, @deva[क्तिन्] behaves like @deva[निष्ठा]: @deva[कॄ] + @deva[क्तिन्] → @deva[कीर्णिः] (by @ref[7.1.100], @ref[8.2.77], @ref[8.2.42]); similarly @deva[लूनिः], @deva[धूनिः]. (3) After @deva[सम्पत्] etc., @deva[क्विप्] applies: @deva[सम्पत्], @deva[विपत्]; @deva[क्तिन्] also valid: @deva[सम्पत्तिः], @deva[विपत्तिः]."
        }
    },
    "33095": {
        "en": {
            "simple": "After @deva[स्था] 'to stand', @deva[गा] 'to sing', @deva[पा] 'to drink', @deva[पच्] 'to cook', @deva[क्तिन्] is used for feminine @deva[भाव]-words. This blocks @deva[अङ्]. Examples: @deva[प्रस्थितिः] 'journey'; @deva[उद्गीतिः] 'loud singing'; @deva[प्रपीतिः] 'cistern'; @deva[पक्तिः] 'cooking'.",
            "standard": "After @deva[स्था], @deva[गा], @deva[पा], @deva[पच्], @deva[क्तिन्] applies for feminine @deva[भाव] words, blocking @deva[अङ्] (@ref[3.3.106]) which normally supersedes @deva[क्तिन्] for @deva[आ]-final compound verbs. Examples: @deva[प्रस्थितिः] 'journey' (@ref[7.4.40]); @deva[उद्गीतिः] 'singing aloud' (@deva[गै] + @deva[क्तिन्] → @deva[गी] + @deva[ति] by @ref[6.4.66]); @deva[सगीतिः] 'concert'; @deva[प्रपीतिः] 'cistern'; @deva[सम्पीतिः] 'drinking together'; @deva[पक्तिः] 'cooking'.",
            "advanced": "The @deva[भाव] repetition excludes other significances—only pure action sense triggers @deva[क्तिन्] here. Forms like @deva[अवस्था], @deva[संस्था], @deva[व्यवस्था] (using @deva[अङ्]) are justified by Pāṇini's own usage in @ref[1.1.34], demonstrating that @deva[अङ्] can still apply despite this rule—showing optional application."
        }
    },
    "33096": {
        "en": {
            "simple": "In Vedic @deva[मन्त्र] literature, @deva[क्तिन्] with acute accent comes after @deva[वृष्] 'to rain', @deva[इष्] 'to wish', @deva[पच्] 'to cook', @deva[मन्] 'to think', @deva[विद्] 'to know', @deva[भू] 'to be', @deva[वि] 'to go', @deva[रा] 'to give'. Examples: @deva[वृष्टिः]; @deva[इष्टिः]; @deva[पक्तिः]; @deva[मतिः]; @deva[वित्तिः]; @deva[भूतिः]; @deva[वीतिः]; @deva[रातिः].",
            "standard": "In @deva[मन्त्र] (Vedic text), @deva[क्तिन्] with @deva[उदात्त] accent follows @deva[वृष्], @deva[इष्], @deva[पच्], @deva[मन्], @deva[विद्], @deva[भू], @deva[वि], @deva[रा]. The @deva[सूत्र] uses nominative (not ablative) case unusually. Examples: @deva[वृष्टिः] 'rain'; @deva[इष्टिः] 'wish'; @deva[पक्तिः] 'cooking'; @deva[मतिः] 'thought'; @deva[वित्तिः] 'knowledge'; @deva[भूतिः] 'prosperity'; @deva[वीतिः] 'consumption'; @deva[रातिः] 'giving'.",
            "advanced": "Though @deva[क्तिन्] is generally available by @ref[3.3.94], this @deva[सूत्र] regulates accent for these specific Vedic forms. From @deva[इष्] there are three forms: irregular @deva[इच्छा] (@ref[2.3.10]), general @deva[क्तिन्] form with first-syllable acute, and this Vedic form. See Ṛgveda I.116.12, II.5.6, etc. for attestations."
        }
    },
    "33097": {
        "en": {
            "simple": "The words @deva[ऊति] 'protection', @deva[यूति] 'joining', @deva[जूति] 'speed', @deva[साति] 'destruction', @deva[हेति] 'weapon', @deva[कीर्ति] 'fame' are irregular forms with @deva[उदात्त] accent.",
            "standard": "These anomalous @deva[उदात्त]-accented forms are: @deva[ऊतिः] 'protection/sport' (from @deva[अव्] + @deva[क्तिन्] → @deva[ऊ] + @deva[ति] by @ref[6.4.20]); @deva[यूतिः] 'joining' (irregular @deva[उ] → @deva[ऊ] lengthening); @deva[जूतिः] 'velocity' (same lengthening); @deva[सातिः] 'destruction' (irregular: @deva[आ] not → @deva[इ] as @ref[7.4.40] requires, or from @deva[सन्] + @deva[क्तिन्]); @deva[हेतिः] 'weapon' (from @deva[हन्] or @deva[हिनोति]); @deva[कीर्तिः] 'fame'.",
            "advanced": "The @deva[मन्त्रे] condition doesn't continue here; only @deva[उदात्त] accent does. Irregularities: @deva[यूति/जूति] show unexpected @deva[उ]-lengthening; @deva[साति] blocks @ref[7.4.40]'s @deva[आ] → @deva[इ] (or derives regularly from @deva[सन्] via @ref[6.4.42]); @deva[हेति] has dual possible derivations. Vedic citation: @deva[उग्र उग्राभिरूतिभिः] (Ṛgveda I.7.4) 'with mighty protections'."
        }
    },
    "33098": {
        "en": {
            "simple": "The affix @deva[क्यप्] with @deva[उदात्त] accent comes after @deva[व्रज्] 'to go' and @deva[यज्] 'to worship' to form feminine action-words. This supersedes @deva[क्तिन्]. Examples: @deva[व्रज्या] 'wandering'; @deva[इज्या] 'worshipping'.",
            "standard": "After @deva[व्रज्] and @deva[यज्], @deva[क्यप्] with @deva[उदात्त] accent applies for feminine @deva[भाव] words, superseding @deva[क्तिन्]. Thus @deva[व्रज्या] 'wandering about'; @deva[इज्या] 'worship, sacrifice' (@ref[6.1.15]). The @deva[प्] in @deva[क्यप्] is @deva[इत्], serving a purpose in the next @deva[सूत्र]—it enables @deva[त]-addition by @ref[5.1.7].",
            "advanced": "The @deva[क्यप्] affix (operational form @deva[य] after @deva[इत्]-deletion) creates @deva[आ]-final feminine nouns. The @deva[प्]-@deva[इत्] marker, while unnecessary here, is crucial for @ref[3.3.99]'s derivatives which use @ref[5.1.7]. The @deva[यज्] → @deva[इज्] involves @deva[संप्रसारण] by @ref[6.1.15]."
        }
    },
    "33099": {
        "en": {
            "simple": "The affix @deva[क्यप्] with @deva[उदात्त] accent comes after @deva[समज्], @deva[निषद्], @deva[निपत्], @deva[मन्], @deva[विद्], @deva[षुञ्], @deva[शीङ्], @deva[भृञ्], @deva[इण्] to form feminine appellatives. Examples: @deva[समज्या] 'assembly'; @deva[निषद्या] 'couch'; @deva[विद्या] 'knowledge'; @deva[शय्या] 'bed'; @deva[भृत्या] 'wages'.",
            "standard": "For feminine @deva[संज्ञा] (appellatives), @deva[क्यप्] with @deva[उदात्त] accent follows: @deva[समज्] → @deva[समज्या] 'assembly'; @deva[निषद्] → @deva[निषद्या] 'couch'; @deva[निपत्] → @deva[निपत्या] 'slippery ground'; @deva[मन्] → @deva[मन्या] 'thinking'; @deva[विद्] → @deva[विद्या] 'knowledge'; @deva[षुञ्] → @deva[सुत्या] 'soma extraction' (@ref[6.1.71]); @deva[शीङ्] → @deva[शय्या] 'bed'; @deva[भृञ्] → @deva[भृत्या] 'wages, service'; @deva[इण्] → @deva[इत्या] 'palanquin'.",
            "advanced": "Though @deva[भृ] would take @deva[क्यप्] by @ref[3.1.112], that rule's @deva[असञ्ज्ञायाम्] must be qualified 'except in feminine'—since @deva[सञ्ज्ञा]-denoting feminine forms exist here. The test case: @deva[भार्या] 'wife' uses @deva[ण्यत्] (not @deva[क्यप्]), showing @ref[3.1.112] applies to masculine @deva[सञ्ज्ञा] but not feminine."
        }
    },
    "33100": {
        "en": {
            "simple": "After @deva[कृ] 'to do', both @deva[श] and @deva[क्यप्] (plus @deva[क्तिन्]) come for feminine words. Examples: @deva[क्रिया] (with @deva[श]); @deva[कृत्या] (with @deva[क्यप्]); @deva[कृतिः] (with @deva[क्तिन्]).",
            "standard": "After @deva[कृञ्] 'to do', both @deva[श] and @deva[क्यप्] apply (the @deva[च] draws @deva[क्यप्] from previous rules; @deva[क्तिन्] by @deva[योगविभाग]). Thus: @deva[क्रिया] 'action' (with @deva[श]; root becomes @deva[क्रिय] by @ref[3.1.67]); @deva[कृत्या] 'deed' (with @deva[क्यप्], @ref[6.1.71]); @deva[कृतिः] 'act' (with @deva[क्तिन्]).",
            "advanced": "By @deva[योगविभाग] (rule-splitting), this @deva[सूत्र] yields: (1) @deva[कृञः] 'after @deva[कृ], @deva[क्तिन्]'; (2) @deva[श च] 'and @deva[श] as well as @deva[क्यप्]'. The @deva[श] affix triggers @deva[कृ] → @deva[क्रिय्] by @ref[3.1.67]. All three formations are productive: @deva[क्रिया] 'action (philosophical term)', @deva[कृत्या] 'deed/ritual', @deva[कृतिः] 'making/composition'."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.91-3.3.100")
