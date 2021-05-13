import { User } from "../../js/Controllers/userController.js";

function checkPassword() {
    return (<HTMLInputElement>document.getElementById("password")).value == (<HTMLInputElement>document.getElementById("passwordRepeat")).value;
}

const form: HTMLFormElement = document.querySelector("#registerForm");
form.onsubmit = () => {
    const formData = new FormData(form);
    if(checkPassword()){
        const username = formData.get("username").toString();//  Username validation
        const email = formData.get("email").toString(); //  Email validation
        const password = formData.get("password").toString(); // Password validation/Hashing
        /*if(email.match("\b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}\b") && username.match("/^[^(|\\]~@0-9!%^&*=};:?><’)]*$/") && password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,15}")   die andere )*/
        /*{*/
            const kek:boolean = User.CreateNewUser(username, email, password, "Patient");
            if(!kek)
            {
                alert("Account is kapoet");
            }
            else
            {
                User.CreateNewUser(username, email, password, "Patient");
                alert("Account is aangemaakt");
            }
        /*}*/
    } else {
        return false;
    }
};
