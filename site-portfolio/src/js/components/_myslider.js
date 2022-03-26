function mySlider() {
  const slides = document.querySelectorAll('.slider__item'),
    sliderWrapper = document.querySelector('.slider__wrapper'),
    sliderField = document.querySelector('.slider__inner'),
    prev = document.querySelector('.slider__btn_prev'),
    next = document.querySelector('.slider__btn_next'),
    width = parseInt(getComputedStyle(sliderWrapper).width, 10),
    dotsWrapper = document.querySelector('.slider__bullets');
 
  let slideIndex = 1,
    offset = 0,
    dots = [];

  // sliderField.style.width = width * slides.length + 'px';
  

  function initSlideWidth() {
    let slideWidth = parseInt(getComputedStyle(sliderWrapper).width, 10);
    slides.forEach((slide) => {
      slide.style.width = slideWidth + 'px';
     
    });
    sliderField.style.width = parseInt(slides[0].style.width) * slides.length + 'px';
  }
  initSlideWidth();

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('slider__dot');
    dot.setAttribute('data-slide', i + 1);
    if (i == 0) {
      dot.classList.add('slider__dot_active');
    }
    dotsWrapper.insertAdjacentElement('beforeend', dot);
    dots.push(dot);
  }

  next.addEventListener('click', () => {
    if (offset == width * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += width;
    }
    sliderField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }
    activeDot();
  });

  prev.addEventListener('click', () => {
    if (offset == 0) {
      offset = width * (slides.length - 1);
    } else {
      offset -= width;
    }
    sliderField.style.transform = `translateX(-${offset}px)`;
    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }
    activeDot();
  });

  function activeDot() {
    dots.forEach((item) => item.classList.remove('slider__dot_active'));
    dots[slideIndex - 1].classList.add('slider__dot_active');
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      const slideTo = e.target.getAttribute('data-slide');
      slideIndex = slideTo;
      offset = width * (slideTo - 1);

      sliderField.style.transform = `translateX(-${offset}px)`;

      activeDot();
    });
  });

  window.addEventListener('resize', () => {
    initSlideWidth();
    sliderField.style.transform = `translateX(-${parseInt(slides[0].style.width)}px)`; 
  });
}

mySlider();