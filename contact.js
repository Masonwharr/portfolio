$(document).ready(function(){
	var teambtn = document.getElementById('team');
	var projectbtn = document.getElementById('project');
var box = document.getElementById('profilebox');
	$(teambtn).click(function(){
		$(box).html('<div class="profiles">' 
			+ '<p class="boxtext">'
			+ 'As a great communicator, and team member, I would love to be a positive addition to your frontend team!' 
			+ '<br>' 
			+ 'Contact me: mason.harr2@gmail.com' 
			+ '<a target="_blank" href="https://github.com/Masonwharr">' 
			+ '<img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" width="100px" height="25px" align="center" class="social3">' 
			+ '</a>'
			+ '<a target="_blank" href="https://www.linkedin.com/in/mason-harr-a42633133?trk=hp-identity-name">' 
			+ '<img src="http://www.free-icons-download.net/images/linkedin-logo-icon-75239.png" width="100px" height="100px" align="center" class="social4">' 
			+ '</a>'
			+ '</p>'
			+ '</div>');
	});
$(projectbtn).click(function(){
			$(box).html('<div class="profiles">' 
			+ '<p class="boxtext">'
			+ 'Want me to join you for a frontend portion of a project? Need me to make you a website?' 
			+ '<br>' 
			+ 'Contact me: mason.harr2@gmail.com' 
			+ '<a target="_blank" href="https://github.com/Masonwharr">' 
			+ '<img src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png" width="100px" height="25px" align="center" class="social3">' 
			+ '</a>'
			+ '<a target="_blank" href="https://www.linkedin.com/in/mason-harr-a42633133?trk=hp-identity-name">' 
			+ '<img src="http://www.free-icons-download.net/images/linkedin-logo-icon-75239.png" width="100px" height="100px" align="center" class="social4">' 
			+ '</a>'
			+ '</p>'
			+ '</div>');
	});



});