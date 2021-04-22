import { EntityColumnNotFound } from "typeorm";
import { UserRole } from "../../entity/User";

export interface UserItem {
    username: string;
    email: string;
    password: string;
    role: UserRole;
    created_at: Date;
    updated_at: Date;
  }
  export interface Item extends UserItem {
    id: number;
  }
