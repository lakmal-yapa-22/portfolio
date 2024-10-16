const sideMenu=document.querySelector('#sideMenu');
function openMenu(){
    sideMenu.style.transform='translateX(-16rem)';
}
function closeMenu(){
    sideMenu.style.transform='translateX(16rem)';
}
var typed = new Typed(".input", {
    strings: ["Hi!", "I", "I'm", "I'm Lakmal", "I'm Lakmal Kumarasiri Yapa"],
    typeSpeed: 100,
    backSpeed: 50,
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




