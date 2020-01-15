var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
      }
  })

  function toggleHeader(){
    var scroll_status = $(document).scrollTop();
    if(scroll_status > 70)
        $("#header").addClass("header_min");
    else
        $("#header").removeClass("header_min");
}
$(document).scroll(function(){
  toggleHeader();
})

var mySwiper = new Swiper ('.swiper-container-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  breakpoints: {
      576: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 8,
      },
    }
})

$(document).ready(function() {
  $('select').niceSelect();
});

$(document).ready(function() {
  $("input[name='phone']").mask(" +7 (999) 999-99-99");
});

$('.burger').click(function() {
  $(this).toggleClass('active');
  $('.fix-container').toggleClass('active');
});
