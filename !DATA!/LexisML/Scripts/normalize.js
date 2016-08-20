if (Lexis === undefined) var Lexis = {};

Lexis.normalize = function(lexis_document) {
    var words = lexis_document.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "word");
    for (var i = 0; i < words.length; i++) {
        if (!words.item(i).hasAttributeNS("http://leaf.faint.xyz/lexisml", "lemma")) {
            var forms = words.item(i).getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "form");
            if (forms.length) words.item(i).setAttributeNS("http://leaf.faint.xyz/lexisml", "lemma", forms.item(0).textContent);
            else words.item(i).setAttributeNS("http://leaf.faint.xyz/lexisml", "lemma", "");
        }
    }
};
