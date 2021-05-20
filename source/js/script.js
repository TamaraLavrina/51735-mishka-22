var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle-navigate');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});


const buyButton = document.querySelector(".product-special__button");
const cartPopup = document.querySelector(".modal");
const cartAdd = cartPopup.querySelector(".modal__button");

buyButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.add("modal--show");
})

cartAdd.addEventListener("click", function (evt) {
  evt.preventDefault();
  cartPopup.classList.remove("modal--show");
});
