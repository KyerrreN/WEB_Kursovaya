let phone = document.querySelector("#r-phone");
let email = document.querySelector("#r-email");
let birth = document.querySelector("#r-birth");
let pass = document.querySelector("#r-pass");
let passRND = document.querySelector("#rnd-pass");
let passConfirm = document.querySelector("#r-pass-confirm");
let firstName = document.querySelector("#r-first-name");
let lastName = document.querySelector("#r-last-name");
let patronymic = document.querySelector("#r-patronymic");
let nickname = document.querySelector("#r-nickname");
let nicknameRND = document.querySelector("#rnd-nickname");
let checkbox = document.querySelector("#r-checkbox");
let toRegister = document.querySelector(".auth-right-button");

passConfirm.addEventListener("paste", (event) => {
    event.preventDefault();
    return false;
});
