document.addEventListener("DOMContentLoaded", () => {
    let paginationNumber = document.getElementsByClassName("pagination-number");
    let currentValue = 0;

    let paginationOne = document.getElementById("pagination-number-one");
    let paginationTwo = document.getElementById("pagination-number-two");
    let paginationThree = document.getElementById("pagination-number-three");
    let paginationFour = document.getElementById("pagination-number-four");

    function removeActiveLi() {
        for (num of paginationNumber) {
            num.classList.remove("active");
        }
    }

    paginationOne.addEventListener("click", () => {
        removeActiveLi();

        currentValue = 0;
        paginationNumber[currentValue].classList.add("active");
    });
    paginationTwo.addEventListener("click", () => {
        removeActiveLi();

        currentValue = 1;
        paginationNumber[currentValue].classList.add("active");
    });
    paginationThree.addEventListener("click", () => {
        removeActiveLi();

        currentValue = 2;
        paginationNumber[currentValue].classList.add("active");
    });
    paginationFour.addEventListener("click", () => {
        removeActiveLi();

        currentValue = 3;
        paginationNumber[currentValue].classList.add("active");
    });

    let paginationLeft = document.querySelector("#pagination-left");
    let paginationRight = document.querySelector("#pagination-right");

    paginationLeft.addEventListener("click", () => {
        if (currentValue > 0) {
            removeActiveLi();

            currentValue--;
            paginationNumber[currentValue].classList.add("active");
        }
    });

    paginationRight.addEventListener("click", () => {
        if (currentValue < 3) {
            removeActiveLi();

            currentValue++;
            paginationNumber[currentValue].classList.add("active");
        }
    });

    let paginationStart = document.querySelector("#pagination-start");
    let paginationEnd = document.querySelector("#pagination-end");

    paginationStart.addEventListener("click", () => {
        if (currentValue !== 0) {
            removeActiveLi();

            currentValue = 0;
            paginationNumber[currentValue].classList.add("active");
        }
    });

    paginationEnd.addEventListener("click", () => {
        if (currentValue !== 3) {
            removeActiveLi();

            currentValue = 3;
            paginationNumber[currentValue].classList.add("active");
        }
    });
});
