#  The LANGDEV Project  #

GitHub repo for all language development by [@literallybenjam](https://github.com/literallybenjam).

##  Branches:  ##
This project is split into several branches, described below:

###  [`data`](https://github.com/literallybenjam/langdev/tree/data)  ###

The [`data`](https://github.com/literallybenjam/langdev/tree/data) branch contains data files related to the various LANGDEV languages.
These files are used to generate the LANGDEV dictionaries.
The [`data`](https://github.com/literallybenjam/langdev/tree/data) branch also contains the [`language-subtag-registry`](language-subtag-registry), which defines the various LANGDEV subtags (see below).

LANGDEV uses the LexisML Index Record (LREC) format in conjunction with HTML to keep track of languages' lexicons.
Due to the scope of the project, however, the now-depreciated LexisML 1.0 and 2.0 formats are still sometimes in use.

###  [`documentation`](https://github.com/literallybenjam/langdev/tree/documentation)  ###

The [`documentation`](https://github.com/literallybenjam/langdev/tree/documentation) branch contains documentation and information about each language or script.
Documentation files are provided in GitHub-Flavored Markdown (GFM) and designed to render well through [`github.com`](https://github.com).

###  [`tools`](https://github.com/literallybenjam/langdev/tree/tools)  ###

The [`tools`](https://github.com/literallybenjam/langdev/tree/tools) branch contains various processing tools for dealing with the documents presented in [`data`](https://github.com/literallybenjam/langdev/tree/data).
See [the GitHub Pages website](http://langdev.xyz/) to view some of these tools in action, or view the source in the [`master`](https://github.com/literallybenjam/langdev/tree/master) branch.

###  [`fonts`](https://github.com/literallybenjam/langdev/tree/fonts)  ###

Font development for The LANGDEV Project takes place in the [`fonts`](https://github.com/literallybenjam/langdev/tree/fonts) branch.
Font development takes place using FontForge.

###  [`unicode`](https://github.com/literallybenjam/langdev/tree/unicode)  ###

At times during language development, it will be necessary to define characters or scripts not currently encoded into Unicode.
The [`unicode`](https://github.com/literallybenjam/langdev/tree/unicode) branch has been created for this purpose.
The LANGDEV Project formally reserves the private-use characters `U+101000..U+1017FF` for this specification, and larger blocks of characters may be reserved in the future.

Unicode documentation follows the GitHub-Flavored Markdown syntax of [`documentation`](https://github.com/literallybenjam/langdev/tree/documentation), and also includes a character database akin to the UCD.

###  [`master`](https://github.com/literallybenjam/langdev/tree/master)  ###

The [`master`](https://github.com/literallybenjam/langdev/tree/master) branch merges together all of the above branches into one complete directory.
It also contains the GitHub Pages data for [langdev.xyz](http://langdev.xyz/).

Because the contents of the [`master`](https://github.com/literallybenjam/langdev/tree/master) branch derives from the others, it may run slightly behind them from time to time.
Those interested in the most up-to-date data should always check the appropriate branch instead.

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
User agents wishing to support the languages of The LANGDEV Project should treat language tags prefixed with `art-x-` according to the definitions in [the provided language subtag registry](language-subtag-registry) if the remainder of the subtag is a valid according to the definitions in that file.
Note that script subtags should be carried through in this process; for example, `art-Latn-x-svi` should be treated as `svi-Latn`.

##  License:  ##
All files published to this
git repository are, to the extent possible under law, in the public domain.
For more information, see [LICENSE.md](LICENSE.md).
