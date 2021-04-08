/**
 * Data Model Interfaces
 */
 import { debug } from "console";
import "reflect-metadata";
 import {createConnection} from "typeorm";
 import {Bolus2, SelectAllCalculations} from "../bolus2";
 //import {BolusSelecter} from "../bolus2";
 import {Bolus} from "../entity/Bolus";

 import { BaseItem, Item } from "./calculation.interface";
 import { Items } from "./calculations.interface";

/**
 * Service Methods
 */
const connection = createConnection();

export const create = async (newItem: BaseItem): Promise<BaseItem> => {
    //console.log(newItem, "dit is een test");
    connection.then(async connection => {
        await Bolus2(newItem.weight, newItem.carbDose, newItem.calculationDateTime).catch((err) => {console.log(err);});
    }).catch(error => console.log(error));
   
    
    return newItem;
};

export const selectall = async() => {
       
    /*connection.then(async connection => {
        await SelectAllCalculations().catch(error => {
        console.log(error);
        throw(error)
      });  
         
    })*/
    return await SelectAllCalculations().catch(error => {
        console.log(error);
        throw(error)
      });
    
};


