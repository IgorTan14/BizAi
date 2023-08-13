
$(function(){
   $('.burger').on('click', function(){ 
      $('.header__menu-list').toggleClass('header__menu-list--active');

      $('.burger').toggleClass('burger--active ');
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



//  $('.tariffs__item-content').on('click', function (e) {
//    e.preventDefault()
//    $('.tariffs__item-content').removeClass('tariffs__item-content--active')
//    $(this).toggleClass('tariffs__item-content--active')
//    $(".tariffs__item-price-num--before.open").toggleClass('white');
//  })


//  $('.tariffs__item-btn-content--1').on('click', function (e) {
//    e.preventDefault()
//    $('.tariffs__btn-arrow--1').toggleClass('btn-content-arrow--click')
// })
// $('.tariffs__item-btn-content--2').on('click', function (e) {
//    e.preventDefault()
//    $('.tariffs__btn-arrow--2').toggleClass('btn-content-arrow--click')
// })
// $('.tariffs__item-btn-content--3').on('click', function (e) {
//    e.preventDefault()
//    $('.tariffs__btn-arrow--3').toggleClass('btn-content-arrow--click')
// })
 


$('.switch-circle').on('click', function (e) {
  e.preventDefault();
  $('.switch-circle').toggleClass('switch-circle--trans');
})

$('.switch-circle').on('click', function (e) {
  e.preventDefault();
  $('.tariffs__item-price-info').toggleClass('tariffs__item-price-info--off');
  $(".tariffs__item-price-num--off").toggleClass('off');
  $(".tariffs__item-price-num--before").toggleClass('open');
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
   $('.header__menu-list-link--more').toggleClass('header__menu-list-link--click')
 })
 $('.header__menu-list-link--more').on('click', function (e) {
   e.preventDefault()
   $('.submenu__header-list').toggleClass('submenu__header-list--open')
})



$('.tariffs__btn-arrow--1, .tariffs__item-btn-content-item-img--1').on('click', function (e) {
   e.preventDefault()
   $('.submenu__btn--1').toggleClass('tariffs-submenu__btn--open');
   $('.tariffs__btn-arrow--1').toggleClass('btn-content-arrow--click')
})
$('.tariffs__btn-arrow--2, .tariffs__item-btn-content-item-img--2').on('click', function (e) {
   e.preventDefault()
   $('.submenu__btn--2').toggleClass('tariffs-submenu__btn--open');
   $('.tariffs__btn-arrow--2').toggleClass('btn-content-arrow--click')
})
$('.tariffs__btn-arrow--3, .tariffs__item-btn-content-item-img--3').on('click', function (e) {
   e.preventDefault()
   $('.submenu__btn--3').toggleClass('tariffs-submenu__btn--open');
   $('.tariffs__btn-arrow--3').toggleClass('btn-content-arrow--click')
})




// $('.tariffs__item-btn-content--2').on('click', function (e) {
//    e.preventDefault()
//    $('.submenu__btn--2').toggleClass('tariffs-submenu__btn--open');
// })
// $('.tariffs__item-btn-content--3').on('click', function (e) {
//    e.preventDefault()
//    $('.submenu__btn--3').toggleClass('tariffs-submenu__btn--open');
// })




// $('.header__lang').on('click', function (e) {
//    e.preventDefault()
//    $('.lang-menu').toggleClass('lang-menu--click')
//  })


$('.btn-content-item').on('click', function (e) {
   e.preventDefault()
   $('.submenu__btn').toggleClass('submenu__btn--open');
   $('.btn-arrow').toggleClass('btn-content-arrow--click')
   $('.btn-content').toggleClass('btn-content--click');
})
$('.btn-content-item--footer').on('click', function (e) {
   e.preventDefault()
   $('.submenu__btn--footer').toggleClass('submenu__btn--open');
   $('.btn-arrow--footer').toggleClass('btn-content-arrow--click')
   $('.btn-content--footer').toggleClass('btn-content--click');
})
   
   

});