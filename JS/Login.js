const buttonToLogin = document.querySelector("#button-to-login");

buttonToLogin.addEventListener("click", () => {
    const nickInput = document.querySelector("#l-nickname").value;
    const passInput = document.querySelector("#l-pass").value;

    let nickname = document.querySelector("#r-nickname").value;
    const allUsers = {};

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (!isNaN(parseInt(key))) {
            const userData = JSON.parse(localStorage.getItem(key));
            allUsers[key] = userData;
        }
    }

    for (const userId in allUsers) {
        if (
            allUsers[userId].nickname === nickInput &&
            allUsers[userId].password === passInput
        ) {
            localStorage.setItem("Logged", nickInput);

            alert("You have succesfully logged in. Welcome, " + nickInput);
            window.location.replace("../index.html");
            return;
        }
    }

    alert("Error: invalid info");
});
