(function ($) {
  "use strict";



  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  
 /* ---------------------------------------------
  Navigation
  --------------------------------------------- */

  // mobile nav
$('.navbar-toggler').on('click', function (e) {
      $('.navbar-inner').toggleClass('active');
      $('.navbar-toggler-icon').toggleClass('active');
      $('.navbar').toggleClass('active');
      $('body').toggleClass('scroll-prevent');
      e.stopPropagation();
  });

// Close on outside click
  $('body, .navbar-nav .nav-item').on("click", function (e) {
      $(".navbar").removeClass("active");
      $(".navbar-inner").removeClass("active");
      $(".navbar-toggler-icon").removeClass("active");
      $('body').removeClass('scroll-prevent');
  });

  $('body').on("click",".navbar-inner", function () {
    e.stopPropagation();
    e.preventDefault();
  });


  //
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if ($(window).width() <= 991) {
      $('.navbar-inner').addClass('overlay');
    } 
    else if ($(window).width() > 992) {
      $(' .navbar-inner').removeClass('overlay');
    }
  };
  $(window).resize(function(){
    alterClass();
  });
  alterClass();


  //
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if ($(window).width() <= 991) {
      $('.dropdown').addClass('active');
    } 
    else if ($(window).width() > 991) {
      $('.dropdown').removeClass('active');
    }
  };
  $(window).resize(function(){
    alterClass();
  });
  alterClass();

  //  menu dropdown icon 
  $('.dropdown .nav-link.dropdown-toggle').on('click', function () {
    $('.dropdown .nav-link.dropdown-toggle').toggleClass('submenu-active');
  }); 
  $('.dropdown-submenu:nth-child(1) >.dropdown-toggle').on('click', function () {
    $('.dropdown-submenu:nth-child(1) >.dropdown-item.dropdown-toggle').toggleClass('submenu-active');
  });
  $('.dropdown-submenu .dropdown-submenu .dropdown-toggle').on('click', function () {
    $('.dropdown-submenu .dropdown-submenu .dropdown-item.dropdown-toggle').toggleClass('submenu-active');
  });
  $('.dropdown-submenu:nth-child(2) >.dropdown-toggle').on('click', function () {
    $('.dropdown-submenu:nth-child(2) >.dropdown-item.dropdown-toggle').toggleClass('submenu-active');
  });
 
  // dropdown for mobile
  $(document).ready(function () {
    checkWidth(true);
    $(window).resize(function () {
        checkWidth(false);
    });
  });


  
  function checkWidth(init) {
    // If browser resized, check width again 
    if ($(window).width() <= 991) {
        $('.dropdown-submenu a').on("click", function (e) {
            $(this).next('ul').toggle();
            e.stopPropagation();
        });
    }
  }

  /* sticky nav */
    $(window).on('scroll', function(){
      if ($(window).scrollTop() > 50){
        $('.navbar').addClass('sticky-nav');
      }
      else{
        $('.navbar').removeClass('sticky-nav');
      }

    });
 
  // function smoothScroll() {
    function smoothScroll() {
      $('.nav-item a').on('click', function (event) {
          var $anchor = $(this);
          var headerH = '';
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
          }, 900, 'easeInOutExpo');
          event.preventDefault();
      });
      $.extend($.easing, {
          easeInOutExpo: function (t, e, i, n, s) {
              return 0 == e ? i : e == s ? i + n : (e /= s / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + i : n / 2 * (-Math.pow(2, -10 * --e) + 2) + i
          },
      });
  }
  smoothScroll();
    
// scrollspy
  $('body').scrollspy({
    target: '.navbar-nav',
  });


  /* ---------------------------------------------
  Pricing data update
  --------------------------------------------- */
  function pricingData() {
    var cardValue = $('.card-value');
    var cardValueFocused = $('.card-value--focused');

    $(".pricing-tab .pricing-btn").on('click', function () {
        $('.pricing-tab .pricing-btn').removeClass('btn-bg--primary');
        $(this).addClass("btn-bg--primary");
    });
    $(".data-type-yearly").on('click', function () {
        cardValue.fadeIn("fast");
        cardValueFocused.css('display', 'none');
    });
    $(".data-type-monthly").on('click', function () {
        cardValue.css('display', 'none');
        cardValueFocused.fadeIn("fast");
    });
  }
  pricingData();

    /* ---------------------------------------------
  Lightobx
  --------------------------------------------- */
  function lightBox() {
    $('.lightbox').venobox();
  }
  lightBox();

  /* ---------------------------------------------
  Carosuel slider (Testimonial--v1) Carosuel Slider
  --------------------------------------------- */
  $('.carosuel-slider--v1').slick({
    vertical:!0,
    verticalSwiping:!0,
    slidesToShow:2,
    slidesToScroll:2,
   prevArrow:'<div><button class="prevArrow arrowBtn"><i class="nc-icon nc-tail-left"></i></button></div>',
    nextArrow:'<div><button class="nextArrow arrowBtn"><i class="nc-icon nc-tail-right"></i></button></div>',

    responsive:[{
      breakpoint: 768,
      settings:{
        slidesToShow: 1,
        vertical:!1,
        verticalSwiping:!1,
      }
    }]
  
});

  /* ---------------------------------------------
  Carosuel slider (Testimonial--v2) Carosuel Slider
  --------------------------------------------- */
  $('.carosuel-slider--v2').slick({
    slidesToShow:1,
    slidesToScroll:1,
    prevArrow:'<div><button class="prevArrow arrowBtn"><i class="nc-icon nc-tail-left"></i></button></div>',
    nextArrow:'<div><button class="nextArrow arrowBtn"><i class="nc-icon nc-tail-right"></i></button></div>',
    arrows: true,

  });

  /* ---------------------------------------------
  Carosuel slider (Testimonial--v3) Carosuel Slider
  --------------------------------------------- */
  $(".carosuel-slider--v3").slick({
    autoplay: false,
    infinite: true,
    slidesToShow:2,
    arrows: false,
    responsive:[{
      breakpoint:992,
      settings:{
        slidesToShow:1
      }
    }]
    
  }),

  /* ---------------------------------------------
  Carosuel slider (Testimonial--v4) Carosuel Slider
  --------------------------------------------- */
  $('.carosuel-slider--v4').slick({
    slidesToShow:2,
    slidesToScroll:2,
    prevArrow:'<div><button class="prevArrow arrowBtn"><i class="nc-icon nc-tail-left"></i></button></div>',
    nextArrow:'<div><button class="nextArrow arrowBtn"><i class="nc-icon nc-tail-right"></i></button></div>',
    arrows: true,
    dots: true,
    customPaging: function(slider, i) {
      return '<div class="slider-button" id=' + i + ">  </div>";
    },
    responsive:[{
      breakpoint:992,
      settings:{
        slidesToShow:1
      }
    }]

  });

   /* ---------------------------------------------
  Carosuel slider (Testimonial--v4) Carosuel Slider
  --------------------------------------------- */
  $('.carosuel-slider--v5').slick({
      centerMode: true,
      centerPadding: '15%',
      slidesToShow: 4,
      dots: true,
      customPaging: function(slider, i) {
        return '<div class="slider-button" id=' + i + ">  </div>";
      },
      arrows: false,
      responsive: [
      {
        breakpoint: 4000,
        settings: {
        }
      },
      
      {
        breakpoint: 1601,
        settings: {
          slidesToShow: 3,
          centerPadding: '15%',
        }
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerPadding: '15%',
        }
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '25%',
        }
      },

      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: '10%',
        }
      },
    ]
  });


/*----------------------------------
    background image holder
-----------------------------------*/




  /* ---------------------------------------------
  ScrollIt
  --------------------------------------------- */
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: -70,          // offste (in px) for fixed top navigation
  });


})(jQuery);