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