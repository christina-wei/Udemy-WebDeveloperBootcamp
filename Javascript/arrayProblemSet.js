//setup numbers array with random numbers
var arrNumbers = [];
var numItems = 10;
for (var i = 0; i < numItems; i++) {
	arrNumbers.push(Math.floor(Math.random() * 101));
}
console.log(arrNumbers);
printReverse(arrNumbers);

console.log(isUniform(arrNumbers));
console.log(isUniform([1, 1, 1]));

console.log(sumArray(arrNumbers));
console.log(max(arrNumbers));

//printReverse function
function printReverse (arr) {
	for (var i = arr.length - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}

//check if all items in array are the same
function isUniform(arr) {
	for (var i = 1; i < arr.length; i++) {
		if (arr[0] !== arr[i]) {
			return false;
		}
	}
	return true;
}

//sum up all numbers in the array
function sumArray(arr) {
	var sumTotal = 0;
	arr.forEach(function(item) {
		sumTotal+=item;
	});
	return sumTotal;
}

//returns max number in the array
function max(arr) {
	var maxNumber = arr[0];
	arr.forEach(function(item) {
		if (item > maxNumber) {
			maxNumber = item;
		}
	});
	return maxNumber;
}