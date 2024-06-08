let projectsSlider = new Swiper(".swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    slidesPerView: 2,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlides: 1,
    loop: true,

    breakpoints: {
        1440: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 1,
        },
    },
});

document.addEventListener("DOMContentLoaded", () => {
    let sliderElements = document.querySelectorAll(".swiper-slide-container");
    let sliderElementsText = document.querySelectorAll(
        ".swiper-slide-container-text"
    );
    let jsonData;

    fetch("../JSON/Projects.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Fetch error: " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            jsonData = data;

            changeSliderElements();
        })
        .catch((error) =>
            console.error(
                "Error while fetching the data from local JSON file ",
                error
            )
        );

    function changeSliderElements() {
        let numbersOne = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let shuffledNumbers = shuffleElements(numbersOne);

        for (let i = 0; i < sliderElements.length; i++) {
            sliderElements[i].style.backgroundImage = `url(${
                jsonData[shuffledNumbers[i]].image
            })`;
            sliderElementsText[i].innerHTML = jsonData[shuffledNumbers[i]].text;
        }
    }

    function shuffleElements(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
});
