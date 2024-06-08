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
