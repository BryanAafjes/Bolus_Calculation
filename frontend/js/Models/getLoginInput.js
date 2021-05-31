import { User } from "../../js/Controllers/userController.js";
import { cookieHelper } from "../Logic/cookieHelper.js";
var date = new Date();
var form = document.querySelector("#loginForm");
form.onsubmit = function (event) {
    var formData = new FormData(form);
    event.preventDefault();
    var email = formData.get("email").toString(); //  Email validation
    var password = formData.get("password").toString(); // Password validation/Hashing
    var succeeded = User.VerifyUser(email, password);
    succeeded.then(function (result) {
        if (result) {
            alert("Login succesfull!");
            // Set it expire in 7 days
            date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
            // Set it
            console.log(result.id, result.username);
            cookieHelper.setCookie("id", result.id);
        }
    }).catch(function (_) { return alert("Credentials are not filled in or wrong"); });
};
