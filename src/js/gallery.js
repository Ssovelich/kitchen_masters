import Swiper from 'swiper';
import { Navigation, Pagination, Keyboard, Mousewheel } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const swiper = new Swiper('.swiper');

// const swiper = new Swiper('.swiper', {
//   direction: 'horizontal',
//   loop: true,

//   modules: [Navigation, Keyboard, Mousewheel, Pagination],
//   speed: 1000,

//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   pagination: {
//     el: '.swiper-pagination',
//   },

//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pageUpDown: true,
//   },
//   mousewheel: {
//     enabled: true,
//     eventsTarget: '.swiper',
//   },

//   breakpoints: {
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 15,
//     },
//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 36,
//     },
//   },
// });
