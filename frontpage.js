$(document).ready(function(){
	var windowSize = $(window).width();
	var logo = document.getElementById('icon');
	var slogandiv = document.getElementById('slogan');
	 var span1 = document.getElementsByClassName('notbold');
	 var span2 = document.getElementsByClassName('neither');
	 var span3 = document.getElementsByClassName('italicize'); 
	 var link1 = document.getElementsByClassName('a1');
	 var portfolio = document.getElementsByClassName('a2');
	 var emailetc = document.getElementsByClassName('a3');
	$(link1).on().hover(function(){
		if (windowSize >= 1051){
				$('.underline4').addClass('animated bounce');
	$('.underline4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$(this).removeClass('animated bounce');
});
		}
		else {
	$('.underline4').addClass('animated bounce');
	$('.underline4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$(this).removeClass('animated bounce');

});
	}
});
	$(portfolio).on().hover(function(){
		var windowSize = $(window).width();
if (windowSize >= 1051){
	$('.underline5').addClass('animated bounce');
$('.underline5').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$(this).removeClass('animated bounce');
});
	}
	else {
$('.underline4').addClass('animated bounce');
	$('.underline4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$(this).removeClass('animated bounce');
});	
	}
});
	$(emailetc).on().hover(function(){
		var windowSize = $(window).width();
if (windowSize >= 1051){
	$('.underline6').addClass('animated bounce');
$('.underline6').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$(this).removeClass('animated bounce');
});
	}
	else {
$('.underline4').addClass('animated bounce');
	$('.underline4').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	$(this).removeClass('animated bounce');
});
	}
});
	if (windowSize <= 500){
			$(slogandiv).remove();
			$(span1).remove();
			$(span2).remove();
			$(span3).remove();
			$(link1).html('Skills');
			$(portfolio).html('My Work');
			$(emailetc).html('Contact');
}
});