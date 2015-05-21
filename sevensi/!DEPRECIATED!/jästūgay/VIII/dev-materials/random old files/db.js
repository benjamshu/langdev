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
	post: new Array(),
	verb: new Array(),
	amt: new Array(),
	mach: new Array()
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

			case "ū":
				caseLtr = "u";
				break;

			case "ō":
				caseLtr = "o";
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

// categorize(new Word("aet", "JL sæd + dāt", "(of a female) Virgin", "people"));
categorize(new Word("dāhätsō", "JL dāhatso", "Gatherer", "people"));
categorize(new Word("dātäd", "JL dātād", "Friend", "people"));
categorize(new Word("dōgōtād", "JL dowä + tuæd, 'strong person'", "Adult", "people"));
categorize(new Word("dōwätū", "JL", "Baby", "people"));
categorize(new Word("hätfee", "JL howē, 'create'", "Craftsman", "people"));
categorize(new Word("hōdōwä", "JL", "Leader", "people"));
categorize(new Word("jāstūgā (1)", "JL jāstūlae, from jäsāto + tuædl, 'speaking people'", "(archaic) Speaker", "people"));
categorize(new Word("jāstūgā (2)", "JL jāstūlae, from jäsāto + tuædl, 'speaking people'", "The Language", "lang"));
categorize(new Word("jūdaentëd", "JL jundænted, from juädosā + sæted, 'loving woman'", "Caretaker", "people"));
categorize(new Word("ōtfähūd", "JL hōtsähee + tuaedl, 'crab people'", "Mute", "people"));
categorize(new Word("saentëd", "JL sæntid, from sæted", "Woman", "people"));
categorize(new Word("tāhhätoi", "JL", "Guardian", "people"));
categorize(new Word("tātä", "JT tāhätoe", "Army", "people"));
categorize(new Word("tautsā", "JL tautsē", "Hunter", "people"));
categorize(new Word("tōtādō", "JL totæd + dā, 'fast child'", "Older child", "people"));
categorize(new Word("tōtëd", "JL totid, from totæd", "Young child", "people"));
categorize(new Word("tōzhūtā", "JL towu + switād, 'small man'", "Young adult", "people"));
categorize(new Word("tūād (1)", "JL tuæd", "Person", "people"));
categorize(new Word("tūdäfä", "JL tudāwä", "Elder", "people"));
categorize(new Word("zhëtëd", "JL ʒitid, from switād", "Man", "people"));
categorize(new Word("dädhee", "JL däwdhī", "Neck/Throat", "body_parts"));
categorize(new Word("dājōfōtō", "JL dāoso + jäsāto, 'takes speech'", "Ear", "body_parts"));
categorize(new Word("dāōdwā", "JL dā'o + dowā, 'go strong'", "Spine", "body_parts"));
categorize(new Word("dāusāsō", "JL dā'o + həsäso, 'goes back'", "Joints", "body_parts"));
categorize(new Word("dōtädō", "JL", "Head", "body_parts"));
categorize(new Word("dōtōfiy", "JL dotädo + owī, 'head owī'", "Nose", "body_parts"));
categorize(new Word("dōfäthhiy", "JL dowä + tähādī, 'big side'", "Hip", "body_parts"));
categorize(new Word("dōwāhhee", "JL dowa+hā'ē, 'great life'", "Heart", "body_parts"));
// categorize(new Word("ëdaen", "JL nedæ, from sæted", "Female breast", "body_parts"));
categorize(new Word("hādōsiy", "JL", "Eye", "body_parts"));
categorize(new Word("hādōsō", "JL ħā'o + dāso", "Blood", "body_parts"));
categorize(new Word("hhāfōhee", "JL ħæfohē, from ħœtsohē", "Chest/Torso", "body_parts"));
categorize(new Word("hāsūtwā", "JL hāso + sat'wā 'front of arm'", "Shoulder", "body_parts"));
categorize(new Word("hātō", "JL", "Hair", "body_parts"));
categorize(new Word("hōpājō", "JL hotad + jāso, 'ground touch'", "Foot", "body_parts"));
categorize(new Word("hōpusātō", "JL howē + jäsāto, 'speech maker'", "Lung", "body_parts"));
categorize(new Word("hhōsūād", "JL hosāso + tuæd, 'rock body'", "Bone", "body_parts"));
categorize(new Word("ōwiytfee", "JL owī+otsē, 'sharp eater'", "Tooth", "body_parts"));
categorize(new Word("sādō", "JL sā'do", "Leg", "body_parts"));
categorize(new Word("sätausā", "JL sä'täusē", "Meat/Flesh", "body_parts"));
// categorize(new Word("säthāee", "JL sä'täusē + hā'ē, 'lifemeat'", "Placenta", "body_parts"));
categorize(new Word("sōds", "JL so + odso, 'that which drinks'", "Tongue", "body_parts"));
categorize(new Word("sōjā", "JL so + jāso, 'that which touches'", "Finger", "body_parts"));
categorize(new Word("sōwuh", "JL sodā", "Skin", "body_parts"));
categorize(new Word("suhōwee", "JL so + howē, 'that which creates'", "Hand", "body_parts"));
categorize(new Word("suwā", "JL sawā, from sat'wā", "Arm", "body_parts"));
categorize(new Word("tūād (2)", "JL tuæd", "Body", "body_parts"));
// categorize(new Word("zhaetōwū", "JL sæd + towu, 'female weakness'", "Female reproductive system, esp. vulva", "body_parts"));
// categorize(new Word("zhoitō", "JL sœt", "Male reproductive system, esp. penis", "body_parts"));
categorize(new Word("zhōtsee", "JL sotsē", "Mouth", "body_parts"));
categorize(new Word("usōtō", "JL asoto, from dasīto", "Pants", "clothing"));
categorize(new Word("dätōsō", "JL dotäsā", "Shoes", "clothing"));
categorize(new Word("dōwōdä", "JL dosoä", "Shirt", "clothing"));
categorize(new Word("dutädā", "JL ddotädā", "Hat", "clothing"));
categorize(new Word("jätāduh", "JL säte + dotädā, 'animal hat'", "Mask", "clothing"));
categorize(new Word("tōdā", "JL todæ", "Clothing", "clothing"));
categorize(new Word("dāfūsō", "JL dāso + tuso, 'water need'", "Thirst", "biorythms"));
categorize(new Word("dōtōgä", "JL dotolvä, from dotowā, 'to sleep'", "Sleep", "biorythms"));
categorize(new Word("jōsut", "JL däusət + hotsə", "Waste elimination", "biorythms"));
// categorize(new Word("saenäzhee", "JL sædhā + ätē, 'moon sickness'", "Menstration", "biorythms"));
categorize(new Word("seetgee", "JL sēt + tēdsī, 'food pain'", "Hunger", "biorythms"));
categorize(new Word("biyfëūt", "JL towu + hīätsē, 'berry'", "Purple", "sight"));
categorize(new Word("dāheetuh (1)", "JL", "Transparent/Translucent", "sight"));
categorize(new Word("doiywët", "JL dowīet", "Brown", "sight"));
categorize(new Word("fōzee", "JL howosē", "Vision", "sight"));
categorize(new Word("hiyuh", "JL hīa, from hīat", "Green", "sight"));
categorize(new Word("hiyfuh", "JL ħīha", "Light", "sight"));
categorize(new Word("jautuh", "JL daotə", "Blue", "sight"));
categorize(new Word("waut", "JL ətäut", "Grey", "sight"));
categorize(new Word("utau", "JL utꜵt", "Dark/Black", "sight"));
categorize(new Word("zhau", "JL dꜵsē", "Red/Yellow/Orange", "sight"));
categorize(new Word("zhaendā", "JL sædhā", "White", "sight"));
categorize(new Word("hōfäsee", "JL hotsäsē", "Feeling (physical)", "touch"));
categorize(new Word("tëdsiy", "JL tēdsī", "Pain", "touch"));
categorize(new Word("dātiyt", "JL dātītsē", "Sourness", "taste"));
categorize(new Word("dōjiydō", "JL däwdhī + dosā'o, 'throat feelings'", "Sweetness", "taste"));
categorize(new Word("jōwäsët", "JL dowäso + sēt, 'ocean food'", "Saltiness", "taste"));
categorize(new Word("paufee", "JL sotsē + dꜵsē, 'mouth fire'", "Hotness (spiciness)", "taste"));
categorize(new Word("sōfeezhiy", "JL sotsē + tēdsī, 'tongue pain'", "Bitterness", "taste"));
categorize(new Word("ōjiys", "JL owī + dosā'o, 'nose emotions'", "Scent", "smell"));
categorize(new Word("dōpäjee", "JL dotädo + tēdsī, 'head pain'", "Loud", "hearing"));
categorize(new Word("fōzhūsō", "JL towu + tēdsī, 'weak voice'", "Quiet", "hearing"));
categorize(new Word("zhāpā", "JL jäsāto", "Noise", "hearing"));
categorize(new Word("zhäsā", "JL jäsāto", "Speech", "hearing"));
categorize(new Word("pōwä", "No direct ancestors, influenced by JL dosā'ā and jäsāto", "Music", "hearing"));
categorize(new Word("zhāō", "JL dosā'o", "Emotion", "emotions"));
categorize(new Word("dōdā", "JL", "Happiness", "emotions"));
categorize(new Word("tōpā", "JL dotāt", "Anger", "emotions"));
categorize(new Word("hhoifō", "JL ħo'to", "Sadness", "emotions"));
categorize(new Word("hōtäjō", "JL hosāso + dotädo", "Frustration", "emotions"));
categorize(new Word("hōzhiyd", "JL hosīd", "Love, between friends or family", "emotions"));
categorize(new Word("jūwaendōsā", "JT numädosā, from JL juädosā", "Awe; love of art/beauty", "emotions"));
categorize(new Word("wōwā", "JL dowæt", "Calmness/Peacefulness", "emotions"));
categorize(new Word("zhaujuh", "JL dꜵsē + dodsā", "Passion", "emotions"));
categorize(new Word("dāōsee", "JL dā + dæsī", "Mental energy/Excitement", "emotions"));
categorize(new Word("häwee", "JL hā'ē", "Life", "life"));
categorize(new Word("hae", "JL hā'ē", "Energy", "abstracts"));
categorize(new Word("fäee", "JL täh'ē", "Death", "life"));
categorize(new Word("dähhwee", "JL däħē", "Livingness/Healthiness", "life"));
categorize(new Word("tähhee", "JL täħ'ē", "Deadness/Lack of life", "life"));
categorize(new Word("ätee", "JL", "Sickness", "life"));
categorize(new Word("fëdsō", "JL tēdsī + so, 'pain thing'", "Injury", "life"));
categorize(new Word("jō", "JL dāt + so", "Right", "abstracts"));
categorize(new Word("zhäfō", "JL tāt + so", "Wrong", "abstracts"));
categorize(new Word("däfō", "JL dꜵwä", "Knowledge/Wisdom", "abstracts"));
categorize(new Word("jaufuh", "JL dowä", "Power", "abstracts"));
categorize(new Word("sōzhūwäd", "JL so + juädosā", "Beauty", "abstracts"));
categorize(new Word("hōsee", "JL hosīd", "Trust", "abstracts"));
categorize(new Word("dāgauwuh", "JL dāt + dæwä", "Hope", "abstracts"));
categorize(new Word("dōtëhhvō", "JL dowä + totehħo", "Courage", "abstracts"));
categorize(new Word("tōzhūtsā", "JL towu + jäsāto, 'small speech'", "Word", "lang"));
categorize(new Word("dōzhātō", "JL dowä + jasāto", "Statement", "lang"));
categorize(new Word("poit", "No direct ancestors", "A moment; also, time", "time"));
categorize(new Word("hoipuh", "JL hīhä", "Day, esp. midday", "time"));
categorize(new Word("zhaenzhā", "JL sædhā", "Night", "time"));
categorize(new Word("aedae", "JL sædhā + hā'ē, 'moon life'", "Month", "time"));
categorize(new Word("dōfiytuh", "JL dowätu + ħīhä, 'baby sun'", "Morning", "time"));
categorize(new Word("fuwōfuh", "JL tudowu + ħīhä, 'old sun'", "Evening", "time"));
categorize(new Word("supoi", "JT sapœ, from JL sat + JT pœt", "The current time; the present", "time"));
categorize(new Word("zhoit", "JL so + JT pœt", "A later time; the future", "time"));
categorize(new Word("pusä", "JL pœt + səsä", "A previous time; the past", "time"));
categorize(new Word("1 - zhō", "JL so", "One", "numbers"));
categorize(new Word("2 - wōs", "JL los, from sol, 'things'", "Two", "numbers"));
categorize(new Word("3 - gōjū", "JL ʒols, from so + sol", "Three", "numbers"));
categorize(new Word("4 - zhäfā", "JL sat'wā, 'hand'", "Four", "numbers"));
categorize(new Word("5 - wāt", "JL wālt, from zālt, from sol", "Five", "numbers"));
categorize(new Word("6 - sōpō", "JL sol", "Six", "numbers"));
categorize(new Word("7 - jät", "JL ʒät, from sol", "Seven", "numbers"));
categorize(new Word("10 - saentō", "JL säntol, from sat'wāl, 'hands'", "Eight", "numbers"));
categorize(new Word("dāsō", "JL", "Water", "submat"));
categorize(new Word("fëwët", "JL vimet, from dowiet", "Wood", "submat"));
categorize(new Word("pōzhäsō", "JL hosāso", "Rock/Stone", "submat"));
categorize(new Word("pōzhuh", "JL hotsə", "Ground", "submat"));
categorize(new Word("dausee", "JL", "Fire", "submat"));
categorize(new Word("dōzhuh", "JL dowä + hosāso, 'strong rock'", "Metal", "submat"));
categorize(new Word("tōfūsō", "JL towu + hosāso", "Clay", "submat"));
categorize(new Word("dautuh", "JL", "Sky", "easky"));
categorize(new Word("hhiytuh", "JL ħīhä", "Moon", "easky"));
categorize(new Word("tōfäee", "JL towā'ē", "Star", "easky"));
categorize(new Word("hōzhā", "JL hotsā", "Land", "easky"));
categorize(new Word("tūdāsō", "JL", "River/Creek", "easky"));
categorize(new Word("doifäsō", "JL dowäso", "Large body of water", "easky"));
categorize(new Word("tōwūdō", "JL towu + dāso, 'small water'", "Smaller body of water", "easky"));
categorize(new Word("dōwätsā", "JL dowä + hotsā, 'great land'", "Mountains", "easky"));
categorize(new Word("tōfūtzhā", "JL towu + hotsā, 'weak land'", "Valleys", "easky"));
categorize(new Word("dāsōzhā", "JL dāso + hotsā, 'water land'", "Island", "easky"));
categorize(new Word("zhau", "JL dꜵtə + so, 'skystuff'", "Air", "submat"));
categorize(new Word("gūpuh", "JT gud + pozə, 'allground'", "Earth/World", "easky"));
categorize(new Word("dautōsā", "JL dꜵtə + dosāo, 'sky emotions'", "Weather", "natoc"));
categorize(new Word("dātäsō", "JL", "Cloud", "natoc"));
categorize(new Word("dōzhā", "JL dodsā", "Rain", "natoc"));
categorize(new Word("dōtus", "JL dotās", "Snow", "natoc"));
categorize(new Word("jōwā", "JL dowæt", "Wind", "natoc"));
categorize(new Word("utau", "JL ətꜵt", "Storm", "natoc"));
categorize(new Word("jōfus", "JL dowä + dotās, 'hard snow'", "Hail", "natoc"));
categorize(new Word("zhausuh", "JL dætə + dꜵsē, 'sky fire'", "Lightning", "natoc"));
categorize(new Word("hāpee", "JL hā'ē", "Spring", "natoc"));
categorize(new Word("hhiywä (1)", "JL ħīhä", "Summer", "natoc"));
categorize(new Word("hhiywä (2)", "JT ħīmä (1)", "Year", "time"));
categorize(new Word("täaenee", "JT tänē, from JL täh'ē", "Autumn", "natoc"));
categorize(new Word("aenduh", "JL sædħā", "Winter", "natoc"));
// Autumn and Winter are seen as female because we see a disappearance of a Sun - thus giving the Moon higher prevalence
categorize(new Word("taen", "JT täænē, 'Autumn'", "Feminine name", "names"));
categorize(new Word("iyōtaehiyuh", "JT īotā + JL hīa, 'Green Shoot'", "Feminine name", "names"));
categorize(new Word("iyō", "dim. of īotæhiə", "Feminine name", "names"));
categorize(new Word("dā", "JL", "Quickness", "qualcon"));
categorize(new Word("tūd", "JL", "Slowness", "qualcon"));
categorize(new Word("jōfä", "JL dowä", "Greatness", "qualcon"));
categorize(new Word("fōwū", "JL towu", "Smallness/Unimporance", "qualcon"));
categorize(new Word("gōpä", "JL dowä", "Strength", "qualcon"));
categorize(new Word("täwū", "JL towu", "Weakness", "qualcon"));
categorize(new Word("dāpë", "JL dāt", "Goodness", "qualcon"));
categorize(new Word("tāt", "JL", "Badness", "qualcon"));
categorize(new Word("wauwuh", "JL dꜵwə", "Wisdom", "qualcon"));
categorize(new Word("dātäzhō", "JL dotädo + dātäso", "Stupidity", "qualcon"));
categorize(new Word("täzhō", "JT dātäʒo", "Foolishness", "qualcon"));
categorize(new Word("tōtāhhhō", "JL totehħo", "Hardworkingness/Determination", "qualcon"));
categorize(new Word("tūdfū", "JL tud + towu", "Lazy", "qualcon"));
categorize(new Word("ähhmō", "No direct ancestors, influenced by JL owī", "Sharpness", "qualcon"));
categorize(new Word("hhāsō", "JL", "Front", "locn"));
categorize(new Word("susä", "JL həsāso", "Back", "locn"));
categorize(new Word("tiyhād", "JL tähādī", "Side", "locn"));
categorize(new Word("diytuh", "JL", "Top", "locn"));
categorize(new Word("oisuh", "JL dœtsə", "Bottom", "locn"));
categorize(new Word("piy", "No direct ancestors", "Right (side)", "locn"));
categorize(new Word("diy", "No direct ancestors", "Left (side)", "locn"));
categorize(new Word("zhätō", "JL satohī", "Nearness", "locn"));
categorize(new Word("sōjō", "JL sodohī", "Farness", "locn"));
categorize(new Word("suhiy", "JL sahī, from satohī", "Here", "pron"));
categorize(new Word("dōsiy", "JL sodohī", "There", "pron"));
categorize(new Word("zhō", "JL so", "That", "pron"));
categorize(new Word("sut", "JT sat, from JL", "This", "pron"));
categorize(new Word("zhōd", "JL sod", "Impersonal third person pronoun", "pron"));
categorize(new Word("ae", "JL sæ", "Female third person pronoun", "pron"));
categorize(new Word("sū", "JL", "Male third person pronoun", "pron"));
categorize(new Word("uwād", "JL sə'æd", "Second person pronoun", "pron"));
categorize(new Word("zhiy", "JL sī", "First person pronoun", "pron"));
categorize(new Word("foet", "JL zo + sat, 'This or that?'", "Impersonal relative pronoun", "pron"));
categorize(new Word("fiy", "JL sī, 'Me?'", "Personal relative pronoun", "pron"));
categorize(new Word("dāzheet", "JL däsāt + sēt, 'Need food'", "Starvation", "qualcon"));
categorize(new Word("ōdāsō", "JL däsāt + odso, 'Need drink'", "Dying of thirst", "qualcon"));
categorize(new Word("dōtäsfā", "JL däsāt + dotowā, 'Need sleep'", "Exhaustion", "qualcon"));
categorize(new Word("autuh", "JT ꜵte, from JL ꜵhē", "Brokenness", "qualcon"));
categorize(new Word("tūwä", "JL tudän, from tudowä", "Age", "qualcon"));
categorize(new Word("ōtād", "JL totæd", "Youth", "qualcon"));
categorize(new Word("aen", "JL sæd", "Female", "qualcon"));
categorize(new Word("soit", "JL", "Male", "qualcon"));
categorize(new Word("fäd", "JL dowä", "Hardness", "qualcon"));
categorize(new Word("ōfū", "JL towu", "Softness", "qualcon"));
categorize(new Word("hhoit", "JL hotsə", "Roughness", "qualcon"));
categorize(new Word("daes", "JL dāso", "Smoothness", "qualcon"));
categorize(new Word("zhōsee", "JL dꜵsē", "Heat", "qualcon"));
categorize(new Word("oitäs", "JL dotās", "Coldness", "qualcon"));
categorize(new Word("hheewuh", "JL ħīat", "Flexibility", "qualcon"));
categorize(new Word("zhūdsō", "JL juädosā +so", "Beauty", "qualcon"));
categorize(new Word("hhōtzhiy", "JL howosē + tēdsī", "Ugliness", "qualcon"));
categorize(new Word("dātōwee", "JL dāt + sotsē", "Smile", "exp"));
categorize(new Word("zhōtā", "JL dotāt", "Frown", "exp"));
categorize(new Word("dusātō", "JL dodā + jäsāto, 'Happy voice", "Laughter", "exp"));
categorize(new Word("dōjā", "JL dodsā", "Crying", "exp"));
categorize(new Word("dātōsō", "JL", "Shortwolf", "anim"));
categorize(new Word("zhōzhō", "JL", "Largefrog", "anim"));
categorize(new Word("zhōfā", "JL zotsā", "Snake", "anim"));
categorize(new Word("gausiy", "JL", "Salamander", "anim"));
categorize(new Word("gōsuh", "JL", "Bird", "anim"));
categorize(new Word("hōtūsee", "JL hotsäħē", "Crab", "anim"));
categorize(new Word("dāzhät", "JL dāsotē", "Fish", "anim"));
categorize(new Word("täfee", "JL toväħe", "Insects", "anim"));
categorize(new Word("dādee", "JL", "Frog hare", "anim"));
categorize(new Word("gāō", "JL bāo", "Small mammal", "anim"));
categorize(new Word("täbao", "JL täh'e + bāo, 'Zombie mouse'", "Porcumouse (poisonous)", "anim"));
categorize(new Word("dōfiy", "JL dowī", "Otterbear", "anim"));
categorize(new Word("sätsūee", "JL sätsutē", "Deer", "anim"));
categorize(new Word("zhätee", "JL sätē", "Animal", "anim"));
categorize(new Word("hhōfee", "JL hīätsē + otsē, 'Plant-eater'", "Platipus-cow (cattle)", "anim"));
categorize(new Word("fauzhee", "JL sä'tꜵsē", "Pig", "anim"));
categorize(new Word("dätzhee", "JL dā + sätē, 'quick animal'", "Waterfox", "anim"));
	//Note: For dätzee, the "quick" in the etymology is a reference to swiftness, nimbleness, cleverness, etc.
categorize(new Word("hiyät", "JL hīat", "Vegitation", "plant"));
categorize(new Word("dauzhiyt", "JL dꜵzīat", "Flowering plant", "plant"));
categorize(new Word("ōfiy", "JL hotsīt", "Bush", "plant"));
categorize(new Word("dōtiyät", "JL dotiat", "Tree", "plant"));
categorize(new Word("iyōtā", "JL hīāt + otād", "A sprout", "plant"));
categorize(new Word("seet", "JL", "Food", "food"));
categorize(new Word("hiyfee", "JL hīätsē", "Plantstuffs (edible)", "food"));
categorize(new Word("sāfee", "JL sä'tꜵsē", "Meat", "food"));
categorize(new Word("tiydfee", "JL dtāītsē", "Fruit", "food"));
categorize(new Word("fōtāsee", "JL towā'ē + sēt, 'Starfood'", "Rice", "food"));
categorize(new Word("dāhhiytsuh", "JL ħīhä + dātītsē, 'Sun fruit'", "Apple (yellow)", "food"));
categorize(new Word("daedsā", "JL sædħā + dātītsē, 'Moon fruit'", "Snow citrus (similar to Satsuma)", "food"));
categorize(new Word("tōfiytsee", "JL towā'ē + dātītsē, 'Star fruit'", "Compound berry", "food"));
categorize(new Word("ōdsāō", "JL dosā'o + odsā", "Alcohol", "food"));
categorize(new Word("tauwā", "JL tauhā", "Weapon", "tool"));
categorize(new Word("ōwiy", "JL", "Sharp object", "tool"));
categorize(new Word("gusiy", "JT bəsī, from JL gosə + owī", "Spear", "tool"));
categorize(new Word("aufiyt", "JL owī", "Knife", "tool"));
categorize(new Word("hōfädō", "JL hotsə + dā'o", "Wheel", "tool"));
categorize(new Word("hōfādsō", "JT hofädo + so", "Wheeled cart", "tool"));
categorize(new Word("dōtsiytō", "JL dotohī + so", "Pot (or other container)", "tool"));
categorize(new Word("däzheetsee", "JL däwdhī + dātītsē, 'neck fruit'", "Necklace", "jwlry"));
categorize(new Word("sudeetsā", "JT sadētsā, from JL sat'wā + dātītsē, 'wrist fruit'", "Bracelet", "jwlry"));
categorize(new Word("ōwiytsee", "JL owī + dātītsē, 'sharp fruit'", "Piercing", "jwlry"));
//Note: As you may have noticed, fruit is considered a symbol of wealth, beauty, and adornment - Jewelry
categorize(new Word("jāsōtuh", "JL jāso + hotsə", "Drums", "inst"));
categorize(new Word("zhāō", "JL jāso + dāso", "Strings", "inst"));
categorize(new Word("dōwā", "JL dowæt", "Flutes", "inst"));
categorize(new Word("ōzhās", "JL ħosāso", "Dirt", "submat"));
categorize(new Word("tōzhō", "JL todā + so", "Cloth", "submat"));
categorize(new Word("sōsūtee", "JL sodā + sätsutē", "Leather", "submat"));
categorize(new Word("zhūd", "JL du", "Fine; OK", "qualcon"));
categorize(new Word("autfee", "JL ꜵħē", "Dangerous", "qualcon"));
categorize(new Word("pāzhō", "JL hāso", "Start/Beginning", "locn"));
categorize(new Word("zhätsō", "JL həsäso", "Finish/End", "locn"));
categorize(new Word("zhätāzhō", "JL däsāt", "More", "pron"));
categorize(new Word("daus", "JL dāoso", "Less", "pron"));
categorize(new Word("aust", "JL dꜵsət", "Another", "pron"));
categorize(new Word("tōzhō", "JT hoʒā + tovuso, 'Clay land'", "Map", "tool"));
categorize(new Word("tātä", "JT tāhätœ", "Army", "people"));
categorize(new Word("dūwä", "JL daħmē + səhī", "Room", "build"));
categorize(new Word("dūwātsä", "JT tuād + dowätsā", "City", "build"));
categorize(new Word("dāzhō", "JT doʒāto", "Story (literature)", "lang"));
categorize(new Word("fōtjō", "JT fot + sojo, 'What farness'", "Length", "dist"));
categorize(new Word("fähhseehh", "JT fatäsol'ħə, 'drawing'", "Draft", "art"));
categorize(new Word("wādoizhuh", "JT jäsāto + œʒə + əwād, 'How are you spoken?'", "Name", "lang"));
categorize(new Word("dū", "JL", "Yes", "yn"));
categorize(new Word("fō", "JL to", "No", "yn"));
categorize(new Word("fae", "JL howē", "For", "conj"));
categorize(new Word("woi", "No direct ancestors", "And", "conj"));
categorize(new Word("ō", "No direct ancestors", "But", "conj"));
categorize(new Word("zhä", "JL däsat", "Or", "conj"));
categorize(new Word("ōd", "No direct ancestors", "Yet", "conj"));
categorize(new Word("see", "JL howosē", "So", "conj"));
categorize(new Word("-l (1)", "- - -", "Pluralize", "mod"));
categorize(new Word("-l'hhuh", "- - -", "-ing", "mod"));
categorize(new Word("-l'tō", "- - -", "One who... (-er)", "mod"));
categorize(new Word("ūhhl'-", "- - -", "Optative (indicative)/Permissive (imperative)", "mood"));
categorize(new Word("äl'-", "- - -", "Mirative (indicative)", "mood"));
categorize(new Word("ōdl'-", "- - -", "Assumptive & deductive (indicative)/Hortative (imperative)", "mood"));
categorize(new Word("dūl'-", "- - -", "Alethic - No other possibility; must be true (indicative)/Jussive (imperative)", "mood"));
categorize(new Word("fiyl'-", "- - -", "Not", "mod"));
categorize(new Word("zhāsl'-", "- - -", "Renarrative (indicative)", "mood"));
categorize(new Word("tädl'-", "- - -", "Commissive (indicative)/Precative (imperative)", "mood"));
categorize(new Word("-l'giy", "- - -", "Infinitive", "mod"));
categorize(new Word("-l (2)", "- - -", "Imperative", "mood"));
categorize(new Word("puh", "No direct ancestors", "Definite Article", "article"));
categorize(new Word("zhā", "No direct ancestors", "Indefinite Article", "article"));
categorize(new Word("äzhuh", "No direct ancestors", "Proper Article", "article"));
categorize(new Word("ōdō", "JT dosī", "Hello", "excl"));
categorize(new Word("zhauzhā", "JT ʒāo + ʒꜵ, 'Emotion of the air'", "Aura/Atmosphere", "abstracts"));
categorize(new Word("tūzhauā", "JT tuād + JT ʒꜵʒā, 'Aura person'", "Spirit/Presence", "people"));
categorize(new Word("doiwā", "JT dwīmet", "Coffee", "food"));
categorize(new Word("-l'āō", "- - -", "Past participle", "mod"));
categorize(new Word("iyzhāō", "JT dītāʒol'āo, 'risen'", "Bread", "food"));
categorize(new Word("zhau", "JL jāso", "With", "post"));
categorize(new Word("zhōhh", "JL sodoħī", "To", "post"));
categorize(new Word("siy", "JL satoħī", "From", "post"));
categorize(new Word("zhufō", "JT zafo, from JL satoħī", "In", "post"));
categorize(new Word("tähhdee", "JL tähādī", "Out", "post"));
categorize(new Word("iyuh", "JL hīhä", "On", "post"));
categorize(new Word("tōsuh", "JL ħofsə", "Off", "post"));
categorize(new Word("ād", "JL dādē", "Around", "post"));
categorize(new Word("āō", "JL bāo", "Through", "post"));
categorize(new Word("gōs", "JL gosə", "Above", "post"));
categorize(new Word("āsō", "JL hosāso", "Below", "post"));
categorize(new Word("āiy", "JL hādī", "Between", "post"));
categorize(new Word("äādiy", "JL tähādī", "Beside", "post"));
categorize(new Word("āzhō", "JT āo + ʒꜵ", "Of", "post"));
categorize(new Word("āfiy", "JT āʒo + JT āfohī, 'Of where'", "At", "post"));
// Note: āfohī was later removed from JT in favor of an improved interrogative pronoun system
categorize(new Word("dōt", "JL", "Is defined", "verb"));
categorize(new Word("hōwā", "JL ohwā", "Is done", "verb"));
categorize(new Word("dāō", "JL", "Is gone", "verb"));
categorize(new Word("tëō", "JL", "Is stopped", "verb"));
categorize(new Word("ōtsee", "JL", "Is eaten", "verb"));
categorize(new Word("ōdsō", "JL", "Is drunk", "verb"));
categorize(new Word("hhōwee", "JL", "Is made", "verb"));
categorize(new Word("auhee", "JL", "Is destroyed", "verb"));
categorize(new Word("dausut", "JL", "Is given", "verb"));
categorize(new Word("dāōsō", "JL", "Is taken", "verb"));
categorize(new Word("dōhiy", "JL dotohī", "Is had", "verb"));
categorize(new Word("tausō", "JL", "Is wanted", "verb"));
categorize(new Word("däsāt", "JL", "Is needed", "verb"));
categorize(new Word("dudōwä", "JL dodowə", "Is grown", "verb"));
categorize(new Word("ōsuh", "JL", "Is used", "verb"));
categorize(new Word("zhāsō", "JL jāso", "Is touched/Is felt", "verb"));
categorize(new Word("jäsātō", "JL", "Is spoken", "verb"));
categorize(new Word("dōtōwä", "JL", "Is slept", "verb"));
categorize(new Word("hōwōsee", "JL", "Is seen", "verb"));
categorize(new Word("dōwāt", "JL dowätu + ħowē, 'Make new'", "Is mixed", "verb"));
categorize(new Word("tōtō", "JL totehħo, 'able'", "Is enabled", "verb"));
categorize(new Word("dautāō", "JL dꜵtə + dā'o", "Is flown", "verb"));
categorize(new Word("däūd", "JL dā'oso + sod", "Is grabbed", "verb"));
categorize(new Word("fōāsō", "JL toh + dā'oso", "Is dropped", "verb"));
categorize(new Word("eedautiy", "JL dꜵsət + tēdsī", "Is attacked", "verb"));
categorize(new Word("ätaus", "JL dꜵsət + ätē", "Is hurt", "verb"));
categorize(new Word("siytā", "JL sat'wā + tēdsī", "Is punched", "verb"));
categorize(new Word("seetiy", "JL sā'do + tēdsī", "Is kicked", "verb"));
categorize(new Word("sādō", "JL dā'o + dā'oso", "Is brought", "verb"));
categorize(new Word("dōsiy", "JL dā'o + sī", "Is come", "verb"));
categorize(new Word("tōtā", "JL to + te'o", "Is left", "verb"));
categorize(new Word("hhōwutee", "JT ħowatē, from JL ħowē + tahē", "Is killed", "verb"));
categorize(new Word("diytāzhō", "JT dhītə ʒo sādo", "Is raised", "verb"));
categorize(new Word("fātjōsō", "JT fotjo + dāoso, 'Long take'", "Is drawn (as in 'pull')", "verb"));
categorize(new Word("futäsō", "JT fatäso, from JT fātjoso + JT jäsāto, 'Drawn speech'", "Is drawn (as in, a picture)", "verb"));
categorize(new Word("daudō", "JT sādo", "Is pulled", "verb"));
categorize(new Word("zhiyzhau", "JT zīol + ʒꜵ, 'With ourselves'", "Togetherness", "qualcon"));
categorize(new Word("pō", "JT pœt", "While", "conj"));
categorize(new Word("zhähhsō", "JT zudso + äħmo, 'Sharp beauty'", "Masculine name", "names"));
categorize(new Word("dāhhuh", "JT däħme + āfī, 'Living at'", "House", "build"));
categorize(new Word("sāhheet", "JT dāħe + JT sēt, 'Food house'", "Store, esp. for food", "build"));
categorize(new Word("pätō", "No direct ancestors", "Father", "people"));
categorize(new Word("iyzhō", "JT zīʒꜵ + JT ħowē, 'Assemble'", "Is met", "verb"));
// categorize(new Word("dauhhuh", "JT ꜵtə + dāħə, 'Broken house'", "Brothel", "build"));
categorize(new Word("zhäsātūā", "jäsāto+tuʒꜵā, 'Heard by the Spirits'", "Feminine name", "names"));
categorize(new Word("zhäsā", "dim. of ʒäsātuā", "Feminine name", "names"));
// categorize(new Word("gautō", "JT dꜵħə", "Prostitute", "people"));
// categorize(new Word("tōhhfō", "JT gꜵto", "(vulgar) To engage in sexual intercourse with a prostitute", "verb"));
categorize(new Word("däūfut", "JT dꜵsətl'vət, 'Allotment'", "Portion", "amt"));
categorize(new Word("tauzhuh", "JT toʒutsā däuvət, 'Portion of a word'", "Syllable", "lang"));
categorize(new Word("dōwuh", "EN roman", "(Of a word or language) Roman-ness", "lang"));
categorize(new Word("säiyfā", "JT sahiy siy fātjōsō", "Is moved", "verb"));
categorize(new Word("siyfādūwā", "JT säiyfāl'tō dūwātsä, 'City mover [of people]'", "Bus", "mach"));
categorize(new Word("hāweeōs", "JT hämee dāōsō, 'Life is taken'", "Is hunted", "verb"));
categorize(new Word("äwō", "JT hāmeeōs, infl. by dävō", "Is asked", "verb"));
categorize(new Word("däū", "JT däūvut", "Is broken up", "verb"));
categorize(new Word("auāō", "JT däūl'āō", "Detail", "abstracts"));
categorize(new Word("auhh", "JT zhao + zhōhh", "For", "post"));
categorize(new Word("jāsō", "JL, 'Is felt'", "Masculine name", "names"));
categorize(new Word("utaeō", "JT utao", "Feminine name", "names"));
categorize(new Word("tū", "JT tūād", "Like", "post"));
categorize(new Word("tāgaus", "JT taosō + dāagaowuh", "Mean/Intend", "verb"));
categorize(new Word("hhiyhō", "JT hiyfuh", "Masculine name", "names"));
categorize(new Word("dātō", "JT daotāō", "Wing", "body_parts"));
categorize(new Word("tāaufūt", "JT dātō + däūvut", "Feather", "body_parts"));
categorize(new Word("taefä", "JT tāaovūt", "Feminine name", "names"));
categorize(new Word("dōfuh", "JT dhiytuh jōvä", "Height", "qualcon"));

window.addEventListener('DOMContentLoaded', wordFilter, false)
window.addEventListener('change', wordFilter, false);