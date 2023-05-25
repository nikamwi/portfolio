// const openmenu = document.getElementById("mobilemenu");

// openmenu.addEventListener("click", () => {
//     let menuMobile = document.querySelector('.mobile-menu');
//     if (menuMobile.classList.contains('open')) {
//         menuMobile.classList.remove('open');
//         document.querySelector('.icon').src = "img/list.png";
//         document.getElementById("pirveli").style.display = "block"
//     } else {
//         menuMobile.classList.add('open');
//         document.querySelector('.icon').src = "img/close.png";
//         document.getElementById("pirveli").style.display = "none"
//     }
// });

const openMenu = document.getElementById("open");
const closedMenu = document.getElementById("closed");
const menu = document.getElementById("closedmenu");
const minimenu = document.getElementById("mobile-menu");

openMenu.addEventListener("click", () => {
    menu.style.display = "none"
    minimenu.style.display = "block"
});

closedMenu.addEventListener("click", () => {
    menu.style.display = "block"
    minimenu.style.display = "none"
});