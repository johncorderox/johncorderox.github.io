$(document).ready(function(){

  $('.intro p, .links').delay(150).slideDown(800);

$('#bubble').mouseenter(function(){

  $('.image-section').hide();
  $('.portfolio-text').fadeIn();
  $(this).css("background-color", "#ECCEBD");

});

$('#bubble').mouseleave(function(){

  $('.image-section').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text').hide();

});

$('#log').mouseenter(function(){

  $('.image-section-log').hide();
  $('.portfolio-text-log').fadeIn();
  $(this).css("background-color", "#ECCEBD");

});

$('#log').mouseleave(function(){

  $('.image-section-log').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text-log').hide();

});

$('#et').mouseenter(function(){

  $('.image-section-et').hide();
  $('.portfolio-text-et').fadeIn();
  $(this).css("background-color", "#ECCEBD");

});

$('#et').mouseleave(function(){

  $('.image-section-et').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text-et').hide();

});

$('#katsu').mouseenter(function(){

  $('.image-section-katsu').hide();
  $('.portfolio-text-katsu').fadeIn();
  $(this).css("background-color", "#ECCEBD");

});

$('#katsu').mouseleave(function(){

  $('.image-section-katsu').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text-katsu').hide();

});


$('#socialize').mouseenter(function(){

  $('.image-section-socialize').hide();
  $('.portfolio-text-socialize').fadeIn();
  $(this).css("background-color", "#ECCEBD");

});

$('#socialize').mouseleave(function(){

  $('.image-section-socialize').show();
  $(this).css("background-color", "#eeeeee");
  $('.portfolio-text-socialize').hide();

});

});
