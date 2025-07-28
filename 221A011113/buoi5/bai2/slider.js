$(document).ready(function () {
  let currentIndex = 0;
  const items = $('.testimonial-item');
  const dots = $('.dot');

  function showSlide(index) {
    items.removeClass('active').eq(index).addClass('active');
    dots.removeClass('active').eq(index).addClass('active');
  }

  $('.next-btn').click(function () {
    currentIndex = (currentIndex + 1) % items.length;
    showSlide(currentIndex);
  });

  $('.prev-btn').click(function () {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showSlide(currentIndex);
  });

  dots.click(function () {
    currentIndex = $(this).index();
    showSlide(currentIndex);
  });
});
