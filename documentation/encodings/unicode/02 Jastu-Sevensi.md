#  JASTU-SEVENSI  #

The Jastu-Sevensi family of languages were the first independent language family developed by The LANGDEV Project.
A large number of scripts have been created over the course of this development, and more are planned for the future.

The scripts defined in this chapter are:

- **Jastugay**

The following scripts are also planned:

- **Runic Sevensi**
- **Sevensi**
- **Sevensi Ideographs**

##  Jastugay  ##

Jastugay [Jästūgā] is a depreciated language created in the early days of The LANGDEV Project which later served as the base for Proto&ndash;Jastu-Sevensi.
A syllabary was developed for writing this language; it was generally written top-to-bottom, starting from the right, or left-to-right, starting from the top.

The development base for the Jastugay syllabary was a small subset of Jastugay ideographic characters, which were never standardized.
These characters may, however, be encoded as part of the Sevensi Ideographs at some point in the future.

###  Depreciated characters:  ###

Many of the characters originally created for the Jastugay syllabary fell out of use as the syllabary was simplified, and other characters changed meanings.
This specification encodes the syllabary as it was originally created, as this represents a superset of all characters which have ever been put into use.
However, one should be aware that not all uses of the Jastugay syllabary necessarily employ all of the characters, or with the explicit meanings suggested by their names here.

###  Encoding principles:  ###

The Jastugay syllabary is traditionally represented as a matrix of 11 vowels and 16 consonants (including the null consonant).
The encoding of the syllabary into Unicode follows this representation, containing eleven rows of sixteen consonants each (`U+101100..U+1011AF`).
Certain consonants can be represented without a vowel attached; these are encoded in the twelfth row (`U+1011B0..U+1011BF`).
Note that the consonant *l* can ONLY be represented in this manner; for each of the previous rows this column will be left unassigned.

> <img alt="Jastugay Syllabary" src="images/jastugay-syllabary.png" height="480">
>
> *Traditional Jastugay syllabary chart*

###  The consonant *l*:  ###

The consonant `U+1011BF JASTUGAY SYLLABLE L` takes a vastly different form when it is followed immediately by another letter, referred to as its *affix form*.
This change in appearance is required for support by rendering processes.

In some instances, it may be important to represent the affix form of `U+1011BF JASTUGAY SYLLABLE L` in isolation.
The sequence `U+1011BF JASTUGAY SYLLABLE L` + ZWJ is used for this purpose.

As indicated by [LineBreak.txt](ucd/langdev/LineBreak.txt), lines may be broken after `U+1011BF JASTUGAY SYLLABLE L`.
This does not affect its appearance.

###  *-n* form:  ###

The characters `U+101130..U+10113E` have an alternate form, traditionally represented by affixing a vertical bar to their right, which designates that the character should be followed with an *n* sound.
This is implemented as a diacritic: `U+1011D0 JASTUGAY COMBINING MARK N`.

###  Punctuation:  ###

The Jastugay script has its own unique punctuation, which is encoded in the block `U+1011C0..U+1011CF JASTUGAY PUNCTUATION`.
Of particular note is `U+1011C7 JASTUGAY WORD SEPARATOR`, which is used instead of a space between words.
Rendering processes should suppress the display of `U+1011C7 JASTUGAY WORD SEPARATOR` when a line break occurs directly after its position.

###  Code charts:  ###

- [`U+101100..U+1010BF Jastugay Syllabary`](charts/101100.md)
- [`U+1011C0..U+1011CF Jastugay Punctuation`](charts/1011C0.md)
- [`U+1011C0..U+1011CF Jastugay Combining Marks`](charts/1011D0.md)
