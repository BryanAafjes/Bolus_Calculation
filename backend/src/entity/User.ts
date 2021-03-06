import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable, ManyToOne } from "typeorm";
import { Bolus } from "./Bolus";

export enum UserRole {PATIENT = "Patient", GP = "Gp"}

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({unique:true})
    email: string;

    @Column()
    password: string;

    @Column({
        type: "enum",
        enum: ["Patient", "Gp"],
        default: "Patient"
    })
    role: UserRole
    @Column()
    created_at: Date;
    @Column()
    updated_at: Date;

    @OneToMany(type => Bolus, bolus => bolus.user)
    calculations: Bolus[];

    @ManyToOne(() => User, user => user.gp, { nullable: true })
    gp: User;
}