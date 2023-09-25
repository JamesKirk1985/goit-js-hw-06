const input = document.querySelector("#validation-input");
input.addEventListener("blur", validatorFunction);
function validatorFunction() {
  if (Number(input.value.length) === Number(input.dataset.length)) {
    input.classList.add("valid");
    return;
  }
  input.classList.add("invalid");
  return;
}
