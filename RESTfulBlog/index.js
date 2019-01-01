// Create a blog site following REST convention
// Use Semantic UI instead of Bootstrap

//npm install express ejs body-parser request mongoose --save
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var app = express();
//var request = require('request');

//setup express & view engine
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));

//setup mongo
mongoose.connect("mongodb://localhost:27017/blog_app", {useNewUrlParser: true});

var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog",blogSchema);

//inserting item into Mongo
// Blog.create({
// 	title: "Test Blog",
// 	image: "https://images.unsplash.com/photo-1544526989-cf68990c1862?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
// 	body: "Hello this is a blog post"
// }, function(err, added){
// 	if(err){
// 		console.log("ERROR: " + err);
// 	} else {
// 		console.log("We just added" + added + "to database");
// 	}
// });

//home page
app.get("/", function(req, res){
	res.redirect("/blogs");
});

//** RESTFUL ROUTES **
//Mapping between HTTP routes and CRUD
//INDEX   /dogs - GET - display list of all dogs
//NEW     /dogs/new - GET - displays form to make new dog, , then redirect elsewhere
//CREATE  /dogs - POST - add new dog to DB
//SHOW    /dogs/:id - GET - shows info about one dog
//EDIT    /dogs/:id/edit - GET - show edit form for one dog
//UPDATE  /dogs/:id - PUT - update a particular dog, then redirect elsewhere
//DESTROY /dogs/:id - DELETE - delete a particular dog, then redirect elsewhere

//INDEX - campgrounds
app.get("/blogs", function(req,res){

	//retrieve all items in database
	Blog.find({}, function(err, foundItems){
		if(err){
			console.log("ERROR! " + err);
		} else {
			res.render("index", {blogs: foundItems});
		}
	});
});

//NEW form only
app.get("/blogs/new", function(req,res){
	res.render("new");
});

//CREATE request to database
app.post("/blogs", function(req,res){
	Blog.create(req.body.blog, function(err, newItem){
		if(err) {
			console.log("ERROR! " + err);
			res.redirect("/blogs/new");
		} else {
			res.redirect("/blogs");	
		}
	});
});

//SHOW - show more item for a particular item
app.get("/blogs/:id", function(req,res){
	Blog.findById(req.params.id, function(err,foundItem){
		if(err) {
			console.log("ERROR! " + err);
			res.redirect("/blogs");
		} else {
			res.render("show", {blog: foundItem});	
		}
	});	
})

//FOOTER
//all other routes that are not defined -- catch all phrase
app.get("*", function(req,res){
	res.send("Sorry, page not found .. ");
});

//Listen to a port
app.listen(3000, 'localhost', function() {
	console.log("Server has started!");
});