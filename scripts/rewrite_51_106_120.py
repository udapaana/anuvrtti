#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.1.106-120."""

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
        "51106": {
            "en": {
                "simple": "In Vedic usage, the affix @deva[घस्] comes after @deva[ऋतु] 'season' meaning 'the season has come for it'. @deva[अयं ते योनिर्ऋत्वियः] 'this is your seasonal abode'.",
                "standard": "In the @deva[छन्दस्] (Vedas), the affix @deva[घस्] (adding @deva[इय]) comes in the sense of 'the season has come for it' after @deva[ऋतु] 'season'. This supersedes @deva[अण्]. Example: @deva[अयं ते योनिर्ऋत्वियः] 'this is your seasonal abode'. Note: There is no @deva[गुण] by @ref[6.4.146] because @deva[ऋतु] before @deva[घस्] gets the designation @deva[पद] per @ref[1.4.16], and the @deva[गुण] rule applies only to @deva[भ] (per @ref[1.4.18]).",
                "advanced": "This sūtra teaches Vedic @deva[घस्] after @deva[ऋतु] with @deva[प्राप्त] sense, superseding @deva[अण्]. Result: @deva[ऋत्वियः] (not *@deva[आर्त्विय]). The absence of @deva[गुण] is explained: @deva[ऋतु] before @deva[घस्] becomes @deva[पद] per @ref[1.4.16], and @deva[गुण] (@ref[6.4.146]) applies to @deva[भ]-designated stems (@ref[1.4.18]), not @deva[पद]."
            }
        },
        "51107": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[काल] 'time' meaning 'the time has come for it'. @deva[काल्यः तापः] 'timely heat'; @deva[काल्यं शीतम्] 'timely cold'.",
                "standard": "The affix @deva[यत्] (adding @deva[य]) comes in the sense of 'the time has come for it' after @deva[काल] 'time'. Examples: @deva[काल्यः तापः] 'timely/seasonal heat'; @deva[काल्यं शीतम्] 'timely/seasonal cold'. For accent, see @ref[6.1.213].",
                "advanced": "This sūtra teaches @deva[यत्] after @deva[काल] with @deva[प्राप्त] sense. Results: @deva[काल्यः], @deva[काल्यम्] 'timely, seasonal'. Accent per @ref[6.1.213]."
            }
        },
        "51108": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after @deva[काल] 'time' in the nominative case meaning 'long-standing'. @deva[प्रकृष्टः कालोऽस्य] → @deva[कालिकम् ऋणम्] 'long-standing debt'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes in the sense of 'long-standing' (@deva[प्रकृष्ट]) after @deva[काल] 'time' in the nominative (@deva[प्रथमा]) case. Examples: @deva[प्रकृष्टः कालोऽस्य] = @deva[कालिकम् ऋणम्] 'long-standing debt'; @deva[कालिकं वैरम्] 'long-standing enmity'. In this sūtra, @deva[काल] and @deva[तदस्य] are understood, but not @deva[प्राप्तम्].",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[काल] in @deva[प्रथमा] with @deva[प्रकृष्ट] ('long-standing') sense. The @deva[अनुवृत्ति] includes @deva[काल] and @deva[तदस्य], but @deva[प्राप्तम्] from previous sūtras doesn't continue. Results: @deva[कालिकम् ऋणम्], @deva[कालिकं वैरम्]."
            }
        },
        "51109": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after a word in the nominative case meaning 'that whose purpose is this'. @deva[इन्द्रमहः प्रयोजनमस्य] → @deva[ऐन्द्रमहिकम्] 'pertaining to the Indra festival'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes in the sense of 'that whose occasion or purpose is this' (@deva[तत् प्रयोजनमस्य]) after a word in the nominative (@deva[प्रथमा]) case. Examples: @deva[इन्द्रमहः प्रयोजनमस्य] = @deva[ऐन्द्रमहिकम्] 'pertaining to the Indra festival'; @deva[गाङ्गामहिकम्] 'pertaining to the Gaṅgā festival'.",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[प्रथमा] words with @deva[प्रयोजन] ('purpose') sense. Examples: @deva[ऐन्द्रमहिकम्], @deva[गाङ्गामहिकम्]."
            }
        },
        "51110": {
            "en": {
                "simple": "The affix @deva[अण्] comes after @deva[विशाखा] and @deva[आषाढ] in the sense of 'that whose purpose is this' when combined with @deva[मन्थ] and @deva[दण्ड] respectively. @deva[वैशाखो मन्थः]; @deva[आषाढो दण्डः].",
                "standard": "The affix @deva[अण्] (adding @deva[अ]) comes in the sense of 'that whose purpose is this' after @deva[विशाखा] (when combined with @deva[मन्थ] 'churning stick') and @deva[आषाढ] (when combined with @deva[दण्ड] 'staff'). Examples: @deva[वैशाखो मन्थः] 'a churning stick (made when Viśākhā is the purpose/occasion)'; @deva[आषाढो दण्डः] 'a staff (made during Āṣāḍha)'. @deva[वार्त्तिक]: @deva[अण्] also after @deva[चडा] etc.: @deva[चडा प्रयोजनमस्य] = @deva[चौडम्] 'tonsure ceremony'; @deva[श्रद्धा प्रयोजनमस्य] = @deva[श्राद्धम्] 'funeral offering'.",
                "advanced": "This sūtra teaches @deva[अण्] after @deva[विशाखा] (with @deva[मन्थ]) and @deva[आषाढ] (with @deva[दण्ड]) in the @deva[प्रयोजन] sense. Results: @deva[वैशाखो मन्थः], @deva[आषाढो दण्डः]. A @deva[वार्त्तिक] extends to @deva[चडादि]: @deva[चौडम्] 'tonsure', @deva[श्राद्धम्] 'śrāddha'."
            }
        },
        "51111": {
            "en": {
                "simple": "The affix @deva[छ] comes after @deva[अनुप्रवचनादि] words in the sense of 'that whose purpose is this'. @deva[अनुप्रवचनीयम्], @deva[उत्थापनीयम्].",
                "standard": "The affix @deva[छ] (adding @deva[ईय]) comes in the sense of 'that whose purpose is this' after @deva[अनुप्रवचनादि] words. This supersedes @deva[ठञ्]. Examples: @deva[अनुप्रवचनं प्रयोजनमस्य] = @deva[अनुप्रवचनीयम्] 'for the purpose of recitation'; @deva[उत्थापनीयम्] 'for raising'. The @deva[अनुप्रवचनादि] class contains 16 words. @deva[वार्त्तिक]s: (1) @deva[छ] also after derivatives in @deva[अन] (@deva[युच्]) from @deva[विश्], @deva[पूर्], @deva[पत्], @deva[रुह्] when preceded by a word: @deva[गृहप्रवेशनीयम्], @deva[प्रपापूरणीयम्], @deva[अश्वप्रपतनीयम्], @deva[प्रासादारोहणीयम्]; (2) @deva[यत्] after @deva[स्वर्ग] etc.: @deva[स्वर्ग्यम्], @deva[यशस्यम्], @deva[आयुष्यम्], @deva[काम्यम्], @deva[धन्यम्]; (3) Affix deleted after @deva[पुण्याहवाचन] etc.: @deva[पुण्याहवाचनम्], @deva[स्वस्तिवाचनम्], @deva[शान्तिवाचनम्].",
                "advanced": "This sūtra teaches @deva[छ] after @deva[अनुप्रवचनादि] (16 words) with @deva[प्रयोजन] sense, superseding @deva[ठञ्]. Examples: @deva[अनुप्रवचनीयम्], @deva[उत्थापनीयम्]. Three @deva[वार्त्तिक]s: (1) @deva[छ] after @deva[अन]-derivatives from @deva[विश्]/पूर्/पत्/रुह्] when preceded by a @deva[पद]; (2) @deva[यत्] after @deva[स्वर्गादि]; (3) @deva[लुक्] after @deva[पुण्याहवाचनादि]."
            }
        },
        "51112": {
            "en": {
                "simple": "The affix @deva[छ] comes after @deva[समापन] 'completion' when it has a word preceding it in composition. @deva[छन्दःसमापनीयम्] 'for completing the study of meters'.",
                "standard": "The affix @deva[छ] (adding @deva[ईय]) comes in the sense of 'that whose purpose is this' after @deva[समापन] 'completion' when it has a word (@deva[पद]) in composition preceding it. This supersedes @deva[ठञ्]. Examples: @deva[छन्दःसमापनं प्रयोजनमस्य] = @deva[छन्दःसमापनीयम्] 'for the purpose of completing Vedic meters'; @deva[व्याकरणसमापनीयम्] 'for completing grammar study'. The specific mention of @deva[पद] indicates the rule doesn't apply when a non-@deva[पद] (like the affix @deva[बहुच्] per @ref[5.3.68]) precedes @deva[समापन].",
                "advanced": "This sūtra teaches @deva[छ] after @deva[समापन] when preceded by a @deva[पद], superseding @deva[ठञ्]. The condition @deva[सपूर्वपदात्] specifies that a @deva[पद] must precede; affixes like @deva[बहुच्] (@ref[5.3.68]) don't qualify. Examples: @deva[छन्दःसमापनीयम्], @deva[व्याकरणसमापनीयम्]."
            }
        },
        "51113": {
            "en": {
                "simple": "The word @deva[ऐकागारिक] is irregularly formed meaning 'thief'. @deva[एकागारं प्रयोजनमस्य] → @deva[ऐकागारिकः] 'thief', fem. @deva[ऐकागारिकी].",
                "standard": "The word @deva[ऐकागारिक] is irregularly formed (@deva[निपातन]) in the sense of 'thief'. Example: @deva[एकागारं प्रयोजनमस्य] = @deva[ऐकागारिकः] 'thief' (lit. 'one whose purpose is a single house'), fem. @deva[ऐकागारिकी] (with @deva[ङीप्]). This could be regularly formed with @deva[ठञ्], but the word is restricted to mean 'thief' only. When something else is intended (e.g., @deva[एकागारं प्रयोजनमस्य भिक्षाः] 'alms whose purpose is a single house'), no affix is added. Some say it's formed by adding @deva[इकट्] with irregular @deva[वृद्धि] of the first syllable.",
                "advanced": "This sūtra is a @deva[निपातन] for @deva[ऐकागारिक] 'thief'. Though derivable by @deva[ठञ्], the form is @deva[रूढ] (conventional) for 'thief' only—not applied to other contexts. Feminine: @deva[ऐकागारिकी] (by @deva[ङीप्]). Alternative analysis: @deva[इकट्] affix with irregular @deva[वृद्धि]."
            }
        },
        "51114": {
            "en": {
                "simple": "The word @deva[आकालिक] is irregularly formed meaning 'what lasts only an instant'. @deva[आकालिकः स्तनयित्नुः] 'thunder lasting an instant'; @deva[आकालिकी विद्युत्] 'lightning lasting a twinkle'.",
                "standard": "The word @deva[आकालिक] is irregularly formed (@deva[निपातन]) in the sense of 'what coincides with beginning and end', i.e., 'what lasts only an instant'. The word @deva[आकाल] substitutes for @deva[समानकाल] 'equal time'. Examples: @deva[आकालिकः स्तनयित्नुः] 'thunder lasting an instant'; @deva[आकालिकी विद्युत्] 'lightning lasting a twinkle' (dying as soon as born). @deva[वार्त्तिक]: The affixes @deva[ठन्] and @deva[ठञ्] also come after @deva[आकाल]: @deva[आकालिका विद्युत्]. This sūtra marks the end of the governing power of @deva[ठञ्] (@ref[5.1.18]).",
                "advanced": "This sūtra is a @deva[निपातन] for @deva[आकालिक] 'instantaneous'. The term @deva[आकाल] substitutes for @deva[समानकाल]. Examples: @deva[आकालिकः स्तनयित्नुः], @deva[आकालिकी विद्युत्]. A @deva[वार्त्तिक] adds @deva[ठन्] and @deva[ठञ्] options: @deva[आकालिका विद्युत्]. The @deva[अधिकार] of @deva[ठञ्] (@ref[5.1.18]) ends here."
            }
        },
        "51115": {
            "en": {
                "simple": "The affix @deva[वति] comes after a word in the instrumental case meaning 'like that' when similarity of action is meant. @deva[ब्राह्मणेन तुल्यं वर्तते] → @deva[ब्राह्मणवत्] 'like a Brāhmaṇa'.",
                "standard": "The affix @deva[वति] (adding @deva[वत्]) comes after a word in the instrumental (@deva[तृतीया]) case with the sense of 'like that' (@deva[तेन तुल्यम्]) when the meaning is similarity of action (@deva[क्रियासामान्य]). Examples: @deva[ब्राह्मणेन तुल्यं वर्तते] = @deva[ब्राह्मणवत्] 'acts like a Brāhmaṇa'; @deva[राजवत्] 'like a king'. When the similarity is in quality (@deva[गुण]) rather than action, the affix doesn't apply: @deva[पुत्रेण सह स्थूलः] 'as big as the son', @deva[पुत्रेण तुल्यः पिङ्गलः] 'as tawny as the son'.",
                "advanced": "This sūtra teaches @deva[वति] after @deva[तृतीया] with @deva[तुल्य] sense when @deva[क्रिया] (action) similarity is meant. Examples: @deva[ब्राह्मणवत्], @deva[राजवत्]. The condition @deva[क्रियासामान्ये] excludes @deva[गुण] (quality) comparisons: *@deva[पुत्रवत् स्थूलः] is not formed."
            }
        },
        "51116": {
            "en": {
                "simple": "The affix @deva[वति] also comes meaning 'like what is therein or thereof'. @deva[मथुरायामिव] → @deva[मथुरावत्] 'like (what is) in Mathurā'.",
                "standard": "The affix @deva[वति] (adding @deva[वत्]) also comes in the sense of 'like what is therein or thereof' (@deva[तत्र इव], @deva[तस्य इव]). Examples: @deva[मथुरायामिव] = @deva[मथुरावत्] 'like (what is) in Mathurā', as in @deva[मथुरावत् स्रुघ्ने प्राकारः] 'a wall in Srughna like (the one) in Mathurā'; @deva[पाटलिपुत्रवत् साकेते परिखा] 'a moat in Sāketa like (the one) in Pāṭaliputra'; @deva[देवदत्तस्येव देवदत्तवद् यज्ञदत्तस्य गावः] 'Yajñadatta's cows are like Devadatta's'.",
                "advanced": "This sūtra extends @deva[वति] to @deva[तत्र इव] (locative sense) and @deva[तस्य इव] (genitive sense). Examples: @deva[मथुरावत् स्रुघ्ने प्राकारः] 'Srughna's wall is like Mathurā's'; @deva[देवदत्तवद् यज्ञदत्तस्य गावः] 'Yajñadatta's cows are like Devadatta's'."
            }
        },
        "51117": {
            "en": {
                "simple": "The affix @deva[वति] comes after a word in the accusative case meaning 'befitting that'. @deva[राजानमर्हति] → @deva[राजवत् पालनम्] 'protection befitting a king'.",
                "standard": "The affix @deva[वति] (adding @deva[वत्]) comes after a word in the accusative (@deva[द्वितीया]) case with the sense of 'befitting or suited to that' (@deva[तमर्हति]). Examples: @deva[राजानमर्हति] = @deva[राजवत् पालनम्] 'protection as befits a king' (i.e., as a king should protect); @deva[ब्राह्मणवत्] 'befitting a Brāhmaṇa'; @deva[ऋषिवत्] 'befitting a sage'; @deva[क्षत्रियवत्] 'befitting a warrior'.",
                "advanced": "This sūtra teaches @deva[वति] after @deva[द्वितीया] with @deva[अर्हति] ('befits') sense. Examples: @deva[राजवत् पालनम्] 'kingly protection', @deva[ब्राह्मणवत्], @deva[ऋषिवत्], @deva[क्षत्रियवत्]."
            }
        },
        "51118": {
            "en": {
                "simple": "In Vedic usage, the affix @deva[वति] is added to an @deva[उपसर्ग] 'prefix' with the sense of a verbal root. @deva[उद्वतः] = @deva[उद्गतान्] 'those that have gone up'; @deva[निवतः] = @deva[निगतान्] 'those that have gone down'.",
                "standard": "In the @deva[छन्दस्] (Vedas), the affix @deva[वति] (adding @deva[वत्]) is added to an @deva[उपसर्ग] (preposition/prefix) with the sense of a verbal root (@deva[धात्वर्थ]). Examples: @deva[उद्वतः] and @deva[निवतः] in the Ṛgvedic verse (X.142.4): @deva[यदुद्वतो निवतो यासि वप्सत् पृथगेषि प्रगर्धिनीव सेना] 'When you, O Fire, go burning high (@deva[उद्वतः] = @deva[उद्गतान्] 'those that have gone up') and low (@deva[निवतः] = @deva[निगतान्] 'those that have gone down') trees...'",
                "advanced": "This sūtra teaches Vedic @deva[वति] after @deva[उपसर्ग] with @deva[धात्वर्थ] (verbal root meaning). The Ṛgvedic citation (X.142.4) shows @deva[उद्वतः] = @deva[उद्गतान्] and @deva[निवतः] = @deva[निगतान्], where the prefixes @deva[उद्] and @deva[नि] carry the sense of √@deva[गम्] 'go'."
            }
        },
        "51119": {
            "en": {
                "simple": "The affixes @deva[त्व] and @deva[तल्] come after a word in the genitive case meaning 'the nature thereof'. @deva[अश्वस्य भावः] → @deva[अश्वत्वम्] or @deva[अश्वता] 'horse-ness'.",
                "standard": "The affixes @deva[त्व] (adding @deva[त्व]) and @deva[तल्] (adding @deva[ता]) come after a word in the genitive (@deva[षष्ठी]) case with the sense of 'the nature thereof' (@deva[तस्य भावः]). Examples: @deva[अश्वस्य भावः] = @deva[अश्वत्वम्] or @deva[अश्वता] 'the nature of being a horse, horse-ness'; @deva[गोत्वम्] or @deva[गोता] 'cow-ness'.",
                "advanced": "This sūtra teaches @deva[त्व] and @deva[तल्] after @deva[षष्ठी] with @deva[भाव] (abstract nature) sense. These are the primary @deva[भाव] affixes. Examples: @deva[अश्वत्वम्] ~ @deva[अश्वता], @deva[गोत्वम्] ~ @deva[गोता]."
            }
        },
        "51120": {
            "en": {
                "simple": "From this sūtra through @ref[5.1.136], the affixes @deva[त्व] and @deva[तल्] govern. They also express @deva[कर्म] 'action' in @ref[5.1.124].",
                "standard": "This is a heading sūtra establishing that the affixes @deva[त्व] and @deva[तल्] govern from here through @ref[5.1.136]. Thus in @ref[5.1.122], @deva[त्व] and @deva[तल्] are understood, giving forms like @deva[पृथुत्वम्] and @deva[पृथुता]. This rule ensures these affixes apply despite subsequent sūtras ordaining other affixes. These affixes signify @deva[कर्म] (action) in addition to @deva[भाव] (nature) in @ref[5.1.124]. The @deva[च] in the sūtra ensures their admission despite affixes @deva[नञ्] and @deva[ञ्य] of @ref[6.1.87]. Examples: @deva[स्त्रियाः भावः] = @deva[स्त्रैणम्] (by @deva[ञ्य]), @deva[स्त्रीत्वम्], @deva[स्त्रीता]; @deva[पुंस्त्वम्], @deva[पुंस्ता], @deva[पौंस्नम्].",
                "advanced": "This @deva[अधिकार] sūtra establishes @deva[त्व] and @deva[तल्] as governing affixes through @ref[5.1.136]. The affixes apply despite competing rules; @deva[च] ensures coexistence with @deva[नञ्]/ञ्य] of @ref[6.1.87]. In @ref[5.1.124], they also express @deva[कर्म] (action), not just @deva[भाव]. Examples: @deva[स्त्रैणम्] ~ @deva[स्त्रीत्वम्] ~ @deva[स्त्रीता]; @deva[पौंस्नम्] ~ @deva[पुंस्त्वम्] ~ @deva[पुंस्ता]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.1.106-120)")

if __name__ == "__main__":
    main()
