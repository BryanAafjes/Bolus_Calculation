import { EntityColumnNotFound } from "typeorm";
import { User, UserRole } from "../../entity/User";
import { Bolus } from "../../entity/Bolus";

export interface UserItem {
  username: string;
  email: string;
  password: string;
  role: UserRole;
  created_at: Date;
  updated_at: Date;
  calculations: Bolus[];
  gp: User;
}

export interface Item extends UserItem {
  id: number;
}