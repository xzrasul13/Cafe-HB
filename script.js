document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".mainNav");

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });
});