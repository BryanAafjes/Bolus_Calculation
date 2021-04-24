import { RegisterUser } from "../../js/Controllers/userController.js";
function checkPassword() {
    return document.getElementById("password").value == document.getElementById("passwordRepeat").value;
}
var form = document.querySelector("#registerForm");
form.onsubmit = function () {
    var formData = new FormData(form);
    if (checkPassword()) {
        var username = formData.get("username").toString(); //  Username validation
        var email = formData.get("email").toString(); //  Email validation
        var password = formData.get("password").toString(); // Password validation/Hashing
        /*if(email.match("\b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}\b") && username.match("/^[^(|\\]~@0-9!%^&*=};:?><’)]*$/") && password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,15}")   die andere )*/
        /*{*/
        RegisterUser.CreateNewUser(username, email, password, "Patient" /* Role van iets */);
        alert("Je bolle moeder, het werkt");
        /*}*/
    }
    else {
        return false;
    }
};
