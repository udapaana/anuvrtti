#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.1.121-136."""
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
        "51121": {
            "en": {
                "simple": "Affixes meaning 'nature' (taught hereafter) do not come after negative @deva[नञ्] @deva[तत्पुरुष] compounds, except after words like @deva[चतुर], @deva[संगत], @deva[लवण], @deva[वट], @deva[बुध], @deva[कत], @deva[रस], and @deva[लस]. So @deva[अपति] 'husbandless' forms only @deva[अपतित्वम्] or @deva[अपतिता], not *@deva[अपतीयम्] etc.",
                "standard": "This @[sūtra] restricts the upcoming @deva[भाव]-denoting affixes from applying after @deva[नञ्तत्पुरुष] compounds. Such compounds (negative @deva[तत्पुरुष]) take only @deva[त्व] and @deva[तल्] from @ref[5.1.119-120], not the special affixes taught subsequently. Eight exceptions permit all affixes: @deva[अचतुरत्वम्/अचातुर्यम्] etc. Examples: @deva[अपटु] → @deva[अपटुत्वम्/अपटुता] only; @deva[अरमणीय] → @deva[अरमणीयत्वम्/अरमणीयता] only.",
                "advanced": "The @deva[प्रत्ययनिवृत्ति] (affix-prohibition) applies to the special @deva[भाव]-affixes of @ref[5.1.122] onward when the base is a @deva[नञ्तत्पुरुष] (negative determinative compound). The eight-item exception list (@deva[चतुरसंगतलवणवटबुधकतरसलसः]) represents stems where negative compounds still take the full range of @deva[भावप्रत्यय] options. The restriction ensures semantic clarity: abstract qualities from negated concepts typically use only the basic @deva[त्व/तल्] derivation, while the listed exceptions permit richer affixal alternatives due to lexical conventionalization."
            }
        },
        "51122": {
            "en": {
                "simple": "The affix @deva[इमनिच्] (@deva[इमन्]) optionally comes after @deva[पृथु] and similar words to express 'nature of'. @deva[पृथु] 'broad' → @deva[प्रथिमा] 'breadth'. The affix @deva[अण्] etc. also apply, giving @deva[पार्थवम्].",
                "standard": "After the @deva[पृथ्वादि] class, the affix @deva[इमनिच्] (realized as @deva[इमन्]) optionally denotes @deva[भाव] 'nature'. The word @deva[वा] 'optionally' ensures that @deva[अण्] and other affixes from @ref[5.1.119] onward also remain available. Derivation: @deva[पृथोर्भावः] → @deva[पृथु] + @deva[इमन्] → @deva[पृथिमन्] (by @ref[6.4.155] @deva[उ]-deletion, @ref[6.4.161] vowel-change) → nom. @deva[प्रथिमा]. Alternative: @deva[पार्थवम्] by @ref[5.1.131]. Similarly @deva[मृदु] → @deva[म्रदिमा] or @deva[मार्दवम्].",
                "advanced": "The @deva[पृथ्वादि] @deva[गण] triggers optional @deva[इमनिच्]-suffixation in @deva[भाव] sense. The affix @deva[इमन्] undergoes complex phonological derivation: @deva[पृथु] + @deva[इमन्] → @deva[पृथ्] + @deva[इमन्] (by @ref[6.4.155] @deva[उकारलोप]) → @deva[प्रथ्] + @deva[इमन्] (by @ref[6.4.161] @deva[संप्रसारण]). The @deva[विकल्प] status allows paradigmatic choice between @deva[इमन्]-derivatives and @deva[अण्]-derivatives, creating doublets like @deva[प्रथिमा]//@deva[पार्थवम्] with identical meaning but different stylistic registers."
            }
        },
        "51123": {
            "en": {
                "simple": "The affixes @deva[ष्यञ्] and @deva[इमनिच्] come after words for colors and the @deva[दृढादि] class to express 'nature'. @deva[शुक्ल] 'white' → @deva[शौक्ल्यम्] or @deva[शुक्लिमन्]. @deva[दृढ] 'firm' → @deva[दार्ढ्यम्] or @deva[द्रढिमा].",
                "standard": "Color-denoting words and the @deva[दृढादि] class take both @deva[ष्यञ्] and @deva[इमनिच्] to express @deva[भाव]. The @deva[ष्] of @deva[ष्यञ्] indicates feminine formation by @deva[ङीष्] (per @ref[3.1.41]). Examples: @deva[शुक्लस्य भावः] → @deva[शौक्ल्यम्] (by @deva[ष्यञ्]) or @deva[शुक्लिमन्] (by @deva[इमनिच्]); also @deva[शुक्लत्वम्/शुक्लता] remain available. @deva[कृष्ण] 'black' → @deva[कार्ष्ण्यम्/कृष्णिमन्/कृष्णत्वम्/कृष्णता]; @deva[दृढ] → @deva[दार्ढ्यम्/द्रढिमा/दृढत्वम्/दृढता].",
                "advanced": "The @deva[वर्णवाचिन्] (color-words) and @deva[दृढादि] @deva[गण] are co-domains for dual-affix licensing (@deva[ष्यञ्] and @deva[इमनिच्]). The @deva[षकार] of @deva[ष्यञ्] is an @deva[इत्] triggering @ref[3.1.41] for @deva[ङीष्]-feminine. This creates a rich derivational paradigm: for @deva[शुक्ल], four @deva[भाव]-forms exist (@deva[शौक्ल्यम्], @deva[शुक्लिमन्], @deva[शुक्लत्वम्], @deva[शुक्लता]). The @deva[इमनिच्] forms show characteristic @deva[मत्वर्थीय] inflection (nom. sg. @deva[°मा])."
            }
        },
        "51124": {
            "en": {
                "simple": "The affix @deva[ष्यञ्] comes after words expressing quality and the @deva[ब्राह्मणादि] class to express 'nature or action'. @deva[जड] 'dull' → @deva[जाड्यम्] 'dullness/stupidity'. @deva[ब्राह्मण] → @deva[ब्राह्मण्यम्] 'brahmanhood/priestly conduct'.",
                "standard": "This @[sūtra] extends @deva[ष्यञ्] to quality-words (@deva[गुणवाचिन्]) and the @deva[ब्राह्मणादि] class. The word @deva[च] 'and' in the @[sūtra] includes @deva[भाव] 'nature' alongside @deva[कर्म] 'action/occupation'. Both @deva[भाव] and @deva[कर्म] continue as governing senses through the end of this chapter. Examples: @deva[जडस्य भावः कर्म वा] → @deva[जाड्यम्]; @deva[ब्राह्मणस्य भावः कर्म वा] → @deva[ब्राह्मण्यम्]; @deva[माणवकस्य] → @deva[माणव्यम्].",
                "advanced": "The @deva[गुणवाचिन्] domain plus @deva[ब्राह्मणादि] @deva[गण] trigger @deva[ष्यञ्] for both @deva[भाव] (abstract nature) and @deva[कर्म] (characteristic activity/occupation). The @deva[अधिकार] of @deva[भाव] and @deva[कर्म] extends to @deva[अध्यायसमाप्ति] (chapter-end). This dual semantic scope distinguishes the @deva[ष्यञ्]-derivatives: @deva[ब्राह्मण्यम्] can mean 'the state of being a @deva[ब्राह्मण]' (@deva[भाव]) or 'the duties/conduct of a @deva[ब्राह्मण]' (@deva[कर्म])."
            }
        },
        "51125": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[स्तेन] 'thief' to mean 'nature/action thereof', with @deva[न] deleted. @deva[स्तेनस्य भावः कर्म वा] → @deva[स्तेयम्] 'theft/thieving'.",
                "standard": "After @deva[स्तेन] 'thief' in the genitive, the affix @deva[यत्] (realized as @deva[य]) applies with obligatory deletion of @deva[न्]. Derivation: @deva[स्तेन] + @deva[य] → @deva[स्ते] + @deva[य] (न्-deletion) → @deva[स्तेयम्] 'theft'. Some grammarians split this into two rules: (1) @deva[स्तेनात् ष्यञ्] giving @deva[स्तैन्यम्], (2) @deva[ततो यन् न-लोपश्च] giving @deva[स्तेयम्]. Both forms are thus attested.",
                "advanced": "The @[sūtra] prescribes @deva[यत्]-suffixation with concomitant @deva[नकारलोप] for @deva[स्तेन]-base. The @deva[नलोप] is @deva[अवयवलोप] (stem-internal deletion), yielding @deva[स्ते] + @deva[य] → @deva[स्तेयम्]. An alternative @deva[पाठ] divides the rule, licensing parallel @deva[ष्यञ्]-derivation (@deva[स्तैन्यम्]) alongside @deva[यत्]-derivation (@deva[स्तेयम्]). Both derivatives appear in classical usage with identical @deva[भाव]//@deva[कर्म] semantics."
            }
        },
        "51126": {
            "en": {
                "simple": "The affix @deva[य] comes after @deva[सखि] 'friend' to express 'nature/action thereof'. @deva[सखि] → @deva[सख्यम्] 'friendship'. By @deva[वार्त्तिक], also @deva[दूत] → @deva[दूत्यम्] and @deva[वणिक्] → @deva[वणिज्यम्].",
                "standard": "After @deva[सखि] 'friend', the bare affix @deva[य] (not @deva[यत्]) denotes @deva[भाव/कर्म]. Derivation: @deva[सखि] + @deva[य] → @deva[सख्यम्] 'friendship'. A @deva[वार्त्तिक] extends this to @deva[दूत] 'messenger' → @deva[दूत्यम्] 'embassy/message-bearing' and @deva[वणिक्] 'merchant' → @deva[वणिज्यम्] 'trade/commerce'. Note: @deva[वाणिज्यम्] (with @deva[वृद्धि]) is formed by @ref[5.1.124] since @deva[वणिक्] belongs to the @deva[ब्राह्मणादि] class.",
                "advanced": "The @deva[य]-affix (distinct from @deva[यत्]/यञ्/यक्) is prescribed specifically for @deva[सखि]. The @deva[इकारलोप] of @deva[सखि] before @deva[य] yields @deva[सख्य] + @deva[अम्] → @deva[सख्यम्]. The @deva[वार्त्तिक] (@deva[दूतवणिग्भ्यां च]) supplements the @[sūtra] for two additional bases. The existence of @deva[वाणिज्यम्] (via @ref[5.1.124], @deva[ब्राह्मणादि]) alongside @deva[वणिज्यम्] (via this @deva[वार्त्तिक]) illustrates derivational doublets from different rule-sources."
            }
        },
        "51127": {
            "en": {
                "simple": "The affix @deva[ढक्] comes after @deva[कपि] 'monkey' and @deva[ज्ञाति] 'kinsman' to express 'nature/action'. @deva[कपि] → @deva[कापेयम्]; @deva[ज्ञाति] → @deva[ज्ञातेयम्].",
                "standard": "After @deva[कपि] and @deva[ज्ञाति], the affix @deva[ढक्] (realized as @deva[एय]) denotes @deva[भाव/कर्म]. The @deva[यथासंख्य] principle (@ref[1.3.10]) does not apply here, so both bases take @deva[ढक्] (not one @deva[कपि] and another @deva[ज्ञाति]). Examples: @deva[कपेर्भावः कर्म वा] → @deva[कापेयम्] 'monkey-nature/behavior'; @deva[ज्ञातेर्भावः कर्म वा] → @deva[ज्ञातेयम्] 'kinship/kinsman's duty'.",
                "advanced": "The @deva[ढक्]-affix (= @deva[एय] after @deva[इत्संज्ञालोप]) applies to the dual-item domain {@deva[कपि], @deva[ज्ञाति]}. The explicit note regarding @deva[यथासंख्य]-inapplicability clarifies that both items share the same affix, not a one-to-one pairing. The @deva[वृद्धि] of initial vowel (@deva[कपि] → @deva[कापेय]) follows standard @deva[तद्धित]-phonology. The semantic range covers both @deva[भाव] (abstract state) and @deva[कर्म] (characteristic behavior)."
            }
        },
        "51128": {
            "en": {
                "simple": "The affix @deva[यक्] comes after compounds ending in @deva[पति] and the @deva[पुरोहितादि] class to express 'nature/action'. @deva[सेनापति] → @deva[सैनापत्यम्] 'generalship'. @deva[पुरोहित] → @deva[पौरोहित्यम्] 'priesthood'.",
                "standard": "Compounds ending in @deva[पति] 'lord/master' and the @deva[पुरोहितादि] class take @deva[यक्] (realized as @deva[य] with @deva[वृद्धि]) for @deva[भाव/कर्म]. Examples: @deva[सेनापतेर्भावः कर्म वा] → @deva[सैनापत्यम्] 'the position/duties of a general'; @deva[गृहपति] → @deva[गार्हपत्यम्]; @deva[प्रजापति] → @deva[प्राजापत्यम्]; @deva[पुरोहित] → @deva[पौरोहित्यम्]; @deva[राजन्] (when not in compound) → @deva[राज्यम्] 'kingship'. The @deva[पुरोहितादि] includes: @deva[पुरोहित], @deva[राजन्] (non-compound), @deva[ग्रामिक], @deva[पिण्डिक], etc.",
                "advanced": "The @deva[यक्]-affix applies to @deva[पत्यन्त]-compounds (those ending in @deva[पति]) and the @deva[पुरोहितादि] @deva[गण]. The @deva[ककार] of @deva[यक्] is @deva[इत्], leaving @deva[य] with obligatory @deva[वृद्धि] of the base's initial vowel. The @deva[गण] specification @deva[राजासे] indicates @deva[राजन्] takes @deva[यक्] only @deva[असमासे] (outside compounds), yielding @deva[राज्यम्]; in compounds, other rules apply. This @[sūtra] productively generates institutional/positional abstract nouns."
            }
        },
        "51129": {
            "en": {
                "simple": "The affix @deva[अञ्] comes after animal class-names, age-denoting words, and the @deva[उद्गात्रादि] class to express 'nature/action'. @deva[अश्व] → @deva[आश्वम्] 'horse-nature'. @deva[कुमार] → @deva[कौमारम्] 'youth/childhood'.",
                "standard": "Class-names of animals (@deva[जातिशब्द]), words expressing age (@deva[वयोवाचिन्]), and the @deva[उद्गात्रादि] class take @deva[अञ्] (realized as @deva[अ] with @deva[वृद्धि]) for @deva[भाव/कर्म]. Examples: @deva[अश्वस्य भावः कर्म वा] → @deva[आश्वम्] 'equine nature/behavior'; @deva[उष्ट्र] → @deva[औष्ट्रम्]; @deva[कुमार] → @deva[कौमारम्] 'childhood/youthfulness'; @deva[किशोर] → @deva[कैशोरम्]; @deva[उद्गातृ] → @deva[औद्गात्रम्]; @deva[उन्नेतृ] → @deva[औन्नेत्रम्]. The @deva[उद्गात्रादि] includes Vedic priest-designations.",
                "advanced": "The @deva[अञ्]-affix covers three semantic domains: (1) @deva[जातिवाचिन्] (animal class-terms), (2) @deva[वयोवाचिन्] (age-terms like @deva[कुमार], @deva[किशोर], @deva[स्थविर]), (3) @deva[उद्गात्रादि] @deva[गण] (priest-terms). The @deva[वृद्धि] triggered by @deva[अञ्] affects the initial syllable. The @deva[गण] includes: @deva[उद्गातृ], @deva[उन्नेतृ], @deva[प्रतिहर्तृ], @deva[प्रशास्तृ], @deva[होतृ], @deva[पोतृ], @deva[कर्तृ], @deva[रथगणक], @deva[पत्तिगणक], etc."
            }
        },
        "51130": {
            "en": {
                "simple": "The affix @deva[अण्] comes after compounds ending in @deva[हायन] 'year' and the @deva[युवनादि] class to express 'nature/action'. @deva[द्विहायन] 'two-year-old' → @deva[द्वैहायनम्]. @deva[युवन्] 'youth' → @deva[यौवनम्] 'youthfulness'.",
                "standard": "Compounds ending in @deva[हायन] 'year' and the @deva[युवनादि] class take @deva[अण्] (with @deva[वृद्धि]) for @deva[भाव/कर्म]. Examples: @deva[द्विहायनस्य भावः कर्म वा] → @deva[द्वैहायनम्]; @deva[त्रिहायन] → @deva[त्रैहायनम्]; @deva[युवन्] → @deva[यौवनम्] 'youth'; @deva[स्थविर] → @deva[स्थाविरम्] 'old age'. A @deva[वार्त्तिक] notes that @deva[य] of @deva[श्रोत्रिय] is deleted: @deva[श्रोत्रियस्य भावः कर्म वा] → @deva[श्रौत्रम्] (not *@deva[श्रौत्रियम्]).",
                "advanced": "The @deva[हायनान्त]-compounds and @deva[युवनादि] @deva[गण] trigger @deva[अण्] with standard @deva[वृद्धि]. The @deva[युवनादि] includes: @deva[युवन्], @deva[स्थविर], @deva[होतृ], @deva[यजमान], @deva[पुरुष] (non-compound), etc. The @deva[वार्त्तिक] (@deva[श्रोत्रियस्य यलोपश्च]) prescribes exceptional @deva[यकारलोप] for @deva[श्रोत्रिय], yielding @deva[श्रौत्रम्] rather than the expected *@deva[श्रौत्रियम्]."
            }
        },
        "51131": {
            "en": {
                "simple": "The affix @deva[अण्] comes after stems ending in @deva[इक्] vowels (@deva[इ ई उ ऊ ऋ ऌ]) when the preceding syllable is light. @deva[शुचि] 'pure' → @deva[शौचम्] 'purity'. @deva[पटु] 'clever' → @deva[पाटवम्] 'cleverness'.",
                "standard": "When a stem ends in an @deva[इक्] vowel (@deva[इ], @deva[ई], @deva[उ], @deva[ऊ], @deva[ऋ], or @deva[ऌ]) and the preceding syllable is prosodially light (@deva[लघु]), the affix @deva[अण्] applies for @deva[भाव/कर्म]. Examples: @deva[शुचेर्भावः कर्म वा] → @deva[शौचम्]; @deva[मुनि] → @deva[मौनम्] 'silence'; @deva[नगर] → @deva[नागरम्] (indirect via @deva[नागरिक]); @deva[हरीतकी] → @deva[हारीतकम्]; @deva[पटु] → @deva[पाटवम्]; @deva[लघु] → @deva[लाघवम्] 'lightness'. Counter-example: @deva[गुरु] (heavy penult) does not take @deva[अण्] here.",
                "advanced": "The conditioning environment is: stem-final @deva[इक्] (= @deva[इ ई उ ऊ ऋ ऌ]) with @deva[लघूपधा] (light penultimate syllable). The @deva[लघु] criterion follows standard prosodic definition: short vowel not followed by conjunct. This explains why @deva[लघु] itself qualifies (@deva[ल] + short @deva[अ] = light) yielding @deva[लाघवम्], while @deva[गुरु] (with heavy penult by position or inherent length) is excluded from this rule and takes @deva[त्व/तल्] instead."
            }
        },
        "51132": {
            "en": {
                "simple": "The affix @deva[वुञ्] comes after polysyllabic stems with penultimate @deva[य्] and heavy penultimate syllable. @deva[रमणीय] 'delightful' → @deva[रामणीयकम्] 'delightfulness'.",
                "standard": "A polysyllabic stem (@deva[बहुच्]) whose penultimate consonant is @deva[य्] (@deva[योपध]) and whose penultimate syllable is heavy (@deva[गुरूपोत्तम]) takes @deva[वुञ्] (realized as @deva[अक]) for @deva[भाव/कर्म]. The term @deva[उपोत्तम] refers to the syllable before the last. Examples: @deva[रमणीयस्य भावः कर्म वा] → @deva[रामणीयकम्] 'charm/delightfulness'; @deva[वसनीय] → @deva[वासनीयकम्].",
                "advanced": "The rule targets stems satisfying three conditions: (1) @deva[बहुच्] (trisyllabic or longer), (2) @deva[योपध] (penultimate segment is @deva[य्]), (3) @deva[गुरूपोत्तम] (penultimate syllable is prosodially heavy). The @deva[वुञ्]-affix (= @deva[अक] + @deva[वृद्धि]) derives abstracts from adjectives in @deva[°ईय]. The @deva[गुरु] penult typically results from the long @deva[ई] before @deva[य], as in @deva[रमणीय], @deva[वसनीय], @deva[करणीय], etc."
            }
        },
        "51133": {
            "en": {
                "simple": "The affix @deva[वुञ्] comes after @deva[द्वन्द्व] compounds and the @deva[मनोज्ञादि] class to express 'nature/action'. @deva[गोपालपशुपाल] (dvandva) → @deva[गोपालपशुपालिका]. @deva[मनोज्ञ] 'pleasing' → @deva[मानोज्ञकम्].",
                "standard": "After @deva[द्वन्द्व] compounds (copulative) and the @deva[मनोज्ञादि] class, @deva[वुञ्] (realized as @deva[अक/इक]) denotes @deva[भाव/कर्म]. Examples with @deva[द्वन्द्व]: @deva[गोपालपशुपालानां भावः कर्म वा] → @deva[गोपालपशुपालिका]; @deva[शिष्योपाध्यायानां] → @deva[शैष्योपाध्यायिका]; @deva[कौत्सकुशिकानां] → @deva[कौत्सकुशिकिका]. From @deva[मनोज्ञादि]: @deva[मनोज्ञ] → @deva[मानोज्ञकम्]; @deva[कल्याण] → @deva[कल्याणकम्].",
                "advanced": "The @deva[द्वन्द्व]-domain and @deva[मनोज्ञादि] @deva[गण] license @deva[वुञ्]. For @deva[द्वन्द्व] compounds, the derivative often takes @deva[इक]-form (feminine-appearing but neuter in gender): @deva[गोपालपशुपालिका]. The @deva[मनोज्ञादि] includes: @deva[मनोज्ञ], @deva[प्रियरूप], @deva[अमिरूप], @deva[कल्याण], @deva[मेधाविन्], @deva[आढ्य], @deva[कुलपुत्र], @deva[छान्दस], @deva[छात्र], @deva[श्रोत्रिय], etc. The semantic output denotes collective/institutional abstracts."
            }
        },
        "51134": {
            "en": {
                "simple": "The affix @deva[वुञ्] comes after @deva[गोत्र] (patronymic) names and Vedic school names when expressing boasting, contempt, or 'one who has attained/inquires into that'. @deva[वसिष्ठ]-@deva[गोत्र] + boasting → @deva[वासिष्ठकम्].",
                "standard": "After @deva[गोत्र] (family/clan names) and @deva[चरण] (Vedic school names), @deva[वुञ्] applies in three semantic contexts: (1) @deva[श्लाघा] 'boasting' - when one boasts of lineage/school; (2) @deva[अत्याकार] 'contempt' - when expressing disdain; (3) @deva[तदवेत] 'one who has attained/inquires' - one who has achieved or investigates that tradition. The term @deva[तदवेत] encompasses both @deva[तत्प्राप्त] 'one who has gained that' and @deva[तज्ज्ञ] 'one who knows/inquires about that'.",
                "advanced": "The @deva[गोत्र]//@deva[चरण] domain with @deva[वुञ्] is conditioned by pragmatic-semantic factors: @deva[श्लाघा] (self-aggrandizement through lineage), @deva[अत्याकार] (pejorative use), or @deva[तदवेत] (epistemic/acquisitive relation to the tradition). This creates @deva[वुञ्]-derivatives that are contextually marked, unlike neutral @deva[भाव]-formations. The rule addresses specialized registers of discourse about genealogical and scholastic identity."
            }
        },
        "51135": {
            "en": {
                "simple": "The affix @deva[छ] (@deva[ईय]) comes after words denoting @deva[होत्रा] priests to express 'nature/action'. @deva[अच्छावाक] → @deva[आच्छावाकीयम्]; @deva[मैत्रावरुण] → @deva[मैत्रावरुणीयम्].",
                "standard": "Words denoting @deva[होत्रा] (a class of Vedic priests) take @deva[छ] (realized as @deva[ईय]) for @deva[भाव/कर्म]. The @deva[होत्रा] priests include: @deva[अच्छावाक], @deva[मैत्रावरुण], @deva[ब्राह्मणाच्छंसिन्], @deva[आग्नीध्र], @deva[प्रतिप्रस्थातृ], @deva[नेष्टृ], @deva[पोतृ]. Examples: @deva[आच्छावाकीयम्], @deva[मैत्रावरुणीयम्], @deva[ब्राह्मणाच्छंसीयम्], @deva[आग्नीध्रीयम्], @deva[प्रतिप्रस्थात्रीयम्], @deva[नेष्ट्रीयम्], @deva[पोत्रीयम्]. The plural @deva[होत्राभ्यः] prevents @ref[1.1.68] from applying.",
                "advanced": "The @deva[होत्रावाचिन्] (priest-denoting terms) constitute the domain for @deva[छ]-affixation. The @deva[बहुवचन] (@deva[होत्राभ्यः]) in the @[sūtra] is @deva[जातिवचन] (class-denoting plural), blocking the @deva[एकशेष] provision of @ref[1.1.68]. This ensures the rule applies to each @deva[होत्रा]-term individually. Note: the word @deva[होत्रा] here refers specifically to the priestly office category, not to @deva[होत्र] (oblation) derived from @deva[हु] + @deva[त्र]."
            }
        },
        "51136": {
            "en": {
                "simple": "The affix @deva[त्व] comes after @deva[ब्रह्मन्] when it denotes a type of @deva[होत्रा] priest. @deva[ब्रह्मणो भावः कर्म वा] → @deva[ब्रह्मत्वम्] 'the office/nature of the Brahman priest'. This blocks @deva[छ].",
                "standard": "When @deva[ब्रह्मन्] refers to the @deva[होत्रा] priest (one of the four main Vedic priests), the affix @deva[त्व] applies, blocking @deva[छ] from @ref[5.1.135]. Result: @deva[ब्रह्मणो भावः कर्म वा] → @deva[ब्रह्मत्वम्]. When @deva[ब्रह्मन्] means a Brahmin by caste (not the priestly office), the regular affixes apply: @deva[ब्रह्मत्वम्] or @deva[ब्रह्मता]. This @[sūtra] concludes the @deva[भाव/कर्म] section extending from @ref[4.1.87].",
                "advanced": "The @deva[त्व]-affix is specifically prescribed for @deva[ब्रह्मन्] in its @deva[होत्रा]-sense (the superintending priest of the Vedic sacrifice), functioning as @deva[अपवाद] to @ref[5.1.135]'s @deva[छ]. The @deva[अधिकार] statement notes that the @deva[मत्]//@deva[स्न] provisions of @ref[4.1.87] extend their scope (@deva[प्रकरण]) through this point. The dual meaning of @deva[ब्रह्मन्] (priest vs. caste) yields identical @deva[ब्रह्मत्वम्] from different derivational paths but with distinct semantic content."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.1.121-136)")

if __name__ == "__main__":
    main()
