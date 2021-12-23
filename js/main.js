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

let hamb = document.querySelector(".header__hamb");
let navMenu = document.querySelector(".menu");
let header = document.querySelector(".header");
const logo = document.querySelector('.header_logo-new');

hamb.addEventListener("click", mobileMenu);

function mobileMenu() {
    console.log("fddd");
    hamb.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
}

const menuLink = document.querySelectorAll(".menu__link");
menuLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamb.classList.remove("active");
    navMenu.classList.remove("active");
}
