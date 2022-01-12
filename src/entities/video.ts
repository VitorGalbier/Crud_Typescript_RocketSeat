import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid} from "uuid";
import { Category } from "./category";

@Entity ("videos")
export class Video {
    @PrimaryColumn()
    id: String;

    @Column()
    name: String;

    @Column()
    description: String;

    @Column()
    category_id: String;

    @ManyToOne(() => Category)
    @JoinColumn({name: "category_id"})
    category: Category; 

    @Column
    duration: number;

}