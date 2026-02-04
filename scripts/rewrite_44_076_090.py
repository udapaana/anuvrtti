#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 4.4.76-90."""

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
        "44076": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the words @deva[रथ] (chariot), @deva[युग] (yoke), and @deva[प्रासङ्ग] (training-yoke) in the accusative case, in the sense of 'what bears/carries that'.\n\nExamples:\n- @deva[रथं वहति] 'bears a chariot' → @deva[रथ्यः] 'a chariot-horse'\n- @deva[युगं वहति] 'bears a yoke' → @deva[युग्यः] 'a yoke-bearing ox'\n- @deva[प्रासङ्गं वहति] → @deva[प्रासङ्ग्यः] 'one being trained with a break'\n\n@deva[प्रासङ्ग] is a piece of wood placed on the neck of colts during training.\n\nThe rule applies to compounds ending in @deva[रथ]: @deva[परमरथ्यः].\n\nThe special mention here indicates that @deva[यत्] applies even after @deva[द्विगु] compounds without @deva[लुक्]-elision (@ref[4.1.88]): @deva[द्वौ रथौ वहति] → @deva[द्विरथ्यः].",
                "standard": "After @deva[रथ], @deva[युग], @deva[प्रासङ्ग] (in @deva[द्वितीया]), @deva[यत्] applies in sense @deva[वहति] (bears).\n\nExamples: @deva[रथ्यः] 'chariot-horse', @deva[युग्यः] 'yoke-ox', @deva[प्रासङ्ग्यः] (trained with break).\n\n@deva[प्रासङ्ग] = training-yoke for colts.\n\nRule applies to @deva[रथान्त] compounds: @deva[परमरथ्यः].\n\n@deva[तदन्तविधि] applies; no @deva[लुक्] by @ref[4.1.88]: @deva[द्विरथ्यः].\n\nSee also @ref[4.3.121], @ref[4.3.123]. @deva[युग्य] by @ref[3.1.121] differs in accent: @deva[अयुग्यम्] (final @deva[उदात्त] when by @deva[यत्] + @ref[6.2.156]).\n\n@deva[युग] here = chariot-part, not time-cycle.",
                "advanced": "@deva[रथ], @deva[युग], @deva[प्रासङ्ग] (in @deva[द्वितीया]) take @deva[यत्] in sense @deva[वहति].\n\nExamples: @deva[रथ्यः], @deva[युग्यः], @deva[प्रासङ्ग्यः].\n\n@deva[तदन्तविधि] applies (@ref[4.3.121]); no @deva[लुक्] by @ref[4.1.88]: @deva[द्विरथ्यः].\n\n@deva[युग्य] by @ref[3.1.121] (@deva[ल्यप्]) vs this @deva[यत्]: accent differs in @deva[नञ्]-compounds (@ref[6.2.156]): @deva[अयुग्यम्] (final acute by @deva[यत्]).\n\n@deva[युग] = @deva[रथावयव], not @deva[कालावच्छेद]."
            }
        },
        "44077": {
            "en": {
                "simple": "Both affixes @deva[यत्] and @deva[ढक्] come after the word @deva[धुर्] (pole/yoke) in the accusative case, in the sense of 'what bears that'.\n\nExamples:\n- With @deva[यत्]: @deva[धुरं वहति] → @deva[धुर्यः] 'a beast of burden' (lengthening by @ref[8.2.77] prevented by @ref[7.2.79] since @deva[धुर्] is a @deva[भ]-stem)\n- With @deva[ढक्]: @deva[धौरेयः] 'a beast of burden' (by @ref[7.1.2])\n\nNote: This sūtra could have been simply @deva[धुरो ढक् च], since @deva[यत्] carries over from @ref[4.4.75].",
                "standard": "After @deva[धुर्] (in @deva[द्वितीया]), @deva[यत्] and @deva[ढक्] apply in sense @deva[वहति].\n\nExamples:\n- @deva[यत्]: @deva[धुर्यः] (no lengthening: @ref[8.2.77] blocked by @ref[7.2.79], @deva[धुर्] being @deva[भ]-stem)\n- @deva[ढक्]: @deva[धौरेयः] (@ref[7.1.2])\n\nBoth mean 'beast of burden'.",
                "advanced": "@deva[धुर्] (in @deva[द्वितीया]) takes @deva[यत्] and @deva[ढक्] in sense @deva[वहति].\n\n@deva[यत्]: @deva[धुर्यः] (@deva[धुर्] is @deva[भसंज्ञक], so @ref[8.2.77] blocked by @ref[7.2.79]—no lengthening).\n@deva[ढक्]: @deva[धौरेयः] (@ref[7.1.2]).\n\nSūtra could be @deva[धुरो ढक् च], with @deva[यत्] from @ref[4.4.75]."
            }
        },
        "44078": {
            "en": {
                "simple": "The affix @deva[ख] comes after the word @deva[सर्वधुरा] (all yokes/all burdens) in the accusative case, in the sense of 'what bears that'.\n\nExample: @deva[सर्वधुरां वहति] → @deva[सर्वधुरीणः] 'one who bears all burdens' (by @ref[7.1.2])\n\nThe affix @deva[ख] applies to other compounds ending in @deva[धुर्]: @deva[उत्तरधुरीणः] 'bearing the right-side yoke', @deva[दक्षिणधुरीणः] 'bearing the left-side yoke'.\n\n@deva[सर्वधुर] is a compound of @deva[सर्व] + @deva[धुर्] (@ref[2.1.49]) with @deva[समासान्त] @deva[अ] by @ref[5.4.74]. Though @deva[धूः] is feminine, making the compound feminine by @ref[2.4.26], the sūtra's @deva[सर्वधुरात्] (masculine) doesn't regulate gender—it's the @deva[प्रातिपदिक].",
                "standard": "After @deva[सर्वधुरा] (in @deva[द्वितीया]), @deva[ख] applies in sense @deva[वहति].\n\nExample: @deva[सर्वधुरीणः] (@ref[7.1.2]) 'one who bears all burdens'.\n\n@deva[ख] extends to @deva[धुरन्त] compounds: @deva[उत्तरधुरीणः], @deva[दक्षिणधुरीणः].\n\n@deva[सर्वधुर] = @deva[सर्व] + @deva[धुर्] (@ref[2.1.49]) + @deva[समासान्त] @deva[अ] (@ref[5.4.74]). @deva[धूः] is feminine, so compound is feminine by @ref[2.4.26]. Sūtra's @deva[सर्वधुरात्] is @deva[प्रातिपदिकनिर्देश], not gender-specification.",
                "advanced": "@deva[सर्वधुरा] (in @deva[द्वितीया]) takes @deva[ख] in sense @deva[वहति].\n\nExample: @deva[सर्वधुरीणः].\n\n@deva[ख] applies to @deva[धुरन्त] compounds: @deva[उत्तरधुरीणः], @deva[दक्षिणधुरीणः].\n\n@deva[सर्वधुर]: @deva[सर्व] + @deva[धुर्] (@ref[2.1.49]) + @deva[समासान्त] @deva[अ] (@ref[5.4.74]). @deva[धूः] is @deva[स्त्रीलिङ्ग], compound @deva[स्त्रीलिङ्ग] by @ref[2.4.26]. @deva[सर्वधुरात्] is @deva[प्रातिपदिकनिर्देश]."
            }
        },
        "44079": {
            "en": {
                "simple": "The affix @deva[ख] optionally comes after the word @deva[एकधुरा] (single yoke) in the accusative case, in the sense of 'what bears that'. The affix can also be elided (@deva[लुक्]).\n\nExamples:\n- With @deva[ख]: @deva[एकधुरां वहति] → @deva[एकधुरीणः] 'one who bears a single yoke'\n- With @deva[लुक्]: @deva[एकधुरः] (affix elided)\n\nThe compound @deva[एकधुर] (@deva[एकां धुरं वहति]) takes @deva[समासान्त] @deva[अ], then optionally @deva[ख].",
                "standard": "After @deva[एकधुरा] (in @deva[द्वितीया]), @deva[ख] optionally applies in sense @deva[वहति]. Alternatively, @deva[लुक्]-elision.\n\nExamples: @deva[एकधुरीणः] (with @deva[ख]) or @deva[एकधुरः] (with @deva[लुक्]).\n\nCompounding: @deva[तद्धितार्थ] (@deva[एकां धुरं वहति]) + @deva[समासान्त] @deva[अ], then @deva[ख] (optionally elided).",
                "advanced": "@deva[एकधुरा] (in @deva[द्वितीया]) takes @deva[ख] optionally; alternatively @deva[लुक्].\n\nExamples: @deva[एकधुरीणः], @deva[एकधुरः].\n\nCompounding: @deva[तद्धितार्थसमास] (@deva[एकां धुरं वहति]) + @deva[समासान्त] @deva[अ] + @deva[ख] (optional @deva[लुक्])."
            }
        },
        "44080": {
            "en": {
                "simple": "The affix @deva[अण्] comes after the word @deva[शकट] (cart) in the accusative case, in the sense of 'what bears that'.\n\nExample: @deva[शकटं वहति] → @deva[शाकटः] 'a cart-ox'\n\nThis could also be derived by @ref[4.3.120] @deva[तस्येदम्] + @deva[अण्]: @deva[शाकटस्य वोढ] = @deva[शाकटः].\n\nThe specific mention indicates @deva[तदन्तविधि] applies: @deva[द्वे शकटे वहति] → @deva[द्वैशकटः], and @deva[लुक्] by @ref[4.1.88] doesn't apply.",
                "standard": "After @deva[शकट] (in @deva[द्वितीया]), @deva[अण्] applies in sense @deva[वहति].\n\nExample: @deva[शाकटः] 'cart-ox'.\n\nAlternatively derivable by @deva[तस्येदम्] (@ref[4.3.120]): @deva[शाकटस्य वोढ] = @deva[शाकटः].\n\nSpecification indicates @deva[तदन्तविधि] and no @deva[लुक्] (@ref[4.1.88]): @deva[द्वैशकटः].",
                "advanced": "@deva[शकट] (in @deva[द्वितीया]) takes @deva[अण्] in sense @deva[वहति].\n\nExample: @deva[शाकटः].\n\nAlternatively: @deva[तस्येदम्] @deva[अण्] (@ref[4.3.120]): @deva[शाकटस्य वोढ].\n\nSpecification: @deva[तदन्तविधि] applies; no @deva[लुक्] by @ref[4.1.88]: @deva[द्वैशकटः]."
            }
        },
        "44081": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after the words @deva[हल] (plough) and @deva[सीर] (ploughshare) in the accusative case, in the sense of 'what bears that'.\n\nExamples:\n- @deva[हलं वहति] → @deva[हालिकः] 'a ploughman'\n- @deva[सीरं वहति] → @deva[सैरिकः] 'a plough-ox'\n\n@deva[ठक्] could apply by @ref[4.3.124], but the specific mention indicates @deva[तदन्तविधि] and no @deva[लुक्]-elision: @deva[द्वैहालिकः], @deva[त्रैसैरिकः].",
                "standard": "After @deva[हल] and @deva[सीर] (in @deva[द्वितीया]), @deva[ठक्] applies in sense @deva[वहति].\n\nExamples: @deva[हालिकः] 'ploughman', @deva[सैरिकः] 'plough-ox'.\n\n@deva[ठक्] could come by @ref[4.3.124], but specification indicates @deva[तदन्तविधि] and no @deva[लुक्]: @deva[द्वैहालिकः], @deva[त्रैसैरिकः].",
                "advanced": "@deva[हल] and @deva[सीर] (in @deva[द्वितीया]) take @deva[ठक्] in sense @deva[वहति].\n\nExamples: @deva[हालिकः], @deva[सैरिकः].\n\n@deva[ठक्] available by @ref[4.3.124]; specification for @deva[तदन्तविधि] and no @deva[लुक्]: @deva[द्वैहालिकः], @deva[त्रैसैरिकः]."
            }
        },
        "44082": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[जनी] (bride) in the accusative case, in the sense of 'what bears that'. The resulting word is used as a name.\n\nExample: @deva[जनीं वहति] 'bears the bride' → @deva[जन्यः] 'friend of the bridegroom', f. @deva[जन्या] 'bridesmaid'\n\n@deva[जन्या] literally means 'one who carries the shy bride to the bridegroom'—at the time of ceremonial play, etc.",
                "standard": "After @deva[जनी] (in @deva[द्वितीया]), @deva[यत्] applies in sense @deva[वहति]. Result is a @deva[संज्ञा].\n\nExample: @deva[जन्यः] 'bridegroom's friend', f. @deva[जन्या] 'bridesmaid'.\n\n@deva[जनी] = bride. @deva[जन्या] = 'one who bears/leads the bride' (at ceremonial play, etc.).",
                "advanced": "@deva[जनी] (in @deva[द्वितीया]) takes @deva[यत्] in sense @deva[वहति]. @deva[संज्ञायाम्].\n\nExample: @deva[जन्यः] f. @deva[जन्या].\n\n@deva[जनी] = @deva[वधू]. @deva[जन्या] = one who carries the bride (@deva[क्रीडाकाले])."
            }
        },
        "44083": {
            "en": {
                "simple": "The affix @deva[यत्] comes after a word in the accusative case in the sense of 'what pierces that'—but only when the piercing is not done with a bow.\n\nExamples:\n- @deva[पादौ विध्यन्ति] 'pierce the feet' → @deva[पद्याः शर्कराः] 'pebbles' (by @ref[6.3.53])\n- @deva[ऊरू विध्यन्ति] → @deva[ऊरव्याः कण्टकाः] 'thorns that pierce the thigh'\n\nThe condition @deva[अधनुषा] (not with a bow) excludes: @deva[पादौ विध्यति धनुषा] → no affix.\n\nThis restriction indicates the piercing must be natural, not by weapon. Therefore no affix in @deva[चौरं विध्यति], @deva[शत्रुं विध्यति].",
                "standard": "After a @deva[द्वितीयान्त] word, @deva[यत्] applies in sense @deva[विध्यति] (pierces)—excluding bow-piercing (@deva[अधनुषा]).\n\nExamples: @deva[पद्याः शर्कराः] (@ref[6.3.53]) 'foot-piercing pebbles', @deva[ऊरव्याः कण्टकाः] 'thigh-piercing thorns'.\n\nCondition @deva[अधनुषा]: excludes @deva[पादौ विध्यति धनुषा]. This excludes weapon-piercing generally: no affix for @deva[चौरं विध्यति], @deva[शत्रुं विध्यति].",
                "advanced": "After @deva[द्वितीयान्त], @deva[यत्] in sense @deva[विध्यति] (@deva[अधनुषा]).\n\nExamples: @deva[पद्याः शर्कराः] (@ref[6.3.53]), @deva[ऊरव्याः कण्टकाः].\n\n@deva[अधनुषा]: excludes bow-piercing; by extension, excludes weapon-piercing (@deva[चौरं विध्यति], etc.)."
            }
        },
        "44084": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the words @deva[धन] (wealth) and @deva[गण] (group) in the accusative case, in the sense of 'one who obtains that'.\n\nExamples:\n- @deva[धनं लब्धा] 'one who obtains wealth' → @deva[धन्यः] 'fortunate, wealthy'\n- @deva[गणं लब्धा] → @deva[गण्यः] 'one who has obtained a group; distinguished'\n\n@deva[लब्धृ] (from √@deva[लभ्] + @deva[तृन्]) takes accusative case.",
                "standard": "After @deva[धन] and @deva[गण] (in @deva[द्वितीया]), @deva[यत्] applies in sense @deva[लब्धा] (obtainer).\n\nExamples: @deva[धन्यः] 'fortunate', @deva[गण्यः] 'distinguished'.\n\n@deva[लब्धृ] = √@deva[लभ्] + @deva[तृन्] (takes @deva[द्वितीया]).",
                "advanced": "@deva[धन] and @deva[गण] (in @deva[द्वितीया]) take @deva[यत्] in sense @deva[लब्धा].\n\nExamples: @deva[धन्यः], @deva[गण्यः].\n\n@deva[लब्धृ] = √@deva[लभ्] + @deva[तृन्] (@deva[द्वितीयाकर्मक])."
            }
        },
        "44085": {
            "en": {
                "simple": "The affix @deva[ण] comes after the word @deva[अन्न] (food) in the accusative case, in the sense of 'one who obtains that'.\n\nExample: @deva[अन्नं लब्धा] 'one who has obtained food' → @deva[आन्नः] 'fed, one who has received food'",
                "standard": "After @deva[अन्न] (in @deva[द्वितीया]), @deva[ण] applies in sense @deva[लब्धा].\n\nExample: @deva[आन्नः] 'fed, one who has obtained food'.",
                "advanced": "@deva[अन्न] (in @deva[द्वितीया]) takes @deva[ण] in sense @deva[लब्धा].\n\nExample: @deva[आन्नः]."
            }
        },
        "44086": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[वश] (control/will) in the accusative case, in the sense of 'gone to that'.\n\nExample: @deva[वशं गतः] 'gone under control' → @deva[वश्यः] 'subdued, under control; a dependant, servant'\n\n@deva[वश] = @deva[काम], @deva[इच्छा] (desire, will). @deva[वश्यः] = @deva[परेच्छानुगामी] 'one who follows another's will'.",
                "standard": "After @deva[वश] (in @deva[द्वितीया]), @deva[यत्] applies in sense @deva[गतः].\n\nExample: @deva[वशं गतः] → @deva[वश्यः] 'subdued, dependant'.\n\n@deva[वश] = @deva[काम]/[@deva[इच्छा]. @deva[वश्यः] = @deva[परेच्छानुगामी].",
                "advanced": "@deva[वश] (in @deva[द्वितीया]) takes @deva[यत्] in sense @deva[गतः].\n\nExample: @deva[वश्यः].\n\n@deva[वश] = @deva[इच्छा]. @deva[वश्यः] = @deva[तां प्राप्तः], @deva[परेच्छानुगामी]."
            }
        },
        "44087": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[पद] (foot/footprint) in the nominative case, in the sense of 'that in which it is visible'.\n\nExample: @deva[पदं दृश्यम् अस्मिन्] 'footprint is visible in this' → @deva[पद्यः कर्दमः] 'mud (in which footprints can be seen)'\n\nAlso: @deva[पद्याः पांसवः] 'dust (showing footprints)', @deva[पद्यः] 'footpath'\n\n@deva[पद्य] describes mud that is neither too hard nor too fluid—having enough consistency to show footprints.\n\n@deva[दृश्यम्] = @deva[शक्यते द्रष्टुम्] (can be seen), with @deva[कृत्य] affix @deva[य] on √@deva[दृश्].",
                "standard": "After @deva[पद] (in @deva[प्रथमा]), @deva[यत्] applies in sense @deva[दृश्यम् अस्मिन्] (visible in it).\n\nExamples: @deva[पद्यः कर्दमः] 'mud showing footprints', @deva[पद्याः पांसवः] 'footprint-showing dust', @deva[पद्यः] 'footpath'.\n\n@deva[पद्य] = mud of medium consistency (neither hard nor fluid).\n\n@deva[दृश्यम्] = @deva[शक्यते द्रष्टुम्] (@deva[कृत्य] sense).",
                "advanced": "@deva[पद] (in @deva[प्रथमा]) takes @deva[यत्] in sense @deva[दृश्यम् अस्मिन्].\n\nExamples: @deva[पद्यः कर्दमः], @deva[पद्याः पांसवः], @deva[पद्यः] (footpath).\n\n@deva[दृश्यम्] = @deva[शक्यते द्रष्टुम्] (@deva[कृत्य]-@deva[यत्])."
            }
        },
        "44088": {
            "en": {
                "simple": "The affix @deva[यत्] comes after the word @deva[मूल] (root) in the nominative case, in the sense of 'that whose root is pulled up'.\n\nThe word @deva[आबर्हि] (from √@deva[बृह्] 'to uproot') means 'uprooting'.\n\nExample: @deva[मूलम् एषाम् आबर्हि] 'their root is pulled up' → @deva[मूल्याः] 'a kind of pulse' (e.g., @deva[माषाः], @deva[मुद्गाः])\n\nThese are cereals that cannot be harvested without uprooting the whole plant.\n\nNote: According to @deva[पदमञ्जरी], the word should be @deva[आवर्हि] (with @deva[व]), not @deva[आबर्हि] (with @deva[ब]).",
                "standard": "After @deva[मूल] (in @deva[प्रथमा]), @deva[यत्] applies in sense @deva[आबर्हि] (uprooted).\n\n@deva[आबर्हि] = @deva[उत्पाटनम्] (from √@deva[बृह्]).\n\nExample: @deva[मूलम् एषाम् आबर्हि] → @deva[मूल्याः] 'pulse' (@deva[माषाः], @deva[मुद्गाः])—cereals requiring uprooting.\n\n@deva[पदमञ्जरी]: @deva[आवर्हि] (with @deva[व]), not @deva[आबर्हि].",
                "advanced": "@deva[मूल] (in @deva[प्रथमा]) takes @deva[यत्] in sense @deva[आबर्हि].\n\n@deva[आबर्हि] = @deva[उत्पाटनम्] (√@deva[वृहू]).\n\nExample: @deva[मूल्याः] (@deva[माषाः], @deva[मुद्गाः]).\n\n@deva[पदमञ्जरी]: @deva[आवर्हि] preferred over @deva[आबर्हि]."
            }
        },
        "44089": {
            "en": {
                "simple": "The word @deva[धेनुष्या] is an irregular formation used as a name.\n\nIt is formed by adding @deva[षुक्] and @deva[य] to @deva[धेनु] (milk-cow). The word has @deva[उदात्त] on the final syllable.\n\n@deva[धेनुष्या] means a cow given to a creditor in discharge of a debt, or as a pledge—the creditor being satisfied from her milk. It is also called @deva[पीतदुग्धा] (one whose milk has been drunk).\n\nUsage: @deva[धेनुष्यां भवते ददामि] 'I give you a @deva[धेनुष्या]'.",
                "standard": "@deva[धेनुष्या] is a @deva[निपातन] (irregular formation), used as @deva[संज्ञा].\n\nFormation: @deva[धेनु] + @deva[षुक्] + @deva[य]. Final @deva[उदात्त].\n\nMeaning: Cow given to creditor as debt-pledge, creditor taking her milk as payment. = @deva[पीतदुग्धा].\n\nUsage: @deva[धेनुष्यां भवते ददामि].",
                "advanced": "@deva[धेनुष्या]: @deva[निपातन], @deva[संज्ञायाम्].\n\nFormation: @deva[धेनु] + @deva[षुक्] + @deva[य]. @deva[अन्तोदात्त].\n\nMeaning: @deva[पीतदुग्धा]—cow pledged to creditor for milk.\n\nUsage: @deva[धेनुष्यां भवते ददामि]."
            }
        },
        "44090": {
            "en": {
                "simple": "The affix @deva[ञ्य] comes after the word @deva[गृहपति] (householder) in the instrumental case, in the sense of 'joined with that'.\n\nExample: @deva[गृहपतिना संयुक्तः] 'joined with the householder' → @deva[गार्हपत्यः] 'the Gārhapatya Fire'\n\nThe @deva[गार्हपत्य] fire is a sacred fire particularly consecrated by the householder. The word @deva[संज्ञायाम्] from the previous sūtra applies—@deva[गार्हपत्य] is a specific name for a particular fire, not everything relating to a @deva[गृहपति].\n\nThe fire in which a householder (@deva[गृहपति]), together with his wife, performs sacrifice is called @deva[गार्हपत्य]. Alternatively, a fire in which @deva[गृहपति]-hymns are recited.",
                "standard": "After @deva[गृहपति] (in @deva[तृतीया]), @deva[ञ्य] applies in sense @deva[संयुक्तः] (joined with). @deva[संज्ञायाम्].\n\nExample: @deva[गृहपतिना संयुक्तः] → @deva[गार्हपत्यः] 'Gārhapatya Fire'.\n\n@deva[गार्हपत्य] = specific @deva[अग्नि] consecrated by @deva[गृहपति], not general 'relating to @deva[गृहपति]'.\n\nMeaning: Fire in which @deva[गृहपति] with wife (@deva[संयुक्त]) performs @deva[यज्ञ]; or fire for @deva[गृहपति]-@deva[मन्त्र]s. Cannot use @deva[दक्षिणाग्नि] for this.",
                "advanced": "@deva[गृहपति] (in @deva[तृतीया]) takes @deva[ञ्य] in sense @deva[संयुक्तः]. @deva[संज्ञायाम्].\n\nExample: @deva[गार्हपत्यः] (specific @deva[अग्निसंज्ञा]).\n\nMeaning: @deva[अग्नि] in which @deva[गृहपति] + @deva[पत्नी] perform @deva[यज्ञ]; or @deva[गृहपतिमन्त्राध्ययनाग्नि]. Not @deva[दक्षिणाग्नि]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.4.76-90)")

if __name__ == "__main__":
    main()
