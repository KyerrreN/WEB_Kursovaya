document.addEventListener("DOMContentLoaded", () => {
    let inputElement = document.querySelector(".maps-socials-email-input");
    inputElement.placeholder = "Enter your message here";

    inputElement.addEventListener("input", () => {
        if (inputElement.value.trim() !== "") {
            inputElement.placeholder = "";
        } else {
            inputElement.placeholder = "Enter your message here";
        }
    });
});
