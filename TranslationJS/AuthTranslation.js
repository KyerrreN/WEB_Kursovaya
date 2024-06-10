function changeLanguage(translations) {
    let currentLanguage;
    if (localStorage.getItem("lang") === null) {
        currentLanguage = "ru";
        localStorage.setItem("lang", "ru");
    } else {
        currentLanguage = localStorage.getItem("lang");
    }

    for (const className in translations[currentLanguage]) {
        const element = document.querySelector(className);
        if (element) {
            element.innerHTML = translations[currentLanguage][className];
            if (currentLanguage === "ru") {
                element.style.fontFamily = "Roboto";
            } else {
                element.style.fontFamily = "Poppins";
            }
        }
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            //auth-left
            ".auth-left-company": "Wishbone+Partners",
            ".auth-left-desc":
                "Here at Wishbone+Partners, we value all new future customers, as well as their privacy. Please, don't use weak passwords.",
            ".footer-content-text-button-language": "Change language",
            ".footer-content-text-button-theme": "Change theme",
            ".login-introduction":
                "Welcome to Wishbone+Partners. Feel free to check out our full webpage after registering. Please, proceed with entering your nickname and password and enjoy everything we have to offer.",
            ".auth-frame-login-nickname": "Nickname",
            ".auth-frame-login-password": "Password",
            "#button-to-login": "Login",
            "#button-to-register": "Register",
            "#to-register": "Or did you mean to register?",
            ".register-introduction":
                "Welcome to Wishbone+Partners. Fill out this form and be a new awesome user of our platform with more content awaiting you.",
            "#to-login": "Or did you mean to log in?",
            "#register-label-phone": "Phone",
            "#register-label-email": "Email",
            "#register-label-birth": "Date of birth",
            "#register-label-pass": "Password",
            "#rnd-pass": "Generate",
            "#register-label-pass-confirm": "Confirm password",
            "#register-label-first-name": "First name",
            "#register-label-last-name": "Last name",
            "#register-label-patronymic": "Patronymic",
            "#register-label-nickname": "Nickname",
            "#rnd-nickname": "Generate",
            "#register-label-tac": "I have read the terms and conditions",
        },
        ru: {
            //auth-left
            ".auth-left-company": "Wishbone+Partners",
            ".auth-left-desc":
                "Здесь, в Wishbone+Partners, мы ценим всех новых будущих клиентов, а также их конфиденциальность. Пожалуйста, не используйте слабые пароли.",
            ".footer-content-text-button-language": "Сменить язык",
            ".footer-content-text-button-theme": "Сменить тему",
            ".login-introduction":
                "Добро пожаловать в Wishbone+Partners. Чувствуйте себя свободно, чтобы изучить нашу полную веб-страницу после регистрации. Пожалуйста, введите свой никнейм и пароль и наслаждайтесь всем, что мы можем предложить.",
            ".auth-frame-login-nickname": "Никнейм",
            ".auth-frame-login-password": "Пароль",
            "#button-to-login": "Войти",
            "#button-to-register": "Регистрация",
            "#to-register": "Или вы хотели зарегистрироваться?",
            ".register-introduction":
                "Добро пожаловать в Wishbone+Partners. Заполните эту форму и станьте пользователем нашей платформы, на которой вас ждет больше контента.",
            "#to-login": "Или вы хотели войти?",
            "#register-label-phone": "Телефон",
            "#register-label-email": "Эл. почта",
            "#register-label-birth": "Дата рождения",
            "#register-label-pass": "Пароль",
            "#rnd-pass": "Сгенерировать",
            "#register-label-pass-confirm": "Подтвердить пароль",
            "#register-label-first-name": "Имя",
            "#register-label-last-name": "Фамилия",
            "#register-label-patronymic": "Отчество",
            "#register-label-nickname": "Никнейм",
            "#rnd-nickname": "Сгенерировать",
            "#register-label-tac": "Я прочитал условия соглашения",
        },
    };

    changeLanguage(translations);

    const buttonToChangeLanguage = document.querySelector(
        ".footer-content-text-button-language"
    );

    buttonToChangeLanguage.addEventListener("click", () => {
        if (localStorage.getItem("lang") === "ru") {
            localStorage.setItem("lang", "en");
        } else {
            localStorage.setItem("lang", "ru");
        }

        changeLanguage(translations);

        location.reload();
    });
});
