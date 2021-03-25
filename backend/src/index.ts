import "reflect-metadata";
import {createConnection} from "typeorm";
import { Bolus2 } from "./bolus2";
import {Bolus} from "./entity/Bolus";

createConnection().then(async connection => {
    /*const bolus = new Bolus();
    bolus.weight = "50";
    bolus.carbs = "70";
    await connection.manager.save(bolus);
    console.log("Saved a new patiënt with weight: " + bolus.weight + " and carbs " + bolus.carbs);*/

    await Bolus2(50, 50).catch((err) => { console.log(err);   });

}).catch(error => console.log(error));
