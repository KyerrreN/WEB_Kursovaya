function getUsersFromLocalStorage() {
    let allUsers = {};

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (!isNaN(parseInt(key))) {
            const userData = JSON.parse(localStorage.getItem(key));
            allUsers[key] = userData;
        }
    }

    return allUsers;
}

function getKeysFromLocalStorage() {
    let keys = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (!isNaN(parseInt(key))) {
            keys.push(key);
        }
    }

    return keys;
}

document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.querySelector(".admin-table-body");

    function createTableRow(user) {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = user.nickname;
        row.appendChild(nameCell);

        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = user.firstName;
        row.appendChild(firstNameCell);

        const lastNameCell = document.createElement("td");
        lastNameCell.textContent = user.lastName;
        row.appendChild(lastNameCell);

        const patronymicCell = document.createElement("td");
        patronymicCell.textContent = user.patronymic;
        row.appendChild(patronymicCell);

        const passwordCell = document.createElement("td");
        passwordCell.textContent = user.password;
        row.appendChild(passwordCell);

        const phoneCell = document.createElement("td");
        phoneCell.textContent = user.phone;
        row.appendChild(phoneCell);

        const birthCell = document.createElement("td");
        birthCell.textContent = user.birth;
        row.appendChild(birthCell);

        const roleCell = document.createElement("td");
        roleCell.textContent = user.role;
        row.appendChild(roleCell);

        return row;
    }

    const allUsers = {};

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);

        if (!isNaN(parseInt(key))) {
            const userData = JSON.parse(localStorage.getItem(key));
            allUsers[key] = userData;
        }
    }

    for (const userId in allUsers) {
        const valueFromLS = localStorage.getItem(userId);

        const row = createTableRow(JSON.parse(valueFromLS));
        tableBody.appendChild(row);
    }
});
