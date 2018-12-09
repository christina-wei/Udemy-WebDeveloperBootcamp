//4 different ways to select <p id="first" class="special">Hello</p>

var tag1 = document.getElementById('first');
console.dir(tag1);

var tag2 = document.getElementsByClassName('special')[0];
console.dir(tag2);

var tag3 = document.getElementsByTagName('p')[0];
console.dir(tag3);

var tag4 = document.querySelector("#first");
console.dir(tag4);

var tag5 = document.querySelector(".special");
console.dir(tag5);

var tag6 = document.querySelector("p");
console.dir(tag6);