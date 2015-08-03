$(document).ready(function() {
	$("button").click(function() {
		$("p").hide();
	});

	$.ajax({
		url : "https://restcountries.eu/rest/v1/name/aruba?fullText=true"
	}).then(function(data) {
		$('.greeting-id').append(data);
	});

});