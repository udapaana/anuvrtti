#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.2.121-140."""
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
        "52121": {
            "en": {
                "simple": "The affix @deva[विनि] comes after stems ending in @deva[अस्] and after @deva[माया], @deva[मेधा], @deva[स्रज्] with @deva[मतुप्]-sense. @deva[पयस्विन्] 'having milk'; @deva[मायाविन्] 'possessing illusion'; @deva[मेधाविन्] 'intelligent'; @deva[स्रग्विन्] 'garlanded'.",
                "standard": "After stems ending in @deva[अस्] and after @deva[माया], @deva[मेधा], and @deva[स्रज्], the affix @deva[विनि] (= @deva[विन्]) comes with @deva[मतुप्]-sense. Examples: @deva[पयस्] → @deva[पयस्विन्] 'milky'; @deva[यशस्] → @deva[यशस्विन्] 'famous'; @deva[माया] → @deva[मायाविन्] 'illusionist'; @deva[मेधा] → @deva[मेधाविन्] 'intelligent'; @deva[स्रज्] → @deva[स्रग्विन्] 'garlanded'. Since @deva[माया] is in the @deva[व्रीह्यादि] class, it also takes @deva[इनि] and @deva[ठञ्] by @ref[5.2.116]: @deva[मायी], @deva[मायिकः].",
                "advanced": "The @deva[विनि]-affix applies to @deva[असन्त] (stems in @deva[अस्]) and three specified stems (@deva[माया], @deva[मेधा], @deva[स्रज्]). For @deva[असन्त], @deva[विनि] is the default @deva[मतुप्]-affix. @deva[माया] has multiple options via @deva[व्रीह्यादि]-membership: @deva[विनि] (here), @deva[इनि], @deva[ठञ्] (@ref[5.2.116]). @deva[मेधा] and @deva[स्रज्] take @deva[विनि] specifically."
            }
        },
        "52122": {
            "en": {
                "simple": "In the Vedas, the affix @deva[विनि] is added diversely with @deva[मतुप्]-sense. @deva[अग्ने तेजस्विन्] (with @deva[विनि]); @deva[सूर्यो वर्चस्वान्] (with @deva[मतुप्], not @deva[विनि]).",
                "standard": "In Vedic (@deva[छन्दस्]), the affix @deva[विनि] is added variably (@deva[बहुलम्]) with @deva[मतुप्]-sense. Examples: @deva[अग्ने तेजस्विन्] (with @deva[विनि]); sometimes not added: @deva[सूर्यो वर्चस्वान्] (with @deva[मतुप्]). @deva[वार्त्तिक]: In Vedic, the final @deva[अ] of @deva[इय], @deva[उभय], and @deva[हृदय] is optionally lengthened before @deva[विनि]; and @deva[विनि] comes after @deva[अष्ट्रा], @deva[मेखला], @deva[रुजा]: @deva[अष्ट्रावी], @deva[मेखलावी], @deva[इयावी], @deva[उभयावी], @deva[रुजावी], @deva[हृदयावी].",
                "advanced": "The @deva[छान्दस] @deva[बहुल]-provision for @deva[विनि] creates Vedic variation: @deva[विनि] applies irregularly (sometimes yes, sometimes @deva[मतुप्] instead). The @deva[वार्त्तिक] specifies @deva[दीर्घ]-@deva[विकल्प] for @deva[इय]//@deva[उभय]//@deva[हृदय] and extends @deva[विनि] to @deva[अष्ट्रा]//@deva[मेखला]//@deva[रुजा]."
            }
        },
        "52123": {
            "en": {
                "simple": "In the Vedas, the affix @deva[युस्] comes after @deva[ऊर्णा] 'wool' with @deva[मतुप्]-sense. @deva[ऊर्णायुः] 'wooly'.",
                "standard": "In Vedic (@deva[छन्दस्]), the affix @deva[युस्] (= @deva[यु]) comes after @deva[ऊर्णा] 'wool' with @deva[मतुप्]-sense. The @deva[स्] of @deva[युस्] makes @deva[ऊर्णा] a @deva[पद] (per @ref[1.4.16]); consequently, @deva[भ]-rules (like @ref[6.1.148] which would delete final @deva[आ]) do not apply. Result: @deva[ऊर्णायुः] 'woolly/having wool'. According to some, @deva[छन्दसि] is to be read in this @[sūtra]. Siddhāntakaumudī treats this as a general rule.",
                "advanced": "The @deva[युस्]-affix (with @deva[सकार] making @deva[पद]-@deva[संज्ञा] per @ref[1.4.16]) for @deva[ऊर्णा] prevents @deva[भसंज्ञा] operations like @ref[6.1.148] (@deva[आकारलोप]). This preserves @deva[ऊर्णा] + @deva[युस्] → @deva[ऊर्णायु] (not *@deva[ऊर्ण्यु]). The @deva[छन्दस्]-restriction is debated; some extend it to classical usage."
            }
        },
        "52124": {
            "en": {
                "simple": "The affix @deva[ग्मिनि] comes after @deva[वाच्] 'speech' with @deva[मतुप्]-sense. @deva[वाग्मी] 'eloquent'.",
                "standard": "After @deva[वाच्] 'speech', the affix @deva[ग्मिनि] (= @deva[ग्मिन्]) comes with @deva[मतुप्]-sense. Result: @deva[वाग्मी] (dual @deva[वाग्मिनौ], plural @deva[वाग्मिनः]) 'eloquent speaker'. The affix is @deva[ग्मिनि], not @deva[मिन्]; if it were @deva[मिन्], the form would be @deva[वाङ्मिन्] by @ref[8.4.45] @deva[वार्त्तिक] (nasal assimilation).",
                "advanced": "The @deva[ग्मिनि]-affix (not @deva[मिनि]) for @deva[वाच्] avoids the @deva[अनुनासिकसंधि] of @ref[8.4.45]-@deva[वार्त्तिक]. With @deva[ग्मिन्], the derivation is @deva[वाच्] + @deva[ग्मिन्] → @deva[वाग्मिन्] (no nasalization). If @deva[मिन्] were the affix, @deva[वाच्] + @deva[मिन्] → *@deva[वाङ्मिन्] would result."
            }
        },
        "52125": {
            "en": {
                "simple": "The affixes @deva[आलच्] and @deva[आटच्] come after @deva[वाच्] 'speech' to mean 'talkative', blocking @deva[ग्मिन्]. @deva[वाचालः] 'garrulous'; @deva[वाचाटः] 'chatterbox'.",
                "standard": "After @deva[वाच्] 'speech', the affixes @deva[आलच्] (= @deva[आल]) and @deva[आटच्] (= @deva[आट]) come when denoting 'talkative' (@deva[बहुवादिन्]). This blocks @deva[ग्मिन्] from @ref[5.2.124]. Result: @deva[वाचालः] 'garrulous', @deva[वाचाटः] 'chatterbox'. @deva[वार्त्तिक]: These affixes express @deva[निन्दा] 'contempt'. An orator (@deva[वाग्मी]) also speaks much but purposefully; he is not called @deva[वाचाल] or @deva[वाचाट].",
                "advanced": "The @deva[आलच्]//@deva[आटच्] affixes with @deva[बहुवादिन्]-meaning function as @deva[अपवाद] to @deva[ग्मिनि]. The @deva[वार्त्तिक] specifies @deva[निन्दार्थ] (pejorative): @deva[वाचाल]//@deva[वाचाट] = excessive/purposeless talker (negative), vs. @deva[वाग्मिन्] = eloquent speaker (positive). The semantic distinction is pragmatic, not grammatical."
            }
        },
        "52126": {
            "en": {
                "simple": "The word @deva[स्वामिन्] is irregularly formed, meaning 'lord/master'. @deva[स्व] 'own' + @deva[आमिन्] → @deva[स्वामिन्] 'owner, lord'.",
                "standard": "The word @deva[स्वामिन्] 'lord/master' is an irregular formation (@deva[निपातन]). The affix @deva[आमिन्] comes after @deva[स्व] 'own' with meaning of lordship (@deva[ऐश्वर्य]). Example: @deva[स्वम् अस्य अस्ति] = @deva[ऐश्वर्यम् अस्य अस्ति] → @deva[स्वामिन्] 'owner, lord, master'. Why 'when meaning lord'? @deva[स्ववान्] simply means 'having one's own (property)'.",
                "advanced": "The @deva[निपातन] @deva[स्वामिन्] derives from @deva[स्व] + @deva[आमिन्] with @deva[ऐश्वर्य]-meaning (lordship/ownership), not mere possession. The semantic restriction to 'lord/master' distinguishes it from regular @deva[स्ववत्] 'property-owner'. @deva[स्वामिन्] is lexicalized for authority/sovereignty contexts."
            }
        },
        "52127": {
            "en": {
                "simple": "The affix @deva[अच्] comes after @deva[अर्शस्]-class words with @deva[मतुप्]-sense. @deva[अर्शांसि अस्य विद्यन्ते] → @deva[अर्शसः] 'having piles'.",
                "standard": "After @deva[अर्शस्] and similar words (@deva[अर्शआदि]), the affix @deva[अच्] (= @deva[अ]) comes with @deva[मतुप्]-sense. Examples: @deva[अर्शांसि अस्य विद्यन्ते] → @deva[अर्शसः] 'having hemorrhoids'; @deva[उरसः] 'having a chest'. After body-part words, @deva[अच्] comes when defect is meant: @deva[खञ्जः पादः अस्य अस्ति] → @deva[खञ्जः] 'lame'; @deva[काणः] 'one-eyed'. After color words: @deva[शुक्लः अस्य अस्ति] → @deva[शुक्लः पटः] 'white cloth'.",
                "advanced": "The @deva[अच्]-affix applies to @deva[अर्शादि] @deva[गण] (disease/defect terms) with @deva[मतुप्]-sense. The @deva[गण] includes: @deva[अर्शस्], @deva[उरस्], @deva[तुन्द], @deva[चतुर], @deva[पलित], etc. Extended uses: body-part + @deva[अच्] for defects (@deva[खञ्ज], @deva[काण]); color + @deva[अच्] for colored objects (@deva[शुक्ल पट])."
            }
        },
        "52128": {
            "en": {
                "simple": "The affix @deva[इनि] comes after @deva[द्वन्द्व] compounds, disease names, and fault-denoting words (for living beings) with @deva[मतुप्]-sense. @deva[कटकवलयिनी] 'woman with bracelet and armlet'; @deva[कुष्ठी] 'leper'.",
                "standard": "After @deva[द्वन्द्व] compounds, names of diseases, and fault-denoting words (when found in living beings), the affix @deva[इनि] (= @deva[इन्]) comes with @deva[मतुप्]-sense. Examples with @deva[द्वन्द्व]: @deva[कटकवलयिनी] 'woman having bracelet and armlet'; @deva[शङ्खनूपुरिणी] 'woman having conch-bracelet and anklet'. With diseases: @deva[कुष्ठी] 'leper'; @deva[किलासी] 'one with vitiligo'. With faults: @deva[ककुदावर्ती], @deva[काकतालुकी].",
                "advanced": "The @deva[इनि]-affix applies to three domains in @deva[प्राणिन्] (animate) context: (1) @deva[द्वन्द्व]-compounds of ornaments/attributes; (2) @deva[रोगवाचिन्] (disease names); (3) @deva[दोषवाचिन्] (fault/defect terms). The @deva[प्राणिनि]-restriction excludes inanimate applications."
            }
        },
        "52129": {
            "en": {
                "simple": "The augment @deva[कुक्] comes before @deva[इनि] after @deva[वात] 'wind/rheumatism' and @deva[अतिसार] 'diarrhea'. @deva[वातकी] 'rheumatic'; @deva[अतिसारकी] 'suffering from diarrhea'.",
                "standard": "Before @deva[इनि] after @deva[वात] 'wind/rheumatism' and @deva[अतिसार] 'diarrhea' (both disease names taking @deva[इनि] by @ref[5.2.128]), the augment @deva[कुक्] (= @deva[क्]) is added. Examples: @deva[वातकी] 'one with rheumatism'; @deva[अतिसारकी] 'one with diarrhea' (another reading: @deva[अतीसारकी]). @deva[वार्त्तिक]: Also after @deva[पिशाच]: @deva[पिशाचकी वैश्रवणः] 'Kubera (lord of @deva[पिशाच]s)'. This applies when @deva[वात] and @deva[अतिसार] denote diseases.",
                "advanced": "The @deva[कुक्]-@deva[आगम] before @deva[इनि] for @deva[वात]//@deva[अतिसार] (disease-senses) yields @deva[वातकिन्], @deva[अतिसारकिन्]. The @deva[वार्त्तिक] extends @deva[कुक्] to @deva[पिशाच] (for Kubera's epithet). The augment is specific to disease-naming contexts, not general @deva[वात] (wind) usage."
            }
        },
        "52130": {
            "en": {
                "simple": "The affix @deva[इनि] comes after ordinal numerals when age is denoted with @deva[मतुप्]-sense. @deva[पञ्चमः अस्य अस्ति मासः] → @deva[पञ्चमी उष्ट्रः] 'five-month-old camel'.",
                "standard": "After ordinal numerals, the affix @deva[इनि] (= @deva[इन्]) comes with @deva[मतुप्]-sense when age (@deva[वयस्]) is denoted. Example: @deva[पञ्चमः अस्य अस्ति मासः संवत्सरो वा] → @deva[पञ्चमिन्] 'five months/years old', as @deva[पञ्चमी उष्ट्रः] 'five-month-old camel'. Similarly: @deva[नवमी], @deva[दशमी]. By @ref[5.2.115], @deva[इनि] would apply anyway; this @[sūtra] is restrictive, teaching that @deva[ठन्] does not come in age-sense.",
                "advanced": "The @deva[इनि]-prescription for @deva[पूरण] (ordinals) in @deva[वयस्]-meaning is @deva[नियमक] (restrictive): only @deva[इनि] applies (not @deva[ठन्] from @ref[5.2.115]). The @deva[वयसि]-condition specifies age-designation, not general possession of ordinal rank."
            }
        },
        "52131": {
            "en": {
                "simple": "The affix @deva[इनि] comes (exclusively) after @deva[सुख]-class words with @deva[मतुप्]-sense. @deva[सुखिन्] 'happy'; @deva[दुःखिन्] 'suffering'.",
                "standard": "After @deva[सुख] and similar words (@deva[सुखादि]), the affix @deva[इनि] (= @deva[इन्]) comes (to the exclusion of others) with @deva[मतुप्]-sense. Examples: @deva[सुखिन्] (nom. @deva[सुखी]) 'happy'; @deva[दुःखिन्] 'suffering'. When @deva[निन्दा] (censure) is implied, @deva[इन्] comes after @deva[माला] (excluding @deva[मतुप्]): @deva[माली] 'garlanded (with negative connotation)'. The @deva[सुखादि] includes: @deva[सुख], @deva[दुःख], @deva[तृप्त], @deva[कृच्छ], @deva[आश्र], @deva[अस्र], @deva[अलीक], @deva[करुण], etc.",
                "advanced": "The @deva[इनि]-@deva[नियम] for @deva[सुखादि] blocks other @deva[मतुप्]-sense affixes. The @deva[गण] includes emotional/state terms: @deva[सुख] (happiness), @deva[दुःख] (suffering), @deva[तृप्त] (satisfied), @deva[कृच्छ] (distress), etc. @deva[माला] takes @deva[इनि] specifically in @deva[निन्दा]-context."
            }
        },
        "52132": {
            "en": {
                "simple": "The affix @deva[इनि] comes (exclusively) after stems ending in @deva[धर्म], @deva[शील], or @deva[वर्ण] with @deva[मतुप्]-sense. @deva[ब्राह्मणधर्मी] 'following Brahmin-duty'; @deva[ब्राह्मणशीली] 'having Brahmin-character'.",
                "standard": "After nominal stems ending in @deva[धर्म] 'duty', @deva[शील] 'character', or @deva[वर्ण] 'color/caste', the affix @deva[इनि] (= @deva[इन्]) comes (exclusively) with @deva[मतुप्]-sense. Examples: @deva[ब्राह्मणानां धर्मः] = @deva[ब्राह्मणधर्मः], @deva[सः अस्य अस्ति] → @deva[ब्राह्मणधर्मी] 'one who follows Brahmin-duty'; @deva[ब्राह्मणशीलिन्] 'having Brahmin-conduct'; @deva[ब्राह्मणवर्णिन्] 'having Brahmin-caste'.",
                "advanced": "The @deva[इनि]-@deva[नियम] for @deva[धर्मान्त]//@deva[शीलान्त]//@deva[वर्णान्त] compounds creates exclusive @deva[इनि]-derivation. These compound-types denote adherence to class-specific duty/character/identity. The restriction blocks @deva[मतुप्] and other alternatives."
            }
        },
        "52133": {
            "en": {
                "simple": "The affix @deva[इनि] comes after @deva[हस्त] 'hand/trunk' when a genus (animal species) is denoted with @deva[मतुप्]-sense. @deva[हस्तः अस्य अस्ति] → @deva[हस्तिन्] 'elephant'.",
                "standard": "After @deva[हस्त] 'hand/trunk', the affix @deva[इनि] (= @deva[इन्]) comes with @deva[मतुप्]-sense when the derived word denotes a @deva[जाति] 'genus/species'. Example: @deva[हस्तः अस्य अस्ति] → @deva[हस्तिन्] 'elephant' (= the trunk-possessing animal). Why @deva[जाति]-meaning? @deva[हस्तवान् पुरुषः] 'a man having hands' — no @deva[इनि], just @deva[मतुप्].",
                "advanced": "The @deva[इनि]-affix for @deva[हस्त] is conditioned by @deva[जातिवाचकत्व] (species-designation). @deva[हस्तिन्] = 'elephant' (trunk-possessor as species-name) is @deva[रूढ] (lexicalized). For humans, @deva[हस्तवत्] 'handed' applies (mere possession, not species)."
            }
        },
        "52134": {
            "en": {
                "simple": "The affix @deva[इनि] comes after @deva[वर्ण] 'caste' when the word means @deva[ब्रह्मचारिन्] 'celibate student' with @deva[मतुप्]-sense. @deva[वर्णिन्] 'a Brahmacārin'.",
                "standard": "After @deva[वर्ण] 'caste/class', the affix @deva[इनि] (= @deva[इन्]) comes with @deva[मतुप्]-sense when the derived word means @deva[ब्रह्मचारिन्] 'celibate student'. Result: @deva[वर्णिन्] 'a Brahmacārin' — specifically, members of the first three @deva[वर्ण] (castes) entitled to sacred thread investiture who lead the student life. When not meaning Brahmacārin: @deva[वर्णवान्] 'having caste/color'.",
                "advanced": "The @deva[इनि]-affix for @deva[वर्ण] with @deva[ब्रह्मचारिन्]-meaning is semantically specialized: @deva[वर्णिन्] = @deva[त्रैवर्णिक ब्रह्मचारिन्] (celibate student from the three upper castes). The @deva[संज्ञा]-restriction distinguishes from general @deva[वर्णवत्] 'having class/color'."
            }
        },
        "52135": {
            "en": {
                "simple": "The affix @deva[इनि] comes after @deva[पुष्कर]-class words when a locality is denoted with @deva[मतुप्]-sense. @deva[पुष्करिणी] 'a tank/lotus-pond'.",
                "standard": "After @deva[पुष्कर] and similar words (@deva[पुष्करादि]), the affix @deva[इनि] (= @deva[इन्]) comes with @deva[मतुप्]-sense when denoting a @deva[देश] 'locality'. Examples: @deva[पुष्करिणी] 'a tank/lotus-pond'; @deva[पद्मिनी] 'lotus-pond'. Why @deva[देश]-meaning? @deva[पुष्करवान् हस्ती] 'an elephant with @deva[पुष्कर] (trunk-tip)' — no locality, just possession. @deva[वार्त्तिक]: @deva[इन्] comes after @deva[बल] preceded by @deva[बाहु]//@deva[ऊरु]: @deva[बाहुबलिन्], @deva[ऊरुबलिन्]. Also after @deva[सर्व]-preceded words: @deva[सर्वधनिन्], @deva[सर्वबीजिन्].",
                "advanced": "The @deva[इनि]-affix for @deva[पुष्करादि] with @deva[देशार्थ] (locality-sense) creates place-names: @deva[पुष्करिणी] (lotus-tank), @deva[पद्मिनी] (lotus-pond). The @deva[वार्त्तिक] extends @deva[इनि] to @deva[बाहुबल]//@deva[ऊरुबल] (limb-strength compounds) and @deva[सर्व]-prefixed terms."
            }
        },
        "52136": {
            "en": {
                "simple": "The affixes @deva[मतुप्] and @deva[इनि] come after @deva[बल]-class words with @deva[मतुप्]-sense. @deva[बलवान्] or @deva[बली] 'strong'.",
                "standard": "After @deva[बल] and similar words (@deva[बलादि]), both @deva[मतुप्] and @deva[इनि] (alternative) come with @deva[मतुप्]-sense. Examples: @deva[बलवान्] or @deva[बली] (stem @deva[बलिन्]) 'strong'; @deva[उत्साहवान्] or @deva[उत्साही] (stem @deva[उत्साहिन्]) 'enthusiastic'. The @deva[बलादि] includes: @deva[बल], @deva[उत्साह], @deva[उद्भास], @deva[उद्वास], @deva[उद्दास], @deva[शिखा], @deva[कुल], @deva[चूडा], @deva[सुल], @deva[कूल], @deva[आयाम], @deva[व्यायाम], @deva[उपयाम], @deva[आर्...], etc.",
                "advanced": "The @deva[मतुप्]//@deva[इनि] @deva[विकल्प] for @deva[बलादि] creates doublets: @deva[बलवत्]//@deva[बलिन्], @deva[उत्साहवत्]//@deva[उत्साहिन्]. The @deva[गण] includes strength/energy/structure terms: @deva[बल], @deva[उत्साह], @deva[शिखा], @deva[कुल], @deva[चूडा], @deva[आयाम], @deva[व्यायाम], etc."
            }
        },
        "52137": {
            "en": {
                "simple": "The affix @deva[इनि] comes after stems ending in @deva[मन्] or @deva[म] when forming a name with @deva[मतुप्]-sense. @deva[प्रथिमिनी] (a name); @deva[होमिनी], @deva[सोमिनी].",
                "standard": "After stems ending in @deva[मन्] or @deva[म], the affix @deva[इनि] (= @deva[इन्]) comes with @deva[मतुप्]-sense when forming a proper name (@deva[संज्ञायाम्]). Derivation: @deva[प्रथिमन्] + @deva[इनि] → @deva[प्रथिम्] + @deva[इन्] (by @ref[6.4.144]) → @deva[प्रथिमिन्], fem. @deva[प्रथिमिनी]. Similarly: @deva[दामिनी] (fem. name); @deva[होमिनी], @deva[सोमिनी] (from @deva[होम], @deva[सोम]). Why @deva[संज्ञा]-meaning? @deva[सोमवान्], @deva[होमवान्] — general possession, not names.",
                "advanced": "The @deva[इनि]-affix for @deva[मनन्त]//@deva[मकारान्त] stems in @deva[संज्ञा]-context creates proper names. @deva[मनन्त] stems show @deva[अनलोप] by @ref[6.4.144] before @deva[इनि]. The @deva[संज्ञा]-restriction limits productive derivation; non-name uses take @deva[मतुप्] (@deva[सोमवत्], @deva[होमवत्])."
            }
        },
        "52138": {
            "en": {
                "simple": "Seven affixes (@deva[ब], @deva[भ], @deva[युस्], @deva[ति], @deva[तु], @deva[त], @deva[यस्]) come after @deva[कम्] 'water/happiness' and @deva[शम्] 'happiness' with @deva[मतुप्]-sense. @deva[कम्बः], @deva[शम्भः], @deva[कन्तिः], @deva[शन्तिः], etc.",
                "standard": "After @deva[कम्] 'water/happiness' and @deva[शम्] 'happiness', seven affixes come with @deva[मतुप्]-sense: @deva[ब], @deva[भ], @deva[युस्], @deva[ति], @deva[तु], @deva[त], @deva[यस्]. Examples from @deva[कम्]: @deva[कम्बः], @deva[कम्भः], @deva[कंयुः], @deva[कन्तिः], @deva[कन्तुः], @deva[कन्तः], @deva[कंयः]. From @deva[शम्]: @deva[शम्बः], @deva[शम्भः], @deva[शंयुः], @deva[शन्तिः], @deva[शन्तुः], @deva[शन्तः], @deva[शंयः]. The @deva[स्] in @deva[युस्] and @deva[यस्] makes the stem a @deva[पद] (per @ref[1.4.16]).",
                "advanced": "The septuple-affix provision for @deva[कम्]//@deva[शम्] creates extensive @deva[मतुप्]-derivatives. The @deva[सकार] in @deva[युस्]//@deva[यस्] triggers @deva[पदसंज्ञा] (@ref[1.4.16]), affecting sandhi. @deva[शन्ति] and @deva[कन्ति] show @deva[म्] → @deva[न्] before @deva[त]-initial affixes. These forms are often lexicalized with specialized meanings."
            }
        },
        "52139": {
            "en": {
                "simple": "The affix @deva[भ] comes after @deva[तुन्दि] 'belly', @deva[वलि] 'wrinkle', and @deva[वटि] with @deva[मतुप्]-sense. @deva[तुन्दिभः] 'pot-bellied'; @deva[वलिभः] 'wrinkled'.",
                "standard": "After @deva[तुन्दि] 'protuberant belly', @deva[वलि] 'wrinkle/fold', and @deva[वटि], the affix @deva[भ] comes with @deva[मतुप्]-sense. Examples: @deva[तुन्दिभः] 'having a protuberant belly'; @deva[वलिभः] 'having wrinkles'; @deva[वटिभः]. Another form @deva[बलिभः] exists because @deva[बलि] is in the @deva[पामादि] class (@ref[5.2.100]). Forms like @deva[तुन्दिलः] are valid by @ref[5.2.117].",
                "advanced": "The @deva[भ]-affix for @deva[तुन्दि]//@deva[वलि]//@deva[वटि] creates @deva[तुन्दिभ], @deva[वलिभ], @deva[वटिभ]. @deva[बलि] (variant reading or separate item) belongs to @deva[पामादि], hence takes @deva[न] as well. Cross-reference to @ref[5.2.117] (@deva[इलच्]) permits @deva[तुन्दिल] alongside @deva[तुन्दिभ]."
            }
        },
        "52140": {
            "en": {
                "simple": "The affix @deva[युस्] comes after @deva[अहम्] 'I' and the indeclinable @deva[शुभम्] 'good' with @deva[मतुप्]-sense. @deva[अहंयुः] 'egotistic'; @deva[शुभंयुः] 'auspicious'.",
                "standard": "After @deva[अहम्] 'I/self' and the indeclinable @deva[शुभम्] 'good/auspicious', the affix @deva[युस्] (= @deva[यु]) comes with @deva[मतुप्]-sense. Examples: @deva[अहंयुः] = @deva[अहंकारवान्] 'selfish, haughty' (having ego); @deva[शुभंयुः] = @deva[कल्याणवान्] 'auspicious' (having good fortune). The @deva[स्] of @deva[युस्] makes @deva[अहम्] and @deva[शुभम्] @deva[पद]s (per @ref[1.4.16]); @deva[म्] becomes @deva[अनुस्वार] by @ref[8.3.23]. See @ref[5.2.123].",
                "advanced": "The @deva[युस्]-affix for @deva[अहम्]//@deva[शुभम्] creates @deva[अहंयु] (ego-possessing) and @deva[शुभंयु] (fortune-possessing). The @deva[सकार] triggers @deva[पदसंज्ञा], leading to @deva[अनुस्वार] by @ref[8.3.23] (@deva[म्] → @deva[ं] in @deva[पद]-final). This parallels @ref[5.2.123] (@deva[ऊर्णायु])."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.2.121-140)")

if __name__ == "__main__":
    main()
