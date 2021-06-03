import "reflect-metadata";
import { createConnection } from "typeorm";
import { UserFunction, SelectUser, VerifyUserLogin, getGps, SelectUserById, SelectUsersFromGp } from "../../User";
import { UserItem, Item } from "./user.interface";

/* Service Methods*/

let connection;
connection = createConnection().catch(() => {
  setTimeout(() => {
    connection = createConnection();
  }, 10000)
});

export const create = async (newItem: UserItem): Promise<Boolean> => {
 let output = true;
 await connection.then(async connection => {
       output = await UserFunction(newItem.username, newItem.email, newItem.password, newItem.role, newItem.created_at, newItem.updated_at, newItem.gp);
   }).catch(err => console.log(err));
   return output;
 };

export const LoginUser = async(newItem: UserItem): Promise<UserItem> => {
   // const user = await SelectUser(newItem.email).catch(error => {
   //     console.log(error);
   //     throw(error)
   //   });
   return await VerifyUserLogin(newItem.email, newItem.password);
};

export const getAllGps = async() => {
  return await getGps();
}

export const selectUserWithId = async(newItem: Item): Promise<UserItem> => {
  // const user = await SelectUser(newItem.email).catch(error => {
  //     console.log(error);
  //     throw(error)
  //   });
  return await SelectUserById(newItem.id);
};

export const selectUsersFromGP = async(newItem: Item) => {
  return await SelectUsersFromGp(newItem.id);
}
