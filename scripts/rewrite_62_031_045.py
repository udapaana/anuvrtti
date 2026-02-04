#!/usr/bin/env python3
"""Rewrite commentary for 6.2.31-45 (dvigu, avyayībhāva, dvandva, dative compounds)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62031": {
        "en": {
            "simple": "In a @deva[द्विगु] compound, the first member (numeral) may optionally keep its accent before @deva[दिष्टि] or @deva[वितस्ति] ('span'). So @deva[द्विदिष्टि] can be @deva[द्वि꣡दिष्टि] or @deva[द्विदिष्टि꣡].",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] in @deva[द्विगु] with @deva[दिष्टि/वितस्ति] as @deva[उत्तरपद]. Both measure terms allow either accent: @deva[द्वि꣡दिष्टि/द्विदिष्टि꣡] ('two @deva[दिष्टि]-spans'), @deva[द्वि꣡वितस्ति/द्विवितस्ति꣡] ('two spans').",
            "advanced": "The @deva[दिष्टिवितस्त्योर्वा] provides @deva[विभाषा] for these measurement terms. @deva[दिष्टि] and @deva[वितस्ति] (both meaning 'span' as length measure) allow optional first-member accent in @deva[द्विगु]. This extends @ref[6.2.29]'s @deva[द्विगु] rules with specific optionality for span-measurements."
        }
    },
    "62032": {
        "en": {
            "simple": "A word in the locative case (7th) that doesn't denote time keeps its accent before @deva[सिद्ध] ('cooked'), @deva[शुष्क] ('dried'), @deva[पक्व] ('ripened'), or @deva[बन्ध] ('bound'). So @deva[स्थाली꣡सिद्धम्] ('cooked in a pot').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] when a non-temporal locative compounds with @deva[सिद्ध/शुष्क/पक्व/बन्ध]. Examples: @deva[स्थाली꣡सिद्धम्] ('pot-cooked'), @deva[शाखा꣡शुष्कम्] ('branch-dried'). The locative relationship (cooked IN X) preserves first-member accent.",
            "advanced": "The @deva[सप्तम्यकालात् सिद्धशुष्कपक्वबन्धेषु] condition: @deva[सप्तमी]-ending @deva[पूर्वपद] (locative sense) that is @deva[अकाल] (non-temporal) + these four participles. @deva[स्थाली꣡सिद्ध] ('cooked in pot'), @deva[शाखा꣡शुष्क] ('dried on branch'), @deva[वृक्ष꣡पक्व] ('ripened on tree'). Time-locatives would follow different rules."
        }
    },
    "62033": {
        "en": {
            "simple": "The particles @deva[परि], @deva[प्रति], @deva[उप], and @deva[अप] keep their accent in @deva[अव्ययीभाव] compounds when the second member specifies an exclusion or a portion of day/night. So @deva[प꣡रिरात्रम्] ('throughout the night').",
            "standard": "This sūtra provides @deva[प्रकृतिस्वर] for @deva[परि/प्रति/उप/अप] in @deva[अव्ययीभाव] when the @deva[उत्तरपद] indicates @deva[व्यावृत्ति] (exclusion) or @deva[अहोरात्रावयव] (part of day/night). Examples: @deva[प꣡रिरात्रम्] ('all night'), @deva[प्र꣡तिदिवसम्] ('daily').",
            "advanced": "The @deva[परिप्रत्युपापः व्यावृत्तावहोरात्रावयवे च] rule: these four @deva[उपसर्ग]-like particles preserve @deva[प्रकृतिस्वर] in @deva[अव्ययीभाव] when expressing @deva[व्यावृत्ति] (distinction/exclusion) or time-portions. @deva[प꣡रिरात्र] ('through the night'), @deva[प्र꣡तिदिवस] ('each day'). The semantic conditions govern the accent."
        }
    },
    "62034": {
        "en": {
            "simple": "In a @deva[द्वन्द्व] compound of @deva[क्षत्रिय] (warrior) clan names in plural, the first member keeps its accent when the warrior belongs to @deva[सालंकायन] clan. So @deva[सालंकायनसात्यमुग्राः] has first-member accent.",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[द्वन्द्व] of @deva[क्षत्रिय] clan names (plural) when associated with @deva[सालंकायन]. The clan-compound retains first-member accent: @deva[सालंकायन꣡सात्यमुग्राः].",
            "advanced": "The @deva[द्वन्द्वे क्षत्रियाख्यायां सालंकायने बहुवचने] condition: @deva[द्वन्द्व] of @deva[क्षत्रिय]-@deva[संज्ञा] (warrior clan names) in @deva[बहुवचन] with @deva[सालंकायन] connection. The @deva[सालंकायन] reference indicates a specific lineage context. These clan-name @deva[द्वन्द्व] compounds preserve @deva[पूर्वपद स्वर]."
        }
    },
    "62035": {
        "en": {
            "simple": "In a @deva[द्वन्द्व] compound, a numeral as first member keeps its accent. So @deva[ए꣡कादश] ('eleven' = 1+10), @deva[द्वा꣡दश] ('twelve' = 2+10), @deva[त्र꣡योदश] ('thirteen' = 3+10).",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for numerals in @deva[द्वन्द्व]. The compound numerals like @deva[ए꣡कादश], @deva[द्वा꣡दश], @deva[त्र꣡योदश] (or @deva[त्रयोद꣡श]) retain first-member accent. These are additive @deva[द्वन्द्व] (1+10, 2+10, etc.).",
            "advanced": "The @deva[द्वन्द्वे संख्यस्य] rule: @deva[संख्या] (numeral) as @deva[पूर्वपद] in @deva[द्वन्द्व] preserves @deva[प्रकृतिस्वर]. The teens (11-19) are @deva[द्वन्द्व] of unit + @deva[दशन्]: @deva[ए꣡कादश], @deva[द्वा꣡दश], @deva[त्र꣡योदश/त्रयोद꣡श]. The optional accent on @deva[त्रयोदश] suggests variant patterns for certain numerals."
        }
    },
    "62036": {
        "en": {
            "simple": "When names of scholars (named after their teachers) are compounded in @deva[द्वन्द्व], the first member keeps its accent. So @deva[कालापचान्दोग्याः] ('students of Kālāpa and Chāndogya') has first-member accent.",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] in @deva[द्वन्द्व] of @deva[अन्तेवासिन्]-names (pupils named after teachers). When scholars bearing teachers' names compound, the first retains accent. Example: @deva[कालाप꣡चान्दोग्याः] ('Kālāpa and Chāndogya students').",
            "advanced": "The @deva[द्वन्द्वे अन्तेवासिनाम् आचार्योपदिष्टानाम्] condition: @deva[द्वन्द्व] of @deva[अन्तेवासिन्] (pupils/disciples) who are @deva[आचार्योपदिष्ट] (designated after teachers). The @deva[पूर्वपद] (first school-name) keeps @deva[प्रकृतिस्वर]. These compounds denote groups of students from different teaching lineages."
        }
    },
    "62037": {
        "en": {
            "simple": "In @deva[द्वन्द्व] compounds like @deva[कार्तकौजप] and others in this list, the first member keeps its accent. These are listed examples of @deva[द्वन्द्व] with first-member accent.",
            "standard": "This sūtra lists @deva[कार्तकौजपादि] as @deva[द्वन्द्व] compounds preserving @deva[पूर्वपद प्रकृतिस्वर]. The @deva[आदि] indicates a @deva[गण]. Words shown in dual/plural in the list are for illustrative purposes; the rule applies to the base compounds.",
            "advanced": "The @deva[कार्तकौजपादयश्च] introduces a @deva[गण] of @deva[द्वन्द्व] compounds with @deva[पूर्वपद स्वर]. The list includes compound names of paired entities (teachers, lineages, etc.). The dual/plural endings in the @deva[गण] entries are pedagogical; the accent rule applies to the compound structure itself."
        }
    },
    "62038": {
        "en": {
            "simple": "The word @deva[महत्] (in form @deva[महा] 'great') keeps its accent before @deva[व्रीहि] ('rice'), @deva[अपराह्ण] ('afternoon'), @deva[गृष्टि] ('cow'), @deva[इष्वास] ('bow'), @deva[जाबाल], @deva[भार], @deva[भारत], @deva[हरिद्रव], and @deva[तापस]. So @deva[महा꣡व्रीहिः] ('great rice').",
            "standard": "This sūtra lists specific words before which @deva[महत्] (as @deva[महा]) preserves @deva[प्रकृतिस्वर]. The list: @deva[व्रीहि], @deva[अपराह्ण], @deva[गृष्टि], @deva[इष्वास], @deva[जाबाल], @deva[भार], @deva[भारत], @deva[हरिद्रव], @deva[तापस]. Examples: @deva[महा꣡व्रीहिः], @deva[महा꣡पराह्णः].",
            "advanced": "The @deva[महतो व्रीह्यपराह्णगृष्टीष्वासजाबालभारभारतहरिद्रवतापसेषु] lists @deva[उत्तरपद] words with which @deva[महत्] shows @deva[प्रकृतिस्वर]. These specific lexical combinations preserve @deva[महा꣡]-accent: @deva[महा꣡व्रीहि], @deva[महा꣡पराह्ण], etc. Other @deva[महा]-compounds follow default @deva[अन्तोदात्त]."
        }
    },
    "62039": {
        "en": {
            "simple": "The words @deva[महत्] and @deva[क्षुल्लक] ('small') keep their accent before @deva[वैश्वदेव] ('offering to all gods'). So @deva[महा꣡वैश्वदेवम्] ('great @deva[वैश्वदेव]') and @deva[क्षुल्लक꣡वैश्वदेवम्] ('small @deva[वैश्वदेव]').",
            "standard": "This sūtra provides @deva[प्रकृतिस्वर] for @deva[महत्] and @deva[क्षुल्लक] before @deva[वैश्वदेव]. Examples: @deva[महा꣡वैश्वदेवम्] ('major @deva[वैश्वदेव] rite'), @deva[क्षुल्लक꣡वैश्वदेवम्] ('minor @deva[वैश्वदेव] rite'). Both size-adjectives retain accent.",
            "advanced": "The @deva[क्षुल्लकस्य च वैश्वदेवे] adds @deva[क्षुल्लक] ('small', from @deva[क्षुद्] + @deva[ल] + @deva[कन्]) to @deva[महत्] for @deva[प्रकृतिस्वर] before @deva[वैश्वदेव]. The @deva[वैश्वदेव] is a ritual offering; @deva[महा꣡वैश्वदेव] and @deva[क्षुल्लक꣡वैश्वदेव] distinguish major and minor versions."
        }
    },
    "62040": {
        "en": {
            "simple": "The word @deva[उष्ट्र] ('camel') keeps its accent before @deva[सादि] ('rider') and @deva[वामि] ('vomiter'). So @deva[उ꣡ष्ट्रसादि] ('camel-rider') and @deva[उ꣡ष्ट्रवामि] ('camel that vomits').",
            "standard": "This sūtra provides @deva[प्रकृतिस्वर] for @deva[उष्ट्र] before @deva[सादि/वामि]. Examples: @deva[उ꣡ष्ट्रसादि] ('one who rides camels'), @deva[उ꣡ष्ट्रवामि] ('vomiting camel'). The word @deva[उष्ट्र] derives from @deva[उप्] with @deva[ष्ट्रन्] affix.",
            "advanced": "The @deva[उष्ट्रस्य सादिवामिषु] rule: @deva[उष्ट्र] (from @deva[उप् + ष्ट्रन्]) preserves @deva[प्रकृतिस्वर] before @deva[सादि] ('rider', from @deva[सद्]) and @deva[वामि] ('vomiter', from @deva[वम्]). @deva[उ꣡ष्ट्रसादि], @deva[उ꣡ष्ट्रवामि] show the pattern. These are specific lexical compounds with exceptional accent."
        }
    },
    "62041": {
        "en": {
            "simple": "The word @deva[गो] ('cow') keeps its accent before @deva[साद] ('sitting'), @deva[सादि] ('rider'), and @deva[सारथि] ('charioteer'). So @deva[गो꣡सादः] ('cow-sitter'), @deva[गो꣡सादि] ('cow-rider'), @deva[गो꣡सारथि] ('cow-charioteer').",
            "standard": "This sūtra provides @deva[प्रकृतिस्वर] for @deva[गो] before @deva[साद/सादि/सारथि]. Examples: @deva[गो꣡सादः] ('one who mounts cows'), @deva[गो꣡सादि] ('cow-rider'), @deva[गो꣡सारथि] ('cowherd as charioteer'). The @deva[गो]-stem retains accent.",
            "advanced": "The @deva[गोः सादसादिसारथिषु] rule: @deva[गो] preserves @deva[प्रकृतिस्वर] before these three @deva[सद्]-derived words. @deva[साद] (agent), @deva[सादि] (agent), @deva[सारथि] (charioteer) as @deva[उत्तरपद] trigger @deva[गो꣡]-accent. Compare @deva[अश्वसाद] which may follow different rules."
        }
    },
    "62042": {
        "en": {
            "simple": "The first member keeps its accent in specific compounds: @deva[कुरु꣡गार्हपत], @deva[रिक्त꣡गुरु], @deva[असूत꣡जरती], @deva[अश्लील꣡दृढरूपा], @deva[पारे꣡वडवा], @deva[तैतिल꣡कद्रू], @deva[पण्य꣡वेश]. These are listed exceptions.",
            "standard": "This sūtra lists specific compounds with @deva[पूर्वपद प्रकृतिस्वर]: @deva[कुरुगार्हपत], @deva[रिक्तगुरु], @deva[असूतजरती], @deva[अश्लीलदृढरूपा], @deva[पारेवडवा], @deva[तैतिलकद्रू], @deva[पण्यवेश]. Each preserves first-member accent as listed exceptions (@deva[निपातन]).",
            "advanced": "The listing @deva[कुरुगार्हपतरिक्तगुर्वसूतजरत्यश्लीलदृढरूपापारेवडवातैतिलकद्रूःपण्यवेशाश्च] enumerates specific compounds with @deva[पूर्वपद स्वर]. These are @deva[निपातन]—they must be memorized individually. The compounds span various semantic types but share this accent pattern."
        }
    },
    "62043": {
        "en": {
            "simple": "A word in the dative case (4th) as first member keeps its accent when the second member expresses what is suitable to become the first. So @deva[यूप꣡दारु] ('wood for a sacrificial post')—wood suitable for becoming a @deva[यूप].",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] when a @deva[चतुर्थी]-sense @deva[पूर्वपद] compounds with what is @deva[प्रकृत्यर्थ] (suited to become it). Example: @deva[यूप꣡दारु] ('post-wood'), @deva[कुण्डल꣡हिरण्य] ('earring-gold'). The material suited for the purpose retains first-member accent.",
            "advanced": "The @deva[चतुर्थ्यर्थे बहुलं प्रकृत्यर्थे] condition: @deva[चतुर्थी] (dative) relationship where @deva[उत्तरपद] is @deva[प्रकृत्यर्थ] ('suited to become' the @deva[पूर्वपद]). @deva[यूप꣡दारु] = wood (suited) for (becoming) a post. The @deva[बहुलम्] indicates variability; not all such compounds follow this."
        }
    },
    "62044": {
        "en": {
            "simple": "Before the word @deva[अर्थ] ('purpose/sake'), a first member in dative sense keeps its accent. So @deva[मात्र꣡र्थम्] ('for mother's sake'), @deva[देवता꣡र्थम्] ('for the deity's sake').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[चतुर्थी]-sense compounds with @deva[अर्थ]. Examples: @deva[मात्र꣡र्थम्] ('for mother'), @deva[देवता꣡र्थम्] ('for deity'), @deva[अतिथ्य꣡र्थम्] ('for guest'). The 'for X's sake' meaning preserves first-member accent.",
            "advanced": "The @deva[अर्थे चतुर्थ्याः] rule: @deva[अर्थ] ('purpose/sake') as @deva[उत्तरपद] with @deva[चतुर्थी]-sense @deva[पूर्वपद] preserves @deva[प्रकृतिस्वर]. @deva[मातृ + अर्थ] = @deva[मात्र꣡र्थ] ('for mother'); @deva[देवता + अर्थ] = @deva[देवता꣡र्थ]. The purposive compounds retain beneficiary-accent."
        }
    },
    "62045": {
        "en": {
            "simple": "A first member in dative sense keeps its accent before a past participle in @deva[क्त]. So @deva[गो꣡हितम्] ('done for cows'), @deva[मनुष्य꣡हितम्] ('done for humans'), @deva[गो꣡रक्षितम्] ('protected for cows').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] when @deva[चतुर्थी]-sense @deva[पूर्वपद] precedes @deva[क्त]-participle. Examples: @deva[गो꣡हितम्] ('beneficial to cows'), @deva[अश्व꣡हितम्] ('beneficial to horses'), @deva[गो꣡रक्षितम्] ('guarded for cows'). The beneficiary retains accent.",
            "advanced": "The @deva[क्ते च] rule: @deva[चतुर्थी]-sense + @deva[क्त] (past passive participle) preserves @deva[पूर्वपद स्वर]. The @deva[क्त]-forms like @deva[हित] ('placed/beneficial'), @deva[रक्षित] ('protected') take beneficiary as @deva[पूर्वपद]: @deva[गो꣡हित], @deva[गो꣡रक्षित]. The dative relationship (done FOR X) governs accent."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.31-6.2.45)")
