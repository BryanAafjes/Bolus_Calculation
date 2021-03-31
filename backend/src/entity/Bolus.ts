import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Bolus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    weight: string;

    @Column()
    carbs: string;

    @Column()
    calculationTime: number;
}
