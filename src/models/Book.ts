import {
    Entity, BaseEntity, PrimaryGeneratedColumn, Column 
} from "typeorm";

@Entity("books")
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn("uuid") id: string;

    @Column() title: string;

    @Column() author: string;
};

