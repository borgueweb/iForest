///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 40) {
        $('#navbar_top').addClass("fixed-top");
        $('#navbar_top').addClass("bg-white");
        // add padding top to show content behind navbar
        $('#panel-1').css('padding-top', $('#navbar_top').outerHeight() + 'px');
      }else{
        $('#navbar_top').removeClass("fixed-top");
        $('#navbar_top').removeClass("bg-white");
         // remove padding top from body
        $('#panel-1').css('padding-top', '0');
      }   
  });
} // end if