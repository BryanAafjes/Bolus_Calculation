import { User } from "../../entity/User";

export interface BaseItem {
  weight: string;
  carbDose: string;
  calculationDateTime: Date;
  user: User;
}

export interface Item extends BaseItem {
  id: number;
}
