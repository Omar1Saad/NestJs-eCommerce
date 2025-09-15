import { Body, Controller, Delete, Get, MaxFileSizeValidator, Param, ParseFilePipe, Patch, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { CreateProductImageDto } from "./dto/create-productImage.dto";
import { UpdateProductImageDto } from "./dto/update-productImage.dto";
import { ProductImagesServices } from "./productImage.services";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { extname } from "path";



@Controller('product-image')
export class ProductImagesController{
    constructor(private readonly productImagesServices:ProductImagesServices){}

    @Post()
    @UseInterceptors(FileInterceptor('image',{
            storage:diskStorage({
                destination:'./uploads/productsImages',
                filename: (req, file, callback)=>{
                    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
                    const ext = extname(file.originalname);
                    callback(null, `${uniqueName}${ext}`); 
                }
            })
        }))
    createProductImage(
        @Body() createProductImageDto:CreateProductImageDto,
        @UploadedFile(
                new ParseFilePipe({
                    validators:[
                        new MaxFileSizeValidator({ maxSize:5 * 1024 *1024 }),
                    ],
                    fileIsRequired:true,
                })
            )
            image: Express.Multer.File,
        ){
        return this.productImagesServices.create(createProductImageDto, image)
    }

    @Get()
    getAll(){
        return this.productImagesServices.getAll()
    }

    @Get(':id')
    getById(@Param('id') id:number){
        return this.productImagesServices.getById(id)
    }

    @Patch(':id')
    @UseInterceptors(FileInterceptor('image',{
            storage:diskStorage({
                destination:'./uploads/productsImages',
                filename: (req, file, callback)=>{
                    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
                    const ext = extname(file.originalname);
                    callback(null, `${uniqueName}${ext}`); 
                }
            })
        }))
    update(@Param('id') id:number,
    @Body() updateProductImageDto:UpdateProductImageDto,
    image?:Express.Multer.File
){
    console.log(id, updateProductImageDto)
        return this.productImagesServices.update(id, updateProductImageDto)
    }

    @Delete(':id')
    delete(@Param('id') id:number){
        return this.productImagesServices.delete(id)
    }
}