/* jslint asi:true, browser:true */

if (typeof Lexis == "undefined") var Lexis = {};

var Dictionary = {
    forms: {},
    getHumanReadableWordClass: function(word_class) {
        if (!word_class) word_class = "";
        var class_list = word_class.split(" ");
        var class_item_list = null;
        var i = 0;
        var j = 0;
        var s = "";
        var q = null;
        for (i = 0; i < class_list.length; i++) {
            if (i) s += ", ";
            class_item_list = class_list[i].split(".");
            q = {};
            for (j = 0; j < class_item_list.length; j++) {
                q[class_item_list[j]] = true;
            }

            if (q.pfv) s += "perfective ";
            if (q.prog) s += "progressive ";
            if (q.cont) s += "continuous ";
            if (q["1"]) s += "first-person ";
            if (q["2"]) s += "second-person ";
            if (q["3"]) s += "third-person ";
            if (q.mod) {
                if (q.mir) s += "mirative ";
                else if (q.opt) s += "optative ";
                else if (q.hort) s += "hortative ";
                else if (q.perm) s += "permissive ";
                else if (q.jus) s += "jussive ";
                else if (q.int) s += "interrogative ";
                else s += "modal ";
            }
            if (q.det) {
                if (q.qnt) s += "quantifier ";
                else if (q.num) s += "numeral ";
                else if (q.dem) s += "demonstrative ";
                else s += "determiner";
            }
            if (q.post) s += "post-position";
            if (q.ptcl) s += "particle ";
            if (q.adj) s += "adjective ";
            if (q.adv) s += "adverb ";
            if (q.pron) s += "pronoun ";
            if (q.n) s += "noun ";
            if (q.v) s += "verb ";
            s.trim();
        }
        return s;
    },
    getLemmaFromId: function(id) {
        return Dictionary.lemmas[id.split(":")[0]][Number(id.split(":")[1])]
    },
    ids: [],
    init: function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.addEventListener("load", function() {Dictionary.load(document.documentElement.dataset.src + "?" + new Date().getTime())}, false);
        document.head.appendChild(script);
        script.src = "http://leaf.faint.xyz/langdev/!DATA!/master/!DATA!/LexisML/scripts/normalize.js";
    },
    lang: "",
    lemmas: {},
    lexis: undefined,
    load: function(src) {
        Dictionary.Requester.addEventListener("load", Dictionary.setup, false);
        Dictionary.Requester.open("get", src, true);
        Dictionary.Requester.overrideMimeType("text/xml");
        Dictionary.Requester.send();
    },
    Requester: new XMLHttpRequest(),
    setup: function() {
        Dictionary.lang = document.documentElement.lang;
        Dictionary.lexis = Dictionary.Requester.responseXML;
        Lexis.normalize(Dictionary.lexis);
        var i = 0;
        var j = 0;
        var elements = Dictionary.lexis.documentElement.children;
        var current_element;
        var current_lemma;
        var lemma_name;
        var lemma_id;
        var section_html;
        for (i = 0; i < elements.length; i++) {
            current_element = elements.item(i);
            switch (current_element.tagName) {
                case "meta":
                    switch (current_element.getAttribute("name")) {
                        case "title":
                            Dictionary.title = [current_element.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang"), current_element.textContent];
                            break;
                        case "splash":
                            Dictionary.splashes[Dictionary.splashes.length] = [current_element.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang"), current_element.textContent];
                            break;
                    }
                    break;
                case "affix":
                case "word":
                    lemma_name = current_element.getAttribute("lemma").replace(/:/g, "-").replace(/^-+|[0-9]+$/g, "");
                    if (Dictionary.lemmas[lemma_name] === undefined) Dictionary.lemmas[lemma_name] = [];
                    lemma_id = lemma_name + ":" + Dictionary.lemmas[lemma_name].length;
                    current_lemma = Dictionary.lemmas[lemma_name][Dictionary.lemmas[lemma_name].length] = {
                        type: current_element.tagName,
                        name: current_element.getAttribute("lemma"),
                        id: lemma_id,
                        word_class: null,
                        lang: current_element.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang"),
                        forms: current_element.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "form"),
                        etymology: current_element.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "etymology").item(0),
                        meanings: current_element.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "meaning")
                    }
                    for (j = 0; j < current_lemma.forms.length; j++) {
                        if (current_lemma.forms.item(j).textContent == current_lemma.name) {
                            current_lemma.word_class = current_lemma.forms.item(j).getAttribute("class");
                            break;
                        }
                    }
                    Dictionary.ids[Dictionary.ids.length] = lemma_id;
                    break;
            }
        }
        Dictionary.ids.sort(function (a, b) {return String(a).localeCompare(String(b));});
        var main_article = document.createElement("article");
        document.title = Dictionary.title[1];
        document.getElementsByTagName("title").item(0).lang = Dictionary.title[0];
        if (Dictionary.splashes.length) {
            i = Math.floor(Math.random()*Dictionary.splashes.length);
            main_article.innerHTML = "<header id='main-header'><h1 lang='" + Dictionary.title[0] + "'>" + Dictionary.title[1] + "</h1><p id='splash' lang='" + Dictionary.splashes[i][0] + "'>" + Dictionary.splashes[i][1] + "</p></header>";
        }
        else main_article.innerHTML = "<header><h1 lang='" + Dictionary.title[0] + "'>" + Dictionary.title[1] + "</h1></header>";
        for (i = 0; i < Dictionary.ids.length; i++) {
            current_element = document.createElement("section");
            current_lemma = Dictionary.getLemmaFromId(Dictionary.ids[i]);
            current_element.lang = current_lemma.lang;
            current_element.id = Dictionary.ids[i];
            section_html = "<header>";
            section_html += "<h2><a href='#" + Dictionary.ids[i] + "'><dfn>" + current_lemma.name + "</dfn></a></h2>";
            if (current_lemma.type == "word") {
                if (current_lemma.word_class) {
                    section_html += "<p>" + Dictionary.getHumanReadableWordClass(current_lemma.word_class) + "</p>";
                }
                section_html += "<p>";
                for (j = 0; j < current_lemma.forms.length; j++) {
                    if (current_lemma.forms.item(j).textContent != current_lemma.name) section_html += Dictionary.getHumanReadableWordClass(current_lemma.forms.item(j).getAttribute("class")) + " : <b>" + current_lemma.forms.item(j).textContent + "</b>";
                    if (j + 1 != current_lemma.forms.length) section_html += " ";
                }
                section_html += "</p>"
            }
            else if (current_lemma.type == "affix") {
                section_html += "<p>affix</p>";
            }
            section_html += "</header>";
            if (current_lemma.meanings.length > 1) {
                section_html += "<ul>";
                for (j = 0; j < current_lemma.meanings.length; j++) {
                    section_html += "<li>";
                    if (current_lemma.meanings.item(j).getAttribute("class") != current_lemma.word_class) section_html += "<small>(" + Dictionary.getHumanReadableWordClass(current_lemma.meanings.item(j).getAttribute("class")) + ")</small> ";
                    section_html += current_lemma.meanings.item(j).textContent;
                    section_html += "</li>";
                }
                section_html += "</ul>";
            }
            else if (current_lemma.meanings.length == 1) {
                section_html += "<p>";
                if (current_lemma.meanings.item(0).getAttribute("class") != current_lemma.word_class) section_html += "<small>(" + Dictionary.getHumanReadableWordClass(current_lemma.meanings.item(0).getAttribute("class")) + ")</small> ";
                section_html += current_lemma.meanings.item(0).textContent;
                section_html += "</p>";
            }
            if (current_lemma.etymology) section_html += "<h3>etymology</h3><p>" + current_lemma.etymology.textContent + "</p>";
            current_element.innerHTML = section_html;
            main_article.appendChild(current_element);
        }
        document.body.textContent = null;
        document.body.appendChild(document.createElement("main").appendChild(main_article).parentElement);
    },
    splashes: [],
    title: "",
    title_lang: ""
}

window.addEventListener("load", Dictionary.init, false);
