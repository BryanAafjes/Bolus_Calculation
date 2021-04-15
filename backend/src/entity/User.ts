import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

export enum UserRole {PATIENT = "Patient", GP = "Gp"}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: ["Patient", "Gp"],
        default: "Patient"
    })
    role: UserRole/* Idk of die [] erbij moet []*/
    @Column()
    created_at: Date;
    @Column()
    updated_at: Date;
}
