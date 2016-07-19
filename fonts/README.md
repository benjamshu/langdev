#  The LANGDEV Font  #

This branch of the LANGDEV Project repository focuses on creating fonts which implement the specification set forth in [unicode](https://github.com/literallybenjam/langdev/tree/unicode/unicode).
Right now it is comprised of a single font, [The LANGDEV Font](LANGDEV.std), designed with FontForge.

##  Coverage  ##

###  Current:  ###

Right now, no glyphs have yet been created.

###  Anticipated:  ###

The LANGDEV font should be sophisticated enough to handle all of LANGDEV development.
This means that the following characters, at minimum, should be supported:

- All of [C0 Controls and Basic Latin](http://www.unicode.org/charts/PDF/U0000.pdf) (that is, US-ASCII)
- `U+00C5 Å LATIN CAPITAL LETTER A WITH RING ABOVE` and `U+00E5 å LATIN SMALL LETTER A WITH RING ABOVE`
- `U+00C6 Æ LATIN CAPITAL LETTER AE` and `U+00E6 æ LATIN SMALL LETTER AE`
- `U+A734 Ꜵ LATIN CAPITAL LETTER AO` and `U+A735 ꜵ LATIN SMALL LETTER AO`
- `U+2205 ∅ EMPTY SET`
- Any private-use characters specified by the [unicode](https://github.com/literallybenjam/langdev/tree/unicode/unicode) branch.

The following characters would ideally also achieve coverage, but are not a priority:

- The entire IPA alphabet
- Any characters in the FIZENG syllabary
- Hangul support including some archaic forms
