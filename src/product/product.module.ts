import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductService } from './product.services';
import { CategoriesController } from './product.controller';
import { Products } from './entities/product.entity';

@Module({
    imports:[TypeOrmModule.forFeature([Products])],
    controllers:[CategoriesController],
    providers:[ProductService],
})
export class ProductsModule {}