#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.4.106-3.4.117 (Batch 8 of 3.4 - Final)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "34106": {
        "en": {
            "simple": "In @deva[लिङ्], for the @deva[आत्मनेपद] first person singular, the @deva[इ] of the ending is replaced by short @deva[अ].",
            "standard": "In @deva[लिङ्] (optative and benedictive), the @deva[इ] of the @deva[आत्मनेपद] first person singular ending (@deva[इड्]) is replaced by short @deva[अ]. Forms: @deva[पचेय], @deva[यजेय], @deva[कृषीय], @deva[हृषीय]. The @deva[त्] in @deva[अत्] belongs to the @deva[विभक्ति] (case ending notation) and is not part of the substitute.",
            "advanced": "This sūtra replaces the @deva[इ] of @deva[आत्मनेपद] first singular ending (@deva[इड्]) with @deva[अ] in @deva[लिङ्]. The @deva[अत्] notation uses @deva[त्] as a grammatical marker (not @deva[इत्] by @ref[1.3.4], as it belongs to @deva[विभक्ति]). The @deva[इट्] in the sūtra refers to the @deva[आत्मनेपद] ending, not the augment @deva[इट्], per the maxim @deva[अर्थवद्ग्रहणे नानर्थकस्य]—meaningful forms exclude non-meaningful homophonous elements. Forms: @deva[पचेय], @deva[यजेय], @deva[कृषीय]."
        }
    },
    "34107": {
        "en": {
            "simple": "In @deva[लिङ्], the augment @deva[सुट्] is added before endings beginning with @deva[त] or @deva[थ].",
            "standard": "The augment @deva[सुट्] is added before @deva[लिङ्] endings that begin with @deva[त] or @deva[थ]. This applies to @deva[आत्मनेपद] endings like @deva[त], @deva[थास्], etc. Note that @deva[सीयुट्] applies to @deva[लिङ्] as a whole (@deva[आगमी] = @deva[लिङ्]), while @deva[सुट्] applies specifically to @deva[त]/@deva[थ]-initial endings. In the optative, @deva[स्] elides by @ref[7.2.79]. Forms: @deva[कृषीष्ट], @deva[कृषीयास्ताम्], @deva[कृषीष्ठाः].",
            "advanced": "This sūtra adds @deva[सुट्] before @deva[ति]-initial (@deva[त], @deva[थ]) endings in @deva[लिङ्]. The distinction from @deva[सीयुट्] (@ref[3.4.102]): @deva[सीयुट्]'s @deva[आगमी] is @deva[लिङ्] itself, while @deva[सुट्]'s @deva[आगमी] is the @deva[त]/@deva[थ]-initial pratyaya. Since their scopes differ, no mutual exclusion occurs. The @deva[इ] in @deva[ति] is for pronunciation only. Forms: benedictive @deva[कृषीष्ट], @deva[कृषीयास्ताम्], @deva[कृषीरन्], @deva[कृषीष्ठाः], @deva[कृषीयास्थाम्]. In optative, @deva[स्] deletes by @ref[7.2.79]."
        }
    },
    "34108": {
        "en": {
            "simple": "In @deva[लिङ्], the ending @deva[झि] (first person plural @deva[परस्मैपद]) is replaced by @deva[जुस्].",
            "standard": "In @deva[लिङ्] (optative and benedictive), @deva[झि] (first person plural @deva[परस्मैपद]) is replaced by @deva[जुस्], not by the usual @deva[अन्त] (@ref[7.1.3]). Forms: @deva[पचेयुः], @deva[यजेयुः].",
            "advanced": "This sūtra substitutes @deva[जुस्] for @deva[झि] (1st plural @deva[परस्मैपद]) in @deva[लिङ्], overriding @ref[7.1.3] (@deva[झ] → @deva[अन्त]). Note the distinction: @deva[झ] (3rd plural) → @deva[रन्] by @ref[3.4.105], while @deva[झि] (1st plural) → @deva[जुस्] by this rule. Forms: @deva[पचेयुः], @deva[यजेयुः]. The @deva[स्] of @deva[जुस्] takes @deva[विसर्ग] in pause."
        }
    },
    "34109": {
        "en": {
            "simple": "The ending @deva[झि] also becomes @deva[जुस्] in the aorist (@deva[लुङ्]) with @deva[सिच्], in the imperfect (@deva[लङ्]) of reduplicated verbs, and after the root @deva[विद्] 'to know'.",
            "standard": "In @deva[ङित्] tenses other than @deva[लिङ्], @deva[झि] is replaced by @deva[जुस्] in three contexts: (1) aorist (@deva[लुङ्]) formed with @deva[सिच्], (2) imperfect (@deva[लङ्]) of reduplicated verbs, (3) forms of @deva[विद्] 'to know'. The term @deva[ङितः] from @ref[3.4.99] continues. Examples: @deva[अकार्षुः] (sic-aorist), @deva[अबिभयुः] (reduplicated imperfect), @deva[अविदुः] (@deva[विद्] imperfect).",
            "advanced": "This sūtra extends @deva[जुस्] substitution for @deva[झि] beyond @deva[लिङ्] to: (1) @deva[सिच्]-aorist (@deva[लुङ्]): @deva[अकार्षुः], @deva[अहार्षुः]; (2) @deva[लङ्] of reduplicated verbs (@deva[अभ्यस्त]): @deva[अबिभयुः], @deva[अजिहयुः], @deva[अजागरुः]; (3) @deva[विद्] 'to know': @deva[अविदुः]. The anuvṛtti of @deva[ङितः] (@ref[3.4.99]) restricts this to imperfect of reduplicated verbs specifically."
        }
    },
    "34110": {
        "en": {
            "simple": "When @deva[सिच्] is deleted, @deva[जुस्] replaces @deva[झि] only if the verb stem ends in long @deva[आ].",
            "standard": "When @deva[सिच्] is elided (by @ref[2.4.77]-@ref[2.4.79]), @deva[जुस्] replaces @deva[झि] only after stems ending in long @deva[आ]. Examples: @deva[अदुः], @deva[अधुः], @deva[अस्थुः]. This restricts @ref[3.4.109]: after non-@deva[आ]-final stems where @deva[सिच्] is elided, the regular @deva[अन्त] applies instead. Thus @deva[भू] with @deva[सिच्]-elision gives @deva[अभूवन्] (not @deva[अभूवुः]).",
            "advanced": "This sūtra is a @deva[नियम] (restriction) on @ref[3.4.109]. When @deva[सिच्] is elided by @ref[2.4.77]-@ref[2.4.79], @deva[जुस्] replaces @deva[झि] only for @deva[आकारान्त] stems. The maxim @ref[1.1.62] (@deva[प्रत्ययलोपे प्रत्ययलक्षणम्]) would otherwise extend @deva[जुस्] to all @deva[सिच्]-elision contexts. Restriction: @deva[भू] (not @deva[आ]-final) with @deva[सिच्] deleted → @deva[अभूवन्] (standard @deva[अन्त]), not @deva[अभूवुः]. But @deva[दा]/sthā (आ-final) → @deva[अदुः], @deva[अस्थुः]. When @deva[सिच्] is retained: @deva[अकार्षुः], @deva[अहार्षुः] (@deva[जुस्] applies per @ref[3.4.109])."
        }
    },
    "34111": {
        "en": {
            "simple": "According to @deva[शाकटायन], @deva[जुस्] replaces @deva[झि] in the imperfect of roots ending in long @deva[आ].",
            "standard": "In @deva[शाकटायन]'s view, @deva[जुस्] optionally replaces @deva[झि] in @deva[लङ्] (imperfect) for roots ending in long @deva[आ]. Thus @deva[या] → @deva[अयुः] or @deva[अयान्]; @deva[वा] → @deva[अवुः] or @deva[अवान्]. The repetition of @deva[लङ्] indicates this applies to actual @deva[लङ्], not to @deva[लोट्] treated like @deva[लङ्]. Hence @deva[लोट्] forms: @deva[बिभ्यतु], @deva[जाग्रतु], @deva[विदन्तु] (no @deva[जुस्]).",
            "advanced": "Per @deva[शाकटायन], @deva[जुस्] optionally substitutes @deva[झि] in @deva[लङ्] of @deva[आकारान्त] roots: @deva[अयुः]/अयान्, @deva[अवुः]/अवान्. The explicit @deva[लङ्] mention (despite contextual availability) creates a @deva[जñापक] (interpretive implication): this rule applies only to true @deva[लङ्], not to lakāras treated as @deva[लङ्] (like @deva[लोट्] by @ref[3.4.85]). Thus @ref[3.4.109]'s @deva[जुस्] doesn't extend to @deva[लोट्]: @deva[बिभ्यतु], @deva[जाग्रतु], @deva[विदन्तु]. The @deva[एव] anticipates the next sūtra."
        }
    },
    "34112": {
        "en": {
            "simple": "According to @deva[शाकटायन], @deva[जुस्] also replaces @deva[झि] in the imperfect of the root @deva[द्विष्] 'to hate'.",
            "standard": "Per @deva[शाकटायन], @deva[जुस्] optionally replaces @deva[झि] in @deva[लङ्] of @deva[द्विष्] 'to hate'. Thus @deva[अद्विषुः] (Śākaṭāyana's form) or @deva[अद्विषन्] (others' view).",
            "advanced": "This sūtra extends @deva[शाकटायन]'s @deva[जुस्] option to @deva[द्विष्] in @deva[लङ्], though @deva[द्विष्] is not @deva[आ]-final. This is a separate provision: @deva[अद्विषुः] (@deva[शाकटायन]) vs. @deva[अद्विषन्] (others). The continued @deva[एव] from @ref[3.4.111] marks this as @deva[शाकटायन]-specific."
        }
    },
    "34113": {
        "en": {
            "simple": "All the @deva[तिङ्] personal endings and all affixes marked with @deva[श्] are called @deva[सार्वधातुक].",
            "standard": "Two categories of affixes are designated @deva[सार्वधातुक] ('pertaining to the whole verb'): (1) all 18 @deva[तिङ्] endings enumerated in @ref[3.4.78], and (2) any affix with indicatory @deva[श्]. This designation affects various operations including vikaraṇa application and vowel changes. Examples: @deva[स्वपिति], @deva[रोदिति], @deva[पचमानः]. Exceptions: @deva[लिट्] and @deva[आशीर्लिङ्] are treated separately.",
            "advanced": "This sūtra defines @deva[सार्वधातुक] to include: (1) @deva[तिङ्] (@deva[तिप्]-through-@deva[महिङ्], @ref[3.4.78]), and (2) @deva[शित्] affixes (those with indicatory @deva[श्]). The term applies to verbal affixes only (anuvṛtti of @deva[धातोः] from @ref[3.1.91]). @deva[सार्वधातुक] affixes trigger @deva[शप्]-class vikaraṇas and block @deva[इट्] augment. Examples: @deva[पचति] (तिङ् = सार्वधातुक), @deva[पचमानः] (शानच् is शित् = सार्वधातुक). Contrast @deva[लिट्] and @deva[आशीर्लिङ्] treated by @ref[3.4.115]-@ref[3.4.116]."
        }
    },
    "34114": {
        "en": {
            "simple": "All other verbal affixes—those that are neither @deva[तिङ्] nor marked with @deva[श्]—are called @deva[आर्धधातुक].",
            "standard": "Verbal affixes that are not @deva[तिङ्] and lack indicatory @deva[श्] are called @deva[आर्धधातुक] ('pertaining to half the verb'). These include @deva[तृ], @deva[तुम्], @deva[तव्य], etc. @deva[आर्धधातुक] affixes trigger @deva[इट्] augment by @ref[7.2.35]. Examples: @deva[लविता], @deva[लवितुम्], @deva[लवितव्यम्]. The @deva[धातोः] from @ref[3.1.91] continues—only affixes applied to verbal roots receive these designations; nominal affixes like @deva[भ्याम्] after @deva[लू] don't.",
            "advanced": "The @deva[आर्धधातुक] designation applies to verbal affixes that are neither @deva[तिङ्] nor @deva[शित्]—the residue after @ref[3.4.113]. These include kṛt affixes like @deva[तृच्], @deva[तुमुन्], @deva[तव्यत्], @deva[क्त], @deva[क्त्वा]. They trigger @deva[इट्] (@ref[7.2.35]), guṇa (@ref[7.3.84]), and don't take @deva[शप्]-class vikaraṇas. The @deva[धातोः] anuvṛtti (@ref[3.1.91]) restricts this: case endings like @deva[भ्याम्] after @deva[लू] aren't @deva[आर्धधातुक] (hence @deva[लूभ्याम्], @deva[लूभिः] without guṇa). Similarly @deva[सन्] after @deva[गुप्], @deva[तिज्], @deva[कित्] (@ref[3.1.5]) without @deva[धातोः] anuvṛtti isn't @deva[आर्धधातुक]: @deva[जुगुप्सते] (no @deva[इट्])."
        }
    },
    "34115": {
        "en": {
            "simple": "The @deva[तिङ्] endings of @deva[लिट्] (perfect tense) are also classified as @deva[आर्धधातुक].",
            "standard": "Though @deva[तिङ्] endings are normally @deva[सार्वधातुक] (@ref[3.4.113]), the @deva[तिङ्] endings of @deva[लिट्] (perfect) are exceptionally classified as @deva[आर्धधातुक]. This means they trigger @deva[इट्] (@deva[पेचिथ], @deva[शेकिथ]) and don't take @deva[शप्]-class vikaraṇas. From @deva[ग्लै] → @deva[जग्ले] (where @deva[आ] elides by @ref[6.4.64] because the affix is @deva[आर्धधातुक]).",
            "advanced": "This sūtra overrides @ref[3.4.113] for @deva[लिट्]: its @deva[तिङ्] endings are @deva[आर्धधातुक], not @deva[सार्वधातुक]. Consequences: (1) @deva[इट्] augment applies (@ref[7.2.35]): @deva[पेचिथ], @deva[शेकिथ]; (2) no @deva[शप्]-class vikaraṇas; (3) @deva[आकार]-elision by @ref[6.4.64] applies: @deva[ग्लै] → @deva[ग्ला] (@ref[6.1.45]) → @deva[जग्ले] (आ elides before @deva[आर्धधातुक]); similarly @deva[म्लै] → @deva[मम्ले]. The @deva[लिट्] thus patterns with kṛt affixes rather than other @deva[तिङ्]-bearing lakāras."
        }
    },
    "34116": {
        "en": {
            "simple": "The @deva[तिङ्] endings of the benedictive @deva[लिङ्] (@deva[आशीर्लिङ्]) are also @deva[आर्धधातुक].",
            "standard": "When @deva[लिङ्] expresses benediction (@deva[आशिषि]), its @deva[तिङ्] endings are classified as @deva[आर्धधातुक]. This blocks @deva[शप्]-class vikaraṇas and triggers @deva[इट्]. From @deva[लू] → @deva[लविषीष्ट], from @deva[पू] → @deva[पविषीष्ट] (with @deva[इट्]). In contrast, the optative (@deva[विधिलिङ्]) retains @deva[सार्वधातुक] treatment with vikaraṇas: @deva[लुनीयात्], @deva[पुनीयात्].",
            "advanced": "The @deva[आशीर्लिङ्] (benedictive @deva[लिङ्]) has @deva[आर्धधातुक] @deva[तिङ्] endings, contrasting with @deva[विधिलिङ्] (optative) which remains @deva[सार्वधातुक]. Consequences for @deva[आशीर्लिङ्]: (1) @deva[इट्] augment: @deva[लविषीष्ट], @deva[पविषीष्ट]; (2) no vikaraṇas. For @deva[विधिलिङ्]: @deva[लुनीयात्], @deva[पुनीयात्] (with @deva[श्ना] vikaraṇa). This distinction explains the morphological differences between 'may you cut' (benedictive wish) vs. 'you should cut' (potential/optative)."
        }
    },
    "34117": {
        "en": {
            "simple": "In Vedic texts, the distinction between @deva[सार्वधातुक] and @deva[आर्धधातुक] is not strictly maintained.",
            "standard": "In Vedic Sanskrit (@deva[छन्दसि]), the @deva[सार्वधातुक]/@deva[आर्धधातुक] distinction is applied flexibly. Sometimes @deva[तिङ्] and @deva[शित्] affixes are treated as @deva[आर्धधातुक] (@deva[वर्धन्तु] for @deva[वर्धयन्तु], with @deva[णिच्] elision by @ref[6.4.51]). Sometimes @deva[आर्धधातुक] affixes are treated as @deva[सार्वधातुक] (@deva[विशृण्विरे], with @deva[श्नु] vikaraṇa in @deva[लिट्]). Sometimes both treatments apply simultaneously (@deva[उपस्थेयाम्]: @deva[स्] elides as if @deva[सार्वधातुक], @deva[आ] → @deva[ए] as if @deva[आर्धधातुक]).",
            "advanced": "This sūtra declares Vedic flexibility regarding @deva[सार्वधातुक]/@deva[आर्धधातुक]. Examples: (1) @deva[तिङ्]/@deva[शित्] as @deva[आर्धधातुक]: @deva[वर्धन्तु] (not @deva[वर्धयन्तु])—@deva[लोट्] treated as @deva[आर्धधातुक], so @deva[णिच्] elides by @ref[6.4.51]. (2) @deva[आर्धधातुक] as @deva[सार्वधातुक]: @deva[विशृण्विरे]—@deva[लिट्] treated as @deva[सार्वधातुक], taking @deva[श्नु] vikaraṇa; @deva[वि] + @deva[शृ] + @deva[श्नु] + @deva[इरे] → @deva[विशृण्विरे] (उ → व् by @ref[6.4.87]). Similarly @deva[सुन्विरे]. (3) Simultaneous both: @deva[उपस्थेयाम्] @deva[शरणं] @deva[बृहन्तम्]—@deva[स्] elides (@ref[7.2.79], treating as @deva[सार्वधातुक]) while @deva[आ] → @deva[ए] (treating as @deva[आर्धधातुक]). Also @deva[स्वस्ति]: treated as @deva[सार्वधातुक], so @deva[अस्] → @deva[भू] (@ref[2.4.52]) doesn't occur."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.4.106-3.4.117 (Batch 8 - Final)")
print("Pāda 3.4 commentary rewrite complete!")
