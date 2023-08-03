
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
$('.header__menu-list-link--more').on('click', function (e) {
   e.preventDefault()
   $('.submenu__header-list').toggleClass('submenu__header-list--open')
})

$('.btn-content').on('click', function (e) {
   e.preventDefault()
   $('.submenu__btn').toggleClass('submenu__btn--open')
})

$('.header__lang').on('click', function (e) {
   e.preventDefault()
   $('.lang-menu').toggleClass('lang-menu--click')
 })

$('.header__menu-list-link--more').on('click', function (e) {
   e.preventDefault()
   $('.header__menu-list-link--more').toggleClass('header__menu-list-link--click')
 })

 $('.btn-content').on('click', function (e) {
   e.preventDefault()
   $('.btn-content').toggleClass('btn-content--click');
   $('.btn-arrow').toggleClass('btn-content-arrow--click')
 })


//  $('.switch__input').on('click', function (e) {
//    e.preventDefault()
//    $('.tariffs__item-price-info').toggleClass('tariffs__item-price-info--off')
// })

 

//  $('.information-btn').on('click', function (e) {
//    e.preventDefault()
//    $('.modal').toggleClass('modal--active');
//  })


//  $('.modal__window-close').on('click', function (e) {
//    e.preventDefault()
//    $('.modal--active').toggleClass('modal--off'); 
//  })

//  $('.information-btn').on('click', function(){
//    $('.modal--active').removeClass('modal')
//   });

//   $('.modal__window-close').on('click', function(){
//    $('.modal--active').addClass('modal')
//   });



//  $('.more-text-btn').on('click', function (e) {
//    e.preventDefault()
 
//    $('.assistant__item').toggleClass('assistant__item--more');
//  })
 
//  $('.btn-content').on('click', function (e) {
//    e.preventDefault()
//    $('.btn-content').removeClass('btn-content')
//    $(this).toggleClass('btn-content--click')
// })


});