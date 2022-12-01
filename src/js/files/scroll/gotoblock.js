// Подключение функционала "Чертогов Фрилансера"
import { isMobile, menuClose, getHash, FLS } from "../functions.js";
// Подключение дополнения для увеличения возможностей
// Документация: https://github.com/cferdinandi/smooth-scroll
import SmoothScroll from "smooth-scroll";
//==============================================================================================================================================================================================================================================================================================================================

// Модуль плавной проктутки к блоку
export let gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
	const targetBlockElement = document.querySelector(targetBlock);
	if (targetBlockElement) {
		let headerItem = "";
		let headerItemHeight = 0;
		if (noHeader) {
			headerItem = "header.header";
			headerItemHeight = document.querySelector(headerItem).offsetHeight;
		}
		let options = {
			speedAsDuration: true,
			speed: speed,
			header: headerItem,
			offset: offsetTop,
			easing: "easeOutQuad",
		};

		if (typeof SmoothScroll !== "undefined") {
			// Прокрутка с использованием дополнения
			new SmoothScroll().animateScroll(targetBlockElement, "", options);
		}
	}
};
