#  CLASSICAL SEVENSI XII :: GRAMMAR  #

The definitions of CLASSICAL SEVENSI grammars have been split into several levels of increasing complexity.
Each level is a superset of those which came before, introducing new parts of speech, allowed constructions, or conceptual components on top of the previous.

The levels are listed below:

|  Level         |  Key concepts                                      |
| :------------: | :------------------------------------------------- |
|  [I](01.md)    |  Verbals; nominals; sentences                      |
|  [II](02.md)   |  Determiners; adjectival nouns; serial verbs       |
|  [III](03.md)  |  Conjugation; infinitives; adverbals               |
|  [IV](04.md)   |  Relative clauses; adpositions                     |
|  [V](05.md)    |  Other clauses; conjunctions                       |
|  [VI](06.md)   |  Pro-forms; numbers; names                         |

Grammatical constructions are given using [ABNF syntax](https://tools.ietf.org/html/rfc5234), with the understanding that rules are non-exhaustive.
When possible, function should be prioritized over form, such that if a rule calls for a nominal phrase, any construct functioning as a nominal phrase should be considered applicable, not solely those matching the forms already defined.

Symbols which are written in uppercase (eg, `S` or `NP`) are given definitions within these grammars, while symbols which are written in lowercase (eg, `noun` or `det`) are words as classified according to the CLASSICAL SEVENSI XII lexis.
All uppercase symbols can be expanded into a set of strings of lowercase ones.

The complete list of word classes is as follows:

|   Symbol   |  Meaning             |
| :--------: | :------------------- |
|   `adjn`   |  adjectival noun     |
|   `art`    |  article             |
|   `det`    |  determiner          |
|   `noun`   |  noun                |
|  `verb1`   |  intransitive verb   |
|  `verb2`   |  transitive verb     |

Note that these classes are not mutually exclusive; for example, adjectival nouns are clearly nouns.
