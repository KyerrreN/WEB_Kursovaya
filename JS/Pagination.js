document.addEventListener("DOMContentLoaded", () => {
    let jsonPagination;

    let paginationNumber = document.getElementsByClassName("pagination-number");
    let currentValue = 0;

    let paginationOne = document.getElementById("pagination-number-one");
    let paginationTwo = document.getElementById("pagination-number-two");
    let paginationThree = document.getElementById("pagination-number-three");
    let paginationFour = document.getElementById("pagination-number-four");

    const contentHeader = document.querySelector(
        ".news-pagination-content-header"
    );
    const contentText = document.querySelector(".news-pagination-content-text");
    const contentBackground = document.querySelector(
        ".news-pagination-content"
    );

    function changeContentInPagination(index) {
        contentHeader.innerHTML = jsonPagination[index].header;
        contentText.innerHTML = jsonPagination[index].text;
        contentBackground.style.backgroundImage = `url(${jsonPagination[index].picture})`;
    }

    if (
        localStorage.getItem("lang") === "en" ||
        localStorage.getItem("lang") === null
    ) {
        fetch("../JSON/News.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Fetch error: " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                jsonPagination = data;
                changeContentInPagination(0);
            })
            .catch((error) =>
                console.error(
                    "Error while fetching the data from local JSON file ",
                    error
                )
            );
    } else {
        fetch("../JSON/NewsRU.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Fetch error: " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                jsonPagination = data;
                changeContentInPagination(0);
            })
            .catch((error) =>
                console.error(
                    "Error while fetching the data from local JSON file ",
                    error
                )
            );

        let elementsToChangeFont = [];
        elementsToChangeFont.push(
            document.querySelector(".news-pagination-content-header")
        );
        elementsToChangeFont.push(
            document.querySelector(".news-pagination-content-text")
        );

        for (let i = 0; i < elementsToChangeFont.length; i++) {
            elementsToChangeFont[i].style.fontFamily = "Roboto";
        }
    }

    function removeActiveLi() {
        for (num of paginationNumber) {
            num.classList.remove("active");
        }
    }
    paginationOne.addEventListener("click", () => {
        removeActiveLi();

        currentValue = 0;
        paginationNumber[currentValue].classList.add("active");
        changeContentInPagination(currentValue);
    });
    paginationTwo.addEventListener("click", () => {
        removeActiveLi();

        currentValue = 1;
        paginationNumber[currentValue].classList.add("active");
        changeContentInPagination(currentValue);
    });
    paginationThree.addEventListener("click", () => {
        removeActiveLi();

        currentValue = 2;
        paginationNumber[currentValue].classList.add("active");
        changeContentInPagination(currentValue);
    });
    paginationFour.addEventListener("click", () => {
        removeActiveLi();

        currentValue = 3;
        paginationNumber[currentValue].classList.add("active");
        changeContentInPagination(currentValue);
    });

    let paginationLeft = document.querySelector("#pagination-left");
    let paginationRight = document.querySelector("#pagination-right");

    paginationLeft.addEventListener("click", () => {
        if (currentValue > 0) {
            removeActiveLi();

            currentValue--;
            paginationNumber[currentValue].classList.add("active");
            changeContentInPagination(currentValue);
        }
    });

    paginationRight.addEventListener("click", () => {
        if (currentValue < 3) {
            removeActiveLi();

            currentValue++;
            paginationNumber[currentValue].classList.add("active");
            changeContentInPagination(currentValue);
        }
    });

    let paginationStart = document.querySelector("#pagination-start");
    let paginationEnd = document.querySelector("#pagination-end");

    paginationStart.addEventListener("click", () => {
        if (currentValue !== 0) {
            removeActiveLi();

            currentValue = 0;
            paginationNumber[currentValue].classList.add("active");
            changeContentInPagination(currentValue);
        }
    });

    paginationEnd.addEventListener("click", () => {
        if (currentValue !== 3) {
            removeActiveLi();

            currentValue = 3;
            paginationNumber[currentValue].classList.add("active");
            changeContentInPagination(currentValue);
        }
    });
});
