document.addEventListener("DOMContentLoaded", () => {
    function isEntryAllowed() {
        if (localStorage.getItem("Logged") === null) {
            return false;
        }

        const checkedUserData = JSON.parse(localStorage.getItem("Logged"));

        if (checkedUserData.role !== "admin") {
            return false;
        }

        return true;
    }

    if (!isEntryAllowed()) {
        window.location.href = "index.html";
    }
});
