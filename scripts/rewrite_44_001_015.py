#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 4.4.1-15."""

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
        "44001": {
            "en": {
                "simple": "This is a governing rule: the affix @deva[ठक्] applies in the senses listed from here through @ref[4.4.76]. The affix @deva[ठक्] adds @deva[इक] to the base with @deva[वृद्धि] (vowel strengthening) of the first syllable.\n\nSeveral @deva[वार्त्तिक]s extend this rule:\n- After @deva[माशब्द] etc., @deva[ठक्] means 'one who says that': @deva[माशब्द] + @deva[ठक्] → @deva[माशब्दिकः] 'one who says \"don't make noise\"'\n- After @deva[प्रभूत] etc., in the sense 'one who says': @deva[प्रभूतम् आह] → @deva[प्राभूतिकः]\n- After @deva[सुस्नात] etc., in the sense 'one who asks': @deva[सुस्नातं पृच्छति] → @deva[सौस्नातिकः] 'one who asks \"have you bathed well?\"'\n- After @deva[परदार] etc., in the sense 'one who goes to': @deva[परदारान् गच्छति] → @deva[पारदारिकः] 'an adulterer'",
                "standard": "This @deva[अधिकारसूत्र] establishes @deva[ठक्] as the governing affix for sūtras through @ref[4.4.76]. The affix adds @deva[इक] with @deva[वृद्धि] of the first vowel (@ref[7.2.117]).\n\n@deva[वार्त्तिक]s extend @deva[ठक्] to additional senses:\n- @deva[माशब्दादयः] in sense 'he said that': @deva[माशब्दिकः], @deva[कार्यशब्दिकः] (affix to a sentence)\n- @deva[प्रभूतादयः] in sense 'he said': @deva[प्राभूतिकः], @deva[पार्याप्तिकः] (affix to an adverb)\n- @deva[सुस्नातादयः] in sense 'he asks': @deva[सौस्नातिकः], @deva[सौखशायनिकः]\n- @deva[परदारादयः] in sense 'he goes to': @deva[पारदारिकः], @deva[गौरुतल्पिकः] (@deva[तल्प] here = wife)",
                "advanced": "This @deva[अधिकारसूत्र] governs @deva[ठक्] through @ref[4.4.76]. The affix @deva[ठक्] = @deva[इक] with @deva[वृद्धि] by @ref[7.2.117], @deva[ठ्] being @deva[इत्] by @ref[1.3.7].\n\n@note[type=vārtika]: @deva[माशब्दादिभ्य इत्याहार्थे] — After @deva[माशब्द] etc., @deva[ठक्] in sense 'he said that': @deva[माशब्दिकः] (affix to a @deva[वाक्य]).\n\n@note[type=vārtika]: @deva[प्रभूतादिभ्य इत्याहार्थे] — @deva[प्राभूतिकः] (affix to @deva[अव्यय]).\n\n@note[type=vārtika]: @deva[सुस्नातादिभ्यः पृच्छत्यर्थे] — @deva[सौस्नातिकः] 'one who asks \"have you bathed well?\"'\n\n@note[type=vārtika]: @deva[परदारादिभ्यो गच्छत्यर्थे] — @deva[पारदारिकः], @deva[गौरुतल्पिकः] (@deva[तल्प] = @deva[भार्या])."
            }
        },
        "44002": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the instrumental case (third case, @deva[तृतीया]) in the sense of 'one who plays, digs, conquers, or is conquered by means of that thing'.\n\nExamples:\n- @deva[अक्षैः दीव्यति] 'plays with dice' → @deva[आक्षिकः] 'a dicer'\n- @deva[शलाकया दीव्यति] → @deva[शालाकिकः] 'one who plays with sticks'\n- @deva[अभ्र्या खनति] 'digs with a hoe' → @deva[आभ्रिकः]\n- @deva[कुद्दालेन खनति] → @deva[कौद्दालिकः] 'one who digs with a spade'\n- @deva[अक्षैः जयति] 'conquers with dice' → @deva[आक्षिकः]\n- @deva[अक्षैः जितम्] 'conquered by dice' → @deva[आक्षिकम्]\n\nThe rule applies only where usage supports it. Not every instrumental produces a derivative—@deva[देवदत्तेन जितम्] does not yield @deva[*दैवदत्तिकः].",
                "standard": "After a @deva[तृतीया]-ending word, @deva[ठक्] applies in the senses @deva[दीव्यति] (plays), @deva[खनति] (digs), @deva[जयति] (conquers), or @deva[जितम्] (is conquered).\n\nExamples:\n- @deva[अक्षैः दीव्यति] → @deva[आक्षिकः] 'a dicer'\n- @deva[अभ्र्या खनति] → @deva[आभ्रिकः], @deva[कौद्दालिकः]\n- @deva[अक्षैः जयति] → @deva[आक्षिकः]; @deva[अक्षैः जितम्] → @deva[आक्षिकम्]\n\nThough the verbs appear in 3rd person singular present, the derivative is not restricted—@deva[आक्षिकौ], @deva[आक्षिकाः], @deva[आक्षिकस्त्वम्], @deva[आक्षिकोऽहम्] are all valid.\n\nThe rule is limited by usage (@deva[लोकाश्रय]): @deva[देवदत्तेन जितम्] does not yield @deva[*दैवदत्तिकः], nor does @deva[अङ्गुल्या खनति] produce a derivative.",
                "advanced": "After @deva[तृतीयान्त], @deva[ठक्] applies in senses @deva[दीव्यति], @deva[खनति], @deva[जयति], @deva[जितम्].\n\nExamples: @deva[अक्षैः दीव्यति] → @deva[अक्ष] + @deva[ठक्] → @deva[आक्षिकः] by @ref[7.3.50]. Similarly @deva[शालाकिकः], @deva[आभ्रिकः], @deva[कौद्दालिकः].\n\nThe @deva[तिङन्त] forms (@deva[दीव्यति] etc.) indicate the sense, not grammatical restrictions—derivatives function across all @deva[पुरुष], @deva[वचन], and @deva[काल]: @deva[आक्षिकौ], @deva[आक्षिकाः], @deva[अक्षैरदीव्यत्] → @deva[आक्षिकः].\n\nThe rule is @deva[लोकाश्रय]—not every @deva[तृतीयान्त] yields a derivative. @deva[देवदत्तेन जितम्] gives no @deva[*दैवदत्तिकः]; @deva[अङ्गुल्या खनति] gives no derivative.\n\nThough sentences are @deva[क्रियाप्रधान] (verb-principal), the @deva[तद्धित] makes the @deva[करण] principal."
            }
        },
        "44003": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the instrumental case in the sense of 'refined or prepared by means of that thing'.\n\nThe word @deva[संस्कृतम्] means 'refined' or 'made better in quality'.\n\nExamples:\n- @deva[दध्ना संस्कृतम्] 'refined with curd' → @deva[दाधिकम्] 'prepared with curd'\n- @deva[शृङ्गवेरेण संस्कृतम्] → @deva[शार्ङ्गवेरिकम्] 'prepared with ginger'\n- @deva[मरीचेन संस्कृतम्] → @deva[मारीचिकम्] 'prepared with pepper'\n\nThis sūtra is separated from the previous one so that @deva[संस्कृतम्] alone continues to the next sūtra.",
                "standard": "After a @deva[तृतीया]-ending word, @deva[ठक्] applies in the sense @deva[संस्कृतम्] (refined/prepared thereby).\n\nExamples:\n- @deva[दध्ना संस्कृतम्] → @deva[दाधिकम्] 'prepared with curd'\n- @deva[शृङ्गवेरेण संस्कृतम्] → @deva[शार्ङ्गवेरिकम्] 'with ginger'\n- @deva[मरीचेन संस्कृतम्] → @deva[मारीचिकम्] 'with pepper'\n\nThis sūtra is separated from @ref[4.4.2] to allow only @deva[संस्कृतम्] (not @deva[दीव्यति] etc.) to continue as @deva[अनुवृत्ति] into the next sūtra.",
                "advanced": "After @deva[तृतीयान्त], @deva[ठक्] in sense @deva[संस्कृतम्] (refined thereby).\n\nExamples: @deva[दध्ना संस्कृतम्] → @deva[दाधिकम्]; @deva[शार्ङ्गवेरिकम्], @deva[मारीचिकम्].\n\nThe separation from @ref[4.4.2] is @deva[उत्तरार्थम्]—only @deva[संस्कृतम्] (not @deva[दीव्यति], @deva[खनति], @deva[जयति]) continues as @deva[अनुवृत्ति] into @ref[4.4.4]."
            }
        },
        "44004": {
            "en": {
                "simple": "After the word @deva[कुलत्थ] (a type of legume) and after words having a penultimate @deva[क्], the affix @deva[अण्] is used instead of @deva[ठक्], in the sense of 'refined or prepared therewith'.\n\nExamples:\n- @deva[कुलत्थेन संस्कृतम्] → @deva[कौलत्थम्] 'prepared with @deva[कुलत्थ]'\n- @deva[तित्तिडीकेन संस्कृतम्] → @deva[तैत्तिडीकम्] (word with penultimate @deva[क])\n- @deva[दर्दभकेन संस्कृतम्] → @deva[दार्दभकम्] (word with penultimate @deva[क])",
                "standard": "After @deva[कुलत्थ] and bases with @deva[उपधा]-@deva[क्], @deva[अण्] replaces @deva[ठक्] in the sense @deva[संस्कृतम्].\n\nThis is an @deva[अपवाद] (exception) to @ref[4.4.3].\n\nExamples:\n- @deva[कुलत्थ] + @deva[अण्] → @deva[कौलत्थम्]\n- @deva[तित्तिडीक] (has @deva[उपधा]-@deva[क्]) + @deva[अण्] → @deva[तैत्तिडीकम्]\n- @deva[दर्दभक] + @deva[अण्] → @deva[दार्दभकम्]",
                "advanced": "@deva[कुलत्थ] and @deva[ककारोपध] bases take @deva[अण्] (not @deva[ठक्]) in sense @deva[संस्कृतम्].\n\n@deva[अण्] = @deva[अ] with @deva[वृद्धि] by @ref[7.2.117]. Examples: @deva[कौलत्थम्], @deva[तैत्तिडीकम्], @deva[दार्दभकम्].\n\nThis @deva[अपवाद] to @ref[4.4.3] blocks @deva[ठक्]."
            }
        },
        "44005": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the instrumental case in the sense of 'one who crosses water by means of that thing'.\n\nExamples:\n- @deva[काण्डप्लवेन तरति] 'crosses with a bundle-raft' → @deva[काण्डप्लविकः]\n- @deva[उडुपेन तरति] 'crosses with a raft' → @deva[औडुपिकः] 'a boatman/raftsman'",
                "standard": "After a @deva[तृतीया]-ending word, @deva[ठक्] applies in the sense @deva[तरति] (crosses water thereby).\n\nExamples:\n- @deva[काण्डप्लवेन तरति] → @deva[काण्डप्लविकः]\n- @deva[उडुपेन तरति] → @deva[औडुपिकः] 'one who crosses on a raft'",
                "advanced": "After @deva[तृतीयान्त], @deva[ठक्] in sense @deva[तरति] (crosses water).\n\nExamples: @deva[काण्डप्लविकः], @deva[औडुपिकः].\n\nThe @deva[अनुवृत्ति] of @deva[तृतीयासमर्थात्] continues from @ref[4.4.2]."
            }
        },
        "44006": {
            "en": {
                "simple": "The affix @deva[ठञ्] (instead of @deva[ठक्]) comes after the word @deva[गोपुच्छ] (cow's tail) in the sense of 'one who crosses thereby'.\n\nThe difference between @deva[ठक्] and @deva[ठञ्] is only in accent (the placement of the @deva[उदात्त]).\n\nExample: @deva[गोपुच्छेन तरति] → @deva[गौपुच्छिकः] 'one who crosses holding a cow's tail'",
                "standard": "After @deva[गोपुच्छ], @deva[ठञ्] (not @deva[ठक्]) applies in the sense @deva[तरति].\n\n@deva[ठञ्] differs from @deva[ठक्] only in accent—@deva[ञ्] affects @deva[उदात्त] placement.\n\nExample: @deva[गोपुच्छेन तरति] → @deva[गौपुच्छिकः]",
                "advanced": "@deva[गोपुच्छ] takes @deva[ठञ्] (not @deva[ठक्]) in sense @deva[तरति].\n\n@deva[ठञ्] vs @deva[ठक्]: The @deva[ञ्] is @deva[इत्] for accent by @ref[1.3.3]—it marks @deva[ञित्] for @ref[6.1.197] (@deva[आद्युदात्त]).\n\nExample: @deva[गौपुच्छिकः]."
            }
        },
        "44007": {
            "en": {
                "simple": "The affix @deva[ठञ्] (instead of @deva[ठक्]) comes after the word @deva[नौ] (boat) and after bases having two syllables (@deva[द्व्यच्]), in the sense of 'one who crosses thereby'.\n\nExamples:\n- @deva[नावा तरति] → @deva[नाविकः] 'a sailor, boatman'\n- @deva[घटेन तरति] → @deva[घटिकः] (two-syllable base)\n- @deva[प्लवेन तरति] → @deva[प्लविकः]\n- @deva[बाहुभ्यां तरति] → @deva[बाहुकः]\n\nThe @deva[ष्] in @deva[ष्ठन्] is not part of the affix but results from @deva[सन्धि] rules. The feminine of @deva[बाहुकः] is @deva[बाहुका].\n\nA mnemonic verse lists the six sūtras in the @deva[ठक्] section where the affix has indicatory @deva[ष्]: @ref[4.4.9], @ref[4.4.10], @ref[4.4.18], @ref[4.4.53], and @ref[4.4.74].",
                "standard": "After @deva[नौ] and @deva[द्व्यच्] (disyllabic) bases, @deva[ठञ्] (not @deva[ठक्]) applies in sense @deva[तरति].\n\nExamples:\n- @deva[नावा तरति] → @deva[नाविकः] 'sailor'\n- @deva[घटिकः], @deva[प्लविकः], @deva[बाहुकः] (disyllabic bases)\n\nThe @deva[ष्] in the sūtra's @deva[ष्ठन्] is @deva[सन्धि], not part of the affix. Feminine @deva[बाहुकः] → @deva[बाहुका] (no @deva[ङीष्] since @deva[ठञ्] lacks @deva[षित्]).\n\n@deva[कारिका]: @deva[आकर्षात्पर्पादभेर्स्त्रादिभ्यः कुसीदसूत्राच्च । आवसथात्किशरादेः षितः षडेते ठगधिकारे ॥] — Six sūtras in the @deva[ठक्] section have @deva[षित्] affixes: @ref[4.4.9], @ref[4.4.10], @ref[4.4.18], @ref[4.4.53], @ref[4.4.74].",
                "advanced": "@deva[नौ] and @deva[द्व्यच्] bases take @deva[ठञ्] in sense @deva[तरति].\n\nExamples: @deva[नाविकः], @deva[घटिकः], @deva[प्लविकः], @deva[बाहुकः].\n\nThe @deva[ष्] in @deva[ष्ठन्] is external @deva[सन्धि] (@deva[विसर्गसन्धि]), not @deva[इत्]. Without @deva[षित्], feminine is @deva[बाहुका] (not @deva[*बाहुकी] by @ref[4.1.41]).\n\n@deva[कारिका]: @deva[आकर्षात्...षडेते ठगधिकारे] identifies six @deva[षित्] affixes in this @deva[अधिकार]: @ref[4.4.9] (@deva[ष्ठल्]), @ref[4.4.10] (@deva[ष्ठन्]), @ref[4.4.18], @ref[4.4.53], @ref[4.4.74]."
            }
        },
        "44008": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the instrumental case in the sense of 'one who goes on or lives by means of that thing'.\n\nThe word @deva[चरति] means both 'goes on' and 'eats/lives by'.\n\nExamples:\n- @deva[दध्ना चरति] 'lives on curd' → @deva[दाधिकः] 'one who subsists on curd'\n- @deva[हस्तिना चरति] 'travels by elephant' → @deva[हास्तिकः] 'one who travels on an elephant'",
                "standard": "After a @deva[तृतीया]-ending word, @deva[ठक्] applies in the sense @deva[चरति] (goes on/lives thereby).\n\n@deva[चरति] has two meanings: 'goes/travels' and 'eats/subsists'.\n\nExamples:\n- @deva[दध्ना चरति] → @deva[दाधिकः] 'one who lives on curd'\n- @deva[हस्तिना चरति] → @deva[हास्तिकः] 'one who travels by elephant'",
                "advanced": "After @deva[तृतीयान्त], @deva[ठक्] in sense @deva[चरति] (goes/lives thereby).\n\n@deva[चरति] = @deva[गमने] (motion) and @deva[भक्षणे] (eating). Examples: @deva[दाधिकः] (subsists on curd), @deva[हास्तिकः] (travels by elephant)."
            }
        },
        "44009": {
            "en": {
                "simple": "The affix @deva[ष्ठल्] (instead of @deva[ठक्]) comes after the word @deva[आकर्ष] (touchstone) in the sense of 'one who goes on by means thereof'.\n\n@deva[आकर्ष] is a touchstone used to test gold.\n\nExample: @deva[आकर्षेण चरति] → @deva[आकर्षिकः] (one who lives by testing gold), feminine @deva[आकर्षिकी]\n\nThe @deva[ल्] in @deva[ष्ठल्] affects accent. The @deva[ष्] here is part of the affix (unlike in @ref[4.4.7]), so feminines take @deva[ङीष्] → @deva[ई].",
                "standard": "After @deva[आकर्ष] (touchstone), @deva[ष्ठल्] (not @deva[ठक्]) applies in sense @deva[चरति].\n\nExample: @deva[आकर्षेण चरति] → @deva[आकर्षिकः], f. @deva[आकर्षिकी]\n\nThe @deva[ल्] is for accent (@ref[6.1.193]). The @deva[ष्] is @deva[इत्]—unlike @ref[4.4.7] where @deva[ष्] is @deva[सन्धि]. Being @deva[षित्], the feminine takes @deva[ङीष्] by @ref[4.1.41].\n\nThe @deva[कारिका] lists six @deva[षित्] affixes in the @deva[ठक्] section: @ref[4.4.9], @ref[4.4.10], @ref[4.4.18], @ref[4.4.53], @ref[4.4.74].",
                "advanced": "@deva[आकर्ष] takes @deva[ष्ठल्] in sense @deva[चरति].\n\nExample: @deva[आकर्षिकः], f. @deva[आकर्षिकी].\n\n@deva[ष्ठल्]: @deva[ल्] is @deva[इत्] for @deva[स्वरितोदात्त] by @ref[6.1.193]. @deva[ष्] is @deva[इत्] (unlike @ref[4.4.7] where @deva[ष्] is @deva[विसर्गसन्धि])—therefore @deva[षित्], triggering @deva[ङीष्] by @ref[4.1.41].\n\n@deva[आकर्ष] = @deva[निकष] (touchstone for gold)."
            }
        },
        "44010": {
            "en": {
                "simple": "The affix @deva[ष्ठन्] (instead of @deva[ठक्]) comes after the words @deva[पर्प], @deva[अश्व], @deva[अश्वत्थ], @deva[रथ], @deva[जाल], @deva[न्यास], @deva[व्याल], and @deva[पाद] in the sense of 'one who goes on by means thereof'.\n\nExamples:\n- @deva[पर्पेण चरति] → @deva[पर्पिकः], f. @deva[पर्पिकी]\n- @deva[अश्वेन चरति] → @deva[अश्विकः], f. @deva[अश्विकी]\n- @deva[पादेन चरति] → @deva[पदिकः], f. @deva[पदिकी] (@deva[पाद] becomes @deva[पद्] by @ref[6.3.52])\n\nThe @deva[न्] in @deva[ष्ठन्] affects accent. The @deva[ष्] triggers @deva[ङीष्] (→ @deva[ई]) in feminines.",
                "standard": "After @deva[पर्पादि] (@deva[पर्प], @deva[अश्व], @deva[अश्वत्थ], @deva[रथ], @deva[जाल], @deva[न्यास], @deva[व्याल], @deva[पाद]), @deva[ष्ठन्] (not @deva[ठक्]) applies in sense @deva[चरति].\n\nExamples:\n- @deva[पर्पिकः], f. @deva[पर्पिकी]\n- @deva[अश्विकः], f. @deva[अश्विकी]\n- @deva[पदिकः], f. @deva[पदिकी] (@deva[पाद] → @deva[पद्] by @ref[6.3.52])\n\n@deva[ष्ठन्]: @deva[न्] is @deva[इत्] for accent (@ref[6.1.197]); @deva[ष्] is @deva[इत्] for @deva[ङीष्] (@ref[4.1.41]).",
                "advanced": "@deva[पर्पादि] (@deva[पर्प], @deva[अश्व], @deva[अश्वत्थ], @deva[रथ], @deva[जाल], @deva[न्यास], @deva[व्याल], @deva[पाद]) take @deva[ष्ठन्] in sense @deva[चरति].\n\nExamples: @deva[पर्पिकः] f. @deva[पर्पिकी], @deva[अश्विकः] f. @deva[अश्विकी], @deva[पदिकः] f. @deva[पदिकी].\n\n@deva[ष्ठन्]: @deva[न्] is @deva[इत्] for @deva[आद्युदात्त] by @ref[6.1.197]; @deva[ष्] is @deva[इत्] for @deva[ङीष्] by @ref[4.1.41].\n\n@deva[पाद] → @deva[पद्] before @deva[ष्ठन्] by @ref[6.3.52] (@deva[पादः पदादिष्वचि])."
            }
        },
        "44011": {
            "en": {
                "simple": "Both affixes @deva[ठञ्] and @deva[ष्ठन्] come after the word @deva[श्वगण] (pack of dogs) in the sense of 'one who goes/lives by means thereof'.\n\nExamples:\n- With @deva[ठञ्]: @deva[श्वगणेन चरति] → @deva[श्वागणिकः] 'one who lives by dogs', f. @deva[श्वागणिकी]\n- With @deva[ठन्]: @deva[श्वगणिकः], f. @deva[श्वगणिका]\n\nThe form @deva[श्वागणिकः] is irregular. By @ref[7.2.117], @deva[ञ्] should trigger @deva[वृद्धि] of @deva[अ] in @deva[श्व], and @ref[7.3.4] would give @deva[औ] before @deva[व]—yielding @deva[*शौवगणिकः]. But the prohibition in @ref[7.3.8] (for @deva[श्वन्] + @deva[इञ्]) extends to @deva[श्वन्] + any @deva[इकारादि] affix.",
                "standard": "After @deva[श्वगण], both @deva[ठञ्] and @deva[ष्ठन्] apply in sense @deva[चरति].\n\nExamples:\n- @deva[ठञ्]: @deva[श्वागणिकः], f. @deva[श्वागणिकी]\n- @deva[ठन्]: @deva[श्वगणिकः], f. @deva[श्वगणिका]\n\nThe form @deva[श्वागणिकः] is irregular: @ref[7.2.117] requires @deva[वृद्धि], and @ref[7.3.4] would substitute @deva[औ] for @deva[वृद्धि] before @deva[व] in @deva[श्वन्], giving @deva[*शौवगणिकः]. But the prohibition in @ref[7.3.8] (blocking @ref[7.3.4] before @deva[इञ्]) extends to any affix beginning with @deva[इ]—so @deva[श्व] simply takes @deva[वृद्धि] → @deva[श्वा].",
                "advanced": "@deva[श्वगण] takes @deva[ठञ्] or @deva[ष्ठन्] in sense @deva[चरति].\n\nExamples: @deva[श्वागणिकः] f. @deva[श्वागणिकी] (by @deva[ठञ्]); @deva[श्वगणिकः] f. @deva[श्वगणिका] (by @deva[ठन्]).\n\nDerivation of @deva[श्वागणिकः]: @deva[श्वगण] + @deva[ठञ्] → by @ref[7.2.117], @deva[ञित्] requires @deva[वृद्धि]. By @ref[7.3.4], @deva[श्वन्] etc. take @deva[औ] instead of @deva[वृद्धि] before @deva[व]—expected: @deva[*शौवगणिकः]. But @ref[7.3.8] blocks @ref[7.3.4] when @deva[श्वन्] is followed by @deva[इञ्]. This extends to any @deva[इकारादि] affix. Result: simple @deva[वृद्धि] → @deva[श्वागणिकः]."
            }
        },
        "44012": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the words in the @deva[वेतनादि] list when in the instrumental case, in the sense of 'one who lives thereby'.\n\nExamples:\n- @deva[वेतनेन जीवति] 'lives by wages' → @deva[वैतनिकः] 'a wage-earner, servant'\n- @deva[धनुर्दण्डेन जीवति] → @deva[धानुर्दण्डिकः] 'one who lives by bow and staff'\n\nFor @deva[धनुर्दण्ड], the affix applies to both the compound and its parts separately: @deva[धानुर्दण्डिकः] (from compound), @deva[धानुष्कः] (from @deva[धनुस्]), @deva[दाण्डिकः] (from @deva[दण्ड]).\n\nThe @deva[वेतनादि] list includes: @deva[वेतन], @deva[वाहन], @deva[अर्धवाहन], @deva[धनुर्दण्ड], @deva[जाल], @deva[वेश], @deva[उपवेश], @deva[प्रेषण], @deva[उपवस्ति], @deva[सुख], @deva[शय्या], @deva[शक्ति], @deva[उपनिषद्], @deva[उपदेश], @deva[स्फिज्], @deva[पाद], @deva[उपस्थ], @deva[उपस्थान], @deva[उपहस्त], @deva[स्रज्].",
                "standard": "After @deva[वेतनादि] (in @deva[तृतीया]), @deva[ठक्] applies in sense @deva[जीवति] (lives thereby).\n\nExamples:\n- @deva[वेतनेन जीवति] → @deva[वैतनिकः] 'a menial'\n- @deva[धनुर्दण्डेन जीवति] → @deva[धानुर्दण्डिकः]\n\nFor @deva[धनुर्दण्ड], the affix applies to compound and members: @deva[धानुर्दण्डिकः], @deva[धानुष्कः], @deva[दाण्डिकः].\n\n@deva[वेतनादि] gaṇa: @deva[वेतन], @deva[वाहन], @deva[अर्धवाहन], @deva[धनुर्दण्ड], @deva[जाल], @deva[वेश], @deva[उपवेश], @deva[प्रेषण], @deva[उपवस्ति], @deva[सुख], @deva[शय्या], @deva[शक्ति], @deva[उपनिषद्], @deva[उपदेश], @deva[स्फिज्], @deva[पाद], @deva[उपस्थ], @deva[उपस्थान], @deva[उपहस्त], @deva[स्रज्].",
                "advanced": "After @deva[वेतनादि] (in @deva[तृतीया]), @deva[ठक्] in sense @deva[जीवति].\n\nExamples: @deva[वैतनिकः], @deva[धानुर्दण्डिकः].\n\nFor @deva[धनुर्दण्ड], affix applies @deva[समासे चाव्ययवयोः]—to compound and individual members: @deva[धानुर्दण्डिकः], @deva[धानुष्कः], @deva[दाण्डिकः].\n\n@deva[वेतनादि] gaṇa (20): @deva[वेतन], @deva[वाहन] (@deva[वाह]), @deva[अर्धवाहन] (@deva[अर्धवाह]), @deva[धनुर्दण्ड], @deva[जाल], @deva[वेश] (@deva[वेस]), @deva[उपवेश] (@deva[उपवेष]/etc.), @deva[प्रेषण], @deva[उपवस्ति] (@deva[उपस्ति]), @deva[सुख], @deva[शय्या], @deva[शक्ति], @deva[उपनिषद्], @deva[उपदेश], @deva[स्फिज्], @deva[पाद], @deva[उपस्थ], @deva[उपस्थान], @deva[उपहस्त], @deva[स्रज्]."
            }
        },
        "44013": {
            "en": {
                "simple": "The affix @deva[ठन्] (instead of @deva[ठक्]) comes after the words @deva[वस्न] (hire), @deva[क्रय] (purchase), and @deva[विक्रय] (sale) when in the instrumental case, in the sense of 'one who lives thereby'.\n\nExamples:\n- @deva[वस्नेन जीवति] → @deva[वस्निकः] 'one who lives by hire, a hireling'\n- @deva[क्रयेण जीवति] → @deva[क्रयिकः] 'one who lives by buying'\n- @deva[विक्रयेण जीवति] → @deva[विक्रयिकः] 'one who lives by selling'\n- @deva[क्रयविक्रयेण जीवति] → @deva[क्रयविक्रयिकः] 'a trader'",
                "standard": "After @deva[वस्न], @deva[क्रय], and @deva[विक्रय] (in @deva[तृतीया]), @deva[ठन्] (not @deva[ठक्]) applies in sense @deva[जीवति].\n\nExamples:\n- @deva[वस्निकः] 'hireling'\n- @deva[क्रयिकः], @deva[विक्रयिकः]\n- @deva[क्रयविक्रयिकः] 'trader' (affix to compound and members)",
                "advanced": "@deva[वस्न], @deva[क्रय], @deva[विक्रय] take @deva[ठन्] (not @deva[ठक्]) in sense @deva[जीवति].\n\nExamples: @deva[वस्निकः], @deva[क्रयिकः], @deva[विक्रयिकः], @deva[क्रयविक्रयिकः].\n\nFor @deva[क्रय] and @deva[विक्रय], the affix applies @deva[समासे चाव्ययवयोः]—to compound and individual words."
            }
        },
        "44014": {
            "en": {
                "simple": "Both affixes @deva[छ] and @deva[ठन्] come after the word @deva[आयुध] (weapon) in the sense of 'one who lives thereby'.\n\nExamples:\n- With @deva[छ]: @deva[आयुधेन जीवति] → @deva[आयुधीयः] 'a mercenary soldier'\n- With @deva[ठन्]: @deva[आयुधेन जीवति] → @deva[आयुधिकः] 'a mercenary soldier'",
                "standard": "After @deva[आयुध], both @deva[छ] and @deva[ठन्] apply in sense @deva[जीवति].\n\nExamples:\n- @deva[छ]: @deva[आयुधीयः] 'mercenary'\n- @deva[ठन्]: @deva[आयुधिकः] 'mercenary'",
                "advanced": "@deva[आयुध] takes @deva[छ] or @deva[ठन्] in sense @deva[जीवति].\n\n@deva[छ] = @deva[ईय] (by @ref[7.1.2]). Examples: @deva[आयुधीयः], @deva[आयुधिकः]."
            }
        },
        "44015": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the words in the @deva[उत्सङ्गादि] list when in the instrumental case, in the sense of 'conveyed or carried thereby'.\n\nThe word @deva[हरति] means 'to carry' or 'to transport'.\n\nExamples:\n- @deva[उत्सङ्गेन हरति] → @deva[औत्सङ्गिकः] 'carried on the hip'\n- @deva[उडुपेन हरति] → @deva[औडुपिकः] 'carried on a raft'\n\nThe @deva[उत्सङ्गादि] list includes: @deva[उत्सङ्ग], @deva[उडुप्], @deva[उत्पुत], @deva[उत्पन्न], @deva[उत्पुट], @deva[पिटक], @deva[पिटाक], @deva[उडप].",
                "standard": "After @deva[उत्सङ्गादि] (in @deva[तृतीया]), @deva[ठक्] applies in sense @deva[हरति] (conveys/carries thereby).\n\nExamples:\n- @deva[उत्सङ्गेन हरति] → @deva[औत्सङ्गिकः] 'carried on the hip'\n- @deva[उडुपेन हरति] → @deva[औडुपिकः] 'carried on a raft'\n\n@deva[उत्सङ्गादि] gaṇa: @deva[उत्सङ्ग], @deva[उडुप्], @deva[उत्पुत] (@deva[उत्पत]), @deva[उत्पन्न], @deva[उत्पुट], @deva[पिटक], @deva[पिटाक], @deva[उडप].",
                "advanced": "After @deva[उत्सङ्गादि] (in @deva[तृतीया]), @deva[ठक्] in sense @deva[हरति] (conveys).\n\nExamples: @deva[औत्सङ्गिकः] 'borne on hip', @deva[औडुपिकः] 'borne on raft'.\n\n@deva[उत्सङ्गादि] gaṇa (8): @deva[उत्सङ्ग], @deva[उडुप्], @deva[उत्पुत] (@deva[उत्पत]), @deva[उत्पन्न], @deva[उत्पुट], @deva[पिटक], @deva[पिटाक], @deva[उडप]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.4.1-15)")

if __name__ == "__main__":
    main()
