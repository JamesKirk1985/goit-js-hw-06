const rangeLine = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
rangeLine.addEventListener("input", sizeFunction);
function sizeFunction() {
  text.style.fontSize = `${rangeLine.value}px`;
}
