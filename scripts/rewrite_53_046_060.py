#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.3.46-60."""

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
        "53046": {
            "en": {
                "simple": "The substitute @deva[एधा] optionally replaces @deva[धा] after @deva[द्वि] (two) and @deva[त्रि] (three). Examples: @deva[द्वेधा] or @deva[द्विधा]; @deva[त्रेधा] or @deva[त्रिधा].",
                "standard": "The substitute @deva[एधाच्] (@deva[एधा]) optionally replaces @deva[धा] after @deva[द्वि] and @deva[त्रि]. This gives three options: @deva[द्विधा] (base form), @deva[द्वेधा] (@deva[गुण] by @ref[6.4.148]), and @deva[द्वैधम्] (@deva[धमुञ्] from @ref[5.3.45]). Similarly @deva[त्रिधा], @deva[त्रेधा], @deva[त्रैधम्].",
                "advanced": "The @deva[एधाच्] substitute adds a third option alongside @deva[धा] and @deva[धमुञ्]. The @deva[ए] triggers @deva[गुण] of the numeral's vowel: @deva[द्वि] + @deva[एधा] → @deva[द्वेधा] by @ref[6.4.148]. Complete paradigm: @deva[द्विधा]/deva[द्वेधा]/deva[द्वैधम्]; @deva[त्रिधा]/deva[त्रेधा]/deva[त्रैधम्]. All three express @deva[विधार्थ] and @deva[अधिकरणविचाल] senses."
            }
        },
        "53047": {
            "en": {
                "simple": "The affix @deva[पाशप्] (becoming @deva[पाश]) indicates contempt or insignificance. Example: @deva[वैयाकरणपाशः] (a very bad grammarian).",
                "standard": "The affix @deva[पाशप्] (@deva[पाश]) denotes @deva[याप्य] (contempt, trifling nature) when added to a stem. Examples: @deva[वैयाकरणपाशः] (a worthless grammarian), @deva[याज्ञिकपाशः] (a poor ritualist). This applies to professional incompetence, not moral character.",
                "advanced": "The affix @deva[पाशप्] forms derogatory terms indicating professional inadequacy. @deva[याप्य] = contempt, triviality. The affix does not apply to moral failings—a skilled but immoral grammarian would not be @deva[वैयाकरणपाशः]. The @deva[पकार] is @deva[इत्] for accent. Examples: @deva[वैयाकरणपाशः] (incompetent in grammar); @deva[याज्ञिकपाशः] (incompetent in ritual)."
            }
        },
        "53048": {
            "en": {
                "simple": "After ordinal numerals ending in @deva[तीय] (like @deva[द्वितीय], @deva[तृतीय]), the affix @deva[अन्] comes when 'part' is meant. This rule is primarily for accent. Example: @deva[द्वितीयः] (second) → @deva[द्वितीयः] (half, moiety).",
                "standard": "The affix @deva[अन्] attaches to ordinals ending in @deva[तीय] when @deva[भाग] (part/fraction) is meant. The rule primarily affects accent: @deva[द्वितीयः] (ordinal, accent on @deva[ती]) → @deva[द्वितीयः] (fraction, accent shifts to @deva[द्वि] by @ref[6.1.197]). Similarly @deva[तृतीयः] (one-third).",
                "advanced": "This @deva[स्वार्थिक] sūtra teaches @deva[अन्] after @deva[तीयान्त पूरण] (ordinals in @deva[तीय]) for @deva[भागार्थ]. The sole purpose is @deva[स्वर]-shift: @deva[द्वितीयः] (ordinal) has @deva[उदात्त] on @deva[ती] by @ref[3.1.3]; with @deva[अन्], accent moves to @deva[द्वि] by @ref[6.1.197]. The term @deva[पूरण] continues into subsequent sūtras. @deva[तीय] in non-affixal words like @deva[मुखतीय] is irrelevant."
            }
        },
        "53049": {
            "en": {
                "simple": "After ordinal numerals from fourth to tenth, the affix @deva[अन्] comes for 'part' meaning (not in Vedic). This affects accent. Examples: @deva[चतुर्थः] (fourth/quarter), @deva[पञ्चमः] (fifth/one-fifth).",
                "standard": "The affix @deva[अन्] applies to ordinals from @deva[चतुर्थ] through @deva[दशम] (before eleven) for @deva[भाग] meaning, affecting accent. This does not apply in @deva[छन्दस्]. Examples: @deva[चतुर्थः], @deva[पञ्चमः], @deva[सप्तमः], @deva[नवमः], @deva[दशमः] (all with shifted accent). Not @deva[एकादशः], @deva[द्वादशः] (no change by @ref[6.1.223]).",
                "advanced": "This rule extends @deva[अन्] to @deva[प्राग्एकादश पूरण] (ordinals before eleven) in @deva[भागार्थ], with @deva[स्वर]-shift as the primary effect. Excluded: @deva[छन्दस्] (where Vedic accents like @deva[पञ्चम] with final @deva[उदात्त] from @deva[डट्] + @deva[मट्] by @ref[5.2.48-49] remain). @deva[एकादश] onwards retain original accent by @ref[6.1.223]."
            }
        },
        "53050": {
            "en": {
                "simple": "After @deva[षष्ठ] (sixth) and @deva[अष्टम] (eighth), both @deva[ञ] (causing @deva[वृद्धि]) and @deva[अन्] come for 'part' meaning (not in Vedic). Examples: @deva[षष्ठः] or @deva[षाष्ठः] (one-sixth); @deva[अष्टमः] or @deva[आष्टमः] (one-eighth).",
                "standard": "The affixes @deva[ञ] (@deva[अ] with @deva[वृद्धि]) and @deva[अन्] come after @deva[षष्ठ] and @deva[अष्टम] in @deva[भाग] meaning (non-Vedic). @deva[ञ] triggers @deva[वृद्धि]: @deva[षष्ठ] → @deva[षाष्ठः]; @deva[अष्टम] → @deva[आष्टमः]. With @deva[अन्]: @deva[षष्ठः], @deva[अष्टमः] (accent-shifted).",
                "advanced": "This teaches @deva[ञ] alongside @deva[अन्] for @deva[षष्ठ]/deva[अष्टम] in @deva[भागार्थ अछन्दसि]. The @deva[ञकार] triggers @deva[वृद्धि] by @ref[7.2.117]: @deva[षष्ठ] → @deva[षाष्ठः]; @deva[अष्टम] → @deva[आष्टमः]. The @deva[चकार] draws in @deva[अन्]. Both options are valid: @deva[षष्ठः]/deva[षाष्ठः], @deva[अष्टमः]/deva[आष्टमः]."
            }
        },
        "53051": {
            "en": {
                "simple": "After @deva[षष्ठ], @deva[कन्] comes when a part of @deva[मान] (measure/weight) is meant. After @deva[अष्टम], @deva[लुक्] (deletion) occurs when a part of an animal's body is meant. Examples: @deva[षष्ठकः] (one-sixth of a measure); @deva[अष्टमः] (one-eighth of an animal's body).",
                "standard": "Special rules for @deva[षष्ठ] and @deva[अष्टम]: (1) @deva[कन्] comes after @deva[षष्ठ] for @deva[मान]-fraction: @deva[षष्ठकः भागः] (one-sixth of a grain-weight); (2) @deva[लुक्] of affixes occurs after @deva[अष्टम] for animal-body-parts: @deva[अष्टमः भागः] (one-eighth of an animal). Other affixes (@deva[ञ], @deva[अन्]) also apply optionally.",
                "advanced": "This sūtra provides specialized affixes: @deva[कन्] after @deva[षष्ठ] in @deva[मानभागार्थ] (@deva[मान] = grain-weight measure); @deva[लुक्] after @deva[अष्टम] in @deva[पश्वङ्गभागार्थ] (animal body-parts). @deva[लुक्] elides both @deva[ञ] and @deva[अन्]. The @deva[चकार] permits @deva[षाष्ठः]/deva[षष्ठः] and @deva[आष्टमः]/deva[अष्टमः] as alternatives. Context determines which affix applies."
            }
        },
        "53052": {
            "en": {
                "simple": "After @deva[एक] (one), the affix @deva[आकिनिच्] (becoming @deva[आकिन्]) comes when 'alone/without companion' is meant. Also @deva[कन्] or @deva[लुक्] apply. Examples: @deva[एकाकी] (alone), @deva[एककः], @deva[एकः].",
                "standard": "The affix @deva[आकिनिच्] (@deva[आकिन्]) attaches to @deva[एक] meaning 'alone' (@deva[असहाय]). The @deva[चकार] also allows @deva[कन्] and @deva[लुक्]. Forms: @deva[एकाकी] (nom. of @deva[एकाकिन्]), @deva[एककः], @deva[एकः]. Since @deva[एक] here means 'alone' (not numeral 'one'), duals and plurals exist: @deva[एकाकिनौ], @deva[एकाकिनः].",
                "advanced": "The affix @deva[आकिनिच्] applies to @deva[एक] in @deva[असहायार्थ] (solitary sense), not @deva[संख्यार्थ] (numeral). @deva[एक] has multiple meanings: @deva[अन्यार्थे, प्रधाने, प्रथमे, केवले, साधारणे, समाने, अल्पे, संख्यायां]. Here @deva[केवल] (alone) applies. The @deva[चकार] permits @deva[कन्] → @deva[एककः] and @deva[लुक्] → @deva[एकः]. Dual/plural possible: @deva[एकाकिनौ], @deva[एकाकिनः]."
            }
        },
        "53053": {
            "en": {
                "simple": "The affix @deva[चरट्] (becoming @deva[चर]) comes after a stem when 'this had been before' (@deva[भूतपूर्व]) is meant. Feminine takes @deva[ङीप्]. Examples: @deva[आढ्यचरः] (formerly rich), @deva[आढ्यचरी] (fem.).",
                "standard": "The affix @deva[चरट्] (@deva[चर], fem. @deva[चरी] by @deva[ङीप्]) indicates @deva[भूतपूर्व] (something that existed before but no longer). Examples: @deva[आढ्यो भूतपूर्वः] = @deva[आढ्यचरः] (once wealthy); @deva[सुकुमारचरः] (once delicate). The @deva[ट्] signals @deva[ङीप्] for feminine.",
                "advanced": "The affix @deva[चरट्] conveys @deva[भूतपूर्व] (compound of @deva[पूर्व] + @deva[भूत] by @deva[सुप्सुपा])—a past state no longer current. The @deva[टकार] triggers @deva[ङीप्] for @deva[स्त्री]. Note: @deva[चकार] is not @deva[इत्] despite @ref[1.3.7] @deva[चुटू], showing that rule is @deva[अनित्य]. Placement after @ref[5.2.18] would cause @deva[खञ्] to block @deva[चरट्]."
            }
        },
        "53054": {
            "en": {
                "simple": "After a stem in genitive case, @deva[रूप्य] and @deva[चरट्] come when 'formerly belonged to' is meant. Examples: @deva[देवदत्तस्य भूतपूर्वो गौः] = @deva[देवदत्तरूप्यः] or @deva[देवदत्तचरः] (cow that formerly belonged to Devadatta).",
                "standard": "The affixes @deva[रूप्य] and @deva[चरट्] (@deva[चर]) attach to genitive-ending stems when @deva[भूतपूर्व] refers to former ownership. Here @deva[भूतपूर्व] qualifies the affix's meaning (former possession), not the base. Examples: @deva[देवदत्तस्य भूतपूर्वः गौः] = @deva[देवदत्तरूप्यः] or @deva[देवदत्तचरः] (Devadatta's former cow).",
                "advanced": "Unlike @ref[5.3.53] where @deva[भूतपूर्व] qualifies the @deva[प्रकृति] (base meaning), here it qualifies the @deva[प्रत्ययार्थ] (affix meaning)—former ownership. The genitive (@deva[षष्ठी]) indicates the former possessor. Both @deva[रूप्य] and @deva[चरट्] apply: @deva[देवदत्तरूप्यः गौः] = @deva[देवदत्तचरः गौः] = cow that was Devadatta's."
            }
        },
        "53055": {
            "en": {
                "simple": "The affixes @deva[तमप्] and @deva[इष्ठन्] come after a stem to express superlative degree ('surpassing'). Examples: @deva[आढ्यतमः] (richest), @deva[पटिष्ठः] (most skillful).",
                "standard": "The affixes @deva[तमप्] (@deva[तम]) and @deva[इष्ठन्] (@deva[इष्ठ]) form superlatives expressing @deva[अतिशायन] (surpassing all). The term @deva[अतिशायन] (irregular for @deva[अतिशयन]) qualifies the primitive's sense. Examples: @deva[आढ्यतमः] (richest among many rich people); @deva[पटिष्ठः], @deva[गरिष्ठः] (by @ref[6.4.155]), @deva[लघिष्ठः]. Even superlatives can take further affixes: @deva[श्रेष्ठतमः].",
                "advanced": "These @deva[स्वार्थिक] affixes form superlatives. @deva[अतिशायन] = @deva[अतिशय] + @deva[ल्युट्] (irregular). Meaning: @deva[सर्व इमे आढ्याः, अयमेषामतिशयेनाढ्यः] = @deva[आढ्यतमः]. @deva[इष्ठन्] triggers @deva[उपधालोप] by @ref[6.4.155]: @deva[पटु] → @deva[पटिष्ठः]; @deva[गुरु] → @deva[गरिष्ठः]. Double superlatives possible: @deva[श्रेष्ठतमः] (Vedic: @deva[देवो वः सविता प्रार्पयतु श्रेष्ठतमाय कर्मणे])."
            }
        },
        "53056": {
            "en": {
                "simple": "The affix @deva[तमप्] also comes after a finite verb to express 'surpassing.' Example: @deva[पचतितमाम्] (cooks surprisingly well).",
                "standard": "The affix @deva[तमप्] (@deva[तम]) also applies after @deva[तिङन्त] (finite verbs) for @deva[अतिशायन]. Since @ref[4.1.1] @deva[ङ्याप्प्रातिपदिकात्] restricts taddhitas to nominals, this sūtra extends @deva[तमप्] to verbs. @deva[आम्] is added by @ref[5.4.11]. Example: @deva[पचतितमाम्] (he cooks most excellently). @deva[इष्ठन्] never comes after verbs (restricted to adjectives by @ref[5.3.58]).",
                "advanced": "This extends @deva[तमप्] beyond @deva[प्रातिपदिक] to @deva[तिङन्त] (conjugated verbs). By @ref[4.1.1], taddhitas normally follow only nominals; this sūtra overrides that. @deva[आम्] is mandated by @ref[5.4.11] after @deva[तिङ्] + @deva[तम]. Example: @deva[सर्व इमे पचन्ति, अयमेषामतिशयेन पचति] = @deva[पचतितमाम्]. @deva[इष्ठन्] is excluded by @ref[5.3.58] (@deva[गुणवचन]-restriction)."
            }
        },
        "53057": {
            "en": {
                "simple": "The affixes @deva[तरप्] and @deva[ईयसुन्] come for comparative degree when comparing two things or distinguishing items. Examples: @deva[आढ्यतरः] (richer of two), @deva[पटीयान्] (more skillful of two).",
                "standard": "The affixes @deva[तरप्] (@deva[तर]) and @deva[ईयसुन्] (@deva[ईयस्]) form comparatives in two contexts: (1) @deva[द्विवचन]—comparison between two: @deva[द्वाविमावाढ्यौ, अयमनयोरतिशयेन] = @deva[आढ्यतरः]; (2) @deva[विभज्योपपद]—distinguishing groups: @deva[माथुराः पाटलिपुत्रकेभ्य आढ्यतराः]. Examples: @deva[पटीयान्], @deva[लघीयान्] (from @deva[ईयसुन्]).",
                "advanced": "These affixes form comparatives. @deva[द्विवचन] = expression involving two (not grammatical dual). @deva[विभज्योपपद] = differentiated @deva[उपपद] (correlate requiring distinction). @deva[यथासंख्य] (@ref[1.3.10]) doesn't apply—either affix with either condition. After verbs: @deva[पचतितराम्] (@deva[आम्] by @ref[5.4.11]). Plural comparatives: @deva[पटीयांसः], @deva[लघीयांसः] (for groups)."
            }
        },
        "53058": {
            "en": {
                "simple": "The vowel-initial affixes @deva[ईयसुन्] and @deva[इष्ठन्] come only after words denoting qualities (adjectives). Example: @deva[लघीयान्], @deva[लघिष्ठः] (from @deva[लघु]), but @deva[पाचकतरः], @deva[पाचकतमः] (not *@deva[पाचकीयान्]).",
                "standard": "The @deva[अजादि] (vowel-initial) affixes @deva[ईयसुन्] and @deva[इष्ठन्] are restricted to @deva[गुणवचन] (quality-denoting words/adjectives). After adjectives: @deva[लघीयान्], @deva[लघिष्ठः]; @deva[पटीयान्], @deva[पटिष्ठः]. After non-adjectives like @deva[पाचक] (cook): only @deva[पाचकतरः], @deva[पाचकतमः]. Note: @deva[तरप्]/deva[तमप्] remain available for adjectives too: @deva[पटुतरः], @deva[पटुतमः].",
                "advanced": "This restricts @deva[अजादि] affixes (@deva[ईयसुन्], @deva[इष्ठन्]) to @deva[गुणवचन प्रातिपदिक] (adjectival stems). The word @deva[एव] limits the affixes, not the bases—so @deva[गुणवचन] can still take @deva[तरप्]/deva[तमप्]. Agent nouns like @deva[पाचक] take only @deva[तरप्]/deva[तमप्]: @deva[पाचकतरः], @deva[पाचकतमः] (not *@deva[पाचकीयान्], *@deva[पाचकिष्ठः])."
            }
        },
        "53059": {
            "en": {
                "simple": "In Vedic, the affixes @deva[इष्ठन्] and @deva[ईयसुन्] come after stems ending in @deva[तृ] (agent suffixes). Examples: @deva[करिष्ठः] (most doing), @deva[दोहीयसी] (milking better).",
                "standard": "In @deva[छन्दस्] (Vedic), @deva[इष्ठन्] and @deva[ईयसुन्] extend to @deva[तृ]-ending stems (@deva[तृन्] or @deva[तृच्] agent nouns), beyond the @deva[गुणवचन] restriction. The @deva[तृ] is elided by @ref[6.4.154]. Examples: @deva[अतिशयेन कर्ता] = @deva[करिष्ठः]; @deva[दोहीयसी धेनुः] (cow that milks better).",
                "advanced": "This @deva[छन्दस्] rule extends @deva[इष्ठन्]/deva[ईयसुन्] to @deva[तृन्न्त/तृजन्त] (agent nouns), overriding @ref[5.3.58]. By @ref[6.4.154], @deva[तृ] is deleted: @deva[कर्तृ] + @deva[इष्ठ] → @deva[कर्] + @deva[इष्ठ] → @deva[करिष्ठः]. Vedic: @deva[आसुर्ति करिष्ठः]. For @deva[दोहीयसी], vārttika under @ref[6.3.35] changes @deva[दोहित्री] to @deva[दोहितृ] before @deva[ईयस्]."
            }
        },
        "53060": {
            "en": {
                "simple": "The word @deva[प्रशस्य] (praiseworthy) becomes @deva[श्र] before @deva[इष्ठन्] and @deva[ईयसुन्]. Examples: @deva[श्रेष्ठः] (best), @deva[श्रेयान्] (better).",
                "standard": "Before @deva[इष्ठन्] and @deva[ईयसुन्], @deva[प्रशस्य] (praiseworthy) is replaced by @deva[श्र]. Though @deva[प्रशस्य] is not strictly @deva[गुणवचन], this rule permits the affixes. Examples: @deva[प्रशस्यतमः] = @deva[श्रेष्ठः] (best); @deva[प्रशस्यतरः] = @deva[श्रेयान्] (better). @ref[6.4.163] prevents elision of @deva[श्र]'s @deva[अ].",
                "advanced": "This @deva[आदेश] teaches @deva[प्रशस्य] → @deva[श्र] before @deva[अजादि] affixes. The sūtra must be read as @deva[प्रशस्यस्य श्रो ऽजाद्योः] (locative). Though @deva[प्रशस्य] isn't @deva[गुणवचन], this rule specially permits @deva[इष्ठन्]/deva[ईयसुन्]. By @ref[6.4.163], the @deva[अकार] of @deva[श्र] is protected from @ref[6.4.148] and @ref[6.4.155]. Results: @deva[श्रेष्ठः], @deva[श्रेयान्] = @deva[प्रशस्यतमः], @deva[प्रशस्यतरः]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.3.46-60)")

if __name__ == "__main__":
    main()
