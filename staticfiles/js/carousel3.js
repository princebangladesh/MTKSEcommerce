$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	items: 1,
	stagePadding:0,
	loop: false,
	rewind:true,
	autoplay: true,
	autoplayTimeout: 7000,
	autoplayHoverPause: true,
	autoHeight:true,
	autowidth:true,
	smartSpeed:400,
	nav:true,
	navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],
	onTranslate: animateSlide,
      // onTranslate: removeAnimation,
	// onDrag:function () {
	// 	item.addClass("fadeOutUp")
	// },
	// onDragged:function (){
	// 	item.removeClass("fadeOutUp")
	// }
	// afterMove:function(){
	// 	$(".caption").textillate('start')
	// }
	});
	
	// function removeAnimation() {
	// 	item.addClass("fadeInDown");
	//   }
    
	function animateSlide() {
		$(".caption").hide()
		setTimeout(() =>{$(".caption").show().textillate('start')},500)
	  }

	$(".owl-item:first .caption").textillate({
		in:{effect:"fadeInUp",delayScale:1},
		initialDelay:1000

	});
	$(".owl-item:not(:first) .caption").textillate({
		in:{effect:"fadeInRightBig",delayScale:1},
	});
	// owl.on('changed.owl.carousel',function(){		
	// 	$(".caption").hide()
	// 	setTimeout(() =>{$(".caption").show().textillate('start')},500)
	// 	;
	//   })
	  
	
})

