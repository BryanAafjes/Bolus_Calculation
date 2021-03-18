import "reflect-metadata";
import {createConnection} from "typeorm";
import {Bolus} from "./entity/Bolus";

createConnection().then(async connection => {
    const bolus = new Bolus();
    bolus.weight = "90";
    bolus.carbs = "70";
    await connection.manager.save(bolus);
    console.log("Saved a new patiënt with weight: " + bolus.weight + " and carbs " + bolus.carbs);

    console.log("Here you can setup and run express/koa/any other framework.");

}).catch(error => console.log(error));
