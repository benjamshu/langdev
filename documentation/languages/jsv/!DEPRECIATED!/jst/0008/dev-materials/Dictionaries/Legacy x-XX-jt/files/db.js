/* Main Database */
var dispList = new Array();
var wordList = new Array();
var tagList = {
	people: new Array(),
	body_parts: new Array(),
	clothing: new Array(),
	biorythms: new Array(),
	sight: new Array(),
	touch: new Array(),
	taste: new Array(),
	smell: new Array(),
	hearing: new Array(),
	emotions: new Array(),
	life: new Array(),
	abstracts: new Array(),
	lang: new Array(),
	time: new Array(),
	numbers: new Array(),
	submat: new Array(),
	easky: new Array(),
	natoc: new Array(),
	names: new Array(),
	qualcon: new Array(),
	locn: new Array(),
	pron: new Array(),
	exp: new Array(),
	anim: new Array(),
	plant: new Array(),
	food: new Array(),
	tool: new Array(),
	jwlry: new Array(),
	inst: new Array(),
	build: new Array(),
	dist: new Array(),
	art: new Array(),
	yn: new Array(),
	conj: new Array(),
	mod: new Array(),
	tense: new Array(),
	mood: new Array(),
	article: new Array(),
	excl: new Array(),
	prep: new Array(),
	verb: new Array(),
};

function wordFilter() {
	var f = document.getElementById("filters").value
	if (f === "all") dispList = wordList.sort(nameSort);
	else dispList = tagList[f].sort(nameSort);
	document.getElementById("dictContent").innerHTML = "<tr class='empty'></tr>";
	for (i=0; i<dispList.length; i++) {
		document.getElementById("dictContent").appendChild(dispList[i].tableData);
	}
	document.getElementById("dictContent").innerHTML += "<tr class='empty'></tr>"
	document.getElementById("wordCount").innerHTML = "Number of words shown:&nbsp;&nbsp;"+dispList.length;
}

function Word(name, etymology, meaning, tag)  {
	this.name = name;
	this.etymology = "["+etymology+"]";
	this.meaning = meaning;
	this.tag = tag;
	this.tableData = document.createElement("tr");
	this.tableData.innerHTML = "<td><dfn lang='x-XX-jt'>"+this.name+"</dfn></td><td>"+this.etymology+"</td><td class='def'>"+this.meaning+"</td>";
	this.sort = "";
}

function nameSort(word1, word2) {
	var name1 = word1.sort;
	var name2 = word2.sort;
	if (name1 < name2) return -1;
	else return 1;
};

var categorize = function(word) {
	wordList[wordList.length] = word;
	tagList[word.tag][tagList[word.tag].length] = word;
	var caseLtr;
	for (i=0; i<word.name.length; i++) {
		switch (word.name[i]) {

			case "ä":
				caseLtr = "a";
				break;

			case "ā":
				caseLtr = "a";
				break;

			case "æ":
				caseLtr = "ae";
				break;

			case "ꜵ":
				caseLtr = "ao";
				break;

			case "ē":
				caseLtr = "e";
				break;

			case "ħ":
				caseLtr = "h";
				break;

			case "ī":
				caseLtr = "i";
				break;

			case "œ":
				caseLtr = "oe";
				break;

			case "ə":
				caseLtr = "u";
				break;

			case "ʒ":
				caseLtr = "z";
				break;

			case "1":
				if (word.name[i+1] === "0") caseLtr = "8";
				else caseLtr = "1";
				break;

			default:
				caseLtr = word.name[i];
				break;

		};
		word.sort = word.sort + caseLtr;
	}
};

// categorize(new Word("æt", "VII sæd + dāt", "(of a female) Virgin", "people"));
categorize(new Word("dāhätso", "VII dāhatso", "Gatherer", "people"));
categorize(new Word("dātäd", "VII dātād", "Friend", "people"));
categorize(new Word("dogotād", "VII dowä + tuæd, 'strong person'", "Adult", "people"));
categorize(new Word("dowätu", "VII", "Baby", "people"));
categorize(new Word("hätvē", "VII howē, 'create'", "Craftsman", "people"));
categorize(new Word("hodowä", "VII", "Leader", "people"));
categorize(new Word("jāstugā", "VIII jāstulæ, from VII jäsāto + tuædl, 'speaking people'", "1.  (archaic) Speaker<br />2.  The Language", "people"));
categorize(new Word("judænted", "VIII jundænted, from VII juädosā + sæted, 'loving woman'", "Caretaker", "people"));
categorize(new Word("otfähud", "VII hotsähē + tuædl, 'crab people'", "Mute", "people"));
categorize(new Word("sænted", "VIII sæntid, from VII sæted", "Woman", "people"));
categorize(new Word("tāħätœ", "VII", "Guardian", "people"));
categorize(new Word("tātä", "VIII tāhätœ", "Army", "people"));
categorize(new Word("tꜵtsā", "VII tautsē", "Hunter", "people"));
categorize(new Word("totādo", "VII totæd + dā, 'fast child'", "Older child", "people"));
categorize(new Word("toted", "VIII totid, from VII totæd", "Young child", "people"));
categorize(new Word("toʒutā", "VII towu + switād, 'small man'", "Young adult", "people"));
categorize(new Word("tuād (1)", "VII tuæd", "Person", "people"));
categorize(new Word("tudävä", "VII tudāwä", "Elder", "people"));
categorize(new Word("ʒeted", "VIII ʒitid, from VII switād", "Man", "people"));
categorize(new Word("dädhē", "VII däwdhī", "Neck/Throat", "body_parts"));
categorize(new Word("dājofoto", "VII dāoso + jäsāto, 'takes speech'", "Ear", "body_parts"));
categorize(new Word("dāodwā", "VII dā'o + dowā, 'go strong'", "Spine", "body_parts"));
categorize(new Word("dāəsāso", "VII dā'o + həsäso, 'goes back'", "Joints", "body_parts"));
categorize(new Word("dotädo", "VII", "Head", "body_parts"));
categorize(new Word("dotovī", "VII dotädo + owī, 'head owī'", "Nose", "body_parts"));
categorize(new Word("dovätħī", "VII dowä + tähādī, 'big side'", "Hip", "body_parts"));
categorize(new Word("dowāħē", "VII dowa+hā'ē, 'great life'", "Heart", "body_parts"));
// categorize(new Word("edæn", "VIII nedæ, from VII sæted", "Female breast", "body_parts"));
categorize(new Word("hādosī", "VII", "Eye", "body_parts"));
categorize(new Word("hādoso", "VII ħā'o + dāso", "Blood", "body_parts"));
categorize(new Word("ħāfohē", "VIII ħæfohē, from VII ħœtsohē", "Chest/Torso", "body_parts"));
categorize(new Word("hāsutmā", "VII hāso + sat'wā 'front of arm'", "Shoulder", "body_parts"));
categorize(new Word("hāto", "VII", "Hair", "body_parts"));
categorize(new Word("hopājo", "VII hotad + jāso, 'ground touch'", "Foot", "body_parts"));
categorize(new Word("hopəsāto", "VII howē + jäsāto, 'speech maker'", "Lung", "body_parts"));
categorize(new Word("ħosuād", "VII hosāso + tuæd, 'rock body'", "Bone", "body_parts"));
categorize(new Word("ovītfē", "VII owī+otsē, 'sharp eater'", "Tooth", "body_parts"));
categorize(new Word("sādo", "VII sā'do", "Leg", "body_parts"));
categorize(new Word("sätꜵsā", "VII sä'täusē", "Meat/Flesh", "body_parts"));
// categorize(new Word("säthāē", "VII sä'täusē + hā'ē, 'lifemeat'", "Placenta", "body_parts"));
categorize(new Word("sods", "VII so + odso, 'that which drinks'", "Tongue", "body_parts"));
categorize(new Word("sojā", "VII so + jāso, 'that which touches'", "Finger", "body_parts"));
categorize(new Word("somə", "VII sodā", "Skin", "body_parts"));
categorize(new Word("səhowē", "VII so + howē, 'that which creates'", "Hand", "body_parts"));
categorize(new Word("səwā", "VIII sawā, from VII sat'wā", "Arm", "body_parts"));
categorize(new Word("tuād (2)", "VII tuæd", "Body", "body_parts"));
// categorize(new Word("zætowu", "VII sæd + towu, 'female weakness'", "Female reproductive system, esp. vulva", "body_parts"));
// categorize(new Word("ʒœto", "VII sœt", "Male reproductive system, esp. penis", "body_parts"));
categorize(new Word("zotsē", "VII sotsē", "Mouth", "body_parts"));
categorize(new Word("əsoto", "VIII asoto, from VII dasīto", "Pants", "clothing"));
categorize(new Word("dätoso", "VII dotäsā", "Shoes", "clothing"));
categorize(new Word("domodä", "VII dosoä", "Shirt", "clothing"));
categorize(new Word("dətädā", "VII ddotädā", "Hat", "clothing"));
categorize(new Word("jätādə", "VII säte + dotädā, 'animal hat'", "Mask", "clothing"));
categorize(new Word("todā", "VII todæ", "Clothing", "clothing"));
categorize(new Word("dāfuso", "VII dāso + tuso, 'water need'", "Thirst", "biorythms"));
categorize(new Word("dotogä", "VIII dotolvä, from VII dotowā, 'to sleep'", "Sleep", "biorythms"));
categorize(new Word("josət", "VII däusət + hotsə", "Waste elimination", "biorythms"));
// categorize(new Word("sænäʒē", "VII sædhā + ätē, 'moon sickness'", "Menstration", "biorythms"));
categorize(new Word("sētgē", "VII sēt + tēdsī, 'food pain'", "Hunger", "biorythms"));
categorize(new Word("bīfeut", "VII towu + hīätsē, 'berry'", "Purple", "sight"));
categorize(new Word("dāhētə (1)", "VII", "Transparent/Translucent", "sight"));
categorize(new Word("dwīmet", "VII dowīet", "Brown", "sight"));
categorize(new Word("fozē", "VII howosē", "Vision", "sight"));
categorize(new Word("hīə", "VIII hīa, from VII hīat", "Green", "sight"));
categorize(new Word("hīfə", "VII ħīha", "Light", "sight"));
categorize(new Word("jꜵtə", "VII daotə", "Blue", "sight"));
categorize(new Word("mꜵt", "VII ətäut", "Grey", "sight"));
categorize(new Word("ətꜵ", "VII utꜵt", "Dark/Black", "sight"));
categorize(new Word("ʒꜵ", "VII dꜵsē", "Red/Yellow/Orange", "sight"));
categorize(new Word("ʒændā", "VII sædhā", "White", "sight"));
categorize(new Word("hofäsē", "VII hotsäsē", "Feeling (physical)", "touch"));
categorize(new Word("tedsī", "VII tēdsī", "Pain", "touch"));
categorize(new Word("dātīt", "VII dātītsē", "Sourness", "taste"));
categorize(new Word("dojīdo", "VII däwdhī + dosā'o, 'throat feelings'", "Sweetness", "taste"));
categorize(new Word("jowäset", "VII dowäso + sēt, 'ocean food'", "Saltiness", "taste"));
categorize(new Word("pꜵfē", "VII sotsē + dꜵsē, 'mouth fire'", "Hotness (spiciness)", "taste"));
categorize(new Word("sofēʒī", "VII sotsē + tēdsī, 'tongue pain'", "Bitterness", "taste"));
categorize(new Word("ojīs", "VII owī + dosā'o, 'nose emotions'", "Scent", "smell"));
categorize(new Word("dopäjē", "VII dotädo + tēdsī, 'head pain'", "Loud", "hearing"));
categorize(new Word("foʒuso", "VII towu + tēdsī, 'weak voice'", "Quiet", "hearing"));
categorize(new Word("zāpā", "VII jäsāto", "Noise", "hearing"));
categorize(new Word("ʒäsā", "VII jäsāto", "Speech", "hearing"));
categorize(new Word("pomä", "No direct ancestors, influenced by VII dosā'ā and jäsāto", "Music", "hearing"));
categorize(new Word("ʒāo", "VII dosā'o", "Emotion", "emotions"));
categorize(new Word("dodā", "VII", "Happiness", "emotions"));
categorize(new Word("topā", "VII dotāt", "Anger", "emotions"));
categorize(new Word("ħœfo", "VII ħo'to", "Sadness", "emotions"));
categorize(new Word("hotäjo", "VII hosāso + dotädo", "Frustration", "emotions"));
categorize(new Word("hozīd", "VII hosīd", "Love, between friends or family", "emotions"));
categorize(new Word("jumændosā", "VIII numädosā, from VII juädosā", "Awe; love of art/beauty", "emotions"));
categorize(new Word("mowā", "VII dowæt", "Calmness/Peacefulness", "emotions"));
categorize(new Word("ʒꜵjə", "VII dꜵsē + dodsā", "Passion", "emotions"));
categorize(new Word("dāosē", "VII dā + dæsī", "Mental energy/Exitement", "emotions"));
categorize(new Word("hämē", "VII hā'ē", "Life", "life"));
categorize(new Word("fäē", "VII täh'ē", "Death", "life"));
categorize(new Word("däħmē", "VII däħē", "Livingness/Healthiness", "life"));
categorize(new Word("täħē", "VII täħ'ē", "Deadness/Lack of life", "life"));
categorize(new Word("ätē", "VII", "Sickness", "life"));
categorize(new Word("fedso", "VII tēdsī + so, 'pain thing'", "Injury", "life"));
categorize(new Word("jo", "VII dāt + so", "Right", "abstracts"));
categorize(new Word("zäfo", "VII tāt + so", "Wrong", "abstracts"));
categorize(new Word("dävo", "VII dꜵwä", "Knowledge/Wisdom", "abstracts"));
categorize(new Word("jꜵvə", "VII dowä", "Power", "abstracts"));
categorize(new Word("soʒumäd", "VII so + juädosā", "Beauty", "abstracts"));
categorize(new Word("hosē", "VII hosīd", "Trust", "abstracts"));
categorize(new Word("dāgꜵwə", "VII dāt + dæwä", "Hope", "abstracts"));
categorize(new Word("doteħvo", "VII dowä + totehħo", "Courage", "abstracts"));
categorize(new Word("toʒutsā", "VII towu + jäsāto, 'small speech'", "Word", "lang"));
categorize(new Word("doʒāto", "VII dowä + jasāto", "Statement", "lang"));
categorize(new Word("pœt", "No direct ancestors", "A moment; also, time", "time"));
categorize(new Word("hœpə", "VII hīhä", "Day, esp. midday", "time"));
categorize(new Word("zænʒā", "VII sædhā", "Night", "time"));
categorize(new Word("ædæ", "VII sædhā + hā'ē, 'moon life'", "Month", "time"));
categorize(new Word("dovītə", "VII dowätu + ħīhä, 'baby sun'", "Morning", "time"));
categorize(new Word("fəmovə", "VII tudowu + ħīhä, 'old sun'", "Evening", "time"));
categorize(new Word("səpœ", "VIII sapœ, from VII sat + VIII pœt", "The current time; the present", "time"));
categorize(new Word("ʒœt", "VII so + VIII pœt", "A later time; the future", "time"));
categorize(new Word("pəsä", "VII pœt + səsä", "A previous time; the past", "time"));
categorize(new Word("1 - ʒo", "VII so", "One", "numbers"));
categorize(new Word("2 - mos", "VIII los, from VII sol, 'things'", "Two", "numbers"));
categorize(new Word("3 - goju", "VIII ʒols, from VII so + sol", "Three", "numbers"));
categorize(new Word("4 - zävā", "VII sat'wā, 'hand'", "Four", "numbers"));
categorize(new Word("5 - wāt", "VIII wālt, from VIII zālt, from VII sol", "Five", "numbers"));
categorize(new Word("6 - spo", "VII sol", "Six", "numbers"));
categorize(new Word("7 - jät", "VIII ʒät, from VII sol", "Seven", "numbers"));
categorize(new Word("10 - sænto", "VIII säntol, from VII sat'wāl, 'hands'", "Eight", "numbers"));
categorize(new Word("dāso", "VII", "Water", "submat"));
categorize(new Word("vemet", "VIII vimet, from VII dowiet", "Wood", "submat"));
categorize(new Word("pozäso", "VII hosāso", "Rock/Stone", "submat"));
categorize(new Word("pozə", "VII hotsə", "Ground", "submat"));
categorize(new Word("dꜵsē", "VII", "Fire", "submat"));
categorize(new Word("dozə", "VII dowä + hosāso, 'strong rock'", "Metal", "submat"));
categorize(new Word("tovuso", "VII towu + hosāso", "Clay", "submat"));
categorize(new Word("dꜵtə", "VII", "Sky", "easky"));
categorize(new Word("ħītə", "VII ħīhä", "Moon", "easky"));
categorize(new Word("toväē", "VII towā'ē", "Star", "easky"));
categorize(new Word("hoʒā", "VII hotsā", "Land", "easky"));
categorize(new Word("tudāso", "VII", "River/Creek", "easky"));
categorize(new Word("dœväso", "VII dowäso", "Large body of water", "easky"));
categorize(new Word("towudo", "VII towu + dāso, 'small water'", "Smaller body of water", "easky"));
categorize(new Word("dowätsā", "VII dowä + hotsā, 'great land'", "Mountains", "easky"));
categorize(new Word("tovutzā", "VII towu + hotsā, 'weak land'", "Valleys", "easky"));
categorize(new Word("dāsozā", "VII dāso + hotsā, 'water land'", "Island", "easky"));
categorize(new Word("ʒꜵ", "VII dꜵtə + so, 'skystuff'", "Air", "submat"));
categorize(new Word("gupə", "VIII gud + pozə, 'allground'", "Earth/World", "easky"));
categorize(new Word("dꜵtosā", "VII dꜵtə + dosāo, 'sky emotions'", "Weather", "natoc"));
categorize(new Word("dātäso", "VII", "Cloud", "natoc"));
categorize(new Word("dozā", "VII dodsā", "Rain", "natoc"));
categorize(new Word("dotəs", "VII dotās", "Snow", "natoc"));
categorize(new Word("jowā", "VII dowæt", "Wind", "natoc"));
categorize(new Word("ətꜵ", "VII ətꜵt", "Storm", "natoc"));
categorize(new Word("jovəs", "VII dowä + dotās, 'hard snow'", "Hail", "natoc"));
categorize(new Word("ʒꜵsə", "VII dætə + dꜵsē, 'sky fire'", "Lightning", "natoc"));
categorize(new Word("hāpē", "VII hā'ē", "Spring", "natoc"));
categorize(new Word("ħīmä (1)", "VII ħīhä", "Summer", "natoc"));
categorize(new Word("ħīmä (2)", "VIII ħīmä (1)", "Year", "time"));
categorize(new Word("täænē", "VIII tänē, from VII täh'ē", "Autumn", "natoc"));
categorize(new Word("ændə", "VII sædħā", "Winter", "natoc"));
categorize(new Word("tæn", "IX täænē, 'Autumn'", "Feminine name", "names"));
categorize(new Word("īotæhiə", "IX īotā + VII hīa, 'Green Shoot'", "Feminine name", "names"));
categorize(new Word("īo", "dim. of īotæhiə", "Feminine name", "names"));
categorize(new Word("dā", "VII", "Quickness", "qualcon"));
categorize(new Word("tud", "VII", "Slowness", "qualcon"));
categorize(new Word("jovä", "VII dowä", "Greatness", "qualcon"));
categorize(new Word("fowu", "VII towu", "Smallness/Unimporance", "qualcon"));
categorize(new Word("gopä", "VII dowä", "Strength", "qualcon"));
categorize(new Word("tämu", "VII towu", "Weakness", "qualcon"));
categorize(new Word("dāpe", "VII dāt", "Goodness", "qualcon"));
categorize(new Word("tāt", "VII", "Badness", "qualcon"));
categorize(new Word("mꜵwə", "VII dꜵwə", "Wisdom", "qualcon"));
categorize(new Word("dātäʒo", "VII dotädo + dātäso", "Stupidity", "qualcon"));
categorize(new Word("täʒo", "VIII dātäʒo", "Foolishness", "qualcon"));
categorize(new Word("totāħho", "VII totehħo", "Hardworkingness/Determination", "qualcon"));
categorize(new Word("tudvu", "VII tud + towu", "Lazy", "qualcon"));
categorize(new Word("äħmo", "No direct ancestors, influenced by VII owī", "Sharpness", "qualcon"));
categorize(new Word("ħāso", "VII", "Front", "locn"));
categorize(new Word("səsä", "VII həsāso", "Back", "locn"));
categorize(new Word("tīhād", "VII tähādī", "Side", "locn"));
categorize(new Word("dhītə", "VII", "Top", "locn"));
categorize(new Word("œsə", "VII dœtsə", "Down", "locn"));
categorize(new Word("pī", "No direct ancestors", "Right (side)", "locn"));
categorize(new Word("dī", "No direct ancestors", "Left (side)", "locn"));
categorize(new Word("zäto", "VII satohī", "Nearness", "locn"));
categorize(new Word("sojo", "VII sodohī", "Farness", "locn"));
categorize(new Word("sahī", "VII satohī", "Here", "pron"));
categorize(new Word("dosī", "VII sodohī", "There", "pron"));
categorize(new Word("zo", "VII so", "That", "pron"));
categorize(new Word("sət", "VIII sat, from VII", "This", "pron"));
categorize(new Word("ʒod", "VII sod", "Impersonal third person pronoun", "pron"));
categorize(new Word("æ", "VII sæ", "Female third person pronoun", "pron"));
categorize(new Word("su", "VII", "Male third person pronoun", "pron"));
categorize(new Word("əwād", "VII sə'æd", "Second person pronoun", "pron"));
categorize(new Word("zī", "VII sī", "First person pronoun", "pron"));
categorize(new Word("fœt", "VII zo + sat, 'This or that?'", "Impersonal relative pronoun", "pron"));
categorize(new Word("fī", "VII sī, 'Me?'", "Personal relative pronoun", "pron"));
categorize(new Word("dāzēt", "VII däsāt + sēt, 'Need food'", "Hunger", "qualcon"));
categorize(new Word("odāso", "VII däsāt + odso, 'Need drink'", "Thirst", "qualcon"));
categorize(new Word("dotäsvā", "VII däsāt + dotowā, 'Need sleep'", "Exhaustion", "qualcon"));
categorize(new Word("ꜵte", "VII ꜵhē", "Brokenness", "qualcon"));
categorize(new Word("tudän", "VII tudowä", "Age", "qualcon"));
categorize(new Word("otād", "VII totæd", "Youth", "qualcon"));
categorize(new Word("æn", "VII sæd", "Female", "qualcon"));
categorize(new Word("sœt", "VII", "Male", "qualcon"));
categorize(new Word("väd", "VII dowä", "Hardness", "qualcon"));
categorize(new Word("ofu", "VII towu", "Softness", "qualcon"));
categorize(new Word("ħœt", "VII hotsə", "Roughness", "qualcon"));
categorize(new Word("dæs", "VII dāso", "Smoothness", "qualcon"));
categorize(new Word("ʒosē", "VII dꜵsē", "Heat", "qualcon"));
categorize(new Word("œtäs", "VII dotās", "Coldness", "qualcon"));
categorize(new Word("ħēmə", "VII ħīat", "Flexibility", "qualcon"));
categorize(new Word("zudso", "VII juädosā +so", "Beauty", "qualcon"));
categorize(new Word("ħotʒī", "VII howosē + tēdsī", "Ugliness", "qualcon"));
categorize(new Word("dātomē", "VII dāt + sotsē", "Smile", "exp"));
categorize(new Word("ʒotā", "VII dotāt", "Frown", "exp"));
categorize(new Word("dəsāto", "VII dodā + jäsāto, 'Happy voice", "Laughter", "exp"));
categorize(new Word("dojā", "VII dodsā", "Crying", "exp"));
categorize(new Word("dātoso", "VII", "Shortwolf", "anim"));
categorize(new Word("zoʒo", "VII", "Largefrog", "anim"));
categorize(new Word("zofā", "VII zotsā", "Snake", "anim"));
categorize(new Word("gꜵsī", "VII", "Salamander", "anim"));
categorize(new Word("gosə", "VII", "Bird", "anim"));
categorize(new Word("hotusē", "VII hotsäħē", "Crab", "anim"));
categorize(new Word("dāzät", "VII dāsotē", "Fish", "anim"));
categorize(new Word("tävē", "VII toväħe", "Insects", "anim"));
categorize(new Word("dādē", "VII", "Frog hare", "anim"));
categorize(new Word("gāo", "VII bāo", "Small mammal", "anim"));
categorize(new Word("tabꜵ", "VII täh'e + bāo, 'Zombie mouse'", "Porcumouse (poisonous)", "anim"));
categorize(new Word("dovī", "VII dowī", "Otterbear", "anim"));
categorize(new Word("sätsuē", "VII sätsutē", "Deer", "anim"));
categorize(new Word("zätē", "VII sätē", "Animal", "anim"));
categorize(new Word("ħofē", "VII hīätsē + otsē, 'Plant-eater'", "Platipus-cow (cattle)", "anim"));
categorize(new Word("fꜵzē", "VII sä'tꜵsē", "Pig", "anim"));
categorize(new Word("dätzē", "VII dā + sätē, 'quick animal'", "Waterfox (cat)", "anim"));
	//Note: For dätze, the "quick" in the etymology is a reference to swiftness, nimbleness, cleverness, etc.
categorize(new Word("hīät", "VII hīat", "Vegitation", "plant"));
categorize(new Word("dꜵʒīt", "VII dꜵzīat", "Flowering plant", "plant"));
categorize(new Word("ofī", "VII hotsīt", "Bush", "plant"));
categorize(new Word("dotīät", "VII dotiat", "Tree", "plant"));
categorize(new Word("īotā", "VII hīāt + otād", "A sprout", "plant"));
categorize(new Word("sēt", "VII", "Food", "food"));
categorize(new Word("hīfē", "VII hīätsē", "Plantstuffs (edible)", "food"));
categorize(new Word("sāfē", "VII sä'tꜵsē", "Meat", "food"));
categorize(new Word("tidfē", "VII dtāītsē", "Fruit", "food"));
categorize(new Word("votāsē", "VII towā'ē + sēt, 'Starfood'", "Rice", "food"));
categorize(new Word("dāħītsə", "VII ħīhä + dātītsē, 'Sun fruit'", "Apple (yellow)", "food"));
categorize(new Word("dædsā", "VII sædħā + dātītsē, 'Moon fruit'", "Snow citrus (similar to Satsuma)", "food"));
categorize(new Word("tovītsē", "VII towā'ē + dātītsē, 'Star fruit'", "Compound berry", "food"));
categorize(new Word("odsāo", "VII dosā'o + odsā", "Alcohol", "food"));
categorize(new Word("tꜵwā", "VII tauhā", "Weapon", "tool"));
categorize(new Word("owī", "VII", "Sharp object", "tool"));
categorize(new Word("gəsī", "VIII bəsī, from VII gosə + owī", "Spear", "tool"));
categorize(new Word("ꜵvīt", "VII owī", "Knife", "tool"));
categorize(new Word("hofädo", "VII hotsə + dā'o", "Wheel", "tool"));
categorize(new Word("hofādso", "VIII hofädo + so", "Wheeled cart", "tool"));
categorize(new Word("dotsīto", "VII dotohī + so", "Pot (or other container)", "tool"));
categorize(new Word("däʒētsē", "VII däwdhī + dātītsē, 'neck fruit'", "Necklace", "jwlry"));
categorize(new Word("sədētsā", "VIII sadētsā, from VII sat'wā + dātītsē, 'wrist fruit'", "Bracelet", "jwlry"));
categorize(new Word("owītsē", "VII owī + dātītsē, 'sharp fruit'", "Piercing", "jwlry"));
//Note: As you may have noticed, fruit is considered a symbol of wealth, beauty, and adornment - Jewelry
categorize(new Word("jāsotə", "VII jāso + hotsə", "Drums", "inst"));
categorize(new Word("ʒāo", "VII jāso + dāso", "Strings", "inst"));
categorize(new Word("domā", "VII dowæt", "Flutes", "inst"));
categorize(new Word("tototsə", "VII totēhħo + hotsə", "Copper", "submat"));
categorize(new Word("dawotsə", "VII dꜵwä + hotsə", "Bronze", "submat"));
categorize(new Word("hīotsə", "VII hīhä + hotsə", "Gold", "submat"));
categorize(new Word("oʒās", "VII ħosāso", "Dirt", "submat"));
categorize(new Word("tozo", "VII todā + so", "Cloth", "submat"));
categorize(new Word("sosutē", "VII sodā + sätsutē", "Leather", "submat"));
categorize(new Word("ʒud", "VII du", "Fine; OK", "qualcon"));
categorize(new Word("ꜵtfē", "VII ꜵħē", "Dangerous", "qualcon"));
categorize(new Word("pāzo", "VII hāso", "Start/Beginning", "locn"));
categorize(new Word("ʒätso", "VII həsäso", "Finish/End", "locn"));
categorize(new Word("ʒätāzo", "VII däsāt", "More", "pron"));
categorize(new Word("dꜵs", "VII dāoso", "Less", "pron"));
categorize(new Word("ꜵst", "VII dꜵsət", "Another", "pron"));
categorize(new Word("toʒu", "VIII hoʒā + tovuso, 'Clay land'", "Map", "tool"));
categorize(new Word("tātä", "VIII tāhätœ", "Army", "people"));
categorize(new Word("dumä", "VII daħmē + səhī", "Room", "build"));
categorize(new Word("duwātsä", "VIII tuād + dowätsā", "City", "build"));
categorize(new Word("dāʒo", "VIII doʒāto", "Story (literature)", "lang"));
categorize(new Word("fotjo", "VIII fot + sojo, 'What farness'", "Length", "dist"));
categorize(new Word("fäħsēħ", "VIII fatäsol'ħə, 'drawing'", "Draft", "art"));
categorize(new Word("wādœʒə", "VIII jäsāto + œʒə + əwād, 'How are you spoken?'", "Name", "lang"));
categorize(new Word("du", "VII", "Yes", "yn"));
categorize(new Word("fo", "VII to", "No", "yn"));
categorize(new Word("væ", "VII howē", "For", "conj"));
categorize(new Word("mœ", "No direct ancestors", "And", "conj"));
categorize(new Word("fīt", "VII to", "Nor", "conj"));
categorize(new Word("o", "No direct ancestors", "But", "conj"));
categorize(new Word("äz", "VII däsat", "Or", "conj"));
categorize(new Word("od", "No direct ancestors", "Yet", "conj"));
categorize(new Word("sē", "VII howosē", "So", "conj"));
categorize(new Word("-l (1)", "- - -", "Pluralize", "mod"));
categorize(new Word("-l'ħə", "- - -", "-ing", "mod"));
categorize(new Word("-l'vet", "- - -", "-tion", "mod"));
categorize(new Word("-l'to", "- - -", "One who... (-er)", "mod"));
categorize(new Word("-l'ʒē", "- - -", "-ate", "mod"));
categorize(new Word("to-", "- - -", "un-", "mod"));
categorize(new Word("met-", "- - -", "re-", "mod"));
categorize(new Word("uħl'-", "- - -", "Optative (indicative)/Permissive (imperative)", "mood"));
categorize(new Word("äl'-", "- - -", "Mirative (indicative)", "mood"));
categorize(new Word("odl'-", "- - -", "Assumptive & deductive (indicative)/Hortative (imperative)", "mood"));
categorize(new Word("dul'-", "- - -", "Alethic - No other possibility; must be true (indicative)/Jussive (imperative)", "mood"));
categorize(new Word("fīl'-", "- - -", "Not", "mod"));
categorize(new Word("ʒāsl'-", "- - -", "Renarrative (indicative)", "mood"));
categorize(new Word("tädl'-", "- - -", "Commissive (indicative)/Precative (imperative)", "mood"));
categorize(new Word("-l'vo", "- - -", "-ify", "mod"));
categorize(new Word("-l'go", "- - -", "Past tense", "tense"));
categorize(new Word("-l'ä", "- - -", "Future tense", "tense"));
categorize(new Word("-l'gī", "- - -", "Infinitive", "mod"));
categorize(new Word("-l (2)", "- - -", "Imperative", "mood"));
categorize(new Word("pə", "No direct ancestors", "Definite Article", "article"));
categorize(new Word("ʒā", "No direct ancestors", "Indefinite Article", "article"));
categorize(new Word("äʒə", "No direct ancestors", "Proper Article", "article"));
categorize(new Word("odo", "VIII dosī", "Hello", "excl"));
categorize(new Word("ʒꜵʒā", "VIII ʒāo + ʒꜵ, 'Emotion of the air'", "Aura/Atmosphere", "abstracts"));
categorize(new Word("tuʒꜵā", "VIII tuād + IX ʒꜵʒā, 'Aura person'", "Spirit/Presence", "people"));
categorize(new Word("dwomā", "VIII dwīmet", "Coffee", "food"));
categorize(new Word("-l'āo", "- - -", "Past participle", "mod"));
categorize(new Word("īʒāo", "VIII dītāʒol'āo, 'risen'", "Bread", "food"));
categorize(new Word("ʒꜵ", "VII jāso", "With", "prep"));
categorize(new Word("ʒoħ", "VII sodoħī", "To", "prep"));
categorize(new Word("sī", "VII satoħī", "From", "prep"));
categorize(new Word("zəfo", "VIII zafo, from VII satoħī", "In", "prep"));
categorize(new Word("täħdē", "VII tähādī", "Out", "prep"));
categorize(new Word("īə", "VII hīhä", "On", "prep"));
categorize(new Word("tsə", "VII ħofsə", "Off", "prep"));
categorize(new Word("ād", "VII dādē", "Around", "prep"));
categorize(new Word("āo", "VII bāo", "Through", "prep"));
categorize(new Word("gos", "VII gosə", "Above", "prep"));
categorize(new Word("āso", "VII hosāso", "Below", "prep"));
categorize(new Word("āī", "VII hādī", "Between", "prep"));
categorize(new Word("äādī", "VII tähādī", "Beside", "prep"));
categorize(new Word("āʒo", "VIII āo + ʒꜵ", "Of", "prep"));
categorize(new Word("āfī", "IX āʒo + VIII āfohī, 'Of where'", "At", "prep")); // Note: āfohī was later removed from VIII in favor of an improved interrogative pronoun system
categorize(new Word("dot", "VII", "Is defined", "verb"));
categorize(new Word("howā", "VII ohwā", "Is done/Is able to be done", "verb"));
categorize(new Word("dāo", "VII", "Is gone", "verb"));
categorize(new Word("teo", "VII", "Is stopped", "verb"));
categorize(new Word("otsē", "VII", "Is eaten", "verb"));
categorize(new Word("odso", "VII", "Is drunk", "verb"));
categorize(new Word("ħowē", "VII", "Is made", "verb"));
categorize(new Word("ꜵhē", "VII", "Is destroyed", "verb"));
categorize(new Word("dꜵsət", "VII", "Is given", "verb"));
categorize(new Word("dāoso", "VII", "Is taken", "verb"));
categorize(new Word("dohī", "VII dotohī", "Is had", "verb"));
categorize(new Word("tꜵso", "VII", "Is wanted", "verb"));
categorize(new Word("däsāt", "VII", "Is needed", "verb"));
categorize(new Word("dədowä", "VII dodowə", "Is grown", "verb"));
categorize(new Word("osə", "VII", "Is used", "verb"));
categorize(new Word("ʒāso", "VII jāso", "Is touched/Is felt", "verb"));
categorize(new Word("jäsāto", "VII", "Is spoken", "verb"));
categorize(new Word("dotowä", "VII", "Is slept", "verb"));
categorize(new Word("howosē", "VII", "Is seen", "verb"));
categorize(new Word("dowāt", "VII dowätu + ħowē, 'Make new'", "Is mixed", "verb"));
categorize(new Word("toto", "VII totehħo, 'able'", "Is enabled", "verb"));
categorize(new Word("dꜵtāo", "VII dꜵtə + dā'o", "Is flown", "verb"));
categorize(new Word("däud", "VII dā'oso + sod", "Is grabbed", "verb"));
categorize(new Word("foāso", "VII toh + dā'oso", "Is dropped", "verb"));
categorize(new Word("ēdꜵtī", "VII dꜵsət + tēdsī", "Is attacked", "verb"));
categorize(new Word("ätꜵs", "VII dꜵsət + ätē", "Is hurt", "verb"));
categorize(new Word("sītā", "VII sat'wā + tēdsī", "Is punched", "verb"));
categorize(new Word("sētī", "VII sā'do + tēdsī", "Is kicked", "verb"));
categorize(new Word("sādo", "VII dā'o + dā'oso", "Is brought", "verb"));
categorize(new Word("dosī", "VII dā'o + sī", "Is come", "verb"));
categorize(new Word("totā", "VII to + te'o", "Is left", "verb"));
categorize(new Word("ħowətē", "VIII ħowatē, from VII ħowē + tahē", "Is killed", "verb"));
categorize(new Word("ʒoħʒə", "VIII ʒoħ + hoʒā, 'To land'", "Is arrived", "verb"));
categorize(new Word("dītāʒo", "VIII dhītə ʒo sādo", "Is risen", "verb"));
categorize(new Word("fātjoso", "VIII fotjo + dāoso, 'Long take'", "Is drawn (as in 'pull')", "verb"));
categorize(new Word("fətäso", "X fatäso, from IX fātjoso + VIII jäsāto, 'Drawn speech'", "Is drawn (as in, a picture)", "verb"));
categorize(new Word("dꜵdo", "VIII sādo", "Is pulled", "verb"));
categorize(new Word("zīʒꜵ", "VIII zīol + ʒꜵ, 'With ourselves'", "Togetherness", "qualcon"));
categorize(new Word("po", "VIII pœt", "While", "conj"));
categorize(new Word("zäħso", "VIII zudso + äħmo, 'Sharp beauty'", "Masculine name", "names"));
categorize(new Word("dāħe", "VIII däħme + āfī, 'Living at'", "House", "build"));
categorize(new Word("sāħēt", "IX dāħe + VIII sēt, 'Food house'", "Store, esp. for food", "build"));
categorize(new Word("päto", "No direct ancestors", "Father", "people"));
categorize(new Word("īʒo", "IX zīʒꜵ + VIII ħowē, 'Assemble'", "Is met", "verb"))

window.addEventListener('DOMContentLoaded', wordFilter, false);
window.addEventListener('change', wordFilter, false);