// function sayHello(name) {
// 	console.log("Hello " + name + "!");
// }

// sayHello(name); // name will show up as undefined
// var name = prompt("What's your name?")
// sayHello(name);

function square(x) {
	return x * x;
}

function capitalize(str) {
	if(typeof str === "number") {
		return "not a string!";
	}
	return str[0].toUpperCase() + str.slice(1);
}

function isEven(x) {
	return x % 2 === 0;
}

function factorial(x) {
	var total = 1;
	for (var i = x; i > 0; i--) {
		total = total * i;
	}
	return total;
}

function kebabToSnake(str) {
	return str.replace(/-/g,"_");
}

function sing() {
	console.log("Twinkle");
	console.log("How I wonder");
}

setInterval(function(){
	console.log("What is this");
}, 1000);


var num = prompt("Variable");
console.log(kebabToSnake(num));