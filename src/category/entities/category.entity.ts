import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from 'typeorm'

@Entity('Categories')
export class Category{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    name:string;

    @Column()
    description:string;

    @CreateDateColumn()
    createAt:Date;
    
    @UpdateDateColumn()
    updateAt:Date;
}