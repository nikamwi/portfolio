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