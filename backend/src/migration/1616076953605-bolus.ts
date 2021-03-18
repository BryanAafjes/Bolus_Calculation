import {MigrationInterface, QueryRunner} from "typeorm";

export class bolus1616076953605 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "bolus",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true
                },
                {
                    name: "weight",
                    type: "varchar",
                },
                {
                    name: "carbs",
                    type: "varchar",
                }
            ]
        }), true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

    }

}
