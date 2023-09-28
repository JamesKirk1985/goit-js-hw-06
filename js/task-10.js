function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const controlButton = document.querySelector("#controls");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
// createButton.addEventListener("click", createBoxes);
// function createBoxes(amount) {
//   amount = controlButton.children[0].value;
//   for (let i = 0; i <= amount; i += 1) {
//     box.insertAdjacentHTML(
//       "afterbegin",
//       `<div
//   width="${30 + i * 10}"
//   height="${30 + i * 10}"
//   background-color="${getRandomHexColor()}">
//   </div>`
//     );
//   }
// }

// const markup = `<div
// width="${30 + i*10}"
// height="${30 + i*10}"
// background-color="${getRandomHexColor()}"></div>`;
// box.insertAdjacentHTML("afterbegin", markup);

console.log(controlButton.children[0].value);
console.dir(controlButton.children[0]);
// console.dir(createButton);

// createBoxes(amount)
// destroyBoxes()
box.insertAdjacentHTML(
  "afterbegin",
  `<div 
    width="30" 
    height="30" 
    background-color="${getRandomHexColor()}">
    </div>`
);
