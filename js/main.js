$(document).ready(function(){
  // scroll link
  $('a[href*=#]').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'swing');
	});
});
