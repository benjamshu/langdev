#  The LANGDEV Project  #

GitHub repo for all language development by [@literallybenjam](http://twitter.com/literallybenjam).
Top-level folders are for language families; you can find out more information by clicking on them.

Check out the [stripped](https://github.com/literallybenjam/langdev/tree/stripped) branch if you only want the machine-readable code without all those pesky READMEs and whatnot; this branch contains development files alongside other reference materials used during development.
It might run a few commits behind [stripped](https://github.com/literallybenjam/langdev/tree/stripped) or the other branches from time to time.

LANGDEV uses [LexisML](https://github.com/literallybenjam/LexisML) to keep track of languages' lexicons.
Due to the scope of the project, the now-depreciated LexisML 1.0 and 2.0 formats are still sometimes in use.
However, conversion to the LexisML Index Record (LREC) format is now underway.

All files published to this git repositiory are, to the extent possible under law, in the public domain. For more information, see [LICENSE.md](LICENSE.md).

##  Character Encodings and Unicode:  ##

At some times during language development, it may become necessary to define characters or scripts not currently encoded into Unicode.
The development of a database of similar form to the Unicode Character Database is planned, but not yet underway.
However, The LANGDEV Project formally reserves the private-use characters U+101000..U+1017FF for later specification, and larger blocks of characters may be reserved in the future.

Formal definitions of the following blocks are planned:

- U+101000..U+10103F BENCODE
- U+101040..U+1010FF JASTUGA SYLLABARY
- U+101100..U+10111F CLASSICAL SEVENSI RUNES

##  Document naming and IETF language tags:  ##

The organization of documents within The LANGDEV Project is based heavily on the IETF language tags.
Three-letter codes are (hypothetical) primary language subtags, each referring to a language or language family.
These will sometimes be nested to show ancestry; for example, CLASSICAL SEVENSI is in the JASTU-SEVENSI family of languages, so `osv` can be found within the `jsv` folder.

Four-letter codes beginning with a number (`0009`, `1der`) or other five-to-eight–letter codes (`proto`, `final`) specify certain variants within the main language family; in particular, these are used to denote different stages of the language's development.
Special variant codes of the form `block---` are used to define development blocks, described below.

###  development blocks  ###

In the case of some languages, the total lexicon may be too large for meaningful development to take place in a reasonable manner.
In these instances, the lexicon may be broken down into *development blocks*, which contain only a small subset of words within the lexicon.
Development blocks are denoted with the variant subtag `block---`, where `---` is replaced with a three-digit number from `001` to `999`, with `block000` being reserved for extralinguistic content (for example, orthographies or phonological information).
Development blocks often only make sense when used with another variant subtag; for example, `osv-0010-block001` refers to the first development block of CLASSICAL SEVENSI X, but `osv-block001` is not valid.

###  creating compliant tags  ###

The language tags used in The LANGDEV Project have not been registered and are thus not valid IETF tags.
To remedy this, they should be prefixed with the string `art-x-`; for example, `art-x-svi`.
User agents wishing to support the languages of The LANGDEV Project should treat language tags prefixed with `art-x-` according to the definitions in [the provided language subtag registry](language-subtag-registry) if the succeeding subtag is a primary language subtag as defined in that file.

##  Tools:  ##

The [tools](https://github.com/literallybenjam/langdev/tree/tools) branch contains various processing tools for dealing with the documents presented in [stripped](https://github.com/literallybenjam/langdev/tree/stripped).
See [the GitHub Pages website](http://benjam.xyz/langdev/) to view some of these tools in action, or view the source in the [gh-pages](https://github.com/literallybenjam/langdev/tree/gh-pages) branch.
