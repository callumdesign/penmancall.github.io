$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 150) {
    $('.portfolio').show();
  } else {
    $('.portfolio').hide();
  }
});