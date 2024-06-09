document.addEventListener("DOMContentLoaded", () => {
    let hamLogoutA = document.querySelector("#off-screen-menu-logout");
    let hamLoginA = document.querySelector("#off-screen-menu-login");
    let headerLogout = document.querySelector(".header-content-nav-logout");
    let headerLogin = document.querySelector(".header-content-nav-login");

    if (localStorage.getItem("Logged") !== null) {
        // for admin
        let splitUserData = JSON.parse(localStorage.getItem("Logged"));

        if (splitUserData.role === "admin") {
            let headerAdminPanel = document.querySelector(
                ".header-content-nav-admin"
            );
            let hamAdminPanel = document.querySelector("#ham-admin");
            let headerGetTemplate = document.querySelectorAll(
                ".header-content-nav-rectangle"
            );

            hamAdminPanel.style.display = "block";
            headerAdminPanel.style.display = "block";
            for (let i = 0; i < headerGetTemplate.length; i++) {
                headerGetTemplate[i].style.display = "none";
            }
        }
        hamLoginA.style.display = "none";
        headerLogin.style.display = "none";

        hamLogoutA.style.display = "block";
        headerLogout.style.display = "block";

        // add event listener for logging out from web page to ham/header
        headerLogout.addEventListener("click", () => {
            localStorage.removeItem("Logged");
        });

        hamLogoutA.addEventListener("click", () => {
            localStorage.removeItem("Logged");
        });
    } else {
        // switch login/logout
        hamLoginA.style.display = "block";
        headerLogin.style.display = "block";

        hamLogoutA.style.display = "none";
        headerLogout.style.display = "none";

        // hide anchor links from ham/header
        let hamProfilePic = document.querySelector("#off-screen-menu-profile");
        let headerProfilePic = document.querySelector(
            "#header-content-nav-profile"
        );
        let hamAdminPanel = document.querySelector("#ham-admin");
        let headerAdminPanel = document.querySelector(
            ".header-content-nav-admin"
        );
        hamProfilePic.style.display = "none";
        headerProfilePic.style.display = "none";
        hamAdminPanel.style.display = "none";
        headerAdminPanel.style.display = "none";
    }
});
