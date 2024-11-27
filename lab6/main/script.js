const contactBtn = document.querySelector('.contact-btn');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');

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
