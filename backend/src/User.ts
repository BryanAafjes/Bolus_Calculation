import { Connection, getRepository } from "typeorm"
import { User } from "./entity/User"
import { hashingHelper } from "./api/user/hashingHelper"

export const UserFunction = async (Username, Email, Password, Role, Created, Updated) => {
  const UserRepo = getRepository(User);
  const helper = new hashingHelper();
  Created = new Date().toISOString();
  Updated = new Date().toISOString();
  const hashedPassword = await helper.hashPassword(Password);

  const UserData = UserRepo.create({username: Username, email: Email, password: hashedPassword, role: Role, created_at: Created, updated_at: Updated})
  await UserRepo.save(UserData).catch((err) => {
      console.log(err);
  });

  console.log("username: ", UserData.username, "email: ", UserData.email, " password: ", UserData.password, " rol: ",UserData.role, " created: ",UserData.created_at, " updated: ",UserData.updated_at)
}

export const SelectUser = async (Email, Password) : Promise <Boolean> => {
  const UserRepo = getRepository(User);
  const helper = new hashingHelper();
  const UserData =  await UserRepo.find({where: {email: Email}}).catch((err) => {
    console.log(err);
    return false;
  });

  return await helper.verifyHash(UserData[0].password, Password);
}
