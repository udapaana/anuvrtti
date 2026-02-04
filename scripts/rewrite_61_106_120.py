#!/usr/bin/env python3
"""Rewrite commentary for 6.1.106-120 (pūrvarūpa and Vedic retention rules)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61106": {
        "en": {
            "simple": "In Vedic literature, when @deva[इ], @deva[उ], @deva[ऋ], or @deva[ऌ] is followed by a similar vowel, the long vowel substitute is optional rather than required. So @deva[मरुत् + ईः] can become either @deva[मारुतीः] (with long @deva[ई]) or @deva[मारुत्यः] (with @deva[य्] + @deva[अः]).",
            "standard": "This sūtra provides a Vedic option (@deva[वा]) for the cases covered by @ref[6.1.101]-@ref[6.1.105]. Where Classical Sanskrit requires the long vowel substitute (@deva[सवर्णदीर्घ]), Vedic usage permits either the long substitute or the regular @deva[यण्] sandhi. Thus @deva[मरुत् + ईः] → @deva[मारुतीः] (long substitute) or @deva[मारुत्यः] (@deva[यण्] sandhi). Similarly @deva[पिण्डि + ईः] → @deva[पिण्डीः] or @deva[पिण्ड्यः].",
            "advanced": "The @deva[छन्दसि वा] indicates that Vedic texts preserve archaic flexibility in sandhi. The @deva[सवर्णदीर्घ] rules (@ref[6.1.101]-@ref[6.1.105]) are later standardizations; Vedic mantras often show @deva[यण्] sandhi where Classical grammar mandates coalescence. This explains variant readings in Saṃhitā texts. The option (@deva[विकल्प]) reflects the descriptive nature of Pāṇini's Vedic rules—documenting attested forms rather than prescribing a single outcome."
        }
    },
    "61107": {
        "en": {
            "simple": "When a simple vowel (@deva[अक्]) is followed by the @deva[अ] of the accusative ending @deva[अम्], the first vowel remains as the single substitute. So @deva[वृक्ष + अम्] becomes @deva[वृक्षम्], not @deva[वृक्षाम्].",
            "standard": "This sūtra establishes @deva[पूर्वरूप] (first-form retention) when a simple vowel (@deva[अक्] = @deva[अ इ उ ऋ ऌ]) is followed by the @deva[अ] of @deva[अम्] (accusative singular). The @deva[अक्] continues from @ref[6.1.101]. Thus @deva[वृक्ष + अम्] → @deva[वृक्षम्] where @deva[अ] absorbs the following @deva[अ] without lengthening. This prevents unwanted @deva[आ] in accusatives.",
            "standard": "This sūtra specifies @deva[पूर्वरूप] (retention of the first vowel as the single substitute) when any simple vowel (@deva[अक्] = @deva[अ इ उ ऋ ऌ]) is followed by the @deva[अ] of the accusative ending @deva[अम्]. The term @deva[अक्] continues from @ref[6.1.101]. Example: @deva[वृक्ष + अम्] → @deva[वृक्षम्], where the stem-final @deva[अ] absorbs the case-ending @deva[अ] without becoming @deva[आ].",
            "advanced": "This rule prevents @deva[सवर्णदीर्घ] (@ref[6.1.101]) from applying to accusative @deva[अम्]. Without this exception, @deva[अ + अ] would yield @deva[आ], producing incorrect forms like @deva[*वृक्षाम्]. The restriction to @deva[अमि] (locative of @deva[अम्]) is significant—it applies only when the @deva[अ] belongs to this specific case-affix, not to @deva[अ] in general. The @deva[एकादेश] here is @deva[पूर्वरूप], maintaining the stem vowel's quality."
        }
    },
    "61108": {
        "en": {
            "simple": "When a vowelized semivowel (@deva[य् इ उ ऋ ऌ] becoming a vowel through @deva[सम्प्रसारण]) is followed by another vowel, the first vowel is retained as the single substitute. So in @deva[इज्यते], the @deva[इ] (from @deva[य्]) combines with following @deva[अ] to give just @deva[इ].",
            "standard": "This sūtra applies @deva[पूर्वरूप] when a @deva[सम्प्रसारण] vowel (a semivowel that has become @deva[इ उ ऋ ऌ] per @ref[1.1.45]) is followed by any vowel. The @deva[पूर्व] (first) continues from the previous sūtra. When @deva[यज् + य] undergoes @deva[सम्प्रसारण] to @deva[इज् + य], then @deva[इ + अ] → @deva[इ] (not @deva[ए] or @deva[या]). Hence @deva[इज्यते] 'is sacrificed'.",
            "advanced": "The @deva[सम्प्रसारण] vowels have a special phonological status—they are underlying semivowels that surface as vowels in specific morphological contexts. When such a derived vowel meets a following vowel, @deva[पूर्वरूप] applies rather than the usual sandhi rules (@deva[गुण], @deva[वृद्धि], or @deva[यण्]). This preserves the morphological identity of the @deva[सम्प्रसारण] segment. The rule interacts with @ref[6.1.17] and the @deva[सम्प्रसारण] rules of @ref[6.1.13]-@ref[6.1.16]."
        }
    },
    "61109": {
        "en": {
            "simple": "When @deva[ए] or @deva[ओ] at the end of a word (@deva[पद]) is followed by short @deva[अ], the @deva[ए] or @deva[ओ] is retained and the @deva[अ] is dropped. So @deva[अग्ने + अत्र] becomes @deva[अग्नेऽत्र] (written with @deva[ऽ] showing the dropped @deva[अ]).",
            "standard": "This sūtra establishes @deva[पूर्वरूप] for @deva[पद]-final @deva[ए/ओ] followed by short @deva[अ]. The @deva[ए] or @deva[ओ] remains unchanged and the following @deva[अ] undergoes @deva[लोप] (deletion). The @deva[अवग्रह] sign (@deva[ऽ]) marks this elision in writing. Examples: @deva[अग्ने + अत्र] → @deva[अग्नेऽत्र]; @deva[विष्णो + अव] → @deva[विष्णोऽव]. This applies only at word boundaries (@deva[पदान्त]).",
            "advanced": "The term @deva[पदान्तात्] restricts this rule to word-final position, distinguishing it from @ref[6.1.110] which handles word-internal contexts. The @deva[पूर्वरूप एकादेश] here differs from typical coalescence—the first element is retained in toto while the second undergoes complete @deva[लोप]. The @deva[ह्रस्व] specification excludes long @deva[आ], which triggers different sandhi (@ref[6.1.88] @deva[वृद्धि]). This rule is essential for Vedic recitation and classical verse."
        }
    },
    "61110": {
        "en": {
            "simple": "When @deva[ए] or @deva[ओ] inside a word is followed by the @deva[अ] of the ablative or genitive singular ending @deva[अस्], the @deva[ए/ओ] is retained. So @deva[गो + अस्] becomes @deva[गोः] (genitive 'of a cow').",
            "standard": "This sūtra extends @deva[पूर्वरूप] to word-internal @deva[ए/ओ] followed by the @deva[अ] of @deva[अस्] (5th/6th case singular). Unlike @ref[6.1.109] which handles @deva[पद]-final contexts, this applies within the word during declension. Thus @deva[गो + अस्] → @deva[गोस्] → @deva[गोः] (with @deva[विसर्ग]). The @deva[अ] of @deva[अस्] is absorbed by the preceding @deva[ओ].",
            "advanced": "The specification @deva[ङसि] (ablative/genitive singular marker) restricts this @deva[पूर्वरूप] to a particular morphological context. This prevents overgeneralization—word-internal @deva[ए/ओ + अ] in other environments follows different rules. The interaction with @deva[विसर्ग] formation (@ref[8.3.15]) produces the final @deva[गोः]. Compare with @deva[पदान्त] rule @ref[6.1.109]: both yield @deva[पूर्वरूप], but operate at different morphological boundaries."
        }
    },
    "61111": {
        "en": {
            "simple": "When @deva[ऋ] is followed by the @deva[अ] of the ablative/genitive ending @deva[अस्], short @deva[उ] becomes the single substitute. So @deva[होतृ + अस्] becomes @deva[होतुः] (genitive 'of the invoker').",
            "standard": "This sūtra specifies that @deva[उ] (short) replaces the sequence @deva[ऋ + अ] when the @deva[अ] belongs to @deva[अस्] (ablative/genitive singular). This is a special @deva[एकादेश] rule overriding the expected @deva[अर्] (@ref[6.1.77]). Example: @deva[होतृ + अस्] → @deva[होतुर्] + @deva[स्] → @deva[होतुः]. The @deva[उ] combines with @deva[र्] to give @deva[उर्], then @deva[स्] becomes @deva[विसर्ग].",
            "advanced": "This rule creates a unique sandhi outcome for @deva[ऋ]-final stems in the ablative/genitive. The expected @deva[गुण] (@deva[ऋ + अ] → @deva[अर्]) is blocked in favor of @deva[उ]-substitution. The @deva[ह्रस्व] specification (@deva[उः]) indicates short @deva[उ], contrasting with potential @deva[ऊ]. The resultant @deva[उर्] + @deva[स्] → @deva[उः] involves @deva[रुत्व] (@ref[8.2.66]) and subsequent @deva[विसर्ग]. This paradigm is distinctive for agent nouns in @deva[तृ]."
        }
    },
    "61112": {
        "en": {
            "simple": "For @deva[सखि] ('friend') and @deva[पति] ('lord/husband'), when the final @deva[इ] becomes @deva[य्] before @deva[अस्], @deva[उ] substitutes for the @deva[अ]. So @deva[सखि] + @deva[अस्] → @deva[सख्युः] and @deva[पति] + @deva[अस्] → @deva[पत्युः].",
            "standard": "This sūtra provides the special genitive/ablative forms of @deva[सखि] and @deva[पति]. When the stem-final @deva[इ] becomes @deva[य्] (by @ref[6.1.77] @deva[इको यणचि]), the @deva[अ] of @deva[अस्] is replaced by @deva[उ]. Thus: @deva[सखि + अस्] → @deva[सख्य् + अस्] → @deva[सख्य् + उस्] → @deva[सख्युः]. Similarly @deva[पति + अस्] → @deva[पत्युः].",
            "advanced": "The condition @deva[यि च] ('when @deva[य्] is substituted for @deva[इ]') is crucial—the @deva[उ]-substitution depends on prior @deva[यण्]-sandhi. This creates a two-step derivation: first @deva[इ] → @deva[य्] before the vowel of @deva[अस्], then @deva[अ] → @deva[उ]. These forms are archaic remnants; @deva[सखि] and @deva[पति] show irregular declension patterns that Pāṇini accommodates through specific rules. Compare @deva[पत्युः] vs. regular @deva[कवेः]."
        }
    },
    "61113": {
        "en": {
            "simple": "When @deva[रु] (the @deva[र्] that replaces final @deva[स्]) has short @deva[अ] both before and after it, @deva[उ] becomes the substitute. So @deva[रामस् + अत्र] becomes @deva[रामोऽत्र] where @deva[अ + उ] → @deva[ओ].",
            "standard": "This sūtra handles sandhi involving @deva[रु]—the @deva[र्] + inherent @deva[उ] that replaces word-final @deva[स्] by @ref[8.2.66]. When non-@deva[प्लुत] (non-prolonged) @deva[अ] occurs both before and after @deva[रु], @deva[उ] is the single substitute. Thus @deva[रामस् + अत्र] → @deva[रामर् + अत्र] → @deva[राम + उ + अत्र] → @deva[रामोऽत्र] (with @deva[अ + उ] → @deva[ओ] by @deva[गुण]).",
            "advanced": "The technical sequence is: @deva[स्] → @deva[रु] (@ref[8.2.66]), then @deva[अ-रु-अ] → @deva[अ-उ-zero]. The @deva[अप्लुत] condition excludes @deva[प्लुत] (prolonged) vowels used in Vedic calling. The phrase @deva[पूर्वपरयोः] indicates both flanking vowels must be short @deva[अ]. This @deva[उ]-substitution then undergoes @deva[गुण] with the preceding @deva[अ] to yield @deva[ओ]. The subsequent @deva[अ] is elided, shown by @deva[अवग्रह]."
        }
    },
    "61114": {
        "en": {
            "simple": "When @deva[रु] has short @deva[अ] before it and is followed by a soft consonant (voiced stop, nasal, semivowel, or @deva[ह]), @deva[उ] substitutes for the @deva[रु]. So @deva[रामस् + गच्छति] becomes @deva[रामो गच्छति].",
            "standard": "This sūtra extends the @deva[उ]-substitution for @deva[रु] to contexts where a soft consonant (@deva[हशि] = voiced stops, nasals, semivowels, @deva[ह]) follows. The preceding @deva[अ] must be short and non-@deva[प्लुत]. Thus @deva[रामस् + गच्छति] → @deva[रामरु + गच्छति] → @deva[राम + उ + गच्छति] → @deva[रामो गच्छति]. The @deva[उ] combines with @deva[अ] by @deva[गुण] to give @deva[ओ].",
            "advanced": "The @deva[हश्] pratyāhāra includes all voiced consonants except @deva[ल्] (some include @deva[ल्]). This rule works in tandem with @ref[6.1.113]—both convert @deva[रु] to @deva[उ] under slightly different phonological conditions. The @deva[अप्लुत] restriction again excludes Vedic prolonged vowels. After @deva[उ]-substitution, standard @deva[गुण] sandhi (@ref[6.1.87]) applies, yielding @deva[ओ]. The @deva[रु] itself disappears entirely."
        }
    },
    "61115": {
        "en": {
            "simple": "In the middle of a Vedic verse, @deva[ए] or @deva[ओ] and the following @deva[अ] can both be kept separate (no sandhi) unless @deva[अ] is followed by @deva[ख्] or @deva[फ्]. So @deva[ते अग्नये] can remain as two syllables in the middle of a verse.",
            "standard": "This sūtra provides a Vedic exception: in the @deva[अर्धर्च] (half-verse/middle), @deva[ए/ओ] and the following @deva[अ] retain their original forms (@deva[प्रकृतिभाव])—no @deva[पूर्वरूप] sandhi applies. This preserves meter. The exception is when @deva[अ] is followed by @deva[खफ्] (aspirated voiceless stops @deva[ख्] or @deva[फ्]), where sandhi still applies.",
            "advanced": "The @deva[अर्धर्चः पदवत्] principle treats the verse-middle as having @deva[पद]-like boundaries. The @deva[प्रकृतिभाव] (retention of original form) is a Vedic license for metrical preservation. The @deva[खफोः] exception suggests these consonant clusters historically resisted hiatus. This rule interacts with Vedic recitation traditions (@deva[शाखा]-specific practices) and reflects the descriptive cataloging of attested forms in Vedic literature."
        }
    },
    "61116": {
        "en": {
            "simple": "In the middle of a Vedic verse, @deva[ए] or @deva[ओ] retains its form before certain words beginning with @deva[अव्] or @deva[अय्]: specifically before @deva[वाम], @deva[वस्], @deva[वः], @deva[यः], and @deva[यम्]. So @deva[ते अवाम] stays unsandhi-ed.",
            "standard": "This sūtra lists specific words where @deva[प्रकृतिभाव] applies in mid-verse even though the @deva[अ] is followed by @deva[व्] or @deva[य्]. The words are @deva[अवाम्], @deva[अवस्], @deva[अवः], @deva[अयः], and @deva[अयम्]. These retain hiatus: @deva[ए/ओ] remains unchanged and the following @deva[अ] is preserved. This is a Vedic metrical license.",
            "advanced": "This rule carves out exceptions to @ref[6.1.115]. While @ref[6.1.115] allows @deva[प्रकृतिभाव] generally in mid-verse, one might expect @deva[य्/व्] following @deva[अ] to trigger different treatment. This sūtra confirms that even with these semivowel-initial continuations, the listed words preserve hiatus. The specific vocabulary suggests these forms were metrically significant in attested Vedic passages."
        }
    },
    "61117": {
        "en": {
            "simple": "In the Yajurveda, the word @deva[उरस्] (when in the form @deva[उरो]) keeps its @deva[ओ] unchanged before short @deva[अ], and the @deva[अ] is also kept. So @deva[उरो अन्तरिक्षम्] stays as two separate words.",
            "standard": "This sūtra provides a Yajurveda-specific @deva[प्रकृतिभाव] for @deva[उरो] (from @deva[उरस्] 'chest') followed by short @deva[अ]. Both vowels retain their original forms—no sandhi applies. The example @deva[उरो अन्तरिक्षम्] shows the hiatus preserved. This reflects actual Yajurveda text readings.",
            "advanced": "The @deva[यजुषि] domain restriction marks this as a @deva[शाखा]-specific rule. The phrase @deva[उरसः उरो] indicates the particular sandhi form of @deva[उरस्] (with @deva[स्] → @deva[ओ] via @deva[रुत्व] and @deva[उत्व]). The @deva[प्रकृतिभाव] preserves both the @deva[ओ] and the following @deva[अ], maintaining a hiatus that would normally be resolved. Such rules document variant readings across Vedic recensions."
        }
    },
    "61118": {
        "en": {
            "simple": "In the Yajurveda, the short @deva[अ] is preserved (not absorbed) after @deva[आपो], @deva[जुषाणो], @deva[वृष्णो], @deva[वर्षिष्ठे], and in @deva[अम्बे अम्बाले] before @deva[अम्बिके]. So these maintain hiatus in Yajurveda recitation.",
            "standard": "This sūtra lists specific Yajurveda contexts where @deva[प्रकृतिभाव] applies—the short @deva[अ] following @deva[ए/ओ] is retained rather than undergoing @deva[पूर्वरूप] sandhi. The words include: @deva[आपो + अ...], @deva[जुषाणो + अ...], @deva[वृष्णो + अ...], @deva[वर्षिष्ठे + अ...], and the sequence @deva[अम्बे अम्बाले + अम्बिके].",
            "advanced": "These are lexically specified @deva[प्रकृतिभाव] contexts in Yajurveda Saṃhitā passages. The list reflects actual textual occurrences where hiatus is preserved in the transmitted tradition. The @deva[अम्बे अम्बाले अम्बिके] sequence is from a specific mantra. Such rules serve as a phonological annotation of the Vedic text, ensuring correct recitation according to the Yajurveda tradition."
        }
    },
    "61119": {
        "en": {
            "simple": "In the Yajurveda, when @deva[अङ्गे] is followed by @deva[अङ्गे], both the @deva[ए] and the following @deva[अ] are preserved. So the phrase @deva[अङ्गे अङ्गे] maintains the hiatus.",
            "standard": "This sūtra specifies that in Yajurveda, the sequence @deva[अङ्गे + अङ्गे] ('in limb, in limb' / 'in every limb') preserves @deva[प्रकृतिभाव]. The @deva[ए] of the first @deva[अङ्गे] and the @deva[अ] of the second are both retained—no @deva[पूर्वरूप] sandhi. Example: @deva[ऐन्द्रः प्राणः अङ्गेऽङ्गे] may appear unsandhi-ed.",
            "advanced": "The reduplication @deva[अङ्गे अङ्गे] is a distributive expression meaning 'in each and every limb.' The @deva[प्रकृतिभाव] here may be motivated by semantic and rhythmic considerations—maintaining the distinct iteration. The @deva[यजुषि] restriction confirms this is Yajurveda-specific. Such rules preserve ancient recitation practices distinct from Classical sandhi norms."
        }
    },
    "61120": {
        "en": {
            "simple": "In the Yajurveda, when an @deva[अनुदात्त] (unaccented) @deva[अ] is followed by a guttural (@deva[क]-class) or @deva[ध], the preceding @deva[ए/ओ] and this @deva[अ] both retain their forms. So in certain accented passages, hiatus is preserved.",
            "standard": "This sūtra provides another Yajurveda @deva[प्रकृतिभाव] rule: when an @deva[अनुदात्त] (low-toned) @deva[अ] is followed by a guttural consonant (@deva[क्]-@deva[ङ्]) or @deva[ध्], the preceding @deva[ए/ओ] and this @deva[अ] retain original forms. The accentual condition (@deva[अनुदात्त]) ties this to specific Vedic tonal contexts.",
            "advanced": "The specification @deva[कवर्गे धकारे च] indicates gutturals and specifically @deva[ध्] (not all dentals). The @deva[अनुदात्त] condition connects sandhi behavior to Vedic accent—a phonological feature absent in Classical Sanskrit. This rule reflects the interaction between tonal patterns and sandhi in Vedic recitation. The @deva[प्रकृतिभाव] preserves both segments, maintaining hiatus in metrically or tonally significant positions."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.106-6.1.120)")
