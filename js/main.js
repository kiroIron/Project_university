let nav_links = document.getElementById("nav-links");
let hideButton = document.getElementById("hide-Button")
let showButton = document.getElementById("show-Button")
showButton.addEventListener("click",()=>nav_links.style.right="0px")
hideButton.addEventListener("click",()=>nav_links.style.right="-200px")
let header = document.getElementById("header")
window.addEventListener('scroll', function() {
    if (window.scrollY > 80) {
        header.classList.add('fixed_header');
    } else {
        header.classList.remove('fixed_header');}
});