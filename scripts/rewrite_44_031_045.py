#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 4.4.31-45."""

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
        "44031": {
            "en": {
                "simple": "The affixes @deva[ष्ठन्] and @deva[ष्ठच्] come after the words @deva[कुसीद] and @deva[दशैकादश] respectively, in the sense of 'one who gives with a blameworthy motive'.\n\n@deva[कुसीद] means 'interest on money'. @deva[दशैकादश] refers to lending 10 on condition of receiving 11 after a month.\n\nExamples:\n- @deva[कुसीदं प्रयच्छति] → @deva[कुसीदिकः] 'money-lender', f. @deva[कुसीदिकी]\n- @deva[दशैकादशं प्रयच्छति] → @deva[दशैकादशिकः] 'one who lends at 10% monthly interest', f. @deva[दशैकादशिकी]\n\nThe difference between @deva[ष्ठन्] and @deva[ष्ठच्] is in accent (see @ref[6.1.197] and @ref[6.1.163]).",
                "standard": "After @deva[कुसीद], @deva[ष्ठन्] applies; after @deva[दशैकादश], @deva[ष्ठच्] applies—both in sense @deva[गर्ह्यं प्रयच्छति].\n\n@deva[कुसीद] = interest. @deva[दशैकादश] = lending 10 to receive 11 (10% monthly).\n\nExamples:\n- @deva[कुसीदिकः] f. @deva[कुसीदिकी] (@ref[4.1.41])\n- @deva[दशैकादशिकः] f. @deva[दशैकादशिकी]\n\n@deva[ष्ठन्] vs @deva[ष्ठच्]: accent difference (@ref[6.1.197], @ref[6.1.163]).",
                "advanced": "@deva[कुसीद] takes @deva[ष्ठन्]; @deva[दशैकादश] takes @deva[ष्ठच्]—in sense @deva[गर्ह्यं प्रयच्छति].\n\nExamples: @deva[कुसीदिकः] f. @deva[कुसीदिकी], @deva[दशैकादशिकः] f. @deva[दशैकादशिकी].\n\n@deva[ष्ठन्]: @deva[आद्युदात्त] by @ref[6.1.197]. @deva[ष्ठच्]: @deva[अन्तोदात्त] by @ref[6.1.163]. Both @deva[षित्] → @deva[ङीष्] by @ref[4.1.41]."
            }
        },
        "44032": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the accusative case in the sense of 'one who gleans that'.\n\nThe word @deva[उञ्छति] refers to picking up grains (@deva[कण]) fallen on the ground—gleaning.\n\nExamples:\n- @deva[बदराणि उञ्छति] 'gleans jujubes' → @deva[बादरिकः]\n- @deva[श्यामाकान् उञ्छति] → @deva[श्यामाकिकः] 'one who gleans millet'\n- @deva[कणान् उञ्छति] → @deva[काणिकः] 'one who gleans grains'",
                "standard": "After a @deva[द्वितीया]-ending word, @deva[ठक्] applies in sense @deva[उञ्छति] (gleans).\n\n@deva[उञ्छ] = picking up fallen grains (@deva[कण]).\n\nExamples: @deva[बादरिकः] 'jujube-gleaner', @deva[श्यामाकिकः], @deva[काणिकः].",
                "advanced": "After @deva[द्वितीयान्त], @deva[ठक्] in sense @deva[उञ्छति] (gleans).\n\nExamples: @deva[बादरिकः], @deva[श्यामाकिकः], @deva[काणिकः]."
            }
        },
        "44033": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the accusative case in the sense of 'one who aids or protects that'.\n\nExamples:\n- @deva[समाजं रक्षति] 'protects/supports an assembly' → @deva[सामाजिकः] 'a spectator' (one who aids an assembly by presence)\n- @deva[सन्निवेशं रक्षति] → @deva[सान्निवेशिकः] 'one who protects a settlement'",
                "standard": "After a @deva[द्वितीया]-ending word, @deva[ठक्] applies in sense @deva[रक्षति] (aids/protects).\n\nExamples:\n- @deva[समाजं रक्षति] → @deva[सामाजिकः] 'spectator' (aids assembly by presence)\n- @deva[सान्निवेशिकः]",
                "advanced": "After @deva[द्वितीयान्त], @deva[ठक्] in sense @deva[रक्षति] (protects).\n\nExamples: @deva[सामाजिकः], @deva[सान्निवेशिकः]."
            }
        },
        "44034": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word in the accusative case in the sense of 'one who makes that sound'.\n\nExamples:\n- @deva[शब्दं करोति] 'makes sound' → @deva[शाब्दिकः] 'one who deals with sounds'—i.e., a grammarian\n- @deva[दर्दुरवत् शब्दं करोति] → @deva[दार्दुरिकः] 'one who makes frog-like croaking'—i.e., a potter (whose wheel makes such sounds)",
                "standard": "After a @deva[द्वितीया]-ending word, @deva[ठक्] applies in sense @deva[शब्दं करोति] (makes sound).\n\nExamples:\n- @deva[शब्दं करोति] → @deva[शाब्दिकः] 'grammarian' (one who works with @deva[शब्द])\n- @deva[दार्दुरिकः] 'potter' (makes frog-like croaking—@deva[दर्दुर] = frog)",
                "advanced": "After @deva[द्वितीयान्त], @deva[ठक्] in sense @deva[शब्दं करोति].\n\nExamples: @deva[शाब्दिकः] 'grammarian', @deva[दार्दुरिकः] 'potter' (wheel's @deva[दर्दुर]-like sound)."
            }
        },
        "44035": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after a word denoting birds, fish, or wild animals, in the accusative case, in the sense of 'one who kills that'.\n\nThe rule applies not just to the specific words @deva[पक्षिन्], @deva[मत्स्य], @deva[मृग], but to all words denoting those creatures (by @ref[1.1.68]).\n\nExamples with birds (@deva[पक्षिन्]):\n- @deva[पक्षिणः हन्ति] → @deva[पाक्षिकः] 'bird-killer'\n- @deva[शकुनीन् हन्ति] → @deva[शाकुनिकः]; @deva[मायूरिकः], @deva[तैत्तिरिकः]\n\nExamples with fish (@deva[मत्स्य]):\n- @deva[मत्स्यान् हन्ति] → @deva[मात्स्यिकः] 'fisherman'\n- @deva[मैनिकः], @deva[शाफरिकः], @deva[शाकुलिकः]\n\nExamples with animals (@deva[मृग]):\n- @deva[मृगान् हन्ति] → @deva[मार्गिकः] 'hunter'\n- @deva[हारिणिकः], @deva[सौकरिकः], @deva[सारङ्गिकः]",
                "standard": "After words denoting @deva[पक्षिन्] (birds), @deva[मत्स्य] (fish), or @deva[मृग] (wild animals) in @deva[द्वितीया], @deva[ठक्] applies in sense @deva[हन्ति] (kills).\n\nBy @ref[1.1.68], the affix applies to all words denoting these creatures, not just @deva[पक्षिन्]/[@deva[मत्स्य]/[@deva[मृग] themselves.\n\nBirds: @deva[पाक्षिकः], @deva[शाकुनिकः], @deva[मायूरिकः], @deva[तैत्तिरिकः]\nFish: @deva[मात्स्यिकः], @deva[मैनिकः], @deva[शाफरिकः], @deva[शाकुलिकः]\nAnimals: @deva[मार्गिकः], @deva[हारिणिकः], @deva[सौकरिकः], @deva[सारङ्गिकः]",
                "advanced": "After @deva[पक्षिमत्स्यमृगवाचिन्] (in @deva[द्वितीया]), @deva[ठक्] in sense @deva[हन्ति].\n\nBy @ref[1.1.68], applies to all @deva[तद्वाचिन्], not just @deva[स्वरूप].\n\nBirds: @deva[पाक्षिकः], @deva[शाकुनिकः], @deva[मायूरिकः], @deva[तैत्तिरिकः]\nFish: @deva[मात्स्यिकः], @deva[मैनिकः], @deva[शाफरिकः], @deva[शाकुलिकः]\nAnimals: @deva[मार्गिकः], @deva[हारिणिकः], @deva[सौकरिकः], @deva[सारङ्गिकः]"
            }
        },
        "44036": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the word @deva[परिपन्थ] in the accusative case, in the sense of 'one who stays there' or 'one who kills'.\n\nExample: @deva[परिपन्थं तिष्ठति] 'stays at the roadside' → @deva[पारिपन्थिकः] 'a highway robber'\n\nThe word can mean: (1) one who stays off the road (avoiding it), or (2) one who occupies the road (blocking it).\n\nThe @deva[च] in the sūtra connects this to the previous rule's @deva[हन्ति] sense: @deva[परिपन्थं हन्ति] also gives @deva[पारिपन्थिकः].\n\nThe accusative form @deva[परिपन्थम्] in the sūtra shows the @deva[लौकिक] (common usage) form, distinguishing it from @deva[परिपन्थिन्] which has other meanings.",
                "standard": "After @deva[परिपन्थ] (in @deva[द्वितीया]), @deva[ठक्] applies in sense @deva[तिष्ठति] (stays) and @deva[हन्ति] (kills, from @ref[4.4.35]).\n\nExample: @deva[परिपन्थं तिष्ठति] → @deva[पारिपन्थिकः] 'highwayman'\n\nTwo interpretations: @deva[पन्थानं वर्जयित्वा तिष्ठति] (stays avoiding the road) or @deva[पन्थानं व्याप्य तिष्ठति] (occupies the road).\n\nThe @deva[च] joins @deva[हन्ति] from previous sūtra. @deva[परिपन्थम्] (accusative) in the sūtra shows @deva[लौकिकरूप], distinguishing from @deva[परिपन्थिन्].",
                "advanced": "@deva[परिपन्थ] (in @deva[द्वितीया]) takes @deva[ठक्] in senses @deva[तिष्ठति] and @deva[हन्ति] (by @deva[च]).\n\nExample: @deva[पारिपन्थिकः] 'highwayman'.\n\n@deva[परिपन्थं तिष्ठति]: @deva[यः पन्थानं वर्जयित्वा तिष्ठति] or @deva[यो वा पन्थानं व्याप्य तिष्ठति].\n\n@deva[परिपन्थम्] in sūtra is @deva[लौकिकरूपदर्शनार्थ]—@deva[परिपन्थ] (not @deva[परिपन्थिन्]) is the base."
            }
        },
        "44037": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after words having @deva[माथ] as their second member, and after @deva[पदवी] and @deva[अनुपद], in the sense of 'one who runs'.\n\nThe word @deva[माथ] means 'a way/road'.\n\nExamples:\n- @deva[दण्डमाथं धावति] 'runs on a highway' → @deva[दाण्डमाथिकः]\n- @deva[शुल्कमाथं धावति] → @deva[शौल्कमाथिकः]\n- @deva[पदवीं धावति] → @deva[पादविकः]\n- @deva[अनुपदं धावति] → @deva[आनुपदिकः]",
                "standard": "After @deva[माथान्त] (words ending in @deva[माथ]) and @deva[पदवी], @deva[अनुपद], @deva[ठक्] applies in sense @deva[धावति] (runs).\n\n@deva[माथ] = way/road.\n\nExamples:\n- @deva[दाण्डमाथिकः] 'who runs on a highway'\n- @deva[शौल्कमाथिकः]\n- @deva[पादविकः], @deva[आनुपदिकः]",
                "advanced": "After @deva[माथोत्तरपद] and @deva[पदवी], @deva[अनुपद], @deva[ठक्] in sense @deva[धावति].\n\n@deva[माथ] = @deva[मार्ग].\n\nExamples: @deva[दाण्डमाथिकः], @deva[शौल्कमाथिकः], @deva[पादविकः], @deva[आनुपदिकः]."
            }
        },
        "44038": {
            "en": {
                "simple": "Both affixes @deva[ठञ्] and @deva[ठक्] come after the word @deva[आक्रन्द] in the accusative case, in the sense of 'one who runs there'.\n\nThe word @deva[आक्रन्द] means 'a place where people cry out'—e.g., a battlefield. It also means 'weeping' or 'invoking'.\n\nExample: @deva[आक्रन्दं धावति] 'runs to cries of distress' → @deva[आक्रन्दिकः] 'one who runs to help those in distress', f. @deva[आक्रन्दिकी]\n\nThe difference between @deva[ठक्] and @deva[ठञ्] is in accent.",
                "standard": "After @deva[आक्रन्द] (in @deva[द्वितीया]), both @deva[ठञ्] and @deva[ठक्] apply in sense @deva[धावति].\n\n@deva[आक्रन्द] = place of weeping/crying out (battlefield); also weeping, invoking.\n\nExample: @deva[आक्रन्दं धावति] → @deva[आक्रन्दिकः] f. @deva[आक्रन्दिकी] 'one who runs to distress calls'\n\n@deva[ठक्] vs @deva[ठञ्]: accent difference.",
                "advanced": "@deva[आक्रन्द] (in @deva[द्वितीया]) takes @deva[ठञ्] or @deva[ठक्] in sense @deva[धावति].\n\n@deva[आक्रन्द] = @deva[रोदनस्थान] (battlefield), also @deva[रोदन], @deva[आह्वान].\n\nExample: @deva[आक्रन्दिकः] f. @deva[आक्रन्दिकी].\n\n@deva[ठञ्] vs @deva[ठक्]: accent difference (@deva[ञित्] vs @deva[कित्])."
            }
        },
        "44039": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after words having @deva[पद] (word/foot) as their second member, in the accusative case, in the sense of 'one who takes/grasps that'.\n\nExamples:\n- @deva[पूर्वपदं गृह्णाति] 'takes the first word' → @deva[पौर्वपदिकः]\n- @deva[उत्तरपदं गृह्णाति] 'takes the second word' → @deva[औत्तरपदिकः]\n\nThe word @deva[उत्तरपद] is mentioned to prevent the rule from applying when @deva[पद] follows @deva[बहु] (as in @deva[बहुपद]).",
                "standard": "After @deva[पदोत्तरपद] (compounds with @deva[पद] as second member) in @deva[द्वितीया], @deva[ठक्] applies in sense @deva[गृह्णाति] (takes).\n\nExamples: @deva[पौर्वपदिकः], @deva[औत्तरपदिकः].\n\n@deva[उत्तरपद] is mentioned to exclude @deva[बहुपद] from this rule.",
                "advanced": "After @deva[पदोत्तरपद] (in @deva[द्वितीया]), @deva[ठक्] in sense @deva[गृह्णाति].\n\nExamples: @deva[पौर्वपदिकः], @deva[औत्तरपदिकः].\n\n@deva[उत्तरपदग्रहण] is @deva[बहुपदनिवृत्त्यर्थ]—excludes @deva[बहुपद] from the rule."
            }
        },
        "44040": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the words @deva[प्रतिकण्ठ], @deva[अर्थ], and @deva[ललाम], in the accusative case, in the sense of 'one who takes that'.\n\nExamples:\n- @deva[प्रतिकण्ठं गृह्णाति] → @deva[प्रातिकण्ठिकः]\n- @deva[अर्थं गृह्णाति] → @deva[आर्थिकः]\n- @deva[ललामं गृह्णाति] → @deva[लालामिकः]\n\nNote: @deva[प्रतिकण्ठ] here is an @deva[अव्ययीभाव] compound meaning 'from throat to throat' (@deva[कण्ठं कण्ठं प्रति]), not a @deva[बहुव्रीहि] meaning 'one whose throat is opposed'.",
                "standard": "After @deva[प्रतिकण्ठ], @deva[अर्थ], @deva[ललाम] (in @deva[द्वितीया]), @deva[ठक्] applies in sense @deva[गृह्णाति].\n\nExamples: @deva[प्रातिकण्ठिकः], @deva[आर्थिकः], @deva[लालामिकः].\n\n@deva[प्रतिकण्ठ] is @deva[अव्ययीभाव] (@deva[कण्ठं कण्ठं प्रति]), not @deva[बहुव्रीहि] (@deva[प्रतिगतः कण्ठम्])—the latter takes no affix.",
                "advanced": "@deva[प्रतिकण्ठ], @deva[अर्थ], @deva[ललाम] (in @deva[द्वितीया]) take @deva[ठक्] in sense @deva[गृह्णाति].\n\nExamples: @deva[प्रातिकण्ठिकः], @deva[आर्थिकः], @deva[लालामिकः].\n\n@deva[प्रतिकण्ठ]: @deva[अव्ययीभाव] (@deva[कण्ठं कण्ठं प्रति]), not @deva[बहुव्रीहि] (@deva[प्रतिगतः कण्ठं यस्य])—latter takes no affix."
            }
        },
        "44041": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the word @deva[धर्म] in the accusative case, in the sense of 'one who practices that'.\n\nExample: @deva[धर्मं चरति] 'practices dharma' → @deva[धार्मिकः] 'religious, righteous'\n\nA @deva[वार्त्तिक] extends this to @deva[अधर्म]: @deva[अधर्मं चरति] → @deva[आधार्मिकः] 'irreligious, unrighteous'",
                "standard": "After @deva[धर्म] (in @deva[द्वितीया]), @deva[ठक्] applies in sense @deva[चरति] (practices).\n\nExample: @deva[धर्मं चरति] → @deva[धार्मिकः] 'religious'.\n\n@note[type=vārtika]: @deva[अधर्मं चरति] → @deva[आधार्मिकः] 'irreligious'.",
                "advanced": "@deva[धर्म] (in @deva[द्वितीया]) takes @deva[ठक्] in sense @deva[चरति].\n\nExample: @deva[धार्मिकः].\n\n@note[type=vārtika]: @deva[अधर्मादपि] — @deva[आधार्मिकः] 'irreligious'."
            }
        },
        "44042": {
            "en": {
                "simple": "Both affixes @deva[ठन्] and @deva[ठक्] come after the word @deva[प्रतिपथ] in the accusative case, in the sense of 'one who goes'.\n\nExample: @deva[प्रतिपथम् एति] 'goes along the road' →\n- With @deva[ठन्]: @deva[प्रतिपथिकः] (no @deva[वृद्धि])\n- With @deva[ठक्]: @deva[प्रातिपथिकः] (@deva[वृद्धि] by @ref[7.2.118])",
                "standard": "After @deva[प्रतिपथ] (in @deva[द्वितीया]), both @deva[ठन्] and @deva[ठक्] apply in sense @deva[एति] (goes).\n\nExample: @deva[प्रतिपथम् एति] →\n- @deva[ठन्]: @deva[प्रतिपथिकः] (no @deva[वृद्धि])\n- @deva[ठक्]: @deva[प्रातिपथिकः] (@deva[वृद्धि] by @ref[7.2.118])",
                "advanced": "@deva[प्रतिपथ] (in @deva[द्वितीया]) takes @deva[ठन्] or @deva[ठक्] in sense @deva[एति].\n\n@deva[ठन्]: @deva[प्रतिपथिकः] (no @deva[वृद्धि]—@deva[न्] is @deva[इत्] but not @deva[ञित्]/[@deva[णित्])\n@deva[ठक्]: @deva[प्रातिपथिकः] (@deva[वृद्धि] by @ref[7.2.118])"
            }
        },
        "44043": {
            "en": {
                "simple": "Both affixes @deva[ठन्] and @deva[ठक्] come after words denoting 'combination/assembly' in the accusative case, in the sense of 'one who assembles there'.\n\nThe word @deva[समवाय] means 'combination, collection, assembly'.\n\nExamples:\n- @deva[समवायान् समवैति] 'joins assemblies' → @deva[सामवायिकः]\n- @deva[समाजं समवैति] → @deva[सामाजिकः]\n- @deva[समूहं समवैति] → @deva[सामूहिकः]\n- @deva[सन्निवेशं समवैति] → @deva[सान्निवेशिकः]\n\nThe plural @deva[समवायान्] in the sūtra indicates that @ref[1.1.69] (@deva[स्वरूपविधि]) does not apply—the affix applies to all synonyms of @deva[समवाय], not just that word.",
                "standard": "After @deva[समवायवाचिन्] (words denoting assembly) in @deva[द्वितीया], @deva[ठन्] and @deva[ठक्] apply in sense @deva[समवैति] (assembles).\n\nExamples: @deva[सामवायिकः], @deva[सामाजिकः], @deva[सामूहिकः], @deva[सान्निवेशिकः].\n\nThe plural @deva[समवायान्] blocks @ref[1.1.69]—affix applies to all @deva[समवायार्थक] words, not just @deva[समवाय].",
                "advanced": "After @deva[समवायवाचिन्] (in @deva[द्वितीया]), @deva[ठन्]/@deva[ठक्] in sense @deva[समवैति].\n\nExamples: @deva[सामवायिकः], @deva[सामाजिकः], @deva[सामूहिकः], @deva[सान्निवेशिकः].\n\nThe plural @deva[समवायान्] is @deva[स्वरूपविधिनिवृत्त्यर्थ]—by @ref[1.1.68], applies to @deva[तद्वाचिन्], not just @deva[स्वरूप]."
            }
        },
        "44044": {
            "en": {
                "simple": "The affix @deva[ण्य] (instead of @deva[ठक्]) comes after the word @deva[परिषद्] (council/assembly) in the sense of 'one who assembles there'.\n\nExample: @deva[परिषदं समवैति] 'assembles in a council' → @deva[पारिषद्यः] 'a councillor, an assessor'",
                "standard": "After @deva[परिषद्], @deva[ण्य] (not @deva[ठक्]) applies in sense @deva[समवैति].\n\nExample: @deva[परिषदं समवैति] → @deva[पारिषद्यः] 'councillor'.",
                "advanced": "@deva[परिषद्] takes @deva[ण्य] (not @deva[ठक्]) in sense @deva[समवैति].\n\nExample: @deva[पारिषद्यः].\n\n@deva[ण्य] = @deva[य] with @deva[वृद्धि] by @ref[7.2.117]."
            }
        },
        "44045": {
            "en": {
                "simple": "The affix @deva[ण्य] optionally comes after the word @deva[सेना] (army) in the sense of 'one who assembles there'. When @deva[ण्य] is not used, the regular @deva[ठक्] applies.\n\nExamples:\n- With @deva[ण्य]: @deva[सेनां समवैति] → @deva[सैन्यः] 'a soldier'\n- With @deva[ठक्]: @deva[सेनां समवैति] → @deva[सैनिकः] 'a soldier'",
                "standard": "After @deva[सेना], @deva[ण्य] optionally applies in sense @deva[समवैति]. Otherwise @deva[ठक्].\n\nExamples:\n- @deva[ण्य]: @deva[सैन्यः] 'soldier'\n- @deva[ठक्]: @deva[सैनिकः] 'soldier'",
                "advanced": "@deva[सेना] optionally takes @deva[ण्य] (otherwise @deva[ठक्]) in sense @deva[समवैति].\n\nExamples: @deva[सैन्यः] (by @deva[ण्य]), @deva[सैनिकः] (by @deva[ठक्])."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.4.31-45)")

if __name__ == "__main__":
    main()
