/**	
	* Template Name: WpF Degree - Ultra Responsive Bootstrap Educational Html5 Template
	* Version: 1.0	
	* Template Scripts
	* Author: WpFreeware Team
	* Author URI: http://wpfreeware.com/

	Custom JS
	
	1. DROPDOWN MENU
	2. SUPERSLIDES SLIDER
	3. NEWS SLIDER
	4. SKILL CIRCLE
	5. WOW SMOOTH ANIMATIN
	6. COURSE SLIDER
	7. TUTORS SLIDER
	8. BOOTSTRAP TOOLTIP
	9. PRELOADER
	10. EVENTS SLIDER
	11. GALLERY SLIDER
	12. SCROLL TOP BUTTON
	13. SCROLL UP BUTTON	 	
	
**/

if(document.querySelector(".mySwiper")){
	var swiper = new Swiper(".mySwiper", {
		loop: true,
		loopFillGroupWithBlank: true,
		spaceBetween: 30,
		speed: 700,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			650: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			}
		},
	});
}


function openTab(evt, name) {
	// Declare all variables
	var i, tabcontent, tablinks;
  
	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(name).style.display = "block";
	evt.currentTarget.className += " active";
  }

if ( document.querySelector(".tablinks.active")) {
	document.querySelector(".tablinks.active").click()
}
  
jQuery(function($){


	/* ----------------------------------------------------------- */
  /*  1. DROPDOWN MENU
  /* ----------------------------------------------------------- */

   // for hover dropdown menu
  $('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });
	
	/* ----------------------------------------------------------- */
	/*  2. SUPERSLIDES SLIDER
	/* ----------------------------------------------------------- */
	$('#slides').superslides({
      animation: 'fade',
      animation_easing: 'linear',
      pagination: 'true'
    });
	
	/* ----------------------------------------------------------- */
	/*  3. NEWS SLIDER
	/* ----------------------------------------------------------- */
	$('.single_notice_pane').slick({     
      slide: 'ul'
      
    });
    $('[href="#notice"]').on('shown.bs.tab', function (e) {
    $('.single_notice_pane').resize();
	});
	 $('[href="#news"]').on('shown.bs.tab', function (e) {
    $('.single_notice_pane').resize();
	});   
    


	/* ----------------------------------------------------------- */
	/*  4. SKILL CIRCLE
	/* ----------------------------------------------------------- */

	$('#myStathalf').circliful();
	$('#myStat').circliful();
	$('#myStathalf2').circliful();
	$('#myStat2').circliful();
	$('#myStat3').circliful();
	$('#myStat4').circliful();
	$('#myStathalf3').circliful();

	/* ----------------------------------------------------------- */
	/*  5. WOW SMOOTH ANIMATIN
	/* ----------------------------------------------------------- */

	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100
      }
    );
    wow.init();


	/* ----------------------------------------------------------- */
	/*  6. COURSE SLIDER
	/* ----------------------------------------------------------- */
	
    $('.course_nav').slick({
	  dots: false,
	  infinite: false,
	  speed: 300,
	  slidesToShow: 3,
	  arrows:true,  
	  slidesToScroll: 3,
	  slide: 'li',
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	/* ----------------------------------------------------------- */
	/*  7. TUTORS SLIDER
	/* ----------------------------------------------------------- */

	 $('.tutors_nav').slick({
	  dots: true,	  
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  arrows:false,  
	  slidesToScroll: 1,
	  slide: 'li',
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        arrows:false
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
		

	/* ----------------------------------------------------------- */
	/*  8. BOOTSTRAP TOOLTIP
	/* ----------------------------------------------------------- */
		$('.soc_tooltip').tooltip('hide')



	/* ----------------------------------------------------------- */
	/*  9. PRELOADER 
	/* ----------------------------------------------------------- */
	  window.addEventListener('DOMContentLoaded', function() {
        new QueryLoader2(document.querySelector("body"), {
            barColor: "#efefef",
            backgroundColor: "#111",
            percentage: true,
            barHeight: 1,
            minimumTime: 200,
            fadeOutTime: 1000
        });
    });


    /* ----------------------------------------------------------- */
	/*  10. EVENTS SLIDER
	/* ----------------------------------------------------------- */
	   
	$('.events_slider').slick({
	  dots: true,
	  infinite: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	});

    /* ----------------------------------------------------------- */
	/*  11. GALLERY SLIDER
	/* ----------------------------------------------------------- */
	 $('#gallerySLide a').tosrus({
          buttons: 'inline',
          pagination  : {
            add     : true,
            type    : 'thumbnails'            
          },
          caption   : {
            add     : true
          }
        }); 	

	/* ----------------------------------------------------------- */
	/*  12. SCROLL UP BUTTON
	/* ----------------------------------------------------------- */

	//Check to see if the window is top if not then display button

	  $(window).scroll(function(){
	    if ($(this).scrollTop() > 300) {
	      $('.scrollToTop').fadeIn();
	    } else {
	      $('.scrollToTop').fadeOut();
	    }
	  });
	   
	  //Click event to scroll to top

	  $('.scrollToTop').click(function(){
	    $('html, body').animate({scrollTop : 0},800);
	    return false;
	  });
	
});