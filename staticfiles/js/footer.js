$(document).ready(function(){
  function FooterSlide() {
    if($(window).width() < 991 ){
      $(".footerHover .borderTB").click(function(e) {
        e.preventDefault();
        
        var $div = $(this).next('.footerContent');
        var $div2 = $(this).next('.plusminus');
        $(".footerContent").not($div).slideUp(800)
        $(".plusminus").not($div2).removeClass("active")
        
          if ($div.is(":visible")) {
              $div.slideUp(500)
              $(".plusminus",this).removeClass("active")

          }  
          else {
             $div.slideDown(800)
             $(".plusminus",this).addClass("active")

          }
      });
    }
    else{
      $(".footerContent").slideDown()

    }
    
  }




  $(window).resize(function () {
    if($(window).width() < 991 ){
      $(".footerHover .borderTB").click(function(e) {
        e.preventDefault();

        var $div = $(this).next('.footerContent');
          if ($div.is.not(":visible")) {
              $div.slideDown(800)
             $(".plusminus",this).addClass("active")
          }
          else{
            $div.slideUp(500)
            $(".plusminus",this).removeClass("active")


          }

      });
    }
    else{
      $(".footerContent").slideDown()

    }
  })
  
  
  FooterSlide()
  
});