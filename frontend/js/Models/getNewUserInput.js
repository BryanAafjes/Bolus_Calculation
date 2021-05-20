import { User } from "../../js/Controllers/userController.js";
function checkPassword() {
    return document.getElementById("password").value == document.getElementById("passwordRepeat").value;
}
var form = document.querySelector("#registerForm");
form.onsubmit = function () {
    var formData = new FormData(form);
    if (checkPassword()) {
        var username = formData.get("username").toString();
        var email = formData.get("email").toString();
        var password = formData.get("password").toString();
        var regexEmail = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-z]{2,}\b/;
        var regexUsername = /[a-zA-Z0-9\.\s]+/g;
        var regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (regexEmail.test(email) &&
            regexUsername.test(username) &&
            regexPassword.test(password)) {
            User.CreateNewUser(username, email, password, "Patient");
        }
        else {
            alert("Doesnt match regex");
        }
    }
    else {
        return false;
    }
};
