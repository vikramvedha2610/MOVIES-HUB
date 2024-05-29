const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  breakpoints: {
      640: {
          slidesPerView: 2,
          spaceBetween: 20,
      },
      768: {
          slidesPerView: 3,
          spaceBetween: 30,
      },
      1024: {
          slidesPerView: 4,
          spaceBetween: 40,
      },
  },
});

document.getElementById('search-input').addEventListener('input', function() {
  const query = this.value.toLowerCase();
  const movieBoxes = document.querySelectorAll('.movie-box');
  
  movieBoxes.forEach(box => {
      const title = box.querySelector('.movie-title').textContent.toLowerCase();
      if (title.includes(query)) {
          box.parentElement.style.display = 'block';
      } else {
          box.parentElement.style.display = 'none';
      }
  });
});