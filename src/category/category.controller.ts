import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
    Query,
    Patch
} from '@nestjs/common';
import { CategoryService } from './category.services';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController{
    constructor(private readonly userService: CategoryService){}
    
    @Post()
    async create(@Body() createUserDto:CreateCategoryDto){
        return this.userService.create(createUserDto)
    }
    
    @Get()
    async getAll(){
        return this.userService.getAll()
    }

    @Get(':id')
    async getById(@Param('id') id:number){
        return this.userService.getById(id)
    }

    @Patch(':id')
    async update(@Param('id') id:number, @Body() updateUserDto:UpdateCategoryDto){
        return this.userService.update(id, updateUserDto)
    }
    
    @Delete(':id')
    async delete(@Param('id') id:number){
        return this.userService.delate(id)
    }
}
