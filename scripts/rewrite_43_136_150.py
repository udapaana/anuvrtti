#!/usr/bin/env python3
"""Rewrite commentary for sūtras 4.3.136-150."""

import json


def load_json(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(path, data):
    with open(path, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def main():
    commentary_path = 'static/data/layered_commentary.json'
    data = load_json(commentary_path)

    updates = {
        "43136": {
            "en": {
                "simple": "The affix @deva[अण्] comes in the sense of 'modification or part' after words in the @deva[बिल्वादि] list. This overrides @deva[अञ्] and @deva[मयट्].\n\n**Example:** @deva[बैल्वः] 'modification or part of the Bilva tree'\n\nThe word @deva[गवेधुका] appears in this list. It would also take @deva[अण्] by the next rule (@ref[4.3.137]), but its inclusion here specifically blocks @deva[मयट्].\n\n**@deva[बिल्वादि] list:** @deva[बिल्व], @deva[व्रीहि], @deva[काण्ड], @deva[मुद्ग], @deva[मसूर], @deva[गोधूम], @deva[इक्षु], @deva[वेणु], @deva[गवेधुका], @deva[कर्पासी], @deva[पाटली], @deva[कर्कन्धू], @deva[कुटीर].",
                "standard": "The affix @deva[अण्] comes after @deva[बिल्वादि] words in the @deva[विकार]/​@deva[अवयव] sense, debarring @deva[अञ्] and @deva[मयट्].\n\n**Example:** @deva[बैल्वः]\n\n@deva[गवेधुका] appears in both this list and would qualify for @ref[4.3.137]; its inclusion here specifically blocks @deva[मयट्].\n\n**@deva[बिल्वादि] गण (13):** @deva[बिल्व], @deva[व्रीहि], @deva[काण्ड], @deva[मुद्ग], @deva[मसूर], @deva[गोधूम], @deva[इक्षु], @deva[वेणु], @deva[गवेधुका], @deva[कर्पासी], @deva[पाटली], @deva[कर्कन्धू], @deva[कुटीर].",
                "advanced": "This @deva[सूत्र] prescribes @deva[अण्] after @deva[बिल्वादि] words in the @deva[विकार]/​@deva[अवयव] sense, as @deva[अपवाद] to @deva[अञ्] and @deva[मयट्].\n\n**Example:** @deva[बैल्वः]\n\n@deva[गवेधुका] would take @deva[अण्] by @ref[4.3.137] as well; its inclusion here is specifically to block @deva[मयट्].\n\n**@deva[बिल्वादि] गण:** @deva[बिल्व], @deva[व्रीहि], @deva[काण्ड], @deva[मुद्ग], @deva[मसूर], @deva[गोधूम], @deva[इक्षु], @deva[वेणु], @deva[गवेधुका], @deva[कर्पासी], @deva[पाटली], @deva[कर्कन्धू], @deva[कुटीर]."
            }
        },
        "43137": {
            "en": {
                "simple": "The affix @deva[अण्] comes in the sense of 'modification or part' after a word that has @deva[क्] as its penultimate consonant. This overrides @deva[अञ्].\n\n**Examples:**\n- @deva[तर्कु] → @deva[तार्कवम्]\n- @deva[तित्तिडीक] → @deva[तैत्तिडीकम्]\n- @deva[माण्डूकम्], @deva[दार्दुरकम्], @deva[माधूकम्]\n\nWords like @deva[तित्तिडीक] have acute accent on the middle syllable (by Phiṭ-sūtra II.16).",
                "standard": "The affix @deva[अण्] comes after words with @deva[क्] as @deva[उपधा] (penultimate) in the @deva[विकार]/​@deva[अवयव] sense, debarring @deva[अञ्].\n\n**Examples:** @deva[तार्कवम्] (from @deva[तर्कु]), @deva[तैत्तिडीकम्], @deva[माण्डूकम्], @deva[दार्दुरकम्], @deva[माधूकम्]\n\n@deva[तित्तिडीक] etc. have @deva[मध्योदात्त] by Phiṭ-sūtra II.16.",
                "advanced": "This @deva[सूत्र] teaches @deva[अण्] after @deva[कोपधा] (penultimate @deva[क्]) words in the @deva[विकार]/​@deva[अवयव] sense, debarring @deva[अञ्].\n\n**Examples:** @deva[तार्कवम्], @deva[तैत्तिडीकम्], @deva[माण्डूकम्], @deva[दार्दुरकम्], @deva[माधूकम्]\n\n@deva[तित्तिडीक] etc.: @deva[मध्योदात्त] per Phiṭ-sūtra II.16."
            }
        },
        "43138": {
            "en": {
                "simple": "The affix @deva[अण्] with the augment @deva[षुक्] comes in the sense of 'modification' after @deva[त्रपु] (tin) and @deva[जतु] (lac). This overrides @deva[अञ्].\n\n**Examples:**\n- @deva[त्रपुणः विकारः] → @deva[त्रापुषम्] 'product made from tin'\n- @deva[जातुषम्] 'product made from lac'\n\nSince @deva[त्रपु] and @deva[जतु] are non-living substances, the @deva[अवयव] (part) sense doesn't apply — only @deva[विकार] (modification).",
                "standard": "The affix @deva[अण्] with @deva[षुक्] augment comes after @deva[त्रपु] and @deva[जतु] in the @deva[विकार] sense, debarring @deva[अञ्] of @ref[4.3.139].\n\n**Examples:** @deva[त्रापुषम्], @deva[जातुषम्]\n\nThese denote non-organic substances; @deva[अवयव] sense doesn't apply.",
                "advanced": "This @deva[सूत्र] prescribes @deva[षुगण्] (@deva[अण्] with @deva[षुक्]) after @deva[त्रपु] and @deva[जतु] in the @deva[विकार] sense, as @deva[अपवाद] to @deva[अञ्] of @ref[4.3.139].\n\n**Examples:** @deva[त्रापुषम्], @deva[जातुषम्]\n\nBeing @deva[अचेतन], only @deva[विकार] (not @deva[अवयव]) applies."
            }
        },
        "43139": {
            "en": {
                "simple": "The affix @deva[अण्] comes in the sense of 'modification or part' after words that do not have @deva[अनुदात्त] (grave) accent on the first syllable.\n\n**Examples:**\n- @deva[देवदारु] → @deva[देवदारवम्]\n- @deva[भद्रदारु] → @deva[भाद्रदारवम्]\n\nThe words @deva[देवदारु] and @deva[भद्रदारु] have @deva[उदात्त] (acute) on the first syllable according to Phiṭ-sūtra II.14 (trees denoting soft timber have acute on the first).",
                "standard": "The affix @deva[अण्] comes after non-@deva[अनुदात्तादि] words in the @deva[विकार]/​@deva[अवयव] sense.\n\n**Examples:** @deva[देवदारवम्], @deva[भाद्रदारवम्]\n\n@deva[देवदारु], @deva[भद्रदारु]: @deva[आद्युदात्त] by Phiṭ-sūtra II.14 (@deva[पीतद्र्वर्थानाम्] — soft-timber trees have initial acute).",
                "advanced": "This @deva[सूत्र] teaches @deva[अण्] after words not having @deva[अनुदात्त] on the first syllable, in the @deva[विकार]/​@deva[अवयव] sense.\n\n**Examples:** @deva[देवदारवम्], @deva[भाद्रदारवम्]\n\n@deva[देवदारु], @deva[भद्रदारु]: @deva[आद्युदात्त] per Phiṭ-sūtra II.14 (@deva[पीतद्र्वर्थानाम्])."
            }
        },
        "43140": {
            "en": {
                "simple": "The affix @deva[अञ्] comes in the sense of 'modification or part' after a word that has @deva[अनुदात्त] (grave) accent on the first syllable. This overrides @deva[अण्].\n\n**Examples:**\n- @deva[दधित्थ] → @deva[दाधित्थम्]\n- @deva[कपित्थ] → @deva[कापित्थम्]\n- @deva[महित्थ] → @deva[माहित्थम्]\n\nThe word @deva[दधित्थ] is a compound of @deva[दधि] + @deva[स्थ] (with @deva[स्] changing to @deva[त्]). It has final acute accent by the @deva[कृदुत्तरपदप्रकृतिखर] rule.",
                "standard": "The affix @deva[अञ्] comes after @deva[अनुदात्तादि] words in the @deva[विकार]/​@deva[अवयव] sense, debarring @deva[अण्].\n\n**Examples:** @deva[दाधित्थम्], @deva[कापित्थम्], @deva[माहित्थम्]\n\n@deva[दधित्थ]: @deva[उपपदसमास] of @deva[दधि] + @deva[स्थ] (with @deva[स्] → @deva[त्]); @deva[अन्त्योदात्त] by @deva[कृदुत्तरपदप्रकृतिखर].",
                "advanced": "This @deva[सूत्र] prescribes @deva[अञ्] after @deva[अनुदात्तादि] words in the @deva[विकार]/​@deva[अवयव] sense, as @deva[अपवाद] to @deva[अण्].\n\n**Examples:** @deva[दाधित्थम्], @deva[कापित्थम्], @deva[माहित्थम्]\n\n@deva[दधित्थ]: @deva[उपपदसमास] (@deva[दधि] + @deva[स्थ], @deva[स्] → @deva[त्]); @deva[अन्त्योदात्त] per @deva[कृदुत्तरपदप्रकृतिखर]."
            }
        },
        "43141": {
            "en": {
                "simple": "The affix @deva[अञ्] comes optionally in the sense of 'modification or part' after words in the @deva[पलाशादि] list.\n\n**Examples (both forms valid):**\n- @deva[पालाशम्] or @deva[पालाशम्] (from @deva[पलाश])\n- @deva[खादिरम्] or @deva[खादिरम्] (from @deva[खदिर])\n- @deva[यावासम्] or @deva[यावासम्] (from @deva[यवास])\n\nThis rule is both @deva[प्राप्तविभाषा] (making optional what would be obligatory) and @deva[अप्राप्तविभाषा] (introducing an option where none existed). For @deva[पलाश], @deva[खदिर], @deva[शिंशपा], @deva[स्यन्दन] — which are @deva[अनुदात्तादि] — @deva[अञ्] was obligatory by @ref[4.3.140]; this makes it optional. For the others, it introduces @deva[अञ्] as an option.\n\n**@deva[पलाशादि] list:** @deva[पलाश], @deva[खदिर], @deva[शिंशपा], @deva[स्यन्दन], @deva[पूलाक], @deva[करीर], @deva[शिरीष], @deva[यवास], @deva[विकङ्कत].",
                "standard": "The affix @deva[अञ्] comes optionally after @deva[पलाशादि] words in the @deva[विकार]/​@deva[अवयव] sense.\n\n**Examples:** @deva[पालाशम्]/​@deva[पालाशम्], @deva[खादिरम्]/​@deva[खादिरम्], @deva[यावासम्]/​@deva[यावासम्]\n\nThis is @deva[प्राप्तविभाषा] for @deva[पलाश], @deva[खदिर], @deva[शिंशपा], @deva[स्यन्दन] (which are @deva[अनुदात्तादि], hence @deva[अञ्] was obligatory by @ref[4.3.140]). For others, it's @deva[अप्राप्तविभाषा].\n\n**@deva[पलाशादि] गण (9):** @deva[पलाश], @deva[खदिर], @deva[शिंशपा], @deva[स्यन्दन]/​@deva[स्पन्दन], @deva[पूलाक], @deva[करीर], @deva[शिरीष], @deva[यवास], @deva[विकङ्कत].",
                "advanced": "This @deva[सूत्र] makes @deva[अञ्] optional after @deva[पलाशादि] words in the @deva[विकार]/​@deva[अवयव] sense.\n\nThis is @deva[प्राप्तविभाषा] for @deva[अनुदात्तादि] members (@deva[पलाश], @deva[खदिर], @deva[शिंशपा], @deva[स्यन्दन]) where @deva[अञ्] was obligatory by @ref[4.3.140]; @deva[अप्राप्तविभाषा] for the rest.\n\n**@deva[पलाशादि] गण:** @deva[पलाश], @deva[खदिर], @deva[शिंशपा], @deva[स्यन्दन] (@deva[स्पन्दन]), @deva[पूलाक], @deva[करीर], @deva[शिरीष], @deva[यवास], @deva[विकङ्कत]."
            }
        },
        "43142": {
            "en": {
                "simple": "The affix @deva[ट्लञ्] comes in the sense of 'modification or part' after the word @deva[शमी] (the Śamī tree). This overrides @deva[अञ्].\n\n**Examples:**\n- @deva[शामीलं भस्म] 'ashes of the Śamī tree'\n- @deva[शामीली स्रुक्] 'sacrificial ladle made of Śamī wood' (feminine by @ref[4.1.60])",
                "standard": "The affix @deva[ट्लञ्] comes after @deva[शमी] in the @deva[विकार]/​@deva[अवयव] sense, debarring @deva[अञ्].\n\n**Examples:** @deva[शामीलं भस्म], @deva[शामीली स्रुक्] (@ref[4.1.60])",
                "advanced": "This @deva[सूत्र] prescribes @deva[ट्लञ्] after @deva[शमी] in the @deva[विकार]/​@deva[अवयव] sense, as @deva[अपवाद] to @deva[अञ्].\n\n**Examples:** @deva[शामीलं भस्म], @deva[शामीली स्रुक्] (feminine by @ref[4.1.60])."
            }
        },
        "43143": {
            "en": {
                "simple": "The affix @deva[मयट्] comes optionally after any base in the @deva[विकार] (modification) and @deva[अवयव] (part) senses in secular language (@deva[भाषा]), but not when referring to food or clothing.\n\n**Examples:**\n- @deva[आश्ममयम्] or @deva[आश्मनम्] (from @ref[4.3.134])\n- @deva[मूर्वामयम्] or @deva[मौर्वम्] (from @ref[4.3.135])\n\nWhy 'in secular language'? In Vedic usage: @deva[बैल्वः खादिरो वा यूपः स्यात्] (the sacrificial post should be of Bilva or Khadira wood) — @deva[मयट्] is not used.\n\nWhy 'not food or clothing'? For food: @deva[मौद्गः सूपः] 'soup made of kidney beans.' For clothing: @deva[कार्पासम् आच्छादनम्] 'cotton garment.' These don't take @deva[मयट्].\n\nThe word @deva[एतयोः] ('in these two senses') in the rule indicates that even the special affixes taught in @ref[4.3.135], @ref[4.3.136] etc. can be replaced by @deva[मयट्]: @deva[कपोतमयम्] or @deva[कापोतम्], @deva[लोहमयम्] or @deva[लौहम्].",
                "standard": "The affix @deva[मयट्] comes optionally in the @deva[विकार]/​@deva[अवयव] senses in @deva[भाषा] (secular language), excluding @deva[अन्न] (food) and @deva[वस्त्र] (clothing).\n\n**Examples:** @deva[आश्ममयम्]/​@deva[आश्मनम्] (@ref[4.3.134]), @deva[मूर्वामयम्]/​@deva[मौर्वम्] (@ref[4.3.135])\n\n**@deva[भाषायाम्]:** In @deva[छन्दस्]: @deva[बैल्वः खादिरो वा यूपः स्यात्] (no @deva[मयट्]).\n\n**@deva[अनन्नवस्त्रयोः]:** Food: @deva[मौद्गः सूपः]. Clothing: @deva[कार्पासम् आच्छादनम्]. No @deva[मयट्].\n\n**@deva[एतयोः]:** Indicates @deva[मयट्] can replace specific affixes: @deva[कपोतमयम्]/​@deva[कापोतम्] (@ref[4.3.135]), @deva[लोहमयम्]/​@deva[लौहम्].",
                "advanced": "This @deva[सूत्र] makes @deva[मयट्] optional in the @deva[विकार]/​@deva[अवयव] senses for @deva[भाषा] (secular), with @deva[अनन्न] and @deva[अवस्त्र] conditions.\n\n**Examples:** @deva[आश्ममयम्]/​@deva[आश्मनम्], @deva[मूर्वामयम्]/​@deva[मौर्वम्]\n\n**@deva[भाषायाम्]:** @deva[छन्दसि] excluded: @deva[बैल्वः खादिरो वा यूपः स्यात्].\n\n**@deva[अनन्नवस्त्रयोः]:** @deva[अन्न]: @deva[मौद्गः सूपः]. @deva[वस्त्र]: @deva[कार्पासम् आच्छादनम्].\n\n**@deva[एतयोः]:** Despite @deva[अनुवृत्ति], explicit mention indicates @deva[मयट्] can substitute for specific affixes (@ref[4.3.135] ff.): @deva[कपोतमयम्]/​@deva[कापोतम्], @deva[लोहमयम्]/​@deva[लौहम्]."
            }
        },
        "43144": {
            "en": {
                "simple": "The affix @deva[मयट्] comes invariably in the @deva[विकार] (modification) and @deva[अवयव] (part) senses — when not referring to food or clothing — after @deva[वृद्ध] words (those beginning with a @deva[वृद्धि] vowel: @deva[आ], @deva[ऐ], @deva[औ]) and after words in the @deva[शरादि] list.\n\n**@deva[वृद्ध] examples:**\n- @deva[आम्रमयम्] 'made of mango'\n- @deva[शालमयम्], @deva[शाकमयम्]\n\n**@deva[शरादि] examples:**\n- @deva[शरमयम्] 'made of reeds'\n- @deva[हर्ममयम्], @deva[मृन्मयम्]\n\nWhy the word @deva[नित्यम्] ('invariably')? According to Patañjali, @deva[मयट्] comes invariably after monosyllabic words as well: @deva[त्वङ्मयम्], @deva[स्रङ्मयम्], @deva[वाङ्मयम्].\n\n**@deva[शरादि] list:** @deva[शर], @deva[दर्भ], @deva[मृद्], @deva[कुटी], @deva[तृण], @deva[सोम], @deva[बल्वज].",
                "standard": "The affix @deva[मयट्] comes invariably (@deva[नित्यम्]) in the @deva[विकार]/​@deva[अवयव] senses (excluding @deva[अन्न]/​@deva[वस्त्र]) after @deva[वृद्ध] words and @deva[शरादि] words.\n\n**@deva[वृद्ध]:** @deva[आम्रमयम्], @deva[शालमयम्], @deva[शाकमयम्]\n\n**@deva[शरादि]:** @deva[शरमयम्], @deva[हर्ममयम्], @deva[मृन्मयम्]\n\n**@deva[नित्यम्]:** Per Patañjali, also applies obligatorily to monosyllabic words: @deva[त्वङ्मयम्], @deva[स्रङ्मयम्], @deva[वाङ्मयम्].\n\n**@deva[शरादि] गण (7):** @deva[शर], @deva[दर्भ], @deva[मृद्], @deva[कुटी], @deva[तृण], @deva[सोम], @deva[बल्वज]/​@deva[वल्वज].",
                "advanced": "This @deva[सूत्र] makes @deva[मयट्] obligatory (@deva[नित्यम्]) in the @deva[विकार]/​@deva[अवयव] senses (@deva[अनन्नवस्त्रयोः]) after @deva[वृद्ध] words and @deva[शरादि].\n\n**@deva[वृद्ध]:** @deva[आम्रमयम्], @deva[शालमयम्], @deva[शाकमयम्]\n\n**@deva[शरादि]:** @deva[शरमयम्], @deva[हर्ममयम्], @deva[मृन्मयम्]\n\n**@deva[नित्यम्]:** Though a separate @deva[सूत्र] would itself make the affix obligatory, @deva[नित्य] explicitly extends to @deva[एकाच्] (monosyllabic) words per Patañjali: @deva[त्वङ्मयम्], @deva[स्रङ्मयम्], @deva[वाङ्मयम्].\n\n**@deva[शरादि] गण:** @deva[शर], @deva[दर्भ], @deva[मृद्], @deva[कुटी], @deva[तृण], @deva[सोम], @deva[बल्वज] (@deva[वल्वज])."
            }
        },
        "43145": {
            "en": {
                "simple": "The affix @deva[मयट्] comes after the word @deva[गो] (cow) to mean 'its dung.'\n\n**Example:** @deva[गोमयम्] 'cow dung'\n\nDung is neither a @deva[विकार] (modification) nor an @deva[अवयव] (part) of a cow. This separate rule is needed because the general @deva[विकार]/​@deva[अवयव] sense doesn't cover dung.\n\nWhy 'meaning dung'? For other products: @deva[गव्यम्] = milk. Here @deva[यत्] comes by @ref[4.3.160] in the product/part sense (though strictly, milk is neither a true @deva[अवयव] nor @deva[विकार] of @deva[गो]).",
                "standard": "The affix @deva[मयट्] comes after @deva[गो] in the sense of @deva[शकृत्] (dung).\n\n**Example:** @deva[गोमयम्]\n\n@deva[शकृत्] is neither @deva[विकार] nor @deva[अवयव] of @deva[गो]; hence this separate @deva[सूत्र].\n\n**Restriction:** For other senses: @deva[गव्यम्] (milk) — @deva[यत्] by @ref[4.3.160] (though milk too is technically neither @deva[अवयव] nor @deva[विकार]).",
                "advanced": "This @deva[सूत्र] teaches @deva[मयट्] after @deva[गो] specifically in the @deva[शकृत्] (dung) sense.\n\n**Example:** @deva[गोमयम्]\n\n@deva[शकृत्] is neither @deva[विकार] nor @deva[अवयव]; hence a separate @deva[सूत्र].\n\n**@deva[शकृद्ग्रहणे किम्]:** For @deva[क्षीर] etc.: @deva[गव्यम्] (@deva[यत्] by @ref[4.3.160])—though @deva[क्षीर] is also not strictly @deva[अवयव]/​@deva[विकार]."
            }
        },
        "43146": {
            "en": {
                "simple": "The affix @deva[मयट्] comes invariably in the @deva[विकार] (modification) or @deva[अवयव] (part) sense after the word @deva[पिष्ट] (flour). This overrides @deva[अण्].\n\n**Example:** @deva[पिष्टमयं भस्म] 'ashes made from flour'\n\nIn other senses, @deva[अण्] applies: @deva[पैष्टी सुरा] 'liquor belonging to flour' (with @deva[तस्येदम्] sense).",
                "standard": "The affix @deva[मयट्] comes invariably after @deva[पिष्ट] in the @deva[विकार]/​@deva[अवयव] sense, debarring @deva[अण्].\n\n**Example:** @deva[पिष्टमयं भस्म]\n\nIn @deva[तस्येदम्] sense: @deva[पैष्टी सुरा] (with @deva[अण्]).",
                "advanced": "This @deva[सूत्र] makes @deva[मयट्] obligatory after @deva[पिष्ट] in the @deva[विकार]/​@deva[अवयव] sense, as @deva[अपवाद] to @deva[अण्].\n\n**Example:** @deva[पिष्टमयं भस्म]\n\n**@deva[तस्येदम्]:** @deva[पैष्टी सुरा] (@deva[अण्])."
            }
        },
        "43147": {
            "en": {
                "simple": "The affix @deva[कन्] comes in the @deva[विकार] (product) sense after @deva[पिष्ट] (flour) when the resulting word is a proper name (@deva[संज्ञा]). This overrides @deva[मयट्].\n\n**Example:** @deva[पिष्टकः] (a kind of cake — the word itself is a name)",
                "standard": "The affix @deva[कन्] comes after @deva[पिष्ट] in the @deva[विकार] sense when the derivative is a @deva[संज्ञा], debarring @deva[मयट्].\n\n**Example:** @deva[पिष्टकः]",
                "advanced": "This @deva[सूत्र] prescribes @deva[कन्] after @deva[पिष्ट] in the @deva[विकार] sense with @deva[संज्ञा] result, as @deva[अपवाद] to @deva[मयट्].\n\n**Example:** @deva[पिष्टकः]"
            }
        },
        "43148": {
            "en": {
                "simple": "The affix @deva[मयट्] comes after @deva[व्रीहि] (rice/barley) when referring to a @deva[पुरोडाश] (sacred cake). This overrides @deva[अण्] from @ref[4.3.136].\n\n**Example:** @deva[व्रीहिमयः पुरोडाशः] 'a sacred cake made of barley'\n\nIn other senses: @deva[व्रैहम्] (with @deva[अण्]).",
                "standard": "The affix @deva[मयट्] comes after @deva[व्रीहि] when the product is @deva[पुरोडाश] (sacred cake), debarring @deva[अण्] of @ref[4.3.136].\n\n**Example:** @deva[व्रीहिमयः पुरोडाशः]\n\nOtherwise: @deva[व्रैहम्].",
                "advanced": "This @deva[सूत्र] teaches @deva[मयट्] after @deva[व्रीहि] specifically for @deva[पुरोडाश], as @deva[अपवाद] to @deva[अण्] of @ref[4.3.136].\n\n**Example:** @deva[व्रीहिमयः पुरोडाशः]\n\nOtherwise: @deva[व्रैहम्]."
            }
        },
        "43149": {
            "en": {
                "simple": "The affix @deva[मयट्] comes in the @deva[विकार] (product) sense after @deva[तिल] (sesame) and @deva[यव] (barley) — but not when the resulting word is a proper name (@deva[संज्ञा]).\n\n**Examples:** @deva[तिलमयम्], @deva[यवमयम्]\n\nWhy 'not a name'? When the word is a name: @deva[तैलम्] 'oil' (a name), @deva[यावकः] formed with @deva[कन्] by @ref[5.4.29].",
                "standard": "The affix @deva[मयट्] comes after @deva[तिल] and @deva[यव] in the @deva[विकार] sense when not a @deva[संज्ञा].\n\n**Examples:** @deva[तिलमयम्], @deva[यवमयम्]\n\n**@deva[असंज्ञायाम्]:** @deva[संज्ञा]: @deva[तैलम्] (oil), @deva[यावकः] (@deva[कन्] by @ref[5.4.29]).",
                "advanced": "This @deva[सूत्र] teaches @deva[मयट्] after @deva[तिल] and @deva[यव] in the @deva[विकार] sense, conditioned by @deva[असंज्ञायाम्].\n\n**Examples:** @deva[तिलमयम्], @deva[यवमयम्]\n\n**@deva[संज्ञा]:** @deva[तैलम्], @deva[यावकः] (@deva[कन्] by @ref[5.4.29])."
            }
        },
        "43150": {
            "en": {
                "simple": "In Vedic literature (@deva[छन्दस्]), the affix @deva[मयट्] comes in the @deva[विकार] (modification) or @deva[अवयव] (part) sense after a disyllabic word (@deva[द्व्यच्]).\n\nThis extends @deva[मयट्] to sacred literature — @ref[4.3.143] dealt with secular language.\n\n**Vedic examples:**\n- @deva[पर्णमयी जुहूः] 'a ladle made of leaves' (from @deva[यस्य पर्णमयी जुहूर् भवति])\n- @deva[दर्भमयं वासः] 'garment made of Darbha grass'\n- @deva[शरमयं बर्हिः] 'sacrificial grass made of reeds'",
                "standard": "In @deva[छन्दस्], the affix @deva[मयट्] comes after @deva[द्व्यच्] (disyllabic) words in the @deva[विकार]/​@deva[अवयव] sense.\n\nThis ordains @deva[मयट्] in sacred literature; @ref[4.3.143] covered @deva[भाषा] (secular).\n\n**Vedic examples:** @deva[पर्णमयः], @deva[दर्भमयम्], @deva[शरमयम्]\n\nFrom: @deva[यस्य पर्णमयी जुहूर् भवति], @deva[दर्भमयं वासो भवति], @deva[शरमयं बर्हिर् भवति].",
                "advanced": "This @deva[सूत्र] teaches @deva[मयट्] after @deva[द्व्यच्] words in the @deva[विकार]/​@deva[अवयव] sense, specifically for @deva[छन्दस्]. @ref[4.3.143] governed @deva[भाषा].\n\n**Vedic examples:** @deva[पर्णमयः], @deva[दर्भमयम्], @deva[शरमयम्]\n\nFrom: @deva[यस्य पर्णमयी जुहूर् भवति], @deva[दर्भमयं वासो भवति], @deva[शरमयं बर्हिर् भवति]."
            }
        }
    }

    # Update the data
    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.3.136-150)")

if __name__ == "__main__":
    main()
