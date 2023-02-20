const homeImg = document.querySelector('.home-img');
const images = ['images/skz.png', 'images/ive.png', 'images/treasure.png'];
let currentImageIndex = 0;
  
setInterval(() => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    homeImg.innerHTML = `<img src="${images[currentImageIndex]}" alt="">`;
}, 3000);

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}