// import Swiper from 'swiper';
// import { Navigation, Keyboard, Mousewheel, A11y } from 'swiper/modules';
// import 'swiper/css';
//
// мои функции
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const projectSwiper = new Swiper('.project-swiper', {
  modules: [Navigation],
  direction: 'horizontal',
  speed: 400,
  spaceBetween: 0,
  slidesPerView: 2,
  slidesPerGroup: 1,

  loop: true, // Включение круговой прокрутки
  loopAdditionalSlides: 1,

  navigation: {
    nextEl: '.swiper-button-next', // Кнопка "вперёд"
  },
});

// const prevButton = document.querySelector('.projects-prev-btn');
// const nextButton = document.querySelector('.swiper-button-next');
// nextButton.addEventListener('click', onBut);

// function onBut(event) {
//   console.log('ich arbeite');
// }

// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Keyboard, Mousewheel, A11y],
//   direction: 'horizontal',
//   slidesPerView: 2,
//   slidesPerGroup: 1,
//   spaceBetween: 0,
//   centeredSlides: false,
//   loop: true,

//   speed: 400,

//   loopAddBlankSlides: false,
//   slideToClickedSlide: false,
//   navigation: {
//     nextEl: '.tech-swiper-btn',
//   },

// breakpoints: {
//   320: {
//     slidesPerView: 1,
//     spaceBetween: 10,
//   },
//   768: {
//     slidesPerView: 2,
//     spaceBetween: 20,
//   },
//   1024: {
//     slidesPerView: 3,
//     spaceBetween: 30,
//   },
// },

// keyboard: {
//   enabled: true,
//   onlyInViewport: false,
// },
// mousewheel: {
//   forceToAxis: true,
// },
// navigation: {
//   nextEl: '.projects-next-btn',
//   prevEl: '.projects-prev-btn',
// },
// a11y: {
//   enabled: true,
//   prevSlideMessage: 'Previous slide',
//   nextSlideMessage: 'Next slide',
// },

// on: {
//   init: function () {
//     // Проверяем состояние кнопок при инициализации Swiper
//     updateButtonState(this);
//   },
//   slideChange: function () {
//     // Обновляем состояние кнопок при каждом слайде
//     updateButtonState(this);
//   },
//   reachEnd: function () {
//     console.log('Галерея достигла конца');
//   },
//   reachBeginning: function () {
//     console.log('Галерея достигла начала');
//   },
// },
// });

// function updateButtonState(swiper) {
//   if (swiper.isBeginning) {
//     prevButton.classList.add('projects-btn-disabled');
//     prevButton.disabled = true;
//   } else {
//     prevButton.classList.remove('projects-btn-disabled');
//     prevButton.disabled = false;
//   }

//   if (swiper.isEnd) {
//     nextButton.classList.add('projects-btn-disabled');
//     nextButton.disabled = true;
//   } else {
//     nextButton.classList.remove('projects-btn-disabled');
//     nextButton.disabled = false;
//   }
// }
