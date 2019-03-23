let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");

img1.addEventListener("mouseover", () => {
    img2.style.clipPath = "polygon(0 0,75% 0,45% 100%,0 100%)";
})
img2.addEventListener("mouseover", () => {
    img2.style.clipPath = "polygon(55% 0,100% 0,100% 100%,25% 100%)";
})