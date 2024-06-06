let buttonRegister = document.querySelector("#to-register");
let buttonLogin = document.querySelector("#to-login");

buttonRegister.addEventListener("click", () => {
    const registerFrame = document.querySelector(".register");
    const loginFrame = document.querySelector(".login");
    const proceedButton = document.querySelector(".auth-right-button");

    registerFrame.style.display = "flex";
    loginFrame.style.display = "none";

    proceedButton.innerHTML = "Login";
});

buttonLogin.addEventListener("click", () => {
    const registerFrame = document.querySelector(".register");
    const loginFrame = document.querySelector(".login");
    const proceedButton = document.querySelector(".auth-right-button");

    registerFrame.style.display = "none";
    loginFrame.style.display = "flex";

    proceedButton.innerHTML = "Register";
});
