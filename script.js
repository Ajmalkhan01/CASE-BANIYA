document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel-inner');
  const indicators = document.querySelectorAll('.carousel-indicators span');
  let currentIndex = 0;

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
  }

  document.querySelector('.carousel-control-prev').addEventListener('click', function () {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : indicators.length - 1;
    updateCarousel();
  });

  document.querySelector('.carousel-control-next').addEventListener('click', function () {
    currentIndex = (currentIndex < indicators.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
  });

  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function () {
      currentIndex = index;
      updateCarousel();
    });
  });
});