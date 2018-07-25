var cssText = document.querySelector(".css-text");
var color1 = document.querySelector(".color-1");
var color2 = document.querySelector(".color-2");
var background = document.querySelector(".section--background");

function setGradient() {
    background.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    cssText.textContent = background.style.background;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


