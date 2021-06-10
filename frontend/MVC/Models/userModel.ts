export enum UserRole {PATIENT = "Patient", GP = "Gp"}

export class userModel {
    id: number;
    username: string;
    email: string;
    role: UserRole;
    created_at: Date;
    updated_at: Date;
}

class Bolus {
    weight: string;
    dailyDoseNumber:string;
    basalDoseNumber: string;
    carbDose: string;
    carbsDoseNumber: string;
    calculationDateTime: Date;
}

export class userWithBolus extends userModel {
    calculations: Bolus[];
}
