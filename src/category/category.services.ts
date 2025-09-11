import { Injectable, ConflictException, NotFoundException} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./entities/category.entity";
import { CreateCategoryDto } from "./dto/create-category.dto";
import { UpdateCategoryDto } from "./dto/update-category.dto";


@Injectable()
export class CategoryService{
    constructor(
        @InjectRepository(Category)
        private readonly categoryRepository: Repository<Category>,
    ){}
    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
      const { name, description } = createCategoryDto;
      const existingCategory = await this.categoryRepository.findOne({ where: { name } });
      if (existingCategory) {
        throw new ConflictException('Category with this name already exists');
      }
      const category = this.categoryRepository.create({
        name,
        description,
      });
      return this.categoryRepository.save(category);
    }
    async getAll():Promise<{}>{
      return await this.categoryRepository.find()
    }

    async getById(id:number):Promise<Category>{
      const category = await this.categoryRepository.findOne({ where: { id } });
      if(!category){
        throw new Error("Category not found!")
      }      
      return category
    }

    async update(id:number, updateCategoryDto: UpdateCategoryDto): Promise<Category> {
      const { name, description} = updateCategoryDto;
      const category = await this.categoryRepository.findOne({ where: { id } });
      if(!category){
        throw new Error("Category not found!")
      }

      if(name){
        const existingCategory = await this.categoryRepository.findOne({ where: { name } });
        if (existingCategory) {
          throw new ConflictException('Category with this name already exists');
        }
      }

      category.name = name || category.name
      category.description = description || category.description
      return this.categoryRepository.save(category);
    }

    async delate(id:number):Promise<{}>{
      const category = await this.categoryRepository.findOne({ where: { id } });
      if(!category){
        throw new NotFoundException("Category not found!")
      }
      await this.categoryRepository.delete(id)
      return {'message':'Deleted Category was Successfully!'}
    }
}


