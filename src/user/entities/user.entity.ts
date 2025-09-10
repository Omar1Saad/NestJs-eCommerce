import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

export enum UserRole{
    SUPER_ADMIN = 'SUPER_ADMIN',
    ADMIN = 'ADMIN',
    CUSTOMER = 'CUSTOMER',
}

@Entity('users')
export class User{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:100})
    name:string;

    @Column({unique:true})
    email:string;

    @Column({type:'enum', enum:UserRole, default: UserRole.CUSTOMER})
    role:string; // enum UserRole

    @Column()
    password:string;

    @CreateDateColumn()
    createAt:Date;
    
    @UpdateDateColumn()
    updateAt:Date;
};

