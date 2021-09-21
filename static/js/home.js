$(document).ready(function(){
  // Initialize Tooltip
  
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(e) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      e.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        
      });
    } // End if
  });
  $('.product-slider').owlCarousel({
    items:1,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 400,
    autoplayHoverPause:true,
    loop:true,
    nav:true,
    merge:true,
    dots:false,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
      0: {
        items:2,
      },
      300: {
        items:2,
      },
      480: {
        items:2,
      },
      768: {
        items:3,
      },
      1170: {
        items:4,
      },
    }
  });

  $(".product-slider .product-btn i").click(function(){
    $(this).toggleClass("bxs-check-circle")
  })

})