const input = document.querySelector("#validation-input");
input.addEventListener("blur", validatorFunction);
function validatorFunction() {
  if (input.value.length === Number(input.dataset.length)) {
    updateClass("invalid", "valid");
  } else {
    updateClass("valid", "invalid");
  }
}
function updateClass(class1, class2) {
  input.classList.remove(class1);
  input.classList.add(class2);
}
