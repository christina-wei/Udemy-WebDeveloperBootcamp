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
var targetNum = 30;
var guess = Number(prompt("Guess a number"));

while (guess !== targetNum) {
	if (guess > targetNum) {
		guess = Number(prompt("Too high -- guess again"));
	}
	else {
		guess = Number(prompt("Too low -- guess again"));
	}
}

alert("Congrats!  You guessed the target number " + targetNum)
