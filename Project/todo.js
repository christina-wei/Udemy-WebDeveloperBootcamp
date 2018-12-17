//practice on, keypress, fades & slides, selecting, marging, padding, float, fonts
//try: jQuery parent, append, creating elements, event delegation
//try: CSS font-awesome, box-shadow, transition, gradients

//hover: get delete button
$("ul").on("mouseenter", "li", function(){
	$(this).children(".trashcan").fadeIn(300);
});

$("ul").on("mouseleave", "li", function(){
	$(this).children(".trashcan").fadeOut(300);
});

//click to delete the item
 $("ul").on("click", ".trashcan", function(e) {
 	$(this).parent("li").fadeOut(300, function (){
 		$(this).remove();
 	});
 	e.stopPropagation();
 });

 //click on text: cross over text
$("ul").on("click", "li", function() {
	$(this).toggleClass("strikeText");
});

//plus sign: toggles to hide form or not
$("#expand").on("click", function() {
	$("input").fadeToggle();
});

//hit enter: add item to the end
$("input").on("keypress", function(e) {
	if (e.keyCode === 13) {
		$("ul").append('<li class="cell item"><span class="trashcan"><i class="far fa-trash-alt"></i></span>' + $(this).val() + "</li>");
		$(this).val("");
	}
})