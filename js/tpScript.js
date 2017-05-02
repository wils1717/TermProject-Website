/* Mark Wilson
 04/08/2017
 Term Project Functions */
"use strict"
$(document).ready(function() {
	// add vecta menu plugin
	$("#vecta_menu").highlightMenu({
		// add in colours and width desired
		color : 'white',
		hoverBgColor : '#000',
		hoverColor : 'yellow',
		linkWidth : '125px'
	});
	$("#accordion").accordion({
		event : "click",
		collapsible : true,
		heightStyle: 'content',
		easing : 'easeInExpo'
	});
	$.getJSON("json/team.json", function(data) {
				$.each(data, function() {
					$.each(this, function(key, value) {
						$("#team").append(
							"<p style=\"color:yellow;\">" + value.name + "</p>" + 
							"<p><b>" + value.title + "</b><br>" + 
							"<b>" + value.department + "</b></p>" + 
							value.bio + "<br><br><br>"
						);
					});
				}); 
			});
});
