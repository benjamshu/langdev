#  LANGDEV IN UNICODE  #

**Version 2: Draft 1**

*LANGDEV in Unicode* provides an implementation for the scripts created through the LANGDEV Project into the Unicode Private-Use Area, and lays a general groundwork should eventual Unicode incorporation occur.
Conformance with the latest version of *The Unicode Standard* is presumed.
This documents contained in this branch are not endorsed or affiliated with The Unicode Consortium, Unicode Inc., or any related parties.
No claims are made as to fitness for any particular purpose.
No warranties of any kind are expressed or implied.

**This document formally reserves the private-use characters `U+101000..U+1017FF` for use when recording LANGDEV scripts.**
The character data for these code points are recorded in the LANGDEV-Unicode Character Database, which mimics the form of the Unicode Character Database as described in *The Unicode Standard*.
This database is contained in the [ucd](https://github.com/literallybenjam/langdev/tree/data/data/encodings/unicode/ucd) directory of the [data](https://github.com/literallybenjam/langdev/tree/data/) branch.

The LANGDEV Project, including this specification, is licensed under a [CC0 1.0 Universal](https://github.com/literallybenjam/langdev/tree/master/LICENSE.md) license.
It can be used, modified, and reproduced for any purpose, commercial or otherwise, without a need for attribution or compensation for its original author(s).

##  Structure of this Specification  ##

LANGDEV in Unicode has three main components:
The specification itself provides the minimum conformance requirements for any implementation of the Project into Unicode.
These files are named according to the language families which they describe, and are found in this directory.
All specification files are formatted as GitHub-Flavored Markdown (GFM).

The code charts, in the [charts](charts) directory, provide human-readable tables of all of the defined code blocks in this specification.
They are named according to the first character within the block, and their contents may be broken up into smaller non-normative *areas* for readability's sake.

The LANGDEV-Unicode Character Database, in the [ucd](https://github.com/literallybenjam/langdev/tree/data/data/encodings/unicode/ucd) directory of the [data](https://github.com/literallybenjam/langdev/tree/data/) branch, provides additional files for the Unicode Character Database (UCD) necessary for proper specification conformance.
These files match the general file types of the UCD, and they have been grouped together in their own directory to avoid collision when merging with the UCD itself.

##  Design Principles:  ##

As an expansion of the original Unicode standard, *LANGDEV in Unicode* inherits many of its design principles:
It expands the universality of Unicode, and is aimed at being an efficient encoding for most text processes.
It encodes characters, not glyphs.
Characters have well-defined semantics, specified through character properties in the LANGDEV-Unicode Character Database.
It is a plain-text encoding with a logical order.
It operates with the already-defined characters of *The Unicode Standard* in order to avoid duplicate encodings, promoting unification where possible.
Characters are dynamically composed with diacritics and other marks, and equivalent sequences are provided for some compositions.
Stability is ensured by asserting that once a character has been encoded, it will not be changed.
Where alternate standards have been developed, accurate convertibility is maintained.

##  Coverage:  ##

The LANGDEV Project formally reserves the characters `U+101000..U+1017FF` from the `Supplementary Private Use Area-B` block of Unicode for use when recording LANGDEV scripts: 2,048 characters in total.
As the scope of the Project expands, this initial reservation may prove insufficient, and more characters may be added.
However, those wishing to maintain conformance in the near future should not use characters in this range for any purposes except those defined by this specification.

The goal of this specification is to provide an encoding for the various scripts which have been developed as a part of the LANGDEV Project: Those of the Fizonal languages, of Jastu-Sevensi, and of Fluîne, among others.
Other scripts, such as Bencode and Pidgery, have also been developed in conjunction with the Project and may find an encoding here.
The LANGDEV Project is constantly evolving, and this specification will grow and expand as needed to match.

##  Stability:  ##

The [stability policies for *The Unicode Standard*](http://www.unicode.org/policies/stability_policy.html) itself also hold for *LANGDEV in Unicode*.

##  Conformance:  ##

Conformance to this standard presumes conformance to the latest version of *The Unicode Standard*.
*However*, conforming processes *must not* interpret the code points in the range `U+101000..U+1017FF` as representing abstract characters except as defined by this specification or according to the default property values specified by *The Unicode Standard*.
The property values of these code points *are not* overridable by higher-level protocols.

The current version of this standard is noted at the top of this page.
The version number is incremented whenever new scripts are added to the specification or new code points are assigned.
The draft number is incremented whenever significant changes are made in the wording of the specification or character properties are modified.
See [CHANGELOG.md](CHANGELOG.md) for a more comprehensive list of changes.

##  Normalization:  ##

Conformance to *The Unicode Standard* requires that each code point in the range `U+101000..U+1017FF` map to itself under NFC, NFD, NFKD, and NFKC.
Other normalization algorithms for which this mapping is overridden based upon these may be defined by later specification.

##  Character Properties:  ##

The character properties specified in the files in the following table override those specified in their corresponding files in the UCD.
(The overriding of these character properties is expressly allowed by *The Unicode Standard*.)
In addition, the property value aliases defined in [PropertyValueAliases.txt](https://github.com/literallybenjam/langdev/tree/data/data/encodings/unicode/ucd/langdev/PropertyValueAliases.txt) should be treated as though they were specified in the `PropertyValueAliases.txt` file in the UCD.
Additional character properties may be defined at a later time by this standard.

| File                 | Properties          |
| -------------------- | ------------------- |
| ArabicShaping.txt    | • `Joining_Type` <br> • `Joining_Group` |
| Blocks.txt           | `Block`             |
| LineBreak.txt        | `Line_Break`        |
| Scripts.txt          | `Script`            |
| ScriptExtensions.txt | `Script_Extensions` |
| PropList.txt         | • `ASCII_Hex_Digit` <br> • `Bidi_Control` <br> • `Dash` <br> • `Deprecated` <br> • `Diacritic` <br> • `Extender` <br> • `Hex_Digit` <br> • `Hyphen` <br> • `Ideographic` <br> • `IDS_Binary_Operator` <br> • `IDS_Trinary_Operator` <br> • `Join_Control` <br> • `Logical_Order_Exception` <br> • `Noncharacter_Code_Point` <br> • `Other_Alphabetic` <br> • `Other_Default_Ignorable_Code_Point` <br> • `Other_Grapheme_Extend` <br> • `Other_ID_Continue` <br> • `Other_ID_Start` <br> • `Other_Lowercase` <br> • `Other_Math` <br> • `Other_Uppercase` <br> • `Pattern_Syntax` <br> • `Pattern_White_Space` <br> • `Quotation_Mark` <br> • `Radical` <br> • `Soft_Dotted` <br> • `STerm` <br> • `Terminal_Punctuation` <br> • `Unified_Ideograph` <br> • `Variation_Selector` <br> • `White_Space` |
| UnicodeData.txt      | • `Name` <br> • `General_Category` <br> • `Canonical_Combining_Class` <br> • `Bidi_Class` <br> • `Decomposition_Type` <br> • `Decomposition_Mapping` <br> • `Numeric_Type` <br> • `Numeric_Value` <br> • `Bidi_Mirrored` <br> • `Unicode_1_Name` <br> • `ISO_Comment` <br> • `Simple_Uppercase_Mapping` <br> • `Simple_Lowercase_Mapping` <br> • `Simple_Titlecase_Mapping` |
