#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json

# Read current file
with open('static/data/layered_commentary.json', 'r') as f:
    data = json.load(f)

# Rewrite 2.2 sūtras following guidelines
rewrites = {
    "22001": {
        "en": {
            "simple": "The words @deva[पूर्व] 'front', @deva[अपर] 'back', @deva[अधर] 'lower', and @deva[उत्तर] 'upper' form a @deva[तत्पुरुष] compound with words denoting things that have parts, when that thing is numerically one. This rule overrides the genitive @deva[तत्पुरुष] of @ref[2.2.8], which would place these words last.\n\n**Examples:**\n- @deva[पूर्वकायः] 'the front of the body'\n- @deva[अपरकायः] 'the back of the body'\n- @deva[अधरकायः] 'the lower part of the body'\n- @deva[उत्तरकायः] 'the upper part of the body'",
            "standard": "The words @deva[पूर्व], @deva[अपर], @deva[अधर], @deva[उत्तर] compound with nouns denoting things having parts (@deva[एकदेशिन्]), when that thing is numerically one (@deva[एकाधिकरण]). The compound is @deva[तत्पुरुष], with these words placed first—overriding the genitive compound of @ref[2.2.8] (which would give *@deva[कायस्य पूर्वम्]).\n\n**Examples:** @deva[पूर्वकायः], @deva[अपरकायः], @deva[अधरकायः], @deva[उत्तरकायः].\n\n**Why 'thing with parts'?** No compound in @deva[पूर्वं छात्राणाम्] 'the foremost of students'—students are not parts of a whole.\n\n**Why 'numerically one'?** No compound in @deva[पूर्वं नाभेः कायस्य]—'the front of the body before the navel'—the @deva[अधिकरण] is not one.\n\nCompounds like @deva[मध्याह्नः] 'noon' and @deva[सायाह्नः] 'evening' are explained by @ref[6.3.110].",
            "advanced": "This @deva[सूत्र] ordains @deva[तत्पुरुष] for @deva[पूर्व], @deva[अपर], @deva[अधर], @deva[उत्तर] with @deva[एकदेशिन्] (thing having parts) when @deva[एकाधिकरण] (the substratum is one). It overrides the genitive @deva[तत्पुरुष] of @ref[2.2.8], placing these words first per @ref[1.2.43] and @ref[2.2.30].\n\n**Examples:** @deva[पूर्वकायः], @deva[अपरकायः], @deva[अधरकायः], @deva[उत्तरकायः].\n\n**Restrictions:**\n- @deva[एकदेशिन्]: Excludes @deva[पूर्वं छात्राणाम्] 'foremost of students'—no part-whole relation.\n- @deva[एकाधिकरण]: Excludes @deva[पूर्वं नाभेः कायस्य]—multiple substrata.\n\nCompounds @deva[मध्याह्नः], @deva[सायाह्नः] arise by inference from @ref[6.3.110], which compounds @deva[अह्न] with all its part-denoting words."
        }
    },
    "22002": {
        "en": {
            "simple": "The word @deva[अर्ध] 'half', when neuter and meaning exact bisection, forms a @deva[तत्पुरुष] compound with words denoting things that have parts (numerically one).\n\n**Examples:**\n- @deva[अर्धपिप्पली] 'half a pepper'\n- @deva[अर्धकोशातकी] 'half a @deva[कोशातकी] (gourd)'\n\nWhen @deva[अर्ध] is masculine (meaning 'a part' generally), it follows @ref[2.2.8] instead: @deva[ग्रामार्धः] 'half the village', @deva[नगरार्धः] 'half the city'.",
            "standard": "Neuter @deva[अर्ध] meaning exact bisection compounds with @deva[एकदेशिन्] words (numerically one). The conditions @deva[एकदेशिन्] and @deva[एकाधिकरण] from @ref[2.2.1] continue here.\n\n**Examples:** @deva[अर्धपिप्पली], @deva[अर्धकोशातकी].\n\n**Why 'neuter'?** Masculine @deva[अर्ध] follows @ref[2.2.8]: @deva[ग्रामार्धः], @deva[नगरार्धः].\n\n**Why @deva[एकदेशिन्]?** No compound in @deva[अर्धं पशोर्देवदत्तस्य] 'half the animal is Devadatta's'—@deva[देवदत्त] is not a part of @deva[पशु].\n\n**Why @deva[एकाधिकरण]?** No compound in @deva[अर्धं पिप्पलीनाम्] 'half of the peppers'—plural substratum.",
            "advanced": "@deva[अर्ध] when @deva[नपुंसक] (neuter) and denoting exact halves (@deva[समविभाग]) compounds with @deva[एकदेशिन्] words. This also overrides @ref[2.2.8].\n\n**Examples:** @deva[अर्धपिप्पली], @deva[अर्धकोशातकी].\n\n**Why @deva[नपुंसक]?** Masculine @deva[अर्ध] (meaning 'portion' generally) takes genitive compound: @deva[ग्रामार्धः], @deva[नगरार्धः].\n\n**@deva[एकदेशिन्] required:** @deva[अर्धं पशोर्देवदत्तस्य]—no compound; @deva[देवदत्त] ≠ part of @deva[पशु].\n\n**@deva[एकाधिकरण] required:** @deva[अर्धं पिप्पलीनाम्]—no compound; plural substratum."
        }
    },
    "22003": {
        "en": {
            "simple": "The ordinals @deva[द्वितीय] 'second', @deva[तृतीय] 'third', @deva[चतुर्थ] 'fourth', and @deva[तुर्य] 'fourth' optionally form a @deva[तत्पुरुष] compound with words denoting things that have parts (numerically one).\n\n**Examples:**\n- @deva[द्वितीयभिक्षा] or @deva[भिक्षाद्वितीयम्] 'second portion of alms'\n- @deva[तृतीयभिक्षा], @deva[चतुर्थभिक्षा], @deva[तुर्यभिक्षा]\n\nThe option allows either this compound or the genitive compound of @ref[2.2.8].",
            "standard": "The ordinals @deva[द्वितीय], @deva[तृतीय], @deva[चतुर्थ], @deva[तुर्य] optionally compound with @deva[एकदेशिन्] words (numerically one). By @deva[विभाषा], @ref[2.2.8] also applies.\n\n**Option:** @deva[द्वितीयभिक्षा] ~ @deva[भिक्षाद्वितीयम्] 'second alms-portion'.\n\nThe prohibition of @ref[2.2.11] (no genitive compound with ordinals) doesn't apply here—it finds scope with other ordinals like @deva[पञ्चम], @deva[षष्ठ], etc.\n\n@note[type=vārtika]: @deva[तुरीय] 'fourth' should also be included: @deva[भिक्षातुरीयम्] or @deva[तुरीयभिक्षा].\n\n**@deva[एकदेशिन्]/@deva[एकाधिकरण] required:** No compound in @deva[द्वितीयं भिक्षाया भिक्षुकस्य] or @deva[द्वितीयं भिक्षाणाम्].",
            "advanced": "@deva[द्वितीय], @deva[तृतीय], @deva[चतुर्थ], @deva[तुर्य] optionally compound with @deva[एकदेशिन्] + @deva[एकाधिकरण] words. The @deva[विभाषा] allows @ref[2.2.8] alternatively.\n\n**Option:** @deva[द्वितीयभिक्षा] ~ @deva[भिक्षाद्वितीयम्].\n\n@ref[2.2.11] prohibits genitive compounds with @deva[पूरणार्थ] (ordinal sense)—but that finds scope with @deva[पञ्चम] etc., not these four.\n\n@note[type=vārtika]: Include @deva[तुरीय]: @deva[तुरीयभिक्षा] ~ @deva[भिक्षातुरीयम्].\n\n**Restrictions continue:** @deva[द्वितीयं भिक्षाया भिक्षुकस्य], @deva[द्वितीयं भिक्षाणाम्]—no compound."
        }
    },
    "22004": {
        "en": {
            "simple": "The words @deva[प्राप्त] 'obtained' and @deva[आपन्न] 'obtained' optionally form a @deva[तत्पुरुष] compound with words in the accusative case. This provides an alternative to @ref[2.1.24].\n\n**Examples:**\n- @deva[प्राप्तजीविकः] or @deva[जीविकाप्राप्तः] 'one who has obtained livelihood'\n- @deva[आपन्नजीविकः] or @deva[जीविकापन्नः]",
            "standard": "The words @deva[प्राप्त] and @deva[आपन्न] optionally compound with @deva[द्वितीया]-ending words. This is an alternative to @ref[2.1.24].\n\nThe conditions @deva[एकदेशिन्] and @deva[एकाधिकरण] do not continue here.\n\n**Examples:** @deva[प्राप्तजीविकः] ~ @deva[जीविकाप्राप्तः] 'obtained livelihood'; @deva[आपन्नजीविकः] ~ @deva[जीविकापन्नः].",
            "advanced": "@deva[प्राप्त] and @deva[आपन्न] optionally compound with @deva[द्वितीया]-ending words. The @deva[अनुवृत्ति] of @deva[एकदेशिन्] and @deva[एकाधिकरण] does not extend here.\n\nThis provides an alternative to @ref[2.1.24] (@deva[द्वितीया]-@deva[तत्पुरुष]).\n\n**Option:** @deva[प्राप्तजीविकः] ~ @deva[जीविकाप्राप्तः]; @deva[आपन्नजीविकः] ~ @deva[जीविकापन्नः]."
        }
    },
    "22005": {
        "en": {
            "simple": "Words denoting time form a @deva[तत्पुरुष] compound with words denoting what is measured by that time.\n\n**Examples:**\n- @deva[मासजातः] 'month-old' (born a month ago)\n- @deva[संवत्सरजातः] 'year-old'\n- @deva[द्व्यहजातः] 'two-days-old'",
            "standard": "Time-denoting words compound with words denoting what that time measures. This is a type of genitive compound.\n\n**Examples:** @deva[मासजातः] (@deva[मासो जातस्य]) 'month-old', @deva[संवत्सरजातः] 'year-old', @deva[द्व्यहजातः] 'two-days-old'.",
            "advanced": "Time-words (@deva[कालवाचिन्]) compound with words denoting what is measured by that time. This is a genitive @deva[तत्पुरुष].\n\n**Examples:** @deva[मासजातः] (@deva[मासो जातस्य]), @deva[संवत्सरजातः], @deva[द्व्यहजातः]."
        }
    },
    "22006": {
        "en": {
            "simple": "The negative particle @deva[नञ्] forms a @deva[तत्पुरुष] compound with case-inflected words. The @deva[न्] of @deva[नञ्] is elided by @ref[6.3.73].\n\n**Example:** @deva[न ब्राह्मणः] → @deva[अब्राह्मणः] 'not a @deva[ब्राह्मण]'\n\n@deva[नञ्] has six senses:\n1. @deva[सादृश्य] (resemblance): @deva[अब्राह्मणः] 'like a @deva[ब्राह्मण] but not one'\n2. @deva[अभाव] (absence): @deva[अज्ञानम्] 'absence of knowledge'\n3. @deva[भेद] (difference): @deva[अपटः] 'something other than cloth'\n4. @deva[अल्पता] (diminution): @deva[अनुदरा] 'having a slender waist'\n5. @deva[अप्राशस्त्य] (unfitness): @deva[अकालः] 'wrong time'\n6. @deva[विरोध] (opposition): @deva[अनीतिः] 'immorality'",
            "standard": "The particle @deva[नञ्] compounds with @deva[सुबन्त] words. The @deva[न्] is elided by @ref[6.3.73]: @deva[न ब्राह्मणः] → @deva[अब्राह्मणः].\n\n**Six senses of @deva[नञ्]:**\n1. @deva[सादृश्य]: @deva[अब्राह्मणः] 'resembling a @deva[ब्राह्मण]'\n2. @deva[अभाव]: @deva[अज्ञानम्] 'non-knowledge'\n3. @deva[भेद]: @deva[अपटः] 'not-cloth'\n4. @deva[अल्पता]: @deva[अनुदरा] 'thin-waisted'\n5. @deva[अप्राशस्त्य]: @deva[अकालः] 'bad time'\n6. @deva[विरोध]: @deva[अनीतिः] 'opposite of morality'\n\n@note[type=vārtika]: @deva[न्] is also elided with verbs when censure is implied: @deva[अपचसि त्वं जाल्म] 'you don't cook, O fool'.",
            "advanced": "@deva[नञ्] compounds with @deva[सुबन्त] words to form @deva[नञ्-तत्पुरुष]. The @deva[न्] is elided by @ref[6.3.73].\n\n**Six senses:**\n1. @deva[सादृश्य]: @deva[अब्राह्मणः]—wears sacred thread but is @deva[क्षत्रिय]/@deva[वैश्य]\n2. @deva[अभाव]: @deva[अज्ञानम्]\n3. @deva[भेद]: @deva[अपटः]—something different from cloth\n4. @deva[अल्पता]: @deva[अनुदरा]—diminutive\n5. @deva[अप्राशस्त्य]: @deva[अकालः]—depreciative\n6. @deva[विरोध]: @deva[अनीतिः]—contrariety\n\n@note[type=vārtika]: @deva[न्] elided with verbs in censure: @deva[अपचसि त्वं जाल्म]."
        }
    },
    "22007": {
        "en": {
            "simple": "The word @deva[ईषत्] 'slightly' forms a @deva[तत्पुरुष] compound with case-inflected words that do not end in a @deva[कृत्] affix. It compounds only with adjectives (quality-words).\n\n**Examples:**\n- @deva[ईषत्कडारः] 'somewhat tawny'\n- @deva[ईषत्पिङ्गलः] 'slightly brown'\n- @deva[ईषद्विकटः] 'a little hideous'\n- @deva[ईषदुन्नतः] 'slightly raised'\n\n**Not with substantives:** No compound in @deva[ईषद्गार्ग्यः].",
            "standard": "@deva[ईषत्] 'slightly' compounds with @deva[अकृदन्त] (non-@deva[कृत्]) words—specifically adjectives.\n\n**Examples:** @deva[ईषत्कडारः], @deva[ईषत्पिङ्गलः], @deva[ईषद्विकटः], @deva[ईषदुन्नतः], @deva[ईषत्पीतम्] 'slightly yellow', @deva[ईषद्रक्तम्] 'slightly red'.\n\n**Why 'quality-words'?** No compound in @deva[ईषद्गार्ग्यः]—@deva[गार्ग्य] is a substantive, not a quality.",
            "advanced": "@deva[ईषत्] compounds with @deva[अकृदन्त] @deva[सुबन्त] words. It should be stated that @deva[ईषत्] compounds only with @deva[गुणवाचिन्] (quality-denoting) words.\n\n**Examples:** @deva[ईषत्कडारः], @deva[ईषत्पिङ्गलः], @deva[ईषद्विकटः], @deva[ईषदुन्नतः], @deva[ईषत्पीतम्], @deva[ईषद्रक्तम्].\n\n**Why @deva[गुणवाचिन्]?** @deva[ईषद्गार्ग्यः]—no compound; @deva[गार्ग्य] is @deva[द्रव्यवाचिन्]."
        }
    },
    "22008": {
        "en": {
            "simple": "A word ending in the sixth (genitive) case-affix forms a @deva[तत्पुरुष] compound with another case-inflected word.\n\n**Examples:**\n- @deva[राजपुरुषः] 'the king's man' (@deva[राज्ञः पुरुषः])\n- @deva[ब्राह्मणकम्बलः] 'the @deva[ब्राह्मण]'s blanket'",
            "standard": "A @deva[षष्ठी]-ending word compounds with a @deva[सुबन्त] word. This is the general @deva[षष्ठी]-@deva[तत्पुरुष].\n\n**Examples:** @deva[राजपुरुषः], @deva[ब्राह्मणकम्बलः].\n\n@note[type=vārtika]: When a genitive is governed by a @deva[कृदन्त] word (per @ref[2.3.65]), it may compound with that @deva[कृत्] word: @deva[इध्मप्रवश्चनः] 'fuel-cutter', @deva[पलाशशातनः] '@deva[पलाश]-destroyer'.\n\nA genitive ordained by any rule other than @ref[2.3.50] (@deva[प्रतिपदविधान]-@deva[षष्ठी]) cannot compound—see @ref[2.2.10] @deva[वार्त्तिक].",
            "advanced": "@deva[षष्ठी]-ending words compound with @deva[सुबन्त] words: @deva[षष्ठी]-@deva[तत्पुरुष].\n\n**Examples:** @deva[राजपुरुषः], @deva[ब्राह्मणकम्बलः].\n\n@note[type=vārtika]: When @deva[षष्ठी] is governed by @deva[कृदन्त] (@ref[2.3.65]), compounding occurs: @deva[इध्मप्रवश्चनः], @deva[पलाशशातनः].\n\n**@deva[प्रतिपदविधान]-@deva[षष्ठी]:** A genitive ordained by rules other than @ref[2.3.50] (such as @ref[2.3.38], @ref[2.3.51], @ref[2.3.52]) cannot compound—see @deva[वार्त्तिक] under @ref[2.2.10]."
        }
    },
    "22009": {
        "en": {
            "simple": "A word in the genitive case forms a @deva[तत्पुरुष] compound with @deva[याजक] 'sacrificer' and similar words, even though @ref[2.2.16] would otherwise prohibit it.\n\n**Examples:**\n- @deva[ब्राह्मणयाजकः] 'one who sacrifices for @deva[ब्राह्मण]s'\n- @deva[क्षत्रिययाजकः] 'one who sacrifices for @deva[क्षत्रिय]s'",
            "standard": "A @deva[षष्ठी]-ending word compounds with @deva[याजक] etc. This overrides @ref[2.2.16], which would block genitive compounds with @deva[कर्तृ]-denoting @deva[अक]-words.\n\n**Examples:** @deva[ब्राह्मणयाजकः], @deva[क्षत्रिययाजकः].\n\n**The @deva[याजकादि] list:** @deva[याजक], @deva[पूजक], @deva[परिचारक], @deva[परिवेषक], @deva[परिषेचक], @deva[स्नापक]/@deva[स्नातक], @deva[अध्यापक], @deva[उत्साहक]/@deva[उत्सादक], @deva[उद्वर्तक], @deva[होतृ], @deva[नर्तृ], @deva[रथगणक], @deva[पत्तिगणक], @deva[पोतृ], @deva[हर्तृ], @deva[वर्तक].\n\n@note[type=vārtika]: A genitive compounds with a word expressing a quality that inheres in the genitive referent: @deva[ब्राह्मणवर्णः] '@deva[ब्राह्मण]-caste', @deva[चन्दनगन्धः] 'sandal-scent'.\n\n@note[type=vārtika]: Also with comparatives—the @deva[तर] is elided: @deva[सर्वेषां श्वेततरः] → @deva[सर्वश्वेतः] 'whitest of all'.",
            "advanced": "@deva[षष्ठी]-ending words compound with @deva[याजकादि] words. This overrides @ref[2.2.16].\n\n**Examples:** @deva[ब्राह्मणयाजकः], @deva[क्षत्रिययाजकः].\n\n**@deva[याजकादि]:** @deva[याजक], @deva[पूजक], @deva[परिचारक], @deva[परिवेषक], @deva[परिषेचक], @deva[स्नापक], @deva[अध्यापक], @deva[उत्साहक], @deva[उद्वर्तक], @deva[होतृ], @deva[नर्तृ], @deva[रथगणक], @deva[पत्तिगणक], @deva[पोतृ], @deva[हर्तृ], @deva[वर्तक].\n\n@note[type=vārtika]: Genitive compounds with @deva[गुण] inhering in referent: @deva[ब्राह्मणवर्णः], @deva[चन्दनगन्धः], @deva[कपित्थरसः].\n\n@note[type=vārtika]: With comparatives (@deva[तर] elided): @deva[सर्वश्वेतः], @deva[सर्वमहान्]—exception to @ref[2.2.10]."
        }
    },
    "22010": {
        "en": {
            "simple": "A word in the genitive case does not form a compound when the genitive expresses specification (@deva[निर्धारण])—selecting one from many based on genus, attribute, or action.\n\n**Examples (no compound):**\n- @deva[क्षत्रियो मनुष्याणां शूरतमः] 'the @deva[क्षत्रिय] is the bravest among men' (genus)\n- @deva[कृष्णा गवां सम्पन्नक्षीरतमा] 'the black cow gives most milk among cows' (attribute)\n- @deva[धावन्नधगानां शीघ्रतमः] 'the runner is swiftest among walkers' (action)",
            "standard": "A @deva[षष्ठी] with @deva[निर्धारण] sense ('among') does not compound. @deva[निर्धारण] means selecting one from many based on @deva[जाति] (genus), @deva[गुण] (attribute), or @deva[क्रिया] (action). This @deva[षष्ठी] is ordained by @ref[2.3.41].\n\nThis begins a series of exceptions to @deva[षष्ठी]-@deva[तत्पुरुष].\n\n**Examples:** @deva[क्षत्रियो मनुष्याणां शूरतमः], @deva[कृष्णा गवां सम्पन्नक्षीरतमा], @deva[धावन्नधगानां शीघ्रतमः].\n\n@note[type=vārtika]: A genitive ordained by any rule other than @ref[2.3.50] never compounds: @deva[सर्पिषो ज्ञानम्], @deva[मधुनो ज्ञानम्]—no compound.",
            "advanced": "@deva[षष्ठी] with @deva[निर्धारण] sense does not compound. @deva[निर्धारण] = separating one from many by @deva[जाति], @deva[गुण], or @deva[क्रिया]. This @deva[षष्ठी] arises from @ref[2.3.41].\n\nThis begins a series of @deva[प्रतिषेध]s to @ref[2.2.8].\n\n**Examples:** @deva[क्षत्रियो मनुष्याणां शूरतमः], @deva[कृष्णा गवां सम्पन्नक्षीरतमा], @deva[धावन्नधगानां शीघ्रतमः].\n\n@note[type=vārtika]: @deva[प्रतिपदविधान]-@deva[षष्ठी] (from rules other than @ref[2.3.50]) never compounds: @deva[सर्पिषो ज्ञानम्], @deva[मधुनो ज्ञानम्]."
        }
    },
    "22011": {
        "en": {
            "simple": "A word in the genitive case does not form a compound with:\n1. A word having ordinal sense (@deva[पूरणार्थ]): @deva[छात्राणां पञ्चमः] 'fifth among students'\n2. An adjective/attribute (@deva[गुणवचन]): @deva[काकस्य कार्ष्ण्यम्] 'the blackness of the crow'\n3. A word meaning 'satisfied' (@deva[तृप्त्यर्थ]): @deva[फलानां सुहितः] 'satisfied with fruits'\n4. A @deva[सत्]-participle (@ref[3.2.127]): @deva[ब्राह्मणस्य कुर्वन्] 'the @deva[ब्राह्मण]'s doing'\n5. An indeclinable: @deva[ब्राह्मणस्य कृत्वा] 'having been done by a @deva[ब्राह्मण]'\n6. A @deva[तव्य]-word: @deva[ब्राह्मणस्य कर्तव्यम्] (but @deva[तव्यत्]-affixed words compound: @deva[ब्राह्मणकर्तव्यम्])\n7. A word denoting the same referent (@deva[समानाधिकरण]): @deva[राज्ञः पाटलिपुत्रकस्य] 'of the king of @deva[पाटलिपुत्र]'",
            "standard": "A @deva[षष्ठी]-ending word does not compound with these seven categories:\n\n1. **@deva[पूरणार्थ]:** @deva[छात्राणां पञ्चमः], @deva[छात्राणां दशमः]\n2. **@deva[गुणवचन]:** @deva[काकस्य कार्ष्ण्यम्], @deva[वलाकायाः शौक्ल्यम्]\n3. **@deva[तृप्त्यर्थ]:** @deva[फलानां सुहितः], @deva[फलानां तृप्तः]\n4. **@deva[सत्]-participle:** @deva[ब्राह्मणस्य कुर्वन्], @deva[ब्राह्मणस्य कुर्वाणः]\n5. **@deva[अव्यय]:** @deva[ब्राह्मणस्य कृत्वा], @deva[ब्राह्मणस्य हुत्वा]\n6. **@deva[तव्य]:** @deva[ब्राह्मणस्य कर्तव्यम्] (but @deva[तव्यत्] with @deva[इत्]-@deva[त्] compounds: @deva[ब्राह्मणकर्तव्यम्]—see @ref[3.1.96])\n7. **@deva[समानाधिकरण]:** @deva[राज्ञः पाटलिपुत्रकस्य], @deva[पाणिनेः सूत्रकारस्य]\n\nBut words in apposition can compound by @ref[2.1.57]: @deva[सूत्रकारपाणिनिः]—there the position differs.",
            "advanced": "@deva[षष्ठी] does not compound with:\n\n1. **@deva[पूरणार्थ]:** @deva[छात्राणां पञ्चमः]\n2. **@deva[गुणवचन]:** @deva[काकस्य कार्ष्ण्यम्]\n3. **@deva[तृप्त्यर्थ]:** @deva[फलानां सुहितः]\n4. **@deva[सदन्त]:** @deva[ब्राह्मणस्य कुर्वन्]\n5. **@deva[अव्यय]:** @deva[ब्राह्मणस्य कृत्वा]\n6. **@deva[तव्य]:** @deva[ब्राह्मणस्य कर्तव्यम्] (but @deva[तव्यत्] compounds: @deva[ब्राह्मणकर्तव्यम्])\n7. **@deva[समानाधिकरण]:** @deva[राज्ञः पाटलिपुत्रकस्य]\n\nBy @ref[2.1.57], @deva[समानाधिकरण] words compound with reversed order: @deva[सूत्रकारपाणिनिः]."
        }
    },
    "22012": {
        "en": {
            "simple": "A word in the genitive case does not form a compound with a @deva[क्त]-ending word when @deva[क्त] expresses 'respect', 'understanding', or 'inclination' (@ref[3.2.188]).\n\n**Examples (no compound):**\n- @deva[राज्ञां मतः] 'the king inclines (to this)'\n- @deva[राज्ञां बुद्धः] 'the king understands'\n- @deva[राज्ञां पूजितः] 'the king respects'\n\nWhen @deva[क्त] has other meanings, compounding occurs: @deva[छात्रहसितम्] 'the student's laughing'.",
            "standard": "A @deva[षष्ठी]-ending word does not compound with @deva[क्त] when @deva[क्त] denotes @deva[मति] (inclination), @deva[बुद्धि] (understanding), or @deva[पूजा] (respect)—per @ref[3.2.188]. The word @deva[पूजा] in the @deva[सूत्र] represents all three senses.\n\n**Examples:** @deva[राज्ञां मतः], @deva[राज्ञां बुद्धः], @deva[राज्ञां पूजितः].\n\n**When @deva[क्त] has other sense:** @deva[छात्रहसितम्] 'student's laughing'—compound applies.",
            "advanced": "@deva[षष्ठी] does not compound with @deva[क्त] when @deva[क्त] has @deva[मत्यर्थ], @deva[बुद्ध्यर्थ], or @deva[पूजार्थ] (@ref[3.2.188]). The word @deva[पूजा] is illustrative (@deva[उपलक्षण]) of all three.\n\n**Examples:** @deva[राज्ञां मतः], @deva[राज्ञां बुद्धः], @deva[राज्ञां पूजितः].\n\n**Otherwise:** @deva[छात्रहसितम्]—@deva[क्त] in other sense compounds."
        }
    },
    "22013": {
        "en": {
            "simple": "A word in the genitive case does not form a compound with a @deva[क्त]-ending word when @deva[क्त] expresses 'location' (where something happened). This applies to @deva[क्त] from roots meaning 'sitting', 'motion', or 'eating' (@ref[3.4.76]).\n\n**Examples (no compound):**\n- @deva[इदमेषां यातम्] 'here they went'\n- @deva[इदमेषां भुक्तम्] 'here they ate'\n- @deva[इदमेषामासितम्] 'here they sat'",
            "standard": "A @deva[षष्ठी]-ending word does not compound with @deva[क्त] when @deva[क्त] denotes the location of an action. By @ref[3.4.76], @deva[क्त] after roots of @deva[स्थान] (fixedness), @deva[गति] (motion), or @deva[आसन] (eating) gives both agent and location sense.\n\n**Examples:** @deva[इदमेषां यातम्] 'this is where they went', @deva[इदमेषां भुक्तम्] 'this is where they ate'.",
            "advanced": "@deva[षष्ठी] does not compound with @deva[क्त] when @deva[क्त] has @deva[आधारार्थ] (locative sense). By @ref[3.4.76], @deva[क्त] after @deva[स्थानास्तिगतिभुज्]-roots gives @deva[कर्तृ] and @deva[आधार] sense.\n\n**Examples:** @deva[इदमेषां यातम्], @deva[इदमेषां भुक्तम्], @deva[इदमेषामासितम्]."
        }
    },
    "22014": {
        "en": {
            "simple": "A word in the genitive case does not form a compound when the genitive has the force of the accusative (expressing the object of a @deva[कृत्]-formed noun when both agent and object are expressed).\n\n**Examples (no compound):**\n- @deva[आश्चर्यो गवां दोहोऽगोपालकेन] 'the milking of cows without a cowherd is a wonder'\n- @deva[रोचते ओदनस्य भोजनं देवदत्तेन] 'eating rice agrees with @deva[देवदत्त]'\n- @deva[विचित्रा सूत्रस्य कृतिः पाणिनिना] 'the structure of @deva[सूत्र]s by @deva[पाणिनि] is wonderful'",
            "standard": "A @deva[षष्ठी] with @deva[कर्मार्थ] (accusative force) does not compound. By @ref[2.3.66], when both agent and object of a @deva[कृदन्त] are expressed, the object takes genitive (not the agent).\n\nThe @deva[अनुवृत्ति] of @deva[क्त] does not continue here—this applies to any @deva[कृदन्त].\n\n**Examples:** @deva[गवां दोहोऽगोपालकेन], @deva[ओदनस्य भोजनं देवदत्तेन], @deva[सूत्रस्य कृतिः पाणिनिना].",
            "advanced": "@deva[कर्मणि षष्ठी] does not compound. By @ref[2.3.66], when @deva[कर्तृ] and @deva[कर्मन्] of a @deva[कृदन्त] are both expressed, @deva[कर्मन्] takes @deva[षष्ठी].\n\nNo @deva[अनुवृत्ति] of @deva[क्त]—applies to all @deva[कृदन्त]s.\n\n**Examples:** @deva[गवां दोहोऽगोपालकेन], @deva[ओदनस्य भोजनं देवदत्तेन], @deva[पयसः पानं देवदत्तेन], @deva[सूत्रस्य कृतिः पाणिनिना]."
        }
    },
    "22015": {
        "en": {
            "simple": "A word in the genitive case (when expressing the agent) does not form a compound with words ending in @deva[तृच्] or @deva[अक] when those endings also express agency.\n\n**Examples (no compound):**\n- @deva[भवतः शायिका] 'your lying down'\n- @deva[भवतः आशिका] 'your eating'\n- @deva[भवतः अग्रगामिका] 'your going in front'\n\nThe genitive has agent-force under @ref[2.3.65].",
            "standard": "A @deva[षष्ठी] with @deva[कर्तृ]-force does not compound with @deva[तृजन्त] or @deva[अकन्त] words. The word @deva[कर्तरि] qualifies the @deva[षष्ठी].\n\nAffixes @deva[अक] include those with @deva[वु]-element: @deva[ण्वुल्], @deva[वुञ्], @deva[वुन्] (see @ref[7.1.1]).\n\n**Examples:** @deva[भवतः शायिका], @deva[भवतः आशिका], @deva[भवतः अग्रगामिका].\n\n@deva[तृच्] always denotes agent, so no example exists where @deva[षष्ठी] (agent) governs another agent-word. The @deva[तृच्] in this @deva[सूत्र] is for the following rules.\n\n**Why @deva[कर्तरि]?** When genitive is @deva[कर्मन्]: @deva[इक्षुभक्षिकां मे धारयसि]—compound possible.",
            "advanced": "@deva[कर्तरि षष्ठी] does not compound with @deva[तृजन्त]/@deva[अकन्त] words. The word @deva[कर्तरि] qualifies @deva[षष्ठी].\n\n@deva[अक] = affixes with @deva[वु]: @deva[ण्वुल्], @deva[वुञ्], @deva[वुन्] (@ref[7.1.1]).\n\n**Examples:** @deva[भवतः शायिका], @deva[भवतः आशिका], @deva[भवतः अग्रगामिका].\n\n@deva[तृच्] always = @deva[कर्तृ]—no example where both are @deva[कर्तृ]. The @deva[तृच्] serves subsequent @deva[सूत्र]s.\n\n**@deva[कर्तरि षष्ठी]:** By @ref[2.3.65]. When @deva[कर्मणि]: @deva[इक्षुभक्षिकां मे धारयसि]—compounds."
        }
    },
    "22016": {
        "en": {
            "simple": "A word in the genitive case does not form a compound with words ending in @deva[तृच्] or @deva[अक] when those affixes express the agent.\n\n**Examples (no compound):**\n- @deva[अपां स्रष्टा] 'the creator of waters'\n- @deva[पुरां भेत्ता] 'the destroyer of cities'\n- @deva[वज्रस्य भर्ता] 'the holder of the thunderbolt'\n- @deva[ओदनस्य भोजकः] 'the eater of rice'\n- @deva[सक्तूनां पायकः] 'the drinker of @deva[सक्तु]'",
            "standard": "A @deva[षष्ठी]-ending word does not compound with @deva[तृजन्त] or @deva[अकन्त] when those affixes denote @deva[कर्तृ]. The word @deva[कर्तरि] qualifies @deva[अक] only—@deva[तृच्] always denotes agent.\n\n**@deva[तृजन्त] examples:** @deva[अपां स्रष्टा], @deva[पुरां भेत्ता], @deva[वज्रस्य भर्ता].\n\n**@deva[अकन्त] examples:** @deva[ओदनस्य भोजकः], @deva[सक्तूनां पायकः].\n\n**Note on @deva[भर्तृ]:** @deva[भर्तृ] in @deva[याजकादि] (@ref[2.2.9]) means 'husband'; here it means 'holder'—so no conflict.",
            "advanced": "@deva[षष्ठी] does not compound with @deva[तृजन्त]/@deva[अकन्त] when they denote @deva[कर्तृ]. The word @deva[कर्तरि] qualifies @deva[अक]; @deva[तृच्] = @deva[कर्तृ] always.\n\n**@deva[तृच्]:** @deva[अपां स्रष्टा], @deva[पुरां भेत्ता], @deva[वज्रस्य भर्ता].\n\n**@deva[अक]:** @deva[ओदनस्य भोजकः], @deva[सक्तूनां पायकः].\n\n**@deva[भर्तृ]:** In @deva[याजकादि] = 'husband'; here = 'holder'."
        }
    },
    "22017": {
        "en": {
            "simple": "A word in the genitive case invariably (@deva[नित्य]) forms a @deva[तत्पुरुष] compound with an @deva[अक]-ending word when the @deva[अक] affix denotes sport or livelihood. Such compounds cannot be analyzed.\n\n**Examples (sport):**\n- @deva[उद्दालकपुष्पभञ्जिका] 'the @deva[उद्दालक]-flower-breaking game'\n- @deva[वारणपुष्पप्रचायिका] 'the flower-gathering game'\n\n**Examples (livelihood):**\n- @deva[दन्तलेखकः] 'tooth-painter (by profession)'\n- @deva[नखलेखकः] 'nail-painter (by profession)'",
            "standard": "A @deva[षष्ठी]-ending word obligatorily compounds with @deva[अकन्त] words when @deva[अक] denotes @deva[क्रीडा] (sport) or @deva[जीविका] (livelihood). This is @deva[नित्यसमास]—incapable of dissolution.\n\nThe @deva[अनुवृत्ति] of @deva[न] (prohibition) ends here.\n\n@deva[तृच्] never has @deva[क्रीडा]/@deva[जीविका] sense—only @deva[अक] examples exist.\n\n**@deva[क्रीडा]:** @deva[उद्दालकपुष्पभञ्जिका] (eastern districts' game), @deva[वारणपुष्पप्रचायिका].\n\n**@deva[जीविका]:** @deva[दन्तलेखकः], @deva[नखलेखकः].\n\n**Why @deva[क्रीडा]/@deva[जीविका]?** Otherwise @deva[ओदनस्य भोजकः]—no compound.",
            "advanced": "@deva[षष्ठी] obligatorily compounds with @deva[अकन्त] in @deva[क्रीडार्थ] or @deva[जीविकार्थ]. This is @deva[नित्यसमास].\n\nThe @deva[प्रतिषेध] (@deva[न]) from @ref[2.2.10] ends.\n\n**@deva[क्रीडा]:** @deva[उद्दालकपुष्पभञ्जिका], @deva[वारणपुष्पप्रचायिका].\n\n**@deva[जीविका]:** @deva[दन्तलेखकः], @deva[नखलेखकः].\n\n**Counter-example:** @deva[ओदनस्य भोजकः]—neither @deva[क्रीडा] nor @deva[जीविका]."
        }
    },
    "22018": {
        "en": {
            "simple": "The indeclinable @deva[कु] 'bad', particles called @deva[गति] (@ref[1.4.60]), and the prefixes @deva[प्रादि] invariably form a @deva[तत्पुरुष] compound with words they govern.\n\n**Examples:**\n- @deva[कु]: @deva[कुपुरुषः] 'bad man'\n- @deva[गति]: @deva[उररीकृतम्] 'asserted'\n- @deva[प्रादि] as particles (not @deva[उपसर्ग]): @deva[दुष्पुरुषः] 'bad man', @deva[सुपुरुषः] 'good man', @deva[अतिपुरुषः] 'excellent man', @deva[आपिङ्गलः] 'brownish'",
            "standard": "The @deva[अव्यय] @deva[कु] 'bad', @deva[गति] words (@ref[1.4.60]), and @deva[प्रादि] (when mere particles, not @deva[उपसर्ग]) obligatorily compound. This is @deva[नित्यसमास].\n\n**@deva[कु]:** @deva[कुपुरुषः] 'sinful man'.\n\n**@deva[गति]:** @deva[उररीकृतम्] (@ref[1.4.61]).\n\n**@deva[प्रादि] as particles:** @deva[दुर्] = 'bad': @deva[दुष्पुरुषः]; @deva[सु]/@deva[अति] = 'respect': @deva[सुपुरुषः], @deva[अतिपुरुषः]; @deva[आ] = 'slightly': @deva[आपिङ्गलः].\n\nThese are typically attributive but found elsewhere: @deva[कदुष्णम्]/@deva[कवोष्णम्] 'tepid', @deva[दुष्कृतम्], @deva[अतिस्तुतम्], @deva[आबद्धम्].",
            "advanced": "@deva[कु], @deva[गति], and @deva[प्रादि] (as @deva[निपात], not @deva[उपसर्ग]) obligatorily compound. @deva[नित्यसमास].\n\n**@deva[कु]:** @deva[कुपुरुषः].\n\n**@deva[गति]:** @deva[उररीकृतम्] (@ref[1.4.60]-@ref[1.4.61]).\n\n**@deva[प्रादि] as @deva[निपात]:** @deva[दुष्पुरुषः], @deva[सुपुरुषः], @deva[अतिपुरुषः], @deva[आपिङ्गलः].\n\nGenerally @deva[विशेषण], but also: @deva[कदुष्णम्], @deva[दुष्कृतम्], @deva[अतिस्तुतम्], @deva[आबद्धम्]."
        }
    },
    "22019": {
        "en": {
            "simple": "An @deva[उपपद] (attendant word—see @ref[3.1.92]) that does not end in a @deva[तिङ्] (tense-affix) invariably forms a @deva[तत्पुरुष] compound with the @deva[कृत्] word it governs.\n\n**Examples:**\n- @deva[कुम्भकारः] 'pot-maker'\n- @deva[नगरकारः] 'city-maker'\n\n**Not with @deva[तिङ्]:** @deva[एधानाहारको व्रजति] 'he goes to bring fuel'—no compound.",
            "standard": "An @deva[उपपद] not ending in @deva[तिङ्] (@ref[3.4.78]) obligatorily compounds with its @deva[कृत्] word. This is @deva[नित्यसमास].\n\n**Examples:** @deva[कुम्भकारः], @deva[नगरकारः].\n\n**Why not @deva[तिङन्त]?** @deva[एधानाहारको व्रजति]—no compound.\n\nThe words @deva[सुप् सुपा] should not be read into this @deva[सूत्र]; otherwise @deva[तिङ्] would have no scope.\n\n**@deva[परिभाषा]:** @deva[गति], @deva[कारक], and @deva[उपपद] compound with @deva[कृदन्त]s before @deva[सुप्]-affixation (@deva[प्राक् सुबुत्पत्तेः]). Thus @deva[उपपद]s and @deva[गति]s are not compounded by @ref[2.2.18]-@ref[2.2.19] with @deva[सुबन्त] nouns, but with primary nouns before case-endings.",
            "advanced": "@deva[अतिङन्त] @deva[उपपद] obligatorily compounds with its @deva[कृदन्त]. @deva[नित्यसमास].\n\n**Examples:** @deva[कुम्भकारः], @deva[नगरकारः].\n\n**Why @deva[अतिङन्त]?** @deva[एधानाहारको व्रजति]—no compound.\n\nThe @deva[अनुवृत्ति] of @deva[सुप् सुपा] should not extend here—else @deva[तिङ्] has no scope.\n\n**@deva[परिभाषा]:** @deva[गतिकारकोपपदानां कृद्भिः सह समासवचनं प्राक् सुबुत्पत्तेः]—@deva[गति], @deva[कारक], @deva[उपपद] compound with @deva[कृत्]-bases before @deva[सुप्]/@deva[ङीप्] is added. Thus @deva[अश्वक्रीती] (f.) 'bought for a horse'."
        }
    },
    "22020": {
        "en": {
            "simple": "An @deva[उपपद] compounds with an @deva[अव्यय] (indeclinable) only when the @deva[अव्यय] ends in the affix @deva[अम्] (such as @deva[ण्मुल्]—@ref[3.4.26]).\n\n**Examples:**\n- @deva[स्वादुकारं भुङ्क्ते] 'he eats having made it sweet'\n- @deva[लवणकारम्] 'having seasoned'\n\n**Not with other @deva[अव्यय]s:** @deva[कालो भोक्तुम्] 'time to eat'—the @deva[अव्यय] ends in @deva[उम्] (@deva[तुमुन्]), not @deva[अम्].",
            "standard": "@deva[उपपद] compounds with @deva[अव्यय]s only when they end in @deva[अम्] (@deva[ण्मुल्] etc.). This restricts @ref[2.2.19].\n\n**Examples:** @deva[स्वादुकारम्], @deva[लवणकारम्].\n\n**Not @deva[तुमुन्]:** @deva[कालो भोक्तुम्]—@deva[तुमुन्] ends in @deva[उम्], not @deva[अम्].\n\n**Why 'only'?** This composition occurs only when @deva[अम्] is the sole affix ordained for that @deva[उपपद]-@deva[धातु] combination. When @deva[अम्] is co-ordained with @deva[क्त्वा] (@ref[3.4.24]), no compound: @deva[अग्रेभोजम्] 'having first eaten'—no compound.",
            "advanced": "@deva[उपपद] compounds with @deva[अमन्त]-@deva[अव्यय]s only. Restricts @ref[2.2.19].\n\n**Examples:** @deva[स्वादुकारम्], @deva[लवणकारम्].\n\n**@deva[तुमुन्] excluded:** @deva[कालो भोक्तुम्]—@deva[तुमुन्] = @deva[उम्], not @deva[अम्].\n\n**@deva[एवकार]:** Compounding requires @deva[अम्] to be the sole affix ordained (@deva[तुल्यविधान]). Where @deva[क्त्वा] is co-ordained (@ref[3.4.24]): @deva[अग्रेभोजम्]—no compound."
        }
    },
    "22021": {
        "en": {
            "simple": "An @deva[उपपद] ending in the third case-affix (etc., per @ref[3.4.47] and following) optionally compounds with an @deva[अम्]-ending @deva[अव्यय].\n\n**Examples:**\n- @deva[मूलकोपदंशम्] or @deva[मूलकेनोपदंशं भुङ्क्ते] 'he eats having relished with radish'\n- @deva[पार्श्वोपपीडम्] or @deva[पार्श्वयोरुपपीडं शेते] 'he sleeps pressing his ribs' (@ref[3.4.49])",
            "standard": "An @deva[उपपद] with @deva[तृतीया] etc. (@ref[3.4.47] onwards) optionally compounds with @deva[अमन्त]-@deva[अव्यय]s.\n\nThe term @deva[अम्] is understood. This @deva[विभाषा] applies even when @deva[अम्] is not the sole affix ordained (@deva[अप्राप्तविभाषा])—unlike @ref[2.2.20].\n\n**Examples:** @deva[मूलकोपदंशम्] ~ @deva[मूलकेनोपदंशम्]; @deva[पार्श्वोपपीडम्] ~ @deva[पार्श्वयोरुपपीडम्].",
            "advanced": "@deva[तृतीयादि]-@deva[उपपद] optionally compounds with @deva[अमन्त]-@deva[अव्यय]. @deva[अम्] understood.\n\nThis @deva[विभाषा] is both @deva[प्राप्त] (where @deva[अम्] is sole affix) and @deva[अप्राप्त] (where @deva[क्त्वा] is co-ordained)—unlike @ref[2.2.20].\n\n**Examples:** @deva[मूलकोपदंशम्] ~ @deva[मूलकेनोपदंशम्]; @deva[पार्श्वोपपीडम्] ~ @deva[पार्श्वयोरुपपीडम्]."
        }
    },
    "22022": {
        "en": {
            "simple": "An @deva[उपपद] ending in the third case-affix (or remaining cases) optionally compounds with a word ending in the affix @deva[क्त्वा]. When compounded, @deva[क्त्वा] is replaced by @deva[ल्यप्] (@ref[7.1.37]).\n\n**Examples:**\n- @deva[उच्चैःकृत्य] or @deva[उच्चैः कृत्वा] 'having made loud'\n\nThe @deva[उपपद] must be in 3rd case etc.—so no compound in @deva[अलं कृत्वा] or @deva[खलु कृत्वा].",
            "standard": "@deva[तृतीयादि]-@deva[उपपद] optionally compounds with @deva[क्त्वान्त] words. This handles @deva[क्त्वा]-ending @deva[अव्यय]s not covered by @ref[2.2.20]-@ref[2.2.21].\n\nWhen compounded, @deva[क्त्वा] → @deva[ल्यप्] (@ref[7.1.37]); otherwise not.\n\n**Example:** @deva[उच्चैःकृत्य] ~ @deva[उच्चैः कृत्वा].\n\n**Why @deva[तृतीयादि]?** @deva[अलं कृत्वा], @deva[खलु कृत्वा]—no compound.",
            "advanced": "@deva[तृतीयादि]-@deva[उपपद] optionally compounds with @deva[क्त्वान्त]. When compounded, @deva[क्त्वा] → @deva[ल्यप्] (@ref[7.1.37]).\n\n**Example:** @deva[उच्चैःकृत्य] ~ @deva[उच्चैः कृत्वा].\n\n**@deva[तृतीयादि] required:** @deva[अलं कृत्वा], @deva[खलु कृत्वा]—no compound."
        }
    },
    "22023": {
        "en": {
            "simple": "The remaining compound (one not covered by previous rules) is called @deva[बहुव्रीहि]. A @deva[बहुव्रीहि] compound denotes something beyond what its individual members denote.\n\n**Example:** @deva[चित्रगुः] 'one who has a spotted cow' (@deva[चित्रा गौः यस्य सः])",
            "standard": "Any compound not falling under the preceding rules is @deva[बहुव्रीहि]. This is an @deva[अधिकार] extending through @ref[2.2.28].\n\n**Example:** @deva[चित्रगुः] 'possessing a spotted cow'.",
            "advanced": "@deva[शेष] compound = @deva[बहुव्रीहि]. This @deva[अधिकार] extends to @ref[2.2.28].\n\n**Example:** @deva[चित्रगुः]."
        }
    },
    "22024": {
        "en": {
            "simple": "Two or more words ending in case-affixes form a @deva[बहुव्रीहि] compound when together they denote something new—not denoted by the individual words. The compound takes the meaning of all case-affixes except the first.\n\n**Examples:**\n- @deva[प्राप्तोदको ग्रामः] 'a village that has received water' (@deva[प्राप्तमुदकं यं ग्रामम्])\n- @deva[ऊढरथोऽनड्वान्] 'a bull by whom a cart is drawn'\n- @deva[उपहृतपशूरुद्रः] '@deva[रुद्र] to whom cattle is offered'\n- @deva[उद्धृतौदना स्थाली] 'a pot in which rice is placed'\n- @deva[चित्रगुर्देवदत्तः] '@deva[देवदत्त] who has a spotted cow'\n- @deva[वीरपुरुषको ग्रामः] 'a village possessing heroic men'",
            "standard": "Two or more @deva[सुबन्त] words form @deva[बहुव्रीहि] when denoting @deva[अन्यपदार्थ] (something other than what the members individually mean). The compound acquires the sense of non-first @deva[विभक्ति]s.\n\n**Examples:** @deva[प्राप्तोदको ग्रामः], @deva[ऊढरथोऽनड्वान्], @deva[उपहृतपशूरुद्रः], @deva[उद्धृतौदना स्थाली], @deva[चित्रगुर्देवदत्तः], @deva[वीरपुरुषको ग्रामः].\n\n**Not @deva[प्रथमार्थ]:** @deva[वृष्टे देवे गतः] 'gone when it had rained'—no @deva[बहुव्रीहि] with @deva[प्रथमा] sense.\n\n**Why @deva[बहूनि]?** Many words may compound:\n\n@deva[सुसूक्ष्मजटकेशेन सुभाजिनवाससा] | @deva[पुत्री पर्वतराजस्य कुतो हेतोर्विवाहिता] ||",
            "advanced": "@deva[बहूनि सुबन्तानि] form @deva[बहुव्रीहि] when denoting @deva[अन्यपदार्थ]. The compound acquires @deva[अप्रथमार्थ]-@deva[विभक्ति] senses.\n\n**Examples:** @deva[प्राप्तोदको ग्रामः], @deva[ऊढरथोऽनड्वान्], @deva[उपहृतपशूरुद्रः], @deva[उद्धृतौदना स्थाली], @deva[चित्रगुः], @deva[वीरपुरुषको ग्रामः].\n\n**@deva[प्रथमार्थ] excluded:** @deva[वृष्टे देवे गतः]—no @deva[बहुव्रीहि].\n\n**@deva[बहूनि]:** @deva[सुसूक्ष्मजटकेशेन सुभाजिनवाससा पुत्री पर्वतराजस्य...]—multi-member @deva[बहुव्रीहि]."
        }
    },
    "22025": {
        "en": {
            "simple": "Indeclinables, @deva[आसन्न] 'near', @deva[अदूर] 'near', @deva[अधिक] 'more', and @deva[संख्या] (numeral) words form a @deva[बहुव्रीहि] compound with another @deva[संख्या] word when the meaning is numerical.\n\n**Examples:**\n- @deva[उपदशाः] 'about ten' (nine or eleven)—see @ref[5.4.73]\n- @deva[उपविंशः] 'about twenty' (nineteen or twenty-one)—see @ref[6.4.142]\n- @deva[आसन्नदशाः] 'near ten'\n- @deva[अधिकदशाः] 'more than ten' (eleven)\n- @deva[द्वित्राः] 'two or three'\n- @deva[द्विदशाः] 'twenty'",
            "standard": "@deva[अव्यय], @deva[आसन्न], @deva[अदूर], @deva[अधिक], and @deva[संख्या] words compound with @deva[संख्या] when the sense is numerical. This is @deva[बहुव्रीहि].\n\n**Examples:** @deva[उपदशाः] (@ref[5.4.73]), @deva[उपविंशः] (@ref[6.4.142]), @deva[आसन्नदशाः], @deva[अदूरदशाः], @deva[अधिकदशाः], @deva[द्वित्राः], @deva[द्विदशाः].\n\n**Why 'with @deva[संख्या]'?** @deva[पञ्च ब्राह्मणाः] 'five @deva[ब्राह्मण]s'—no compound; @deva[ब्राह्मण] ≠ @deva[संख्या].\n\n**Why '@deva[अव्यय] etc.'?** @deva[ब्राह्मणाः पञ्च]—no compound.\n\n**Why 'numerical sense'?** @deva[अधिका विंशतिर्गवाम्] 'more than twenty of cows'—not numerical sense, no compound.",
            "advanced": "@deva[अव्यय], @deva[आसन्न], @deva[अदूर], @deva[अधिक], @deva[संख्या] compound with @deva[संख्या] when @deva[संख्यार्थ]. @deva[बहुव्रीहि].\n\n**Examples:** @deva[उपदशाः], @deva[उपविंशः], @deva[आसन्नदशाः], @deva[अधिकदशाः], @deva[द्वित्राः], @deva[द्विदशाः].\n\n**Restrictions:**\n- @deva[संख्यया]: @deva[पञ्च ब्राह्मणाः]—no compound\n- @deva[अव्ययादि]: @deva[ब्राह्मणाः पञ्च]—no compound\n- @deva[संख्यार्थ]: @deva[अधिका विंशतिर्गवाम्]—no compound"
        }
    },
    "22026": {
        "en": {
            "simple": "Words that are names of cardinal directions form a @deva[बहुव्रीहि] compound when the compound signifies an intermediate direction.\n\n**Examples:**\n- @deva[दक्षिणपूर्वा] 'south-east' (midway between south and east)\n- @deva[पूर्वोत्तरा] 'north-east'\n\nDerivative direction-words do not compound: @deva[ऐन्द्र्याश्च कौबेर्याश्च दिशोर्यदन्तरालम्] 'the point between east and north'—@deva[ऐन्द्री] 'east' and @deva[कौबेरी] 'north' are derivatives, so no compound.",
            "standard": "Direction-names (@deva[दिङ्नामानि]) compound when signifying @deva[अन्तराल] (intermediate point). @deva[बहुव्रीहि].\n\n**Examples:** @deva[दक्षिणपूर्वा] (@deva[दक्षिणपूर्वा दिक्]), @deva[पूर्वोत्तरा].\n\n**Why @deva[नाम]?** Derivative words (@deva[ऐन्द्री], @deva[कौबेरी]) whose primary sense is not direction do not compound: @deva[ऐन्द्र्याश्च कौबेर्याश्च दिशोर्यदन्तरालम्].",
            "advanced": "@deva[दिङ्नामानि] compound when @deva[अन्तरालार्थ]. @deva[बहुव्रीहि].\n\n**Examples:** @deva[दक्षिणपूर्वा], @deva[पूर्वोत्तरा].\n\n**@deva[नाम] restriction:** Derivatives not @deva[दिक्] as primary sense don't compound: @deva[ऐन्द्र्याश्च कौबेर्याश्च दिशोर्यदन्तरालम्]."
        }
    },
    "22027": {
        "en": {
            "simple": "Two identical words, both in the locative or both in the instrumental case, form a @deva[बहुव्रीहि] compound when the meaning is 'this happens with that' (mutual fighting or grasping). A final @deva[इ] is added.\n\n**Examples:**\n- @deva[केशाकेशि] 'hair-to-hair fight' (grasping each other's hair)\n- @deva[दण्डादण्डि] 'stick-fight' (fighting with sticks)\n- @deva[मुष्टामुष्टि] 'fist-fight'\n- @deva[कपालकपालि] 'skull-to-skull'",
            "standard": "Two @deva[सामान] (homonymous) words, both @deva[सप्तमी] or both @deva[तृतीया], compound when the sense is '@deva[तत्र भवं तेन वा]' (fighting/grasping therewith). Final @deva[इ] is added.\n\n**Examples:** @deva[केशाकेशि], @deva[दण्डादण्डि], @deva[मुष्टामुष्टि], @deva[कपालकपालि].",
            "advanced": "@deva[सामान] words in @deva[सप्तमी] or @deva[तृतीया] compound with @deva[तत्र भवं तेन वा] sense. @deva[बहुव्रीहि]. Final @deva[इ] added.\n\n**Examples:** @deva[केशाकेशि], @deva[दण्डादण्डि], @deva[मुष्टामुष्टि], @deva[कपालकपालि]."
        }
    },
    "22028": {
        "en": {
            "simple": "The word @deva[सह] 'together' forms a @deva[बहुव्रीहि] compound with a word in the instrumental case, when the companion and the accompanied are equally affected by the action. The @deva[सह] becomes @deva[स] in the compound.\n\n**Examples:**\n- @deva[सपुत्रः] 'accompanied by son' (@deva[पुत्रेण सह वर्तते])\n- @deva[सभार्यः] 'with wife'",
            "standard": "@deva[सह] compounds with @deva[तृतीया]-ending words when the companion and accompanied share equally in the action (@deva[तुल्यक्रियता]). @deva[सह] → @deva[स].\n\n**Examples:** @deva[सपुत्रः], @deva[सभार्यः].\n\n**Why @deva[तुल्यक्रिय]?** @deva[मातृभ्यां सह भुङ्क्ते]—unequal participation (mother serves), no compound.",
            "advanced": "@deva[सह] compounds with @deva[तृतीयान्त] when @deva[तुल्यक्रियता] (equal participation). @deva[सह] → @deva[स]. @deva[बहुव्रीहि].\n\n**Examples:** @deva[सपुत्रः], @deva[सभार्यः].\n\n**Why @deva[तुल्यक्रिय]?** @deva[मातृभ्यां सह भुङ्क्ते]—no compound; unequal participation."
        }
    },
    "22029": {
        "en": {
            "simple": "Words in a relation expressible by 'and' (@deva[च]) form a compound called @deva[द्वन्द्व]. The compound expresses either mutual conjunction or an aggregate.\n\n**Example:** @deva[राम] and @deva[लक्ष्मण] → @deva[रामलक्ष्मणौ]",
            "standard": "Several @deva[सुबन्त] words in @deva[च]-relation (conjunctive) form @deva[द्वन्द्व]. The meanings are @deva[इतरेतरयोग] (mutual conjunction) or @deva[समाहार] (aggregate).",
            "advanced": "@deva[चार्थ]-related @deva[सुबन्त]s form @deva[द्वन्द्व]. Meanings: @deva[इतरेतरयोग] or @deva[समाहार]."
        }
    },
    "22030": {
        "en": {
            "simple": "The @deva[उपसर्जन] (subordinate member, per @ref[1.2.43]) is placed first in a compound.\n\n**Example:** @deva[राजपुरुषः] 'king's man' (not *@deva[पुरुषराजः])\n\nThe @deva[उपसर्जन] is the word shown in the nominative case in compounding rules—it is subordinate to the principal member.",
            "standard": "The @deva[उपसर्जन] (@ref[1.2.43])—the word exhibited in nominative in the compounding rules—is placed first (@deva[पूर्वनिपात]).\n\n**Example:** @deva[राजपुरुषः].\n\n@deva[समासे] is understood.",
            "advanced": "@deva[उपसर्जन] (@ref[1.2.43]) is placed first (@deva[पूर्वनिपात]). @deva[समासे] understood.\n\n**Example:** @deva[राजपुरुषः]."
        }
    },
    "22031": {
        "en": {
            "simple": "In @deva[राजदन्त] and similar words (@deva[राजदन्तादि] list), the @deva[उपसर्जन] is placed last.\n\n**Example:** @deva[राजदन्तः] 'chief of teeth' (eyetooth)—from @deva[दन्तानां राजा], the @deva[उपसर्जन] @deva[राजन्] is placed last (not *@deva[दन्तराजः]).\n\nIt is not just the @deva[उपसर्जन] but the entire original compound structure that is reversed.",
            "standard": "In @deva[राजदन्तादि] words, the @deva[उपसर्जन] is placed last. Exception to @ref[2.2.30].\n\n**Example:** @deva[राजदन्तः] (@deva[दन्तानां राजा]).\n\nNot merely @deva[उपसर्जन] but the whole @deva[समास] is reversed: if the natural compound were @deva[दन्तराजः], that becomes @deva[राजदन्तः].\n\n**@deva[राजदन्तादि] list:** @deva[राजदन्त], @deva[राजसखि], @deva[राजश्यालक], @deva[राजभोग्य], @deva[राजभृत्य], etc.",
            "advanced": "@deva[राजदन्तादि]: @deva[उपसर्जन] placed last. Exception to @ref[2.2.30].\n\n**Example:** @deva[राजदन्तः] (@deva[दन्तानां राजा]).\n\nNot just @deva[उपसर्जन] but entire @deva[समास] reversed: natural *@deva[दन्तराजः] → @deva[राजदन्तः].\n\n**List:** @deva[राजदन्त], @deva[राजसखि], @deva[राजश्यालक], @deva[राजभोग्य], @deva[राजभृत्य], @deva[राजाश्रय], @deva[राजर्षि], @deva[देवर्���ि], @deva[ब्रह्मर्षि], etc."
        }
    },
    "22032": {
        "en": {
            "simple": "In a @deva[द्वन्द्व] compound, a @deva[घि]-ending word (@ref[1.4.7]—ending in short @deva[इ] or @deva[उ]) is placed first.\n\n**Examples:**\n- @deva[हरिहरौ] '@deva[हरि] and @deva[हर]'\n- @deva[पटुगुप्तौ]\n- @deva[मृदुगुप्तौ]",
            "standard": "In @deva[द्वन्द्व], a @deva[घि]-word (@ref[1.4.7]) is placed first.\n\n**Examples:** @deva[हरिहरौ], @deva[पटुगुप्तौ], @deva[मृदुगुप्तौ].\n\nWhen multiple @deva[घि]-words: @deva[मृदुपटुगुप्ताः]—place the longer-voweled first, then @deva[गुप्त] (non-@deva[घि]) last.",
            "advanced": "In @deva[द्वन्द्व], @deva[घि] (@ref[1.4.7]) is placed first.\n\n**Examples:** @deva[हरिहरौ], @deva[पटुगुप्तौ], @deva[मृदुगुप्तौ].\n\nMultiple @deva[घि]: @deva[मृदुपटुगुप्ताः]."
        }
    },
    "22033": {
        "en": {
            "simple": "In a @deva[द्वन्द्व] compound, a word that begins with a vowel and ends in short @deva[अ] is placed first.\n\n**Examples:**\n- @deva[उष्ट्रखरम्] 'camel and donkey'\n- @deva[उष्ट्रशशकम्] 'camel and hare'",
            "standard": "In @deva[द्वन्द्व], a word beginning with a vowel and ending in short @deva[अ] (@deva[अजाद्यतन्त]) is placed first.\n\n**Examples:** @deva[उष्ट्रखरम्], @deva[उष्ट्रशशकम्].",
            "advanced": "In @deva[द्वन्द्व], @deva[अजाद्यतन्त] (vowel-initial, short-@deva[अ]-final) is placed first.\n\n**Examples:** @deva[उष्ट्रखरम्], @deva[उष्ट्रशशकम्]."
        }
    },
    "22034": {
        "en": {
            "simple": "In a @deva[द्वन्द्व] compound, the word with fewer vowels is placed first.\n\n**Examples:**\n- @deva[प्लक्षन्यग्रोधौ] (@deva[प्लक्ष] has 2 vowels, @deva[न्यग्रोध] has 3)\n- @deva[धवखदिरपलाशाः]",
            "standard": "In @deva[द्वन्द्व], the word with fewer vowels (@deva[अल्पाच्]) is placed first.\n\n**Examples:** @deva[प्लक्षन्यग्रोधौ] (2 vs 3), @deva[धवखदिरपलाशाः].\n\nWith many words, the least-voweled first, then increasing.",
            "advanced": "In @deva[द्वन्द्व], @deva[अल्पाच्] (fewer vowels) is placed first.\n\n**Examples:** @deva[प्लक्षन्यग्रोधौ], @deva[धवखदिरपलाशाः]."
        }
    },
    "22035": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, a word in the locative case (@deva[सप्तमी]) and an adjective (@deva[विशेषण]) are placed first.\n\n**Examples:**\n- @deva[कण्ठेकालः] 'one who is black in the throat' (locative first)\n- @deva[चित्रगुः] 'one having a spotted cow' (adjective first)",
            "standard": "In @deva[बहुव्रीहि], @deva[सप्तम्यन्त] and @deva[विशेषण] are placed first. Since all @deva[बहुव्रीहि] members are @deva[उपसर्जन], @ref[2.2.30] doesn't determine order—this rule does.\n\n**Examples:** @deva[कण्ठेकालः] (@deva[सप्तमी] + @deva[विशेषण]), @deva[चित्रगुः] (@deva[विशेषण] + @deva[विशेष्य]).",
            "advanced": "In @deva[बहुव्रीहि], @deva[सप्तम्यन्त] and @deva[विशेषण] are placed first. All @deva[बहुव्रीहि] members are @deva[उपसर्जन], so @ref[2.2.30] doesn't apply.\n\n**Examples:** @deva[कण्ठेकालः], @deva[चित्रगुः]."
        }
    },
    "22036": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, a word ending in @deva[निष्ठा] (@deva[क्त] or @deva[क्तवतु]—@ref[1.1.26]) is placed first.\n\n**Examples:**\n- @deva[युक्तयोगः] 'one devoted to devotion'\n- @deva[कृतकठः] 'one who has made a mat'\n- @deva[भिन्नघटः] 'one whose pot is broken'",
            "standard": "@deva[निष्ठान्त] (@deva[क्त]/@deva[क्तवतु]) is placed first in @deva[बहुव्रीहि].\n\n**Examples:** @deva[युक्तयोगः], @deva[कृतकठः], @deva[भिन्नघटः].",
            "advanced": "@deva[निष्ठान्त] (@ref[1.1.26]) is placed first in @deva[बहुव्रीहि].\n\n**Examples:** @deva[युक्तयोगः], @deva[कृतकठः], @deva[भिन्नघटः]."
        }
    },
    "22037": {
        "en": {
            "simple": "In @deva[आहिताग्नि] and similar words (@deva[आहिताग्न्यादि] list), the @deva[निष्ठा]-ending word may optionally be placed first.\n\n**Examples:**\n- @deva[आहिताग्निः] or @deva[अग्न्याहितः] 'one who has consecrated fire'",
            "standard": "In @deva[आहिताग्न्यादि], the @deva[निष्ठान्त] may optionally be first—exception to @ref[2.2.36].\n\n**Option:** @deva[आहिताग्निः] ~ @deva[अग्न्याहितः].\n\n**@deva[आहिताग्न्यादि] list:** @deva[आहिताग्नि], @deva[चित्तापहृत], @deva[मनोनीत], @deva[उत्तरलोमन्], @deva[आहृतार्थ], @deva[आवृतेन्द्रिय], etc.",
            "advanced": "@deva[आहिताग्न्यादि]: @deva[निष्ठान्त] optionally first. @deva[विभाषा] to @ref[2.2.36].\n\n**Option:** @deva[आहिताग्निः] ~ @deva[अग्न्याहितः].\n\n**List:** @deva[आहिताग्नि], @deva[चित्तापहृत], @deva[मनोनीत], @deva[उत्तरलोमन्], @deva[आहृतार्थ], @deva[आवृतेन्द्रिय], @deva[कृतबुद्धि], @deva[कृतात्मन्], @deva[कृतमति], @deva[कृतप्रज्ञ], @deva[दत्तापराध], @deva[धृतराष्ट्र], @deva[जातवेदस्], etc."
        }
    },
    "22038": {
        "en": {
            "simple": "In @deva[कर्मधारय] compounds, words in the @deva[कडार] list may optionally be placed first.\n\n**Example:** @deva[कडारजैमिनिः] or @deva[जैमिनिकडारः] 'the tawny @deva[जैमिनि]'\n\nThis @deva[सूत्र] ends the scope of @ref[1.4.1] and @ref[2.1.3].",
            "standard": "@deva[कडारादि] words are optionally placed first in @deva[कर्मधारय].\n\n**Option:** @deva[कडारजैमिनिः] ~ @deva[जैमिनिकडारः].\n\n**@deva[कडारादि] list:** @deva[कडार], @deva[पिङ्गल], @deva[कपिल], @deva[श्याम], @deva[कृष्ण], @deva[पाण्डु], etc.\n\nThis ends the @deva[अधिकार] of @ref[1.4.1] (@deva[आ कडारात् एका संज्ञा]) and @ref[2.1.3] (@deva[समर्थ]).",
            "advanced": "@deva[कडारादि] optionally first in @deva[कर्मधारय].\n\n**Option:** @deva[कडारजैमिनिः] ~ @deva[जैमिनिकडारः].\n\n**List:** @deva[कडार], @deva[पिङ्गल], @deva[कपिल], @deva[श्याम], @deva[कृष्ण], @deva[पाण्डु], @deva[रोहित], @deva[नील], @deva[हरित], @deva[हारिद्र], @deva[पिशङ्ग], etc.\n\nEnds @deva[अधिकार] of @ref[1.4.1] and @ref[2.1.3]."
        }
    }
}

# Update the data
for key, value in rewrites.items():
    data[key] = value

# Write back
with open('static/data/layered_commentary.json', 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("2.2 pāda rewritten: 38 sūtras updated")
