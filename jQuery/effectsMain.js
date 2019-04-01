$(document).ready(function() {
  $("#boxDarkGrayHide").on('click', function() {
    $("#boxDarkGray").slideToggle(400);
  });

  $("#boxDarkGray, .mainButton, #title, #boxDarkGrayHide").hide().delay(300).fadeIn(1000);

  $(".content").hide().delay(300).slideDown(1000);

});
