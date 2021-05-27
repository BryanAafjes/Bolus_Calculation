import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, ManyToOne} from "typeorm";
import {User} from "./User"

@Entity()
export class Bolus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weight: string;

    @Column()
    carbs: string;

    @Column()
    calculationTime: Date;

    @ManyToOne(type => User, user => user.calculations)
    user: User;
}
