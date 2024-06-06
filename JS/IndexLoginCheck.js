document.addEventListener("DOMContentLoaded", () => {
    let hamLogoutA = document.querySelector("#off-screen-menu-logout");
    let hamLoginA = document.querySelector("#off-screen-menu-login");
    let headerLogout = document.querySelector(".header-content-nav-logout");
    let headerLogin = document.querySelector(".header-content-nav-login");

    if (localStorage.getItem("Logged") !== null) {
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

        // hide non-logged blocks
        let featuredProjects = document.querySelector("#projects-frame");
        let team = document.querySelector("#team-frame");
        let aboveFooter = document.querySelector("#above-footer-frame");

        featuredProjects.style.display = "none";
        team.style.display = "none";
        aboveFooter.style.display = "none";

        // hide anchor links from ham/header
        let hamProjects = document.querySelector("#ham-projects");
        let hamTeam = document.querySelector("#ham-team");
        let hamContact = document.querySelector("#ham-contact");
        let headerProjects = document.querySelector(
            ".header-content-nav-projects"
        );
        let headerTeam = document.querySelector(".header-content-nav-team");
        let headerContact = document.querySelector(
            ".header-content-nav-contact"
        );

        hamProjects.style.display = "none";
        hamTeam.style.display = "none";
        hamContact.style.display = "none";
        headerProjects.style.display = "none";
        headerTeam.style.display = "none";
        headerContact.style.display = "none";
    }
});
