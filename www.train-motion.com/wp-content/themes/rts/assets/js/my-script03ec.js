
jQuery(window).on('load resize',function(e){

	vpw = jQuery(window).width(); console.log(vpw);


	 vph = jQuery(window).height()-120;
	 cph=jQuery('.full-page > .content-wrap').height(); //content height
   		if( cph < vph){
   			 jQuery('.full-page').height(vph);
   			 jQuery('.product-full-page').height(vph+40);
		}
		else{
			jQuery('.full-page').height(cph);
			jQuery('.product-full-page').height(cph);
		}


    jQuery('.video-wrapp').height(vph+120);

    

    if(jQuery(window).width()>=768){

    	jQuery('html,body').scrollTop(0);

    	// console.log('sm');
    	jQuery(".scroll-details").slimScroll({
  			height:'auto'
  		});


  		jQuery('.slick-list').height(vph+40);
    }

    else{
    	// console.log('xs');
    	jQuery(".scroll-details").slimScroll({
  			destroy:true
  		});
    	jQuery('.summary > .slimScrollBar').remove();
    	jQuery('.summary > .slimScrollRail').remove();
    	jQuery('.summary > .scroll-details').css('overflow','visible');
    	jQuery('.summary > .scroll-details').css('height','auto');
    	jQuery(' .summary > .slimScrollDiv').css('height','auto');
    }

   



});


jQuery(document).ready(function($){

	  $('#fullpage').fullpage();

	vpw = $(window).width();
    vph = $(window).height()-120;

    $('.site-inner').css('min-height',vph+120);

    var cph=$('.full-page > .content-wrap').height(); //content height
    console.log('cph '+cph);
    console.log('vph '+vph);

    if( cph < vph){
   	 $('.full-page').height(vph);
   	 $('.product-full-page').height(vph+40);
	}
	else{
		$('.full-page').height(cph);
		$('.product-full-page').height(cph);
	}

    if(jQuery(window).width()>=768){
  		$(".scroll-details").slimScroll({
  			height:'auto'
  		});

		
 	 }

 	$(".scroll-wrap").slimScroll({
  			height:500
  		});



 	$('.write-review').click(function(){		
 			$scroll_height=$('.scroll-content').height(); 
 			$('.scroll-details').slimScroll({ scrollTo: $scroll_height});
 	});



 	 $('.gallery-image').mouseenter(function(){
 	 		$(this).stop().removeClass('grayscale');

 	});

 	  $('.gallery-image').mouseleave(function(){
 	 		$(this).stop().addClass('grayscale');

 	});

 	  $('.user-menu').click(function(){

 	  		if($('.rollover').hasClass('rollover-visible')){
 	  				
 	 				$('.rollover').fadeOut('fast'); 
 	  				$('.rollover').removeClass('rollover-visible');
 	  		}
 	  		else{
 	 				
 	 			$('.rollover').fadeIn('fast'); 
 	 				$('.rollover').addClass('rollover-visible');
 	 			}

 	 });

 	  $('.menu-search-button').click(function(){
 	  	console.log(vpw);

 	  	if(vpw > 768 && vpw < 1448){
 	  		show_div('.menu-search-button');
 	  	}
 	  	show_div('.header-search-form');

 	  	
 	  });

 	  $(document).mouseup(function (e)
		{
		    var container = $(".menu-search-button");
		    var container2 = $(".header-search-form");

		    if (!container2.is(e.target) // if the target of the click isn't the container...
		        && container2.has(e.target).length === 0 && container2.hasClass('visible') ) // ... nor a descendant of the container
		    {
		        // show_div(container2);

		        if(vpw >= 768 && vpw < 1448){
		 	  		show_div(container2);
		 	  		show_div(container);
		 	  	}

		 	  
		    }
		});


 	  function show_div(div){
 	  	target=$(div);
 	  	if(target.hasClass('visible')){

 	  		target.removeClass('visible');
 	  		target.fadeOut('fast');
 	  	}

 	  	else{

 	  		target.addClass('visible');
 	  		target.fadeIn('fast');
 	  	}


 	  }


 	  $(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
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

 	 $(document).click(function(){
 	 	$('.woocommerce-message').fadeOut('fast');
 	 	$('.custom-notice').fadeOut('fast');
 	 });

 	 var url = document.location.toString();
		if (url.match('#')) {
		    $('.nav-tabs a[href=#'+url.split('#')[1]+']').tab('show') ;
		} 

		// Change hash for page-reload
		$('.nav-tabs a').on('shown.bs.tab', function (e) {
		    window.location.hash = e.target.hash;
		})

 	 $('.tab-link').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		})

  	$('.slick-slider').slick({
  			infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight:true,
		prevArrow: $ ('.slick-prev'),
		nextArrow: $ ('.slick-next'),
		centerMode:false,
		// centerPadding:'30px',

		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        centerMode:false,
		      }
		    },
		]
  	});

  	$('.project-slider').slick({
  			infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight:true,
		prevArrow: $ ('.slick-prev'),
		nextArrow: $ ('.slick-next'),
		centerMode:false,
		// centerPadding:'30px',

		responsive: [
		    {
		      breakpoint: 768,
		      settings: {
		        centerMode:false,
		      }
		    },
		]
  	});


  	$('.slick-polite').css('padding-right','0px');

	 $(function() {
	  $('.tab-link').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top-200}, 1000);
	        return false;
	      }
	    }
	  });
	});

	  $('.intro-btn').click(function() { console.log('click');
	   	$.fn.fullpage.moveSectionDown();
	  });

	  
});




