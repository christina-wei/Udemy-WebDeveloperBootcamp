//select
var tag = document.querySelector("#highlight");
var tagList = document.querySelectorAll("li");

//manipulate - not recommended
// tag.style.color = "blue";
// tag.style.border = "10px solid red";
// tag.style.background = "yellow";
// tag.style.marginTop = "200px";

//manipulate - the better way using classList (add, remove, toggle)
tag.classList.add("style");
tag.classList.toggle("style"); //style off
tag.classList.remove("bolded");


//changing content
//textContent - can be dangerous, overwrites other
//innerHTML - outputs HTML structure, used as read

var p_tag = document.querySelector("p");
console.log(p_tag.textContent);
console.log(p_tag.innerHTML);
//p_tag.textContent = "I changed it!";

var ul_tag = document.querySelector("ul");
console.log(ul_tag.textContent); // get all the list items
console.log(ul_tag.innerHTML);


//attributes
var link = document.querySelector("a");
console.log(link.getAttribute("href"));
console.log(link.textContent);
link.setAttribute("href", "http://www.udemy.com");
link.textContent = "Changed to Udemy";

var img = document.querySelector("img");
img.setAttribute("src","https://www.udemy.com/staticx/udemy/images/v6/default-meta-image.png");