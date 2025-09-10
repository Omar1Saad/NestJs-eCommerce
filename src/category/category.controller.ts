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

@Controller('user')
export class CategoriesController{
    constructor(private readonly userService: CategoryService){}
    
    @Post('/users')
    async create(@Body() createUserDto:CreateCategoryDto){
        return this.userService.create(createUserDto)
    }
    
    @Get('/users')
    async getAll(){
        return this.userService.getAll()
    }

    @Get('/users')
    async getById(@Query('id') id:number){
        return this.userService.getById(id)
    }

    @Patch('/users')
    async update(@Query('id') id:number, @Body() updateUserDto:UpdateCategoryDto){
        return this.userService.update(id, updateUserDto)
    }
    
    @Delete('/users')
    async delete(@Query('id') id:number){
        return this.userService.delate(id)
    }
}
