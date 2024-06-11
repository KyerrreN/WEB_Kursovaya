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
            const valueFromLS = localStorage.getItem(userId);
            localStorage.setItem("Logged", valueFromLS);

            if (
                localStorage.getItem("lang") === "en" ||
                localStorage.getItem("lang") === null
            ) {
                alert("You have succesfully logged in. Welcome, " + nickInput);
            } else {
                alert(
                    "Вход произведен успешно. Добро пожаловать, " + nickInput
                );
            }

            window.location.replace("index.html");
            return;
        }
    }

    if (
        localStorage.getItem("lang") === "en" ||
        localStorage.getItem("lang") === null
    ) {
        alert("Error: user doesnt exist");
    } else {
        alert("Ошибка: пользователя с такими данными не существует");
    }
});
