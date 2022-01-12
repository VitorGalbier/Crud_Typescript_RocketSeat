import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid} from "uuid";

@Entity("categories") /*Colocar o nome da tabela */
export class Category{
    @PrimaryColumn() /*é minha chave primária */
    id: string;
    @Column() /*posso colocar dentro o que vai referenciar no BD */
    name: string;
    @Column()
    description: string;
    @CreateDateColumn()
    created_at: Date;

    constructor(){ /*vai verificar se o ID vai vim preenchido */
        if(!this.id) {
            this.id = uuid();
        }
    }
}