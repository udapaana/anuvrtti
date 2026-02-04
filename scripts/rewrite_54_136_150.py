#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.4.136-150."""

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
        "54136": {
            "en": {
                "simple": "@deva[इ] substitutes for the final @deva[अ] of @deva[गन्ध] in a Bahuvrīhi compound when @deva[गन्ध] means 'a little' (just a trace). Examples: @deva[सूपगन्धि भोजनम्] (food with just a trace of broth), @deva[घृतगन्धि] (with a mere scent of ghee), @deva[क्षीरगन्धि].",
                "standard": "This sūtra prescribes @deva[इ]-substitution for @deva[गन्ध] when it means @deva[अल्प] (a little, a mere trace). Thus @deva[सूपः अल्पः अस्मिन्] = @deva[सूपगन्धि भोजनम्] (food with just a little broth). Similarly @deva[घृतगन्धि] (with a mere trace of ghee), @deva[क्षीरगन्धि] (with a trace of milk). Here @deva[गन्ध] is synonymous with @deva[अल्प] (little/slight).",
                "advanced": "The semantic extension of @deva[गन्ध] from 'smell/scent' to 'a mere trace' (as in 'just a whiff') triggers this substitution. The @deva[इ]-final forms express 'having only a trace of X' rather than 'having the smell of X.' This metaphorical use of 'scent' for 'trace amount' is common cross-linguistically."
            }
        },
        "54137": {
            "en": {
                "simple": "@deva[इ] substitutes for the final @deva[अ] of @deva[गन्ध] in a Bahuvrīhi compound when preceded by a word denoting something being compared. Examples: @deva[पद्मगन्धिः] (having lotus-like fragrance), @deva[उत्पलगन्धिः] (having water-lily fragrance), @deva[करीषगन्धिः] (having cow-dung smell).",
                "standard": "This sūtra prescribes @deva[इ]-substitution for @deva[गन्ध] when preceded by an @deva[उपमान] (object of comparison). Thus @deva[पद्मस्य इव गन्धः अस्य] = @deva[पद्मगन्धिः] (having fragrance like a lotus), @deva[उत्पलगन्धिः] (like a water-lily), @deva[करीषगन्धिः] (like cow-dung). The comparison expresses 'having a smell resembling X.'",
                "advanced": "The @deva[उपमान] condition creates comparative Bahuvrīhis. Combined with @ref[5.4.135] (specific prefixes) and @ref[5.4.136] (@deva[अल्प] sense), this completes the @deva[गन्ध] → @deva[गन्धि] transformation contexts. The three sūtras cover: (1) quality-prefixes, (2) quantity sense, (3) comparison sense."
            }
        },
        "54138": {
            "en": {
                "simple": "The final @deva[अ] of @deva[पाद] (foot) is elided in a Bahuvrīhi compound when preceded by an object of comparison—but not after words in the @deva[हस्त्यादि] list. Examples: @deva[व्याघ्रपात्] (tiger-footed), @deva[सिंहपात्] (lion-footed). But: @deva[हस्तिपादः], @deva[कटोलपादः].",
                "standard": "This sūtra prescribes @deva[अ]-elision from @deva[पाद] in comparison-Bahuvrīhi (@deva[उपमानात्]). Thus @deva[व्याघ्रस्य इव पादौ अस्य] = @deva[व्याघ्रपात्] (having feet like a tiger), @deva[सिंहपात्]. The @deva[हस्त्यादि] gaṇa (19 words) blocks elision: @deva[हस्तिपादः], @deva[कटोलपादः], @deva[अश्वपादः], @deva[कपोतपादः], etc.",
                "advanced": "The @deva[हस्त्यादि] gaṇa includes: @deva[हस्तिन्], @deva[कुदाल], @deva[अश्व], @deva[कशिक], @deva[कुरुत], @deva[कटोल/कटोलक], @deva[गण्डोल/गण्डोलक], @deva[कण्डोल/कण्डोलक], @deva[अज], @deva[कपोत], @deva[जाल], @deva[गण्ड], @deva[महेल] (@deva[महिला]), @deva[दासी], @deva[गणिका], @deva[कुसूल]. These retain @deva[पाद] in comparison compounds."
            }
        },
        "54139": {
            "en": {
                "simple": "The words @deva[कुम्भपदी] (pot-footed) and others in the @deva[कुम्भपद्यादि] list are formed by eliding the final @deva[अ] of @deva[पाद], with @deva[पद्] substituted before feminine @deva[ई]. Examples: @deva[कुम्भपदी], @deva[शतपदी] (centipede), @deva[एकपदी].",
                "standard": "This sūtra validates the @deva[कुम्भपद्यादि] gaṇa (41 words) formed by @deva[अ]-elision from @deva[पाद], with @deva[पद्] substituted for @deva[पात्] before @deva[ङीप्] (@ref[4.1.130]). Thus @deva[कुम्भपदी], @deva[शतपदी] (centipede). Words whose first members are comparison-objects or numerals would elide @deva[अ] by @ref[5.4.138] or @ref[5.4.140]; this sūtra additionally mandates @deva[ङीप्], blocking the option in @ref[4.1.8].",
                "advanced": "The gaṇa includes: @deva[कुम्भपदी], @deva[एकपदी], @deva[जालपदी], @deva[शूलपदी], @deva[मुनिपदी], @deva[गुणपदी], @deva[शतपदी], @deva[सूत्रपदी], @deva[गोधापदी], @deva[कलशीपदी], @deva[विपदी], @deva[तृणपदी], @deva[द्विपदी], @deva[त्रिपदी], @deva[षट्पदी], @deva[दासीपदी], @deva[शितिपदी], @deva[विष्णुपदी], @deva[सुपदी], @deva[निष्पदी], @deva[आर्द्रपदी], @deva[कुणिपदी], @deva[कृष्णपदी], @deva[शुचिपदी], @deva[द्रोणपदी], @deva[द्रुपदी], @deva[सूकरपदी], @deva[शकृत्पदी], @deva[अष्टापदी], @deva[स्थूणापदी], @deva[अपदी], @deva[सूचीपदी], @deva[मालापदी], @deva[गोपदी], @deva[घृतपदी], @deva[सूपपदी], @deva[पञ्चपदी], @deva[अर्वपदी], @deva[स्तनपदी], @deva[कलहंसपदी], @deva[विषपदी]."
            }
        },
        "54140": {
            "en": {
                "simple": "The final @deva[अ] of @deva[पाद] (foot) is elided in a Bahuvrīhi compound when preceded by a numeral or @deva[सु] (good). Examples: @deva[द्विपात्] (two-footed), @deva[त्रिपात्] (three-footed), @deva[सुपात्] (well-footed).",
                "standard": "This sūtra prescribes @deva[अ]-elision from @deva[पाद] when preceded by a numeral or @deva[सु]. Thus @deva[द्वौ पादौ अस्य] = @deva[द्विपात्] (two-footed), @deva[त्रिपात्] (three-footed). @deva[शोभनौ पादौ अस्य] = @deva[सुपात्] (having good/beautiful feet).",
                "advanced": "This extends @deva[पाद]-elision beyond comparison (@ref[5.4.138]) to numeral and @deva[सु]-prefixed compounds. The resulting @deva[पात्] forms are consonant-final. Combined with the previous sūtras, this covers the major contexts for @deva[पाद] → @deva[पात्/पद्] transformations in Bahuvrīhi."
            }
        },
        "54141": {
            "en": {
                "simple": "@deva[दत्] (with indicatory @deva[ऋ]) substitutes for @deva[दन्त] (tooth) in a Bahuvrīhi compound when preceded by a numeral or @deva[सु], and the compound expresses an age/life-stage. Examples: @deva[द्विदन्] (child at the two-tooth stage), @deva[सुदन्] (child with all teeth beautifully grown).",
                "standard": "This sūtra prescribes @deva[दतृ]-substitution for @deva[दन्त] in age-denoting Bahuvrīhi when preceded by a numeral or @deva[सु]. The @deva[ऋ] is indicatory, triggering @ref[7.1.70] (nasal insertion in sarvanāmasthāna) and @ref[4.1.6]. Thus @deva[द्वौ दन्तौ अस्य] = @deva[द्विदन्] (a child at the two-tooth stage), @deva[त्रिदन्], @deva[चतुर्दन्]. @deva[शोभनाः दन्ताः अस्य समस्ताः जाताः] = @deva[सुदन् कुमारः] (a boy at the stage of beautiful full dentition). Without age-meaning: @deva[द्विदन्तः कुञ्जरः] (two-tusked elephant).",
                "advanced": "The @deva[वयसि] (age-stage) condition restricts this to developmental markers—children's stages marked by tooth eruption. The @deva[उगित्] (indicatory @deva[ऋ]) designation makes these words follow @deva[उगित्] declension patterns, particularly nasal insertion before @deva[त्] in strong cases. Non-age contexts retain @deva[दन्त]."
            }
        },
        "54142": {
            "en": {
                "simple": "In Vedic usage, @deva[दत्] substitutes for @deva[दन्त] (tooth) at the end of any Bahuvrīhi compound. Examples: @deva[पत्रदत् आलभेत], @deva[उभयदत् आलभेत].",
                "standard": "This sūtra prescribes @deva[दत्]-substitution for @deva[दन्त] in all Bahuvrīhi compounds within @deva[छन्दस्] (Vedic literature). Thus @deva[पत्रदत् आलभेत] (having leaf-like teeth), @deva[उभयदत् आलभेत] (having teeth on both sides). This is broader than the classical restriction to age-contexts.",
                "advanced": "The Vedic license extends @deva[दत्]-substitution beyond the @deva[वयसि] (age-stage) condition of @ref[5.4.141]. In classical Sanskrit, @deva[दत्] is restricted to developmental stages; in Vedic, it applies generally to @deva[दन्त]-final Bahuvrīhis. This reflects the greater morphological freedom in Vedic."
            }
        },
        "54143": {
            "en": {
                "simple": "@deva[दत्] substitutes for @deva[दन्त] in a feminine Bahuvrīhi compound when it's a proper name. Examples: @deva[अयोदती] (iron-toothed, a name), @deva[फालदती] (plough-toothed, a name). But: @deva[समदन्ती], @deva[स्निग्धदन्ती] (not names).",
                "standard": "This sūtra prescribes @deva[दत्]-substitution for @deva[दन्त] in feminine Bahuvrīhi when the compound is a @deva[संज्ञा] (proper name). Thus @deva[अयोदती] (iron-toothed, a name), @deva[फालदती] (plough-toothed, a name). Without name-status: @deva[समदन्ती] (even-toothed), @deva[स्निग्धदन्ती] (smooth-toothed)—these are descriptive, not names, so retain @deva[दन्त].",
                "advanced": "The @deva[स्त्रियां संज्ञायाम्] condition combines gender (feminine) and semantic status (name). This allows @deva[दत्] in personal names for women/female beings, preserving the distinctive @deva[दती] form. Descriptive adjectives (not functioning as names) retain @deva[दन्ती]."
            }
        },
        "54144": {
            "en": {
                "simple": "@deva[दत्] optionally substitutes for @deva[दन्त] in a Bahuvrīhi compound when preceded by @deva[श्याव] (brown) or @deva[अरोक] (dark). Examples: @deva[श्यावदन्] or @deva[श्यावदन्तः], @deva[अरोकदन्] or @deva[अरोकदन्तः].",
                "standard": "This sūtra prescribes optional @deva[दत्]-substitution for @deva[दन्त] when preceded by @deva[श्याव] (brown, tawny) or @deva[अरोक] (dark, non-luminous). Thus @deva[श्यावदन्तः] or @deva[श्यावदन्] (having brown teeth), @deva[अरोकदन्तः] or @deva[अरोकदन्] (having dark teeth). The @deva[संज्ञायाम्] from the previous sūtra continues: when not a name, substitution doesn't occur: @deva[श्यावदन्तः], @deva[अरोकदन्तः].",
                "advanced": "The optionality here applies specifically when the compound functions as a name. The color-terms @deva[श्याव] and @deva[अरोक] (both describing tooth discoloration) may have been common enough in names to warrant this rule. Non-name descriptive uses retain @deva[दन्त]."
            }
        },
        "54145": {
            "en": {
                "simple": "@deva[दत्] optionally substitutes for @deva[दन्त] in a Bahuvrīhi compound when preceded by a word ending in @deva[अग्र], or by @deva[शुद्ध], @deva[शुभ्र], or @deva[वराह]. Examples: @deva[कुड्मलाग्रदन्] or @deva[कुड्मलाग्रदन्तः], @deva[शुद्धदन्] or @deva[शुद्धदन्तः], @deva[वराहदन्] or @deva[वराहदन्तः].",
                "standard": "This sūtra prescribes optional @deva[दत्]-substitution for @deva[दन्त] when preceded by: (1) words ending in @deva[अग्र] (tip/front), (2) @deva[शुद्ध] (pure/white), (3) @deva[शुभ्र] (bright/white), (4) @deva[वराह] (boar). Thus @deva[कुड्मलाग्रदन्]/deva[कुड्मलाग्रदन्तः] (bud-tip-toothed), @deva[शुद्धदन्]/deva[शुद्धदन्तः], @deva[शुभ्रदन्]/deva[शुभ्रदन्तः], @deva[वराहदन्]/deva[वराहदन्तः] (boar-tusked). The @deva[च] indicates extension to other words: @deva[अहिदन्]/deva[अहिदन्तः], @deva[मूषिकदन्]/deva[मूषिकदन्तः], @deva[गर्दभदन्]/deva[गर्दभदन्तः], @deva[शिखरदन्]/deva[शिखरदन्तः].",
                "advanced": "The @deva[च] ('and') signals that the list is extensible. The pattern suggests @deva[दत्]-substitution is broadly optional in comparison-Bahuvrīhis and descriptive compounds. The enumerated words (@deva[अग्र]-final, @deva[शुद्ध], @deva[शुभ्र], @deva[वराह]) and the extensions (@deva[अहि], @deva[मूषिक], @deva[गर्दभ], @deva[शिखर]) all describe tooth qualities through comparison or attribute."
            }
        },
        "54146": {
            "en": {
                "simple": "The final @deva[द] of @deva[ककुद] (hump) is elided in a Bahuvrīhi compound when it denotes an animal's age or condition. Examples: @deva[असंजातककुत्] (young animal, hump not yet formed), @deva[पूर्णककुत्] (middle-aged), @deva[उन्नतककुत्] (old, hump raised), @deva[स्थूलककुत्] (strong).",
                "standard": "This sūtra prescribes @deva[द]-elision from @deva[ककुद] (hump) in Bahuvrīhi when denoting @deva[अवस्था] (condition/life-stage of animals). @deva[असंजातं ककुदम् अस्य] = @deva[असंजातककुत्] (young, hump not developed). @deva[पूर्णककुत्] (middle-aged, full hump). @deva[उन्नतककुत्] (old, raised hump). @deva[स्थूलककुत्] (strong, thick hump). @deva[यष्टिककुत्] (neither fat nor thin). Without condition-meaning: @deva[श्वेतककुदः] (white-humped)—no elision.",
                "advanced": "The @deva[अवस्था] (condition/stage) restriction parallels @ref[5.4.141]'s @deva[वयसि] for @deva[दन्त]. The hump serves as an age/condition indicator for cattle: undeveloped (young), full (prime), raised (old). This creates specialized vocabulary for animal husbandry contexts. Color descriptions (@deva[श्वेतककुद]) are not condition-markers, so they retain @deva[ककुद]."
            }
        },
        "54147": {
            "en": {
                "simple": "The Bahuvrīhi @deva[त्रिककुत्] (three-humped/three-peaked) is specifically the name of a mountain. When not naming a mountain: @deva[त्रिककुदः].",
                "standard": "This sūtra teaches that @deva[त्रिककुत्] (formed by @deva[द]-elision from @deva[ककुद]) is specifically a mountain name. @deva[त्रीणि ककुदानि अस्य] = @deva[त्रिककुत्] (a three-peaked hill, peaks shaped like humps). This is a @deva[संज्ञा] (proper name) for a particular mountain, not all three-peaked hills. When not naming this specific mountain: @deva[त्रिककुदः] (three-humped).",
                "advanced": "The @deva[पर्वतस्य] (of a mountain) condition makes this a proper noun formation. The @deva[द]-elision creates a distinctive form for the mountain name. Generic three-peaked/three-humped descriptions use the unelided @deva[त्रिककुद]. This parallels place-name formations where morphological irregularity marks proper-noun status."
            }
        },
        "54148": {
            "en": {
                "simple": "The final @deva[द] of @deva[काकुद] (palate) is elided in a Bahuvrīhi compound when preceded by @deva[उद्] or @deva[वि]. Examples: @deva[उत्काकुत्] (with raised palate), @deva[विकाकुत्] (with open/separated palate).",
                "standard": "This sūtra prescribes @deva[द]-elision from @deva[काकुद] (palate) in Bahuvrīhi when preceded by @deva[उद्] (up) or @deva[वि] (apart). Thus @deva[उद्गतं काकुदम् अस्य] = @deva[उत्काकुत्] (having raised palate). Similarly @deva[विकाकुत्] (having separated/open palate).",
                "advanced": "The word @deva[काकुद] means 'palate' (distinct from @deva[ककुद] 'hump'). The prefixes @deva[उद्] and @deva[वि] describe palate conditions or positions. This rule is specific to these two prefixes, unlike the broader condition-based rule for @deva[ककुद] in @ref[5.4.146]."
            }
        },
        "54149": {
            "en": {
                "simple": "The final @deva[द] of @deva[काकुद] (palate) is optionally elided in a Bahuvrīhi compound when preceded by @deva[पूर्ण] (full). Examples: @deva[पूर्णकाकुत्] or @deva[पूर्णकाकुदः] (with full palate).",
                "standard": "This sūtra prescribes optional @deva[द]-elision from @deva[काकुद] when preceded by @deva[पूर्ण]. Thus @deva[पूर्णं काकुदम् अस्य] = @deva[पूर्णकाकुत्] or @deva[पूर्णकाकुदः] (having a full/complete palate). This provides optionality where @ref[5.4.148] was obligatory.",
                "advanced": "The @deva[विभाषा] for @deva[पूर्ण] contrasts with the obligatory elision after @deva[उद्/वि] in @ref[5.4.148]. This suggests @deva[पूर्णकाकुद] was common enough in usage to warrant preserving both forms. The optionality may reflect dialectal or stylistic variation."
            }
        },
        "54150": {
            "en": {
                "simple": "The words @deva[सुहृत्] (friend) and @deva[दुर्हृत्] (enemy) are irregular Bahuvrīhi compounds formed by eliding @deva[अय] from @deva[हृदय] (heart). Examples: @deva[सुहृत्] (well-hearted = friend), @deva[दुर्हृत्] (ill-hearted = enemy). But: @deva[सुहृदयः कारुणिकः] (kind-hearted person).",
                "standard": "This sūtra teaches the irregular formations @deva[सुहृत्] and @deva[दुर्हृत्] from @deva[सु/दुर्] + @deva[हृदय], with @deva[अय]-elision. @deva[सुहृत्] means 'one whose heart is favorably disposed' = friend. @deva[दुर्हृत्] means 'one whose heart is evil' = enemy. These specific meanings trigger the formation. Without friend/enemy meaning: @deva[सुहृदयः कारुणिकः] (kind-hearted, merciful person), @deva[दुर्हृदयः चोरः] (evil-hearted thief)—full @deva[हृदय] retained.",
                "advanced": "The semantic condition (@deva[मित्रामित्रार्थे], in the sense of friend/enemy) restricts the irregular formation. @deva[सुहृत्/दुर्हृत्] are lexicalized as 'friend/enemy' specifically, while @deva[सुहृदय/दुर्हृदय] remain compositional ('good-hearted/bad-hearted'). This shows semantic specialization driving morphological irregularity."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.4.136-150)")

if __name__ == "__main__":
    main()
