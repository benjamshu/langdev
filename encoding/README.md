# ZIKODU (FIZENG STANDARD ENCODING)

## rationale

ZIKODU exists to provide an encoding scheme such that every character in FIZENG can be encoded in only two bytes. Furthermore, ZIKODU provides an organizational system for FIZENG characters which makes more sense with the language than the traditional ordering through UNICODE. ZIKODU is an 8-bit extension to US-ASCII; pure ASCII text will be encoded unmodified.

## basic explanation

Characters in the ZIKODU are signified by *code points*, unique numbers assigned to each grapheme. There are 112 *base characters* in ZIKODU; 16 *variation selectors* are used to select alternate glyphs. Code points are rendered in hexadecimal, preceeded by the string `Z-`; equivalent UNICODE code points are provided.

The base characters represented by code points `Z-00` through `Z-9F` are equivalent to their Unicode/Latin-1 counterparts. Those represented by code points `Z-00` through `Z-1F` and `Z-7F` through `Z-9F`, are referred to as *control characters*, and __may not__ be combined with variation selectors.

Other base characters are considered *combined* with variation selectors if all of the following are true:

- The base character is not a control character
- The variation selector directly follows the base character
- The combination is standardized in this document

Base + variation combinations may be written with a *combined code point*.

Variation selectors which are not combined with base characters __should not__ be rendered. Note that base characters __cannot__ be combined with more than one variation selector.

## code table : base characters

| Code Point | Grapheme | Character Name                          | UNICODE |
| ---------: | :------: | :-------------------------------------- | :------ |
|       Z-00 |    �    | NULL                                    | U+0000  |
|       Z-01 |    �    | START OF HEADING                        | U+0001  |
|       Z-02 |    �    | START OF TEXT                           | U+0002  |
|       Z-03 |    �    | END OF TEXT                             | U+0003  |
|       Z-04 |    �    | END OF TRANSMISSION                     | U+0004  |
|       Z-05 |    �    | ENQUIRY                                 | U+0005  |
|       Z-06 |    �    | ACKNOWLEDGE                             | U+0006  |
|       Z-07 |    �    | BELL                                    | U+0007  |
|       Z-08 |    �    | BACKSPACE                               | U+0008  |
|       Z-09 |    �    | HORIZONTAL TAB                          | U+0009  |
|       Z-0A |    �    | LINE FEED                               | U+000A  |
|       Z-0B |    �    | VERTICAL TAB                            | U+000B  |
|       Z-0C |    �    | FORM FEED                               | U+000C  |
|       Z-0D |    �    | CARRIAGE RETURN                         | U+000D  |
|       Z-0E |    �    | SHIFT OUT                               | U+000E  |
|       Z-0F |    �    | SHIFT IN                                | U+000F  |
|       Z-10 |    �    | DATA LINK ESCAPE                        | U+0010  |
|       Z-11 |    �    | DEVICE CONTROL 1                        | U+0011  |
|       Z-12 |    �    | DEVICE CONTROL 2                        | U+0012  |
|       Z-13 |    �    | DEVICE CONTROL 3                        | U+0013  |
|       Z-14 |    �    | DEVICE CONTROL 4                        | U+0014  |
|       Z-15 |    �    | NEGATIVE ACKNOWLEDGE                    | U+0015  |
|       Z-16 |    �    | SYNCHRONOUS IDLE                        | U+0016  |
|       Z-17 |    �    | END OF TRANSMISSION                     | U+0017  |
|       Z-18 |    �    | CANCEL                                  | U+0018  |
|       Z-19 |    �    | END OF MEDIUM                           | U+0019  |
|       Z-1A |    �    | SUBSTITUTE                              | U+001A  |
|       Z-1B |    �    | ESCAPE                                  | U+001B  |
|       Z-1C |    �    | FILE SEPARATOR                          | U+001C  |
|       Z-1D |    �    | GROUP SEPARATOR                         | U+001D  |
|       Z-1E |    �    | RECORD SEPARATOR                        | U+001E  |
|       Z-1F |    �    | UNIT SEPARATOR                          | U+001F  |
|       Z-20 |          | SPACE                                   | U+0020  |
|       Z-21 |    !     | EXCLAMATION MARK                        | U+0021  |
|       Z-22 |    "     | QUOTATION MARK                          | U+0022  |
|       Z-23 |    #     | NUMBER SIGN                             | U+0023  |
|       Z-24 |    $     | DOLLAR SIGN                             | U+0024  |
|       Z-25 |    %     | PERCENT SIGN                            | U+0025  |
|       Z-26 |    &     | AMPERSAND                               | U+0026  |
|       Z-27 |    '     | APOSTROPHE                              | U+0027  |
|       Z-28 |    (     | LEFT PARENTHESIS                        | U+0028  |
|       Z-29 |    )     | RIGHT PARENTHESIS                       | U+0029  |
|       Z-2A |    *     | ASTERISK                                | U+002A  |
|       Z-2B |    +     | PLUS SIGN                               | U+002B  |
|       Z-2C |    ,     | COMMA                                   | U+002C  |
|       Z-2D |    -     | HYPHEN-MINUS                            | U+002D  |
|       Z-2E |    .     | FULL STOP                               | U+002E  |
|       Z-2F |    /     | SOLIDUS                                 | U+002F  |
|       Z-30 |    0     | DIGIT ZERO                              | U+0030  |
|       Z-31 |    1     | DIGIT ONE                               | U+0031  |
|       Z-32 |    2     | DIGIT TWO                               | U+0032  |
|       Z-33 |    3     | DIGIT THREE                             | U+0033  |
|       Z-34 |    4     | DIGIT FOUR                              | U+0034  |
|       Z-35 |    5     | DIGIT FIVE                              | U+0035  |
|       Z-36 |    6     | DIGIT SIX                               | U+0036  |
|       Z-37 |    7     | DIGIT SEVEN                             | U+0037  |
|       Z-38 |    8     | DIGIT EIGHT                             | U+0038  |
|       Z-39 |    9     | DIGIT NINE                              | U+0039  |
|       Z-3A |    :     | COLON                                   | U+003A  |
|       Z-3B |    ;     | SEMICOLON                               | U+003B  |
|       Z-3C |    <     | LESS-THAN SIGN                          | U+003C  |
|       Z-3D |    =     | EQUALS SIGN                             | U+003D  |
|       Z-3E |    >     | GREATER-THAN SIGN                       | U+003E  |
|       Z-3F |    ?     | QUESTION MARK                           | U+003F  |
|       Z-40 |    @     | COMMERCIAL AT                           | U+0040  |
|       Z-41 |    A     | LATIN CAPITAL LETTER A                  | U+0041  |
|       Z-42 |    B     | LATIN CAPITAL LETTER B                  | U+0042  |
|       Z-43 |    C     | LATIN CAPITAL LETTER C                  | U+0043  |
|       Z-44 |    D     | LATIN CAPITAL LETTER D                  | U+0044  |
|       Z-45 |    E     | LATIN CAPITAL LETTER E                  | U+0045  |
|       Z-46 |    F     | LATIN CAPITAL LETTER F                  | U+0046  |
|       Z-47 |    G     | LATIN CAPITAL LETTER G                  | U+0047  |
|       Z-48 |    H     | LATIN CAPITAL LETTER H                  | U+0048  |
|       Z-49 |    I     | LATIN CAPITAL LETTER I                  | U+0049  |
|       Z-4A |    J     | LATIN CAPITAL LETTER J                  | U+004A  |
|       Z-4B |    K     | LATIN CAPITAL LETTER K                  | U+004B  |
|       Z-4C |    L     | LATIN CAPITAL LETTER L                  | U+004C  |
|       Z-4D |    M     | LATIN CAPITAL LETTER M                  | U+004D  |
|       Z-4E |    N     | LATIN CAPITAL LETTER N                  | U+004E  |
|       Z-4F |    O     | LATIN CAPITAL LETTER O                  | U+004F  |
|       Z-50 |    P     | LATIN CAPITAL LETTER P                  | U+0050  |
|       Z-51 |    Q     | LATIN CAPITAL LETTER Q                  | U+0051  |
|       Z-52 |    R     | LATIN CAPITAL LETTER R                  | U+0052  |
|       Z-53 |    S     | LATIN CAPITAL LETTER S                  | U+0053  |
|       Z-54 |    T     | LATIN CAPITAL LETTER T                  | U+0054  |
|       Z-55 |    U     | LATIN CAPITAL LETTER U                  | U+0055  |
|       Z-56 |    V     | LATIN CAPITAL LETTER V                  | U+0056  |
|       Z-57 |    W     | LATIN CAPITAL LETTER W                  | U+0057  |
|       Z-58 |    X     | LATIN CAPITAL LETTER X                  | U+0058  |
|       Z-59 |    Y     | LATIN CAPITAL LETTER Y                  | U+0059  |
|       Z-5A |    Z     | LATIN CAPITAL LETTER Z                  | U+005A  |
|       Z-5B |    [     | LEFT SQUARE BRACKET                     | U+005B  |
|       Z-5C |    \\    | REVERSE SOLIDUS                         | U+005C  |
|       Z-5D |    ]     | RIGHT SQUARE BRACKET                    | U+005D  |
|       Z-5E |    ^     | CIRCUMFLEX ACCENT                       | U+005E  |
|       Z-5F |    _     | LOW LINE                                | U+005F  |
|       Z-60 |    \`    | GRAVE ACCENT                            | U+0060  |
|       Z-61 |    a     | LATIN SMALL LETTER A                    | U+0061  |
|       Z-62 |    b     | LATIN SMALL LETTER B                    | U+0062  |
|       Z-63 |    c     | LATIN SMALL LETTER C                    | U+0063  |
|       Z-64 |    d     | LATIN SMALL LETTER D                    | U+0064  |
|       Z-65 |    e     | LATIN SMALL LETTER E                    | U+0065  |
|       Z-66 |    f     | LATIN SMALL LETTER F                    | U+0066  |
|       Z-67 |    g     | LATIN SMALL LETTER G                    | U+0067  |
|       Z-68 |    h     | LATIN SMALL LETTER H                    | U+0068  |
|       Z-69 |    i     | LATIN SMALL LETTER I                    | U+0069  |
|       Z-6A |    j     | LATIN SMALL LETTER J                    | U+006A  |
|       Z-6B |    k     | LATIN SMALL LETTER K                    | U+006B  |
|       Z-6C |    l     | LATIN SMALL LETTER L                    | U+006C  |
|       Z-6D |    m     | LATIN SMALL LETTER M                    | U+006D  |
|       Z-6E |    n     | LATIN SMALL LETTER N                    | U+006E  |
|       Z-6F |    o     | LATIN SMALL LETTER O                    | U+006F  |
|       Z-70 |    p     | LATIN SMALL LETTER P                    | U+0070  |
|       Z-71 |    q     | LATIN SMALL LETTER Q                    | U+0071  |
|       Z-72 |    r     | LATIN SMALL LETTER R                    | U+0072  |
|       Z-73 |    s     | LATIN SMALL LETTER S                    | U+0073  |
|       Z-74 |    t     | LATIN SMALL LETTER T                    | U+0074  |
|       Z-75 |    u     | LATIN SMALL LETTER U                    | U+0075  |
|       Z-76 |    v     | LATIN SMALL LETTER V                    | U+0076  |
|       Z-77 |    w     | LATIN SMALL LETTER W                    | U+0077  |
|       Z-78 |    x     | LATIN SMALL LETTER X                    | U+0078  |
|       Z-79 |    y     | LATIN SMALL LETTER Y                    | U+0079  |
|       Z-7A |    z     | LATIN SMALL LETTER Z                    | U+007A  |
|       Z-7B |    {     | LEFT CURLY BRACKET                      | U+007B  |
|       Z-7C |  &#x7C;  | VERTICAL LINE                           | U+007C  |
|       Z-7D |    }     | RIGHT CURLY BRACKET                     | U+007D  |
|       Z-7E |    _     | TILDE                                   | U+007E  |
|       Z-7F |    �    | DELETE                                  | U+007F  |
|       Z-80 |    �    | PADDING CHARACTER                       | U+0080  |
|       Z-81 |    �    | HIGH OCTET PRESET                       | U+0081  |
|       Z-82 |    �    | BREAK PERMITTED HERE                    | U+0082  |
|       Z-83 |    �    | NO BREAK HERE                           | U+0083  |
|       Z-84 |    �    | INDEX                                   | U+0084  |
|       Z-85 |    �    | NEXT LINE                               | U+0085  |
|       Z-86 |    �    | START OF SELECTED AREA                  | U+0086  |
|       Z-87 |    �    | END OF SELECTED AREA                    | U+0087  |
|       Z-88 |    �    | CHARACTER TABULATION SET                | U+0088  |
|       Z-89 |    �    | CHARACTER TABULATION WITH JUSTIFICATION | U+0089  |
|       Z-8A |    �    | LINE TABULATION SET                     | U+008A  |
|       Z-8B |    �    | PARTIAL LINE FORWARD                    | U+008B  |
|       Z-8C |    �    | PARTIAL LINE BACKWARD                   | U+008C  |
|       Z-8D |    �    | REVERSE LINE FEED                       | U+008D  |
|       Z-8E |    �    | SINGLE-SHIFT TWO                        | U+008E  |
|       Z-8F |    �    | SINGLE-SHIFT THREE                      | U+008F  |
|       Z-90 |    �    | DEVICE CONTROL STRING                   | U+0090  |
|       Z-91 |    �    | PRIVATE USE 1                           | U+0091  |
|       Z-92 |    �    | PRIVATE USE 2                           | U+0092  |
|       Z-93 |    �    | SET TRANSMIT STATE                      | U+0093  |
|       Z-94 |    �    | CANCEL CHARACTER                        | U+0094  |
|       Z-95 |    �    | MESSAGE WAITING                         | U+0095  |
|       Z-96 |    �    | START OF PROTECTED AREA                 | U+0096  |
|       Z-97 |    �    | END OF PROTECTED AREA                   | U+0097  |
|       Z-98 |    �    | START OF STRING                         | U+0098  |
|       Z-99 |    �    | SINGLE GRAPHIC CHARACTER INTRODUCER     | U+0099  |
|       Z-9A |    �    | SINGLE CHARACTER INTRODUCER             | U+009A  |
|       Z-9B |    �    | CONTROL SEQUENCE INTRODUCER             | U+009B  |
|       Z-9C |    �    | STRING TERMINATOR                       | U+009C  |
|       Z-9D |    �    | OPERATING SYSTEM COMMAND                | U+009D  |
|       Z-9E |    �    | PRIVATE MESSAGE                         | U+009E  |
|       Z-9F |    �    | APPLICATION PROGRAM COMMAND             | U+009F  |
|       Z-A0 |    �    |                                         | U+XXXX  |
|       Z-A1 |    �    |                                         | U+XXXX  |
|       Z-A2 |    �    |                                         | U+XXXX  |
|       Z-A3 |    �    |                                         | U+XXXX  |
|       Z-A4 |    �    |                                         | U+XXXX  |
|       Z-A5 |    �    |                                         | U+XXXX  |
|       Z-A6 |    �    |                                         | U+XXXX  |
|       Z-A7 |    �    |                                         | U+XXXX  |
|       Z-A8 |    �    |                                         | U+XXXX  |
|       Z-A9 |    �    |                                         | U+XXXX  |
|       Z-AA |    �    |                                         | U+XXXX  |
|       Z-AB |    �    |                                         | U+XXXX  |
|       Z-AC |    �    |                                         | U+XXXX  |
|       Z-AD |    �    |                                         | U+XXXX  |
|       Z-AE |    �    |                                         | U+XXXX  |
|       Z-AF |    �    |                                         | U+XXXX  |
|       Z-B0 |    �    |                                         | U+XXXX  |
|       Z-B1 |    �    |                                         | U+XXXX  |
|       Z-B2 |    �    |                                         | U+XXXX  |
|       Z-B3 |    �    |                                         | U+XXXX  |
|       Z-B4 |    �    |                                         | U+XXXX  |
|       Z-B5 |    �    |                                         | U+XXXX  |
|       Z-B6 |    �    |                                         | U+XXXX  |
|       Z-B7 |    �    |                                         | U+XXXX  |
|       Z-B8 |    �    |                                         | U+XXXX  |
|       Z-B9 |    �    |                                         | U+XXXX  |
|       Z-BA |    �    |                                         | U+XXXX  |
|       Z-BB |    �    |                                         | U+XXXX  |
|       Z-BC |    �    |                                         | U+XXXX  |
|       Z-BD |    �    |                                         | U+XXXX  |
|       Z-BE |    �    |                                         | U+XXXX  |
|       Z-BF |    �    |                                         | U+XXXX  |
|       Z-C0 |    �    |                                         | U+XXXX  |
|       Z-C1 |    �    |                                         | U+XXXX  |
|       Z-C2 |    �    |                                         | U+XXXX  |
|       Z-C3 |    �    |                                         | U+XXXX  |
|       Z-C4 |    �    |                                         | U+XXXX  |
|       Z-C5 |    �    |                                         | U+XXXX  |
|       Z-C6 |    �    |                                         | U+XXXX  |
|       Z-C7 |    �    |                                         | U+XXXX  |
|       Z-C8 |    �    |                                         | U+XXXX  |
|       Z-C9 |    �    |                                         | U+XXXX  |
|       Z-CA |    �    |                                         | U+XXXX  |
|       Z-CB |    �    |                                         | U+XXXX  |
|       Z-CC |    �    |                                         | U+XXXX  |
|       Z-CD |    �    |                                         | U+XXXX  |
|       Z-CE |    �    |                                         | U+XXXX  |
|       Z-CF |    �    |                                         | U+XXXX  |
|       Z-D0 |    �    |                                         | U+XXXX  |
|       Z-D1 |    �    |                                         | U+XXXX  |
|       Z-D2 |    �    |                                         | U+XXXX  |
|       Z-D3 |    �    |                                         | U+XXXX  |
|       Z-D4 |    �    |                                         | U+XXXX  |
|       Z-D5 |    �    |                                         | U+XXXX  |
|       Z-D6 |    �    |                                         | U+XXXX  |
|       Z-D7 |    �    |                                         | U+XXXX  |
|       Z-D8 |    �    |                                         | U+XXXX  |
|       Z-D9 |    �    |                                         | U+XXXX  |
|       Z-DA |    �    |                                         | U+XXXX  |
|       Z-DB |    �    |                                         | U+XXXX  |
|       Z-DC |    �    |                                         | U+XXXX  |
|       Z-DD |    �    |                                         | U+XXXX  |
|       Z-DE |    �    |                                         | U+XXXX  |
|       Z-DF |    �    |                                         | U+XXXX  |
|       Z-E0 |    �    |                                         | U+XXXX  |
|       Z-E1 |    �    |                                         | U+XXXX  |
|       Z-E2 |    �    |                                         | U+XXXX  |
|       Z-E3 |    �    |                                         | U+XXXX  |
|       Z-E4 |    �    |                                         | U+XXXX  |
|       Z-E5 |    �    |                                         | U+XXXX  |
|       Z-E6 |    �    |                                         | U+XXXX  |
|       Z-E7 |    �    |                                         | U+XXXX  |
|       Z-E8 |    �    |                                         | U+XXXX  |
|       Z-E9 |    �    |                                         | U+XXXX  |
|       Z-EA |    �    |                                         | U+XXXX  |
|       Z-EB |    �    |                                         | U+XXXX  |
|       Z-EC |    �    |                                         | U+XXXX  |
|       Z-ED |    �    |                                         | U+XXXX  |
|       Z-EE |    �    |                                         | U+XXXX  |
|       Z-EF |    �    |                                         | U+XXXX  |
|       Z-F0 |    �    |                                         | U+XXXX  |
|       Z-F1 |    �    |                                         | U+XXXX  |
|       Z-F2 |    �    |                                         | U+XXXX  |
|       Z-F3 |    �    |                                         | U+XXXX  |
|       Z-F4 |    �    |                                         | U+XXXX  |
|       Z-F5 |    �    |                                         | U+XXXX  |
|       Z-F6 |    �    |                                         | U+XXXX  |
|       Z-F7 |    �    |                                         | U+XXXX  |
|       Z-F8 |    �    |                                         | U+XXXX  |
|       Z-F9 |    �    |                                         | U+XXXX  |
|       Z-FA |    �    |                                         | U+XXXX  |
|       Z-FB |    �    |                                         | U+XXXX  |
|       Z-FC |    �    |                                         | U+XXXX  |
|       Z-FD |    �    |                                         | U+XXXX  |
|       Z-FE |    �    |                                         | U+XXXX  |
|       Z-FF |    �    |                                         | U+XXXX  |
