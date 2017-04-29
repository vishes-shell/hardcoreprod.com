$(window).on('load', function () {
    var $preloader = $('#page-preloader'),
        $spinner   = $preloader.find('.spinner');
    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    
    var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       20,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
      // the callback is fired every time an animation is started
      // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();
    

    
    $.fn.scrollView = function () {
        return this.each(function () {
            $('html, body').animate({
              scrollTop: $(this).offset().top - 100
            }, 1000);
        });
    }
    
    $('#about-us').click(function () {
        $('.about-wrapper').scrollView();
    });
    $('#formats').click(function () {
        $('.formats-wrapper').scrollView();
    });
    $('#portfolio').click(function () {
        $('.portfolio-wrapper').scrollView();
    });
    $('#additional').click(function () {
        $('.additional-wrapper').scrollView();
    });
    $('#contact').click(function () {
        $('.contacts-wrapper').scrollView();
    });
    
    $('#video').css('min-height', $(window).height() + 'px');
    $('.video-wrapper').css('min-height', $(window).height() + 'px');
    $(window).resize(function () {
        $('#video').css('min-height', $(window).height() + 'px');
        $('.video-wrapper').css('min-height', $(window).height() + 'px');
    });
    
    windowWidth = $(window).width();
    transformWidth = windowWidth * 0.275 - 30;
    
    windowHeight = $(window).height();
    transformHeight = windowHeight * 0.465 - 35;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        var lastScrollTop = 0;
        $(window).scroll(function(event){
           var st = $(this).scrollTop();
           if (st > lastScrollTop){
               transformHeight = windowHeight * 0.465;
           } else {
              transformHeight = windowHeight * 0.465 - 35;
           }
           lastScrollTop = st;
        });
        
    }
    
    clicked = false
    $('.navbar-toggle').click(function () {
        clicked = !clicked;
        if (clicked) {
             $('.header').height(250);
        } else {
            $('.header').height(30);
        }
    });
    
    
    percentageMail = 189 + windowWidth * 0.03;
    
    $(document).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $('.header').addClass('header-fixed');
            $('.mail').css('transform','translate(' + percentageMail + 'px, -17px)');
            $('.phone').addClass('header-contact-phone');
            $('.logotype-wrapper').addClass('logotype-wrapper-fixed');
            $('.logotype-wrapper').css( '-webkit-transform', 'translate(-' + transformWidth + 'px,-' + transformHeight + 'px)');
            $('.logotype-wrapper').css( '-moz-transform', 'translate(-' + transformWidth + 'px,-' + transformHeight + 'px)');
            $('.logotype-wrapper').css( '-ms-transform', 'translate(-' + transformWidth + 'px,-' + transformHeight + 'px)');
            $('.logotype-wrapper').css( 'transform', 'translate(-' + transformWidth + 'px,-' + transformHeight + 'px)');
            $('.logotype-label').hide();
        } else {
            $('.header').removeClass('header-fixed');
            $('.mail').css('-webkit-transform','none');
            $('.mail').css('-ms-transform','none');
            $('.mail').css('transform','none');
            $('.phone').removeClass('header-contact-phone');
            $('.logotype-wrapper').removeClass('logotype-wrapper-fixed');
            $('.logotype-wrapper').css( '-webkit-transform', 'none');
            $('.logotype-label').show();
        }
    });
    
    $('.portfolio-image-wrapper').click(function () {

        var link = jQuery(this).children('.video-link').html();
        $('#portfolio-video').attr('src', link);
        $('.portfolio-video-wrapper').show();
        $('.video-close').show();
        $('.blackout').show();
        $('body').css('overflow-y','hidden');
    });
    
    $('.video-close').click(function () {
        $(this).hide();
        $('#portfolio-video').attr('src', "");
        $('.portfolio-video-wrapper').hide();
        $('.blackout').hide();
        $('body').css('overflow-y','visible');
    });
    
    feedbackCounter = 0;
    feedbacksAmount = $('.feedback-text-wrapper').length;
    
    $('.arrow-right').click(function () {
        if (feedbackCounter < feedbacksAmount - 1) {
            $('.feedback-text-wrapper').each(function () {
                var left = parseInt($(this).css('left'));
                var elWidth = $(this).width();
                $(this).css('left', left - elWidth);
            });
            feedbackCounter++;
        } else {
            $('.feedback-text-wrapper').each(function () {
                var left = parseInt($(this).css('left'));
                var elWidth = $(this).width();
                $(this).css('left', left + (elWidth*(feedbackCounter)));
            });
            feedbackCounter = 0;
        }
        
    });
    
    $('.arrow-left').click(function () {
        if (feedbackCounter != 0) {
            $('.feedback-text-wrapper').each(function () {
                var left = parseInt($(this).css('left'));
                var elWidth = $(this).width();
                $(this).css('left', left + elWidth);
            });
            feedbackCounter--;
        } else {
            $('.feedback-text-wrapper').each(function () {
                var left = parseInt($(this).css('left'));
                var elWidth = $(this).width();
                $(this).css('left', left + (elWidth*(feedbackCounter)));
            });
            feedbackCounter = 0;
        }
        
    });
});