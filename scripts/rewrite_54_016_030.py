#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.4.16-30."""

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
        "54016": {
            "en": {
                "simple": "The affix @deva[अण्] comes after @deva[विसारिन्] (one who glides out) when it means 'fish.' Example: @deva[वैसारिणः] (a fish). Not when @deva[विसारिन्] means a person gliding out.",
                "standard": "The @deva[स्वार्थ] affix @deva[अण्] (@deva[अ]) attaches to @deva[विसारिन्] specifically when meaning @deva[मत्स्य] (fish). @deva[वृद्धि] applies: @deva[विसारिन्] → @deva[वैसारिणः] (a fish). Not applicable when @deva[विसारिन्] retains its participial meaning: @deva[विसारी देवदत्तः] (Devadatta who is gliding out).",
                "advanced": "The semantic restriction @deva[मत्स्ये] limits this @deva[स्वार्थ अण्] to the lexical item 'fish.' @deva[विसारिन्] (from @deva[वि] + √@deva[सृ] + @deva[णिनि]) normally means 'one who goes forth/glides.' The fish-meaning is specialized. @deva[अण्] triggers @deva[वृद्धि]: @deva[इ] → @deva[ऐ]."
            }
        },
        "54017": {
            "en": {
                "simple": "The affix @deva[कृत्वसुच्] (becoming @deva[कृत्वस्]) comes after numerals when counting repetitions of an action. Example: @deva[पञ्चकृत्वः] (five times), from @deva[पञ्च वारान् भुङ्क्ते] (he eats five times).",
                "standard": "The @deva[स्वार्थ] affix @deva[कृत्वसुच्] (@deva[कृत्वस्]) attaches to numerals for @deva[क्रियाभ्यावृत्तिगणन] (counting repetitions of action). Examples: @deva[पञ्च वारान् भुङ्क्ते] = @deva[पञ्चकृत्वो भुङ्क्ते] (eats five times); @deva[सप्तकृत्वः] (seven times). Not after non-numerals: @deva[भूरीन् वारान् भुङ्क्ते] (eats many times—no affix). Not for counting actions themselves: @deva[पञ्चपाकाः] (five cookings).",
                "advanced": "The three conditions are: (1) @deva[संख्या] (numeral); (2) @deva[क्रिया] (action); (3) @deva[अभ्यावृत्ति] (repetition) + @deva[गणन] (counting). @deva[क्रिया] continues into @ref[5.4.19]. @deva[गणन] ensures application to both @deva[संख्येय]-numerals (1-10, denoting things counted) and @deva[संख्यान]-numerals (11+, denoting the counting process itself)."
            }
        },
        "54018": {
            "en": {
                "simple": "The affix @deva[सुच्] (becoming @deva[स्]) replaces @deva[कृत्वसुच्] after @deva[द्वि] (2), @deva[त्रि] (3), and @deva[चतुर्] (4). Examples: @deva[द्विः] (twice), @deva[त्रिः] (thrice), @deva[चतुः] (four times).",
                "standard": "The affix @deva[सुच्] (@deva[स्]) replaces @deva[कृत्वसुच्] after @deva[द्वि], @deva[त्रि], and @deva[चतुर्] for counting action-repetitions. Examples: @deva[द्विर्भुङ्क्ते] (eats twice), @deva[त्रिर्भुङ्क्ते] (thrice), @deva[चतुर्भुङ्क्ते] (four times). For @deva[चतुर्], @deva[स्] is elided by @ref[8.2.24]. The @deva[च्] indicates @deva[अन्तोदात्त]: @deva[चतुर्] (numeral) vs. @deva[चतुः] (four times) differ in accent.",
                "advanced": "This @deva[अपवाद] provides @deva[सुच्] for the first three numerals above one. @deva[सुच्] → @deva[स्] (the @deva[उच्] is @deva[इत्]). @deva[चतुर्] (from √@deva[चत्] + @deva[उरन्], Uṇādi V.58) differs accentually from @deva[चतुः] (@deva[चतुर्] + @deva[सुच्]). @ref[8.2.24] elides final @deva[स्] after @deva[र्]."
            }
        },
        "54019": {
            "en": {
                "simple": "For @deva[एक] (one), the substitute @deva[सकृत्] is used with @deva[सुच्] when counting an action (not repetition, since 'one' cannot repeat). Example: @deva[सकृद्भुङ्क्ते] (eats once).",
                "standard": "The word @deva[सकृत्] substitutes for @deva[एक] before @deva[सुच्] when counting an action (not repetition—impossible for 'one'). Only @deva[क्रिया] continues here, not @deva[अभ्यावृत्ति]. Example: @deva[सकृद्भुङ्क्ते] (eats once); @deva[सकृदधीते] (studies once). The @deva[स्] is elided by @ref[8.2.23]. Not: *@deva[एकः पाकः] (against usage).",
                "advanced": "Since @deva[एक] (one) cannot express @deva[अभ्यावृत्ति] (repetition), only @deva[क्रिया] (action-counting) applies. @deva[सकृत्] is the @deva[आदेश] (substitute) for @deva[एक] + @deva[सुच्]. By @ref[8.2.23], @deva[स्] → @deva[त्] / @deva[द्] in @deva[पद]-final position: @deva[सकृत्] → @deva[सकृद्] before voiced sounds."
            }
        },
        "54020": {
            "en": {
                "simple": "The affix @deva[धा] optionally comes after @deva[बहु] (many) when counting action-repetitions occurring in a short time. Example: @deva[बहुधा] or @deva[बहुकृत्वः] (many times a day). Not for long intervals.",
                "standard": "The affix @deva[धा] optionally replaces @deva[कृत्वसुच्] after @deva[बहु] when @deva[अविप्रकृष्टकाल] (short time interval) is meant. Examples: @deva[बहुधा दिवसस्य भुङ्क्ते] or @deva[बहुकृत्वो दिवसस्य भुङ्क्ते] (eats many times a day). When time is distant (@deva[विप्रकृष्ट]): only @deva[बहुकृत्वो मासस्य भुङ्क्ते] (eats many times in a month—due to poverty, not daily).",
                "advanced": "The @deva[अविप्रकृष्टकाल] condition restricts @deva[धा] to rapid repetitions. @deva[विप्रकृष्ट] (distant) time-intervals use only @deva[कृत्वसुच्]. @deva[धा] is the same affix as @ref[5.3.42] (manner/distribution). @deva[विकल्प] allows both forms for short intervals."
            }
        },
        "54021": {
            "en": {
                "simple": "The affix @deva[मयट्] (becoming @deva[मय], feminine @deva[मयी]) comes after nominative-case words meaning 'made of that' or 'abounding in that.' Examples: @deva[अन्नमयम्] (made of food/abounding in food), @deva[अपूपमयम्] (made of cakes).",
                "standard": "The affix @deva[मयट्] (@deva[मय], fem. @deva[मयी] with @deva[ङीप्]) attaches to nominative-case words expressing @deva[प्रकृत] (made of/abundant in). Two interpretations: (1) @deva[अन्नमयम्] = abundance of food; (2) @deva[अन्नमयो यज्ञः] = a feast abounding in food. @deva[वचन] (from √@deva[वच्] + @deva[ल्युट्]) allows both 'nature of' and 'site of' meanings.",
                "advanced": "The @deva[मयट्] affix: @deva[ट्] indicates @deva[ङीप्] feminine (@deva[मयी]). Two senses from @deva[ल्युट्] in @deva[वचन]: @deva[भाव] (nature—@deva[अन्नमयम्] = food-abundance) and @deva[अधिकरण] (site—@deva[अन्नमयो यज्ञः] = feast where food is abundant). Both are valid per sūtra construction."
            }
        },
        "54022": {
            "en": {
                "simple": "When the thing 'made of' or 'abounding in' is a multitude, collective affixes (@ref[4.2.37] etc.) can also be used alongside @deva[मयट्]. Examples: @deva[मौदकिकम्] or @deva[मोदकमयम्] (made of sweets/abounding in sweets).",
                "standard": "When @deva[समूह] (multitude) is the base, both @deva[समूह]-affixes (@ref[4.2.37] ff.) and @deva[मयट्] can express @deva[प्रकृत] sense. The @deva[चकार] includes @deva[मयट्]. Examples: @deva[मोदकाः प्रकृताः] = @deva[मौदकिकम्] (@ref[4.2.47]) or @deva[मोदकमयम्]; @deva[शाष्कुलिकम्] or @deva[शष्कुलीमयम्]. Also: @deva[मौदकिको यज्ञः] or @deva[मोदकमयो यज्ञः] (feast abounding in sweets).",
                "advanced": "This extends @deva[प्रकृत]-meaning to @deva[समूहार्थ] affixes from @ref[4.2.37]. When the base denotes a collective, both @deva[समूह]-affixes and @deva[मयट्] apply with identical meaning. The @deva[चकार] signals @deva[मयट्] also remains available."
            }
        },
        "54023": {
            "en": {
                "simple": "The affix @deva[ञ्य] comes after @deva[अनन्त], @deva[आवसथ], @deva[इतिह], and @deva[भेषज] without changing meaning. Examples: @deva[आनन्त्यम्] (= @deva[अनन्तः]), @deva[ऐतिह्यम्] (tradition, from @deva[इति ह]).",
                "standard": "The @deva[स्वार्थ] affix @deva[ञ्य] (@deva[य] with @deva[वृद्धि]) attaches to @deva[अनन्त], @deva[आवसथ], @deva[इतिह], and @deva[भेषज] without sense-change. Examples: @deva[आनन्त्यम्] = @deva[अनन्तः] (infinite); @deva[आवसथ्यम्] = @deva[आवसथः] (dwelling/sanctuary); @deva[ऐतिह्यम्] = @deva[इति ह] (traditional account—from @deva[इति ह स्म उपाध्यायाः कथयन्ति] 'thus the teachers say'); @deva[भैषज्यम्] = @deva[भेषजम्] (medicine).",
                "advanced": "Note @deva[इतिह] is not a @deva[प्रातिपदिक] but a phrase (@deva[इति ह])—the affix attaches exceptionally. @deva[ञ्य] triggers @deva[वृद्धि]: @deva[अ] → @deva[आ], @deva[इ] → @deva[ऐ]. The affix is optional per @ref[4.1.82] (@deva[महाविभाषा])."
            }
        },
        "54024": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[देवता]-ending stems in dative case meaning 'appointed for that deity.' Examples: @deva[अग्निदेवत्यम्] (sacred to Agni), @deva[पितृदेवत्यम्] (sacred to the Pitṛs).",
                "standard": "The affix @deva[यत्] (@deva[य]) attaches to dative-case stems ending in @deva[देवता] expressing @deva[तादर्थ्य] (purpose—'for the sake of'). Examples: @deva[अग्निदेवतायै इदम्] = @deva[अग्निदेवत्यम्] (offering sacred to Agni); @deva[पितृदेवत्यम्], @deva[वायुदेवत्यम्].",
                "advanced": "The @deva[तादर्थ्य] (purpose) sense is expressed through dative construction before affixation. @deva[यत्] → @deva[य]. The pattern @deva[X-देवताय इदम्] → @deva[X-देवत्यम्] forms ritual terminology for offerings dedicated to specific deities."
            }
        },
        "54025": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[पाद] (foot) and @deva[अर्घ] (offering) in dative case meaning 'for that purpose.' Examples: @deva[पाद्यम्] (foot-washing water), @deva[अर्घ्यम्] (guest-offering).",
                "standard": "The affix @deva[यत्] (@deva[य]) attaches to @deva[पाद] and @deva[अर्घ] in dative expressing @deva[तादर्थ्य] (purpose). Examples: @deva[पादार्थम् उदकम्] = @deva[पाद्यम्] (water for washing feet); @deva[अर्घ्यम्] (offering for guest). Accent by @ref[6.1.213]: @deva[उदात्त] on first syllable. The @deva[चकार] extends to other words in Veda: @deva[वसव्य], @deva[उदक्य], @deva[मर्त्य], @deva[सूर्य], etc.",
                "advanced": "Vārttikas add: @deva[आवतु] after @deva[सम] (@deva[समावत् वसति]); @deva[नू] for @deva[नव] + @deva[त्नप्/तनप्/ख] (@deva[नूत्न/नूतन/नवीन]); @deva[प्र] (old) + @deva[म/त्न/तन/ख] (@deva[प्रण/प्रत्न/प्रतन/प्रीण]); @deva[धेय] after @deva[भाग/रूप/नाम] (@deva[भागधेय/रूपधेय/नामधेय]); @deva[अञ्] after @deva[आग्नीध्र/साधारण] (@deva[आग्नीध्र/साधारण], fem. @deva[आग्नीध्री])."
            }
        },
        "54026": {
            "en": {
                "simple": "The affix @deva[ञ्य] comes after @deva[अतिथि] (guest) in dative case meaning 'for the guest.' Example: @deva[आतिथ्यम्] (hospitality, what is for the guest).",
                "standard": "The affix @deva[ञ्य] (@deva[य] with @deva[वृद्धि]) attaches to @deva[अतिथि] (guest) in dative expressing @deva[तादर्थ्य] (purpose). Example: @deva[अतिथये इदम्] = @deva[आतिथ्यम्] (hospitality—that which is for the guest). @deva[वृद्धि]: @deva[अ] → @deva[आ].",
                "advanced": "This continues the @deva[तादर्थ्य] pattern from @ref[5.4.24-25]. @deva[ञ्य] (not @deva[यत्]) applies specifically to @deva[अतिथि]. @deva[आतिथ्यम्] = hospitality, guest-reception rites."
            }
        },
        "54027": {
            "en": {
                "simple": "The affix @deva[तल्] comes after @deva[देव] (god) without changing meaning. Example: @deva[देवता] (= @deva[देवः], deity). The word is always feminine.",
                "standard": "The @deva[स्वार्थ] affix @deva[तल्] (@deva[ता]) attaches to @deva[देव] without sense-change. The @deva[तादर्थ्य] meaning ceases here. Example: @deva[देवता] = @deva[देवः] (deity). The result is always feminine (@deva[स्त्री])—another case where @deva[स्वार्थिक] affixes don't preserve base gender.",
                "advanced": "The @deva[तल्] affix normally forms feminine abstract nouns. Here it's @deva[स्वार्थ]—no meaning change. @deva[देवता] (fem.) = @deva[देव] (masc.) illustrates gender shift with @deva[स्वार्थिक] affixes (cf. @ref[5.4.14] @deva[ज्ञापक])."
            }
        },
        "54028": {
            "en": {
                "simple": "The affix @deva[क] comes after @deva[अवि] (sheep) without changing meaning. Example: @deva[अविकः] (= @deva[अविः], a sheep).",
                "standard": "The @deva[स्वार्थ] affix @deva[क] attaches to @deva[अवि] (sheep) without sense-change. Example: @deva[अविकः] = @deva[अविः] (sheep).",
                "advanced": "Simple @deva[स्वार्थ क] after @deva[अवि]. The word @deva[अवि] (sheep) is @deva[इकारान्त] (इ-ending); @deva[क] attaches directly: @deva[अवि] + @deva[क] → @deva[अविक]."
            }
        },
        "54029": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[याव] and similar words without changing meaning. Examples: @deva[यावकः] (= @deva[यावः], barley gruel), @deva[मणिकः] (= @deva[मणिः], jewel).",
                "standard": "The @deva[स्वार्थ] affix @deva[कन्] attaches to @deva[यावादि] words without sense-change. The class includes: @deva[याव], @deva[मणि], @deva[अस्थि], @deva[तालु], @deva[जानु], etc. Special meanings: @deva[उष्णक/शीतक] (seasons); @deva[लूनक/वियातक] (animals); @deva[अणुक] (clever); @deva[पुत्रक] (artificial son); @deva[स्नातक] (graduate); @deva[शून्यक] (empty vessel); @deva[दानक] (contemptible gift); @deva[तनुक] (thread); @deva[श्रेयस्क] (@deva[ईयसुन्]-ending).",
                "advanced": "The @deva[यावादि] (21 items) takes @deva[स्वार्थ कन्] with various semantic restrictions: @deva[ऋतौ] for @deva[उष्ण/शीत]; @deva[पशौ] for @deva[लून/वियात]; @deva[निपुणे] for @deva[अणु]; @deva[कृत्रिमे] for @deva[पुत्र]; @deva[वेदसमाप्तौ] for @deva[स्नात]; @deva[रिक्ते] for @deva[शून्य]; @deva[कुत्सिते] for @deva[दान]; @deva[सूत्रे] for @deva[तनु]. Also @deva[कुमारीक्रीडनक] (girls' toys) like @deva[कन्दुक] (ball)."
            }
        },
        "54030": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[लोहित] (red) when it means 'a precious stone' (ruby). Example: @deva[लोहितकः] (= @deva[लोहितः], a ruby). Not when @deva[लोहित] means 'red.'",
                "standard": "The @deva[स्वार्थ] affix @deva[कन्] attaches to @deva[लोहित] when meaning @deva[मणि] (precious stone/ruby), not when meaning 'red.' Example: @deva[लोहितकः] = @deva[लोहितः] (ruby). Not: @deva[लोहितः] (red color).",
                "advanced": "The semantic restriction @deva[मणौ] (precious stone) distinguishes @deva[लोहितक] (ruby) from @deva[लोहित] (red). This is @deva[स्वार्थ कन्] with lexical specialization—the affix signals the gemstone meaning."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.4.16-30)")

if __name__ == "__main__":
    main()
