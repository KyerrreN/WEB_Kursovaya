let passRND = document.querySelector("#rnd-pass");
let passConfirm = document.querySelector("#r-pass-confirm");
let nicknameRND = document.querySelector("#rnd-nickname");
let toRegister = document.querySelector(".auth-right-button");

let ePhone = document.querySelector("#e-phone");
let eEmail = document.querySelector("#e-email");
let eBirth = document.querySelector("#e-birth");
let ePass = document.querySelector("#e-pass");
let ePassConfirm = document.querySelector("#e-pass-confirm");
let eFirstName = document.querySelector("#e-first-name");
let eLastName = document.querySelector("#e-last-name");
let ePatronymic = document.querySelector("#e-patronymic");
let eNickname = document.querySelector("#e-nickname");

passConfirm.addEventListener("paste", (event) => {
    event.preventDefault();
    return false;
});

function validatePhoneNumber() {
    let phoneNumber = document.querySelector("#r-phone").value;
    phoneNumber = phoneNumber.replace(/[\s-]/g, "");

    if (phoneNumber.length !== 12) {
        return false;
    }
    if (phoneNumber.slice(0, 3) !== "375") {
        return false;
    }

    const allowed2Digits = ["25", "29", "33", "44"];
    if (!allowed2Digits.includes(phoneNumber.slice(3, 5))) {
        return false;
    }
    if (isNaN(phoneNumber.slice(5))) {
        return false;
    }

    return true;
}

function validateEmail() {
    let email = document.querySelector("#r-email").value;
    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(emailRegex)) {
        return true;
    }

    return false;
}

function validateBirth() {
    const birth = new Date(document.querySelector("#r-birth").value);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birth.getDate())
    ) {
        age--;
    }

    if (age >= 16) {
        return true;
    } else {
        return false;
    }
}

function validatePass() {
    const password = document.querySelector("#r-pass").value;

    if (password.length < 8 || password.length > 20) {
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        return false;
    }

    if (!/[a-z]/.test(password)) {
        return false;
    }

    if (!/\d/.test(password)) {
        return false;
    }

    if (!/[@$!%*?&]/.test(password)) {
        return false;
    }

    return true;
}

passRND.addEventListener("click", () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const digitChars = "0123456789";
    const specialChars = "@$!%*?&";

    let requiredChars = [];

    requiredChars.push(
        uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)]
    );

    requiredChars.push(
        lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)]
    );

    requiredChars.push(
        digitChars[Math.floor(Math.random() * digitChars.length)]
    );

    requiredChars.push(
        specialChars[Math.floor(Math.random() * specialChars.length)]
    );

    for (let i = 0; i < 8; i++) {
        const charSet = [
            uppercaseChars,
            lowercaseChars,
            digitChars,
            specialChars,
        ][Math.floor(Math.random() * 4)];
        requiredChars.push(charSet[Math.floor(Math.random() * charSet.length)]);
    }

    for (let i = requiredChars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [requiredChars[i], requiredChars[j]] = [
            requiredChars[j],
            requiredChars[i],
        ];
    }

    const password = document.querySelector("#r-pass");
    let finalPassword = requiredChars.join("");
    password.value = finalPassword;
    const passwordConfirm = document.querySelector("#r-pass-confirm");
    passwordConfirm.value = finalPassword;
});

function validatePassConfirm() {
    const password = document.querySelector("#r-pass").value;
    const passwordConfirm = document.querySelector("#r-pass-confirm").value;

    return password === passwordConfirm;
}

function validateFirstName() {
    const namePattern = /^[\u0400-\u04FF\p{L}]+$/u;
    let firstName = document.querySelector("#r-first-name").value;

    if (firstName.trim().split(" ").length > 1) {
        return false;
    }

    if (!namePattern.test(firstName.trim())) {
        return false;
    }

    return true;
}
function validateLastName() {
    const namePattern = /^[\u0400-\u04FF\p{L}]+$/u;
    let lastName = document.querySelector("#r-last-name").value;

    if (lastName.trim().split(" ").length > 1) {
        return false;
    }

    if (!namePattern.test(lastName.trim())) {
        return false;
    }

    return true;
}
function validatePatronymic() {
    const namePattern = /^[\u0400-\u04FF\p{L}]+$/u;
    let patronymic = document.querySelector("#r-patronymic").value;

    if (patronymic.trim() === "") {
        return true;
    }

    if (patronymic.trim().split(" ").length > 1) {
        return false;
    }

    if (!namePattern.test(patronymic.trim())) {
        return false;
    }

    return true;
}
function generateNickname() {
    const consonants = "bcdfghjklmnpqrstvwxyzBCDFGHJKLMNOQRSTVWXYZ";
    const vowels = "aeiouAEIOU";

    function getRandomChar(charSet) {
        return charSet.charAt(Math.floor(Math.random() * charSet.length));
    }

    let nickname = "";
    const nicknameLength = Math.floor(Math.random() * (20 - 5 + 1)) + 5;

    for (let i = 0; i < nicknameLength; i++) {
        if (i % 2 === 0) {
            nickname += getRandomChar(consonants);
        } else {
            nickname += getRandomChar(vowels);
        }
    }

    return nickname;
}
function validateNickname() {
    let nickname = document.querySelector("#r-nickname").value;

    if (nickname.length < 5 || nickname.length > 20) {
        return false;
    }

    const nicknamePattern = /^[a-zA-Z0-9]+$/;

    if (!nicknamePattern.test(nickname.trim())) {
        return false;
    }

    if (localStorage.getItem(nickname)) {
        return false;
    }

    return true;
}
function validateCheckbox() {
    let checkbox = document.getElementById("r-checkbox");

    return checkbox.checked;
}
nicknameRND.addEventListener("click", () => {
    let nickname = document.querySelector("#r-nickname");
    nickname.value = generateNickname();
});
toRegister.addEventListener("click", () => {
    let errorMessage = "";
    let isValid = true;

    if (validatePhoneNumber() === false) {
        ePhone.style.display = "block";
        isValid = false;
        errorMessage += "Phone number must be from Belarus\n";
    } else {
        ePhone.style.display = "none";
    }

    if (validateEmail() === false) {
        eEmail.style.display = "block";
        isValid = false;
        errorMessage += "Email is not valid\n";
    } else {
        eEmail.style.display = "none";
    }

    if (validateBirth() === false) {
        eBirth.style.display = "block";
        isValid = false;
        errorMessage += "You must be over 16 to use this website\n";
    } else {
        eBirth.style.display = "none";
    }

    if (validatePass() === false) {
        ePass.style.display = "block";
        isValid = false;
        errorMessage += "Your password is weak\n";
    } else {
        ePass.style.display = "none";
    }

    if (validatePassConfirm() === false) {
        ePassConfirm.style.display = "block";
        isValid = false;
        errorMessage += "Passwords don't match\n";
    } else {
        ePassConfirm.style.display = "none";
    }

    if (validateFirstName() === false) {
        eFirstName.style.display = "block";
        isValid = false;
        errorMessage +=
            "First name has to be cyrillic/latin. Only one word allowed\n";
    } else {
        eFirstName.style.display = "none";
    }

    if (validateLastName() === false) {
        eLastName.style.display = "block";
        isValid = false;
        errorMessage +=
            "Last name has to be cyrillic/latin. Only one word allowed\n";
    } else {
        eLastName.style.display = "none";
    }

    if (validatePatronymic() === false) {
        ePatronymic.style.display = "block";
        errorMessage +=
            "Patronymic has to be ciryllic/latin. Only one word allowed\n";
        isValid = false;
    } else {
        ePatronymic.style.display = "none";
    }

    if (!validateNickname()) {
        eNickname.style.display = "block";
        isValid = false;
        errorMessage +=
            "Nickname can't be empty, contain special characters, or be less than 5 and greater than 20 symbols\nAlternatively, it might be taken\n";
    } else {
        eNickname.style.display = "none";
    }

    if (!validateCheckbox()) {
        isValid = false;
        errorMessage += "Please read our terms and conditions";
    }

    if (isValid === false) {
        alert(errorMessage);
    }
});
