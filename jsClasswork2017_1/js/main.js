
// Form validation

/* document.onload will not work !
See the http://stackoverflow.com/a/38517365/5450939
*/
window.onload = function() {
    loginForm.username.onchange = validateField;
    loginForm.email.onchange = validateField;
    // document.forms[0].addEventListener("submit", validateForm);

    let username = loginForm.username,
        email = loginForm.email,
        password = loginForm.password,
        confirm = loginForm.confirm;

};

function validateForm() {

    // validate fields
    for (let i = 0; document.forms[0].elements.length < i; i++) {
        let inValid = validateField(form.elements[i], form.elements[i].value);
    };

    // check for accordance
    if (password !== confirm) {
        inValid = true;
    }

    // message for user
    if (inValid) {
        alert("Please, check the form!");
    }

}

function validateField() {
    let namePattern = /^[a-zA-Z0-9_.-]{3,42}$/,
        emailPattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
        flag = false;

    // validation
    if (this.type == "text") {
        flag = namePattern.test(this.value);
    } else if (this.type == "email") {
        flag = emailPattern.test(this.value);
    };

    // highlighting
    if (flag) {
        this.className = "valid";
    } else {
        this.className = "invalid";
    }

    return flag;
};
