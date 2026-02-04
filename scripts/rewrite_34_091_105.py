#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.4.91-3.4.105 (Batch 7 of 3.4)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "34091": {
        "en": {
            "simple": "When expressing a wish or benediction, the second person singular @deva[लोट्] ending @deva[सिप्] becomes @deva[तात्], while the verb stays the same as when no suffix were added.",
            "standard": "In expressions of benediction (@deva[आशिषि]), the @deva[परस्मैपद] second person singular ending @deva[सिप्] of @deva[लोट्] is replaced by @deva[तात्]. Additionally, the verbal base retains its uninflected form (@deva[धातुस्वरूप])—that is, the stem appears as if no personal ending were attached. Example: @deva[भवतात्] 'may you prosper', @deva[एधतात्] 'may you thrive'.",
            "advanced": "This sūtra teaches that when @deva[लोट्] conveys benediction (@deva[आशिषि]), @deva[सिप्] (second person singular @deva[परस्मैपद]) is replaced by @deva[तात्], and the @deva[अङ्ग] remains @deva[धातुस्वरूप]—appearing in its root form without vikaraṇa-induced modifications. The term @deva[धातुस्वरूप] indicates the base stays as if no @deva[तिङ्] were following. Forms: @deva[भू] → @deva[भवतात्], @deva[एध्] → @deva[एधतात्]. This contrasts with ordinary @deva[लोट्] second singular @deva[भव] where @deva[सिप्] becomes @deva[हि] and then is elided."
        }
    },
    "34092": {
        "en": {
            "simple": "This @deva[तात्] ending can also be used for the third person singular, optionally.",
            "standard": "The substitute @deva[तात्] that replaces @deva[सिप्] in benedictions may optionally replace @deva[तिप्] (third person singular) as well. Thus one can say either @deva[एधतात्] (for 'may he thrive') or the regular @deva[एधतु]. The option (@deva[वा]) allows both forms.",
            "advanced": "This sūtra extends the scope of @deva[तात्] substitution: it optionally replaces @deva[तिप्] (third person singular @deva[परस्मैपद]) in addition to @deva[सिप्]. The @deva[वा] indicates optionality. Forms: @deva[एधतु] (regular) or @deva[एधतात्] (benedictive alternate), @deva[भवतु] or @deva[भवतात्]. The @deva[धातुस्वरूप] condition from @ref[3.4.91] continues in anuvṛtti."
        }
    },
    "34093": {
        "en": {
            "simple": "In Vedic language, @deva[तात्] can also be used for the first person, replacing @deva[मिप्].",
            "standard": "In Vedic usage (@deva[छन्दसि]), @deva[तात्] optionally replaces @deva[मिप्] (first person singular @deva[परस्मैपद]) as well. This extends the benedictive @deva[तात्] substitution to all three singular persons in the Vedas.",
            "advanced": "For Vedic texts, @deva[तात्] optionally substitutes @deva[मिप्] (first singular @deva[परस्मैपद]) in addition to the second and third persons. The continued anuvṛtti of @deva[वा] makes this optional. This rule demonstrates the greater flexibility of Vedic morphology compared to classical Sanskrit."
        }
    },
    "34094": {
        "en": {
            "simple": "In Vedic texts, @deva[ताम्] and @deva[तम्] can also become @deva[ताम्] and @deva[तम्] (i.e., remain unchanged or undergo specific substitutions) in certain persons.",
            "standard": "In Vedic usage, the dual and plural forms @deva[ताम्] and @deva[थम्] (which are themselves substitutes for @deva[तस्] and @deva[थस्] in @deva[ङित्] lakāras by @ref[3.4.101]) can be used for various persons. This shows Vedic flexibility in personal ending distribution.",
            "advanced": "This sūtra addresses Vedic interchange of @deva[ताम्] and @deva[थम्] across persons. The forms @deva[ताम्] (@deva[तस्] substitute) and @deva[थम्] (@deva[थस्] substitute) from @ref[3.4.101] can appear in non-standard person positions in the Vedas. Example: @deva[वर्धताम्] may function for third dual even where standard rules would produce different forms."
        }
    },
    "34095": {
        "en": {
            "simple": "In Vedic texts, the endings @deva[तन्] and @deva[आम्] may optionally replace the regular plural endings.",
            "standard": "In Vedic usage, @deva[तन्] and @deva[आम्] can optionally serve as substitutes for regular plural @deva[परस्मैपद] endings. These archaic forms appear in Vedic texts where classical Sanskrit would use standard conjugational endings.",
            "advanced": "The Vedas permit @deva[तन्] and @deva[आम्] as optional alternatives to standard plural @deva[तिङ्] endings. These substitute various @deva[बहुवचन] (plural) endings in @deva[परस्मैपद], yielding archaic Vedic forms not found in classical usage."
        }
    },
    "34096": {
        "en": {
            "simple": "In @deva[लोट्], the @deva[आत्मनेपद] endings replace their corresponding @deva[परस्मैपद] endings when preceded by the word @deva[मा] (prohibition marker).",
            "standard": "When the prohibitive particle @deva[मा] precedes the verb, the @deva[आत्मनेपद] endings of @deva[लोट्] are used in place of the corresponding @deva[परस्मैपद] endings. Thus @deva[मा] @deva[भूथाः] 'do not be' uses @deva[आत्मनेपद] @deva[थास्] instead of @deva[परस्मैपद].",
            "advanced": "This sūtra mandates @deva[आत्मनेपद] substitution in prohibitive constructions with @deva[मा]. After @deva[मा], even verbs that ordinarily take @deva[परस्मैपद] use @deva[आत्मनेपद] endings. The technical term is @deva[माङि] @deva[लुङ्लोटोः]—but here specifically for @deva[लोट्]. Forms: @deva[मा] @deva[भूथाः], @deva[मा] @deva[कार्षीष्ठाः]. This parallels @ref[3.3.175] and @ref[3.3.176] for @deva[लुङ्]."
        }
    },
    "34097": {
        "en": {
            "simple": "In Vedic texts, @deva[परस्मैपद] endings may also remain as @deva[परस्मैपद] even after @deva[मा].",
            "standard": "In Vedic usage, the substitution of @deva[आत्मनेपद] for @deva[परस्मैपद] after @deva[मा] is optional—@deva[परस्मैपद] endings may be retained. Thus both @deva[मा] @deva[कृथाः] (@deva[आत्मनेपद]) and @deva[मा] @deva[कृधि] (@deva[परस्मैपद]) are possible in the Vedas.",
            "advanced": "This sūtra makes the @deva[आत्मनेपद] substitution after @deva[मा] optional in Vedic texts. While @ref[3.4.96] mandates @deva[आत्मनेपद] after @deva[मा] in classical Sanskrit, the Vedas permit both padas. The @deva[परस्मैपद] of @deva[लोट्] continues in anuvṛtti from @ref[3.4.85] for context."
        }
    },
    "34098": {
        "en": {
            "simple": "In Vedic @deva[लेट्] (subjunctive), the final @deva[स्] of first person endings may optionally be dropped.",
            "standard": "In @deva[लेट्] (Vedic Subjunctive), the @deva[स्] of first person endings is optionally elided. Thus @deva[करवाव] or @deva[करवावः], @deva[करवाम] or @deva[करवामः]. The specification 'first person' indicates @deva[स्] is not elided in other persons.",
            "advanced": "For @deva[लेट्] (Vedic Subjunctive), this sūtra teaches optional deletion of final @deva[स्] in @deva[उत्तमपुरुष] (first person) endings. The dual @deva[वस्] → @deva[व] (optional), and plural @deva[मस्] → @deva[म] (optional). By specifying @deva[उत्तमस्य], non-first-person forms retain @deva[स्]. This rule is specific to @deva[लेट्] and superseded by @ref[3.4.99] for @deva[ङित्] lakāras."
        }
    },
    "34099": {
        "en": {
            "simple": "For verb forms marked with @deva[ङ्] (like @deva[लङ्], @deva[लुङ्], @deva[लिङ्], @deva[लृङ्]), the final @deva[स्] of first person endings is always dropped.",
            "standard": "When the lakāra has indicatory @deva[ङ्] (@deva[लङ्], @deva[लिङ्], @deva[लुङ्], @deva[लृङ्]), the @deva[स्] of first person endings is obligatorily (not optionally) elided. Thus @deva[अपचाव], @deva[अपचाम] (not @deva[अपचावः], @deva[अपचामः]). The word @deva[नित्यम्] 'always' blocks the anuvṛtti of 'optionally' from the previous sūtra.",
            "advanced": "This sūtra mandates @deva[स्]-elision in @deva[उत्तमपुरुष] for all @deva[ङित्] lakāras: @deva[लङ्] (imperfect), @deva[लिङ्] (optative/benedictive), @deva[लुङ्] (aorist), @deva[लृङ्] (conditional). The term @deva[नित्यम्] makes this obligatory, overriding the optionality of @ref[3.4.98]. Forms: @deva[अपचाव] (1st dual imperfect), @deva[अपचाम] (1st plural imperfect)."
        }
    },
    "34100": {
        "en": {
            "simple": "In verb forms with @deva[ङ्]-marked tenses, the @deva[इ] of @deva[परस्मैपद] endings is dropped.",
            "standard": "When a @deva[ङित्] lakāra (@deva[लङ्], @deva[लिङ्], @deva[लुङ्], @deva[लृङ्]) governs the form, the @deva[इ] of @deva[परस्मैपद] endings is elided. Thus @deva[ति] → @deva[त्], @deva[सि] → @deva[स्]. However, @deva[आत्मनेपद] @deva[इ] is not elided since @deva[परस्मैपद] continues in anuvṛtti from @ref[3.4.97]. Forms: @deva[अपचत्], @deva[अपाक्षीत्] (not @deva[अपचति]).",
            "advanced": "This sūtra elides the final @deva[इ] of @deva[परस्मैपद] endings when governed by a @deva[ङित्] lakāra. The @deva[परस्मैपदानाम्] specification (continuing from @ref[3.4.97]) excludes @deva[आत्मनेपद]. Thus: @deva[अपचत्] (@deva[ति] → @deva[त्]), @deva[अपाक्षीत्], but @deva[आत्मनेपद] forms like @deva[अपचावहि], @deva[अपचामहि] retain @deva[इ]. Cross-reference @ref[7.1.3] for general @deva[झ] → @deva[अन्त] substitution."
        }
    },
    "34101": {
        "en": {
            "simple": "In @deva[ङ्]-marked tenses, the endings @deva[तस्], @deva[थस्], @deva[थ], and @deva[मिप्] are replaced by @deva[ताम्], @deva[तम्], @deva[त], and @deva[आम्] respectively.",
            "standard": "For @deva[ङित्] lakāras, four @deva[परस्मैपद] endings undergo substitution: @deva[तस्] → @deva[ताम्], @deva[थस्] → @deva[तम्], @deva[थ] → @deva[त], @deva[मिप्] → @deva[आम्]. Examples: @deva[अपचताम्] (3rd dual), @deva[अपचतम्] (2nd dual), @deva[अपचत] (2nd plural), @deva[अपचम्] (1st singular aorist @deva[अपाक्षम्]).",
            "advanced": "This sūtra provides specific substitutes for four @deva[परस्मैपद] endings in @deva[ङित्] lakāras: (1) @deva[तस्] (3rd dual) → @deva[ताम्], (2) @deva[थस्] (2nd dual) → @deva[तम्], (3) @deva[थ] (2nd plural) → @deva[त], (4) @deva[मिप्] (1st singular) → @deva[आम्]. The @deva[आम्] substitute for @deva[मिप्] combines with prior @deva[स्]-elision to yield forms like @deva[अपचम्], @deva[अपाक्षम्]. Compare the standard @deva[लट्] paradigm where @deva[मिप्] → @deva[मि]."
        }
    },
    "34102": {
        "en": {
            "simple": "In @deva[लिङ्] (optative and benedictive), all @deva[तिङ्] endings receive the augment @deva[सीयुट्] added before them.",
            "standard": "The @deva[तिङ्] endings of @deva[लिङ्] (both optative and benedictive) take the augment @deva[सीयुट्]. The @deva[ट्] indicates the augment is prefixed to the ending (@ref[1.1.46]). In the optative, @deva[स्] is elided by @ref[7.2.79] and @deva[य्] by @ref[6.1.66] before consonant-initial endings, yielding forms like @deva[पचेत्], @deva[पचेरन्]. In the benedictive, the augment appears more fully: @deva[पक्षीष्ट].",
            "advanced": "This sūtra teaches that all @deva[तिङ्] replacements of @deva[लिङ्] receive @deva[सीयुट्] as an āgama. The @deva[ट्] is an @deva[इत्] marking placement before the pratyaya (@ref[1.1.46]); @deva[उ] is for pronunciation. For विधिलिङ् (optative): @deva[स्] deletes by @ref[7.2.79]; @deva[य्] deletes before consonant by @ref[6.1.66]; result: @deva[पचेत्], @deva[पचेयाताम्], @deva[पचेरन्] (@ref[3.4.105]). For आशीर्लिङ् (benedictive): @deva[पक्षीष्ट], @deva[पक्षीयास्ताम्], @deva[पक्षीरन्]."
        }
    },
    "34103": {
        "en": {
            "simple": "For @deva[परस्मैपद] forms in the optative specifically, the augment @deva[यासुट्] replaces @deva[सीयुट्], and the endings are treated as if they had @deva[ङ्].",
            "standard": "When @deva[परस्मैपद] endings of @deva[लिङ्] follow, they take @deva[यासुट्] (not @deva[सीयुट्]) as their augment. This @deva[यासुट्] is specially marked as @deva[उदात्त] (acutely accented). The endings are treated as @deva[ङित्] for purposes of blocking guṇa/vṛddhi. Forms: @deva[कुर्यात्], @deva[कुर्याताम्], @deva[कुर्युः]. In optative, @deva[स्] of @deva[यासुट्] elides by @ref[7.2.79].",
            "advanced": "This sūtra provides @deva[यासुट्] as the augment for @deva[परस्मैपद] @deva[लिङ्], overriding @deva[सीयुट्] of @ref[3.4.102]. The @deva[उट्] is @deva[इत्], leaving @deva[यास्] as the actual āgama. Marked @deva[उदात्त] (exception to general @deva[अनुदात्त] āgamas). The statement @deva[ङितश्च] reintroduces @deva[ङित्] treatment for the endings—this establishes the paribhāṣā @deva[लकाराश्रयङित्वमादेशानां न भवति]: inherent @deva[ङ्] of lakāras doesn't transfer to substitutes. @deva[स्] elides by @ref[7.2.79]: @deva[कुर्यात्], @deva[कुर्याताम्]; with @ref[3.4.108] and @ref[6.1.96]: @deva[कुर्युः]."
        }
    },
    "34104": {
        "en": {
            "simple": "For the benedictive (@deva[आशीर्लिङ्]), @deva[यासुट्] is also used with @deva[उदात्त] accent, and the endings are treated as having @deva[क्].",
            "standard": "The benedictive @deva[लिङ्] (expressing wishes/blessings) also takes @deva[यासुट्] with @deva[उदात्त] accent. Its endings are treated as @deva[कित्] (having indicatory @deva[क्]), which affects vowel strengthening and semi-vowel changes differently than @deva[ङित्]. @deva[कित्] and @deva[ङित्] both block guṇa/vṛddhi but differ regarding @deva[जागृ] (@ref[7.3.85]) and semi-vowel vocalization (@ref[6.1.15], @ref[6.1.16]). Forms: @deva[इष्यात्], @deva[जागर्यात्]; in optative @deva[वच्यात्] (no samprasāraṇa), in benedictive @deva[उच्यात्] (with vocalization).",
            "advanced": "The @deva[आशीर्लिङ्] (benedictive) takes @deva[यासुट्] (@deva[उदात्त] accented) per this sūtra, with endings treated as @deva[कित्] rather than @deva[ङित्]. While both @deva[ङित्] and @deva[कित्] block guṇa/vṛddhi by @ref[1.1.5], they differ in: (1) @deva[ङित्] triggers guṇa of @deva[जागृ] by @ref[7.3.85], @deva[कित्] doesn't; (2) samprasāraṇa rules @ref[6.1.15]-@ref[6.1.16] apply differently. Thus विधिलिङ् @deva[वच्यात्] (no samprasāraṇa) vs. आशीर्लिङ् @deva[उच्यात्] (vocalization occurs). Similarly @deva[जागृयात्] (optative) but @deva[जागर्यात्] (benedictive, no guṇa)."
        }
    },
    "34105": {
        "en": {
            "simple": "In @deva[लिङ्], the ending @deva[झ] (third person plural @deva[परस्मैपद]) is replaced by @deva[रन्].",
            "standard": "In @deva[लिङ्] (both optative and benedictive), @deva[झ] (third person plural @deva[परस्मैपद]) is replaced by @deva[रन्], not by the usual @deva[अन्त] (@ref[7.1.3]). Forms: @deva[पचेरन्] (optative 'they may cook'), @deva[यजेरन्], @deva[कृषीरन्].",
            "advanced": "This sūtra provides @deva[रन्] as the substitute for @deva[झ] (3rd plural @deva[परस्मैपद]) specifically in @deva[लिङ्], overriding the general @deva[झ] → @deva[अन्त] of @ref[7.1.3]. The @deva[र्] appears after the @deva[सीयुट्]/@deva[यासुट्] augments. Forms: विधिलिङ् @deva[पचेरन्], @deva[यजेरन्], @deva[कृषीरन्]; आशीर्लिङ् @deva[पक्षीरन्]. This @deva[रन्] substitute is unique to @deva[लिङ्]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.4.91-3.4.105 (Batch 7)")
