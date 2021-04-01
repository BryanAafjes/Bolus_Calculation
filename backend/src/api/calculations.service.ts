/**
 * Data Model Interfaces
 */
 import "reflect-metadata";
 import {createConnection} from "typeorm";
 import {Bolus2} from "../bolus2";
 import {Bolus} from "../entity/Bolus";

 import { BaseItem, Item } from "./calculation.interface";
 import { Items } from "./calculations.interface";

/**
 * Service Methods
 */
const connection = createConnection();

export const create = async (newItem: BaseItem): Promise<BaseItem> => {
    connection.then(async connection => {
        await Bolus2(newItem.weight, newItem.carbDose, newItem.calculationDateTime).catch((err) => {console.log(err);});
    }).catch(error => console.log(error));

    return newItem;
};
