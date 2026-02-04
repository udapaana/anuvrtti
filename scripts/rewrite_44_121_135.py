#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 4.4.121-135."""

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
        "44121": {
            "en": {
                "simple": "In the Vedas, the affix @deva[यत्] comes after the words @deva[रक्षस्] (demon) and @deva[यातु] (sorcerer) in the genitive case, in the sense of 'killer of that'.\n\nThe word @deva[हननी] means 'that which kills'.\n\nExamples:\n- @deva[रक्षस्य] 'killer of Rākṣasas' as in @deva[याते अग्ने रक्षस्या तनः] 'O Agni, your bodies are killers of Rākṣasas' (@deva[रक्षसां हननी])\n- @deva[यातव्याः तनूः] 'bodies that kill Yātus'\n\nThe plural is used as a mark of respect.",
                "standard": "In @deva[छन्दस्], after @deva[रक्षस्] and @deva[यातु] (in @deva[षष्ठी]), @deva[यत्] applies in sense @deva[हननी] (killer).\n\nExamples:\n- @deva[रक्षस्य] = @deva[रक्षसां हननी] (@deva[याते अग्ने रक्षस्या तनः])\n- @deva[यातव्याः तनूः]\n\nPlural used for respect.",
                "advanced": "@deva[रक्षस्] and @deva[यातु] (in @deva[षष्ठी]) take @deva[यत्] in @deva[छन्दस्], sense @deva[हननी].\n\nExamples: @deva[रक्षस्य], @deva[यातव्य]."
            }
        },
        "44122": {
            "en": {
                "simple": "In the Vedas, the affix @deva[यत्] comes after the words @deva[रेवती] (star-name), @deva[जगती] (a Vedic metre), and @deva[हविष्य] (offerings) in the genitive case, in the sense of 'praising'.\n\nThe word @deva[प्रशस्य] means 'praising, extolling' (from √@deva[शंस्] + @deva[क्यप्] with @deva[भाव] sense).\n\nExamples:\n- @deva[रेवत्यम्] 'praising of Revatī'\n- @deva[जगत्यम्] 'praising of Jagatī'\n- @deva[हविष्यम्] 'praising of offerings'\n\nDerivation of @deva[हविष्यम्]: @deva[हविषे हिता] = @deva[हविष्याः] 'things fit for offering' (butter, etc.) by @ref[5.1.4]. Then @deva[हविष्यानां प्रशंसनम्] = @deva[हविष्यम्] by @ref[4.4.122], with @deva[अ]-elision by @ref[6.4.148] and @deva[य]-elision by @ref[8.4.64].",
                "standard": "In @deva[छन्दस्], after @deva[रेवती], @deva[जगती], @deva[हविष्य] (in @deva[षष्ठी]), @deva[यत्] applies in sense @deva[प्रशस्य] (praising).\n\n@deva[प्रशस्य] = @deva[प्रशंसन] (√@deva[शंस्] + @deva[क्यप्], @deva[भाव]).\n\nExamples: @deva[रेवत्यम्], @deva[जगत्यम्], @deva[हविष्यम्].\n\n@deva[हविष्यम्] derivation: @deva[हविषे हिता] = @deva[हविष्याः] (@ref[5.1.4]); @deva[हविष्यानां प्रशंसनम्] = @deva[हविष्यम्] (this sūtra) with @deva[अ]-@deva[लोप] (@ref[6.4.148]) and @deva[य]-@deva[लोप] (@ref[8.4.64]).",
                "advanced": "@deva[रेवती], @deva[जगती], @deva[हविष्य] (in @deva[षष्ठी]) take @deva[यत्] in @deva[छन्दस्], sense @deva[प्रशस्य].\n\nExamples: @deva[रेवत्यम्], @deva[जगत्यम्], @deva[हविष्यम्].\n\n@deva[हविष्यम्]: @deva[हविष्य] (@ref[5.1.4]) + @deva[यत्] → @deva[हविष्य्] (@ref[6.4.148]) + @deva[यत्] → @deva[हविष्यम्] (@ref[8.4.64])."
            }
        },
        "44123": {
            "en": {
                "simple": "In the Vedas, the affix @deva[यत्] (instead of @deva[अण्]) comes after the word @deva[असुर] (demon) in the genitive case, in the sense of 'belonging to'.\n\nExample: @deva[असुर्यम्] 'belonging to the Asuras' as in:\n- @deva[असुर्यं वा एतत् पात्रं यच्चक्रधृतं कुलालकृतम्] 'This vessel made on a wheel by a potter belongs to the Asuras' (@deva[मैत्रायणी संहिता] I.8.3)\n- @deva[असुर्यं देवेभिर्धायि विश्वम्]",
                "standard": "In @deva[छन्दस्], after @deva[असुर] (in @deva[षष्ठी]), @deva[यत्] (not @deva[अण्]) applies in sense 'property/belonging'.\n\nExample: @deva[असुर्यम्] 'belonging to Asuras' (@deva[मैत्रायणी संहिता] I.8.3: @deva[असुर्यं वा एतत् पात्रं यच्चक्रधृतं कुलालकृतम्]).",
                "advanced": "@deva[असुर] (in @deva[षष्ठी]) takes @deva[यत्] (not @deva[अण्]) in @deva[छन्दस्], sense 'property'.\n\nExample: @deva[असुर्यम्] (@deva[मैत्रायणी संहिता] I.8.3)."
            }
        },
        "44124": {
            "en": {
                "simple": "In the Vedas, the affix @deva[अण्] (instead of @deva[यत्]) comes after the word @deva[असुर] in the genitive case, in the sense of 'glamour/magic'.\n\nExample: @deva[असुरस्य माया] 'the magic of Asuras' → @deva[आसुरी] (feminine) as in:\n@deva[आसुरी माया स्वधया कृतासि] 'You are made by Āsurī (demonic) magic with self-power'",
                "standard": "In @deva[छन्दस्], after @deva[असुर] (in @deva[षष्ठी]), @deva[अण्] (not @deva[यत्]) applies in sense @deva[माया] (glamour).\n\nExample: @deva[असुरस्य माया] → @deva[आसुरी] (f.) (@deva[आसुरी माया स्वधया कृतासि]).",
                "advanced": "@deva[असुर] (in @deva[षष्ठी]) takes @deva[अण्] in @deva[छन्दस्], sense @deva[माया].\n\nExample: @deva[आसुरी माया]."
            }
        },
        "44125": {
            "en": {
                "simple": "In the Vedas, the affix @deva[यत्] comes after a @deva[प्रातिपदिक] (nominal stem) ending in @deva[मतुप्], when it denotes a mantra used in putting up (@deva[उपधान]) sacrificial bricks (@deva[इष्टका]). When @deva[यत्] is added, the @deva[मतुप्] affix is elided.\n\nExample: @deva[वर्चस्वान्] is a mantra containing @deva[वर्चस्]. Bricks put up with recitation of this mantra are called @deva[वर्चस्या]:\n\n@deva[वर्चस्वत्] + @deva[यत्] → @deva[वर्चस्] + @deva[यत्] (@deva[मतुप्] elided) → @deva[वर्चस्या] (f.)",
                "standard": "In @deva[छन्दस्], after @deva[मतुबन्त] @deva[प्रातिपदिक] (in @deva[प्रथमा]), @deva[यत्] applies in sense @deva[आसाम् इष्टकानाम् उपधाने मन्त्रः] (mantra for brick-laying). @deva[मतुप्] undergoes @deva[लुक्].\n\nExample: @deva[वर्चस्वत्] + @deva[यत्] → @deva[वर्चस्] + @deva[यत्] → @deva[वर्चस्या] (bricks laid with @deva[वर्चस्वान्] mantra).",
                "advanced": "In @deva[छन्दस्], @deva[मतुबन्त] (in @deva[प्रथमा]) takes @deva[यत्] in sense @deva[आसाम् इष्टकानाम् उपधाने मन्त्रः]. @deva[मतुप्]-@deva[लुक्].\n\nExample: @deva[वर्चस्वत्] → @deva[वर्चस्या]."
            }
        },
        "44126": {
            "en": {
                "simple": "In the Vedas, the affix @deva[अण्] comes after the word @deva[अश्विमान्] (containing @deva[अश्विन्]) to denote bricks put up with mantras containing @deva[अश्विन्]. The @deva[मतुप्] is elided.\n\nExample: @deva[आश्विनी] (f.) 'bricks put up with mantras containing @deva[अश्विन्]'\n\nDerivation: @deva[अश्विमान्] + @deva[अण्] → @deva[अश्वि] + @deva[अण्] (@deva[मतुप्] elided by @ref[4.4.125]) → @deva[अश्विन्] + @deva[अण्] (by @ref[6.4.164]) → @deva[आश्विन]\n\nAs in @deva[यजुर्वेद तैत्तिरीय संहिता] 5.3.1.1: @deva[आश्विनीः उपदधाति] 'he lays Āśvinī bricks'",
                "standard": "In @deva[छन्दस्], after @deva[अश्विमान्], @deva[अण्] applies for bricks laid with @deva[अश्विन्]-mantras. @deva[मतुप्]-@deva[लुक्].\n\nDerivation: @deva[अश्विमान्] + @deva[अण्] → @deva[अश्वि] + @deva[अण्] (@ref[4.4.125]) → @deva[अश्विन्] + @deva[अण्] (@ref[6.4.164]) → @deva[आश्विन]\n\nExample (@deva[तैत्तिरीय संहिता] 5.3.1.1): @deva[आश्विनीः उपदधाति].",
                "advanced": "@deva[अश्विमान्] takes @deva[अण्] in @deva[छन्दस्] for brick-@deva[उपधान]. @deva[मतुप्]-@deva[लुक्].\n\nDerivation: @deva[अश्विमान्] → @deva[अश्वि] (@ref[4.4.125]) → @deva[अश्विन्] (@ref[6.4.164]) + @deva[अण्] → @deva[आश्विनी].\n\n@deva[तैत्तिरीय संहिता] 5.3.1.1: @deva[आश्विनीः उपदधाति]."
            }
        },
        "44127": {
            "en": {
                "simple": "In the Vedas, the affix @deva[मतुप्] is added to the word @deva[मूर्धन्वत्] when expressing bricks collected with mantras containing the word @deva[वयस्].\n\nThe @deva[मतुप्] supersedes @deva[यत्].\n\nA mantra containing both @deva[वयस्] and @deva[मूर्धन्] is both @deva[वयस्वान्] and @deva[मूर्धन्वान्]. For bricks with such mantras, @deva[यत्] applies to @deva[वयस्वान्] (→ @deva[वयस्या]) but @deva[मतुप्] applies to @deva[मूर्धन्वान्] (→ @deva[मूर्धन्वती]).\n\nExample: @deva[मूर्धन्वतीः उपदधाति] 'he lays Mūrdhanvatī bricks'\n\nIf the mantra contains only @deva[मूर्धन्] (not @deva[वयस्]), then @deva[यत्] applies: @deva[मूर्धन्याः].\n\nSee @ref[6.1.176].",
                "standard": "In @deva[छन्दस्], @deva[मूर्धन्वत्] takes @deva[मतुप्] (not @deva[यत्]) when denoting bricks laid with mantras containing @deva[वयस्].\n\nMantras with both @deva[वयस्] and @deva[मूर्धन्]: @deva[वयस्वान्] → @deva[वयस्या] (@deva[यत्]); @deva[मूर्धन्वान्] → @deva[मूर्धन्वती] (@deva[मतुप्]).\n\nExample: @deva[मूर्धन्वतीः उपदधाति].\n\nWithout @deva[वयस्], only @deva[मूर्धन्]: @deva[मूर्धन्याः] (@deva[यत्]).\n\nSee @ref[6.1.176].",
                "advanced": "@deva[मूर्धन्वत्] takes @deva[मतुप्] in @deva[छन्दस्] for @deva[वयस्या] bricks.\n\n@deva[वयस्या] and @deva[मूर्धन्वत्या] denote same object. @deva[मूर्धन्] alone → @deva[मूर्धन्याः].\n\n@ref[6.1.176]."
            }
        },
        "44128": {
            "en": {
                "simple": "In the Vedas, the affix @deva[यत्] with the force of @deva[मतुप्] comes after a word in the nominative case, when the derived word means 'a month' or 'a body'.\n\nThis supersedes @deva[मतुप्] and affixes with @deva[मतुप्] sense.\n\nMonth names:\n- @deva[नभांसि विद्यन्ते यस्मिन् मासे] → @deva[नभस्यः] 'month of clouds' (June-July)\n- @deva[सहस्यः] (Pauṣa, Nov-Dec)\n- @deva[तपस्यः] (Phālguna, Feb-March)\n- @deva[मधव्यः] (Vaiśākha, April-May) — derived: @deva[मधु] + @deva[यत्] → @deva[मधा] (@ref[6.4.146]) + @deva[यत्] → @deva[मधव्यः] (@ref[6.1.79]) 'month of honey'\n\nBody: @deva[ओजस्या तनूः] 'bodies full of vigor'\n\nCondition: Must denote month or body. Otherwise @deva[मतुप्]: @deva[मधुमता पात्रेण चरति].\n\n@deva[वार्त्तिक]: @deva[यत्] optionally when sense is 'immediately after': @deva[माधव्यः] or @deva[माधवः मासः].\n\n@deva[वार्त्तिक]: Sometimes affix elided; sometimes @deva[अ], @deva[इ], @deva[र] serve same purpose: @deva[तपः]/[@deva[तपस्यः], @deva[इषो मासः], @deva[शुचिर्मासः].",
                "standard": "In @deva[छन्दस्], @deva[यत्] with @deva[मत्वर्थ] comes after @deva[प्रथमान्त] when result means @deva[मास] (month) or @deva[तनु] (body). Supersedes @deva[मतुप्].\n\nMonths: @deva[नभस्यः] (Śrāvaṇa), @deva[सहस्यः] (Pauṣa), @deva[तपस्यः] (Phālguna), @deva[मधव्यः] (Vaiśākha).\n\nBody: @deva[ओजस्या तनूः].\n\nCondition: @deva[मास]/[@deva[तनु] sense. Otherwise @deva[मतुप्]: @deva[मधुमता पात्रेण].\n\n@note[type=vārtika]: Optional @deva[यत्] for 'immediately after': @deva[माधव्यः]/[@deva[माधवः].\n@note[type=vārtika]: @deva[लुक्] possible; @deva[अ]/[@deva[इ]/[@deva[र] alternatives: @deva[तपः], @deva[इषो मासः], @deva[शुचिर्मासः].",
                "advanced": "@deva[यत्] with @deva[मत्वर्थ] after @deva[प्रथमान्त] in @deva[छन्दस्], @deva[मास]/[@deva[तनु] sense. Supersedes @deva[मतुप्].\n\nExamples: @deva[नभस्यः], @deva[सहस्यः], @deva[तपस्यः], @deva[मधव्यः] (@ref[6.4.146], @ref[6.1.79]); @deva[ओजस्या तनूः].\n\n@note[type=vārtika]: @deva[अनन्तरार्थे विभाषा]: @deva[माधव्यः]/[@deva[माधवः].\n@note[type=vārtika]: @deva[लुक्], @deva[अ]/[@deva[इ]/[@deva[र] alternatives."
            }
        },
        "44129": {
            "en": {
                "simple": "In the Vedas, the affixes @deva[यत्] and @deva[ष] with the force of @deva[मतुप्] come after the word @deva[मधु] (honey).\n\nExamples:\n- With @deva[ष]: @deva[माधवः] 'month of honey' (Vaiśākha)\n- With @deva[यत्]: @deva[मधव्यः]\n- With @deva[लुक्] (affix elided): @deva[मधुः]\n\nAll three forms mean the month of Vaiśākha or a body (@deva[तनु]).",
                "standard": "In @deva[छन्दस्], after @deva[मधु], @deva[यत्] and @deva[ष] apply with @deva[मत्वर्थ].\n\nForms: @deva[माधवः] (@deva[ष]), @deva[मधव्यः] (@deva[यत्]), @deva[मधुः] (@deva[लुक्]).\n\nAll = Vaiśākha month or @deva[तनु]: @deva[माधवाः], @deva[मधव्या], @deva[मधुः].",
                "advanced": "@deva[मधु] takes @deva[यत्] and @deva[ष] in @deva[छन्दस्], @deva[मत्वर्थ].\n\nForms: @deva[माधवः], @deva[मधव्यः], @deva[मधुः] (@deva[लुक्])."
            }
        },
        "44130": {
            "en": {
                "simple": "The affixes @deva[यत्] and @deva[ख] with the force of @deva[मतुप्] come after the word @deva[ओजस्] (vigor) when 'a day' (@deva[अहन्]) is meant.\n\nExamples:\n- With @deva[यत्]: @deva[ओजस्यम्] 'day' (lit. full of heat)\n- With @deva[ख]: @deva[ओजसीनम्]",
                "standard": "After @deva[ओजस्], @deva[यत्] and @deva[ख] apply with @deva[मत्वर्थ] when meaning @deva[अहन्] (day).\n\nForms: @deva[ओजस्यम्] (@deva[यत्]), @deva[ओजसीनम्] (@deva[ख]) = @deva[अहः] 'day'.",
                "advanced": "@deva[ओजस्] takes @deva[यत्]/[@deva[ख] with @deva[मत्वर्थ], @deva[अहन्] sense.\n\nForms: @deva[ओजस्यम्], @deva[ओजसीनम्]."
            }
        },
        "44131": {
            "en": {
                "simple": "In the Vedas, the affix @deva[यल्] with the force of @deva[मतुप्] comes after the word @deva[भग] (fortune) when it has @deva[वेशस्] (strength) or @deva[यशस्] (fame) as its first member.\n\nThe @deva[ल्] of @deva[यल्] indicates the accent falls on the preceding vowel (@ref[6.1.193]).\n\nExamples:\n- @deva[वेशोभगो विद्यते यस्य स] → @deva[वेशोभग्यः] 'possessing strength and fortune'\n- @deva[यशोभग्यः] 'possessing fame and fortune'\n\n@deva[भग] means fortune, desire, effort, greatness, virility, and fame. @deva[वेशोभग] may be a @deva[द्वन्द्व] of @deva[वेशस्] (force) and @deva[भग] (fortune).",
                "standard": "In @deva[छन्दस्], after @deva[भग] with @deva[वेशस्]/[@deva[यशस्] as @deva[पूर्वपद], @deva[यल्] applies with @deva[मत्वर्थ].\n\n@deva[ल्] → accent on preceding vowel (@ref[6.1.193]).\n\nExamples: @deva[वेशोभग्यः], @deva[यशोभग्यः].\n\n@deva[वेशोभग] possibly @deva[द्वन्द्व]: @deva[वेशस्] + @deva[भग].",
                "advanced": "@deva[वेशोयशआदिभगान्त] takes @deva[यल्] in @deva[छन्दस्], @deva[मत्वर्थ].\n\nExamples: @deva[वेशोभग्यः], @deva[यशोभग्यः].\n\n@deva[ल्] for @deva[उपोत्तमोदात्त] (@ref[6.1.193])."
            }
        },
        "44132": {
            "en": {
                "simple": "In the Vedas, the affix @deva[ख] with the force of @deva[मतुप्] comes after the words @deva[वेशोभग] and @deva[यशोभग].\n\nExamples:\n- @deva[वेशोभगीनः] 'possessing strength and fortune'\n- @deva[यशोभगीनः] 'possessing fame and fortune'\n\nThis sūtra is separated from the previous to prevent @deva[यथासंख्य] (@ref[1.3.10])—otherwise @deva[यल्] would apply only to @deva[वेशोभग] and @deva[ख] only to @deva[यशोभग]. Also, only @deva[ख] (not @deva[यल्]) continues to the next sūtra.",
                "standard": "In @deva[छन्दस्], after @deva[वेशोभग] and @deva[यशोभग], @deva[ख] applies with @deva[मत्वर्थ].\n\nExamples: @deva[वेशोभगीनः], @deva[यशोभगीनः].\n\nSeparate from @ref[4.4.131] to avoid @deva[यथासंख्य] (@ref[1.3.10]). Only @deva[ख] (not @deva[यल्]) continues to @ref[4.4.133].",
                "advanced": "@deva[वेशोभग]/[@deva[यशोभग] takes @deva[ख] in @deva[छन्दस्], @deva[मत्वर्थ].\n\nExamples: @deva[वेशोभगीनः], @deva[यशोभगीनः].\n\nSeparate sūtra: @deva[यथासंख्यनिवृत्ति]; @deva[ख]-@deva[अनुवृत्ति] to @ref[4.4.133]."
            }
        },
        "44133": {
            "en": {
                "simple": "The affixes @deva[इन्], @deva[ख], and @deva[य] come after the word @deva[पूर्व] (ancestors) in the instrumental case, in the sense of 'made by them'.\n\nNote: The @deva[अनुवृत्ति] of @deva[मत्वर्थ] now ceases.\n\nExamples:\n- With @deva[इन्]: @deva[पूर्वैः कृतम्] → @deva[पूर्विणः] 'made by ancestors' (i.e., a road)\n- With @deva[य]: @deva[पूर्व्यः]\n- With @deva[ख]: @deva[पूर्वीणः]\n\nThese words usually appear in plural, meaning 'roads widened by the forefathers':\n- @deva[गम्भीरेभिः पथिभिः पूर्विणेभिः]\n- @deva[ये ते पन्थाः सवितः पूर्व्यासः] (@deva[ऋग्वेद] I.35.11)",
                "standard": "After @deva[पूर्व] (in @deva[तृतीया]), @deva[इन्], @deva[ख], @deva[य] apply in sense @deva[कृतम्] (made). @deva[मत्वर्थ]-@deva[अनुवृत्ति] ceases.\n\nExamples: @deva[पूर्विणः]/[@deva[पूर्व्यः]/[@deva[पूर्वीणः] = roads widened by ancestors.\n\nVedic usage (plural): @deva[पथिभिः पूर्विणेभिः]; @deva[पन्थाः...पूर्व्यासः] (@deva[ऋग्वेद] I.35.11).",
                "advanced": "@deva[पूर्व] (in @deva[तृतीया]) takes @deva[इन्]/[@deva[ख]/[@deva[य] in sense @deva[कृतम्]. @deva[मत्वर्थ] ceases.\n\nForms: @deva[पूर्विणः], @deva[पूर्व्यः], @deva[पूर्वीणः].\n\n@deva[ऋग्वेद] I.35.11: @deva[ये ते पन्थाः सवितः पूर्व्यासः]."
            }
        },
        "44134": {
            "en": {
                "simple": "In the Vedas, the affix @deva[यत्] comes after the word @deva[अपस्] (water) in the instrumental case, in the sense of 'sanctified thereby'.\n\nExample: @deva[अप्यम्] 'offering purified with water' as in:\n@deva[यस्येदम् अप्यं हविः] 'whose offering is purified with water'",
                "standard": "In @deva[छन्दस्], after @deva[अपस्] (in @deva[तृतीया]), @deva[यत्] applies in sense @deva[संस्कृतम्] (sanctified).\n\nExample: @deva[अप्यम्] 'water-sanctified offering' (@deva[यस्येदम् अप्यं हविः]).",
                "advanced": "@deva[अपस्] (in @deva[तृतीया]) takes @deva[यत्] in @deva[छन्दस्], sense @deva[संस्कृतम्].\n\nExample: @deva[अप्यम्] (@deva[यस्येदम् अप्यं हविः])."
            }
        },
        "44135": {
            "en": {
                "simple": "In the Vedas, the affix @deva[घ] comes after the word @deva[सहस्र] (thousand) in the instrumental case, in the sense of 'equal to that'.\n\nExample: @deva[सहस्रेण संमितः] 'equal to a thousand' → @deva[सहस्रियः] 'like unto a thousand'\n\nAs in:\n- @deva[सहस्रियासो अपां नोर्मयः] 'the waves of water are thousand-like'\n- @deva[अयम् अग्निः सहस्रियः] 'this fire is like a thousand'\n\nThe word @deva[संमित] means @deva[तुल्य] (equal). Some read @deva[समित] instead, with the same meaning.",
                "standard": "In @deva[छन्दस्], after @deva[सहस्र] (in @deva[तृतीया]), @deva[घ] applies in sense @deva[संमितः] (equal to).\n\nExample: @deva[सहस्रियः] 'equal to a thousand' (@deva[सहस्रियासो अपां नोर्मयः]; @deva[अयम् अग्निः सहस्रियः]).\n\n@deva[संमित] = @deva[तुल्य]. Variant: @deva[समित].",
                "advanced": "@deva[सहस्र] (in @deva[तृतीया]) takes @deva[घ] in @deva[छन्दस्], sense @deva[संमितः/तुल्यः].\n\nExample: @deva[सहस्रियः]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.4.121-135)")

if __name__ == "__main__":
    main()
