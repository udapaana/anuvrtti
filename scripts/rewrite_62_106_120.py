#!/usr/bin/env python3
"""Rewrite commentary for 6.2.106-120 (bahuvrihi accent and adhikara)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62106": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, the word @deva[विश्व] gets final-syllable accent when the compound is a name. Examples: @deva[विश्वदेवः], @deva[विश्वयशाः], @deva[विश्वमहान्]. This overrides the general rule @ref[6.2.1] that would preserve the original accent.",
            "standard": "The word @deva[विश्व] 'all' receives अन्त्योदात्त in बहुव्रीहि संज्ञा compounds, overriding @ref[6.2.1]. In @deva[विश्वदेवः] (a name), @deva[विश्व]'s final is acute. But @deva[विश्वदेवाः] (द्वन्द्व = @deva[विश्वे] @deva[च] @deva[देवाः]) and non-name @deva[विश्वदेवः] (@deva[विश्वेदेवा] @deva[अस्य]) follow @ref[6.2.1]. Names like @deva[विश्वामित्रः] and @deva[विश्वाजिनः] have final accent.",
            "advanced": "The संज्ञा condition creates a three-way distinction: (1) बहुव्रीहि names like @deva[विश्वदेवः] get पूर्वपदान्त्योदात्त; (2) द्वन्द्व @deva[विश्वदेवाः] retains original accent by @ref[6.2.1]; (3) non-name बहुव्रीहि @deva[विश्वदेवः] also follows @ref[6.2.1]. The names @deva[विश्वामित्र] and @deva[विश्वाजिन] with compound-final accent demonstrate that specific proper names may follow different patterns."
        }
    },
    "62107": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound that's a name, the first member gets final-syllable accent before @deva[उदर] 'belly', @deva[अश्व] 'horse', or @deva[इषु] 'arrow'. Examples: @deva[वृकोदरः], @deva[दामोदरः], @deva[हर्यश्वः], @deva[यौवनाश्वः], @deva[महेषुः].",
            "standard": "Before @deva[उदर], @deva[अश्व], or @deva[इषु] in बहुव्रीहि names, the पूर्वपद receives अन्त्योदात्त. This overrides @ref[6.2.1]. The word @deva[वृक] has first-syllable accent by Phiṭ II.7; @deva[दाम] is formed by @deva[मनिन्] affix. Examples: @deva[वृकोदरः] 'wolf-bellied' (Bhīma), @deva[हर्यश्वः] 'tawny-horsed', @deva[सुवर्णपुङ्खेषुः] 'gold-feathered-arrow'.",
            "advanced": "The enumeration @deva[उदराश्विष्वः] identifies उत्तरपद triggering पूर्वपदान्त्योदात्त in संज्ञा बहुव्रीहि. The word @deva[वृक] (Phiṭ II.7 आद्युदात्त) and @deva[दाम] (@deva[मनिन्]-derived) would retain original accent by @ref[6.2.1], but संज्ञा condition overrides. The epic name @deva[वृकोदर] (Bhīma) exemplifies this pattern."
        }
    },
    "62108": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound expressing reproach, the first member gets final-syllable accent before @deva[उदर], @deva[अश्व], or @deva[इषु]. Examples: @deva[कुण्डोदरः] 'pot-bellied' (insult), @deva[घटोदरः], @deva[कटुकाश्वः] 'bitter-horsed', @deva[चलाचलेषुः] 'wobbly-arrowed'.",
            "standard": "When निन्दा (reproach) is intended, the same three words @deva[उदर], @deva[अश्व], @deva[इषु] trigger पूर्वपदान्त्योदात्त. The word @deva[कुण्ड] has आद्युदात्त as a neuter name (Phiṭ II.3); @deva[घट] is formed by @deva[अच्] (@ref[3.1.134]). Reproachful compounds like @deva[कुण्डोदरः] 'pot-belly' or @deva[स्यन्दिताश्वः] 'runny-horsed' override @ref[6.2.1].",
            "advanced": "The निन्दा condition parallels संज्ञा in triggering the same accent pattern for @deva[उदर]/अश्व/@deva[इषु] compounds. The word @deva[कुण्ड] (Phiṭ II.3 नपुंसकं) and @deva[घट] (@ref[3.1.134] @deva[अच्]) would normally retain first accent. The semantic condition 'reproach' creates pejorative compounds: @deva[कुण्डोदर] implies unseemly corpulence, @deva[अनिघातेषु] implies ineffective arrows."
        }
    },
    "62109": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound with @deva[बन्धु] 'relative' as second member, a first member ending in feminine @deva[ई] (a @deva[नदी] word) gets final-syllable accent. Examples: @deva[गार्गीबन्धुः] 'one whose relative is Gārgī', @deva[वात्सीबन्धुः].",
            "standard": "When the पूर्वपद is a नदी-ending feminine (in @deva[ई]) and the उत्तरपद is @deva[बन्धु], the पूर्वपद receives अन्त्योदात्त. The words @deva[गार्गी] and @deva[वात्सी] are formed by @deva[ङीष्] (@ref[4.1.16]) from @deva[गार्ग्य] and @deva[वात्स्य] (यञ्-ending by @ref[4.1.105]), giving them आद्युदात्त. This rule overrides @ref[6.2.1].",
            "advanced": "The नदी condition (@deva[ई]-ending feminines) specifies the morphological class triggering this accent. Patronymic feminines like @deva[गार्गी] (← @deva[गार्ग्य] + @deva[ङीष्] by @ref[4.1.16]) have inherent आद्युदात्त. The बन्धु-specific rule creates compounds identifying kinship: @deva[गार्गीबन्धुः] = one whose बन्धु is a Gārgī-clan woman."
        }
    },
    "62110": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, when a @deva[क्त]-participle with a prefix stands first, it optionally gets final-syllable accent. Example: @deva[प्रधौतमुखः] 'washed-face' can have accent on @deva[त], on final @deva[खः] (@ref[6.2.169]), or on @deva[प्र] (@ref[6.2.49], @ref[6.2.1]).",
            "standard": "This rule gives three accent options for उपसर्गपूर्व निष्ठा (prefixed past participle) in बहुव्रीहि: (1) अन्त्योदात्त on participle's final by this rule; (2) accent on उत्तरपद's final by @ref[6.2.169]; (3) original prefix accent by @ref[6.2.49] and @ref[6.2.1]. Thus @deva[प्रधौतमुखः] or @deva[प्रधौतमुखः] or @deva[प्रधौतमुखः]. When @deva[मुख] means 'mouth', @ref[6.2.167] applies.",
            "advanced": "The अन्यतरस्याम् option creates a three-way alternation closing the @ref[6.2.92] अधिकार. Option (1): पूर्वपदान्त्योदात्त by this sūtra; (2): उत्तरपदान्त्योदात्त by @ref[6.2.169]; (3): प्रकृतिस्वर on उपसर्ग by @ref[6.2.49]/@ref[6.2.1]. The @deva[मुख] 'mouth' vs. 'face' distinction invokes @ref[6.2.167]'s optional accent on @deva[ख]."
        }
    },
    "62111": {
        "en": {
            "simple": "This is a heading rule (@deva[अधिकार]). From here through @ref[6.2.136], the sūtras teach that the first syllable of the second member (@deva[उत्तरपद]) gets acute accent. The word @deva[उत्तरपद] continues to the chapter's end; @deva[आदि] 'first syllable' extends to @ref[6.2.187].",
            "standard": "This अधिकार establishes @deva[उत्तरपदाद्युदात्त]: the उत्तरपद's first syllable receives acute. The scope differs: @deva[उत्तरपद] governs through chapter end, while @deva[आदि] extends only to @ref[6.2.187]. This section (@ref[6.2.111]-@ref[6.2.136]) assigns आद्युदात्त to specific उत्तरपद in बहुव्रीहि compounds.",
            "advanced": "The dual-scope अधिकार separates @deva[उत्तरपद] (through 6.2 end) from @deva[आदि] (through @ref[6.2.187]). This technical structure allows later rules to reference उत्तरपद accent without the 'first syllable' specification. The phrase @deva[कुण्डं] @deva[वनम्] at @ref[6.2.136] marks the आदि section's terminus for this specific accent pattern."
        }
    },
    "62112": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, the word @deva[कर्ण] 'ear' as second member gets first-syllable accent when preceded by a color word or a mark word. Examples: @deva[शुक्लकर्णः] 'white-eared', @deva[कृष्णकर्णः] 'black-eared'; @deva[दात्राकर्णः], @deva[शङ्कूकर्णः] (ears marked with scythe or stake shapes).",
            "standard": "The word @deva[कर्ण] receives उत्तरपदाद्युदात्त when preceded by वर्ण (color) or लक्षण (mark) words in बहुव्रीहि. Color examples: @deva[शुक्लकर्णः], @deva[कृष्णकर्णः]. Mark examples: @deva[दात्राकर्णः], @deva[शङ्कूकर्णः]—marks branded on cattle ears. The lengthening in @deva[दात्रा]- and @deva[शङ्कू]- follows @ref[6.3.115].",
            "advanced": "The dual condition वर्ण/लक्षण identifies cattle-branding terminology. The लक्षण refers to identifying marks (@deva[दात्र] 'scythe', @deva[शङ्कु] 'stake') branded on ears. Vowel lengthening by @ref[6.3.115] @deva[संख्यासुपूर्वस्य] produces @deva[दात्राकर्ण], @deva[शङ्कूकर्ण]. Without these conditions, @deva[कर्ण] would follow general बहुव्रीहि accent."
        }
    },
    "62113": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, @deva[कर्ण] 'ear' as second member gets first-syllable accent when the compound is a name or denotes resemblance. Name examples: @deva[कुञ्चिकर्णः], @deva[मणिकर्णः]. Resemblance: @deva[गोकर्णः] 'cow-eared', @deva[खरकर्णः] 'donkey-eared'.",
            "standard": "This extends @deva[कर्ण]'s आद्युदात्त to संज्ञा (names) and उपमान (resemblance) बहुव्रीहि. Names: @deva[कुञ्चिकर्णः], @deva[मणिकर्णः] (proper names). Resemblance: @deva[गोकर्णः], @deva[खरकर्णः] describe persons with ears like a cow or donkey. Both conditions trigger उत्तरपदाद्युदात्त.",
            "advanced": "The संज्ञा/उपमान conditions extend @ref[6.2.112]'s scope beyond वर्ण/लक्षण. Resemblance compounds (@deva[गोकर्ण] 'having cow-like ears') and proper names (@deva[मणिकर्ण]) both receive @deva[कर्ण]-आद्युदात्त. The semantic overlap with @ref[6.2.112] suggests these are complementary rather than competing conditions."
        }
    },
    "62114": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound denoting a name or comparison, the words @deva[कण्ठ] 'throat', @deva[पृष्ठ] 'back', @deva[ग्रीवा] 'neck', and @deva[जङ्घा] 'shank' as second member get first-syllable accent. Examples: @deva[शितिकण्ठः] (Śiva), @deva[नीलकण्ठः]; @deva[सुग्रीवः], @deva[दशग्रीवः] (Rāvaṇa).",
            "standard": "Four body-part terms receive उत्तरपदाद्युदात्त in संज्ञा or उपमा बहुव्रीहि: @deva[कण्ठ], @deva[पृष्ठ], @deva[ग्रीवा], @deva[जङ्घा]. Names: @deva[शितिकण्ठः], @deva[नीलकण्ठः] (Śiva epithets); @deva[काण्डपृष्टः], @deva[नाकपृष्टः]; @deva[सुग्रीवः] (the monkey king), @deva[दशग्रीवः] (ten-necked Rāvaṇa). Resemblance: @deva[खरकण्ठः] 'donkey-throated', @deva[गोपृष्टः] 'cow-backed'.",
            "advanced": "The enumeration @deva[कण्ठपृष्ठग्रीवाजङ्घाः] parallels @deva[कर्ण] in @ref[6.2.112]-@ref[6.2.113]. Epic names like @deva[सुग्रीव] (Vālmīki's monkey ally) and @deva[दशग्रीव] (Rāvaṇa) demonstrate संज्ञा usage. The उपमा condition handles resemblance compounds like @deva[अश्वग्रीवः] 'horse-necked'. Both contexts trigger उत्तरपदाद्युदात्त on the body-part term."
        }
    },
    "62115": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, @deva[शृङ्ग] 'horn' as second member gets first-syllable accent when denoting age, a name, or resemblance. Age examples: @deva[उद्गतशृङ्गः] 'sprouted horns', @deva[द्व्यंगुलशृङ्गः] 'two-finger horns'. Name: @deva[ऋष्यशृङ्गः]. Resemblance: @deva[गोशृङ्गः] 'cow-horned'.",
            "standard": "The word @deva[शृङ्ग] receives उत्तरपदाद्युदात्त in वयस् (age), संज्ञा, or उपमान compounds. Age denotes cattle developmental stages: @deva[उद्गतशृङ्ग] 'horns emerged', @deva[अंगुलशृङ्ग] 'inch-long horns'. The name @deva[ऋष्यशृङ्ग] (the ṛṣi) and resemblance @deva[मेषशृङ्ग] 'ram-horned' also qualify. Without these conditions: @deva[स्थूलशृङ्गः] 'thick-horned' takes regular accent.",
            "advanced": "The वयसि condition adds to संज्ञा/उपमान, creating a three-way trigger for @deva[शृङ्ग]-आद्युदात्त. The वयस् usage describes cattle horn development stages (useful for age assessment). The counterexample @deva[स्थूलशृङ्गः] (describing horn size, not age/name/resemblance) shows the condition's precision. The ऋṣi @deva[ऋष्यशृङ्ग] exemplifies संज्ञा usage."
        }
    },
    "62116": {
        "en": {
            "simple": "After a negative particle (@deva[नञ्]), the words @deva[जर] 'old age', @deva[मर] 'death', @deva[मित्र] 'friend', and @deva[मृत] 'dead' get first-syllable accent in @deva[बहुव्रीहि]. Examples: @deva[अजरः] 'ageless', @deva[अमरः] 'deathless', @deva[अमित्रः] 'friendless/enemy', @deva[अमृतः] 'undying'.",
            "standard": "These four words receive उत्तरपदाद्युदात्त after नञ् in बहुव्रीहि: @deva[अजरः], @deva[अमरः], @deva[अमित्रः], @deva[अमृतः]. The नञ् condition is essential—@deva[ब्राह्मणमित्रः] 'brahmin's friend' doesn't qualify. And only these four words: @deva[अशत्रुः] 'enemy-less' takes final accent by @ref[6.2.172] instead.",
            "advanced": "The नञ्-पूर्व condition restricts this आद्युदात्त to negative बहुव्रीहि with the enumerated four words. The semantic pattern: @deva[अजर] 'free from aging', @deva[अमर] 'free from death', @deva[अमित्र] 'without friend' (hence enemy), @deva[अमृत] 'not dead/immortal'. The counterexample @deva[अशत्रु] (following @ref[6.2.172] अन्तोदात्त) shows this is a closed list."
        }
    },
    "62117": {
        "en": {
            "simple": "After @deva[सु] 'good' in a @deva[बहुव्रीहि], stems ending in @deva[मन्] or @deva[अस्] (except @deva[लोमन्] and @deva[उषस्]) get first-syllable accent. Examples: @deva[सुकर्मन्], @deva[सुधर्मन्], @deva[सुपयस्], @deva[सुयशस्]. Also @deva[सुस्रत्] and @deva[सुध्वत्] from roots @deva[स्रंस्] and @deva[ध्वंस्] with @deva[क्विप्].",
            "standard": "After @deva[सु], मन्-ending and अस्-ending stems receive उत्तरपदाद्युदात्त, excluding @deva[लोमन्] and @deva[उषस्]. Thus @deva[सुकर्मन्] 'good-actioned', @deva[सुप्रथिमन्] 'well-renowned', @deva[सुपयस्] 'good-milked', @deva[सुयशस्] 'well-famed'. Also क्विप्-formed @deva[सुस्रत्] (← @deva[स्रंस्]) and @deva[सुध्वत्] (← @deva[ध्वंस्]), where final @deva[स्] → @deva[द्] by @ref[8.2.72].",
            "advanced": "The मन्/अस्-ending condition with @deva[लोमन्]/@deva[उषस्] exceptions creates a morphologically defined class. The क्विप्-formed stems @deva[स्रत्] (← @deva[स्रंस्]) and @deva[ध्वत्] (← @deva[ध्वंस्]) undergo @ref[8.2.72] @deva[संयोगान्तस्य] @deva[लोपः] for final @deva[स्] → @deva[द्]. This substitution is @deva[स्थानिवत्] for accent purposes, treating the derived form as if still स्-final."
        }
    },
    "62118": {
        "en": {
            "simple": "After @deva[सु] in a @deva[बहुव्रीहि], the words @deva[क्रतु] etc. get first-syllable accent. Examples: @deva[सुक्रतुः] 'of good will', @deva[सुदृशीकः] 'good-looking', @deva[सुप्रपूर्तिः], @deva[सुहव्यः], @deva[सुभगः] 'fortunate', @deva[सुप्रतीकः] 'handsome'.",
            "standard": "This sūtra lists the @deva[क्रत्वादि] gaṇa receiving उत्तरपदाद्युदात्त after @deva[सु] in बहुव्रीहि. The enumerated words: @deva[क्रतु], @deva[दृशीक], @deva[प्रपूर्ति], @deva[हव्य], @deva[भग], @deva[प्रतीक]. Thus @deva[सुक्रतुः] 'having good intention', @deva[सुभगः] 'blessed with fortune'.",
            "advanced": "The क्रत्वादि gaṇa provides a closed list for this accent rule. The compounds @deva[सुक्रतु] 'well-intentioned', @deva[सुभग] 'fortunate', @deva[सुप्रतीक] 'fair-faced' are बहुव्रीहि with @deva[सु] as पूर्वपद. This supplements @ref[6.2.117]'s morphological class (मन्/अस्-stems) with a lexical list."
        }
    },
    "62119": {
        "en": {
            "simple": "In Vedic, when @deva[सु] precedes a two-syllable word with first-syllable accent in a @deva[बहुव्रीहि], that word keeps its original accent. Examples from Ṛgveda: @deva[स्वश्वः] 'having good horses' (from @deva[अश्व]), @deva[सुरथः] 'having good chariot' (from @deva[रथ]).",
            "standard": "In छन्दस् (Vedic), a disyllabic आद्युदात्त word after @deva[सु] in बहुव्रीहि retains its first-syllable accent. Ṛgveda X.76.8 has @deva[स्वश्वासिन्धुः] @deva[सुरथा] @deva[सुवासा]. The words @deva[अश्व] (by @deva[क्वन्], Uṇādi I.151) and @deva[रथ] (by @deva[क्थन्], Uṇādi II.2) are inherently आद्युदात्त.",
            "advanced": "This Vedic rule preserves original accent for द्व्यक्षर आद्युदात्त words after @deva[सु]. The क्वन्-derived @deva[अश्व] and क्थन्-derived @deva[रथ] (Uṇādi I.151, II.2) maintain their inherent first-syllable acute. The Ṛgvedic citation demonstrates that Vedic accent patterns differ from classical rules, preserving प्रकृतिस्वर in specific compound types."
        }
    },
    "62120": {
        "en": {
            "simple": "In Vedic, after @deva[सु] in a @deva[बहुव्रीहि], the words @deva[वीर] 'hero' and @deva[वीर्य] 'heroism' get first-syllable accent. Examples from Ṛgveda: @deva[सुवीरेण] @deva[ते], @deva[सुवीर्यं] @deva[स्वश्व्यम्]. The word @deva[सुवीर्य] has acute on @deva[वी].",
            "standard": "In छन्दस्, @deva[वीर] and @deva[वीर्य] receive उत्तरपदाद्युदात्त after @deva[सु]. Ṛgveda IV.17.4: @deva[सुवीरस्ते] @deva[जनिता]; VIII.1.36: @deva[सुवीर्यं] @deva[स्वश्व्यम्]. The word @deva[वीर्य] is formed by @deva[यत्] affix and would have first-syllable accent by @ref[6.1.213], but its explicit enumeration shows that rule doesn't apply here.",
            "advanced": "The explicit listing of @deva[वीर]/वीर्य] indicates that @ref[6.1.213] @deva[क्त्वातोसुन्कसुनः] doesn't determine their accent in these compounds. The यत्-derived @deva[वीर्य] would normally follow @ref[6.1.213], but this sūtra specifies उत्तरपदाद्युदात्त after @deva[सु]. The Vedic citations confirm the accent on @deva[वी] in @deva[सुवीर] and @deva[सुवीर्य]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.106-6.2.120)")
