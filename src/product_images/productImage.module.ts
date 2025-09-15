import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductImages } from "./entities/product_images.entity";
import { ProductImagesController } from "./productImage.controller";
import { ProductImagesServices } from "./productImage.services";
import { ProductsModule } from "src/product/product.module";



@Module({
    imports:[TypeOrmModule.forFeature([ProductImages]), ProductsModule],
    controllers:[ProductImagesController],
    providers:[ProductImagesServices],
})

export class ProductImagesModule{}