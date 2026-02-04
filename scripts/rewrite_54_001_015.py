#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.4.1-15."""

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
        "54001": {
            "en": {
                "simple": "The affix @deva[वुन्] comes after @deva[पाद] (quarter) and @deva[शत] (hundred) when preceded by a numeral in distributive sense, with final deletion. Examples: @deva[द्विपदिकाम्] (two quarters each), @deva[द्विशतिकाम्] (two hundred each).",
                "standard": "The affix @deva[वुन्] (@deva[अक]) attaches to @deva[पाद] and @deva[शत] preceded by numerals expressing @deva[वीप्सा] (distributive sense—'to each'), with deletion of the final @deva[अ]. By @ref[6.4.130], @deva[पाद्] → @deva[पद्]. Examples: @deva[द्वौ द्वौ पादौ ददाति] = @deva[द्विपदिकां ददाति] (gives two quarters to each); @deva[द्वे द्वे शते ददाति] = @deva[द्विशतिकां ददाति]. The compound is @deva[तद्धितार्थ तत्पुरुष] by @ref[2.1.51].",
                "advanced": "The explicit @deva[लोप] statement indicates this deletion is not caused by the affix (unlike @ref[6.4.148]), avoiding @deva[स्थानिवद्भाव] by @ref[1.1.57]. This allows @ref[6.4.130] (@deva[पाद्] → @deva[पद्] in @deva[भ]-base) to apply. Process: @deva[द्विपाद] + @deva[वुन्] → @deva[द्विपाद्] + @deva[अक] → @deva[द्विपद्] + @deva[अक] → @deva[द्विपदिक] (by @ref[7.3.44] @deva[अ] → @deva[इ]). The enumeration of @deva[पाद/शत] is illustrative; other words like @deva[मोदक] also apply."
            }
        },
        "54002": {
            "en": {
                "simple": "The affix @deva[वुन्] also comes after @deva[पाद] and @deva[शत] (with numeral) when expressing punishment or donation (not just distribution). Examples: @deva[द्विपदिकां दण्डितः] (fined two pādas), @deva[द्विशतिकां व्यवसृजति] (donates two hundred).",
                "standard": "The affix @deva[वुन्] applies to @deva[पाद] and @deva[शत] preceded by numerals in @deva[दण्ड] (punishment/fine) or @deva[व्यवसर्ग] (donation/gift) senses. This extends beyond @deva[वीप्सा] (distribution). Examples: @deva[द्वौ पादौ दण्डितः] = @deva[द्विपदिकां दण्डितः] (fined two quarter-coins); @deva[द्वौ पादौ व्यवसृजति] = @deva[द्विपदिकां व्यवसृजति] (donates two pādas).",
                "advanced": "This sūtra shows @deva[वीप्सा] is not required—@deva[दण्ड] (punishment) and @deva[व्यवसर्ग] (donation) are additional contexts for @deva[वुन्]. The compound formation and @deva[लोप] rules from @ref[5.4.1] continue to apply. @deva[दण्ड] = fine/punishment; @deva[व्यवसर्ग] = gift/charitable giving."
            }
        },
        "54003": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[स्थूल] and similar words in the sense of 'type/kind' (@deva[प्रकार]). This blocks @deva[जातीयर्] (@ref[5.3.69]). Examples: @deva[स्थूलकः] (bulky type), @deva[अणुकः] (fine type).",
                "standard": "The affix @deva[कन्] replaces @deva[जातीयर्] (@ref[5.3.69]) after @deva[स्थूलादि] words for @deva[प्रकार] (type/kind) sense. The class includes @deva[स्थूल], @deva[अणु], @deva[माष], etc. Vārttika: @deva[चञ्चत्] and @deva[बृहत्] (or @deva[चञ्चा/बृहा]) are included. Long final vowels shorten by @ref[7.4.13]: @deva[सुरा] + @deva[कन्] → @deva[सुरकः] (snake-like).",
                "advanced": "The @deva[स्थूलादि] @deva[गण] (14 items) takes @deva[कन्] in @deva[प्रकारार्थ], blocking @deva[जातीयर्]. Special meanings: @deva[कृष्णकाः] (@deva[तिल]—sesame); @deva[यवकाः] (@deva[व्रीहि]—rice); @deva[इक्षुतिलपाद्यकालावदाताः] → @deva[सुरा] (wine); @deva[गोमूत्रकः] (covering); @deva[सुरकः] (snake, by @ref[7.4.13]); @deva[जीर्णकाः] (@deva[शालि]—aged rice). Class: @deva[स्थूल], @deva[अणु], @deva[माष], @deva[इषु], etc."
            }
        },
        "54004": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[क्त]-participles (past passive) when the action is not fully completed. Examples: @deva[भिन्नकः] (not wholly divided), @deva[छिन्नकः] (not wholly cut).",
                "standard": "The affix @deva[कन्] attaches to @deva[क्तान्त] (past participles) expressing @deva[अनत्यन्तगति] (action not fully accomplished/incomplete). Examples: @deva[भिन्न] + @deva[कन्] → @deva[भिन्नकः] (not completely divided); @deva[छिन्नकः] (not completely cut). Without @deva[कन्]: @deva[भिन्नम्] (totally divided), @deva[छिन्नम्] (totally cut).",
                "advanced": "The @deva[अनत्यन्तगति] (incomplete action) sense triggers @deva[कन्] after @deva[क्त]-participles. @deva[अत्यन्तगति] = fully accomplished; @deva[अनत्यन्तगति] = not fully accomplished. The @deva[कन्] signals partial completion. This is distinct from @deva[स्वार्थ कन्] (which doesn't change meaning)."
            }
        },
        "54005": {
            "en": {
                "simple": "When a word meaning 'half' (like @deva[सामि], @deva[अर्ध]) precedes a @deva[क्त]-participle, @deva[कन्] is not added. Examples: @deva[सामिकृतम्] (half-done), @deva[अर्धकृतम्]—not *@deva[सामिकृतकम्].",
                "standard": "When @deva[सामि] or synonyms (@deva[अर्ध], @deva[नेम]) meaning 'half' precede a @deva[क्त]-participle in compound, @deva[कन्] is prohibited. The 'half' word itself indicates incompleteness. Examples: @deva[सामिकृतम्] (half-made by @ref[2.1.27]), @deva[सामिभुक्तम्], @deva[अर्धकृतम्], @deva[नेमकृतम्]. This also prohibits @deva[स्वार्थ कन्] after comparatives: @deva[भिन्नतरकः] is valid elsewhere but not with @deva[सामि]-compounds.",
                "advanced": "This prohibition covers both @deva[अनत्यन्तगति कन्] (@ref[5.4.4]) and @deva[स्वार्थ कन्]. The @deva[ज्ञापक] (implication): @deva[स्वार्थ कन्] exists—as in @deva[भिन्नतरकः], @deva[भिन्नतमकः] (comparatives with meaningless @deva[कन्]). Patañjali uses @deva[अभिन्नतरकं भवति], @deva[बहुतरकं व्याप्यते]. The word @deva[वचन] indicates synonyms of @deva[सामि] are included."
            }
        },
        "54006": {
            "en": {
                "simple": "The affix @deva[कन्] comes after @deva[बृहती] when it means 'a garment/dress.' Example: @deva[बृहतिका] (an upper garment/mantle). Not when @deva[बृहती] means the Vedic metre.",
                "standard": "The affix @deva[कन्] attaches to @deva[बृहती] meaning @deva[प्रावार] (upper garment/mantle), not the Vedic metre. By @ref[7.4.13], the long vowel shortens. Example: @deva[बृहती] + @deva[कन्] → @deva[बृहतिका] (a kind of cloak). Not: @deva[बृहती छन्दः] (the Bṛhatī metre).",
                "advanced": "This is @deva[स्वार्थ कन्] (meaning-preserving). The semantic restriction @deva[प्रावारे] (garment) distinguishes from @deva[बृहती छन्दस्] (metre name). By @ref[7.4.13], @deva[ई] → @deva[इ] before @deva[कन्]: @deva[बृहती] → @deva[बृहति] + @deva[क] → @deva[बृहतिका]."
            }
        },
        "54007": {
            "en": {
                "simple": "The affix @deva[ख] (becoming @deva[ईन]) comes after @deva[अषडक्ष], @deva[आशितङ्गु], @deva[अलंकर्मन्], @deva[अलंपुरुष], and stems ending in @deva[अधि]. Examples: @deva[अषडक्षीणम्] (a secret between two), @deva[राजाधीनः] (dependent on the king).",
                "standard": "The @deva[स्वार्थ] affix @deva[ख] (@deva[ईन]) attaches invariably to: @deva[अषडक्ष] (not having six eyes → a secret known to two only); @deva[आशितङ्गु] (where cattle grazed → abundant pasture); @deva[अलंकर्मन्] (competent for work); @deva[अलंपुरुष] (fit for a man → a rival). Also @deva[अधि]-ending compounds (by @ref[2.1.40]): @deva[राजाधीनः] (king-dependent).",
                "advanced": "The @deva[ख] here is @deva[नित्य] (invariable)—these words always appear with the affix. This is inferred because @deva[विभाषा] appears in the next sūtra; by the maxim @deva[द्वयोर्विभाषयोर्नित्या विधयः], rules between two optional rules are @deva[नित्य]. @deva[अषडक्ष] = @deva[षट्] + @deva[अक्ष्णि] + @deva[षच्] (@ref[5.4.113]) + @deva[ख]. @deva[आशितङ्गु] has irregular @deva[मुम्]-augment."
            }
        },
        "54008": {
            "en": {
                "simple": "The affix @deva[ख] optionally comes after @deva[अञ्च्]-ending words (direction-words) when not feminine and not meaning 'direction.' Examples: @deva[प्राक्] or @deva[प्राचीनम्] (old/former), @deva[अर्वाक्] or @deva[अर्वाचीनम्] (new/recent).",
                "standard": "The affix @deva[ख] (@deva[ईन]) optionally attaches to @deva[अञ्चति]-ending words (direction-words) when: (1) not in @deva[स्त्री] (feminine); or (2) not meaning @deva[दिश्] (compass direction). Examples: @deva[प्राक्]/deva[प्राचीनम्] (old); @deva[अर्वाक्]/deva[अर्वाचीनम्] (new). Not: @deva[प्राची दिक्] (eastern direction—feminine direction-word). But: @deva[प्राचीना ब्राह्मणी] (feminine non-direction); @deva[प्राचीनं दिग्रमणीयम्] (neuter direction-word).",
                "advanced": "The @deva[विकल्प] has three conditions: @deva[अञ्चति] ending; @deva[अदिक्] (not direction sense) or @deva[अस्त्री] (not feminine). Feminine direction-words (@deva[प्राची दिक्]) are excluded. Non-feminine direction-words (@deva[प्राचीनं दिग्रमणीयम्]) and feminine non-directions (@deva[प्राचीना ब्राह्मणी]) take @deva[ख] optionally."
            }
        },
        "54009": {
            "en": {
                "simple": "The affix @deva[छ] (becoming @deva[ईय]) comes after stems ending in @deva[जाति] when meaning 'appropriateness.' Example: @deva[ब्राह्मणजातीयः] (appropriate to a Brāhmaṇa).",
                "standard": "The affix @deva[छ] (@deva[ईय]) attaches without sense-change to @deva[जाति]-ending stems expressing @deva[बन्धु] (appropriateness—what regulates/individualizes the class). Examples: @deva[ब्राह्मणजातीयः] (befitting a Brāhmaṇa); @deva[क्षत्रियजातीयः]; @deva[वैश्यजातीयः]. Not when @deva[जाति] is the main meaning: @deva[ब्राह्मणजातिः शोभना] (the Brāhmaṇa caste is beautiful).",
                "advanced": "The @deva[बन्धु] sense = @deva[बध्यते नियम्यते स्वतन्त्री क्रियते]—that which regulates, individualizes, distinguishes a class. @deva[छ] is @deva[नित्य] here (between two @deva[विभाषा] rules by maxim). @deva[ब्राह्मणजातीय] = appropriate to/befitting the Brāhmaṇa class."
            }
        },
        "54010": {
            "en": {
                "simple": "The affix @deva[छ] optionally comes after @deva[स्थान]-ending compounds when meaning 'equal position/substitute.' Examples: @deva[पितृस्थानीयः] or @deva[पितृस्थानः] (in father's place), @deva[मातृस्थानीयः] (in mother's place).",
                "standard": "The affix @deva[छ] (@deva[ईय]) optionally attaches to @deva[स्थान]-ending compounds expressing @deva[सस्थान] (equal place/substitute status). @deva[सस्थान] = @deva[समानं स्थानमस्य] (whose place is equal). Examples: @deva[पित्रा तुल्यः] = @deva[पितृस्थानीयः] or @deva[पितृस्थानः] (like a father, in father's place); @deva[राजस्थानीयः]/deva[राजस्थानः]. Not: @deva[गोस्थानम्] (cow-shed), @deva[अश्वस्थानम्] (stable)—concrete place-meanings.",
                "advanced": "The condition @deva[सस्थानेन] specifies @deva[बहुव्रीहि] sense (@deva[समानं स्थानमस्य]), not @deva[तत्पुरुष] (@deva[समानं च तत् स्थानं च]). The @deva[इति] is @deva[प्रत्यवयवकरण] (distinctness marker). @deva[चेत्] (when) is conjunctive. @deva[छ] is @deva[विकल्प] here; rule @ref[5.4.9] between two optional rules is @deva[नित्य]."
            }
        },
        "54011": {
            "en": {
                "simple": "The affix @deva[आम्] is added to @deva[तर]/deva[तम] when they follow @deva[किम्], @deva[ए]-ending words, finite verbs, or indeclinables—but not when the comparison is of a substance (only actions/qualities). Examples: @deva[किंतराम्], @deva[पचतितराम्], @deva[उच्चैस्तराम्].",
                "standard": "The affix @deva[आम्] is added to @deva[तरप्/तमप्] (comparative/superlative) after: @deva[किम्] (@ref[5.3.55]), @deva[ए]-ending words (@ref[6.3.17]), @deva[तिङन्त] (verbs, @ref[5.3.56-57]), or @deva[अव्यय] (indeclinables). Condition: @deva[अद्रव्यप्रकर्ष]—the comparison must be of action/quality, not substance. Examples: @deva[किंतराम्], @deva[पूर्वाह्णेतराम्], @deva[पचतितराम्] (cooks more), @deva[उच्चैस्तराम्] (more loudly). Not: @deva[उच्चैस्तमः तरुः] (tallest tree—substance comparison).",
                "advanced": "The @deva[अद्रव्यप्रकर्ष] condition restricts @deva[आम्] to adverbial comparisons. @deva[द्रव्य] (substance) itself lacks @deva[प्रकर्ष] (gradation)—only its @deva[गुण] (quality) can be graded. Adjectival comparisons (@deva[उच्चैस्तमः तरुः]) don't take @deva[आम्]. The @deva[घ]-designation (@ref[1.1.22]) covers both @deva[तरप्] and @deva[तमप्]."
            }
        },
        "54012": {
            "en": {
                "simple": "In Vedic, the affix @deva[अम्] (in addition to @deva[आम्]) is added to @deva[तर]/deva[तम] under the same conditions. Example: @deva[प्रतरम्] or @deva[प्रतराम्] (more forward).",
                "standard": "In @deva[छन्दस्] (Vedic), @deva[अम्] is added alongside @deva[आम्] to @deva[तरप्/तमप्] after @deva[किम्], @deva[ए]-ending words, @deva[तिङन्त], or @deva[अव्यय] in adverbial comparisons. The @deva[चकार] includes @deva[आम्]. Example: @deva[प्रतरम् नयामः] or @deva[प्रतराम् वस्यः] (@deva[प्रतर] = @deva[प्रकृष्टतर], more excellent). Words ending in @deva[आम्]/deva[अम्] are @deva[अव्यय] by @deva[स्वरादि]-inclusion (@ref[1.1.37]).",
                "advanced": "This @deva[छन्दस्] rule provides @deva[अम्] as Vedic alternative to @deva[आम्]. Both are @deva[निपात] (indeclinables) per @deva[स्वरादि] (@ref[1.1.37]). The same @deva[अद्रव्यप्रकर्ष] condition applies. Vedic forms: @deva[प्रतरम्], @deva[प्रतराम्]."
            }
        },
        "54013": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after @deva[अनुगादिन्] (one who echoes/repeats) without changing meaning. Example: @deva[आनुगादिकः] (a repeater, an echoer).",
                "standard": "The @deva[स्वार्थ] affix @deva[ठक्] (@deva[इक]) attaches to @deva[अनुगादिन्] (one who repeats/echoes back) without changing meaning. @deva[वृद्धि] applies: @deva[अनुगादिन्] → @deva[आनुगादिकः] (one who echoes, a repeater).",
                "advanced": "This is @deva[स्वार्थ ठक्]—the affix doesn't alter the meaning of @deva[अनुगादिन्] (from @deva[अनु] + √@deva[गद्] + @deva[णिनि], 'one who speaks after/echoes'). @deva[ठक्] → @deva[इक] with @deva[वृद्धि]: @deva[अ] → @deva[आ]."
            }
        },
        "54014": {
            "en": {
                "simple": "The affix @deva[अञ्] comes after @deva[णच्]-ending words when feminine. Example: @deva[व्यावक्रोशी] or @deva[व्यावक्रोश्या] (mutual abuse between women).",
                "standard": "The @deva[स्वार्थ] affix @deva[अञ्] (@deva[अ]) attaches to @deva[णच्]-ending words (@ref[3.3.43], reciprocal action) when the referent is @deva[स्त्री] (feminine). Examples: @deva[व्यावक्रोशी वर्तते] or @deva[व्यावक्रोश्या वर्तते] (mutual reviling occurs among women); @deva[व्यावहासी] (mutual laughter). The @deva[स्त्री] repetition implies: @deva[स्वार्थिक] affixes don't always inherit @deva[लिङ्ग/वचन] from the base.",
                "advanced": "The @deva[ज्ञापक] (implication) of @deva[स्त्री] repetition: @deva[स्वार्थिकाः प्रत्ययाः प्रकृतितो लिङ्गवचनान्यतिवर्तन्ते ऽपि]—@deva[स्वार्थिक] affixes can override base gender/number. Examples: @deva[गुडकल्पा द्राक्षा], @deva[तैलकल्पा प्रसन्ना] (feminine despite masculine bases); @deva[देव] → @deva[देवता] (gender change)."
            }
        },
        "54015": {
            "en": {
                "simple": "The affix @deva[अञ्] comes after @deva[इनुण्]-ending words without changing meaning. Examples: @deva[सांराविणम्] (general noise), @deva[सांकूटिनम्] (general confusion).",
                "standard": "The @deva[स्वार्थ] affix @deva[अञ्] (@deva[अ]) attaches to @deva[इनुण्]-ending words (@ref[3.3.44], condition from universal co-operation of action) without sense-change. @deva[इनुण्] forms incomplete words requiring @deva[अञ्] for completion. Examples: @deva[सांराविणं वर्तते] (general shouting prevails); @deva[सांकूटिनम्] (general pounding/confusion).",
                "advanced": "By @ref[3.3.44], @deva[इनुण्] expresses a condition arising from universal participation in an action. @deva[इनुण्]-derivatives are incomplete (@deva[अपूर्ण]) and require @deva[स्वार्थ अञ्] for proper word-formation. Generally, @deva[स्वार्थ] affixes complete underdeveloped (@deva[अपूर्ण]) stems."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.4.1-15)")

if __name__ == "__main__":
    main()
