document.getElementById('menu-icon').addEventListener('click', function() {
    var sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('active');
});
let currentSlide = 0;

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}