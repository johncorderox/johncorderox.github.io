$(document).ready(function(){

  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

  $('.intro p, .links').delay(150).slideDown(800);



$("#projects").click(function() {
    $('html,body').animate({
        scrollTop: $("#project-squares").offset().top},
        1000);
});

});
