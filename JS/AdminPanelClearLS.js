document.addEventListener("DOMContentLoaded", () => {
    const clearLocalButton = document.querySelector("#admin-intro-clear-local");

    clearLocalButton.addEventListener("click", () => {
        for (let i = localStorage.length - 1; i >= 0; i--) {
            if (!isNaN(Number(localStorage.key(i)))) {
                localStorage.removeItem(localStorage.key(i));
            }
        }

        localStorage.removeItem("Logged");
        alert("You will be redirected to the main page");
        window.location.href = "index.html";
    });
});
