/* Mark Wilson
 04/08/2017
 Term Project Functions */
"use strict"
$(document).ready(function() {
	// add span element after each input element
	$(":text").after("<span></span>");

	// move focus to first text box
	$("#email").focus();

	// add vecta menu plugin
	$("#vecta_menu").highlightMenu({
		// add in colours and width desired
		color : 'white',
		hoverBgColor : '#000',
		hoverColor : 'yellow',
		linkWidth : '125px'
	});

	$("#question").click(function() {
		$("#question").animate({
			width : 500,
			height : 200,
			backgroundColor : "#ededed",
			color : "black"
		}, 1000);

	});

	// the handler for the click event of a submit button
	$("#contact_validator").submit(function(event) {
		var isValid = true;

		// validate the email entry with a regular expression
		var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
		var email = $("#email").val();
		if (email == "") {
			$("#email").next().text("This field is required.");
			isValid = false;
		} else if (!emailPattern.test(email)) {
			$("#email").next().text("Must be a valid email address.");
			isValid = false;
		} else {
			$("#email").next().text("");
		}
		// validate the first name entry
		var firstName = $("#first_name").val().trim();
		if (firstName == "") {
			$("#first_name").next().text("This field is required.");
			isValid = false;
		} else {
			$("#first_name").val(firstName);
			$("#first_name").next().text("");
		}
		// validate the last name entry
		var lastName = $("#last_name").val().trim();
		if (lastName == "") {
			$("#last_name").next().text("This field is required.");
			isValid = false;
		} else {
			$("#last_name").val(lastName);
			$("#last_name").next().text("");
		}
		// validate the phone number (regular expression)
		if ($("#phone").val() == "") {
			$("#phone").next().text("This field is required.");
			isValid = false;
		} else {
			$("#phone").next().text("");
		}

		// prevent the submission of the form if any entries are invalid
		if (isValid == false) {
			event.preventDefault();
		}
		//show alert box if data is valid
		if (isValid == true) {
			alert("Someone will contact you shortly");
		}
	} // end function
	);
	// end submit
	var geocoder = new google.maps.Geocoder();
	geocoder.geocode({
		address : "1457 London Rd, Sarnia, ON N7S 6K4"
	}, function(results) {
		var myLatLng = results[0].geometry.location;

		var mapOptions = {
			zoom : 11,
			center : myLatLng,
			mapTypeId : google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map($("#map").get(0), mapOptions);

		var homeMarker = new google.maps.Marker({
			position : myLatLng,
			map : map
		});

		overlay.setMap(map);
	});
});
