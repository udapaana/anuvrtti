#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.4.121-135."""

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
        "54121": {
            "en": {
                "simple": "The affix @deva[अच्] is optionally added to @deva[हलि] (plough) and @deva[सक्थि] (thigh) at the end of a Bahuvrīhi compound when preceded by @deva[नञ्], @deva[दुस्], or @deva[सु]. Examples: @deva[अहलः] or @deva[अहलिः], @deva[सुसक्थः] or @deva[सुसक्थिः].",
                "standard": "This sūtra prescribes optional @deva[अच्] after @deva[हलि] and @deva[सक्थि] in Bahuvrīhi when preceded by negative @deva[नञ्], @deva[दुस्] (bad), or @deva[सु] (good). Thus @deva[अविद्यमाना हलिः अस्य] = @deva[अहलः] or @deva[अहलिः]; @deva[दुर्हलः] or @deva[दुर्हलिः]; @deva[सुहलः] or @deva[सुहलिः]. Similarly @deva[असक्थः/असक्थिः], @deva[दुःसक्थः/दुःसक्थिः], @deva[सुसक्थः/सुसक्थिः]. Some read @deva[हलिशक्त्योः], giving @deva[अशक्तिः/अशक्तः], @deva[दुःशक्तिः/दुःशक्तः] (having deformed power), @deva[सुशक्तिः/सुशक्तः].",
                "advanced": "The @deva[विभाषा] provides choice between @deva[इ]-final (base form) and @deva[अ]-final (with @deva[अच्]). The prefixes @deva[नञ्/दुस्/सु] trigger this optionality. The variant reading @deva[हलिशक्त्योः] substitutes @deva[शक्ति] (power) for @deva[सक्थि] (thigh), showing textual variation in the grammatical tradition."
            }
        },
        "54122": {
            "en": {
                "simple": "The affix @deva[असिच्] (yielding @deva[अस्]) is invariably added to @deva[प्रजा] (offspring) and @deva[मेधा] (intelligence) at the end of a Bahuvrīhi compound when preceded by @deva[नञ्], @deva[दुस्], or @deva[सु]. Examples: @deva[अप्रजाः], @deva[सुप्रजाः], @deva[दुर्मेधाः], @deva[सुमेधाः].",
                "standard": "This sūtra prescribes @deva[असिच्] (→ @deva[अस्]) after @deva[प्रजा] and @deva[मेधा] in Bahuvrīhi when preceded by @deva[नञ्], @deva[दुस्], or @deva[सु]. This is @deva[नित्य] (invariable), unlike the previous sūtra's option. Thus @deva[अविद्यमाना प्रजा अस्य] = @deva[अप्रजस्], nom. @deva[अप्रजाः]; @deva[दुष्प्रजाः], @deva[सुप्रजाः]; @deva[अमेधाः], @deva[दुर्मेधाः], @deva[सुमेधाः]. The @deva[नित्य] term also indicates the affix applies with other first members: e.g., @deva[अल्पमेधस्] as in @deva[मन्दकस्य अल्पमेधसः].",
                "advanced": "The @deva[नित्य] specification (1) blocks the previous sūtra's optionality, and (2) extends the rule beyond @deva[नञ्/दुस्/सु] to any first member. The Rāmāyaṇa citation @deva[मन्दकस्यालपमेधसः] shows @deva[अल्प] + @deva[मेधा] → @deva[अल्पमेधस्], demonstrating the broader application signaled by @deva[नित्य]."
            }
        },
        "54123": {
            "en": {
                "simple": "In Vedic usage, the form @deva[बहुप्रजाः] (with @deva[असिच्]) is valid after @deva[बहु]. Example: @deva[बहुप्रजा निर्ऋतिम् आविवेश]. In classical Sanskrit: @deva[बहुप्रजः] (without the affix).",
                "standard": "This sūtra validates the Vedic form @deva[बहुप्रजाः] with @deva[असिच्] after @deva[बहु]. Thus @deva[बहुप्रजा निर्ऋतिम् आविवेश] (Vedic). In secular/classical literature, the form is @deva[बहुप्रजः], as in @deva[बहुप्रजो ब्राह्मणः] (a Brahmin with many offspring).",
                "advanced": "The Vedic license extends @deva[असिच्] after @deva[बहु] + @deva[प्रजा], whereas classical usage follows @ref[5.4.122] which requires @deva[नञ्/दुस्/सु] as triggers. The contrast @deva[बहुप्रजाः] (Vedic) vs. @deva[बहुप्रजः] (Laukika) illustrates the broader morphological freedom in Vedic Sanskrit."
            }
        },
        "54124": {
            "en": {
                "simple": "The affix @deva[अनिच्] (yielding @deva[अन्]) is added to @deva[धर्म] at the end of a Bahuvrīhi compound when @deva[धर्म] alone is the final member or when the first member is a single word. Examples: @deva[कल्याणधर्मा] (having good qualities), @deva[प्रियधर्मा]. But: @deva[परमस्वधर्मः] (supreme own-duty).",
                "standard": "This sūtra prescribes @deva[अनिच्] after @deva[धर्म] in Bahuvrīhi when @deva[धर्म] stands alone as final member (@deva[केवल]) or when the first member is a single word. Thus @deva[कल्याणः धर्मः अस्य] = @deva[कल्याणधर्मन्], nom. @deva[कल्याणधर्मा]; similarly @deva[प्रियधर्मा]. When the first member is itself compound: @deva[परमः स्वः धर्मः अस्य] = @deva[परमस्वधर्मः] (no @deva[अनिच्]). Kāśikā says @deva[केवलात्] qualifies @deva[पूर्वपद]; Kaumudī allows compound first members treated as units; Prasādakara says @deva[केवलात्] qualifies both @deva[धर्म] and @deva[पूर्वपद].",
                "advanced": "The interpretive debate on @deva[केवलात्] produces different analyses: (1) Kāśikā: first member must be a single word; (2) Kaumudī: first member can be compound if functioning as single unit, allowing @deva[सन्दिग्धसाध्यधर्मा], @deva[अनुच्छित्तिधर्मा]; (3) Prasādakara: both @deva[धर्म] and first member must be @deva[केवल]. The forms show @deva[धर्म] → @deva[धर्मन्] transformation."
            }
        },
        "54125": {
            "en": {
                "simple": "The word @deva[जम्भन्] (having already taken samāsānta @deva[अन्]) stands at the end of a Bahuvrīhi compound when preceded by @deva[सु], @deva[हरित], @deva[तृण], or @deva[सोम]. Examples: @deva[सुजम्भा] (having good food/teeth), @deva[हरितजम्भा], @deva[तृणजम्भा] (grass-eating), @deva[सोमजम्भा].",
                "standard": "This sūtra teaches that @deva[जम्भन्] (already containing irregular samāsānta @deva[अन्]) appears as compound-final when preceded by @deva[सु], @deva[हरित], @deva[तृण], or @deva[सोम]. @deva[जम्भ] means 'food' or 'tooth.' Thus @deva[शोभनः जम्भः अस्य] = @deva[सुजम्भा देवदत्तः]; @deva[हरितजम्भा]; @deva[तृणं भक्ष्यं यस्य] = @deva[तृणजम्भा] (grass-eater); @deva[सोमजम्भा]. In the 'tooth' meaning, analyze as @deva[तृणम् इव जम्भः अस्य]. Without these prefixes: @deva[पतितजम्भः].",
                "advanced": "The @deva[जम्भन्] form already contains the @deva[अन्] affix irregularly, making this a case of citing a pre-formed compound element. The dual meaning—'food' (@deva[भक्ष्य]) and 'tooth' (@deva[दन्त])—requires different Bahuvrīhi analyses: possessive for 'having good food/teeth' vs. comparative for 'having grass-like teeth.'"
            }
        },
        "54126": {
            "en": {
                "simple": "The form @deva[दक्षिणेर्मा] is an irregular Bahuvrīhi compound meaning 'wounded on the right side by a hunter.' Example: @deva[दक्षिणेर्मा मृगः] (a stag wounded by the hunter on the right flank).",
                "standard": "This sūtra teaches the irregular formation @deva[दक्षिणेर्मन्] (@deva[दक्षिणम् ईर्म अस्य]) used in connection with a hunter (@deva[लुब्ध] = @deva[व्याध], fowler). Thus @deva[दक्षिणेर्मा मृगः] means 'a stag wounded on the right flank by the hunter.' The word @deva[ईर्म] means 'wound.' In the verse @deva[बाली हेमाब्जमाली... दक्षिणेर्मा], it merely denotes hunting. Without hunting context: @deva[दक्षिणेर्मं शकटम्] (a cart with right-side damage).",
                "advanced": "The @deva[लुब्ध] (hunter) context triggers this specific formation. @deva[ईर्म] (wound, injury) combines with @deva[दक्षिण] (right) to form the Bahuvrīhi 'having a wound on the right.' The technical hunting vocabulary shows specialized compound formation for domain-specific terminology."
            }
        },
        "54127": {
            "en": {
                "simple": "The affix @deva[इच्] (yielding @deva[इ]) is added to a Bahuvrīhi compound expressing reciprocal action. Examples: @deva[केशाकेशि] (hair-to-hair grappling), @deva[दण्डादण्डि] (stick-to-stick fighting), @deva[मुसलामुसलि].",
                "standard": "This sūtra prescribes @deva[इच्] after Bahuvrīhi compounds denoting @deva[विप्रतिषेध] (reciprocity of action), formed by @ref[2.2.27]. Thus @deva[केशेषु केशेषु गृहीत्वा इदं युद्धं प्रवृत्तम्] = @deva[केशाकेशि] (fighting by grabbing each other's hair). Similarly @deva[कचाकचि], @deva[मुसलामुसलि], @deva[दण्डादण्डि]. The @deva[इच्] affix also forms Avyayībhāva compounds, listed in @deva[तिष्ठद्गु] words (@ref[2.1.17]).",
                "advanced": "The @deva[विप्रतिषेध] (mutual opposition/reciprocity) semantic triggers this formation for combat or conflict vocabulary. The reduplication pattern (X-ā-X-i) expresses 'X against X.' The @ref[2.2.27] compounding rule specifically handles these reciprocal Bahuvrīhis. The note about @deva[तिष्ठद्गु] indicates @deva[इच्] can form adverbial compounds too."
            }
        },
        "54128": {
            "en": {
                "simple": "The words @deva[द्विदण्डि] (with two sticks) and others in the @deva[द्विदण्ड्यादि] list are valid formations with @deva[इच्]. Examples: @deva[द्विदण्डि प्रहरति] (strikes with two sticks), @deva[उभयाहस्ति], @deva[एकपदि].",
                "standard": "This sūtra validates the @deva[द्विदण्ड्यादि] gaṇa as @deva[इच्] formations used in fixed senses. Thus @deva[द्विदण्डि प्रहरति] (strikes with two sticks), @deva[द्विमुसलि प्रहरति] (strikes with two pestles). But not @deva[द्विदण्डा शाला] (a hall with two pillars). Though the context is Bahuvrīhi, some are Tatpuruṣa: @deva[निकुच्य कर्णौ धावति] = @deva[निकुच्यकर्णि धावति] (runs with ears bent back). Compounding by @ref[2.1.72].",
                "advanced": "The gaṇa (21 items) includes: @deva[द्विदण्डि], @deva[द्विमुसलि], @deva[उभाञ्जलि/उभयाञ्जलि], @deva[उभादन्ति/उभयादन्ति], @deva[उभाहस्ति/उभयाहस्ति], @deva[उभाकर्णि/उभयाकर्णि], @deva[उभापाणि/उभयापाणि], @deva[उभाबाहु/उभयाबाहु], @deva[एकपदि], @deva[प्रोह्यपदि], @deva[आढ्यपदि], @deva[सपदि], @deva[निकुच्यकर्णि], @deva[संहतपुच्छि], @deva[अन्तेवासि]. The dative @deva[द्विदण्ड्यादिभ्यः] means 'for the purpose of forming these words.'"
            }
        },
        "54129": {
            "en": {
                "simple": "@deva[ज्ञु] is substituted for @deva[जानु] (knee) in a Bahuvrīhi compound when preceded by @deva[प्र] or @deva[सम्]. Examples: @deva[प्रज्ञुः] (with prominent knees), @deva[संज्ञुः] (with joined knees).",
                "standard": "This sūtra prescribes @deva[ज्ञु]-substitution for @deva[जानु] in Bahuvrīhi when preceded by @deva[प्र] or @deva[सम्]. Thus @deva[प्रकृष्टे जानुनी अस्य] = @deva[प्रज्ञुः] (having prominent/extended knees). Similarly @deva[संज्ञुः] (having joined knees). This is obligatory with these prefixes.",
                "advanced": "The @deva[जानु] → @deva[ज्ञु] substitution involves significant phonological reduction. The prefixes @deva[प्र] (forth, prominent) and @deva[सम्] (together) specifically trigger this change. The resulting forms are more compact than the unsubstituted alternatives would be."
            }
        },
        "54130": {
            "en": {
                "simple": "@deva[ज्ञु] may optionally substitute for @deva[जानु] (knee) when preceded by @deva[ऊर्ध्व] (upward). Examples: @deva[ऊर्ध्वजानुः] or @deva[ऊर्ध्वज्ञुः] (with upraised knees).",
                "standard": "This sūtra provides optional @deva[ज्ञु]-substitution for @deva[जानु] when preceded by @deva[ऊर्ध्व] (upward). Thus @deva[ऊर्ध्वे जानुनी अस्य] = @deva[ऊर्ध्वजानुः] or @deva[ऊर्ध्वज्ञुः] (having upraised knees). This contrasts with the obligatory substitution after @deva[प्र/सम्] in the previous sūtra.",
                "advanced": "The @deva[विभाषा] here allows both forms, unlike @ref[5.4.129] which mandates substitution. This suggests @deva[ऊर्ध्वजानु] was common enough in usage that both forms remained acceptable, while @deva[प्रजानु] and @deva[संजानु] had been entirely replaced by @deva[प्रज्ञु/संज्ञु]."
            }
        },
        "54131": {
            "en": {
                "simple": "@deva[अनङ्] (yielding @deva[अन्]) substitutes for the final of @deva[ऊधस्] (udder) in a feminine Bahuvrīhi compound. Examples: @deva[कुण्डोध्नी] (pot-uddered cow), @deva[घटोध्नी] (jar-uddered cow). Masculine: @deva[महोधाः पर्जन्यः].",
                "standard": "This sūtra prescribes @deva[अनङ्]-substitution for @deva[ऊधस्] (udder) in feminine Bahuvrīhi. Thus @deva[कुण्डम् इव ऊधः अस्याः] = @deva[कुण्डोध्नी] (a cow with pot-like udder); @deva[घटोध्नी]. Derivation: @deva[ऊधस्] + @deva[अन्] = @deva[ऊधन्] (@ref[6.4.148]); @deva[ऊधन्] + @deva[ङीष्] = @deva[ऊध्न्] + @deva[ई] (@deva[अ] elided by @ref[6.4.134]) = @deva[ऊध्नी]. Feminine by @deva[ङीष्] (@ref[4.1.25]). No substitution in masculine: @deva[महोधाः पर्जन्यः] (rain-cloud with great udder); @deva[घटोधः धैनुकम्].",
                "advanced": "The restriction to feminine reflects that udder-compounds typically describe cows (feminine). The @deva[अनङ्] designation includes the @deva[ङ्] for technical reasons while the effective affix is @deva[अन्]. The masculine forms retain @deva[ऊधस्] without substitution, showing gender-conditioned allomorphy."
            }
        },
        "54132": {
            "en": {
                "simple": "@deva[अनङ्] (yielding @deva[अन्]) substitutes for the final of @deva[धनुस्] (bow) in a Bahuvrīhi compound. Examples: @deva[शार्ङ्गधन्वा] (having the Śārṅga bow), @deva[पुष्पधन्वा] (flower-bowed = Kāma), @deva[गाण्डीवधन्वा] (having the Gāṇḍīva bow).",
                "standard": "This sūtra prescribes @deva[अनङ्]-substitution for @deva[धनुस्] (bow) in Bahuvrīhi. Thus @deva[शार्ङ्गं धनुः अस्य] = @deva[शार्ङ्गधन्वन्], nom. @deva[शार्ङ्गधन्वा] (Viṣṇu, having the Śārṅga bow). Similarly @deva[गाण्डीवधन्वा] (Arjuna), @deva[पुष्पधन्वा] (Kāmadeva, flower-bowed), @deva[अधिज्यधन्वा] (with strung bow).",
                "advanced": "The @deva[धनुस्] → @deva[धन्वन्] change transforms the @deva[अस्]-stem to @deva[अन्]-stem. This is obligatory in Bahuvrīhi, unlike the optional @ref[5.4.133] for names. The epithets for divine/heroic figures (@deva[शार्ङ्गधन्वा] for Viṣṇu, @deva[गाण्डीवधन्वा] for Arjuna) show common usage."
            }
        },
        "54133": {
            "en": {
                "simple": "When the Bahuvrīhi compound with @deva[धनुस्] is a name (@deva[संज्ञा]), the @deva[अनङ्]-substitution is optional. Examples: @deva[शतधनुः] or @deva[शतधन्वा], @deva[दृढधनुः] or @deva[दृढधन्वा].",
                "standard": "This sūtra provides optionality for @deva[अनङ्]-substitution when the @deva[धनुस्]-Bahuvrīhi is a proper name. Thus @deva[शतधनुः] or @deva[शतधन्वा] (hundred-bowed, a name), @deva[दृढधनुः] or @deva[दृढधन्वा] (firm-bowed, a name). This declares an option where @ref[5.4.132] made substitution obligatory.",
                "advanced": "The @deva[संज्ञायाम्] condition recognizes that proper names may preserve archaic or variant forms. The optionality allows @deva[शतधनुः] (with @deva[उस्]-stem retained) alongside @deva[शतधन्वा] (with @deva[अनङ्]-substitution). This reflects the tendency for personal names to resist regular morphological processes."
            }
        },
        "54134": {
            "en": {
                "simple": "@deva[निङ्] (yielding @deva[नि]) substitutes for the final of @deva[जाया] (wife) in a Bahuvrīhi compound. Examples: @deva[युवजानिः] (having a young wife), @deva[वृद्धजानिः] (having an old wife).",
                "standard": "This sūtra prescribes @deva[निङ्]-substitution for @deva[जाया] (wife) in Bahuvrīhi. Thus @deva[युवतिः जाया यस्य] = @deva[युवजानिः] (having a young wife). Derivation: @deva[जाया] + @deva[निङ्] = @deva[जाय्] + @deva[नि] → @deva[जानि] (@deva[य्] elided by @ref[6.1.66]). Similarly @deva[वृद्धजानिः] (having an old wife). There is also @deva[पुंवद्भाव] (masculine treatment).",
                "advanced": "The @deva[निङ्] affix produces @deva[जानि] from @deva[जाया]. The @deva[य्]-elision follows @ref[6.1.66]. The @deva[पुंवद्भाव] reference indicates the compound is treated as masculine grammatically despite @deva[जाया] being feminine. The @deva[जानि]-form is distinct from the independent word @deva[जानि] (wife)."
            }
        },
        "54135": {
            "en": {
                "simple": "@deva[इ] substitutes for the final @deva[अ] of @deva[गन्ध] (smell) in a Bahuvrīhi compound when preceded by @deva[उद्], @deva[पूति], @deva[सु], or @deva[सुरभि]. Examples: @deva[उद्गन्धिः] (having rising smell), @deva[पूतिगन्धिः] (foul-smelling), @deva[सुगन्धिः] (fragrant), @deva[सुरभिगन्धिः]. But: @deva[तीव्रगन्धा वातः].",
                "standard": "This sūtra prescribes @deva[इ]-substitution for the final @deva[अ] of @deva[गन्ध] in Bahuvrīhi when preceded by @deva[उद्], @deva[पूति], @deva[सु], or @deva[सुरभि]. Thus @deva[उद्गन्धिः], @deva[पूतिगन्धिः], @deva[सुगन्धिः], @deva[सुरभिगन्धिः]. Without these prefixes: @deva[तीव्रगन्धा वातः] (wind with strong smell). Vārttika: @deva[गन्ध] is a material noun (@deva[गन्धान् पिनष्टि], grinds perfumes) and an adjective (@deva[चन्दनगन्धः], having sandal scent). The substitution applies only when @deva[गन्ध] is adjectival/attributive, not when it's a substance: @deva[शोभना गन्धाः अस्य] = @deva[सुगन्ध आपणिकः] (shopkeeper with good perfumes for sale).",
                "advanced": "The semantic distinction between @deva[गन्ध] as substance (perfume, material) vs. attribute (smell, scent) determines applicability. The listed prefixes (@deva[उद्] = rising, @deva[पूति] = putrid, @deva[सु] = good, @deva[सुरभि] = fragrant) all modify @deva[गन्ध] attributively. The material-noun use (@deva[सुगन्ध आपणिकः]) blocks substitution because @deva[गन्ध] there means perfume-goods, not scent-quality."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.4.121-135)")

if __name__ == "__main__":
    main()
