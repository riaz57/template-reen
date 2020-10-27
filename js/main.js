$(document).ready(function() {
	
	/*=====	owl slider	========*/

	$('#header_bottom nav').meanmenu({
		meanScreenWidth: "1024",
	});

	/*=====	owl slider	========*/

	$('#work_area .owl-carousel').owlCarousel({
	    loop:true,
	    margin:20,
	    autoplay: true,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        768:{
	            items:2,
	        },
	        1024:{
	            items:4,
	            dots: true,
	            dotsEach: 3,
	        }
	    }
	})

});