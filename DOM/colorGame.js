//select HTML elements
var jumbo = document.querySelector(".jumbotron");
var colorSquareList = document.querySelectorAll(".colorSquare");
var guessText = document.querySelector("#msg");
var newGame = document.querySelector("#reset");
var colorText = document.querySelector("h1");
var modeList = document.querySelectorAll(".mode");

//constant variables
var bkgColor = "#232323";

//Working variables
var colors = [];
var answer_index;
var numTiles = 6;

init();

function init() {
	
	//initialize colors
	changeColor(true);

	//set play mode listener
	for (var i = 0; i < modeList.length; i++) {
		modeList[i].addEventListener("click", function() {
			modeList.forEach (function(currMode) {
				currMode.classList.remove("selected");
			});
			this.classList.add("selected");
			numTiles = this.textContent === "EASY" ? 3 : 6;
			changeColor(true);
		});
	}

	//new game event listener
	newGame.addEventListener("click", function () {
			changeColor(true);
	});

	//add event listeners
	for (var i = 0; i < colorSquareList.length; i++) {
		colorSquareList[i].addEventListener("click", function () {
			if (this.style.backgroundColor === colors[answer_index]) {
				guessText.textContent = "Correct!";
				changeColor(false);
				newGame.textContent = "PLAY AGAIN?";	
			}
			else {
				guessText.textContent = "Try again";
				this.style.backgroundColor = bkgColor;	
			}
		});
	}	
}

function rand(min, max) {
	return Math.floor(Math.random() * (max-min+1) + min);
}

function randColor() {
	return "rgb(" + rand(0, 255) + ", " + rand(0, 255) + ", " + rand(0, 255) + ")";
}

//update color based on whether it's a reset or not
function changeColor(isReset)
{
	//set color squares
	for (var j = 0; j < colorSquareList.length; j++) {	
		if (isReset) {
			if (j < numTiles) {
				colors[j] = randColor();
				colorSquareList[j].style.display = "block";
				colorSquareList[j].style.backgroundColor = colors[j];
			}
			else {
				colorSquareList[j].style.display = "none";	
			}
		}
		else {
			colorSquareList[j].style.backgroundColor = colors[answer_index];
		}
	}

	//reset other elements
	if (isReset) {
		answer_index = rand(0,numTiles-1);
		jumbo.style.backgroundColor = "steelblue";
		colorText.textContent = colors[answer_index];
		colorText.style.textTransform = "uppercase";
		newGame.textContent = "NEW COLOR";
		guessText.textContent = "";
	}
	else {
		jumbo.style.backgroundColor = colors[answer_index];
	}
}