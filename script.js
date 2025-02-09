// Login Validation
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();
    let userError = document.getElementById("userError");
    let passError = document.getElementById("passError");

    userError.textContent = "";
    passError.textContent = "";
    let isValid = true;

    if (username === "") {
        userError.textContent = "Username is required";
        isValid = false;
    }

    if (password === "" || password.length < 6) {
        passError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        alert("Login successful!");
    }
});

// Sign-Up Validation
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let newUsername = document.getElementById("newUsername").value.trim();
    let newPassword = document.getElementById("newPassword").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let newUserError = document.getElementById("newUserError");
    let newPassError = document.getElementById("newPassError");

    nameError.textContent = "";
    emailError.textContent = "";
    newUserError.textContent = "";
    newPassError.textContent = "";

    let isValid = true;

    if (name === "") {
        nameError.textContent = "Full name is required";
        isValid = false;
    }

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }

    if (newUsername === "") {
        newUserError.textContent = "Username is required";
        isValid = false;
    }

    if (newPassword === "" || newPassword.length < 6) {
        newPassError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    if (isValid) {
        alert("Sign-Up successful!");
    }
});
// Forgot Password Validation
document.getElementById("forgotPasswordForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("email").value.trim();
    let emailError = document.getElementById("emailError");

    emailError.textContent = "";

    if (email === "" || !email.includes("@")) {
        emailError.textContent = "Enter a valid email address";
    } else {
        alert("A password reset link has been sent to your email!");
    }
});
