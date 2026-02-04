#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 4.4.46-60."""

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
        "44046": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the words @deva[ललाट] (forehead) and @deva[कुक्कुटी] (hen) in the accusative case, in the sense of 'one who sees that'. The resulting word is used as a name.\n\nExamples:\n- @deva[ललाटं पश्यति] 'looks at foreheads' → @deva[लालाटिकः] 'a non-attentive servant' (one who always looks at the master's forehead from a distance, keeping aloof rather than approaching to work)\n- @deva[कुक्कुटीं पश्यति] → @deva[कौक्कुटिकः] 'a religious mendicant, a @deva[भिक्षु]'\n\n@deva[कुक्कुटी] here refers to the short distance a hen can fly. The mendicant walks looking down at this small space of ground, hence the name. It also means 'a hypocrite with downcast eyes'.",
                "standard": "After @deva[ललाट] and @deva[कुक्कुटी] (in @deva[द्वितीया]), @deva[ठक्] applies in sense @deva[पश्यति] (sees). The result is a @deva[संज्ञा] (name).\n\nExamples:\n- @deva[ललाटं पश्यति] → @deva[लालाटिकः] 'inattentive servant' (watches master's forehead from afar, avoids approaching)\n- @deva[कौक्कुटिकः] 'mendicant' (@deva[कुक्कुटी] = the short flying distance of a hen; hence one who walks looking at small ground space)\n\n@deva[कौक्कुटिकः] also means 'hypocrite with downcast eyes'.",
                "advanced": "@deva[ललाट] and @deva[कुक्कुटी] (in @deva[द्वितीया]) take @deva[ठक्] in sense @deva[पश्यति]. Result is @deva[संज्ञा].\n\nExamples: @deva[लालाटिकः] (inattentive servant), @deva[कौक्कुटिकः] (@deva[भिक्षु] who walks looking at @deva[कुक्कुटीगति]-distance ground; also, hypocrite)."
            }
        },
        "44047": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the genitive case (sixth case, @deva[षष्ठी]) in the sense of 'the customary practice/usage of that'.\n\nThe word @deva[धर्म्य] means 'customary, relating to established practice'.\n\nExamples:\n- @deva[शुल्कशालायाः धर्म्यम्] 'the usage of a custom-house' → @deva[शौल्कशालिकम्] 'custom-house regulations'\n- @deva[आकरस्य धर्म्यम्] → @deva[आकरिकम्] 'mining regulations'\n- @deva[आपणस्य धर्म्यम्] → @deva[आपणिकम्] 'marketplace practices'\n- @deva[गुल्मस्य धर्म्यम्] → @deva[गौल्मिकम्] 'outpost regulations'",
                "standard": "After a @deva[षष्ठ्यन्त] word, @deva[ठक्] applies in sense @deva[धर्म्यम्] (its customary practice).\n\n@deva[धर्म्य] = customary, relating to established practice.\n\nExamples: @deva[शौल्कशालिकम्] 'custom-house laws', @deva[आकरिकम्], @deva[आपणिकम्], @deva[गौल्मिकम्].",
                "advanced": "After @deva[षष्ठ्यन्त], @deva[ठक्] in sense @deva[धर्म्यम्] (its usage/custom).\n\nExamples: @deva[शौल्कशालिकम्], @deva[आकरिकम्], @deva[आपणिकम्], @deva[गौल्मिकम्]."
            }
        },
        "44048": {
            "en": {
                "simple": "The affix @deva[अण्] (instead of @deva[ठक्]) comes after the words in the @deva[महिष्यादि] list in the sense of 'its customary practice'.\n\nExamples:\n- @deva[महिष्याः धर्म्यम्] 'the usage of a queen' → @deva[माहिषम्] 'queen's customs'\n- @deva[प्रजापतेः धर्म्यम्] → @deva[प्राजापतम्]\n\nThe @deva[महिष्यादि] list includes: @deva[महिषी], @deva[प्रजापति], @deva[प्रजावती], @deva[प्रलेपिका], @deva[विलेपिका], @deva[अनुलेपिका], @deva[पुरोहित], @deva[वणिपाली], @deva[अनुचारक], @deva[होतृ], @deva[यजमान].",
                "standard": "After @deva[महिष्यादि], @deva[अण्] (not @deva[ठक्]) applies in sense @deva[धर्म्यम्].\n\nExamples: @deva[माहिषम्] 'queen's customs', @deva[प्राजापतम्].\n\n@deva[महिष्यादि] gaṇa (11): @deva[महिषी], @deva[प्रजापति], @deva[प्रजावती], @deva[प्रलेपिका], @deva[विलेपिका], @deva[अनुलेपिका], @deva[पुरोहित], @deva[वणिपाली], @deva[अनुचारक] (@deva[अनुवारक]), @deva[होतृ], @deva[यजमान].",
                "advanced": "@deva[महिष्यादि] takes @deva[अण्] (not @deva[ठक्]) in sense @deva[धर्म्यम्].\n\nExamples: @deva[माहिषम्], @deva[प्राजापतम्].\n\n@deva[महिष्यादि] gaṇa (11): @deva[महिषी], @deva[प्रजापति], @deva[प्रजावती], @deva[प्रलेपिका], @deva[विलेपिका], @deva[अनुलेपिका], @deva[पुरोहित], @deva[वणिपाली], @deva[अनुचारक], @deva[होतृ], @deva[यजमान]."
            }
        },
        "44049": {
            "en": {
                "simple": "The affix @deva[अञ्] (instead of @deva[ठक्]) comes after @deva[प्रातिपदिक]s (nominal stems) ending in @deva[ऋ], in the sense of 'its customary practice or office'.\n\nExamples:\n- @deva[पोतुः धर्म्यम्] 'the office of a @deva[पोतृ]' → @deva[पौत्रम्]\n- @deva[उद्गातुः धर्म्यम्] 'the office of an @deva[उद्गातृ]' → @deva[औद्गात्रम्]\n- @deva[होतुः धर्म्यम्] 'the office of a @deva[होतृ]' → @deva[हौत्रम्]\n\nVārttikas:\n- After @deva[नर], @deva[अञ्] applies: @deva[नरस्य धर्म्या] → @deva[नारी] 'woman'\n- After @deva[विशसितृ], with @deva[इट्]-elision: @deva[वैशस्त्रम्]\n- After @deva[विभाजयितृ], with @deva[णि]-elision: @deva[वैभाजित्रम्]",
                "standard": "After @deva[ऋकारान्त प्रातिपदिक]s, @deva[अञ्] (not @deva[ठक्]) applies in sense @deva[धर्म्यम्].\n\nExamples: @deva[पौत्रम्] (@deva[पोतृ]-office), @deva[औद्गात्रम्], @deva[हौत्रम्].\n\nNote: @deva[होतृ] in @ref[4.4.48] means @deva[ऋत्विज्]; here it means @deva[आह्वातृ] (invoker).\n\n@note[type=vārtika]: @deva[नरादपि] — @deva[नारी] 'woman'.\n@note[type=vārtika]: @deva[विशसितुरिटो लोपश्च] — @deva[वैशस्त्रम्].\n@note[type=vārtika]: @deva[विभाजयितुर्ण्यलोपश्च] — @deva[वैभाजित्रम्].",
                "advanced": "@deva[ऋकारान्त प्रातिपदिक] takes @deva[अञ्] in sense @deva[धर्म्यम्].\n\nExamples: @deva[पौत्रम्], @deva[औद्गात्रम्], @deva[हौत्रम्].\n\n@deva[पद्मञ्जरी] places @deva[हौत्रम्] here (@deva[होतृ] = @deva[आह्वातृ]), distinct from @ref[4.4.48] (@deva[होतृ] = @deva[ऋत्विज्]).\n\n@note[type=vārtika]: @deva[नरादपि] — @deva[नारी].\n@note[type=vārtika]: @deva[विशसितुरिटो लोपश्च] — @deva[वैशस्त्रम्] (@deva[इट्]-elision).\n@note[type=vārtika]: @deva[विभाजयितुर्ण्यलोपश्च] — @deva[वैभाजित्रम्] (@deva[णि]-elision)."
            }
        },
        "44050": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the genitive case in the sense of 'the tax/toll of that'.\n\nThe word @deva[अवक्रय] means 'government tax, toll, price, rent'—from the root @deva[अव-क्री] 'to purchase'.\n\nExamples:\n- @deva[शुल्कशालायाः अवक्रयः] 'the tax of a custom-house' → @deva[शौल्कशालिकः]\n- @deva[आपणस्य अवक्रयः] → @deva[आपणिकः] 'marketplace tax'\n- @deva[गुल्मस्य अवक्रयः] → @deva[गौल्मिकः]\n- @deva[आकरस्य अवक्रयः] → @deva[आकरिकः] 'mining tax'\n\nDistinction: @deva[धर्म्य] (@ref[4.4.47]) is a legal due according to @deva[धर्म]; @deva[अवक्रय] can be a tax exacted by oppression, even transgressing @deva[धर्म].",
                "standard": "After a @deva[षष्ठ्यन्त] word, @deva[ठक्] applies in sense @deva[अवक्रयः] (its tax/toll).\n\n@deva[अवक्रय] = government tax, toll, rent (from @deva[अव-क्री]).\n\nExamples: @deva[शौल्कशालिकः], @deva[आपणिकः], @deva[गौल्मिकः], @deva[आकरिकः].\n\nDistinction: @deva[धर्म्य] (@ref[4.4.47]) = lawful due; @deva[अवक्रय] = tax (may be oppressive, contrary to @deva[धर्म]).",
                "advanced": "After @deva[षष्ठ्यन्त], @deva[ठक्] in sense @deva[अवक्रयः] (tax).\n\nExamples: @deva[शौल्कशालिकः], @deva[आपणिकः], @deva[गौल्मिकः], @deva[आकरिकः].\n\n@deva[धर्म्य] (@ref[4.4.47]) vs @deva[अवक्रय]: @deva[धर्म्य] = @deva[धर्मानुकूल विधि]; @deva[अवक्रय] = @deva[कर] (may be @deva[अधार्मिक])."
            }
        },
        "44051": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word denoting a thing to be sold, in the nominative case (first case, @deva[प्रथमा]), in the sense of 'one whose saleable commodity is that'.\n\nExamples:\n- @deva[अपूपाः पण्यम् अस्य] 'cakes are his merchandise' → @deva[आपूपिकः] 'a cake-seller'\n- @deva[शष्कुलाः पण्यम् अस्य] → @deva[शाष्कुलिकः] 'a pastry-seller'\n- @deva[मोदकाः पण्यम् अस्य] → @deva[मौदकिकः] 'a sweetmeat-seller'",
                "standard": "After a @deva[पण्यवाचिन्] (word denoting merchandise) in @deva[प्रथमा], @deva[ठक्] applies in sense @deva[पण्यम् अस्य] (this is his merchandise).\n\nExamples: @deva[आपूपिकः] 'cake-vendor', @deva[शाष्कुलिकः], @deva[मौदकिकः].",
                "advanced": "After @deva[पण्यवाचिन्] (in @deva[प्रथमा]), @deva[ठक्] in sense @deva[पण्यम् अस्य].\n\nExamples: @deva[आपूपिकः], @deva[शाष्कुलिकः], @deva[मौदकिकः]."
            }
        },
        "44052": {
            "en": {
                "simple": "The affix @deva[ठञ्] (instead of @deva[ठक्]) comes after the word @deva[लवण] (salt) in the sense of 'one whose saleable commodity is that'.\n\nThe difference between @deva[ठक्] and @deva[ठञ्] is in accent.\n\nExample: @deva[लवणं पण्यम् अस्य] → @deva[लावणिकः] 'a salt-vendor'",
                "standard": "After @deva[लवण], @deva[ठञ्] (not @deva[ठक्]) applies in sense @deva[पण्यम् अस्य].\n\nExample: @deva[लावणिकः] 'salt-vendor'.\n\n@deva[ठञ्] vs @deva[ठक्]: accent difference.",
                "advanced": "@deva[लवण] takes @deva[ठञ्] (not @deva[ठक्]) in sense @deva[पण्यम् अस्य].\n\nExample: @deva[लावणिकः].\n\n@deva[ठञ्] vs @deva[ठक्]: @deva[ञित्] vs @deva[कित्] accent."
            }
        },
        "44053": {
            "en": {
                "simple": "The affix @deva[ष्ठन्] (instead of @deva[ठक्]) comes after the words in the @deva[किशरादि] list in the sense of 'one whose saleable commodity is that'.\n\nThe @deva[किशरादि] words all denote perfumes.\n\nExamples:\n- @deva[किशराः पण्यम् अस्य] → @deva[किशरिकः] 'perfume-seller', f. @deva[किशरिकी]\n- @deva[नरदाः पण्यम् अस्य] → @deva[नरदिकः], f. @deva[नरदिकी]\n\nThe @deva[किशरादि] list includes: @deva[किशर], @deva[नरद], @deva[नलद], @deva[स्थागल], @deva[तगर], @deva[गुग्गुलु], @deva[उशीर], @deva[हरिद्रा], @deva[हरिद्रु], @deva[पर्णी], @deva[सुमङ्गल], @deva[हरिद्रायणी].",
                "standard": "After @deva[किशरादि], @deva[ष्ठन्] (not @deva[ठक्]) applies in sense @deva[पण्यम् अस्य].\n\n@deva[किशरादि] words denote perfumes.\n\nExamples: @deva[किशरिकः] f. @deva[किशरिकी] (@ref[4.1.41]), @deva[नरदिकः] f. @deva[नरदिकी].\n\n@deva[किशरादि] gaṇa (12): @deva[किशर], @deva[नरद], @deva[नलद], @deva[स्थागल], @deva[तगर], @deva[गुग्गुलु], @deva[उशीर], @deva[हरिद्रा], @deva[हरिद्रु], @deva[पर्णी], @deva[सुमङ्गल], @deva[हरिद्रायणी].",
                "advanced": "@deva[किशरादि] takes @deva[ष्ठन्] in sense @deva[पण्यम् अस्य].\n\nExamples: @deva[किशरिकः] f. @deva[किशरिकी], @deva[नरदिकः] f. @deva[नरदिकी].\n\n@deva[ष्ठन्]: @deva[ष्] is @deva[इत्] for @deva[ङीष्] (@ref[4.1.41]).\n\n@deva[किशरादि] gaṇa (12): @deva[किशर] (@deva[किसर]), @deva[नरद], @deva[नलद], @deva[स्थागल], @deva[तगर], @deva[गुग्गुलु], @deva[उशीर], @deva[हरिद्रा], @deva[हरिद्रु], @deva[पर्णी], @deva[सुमङ्गल], @deva[हरिद्रायणी]."
            }
        },
        "44054": {
            "en": {
                "simple": "The affix @deva[ष्ठन्] optionally comes after the word @deva[शलालु] (a type of perfume) in the sense of 'one whose saleable commodity is that'. When @deva[ष्ठन्] is not used, the regular @deva[ठक्] applies.\n\nExamples:\n- With @deva[ष्ठन्]: @deva[शलालु पण्यम् अस्य] → @deva[शलालुकः], f. @deva[शलालुकी]\n- With @deva[ठक्]: @deva[शालालुकः], f. @deva[शालालुकी]",
                "standard": "After @deva[शलालु], @deva[ष्ठन्] optionally applies in sense @deva[पण्यम् अस्य]. Otherwise @deva[ठक्].\n\n@deva[शलालु] = a type of perfume.\n\nWith @deva[ष्ठन्]: @deva[शलालुकः] f. @deva[शलालुकी]\nWith @deva[ठक्]: @deva[शालालुकः] f. @deva[शालालुकी]",
                "advanced": "@deva[शलालु] optionally takes @deva[ष्ठन्] (otherwise @deva[ठक्]) in sense @deva[पण्यम् अस्य].\n\n@deva[ष्ठन्]: @deva[शलालुकः] f. @deva[शलालुकी]\n@deva[ठक्]: @deva[शालालुकः] f. @deva[शालालुकी]"
            }
        },
        "44055": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word denoting an art or craft, in the nominative case, in the sense of 'one whose art is that'.\n\nExamples:\n- @deva[मृदङ्गवादनं शिल्पम् अस्य] 'playing the @deva[मृदङ्ग] drum is his art' → @deva[मार्दङ्गिकः] 'a drummer'\n- @deva[पणववादनं शिल्पम् अस्य] → @deva[पाणविकः] 'a tabor-player'\n- @deva[वीणावादनं शिल्पम् अस्य] → @deva[वैणिकः] 'a lute-player'",
                "standard": "After a @deva[शिल्पवाचिन्] (word denoting art/craft) in @deva[प्रथमा], @deva[ठक्] applies in sense @deva[शिल्पम् अस्य] (this is his art).\n\nExamples: @deva[मार्दङ्गिकः] 'drummer', @deva[पाणविकः], @deva[वैणिकः].",
                "advanced": "After @deva[शिल्पवाचिन्] (in @deva[प्रथमा]), @deva[ठक्] in sense @deva[शिल्पम् अस्य].\n\nExamples: @deva[मार्दङ्गिकः], @deva[पाणविकः], @deva[वैणिकः]."
            }
        },
        "44056": {
            "en": {
                "simple": "The affix @deva[अण्] optionally comes after the words @deva[मड्डुक] and @deva[झर्झर] (types of drums) in the sense of 'one whose art is that'. When @deva[अण्] is not used, the regular @deva[ठक्] applies.\n\nExamples:\n- With @deva[अण्]: @deva[मड्डुकवादनं शिल्पम् अस्य] → @deva[माड्डुकः]\n- With @deva[ठक्]: @deva[माड्डुकिकः]\n- With @deva[अण्]: @deva[झर्झरवादनं शिल्पम् अस्य] → @deva[झार्झरः]\n- With @deva[ठक्]: @deva[झार्झरिकः]",
                "standard": "After @deva[मड्डुक] and @deva[झर्झर], @deva[अण्] optionally applies in sense @deva[शिल्पम् अस्य]. Otherwise @deva[ठक्].\n\nExamples:\n- @deva[माड्डुकः] / @deva[माड्डुकिकः]\n- @deva[झार्झरः] / @deva[झार्झरिकः]",
                "advanced": "@deva[मड्डुक] and @deva[झर्झर] optionally take @deva[अण्] (otherwise @deva[ठक्]) in sense @deva[शिल्पम् अस्य].\n\nExamples: @deva[माड्डुकः]/@deva[माड्डुकिकः], @deva[झार्झरः]/@deva[झार्झरिकः]."
            }
        },
        "44057": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word denoting a weapon, in the nominative case, in the sense of 'one whose weapon is that'.\n\nExamples:\n- @deva[असिः प्रहरणम् अस्य] 'a sword is his weapon' → @deva[आसिकः] 'a swordsman'\n- @deva[प्रासः प्रहरणम् अस्य] → @deva[प्रासिकः] 'a spearman'\n- @deva[चक्रं प्रहरणम् अस्य] → @deva[चाक्रिकः] 'one who fights with a discus'\n- @deva[धनुः प्रहरणम् अस्य] → @deva[धानुष्कः] 'an archer'",
                "standard": "After a @deva[प्रहरणवाचिन्] (word denoting weapon) in @deva[प्रथमा], @deva[ठक्] applies in sense @deva[प्रहरणम् अस्य] (this is his weapon).\n\nExamples: @deva[आसिकः] 'swordsman', @deva[प्रासिकः], @deva[चाक्रिकः], @deva[धानुष्कः].",
                "advanced": "After @deva[प्रहरणवाचिन्] (in @deva[प्रथमा]), @deva[ठक्] in sense @deva[प्रहरणम् अस्य].\n\nExamples: @deva[आसिकः], @deva[प्रासिकः], @deva[चाक्रिकः], @deva[धानुष्कः]."
            }
        },
        "44058": {
            "en": {
                "simple": "Both affixes @deva[ठञ्] and @deva[ठक्] come after the word @deva[परश्वध] (axe) in the sense of 'one whose weapon is that'.\n\nThe difference between the two affixes is in accent.\n\nExample: @deva[परश्वधः प्रहरणम् अस्य] → @deva[पारश्वधिकः] 'one who fights with an axe'",
                "standard": "After @deva[परश्वध] (axe), both @deva[ठञ्] and @deva[ठक्] apply in sense @deva[प्रहरणम् अस्य].\n\nExample: @deva[पारश्वधिकः] (by either affix, different accent).\n\n@deva[ठञ्] vs @deva[ठक्]: accent difference.",
                "advanced": "@deva[परश्वध] takes @deva[ठञ्] or @deva[ठक्] in sense @deva[प्रहरणम् अस्य].\n\nExample: @deva[पारश्वधिकः].\n\n@deva[ठञ्] vs @deva[ठक्]: @deva[ञित्] vs @deva[कित्] accent."
            }
        },
        "44059": {
            "en": {
                "simple": "The affix @deva[ईकक्] (instead of @deva[ठक्]) comes after the words @deva[शक्ति] (spear/lance) and @deva[यष्टि] (staff) in the sense of 'one whose weapon is that'.\n\nExamples:\n- @deva[शक्तिः प्रहरणम् अस्य] → @deva[शाक्तीकः] 'a lanceman'\n- @deva[यष्टिः प्रहरणम् अस्य] → @deva[याष्टीकः] 'a staff-wielder'",
                "standard": "After @deva[शक्ति] and @deva[यष्टि], @deva[ईकक्] (not @deva[ठक्]) applies in sense @deva[प्रहरणम् अस्य].\n\nExamples: @deva[शाक्तीकः] 'lanceman', @deva[याष्टीकः].",
                "advanced": "@deva[शक्ति] and @deva[यष्टि] take @deva[ईकक्] (not @deva[ठक्]) in sense @deva[प्रहरणम् अस्य].\n\nExamples: @deva[शाक्तीकः], @deva[याष्टीकः].\n\n@deva[ईकक्] = @deva[ईक] with @deva[वृद्धि] by @ref[7.2.117]."
            }
        },
        "44060": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the words @deva[अस्ति] (it exists), @deva[नास्ति] (it does not exist), and @deva[दिष्ट] (fate) in the sense of 'one whose belief is that'.\n\nExamples:\n- @deva[अस्ति इति मतिः अस्य] 'his belief is that it exists' → @deva[आस्तिकः] 'one who believes in a hereafter, a believer'\n- @deva[नास्ति इति मतिः अस्य] 'his belief is that it doesn't exist' → @deva[नास्तिकः] 'an atheist, one who denies the hereafter'\n- @deva[दिष्टं मतिः अस्य] 'his belief is in fate' → @deva[दैष्टिकः] 'a fatalist'\n\n@deva[दिष्ट] = @deva[दैव] (fate). @deva[दैष्टिकः] can also mean 'a positivist'—one who believes only in what is demonstrated.",
                "standard": "After @deva[अस्ति], @deva[नास्ति], @deva[दिष्ट], @deva[ठक्] applies in sense @deva[मतिः अस्य] (this is his belief).\n\nExamples:\n- @deva[आस्तिकः] 'believer' (@deva[परलोकोऽस्ति इति यस्य मतिः])\n- @deva[नास्तिकः] 'atheist' (denies hereafter)\n- @deva[दैष्टिकः] 'fatalist' (@deva[दिष्ट] = @deva[दैव])\n\nThe rule applies to specific beliefs (about @deva[परलोक], @deva[दैव]), not general opinions.",
                "advanced": "@deva[अस्ति], @deva[नास्ति], @deva[दिष्ट] take @deva[ठक्] in sense @deva[मतिः अस्य].\n\nExamples:\n- @deva[आस्तिकः]: @deva[परलोकोऽस्ति इति यस्य मतिः]\n- @deva[नास्तिकः]: denies @deva[परलोक]\n- @deva[दैष्टिकः]: @deva[दिष्टं मतिः] (@deva[दिष्ट] = @deva[दैव]); also 'positivist' (believes only demonstrated truths)\n\nThe sense is restricted to @deva[विशिष्टमति] (specific belief), not general @deva[मति]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.4.46-60)")

if __name__ == "__main__":
    main()
