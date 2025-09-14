import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Patch,
    UseInterceptors
} from '@nestjs/common';
import { CategoryService } from './category.services';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('categories')
export class CategoriesController{
    constructor(private readonly userService: CategoryService){}
    
    @Post()
    @UseInterceptors(FileInterceptor('image',{
        storage:diskStorage({
            destination:'./uploads/categories',
            filename: (req, file, callback)=>{
                const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
                const ext = extname(file.originalname);
                callback(null, `${uniqueName}${ext}`); 
            }
        })
    }))
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
