/* Quote-thingies */
var hTwo = ["Official Dictionary!", "It's Awesome!", "I ♥ Firefox!", "v. 8.2b", "De-1337", "Not 'to be'!", "I'm sorry...", "My word!", "(un)Censored!", "Diacritical!", "Unicode!", "&lt;h2&gt;", "Constantly growing!", "Now organic!", "Derive this!", "y'", "Something different!", "Thank you!", "Math.random()", "'Single quotes'!", "Not my fault!", "Safe!", "Refreshing!", "What's this?", "Jästugā is evolving!", "ECHO!", "...echo...", "Look inside!", "Learn it!", "Synergy!", "Not parasitic!", "Symbiotic!", "Non-toxic!", "Fancy!", "Ezh!", "-moz-animate", "Hid", "den", "Mess", "age!", "With taste!", "Sounds good!", "Emotional!", "Life!", "Abstract!", "Not moldy!", "It's time!", "Count me in!", "You animal!", "Vegetable!", "FOOD!", "A tool!", "Pretty!", "Musical!", "Building!", "A work of art!", "Yes!", "Modified!", "Odo!", "Action!", "β!"];

/* Stylesheet Selection */
var now = new Date();
var cssList = [document.getElementById("day"), document.getElementById("night"), document.getElementById("clover"), document.getElementById("oe")]
function cssSwitcher(n) {
	for (i=0; i < cssList.length; i++) {
		if (i === n) cssList[i].disabled = false;
		else cssList[i].disabled = true;
	}
}
if (now.getHours() < 8 || now.getHours() >= 20) {
	cssSwitcher(1);
	hTwo.push("It's nighttime!", "Ooh, Vampires!", "You're up late!");
}
else if (now.getHours() === 12) {
	cssSwitcher(3);
	hTwo = ["Greetings!", "Good afternoon!", "Time for luncheon!", "Would you like some tea?"];
}
else if (now.getMonth() === 2) {
	if (now.getDate() === 17) {
		cssSwitcher(2);
		hTwo = ["Happy St. Patrick's Day!"];
	}
}
else if (now.getMonth() === 5) {
	if (now.getDate() === 8) hTwo = ["Good Day!"];
}