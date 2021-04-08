import { Connection, getRepository } from "typeorm"
import { Item } from "./api/calculation.interface";
import { Bolus } from "./entity/Bolus"


export const Bolus2 = async (Weight, Carbs, CalculationTime) => {
  const BolusRepo = getRepository(Bolus);
  
  const bolus = BolusRepo.create({weight: Weight, carbs: Carbs, calculationTime: CalculationTime})
  await BolusRepo.save(bolus).catch((err) => {
      console.log(err);
  });
  
  console.log("saved carbs: ", bolus.carbs, "saved weight: ", bolus.weight, " Time of calculation: ", bolus.calculationTime)
  
}
/*export const tester = async () => {
  
  let bolusList: Bolus[] = [];

  const BolusRepo = getRepository(Bolus);
  let bolussen: void | Bolus[] = await BolusRepo.find().catch((err) => {
    console.log(err);
  });
  //console.log(bolussen[1])
  //console.log(bolussen[1].weight)

  let bolussen2 = await BolusRepo.count().catch((err) => {
    console.log(err);
  });
  for (let i = 0; i < bolussen2; i++) {
    console.log("nummer", i);
    const bolus = BolusRepo.create({id: bolussen[i].id,weight: bolussen[i].weight, carbs: bolussen[i].carbs, calculationTime: bolussen[i].calculationTime})
    //console.log(bolus);
    bolusList.push(bolus);
  }

  console.log(bolusList);
}
export const BolusSelecter = async () => {
  let bolusList: Bolus[] = [];

  const BolusRepo = getRepository(Bolus);
  const bolussen = await BolusRepo.find().catch((err) => {
    console.log(err);
  });
  //console.log(bolussen);

  let bolussen2 = await BolusRepo.count().catch((err) => {
    console.log(err);
  });
  for (let i = 0; i < bolussen2; i++) {
    
    let bolus: Bolus = BolusRepo.create({id: bolussen[i].id,weight: bolussen[i].weight, carbs: bolussen[i].carbs, calculationTime: bolussen[i].calculationTime})
    
    bolusList.push(bolus);
  }

  //console.log(bolusList);

  return bolusList;
}*/
export const SelectAllCalculations = async () => {
  const BolusRepo = getRepository(Bolus);

  return await BolusRepo.find().catch((err) => {
    console.log(err);
    throw(err);
  });
}



