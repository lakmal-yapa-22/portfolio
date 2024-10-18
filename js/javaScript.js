const sideMenu=document.querySelector('#sideMenu');
function openMenu(){
    sideMenu.style.transform='translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform='translateX(16rem)';
}
var typed = new Typed(".input", {
    strings: [" I am Lakmal kumarasiri"],
    typeSpeed: 600,
    backSpeed: 200,
    loop: true
});
const toggleCheckbox = document.getElementById('darkmode-toggle');
const body = document.body;

toggleCheckbox.addEventListener('change', () => {
    if (toggleCheckbox.checked) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
});
const textContainer = document.querySelector('.text');
const textContent = " Lakmal kumarasiri - Software Enginner Student -";
textContainer.innerHTML = textContent.split("").map(
    (char, i) => `<span style="transform:rotate(${i * 7.5}deg)">${char}</span>`
).join("");




let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const cards = document.querySelectorAll('.card');
    const totalSlides = cards.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * (cards[0].offsetWidth + 30); // 30px for margin
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Open YouTube video in modal
function openVideo(videoUrl) {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    iframe.src = videoUrl + '?autoplay=1'; // Autoplay the video
    modal.style.display = 'flex';
}

// Close video modal
function closeVideo() {
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoFrame');
    iframe.src = ''; // Stop the video
    modal.style.display = 'none';
}

window.onload = () => {
    showSlide(currentIndex);
};


// project
