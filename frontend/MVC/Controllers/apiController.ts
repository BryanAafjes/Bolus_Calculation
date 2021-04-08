export class api {
    static async sendCalculationToAPI(weight: number, carbDose: number): Promise < boolean > {
        const date = new Date().toLocaleString();
        //console.log(date.toISOString());
        const json = JSON.stringify({"weight":weight,"carbDose":carbDose,"calculationDateTime":date});

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("timeout", "5000");

        const response = await fetch("http://localhost:8000/api/postcalculation", {
            method: 'POST',
            headers: myHeaders,
            body: json,
        });

        if (response.ok) {
            //console.log("Post created!")
            return true;
        } else {
            //console.log("Post failed!")
            return false;
        }
    }

    static async getCalculationFromApi() {
    
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Connection", "keep-alive");
        myHeaders.append("timeout", "5000");
        let res;
        //let data;
    
        const response = await fetch("http://localhost:8000/api/getcalculation", {
           method: 'GET',
           headers: myHeaders,
        });

        const data = await response.json().catch(error => console.log('ERROR'));
        console.log(data, "howdy");
        return data;
                
            
       /*await fetch("http://localhost:8000/api/getcalculation", {
            method: 'GET',
            headers: myHeaders,
            
        })
        .then(res => {
            if(res.ok)
            {
                console.log("SUCESS");
                res.json().then(data => {console.log(data); })
            } else {
                console.log("FAIL");
            }
            
                       
        })
        .catch(error => console.log('ERROR'))
        */
        
    }

    
}
