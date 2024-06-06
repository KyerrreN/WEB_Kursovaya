let buttonRegister = document.querySelector("#to-register");
let buttonLogin = document.querySelector("#to-login");

buttonRegister.addEventListener("click", () => {
    const registerFrame = document.querySelector(".register");
    const loginFrame = document.querySelector(".login");
    const registerButton = document.querySelector("#button-to-register");
    const loginButton = document.querySelector("#button-to-login");

    registerFrame.style.display = "flex";
    loginFrame.style.display = "none";

    registerButton.style.display = "block";
    loginButton.style.display = "none";
});

buttonLogin.addEventListener("click", () => {
    const registerFrame = document.querySelector(".register");
    const loginFrame = document.querySelector(".login");
    const loginButton = document.querySelector("#button-to-login");
    const registerButton = document.querySelector("#button-to-register");

    registerFrame.style.display = "none";
    loginFrame.style.display = "flex";

    registerButton.style.display = "none";
    loginButton.style.display = "block";
});
