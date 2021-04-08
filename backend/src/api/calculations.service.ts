/**
 * Data Model Interfaces
 */

 import "reflect-metadata";
 import {createConnection} from "typeorm";
 import {Bolus2, SelectAllCalculations} from "../Bolus2";
 import { BaseItem, Item } from "./calculation.interface";

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
    return await SelectAllCalculations().catch(error => {
        console.log(error);
        throw(error)
      });
};
