/* jslint asi:true, browser:true */
/* globals Lexis */

var Dictionaries = {
    "svi-proto": "../lexis/jsv/0009/",  //  depreciated; use jsv-0009 where possible
    "svi-0009": "../lexis/jsv/0009/",  //  depreciated; use jsv-0009 where possible
    "jsv-0009": "../lexis/jsv/0009/",
    "osv-0009": "../lexis/jsv/osv/0009/",
    "fiz-1der": "../lexis/fzn/fiz/1der/",
    "fiz-2der": "../lexis/fzn/fiz/2der/",
    "fiz-release": "../lexis/fzn/fiz/release/",
    "fiz-final": "../lexis/fzn/fiz/final/"
}

function getQuery(name) {
    var i;
    var j;
    var q = decodeURIComponent(window.location.search);
    if (!q) q = "?";
    i = q.indexOf("?" + name + "=");
    if (i === -1) i = q.indexOf("&" + name + "=");
    if (i === -1) return undefined;
    i += name.length + 2;
    j = q.indexOf("&", i);
    if (j === -1) return q.substring(i);
    else return q.substring(i, j);
}

function handleQuery(e) {
    var d = getQuery("dictionary");
    if (d && Dictionaries[d]) Lexis.Viewer.load(Dictionaries[d]);
    else Lexis.Viewer.load("index.xml");
}

window.addEventListener("load", handleQuery, false);
