#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.4.61-75."""

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
        "54061": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to @deva[सपत्र] (with feathers) and @deva[निष्पत्र] (through and through) with verb @deva[कृ] when meaning 'to cause intense pain.' Example: @deva[सपत्रा करोति मृगम्] (pierces the deer so deeply that even the arrow's feathers enter).",
                "standard": "This sūtra prescribes @deva[डाच्] after @deva[सपत्र] and @deva[निष्पत्र] with @deva[कृ] when expressing @deva[अतिव्यथन] (violent pain). Thus @deva[सपत्रा करोति मृगं व्याधः] = @deva[सपत्रं शरमस्य शरीरे प्रवेशयति] (the hunter pierces so violently that the feathered part of the arrow enters the body). @deva[निष्पत्रा करोति] = @deva[शरीरात् शरमपरपार्श्वे निष्क्रामयति] (pierces so that the arrow exits the other side with its feathers). Without this meaning: @deva[सपत्रं वृक्षं करोति] (makes the tree leafy) or @deva[निष्पत्रं वृक्षतलं करोति] (clears the leaves from tree-base).",
                "advanced": "The semantic condition @deva[अतिव्यथन] (causing intense pain) specifically refers to the violence of arrow-piercing where the depth of penetration is emphasized. @deva[सपत्र] indicates the feathered fletching entering along with the arrowhead; @deva[निष्पत्र] indicates complete penetration and exit. The counter-examples with trees show the literal meanings 'leafy' and 'leafless' where @deva[डाच्] doesn't apply."
            }
        },
        "54062": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to @deva[निष्कुल] with verb @deva[कृ] when meaning 'to disembowel' or 'to extract the inner contents.' Examples: @deva[निष्कुला करोति पशून्] (disembowels animals), @deva[निष्कुला करोति दाडिमम्] (extracts pomegranate seeds).",
                "standard": "This sūtra prescribes @deva[डाच्] after @deva[निष्कुल] with @deva[कृ] when the meaning is @deva[निष्कोषण] (extracting inner organs or contents). Thus @deva[निष्कुला करोति पशून्] means disemboweling or gutting animals. Similarly @deva[निष्कुला करोति दाडिमम्] means extracting the seeds or kernel of a pomegranate. The condition is essential: @deva[निष्कुलान् करोति शत्रून्] (makes enemies family-less) doesn't take the affix because it means destroying families, not extracting contents.",
                "advanced": "The term @deva[निष्कोषण] covers both literal evisceration (of animals) and metaphorical extraction (of seeds from fruit). The @deva[कुल] element here relates to 'inner contents' or 'core' rather than 'family.' When @deva[निष्कुल] means 'family-less' (in social/genealogical sense), the @deva[डाच्] transformation is blocked. This semantic distinction parallels similar conditions in preceding sūtras."
            }
        },
        "54063": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to @deva[सुख] (pleasure) and @deva[प्रिय] (dear) with verb @deva[कृ] when meaning 'to please' or 'to gratify.' Example: @deva[सुखा करोति स्वामिन्] = @deva[स्वामिनः चित्तम् आराधयति] (tries to please the master's heart).",
                "standard": "This sūtra prescribes @deva[डाच्] after @deva[सुख] and @deva[प्रिय] with @deva[कृ] when expressing @deva[आनुलोम्य] (going with the grain, conforming to another's wishes). Thus @deva[सुखा करोति] or @deva[प्रिया करोति स्वामिन्] = @deva[स्वाम्यादेः चित्तम् आराधयति] (tries to please the master's heart). The affix applies when the pleasant act aims to gratify another. Without this intent: @deva[सुखं करोति औषधपानम्] (drinking medicine gives pleasure) or @deva[प्रियं करोति] (does something pleasant)—the affix doesn't apply.",
                "advanced": "The term @deva[आनुलोम्य] (lit. 'going with the hair/grain') denotes conforming to wishes, pleasing, or ingratiating behavior. The semantic condition distinguishes intentional gratification of another (@deva[सुखा/प्रिया करोति]) from actions that merely produce pleasure (@deva[सुखं/प्रियं करोति]). The former implies agency directed at pleasing someone; the latter describes the effect of an action."
            }
        },
        "54064": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to @deva[दुःख] (pain) with verb @deva[कृ] when meaning 'to displease' or 'to act against another's wishes.' Example: @deva[दुःखा करोति भृत्यः] (the servant displeases/pains the master).",
                "standard": "This sūtra prescribes @deva[डाच्] after @deva[दुःख] with @deva[कृ] when expressing @deva[प्रातिलोम्य] (going against the grain, opposing another's wishes). Thus @deva[दुःखा करोति भृत्यः] means the servant pains or displeases the master. The condition requires intentional opposition or causing displeasure. Without this meaning: @deva[दुःखं करोति कदन्नम्] (bad food causes pain)—the affix doesn't apply because it describes an effect, not intentional opposition.",
                "advanced": "The term @deva[प्रातिलोम्य] (lit. 'against the hair/grain') is the opposite of @deva[आनुलोम्य] from the previous sūtra. It denotes acting contrary to wishes, causing displeasure, or opposition. The distinction parallels @ref[5.4.63]: @deva[दुःखा करोति] implies intentional causing of displeasure, while @deva[दुःखं करोति] merely describes pain as a result."
            }
        },
        "54065": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to @deva[शूल] (spit) with verb @deva[कृ] when meaning 'to roast.' Example: @deva[शूला करोति मांसम्] = @deva[शूले पचति] (roasts meat on a spit).",
                "standard": "This sūtra prescribes @deva[डाच्] after @deva[शूल] with @deva[कृ] when expressing roasting on a spit. Thus @deva[शूले पचति] = @deva[शूला करोति मांसम्] (roasts meat on a spit). The semantic condition requires the cooking/roasting meaning. Without this: @deva[शूलं करोति कदन्नम्] (bad food causes colic)—here @deva[शूल] means 'sharp pain/colic' and the affix doesn't apply.",
                "advanced": "The word @deva[शूल] has two meanings: (1) a pointed stake or spit for roasting, and (2) sharp/stabbing pain (colic). The @deva[डाच्] affix applies only when the roasting-instrument sense is intended. The transformation @deva[शूले पचति] → @deva[शूला करोति] incorporates the locative into a verbal compound. The counter-example shows @deva[शूल] as 'colic' where @deva[कदन्न] (bad food) is the cause."
            }
        },
        "54066": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to @deva[सत्य] (truth) with verb @deva[कृ] when NOT meaning 'to swear.' Example: @deva[सत्या करोति वणिक् भाण्डम्] (the merchant finalizes the bargain/settles the purchase).",
                "standard": "This sūtra prescribes @deva[डाच्] after @deva[सत्य] with @deva[कृ] when the meaning is NOT swearing (@deva[अशपथे]). Thus @deva[सत्या करोति वणिक् भाण्डम्] means the merchant concludes or finalizes the bargain—settling that he will purchase. The swearing sense (as in @deva[सत्येन शापयेत् विप्रम्], 'one should make a Brahmin swear by truth') is excluded. When meaning 'to swear': @deva[सत्यं करोति ब्राह्मणः] (the Brahmin swears)—no affix.",
                "advanced": "The prohibition @deva[अशपथे] excludes oath-taking (@deva[शपथ]) from this rule. @deva[सत्या करोति] in commercial contexts means 'to make true/final'—confirming a transaction. The verb @deva[शप्] (to curse/swear) is semantically connected to @deva[सत्य] in oath-contexts, but this rule specifically excludes that usage. The counter-example @deva[सत्यं करोति ब्राह्मणः] shows the swearing sense."
            }
        },
        "54067": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to @deva[मद्र] (auspicious) with verb @deva[कृ] when meaning 'to shave' (on an auspicious occasion). Example: @deva[मद्रा करोति] = @deva[मङ्गलं मुण्डनं करोति] (performs auspicious head-shaving).",
                "standard": "This sūtra prescribes @deva[डाच्] after @deva[मद्र] with @deva[कृ] when meaning @deva[परिवापण] (shaving). @deva[मद्र] means 'auspicious.' Thus @deva[मद्रा करोति] = @deva[मङ्गलं मुण्डनं करोति] (performs auspicious head-shaving, as for a child's first haircut). A vārttika extends this to @deva[भद्र]: @deva[भद्रा करोति नापितं कुमारम्] (the barber shaves the boy's hair on the auspicious occasion). Without the shaving meaning: @deva[मद्रं करोति] or @deva[भद्रं करोति] (makes auspicious)—no affix.",
                "advanced": "The term @deva[परिवापण] specifically means ritual shaving or tonsure. Both @deva[मद्र] and @deva[भद्र] mean 'auspicious,' and the vārttika's extension of @deva[भद्र] suggests lexical synonymy in this context. The ritual context—ceremonial first haircut (@deva[चूडाकरण]) or other auspicious shaving—triggers the affix. General auspiciousness without the shaving sense doesn't qualify."
            }
        },
        "54068": {
            "en": {
                "simple": "This sūtra begins the section on @deva[समासान्त] (compound-final) affixes. These affixes are added to the end of compounds without changing their meaning.",
                "standard": "This is an @deva[अधिकार] (governing) sūtra that extends to the end of this chapter. It teaches that certain affixes become the final portion of compounds (@deva[समासान्त]). These affixes complete the formation of Avyayībhāva, Dvigu, Dvandva, Tatpuruṣa, and Bahuvrīhi compounds. Example: @deva[उप] + @deva[राजन्] = @deva[उपराजन्]; adding @deva[डच्] (@ref[5.4.108]) gives @deva[उपराज], then @deva[अम्] (@ref[2.4.83]) yields @deva[उपराजम्]. Similarly @deva[द्विपुरी], @deva[त्रिपुरी] (with @deva[अ] by @ref[5.4.74], then @deva[ङीप्] by @ref[4.1.21]).",
                "advanced": "The term @deva[समासान्त] ('compound-final') indicates these affixes complete compound formation—without them, technical designations like Avyayībhāva or Dvigu don't fully apply. The word @deva[अन्त] in the sūtra specifies that when rules mention compound types, they presuppose the samāsānta affix is already added. Thus @ref[4.1.21] (feminine @deva[ई] for Dvigu in @deva[अ]) applies to @deva[द्विधुरः] (already having @deva[अ] from @ref[5.4.74]), not to bare @deva[द्विधुर्] which ends in @deva[र्]. Examples span all compound types: Tatpuruṣa @deva[विधुरः], @deva[प्रधुरः]; Bahuvrīhi @deva[उचैर्धुरः], @deva[नीचैर्धुरः] with appropriate accent patterns."
            }
        },
        "54069": {
            "en": {
                "simple": "The @deva[समासान्त] affixes are NOT added when the first member of the compound is a word of praise like @deva[सु] or @deva[अति]. Examples: @deva[सुराजा] (not @deva[सुराजः]), @deva[अतिराजा], @deva[सुगौः], @deva[अतिगौः].",
                "standard": "This sūtra prohibits @deva[समासान्त] affixes when the first compound member expresses praise. Thus @deva[महा] + @deva[राजन्] = @deva[महाराजः] (with @deva[टच्] by @ref[5.4.91]), but @deva[सु] + @deva[राजन्] = @deva[सुराजा] (no affix). Similarly @deva[अतिराजा], @deva[सुगौः], @deva[अतिगौः]. A vārttika specifies that only @deva[सु] and @deva[अति] trigger this prohibition—not other praise words: @deva[परमराजः], @deva[परमगवः] take the affix. Another vārttika limits this prohibition to sūtras through @ref[5.4.113] exclusive: @deva[सुसक्थः], @deva[अतिसक्थः], @deva[स्वक्षः], @deva[अत्यक्षः] (with @deva[पच्] from @ref[5.4.113]) are allowed.",
                "advanced": "The praise-word restriction is narrowly defined by vārttika to @deva[सु] and @deva[अति] specifically. The scope limitation (@deva[त्रयोदशावर्जं] 'excluding @ref[5.4.113]') means the @deva[पच्] affix of @ref[5.4.113] is immune to this prohibition. This technical precision prevents over-application of the prohibition while maintaining the special status of @deva[सु] and @deva[अति] as markers of excellence that block samāsānta."
            }
        },
        "54070": {
            "en": {
                "simple": "The @deva[समासान्त] affixes are NOT added when @deva[किम्] precedes the compound in the sense of reproach. Examples: @deva[किंराजा] (what kind of king is he who doesn't protect?), @deva[किंसखा], @deva[किंगौः].",
                "standard": "This sūtra prohibits @deva[समासान्त] when @deva[किम्] precedes with @deva[निन्दा] (reproach) meaning. Thus @deva[किंराजा यो न रक्षति] (he's no king who doesn't protect), @deva[किंसखा योऽभिद्रुह्यति] (he's no friend who betrays), @deva[किंगौर्यो न वहति] (it's no ox that doesn't bear burdens). Compounding follows @ref[2.1.64]. The reproach sense is essential: @deva[कस्य राजा] = @deva[किंराजः] (whose king?), @deva[किंसखः], @deva[किंगवः]—interrogative sense without reproach takes the affix.",
                "advanced": "The semantic condition @deva[निन्दायाम्] distinguishes reproachful @deva[किम्] ('what kind of X is this?!' = 'this is no X') from interrogative @deva[किम्] ('whose X?'). The reproachful construction denies the very designation: @deva[किंराजा] rhetorically questions whether the person deserves to be called @deva[राजन्]. When @deva[किम्] is genuinely interrogative (asking 'whose?'), the samāsānta affix applies normally."
            }
        },
        "54071": {
            "en": {
                "simple": "The @deva[समासान्त] affixes are NOT added when the negative @deva[नञ्] precedes a Tatpuruṣa compound of @deva[राजन्] and similar words. Examples: @deva[अराजा], @deva[असखा], @deva[अगौः].",
                "standard": "This sūtra prohibits @deva[समासान्त] in Tatpuruṣa compounds where @deva[नञ्] (negative particle) precedes words like @deva[राजन्]. Thus @deva[अराजा] (not @deva[अराजः]), @deva[असखा], @deva[अगौः]. The restriction applies only to Tatpuruṣa: in other compound types, the affix applies. Examples: @deva[अनृचः मानवकः] (a boy who hasn't studied the Ṛg Veda)—here @deva[अनृच] is Bahuvrīhi and takes the affix by @ref[5.4.74]. Similarly @deva[अधुरं शकटम्] (a cart without a yoke-pole).",
                "advanced": "The Tatpuruṣa restriction is significant: @deva[न] + @deva[राजन्] as Tatpuruṣa (meaning 'non-king') doesn't take samāsānta, yielding @deva[अराजा]. But the same elements in Bahuvrīhi ('that which lacks a king' or 'one without X') do take the affix. The examples @deva[अनृचः] and @deva[अधुरम्] show @ref[5.4.74] applying in non-Tatpuruṣa contexts despite the negative prefix."
            }
        },
        "54072": {
            "en": {
                "simple": "For @deva[पथिन्] (path) preceded by @deva[नञ्] in a Tatpuruṣa compound, the @deva[समासान्त] affix is OPTIONAL. Results: @deva[अपथम्] or @deva[अपन्थाः].",
                "standard": "This sūtra provides an option where the previous rule would have required omission. For @deva[न] + @deva[पथिन्] in Tatpuruṣa, both forms are allowed: @deva[अपथम्] (with @deva[अ] by @ref[5.4.74]) or @deva[अपन्थाः] (without the affix, showing the @deva[नञ्]-Tatpuruṣa form by @ref[2.4.30]). This is an exception to the categorical prohibition in @ref[5.4.71].",
                "advanced": "The @deva[विभाषा] (option) here creates a paradigm where @deva[अपथम्] shows the samāsānta @deva[अ] applied (@ref[5.4.74]), while @deva[अपन्थाः] shows the bare stem-form preserved per @ref[2.4.30] (which teaches stem-forms of @deva[पथिन्] in compounds). Both are grammatically valid for @deva[न] + @deva[पथिन्] Tatpuruṣa, unlike @deva[राजन्] etc. where @ref[5.4.71] categorically blocks the affix."
            }
        },
        "54073": {
            "en": {
                "simple": "The affix @deva[डाच्] is added to Bahuvrīhi compounds denoting numerals, EXCEPT when the final term is @deva[बहु] or @deva[गण]. Examples: @deva[उपदशाः], @deva[उपविंशाः], @deva[द्वित्राः], @deva[पञ्चषाः]. But: @deva[उपबहवः], @deva[उपगणाः].",
                "standard": "This sūtra prescribes @deva[डाच्] after Bahuvrīhi compounds with numeral meaning, formed per @ref[2.2.25]. Examples: @deva[उपदशाः], @deva[उपविंशाः], @deva[उपत्रिंशाः], @deva[आसप्तदशाः], @deva[अदूरदशाः], @deva[अधिकदशाः], @deva[द्वित्राः], @deva[पञ्चषाः], @deva[पञ्चदशाः]. The exceptions @deva[बहु] and @deva[गण] don't take @deva[डाच्]: @deva[उपबहवः], @deva[उपगणाः] (accent falls on first member, not final). Non-numeral Bahuvrīhis don't qualify: @deva[चित्रगुः], @deva[शबलगुः]. A vārttika extends @deva[डाच्] to Tatpuruṣa numerals like @deva[निस्त्रिंश]: @deva[निस्त्रिंशानि वर्षाणि] (more than thirty years).",
                "advanced": "The @deva[संख्या] (numeral) condition limits this to compounds with numerical meaning. The @deva[बहु]/deva[गण] exception reflects that these general quantity words don't pattern like specific numerals. The vārttika extending to Tatpuruṣa numerals (@deva[निस्त्रिंश]) shows the semantic principle: expressing 'more than X' or 'approximately X' with numerals triggers @deva[डाच्] regardless of compound type. The accent difference in @deva[उपगणाः] (first-member accent) vs. @deva[उपदशाः] (final accent from @deva[डाच्]) is diagnostically significant."
            }
        },
        "54074": {
            "en": {
                "simple": "The affix @deva[अ] is added to @deva[ऋच्], @deva[पुर्], @deva[अप्], @deva[धुर्], and @deva[पथिन्] when they are final in a compound—but not to @deva[धुर्] when combined with @deva[अक्ष]. Examples: @deva[बह्वृचः], @deva[ललाटपुरम्], @deva[द्वीपम्], @deva[राजधुरा], @deva[जलपथः].",
                "standard": "This sūtra prescribes samāsānta @deva[अ] after five words in compound-final position. @deva[ऋच्]: @deva[अनृचः], @deva[बह्वृचः], @deva[अर्द्धर्चः]. @deva[पुर्]: @deva[ललाटपुरम्], @deva[नान्दीपुरम्]. @deva[अप्]: @deva[द्वीपम्] (from @deva[द्वि] + @deva[अप्], with @deva[ई] by @ref[6.3.97]), @deva[अन्तरीपम्], @deva[समीपम्]. @deva[धुर्]: @deva[राजधुरा], @deva[महाधुरा]. @deva[पथिन्]: @deva[जलपथः]. Exception: @deva[अक्ष] + @deva[धुर्] = @deva[अक्षधूः] (not @deva[अक्षधुरा]), @deva[दृढधूरक्षः]. Note: @deva[अनृचः]/deva[बह्वृचः] apply to Ṛg Veda students; for Vedic text reference, no affix: @deva[अनृक् साम], @deva[बह्वृक् सूक्तम्].",
                "advanced": "The @deva[अनक्षे] condition specifically restricts @deva[धुर्]—the axle-element in @deva[अक्षधूः] blocks samāsānta. The @deva[ऋच्] restriction (students vs. Vedic texts) shows semantic differentiation: @deva[बह्वृचः] for a person who has studied many Ṛk verses, but @deva[बह्वृक् सूक्तम्] for a hymn with many verses. This sūtra applies to all compound types, not just Bahuvrīhi (unlike @ref[5.4.73])."
            }
        },
        "54075": {
            "en": {
                "simple": "The affix @deva[अच्] is added to @deva[सामन्] (Sāman) and @deva[लोमन्] (hair) when preceded by @deva[प्रति], @deva[अनु], or @deva[अव]. Examples: @deva[प्रतिसामम्], @deva[अनुसामम्], @deva[अवसामम्], @deva[प्रतिलोमम्], @deva[अनुलोमम्], @deva[अवलोमम्].",
                "standard": "This sūtra prescribes @deva[अच्] after @deva[सामन्] and @deva[लोमन्] when the prefixes @deva[प्रति], @deva[अनु], or @deva[अव] precede. Thus @deva[प्रतिसामम्], @deva[अनुसामम्], @deva[अवसामम्]; @deva[प्रतिलोमम्], @deva[अनुलोमम्], @deva[अवलोमम्]. Vārttikas extend @deva[अच्] to: (1) @deva[भूमि] after @deva[कृष्ण], @deva[उदक्], @deva[पाण्डु]: @deva[कृष्णभूमः], @deva[पाण्डुभूमः], @deva[उदग्भूमः]; (2) @deva[गोदावरी] and @deva[नदी] after numerals: @deva[पञ्चनदम्], @deva[सप्तगोदावरम्]; (3) @deva[भूमि] after numerals: @deva[द्विभूमः प्रासादः], @deva[त्रिभूमः]; (4) other words: @deva[पद्मनाभः], @deva[ऊर्णनाभः], @deva[समरात्रः], @deva[दीर्घरात्रः], @deva[अरात्रः].",
                "advanced": "The vārttikas significantly expand this sūtra's scope. The final note suggests the sūtra can be split: (1) @deva[अच्] as a general samāsānta, and (2) the specific @deva[प्रत्यन्वव] + @deva[सामन्]/deva[लोमन्] condition. This interpretation allows @deva[अच्] after compounds like @deva[नाभि] → @deva[पद्मनाभः] and @deva[रात्रि] → @deva[समरात्रः]. The directional terms @deva[अनुलोम] (with the grain) and @deva[प्रतिलोम] (against the grain) are semantically productive formations."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.4.61-75)")

if __name__ == "__main__":
    main()
