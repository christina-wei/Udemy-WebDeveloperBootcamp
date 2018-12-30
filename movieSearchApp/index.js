//npm install express, ejs, body-parser, request
//Express, EJS & BodyParser setup
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var request = require('request');

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

//home page
app.get("/", function(req, res){
	//res.send("Hi there, welcome to my assignment.");
	res.render("home");
});

//results
app.get("/results", function(req, res){

	var searchTerm = req.query.searchTerm;
	
	//getting request from APIs
	var APIstring = 'http://www.omdbapi.com/?s=' + searchTerm + '&apikey=thewdb';

	request(APIstring, function (error, response, body) {
		if (!error && response.statusCode == 200) { 
			//status code = 200 means things worked
			var parsedData = JSON.parse(body);
			//res.send(parsedData);
			res.render("movie", {searchTerm: searchTerm, parsedData: parsedData});	
		}
	});
});

//FOOTER
//all other routes that are not defined -- catch all phrase
app.get("*", function(req,res){
	res.send("Sorry, page not found .. ");
});

//Listen to a port
app.listen(3000, 'localhost', function() {
	console.log("Server has started!");
});