import { User } from "../../js/Controllers/userController.js";
import { userModel } from "../../js/Models/userModel.js";
import {cookieHelper} from "../Logic/cookieHelper.js"

const date = new Date();
const form: HTMLFormElement = document.querySelector("#loginForm");

form.onsubmit = (event) => {
    const formData = new FormData(form);
    event.preventDefault();
    const email = formData.get("email").toString(); //  Email validation
    const password = formData.get("password").toString(); // Password validation/Hashing
    const succeeded = User.VerifyUser(email, password);

    succeeded.then((result) => {
        if (result) {
            alert("Login succesfull!");
            //delete previous cookie
            const userId = cookieHelper.getCookie("id");
            cookieHelper.deleteCookie(userId);
            // Set it expire in 7 days
            date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));
            // Set it
            console.log(result.id, result.username);
            cookieHelper.setCookie("id", result.id);
            cookieHelper.setCookie("role", result.role);
        }
    }).catch(_ => alert("Credentials are not filled in or wrong"));
};