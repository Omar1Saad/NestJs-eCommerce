import { Products } from "src/product/entities/product.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('product-images')
export class ProductImages{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    productId:number;

    @Column()
    imageUrl:string;

    @Column({ default:false })
    isPrimary:boolean

    @Column({ nullable:true })
    altText?:string

    @CreateDateColumn()
    createAt:Date;
    
    @UpdateDateColumn()
    updateAt:Date;

    @ManyToOne(()=>Products, (product)=>product.images)
    @JoinColumn({ name:'productId' })
    product:Products
}