/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Autoplay, Mousewheel, Navigation } from "swiper";
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

function bildSliders() {
	let sliders = document.querySelectorAll('[class*="__swiper"]:not(.swiper-wrapper)');
	if (sliders) {
		sliders.forEach((slider) => {
			slider.parentElement.classList.add("swiper");
			slider.classList.add("swiper-wrapper");
			for (const slide of slider.children) {
				slide.classList.add("swiper-slide");
			}
		});
	}
}

// Инициализация слайдеров
function initSliders() {
	bildSliders();
	if (document.querySelector(".swiper")) {
		new Swiper(".page__slider", {
			modules: [Mousewheel, Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			speed: 400,
			mousewheel: true,
			direction: "vertical",
			simulateTouch: false,
			navigation: {
				nextEl: ".panel__arrow",
			},
			on: {
				init: function () {
					let panel = this.el.querySelector(".page__slide.swiper-slide-active");
					let we = panel.querySelector(".panel__we");
					let dot = we.querySelector(".text-circle");
					let eLetter = we.querySelector(".panel__e");

					let tl = gsap.timeline();

					tl.from(eLetter, { xPercent: -50, delay: 0.5 }).from(dot, { scale: 0 });
				},
				slideChangeTransitionStart: function () {
					let panel = this.el.querySelector(".page__slide.swiper-slide-active");
					let we = panel.querySelector(".panel__we");
					let dot = we.querySelector(".text-circle");
					let eLetter = we.querySelector(".panel__e");
					let thin = panel.querySelector(".panel__thin-p");

					let tl = gsap.timeline();

					tl.from(eLetter, { xPercent: -50, delay: 0.5 }).from(dot, { scale: 0 });

					gsap.from(thin, {
						y: "-200%",
						duration: 0.7,
						delay: 1,
					});
				},
			},
		});

		new Swiper(".panel__slider", {
			modules: [Autoplay],
			observer: true,
			observeParents: true,
			loop: true,
			slidesPerView: 1,
			spaceBetween: 90,
			speed: 400,
			allowTouchMove: false,
			direction: "vertical",
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
		});
	}
}

window.addEventListener("load", function (e) {
	initSliders();
});
