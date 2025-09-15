import { PartialType } from "@nestjs/mapped-types";
import { CreateProductImageDto } from "./create-productImage.dto";


export class UpdateProductImageDto extends PartialType(CreateProductImageDto){}