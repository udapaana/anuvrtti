# -*- coding: utf-8 -*-
import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

updates = {
    "33081": {
        "en": {
            "simple": "The word @deva[अपघन] is irregularly formed when meaning 'a limb/member of the body'. Example: @deva[अपघनः] 'a bodily limb (hand, foot, etc.)'. Otherwise: @deva[अपघातः].",
            "standard": "The word @deva[अपघनः] is formed irregularly (@deva[निपातन]) from @deva[अप] + @deva[हन्] when meaning @deva[अङ्ग] (a member of the body). The term @deva[अङ्ग] here means a portion like hand or foot, not the whole body. Without this meaning: @deva[अपघातः] 'striking away'.",
            "advanced": "This @deva[निपातन] assigns @deva[अपघन] to the anatomical sense. The @deva[घन्]-substitution applies irregularly with @deva[अप]-prefix for body-part meaning. This specialized usage distinguishes from @deva[अपघात] 'injury, assault', which uses regular @deva[घञ्] derivation."
        }
    },
    "33082": {
        "en": {
            "simple": "The affix @deva[अप्] comes after @deva[हन्] with @deva[अयस्] 'iron', @deva[वि], or @deva[द्रु] 'wood' when meaning an instrument, with @deva[घन्] as substitute. Examples: @deva[अयोघनः] 'forge-hammer'; @deva[विघनः] 'mallet'; @deva[द्रुघनः] 'axe'.",
            "standard": "When @deva[अयस्] 'iron', @deva[वि], or @deva[द्रु] 'wood' is in composition with @deva[हन्], and the word is related as @deva[करण] (instrument), @deva[अप्] applies with @deva[घन्] substitute. Examples: @deva[अयोघनः] 'iron-hammer' (tool that strikes iron); @deva[विघनः] 'mallet'; @deva[द्रुघनः] or @deva[द्रुघणः] 'axe' (wood-striker). The @deva[ण] variant follows either @ref[8.4.3] or inclusion in @deva[आरोहणादि] class (@ref[4.2.80]).",
            "advanced": "The @deva[करणे] condition specifies instrumental relationship—the tool by which the object is struck. The @deva[अयस्]-compound shows @deva[अयस्] → @deva[अयो] in composition. The @deva[द्रुघण] variant with cerebral @deva[ण] is explained either by regular retroflex assimilation or by lexical listing in the @deva[आरोहणादि] class."
        }
    },
    "33083": {
        "en": {
            "simple": "The affix @deva[क] also comes after @deva[हन्] when @deva[स्तम्ब] 'clump' is in composition with instrumental meaning. Examples: @deva[स्तम्बघ्नः] or @deva[स्तम्बघनः] 'a hoe for weeding grass clumps'. Without instrument meaning: @deva[स्तम्बघातः].",
            "standard": "With @deva[स्तम्ब] 'clump/tuft' and @deva[करण] (instrument) sense, @deva[हन्] takes either @deva[क] or @deva[अप्] (from previous @deva[सूत्र], with @deva[घन्] substitute). Thus @deva[स्तम्बघ्नः] (with @deva[क]: @deva[हन्] + @deva[क] → @deva[ह्न्] (@ref[6.4.98]) → @deva[घ्न] (@ref[7.3.54])) or @deva[स्तम्बघनः] (with @deva[अप्], @deva[घन्] substitute) 'a small hoe for weeding'. Feminine: @deva[स्तम्बघ्ना] or @deva[स्तम्बघना].",
            "advanced": "The @deva[च] draws @deva[अप्] from the previous rule. With @deva[क]: @deva[हन्] → @deva[ह्न्] (penultimate @deva[अ] deletion by @ref[6.4.98]) → @deva[घ्न] (@deva[ह्] → @deva[घ्] by @ref[7.3.54]). With @deva[अप्]: total replacement @deva[हन्] → @deva[घन्]. Both yield instrumental-meaning words for grass-tuft removal tools."
        }
    },
    "33084": {
        "en": {
            "simple": "The affix @deva[क] comes after @deva[हन्] with @deva[परि] in instrumental sense, with @deva[घ] replacing @deva[हन्]. Example: @deva[परिघः] or @deva[पलिघः] 'an iron bar for locking gates, iron club'.",
            "standard": "With @deva[परि] and instrumental meaning, @deva[हन्] takes @deva[क] with @deva[घ] (not @deva[घन्] or @deva[घ्न]) as substitute. Thus @deva[परिघः] or @deva[पलिघः] (@ref[8.2.22], @deva[र] → @deva[ल]) 'an iron beam for barring/locking gates, an iron club'.",
            "advanced": "The unique @deva[घ]-substitute (not @deva[घन्] or @deva[घ्न]) distinguishes this rule. The variant @deva[पलिघ] with @deva[ल] follows @ref[8.2.22] (optional @deva[र] → @deva[ल] in certain environments). The @deva[परिघ] is a defensive/offensive implement—either a door-bolt or a weapon."
        }
    },
    "33085": {
        "en": {
            "simple": "The word @deva[उपघ्न] is irregularly formed when meaning 'an inclined place for support/leaning'. Examples: @deva[पर्वतोपघ्नः] 'mountain slope'; @deva[ग्रामोपघ्नः] 'village border'. Otherwise: @deva[पर्वतोपघातः].",
            "standard": "The word @deva[उपघ्नः] is formed irregularly from @deva[उप] + @deva[हन्] + @deva[अप्] when meaning @deva[आश्रय] (proximity, support, inclination). The irregularity: eliding penultimate @deva[अ] of @deva[हन्], then @deva[हन्] → @deva[घ्न] by sandhi. Examples: @deva[पर्वतोपघ्नः] 'the mountain slope/vicinity'; @deva[ग्रामोपघ्नः] 'bordering the village'. Without support meaning: @deva[पर्वतोपघातः].",
            "advanced": "The @deva[निपातन] here could theoretically be achieved by @deva[क] without irregularity, but the form is listed specifically. The @deva[आश्रय] 'proximity/contiguity' sense applies to slopes, borders, and areas adjacent to landmarks. The semantic specialization from 'striking' to 'leaning against' reflects spatial metaphor."
        }
    },
    "33086": {
        "en": {
            "simple": "The words @deva[सङ्घ] 'collection' and @deva[उद्घ] 'praise/excellence' are irregularly formed. Examples: @deva[सङ्घः पशूनाम्] 'herd of cattle'; @deva[उद्घो मनुष्यः] 'excellent man'. Otherwise: @deva[सङ्घातः] 'union'.",
            "standard": "The words @deva[सङ्घः] and @deva[उद्घः] are formed irregularly from @deva[सम्]/उत् + @deva[हन्] + @deva[अप्] with specific meanings: @deva[सङ्घ] 'collection/group' and @deva[उद्घ] 'praise/excellence' respectively (by @ref[1.3.10] sequential pairing). Derivation: @deva[सम्] + @deva[हन्] + @deva[अप्] → @deva[सं] + @deva[ह्] + @deva[अ] → @deva[सं] + @deva[घ्] + @deva[अ] → @deva[सङ्घः]. Examples: @deva[सङ्घः पशूनाम्] 'a herd'; @deva[उद्घो मनुष्यः] 'a praised/excellent man'. Without these senses: @deva[सङ्घातः] 'compact union'.",
            "advanced": "The @deva[यथासंख्य] principle pairs @deva[सम्]-meaning with 'collection' and @deva[उत्]-meaning with 'praise/excellence'. The phonological reduction @deva[हन्] → @deva[ह्] (penultimate deletion) → @deva[घ्] (by sandhi) is irregular for @deva[अप्] forms. The common word @deva[सङ्घ] 'community, assembly' derives from this formation."
        }
    },
    "33087": {
        "en": {
            "simple": "The word @deva[निघ] is irregularly formed when meaning 'as high as broad' (square/cubic proportions). Example: @deva[निघा वृक्षाः] 'trees as high as broad'; @deva[निघा शालयः] 'square halls'. Otherwise: @deva[निघातः] 'a blow'.",
            "standard": "The word @deva[निघः] is formed irregularly from @deva[नि] + @deva[हन्] when meaning @deva[निमित] (measured all around, i.e., 'as high as broad'). Examples: @deva[निघा वृक्षाः] 'trees of equal height and breadth'; @deva[निघा शालयः] 'square or cubic halls'. Without this meaning: @deva[निघातः] 'striking down, a blow'.",
            "advanced": "The term @deva[निमित] = @deva[समन्तान्मितम्] or @deva[समारोहपरिणाहम्] 'measured equally in all dimensions'. It may derive from @deva[मा] 'to measure' or @deva[मि] 'to erect'. The @deva[निपातन] restricts @deva[निघ] to architectural/natural proportional descriptions. Reference: Āpastamba Dharmasūtra I.20.30."
        }
    },
    "33088": {
        "en": {
            "simple": "The affix @deva[क्त्रि] comes after roots marked with @deva[डु] in the Dhātupāṭha, with @deva[मप्] always added. Examples: @deva[पक्त्रिमम्] 'what is cooked/ripe'; @deva[उप्त्रिमम्] 'sown'; @deva[कृत्रिमम्] 'artificial'.",
            "standard": "Roots with indicatory @deva[डु] take @deva[क्त्रि] in @deva[भाव] etc. senses. By @ref[4.4.20], @deva[मप्] is always added to @deva[क्त्रि], giving @deva[त्रिम]. Examples: @deva[डुपचष्] 'to cook' → @deva[पक्त्रिमम्] 'cooked/ripe'; @deva[डुवप्] → @deva[उप्त्रिमम्] 'sown' (@ref[6.1.15]); @deva[डुकृञ्] → @deva[कृत्रिमम्] 'artificial, man-made'.",
            "advanced": "The @deva[क्त्रि] affix cannot stand alone—it requires @deva[मप्] augment by @ref[4.4.20], forming @deva[त्रिम]. The @deva[डु] marker in Dhātupāṭha entries identifies roots taking this affix. The @deva[उप्त्रिम] form involves @deva[संप्रसारण] by @ref[6.1.15]. These @deva[त्रिम]-ending words are adjectival, often with nuance of artificiality or process-completion."
        }
    },
    "33089": {
        "en": {
            "simple": "The affix @deva[अथुच्] comes after roots marked with @deva[टु] in the Dhātupāṭha. Examples: @deva[वेपथुः] 'trembling'; @deva[श्वयथुः] 'swelling'; @deva[क्षवथुः] 'sneezing'; @deva[दवथुः] 'burning'.",
            "standard": "Roots with indicatory @deva[टु] take @deva[अथुच्] in @deva[भाव] etc. senses. The @deva[च्] is @deva[इत्]. Examples: @deva[टुवेपृ] 'to tremble' → @deva[वेपथुः] 'trembling'; @deva[टुओश्वि] 'to swell' → @deva[श्वयथुः] 'swelling'; @deva[टुक्षुः] 'to sneeze' → @deva[क्षवथुः] 'sneezing'; @deva[टुदु] 'to burn' → @deva[दवथुः] 'burning'.",
            "advanced": "The @deva[टु]-marker in Dhātupāṭha entries triggers @deva[अथुच्]. The affix (operational form @deva[अथु] after @deva[इत्]-deletion) creates masculine nouns denoting processes or states—particularly bodily conditions like trembling, swelling, sneezing, or burning sensations."
        }
    },
    "33090": {
        "en": {
            "simple": "The affix @deva[नङ्] comes after @deva[यज्] 'to sacrifice', @deva[याच्] 'to ask', @deva[यत्] 'to strive', @deva[विच्छ्] 'to shine', @deva[प्रच्छ्] 'to ask', @deva[रक्ष्] 'to protect'. The @deva[ङ्] blocks @deva[गुण/वृद्धि]. Examples: @deva[यज्ञः] 'sacrifice'; @deva[याच्ञा] 'request'; @deva[यत्नः] 'effort'; @deva[प्रश्नः] 'question'.",
            "standard": "The affix @deva[नङ्] follows @deva[यज्], @deva[याच्], @deva[यत्], @deva[विच्छ्], @deva[प्रच्छ्], @deva[रक्ष्] in @deva[भाव] etc. senses. The @deva[ङ्] is @deva[इत्], blocking @deva[गुण/वृद्धि] (@ref[1.1.5]). Examples: @deva[यज्ञः] 'sacrifice'; @deva[याच्ञा] 'solicitation'; @deva[यत्नः] 'effort'; @deva[विश्नः] 'lustre' (@ref[6.4.19]); @deva[प्रश्नः] 'question'; @deva[रक्ष्णः] 'protection'.",
            "advanced": "The @deva[प्रच्छ्] root should undergo @deva[र] → @deva[ॠ] before @deva[ङित्] affix by @ref[6.1.16], but doesn't—an irregularity Pāṇini himself accepts by using @deva[प्रश्न] in @ref[3.2.117]. The @deva[विच्छ्] → @deva[विश्न] transformation involves @ref[6.4.19]. These @deva[न]-ending words are productive nominal forms from the listed roots."
        }
    }
}

for key, value in updates.items():
    data[key] = value

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Updated 3.3.81-3.3.90")
