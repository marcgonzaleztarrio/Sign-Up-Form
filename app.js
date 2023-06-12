let submit = document.querySelector("#submitBtt"),
  fname = document.querySelector("#fname"),
  lname = document.querySelector("#lname"),
  email = document.querySelector("#email"),
  phone = document.querySelector("#phone"),
  password = document.querySelector("#password"),
  confirmPssw = document.querySelector("#confirmPssw"),
  textPassw = document.querySelector("#textPassw"),
  textRequiered = document.querySelector("#textRequiered");

textPassw.style.display = "none";

function checkPattern() {
  // Allow A-Z, a-z, 0-9 and underscore. Min 1 char.
  const pattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/;

  console.log(pattern.test(password.value));
}

function checkFormValidity() {
  

  if (
    fname.value.trim() !== "" &&
    lname.value.trim() !== "" &&
    email.value.trim() !== "" &&
    password.valid === confirmPssw.value
  ) {
    submit.style.color = "green";
  } else {
    submit.style.color = "";
  }
}

confirmPssw.addEventListener("input", checkFormValidity);
fname.addEventListener("input", checkFormValidity);
lname.addEventListener("input", checkFormValidity);
email.addEventListener("input", checkFormValidity);
password.addEventListener("input", checkFormValidity);

submit.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    fname.value.trim() === "" ||
    lname.value.trim() === "" ||
    email.value.trim() === ""
  ) {
    console.log("Rellena los campos requeridos");
    textRequiered.style.display = "block";
    submit.style.color = "";
  } else {
    textRequiered.style.display = "none";
    if (password.value !== confirmPssw.value) {
      console.log("Las contraseñas no coinciden");
      textPassw.style.display = "block";
      submit.style.color = "";
    } else {
      console.log("Las contraseñas coinciden");
      console.log("First Name:", fname.value);
      console.log("Last Name:", lname.value);
      console.log("Email:", email.value);
      console.log("Phone Number:", phone.value);
      console.log("Password:", password.value);

      sessionStorage.setItem("fname", fname.value);
      sessionStorage.setItem("lname", lname.value);
      sessionStorage.setItem("email", email.value);
      sessionStorage.setItem("phone", phone.value);
      sessionStorage.setItem("password", password.value);

      window.location.href = "send.html";
    }
  }

  setTimeout(() => {
    textPassw.style.display = "none";
    textRequiered.style.display = "none";
  }, 1200);
});
