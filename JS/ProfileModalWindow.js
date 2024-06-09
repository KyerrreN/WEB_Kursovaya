const profilePicHamEvent = document.querySelector("#off-screen-menu-profile");
const profilePicHeaderEvent = document.querySelector(
    "#header-content-nav-profile"
);
const modalClose = document.querySelector("#profile-close");

profilePicHamEvent.addEventListener("click", () => {
    const userValue = localStorage.getItem("Logged");

    if (userValue !== null) {
        // parse necessary data from local storage
        const userData = JSON.parse(userValue);

        // declare my divs to fill them out afterwards
        let divNickname = document.querySelector("#profile-content-nickname");
        let divFirstName = document.querySelector(
            "#profile-content-first-name"
        );
        let divLastName = document.querySelector("#profile-content-last-name");
        let divPatronymic = document.querySelector(
            "#profile-content-patronymic"
        );
        let divPhone = document.querySelector("#profile-content-phone");
        let divBirth = document.querySelector("#profile-content-birth");
        let divPassword = document.querySelector("#profile-content-password");
        let divRole = document.querySelector("#profile-content-role");

        // fill divs with content parsed from local storage
        divNickname.innerHTML = userData.nickname;
        divFirstName.innerHTML = userData.firstName;
        divLastName.innerHTML = userData.lastName;
        divPatronymic.innerHTML = userData.patronymic;
        divPhone.innerHTML = userData.phone;
        divBirth.innerHTML = userData.birth;
        divPassword.innerHTML = userData.password;
        divRole.innerHTML = userData.role;
    }

    const myModal = document.querySelector(".profile");
    myModal.style.opacity = 1;
    myModal.style.visibility = "visible";
    document.body.style.overflow = "hidden";
});

profilePicHeaderEvent.addEventListener("click", () => {
    const userValue = localStorage.getItem("Logged");

    if (userValue !== null) {
        // parse necessary data from local storage
        const userData = JSON.parse(userValue);

        // declare my divs to fill them out afterwards
        let divNickname = document.querySelector("#profile-content-nickname");
        let divFirstName = document.querySelector(
            "#profile-content-first-name"
        );
        let divLastName = document.querySelector("#profile-content-last-name");
        let divPatronymic = document.querySelector(
            "#profile-content-patronymic"
        );
        let divPhone = document.querySelector("#profile-content-phone");
        let divBirth = document.querySelector("#profile-content-birth");
        let divPassword = document.querySelector("#profile-content-password");
        let divRole = document.querySelector("#profile-content-role");

        // fill divs with content parsed from local storage
        divNickname.innerHTML = userData.nickname;
        divFirstName.innerHTML = userData.firstName;
        divLastName.innerHTML = userData.lastName;
        divPatronymic.innerHTML = userData.patronymic;
        divPhone.innerHTML = userData.phone;
        divBirth.innerHTML = userData.birth;
        divPassword.innerHTML = userData.password;
        divRole.innerHTML = userData.role;
    }

    const myModal = document.querySelector(".profile");
    myModal.style.opacity = 1;
    myModal.style.visibility = "visible";
    document.body.style.overflow = "hidden";
});

modalClose.addEventListener("click", () => {
    const myModal = document.querySelector(".profile");
    myModal.style.opacity = 0;
    myModal.style.visibility = "hidden";

    if (document.querySelector(".ham-menu.active") === null) {
        document.body.style.overflow = "auto";
    }
});
