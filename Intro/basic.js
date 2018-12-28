//Hello!
for (var i = 0; i < 10; i++){
	console.log("This is a counter.  We are at " + i);
}

//Echo function
echo("Echo!!", 10);
echo ("Tater Tots", 3);

function echo (str, num) {
	for (var i = 0; i < num; i++) {
		console.log(str);
	}
}

//Average function
var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores)); //should return 94

var score2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(score2)); //should return 68

function average(arr) {
	var total = 0;
	arr.forEach(function (e) {
		total += e;
	});
	return Math.round(total/arr.length);
}
