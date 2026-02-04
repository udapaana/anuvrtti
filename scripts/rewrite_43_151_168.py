#!/usr/bin/env python3
"""Rewrite commentary for sūtras 4.3.151-168."""

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
        "43151": {
            "en": {
                "simple": "In Vedic literature (@deva[छन्दस्]), the affix @deva[मयट्] does not come after disyllabic words containing a short @deva[उ], nor after @deva[वर्ध्र] and @deva[बिल्व].\n\n**Examples:**\n- @deva[मुञ्ज] → @deva[मौञ्जं शिक्यम्] (with @deva[अण्], not @deva[मयट्])\n- @deva[गर्मुत्] → @deva[गार्मुतं चक्रम्] (with @deva[अञ्])\n- @deva[वर्ध्र] → @deva[वार्ध्री बालप्रग्रथिता भवति]\n- @deva[बिल्व] → @deva[बैल्वो ब्रह्मवर्चसकामेन कार्यः]\n\nThe rule says @deva[उत्वत्] ('having short @deva[उ]'), not just 'ending in @deva[उ].' The @deva[वत्] indicates the rule applies to words with @deva[उ] anywhere, including @deva[वेणु]: @deva[वैणवी यष्टिः] (by @ref[4.3.136]).\n\nFor words with long @deva[ऊ], @deva[मयट्] applies: @deva[भूममयान्यभ्राणि].",
                "standard": "In @deva[छन्दस्], @deva[मयट्] is blocked after @deva[द्व्यच्] words containing @deva[उ] (short), and after @deva[वर्ध्र] and @deva[बिल्व].\n\n**Examples:**\n- @deva[मुञ्ज] → @deva[मौञ्जं शिक्यम्] (@deva[अण्]; @deva[मुञ्ज] is @deva[आद्युदात्त] by Phiṭ II.4 (@deva[तृणधान्यानाम्]))\n- @deva[गर्मुत्] → @deva[गार्मुतं चक्रम्] (@deva[अञ्] by @ref[4.3.140]; @deva[गर्मुत्] formed by @deva[उत्] + @deva[मुट्] per Uṇ. I.94-95)\n- @deva[वार्ध्री] (@deva[वर्ध्र] is @deva[आद्युदात्त] by Phiṭ II.19; feminine by @deva[ङीप्] @ref[4.1.15])\n- @deva[बैल्वः]\n\n**@deva[उत्वत्]:** The @deva[वत्] shows the rule applies to words *having* @deva[उ] (not just ending in it), hence @deva[वेणु] also: @deva[वैणवी यष्टिः] (@ref[4.3.136]).\n\nLong @deva[ऊ] doesn't block: @deva[भूममयान्यभ्राणि].",
                "advanced": "In @deva[छन्दस्], @deva[मयट्] is blocked after @deva[द्व्यच्] words with @deva[उ] (@deva[ह्रस्व]), and after @deva[वर्ध्र], @deva[बिल्व].\n\n**Examples:**\n- @deva[मुञ्ज]: @deva[आद्युदात्त] (Phiṭ II.4) → @deva[अण्] → @deva[मौञ्जम्]\n- @deva[गर्मुत्]: @deva[अन्त्योदात्त] (@deva[उत्] + @deva[मुट्], Uṇ. I.94-95) → @deva[अञ्] (@ref[4.3.140]) → @deva[गार्मुतम्]\n- @deva[वर्ध्र]: @deva[आद्युदात्त] (Phiṭ II.19) → @deva[अण्] → @deva[वार्ध्री] (@deva[ङीप्])\n- @deva[बैल्वः]\n\n**@deva[उत्वत्]:** @deva[वत्] blocks @deva[तदन्तविधि]; rule applies to words *containing* @deva[उ], not just ending in it. Hence @deva[वेणु] (@ref[4.3.136]): @deva[वैणवी].\n\n@deva[दीर्घ ऊ] doesn't block: @deva[भूममयानि]."
            }
        },
        "43152": {
            "en": {
                "simple": "The affix @deva[अण्] comes in the @deva[विकार] (modification) or @deva[अवयव] (part) sense after words in the @deva[तालादि] list. This overrides @deva[मयट्] etc.\n\n**Examples:**\n- @deva[तालं धनुः] 'a bow made of Tāla palm'\n- @deva[बार्हिणम्], @deva[ऐन्द्रालिशम्]\n\n**@deva[तालादि] list:** @deva[ताल] (for bows), @deva[बर्हिण], @deva[इन्द्रालिश], @deva[इन्द्रादृश], @deva[इन्द्रायुध], @deva[चय], @deva[श्यामाक], @deva[पीयूक्षा].",
                "standard": "The affix @deva[अण्] comes after @deva[तालादि] words in the @deva[विकार]/​@deva[अवयव] sense, debarring @deva[मयट्] etc.\n\n**Examples:** @deva[तालं धनुः], @deva[बार्हिणम्], @deva[ऐन्द्रालिशम्]\n\n**@deva[तालादि] गण (8):** @deva[ताल] (धनुषि), @deva[बर्हिण], @deva[इन्द्रालिश], @deva[इन्द्रादृश], @deva[इन्द्रायुध], @deva[चय]/​@deva[चाप]/​@deva[चर्ग], @deva[श्यामाक], @deva[पीयूक्षा].",
                "advanced": "This @deva[सूत्र] prescribes @deva[अण्] after @deva[तालादि] words in the @deva[विकार]/​@deva[अवयव] sense, as @deva[अपवाद] to @deva[मयट्] etc.\n\n**Examples:** @deva[तालं धनुः], @deva[बार्हिणम्], @deva[ऐन्द्रालिशम्]\n\n**@deva[तालादि] गण:** @deva[ताल] (धनुषि), @deva[बर्हिण], @deva[इन्द्रालिश], @deva[इन्द्रादृश], @deva[इन्द्रायुध], @deva[चय] (@deva[चाप], @deva[चर्ग]), @deva[श्यामाक], @deva[पीयूक्षा]."
            }
        },
        "43153": {
            "en": {
                "simple": "The affix @deva[अण्] comes after words meaning 'gold' (@deva[जातरूप] etc.) when the product is a weight or measure. This overrides @deva[मयट्] etc.\n\nThe plural @deva[जातरूपेभ्यः] in the rule indicates all gold-synonyms are included.\n\n**Examples:**\n- @deva[हाटकः निष्कः] 'a gold niṣka (a measure)'\n- @deva[हाटकं कार्षापणम्], @deva[जातरूपम्], @deva[तापनीयम्]\n\nWhy 'meaning a measure'? For non-measures: @deva[यष्टिरियं हाटकमयी] 'this staff is made of gold' (with @deva[मयट्]).",
                "standard": "The affix @deva[अण्] comes after gold-denoting words (@deva[जातरूप] etc.) when @deva[परिमाण] (measure/weight) is meant, debarring @deva[मयट्] etc.\n\nThe plural @deva[जातरूपेभ्यः] includes all gold-synonyms.\n\n**Examples:** @deva[हाटकः निष्कः], @deva[हाटकं कार्षापणम्], @deva[जातरूपम्], @deva[तापनीयम्]\n\n**@deva[परिमाणे]:** Non-measure: @deva[यष्टिरियं हाटकमयी] (with @deva[मयट्]).",
                "advanced": "This @deva[सूत्र] teaches @deva[अण्] after @deva[जातरूप]-synonyms (gold words) when @deva[परिमाण] (measure) is meant, debarring @deva[मयट्] etc.\n\nThe @deva[बहुवचन] (@deva[जातरूपेभ्यः]) indicates all synonyms.\n\n**Examples:** @deva[हाटकः निष्कः], @deva[हाटकं कार्षापणम्], @deva[जातरूपम्], @deva[तापनीयम्]\n\n**@deva[परिमाणे] condition:** @deva[यष्टिरियं हाटकमयी] (non-measure, with @deva[मयट्])."
            }
        },
        "43154": {
            "en": {
                "simple": "The affix @deva[अञ्] comes in the @deva[विकार] (modification) or @deva[अवयव] (part) sense after words denoting living beings (@deva[प्राणिन्]) and after words in the @deva[रजतादि] list. This overrides @deva[अण्] etc.\n\nThe affix @deva[अञ्] was already taught for @deva[अनुदात्तादि] words (@ref[4.3.140]). This rule extends it to other words.\n\n**@deva[प्राणिन्] examples:**\n- @deva[कापोतम्] 'of/from a pigeon'\n- @deva[मायूरम्] 'of/from a peacock'\n- @deva[तैत्तिरम्] 'of/from a partridge'\n\n**@deva[रजतादि] examples:**\n- @deva[राजतम्] 'made of silver'\n- @deva[सैसम्] 'made of lead'\n- @deva[लौहम्] 'made of iron'\n\nSome @deva[रजतादि] words like @deva[रजत] and @deva[कण्टकार] are @deva[अनुदात्तादि] and would take @deva[अञ्] anyway by @ref[4.3.140]; their inclusion here blocks @deva[मयट्].\n\n**@deva[रजतादि] list:** @deva[रजत], @deva[सीस], @deva[लोह], @deva[उदुम्बर], @deva[नीप], @deva[दारु], @deva[रोहीतक], @deva[विभीतक], @deva[पीतदारु], @deva[तीव्रदारु], @deva[त्रिकण्टक], @deva[कण्टकार].",
                "standard": "The affix @deva[अञ्] comes after @deva[प्राणिन्] (living beings) and @deva[रजतादि] words in the @deva[विकार]/​@deva[अवयव] sense, debarring @deva[अण्] etc.\n\n@deva[अञ्] was taught for @deva[अनुदात्तादि] words at @ref[4.3.140]. This extends to non-@deva[अनुदात्तादि] words.\n\n**@deva[प्राणिन्]:** @deva[कापोतम्], @deva[मायूरम्], @deva[तैत्तिरम्]\n\n**@deva[रजतादि]:** @deva[राजतम्], @deva[सैसम्], @deva[लौहम्]\n\nWords like @deva[रजत], @deva[कण्टकार] (which are @deva[अनुदात्तादि]) are included to block @deva[मयट्].\n\n**@deva[रजतादि] गण (12):** @deva[रजत], @deva[सीस], @deva[लोह], @deva[उदुम्बर], @deva[नीप]/​@deva[नीच]/​@deva[नील], @deva[दारु], @deva[रोहीतक]/​@deva[रोहितक], @deva[विभीतक], @deva[पीतदारु]/​@deva[कपीतदारु], @deva[तीव्रदारु], @deva[त्रिकण्टक], @deva[कण्टकार].",
                "advanced": "This @deva[सूत्र] prescribes @deva[अञ्] after @deva[प्राणिन्] and @deva[रजतादि] words in the @deva[विकार]/​@deva[अवयव] sense, as @deva[अपवाद] to @deva[अण्] etc.\n\n@deva[अञ्] for @deva[अनुदात्तादि] was at @ref[4.3.140]; this extends to non-@deva[अनुदात्तादि].\n\n**@deva[प्राणिन्]:** @deva[कापोतम्], @deva[मायूरम्], @deva[तैत्तिरम्]\n\n**@deva[रजतादि]:** @deva[राजतम्], @deva[सैसम्], @deva[लौहम्]\n\n@deva[अनुदात्तादि] members (@deva[रजत], @deva[कण्टकार]) are included specifically to block @deva[मयट्].\n\n**@deva[रजतादि] गण:** @deva[रजत], @deva[सीस], @deva[लोह], @deva[उदुम्बर], @deva[नीप] (@deva[नीच], @deva[नील]), @deva[दारु], @deva[रोहीतक] (@deva[रोहितक]), @deva[विभीतक], @deva[पीतदारु] (@deva[कपीतदारु]), @deva[तीव्रदारु], @deva[त्रिकण्टक], @deva[कण्टकार]."
            }
        },
        "43155": {
            "en": {
                "simple": "The affix @deva[अञ्] comes in the @deva[विकार] (modification) or @deva[अवयव] (part) sense after a word that already ends in a @deva[ञित्] affix (an affix with indicatory @deva[ञ्]) used in the @deva[विकार]/​@deva[अवयव] sense.\n\nThe @deva[ञित्] affixes in this sense are: @deva[अञ्] (@ref[4.3.139], @ref[4.3.154]), @deva[ट्लञ्] (@ref[4.3.142]), @deva[वुञ्] (@ref[4.3.157]), @deva[ढञ्] (@ref[4.3.159]), @deva[यञ्] (@ref[4.3.168]).\n\nWhen forming a tertiary derivative from such words, @deva[अञ्] is used.\n\n**Examples:**\n- @deva[दैवदारवम्] (from @deva[दैवदारव]) → @deva[दैवदारवम्]\n- @deva[दाधित्थम्], @deva[पालाशम्], @deva[शामीलम्], @deva[कापोतम्], @deva[औष्ट्रकम्], @deva[ऐणेयम्], @deva[कांस्यम्], @deva[पारशवम्]\n\nWhy '@deva[ञित्]'? After non-@deva[ञित्] affixes, @deva[मयट्] applies: @deva[बैल्वमयम्] (from @deva[बैल्व], which has @deva[अण्] by @ref[4.3.136]).",
                "standard": "The affix @deva[अञ्] comes after a word ending in a @deva[ञित्] @deva[विकार]/​@deva[अवयव] affix, when forming a further derivative in the same sense.\n\n**@deva[ञित्] affixes in this sense:** @deva[अञ्] (@ref[4.3.139], @ref[4.3.154]), @deva[ट्लञ्] (@ref[4.3.142]), @deva[वुञ्] (@ref[4.3.157]), @deva[ढञ्] (@ref[4.3.159]), @deva[यञ्] (@ref[4.3.168]).\n\n**Examples:** @deva[दैवदारवम्], @deva[दाधित्थम्], @deva[पालाशम्], @deva[शामीलम्], @deva[कापोतम्], @deva[औष्ट्रकम्], @deva[ऐणेयम्], @deva[कांस्यम्], @deva[पारशवम्]\n\n**@deva[ञितः] condition:** After non-@deva[ञित्]: @deva[बैल्वमयम्] (from @deva[बैल्व], @deva[अण्] by @ref[4.3.136]); @deva[बैदमयम्].",
                "advanced": "This @deva[सूत्र] teaches @deva[अञ्] after @deva[ञित्] @deva[विकार]/​@deva[अवयव] affixes for tertiary derivatives.\n\n**@deva[ञित्] @deva[विकारार्थ] affixes:** @deva[अञ्] (@ref[4.3.139], @ref[4.3.154]), @deva[ट्लञ्] (@ref[4.3.142]), @deva[वुञ्] (@ref[4.3.157]), @deva[ढञ्] (@ref[4.3.159]), @deva[यञ्] (@ref[4.3.168]).\n\n**Examples:** @deva[दैवदारवम्], @deva[दाधित्थम्], @deva[पालाशम्], @deva[शामीलम्], @deva[कापोतम्], @deva[औष्ट्रकम्], @deva[ऐणेयम्], @deva[कांस्यम्], @deva[पारशवम्]\n\n**@deva[ञितः]:** Non-@deva[ञित्] bases take @deva[मयट्]: @deva[बैल्वमयम्] (@deva[बैल्व] has @deva[अण्], @ref[4.3.136]), @deva[बैदमयम्]."
            }
        },
        "43156": {
            "en": {
                "simple": "After a word denoting a measure (@deva[परिमाण]), the affix for the @deva[विकार] (modification) sense is the same as the affix for the @deva[क्रीत] (purchased) sense. This overrides @deva[अण्] etc.\n\nThe @deva[क्रीत] affixes are taught at @ref[5.1.18] ff. Those same affixes apply here.\n\n**Examples:**\n- @deva[निष्केन क्रीतम्] = @deva[नैष्किकम्] (by @deva[ठक्], @ref[5.1.20])\n- @deva[निष्कस्य विकारः] = @deva[नैष्किकः] (same @deva[ठक्])\n- @deva[शतेन क्रीतम्] = @deva[शत्यम्] or @deva[शतिकम्] (@ref[5.1.21])\n- @deva[शतस्य विकारः] = @deva[शत्यः] or @deva[शतिकः]\n- @deva[सहस्रेण क्रीतम्] = @deva[साहस्रम्] (@ref[5.1.27])\n- @deva[सहस्रस्य विकारः] = @deva[साहस्रः]\n\nThe word @deva[वत्] ('like') indicates complete similarity — including affix elision (@ref[5.1.28]): @deva[द्विसहस्रः] or @deva[द्विसाहस्रः], @deva[द्विनिष्कः] or @deva[द्विनैष्किकः].\n\nThe word @deva[परिमाण] here includes @deva[संख्या] (numerals), though technically @deva[परिमाण] doesn't include @deva[संख्या] (see @ref[4.1.22], @ref[5.1.19]).",
                "standard": "After @deva[परिमाण] (measure) words, the @deva[विकार]-sense affix is the same as the @deva[क्रीत]-sense affix taught at @ref[5.1.18] ff. This debars @deva[अण्] etc.\n\n**Examples:**\n- @deva[निष्क]: @deva[नैष्किकम्] (purchased) / @deva[नैष्किकः] (product) — @deva[ठक्] (@ref[5.1.20])\n- @deva[शत]: @deva[शत्यम्]/​@deva[शतिकम्] ↔ @deva[शत्यः]/​@deva[शतिकः] — @deva[ठन्]/​@deva[यत्] (@ref[5.1.21])\n- @deva[सहस्र]: @deva[साहस्रम्] ↔ @deva[साहस्रः] — @deva[अण्] (@ref[5.1.27])\n\n**@deva[वत्]:** Complete similarity includes @deva[लुक्] (@ref[5.1.28]): @deva[द्विसहस्रः]/​@deva[द्विसाहस्रः], @deva[द्विनिष्कः]/​@deva[द्विनैष्किकः].\n\n**@deva[परिमाण]:** Here includes @deva[संख्या], unlike the technical usage (cf. @ref[4.1.22], @ref[5.1.19]).",
                "advanced": "This @deva[सूत्र] extends the @deva[क्रीत]-sense affixes (@ref[5.1.18] ff.) to the @deva[विकार] sense after @deva[परिमाण] words, debarring @deva[अण्] etc.\n\n**Examples:**\n- @deva[निष्क]: @deva[नैष्किकम्] (क्रीत) = @deva[नैष्किकः] (विकार) — @deva[ठक्] (@ref[5.1.20])\n- @deva[शत]: @deva[शत्यम्]/​@deva[शतिकम्] = @deva[शत्यः]/​@deva[शतिकः] — @deva[ठन्]/​@deva[यत्] (@ref[5.1.21])\n- @deva[सहस्र]: @deva[साहस्रम्] = @deva[साहस्रः] — @deva[अण्] (@ref[5.1.27])\n\n**@deva[क्रीतवत्]:** @deva[वत्] indicates full parity, including @deva[लुक्] (@ref[5.1.28]): @deva[द्विसहस्रः]/​@deva[द्विसाहस्रः], @deva[द्विनिष्कः]/​@deva[द्विनैष्किकः].\n\n**@deva[परिमाण]:** Encompasses @deva[संख्या] here, unlike its technical sense (cf. @ref[4.1.22], @ref[5.1.19])."
            }
        },
        "43157": {
            "en": {
                "simple": "The affix @deva[वुञ्] comes in the @deva[विकार] (modification) or @deva[अवयव] (part) sense after the word @deva[उष्ट्र] (camel). This overrides @deva[अञ्] from @ref[4.3.154].\n\n**Example:** @deva[उष्ट्रस्य विकारः अवयवो वा] → @deva[औष्ट्रकः] 'product or part of a camel'",
                "standard": "The affix @deva[वुञ्] comes after @deva[उष्ट्र] in the @deva[विकार]/​@deva[अवयव] sense, debarring @deva[अञ्] of @ref[4.3.154].\n\n**Example:** @deva[औष्ट्रकः]",
                "advanced": "This @deva[सूत्र] prescribes @deva[वुञ्] after @deva[उष्ट्र] in the @deva[विकार]/​@deva[अवयव] sense, as @deva[अपवाद] to @deva[अञ्] of @ref[4.3.154].\n\n**Example:** @deva[औष्ट्रकः]"
            }
        },
        "43158": {
            "en": {
                "simple": "The affix @deva[वुञ्] comes optionally in the @deva[विकार] (modification) or @deva[अवयव] (part) sense after the words @deva[उमा] (flax) and @deva[ऊर्णा] (wool).\n\n**Examples:**\n- @deva[औमम्] or @deva[औमकम्] 'made of flax'\n- @deva[और्णम्] or @deva[और्णकम्] 'made of wool'",
                "standard": "The affix @deva[वुञ्] comes optionally after @deva[उमा] and @deva[ऊर्णा] in the @deva[विकार]/​@deva[अवयव] sense.\n\n**Examples:** @deva[औमम्]/​@deva[औमकम्], @deva[और्णम्]/​@deva[और्णकम्]",
                "advanced": "This @deva[सूत्र] makes @deva[वुञ्] optional after @deva[उमा] and @deva[ऊर्णा] in the @deva[विकार]/​@deva[अवयव] sense.\n\n**Examples:** @deva[औमम्]/​@deva[औमकम्], @deva[और्णम्]/​@deva[और्णकम्]"
            }
        },
        "43159": {
            "en": {
                "simple": "The affix @deva[ढञ्] comes optionally in the @deva[विकार] (modification) or @deva[अवयव] (part) sense after the feminine word @deva[एणी] (female black deer).\n\n**Example:** @deva[ऐणेयं मांसम्] 'the flesh of a female black deer'\n\nBut for the masculine @deva[एण]: @deva[एणस्य मांसम्] → @deva[ऐणम्] 'flesh of a male deer' (formed with @deva[अञ्]).",
                "standard": "The affix @deva[ढञ्] comes optionally after @deva[एणी] (@deva[स्त्री]) in the @deva[विकार]/​@deva[अवयव] sense.\n\n**Example:** @deva[ऐणेयं मांसम्]\n\nFor @deva[एण] (@deva[पुं]): @deva[ऐणम्] (with @deva[अञ्]).",
                "advanced": "This @deva[सूत्र] makes @deva[ढञ्] optional after @deva[एणी] (feminine) in the @deva[विकार]/​@deva[अवयव] sense.\n\n**Example:** @deva[ऐणेयं मांसम्]\n\nMasculine @deva[एण]: @deva[ऐणम्] (@deva[अञ्])."
            }
        },
        "43160": {
            "en": {
                "simple": "The affix @deva[यत्] comes in the @deva[विकार] (modification) or @deva[अवयव] (part) sense after the words @deva[गो] (cow) and @deva[पयस्] (milk).\n\n**Examples:**\n- @deva[गव्यम्] 'of/from a cow' (by @ref[6.1.79])\n- @deva[पयस्यम्] 'of/from milk'",
                "standard": "The affix @deva[यत्] comes after @deva[गो] and @deva[पयस्] in the @deva[विकार]/​@deva[अवयव] sense.\n\n**Examples:** @deva[गव्यम्] (@ref[6.1.79]), @deva[पयस्यम्]",
                "advanced": "This @deva[सूत्र] teaches @deva[यत्] after @deva[गो] and @deva[पयस्] in the @deva[विकार]/​@deva[अवयव] sense.\n\n**Examples:** @deva[गव्यम्] (@ref[6.1.79]), @deva[पयस्यम्]"
            }
        },
        "43161": {
            "en": {
                "simple": "The affix @deva[यत्] comes in the @deva[विकार] (modification) or @deva[अवयव] (part) sense after the word @deva[द्रु] (wood/tree). This overrides @deva[अञ्] from @ref[4.3.139].\n\n**Example:** @deva[द्रु] + @deva[यत्] → @deva[द्रव्यम्] 'product of wood' (by @ref[6.1.79])",
                "standard": "The affix @deva[यत्] comes after @deva[द्रु] in the @deva[विकार]/​@deva[अवयव] sense, debarring @deva[अञ्] of @ref[4.3.139].\n\n**Example:** @deva[द्रव्यम्] (@ref[6.1.79])",
                "advanced": "This @deva[सूत्र] prescribes @deva[यत्] after @deva[द्रु] in the @deva[विकार]/​@deva[अवयव] sense, as @deva[अपवाद] to @deva[अञ्] of @ref[4.3.139].\n\n**Example:** @deva[द्रव्यम्] (@ref[6.1.79])"
            }
        },
        "43162": {
            "en": {
                "simple": "The affix @deva[वय] comes in the @deva[विकार] (product) sense after @deva[द्रु] when the product is a measure (@deva[परिमाण]). This overrides @deva[यत्].\n\n**Example:** @deva[द्रुवयम्] 'a wooden measure'",
                "standard": "The affix @deva[वय] comes after @deva[द्रु] when @deva[परिमाण] (measure) is meant, debarring @deva[यत्] of @ref[4.3.161].\n\n**Example:** @deva[द्रुवयम्]",
                "advanced": "This @deva[सूत्र] teaches @deva[वय] after @deva[द्रु] specifically for @deva[परिमाण], as @deva[अपवाद] to @deva[यत्] of @ref[4.3.161].\n\n**Example:** @deva[द्रुवयम्]"
            }
        },
        "43163": {
            "en": {
                "simple": "The affix denoting @deva[विकार] (modification) or @deva[अवयव] (part) is deleted by @deva[लुक्] when the product is a fruit (@deva[फल]).\n\n**Examples:**\n- @deva[आमलक्याः फलम्] → @deva[आमलकी] + @deva[मयट्] + @deva[लुक्] → @deva[आमलकम्] 'the fruit of the Āmalakī tree (myrobalan)'\n- @deva[वदरम्] 'jujube fruit'\n\nThe fruit is both a @deva[विकार] and an @deva[अवयव] of a fruit-bearing tree.",
                "standard": "The @deva[विकार]/​@deva[अवयव] affix undergoes @deva[लुक्] when @deva[फल] (fruit) is denoted.\n\n**Examples:** @deva[आमलक्याः फलम्] → @deva[आमलकम्]; @deva[वदरम्]\n\nFruit is both @deva[विकार] and @deva[अवयव] of the tree.",
                "advanced": "This @deva[सूत्र] ordains @deva[लुक्] of the @deva[विकार]/​@deva[अवयव] affix when @deva[फल] (fruit) is meant.\n\n**Examples:** @deva[आमलकम्], @deva[वदरम्]\n\n@deva[फल] is both @deva[विकार] and @deva[अवयव] of the tree."
            }
        },
        "43164": {
            "en": {
                "simple": "The affix @deva[अण्] comes in the @deva[विकार]/​@deva[अवयव] sense (specifically for fruits) after words in the @deva[प्लक्षादि] list. This overrides @deva[अञ्].\n\n**Examples:** @deva[प्लाक्षम्] 'fig fruit', @deva[नैयग्रोधम्] 'banyan fruit'\n\n**@deva[प्लक्षादि] list:** @deva[प्लक्ष], @deva[न्यग्रोध], @deva[अश्वत्थ], @deva[इङ्गुदी], @deva[शिग्रु], @deva[रुरु], @deva[कक्षतु], @deva[बृहती].",
                "standard": "The affix @deva[अण्] comes after @deva[प्लक्षादि] words when @deva[फल] (fruit) is meant, debarring @deva[अञ्].\n\n**Examples:** @deva[प्लाक्षम्], @deva[नैयग्रोधम्]\n\n**@deva[प्लक्षादि] गण (8):** @deva[प्लक्ष], @deva[न्यग्रोध], @deva[अश्वत्थ], @deva[इङ्गुदी], @deva[शिग्रु], @deva[रुरु], @deva[कक्षतु]/​@deva[कर्कन्धु]/​@deva[कर्कन्तु]/​@deva[ऋक्रतु], @deva[बृहती].",
                "advanced": "This @deva[सूत्र] prescribes @deva[अण्] after @deva[प्लक्षादि] words for @deva[फल], as @deva[अपवाद] to @deva[अञ्].\n\n**Examples:** @deva[प्लाक्षम्], @deva[नैयग्रोधम्]\n\n**@deva[प्लक्षादि] गण:** @deva[प्लक्ष], @deva[न्यग्रोध], @deva[अश्वत्थ], @deva[इङ्गुदी], @deva[शिग्रु], @deva[रुरु], @deva[कक्षतु] (@deva[कर्कन्धु], @deva[कर्कन्तु], @deva[ऋक्रतु]), @deva[बृहती]."
            }
        },
        "43165": {
            "en": {
                "simple": "The affix @deva[अण्] optionally comes in the fruit sense after the word @deva[जम्बु] (rose-apple). This overrides @deva[अञ्].\n\n**Examples:**\n- With @deva[अण्]: @deva[जम्बु] + @deva[अण्] → @deva[जाम्बवानि फलानि] 'rose-apple fruits'\n- With @deva[अञ्] (then @deva[लुक्] by @ref[4.3.163]): @deva[जम्बू] + @deva[अञ्] → @deva[जम्बूनि फलानि] (by @ref[6.4.8])",
                "standard": "The affix @deva[अण्] comes optionally after @deva[जम्बु] when @deva[फल] is meant, debarring @deva[अञ्].\n\n**With @deva[अण्]:** @deva[जाम्बवानि फलानि]\n\n**With @deva[अञ्] + @deva[लुक्] (@ref[4.3.163]):** @deva[जम्बूनि फलानि] (@ref[6.4.8])",
                "advanced": "This @deva[सूत्र] makes @deva[अण्] optional after @deva[जम्बु] for @deva[फल], as @deva[अपवाद] to @deva[अञ्].\n\n**@deva[अण्]:** @deva[जाम्बवानि फलानि]\n\n**@deva[अञ्]:** → @deva[लुक्] (@ref[4.3.163]) → @deva[जम्बूनि फलानि] (@ref[6.4.8])"
            }
        },
        "43166": {
            "en": {
                "simple": "The fruit-denoting affix is optionally deleted by @deva[लुप्] (not @deva[लुक्]) after @deva[जम्बु].\n\nThe difference: with @deva[लुप्], there is gender/number concordance (@ref[1.2.51]).\n\n**Examples:**\n- @deva[जम्बू] + @deva[अञ्] + @deva[लुप्] → @deva[जम्बूः फलम्] 'rose-apple fruit' (singular feminine, matching @deva[फलम्])\n- Optionally: @deva[जम्ब्वाः फलम्] = @deva[जम्बुफलम्], or @deva[जाम्बवम्]\n\n**Vārtikas:**\n1. @deva[लुप्] applies to plants that wither after fruiting: @deva[व्रीहिः], @deva[यवाः], @deva[माषाः], @deva[मुद्गाः], @deva[तिलाः]\n2. Optionally for flowers and roots: @deva[मल्लिका] (flower), @deva[विदारी] (root). Sometimes no concordance: @deva[पाटलानि पुष्पाणि], @deva[शाल्वानि मूलानि]; @deva[कदम्बं पुष्पम्], @deva[बैल्वानि फलानि].",
                "standard": "The @deva[फल]-denoting affix optionally undergoes @deva[लुप्] after @deva[जम्बु]. @deva[लुप्] (unlike @deva[लुक्]) involves concordance (@ref[1.2.51]).\n\n**Example:** @deva[जम्बूः फलम्] (@deva[लुप्] with concordance)\n\nOptionally: @deva[जम्बु फलम्], @deva[जाम्बवम्]\n\n**Vārtika 1:** @deva[लुप्] for @deva[ओषधि] (plants withering at fruit-time): @deva[व्रीहिः], @deva[यवाः], @deva[माषाः], @deva[मुद्गाः], @deva[तिलाः]\n\n**Vārtika 2:** @deva[बहुलम्] for flowers/roots: @deva[मल्लिका] (flower), @deva[विदारी] (root). Sometimes no concordance: @deva[पाटलानि पुष्पाणि], @deva[कदम्बं पुष्पम्], @deva[बैल्वानि फलानि].",
                "advanced": "This @deva[सूत्र] makes @deva[लुप्] optional for @deva[फल]-affixes after @deva[जम्बु]. @deva[लुप्] involves @deva[लिङ्गसंख्यासाधारण्य] (@ref[1.2.51]).\n\n**Example:** @deva[जम्बूः फलम्]\n\nOptionally: @deva[जम्बु फलम्], @deva[जाम्बवम्]\n\n**Vārtika 1:** @deva[फलपाके श्लिष्यमाणोषधेः लुप्] — @deva[व्रीहिः], @deva[यवाः], @deva[माषाः], @deva[मुद्गाः], @deva[तिलाः]\n\n**Vārtika 2:** @deva[पुष्पमूलयोश्च बहुलम्] — @deva[मल्लिका] (पुष्प), @deva[विदारी] (मूल). @deva[बहुलम्] allows non-concordance: @deva[पाटलानि पुष्पाणि], @deva[शाल्वानि मूलानि], @deva[कदम्बं पुष्पम्], @deva[बैल्वानि फलानि]."
            }
        },
        "43167": {
            "en": {
                "simple": "The fruit-denoting affix is deleted by @deva[लुप्] after words in the @deva[हरीतक्यादि] list.\n\nWith @deva[लुप्], there is gender concordance (@ref[1.2.51]).\n\n**Examples:**\n- @deva[हरीतक्याः फलम्] → @deva[हरीतकी] (not @deva[हरीतकम्])\n- @deva[कोशातकी], @deva[नखरजनी]\n\nAccording to Patañjali, concordance is in gender only; number follows the sense: @deva[हरीतकी फलम्] (singular), @deva[हरीतक्यः फलानि] (plural).\n\n**@deva[हरीतक्यादि] list:** @deva[हरीतकी], @deva[कोशातकी], @deva[नखरजनी], @deva[शष्कण्डी], @deva[दाडी], @deva[दोडी], @deva[श्वेतपाकी], @deva[अर्जुनपाकी], @deva[द्राक्षा], @deva[काला], @deva[ध्वाक्षा], @deva[गभीका], @deva[कण्टकारिका], @deva[पिप्पली], @deva[चिञ्चा], @deva[शेफालिका], @deva[दडी].",
                "standard": "The @deva[फल]-affix undergoes @deva[लुप्] after @deva[हरीतक्यादि] words, with gender concordance (@ref[1.2.51]).\n\n**Examples:** @deva[हरीतकी], @deva[कोशातकी], @deva[नखरजनी]\n\nPer Patañjali: gender concordance only; number by sense: @deva[हरीतकी फलम्], @deva[हरीतक्यः फलानि].\n\n**@deva[हरीतक्यादि] गण (17):** @deva[हरीतकी], @deva[कोशातकी], @deva[नखरजनी]/​@deva[नखररजनी], @deva[शष्कण्डी]/​@deva[शाकण्डी], @deva[दाडी], @deva[दोडी], @deva[श्वेतपाकी], @deva[अर्जुनपाकी], @deva[द्राक्षा], @deva[काला], @deva[ध्वाक्षा]/​@deva[ध्वाङ्क्षा], @deva[गभीका]/​@deva[गर्गरिका], @deva[कण्टकारिका], @deva[पिप्पली], @deva[चिञ्चा]/​@deva[चिम्पा], @deva[शेफालिका], @deva[दडी].",
                "advanced": "This @deva[सूत्र] ordains @deva[लुप्] of @deva[फल]-affixes after @deva[हरीतक्यादि], with @deva[लिङ्गसाधारण्य] (@ref[1.2.51]).\n\n**Examples:** @deva[हरीतकी], @deva[कोशातकी], @deva[नखरजनी]\n\nPer Patañjali: @deva[लिङ्ग]-concordance only; @deva[संख्या] by @deva[अर्थ]: @deva[हरीतकी फलम्], @deva[हरीतक्यः फलानि].\n\n**@deva[हरीतक्यादि] गण:** @deva[हरीतकी], @deva[कोशातकी], @deva[नखरजनी] (@deva[नखररजनी]), @deva[शष्कण्डी] (@deva[शाकण्डी]), @deva[दाडी], @deva[दोडी], @deva[श्वेतपाकी], @deva[अर्जुनपाकी], @deva[द्राक्षा], @deva[काला], @deva[ध्वाक्षा] (@deva[ध्वाङ्क्षा]), @deva[गभीका] (@deva[गर्गरिका]), @deva[कण्टकारिका], @deva[पिप्पली], @deva[चिञ्चा] (@deva[चिम्पा]), @deva[शेफालिका], @deva[दडी]."
            }
        },
        "43168": {
            "en": {
                "simple": "The affixes @deva[यञ्] and @deva[अञ्] come respectively in the @deva[विकार] (product) sense after @deva[कंसीय] and @deva[परशव्य], and the prior affixes (@deva[छ] and @deva[यत्]) are deleted by @deva[लुक्].\n\nThe word @deva[कंसीय] is formed by @deva[छ] (@ref[5.1.1]); @deva[परशव्य] by @deva[यत्] (@ref[5.1.2]). These affixes are elided when @deva[यञ्] and @deva[अञ्] are added.\n\n**Derivations:**\n- @deva[कंसीय] + @deva[यञ्] → @deva[कंस] + @deva[यञ्] → @deva[कांस्यः] 'bronze' (product measured by @deva[कंस])\n- @deva[परशव्य] + @deva[अञ्] → @deva[परशु] + @deva[अञ्] → @deva[पारशवः] 'axe-product'\n\nThe word @deva[लुक्] applies to affixes only (@ref[1.1.61]), not bases. So @deva[स] (in @deva[कंस], from Uṇ. III.62) and @deva[उ] (in @deva[परशु], from Uṇ. I.33) are not deleted — they were added to @deva[धातु]s, not @deva[प्रातिपदिक]s.\n\n@deva[परशव्य] is @deva[आद्यनुदात्त] by @ref[6.1.185] and would take @deva[अञ्] by @ref[4.3.140] anyway; this rule specifically teaches @deva[लुक्] of @deva[यत्].",
                "standard": "The affixes @deva[यञ्] and @deva[अञ्] come after @deva[कंसीय] and @deva[परशव्य] respectively in the @deva[विकार] sense, with @deva[लुक्] of their @deva[छ] and @deva[यत्] affixes.\n\n@deva[कंसीय]: @deva[कंस] + @deva[छ] (@ref[5.1.1])\n@deva[परशव्य]: @deva[परशु] + @deva[यत्] (@ref[5.1.2])\n\n**Derivations:**\n- @deva[कंसीय] + @deva[यञ्] = @deva[कंस] + @deva[यञ्] = @deva[कांस्यः]\n- @deva[परशव्य] + @deva[अञ्] = @deva[परशु] + @deva[अञ्] = @deva[पारशवः]\n\n@deva[लुक्] applies only to affixes following a @deva[प्रातिपदिक] (@ref[1.1.61]). The Uṇādi affixes @deva[स] (@deva[कम्] + @deva[स], Uṇ. III.62) and @deva[उ] (@deva[परशृ] + @deva[उ], Uṇ. I.33) are added to @deva[धातु]s, hence preserved.\n\n@deva[परशव्य] is @deva[आद्यनुदात्त] (@ref[6.1.185]); @deva[अञ्] would come by @ref[4.3.140]. This @deva[सूत्र] specifically teaches @deva[लुक्] of @deva[यत्].",
                "advanced": "This @deva[सूत्र] prescribes @deva[यञ्] after @deva[कंसीय] and @deva[अञ्] after @deva[परशव्य] in the @deva[विकार] sense, with @deva[लुक्] of their prior affixes @deva[छ] and @deva[यत्].\n\n@deva[कंसीय]: @deva[कम्] + @deva[स] (Uṇ. III.62) + @deva[छ] (@ref[5.1.1])\n@deva[परशव्य]: @deva[पर] + @deva[शृ] + @deva[उ] (Uṇ. I.33) + @deva[यत्] (@ref[5.1.2])\n\n**Derivations:**\n- @deva[कंसीय] + @deva[यञ्] → @deva[लुक्] of @deva[छ] → @deva[कंस] + @deva[यञ्] → @deva[कांस्यः]\n- @deva[परशव्य] + @deva[अञ्] → @deva[लुक्] of @deva[यत्] → @deva[परशु] + @deva[अञ्] → @deva[पारशवः]\n\n**Why @deva[स]/​@deva[उ] preserved?** @deva[लुक्] applies only to affixes after @deva[प्रातिपदिक] (@ref[1.1.61]). @deva[स] and @deva[उ] follow @deva[धातु]s.\n\n@deva[परशव्य] is @deva[आद्यनुदात्त] (@ref[6.1.185]) → @deva[अञ्] by @ref[4.3.140]. This @deva[सूत्र] adds @deva[लुक्] of @deva[यत्].\n\n**Objection:** @ref[6.4.148] + @ref[6.4.150] would delete final @deva[य्]. **Answer:** @ref[6.4.150] requires a following @deva[दीर्घ ई] affix, which isn't the case here."
            }
        }
    }

    # Update the data
    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.3.151-168)")

if __name__ == "__main__":
    main()
