/* jslint asi:true, browser:true */

if (typeof Lexis == "undefined") var Lexis = {};

var Dictionary = {
    forms: {},
    getLemmaFromId: function(id) {
        return Dictionary.lemmas[id.split(":")[0]][Number(id.split(":")[1])]
    },
    ids: [],
    init: function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.addEventListener("load", function() {Dictionary.load(document.documentElement.dataset.src)}, false);
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
        var current_forms;
        var current_meanings;
        var current_lemma;
        var lemma_name;
        var lemma_id;
        var lemma_class;
        var lemma_forms;
        var lemma_meanings;
        var article_html;
        for (i = 0; i < elements.length; i++) {
            current_element = elements.item(i);
            lemma_name = current_element.getAttributeNS("http://leaf.faint.xyz/lexisml", "lemma").replace(/[0-9:]/g, "-");
            switch (current_element.tagName) {
                case "affix":
                case "word":
                    current_forms = current_element.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "form");
                    current_meanings = current_element.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "meaning");
                    if (Dictionary.lemmas[lemma_name] === undefined) Dictionary.lemmas[lemma_name] = [];
                    lemma_id = lemma_name + ":" + Dictionary.lemmas[lemma_name].length;
                    lemma_class = "";
                    lemma_forms = [];
                    lemma_meanings = [];
                    for (j = 0; j < current_forms.length; j++) {
                        lemma_forms[j] = {
                            name: current_forms.item(j).textContent,
                            class: current_forms.item(j).getAttributeNS("http://leaf.faint.xyz/lexisml", "class")
                        }
                        if (current_forms.item(j).hasAttributeNS("http://leaf.faint.xyz/lexisml", "class")) lemma_class += current_forms.item(j).getAttributeNS("http://leaf.faint.xyz/lexisml", "class") + " ";
                        lemma_class = lemma_class.trim();
                        if (Dictionary.forms[current_forms.item(j).textContent] === undefined) Dictionary.forms[current_forms.item(j).textContent] = [];
                        Dictionary.forms[current_forms.item(j).textContent][Dictionary.forms[current_forms.item(j).textContent].length] = lemma_id;
                    }
                    for (j = 0; j < current_meanings.length; j++) {
                        lemma_meanings[j] = {
                            content: current_meanings.item(j).textContent,
                            class: current_meanings.item(j).getAttributeNS("http://leaf.faint.xyz/lexisml", "class")
                        }
                    }
                    Dictionary.lemmas[lemma_name][Dictionary.lemmas[lemma_name].length] = {
                        name: lemma_name,
                        id: lemma_id,
                        class: lemma_class,
                        forms: lemma_forms,
                        etymology: current_element.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "etymology").item(0),
                        meaning: lemma_meanings
                    }
                    Dictionary.ids[Dictionary.ids.length] = lemma_id;
                    break;
            }
        }
        Dictionary.ids.sort(function (a, b) {return String(a).localeCompare(String(b));});
        document.body.textContent = null;
        for (i = 0; i < Dictionary.ids.length; i++) {
            article_html = "";
            current_element = document.createElement("article");
            current_element.lang = Dictionary.lexis.documentElement.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang");
            current_element.id = Dictionary.ids[i];
            current_lemma = Dictionary.getLemmaFromId(Dictionary.ids[i]);
            article_html += "<header>"
            article_html += "<h1>" + current_lemma.name + "</h1>"
            article_html += "</header>"
            current_element.innerHTML = article_html;
            document.body.appendChild(current_element);
        }
    }
}

window.addEventListener("load", Dictionary.init, false);
