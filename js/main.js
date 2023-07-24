
$(function(){
   $('.burger').on('click', function(){ 
      $('.header__menu-list').toggleClass('header__menu-list--active');
    });

 $('.reviews__inner').slick({
     arrows: true,
      dots: false,
      // fade: true,
      // autoplay: true,
      // autoplaySpeed: 2000,
      nextArrow: '<button type="button" class="slick-next"><img src="images/icons/slick-next.png" alt="next"></button>',
      prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/slick-prev.png" alt="prev"></button>',
      slidesToShow: 3,
      slidesToScroll: 1,
      Infinite: true,
      responsive: [
         {
           breakpoint: 1250,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
                  }
         },{
            breakpoint: 705,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows: false,
            nextArrow: '<button type="button" class="slick-arr--none"></button>',
            prevArrow: '<button type="button" class="slick-arr--none"></button>',
            }
         }
      ],
 });


 $('.tariffs__item-content').on('click', function (e) {
    
    $('.tariffs__item-content').removeClass('tariffs__item-content--active')
    $($(this).attr('href')).toggleClass('tariffs__item-content--active')

    e.preventDefault()
    $('.tariffs__item-content').removeClass('tariffs__item-content--active')
    $(this).toggleClass('tariffs__item-content--active')
 })

 $('.articles__inner').slick({
    arrows: true,
     dots: false,
     Infinite: true,
     // fade: true,
     // autoplay: true,
     // autoplaySpeed: 2000,
     nextArrow: '<button type="button" class="slick-articles-next"><img src="images/icons/slick-next.png" alt="next"></button>',
     prevArrow: '<button type="button" class="slick-articles-prev"><img src="images/icons/slick-prev.png" alt="prev"></button>',
     slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
      {
        breakpoint: 715,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
               }
      },{
         breakpoint: 580,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1,
         infinite: false,
         arrows: false,
         nextArrow: '<button type="button" class="slick-arr--none"></button>',
         prevArrow: '<button type="button" class="slick-arr--none"></button>',
         }
      }
   ],
});


$('.header__menu-list-link').on('click', function (e) {
    e.preventDefault()
    $('.header__menu-list-link').removeClass('header__menu-list-link--click')
    
    $(this).toggleClass('header__menu-list-link--click')
 })

 
 $('.btn-content').on('click', function (e) {
   e.preventDefault()
   $('.btn-content').removeClass('btn-content--click')
   $(this).toggleClass('btn-content--click')
})
});