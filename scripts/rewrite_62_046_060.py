#!/usr/bin/env python3
"""Rewrite commentary for 6.2.46-60 (kta-participle compounds, gati accent, optional rules)."""

import json

with open('static/data/layered_commentary.json', 'r', encoding='utf-8') as f:
    commentary = json.load(f)

updates = {
    "62046": {
        "en": {
            "simple": "In a @deva[कर्मधारय] compound, a first member that is NOT itself a @deva[क्त]-participle keeps its accent before a @deva[क्त]-participle. So @deva[प्रिय꣡प्राप्तः] ('dear one obtained') has first-member accent, but not @deva[गतप्राप्तः] (both are participles).",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] in @deva[कर्मधारय] when a non-@deva[क्त] word precedes a @deva[क्त]-participle. Examples: @deva[प्रिय꣡प्राप्तः] ('obtained dear one'), @deva[नव꣡जातः] ('newly born'). When both members are @deva[क्त], different accent applies.",
            "advanced": "The @deva[कर्मधारये अनिष्ठायाः क्ते] condition: @deva[कर्मधारय] with non-@deva[निष्ठा] (non-@deva[क्त/क्तवतु]) @deva[पूर्वपद] + @deva[क्त] @deva[उत्तरपद] preserves @deva[प्रकृतिस्वर]. @deva[प्रिय꣡प्राप्त], @deva[नव꣡जात] show the pattern. When @deva[पूर्वपद] is also @deva[निष्ठा], @ref[6.1.223]'s @deva[अन्तोदात्त] applies."
        }
    },
    "62047": {
        "en": {
            "simple": "A word in accusative case (2nd) keeps its accent before a @deva[क्त]-participle when it doesn't mean separation. So @deva[कष्ट꣡श्रितः] ('gone to difficulty'), @deva[त्रिशकल꣡पतितः] ('fallen into three pieces').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[द्वितीया]-sense @deva[पूर्वपद] before @deva[क्त], excluding @deva[अपादान] (separation). Examples: @deva[कष्ट꣡श्रितः] ('resorted to hardship'), @deva[त्रिशकल꣡पतितः] ('fallen in three pieces'). Separation-meaning compounds differ.",
            "advanced": "The @deva[द्वितीयायाः अनपादाने क्ते] condition: @deva[द्वितीया] (accusative) relationship without @deva[अपादान] (ablative/separation sense) + @deva[क्त]. @deva[कष्ट꣡श्रित] ('gone TO hardship'), @deva[त्रिशकल꣡पतित] ('fallen INTO three'). The @deva[अनपादान] restriction removes separation-meaning compounds from this rule."
        }
    },
    "62048": {
        "en": {
            "simple": "A word in instrumental case (3rd) keeps its accent before a @deva[क्त]-participle when the @deva[क्त] has passive meaning. So @deva[अहि꣡हतः] ('killed by a snake') or @deva[रुद्र꣡हतः] ('killed by Rudra').",
            "standard": "This sūtra provides @deva[पूर्वपद प्रकृतिस्वर] for @deva[तृतीया]-sense @deva[पूर्वपद] before @deva[क्त] with @deva[कर्मणि] (passive) meaning. Examples: @deva[अहि꣡हतः] ('snake-killed'), @deva[रुद्र꣡हतः] ('Rudra-slain'). The instrumental indicates the agent in passive construction.",
            "advanced": "The @deva[तृतीयायाः कर्मणि क्ते] condition: @deva[तृतीया] (instrumental = agent) + @deva[क्त] in @deva[कर्मणि] (passive voice). @deva[अहि꣡हत] ('killed BY snake'), @deva[रुद्र꣡हत] ('struck BY Rudra'). The passive construction with instrumental agent preserves @deva[पूर्वपद स्वर]. Active-meaning @deva[क्त] compounds differ."
        }
    },
    "62049": {
        "en": {
            "simple": "A @deva[गति] word (preverb like @deva[प्र], @deva[परा], etc. per @ref[1.4.60]) keeps its accent immediately before a @deva[क्त]-participle with passive meaning. So @deva[प्र꣡कृतः] ('done forth'), @deva[परा꣡कृतः] ('rejected').",
            "standard": "This sūtra provides @deva[प्रकृतिस्वर] for @deva[गति] (@ref[1.4.60]) immediately preceding a passive @deva[क्त]. Examples: @deva[प्र꣡कृतः] ('produced/prominent'), @deva[परा꣡कृतः] ('pushed aside'). The @deva[गति] retains its inherent accent.",
            "advanced": "The @deva[गतिः कर्मणि क्ते] condition: @deva[गति]-class words (@ref[1.4.60]) directly before @deva[कर्मणि क्त] preserve @deva[प्रकृतिस्वर]. @deva[प्र꣡कृत], @deva[परा꣡कृत], @deva[वि꣡हित] show the pattern. The @deva[गति] must be @deva[साक्षात्] (immediate) before @deva[क्त]; intervening elements block this."
        }
    },
    "62050": {
        "en": {
            "simple": "A @deva[गति] word keeps its accent immediately before a @deva[कृत्] affix that begins with @deva[त्] and has indicatory @deva[न्] but not @deva[ञ्]. So @deva[प्र꣡स्थान] ('departure'), @deva[प्र꣡दान] ('giving').",
            "standard": "This sūtra provides @deva[प्रकृतिस्वर] for @deva[गति] before @deva[तादि नित् अञ्ञित्] @deva[कृत्] affixes. These are @deva[त्]-initial affixes with @deva[न्] marker but not @deva[ञ्]. Examples: @deva[प्र꣡स्थान] ('setting out'), @deva[प्र꣡दान] ('giving forth').",
            "advanced": "The @deva[साक्षात् तादौ नित्यञ्ञिति कृति] condition: @deva[गति] immediately + @deva[कृत्] that is @deva[तादि] (त्-initial), @deva[नित्] (has न् marker), but @deva[अञ्ञित्] (lacks ञ्). Affixes like @deva[ल्युट्] (→ @deva[अन]) qualify: @deva[प्र꣡स्थान], @deva[प्र꣡दान]. The @deva[गति] preserves @deva[प्रकृतिस्वर]."
        }
    },
    "62051": {
        "en": {
            "simple": "A @deva[गति] word keeps its accent immediately before the Vedic infinitive ending @deva[तवै], but only when the @deva[गति] doesn't end in @deva[अ]. So @deva[प्रकर्तवै] but with different accent based on @deva[गति] form.",
            "standard": "This sūtra provides @deva[प्रकृतिस्वर] for @deva[गति] before @deva[तवै] infinitive (@ref[3.4.14]), but the @deva[गति] must not end in @deva[अ]. The condition @deva[अनकारस्य] excludes @deva[अ]-final @deva[गति] forms from preserving accent here.",
            "advanced": "The @deva[साक्षात् तवै अनकारस्य] condition: @deva[गति] immediately before @deva[तवै] (Vedic infinitive) when @deva[गति] is @deva[अनकार] (not @deva[अ]-final). @deva[गति] forms like @deva[प्र], @deva[परा] (ending in @deva[आ]) qualify; forms with @deva[अ]-sandhi don't. This affects Vedic infinitive accent."
        }
    },
    "62052": {
        "en": {
            "simple": "A @deva[गति] word not ending in @deva[इ] or @deva[उ] keeps its accent immediately before a form with @deva[व्]-affix (like @deva[अञ्च्]-derivatives). So @deva[प्रा꣡ङ्] ('forward-facing'), @deva[प्र꣡त्यङ्] ('backward-facing').",
            "standard": "This sūtra provides @deva[प्रकृतिस्वर] for @deva[गति] (not @deva[इ/उ]-final) before @deva[व्]-affix forms. These include @deva[अञ्च्] + @deva[क्विन्] → directional words. Examples: @deva[प्रा꣡ङ्] ('eastward'), @deva[प्र꣡त्यङ्] ('westward'). The @deva[अनिकुचः] excludes @deva[इ/उ]-final @deva[गति].",
            "advanced": "The @deva[साक्षात् वित्यनिकुचः] condition: @deva[गति] (not ending in @deva[इक्] = @deva[इ उ ऋ ऌ], specifically @deva[इ/उ] here) immediately before @deva[वित्] (@deva[व्]-marked) affixes. @deva[प्र + अञ्च् + क्विन्] → @deva[प्रा꣡ञ्च्] → @deva[प्रा꣡ङ्]. The @deva[गति] preserves accent. @deva[नि/अधि] (इ-final) are handled separately."
        }
    },
    "62053": {
        "en": {
            "simple": "The @deva[गति] words @deva[नि] and @deva[अधि] (which end in @deva[इ]) DO keep their accent before @deva[अञ्च्] with @deva[व्]-affix. So @deva[न्य꣡ङ्] ('downward'), @deva[अध्य꣡ञ्च्] ('upward').",
            "standard": "This sūtra creates an exception to @ref[6.2.52]: @deva[नि] and @deva[अधि] preserve @deva[प्रकृतिस्वर] before @deva[अञ्च्] + @deva[वित्], despite being @deva[इ]-final. Examples: @deva[न्य꣡ङ्] ('downward-facing'), @deva[अध्य꣡ञ्च्] ('upward').",
            "advanced": "The @deva[न्यधिभ्यामञ्चेः वौ] exception: @deva[नि] and @deva[अधि] (both @deva[इ]-final) preserve @deva[प्रकृतिस्वर] before @deva[अञ्च्] + @deva[क्विन्] (व्-marked). This overrides @ref[6.2.52]'s @deva[अनिकुचः]. @deva[नि + अञ्च्] → @deva[न्य꣡ञ्च्] → @deva[न्य꣡ङ्]; @deva[अधि + अञ्च्] → @deva[अध्य꣡ञ्च्]. Special treatment for these two @deva[गति]."
        }
    },
    "62054": {
        "en": {
            "simple": "The word @deva[ईषत्] ('slightly') as first member may optionally keep its accent. So @deva[ईषत्कडारः] ('slightly brown') can be @deva[ईष꣡त्कडारः] or @deva[ईषत्कडार꣡ः].",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for @deva[ईषत्] as @deva[पूर्वपद]. Either @deva[ईष꣡त्कडारः] (first-member accent) or @deva[ईषत्कडार꣡ः] (final accent) is valid. Similarly @deva[ईष꣡त्पिङ्गलः/ईषत्पिङ्गल꣡ः] ('slightly tawny').",
            "advanced": "The @deva[ईषदर्थे वा] provides @deva[विभाषा] for @deva[ईषत्] ('slightly/somewhat'). The @deva[ईषत्] + adjective compounds show optional first-member accent: @deva[ईष꣡त्कडार/ईषत्कडार꣡]. This optionality reflects the adverbial nature of @deva[ईषत्] in compounds."
        }
    },
    "62055": {
        "en": {
            "simple": "A first member denoting quantity of gold optionally keeps its accent before @deva[धन] ('wealth'). So @deva[द्विसुवर्णधनम्] ('two-gold-pieces worth') can be @deva[द्विसुवर्ण꣡धनम्] or @deva[द्विसुवर्णधन꣡म्].",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for gold-quantity words before @deva[धन]. In @deva[कर्मधारय], @deva[द्विसुवर्ण꣡धनम्] or @deva[द्विसुवर्णधन꣡म्] ('wealth of two gold pieces') are both valid. The gold-measure + wealth combination allows optional accent.",
            "advanced": "The @deva[सौवर्णपरिमाणस्य धने वा] condition: @deva[सौवर्णपरिमाण] (gold-quantity measure) as @deva[पूर्वपद] + @deva[धन] shows @deva[विभाषा]. @deva[द्विसुवर्ण꣡धन/द्विसुवर्णधन꣡]. This is a @deva[कर्मधारय] where the gold-amount qualifies wealth-value."
        }
    },
    "62056": {
        "en": {
            "simple": "The word @deva[प्रथम] ('first/novice') as first member optionally keeps its accent when meaning 'beginner'. So @deva[प्रथमवैयाकरणः] ('beginning grammarian') can have either accent pattern.",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for @deva[प्रथम] meaning 'novice/beginner'. @deva[प्रथम꣡वैयाकरणः] or @deva[प्रथमवैयाकरण꣡ः] ('one just starting to study grammar'). The @deva[अभ्यर्हित] ('novice') sense allows optionality.",
            "advanced": "The @deva[प्रथमस्य अभ्यर्हिते वा] condition: @deva[प्रथम] in @deva[अभ्यर्हित] sense ('novice', one who has just started) shows @deva[विभाषा]. @deva[संप्रति व्याकरणम् अध्येतुं प्रवृत्तः] = @deva[प्रथमवैयाकरण] ('recently begun studying grammar'). The novice meaning triggers optional accent."
        }
    },
    "62057": {
        "en": {
            "simple": "The words @deva[कतर] ('which of two') and @deva[कतम] ('which of many') as first members in @deva[कर्मधारय] optionally keep their accent. So @deva[कतरकठः] can be @deva[कतर꣡कठः] or @deva[कतरकठ꣡ः].",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for @deva[कतर/कतम] in @deva[कर्मधारय]. Examples: @deva[कतर꣡कठः/कतरकठ꣡ः] ('which @deva[कठ]?'), @deva[कतम꣡कठः/कतमकठ꣡ः]. The interrogative-qualifiers show optional accent.",
            "advanced": "The @deva[कतरकतमौ कर्मधारये वा] provides @deva[विभाषा] for @deva[कतर] ('which of two') and @deva[कतम] ('which of many') in @deva[कर्मधारय]. @deva[कतर꣡कठ/कतरकठ꣡], @deva[कतम꣡कठ/कतमकठ꣡]. These interrogative adjectives show accent optionality in appositional compounds."
        }
    },
    "62058": {
        "en": {
            "simple": "The word @deva[आर्य] ('noble') optionally keeps its accent in @deva[कर्मधारय] before @deva[ब्राह्मण] or @deva[कुमार]. So @deva[आर्यब्राह्मणः] can be @deva[आर्य꣡ब्राह्मणः] or @deva[आर्यब्राह्मण꣡ः].",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for @deva[आर्य] before @deva[ब्राह्मण/कुमार] in @deva[कर्मधारय]. Examples: @deva[आर्य꣡ब्राह्मणः/आर्यब्राह्मण꣡ः] ('noble brahmin'), @deva[आर्य꣡कुमारः/आर्यकुमार꣡ः] ('noble youth').",
            "advanced": "The @deva[आर्यस्य ब्राह्मणकुमारयोः कर्मधारये वा] provides @deva[विभाषा] for @deva[आर्य] + @deva[ब्राह्मण/कुमार]. These specific combinations allow optional first-member accent: @deva[आर्य꣡ब्राह्मण/आर्यब्राह्मण꣡], @deva[आर्य꣡कुमार/आर्यकुमार꣡]. The @deva[आर्य] ('noble/respectable') qualifier shows accent flexibility."
        }
    },
    "62059": {
        "en": {
            "simple": "The word @deva[राजन्] ('king') optionally keeps its accent in @deva[कर्मधारय] before @deva[ब्राह्मण] or @deva[कुमार]. So @deva[राजब्राह्मणः] can be @deva[राज꣡ब्राह्मणः] or @deva[राजब्राह्मण꣡ः].",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for @deva[राजन्] before @deva[ब्राह्मण/कुमार] in @deva[कर्मधारय]. Examples: @deva[राज꣡ब्राह्मणः/राजब्राह्मण꣡ः] ('royal brahmin'), @deva[राज꣡कुमारः/राजकुमार꣡ः] ('prince').",
            "advanced": "The @deva[राज्ञः] provides @deva[विभाषा] for @deva[राजन्] + @deva[ब्राह्मण/कुमार] (continuing from @ref[6.2.58]). @deva[राज꣡ब्राह्मण/राजब्राह्मण꣡] ('brahmin serving king'), @deva[राज꣡कुमार/राजकुमार꣡] ('king's son/prince'). The title @deva[राजन्] shows accent optionality with these specific nouns."
        }
    },
    "62060": {
        "en": {
            "simple": "The word @deva[राजन्] in genitive case optionally keeps its accent before @deva[प्रत्येनस्] ('guilty'). So @deva[राजप्रत्येनाः] can be @deva[राज꣡प्रत्येनाः] or @deva[राजप्रत्येना꣡ः].",
            "standard": "This sūtra provides optional @deva[प्रकृतिस्वर] for @deva[षष्ठी]-sense @deva[राजन्] before @deva[प्रत्येनस्]. Example: @deva[राज꣡प्रत्येनाः/राजप्रत्येना꣡ः] ('guilty against the king'). The genitive relationship (guilt toward king) shows optional accent.",
            "advanced": "The @deva[षष्ठ्याः प्रत्येनसि वा] continues with @deva[राजन्]: @deva[षष्ठी]-sense @deva[राजन्] + @deva[प्रत्येनस्] shows @deva[विभाषा]. @deva[राज꣡प्रत्येनस्/राजप्रत्येनस्꣡] ('one guilty of offense against king'). The @deva[प्रत्येनस्] ('having sin/guilt') with genitive completes this accent-optional pattern."
        }
    }
}

for sutra_id, content in updates.items():
    commentary[sutra_id] = content

with open('static/data/layered_commentary.json', 'w', encoding='utf-8') as f:
    json.dump(commentary, f, ensure_ascii=False, indent=2)

print(f"Updated {len(updates)} sūtras (6.2.46-6.2.60)")
