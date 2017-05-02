/* Mark Wilson
 04/08/2017
 Term Project Functions */
$(document).ready(function() {
	// add vecta menu plugin
	$("#vecta_menu").highlightMenu({
		// add in colours and width desired
		color : 'white',
		hoverBgColor : '#000',
		hoverColor : 'yellow',
		linkWidth : '125px'
	});

	var slider = $("#image_list");
	// slider = ul element
	var leftProperty,
	    newleftProperty;

	// the click event handler for the right button
	$("#right_button").click(function() {
		// get value of current left property
		leftProperty = parseInt(slider.css("left"));
		// determine new value of left property
		if (leftProperty - 350 <= -700) {
			newLeftProperty = 0;
		} else {
			newLeftProperty = leftProperty - 350;
		}
		// use the animate function to change the left property
		slider.animate({
			left : newLeftProperty
		}, 1000);
	});
	// end click

	// the click event handler for the left button
	$("#left_button").click(function() {
		// get value of current right property
		leftProperty = parseInt(slider.css("left"));

		// determine new value of left property
		if (leftProperty < 0) {
			newLeftProperty = leftProperty + 350;
		} else {
			newLeftProperty = 0;
		}

		// use the animate function to change the left property
		slider.animate({
			left : newLeftProperty
		}, 1000);
	});
	// end click

	// set up event handlers
	$("#image_list a").click(function(evt) {
		var imageURL = $(this).attr("href");

		$("#image_swap").animate({
			opacity : 0,
			left : "-=205"
		}, 1000, function() {
			$("#image_swap").attr("src", imageURL);
			$("#image_swap").animate({
				opacity : 100,
				left : "+=205"
			}, 1000);
		});

		evt.preventDefault();
	});

});
// end ready