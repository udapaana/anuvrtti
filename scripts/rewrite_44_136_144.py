#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 4.4.136-144."""

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
        "44136": {
            "en": {
                "simple": "The affix @deva[घ] is added to @deva[सहस्र] in Vedic usage with the meaning 'possessing'. @deva[सहस्र] + @deva[घ] → @deva[सहस्रियः] 'possessing a thousand'.",
                "standard": "In the @deva[छन्दस्], the affix @deva[घ] is added after @deva[सहस्र] with the force of @deva[मतुप्] (possession). @deva[सहस्रयस्य विद्यते] = @deva[सहस्रियः] 'one who has a thousand'. This @deva[घ] affix supersedes the regular @deva[मत्वर्थ] affixes @deva[विनि], @deva[इनि], and @deva[अण्] taught in @ref[5.2.102] and @ref[5.2.103].",
                "advanced": "This sūtra provides a Vedic-specific affix @deva[घ] after @deva[सहस्र] to express possession (@deva[मत्वर्थ]). The derivation @deva[सहस्रयस्य विद्यते] = @deva[सहस्रियः] illustrates the possessive sense 'having a thousand'. By the principle of @deva[अपवाद], this @deva[घ] blocks the general @deva[मत्वर्थ] affixes @deva[विनि] (@ref[5.2.94]), @deva[इनि] (@ref[5.2.94]), and @deva[अण्] taught in @ref[5.2.102] (@deva[तदस्यास्त्यस्मिन्निति मतुप्]) and @ref[5.2.103] (@deva[रसादिभ्यश्च])."
            }
        },
        "44137": {
            "en": {
                "simple": "The affix @deva[य] is added to @deva[सोम] (in the accusative) in Vedic usage meaning 'who deserves that'. @deva[सोम] + @deva[य] → @deva[सौम्य] as in @deva[सौम्या ब्राह्मणाः] 'Brāhmaṇas worthy of Soma'.",
                "standard": "In the @deva[छन्दस्], the affix @deva[य] comes after the word @deva[सोम] when in accusative construction, expressing 'one who deserves that'. @deva[सोममर्हन्ति] = @deva[सौम्या ब्राह्मणाः] 'the Brāhmaṇas who deserve Soma', i.e., those honorable and learned ones worthy of performing sacrifices. The distinction between @deva[यत्] and @deva[घ] lies in accent.",
                "advanced": "This sūtra teaches the Vedic affix @deva[य] after @deva[सोम] in accusative (@deva[द्वितीया]) construction with the sense @deva[तदर्हति] 'deserving that'. The example @deva[सोममर्हन्ति] = @deva[सौम्या ब्राह्मणाः] denotes 'Brāhmaṇas worthy of receiving Soma oblations'—qualifying them as learned and eligible to officiate in rituals. The difference between this @deva[य] and the @deva[घ] of the previous sūtra is accentual (@deva[स्वर])."
            }
        },
        "44138": {
            "en": {
                "simple": "The affix @deva[य] is added to @deva[सोम] in Vedic usage with the meaning of @deva[मतुप्] (possession). @deva[सोम] + @deva[य] → @deva[सोम्य] as in @deva[सोम्यं मधुः] 'honey made of or containing Soma'.",
                "standard": "In the @deva[छन्दस्], the affix @deva[य] is added after @deva[सोम] with the force of @deva[मतुप्]. The affix @deva[मयट्] typically conveys senses like 'coming from that' (@ref[4.3.74], @ref[4.3.82]), 'modification or part of' (@ref[4.3.134], @ref[4.3.143]), and 'made of' (@ref[5.4.21]). The case in construction varies according to the intended sense. Thus @deva[सोम्यं मधुः पिबन्ति] = @deva[सोममयं मधुः] 'honey consisting of Soma'.",
                "advanced": "This sūtra teaches the Vedic affix @deva[य] after @deva[सोम] to express possession (@deva[मत्वर्थ]). The commentary notes that the @deva[मयट्] affix conveys various derivative senses: @deva[ततः आगतः] 'coming from that' (per @ref[4.3.74], @ref[4.3.82]), @deva[विकारावयव] 'modification or constituent' (per @ref[4.3.134], @ref[4.3.143]), and @deva[प्रकृत] 'made of' (per @ref[5.4.21]). The case relation (@deva[विभक्ति]) varies with the specific sense. The example @deva[सोम्यं मधुः पिबन्ति] = @deva[सोममयं मधुः] illustrates 'honey made of Soma'."
            }
        },
        "44139": {
            "en": {
                "simple": "The affix @deva[यत्] is added to @deva[मधु] in Vedic usage with the meaning of @deva[मतुप्] (possession). @deva[मधु] + @deva[यत्] → @deva[मधव्य] as in @deva[मधव्यान् स्तोकान्] 'drops containing honey'.",
                "standard": "In the @deva[छन्दस्], the affix @deva[यत्] comes after @deva[मधु] 'honey' with the force of @deva[मतुप्] (possession). The example @deva[मधव्यान् स्तोकान्] = @deva[मधुमयान्] means 'drops that are full of or made of honey'.",
                "advanced": "This sūtra teaches the Vedic affix @deva[यत्] after @deva[मधु] to express @deva[मत्वर्थ] (possessive sense). The derivation @deva[मधव्यान् स्तोकान्] = @deva[मधुमयान्] 'drops consisting of honey' demonstrates the possessive/compositional meaning. This Vedic-specific form supersedes the regular @deva[मत्वर्थ] affixes in classical Sanskrit."
            }
        },
        "44140": {
            "en": {
                "simple": "The affix @deva[यत्] is added to @deva[वसु] in Vedic usage with two meanings: 'a collection' and 'possessing'. @deva[वसु] + @deva[यत्] → @deva[वसव्य] 'a collection of wealth' or 'wealthy'.",
                "standard": "In the @deva[छन्दस्], the affix @deva[यत्] comes after @deva[वसु] 'wealth' with the sense of @deva[समूह] (collection) as well as @deva[मतुप्] (possession). Thus @deva[वसव्यः] = @deva[समूहः] 'a collection'. A @deva[वार्त्तिक] states that @deva[यत्] also comes after @deva[छन्दस्] without changing the sense when referring to collections of letters, as in @deva[छन्दस्यः] 'metrical'. Another @deva[वार्त्तिक] teaches that @deva[यत्] comes after @deva[वसु] without altering the meaning, as @deva[वसव्यैः] = @deva[वसुभिः] 'with wealth' and @deva[वसव्यस्य] = @deva[वसोः] 'of wealth'.",
                "advanced": "This sūtra teaches the Vedic affix @deva[यत्] after @deva[वसु] expressing both @deva[समूह] (collective) and @deva[मत्वर्थ] (possessive) senses. @deva[वसव्यः] = @deva[समूहः] illustrates the collective sense. The first @deva[वार्त्तिक] extends this: @deva[यत्] comes after @deva[छन्दस्] when referring to collections of syllables, as in @deva[सप्तादशाक्षरश्छन्दस्यः प्रजापतियज्ञो मन्त्रे विहिता]—the 17 syllables being @deva[ओ श्रावय] (4), @deva[अस्तु श्रौषट्] (4), @deva[यज] (2), @deva[ये यजामहे] (5), and @deva[वषट्] (2). The second @deva[वार्त्तिक] teaches that @deva[यत्] comes after @deva[वसु] without changing the meaning: @deva[हस्तौ गृहीतस्य बहुभिर्वसव्यैः] where @deva[वसव्यैः] = @deva[वसुभिः], and @deva[अग्निरीशे वसव्यस्य] = @deva[वसोः]."
            }
        },
        "44141": {
            "en": {
                "simple": "The affix @deva[घ] is added to @deva[नक्षत्र] 'star' in Vedic usage without changing the meaning. @deva[नक्षत्र] + @deva[घ] → @deva[नक्षत्रिय] as in @deva[नक्षत्रियेभ्यः स्वाहा] 'hail to the stars'.",
                "standard": "In the @deva[छन्दस्], the affix @deva[घ] comes after @deva[नक्षत्र] 'star, constellation' without altering the meaning. The @deva[अनुवृत्ति] of @deva[समूह] (collection) does not extend to this sūtra. Thus @deva[नक्षत्रियेभ्यः स्वाहा] = @deva[नक्षत्रेभ्यः स्वाहा] 'hail to the constellations'.",
                "advanced": "This sūtra teaches the Vedic affix @deva[घ] after @deva[नक्षत्र] in an @deva[अर्थाभाव] (meaningless) function—the derivative means the same as the base. Importantly, the @deva[अनुवृत्ति] of @deva[समूह] from the previous sūtra does not carry forward here. The Vedic usage @deva[नक्षत्रियेभ्यः स्वाहा] = @deva[नक्षत्रेभ्यः स्वाहा] 'oblation to the stars' demonstrates that @deva[नक्षत्रिय] simply means @deva[नक्षत्र] with no additional semantic content."
            }
        },
        "44142": {
            "en": {
                "simple": "The affix @deva[तातिल्] is added to @deva[सर्व] 'all' and @deva[देव] 'god' in Vedic usage without changing the meaning. @deva[सर्व] + @deva[तातिल्] → @deva[सर्वताति]; @deva[देव] + @deva[तातिल्] → @deva[देवताति].",
                "standard": "In the @deva[छन्दस्], the affix @deva[तातिल्] comes after the words @deva[सर्व] and @deva[देव] without altering the meaning. The examples are: @deva[सर्वतातिः] and @deva[देवतातिः], as in the Vedic hymns @deva[सविता नः सुवतु सर्वतातिम्] 'may Savitṛ grant us all prosperity' and @deva[प्रदक्षिणिद्देवतातिर्मुराणः] 'the host of gods moving rightward'.",
                "advanced": "This sūtra teaches the Vedic affix @deva[तातिल्] after @deva[सर्व] and @deva[देव] in an @deva[अर्थाभाव] capacity—the affix adds no new meaning. The formations @deva[सर्वतातिः] and @deva[देवतातिः] are attested in Vedic: @deva[सविता नः सुवतु सर्वतातिम्] 'may Savitṛ bestow upon us all good things' and @deva[प्रदक्षिणिद्देवतातिर्मुराणः] 'the assembly of gods proceeding circumambulatorily'. The @deva[तातिल्] affix here functions merely as a Vedic variant form."
            }
        },
        "44143": {
            "en": {
                "simple": "The affix @deva[तातिल्] is added to @deva[शिव] 'auspicious', @deva[शम्] 'happiness', and @deva[अरिष्ट] 'unharmed' in Vedic usage when the base is in the genitive case and the meaning is 'one who does/makes'. @deva[शिव] + @deva[तातिल्] → @deva[शिवताति] 'one who creates auspiciousness'.",
                "standard": "In the @deva[छन्दस्], the affix @deva[तातिल्] comes after @deva[शिव], @deva[शम्], and @deva[अरिष्ट] when these words are in the genitive case in construction, with the sense 'one who does that' (@deva[करः] = @deva[करोति]). The word @deva[करः] is equivalent to @deva[करोति], formed by @deva[अच्] per @ref[3.1.134]. The genitive construction has accusative force with @deva[कृत्]-formed words: @deva[शिवस्य करः] = @deva[शिवं करोति]. Thus @deva[शिवताति], @deva[शन्ताति], and @deva[अरिष्टताति]. As in the Ṛgveda: @deva[याभिः शन्तातीभवथो ददाशुषे] (@ref[Ṛg] I.112.20), where @deva[शंताती] is the dual of @deva[शन्तातिः] meaning @deva[सुखस्य कर्तारौ] 'the two makers of happiness'.",
                "advanced": "This sūtra teaches the Vedic affix @deva[तातिल्] after @deva[शिव], @deva[शम्], and @deva[अरिष्ट] in genitive (@deva[षष्ठी]) construction with the agentive sense @deva[करः] 'doer'. The technical note explains that @deva[करः] = @deva[करोति] via the @deva[अच्] affix of @ref[3.1.134]. With @deva[कृत्]-derived words, the genitive base has accusative semantic force: @deva[शिवस्य करः] = @deva[शिवं करोति] 'does/creates auspiciousness'. The formations are @deva[शिवतातिः], @deva[शन्तातिः], and @deva[अरिष्टतातिः]. The Ṛgvedic citation @deva[याभिः शन्तातीभवथो ददाशुषे] (I.112.20) contains the dual @deva[शंताती] meaning @deva[सुखस्य कर्तारौ] 'the two who create happiness'. Similarly @deva[अथो अरिष्टतातये] is attested."
            }
        },
        "44144": {
            "en": {
                "simple": "The affix @deva[तातिल्] is added to @deva[शिव], @deva[शम्], and @deva[अरिष्ट] in Vedic usage when the base is in the genitive case and the meaning is 'the state or condition of'. @deva[शिव] + @deva[तातिल्] → @deva[शिवताति] 'the state of auspiciousness'.",
                "standard": "In the @deva[छन्दस्], the affix @deva[तातिल्] comes after @deva[शिव], @deva[शम्], and @deva[अरिष्ट] in the genitive case construction when the sense is @deva[भाव] (state, condition). Thus @deva[शिवस्य भावः] = @deva[शिवतातिः] 'the condition of blissfulness', @deva[शन्तातिः] 'the state of happiness or peace', and @deva[अरिष्टतातिः] 'the state of being unharmed'. Here these words function as verbal nouns.",
                "advanced": "This sūtra teaches the Vedic affix @deva[तातिल्] after @deva[शिव], @deva[शम्], and @deva[अरिष्ट] in genitive (@deva[षष्ठी]) construction with @deva[भाव] (abstract state) meaning. The derivation @deva[शिवस्य भावः] = @deva[शिवतातिः] 'the condition of auspiciousness' illustrates this. Similarly @deva[शन्तातिः] 'the state of peace/happiness' and @deva[अरिष्टतातिः] 'the state of being uninjured'. The commentary notes that these formations have the force of verbal nouns (@deva[भाववाचक]), expressing the abstract quality rather than an agent as in the previous sūtra."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.4.136-144)")

if __name__ == "__main__":
    main()
