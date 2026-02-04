# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33011": {
        "en": {
            "simple": "Affixes like @deva[घञ्] that denote mere action (@deva[भाव]) can also express future meaning when the main verb indicates purposive action. Examples: @deva[पाकाय व्रजति] 'he goes to cook'; @deva[भूतये व्रजति] 'he goes for success'.",
            "standard": "The @deva[भाववाचक] (action-denoting) affixes like @deva[घञ्] also take future sense when the @deva[उपपद] (accompanying verb) expresses @deva[क्रियार्थ] (action for the sake of another action). Examples: @deva[पाकाय व्रजति] 'he goes for cooking'; @deva[भूतये व्रजति] 'he goes for prosperity'. These nouns must be properly formed @deva[वाचक] (expressive)—using the correct affix with the correct base.",
            "advanced": "This extends the @deva[क्रियार्थ] construction from @ref[3.3.10] to @deva[भाववाचक] affixes. Since @deva[वाऽसरूप] doesn't apply to infinitives (@ref[3.3.10]), @deva[तुमुन्] would block other affixes; hence this separate provision. The term @deva[वचन] requires the affixes to be @deva[वाचक]—properly applied to their designated bases in the prescribed manner. Only genuine @deva[भाववाच्य] (verbal noun) formations qualify, not arbitrary noun usages."
        }
    },
    "33012": {
        "en": {
            "simple": "The affix @deva[अण्] comes after a root with future meaning when the @deva[उपपद] is in the accusative case and the action is purposive. Example: @deva[गोदायो व्रजति] 'he goes to give cows'.",
            "standard": "When the @deva[उपपद] is in the accusative (@deva[द्वितीया]) and the action is @deva[क्रियार्थ] (purposive), @deva[अण्] is added with future sense. This extends @ref[3.2.1]'s general @deva[अण्] rule to purposive contexts. It overrides restrictions like @ref[3.2.3] (which blocked @deva[अण्] after @deva[आ]-final roots). Thus @deva[गोदायो व्रजति] 'he goes to give cows' (@deva[दा] + @deva[अण्] = @deva[दाय] by @ref[7.3.33]), not *@deva[गोदः].",
            "advanced": "This @deva[सूत्र] serves as @deva[अपवाद] to @ref[3.2.1] and @ref[3.2.3]. By @deva[परत्व] (@ref[1.4.2]), it also blocks affixes like @deva[क] etc. The @deva[ण्वुल्] of @ref[3.3.10] would otherwise apply (since @deva[वाऽसरूप] doesn't work for infinitives), but this @deva[अण्] takes precedence for accusative-@deva[उपपद] constructions. Examples: @deva[काण्डलावो व्रजति] 'he goes to cut wood'; @deva[कम्बलदायो व्रजति] 'he goes to give a blanket'."
        }
    },
    "33013": {
        "en": {
            "simple": "The affix @deva[लृट्] (second future) is used for remaining cases of simple futurity and in purposive constructions. Examples: @deva[करिष्यामि इति व्रजति] 'he goes (thinking) I will do'; @deva[करिष्यति] 'he will do'.",
            "standard": "@deva[लृट्] (the second future tense) applies in remaining future contexts—both for simple futurity and in dependent clauses with purposive construction. Examples: @deva[करिष्यामि इति व्रजति] 'he goes thinking \"I will do\"'; @deva[हरिष्यामि इति व्रजति] 'he goes thinking \"I will take\"'. Also simple: @deva[करिष्यति] 'he will do'; @deva[हरिष्यति] 'he will take'.",
            "advanced": "This @deva[सूत्र] establishes @deva[लृट्] as the default future tense after the special provisions of @ref[3.3.10]-@ref[3.3.12]. It covers both independent sentences (@deva[करिष्यति] 'he will do') and dependent/quoted sentences within purposive constructions (@deva[करिष्यामि इति व्रजति]). The term @deva[शेष] 'remaining' indicates @deva[लृट्] applies wherever the specialized affixes don't."
        }
    },
    "33014": {
        "en": {
            "simple": "The participial affixes @deva[शतृ] and @deva[शानच्] (called @deva[सत्]) may optionally substitute for @deva[लृट्], forming future participles. Examples: @deva[करिष्यन्तं देवदत्तं पश्य] 'behold Devadatta about to do'; @deva[करिष्यमाणः] 'being about to be done'.",
            "standard": "The @deva[सत्] affixes (@deva[शतृ] and @deva[शानच्], defined in @ref[3.2.127]) optionally replace @deva[लृट्] to form future participles. When the word doesn't end in nominative (@deva[प्रथमा]), @deva[सत्] obligatorily replaces @deva[लृट्] (per @ref[3.2.124]); otherwise it's optional. Examples: @deva[करिष्यन्तं देवदत्तं पश्य] 'see Devadatta about to act'; @deva[अर्जयिष्यमाणो वसति] 'he dwells intending to earn'. Nominative: @deva[करिष्यन्] or @deva[करिष्यति] both valid.",
            "advanced": "The derivation: @deva[कृ] + @deva[लृट्] → @deva[कृ] + @deva[स्य] (by @ref[3.1.33]) + @deva[शतृ] → @deva[कर्] + @deva[इट्] + @deva[स्य] + @deva[अत्] → @deva[करिष्यत्], nominative @deva[करिष्यन्]. The @deva[सत्] affixes attach after the future sign @deva[स्य], creating future participles. The option applies only with @deva[प्रथमा]-ending words; with other cases, @deva[सत्] is mandatory per @ref[3.2.124]. These forms express intention/purpose as well as simple futurity."
        }
    },
    "33015": {
        "en": {
            "simple": "The affix @deva[लुट्] (first future) is used for actions that will happen but not today. Examples: @deva[श्वः कर्ता] 'he will do tomorrow'; @deva[श्वो भोक्ता] 'he will eat tomorrow'.",
            "standard": "@deva[लुट्] (first future, also called periphrastic future) expresses @deva[अनद्यतन] (non-today) future—events beyond the current day. It blocks @deva[लृट्] in such contexts. Examples: @deva[श्वः कर्ता] 'he will do tomorrow'; @deva[श्वो भोक्ता] 'he will eat tomorrow'. When there's uncertainty or mixture of today/tomorrow, @deva[लृट्] applies: @deva[अद्य श्वो वा भविष्यति] 'it will happen today or tomorrow'.",
            "advanced": "The term @deva[अनद्यतन] is a @deva[बहुव्रीहि] compound meaning 'that for which today is not (the time)'. A @deva[वार्तिक] allows @deva[लुट्] with @deva[लृट्] sense when expressing sorrow/impatience: @deva[इयं तु कदा गन्ता] 'oh when will she go!' (lamenting slow walking); @deva[अयं तु कदाऽध्येता] 'when will he ever learn!' (expressing frustration at inattentiveness)."
        }
    },
    "33016": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[पद्] 'to step', @deva[रुज्] 'to pain', @deva[विश्] 'to enter', and @deva[स्पृश्] 'to touch'. Examples: @deva[पादः] 'foot'; @deva[रोगः] 'disease'; @deva[वेशः] 'entrance'.",
            "standard": "From this @deva[सूत्र], the @deva[अनुवृत्ति] of 'future' ceases. The affixes now taught apply in all tenses. @deva[घञ्] follows @deva[पद्], @deva[रुज्], @deva[विश्], @deva[स्पृश्]: thus @deva[पादः] 'foot'; @deva[रोगः] 'disease' (with @deva[गुण]); @deva[वेशः] 'entrance'. A @deva[वार्तिक] notes that @deva[स्पृश्] + @deva[घञ्] → @deva[स्पर्शः] means 'disease/warmth'; for 'touch', @deva[अच्] is used (@ref[3.1.134]).",
            "advanced": "The derivations involve @deva[गुण]: @deva[पद्] → @deva[पाद्] + @deva[अ] → @deva[पाद]; @deva[रुज्] → @deva[रोग्] + @deva[अ] → @deva[रोग]; @deva[विश्] → @deva[वेश्] + @deva[अ] → @deva[वेश]. For @deva[स्पृश्], the @deva[वार्तिक] distinguishes: @deva[स्पर्शः] (from @deva[घञ्]) means 'affliction' or 'heat'; @deva[स्पर्शः] (from @deva[अच्]) means 'touch' as in @deva[स्पर्शो देवदत्तः] 'Devadatta who touches'. The two differ in accent."
        }
    },
    "33017": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after @deva[सृ] 'to flow/move' when the agent is permanently fixed. Example: @deva[सारः] 'essence' (as in @deva[चन्दनसारः] 'essence of sandalwood').",
            "standard": "After @deva[सृ] 'to move/flow', @deva[घञ्] applies when the agent is @deva[स्थिर] 'permanent/fixed'. Thus @deva[सारः] 'essence'—that which remains constant while moving through time. Examples: @deva[चन्दनसारः] 'sandalwood essence'; @deva[खदिरसारः] 'catechu essence'. Without @deva[स्थिर] condition: @deva[सर्त्ता] 'one who moves', @deva[सारकः] 'that which flows'.",
            "advanced": "The semantic condition @deva[स्थिर] 'permanently fixed' defines the applicability: the @deva[कर्तृ] (agent) must be something that remains constant over time while the action (@deva[सरण]) occurs. A @deva[वार्तिक] extends @deva[सारः] to disease (@deva[अतिसारः] 'dysentery'), fish (@deva[विसारः]), and strength (@deva[सारः] 'vigor'). These specialized meanings show the word's semantic range beyond the prototypical 'essence'."
        }
    },
    "33018": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after any root when mere action (@deva[भाव]) is denoted. Examples: @deva[पाकः] 'cooking'; @deva[त्यागः] 'abandonment'; @deva[रागः] 'coloring'.",
            "standard": "When the sense is @deva[भाव] (mere action, the verbal noun), @deva[घञ्] may follow any root. Examples: @deva[पच्] + @deva[घञ्] → @deva[पाकः] 'cooking' (@ref[7.2.116], @ref[7.3.52]); @deva[त्यज्] → @deva[त्यागः] 'abandonment'; @deva[रञ्ज्] → @deva[रागः] 'coloring' (@ref[6.4.27]). These words may take any gender or number: @deva[पक्तिः], @deva[पचनम्], @deva[पाकौ], @deva[पाकाः]. They form verbal nouns or abstract nouns of action.",
            "advanced": "The @deva[भाव] sense expresses the action in its completed state as a general abstraction. Since the root's meaning can be conveyed by the root itself, @deva[घञ्] and similar affixes come after all roots when expressing this abstract sense. The resulting @deva[भाववाचक] nouns (verbal nouns, nouns of action) are not restricted to masculine singular—they may appear in any gender/number combination appropriate to the context."
        }
    },
    "33019": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after a root when forming an appellative, where the word relates to the verb's action but NOT as agent. Examples: @deva[प्रासः] 'dart' (what is thrown); @deva[आहारः] 'food' (from which juice is extracted).",
            "standard": "In @deva[संज्ञा] (appellative) sense, @deva[घञ्] follows a root when the word relates to the verbal action as a @deva[कारक] other than @deva[कर्तृ] (agent). Examples: @deva[प्रासः] 'dart' (@deva[प्र] + @deva[अस्]—what is thrown); @deva[प्रसेवः] 'sack' (what is stitched together); @deva[आहारः] 'food' (from which essence is taken). Counter-example: @deva[मेषः] 'sheep' (related as agent—'one who gazes helplessly')—takes different affix.",
            "advanced": "The @deva[अकर्तरि] 'non-agent' condition uses @deva[नञ्] with @deva[प्रसज्य-प्रतिषेध] force (simple prohibition), not @deva[पर्युदास] (exclusion implying other @deva[कारकs]). The word @deva[कारक] is included to clarify this. The @deva[च] indicates optional irregular application even without @deva[संज्ञा] sense: @deva[को भवता दायो दत्तः] 'what gift was given by you?' Both @deva[भाव] and @deva[अकर्तरि कारक] senses continue as @deva[अनुवृत्ति] into subsequent @deva[सूत्रs]."
        }
    },
    "33020": {
        "en": {
            "simple": "The affix @deva[घञ्] comes after all roots when the resulting word is a name of measure. Examples: @deva[निचायः] 'a heap' (measure of grains); @deva[कारः] 'a throw' (measure of scattering).",
            "standard": "When the word formed is @deva[परिमाणाख्य] (a name of measure), @deva[घञ्] follows all roots—even those that would otherwise take @deva[अच्] (@ref[3.3.56]) or @deva[अप्] (@ref[3.3.57]). Examples: @deva[नि] + @deva[चि] + @deva[घञ्] → @deva[निचायः] 'a heap' (@deva[एकस्तण्डुलनिचायः] 'one heap of rice'); @deva[कॄ] + @deva[घञ्] → @deva[कारः] 'a throw'. For feminine measures, @deva[क्तिन्] is used instead (@ref[3.3.94]).",
            "advanced": "The word @deva[सर्वेभ्यः] 'after all (roots)' supersedes both @deva[अच्] and @deva[अप्] for measure-names. The @deva[आख्या] term indicates these are not @deva[रूढि] (primitive/underived) words—numerals are included alongside measures like @deva[प्रस्थ], @deva[पल]. A @deva[वार्तिक] adds: after causative @deva[दारि] and @deva[जारि] with @deva[णिच्]-elision (@deva[लुक्]), @deva[घञ्] applies in @deva[कर्तृ] sense: @deva[दाराः] 'wife' (who divides brothers); @deva[जाराः] 'paramour' (who inflames)."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.11-3.3.20")
