#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 3.4.16-3.4.30 (Batch 2)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "34016": {
        "en": {
            "simple": "In Vedic, the affix @deva[तोसुन्] forms infinitives after eight roots when expressing mere action-name (@deva[भावलक्षण]): @deva[स्था], @deva[इ], @deva[कृ], @deva[वद्], @deva[चर्], @deva[हु], @deva[तम्], @deva[जन्]. Examples: @deva[आ संस्थातोः वेद्यां सीदन्ति] 'they sit on the altar until the conclusion'; @deva[पुरा सूर्यस्य उदेतोः] 'before the rising of the sun'; @deva[आ होतोः] 'until the sacrifice'.",
            "standard": "In @deva[छन्दस्], @deva[तोसुन्] forms @deva[भावलक्षण] infinitives (denoting mere action) after @deva[स्था], @deva[इण्], @deva[कृञ्], @deva[वद्], @deva[चर्], @deva[हु], @deva[तम्], @deva[जन्]. Unlike @ref[3.4.14], @deva[कृत्यार्थ] does not apply. Examples: @deva[आ संस्थातोः वेद्यां सीदन्ति] = @deva[आसमाप्तेः]; @deva[पुरा सूर्यस्योदेतोः आधेयः]; @deva[पुरा वत्सानाम् अपाकर्तोः]; @deva[पुरा प्रवदितोः अग्नौ प्रहोतव्यम्] (Gopatha Br. II.2.10); @deva[आ होतोः अप्रमत्तस् तिष्ठति]; @deva[आ तमितोः आसोत] (Taitt. Br. I.4.4.2); @deva[आ विजनितोः सम्भवाम] (Taitt. S. II.5.1.5).",
            "advanced": "@deva[तोसुन्] in @deva[छन्दस्] after @deva[स्था], @deva[इण्], @deva[कृञ्], @deva[वद्], @deva[चर्], @deva[हु], @deva[तम्], @deva[जन्] with @deva[भावलक्षण] sense (action-name, not @deva[कृत्यार्थ]). @deva[भावलक्षण] = @deva[भावो लक्ष्यते येन]. Examples: @deva[स्था] → @deva[आ संस्थातोः वेद्यां सीदन्ति]; @deva[इण्] → @deva[पुरा सूर्यस्योदेतोः आधेयः]; @deva[कृञ्] → @deva[पुरा वत्सानाम् अपाकर्तोः]; @deva[वद्] → @deva[पुरा प्रवदितोः अग्नौ प्रहोतव्यम्]; @deva[चर्] → @deva[पुरा प्रचरितोः आग्नीध्रीये होतव्याः] (Gopatha Br. II.2.10); @deva[हु] → @deva[आ होतोः अप्रमत्तस् तिष्ठति]; @deva[तम्] → @deva[आ तमितोः आसोत] (Taitt. Br. I.4.4.2); @deva[जन्] → @deva[आ विजनितोः सम्भवाम] (Taitt. S. II.5.1.5)."
        }
    },
    "34017": {
        "en": {
            "simple": "In Vedic, the affix @deva[कसुन्] forms infinitives after @deva[सृप्] (to creep) and @deva[तृद्] (to injure) with action-name sense. Examples: @deva[पुरा क्रूरस्य विसृपः] 'before the creeping of the cruel one' (Yaj. I.28); @deva[पुरा अत्रुभ्य आतृदः] 'before injuring' (RV VIII.1.12). These forms are indeclinable by @ref[1.1.40].",
            "standard": "In @deva[छन्दस्], @deva[कसुन्] forms @deva[भावलक्षण] infinitives after @deva[सृप्] and @deva[तृद्]. The @deva[क्] blocks @deva[गुण]/\u200b@deva[वृद्धि]. Examples: @deva[विसृपः] (@deva[पुरा क्रूरस्य विसृपः], Yaj. I.28); @deva[आतृदः] (@deva[पुरा अत्रुभ्य आतृदः], RV VIII.1.12). By @ref[1.1.40], these are @deva[अव्यय] (indeclinable).",
            "advanced": "@deva[कसुन्] in @deva[छन्दस्] after @deva[सृप्] and @deva[तृद्] with @deva[भावलक्षण] sense. @deva[क्] is @deva[इत्], blocking @deva[गुण]/\u200b@deva[वृद्धि] (@ref[1.1.5]). Formations: @deva[वि] + @deva[सृप्] + @deva[कसुन्] = @deva[विसृपः] (Yaj. I.28: @deva[पुरा क्रूरस्य विसृपः]); @deva[आ] + @deva[तृद्] + @deva[कसुन्] = @deva[आतृदः] (RV VIII.1.12). These are @deva[अव्यय] by @ref[1.1.40]."
        }
    },
    "34018": {
        "en": {
            "simple": "According to Eastern grammarians (@deva[प्राचाम्]), @deva[क्त्वा] (gerund) is used with @deva[अलम्] or @deva[खलु] to express prohibition. The Vedic @deva[अनुवृत्ति] stops here. Examples: @deva[अलं कृत्वा] 'don't make!', @deva[खलु पीत्वा] 'don't drink!', @deva[अलं काले रुदित्वा] 'don't weep, girl!' This is optional, so alternatively: @deva[अलं रोदनेन] 'enough crying'. Note: @deva[अलम्] here means prohibition, not decoration (@deva[अलङ्कारः]).",
            "standard": "Per @deva[प्राचाम्] (Eastern grammarians), @deva[क्त्वा] follows a root when @deva[अलम्] or @deva[खलु] expresses @deva[प्रतिषेध] (prohibition). The @deva[छन्दस्] @deva[अनुवृत्ति] ends here. Examples: @deva[अलं कृत्वा] 'don't make'; @deva[खलु पीत्वा] 'don't drink'; @deva[अलं काले रुदित्वा] 'don't weep, O girl'. Without @deva[अलम्]/\u200b@deva[खलु]: @deva[माकार्षीः] 'don't make'. Without prohibition sense: @deva[अलङ्कारः] 'ornament'. The @deva[प्राचाम्] makes this optional; alternatively @deva[अलं रोदनेन]. Or @deva[प्राचाम्] is merely honorific (@deva[पूजार्थ]) per @ref[3.1.94].",
            "advanced": "Per @deva[प्राचाम्], @deva[क्त्वा] with @deva[अलम्]/\u200b@deva[खलु] expressing @deva[प्रतिषेध]. The @deva[छन्दस्] @deva[अनुवृत्ति] terminates. Examples: @deva[अलं कृत्वा], @deva[खलु पीत्वा], @deva[अलं काले रुदित्वा]. Counterexamples: without @deva[अलम्]/\u200b@deva[खलु] → @deva[माकार्षीः]; without @deva[प्रतिषेध] → @deva[अलङ्कारः]. The @deva[प्राचाम्] indicates @deva[विकल्प]: alternative is @deva[अलं रोदनेन]. Or per @ref[3.1.94], @deva[प्राचाम्] is @deva[पूजार्थ] (honorific mention) with no functional difference."
        }
    },
    "34019": {
        "en": {
            "simple": "Per Eastern grammarians, @deva[क्त्वा] is added to @deva[मेङ्] (to exchange) even when the gerund action is not prior to the main verb - an exception to @ref[3.4.21]. Example: @deva[अपमित्य याचते] 'having offered exchange, he asks' (here asking may precede exchanging). Derivation: @deva[अप] + @deva[मे] + @deva[क्त्वा] → @deva[अपमित्य] (via @ref[6.1.45], @ref[6.1.71], @ref[7.4.40]). Being optional, alternative is: @deva[याचित्वा अपमयते] (normal order).",
            "standard": "Per @deva[प्राचाम्], @deva[क्त्वा] after @deva[मेङ्] in @deva[विनिमय] (exchange) sense, even when the gerund action isn't temporally prior (exception to @ref[3.4.21]). @deva[अपमित्य याचते] 'offering exchange, he asks'. Derivation: @deva[अप] + @deva[मे] + @deva[क्त्वा] = @deva[अप] + @deva[मा] + @deva[ल्यप्] = @deva[अपमित्य] (@ref[6.1.45], @ref[6.1.71], @ref[7.4.40]). Alternative (normal usage): @deva[याचित्वा अपमयते]. The root appears as @deva[माङ्] (not @deva[मेङ्]) in the sūtra, indicating a paribhāṣā: roots ending in @deva[ए]/\u200b@deva[ओ]/\u200b@deva[ऐ] retain that status even with @deva[अनुबन्ध].",
            "advanced": "Per @deva[प्राचाम्], @deva[क्त्वा] after @deva[मेङ्] in @deva[विनिमय] sense - an @deva[अपवाद] to @ref[3.4.21] (prior-action requirement). @deva[अपमित्य याचते]: @deva[अप] + @deva[मे] + @deva[क्त्वा] → @deva[अप] + @deva[मा] (by @ref[6.1.45]) + @deva[ल्यप्] → @deva[अप] + @deva[मि] + @deva[तुक्] + @deva[य] (@ref[6.1.71]) → @deva[अपमित्य] (@ref[7.4.40]). The root is shown as @deva[माङ्] (not @deva[मेङ्]), indicating the @deva[परिभाषा]: roots ending in @deva[ए]/\u200b@deva[ओ]/\u200b@deva[ऐ] without @deva[अनुबन्ध] retain that status with @deva[अनुबन्ध]. Thus @deva[दैप्] → @deva[दाप्] possible (hence excluded from @deva[घु] by @ref[1.1.20])."
        }
    },
    "34020": {
        "en": {
            "simple": "@deva[क्त्वा] expresses relative position (@deva[परावरयोग]) - being on this side (@deva[अवर]) or the far side (@deva[पर]) of something. Example: @deva[अप्राप्य नदीं पर्वतः स्थितः] 'the mountain stands without reaching the river' = 'the mountain is on this side of the river'. Similarly: @deva[अतिक्रम्य पर्वतं नदी स्थिता] 'having crossed the mountain, the river stands' = 'the river is beyond the mountain'. Here the gerund doesn't denote prior action.",
            "standard": "@deva[क्त्वा] denotes @deva[परावरयोग] (relative spatial position: @deva[पर] = far side, @deva[अवर] = near side). The gerund here doesn't indicate temporal sequence. Examples: @deva[अप्राप्य नदीं पर्वतः स्थितः] 'the mountain stands, not having reached the river' = 'the mountain is on this side of the river' (river is @deva[पर]); @deva[अतिक्रम्य पर्वतं नदी स्थिता] 'the river stands, having crossed the mountain' = 'the river is beyond the mountain'. The gerund expresses spatial reference, not prior action.",
            "advanced": "@deva[क्त्वा] for @deva[परावरयोग] (spatial relation): @deva[पर] (far side), @deva[अवर] (near side). This is another exception where the gerund doesn't denote prior action. @deva[अप्राप्य नदीं पर्वतः स्थितः] - the mountain, as agent of 'not reaching,' is @deva[अवर] relative to the river. @deva[अतिक्रम्य पर्वतं नदी स्थिता] - the river is @deva[पर] relative to the mountain. Per G.P.: 'The gerund implies the situation of a thing with reference to another, though the gerund action is not temporally prior.'"
        }
    },
    "34021": {
        "en": {
            "simple": "When two actions have the same agent, @deva[क्त्वा] is added to the verb whose action occurs first in time. Example: @deva[भुक्त्वा व्रजति] 'having eaten, he goes' - eating precedes going. Multiple gerunds: @deva[स्नात्वा पीत्वा भुक्त्वा दत्वा व्रजति] 'having bathed, drunk, eaten, and given, he goes'. Different agents require locative absolute: @deva[भुक्तवति ब्राह्मणे गच्छति देवदत्तः] 'the Brahmin having eaten, Devadatta goes'. Simultaneous actions use @deva[च]: @deva[व्रजति च जल्पति च] 'he goes and chatters'.",
            "standard": "@deva[क्त्वा] attaches to the root of the temporally prior action when @deva[समानकर्तृक] (same agent). @deva[भुक्त्वा व्रजति] 'having eaten, he goes'. Multiple: @deva[स्नात्वा पीत्वा भुक्त्वा दत्वा व्रजति]. Conditions: (1) @deva[समानकर्तृक] - different agents require @deva[सप्तमी] absolute (@deva[भुक्तवति ब्राह्मणे गच्छति देवदत्तः]); (2) @deva[पूर्वकाल] - coeval actions use @deva[च] (@deva[व्रजति च जल्पति च]).\n\nVārtika: @deva[आस्यं व्यादाय स्वपिति] 'he sleeps with mouth open', @deva[सम्मील्य हसति] 'he laughs with eyes closed' - valid despite gerund not denoting strictly prior action (manner/concomitance).",
            "advanced": "@deva[क्त्वा] after the @deva[पूर्वकालिन्] (temporally prior) root when @deva[समानकर्तृक]. @deva[भुक्त्वा व्रजति], @deva[पीत्वा व्रजति]. The rule extends to chains: @deva[स्नात्वा पीत्वा भुक्त्वा दत्वा व्रजति]. Conditions: @deva[समानकर्तृक] - otherwise @deva[सप्तम्यन्त] @deva[क्त्वन्त] (@deva[भुक्तवति ब्राह्मणे गच्छति देवदत्तः]); @deva[पूर्वकाल] - otherwise coordinate @deva[च] (@deva[व्रजति च जल्पति च] for simultaneous actions).\n\n@note[type=vārtika]: @deva[आस्यं व्यादाय स्वपिति], @deva[सम्मील्य हसति] are valid - the gerund expresses manner/concomitant circumstance, not strict temporal priority."
        }
    },
    "34022": {
        "en": {
            "simple": "@deva[णमुल्] and @deva[क्त्वा] express reiteration (@deva[आवृत्ति]) when the verb is doubled. The same-agent and prior-action conditions from @ref[3.4.21] apply. Examples: @deva[भोजं भोजं व्रजति] 'having eaten repeatedly, he goes'; @deva[भुक्त्वा भुक्त्वा व्रजति] (same meaning); @deva[पायं पायं व्रजति] 'having drunk repeatedly, he goes'. See @ref[8.1.4] for the doubling rule.",
            "standard": "@deva[णमुल्] and @deva[क्त्वा] express @deva[आवृत्ति] (reiteration) with verb doubling. The @deva[समानकर्तृक] and @deva[पूर्वकाल] conditions continue from @ref[3.4.21]. The @deva[च] introduces @deva[क्त्वा] alongside @deva[णमुल्]. Examples: @deva[भोजं भोजं व्रजति] 'repeatedly eating, he goes'; @deva[भुक्त्वा भुक्त्वा व्रजति]; @deva[पायं पायं व्रजति]. The doubling is essential - single usage doesn't convey reiteration. See @ref[8.1.4].",
            "advanced": "@deva[णमुल्] and @deva[क्त्वा] (via @deva[च]) for @deva[आवृत्ति] with doubling. @deva[अनुवृत्ति] of @deva[समानकर्तृक] and @deva[पूर्वकाल] from @ref[3.4.21]. The affixes convey reiteration only when doubled (@ref[8.1.4]); single usage doesn't. Examples: @deva[भोजं भोजं व्रजति], @deva[भुक्त्वा भुक्त्वा व्रजति], @deva[पायं पायं व्रजति]. This is distinct from @deva[यङन्त] (intensive) where frequentative meaning is lexically inherent without doubling."
        }
    },
    "34023": {
        "en": {
            "simple": "@deva[णमुल्] and @deva[क्त्वा] are not used when @deva[यद्] is in a self-contained sentence (no @deva[आकाङ्क्षा] - interdependence with another clause). Example: @deva[यद् अयं भुङ्क्ते ततः पचति] 'when he eats, then he cooks' - no gerund because the @deva[यद्...ततः] construction is complete. But with @deva[आकाङ्क्षा]: @deva[यद् अयं भुक्त्वा व्रजति] 'when he goes having eaten...' (incomplete, needs more).",
            "standard": "@deva[णमुल्] and @deva[क्त्वा] are blocked when @deva[यद्] is in composition and the sentence lacks @deva[आकाङ्क्षा] (syntactic incompleteness/dependency). @deva[आकाङ्क्षा] = inability to convey full sense without another clause. Without @deva[आकाङ्क्षा]: @deva[यद् अयं भुङ्क्ते ततः पचति] 'when he eats, he cooks' - complete with @deva[यद्...ततः]. With @deva[आकाङ्क्षा]: @deva[यद् अयं भुक्त्वा व्रजति] (needs complement) - gerund allowed. Böhtlingk: 'With @deva[यद्], absolutives don't apply unless the verbs require another as complement.'",
            "advanced": "@deva[णमुल्] and @deva[क्त्वा] blocked with @deva[यद्] when @deva[अनाकाङ्क्षा] (self-sufficient sentence). @deva[आकाङ्क्षा] = syntactic incompleteness requiring another element. Self-sufficient @deva[यद्]-clause: @deva[यद् अयं भुङ्क्ते ततः पचति], @deva[यद् अयम् अधीते ततः शेते] - prior-subsequent actions complete the sense; no gerund. With @deva[आकाङ्क्षा]: @deva[यद् अयं भुक्त्वा व्रजति, अधीत एव ततः परम्] - the @deva[यद्]-clause is incomplete without complement; gerund permitted."
        }
    },
    "34024": {
        "en": {
            "simple": "@deva[णमुल्] and @deva[क्त्वा] are optional after the prior-action verb when @deva[अग्रे] (first), @deva[प्रथमम्] (first), or @deva[पूर्वम्] (before) is in composition. Example: @deva[अग्रे भोजं भुक्त्वा व्रजति] 'having first eaten, he goes'. The option allows regular tenses too: @deva[अग्रे भुङ्क्ते ततः व्रजति] 'he eats first, then goes'. Note: @ref[3.1.94] doesn't apply when both @deva[क्त्वा] and @deva[णमुल्] are enjoined together, so the option must be stated.",
            "standard": "@deva[णमुल्] and @deva[क्त्वा] are @deva[विकल्प] (optional) with @deva[अग्रे], @deva[प्रथमम्], @deva[पूर्वम्] in composition. @deva[समानकर्तृक] and @deva[पूर्वकाल] continue. @deva[आवृत्ति] is not understood here. Examples: @deva[अग्रे/प्रथमं/पूर्वं भोजं भुक्त्वा व्रजति]. The @deva[विकल्प] allows @deva[लट्] etc.: @deva[अग्रे भुङ्क्ते ततः व्रजति]. The explicit @deva[विकल्प] indicates a @deva[परिभाषा]: @ref[3.1.94] doesn't apply when @deva[क्त्वा] and @deva[णमुल्] are co-enjoined. For reiteration (@ref[3.4.22]), only @deva[क्त्वा]/\u200b@deva[णमुल्] apply. No @deva[उपपद समास] by @ref[2.2.20] because both affixes are enjoined.",
            "advanced": "@deva[णमुल्] and @deva[क्त्वा] with @deva[विकल्प] when @deva[अग्रे]/\u200b@deva[प्रथम]/\u200b@deva[पूर्व] compose. @deva[अनुवृत्ति]: @deva[समानकर्तृक], @deva[पूर्वकाल] (not @deva[आवृत्ति]). This is @deva[अप्राप्तविभाषा]. Examples: @deva[अग्रे भोजं भुक्त्वा व्रजति], @deva[प्रथमं भोजं व्रजति]. The explicit @deva[विकल्प] establishes a @deva[परिभाषा]: @ref[3.1.94] (@deva[वासरूप]) doesn't govern when @deva[क्त्वा] and @deva[णमुल्] are co-enjoined by one rule. Hence @deva[आवृत्ति] uses only @deva[क्त्वा]/\u200b@deva[णमुल्], not @deva[लट्] etc. No @deva[उपपदसमास] (@ref[2.2.20]) since @deva[एव] there requires single-affix scenario."
        }
    },
    "34025": {
        "en": {
            "simple": "The affix @deva[खमुञ्] is added to @deva[कृ] (to make) when an accusative word is in composition and the sense is abuse/reproach. The real affix is @deva[अम्]; @deva[ख्] triggers the augment @deva[मुम्] (@ref[6.3.67]). Example: @deva[चोरं कारम् आक्रोशति] 'he reviles him as a thief' - calling someone a thief in anger, not actually making him one.",
            "standard": "@deva[खमुञ्] after @deva[कृ] with accusative in composition when expressing @deva[आक्रोश] (abuse/reproach). The affix is @deva[अम्]; @deva[ख्] is @deva[इत्], triggering @deva[मुम्] augment by @ref[6.3.67]. Example: @deva[चोरं कारम् आक्रोशति] 'he abuses him calling [him] a thief' - the person isn't actually made a thief; expressing indignation by @deva[चोरं करोति].",
            "advanced": "@deva[खमुञ्] after @deva[कृ] with @deva[द्वितीया] @deva[उपपद] in @deva[आक्रोश] (reproach) sense. The effective portion is @deva[अम्]; @deva[ख्] (@deva[इत्]) triggers @deva[मुम्] (@ref[6.3.67]). @deva[चोरं कारम् आक्रोशति] 'he reviles [him] as a thief' - figurative 'making' to express indignation, not actual transformation. The @deva[आक्रोश] semantics are essential; without it, regular @deva[कृ] usage applies."
        }
    },
    "34026": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[कृ] when a word meaning 'sweet' (@deva[स्वादु]) is in composition, with same-agent and prior-action applying. Example: @deva[स्वादुङ्कारं भुङ्क्ते] 'he eats, having made [the food] sweet'. The @deva[म्] in @deva[स्वादुम्] in the sūtra prevents @ref[4.1.44] from applying, so even with feminine @deva[यवागू], we use @deva[स्वादु] (not @deva[स्वाद्वी]). By @ref[3.1.94], @deva[क्त्वा] alternative: @deva[स्वादु कृत्वा भुङ्क्ते].",
            "standard": "@deva[णमुल्] after @deva[कृ] with @deva[स्वादु]-type @deva[उपपद] in composition. @deva[अनुवृत्ति] of @deva[समानकर्तृक] and @deva[पूर्वकाल] from @ref[3.4.21]. Examples: @deva[स्वादुङ्कारं भुङ्क्ते] 'eats having sweetened'; @deva[लक्षणङ्कारं भुङ्क्ते] 'eats having seasoned'. The anomalous @deva[स्वादुम्] (with @deva[म्]) in the sūtra indicates that @ref[4.1.44] (feminine @deva[ई] for @deva[उ]-ending) doesn't apply: @deva[स्वादुङ्कारं यवागूं भुङ्क्ते] (not @deva[स्वाद्वीम्]). With @deva[च्वि] sense (@deva[अस्वाद्वीं स्वाद्वीं कृत्वा]): @deva[स्वादुङ्कारं भुङ्क्ते]. @deva[क्त्वा] alternative by @ref[3.1.94]: @deva[स्वादु कृत्वा भुङ्क्ते]. Passive construction not valid: *@deva[स्वादुङ्कारं यवागूर् भुज्यते देवदत्तेन].",
            "advanced": "@deva[णमुल्] after @deva[कृ] with @deva[स्वादु]-class @deva[उपपद]. @deva[अनुवृत्ति]: @deva[समानकर्तृक], @deva[पूर्वकाल] (@ref[3.4.21]). The @deva[म्] in @deva[स्वादुम्] is @deva[निपातन] blocking @ref[4.1.44] (so @deva[स्वादुङ्कारं यवागूम्], not @deva[स्वाद्वीम्]). Why not @deva[खमुञ्] (previous sūtra)? @deva[खमुञ्] gives @deva[मुम्] augment (@ref[6.3.67]) but not in @deva[अव्यय] contexts; with @deva[च्वि] (@deva[अस्वाद्वीं स्वाद्वीम्]), the result is @deva[अव्यय] by @ref[1.4.61], so @deva[मुम्] wouldn't apply. Hence @deva[णमुल्] is specified. These affixes convey @deva[भाव] (@deva[तुमर्थ], @ref[3.4.16]). Passive invalid: *@deva[स्वादुङ्कारं भुज्यते]."
        }
    },
    "34027": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[कृ] when @deva[अन्यथा] (otherwise), @deva[एवम्] (so), @deva[कथम्] (how), or @deva[इत्थम्] (thus) is in composition, provided @deva[कृ] could be omitted without changing meaning. Examples: @deva[अन्यथाकारं भुङ्क्ते] = @deva[अन्यथा भुङ्क्ते] 'he eats otherwise'. But when @deva[कृ] is essential: @deva[अन्यथा कृत्वा शिरो भुङ्क्ते] 'having turned his head aside, he eats' - here @deva[णमुल्] doesn't apply.",
            "standard": "@deva[णमुल्] after @deva[कृ] with @deva[अन्यथा], @deva[एवम्], @deva[कथम्], @deva[इत्थम्] in composition when @deva[कृञः अप्रयोग उपपद्यते] (non-use of @deva[कृ] would be valid). The sentence should remain correct without @deva[कृ]. Examples: @deva[अन्यथाकारं भुङ्क्ते] = @deva[अन्यथा भुङ्क्ते] 'eats otherwise'; @deva[एवङ्कारं भुङ्क्ते] = @deva[एवं भुङ्क्ते]; @deva[कथङ्कारं भुङ्क्ते] 'how does he eat?'; @deva[इत्थङ्कारं भुङ्क्ते] 'eats thus'. Counterexample: @deva[अन्यथा कृत्वा शिरो भुङ्क्ते] - @deva[कृ] is essential (turning head), so @deva[क्त्वा] not @deva[णमुल्].",
            "advanced": "@deva[णमुल्] after @deva[कृ] with @deva[अन्यथा]/\u200b@deva[एवम्]/\u200b@deva[कथम्]/\u200b@deva[इत्थम्] when @deva[कृञः अप्रयोग उपपद्यते] - the sentence would be grammatical and semantically equivalent without @deva[कृ]. @deva[अन्यथाकारं भुङ्क्ते] = @deva[अन्यथा भुङ्क्ते]; @deva[एवङ्कारं], @deva[कथङ्कारं], @deva[इत्थङ्कारं] similarly. When @deva[कृ] contributes essential meaning: @deva[अन्यथा कृत्वा शिरो भुङ्क्ते] 'having positioned his head otherwise, he eats' - @deva[कृ] is indispensable; @deva[क्त्वा] applies, not @deva[णमुल्]."
        }
    },
    "34028": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[कृ] when @deva[यथा] or @deva[तथा] is in composition and an angry reply is intended (if @deva[कृ] could be omitted). Example: @deva[तथाकारं भोक्ष्ये, किं तवानेन] 'I'll eat that way - what's it to you?' Similarly @deva[यथाकारं भोक्ष्ये]. Without anger: @deva[यथा कृत्वाऽहं भोक्ष्ये तथा त्वं द्रक्ष्यसि] 'in what way I'll eat, that you'll see'. When @deva[कृ] is essential: @deva[यथा कृत्वाऽहं शिरो भोक्ष्ये] 'in what way turning my head...'",
            "standard": "@deva[णमुल्] after @deva[कृ] with @deva[यथा]/\u200b@deva[तथा] in @deva[प्रतिकूलप्रतिवचन] (angry reply) context, when @deva[कृञः अप्रयोगः] is valid. Examples: @deva[तथाकारं भोक्ष्ये, किं तवानेन] 'I'll eat that way - what's it to you?'; @deva[यथाकारं भोक्ष्ये, किं तवानेन]. Without anger (neutral statement): @deva[यथा कृत्वाऽहं भोक्ष्ये तथा त्वं द्रक्ष्यसि] 'in what way I'll eat, that you'll see' - @deva[क्त्वा] used. When @deva[कृ] is essential: @deva[यथा कृत्वा शिरो भोक्ष्ये, किं तवानेन] - @deva[क्त्वा] even with anger.",
            "advanced": "@deva[णमुल्] after @deva[कृ] with @deva[यथा]/\u200b@deva[तथा] when @deva[प्रतिकूलप्रतिवचन] (indignant/angry reply) and @deva[कृञः अप्रयोग उपपद्यते]. @deva[तथाकारं भोक्ष्ये, किं तवानेन]; @deva[यथाकारं भोक्ष्ये, किं तवानेन]. Without @deva[प्रतिकूलता]: @deva[यथा कृत्वाऽहं भोक्ष्ये तथा त्वं द्रक्ष्यसि] - neutral statement, @deva[क्त्वा] applies. When @deva[कृ] is indispensable: @deva[यथा कृत्वा शिरो भोक्ष्ये किं तवानेन] - @deva[क्त्वा] even in angry context because @deva[कृ] contributes essential meaning."
        }
    },
    "34029": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[दृश्] (to see) or @deva[विद्] (to know) when an object is in composition and the sense is the totality of such objects. Examples: @deva[कन्यादर्शं वरयति] 'he woos every girl he sees' (all the girls seen); @deva[ब्राह्मणवेदं भोजयति] 'he feeds every Brahmin he knows' (all the Brahmins known). Without totality sense: @deva[ब्राह्मणं दृष्ट्वा भोजयति] 'having seen the Brahmin, he feeds him'.",
            "standard": "@deva[णमुल्] after @deva[दृश्] or @deva[विद्] with @deva[कर्म] (object) in composition when @deva[पर्याप्ति] (totality/completeness) is intended. Examples: @deva[कन्यादर्शं वरयति] 'he woos every girl seen' (= all girls seen); @deva[ब्राह्मणवेदं भोजयति] 'he feeds every Brahmin known' (= all Brahmins he knows). Without @deva[पर्याप्ति]: @deva[ब्राह्मणं दृष्ट्वा भोजयति] 'having seen a/the Brahmin, he feeds [him]' - @deva[क्त्वा] applies normally.",
            "advanced": "@deva[णमुल्] after @deva[दृश्]/\u200b@deva[विद्] with @deva[कर्म] @deva[उपपद] in @deva[पर्याप्ति] (totality) sense. @deva[कन्यादर्शं वरयति] = @deva[यावत्यः कन्या दृष्टास् तावत्यो वरयति] (all girls seen); @deva[ब्राह्मणवेदं भोजयति] = @deva[यावन्तो ब्राह्मणा विदितास् तावतो भोजयति] (all Brahmins known). Without @deva[पर्याप्ति]: @deva[ब्राह्मणं दृष्ट्वा भोजयति] - simple prior-action gerund."
        }
    },
    "34030": {
        "en": {
            "simple": "@deva[णमुल्] is added to @deva[विद्] (to know/obtain) and @deva[जीव्] (to live) when @deva[यावत्] is in composition. Examples: @deva[यावद्वेदं भुङ्क्ते] 'he eats all that he gets/knows' (as much as obtained); @deva[यावज्जीवम् अधीते] 'he studies throughout his life' (as long as he lives).",
            "standard": "@deva[णमुल्] after @deva[विद्] and @deva[जीव्] with @deva[यावत्] in composition. Examples: @deva[यावद्वेदं भुङ्क्ते] 'he eats as much as he gets/knows'; @deva[यावज्जीवम् अधीते] 'he studies lifelong' (= throughout his life). The @deva[यावत्] expresses extent - either quantity (@deva[विद्]) or duration (@deva[जीव्]).",
            "advanced": "@deva[णमुल्] after @deva[विद्] and @deva[जीव्] with @deva[यावत्] in composition. @deva[यावद्वेदं भुङ्क्ते] - @deva[यावत्] quantifies what is known/obtained; @deva[यावज्जीवम् अधीते] - @deva[यावत्] indicates duration (lifelong). Both express extent: @deva[परिमाण] (measure) with @deva[विद्], @deva[काल] (time) with @deva[जीव्]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 3.4.16-3.4.30 (Batch 2)")
