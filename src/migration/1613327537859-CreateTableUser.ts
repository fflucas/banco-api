import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTableUser1613327537859 implements MigrationInterface {
    name = 'CreateTableUser1613327537859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `cpf` varchar(11) NOT NULL, `password` varchar(255) NOT NULL, `phone_number` varchar(255) NOT NULL, `birthday` datetime NOT NULL, `created_at` datetime NOT NULL, UNIQUE INDEX `IDX_a6235b5ef0939d8deaad755fc8` (`cpf`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_a6235b5ef0939d8deaad755fc8` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
