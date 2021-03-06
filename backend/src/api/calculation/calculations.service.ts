/**
 * Data Model Interfaces
 */

 import "reflect-metadata";
import { createConnection } from "typeorm";
import { Bolus2, SelectAllCalculations, SelectAllCalculationsFromUser } from "../../Bolus2";
 import { BaseItem, Item } from "./calculation.interface";


/**\
 * Service Methods
 */
 let connection;
 connection = createConnection().catch(() => {
   setTimeout(() => {
     connection = createConnection();
   }, 10000)
 });

export const create = async (newItem: BaseItem): Promise<BaseItem> => {
    connection.then(async connection => {
        await Bolus2(newItem.weight, newItem.dailyDoseNumber, newItem.basalDoseNumber, newItem.carbDose, newItem.carbsDoseNumber, newItem.user.id).catch((err) => {console.log(err);});
    }).catch(error => console.log(error));
    return newItem;
};
export const selectall = async() => {
    return await SelectAllCalculations().catch(error => {
      console.log(error);
      throw(error)
  });
};

export const selectallFromUser = async (userId: number) => {
    return await SelectAllCalculationsFromUser(userId).catch(error => {
      console.log(error);
      throw (error)
  });
};
