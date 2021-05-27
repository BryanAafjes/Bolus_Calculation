import { EntityColumnNotFound } from "typeorm";
import { UserRole } from "../../entity/User";
import { Bolus } from "../../entity/Bolus";

export interface UserItem {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  created_at: Date;
  updated_at: Date;
  calculations: Bolus[];
}

export interface Item extends UserItem {
  id: number;
}