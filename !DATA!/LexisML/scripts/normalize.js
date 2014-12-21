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
                if (!current_node.hasAttribute("lemma")) {
                    forms = current_node.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "form");
                    if (forms.length) current_node.setAttribute("lemma", forms.item(0).textContent);
                    else current_node.setAttribute("lemma", "");
                }
                /* falls through */
            case "lexis":
                for (i = current_node.childNodes.length - 1; i >= 0; i--) {
                    if (current_node.childNodes.item(i).nodeType !== 1) current_node.removeChild(current_node.childNodes.item(i));
                }
                break;
            case "meaning":
                if (!current_node.hasAttribute("class")) {
                    var class_value = "";
                    forms = current_node.parentNode.getElementsByTagNameNS("http://leaf.faint.xyz/lexisml", "form");
                    for (i = 0; i < forms.length; i++) {
                        if (forms.item(i).hasAttribute("class")) class_value += forms.item(i).getAttribute("class") + " ";
                    }
                    class_value = class_value.trim();
                    if (class_value !== "") current_node.setAttribute("class", class_value);
                }
                /* falls through */
            case "meta":
            case "form":
            case "etymology":
            case "etymon":
            case "wordref":
            case "mention":
                for (i = 0; i < current_node.childNodes.length; i++) {
                    if (current_node.childNodes.item(i).nodeType === 3) {
                        text_content = current_node.childNodes.item(i).textContent;
                        if (String.prototype.normalize) text_content = text_content.normalize();
                        if (i === 0) text_content = text_content.replace(/^\s+/, "");
                        else if (i === current_node.childNodes.length - 1) text_content = text_content.replace(/\s+$/, "");
                        text_content = text_content.replace(/\s+/, " ");
                        current_node.childNodes.item(i).textContent = text_content;
                    }
                }
                current_node.normalize();

        }
        for (i = current_node.parentElement; !current_node.hasAttributeNS("http://www.w3.org/XML/1998/namespace", "lang"); i = i.parentElement) {
            if (i.hasAttributeNS("http://www.w3.org/XML/1998/namespace", "lang")) current_node.setAttributeNS("http://www.w3.org/XML/1998/namespace", "lang", i.getAttributeNS("http://www.w3.org/XML/1998/namespace", "lang"));
            else if (i == lexis_document.documentElement) current_node.setAttributeNS("http://www.w3.org/XML/1998/namespace", "lang", "");
        }
    }
}
