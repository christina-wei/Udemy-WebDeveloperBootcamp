var ulList = document.querySelectorAll("li");

for (var i = 0; i < ulList.length; i++) {
	
	//highlight text to hovered on
	ulList[i].addEventListener("mouseover", function() {
		this.classList.add("hover");
	});

	//remove highlight when text is not hovered on
	ulList[i].addEventListener("mouseout", function() {
		this.classList.remove("hover");
	});

	//strikethrough
	ulList[i].addEventListener("click", function () {
		this.classList.toggle("done");
	});
}

//MDN event elements
// document.querySelectorAll("tr").length - document.querySelectorAll("table").length