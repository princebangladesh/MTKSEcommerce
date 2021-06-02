$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	items: 1,
	stagePadding:0,
	loop: false,
	rewind:true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	autoHeight:true,
	autowidth:true,
	smartSpeed:450,
	nav:true,
	navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
	// onTranslated: animateSlide,
      // onTranslate: removeAnimation,
	// onDrag:function () {
	// 	item.addClass("fadeOutUp")
	// },
	// onDragged:function (){
	// 	item.removeClass("fadeOutUp")
	// }
	});
	
	// function removeAnimation() {
	// 	item.addClass("fadeInDown");
	//   }
    
	// function animateSlide() {
	// 	item.removeClass("fadeInDown");
	//   }

	
})

