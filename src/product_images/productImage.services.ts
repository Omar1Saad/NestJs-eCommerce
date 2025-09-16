import { Repository } from "typeorm";
import { ProductImages } from "./entities/product_images.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProductImageDto } from "./dto/create-productImage.dto";
import { ProductService } from "src/product/product.services";
import { UpdateProductImageDto } from "./dto/update-productImage.dto";

@Injectable()
export class ProductImagesServices{
    constructor(
        @InjectRepository(ProductImages)
        private readonly productImagesReop:Repository<ProductImages>,
        private readonly productServices:ProductService,
    ){}
    async create(
        createCategoryDto:CreateProductImageDto,
        image:Express.Multer.File,
    ):Promise<ProductImages>{
        const {productId, altText, isPrimary} = createCategoryDto
        const product = await this.productServices.getById(productId)
        if(!product) throw new NotFoundException('Product Not Found With This Image!')
        const productImage = this.productImagesReop.create({
            productId,
            imageUrl:`/uploads/productImages/${image ? image.filename:''}`,
            altText,
            isPrimary
        })
      return this.productImagesReop.save(productImage);
    }

    async getAll():Promise<ProductImages[]>{
        const productImages = await this.productImagesReop.find()
        return productImages
    }

    async getById(id:number):Promise<ProductImages>{
        const productImage = await this.productImagesReop.findOne({where:{id}})
        if(!productImage) throw new NotFoundException('Product Not Found With This Image!')
        
        return productImage
    }

    async update(
        id:number, 
        updateProductImageDto:UpdateProductImageDto,
        image?:Express.Multer.File):Promise<ProductImages>
    {
        const { productId, altText, isPrimary } = updateProductImageDto
        const productImage = await this.productImagesReop.findOne({where:{id}})

        if(productId){
            const product = await this.productServices.getById(productId)
            if(!product) throw new NotFoundException('Product Not Found With This Image!')
        }

        if(!productImage) throw new NotFoundException('Product Not Found With This Image!')        
        if(image){
            productImage.imageUrl =  `/uploads/productImages/${image ? image.filename:''}`
        }
        console.log(isPrimary)
        productImage.productId = productId || productImage.productId
        productImage.altText = altText || productImage.altText
        productImage.isPrimary = isPrimary ? true : productImage.isPrimary

        return this.productImagesReop.save(productImage)
    }

    async delete(id:number):Promise<{}>{
        const productImage = await this.productImagesReop.findOne({where:{id}})
        if(!productImage) throw new NotFoundException('Product Not Found With This Image!')
        await this.productImagesReop.delete(id)
        return {'message':'Deleted Product was Successfully!'}
    }
}