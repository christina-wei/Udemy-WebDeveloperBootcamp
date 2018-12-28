//import Express framework & initiate Express app object
var express = require("express");
var app = express();

//home
app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment.");
});

//animal speak route
app.get("/speak/:animal", function(req, res){
	
	var animalName = req.params.animal.toLowerCase();
	
	var soundDict = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!",
		cat: "I love all of you",
		goodflish: "..."
	}

	var sound = soundDict[animalName];
	if (sound === undefined) {
		sound = "Omf? Beeahh";
	}

	res.send("The " + animalName + " says '" + sound + "'")
	
	// var sound = "Omf?";
	// if (animalName === "pig") {
	// 	sound = "Oink";
	// } else if (animalName === "cow") {
	// 	sound = "Moo";
	// } else if (animalName === "dog") {
	// 	sound = "Woof Woof";
	// }
	// res.send("The " + animalName + " says '" + sound + "'");
});

//repeat pattern
app.get("/repeat/:word/:freq", function(req, res){
	var word = req.params.word;
	var freq = Number(req.params.freq);
	
	if (freq === 0) {
		res.send("Nothingness is lonely .. ");
	} else {
		var output = word;
		for (var i = 1; i < freq; i++) {
			output += " " + word;
		}
		res.send(output);
	}
});

//FOOTER
//all other routes that are not defined -- catch all phrase
app.get("*", function(req,res){
	res.send("Sorry, page not found .. What are you doing with your life?");
});

//Listen to a port
app.listen(3000, 'localhost', function() {
	console.log("Server has started!");
});