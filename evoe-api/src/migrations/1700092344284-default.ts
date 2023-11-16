import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1700092344284 implements MigrationInterface {
    name = 'Default1700092344284'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "profile_pic" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile_pic"`);
    }

}
