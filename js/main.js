// link become white
const menu = document.querySelector('.menu');

menu.addEventListener('mouseover', event => {
    if (event.target.classList.contains('menu__item')) {
        let link = event.target.children[0];
        link.style.color = 'white';
    }  
});
menu.addEventListener('mouseout', event => {
    if (event.target.classList.contains('menu__item')) {
        let link = event.target.children[0];
        link.style.color = '#474747';
    }
});


// carousel
const carousel = document.querySelector('.carousel');
const list = carousel.querySelector('ul');
const listElem = carousel.querySelectorAll('li');
const btnNext = carousel.querySelector('.next');
const btnPrev = carousel.querySelector('.prev');
const width = 319; 
const count = 1;
let position = 0;


btnPrev.addEventListener('click', movePrev);
function movePrev() {
    position += width * count;
    position = Math.min(position, 0);
    list.style.marginLeft = position + 'px';
}

btnNext.addEventListener('click', moveNext); 

function moveNext() {
    position -= width * count;
    position = Math.max(position, -width * (listElem.length - count));
    list.style.marginLeft = position + 'px';
}



// burger menu
const header = document.querySelector(".header");
const hamb = header.querySelector(".header__hamb");
const navMenu = header.querySelector(".menu");
const logo = header.querySelector('.header_logo-new');
const navbarIconSvg = header.querySelector('.navbar__icon_items');
const logoImg = header.querySelector('.header_logo-new');

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
    navbarIconSvg.classList.toggle("active");
    logoImg.classList.toggle("d-none");
}

const menuLink = document.querySelectorAll(".menu__link");
menuLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
    header.classList.remove("active");
    navbarIconSvg.classList.remove("active");
    logoImg.classList.remove("d-none");
}