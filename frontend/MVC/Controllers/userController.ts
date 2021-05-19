export class User {
    static async CreateNewUser(username: string, email: string, password: string, userRole: string) {
        const creationDate = new Date().toISOString();
        const updatedDate = new Date().toISOString();

        const json = JSON.stringify({"username":username, "email":email, "password":password, "userRole":userRole, "created_at":creationDate, "updated_at":updatedDate})

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("timeout", "5000");
        myHeaders.append("Accept", "*/*");
        event.preventDefault();
        try{
            const response = await fetch("http://localhost:8000/api/adduser", {
                method: 'POST',
                headers: myHeaders,
                body: json
            }).then(result => {if(result.status == 201){alert("User created")} else { alert("User already exists") }});
            //return response.ok;
        } catch(error){
            console.log(error);
        }

    }

    static async VerifyUser(email:string, password:string) : Promise<Boolean>
    {
        const json = JSON.stringify({"email":email, "password":password});

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("timeout", "5000");

        const response = await fetch("http://localhost:8000/api/loginuser", {
            method: 'POST',
            headers: myHeaders,
            body: json
        });

        let result = await response.text();

        return result == "true";
    }
}
