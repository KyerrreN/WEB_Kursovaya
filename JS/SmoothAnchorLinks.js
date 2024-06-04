const anchorLinks = document.querySelectorAll('a[href^="#"]');

anchorLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        const hamMenu = document.querySelector(".ham-menu");
        const offScreenMenu = document.querySelector(".off-screen-menu");

        if (hamMenu.classList.contains("active")) {
            hamMenu.classList.toggle("active");
            offScreenMenu.classList.toggle("active");
            document.body.style.overflow = "auto";
        }
    });
});
