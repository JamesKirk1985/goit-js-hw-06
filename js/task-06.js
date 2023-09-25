const input = document.querySelector("#validation-input");
input.addEventListener("blur", validatorFunction);
function validatorFunction() {
  if (Number(input.value.length) === Number(input.dataset.length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
    // return;
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
  return;
}
console.dir(input);
