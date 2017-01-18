$(document).ready(function(){
		var windowSize = $(window).width();
	var sites = document.getElementsByClassName('pro');
		var projects = document.getElementsByClassName('school');
				var link = document.getElementsByClassName('siteimgs');
				var text = document.getElementsByClassName('paragraph');
var appendedtext = document.getElementsByClassName('site');
			var work = document.getElementById('prowork');
						var textbox = document.getElementById('paracontainer');
				var school = document.getElementById('schoolwork');
		$(sites).click(function() {
		$('html, body').animate({
			scrollTop: $(work).offset().top
		}, 'slow');
	});				$(projects).click(function() {
		$('html, body').animate({
			scrollTop: $(school).offset().top
		}, 'slow');
});
	if (windowSize <= 700) {
$(textbox).remove();
$(text).remove();

	}
	$(link).mouseenter(function(){
$(this).append('<span class="site" align="center">' + 'Websitelance.com' + '</span>');
	});
		$(link).mouseleave(function(){
$(appendedtext).remove();
	});
		$(link).click(function(){
			window.open('http://www.websitelance.com');
		});
});