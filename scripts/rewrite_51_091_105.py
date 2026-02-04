#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.1.91-105."""

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
        "51091": {
            "en": {
                "simple": "The affix @deva[छ] comes in Vedic usage after stems ending in @deva[वत्सर] 'year' in the five senses of @ref[5.1.76] and @ref[5.1.80]. @deva[इद्वत्सरीयः], @deva[इदावत्सरीयः].",
                "standard": "In the @deva[छन्दस्] (Vedas), the affix @deva[छ] (adding @deva[ईय]) comes in the five senses taught in @ref[5.1.76] ('always going') and @ref[5.1.80] ('solicited, hired, lasted, will last') after a stem ending in @deva[वत्सर] 'year'. This supersedes @deva[ठञ्]. Examples: @deva[इद्वत्सरीयः], @deva[इदावत्सरीयः].",
                "advanced": "This sūtra teaches Vedic @deva[छ] after @deva[वत्सर]-final stems with the @ref[5.1.76] and @ref[5.1.80] senses. The @deva[छ] supersedes @deva[ठञ्]. Results: @deva[इद्वत्सरीयः], @deva[इदावत्सरीयः]."
            }
        },
        "51092": {
            "en": {
                "simple": "The affixes @deva[ख] and @deva[छ] come in Vedic usage after @deva[वत्सर] 'year' when preceded by @deva[सम्] or @deva[परि]. @deva[संवत्सरीणः] and @deva[संवत्सरीयः]; @deva[परिवत्सरीणः] and @deva[परिवत्सरीयः].",
                "standard": "In the @deva[छन्दस्] (Vedas), the affixes @deva[ख] (adding @deva[ईन]) and @deva[छ] (adding @deva[ईय]) come in the five senses taught in @ref[5.1.76] and @ref[5.1.80] after @deva[वत्सर] 'year' when preceded by @deva[सम्] or @deva[परि]. Examples: @deva[संवत्सरीणः] and @deva[संवत्सरीयः]; @deva[परिवत्सरीणः] and @deva[परिवत्सरीयः].",
                "advanced": "This sūtra teaches Vedic @deva[ख] and @deva[छ] after @deva[सम्] + @deva[वत्सर] and @deva[परि] + @deva[वत्सर] with the @ref[5.1.76] and @ref[5.1.80] senses. Results: @deva[संवत्सरीणः] ~ @deva[संवत्सरीयः]; @deva[परिवत्सरीणः] ~ @deva[परिवत्सरीयः]."
            }
        },
        "51093": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after a time-denoting word in the instrumental case meaning 'to be subdued, attained, done, or easily done in that time'. @deva[मासेन जय्यः] → @deva[मासिको व्याधिः] 'a disease conquerable in a month'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes after a word denoting time in the instrumental (@deva[तृतीया]) case with the sense of 'to be subdued (@deva[परिजय्य]), attained (@deva[लभ्य]), done (@deva[कार्य]), or easily done (@deva[सुकर]) in that time'. Examples: @deva[मासेन परिजय्यः] = @deva[मासिको व्याधिः] 'a disease conquerable in a month'; @deva[सांवत्सरिको व्याधिः] 'curable in a year'; @deva[मासेन लभ्यः] = @deva[मासिकः पटः] 'cloth obtainable in a month'; @deva[मासेन कार्यम्] = @deva[मासिकं चान्द्रायणम्] '@deva[चान्द्रायण] to be done in a month'; @deva[मासेन सुकरः] = @deva[मासिकः प्रासादः] 'a palace easily built in a month'.",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[काल] words in @deva[तृतीया] with four senses: @deva[परिजय्य] (conquerable), @deva[लभ्य] (obtainable), @deva[कार्य] (to be done), @deva[सुकर] (easily done). Examples: @deva[मासिको व्याधिः], @deva[सांवत्सरिको व्याधिः], @deva[मासिकः पटः], @deva[मासिकं चान्द्रायणम्], @deva[मासिकः प्रासादः]."
            }
        },
        "51094": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after a time-denoting word meaning 'abstinence lasting that long' or 'one who practices abstinence that long'. @deva[मासं ब्रह्मचर्यमस्य] → @deva[मासिको ब्रह्मचारी] 'one who observes celibacy for a month'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes after a word denoting time with the sense of 'abstinence (@deva[ब्रह्मचर्य]) lasting that long' or 'who practices abstinence that long'. Two interpretations: (1) Accusative construction: @deva[मासं ब्रह्मचर्यमस्य] = @deva[मासिको ब्रह्मचारी] 'one who observes abstinence for a month'; (2) Nominative construction: @deva[मासो अस्य ब्रह्मचर्यस्य] = @deva[मासिकं ब्रह्मचर्यम्] 'abstinence lasting a month'. Both are valid. @deva[वार्त्तिक]s: (1) @deva[ठञ्] after @deva[महानाम्नी] etc. in genitive: @deva[माहानामिकम्], @deva[गौदानिकम्], @deva[आदित्यव्रतिकम्]; also meaning 'who practices that': @deva[महानाम्नीश्चरति] = @deva[माहानामिकः] (per @ref[6.3.35] @deva[वार्त्तिक] and @ref[6.4.144]); (2) @deva[डिनि] after @deva[अवान्तरदीक्षा] etc.: @deva[अवान्तरदीक्षी], @deva[तिलव्रतिन्]; (3) @deva[ड्वुन्] and @deva[डिनि] after @deva[अष्टचत्वारिंशत्]: @deva[अष्टचत्वारिंशकः] or @deva[अष्टचत्वारिंशिन्]; (4) same after @deva[चतुर्मास्य] with @deva[य]-elision: @deva[चातुर्मासकः] or @deva[चातुर्मासिन्]; (5) @deva[ण्य] after @deva[चतुर्मास] meaning 'produced there': @deva[चातुर्मास्यानि] (sacrifices); (6) @deva[अण्] when a name: @deva[चातुर्मासी पौर्णमासी], @deva[आषाढी], @deva[कार्तिकी], @deva[फाल्गुनी].",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[काल] words with @deva[ब्रह्मचर्य] sense. Two constructions: (1) @deva[द्वितीया]: @deva[मासिको ब्रह्मचारी] 'one who observes for a month'; (2) @deva[प्रथमा]: @deva[मासिकं ब्रह्मचर्यम्] 'month-long abstinence'. Six @deva[वार्त्तिक]s extend the rule: @deva[ठञ्] after @deva[महानाम्न्यादि] (with @deva[षष्ठी]); @deva[डिनि] after @deva[अवान्तरदीक्षादि]; @deva[ड्वुन्]/डिनि] after @deva[अष्टचत्वारिंशत्]; same after @deva[चतुर्मास्य] (with @deva[य]-deletion); @deva[ण्य] after @deva[चतुर्मास] for @deva[भव] sense; @deva[अण्] when @deva[संज्ञा] (names like @deva[चातुर्मासी], @deva[आषाढी], etc.)."
            }
        },
        "51095": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after a word naming a sacrifice in the sense of 'the fee thereof'. @deva[अग्निष्टोमस्य दक्षिणा] → @deva[आग्निष्टोमिकी] 'the fee for the @deva[अग्निष्टोम] sacrifice'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes after a word being the name of a sacrifice in the sense of 'the fee (@deva[दक्षिणा]) thereof'. Examples: @deva[अग्निष्टोमस्य दक्षिणा] = @deva[आग्निष्टोमिकी] 'the fee for the @deva[अग्निष्टोम]'; @deva[वाजपेयिकी] 'fee for @deva[वाजपेय]'; @deva[राजसूयिकी] 'fee for @deva[राजसूय]'. The word @deva[आख्या] 'name' in the sūtra indicates that the affix applies even to sacrifice-names that don't denote time (unlike @ref[5.1.78]); without it, the rule would apply only to time-denoting sacrifice-names like @deva[एकाह], @deva[द्वादशाह]. The @deva[वार्त्तिक] of @ref[5.1.20] applies to @deva[द्वादशाह] etc.",
                "advanced": "This sūtra teaches @deva[ठञ्] after sacrifice-names with @deva[दक्षिणा] sense. The term @deva[आख्या] ensures application to all sacrifice-names, not just @deva[काल]-denoting ones like @deva[एकाह], @deva[द्वादशाह]. Examples: @deva[आग्निष्टोमिकी], @deva[वाजपेयिकी], @deva[राजसूयिकी]. The @deva[इष्टि] of @ref[5.1.20] (@deva[तदन्तग्रहण]) applies to @deva[द्वादशाह] etc. Some texts omit @deva[च] in the sūtra."
            }
        },
        "51096": {
            "en": {
                "simple": "The affixes having the @deva[भव] sense (@ref[4.3.53], @ref[4.3.11]) come after time-denoting words meaning 'given in that' or 'done in that'. @deva[मासे दीयते कार्यं वा] → @deva[मासिकम्].",
                "standard": "The affixes having the @deva[तत्र भवः] sense (@ref[4.3.53], @ref[4.3.11]) come after a time-denoting word with the sense of 'what is given in that' (@deva[तत्र दीयते]) and 'what is done in that' (@deva[तत्र कार्यम्]). Examples: @deva[मासे भवम्] = @deva[मासिकम्] (per @ref[4.3.11]), which also means 'given in a month' and 'done in a month'; @deva[सांवत्सरिकम्], @deva[प्रावृषेण्यम्] (@ref[4.3.17]), @deva[वासन्तिकम्] (@ref[4.3.20]), @deva[वासन्तम्] (@ref[4.3.16]), @deva[हैमनम्] (@ref[4.3.22]), @deva[हैमन्तम्] (@ref[4.3.16]), @deva[हैमन्तिकम्] (@ref[4.3.21]), @deva[शारदम्] (@ref[4.3.16]). All these also mean 'given or done in those seasons'. The word @deva[वत्] in @deva[भववत्] indicates that all rules of @ref[4.3.53] apply. This sūtra also connects with @ref[5.1.95]: @deva[तत्र दीयते] applies to sacrifice-names—@deva[आग्निष्टोमिकं भक्तम्] 'food given at @deva[अग्निष्टोम]'. The governance of @deva[काल] (@ref[5.1.78]) ends here.",
                "advanced": "This sūtra extends the @deva[तत्र भवः] affixes (@ref[4.3.53], @ref[4.3.11]) to the @deva[दीयते]/कार्यम्] senses after @deva[काल] words. All @ref[4.3.53] rules apply (indicated by @deva[वत्]). Examples: @deva[मासिकम्], @deva[सांवत्सरिकम्], @deva[प्रावृषेण्यम्], @deva[वासन्तिकम्], @deva[हैमनम्], etc. The sūtra divides: one part joins @ref[5.1.95] (@deva[यज्ञाख्येभ्यः]): @deva[आग्निष्टोमिकं भक्तम्], @deva[राजसूयिकम्]. The @deva[काल]-@deva[अधिकार] of @ref[5.1.78] ends here."
            }
        },
        "51097": {
            "en": {
                "simple": "The affix @deva[अण्] comes after @deva[व्युष्टादि] words in the locative case meaning 'given therein' or 'done therein'. @deva[व्युष्टे दीयते कार्यं वा] → @deva[वैयुष्टम्].",
                "standard": "The affix @deva[अण्] (adding @deva[अ]) comes after @deva[व्युष्टादि] words in the locative (@deva[सप्तमी]) case with the sense of 'given therein' (@deva[तत्र दीयते]) or 'done therein' (@deva[तत्र कार्यम्]). Examples: @deva[व्युष्टे दीयते कार्यं वा] = @deva[वैयुष्टम्]; @deva[नैत्यम्]. @deva[वार्त्तिक]: @deva[अण्] also after @deva[अग्निपद] etc.: @deva[आग्निपदम्], @deva[पैलमूलम्] (these may be included in @deva[व्युष्टादि]). The @deva[व्युष्टादि] class contains 15 words: @deva[व्युष्ट], @deva[नित्य], @deva[निष्क्रमण], @deva[प्रवेशन], @deva[उपसंक्रमण], @deva[तीर्थ], @deva[आस्तरण], @deva[संग्राम], @deva[संघात], @deva[अग्निपद], @deva[पीलुमूल], @deva[प्रवास], @deva[उपवास], @deva[संभ्रम], @deva[दीर्घ].",
                "advanced": "This sūtra teaches @deva[अण्] after @deva[व्युष्टादि] words in @deva[सप्तमी] with @deva[दीयते]/कार्यम्] senses. The gaṇa has 15 words. Examples: @deva[वैयुष्टम्], @deva[नैत्यम्]. A @deva[वार्त्तिक] adds @deva[अग्निपदादि] (@deva[आग्निपदम्], @deva[पैलमूलम्]), which could be subsumed in @deva[व्युष्टादि]."
            }
        },
        "51098": {
            "en": {
                "simple": "The affixes @deva[ण] and @deva[यत्] come after @deva[यथाकथाच] and @deva[हस्त] respectively in the instrumental case meaning 'given or done in this way'. @deva[याथाकथाचम्]; @deva[हस्त्यम्].",
                "standard": "The affix @deva[ण] (adding @deva[अ] with @deva[वृद्धि]) comes after @deva[यथाकथाच] 'in a contemptuous manner' (an indeclinable), and @deva[यत्] (adding @deva[य]) comes after @deva[हस्त] 'hand', both being in the instrumental (@deva[तृतीया]) case, with the sense of 'given or done in that way'. The words @deva[दीयते] and @deva[कार्य] apply to both—not @deva[यथासंख्य] (@ref[1.3.10]). Since @deva[यथाकथाच] is indeclinable, it only gives the instrumental sense. Examples: @deva[यथाकथाच दीयते कार्यं वा] = @deva[याथाकथाचम्] 'given/done carelessly'; @deva[हस्तेन दीयते कार्यं वा] = @deva[हस्त्यम्] 'given/done by hand'.",
                "advanced": "This sūtra teaches @deva[ण] after @deva[यथाकथाच] (indeclinable expressing contempt) and @deva[यत्] after @deva[हस्त], both in @deva[तृतीया] with @deva[दीयते]/कार्यम्] senses. The @deva[यथासंख्य] rule (@ref[1.3.10]) doesn't apply—both senses go with both words. Results: @deva[याथाकथाचम्] 'carelessly given/done', @deva[हस्त्यम्] 'manually given/done'."
            }
        },
        "51099": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after a word in the instrumental case meaning 'fitted for that'. @deva[कर्णवेष्टकाभ्यां संपादि मुखम्] → @deva[कार्णवेष्टकिकं मुखम्] 'a face fitted for earrings'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes after a word in the instrumental (@deva[तृतीया]) case with the sense of 'fitted for that' (@deva[तेन संपादि]). The word @deva[संपत्ति] means 'suitable, proper, fit'. The word @deva[संपादिन्] is formed by @deva[णिनि] with necessity sense per @ref[3.3.170]. Examples: @deva[कर्णवेष्टकाभ्यां संपादि मुखम्] = @deva[कार्णवेष्टकिकं मुखम्] 'a face fitted for earrings'; @deva[वास्त्रयुग्मिकं शरीरम्] 'a body suited for a pair of garments' (i.e., it looks especially good with such).",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[तृतीया] words with @deva[संपादि] ('fit for') sense. The term @deva[संपादिन्] is derived via @deva[णिनि] per @ref[3.3.170] (necessity). Examples: @deva[कार्णवेष्टकिकं मुखम्] 'face suited for earrings', @deva[वास्त्रयुग्मिकं शरीरम्] 'body that looks especially good with a pair of garments'."
            }
        },
        "51100": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[कर्मन्] 'action' and @deva[वेष] 'costume' in the instrumental case meaning 'fitted with that'. @deva[कर्मण्यं शरीरम्] 'a body fit for work'; @deva[वेष्यो नटः] 'an actor suited to costume'.",
                "standard": "The affix @deva[यत्] (adding @deva[य]) comes in the sense of 'fitted with that' after @deva[कर्मन्] 'action, work' and @deva[वेष] 'costume, appearance' in the instrumental (@deva[तृतीया]) case. This supersedes @deva[ठञ्]. Examples: @deva[कर्मणा संपद्यते] = @deva[कर्मण्यं शरीरम्] 'a body fit for work'; @deva[वेषेण संपद्यते] = @deva[वेष्यो नटः] 'an actor suited to costume'. For accent, see @ref[6.1.213].",
                "advanced": "This sūtra teaches @deva[यत्] after @deva[कर्मन्] and @deva[वेष] in @deva[तृतीया] with @deva[संपद्यते] sense. The @deva[यत्] supersedes @deva[ठञ्]. Results: @deva[कर्मण्यम्] 'fit for action', @deva[वेष्यः] 'suited for costume'. Accent per @ref[6.1.213]."
            }
        },
        "51101": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after @deva[संतापादि] words in the dative case meaning 'able to effect that'. @deva[संतापाय प्रभवति] → @deva[सांतापिकः] 'able to cause burning'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes after @deva[संतापादि] words in the dative (@deva[चतुर्थी]) case with the sense of 'able to effect that' (@deva[तस्मै प्रभवति]). The word @deva[प्रभवति] means 'is able, capable'. The dative here has the force of @deva[अलम्] per @ref[2.3.16]. Examples: @deva[संतापाय प्रभवति] = @deva[सांतापिकः] 'able to cause affliction'; @deva[सान्नाहिकः] 'capable of arming'. The @deva[संतापादि] class contains 21 words: @deva[संताप], @deva[संनाह], @deva[संग्राम], @deva[संयोग], @deva[संपराय], @deva[संवेशन], @deva[संपेष], @deva[निष्पेष], @deva[सर्ग], @deva[निसर्ग], @deva[विसर्ग], @deva[उपसर्ग], @deva[प्रवास], @deva[उपवास], @deva[संघात], @deva[संवेष], @deva[संवास], @deva[संमोदन], @deva[सक्तु], @deva[मांसौदनाद्विगृहीतादपि], @deva[असर्ग].",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[संतापादि] words in @deva[चतुर्थी] with @deva[प्रभवति] ('is capable') sense. The @deva[चतुर्थी] has @deva[अलम्]-force per @ref[2.3.16]. The gaṇa has 21 words. Examples: @deva[सांतापिकः], @deva[सान्नाहिकः]."
            }
        },
        "51102": {
            "en": {
                "simple": "The affix @deva[यत्] also comes after @deva[योग] 'union, fitness' meaning 'able to effect that'. @deva[योगाय प्रभवति] → @deva[योग्यः] or @deva[यौगिकः].",
                "standard": "The affix @deva[यत्] (adding @deva[य]) also comes in the sense of 'able to effect that' after @deva[योग] 'union, fitness, application'. Examples: @deva[योगाय प्रभवति] = @deva[योग्यः] (with @deva[यत्]) or @deva[यौगिकः] (with @deva[ठञ्]) 'fit, suitable, capable'.",
                "advanced": "This sūtra teaches @deva[यत्] after @deva[योग] with the @deva[प्रभवति] sense. The option is with @deva[ठञ्]. Results: @deva[योग्यः] ~ @deva[यौगिकः] 'capable, suitable'."
            }
        },
        "51103": {
            "en": {
                "simple": "The affix @deva[उकञ्] comes after @deva[कर्मन्] meaning 'able to effect that'. @deva[कर्मणे प्रभवति] → @deva[कार्मुकं धनुः] 'a bow (capable for action)'.",
                "standard": "The affix @deva[उकञ्] (adding @deva[उक]) comes in the sense of 'able to effect that' after @deva[कर्मन्] 'action'. This supersedes @deva[ठञ्]. Example: @deva[कर्मणे प्रभवति] = @deva[कार्मुकं धनुः] 'a bow' (lit. 'capable of action'). The word @deva[कार्मुकम्] always means 'bow' and is never used for anything else.",
                "advanced": "This sūtra teaches @deva[उकञ्] after @deva[कर्मन्] with @deva[प्रभवति] sense. The @deva[उकञ्] supersedes @deva[ठञ्]. Result: @deva[कार्मुकम्] 'bow'—a @deva[रूढ] (conventional) meaning, never used otherwise."
            }
        },
        "51104": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after @deva[समय] 'time' in the nominative case meaning 'that has arrived for it'. @deva[समयः प्राप्तोऽस्य] → @deva[सामयिकं कर्म] 'a work for which the time has come'.",
                "standard": "The affix @deva[ठञ्] (adding @deva[इक]) comes in the sense of 'that has arrived for it' (@deva[प्राप्त]) after @deva[समय] 'time, occasion' in the nominative (@deva[प्रथमा]) case. Example: @deva[समयः प्राप्तोऽस्य] = @deva[सामयिकं कर्म] 'a work for which the time has come'.",
                "advanced": "This sūtra teaches @deva[ठञ्] after @deva[समय] in @deva[प्रथमा] with @deva[प्राप्त] ('arrived') sense. Result: @deva[सामयिकम्] 'timely, for which the time has come'."
            }
        },
        "51105": {
            "en": {
                "simple": "The affix @deva[अण्] comes after @deva[ऋतु] 'season' meaning 'that has come for it'. @deva[ऋतुः प्राप्तोऽस्य] → @deva[आर्तवं पुष्पम्] 'a flower for which the season has arrived'.",
                "standard": "The affix @deva[अण्] (adding @deva[अ]) comes in the sense of 'that has come for it' after @deva[ऋतु] 'season'. Example: @deva[ऋतुः प्राप्तोऽस्य] = @deva[आर्तवं पुष्पम्] 'a flower for which the season has arrived' (with @deva[गुण] per @ref[6.4.146]). @deva[वार्त्तिक]: @deva[अण्] also after @deva[उपवस्त्र] etc.: @deva[औपवस्त्रम्], @deva[प्राशित्रम्].",
                "advanced": "This sūtra teaches @deva[अण्] after @deva[ऋतु] with @deva[प्राप्त] sense. Result: @deva[आर्तवम्] 'seasonal' (with @deva[गुण] per @ref[6.4.146]). A @deva[वार्त्तिक] extends to @deva[उपवस्त्रादि]: @deva[औपवस्त्रम्], @deva[प्राशित्रम्]."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.1.91-105)")

if __name__ == "__main__":
    main()
