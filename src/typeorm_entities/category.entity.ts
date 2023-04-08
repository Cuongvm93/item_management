import {Entity,Column,PrimaryGeneratedColumn} from "typeorm"
@Entity({name:'category_tbl'})
export class Category{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    name:string

    @Column()
    description:string
}