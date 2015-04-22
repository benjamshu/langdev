# ZIKODU (FIZENG STANDARD ENCODING)

Characters in the ZIKODU are signified by *code points*, unique numbers assigned to each grapheme. There are 112 *base characters* in ZIKODU; 16 *variation selectors* are used to select alternate glyphs. Code points are rendered in hexadecimal, preceeded by the string `Z-`; equivalent UNICODE code points are provided.

The base characters represented by code points `Z-00` through `Z-1F`, in addition to `Z-7F`, are identical to their UNICODE counterparts. These characters are referred to as *control characters*, and __may not__ be combined with variation selectors.

Other base characters are considered *combined* with variation selectors if all of the following are true:

- The base character is not a control character
- The variation selector directly follows the base character
- The combination is standardized in this document

Variation selectors which are not combined with base characters __should not__ be rendered. Note that base characters __cannot__ be combined with more than one variation selector.

## code table : base characters

| Code Point | Grapheme | Character Name                   | UNICODE |
| ---------: | :------: | :------------------------------- | :------ |
|       Z-00 |    �    | NULL                             | U+0000  |
|       Z-01 |    �    | START OF HEADING                 | U+0001  |
|       Z-02 |    �    | START OF TEXT                    | U+0002  |
|       Z-03 |    �    | END OF TEXT                      | U+0003  |
|       Z-04 |    �    | END OF TRANSMISSION              | U+0004  |
|       Z-05 |    �    | ENQUIRY                          | U+0005  |
|       Z-06 |    �    | ACKNOWLEDGE                      | U+0006  |
|       Z-07 |    �    | BELL                             | U+0007  |
|       Z-08 |    �    | BACKSPACE                        | U+0008  |
|       Z-09 |    �    | HORIZONTAL TAB                   | U+0009  |
|       Z-0A |    �    | LINE FEED                        | U+000A  |
|       Z-0B |    �    | VERTICAL TAB                     | U+000B  |
|       Z-0C |    �    | FORM FEED                        | U+000C  |
|       Z-0D |    �    | CARRIAGE RETURN                  | U+000D  |
|       Z-0E |    �    | SHIFT OUT                        | U+000E  |
|       Z-0F |    �    | SHIFT IN                         | U+000F  |
|       Z-10 |    �    | DATA LINK ESCAPE                 | U+0010  |
|       Z-11 |    �    | DEVICE CONTROL 1                 | U+0011  |
|       Z-12 |    �    | DEVICE CONTROL 2                 | U+0012  |
|       Z-13 |    �    | DEVICE CONTROL 3                 | U+0013  |
|       Z-14 |    �    | DEVICE CONTROL 4                 | U+0014  |
|       Z-15 |    �    | NEGATIVE ACKNOWLEDGE             | U+0015  |
|       Z-16 |    �    | SYNCHRONOUS IDLE                 | U+0016  |
|       Z-17 |    �    | END OF TRANSMISSION              | U+0017  |
|       Z-18 |    �    | CANCEL                           | U+0018  |
|       Z-19 |    �    | END OF MEDIUM                    | U+0019  |
|       Z-1A |    �    | SUBSTITUTE                       | U+001A  |
|       Z-1B |    �    | ESCAPE                           | U+001B  |
|       Z-1C |    �    | FILE SEPARATOR                   | U+001C  |
|       Z-1D |    �    | GROUP SEPARATOR                  | U+001D  |
|       Z-1E |    �    | RECORD SEPARATOR                 | U+001E  |
|       Z-1F |    �    | UNIT SEPARATOR                   | U+001F  |
|       Z-20 |    　    | IDEOGRAPHIC SPACE                | U+3000  |
|       Z-21 |    ！    | FULLWIDTH EXCLAMATION MARK       | U+FF01  |
|       Z-22 |    ＂    | FULLWIDTH QUOTATION MARK         | U+FF02  |
|       Z-23 |    ＃    | FULLWIDTH NUMBER SIGN            | U+FF03  |
|       Z-24 |    ＄    | FULLWIDTH DOLLAR SIGN            | U+FF04  |
|       Z-25 |    ％    | FULLWIDTH PERCENT SIGN           | U+FF05  |
|       Z-26 |    ＆    | FULLWIDTH AMPERSAND              | U+FF06  |
|       Z-27 |    ＇    | FULLWIDTH APOSTROPHE             | U+FF07  |
|       Z-28 |    （    | FULLWIDTH LEFT PARENTHESIS       | U+FF08  |
|       Z-29 |    ）    | FULLWIDTH RIGHT PARENTHESIS      | U+FF09  |
|       Z-2A |    ＊    | FULLWIDTH ASTERISK               | U+FF0A  |
|       Z-2B |    ＋    | FULLWIDTH PLUS SIGN              | U+FF0B  |
|       Z-2C |    ，    | FULLWIDTH COMMA                  | U+FF0C  |
|       Z-2D |    －    | FULLWIDTH HYPHEN-MINUS           | U+FF0D  |
|       Z-2E |    ．    | FULLWIDTH FULL STOP              | U+FF0E  |
|       Z-2F |    ／    | FULLWIDTH SOLIDUS                | U+FF0F  |
|       Z-30 |    ０    | FULLWIDTH DIGIT ZERO             | U+FF10  |
|       Z-31 |    １    | FULLWIDTH DIGIT ONE              | U+FF11  |
|       Z-32 |    ２    | FULLWIDTH DIGIT TWO              | U+FF12  |
|       Z-33 |    ３    | FULLWIDTH DIGIT THREE            | U+FF13  |
|       Z-34 |    ４    | FULLWIDTH DIGIT FOUR             | U+FF14  |
|       Z-35 |    ５    | FULLWIDTH DIGIT FIVE             | U+FF15  |
|       Z-36 |    ６    | FULLWIDTH DIGIT SIX              | U+FF16  |
|       Z-37 |    ７    | FULLWIDTH DIGIT SEVEN            | U+FF17  |
|       Z-38 |    ８    | FULLWIDTH DIGIT EIGHT            | U+FF18  |
|       Z-39 |    ９    | FULLWIDTH DIGIT NINE             | U+FF19  |
|       Z-3A |    ＠    | FULLWIDTH COMMERCIAL AT          | U+FF20  |
|       Z-3B |    �    | VARIATION SELECTOR-1             | U+FE00  |
|       Z-3C |    �    | VARIATION SELECTOR-2             | U+FE01  |
|       Z-3D |    �    | VARIATION SELECTOR-3             | U+FE02  |
|       Z-3E |    �    | VARIATION SELECTOR-4             | U+FE03  |
|       Z-3F |    �    | VARIATION SELECTOR-5             | U+FE04  |
|       Z-40 |    �    | VARIATION SELECTOR-6             | U+FE05  |
|       Z-41 |    Ａ    | FULLWIDTH LATIN CAPITAL LETTER A | U+FF21  |
|       Z-42 |    Ｂ    | FULLWIDTH LATIN CAPITAL LETTER B | U+FF22  |
|       Z-43 |    Ｃ    | FULLWIDTH LATIN CAPITAL LETTER C | U+FF23  |
|       Z-44 |    Ｄ    | FULLWIDTH LATIN CAPITAL LETTER D | U+FF24  |
|       Z-45 |    Ｅ    | FULLWIDTH LATIN CAPITAL LETTER E | U+FF25  |
|       Z-46 |    Ｆ    | FULLWIDTH LATIN CAPITAL LETTER F | U+FF26  |
|       Z-47 |    Ｇ    | FULLWIDTH LATIN CAPITAL LETTER G | U+FF27  |
|       Z-48 |    Ｈ    | FULLWIDTH LATIN CAPITAL LETTER H | U+FF28  |
|       Z-49 |    Ｉ    | FULLWIDTH LATIN CAPITAL LETTER I | U+FF29  |
|       Z-4A |    Ｊ    | FULLWIDTH LATIN CAPITAL LETTER J | U+FF2A  |
|       Z-4B |    Ｋ    | FULLWIDTH LATIN CAPITAL LETTER K | U+FF2B  |
|       Z-4C |    Ｌ    | FULLWIDTH LATIN CAPITAL LETTER L | U+FF2C  |
|       Z-4D |    Ｍ    | FULLWIDTH LATIN CAPITAL LETTER M | U+FF2D  |
|       Z-4E |    Ｎ    | FULLWIDTH LATIN CAPITAL LETTER N | U+FF2E  |
|       Z-4F |    Ｏ    | FULLWIDTH LATIN CAPITAL LETTER O | U+FF2F  |
|       Z-50 |    Ｐ    | FULLWIDTH LATIN CAPITAL LETTER P | U+FF30  |
|       Z-51 |    Ｑ    | FULLWIDTH LATIN CAPITAL LETTER Q | U+FF31  |
|       Z-52 |    Ｒ    | FULLWIDTH LATIN CAPITAL LETTER R | U+FF32  |
|       Z-53 |    Ｓ    | FULLWIDTH LATIN CAPITAL LETTER S | U+FF33  |
|       Z-54 |    Ｔ    | FULLWIDTH LATIN CAPITAL LETTER T | U+FF34  |
|       Z-55 |    Ｕ    | FULLWIDTH LATIN CAPITAL LETTER U | U+FF35  |
|       Z-56 |    Ｖ    | FULLWIDTH LATIN CAPITAL LETTER V | U+FF36  |
|       Z-57 |    Ｗ    | FULLWIDTH LATIN CAPITAL LETTER W | U+FF37  |
|       Z-58 |    Ｘ    | FULLWIDTH LATIN CAPITAL LETTER X | U+FF38  |
|       Z-59 |    Ｙ    | FULLWIDTH LATIN CAPITAL LETTER Y | U+FF39  |
|       Z-5A |    Ｚ    | FULLWIDTH LATIN CAPITAL LETTER Z | U+FF3A  |
|       Z-5B |    �    | VARIATION SELECTOR-7             | U+FE06  |
|       Z-5C |    �    | VARIATION SELECTOR-8             | U+FE07  |
|       Z-5D |    �    | VARIATION SELECTOR-9             | U+FE08  |
|       Z-5E |    �    | VARIATION SELECTOR-10            | U+FE09  |
|       Z-5F |    �    | VARIATION SELECTOR-11            | U+FE0A  |
|       Z-60 |    �    | VARIATION SELECTOR-12            | U+FE0B  |
|       Z-61 |    ａ    | FULLWIDTH LATIN SMALL LETTER A   | U+FF41  |
|       Z-62 |    ｂ    | FULLWIDTH LATIN SMALL LETTER B   | U+FF42  |
|       Z-63 |    ｃ    | FULLWIDTH LATIN SMALL LETTER C   | U+FF43  |
|       Z-64 |    ｄ    | FULLWIDTH LATIN SMALL LETTER D   | U+FF44  |
|       Z-65 |    ｅ    | FULLWIDTH LATIN SMALL LETTER E   | U+FF45  |
|       Z-66 |    ｆ    | FULLWIDTH LATIN SMALL LETTER F   | U+FF46  |
|       Z-67 |    ｇ    | FULLWIDTH LATIN SMALL LETTER G   | U+FF47  |
|       Z-68 |    ｈ    | FULLWIDTH LATIN SMALL LETTER H   | U+FF48  |
|       Z-69 |    ｉ    | FULLWIDTH LATIN SMALL LETTER I   | U+FF49  |
|       Z-6A |    ｊ    | FULLWIDTH LATIN SMALL LETTER J   | U+FF4A  |
|       Z-6B |    ｋ    | FULLWIDTH LATIN SMALL LETTER K   | U+FF4B  |
|       Z-6C |    ｌ    | FULLWIDTH LATIN SMALL LETTER L   | U+FF4C  |
|       Z-6D |    ｍ    | FULLWIDTH LATIN SMALL LETTER M   | U+FF4D  |
|       Z-6E |    ｎ    | FULLWIDTH LATIN SMALL LETTER N   | U+FF4E  |
|       Z-6F |    ｏ    | FULLWIDTH LATIN SMALL LETTER O   | U+FF4F  |
|       Z-70 |    ｐ    | FULLWIDTH LATIN SMALL LETTER P   | U+FF50  |
|       Z-71 |    ｑ    | FULLWIDTH LATIN SMALL LETTER Q   | U+FF51  |
|       Z-72 |    ｒ    | FULLWIDTH LATIN SMALL LETTER R   | U+FF52  |
|       Z-73 |    ｓ    | FULLWIDTH LATIN SMALL LETTER S   | U+FF53  |
|       Z-74 |    ｔ    | FULLWIDTH LATIN SMALL LETTER T   | U+FF54  |
|       Z-75 |    ｕ    | FULLWIDTH LATIN SMALL LETTER U   | U+FF55  |
|       Z-76 |    ｖ    | FULLWIDTH LATIN SMALL LETTER V   | U+FF56  |
|       Z-77 |    ｗ    | FULLWIDTH LATIN SMALL LETTER W   | U+FF57  |
|       Z-78 |    ｘ    | FULLWIDTH LATIN SMALL LETTER X   | U+FF58  |
|       Z-79 |    ｙ    | FULLWIDTH LATIN SMALL LETTER Y   | U+FF59  |
|       Z-7A |    ｚ    | FULLWIDTH LATIN SMALL LETTER Z   | U+FF5A  |
|       Z-7B |    �    | VARIATION SELECTOR-13            | U+FE0C  |
|       Z-7C |    �    | VARIATION SELECTOR-14            | U+FE0D  |
|       Z-7D |    �    | VARIATION SELECTOR-15            | U+FE0E  |
|       Z-7E |    �    | VARIATION SELECTOR-16            | U+FE0F  |
|       Z-7F |    �    | DELETE                           | U+007F  |
