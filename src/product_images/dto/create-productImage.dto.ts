import { Type } from "class-transformer";
import { IsBoolean, IsInt, IsOptional, IsString } from "class-validator";


export class CreateProductImageDto{
    @Type(()=>Number)
    @IsInt()
    productId:number;

    @IsOptional()
    @IsBoolean()
    @Type(()=>Boolean)
    isPrimary?:boolean

    @IsOptional()
    @IsString()
    altText?:string
}