# Jästūgā | BJMNS

## Jästūgā to English Dictionary for Browsers (outdated)

Download the HTML Dictionary file and open "Main.html". Mozilla Firefox recommended (v.12+); not tested in other browsers.

Note that the HTML Dictionary file is outdated, and some definitions may be slightly inaccurate. Pronouns, for example, are completely messed up.

For more accurate data, you can download the Apple Dictionary file and open "wrapper.html", although it lacks organization.

## Jästūgā to English Dictionary for Mac

Supports searching by English (for example, searching "sweet" returns "dōjiydō")

Requires the Apple Dictionary Development Kit (free)

### Installation Instructions:

1. Get the Dictionary Development Kit from Apple, if you don't already have it. It's kinda a pain to get. Go to the [Apple Developer Downloads site](http://developer.apple.com/downloads) and download the Auxiliary Tools for Xcode (You'll need an Apple ID and password). The Dictionary Development Kit isn't listed in the description but should be inside the dmg. I put everything in /Developer/Extras.
2. If the location of the Dictionary Development Kit _isn't_ /Developer/Extras/Dictionary Development Kit, you'll need to open Makefile and change `DICT_BUILD_TOOL_DIR` to the location of the Kit.
3. Open Terminal, and `cd` the Apple Dictionary directory.
4. Type `make` to build the dictionary (in ./objects), `make install` to install the dictionary in /Users/~/Library/Dictionaries, `make clean` to delete the ./objects folder.
5. Open Dictionary.app – Jästūgā should be there!

---

To the extent possible under law, Benjamin Shoemake has waived all copyright and related or neighboring rights to this work. This work was published from the United States.