document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.contact-btn');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('close-btn');
    const burgerMenu = document.getElementById("burgerMenu");
    const navLinks = document.getElementById("navLinks");
    const feedbackForm = document.getElementById('feedbackForm');

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

    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(feedbackForm);

        fetch('https://getform.io/f/agddzrlb', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(response => {
            if (response.ok) {
                alert('Сообщение успешно отправлено!');
                feedbackForm.reset();
                popup.style.display = 'none';
            } else {
                alert('Произошла ошибка. Пожалуйста, попробуйте позже.');
            }
        })
        .catch(() => {
            alert('Произошла ошибка. Проверьте подключение к интернету.');
        });
    });
});