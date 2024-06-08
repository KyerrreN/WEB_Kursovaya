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
    centeredSlides: true,
    initialSlides: 1,
    loop: true,
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
        for (let i = 0; i < sliderElements.length; i++) {
            // sliderElements[i].innerHTML = jsonData[i].text;
            sliderElements[
                i
            ].style.backgroundImage = `url(${jsonData[i].image})`;
            sliderElementsText[i].innerHTML = jsonData[i].text;
        }
    }
});
