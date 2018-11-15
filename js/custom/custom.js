/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :	MINIMAL TEMPLATE
	Version     :	1.0
	Last Change : 	04/09/2018
	Primary Use :   MINIMAL TEMPLATE

=================================================================================================================================*/

$(document).on('ready', function() {
    "use strict"; //Start of Use Strict
    var menu_li = $('.navbar-nav li a');  
    var collapse = $('.navbar-collapse');  
    var top_nav = $('#top-nav');

	//MENU SCROLL
    if (top_nav.length) {
        var x = top_nav.offset().top;
        if (x > 50) {
            top_nav.fadeIn();
        } else {
            top_nav.fadeOut();
        }
        $(document).on('scroll', function() {
            var y = $(this).scrollTop();
            if (y > 50) {
                top_nav.fadeIn();
            } else {
                top_nav.fadeOut();
            }
        });
    }
	
    //RESPONSIVE MENU SHOW AND HIDE FUNCTION
    if (menu_li.length) {
        menu_li.on("click", function(event) {
			var disp = $(".navbar-toggler").css('display'); 
			if( !$(".navbar-toggler").hasClass('collapsed') ){			
				if(collapse.hasClass('show')){
					collapse.removeClass('show').slideUp( "slow");
				}
			}            
        });    
    }	
	

    //MENU BAR SMOOTH SCROLLING FUNCTION
    var menu_list = $('.navbar-nav');
    if (menu_list.length) {
        menu_list.on("click", ".pagescroll", function(event) {
            event.stopPropagation();
            event.preventDefault();
            var hash_tag = $(this).attr('href');
            if ($(hash_tag).length) {
                $('html, body').animate({
                    scrollTop: $(hash_tag).offset().top - 80
                }, 2000);
            }
            return false;
        });
    }
		
	//GALLERY POPUP
    var gallery = $('.popup-gallery');
    if (gallery.length) {
        $('.popup-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    }
	
	//PORTFOLIO POPUP
    var gallery = $('.popup-portfolio');
    if (gallery.length) {
        $('.popup-portfolio').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
    }
	
	//VIDEO POPUP
    var video = $('.popup-youtube');
    if (video.length) {
        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
	
    // YOUTUBE BACKGROUND VIDEO FUNCTION	  
    var player = $('.player');
    if (player.length) {
        player.mb_YTPlayer();
    }
	
    //CONTACT FORM VALIDATION	
    if ($('.contact-form, .header-form').length) {
        $('.contact-form, .header-form').each(function() {
            $(this).validate({
                errorClass: 'error',
                submitHandler: function(form) {
                    $.ajax({
                        type: "POST",
                        url: "mail/mail.php",
                        data: $(form).serialize(),
                        success: function(data) {
                            if (data) {
                                $('.sucessMessage').html('Mail Sent Successfully!!!');
                                $('.sucessMessage').show();
                                $('.sucessMessage').delay(3000).fadeOut();
                            } else {
                                $('.failMessage').html(data);
                                $('.failMessage').show();
                                $('.failMessage').delay(3000).fadeOut();
                            }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            $('.failMessage').html(textStatus);
                            $('.failMessage').show();
                            $('.failMessage').delay(3000).fadeOut();
                        }
                    });
                }
            });
        });
    }
	
    return false;
    // End of use strict
});