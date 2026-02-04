#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.3.1-15."""

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
        "53001": {
            "en": {
                "simple": "The affixes taught from this sūtra up to @ref[5.3.27] (exclusive) are called @deva[विभक्ति] (case-like suffixes). These affixes do not change the meaning of the base—they simply add a locative or ablative sense to pronouns.",
                "standard": "The @deva[प्राग्दिशीय] affixes taught from this sūtra through @ref[5.3.26] are called @deva[विभक्ति]. The term @deva[प्राक्] (before) + @deva[दिशः] (direction) gives @deva[प्राग्दिशीय], meaning 'affixes before the direction-sūtra.' These are @deva[स्वार्थिक] (same-meaning) affixes—they don't change the base meaning but add locative or ablative sense.",
                "advanced": "The @deva[प्राग्दिशीय] affixes from @ref[5.3.1] to @ref[5.3.26] are designated @deva[विभक्ति] by this @deva[संज्ञासूत्र]. The term @deva[प्राग्दिशीय] is derived as @deva[प्राक् दिशः] → @deva[प्राग्दिश्] → @deva[प्राग्दिशीय] (affixes before @ref[5.3.27] @deva[दिक्शब्देभ्यः]). The @deva[विभक्ति] designation by @ref[1.1.72] @deva[येन विधिस्तदन्तस्य] extends to the entire stem+affix combination, enabling further operations."
            }
        },
        "53002": {
            "en": {
                "simple": "These @deva[प्राग्दिशीय] affixes come after @deva[किम्] (what), @deva[सर्वनामन्] pronouns, and @deva[बहु] (many)—but not after @deva[द्वि] (two) etc., even though @deva[द्वि] is also classified as @deva[सर्वनामन्].",
                "standard": "The @deva[प्राग्दिशीय] affixes apply after @deva[किम्], words called @deva[सर्वनामन्], and @deva[बहु]. However, @deva[द्वि] and similar numerals, though technically @deva[सर्वनामन्] by @ref[1.1.27], are excluded. The word @deva[बहु] is separately mentioned because it takes affixes in both singular and plural, unlike regular pronouns.",
                "advanced": "The three bases—@deva[किम्], @deva[सर्वनामन्], and @deva[बहु]—are the @deva[प्रकृति] for @deva[प्राग्दिशीय] affixes. Although @deva[द्वि] etc. are @deva[सर्वनामन्] by @ref[1.1.27] @deva[सर्वादीनि सर्वनामानि], they are excluded here. The separate mention of @deva[बहु] allows forms like @deva[बहुत्र] (singular) alongside @deva[बहुषु] (plural), whereas @deva[तत्र] etc. occur only singularly."
            }
        },
        "53003": {
            "en": {
                "simple": "@deva[इदम्] (this) becomes @deva[इ] when a @deva[प्राग्दिशीय] affix follows. For example, @deva[इदम्] + @deva[ह] → @deva[इह] (here).",
                "standard": "The substitute @deva[इश्] replaces @deva[इदम्] before @deva[प्राग्दिशीय] affixes. The @deva[श्] is @deva[इत्] (marker) indicating @deva[सर्वादेश] (whole-word replacement) by @ref[1.1.55]. Thus @deva[इदम्] + @deva[ह] → @deva[इ] + @deva[ह] → @deva[इह] (here).",
                "advanced": "The @deva[आदेश] @deva[इश्] replaces @deva[इदम्] when @deva[प्राग्दिशीय] affixes follow. The @deva[शकार] is @deva[इत्] by @ref[1.3.8] @deva[लशक्वतद्धिते], triggering @deva[सर्वादेश] via @ref[1.1.55] @deva[अनेकाल्शित्सर्वस्य]. This yields @deva[इह] from @deva[इदम्] + @deva[ह], and @deva[इतः] from @deva[इदम्] + @deva[तसिल्]."
            }
        },
        "53004": {
            "en": {
                "simple": "@deva[इदम्] becomes @deva[एत] before affixes starting with @deva[र], and @deva[इत] before affixes starting with @deva[थ]. So @deva[इदम्] + @deva[र्हिल्] → @deva[एतर्हि] (now).",
                "standard": "The substitutes @deva[एत] and @deva[इत] replace @deva[इदम्] before @deva[प्राग्दिशीय] affixes beginning with @deva[र] and @deva[थ] respectively. This blocks the general substitute @deva[इश्] from @ref[5.3.3]. Example: @deva[इदम्] + @deva[र्हिल्] → @deva[एतर्हि] (at this time, now).",
                "advanced": "Before @deva[रादि] (र-initial) @deva[प्राग्दिशीय] affixes, @deva[इदम्] → @deva[एत]; before @deva[थादि] (थ-initial), @deva[इदम्] → @deva[इत]. This is @deva[अपवाद] to @ref[5.3.3]. The final @deva[अ] in @deva[एत]/deva[इत] is @deva[उच्चारणार्थ] (for pronunciation), not part of the substitute. Thus @deva[इदम्] + @deva[र्हिल्] → @deva[एतर्हि]; @deva[इदम्] + @deva[था] → @deva[इतिथा] (rarely used)."
            }
        },
        "53005": {
            "en": {
                "simple": "@deva[एतद्] (that) becomes @deva[अ] when a @deva[प्राग्दिशीय] affix follows. For example, @deva[एतद्] + @deva[त्र] → @deva[अत्र] (there).",
                "standard": "The substitute @deva[अश्] replaces @deva[एतद्] before @deva[प्राग्दिशीय] affixes. The @deva[श्] marks @deva[सर्वादेश] by @ref[1.1.55]. Thus @deva[एतद्] + @deva[त्रल्] → @deva[अत्र] (there); @deva[एतद्] + @deva[तसिल्] → @deva[अतः] (from there).",
                "advanced": "The @deva[आदेश] @deva[अश्] replaces @deva[एतद्] before @deva[प्राग्दिशीय] affixes. By @ref[1.1.55], the @deva[शित्] marker triggers @deva[सर्वादेश]. According to Patañjali, @deva[एतद्] alone undergoes this substitution, not @deva[एत] (which is itself a substitute for @deva[इदम्]). This yields @deva[अत्र], @deva[अतः], @deva[अदा] etc."
            }
        },
        "53006": {
            "en": {
                "simple": "@deva[सर्व] (all) optionally becomes @deva[स] before @deva[प्राग्दिशीय] affixes starting with @deva[द]. So we get both @deva[सर्वदा] and @deva[सदा] (always).",
                "standard": "The substitute @deva[स] optionally replaces @deva[सर्व] before @deva[द]-initial @deva[प्राग्दिशीय] affixes. This gives doublets: @deva[सर्वदा] ~ @deva[सदा] (always). When the affix is not @deva[प्राग्दिशीय], only @deva[सर्वदा] occurs.",
                "advanced": "Before @deva[दादि] @deva[प्राग्दिशीय] affixes, @deva[सर्व] → @deva[स] is @deva[विकल्प]. This produces @deva[सदा]/deva[सर्वदा]. The substitution is restricted to @deva[प्राग्दिशीय] @deva[दकारादि] affixes only—the @deva[दा] of @deva[सर्वदा] 'giving everything' (from √@deva[दा]) does not trigger this rule since it is @deva[कृत्], not @deva[प्राग्दिशीय]."
            }
        },
        "53007": {
            "en": {
                "simple": "The affix @deva[तसिल्] (becoming @deva[तस्]) comes after @deva[किम्], pronouns, and @deva[बहु] when ablative (fifth case) sense is meant. Examples: @deva[कुतः] (from where), @deva[ततः] (from there), @deva[यतः] (from which).",
                "standard": "The affix @deva[तसिल्] is added after @deva[किम्], @deva[सर्वनामन्], and @deva[बहु] in ablative sense. The @deva[इल्] is @deva[इत्], leaving @deva[तस्]. By @ref[7.2.102-104], stem changes occur: @deva[किम्] → @deva[कु] → @deva[कुतः]; @deva[तद्] → @deva[त] → @deva[ततः]; @deva[यद्] → @deva[य] → @deva[यतः].",
                "advanced": "The affix @deva[तसिल्] attaches to @deva[किम्], @deva[सर्वनामन्], and @deva[बहु] when @deva[पञ्चमी] (ablative) sense is expressed. The @deva[इल्] is @deva[इत्] by @ref[1.3.3], and @deva[सिल्] indicates @deva[सर्वादेश] of @deva[सुप्] by @ref[1.1.63]. Stem modifications: @deva[किम्] → @deva[कु] by @ref[7.2.104]; @deva[तद्]/deva[यद्] → @deva[त]/deva[य] by @ref[7.2.102-103]. Results: @deva[कुतः], @deva[ततः], @deva[यतः], @deva[सर्वतः], @deva[बहुतः]."
            }
        },
        "53008": {
            "en": {
                "simple": "The affix @deva[तसिल्] also replaces the @deva[तस्] taught in @ref[5.4.44-45] when following @deva[किम्], pronouns, or @deva[बहु]. This ensures these forms receive the @deva[विभक्ति] designation.",
                "standard": "The affix @deva[तसिल्] substitutes for @deva[तस्] from @ref[5.4.44] @deva[प्रतियोगे पञ्चम्यास्तसिः] and @ref[5.4.45] @deva[अपादाने चाहीयरुहोः] when following @deva[किम्], @deva[सर्वनामन्], or @deva[बहु]. This substitution ensures accent rules and @deva[विभक्ति] designation apply.",
                "advanced": "This @deva[आदेश] of @deva[तसिल्] for @deva[तस्] (@ref[5.4.44-45]) serves two purposes: (1) accent—@deva[तसिल्] being @deva[प्राग्दिशीय] carries specific @deva[स्वर] properties, and (2) @deva[संज्ञा]—the @deva[विभक्ति] designation from @ref[5.3.1] applies. The substitution is conditioned on @deva[किम्]/deva[सर्वनामन्]/deva[बहु] as base."
            }
        },
        "53009": {
            "en": {
                "simple": "The affix @deva[तसिल्] also comes after @deva[परि] (all around) and @deva[अभि] (on both sides). Examples: @deva[परितः] (all around), @deva[अभितः] (on both sides).",
                "standard": "The affix @deva[तसिल्] attaches to @deva[परि] (meaning 'all') and @deva[अभि] (meaning 'both sides'). This extends beyond the @deva[किम्]/deva[सर्वनामन्]/deva[बहु] scope of @ref[5.3.7]. Examples: @deva[परितः] = @deva[सर्वतः] (all round); @deva[अभितः] (on both sides).",
                "advanced": "The @deva[चकार] in this sūtra extends @deva[तसिल्] beyond the three bases of @ref[5.3.7] to include @deva[परि] and @deva[अभि]. Semantically, @deva[परि] here means @deva[सर्व] (totality), and @deva[अभि] means @deva[उभय] (duality). Thus @deva[ग्रामं परितः] = 'all around the village'; @deva[ग्रामम् अभितः] = 'on both sides of the village'."
            }
        },
        "53010": {
            "en": {
                "simple": "The affix @deva[त्रल्] comes after @deva[किम्], pronouns, and @deva[बहु] when locative (seventh case) sense is meant. Examples: @deva[कुत्र] (where), @deva[तत्र] (there), @deva[बहुत्र] (in many places).",
                "standard": "The affix @deva[त्रल्] is added after @deva[किम्], @deva[सर्वनामन्], and @deva[बहु] in locative sense. The @deva[ल्] is @deva[इत्], leaving @deva[त्र]. Stem changes by @ref[7.2.102-104]: @deva[कुत्र] (where), @deva[तत्र] (there), @deva[यत्र] (where/which), @deva[सर्वत्र] (everywhere), @deva[बहुत्र] (in many places).",
                "advanced": "The affix @deva[त्रल्] with @deva[लकार इत्] attaches to @deva[किम्], @deva[सर्वनामन्], and @deva[बहु] for @deva[सप्तमी] (locative) sense. Being @deva[प्राग्दिशीय], it receives @deva[विभक्ति] @deva[संज्ञा]. The @deva[त्र] replaces the entire @deva[सुप्] by @ref[1.1.63] @deva[सुप्तिङन्तं पदम्]. Stem modifications follow @ref[7.2.102-104] as with @deva[तसिल्]."
            }
        },
        "53011": {
            "en": {
                "simple": "The affix @deva[ह] comes after @deva[इदम्] (this) in locative sense, blocking @deva[त्रल्]. Example: @deva[इदम्] + @deva[ह] → @deva[इह] (here).",
                "standard": "The affix @deva[ह] replaces @deva[त्रल्] after @deva[इदम्] in locative sense. By @ref[5.3.3], @deva[इदम्] → @deva[इ], giving @deva[इह] (here). This @deva[ह] is an @deva[अपवाद] (exception) to the general @deva[त्रल्] rule @ref[5.3.10].",
                "advanced": "The affix @deva[ह] is @deva[अपवाद] to @deva[त्रल्] specifically after @deva[इदम्] in @deva[सप्तम्यर्थ]. The base undergoes @deva[इश्]-substitution by @ref[5.3.3]: @deva[इदम्] → @deva[इ] + @deva[ह] → @deva[इह]. Since @deva[ह] is @deva[प्राग्दिशीय], it bears @deva[विभक्ति] @deva[संज्ञा] and the operations thereof."
            }
        },
        "53012": {
            "en": {
                "simple": "The affix @deva[अत्] comes after @deva[किम्] in locative sense, blocking @deva[त्रल्]. By @ref[7.2.105], @deva[किम्] → @deva[क्व], giving @deva[क्व] (where).",
                "standard": "The affix @deva[अत्] (@deva[अ] after @deva[त्] drops) replaces @deva[त्रल्] after @deva[किम्] in locative sense. By @ref[7.2.105], @deva[किम्] + @deva[अत्] → @deva[क्व] + @deva[अ] → @deva[क्व] (where). The final @deva[अ] merges by @deva[सवर्णदीर्घ].",
                "advanced": "The affix @deva[अत्] is @deva[अपवाद] to @deva[त्रल्] after @deva[किम्] in @deva[सप्तम्यर्थ]. The @deva[तकार] is @deva[इत्] by @ref[1.3.3]. By @ref[7.2.105] @deva[किमः क्वः], @deva[किम्] → @deva[क्व] before vowel-initial @deva[प्राग्दिशीय]. Result: @deva[क्व] + @deva[अ] → @deva[क्वा̆] → @deva[क्व] (with @deva[प्लुतः] optionally in sentence-final position)."
            }
        },
        "53013": {
            "en": {
                "simple": "In Vedic usage, the affix @deva[ह] optionally comes after @deva[किम्] in locative sense. So both @deva[कुह] and @deva[कुत्र] (where) are found in the Vedas.",
                "standard": "In @deva[छन्दस्] (Vedic texts), the affix @deva[ह] optionally comes after @deva[किम्] in locative sense alongside other affixes. By @ref[7.2.104], @deva[किम्] → @deva[कु], giving @deva[कुह] (where). Both @deva[कुह], @deva[क्व], and @deva[कुत्र] appear in Vedic literature.",
                "advanced": "This @deva[छन्दस्] rule allows @deva[ह] after @deva[किम्] in @deva[सप्तम्यर्थ] as @deva[विकल्प] with @deva[अत्] and @deva[त्रल्]. The @deva[कु]-@deva[आदेश] applies by @ref[7.2.104]. Vedic forms: @deva[कुह] (with @deva[ह]), @deva[क्व] (with @deva[अत्]), @deva[कुत्र] (with @deva[त्रल्]). The multiplicity reflects @deva[छान्दस] license."
            }
        },
        "53014": {
            "en": {
                "simple": "These @deva[प्राग्दिशीय] affixes are also seen after @deva[किम्], pronouns, and @deva[बहु] with case-meanings other than just locative and ablative. This accounts for exceptional Vedic and irregular forms.",
                "standard": "The @deva[प्राग्दिशीय] affixes appear after @deva[किम्], @deva[सर्वनामन्], and @deva[बहु] with case-meanings beyond the seventh (locative) and fifth (ablative). This is an @deva[उपसंख्यान] (supplementary rule) accounting for usages like @deva[भवत्त्रयम्] etc.",
                "advanced": "This @deva[उपसंख्यान] extends the @deva[प्राग्दिशीय] domain to @deva[विभक्ति]-senses beyond @deva[सप्तमी]/deva[पञ्चमी]. Forms like @deva[भवत्त्रयम्] 'your three' show @deva[त्रय] after honorific @deva[भवत्]. The rule legitimizes @deva[आर्ष] (archaic) and @deva[प्रयोगदर्शन] (usage-based) forms outside the standard @deva[विधि]."
            }
        },
        "53015": {
            "en": {
                "simple": "The affix @deva[दा] comes after @deva[सर्व], @deva[एक], @deva[अन्य], @deva[किम्], @deva[यद्], and @deva[तद्] when time is meant. Examples: @deva[सर्वदा] (always), @deva[एकदा] (once), @deva[कदा] (when), @deva[यदा] (when), @deva[तदा] (then).",
                "standard": "The affix @deva[दा] is added after @deva[सर्व], @deva[एक], @deva[अन्य], @deva[किम्], @deva[यद्], and @deva[तद्] to denote time. These words remain uninflected (@deva[अव्यय]). Examples: @deva[सर्वदा] (always), @deva[एकदा] (once), @deva[अन्यदा] (at another time), @deva[कदा] (when), @deva[यदा] (when), @deva[तदा] (then).",
                "advanced": "The affix @deva[दा] attaches to six specified bases in @deva[कालार्थ] (time-meaning). The resulting @deva[तद्धितान्त] words are @deva[अव्यय] by @ref[1.1.38] @deva[तद्धितश्चासर्वविभक्तिः]. Stem changes: @deva[किम्] → @deva[क] by @ref[7.2.103]; @deva[तद्]/deva[यद्] → @deva[त]/deva[य] by @ref[7.2.102]. Being @deva[प्राग्दिशीय], @deva[दा] receives @deva[विभक्ति] @deva[संज्ञा]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.3.1-15)")

if __name__ == "__main__":
    main()
