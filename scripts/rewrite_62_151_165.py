#!/usr/bin/env python3
"""Rewrite commentary for 6.2.151-165 (karaka-final accent, nan-compounds, bahuvrihi accent)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62151": {
        "en": {
            "simple": "Words ending in @deva[मन्] or @deva[क्तिन्] affixes, plus @deva[व्याख्यान] 'explanation', @deva[शयन] 'bed', @deva[आसन] 'seat', @deva[स्थान] 'place', @deva[क्रीत] 'bought', and the @deva[याजक] class get final-syllable accent when preceded by a @deva[कारक] word. Examples: @deva[रथवर्त्मन्] 'chariot-path', @deva[पाणिनिकृतिः] 'Pāṇini's composition', @deva[राजशयनम्] 'royal bed'.",
            "standard": "When preceded by कारक, these words receive अन्त्योदात्त: @deva[मन्]-ending (@deva[रथवर्त्मन्], @deva[शकटवर्मन्]); @deva[क्तिन्]-ending (@deva[पाणिनिकृतिः], @deva[आपिशालिकृतिः]); @deva[व्याख्यान] (@deva[ऋगयनव्याख्यानम्], @deva[छन्दोव्याख्यानम्]); @deva[शयन] (@deva[राजशयनम्], @deva[ब्राह्मणशयनम्]); @deva[आसन] (@deva[राजासनम्]); @deva[स्थान]; @deva[क्रीत]; and याजकादि.",
            "advanced": "This sūtra extends अन्त्योदात्त to multiple morphological classes in कारक-तत्पुरुष: (1) @deva[मन्]-ending action nouns; (2) @deva[क्तिन्]-ending abstract nouns; (3) five enumerated words; (4) the याजकादि gaṇa. The कारक condition (instrumental, locative, etc.) from @ref[6.2.139] is presupposed. This overrides the प्रकृतिस्वर that would otherwise apply."
        }
    },
    "62152": {
        "en": {
            "simple": "The word @deva[पुण्य] 'merit' gets final-syllable accent when preceded by a locative-case word. Examples: @deva[अध्ययनपुण्यम्] 'merit from study' (from @deva[अध्ययने] @deva[पुण्यम्]), @deva[वेदपुण्यम्] 'merit from Vedas'.",
            "standard": "In सप्तमी-तत्पुरुष, @deva[पुण्य] receives अन्त्योदात्त: @deva[अध्ययनपुण्यम्], @deva[वेदपुण्यम्]. Compounding follows @ref[2.1.40] by योग-विभाग (splitting the sūtra), taking @deva[सप्तमी] as one rule and @deva[शौण्डैः] as another. This overrides @ref[6.2.2] which would preserve पूर्वपद accent. The word @deva[पुण्य] is formed by Uṇādi @deva[यत्].",
            "advanced": "The locative compound @deva[अध्ययने] @deva[पुण्यम्] → @deva[अध्ययनपुण्यम्] follows @ref[2.1.40] via योगविभाग. The अन्त्योदात्त here supersedes @ref[6.2.2]'s अव्यय-पूर्वपद accent preservation. The Uṇādi derivation @deva[पुण्य] (← √@deva[पुण्] + @deva[यत्]) establishes the base word's formation."
        }
    },
    "62153": {
        "en": {
            "simple": "Words meaning @deva[ऊन] 'deficient' and @deva[कलह] 'quarrel' get final-syllable accent when preceded by an instrumental-case word. Examples: @deva[माषोनम्] 'short by a māṣa', @deva[मासविकलम्] 'deficient by a month', @deva[असिकलहः] 'sword-quarrel', @deva[वाक्कलहः] 'word-quarrel'.",
            "standard": "When preceded by तृतीया (instrumental), @deva[ऊन]-meaning and @deva[कलह]-meaning words receive अन्त्योदात्त. Examples: @deva[माषोनम्], @deva[कार्षापणोनम्] (deficient by amount); @deva[मासविकलम्], @deva[कार्षापणविकलम्]; @deva[असिकलहः], @deva[वाक्कलहः]. Compounding by @ref[2.1.31]. This overrides @ref[6.2.2]. Some say @deva[अर्थ] in the sūtra refers to the word-form, not the meaning.",
            "advanced": "The dual condition—ऊनार्थ (deficiency meaning) and कलह—with instrumental पूर्वपद triggers अन्त्योदात्त. Compounding follows @ref[2.1.31] @deva[तृतीया] @deva[तत्कृतार्थेन]. The @deva[अर्थ] debate: some interpret it as 'word meaning ऊन' (including @deva[ऊन], @deva[विकल], etc.); others as 'the word ऊन itself'. This overrides @ref[6.2.2]'s instrumental-पूर्वपद accent."
        }
    },
    "62154": {
        "en": {
            "simple": "The word @deva[मिश्र] 'mixed' gets final-syllable accent after an instrumental-case word, if it has no prefix and doesn't mean 'alliance'. Examples: @deva[गुडमिश्राः] 'mixed with jaggery', @deva[तिलमिश्राः] 'mixed with sesame', @deva[सर्पिमिश्राः] 'mixed with ghee'. With prefix: @deva[गुडसंमिश्राः].",
            "standard": "The word @deva[मिश्र] receives अन्त्योदात्त when: (1) preceded by instrumental; (2) without उपसर्ग; (3) not meaning compact/alliance. Examples: @deva[गुडमिश्राः], @deva[तिलमिश्राः], @deva[सर्पिमिश्राः]. Counterexamples: @deva[गुडधानाः] (not @deva[मिश्र]); @deva[गुडसंमिश्राः] (has prefix @deva[सम्]). The @deva[अनुपसर्गम्] condition here implies @ref[2.1.31] includes prefixed @deva[मिश्र] forms.",
            "advanced": "The triple condition—तृतीया-पूर्व, अनुपसर्ग, and non-compact meaning—restricts this अन्त्योदात्त. The explicit @deva[अनुपसर्गम्] has a जञापक (implicatory) function: it indicates that elsewhere (like @ref[2.1.31]) where @deva[मिश्र] is mentioned, prefixed forms are included. This subtle distinction affects compounding rules."
        }
    },
    "62155": {
        "en": {
            "simple": "तद्धित-derived words meaning 'fitted for', 'deserving', 'good for', or 'capable of' get final-syllable accent after @deva[नञ्] when the negation targets those attributes. Example: @deva[अकार्णवेष्टकिकं] @deva[मुखम्] 'a face not fitted for ear-ornaments'.",
            "standard": "After नञ्, words formed by तद्धित affixes expressing संपादिन् (@ref[5.1.99]), तदर्हति (@ref[5.1.63]), तस्मै हितम् (@ref[5.1.5]), or तस्मै प्रभवति (@ref[5.1.101]) receive अन्त्योदात्त when negating those specific attributes. The negation must target the fitness/deservingness, not other properties.",
            "advanced": "Four तद्धित semantic categories trigger अन्त्योदात्त after नञ् when negating the attributed quality: (1) संपादिन् 'suited for' (@ref[5.1.99]); (2) तदर्हति 'deserving' (@ref[5.1.63]); (3) तस्मै हितम् 'beneficial to' (@ref[5.1.5]); (4) तस्मै प्रभवति 'capable of effecting' (@ref[5.1.101]). The धर्मप्रतिषेध (attribute negation) condition ensures the accent applies only when denying fitness, not other meanings."
        }
    },
    "62156": {
        "en": {
            "simple": "Words formed with @deva[य] and @deva[यत्] affixes (not meaning 'useful for') get final-syllable accent after @deva[नञ्] when negating the attribute. Examples: @deva[अपाश्याः] 'not of the noose-group', @deva[अदन्त्यम्] 'not dental'. But @deva[अपाद्यम्] (water 'useful for feet') doesn't qualify.",
            "standard": "After नञ्, words with @deva[य]/@deva[यत्] affixes receive अन्त्योदात्त when अतदर्थ (not meaning 'useful for that'). Examples: @deva[पाश्याः] 'group of nooses' (IV.2.49) → @deva[अपाश्याः]; @deva[दन्त्यम्] 'dental' (@ref[5.1.6]) → @deva[अदन्त्यम्]; @deva[अतृण्याः], @deva[अकर्ण्यम्]. Counterexample: @deva[पाद्यम्] 'water for feet' (तदर्थ meaning) → @deva[अपाद्यम्] doesn't get this accent.",
            "advanced": "The अतदर्थ condition excludes @deva[य]/@deva[यत्] words with 'useful for' meaning (तदर्थ by @ref[4.3.116]). When @deva[य] denotes collective (@deva[पाश्य] = group of nooses) or @deva[यत्] denotes location (@deva[दन्त्य] = occurring at teeth), negation triggers अन्त्योदात्त. But @deva[पाद्य] 'foot-water' (purpose meaning) follows different accent when negated."
        }
    },
    "62157": {
        "en": {
            "simple": "Words formed with @deva[अच्] and @deva[क] affixes get final-syllable accent after @deva[नञ्] when meaning 'not capable'. Examples: @deva[अपचः] 'unable to cook' (from @deva[य] @deva[पक्तुं] @deva[न] @deva[शक्नोति]), @deva[अजयः] 'unable to conquer', @deva[अपठः] 'unable to recite'.",
            "standard": "The @deva[अच्]/@deva[क] कृत्-formed words receive अन्त्योदात्त after नञ् when expressing अशक्ति (incapacity). Examples: @deva[अपचः], @deva[अजयः], @deva[अपठः], @deva[अविक्षिपः], @deva[अविलिखः] (by @ref[3.1.134]). Counterexamples: @deva[अपचो] @deva[दीक्षितः] 'initiated one who doesn't cook'—not from incapacity but from vow. Similarly @deva[अपचः] @deva[परिव्राजकः] 'wandering ascetic'.",
            "advanced": "The अशक्ति condition distinguishes physical incapacity from vow-based abstention. A दीक्षित or परिव्राजक doesn't cook due to religious vows, not inability. The @deva[अच्]/@deva[क] affixes (@ref[3.1.134]) form agent nouns; when negated with incapacity meaning, they receive अन्त्योदात्त. Without the incapacity meaning, different accent applies."
        }
    },
    "62158": {
        "en": {
            "simple": "Words formed with @deva[अच्] and @deva[क] affixes get final-syllable accent after @deva[नञ्] when used as an insult. Example: @deva[अपचोऽयं] @deva[जाल्मः] 'this rogue doesn't cook' (implying he can but won't—greed indicated). Similarly @deva[अपठोऽयं] @deva[जाल्मः].",
            "standard": "When आक्षेप (abuse/censure) is intended, नञ् + @deva[अच्]/@deva[क]-formed words receive अन्त्योदात्त. The example @deva[अपचोऽयं] @deva[जाल्मः] 'this rogue doesn't cook' implies the person could cook but refuses (perhaps wanting more pay). This differs from @ref[6.2.157]'s incapacity meaning. Examples: @deva[अपठः], @deva[अविक्षिपः], @deva[अविलिखः].",
            "advanced": "The आक्षेप condition targets censure of willful non-performance, not incapacity. In @deva[अपचो] @deva[जाल्मः], the insult implies कर्तुमपि शक्नोति किन्तु न करोति (can do but doesn't). This contrasts with @ref[6.2.157]'s अशक्ति (genuine inability). Both yield अन्त्योदात्त but from different semantic triggers."
        }
    },
    "62159": {
        "en": {
            "simple": "When used as an insult, a negated name gets final-syllable accent. Examples: @deva[अदेवदत्तः] 'not a real Devadatta' (unworthy of the name), @deva[अयज्ञदत्तः] 'no true Yajñadatta', @deva[अविष्णुमित्रः] 'false Viṣṇumitra'.",
            "standard": "In संज्ञा (name) बहुव्रीहि with आक्षेप (censure) meaning, नञ्-पूर्व receives अन्त्योदात्त. Examples: @deva[अदेवदत्तः] 'not deserving the name Devadatta', @deva[अयज्ञदत्तः], @deva[अविष्णुमित्रः]. The insult implies the person doesn't live up to the name's meaning or dignity.",
            "advanced": "The संज्ञा + आक्षेप dual condition creates a specific नञ्-compound pattern. The negation doesn't deny existence but worthiness: @deva[अदेवदत्त] = 'one who is no [real] Devadatta'. This अन्त्योदात्त distinguishes insulting name-negation from simple negation of identity."
        }
    },
    "62160": {
        "en": {
            "simple": "After @deva[नञ्], words formed by @deva[कृत्य] affixes (like @deva[तव्य], @deva[अनीय]), by @deva[उक] and @deva[इष्णुच्], and words like @deva[चारु] 'beautiful' get final-syllable accent. Examples: @deva[अकर्तव्यम्] 'not to be done', @deva[अनागामुकम्], @deva[अनलंकरिष्णुः] 'not adorning', @deva[अचारुः] 'unbeautiful', @deva[असाधुः] 'bad'.",
            "standard": "Three classes receive अन्त्योदात्त after नञ्: (1) कृत्य affixes (@ref[3.1.95] @deva[कृत्याः] @deva[प्राङ्] @deva[ण्वुलः]): @deva[अकर्तव्यम्], @deva[अकरणीयम्]; (2) @deva[उक]: @deva[अनागामुकम्], @deva[अनपलाषुकम्]; (3) @deva[इष्णुच्] (including @deva[खिष्णुच्]): @deva[अनलंकरिष्णुः], @deva[अनाढ्यंभविष्णुः]; (4) चार्वादि gaṇa: @deva[अचारुः], @deva[असाधुः], @deva[अयौधः].",
            "advanced": "This sūtra extends अन्त्योदात्त to diverse नञ्-compounds: (1) कृत्य class by @ref[3.1.95]; (2) @deva[उक] (habitual tendency affixes); (3) @deva[इष्णुच्]/@deva[खिष्णुच्] (capable of); (4) चार्वादि lexical class. The affixes @deva[इष्णुच्]/@deva[खिष्णुच्] are grouped together morphologically. The चार्वादि includes evaluative adjectives that take this accent when negated."
        }
    },
    "62161": {
        "en": {
            "simple": "After @deva[नञ्], words formed by @deva[तृन्] affix (like @deva[कर्तृ] → @deva[कर्ता]) and the words @deva[अन्न] 'food', @deva[तीक्ष्ण] 'sharp', and @deva[शुचि] 'pure' optionally get final-syllable accent. Examples: @deva[अकर्ता] or @deva[अकर्ता] (either accent); @deva[अनन्नम्] or @deva[अनन्नम्]; @deva[अतीक्ष्णम्] or @deva[अतीक्ष्णम्]; @deva[अशुचिः] or @deva[अशुचिः].",
            "standard": "Optional अन्त्योदात्त after नञ् applies to: (1) @deva[तृन्]-ending agent nouns (@deva[अकर्ता] or @deva[अकर्ता]); (2) @deva[अन्न] (@deva[अनन्नम्] or @deva[अनन्नम्]); (3) @deva[तीक्ष्ण] (@deva[अतीक्ष्णम्] or @deva[अतीक्ष्णम्]); (4) @deva[शुचि] (@deva[अशुचिः] or @deva[अशुचिः]). The alternative is अव्यय-accent from @ref[6.2.2] (accent on @deva[अ]).",
            "advanced": "The विभाषा creates alternation between अन्त्योदात्त (this rule) and अव्यय-पूर्वपद accent (@ref[6.2.2]). The @deva[तृन्]-class includes all agent nouns in @deva[-तृ]. The three enumerated words (@deva[अन्न], @deva[तीक्ष्ण], @deva[शुचि]) form a closed list with optional accent. This optionality reflects acceptable variant pronunciations."
        }
    },
    "62162": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, after @deva[इदम्] 'this', @deva[एतद्] 'that', or @deva[तद्] 'that', the words @deva[प्रथम] 'first' and ordinal numerals get final-syllable accent when counting occurrences. Examples: @deva[इदंप्रथमः] 'this is the first time', @deva[इदंद्वितीयः] 'this is the second time', @deva[एतत्तृतीयः].",
            "standard": "In बहुव्रीहि expressing कृत्वसुच् (number of times), @deva[इदम्]/@deva[एतद्]/@deva[तद्] + @deva[प्रथम] or ordinals receive अन्त्योदात्त. The compound @deva[इदं] @deva[प्रथमं] @deva[गमनम्] = @deva[स] @deva[इदंप्रथमः] 'this is his first time going'. Examples: @deva[इदंद्वितीयः], @deva[इदंतृतीयः], @deva[एतत्प्रथमः], @deva[एतद्द्वितीयः], @deva[तत्प्रथमः], @deva[तद्द्वितीयः].",
            "advanced": "The कृत्वसुच् (वारे = number of times) condition requires the compound to mean 'nth occurrence'. The बहुव्रीहि interpretation: @deva[इदंप्रथमः] = 'one for whom this is the first [time]'. Without the कृत्वसुच् meaning, different accent applies. The sūtra specifies @deva[प्रथम] separately since it's not a derived ordinal like @deva[द्वितीय]."
        }
    },
    "62163": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, the word @deva[स्तन] 'breast' gets final-syllable accent after a numeral. Examples: @deva[द्विस्तना] 'two-breasted', @deva[त्रिस्तना] 'three-breasted', @deva[चतुःस्तनाः] 'four-breasted'. Non-numeral: @deva[दशनायस्तना] (teeth-like breasts).",
            "standard": "In संख्या-पूर्व बहुव्रीहि, @deva[स्तन] receives अन्त्योदात्त: @deva[द्विस्तना], @deva[त्रिस्तना], @deva[चतुःस्तनाः]. Counterexamples: @deva[दशनायस्तना] (non-numeral पूर्वपद); @deva[द्विशिराः] 'two-headed' (not @deva[स्तन]). The numeral and @deva[स्तन] conditions are both essential.",
            "advanced": "The संख्या-पूर्व condition restricts this अन्त्योदात्त to numeral + @deva[स्तन] बहुव्रीहि. The counterexample @deva[दशनायस्तना] 'having teeth-like breasts' (उपमान compound) shows that non-numeral पूर्वपद yields different accent. The @deva[द्विशिराः] counterexample confirms the @deva[स्तन]-specificity."
        }
    },
    "62164": {
        "en": {
            "simple": "In Vedic, the final-syllable accent on @deva[स्तन] after a numeral is optional. Examples: @deva[द्विस्तना] or @deva[द्विस्तना], @deva[चतुःस्तना] or @deva[चतुःस्तना].",
            "standard": "In छन्दस् (Vedic), @ref[6.2.163]'s अन्त्योदात्त on @deva[स्तन] becomes optional. Either @deva[द्विस्तना] (final accent) or @deva[द्विस्तना] (first accent) is acceptable. Similarly @deva[चतुःस्तना] or @deva[चतुःस्तना]. This reflects Vedic accent variation.",
            "advanced": "The Vedic विभाषा allows alternation with the general बहुव्रीहि accent pattern. The option creates @deva[द्विस्तना] (अन्त्योदात्त by @ref[6.2.163]) or @deva[द्विस्तना] (आद्युदात्त by general rules). This Vedic optionality is typical of accent rules in छन्दस् sections."
        }
    },
    "62165": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound ending in @deva[मित्र] 'friend' or @deva[अजिन] 'hide', the compound gets final-syllable accent when it's a name. Examples: @deva[देवमित्रः] 'Devamitra', @deva[ब्रह्ममित्रः] 'Brahmamitra', @deva[वृकाजिनः] 'wolf-hide wearer', @deva[कृष्णाजिनः] 'black-hide wearer'.",
            "standard": "In संज्ञा बहुव्रीहि, @deva[मित्र] and @deva[अजिन] as उत्तरपद receive अन्त्योदात्त: @deva[देवमित्रः], @deva[ब्रह्ममित्रः], @deva[वृकाजिनः], @deva[कुलाजिनः], @deva[कृष्णाजिनः]. Without संज्ञा: @deva[प्रियमित्रः] 'having a dear friend', @deva[महाजिनः] 'having great hide'. A vārttika prohibits this for ṛṣi names: @deva[विश्वामित्रः] follows @ref[6.2.106] instead.",
            "advanced": "The संज्ञा condition restricts अन्त्योदात्त to proper names. The vārttika @deva[ऋषिनामधेयेषु] @deva[मित्रस्य] @deva[प्रतिषेधः] blocks this rule for ṛṣi names like @deva[विश्वामित्र], which instead takes पूर्वपदान्त्योदात्त by @ref[6.2.106]. Non-name compounds like @deva[प्रियमित्र] (descriptive बहुव्रीहि) follow general accent."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.151-6.2.165)")
