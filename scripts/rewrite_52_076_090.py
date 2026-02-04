#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.2.76-90."""
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
        "52076": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after @deva[अयःशूल] 'iron-spike/violence', and @deva[ठञ्] after @deva[दण्डाजिन] 'staff and hide', both meaning 'one who strives to gain by that'. @deva[आयःशूलिकः] 'violent person'; @deva[दण्डाजिनीनः] 'hypocrite'.",
                "standard": "After @deva[अयःशूल] 'iron spike' (= violent means) and @deva[दण्डाजिन] 'staff and hide' (= outward signs of false devotion), the affixes @deva[ठक्] and @deva[ठञ्] respectively come with @deva[अन्विच्छति]-sense ('strives to gain thereby'). Examples: @deva[अयःशूलेन अन्विच्छति] → @deva[आयःशूलिकः] = @deva[साहसिकः] 'one who uses violent means'; @deva[दण्डाजिनेन अन्विच्छति] → @deva[दण्डाजिनीनः] 'hypocrite who seeks gain through false religious appearance'.",
                "advanced": "The @deva[ठक्]//@deva[ठञ्] affixes with @deva[तेन अन्विच्छति]-meaning apply to @deva[अयःशूल] and @deva[दण्डाजिन] respectively. @deva[अयःशूल] denotes @deva[साहस] (violent/forceful means); @deva[दण्डाजिन] denotes ascetic accoutrements (@deva[दण्ड] 'staff' + @deva[अजिन] 'hide') used as badges of feigned piety. Both derivatives characterize persons exploiting these means for gain."
            }
        },
        "52077": {
            "en": {
                "simple": "The affix @deva[कन्] comes after ordinal numbers to mean 'acquiring a subject after that many attempts', with optional elision of the ordinal affix. @deva[द्वितीयेन रूपेण गृह्णाति] → @deva[द्विकं ग्रहणम्] or @deva[द्वितीयकम्] 'learned on second attempt'.",
                "standard": "After ordinal-denoting words (typified by @deva[तावतिथ] per @ref[5.2.53]), the affix @deva[कन्] means @deva[ग्रहण] 'acquiring/learning after so many attempts'. The ordinal affix is optionally elided. Examples: @deva[द्वितीयेन रूपेण ग्रन्थं गृह्णाति] → @deva[द्विकं ग्रहणम्] (with elision) or @deva[द्वितीयकम्] (without elision) 'comprehension on second attempt'.",
                "advanced": "The @deva[कन्]-affix with @deva[ग्रहण]-meaning (acquisition after X attempts) applies to @deva[पूरणान्त] (ordinal-suffixed) bases. The @deva[विकल्प] permits @deva[पूरणप्रत्ययलोप] (elision of ordinal affix): @deva[द्वितीय] + @deva[क] → @deva[द्वितीयक]; or @deva[द्वि] + @deva[क] → @deva[द्विक] (with @deva[तीय]-elision). Both mean 'understood on second reading/attempt'."
            }
        },
        "52078": {
            "en": {
                "simple": "The affix @deva[कन्] comes after a nominative word (with genitive sense) to mean 'he is their leader'. @deva[देवदत्तः ग्रामणीः एषाम्] → @deva[देवदत्तकाः] 'those whose leader is Devadatta'.",
                "standard": "After a word in the nominative (with @deva[षष्ठी]-force), the affix @deva[कन्] denotes @deva[ग्रामणी] 'leader/headman'. Examples: @deva[देवदत्तो ग्रामणीः एषाम्] → @deva[देवदत्तकाः] 'those whose leader is Devadatta'; @deva[यज्ञदत्तकाः] 'those led by Yajñadatta'. Why 'when meaning leader'? @deva[देवदत्तः शत्रुः एषाम्] 'Devadatta is their enemy' — no affix applies here.",
                "advanced": "The @deva[कन्]-affix with @deva[ग्रामणी]-meaning (leadership relation) applies to @deva[प्रथमान्त] bases with implicit @deva[षष्ठी] relation. The derived form characterizes the group by their leader: @deva[देवदत्तक] = 'those whose @deva[ग्रामणी] is Devadatta'. The semantic restriction excludes other relational meanings (@deva[शत्रु], etc.)."
            }
        },
        "52079": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[शृङ्खल] 'clog/fetter' to mean 'one whose fetter is this', when denoting a young camel. @deva[शृंखलं बन्धनम् अस्य करभस्य] → @deva[शृंखलकः] 'a clog-fettered young camel'.",
                "standard": "After @deva[शृंखल] 'wooden clog/fetter', the affix @deva[कन्] denotes @deva[बन्धन] 'fetter', when the resulting word means 'a young camel' (@deva[करभ]). Example: @deva[शृंखलं बन्धनम् अस्य करभस्य] → @deva[शृंखलकः] 'a young camel fettered with a clog'. Young camels (@deva[करभ]) have wooden clogs on their feet to prevent straying. Though ropes are also used, @deva[शृंखल] being the principal restraint is called @deva[बन्धन].",
                "advanced": "The @deva[कन्]-affix with @deva[बन्धन]-meaning applies to @deva[शृंखल] specifically when denoting @deva[करभ] (camel-calf). The semantic restriction to camel-husbandry context limits the derivation. The @deva[शृंखल] (wooden clog) is the @deva[प्रधानबन्धन] (principal restraint) despite auxiliary ropes, hence the metonymic naming."
            }
        },
        "52080": {
            "en": {
                "simple": "The word @deva[उत्क] is irregularly formed, meaning 'longing/yearning'. @deva[उद्] + @deva[कन्] → @deva[उत्कः] = @deva[उत्सुकः] 'eager, anxious'.",
                "standard": "The word @deva[उत्क] is an irregular formation (@deva[निपातन]) meaning @deva[उन्मनस्] 'one whose mind anxiously desires/yearns'. It is formed by adding @deva[कन्] to the prefix @deva[उद्] 'up/out'. Examples: @deva[उत्को देवदत्तः] 'Devadatta is yearning'; @deva[उत्कः प्रवासी] 'a traveler longing (for home)' = @deva[उत्सुकः], @deva[उत्कण्ठितः] 'eager, anxious'.",
                "advanced": "The @deva[निपातन] @deva[उत्क] derives from @deva[उद्] + @deva[कन्] with irregular semantics: @deva[उद्] (upward/outward motion) + affective @deva[क] → 'mind directed outward' = yearning. Synonyms: @deva[उत्सुक], @deva[उत्कण्ठित], @deva[उन्मनस्]. The formation is lexicalized rather than productively derived."
            }
        },
        "52081": {
            "en": {
                "simple": "The affix @deva[कन्] comes after words expressing time or cause/effect (of disease) when an illness is denoted. @deva[द्वितीये अह्नि भवः] → @deva[द्वितीयकः ज्वरः] 'fever recurring on the second day'.",
                "standard": "When denoting illness (@deva[आमय]), the affix @deva[कन्] comes after words expressing: (1) @deva[काल] 'time' (days, etc.) or (2) @deva[प्रयोजन] 'cause or effect of the disease'. Examples: @deva[द्वितीये अह्नि भवः] → @deva[द्वितीयको ज्वरः] 'fever coming on the second day'; @deva[चतुर्थकः] 'quartan fever' (recurring every fourth day). With @deva[प्रयोजन]: @deva[विषपुष्पैः जनितः] → @deva[विषपुष्पको ज्वरः] 'fever caused by poisonous flowers'.",
                "advanced": "The @deva[कन्]-affix in @deva[आमयवाचक] (disease-denoting) context applies to @deva[कालवाचिन्] (time-expressions) and @deva[प्रयोजनवाचिन्] (cause/effect expressions). @deva[काल] refers to periodicity (@deva[द्वितीयक] = tertian, @deva[चतुर्थक] = quartan fevers). @deva[प्रयोजन] encompasses both @deva[हेतु] (cause: @deva[विषपुष्पक]) and @deva[फल] (symptomatic effect). This creates medical terminology."
            }
        },
        "52082": {
            "en": {
                "simple": "The affix @deva[कन्] comes after food-words (nominative) to mean 'this is the principal food of this occasion', when forming a name. @deva[गुडापूपाः प्रायेण अन्नम् अस्याः पौर्णमास्याम्] → @deva[गुडापूपिका पौर्णमासी] 'the Jaggery-cake Full-moon day'.",
                "standard": "After words denoting food in the nominative, the affix @deva[कन्] means @deva[प्रायेण अन्नम्] 'principal food (of an occasion)', when forming a proper name (@deva[संज्ञायाम्]). Example: @deva[गुडापूपाः प्रायेण अन्नम् अस्याः पौर्णमास्याम्] → @deva[गुडापूपिका पौर्णमासी] 'the @deva[गुडापूपिका] Full-moon' — that particular full-moon when jaggery-cakes are the principal food. Similarly: @deva[तिलापूपिका], @deva[कृशरिका].",
                "advanced": "The @deva[कन्]-affix with @deva[प्रायान्न]-meaning (predominant food) applies to @deva[प्रथमान्त अन्नवाचिन्] bases in @deva[संज्ञा] (naming) context. The derived forms become calendrical names: specific full-moon days characterized by their ritual food offerings. @deva[गुडापूप] (jaggery-cakes), @deva[तिलापूप] (sesame-cakes), @deva[कृशर] (rice-sesame dish) mark different @deva[पौर्णमासी] observances."
            }
        },
        "52083": {
            "en": {
                "simple": "The affix @deva[अण्] comes after @deva[कुल्माष] 'parched barley' to mean 'principal food of the occasion', when forming a name. @deva[कुल्माषाः प्रायेण अन्नम्] → @deva[कौल्माषी पौर्णमासी] 'the Parched-barley Full-moon'.",
                "standard": "After @deva[कुल्माष] 'parched barley/grain', the affix @deva[अञ्] (= @deva[अ] with @deva[वृद्धि]; @deva[ञ्] for accent) denotes 'principal food of the occasion', when forming a name. Example: @deva[कुल्माषाः प्रायेण अन्नम् अस्याम्] → @deva[कौल्माषी पौर्णमासी] 'the @deva[कौल्माषी] Full-moon' — characterized by parched grain as principal food.",
                "advanced": "The @deva[अञ्]-affix (@deva[ञकार] for @deva[वृद्धि] and accent) with @deva[प्रायान्न]-meaning applies specifically to @deva[कुल्माष]. This is an @deva[अपवाद] to the general @deva[कन्] of @ref[5.2.82]. The @deva[वृद्धि] yields @deva[कौल्माष], then feminine @deva[ई] for agreement with @deva[पौर्णमासी]."
            }
        },
        "52084": {
            "en": {
                "simple": "The word @deva[श्रोत्रिय] is irregularly formed, meaning 'one who has studied the Vedas'. @deva[श्रोत्रियो ब्राह्मणः] 'a Brahmin learned in the Vedas'.",
                "standard": "The word @deva[श्रोत्रिय] meaning 'one who has studied the @deva[छन्दस्] (Vedas)' is an irregular formation (@deva[निपातन]). The @deva[न्] in @deva[श्रोत्रियन्] is for accent (yielding @deva[श्रोत्रियः]). Example: @deva[श्रोत्रियो ब्राह्मणः] 'a Brahmin learned in the Vedas'. The word may be: (1) a condensed expression for @deva[छन्दः अधीते] with no identifiable base/affix, or (2) @deva[छन्दस्] replaced by @deva[श्रोत्र] + affix @deva[घन्].",
                "advanced": "The @deva[निपातन] @deva[श्रोत्रिय] has disputed derivation: either (1) @deva[वाक्यसंक्षेप] (sentence-condensation) of @deva[छन्दोऽधीते] without analyzable @deva[प्रकृति]-@deva[प्रत्यय], or (2) @deva[छन्दस्] → @deva[श्रोत्र] (@deva[आदेश]) + @deva[घन्] (affix). The @deva[नकार] (@deva[श्रोत्रियन्]) is @deva[स्वरार्थ] (for accent). The semantic equation @deva[श्रोत्रिय] = @deva[छन्दोविद्] is conventionalized."
            }
        },
        "52085": {
            "en": {
                "simple": "The affixes @deva[इनि] and @deva[ठन्] come after @deva[श्राद्ध] 'obsequial rite' to mean 'one who has eaten this'. @deva[श्राद्धं भुक्तम् अनेन] → @deva[श्राद्धी] or @deva[श्राद्धिकः] 'one who has eaten obsequial food'.",
                "standard": "After @deva[श्राद्ध] 'obsequial rite/food', the affixes @deva[इनि] (= @deva[इन्]) and @deva[ठन्] (= @deva[इक]) denote @deva[भुक्तम् अनेन] 'this has been eaten by him'. Example: @deva[श्राद्धं भुक्तम् अनेन] → @deva[श्राद्धी] or @deva[श्राद्धिकः] 'one who has eaten obsequial food'. This refers to eating on the day of the @deva[श्राद्ध] ceremony, not at other times or stale food. Note: @deva[अद्य भुक्ते श्राद्धे श्वः श्राद्धिक इति मा भूत्].",
                "advanced": "The @deva[इनि]//@deva[ठन्] affixes with @deva[भुक्त अनेन]-meaning apply to @deva[श्राद्ध]. The semantic restriction (@deva[तद्दिने भुक्त], not @deva[परेद्युः]) specifies same-day consumption of fresh @deva[श्राद्ध] offerings. The derived @deva[श्राद्धिन्]//@deva[श्राद्धिक] mark ritual participation, not general food-consumption."
            }
        },
        "52086": {
            "en": {
                "simple": "The affix @deva[इनि] comes after @deva[पूर्व] 'before/formerly' to mean 'by whom something was done formerly'. @deva[पूर्वं गतम् अनेन] → @deva[पूर्वी] 'one who went before'.",
                "standard": "After @deva[पूर्व] 'formerly/before', the affix @deva[इनि] (= @deva[इन्]) denotes @deva[अनेन] 'by whom (something was done)' in the past. The @deva[अनेन] from the previous @[sūtra] continues, but not @deva[भुक्त]; a general verb ('doing', 'going', etc.) must be supplied. Example: @deva[पूर्वं गतम् अनेन] → @deva[पूर्वी] 'one who went before'; similarly @deva[पूर्वं भुक्तम्], @deva[पूर्वं पीतम्] → @deva[पूर्वी] 'one who formerly ate/drank'.",
                "advanced": "The @deva[इनि]-affix with @deva[पूर्वं कृतम् अनेन]-meaning (past-action by agent) applies to @deva[पूर्व]. The @deva[अनुवृत्ति] of @deva[अनेन] (instrumental agent) continues from @ref[5.2.85], but @deva[भुक्त] does not; a generic @deva[क्रिया] (action) must be contextually supplied. The derived @deva[पूर्विन्] indicates prior performance of unspecified actions."
            }
        },
        "52087": {
            "en": {
                "simple": "The affix @deva[इनि] comes after @deva[पूर्व] also when another word precedes it. @deva[कृतपूर्वी कटम्] = @deva[पूर्वं कृतम् अनेन] 'who formerly made (a mat)'.",
                "standard": "After @deva[पूर्व] 'formerly', the affix @deva[इनि] applies also when another word precedes (@deva[समासे]). First @deva[कृत] and @deva[पूर्व] are compounded by @ref[2.1.4], then @deva[इनि] is added. Examples: @deva[कृतपूर्वी कटम्] = @deva[पूर्वं कृतम् अनेन] 'who formerly made (a mat)'; @deva[भुक्तपूर्वी ओदनम्] 'who formerly ate rice'. These two @[sūtra]s (@ref[5.2.86-87]) give rise to the maxim @deva[ग्रहणवता प्रातिपदिकेन...].",
                "advanced": "The @deva[इनि]-affix for @deva[पूर्व] extends to @deva[समस्तपद] (compound) contexts: @deva[कृतपूर्व], @deva[भुक्तपूर्व], etc. The compounding precedes affixation per @ref[2.1.4]. The resulting @deva[कृतपूर्विन्], @deva[भुक्तपूर्विन्] govern accusative for the object of the prior action. The @deva[परिभाषा] @deva[ग्रहणवता प्रातिपदिकेन] derives from these @[sūtra]s."
            }
        },
        "52088": {
            "en": {
                "simple": "The affix @deva[इनि] comes after @deva[इष्ट]-class words to mean 'by whom this was done'. @deva[इष्टम् अनेन] → @deva[इष्टी] 'one who has sacrificed'; @deva[पूर्तम् अनेन] → @deva[पूर्ती] 'one who has done charity'.",
                "standard": "After @deva[इष्ट] and similar words (@deva[इष्टादि]), the affix @deva[इनि] (= @deva[इन्]) denotes @deva[अनेन] 'by whom (this was done)'. Examples: @deva[इष्टम् अनेन] → @deva[इष्टी] (in context of sacrifice); @deva[पूर्तम् अनेन] → @deva[पूर्ती] (in context of charitable acts). The @deva[इष्टिन्], @deva[पूर्तिन्] forms govern locative instead of accusative (per @deva[वार्त्तिक] under @ref[2.3.36]). The @deva[इष्टादि] includes: @deva[इष्ट], @deva[पूर्त], @deva[उपासादित], @deva[निगदित], @deva[परिगदित], @deva[परिवादित], @deva[निकथित], etc.",
                "advanced": "The @deva[इनि]-affix with @deva[कर्तृ]-meaning applies to @deva[इष्टादि] @deva[गण]. The derived @deva[इष्टिन्], @deva[पूर्तिन्] etc. show exceptional @deva[सप्तमी]-government (not @deva[द्वितीया]) per @deva[वार्त्तिक] on @ref[2.3.36]. @deva[इष्ट] = Vedic sacrifice; @deva[पूर्त] = charitable works (wells, temples). The @deva[गण] includes various past-participle bases."
            }
        },
        "52089": {
            "en": {
                "simple": "In the Vedas, @deva[परिपन्थिन्] and @deva[परिपरिन्] are irregularly formed with @deva[इनि], meaning 'antagonist/adversary'.",
                "standard": "In Vedic (@deva[छन्दस्]), the words @deva[परिपन्थिन्] and @deva[परिपरिन्] are irregular formations (@deva[निपातन]) with @deva[इनि], meaning @deva[पर्यवस्थातृ] 'antagonist/adversary'. Vedic usage: @deva[मा त्वा परिपरिणो विदन् मा त्वा परिपन्थिनो विदन्] (Yajurveda IV.34) 'May neither adversary find you'. These words are archaic in secular literature (but see Bhagavad Gītā III.34).",
                "advanced": "The @deva[छान्दस निपातन] forms @deva[परिपन्थिन्] and @deva[परिपरिन्] with @deva[इनि]-affix denote @deva[पर्यवस्थातृ] (one who obstructs/opposes). The Vedic citation (@deva[यजुर्वेद] IV.34) preserves archaic usage. @deva[परिपन्थिन्] (from @deva[परि] + @deva[पन्थन्] 'path' + @deva[इनि]) = 'one who blocks the path'. Classical survival is limited (Gītā III.34)."
            }
        },
        "52090": {
            "en": {
                "simple": "The word @deva[अनुपदिन्] is irregularly formed with @deva[इनि], meaning 'one who goes after/searches'. @deva[अनुपदी गवाम्] 'one who searches for cows'.",
                "standard": "The word @deva[अनुपदिन्] is an irregular formation (@deva[निपातन]) with @deva[इनि], meaning 'one who goes after/searches'. Examples: @deva[अनुपदी गवाम्] 'one who searches for cows'; @deva[अनुपदी उष्ट्राणाम्] 'one who searches for camels'. The form derives from @deva[अनुपद] 'following the track' + @deva[इनि].",
                "advanced": "The @deva[निपातन] @deva[अनुपदिन्] (< @deva[अनुपद] + @deva[इनि]) means @deva[अनुगन्तृ]//@deva[अन्वेषक] (tracker/searcher). The @deva[अनुपद] base (@deva[अनु] + @deva[पद] 'foot/track') + @deva[इनि] creates an agent-noun for those who follow tracks of animals. The genitive object (@deva[गवाम्], @deva[उष्ट्राणाम्]) specifies the search-target."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.2.76-90)")

if __name__ == "__main__":
    main()
