$(function() {
	$('#travel-button').on('click', function() {
		console.log($(this).attr('data'))
		var data = {location:$(this).attr('data')};
		$.get('/search', data, function(results) {
			console.log(results)
			$('#current').text(results["current"]);
			$('#description').text(results["description"]);
			$('#travel-button').attr('data', results["next"]);
		});
	});
});