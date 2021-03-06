import { Connection, getRepository } from "typeorm"
import { User } from "./entity/User"
import { hashingHelper } from "./api/user/hashingHelper"

export const UserFunction = async (Username, Email, Password, Role, Created, Updated, gpId) => {
  const UserRepo = getRepository(User);
  const helper = new hashingHelper();
  Created = new Date().toISOString();
  Updated = new Date().toISOString();
  const hashedPassword = await helper.hashPassword(Password);
  //const selectedUser:User = await SelectUser(Email);

  if(await SelectUser(Email) != null)
  {
    console.log("Duplicate entry for email");
    return false;
  }

  let gp: any = await UserRepo.find({where: {id: gpId}}).catch((err) => {
    console.log(err)
  });

  let UserData = await UserRepo.create({username: Username, email: Email, password: hashedPassword, role: Role, created_at: Created, updated_at: Updated, gp: gp[0]})
  await UserRepo.save(UserData).catch((err) => {
      console.log(err);
  });
  console.log("username: ", UserData.username, "email: ", UserData.email, " password: ", UserData.password, " rol: ",UserData.role, " created: ",UserData.created_at, " updated: ",UserData.updated_at)
  return true;
}

export const SelectUser = async (Email) : Promise <User> => {
  const UserRepo = getRepository(User);
  const UserData =  await UserRepo.find({where: {email: Email}}).catch((err) => {
    console.log(err);
    return false;
  });
  return UserData[0];
}

export const VerifyUserLogin = async (email:string, Password:string) : Promise <User> => {
  const UserRepo = getRepository(User);
  const helper = new hashingHelper();
  const UserData = await SelectUser(email);
  if(await helper.verifyHash(UserData.password, Password)) {
    return UserData;
  } else {
    throw(new Error('Password doesnt match'));
  }
}

export const getGps = async () => {
  const UserRepo = getRepository(User);
  const UserData =  await UserRepo.find({where: {role: "GP"}}).catch((err) => {
    console.log(err);
    return false;
  });
  return UserData;
}

export const SelectUserById = async (Id: number) : Promise <User> => {
  const UserRepo = getRepository(User);
  const UserData =  await UserRepo.find({where: {id: Id}}).catch((err) => {
    console.log(err);

  });
  return UserData[0];
}

export const SelectUsersFromGp = async (gpId: number) : Promise <User[]> => {
  const UserRepo = getRepository(User);
  const UserData: any =  await UserRepo.find({where: {role: "Patient", gp: gpId}, relations: ["calculations"]}).catch((err) => {
    console.log(err);
  });
  return UserData;
}