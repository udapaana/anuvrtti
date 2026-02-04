#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.1.61-75."""

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
        "51061": {
            "en": {
                "simple": "The affix @deva[अञ्] comes after @deva[सप्तन्] 'seven' in Vedic usage when the meaning is a @deva[वर्ग] 'class'. @deva[सप्त साप्तान्यसृजन्] 'the Seven created the seven groups'.",
                "standard": "In the @deva[छन्दस्] (Vedas), the affix @deva[अञ्] (adding @deva[अ]) comes after @deva[सप्तन्] 'seven' when the meaning is that of a @deva[वर्ग] 'class, group'. The phrase @deva[तदस्य परिमाणम्] 'this is its measure' is understood. Example: @deva[सप्त साप्तान्यसृजन्] 'the Seven (seers) created the seven (classes)'.",
                "advanced": "This sūtra teaches Vedic @deva[अञ्] after @deva[सप्तन्] when the derivative denotes a @deva[वर्ग]. The @deva[परिमाण] sense (@deva[तदस्य परिमाणम्]) is understood from the preceding context. The Vedic example @deva[सप्त साप्तान्यसृजन्] shows both @deva[सप्त] (base numeral) and @deva[साप्त] (derivative with @deva[अञ्])."
            }
        },
        "51062": {
            "en": {
                "simple": "The affix @deva[अञ्] comes after @deva[त्रिंशत्] 'thirty' and @deva[चत्वारिंशत्] 'forty' in the sense of 'this is its measure' when the word is a name for a Brāhmaṇa book. @deva[त्रैंशानि ब्राह्मणानि] 'the Brāhmaṇa of thirty chapters'.",
                "standard": "The affix @deva[अञ्] (adding @deva[अ]) comes in the sense of 'this is its measure' after @deva[त्रिंशत्] 'thirty' and @deva[चत्वारिंशत्] 'forty' when the derivative is a name (@deva[संज्ञा]) denoting a Brāhmaṇa book. The word @deva[वर्ग] does not govern this sūtra. The indicatory @deva[ड्] causes elision of the final vowel and following consonant per @ref[6.4.143]. The locative @deva[ब्राह्मणे] means 'when the word denotes a Brāhmaṇa itself' (@deva[अभिधेय]), not 'in Brāhmaṇa literature' (@deva[विषय]). Examples: @deva[त्रिंशद् अध्यायाः परिमाणम् एषां ब्राह्मणानाम्] = @deva[त्रैंशानि ब्राह्मणानि] 'the Brāhmaṇa containing thirty chapters'; @deva[चात्वारिंशानि ब्राह्मणानि] 'the Brāhmaṇa of forty chapters'.",
                "advanced": "This sūtra teaches @deva[अञ्] after @deva[त्रिंशत्] and @deva[चत्वारिंशत्] in the @deva[परिमाण] sense when the derivative names a Brāhmaṇa text. The @deva[अनुवृत्ति] of @deva[वर्ग] doesn't apply. The @deva[ड्] (@deva[इत्]) of @deva[अञ्] triggers @deva[टि]-elision per @ref[6.4.143]. The @deva[सप्तमी] in @deva[ब्राह्मणे] has @deva[अभिधेय] force (denoting the Brāhmaṇa itself), not @deva[विषय] (in the domain of). Examples: @deva[त्रैंशानि ब्राह्मणानि], @deva[चात्वारिंशानि ब्राह्मणानि]—names of specific Brāhmaṇa texts."
            }
        },
        "51063": {
            "en": {
                "simple": "The affixes (@ref[5.1.18] etc.) also mean 'who deserves that'. @deva[श्वेतच्छत्रमर्हति] → @deva[श्वेतच्छत्रिकः] 'one who deserves the white umbrella'.",
                "standard": "The affixes taught from @ref[5.1.18] onward (@deva[प्राग्वतेष्ठञ्]) also have the sense of 'who deserves that' (@deva[तदर्हति]). The base is in the accusative case. Examples: @deva[श्वेतच्छत्रमर्हति] = @deva[श्वेतच्छत्रिकः] 'one who deserves the white umbrella'; @deva[वास्त्रयुग्मिकः] 'deserving a pair of garments'; @deva[शत्यः], @deva[शतिकः], @deva[साहस्रः].",
                "advanced": "This sūtra defines the @deva[तदर्हति] sense for the @ref[5.1.18] affixes: 'who deserves that'. The @deva[द्वितीया] (accusative) construction applies. Examples: @deva[श्वेतच्छत्रमर्हति] = @deva[श्वेतच्छत्रिकः] 'deserving the royal white umbrella'; @deva[वास्त्रयुग्मिकः], @deva[शत्यः], @deva[शतिकः], @deva[साहस्रः]. This sense extends through the following sūtras with various bases."
            }
        },
        "51064": {
            "en": {
                "simple": "The affixes come after @deva[छेदादि] words in the accusative case meaning 'who deserves that always'. @deva[छेदं नित्यमर्हति] → @deva[छैदिकः] 'one who always deserves cutting'.",
                "standard": "The above affixes come after @deva[छेदादि] words in the accusative case with the sense of 'who deserves that under all circumstances' (@deva[नित्यम् अर्हति]). Examples: @deva[छेदं नित्यमर्हति] = @deva[छैदिकः] 'one who always deserves cutting (punishment)'; @deva[भैदिकः] 'deserving splitting'. The @deva[छेदादि] class contains 17 words: @deva[छेद], @deva[भेद], @deva[द्रोह], @deva[दोह], @deva[मर्त], @deva[कर्ष], @deva[तीर्थ], @deva[संप्रयोग], @deva[विप्रयोग], @deva[प्रयोग], @deva[विप्रकर्ष], @deva[प्रेषण], @deva[संप्रश्न], @deva[विप्रश्न], @deva[विकर्ष], @deva[प्रकर्ष], @deva[विराग] (from which @deva[वैरागिक] and @deva[वैरङ्गिक] are formed).",
                "advanced": "This sūtra teaches the @deva[नित्यम् अर्हति] sense ('always deserving') after the @deva[छेदादि] class in @deva[द्वितीया]. The @deva[छेदादि] gaṇa has 17 words. Examples: @deva[छैदिकः], @deva[भैदिकः]. The final entry @deva[विराग विरङ्गं च] indicates that from @deva[विराग], both @deva[वैरागिक] and @deva[वैरङ्गिक] are derived."
            }
        },
        "51065": {
            "en": {
                "simple": "The affix @deva[यत्] as well as the other affixes come after @deva[शीर्षच्छेद] 'beheading' in the accusative case meaning 'who deserves that always'. @deva[शीर्षच्छेद्यः] or @deva[शैर्षच्छेदिकः].",
                "standard": "The affix @deva[यत्] (adding @deva[य]) as well as the above affixes come after @deva[शीर्षच्छेद] 'beheading' in the accusative case with the sense of 'who deserves that under all circumstances'. Examples: @deva[शिरश्छेदं नित्यमर्हति] = @deva[शीर्षच्छेद्यः] (with @deva[यत्]) or @deva[शैर्षच्छेदिकः] (with @deva[ठञ्]). Note: The word @deva[शिरस्] is irregularly changed to @deva[शीर्ष] before the affix.",
                "advanced": "This sūtra teaches @deva[यत्] alongside the general affixes after @deva[शीर्षच्छेद] in the @deva[नित्यम् अर्हति] sense. Results: @deva[शीर्षच्छेद्यः] (with @deva[यत्]), @deva[शैर्षच्छेदिकः] (with @deva[ठञ्]). An irregular substitution occurs: @deva[शिरस्] → @deva[शीर्ष] before the affix."
            }
        },
        "51066": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[दण्डादि] words in the accusative case meaning 'who deserves that'. @deva[दण्डमर्हति] → @deva[दण्ड्यः] 'deserving punishment'.",
                "standard": "The affix @deva[यत्] (adding @deva[य]) comes after @deva[दण्डादि] words in the accusative case with the sense of 'who deserves that'. The word @deva[नित्य] does not govern this sūtra. This @deva[यत्] supersedes @deva[ठक्] (@ref[5.1.19]). Examples: @deva[दण्डमर्हति] = @deva[दण्ड्यः] 'deserving punishment/death'; @deva[मुसल्यः] 'deserving the club'. The @deva[दण्डादि] class contains 15 words: @deva[दण्ड], @deva[मुसल], @deva[मधुपर्क], @deva[कशा], @deva[अर्घ], @deva[मेघ], @deva[मेधा], @deva[सुवर्ण], @deva[उदक], @deva[वध], @deva[युग], @deva[गुहा], @deva[भाग], @deva[इभ], @deva[भङ्ग].",
                "advanced": "This sūtra teaches @deva[यत्] after @deva[दण्डादि] words in the @deva[अर्हति] sense (without @deva[नित्य]). The @deva[यत्] supersedes @deva[ठक्]. The @deva[दण्डादि] gaṇa has 15 words. Examples: @deva[दण्ड्यः] 'punishable', @deva[मुसल्यः], etc. Some texts give the sūtra as @deva[दण्डादिभ्यो यत्]; another reading draws @deva[यत्] from the previous sūtra."
            }
        },
        "51067": {
            "en": {
                "simple": "The affix @deva[यत्] comes in Vedic usage after any @deva[प्रातिपदिक] in the sense of 'deserving that'. @deva[उदक्या वृत्तयः] 'ceremonies deserving water'; @deva[यूप्यः पलाशः] '@deva[पलाश] deserving to be a sacrificial post'.",
                "standard": "In the @deva[छन्दस्] (Vedas), the affix @deva[यत्] (adding @deva[य]) comes in the sense of 'deserving that' after any @deva[प्रातिपदिक] (nominal stem). This supersedes @deva[ठञ्] etc. Examples: @deva[उदक्या वृत्तयः] 'ceremonies deserving water'; @deva[यूप्यः पलाशः] '@deva[पलाश] tree deserving to be a @deva[यूप] (sacrificial post)'; @deva[गर्त्यो देशः] 'a place deserving a pit'. See @ref[6.1.213] for accent.",
                "advanced": "This sūtra teaches Vedic @deva[यत्] after any @deva[प्रातिपदिक] in the @deva[अर्हति] sense. The @deva[यत्] supersedes the classical affixes @deva[ठञ्] etc. Examples: @deva[उदक्या वृत्तयः], @deva[यूप्यः पलाशः], @deva[गर्त्यो देशः]. Accent per @ref[6.1.213]."
            }
        },
        "51068": {
            "en": {
                "simple": "The affix @deva[घ] as well as @deva[यत्] comes after @deva[पात्र] 'vessel/worthy person' in the sense of 'deserving that'. @deva[पात्रमर्हति] → @deva[पात्र्यः] or @deva[पात्रियः].",
                "standard": "The affix @deva[घ] (adding @deva[इय]) together with @deva[यत्] (adding @deva[य]) comes in the sense of 'deserving that' after @deva[पात्र] 'vessel, worthy person/measure'. These supersede @deva[ठक्] and @deva[ठञ्]. Examples: @deva[पात्रमर्हति] = @deva[पात्र्यः] (with @deva[यत्]) or @deva[पात्रियः] (with @deva[घ]).",
                "advanced": "This sūtra teaches @deva[घ] and @deva[यत्] after @deva[पात्र] in the @deva[अर्हति] sense. Both supersede @deva[ठक्] and @deva[ठञ्]. The word @deva[पात्र] also denotes a measure. Results: @deva[पात्र्यः] (with @deva[यत्]), @deva[पात्रियः] (with @deva[घ])."
            }
        },
        "51069": {
            "en": {
                "simple": "The affixes @deva[छ] and @deva[यत्] come after @deva[कडङ्गर] 'straw' and @deva[दक्षिणा] 'ritual fee' in the sense of 'deserving that'. @deva[कडङ्गरीयः] or @deva[कडङ्कर्यः]; @deva[दक्षिणीयः] or @deva[दक्षिण्यः].",
                "standard": "The affixes @deva[छ] (adding @deva[ईय]) and @deva[यत्] (adding @deva[य]) come in the sense of 'deserving that' after @deva[कडङ्गर] 'chaff, straw' and @deva[दक्षिणा] 'ritual fee, alms'. These supersede @deva[ठक्]. Examples: @deva[कडङ्गरमर्हति] = @deva[कडङ्गरीयः] (with @deva[छ]) or @deva[कडङ्कर्यः] (with @deva[यत्]) 'one deserving straw' (e.g., a cow); @deva[दक्षिणीयः] or @deva[दक्षिण्यो ब्राह्मणः] 'a Brāhmaṇa deserving alms'.",
                "advanced": "This sūtra teaches @deva[छ] and @deva[यत्] after @deva[कडङ्गर] and @deva[दक्षिणा] in the @deva[अर्हति] sense. These supersede @deva[ठक्]. Results: @deva[कडङ्गरीयः] ~ @deva[कडङ्कर्यः]; @deva[दक्षिणीयः] ~ @deva[दक्षिण्यः]."
            }
        },
        "51070": {
            "en": {
                "simple": "The affixes @deva[छ] and @deva[यत्] come after @deva[स्थालीबिल] 'pot/cauldron' in the sense of 'deserving that'. @deva[स्थालीबिलीयाः तण्डुलाः] or @deva[स्थालीबिल्याः] 'rice deserving the pot' (i.e., cookable rice).",
                "standard": "The affixes @deva[छ] (adding @deva[ईय]) and @deva[यत्] (adding @deva[य]) come in the sense of 'deserving that' after @deva[स्थालीबिल] 'pot, cauldron'. These supersede @deva[ठक्]. Examples: @deva[स्थालीबिलीयाः तण्डुलाः] (with @deva[छ]) or @deva[स्थालीबिल्याः] (with @deva[यत्]) 'rice deserving the pot', i.e., rice that is ready to be cooked.",
                "advanced": "This sūtra teaches @deva[छ] and @deva[यत्] after @deva[स्थालीबिल] in the @deva[अर्हति] sense. These supersede @deva[ठक्]. Results: @deva[स्थालीबिलीयाः तण्डुलाः] ~ @deva[स्थालीबिल्याः तण्डुलाः] 'cookable rice'."
            }
        },
        "51071": {
            "en": {
                "simple": "The affixes @deva[घ] and @deva[खञ्] come after @deva[यज्ञ] 'sacrifice' and @deva[ऋत्विज्] 'priest' respectively in the sense of 'deserving that'. @deva[यज्ञियो ब्राह्मणः] 'a Brāhmaṇa worthy of sacrifice'; @deva[आर्त्विजीनो ब्राह्मणः].",
                "standard": "The affix @deva[घ] (adding @deva[इय]) comes after @deva[यज्ञ] 'sacrifice', and @deva[खञ्] (adding @deva[ईन]) comes after @deva[ऋत्विज्] 'priest', in the sense of 'deserving that'. These supersede @deva[ठक्]. Examples: @deva[यज्ञियो ब्राह्मणः] 'a Brāhmaṇa worthy of honor at a sacrifice'; @deva[आर्त्विजीनो ब्राह्मणः] 'a Brāhmaṇa deserving priestly status'. @deva[वार्त्तिक]: These affixes also mean 'deserving the performance thereof': @deva[यज्ञकर्मार्हति] = @deva[यज्ञियो देशः] 'a place fit for sacrifice'; @deva[ऋत्विक्कर्मार्हति] = @deva[आर्त्विजीनं ब्राह्मणकुलम्] 'a Brāhmaṇa family deserving priestly duties'. This sūtra ends the governing power of @deva[ठक्] (@ref[5.1.19]); henceforth @deva[ठञ्] (@ref[5.1.18]) governs.",
                "advanced": "This sūtra teaches @deva[घ] after @deva[यज्ञ] and @deva[खञ्] after @deva[ऋत्विज्] in the @deva[अर्हति] sense. These supersede @deva[ठक्]. Results: @deva[यज्ञियः], @deva[आर्त्विजीनः]. A @deva[वार्त्तिक] extends the sense to 'deserving the performance': @deva[यज्ञकर्मार्हति] = @deva[यज्ञियो देशः]; @deva[ऋत्विक्कर्मार्हति] = @deva[आर्त्विजीनं ब्राह्मणकुलम्]. The @deva[अधिकार] of @deva[ठक्] (@ref[5.1.19]) ends here; @deva[ठञ्] (@ref[5.1.18]) resumes governance."
            }
        },
        "51072": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after @deva[पारायण], @deva[तुरायण], and @deva[चान्द्रायण] in the accusative case meaning 'who performs this'. @deva[पारायणिकः छात्रः] 'a student who reads under a teacher'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक], per @ref[5.1.18]) comes in the sense of 'who performs this' (@deva[तत्करोति]) after @deva[पारायण], @deva[तुरायण], and @deva[चान्द्रायण] in the accusative case. The force of @deva[अर्हति] 'deserving' ceases. Examples: @deva[पारायणिकः छात्रः] 'a student who reads/recites under a teacher'; @deva[तौरायणिको यजमानः] 'a sacrificer who performs @deva[तुरायण]'; @deva[चान्द्रायणिकः तपस्वी] 'an ascetic who observes @deva[चान्द्रायण]'. The word @deva[पारायण] means 'teacher' (@deva[परस्य करोति] 'one who acts for another').",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[पारायण], @deva[तुरायण], @deva[चान्द्रायण] in @deva[द्वितीया] with the @deva[तत्करोति] sense. The @deva[अर्हति] sense doesn't apply. Examples: @deva[पारायणिकः] 'one who recites/studies continuously', @deva[तौरायणिकः] 'performer of @deva[तुरायण] rite', @deva[चान्द्रायणिकः] 'observer of lunar-phase fasting'. The word @deva[पारायण] is derived as @deva[परस्य करोति] 'acting for another'."
            }
        },
        "51073": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after @deva[संशय] 'doubt' in the accusative case meaning 'having fallen into or thrown into that'. @deva[संशयमापन्नः] → @deva[सांशयिकः स्तम्भः] 'a doubtful pillar' (in a precarious state).",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes in the sense of 'having fallen into or thrown into that' (@deva[आपन्नः प्राप्तः]) after @deva[संशय] 'doubt' in the accusative case. Example: @deva[संशयमापन्नः प्राप्तः] = @deva[सांशयिकः स्तम्भः] 'a doubtful pillar', i.e., a pillar in a precarious or uncertain state.",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[संशय] in @deva[द्वितीया] with the sense @deva[आपन्नः प्राप्तः] 'having fallen into, reached'. Example: @deva[सांशयिकः स्तम्भः] 'a pillar that has fallen into doubt/uncertainty'—describing something in a precarious condition."
            }
        },
        "51074": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after @deva[योजन] 'league' in the accusative case meaning 'who goes (that distance)'. @deva[योजनं गच्छति] → @deva[यौजनिकः] 'one who goes a league'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes in the sense of 'who goes (that distance)' after @deva[योजन] 'league, @deva[योजन]-measure' in the accusative case. Example: @deva[योजनं गच्छति] = @deva[यौजनिकः] 'one who goes a league'. @deva[वार्त्तिक]s: @deva[ठञ्] also comes after @deva[क्रोशशत] and @deva[योजनशत]: @deva[क्रौशशतिकः], @deva[यौजनशतिकः]. These affixes also mean 'worthy of being approached from that distance': @deva[क्रोशशतादभिगमनमर्हति] = @deva[क्रौशशतिको भिक्षुः] 'a mendicant worthy of being approached from a hundred @deva[क्रोश]'; @deva[यौजनशतिकः आचार्यः] 'a teacher worthy of approach from a hundred leagues'.",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[योजन] in @deva[द्वितीया] with the @deva[गच्छति] sense. Result: @deva[यौजनिकः]. Two @deva[वार्त्तिक]s: (1) @deva[ठञ्] also after @deva[क्रोशशत], @deva[योजनशत] → @deva[क्रौशशतिकः], @deva[यौजनशतिकः]; (2) these also mean 'worthy of being approached from that distance' → @deva[क्रौशशतिको भिक्षुः], @deva[यौजनशतिकः आचार्यः]."
            }
        },
        "51075": {
            "en": {
                "simple": "The affix @deva[ष्कन्] comes after @deva[पथ्] 'path' in the accusative case meaning 'who goes there'. @deva[पन्थानं गच्छति] → @deva[पथिकः] 'traveler', fem. @deva[पथिकी].",
                "standard": "The affix @deva[ष्कन्] (adding @deva[इक]) comes in the sense of 'who goes there' after @deva[पथ्] 'path' in the accusative case. The @deva[ष्] of @deva[ष्कन्] triggers @deva[ङीष्] for the feminine per @ref[4.1.41]; the @deva[न्] governs accent per @ref[6.1.197]. Example: @deva[पन्थानं गच्छति] = @deva[पथिकः] 'traveler, wayfarer'; feminine @deva[पथिकी].",
                "advanced": "This sūtra teaches @deva[ष्कन्] after @deva[पथ्] in @deva[द्वितीया] with the @deva[गच्छति] sense. The @deva[अनुबन्ध]s: @deva[ष्] triggers feminine @deva[ङीष्] (@ref[4.1.41]); @deva[न्] governs accent (@ref[6.1.197]). Result: @deva[पथिकः], fem. @deva[पथिकी] 'one who travels, wayfarer'."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.1.61-75)")

if __name__ == "__main__":
    main()
