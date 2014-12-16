/* jslint asi:true, browser:true */
/* global Lexis */

var Dictionary = {
    forms: {},
    ids: [],
    init: function() {
        var script = document.createElement("script");
        script.src = "http://leaf.faint.xyz/!DATA!/master/!DATA!/LexisML/normalize.js";
        document.head.appendChild(script);
        document.addEventListener("DOMContentLoaded", function() {Dictionary.load(document.documentElement.dataset.src)}, false);
    },
    lang: "",
    lemmas: {},
    lexis: undefined,
    load: function(src) {
        Dictionary.Requester.addEventListener("load", Dictionary.setup, false);
        Dictionary.Requester.open("get", src, true);
        Dictionary.Requester.send();
    },
    Requester: new XMLHttpRequest(),
    setup: function() {
        Dictionary.lang = document.documentElement.lang;
        Dictionary.lexis = Dictionary.Requester.responseXML;
        Lexis.normalize(Dictionary.lexis);
        var i = 0;
        var j = 0;
        var elements = Dictionary.lexis.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "*")
        var current_element;
        var current_forms;
        var current_meanings;
        var lemma_name;
        var lemma_id;
        var lemma_class;
        var lemma_forms;
        var lemma_meanings;
        for (i = 0; i < elements.length; i++) {
            current_element = elements.item(i);
            lemma_name = current_element.getAttributeNS("http://leaf.faint.xyz/lexisml", "lemma").replace(/[^A-Za-z']/g, "-");
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
                            class: current_forms.item(j).getAttributeByTagNameNS("http://leaf.faint.xyz/lexisml", "class")
                        }
                        if (current_forms.item(j).hasAttributeNS("http://leaf.faint.xyz/lexisml", "class")) lemma_class += current_forms.item(j).getAttributeNS("http://leaf.faint.xyz/lexisml", "class") + " ";
                        lemma_class = lemma_class.trim();
                        if (Dictionary.forms[current_forms.item(j).textContent] === undefined) Dictionary.forms[current_forms.item(j).textContent] = [];
                        Dictionary.forms[current_forms.item(j).textContent][Dictionary.forms[current_forms.item(j).textContent].length] = lemma_id;
                    }
                    for (j = 0; j < current_meanings.length; j++) {
                        lemma_meanings[j] = {
                            content: current_meanings.item(j).textContent,
                            class: current_meanings.item(j).getAttributeByTagNameNS("http://leaf.faint.xyz/lexisml", "class")
                        }
                    }
                    Dictionary.lemmas[lemma_name][Dictionary.lemmas[lemma_name].length] = {
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
    }
}

Dictionary.init();
