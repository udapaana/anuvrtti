#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sutras 4.3.1-4.3.15 (Batch 1 of 4.3)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "43001": {
        "en": {
            "simple": "The affix @deva[खञ्] optionally comes after the pronouns @deva[युष्मद्] (you) and @deva[अस्मद्] (I/we) in the remaining senses. The word @deva[च] (and) indicates @deva[छ] may also be used, and the general affix @deva[अण्] applies too. Since there are three affixes but only two words, mutual correspondence (@deva[यथासंख्य]) does not apply.\n\nThese pronouns are @deva[वृद्ध] (words with initial @deva[वृद्धि] vowel) since they belong to the @deva[त्यदादि] class. Before @deva[अण्] and @deva[खञ्], special substitutes apply: @deva[युष्माक] replaces @deva[युष्मद्], and @deva[अस्माक] replaces @deva[अस्मद्].\n\nExamples: @deva[यौष्माकः] (yours, with @deva[अण्]), @deva[युष्मदीयः] (yours, with @deva[छ]), @deva[यौष्माकीणः] (yours, with @deva[खञ्]). Similarly: @deva[आस्माकः], @deva[अस्मदीयः], @deva[आस्माकीनः] (ours).",
            "standard": "The affix @deva[खञ्] optionally applies after @deva[युष्मद्] and @deva[अस्मद्] in @deva[शेष] (remaining) senses. The particle @deva[च] draws in @deva[छ], and the general @deva[अण्] also applies. With three affixes for two words, @deva[यथासंख्य] (@ref[1.3.10]) does not operate.\n\nThese pronouns are @deva[वृद्ध] by @ref[1.1.74] (@deva[त्यदादि] class) and would normally take @deva[छ] by @ref[4.2.114]. This rule adds @deva[खञ्] and @deva[अण्] as alternatives.\n\nWith @deva[अण्]: @deva[युष्मद्] → @deva[युष्माक] (@ref[4.3.2]) → @deva[यौष्माकः]. With @deva[छ]: @deva[युष्मदीयः] (@ref[7.1.2]). With @deva[खञ्]: @deva[यौष्माकीणः] (@ref[7.1.2], @ref[8.4.2]). Similarly @deva[आस्माकः], @deva[अस्मदीयः], @deva[आस्माकीनः].",
            "advanced": "This @deva[विधिसूत्र] terminates the scope of @deva[देशे] from @ref[4.2.52]. The particle @deva[च] includes @deva[छ] by @deva[अनुवृत्ति]; @deva[वा] makes both @deva[खञ्] and @deva[छ] optional alongside the general @deva[अण्].\n\n@deva[युष्मद्] and @deva[अस्मद्] are @deva[वृद्ध] via @ref[1.1.74] (@deva[त्यदादि]); @ref[4.2.114] would otherwise mandate @deva[छ]. Since three affixes apply to two bases, @deva[यथासंख्य] (@ref[1.3.10]) is inapplicable.\n\nDerivations: @deva[युष्मद्] + @deva[अण्] → @deva[युष्माक] (@ref[4.3.2]) + @deva[अण्] → @deva[यौष्माकः]. @deva[युष्मद्] + @deva[छ] → @deva[युष्मदीयः] (@ref[7.1.2]). @deva[युष्मद्] + @deva[खञ्] → @deva[युष्माक] + @deva[ईन] → @deva[यौष्माकीणः] (@ref[7.1.2], @ref[8.4.2]). Parallel forms: @deva[आस्माकः], @deva[अस्मदीयः], @deva[आस्माकीनः]."
        }
    },
    "43002": {
        "en": {
            "simple": "When the affixes @deva[खञ्] or @deva[अण्] are added, the pronouns @deva[युष्मद्] (you) and @deva[अस्मद्] (I/we) are replaced by special forms: @deva[युष्माक] and @deva[अस्माक] respectively.\n\nThe pronoun @deva[तस्मिन्] (in that) in the sūtra refers to the visible affix @deva[खञ्], not to @deva[छ] which was understood from the previous rule.\n\nExamples with @deva[खञ्]: @deva[यौष्माकीणः] (yours), @deva[आस्माकीनः] (ours). With @deva[अण्]: @deva[यौष्माकः], @deva[आस्माकः]. But with @deva[छ], no substitution occurs: @deva[युष्मदीयः], @deva[अस्मदीयः].",
            "standard": "When @deva[खञ्] or @deva[अण्] follows, @deva[युष्मद्] and @deva[अस्मद्] are replaced by @deva[युष्माक] and @deva[अस्माक]. The demonstrative @deva[तस्मिन्] refers to the explicit @deva[खञ्], not to @deva[छ] drawn by @deva[अनुवृत्ति].\n\n@deva[यथासंख्य] (@ref[1.3.10]) might seem applicable with two affixes matching two words and two substitutes. However, the sūtra splits into two: (1) @deva[खञि] triggers both substitutes; (2) so does @deva[अणि].\n\nExamples: @deva[यौष्माकीणः], @deva[आस्माकीनः] (with @deva[खञ्]); @deva[यौष्माकः], @deva[आस्माकः] (with @deva[अण्]). With @deva[छ]: @deva[युष्मदीयः], @deva[अस्मदीयः] (no substitution).",
            "advanced": "@deva[तस्मिन्] is @deva[प्रत्यक्षनिर्देश] pointing to @deva[खञ्], not the @deva[परोक्ष] @deva[छ] understood via @deva[च] from @ref[4.3.1]. Despite apparent @deva[समसंख्या] (two affixes, two bases, two substitutes), @deva[यथासंख्य] (@ref[1.3.10]) fails because the sūtra undergoes @deva[योगविभाग]: (1) @deva[तस्मिन्खञि युष्मदस्मदोर्युष्माकास्माकौ], (2) @deva[अततोऽणि च]—each affix independently triggers both substitutions.\n\nDerivations: @deva[युष्मद्] + @deva[खञ्] → @deva[युष्माक] + @deva[ईन] → @deva[यौष्माकीणः]. @deva[अस्मद्] + @deva[अण्] → @deva[अस्माक] + @deva[अ] → @deva[आस्माकः]. With @deva[छ]: @deva[युष्मदीयः], @deva[अस्मदीयः]—substitution blocked."
        }
    },
    "43003": {
        "en": {
            "simple": "When referring to a single individual, @deva[युष्मद्] (you) becomes @deva[तवक] and @deva[अस्मद्] (I) becomes @deva[ममक] before the affixes @deva[खञ्] and @deva[अण्].\n\nExamples: @deva[तावकीनः] (belonging to you, singular), @deva[मामकीनः] (belonging to me). Also @deva[तावकः] and @deva[मामकः]. But with @deva[छ], the forms are @deva[त्वदीयः] (yours) and @deva[मदीयः] (mine).\n\nThe term @deva[एकवचने] means 'expressing one individual', not the singular case-affix @deva[सु], since that affix is elided (@deva[लुक्]) after these pronouns.",
            "standard": "When denoting a single referent, @deva[तवक] and @deva[ममक] substitute for @deva[युष्मद्] and @deva[अस्मद्] before @deva[खञ्] and @deva[अण्].\n\nExamples: @deva[तावकीनः] (thine), @deva[मामकीनः] (mine); @deva[तावकः], @deva[मामकः]. With @deva[छ]: @deva[त्वदीयः], @deva[मदीयः].\n\nThe phrase @deva[एकवचने] means @deva[एकार्थे] (denoting one), not the @deva[सु] affix. Since @deva[सु] undergoes @deva[लुक्] after @deva[युष्मद्]/अस्मद्, if @deva[एकवचने] meant that affix, @ref[1.1.63] (@deva[प्रत्ययलक्षणम्]) would block this rule.",
            "advanced": "This sūtra provides singular-referent substitutes: @deva[तवक] for @deva[युष्मद्], @deva[ममक] for @deva[अस्मद्], conditioned on @deva[खञ्]/अण्].\n\nDerivations: @deva[तवक] + @deva[खञ्] → @deva[तावकीनः]; @deva[ममक] + @deva[अण्] → @deva[मामकः]. With @deva[छ]: @deva[त्वदीयः], @deva[मदीयः].\n\n@deva[एकवचने] = @deva[एकार्थे], not @deva[सु]-प्रत्यय. Since @deva[सु] undergoes @deva[लुक्] after these stems, construing @deva[एकवचने] as the affix would invoke @ref[1.1.63] (@deva[न लुमताङ्गस्य]), blocking application."
        }
    },
    "43004": {
        "en": {
            "simple": "The affix @deva[यत्] comes after the word @deva[अर्ध] (half) in the remaining senses, replacing the general @deva[अण्].\n\nExample: @deva[अर्ध्यम्] means 'belonging to half' or 'worth half'.\n\nA @deva[वार्त्तिक] (supplementary rule) states: when @deva[अर्ध] has a prior member in a compound, the affix @deva[ठञ्] is used instead. Examples: @deva[बालेयार्धिकम्] (related to half of what is youthful), @deva[गौतमार्धिकम्] (related to half of Gautama's portion).",
            "standard": "The affix @deva[यत्] applies after @deva[अर्ध] in @deva[शेष] senses, debarring @deva[अण्].\n\nExample: @deva[अर्ध्यम्] (pertaining to half).\n\n@note[type=vārtika]: When @deva[अर्ध] has a @deva[पूर्वपद], @deva[ठञ्] is used. As @deva[बालेयार्धिकम्] (@deva[बल्यर्थं वस्तु] = @deva[बालेयं], then + @deva[अर्ध] + @deva[ठञ्]); @deva[गौतमार्धिकम्].",
            "advanced": "@deva[यत्] is ordained after @deva[अर्ध] in @deva[शेष] senses, superseding @deva[अण्].\n\nExample: @deva[अर्ध्यम्].\n\n@note[type=vārtika]: @deva[सपूर्वपदात् ठञ्]—when @deva[अर्ध] is @deva[उत्तरपद] in a compound, @deva[ठञ्] applies: @deva[बालेयार्धिकम्], @deva[गौतमार्धिकम्]. This @deva[वार्त्तिक] establishes the governing condition for @ref[4.3.5]–@ref[4.3.7]."
        }
    },
    "43005": {
        "en": {
            "simple": "The affix @deva[यत्] comes after @deva[अर्ध] (half) when it is preceded by the words @deva[पर] (further), @deva[अवर] (nearer), @deva[अधम] (lowest), or @deva[उत्तम] (highest).\n\nExamples: @deva[परार्ध्यम्] (belonging to the further half), @deva[अवरार्ध्यम्] (belonging to the nearer half), @deva[अधमार्ध्यम्] (belonging to the lowest half), @deva[उत्तमार्ध्यम्] (belonging to the highest half).\n\nThe word @deva[पूर्वात्] (preceded by) is used because @deva[पर] and @deva[अवर] have other meanings besides direction, and the vārtika under the previous sūtra would have applied @deva[ठञ्].",
            "standard": "The affix @deva[यत्] applies after @deva[अर्ध] preceded by @deva[पर], @deva[अवर], @deva[अधम], or @deva[उत्तम].\n\nExamples: @deva[परार्ध्यम्], @deva[अवरार्ध्यम्], @deva[अधमार्ध्यम्], @deva[उत्तमार्ध्यम्].\n\nThe term @deva[पूर्वात्] is significant: @deva[पर] and @deva[अवर] have non-directional senses (e.g., @deva[परं सुखम्] 'highest pleasure'). Without this specification, @ref[4.3.6] might apply @deva[ठञ्] when they denote direction. The @deva[वार्त्तिक] @deva[सपूर्वपदात् ठञ्] from @ref[4.3.4] would otherwise govern.",
            "advanced": "@deva[यत्] is ordained after @deva[अर्ध] when @deva[पूर्वपद] is @deva[पर], @deva[अवर], @deva[अधम], or @deva[उत्तम].\n\nDerivations: @deva[परार्ध्यम्], @deva[अवरार्ध्यम्], @deva[अधमार्ध्यम्], @deva[उत्तमार्ध्यम्].\n\n@deva[पूर्वात्] blocks the @deva[वार्त्तिक] @deva[सपूर्वपदात् ठञ्] from @ref[4.3.4]. It also preempts @ref[4.3.6], which would apply @deva[ठञ्] when @deva[पूर्वपद] is @deva[दिक्]-denoting. Since @deva[पर]/अवर] can mean direction (@deva[परा दिक्]) or non-direction (@deva[परं सुखम्]), this sūtra ensures @deva[यत्] applies regardless of sense."
        }
    },
    "43006": {
        "en": {
            "simple": "The affix @deva[ठञ्] (as well as @deva[यत्]) comes after @deva[अर्ध] (half) when the prior word denotes a direction. This replaces the general @deva[अण्].\n\nThe word @deva[च] (and) indicates that @deva[यत्] from the previous sūtra also applies. So both affixes are options.\n\nExamples: @deva[पूर्वार्ध्यम्] or @deva[पौर्वार्धिकम्] (belonging to the eastern half), @deva[दक्षिणार्ध्यम्] or @deva[दाक्षिणार्धिकम्] (belonging to the southern half).",
            "standard": "When @deva[पूर्वपद] denotes direction, both @deva[ठञ्] and @deva[यत्] (via @deva[च]) apply after @deva[अर्ध], debarring @deva[अण्].\n\nExamples: @deva[पूर्वार्ध्यम्] / @deva[पौर्वार्धिकम्], @deva[दक्षिणार्ध्यम्] / @deva[दाक्षिणार्धिकम्].\n\nThe term @deva[पद] prevents misreading: without it, @deva[दिक्पूर्वात्] might mean 'preceded by the word @deva[दिक्]' via @deva[स्वरूपविधि] (@ref[1.1.68]), allowing @deva[दिगर्धे जातः] to take the affix.",
            "advanced": "@deva[ठञ्] (plus @deva[यत्] via @deva[च]) applies after @deva[अर्ध] when @deva[पूर्वपद] is @deva[दिक्]-denoting.\n\nExamples: @deva[पूर्वार्ध्यम्] / @deva[पौर्वार्धिकम्], @deva[दक्षिणार्ध्यम्] / @deva[दाक्षिणार्धिकम्].\n\nThe inclusion of @deva[पद] blocks @deva[स्वरूपविधि] (@ref[1.1.68]): otherwise @deva[दिक्पूर्वात्] would be parsed as 'after @deva[दिक्]-word + @deva[अर्ध]', and @deva[दिगर्धे जातः] would incorrectly take the affix."
        }
    },
    "43007": {
        "en": {
            "simple": "The affixes @deva[अञ्] and @deva[ठञ्] come after @deva[अर्ध] (half) when preceded by a direction word, and when the meaning refers to a particular portion of a village (@deva[ग्राम]) or inhabited country (@deva[जनपद]).\n\nThis replaces @deva[यत्] from the previous rules.\n\nExample: @deva[पौर्वार्धाः] or @deva[पौर्वार्धिकाः] means 'those belonging to the eastern half of our village or country'. Similarly @deva[दाक्षिणार्धाः] or @deva[दाक्षिणार्धिकाः].\n\nThe word @deva[पौर्वार्धाः] = @deva[ग्रामस्य पूर्वस्मिन् अर्धे भवाः] (those dwelling in the eastern half of the village).",
            "standard": "When @deva[पूर्वपद] denotes direction and the sense is a portion of @deva[ग्राम] or @deva[जनपद], @deva[अञ्] and @deva[ठञ्] apply after @deva[अर्ध], debarring @deva[यत्].\n\nThe phrase @deva[दिक्पूर्वपदात्] continues from @ref[4.3.6].\n\nExamples: @deva[इमे खल्वस्माकं ग्रामस्य जनपदस्य वा पौर्वार्धाः] or @deva[पौर्वार्धिकाः] (these belong to the eastern half of our village/country). Similarly @deva[दाक्षिणार्धाः] / @deva[दाक्षिणार्धिकाः].\n\n@deva[पौर्वार्धाः] is a @deva[तद्धितार्थ] compound: @deva[ग्रामस्य पूर्वस्मिन् अर्धे भवाः].",
            "advanced": "@deva[अञ्] and @deva[ठञ्] are ordained after @deva[दिक्पूर्वपद] + @deva[अर्ध] when denoting @deva[ग्राम]/जनपद]-विभाग, superseding @deva[यत्] from @ref[4.3.5]–@ref[4.3.6].\n\nExamples: @deva[पौर्वार्धाः], @deva[पौर्वार्धिकाः]; @deva[दाक्षिणार्धाः], @deva[दाक्षिणार्धिकाः].\n\nDerivation: @deva[पौर्वार्धाः] = @deva[ग्रामस्य पूर्वस्मिन् अर्धे भवाः]—a @deva[तद्धितार्थसमास]. The @deva[अनुवृत्ति] of @deva[दिक्पूर्वपदात्] continues from @ref[4.3.6]."
        }
    },
    "43008": {
        "en": {
            "simple": "The affix @deva[म] comes after @deva[मध्य] (middle) in the remaining senses, replacing @deva[अण्].\n\nExample: @deva[मध्यमः] means 'middlemost' or 'belonging to the middle'.\n\nSupplementary rules (@deva[वार्त्तिक]):\n• After @deva[आदि] (beginning): @deva[आदिमः] (first, primordial).\n• After @deva[अवस्] (below) and @deva[अधस्] (under): the final @deva[स्] is dropped, giving @deva[अवमम्] (lowest) and @deva[अधमम्] (lowest).",
            "standard": "The affix @deva[म] applies after @deva[मध्य] in @deva[शेष] senses, debarring @deva[अण्].\n\nExample: @deva[मध्यमः] (middlemost).\n\n@note[type=vārtika]: After @deva[आदि]: @deva[आदिमः] (primordial).\n@note[type=vārtika]: After @deva[अवस्] and @deva[अधस्], with @deva[स्]-लोप: @deva[अवमम्], @deva[अधमम्].",
            "advanced": "@deva[म] is ordained after @deva[मध्य] in @deva[शेष] senses, superseding @deva[अण्].\n\nExample: @deva[मध्यमः].\n\n@note[type=vārtika]: @deva[आदेश्च]—@deva[आदिमः].\n@note[type=vārtika]: @deva[अवसोऽधसश्च सलोपश्च]—@deva[अवमम्], @deva[अधमम्], with @deva[स्]-elision."
        }
    },
    "43009": {
        "en": {
            "simple": "The affix @deva[अ] comes after @deva[मध्य] (middle) when the meaning is 'fit' or 'proper' (@deva[साम्प्रतिक]).\n\nExamples:\n• @deva[मध्यं काष्ठम्] — the proper piece of wood (neither too long nor too short).\n• @deva[मध्ये वैयाकरणः] — the proper grammarian (neither too refined nor too dull).\n• @deva[मध्या स्त्री] — a proper wife (of moderate qualities).\n\nHere @deva[साम्प्रतिक] means 'equity, propriety, or appropriateness'.",
            "standard": "The affix @deva[अ] applies after @deva[मध्य] when expressing @deva[साम्प्रतिक] (fitness, propriety).\n\nExamples: @deva[नातिदीर्घं नाति ह्रस्वं मध्यं काष्ठम्] (the proper wood—neither too long nor too short). @deva[मध्ये वैयाकरणः] (a moderate grammarian). @deva[मध्या स्त्री] (a proper wife).\n\nThe sense @deva[साम्प्रतिक] (equity, rightness) distinguishes this from the locational @deva[मध्य].",
            "advanced": "@deva[अ] is ordained after @deva[मध्य] in @deva[साम्प्रतिक] (propriety/fitness) sense.\n\nExamples: @deva[मध्यं काष्ठम्], @deva[मध्ये वैयाकरणः], @deva[मध्या स्त्री].\n\n@deva[साम्प्रतिक] = @deva[सम्यक् प्राप्तम्], denoting appropriateness or moderation, distinct from spatial @deva[मध्य] (middle location)."
        }
    },
    "43010": {
        "en": {
            "simple": "The affix @deva[यञ्] comes after @deva[द्वीप] (island) when it means 'near the sea' (@deva[अनुसमुद्र]).\n\n@deva[द्वीप] is listed in the @deva[कच्छादि] class and would normally take @deva[अण्] or @deva[वुञ्]. This rule overrides both when the island is coastal.\n\nExample: @deva[द्वैप्यम्] means 'living on or relating to an island', as in @deva[द्वैप्यं भवन्तोऽनुचरन्ति चक्रम्] (the islanders follow the discus).\n\nBut for inland islands: @deva[द्वैपकम्] or @deva[द्वैपम्].",
            "standard": "The affix @deva[यञ्] applies after @deva[द्वीप] when meaning @deva[अनुसमुद्र] (near the sea), debarring @deva[अण्] and @deva[वुञ्] from @ref[4.2.133]–@ref[4.2.134].\n\nExample: @deva[द्वैप्यम्] (pertaining to a coastal island). As in @deva[द्वैप्यं भवन्तोऽनुचरन्ति चक्रम्].\n\nWhen not @deva[अनुसमुद्र]: @deva[द्वैपकम्] or @deva[द्वैपम्] (@ref[4.2.133], @ref[4.2.134]).\n\n@deva[अनुसमुद्र] is an @deva[अव्ययीभाव] compound by @ref[2.1.15].",
            "advanced": "@deva[यञ्] is ordained after @deva[द्वीप] in @deva[अनुसमुद्र] sense, superseding @deva[अण्]/वुञ्] from @deva[कच्छादि] (@ref[4.2.133]) and @ref[4.2.134].\n\nExample: @deva[द्वैप्यम्]. Cf. @deva[द्वैप्यं भवन्तोऽनुचरन्ति चक्रम्].\n\nNon-@deva[अनुसमुद्र]: @deva[द्वैपकम्], @deva[द्वैपम्]. @deva[अनुसमुद्र] = @deva[अव्ययीभाव] by @ref[2.1.15]."
        }
    },
    "43011": {
        "en": {
            "simple": "The affix @deva[ठञ्] comes after words denoting time (@deva[काल]) in the remaining senses. This replaces both @deva[अण्] and @deva[छ] (which would apply to @deva[वृद्ध] words).\n\nExamples: @deva[मासिकः] (monthly), @deva[आर्धमासिकः] (fortnightly), @deva[सांवत्सरिकः] (annual).\n\nEven words that indirectly denote time take this affix: @deva[कादम्बपुष्पिकम्] (related to the time of Kadamba flowers), @deva[व्रैहिपलालिकम्] (related to rice-straw season).\n\nThe word @deva[काल] governs the subsequent rules up through 4.3.25.",
            "standard": "The affix @deva[ठञ्] applies after @deva[कालवाचिन्] (time-denoting) words in @deva[शेष] senses, debarring @deva[अण्] and @deva[छ] (for @deva[वृद्ध] words, @ref[4.2.114]).\n\nExamples: @deva[मासिकः] (monthly), @deva[आर्धमासिकः] (bi-monthly), @deva[सांवत्सरिकः] (annual).\n\nWords indirectly indicating time also qualify: @deva[कादम्बपुष्पिकम्], @deva[व्रैहिपलालिकम्].\n\nThe @deva[अधिकार] of @deva[काल] extends through @ref[4.3.25] (@deva[तत्र जातः]).",
            "advanced": "@deva[ठञ्] is ordained after @deva[कालवाचिन्] words in @deva[शेष] senses, superseding @deva[अण्] and @deva[छ] (@ref[4.2.114]).\n\nExamples: @deva[मासिकः], @deva[आर्धमासिकः], @deva[सांवत्सरिकः]; @deva[कादम्बपुष्पिकम्], @deva[व्रैहिपलालिकम्] (indirect time-denotation).\n\n@deva[कालात्] governs @ref[4.3.11]–@ref[4.3.25] as @deva[अधिकार]."
        }
    },
    "43012": {
        "en": {
            "simple": "The affix @deva[ठञ्] comes after @deva[शरद्] (autumn) when the meaning involves @deva[श्राद्ध] (funeral oblation).\n\nThis replaces @deva[अण्] which would apply by the general rule for seasons.\n\nExample: @deva[शारदिकं श्राद्धम्] means 'the autumnal funeral rite'.\n\nWhen not referring to funeral rites: @deva[शारदम्] (autumnal), with @deva[अण्].",
            "standard": "The affix @deva[ठञ्] applies after @deva[शरद्] when denoting @deva[श्राद्ध] (funeral oblation), debarring @deva[अण्] from @ref[4.3.16].\n\nExample: @deva[शारदिकं श्राद्धम्] (the autumnal @deva[श्राद्ध]).\n\n@deva[श्राद्धे] means the funeral rite, not @deva[श्रद्धावान् पुरुषः] (a faithful person). When not @deva[श्राद्ध]-related: @deva[शारदम्].",
            "advanced": "@deva[ठञ्] is ordained after @deva[शरद्] in @deva[श्राद्ध]-sense, superseding @deva[ऋतु]-governed @deva[अण्] (@ref[4.3.16]).\n\nExample: @deva[शारदिकं श्राद्धम्].\n\n@deva[श्राद्धे] = @deva[श्राद्धकर्मणि], not @deva[श्रद्धायुक्ते]. Non-@deva[श्राद्ध] sense: @deva[शारदम्]."
        }
    },
    "43013": {
        "en": {
            "simple": "The affix @deva[ठञ्] optionally comes after @deva[शरद्] (autumn) when the meaning involves illness (@deva[रोग]) or heat (@deva[आतप]).\n\nExamples: @deva[शारदिको रोगः] (the autumnal disease), @deva[शारदिक आतपः] (autumnal sunshine/heat).\n\nWhen not referring to illness or heat: @deva[शारदं दधि] (autumnal curd, with @deva[अण्]).\n\nThis @deva[ठञ्] replaces the seasonal @deva[अण्] from 4.3.16.",
            "standard": "The affix @deva[ठञ्] optionally applies after @deva[शरद्] when denoting @deva[रोग] or @deva[आतप], debarring @deva[ऋतु]-governed @deva[अण्] (@ref[4.3.16]).\n\nExamples: @deva[शारदिको रोगः] (autumnal disease), @deva[शारदिक आतपः] (autumnal heat).\n\nNon-illness/heat context: @deva[शारदं दधि] (autumnal curd).",
            "advanced": "@deva[ठञ्] optionally applies after @deva[शरद्] in @deva[रोग]/आतप] senses, superseding @deva[ऋतु]-@deva[अण्] (@ref[4.3.16]).\n\nExamples: @deva[शारदिको रोगः], @deva[शारदिक आतपः]. Counter-example: @deva[शारदं दधि]."
        }
    },
    "43014": {
        "en": {
            "simple": "The affix @deva[ठञ्] optionally comes after the words @deva[निशा] (night) and @deva[प्रदोष] (evening/dusk).\n\nBy the previous rule 4.3.11, @deva[ठञ्] would be obligatory for time-words. This rule makes it optional, allowing @deva[अण्] as well.\n\nExamples: @deva[नैशम्] or @deva[नैशिकम्] (nocturnal), @deva[प्रादोषम्] or @deva[प्रादोषिकम्] (relating to dusk).",
            "standard": "The affix @deva[ठञ्] optionally applies after @deva[निशा] and @deva[प्रदोष], where @ref[4.3.11] would make @deva[ठञ्] obligatory. This permits @deva[अण्] as an alternative.\n\nExamples: @deva[नैशम्] / @deva[नैशिकम्] (nocturnal); @deva[प्रादोषम्] / @deva[प्रादोषिकम्] (pertaining to dusk).",
            "advanced": "@deva[ठञ्] is made optional after @deva[निशा] and @deva[प्रदोष], where @ref[4.3.11] (@deva[कालात्]) would ordinarily mandate it.\n\nExamples: @deva[नैशम्] (with @deva[अण्]) / @deva[नैशिकम्] (with @deva[ठञ्]); @deva[प्रादोषम्] / @deva[प्रादोषिकम्]."
        }
    },
    "43015": {
        "en": {
            "simple": "The affix @deva[ठञ्] optionally comes after @deva[श्वस्] (tomorrow), and the augment @deva[तुट्] is added before the affix.\n\n@deva[श्वस्] normally takes @deva[त्यप्] by rule 4.2.10. This rule adds @deva[ठञ्] as an option. Without either, @deva[त्यु] and @deva[त्युल्] affixes can apply by 4.3.23.\n\nExample: @deva[श्वस्] + @deva[तुट्] + @deva[ठञ्] = @deva[शौवस्तिकः] (belonging to tomorrow, ephemeral).\n\nOther forms: @deva[श्वस्त्यः] and @deva[श्वस्तनः].",
            "standard": "The affix @deva[ठञ्] optionally applies after @deva[श्वस्] with the augment @deva[तुट्]. @deva[श्वस्] normally takes @deva[त्यप्] (@ref[4.2.10]); freed from both rules, @deva[त्यु]/त्युल्] apply (@ref[4.3.23]).\n\nDerivation: @deva[श्वस्] + @deva[तुट्] + @deva[ठञ्] = @deva[शौवस्त्] + @deva[इक] (@ref[7.3.3]) = @deva[शौवस्तिकः] (ephemeral).\n\nAlternatives: @deva[श्वस्त्यः] (with @deva[त्यप्]), @deva[श्वस्तनः] (with @deva[त्युल्]).",
            "advanced": "@deva[ठञ्] optionally applies after @deva[श्वस्] with @deva[तुट्]-आगम. @deva[त्यप्] (@ref[4.2.10]) is the default; beyond both, @deva[त्यु]/त्युल्] (@ref[4.3.23]) are available.\n\nDerivation: @deva[श्वस्] + @deva[तुट्] + @deva[ठञ्] → @deva[शौवस्त्] + @deva[इक] (@ref[7.3.3]) → @deva[शौवस्तिकः].\n\nAlternatives: @deva[श्वस्त्यः], @deva[श्वस्तनः]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print("Updated commentary for sutras 4.3.1-4.3.15 (Batch 1 of 4.3)")
