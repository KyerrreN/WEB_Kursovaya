document.addEventListener("DOMContentLoaded", () => {
    // Initialize current language
    let currentLanguage;
    if (localStorage.getItem("lang") === null) {
        currentLanguage = "en";
    } else {
        currentLanguage = localStorage.getItem("lang");
    }

    const translations = {
        en: {
            "modal-header":
                "Here is your profile information. In case you forgot any of your credentials, you can always look them up here.",
            "modal-nickname": "Nickname",
            "modal-first-name": "First Name",
            "modal-last-name": "Last Name",
            "modal-patronymic": "Patronymic",
            "modal-phone": "Phone",
            "modal-birth": "Date Of Birth",
            "modal-pass": "Password",
            "modal-role": "Role",
        },
        ru: {
            "modal-header":
                "Здесь находятся ваши персональные данные. На случай если вы забыли учетные данные, вы всегда можете посмотреть их здесь.",
            "modal-nickname": "Никнейм",
            "modal-first-name": "Имя",
            "modal-last-name": "Фамилия",
            "modal-patronymic": "Отчество",
            "modal-phone": "Телефон",
            "modal-birth": "Дата рождения",
            "modal-pass": "Пароль",
            "modal-role": "Роль",
        },
    };
});
