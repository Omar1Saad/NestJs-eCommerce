import { Type } from "class-transformer";
import { IsBoolean, IsInt, IsOptional, IsString } from "class-validator";


export class CreateProductImageDto{
    @Type(()=>Number)
    @IsInt()
    productId:number;

    @Type(()=>Boolean)
    @IsOptional()
    @IsBoolean()
    isPrimary?:boolean

    @IsOptional()
    @IsString()
    altText?:string
}