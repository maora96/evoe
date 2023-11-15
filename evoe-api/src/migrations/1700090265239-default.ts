import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1700090265239 implements MigrationInterface {
    name = 'Default1700090265239'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "cpf" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "birthdate" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ADD "bio" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "twitter" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "instagram" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "facebook" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "tiktok" text`);
        await queryRunner.query(`ALTER TABLE "users" ADD "website" text`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "website"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "tiktok"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "facebook"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "instagram"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "twitter"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "bio"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "birthdate"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cpf"`);
    }

}
