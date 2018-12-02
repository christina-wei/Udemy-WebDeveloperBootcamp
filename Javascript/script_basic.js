// Basic variables

// var firstName = prompt("What is your first name?");
// var lastName = prompt("What's your last name?");
// var age = prompt("What's your age?");
// var nameMsg = "Nice to meet you " + firstName + " " + lastName;
// var ageMsg = "You are " + age + " years old.";

// console.log(nameMsg);
// console.log(ageMsg);
// console.log("You have lived for roughly " + age * 365);


// Boolean logic
// === or !==: check both value & type, does not perform type coercion
// syntax: &&, ||, !
// Falsy: false, 0, "", null, undefined, NaN

// var age = prompt("What's your age?");

// if (age < 0) {
// 	console.log("That's impossible");
// }
// if (age == 21) {
// 	console.log("Happy 21st birthday!");
// }
// if (age % 2 == 1) {
// 	console.log("You are at an odd age")
// }
// if (Math.sqrt(age) % 1 == 0) {
// 	console.log("You're a perfect square!")
// }

// Guess Game
// var targetNum = 30;
// var guess = Number(prompt("Guess a number"));

// while (guess !== targetNum) {
// 	if (guess > targetNum) {
// 		guess = Number(prompt("Too high -- guess again"));
// 	}
// 	else {
// 		guess = Number(prompt("Too low -- guess again"));
// 	}
// }

// alert("Congrats!  You guessed the target number " + targetNum)


// Loops
// DRY Code: Don't Repeat Yourself

var count = 0;

console.log("Print each letter of the string");
var str = "abracadabra";
while (count < str.length) {
	console.log(str[count]);
	count++;
}

console.log("Print numbers between -10 and 19");
count = -10;
while (count <= 19) {
	console.log(count);
	count++;
}

console.log("Print all even numbers between 10 and 40");
count = 10;
while (count <= 40) {
	console.log(count);
	count+=2;
}

console.log("Print all odd numbers between 300 and 333");
count = 300;
while (count <= 333) {
	if (count % 2 === 1) {
		console.log(count);
	}
	count++;
}

console.log("Print all numbers divisible by 5 AND b etween 5 and 50");
count = 5;
while (count <= 50) {
	if (count % 5 === 0 && count % 3 === 0) {
		console.log(count);
	}
	count++;
}