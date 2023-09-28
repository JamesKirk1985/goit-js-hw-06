let counterValue = 0;
const valueBox = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
decrement.addEventListener("click", decrementFunction);
increment.addEventListener("click", incrementFunction);
function decrementFunction() {
  counterValue = counterValue - 1;
  valueBox.textContent = counterValue;
}
function incrementFunction() {
  counterValue = counterValue + 1;
  valueBox.textContent = counterValue;
}
