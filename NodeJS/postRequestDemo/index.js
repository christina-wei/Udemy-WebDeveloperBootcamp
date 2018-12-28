//Express, EJS & BodyParser setup
var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

//Varialbe Definitions
var friends = ["Tony", "Eva", "Pierra", "Jack", "Maggie"];

//Routing
app.get("/", function(req,res){
	res.render("home");
});

app.get("/friends", function(req,res){
	res.render("friends", {friends: friends});
});

app.post("/addFriend", function(req, res){
	var newFriend = req.body.newFriend;
	friends.push(newFriend);
	res.redirect("/friends");
	//res.send("Post route reached");
});

//Catch all
app.get("*", function(req,res){
	res.send("Page not found ..");
});

//Listen
app.listen(3000, 'localhost', function() {
	console.log("Server started!!");
});