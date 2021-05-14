/**
 * Data Model Interfaces
 */

 import "reflect-metadata";
 import { createConnection } from "typeorm";
 import { UserFunction, SelectUser, VerifyUserLogin } from "../../User";
 import { UserItem } from "./user.interface";

/**
 * Service Methods
 */
 let connection;
 connection = createConnection().catch(() => {
   setTimeout(() => {
     connection = createConnection();
   }, 10000)
 });

export const create = async (newItem: UserItem): Promise<Boolean> => {
  let output = true;
  await connection.then(async connection => {
        output = await UserFunction(newItem.username, newItem.email, newItem.password, newItem.role, newItem.created_at, newItem.updated_at);
    }).catch(err => console.log(err));
    return output;
  };

export const LoginUser = async(newItem: UserItem) => {
    // const user = await SelectUser(newItem.email).catch(error => {
    //     console.log(error);
    //     throw(error)
    //   });
    return await VerifyUserLogin(newItem.email, newItem.password);
};
