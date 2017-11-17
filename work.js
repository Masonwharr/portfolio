$(document).ready(function(){
		var windowSize = $(window).width();
	var sites = document.getElementsByClassName('pro');
		var projects = document.getElementsByClassName('school');
				var link1 = document.getElementById('work1');
				var link2 = document.getElementById('work2');
				var link3 = document.getElementById('work3');
				var link4 = document.getElementById('work4');
	                        var link5 = document.getElementById('work5');
	                        var link6 = document.getElementById('work6');
	                        var link7 = document.getElementById('work7');
	var link8 = document.getElementById('work8');
	var link9 = document.getElementById('work9');
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
	$(link1).mouseenter(function(){
$(this).append('<span class="site" align="center">' + 'Websitelance.com' + '</span>');
	});
		$(link1).mouseleave(function(){
$(appendedtext).remove();
	});
		$(link1).click(function(){
			window.open('http://www.websitelance.com');
		});
			$(link2).mouseenter(function(){
$(this).append('<span class="site" align="center">' + 'Street Fighter Jquery Project' + '</span>');
	});
		$(link2).mouseleave(function(){
$(appendedtext).remove();
	});
		$(link2).click(function(){
			window.open('https://github.com/masonwharr/School-Projects/tree/master/ryu%20project');
		});
			$(link3).mouseenter(function(){
$(this).append('<span class="site" align="center">' + 'Weather API Project' + '</span>');
	});
		$(link3).mouseleave(function(){
$(appendedtext).remove();
	});
		$(link3).click(function(){
			window.open('https://github.com/masonwharr/Capstone-School-Project/tree/master/weather');
		});
			$(link4).mouseenter(function(){
$(this).append('<span class="site" align="center">' + 'Fizzbuzz Project' + '</span>');
	});
		$(link4).mouseleave(function(){
$(appendedtext).remove();
	});
		$(link4).click(function(){
			window.open('https://github.com/masonwharr/School-Projects/tree/master/Fizzbuzz%20Project');
		});
				$(link5).mouseenter(function(){
$(this).append('<span class="site" align="center">' + 'Website Concept' + '</span>');
	});
		$(link5).mouseleave(function(){
$(appendedtext).remove();
	});
		$(link5).click(function(){
			window.open('https://github.com/masonwharr/School-Projects/tree/master/website');
		});
	$(link6).mouseenter(function(){
$(this).append('<span class="site" align="center">' + 'Bootstrap Concept' + '</span>');
	});
	
		$(link6).mouseleave(function(){
$(appendedtext).remove();
	});
		$(link6).click(function(){
			window.open('https://github.com/masonwharr/Bootstrapconcept3');
		});
		$(link7).mouseenter(function(){
$(this).append('<span class="site" align="center">' + 'Bootstrap What I Like app' + '</span>');
	});
	
		$(link7).mouseleave(function(){
$(appendedtext).remove();
	});
		$(link7).click(function(){
			window.open('https://github.com/masonwharr/bootstrapproject');
		});
			$(link8).mouseenter(function(){
$(this).append('<span class="site" align="center">' + 'Shopping List App' + '</span>');
	});
	
		$(link8).mouseleave(function(){
$(appendedtext).remove();
	});
		$(link8).click(function(){
			window.open('https://github.com/masonwharr/Projects/tree/master/Shopping-List');
		});
				$(link9).mouseenter(function(){
$(this).append('<span class="site" align="center">' + 'React Meal Picker App' + '</span>');
	});
	
		$(link9).mouseleave(function(){
$(appendedtext).remove();
	});
		$(link9).click(function(){
			window.open('https://codepen.io/Masonwharr/full/dZZNQo/');
		});
});
