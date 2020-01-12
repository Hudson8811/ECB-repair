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
    if(scroll_status > 143)
        $("#header").addClass("header_min");
    else
        $("#header").removeClass("header_min");
}
$(document).scroll(function(){
  toggleHeader();
})
