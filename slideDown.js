$(document).ready(function(){
	//menu v2
	$(".menu-1").mouseover(function(){
		$(this).children(".submenu").show(200);
	});
	$(".menu-1").mouseleave(function(){
		$(this).children(".submenu").hide(200);
	});
	
});