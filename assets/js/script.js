$(document).ready(function() {

  $(".section p").click(function(){
        $(".wrap").scrollTop(50);
});
  $(".description").click (function(){
  $(".welcome").fadeIn (100);

});

  $('#frenchie1').click(function() {
   if ($('.frenchie1').hasClass('')) {
    $('.frenchie2').addClass('.active');
    $('.frenchie3').addClass('.active');
});
