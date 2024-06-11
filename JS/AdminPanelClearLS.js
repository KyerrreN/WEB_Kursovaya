document.addEventListener("DOMContentLoaded", () => {
    const clearLocalButton = document.querySelector("#admin-intro-clear-local");

    clearLocalButton.addEventListener("click", () => {
        localStorage.clear();

        alert("You will be redirected to the main page");
        window.location.href = "index.html";
    });
});
