import { User } from "../../js/Controllers/userController.js";
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
        }
        else {
            alert("Username or password incorrect!");
        }
    });
};
