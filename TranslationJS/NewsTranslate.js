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

    const getTemplateAlign = document.querySelector(
        ".header-content-nav-rectangle-text"
    );
    getTemplateAlign.style.textAlign = "center";
}
document.addEventListener("DOMContentLoaded", () => {
    const translations = {
        en: {
            //modal
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

            //footer
            ".footer-content-text-desc-powered": "Powered by Webflow",
            "#footer-content-text-desc-powered-second":
                "All rights reserved Wishbone+Partners, Inc.Licensing",
            ".footer-content-text-button-language": "Change language",
            ".footer-content-text-button-theme": "Change theme",

            //ham + header
            "#off-screen-menu-logout": "Log out",
            "#off-screen-menu-login": "Login",
            "#ham-admin": "Admin panel",
            "#ham-main-page": "Main Page",
            "#ham-news": "News",
            ".header-content-nav-rectangle": "Get template",
            ".header-content-nav-logout": "Log out",
            ".header-content-nav-admin": "Admin panel",
            ".header-content-nav-login": "Login",
            ".header-content-nav-main-page": "Main Page",
            ".header-content-nav-news": "News",
            ".header-content-nav-rectangle-text": "Get template",

            //main
            ".news-text-header":
                "We have many awesome news to check out. Stay tuned for more!",
            ".news-pagination-rectangle-text": "Read more...",
        },
        ru: {
            //modal
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

            //footer
            ".footer-content-text-desc-powered": "Предоставлено от Webflow",
            "#footer-content-text-desc-powered-second":
                "Все права защищены Wishbone+Partners, Inc.Licensing",
            ".footer-content-text-button-language": "Сменить язык",
            ".footer-content-text-button-theme": "Сменить тему",

            //ham + header
            "#off-screen-menu-logout": "Выйти",
            "#off-screen-menu-login": "Войти",
            "#ham-admin": "Админ панель",
            "#ham-main-page": "Главная",
            "#ham-news": "Новости",
            ".header-content-nav-rectangle": "Получить набросок",
            ".header-content-nav-logout": "Выйти",
            ".header-content-nav-admin": "Админ панель",
            ".header-content-nav-login": "Войти",
            ".header-content-nav-news": "Новости",
            ".header-content-nav-main-page": "Главная",
            ".header-content-nav-rectangle-text": "Получить набросок",

            //main
            ".news-text-header":
                "У нас много потрясающих новостей, которые стоит проверить. Оставайтесь на связи, будет еще больше!",
            ".news-pagination-rectangle-text": "Подробнее...",
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
