import { Injectable, ConflictException, NotFoundException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Products } from "./entities/product.entity";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";


@Injectable()
export class ProductService{
    constructor(
        @InjectRepository(Products)
        private readonly productRepository: Repository<Products>,
    ){}
    async create(createProductDto: CreateProductDto): Promise<Products> {
      const { name, description, price } = createProductDto;
      const existingProduct = await this.productRepository.findOne({ where: { name } });
      if (existingProduct) {
        throw new ConflictException('Product with this name already exists');
      }
      const product = this.productRepository.create({
        name,
        description,
        price,
      });
      return this.productRepository.save(product);
    }
    async getAll():Promise<{}>{
      return await this.productRepository.find()
    }

    async getById(id:number):Promise<Products>{
      const product = await this.productRepository.findOne({ where: { id } });
      if(!product){
        throw new Error("Product not found!")
      }      
      return product
    }

    async update(id:number, updateProductDto: UpdateProductDto): Promise<Products> {
      const { name, description, price } = updateProductDto;
      const product = await this.productRepository.findOne({ where: { id } });
      if(!product){
        throw new Error("Product not found!")
      }

      if(name){
        const existingProduct = await this.productRepository.findOne({ where: { name } });
        if (existingProduct) {
          throw new ConflictException('Product with this name already exists');
        }
      }

      product.name = name || product.name
      product.description = description || product.description
      product.price = price || product.price
      return this.productRepository.save(product);
    }

    async delate(id:number):Promise<{}>{
      const product = await this.productRepository.findOne({ where: { id } });
      if(!product){
        throw new NotFoundException("Product not found!")
      }
      await this.productRepository.delete(id)
      return {'message':'Deleted Product was Successfully!'}
    }
}


