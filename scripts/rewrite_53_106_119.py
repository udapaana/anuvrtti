#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.3.106-119."""

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
        "53106": {
            "en": {
                "simple": "The affix @deva[छ] comes after a compound that already contains the sense of 'like' (@deva[इव]) when a further comparison is needed. Example: @deva[काकतालीयम्] (like the crow-and-palm-fruit coincidence—an unexpected event).",
                "standard": "The affix @deva[छ] (@deva[ईय]) attaches to compounds that inherently contain @deva[इव] (comparison) sense, when a second @deva[इव] is to be expressed. This implies that @deva[सुप्सुपा] (@ref[2.1.4]) compounds with hidden @deva[इव]-sense exist. Examples: @deva[काकतालीयम्] (like the crow killed by falling palm-fruit—an unexpected coincidence); @deva[अजाकृपाणीयम्] (like a goat accidentally killed by falling sword); @deva[अन्धकवर्तिकीयम्] (like a vulture accidentally caught by a blind man).",
                "advanced": "This @deva[जञापक] (indicatory rule) implies @deva[इवार्थ समास] exists under @deva[सुप्सुपा] (@ref[2.1.4]), though not explicitly taught. @deva[छ] applies when the compound (@deva[इवार्थविषय]) requires further comparison. @deva[काकताल] = the coincidence of crow + palm-fruit; @deva[काकतालीय] = an event resembling that coincidence. These express @deva[अतर्कित] (unexpected) and @deva[चित्रीकरण] (curious) coincidences."
            }
        },
        "53107": {
            "en": {
                "simple": "The affix @deva[अण्] comes after @deva[शर्करा] and similar words in the sense of 'like this.' Examples: @deva[शार्करम्] (gravel-like), @deva[कापालिकम्] (skull-like).",
                "standard": "The affix @deva[अण्] (@deva[अ] with @deva[वृद्धि]) attaches to @deva[शर्करादि] words expressing @deva[इव] (resemblance). Examples: @deva[शर्करेव] = @deva[शार्करम्] (like gravel); @deva[कापालिकम्] (skull-like). The class includes: @deva[शर्करा], @deva[कपालिका], @deva[कपाटिका], @deva[कनिष्ठिका], @deva[पुण्डरीक], @deva[शतपत्र], @deva[गोलोमन्], @deva[लोमन्], @deva[गोपुच्छ], @deva[नराची], @deva[नकुल], @deva[सिकता].",
                "advanced": "The @deva[शर्करादि] is a closed @deva[गण]. @deva[अण्] triggers @deva[वृद्धि] of the initial vowel: @deva[शर्करा] → @deva[शार्कर]; @deva[कपालिका] → @deva[कापालिक]. The class items relate to textures, shapes, and natural objects used for comparison."
            }
        },
        "53108": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after @deva[अङ्गुली] and similar words in the sense of 'like this.' Examples: @deva[आङ्गुलिकः] (finger-like), @deva[भारुजिकः].",
                "standard": "The affix @deva[ठक्] (@deva[इक]) attaches to @deva[अङ्गुल्यादि] words expressing @deva[इव] (resemblance). Examples: @deva[आङ्गुलिकः] (finger-like, = @deva[अङ्गुलीय]); @deva[भारुजिकः]. The class includes: @deva[अङ्गुलि], @deva[भरुज], @deva[बभ्रु], @deva[वल्गु], @deva[मण्डर], @deva[मण्डल], @deva[शष्कुली], @deva[हरि], @deva[कपि], @deva[मुनि], @deva[रुह], @deva[खल], @deva[उदश्वित्], @deva[गोणी], @deva[उरस्], @deva[कुलिश], @deva[शिखा].",
                "advanced": "The @deva[अङ्गुल्यादि] @deva[गण] takes @deva[ठक्] → @deva[इक] (or @deva[क] after certain finals per @ref[7.3.50-51]). @deva[वृद्धि] applies: @deva[अङ्गुलि] → @deva[आङ्गुलिक]. The class includes body parts, colors, and shapes used for comparison."
            }
        },
        "53109": {
            "en": {
                "simple": "The affix @deva[ठच्] also optionally comes after @deva[एकशाला] (one-roomed) in the sense of 'like this.' Examples: @deva[एकशालिकः] (with @deva[ठच्]) or @deva[ऐकशालिकः] (with @deva[ठक्]).",
                "standard": "The affix @deva[ठच्] (@deva[इक]) optionally attaches to @deva[एकशाला] (one-roomed/single-halled) expressing @deva[इव] (resemblance). This provides an alternative to @deva[ठक्]. Examples: @deva[एकशालिकः] (by @deva[ठच्], no @deva[वृद्धि]) or @deva[ऐकशालिकः] (by @deva[ठक्], with @deva[वृद्धि]).",
                "advanced": "This @deva[विकल्प] rule offers @deva[ठच्] alongside @deva[ठक्] for @deva[एकशाला]. @deva[ठच्] → @deva[इक] without @deva[वृद्धि]: @deva[एकशालिकः]. @deva[ठक्] → @deva[इक] with @deva[वृद्धि]: @deva[ऐकशालिकः]. Both express 'like a single-roomed structure.'"
            }
        },
        "53110": {
            "en": {
                "simple": "The affix @deva[ईकक्] (becoming @deva[ईक]) comes after @deva[कर्क] (white horse) and @deva[लोहित] (red) in the sense of 'like this.' Examples: @deva[कार्कीकः] (white-horse-like), @deva[लौहितीकः] (appearing red).",
                "standard": "The affix @deva[ईकक्] (@deva[ईक]) attaches to @deva[कर्क] and @deva[लोहित] expressing @deva[इव] (resemblance). Examples: @deva[कार्कीकः] (like @deva[कर्क], a white horse); @deva[लौहितीकः स्फटिकः] (a crystal that appears red due to reflection, though not itself red).",
                "advanced": "The affix @deva[ईकक्] → @deva[ईक] with @deva[वृद्धि]: @deva[कर्क] → @deva[कार्कीक]; @deva[लोहित] → @deva[लौहितीक]. The @deva[लौहितीक] example illustrates apparent resemblance: a transparent crystal appearing red through reflection."
            }
        },
        "53111": {
            "en": {
                "simple": "In Vedic, the affix @deva[थाल्] comes after @deva[प्रत्न] (ancient), @deva[पूर्व] (previous), @deva[विश्व] (all), and @deva[इम] (@deva[इदम्]) in the sense of 'like this.' Example: @deva[प्रत्नथा पूर्वथा विश्वथेमथा] (as the ancients, as predecessors, as all, as these).",
                "standard": "In @deva[छन्दस्] (Vedic), the affix @deva[थाल्] (@deva[था]) attaches to @deva[प्रत्न], @deva[पूर्व], @deva[विश्व], and @deva[इम] (= @deva[इदम्]) expressing @deva[इव] (resemblance/manner). Vedic example: @deva[तं प्रत्नथा पूर्वथा विश्वथेमथा ज्येष्ठताति बर्हिषदं स्वर्विदम्] (Ṛg Veda V.44.1)—'Him, as the ancients, as predecessors, as all beings, and as these living men have worshipped.'",
                "advanced": "This @deva[छन्दस्] rule extends @deva[थाल्] (@ref[5.3.23]) to four words in @deva[इवार्थ]. @deva[थाल्] → @deva[था]. Forms: @deva[प्रत्नथा] (as the ancients), @deva[पूर्वथा] (as predecessors), @deva[विश्वथा] (as all), @deva[इमथा] (as these). The Vedic citation shows all four in sequence."
            }
        },
        "53112": {
            "en": {
                "simple": "The affix @deva[ञ्य] comes after words denoting a @deva[पूग] (horde/guild of mixed castes), but not when derived from the leader's name. Examples: @deva[लौहध्वज्यः] (of the iron-banner horde), plural @deva[लौहध्वजाः].",
                "standard": "The @deva[स्वार्थिक] affix @deva[ञ्य] (@deva[य]) attaches to @deva[पूग] (horde of mixed castes seeking wealth) names, but not when derived from the leader's name. Examples: @deva[लौहध्वज्यः] (member of iron-banner horde), dual @deva[लौहध्वज्यौ], plural @deva[लौहध्वजाः] (affix elided by @ref[2.4.62]); @deva[शैब्यः], plural @deva[शिबयः]; @deva[चातक्यः], plural @deva[चातकाः]. Not: @deva[देवदत्तकाः] (named after leader Devadatta, by @ref[5.2.78]).",
                "advanced": "This begins the @deva[तद्राज] (king-denoting) affixes. @deva[पूग] = mixed-caste guild/horde. @deva[ञ्य] applies to horde-names not derived from leaders (@deva[अग्रामणीपूर्व]). In plural, the affix undergoes @deva[लुक्] by @ref[2.4.62]. @deva[ञ्य] also means 'leader of the horde.'"
            }
        },
        "53113": {
            "en": {
                "simple": "The affix @deva[ञ्य] comes after @deva[व्रात] (wild band) names ending in @deva[च्फञ्], but not in feminine. Examples: @deva[कपोतपाक्यः] (of the pigeon-eaters), plural @deva[कपोतपाकाः]; feminine @deva[कपोतपाकी] (no @deva[ञ्य]).",
                "standard": "The affix @deva[ञ्य] (@deva[य]) attaches to @deva[व्रात] (wild band living by violence) names ending in @deva[च्फञ्] (@ref[4.1.98]), but not in feminine (@deva[अस्त्रियाम्]). Examples: @deva[कपोतपाक्यः] (wild band living off pigeons), dual @deva[कपोतपाक्यौ], plural @deva[कपोतपाकाः]; @deva[व्रैहिमत्यः], plural @deva[व्रीहिमताः]. Feminines: @deva[कपोतपाकी], @deva[व्रीहिमती], @deva[कौञ्जायनी] (no @deva[ञ्य]).",
                "advanced": "The @deva[व्रात] = violent band of mixed castes. @deva[ञ्य] applies after @deva[च्फञ्]-ending patronymics when denoting such bands. @deva[अस्त्रियाम्] excludes feminines from taking @deva[ञ्य]—they retain the base form. Plural @deva[लुक्] by @ref[2.4.62]: @deva[कपोतपाकाः]."
            }
        },
        "53114": {
            "en": {
                "simple": "The affix @deva[ञ्यञ्] comes after warrior-class (@deva[आयुधजीविसंघ]) names among @deva[वाहीक] people, but not for Brāhmaṇas or @deva[राजन्य]. Examples: @deva[कौण्डीबृस्यः], plural @deva[कौण्डीबृसाः]; @deva[मालव्यः], plural @deva[मालवाः].",
                "standard": "The affix @deva[ञ्यञ्] (@deva[य]) attaches to @deva[आयुधजीविसंघ] (warrior-guild) names among @deva[वाहीक] people, excluding Brāhmaṇas and the word @deva[राजन्य]. The @deva[अस्त्रियाम्] restriction doesn't apply here. Examples: @deva[कौण्डीबृस्यः], dual @deva[कौण्डीबृस्यौ], plural @deva[कौण्डीबृसाः], feminine @deva[कौण्डीबृसी]; @deva[क्षौद्रक्यः], plural @deva[क्षुद्रकाः]; @deva[मालव्यः], plural @deva[मालवाः].",
                "advanced": "This applies to @deva[वाहीक] (northwestern) warrior-guilds (@deva[आयुधजीविसंघ]). Exclusions: @deva[ब्राह्मण] names (@deva[गोपालवा ब्राह्मणाः]); @deva[राजन्य] word-form (@deva[शालङ्कायना राजन्याः]). Unlike @ref[5.3.113], feminine is permitted here: @deva[कौण्डीबृसी], @deva[मालवी]."
            }
        },
        "53115": {
            "en": {
                "simple": "The affix @deva[टेण्यण्] comes after @deva[वृक] when it denotes a warrior-class. Example: @deva[वार्केण्यः], plural @deva[वृकाः], feminine @deva[वार्केणी]. Does not apply when @deva[वृक] means 'wolf.'",
                "standard": "The affix @deva[टेण्यण्] (@deva[एण्य]) attaches to @deva[वृक] when denoting a warrior-class (@deva[आयुधजीविसंघ]). Examples: @deva[वार्केण्यः] (of the Vṛka warriors), dual @deva[वार्केण्यौ], plural @deva[वृकाः], feminine @deva[वार्केणी]. Not when @deva[वृक] means 'wolf': @deva[कामक्रोधौ मनुष्याणां खादितारौ वृकाविव] (lust and anger devour men like wolves).",
                "advanced": "The @deva[टेण्यण्] → @deva[एण्य] with @deva[वृद्धि]: @deva[वृक] → @deva[वार्केण्य]. This is specific to the @deva[वृक] warrior-tribe. The @deva[वृक]-wolf meaning doesn't trigger this affix—that @deva[वृक] remains unchanged in compounds."
            }
        },
        "53116": {
            "en": {
                "simple": "The affix @deva[छ] comes after @deva[दामनि] and similar words, and after the six @deva[त्रिगर्त] warrior-clans. Examples: @deva[दामनीयः], plural @deva[दामनयः]; @deva[कौण्डोपरथीयः], plural @deva[कौण्डोपरथाः].",
                "standard": "The affix @deva[छ] (@deva[ईय]) attaches without changing sense to @deva[दामन्यादि] words and the six @deva[त्रिगर्त षष्ठ] (Trigarta warrior-clans). The six Trigarta clans are: @deva[कौण्डोपरथ], @deva[दाण्डकि], @deva[कौष्ठिक], @deva[जालमानि], @deva[ब्रह्मगुप्त], @deva[जानकि]. Examples: @deva[दामनीयः], plural @deva[दामनयः]; @deva[औलपीयः], plural @deva[उलपयः]; @deva[कौण्डोपरथीयः], plural @deva[कौण्डोपरथाः].",
                "advanced": "The @deva[दामन्यादि] is a listed @deva[गण] (24 items). The @deva[त्रिगर्तषष्ठ] are six warrior-clans of Trigarta region, enumerated in the Kārikā. @deva[छ] → @deva[ईय]. Plural @deva[लुक्] by @ref[2.4.62] removes the affix."
            }
        },
        "53117": {
            "en": {
                "simple": "The affix @deva[अण्] comes after @deva[पर्शु] and similar words; @deva[अञ्] comes after @deva[यौधेय] and similar words—for warrior-classes. Examples: @deva[पार्शवः], plural @deva[पर्शवः]; @deva[यौधेयः], plural @deva[यौधेयाः].",
                "standard": "The affix @deva[अण्] (@deva[अ]) attaches to @deva[पर्श्वादि] words, and @deva[अञ्] (@deva[अ]) to @deva[यौधेयादि] words, for warrior-class names without sense-change. @deva[पर्श्वादि] includes: @deva[पर्शु], @deva[असुर], @deva[रक्षस्], @deva[बाहीक], @deva[वयस्], @deva[वसु], @deva[मरुत्], etc. @deva[यौधेयादि] includes: @deva[यौधेय], @deva[कौशेय], @deva[शौक्रेय], @deva[त्रिगर्त], @deva[भरत], @deva[उशीनर], etc.",
                "advanced": "Two @deva[गण]s: @deva[पर्श्वादि] (12 items) takes @deva[अण्]; @deva[यौधेयादि] (12 items) takes @deva[अञ्]. Both trigger @deva[वृद्धि]: @deva[पर्शु] → @deva[पार्शव]; @deva[असुर] → @deva[आसुर]. See also @ref[5.1.178]. These are @deva[तद्राज] affixes for warrior-clan derivations."
            }
        },
        "53118": {
            "en": {
                "simple": "The affix @deva[यञ्] comes after @deva[अभिजित्] and six other words when they already end in patronymic @deva[अण्]. Examples: @deva[आभिजित्यः], plural @deva[आभिजिताः]; @deva[बैदभृत्यः], plural @deva[बैदभृताः].",
                "standard": "The affix @deva[यञ्] (@deva[य]) attaches to @deva[अभिजित्], @deva[बिदभृत्], @deva[शालावत्], @deva[शिखावत्], @deva[शामीवत्], @deva[ऊर्णावत्], and @deva[श्रुमत्] when these words already end in patronymic @deva[अण्]. The @deva[आयुधजीविसंघ] condition doesn't apply here. Examples: @deva[अभिजितोऽपत्यम्] = @deva[आभिजित्] + @deva[यञ्] → @deva[आभिजित्यः], plural @deva[आभिजिताः]; @deva[शालावत्यः], plural @deva[शालावताः].",
                "advanced": "This applies specifically when @deva[अण्] is @deva[गोत्र] (patronymic), not other @deva[अण्] uses. Contrast: @deva[आभिजिति मुहूर्तः] (@deva[अण्] by @ref[4.2.3] for @deva[नक्षत्र]-time) doesn't take @deva[यञ्]. The seven words listed take @deva[यञ्] after their patronymic @deva[अण्] derivatives."
            }
        },
        "53119": {
            "en": {
                "simple": "The affixes @deva[ञ्य] and others taught from @ref[5.3.112] onward are called @deva[तद्राज] (king-denoting affixes). This designation is used in @ref[2.4.62] for plural elision.",
                "standard": "The affixes starting from @deva[ञ्य] (@ref[5.3.112]) through the end of this section are designated @deva[तद्राज] (affixes denoting 'king thereof' or 'leader thereof'). This @deva[संज्ञा] (technical term) is referenced in @ref[2.4.62] @deva[तद्राजस्य बहुषु तेनैवास्त्रियाम्] for plural elision.",
                "advanced": "This @deva[संज्ञासूत्र] establishes @deva[तद्राज] as the designation for affixes from @ref[5.3.112] onward (@deva[ञ्य], @deva[ञ्यञ्], @deva[टेण्यण्], @deva[छ], @deva[अण्], @deva[अञ्], @deva[यञ्]). The term @deva[तद्राज] = 'king/ruler of that (group).' By @ref[2.4.62], @deva[तद्राज] affixes undergo @deva[लुक्] in plural non-feminine forms."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.3.106-119)")

if __name__ == "__main__":
    main()
