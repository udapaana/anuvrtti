#!/usr/bin/env python3
"""Rewrite commentary for 6.2.181-199 (upasarga-final accent, tatpurusha, bahuvrihi, chandas)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62181": {
        "en": {
            "simple": "The word @deva[अन्तर्] does not get final-syllable accent after the prefixes @deva[नि] and @deva[वि]. Examples: @deva[न्यन्तः] 'interior', @deva[व्यन्तः] 'interval'. The first member retains its accent; the semivowel replaces @deva[इ], then स्वरित occurs by @ref[8.2.4].",
            "standard": "This sūtra blocks @ref[6.2.180]'s अन्त्योदात्त for @deva[नि] + @deva[अन्तर्] and @deva[वि] + @deva[अन्तर्]. Thus @deva[न्यन्तः], @deva[व्यन्तः] retain पूर्वपद accent. After semivowel substitution (@deva[इ] → @deva[य्]), the subsequent अनुदात्त becomes स्वरित by @ref[8.2.4] @deva[एकादेश] @deva[उदात्तेनोदात्तः].",
            "advanced": "The @deva[नि]/वि] exception to @ref[6.2.180] maintains prefix accent. The phonological sequence: (1) @deva[नि] + @deva[अन्तर्] → @deva[न्यन्तर्]; (2) prefix retains उदात्त; (3) following अनुदात्त becomes स्वरित by @ref[8.2.4]. This contrasts with @deva[प्रान्त], @deva[पर्यन्त] which take उत्तरपद-अन्त्योदात्त."
        }
    },
    "62182": {
        "en": {
            "simple": "After @deva[परि] 'around', words denoting things that have both sides, as well as @deva[मण्डल] 'circle', get final-syllable accent. Examples: @deva[परिकूलम्] 'on both banks', @deva[परितीरम्] 'on both shores', @deva[परिमण्डलम्] 'circular'.",
            "standard": "After @deva[परि], अभितोभाविन् (having both sides) words and @deva[मण्डल] receive अन्त्योदात्त: @deva[परिकूलम्], @deva[परितीरम्], @deva[परिमण्डलम्]. These may be बहुव्रीहि, प्रादिसमास, or अव्ययीभाव. If अव्ययीभाव, this supersedes @ref[6.2.33]'s पूर्वपद-accent. The अभितोभाविन् condition means 'having both this side and that side'.",
            "advanced": "The अभितोभाविन् semantic condition identifies words denoting things with bilateral extension (banks, shores). Combined with @deva[परि] 'around', the compound indicates complete surrounding. The @deva[मण्डल] addition covers circular objects. For अव्ययीभाव interpretation, this rule supersedes @ref[6.2.33]'s general अव्ययीभाव accent."
        }
    },
    "62183": {
        "en": {
            "simple": "After @deva[प्र] 'forward', a non-body-part word gets final-syllable accent when the compound is a name. Examples: @deva[प्रकोष्ठम्] (place name), @deva[प्रगृह्यम्] (name), @deva[प्रद्वारम्] (name). Body parts: @deva[प्रहस्तम्], @deva[प्रपदम्] don't qualify. Non-name: @deva[प्रपीठम्].",
            "standard": "In संज्ञा (name) compounds, non-स्वाङ्ग words after @deva[प्र] receive अन्त्योदात्त: @deva[प्रकोष्ठम्], @deva[प्रगृह्यम्], @deva[प्रद्वारम्]. Counterexamples: @deva[प्रहस्तम्], @deva[प्रपदम्] (body parts—see @ref[6.2.177]); @deva[प्रपीठम्] (not a name). The अस्वाङ्ग condition excludes body-part nouns.",
            "advanced": "Two conditions: (1) अस्वाङ्ग (not body-part), excluding @ref[6.2.177]'s scope; (2) संज्ञा (proper name). The rule applies to place names and technical terms formed with @deva[प्र]. Body parts follow @ref[6.2.177] (ध्रुव स्वाङ्ग + उपसर्ग → अन्त्योदात्त) instead."
        }
    },
    "62184": {
        "en": {
            "simple": "Words like @deva[निरुदक] 'waterless', @deva[निरुपल] 'stoneless', @deva[निर्मक्षिक] 'flyless' get final-syllable accent. These can be प्रादिसमास or बहुव्रीहि compounds.",
            "standard": "The निरुदकादि gaṇa receives अन्त्योदात्त: @deva[निरुदकम्], @deva[निरुपलम्], @deva[निरुलपम्], @deva[निर्मक्षिकम्], @deva[निर्मशकम्], @deva[निष्कालकम्], @deva[निष्कालिकम्], @deva[निष्पेषम्], @deva[दुस्तरीपम्], @deva[निस्तरीपम्], etc. These may be प्रादिसमास or बहुव्रीहि. As अव्ययीभाव, they would take final accent by @ref[6.1.223] anyway.",
            "advanced": "The gaṇa includes: @deva[निरुदक], @deva[निरुपल], @deva[निरुलप], @deva[निर्मक्षिक], @deva[निर्मशक], @deva[निष्कालक], @deva[निष्कालिक], @deva[निष्पेष], @deva[दुस्तरीप], @deva[निस्तरीप], @deva[निस्तरीक], @deva[निरजिन], @deva[उदजिन], @deva[उपाजिन]. A vārttika adds @deva[परि] + हस्त/पाद/केश/कर्ष as आकृतिगण. Multiple compound interpretations yield same accent."
        }
    },
    "62185": {
        "en": {
            "simple": "The word @deva[मुख] 'face' gets final-syllable accent after @deva[अभि] 'towards'. Example: @deva[अभिमुखम्] 'facing towards'. This applies whether बहुव्रीहि, प्रादिसमास, or अव्ययीभाव.",
            "standard": "After @deva[अभि], @deva[मुख] receives अन्त्योदात्त: @deva[अभिमुखम्]. This extends @ref[6.2.177] (which required ध्रुव स्वाङ्ग) to @deva[मुख] even when not a body part or when the compound isn't बहुव्रीहि. As अव्ययीभाव, @ref[6.1.223] would also give final accent. Example: @deva[अभिमुखा] @deva[सरस्वती].",
            "advanced": "This sūtra generalizes beyond @ref[6.2.177]'s बहुव्रीहि + ध्रुव स्वाङ्ग conditions. After @deva[अभि], @deva[मुख] takes अन्त्योदात्त regardless of compound type or body-part meaning. The overlap with @ref[6.1.223] (for अव्ययीभाव) confirms the accent pattern across interpretations."
        }
    },
    "62186": {
        "en": {
            "simple": "The word @deva[मुख] 'face' gets final-syllable accent after @deva[अप्] 'away'. Examples: @deva[अपमुखम्] 'turned away', @deva[अपमुखः]. This applies to अव्ययीभाव too, superseding @ref[6.2.33].",
            "standard": "After @deva[अप्], @deva[मुख] receives अन्त्योदात्त: @deva[अपमुखम्], @deva[अपमुखः]. For अव्ययीभाव interpretation, this supersedes @ref[6.2.33]. The separation from @ref[6.2.185] allows @deva[अप्] to carry into the next sūtra (@ref[6.2.187]) for additional words.",
            "advanced": "The sūtra separation from @ref[6.2.185] has technical purpose: @deva[अप्] continues into @ref[6.2.187] by अनुवृत्ति, while @deva[अभि] does not. This allows @ref[6.2.187] to specify additional words receiving अन्त्योदात्त specifically after @deva[अप्]."
        }
    },
    "62187": {
        "en": {
            "simple": "After @deva[अप्] 'away', the words @deva[स्फिग्] 'buttock', @deva[पूत] 'pure', @deva[वीणा] 'lute', @deva[अञ्जस्] 'straight', @deva[अध्वन्] 'path', @deva[कुक्षि] 'belly', @deva[नामन्] 'name', and plough-words get final accent. Examples: @deva[अपस्फिगम्], @deva[अपपूतम्], @deva[अपवीणम्].",
            "standard": "Seven words plus plough-terms receive अन्त्योदात्त after @deva[अप्]: @deva[अपस्फिगम्], @deva[अपपूतम्], @deva[अपवीणम्], @deva[अपाञ्जः], @deva[अपाध्वा] (without समासान्त @deva[अच्] by @ref[5.4.85]; with it, accent still final since @deva[अच्] is चित्]); @deva[अपकुक्षिः]; @deva[अपनाम]; plough-words.",
            "advanced": "The हलवाचिन् (plough-denoting) extension adds agricultural terms to the list. The @deva[अपाध्वन्] case shows interaction with समासान्त: without @deva[अच्] (@ref[5.4.85]), this rule gives अन्त्योदात्त; with @deva[अच्] (a चित् affix), the चित्-accent also falls on final. Either way, the accent is final."
        }
    },
    "62188": {
        "en": {
            "simple": "After @deva[अधि] 'upon', a word meaning 'that which overlaps or stands upon' gets final-syllable accent. Examples: @deva[अधिदन्तः] 'tooth growing over another', @deva[अधिकर्णः] 'ear growing over ear', @deva[अधिकेशः] 'hair over hair'. Without 'standing upon': @deva[अधिकरणम्].",
            "standard": "When denoting अधिभाव (superimposition/overlay), उत्तरपद after @deva[अधि] receives अन्त्योदात्त: @deva[अधिदन्तः] (@deva[दन्तस्योपरि] @deva[योऽन्यो] @deva[दन्तो] @deva[जायते]), @deva[अधिकर्णः], @deva[अधिकेशः]. These are प्रादिसमास or appositional compounds with elided second member. Counterexample: @deva[अधिकरणम्] (कृत्-formed, retaining accent by @ref[6.2.139]).",
            "advanced": "The अधिभाव (standing upon/overlapping) condition restricts this to superimposition meanings. The counterexample @deva[अधिकरण] shows कृत्-formed words follow @ref[6.2.139] प्रकृतिस्वर instead. The compounds may be प्रादिसमास or analyzed as बहुव्रीहि with elided qualifiee."
        }
    },
    "62189": {
        "en": {
            "simple": "After @deva[अनु] 'following', a non-principal word and the word @deva[कनीयस्] 'younger' get final-syllable accent. Examples: @deva[अनुज्येष्ठः] 'following the eldest', @deva[अनुमध्यमः] 'following the middle one', @deva[अनुकनीयम्] 'following the youngest'.",
            "standard": "After @deva[अनु], अप्रधान (non-principal/dependent) words receive अन्त्योदात्त: @deva[अनुज्येष्ठः] (@deva[अनुगतो] @deva[ज्येष्ठम्]), @deva[अनुमध्यमः]. These are प्रादिसमास where @deva[अनु] is प्रधान. Separately, @deva[कनीयस्] takes अन्त्योदात्त: @deva[अनुकनीयम्] (@deva[अनुगतः] @deva[कनीयान्]), even though here the उत्तरपद is प्रधान.",
            "advanced": "Two conditions: (1) अप्रधान उत्तरपद in प्रादिसमास (where prefix is principal); (2) @deva[कनीयस्] specifically (which would be प्रधान). The @deva[कनीयस्] enumeration is necessary because it's प्रधान—otherwise covered by the general अप्रधान rule. Both yield अन्त्योदात्त."
        }
    },
    "62190": {
        "en": {
            "simple": "After @deva[अनु], the word @deva[पुरुष] 'man' gets final-syllable accent when it means 'a man already mentioned' (@deva[अन्वादिष्ट]). Example: @deva[अनुपुरुषः] 'the aforementioned man'. But @deva[अनुगतः] @deva[पुरुषः] = @deva[अनुपुरुषः] (following a man) doesn't qualify.",
            "standard": "When @deva[पुरुष] means अन्वादिष्ट (previously mentioned, secondary reference), @deva[अनु] + @deva[पुरुष] receives अन्त्योदात्त: @deva[अन्वादिष्टः] @deva[पुरुषः] = @deva[अनुपुरुषः]. The अन्वादिष्ट sense = 'mentioned again' or 'of secondary importance'. Contrast: @deva[अनुगतः] @deva[पुरुषः] = @deva[अनुपुरुषः] (one who follows) takes different accent.",
            "advanced": "The अन्वादिष्ट semantic condition distinguishes referential mention (previously named person) from following/accompanying sense. Only the backreference meaning triggers अन्त्योदात्त. The @deva[अनुगत] sense ('one who accompanies') follows general प्रादिसमास accent."
        }
    },
    "62191": {
        "en": {
            "simple": "After @deva[अति] 'beyond', non-कृत् words and the word @deva[पद] 'foot/verse' get final-syllable accent. Examples: @deva[अत्यङ्कुशः] @deva[नागः] 'elephant beyond the goad', @deva[अतिकशः] @deva[अश्वः] 'horse beyond the whip', @deva[अतिपदा] @deva[शक्वरी] 'Śakvarī meter with extra foot'. कृत्-words: @deva[अतिकारकः].",
            "standard": "Non-कृदन्त words and @deva[पद] receive अन्त्योदात्त after @deva[अति]: @deva[अत्यङ्कुशो] @deva[नागः], @deva[अतिकशोऽश्वः], @deva[अतिपदा] @deva[शक्वरी]. Counterexample: @deva[अतिकारकः] (कृत्-formed). A vārttika restricts this to compounds where a verb (like √@deva[क्रम्] 'cross') is elided: @deva[शोभनी] @deva[गार्ग्यः] = @deva[अतिगार्ग्यः] (no elided verb) doesn't qualify.",
            "advanced": "The वार्त्तिक @deva[धात्वपेक्षायाम्] requires an understood verbal action (like 'crossing beyond') for this accent. Thus @deva[अत्यङ्कुश] implies √@deva[क्रम्] 'going beyond the goad'. But @deva[अतिगार्ग्य] 'surpassing Gārgya' (adjectival sense without verbal elision) doesn't take this accent."
        }
    },
    "62192": {
        "en": {
            "simple": "After @deva[नि] 'down', the second member gets final-syllable accent when the meaning is 'not laying down' or 'concealing'. Examples: @deva[निमूलम्] 'roots hidden', @deva[न्यक्षम्] 'eyes hidden', @deva[नितृणम्] 'grass concealed'. 'Laying down' meaning: @deva[निवाक्], @deva[निदण्डः].",
            "standard": "When @deva[नि] means अनिधान (not laying down/concealment), उत्तरपद receives अन्त्योदात्त: @deva[निमूलम्], @deva[न्यक्षम्], @deva[नितृणम्]. These may be बहुव्रीहि or प्रादिसमास (as अव्ययीभाव, @ref[6.1.223] applies anyway). Counterexamples: @deva[निवाक्] (@deva[निहितवाक्] = having laid down speech), @deva[निदण्डः] (@deva[निहितदण्डः] = having laid down stick).",
            "advanced": "The निधान/अनिधान (laying down/not laying down) semantic distinction governs accent. अनिधान = अप्रकाशता (not manifesting/concealing). The @deva[निवाक्] counterexample shows @deva[नि] in its 'placing down' sense yields different accent. The prefix @deva[नि] has dual semantics: placement vs. concealment."
        }
    },
    "62193": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound, words like @deva[अंशु] 'ray', @deva[जन] 'person', @deva[राजन्] 'king' get final-syllable accent after @deva[प्रति] 'towards/each'. Examples: @deva[प्रत्यंशुः] 'ray-by-ray', @deva[प्रतिजनः] 'person-by-person', @deva[प्रतिराजा] 'each king'.",
            "standard": "In तत्पुरुष, the अंश्वादि gaṇa receives अन्त्योदात्त after @deva[प्रति]: @deva[प्रत्यंशुः], @deva[प्रतिजनः], @deva[प्रतिराजा]. For @deva[राजन्] without समासान्त @deva[टच्], this rule applies; with @deva[टच्] (a चित् affix), the accent is also final. The gaṇa includes @deva[अंशु], @deva[जन], @deva[राजन्], @deva[उष्ट्र], @deva[खेटक], @deva[अजिर], @deva[आर्द्रा], @deva[श्रवण], @deva[कृत्तिका], @deva[अर्ध], etc.",
            "advanced": "The gaṇa lists: @deva[अंशु], @deva[जन], @deva[राजन्], @deva[उष्ट्र], @deva[खेटक]/@deva[रोटक], @deva[अजिर], @deva[आर्द्रा], @deva[श्रवण], @deva[कृत्तिका], @deva[अर्ध]. The @deva[राजन्] + @deva[टच्] case shows affix-based accent convergence: whether by this rule or चित्-accent, the result is final acute."
        }
    },
    "62194": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound, disyllabic words and @deva[अजिन्] 'hide' get final-syllable accent after @deva[उप] 'near'—except @deva[गौर] etc. Examples: @deva[उपदेवः] 'sub-deity', @deva[उपेन्द्रः] 'Upendra', @deva[उपसोमः], @deva[उपाजिनम्]. Exceptions: @deva[उपगौरः], @deva[उपनैषः].",
            "standard": "In तत्पुरुष, द्व्यच् (disyllabic) words and @deva[अजिन्] receive अन्त्योदात्त after @deva[उप]: @deva[उपदेवः] (@deva[उपगतो] @deva[देवः]), @deva[उपेन्द्रः], @deva[उपसोमः], @deva[उपहोडः], @deva[उपाजिनम्]. गौरादि exceptions: @deva[उपगौरः], @deva[उपनैषः]/@deva[उपतैषः], @deva[उपतैलः], @deva[उपलेटः], @deva[उपलोटः], @deva[उपजिह्वा], @deva[उपकृष्णः]/कृष्णा], @deva[उपकन्या], @deva[उपगुधः]/गुडः], @deva[उपकल्पः], @deva[उपपाठः].",
            "advanced": "The द्व्यच् (two-syllable) condition with गौरादि exceptions defines a morphophonemic class. The gaṇa includes: @deva[गौर], @deva[तैष]/नैष], @deva[तैल], @deva[लेट], @deva[लोट], @deva[जिह्वा], @deva[कृष्ण]/कृष्णा], @deva[कन्या], @deva[गुध]/गुड], @deva[कल्प], @deva[पाठ]. Non-तत्पुरुष compounds don't qualify (the तत्पुरुष condition is explicit)."
        }
    },
    "62195": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound after @deva[सु] 'good', the second member gets final-syllable accent when the overall meaning is reproach (despite @deva[सु] being positive). Example: @deva[सुप्रत्यवसितः] 'well-rested' (sarcastically, meaning lazy). Without reproach: @deva[सुतृणेषु] 'in good grass'.",
            "standard": "When आक्षेप (reproach/irony) is intended despite @deva[सु]'s praise meaning, तत्पुरुष receives अन्त्योदात्त: @deva[इह] @deva[खल्विदानीं] @deva[सुस्थण्डिले] @deva[सुस्फिताभ्यां] @deva[सुप्रत्यवसितः] (sarcastically: 'well-rested indeed!'). Counterexamples: @deva[कुब्राह्मणः] (not @deva[सु]); @deva[सुतृणेषु] (@deva[शोभनेषु] @deva[तृणेषु], genuine praise).",
            "advanced": "The sarcastic/ironic use of @deva[सु] creates the आक्षेप condition. The sentence context determines reproach: @deva[सुप्रत्यवसित] praising rest while implying criticism. The वाक्यार्थ (sentence meaning) overrides शब्दार्थ (word meaning) for accent purposes. Genuine @deva[सु]-compounds follow other accent rules."
        }
    },
    "62196": {
        "en": {
            "simple": "In a @deva[तत्पुरुष] compound, the word @deva[उत्पुच्छ] 'tail-raised' optionally gets final-syllable accent. Example: @deva[उत्पुच्छः] or @deva[उत्पुच्छः] (from @deva[उत्क्रान्तः] @deva[पुच्छात्] 'risen from the tail'). Non-तत्पुरुष: @deva[उत्पुच्छः] (बहुव्रीहि) doesn't have this option.",
            "standard": "Optional अन्त्योदात्त for @deva[उत्पुच्छ] in तत्पुरुष: @deva[उत्पुच्छः] or @deva[उत्पुच्छः] (@ref[6.2.2] अव्यय-accent). When derived by @deva[अच्] from @deva[उत्पुच्छयति] (@deva[पुच्छम्] @deva[उदस्यति]), @ref[6.2.144] would give final accent; this rule makes it optional there too. बहुव्रीहि @deva[उत्पुच्छ] (@deva[उदस्तं] @deva[पुच्छम्] @deva[अस्य]) doesn't have this option.",
            "advanced": "The optionality extends to both compound analysis (तत्पुरुष @deva[उत्क्रान्तः] @deva[पुच्छात्]) and derivational analysis (@deva[अच्]-formed from denominative @deva[उत्पुच्छयति]). The तत्पुरुष restriction excludes बहुव्रीहि interpretation where different accent applies."
        }
    },
    "62197": {
        "en": {
            "simple": "In a @deva[बहुव्रीहि] compound, the words @deva[पाद्] 'foot', @deva[दत्] 'tooth', and @deva[मूर्धन्] 'head' optionally get final-syllable accent after @deva[द्वि] 'two' or @deva[त्रि] 'three'. Examples: @deva[द्विपात्] or @deva[द्विपात्] 'two-footed', @deva[त्रिपाद्] or @deva[त्रिपाद्], @deva[द्विदम्] or @deva[द्विदम्], @deva[द्विमूर्धा] or @deva[द्विमूर्धा].",
            "standard": "Optional अन्त्योदात्त for @deva[पाद्]/दत्]/मूर्धन्] after @deva[द्वि]/@deva[त्रि] in बहुव्रीहि. @deva[पाद्] = @deva[पाद] with @deva[अ]-elision (@ref[5.4.140]); @deva[दत्] = substitute for @deva[दन्त] (@ref[5.4.141]). Alternations: @deva[द्विपात्]/द्विपात्], @deva[त्रिपाद्]/त्रिपाद्], @deva[द्विदम्]/द्विदम्], @deva[त्रिदन्]/त्रिदन्], @deva[द्विमूर्धा]/द्विमूर्धा].",
            "advanced": "The @deva[पाद्]/दत्] forms involve समासान्त operations (@ref[5.4.140]-@ref[5.4.141]). The विभाषा creates alternation with पूर्वपद-accent. The @deva[द्वि]/@deva[त्रि] condition is specific—other numerals don't trigger this option. The body-part semantics (feet, teeth, heads) may underlie this specialized rule."
        }
    },
    "62198": {
        "en": {
            "simple": "The word @deva[सक्थ] 'thigh' optionally gets final-syllable accent when not preceded by a word ending in @deva[क्र]. Examples: @deva[गौरसक्थः] or @deva[गौरसक्थः] 'fair-thighed', @deva[श्लक्ष्णसक्थः] or @deva[श्लक्ष्णसक्थः] 'smooth-thighed'. After @deva[क्र]-ending: @deva[चक्रसक्थः] (always final accent by @deva[षच्] @ref[5.4.113]).",
            "standard": "Optional अन्त्योदात्त for समासान्त @deva[सक्थ] (← @deva[सक्थि] by @ref[5.4.113]) when not preceded by @deva[क्र]-final words: @deva[गौरसक्थः] or @deva[गौरसक्थः], @deva[श्लक्ष्णसक्थः] or @deva[श्लक्ष्णसक्थः]. The words @deva[गौर] (प्रज्ञादि @deva[अण्]) and @deva[श्लक्ष्ण] (@deva[कस्न], Uṇādi III.19) are अन्त्योदात्त. After @deva[क्र]-ending words: @deva[चक्रसक्थः] always final accent (formed by @deva[षच्] @ref[5.4.113], a चित् affix).",
            "advanced": "The अक्रान्त condition distinguishes @deva[क्र]-final पूर्वपद (where @deva[षच्] चित्-affix applies) from other पूर्वपद (where विभाषा operates). The @deva[सक्थि] → @deva[सक्थ] change by @ref[5.4.113] is समासान्त. The @deva[गौर]/श्लक्ष्ण] examples show that inherently अन्त्योदात्त पूर्वपद can optionally transfer or retain accent."
        }
    },
    "62199": {
        "en": {
            "simple": "In Vedic, the second member (and other compound elements) show diverse accent patterns. A verse summarizes: the second member's first syllable, last syllable, the first member's last syllable, and the first member's first syllable—all are seen. Much variation occurs.",
            "standard": "In छन्दस् (Vedic), compound accent shows बहुल (multiple) patterns. The kārikā states: परादि (second-member-initial), परान्त (second-member-final), पूर्वान्त (first-member-final), पूर्वादि (first-member-initial)—all are seen. Thus @deva[अञ्चिसक्थम्] @deva[आलभेत] but @deva[लोमशसक्थः]; also @deva[ऋजुबाहुः], @deva[वाक्पतिः], @deva[चित्पतिः]. In non-Vedic, these last two would be final-acute by @ref[6.1.223].",
            "advanced": "The छान्दस बहुल principle allows Vedic texts to show any of four accent positions. The kārikā: @deva[परादिश्च] @deva[परान्तश्च] @deva[पूर्वान्तश्चापि] @deva[दृश्यते] | @deva[पूर्वादयश्च] @deva[दृश्यन्ते] @deva[व्यत्ययो] @deva[बहुलं] @deva[ततः] ॥ The @deva[पर] 'second member' extends to @deva[सक्थ] and other words generally. Vedic license supersedes classical rules."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.181-6.2.199)")
