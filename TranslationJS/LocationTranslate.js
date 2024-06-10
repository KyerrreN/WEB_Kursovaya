function changeLanguage(translations) {
    let currentLanguage;
    const placeholderInInput = document.querySelector(
        ".maps-socials-email-input"
    );

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

    if (currentLanguage === "en") {
        placeholderInInput.placeholder = "Enter your email here";
    } else {
        placeholderInInput.placeholder = "Здесь вводится адрес почты";
    }
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
            "#maps-fb": "Our X: @WishbonePartners",
            "#maps-x": "Our FB: @wishbone",
            "#maps-inst": "Our inst: @wishbone__",
            "#maps-socials-header-upper":
                "If you'd like to contact us, be sure to visit our socials",
            "#maps-socials-header-lower":
                "Or send us your email, we will contact you ourselves!",
            ".maps-map-header":
                "You may also come to us in person, where we will show you all our projects in person and consult you regarding any aspect you may be concerned about.",
            "#maps-map-embedding-topoint": "We are here",
            ".maps-socials-email-button": "Send",
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
            "#maps-fb": "Наш Х: @WishbonePartners",
            "#maps-x": "Наш фейсбук: @wishbone",
            "#maps-inst": "Наш инстаграм: @wishbone__",
            "#maps-socials-header-upper":
                "Если вы хотите связаться с нами, не стесняйтесь посетить наши социальные сети",
            "#maps-socials-header-lower":
                "Или перешлите ваш адрес электронной почты, и мы свяжемся с вами!",
            ".maps-map-header":
                "Вы также можете посетить нас лично, где мы покажем вам все наши проекты и проконсультируем касательно всех вопросов, которые могут возникнуть.",
            "#maps-map-embedding-topoint": "Мы здесь",
            ".maps-socials-email-button": "Отправить",
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
