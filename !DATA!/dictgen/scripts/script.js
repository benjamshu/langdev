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
                    lemma_name = current_element.getAttribute("lemma").replace(/[0-9:]/g, "-");
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
                            class: current_forms.item(j).getAttribute("class")
                        }
                        if (current_forms.item(j).hasAttribute("class")) lemma_class += current_forms.item(j).getAttribute("class") + " ";
                        lemma_class = lemma_class.trim();
                        if (Dictionary.forms[current_forms.item(j).textContent] === undefined) Dictionary.forms[current_forms.item(j).textContent] = [];
                        Dictionary.forms[current_forms.item(j).textContent][Dictionary.forms[current_forms.item(j).textContent].length] = lemma_id;
                    }
                    for (j = 0; j < current_meanings.length; j++) {
                        lemma_meanings[j] = {
                            content: current_meanings.item(j).textContent,
                            class: current_meanings.item(j).getAttribute("class")
                        }
                    }
                    Dictionary.lemmas[lemma_name][Dictionary.lemmas[lemma_name].length] = {
                        name: current_element.getAttribute("lemma"),
                        id: lemma_id,
                        lang: current_element.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang"),
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
        var main_article = document.createElement("article");
        document.title = Dictionary.title[1];
        document.getElementsByTagName("title").item(0).lang = Dictionary.title[0];
        if (Dictionary.splashes.length) {
            i = Math.floor(Math.random()*Dictionary.splashes.length);
            main_article.innerHTML = "<header id='main-header'><h1 lang='" + Dictionary.title[0] + "'>" + Dictionary.title[1] + "</h1><p id='splash' lang='" + Dictionary.splashes[i][0] + "'>" + Dictionary.splashes[i][1] + "</p></header>";
        }
        else main_article.innerHTML = "<header><h1 lang='" + Dictionary.title[0] + "'>" + Dictionary.title[1] + "</h1></header>";
        for (i = 0; i < Dictionary.ids.length; i++) {
            current_element = document.createElement("article");
            current_lemma = Dictionary.getLemmaFromId(Dictionary.ids[i]);
            current_element.lang = current_lemma.lang;
            current_element.id = Dictionary.ids[i];
            article_html = "";
            article_html += "<header>"
            article_html += "<h2><a href='#" + Dictionary.ids[i] + "'>" + current_lemma.name + "</a></h2>"
            article_html += "</header>"
            current_element.innerHTML = article_html;
            main_article.appendChild(current_element);
        }
        document.body.appendChild(main_article);
    },
    splashes: [],
    title: "",
    title_lang: ""
}

window.addEventListener("load", Dictionary.init, false);
