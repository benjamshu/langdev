#  The LANGDEV Project  #

GitHub repo for all language development by [@literallybenjam](http://twitter.com/literallybenjam).
Top-level folders are for language families; you can find out more information by clicking on them.

Check out the [stripped](https://github.com/literallybenjam/langdev/tree/stripped) branch if you only want the machine-readable code without all those pesky READMEs and whatnot; this branch contains development files alongside other reference materials used during development.
It might run a few commits behind [stripped](https://github.com/literallybenjam/langdev/tree/stripped) or the other branches from time to time.

LANGDEV uses [LexisML](https://github.com/literallybenjam/LexisML) to keep track of languages' lexicons.
Conversion from LexisML 1.0 to LexisML 2.0 is underway.

All files published to this git repositiory are, to the extent possible under law, in the public domain. For more information, see [LICENSE.md](LICENSE.md).

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
`art` is the IETF primary language subtag for artificial language; `x` is the private-use subtag.
User agents wishing to support the languages of The LANGDEV Project should treat language tags prefixed with `art-x-` according to the definitions in [the provided language subtag registry](language-subtag-registry) if the succeeding subtag is a primary language subtag as defined in that file.
