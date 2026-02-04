#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 6.1.91-6.1.105 (Batch 7 of 6.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61091": {
        "en": {
            "simple": "@deva[वृद्धि] is the single substitute when @deva[अ/आ] of a prefix (@deva[उपसर्ग]) is followed by short @deva[ऋ] of a verb. Examples: @deva[उप] + @deva[ऋच्छति] → @deva[उपार्च्छति]; @deva[प्र] + @deva[ऋच्छति] → @deva[प्रार्च्छति].",
            "standard": "When an @deva[उपसर्ग] ending in @deva[अ/आ] precedes a @deva[धातु] beginning with @deva[ऋ], @deva[वृद्धि] (@deva[आर्]) replaces both. This overrides @deva[गुण] (@ref[6.1.87]). Examples: @deva[उपार्च्छति], @deva[प्रार्च्छति], @deva[उपाध्रोति]. Not for non-@deva[उपसर्ग]: @deva[खट्वा] + @deva[ऋच्छति] → @deva[खट्वर्च्छति] (@deva[गुण], not @deva[वृद्धि]).",
            "advanced": "@deva[आत्] and @deva[उपसर्गात्] understood. @deva[उपसर्ग] + @deva[ह्रस्व ऋ धातु] → @deva[वृद्धि आर्]. This supersedes @ref[6.1.87] @deva[गुण]. Examples: @deva[उप + ऋच्छति] → @deva[उपार्च्छति]; @deva[प्र + ऋच्छति] → @deva[प्रार्च्छति]; @deva[उप + अध्रोति] → @deva[उपाध्रोति]. Non-@deva[उपसर्ग] triggers @deva[गुण]: @deva[खट्वर्च्छति]."
        }
    },
    "61092": {
        "en": {
            "simple": "According to Āpiśali, @deva[वृद्धि] is optional when @deva[अ/आ] of a prefix is followed by @deva[ऋ] of a denominative verb. Examples: @deva[उपार्षभीयति] or @deva[उपर्षभीयति]; @deva[उपाल्कारीयति] or @deva[उपल्कारीयति].",
            "standard": "For @deva[नामधातु] (denominative) beginning with @deva[ऋ], @deva[वृद्धि] after @deva[उपसर्ग] is optional per Āpiśali: @deva[उपार्षभीयति] or @deva[उपर्षभीयति]; @deva[उपाल्कारीयति] or @deva[उपल्कारीयति]. The @deva[ऋ] and @deva[ऌ] are @deva[सवर्ण], so @deva[ऋ] in @ref[6.1.91] includes @deva[ऌ]. Āpiśali's name is honorary; @deva[वा] alone would suffice.",
            "advanced": "This @deva[आपिशलि-विभाषा] for @deva[नामधातु]: @deva[उपसर्ग] + @deva[ऋ/ऌ-आदि नामधातु] → optional @deva[वृद्धि]. @deva[ऋषभ] → @deva[ऋषभीय] (denominative) → @deva[उपार्षभीयति]/उपर्षभीयति. @deva[ऋ-ऌ सावर्ण्य] extends the rule to @deva[ऌ]-initial. The grammarian's name adds authority but doesn't change the @deva[विभाषा] function."
        }
    },
    "61093": {
        "en": {
            "simple": "For @deva[ओ] of a nominal stem + @deva[अ] of accusative @deva[अम्]/अस्, @deva[आ] is the single substitute. Examples: @deva[गो] + @deva[अम्] → @deva[गाम्]; @deva[गो] + @deva[अस्] → @deva[गाः].",
            "standard": "When @deva[प्रातिपदिक]-final @deva[ओ] is followed by @deva[अ] of accusative endings @deva[अम्]/अस्, @deva[आ] replaces both: @deva[गो + अम्] → @deva[गाम्]; @deva[गो + अस्] → @deva[गाः]. This overrides @deva[वृद्धि] (@ref[7.1.90]). Also @deva[द्यो] → @deva[द्याम्], @deva[द्याः]. The compound @deva[औतः] = @deva[आ] + @deva[ओतः].",
            "advanced": "This @deva[एकादेश] teaches @deva[ओ + अ (अम्/अस्)] → @deva[आ]. Overrides @ref[7.1.90] @deva[वृद्धि]. @deva[गो + अम्] → @deva[गाम्]; @deva[गो + अस्] → @deva[गाः]. @deva[द्यौस्] (also @deva[ओकारान्त प्रातिपदिक]): @deva[द्याम्], @deva[द्याः]. The @deva[सार्वनामस्थान] affixes are @deva[णित्] after @deva[द्यौ] too (@ref[7.1.90]), but this rule takes precedence."
        }
    },
    "61094": {
        "en": {
            "simple": "For @deva[अ/आ] of a prefix + @deva[ए/ओ] of a verbal root, the second vowel (@deva[पररूप]) is the single substitute. Examples: @deva[उप] + @deva[एलयति] → @deva[उपेलयति]; @deva[प्र] + @deva[ओषति] → @deva[प्रोषति].",
            "standard": "When @deva[उपसर्ग]-final @deva[अ/आ] precedes @deva[ए/ओ]-initial @deva[धातु], @deva[पररूप] (the second vowel) replaces both: @deva[उप + एलयति] → @deva[उपेलयति]; @deva[प्र + एलयति] → @deva[प्रेलयति]; @deva[उप + ओषति] → @deva[उपोषति]; @deva[प्र + ओषति] → @deva[प्रोषति]. This overrides @deva[वृद्धि] (@ref[6.1.88]). Some extend @ref[6.1.92] optionality here.",
            "advanced": "@deva[आत्] and @deva[उपसर्गाद् धातौ] understood. @deva[उपसर्ग (अत्/आत्)] + @deva[धातु (एच् आदि)] → @deva[पररूप]. Overrides @ref[6.1.88] @deva[वृद्धि]. @deva[उपेलयति], @deva[प्रेलयति], @deva[उपोषति], @deva[प्रोषति]. Some read @ref[6.1.92] @deva[विभाषा] here: @deva[उपैलयति]/उपेलयति optionally."
        }
    },
    "61095": {
        "en": {
            "simple": "For @deva[अ/आ] + @deva[ओ] of @deva[ओम्], or @deva[आ] (prefix @deva[आङ्]) + vowel, @deva[पररूप] is the substitute. Examples: @deva[का] + @deva[ओम्] → @deva[कोम्]; @deva[आ] + @deva[ऊढा] → @deva[ओढा] → @deva[अद्योढा].",
            "standard": "Two cases: (1) @deva[अत्/आत्] + @deva[ओम्] → @deva[पररूप]: @deva[का + ओम्] → @deva[कोम्]; @deva[या + ओम्] → @deva[योम्] (@deva[कोमित्यवोचत्]). (2) @deva[आङ्] + vowel → @deva[पररूप]: @deva[आ + ऊढा] → @deva[ओढा] → @deva[अद्योढा], @deva[कदोढा], @deva[तदोढा]; @deva[आ + ऋश्यात्] → @deva[अर्श्यात्] → @deva[अद्यर्श्यात्].",
            "advanced": "This @deva[पररूप] applies to: (1) @deva[अत् + ओम्] (the sacred syllable): @deva[कोम्], @deva[योम्]; (2) @deva[आङ्] (prefix @deva[आ]) + any vowel. For @deva[आङ्]: @deva[आ + ऊढा] → @deva[ओढा] (compound with @deva[अद्य] → @deva[अद्योढा]); @deva[आ + ऋश्यात्] → @deva[अर्श्यात्]. This supersedes both @deva[गुण] (@ref[6.1.87]) and @deva[वृद्धि] (@ref[6.1.88])."
        }
    },
    "61096": {
        "en": {
            "simple": "For non-@deva[पद]-final @deva[अ/आ] + @deva[उ] of the tense-affix @deva[उस्], @deva[पररूप] (@deva[उ]) is the substitute. Examples: @deva[भिन्द्या] + @deva[उस्] → @deva[भिन्द्युः]; @deva[अदा] + @deva[उस्] → @deva[अदुः].",
            "standard": "When @deva[अ/आ] (not @deva[पदान्त]) precedes @deva[उ] of @deva[उस्]-affix (3rd plural), @deva[पररूप] (@deva[उ]) replaces both: @deva[भिन्द्या + उस्] → @deva[भिन्द्युः] (Potential); @deva[छिन्द्या + उस्] → @deva[छिन्द्युः]; @deva[अदा + उस्] → @deva[अदुः] (Imperfect of @deva[दा]). This overrides @deva[गुण] (@ref[6.1.87]).",
            "advanced": "@deva[आत्] understood; @deva[अपदान्त] condition. @deva[उस्] = 3rd plural (@deva[झि]-substitute in certain tenses). @deva[भिन्द् + यासुट् + झि] → @deva[भिन्द्यास् + उस्] → @deva[भिन्द्या + उस्] → @deva[भिन्द्युः] (@deva[पररूप]). @deva[लङ्] of @deva[दा]: @deva[अ + दा + उस्] → @deva[अदुः]. Overrides @ref[6.1.87] @deva[गुण ओ]."
        }
    },
    "61097": {
        "en": {
            "simple": "For non-@deva[पद]-final short @deva[अ] + a @deva[गुण] vowel, @deva[पररूप] (the @deva[गुण]) is the substitute. Examples: @deva[पच] + @deva[अन्ति] → @deva[पचन्ति]; @deva[पच] + @deva[ए] → @deva[पचे].",
            "standard": "When short @deva[अ] (not @deva[पदान्त]) precedes a @deva[गुण] vowel (@deva[अ], @deva[ए], @deva[ओ]), @deva[पररूप] replaces both: @deva[पच + अन्ति] → @deva[पचन्ति]; @deva[यज + अन्ति] → @deva[यजन्ति]; @deva[पच + ए] → @deva[पचे]. This overrides @deva[सवर्णदीर्घ] (@ref[6.1.101]). Not for @deva[आ]: @deva[या + अन्ति] → @deva[यान्ति] (lengthening).",
            "advanced": "This @deva[पररूप] for @deva[ह्रस्व अ + गुण] (non-@deva[पदान्त]). @deva[गुण] = @deva[अ], @deva[ए], @deva[ओ]. @deva[पच + शप् + अन्ति] → @deva[पच + अन्ति] → @deva[पचन्ति]. Overrides @ref[6.1.101] @deva[दीर्घ]. Also overrides @ref[6.1.88] @deva[वृद्धि]: @deva[पच + ए] → @deva[पचे] (not @deva[*पचै]). @deva[दीर्घ अ] excluded: @deva[या + अन्ति] → @deva[यान्ति]."
        }
    },
    "61098": {
        "en": {
            "simple": "The @deva[इ] of @deva[इति] is the single substitute for @deva[अत्] (of a sound-imitation word) + @deva[इति]. Examples: @deva[पटत्] + @deva[इति] → @deva[पटिति]; @deva[घटत्] + @deva[इति] → @deva[घटिति].",
            "standard": "For @deva[अव्यक्तानुकरण] (inarticulate sound imitation) words ending in @deva[अत्] + @deva[इति], @deva[इ] (of @deva[इति]) replaces both: @deva[पटत् + इति] → @deva[पटिति]; @deva[घटत् + इति] → @deva[घटिति]; @deva[झटत् + इति] → @deva[झटिति]; @deva[छमत् + इति] → @deva[छमिति]. Not for other words: @deva[हसत् + इति] → @deva[हसदिति].",
            "advanced": "This @deva[इकार-एकादेश] applies to @deva[अव्यक्तानुकरण + इति]. @deva[अव्यक्त] = inarticulate sound; @deva[अनुकरण] = imitation. @deva[पटत् + इति] → @deva[पटिति] (the @deva[अत्] of @deva[पटत्] + @deva[इ] of @deva[इति] → @deva[इ]). Non-imitative: @deva[हसत् + इति] → @deva[हसदिति] (standard sandhi)."
        }
    },
    "61099": {
        "en": {
            "simple": "When a sound-imitation word is doubled, @deva[इति]-sandhi (@ref[6.1.98]) doesn't apply; instead, @deva[पररूप] is optional. Examples: @deva[पटत्पटिति] (full sandhi) or @deva[पटत्पटेति] (optional).",
            "standard": "For @deva[आम्रेडित] (doubled) sound-imitation words + @deva[इति], @ref[6.1.98] is blocked. Instead, @deva[पररूप] is optional: @deva[पटत्पटत् + इति] → @deva[पटत्पटिति] (by @ref[6.1.98] to whole) or @deva[पटत्पटेति] (optional @deva[त् + इ] → @deva[ए] for second member only). Doubling by @ref[8.1.4].",
            "advanced": "The @deva[आम्रेडित] (reduplicated by @ref[8.1.4]) blocks direct @ref[6.1.98]. @deva[विभाषा पररूप] for @deva[त् + इ]: @deva[पटत्पटत् + इति] → @deva[पटत्पट + इ + ति] → @deva[पटत्पटेति] (optional @deva[अ + इ] → @deva[ए], or @deva[पटत्पटिति] by applying @ref[6.1.98] to the whole compound as a single @deva[अव्यक्तानुकरण])."
        }
    },
    "61100": {
        "en": {
            "simple": "In a doubled sound-imitation word with @deva[आ]-affix (causing @deva[अत्]-elision), @deva[पररूप] is obligatory: the second member's initial replaces both. Example: @deva[पटत्पटत्] + @deva[डाच्] → @deva[पटपटा].",
            "standard": "When @deva[डाच्] (@ref[5.4.57]) is added to doubled @deva[अव्यक्तानुकरण], causing @deva[अत्]-elision, the consonant junction undergoes @deva[पररूप]: @deva[पटत्पटत्] + @deva[डाच्] → @deva[पटत्पटा] → @deva[पट् + प्] → @deva[प्] (second consonant replaces both) → @deva[पटपटा]. Similarly @deva[दमदमा].",
            "advanced": "This Vārtika-origin rule: @deva[आम्रेडित] + @deva[डाच्] (@ref[5.4.57]) → @deva[अदन्त-लोप], then @deva[त् + प्] → @deva[प्] (@deva[पररूप]). @deva[पटत्पटत्] → @deva[पटत्पट् + आ] → @deva[पट् + प् + पटा] → @deva[प्] replaces @deva[त् + प्] → @deva[पटपटा करोति]. The @deva[डाच्] triggers doubling by @ref[5.4.57] @deva[स्वरितेनाधिकारः]."
        }
    },
    "61101": {
        "en": {
            "simple": "When a simple vowel (@deva[अक्]) is followed by a homogeneous vowel, the corresponding long vowel is the single substitute. Examples: @deva[दण्ड] + @deva[अग्रम्] → @deva[दण्डाग्रम्]; @deva[दधि] + @deva[इन्द्रः] → @deva[दधीन्द्रः].",
            "standard": "When @deva[अक्] (simple vowel: @deva[अ], @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ]) is followed by its @deva[सवर्ण] (homogeneous vowel), the corresponding @deva[दीर्घ] replaces both: @deva[अ + अ] → @deva[आ]; @deva[इ + इ/ई] → @deva[ई]; @deva[उ + उ/ऊ] → @deva[ऊ]; @deva[ऋ + ऋ/ॠ] → @deva[ॠ]. Examples: @deva[दण्डाग्रम्], @deva[दधीन्द्रः], @deva[मधूदके], @deva[होतॄश्यः]. Not for diphthongs: @deva[अग्ने + ए] → @deva[अग्नये].",
            "advanced": "This @deva[सवर्णदीर्घ-एकादेश] for @deva[अक् + सवर्ण]. @deva[अक्] = @deva[अ इ उ ऋ ऌ] (short/long). @deva[सवर्ण] = same place, same effort. @deva[अ + अ/आ] → @deva[आ]; @deva[इ + इ/ई] → @deva[ई]; etc. Counter-example: @deva[एच्] isn't @deva[अक्]: @deva[अग्ने + ए] → @deva[अग्नये] (@ref[6.1.78]). Dissimilar vowels: @deva[दधि + अत्र] → @deva[दध्यत्र] (@ref[6.1.77])."
        }
    },
    "61102": {
        "en": {
            "simple": "For a simple vowel of a nominal stem + vowel of nominative/accusative endings, @deva[पूर्वरूप] (long vowel matching the first) is the substitute. Examples: @deva[अग्नि] + @deva[औ] → @deva[अग्नी]; @deva[वायु] + @deva[अम्] → @deva[वायुम्].",
            "standard": "When @deva[प्रातिपदिक]-final @deva[अक्] precedes a vowel of @deva[प्रथमा/द्वितीया] (nominative/accusative), the long vowel of the first (@deva[पूर्वरूप]) replaces both: @deva[अग्नि + औ] → @deva[अग्नी]; @deva[वायु + अम्] → @deva[वायुम्] → @deva[वायुम्]. This differs from @ref[6.1.101] which uses @deva[सवर्णदीर्घ].",
            "advanced": "@deva[अकः] and @deva[दीर्घः] understood. @deva[प्रातिपदिक (अक् अन्त)] + @deva[प्रथमा/द्वितीया (अच् आदि)] → @deva[पूर्वस्य दीर्घः]. @deva[अग्नि + औ] → @deva[अग्नी] (not @deva[*अग्न्यौ]); @deva[वायु + अस्] → @deva[वायूः]. This @deva[पूर्वरूप] (first-vowel-like) differs from @deva[सवर्णदीर्घ] in treating dissimilar combinations."
        }
    },
    "61103": {
        "en": {
            "simple": "After @deva[पूर्वरूप दीर्घ] (from @ref[6.1.102]), @deva[न्] substitutes for @deva[स्] of accusative @deva[शस्] in masculine. Examples: @deva[वृक्ष] + @deva[शस्] → @deva[वृक्षान्]; @deva[अग्नि] + @deva[शस्] → @deva[अग्नीन्].",
            "standard": "Following @ref[6.1.102] @deva[पूर्वरूप], @deva[स्] of @deva[शस्] (acc. pl.) becomes @deva[न्] in masculine: @deva[वृक्ष + शस्] → @deva[वृक्ष + अस्] → @deva[वृक्षान्]; @deva[अग्नि + शस्] → @deva[अग्नीन्]; @deva[वायु + शस्] → @deva[वायून्]; @deva[कर्तृ + शस्] → @deva[कर्तॄन्]. Masculine only—feminine @deva[चञ्चाः] (formed by @deva[कन्]-elision @ref[5.3.98]) retains form.",
            "advanced": "This @deva[णत्व] (@deva[स् → न्]) follows @ref[6.1.102] @deva[पूर्वसवर्णदीर्घ]. Condition: @deva[पुंसि] (masculine). @deva[वृक्ष + शस्] → @deva[वृक्षा + स्] (@ref[6.1.102]) → @deva[वृक्षान्] (@deva[स् → न्]). Examples: @deva[वृक्षान्], @deva[अग्नीन्], @deva[वायून्], @deva[कर्तॄन्], @deva[होतॄन्]. @deva[चञ्चा] (potentially masculine/feminine by @ref[5.3.98]) retains feminine form even for males."
        }
    },
    "61104": {
        "en": {
            "simple": "@deva[पूर्वरूप दीर्घ] (@ref[6.1.102]) doesn't apply when @deva[अ/आ] is followed by a non-@deva[अ] vowel of nominative/accusative. Examples: @deva[वृक्षौ], @deva[खट्वे]—here @deva[गुण/वृद्धि] apply instead.",
            "standard": "When @deva[अत्/आत्] precedes an @deva[इच्] (vowel other than @deva[अ]) of @deva[प्रथमा/द्वितीया], @ref[6.1.102] doesn't apply; @ref[6.1.87] etc. do: @deva[वृक्षौ], @deva[प्लक्षौ] (@deva[वृद्धि]); @deva[खट्वे], @deva[कुण्डे] (@deva[गुण]). If followed by @deva[अ]: @deva[वृक्षाः] (@ref[6.1.102] applies). Non-@deva[अ/आ] stems: @deva[अग्नी] (by @ref[6.1.102]).",
            "advanced": "This @deva[प्रतिषेध] blocks @ref[6.1.102] for @deva[अत्/आत् + इच् (सुपि)]. @deva[इच्] = vowels except @deva[अ]. @deva[वृक्ष + औ] → @deva[वृक्षौ] (not @deva[*वृक्षा], by @ref[6.1.88] @deva[वृद्धि]); @deva[खट्वा + ए] → @deva[खट्वे] (@ref[6.1.87] @deva[गुण]). @deva[अत् + अ]: @deva[वृक्षाः] (@ref[6.1.102] applies). Non-@deva[अत्]: @deva[अग्नि + औ] → @deva[अग्नी] (@ref[6.1.102])."
        }
    },
    "61105": {
        "en": {
            "simple": "@deva[पूर्वरूप दीर्घ] (@ref[6.1.102]) doesn't apply when a long vowel is followed by @deva[इच्]-initial nom./acc. endings or by @deva[अस्] (nom. pl.). Examples: @deva[कुमार्यौ], @deva[कुमार्यः].",
            "standard": "When @deva[दीर्घ]-final stems precede @deva[इच्]-initial @deva[प्रथमा/द्वितीया] endings or @deva[अस्] (nom. pl.), @ref[6.1.102] doesn't apply: @deva[कुमारी + औ] → @deva[कुमार्यौ] (@deva[ई] → @deva[य्] by @ref[6.1.77]); @deva[कुमारी + अस्] → @deva[कुमार्यः]; @deva[ब्रह्मबन्धू + औ] → @deva[ब्रह्मबन्ध्वौ]; @deva[ब्रह्मबन्धू + अस्] → @deva[ब्रह्मबन्ध्वः].",
            "advanced": "This @deva[प्रतिषेध] for @deva[दीर्घ + इच् (सुपि)] or @deva[दीर्घ + अस् (जस्)]. @deva[कुमारी + औ] → @deva[कुमार्य् + औ] (@ref[6.1.77]) → @deva[कुमार्यौ]; @deva[कुमारी + अस्] → @deva[कुमार्यः]. @deva[ब्रह्मबन्धु + औ] → @deva[ब्रह्मबन्ध्वौ]. @ref[6.1.102] blocked because @deva[इच्] follows or @deva[जस्] follows @deva[दीर्घ]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.91-6.1.105)")
