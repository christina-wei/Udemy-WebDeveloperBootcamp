// var answer = "";

// while (!answer.includes("yes") && !answer.includes("yeah")) {
// 	answer = prompt("Are we there yet?");
// }

// alert("Yay, we finally made it!");

// For loop
var str = "foobar";
for(var i = 0; i < str.length; i++) {
	console.log(str[i]);
}

for (var i = -10; i <= 19; i++) {
	console.log(i);
}

for (var i = 10; i <= 40; i+=2) {
	console.log(i);
}

for (var i = 300; i <= 333; i++) {
	if (i % 2 !== 0) {
		console.log(i);
	}
}

for (var i = 5; i <= 50; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log(i);
	}
}