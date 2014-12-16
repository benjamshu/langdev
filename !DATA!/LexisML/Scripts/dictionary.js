/* jslint asi:true, browser:true */
/* global Lexis */

var Dictionary = {
    Requester: new XMLHttpRequest(),
    init: function() {
        var script = document.createElement("script");
        script.src = "http://leaf.faint.xyz/!DATA!/master/!DATA!/LexisML/normalize.js";
        document.head.appendChild(script);
        document.addEventListener("DOMContentLoaded", function() {Dictionary.load(document.documentElement.dataset.src)}, false);
    },
    lexis: undefined,
    load: function(src) {
        Dictionary.Requester.addEventListener("load", Dictionary.setup, false);
        Dictionary.Requester.open("get", src, true);
        Dictionary.Requester.send();
    },
    lemmas: {},
    setup: function() {
        Dictionary.lexis = Dictionary.Requester.responseXML;
        Lexis.normalize(Dictionary.lexis);
    }
}

Dictionary.init();
