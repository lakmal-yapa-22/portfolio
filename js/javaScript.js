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



