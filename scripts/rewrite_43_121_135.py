#!/usr/bin/env python3
"""Rewrite commentary for sūtras 4.3.121-135."""

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
        "43121": {
            "en": {
                "simple": "The affix @deva[यत्] comes after @deva[रथ] (chariot) in the sense of 'this belongs to it.' This overrides @deva[अण्].\n\n**Example:** @deva[रथस्य इदम्] → @deva[रथ्यम्] 'belonging to the chariot' (e.g., wheel, axle)\n\nThe word @deva[रथ्य] specifically denotes parts of a chariot.\n\nA @deva[वार्त्तिक] states that this rule also applies to compounds ending in @deva[रथ], @deva[सीता], and @deva[हल] — there is @deva[तदन्तविधि] (the rule applies to words ending with these).\n\n**Compound examples:** @deva[परमरथ्यम्], @deva[उत्तमरथ्यम्]",
                "standard": "The affix @deva[यत्] comes after @deva[रथ] in the @deva[तस्येदम्] sense, debarring @deva[अण्].\n\n**Example:** @deva[रथस्य इदम्] → @deva[रथ्यम्] (parts of a chariot: wheel, axle)\n\n**Vārtika:** @deva[रथसीताहलेभ्यो यद्विधौ] — when applying @deva[यत्] to @deva[रथ], @deva[सीता], and @deva[हल], there is @deva[तदन्तविधि]. Thus compounds ending in these words also take @deva[यत्]: @deva[परमरथ्यम्], @deva[उत्तमरथ्यम्].",
                "advanced": "This @deva[सूत्र] prescribes @deva[यत्] after @deva[रथ] in the @deva[तस्येदम्] sense, as @deva[अपवाद] to @deva[अण्].\n\n**Example:** @deva[रथ्यम्] (chariot parts)\n\n**Vārtika:** @deva[रथसीताहलेभ्यो यद्विधौ] — @deva[तदन्तविधि] operates for @deva[रथ], @deva[सीता], @deva[हल] when @deva[यत्] is applied. Hence: @deva[परमरथ्यम्], @deva[उत्तमरथ्यम्]."
            }
        },
        "43122": {
            "en": {
                "simple": "When @deva[रथ] (chariot) is preceded by a word denoting a draught animal (@deva[पत्र]), the affix @deva[अञ्] is used in the sense of 'this belongs to it.' This overrides @deva[यत्].\n\nThe word @deva[पत्र] here means 'vehicle' or 'draught animal' — what carries something.\n\n**Examples:**\n- @deva[आश्वरथं चक्रम्] 'wheel of a horse-cart'\n- @deva[औष्ट्ररथम्] 'of a camel-cart'\n- @deva[गार्दभरथम्] 'of a donkey-cart'",
                "standard": "When @deva[रथ] is preceded by a @deva[पत्र] (draught-animal) word, @deva[अञ्] applies in the @deva[तस्येदम्] sense, debarring @deva[यत्] of @ref[4.3.121].\n\n@deva[पत्र] = @deva[वाहन] (that by which one goes), i.e., a draught animal. It's formed by @deva[ष्ट्रन्] (@ref[3.2.182]).\n\n**Examples:** @deva[आश्वरथं चक्रम्] (horse-cart wheel), @deva[औष्ट्ररथम्], @deva[गार्दभरथम्]",
                "advanced": "This @deva[सूत्र] teaches @deva[अञ्] after @deva[पत्र] + @deva[रथ] compounds in the @deva[तस्येदम्] sense, debarring @deva[यत्] of @ref[4.3.121].\n\n@deva[पत्र] = @deva[वाहन] (draught animal), formed by @deva[ष्ट्रन्] per @ref[3.2.182].\n\n**Examples:** @deva[आश्वरथम्], @deva[औष्ट्ररथम्], @deva[गार्दभरथम्]"
            }
        },
        "43123": {
            "en": {
                "simple": "The affix @deva[अञ्] comes after a word denoting a draught animal, and also after @deva[अध्वर्यु] and @deva[परिषद्], in the sense of 'this belongs to it.' This overrides @deva[अण्].\n\nHere @deva[पत्र] means @deva[वाहन] (vehicle/carrier). When the sense is 'a thing to be carried,' @deva[अञ्] is added to draught-animal words.\n\n**Examples (things suited to be carried by...):**\n- @deva[अश्वस्य इदं वहनीयम्] → @deva[आश्वम्] 'a load for a horse'\n- @deva[औष्ट्रम्] 'for a camel'\n- @deva[गार्दभम्] 'for a donkey'\n\n**Other examples:**\n- @deva[आध्वर्यवम्] 'belonging to the Adhvaryu priest'\n- @deva[पारिषदम्] 'belonging to an assembly'",
                "standard": "The affix @deva[अञ्] comes after @deva[पत्र] (draught-animal) words, @deva[अध्वर्यु], and @deva[परिषद्] in the @deva[तस्येदम्] sense, debarring @deva[अण्].\n\n@deva[पत्र] = @deva[वाहन]. The sense here is 'suited to be carried by.'\n\n**@deva[पत्र] examples:** @deva[आश्वम्] (horse-load), @deva[औष्ट्रम्], @deva[गार्दभम्]\n\n**Other:** @deva[आध्वर्यवम्], @deva[पारिषदम्]",
                "advanced": "This @deva[सूत्र] prescribes @deva[अञ्] after @deva[पत्र] (draught-animal) words, @deva[अध्वर्यु], and @deva[परिषद्] in the @deva[तस्येदम्] sense, as @deva[अपवाद] to @deva[अण्].\n\n@deva[पत्र] = @deva[वाहन]; the derivative means 'suited/intended to be carried.'\n\n**Examples:** @deva[आश्वम्], @deva[औष्ट्रम्], @deva[गार्दभम्]; @deva[आध्वर्यवम्], @deva[पारिषदम्]"
            }
        },
        "43124": {
            "en": {
                "simple": "The affix @deva[ठक्] comes after @deva[हल] (plough) and @deva[सीर] (plough) in the sense of 'this belongs to it.'\n\n**Examples:**\n- @deva[हलस्य इदम्] → @deva[हालिकम्] 'belonging to the plough'\n- @deva[सीरस्य इदम्] → @deva[सैरिकम्]",
                "standard": "The affix @deva[ठक्] comes after @deva[हल] and @deva[सीर] (both meaning plough) in the @deva[तस्येदम्] sense.\n\n**Examples:** @deva[हालिकम्], @deva[सैरिकम्]",
                "advanced": "This @deva[सूत्र] teaches @deva[ठक्] after @deva[हल] and @deva[सीर] in the @deva[तस्येदम्] sense.\n\n**Examples:** @deva[हालिकम्], @deva[सैरिकम्]"
            }
        },
        "43125": {
            "en": {
                "simple": "The affix @deva[वुञ्] comes in the sense of 'this belongs to them' after @deva[द्वन्द्व] compounds (copulative compounds) of words denoting either mutual enmity or matrimonial relationship. This overrides @deva[अण्] and @deva[छ].\n\n**Enmity examples:**\n- @deva[बाभ्रव्यशालङ्कायनिका] (the enmity between Bābhravya and Śālṅkāyana)\n- @deva[काकोलूकिका] (the enmity between crows and owls)\n\n**Marriage examples:**\n- @deva[अत्रिभरद्वाजिका] (the married couple Atri and Bharadvāja)\n- @deva[कुत्सकुशिकिका]\n\n@deva[द्वन्द्व] compounds of natural enemies become singular neuter by @ref[2.4.9]. The secondary derivatives, however, are feminine.\n\n**Vārtika:** The words @deva[देवासुर] etc. are exceptions: @deva[देवासुरम्], @deva[राक्षोऽसुरं वैरम्] (not with @deva[वुञ्]).",
                "standard": "The affix @deva[वुञ्] comes after @deva[द्वन्द्व] compounds denoting @deva[विरोध] (mutual enmity) or @deva[मिथुन] (marital pair) in the @deva[तस्येदम्] sense, debarring @deva[अण्] and @deva[छ].\n\n**@deva[विरोध]:** @deva[बाभ्रव्यशालङ्कायनिका], @deva[काकोलूकिका]\n\n**@deva[मिथुन]:** @deva[अत्रिभरद्वाजिका], @deva[कुत्सकुशिकिका]\n\n@deva[द्वन्द्व]s of natural enemies are neuter singular by @ref[2.4.9]; their @deva[तद्धित] derivatives are feminine.\n\n**Vārtika:** @deva[देवासुर] etc. are exceptions: @deva[देवासुरम्], @deva[राक्षोऽसुरं वैरम्].",
                "advanced": "This @deva[सूत्र] prescribes @deva[वुञ्] after @deva[द्वन्द्व] compounds expressing @deva[विरोध] (enmity) or @deva[मिथुन] (matrimony) in the @deva[तस्येदम्] sense, debarring @deva[अण्] and @deva[छ].\n\n**@deva[विरोध]:** @deva[बाभ्रव्यशालङ्कायनिका], @deva[काकोलूकिका]\n\n**@deva[मिथुन]:** @deva[अत्रिभरद्वाजिका], @deva[कुत्सकुशिकिका]\n\n@deva[द्वन्द्व]s of @deva[प्रकृतिविरोधिन्]s are @deva[एकवद्भाव] neuter singular by @ref[2.4.9]; @deva[तद्धितान्त]s are feminine.\n\n**Vārtika:** @deva[देवासुरादेः प्रतिषेधः] — @deva[देवासुरम्], @deva[राक्षोऽसुरं वैरम्] (no @deva[वुञ्])."
            }
        },
        "43126": {
            "en": {
                "simple": "The affix @deva[वुञ्] comes in the sense of 'this belongs to them' after @deva[गोत्र] (family/patronymic) words denoting Vedic schools (@deva[चरण]). This overrides @deva[अण्] and @deva[छ].\n\nAccording to Patañjali, @deva[चरण] here means @deva[धर्म] (duties/doctrines) and @deva[आम्नाय] (traditions), not just 'Vedic school.'\n\n**Examples:**\n- @deva[कठानां धर्मः आम्नायो वा] → @deva[काठकम्] 'the Dharma-sūtras or tradition of the Kaṭha school'\n- @deva[कालापकम्], @deva[मौदकम्], @deva[पैप्पलादकम्]\n\nAlso for patronymics: @deva[ग्लौचुकायनकम्], @deva[औपगवकम्]",
                "standard": "The affix @deva[वुञ्] comes after @deva[गोत्र] words of @deva[चरण]s (Vedic schools) in the @deva[तस्येदम्] sense, debarring @deva[अण्] and @deva[छ].\n\nPer Patañjali, @deva[चरण] = @deva[धर्म] (doctrines) and @deva[आम्नाय] (traditions).\n\n**Examples:** @deva[काठकम्] (@deva[कठानां धर्मः आम्नायो वा]), @deva[कालापकम्], @deva[मौदकम्], @deva[पैप्पलादकम्]\n\n**@deva[गोत्र]:** @deva[ग्लौचुकायनकम्], @deva[औपगवकम्]",
                "advanced": "This @deva[सूत्र] teaches @deva[वुञ्] after @deva[गोत्र] words in the @deva[चरण] (Vedic school) context, in the @deva[तस्येदम्] sense, debarring @deva[अण्] and @deva[छ].\n\nPer Patañjali: @deva[चरण] = @deva[धर्म] + @deva[आम्नाय], not merely 'school.'\n\n**Examples:** @deva[काठकम्] (@deva[कठानां धर्मः आम्नायो वा]), @deva[कालापकम्], @deva[मौदकम्], @deva[पैप्पलादकम्]\n\n**@deva[गोत्र]:** @deva[ग्लौचुकायनकम्], @deva[औपगवकम्]"
            }
        },
        "43127": {
            "en": {
                "simple": "The affix @deva[अण्] comes in the sense of 'this is their congregation, mark, sign, or hamlet' after @deva[गोत्र] words ending in @deva[अञ्], @deva[यञ्], or @deva[इञ्]. This overrides @deva[वुञ्].\n\nFour meanings:\n- @deva[संघ] = congregation\n- @deva[लक्षण] = distinguishing mark (inherent to the person/thing)\n- @deva[अङ्क] = ownership mark (shows the thing belongs to someone else)\n- @deva[घोष] = hamlet, cow-pen (added by Vārtika)\n\n**Examples:**\n- From @deva[अञ्]-ending (@ref[4.1.104]): @deva[बैदः] 'a congregation/mark/sign/hamlet of the Bidas'\n- From @deva[यञ्]-ending (@ref[4.1.105]): @deva[गार्ग्य] + @deva[अण्] → @deva[गार्गः] (by @ref[6.4.148], @ref[6.4.151])\n- From @deva[इञ्]-ending (@ref[4.1.95]): @deva[दाक्षि] + @deva[अण्] → @deva[दाक्षः]\n\nThe @deva[ण्] of @deva[अण्] doesn't cause additional @deva[वृद्धि] here (the words already have it). Using @deva[अण्] (not just @deva[अ]) ensures feminine @deva[ङीप्] (@ref[4.1.15]): @deva[बैदी]. It also prevents @deva[पुंवद्भाव] in compounds (@ref[6.3.39]): @deva[बैदीविद्यः].",
                "standard": "The affix @deva[अण्] comes after @deva[गोत्र] words ending in @deva[अञ्], @deva[यञ्], or @deva[इञ्] when denoting @deva[संघ] (congregation), @deva[लक्षण] (mark), @deva[अङ्क] (sign), or @deva[घोष] (hamlet). This debars @deva[वुञ्] of @ref[4.3.126].\n\n**Semantic distinctions:**\n- @deva[लक्षण]: inherent distinguishing feature (e.g., @deva[विद्या] for the Bidas)\n- @deva[अङ्क]: ownership mark (e.g., brand on a cow)\n\n**Vārtika:** @deva[घोष] (cow-pen/hamlet) is added. The four senses don't follow @deva[यथासंख्यम्] (@ref[1.3.10]).\n\n**Examples:**\n- @deva[अञन्त] (@ref[4.1.104]): @deva[बैदः]\n- @deva[यञन्त] (@ref[4.1.105]): @deva[गार्गः] (@ref[6.4.148], @ref[6.4.151])\n- @deva[इञन्त] (@ref[4.1.95]): @deva[दाक्षः]\n\n**Why @deva[अण्]?** The words already have @deva[वृद्धि] from @deva[अञ्]/​@deva[यञ्]/​@deva[इञ्]. @deva[अण्] (vs. @deva[अ]) ensures @deva[ङीप्] feminine (@ref[4.1.15]): @deva[बैदी]. It also blocks @deva[पुंवद्भाव] (@ref[6.3.39]): @deva[बैदीविद्यः].",
                "advanced": "This @deva[सूत्र] prescribes @deva[अण्] after @deva[गोत्र] words ending in @deva[अञ्], @deva[यञ्], or @deva[इञ्] for the senses @deva[संघ], @deva[लक्षण], @deva[अङ्क], debarring @deva[वुञ्] of @ref[4.3.126].\n\n**@deva[लक्षण] vs. @deva[अङ्क]:** @deva[लक्षण] = inherent property; @deva[अङ्क] = extrinsic ownership mark.\n\n**Vārtika:** @deva[घोषश्च] — @deva[घोष] (hamlet/cow-pen) is a fourth sense. The @deva[यथासंख्यम्] (@ref[1.3.10]) doesn't apply.\n\n**Examples:**\n- @deva[अञन्त] (@ref[4.1.104]): @deva[बैदः]\n- @deva[यञन्त] (@ref[4.1.105]): @deva[गार्ग्य] + @deva[अण्] → @deva[गार्गः] (@ref[6.4.148], @ref[6.4.151])\n- @deva[इञन्त] (@ref[4.1.95]): @deva[दाक्षि] + @deva[अण्] → @deva[दाक्षः]\n\n**Why @deva[अण्] (not @deva[अ])?** The @deva[ण्] doesn't add @deva[वृद्धि] (already present). But @deva[अण्] triggers @deva[ङीप्] (@ref[4.1.15]): @deva[बैदी]. It also blocks @deva[पुंवद्भाव] (@ref[6.3.39]) in compounds: @deva[बैदी विद्या अस्य] = @deva[बैदीविद्यः]."
            }
        },
        "43128": {
            "en": {
                "simple": "The affix @deva[अण्] optionally comes after @deva[शाकल] in the sense of 'this is their congregation, mark, sign, or hamlet.' This overrides @deva[वुञ्].\n\n**Examples:**\n- @deva[शाकलेन प्रोक्तम् अधीयते] → @deva[शाकलाः] (by @ref[4.3.101], @ref[4.2.64])\n- @deva[शाकलानां संघः] → @deva[शाकलः] (with @deva[अण्]) or @deva[शाकलकः] (with @deva[वुञ्] from @ref[4.3.126])\n\nBoth forms mean 'a congregation of students of the science revealed by Śakala.'",
                "standard": "The affix @deva[अण्] optionally comes after @deva[शाकल] in the @deva[संघ]/​@deva[लक्षण]/​@deva[अङ्क]/​@deva[घोष] sense, debarring @deva[वुञ्] of @ref[4.3.126].\n\n**Examples:**\n- @deva[शाकलाः] (students, by @ref[4.3.101], @ref[4.2.64])\n- @deva[शाकलानां संघः] → @deva[शाकलः] (@deva[अण्]) or @deva[शाकलकः] (@deva[वुञ्])",
                "advanced": "This @deva[सूत्र] makes @deva[अण्] optional after @deva[शाकल] in the @deva[संघ] etc. senses, as @deva[विकल्प] to @deva[वुञ्] of @ref[4.3.126].\n\n**Examples:** @deva[शाकलाः] (by @ref[4.3.101], @ref[4.2.64]); @deva[शाकलानां संघः] → @deva[शाकलः] or @deva[शाकलकः]"
            }
        },
        "43129": {
            "en": {
                "simple": "The affix @deva[ञ्य] comes in the sense of 'this is their Law or Tradition' after the words @deva[छान्दोग], @deva[औक्थिक], @deva[याज्ञिक], @deva[बह्वृच], and @deva[नट]. This overrides @deva[अण्] and @deva[वुञ्].\n\nThe phrase @deva[चरणाद् धर्माम्नाययोः] ('from a school, in the sense of law or tradition') continues from @ref[4.3.126] and applies even to @deva[नट].\n\n**Examples:**\n- @deva[छन्दोगानां धर्मः वा आम्नायो वा] → @deva[छान्दोग्यम्] 'the Law or Tradition of the Chāndogas'\n- @deva[औक्थिक्यम्], @deva[याज्ञिक्यम्], @deva[बाह्वृच्यम्], @deva[नाट्यम्]\n\nWithout this sense: @deva[छान्दोगं कुलम्] 'the family of Chāndoga' (with @deva[अण्], not @deva[ञ्य]).",
                "standard": "The affix @deva[ञ्य] comes after @deva[छान्दोग], @deva[औक्थिक], @deva[याज्ञिक], @deva[बह्वृच], and @deva[नट] in the @deva[धर्म]/​@deva[आम्नाय] sense, debarring @deva[अण्] and @deva[वुञ्].\n\nThe @deva[अनुवृत्ति] of @deva[संघ] etc. ceases; @deva[चरणाद् धर्माम्नाययोः] from @ref[4.3.126] applies even to @deva[नट].\n\n**Examples:** @deva[छान्दोग्यम्], @deva[औक्थिक्यम्], @deva[याज्ञिक्यम्], @deva[बाह्वृच्यम्], @deva[नाट्यम्]\n\n**Counter-example:** @deva[छान्दोगं कुलम्] (not @deva[धर्म]/​@deva[आम्नाय] sense).",
                "advanced": "This @deva[सूत्र] prescribes @deva[ञ्य] after @deva[छान्दोग], @deva[औक्थिक], @deva[याज्ञिक], @deva[बह्वृच], @deva[नट] in the @deva[धर्म]/​@deva[आम्नाय] sense, debarring @deva[अण्] and @deva[वुञ्].\n\nThe @deva[अनुवृत्ति] of @deva[संघ] etc. stops; @deva[चरणाद् धर्माम्नाययोः] from @ref[4.3.126] extends to @deva[नट].\n\n**Examples:** @deva[छान्दोग्यम्], @deva[औक्थिक्यम्], @deva[याज्ञिक्यम्], @deva[बाह्वृच्यम्], @deva[नाट्यम्]\n\n**Non-@deva[धर्माम्नाय]:** @deva[छान्दोगं कुलम्]."
            }
        },
        "43130": {
            "en": {
                "simple": "The affix @deva[वुञ्] is not used after a @deva[गोत्र] (family/patronymic) word when it denotes beginner students (@deva[दण्डमाणव]) or boarding students (@deva[अन्तेवासिन्]).\n\n@deva[दण्डमाणव] means a young student whose only sign of studentship is the rod (@deva[दण्ड]) — a mere beginner. @deva[अन्तेवासिन्] means pupils who reside in their teacher's house.\n\n**Examples:**\n- @deva[दाक्षाः] 'the junior or senior pupils of Dakṣi' (with @deva[अण्], not @deva[वुञ्])\n- @deva[माहकाः]\n- @deva[गौकक्षाः दण्डमाणवाः] or @deva[अन्तेवासिनो वा]",
                "standard": "The affix @deva[वुञ्] (@ref[4.3.126]) does not apply to @deva[गोत्र] words when the meaning is @deva[दण्डमाणव] (beginner pupil) or @deva[अन्तेवासिन्] (boarding pupil).\n\n@deva[दण्डमाणव] = a @deva[माणव] whose @deva[दण्ड] is the only sign of studentship — a beginner. (@deva[न] → @deva[ण] by @ref[4.1.161] @deva[कारिका].)\n\n@deva[अन्तेवासिन्] = resident pupils.\n\n**Examples:** @deva[दाक्षाः], @deva[माहकाः]; @deva[गौकक्षाः दण्डमाणवाः अन्तेवासिनो वा]",
                "advanced": "This @deva[सूत्र] blocks @deva[वुञ्] (@ref[4.3.126]) after @deva[गोत्र] words when the referent is @deva[दण्डमाणव] or @deva[अन्तेवासिन्].\n\n@deva[दण्डमाणव] = beginner pupil (whose @deva[दण्ड] is the sole mark of studentship). @deva[न] → @deva[ण] per @ref[4.1.161] @deva[कारिका].\n\n@deva[अन्तेवासिन्] = boarding pupil.\n\n**Examples:** @deva[दाक्षाः], @deva[माहकाः]; @deva[गौकक्षाः दण्डमाणवाः अन्तेवासिनो वा]"
            }
        },
        "43131": {
            "en": {
                "simple": "The affix @deva[छ] comes in the sense of 'this belongs to them' after the words in the @deva[रैवतिकादि] list. This overrides @deva[वुञ्].\n\nAll these words end with @deva[गोत्र] affixes and would normally take @deva[वुञ्] by @ref[4.3.126], but this rule substitutes @deva[छ].\n\n**Examples:** @deva[रैवतिकीयः], @deva[स्वापिशीयः]\n\n**@deva[रैवतिकादि] list:** @deva[रैवतिक], @deva[स्वापिशि], @deva[क्षैमवृद्धि], @deva[गौरग्रीवि], @deva[औदमेघि], @deva[औदवापि], @deva[बैजवापि].",
                "standard": "The affix @deva[छ] comes after @deva[रैवतिकादि] words in the @deva[तस्येदम्] sense, overriding @deva[वुञ्] of @ref[4.3.126].\n\nThese words end with @deva[गोत्र] affixes.\n\n**Examples:** @deva[रैवतिकीयः], @deva[स्वापिशीयः]\n\n**@deva[रैवतिकादि] गण (7):** @deva[रैवतिक], @deva[स्वापिशि], @deva[क्षैमवृद्धि], @deva[गौरग्रीवि]/​@deva[गौरग्रीव], @deva[औदमेघि]/​@deva[औदमेयि], @deva[औदवापि]/​@deva[औदवाहि], @deva[बैजवापि].",
                "advanced": "This @deva[सूत्र] prescribes @deva[छ] after @deva[रैवतिकादि] words in the @deva[तस्येदम्] sense, as @deva[अपवाद] to @deva[वुञ्] of @ref[4.3.126].\n\n**Examples:** @deva[रैवतिकीयः], @deva[स्वापिशीयः]\n\n**@deva[रैवतिकादि] गण:** @deva[रैवतिक], @deva[स्वापिशि], @deva[क्षैमवृद्धि], @deva[गौरग्रीवि] (@deva[गौरग्रीव]), @deva[औदमेघि] (@deva[औदमेयि]), @deva[औदवापि] (@deva[औदवाहि]), @deva[बैजवापि]."
            }
        },
        "43132": {
            "en": {
                "simple": "The affix @deva[अण्] comes in the sense of 'this belongs to them' after @deva[कौपिञ्जल] and @deva[हास्तिपद]. This overrides @deva[वुञ्].\n\n**Examples:** @deva[कौपिञ्जलः], @deva[हास्तिपदः]\n\nThis rule is essentially a @deva[वार्त्तिक].",
                "standard": "The affix @deva[अण्] comes after @deva[कौपिञ्जल] and @deva[हास्तिपद] in the @deva[तस्येदम्] sense, debarring @deva[वुञ्] of @ref[4.3.126].\n\n**Examples:** @deva[कौपिञ्जलः], @deva[हास्तिपदः]\n\nThis @deva[सूत्र] is essentially a @deva[वार्त्तिक].",
                "advanced": "This @deva[सूत्र] (functioning as a @deva[वार्त्तिक]) prescribes @deva[अण्] after @deva[कौपिञ्जल] and @deva[हास्तिपद] in the @deva[तस्येदम्] sense, as @deva[अपवाद] to @deva[वुञ्] of @ref[4.3.126].\n\n**Examples:** @deva[कौपिञ्जलः], @deva[हास्तिपदः]"
            }
        },
        "43133": {
            "en": {
                "simple": "The affix @deva[अण्] comes in the sense of 'this belongs to them' after @deva[आथर्वणिक], and the penultimate @deva[इक्] is deleted. This overrides @deva[वुञ्].\n\n**Example:** @deva[आथर्वणिकस्य अयम्] → @deva[आथर्वणः धर्मः आम्नायो वा] 'the Law or Tradition of the Ātharvaṇikas'\n\nThe phrase @deva[चरणाद् धर्माम्नाययोः] is understood here. This rule is essentially a @deva[वार्त्तिक].",
                "standard": "The affix @deva[अण्] comes after @deva[आथर्वणिक] in the @deva[धर्म]/​@deva[आम्नाय] sense, with deletion of penultimate @deva[इक्], debarring @deva[वुञ्] of @ref[4.3.126].\n\n**Example:** @deva[आथर्वणः] (@deva[आथर्वणिकस्य धर्मः आम्नायो वा])\n\n@deva[चरणाद् धर्माम्नाययोः] continues. This @deva[सूत्र] is a @deva[वार्त्तिक].",
                "advanced": "This @deva[सूत्र] (as @deva[वार्त्तिक]) prescribes @deva[अण्] after @deva[आथर्वणिक] with @deva[उपधालोप] of @deva[इक्], in the @deva[धर्माम्नाय] sense, debarring @deva[वुञ्] of @ref[4.3.126].\n\n**Example:** @deva[आथर्वणः]\n\n@deva[चरणाद् धर्माम्नाययोः] continues from @ref[4.3.126]."
            }
        },
        "43134": {
            "en": {
                "simple": "An affix (from the @deva[प्राग्दीव्यतोऽण्] set, @ref[4.1.83]) comes after a word in the genitive case to mean 'a modification of that' (@deva[विकार]).\n\nThe word @deva[विकार] means 'change of condition' or 'transformation' of the original substance.\n\nThe repetition of @deva[तस्य] (though available from earlier rules) indicates that the governing force of @deva[शेषे] (@ref[4.2.92]) does not extend further. The @deva[घ], @deva[ख] etc. affixes taught under @deva[शेषे] do not have this @deva[विकार] sense.\n\nThe general affix @deva[अण्] applies here, as well as specific affixes taught in subsequent rules. For examples, we need words not covered by later rules — not denoting living animals (@deva[अञ्] by @ref[4.3.154]), not @deva[अनुदात्तादि] (@deva[अञ्] by @ref[4.3.140]), not having @deva[वृद्धि] in the first syllable (@deva[मयट्] by @ref[4.3.144]).\n\n**Examples:**\n- @deva[अश्मनः विकारः] → @deva[आश्मनः] or @deva[आश्मः] (with optional @deva[टि]-deletion) 'made from stone'\n- @deva[भास्मनः], @deva[मार्तिकः]",
                "standard": "An affix from @deva[प्राग्दीव्यतोऽण्] (@ref[4.1.83]) comes after a word in @deva[षष्ठी] in the @deva[विकार] (modification/transformation) sense.\n\n@deva[विकार] = change of condition of the original substance.\n\n**Technical note:** @deva[तस्य] is repeated (though available by @deva[अनुवृत्ति]) to indicate @deva[शेषे] (@ref[4.2.92]) doesn't extend here. The @deva[घ], @deva[ख] etc. affixes don't have @deva[विकार] sense.\n\nThe general @deva[अण्] applies; subsequent @deva[सूत्र]s provide specific affixes. Valid examples must not be covered by @ref[4.3.154] (animals), @ref[4.3.140] (@deva[अनुदात्तादि]), @ref[4.3.144] (@deva[वृद्धि]-initial).\n\n**Examples:** @deva[आश्मनः]/​@deva[आश्मः] (from @deva[अश्मन्], stone), @deva[भास्मनः], @deva[मार्तिकः]\n\n@deva[अश्मन्] and @deva[भस्मन्] are formed by @deva[मनिन्] (Uṇ. IV.146,145); @deva[मृत्तिका] by @deva[तिकन्] (@ref[5.4.39]). All are @deva[आद्युदात्त] due to @deva[नित्] accent.",
                "advanced": "This @deva[सूत्र] introduces the @deva[विकार] (transformation) sense for @deva[प्राग्दीव्यतोऽण्] affixes (@ref[4.1.83]), with @deva[षष्ठी] case.\n\n@deva[विकार] = transformation of original substance.\n\n**@deva[तस्य] repetition:** Though @deva[अनुवृत्ति] would supply it, explicit @deva[तस्य] indicates @deva[शेषे] (@ref[4.2.92]) doesn't govern. Hence @deva[घ], @deva[ख] etc. lack @deva[विकार] sense.\n\nNo specific affix here; @deva[अण्] of @ref[4.1.83] applies, plus subsequent @deva[सूत्र]-specific affixes. Valid examples: non-@deva[प्राणिन्] (@ref[4.3.154]), non-@deva[अनुदात्तादि] (@ref[4.3.140]), non-@deva[वृद्ध्यादि] (@ref[4.3.144]).\n\n**Examples:** @deva[अश्मन्] → @deva[आश्मनः]/​@deva[आश्मः] (optional @deva[टि]-@deva[लोप] per @deva[वार्त्तिक] to @ref[6.4.144]); @deva[भास्मनः], @deva[मार्तिकः]\n\n@deva[अश्मन्], @deva[भस्मन्]: @deva[मनिन्] (Uṇ. IV.146,145); @deva[मृत्तिका]: @deva[तिकन्] (@ref[5.4.39]). All @deva[आद्युदात्त] via @deva[नित्] accent."
            }
        },
        "43135": {
            "en": {
                "simple": "An affix comes after words denoting an animal, a herb (@deva[ओषधि]), or a tree (@deva[वृक्ष]) in the genitive case to mean both 'this is its modification' (@deva[विकार]) and 'this is its part' (@deva[अवयव]).\n\nThe word @deva[च] in the rule adds @deva[विकार] (from the previous rule) to @deva[अवयव].\n\n**Examples:**\n- @deva[कपोतस्य विकारः अवयवो वा] → @deva[कापोतः] 'a modification or part of a pigeon' (e.g., fan made from feathers)\n- @deva[मायूरः], @deva[तैत्तिरः] 'of a peacock, of a partridge'\n- Herb: @deva[मौर्वम्] 'product of Mūrvā' (ashes or stalk)\n- Tree: @deva[कारीरम्] 'stalk or ashes of the Karīra tree'\n\nIn subsequent rules, both @deva[विकार] and @deva[अवयव] continue. But for non-animal, non-herb, non-tree words, only @deva[विकार] applies — a unique case of partial @deva[अनुवृत्ति].",
                "standard": "An affix comes after @deva[प्राणिन्] (animal), @deva[ओषधि] (herb), and @deva[वृक्ष] (tree) words in @deva[षष्ठी] for both @deva[विकार] (modification) and @deva[अवयव] (part).\n\nThe @deva[च] adds @deva[विकार] from @ref[4.3.134].\n\n**Examples:**\n- @deva[प्राणिन्]: @deva[कापोतः], @deva[मायूरः], @deva[तैत्तिरः] (by @ref[4.3.154])\n- @deva[ओषधि]: @deva[मौर्वम्] (Mūrvā product)\n- @deva[वृक्ष]: @deva[कारीरम्] (Karīra stalk/ashes)\n\n**Technical note:** In subsequent @deva[सूत्र]s, both @deva[विकार] and @deva[अवयव] continue. But for non-@deva[प्राणिन्], non-@deva[ओषधि], non-@deva[वृक्ष] words, only @deva[विकार] applies — a case of asymmetric @deva[अनुवृत्ति].",
                "advanced": "This @deva[सूत्र] adds @deva[अवयव] (part) to the @deva[विकार] sense for @deva[प्राणिन्], @deva[ओषधि], and @deva[वृक्ष] words in @deva[षष्ठी].\n\nThe @deva[च] draws @deva[विकार] from @ref[4.3.134].\n\n**Examples:**\n- @deva[प्राणिन्]: @deva[कापोतः], @deva[मायूरः], @deva[तैत्तिरः] (by @deva[अञ्], @ref[4.3.154])\n- @deva[ओषधि]: @deva[मौर्वम्]\n- @deva[वृक्ष]: @deva[कारीरम्]\n\n**Double @deva[अनुवृत्ति]:** In following @deva[सूत्र]s, both @deva[विकार] and @deva[अवयव] continue. But for non-@deva[प्राणिन्]/​@deva[ओषधि]/​@deva[वृक्ष] words, only @deva[विकार] applies — asymmetric @deva[अनुवृत्ति] (@deva[द्विप्रकारानुवृत्ति])."
            }
        }
    }

    # Update the data
    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (4.3.121-135)")

if __name__ == "__main__":
    main()
