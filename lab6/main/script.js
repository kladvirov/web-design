document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.contact-btn');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    const burgerMenu = document.getElementById("burgerMenu");
    const navLinks = document.getElementById("navLinks");

    burgerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    contactBtn.addEventListener('click', () => {
        popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
