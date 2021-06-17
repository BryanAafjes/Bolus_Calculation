import {userModel, userWithBolus} from '../Models/userModel';
import {cookieHelper} from '../Logic/cookieHelper';

export class User {
    static async CreateNewUser(username: string, email: string, password: string, userRole: string, gpId: string) {
        const creationDate = new Date().toISOString();
        const updatedDate = new Date().toISOString();

        const json = JSON.stringify({"username":username, "email":email, "password":password, "role":userRole, "gp": gpId, "created_at":creationDate, "updated_at":updatedDate})
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

    static async VerifyUser(email:string, password:string) : Promise<userModel>
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

        if(response.status == 201) {
            const data = await response.json().catch(error => console.log(error));
            let user: userModel = {
                id: data['id'],
                email:data['email'],
                username:data['username'],
                role:data['role'],
                created_at:data['created_at'],
                updated_at:data['updated_at']
            };
            console.log(user);
            return user;
        } else {
            throw(new Error('Something went wrong'))
        }
    }

    static async getGps(): Promise<Array<userModel>>{
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("timeout", "5000");

        const response = await fetch("http://localhost:8000/api/getgps", {
           method: 'GET',
           headers: myHeaders,
        });

        const data = await response.json().catch(error => console.log(error));
        console.log(data);
        return data;
    }

    static async GetPatientsFromGp(id: number): Promise<Array<userWithBolus>>
    {
        const json = JSON.stringify({"id":id});
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("timeout", "5000");

        const response = await fetch("http://localhost:8000/api/getpatientsfromgp", {
           method: 'POST',
           headers: myHeaders,
           body: json
        });

        const data = await response.json().catch(error => console.log(error));
        console.log(data);
        return data;
    }

    static async GetUserInfo(userId: number): Promise<userModel> {
        const json = JSON.stringify({ "id": userId });

        const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Connection", "keep-alive");
            myHeaders.append("timeout", "5000");

        const response = await fetch("http://localhost:8000/api/selectuser", {
            method: 'POST',
            headers: myHeaders,
            body: json
        });

        if (response.status == 201) {
            const data = await response.json().catch(error => console.log(error));
            let user: userModel = {
                id: data['id'],
                email: data['email'],
                username: data['username'],
                role: data['role'],
                created_at: data['created_at'],
                updated_at: data['updated_at']
            };
            console.log(user);
            return user;
        } else {
            throw (new Error('Something went wrong'))
        }
    }
}
