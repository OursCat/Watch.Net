function hamburger(e) {
	e.classList.toggle('change');
}

const burger = document.querySelector('.hamburger');
const ul = document.querySelector('.header-nav');

burger.addEventListener('click', function () {
	ul.classList.toggle('nav-toggle');
	document.body.classList.toggle('hidden');
});
