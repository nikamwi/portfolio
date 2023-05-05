const readMore = document.getElementById("readmore");
const readLess = document.getElementById("readless");
const aboutP = document.getElementById("aboutp");

readMore.addEventListener("click", () => {
    aboutP.style.height = "350px";
    readLess.style.display = "block";
    readMore.style.display = "none";
});

readLess.addEventListener("click", () => {
    aboutP.style.height = "90px";
    readLess.style.display = "none";
    readMore.style.display = "block";
});