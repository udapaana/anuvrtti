#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 4.4.91-105."""

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
        "44091": {
            "en": {
                "simple": "The affix @deva[यत्] comes after specific words (all in the instrumental case) with specific senses:\n\n1. @deva[नौ] (boat) in sense 'to be crossed': @deva[नावा तार्यम्] → @deva[नाव्यम्] 'water, river' (what can be crossed by boat)\n\n2. @deva[वयस्] (age) in sense 'like': @deva[वयसा तुल्यः] → @deva[वयस्यः] 'a friend' (one of similar age)\n\n3. @deva[धर्म] (merit) in sense 'attainable': @deva[धर्मेण प्राप्यम्] → @deva[धर्म्यम्] 'attainable through dharma' (refers to fruit, not act)\n\n4. @deva[विष] (poison) in sense 'to be killed': @deva[विषेण वध्यः] → @deva[विष्यः] 'one who deserves death by poison'\n\n5. @deva[मूल] (root) in sense 'to be bent down': @deva[मूलेन आनाम्यम्] → @deva[मूल्यम्] 'price' (to be overpowered from the root)\n\n6. @deva[मूल] (capital) in sense 'equivalent to': @deva[मूल्यम्]\n\n7. @deva[सीता] (furrow) in sense 'united with': @deva[सीत्यम्]\n\n8. @deva[तुला] (balance) in sense 'equally measured': @deva[तुल्यम्]",
                "standard": "After specific words (in @deva[तृतीया]) with specific senses, @deva[यत्] applies:\n\n1. @deva[नौ] + @deva[तार्यम्] → @deva[नाव्यम्] 'crossable by boat' (water/river)\n2. @deva[वयस्] + @deva[तुल्यः] → @deva[वयस्यः] 'friend' (age-equal)\n3. @deva[धर्म] + @deva[प्राप्यम्] → @deva[धर्म्यम्] 'attainable by dharma' (fruit, distinct from @ref[4.4.92] which means 'consistent with dharma')\n4. @deva[विष] + @deva[वध्यः] → @deva[विष्यः] 'deserving poison-death'\n5. @deva[मूल] + @deva[आनाम्यम्] → @deva[मूल्यम्] 'price' (@deva[आनाम्य] = @deva[अभिभवनीय])\n6. @deva[मूल] (capital) + equivalent → @deva[मूल्यम्]\n7. @deva[सीता] + united → @deva[सीत्यम्]\n8. @deva[तुला] + equal measure → @deva[तुल्यम्]",
                "advanced": "@deva[यत्] after specific @deva[तृतीयान्त] words with specific senses:\n\n1. @deva[नौ] + @deva[तार्यम्] → @deva[नाव्यम्]\n2. @deva[वयस्] + @deva[तुल्यः] → @deva[वयस्यः]\n3. @deva[धर्म] + @deva[प्राप्यम्] → @deva[धर्म्यम्] (= @deva[फल]; distinct from @ref[4.4.92] = @deva[कर्म])\n4. @deva[विष] + @deva[वध्यः] → @deva[विष्यः]\n5. @deva[मूल] + @deva[आनाम्यम्] → @deva[मूल्यम्] (@deva[आनाम्य] by √@deva[नम्] + @deva[ण्यत्], irregularly per @ref[3.1.98])\n6-8. @deva[मूल]/[@deva[सीता]/[@deva[तुला] with respective senses."
            }
        },
        "44092": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the words @deva[धर्म], @deva[पथिन्], @deva[अर्थ], and @deva[न्याय] in the ablative case, in the sense of 'not deviating from that'.\n\nExamples:\n- @deva[धर्मात् अनपेतम्] 'not deviating from dharma' → @deva[धर्म्यम्] 'just, righteous'\n- @deva[पथः अनपेतम्] → @deva[पथ्यम्] 'wholesome diet' (not deviating from the path prescribed by śāstra)\n- @deva[अर्थात् अनपेतम्] → @deva[अर्थ्यम्] 'fit, appropriate'\n- @deva[न्यायात् अनपेतम्] → @deva[न्याय्यम्] 'just, suitable'\n\nThe word @deva[संज्ञायाम्] from @ref[4.4.89] applies—these are specific names with defined meanings. A thief who doesn't deviate from the road (@deva[पथात् अनपेतः]) would not be called @deva[पथ्य].",
                "standard": "After @deva[धर्म], @deva[पथिन्], @deva[अर्थ], @deva[न्याय] (in @deva[पञ्चमी]), @deva[यत्] applies in sense @deva[अनपेतम्] (not deviating). @deva[संज्ञायाम्] from @ref[4.4.89] applies.\n\nExamples:\n- @deva[धर्म्यम्] 'just' (not deviating from @deva[धर्म])\n- @deva[पथ्यम्] 'wholesome' (@deva[शास्त्रीयात् पथो यदनपेतम्])—a thief on the road is not @deva[पथ्य]\n- @deva[अर्थ्यम्] 'fit'\n- @deva[न्याय्यम्] 'suitable'",
                "advanced": "@deva[धर्म], @deva[पथिन्], @deva[अर्थ], @deva[न्याय] (in @deva[पञ्चमी]) take @deva[यत्] in sense @deva[अनपेतम्]. @deva[संज्ञायाम्] (@ref[4.4.89]).\n\nExamples: @deva[धर्म्यम्], @deva[पथ्यम्] (@deva[शास्त्रीयपथानपेत], not @deva[चोरः]), @deva[अर्थ्यम्], @deva[न्याय्यम्]."
            }
        },
        "44093": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[छन्दस्] (will/desire) in the instrumental case, in the sense of 'made thereby'.\n\nExample: @deva[छन्दसा निर्मितम्] 'made at will' → @deva[छन्दस्यः] 'made according to one's wish'\n\nNote: @deva[छन्दस्] here means @deva[इच्छा] (will, desire, fancy), not 'metre' or 'Veda'.",
                "standard": "After @deva[छन्दस्] (in @deva[तृतीया]), @deva[यत्] applies in sense @deva[निर्मितम्] (made).\n\nExample: @deva[छन्दसा निर्मितम्] → @deva[छन्दस्यः] 'made at will'.\n\n@deva[छन्दस्] = @deva[इच्छा] (will/desire), not metre or Veda.",
                "advanced": "@deva[छन्दस्] (in @deva[तृतीया]) takes @deva[यत्] in sense @deva[निर्मितम्].\n\nExample: @deva[छन्दस्यः].\n\n@deva[छन्दस्] = @deva[इच्छा], not @deva[वेद]/[@deva[वृत्त]."
            }
        },
        "44094": {
            "en": {
                "simple": "Both affixes @deva[अण्] and @deva[यत्] come after the word @deva[उरस्] (chest/loins) in the instrumental case, in the sense of 'made/produced thereby'.\n\nExamples:\n- With @deva[अण्]: @deva[उरसा निर्मितः] → @deva[औरसः] 'one's own son' (not adopted—produced from one's own loins)\n- With @deva[यत्]: @deva[उरस्यः]\n\nThe word @deva[संज्ञायाम्] from @ref[4.4.89] applies—these words specifically denote 'son', not just anything produced from the chest.",
                "standard": "After @deva[उरस्] (in @deva[तृतीया]), @deva[अण्] and @deva[यत्] apply in sense @deva[निर्मितः].\n\nExamples:\n- @deva[अण्]: @deva[औरसः] 'own son' (not adopted)\n- @deva[यत्]: @deva[उरस्यः]\n\n@deva[संज्ञायाम्] (@ref[4.4.89]): specifically means 'son', not general 'loin-produced'.",
                "advanced": "@deva[उरस्] (in @deva[तृतीया]) takes @deva[अण्] and @deva[यत्] in sense @deva[निर्मितः]. @deva[संज्ञायाम्].\n\nExamples: @deva[औरसः] (@deva[अण्]), @deva[उरस्यः] (@deva[यत्])—both mean 'own son'."
            }
        },
        "44095": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[हृदय] (heart) in the genitive case, in the sense of 'loved by that'.\n\nExample: @deva[हृदयस्य प्रियः] 'dear to the heart' → @deva[हृद्यः] 'pleasant to the heart'\n\nUsages: @deva[हृद्यः देशः] 'a pleasant region', @deva[हृद्यं वनम्] 'a pleasant forest'\n\nBut @deva[हृद्यः पुत्रः] 'a son dear to the heart' is not valid—the word @deva[संज्ञायाम्] from @ref[4.4.89] restricts this to specific uses.",
                "standard": "After @deva[हृदय] (in @deva[षष्ठी]), @deva[यत्] applies in sense @deva[प्रियः] (loved). @deva[संज्ञायाम्] (@ref[4.4.89]).\n\nExample: @deva[हृदयस्य प्रियः] → @deva[हृद्यः] 'pleasant to heart'.\n\nValid: @deva[हृद्यः देशः], @deva[हृद्यं वनम्]\nInvalid: @deva[*हृद्यः पुत्रः] (restricted by @deva[संज्ञायाम्])",
                "advanced": "@deva[हृदय] (in @deva[षष्ठी]) takes @deva[यत्] in sense @deva[प्रियः]. @deva[संज्ञायाम्] (@ref[4.4.89]).\n\nExample: @deva[हृद्यः].\n\nRestricted use: @deva[हृद्यः देशः], @deva[हृद्यं वनम्]—not @deva[*हृद्यः पुत्रः]."
            }
        },
        "44096": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[हृदय] (heart) in the genitive case, in the sense of 'a hymn that binds the heart'.\n\nExample: @deva[हृदयस्य बन्धनम् ऋषिः] 'a hymn that binds the heart' → @deva[हृद्यः] 'a mantra for bringing another's heart under control'\n\nThis refers to @deva[वशीकरणमन्त्र]—spells for enchantment.\n\nThe word @deva[ऋषि] here means 'Vedic hymn' or 'mantra'. @deva[बन्धन] = 'that by which something is bound'.",
                "standard": "After @deva[हृदय] (in @deva[षष्ठी]), @deva[यत्] applies in sense @deva[बन्धनम् ऋषिः] (hymn that binds).\n\nExample: @deva[हृदयस्य बन्धनम् ऋषिः] → @deva[हृद्यः] 'enchantment mantra' (@deva[वशीकरणमन्त्र]).\n\n@deva[ऋषि] = Vedic hymn/mantra. @deva[बन्धन] = that which binds.",
                "advanced": "@deva[हृदय] (in @deva[षष्ठी]) takes @deva[यत्] in sense @deva[बन्धनम् ऋषिः].\n\nExample: @deva[हृद्यः] = @deva[वशीकरणमन्त्रः].\n\n@deva[ऋषि] = @deva[वेदमन्त्र]. @deva[बन्धन] = @deva[येन बध्यते तत्]."
            }
        },
        "44097": {
            "en": {
                "simple": "The affix @deva[यत्] comes after specific words (in the genitive case) with specific senses:\n\n1. @deva[मत] in sense 'means': @deva[मतस्य करणम्] → @deva[मत्यः] 'means of acquiring knowledge'\n\n2. @deva[जन] in sense 'gossip': @deva[जनस्य जल्पः] → @deva[जन्यः] 'rumour, gossip'\n\n3. @deva[हल] in sense 'drawing/ploughing': @deva[हलस्य कर्षः] → @deva[हल्यः] 'ploughed'\n\nAlso @deva[द्विहल्यः] 'ploughed twice', @deva[त्रिहल्यः] 'ploughed thrice'—@deva[तदन्तविधि] applies (see @deva[रथसीताहलेभ्यो यद्विधौ]).",
                "standard": "After specific words (in @deva[षष्ठी]) with specific senses, @deva[यत्] applies:\n\n1. @deva[मत] + @deva[करणम्] → @deva[मत्यः] 'means of knowledge'\n2. @deva[जन] + @deva[जल्पः] → @deva[जन्यः] 'rumour'\n3. @deva[हल] + @deva[कर्षः] → @deva[हल्यः] 'ploughed'\n\n@deva[तदन्तविधि] applies: @deva[द्विहल्यः], @deva[त्रिहल्यः] (@deva[रथसीताहलेभ्यो यद्विधौ]).",
                "advanced": "@deva[यत्] after @deva[षष्ठ्यन्त] with specific senses:\n\n1. @deva[मत] + @deva[करणम्] → @deva[मत्यः]\n2. @deva[जन] + @deva[जल्पः] → @deva[जन्यः]\n3. @deva[हल] + @deva[कर्षः] → @deva[हल्यः]\n\n@deva[तदन्तविधि]: @deva[द्विहल्यः], @deva[त्रिहल्यः]."
            }
        },
        "44098": {
            "en": {
                "simple": "The affix @deva[यत्] comes after a word in the locative case in the sense of 'excellent/skilled in that'.\n\nExamples:\n- @deva[सामसु साधुः] 'excellent in Sāma-Veda' → @deva[सामन्यः] 'conversant with Sāma-Veda' (by @ref[6.4.168])\n- @deva[वेमनि साधुः] → @deva[वेमन्यः]\n- @deva[कर्मणि साधुः] → @deva[कर्मण्यः] 'skilled in work'\n- @deva[शरणि साधुः] → @deva[शरण्यः]\n\nThe word @deva[साधु] here means @deva[प्रवीण] (expert) or @deva[योग्य] (fit), not @deva[उपकारक] (benefactor). For the sense 'good/beneficial', see @ref[5.1.5] @deva[तस्मै हितम्].",
                "standard": "After a @deva[सप्तम्यन्त] word, @deva[यत्] applies in sense @deva[साधुः] (excellent in).\n\nExamples: @deva[सामन्यः] (@ref[6.4.168]) 'skilled in Sāma', @deva[वेमन्यः], @deva[कर्मण्यः], @deva[शरण्यः].\n\n@deva[साधु] = @deva[प्रवीण]/[@deva[योग्य] (expert/fit), not @deva[उपकारक]. For 'beneficial', see @ref[5.1.5] @deva[तस्मै हितम्].",
                "advanced": "After @deva[सप्तम्यन्त], @deva[यत्] in sense @deva[साधुः] (expert in).\n\nExamples: @deva[सामन्यः] (@ref[6.4.168]), @deva[वेमन्यः], @deva[कर्मण्यः], @deva[शरण्यः].\n\n@deva[साधु] = @deva[प्रवीण]/[@deva[योग्य], not @deva[उपकारक]. For @deva[हित] sense, use @ref[5.1.5]."
            }
        },
        "44099": {
            "en": {
                "simple": "The affix @deva[खञ्] (instead of @deva[यत्]) comes after the words in the @deva[प्रतिजनादि] list in the sense of 'excellent in that'.\n\nExamples:\n- @deva[प्रतिजने साधुः] → @deva[प्रातिजनीनः] 'suitable against an adversary' or 'excellent for every person' (by @ref[7.1.2])\n- @deva[एवं युगे साधुः] → @deva[एवंयुगीनः]\n- @deva[संयुगे साधुः] → @deva[सांयुगीनः]\n\nThe @deva[प्रतिजनादि] list includes: @deva[प्रतिजन], @deva[इदंयुग], @deva[संयुग], @deva[समयुग], @deva[परयुग], @deva[परकुल], @deva[परस्यकुल], @deva[अमुष्यकुल], @deva[सर्वजन], @deva[विश्वजन], @deva[महाजन], @deva[पञ्चजन].",
                "standard": "After @deva[प्रतिजनादि], @deva[खञ्] (not @deva[यत्]) applies in sense @deva[साधुः].\n\nExamples: @deva[प्रातिजनीनः] (@ref[7.1.2]) 'suitable against adversary', @deva[एवंयुगीनः], @deva[सांयुगीनः].\n\n@deva[प्रतिजनादि] gaṇa (12): @deva[प्रतिजन], @deva[इदंयुग], @deva[संयुग], @deva[समयुग], @deva[परयुग], @deva[परकुल], @deva[परस्यकुल], @deva[अमुष्यकुल], @deva[सर्वजन], @deva[विश्वजन], @deva[महाजन], @deva[पञ्चजन].",
                "advanced": "@deva[प्रतिजनादि] takes @deva[खञ्] in sense @deva[साधुः].\n\nExamples: @deva[प्रातिजनीनः], @deva[एवंयुगीनः], @deva[सांयुगीनः].\n\n@deva[प्रतिजनादि] gaṇa (12): @deva[प्रतिजन], @deva[इदंयुग], @deva[संयुग], @deva[समयुग], @deva[परयुग], @deva[परकुल], @deva[परस्यकुल], @deva[अमुष्यकुल], @deva[सर्वजन], @deva[विश्वजन], @deva[महाजन], @deva[पञ्चजन]."
            }
        },
        "44100": {
            "en": {
                "simple": "The affix @deva[ण] (instead of @deva[यत्]) comes after the word @deva[भक्त] (food) in the sense of 'excellent in that'.\n\nExamples:\n- @deva[भक्ते साधुः] 'excellent for food' → @deva[भाक्तः शालिः] 'rice (excellent for eating)'\n- @deva[भाक्ताः तण्डुलाः] 'rice grains suitable for food'",
                "standard": "After @deva[भक्त], @deva[ण] (not @deva[यत्]) applies in sense @deva[साधुः].\n\nExamples: @deva[भाक्तः शालिः] 'food-suitable rice', @deva[भाक्ताः तण्डुलाः].",
                "advanced": "@deva[भक्त] takes @deva[ण] in sense @deva[साधुः].\n\nExamples: @deva[भाक्तः शालिः], @deva[भाक्ताः तण्डुलाः]."
            }
        },
        "44101": {
            "en": {
                "simple": "The affix @deva[ण्य] (instead of @deva[यत्]) comes after the word @deva[परिषद्] (assembly/council) in the sense of 'excellent in that'.\n\nExample: @deva[परिषदि साधुः] → @deva[पारिषद्यः] 'one versed in council affairs'\n\nThe affix @deva[ण] is also used: @deva[परिषदि साधुः] → @deva[पारिषदः] 'a minister, one skilled in assemblies'",
                "standard": "After @deva[परिषद्], @deva[ण्य] (not @deva[यत्]) applies in sense @deva[साधुः]. Also @deva[ण].\n\nExamples:\n- @deva[ण्य]: @deva[पारिषद्यः]\n- @deva[ण]: @deva[पारिषदः] 'minister'",
                "advanced": "@deva[परिषद्] takes @deva[ण्य] (also @deva[ण]) in sense @deva[साधुः].\n\nExamples: @deva[पारिषद्यः], @deva[पारिषदः]."
            }
        },
        "44102": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the words in the @deva[कथादि] list in the sense of 'excellent in that'.\n\nExample: @deva[कथायां साधुः] 'excellent in stories' → @deva[काथिकः] 'a storyteller' (@deva[कथा] + @deva[ठक्] → @deva[कथ्] + @deva[ठक्] by @ref[6.4.148] → @deva[काथ्] + @deva[इक्] by @ref[7.2.116])\n\nAlso @deva[वैकथिकः], etc.\n\nThe @deva[कथादि] list includes: @deva[कथा], @deva[विकथा], @deva[विश्वकथा], @deva[संकथा], @deva[वितण्डा], @deva[कुष्ठविद्], @deva[जनवाद], @deva[जनेवाद], @deva[जानोवाद], @deva[वृत्ति], @deva[संग्रह], @deva[गुण], @deva[गण], @deva[आयुर्वेद].",
                "standard": "After @deva[कथादि], @deva[ठक्] applies in sense @deva[साधुः].\n\nExample: @deva[कथायां साधुः] → @deva[काथिकः] (@deva[कथा] + @deva[ठक्] → @deva[कथ्] by @ref[6.4.148] → @deva[काथ्] + @deva[इक्] by @ref[7.2.116]) 'storyteller'.\n\n@deva[कथादि] gaṇa (14): @deva[कथा], @deva[विकथा], @deva[विश्वकथा], @deva[संकथा], @deva[वितण्डा], @deva[कुष्ठविद्], @deva[जनवाद], @deva[जनेवाद], @deva[जानोवाद], @deva[वृत्ति], @deva[संग्रह] (@deva[सद्ग्रह]), @deva[गुण], @deva[गण], @deva[आयुर्वेद].",
                "advanced": "@deva[कथादि] takes @deva[ठक्] in sense @deva[साधुः].\n\nDerivation: @deva[कथा] + @deva[ठक्] → @deva[कथ्] (@ref[6.4.148]) + @deva[ठक्] → @deva[काथिकः] (@ref[7.2.116]).\n\n@deva[कथादि] gaṇa (14): @deva[कथा], @deva[विकथा], @deva[विश्वकथा], @deva[संकथा], @deva[वितण्डा], @deva[कुष्ठविद्], @deva[जनवाद], @deva[जनेवाद], @deva[जानोवाद], @deva[वृत्ति], @deva[संग्रह], @deva[गुण], @deva[गण], @deva[आयुर्वेद]."
            }
        },
        "44103": {
            "en": {
                "simple": "The affix @deva[ठञ्] (instead of @deva[यत्]) comes after the words in the @deva[गुडादि] list in the sense of 'excellent in that'.\n\nExamples:\n- @deva[गुडे साधुः] 'excellent for sugar' → @deva[गौडिकः] 'sugarcane' (excellent for making sugar)\n- @deva[कुल्माषे साधुः] → @deva[कौलमाषिकः] 'a kind of pulse' (excellent for making gruel)\n- @deva[सक्तुषु साधुः] → @deva[साक्तुकः] 'barley' (suitable for making @deva[सक्तु])\n\nThe @deva[गुडादि] list includes: @deva[गुड], @deva[कुल्माष], @deva[सक्तु], @deva[अपूप], @deva[मांसौदन], @deva[इक्षु], @deva[वेणु], @deva[संग्राम], @deva[संघात], @deva[संक्राम], @deva[संवाह], @deva[प्रवास], @deva[निवास], @deva[उपवास].",
                "standard": "After @deva[गुडादि], @deva[ठञ्] (not @deva[यत्]) applies in sense @deva[साधुः].\n\nExamples: @deva[गौडिकः] 'sugarcane', @deva[कौलमाषिकः] 'pulse for gruel', @deva[साक्तुकः] 'barley for @deva[सक्तु]'.\n\n@deva[गुडादि] gaṇa (14): @deva[गुड], @deva[कुल्माष], @deva[सक्तु], @deva[अपूप], @deva[मांसौदन], @deva[इक्षु], @deva[वेणु], @deva[संग्राम], @deva[संघात], @deva[संक्राम], @deva[संवाह], @deva[प्रवास], @deva[निवास], @deva[उपवास].",
                "advanced": "@deva[गुडादि] takes @deva[ठञ्] in sense @deva[साधुः].\n\nExamples: @deva[गौडिकः], @deva[कौलमाषिकः], @deva[साक्तुकः].\n\n@deva[गुडादि] gaṇa (14): @deva[गुड], @deva[कुल्माष], @deva[सक्तु], @deva[अपूप], @deva[मांसौदन], @deva[इक्षु], @deva[वेणु], @deva[संग्राम], @deva[संघात], @deva[संक्राम], @deva[संवाह], @deva[प्रवास], @deva[निवास], @deva[उपवास]."
            }
        },
        "44104": {
            "en": {
                "simple": "The affix @deva[ठञ्] (instead of @deva[यत्]) comes after the words @deva[पथिन्] (road), @deva[अतिथि] (guest), @deva[वसति] (dwelling), and @deva[स्वपति] (sleeping) in the sense of 'excellent in that'.\n\nExamples:\n- @deva[पथि साधुः] → @deva[पाथेयम्] 'provision for journey' (by @ref[7.1.2])\n- @deva[अतिथौ साधुः] → @deva[आतिथेयम्] 'hospitality'\n- @deva[वसतौ साधुः] → @deva[वासतेयम्] 'habitable' (as in @deva[वासतेयी रात्रिः] 'a night fit for staying')\n- @deva[स्वपतौ साधुः] → @deva[स्वापतेयम्] 'wealth, property'",
                "standard": "After @deva[पथिन्], @deva[अतिथि], @deva[वसति], @deva[स्वपति], @deva[ठञ्] (not @deva[यत्]) applies in sense @deva[साधुः].\n\nExamples:\n- @deva[पाथेयम्] (@ref[7.1.2]) 'journey provisions'\n- @deva[आतिथेयम्] 'hospitality'\n- @deva[वासतेयम्] 'habitable' (@deva[वासतेयी रात्रिः])\n- @deva[स्वापतेयम्] 'wealth'",
                "advanced": "@deva[पथिन्], @deva[अतिथि], @deva[वसति], @deva[स्वपति] take @deva[ठञ्] in sense @deva[साधुः].\n\nExamples: @deva[पाथेयम्], @deva[आतिथेयम्], @deva[वासतेयम्] (@deva[वासतेयी रात्रिः]), @deva[स्वापतेयम्]."
            }
        },
        "44105": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[सभा] (assembly/society) in the sense of 'excellent in that'. The difference from the general @deva[यत्] is in accent (see @ref[3.1.3] and @ref[6.1.185]).\n\nExample: @deva[सभायां साधुः] 'excellent in society' → @deva[सभ्यः] 'refined, civilized' (fit for society)",
                "standard": "After @deva[सभा], @deva[यत्] applies in sense @deva[साधुः]. The specification is for accent (@ref[3.1.3], @ref[6.1.185]).\n\nExample: @deva[सभायां साधुः] → @deva[सभ्यः] 'refined' (fit for society).",
                "advanced": "@deva[सभा] takes @deva[यत्] in sense @deva[साधुः]. Specification for accent: @ref[3.1.3], @ref[6.1.185].\n\nExample: @deva[सभ्यः]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.4.91-105)")

if __name__ == "__main__":
    main()
