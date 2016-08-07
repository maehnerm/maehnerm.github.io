$(document).ready(function(){

  //PARALAX
  var $window = $(window);

  $('div[data-type="background"]').each(function(){
    var $bgobj = $(this);
    $(window).scroll(function() {
      var yPos = -($window.scrollTop() / $bgobj.data('speed'));
      var coords = '50% '+ yPos + 'px';
      $bgobj.css({
        backgroundPosition: coords
      });
    });
  });


  //ONLOAD FADE
  $('body').css('opacity','1');


  //ANIMATED SCROLL
  $('a[href*="#"].js-aniscroll:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }

  });

  //on click close menu
  $('.menu-item').click(function(){
    $('.menu-open').prop('checked', false);
  });



});/*END SCRIPT*/
