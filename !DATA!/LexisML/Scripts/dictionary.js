var Dictionary = {
    Requester: new XMLHttpRequest(),
    init: function() {
        Dictionary.lexis = Requester.responseXML;
    },
    lexis: undefined,
    load: function(src) {
        Requester.addEventListener("load", Dictionary.init, false);
        Requester.open("get", src, true);
        Requester.send();
    },
    lemmas: {}
}


