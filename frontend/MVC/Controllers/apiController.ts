export class api {
    static async sendCalculationToAPI(weight: number, carbDose: number): Promise < boolean > {
        const date = new Date;
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
}
