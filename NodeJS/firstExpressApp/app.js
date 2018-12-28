//import Express framework
var express = require("express");

//initiative Express app object
var app = express();

//****
//ROUTE: get, post, delete, patch, put (HTTP verbs)
//Order of routes matters!  It will run the first route that's found

//"/" = "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there!");
});

//"/bye" = "Goodbye!"
app.get("/bye", function(req, res){
	res.send("Goodbye!");
});

//"/cat" = MEOW
app.get("/cat", function(req, res){
	console.log("Request sent to /cat");
	res.send("MEOW!");
});

//Routing parameters, using :
app.get("/r/:subredditName", function(req,res){
	var subreddit = req.params.subredditName;
	res.send("Welcome to the " + subreddit.toUpperCase() + " Subreddit");
});

app.get("/r/:subredditName/comments/:id/:title", function(req,res){
	console.log(req.params);
	res.send("Longer route parameter for comments page");
});

//FOOTER
//all other routes that are not defined -- catch all phrase
app.get("*", function(req,res){
	res.send("YOU ARE A STAR!");
});

//Listen to a port
app.listen(3000, 'localhost', function() {
	console.log("Server has started!");
});
//app.listen(process.env.PORT, process.env.IP);