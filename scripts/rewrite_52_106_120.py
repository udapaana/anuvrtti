#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Rewrite commentary for sūtras 5.2.106-120."""
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
        "52106": {
            "en": {
                "simple": "The affix @deva[उरच्] comes after @deva[दन्त] 'tooth' to mean 'having projecting teeth'. @deva[दन्ताः उन्नताः अस्य सन्ति] → @deva[दन्तुरः] 'buck-toothed'.",
                "standard": "After @deva[दन्त] 'tooth', the affix @deva[उरच्] (= @deva[उर]) denotes @deva[उन्नत] 'projecting/prominent'. Example: @deva[दन्ताः उन्नताः अस्य सन्ति] → @deva[दन्तुरः] 'one with projecting teeth, buck-toothed'. The words in the @[sūtra] are nominative or locative but function with ablative sense. Why 'projecting'? @deva[दन्तवान्] simply means 'having teeth' (general @deva[मतुप्]-sense).",
                "advanced": "The @deva[उरच्]-affix specifically denotes @deva[उन्नतदन्त] (prominent/protruding teeth), distinct from general @deva[मतुप्]-possession (@deva[दन्तवत्] 'toothed'). The @deva[विभक्त्यर्थ] of the @[sūtra] implies ablative-like relation (@deva[अपादानलक्षणा]). The semantic restriction to @deva[उन्नत] creates specialized dental terminology."
            }
        },
        "52107": {
            "en": {
                "simple": "The affix @deva[र] comes after @deva[ऊष] 'salt', @deva[सुषि] 'hole', @deva[मुष्क] 'testicle', and @deva[मधु] 'sweet' with @deva[मतुप्]-sense. @deva[ऊषरम्] 'saline'; @deva[सुषिरम्] 'perforated'; @deva[मुष्करः] 'having testicles'; @deva[मधुरः] 'sweet'.",
                "standard": "After @deva[ऊष], @deva[सुषि], @deva[मुष्क], and @deva[मधु], the affix @deva[र] comes with @deva[मतुप्]-sense. Examples: @deva[ऊषरं क्षेत्रम्] 'barren/saline field (containing @deva[ऊष]/salt)'; @deva[सुषिरं काष्ठम्] 'perforated wood (having @deva[सुषि]/holes)'; @deva[मुष्करः पशुः] 'a beast having testicles'; @deva[मधुरो गुडः] 'sweet sugar'. The @deva[इति] indicates these @deva[र]-formed words are names for specific things.",
                "advanced": "The @deva[र]-affix with @deva[मतुप्]-meaning applies to a closed four-item set: @deva[ऊष] (alkaline salt), @deva[सुषि] (cavity), @deva[मुष्क] (scrotum/testicle), @deva[मधु] (honey/sweetness). The @deva[इति] suggests @deva[संज्ञा]-status (technical names): @deva[ऊषर] for saline soil, @deva[सुषिर] for hollow objects, @deva[मुष्कर] for male animals, @deva[मधुर] for sweet substances."
            }
        },
        "52108": {
            "en": {
                "simple": "The affix @deva[म] comes after @deva[द्यु] 'sky/brightness' and @deva[द्रु] 'tree' with @deva[मतुप्]-sense. @deva[द्युमः] 'bright'; @deva[द्रुमः] 'tree'.",
                "standard": "After @deva[द्यु] 'sky/light' and @deva[द्रु] 'tree/wood', the affix @deva[म] comes with @deva[मतुप्]-sense. Examples: @deva[द्युमः] 'bright/luminous'; @deva[द्रुमः] 'tree' (having wood). These are primitive words and therefore do not take @deva[मतुप्] as an alternative.",
                "advanced": "The @deva[म]-affix for @deva[द्यु] and @deva[द्रु] creates @deva[रूढ] (lexicalized) forms: @deva[द्युम] (luminosity-possessing), @deva[द्रुम] (wood-possessing = tree). As @deva[प्रातिपदिक] (primitives), these lack @deva[मतुप्]-@deva[विकल्प]; the @deva[म]-forms are the only derivatives."
            }
        },
        "52109": {
            "en": {
                "simple": "The affix @deva[व] comes optionally after @deva[केश] 'hair' with @deva[मतुप्]-sense. Four forms exist: @deva[केशवः], @deva[केशी], @deva[केशिकः], @deva[केशवान्].",
                "standard": "After @deva[केश] 'hair', the affix @deva[व] comes optionally with @deva[मतुप्]-sense. Though @deva[अन्यतरस्याम्] is understood from @ref[5.2.96], its repetition here shows that alternatives include not just @deva[मतुप्] but also @deva[इनि] and @deva[ठन्] (per @ref[5.2.115]). Thus four forms: @deva[केशवः] (by @deva[व]), @deva[केशी] (by @deva[इनि]), @deva[केशिकः] (by @deva[ठन्]), @deva[केशवान्] (by @deva[मतुप्]). @deva[वार्त्तिक]: @deva[व] also occurs after other words: @deva[मणिवः] 'a kind of serpent', @deva[हिरण्यवः].",
                "advanced": "The @deva[व]-@deva[विकल्प] for @deva[केश] creates quadruple options: @deva[व], @deva[इनि], @deva[ठन्], @deva[मतुप्]. The @deva[अन्यतरस्याम्]-repetition explicitly enables @deva[इनि]//@deva[ठन्] alternatives (from @ref[5.2.115]), not just @deva[मतुप्]. The @deva[वार्त्तिक] extends @deva[व] to @deva[मणि], @deva[हिरण्य], etc."
            }
        },
        "52110": {
            "en": {
                "simple": "The affix @deva[व] comes after @deva[गाण्डी] and @deva[अजग] with @deva[मतुप्]-sense when forming a name. @deva[गाण्डीवम्] 'Arjuna's bow Gāṇḍīva'; @deva[अजगवम्] 'Śiva's bow Ajagava'.",
                "standard": "After @deva[गाण्डी] and @deva[अजग], the affix @deva[व] comes with @deva[मतुप्]-sense when forming a proper name (@deva[संज्ञायाम्]). Examples: @deva[गाण्डीवम्] 'the bow Gāṇḍīva of Arjuna'; @deva[अजगवम्] 'the bow Ajagava of Śiva'. Shortening also occurs: @deva[गाण्डिवम्]. The @[sūtra] is framed to include both @deva[गाण्डी] and @deva[गाण्डि] as bases.",
                "advanced": "The @deva[व]-affix in @deva[संज्ञा] (naming) context applies to @deva[गाण्डी]//@deva[गाण्डि] and @deva[अजग], creating famous bow-names: @deva[गाण्डीव] (Arjuna's), @deva[अजगव] (Śiva's). The @deva[ह्रस्व]-@deva[विकल्प] (@deva[गाण्डिव]) shows the @[sūtra] encompasses both @deva[दीर्घ] and @deva[ह्रस्व] base-variants."
            }
        },
        "52111": {
            "en": {
                "simple": "The affixes @deva[ईरन्] and @deva[ईरच्] come after @deva[काण्ड] and @deva[अण्ड] respectively with @deva[मतुप्]-sense. @deva[काण्डीरः] 'having a stalk'; @deva[अण्डीरः] 'having eggs'.",
                "standard": "After @deva[काण्ड] 'stalk/section' and @deva[अण्ड] 'egg', the affixes @deva[ईरन्] (= @deva[ईर]) and @deva[ईरच्] (= @deva[ईर]) come respectively with @deva[मतुप्]-sense. Examples: @deva[काण्डीरः] 'having a stalk/stem'; @deva[अण्डीरः] 'having eggs/ovate'. Another reading has @deva[आण्ड] base, yielding @deva[आण्डीरः].",
                "advanced": "The @deva[ईरन्]//@deva[ईरच्] affixes follow @deva[यथासंख्य]: @deva[ईरन्] ↔ @deva[काण्ड], @deva[ईरच्] ↔ @deva[अण्ड]. Both yield @deva[ईर]-ending forms. An alternative @deva[पाठ] reads @deva[आण्ड] (with initial @deva[आ]), producing @deva[आण्डीर]. The accent pattern follows the respective @deva[अनुबन्ध] specifications."
            }
        },
        "52112": {
            "en": {
                "simple": "The affix @deva[वलच्] comes after @deva[रजस्] 'menses', @deva[कृषि] 'farming', @deva[आसुति] 'distilling', and @deva[परिषद्] 'assembly' with @deva[मतुप्]-sense. @deva[रजस्वला] 'menstruating woman'; @deva[कृषीवलः] 'farmer'.",
                "standard": "After @deva[रजस्], @deva[कृषि], @deva[आसुति], and @deva[परिषद्], the affix @deva[वलच्] (= @deva[वल]) comes with @deva[मतुप्]-sense. Examples: @deva[रजस्वला स्त्री] 'menstruating woman'; @deva[कृषीवलः कुटुम्बी] 'farmer/householder'; @deva[आसुतीवलः शौण्डिकः] 'distiller'; @deva[परिषद्वलो राजा] 'king with an assembly'. The vowel-lengthening in @deva[कृषि] and @deva[आसुति] occurs by @ref[6.3.118]. @deva[वलच्] applies only under specific senses and conditions shown in examples.",
                "advanced": "The @deva[वलच्]-affix with @deva[मतुप्]-meaning applies to four specified bases with @deva[दीर्घ] by @ref[6.3.118] for @deva[इकारान्त] stems (@deva[कृषि] → @deva[कृषी], @deva[आसुति] → @deva[आसुती]). The affixation is context-sensitive: @deva[रजस्वला] for menstrual state (not general 'dusty'); @deva[कृषीवल] for agricultural profession; @deva[परिषद्वल] for assembly-holding royalty."
            }
        },
        "52113": {
            "en": {
                "simple": "The affix @deva[वलच्] comes after @deva[दन्त] 'tooth/tusk' and @deva[शिखा] 'crest' when forming a name with @deva[मतुप्]-sense. @deva[दन्तावलः] 'elephant'; @deva[शिखावलम्] 'a city name'.",
                "standard": "After @deva[दन्त] 'tooth/tusk' and @deva[शिखा] 'crest/peak', the affix @deva[वलच्] comes with @deva[मतुप्]-sense when forming a proper name (@deva[संज्ञायाम्]). Examples: @deva[दन्तावलः सैन्यः] 'an elephant (in army)'; @deva[दन्तावलो गजः] 'tusked elephant'; @deva[शिखावलं नगरम्] 'the city Śikhāvala'; @deva[शिखावलः स्थूणा] 'a crested pillar'. The final vowel of @deva[दन्त] is lengthened before @deva[वल] by @ref[6.3.118].",
                "advanced": "The @deva[वलच्]-affix in @deva[संज्ञा]-context applies to @deva[दन्त] and @deva[शिखा] with @deva[दीर्घ] by @ref[6.3.118] (@deva[दन्त] → @deva[दन्ता] before @deva[वल]). @deva[दन्तावल] becomes a name for tusked elephants; @deva[शिखावल] for places/objects with crests. The @deva[संज्ञा]-restriction limits productive use."
            }
        },
        "52114": {
            "en": {
                "simple": "The words @deva[ज्योत्स्ना] 'moonlight', @deva[तमिस्रा] 'night', @deva[शृङ्गिण] 'horned', @deva[ऊर्जस्विन्] 'vigorous', @deva[ऊर्जस्वल] 'energetic', @deva[गोमिन्] 'having cows', @deva[मलिन] 'dirty', and @deva[मलीमस] 'very dirty' are irregularly formed with @deva[मतुप्]-sense.",
                "standard": "Eight words are irregularly formed (@deva[निपातन]) in @deva[मतुप्]-sense: (1) @deva[ज्योतिस्] + @deva[न] → @deva[ज्योत्स्ना] 'moonlight' (@deva[इ]-elision); (2) @deva[तमस्] + @deva[र] → @deva[तमिस्रा] 'night' (@deva[इ]-insertion; also @deva[तमिस्रं नभः] 'dark sky'); (3) @deva[शृङ्ग] + @deva[इन] → @deva[शृङ्गिण] 'horned'; (4-5) @deva[ऊर्जस्] + @deva[विन्/वल] → @deva[ऊर्जस्विन्], @deva[ऊर्जस्वल] 'vigorous'; (6) @deva[गो] + @deva[मिन्] → @deva[गोमिन्] 'cow-owner'; (7-8) @deva[मल] + @deva[इन/ईमस] → @deva[मलिन], @deva[मलीमस] 'dirty'.",
                "advanced": "Eight @deva[निपातन] forms with @deva[मतुप्]-@deva[अर्थ]: @deva[ज्योत्स्ना] (< @deva[ज्योतिस्] + @deva[न], @deva[इकारलोप]); @deva[तमिस्रा] (< @deva[तमस्] + @deva[र], @deva[इट्-आगम]); @deva[शृङ्गिण] (non-standard @deva[इन]); @deva[ऊर्जस्विन्]//@deva[ऊर्जस्वल] (@deva[विन्]//@deva[वल] after @deva[अस्]-stem); @deva[गोमिन्] (anomalous @deva[मिन्] for @deva[गो]); @deva[मलिन]//@deva[मलीमस] (variant @deva[मतुप्]-forms for @deva[मल]). All are listed as @deva[संज्ञा] (established names)."
            }
        },
        "52115": {
            "en": {
                "simple": "The affixes @deva[इनि] and @deva[ठन्] come after stems ending in short @deva[अ] with @deva[मतुप्]-sense; @deva[मतुप्] is also optional. @deva[दण्डिन्], @deva[दण्डिकः], @deva[दण्डवान्] 'having a staff'.",
                "standard": "After stems ending in short @deva[अ], the affixes @deva[इनि] (= @deva[इन्]) and @deva[ठन्] (= @deva[इक]) come with @deva[मतुप्]-sense; @deva[मतुप्] is also available by @deva[अन्यतरस्याम्] understood from @ref[5.2.96]. Examples: @deva[दण्डिन्] (nom. @deva[दण्डी]), @deva[दण्डिकः], @deva[दण्डवान्] 'having a staff'; @deva[छत्रिन्] (nom. @deva[छत्री]), @deva[छत्रिकः], @deva[छत्रवान्] 'having an umbrella'. Why 'short @deva[अ]'? @deva[खट्वावान्] — no @deva[इनि] or @deva[ठन्] after long @deva[आ]-ending stems.",
                "advanced": "The @deva[इनि]//@deva[ठन्]//@deva[मतुप्] triple-option applies to @deva[अकारान्त] (short @deva[अ]-final) stems. The @deva[अन्यतरस्याम्]-@deva[अनुवृत्ति] from @ref[5.2.96] provides the @deva[मतुप्]-@deva[विकल्प]. Long @deva[आ]-ending stems (@deva[खट्वा]) take only @deva[मतुप्], not @deva[इनि]//@deva[ठन्]. This is the general @deva[मतुप्]-domain rule for @deva[अकारान्त] bases."
            }
        },
        "52116": {
            "en": {
                "simple": "The affixes @deva[इनि] and @deva[ठन्] come after @deva[व्रीहि]-class words with @deva[मतुप्]-sense; @deva[मतुप्] is also optional. @deva[व्रीही], @deva[व्रीहिकः], @deva[व्रीहिमान्] 'having rice'.",
                "standard": "After @deva[व्रीहि] and similar words (@deva[व्रीह्यादि]), the affixes @deva[इनि] and @deva[ठन्] come with @deva[मतुप्]-sense, along with @deva[मतुप्] as alternative. Examples: @deva[व्रीहिन्] (nom. @deva[व्रीही]), @deva[व्रीहिकः], @deva[व्रीहिमान्] 'having rice'; @deva[मायी], @deva[मायिकः], @deva[मायावान्] 'having illusion/magic'. However, not all @deva[व्रीह्यादि] words take both affixes. Per Patañjali: @deva[इनि] after @deva[शिखादि] subdivision; @deva[ठन्] (@deva[इकन्]) after @deva[यवखदादि] subdivision.",
                "advanced": "The @deva[व्रीह्यादि] @deva[गण] subdivides for @deva[इनि]//@deva[ठन्] distribution: @deva[शिखादि] takes @deva[इनि]; @deva[यवखदादि] takes @deva[ठन्] (= @deva[इकन्]). Patañjali's analysis refines the @[sūtra]'s apparent generality. The @deva[मतुप्]-@deva[विकल्प] remains universal for the @deva[गण]."
            }
        },
        "52117": {
            "en": {
                "simple": "The affix @deva[इलच्] also comes after @deva[तुन्द]-class words with @deva[मतुप्]-sense. Four forms: @deva[तुन्दिलः], @deva[तुन्दी], @deva[तुन्दिकः], @deva[तुन्दवान्] 'pot-bellied'.",
                "standard": "After @deva[तुन्द] and similar words (@deva[तुन्दादि]), the affix @deva[इलच्] (= @deva[इल]) also comes with @deva[मतुप्]-sense. The @deva[च्] indicates that @deva[इनि], @deva[ठन्], and @deva[मतुप्] also apply. Examples: @deva[तुन्दिलः], @deva[तुन्दी], @deva[तुन्दिकः], @deva[तुन्दवान्] 'pot-bellied'; similarly @deva[उदरिलः], @deva[उदरी], @deva[उदरिकः], @deva[उदरवान्] 'big-bellied'. The @deva[तुन्दादि] includes: @deva[तुन्द], @deva[उदर], @deva[पिचण्ड], @deva[घट], @deva[यव], @deva[व्रीहि], @deva[स्वाङ्ग]...",
                "advanced": "The @deva[इलच्]-addition for @deva[तुन्दादि] creates quadruple options: @deva[इलच्], @deva[इनि], @deva[ठन्], @deva[मतुप्]. The @deva[च्]-@deva[अनुकर्षण] draws in the prior affixes. The @deva[तुन्दादि] @deva[गण] includes body-part and grain terms: @deva[तुन्द] (belly), @deva[उदर] (stomach), @deva[पिचण्ड] (belly), @deva[घट] (pot/belly), @deva[यव] (barley), @deva[व्रीहि] (rice), @deva[स्वाङ्ग] (own limb)."
            }
        },
        "52118": {
            "en": {
                "simple": "The affix @deva[ठञ्] always comes after @deva[अ]-ending stems preceded by @deva[एक] or @deva[गो] in compound with @deva[मतुप्]-sense. @deva[एकशतम् अस्य अस्ति] → @deva[ऐकशतिकः] 'having one hundred'.",
                "standard": "After stems ending in @deva[अ] which are preceded in compound by @deva[एक] 'one' or @deva[गो] 'cow', the affix @deva[ठञ्] (= @deva[इक] with @deva[वृद्धि]) always comes with @deva[मतुप्]-sense. Examples: @deva[एकशतम् अस्य अस्ति] → @deva[ऐकशतिकः] 'possessing one hundred'; @deva[गौशतिकः] 'having a hundred cows'; @deva[गौसहस्रिकः] 'having a thousand cows'. The @deva[अतः] from @ref[5.2.115] is understood; non-@deva[अ]-ending stems are excluded: @deva[एकविंशतिः अस्य अस्ति] — no affix.",
                "advanced": "The @deva[नित्य]-@deva[ठञ्] for @deva[एक]//@deva[गो]-preceded @deva[अकारान्त] compounds creates @deva[वृद्धि]-derivatives: @deva[ऐकशतिक], @deva[गौशतिक], @deva[गौसहस्रिक]. The @deva[अतः]-@deva[अनुवृत्ति] excludes @deva[एकविंशति] (non-@deva[अ] final). The form @deva[ऐकगविक] is explained as @deva[समासान्त]-based, not exceptional."
            }
        },
        "52119": {
            "en": {
                "simple": "The affix @deva[ठञ्] comes after @deva[शत] 'hundred' and @deva[सहस्र] 'thousand' when preceded by @deva[निष्क] 'gold coin' with @deva[मतुप्]-sense. @deva[निष्कशतम् अस्य अस्ति] → @deva[नैष्कशतिकः] 'having a hundred niṣkas'.",
                "standard": "After @deva[शत] 'hundred' and @deva[सहस्र] 'thousand' when following @deva[निष्क] 'gold coin/weight', the affix @deva[ठञ्] comes with @deva[मतुप्]-sense. Examples: @deva[निष्कशतम् अस्य अस्ति] → @deva[नैष्कशतिकः] 'possessing a hundred niṣkas'; @deva[नैष्कसहस्रिकः] 'having a thousand niṣkas'. But not after @deva[सुवर्णनिष्कशतम्] — such usage is not attested.",
                "advanced": "The @deva[ठञ्]-affix for @deva[निष्क]-preceded @deva[शत]//@deva[सहस्र] creates wealth-possession terms: @deva[नैष्कशतिक], @deva[नैष्कसहस्रिक]. The restriction against @deva[सुवर्णनिष्कशत]-derivation reflects actual linguistic usage (@deva[लोक]-@deva[प्रयोग]-absence). @deva[निष्क] is a standard gold-weight/currency unit."
            }
        },
        "52120": {
            "en": {
                "simple": "The affix @deva[यप्] comes after @deva[रूप] 'form/image' when meaning 'stamped/coined' or 'praised' with @deva[मतुप्]-sense. @deva[आहतं रूपम् अस्य] → @deva[रूप्यः] 'stamped coin'; @deva[प्रशस्तं रूपम्] → @deva[रूप्यः] 'beautiful'.",
                "standard": "After @deva[रूप] 'form/image', the affix @deva[यप्] (= @deva[य]) comes with @deva[मतुप्]-sense when denoting: (1) @deva[आहत] 'stamped/coined' — impressed form, or (2) @deva[प्रशस्त] 'praised' — beautiful form. Examples: @deva[आहतं रूपम् अस्य] → @deva[रूप्यो दीनारः] 'a dinar having a stamped image (of a king)'; @deva[रूप्यः केदारः], @deva[रूप्यं कार्षापणम्]; @deva[प्रशस्तं रूपम् अस्य अस्ति] → @deva[रूप्यः पुरुषः] 'a handsome/lovely person'. @deva[आहत] refers to the form impressed by hammering.",
                "advanced": "The @deva[यप्]-affix for @deva[रूप] is semantically conditioned: @deva[आहतरूप] (stamped/minted image, hence currency) or @deva[प्रशस्तरूप] (praiseworthy form, hence beauty). The @deva[रूप्य] derived for coinage sense relates to the impressed royal/divine image on coins. The @deva[प्रशस्त]-sense yields aesthetic descriptions (@deva[रूप्य पुरुष] = handsome man)."
            }
        }
    }

    for key, value in updates.items():
        data[key] = value

    save_json(commentary_path, data)
    print(f"Updated {len(updates)} sūtras (5.2.106-120)")

if __name__ == "__main__":
    main()
