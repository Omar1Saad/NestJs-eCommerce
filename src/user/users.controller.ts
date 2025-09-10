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
import { UserService } from './users.services';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UsersController{
    constructor(private readonly userService: UserService){}
    
    @Post('/users')
    async create(@Body() createUserDto:CreateUserDto){
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
    async update(@Query('id') id:number, @Body() updateUserDto:UpdateUserDto){
        return this.userService.update(id, updateUserDto)
    }
    
    @Delete('/users')
    async delete(@Query('id') id:number){
        return this.userService.delate(id)
    }
}
