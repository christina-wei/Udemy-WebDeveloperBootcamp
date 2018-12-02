var person = {
	name: "Cindy",
	age: 32,
	city: "Missoula"
}

console.log(person.name); //doesn't work if key starts with number or have spaces in it
console.log(person["name"]);

person.name="Wendy";
person.city="Toronto";
person.hobby = "piano";

console.log(person);

var person = {}

//Nested structure

var posts = [
	{
		title: "Cats are wonderful",
		author: "Pekkle",
		comments: ["awesome", "meh"]
	},
	{
		title: "Dogs are cool too",
		author: "Meow",
		comments: ["love it", ":("]
	}
]

//Exercise
var someObject = {
	friends: [
		{name: "Malfoy"},
		{name: "Darthie"},
		{name: "Sith"}
	],
	color: "baby blue",
	isEvil: true
}
console.log(someObject.friends[0].name);


//Adding methods to an object
var obj = {
	name: "Chuck",
	isCool: false,
	add: function(x,y) {
		return x + y;
	}
}
console.log(obj.add(10,5));

var cat = {};
cat.name = "Darthie";
cat.type = "Dark Chocolate";
cat.speak = function () {
	return this.name + " Meow!";
}

var dog = {};
dog.name = "Hotdog";
dog.type = "Corgi";
dog.speak = function () {
	return this.name + " Woof!";
}

console.log(dog.speak());
console.log(cat.speak());

var comments = {};
comments.data = ["hello", "bye", "ok"];
comments.print = function() {
	this.data.forEach(function(el) {
		console.log(el);
	})
}
comments.print();

//Underscore.js - library of comment methods to be used
