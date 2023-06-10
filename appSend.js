document.addEventListener("DOMContentLoaded", function () {
  const fnameElement = document.querySelector("#fname"),
    lnameElement = document.querySelector("#lname"),
    emailElement = document.querySelector("#email"),
    phoneElement = document.querySelector("#phone"),
    passwordElement = document.querySelector("#password");

  const fname = sessionStorage.getItem("fname") || "";
  const lname = sessionStorage.getItem("lname") || "";
  const email = sessionStorage.getItem("email") || "";
  const phone = sessionStorage.getItem("phone") || "";
  const password = sessionStorage.getItem("password") || "";

  fnameElement.textContent = fname;
  lnameElement.textContent = lname;
  emailElement.textContent = email;
  phoneElement.textContent = phone;
  passwordElement.textContent = password;

  const teletextContainer = document.querySelector(".teletext-container");
  teletextContainer.classList.add("teletext-effect");
});
