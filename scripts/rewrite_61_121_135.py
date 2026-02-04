#!/usr/bin/env python3
"""Rewrite commentary for 6.1.121-135 (go-sandhi, pluta/pragṛhya, div substitution, skoḥ adhikāra)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61121": {
        "en": {
            "simple": "In the Yajurveda, when the @deva[अनुदात्त] (grave-accented) @deva[अ] of @deva[अवपथाः] follows @deva[ए] or @deva[ओ], both vowels retain their original forms. So @deva[रुद्रेभ्यो अवपथाः] maintains the hiatus.",
            "standard": "This sūtra specifies a Yajurveda @deva[प्रकृतिभाव] for the word @deva[अवपथाः] ('portions'). When its initial @deva[अनुदात्त] @deva[अ] follows @deva[ए/ओ], no sandhi occurs. Example: @deva[त्री रुद्रेभ्यो अवपथाः]—the @deva[ओ] of @deva[रुद्रेभ्यो] and @deva[अ] of @deva[अवपथाः] are both preserved.",
            "advanced": "This is a lexically specific @deva[प्रकृतिभाव] rule for Yajurveda. The @deva[अनुदात्त] condition indicates tonal specification—the @deva[अ] must bear the grave accent. The word @deva[अवपथाः] appears in specific Yajurveda mantras where hiatus is required for proper recitation. Such rules document the phonological peculiarities of transmitted Vedic texts."
        }
    },
    "61122": {
        "en": {
            "simple": "After @deva[गो] ('cow'), the following @deva[अ] may optionally be kept separate—both in Vedic and Classical Sanskrit. So @deva[गो + अग्रम्] can be either @deva[गोऽग्रम्] (with sandhi) or @deva[गो अग्रम्] (without).",
            "standard": "This sūtra provides an optional @deva[प्रकृतिभाव] for @deva[गो] followed by @deva[अ]. The @deva[वा] indicates optionality, and @deva[सर्वत्र] extends this to both Vedic and Classical usage. Thus @deva[गो + अग्रम्] → @deva[गोऽग्रम्] (with @deva[पूर्वरूप]) or @deva[गो अग्रम्] (hiatus preserved). Both forms are grammatically correct.",
            "advanced": "The @deva[सर्वत्र] ('everywhere') is significant—most Vedic options are restricted to @deva[छन्दस्], but this extends to @deva[भाषा] (Classical Sanskrit). This reflects the special status of @deva[गो] as an archaic, high-frequency stem with preserved variant behaviors. The optional hiatus may have stylistic or metrical motivations even in classical contexts."
        }
    },
    "61123": {
        "en": {
            "simple": "According to @deva[स्फोटायन], the @deva[ओ] of @deva[गो] becomes @deva[अव्] when any vowel follows. So @deva[गो + अग्रम्] becomes @deva[गवग्रम्] under this view.",
            "standard": "This sūtra presents @deva[स्फोटायन]'s opinion (@deva[मत]) that @deva[गो] undergoes @deva[अवङ्]-substitution before any following vowel. The @deva[ओ] → @deva[अव्] change yields forms like @deva[गवाक्षः] ('cow-eye/window'), @deva[गवेन्द्रः] ('lord of cows'). This @deva[आचार्यमत] provides an alternative analysis to the standard sandhi treatment.",
            "advanced": "The @deva[स्फोटायन] reference indicates a pre-Pāṇinian or alternative grammatical tradition. The @deva[अवङ्]-substitution (@deva[ओ] → @deva[अव्]) treats @deva[गो] as having an underlying @deva[गव्] form that surfaces before vowels. This 'morphophonemic' analysis competes with treating @deva[गोऽग्रम्] as regular @deva[पूर्वरूप] sandhi. Both yield valid forms; the choice is systematic preference."
        }
    },
    "61124": {
        "en": {
            "simple": "The @deva[ओ] of @deva[गो] must become @deva[अव्] when followed by the vowels found in @deva[इन्द्र] (that is, @deva[इ] and @deva[अ]). So @deva[गो + इन्द्रः] must be @deva[गवेन्द्रः], not @deva[*गो इन्द्रः].",
            "standard": "This sūtra makes @deva[अव्]-substitution obligatory for @deva[गो] before the vowels @deva[इ] and @deva[अ] (the vowels in @deva[इन्द्र]). Thus: @deva[गो + इन्द्रः] → @deva[गवेन्द्रः]; @deva[गो + अन्द्र] → @deva[गवन्द्र]. The @deva[नित्य] (obligatory) nature contrasts with the optional rules in @ref[6.1.122]-@ref[6.1.123].",
            "advanced": "The phrase @deva[इन्द्रे च] uses @deva[इन्द्र] as a @deva[उपलक्षण] (indicator) for the vowels @deva[इ] and @deva[अ]. Before these specific vowels, @deva[गो] → @deva[गव्] is mandatory, overriding the optionality of @ref[6.1.122]. This creates a split paradigm: @deva[गवेन्द्रः] (obligatory) vs. @deva[गोऽग्रम्/गवग्रम्] (optional). The rule ensures consistent forms in common compounds."
        }
    },
    "61125": {
        "en": {
            "simple": "@deva[प्लुत] vowels (prolonged for calling, like @deva[आ३]) and @deva[प्रगृह्य] vowels (marked for non-sandhi, like dual endings) remain unchanged when followed by another vowel. So @deva[देवदत्ता३ + एहि] stays as @deva[देवदत्ता३ एहि].",
            "standard": "This sūtra establishes that @deva[प्लुत] (prolonged, @ref[8.2.82]) and @deva[प्रगृह्य] (held apart, @ref[1.1.11]-@ref[1.1.19]) vowels undergo @deva[प्रकृतिभाव]—they resist sandhi with following vowels. Examples: @deva[देवदत्ता३ एहि] (calling with @deva[प्लुत]); @deva[हरी एतौ] (dual @deva[ई] is @deva[प्रगृह्य]).",
            "advanced": "Both @deva[प्लुत] and @deva[प्रगृह्य] are prosodically or morphologically marked vowels that retain their identity across word boundaries. @deva[प्लुत] involves trimoraic lengthening for vocative/calling contexts. @deva[प्रगृह्य] includes dual endings (@deva[ई], @deva[ऊ], @deva[ए] of dual), particles (@deva[आ], @deva[उ], @deva[ओ] exclamatory), and certain forms. This rule prevents their phonological 'absorption' in sandhi."
        }
    },
    "61126": {
        "en": {
            "simple": "In Vedic literature, the particle @deva[आ] becomes nasalized (@deva[आँ]) before a vowel and retains its form (no sandhi). So @deva[आँ अपः] in the Ṛgveda shows the nasalized @deva[आ] separate from @deva[अपः].",
            "standard": "This sūtra provides a Vedic rule for the adverb @deva[आ] (a preverb meaning 'towards'). Before a vowel, it becomes @deva[आँ] (nasalized @deva[आ], marked with @deva[अनुस्वार]) and undergoes @deva[प्रकृतिभाव]. Example from Ṛgveda: @deva[अभ्र आँ अपः] where @deva[आँ] remains distinct.",
            "advanced": "The nasalization (@deva[अनुनासिक]) of @deva[आ] is a Vedic phonological feature absent in Classical Sanskrit. The @deva[प्रकृतिभाव] preserves hiatus, and the nasalization marks the morpheme boundary audibly. This rule documents a feature of Vedic pronunciation that aids in @deva[पदपाठ] (word-by-word recitation) and @deva[क्रमपाठ] (sequential recitation) traditions."
        }
    },
    "61127": {
        "en": {
            "simple": "According to @deva[शाकल्य], simple vowels (except @deva[अ]) keep their form before a different vowel—long vowels become short. So @deva[ददाति + ईश्वरः] can stay as @deva[ददाति ईश्वरः] (with @deva[इ] shortened if originally long).",
            "standard": "This sūtra presents @deva[शाकल्य]'s view: @deva[इ उ ऋ ऌ] (simple vowels excluding @deva[अ]) retain their form before a non-homogeneous (@deva[असवर्ण]) vowel, with long vowels shortened. This is an alternative to standard @deva[यण्] sandhi. So @deva[ददाती + ईश्वरः] → @deva[ददाति ईश्वरः] (not @deva[ददात्यीश्वरः]).",
            "advanced": "The @deva[शाकल्य] school represents a @deva[शाखा]-specific tradition, likely the Śākala recension of Ṛgveda. The @deva[ह्रस्वः] condition means long @deva[ई ऊ] become short @deva[इ उ] to satisfy @deva[प्रकृतिभाव]. This preserves syllable count while avoiding @deva[यण्] glide formation. Such variant treatments document the diversity of Vedic phonological traditions."
        }
    },
    "61128": {
        "en": {
            "simple": "According to @deva[शाकल्य], a simple vowel before @deva[ऋ] retains its form (with long becoming short). So @deva[खट्वा + ऋश्यः] can be @deva[खट्वा ऋश्यः] in Śākala recitation.",
            "standard": "This sūtra extends @deva[शाकल्य]'s @deva[प्रकृतिभाव] rule to contexts where @deva[ऋ] follows. A simple vowel before @deva[ऋ] is retained (long → short). Example: @deva[खट्वा ऋश्यः] (not @deva[खट्वार्श्यः]), @deva[कुमारि ऋषभः] (not @deva[कुमार्यृषभः]). This is a Vedic option.",
            "advanced": "The @deva[ऋकारे] specification separates this from @ref[6.1.127]. While @ref[6.1.127] handles non-homogeneous vowels generally, this sūtra specifically addresses @deva[ऋ]-following contexts. The @deva[ऋ] vowel has special phonological behavior (its semivowel @deva[र्] creates complex clusters), motivating a separate rule. @deva[शाकल्य]'s tradition thus permits hiatus before @deva[ऋ]."
        }
    },
    "61129": {
        "en": {
            "simple": "Before the word @deva[इति] in the @deva[पदपाठ] (word-by-word Vedic recitation), a @deva[प्लुत] (prolonged) vowel is treated as a regular vowel. So @deva[इति] after @deva[आ३] allows normal sandhi rules.",
            "standard": "In @deva[पदपाठ] tradition, @deva[इति] is added after significant units for clarity. This sūtra specifies that before @deva[इति], a @deva[प्लुत] vowel loses its special @deva[प्रगृह्य]-like status and behaves as a regular (@deva[अप्लुत]) vowel. Thus normal sandhi can apply between the @deva[प्लुत] vowel and @deva[इति].",
            "advanced": "The @deva[पदपाठ] is a recitation style that separates sandhi-ed words for pedagogical clarity. The term @deva[उपस्थित] refers to the presence or addition of @deva[इति] as a marker. The rule ensures that @deva[प्लुत] marking (used for calling/emphasis) doesn't block expected sandhi in this technical recitation context. This is a meta-grammatical rule about recitation practices."
        }
    },
    "61130": {
        "en": {
            "simple": "According to @deva[चाक्रवर्मण], a @deva[प्लुत] @deva[ई३] before a vowel can be treated as a regular vowel. So @deva[अस्तु ही३ + इति] can become @deva[अस्तु हीत्यब्रवीत्] or remain @deva[अस्तु ही३ इति].",
            "standard": "This sūtra presents @deva[चाक्रवर्मण]'s opinion that @deva[प्लुत] @deva[ई] (@deva[ई३]) may optionally undergo regular sandhi when followed by a vowel. Thus @deva[ही३ + इति] can yield either @deva[हीति] (with sandhi) or @deva[ही३ इति] (preserving @deva[प्लुत]). The @deva[वा] indicates optionality.",
            "advanced": "The @deva[चाक्रवर्मण] reference indicates another grammatical authority with a specific view on @deva[प्लुत] treatment. This contrasts with @ref[6.1.125] which makes @deva[प्रकृतिभाव] general for @deva[प्लुत]. Here, optionality allows the speaker/reciter to choose between prosodic marking (@deva[प्लुत] preserved) and smooth sandhi. Such @deva[आचार्यमत] rules document variant analyses."
        }
    },
    "61131": {
        "en": {
            "simple": "The stem @deva[दिव्] ('heaven/sky') has its final replaced by @deva[उ] when it forms a @deva[पद] (complete word). So @deva[दिव्] becomes @deva[द्यु] in compounds like @deva[द्युलोकः] ('heavenly world').",
            "standard": "This sūtra provides @deva[उ]-substitution for the final of @deva[दिव्] in @deva[पद] contexts. The stem @deva[दिव्] ('heaven') → @deva[द्यु] when forming a complete word. Thus @deva[दिव् + लोकः] → @deva[द्युलोकः]. The @deva[पद] condition (from @deva[पदान्त]) indicates this applies at word-level, including before @deva[सुप्] endings.",
            "advanced": "The @deva[दिव्] stem shows suppletive alternation: @deva[दिव्] ~ @deva[द्यु] ~ @deva[द्यो]. This rule generates the @deva[द्यु]-form by replacing the final segment with @deva[उ]. The @deva[पद]-condition from @ref[1.4.14] triggers this in word-final and pre-compound contexts. Compare @deva[द्युलोकः] vs. @deva[दिवि] (locative with @deva[दिव्] stem). The stem alternation reflects Proto-Indo-European ablaut patterns."
        }
    },
    "61132": {
        "en": {
            "simple": "After @deva[एतद्] ('this') and @deva[तद्] ('that'), the nominative singular @deva[स्] is dropped before a consonant—except when combined with @deva[क] affixes or @deva[चिद्/चन]. So @deva[एतद् + स्] + consonant = @deva[एतद्] (not @deva[एतस्]).",
            "standard": "This sūtra provides @deva[सु]-lopa (nominative @deva[स्] deletion) for @deva[एतद्] and @deva[तद्] before consonants. The rule excludes @deva[क]-affixed forms (@ref[5.3.71]) and @deva[चिद्]/चन combinations. Thus @deva[एतद्] before consonant = @deva[एतद्] (not @deva[एषः/तस्]). Examples: @deva[एतद् ब्रह्म], @deva[तद् विष्णोः].",
            "advanced": "The @deva[हल्] condition (before consonants) triggers @deva[सु]-lopa, yielding the bare stem. The exceptions (@deva[अकि चिन्तेः]) preserve @deva[स्] in forms like @deva[एषः किम्], @deva[स चिद्]. The @deva[तसिलुकि] reference (@ref[5.3.7]) concerns adverbial formations. This rule creates the neuter-like nominative forms @deva[तद्], @deva[एतद्] before consonants, distinct from masculine @deva[सः], @deva[एषः]."
        }
    },
    "61133": {
        "en": {
            "simple": "In Vedic literature, the nominative singular ending after @deva[स्य] is optionally deleted before a consonant. So Vedic phrases may show @deva[स्य] without the @deva[स्] ending before consonant-initial words.",
            "standard": "This sūtra provides a Vedic option for @deva[सु]-lopa (nominative @deva[स्] elision) after forms ending in @deva[स्य]. The @deva[विभाषा] indicates optionality, and @deva[छन्दसि] restricts it to Vedic. Example: @deva[उत स्य वाजी] (Ṛgveda) where @deva[स्य] (for @deva[स्यः]) appears before consonant @deva[व्].",
            "advanced": "The @deva[स्य] here likely refers to forms of the demonstrative or relative with @deva[स्य]-ending (genitive-like forms repurposed nominatively, or stem forms). The @deva[विभाषा] allows both @deva[स्यः] (with @deva[सु]) and @deva[स्य] (without) before consonants. This documents Vedic morphological variation that doesn't survive into Classical Sanskrit."
        }
    },
    "61134": {
        "en": {
            "simple": "The nominative ending of @deva[सस्] ('he') is dropped before a vowel if this makes the verse meter correct. This is a Vedic rule for metrical adjustment.",
            "standard": "This sūtra allows @deva[सु]-lopa for @deva[सस्] (an archaic nominative 'he') before vowels when meter requires it. The condition @deva[पादपूरणे] ('for completing the verse-foot') makes this metrically conditioned. Example: @deva[स एष दाशरथी रामः] where @deva[स] (not @deva[सः]) fits the meter.",
            "advanced": "The form @deva[सस्] is an archaic nominative that alternates with @deva[सः]. The @deva[पादपूरण] condition makes this a metrical license—the deletion occurs when retaining @deva[स्] would violate prosodic requirements. The @deva[कारिका] quoted provides examples showing @deva[स] fitting specific meters. Such rules document the interaction between grammar and Vedic prosody."
        }
    },
    "61135": {
        "en": {
            "simple": "From this sūtra through @ref[6.1.157], understand that '@deva[स्] is added before @deva[क]'. This is an @deva[अधिकार] (governing rule) that controls the following sūtras.",
            "standard": "This is an @deva[अधिकार] sūtra establishing that rules @ref[6.1.135]-@ref[6.1.157] concern the augment @deva[सुट्] (the @deva[स्] added before @deva[क]). The @deva[स्कोः] refers to @deva[स्] before @deva[क], and this @deva[स्] is the @deva[सुट्] augment. All following sūtras until @ref[6.1.157] operate within this domain.",
            "advanced": "The @deva[अधिकार] mechanism allows Pāṇini to state a governing condition once rather than repeating it. The @deva[स्कोः पूर्वस्य] means 'of the @deva[स्] (augment) before @deva[क्]'. This @deva[सुट्] augment appears before @deva[कृत्] affixes beginning with @deva[क्] under specific conditions. The scope extends to @ref[6.1.157], after which new @deva[अधिकार] conditions apply. This section covers @deva[सुट्]-augmentation rules."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.121-6.1.135)")
