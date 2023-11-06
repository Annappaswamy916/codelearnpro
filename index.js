burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.navbar-list');
rightNav = document.querySelector('.search-bar');



burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})