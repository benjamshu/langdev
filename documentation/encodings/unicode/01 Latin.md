#  LANGDEV IN UNICODE :: 01 LATIN  #

The Latin script is already well-defined.
However, over the couse of LANDEV development, other scripts based off of the Latin script may find themselves in need of encoding, which will occur here.
Latin-based scripts will generally be alphabetic, and written from left to right.

The scripts defined in this chapter are:

- **Bencode**

##  Bencode  ##

The Bencode script was developed as a rough one-to-one mapping from the Latin script, as a simple means of inscribing text in a manner not easily decipherable to an unfamiliar observer.
In early versions of the script, there was no equivalent character for *C*, and *K* or *S* was often used instead.
A *C*-equivalent has since been introduced.
Furthermore, Bencode specifies a separate character for the sequence *ch*, which is also defined here.

####  Encoding principles  ####

The Bencode script consists of 27 letters, with both uppercase and lowercase forms.
Uppercase letters are encoded in their traditional alphabetic sequence at the code points `U+101000..U+10101A`, and lowercase letters are encoded at the code points `U+101020..U+10103A`.

####  Punctuation  ####

The Bencode script uses its own unique punctuation, which is encoded at the code points `U+10101B..U+10101F`, `U+10103B..U+10103F`, and in the block `U+101040..U+10104F Extended Bencode Punctuation`.
Many of these symbols are similar in appearance to symbols currently in use in other scripts, but with starkly different contextual meanings.
They have been encoded separately to prevent misrecognition.

####  Embedded text  ####

In a text written in Bencode, characters from other scripts are generally presented with an underline.
This is best achieved in markup, and is thus outside of the scope of this specification.
In plain-text formats, this is sometimes achieved through repeated use of `U+0332 COMBINING LOW LINE`.

####  Code charts  ####

- [`U+101000..U+10103F Bencode`](charts/101000.md)
- [`U+101040..U+10104F Bencode Supplemental Punctuation`](charts/101040.md)
