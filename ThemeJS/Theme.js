function setTheme() {
    const elementsThemeFrame = document.querySelectorAll(".to-change-frame");
    const elementsThemeText = document.querySelectorAll(".to-change-text");
    const elementsHamMenu = document.querySelectorAll(".to-change-ham");
    const elementsLogo = document.querySelectorAll(".to-change-logo");
    const elementsButton = document.querySelectorAll(".to-change-button");
    const elementsLine = document.querySelectorAll(".to-change-line");

    for (const element of elementsThemeFrame) {
        element.classList.toggle("dark-theme-frame");
    }

    for (const element of elementsThemeText) {
        element.classList.toggle("dark-theme-text");
    }

    for (const element of elementsHamMenu) {
        element.classList.toggle("dark-theme-ham");
    }

    for (const element of elementsLogo) {
        element.classList.toggle("dark-theme-logo");
    }

    for (const element of elementsButton) {
        element.classList.toggle("dark-theme-button");
    }

    for (const element of elementsLine) {
        element.classList.toggle("dark-theme-line");
    }
}
function changeTheme() {
    setTheme();

    if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    //if local storage empty
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light");
    }

    //set baseline to dark if dark
    let currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
        setTheme();
    }

    //change theme on a button
    let buttonToChangeTheme = document.querySelector(
        ".footer-content-text-button-theme"
    );

    buttonToChangeTheme.addEventListener("click", () => {
        changeTheme();
    });
});
