$(document).ready(function(){
	$(".menu-hover").hover(function(){
		$(this).css("border-bottom", "2px solid white")
		$(this).css("padding-bottom", "-3px")
		$(this).css("color", "white")
	},
	function(){
		$(this).css("border-bottom", "none")
		$(this).css("padding-bottom", 0)
	});
})