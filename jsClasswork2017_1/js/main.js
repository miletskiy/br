
// Form validation

/* document.onload will not work !
See the http://stackoverflow.com/a/38517365/5450939
*/
window.onload = function() {
    loginForm.username.onchange = nameValidate;
    loginForm.email.onchange = emailValidate;
    loginForm.password.onchange = passwordValidate;
    loginForm.addEventListener("submit", validateForm);
};

function validateForm(event) {

    let password = loginForm.password.value,
        confirm = loginForm.confirm.value,
        inValid;

    // validate fields
    for (let i = 0; i < loginForm.elements.length; i++) {
        let el = loginForm.elements[i];
        if ((el.type === "text") || (el.type === "email")) {
            inValid = !validateField(el);
        }
    };

    // check for accordance
    if (password !== confirm) {
        alert("Passwords didn't match. Please, check it!");
        event.preventDefault();
    }

    // message for user
    if (inValid) {
        alert("Please, correct the wrong fields!");
        event.preventDefault();
    }
}

function validateField(field) {
    let namePattern = /^[a-zA-Z0-9_.-]{3,42}$/,
        emailPattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
        flag = false;

    // validation
    if (field.type == "text") {
        flag = namePattern.test(field.value);
    } else if (field.type == "email") {
        flag = emailPattern.test(field.value);
    } else {
        return true;
    }

    // highlighting
    if (flag) {
        field.className = "valid";
    } else {
        field.className = "invalid";
    }

    return flag;
}

function nameValidate() {
    validateField(this);
}

function emailValidate() {
    validateField(this);
}

function passwordValidate() {

}
