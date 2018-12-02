//Array - refer to MDN for complete list of functions

//declaration
var friends = [];

//example
var friends = ["Charlie","Liz","David","Mattias"];
friends[0]="Chuck";
friends[4] = "Amelie";
friends[0] + " <3 " + friends[1];

var colors = ["red","orange","yellow"];

//Push & Pop - at end of array
colors.push("purple"); //add item to end of array
colors.pop(); //removes the last item in the array

//Shift & Unshift - at beginning of array
colors = ["red","orange","yellow"];
colors.unshift("purple"); //add item to beginning of array
colors.shift(); //removes the first item in the array

//IndexOf - find index of element in array
colors = ["red","orange","yellow"];
colors.indexOf("red");
colors.indexOf("green");

//Slice - copy different portions of array
colors = ["red","orange","yellow"];
colors.slice(1,2);
colors.slice();

//Multi-dimensional nested arrays
var friendGroups = [
	["Harry", "Ron", "Hermione"],
	["Malfoy", "Crabbe", "Goyle"],
	["Mooney", "Wormtail", "Prongs"]
];

//forEach instead of for loop
//forEach three elements: the current item; current index; whole array
var numbers = [];

for (var i = 1; i <= 50; i++) {
	numbers.push(i);
}

numbers.forEach(function(num) {
	if (num % 3 === 0) {
		console.log(num);
	}
});

//Splice to remove from array
colors = ["red","orange","yellow"];
colors.splice = [1,1]; // remove starting index 1, for 1 element

//ForEach writing it ourselves
//as a function
function myForEach (arr, func) {
	for (var i = 0; i < arr.length; i++) {
		func(arr[i]);
	}
}

colors = ["red","orange","yellow"];
myForEach(colors, function(i){
	console.log(i);
}); 

//as a built in Array function
Array.prototype.myForEach = function(func){
	for (var i = 0; i < this.length; i++) {
		func(this[i]);
	}	
}

colors = ["red","orange","yellow"];
colors.myForEach(function(i) {
	console.log(i);
});
