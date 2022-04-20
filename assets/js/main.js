'use strict';
$(document).ready(function () {
  $('.slider__dot-first').on({
    click: function () {
      $('.testimonial-first').css('display', 'block').hide().fadeIn(700),
        $('.testimonial-second').css('display', 'none'),
        $('.testimonial-third').css('display', 'none'),
        $('.slider__dot-first').css('background-color', '#f5f5f5'),
        $('.slider__dot-second').css('background-color', '#aca6a1'),
        $('.slider__dot-third').css('background-color', '#aca6a1');
    },
  }),
    $('.slider__dot-second').on({
      click: function () {
        $('.testimonial-first').css('display', 'none'),
          $('.testimonial-second').css('display', 'block').hide().fadeIn(700),
          $('.testimonial-third').css('display', 'none'),
          $('.slider__dot-first').css('background-color', '#aca6a1'),
          $('.slider__dot-second').css('background-color', '#f5f5f5'),
          $('.slider__dot-third').css('background-color', '#aca6a1');
      },
    }),
    $('.slider__dot-third').on({
      click: function () {
        $('.testimonial-first').css('display', 'none'),
          $('.testimonial-second').css('display', 'none'),
          $('.testimonial-third').css('display', 'block').hide().fadeIn(700),
          $('.slider__dot-first').css('background-color', '#aca6a1'),
          $('.slider__dot-second').css('background-color', '#aca6a1'),
          $('.slider__dot-third').css('background-color', '#f5f5f5');
      },
    });
});
