let openHam = document.querySelector("#hamburger");
let closeHam = document.querySelector("#closeMenu");
let navigationItems = document.querySelector("#primary_navigation");

const hamburgerEvent = (navigation, close, open) => {
    navigationItems.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("block", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));
