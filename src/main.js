import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const sectionProjects = document.querySelector('.projects');
sectionProjects.addEventListener('keydown', event => {
  event.preventDefault();
  if (event.code === 'ArrowRight') {
    swiper.slideNext(300);
  } else if (event.code === 'ArrowLeft') {
    swiper.slidePrev(300);
  }
});
