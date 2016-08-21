#  CLASSICAL SEVENSI XII :: ABNF  #

This document contains the complete ABNF specification for the grammar of CLASSICAL SEVENSI XII.

```
S     =  V / N               ; sentence
V     =  VP                  ; verbal
VP    =  VP1 / VP2 / SVP     ; verbal phrase
VP1   =  SUBJ verb1          ; intransitive verbal phrase
VP2   =  SUBJ OBJ verb2      ; transitive verbal phrase
SVP   =  VP2 verb1           ; serialized verbal phrase
SUBJ  =  N                   ; subject
OBJ   =  N                   ; object
N     =  NP                  ; nominal
NP    =  [art] *det          ; nominal phrase
         noun *adjn
```
