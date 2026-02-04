#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.4.76-90."""

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
        "54076": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[अक्षि] (eye) when it does NOT mean 'the eye' (i.e., when used metaphorically). Examples: @deva[लवणाक्षम्] (salt-eye = salt-pit), @deva[पुष्कराक्षम्] (lotus-eye = lotus-pond). But: @deva[ब्राह्मणाक्षि] (a Brahmin's eye).",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[अक्षि] when it doesn't mean 'eye' literally (@deva[अदर्शने]). These are Tatpuruṣa metaphors formed by @ref[2.1.56]. Thus @deva[लवणाक्षम्] (salt-pit) and @deva[पुष्कराक्षम्] (lotus-pond). When @deva[अक्षि] means the actual eye: @deva[ब्राह्मणाक्षि] (a Brahmin's eye) doesn't take the affix. The forms @deva[कबराक्षः] (perforated horse-veil through which horses see) and @deva[गवाक्षः] (window through which people see) are not exceptions—@deva[दर्शन] here means 'eye' as a synonym, not 'seeing.'",
                "advanced": "The condition @deva[अदर्शने] excludes the literal eye-meaning. The term @deva[दर्शन] in the sūtra is interpreted as a synonym for 'eye' (@deva[अक्षि] = organ of sight), not the act of seeing. Thus @deva[गवाक्ष] (window, lit. 'cow-eye') and @deva[कबराक्ष] (horse-veil with holes) take the affix because @deva[अक्षि] there denotes 'eye-like opening,' not the act of seeing through them. The @ref[2.1.56] reference indicates these are metaphorical Tatpuruṣas."
            }
        },
        "54077": {
            "en": {
                "simple": "This sūtra lists 25 irregular formations with affix @deva[अच्]. Examples include: @deva[अचतुरः] (lacking four), @deva[स्त्रीपुंसौ] (man and woman), @deva[धेन्वनडुहौ] (cow and bull), @deva[ऋक्सामे] (Ṛk and Sāman), @deva[रात्रिंदिवम्] (night and day), @deva[जातोक्षः] (newborn bull).",
                "standard": "This sūtra lists irregular compounds taking @deva[अच्]: (1-3) Bahuvrīhis: @deva[अचतुरः] (whose four are absent), @deva[विचतुरः] (whose four are gone), @deva[सुचतुरः] (whose four are good). (4-14) Dvandvas: @deva[स्त्रीपुंसौ], @deva[धेन्वनडुहौ], @deva[ऋक्सामे], @deva[वाङ्मनसे], @deva[अक्षिभ्रुवम्] (singular by @ref[2.4.2] as body parts), @deva[दारगवम्], @deva[ऊर्वष्ठीवम्], @deva[पदष्ठीवम्], @deva[नक्तंदिवम्], @deva[रात्रिंदिवम्], @deva[अहर्दिवम्] (distributive: day by day). (15-16) Avyayībhāvas: @deva[सरजसम्] (completely), @deva[उपशुनम्] (near the dog). (17-20) Tatpuruṣas: @deva[निःश्रेयसम्], @deva[पुरुषायुषम्], @deva[द्व्यायुषम्], @deva[त्र्यायुषम्], @deva[ऋग्यजुषम्]. (21-23) Karmadhārayas: @deva[जातोक्षः], @deva[महोक्षः], @deva[वृद्धोक्षः]. (24-25) @deva[गोष्ठश्वः] (Locative Tatpuruṣa). A vārttika adds @deva[त्रिचतुराः], @deva[उपचतुराः].",
                "advanced": "Each compound type has specific counter-examples where @deva[अच्] doesn't apply. @deva[स्त्रीपुमान्] (brave towards women) is Tatpuruṣa, not Dvandva. @deva[सरजः पङ्कजम्] (lotus with pollen) is Bahuvrīhi, not Avyayībhāva. @deva[निश्रेयस्कः पुरुषः] uses @deva[क] affix. @deva[पुरुषायुषी] is Dvandva (man and lifespan together). @deva[द्व्यायुः]/deva[त्र्यायुः] are non-Samāhāra Dvigus. @deva[जातोक्षा ब्राह्मणाः] is Bahuvrīhi. @deva[उपशुनम्] shows irregular non-elision of @deva[टि] and @deva[सम्प्रसारण] of @deva[श्वन्] to @deva[शुन्]."
            }
        },
        "54078": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[वर्चस्] (brilliance/strength) when preceded by @deva[ब्रह्म] or @deva[हस्ति]. Examples: @deva[ब्रह्मवर्चसम्] (Brahmic brilliance), @deva[हस्तिवर्चसम्] (elephant's strength).",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[वर्चस्] (meaning 'light' or 'strength') when preceded by @deva[ब्रह्म] or @deva[हस्ति]. Thus @deva[ब्रह्मवर्चसम्] (spiritual radiance/power) and @deva[हस्तिवर्चसम्] (elephant-like strength). A vārttika extends this to @deva[पल्ल्य] and @deva[राजन्]: @deva[पल्ल्यवर्चसम्] and @deva[राजवर्चसम्].",
                "advanced": "The word @deva[वर्चस्] denotes both 'radiance/brilliance' and 'strength/vigor.' The compounds express metaphorical qualities: @deva[ब्रह्मवर्चस्] is the spiritual power or brilliance associated with Brahman/Vedic learning; @deva[हस्तिवर्चस्] is elephant-like strength. The vārttika extensions suggest a broader pattern with excellence-denoting first members."
            }
        },
        "54079": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[तमस्] (darkness) when preceded by @deva[अव], @deva[सम्], or @deva[अन्ध]. Examples: @deva[अवतमसम्] (deep darkness), @deva[सन्तमसम्] (complete darkness), @deva[अन्धतमसम्] (blind/pitch darkness).",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[तमस्] (darkness) when preceded by @deva[अव], @deva[सम्], or @deva[अन्ध]. Thus @deva[अवतमसम्], @deva[सन्तमसम्] (with @deva[सम्] + @deva[तमस्]), and @deva[अन्धतमसम्] (pitch/total darkness). These are Avyayībhāva or intensifying compounds expressing degrees of darkness.",
                "advanced": "The three prefixes intensify @deva[तमस्] in different ways: @deva[अव] suggests 'down into,' @deva[सम्] suggests 'complete,' and @deva[अन्ध] (blind) adds the sense of impenetrable darkness. The @deva[सम्] + @deva[तमस्] sandhi yields @deva[सन्तमसम्]. These compounds function as intensified expressions of darkness in various contexts."
            }
        },
        "54080": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[वसीयस्] (better) and @deva[श्रेयस्] (better/prosperity) when preceded by @deva[श्वस्] (tomorrow). Examples: @deva[श्वोवसीयसम्], @deva[श्वःश्रेयसम्] (may you have prosperity tomorrow).",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[वसीयस्] and @deva[श्रेयस्] when preceded by @deva[श्वस्] (tomorrow). These compounds belong to the @deva[मयूरव्यंसकादि] class (@ref[2.1.72]). The word @deva[श्वः] here expresses blessing or praise: @deva[श्वःश्रेयसं ते भूयात्] = @deva[शोभनं श्रेयस्ते भूयात्] (may good fortune be yours tomorrow/hereafter). @deva[वसीयस्] is derived from @deva[वसु] (praiseworthy/wealthy) with @deva[ईयसुन्] (@ref[5.3.57]).",
                "advanced": "The @deva[मयूरव्यंसकादि] class (@ref[2.1.72]) allows unusual compound formations. @deva[श्वस्] in benedictory contexts means 'in the future/hereafter' rather than literally 'tomorrow.' Both @deva[वसीयस्] and @deva[श्रेयस्] are comparative forms meaning 'better' or 'more excellent.' The compounds express wishes for future prosperity. @deva[श्वोवसीयसम्] shows sandhi of @deva[श्वस्] + @deva[व]."
            }
        },
        "54081": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[रहस्] (secret/solitude) when preceded by @deva[अनु], @deva[अव], or @deva[तप्त]. Examples: @deva[अनुरहसम्] (in secret/privately), @deva[अवरहसम्] (secretly), @deva[तप्तरहसम्] (heated secret/passion).",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[रहस्] (secret, solitude) when preceded by @deva[अनु], @deva[अव], or @deva[तप्त]. Thus @deva[अनुरहसम्], @deva[अवरहसम्], and @deva[तप्तरहसम्]. These are typically Avyayībhāva compounds used adverbially to mean 'in secret' or 'privately.'",
                "advanced": "The word @deva[रहस्] means 'secret,' 'solitude,' or 'private place.' The prefixes modify this: @deva[अनु] (following/according to), @deva[अव] (down/away), and @deva[तप्त] (heated/intense). @deva[अनुरहसम्] and @deva[अवरहसम्] function as adverbs meaning 'secretly' or 'in private.' @deva[तप्तरहसम्] may refer to intense or passionate secrets."
            }
        },
        "54082": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[उरस्] (chest) when preceded by @deva[प्रति] with locative meaning. Example: @deva[प्रत्युरसम्] = @deva[उरसि वर्तते] (situated on the chest). But: @deva[प्रत्युरः] = @deva[प्रतिगतम् उरः] (gone towards the chest).",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[उरस्] (chest) when preceded by @deva[प्रति] in an Avyayībhāva compound with locative sense (@ref[2.1.6]). Thus @deva[प्रत्युरसम्] = @deva[उरसि वर्तते] (something situated on the chest). Without the locative sense: @deva[प्रत्युरः] = @deva[प्रतिगतम् उरः] (gone towards/opposite the chest)—here the affix doesn't apply.",
                "advanced": "The condition @deva[सप्तम्यर्थे] (having locative meaning) is crucial. Avyayībhāva compounds with @deva[प्रति] can have different case meanings. When @deva[प्रति] + @deva[उरस्] means 'on the chest' (locative), @deva[अच्] applies yielding @deva[प्रत्युरसम्]. When the meaning is directional ('towards the chest'), the compound is @deva[प्रत्युरः] without the samāsānta affix."
            }
        },
        "54083": {
            "en": {
                "simple": "The word @deva[अनुगवम्] is irregularly formed, meaning 'suited to the length of cows/oxen.' Example: @deva[अनुगवं यानम्] (a chariot suited to the oxen's length). But: @deva[गवां पश्चात्] = @deva[अनुगु] (behind the cows).",
                "standard": "This sūtra teaches the irregular formation @deva[अनुगवम्] with @deva[अच्], meaning 'suited to the length' (@deva[प्रमाण]) of cows or oxen. The compound is formed by @ref[2.1.16]. Thus @deva[अनुगवं यानम्] means 'a chariot whose dimensions suit the length of the draft oxen.' When the meaning is 'behind the cows' (not length): @deva[गवां पश्चात्] = @deva[अनुगु]—the affix doesn't apply.",
                "advanced": "The condition @deva[प्रमाणे] (in the sense of measure/length) restricts this formation. @deva[अनुगव] specifically refers to proportional sizing—a vehicle dimensioned to match its draft animals. The alternative formation @deva[अनुगु] (following/behind cows) without @deva[अच्] shows the positional rather than proportional meaning. The @ref[2.1.16] reference indicates the compounding rule for proportional expressions."
            }
        },
        "54084": {
            "en": {
                "simple": "The words @deva[द्विस्तावा] and @deva[त्रिस्तावा] are irregular formations meaning an altar (@deva[वेदि]) twice or thrice the normal size. But for other objects: @deva[द्विस्तावती रज्जुः] (a rope twice as long).",
                "standard": "This sūtra teaches irregular formations @deva[द्विस्तावा] and @deva[त्रिस्तावा] with @deva[अच्] and @deva[टि]-elision, specifically for altars (@deva[वेदि]). These are compounds of @deva[द्विः]/deva[त्रिः] (twice/thrice) + @deva[तावत्] (as much). Thus @deva[द्विस्तावा वेदिः] (an altar twice the standard size) and @deva[त्रिस्तावा वेदिः] (thrice). When not referring to altars: @deva[द्विस्तावती रज्जुः], @deva[त्रिस्तावती रज्जुः] (a rope twice/thrice as long)—regular formation.",
                "advanced": "The restriction @deva[वेदौ] (when referring to an altar) limits this irregular formation to ritual contexts. The @deva[टि]-elision removes the final portion of @deva[तावत्]. For non-altar referents, the regular feminine @deva[तावती] is used. This reflects the special treatment of ritual terminology in Sanskrit grammar."
            }
        },
        "54085": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[अध्वन्] (path/journey) when preceded by an upasarga (verbal prefix). Examples: @deva[प्राध्वम्] (gone on the path), @deva[निरध्वम्], @deva[प्रत्यध्वम्]. But: @deva[परमाध्वा], @deva[उत्तमाध्वा] (supreme path).",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[अध्वन्] (path, road, journey) when preceded by an @deva[उपसर्ग] (verbal prefix). Thus @deva[प्रगतः अध्वानम्] = @deva[प्राध्वः रथः] (a chariot that has traveled), @deva[प्राध्वं शकटम्], @deva[निरध्वम्], @deva[प्रत्यध्वम्]. When preceded by non-upasargas: @deva[परमाध्वा], @deva[उत्तमाध्वा] (the highest/best path)—the affix doesn't apply.",
                "advanced": "The condition @deva[उपसर्गात्] restricts @deva[अच्] to compounds where the first member is a verbal prefix (@deva[प्र], @deva[नि], @deva[प्रति], etc.). These express movement or direction relative to the path. When the first member is an adjective like @deva[परम] or @deva[उत्तम] (supreme, highest), it's not an upasarga, so the samāsānta doesn't apply. This maintains the distinction between directional and descriptive compounds."
            }
        },
        "54086": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[अङ्गुलि] (finger/finger-breadth) in a Tatpuruṣa compound when preceded by a numeral or indeclinable. Examples: @deva[द्व्यङ्गुलम्] (two finger-breadths), @deva[त्र्यङ्गुलम्], @deva[निरङ्गुलम्] (without fingers).",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[अङ्गुलि] in Tatpuruṣa compounds when preceded by a numeral or indeclinable. Thus @deva[द्वे अङ्गुली प्रमाणमस्य] = @deva[द्व्यङ्गुलम्] (measuring two finger-breadths). Compounding by @ref[2.1.51]. These are Taddhitārtha compounds where the @deva[मात्रच्] affix denoting measure is elided (vārttika to @ref[5.2.37]). With indeclinables: @deva[निर्गतम् अङ्गुलिभ्यः] = @deva[निरङ्गुलम्], @deva[अत्यङ्गुलिः पुरुषः]. Non-Tatpuruṣa: @deva[पञ्चाङ्गुलिः] (Bahuvrīhi)—no affix.",
                "advanced": "The @deva[तत्पुरुष] condition is essential. @deva[द्व्यङ्गुलम्] is a measurement compound (how many finger-breadths), while @deva[पञ्चाङ्गुलिः] (five-fingered) is Bahuvrīhi describing someone with five fingers. The vārttika @deva[प्रमाणे लो द्विगोर्नित्यम्] teaches obligatory elision of @deva[मात्रच्] in Dvigu compounds denoting measure. The @deva[तत्पुरुष] specification continues through @ref[5.4.106]."
            }
        },
        "54087": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[रात्रि] (night) when preceded by @deva[अहन्], @deva[सर्व], a word denoting part of night, @deva[संख्यात], @deva[पुण्य], or a numeral/indeclinable. Examples: @deva[अहोरात्रः] (day and night), @deva[सर्वरात्रः] (all night), @deva[पूर्वरात्रः] (first part of night), @deva[द्विरात्रः] (two nights), @deva[अतिरात्रः].",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[रात्रि] in Tatpuruṣa compounds when preceded by specific words. (1) @deva[अहन्]: @deva[अहश्च रात्रिश्च] = @deva[अहोरात्रः] (Dvandva, day and night). (2) @deva[सर्व]: @deva[सर्वरात्रः] (all night). (3) Night-portion words: @deva[पूर्वरात्रः] (first part), @deva[अपररात्रः] (latter part) by @ref[2.2.1]. (4) @deva[संख्यात]: @deva[संख्याता रात्रिः] = @deva[संख्यातरात्रः] by @ref[2.1.57]. (5) @deva[पुण्य]: @deva[पुण्यरात्रः] (auspicious night). (6) Numerals: @deva[द्विरात्रः], @deva[त्रिरात्रः] (Samāhāra Dvigu). (7) Indeclinables: @deva[अतिरात्रः] (beyond the night, an overnight sacrifice), @deva[निरात्रः].",
                "advanced": "The sūtra combines multiple conditions: @deva[अहन्] forms Dvandva; @deva[सर्व] and night-portion words form descriptive compounds; @deva[संख्यात] follows @ref[2.1.57]; numerals form Samāhāra Dvigus (collective sense); indeclinables form Avyayībhāva-type compounds. The @deva[अतिरात्र] is a specific Vedic sacrifice extending through the night. The @deva[संख्याव्ययादेः] from @ref[5.4.86] continues here via @deva[च]."
            }
        },
        "54088": {
            "en": {
                "simple": "When @deva[अहन्] (day) is preceded by @deva[सर्व], @deva[संख्यात], night-portion words, or numerals/indeclinables, @deva[अह्न] is substituted for @deva[अहन्]. Examples: @deva[द्व्यह्नः] (relating to two days), @deva[त्र्यह्नः], @deva[सर्वाह्णः] (all day), @deva[पूर्वाह्णः] (forenoon), @deva[अपराह्णः] (afternoon).",
                "standard": "This sūtra substitutes @deva[अह्न] for @deva[अहन्] when preceded by the words listed in @ref[5.4.87] (except @deva[अहन्] itself, since @deva[अहन्] + @deva[अहन्] Tatpuruṣa is impossible). With @deva[टच्] affix (anticipating @ref[5.4.91]): @deva[द्वयोः अह्नोः भवः] = @deva[द्व्यह्नः], @deva[त्र्यह्नः]. With indeclinables: @deva[अत्यह्नः], @deva[निरह्नः]. With @deva[सर्व]: @deva[सर्वाह्णः] (@ref[8.4.7] applies). With day-portions: @deva[पूर्वाह्णः] (forenoon), @deva[अपराह्णः] (afternoon). Some read @deva[संख्याताहः] rather than @deva[संख्याताह्नः] (see @ref[5.4.90]).",
                "advanced": "The vārttikakāra considers this substitution redundant: @deva[अहन्] + @deva[अच्] would yield @deva[अह्न] anyway via @ref[6.4.134] (middle @deva[अ] elision). The specific @deva[टच्] would only affect feminine formation (@ref[4.1.15]) and @deva[अन्]-elision (@ref[6.4.145]). But @deva[अहन्]-compounds are always masculine (@ref[2.4.29]), so feminine doesn't arise. The desired form @deva[द्व्यह्नः] makes @ref[6.4.145] inapplicable. Thus @deva[अच्] suffices, making the substitution technically superfluous."
            }
        },
        "54089": {
            "en": {
                "simple": "The substitution of @deva[अह्न] for @deva[अहन्] does NOT occur when a numeral forms a collective (Samāhāra) compound meaning a group of days. Examples: @deva[द्व्यहः] (a period of two days), @deva[त्र्यहः] (a three-day period). But: @deva[द्व्यह्नः] (relating to two days).",
                "standard": "This sūtra prohibits @deva[अह्न]-substitution in Samāhāra-Tatpuruṣa (collective) compounds with numerals. Thus @deva[द्वे अहनी समाहृते] = @deva[द्व्यहः] (a two-day period as a unit), @deva[त्र्यहः]. Here @ref[5.4.91] applies directly. When the meaning is 'relating to/occurring in two days' (Taddhitārtha Dvigu): @deva[द्वयोः अह्नोः भवः] = @deva[द्व्यह्नः], @deva[त्र्यह्नः]—formed by @ref[1.1.5] with @deva[अण्] elided by @ref[4.1.88] and final @deva[अन्] elided by @ref[6.4.145].",
                "advanced": "The distinction is between @deva[समाहार] (collective unity: 'a two-day period') and @deva[तद्धितार्थ] (adjectival: 'pertaining to two days'). In @deva[द्व्यहः], the two days are viewed as a single unit; in @deva[द्व्यह्नः], the reference is to something occurring across or relating to two days. This semantic distinction triggers different derivational paths and different final forms."
            }
        },
        "54090": {
            "en": {
                "simple": "The substitution of @deva[अह्न] for @deva[अहन्] also does NOT occur after @deva[पुण्य] and @deva[एक]. Examples: @deva[पुण्याहः] (auspicious day), @deva[एकाहः] (one-day period).",
                "standard": "This sūtra adds two more exceptions to the @deva[अह्न]-substitution: (1) @deva[पुण्य] (the last word in the list of @ref[5.4.87], referred to as @deva[उत्तम] 'last'); (2) @deva[एक] (one). Thus @deva[पुण्याहः] (an auspicious day) and @deva[एकाहः] (a one-day sacrifice/period). Some grammarians extend the prohibition to @deva[संख्यात] (the penultimate word), preferring @deva[संख्याताहः] over @deva[संख्याताह्नः].",
                "advanced": "The term @deva[उत्तम] (last) is used as stylistic variation (@deva[वैचित्र्य]) instead of directly saying @deva[पुण्य]. The @deva[एक] exception ensures @deva[एकाहः] rather than @deva[एकाह्नः]. The optional extension to @deva[संख्यात] creates two valid forms: @deva[संख्याताहः] (if @deva[संख्यात] is included in the prohibition) or @deva[संख्याताह्नः] (if it follows the general @deva[अह्न]-substitution)."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.4.76-90)")

if __name__ == "__main__":
    main()
