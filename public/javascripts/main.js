$(function(){
  $(".location").click(function () {
    var parameter = { location: $(this).text() };
    $.get( '/search', parameter, function(data) {
      $('#results').html(data);
    });
  });
});