//npm install express, ejs, body-parser, request
//Express, EJS & BodyParser setup
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
//var request = require('request');

app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

//variables
var campgrounds = [
	{name: "Salmon Creek", image: "https://www.gonewiththewynns.com/wp-content/uploads/2014/05/MG_31491.jpg"},
	{name: "Black Bear", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI28J3TO9DTy60lkit8C06RAJqQzlyTMhx8x4P6PkNcMSH0dkN"},
	{name: "Whisper Valley", image: "https://cdn1.bigcommerce.com/n-ou1isn/ibk3tn/product_images/uploaded_images/10-gluten-free-camping-foods.jpg"},
	{name: "Salmon Creek", image: "https://www.gonewiththewynns.com/wp-content/uploads/2014/05/MG_31491.jpg"},
	{name: "Black Bear", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI28J3TO9DTy60lkit8C06RAJqQzlyTMhx8x4P6PkNcMSH0dkN"},
	{name: "Whisper Valley", image: "https://cdn1.bigcommerce.com/n-ou1isn/ibk3tn/product_images/uploaded_images/10-gluten-free-camping-foods.jpg"},
	{name: "Salmon Creek", image: "https://www.gonewiththewynns.com/wp-content/uploads/2014/05/MG_31491.jpg"},
	{name: "Black Bear", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI28J3TO9DTy60lkit8C06RAJqQzlyTMhx8x4P6PkNcMSH0dkN"},
	{name: "Whisper Valley", image: "https://cdn1.bigcommerce.com/n-ou1isn/ibk3tn/product_images/uploaded_images/10-gluten-free-camping-foods.jpg"}
]

//home page
app.get("/", function(req, res){
	res.render("landing");
});

//add a new campground
app.get("/campgrounds/new", function(req,res){
	res.render("newCamp");
});

//campgrounds
app.get("/campgrounds", function(req,res){
	res.render("campgrounds", {campgrounds: campgrounds});
});

//submit a new campground
app.post("/campgrounds", function(req,res){
	
	//Get data from form
	var newCamp = {
		name: req.body.campName,
		image: req.body.campImg
	}

	//add to campground array
	campgrounds.push(newCamp);
	
	//redirect to campgrounds page
	res.redirect("/campgrounds");
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