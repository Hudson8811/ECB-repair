

function toggleHeader() {
  var scroll_status = $(document).scrollTop();
  if (scroll_status > 70)
    $("#header").addClass("header_min");
  else
    $("#header").removeClass("header_min");
}
$(document).scroll(function () {
  toggleHeader();
})



$(document).ready(function () {
  $('select').niceSelect();
});

$(document).ready(function () {
  $("input[name='phone']").mask(" +7 (999) 999-99-99");
});

$('.burger').click(function () {
  $(this).toggleClass('active');
  $('.fix-container').toggleClass('active');
});
$('.show-btn').click(function () {
  $('.not-show').toggleClass('hide');
});



var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    992: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 8,
    },
  }
});

var swiper = new Swiper('.swiper-container-2', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    992: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1920: {
      slidesPerView: 2,
      spaceBetween: 8,
    },
  }
});

$(function () {

  // #modal_1 - селектор 1 модального окна
  // #modal_2 - селектор 2 модального окна, которое необходимо открыть из первого
  var two_modal = function (id_modal_1, id_modal_2) {
    // определяет, необходимо ли при закрытии текущего модального окна открыть другое
    var show_modal_2 = false;
    // при нажатии на ссылку, содержащей в качестве href селектор модального окна
    $('a[href="' + id_modal_2 + '"]').click(function (e) {
      e.preventDefault();
      show_modal_2 = true;
      // скрыть текущее модальное окно
      $(id_modal_1).modal('hide');
    });
    // при скрытии текущего модального окна открыть другое, если значение переменной show_modal_2 равно true
    $(id_modal_1).on('hidden.bs.modal', function (e) {
      if (show_modal_2) {
        show_modal_2 = false;
        $(id_modal_2).modal('show');
      }
    })

  }('#exampleModal', '#exampleModal-2');

});


$(document).ready(function () {
  $('.dispaly-ok-on-send').submit(function (e) {
    e.preventDefault();
    this.submit();
    $('#exampleModal-2').modal('show');
  });
});
