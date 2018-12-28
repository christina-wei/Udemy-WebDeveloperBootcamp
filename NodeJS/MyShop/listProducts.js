//import packages
var faker = require("faker");

//welcome message
console.log("=====================");
console.log("WELCOME TO MY SHOP:")
console.log("=====================");

//loop through and get 10 random product & prices
for (var i = 0; i < 10; i++) {
	console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}