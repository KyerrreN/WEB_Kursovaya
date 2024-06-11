let isValid = false;
const inputPhone = document.querySelector("#r-phone");
const inputEmail = document.querySelector("#r-email");
const inputBirth = document.querySelector("#r-birth");
const inputPass = document.querySelector("#r-pass");
const passRND = document.querySelector("#rnd-pass");
const inputPassConfirm = document.querySelector("#r-pass-confirm");
const inputFirstName = document.querySelector("#r-first-name");
const inputLastName = document.querySelector("#r-last-name");
const inputPatronymic = document.querySelector("#r-patronymic");
const inputNickname = document.querySelector("#r-nickname");
const nicknameRND = document.querySelector("#rnd-nickname");
const toRegister = document.querySelector(".auth-right-button");

// restrict pasting into password inputs
inputPass.addEventListener("paste", () => {
    event.preventDefault();
});

inputPassConfirm.addEventListener("paste", () => {
    event.preventDefault();
});

// validation
let generateCount = 0;

inputPhone.addEventListener("input", () => {
    const errorPhone = document.querySelector("#register-error-phone");

    if (!validatePhoneNumber()) {
        errorPhone.style.display = "block";

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            errorPhone.innerHTML = "Phone number must be from Belarus";
        } else {
            errorPhone.innerHTML = "Номер телефона должен быть белорусским";
        }
    } else {
        errorPhone.style.display = "none";
    }
});

inputEmail.addEventListener("input", () => {
    const errorEmail = document.querySelector("#register-error-email");

    if (!validateEmail()) {
        errorEmail.style.display = "block";

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            errorEmail.innerHTML = "Email must be valid";
        } else {
            errorEmail.innerHTML = "Почта не соответствует шаблону";
        }
    } else {
        errorEmail.style.display = "none";
    }
});

inputBirth.addEventListener("input", () => {
    const errorBirth = document.querySelector("#register-error-birth");

    if (!validateBirth()) {
        errorBirth.style.display = "block";

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            errorBirth.innerHTML = "You must be over 16";
        } else {
            errorBirth.innerHTML = "Вы должны быть старше 16";
        }
    } else {
        errorBirth.style.display = "none";
    }
});

inputPass.addEventListener("input", () => {
    const errorPass = document.querySelector("#register-error-pass");

    if (!validatePass()) {
        errorPass.style.display = "block";

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            errorPass.innerHTML = "Password is too weak";
        } else {
            errorPass.innerHTML = "Слабый пароль";
        }
    } else {
        errorPass.style.display = "none";
    }
});

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

    const errorPass = document.querySelector("#register-error-pass");
    errorPass.style.display = "none";
});

inputPassConfirm.addEventListener("input", () => {
    const errorPassConfirm = document.querySelector(
        "#register-error-pass-confirm"
    );

    if (!validatePassConfirm()) {
        errorPassConfirm.style.display = "block";

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            errorPassConfirm.innerHTML = "Passwords don't match";
        } else {
            errorPassConfirm.innerHTML = "Пароли не совпадают";
        }
    } else {
        errorPassConfirm.style.display = "none";
    }
});

inputFirstName.addEventListener("input", () => {
    const errorFirstName = document.querySelector("#register-error-first-name");

    if (!validateFirstName()) {
        errorFirstName.style.display = "block";

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            errorFirstName.innerHTML = "First name is invalid";
        } else {
            errorFirstName.innerHTML = "Имя не соответствует шаблону";
        }
    } else {
        errorFirstName.style.display = "none";
    }
});

inputLastName.addEventListener("input", () => {
    const errorLastName = document.querySelector("#register-error-last-name");

    if (!validateLastName()) {
        errorLastName.style.display = "block";

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            errorLastName.innerHTML = "Last name is invalid";
        } else {
            errorLastName.innerHTML = "Фамилия не соответствует шаблону";
        }
    } else {
        errorLastName.style.display = "none";
    }
});

inputPatronymic.addEventListener("input", () => {
    const errorPatronymic = document.querySelector(
        "#register-error-patronymic"
    );

    if (!validatePatronymic()) {
        errorPatronymic.style.display = "block";

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            errorPatronymic.innerHTML = "Patronymic is invalid";
        } else {
            errorPatronymic.innerHTML = "Отчество не соответствует шаблону";
        }
    } else {
        errorPatronymic.style.display = "none";
    }
});

inputNickname.addEventListener("input", () => {
    const errorNickname = document.querySelector("#register-error-nickname");

    if (!validateNickname()) {
        errorNickname.style.display = "block";

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            errorNickname.innerHTML = "Nickname is invalid";
        } else {
            errorNickname.innerHTML = "Никнейм не соответствует шаблону";
        }
    } else if (!checkNicknameIfTaken()) {
        errorNickname.style.display = "block";

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            errorNickname.innerHTML = "Nickname is taken";
        } else {
            errorNickname.innerHTML = "Никнейм уже занят";
        }
    } else {
        errorNickname.style.display = "none";
    }
});
nicknameRND.addEventListener("click", () => {
    if (generateCount < 5) {
        let nickname = document.querySelector("#r-nickname");
        nickname.value = generateNickname();

        const errorNickname = document.querySelector(
            "#register-error-nickname"
        );

        if (!validateNickname()) {
            errorNickname.style.display = "block";

            if (
                localStorage.getItem("lang") === "en" ||
                localStorage.getItem("lang") === null
            ) {
                errorNickname.innerHTML = "Nickname is invalid";
            } else {
                errorNickname.innerHTML = "Никнейм не соответствует шаблону";
            }
        } else if (!checkNicknameIfTaken()) {
            errorNickname.style.display = "block";

            if (
                localStorage.getItem("lang") === "en" ||
                localStorage.getItem("lang") === null
            ) {
                errorNickname.innerHTML = "Nickname is taken";
            } else {
                errorNickname.innerHTML = "Никнейм уже занят";
            }
        } else {
            errorNickname.style.display = "none";
        }

        generateCount++;
    } else {
        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            alert(
                "You have exceeded nickname generation attempts.\nOnly 5 attempts allowed."
            );
        } else {
            alert("Никнейм можно сгенерировать только 5 раз.");
        }
    }
});

// functions for validation
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
    let birth = document.querySelector("#r-birth").value;
    let today = new Date();
    today.setFullYear(today.getFullYear() - 16);
    const birthdayDate = new Date(birth);

    if (birthdayDate > today || birth === "") {
        return false;
    }

    return true;
}
function validatePass() {
    const password = document.querySelector("#r-pass").value;

    if (password !== "admin") {
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
    }

    return true;
}
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
function checkNicknameIfTaken() {
    let nickname = document.querySelector("#r-nickname").value;
    const allUsers = {};

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (!isNaN(parseInt(key))) {
            const userData = JSON.parse(localStorage.getItem(key));
            allUsers[key] = userData;
        }
    }

    for (const userId in allUsers) {
        if (allUsers[userId].nickname === nickname) {
            return false;
        }
    }

    return true;
}
function validateCheckbox() {
    let checkbox = document.getElementById("r-checkbox");

    return checkbox.checked;
}

// Registrate button
toRegister.addEventListener("click", () => {
    let allErrors = [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
    ];
    let isValid = true;

    if (validatePhoneNumber()) {
        allErrors[0] = true;
    }

    if (validateEmail()) {
        allErrors[1] = true;
    }

    if (validateBirth()) {
        allErrors[2] = true;
    }

    if (validatePass()) {
        allErrors[3] = true;
    }

    if (validatePassConfirm()) {
        allErrors[4] = true;
    }

    if (validateFirstName()) {
        allErrors[5] = true;
    }

    if (validateLastName()) {
        allErrors[6] = true;
    }

    if (validatePatronymic()) {
        allErrors[7] = true;
    }

    if (validateNickname()) {
        allErrors[8] = true;
    }

    if (checkNicknameIfTaken()) {
        allErrors[9] = true;
    }

    if (validateCheckbox()) {
        allErrors[10] = true;
    }

    for (let i = 0; i < allErrors.length; i++) {
        if (!allErrors[i]) {
            isValid = false;

            break;
        }
    }

    if (isValid) {
        const userPhoneNumber = document.querySelector("#r-phone").value;
        const userEmail = document.querySelector("#r-email").value;
        const userBirth = document.querySelector("#r-birth").value;
        const userPassword = document.querySelector("#r-pass").value;
        const userFirstName = document.querySelector("#r-first-name").value;
        const userLastName = document.querySelector("#r-last-name").value;
        const userPatronymic = document.querySelector("#r-patronymic").value;
        const userNickname = document.querySelector("#r-nickname").value;
        let userRole;

        if (userPassword === "admin") {
            userRole = "admin";
        } else {
            userRole = "user";
        }

        const newUser = new User(
            userPhoneNumber,
            userEmail,
            userBirth,
            userPassword,
            userFirstName,
            userLastName,
            userPatronymic,
            userNickname,
            userRole
        );
        const userData = JSON.stringify(newUser);

        localStorage.setItem(localStorage.length + 1, userData);

        if (
            localStorage.getItem("lang") === "en" ||
            localStorage.getItem("lang") === null
        ) {
            alert("You have successfully registered.");
        } else {
            alert("Регистрация прошла успешно.");
        }
        window.location.replace("Authorization.html");
    }
});

function User(
    phone,
    email,
    birth,
    password,
    firstName,
    lastName,
    patronymic,
    nickname,
    role
) {
    this.phone = phone;
    this.email = email;
    this.birth = birth;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.patronymic = patronymic;
    this.nickname = nickname;
    this.role = role;
}
