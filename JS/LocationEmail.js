document.addEventListener("DOMContentLoaded", () => {
    let inputElement = document.querySelector(".maps-socials-email-input");
    let placeholderMessage = changePlaceholderLanguage();
    const buttonToChangePlaceholder = document.querySelector(
        ".footer-content-text-button-language"
    );

    buttonToChangePlaceholder.addEventListener("click", () => {
        placeholderMessage = changePlaceholderLanguage();
    });

    inputElement.placeholder = placeholderMessage;

    inputElement.addEventListener("input", () => {
        if (inputElement.value.trim() !== "") {
            inputElement.placeholder = "";
        } else {
            inputElement.placeholder = changePlaceholderLanguage();
        }
    });
});

function changePlaceholderLanguage() {
    let placeholderMsg;

    if (
        localStorage.getItem("lang") === "en" ||
        localStorage.getItem("lang") === null
    ) {
        placeholderMsg = "Enter your email here";
    } else {
        placeholderMsg = "Здесь вводится адрес почты";
    }

    return placeholderMsg;
}
