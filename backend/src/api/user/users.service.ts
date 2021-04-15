/**
 * Data Model Interfaces
 */

 import "reflect-metadata";
 import { createConnection } from "typeorm";
 import { UserFunction, SelectUser } from "../../User";
 import { UserItem, Item } from "./user.interface";

/**
 * Service Methods
 */
 let connection;
 connection = createConnection().catch(() => {
   setTimeout(() => {
     connection = createConnection();
   }, 10000)
 });

export const create = async (newItem: UserItem): Promise<UserItem> => {
    //console.log(newItem, "dit is een test");
    connection.then(async connection => {
        await UserFunction(newItem.username, newItem.email, newItem.password, newItem.role, newItem.created_at, newItem.updated_at).catch((err) => {console.log(err);});
    }).catch(error => console.log(error));
    return newItem;
};

export const selectUsers = async() => {
    return await SelectUser().catch(error => {
        console.log(error);
        throw(error)
      });
};
