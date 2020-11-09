 (function ($) {
	"use strict";
      jQuery(document).on('ready', function() {

              /*================================
              ============ Carousel Slider =============
              =================================*/
              $('.carousel').carousel({
                interval: 2000
              })

               /*================================
              ============ Back to top =============
              =================================*/
          
            var back_to_top = $('#back-to-top');
             back_to_top.click(function () {
                 back_to_top.tooltip('hide');
                 $('body,html').animate({
                     scrollTop: 0
                 }, 900);
                 return false;
             });

             back_to_top.tooltip('show');


              /*================================
              ============ Top Bar =============
              =================================*/
            /*--show and hide scroll to top Active --*/
            var scroll_top_active =  $('.scroll-top.active');
            var scroll_top = $('.scroll-top')
              $(window).on('scroll', function() {
                  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
                     scroll_top_active.removeClass('active');
                      scroll_top.addClass('active');    // Fade in the arrow
                  } else {
                      scroll_top.removeClass('active');   // Else fade out the arrow
                  }
              });

              /*================================
              ============ Lightcase =============
              =================================*/
                var lightcase =$('a[data-rel^=lightcase]');
                jQuery(document).ready(function($) {
                lightcase.lightcase();
              });

                /*================================
              ============ Donate Amount =============
              =================================*/
                $(document).on('click','.radio-select label',function(){
                    
                    $(this).siblings().removeClass('active');
                    $(this).addClass('active');
                });     

              /*================================
              ============ Countdown =============
              =================================*/
                var countdown = $('#countdown');
                  countdown.countdown({
                    date: '12/27/2018 17:00:00',
                    offset: +2,
                    day: 'Day',
                    days: 'Days'
                  });


              /*================================
              ============ Counterup =============
              =================================*/
                var counter = $('.counter');
                counter.counterUp({
                    delay: 10,
                    time: 10000
                });     

              /*================================
              ============ Client Container =============
              =================================*/
              var swiper = new Swiper('.client-container', {

                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                slidesPerView: 6,
                spaceBetween: 30,
                autoplay: 1000,

                loop:true,
                     breakpoints: {
                  // when window width is <= 320px
                  320: {
                    slidesPerView: 1
                  },
                  // when window width is <= 480px
                  480: {
                    slidesPerView: 2
                  },
                  // when window width is <= 767px
                  767: {
                    slidesPerView: 3

                  },
                  // when window width is <= 990px
                  991: {
                    slidesPerView: 4
                  }
                }
            });

              /*================================
              ============ Volunter Container =============
              =================================*/
              var swiper = new Swiper('.volunter-container', {

                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                paginationClickable: true,
                slidesPerView: 3,
                spaceBetween: 30,
                autoplay: 1000,

                loop:true,
                     breakpoints: {
                  // when window width is <= 320px
                  360: {
                    slidesPerView: 1
                  },
                  // when window width is <= 480px
                  480: {
                    slidesPerView: 1
                  },
                  // when window width is <= 767px
                  767: {
                    slidesPerView: 2

                  },
                  // when window width is <= 990px
                  990: {
                    slidesPerView: 2
                  }
                }
            }); 

               /*================================
              ============ upcoming Container =============
              =================================*/
              var swiper = new Swiper('.upcoming-container', {

                paginationClickable: true,
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: 100000000,

                loop:true,
                     breakpoints: {
                  // when window width is <= 320px
                  360: {
                    slidesPerView: 1
                  },
                  // when window width is <= 480px
                  480: {
                    slidesPerView: 1
                  },
                  // when window width is <= 767px
                  767: {
                    slidesPerView: 2

                  },
                  // when window width is <= 990px
                  990: {
                    slidesPerView: 2
                  }
                }
            }); 

              /*================================
              ============ Events Container =============
              =================================*/
              var swiper = new Swiper('.events-container', {
              centeredSlides: true,
              slidesPerView: 1,
              spaceBetween: 0,
              autoplay: 3000,
              navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              },
            });

              /*================================
              ============ History Container =============
              =================================*/
              var swiper = new Swiper('.history-container', {
                paginationClickable: true,
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: 5000,
                pagination: {
                  el: '.swiper-pagination',
                  dynamicBullets: true,
                },
                loop:true,
                     breakpoints: {
                  // when window width is <= 320px
                  320: {
                    slidesPerView: 1
                  },
                  // when window width is <= 480px
                  480: {
                    slidesPerView: 1
                  },
                  // when window width is <= 767px
                  767: {
                    slidesPerView: 1

                  },
                  // when window width is <= 990px
                  990: {
                    slidesPerView: 1
                  }
                }
            });               

  });

     $(window).on('scroll', function() {

          /*=========================
                Menu top fixed 
          =========================*/
              var fixed_top = $(".header-section");
              if( $(this).scrollTop() > 100 ) { 
                  fixed_top.addClass("menu-fixed animated fadeInDown");
              }
              else{
                  fixed_top.removeClass("menu-fixed animated fadeInDown");
              }

              var back_top = $('#back-to-top');

                   if ($(this).scrollTop() > 100) {
                       back_top.fadeIn();
                   } else {
                       back_top.fadeOut();
                   }
        
          });

  $(window).on('load',function(){
          /* ===========================
          ========== Pre-Loader ========
          ============================*/
             var preLoader = $(".preloader");
             preLoader.fadeOut(1000);
  });


})(jQuery);