/* Маски для полей (в работе) */

// Подключение функционала "Чертогов Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMasks = document.querySelectorAll(".mail-input");
if (inputMasks.length) {
	flsModules.inputmask = Inputmask({ mask: "+7 (999) 999-9999", showMaskOnHover: false }).mask(inputMasks);
}
