function activateSlider() {
  new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    slidesPerView: 1,
    // Responsive breakpoints
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 2,
    //     spaceBetween: 20,
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 3,
    //     spaceBetween: 30,
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 4,
    //     spaceBetween: 40,
    //   },
    // },
  });
}

activateSlider();


