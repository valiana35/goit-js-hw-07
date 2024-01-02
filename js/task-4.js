'use strict';
const newForm = document.querySelector(".login-form");
newForm.addEventListener("submit", formSubmission);
function formSubmission(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === "" || password === "") {
        return alert('All form fields must be filled in');
    }
    console.log(`Email: ${email}, Password: ${password}`);
    form.reset();
}