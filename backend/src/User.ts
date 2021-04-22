import { Connection, getRepository } from "typeorm"
import { User } from "./entity/User"

export const UserFunction = async (Username, Email, Password, Role, Created, Updated) => {
  const UserRepo = getRepository(User);

  const UserData = UserRepo.create({username: Username, email: Email, password: Password, role: Role, created_at: Created, updated_at: Updated})
  await UserRepo.save(UserData).catch((err) => {
      console.log(err);
  });

  console.log("username: ", UserData.username, "email: ", UserData.email, " password: ", UserData.password, " rol: ",UserData.role, " created: ",UserData.created_at, " updated: ",UserData.updated_at)
}

export const SelectUser = async () => {
  const UserRepo = getRepository(User);

  return await UserRepo.find().catch((err) => {
    console.log(err);
    throw(err);
  });
}
