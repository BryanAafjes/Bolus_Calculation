import { User } from "../../entity/User";

export interface BaseItem {
  weight: string;
  dailyDoseNumber:string;
  basalDoseNumber: string;
  carbDose: string;
  carbsDoseNumber: string;
  calculationDateTime: Date;
  user: User;
}

export interface Item extends BaseItem {
  id: number;
}
