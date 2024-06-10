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
            "#ham-contact": "Contact",
            "#ham-projects": "Projects",
            "#ham-news": "News",
            "#ham-team": "Team",
            ".header-content-nav-rectangle": "Get template",
            ".header-content-nav-logout": "Log out",
            ".header-content-nav-admin": "Admin panel",
            ".header-content-nav-login": "Login",
            ".header-content-nav-main-page": "Main Page",
            ".header-content-nav-news": "News",
            ".header-content-nav-rectangle-text": "Get template",
            ".header-content-nav-projects": "Projects",
            ".header-content-nav-about": "About",
            ".header-content-nav-team": "Team",
            ".header-content-nav-contact": "Contact",

            //main
            ".main-content-header": "The home of beautiful architecture.",
            ".main-content-span":
                "We are an architecture firm with a focus on beautiful but functional design. At its heart, we believe design is about usability and accessibility — these are the guiding principles for our work. Read more about our previous projects, our process and our team below.",
            ".main-content-button-text": "Read more",

            //our firm
            ".firm-our": "Our firm",
            "#firm-content-desc-text-first":
                "Wishbone Architecture is a leading design firm specializing in innovative and sustainable buildings. Founded in 2010, the firm has quickly established a reputation for creative solutions that push the boundaries of traditional architecture. With a team of highly skilled designers, engineers, and project managers, Wishbone takes on a diverse range of projects.",
            "#firm-content-desc-text-second":
                "At the heart of Wishbone's approach is a deep commitment to environmentally-conscious design. The firm utilizes the latest green building techniques and technologies to minimize the carbon footprint of its projects, while also ensuring the highest standards of livability and functionality. This holistic philosophy has earned Wishbone numerous awards and accolades.",
            "#firm-content-desc-text-third":
                "Beyond its design expertise, Wishbone is known for its collaborative workflow and client-centric service. The firm works closely with stakeholders throughout the entire project lifecycle, from initial concept to final construction, to exceed expectations. This dedication to transparency has earned Wishbone a loyal client base entrusting the firm with ambitious visions.",
            ".firm-content-desc-author-cred-name": "Stephen Collier",
            ".firm-content-desc-author-cred-position": "Senior Partner",
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
            "#ham-team": "Команда",
            "#ham-contact": "Связаться",
            "#ham-projects": "Проекты",
            "#ham-about": "О нас",
            "#ham-main-page": "Главная",
            "#ham-news": "Новости",
            ".header-content-nav-rectangle": "Получить набросок",
            ".header-content-nav-logout": "Выйти",
            ".header-content-nav-admin": "Админ панель",
            ".header-content-nav-login": "Войти",
            ".header-content-nav-news": "Новости",
            ".header-content-nav-main-page": "Главная",
            ".header-content-nav-rectangle-text": "Получить набросок",
            ".header-content-nav-projects": "Проекты",
            ".header-content-nav-about": "О нас",
            ".header-content-nav-team": "Команда",
            ".header-content-nav-contact": "Связаться",

            //main
            ".main-content-header": "Место красивой архитектуры",
            ".main-content-span":
                "Мы - архитектурная фирма, специализирующаяся на красивом, но функциональном дизайне. В самом сердце нашей работы мы верим, что дизайн - это о практичности и доступности - эти принципы лежат в основе нашей деятельности. Ниже вы можете прочитать больше о наших предыдущих проектах, нашем процессе и нашей команде.",
            ".main-content-button-text": "Подробнее...",

            //our firm
            ".firm-our": "Наша компания",
            "#firm-content-desc-text-first":
                "Архитектурная компания Wishbone - ведущая дизайн-фирма, специализирующаяся на инновационных и экологичных зданиях. Основанная в 2010 году, фирма быстро заслужила репутацию творческих решений, которые выходят за рамки архитектуры. Имея в своей команде высококвалифицированных инженеров и менеджеров проектов, Wishbone берется за разнообразные проекты.",
            "#firm-content-desc-text-second":
                "В основе подхода Wishbone лежит глубокая приверженность экологически ответственному дизайну. Фирма использует новейшие строительные методики и технологии, чтобы минимизировать углеродный след своих проектов, при этом также обеспечивая высочайшие стандарты комфорта и функциональности.",
            "#firm-content-desc-text-third":
                "Помимо экспертизы в дизайне, Wishbone известна своим совместным рабочим процессом и клиентоориентированным сервисом. Фирма сотрудничает с заинтересованными сторонами на протяжении всего жизненного цикла проекта - от концепции до строительства - чтобы превзойти ожидания. Эта приверженность прозрачности принесла Wishbone лояльную клиентскую базу, доверяющую фирме амбициозные замыслы",
            ".firm-content-desc-author-cred-name": "Стефен Колье",
            ".firm-content-desc-author-cred-position": "Старший партнер",
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
