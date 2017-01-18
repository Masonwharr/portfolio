$(document).ready(function() {
	var windowSize = $(window).width();
	var skillsdiv = document.getElementById('skillsdiv1');
	var skillsimages = document.getElementById('skills');
	var skillsdiv2 = document.getElementById('skillsdiv2');
	var skillsimages2 = document.getElementById('skills2');
	var scroll = document.getElementById('top');
	var topdiv = document.getElementsByClassName('contentholder');
	var topdiv2 = document.getElementsByClassName('school');
	var navtext = document.getElementsByClassName('name');
	var arrow = document.getElementsByClassName('pointerdiv');
	if (windowSize <= 900) {
		$(skillsdiv).remove();
		$(skillsimages).remove();
	}
	if (windowSize <= 525) {
		$(skillsdiv2).remove();
		$(skillsimages2).remove();
	}
	if (windowSize <= 575) {
		$(navtext).remove();
	}
	$(scroll).click(function() {
		$('html, body').animate({
			scrollTop: $(topdiv).offset().top
		}, 'slow');
	});
	if (1 == 1) {
		$(arrow).addClass("animated slideOutDown");
	}
		$(arrow).click(function() {
		$('html, body').animate({
			scrollTop: $(topdiv2).offset().top
		}, 'slow');
	});
});