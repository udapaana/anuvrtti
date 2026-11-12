//! anuvrtti-cheda: a line-oriented JSON front end to vidyut-cheda + vidyut-kosha.
//! Build-time only (scripts/analyze-text.ts drives it); never shipped.
//!
//!   anuvrtti-cheda <vidyut-data-dir>
//!
//! stdin, one JSON object per line:
//!   {"text": "<Devanagari or SLP1 saṃhitā>"}   segment, then list every kosha
//!                                               analysis of each segment
//!   {"word": "<one pada>"}                       kosha lookup only, no segmenting
//! stdout, one JSON object per line: {"tokens": [{text, chosen, pick, alts}]}.
//! `pick` is cheda's own analysis, `chosen` its index in `alts` (or null);
//! `alts` is every analysis the kosha holds for that surface form.
use serde_json::{json, Value};
use std::io::{self, BufRead, Write};
use vidyut_cheda::Chedaka;
use vidyut_kosha::entries::{PadaEntry, PratipadikaEntry, TinantaEntry};
use vidyut_lipi::{Lipika, Scheme};
use vidyut_prakriya::args::{Dhatu, DhatuPada, Tinanta};
use vidyut_prakriya::Vyakarana;

fn dhatu_json(d: &Dhatu) -> Value {
    json!({
        "aupadeshika": d.aupadeshika(),
        "gana": d.gana().map(|g| g.as_str()),
        "prefixes": d.prefixes(),
        "sanadi": d.sanadi().iter().map(|s| s.as_str()).collect::<Vec<_>>(),
    })
}

fn prati_json(p: &PratipadikaEntry) -> Value {
    match p {
        PratipadikaEntry::Basic(b) => json!({
            "kind": "basic", "lemma": p.lemma(), "avyaya": p.is_avyaya(),
            "lingas": b.lingas().iter().map(|l| l.as_str()).collect::<Vec<_>>(),
        }),
        PratipadikaEntry::Krdanta(k) => json!({
            "kind": "krdanta", "lemma": p.lemma(), "avyaya": p.is_avyaya(),
            "krt": k.krt().as_str(),
            "prayoga": k.prayoga().map(|x| x.as_str()),
            "lakara": k.lakara().map(|x| x.as_str()),
            "dhatu": dhatu_json(k.dhatu()),
        }),
    }
}

/// The kosha does not record parasmai/ātmane; re-derive with each pada forced
/// and keep the ones that produce this exact surface form.
fn tin_pada(v: &Vyakarana, e: &TinantaEntry, form: &str) -> Vec<&'static str> {
    let mut out = vec![];
    for (pada, name) in [(DhatuPada::Parasmaipada, "P"), (DhatuPada::Atmanepada, "A")] {
        let t = Tinanta::builder()
            .dhatu(e.dhatu().clone())
            .prayoga(e.prayoga())
            .lakara(e.lakara())
            .purusha(e.purusha())
            .vacana(e.vacana())
            .pada(pada)
            .build();
        if let Ok(t) = t {
            if v.derive_tinantas(&t).iter().any(|p| same_final(&p.text(), form)) {
                out.push(name);
            }
        }
    }
    out
}

/// cheda and the kosha spell a pausal visarga as s (gacCatas); the derivation as H.
fn same_final(derived: &str, form: &str) -> bool {
    derived == form || (derived.ends_with('H') && form.ends_with('s') && derived[..derived.len() - 1] == form[..form.len() - 1])
}

fn entry_json(v: &Vyakarana, e: &PadaEntry, form: &str) -> Value {
    match e {
        PadaEntry::Subanta(s) => {
            let p = s.pratipadika_entry();
            if s.is_avyaya() {
                json!({"type": "avyaya", "lemma": p.lemma(), "stem": prati_json(p)})
            } else {
                json!({
                    "type": "subanta", "lemma": p.lemma(), "stem": prati_json(p),
                    "linga": s.linga().as_str(), "vibhakti": s.vibhakti().as_str(),
                    "vacana": s.vacana().as_str(),
                })
            }
        }
        PadaEntry::Tinanta(t) => json!({
            "type": "tinanta", "lemma": t.dhatu_text(), "dhatu": dhatu_json(t.dhatu()),
            "prayoga": t.prayoga().as_str(), "lakara": t.lakara().as_str(),
            "purusha": t.purusha().as_str(), "vacana": t.vacana().as_str(),
            "pada": tin_pada(v, t, form),
        }),
    }
}

fn main() {
    let dir = std::env::args().nth(1).expect("usage: anuvrtti-cheda <vidyut-data-dir>");
    let chedaka = Chedaka::new(std::path::Path::new(&dir)).expect("load vidyut data");
    let kosha = chedaka.kosha();
    let v = Vyakarana::builder().log_steps(false).build();
    let mut lipika = Lipika::new();
    let stdin = io::stdin();
    let mut out = io::BufWriter::new(io::stdout());
    for line in stdin.lock().lines() {
        let line = line.unwrap();
        if line.trim().is_empty() {
            continue;
        }
        let req: Value = serde_json::from_str(&line).unwrap_or(json!({}));
        let mut to_slp = |s: &str| {
            if s.is_ascii() {
                s.to_string()
            } else {
                lipika.transliterate(s, Scheme::Devanagari, Scheme::Slp1)
            }
        };
        let mut tokens = vec![];
        if let Some(w) = req.get("word").and_then(|x| x.as_str()) {
            let w = to_slp(w);
            let alts: Vec<Value> = kosha.get_all(&w).iter().map(|e| entry_json(&v, e, &w)).collect();
            tokens.push(json!({"text": w, "chosen": null, "pick": null, "alts": alts}));
        } else if let Some(t) = req.get("text").and_then(|x| x.as_str()) {
            let t = to_slp(t);
            match chedaka.run(&t) {
                Ok(toks) => {
                    for tok in toks {
                        let text = tok.text().to_string();
                        let all = kosha.get_all(&text);
                        let chosen = tok.data().as_ref().and_then(|d| all.iter().position(|a| a == d));
                        let alts: Vec<Value> = all.iter().map(|e| entry_json(&v, e, &text)).collect();
                        let pick = tok.data().as_ref().map(|d| entry_json(&v, d, &text));
                        tokens.push(json!({"text": text, "chosen": chosen, "pick": pick, "alts": alts}));
                    }
                }
                Err(e) => {
                    writeln!(out, "{}", json!({"error": e.to_string(), "tokens": []})).unwrap();
                    out.flush().unwrap();
                    continue;
                }
            }
        }
        writeln!(out, "{}", json!({"tokens": tokens})).unwrap();
        out.flush().unwrap();
    }
}
