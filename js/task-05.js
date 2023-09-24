const inputValue = document.querySelector("#name-input");
const span = document.querySelector("#name-output");
inputValue.addEventListener("input", callBack);
function callBack() {
  span.textContent = inputValue.value || "Anonymous";
}
