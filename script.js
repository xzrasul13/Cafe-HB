document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const mainNav = document.querySelector(".mainNav");

    if (burgerMenu && mainNav) {
        burgerMenu.addEventListener("click", () => {
            mainNav.classList.toggle("active");
            burgerMenu.classList.toggle("open");
        });
    }
});