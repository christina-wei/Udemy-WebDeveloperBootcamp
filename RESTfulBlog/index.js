// Create a blog site following REST convention
// Use Semantic UI instead of Bootstrap

//npm install express ejs body-parser request mongoose method-override--save
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var methodOverride = require('method-override');
var expressSanitizer = require('express-sanitizer');
var express = require("express");
var app = express();
//var request = require('request');

//setup express & view engine
app.use(express.static("public"));
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//setup mongo
mongoose.connect("mongodb://localhost:27017/blog_app", {useNewUrlParser: true});

var blogSchema = new mongoose.Schema({
	title: String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog",blogSchema);

// // Ad hoc inserting item into Mongo
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
//INDEX   /dogs - GET - find() - display list of all dogs
//NEW     /dogs/new - GET - N/A - displays form to make new dog, , then redirect elsewhere
//CREATE  /dogs - POST - create() - add new dog to DB
//SHOW    /dogs/:id - GET - findById() - shows info about one dog
//EDIT    /dogs/:id/edit - GET - findById() - show edit form for one dog
//UPDATE  /dogs/:id - PUT - findByIdAndUpdate() - update a particular dog, then redirect elsewhere
//DESTROY /dogs/:id - DELETE - findByIdAndRemove() - delete a particular dog, then redirect elsewhere

//INDEX - show all items
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

//NEW form to create a new item
app.get("/blogs/new", function(req,res){
	res.render("new");
});

//CREATE request to database
app.post("/blogs", function(req,res){
	req.body.blog.body = req.sanitize(req.body.blog.body); // sanitize HTML
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
});

//EDIT - form to edit an item
app.get("/blogs/:id/edit", function(req,res){
	req.body.blog.body = req.sanitize(req.body.blog.body); // sanitize HTML
	Blog.findById(req.params.id, function(err,foundItem){
		if(err) {
			console.log("ERROR! " + err);
			res.redirect("/blogs");
		} else {
			res.render("edit", {blog: foundItem});	
		}
	});
});

//PUT - algorithm to update item
app.put("/blogs/:id", function(req,res){
	Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err,updatedItem){
		if(err) {
			console.log("ERROR! " + err);
			res.redirect("/blogs");
		} else {
			res.redirect("/blogs/" + req.params.id);	
		}
	});
});

//DELETE - algorithm to remove item
app.delete("/blogs/:id", function(req,res){
	Blog.findByIdAndRemove(req.params.id, function(err){
		if(err) {
			console.log("ERROR! " + err);
		} else {
				
		}
		res.redirect("/blogs");	
	})
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