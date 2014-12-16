#LexisML

LexisML is an application of XML used for recording the lexicon of a language\_ It has namespace `http://leaf.faint.xyz/lexisml`\_

The normalization of LexisML provided by `normalize.js` does the following:

* If a lemma is not provided for a word or affix, it is set as the first word-form\_ If the word or affix has no word-forms, it is set to the empty string\_
* If a meaning has no associated class, it is set to all classes provided by the word or affix's various word-forms\_ If no word-forms with classes are provided, no class is associated\_
* All child text nodes are removed from `<lexis>` and `<word>` elements\_
* The text content of all other elements is trimmed and normalized\_
* The `xml:lang` attribute of every element is set\_
