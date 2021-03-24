///////////////// fixed menu on scroll for desktop
if ($(window).width() > 0) {
    $('.first').css('padding-top', $('#navbar_top').outerHeight() + 'px');
  $(window).scroll(function(){  
     if ($(this).scrollTop() > 40) {
        $('#navbar_top').addClass("fixed-top");
        $('#navbar_top').addClass("bg-white");
        $('#navbar_top').addClass("shadow-sm");
        $('#navbar_top').removeClass("position-absolute");
        // add padding top to show content behind navbar
        
      }else{
        $('#navbar_top').removeClass("fixed-top");
        $('#navbar_top').removeClass("bg-white")
        $('#navbar_top').removeClass("shadow-sm");;
        $('#navbar_top').addClass("position-absolute");
         // remove padding top from body
        //$('#panel-1').css('padding-top', '0');
      }   
  });
} // end if