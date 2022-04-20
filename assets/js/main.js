const firstSliderDot = document.querySelector('.slider__dot-first');
const secondSliderDot = document.querySelector('.slider__dot-second');
const thirdSliderDot = document.querySelector('.slider__dot-third');
const firstTestimonial = document.querySelector('.testimonial-first');
const secondTestimonial = document.querySelector('.testimonial-second');
const thirdTestimonial = document.querySelector('.testimonial-third');

firstSliderDot.addEventListener('click', showFirstQuote);
secondSliderDot.addEventListener('click', showSecondQuote);
thirdSliderDot.addEventListener('click', showThirdQuote);

function showFirstQuote() {
  if (!firstSliderDot.classList.contains('slider__dot--active')) {
    firstSliderDot.classList.add('slider__dot--active');

    secondSliderDot.classList.remove('slider__dot--active');
    thirdSliderDot.classList.remove('slider__dot--active');

    firstTestimonial.classList.add('testimonial-visible');
    secondTestimonial.classList.remove('testimonial-visible');
    thirdTestimonial.classList.remove('testimonial-visible');
  }
}

function showSecondQuote() {
  if (!secondSliderDot.classList.contains('slider__dot--active')) {
    secondSliderDot.classList.add('slider__dot--active');

    firstSliderDot.classList.remove('slider__dot--active');
    thirdSliderDot.classList.remove('slider__dot--active');

    secondTestimonial.classList.add('testimonial-visible');
    firstTestimonial.classList.remove('testimonial-visible');
    thirdTestimonial.classList.remove('testimonial-visible');
  }
}

function showThirdQuote() {
  if (!thirdSliderDot.classList.contains('slider__dot--active')) {
    thirdSliderDot.classList.add('slider__dot--active');

    firstSliderDot.classList.remove('slider__dot--active');
    secondSliderDot.classList.remove('slider__dot--active');

    thirdTestimonial.classList.add('testimonial-visible');
    firstTestimonial.classList.remove('testimonial-visible');
    secondTestimonial.classList.remove('testimonial-visible');
  }
}
