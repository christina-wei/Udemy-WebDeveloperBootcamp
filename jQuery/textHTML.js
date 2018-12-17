// jQuery examples
// api.jquery.com
// http://youmightnotneedjquery.com/ translating between jQuery & DOM

//text, html, attr, val, addClass, removeCLass, toggleClass

$("h1").css("border","2px solid red");

$("h1").css("color","yellow");
//document.querySelector("h1").style.color="orange";

//use an object to pass in style
var styles = {
	backgroundColor: "pink",
	fontWeight: "bold"
};
$("#special").css(styles);

$("li").css("color", "blue");
// var lis = document.querySelectorAll("li");
// for (var i = 0; i < lis.length; i++) {
// 	lis[i].style.color = "blue";
// }

$("a").css("font-size", "40px");
$("li").css({
	fontSize: "10px",
	border: "3px dashed purple",
	background: "rgb(89,45,20,0.5)"
});

console.log($("h1").text());
console.log($("ul").text());
console.log($("li").text());

$("h1").text("Change the text!");
$("li").text("Cats, Dog, adoable"); //changed all li to the same text

console.log($("ul").html());

$("ul").html("<li>I hacked your UL!</li><li>Darthie is cute</li><li>Anakin is loyal</li>");
// $("li").html("<a href='google.com'>CLICK ME</a>");

$("img").css("width", "200px");

console.log($("input").attr("type"));

// $("input").attr("type", "color");
// $("input").attr("type", "checkbox");

// $("img").attr("src", "https://c1.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
$("img:first-of-type").attr("src", "https://c1.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
$("img").last().attr("src", "https://c1.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");

// val: get value from input
$("input").val("Darth Vader");
console.log($("select").val());


$("h1").addClass("correct");
$("h1").removeClass("correct");
$("li").toggleClass("wrong");
$("li").first().toggleClass("wrong");


// click, keypress, on

$("button").click(function() {
	$(this).css("backgroundColor", "green");
	console.log("You clicked " + $(this).text());
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		alert("You hit enter");
	}
});

$("li").on("click", function () {
	console.log("Using ON function");
	$(this).css("color", "purple");
})

$("button").on("mouseenter", function () {
	$(this).css("font-weight", "bold");
})

$("button").on("mouseleave", function () {
	$(this).css("font-weight", "normal");
})

// fading effects: fadeOut, fadeIn, fadeToggle
// slide effects: slideDown, slideup, slideToggle
$("#fadeBtn").on("click", function() {
	$(".fade").fadeOut(1000, function () {
		$(this).remove();	
	});
});


