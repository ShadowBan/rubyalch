$(document).ready(function() {
	$("#flickr .wrap .flickr_badge_image a").each(function(i){
		var src = $(this).find("img").attr("src");
		var title = $(this).find("img").attr("title");
		var src2 = src.replace(/_s.jpg/g, ".jpg");
		$(this).removeAttr("href");
		$(this).attr({
			href: src2,
			title: title,
			rel: 'prettyPhoto[flickr_gal]'
		});
	});
});



$(document).ready(function() {
	$("#navigation li:last-child").css("background", "none");
	$("#navigation li ul").parent().addClass('multi');
	$("#middle div.box div.widget:last").css("background", "none");
	$("#middle #twitter ul li:last-child, #middle div.box div.widget p:last").css("background", "none"); 
	$("#middle div.box div.widget:last").css("padding-right", "20px");
	$("#middle div.box div.widget:first").css("padding-left", "20px");
	$("#middle #twitter ul li:first-child, #middle #twitter ul li:last-child").css("padding-left", "0").css("padding-rigt", "0"); 
	$("#content .post small span:last-child").css("background", "none");
	$("#content .post small span:first-child").css("padding-left", "0");
	$("#content .hentry:last").css("background", "none").css("padding-bottom", "50px");
});



Cufon.replace('h1, #sidebar h2, #middle h2, #middle h3, #bottom h3, #content h3, #searchform div label, #search div label', { fontFamily: 'Advent' });

Cufon.replace ('a.logo, a.view', { fontFamily: 'Advent', hover: {color: '#fefefe' }})('a.logo', {hover: true});
