/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

if (document.querySelector('.main-home__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.main-home__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Autoplay],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: false,
		speed: 800,
		loop: true,
		preloadImages: true,
		lazy: true,
		// Эффекты
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},

		// Пагинация
		pagination: {
			el: '.main-home__dotts',
			clickable: true,
		},

		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.swiper-button-prev',
			nextEl: '.swiper-button-next',
		},

		// Брейкпоинты
		/*
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			1268: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
		},
		*/
		// События
		on: {

		}
	});
}

if (document.querySelector('.product-card__slider')) { // Указываем скласс нужного слайдера
	// Создаем слайдер
	new Swiper('.product-card__slider', { // Указываем скласс нужного слайдера
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: false,
		speed: 800,
		watchOverflow: true,
		//loop: true,
		preloadImages: true,
		lazy: true,

		// Пагинация
		pagination: {
			el: '.product-card__dotts',
			clickable: true,
		},
	});
}

if (document.querySelector('.product-card__images')) {
	const thumbsSwiper = new Swiper('.images-product__thumbs', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Thumbs],
		observer: true,
		observeParents: true,
		slidesPerView: 6,
		spaceBetween: 13,
		direction: 'vertical',
		speed: 800,
		allowTouchMove: true,
		preloadImages: true,
		// Кнопки "влево/вправо"
		navigation: {
			prevEl: '.images-product__arrow-prev',
			nextEl: '.images-product__arrow-next',
		},
		// Пагинация
		pagination: {
			el: '.images-product__pagination',
			clickable: true,
		},
		on: {
		}
	});
	const mainThumbsSwiper = new Swiper('.images-product__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Navigation, Pagination, Thumbs],
		thumbs: {
			swiper: thumbsSwiper
		},
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 2,
		speed: 800,
		watchSlidesProgress: true,
		allowTouchMove: true,
		preloadImages: true,
		direction: 'horizontal',
		navigation: {
			prevEl: '.images-product__arrow-prev',
			nextEl: '.images-product__arrow-next',
		},
		// Пагинация
		pagination: {
			el: '.images-product__pagination',
			clickable: true,
		},
	});
}