/* jslint asi:true, browser:true */

var Dictionary = {
    Requester: new XMLHttpRequest(),
    init: function() {
        Dictionary.lexis = Dictionary.Requester.responseXML;
    },
    lexis: undefined,
    load: function(src) {
        Dictionary.Requester.addEventListener("load", Dictionary.init, false);
        Dictionary.Requester.open("get", src, true);
        Dictionary.Requester.send();
    },
    lemmas: {}
}


