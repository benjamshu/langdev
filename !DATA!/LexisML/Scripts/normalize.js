/* jslint asi:true, browser:true */

if (Lexis === undefined) var Lexis = {};

Lexis.normalize = function(lexis_document) {
    var words = lexis_document.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "word");
    var metas = lexis_document.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "meta");
    var iterator = lexis_document.createNodeIterator(lexis_document.documentElement, NodeFilter.SHOW_ELEMENT, null);
    var i;
    if (words.length) {
        for (i = 0; i < metas.length; i++) {
            lexis_document.documentElement.insertBefore(metas.item(i), words.item(0));
        }
    }
    var current_node;
    while (current_node = iterator.nextNode()) {  // jshint ignore:line
        switch (current_node.tagName) {
            case "word":
            case "affix":
                if (!current_node.hasAttributeNS("http://leaf.faint.xyz/lexisml", "lemma")) {
                    var forms = current_node.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "form");
                    if (forms.length) current_node.setAttributeNS("http://leaf.faint.xyz/lexisml", "lemma", forms.item(0).textContent);
                    else current_node.setAttributeNS("http://leaf.faint.xyz/lexisml", "lemma", "");
                }
                /* falls through */
            case "lexis":
                for (i = current_node.childNodes.length - 1; i >= 0; i--) {
                    if (current_node.childNodes.item(i).nodeType !== Node.ELEMENT_NODE) current_node.removeChild(current_node.childNodes.item(i));
                }
                break;
            case "meta":
                while (current_node.firstChild) {
                    current_node.removeChild(current_node.firstChild);
                }

        }
    }
}
