const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
decrement.addEventListener("click", decrementFunction);
increment.addEventListener("click", incrementFunction);
function decrementFunction() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}
function incrementFunction() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
