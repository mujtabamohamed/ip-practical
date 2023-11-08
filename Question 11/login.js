const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");

loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    usernameError.innerHTML = "";
    passwordError.innerHTML = "";

    // Replace with your actual username and password
    const validUsername = "user123";
    const validPassword = "pass123";

    if (username.value === validUsername && password.value === validPassword) {
        alert("Login successful!");
    } else {
        if (username.value !== validUsername) {
            usernameError.innerHTML = "Invalid username";
        }
        if (password.value !== validPassword) {
            passwordError.innerHTML = "Invalid password";
        }
    }
});