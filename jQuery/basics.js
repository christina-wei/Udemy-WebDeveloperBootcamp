// jQuery Basics
// http://youmightnotneedjquery.com/ translating between jQuery & DOM

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