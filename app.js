// select elements from DOm to be interacted with
const menuBtn = document.querySelector("#menu-btn");
const logo = document.querySelector(".logo");
const social = document.querySelector(".social");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const menuOpen = document.querySelector(".menu-open");

// menu button, watch for click and open menu
menuBtn.addEventListener("click", () => {
	menuBtn.classList.toggle("active");
	main.classList.toggle("disappear");
	footer.classList.toggle("disappear");
	logo.classList.toggle("visible");
	social.classList.toggle("visible");
	menuOpen.classList.toggle("disappear");
	// disable scrolling when menu is opened
	document.body.classList.toggle("stop-scrolling");
});

// Flickity
// var elem = document.querySelector(".main-carousel");
// var flkty = new Flickity(elem, {
// 	// options
// 	// cellAlign: "left",
// 	// contain: true,
// 	// draggable: ">1",
// 	// freeScroll: true,
// 	// wrapAround: true,
// 	// lazyLoad: true,
// });

// element argument can be a selector string
//   for an individual element
// var flkty = new Flickity(".main-carousel", {
// 	// options
// });
