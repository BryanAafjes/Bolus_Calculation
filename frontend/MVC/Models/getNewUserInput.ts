import { User } from "../../js/Controllers/userController.js";
import { Roles } from "../../js/Models/roles.js";

function checkPassword() {
    return ( < HTMLInputElement > document.getElementById("password")).value == ( < HTMLInputElement > document.getElementById("passwordRepeat")).value;
}

export async function fillGPList(){
    return await User.getGps();
    //var selector = <HTMLSelectElement>document.getElementById('gplist');
}

const form: HTMLFormElement = document.querySelector("#registerForm");
form.onsubmit = () => {
    const formData = new FormData(form);
    if (checkPassword()) {
        const username = formData.get("username").toString();
        const email = formData.get("email").toString();
        const password = formData.get("password").toString();
        const role = Roles[formData.get("role")];
        let gpId: string;
        if(role == Roles[1])
        {
           gpId = formData.get("gplist").toString();
        }
        const regexEmail = /\b[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-z]{2,}\b/;
        const regexUsername = /[a-zA-Z0-9\.\s]+/g;
        const regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
        if (regexEmail.test(email) &&
            regexUsername.test(username) &&
            regexPassword.test(password))
        {
            User.CreateNewUser(username, email, password, role.toString(), gpId);
        } else {
            alert("Doesnt match regex");
        }
    } else {
        alert("Passwords didn't match");
        return false;
    }
};