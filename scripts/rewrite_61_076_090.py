#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 6.1.76-6.1.90 (Batch 6 of 6.1)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61076": {
        "en": {
            "simple": "A long vowel at the end of a complete word (@deva[पद]) optionally takes @deva[तुक्]-augment when @deva[छ] follows. Examples: @deva[कूटीच्छाया] or @deva[कूटीछाया]; @deva[कुवलीच्छाया] or @deva[कुवलीछाया].",
            "standard": "Unlike @ref[6.1.75] (obligatory), this rule makes @deva[तुक्] optional for @deva[पदान्त दीर्घ] before @deva[छ]: @deva[कूटीच्छाया] or @deva[कूटीछाया]. The augment belongs to the vowel, not the word. This is a @deva[पदान्त] rule, not @deva[पदविधि]—so the words need not be syntactically related (@deva[समर्थ]).",
            "advanced": "This @deva[विभाषा] for @deva[पदान्त दीर्घ] before @deva[छ] contrasts with @ref[6.1.75] (obligatory for non-@deva[पद] context). The @deva[तुक्] is @deva[स्वरस्य], not @deva[पदस्य]. Being @deva[पदान्त]-rule (not @deva[पदविधि]), @deva[समर्थ] condition doesn't apply—unrelated words in sequence still trigger optionally."
        }
    },
    "61077": {
        "en": {
            "simple": "The vowels @deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ] (short or long) become @deva[य्], @deva[व्], @deva[र्], @deva[ल्] respectively when followed by a dissimilar vowel. Examples: @deva[दधि] + @deva[अत्र] → @deva[दध्यत्र]; @deva[मधु] + @deva[अत्र] → @deva[मध्वत्र].",
            "standard": "The @deva[इक्] vowels (@deva[इ], @deva[उ], @deva[ऋ], @deva[ऌ], long or short) become their corresponding semivowels before a following vowel: @deva[इ/ई] → @deva[य्]; @deva[उ/ऊ] → @deva[व्]; @deva[ऋ/ॠ] → @deva[र्]; @deva[ऌ] → @deva[ल्]. Examples: @deva[दध्यत्र], @deva[मध्वत्र], @deva[कर्त्रर्थम्], @deva[हर्त्रर्थम्], @deva[लाकृति]. This is restricted by @ref[6.1.101]—not when followed by a vowel of the same class.",
            "advanced": "This @deva[यण्]-sandhi applies to @deva[इक्] (@deva[इ उ ऋ ऌ], short/long) before @deva[अच्]. Restriction by @ref[6.1.101]: not before @deva[सवर्ण]. Thus @deva[इ] + @deva[इ] → @deva[ई] (not @deva[*यि]). Examples: @deva[दधि + अत्र] → @deva[दध्यत्र]; @deva[मधु + अत्र] → @deva[मध्वत्र]; @deva[कर्तृ + अर्थम्] → @deva[कर्त्रर्थम्]; @deva[ऌ] + @deva[आकृति] → @deva[लाकृति]."
        }
    },
    "61078": {
        "en": {
            "simple": "The diphthongs @deva[ए], @deva[ऐ], @deva[ओ], @deva[औ] become @deva[अय्], @deva[आय्], @deva[अव्], @deva[आव्] respectively when followed by a vowel. Examples: @deva[चे] + @deva[अन] → @deva[चयनम्]; @deva[लो] + @deva[अन] → @deva[लवनम्].",
            "standard": "The @deva[एच्] diphthongs take @deva[अय्/आय्/अव्/आव्] substitutes before vowels: @deva[ए] → @deva[अय्]; @deva[ऐ] → @deva[आय्]; @deva[ओ] → @deva[अव्]; @deva[औ] → @deva[आव्]. Examples: @deva[चि] + @deva[ल्युट्] → @deva[चे] + @deva[अन] → @deva[चयनम्]; @deva[लो] + @deva[अन] → @deva[लवनम्]; @deva[चै] + @deva[अक] → @deva[चायकः]; @deva[लौ] + @deva[अक] → @deva[लावकः].",
            "advanced": "This @deva[अयादि]-sandhi: @deva[एच्] (@deva[ए ऐ ओ औ]) + @deva[अच्] → @deva[अय्/आय्/अव्/आव्] + vowel. Examples: @deva[चे + अन] → @deva[चयनम्]; @deva[लो + अन] → @deva[लवनम्]; @deva[कयेते] (dual of @deva[के]); @deva[व्ययेते]; @deva[याववरुणद्धि]; @deva[रु + युच्] (@ref[3.2.148]) → @deva[रो + अन] → @deva[रवणः]."
        }
    },
    "61079": {
        "en": {
            "simple": "The @deva[व्]-ending substitutes (@deva[अव्], @deva[आव्]) also apply before affixes beginning with @deva[य्]. Examples: @deva[बाभ्रव्यः] (descendant of @deva[बभ्रु]); @deva[माण्डव्यः].",
            "standard": "The @deva[अव्]/आव् substitutes (for @deva[ओ]/औ) apply before @deva[य]-initial affixes: @deva[बभ्रु] + @deva[यञ्] → @deva[बाभ्रो] + @deva[य] → @deva[बाभ्रव्यः] (@ref[6.4.146], @ref[4.1.105]). Similarly @deva[माण्डव्यः], @deva[काण्व्यः]. The @deva[य]-initial affixes include @deva[यञ्], @deva[यत्], etc.",
            "advanced": "This extends @deva[अव्/आव्]-substitution to @deva[यादि प्रत्यय] (not just @deva[अजादि]). The @deva[वान्त] (@deva[व्]-final = @deva[अव्], @deva[आव्]) substitutes apply: @deva[बभ्रु] → @deva[बाभ्रो] (@deva[वृद्धि]) + @deva[य] (@deva[यञ्]) → @deva[बाभ्रव्यः]. @deva[ओ/औ] → @deva[अव्/आव्] before @deva[यञ्/यत्/ष्यञ्] etc."
        }
    },
    "61080": {
        "en": {
            "simple": "For root-final @deva[ओ]/औ, @deva[अव्]/आव् substitution before @deva[य]-initial affixes applies only when that diphthong was itself caused by the affix. Example: @deva[लू] + @deva[यत्] → @deva[लो] + @deva[य] → @deva[लव्यम्] (but @deva[भो] + @deva[य] → @deva[भाव्यम्]).",
            "standard": "For @deva[धातु]-final @deva[ओ]/औ before @deva[य]-initial affixes, @deva[अव्]/आव् substitution occurs only if the diphthong arose from that very affix (@deva[तन्निमित्त]). @deva[लू] + @deva[यत्] → @deva[लो] (@deva[गुण] by @ref[7.3.84]) + @deva[य] → @deva[लव्यम्] (affix caused the @deva[गुण]). But @deva[भू] → @deva[भो] + @deva[य] → @deva[भाव्यम्] (different derivation).",
            "advanced": "The @deva[तन्निमित्त] condition: @deva[एच्] → @deva[अव्/आव्] before @deva[यादि प्रत्यय] only if that @deva[प्रत्यय] caused the @deva[एच्]. @deva[लू] + @deva[यत्] (@ref[3.1.97]): @deva[यत्] triggers @deva[गुण] (@ref[7.3.84]) → @deva[लो] + @deva[य] → @deva[लव्यम्]. Contrast @deva[भू]: @deva[भो] arises independently → @deva[भाव्यम्] (different analysis)."
        }
    },
    "61081": {
        "en": {
            "simple": "The forms @deva[क्षय्य] (conquerable) and @deva[जय्य] (defeatable) show @deva[ए] → @deva[अय्] only when meaning 'possible to do'. Examples: @deva[क्षय्यः] = @deva[शक्यः क्षेतुम्]. Otherwise: @deva[क्षेयं पापम्], @deva[जेयो वृषलः].",
            "standard": "The roots @deva[क्षि]/जि + @deva[यत्] (@ref[3.1.97]) show @deva[ए] → @deva[अय्] when meaning 'able to be done' (@deva[शक्य]): @deva[क्षय्यः] = @deva[शक्यः क्षेतुम्]; @deva[जय्यः] = @deva[शक्यो जेतुम्]. For 'necessary' (@deva[कर्तव्य]) meaning: @deva[क्षेयं पापम्], @deva[जेयो वृषलः]—no @deva[अय्]-substitution.",
            "advanced": "This restricts @ref[6.1.78] for @deva[क्षि क्षये]/जि जये + @deva[यत्]. @deva[शक्यार्थ] (possibility): @deva[क्षय्यः], @deva[जय्यः] (with @deva[ए] → @deva[अय्]). @deva[कर्तव्यार्थ] (necessity): @deva[क्षेयम्], @deva[जेयः] (standard @deva[ए] retained). The semantic condition controls the phonological outcome."
        }
    },
    "61082": {
        "en": {
            "simple": "@deva[क्रय्य] (saleable) shows @deva[ए] → @deva[अय्] when meaning 'put up for sale'. Example: @deva[क्रय्या गौः] (a cow for sale). Otherwise: @deva[क्रेयं नो धान्यम्] (we need to buy grain).",
            "standard": "The root @deva[क्री] + @deva[यत्] shows @deva[ए] → @deva[अय्] when meaning 'offered for sale' (@deva[तदर्थ] = for buying): @deva[क्रय्या गौः], @deva[क्रय्यः कम्बलः]. When meaning 'to be bought' (necessity): @deva[क्रेयं नो धान्यं न चास्ति क्रय्यम्] 'we need to buy grain, but none is for sale'.",
            "advanced": "This @deva[नियम] for @deva[क्री + यत्]: @deva[विक्रयार्थ] (for sale): @deva[क्रय्यम्] (with @deva[ए] → @deva[अय्]). @deva[क्रयार्थ] (to be bought): @deva[क्रेयम्] (standard). The minimal pair: @deva[क्रय्यम्] = 'saleable'; @deva[क्रेयम्] = 'needing to be purchased'."
        }
    },
    "61083": {
        "en": {
            "simple": "In Vedic, @deva[भय्य] (fearful) and @deva[प्रवय्या] (for impregnation) are found. Examples: @deva[भय्यं किलासीत्]; @deva[वत्सतरी प्रवय्या].",
            "standard": "Vedic forms: @deva[भी] + @deva[यत्] → @deva[भय्यम्] (fearable), with @deva[ए] → @deva[अय्]; @deva[प्र] + @deva[वी] + @deva[यत्] → @deva[प्रवय्या]. The @deva[यत्] on @deva[भी] has ablative force (@ref[3.3.113] @deva[बहुलम्]): @deva[बिभेति अस्मात्] = @deva[भय्यम्]. @deva[प्रवय्या] is always feminine.",
            "advanced": "These @deva[छान्दस] forms: @deva[भी + यत्] → @deva[भे + य] → @deva[भय्यम्] (@deva[ए] → @deva[अय्]). @deva[यत्] here expresses @deva[अपादान] by @ref[3.3.113] @deva[कृत्यलुटो बहुलम्]. @deva[प्रवय्या] (always @deva[स्त्री]): @deva[प्र + वी + यत्] → @deva[प्रवे + य] → @deva[प्रवय्य] + @deva[टाप्] → @deva[प्रवय्या]."
        }
    },
    "61084": {
        "en": {
            "simple": "From this sūtra through @ref[6.1.111], the phrase 'a single substitute replaces both the preceding and following' should be understood. This governs @deva[एकादेश] (single-substitute) rules.",
            "standard": "This @deva[अधिकार] extends through @ref[6.1.111]. In all @deva[एकादेश] rules within this section, one element replaces two consecutive elements—the preceding and following merge into a single substitute. Example: @ref[6.1.87] teaches @deva[गुण] for @deva[अ/आ] + vowel: @deva[तव] + @deva[इदम्] → @deva[तवेदम्].",
            "advanced": "This @deva[अधिकार] (@deva[पूर्वपरयोरेकादेशः]) governs @ref[6.1.84]-@ref[6.1.111]. The @deva[एकादेश] replaces both @deva[पूर्व] (preceding) and @deva[पर] (following). Example: @deva[अ + इ] → @deva[ए] (@deva[गुण] by @ref[6.1.87])—the @deva[ए] replaces both @deva[अ] and @deva[इ]."
        }
    },
    "61085": {
        "en": {
            "simple": "The single substitute (@deva[एकादेश]) is treated as both the final of the preceding form and the initial of the following form.",
            "standard": "The @deva[एकादेश] shares properties of both replaced elements: it's considered the @deva[अन्त्य] (final) of the preceding and @deva[आदि] (initial) of the following. Since the @deva[स्थानिन्] (replaced element) in @deva[एकादेश] is the combination of both, this rule clarifies its dual nature.",
            "advanced": "This @deva[अतिदेश] defines the @deva[एकादेश]'s status: @deva[पूर्वान्त] and @deva[परादि] simultaneously. The @deva[स्थानिवद्भाव] issue: in @deva[एकादेश], the @deva[स्थानिन्] = @deva[पूर्व] + @deva[पर] combined. This rule ensures the substitute inherits properties of both—final of first, initial of second. Operations depending on either position can apply."
        }
    },
    "61086": {
        "en": {
            "simple": "The @deva[एकादेश] is treated as 'not having occurred' for purposes of @deva[ष]-conversion and @deva[तुक्]-augment. Example: @deva[काँ सिचत्]—the @deva[स्] doesn't become @deva[ष्] despite following @deva[आ].",
            "standard": "The @deva[एकादेश] is @deva[असिद्ध] (treated as not effected) for two operations: (1) @deva[षत्व] (@deva[स्] → @deva[ष्]); (2) @deva[तुक्]-augment. Thus in @deva[काँ सिचत्] (@deva[कम्] + @deva[असिचत्]), @deva[स्] doesn't become @deva[ष्] after @deva[आ] because the @deva[आ] (from @deva[अम्] + @deva[अ]) is @deva[असिद्ध] for this purpose.",
            "advanced": "This @deva[असिद्धत्व] blocks @deva[आदेशलक्षण] operations. The principle: @deva[असिद्धवचनम् आदेशलक्षणप्रतिषेधार्थम् उत्सर्गलक्षणभावार्थं च]. For @deva[षत्व]: @deva[काँ सिचत्] (@deva[कम् + असिचत्]) → the @deva[एकादेश आ] is @deva[असिद्ध], so @deva[स्] doesn't see @deva[इक्] for @ref[8.3.59]. For @deva[तुक्]: prevents unwanted augment."
        }
    },
    "61087": {
        "en": {
            "simple": "@deva[गुण] (@deva[ए], @deva[ओ], @deva[अर्], @deva[अल्]) is the single substitute when @deva[अ] or @deva[आ] is followed by a simple vowel. Examples: @deva[तव] + @deva[इदम्] → @deva[तवेदम्]; @deva[खट्वा] + @deva[इन्द्रः] → @deva[खट्वेन्द्रः].",
            "standard": "When @deva[अ/आ] precedes a simple vowel (@deva[अच्]), @deva[गुण] replaces both: @deva[अ/आ + इ/ई] → @deva[ए]; @deva[अ/आ + उ/ऊ] → @deva[ओ]; @deva[अ/आ + ऋ/ॠ] → @deva[अर्]; @deva[अ/आ + ऌ] → @deva[अल्]. Examples: @deva[तव + इदम्] → @deva[तवेदम्]; @deva[खट्वा + इन्द्रः] → @deva[खट्वेन्द्रः]; @deva[तव + ईहते] → @deva[तवेहते].",
            "advanced": "This @deva[गुण-एकादेश] for @deva[अत्] (@deva[अ/आ]) + @deva[अच्] (@deva[इक्] or @deva[अ]). The @deva[आत्] from @ref[6.1.88] is understood. Results: @deva[अ/आ + इ/ई] → @deva[ए]; @deva[अ/आ + उ/ऊ] → @deva[ओ]; @deva[अ/आ + ऋ/ॠ] → @deva[अर्]; @deva[अ/आ + ऌ] → @deva[अल्]; @deva[अ/आ + अ] → @deva[आ] (@deva[सवर्णदीर्घ] by @ref[6.1.101])."
        }
    },
    "61088": {
        "en": {
            "simple": "@deva[वृद्धि] (@deva[ऐ], @deva[औ]) is the single substitute when @deva[अ] or @deva[आ] is followed by a diphthong. Examples: @deva[ब्रह्म] + @deva[एडका] → @deva[ब्रह्मैडका]; @deva[खट्वा] + @deva[एव] → @deva[खट्वैव].",
            "standard": "When @deva[अ/आ] precedes a diphthong (@deva[एच्]: @deva[ए], @deva[ऐ], @deva[ओ], @deva[औ]), @deva[वृद्धि] replaces both: @deva[अ/आ + ए/ऐ] → @deva[ऐ]; @deva[अ/आ + ओ/औ] → @deva[औ]. This overrides @ref[6.1.87] @deva[गुण]. Examples: @deva[ब्रह्म + एडका] → @deva[ब्रह्मैडका]; @deva[खट्वा + ऐषति] → @deva[खट्वैषति]; @deva[भानु + ओजः] → @deva[भानौजः].",
            "advanced": "This @deva[वृद्धि-एकादेश] for @deva[अत्] + @deva[एच्] supersedes @ref[6.1.87] @deva[गुण]. Results: @deva[अ/आ + ए] → @deva[ऐ]; @deva[अ/आ + ऐ] → @deva[ऐ]; @deva[अ/आ + ओ] → @deva[औ]; @deva[अ/आ + औ] → @deva[औ]. The @deva[आत्] indicates @deva[अ/आ] as preceding. Examples: @deva[ब्रह्मैडका], @deva[खट्वैव], @deva[परमौदनम्]."
        }
    },
    "61089": {
        "en": {
            "simple": "@deva[वृद्धि] is the substitute for @deva[अ/आ] + @deva[ए] of @deva[एति] (from @deva[इ] 'go') and @deva[एधति] (from @deva[एध्] 'prosper'), and for @deva[अ/आ] + @deva[ऊ] of @deva[ऊठ्] (substitute of @deva[वह्] by @ref[6.4.132]).",
            "standard": "Special @deva[वृद्धि] cases: (1) @deva[इ गतौ] → @deva[एति]: when @deva[अ/आ] precedes, @deva[वृद्धि] applies: @deva[उप] + @deva[एति] → @deva[उपैति]; (2) @deva[एध् वृद्धौ]: @deva[प्र] + @deva[एधते] → @deva[प्रैधते]; (3) @deva[ऊठ्] (from @deva[वह्] by @ref[6.4.132]): @deva[प्र] + @deva[ऊढ] → @deva[प्रौढ]. The @deva[एच्] in @ref[6.1.88] applies to internally-changed @deva[इ] → @deva[ए].",
            "advanced": "This @deva[वृद्धि] rule for specific forms: (1) @deva[इण् गतौ] → @deva[एति] (internal @deva[गुण]): @deva[उपैति], @deva[अध्यैति]; (2) @deva[एधृ वृद्धौ] (inherently @deva[ए]-initial): @deva[प्रैधते]; (3) @deva[वह्] → @deva[ऊठ्] (@ref[6.4.132]): @deva[प्र + ऊढ] → @deva[प्रौढः]. The @deva[एच्] of @ref[6.1.88] qualifies @deva[इ] in @deva[एति] (when @deva[गुण]-transformed)."
        }
    },
    "61090": {
        "en": {
            "simple": "@deva[वृद्धि] is the single substitute when the augment @deva[आट्] is followed by any vowel. Examples: @deva[ईक्ष्] → @deva[ऐक्षिष्ट] (Aorist); @deva[ऐक्षत]; @deva[ऐक्षिष्यत] (Conditional).",
            "standard": "The @deva[आट्]-augment (@ref[6.4.72]) added to vowel-initial roots in Imperfect, Aorist, and Conditional combines with the following vowel as @deva[वृद्धि]: @deva[आट्] + @deva[इ] → @deva[ऐ]; @deva[आट्] + @deva[उ] → @deva[औ]. Examples: @deva[ईक्ष्] → @deva[ऐक्षिष्ट], @deva[ऐक्षत], @deva[ऐक्षिष्यत]; @deva[उभ्] → @deva[औभत्].",
            "advanced": "The @deva[एचि] @deva[अनुवृत्ति] ceases; @deva[अचि] continues. @deva[आट्] (@ref[6.4.72]) + any @deva[अच्] → @deva[वृद्धि]: @deva[आ + इ/ई] → @deva[ऐ]; @deva[आ + उ/ऊ] → @deva[औ]; @deva[आ + ऋ] → @deva[आर्]; @deva[आ + ए] → @deva[ऐ]; @deva[आ + ओ] → @deva[औ]. Examples: @deva[ऐक्षिष्ट] (लुङ्), @deva[ऐक्षत] (लङ्), @deva[ऐक्षिष्यत] (लृङ्)."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.76-6.1.90)")
