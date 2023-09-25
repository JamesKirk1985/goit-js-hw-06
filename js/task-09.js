function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const colorValue = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", colorFunction);
function colorFunction() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorValue.textContent = color;
}
