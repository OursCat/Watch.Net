function hamburger(e) {
	e.classList.toggle('change');
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}

const watches = document.getElementsByClassName('show');
const newButton = document.getElementsByClassName('new-buy');
for (var i = 0; i < watches.length; i++) {
	watches[i].addEventListener('mouseover', function () {
		this.style.transform = 'translateY(-10%)';
	});
	watches[i].addEventListener('mouseout', function () {
		this.style.transform = 'translateY(0%)';
	});
}

const burger = document.querySelector('.hamburger');
const ul = document.querySelector('.header-nav');

burger.addEventListener('click', function () {
	ul.classList.toggle('nav-toggle');
	document.body.classList.toggle('hidden');
});
