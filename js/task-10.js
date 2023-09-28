function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlButton = document.querySelector("#controls");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
let amount = 0;
controlButton.addEventListener("input", getValue);
function getValue(event) {
  amount = event.target.value;
  console.log(event.target.value);
  console.log(typeof event.target.value);
}

createButton.addEventListener("click", createBoxes);
function createBoxes() {
  destroyBoxes();
  const markup = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    markup.push(div);
  }
  box.append(...markup);
}
destroyButton.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  box.innerHTML = "";
}
