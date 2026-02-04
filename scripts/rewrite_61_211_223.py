#!/usr/bin/env python3
"""Rewrite commentary for 6.1.211-223 (final accent rules, compound accent)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "61211": {
        "en": {
            "simple": "The pronouns @deva[युष्मद्] ('you') and @deva[अस्मद्] ('I/we') have acute accent on the first syllable in the genitive singular. So @deva[त꣡व] ('your') and @deva[म꣡म] ('my') have initial accent. The shortened forms @deva[ते] and @deva[मे] are different.",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[युष्मद्/अस्मद्] in genitive singular when appearing as @deva[तव/मम]. Examples: @deva[त꣡व] ('of you'), @deva[म꣡म] ('of me'). The enclitic forms @deva[ते/मे] don't receive this accent—they are typically unaccented.",
            "advanced": "The @deva[षष्ठ्येकवचने] condition targets genitive singular. The full forms @deva[तव], @deva[मम] take @deva[आद्युदात्त]: @deva[त꣡व], @deva[म꣡म]. The enclitic alternants @deva[ते], @deva[मे] are @deva[निपात]-like and typically @deva[अनुदात्त] or @deva[एकश्रुति]. This distinction between full and clitic pronominal forms is prosodically significant."
        }
    },
    "61212": {
        "en": {
            "simple": "The pronouns @deva[युष्मद्] and @deva[अस्मद्] have acute accent on the first syllable in the dative singular. So @deva[तु꣡भ्यम्] ('to you') and @deva[म꣡ह्यम्] ('to me') have initial accent. The shortened forms @deva[ते] and @deva[मे] are different.",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[युष्मद्/अस्मद्] in dative singular when appearing as @deva[तुभ्यम्/मह्यम्]. Examples: @deva[तु꣡भ्यम्] ('for you'), @deva[म꣡ह्यम्] ('for me'). The enclitic @deva[ते/मे] forms are excluded.",
            "advanced": "The @deva[चतुर्थ्येकवचने] condition targets dative singular. Full forms @deva[तुभ्यम्], @deva[मह्यम्] take @deva[आद्युदात्त]: @deva[तु꣡भ्यम्], @deva[म꣡ह्यम्]. Combined with @ref[6.1.211], this establishes first-syllable accent for full-form personal pronouns in gen/dat singular. The @deva[ते/मे] clitics remain outside this accent domain."
        }
    },
    "61213": {
        "en": {
            "simple": "Words formed with the affix @deva[यत्] have acute accent on the first syllable if they are two-syllable words—except @deva[नाव्य] (from @deva[नौ] 'boat'), which doesn't follow this rule. So @deva[दि꣡व्य] ('divine') is accented initially.",
            "standard": "This sūtra provides @deva[आद्युदात्त] for disyllabic (@deva[द्व्यच्]) @deva[यत्]-derivatives, with @deva[नाव्य] as exception. Examples: @deva[दि꣡व्य] ('divine'), @deva[भ꣡व्य] ('future'). The word @deva[नाव्य] ('navigable') takes different accent: @deva[नाव्य꣡].",
            "advanced": "The @deva[यति द्व्यचो नाव्यवर्जम्] conditions: (1) @deva[यत्] affix, (2) @deva[द्व्यच्] (two syllables), (3) except @deva[नाव्य]. Disyllabic @deva[यत्]-forms get @deva[आद्युदात्त]: @deva[दि꣡व्य], @deva[भ꣡व्य], @deva[स꣡व्य]. The @deva[नाव्य] exception preserves its distinct accent (@deva[नाव्य꣡] or default @deva[यत्] pattern). Trisyllabic @deva[यत्]-words follow other rules."
        }
    },
    "61214": {
        "en": {
            "simple": "The roots @deva[ईड्] ('praise'), @deva[वन्द्] ('worship'), @deva[वृ] ('choose'), @deva[शंस्] ('praise'), and @deva[दुह्] ('milk') have acute accent on the first syllable when followed by the affix @deva[ण्यत्]. So @deva[ई꣡ड्यम्] ('praiseworthy'), @deva[व꣡न्द्यम्] ('worshipable').",
            "standard": "This sūtra assigns @deva[आद्युदात्त] to @deva[ण्यत्]-derivatives of five roots: @deva[ईड्], @deva[वन्द्], @deva[वृ], @deva[शंस्], @deva[दुह्]. Examples: @deva[ई꣡ड्यम्], @deva[व꣡न्द्यम्], @deva[व꣡र्यम्], @deva[श꣡स्यम्], @deva[दो꣡ह्यम्]. These take first-syllable rather than default @deva[ण्यत्] accent.",
            "advanced": "The @deva[ईड्वन्दवृशंसदुहां ण्यति] lists five roots with exceptional @deva[आद्युदात्त] before @deva[ण्यत्] (potential passive participle). The default @deva[ण्यत्] accent would differ; these forms override it: @deva[ई꣡ड्य], @deva[व꣡न्द्य], @deva[व꣡र्य/वा꣡र्य], @deva[श꣡स्य], @deva[दो꣡ह्य]. This is a lexically specified accent exception for gerundive formations."
        }
    },
    "61215": {
        "en": {
            "simple": "The words @deva[वेणु] ('bamboo/flute') and @deva[इन्धान] ('fuel/kindling') may optionally have acute accent on the first syllable. So @deva[वे꣡णुः] or @deva[वेणु꣡ः]; @deva[इ꣡न्धानः] or @deva[इन्धा꣡नः].",
            "standard": "This sūtra provides optional @deva[आद्युदात्त] for @deva[वेणु] and @deva[इन्धान]. For @deva[वेणु]: @deva[वे꣡णुः] or @deva[वेणु꣡ः]. For @deva[इन्धान]: @deva[इ꣡न्धानः], @deva[इन्धा꣡नः], or @deva[इन्धान꣡ः]. Multiple accent variants are acceptable.",
            "advanced": "The @deva[वेण्विन्धानयोः वा] provides @deva[विभाषा] (optionality). @deva[वेणु] has two options; @deva[इन्धान] (a @deva[शानच्] participle from @deva[इन्ध्] 'kindle') shows three possible accents reflecting different analyses. The optionality documents variant pronunciations in the tradition. Both are @deva[निपातन]-like forms with flexible accent."
        }
    },
    "61216": {
        "en": {
            "simple": "The words @deva[त्याग] ('abandonment'), @deva[राग] ('color/passion'), @deva[हास] ('laughter'), @deva[कुह] ('where?'), @deva[श्वठ] ('deceitful'), and @deva[क्रथ] ('a name') may optionally have acute accent on the first syllable. So @deva[त्या꣡गः] or @deva[त्याग꣡ः].",
            "standard": "This sūtra provides optional @deva[आद्युदात्त] for six words: @deva[त्याग], @deva[राग], @deva[हास], @deva[कुह], @deva[श्वठ], @deva[क्रथ]. Each can have first-syllable or default accent: @deva[त्या꣡ग/त्याग꣡], @deva[रा꣡ग/राग꣡], etc.",
            "advanced": "The @deva[त्यागरागहासकुहश्वठक्रथानां वा] lists six forms with @deva[आद्युदात्त विकल्प]. The @deva[घञ्]-derivatives (@deva[त्याग], @deva[राग], @deva[हास]) and other forms (@deva[कुह], @deva[श्वठ], @deva[क्रथ]) all show optional first-syllable accent. This documents lexical accent variation without prescribing a single pattern."
        }
    },
    "61217": {
        "en": {
            "simple": "Words formed with an affix having indicatory @deva[र्] have acute accent on the penultimate (second-to-last) syllable, if the word has more than two syllables. So @deva[ण्वुल्]-derivatives like @deva[कारक꣡ः] have penultimate accent.",
            "standard": "This sūtra assigns @deva[उपोत्तमोदात्त] (penultimate accent) to @deva[रित्] affixes when the resulting word is @deva[त्र्यादि] (three+ syllables). Example: @deva[कार꣡कः] ('doer'). The @deva[र्] marker indicates this accent pattern for polysyllabic derivatives.",
            "advanced": "The @deva[रिति त्र्यादौ उपोत्तमम्] conditions: (1) @deva[रित्] affix (indicatory @deva[र्]), (2) @deva[त्र्यादि] (three or more syllables). The penultimate (@deva[उपोत्तम]) syllable takes @deva[उदात्त]. Disyllabic forms don't qualify (no 'penultimate' distinct from first/last). The @deva[र्] marker class includes several @deva[कृत्] and @deva[तद्धित] affixes."
        }
    },
    "61218": {
        "en": {
            "simple": "The reduplicated aorist formed with @deva[चङ्] may optionally have acute accent on the penultimate syllable if the word has more than two syllables. So @deva[अचीकरत्] can be @deva[अचीक꣡रत्] or @deva[अची꣡करत्].",
            "standard": "This sūtra provides optional @deva[उपोत्तमोदात्त] for @deva[चङ्]-aorist (@deva[लुङ्] with @deva[चङ्]) when @deva[त्र्यादि] (three+ syllables). Example: @deva[मा हि चीकर꣡ताम्] or alternative accent. The @deva[विभाषा] allows variant accent patterns.",
            "advanced": "The @deva[चङि त्र्यादौ वोपोत्तमम्] provides optional penultimate accent for @deva[चङ्]-aorist in polysyllabic forms. The @deva[चङ्] marker (@ref[3.1.48]) produces reduplicated aorists like @deva[अचीकरत्], @deva[अजीजनत्]. The @deva[विभाषा] allows @deva[उपोत्तम] accent optionally: @deva[अचीक꣡रत्/अची꣡करत्]. This reflects variant accent traditions for these verbal forms."
        }
    },
    "61219": {
        "en": {
            "simple": "The @deva[आ] that appears before the affix @deva[मत्] has acute accent when the word is a feminine name. So place names like @deva[अदुम्बरा꣡वती] ('having @deva[उदुम्बर] trees') have accent on the @deva[आ] before @deva[वती].",
            "standard": "This sūtra assigns @deva[उदात्त] to the @deva[आ] preceding @deva[मतुप्/वतुप्] in feminine @deva[संज्ञा] (names). Examples: @deva[अदुम्बरा꣡वती], @deva[पुष्करा꣡वती], @deva[शरा꣡वती] (@ref[4.2.86])—place names with accent on @deva[आ] before @deva[वती].",
            "advanced": "The @deva[मति स्त्रियां संज्ञायाम् आः] rule: in feminine @deva[संज्ञा] with @deva[मतुप्], the @deva[आ] (from @deva[टाप्]) before @deva[वती] takes @deva[उदात्त]. River names like @deva[शरा꣡वती] show this pattern. The @deva[स्त्रियां संज्ञायाम्] restricts to feminine proper nouns, typically geographical names."
        }
    },
    "61220": {
        "en": {
            "simple": "Names ending in @deva[अवती] have acute accent on the last syllable. So @deva[अजिरवती꣡], @deva[खदिरवती꣡], @deva[हंसवती꣡] all have final accent.",
            "standard": "This sūtra assigns @deva[अन्तोदात्त] to @deva[संज्ञा] (names) ending in @deva[अवती]. Examples: @deva[अजिरवती꣡], @deva[खदिरवती꣡], @deva[हंसवती꣡], @deva[कारण्डवती꣡]. These feminine place names have final-syllable accent.",
            "advanced": "The @deva[अवत्यन्तानाम् अन्तोदात्तः] assigns final accent to @deva[अवती]-final names. These @deva[मतुप्] + @deva[ङीप्] formations would normally follow @deva[ङीप्] accent; this sūtra overrides to give @deva[अन्तोदात्त]. River/place names: @deva[अजिरवती꣡], @deva[खदिरवती꣡], @deva[हंसवती꣡]. The @deva[अवती] ending (not @deva[आवती]) distinguishes from @ref[6.1.219]."
        }
    },
    "61221": {
        "en": {
            "simple": "Names ending in @deva[ईवती] have acute accent on the last syllable. So @deva[अहीवती꣡], @deva[कृषीवती꣡], @deva[मुनीवती꣡] all have final accent.",
            "standard": "This sūtra assigns @deva[अन्तोदात्त] to @deva[संज्ञा] ending in @deva[ईवती]. Examples: @deva[अहीवती꣡] ('having serpents'), @deva[कृषीवती꣡] ('having farmers'), @deva[मुनीवती꣡] ('having sages'). These feminine names have final-syllable accent.",
            "advanced": "The @deva[ईवत्यन्तानाम् अन्तोदात्तः] parallels @ref[6.1.220] for @deva[ईवती]-final names. The @deva[ई] (from @deva[इन्]-stem feminines) + @deva[वती] creates @deva[ईवती]. Names like @deva[अहीवती꣡], @deva[कृषीवती꣡] take final accent. Together with @ref[6.1.220], these rules govern @deva[वती]-ending place names."
        }
    },
    "61222": {
        "en": {
            "simple": "In compounds ending in @deva[अञ्च्] ('going towards'), the final vowel of the preceding word has acute accent in weak cases where only @deva[च्] of @deva[अञ्च्] remains. So @deva[दधीचः] (from @deva[दधि + अञ्च्]) in weak cases has @deva[द꣡धीचः].",
            "standard": "This sūtra assigns accent to the final vowel of the first compound member in @deva[अञ्च्]-final @deva[समास], specifically in @deva[असर्वनामस्थान] (weak) cases where @deva[अञ्च्] reduces to @deva[च्]. Example: @deva[दधीच] (weak stem) → @deva[द꣡धीचः] with accent on the preceding vowel.",
            "advanced": "The @deva[अञ्च्यन्ते चीवि पूर्वस्य आचः] rule: in @deva[अञ्च्]-final compounds, when @deva[अञ्च्] → @deva[च्] (in @deva[अङ्गकार्य]), the @deva[अच्] (vowel) immediately preceding takes @deva[उदात्त]. Forms like @deva[दधीच] (from @deva[दधि + अञ्च्]) show @deva[द꣡धीचः] in oblique cases. This affects directional compounds in their weak forms."
        }
    },
    "61223": {
        "en": {
            "simple": "A compound word has acute accent on the last syllable. So @deva[राजपुरुषः] ('king's man') is accented @deva[राजपुरुष꣡ः] with final accent. This is the general rule for compound accent.",
            "standard": "This sūtra establishes @deva[अन्तोदात्त] as the default for @deva[समास] (compounds). Examples: @deva[राजपुरुष꣡ः], @deva[ब्राह्मणकम्बल꣡ः], @deva[कन्याखन꣡ः]. The final syllable of the compound takes @deva[उदात्त]. This is the basic compound accent rule, with many exceptions in previous sūtras.",
            "advanced": "The @deva[समासस्य अन्तोदात्तः] is the default compound accent rule, applying when no specific exception applies. All compound types (@deva[तत्पुरुष], @deva[बहुव्रीहि], @deva[द्वन्द्व], @deva[अव्ययीभाव]) default to @deva[अन्तोदात्त]: @deva[राजपुरुष꣡ः], @deva[ब्राह्मणकम्बल꣡ः], @deva[राजदृष꣡त्]. This final sūtra of pāda 6.1 establishes the compound accent baseline that pervades Sanskrit nominal morphology."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.1.211-6.1.223)")
