$(document).ready(function(){
	var windowSize = $(window).width();
	var logo = document.getElementById('icon');
	 var link1 = document.getElementsByClassName('a1');
	 var portfolio = document.getElementsByClassName('a2');
	 var night = document.getElementsByClassName('switch');
	 var desc = document.getElementsByClassName('description');
	 	 var thenavbar = document.getElementById('menu')
	 	 	 	 var background = document.getElementById('pageg')
	 var nightcolor = ('#25283D');
	 var defaultcolor = ('white');
	 $(night).click(function(){
	 	if($('#desc').hasClass('description')){
	 	$(desc).toggleClass('descriptiondark');
	 	$(thenavbar).toggleClass('navbardark');
	$(document.body).toggleClass('bodydark');
	$(document.body).toggleClass('bodybg');
	 } 
	});
});
