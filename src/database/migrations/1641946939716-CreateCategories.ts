import { table } from "console";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1641946939716 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> { /*subir a migration*/ 
        await queryRunner.createTable(
            new Table({ /*criei a tabela*/
                name: "categories",
                columns: [
                    { /*criei uma coluna*/
                        name: "id",
                        type: "uuid", /*identificador único*/
                        isPrimary: true /*deixei como chave primária*/
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true /*não duplicar*/
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "created_at", /*histórico do horário de criação*/
                        type: "timestamp",
                        default: "now()" /*qual o valor a ser atribuido se não passar nada*/
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> { /*reverter a migration */
        await queryRunner.dropTable("categories")
    }

}
