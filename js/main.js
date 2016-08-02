$(document).ready(function(){
  $('.switchbg-color').click(function(){
    var color = $(this).text();
    if(color == "#add8e6"){
      $(this).text('#eeeeee');
      $('body').css('background-color','#add8e6');
    }else{
      $(this).text('#add8e6');
      $('body').css('background-color','#eeeeee');
    }
  });
});
