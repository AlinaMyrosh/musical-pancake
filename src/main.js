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
    onlyInViewport: false,
  },
  mousewheel: {
    invert: true,
  },

  allowTouchMove: true,
  touchEventsTarget: 'wrapper',
  allowSlideNext: true,
  allowSlidePrev: true,
  effect: 'cards',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  on: {
    init: function () {
      console.log('swiper initialized');
    },
  },
  // reachBeginning,
  // reachEnd,
  // disabledClass: 'projects-btn-disabled',
});

// const sectionProjects = document.querySelector('.projects');
// sectionProjects.addEventListener('keydown', event => {
//   event.preventDefault();
//   if (event.code === 'ArrowRight') {
//     swiper.slideNext(300);
//   } else if (event.code === 'ArrowLeft') {
//     swiper.slidePrev(300);
//   }
// });
