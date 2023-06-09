import {Entity,Column,PrimaryGeneratedColumn,ManyToMany,JoinTable} from 'typeorm'
import { Category } from './category.entity';
@Entity({name:'item_tbl'})
    export class Item{
        @PrimaryGeneratedColumn()
        id:number;
        
        @Column({unique:true})
        name:string

        @Column()
        price:number

        @Column({default:null})
        createAt:Date

        @Column({default:null})
        updateAt: Date

        @ManyToMany(
            ()=> Category,
            {onDelete:'CASCADE',onUpdate:'CASCADE'}
        )
        @JoinTable()
        categories:Category[]
    }
