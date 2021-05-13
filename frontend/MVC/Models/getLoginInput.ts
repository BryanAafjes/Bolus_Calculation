import { User } from "../../js/Controllers/userController.js";

const form: HTMLFormElement = document.querySelector("#loginForm");
form.onsubmit = (event) => {
    const formData = new FormData(form);
        event.preventDefault();
        const email = formData.get("email").toString(); //  Email validation
        const password = formData.get("password").toString(); // Password validation/Hashing
        /*if(email.match("\b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}\b") && username.match("/^[^(|\\]~@0-9!%^&*=};:?><’)]*$/") && password.match("^(?=.*[a-z])(?=.*[A-Z])(?=.*d).{8,15}")   die andere )*/
        /*{*/
            const succeeded = User.VerifyUser(email, password);
                              
        /*}*/
       succeeded.then((result)=>{
           if(result){
               alert("Login succesfull!");
           } else{
               alert("Username or password incorrect!");
           }
       }); 
 };
