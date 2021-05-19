import { User } from "../../js/Controllers/userController.js";
var date = new Date();
var form = document.querySelector("#loginForm");
form.onsubmit = function (event) {
    var formData = new FormData(form);
    event.preventDefault();
    var email = formData.get("email").toString(); //  Email validation
    var password = formData.get("password").toString(); // Password validation/Hashing
    /*if(email.match("\b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}\b") && username.match("/^[^(|\\]~@0-9!%^&*=};:?><’)]*$/") && password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,15}")   die andere )*/
    /*{*/
    var succeeded = User.VerifyUser(email, password);
    /*}*/
    succeeded.then(function (result) {
        if (result) {
            alert("Login succesfull!");
            // Set it expire in 7 days
            date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
            // Set it
            document.cookie = "email= " + email + "; expires=" + date.toUTCString() + "; path=/";
        }
        else {
            alert("Username or password incorrect!");
        }
    });
};
