#LexisML

LexisML is an application of XML used for recording the lexicon of a language\_ It has namespace `http://leaf.faint.xyz/lexisml`\_

The normalization of LexisML provided by `normalize.js` does the following:

* If a lemma is not provided for a word, it is set as the first word-form\_ If the word has no word-forms, it is set to the empty string\_
* All text nodes are removed from `<lexis>` and `<word>` elements\_
* All nodes are removed from `<meta>` elements\_
