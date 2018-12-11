var h1_score1 = document.querySelector("#score1");
var h1_score2 = document.querySelector("#score2");
var input_max = document.querySelector("#maxInput");
var btn_1 = document.querySelector("#player1");
var btn_2 = document.querySelector("#player2");
var btn_reset = document.querySelector("#reset");

var score1 = 0;
var score2 = 0;
var max = 5;

//buttons to add score
btn_1.addEventListener("click", increaseScore1);
btn_2.addEventListener("click", increaseScore2);

function increaseScore1() {
	if (score1 < max) {
		score1++;
		h1_score1.textContent = score1;
	}
	if (score1 === max) {
		h1_score1.classList.add("green");
		btn_1.disabled = true;
		btn_2.disabled = true;
	}
}

function increaseScore2() {
	if (score2 < max) {
		score2++;
		h1_score2.textContent = score2;
	}
	if (score2 === max) {
		h1_score2.classList.add("green");
		btn_1.disabled = true;
		btn_2.disabled = true;
	}
}

//reset
btn_reset.addEventListener("click", reset);

function reset() {
	score1 = 0;
	score2 = 0;
	h1_score1.textContent = 0;
	h1_score2.textContent = 0;
	h1_score1.classList.remove("green");
	h1_score2.classList.remove("green");
	btn_1.disabled = false;
	btn_2.disabled = false;
}

//update max
input_max.addEventListener("change", function () {
	max = Number(this.value);
	document.querySelector("#maxText").textContent = max;
	reset();
});