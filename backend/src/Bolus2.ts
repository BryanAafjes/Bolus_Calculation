import { getRepository } from "typeorm"
import { Bolus } from "./entity/Bolus"

export const Bolus2 = async (Weight, Carbs) => {
  const BolusRepo = getRepository(Bolus);
  const bolus = BolusRepo.create({weight: Weight, carbs: Carbs})
  await BolusRepo.save(bolus).catch((err) => {
      console.log(err);
  });
  console.log("saved carbs: ", bolus.carbs, "saved weight: ", bolus.weight)
}
