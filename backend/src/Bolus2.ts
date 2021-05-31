import { Connection, getRepository } from "typeorm"
import { Bolus } from "./entity/Bolus"
import { User } from "./entity/User"

export const Bolus2 = async (Weight: string, Carbs: string, userID: number) => {
  const BolusRepo = getRepository(Bolus);

  let CalculationTime = new Date().toISOString();
  const userObject = await SelectUserById(userID);
  const bolus = BolusRepo.create({ weight: Weight, carbs: Carbs, calculationTime: CalculationTime, user: userObject })

  await BolusRepo.save(bolus).catch((err) => {
    console.log(err);
  });
  console.log("saved carbs: ", bolus.carbs, "saved weight: ", bolus.weight, " Time of calculation: ", bolus.calculationTime, " Username: ", bolus.user.username)
}

export const SelectUserById = async (Id: number): Promise<User> => {
  const UserRepo = getRepository(User);
  const UserData = await UserRepo.find({ where: { id: Id } }).catch((err) => {
    console.log(err);
    return false;
  });
  return UserData[0];
}

export const SelectAllCalculations = async () => {
  const BolusRepo = getRepository(Bolus);

  return await BolusRepo.find().catch((err) => {
    console.log(err);
    throw (err);
  });
}

export const SelectAllCalculationsFromUser = async (userID: number) => {
    const BolusRepo = getRepository(Bolus);
    const userObject = await SelectUserById(userID);

    return await BolusRepo.find({ where: { user: userObject } }).catch((err) => {
        console.log(err);
        throw (err);
    });
}
