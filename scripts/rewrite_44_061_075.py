#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 4.4.61-75."""

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
        "44061": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the nominative case in the sense of 'one whose habit is that'.\n\nExamples:\n- @deva[अपूपभक्षणं शीलम् अस्य] 'eating cakes is his habit' → @deva[आपूपिकः] 'one who habitually eats cakes'\n- @deva[शष्कुलीभक्षणं शीलम् अस्य] → @deva[शाष्कुलिकः]\n- @deva[मोदकभक्षणं शीलम् अस्य] → @deva[मौदकिकः]\n\nThe act of eating and the habit of doing so are both understood in the meaning of the affix.",
                "standard": "After a word (in @deva[प्रथमा]) denoting an action, @deva[ठक्] applies in sense @deva[शीलम् अस्य] (this is his habit).\n\nExamples: @deva[आपूपिकः] 'habitual cake-eater', @deva[शाष्कुलिकः], @deva[मौदकिकः].\n\nBoth the act (@deva[भक्षण]) and its habitual nature (@deva[शील]) are understood in the affix's meaning.",
                "advanced": "After @deva[प्रथमान्त], @deva[ठक्] in sense @deva[शीलम् अस्य].\n\nExamples: @deva[आपूपिकः], @deva[शाष्कुलिकः], @deva[मौदकिकः].\n\n@deva[भक्षण] and @deva[शील] are both understood in the @deva[प्रत्ययार्थ]."
            }
        },
        "44062": {
            "en": {
                "simple": "The affix @deva[ण] (instead of @deva[ठक्]) comes after the words in the @deva[छत्रादि] list in the sense of 'one whose habit is that'.\n\nExamples:\n- @deva[छत्रं शीलम् अस्य] → @deva[छात्रः] 'a pupil' (one whose habit is to cover—@deva[छद्]—the faults of his teacher)\n\nAccording to Patañjali: A teacher is like an umbrella (@deva[छत्र])—he covers/protects the pupil. Or: the pupil should maintain his teacher like an umbrella.\n\nNote: @deva[स्था] in the list must be prefixed: @deva[आस्था], @deva[संस्था], @deva[अवस्था], etc.\n\nThe @deva[छत्रादि] list includes: @deva[छत्र], @deva[शिक्षा], @deva[प्ररोह], @deva[स्था], @deva[बुभुक्षा], @deva[चुरा], @deva[तितिक्षा], @deva[उपस्थान], @deva[कृषि], @deva[कर्मन्], @deva[विश्वधा], @deva[तपस्], @deva[सत्य], @deva[अनृत], @deva[विशिखा], @deva[विशिका], @deva[भक्षा], @deva[उदस्थान], @deva[पुरोडा], @deva[विक्षा], @deva[चुक्षा], @deva[मन्द्र].",
                "standard": "After @deva[छत्रादि], @deva[ण] (not @deva[ठक्]) applies in sense @deva[शीलम् अस्य].\n\nExample: @deva[छात्रः] 'pupil' (@deva[छत्र] + @deva[ण], lit. 'whose habit is @deva[छदन]—covering the teacher's faults').\n\nPatañjali: @deva[गुरुश्छत्रवद् गुरुणा शिष्यश्छत्रवत् छाद्यः] 'teacher covers pupil like umbrella'; or @deva[शिष्येण च गुरुश्छत्रवत् परिपाल्यः] 'pupil protects teacher like umbrella'.\n\n@deva[स्था] requires @deva[उपसर्ग]: @deva[आस्था], @deva[संस्था], @deva[अवस्था].\n\n@deva[छत्रादि] gaṇa (22): @deva[छत्र], @deva[शिक्षा], @deva[प्ररोह], @deva[स्था], @deva[बुभुक्षा], @deva[चुरा], @deva[तितिक्षा], @deva[उपस्थान], @deva[कृषि], @deva[कर्मन्], @deva[विश्वधा], @deva[तपस्], @deva[सत्य], @deva[अनृत], @deva[विशिखा], @deva[विशिका] (@deva[शिबिका]), @deva[भक्षा], @deva[उदस्थान], @deva[पुरोडा], @deva[विक्षा], @deva[चुक्षा], @deva[मन्द्र].",
                "advanced": "@deva[छत्रादि] takes @deva[ण] in sense @deva[शीलम् अस्य].\n\nExample: @deva[छात्रः] (@deva[छद्] → @deva[छत्र] + @deva[ण]).\n\nPatañjali on @deva[छात्र]: @deva[गुरुश्छत्रवद्...छाद्यः] or @deva[शिष्येण...परिपाल्यः].\n\n@deva[स्था] requires @deva[उपसर्ग].\n\n@deva[छत्रादि] gaṇa (22): @deva[छत्र], @deva[शिक्षा], @deva[प्ररोह] (@deva[पुरोह]), @deva[स्था], @deva[बुभुक्षा], @deva[चुरा], @deva[तितिक्षा], @deva[उपस्थान], @deva[कृषि] (@deva[ऋषि]), @deva[कर्मन्], @deva[विश्वधा], @deva[तपस्], @deva[सत्य], @deva[अनृत], @deva[विशिखा], @deva[विशिका] (@deva[शिबिका]), @deva[भक्षा], @deva[उदस्थान], @deva[पुरोडा], @deva[विक्षा], @deva[चुक्षा], @deva[मन्द्र]."
            }
        },
        "44063": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the nominative case in the sense of 'one whose act (occurring during study/recitation) is that'.\n\nThis refers to errors made during recitation or examination.\n\nExamples:\n- @deva[एकम् अन्यत् अध्ययने कर्म वृत्तम् अस्य] 'one error occurred in his recitation' → @deva[ऐकान्यिकः] 'one who made one mistake'\n- @deva[द्वयोः अन्ययोः...] → @deva[द्वैयन्यिकः] 'one who made two mistakes'\n- @deva[त्रयाणाम् अन्येषाम्...] → @deva[त्रैयन्यिकः] 'one who made three mistakes'\n\n@deva[अन्यत्] here means 'error'—especially accent errors (pronouncing @deva[उदात्त] as @deva[अनुदात्त] or vice versa).",
                "standard": "After a word denoting @deva[अध्ययने कर्मवृत्तम्] (act occurring in study) in @deva[प्रथमा], @deva[ठक्] applies in sense @deva[अस्य] (his).\n\nRefers to recitation errors.\n\nExamples: @deva[ऐकान्यिकः] (one error), @deva[द्वैयन्यिकः] (two errors), @deva[त्रैयन्यिकः] (three errors).\n\n@deva[अन्यत्] = error, especially @deva[स्वर]-errors (@deva[उदात्त] ↔ @deva[अनुदात्त] confusion).\n\nIn @deva[विग्रह], use full phrase @deva[अध्ययने कर्मवृत्तम्].",
                "advanced": "After @deva[अध्ययने कर्मवृत्तवाचक] (in @deva[प्रथमा]), @deva[ठक्] in sense @deva[अस्य].\n\nExamples: @deva[ऐकान्यिकः], @deva[द्वैयन्यिकः], @deva[त्रैयन्यिकः].\n\n@deva[अन्यत्] = @deva[स्खलन] (error), especially @deva[स्वरस्खलन] (@deva[उदात्त]/[@deva[अनुदात्त] confusion).\n\nIn @deva[विग्रह]: @deva[एकमन्यदध्ययने कर्मवृत्तमस्य]."
            }
        },
        "44064": {
            "en": {
                "simple": "The affix @deva[ठच्] (instead of @deva[ठक्]) comes after compounds whose prior member is polysyllabic, in the sense of 'one whose act (occurring in study) is that'.\n\nExamples:\n- @deva[द्वादश अन्यानि कर्माणि अध्ययने वृत्तानि अस्य] → @deva[द्वादशान्यिकः] 'one who made twelve mistakes'\n- @deva[त्रयोदशान्यिकः] 'one who made thirteen mistakes'\n- @deva[चतुर्दशान्यिकः] 'one who made fourteen mistakes'\n\n@deva[ठच्] differs from @deva[ठक्] in accent.",
                "standard": "After compounds with @deva[अनेकाच्] (polysyllabic) @deva[पूर्वपद], @deva[ठच्] (not @deva[ठक्]) applies in sense @deva[अध्ययने कर्मवृत्तम् अस्य].\n\nExamples: @deva[द्वादशान्यिकः] (12 errors), @deva[त्रयोदशान्यिकः], @deva[चतुर्दशान्यिकः].\n\n@deva[ठच्] vs @deva[ठक्]: accent difference.",
                "advanced": "After @deva[अनेकाच्पूर्वपद] compounds, @deva[ठच्] in sense @deva[अध्ययने कर्मवृत्तम् अस्य].\n\nExamples: @deva[द्वादशान्यिकः], @deva[त्रयोदशान्यिकः], @deva[चतुर्दशान्यिकः].\n\n@deva[ठच्] vs @deva[ठक्]: @deva[चित्] vs @deva[कित्] accent."
            }
        },
        "44065": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word denoting food, in the nominative case, in the sense of 'one for whom that is wholesome food'.\n\nExamples:\n- @deva[अपूपभक्षणं हितम् अस्मै] 'eating cakes is good for him' → @deva[आपूपिकः] 'one who benefits from eating cakes; one fond of cakes'\n- @deva[शष्कुली हिता अस्मै] → @deva[शाष्कुलिकः]\n- @deva[मोदकाः हिताः अस्मै] → @deva[मौदकिकः]\n\nNote: @deva[हित] governs the dative (@ref[2.3.13] @deva[वार्त्तिक]), so the analysis uses @deva[अस्मै] (dative), though the sūtra uses @deva[अस्य] (genitive).",
                "standard": "After a @deva[भक्षवाचक] (food-word) in @deva[प्रथमा], @deva[ठक्] applies in sense @deva[तदस्मै हितं भक्षाः] (this is wholesome food for him).\n\nExamples: @deva[आपूपिकः], @deva[शाष्कुलिकः], @deva[मौदकिकः].\n\n@deva[हित] governs @deva[चतुर्थी] (@ref[2.3.13] @deva[वार्त्तिक]). In @deva[विग्रह], use @deva[हितम्] or synonym plus eating verb.",
                "advanced": "After @deva[भक्षवाचक] (in @deva[प्रथमा]), @deva[ठक्] in sense @deva[हितं भक्षाः तदस्मै].\n\nExamples: @deva[आपूपिकः], @deva[शाष्कुलिकः], @deva[मौदकिकः].\n\n@deva[हित] governs @deva[चतुर्थी] (@ref[2.3.13] @deva[वार्त्तिक]). The sūtra @deva[तदस्य] should be read @deva[तदस्मै].\n\nBest reading: @ref[4.4.65] @deva[हितं भक्षाः तदस्मै]; @ref[4.4.66] @deva[दीयते नियुक्तम्]."
            }
        },
        "44066": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word denoting something to be given, in the nominative case, in the sense of 'one to whom that is rightfully given'.\n\nThe word @deva[नियुक्त] means 'appointed, rightful'—i.e., to be given as a fixed entitlement.\n\nExamples:\n- @deva[अग्रे भोजनम् अस्मै नियुक्तं दीयते] 'he is entitled to food first' → @deva[आग्रभोजनिकः] 'a Brāhmaṇa entitled to the foremost seat at dinner'\n- @deva[अपूपाः नियुक्तम् अस्मै दीयन्ते] → @deva[आपूपिकः] 'one entitled to receive cakes'\n- @deva[शाष्कुलिकः]\n\nSome interpret @deva[नियुक्त] as @deva[नित्य] (always): @deva[आपूपिकः] = 'one to whom cakes are always given'.",
                "standard": "After a @deva[देयवाचक] (word denoting something to be given) in @deva[प्रथमा], @deva[ठक्] applies in sense @deva[तदस्मै नियुक्तं दीयते] (this is rightfully given to him).\n\n@deva[नियुक्त] = @deva[नियोगेन/अव्यभिचारेण] (by appointment, rightfully).\n\nExamples: @deva[आग्रभोजनिकः] 'entitled to first food', @deva[आपूपिकः], @deva[शाष्कुलिकः].\n\nAlternative: @deva[नियुक्त] = @deva[नित्य] (always): @deva[अपूपा नित्यमस्मै दीयन्ते].",
                "advanced": "After @deva[देयवाचक] (in @deva[प्रथमा]), @deva[ठक्] in sense @deva[नियुक्तं दीयते] (rightfully given).\n\n@deva[नियुक्त] = @deva[अव्यभिचारेण] (without exception) or @deva[नित्य] (always).\n\nExamples: @deva[आग्रभोजनिकः], @deva[आपूपिकः], @deva[शाष्कुलिकः]."
            }
        },
        "44067": {
            "en": {
                "simple": "The affix @deva[टिठन्] (instead of @deva[ठक्]) comes after the words @deva[श्राणा] (rice gruel) and @deva[मांसौदन] (meat and rice) in the sense of 'one to whom that is rightfully given'.\n\nThe @deva[ट्] in @deva[टिठन्] causes the feminine to be formed by @deva[ङीप्] (@ref[4.1.15]).\n\nExamples:\n- @deva[श्राणा नियुक्तम् अस्मै दीयते] → @deva[श्राणिकः] 'one entitled to rice gruel', f. @deva[श्राणिकी]\n- @deva[मांसौदनिकः] 'one entitled to meat-rice', f. @deva[मांसौदनिकी]\n\nThe difference between @deva[ठक्] and @deva[टिठन्] is in accent. @deva[टिठन्] resembles @deva[ठञ्] in both accent (@ref[6.1.197]) and feminine (@ref[4.1.15]), but @deva[टिठन्] is used because it doesn't cause @deva[वृद्धि]—allowing @deva[ओदन] + @deva[टिठन्] = @deva[ओदनिकः] (not @deva[*औदनिकः]).",
                "standard": "After @deva[श्राणा] and @deva[मांसौदन], @deva[टिठन्] (not @deva[ठक्]) applies in sense @deva[नियुक्तं दीयते].\n\n@deva[टिठन्]: @deva[इ] is @deva[उच्चारणार्थ]; @deva[ट्] triggers @deva[ङीप्] (@ref[4.1.15]).\n\nExamples: @deva[श्राणिकः] f. @deva[श्राणिकी], @deva[मांसौदनिकः] f. @deva[मांसौदनिकी].\n\n@deva[ठक्] vs @deva[टिठन्]: @deva[ठक्] is @deva[अन्तोदात्त] (@ref[6.1.165]); @deva[टिठन्] is @deva[आद्युदात्त] (@ref[6.1.197]).\n\nWhy @deva[टिठन्] not @deva[ठञ्]? @deva[टिठन्] lacks @deva[वृद्धि]: @deva[ओदन] + @deva[टिठन्] = @deva[ओदनिकः]; @deva[ठञ्] would give @deva[*औदनिकः].",
                "advanced": "@deva[श्राणा] and @deva[मांसौदन] take @deva[टिठन्] in sense @deva[नियुक्तं दीयते].\n\nExamples: @deva[श्राणिकः] f. @deva[श्राणिकी], @deva[मांसौदनिकः] f. @deva[मांसौदनिकी].\n\n@deva[टिठन्]: @deva[ट्] for @deva[ङीप्] (@ref[4.1.15]); @deva[इ] is @deva[उच्चारणार्थ]; no @deva[वृद्धि] (unlike @deva[ठञ्]).\n\n@deva[ठक्]: @deva[अन्तोदात्त] (@ref[6.1.165]). @deva[टिठन्]: @deva[आद्युदात्त] (@ref[6.1.197]).\n\n@deva[ठञ्] would also work for @deva[श्राणा]/[@deva[मांसौदन], but @deva[टिठन्] needed for @deva[ओदन] alone: @deva[ओदन] + @deva[टिठन्] = @deva[ओदनिकः] (not @deva[*औदनिकः] by @deva[ठञ्])."
            }
        },
        "44068": {
            "en": {
                "simple": "The affix @deva[अण्] optionally comes after the word @deva[भक्त] (food, cooked rice) in the sense of 'one to whom that is rightfully given'. When @deva[अण्] is not used, the regular @deva[ठक्] applies.\n\nExamples:\n- With @deva[अण्]: @deva[भक्तम् अस्मै दीयते नियुक्तम्] → @deva[भाक्तः] 'a regularly fed retainer'\n- With @deva[ठक्]: @deva[भाक्तिकः]",
                "standard": "After @deva[भक्त], @deva[अण्] optionally applies in sense @deva[नियुक्तं दीयते]. Otherwise @deva[ठक्].\n\nExamples: @deva[भाक्तः] (by @deva[अण्]), @deva[भाक्तिकः] (by @deva[ठक्]) 'a regularly fed person, retainer'.",
                "advanced": "@deva[भक्त] optionally takes @deva[अण्] (otherwise @deva[ठक्]) in sense @deva[नियुक्तं दीयते].\n\nExamples: @deva[भाक्तः], @deva[भाक्तिकः]."
            }
        },
        "44069": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the locative case (seventh case, @deva[सप्तमी]) in the sense of 'one who is appointed there'.\n\nExamples:\n- @deva[शुल्कशालायां नियुक्तः] 'appointed at the custom-house' → @deva[शौल्कशालिकः] 'a custom-house superintendent'\n- @deva[आकरे नियुक्तः] → @deva[आकरिकः] 'mine superintendent'\n- @deva[आपणे नियुक्तः] → @deva[आपणिकः] 'market superintendent'\n- @deva[गुल्मे नियुक्तः] → @deva[गौल्मिकः] 'outpost commander'\n- @deva[द्वारे नियुक्तः] → @deva[दौवारिकः] 'doorkeeper'\n\nNote: @deva[नियुक्त] here has a different meaning than in @ref[4.4.66]—hence it is stated again.",
                "standard": "After a @deva[सप्तम्यन्त] word, @deva[ठक्] applies in sense @deva[तत्र नियुक्तः] (appointed there).\n\nExamples: @deva[शौल्कशालिकः] 'custom-house official', @deva[आकरिकः], @deva[आपणिकः], @deva[गौल्मिकः], @deva[दौवारिकः].\n\n@deva[तत्रनियुक्त] is @deva[तत्पुरुष] by @ref[2.1.46]. @deva[नियुक्त] here differs from @ref[4.4.66]—hence restated.",
                "advanced": "After @deva[सप्तम्यन्त], @deva[ठक्] in sense @deva[तत्र नियुक्तः].\n\nExamples: @deva[शौल्कशालिकः], @deva[आकरिकः], @deva[आपणिकः], @deva[गौल्मिकः], @deva[दौवारिकः].\n\n@deva[तत्रनियुक्त]: @deva[तत्पुरुष] by @ref[2.1.46]. @deva[नियुक्त] repeated from @ref[4.4.66] with different sense."
            }
        },
        "44070": {
            "en": {
                "simple": "The affix @deva[ठन्] (instead of @deva[ठक्]) comes after words ending in @deva[अगार] (house/chamber) in the sense of 'one who is appointed there'.\n\nThe difference from @deva[ठक्] is in accent and the absence of @deva[वृद्धि].\n\nExamples:\n- @deva[देवागारे नियुक्तः] 'appointed at a temple' → @deva[देवागारिकः] (not @deva[*दैवागारिकः])\n- @deva[कोष्ठागारे नियुक्तः] → @deva[कोष्ठागारिकः] 'treasury keeper'\n- @deva[भाण्डागारे नियुक्तः] → @deva[भाण्डागारिकः] 'storehouse keeper'",
                "standard": "After @deva[अगारान्त] (words ending in @deva[अगार]), @deva[ठन्] (not @deva[ठक्]) applies in sense @deva[तत्र नियुक्तः].\n\nDifference: accent and no @deva[वृद्धि].\n\nExamples: @deva[देवागारिकः] 'temple-keeper', @deva[कोष्ठागारिकः], @deva[भाण्डागारिकः].",
                "advanced": "@deva[अगारान्त] takes @deva[ठन्] (not @deva[ठक्]) in sense @deva[तत्र नियुक्तः].\n\n@deva[ठन्] vs @deva[ठक्]: accent difference; no @deva[वृद्धि] with @deva[ठन्].\n\nExamples: @deva[देवागारिकः], @deva[कोष्ठागारिकः], @deva[भाण्डागारिकः]."
            }
        },
        "44071": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word denoting an improper place or time, in the locative case, in the sense of 'one who studies there'.\n\nThe word @deva[अदेशकाल] refers to times or places prohibited for study by sacred rules.\n\nExamples of improper places:\n- @deva[श्मशाने अधीते] 'studies in a cremation ground' → @deva[श्माशानिकः]\n- @deva[चतुष्पथे अधीते] 'studies at a crossroads' → @deva[चातुष्पथिकः]\n\nExamples of improper times:\n- @deva[चतुर्दश्यां अधीते] 'studies on the 14th lunar day' → @deva[चातुर्दशिकः]\n- @deva[अमावास्यायां अधीते] → @deva[आमावास्यिकः]\n\nCounter-examples (proper places/times): @deva[स्रुघ्ने अधीते], @deva[पूर्वाह्णे अधीते] → no affix applies.",
                "standard": "After @deva[अदेशकालवाचक] (improper place/time) in @deva[सप्तमी], @deva[ठक्] applies in sense @deva[अध्यायिन्] (one who studies there).\n\n@deva[अदेशकाल] = place/time prohibited by @deva[शास्त्र] for study.\n\nImproper places: @deva[श्माशानिकः], @deva[चातुष्पथिकः]\nImproper times: @deva[चातुर्दशिकः], @deva[आमावास्यिकः]\n\nProper place/time → no affix: @deva[स्रुघ्ने अधीते], @deva[पूर्वाह्णे अधीते].",
                "advanced": "After @deva[अदेशकालवाचक] (in @deva[सप्तमी]), @deva[ठक्] in sense @deva[तत्र अधीते].\n\nImproper places: @deva[श्माशानिकः], @deva[चातुष्पथिकः]\nImproper times: @deva[चातुर्दशिकः], @deva[आमावास्यिकः]\n\nCondition @deva[अदेशकाल] excludes proper places/times: @deva[स्रुघ्ने], @deva[पूर्वाह्णे]."
            }
        },
        "44072": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after compounds ending in @deva[कठिन] (hard/rough terrain) and after @deva[प्रस्तार], in the locative case, in the sense of 'one who transacts business there'.\n\nExamples:\n- @deva[वंशकठिने व्यवहरति] 'transacts business in a bamboo thicket' → @deva[वांशकठिनिकः] 'one whose occupation is in bamboo groves'\n- @deva[वार्ध्रकठिने व्यवहरति] → @deva[वार्ध्रकठिनिकः]\n- @deva[प्रस्तारे व्यवहरति] → @deva[प्रास्तारिकः]\n- @deva[संस्थाने व्यवहरति] → @deva[सांस्थानिकः]",
                "standard": "After @deva[कठिनान्त] compounds and @deva[प्रस्तार] (in @deva[सप्तमी]), @deva[ठक्] applies in sense @deva[व्यवहरति] (transacts business).\n\nExamples: @deva[वांशकठिनिकः] (works in bamboo thicket), @deva[वार्ध्रकठिनिकः], @deva[प्रास्तारिकः], @deva[सांस्थानिकः].\n\nMeaning: @deva[तस्मिन् देशे या क्रिया यथानुष्ठेया तां तथैवानुतिष्ठति].",
                "advanced": "After @deva[कठिनोत्तरपद] and @deva[प्रस्तार] (in @deva[सप्तमी]), @deva[ठक्] in sense @deva[व्यवहरति].\n\nExamples: @deva[वांशकठिनिकः], @deva[वार्ध्रकठिनिकः], @deva[प्रास्तारिकः], @deva[सांस्थानिकः].\n\n@deva[व्यवहरति] = @deva[तस्मिन् देशे या क्रिया यथानुष्ठेया तां तथैवानुतिष्ठति]."
            }
        },
        "44073": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the locative word @deva[निकट] (near) in the sense of 'one who dwells there'.\n\nThis forms epithets for those permitted by sacred rules to dwell near human habitations.\n\nExample: @deva[निकटे वसति] 'dwells nearby' → @deva[नैकटिकः] 'an ascetic allowed to live near human habitations'\n\nContrast: @deva[आरण्यकाः] are ascetics ordained to dwell in forests, at least two miles from habitations. @deva[नैकटिकाः] are those whose order permits living near habitations.",
                "standard": "After @deva[निकट] (in @deva[सप्तमी]), @deva[ठक्] applies in sense @deva[वसति] (dwells).\n\nExample: @deva[निकटे वसति] → @deva[नैकटिकः] 'ascetic permitted to dwell near habitations'.\n\nContrast: @deva[आरण्यक] (must dwell in forests) vs @deva[नैकटिक] (may dwell near human settlements).",
                "advanced": "@deva[निकट] (in @deva[सप्तमी]) takes @deva[ठक्] in sense @deva[वसति].\n\nExample: @deva[नैकटिकः] 'ascetic of @deva[नैकटिक] order'.\n\nThese are ascetics whose @deva[आचार] permits dwelling @deva[निकट] (near habitations), unlike @deva[आरण्यक]s who must dwell @deva[अरण्ये]."
            }
        },
        "44074": {
            "en": {
                "simple": "The affix @deva[ष्ठल्] (instead of @deva[ठक्]) comes after the word @deva[आवसथ] (dwelling, house) in the locative case, in the sense of 'one who dwells there'.\n\nThe @deva[ल्] in @deva[ष्ठल्] affects accent (@ref[6.1.193]). The @deva[ष्] triggers @deva[ङीष्] for feminine (@ref[4.1.41]).\n\nExample: @deva[आवसथे वसति] → @deva[आवसथिकः] 'one who dwells in a house—a householder', f. @deva[आवसथिकी]\n\nThis marks the end of the @deva[ठक्]-@deva[अधिकार] that began at @ref[4.4.1]. From here on, other affixes will be prescribed.",
                "standard": "After @deva[आवसथ] (in @deva[सप्तमी]), @deva[ष्ठल्] (not @deva[ठक्]) applies in sense @deva[वसति].\n\nExample: @deva[आवसथे वसति] → @deva[आवसथिकः] 'householder (vs. ascetic)', f. @deva[आवसथिकी].\n\n@deva[ष्ठल्]: @deva[ल्] for accent (@ref[6.1.193]); @deva[ष्] for @deva[ङीष्] (@ref[4.1.41]).\n\nThis ends the @deva[ठक्]-@deva[अधिकार] from @ref[4.4.1]. Henceforth other affixes are prescribed.",
                "advanced": "@deva[आवसथ] (in @deva[सप्तमी]) takes @deva[ष्ठल्] in sense @deva[वसति].\n\nExample: @deva[आवसथिकः] f. @deva[आवसथिकी] 'householder'.\n\n@deva[ष्ठल्]: @deva[ल्] is @deva[इत्] for @deva[स्वरितोदात्त] (@ref[6.1.193]); @deva[ष्] is @deva[इत्] for @deva[ङीष्] (@ref[4.1.41]).\n\nThis sūtra concludes the @deva[ठगधिकार] of @ref[4.4.1]. Subsequent sūtras prescribe other affixes."
            }
        },
        "44075": {
            "en": {
                "simple": "This is a governing rule: the affix @deva[यत्] applies in each sūtra from here through @ref[5.1.5] @deva[तस्मै हितम्].\n\nThe affix @deva[यत्] must be supplied in the following sūtras.\n\nExample from the next sūtra (@ref[4.4.76]): @deva[तद् वहति रथयुगप्रासङ्गम्] — with @deva[यत्] we get @deva[रथ्यः] 'fit for a chariot', @deva[युग्यः] 'fit for a yoke', @deva[प्रासङ्ग्यः] 'fit for a trace-rope'.",
                "standard": "This @deva[अधिकारसूत्र] establishes @deva[यत्] as the governing affix from here through @ref[5.1.5] @deva[तस्मै हितम्].\n\nExample from @ref[4.4.76]: @deva[तद् वहति रथयुगप्रासङ्गम्] + @deva[यत्] → @deva[रथ्यः], @deva[युग्यः], @deva[प्रासङ्ग्यः].",
                "advanced": "@deva[अधिकार]: @deva[यत्] governs through @ref[5.1.5] @deva[तस्मै हितम्].\n\nExample (@ref[4.4.76]): @deva[रथ] + @deva[यत्] → @deva[रथ्यः]; @deva[युग] + @deva[यत्] → @deva[युग्यः]; @deva[प्रासङ्ग] + @deva[यत्] → @deva[प्रासङ्ग्यः]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.4.61-75)")

if __name__ == "__main__":
    main()
