$(document).ready(function(){
	$("#nav-icon3").click(function(){
		$(this).toggleClass('open');
		// this makes the links appear
		$(".links").toggle();
		// this makes the whole background change color
		$("body").toggleClass("backgroundChange")
	});
});
$("li").hover(function(){

	$(this).css({"width":"100%","text-align":"center",
	"-webkit-transition":"1.0s ease-in-out", "background-color":"#DBEDFF"});
	},

	function(){
	$(this).css({"width":"","text-align":"", "background-color":""});
	}
);
