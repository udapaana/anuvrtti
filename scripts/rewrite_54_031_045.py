#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.4.31-45."""

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
        "54031": {
            "en": {
                "simple": "The affix @deva[कन्] is added to @deva[लोहित] (red) when referring to a temporary, non-permanent color. Example: @deva[लोहितकः कोपेन] (red with anger). Without the affix: @deva[लोहितो गौः] (a red cow) or @deva[लोहितं रुधिरम्] (red blood)—these refer to permanent color.",
                "standard": "This sūtra teaches that @deva[कन्] is added to @deva[लोहित] when expressing a non-permanent (@deva[अनित्य]) color—typically caused by emotion or temporary conditions. Thus @deva[लोहितकः कोपेन] means 'red with anger' and @deva[लोहितकः पीडनेन] means 'red from pain.' When the redness is natural or permanent (like @deva[लोहितो गौः] 'a red cow' or @deva[लोहितं रुधिरम्] 'red blood'), the affix does not apply. A vārttika notes that the derivative need not follow the gender of the primitive, yielding forms like @deva[लोहितिका] or @deva[लोहिनिका].",
                "advanced": "This sūtra restricts @deva[कन्] to @deva[लोहित] in the sense of @deva[वर्णे अनित्ये]—color that is transient or induced by circumstance. The semantic distinction is important: @deva[लोहितकः] conveys temporary redness (anger, exertion, pain), while the base @deva[लोहित] without affix denotes inherent or permanent color. The vārttika (@deva[न प्रकृतिवद्भावो वक्तव्यः]) permits gender independence in the derived form, allowing feminine @deva[लोहितिका] or @deva[लोहिनिका] without requiring agreement with the primitive's gender."
            }
        },
        "54032": {
            "en": {
                "simple": "The affix @deva[कन्] is added to @deva[लोहित] when referring to something dyed red. Example: @deva[लोहितकः कम्बलः] (a red-dyed blanket), @deva[लोहितकः पटः] (a red-dyed cloth), @deva[लोहितिका शाटी] (a red-dyed garment).",
                "standard": "This sūtra extends the use of @deva[कन्] with @deva[लोहित] to items that have been dyed red (@deva[रक्त]). Thus @deva[लोहितकः कम्बलः] means a blanket dyed red, and @deva[लोहितकः पटः] means a cloth dyed red. In the feminine, forms like @deva[लोहितिका शाटी] or @deva[लोहिनिका शाटी] are used for a red-dyed garment.",
                "advanced": "This sūtra provides the second context for @deva[कन्] after @deva[लोहित]: the meaning @deva[रक्त] (dyed). While the previous sūtra (@ref[5.4.31]) covered transient natural color, this covers artificial coloring through dyeing. The affix marks that the redness is applied rather than inherent. The feminine formations @deva[लोहितिका]/deva[लोहिनिका] follow from the gender-independence principle stated in the vārttika to the previous sūtra."
            }
        },
        "54033": {
            "en": {
                "simple": "The affix @deva[कन्] is added to @deva[काल] (dark/black) when referring to either a temporary color or something dyed dark. Examples: @deva[कालकं मुखं वैलक्ष्येण] (face dark with shame), @deva[कालकः पटः] (a blue-black dyed cloth), @deva[कालिका शाटी] (a dark-dyed garment).",
                "standard": "This sūtra extends the @deva[कन्] affix rules from @deva[लोहित] to @deva[काल], applicable in both senses: temporary color (@deva[वर्णे अनित्ये]) and dyed items (@deva[रक्ते]). Thus @deva[कालकं मुखं वैलक्ष्येण] means 'face darkened with shame or confusion'—a temporary coloring. And @deva[कालकः पटः] means 'a cloth dyed blue-black.' The feminine form is @deva[कालिका शाटी] for a dark-dyed garment.",
                "advanced": "This sūtra applies both conditions from @ref[5.4.31] (@deva[वर्णे अनित्ये]) and @ref[5.4.32] (@deva[रक्ते]) to @deva[काल]. The term @deva[काल] denotes dark or blue-black color. The dual applicability—transient natural darkening (as from shame) and artificial dyeing—is indicated by understanding both prior conditions. The feminine @deva[कालिका] parallels the @deva[लोहित] derivatives."
            }
        },
        "54034": {
            "en": {
                "simple": "The affix @deva[ठक्] (-इक) is added to words in the @deva[विनय] class without changing their meaning. Examples: @deva[वैनयिकः] = @deva[विनयः] (modesty), @deva[सामयिकः] = @deva[समयः] (convention), @deva[आकस्मिकः] = @deva[अकस्मात्] (sudden).",
                "standard": "This sūtra prescribes @deva[ठक्] (yielding -इक) after the @deva[विनयादि] gaṇa in a svārthika (self-referential) sense. Thus @deva[विनय] becomes @deva[वैनयिकः], @deva[समय] becomes @deva[सामयिकः], and @deva[उपाय] becomes @deva[औपयिकः] (with shortening of @deva[आ]). For @deva[अकस्मात्], the reading is @deva[अकस्माद्] to ensure @deva[इक्] is applied, yielding @deva[आकस्मिकः]. Words ending in @deva[टि] that are avyayas lose that portion by @ref[6.4.49]. The affix is optional per @ref[4.1.82].",
                "advanced": "The @deva[विनयादि] gaṇa includes 18 items: @deva[विनय], @deva[समय], @deva[उपाय] (with hrasva), @deva[संप्रति], @deva[संमति], @deva[कथंचित्], @deva[अकस्मात्], @deva[समाचार], @deva[उपचार], @deva[समयाचार], @deva[व्यवहार], @deva[संप्रदान], @deva[समुत्कर्ष], @deva[समूह], @deva[विशेष], @deva[अत्यय], @deva[अस्थि], @deva[कण्डु]. The special phonetic treatment of @deva[उपाय] (hrasva) and @deva[अकस्मात्] (read as @deva[अकस्माद्]) ensures correct derivation. The @deva[टि]-elision for avyayas follows @ref[6.4.49]."
            }
        },
        "54035": {
            "en": {
                "simple": "The affix @deva[ठक्] is added to @deva[वाच्] (speech) when referring to a verbal message spoken by another. Example: @deva[वाचिकं कथयति] (he relates the verbal message). Without this sense: @deva[मधुरा वाक् देवदत्तस्य] (the speech of Devadatta is sweet).",
                "standard": "This sūtra teaches that @deva[ठक्] is added to @deva[वाच्] when the meaning is @deva[व्याहृतार्थ]—a message or communication expressed by one person and conveyed by another. Thus @deva[वाचिकम्] means 'a verbal message' or 'tiding.' The condition is that it refers to something previously spoken by another and now being relayed. Some authorities extend this to written messages as well. When @deva[वाच्] simply means 'speech' without this messenger sense, the affix does not apply, as in @deva[मधुरा वाक् देवदत्तस्य] (Devadatta's speech is sweet).",
                "advanced": "The technical term @deva[व्याहृतार्थ] specifies the semantic condition: speech that was 'declared, expressed' (@deva[व्याहृत]) by one party and is being communicated as a message or news by a third party. The derivative @deva[वाचिक] thus specifically denotes a 'verbal message' or 'oral communication being relayed.' The extension to written messages (@deva[लिखितम्]) by some grammarians reflects practical usage. The counter-example @deva[मधुरा वाक्] shows that mere attribution of speech quality does not trigger the affix."
            }
        },
        "54036": {
            "en": {
                "simple": "The affix @deva[अण्] is added to @deva[कर्मन्] (work/occupation) when referring to work done as a commission or in response to a verbal directive. Example: @deva[कार्मणम्] = commissioned work.",
                "standard": "This sūtra teaches @deva[अण्] after @deva[कर्मन्] when the work is @deva[वाचिक]—done in pursuance of or in response to a verbal message or commission. Thus @deva[कार्मणम्] refers to work performed as a commission agent or delegated task. A vārttika adds that in the Vedas, words like @deva[कुलाल], @deva[वरुड], @deva[निषाद], @deva[कर्मार], @deva[चण्डाल], @deva[मित्र], and @deva[अमित्र] also take @deva[अण्] (yielding @deva[कौलालः], @deva[वारुडः], @deva[नैषादः], etc.).",
                "advanced": "The context @deva[वाचिके] links this to the previous sūtra—work that arises from a verbal commission or directive. Additional Vedic and secular derivatives with svārthika @deva[अण्] include: @deva[सान्नाय्यः], @deva[आनुजावरः], @deva[आनुषूकः], @deva[आनुष्टुभः], @deva[चातुष्प्राश्यः] (food eaten by four = @deva[ब्रह्मौदन]), @deva[राक्षोघ्नाः] (that by which demons are slain), @deva[वैयातः], @deva[वैकृतः], @deva[वारिवस्कृतः] (one who performs service @deva[वरिवः] = @deva[परिचर्या]), @deva[आग्रायणः], @deva[आग्राहायणः], @deva[सान्तपनः]."
            }
        },
        "54037": {
            "en": {
                "simple": "The affix @deva[अण्] is added to @deva[ओषधि] (medicine/herb) when not referring to a species. Examples: @deva[औषधं पिबति] (he drinks medicine), @deva[औषधं ददाति] (he gives medicine). For species: @deva[औषधयः क्षेत्ररूढाः] (herbs growing in the field).",
                "standard": "This sūtra prescribes @deva[अण्] after @deva[ओषधि] when it does not denote a @deva[जाति] (species or class). Thus @deva[औषधम्] refers to medicine in a general sense—something one drinks or gives. When @deva[ओषधि] denotes a species (as in @deva[औषधयः क्षेत्ररूढा भवन्ति], 'the herbs are growing in the field'), the affix is not applied because the species meaning is involved.",
                "advanced": "The condition @deva[अजातौ] excludes the @deva[जाति] (generic/species) sense. When @deva[ओषधि] refers to medicinal substance in actual use (drinking, giving, applying), it takes @deva[अण्] yielding @deva[औषध]. When it refers to the botanical class or species of herbs, the base form is retained. This semantic distinction—individual/substance use vs. class/species reference—determines affix application."
            }
        },
        "54038": {
            "en": {
                "simple": "The affix @deva[अण्] is added to words in the @deva[प्रज्ञ] class without changing their meaning. Example: @deva[प्राज्ञः] = @deva[प्रज्ञः] (wise person). This differs from @deva[प्राज्ञः] formed from @deva[प्रज्ञा] (wisdom) with @deva[मतुप्] sense.",
                "standard": "This sūtra prescribes svārthika @deva[अण्] after the @deva[प्रज्ञादि] gaṇa. Thus @deva[प्रज्ञः] (from @deva[प्रजानाति], one who knows fully) becomes @deva[प्राज्ञः] with feminine @deva[प्राज्ञी]. This differs from @deva[प्राज्ञः] derived from @deva[प्रज्ञा] (wisdom) by @deva[ण] with @deva[मतुप्] sense (@ref[5.2.101]), which has feminine @deva[प्राज्ञा]. Special forms include @deva[श्रौत्रम्] from @deva[श्रोत्र] when meaning 'body' (vs. @deva[श्रोत्रम्] 'hearing'), @deva[जौह्वतः] from @deva[जुह्वत्] meaning 'black antelope', and @deva[कार्ष्णः] from @deva[कृष्ण] meaning 'black antelope.'",
                "advanced": "The @deva[प्रज्ञादि] gaṇa contains 36 items with various conditions. The presence of @deva[विदन्] (from @deva[विद्] + @deva[शतृ]) in the list proves that @deva[वसु]-substitution (@ref[7.1.36]) for @deva[शतृ] after @deva[विद्] is optional, allowing @deva[विदन्] alongside @deva[विद्वान्]. The list includes: @deva[प्रज्ञ], @deva[वणिज्], @deva[उशिज्], @deva[उष्णिज्], @deva[प्रत्यक्ष], @deva[विद्वस्], @deva[विदन्], @deva[षोडन्], @deva[विद्या], @deva[मनस्], @deva[श्रोत्र] (body sense), @deva[जुह्वत्], @deva[कृष्ण] (antelope sense), @deva[चिकीर्षत्], @deva[चोर], @deva[शत्रु], @deva[योध], @deva[चक्षुस्], @deva[वसु], @deva[एनस्], @deva[मरुत्], @deva[कुञ्च], @deva[सत्वन्], @deva[दशार्ह], @deva[वयस्], @deva[व्याकृत], @deva[असुर], @deva[रक्षस्], @deva[पिशाच], @deva[अशनि], @deva[कर्षापण], @deva[देवता], @deva[बन्धु], @deva[षोडश], @deva[धूर्त], @deva[राजन्]."
            }
        },
        "54039": {
            "en": {
                "simple": "The affix @deva[तिकन्] is added to @deva[मृद्] (mud/clay) without changing its meaning. Result: @deva[मृत्तिका] = @deva[मृद्] (mud, clay).",
                "standard": "This sūtra teaches that @deva[तिकन्] is added to @deva[मृद्] in a svārthika sense, yielding @deva[मृत्तिका] as a synonym for @deva[मृद्] (mud, clay, earth). Unlike many svārthika affixes in this section which are @deva[नित्य] (obligatory), this affix is optional, following the general optionality stated in @ref[5.4.7].",
                "advanced": "The affix @deva[तिकन्] produces @deva[मृत्तिका] as a stylistic or emphatic variant of @deva[मृद्]. The commentary clarifies that this is not a @deva[नित्य] (invariable) affix like those in some other svārthika rules, but follows the optional pattern established by @ref[5.4.7]. The doubling of @deva[त्] results from standard sandhi when @deva[तिकन्] follows @deva[मृद्]."
            }
        },
        "54040": {
            "en": {
                "simple": "The affixes @deva[स] and @deva[स्न] are added to @deva[मृद्] when expressing excellence. Results: @deva[मृत्सा] and @deva[मृत्स्ना] = excellent clay/mud.",
                "standard": "This sūtra prescribes @deva[स] and @deva[स्न] (dual form @deva[स्नौ]) after @deva[मृद्] to express @deva[प्रशस्त] (excellent, superior). Thus @deva[प्रशस्ता मृद्] = @deva[मृत्सा] or @deva[मृत्स्ना] (excellent mud/clay). This rule debars @deva[रूपप्] from @ref[5.3.66]. These affixes are @deva[नित्य] (invariable)—whenever superiority of clay is expressed, these affixes must be used. The invariability is inferred because @deva[अन्यतरस्याम्] (optionally) appears in the following sūtra @ref[5.4.42], indicating this sūtra is not optional.",
                "advanced": "The dual affix @deva[स्नौ] provides the forms @deva[स] and @deva[स्न] as alternatives. The rule specifically overrides @deva[रूपप्] (@ref[5.3.66]) which would otherwise apply for @deva[प्रशंसा] (excellence). The @deva[नित्य] (obligatory) nature is established by inference from the sequence: @deva[अन्यतरस्याम्] follows in @ref[5.4.42], so this sūtra must be non-optional. Compare with optional svārthika affixes like those in @ref[5.4.7] and @ref[5.4.10]."
            }
        },
        "54041": {
            "en": {
                "simple": "In Vedic usage, the affixes @deva[तिल्] and @deva[तातिल्] are added to @deva[वृक] and @deva[ज्येष्ठ] when expressing excellence. Examples: @deva[वृकतिः] or @deva[वृकतातिः] (excellent wolf), @deva[ज्येष्ठतातिः] (excellent eldest).",
                "standard": "This sūtra is restricted to @deva[छन्दस्] (Vedic literature) and prescribes @deva[तिल्] and @deva[तातिल्] after @deva[वृक] (wolf) and @deva[ज्येष्ठ] (eldest) when @deva[प्रशंसा] (excellence) is expressed. Thus @deva[वृकतिः] or @deva[वृकतातिः]. The Rig Veda example is: @deva[योनो मरुतो वृकतातिमर्त्यः] (RV 11.34.9). Similarly @deva[ज्येष्ठतातिः]. This rule debars @deva[रूपप्] (@ref[5.3.66]).",
                "advanced": "The restriction @deva[छन्दसि] limits these affixes to Vedic usage. The condition @deva[प्रशंसायाम्] continues from the previous sūtra. Both @deva[तिल्] and @deva[तातिल्] are available, the latter being the extended form. The Vedic citation @deva[योनो मरुतो वृकतातिमर्त्यः] demonstrates actual usage. Like @ref[5.4.40], this rule overrides the general @deva[रूपप्] prescription of @ref[5.3.66] for excellence expressions."
            }
        },
        "54042": {
            "en": {
                "simple": "The affix @deva[शस्] is optionally added to words meaning 'much' (@deva[बहु]) or 'little' (@deva[अल्प]) when used as a kāraka (case relation to a verb). Examples: @deva[बहुशो ददाति] = @deva[बहूनि ददाति] (gives much), @deva[अल्पशो ददाति] = @deva[अल्पं ददाति] (gives little).",
                "standard": "This sūtra prescribes optional @deva[शस्] after words meaning 'much' or 'little' when they function as @deva[कारक] (in grammatical relation to a verb). Thus @deva[बहूनि ददाति] or @deva[बहुभिर्ददाति] = @deva[बहुशो ददाति] (he gives much). Similarly @deva[अल्पशो ददाति] (he gives a little). The rule does not apply in genitive constructions: @deva[बहूनां स्वामी] (lord of many) retains the genitive since the 6th case is not a @deva[कारक]. By the word 'signifying,' synonyms are included: @deva[भूरिशो ददाति], @deva[स्तोकशो ददाति]. Usage note: @deva[बहुशो देहि] applies to auspicious occasions; @deva[अल्पशो देहि] to inauspicious occasions like funerals.",
                "advanced": "The condition @deva[कारके] excludes the sixth case (@deva[षष्ठी]) which is not a @deva[कारक] by definition—it expresses relation (@deva[सम्बन्ध]) rather than verbal dependency. The semantic extension via @deva[वाचि] (signification) includes all synonyms of @deva[बहु] (like @deva[भूरि]) and @deva[अल्प] (like @deva[स्तोक]). The practical usage distinction—@deva[बहुशो] for @deva[अभ्युदयिक] (auspicious/prosperity) occasions vs. @deva[अल्पशो] for @deva[अनिष्ट] (inauspicious) occasions like @deva[श्राद्ध]—reflects ritual propriety."
            }
        },
        "54043": {
            "en": {
                "simple": "The affix @deva[शस्] is optionally added to numerals and words denoting coin units (in singular) to express distribution. Examples: @deva[द्विशः] = two each, @deva[त्रिशः] = three each, @deva[कार्षापणशः] = one kārṣāpaṇa each.",
                "standard": "This sūtra prescribes optional @deva[शस्] after numerals and singular coin-denomination words to express distributive sense (@deva[विभागे]). Thus @deva[द्वौ द्वौ मोदकौ ददाति] = @deva[द्विशो मोदकौ ददाति] (he gives two sweets to each). Similarly @deva[त्रिशः]. For coin units: @deva[कार्षापणशो ददाति] (he gives one kārṣāpaṇa to each), @deva[माषशः], @deva[पादशः]. The rule requires @deva[कारक] relation (not genitive): @deva[द्वयोर्द्वयोः स्वामी] (lord of two each) retains case forms. This sūtra is an exception to @ref[8.1.4].",
                "advanced": "The term @deva[एकवचन] (singular) applies to coin-denomination words which, though functionally distributing to many recipients, express 'one to each.' The @deva[कारक] requirement continues from @ref[5.4.42]. The exception to @ref[8.1.4] is significant for proper @deva[पद]-formation. Counter-examples show the dual requirement: @deva[घटं घटं ददाति] (a pot to each) doesn't apply because @deva[घट] is neither a numeral nor a coin unit; @deva[द्वौ ददाति] (he gives two) doesn't apply because there's no distributive sense."
            }
        },
        "54044": {
            "en": {
                "simple": "The affix @deva[तसि] (-तः) is optionally added to replace the ablative case when the fifth case arises from connection with the कर्मप्रवचनीय @deva[प्रति]. Examples: @deva[वासुदेवतः प्रति] = @deva[वासुदेवात् प्रति] (in relation to Vāsudeva).",
                "standard": "This sūtra prescribes optional @deva[तसि] (yielding -तः) after an ablative that arises due to the @deva[कर्मप्रवचनीय] word @deva[प्रति] (as taught in @ref[2.3.11]). Thus @deva[प्रद्युम्नः वासुदेवतः प्रति] or @deva[वासुदेवात् प्रति]. Similarly @deva[अभिमन्युरर्जुनतः प्रति]. The @deva[वा] (optionally) continues, so the regular ablative forms are equally valid. A vārttika adds that @deva[तसि] comes after @deva[आदि]-class words: @deva[आदितः], @deva[मध्यतः], @deva[पार्श्वतः], @deva[पृष्ठतः], etc. This is an @deva[आकृतिगण] (open-ended class).",
                "advanced": "The ablative governed by @deva[कर्मप्रवचनीय] @deva[प्रति] (per @ref[2.3.11]) can optionally take @deva[तसि]. The @deva[आद्यादि] vārttika establishes an @deva[आकृतिगण]—an open class without exhaustive enumeration—for locational/directional words that take @deva[तसि]: @deva[आदि] (beginning), @deva[मध्य] (middle), @deva[पार्श्व] (side), @deva[पृष्ठ] (back), etc. These forms (@deva[आदितः], @deva[मध्यतः]) are common in both Vedic and classical Sanskrit."
            }
        },
        "54045": {
            "en": {
                "simple": "The affix @deva[तसि] (-तः) is optionally added to replace the ablative case when the fifth case has @deva[अपादान] sense arising from verbs like @deva[हीय] (passive of @deva[हा], to abandon) and @deva[रुह] (to ascend). Examples: @deva[ग्रामतः आगच्छति] = @deva[ग्रामात् आगच्छति] (comes from the village).",
                "standard": "This sūtra prescribes optional @deva[तसि] after an ablative that has @deva[अपादान] sense when that sense arises from verbs like @deva[हीय] (passive of @deva[हा]) and @deva[रुह]. Thus @deva[ग्रामतः आगच्छति] or @deva[ग्रामात्]; @deva[चोरतो बिभेति] or @deva[चोरात्]; @deva[अध्ययनतः पराजयते] or @deva[अध्ययनात्]. The rule does not apply when @deva[हीय] or @deva[रुह] themselves govern the ablative: @deva[सार्थात् हीयते] (is left behind by the caravan), @deva[पर्वतात् अवरोहति] (descends from the mountain). The form @deva[हीय] indicates @deva[जहाति] (from @deva[हा]) not @deva[जिहीति].",
                "advanced": "The sūtra distinguishes @deva[अपादान]-sense ablatives arising from verbs like @deva[हा] and @deva[रुह] (per @ref[1.4.24], @ref[1.4.25], @ref[1.4.26]) from ablatives directly governed by these verbs. In @deva[सार्थात् हीयते], the caravan is the agent of separation, not the locus of departure. The specification @deva[हीय] ensures @deva[जहाति] (@deva[हा] = abandon) rather than @deva[जिहीति] (@deva[हा] = go). The verse @deva[मन्त्रो हीनः स्वरतो वर्णतो वा] is explained as having instrumental sense (@deva[स्वरेण वर्णेन वा हीनः]), not ablative, hence @deva[तसि] applies differently there."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.4.31-45)")

if __name__ == "__main__":
    main()
