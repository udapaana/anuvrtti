#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.3.61-75."""

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
        "53061": {
            "en": {
                "simple": "The word @deva[प्रशस्य] (praiseworthy) also becomes @deva[ज्य] before @deva[इष्ठन्] and @deva[ईयसुन्]. Examples: @deva[ज्येष्ठः] (best/eldest), @deva[ज्यायान्] (better/elder).",
                "standard": "In addition to @deva[श्र] (@ref[5.3.60]), @deva[प्रशस्य] is also replaced by @deva[ज्य] before @deva[इष्ठन्] and @deva[ईयसुन्]. The @deva[ई] of @deva[ईयस्] becomes @deva[आ] by @ref[6.4.160]. Forms: @deva[ज्येष्ठः] (best, eldest); @deva[ज्यायान्] (better, elder).",
                "advanced": "This provides an alternative @deva[आदेश]: @deva[प्रशस्य] → @deva[ज्य] before @deva[अजादि] affixes. By @ref[6.4.160], @deva[ईयस्] → @deva[आयस्] after @deva[ज्य]: @deva[ज्य] + @deva[ईयस्] → @deva[ज्यायस्] → @deva[ज्यायान्]. Thus from @deva[प्रशस्य]: @deva[श्रेष्ठः]/deva[ज्येष्ठः] (superlative); @deva[श्रेयान्]/deva[ज्यायान्] (comparative). Context determines usage (age vs. quality)."
            }
        },
        "53062": {
            "en": {
                "simple": "The word @deva[वृद्ध] (old) also becomes @deva[ज्य] before @deva[इष्ठन्] and @deva[ईयसुन्]. Examples: @deva[ज्येष्ठः] (oldest), @deva[ज्यायान्] (older). Also @deva[वर्षिष्ठः], @deva[वर्षीयान्] by @ref[6.4.157].",
                "standard": "The substitute @deva[ज्य] also replaces @deva[वृद्ध] (old/senior) before @deva[इष्ठन्] and @deva[ईयसुन्], giving @deva[ज्येष्ठः] (oldest) and @deva[ज्यायान्] (older). By @ref[6.4.157], @deva[वर्षि] also substitutes for @deva[वृद्ध], yielding @deva[वर्षिष्ठः] and @deva[वर्षीयान्]. Though @deva[वृद्ध] is not strictly @deva[गुणवचन], this rule permits the affixes.",
                "advanced": "This teaches @deva[वृद्ध] → @deva[ज्य] before @deva[अजादि] affixes, yielding @deva[ज्येष्ठः]/deva[ज्यायान्]. Alternatively, @ref[6.4.157] provides @deva[वृद्ध] → @deva[वर्षि], yielding @deva[वर्षिष्ठः]/deva[वर्षीयान्]. The @deva[ज्ञापक] (implication) is that @deva[वृद्ध], though not @deva[गुणवचन], takes @deva[इष्ठन्]/deva[ईयसुन्] by this rule's special provision."
            }
        },
        "53063": {
            "en": {
                "simple": "The word @deva[अन्तिक] (near) becomes @deva[नेद], and @deva[बाढ] (much/very) becomes @deva[साध] before @deva[इष्ठन्] and @deva[ईयसुन्]. Examples: @deva[नेदिष्ठम्] (nearest), @deva[नेदीयस्] (nearer); @deva[साधिष्ठः] (most), @deva[साधीयान्] (more).",
                "standard": "Before @deva[इष्ठन्] and @deva[ईयसुन्]: @deva[अन्तिक] (near) → @deva[नेद]; @deva[बाढ] (much) → @deva[साध]. Examples: @deva[सर्वाणीमान्यन्तिकानि, इदमेषामतिशयेन] = @deva[नेदिष्ठम्] (nearest); @deva[इदमनयोरतिशयेन] = @deva[नेदीयस्] (nearer). Similarly @deva[साधिष्ठः], @deva[साधीयान्] from @deva[बाढ].",
                "advanced": "These are @deva[आदेश] (substitutions): @deva[अन्तिक] → @deva[नेद]; @deva[बाढ] → @deva[साध] before @deva[अजादि] affixes. @deva[अन्तिक] 'near' and @deva[बाढ] 'much/emphatic' take these affixes via special substitution despite not being typical @deva[गुणवचन]. Forms: @deva[नेदिष्ठम्]/deva[नेदीयस्]; @deva[साधिष्ठः]/deva[साधीयान्]."
            }
        },
        "53064": {
            "en": {
                "simple": "Before @deva[इष्ठन्] and @deva[ईयसुन्], @deva[कन्] optionally substitutes for @deva[युवन्] (young) and @deva[अल्प] (little). Examples: @deva[कनिष्ठः] or @deva[यविष्ठः] (youngest); @deva[कनीयान्] or @deva[अल्पीयान्] (younger/smaller).",
                "standard": "The substitute @deva[कन्] (@deva[क]) optionally replaces @deva[युवन्] (young) and @deva[अल्प] (little) before @deva[इष्ठन्] and @deva[ईयसुन्]. From @deva[युवन्]: @deva[कनिष्ठः]/deva[यविष्ठः] (youngest), @deva[कनीयान्]/deva[यवीयान्] (younger). From @deva[अल्प]: @deva[कनिष्ठः]/deva[अल्पिष्ठः], @deva[कनीयान्]/deva[अल्पीयान्].",
                "advanced": "This @deva[विकल्प] rule provides @deva[कन्] as optional substitute for @deva[युवन्] and @deva[अल्प] before @deva[अजादि] affixes. For @deva[युवन्]: @deva[कनिष्ठः]/deva[कनीयान्] (with @deva[कन्]) or @deva[यविष्ठः]/deva[यवीयान्] (direct). For @deva[अल्प]: @deva[कनिष्ठः]/deva[कनीयान्] or @deva[अल्पिष्ठः]/deva[अल्पीयान्]. Both sets express superlative/comparative of 'young' or 'small'."
            }
        },
        "53065": {
            "en": {
                "simple": "The affixes @deva[विन्] and @deva[मत्] (possessive suffixes) are deleted (@deva[लुक्]) when @deva[इष्ठन्] and @deva[ईयसुन्] follow. Examples: @deva[स्रग्विन्] → @deva[स्रजिष्ठः] (most garlanded); @deva[त्वग्वत्] → @deva[त्वचिष्ठः] (most skinned).",
                "standard": "The possessive affixes @deva[विन्] and @deva[मत्]/deva[वत्] undergo @deva[लुक्] (deletion) before @deva[इष्ठन्] and @deva[ईयसुन्]. The comparative/superlative is formed on the base noun. Examples: @deva[स्रग्विन्] (garlanded) → @deva[स्रजिष्ठः], @deva[स्रजीयान्]; @deva[त्वग्वत्] (having skin) → @deva[त्वचिष्ठः], @deva[त्वचीयान्].",
                "advanced": "This @deva[लुक्] rule deletes @deva[विन्] and @deva[मत्]/deva[वत्] before @deva[अजादि] affixes, exposing the base for direct affixation. @deva[स्रग्विन्] → @deva[स्रज्] + @deva[इष्ठ] → @deva[स्रजिष्ठः]; @deva[त्वग्वत्] → @deva[त्वच्] + @deva[इष्ठ] → @deva[त्वचिष्ठः]. The @deva[ज्ञापक] (implication): @deva[विन्]/deva[मत्]-ending words do form comparatives/superlatives with @deva[ईयस्]/deva[इष्ठ]."
            }
        },
        "53066": {
            "en": {
                "simple": "The affix @deva[रूपप्] (becoming @deva[रूप]) comes after a stem to express praise without changing meaning. Examples: @deva[वैयाकरणरूपः] (a celebrated grammarian), @deva[चोररूपः] (an expert thief).",
                "standard": "The affix @deva[रूपप्] (@deva[रूप]) attaches to stems expressing @deva[प्रशंसा] (praise) without changing denotation. As a @deva[स्वार्थिक] affix, it highlights a particular meaning. Examples: @deva[प्रशस्तो वैयाकरणः] = @deva[वैयाकरणरूपः] (celebrated grammarian); @deva[चोररूपः] (expert thief—praising skill, not morality). After verbs: @deva[पचतिरूपम्] (one who cooks excellently).",
                "advanced": "The @deva[स्वार्थिक] affix @deva[रूपप्] expresses @deva[प्रशंसा] (praise/excellence) of the base meaning. The term @deva[प्रशंसा] qualifies the @deva[प्रकृत्यर्थ]—when the base connotes praise. Even negative terms like @deva[चोर] (thief) can take @deva[रूप] to praise skill. By @deva[अनुवृत्ति] of @deva[तिङश्च] (@ref[5.3.56]), verbs also take @deva[रूप]: @deva[पचतिरूपम्], @deva[पचन्तिरूपम्] (neuter, singular only since action is one)."
            }
        },
        "53067": {
            "en": {
                "simple": "The affixes @deva[कल्पप्], @deva[देश्य], and @deva[देशीयर्] come after a stem to express 'slight incompleteness' or 'almost.' Examples: @deva[पटुकल्पः] (almost clever), @deva[पटुदेश्यः], @deva[पटुदेशीयः].",
                "standard": "The affixes @deva[कल्पप्] (@deva[कल्प]), @deva[देश्य], and @deva[देशीयर्] (@deva[देशीय]) express @deva[ईषदसमाप्ति] (slight incompleteness—almost but not quite). Examples: @deva[पटुकल्पः], @deva[पटुदेश्यः], @deva[पटुदेशीयः] (tolerably clever). After verbs: @deva[पचतिकल्पम्], @deva[जल्पतिकल्पम्] (almost cooks/speaks).",
                "advanced": "These three affixes express @deva[ईषदसमाप्ति]—@deva[ईषत्] (slightly) + @deva[असमाप्ति] (non-completion): 'almost but not fully.' @deva[समाप्ति] = fullness of quality. All three are synonymous: @deva[पटुकल्पः] = @deva[पटुदेश्यः] = @deva[पटुदेशीयः] (nearly clever). The @deva[तिङश्च] @deva[अनुवृत्ति] permits verbal bases: @deva[पचतिकल्पम्]."
            }
        },
        "53068": {
            "en": {
                "simple": "The affix @deva[बहुच्] (becoming @deva[बहु]) optionally comes BEFORE a declined noun (not after) to express 'almost.' Example: @deva[बहुपटुः] (almost clever). This is the only affix that precedes its base.",
                "standard": "The affix @deva[बहुच्] (@deva[बहु]) uniquely precedes (rather than follows) a declined noun (@deva[सुप्]) to express @deva[ईषदसमाप्ति]. The @deva[चकार] indicates final-vowel accent by @ref[6.1.163]. Examples: @deva[बहुपटुः] (almost clever), @deva[बहुमृदुः] (almost soft). The word 'optionally' allows @deva[कल्प] etc. as alternatives. Does not apply to verbs.",
                "advanced": "This is the sole exception to the rule that affixes follow bases. @deva[बहुच्] is placed before @deva[सुबन्त] (declined noun), not @deva[प्रातिपदिक]. The @deva[चकार] is @deva[उदात्तनिर्देश] by @ref[6.1.163]—accent falls on the word's final vowel: @deva[बहुपटुः]. Restricted to nominals (@deva[सुपः])—not @deva[तिङन्त] (verbs). @deva[विकल्प] permits @deva[कल्प]/deva[देश्य]/deva[देशीय] alternatives."
            }
        },
        "53069": {
            "en": {
                "simple": "The affix @deva[जातीयर्] (becoming @deva[जातीय]) comes after a declined noun expressing 'type' or 'kind.' Examples: @deva[पटुजातीयः] (of the clever type, reckoned among clever people).",
                "standard": "The affix @deva[जातीयर्] (@deva[जातीय]) attaches to @deva[सुबन्त] (declined nouns) expressing @deva[प्रकार] (type/specialty). It means 'belonging to the class of.' Examples: @deva[पटुजातीयः] (one who may be reckoned among clever people); @deva[मृदुजातीयः], @deva[दर्शनीयजातीयः]. Unlike @deva[थाल्] (@ref[5.3.23]) which denotes manner itself, @deva[जातीयर्] denotes one possessing that type.",
                "advanced": "The affix @deva[जातीयर्] expresses @deva[प्रकारवचन]—having the @deva[प्रकार] (distinguishing quality). Distinction from @deva[थाल्] (@ref[5.3.23]): @deva[जातीयर्] = @deva[प्रकारवान्] (one possessing the type); @deva[थाल्] = @deva[प्रकारमात्र] (the manner itself). @deva[पटुजातीयः] = 'belonging to the class of clever people.' @deva[प्रकार] = that which distinguishes one thing from another."
            }
        },
        "53070": {
            "en": {
                "simple": "The affix @deva[क] is understood in all sūtras up to @ref[5.3.96] @deva[इवे प्रतिकृतौ]. This @deva[क] does not come after verbs; @deva[अकच्] (@ref[5.3.71]) comes after verbs instead.",
                "standard": "The affix @deva[क] governs as @deva[अधिकार] (heading) through @ref[5.3.96] (technically through @ref[5.3.86]). Example: @deva[अश्वकः], @deva[गर्दभकः]. This @deva[क] does not apply after @deva[तिङन्त] (verbs)—for verbs, @deva[अकच्] (@ref[5.3.71]) applies. The @deva[तिङश्च] (@ref[5.3.56]) should connect with @ref[5.3.71], not this sūtra.",
                "advanced": "This @deva[अधिकारसूत्र] establishes @deva[क] as the default affix through @ref[5.3.96] (or @ref[5.3.86] per some). The @deva[क] applies to @deva[प्रातिपदिक]/deva[सुबन्त] only. The @deva[अनुवृत्ति] of @deva[तिङश्च] from @ref[5.3.56] connects with @ref[5.3.71] (@deva[अकच्]), not here—verbs take @deva[अकच्], not @deva[क]."
            }
        },
        "53071": {
            "en": {
                "simple": "The affix @deva[अकच्] (becoming @deva[अक्]) is inserted before the final vowel of indeclinables and pronouns. Examples: @deva[उच्चैः] → @deva[उच्चकैः]; @deva[सर्वे] → @deva[सर्वके]. Also applies to verbs: @deva[पचति] → @deva[पचतकि].",
                "standard": "The affix @deva[अकच्] (@deva[अक्]) is inserted before the final vowel (@deva[प्राक् टेः]) of @deva[अव्यय] (indeclinables) and @deva[सर्वनामन्] (pronouns). The @deva[चकार] indicates final accent by @ref[6.1.163]. Examples: @deva[उच्चैः] → @deva[उच्चकैः]; @deva[नीचैः] → @deva[नीचकैः]; @deva[सर्वे] → @deva[सर्वके]. By @deva[तिङश्च], verbs also: @deva[पचतकि], @deva[जल्पतकि].",
                "advanced": "The affix @deva[अकच्] is an @deva[आगम] (insertion) @deva[प्राक् टेः] (before final vowel) of @deva[अव्यय] and @deva[सर्वनामन्]. It blocks @deva[क]. The @deva[चकार] marks @deva[अन्तोदात्त] by @ref[6.1.163]. For pronouns, sometimes added to @deva[प्रातिपदिक] (@deva[युष्मकाभिः]), sometimes to @deva[सुबन्त] (@deva[त्वयका]). Vārttika: @deva[काम्] after @deva[तूष्णीम्] → @deva[तूष्णीकाम्]. @deva[तिङश्च] extends to verbs: @deva[पचतकि]."
            }
        },
        "53072": {
            "en": {
                "simple": "When @deva[अकच्] is added to an indeclinable ending in @deva[क्], that @deva[क्] becomes @deva[द्]. Examples: @deva[धिक्] → @deva[धकित्]; @deva[हिरुक्] → @deva[हिरकुत्]; @deva[पृथक्] → @deva[पृथकत्].",
                "standard": "When @deva[अकच्] (@deva[अक्]) is added to @deva[अव्यय] (indeclinables) ending in @deva[क्], the final @deva[क्] is replaced by @deva[द्]. No pronoun ends in @deva[क्], so this applies only to indeclinables. Examples: @deva[धिक्] + @deva[अक्] → @deva[धकित्]/deva[धकिद्]; @deva[हिरुक्] → @deva[हिरकुत्]; @deva[पृथक्] → @deva[पृथकत्].",
                "advanced": "This @deva[आदेश] teaches @deva[क्] → @deva[द्] for @deva[अव्ययान्त ककार] when @deva[अकच्] follows. The rule applies only to @deva[अव्यय] (no @deva[सर्वनामन्] ends in @deva[क्]). Process: @deva[हिरुक्] + @deva[अक्] → @deva[हिर्] + @deva[अक्] + @deva[उक्] → @deva[हिरकुक्] → @deva[हिरकुद्] (by this rule) → @deva[हिरकुत्] (sentence-final)."
            }
        },
        "53073": {
            "en": {
                "simple": "The affixes @deva[क] and @deva[अकच्] come when something unknown is spoken of—expressing uncertainty about possession or relation. Examples: @deva[अश्वकः] (whose horse?), @deva[उच्चकैः] (is it high?).",
                "standard": "The affixes @deva[क] (@ref[5.3.70]) and @deva[अकच्] (@ref[5.3.71]) express @deva[अज्ञात] (unknown)—uncertainty about the relation of something, not the thing itself. Examples: @deva[अश्वकः] (whose horse is this?); @deva[गर्दभकः] (whose donkey?); @deva[उच्चकैः] (is it high?); @deva[पचतकि] (does he cook?).",
                "advanced": "The @deva[अज्ञात] sense refers to unknown @deva[संबन्ध] (relation), not the object itself. @deva[क] applies to @deva[सुबन्त], @deva[अकच्] to @deva[अव्यय/सर्वनामन्/तिङन्त]. Examples: @deva[अश्वकः] = 'horse (whose?)'; @deva[सर्वके] = 'was it all agreed?'; @deva[पचतकि] = 'does he cook?' The affix adds a questioning/uncertain nuance."
            }
        },
        "53074": {
            "en": {
                "simple": "The affixes @deva[क] and @deva[अकच्] also come when something is spoken of with contempt. Examples: @deva[अश्वकः] (a sorry horse), @deva[पचतकि] (he cooks contemptibly).",
                "standard": "The affixes @deva[क] and @deva[अकच्] also express @deva[कुत्सित] (contempt/disparagement). Examples: @deva[अश्वकः] (a worthless horse); @deva[गर्दभकः], @deva[उष्ट्रकः]; @deva[उच्चकैः], @deva[नीचकैः]; @deva[पचतकि] (he cooks contemptibly); @deva[जल्पतकि] (he speaks insignificantly).",
                "advanced": "The @deva[कुत्सितार्थ] (contemptuous sense) is another meaning for @deva[क]/deva[अकच्]. The same forms express either @deva[अज्ञात] (@ref[5.3.73]) or @deva[कुत्सित]—context determines meaning. @deva[अश्वकः] = 'whose horse?' (unknown) or 'a sorry horse' (contempt). @deva[पचतकि] = 'does he cook?' or 'he cooks poorly.'"
            }
        },
        "53075": {
            "en": {
                "simple": "When the entire word is a proper name and expresses contempt, @deva[कन्] (not @deva[क]) is used. Examples: @deva[शूद्रकः] (the lowly Śūdraka), @deva[धारकः], @deva[चूर्णकः].",
                "standard": "When the whole word functions as a @deva[संज्ञा] (proper name) with contemptuous sense, the affix @deva[कन्] (@deva[क]) replaces @deva[क]. The @deva[कुत्सित] meaning from @ref[5.3.74] continues. Examples: @deva[शूद्रकः] (name expressing contempt); @deva[धारकः]; @deva[चूर्णकः]. @deva[कन्] blocks @deva[क].",
                "advanced": "This @deva[अपवाद] provides @deva[कन्] instead of @deva[क] when the @deva[समुदाय] (entire word) is a @deva[संज्ञा] (proper name) in @deva[कुत्सितार्थ]. The @deva[अनुवृत्ति] of @deva[कुत्सिते] continues from @ref[5.3.74]. @deva[कन्] differs from @deva[क] in accent and certain phonological behaviors. Names: @deva[शूद्रकः], @deva[धारकः], @deva[चूर्णकः]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.3.61-75)")

if __name__ == "__main__":
    main()
