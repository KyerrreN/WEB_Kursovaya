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
            ".modal-header":
                "Here is your profile information. In case you forgot any of your credentials, you can always look them up here.",
            ".modal-nickname": "Nickname",
            ".modal-first-name": "First Name",
            ".modal-last-name": "Last Name",
            ".modal-patronymic": "Patronymic",
            ".modal-phone": "Phone",
            ".modal-birth": "Date Of Birth",
            ".modal-pass": "Password",
            ".modal-role": "Role",

            ".footer-content-text-desc-powered": "Powered by Webflow",
            "#footer-content-text-desc-powered-second":
                "All rights reserved Wishbone+Partners, Inc.Licensing",
            ".footer-content-text-button-language": "Change language",
            ".footer-content-text-button-theme": "Change theme",
        },
        ru: {
            ".modal-header":
                "Здесь находятся ваши персональные данные. На случай если вы забыли учетные данные, вы всегда можете посмотреть их здесь.",
            ".modal-nickname": "Никнейм",
            ".modal-first-name": "Имя",
            ".modal-last-name": "Фамилия",
            ".modal-patronymic": "Отчество",
            ".modal-phone": "Телефон",
            ".modal-birth": "Дата рождения",
            ".modal-pass": "Пароль",
            ".modal-role": "Роль",

            ".footer-content-text-desc-powered": "Предоставлено от Webflow",
            "#footer-content-text-desc-powered-second":
                "Все права защищены Wishbone+Partners, Inc.Licensing",
            ".footer-content-text-button-language": "Сменить язык",
            ".footer-content-text-button-theme": "Сменить тему",
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
    });
});
