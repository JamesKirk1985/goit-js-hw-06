const form = document.querySelector(".login-form");
form.addEventListener("submit", formValidator);
const userDate = {};
function formValidator(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value.trim() === "" || password.value.trim() === "") {
    event.currentTarget.reset();
    return alert("Всі поля мають бути заповнені!");
  }
  userDate.email = email.value;
  userDate.password = password.value;
  console.log(userDate);
  event.currentTarget.reset();
}
