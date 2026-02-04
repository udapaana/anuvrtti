#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.1.76-90."""

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
        "51076": {
            "en": {
                "simple": "The affix @deva[ण] comes after @deva[पन्थ] (substitute for @deva[पथिन्]) meaning 'who always goes'. @deva[पन्थानं नित्यं गच्छति] → @deva[पान्थः] 'a traveler, wanderer'.",
                "standard": "The affix @deva[ण] (adding @deva[अ] with @deva[वृद्धि]) comes after @deva[पन्थ] (which substitutes for @deva[पथिन्]) with the sense of 'who always goes' (@deva[नित्यं गच्छति]). The word @deva[नित्य] qualifies the affix sense. Example: @deva[पन्थानं नित्यं गच्छति] = @deva[पान्थः] 'a perpetual traveler', as in @deva[पान्थो भिक्षां याचते] 'the wanderer begs for alms'. Without @deva[नित्य]: @deva[पथिकः] (by @ref[5.1.75]).",
                "advanced": "This sūtra teaches @deva[ण] after @deva[पन्थ] (substitute for @deva[पथिन्]) with the @deva[नित्यं गच्छति] sense. The @deva[नित्य] condition distinguishes this from @ref[5.1.75] (@deva[पथिकः]). Result: @deva[पान्थः] 'one who habitually travels'."
            }
        },
        "51077": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after @deva[उत्तरपथ] 'northern route' in the instrumental case meaning 'conveyed by' or 'passing by that way'. @deva[उत्तरपथेन आहृतम्] or @deva[गच्छति] → @deva[औत्तरपथिकम्/औत्तरपथिकः].",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes in the sense of 'conveyed by that way' (@deva[आहृतम्]) and 'who passes by that way' (@deva[गच्छति], by @deva[च]) after @deva[उत्तरपथ] 'northern route' in the instrumental case. Examples: @deva[उत्तरपथेन आहृतम्] = @deva[औत्तरपथिकम्] 'conveyed by the northern route'; @deva[उत्तरपथेन गच्छति] = @deva[औत्तरपथिकः] 'one who travels by the northern route'. @deva[वार्त्तिक]s: (1) @deva[ठञ्] also after @deva[पथ] preceded by @deva[वारि], @deva[जङ्गल], @deva[स्थल], @deva[कान्तार]: @deva[वारिपथिकम्]/वारिपथिकः], @deva[जाङ्गलपथिकः], @deva[स्थालपथिकः], @deva[कान्तारपथिकः] (neuter for 'conveyed', masculine for 'passing'); (2) after @deva[अजपथ] and @deva[शङ्कुपथ]: @deva[आजपथिकः], @deva[शाङ्कुपथिकः]; (3) @deva[अण्] after @deva[स्थलपथ] when 'honey' or 'pepper' is meant: @deva[स्थालपथं मधुकम्], @deva[स्थालपथं मरिचम्].",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[उत्तरपथ] in @deva[तृतीया] with two senses: @deva[आहृतम्] 'conveyed' and @deva[गच्छति] 'passing' (via @deva[च]). Results: @deva[औत्तरपथिकम्] (neut.), @deva[औत्तरपथिकः] (masc.). Three @deva[वार्त्तिक]s extend this: (1) @deva[ठञ्] after @deva[वारि/जङ्गल/स्थल/कान्तार] + @deva[पथ]; (2) after @deva[अजपथ], @deva[शङ्कुपथ]; (3) @deva[अण्] after @deva[स्थलपथ] when the conveyed item is honey or pepper."
            }
        },
        "51078": {
            "en": {
                "simple": "In the following sūtras through @ref[5.1.96], the phrase 'after a word denoting time' (@deva[कालात्]) should be understood.",
                "standard": "This is a heading sūtra establishing that the word @deva[कालात्] 'after a word denoting time' governs the following sūtras through @ref[5.1.96] inclusive. Thus in the next sūtra @deva[तेन निर्वृत्तम्] 'accomplished by means thereof', the word @deva[काल] must be understood. Example: @deva[मासेन निर्वृत्तम्] = @deva[मासिकम्] 'accomplished in a month'.",
                "advanced": "This @deva[अधिकार] sūtra establishes the @deva[अनुवृत्ति] of @deva[कालात्] 'after a time-denoting word' for sūtras @ref[5.1.79]-@ref[5.1.96]. The following sūtras must be read with this governing phrase to complete their sense."
            }
        },
        "51079": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after a time-denoting word in the instrumental case meaning 'to be accomplished in that time'. @deva[अह्ना निर्वृत्तम्] → @deva[आह्निकम्] 'to be done in a day'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes after a word denoting time in the instrumental (@deva[तृतीया]) case with the sense of 'to be accomplished in that time' (@deva[तेन निर्वृत्तम्]). Examples: @deva[अह्ना निर्वृत्तम्] = @deva[आह्निकम्] 'a portion (of study etc.) to be accomplished in a day'; @deva[आर्धमासिकम्] 'to be done in a fortnight'; @deva[सांवत्सरिकम्] 'to be done in a year'.",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[काल] words in @deva[तृतीया] with the @deva[निर्वृत्त] sense 'accomplished by that time'. Examples: @deva[आह्निकम्] 'daily portion', @deva[आर्धमासिकम्] 'fortnightly', @deva[सांवत्सरिकम्] 'yearly'. The @deva[कालात्] of @ref[5.1.78] governs this sūtra."
            }
        },
        "51080": {
            "en": {
                "simple": "The affixes come after a time-denoting word in the accusative case meaning 'solicited to teach for that period', 'hired for that period', 'lasted that long', or 'will last that long'. @deva[मासमधीष्टः] → @deva[मासिकोऽध्यापकः] 'a teacher engaged for a month'.",
                "standard": "The above affixes come after a word denoting time in the accusative (@deva[द्वितीया]) case with four senses: @deva[अधीष्ट] 'solicited to teach (without pay)' per @ref[3.3.161], @deva[भृत] 'hired on wages', @deva[भूत] 'the time occupied by its existence', and @deva[भावी] 'will exist for that time'. The time word takes accusative by @ref[2.3.5]. Examples: @deva[मासमधीष्टः] = @deva[मासिकोऽध्यापकः] 'a teacher engaged for a month'; @deva[मासं भृतः] = @deva[मासिकः कर्मकरः] 'a worker hired for a month'; @deva[मासं भूतः] = @deva[मासिको व्याधिः] 'a disease lasting a month'; @deva[मासं भावी] = @deva[मासिकः उत्सवः] 'a festival that will last a month'. Note: The solicitation or hiring itself takes only a moment—it is the result (teaching, serving) that extends over the time period.",
                "advanced": "This sūtra teaches the affixes after @deva[काल] words in @deva[द्वितीया] with four senses: @deva[अधीष्ट] (honorarily engaged per @ref[3.3.161]), @deva[भृत] (hired), @deva[भूत] (lasted), @deva[भावी] (will last). The @deva[द्वितीया] is by @ref[2.3.5] (time-extent). Examples: @deva[मासिकोऽध्यापकः], @deva[मासिकः कर्मकरः], @deva[मासिको व्याधिः], @deva[मासिकः उत्सवः]. The objection that @deva[अध्येषण]/भरण] are momentary is answered: the affix refers to the result (teaching/service), not the act itself."
            }
        },
        "51081": {
            "en": {
                "simple": "The affixes @deva[यत्] and @deva[खञ्] come after @deva[मास] 'month' when denoting age. @deva[मासं भूतः] → @deva[मास्यः] or @deva[मासीनः] 'a month old'.",
                "standard": "The affixes @deva[यत्] (adding @deva[य]) and @deva[खञ्] (adding @deva[ईन]) come after @deva[मास] 'month' when the sense is 'age' (@deva[वयस्]). These supersede @deva[ठञ्]. The word @deva[भूतः] from the previous sūtra is understood. Examples: @deva[मासं भूतः] = @deva[मास्यः] (with @deva[यत्]) or @deva[मासीनः] (with @deva[खञ्]) 'a month old'. When not denoting age: @deva[मासिकः] (with @deva[ठञ्]).",
                "advanced": "This sūtra teaches @deva[यत्] and @deva[खञ्] after @deva[मास] when @deva[वयस्] (age) is meant. These supersede @deva[ठञ्]. The @deva[भूत] sense from @ref[5.1.80] is read in. Results: @deva[मास्यः] ~ @deva[मासीनः] 'one month old'. Without the @deva[वयस्] condition: @deva[मासिकः]."
            }
        },
        "51082": {
            "en": {
                "simple": "The affix @deva[यप्] comes after @deva[मास] in a @deva[द्विगु] compound when meaning age. @deva[द्वौ मासौ भूतः] → @deva[द्विमास्यः] 'two months old'.",
                "standard": "The affix @deva[यप्] (adding @deva[य]) comes after @deva[मास] 'month' when forming a @deva[द्विगु] compound (numeral determinative) and denoting age. Examples: @deva[द्वौ मासौ भूतः] = @deva[द्विमास्यः] 'two months old'; @deva[त्रिमास्यः] 'three months old'.",
                "advanced": "This sūtra teaches @deva[यप्] after @deva[मास] in @deva[द्विगु] compounds with the @deva[वयस्] sense. Results: @deva[द्विमास्यः], @deva[त्रिमास्यः], etc."
            }
        },
        "51083": {
            "en": {
                "simple": "The affixes @deva[ण्य], @deva[यप्], and @deva[ठञ्] come after @deva[षण्मास] 'six months' when meaning age. @deva[षाण्मास्यः], @deva[षण्मास्यः], @deva[षाण्मासिकः].",
                "standard": "The affixes @deva[ण्य] (adding @deva[य] with @deva[वृद्धि]), @deva[यप्] (adding @deva[य]), and @deva[ठञ्] (adding @deva[इक]) come in the sense of age after @deva[षण्मास] 'six months'. Three forms result: @deva[षाण्मास्यः] (with @deva[ण्य]), @deva[षण्मास्यः] (with @deva[यप्]), @deva[षाण्मासिकः] (with @deva[ठञ्]).",
                "advanced": "This sūtra teaches three affixes after @deva[षण्मास] in the @deva[वयस्] sense: @deva[ण्य] → @deva[षाण्मास्यः] (with @deva[वृद्धि]); @deva[यप्] → @deva[षण्मास्यः]; @deva[ठञ्] → @deva[षाण्मासिकः]."
            }
        },
        "51084": {
            "en": {
                "simple": "The affix @deva[ठन्] comes after @deva[षण्मास] when age is NOT meant. @deva[षण्मासिकः] or @deva[षाण्मास्यो रोगः] 'a disease lasting six months'.",
                "standard": "The affix @deva[ठन्] (adding @deva[इक]) comes after @deva[षण्मास] 'six months' when age is not meant (@deva[अवयसि]). The @deva[च] draws in @deva[ण्यत्] also. Examples: @deva[षण्मासिकः] (with @deva[ठन्]) or @deva[षाण्मास्यो रोगः] (with @deva[ण्यत्]) 'a disease lasting six months'.",
                "advanced": "This sūtra teaches @deva[ठन्] (and @deva[ण्यत्] via @deva[च]) after @deva[षण्मास] when @deva[वयस्] is not meant. Results: @deva[षण्मासिकः] ~ @deva[षाण्मास्यः] for non-age contexts like disease duration."
            }
        },
        "51085": {
            "en": {
                "simple": "The affix @deva[ख] comes after @deva[समा] 'year' in the four senses of 'solicited', 'hired', 'lasted', and 'will last'. @deva[समामधीष्टः भृतः भूतः भावी वा] → @deva[समीनः].",
                "standard": "The affix @deva[ख] (adding @deva[ईन]) comes in the four senses of @deva[अधीष्ट] 'solicited', @deva[भृत] 'hired', @deva[भूत] 'lasted', and @deva[भावी] 'will last' after @deva[समा] 'year'. This supersedes @deva[ठञ्]. Example: @deva[समामधीष्टः भृतः भूतः भावी वा] = @deva[समीनः] 'engaged/hired/lasting for a year'. Some say the affix also has the @deva[तेन निर्वृत्तम्] sense (@ref[5.1.79]): @deva[समया निर्वृत्तः] = @deva[समीनः] 'accomplished in a year'.",
                "advanced": "This sūtra teaches @deva[ख] after @deva[समा] in the @ref[5.1.80] senses (@deva[अधीष्ट], @deva[भृत], @deva[भूत], @deva[भावी]). The @deva[ख] supersedes @deva[ठञ्]. Result: @deva[समीनः]. An alternative view includes the @ref[5.1.79] sense (@deva[निर्वृत्त]): @deva[समया निर्वृत्तः] = @deva[समीनः]."
            }
        },
        "51086": {
            "en": {
                "simple": "The affix @deva[ख] optionally comes after @deva[समा] 'year' in a @deva[द्विगु] compound with the senses of @ref[5.1.76] and @ref[5.1.80]. @deva[द्विमासीनः] or @deva[द्वैमासिकः] 'for two months'.",
                "standard": "The affix @deva[ख] (adding @deva[ईन]) comes optionally in the senses taught in @ref[5.1.76] ('always going') and @ref[5.1.80] ('solicited, hired, lasted, will last') after @deva[समा] 'year' forming a @deva[द्विगु] compound. In the alternative, @deva[ठञ्] also applies. The @deva[वार्त्तिक] of @ref[5.1.20] (@deva[प्राग्वतेः संख्यापूर्वपदानां तदन्तग्रहणमलुकि]) applies here. Examples: @deva[द्विमासीनः] (with @deva[ख]) or @deva[द्वैमासिकः] (with @deva[ठञ्]) 'for two months'; @deva[त्रिमासीनः] or @deva[त्रैमासिकः] 'for three months'.",
                "advanced": "This sūtra teaches optional @deva[ख] after @deva[समा] in @deva[द्विगु] compounds with @ref[5.1.76] and @ref[5.1.80] senses. The alternative is @deva[ठञ्]. The @deva[इष्टि] @deva[प्राग्वतेः संख्यापूर्वपदानां तदन्तग्रहणमलुकि] (from @ref[5.1.20]) applies. Results: @deva[द्विमासीनः] ~ @deva[द्वैमासिकः], @deva[त्रिमासीनः] ~ @deva[त्रैमासिकः]."
            }
        },
        "51087": {
            "en": {
                "simple": "The affix @deva[ख] optionally comes after @deva[रात्रि] 'night', @deva[अहन्] 'day', and @deva[संवत्सर] 'year' in @deva[द्विगु] compounds with the senses of @ref[5.1.79] and @ref[5.1.82]. @deva[द्विरात्रीणः] or @deva[द्वैरात्रिकः] 'for two nights'.",
                "standard": "The affix @deva[ख] (adding @deva[ईन]) comes optionally in the senses of @ref[5.1.79] (@deva[तेन निर्वृत्तम्]) and @ref[5.1.82] (@deva[द्विगोर्यप्]) after @deva[रात्रि] 'night', @deva[अहन्] 'day', and @deva[संवत्सर] 'year' when forming a @deva[द्विगु] compound. In the alternative, @deva[ठञ्] applies. Examples: @deva[द्विरात्रीणः] (with @deva[ख]) or @deva[द्वैरात्रिकः] (with @deva[ठञ्]) 'for two nights'; @deva[द्व्यहीनः] (per @ref[6.4.145]) or @deva[द्वैयह्निकः] 'for two days'; @deva[द्विसंवत्सरीणः] or @deva[द्विसांवत्सरिकः] (per @ref[7.3.15]) 'for two years'.",
                "advanced": "This sūtra teaches optional @deva[ख] after @deva[रात्रि], @deva[अहन्], @deva[संवत्सर] in @deva[द्विगु] compounds with @ref[5.1.79] and @ref[5.1.82] senses. The alternative is @deva[ठञ्]. Results: @deva[द्विरात्रीणः] ~ @deva[द्वैरात्रिकः]; @deva[द्व्यहीनः] (by @ref[6.4.145]) ~ @deva[द्वैयह्निकः]; @deva[द्विसंवत्सरीणः] ~ @deva[द्विसांवत्सरिकः] (with irregular @deva[वृद्धि] per @ref[7.3.15])."
            }
        },
        "51088": {
            "en": {
                "simple": "The affixes @deva[ख] and @deva[ठञ्] may also be deleted after a @deva[द्विगु] compound ending in @deva[वर्षा] 'year'. @deva[द्विवर्षीणः], @deva[द्विवार्षिकी], or @deva[द्विवर्षो व्याधिः] 'a disease lasting two years'.",
                "standard": "The affixes @deva[ख] and @deva[ठञ्] come in the five senses (@ref[5.1.79], @ref[5.1.80]) after @deva[वर्षा] 'rainy season, year' forming a @deva[द्विगु], and these may also be optionally deleted. Three forms result: @deva[द्विवर्षीणः] (with @deva[ख]), @deva[द्विवार्षिकी] (with @deva[ठञ्]), or @deva[द्विवर्षो व्याधिः] (with deletion) 'a disease lasting two years'. Compare @ref[7.3.16]. When the sense is @deva[भावी] 'will last', the form is @deva[द्वैवर्षिकः].",
                "advanced": "This sūtra teaches @deva[ख] and @deva[ठञ्] after @deva[वर्षा] in @deva[द्विगु] with the @ref[5.1.79]-@ref[5.1.80] senses, with optional deletion. Three forms: @deva[द्विवर्षीणः] (@deva[ख]), @deva[द्विवार्षिकी] (@deva[ठञ्]), @deva[द्विवर्षः] (@deva[लुक्]). Per @ref[7.3.16], @deva[वृद्धि] differs; with @deva[भावी] sense: @deva[द्वैवर्षिकः]."
            }
        },
        "51089": {
            "en": {
                "simple": "The affixes are necessarily deleted after @deva[वर्षा] in a @deva[द्विगु] compound when referring to a sentient being's age. @deva[द्विवर्षो दारकः] 'a boy two years old'.",
                "standard": "The affixes meaning 'accomplished' etc. (per @ref[5.1.76], @ref[5.1.80]) are necessarily deleted (not optionally as in @ref[5.1.88]) after @deva[वर्षा] forming a @deva[द्विगु] compound when referring to a sentient being (@deva[चित्तवत्]). Example: @deva[द्विवर्षो दारकः] 'a boy two years old'. When not referring to a sentient being: @deva[द्विवर्षीणो व्याधिः] (optional deletion per @ref[5.1.88]).",
                "advanced": "This sūtra teaches compulsory @deva[लुक्] after @deva[वर्षा] in @deva[द्विगु] when @deva[चित्तवत्] (sentient being) is qualified. The deletion here is obligatory, unlike the optional @deva[लुक्] of @ref[5.1.88]. Result: @deva[द्विवर्षो दारकः] 'two-year-old child'. Without @deva[चित्तवत्]: @deva[द्विवर्षीणो व्याधिः] (per @ref[5.1.88])."
            }
        },
        "51090": {
            "en": {
                "simple": "The anomalous word @deva[षष्टिकाः] means 'what matures in sixty nights'. It is a name for a kind of barley that ripens in sixty days.",
                "standard": "The word @deva[षष्टिकाः] is an anomalously formed (@deva[निपातन]) derivative meaning 'what are matured in sixty nights'. It may be explained as @deva[षष्टिरात्रि] + @deva[कन्] in the instrumental case with the @deva[पच्यते] 'ripens' sense, then deleting @deva[रात्रि]: @deva[षष्टिरात्रेण पच्यन्ते] = @deva[षष्टिकाः] 'a kind of barley'. This is a proper name for that variety of barley, not applicable to pulses or beans that might also ripen in sixty days.",
                "advanced": "This sūtra teaches the @deva[निपातन] form @deva[षष्टिकाः] meaning 'ripened in sixty nights'. The derivation: @deva[षष्टिरात्रि] in @deva[तृतीया] + @deva[कन्] with @deva[पाक] sense, then @deva[रात्रि]-elision → @deva[षष्टिकाः]. This is a @deva[संज्ञा] (proper name) for a specific barley variety, not a general term for any grain ripening in 60 days."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.1.76-90)")

if __name__ == "__main__":
    main()
