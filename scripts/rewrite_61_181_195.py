#!/usr/bin/env python3
"""Rewrite commentary for 6.1.181-195 (accent optionality, verbal accent rules)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61181": {
        "en": {
            "simple": "In Classical Sanskrit (@deva[भाषा]), the accent rule for numerals (@ref[6.1.179]-@ref[6.1.180]) is optional. The case endings after @deva[षट्], @deva[त्रि], and @deva[चतुर्] may or may not take the penultimate accent.",
            "standard": "This sūtra makes @ref[6.1.179]-@ref[6.1.180]'s numeral accent rules optional in @deva[भाषा] (Classical/secular language). The @deva[झलादि] (consonant-initial) case endings after @deva[षट्], @deva[त्रि], @deva[चतुर्] may have penultimate accent or not. Vedic strictly applies the rules; Classical allows variation.",
            "advanced": "The @deva[भाषायां विभाषा] indicates that Classical Sanskrit relaxes the mandatory numeral accent patterns. In Vedic, @ref[6.1.179]-@ref[6.1.180] apply strictly; in @deva[भाषा], either accented or unaccented endings are acceptable. This reflects the general loss of distinctive accent in Classical Sanskrit, where these rules become optional markers rather than obligatory features."
        }
    },
    "61182": {
        "en": {
            "simple": "The accent rules from @ref[6.1.168] onward don't apply to @deva[गो] ('cow'), @deva[श्वन्] ('dog'), or words ending in them. They also don't apply to stems that have @deva[नुट्] or @deva[अट्] augments before their nominative singular ending.",
            "standard": "This sūtra creates exceptions to @ref[6.1.168]-@ref[6.1.181]. The @deva[गो], @deva[श्वन्], and @deva[तदन्त] (stems ending in these) don't follow those accent rules. Additionally, stems with @deva[नुट्] or @deva[अट्] augments before @deva[सु] (nom. sg.) are excepted—these have their own accent patterns.",
            "advanced": "The @deva[गोश्वनि तदन्ते] exception removes @deva[गो], @deva[श्वन्], and their compounds from the @deva[तृतीयादि]-accent scope. The @deva[नुडटौ च सौ] condition excepts stems where @deva[नुट्] or @deva[अट्] intervenes before nominative @deva[सु]. These stems (like @deva[मघवन्], @deva[युवन्] with @deva[नुट्]) have independent accent rules. This @deva[अपवाद] (exception) prevents conflict with their established patterns."
        }
    },
    "61183": {
        "en": {
            "simple": "After @deva[दिव्] ('heaven/sky'), case endings beginning with @deva[भ्] or @deva[स्] are unaccented. So @deva[द्युभ्याम्] and @deva[द्युभिः] have accent on @deva[द्यु], not on the endings.",
            "standard": "This sūtra assigns @deva[अनुदात्त] (unaccented) status to @deva[भस्] (भ/स-initial) case endings after @deva[दिव्]. Examples: @deva[द्यु꣡भ्याम्], @deva[द्यु꣡भिः]—the stem retains accent, endings are unaccented. This overrides @ref[6.1.168] and @ref[6.1.171].",
            "advanced": "The @deva[भसि] specification targets @deva[भ्याम्/भिस्/भ्यस्] and @deva[सु]. After @deva[दिव्] (becoming @deva[द्यु] by @ref[6.1.131]), these endings lose accent. This creates @deva[द्यु꣡भिः], @deva[द्यु꣡षु] vs. expected @deva[द्युभि꣡ः]. The @deva[भसि] condition doesn't affect @deva[अजादि] (vowel-initial) endings, which follow other rules."
        }
    },
    "61184": {
        "en": {
            "simple": "After @deva[नृ] ('man'), case endings beginning with @deva[भ्] or @deva[स्] are optionally unaccented. So @deva[नृभिः] can be either @deva[नृ꣡भिः] (stem-accented) or @deva[नृभि꣡ः] (ending-accented).",
            "standard": "This sūtra provides optional @deva[अनुदात्त] for @deva[भस्]-initial endings after @deva[नृ]. The @deva[विभाषा] allows both patterns: @deva[नृ꣡भिः] (ending unaccented) or @deva[नृभि꣡ः] (ending accented by @ref[6.1.168]). Similarly @deva[नृभ्यः], @deva[नृभ्याम्], @deva[नृषु].",
            "advanced": "The @deva[नृञः] (ablative of @deva[नृ]) indicates the stem @deva[नृ] ('man'). The @deva[विभाषा] creates optionality between @ref[6.1.168]'s accent (ending-accent) and @ref[6.1.183]'s pattern (stem-accent). Both @deva[नृ꣡भिः] and @deva[नृभि꣡ः] are valid. This @deva[विकल्प] reflects variant accent traditions for this stem."
        }
    },
    "61185": {
        "en": {
            "simple": "An affix with indicatory @deva[त्] produces @deva[स्वरित] (circumflex) accent. So @deva[यत्] (affix) gives @deva[चिकीर्ष्य॑म्] ('desirable to do') with circumflex on the affix syllable.",
            "standard": "This sūtra assigns @deva[स्वरित] (circumflex) to @deva[तित्] affixes (those with @deva[त्] as @deva[इत्]). Examples: @deva[यत्] (@ref[3.1.97]) → @deva[चिकी॒र्ष्य॑म्], @deva[जिही॒र्ष्य॑म्]; @deva[ण्यत्] → @deva[कार्य॑म्], @deva[हार्य॑म्]. The @deva[त्] marker indicates circumflex accent.",
            "advanced": "The @deva[तित्] marker class includes @deva[यत्], @deva[ण्यत्], @deva[क्यप्], and similar affixes. The @deva[स्वरित] accent is the 'mixed' or 'falling' tone, combining @deva[उदात्त] and @deva[अनुदात्त]. In Vedic recitation, @deva[स्वरित] syllables have a distinctive contour. Forms like @deva[कार्य॑म्] show the @deva[स्वरित] on the affix-containing syllable."
        }
    },
    "61186": {
        "en": {
            "simple": "The personal endings (verb terminations) and their substitutes are unaccented when they are @deva[सार्वधातुक] and follow the periphrastic future marker @deva[तास्], @deva[लिट्] (perfect), or the prohibitive @deva[माङ्].",
            "standard": "This sūtra assigns @deva[अनुदात्त] to @deva[सार्वधातुक] @deva[तिङ्] endings (and substitutes per @ref[3.2.124]-@ref[3.2.126]) after: (1) @deva[तास्] (periphrastic future), (2) @deva[लिट्] (perfect), (3) @deva[माङ्] (prohibitive particle). The endings lose their inherent accent in these contexts.",
            "advanced": "The @deva[तासिलिट्माङ्क्षु] domain includes three contexts: @deva[तास्] (लुट्-marker for periphrastic future), @deva[लिट्] (perfect tense), and @deva[माङ्] (prohibitive 'don't'). In all three, @deva[सार्वधातुक] @deva[तिङ्] (@ref[3.4.113]) and their @deva[आदेश] (@ref[3.2.124]-@ref[3.2.126]) become @deva[अनुदात्त]. This creates accent patterns like @deva[कर्ता꣡सि], @deva[चकार꣡], @deva[मा कार्षीः꣡]."
        }
    },
    "61187": {
        "en": {
            "simple": "In the @deva[सिच्] aorist, the first syllable may optionally have acute accent. So @deva[अकार्षीत्] ('he did') can be @deva[अ꣡कार्षीत्] with initial accent, or have accent elsewhere.",
            "standard": "This sūtra provides optional @deva[आद्युदात्त] (initial-syllable accent) for @deva[सिच्] aorist (@deva[लुङ्] with @deva[सिच्] marker). Forms like @deva[अकार्षीत्] can have @deva[अ꣡कार्षीत्] (first-syllable accent) optionally. The @deva[उदात्त] is understood from context.",
            "advanced": "The @deva[सिचि] condition targets @deva[लुङ्] forms with @deva[सिच्] (@ref[3.1.44]). The @deva[आदेः विभाषा] allows @deva[आद्युदात्त] as an option. Examples: @deva[मा हि का꣡र्ष्टाम्] (initial accent) vs. default accent. This optionality may reflect dialectal or stylistic variation in aorist accent patterns."
        }
    },
    "61188": {
        "en": {
            "simple": "The first syllable may optionally have acute accent when a @deva[सार्वधातुक] personal ending beginning with a vowel (not @deva[इट्]) follows a verb. So @deva[पचेत्] can be @deva[प꣡चेत्] or have accent elsewhere.",
            "standard": "This sūtra provides optional @deva[आद्युदात्त] when @deva[सार्वधातुक] @deva[तिङ्] begins with a vowel (excluding @deva[इट्] augment). The @deva[अजादौ] condition: endings like @deva[इ], @deva[ए], @deva[आ] (but not augment @deva[इट्]) trigger optional initial accent. Example: @deva[प꣡चेत्] or default @deva[पचे꣡त्].",
            "advanced": "The @deva[अजादौ अनिडि] restricts to vowel-initial @deva[सार्वधातुक] endings where the vowel isn't @deva[इट्] (@ref[7.2.35]). The @deva[तिङि] specifies personal endings. Forms like @deva[पचेत्], @deva[जुहोति] have optional @deva[आद्युदात्त]. The @deva[इट्] exclusion prevents applying this to augmented forms where @deva[इट्] creates the vowel-initial appearance."
        }
    },
    "61189": {
        "en": {
            "simple": "Reduplicated verbs have acute accent on the first syllable when followed by a vowel-initial @deva[सार्वधातुक] personal ending (the vowel not being @deva[नुट्]). So @deva[जु꣡होति] has initial accent.",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to reduplicated (@deva[द्वित्व]) verb forms before @deva[सार्वधातुक] @deva[अजादि] endings (excluding @deva[नुट्]-augmented forms). Examples: @deva[जु꣡होति], @deva[बि꣡भर्ति], @deva[दधा꣡ति]. The reduplication syllable (first) takes the @deva[उदात्त].",
            "advanced": "The @deva[द्विर्वचने] condition targets reduplicated stems (from @ref[6.1.1]-@ref[6.1.12]). The @deva[अजादौ अनुण्] specifies: vowel-initial @deva[सार्वधातुक] ending where the vowel isn't @deva[नुट्] (@ref[7.1.58]). The @deva[आद्युदात्त] falls on the @deva[अभ्यास] (reduplicated syllable). This covers @deva[जुहोत्यादि]-class verbs and reduplicated perfects."
        }
    },
    "61190": {
        "en": {
            "simple": "Reduplicated verbs have acute on the first syllable when followed by the unaccented singular personal endings (@deva[तिप्], @deva[सिप्], @deva[मिप्]). So @deva[जु꣡होति], @deva[जु꣡होषि], @deva[जु꣡होमि] all have initial accent.",
            "standard": "This sūtra extends @deva[आद्युदात्त] to reduplicated forms before @deva[अनुदात्त] singular endings @deva[तिप्/सिप्/मिप्] (3rd/2nd/1st person singular). Examples: @deva[जु꣡होति], @deva[जु꣡होषि], @deva[जु꣡होमि]. The singular @deva[परस्मैपद] endings trigger first-syllable accent.",
            "advanced": "The @deva[तिसिमि] (= @deva[तिप् सिप् मिप्]) are @deva[अनुदात्त] singular endings. After @deva[द्विर्वचन], these endings (unlike accented @deva[थस्/थ/मस्] etc.) allow the @deva[आद्युदात्त] pattern. This complements @ref[6.1.189]'s vowel-initial condition, covering consonant-initial singular endings. The reduplication syllable remains the accent locus."
        }
    },
    "61191": {
        "en": {
            "simple": "The word @deva[सर्व] ('all') has acute accent on the first syllable when case endings follow. So @deva[सर्वः], @deva[सर्वाः], @deva[सर्वे] are all accented @deva[स꣡र्वः], @deva[स꣡र्वाः], @deva[स꣡र्वे].",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[सर्व] ('all') before @deva[सुप्] (case endings). The first syllable @deva[सर्] takes @deva[उदात्त]: @deva[स꣡र्वः], @deva[स꣡र्वाः], @deva[स꣡र्वे]. Without case endings (in compound first position), different accent may apply: @deva[सर्वतः] etc.",
            "advanced": "The @deva[सुपि] condition restricts this to declined forms of @deva[सर्व]. The @deva[आद्युदात्त] applies: @deva[स꣡र्वः] (nom.), @deva[स꣡र्वम्] (acc.), etc. In @deva[समास] (compound) or @deva[तद्धित] contexts, @deva[सर्व] may show different accent: @deva[सर्वतः꣡] ('from all sides'). The @deva[सुपि] ensures this rule governs only case-inflected forms."
        }
    },
    "61192": {
        "en": {
            "simple": "The roots @deva[भी] ('fear'), @deva[ह्री] ('be ashamed'), @deva[भृ] ('bear'), @deva[हु] ('sacrifice'), and several others have acute accent on the first syllable (or their reduplicate) before @deva[सार्वधातुक] endings. So @deva[बि꣡भेति], @deva[जि꣡ह्रेति], @deva[बि꣡भर्ति].",
            "standard": "This sūtra lists roots with @deva[आद्युदात्त] before @deva[सार्वधातुक] endings: @deva[भी], @deva[ह्री], @deva[भृ], @deva[हु], @deva[मद्], @deva[जन्], @deva[धन्], @deva[दरिद्रा], @deva[जागृ]. Their reduplicated forms also show first-syllable accent. Examples: @deva[बि꣡भेति], @deva[जि꣡ह्रेति], @deva[बि꣡भर्ति], @deva[जु꣡होति].",
            "advanced": "The @deva[भीह्रीभृहुमद्जन्धन्दरिद्राजागृणां च] list specifies roots with @deva[आद्युदात्त] in @deva[सार्वधातुक] contexts. The @deva[द्विर्वचने च] extends this to their reduplicated stems. These roots (and reduplicates) place accent on the first syllable: @deva[बि꣡भेति], @deva[जि꣡ह्रेति], @deva[बि꣡भर्ति], @deva[जु꣡होति], @deva[म꣡त्ति], @deva[जा꣡यते], @deva[धा꣡न्यते], @deva[दा꣡रिद्र्यते], @deva[जा꣡गर्ति]."
        }
    },
    "61193": {
        "en": {
            "simple": "An affix with indicatory @deva[ल्] causes acute accent on the syllable immediately before it. So @deva[ण्वुल्] gives @deva[चिकी꣡र्षकः] with accent on the syllable before the affix.",
            "standard": "This sūtra assigns @deva[उदात्त] to the @deva[उपोत्तम] (penultimate/pre-affix) syllable when a @deva[लित्] affix follows. Example: @deva[ण्वुल्] (@ref[3.1.133]) → @deva[चिकी꣡र्षकः], @deva[जिही꣡र्षकः]. The @deva[ल्] marker indicates accent falls on the syllable just before the affix.",
            "advanced": "The @deva[लिति उपोत्तमम्] rule: @deva[लित्] affixes (with indicatory @deva[ल्]) trigger @deva[उदात्त] on the immediately preceding syllable. @deva[ण्वुल्] examples: @deva[चिकी꣡र्षकः] (accent on @deva[की]), @deva[जिही꣡र्षकः] (on @deva[ही]). The @deva[उपोत्तम] is the syllable right before the affix begins. This complements @deva[तित्] (@deva[स्वरित]) and @deva[कित्/चित्] (@deva[अन्तोदात्त]) markers."
        }
    },
    "61194": {
        "en": {
            "simple": "When the absolutive affix @deva[णमुल्] follows, the first syllable may optionally have acute accent. So @deva[लोलूयम्] ('repeatedly cutting') can be @deva[लो꣡लूयम्] or @deva[लोलू꣡यम्].",
            "standard": "This sūtra provides optional @deva[आद्युदात्त] before @deva[णमुल्] (absolutive affix @ref[3.4.21]). Example: @deva[लोलूयम्] can be @deva[लो꣡लूयम्] (first-syllable accent) or @deva[लोलू꣡यम्] (pre-affix accent by @ref[6.1.193]). The reduplicated stem @deva[लोलू] shows optional accent placement.",
            "advanced": "The @deva[णमुलि] context addresses @deva[णमुल्] (@ref[3.4.21]), which normally triggers @ref[6.1.193]'s @deva[लित्] accent (penultimate). This sūtra adds optional @deva[आद्युदात्त]. For @deva[लोलूयम्] (from @deva[लू] 'cut' with reduplication), either @deva[लो꣡लूयम्] (initial) or @deva[लोलू꣡यम्] (pre-affix) is valid. The optionality reflects variant accent traditions."
        }
    },
    "61195": {
        "en": {
            "simple": "Roots listed in the @deva[धातुपाठ] with a final vowel may optionally have acute on the first syllable before passive @deva[यक्], when the verb's subject is also the agent of feeling/perception. So @deva[ज्ञायते] ('is known/feels') can be @deva[ज्ञा꣡यते].",
            "standard": "This sūtra provides optional @deva[आद्युदात्त] for vowel-final roots (in @deva[धातुपाठ]) before @deva[यक्] (passive marker) when the meaning is @deva[भाव] (impersonal) or the subject is also the experiencer. Example: @deva[ज्ञायते] ('is known' or 'one feels/knows') → optional @deva[ज्ञा꣡यते].",
            "advanced": "The @deva[अजन्ताद्धातोः यकि कर्तर्यनुप्रयुज्यमाने] condition: (1) @deva[अजन्त] root (vowel-final in @deva[धातुपाठ]), (2) @deva[यक्] (passive @ref[3.1.67]), (3) @deva[कर्ता अनुप्रयुज्यमान] (agent is the experiencing subject). This covers @deva[भावे यक्] and middle-voice-like passives. Forms like @deva[ज्ञायते], @deva[श्रूयते] show optional @deva[आद्युदात्त]: @deva[ज्ञा꣡यते/ज्ञाय꣡ते]."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.181-6.1.195)")
