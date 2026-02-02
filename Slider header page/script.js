// 3-Dot Menu Logic
function toggleMenu(event) {
    event.stopPropagation();
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function() {
    const menu = document.getElementById("dropdownMenu");
    if (menu.classList.contains('show')) menu.classList.remove('show');
}

// Slider Logic
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) slide.classList.add('active');
    });
}

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Auto Sliding every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 5000);