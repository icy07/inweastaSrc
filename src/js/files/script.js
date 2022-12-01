window.onload = function () {
	if (window.innerWidth - document.querySelector(".wrapper").offsetWidth > 0) {
		document.querySelector(".wrapper").style.paddingLeft = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
		document.querySelector(".header").style.paddingLeft = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
	}

	ScrollTrigger.config({
		autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
	});

	gsap.registerPlugin(ScrollTrigger);

	const img = document.querySelector(".panel__person-img-block");
	const imgWrapper = document.querySelector(".panel__img-wrapper");

	if (img) {
		imgWrapper.style.border = `${img.offsetWidth / 2}px solid #0d2f90`;
	}
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty("--vh", `${vh}px`);

	window.addEventListener("resize", () => {
		if (img) {
			imgWrapper.style.border = `${img.offsetWidth / 2}px solid #0d2f90`;
		}
	});

	let we = document.querySelector(".panel__we--2");
	if (we) {
		let dot = we.querySelector(".text-circle");
		let eLetter = we.querySelector(".panel__e");

		let tl = gsap.timeline();

		tl.from(eLetter, { xPercent: -50, delay: 0.5 }).from(dot, { scale: 0 });
	}
	const circle = document.querySelectorAll(".circle");

	if (circle) {
		circle.forEach((e) => {
			let tl = gsap.timeline();

			tl.to(e, { scale: 0.8, duration: 0.5, ease: "circ.in" }).to(e, { scale: 1, duration: 4 });

			ScrollTrigger.create({
				animation: tl,
				trigger: e,
			});
		});
	}
};
