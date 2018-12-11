//select element and attach an event listener

var button = document.querySelector("button");
var p = document.querySelector("p");

p.textContent = "No one clicked me yet";

//first arg - type of event to listen for (e.g. "click")
//second arg - function to run when the button is clikced
button.addEventListener("click", function() {
	console.log("clicked");
	p.textContent = "Someone clicked me!";
});

var h1 = document.querySelector("h1");
h1.addEventListener("click",function() {
	h1.style.background = "orange";
});

h1.addEventListener("click",function() {
	alert("H1 was clicked");
});

var ul = document.querySelector("ul");
ul.addEventListener("click",function() {
	console.log("UL was clicked");
});

var liList = document.querySelectorAll("li");
for (var i = 0; i < liList.length; i++) {
	liList[i].addEventListener("click",function() {
		this.style.color = "pink";
	});
};