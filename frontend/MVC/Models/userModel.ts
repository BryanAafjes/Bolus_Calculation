export enum UserRole {PATIENT = "Patient", GP = "Gp"}

export class userModel {
    id: number;
    username: string;
    email: string;
    role: UserRole;
    created_at: Date;
    updated_at: Date;
}