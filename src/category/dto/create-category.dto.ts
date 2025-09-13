import {
    IsEmail,
    IsString,
} from 'class-validator'

export class CreateCategoryDto{
    @IsString()
    name:string;

    @IsString()
    description:string
};