$('.banner2-slider').owlCarousel({
      items:1,
      autoplay:true,
      margin:10,
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
        1024: {
          items:2,
        },
        1250: {
          items:3,
        },
        
        1600: {
          items:4,
        },
        1900: {
          items:5,
        },
      }
    });