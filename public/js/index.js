$(document).ready(function(){
	$(".menu-hover").hover(function(){
		$(this).css("border-bottom", "1.5px solid white")
		$(this).css("padding-bottom", "6px")
		$(this).css("color", "white")
	},
	function(){
		$(this).css("border-bottom", "none")
		$(this).css("padding-bottom", 0)
		$(this).css("color", "#A5A5A5")
	});
})