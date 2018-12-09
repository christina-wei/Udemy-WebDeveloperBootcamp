// document.getElementById()
var tagID = document.getElementById('highlight'); //one item
console.dir(tagID);

// document.getElementsByClassName()
var tagClass = document.getElementsByClassName('bolded'); //array
console.dir(tagClass);

// document.getElementsByTagName()
var tagName = document.getElementsByTagName('li'); //array
console.dir(tagName);

var tagBodyCollection = document.getElementsByTagName('body'); //one item
console.dir(tagBodyCollection);

var tagBodyItem = document.getElementsByTagName('body')[0]; //one item
console.dir(tagBodyItem);


// document.querySelector() - newer function, one element
// don't need to use anything above then

var tagQuery = document.querySelector("#highlight");
console.dir(tagQuery);

var tagQuery = document.querySelector(".bolded");
console.dir(tagQuery);

var tagQuery = document.querySelector("body");
console.dir(tagQuery);


// document.querySelectorAll() - newer function, array
var tagQueryAll = document.querySelectorAll("#highlight");
console.dir(tagQueryAll);

var tagQueryAll = document.querySelectorAll(".bolded");
console.dir(tagQueryAll);

var tagQueryAll = document.querySelectorAll("li");
console.dir(tagQueryAll);
