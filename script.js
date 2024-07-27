function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const formStatus = document.getElementById("formStatus");
  const email = emailInput.value;

  if (email.length > 3 && email.includes("@") && email.includes(".")) {
    emailError.textContent = "";
    checkFormValidity();
  } else {
    emailError.textContent =
      'Email must be more than 3 characters and contain "@" and "."';
    formStatus.textContent = "";
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const formStatus = document.getElementById("formStatus");
  const password = passwordInput.value;

  if (password.length > 8) {
    passwordError.textContent = "";
    checkFormValidity();
  } else {
    passwordError.textContent = "Password must be more than 8 characters";
    formStatus.textContent = "";
  }
}

function checkFormValidity() {
  const emailError = document.getElementById("emailError").textContent;
  const passwordError = document.getElementById("passwordError").textContent;
  const formStatus = document.getElementById("formStatus");

  if (!emailError && !passwordError) {
    formStatus.textContent = "All good to go!";
  }
}

function handleSubmit() {
  const confirmation = confirm("Are you sure you want to submit?");

  if (confirmation) {
    alert("Successful signup!");
    // You can submit the form here if needed
  } else {
    // Redirect to the same page and clear all input values
    document.getElementById("signupForm").reset();
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("formStatus").textContent = "";
  }
}
