var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine","ejs");

//EJS = Embedded JavaScript

app.get("/", function(req,res){
	// res.render("home.ejs");
	res.render("home");
});

app.get("/fallinlovewith/:animal", function(req,res){
	//res.render("love.ejs", {animalVar: req.params.animal});
	res.render("love", {animalVar: req.params.animal});
});

app.get("/posts", function(req, res){
	var posts = [
		{title: "Post 1", author: "Anakin"},
		{title: "Post 2", author: "Darthie"},
		{title: "Post 3", author: "Smartie"},
	]
	
	//res.render("post.ejs", {posts: posts});
	res.render("post", {posts: posts});
})

app.get("*", function(req,res){
	res.send("Sorry, page not found ..");
});

//Listen to a port
app.listen(3000, 'localhost', function() {
	console.log("Server has started!");
});