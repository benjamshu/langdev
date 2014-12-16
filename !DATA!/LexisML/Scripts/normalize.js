/* jslint asi:true, browser:true */

if (typeof Lexis == "undefined") var Lexis = {};

Lexis.normalize = function(lexis_document) {
    var words = lexis_document.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "word");
    var metas = lexis_document.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "meta");
    var forms;
    var iterator = lexis_document.createNodeIterator(lexis_document.documentElement, NodeFilter.SHOW_ELEMENT, null);
    var i;
    if (words.length) {
        for (i = 0; i < metas.length; i++) {
            lexis_document.documentElement.insertBefore(metas.item(i), words.item(0));
        }
    }
    var current_node;
    var text_content;
    while (current_node = iterator.nextNode()) {  // jshint ignore:line
        switch (current_node.tagName) {
            case "word":
            case "affix":
                if (!current_node.hasAttributeNS("http://leaf.faint.xyz/lexisml", "lemma")) {
                    forms = current_node.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "form");
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
                break;
            case "meaning":
                if (!current_node.hasAttributeNS("http://leaf.faint.xyz/lexisml", "class")) {
                    var class_value = "";
                    forms = current_node.parentNode.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "form");
                    for (i = 0; i < forms.length; i++) {
                        if (forms.item(i).hasAttributeNS("http://leaf.faint.xyz/lexisml", "class")) class_value += forms.item(i).getAttributeNS("http://leaf.faint.xyz/lexisml", "class") + " ";
                    }
                    class_value = class_value.trim();
                    current_node.setAttributeNS("http://leaf.faint.xyz/lexisml", "class", class_value);
                }
                /* falls through */
            case "form":
            case "etymology":
            case "etyma":
            case "wordref":
                for (i = 0; i < current_node.childNodes.length; i--) {
                    if (current_node.childNodes.item(i).nodeType == Node.TEXT_NODE) {
                        text_content = current_node.childNodes.item(i).textContent;
                        if (String.prototype.normalize) text_content = text_content.normalize();
                        text_content = text_content.trim();
                        current_node.childNodes.item(i).textContent = text_content;
                    }
                }
                current_node.normalize();

        }
    }
}
