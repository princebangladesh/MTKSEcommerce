$(document).ready(function(){
  function FooterSlide() {
    if($(window).width() < 991 ){
      $(".footerHover .borderTB").click(function(e) {
        e.preventDefault();
        
        $("i",this).toggleClass("fa-plus fa-minus")
        $(".footerHover .borderTB").not(this).find(".iconplus i").removeClass("fa-minus").addClass("fa-plus")

        var $div = $(this).next('.footerContent');
        $(".footerContent").not($div).slideUp(800)
          if ($div.is(":visible")) {
              $div.slideUp(500)
          }  
          else {
             $div.slideDown(800)
          }
      });
    }
    else{
      $(".footerHover div").slideDown()
    }
    
  }




  $(window).resize(function () {
    if($(window).width() < 991 ){
      $(".footerHover .borderTB").click(function(e) {
        e.preventDefault();
        
        $(".footerHover .borderTB").not(this).find(".iconplus i").removeClass("fa-minus").addClass("fa-plus")

        var $div = $(this).next('.footerContent');
        $(".footerContent").not($div).slideUp(800)
          if ($div.is.not(":visible")) {
              $div.slideDown(800)
              // $("i",this).toggleClass("fa-plus fa-minus")
          }
          else{
            $div.slideUp(500)

          }

      });
    }
    else{
      $(".footerHover div").slideDown()
    }
  })
  
  
  FooterSlide()
  
});