const form = document.querySelector(".login-form");
form.addEventListener("submit", formValidator);
const userDate = {};
function formValidator(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;
  if (email.value === "" || password.value === "") {
    alert("Всі поля мають бути заповнені!");
  } else {
    userDate.email = email.value;
    userDate.password = password.value;
    console.log(userDate);
  }
  event.currentTarget.reset();
}
