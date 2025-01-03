// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Form Validation
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (name && email && message) {
        formMessage.textContent = "Thank you for contacting me! I will get back to you shortly.";
        formMessage.style.color = "green";
        form.reset();
    } else {
        formMessage.textContent = "Please fill out all fields.";
        formMessage.style.color = "red";
    }
});
