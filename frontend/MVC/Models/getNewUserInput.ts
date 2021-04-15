checkPassword() {
    return (<HTMLInputElement>document.getElementById("password")).value == (<HTMLInputElement>document.getElementById("passwordRepeat")).value;
}


const form: HTMLFormElement = document.querySelector("#registerForm");
form.onsubmit = () => {
    const formData = new FormData(form);
    if(checkPassword()){
        const username = formData.get("username");
        const password = formData.get("password");
        const email = formData.get("email");


    } else {
        return false;
    }
};