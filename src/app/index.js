import '../style/main.scss';

let email = document.getElementById('mail');
let error = document.querySelector('.error');

email.addEventListener("focus", function (event) {
    error.innerHTML = "";
    error.className = "error";
    email.className = 'form-input'

}, true);

email.addEventListener("blur", function (event) {
    const email_input = email.value;

    if(!email_input.includes('@')){
        error.innerHTML = "Please enter a valid email address";
        error.className = "error active";
        email.className = 'form-input_error'
    }
}, true);
