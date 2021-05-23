$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
	animateOut: 'fadeOut',
	items: 1,
	loop: false,
	rewind:true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	autoHeight:true,
	nav:true,
	navText:["<i class='bx bxs-chevron-left'></i>","<i class='bx bxs-chevron-right'></i>"]
	});
    })

