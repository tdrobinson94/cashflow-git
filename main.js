$(window).scroll(function(){
  var top = $(window).scrollTop();
  if (top > 2){
    $('.navbar').addClass('black_background');
  }
  else {
    $('.navbar').removeClass('black_background');
  }
})
