$(document).ready(function(){

  $(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

  $('.intro p, .links').delay(150).slideDown(800);


$('#bubble').mouseenter(function(){

  $('.image-section').hide();
  $('.portfolio-text').fadeIn();
  $(this).css("background-color", "#ECCEBD");
  $('#view-bubble').delay(150).fadeIn(1500);

});

$('#bubble').mouseleave(function(){

  $('.image-section').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text').hide();
  $('#view-bubble').hide();

});

$('#log').mouseenter(function(){

  $('.image-section-log').hide();
  $('.portfolio-text-log').fadeIn();
  $(this).css("background-color", "#ECCEBD");
  $('#view-log').delay(150).fadeIn(1500);

});

$('#log').mouseleave(function(){

  $('.image-section-log').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text-log').hide();
  $('#view-log').hide();

});

$('#et').mouseenter(function(){

  $('.image-section-et').hide();
  $('.portfolio-text-et').fadeIn();
  $(this).css("background-color", "#ECCEBD");
  $('#view-et').delay(150).fadeIn(1500);


});

$('#et').mouseleave(function(){

  $('.image-section-et').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text-et').hide();
  $('#view-et').hide();
});

$('#katsu').mouseenter(function(){

  $('.image-section-katsu').hide();
  $('.portfolio-text-katsu').fadeIn();
  $(this).css("background-color", "#ECCEBD");
  $('#view-katsu').delay(150).fadeIn(1500);

});

$('#katsu').mouseleave(function(){

  $('.image-section-katsu').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text-katsu').hide();
  $('#view-katsu').hide();

});


$('#socialize').mouseenter(function(){

  $('.image-section-socialize').hide();
  $('.portfolio-text-socialize').fadeIn();
  $(this).css("background-color", "#ECCEBD");
  $('#view-socialize').delay(150).fadeIn(1500);

});

$('#socialize').mouseleave(function(){

  $('.image-section-socialize').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text-socialize').hide();
    $('#view-socialize').hide();
});

$('#playtest').mouseenter(function(){

  $('.image-section-playtest').hide();
  $('.portfolio-text-playtest').fadeIn();
  $(this).css("background-color", "#ECCEBD");
  $('#view-playtest').delay(150).fadeIn(1500);

});

$('#playtest').mouseleave(function(){

  $('.image-section-playtest').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text-playtest').hide();
    $('#view-playtest').hide();
});

$("#projects").click(function() {
    $('html,body').animate({
        scrollTop: $("#project-squares").offset().top},
        1000);
});

});
